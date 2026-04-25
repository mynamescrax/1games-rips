function unityFramework(_0x4c150b) {
  var _0x4c150b = typeof _0x4c150b !== "undefined" ? _0x4c150b : {};
  _0x4c150b.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x28355d(_0x286102, _0x216f73) {
    _0x1e49c0("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0x211f48(_0x286102, _0x216f73);
  }
  _0x4c150b.Pointer_stringify = _0x28355d;
  var _0x2b8e45 = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0x1da057 = _0xf1b425().match(new RegExp(_0x2b8e45));
  if (_0x1da057) {
    _0x4c150b.stackTraceRegExp = new RegExp(_0x2b8e45.replace("([^\\n]+)", _0x1da057[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  function _0x25a973(_0x281f35) {
    if (_0x40dc51) {
      return;
    }
    _0x40dc51 = true;
    _0x104575 = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x281f35 !== undefined) {
      _0x41fa06(_0x281f35);
      _0x5761f3(_0x281f35);
      _0x281f35 = JSON.stringify(_0x281f35);
    } else {
      _0x281f35 = "";
    }
    var _0x429fe0 = "abort(" + _0x281f35 + ") at " + _0x1711d5();
    if (_0x4c150b.abortHandler && _0x4c150b.abortHandler(_0x429fe0)) {
      return;
    }
    throw _0x429fe0;
  }
  _0x4c150b.SetFullscreen = function (_0x223a75) {
    if (typeof _0x47ce07 === "undefined" || !_0x47ce07) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x315133 === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x55a80c = _0x315133.canPerformEventHandlerRequests;
      _0x315133.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0x4c150b.ccall("SetFullscreen", null, ["number"], [_0x223a75]);
      _0x315133.canPerformEventHandlerRequests = _0x55a80c;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0x4c150b.preRun.push(function () {
      var _0x12490c = _0x4c150b.unityFileSystemInit || function () {
        _0x31cd57.mkdir("/idbfs");
        _0x31cd57.mount(_0x4eae17, {}, "/idbfs");
        _0x4c150b.addRunDependency("JS_FileSystem_Mount");
        _0x31cd57.syncfs(true, function (_0x3005a0) {
          if (_0x3005a0) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0x4c150b.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x12490c();
    });
  }
  var _0x424abb = [];
  var _0x3e1729 = false;
  var _0x22bf2e;
  var _0x1b7da0 = null;
  function _0x5b3919(_0x3b3e88) {
    var _0x5e2909 = Object.keys(_0x424abb);
    for (var _0x3e2280 = 0; _0x3e2280 < _0x5e2909.length; ++_0x3e2280) {
      var _0x921e8b = _0x424abb[_0x5e2909[_0x3e2280]];
      if (_0x921e8b.deviceId && _0x921e8b.deviceId == _0x3b3e88.deviceId) {
        return _0x921e8b;
      }
    }
    for (var _0x3e2280 = 0; _0x3e2280 < _0x5e2909.length; ++_0x3e2280) {
      var _0x921e8b = _0x424abb[_0x5e2909[_0x3e2280]];
      if (_0x921e8b == _0x3b3e88) {
        return _0x921e8b;
      }
    }
    for (var _0x3e2280 = 0; _0x3e2280 < _0x5e2909.length; ++_0x3e2280) {
      var _0x921e8b = _0x424abb[_0x5e2909[_0x3e2280]];
      if (_0x921e8b.label && _0x921e8b.label == _0x3b3e88.label) {
        return _0x921e8b;
      }
    }
    for (var _0x3e2280 = 0; _0x3e2280 < _0x5e2909.length; ++_0x3e2280) {
      var _0x921e8b = _0x424abb[_0x5e2909[_0x3e2280]];
      if (_0x921e8b.groupId && _0x921e8b.kind && _0x921e8b.groupId == _0x3b3e88.groupId && _0x921e8b.kind == _0x3b3e88.kind) {
        return _0x921e8b;
      }
    }
  }
  function _0x5b1144() {
    for (var _0x453932 = 0;; ++_0x453932) {
      if (!_0x424abb[_0x453932]) {
        return _0x453932;
      }
    }
  }
  function _0xa9085b(_0x3ba36a) {
    _0x22bf2e();
    _0x424abb = [];
    var _0x51ae85 = {};
    var _0x2631bb = [];
    _0x3ba36a.forEach(function (_0x41a971) {
      if (_0x41a971.kind === "videoinput") {
        var _0x5761dd = _0x5b3919(_0x41a971);
        if (_0x5761dd) {
          _0x51ae85[_0x5761dd.id] = _0x5761dd;
        } else {
          _0x2631bb.push(_0x41a971);
        }
      }
    });
    _0x424abb = _0x51ae85;
    _0x2631bb.forEach(function (_0x18f98f) {
      if (!_0x18f98f.id) {
        _0x18f98f.id = _0x5b1144();
        _0x18f98f.name = _0x18f98f.label || "Video input #" + (_0x18f98f.id + 1);
        _0x18f98f.isFrontFacing = _0x18f98f.name.toLowerCase().includes("front") || !_0x18f98f.name.toLowerCase().includes("front") && !_0x18f98f.name.toLowerCase().includes("back");
        _0x424abb[_0x18f98f.id] = _0x18f98f;
      }
    });
  }
  function _0x516b33() {
    if (!_0x424abb) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x4368ed) {
      _0xa9085b(_0x4368ed);
      _0x3e1729 = true;
    }).catch(function (_0x54899e) {
      console.warn("Unable to enumerate media devices: " + _0x54899e + "\nWebcams will not be available.");
      _0x4d8c16();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x516b33, 60000);
      _0x1e49c0("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0x4d8c16() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x516b33);
    }
    _0x424abb = null;
  }
  _0x4c150b.disableAccessToMediaDevices = _0x4d8c16;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0x4d8c16();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0x7a57e5("enumerateMediaDevices");
        _0x22bf2e = function () {
          if (_0x1b7da0 !== null) {
            clearTimeout(_0x1b7da0);
          }
          _0x4e20eb("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x22bf2e = function () {};
        };
        _0x516b33();
        _0x1b7da0 = setTimeout(_0x22bf2e, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x516b33);
      } catch (_0x557703) {
        console.warn("Unable to enumerate media devices: " + _0x557703);
        _0x4d8c16();
      }
    }, 0);
  }
  function _0x4b2a2f(_0x33df88, _0x2aa692, _0x59fda7) {
    var _0x2e361b = _0x3db22a(_0x2aa692);
    var _0x6a6af2 = _0x3db22a(_0x33df88);
    var _0x402156 = 0;
    try {
      if (_0x59fda7 === undefined) {
        _0x580fab(_0x6a6af2, _0x2e361b);
      } else if (typeof _0x59fda7 === "string") {
        _0x402156 = _0x3db22a(_0x59fda7);
        _0x3cba1b(_0x6a6af2, _0x2e361b, _0x402156);
      } else if (typeof _0x59fda7 === "number") {
        _0xff1ec8(_0x6a6af2, _0x2e361b, _0x59fda7);
      } else {
        throw "" + _0x59fda7 + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0xb102d5(_0x402156);
      _0xb102d5(_0x6a6af2);
      _0xb102d5(_0x2e361b);
    }
  }
  _0x4c150b.SendMessage = _0x4b2a2f;
  var _0x28ccd3 = {};
  var _0xd5a76c;
  for (_0xd5a76c in _0x4c150b) {
    if (_0x4c150b.hasOwnProperty(_0xd5a76c)) {
      _0x28ccd3[_0xd5a76c] = _0x4c150b[_0xd5a76c];
    }
  }
  var _0x49dac4 = [];
  var _0x30671f = "./this.program";
  function _0x511113(_0x32443d, _0x52888a) {
    throw _0x52888a;
  }
  var _0x9afde7 = false;
  var _0x6c617e = false;
  var _0x3315ff = false;
  var _0xfc35bc = false;
  _0x9afde7 = typeof window === "object";
  _0x6c617e = typeof importScripts === "function";
  _0x3315ff = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0xfc35bc = !_0x9afde7 && !_0x3315ff && !_0x6c617e;
  var _0x21434c = "";
  function _0x2b01a3(_0x2a677e) {
    if (_0x4c150b.locateFile) {
      return _0x4c150b.locateFile(_0x2a677e, _0x21434c);
    }
    return _0x21434c + _0x2a677e;
  }
  var _0x59b86d;
  var _0x266c6c;
  var _0x1a3873;
  var _0x1f00f4;
  var _0x3ecaec;
  var _0x84c9ef;
  if (_0x3315ff) {
    if (_0x6c617e) {
      _0x21434c = require("path").dirname(_0x21434c) + "/";
    } else {
      _0x21434c = __dirname + "/";
    }
    _0x59b86d = function _0xb72a1c(_0x27ab13, _0x23435e) {
      if (!_0x3ecaec) {
        _0x3ecaec = require("fs");
      }
      if (!_0x84c9ef) {
        _0x84c9ef = require("path");
      }
      _0x27ab13 = _0x84c9ef.normalize(_0x27ab13);
      return _0x3ecaec.readFileSync(_0x27ab13, _0x23435e ? null : "utf8");
    };
    _0x1a3873 = function _0x2e0dd5(_0x271e6a) {
      var _0x2c3e52 = _0x59b86d(_0x271e6a, true);
      if (!_0x2c3e52.buffer) {
        _0x2c3e52 = new Uint8Array(_0x2c3e52);
      }
      _0x2c6ead(_0x2c3e52.buffer);
      return _0x2c3e52;
    };
    if (process.argv.length > 1) {
      _0x30671f = process.argv[1].replace(/\\/g, "/");
    }
    _0x49dac4 = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0x4c150b;
    }
    process.on("uncaughtException", function (_0x1e2e91) {
      if (!(_0x1e2e91 instanceof _0x4240aa)) {
        throw _0x1e2e91;
      }
    });
    process.on("unhandledRejection", _0x25a973);
    _0x511113 = function (_0x5220e7) {
      process.exit(_0x5220e7);
    };
    _0x4c150b.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0xfc35bc) {
    if (typeof read != "undefined") {
      _0x59b86d = function _0x3bb36(_0x3dc776) {
        return read(_0x3dc776);
      };
    }
    _0x1a3873 = function _0x37183b(_0x3982ab) {
      var _0x84711f;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0x3982ab));
      }
      _0x84711f = read(_0x3982ab, "binary");
      _0x2c6ead(typeof _0x84711f === "object");
      return _0x84711f;
    };
    if (typeof scriptArgs != "undefined") {
      _0x49dac4 = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x49dac4 = arguments;
    }
    if (typeof quit === "function") {
      _0x511113 = function (_0x101ed0) {
        quit(_0x101ed0);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0x9afde7 || _0x6c617e) {
    if (_0x6c617e) {
      _0x21434c = "https://games.1games.io";
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x21434c = document.currentScript.src;
    }
    if (_0x21434c.indexOf("blob:") !== 0) {
      _0x21434c = _0x21434c.substr(0, _0x21434c.lastIndexOf("/") + 1);
    } else {
      _0x21434c = "";
    }
    {
      _0x59b86d = function (_0xb5be6a) {
        var _0x252694 = new XMLHttpRequest();
        _0x252694.open("GET", _0xb5be6a, false);
        _0x252694.send(null);
        return _0x252694.responseText;
      };
      if (_0x6c617e) {
        _0x1a3873 = function (_0x69d77d) {
          var _0x39f5cf = new XMLHttpRequest();
          _0x39f5cf.open("GET", _0x69d77d, false);
          _0x39f5cf.responseType = "arraybuffer";
          _0x39f5cf.send(null);
          return new Uint8Array(_0x39f5cf.response);
        };
      }
      _0x266c6c = function (_0x38c68c, _0x139449, _0x1e0da5) {
        var _0x93194b = new XMLHttpRequest();
        _0x93194b.open("GET", _0x38c68c, true);
        _0x93194b.responseType = "arraybuffer";
        _0x93194b.onload = function () {
          if (_0x93194b.status == 200 || _0x93194b.status == 0 && _0x93194b.response) {
            _0x139449(_0x93194b.response);
            return;
          }
          _0x1e0da5();
        };
        _0x93194b.onerror = _0x1e0da5;
        _0x93194b.send(null);
      };
    }
    _0x1f00f4 = function (_0x9ad6c7) {
      document.title = _0x9ad6c7;
    };
  } else {}
  var _0x41fa06 = _0x4c150b.print || console.log.bind(console);
  var _0x5761f3 = _0x4c150b.printErr || console.warn.bind(console);
  for (_0xd5a76c in _0x28ccd3) {
    if (_0x28ccd3.hasOwnProperty(_0xd5a76c)) {
      _0x4c150b[_0xd5a76c] = _0x28ccd3[_0xd5a76c];
    }
  }
  _0x28ccd3 = null;
  if (_0x4c150b.arguments) {
    _0x49dac4 = _0x4c150b.arguments;
  }
  if (_0x4c150b.thisProgram) {
    _0x30671f = _0x4c150b.thisProgram;
  }
  if (_0x4c150b.quit) {
    _0x511113 = _0x4c150b.quit;
  }
  var _0x176c8b = 16;
  function _0x12caa6(_0x5ae6c9, _0x20e8af) {
    if (!_0x20e8af) {
      _0x20e8af = _0x176c8b;
    }
    return Math.ceil(_0x5ae6c9 / _0x20e8af) * _0x20e8af;
  }
  function _0x1e49c0(_0x1dd495) {
    if (!_0x1e49c0.shown) {
      _0x1e49c0.shown = {};
    }
    if (!_0x1e49c0.shown[_0x1dd495]) {
      _0x1e49c0.shown[_0x1dd495] = 1;
      _0x5761f3(_0x1dd495);
    }
  }
  var _0x150234 = 0;
  function _0x58d587(_0x35184f) {
    _0x150234 = _0x35184f;
  }
  function _0x396fb2() {
    return _0x150234;
  }
  var _0x2a2c36;
  if (_0x4c150b.wasmBinary) {
    _0x2a2c36 = _0x4c150b.wasmBinary;
  }
  var _0x391f26 = _0x4c150b.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0x25a973("no native wasm support detected");
  }
  var _0x144208;
  var _0x40dc51 = false;
  var _0x104575;
  function _0x2c6ead(_0x4b4168, _0x4afec0) {
    if (!_0x4b4168) {
      _0x25a973("Assertion failed: " + _0x4afec0);
    }
  }
  function _0x237838(_0xc46092) {
    var _0x12d1da = _0x4c150b["_" + _0xc46092];
    _0x2c6ead(_0x12d1da, "Cannot call unknown function " + _0xc46092 + ", make sure it is exported");
    return _0x12d1da;
  }
  function _0x28e67b(_0x10e73f, _0x88d78, _0x1c8a33, _0x70d255, _0x1a23d1) {
    var _0x740c1b = {
      string: function (_0x431ec6) {
        var _0xe98fe4 = 0;
        if (_0x431ec6 !== null && _0x431ec6 !== undefined && _0x431ec6 !== 0) {
          var _0x3b9da3 = (_0x431ec6.length << 2) + 1;
          _0xe98fe4 = _0x932d25(_0x3b9da3);
          _0x156f83(_0x431ec6, _0xe98fe4, _0x3b9da3);
        }
        return _0xe98fe4;
      },
      array: function (_0x597a16) {
        var _0x52b5c3 = _0x932d25(_0x597a16.length);
        _0x37c79e(_0x597a16, _0x52b5c3);
        return _0x52b5c3;
      }
    };
    function _0x111206(_0x412c8b) {
      if (_0x88d78 === "string") {
        return _0x211f48(_0x412c8b);
      }
      if (_0x88d78 === "boolean") {
        return Boolean(_0x412c8b);
      }
      return _0x412c8b;
    }
    var _0x231e86 = _0x237838(_0x10e73f);
    var _0x5cbdb7 = [];
    var _0x5c2a9f = 0;
    if (_0x70d255) {
      for (var _0xb4484f = 0; _0xb4484f < _0x70d255.length; _0xb4484f++) {
        var _0x53599b = _0x740c1b[_0x1c8a33[_0xb4484f]];
        if (_0x53599b) {
          if (_0x5c2a9f === 0) {
            _0x5c2a9f = _0x50e49c();
          }
          _0x5cbdb7[_0xb4484f] = _0x53599b(_0x70d255[_0xb4484f]);
        } else {
          _0x5cbdb7[_0xb4484f] = _0x70d255[_0xb4484f];
        }
      }
    }
    var _0x17a611 = _0x231e86.apply(null, _0x5cbdb7);
    _0x17a611 = _0x111206(_0x17a611);
    if (_0x5c2a9f !== 0) {
      _0x229d9f(_0x5c2a9f);
    }
    return _0x17a611;
  }
  function _0x336b4f(_0x56da60, _0x21d6de, _0xdbb803, _0x5eea54) {
    _0xdbb803 = _0xdbb803 || [];
    var _0x59d9f2 = _0xdbb803.every(function (_0x2eb813) {
      return _0x2eb813 === "number";
    });
    var _0x47778f = _0x21d6de !== "string";
    if (_0x47778f && _0x59d9f2 && !_0x5eea54) {
      return _0x237838(_0x56da60);
    }
    return function () {
      return _0x28e67b(_0x56da60, _0x21d6de, _0xdbb803, arguments, _0x5eea54);
    };
  }
  var _0x399e6d = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0xed8485(_0x433704, _0x4d7366, _0x598bbf) {
    var _0x310082 = _0x4d7366 + _0x598bbf;
    var _0x2df116 = _0x4d7366;
    while (_0x433704[_0x2df116] && !(_0x2df116 >= _0x310082)) {
      ++_0x2df116;
    }
    if (_0x2df116 - _0x4d7366 > 16 && _0x433704.subarray && _0x399e6d) {
      return _0x399e6d.decode(_0x433704.subarray(_0x4d7366, _0x2df116));
    } else {
      var _0x4c9bf9 = "";
      while (_0x4d7366 < _0x2df116) {
        var _0x42970a = _0x433704[_0x4d7366++];
        if (!(_0x42970a & 128)) {
          _0x4c9bf9 += String.fromCharCode(_0x42970a);
          continue;
        }
        var _0x35bd21 = _0x433704[_0x4d7366++] & 63;
        if ((_0x42970a & 224) == 192) {
          _0x4c9bf9 += String.fromCharCode((_0x42970a & 31) << 6 | _0x35bd21);
          continue;
        }
        var _0x3a9350 = _0x433704[_0x4d7366++] & 63;
        if ((_0x42970a & 240) == 224) {
          _0x42970a = (_0x42970a & 15) << 12 | _0x35bd21 << 6 | _0x3a9350;
        } else {
          _0x42970a = (_0x42970a & 7) << 18 | _0x35bd21 << 12 | _0x3a9350 << 6 | _0x433704[_0x4d7366++] & 63;
        }
        if (_0x42970a < 65536) {
          _0x4c9bf9 += String.fromCharCode(_0x42970a);
        } else {
          var _0x1eb7d2 = _0x42970a - 65536;
          _0x4c9bf9 += String.fromCharCode(_0x1eb7d2 >> 10 | 55296, _0x1eb7d2 & 1023 | 56320);
        }
      }
    }
    return _0x4c9bf9;
  }
  function _0x211f48(_0x22efdc, _0x2166b5) {
    if (_0x22efdc) {
      return _0xed8485(_0x298c61, _0x22efdc, _0x2166b5);
    } else {
      return "";
    }
  }
  function _0x59dbc8(_0x25d15c, _0x56f444, _0x4580ae, _0x453858) {
    if (!(_0x453858 > 0)) {
      return 0;
    }
    var _0x361651 = _0x4580ae;
    var _0x151d32 = _0x4580ae + _0x453858 - 1;
    for (var _0x4c0168 = 0; _0x4c0168 < _0x25d15c.length; ++_0x4c0168) {
      var _0x41df4e = _0x25d15c.charCodeAt(_0x4c0168);
      if (_0x41df4e >= 55296 && _0x41df4e <= 57343) {
        var _0xe5e559 = _0x25d15c.charCodeAt(++_0x4c0168);
        _0x41df4e = 65536 + ((_0x41df4e & 1023) << 10) | _0xe5e559 & 1023;
      }
      if (_0x41df4e <= 127) {
        if (_0x4580ae >= _0x151d32) {
          break;
        }
        _0x56f444[_0x4580ae++] = _0x41df4e;
      } else if (_0x41df4e <= 2047) {
        if (_0x4580ae + 1 >= _0x151d32) {
          break;
        }
        _0x56f444[_0x4580ae++] = _0x41df4e >> 6 | 192;
        _0x56f444[_0x4580ae++] = _0x41df4e & 63 | 128;
      } else if (_0x41df4e <= 65535) {
        if (_0x4580ae + 2 >= _0x151d32) {
          break;
        }
        _0x56f444[_0x4580ae++] = _0x41df4e >> 12 | 224;
        _0x56f444[_0x4580ae++] = _0x41df4e >> 6 & 63 | 128;
        _0x56f444[_0x4580ae++] = _0x41df4e & 63 | 128;
      } else {
        if (_0x4580ae + 3 >= _0x151d32) {
          break;
        }
        _0x56f444[_0x4580ae++] = _0x41df4e >> 18 | 240;
        _0x56f444[_0x4580ae++] = _0x41df4e >> 12 & 63 | 128;
        _0x56f444[_0x4580ae++] = _0x41df4e >> 6 & 63 | 128;
        _0x56f444[_0x4580ae++] = _0x41df4e & 63 | 128;
      }
    }
    _0x56f444[_0x4580ae] = 0;
    return _0x4580ae - _0x361651;
  }
  function _0x156f83(_0x5b1169, _0x197c5b, _0x260ba1) {
    return _0x59dbc8(_0x5b1169, _0x298c61, _0x197c5b, _0x260ba1);
  }
  function _0x19d23e(_0x4ebedd) {
    var _0x32f288 = 0;
    for (var _0x727593 = 0; _0x727593 < _0x4ebedd.length; ++_0x727593) {
      var _0xca373f = _0x4ebedd.charCodeAt(_0x727593);
      if (_0xca373f >= 55296 && _0xca373f <= 57343) {
        _0xca373f = 65536 + ((_0xca373f & 1023) << 10) | _0x4ebedd.charCodeAt(++_0x727593) & 1023;
      }
      if (_0xca373f <= 127) {
        ++_0x32f288;
      } else if (_0xca373f <= 2047) {
        _0x32f288 += 2;
      } else if (_0xca373f <= 65535) {
        _0x32f288 += 3;
      } else {
        _0x32f288 += 4;
      }
    }
    return _0x32f288;
  }
  function _0x3d1452(_0x19018a) {
    var _0x123352 = _0x19d23e(_0x19018a) + 1;
    var _0x391d3f = _0x5d6d4a(_0x123352);
    if (_0x391d3f) {
      _0x59dbc8(_0x19018a, _0x381c0f, _0x391d3f, _0x123352);
    }
    return _0x391d3f;
  }
  function _0x6beff7(_0x2fae61) {
    var _0x4d429b = _0x19d23e(_0x2fae61) + 1;
    var _0x1ddad4 = _0x932d25(_0x4d429b);
    _0x59dbc8(_0x2fae61, _0x381c0f, _0x1ddad4, _0x4d429b);
    return _0x1ddad4;
  }
  function _0x37c79e(_0xd9d9a0, _0xcd3448) {
    _0x381c0f.set(_0xd9d9a0, _0xcd3448);
  }
  function _0x5d94a1(_0x5b5e44, _0x23edcf, _0x49a557) {
    for (var _0x48daa2 = 0; _0x48daa2 < _0x5b5e44.length; ++_0x48daa2) {
      _0x381c0f[_0x23edcf++ >> 0] = _0x5b5e44.charCodeAt(_0x48daa2);
    }
    if (!_0x49a557) {
      _0x381c0f[_0x23edcf >> 0] = 0;
    }
  }
  function _0x1ee042(_0x59bfb3, _0x30e309) {
    if (_0x59bfb3 % _0x30e309 > 0) {
      _0x59bfb3 += _0x30e309 - _0x59bfb3 % _0x30e309;
    }
    return _0x59bfb3;
  }
  var _0x19ef6f;
  var _0x381c0f;
  var _0x298c61;
  var _0x2a9dc6;
  var _0x22b5af;
  var _0x2beff6;
  var _0x36d14b;
  var _0x5277b0;
  var _0xfbcc55;
  function _0x4fcd7e(_0x226a43) {
    _0x19ef6f = _0x226a43;
    _0x4c150b.HEAP8 = _0x381c0f = new Int8Array(_0x226a43);
    _0x4c150b.HEAP16 = _0x2a9dc6 = new Int16Array(_0x226a43);
    _0x4c150b.HEAP32 = _0x2beff6 = new Int32Array(_0x226a43);
    _0x4c150b.HEAPU8 = _0x298c61 = new Uint8Array(_0x226a43);
    _0x4c150b.HEAPU16 = _0x22b5af = new Uint16Array(_0x226a43);
    _0x4c150b.HEAPU32 = _0x36d14b = new Uint32Array(_0x226a43);
    _0x4c150b.HEAPF32 = _0x5277b0 = new Float32Array(_0x226a43);
    _0x4c150b.HEAPF64 = _0xfbcc55 = new Float64Array(_0x226a43);
  }
  var _0x594d6c = _0x4c150b.INITIAL_MEMORY || 33554432;
  var _0x198494;
  var _0x28bacc = [];
  var _0x51dbbd = [];
  var _0xc22462 = [];
  var _0x1578c8 = [];
  var _0x4068e6 = [];
  var _0x47ce07 = false;
  var _0x3d11de = false;
  function _0x1a83d5() {
    if (_0x4c150b.preRun) {
      if (typeof _0x4c150b.preRun == "function") {
        _0x4c150b.preRun = [_0x4c150b.preRun];
      }
      while (_0x4c150b.preRun.length) {
        _0x2429ac(_0x4c150b.preRun.shift());
      }
    }
    _0x2929eb(_0x28bacc);
  }
  function _0x17c50f() {
    _0x47ce07 = true;
    if (!_0x4c150b.noFSInit && !_0x31cd57.init.initialized) {
      _0x31cd57.init();
    }
    _0x5f0478.init();
    _0x431c92.root = _0x31cd57.mount(_0x431c92, {}, null);
    _0x4b2abc.root = _0x31cd57.mount(_0x4b2abc, {}, null);
    _0x2929eb(_0x51dbbd);
  }
  function _0x52866d() {
    _0x31cd57.ignorePermissions = false;
    _0x2929eb(_0xc22462);
  }
  function _0x1520b7() {
    _0x3d11de = true;
  }
  function _0x243575() {
    if (_0x4c150b.postRun) {
      if (typeof _0x4c150b.postRun == "function") {
        _0x4c150b.postRun = [_0x4c150b.postRun];
      }
      while (_0x4c150b.postRun.length) {
        _0x548b14(_0x4c150b.postRun.shift());
      }
    }
    _0x2929eb(_0x4068e6);
  }
  function _0x2429ac(_0x390a98) {
    _0x28bacc.unshift(_0x390a98);
  }
  function _0xf389fd(_0x3bd752) {
    _0x51dbbd.unshift(_0x3bd752);
  }
  function _0x548b14(_0x3316a6) {
    _0x4068e6.unshift(_0x3316a6);
  }
  var _0x17db82 = 0;
  var _0x354e0a = null;
  var _0x1e57c9 = null;
  function _0xc7933a(_0x1d0739) {
    return _0x1d0739;
  }
  function _0x7a57e5(_0x15a398) {
    _0x17db82++;
    if (_0x4c150b.monitorRunDependencies) {
      _0x4c150b.monitorRunDependencies(_0x17db82);
    }
  }
  function _0x4e20eb(_0x138c44) {
    _0x17db82--;
    if (_0x4c150b.monitorRunDependencies) {
      _0x4c150b.monitorRunDependencies(_0x17db82);
    }
    if (_0x17db82 == 0) {
      if (_0x354e0a !== null) {
        clearInterval(_0x354e0a);
        _0x354e0a = null;
      }
      if (_0x1e57c9) {
        var _0x575001 = _0x1e57c9;
        _0x1e57c9 = null;
        _0x575001();
      }
    }
  }
  _0x4c150b.preloadedImages = {};
  _0x4c150b.preloadedAudios = {};
  function _0x25a973(_0xd2fea9) {
    if (_0x4c150b.onAbort) {
      _0x4c150b.onAbort(_0xd2fea9);
    }
    _0xd2fea9 += "";
    _0x5761f3(_0xd2fea9);
    _0x40dc51 = true;
    _0x104575 = 1;
    _0xd2fea9 = "abort(" + _0xd2fea9 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x54eef7 = new WebAssembly.RuntimeError(_0xd2fea9);
    throw _0x54eef7;
  }
  var _0x52aac1 = "data:application/octet-stream;base64,";
  function _0xd9f505(_0x418e5c) {
    return _0x418e5c.startsWith(_0x52aac1);
  }
  function _0x2d1b86(_0x54f594) {
    return _0x54f594.startsWith("file://");
  }
  var _0x519590 = "build.wasm";
  if (!_0xd9f505(_0x519590)) {
    _0x519590 = _0x2b01a3(_0x519590);
  }
  function _0x296d59(_0x6bb36b) {
    try {
      if (_0x6bb36b == _0x519590 && _0x2a2c36) {
        return new Uint8Array(_0x2a2c36);
      }
      if (_0x1a3873) {
        return _0x1a3873(_0x6bb36b);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x3be83d) {
      _0x25a973(_0x3be83d);
    }
  }
  function _0xa34513() {
    if (!_0x2a2c36 && (_0x9afde7 || _0x6c617e)) {
      if (typeof fetch === "function" && !_0x2d1b86(_0x519590)) {
        return fetch(_0x519590, {
          credentials: "same-origin"
        }).then(function (_0x498e70) {
          if (!_0x498e70.ok) {
            throw "failed to load wasm binary file at '" + _0x519590 + "'";
          }
          return _0x498e70.arrayBuffer();
        }).catch(function () {
          return _0x296d59(_0x519590);
        });
      } else if (_0x266c6c) {
        return new Promise(function (_0x37e10d, _0x354db6) {
          _0x266c6c(_0x519590, function (_0xcb0f2a) {
            _0x37e10d(new Uint8Array(_0xcb0f2a));
          }, _0x354db6);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0x296d59(_0x519590);
    });
  }
  function _0x24e38a() {
    var _0x45e779 = {
      a: _0x4a2d31
    };
    function _0x5ed2c6(_0x42349e, _0x21fbb4) {
      var _0x4078f8 = _0x42349e.exports;
      _0x4c150b.asm = _0x4078f8;
      _0x144208 = _0x4c150b.asm.hk;
      _0x4fcd7e(_0x144208.buffer);
      _0x198494 = _0x4c150b.asm.Hk;
      _0xf389fd(_0x4c150b.asm.ik);
      _0x4e20eb("wasm-instantiate");
    }
    _0x7a57e5("wasm-instantiate");
    function _0x3773b9(_0x160e24) {
      _0x5ed2c6(_0x160e24.instance);
    }
    function _0x8a26b9(_0x95139a) {
      return _0xa34513().then(function (_0x19f78f) {
        var _0x7f311c = WebAssembly.instantiate(_0x19f78f, _0x45e779);
        return _0x7f311c;
      }).then(_0x95139a, function (_0x5afbde) {
        _0x5761f3("failed to asynchronously prepare wasm: " + _0x5afbde);
        _0x25a973(_0x5afbde);
      });
    }
    function _0x951399() {
      if (!_0x2a2c36 && typeof WebAssembly.instantiateStreaming === "function" && !_0xd9f505(_0x519590) && !_0x2d1b86(_0x519590) && typeof fetch === "function") {
        return fetch(_0x519590, {
          credentials: "same-origin"
        }).then(function (_0x4ae1d9) {
          var _0xfb1598 = WebAssembly.instantiateStreaming(_0x4ae1d9, _0x45e779);
          return _0xfb1598.then(_0x3773b9, function (_0x18fa97) {
            _0x5761f3("wasm streaming compile failed: " + _0x18fa97);
            _0x5761f3("falling back to ArrayBuffer instantiation");
            return _0x8a26b9(_0x3773b9);
          });
        });
      } else {
        return _0x8a26b9(_0x3773b9);
      }
    }
    if (_0x4c150b.instantiateWasm) {
      try {
        var _0x556d21 = _0x4c150b.instantiateWasm(_0x45e779, _0x5ed2c6);
        return _0x556d21;
      } catch (_0x73eb42) {
        _0x5761f3("Module.instantiateWasm callback failed with error: " + _0x73eb42);
        return false;
      }
    }
    _0x951399();
    return {};
  }
  var _0x46766e;
  var _0x457bc9;
  var _0xac8e85 = {
    4891112: function () {
      return _0x4c150b.webglContextAttributes.premultipliedAlpha;
    },
    4891173: function () {
      return _0x4c150b.webglContextAttributes.preserveDrawingBuffer;
    },
    4891237: function () {
      return _0x4c150b.webglContextAttributes.powerPreference;
    }
  };
  function _0x2929eb(_0x11a98b) {
    while (_0x11a98b.length > 0) {
      var _0x5a2f0e = _0x11a98b.shift();
      if (typeof _0x5a2f0e == "function") {
        _0x5a2f0e(_0x4c150b);
        continue;
      }
      var _0x3a14f3 = _0x5a2f0e.func;
      if (typeof _0x3a14f3 === "number") {
        if (_0x5a2f0e.arg === undefined) {
          (function () {
            _0x24caf7.call(null, _0x3a14f3);
          })();
        } else {
          (function (_0x307cf1) {
            _0x1c7fce.apply(null, [_0x3a14f3, _0x307cf1]);
          })(_0x5a2f0e.arg);
        }
      } else {
        _0x3a14f3(_0x5a2f0e.arg === undefined ? null : _0x5a2f0e.arg);
      }
    }
  }
  function _0x5b11a2(_0x1bada6) {
    return _0x1bada6;
  }
  function _0x8ef5d5(_0x43c46b) {
    var _0x51a920 = /\b_Z[\w\d_]+/g;
    return _0x43c46b.replace(_0x51a920, function (_0x1b1a33) {
      var _0xf1be59 = _0x5b11a2(_0x1b1a33);
      if (_0x1b1a33 === _0xf1be59) {
        return _0x1b1a33;
      } else {
        return _0xf1be59 + " [" + _0x1b1a33 + "]";
      }
    });
  }
  function _0x3db858(_0x179de9, _0x344305, _0x12de9f) {
    var _0x17ead3 = _0x4c150b["dynCall_" + _0x179de9];
    if (_0x12de9f && _0x12de9f.length) {
      return _0x17ead3.apply(null, [_0x344305].concat(_0x12de9f));
    } else {
      return _0x17ead3.call(null, _0x344305);
    }
  }
  function _0x24f0db(_0xd125cd, _0x74181, _0x4aef65) {
    return _0x3db858(_0xd125cd, _0x74181, _0x4aef65);
  }
  function _0xf1b425() {
    var _0x18f5ef = new Error();
    if (!_0x18f5ef.stack) {
      try {
        throw new Error();
      } catch (_0x2b2773) {
        _0x18f5ef = _0x2b2773;
      }
      if (!_0x18f5ef.stack) {
        return "(no stack trace available)";
      }
    }
    return _0x18f5ef.stack.toString();
  }
  var _0x264ae2 = 0;
  function _0x410db3() {
    return _0x391f26 || _0x264ae2 > 0;
  }
  function _0x1711d5() {
    var _0x4c9230 = _0xf1b425();
    if (_0x4c150b.extraStackTrace) {
      _0x4c9230 += "\n" + _0x4c150b.extraStackTrace();
    }
    return _0x8ef5d5(_0x4c9230);
  }
  function _0x20d599(_0x4441a0, _0xc1048c, _0x505f10, _0x9d63a1, _0x197122) {
    var _0x12a984 = _0x211f48(_0x4441a0);
    var _0x22af22 = _0x211f48(_0xc1048c);
    var _0x5a433a = _0x211f48(_0x505f10);
    var _0x568d3 = _0x211f48(_0x9d63a1);
    var _0x1cdb49 = _0x211f48(_0x197122);
    try {
      firebase.firestore().collection(_0x12a984).add(JSON.parse(_0x22af22)).then(function (_0x2b9a1a) {
        window.unityInstance.SendMessage(_0x5a433a, _0x568d3, "Success: document added in collection " + _0x12a984);
      }).catch(function (_0x142581) {
        window.unityInstance.SendMessage(_0x5a433a, _0x1cdb49, JSON.stringify(_0x142581, Object.getOwnPropertyNames(_0x142581)));
      });
    } catch (_0x66b988) {
      window.unityInstance.SendMessage(_0x5a433a, _0x1cdb49, JSON.stringify(_0x66b988, Object.getOwnPropertyNames(_0x66b988)));
    }
  }
  function _0x295fed(_0x20b8f6, _0xf11ebd, _0x14d743, _0x4a91ac, _0xbb844a, _0x5e659c, _0x4633cf) {
    var _0x1023fa = _0x211f48(_0x20b8f6);
    var _0x2dfbb5 = _0x211f48(_0xf11ebd);
    var _0x5447ba = _0x211f48(_0x14d743);
    var _0x5c0ce2 = _0x211f48(_0x4a91ac);
    var _0x1c2cb9 = _0x211f48(_0xbb844a);
    var _0x99c022 = _0x211f48(_0x5e659c);
    var _0x595897 = _0x211f48(_0x4633cf);
    try {
      var _0x4a91ac = {};
      _0x4a91ac[_0x5447ba] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x5c0ce2));
      firebase.firestore().collection(_0x1023fa).doc(_0x2dfbb5).update(_0x4a91ac).then(function () {
        window.unityInstance.SendMessage(_0x1c2cb9, _0x99c022, "Success: element " + _0x5c0ce2 + " was added in " + _0x5447ba);
      }).catch(function (_0x2fc4ba) {
        window.unityInstance.SendMessage(_0x1c2cb9, _0x595897, JSON.stringify(_0x2fc4ba, Object.getOwnPropertyNames(_0x2fc4ba)));
      });
    } catch (_0x43f3bb) {
      window.unityInstance.SendMessage(_0x1c2cb9, _0x595897, JSON.stringify(_0x43f3bb, Object.getOwnPropertyNames(_0x43f3bb)));
    }
  }
  function _0x491871(_0x349682) {
    try {
      window.CrazyGames.SDK.user.addScore(_0x349682);
    } catch (_0x52c32b) {
      window.UnitySDK.logError("Error while calling addScore:", _0x52c32b);
    }
  }
  function _0x29ac01(_0xb1fc6d, _0x33b961) {
    try {
      window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0xb1fc6d), JSON.parse(window.unityStringify(_0x33b961)));
    } catch (_0x4c3f61) {
      window.UnitySDK.logError("Error while calling trackOrder:", _0x4c3f61);
    }
  }
  function _0x45f585(_0x484a2c) {
    const _0x145a69 = document.createElement("textarea");
    _0x145a69.value = window.unityStringify(_0x484a2c);
    document.body.appendChild(_0x145a69);
    _0x145a69.select();
    _0x145a69.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(_0x145a69);
  }
  function _0x4f83f7(_0x276939, _0x4c8602, _0x222a8f, _0x58e650, _0x1142a5) {
    var _0x4897a1 = _0x211f48(_0x276939);
    var _0x1aa7c0 = _0x211f48(_0x4c8602);
    var _0x549779 = _0x211f48(_0x222a8f);
    var _0x5091a0 = _0x211f48(_0x58e650);
    var _0x1c0802 = _0x211f48(_0x1142a5);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0x4897a1, _0x1aa7c0).then(function (_0x16632d) {
        window.unityInstance.SendMessage(_0x549779, _0x5091a0, "Success: signed up for " + _0x4897a1);
      }).catch(function (_0x4b76b1) {
        window.unityInstance.SendMessage(_0x549779, _0x1c0802, JSON.stringify(_0x4b76b1, Object.getOwnPropertyNames(_0x4b76b1)));
      });
    } catch (_0x240be4) {
      window.unityInstance.SendMessage(_0x549779, _0x1c0802, JSON.stringify(_0x240be4, Object.getOwnPropertyNames(_0x240be4)));
    }
  }
  function _0x58de0e() {
    try {
      window.CrazyGames.SDK.data.clear();
    } catch (_0x55cb35) {
      window.UnitySDK.logError("Error while calling clear:", _0x55cb35);
    }
  }
  function _0x290458(_0x131078) {
    var _0x117f60 = null;
    try {
      _0x117f60 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x131078));
    } catch (_0x272064) {
      window.UnitySDK.logError("Error while calling getItem:", _0x272064);
    }
    var _0x480e56 = _0x19d23e(_0x117f60 + "") + 1;
    var _0x2e3bff = _0x5d6d4a(_0x480e56);
    _0x156f83(_0x117f60, _0x2e3bff, _0x480e56);
    return _0x2e3bff;
  }
  function _0x12c3d6(_0x33d9dd) {
    var _0x139e39 = null;
    try {
      _0x139e39 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x33d9dd));
    } catch (_0x556c96) {
      window.UnitySDK.logError("Error while calling getItem:", _0x556c96);
    }
    return _0x139e39 !== null;
  }
  function _0x2e223c(_0x47607e) {
    try {
      window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x47607e));
    } catch (_0x29e4e1) {
      window.UnitySDK.logError("Error while calling removeItem:", _0x29e4e1);
    }
  }
  function _0x544504(_0x41c115, _0x389370) {
    try {
      window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x41c115), window.unityStringify(_0x389370));
    } catch (_0x289e0d) {
      window.UnitySDK.logError("Error while calling setItem:", _0x289e0d);
    }
  }
  function _0x1cd2e8(_0x510ccb, _0x40a117, _0x4632ab, _0x132d85, _0x349bfc) {
    var _0x218d66 = _0x211f48(_0x510ccb);
    var _0xfcad7a = _0x211f48(_0x40a117);
    var _0x3e1177 = _0x211f48(_0x4632ab);
    var _0x3c8d2d = _0x211f48(_0x132d85);
    var _0x37f34a = _0x211f48(_0x349bfc);
    try {
      firebase.firestore().collection(_0x218d66).doc(_0xfcad7a).delete().then(function () {
        window.unityInstance.SendMessage(_0x3e1177, _0x3c8d2d, "Success: document " + _0xfcad7a + " was deleted");
      }).catch(function (_0x3aab77) {
        window.unityInstance.SendMessage(_0x3e1177, _0x37f34a, JSON.stringify(_0x3aab77, Object.getOwnPropertyNames(_0x3aab77)));
      });
    } catch (_0x5569e8) {
      window.unityInstance.SendMessage(_0x3e1177, _0x37f34a, JSON.stringify(_0x5569e8, Object.getOwnPropertyNames(_0x5569e8)));
    }
  }
  function _0x4f348b(_0x162857, _0x3c7cae, _0x579b18, _0x10aa8b, _0x41917e, _0xfefe1d) {
    var _0x1c7122 = _0x211f48(_0x162857);
    var _0x3d7a3e = _0x211f48(_0x3c7cae);
    var _0x443db6 = _0x211f48(_0x579b18);
    var _0x1d4741 = _0x211f48(_0x10aa8b);
    var _0x2ac809 = _0x211f48(_0x41917e);
    var _0x5be384 = _0x211f48(_0xfefe1d);
    try {
      var _0x109b54 = {};
      _0x109b54[_0x443db6] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0x1c7122).doc(_0x3d7a3e).update(_0x109b54).then(function () {
        window.unityInstance.SendMessage(_0x1d4741, _0x2ac809, "Success: field " + _0x443db6 + " was deleted");
      }).catch(function (_0x5d7ba8) {
        window.unityInstance.SendMessage(_0x1d4741, _0x5be384, JSON.stringify(_0x5d7ba8, Object.getOwnPropertyNames(_0x5d7ba8)));
      });
    } catch (_0x5dedad) {
      window.unityInstance.SendMessage(_0x1d4741, _0x5be384, JSON.stringify(_0x5dedad, Object.getOwnPropertyNames(_0x5dedad)));
    }
  }
  function _0x15f4f1(_0x4ca2c3, _0x42c48c, _0x529f24, _0x3fd117) {
    var _0x40f984 = _0x211f48(_0x4ca2c3);
    var _0x528f15 = _0x211f48(_0x42c48c);
    var _0x31dd3e = _0x211f48(_0x529f24);
    var _0x3e0d5d = _0x211f48(_0x3fd117);
    try {
      firebase.database().ref(_0x40f984).remove().then(function (_0xd4ba4) {
        window.unityInstance.SendMessage(_0x528f15, _0x31dd3e, "Success: " + _0x40f984 + " was deleted");
      });
    } catch (_0x20f498) {
      window.unityInstance.SendMessage(_0x528f15, _0x3e0d5d, JSON.stringify(_0x20f498, Object.getOwnPropertyNames(_0x20f498)));
    }
  }
  function _0x1b69b7(_0x383e60, _0x4e4c01, _0x30eca2, _0x396b56) {
    var _0x802d4c = _0x211f48(_0x383e60);
    var _0x19cd47 = _0x211f48(_0x4e4c01);
    var _0x4821d0 = _0x211f48(_0x30eca2);
    var _0x4f31a4 = _0x211f48(_0x396b56);
    try {
      firebase.storage().ref(_0x802d4c).getDownloadURL().then(function (_0x201352) {
        var _0x3bb24b = new XMLHttpRequest();
        _0x3bb24b.responseType = "arraybuffer";
        _0x3bb24b.onload = function (_0x6b8907) {
          var _0x353f64 = _0x3bb24b.response;
          window.unityInstance.SendMessage(_0x19cd47, _0x4821d0, _0x98326e(_0x353f64));
        };
        _0x3bb24b.open("GET", _0x201352);
        _0x3bb24b.send();
      }).catch(function (_0x4b77fe) {
        window.unityInstance.SendMessage(_0x19cd47, _0x4f31a4, JSON.stringify(_0x4b77fe, Object.getOwnPropertyNames(_0x4b77fe)));
      });
    } catch (_0x3f4a24) {
      window.unityInstance.SendMessage(_0x19cd47, _0x4f31a4, JSON.stringify(_0x3f4a24, Object.getOwnPropertyNames(_0x3f4a24)));
    }
    function _0x98326e(_0x4ddb6f) {
      var _0x881445 = "";
      var _0x11a3d6 = new Uint8Array(_0x4ddb6f);
      var _0xadecfd = _0x11a3d6.byteLength;
      for (var _0x1302fe = 0; _0x1302fe < _0xadecfd; _0x1302fe++) {
        _0x881445 += String.fromCharCode(_0x11a3d6[_0x1302fe]);
      }
      return window.btoa(_0x881445);
    }
  }
  function _0x10169c() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0x4145a6) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x126bf1(_0x20841b) {
    var _0x250629 = {
      adStarted: function () {
        _0x4b2a2f("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        _0x4b2a2f("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      },
      adError: function (_0x4afd1d) {
        _0x4b2a2f("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x4afd1d));
      }
    };
    var _0x5ad43a = window.GMSOFT_GMADS_INFO.reward;
    var _0x4d32ff = _0x5ad43a[Math.floor(Math.random() * _0x5ad43a.length)];
    try {
      var _0x2ab41b = document.createElement("div");
      _0x2ab41b.id = "gm-ad-overlay";
      _0x2ab41b.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0x4e0425 = document.createElement("div");
      _0x4e0425.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x51a2ef = document.createElement("video");
      _0x51a2ef.src = _0x4d32ff.image;
      _0x51a2ef.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
      _0x51a2ef.autoplay = true;
      _0x51a2ef.muted = true;
      _0x51a2ef.preload = "auto";
      var _0x8ca364 = document.createElement("button");
      _0x8ca364.innerHTML = "Skip (5)";
      _0x8ca364.disabled = true;
      _0x8ca364.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
      _0x8ca364.disabled = true;
      _0x8ca364.style.opacity = "0.5";
      var _0x1fb47f = document.createElement("div");
      _0x1fb47f.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0x4403ec = document.createElement("div");
      _0x4403ec.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0x1c58bb = 5;
      var _0xf64ed8 = setInterval(function () {
        _0x1c58bb--;
        if (_0x1c58bb > 0) {
          _0x8ca364.innerHTML = "Skip (" + _0x1c58bb + ")";
        } else {
          _0x8ca364.innerHTML = "Skip";
          _0x8ca364.disabled = false;
          _0x8ca364.style.opacity = "1";
          _0x8ca364.style.cursor = "pointer";
          clearInterval(_0xf64ed8);
        }
      }, 1000);
      function _0x134f36() {
        if (_0x2ab41b && _0x2ab41b.parentNode) {
          _0x2ab41b.parentNode.removeChild(_0x2ab41b);
        }
        clearInterval(_0xf64ed8);
        _0x250629.adFinished();
      }
      function _0x3738dc() {
        window.open(_0x4d32ff.url, "_blank");
      }
      function _0xccabed() {
        if (_0x51a2ef.duration && _0x51a2ef.currentTime) {
          var _0x51fe8f = _0x51a2ef.currentTime / _0x51a2ef.duration * 100;
          _0x4403ec.style.width = _0x51fe8f + "%";
        }
      }
      _0x51a2ef.addEventListener("loadstart", function () {
        _0x250629.adStarted();
      });
      _0x51a2ef.addEventListener("timeupdate", function () {
        _0xccabed();
      });
      _0x51a2ef.addEventListener("ended", function () {
        _0x134f36();
      });
      _0x51a2ef.addEventListener("error", function (_0x3538ad) {
        var _0x2c2c6b = {
          message: "Video load error",
          code: _0x3538ad.target.error ? _0x3538ad.target.error.code : "unknown"
        };
        _0x250629.adError(_0x2c2c6b);
        _0x134f36();
      });
      _0x51a2ef.addEventListener("click", function () {
        _0x3738dc();
      });
      _0x8ca364.addEventListener("click", function () {
        if (!_0x8ca364.disabled) {
          _0x134f36();
        }
      });
      _0x51a2ef.addEventListener("contextmenu", function (_0x512d9b) {
        _0x512d9b.preventDefault();
      });
      _0x1fb47f.appendChild(_0x4403ec);
      _0x4e0425.appendChild(_0x51a2ef);
      _0x4e0425.appendChild(_0x8ca364);
      _0x4e0425.appendChild(_0x1fb47f);
      _0x2ab41b.appendChild(_0x4e0425);
      document.body.appendChild(_0x2ab41b);
      _0x51a2ef.play().catch(function (_0x400d52) {
        console.error("Video play error:", _0x400d52);
        _0x250629.adError({
          message: "Cannot play video",
          details: _0x400d52.message
        });
        _0x134f36();
      });
    } catch (_0x1f29d8) {
      console.error("Ad overlay creation error:", _0x1f29d8);
      _0x250629.adError({
        message: "Failed to create ad overlay",
        details: _0x1f29d8.message
      });
    }
  }
  function _0x50f7b9() {
    try {
      console.log("Check local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      if (window.GMSOFT_SIGNED) {
        console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
        _0x4b2a2f("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
        return;
      }
    } catch (_0x12ac8a) {
      console.error("Error getting GM_SDK_GetVeryfiedSignature  ", _0x12ac8a);
    }
    try {
      let _0x9fd32 = "hn=" + "https://games.1games.io";
      let _0x34a092 = btoa(_0x9fd32);
      let _0x22cf7f = "https://api.cdnwave.com/sdkdom/keysigned";
      if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
        _0x22cf7f = window.GMSOFT_OPTIONS.signedurl;
      }
      let _0x3fe014 = _0x22cf7f + "?params=" + _0x34a092;
      var _0x44d40e = new XMLHttpRequest();
      let _0x51e758 = "";
      _0x44d40e.open("GET", _0x3fe014, false);
      _0x44d40e.send(_0x51e758);
      let _0x56d8f5 = _0x44d40e.responseText;
      window.GMSOFT_SIGNED = _0x56d8f5;
      console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      _0x4b2a2f("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
    } catch (_0x3dd6d0) {
      console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x3dd6d0);
    }
  }
  function _0x3bb63f() {
    let _0x5881d8 = "https://games.1games.io";
    _0x4b2a2f("GmSoft", "SetUnityHostName", _0x5881d8);
    _0x4b2a2f("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
  }
  function _0xd8997d() {
    console.log("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x4b2a2f("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
      });
    } catch (_0x35a66a) {
      console.error("Error JS 12", _0x35a66a);
    }
    try {
      gmStartAds(function () {
        _0x4b2a2f("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
      });
    } catch (_0x17988a) {
      console.error("Error JS 20", _0x17988a);
    }
    try {
      document.addEventListener("gmsoftbanevent", _0x1e0ba5 => {
        _0x4b2a2f("GmSoft", "LockGame", _0x1e0ba5.detail);
      });
    } catch (_0x11221d) {
      console.error("Error JS 28", _0x11221d);
    }
  }
  function _0x4a6422(_0x3ab79e) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x3ab79e);
    } catch (_0x56a0d5) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x1b6095() {
    try {
      window.CrazyGames.SDK.game.gameplayStart();
    } catch (_0x501d41) {
      window.UnitySDK.logError("Error while calling gameplayStart:", _0x501d41);
    }
  }
  function _0x44ffe7() {
    try {
      window.CrazyGames.SDK.game.gameplayStop();
    } catch (_0x3f4585) {
      window.UnitySDK.logError("Error while calling gameplayStop:", _0x3f4585);
    }
  }
  function _0xf814c0() {
    var _0x5345a0 = firebaseConfig.projectId;
    var _0x31a389 = _0x19d23e(_0x5345a0) + 1;
    var _0x2d8d88 = _0x5d6d4a(_0x31a389);
    _0x156f83(_0x5345a0, _0x2d8d88, _0x31a389);
    return _0x2d8d88;
  }
  function _0x22cd83(_0x3ccf71, _0x22bc12, _0x3f5462, _0x875ba6, _0x85bedc) {
    var _0x2b6a29 = _0x211f48(_0x3ccf71);
    var _0xdca658 = _0x211f48(_0x22bc12);
    var _0x438b7d = _0x211f48(_0x3f5462);
    var _0x47b534 = _0x211f48(_0x875ba6);
    var _0x36b199 = _0x211f48(_0x85bedc);
    try {
      firebase.firestore().collection(_0x2b6a29).doc(_0xdca658).get().then(function (_0x5e0cdd) {
        if (_0x5e0cdd.exists) {
          window.unityInstance.SendMessage(_0x438b7d, _0x47b534, JSON.stringify(_0x5e0cdd.data()));
        } else {
          window.unityInstance.SendMessage(_0x438b7d, _0x47b534, "null");
        }
      }).catch(function (_0x5dcce0) {
        window.unityInstance.SendMessage(_0x438b7d, _0x36b199, JSON.stringify(_0x5dcce0, Object.getOwnPropertyNames(_0x5dcce0)));
      });
    } catch (_0xe07ea5) {
      window.unityInstance.SendMessage(_0x438b7d, _0x36b199, JSON.stringify(_0xe07ea5, Object.getOwnPropertyNames(_0xe07ea5)));
    }
  }
  function _0x459985(_0x367879, _0x51685c, _0x720c3e, _0x2bfdde) {
    var _0xabb41f = _0x211f48(_0x367879);
    var _0x343dae = _0x211f48(_0x51685c);
    var _0x26f9a3 = _0x211f48(_0x720c3e);
    var _0x2d418c = _0x211f48(_0x2bfdde);
    try {
      firebase.firestore().collection(_0xabb41f).get().then(function (_0x40e647) {
        var _0x592039 = {};
        _0x40e647.forEach(function (_0x248c52) {
          _0x592039[_0x248c52.id] = _0x248c52.data();
        });
        window.unityInstance.SendMessage(_0x343dae, _0x26f9a3, JSON.stringify(_0x592039));
      }).catch(function (_0x459b47) {
        window.unityInstance.SendMessage(_0x343dae, _0x2d418c, JSON.stringify(_0x459b47, Object.getOwnPropertyNames(_0x459b47)));
      });
    } catch (_0x5e6f0b) {
      window.unityInstance.SendMessage(_0x343dae, _0x2d418c, JSON.stringify(_0x5e6f0b, Object.getOwnPropertyNames(_0x5e6f0b)));
    }
  }
  function _0x2aad69() {
    var _0x18922c = window.CrazyGames.SDK.environment;
    var _0x5077fb = _0x19d23e(_0x18922c) + 1;
    var _0x3f58cc = _0x5d6d4a(_0x5077fb);
    _0x156f83(_0x18922c, _0x3f58cc, _0x5077fb);
    return _0x3f58cc;
  }
  function _0x102c20() {
    var _0x4d3859 = JSON.stringify(window.CrazyGames.SDK.game.settings);
    var _0x1acb84 = _0x19d23e(_0x4d3859) + 1;
    var _0x3ebdca = _0x5d6d4a(_0x1acb84);
    _0x156f83(_0x4d3859, _0x3ebdca, _0x1acb84);
    return _0x3ebdca;
  }
  function _0x562490(_0x53bca2) {
    var _0x398c81 = new URLSearchParams(window.location.search);
    var _0x3b0ff9 = _0x398c81.get(window.unityStringify(_0x53bca2));
    if (_0x3b0ff9 === null) {
      _0x3b0ff9 = "";
    }
    var _0x3ecc4d = _0x19d23e(_0x3b0ff9) + 1;
    var _0x2503b3 = _0x5d6d4a(_0x3ecc4d);
    _0x156f83(_0x3b0ff9, _0x2503b3, _0x3ecc4d);
    return _0x2503b3;
  }
  function _0x6a8d34() {
    return window.CrazyGames.SDK.isQaTool;
  }
  function _0x6b5691(_0xaa19d9, _0x5f1492, _0x2603c9, _0x695bef) {
    var _0xcc6ddb = _0x211f48(_0xaa19d9);
    var _0x18a981 = _0x211f48(_0x5f1492);
    var _0x56d393 = _0x211f48(_0x2603c9);
    var _0x424767 = _0x211f48(_0x695bef);
    try {
      firebase.database().ref(_0xcc6ddb).once("value").then(function (_0x53960c) {
        window.unityInstance.SendMessage(_0x18a981, _0x56d393, JSON.stringify(_0x53960c.val()));
      });
    } catch (_0x307aeb) {
      window.unityInstance.SendMessage(_0x18a981, _0x424767, JSON.stringify(_0x307aeb, Object.getOwnPropertyNames(_0x307aeb)));
    }
  }
  function _0x166b21() {
    var _0x4614ae = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
    var _0x27d848 = _0x19d23e(_0x4614ae) + 1;
    var _0x440df3 = _0x5d6d4a(_0x27d848);
    _0x156f83(_0x4614ae, _0x440df3, _0x27d848);
    return _0x440df3;
  }
  function _0x463b60() {
    window.CrazyGames.SDK.user.getUser().then(function (_0x195c23) {
      _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        userJson: JSON.stringify(_0x195c23)
      }));
    }).catch(function (_0x43d50a) {
      _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        errorJson: JSON.stringify(_0x43d50a)
      }));
    });
  }
  function _0x48cebe() {
    window.CrazyGames.SDK.user.getUserToken().then(function (_0x4e1244) {
      _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        token: _0x4e1244
      }));
    }).catch(function (_0x4fe6cc) {
      _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x4fe6cc)
      }));
    });
  }
  function _0x435aa6() {
    window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x43fbc0) {
      _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        token: _0x43fbc0
      }));
    }).catch(function (_0x84b2e3) {
      _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x84b2e3)
      }));
    });
  }
  function _0x3fad39() {}
  function _0xe976fa() {
    console.log("afg.ready: " + afg.ready);
    if (afg.ready) {
      _0x4b2a2f("H5Adverisement", "PreloadRewardedVideoCallback", 1);
      afg.adBreak({
        type: "reward",
        name: "reward ads",
        beforeReward: function (_0x36661f) {
          this._showRewardAdFn = _0x36661f;
          console.log("[H5 Ads] before reward");
        }.bind(this),
        adViewed: function () {
          this._showRewardAdFn = null;
          _0x4b2a2f("H5Adverisement", "RewardedVideoSuccessCallback");
          console.log("[H5 Ads] ad viewed");
        }.bind(this),
        adDismissed: function () {
          this._showRewardAdFn = null;
          _0x4b2a2f("H5Adverisement", "RewardedVideoFailureCallback");
          console.log("[H5 Ads] ad failure");
        }.bind(this),
        adBreakDone: function (_0x252c82) {
          console.log("[H5 Ads] Reward break done");
          _0x4b2a2f("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("[H5 Ads] no reward ads");
      _0x4b2a2f("H5Adverisement", "PreloadRewardedVideoCallback", 0);
    }
  }
  function _0x4138ca() {
    if (afg.ready) {
      afg.adBreak({
        type: "next",
        name: "next",
        beforeAd: function () {
          afg.onBeforeAd();
          console.log("[H5 Ads] Before ad");
          _0x4b2a2f("H5Adverisement", "PauseGameCallback");
        }.bind(this),
        adBreakDone: function () {
          console.log("[H5 Ads] Ad break done");
          _0x4b2a2f("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("no " + adType + " ads");
      _0x4b2a2f("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x267635() {
    if (this._showRewardAdFn) {
      _0x4b2a2f("H5Adverisement", "PauseGameCallback");
      this._showRewardAdFn();
    } else {
      _0x4b2a2f("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x2b4b1f() {
    try {
      window.CrazyGames.SDK.game.happytime();
    } catch (_0x3c5a1e) {
      window.UnitySDK.logError("Error while calling happytime:", _0x3c5a1e);
    }
  }
  function _0x52652c() {
    try {
      window.CrazyGames.SDK.game.hideInviteButton();
    } catch (_0x4388b4) {
      window.UnitySDK.logError("Error while calling hideInviteButton:", _0x4388b4);
    }
  }
  function _0x402d76(_0x183df0, _0x1f25b5, _0x5d30c3, _0x217b4e, _0x5d8544, _0x3c0c27, _0x2867c5) {
    var _0x24833a = _0x211f48(_0x183df0);
    var _0x694f77 = _0x211f48(_0x1f25b5);
    var _0x18ba02 = _0x211f48(_0x5d30c3);
    var _0x2bac76 = _0x211f48(_0x5d8544);
    var _0x4fa906 = _0x211f48(_0x3c0c27);
    var _0x564a89 = _0x211f48(_0x2867c5);
    try {
      var _0x357e20 = {};
      _0x357e20[_0x18ba02] = firebase.firestore.FieldValue.increment(_0x217b4e);
      firebase.firestore().collection(_0x24833a).doc(_0x694f77).update(_0x357e20).then(function () {
        window.unityInstance.SendMessage(_0x2bac76, _0x4fa906, "Success: incremented " + _0x18ba02 + " by " + _0x217b4e);
      }).catch(function (_0x3ce9bf) {
        window.unityInstance.SendMessage(_0x2bac76, _0x564a89, JSON.stringify(_0x3ce9bf, Object.getOwnPropertyNames(_0x3ce9bf)));
      });
    } catch (_0x5748da) {
      window.unityInstance.SendMessage(_0x2bac76, _0x564a89, JSON.stringify(_0x5748da, Object.getOwnPropertyNames(_0x5748da)));
    }
  }
  function _0x5278ce(_0x4dde34) {
    if (typeof _0x211f48 !== "undefined") {
      window.unityStringify = _0x211f48;
    } else {
      window.unityStringify = _0x211f48;
    }
    window.UnitySDK = {
      version: window.unityStringify(_0x4dde34),
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
        var _0x2eb4c4 = Array.prototype.slice.call(arguments);
        _0x2eb4c4.unshift("[JsLib]");
        console.error.apply(console, _0x2eb4c4);
      }
    };
    var _0x4f2577 = {
      wrapper: {
        engine: "unity",
        sdkVersion: window.unityStringify(_0x4dde34)
      }
    };
    var _0x2da7b9 = document.createElement("script");
    _0x2da7b9.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
    document.head.appendChild(_0x2da7b9);
    _0x2da7b9.addEventListener("load", function () {
      window.CrazyGames.SDK.init(_0x4f2577).then(function () {
        _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_Init");
        window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x12b2ec) {
          _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x12b2ec ? 1 : 0);
        }).catch(function (_0x4cd4fa) {
          window.UnitySDK.logError("Error while checking adblock:", _0x4cd4fa);
          _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        });
        window.CrazyGames.SDK.user.addAuthListener(function (_0x3fdd67) {
          _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
            userJson: JSON.stringify(_0x3fdd67)
          }));
        });
      });
    });
  }
  function _0x4574ff() {
    return window.CrazyGames.SDK.user.isUserAccountAvailable;
  }
  var _0x5935e8 = null;
  var _0xb59d17 = 0;
  function _0x54e0ce() {
    return _0x5935e8 && _0x5935e8.activated || _0xb59d17 != 0;
  }
  var _0x244b15 = 1;
  var _0x1a0190 = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0x52e577() {
    _0x1a0190 = {
      x: _0x5935e8.x * _0x244b15,
      y: _0x5935e8.y * _0x244b15,
      z: _0x5935e8.z * _0x244b15
    };
    if (_0xb59d17 != 0) {
      _0x4eac37(_0xb59d17, _0x1a0190.x, _0x1a0190.y, _0x1a0190.z);
    }
  }
  var _0x431330 = 0;
  var _0x3c58d1 = 0;
  var _0x90691c = 0;
  var _0x1b1fa2 = 0;
  var _0xe74c51 = 0;
  function _0x3a4486(_0x19815d, _0x41fe8e) {
    var _0x2e7c96 = {
      x: _0x19815d.x - _0x41fe8e.x,
      y: _0x19815d.y - _0x41fe8e.y,
      z: _0x19815d.z - _0x41fe8e.z
    };
    var _0x35a481 = _0x2e7c96.x * _0x2e7c96.x + _0x2e7c96.y * _0x2e7c96.y + _0x2e7c96.z * _0x2e7c96.z;
    var _0x2f737a = {
      x: _0x19815d.x + _0x41fe8e.x,
      y: _0x19815d.y + _0x41fe8e.y,
      z: _0x19815d.z + _0x41fe8e.z
    };
    var _0x33da29 = _0x2f737a.x * _0x2f737a.x + _0x2f737a.y * _0x2f737a.y + _0x2f737a.z * _0x2f737a.z;
    if (_0x35a481 <= _0x33da29) {
      return _0x2e7c96;
    } else {
      return _0x2f737a;
    }
  }
  function _0x2a395a(_0x2eae19) {
    var _0x38b67a = {
      x: _0x2eae19.accelerationIncludingGravity.x * _0x244b15,
      y: _0x2eae19.accelerationIncludingGravity.y * _0x244b15,
      z: _0x2eae19.accelerationIncludingGravity.z * _0x244b15
    };
    if (_0xb59d17 != 0) {
      _0x4eac37(_0xb59d17, _0x38b67a.x, _0x38b67a.y, _0x38b67a.z);
    }
    var _0x509f4d = {
      x: _0x2eae19.acceleration.x * _0x244b15,
      y: _0x2eae19.acceleration.y * _0x244b15,
      z: _0x2eae19.acceleration.z * _0x244b15
    };
    if (_0x90691c != 0) {
      _0x4eac37(_0x90691c, _0x509f4d.x, _0x509f4d.y, _0x509f4d.z);
    }
    if (_0x1b1fa2 != 0) {
      var _0x5d425f = _0x3a4486(_0x38b67a, _0x509f4d);
      _0x4eac37(_0x1b1fa2, _0x5d425f.x, _0x5d425f.y, _0x5d425f.z);
    }
    if (_0xe74c51 != 0) {
      var _0x567acd = Math.PI / 180;
      _0x4eac37(_0xe74c51, _0x2eae19.rotationRate.alpha * _0x567acd, _0x2eae19.rotationRate.beta * _0x567acd, _0x2eae19.rotationRate.gamma * _0x567acd);
    }
  }
  var _0x3db126 = 0;
  function _0x53f783(_0x560618) {
    if (_0x560618 & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0x23666c) {
          if (_0x23666c === "granted") {
            _0x3db126 &= ~1;
          } else {
            _0x1e49c0("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x274fc2) {
          _0x1e49c0(_0x274fc2);
          _0x3db126 |= 1;
        });
      }
    }
    if (_0x560618 & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x2b7afb) {
          if (_0x2b7afb === "granted") {
            _0x3db126 &= ~2;
          } else {
            _0x1e49c0("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0x3181b7) {
          _0x1e49c0(_0x3181b7);
          _0x3db126 |= 2;
        });
      }
    }
  }
  function _0x1bc2d7() {
    if (_0xb59d17 == 0 && _0x90691c == 0 && _0x1b1fa2 == 0 && _0xe74c51 == 0) {
      _0x53f783(2);
      window.addEventListener("devicemotion", _0x2a395a);
    }
  }
  function _0x239e4c() {
    var _0x21cce3 = 9.80665;
    _0x244b15 = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x21cce3 : -1 / _0x21cce3;
  }
  function _0x37c1c8(_0x55ff87, _0xedc0bf) {
    _0x239e4c();
    if (typeof Accelerometer === "undefined") {
      _0x1bc2d7();
      if (_0x55ff87 != 0) {
        _0xb59d17 = _0x55ff87;
      }
      return;
    }
    if (_0x55ff87 != 0) {
      _0xb59d17 = _0x55ff87;
    }
    function _0x3a21cf(_0xe8bc0b) {
      _0x5935e8 = new Accelerometer({
        frequency: _0xe8bc0b,
        referenceFrame: "device"
      });
      _0x5935e8.addEventListener("reading", _0x52e577);
      _0x5935e8.addEventListener("error", function (_0x35f685) {
        _0x1e49c0(_0x35f685.error ? _0x35f685.error : _0x35f685);
      });
      _0x5935e8.start();
      _0x3c58d1 = _0xe8bc0b;
    }
    if (_0x5935e8) {
      if (_0x3c58d1 != _0xedc0bf) {
        _0x5935e8.stop();
        _0x5935e8.removeEventListener("reading", _0x52e577);
        _0x3a21cf(_0xedc0bf);
      }
    } else if (_0x431330 != 0) {
      _0x431330 = _0xedc0bf;
    } else {
      _0x431330 = _0xedc0bf;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x1aad0c) {
        if (_0x1aad0c.state === "granted") {
          _0x3a21cf(_0x431330);
        } else {
          _0x1e49c0("No permission to use Accelerometer.");
        }
        _0x431330 = 0;
      });
    }
  }
  function _0xc3e63d() {
    if (_0xb59d17 == 0 && _0x90691c == 0 && _0x1b1fa2 == 0 && _0xe74c51 == 0) {
      window.removeEventListener("devicemotion", _0x226349);
    }
  }
  function _0x1422b0() {
    if (_0x5935e8) {
      if (typeof GravitySensor !== "undefined" || _0x1b1fa2 == 0) {
        _0x5935e8.stop();
        _0x5935e8.removeEventListener("reading", _0x52e577);
        _0x5935e8 = null;
      }
      _0xb59d17 = 0;
      _0x3c58d1 = 0;
    } else if (_0xb59d17 != 0) {
      _0xb59d17 = 0;
      _0xc3e63d();
    }
  }
  function _0x1d0a8f(_0x448e4b, _0x597053) {
    var _0x398e4b = "";
    for (var _0x46c41a = 0; _0x46c41a < _0x597053; _0x46c41a++) {
      _0x398e4b += String.fromCharCode(_0x298c61[_0x448e4b + _0x46c41a]);
    }
    _0x4c150b.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x398e4b) + "),default";
  }
  function _0x594568(_0x3161b0) {
    _0x4c150b.canvas.style.cursor = _0x3161b0 ? "default" : "none";
  }
  function _0x3a2ffb(_0x116c78) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0x116c78);
    }
    return _0x116c78.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x2fa743() {
    var _0x1535af = _0x4c150b.canvas ? _0x4c150b.canvas.id : "unity-canvas";
    return "#" + _0x3a2ffb(_0x1535af);
  }
  function _0x23552c(_0x29428f, _0x177678, _0x4dabbd, _0x564c6a) {
    var _0x22122e = document.querySelector(_0x2fa743());
    var _0x405edd = _0x22122e && _0x22122e.getBoundingClientRect();
    _0x36d14b[_0x4dabbd >> 2] = _0x29428f - (_0x405edd ? _0x405edd.left : 0);
    _0x36d14b[_0x564c6a >> 2] = _0x177678 - (_0x405edd ? _0x405edd.top : 0);
  }
  function _0x3db22a(_0x67e2c0) {
    var _0x2ee449 = _0x19d23e(_0x67e2c0) + 1;
    var _0x5c3085 = _0x5d6d4a(_0x2ee449);
    _0x156f83(_0x67e2c0, _0x5c3085, _0x2ee449);
    return _0x5c3085;
  }
  function _0x1b0ff7() {
    var _0x4ebda3 = _0x2fa743();
    if (_0x1b0ff7.selector != _0x4ebda3) {
      _0xb102d5(_0x1b0ff7.ptr);
      _0x1b0ff7.ptr = _0x3db22a(_0x4ebda3);
      _0x1b0ff7.selector = _0x4ebda3;
    }
    return _0x1b0ff7.ptr;
  }
  function _0x4bfce0(_0x491c0e) {
    var _0x206788 = _0x211f48(_0x491c0e);
    try {
      eval(_0x206788);
    } catch (_0x6d0ae8) {
      console.error(_0x6d0ae8);
    }
  }
  function _0x9a80b3(_0x5bf025) {
    var _0x456897 = _0x211f48(_0x5bf025);
    window.open(_0x456897, "_blank", "");
  }
  var _0x1225ee = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0x1c27d7) {
      if (_0x1c27d7) {
        if (_0x1225ee.numPendingSync == 0) {
          return;
        }
      } else if (_0x1225ee.syncInProgress) {
        _0x1225ee.numPendingSync++;
        return;
      }
      _0x1225ee.syncInProgress = true;
      _0x31cd57.syncfs(false, function (_0x482c6c) {
        _0x1225ee.syncInProgress = false;
      });
      _0x1225ee.numPendingSync = 0;
    }
  };
  function _0x759d2a() {
    _0x4c150b.setInterval(function () {
      _0x1225ee.sync(true);
    }, _0x1225ee.syncInternal);
  }
  function _0x453726() {
    _0x1225ee.sync(false);
  }
  var _0x41dabe = null;
  function _0x3d31d6() {
    if (typeof GravitySensor !== "undefined") {
      return _0x41dabe && _0x41dabe.activated;
    } else {
      return _0x1b1fa2 != 0;
    }
  }
  function _0x4d21d7() {
    if (_0x1b1fa2 != 0) {
      _0x4eac37(_0x1b1fa2, _0x41dabe.x * _0x244b15, _0x41dabe.y * _0x244b15, _0x41dabe.z * _0x244b15);
    }
  }
  var _0x17ef5c = 0;
  var _0x311a86 = null;
  function _0x28fab7() {
    var _0x1f8995 = {
      x: _0x311a86.x * _0x244b15,
      y: _0x311a86.y * _0x244b15,
      z: _0x311a86.z * _0x244b15
    };
    if (_0x90691c != 0) {
      _0x4eac37(_0x90691c, _0x1f8995.x, _0x1f8995.y, _0x1f8995.z);
    }
    if (_0x1b1fa2 != 0 && typeof GravitySensor === "undefined") {
      var _0x25e075 = _0x3a4486(_0x1a0190, _0x1f8995);
      _0x4eac37(_0x1b1fa2, _0x25e075.x, _0x25e075.y, _0x25e075.z);
    }
  }
  var _0x45bcab = 0;
  var _0x29d5f2 = 0;
  function _0x212d36(_0x11bdda, _0x1f654a) {
    _0x239e4c();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0x1bc2d7();
      if (_0x11bdda != 0) {
        _0x90691c = _0x11bdda;
      }
      return;
    }
    if (_0x11bdda != 0) {
      _0x90691c = _0x11bdda;
    }
    function _0x46847a(_0x514b4c) {
      _0x311a86 = new LinearAccelerationSensor({
        frequency: _0x514b4c,
        referenceFrame: "device"
      });
      _0x311a86.addEventListener("reading", _0x28fab7);
      _0x311a86.addEventListener("error", function (_0x17a3fa) {
        _0x1e49c0(_0x17a3fa.error ? _0x17a3fa.error : _0x17a3fa);
      });
      _0x311a86.start();
      _0x29d5f2 = _0x514b4c;
    }
    if (_0x311a86) {
      if (_0x29d5f2 != _0x1f654a) {
        _0x311a86.stop();
        _0x311a86.removeEventListener("reading", _0x28fab7);
        _0x46847a(_0x1f654a);
      }
    } else if (_0x45bcab != 0) {
      _0x45bcab = _0x1f654a;
    } else {
      _0x45bcab = _0x1f654a;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x775975) {
        if (_0x775975.state === "granted") {
          _0x46847a(_0x45bcab);
        } else {
          _0x1e49c0("No permission to use LinearAccelerationSensor.");
        }
        _0x45bcab = 0;
      });
    }
  }
  function _0x5c4e9e(_0x3a84ec, _0x2d8762) {
    if (typeof GravitySensor === "undefined") {
      _0x37c1c8(0, Math.max(_0x2d8762, _0x3c58d1));
      _0x212d36(0, Math.max(_0x2d8762, _0x29d5f2));
      _0x1b1fa2 = _0x3a84ec;
      return;
    }
    _0x239e4c();
    _0x1b1fa2 = _0x3a84ec;
    function _0x265953(_0x4a7da3) {
      _0x41dabe = new GravitySensor({
        frequency: _0x4a7da3,
        referenceFrame: "device"
      });
      _0x41dabe.addEventListener("reading", _0x4d21d7);
      _0x41dabe.addEventListener("error", function (_0x300d3c) {
        _0x1e49c0(_0x300d3c.error ? _0x300d3c.error : _0x300d3c);
      });
      _0x41dabe.start();
    }
    if (_0x41dabe) {
      _0x41dabe.stop();
      _0x41dabe.removeEventListener("reading", _0x4d21d7);
      _0x265953(_0x2d8762);
    } else if (_0x17ef5c != 0) {
      _0x17ef5c = _0x2d8762;
    } else {
      _0x17ef5c = _0x2d8762;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x3b241a) {
        if (_0x3b241a.state === "granted") {
          _0x265953(_0x17ef5c);
        } else {
          _0x1e49c0("No permission to use GravitySensor.");
        }
        _0x17ef5c = 0;
      });
    }
  }
  function _0x5e921d() {
    if (_0x311a86) {
      if (typeof GravitySensor !== "undefined" || _0x1b1fa2 == 0) {
        _0x311a86.stop();
        _0x311a86.removeEventListener("reading", _0x28fab7);
        _0x311a86 = null;
      }
      _0x90691c = 0;
      _0x29d5f2 = 0;
    } else if (_0x90691c != 0) {
      _0x90691c = 0;
      _0xc3e63d();
    }
  }
  function _0x55fe45() {
    _0x1b1fa2 = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0xb59d17 == 0) {
        _0x1422b0();
      }
      if (_0x90691c == 0) {
        _0x5e921d();
      }
      return;
    }
    if (_0x41dabe) {
      _0x41dabe.stop();
      _0x41dabe.removeEventListener("reading", _0x4d21d7);
      _0x41dabe = null;
    }
  }
  function _0x470d74(_0x531199) {
    try {
      (function () {
        _0x24caf7.call(null, _0x531199);
      })();
    } catch (_0x554828) {
      console.warn(_0x554828);
    }
  }
  var _0x163600 = null;
  function _0x3ff6fd() {
    return _0x163600 && _0x163600.activated || _0xe74c51 != 0;
  }
  function _0x3bd8b8() {
    if (_0xe74c51 != 0) {
      _0x4eac37(_0xe74c51, _0x163600.x, _0x163600.y, _0x163600.z);
    }
  }
  var _0x3c141b = 0;
  function _0x33912e(_0x2c8c21, _0x1c4f9b) {
    if (typeof Gyroscope === "undefined") {
      _0x1bc2d7();
      _0xe74c51 = _0x2c8c21;
      return;
    }
    _0xe74c51 = _0x2c8c21;
    function _0x4ad25c(_0x2d22d1) {
      _0x163600 = new Gyroscope({
        frequency: _0x2d22d1,
        referenceFrame: "device"
      });
      _0x163600.addEventListener("reading", _0x3bd8b8);
      _0x163600.addEventListener("error", function (_0x1acad6) {
        _0x1e49c0(_0x1acad6.error ? _0x1acad6.error : _0x1acad6);
      });
      _0x163600.start();
    }
    if (_0x163600) {
      _0x163600.stop();
      _0x163600.removeEventListener("reading", _0x3bd8b8);
      _0x4ad25c(_0x1c4f9b);
    } else if (_0x3c141b != 0) {
      _0x3c141b = _0x1c4f9b;
    } else {
      _0x3c141b = _0x1c4f9b;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x3b7d7a) {
        if (_0x3b7d7a.state === "granted") {
          _0x4ad25c(_0x3c141b);
        } else {
          _0x1e49c0("No permission to use Gyroscope.");
        }
        _0x3c141b = 0;
      });
    }
  }
  function _0x5de31a() {
    if (_0x163600) {
      _0x163600.stop();
      _0x163600.removeEventListener("reading", _0x3bd8b8);
      _0x163600 = null;
      _0xe74c51 = 0;
    } else if (_0xe74c51 != 0) {
      _0xe74c51 = 0;
      _0xc3e63d();
    }
  }
  function _0x13cfae() {
    const _0xdf7910 = function (_0x2c8172) {
      if (_0x2c8172.target.localName !== "canvas") {
        _0x2cee59();
      }
    };
    document.addEventListener("contextmenu", _0xdf7910);
    _0x4c150b.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0xdf7910);
    });
  }
  function _0x3fef64() {
    return _0x311a86 && _0x311a86.activated || _0x90691c != 0;
  }
  function _0x38c8a2(_0x1c837c, _0x3497ab) {
    var _0x36d197 = _0x211f48(_0x1c837c);
    if (typeof dump == "function") {
      dump(_0x36d197);
    }
    switch (_0x3497ab) {
      case 0:
      case 1:
      case 4:
        console.error(_0x36d197);
        return;
      case 2:
        console.warn(_0x36d197);
        return;
      case 3:
      case 5:
        console.log(_0x36d197);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(_0x36d197);
    }
  }
  function _0x5648ac(_0x7ca3f4, _0xf5c4e7) {
    var _0x95e27e = _0x1711d5();
    if (_0x7ca3f4) {
      _0x156f83(_0x95e27e, _0x7ca3f4, _0xf5c4e7);
    }
    return _0x19d23e(_0x95e27e);
  }
  var _0x3b5fdf = null;
  var _0xb9698f = 0;
  function _0x2f6084() {
    return _0x3b5fdf && _0x3b5fdf.activated || _0xb9698f != 0;
  }
  function _0x3fbb15() {
    if (_0xb9698f != 0) {
      _0x1e076c(_0xb9698f, _0x3b5fdf.quaternion[0], _0x3b5fdf.quaternion[1], _0x3b5fdf.quaternion[2], _0x3b5fdf.quaternion[3]);
    }
  }
  var _0x300a2b = 0;
  function _0x226349(_0x19fbd0) {
    if (_0xb9698f) {
      var _0x33f796 = Math.PI / 180;
      var _0x1017ca = _0x19fbd0.beta * _0x33f796;
      var _0x5a1443 = _0x19fbd0.gamma * _0x33f796;
      var _0x36abcf = _0x19fbd0.alpha * _0x33f796;
      var _0x805fa0 = Math.cos(_0x1017ca / 2);
      var _0x2555ea = Math.sin(_0x1017ca / 2);
      var _0x3fc9bf = Math.cos(_0x5a1443 / 2);
      var _0x35a7ea = Math.sin(_0x5a1443 / 2);
      var _0x1444da = Math.cos(_0x36abcf / 2);
      var _0x3bface = Math.sin(_0x36abcf / 2);
      var _0x595dbe = _0x2555ea * _0x3fc9bf * _0x1444da - _0x805fa0 * _0x35a7ea * _0x3bface;
      var _0x4a9b19 = _0x805fa0 * _0x35a7ea * _0x1444da + _0x2555ea * _0x3fc9bf * _0x3bface;
      var _0x41b0c0 = _0x805fa0 * _0x3fc9bf * _0x3bface + _0x2555ea * _0x35a7ea * _0x1444da;
      var _0xc89fa = _0x805fa0 * _0x3fc9bf * _0x1444da - _0x2555ea * _0x35a7ea * _0x3bface;
      _0x1e076c(_0xb9698f, _0x595dbe, _0x4a9b19, _0x41b0c0, _0xc89fa);
    }
  }
  function _0x283ff4(_0x6b042d, _0x4168be) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0xb9698f == 0) {
        _0xb9698f = _0x6b042d;
        _0x53f783(1);
        window.addEventListener("deviceorientation", _0x226349);
      }
      return;
    }
    _0xb9698f = _0x6b042d;
    function _0x53fef(_0xc16271) {
      _0x3b5fdf = new RelativeOrientationSensor({
        frequency: _0xc16271,
        referenceFrame: "device"
      });
      _0x3b5fdf.addEventListener("reading", _0x3fbb15);
      _0x3b5fdf.addEventListener("error", function (_0xd1ad41) {
        _0x1e49c0(_0xd1ad41.error ? _0xd1ad41.error : _0xd1ad41);
      });
      _0x3b5fdf.start();
    }
    if (_0x3b5fdf) {
      _0x3b5fdf.stop();
      _0x3b5fdf.removeEventListener("reading", _0x3fbb15);
      _0x53fef(_0x4168be);
    } else if (_0x300a2b != 0) {
      _0x300a2b = _0x4168be;
    } else {
      _0x300a2b = _0x4168be;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0x450303) {
        if (_0x450303.every(function (_0x50b650) {
          return _0x50b650.state === "granted";
        })) {
          _0x53fef(_0x300a2b);
        } else {
          _0x1e49c0("No permissions to use RelativeOrientationSensor.");
        }
        _0x300a2b = 0;
      });
    }
  }
  function _0xf24202() {
    if (_0x3b5fdf) {
      _0x3b5fdf.stop();
      _0x3b5fdf.removeEventListener("reading", _0x3fbb15);
      _0x3b5fdf = null;
    } else if (_0xb9698f != 0) {
      window.removeEventListener("deviceorientation", _0x226349);
    }
    _0xb9698f = 0;
  }
  function _0x212aec() {
    if (_0x3db126 == 0) {
      return;
    }
    _0x53f783(_0x3db126);
  }
  function _0x665707() {
    _0x4c150b.QuitCleanup();
  }
  var _0x28e977 = 0;
  function _0x88ea9d() {
    if (_0x28e977) {
      _0x2c15b5(_0x28e977, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0x3e1e56() {
    _0x28e977 = 0;
    window.removeEventListener("resize", _0x88ea9d);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x88ea9d);
    }
  }
  function _0x3aa553(_0x27e386) {
    if (!_0x28e977) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x88ea9d);
      }
      window.addEventListener("resize", _0x88ea9d);
      _0x28e977 = _0x27e386;
      setTimeout(_0x88ea9d, 0);
    }
  }
  var _0x1159b4 = -1;
  var _0x8b8bbc = -1;
  var _0x3eff11 = -1;
  function _0x137874(_0x5c6bed) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0x274f93() {
      _0x8b8bbc = _0x1159b4;
      var _0x342dd2 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x4fa8ef = _0x342dd2[_0x8b8bbc];
      screen.orientation.lock(_0x4fa8ef).then(function () {
        if (_0x1159b4 != _0x8b8bbc) {
          _0x3eff11 = setTimeout(_0x274f93, 0);
        } else {
          _0x3eff11 = -1;
        }
      }).catch(function (_0x4c2116) {
        _0x1e49c0(_0x4c2116);
        _0x3eff11 = -1;
      });
    }
    _0x1159b4 = _0x5c6bed;
    if (_0x3eff11 == -1 && _0x5c6bed != _0x8b8bbc) {
      _0x3eff11 = setTimeout(_0x274f93, 0);
    }
  }
  var _0x4d29e5 = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0x53d6b5(_0x2abbc0) {
    _0x2abbc0.estimatePlaybackPosition = function () {
      var _0x59fc87 = (_0x4d29e5.audioContext.currentTime - _0x2abbc0.playbackStartTime) * _0x2abbc0.playbackRate.value;
      if (_0x2abbc0.loop && _0x59fc87 >= _0x2abbc0.loopStart) {
        _0x59fc87 = (_0x59fc87 - _0x2abbc0.loopStart) % (_0x2abbc0.loopEnd - _0x2abbc0.loopStart) + _0x2abbc0.loopStart;
      }
      return _0x59fc87;
    };
    _0x2abbc0.setPitch = function (_0x383d6d) {
      var _0x43055d = _0x2abbc0.estimatePlaybackPosition();
      if (_0x43055d >= 0) {
        _0x2abbc0.playbackStartTime = _0x4d29e5.audioContext.currentTime - _0x43055d / _0x383d6d;
      }
      if (_0x2abbc0.playbackRate.value !== _0x383d6d) {
        _0x2abbc0.playbackRate.value = _0x383d6d;
      }
    };
  }
  function _0x4ea1db(_0xf7d3b2, _0x1caf6a) {
    var _0x426fd3 = {
      buffer: _0xf7d3b2,
      error: _0x1caf6a
    };
    _0x426fd3.release = function () {};
    _0x426fd3.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x5b93fc = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x5b93fc;
    };
    _0x426fd3.getData = function (_0x595136, _0x1d7316) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0x412d96 = _0x595136 >> 2;
      var _0x2720db = _0x5277b0.subarray(_0x412d96, _0x412d96 + (_0x1d7316 >> 2));
      var _0xbaba2e = Math.floor((_0x1d7316 >> 2) / this.buffer.numberOfChannels);
      var _0x482790 = Math.min(this.buffer.length, _0xbaba2e);
      for (var _0xbb25e7 = 0; _0xbb25e7 < this.buffer.numberOfChannels; _0xbb25e7++) {
        var _0x1037e8 = this.buffer.getChannelData(_0xbb25e7).subarray(0, _0x482790);
        _0x2720db.set(_0x1037e8, _0xbb25e7 * _0x482790);
      }
      return _0x482790 * this.buffer.numberOfChannels * 4;
    };
    _0x426fd3.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0x426fd3.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0x426fd3.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x32493e = _0x4d29e5.audioContext.createBufferSource();
      _0x32493e.buffer = this.buffer;
      _0x53d6b5(_0x32493e);
      return _0x32493e;
    };
    return _0x426fd3;
  }
  function _0x33d671(_0x5ec9fd, _0x46e058) {
    var _0x4ddec5 = {
      callback: _0x5ec9fd,
      userData: _0x46e058,
      source: null,
      gain: _0x4d29e5.audioContext.createGain(),
      panner: _0x4d29e5.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x4ddec5.panner.rolloffFactor = 0;
    _0x4ddec5.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x4ddec5.playSoundClip = function (_0x25f27d, _0x5ee75e, _0x54738a) {
      try {
        var _0x4a8b06 = this;
        this.source = _0x25f27d.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0x4a8b06.source.isStopped = true;
          _0x4a8b06.disconnectSource();
          if (_0x4a8b06.callback) {
            _0x24f0db("vi", _0x4a8b06.callback, [_0x4a8b06.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0x5ee75e, _0x54738a);
        this.source.playbackStartTime = _0x5ee75e - _0x54738a / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x3595df) {
        console.error("Channel.playSoundClip error. Exception: " + _0x3595df);
      }
    };
    _0x4ddec5.stop = function (_0x308a76) {
      if (!this.source) {
        return;
      }
      try {
        _0x4ddec5.source.stop(_0x4d29e5.audioContext.currentTime + _0x308a76);
      } catch (_0x2c0c4d) {}
      if (_0x308a76 == 0) {
        this.disconnectSource();
      }
    };
    _0x4ddec5.isPaused = function () {
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
    _0x4ddec5.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x3ec676 = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0x5dbc47) {
          this.playbackRate = _0x5dbc47;
        },
        stop: function (_0x57c218) {
          this.scheduledStopTime = _0x57c218;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x3ec676;
    };
    _0x4ddec5.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x494fe9 = this.source;
      var _0x5924f1 = _0x4ea1db(_0x494fe9.buffer, false);
      this.playSoundClip(_0x5924f1, _0x4d29e5.audioContext.currentTime, Math.max(0, _0x494fe9.playbackPausedAtPosition));
      this.source.loop = _0x494fe9.loop;
      this.source.loopStart = _0x494fe9.loopStart;
      this.source.loopEnd = _0x494fe9.loopEnd;
      this.source.setPitch(_0x494fe9.playbackRate);
      if (typeof _0x494fe9.scheduledStopTime !== "undefined") {
        var _0x18c09e = Math.max(_0x494fe9.scheduledStopTime - _0x4d29e5.audioContext.currentTime, 0);
        this.stop(_0x18c09e);
      }
    };
    _0x4ddec5.setLoop = function (_0x324cd5) {
      this.loop = _0x324cd5;
      if (!this.source || this.source.loop == _0x324cd5) {
        return;
      }
      this.source.loop = _0x324cd5;
    };
    _0x4ddec5.setLoopPoints = function (_0x4926fe, _0x11b26b) {
      this.loopStart = _0x4926fe;
      this.loopEnd = _0x11b26b;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x4926fe) {
        this.source.loopStart = _0x4926fe;
      }
      if (this.source.loopEnd !== _0x11b26b) {
        this.source.loopEnd = _0x11b26b;
      }
    };
    _0x4ddec5.set3D = function (_0x49da11) {
      if (this.threeD == _0x49da11) {
        return;
      }
      this.threeD = _0x49da11;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x4ddec5.setPitch = function (_0x5a5105) {
      this.pitch = _0x5a5105;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x5a5105);
    };
    _0x4ddec5.setVolume = function (_0x5146eb) {
      if (this.gain.gain.value == _0x5146eb) {
        return;
      }
      this.gain.gain.value = _0x5146eb;
    };
    _0x4ddec5.setPosition = function (_0x1e0510, _0x15cb30, _0x2e8923) {
      var _0x4cec78 = this.panner;
      if (_0x4cec78.positionX) {
        if (_0x4cec78.positionX.value !== _0x1e0510) {
          _0x4cec78.positionX.value = _0x1e0510;
        }
        if (_0x4cec78.positionY.value !== _0x15cb30) {
          _0x4cec78.positionY.value = _0x15cb30;
        }
        if (_0x4cec78.positionZ.value !== _0x2e8923) {
          _0x4cec78.positionZ.value = _0x2e8923;
        }
      } else if (_0x4cec78._x !== _0x1e0510 || _0x4cec78._y !== _0x15cb30 || _0x4cec78._z !== _0x2e8923) {
        _0x4cec78.setPosition(_0x1e0510, _0x15cb30, _0x2e8923);
        _0x4cec78._x = _0x1e0510;
        _0x4cec78._y = _0x15cb30;
        _0x4cec78._z = _0x2e8923;
      }
    };
    _0x4ddec5.disconnectSource = function () {
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
    _0x4ddec5.setupPanning = function () {
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
      this.gain.connect(_0x4d29e5.audioContext.destination);
    };
    _0x4ddec5.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x4ddec5;
  }
  function _0x32cbd4(_0x1901c0, _0x5768a5) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return;
    }
    _0x4d29e5.audioInstances[++_0x4d29e5.audioInstanceIdCounter] = _0x33d671(_0x1901c0, _0x5768a5);
    return _0x4d29e5.audioInstanceIdCounter;
  }
  function _0x3ef79d(_0x19d998) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return 0;
    }
    var _0x301746 = _0x4d29e5.audioInstances[_0x19d998];
    if (!_0x301746) {
      return 0;
    }
    return _0x301746.getLength();
  }
  function _0x1dc061(_0x235af7) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return 2;
    }
    var _0x5cfbf3 = _0x4d29e5.audioInstances[_0x235af7];
    if (_0x5cfbf3.error) {
      return 2;
    }
    if (_0x5cfbf3.buffer || _0x5cfbf3.url) {
      return 0;
    }
    return 1;
  }
  function _0x1574f1(_0x47d57c) {
    var _0x69ca96 = _0x4d29e5.pendingAudioSources[_0x47d57c];
    _0x69ca96.sourceNode._startPlayback(_0x69ca96.offset);
    delete _0x4d29e5.pendingAudioSources[_0x47d57c];
  }
  function _0x23b104() {
    Object.keys(_0x4d29e5.pendingAudioSources).forEach(function (_0x47281e) {
      _0x1574f1(_0x47281e);
    });
  }
  function _0x14e299() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x4d29e5.audioContext = new AudioContext();
      function _0x35421d() {
        if (_0x4d29e5.audioContext.state === "suspended") {
          _0x4d29e5.audioContext.resume().catch(function (_0x4bbe05) {
            console.warn("Could not resume audio context. Exception: " + _0x4bbe05);
          });
        } else {
          _0x4c150b.clearInterval(_0x3977b3);
        }
      }
      var _0x3977b3 = _0x4c150b.setInterval(_0x35421d, 400);
      _0x4d29e5.audioWebEnabled = 1;
      function _0x53e9b1() {
        try {
          if (_0x4d29e5.audioContext.state !== "running" && _0x4d29e5.audioContext.state !== "closed") {
            _0x4d29e5.audioContext.resume().catch(function (_0x5dae33) {
              console.warn("Could not resume audio context. Exception: " + _0x5dae33);
            });
          }
          _0x23b104();
          var _0x4e1223 = 20;
          while (_0x4d29e5.audioCache.length < _0x4e1223) {
            var _0x7134a8 = new Audio();
            _0x7134a8.autoplay = false;
            _0x4d29e5.audioCache.push(_0x7134a8);
          }
        } catch (_0xf8b39f) {}
      }
      window.addEventListener("mousedown", _0x53e9b1);
      window.addEventListener("touchstart", _0x53e9b1);
      _0x4c150b.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x53e9b1);
        window.removeEventListener("touchstart", _0x53e9b1);
      });
    } catch (_0x1cbbaa) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x4d1a40(_0x3093ba) {
    var _0x16e5f1 = _0x4ea1db(null, false);
    _0x4d29e5.audioContext.decodeAudioData(_0x3093ba, function (_0x555bdb) {
      _0x16e5f1.buffer = _0x555bdb;
    }, function (_0x4624b9) {
      _0x16e5f1.error = true;
      console.log("Decode error: " + _0x4624b9);
    });
    return _0x16e5f1;
  }
  function _0x52560c(_0x5d3266, _0x1f4c49) {
    _0x4d29e5.pendingAudioSources[_0x5d3266.mediaElement.src] = {
      sourceNode: _0x5d3266,
      offset: _0x1f4c49
    };
  }
  function _0x13bb43(_0x5b02c8) {
    switch (_0x5b02c8) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x5157d9(_0x3e1a9, _0x575af0) {
    var _0x53ad9e = _0x13bb43(_0x575af0);
    var _0x3ac01e = new Blob([_0x3e1a9], {
      type: _0x53ad9e
    });
    var _0x1fc29d = {
      url: URL.createObjectURL(_0x3ac01e),
      error: false,
      mediaElement: new Audio()
    };
    _0x1fc29d.mediaElement.preload = "metadata";
    _0x1fc29d.mediaElement.src = _0x1fc29d.url;
    _0x1fc29d.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x1fc29d.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x1fc29d.getData = function (_0x14bb89, _0x4c2638) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x1fc29d.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x1fc29d.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x1fc29d.createSourceNode = function () {
      var _0x2b8586 = this;
      var _0x150ce9 = _0x4d29e5.audioCache.length ? _0x4d29e5.audioCache.pop() : new Audio();
      _0x150ce9.preload = "metadata";
      _0x150ce9.src = this.url;
      var _0x1da12f = _0x4d29e5.audioContext.createMediaElementSource(_0x150ce9);
      Object.defineProperty(_0x1da12f, "loop", {
        get: function () {
          return _0x1da12f.mediaElement.loop;
        },
        set: function (_0xd9d132) {
          if (_0x1da12f.mediaElement.loop !== _0xd9d132) {
            _0x1da12f.mediaElement.loop = _0xd9d132;
          }
        }
      });
      _0x1da12f.playbackRate = {};
      Object.defineProperty(_0x1da12f.playbackRate, "value", {
        get: function () {
          return _0x1da12f.mediaElement.playbackRate;
        },
        set: function (_0x3285e4) {
          if (_0x1da12f.mediaElement.playbackRate !== _0x3285e4) {
            _0x1da12f.mediaElement.playbackRate = _0x3285e4;
          }
        }
      });
      Object.defineProperty(_0x1da12f, "currentTime", {
        get: function () {
          return _0x1da12f.mediaElement.currentTime;
        },
        set: function (_0x2a4950) {
          if (_0x1da12f.mediaElement.currentTime !== _0x2a4950) {
            _0x1da12f.mediaElement.currentTime = _0x2a4950;
          }
        }
      });
      Object.defineProperty(_0x1da12f, "mute", {
        get: function () {
          return _0x1da12f.mediaElement.mute;
        },
        set: function (_0x5dfec6) {
          if (_0x1da12f.mediaElement.mute !== _0x5dfec6) {
            _0x1da12f.mediaElement.mute = _0x5dfec6;
          }
        }
      });
      Object.defineProperty(_0x1da12f, "onended", {
        get: function () {
          return _0x1da12f.mediaElement.onended;
        },
        set: function (_0x227a61) {
          _0x1da12f.mediaElement.onended = _0x227a61;
        }
      });
      _0x1da12f.playPromise = null;
      _0x1da12f.playTimeout = null;
      _0x1da12f.pauseRequested = false;
      _0x1da12f.isStopped = false;
      _0x1da12f._pauseMediaElement = function () {
        if (_0x1da12f.playPromise || _0x1da12f.playTimeout) {
          _0x1da12f.pauseRequested = true;
        } else {
          _0x1da12f.mediaElement.pause();
        }
      };
      _0x1da12f._startPlayback = function (_0x987b89) {
        if (_0x1da12f.playPromise || _0x1da12f.playTimeout) {
          _0x1da12f.mediaElement.currentTime = _0x987b89;
          _0x1da12f.pauseRequested = false;
          return;
        }
        _0x1da12f.mediaElement.currentTime = _0x987b89;
        _0x1da12f.playPromise = _0x1da12f.mediaElement.play();
        if (_0x1da12f.playPromise) {
          _0x1da12f.playPromise.then(function () {
            if (_0x1da12f.pauseRequested) {
              _0x1da12f.mediaElement.pause();
              _0x1da12f.pauseRequested = false;
            }
            _0x1da12f.playPromise = null;
          }).catch(function (_0x4255bd) {
            _0x1da12f.playPromise = null;
            if (_0x4255bd.name !== "NotAllowedError") {
              throw _0x4255bd;
            }
            _0x52560c(_0x1da12f, _0x987b89);
          });
        }
      };
      _0x1da12f.start = function (_0x12cea4, _0x4d6a92) {
        if (typeof _0x12cea4 === "undefined") {
          _0x12cea4 = _0x4d29e5.audioContext.currentTime;
        }
        if (typeof _0x4d6a92 === "undefined") {
          _0x4d6a92 = 0;
        }
        var _0x2ac342 = 4;
        var _0x36db6a = (_0x12cea4 - _0x4d29e5.audioContext.currentTime) * 1000;
        if (_0x36db6a > _0x2ac342) {
          _0x1da12f.playTimeout = setTimeout(function () {
            _0x1da12f.playTimeout = null;
            _0x1da12f._startPlayback(_0x4d6a92);
          }, _0x36db6a);
        } else {
          _0x1da12f._startPlayback(_0x4d6a92);
        }
      };
      _0x1da12f.stop = function (_0x482a19) {
        if (typeof _0x482a19 === "undefined") {
          _0x482a19 = _0x4d29e5.audioContext.currentTime;
        }
        var _0x1c6688 = 4;
        var _0x527942 = (_0x482a19 - _0x4d29e5.audioContext.currentTime) * 1000;
        if (_0x527942 > _0x1c6688) {
          setTimeout(function () {
            _0x1da12f._pauseMediaElement();
            _0x1da12f.isStopped = true;
          }, _0x527942);
        } else {
          _0x1da12f._pauseMediaElement();
          _0x1da12f.isStopped = true;
        }
      };
      _0x53d6b5(_0x1da12f);
      return _0x1da12f;
    };
    return _0x1fc29d;
  }
  function _0x3c428e(_0x22f554, _0x50eddd, _0x2f4b4c, _0x5d542a) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return 0;
    }
    var _0x5a2f59 = _0x298c61.buffer.slice(_0x22f554, _0x22f554 + _0x50eddd);
    if (_0x50eddd < 131072) {
      _0x2f4b4c = 1;
    }
    var _0xb2328f;
    if (_0x2f4b4c) {
      _0xb2328f = _0x4d1a40(_0x5a2f59);
    } else {
      _0xb2328f = _0x5157d9(_0x5a2f59, _0x5d542a);
    }
    _0x4d29e5.audioInstances[++_0x4d29e5.audioInstanceIdCounter] = _0xb2328f;
    return _0x4d29e5.audioInstanceIdCounter;
  }
  function _0xb8faf9(_0x3d663, _0x2ea65f, _0x57080d, _0x3d961a) {
    var _0x20b5d5 = _0x4d29e5.audioContext.createBuffer(_0x3d663, _0x2ea65f, _0x57080d);
    for (var _0x18a8fa = 0; _0x18a8fa < _0x3d663; _0x18a8fa++) {
      var _0xb95791 = (_0x3d961a >> 2) + _0x2ea65f * _0x18a8fa;
      var _0x1444bf = _0x20b5d5.copyToChannel || function (_0x39a33f, _0x1f0d31, _0x11bbd0) {
        var _0x259605 = _0x39a33f.subarray(0, Math.min(_0x39a33f.length, this.length - (_0x11bbd0 | 0)));
        this.getChannelData(_0x1f0d31 | 0).set(_0x259605, _0x11bbd0 | 0);
      };
      _0x1444bf.apply(_0x20b5d5, [_0x5277b0.subarray(_0xb95791, _0xb95791 + _0x2ea65f), _0x18a8fa, 0]);
    }
    return _0x4ea1db(_0x20b5d5, false);
  }
  function _0x3199c9(_0x5ee963, _0x2ef409, _0x43aa05, _0x21eb19) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return 0;
    }
    var _0x1ba5eb = _0xb8faf9(_0x5ee963, _0x2ef409, _0x43aa05, _0x21eb19);
    _0x4d29e5.audioInstances[++_0x4d29e5.audioInstanceIdCounter] = _0x1ba5eb;
    return _0x4d29e5.audioInstanceIdCounter;
  }
  function _0x49e259(_0x1e7f0d, _0x6bcdde, _0x1b328b, _0x2c7132) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return;
    }
    _0xc25b4e(_0x6bcdde, 0);
    var _0x218635 = _0x4d29e5.audioInstances[_0x1e7f0d];
    var _0x483fa6 = _0x4d29e5.audioInstances[_0x6bcdde];
    if (!_0x218635) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x483fa6.playSoundClip(_0x218635, _0x4d29e5.audioContext.currentTime + _0x2c7132, _0x1b328b);
    } catch (_0x428b17) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x98bb62(_0x281834) {
    var _0x3bc66c = _0x4d29e5.audioInstances[_0x281834];
    if (_0x3bc66c) {
      _0x3bc66c.release();
    }
    delete _0x4d29e5.audioInstances[_0x281834];
  }
  function _0xbaf956() {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return;
    }
    if (_0x4d29e5.audioContext.state === "suspended") {
      _0x4d29e5.audioContext.resume().catch(function (_0x10f088) {
        console.warn("Could not resume audio context. Exception: " + _0x10f088);
      });
    }
  }
  function _0x55795c(_0x1c3fb4, _0x173953) {
    var _0x11dd4f = _0x4d29e5.audioInstances[_0x1c3fb4];
    _0x11dd4f.set3D(_0x173953);
  }
  function _0x48c036(_0x5aea07, _0x19944a, _0x135b44, _0x28ee9c, _0xb37375, _0x4069df) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return;
    }
    _0x5aea07 = -_0x5aea07;
    _0x19944a = -_0x19944a;
    _0x135b44 = -_0x135b44;
    var _0x3384a7 = _0x4d29e5.audioContext.listener;
    if (_0x3384a7.forwardX) {
      if (_0x3384a7.forwardX.value !== _0x5aea07) {
        _0x3384a7.forwardX.value = _0x5aea07;
      }
      if (_0x3384a7.forwardY.value !== _0x19944a) {
        _0x3384a7.forwardY.value = _0x19944a;
      }
      if (_0x3384a7.forwardZ.value !== _0x135b44) {
        _0x3384a7.forwardZ.value = _0x135b44;
      }
      if (_0x3384a7.upX.value !== _0x28ee9c) {
        _0x3384a7.upX.value = _0x28ee9c;
      }
      if (_0x3384a7.upY.value !== _0xb37375) {
        _0x3384a7.upY.value = _0xb37375;
      }
      if (_0x3384a7.upZ.value !== _0x4069df) {
        _0x3384a7.upZ.value = _0x4069df;
      }
    } else if (_0x3384a7._forwardX !== _0x5aea07 || _0x3384a7._forwardY !== _0x19944a || _0x3384a7._forwardZ !== _0x135b44 || _0x3384a7._upX !== _0x28ee9c || _0x3384a7._upY !== _0xb37375 || _0x3384a7._upZ !== _0x4069df) {
      _0x3384a7.setOrientation(_0x5aea07, _0x19944a, _0x135b44, _0x28ee9c, _0xb37375, _0x4069df);
      _0x3384a7._forwardX = _0x5aea07;
      _0x3384a7._forwardY = _0x19944a;
      _0x3384a7._forwardZ = _0x135b44;
      _0x3384a7._upX = _0x28ee9c;
      _0x3384a7._upY = _0xb37375;
      _0x3384a7._upZ = _0x4069df;
    }
  }
  function _0x3085fa(_0x4ee052, _0x1f738e, _0x3fe1d9) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return;
    }
    var _0x1588bf = _0x4d29e5.audioContext.listener;
    if (_0x1588bf.positionX) {
      if (_0x1588bf.positionX.value !== _0x4ee052) {
        _0x1588bf.positionX.value = _0x4ee052;
      }
      if (_0x1588bf.positionY.value !== _0x1f738e) {
        _0x1588bf.positionY.value = _0x1f738e;
      }
      if (_0x1588bf.positionZ.value !== _0x3fe1d9) {
        _0x1588bf.positionZ.value = _0x3fe1d9;
      }
    } else if (_0x1588bf._positionX !== _0x4ee052 || _0x1588bf._positionY !== _0x1f738e || _0x1588bf._positionZ !== _0x3fe1d9) {
      _0x1588bf.setPosition(_0x4ee052, _0x1f738e, _0x3fe1d9);
      _0x1588bf._positionX = _0x4ee052;
      _0x1588bf._positionY = _0x1f738e;
      _0x1588bf._positionZ = _0x3fe1d9;
    }
  }
  function _0x2ee83c(_0x2b7409, _0x1551eb) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return;
    }
    var _0x29a674 = _0x4d29e5.audioInstances[_0x2b7409];
    _0x29a674.setLoop(_0x1551eb);
  }
  function _0xcb9a27(_0x4a304c, _0x370ebc, _0x1ba5e2) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return;
    }
    var _0x1f0fd5 = _0x4d29e5.audioInstances[_0x4a304c];
    _0x1f0fd5.setLoopPoints(_0x370ebc, _0x1ba5e2);
  }
  function _0x3d5ca2(_0x1ee258, _0x3ebb8a) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return;
    }
    var _0x995ce = _0x4d29e5.audioInstances[_0x1ee258];
    if (_0x3ebb8a != _0x995ce.isPaused()) {
      if (_0x3ebb8a) {
        _0x995ce.pause();
      } else {
        _0x995ce.resume();
      }
    }
  }
  function _0x404aec(_0xb451e5, _0x351994) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x2062c4 = _0x4d29e5.audioInstances[_0xb451e5];
      _0x2062c4.setPitch(_0x351994);
    } catch (_0x34a84b) {
      console.error("JS_Sound_SetPitch(channel=" + _0xb451e5 + ", pitch=" + _0x351994 + ") threw an exception: " + _0x34a84b);
    }
  }
  function _0x3dc0cb(_0x11962b, _0x5568d5, _0x4d2a50, _0x29caf0) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return;
    }
    var _0x2b9a87 = _0x4d29e5.audioInstances[_0x11962b];
    _0x2b9a87.setPosition(_0x5568d5, _0x4d2a50, _0x29caf0);
  }
  function _0x10a091(_0x219097, _0x315178) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x4c6a35 = _0x4d29e5.audioInstances[_0x219097];
      _0x4c6a35.setVolume(_0x315178);
    } catch (_0x3cdfa4) {
      console.error("JS_Sound_SetVolume(channel=" + _0x219097 + ", volume=" + _0x315178 + ") threw an exception: " + _0x3cdfa4);
    }
  }
  function _0xc25b4e(_0x3a1d92, _0x12147a) {
    if (_0x4d29e5.audioWebEnabled == 0) {
      return;
    }
    var _0x4738fe = _0x4d29e5.audioInstances[_0x3a1d92];
    _0x4738fe.stop(_0x12147a);
  }
  function _0x3ec70e(_0x3c032e, _0x549334) {
    var _0x583605 = _0x4c150b.SystemInfo.browser;
    if (_0x3c032e) {
      _0x156f83(_0x583605, _0x3c032e, _0x549334);
    }
    return _0x19d23e(_0x583605);
  }
  function _0x253ddd(_0x2cfd6d, _0x294ec0) {
    var _0x46924a = _0x4c150b.SystemInfo.browserVersion;
    if (_0x2cfd6d) {
      _0x156f83(_0x46924a, _0x2cfd6d, _0x294ec0);
    }
    return _0x19d23e(_0x46924a);
  }
  function _0x1d19a4(_0x4035e3, _0x471402, _0x4bba17) {
    var _0x3cbef1 = _0x211f48(_0x4035e3);
    var _0x3237cb = _0x3cbef1 == "#canvas" ? _0x4c150b.canvas : document.querySelector(_0x3cbef1);
    var _0x326043 = 0;
    var _0x42d73a = 0;
    if (_0x3237cb) {
      var _0x56886b = _0x3237cb.getBoundingClientRect();
      _0x326043 = _0x56886b.width;
      _0x42d73a = _0x56886b.height;
    }
    _0xfbcc55[_0x471402 >> 3] = _0x326043;
    _0xfbcc55[_0x4bba17 >> 3] = _0x42d73a;
  }
  function _0x5b8563(_0x588c02, _0x2461ba) {
    if (_0x588c02) {
      _0x156f83("https://games.1games.io", _0x588c02, _0x2461ba);
    }
    return _0x19d23e("https://games.1games.io");
  }
  function _0x165cb4(_0x24d235, _0x2909a7) {
    var _0x8dd6f = _0x4c150b.SystemInfo.gpu;
    if (_0x24d235) {
      _0x156f83(_0x8dd6f, _0x24d235, _0x2909a7);
    }
    return _0x19d23e(_0x8dd6f);
  }
  function _0xc558d9(_0x5a9362, _0x448f47) {
    var _0x2e48fe = _0x4c150b.SystemInfo.language;
    if (_0x5a9362) {
      _0x156f83(_0x2e48fe, _0x5a9362, _0x448f47);
    }
    return _0x19d23e(_0x2e48fe);
  }
  function _0xb283d9() {
    return _0x4c150b.matchWebGLToCanvasSize || _0x4c150b.matchWebGLToCanvasSize === undefined;
  }
  function _0x39005e() {
    return _0x298c61.length / 1048576;
  }
  function _0x56a7a6(_0x2c9aa7, _0x5f4548) {
    var _0x522b15 = _0x4c150b.SystemInfo.os + " " + _0x4c150b.SystemInfo.osVersion;
    if (_0x2c9aa7) {
      _0x156f83(_0x522b15, _0x2c9aa7, _0x5f4548);
    }
    return _0x19d23e(_0x522b15);
  }
  function _0x3ef0a7() {
    if (_0x4c150b.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0x4c150b.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0x3f901e(_0x2b4169, _0x59ce36) {
    _0xfbcc55[_0x2b4169 >> 3] = _0x4c150b.SystemInfo.width;
    _0xfbcc55[_0x59ce36 >> 3] = _0x4c150b.SystemInfo.height;
  }
  function _0x24ba03(_0x1a4770, _0x467717) {
    if (_0x1a4770) {
      _0x156f83(_0x4c150b.streamingAssetsUrl, _0x1a4770, _0x467717);
    }
    return _0x19d23e(_0x4c150b.streamingAssetsUrl);
  }
  function _0xa39dfe() {
    var _0x501e1a = _0x5a54d9.getExtension("WEBGL_compressed_texture_astc");
    if (_0x501e1a && _0x501e1a.getSupportedProfiles) {
      return _0x501e1a.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0x443584() {
    return _0x4c150b.SystemInfo.hasCursorLock;
  }
  function _0x4f1fed() {
    return _0x4c150b.SystemInfo.hasFullscreen;
  }
  function _0x45b758() {
    return _0x4c150b.SystemInfo.hasWebGL;
  }
  function _0x108a5c() {
    return !!_0x4c150b.shouldQuit;
  }
  var _0x58fe49 = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0x2dc068(_0x47b95d) {
    var _0x5643da = _0x58fe49.abortControllers[_0x47b95d];
    if (!_0x5643da || _0x5643da.signal.aborted) {
      return;
    }
    _0x5643da.abort();
  }
  function _0x4cbfec(_0x5cff9a, _0x2f5571) {
    var _0x2e83ac = _0x211f48(_0x5cff9a);
    var _0xe82092 = _0x211f48(_0x2f5571);
    var _0x3adbcc = new AbortController();
    var _0x2daf74 = {
      url: _0x2e83ac,
      init: {
        method: _0xe82092,
        signal: _0x3adbcc.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0x58fe49.abortControllers[_0x58fe49.nextRequestId] = _0x3adbcc;
    _0x58fe49.requests[_0x58fe49.nextRequestId] = _0x2daf74;
    return _0x58fe49.nextRequestId++;
  }
  function _0x2dd13e(_0x3dd3ee) {
    var _0x13a626 = _0x58fe49.responses[_0x3dd3ee];
    if (!_0x13a626) {
      return "";
    }
    if (_0x13a626.headerString) {
      return _0x13a626.headerString;
    }
    var _0x302c8c = "";
    var _0x2317b7 = _0x13a626.headers.entries();
    for (var _0x266e40 = _0x2317b7.next(); !_0x266e40.done; _0x266e40 = _0x2317b7.next()) {
      _0x302c8c += _0x266e40.value[0] + ": " + _0x266e40.value[1] + "\r\n";
    }
    _0x13a626.headerString = _0x302c8c;
    return _0x302c8c;
  }
  function _0x289a48(_0x5cf1ad, _0x555295, _0x54350b, _0x2b496b, _0x351385) {
    var _0x5881c3 = _0x58fe49.responses[_0x5cf1ad];
    if (!_0x5881c3) {
      _0x156f83("", _0x555295, _0x54350b);
      _0x156f83("", _0x2b496b, _0x351385);
      return;
    }
    if (_0x555295) {
      var _0x324c92 = _0x2dd13e(_0x5cf1ad);
      _0x156f83(_0x324c92, _0x555295, _0x54350b);
    }
    if (_0x2b496b) {
      _0x156f83(_0x5881c3.url, _0x2b496b, _0x351385);
    }
  }
  function _0x9d2c4b(_0x3d212c, _0x50630e) {
    var _0x48d105 = _0x58fe49.responses[_0x3d212c];
    if (!_0x48d105) {
      _0x36d14b[_0x50630e >> 2] = 0;
      _0x36d14b[(_0x50630e >> 2) + 1] = 0;
      return;
    }
    var _0x25856b = _0x2dd13e(_0x3d212c);
    _0x36d14b[_0x50630e >> 2] = _0x19d23e(_0x25856b);
    _0x36d14b[(_0x50630e >> 2) + 1] = _0x19d23e(_0x48d105.url);
  }
  function _0x42b9f4(_0x33c93b) {
    if (_0x58fe49.timer[_0x33c93b]) {
      clearTimeout(_0x58fe49.timer[_0x33c93b]);
    }
    delete _0x58fe49.requests[_0x33c93b];
    delete _0x58fe49.responses[_0x33c93b];
    delete _0x58fe49.abortControllers[_0x33c93b];
    delete _0x58fe49.timer[_0x33c93b];
  }
  function _0x1558a3(_0x422631, _0x315557, _0xbdb21b, _0x14ab5b, _0x26d28f, _0x5c6298) {
    var _0x73be6 = _0x58fe49.requests[_0x422631];
    var _0x58363d = _0x58fe49.abortControllers[_0x422631];
    function _0x1e5adf(_0x3c964a) {
      if (!_0x73be6.tempBuffer) {
        const _0x1c7b57 = Math.max(_0x3c964a, 1024);
        _0x73be6.tempBuffer = _0x5d6d4a(_0x1c7b57);
        _0x73be6.tempBufferSize = _0x1c7b57;
      }
      if (_0x73be6.tempBufferSize < _0x3c964a) {
        _0xb102d5(_0x73be6.tempBuffer);
        _0x73be6.tempBuffer = _0x5d6d4a(_0x3c964a);
        _0x73be6.tempBufferSize = _0x3c964a;
      }
      return _0x73be6.tempBuffer;
    }
    function _0x2d5582() {
      if (_0x58fe49.timer[_0x422631]) {
        clearTimeout(_0x58fe49.timer[_0x422631]);
        delete _0x58fe49.timer[_0x422631];
      }
    }
    function _0xcefe8(_0x579575, _0x29584a) {
      _0x2d5582();
      if (!_0x26d28f) {
        return;
      }
      var _0xad8179 = 0;
      if (_0x73be6.init.enableStreamingDownload) {
        _0x24f0db("viiiiii", _0x26d28f, [_0x14ab5b, _0x579575.status, 0, _0x29584a.length, 0, _0xad8179]);
      } else if (_0x29584a.length != 0) {
        var _0x3f057c = _0x5d6d4a(_0x29584a.length);
        _0x298c61.set(_0x29584a, _0x3f057c);
        _0x24f0db("viiiiii", _0x26d28f, [_0x14ab5b, _0x579575.status, _0x3f057c, _0x29584a.length, 0, _0xad8179]);
      } else {
        _0x24f0db("viiiiii", _0x26d28f, [_0x14ab5b, _0x579575.status, 0, 0, 0, _0xad8179]);
      }
      if (_0x73be6.tempBuffer) {
        _0xb102d5(_0x73be6.tempBuffer);
      }
    }
    function _0x53b638(_0x5ad4b4, _0x34bf41) {
      _0x2d5582();
      if (!_0x26d28f) {
        return;
      }
      var _0x144505 = _0x19d23e(_0x5ad4b4) + 1;
      var _0x3019a7 = _0x5d6d4a(_0x144505);
      _0x156f83(_0x5ad4b4, _0x3019a7, _0x144505);
      _0x24f0db("viiiiii", _0x26d28f, [_0x14ab5b, 500, 0, 0, _0x3019a7, _0x34bf41]);
      _0xb102d5(_0x3019a7);
      if (_0x73be6.tempBuffer) {
        _0xb102d5(_0x73be6.tempBuffer);
      }
    }
    function _0x104581(_0x26c1a2) {
      if (!_0x5c6298 || !_0x26c1a2.lengthComputable) {
        return;
      }
      var _0x27b2a2 = _0x26c1a2.response;
      _0x58fe49.responses[_0x422631] = _0x27b2a2;
      if (_0x26c1a2.chunk) {
        var _0x4f8891 = _0x1e5adf(_0x26c1a2.chunk.length);
        _0x298c61.set(_0x26c1a2.chunk, _0x4f8891);
        _0x24f0db("viiiiii", _0x5c6298, [_0x14ab5b, _0x27b2a2.status, _0x26c1a2.loaded, _0x26c1a2.total, _0x4f8891, _0x26c1a2.chunk.length]);
      } else {
        _0x24f0db("viiiiii", _0x5c6298, [_0x14ab5b, _0x27b2a2.status, _0x26c1a2.loaded, _0x26c1a2.total, 0, 0]);
      }
    }
    try {
      if (_0xbdb21b > 0) {
        var _0x10df0a = _0x298c61.subarray(_0x315557, _0x315557 + _0xbdb21b);
        _0x73be6.init.body = new Blob([_0x10df0a]);
      }
      if (_0x73be6.timeout) {
        _0x58fe49.timer[_0x422631] = setTimeout(function () {
          _0x73be6.isTimedOut = true;
          _0x58363d.abort();
        }, _0x73be6.timeout);
      }
      var _0x35b41c = _0x4c150b.fetchWithProgress;
      _0x73be6.init.onProgress = _0x104581;
      if (_0x4c150b.companyName && _0x4c150b.productName && _0x4c150b.cachedFetch) {
        _0x35b41c = _0x4c150b.cachedFetch;
        _0x73be6.init.companyName = _0x4c150b.companyName;
        _0x73be6.init.productName = _0x4c150b.productName;
        _0x73be6.control = _0x4c150b.cacheControl(_0x73be6.url);
      }
      _0x35b41c(_0x73be6.url, _0x73be6.init).then(function (_0x390442) {
        _0x58fe49.responses[_0x422631] = _0x390442;
        _0xcefe8(_0x390442, _0x390442.parsedBody);
      }).catch(function (_0x44672f) {
        var _0x4d23a1 = 2;
        var _0x2e6046 = 17;
        var _0x5a6f75 = 14;
        if (_0x73be6.isTimedOut) {
          _0x53b638("Connection timed out.", _0x5a6f75);
        } else if (_0x58363d.signal.aborted) {
          _0x53b638("Aborted.", _0x2e6046);
        } else {
          _0x53b638(_0x44672f.message, _0x4d23a1);
        }
      });
    } catch (_0x214552) {
      var _0x4cbc60 = 2;
      _0x53b638(_0x214552.message, _0x4cbc60);
    }
  }
  function _0x145aee(_0x4c3271, _0x4fb60d) {
    var _0x40622f = _0x58fe49.requests[_0x4c3271];
    if (!_0x40622f) {
      return;
    }
    _0x40622f.init.redirect = _0x4fb60d === 0 ? "error" : "follow";
  }
  function _0x2acc36(_0x4d5329, _0x483d13, _0x344739) {
    var _0x190cfc = _0x58fe49.requests[_0x4d5329];
    if (!_0x190cfc) {
      return;
    }
    var _0x324cba = _0x211f48(_0x483d13);
    var _0x51694a = _0x211f48(_0x344739);
    _0x190cfc.init.headers[_0x324cba] = _0x51694a;
  }
  function _0x404fa3(_0x2e8af5, _0x451f09) {
    var _0x4cf595 = _0x58fe49.requests[_0x2e8af5];
    if (!_0x4cf595) {
      return;
    }
    _0x4cf595.timeout = _0x451f09;
  }
  function _0x37318c(_0x30ecf1, _0x312790, _0xc256f5, _0x563dc6) {
    var _0x508de4 = _0x211f48(_0x30ecf1);
    var _0x130ed6 = _0x211f48(_0x312790);
    var _0x763bc0 = _0x211f48(_0xc256f5);
    var _0x163b4d = _0x211f48(_0x563dc6);
    try {
      firebase.database().ref(_0x508de4).on("child_added", function (_0x6fcdd7) {
        window.unityInstance.SendMessage(_0x130ed6, _0x763bc0, JSON.stringify(_0x6fcdd7.val()));
      });
    } catch (_0x24d8e5) {
      window.unityInstance.SendMessage(_0x130ed6, _0x163b4d, JSON.stringify(_0x24d8e5, Object.getOwnPropertyNames(_0x24d8e5)));
    }
  }
  function _0x142687(_0x524524, _0x4128db, _0x1d3277, _0x2e2b64) {
    var _0x5ac78e = _0x211f48(_0x524524);
    var _0x52ef64 = _0x211f48(_0x4128db);
    var _0x2f5c28 = _0x211f48(_0x1d3277);
    var _0x24e7f0 = _0x211f48(_0x2e2b64);
    try {
      firebase.database().ref(_0x5ac78e).on("child_changed", function (_0x288555) {
        window.unityInstance.SendMessage(_0x52ef64, _0x2f5c28, JSON.stringify(_0x288555.val()));
      });
    } catch (_0x2f7168) {
      window.unityInstance.SendMessage(_0x52ef64, _0x24e7f0, JSON.stringify(_0x2f7168, Object.getOwnPropertyNames(_0x2f7168)));
    }
  }
  function _0x3a9583(_0x37c1a5, _0x1a1fa4, _0x21b974, _0x5eda6d) {
    var _0x2e984b = _0x211f48(_0x37c1a5);
    var _0x408ebf = _0x211f48(_0x1a1fa4);
    var _0x100efd = _0x211f48(_0x21b974);
    var _0x257f29 = _0x211f48(_0x5eda6d);
    try {
      firebase.database().ref(_0x2e984b).on("child_removed", function (_0x36c323) {
        window.unityInstance.SendMessage(_0x408ebf, _0x100efd, JSON.stringify(_0x36c323.val()));
      });
    } catch (_0x4c2549) {
      window.unityInstance.SendMessage(_0x408ebf, _0x257f29, JSON.stringify(_0x4c2549, Object.getOwnPropertyNames(_0x4c2549)));
    }
  }
  function _0x48ee04(_0x40ec56, _0x263d49, _0x57affd, _0x9d2463, _0x43eb94) {
    var _0x542535 = _0x211f48(_0x40ec56);
    var _0x1f32a1 = _0x211f48(_0x57affd);
    var _0x2f568a = _0x211f48(_0x9d2463);
    var _0x3874d3 = _0x211f48(_0x43eb94);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x542535 + "/collection/"] = firebase.firestore().collection(_0x542535).onSnapshot({
        includeMetadataChanges: _0x263d49 == 1
      }, function (_0x4e96b7) {
        var _0x5680b7 = {};
        _0x4e96b7.forEach(function (_0x198766) {
          _0x5680b7[_0x198766.id] = _0x198766.data();
        });
        window.unityInstance.SendMessage(_0x1f32a1, _0x2f568a, JSON.stringify(_0x5680b7));
      }, function (_0x4729b2) {
        window.unityInstance.SendMessage(_0x1f32a1, _0x3874d3, JSON.stringify(_0x4729b2, Object.getOwnPropertyNames(_0x4729b2)));
      });
    } catch (_0x32a3e3) {
      window.unityInstance.SendMessage(_0x1f32a1, _0x3874d3, JSON.stringify(_0x32a3e3, Object.getOwnPropertyNames(_0x32a3e3)));
    }
  }
  function _0x49c707(_0x4046fa, _0x448bd7, _0x3376c7, _0x2d07ad, _0x14bde7, _0x2ad2d2) {
    var _0x2ede83 = _0x211f48(_0x4046fa);
    var _0x1d67ef = _0x211f48(_0x448bd7);
    var _0x586b27 = _0x211f48(_0x2d07ad);
    var _0x506548 = _0x211f48(_0x14bde7);
    var _0x4aee04 = _0x211f48(_0x2ad2d2);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x2ede83 + "/" + _0x1d67ef] = firebase.firestore().collection(_0x2ede83).doc(_0x1d67ef).onSnapshot({
        includeMetadataChanges: _0x3376c7 == 1
      }, function (_0x178aa4) {
        window.unityInstance.SendMessage(_0x586b27, _0x506548, JSON.stringify(_0x178aa4.data()));
      }, function (_0x4d30fa) {
        window.unityInstance.SendMessage(_0x586b27, _0x4aee04, JSON.stringify(_0x4d30fa, Object.getOwnPropertyNames(_0x4d30fa)));
      });
    } catch (_0x2783c2) {
      window.unityInstance.SendMessage(_0x586b27, _0x4aee04, JSON.stringify(_0x2783c2, Object.getOwnPropertyNames(_0x2783c2)));
    }
  }
  function _0x2a68a4(_0x58e1bc, _0x2f9293, _0x562730, _0x4ea708) {
    var _0xa3f61a = _0x211f48(_0x58e1bc);
    var _0x2536b9 = _0x211f48(_0x2f9293);
    var _0x387f1d = _0x211f48(_0x562730);
    var _0xcfeb9a = _0x211f48(_0x4ea708);
    try {
      firebase.database().ref(_0xa3f61a).on("value", function (_0x2d9d53) {
        window.unityInstance.SendMessage(_0x2536b9, _0x387f1d, JSON.stringify(_0x2d9d53.val()));
      });
    } catch (_0x10879e) {
      window.unityInstance.SendMessage(_0x2536b9, _0xcfeb9a, JSON.stringify(_0x10879e, Object.getOwnPropertyNames(_0x10879e)));
    }
  }
  function _0xf9c515(_0x5d49bf) {
    var _0x3fe018 = _0x211f48(_0x5d49bf);
    firebaseLogEvent(_0x3fe018);
  }
  function _0x1d2087(_0x586e19, _0x444286) {
    var _0x4fac57 = _0x211f48(_0x586e19);
    var _0x27336c = JSON.parse(_0x211f48(_0x444286));
    firebaseLogEventParameter(_0x4fac57, _0x27336c);
  }
  function _0x58b23a(_0x49c2c1, _0x44a16d, _0x26b976, _0x1dc498, _0x31f523) {
    var _0x157407 = _0x211f48(_0x49c2c1);
    var _0x4c7a95 = _0x211f48(_0x26b976);
    var _0x5de320 = _0x211f48(_0x1dc498);
    var _0x48c68a = _0x211f48(_0x31f523);
    try {
      firebase.database().ref(_0x157407).transaction(function (_0x355289) {
        if (!isNaN(_0x355289)) {
          return _0x355289 + _0x44a16d;
        } else {
          return _0x44a16d;
        }
      }).then(function (_0x24dbe7) {
        window.unityInstance.SendMessage(_0x4c7a95, _0x5de320, "Success: transaction run in " + _0x157407);
      });
    } catch (_0x4decbc) {
      window.unityInstance.SendMessage(_0x4c7a95, _0x48c68a, JSON.stringify(_0x4decbc, Object.getOwnPropertyNames(_0x4decbc)));
    }
  }
  function _0x5249d6(_0x49c6f3, _0x2282bd, _0x52d1d9) {
    var _0x370ad7 = _0x211f48(_0x49c6f3);
    var _0x31e29f = _0x211f48(_0x2282bd);
    var _0x4d1af1 = _0x211f48(_0x52d1d9);
    firebase.auth().onAuthStateChanged(function (_0x3cbd7d) {
      if (_0x3cbd7d) {
        window.unityInstance.SendMessage(_0x370ad7, _0x31e29f, JSON.stringify(_0x3cbd7d));
      } else {
        window.unityInstance.SendMessage(_0x370ad7, _0x4d1af1, "User signed out");
      }
    });
  }
  function _0xe273d2(_0x5b0cb0) {
    window.wgUnityInstance = _0x4c150b;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x5b0cb0);
    } catch (_0x1048ac) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x5357c6 = document.createElement("script");
      _0x5357c6.addEventListener("load", function (_0x542c4c) {
        var _0x5664b6 = document.createElement("script");
        _0x5664b6.addEventListener("load", function (_0x3d3fc1) {
          console.log("WGSDK: Development resources loaded.");
          _0x4aa55a(_0x5b0cb0, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x5664b6);
        _0x5664b6.src = window.GMSOFT_ADS_INFO.wgLibrary;
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x5357c6);
      _0x5357c6.src = window.GMSOFT_ADS_INFO.wgConf;
    }
  }
  function _0x4aa55a(_0x2466de, _0x54dffa) {
    var _0x1b4bfe;
    if (_0x54dffa === true) {
      _0x1b4bfe = _0x2466de;
    } else {
      _0x1b4bfe = _0x211f48(_0x2466de);
    }
    setTimeout(function () {
      _0xe273d2(_0x1b4bfe);
    }, 250);
  }
  function _0x47301f(_0x40b019, _0x1c5227, _0x5a1f58, _0x4ddbd0, _0x2cfaeb) {
    var _0x231195 = _0x211f48(_0x40b019);
    var _0x419b3e = _0x211f48(_0x1c5227);
    var _0x4f7dfd = _0x211f48(_0x5a1f58);
    var _0x552c57 = _0x211f48(_0x4ddbd0);
    var _0xa5f678 = _0x211f48(_0x2cfaeb);
    try {
      firebase.database().ref(_0x231195).set(JSON.parse(_0x419b3e)).then(function (_0x445763) {
        window.unityInstance.SendMessage(_0x4f7dfd, _0x552c57, "Success: " + _0x419b3e + " was posted to " + _0x231195);
      });
    } catch (_0x4d523a) {
      window.unityInstance.SendMessage(_0x4f7dfd, _0xa5f678, JSON.stringify(_0x4d523a, Object.getOwnPropertyNames(_0x4d523a)));
    }
  }
  function _0x14f6f3(_0x5b791b, _0x149009, _0x250a8b, _0x5e8b67, _0x2ac280) {
    var _0x1a2bbd = _0x211f48(_0x5b791b);
    var _0x3bd96b = _0x211f48(_0x149009);
    var _0x21925a = _0x211f48(_0x250a8b);
    var _0x588e5d = _0x211f48(_0x5e8b67);
    var _0x4a0ac7 = _0x211f48(_0x2ac280);
    try {
      firebase.database().ref(_0x1a2bbd).push().set(JSON.parse(_0x3bd96b)).then(function (_0x279634) {
        window.unityInstance.SendMessage(_0x21925a, _0x588e5d, "Success: " + _0x3bd96b + " was pushed to " + _0x1a2bbd);
      });
    } catch (_0x50e4c8) {
      window.unityInstance.SendMessage(_0x21925a, _0x4a0ac7, JSON.stringify(_0x50e4c8, Object.getOwnPropertyNames(_0x50e4c8)));
    }
  }
  function _0x13ec77() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x1ffa25) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x19855f() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0x4c150b);
    } catch (_0x39055f) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0x19855f();
      }, 250);
    }
  }
  function _0x2ccd05() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0x233fd5) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x34ce93();
    }
  }
  function _0x34ce93() {
    setTimeout(function () {
      _0x2ccd05();
    }, 250);
  }
  function _0x36425f(_0x27921e, _0x14514a, _0x33e6c4, _0x4cee15, _0xc53578, _0x3a738f, _0x1695c5) {
    var _0x3d7331 = _0x211f48(_0x27921e);
    var _0x52fba6 = _0x211f48(_0x14514a);
    var _0x1e0818 = _0x211f48(_0x33e6c4);
    var _0x5da7f8 = _0x211f48(_0x4cee15);
    var _0x5a2ebc = _0x211f48(_0xc53578);
    var _0x444596 = _0x211f48(_0x3a738f);
    var _0x505a65 = _0x211f48(_0x1695c5);
    try {
      var _0x4cee15 = {};
      _0x4cee15[_0x1e0818] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x5da7f8));
      firebase.firestore().collection(_0x3d7331).doc(_0x52fba6).update(_0x4cee15).then(function () {
        window.unityInstance.SendMessage(_0x5a2ebc, _0x444596, "Success: element " + _0x5da7f8 + " was removed in " + _0x1e0818);
      }).catch(function (_0x48da11) {
        window.unityInstance.SendMessage(_0x5a2ebc, _0x505a65, JSON.stringify(_0x48da11, Object.getOwnPropertyNames(_0x48da11)));
      });
    } catch (_0x37eadb) {
      window.unityInstance.SendMessage(_0x5a2ebc, _0x505a65, JSON.stringify(_0x37eadb, Object.getOwnPropertyNames(_0x37eadb)));
    }
  }
  function _0x5cced3(_0x1b19d1) {
    var _0x204155 = window.unityStringify(_0x1b19d1);
    var _0x365fe5 = {
      adStarted: function () {
        window.UnitySDK.unlockPointer();
        _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        window.UnitySDK.lockPointer();
        _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_AdFinished");
      },
      adError: function (_0x542cfa) {
        _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x542cfa));
      }
    };
    window.CrazyGames.SDK.ad.requestAd(_0x204155, _0x365fe5).catch(function (_0x4fb924) {
      window.UnitySDK.logError("Error while requesting ad:", _0x4fb924);
      _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
        code: "unknown",
        message: _0x4fb924.message || "Unknown error"
      }));
    });
  }
  function _0x1f8c63(_0x2123ec) {
    var _0x561ee1 = JSON.parse(window.unityStringify(_0x2123ec));
    try {
      window.CrazyGames.SDK.banner.requestOverlayBanners(_0x561ee1, function (_0x290147, _0x3accb2, _0x57f45a) {});
    } catch (_0x5e4d03) {
      window.UnitySDK.logError("Error while requesting banners:", _0x5e4d03);
    }
  }
  function _0x325200(_0x34b0d5) {
    var _0x50e170 = JSON.parse(window.unityStringify(_0x34b0d5));
    var _0x33ce87 = "";
    try {
      _0x33ce87 = window.CrazyGames.SDK.game.inviteLink(_0x50e170);
    } catch (_0x12eb7a) {
      window.UnitySDK.logError("Error while requesting invite url:", _0x12eb7a);
    }
    var _0x14b853 = _0x19d23e(_0x33ce87) + 1;
    var _0xaf2e39 = _0x5d6d4a(_0x14b853);
    _0x156f83(_0x33ce87, _0xaf2e39, _0x14b853);
    return _0xaf2e39;
  }
  function _0x92b21(_0x31b905) {
    _0x31b905 = _0x211f48(_0x31b905);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x31b905,
      onEvent: function (_0x99162) {
        switch (_0x99162.name) {
          case "SDK_GAME_START":
            _0x4b2a2f("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x4b2a2f("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x4b2a2f("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x4b2a2f("GameDistribution", "EventCallback", _0x99162.name);
        }
      }
    };
    (function (_0x1f34e0, _0x16e6ed, _0x39108f) {
      var _0x4fb718;
      var _0x5de1ec = _0x1f34e0.getElementsByTagName(_0x16e6ed)[0];
      if (_0x1f34e0.getElementById(_0x39108f)) {
        return;
      }
      _0x4fb718 = _0x1f34e0.createElement(_0x16e6ed);
      _0x4fb718.id = _0x39108f;
      _0x4fb718.src = "//html5.api.gamedistribution.com/main.min.js";
      _0x5de1ec.parentNode.insertBefore(_0x4fb718, _0x5de1ec);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0x189b64() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x38dbba) {
        _0x4b2a2f("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x57635f) {
        _0x4b2a2f("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x229f2e(_0x1d87e2) {
    _0x1d87e2 = _0x211f48(_0x1d87e2);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x1d87e2 !== "undefined") {
      gdsdk.sendEvent(_0x1d87e2).then(function (_0x3f4c9d) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0x4dae7) {
        console.log(_0x4dae7.message);
      });
    }
  }
  function _0xdb8fe4(_0x4d1fd3) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x4d1fd3 = _0x211f48(_0x4d1fd3) || gdsdk.AdType.Interstitial;
      gdsdk.showAd(_0x4d1fd3).then(function (_0x1f1b9a) {
        if (_0x4d1fd3 === gdsdk.AdType.Rewarded) {
          _0x4b2a2f("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x237b54) {
        if (_0x4d1fd3 === gdsdk.AdType.Rewarded) {
          _0x4b2a2f("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x3bcc44(_0x26134b, _0x2b2a74, _0xd911e8, _0xaf1660, _0x65a78b, _0x28249e) {
    var _0xd4942d = _0x211f48(_0x26134b);
    var _0x594b05 = _0x211f48(_0x2b2a74);
    var _0x3bab98 = _0x211f48(_0xd911e8);
    var _0x1d0f94 = _0x211f48(_0xaf1660);
    var _0x29a07b = _0x211f48(_0x65a78b);
    var _0x438d1b = _0x211f48(_0x28249e);
    try {
      firebase.firestore().collection(_0xd4942d).doc(_0x594b05).set(JSON.parse(_0x3bab98)).then(function () {
        window.unityInstance.SendMessage(_0x1d0f94, _0x29a07b, "Success: document " + _0x594b05 + " was set");
      }).catch(function (_0x4fbb68) {
        window.unityInstance.SendMessage(_0x1d0f94, _0x438d1b, JSON.stringify(_0x4fbb68, Object.getOwnPropertyNames(_0x4fbb68)));
      });
    } catch (_0x1a8c4e) {
      window.unityInstance.SendMessage(_0x1d0f94, _0x438d1b, JSON.stringify(_0x1a8c4e, Object.getOwnPropertyNames(_0x1a8c4e)));
    }
  }
  function _0x5011ed(_0x36be06) {
    var _0x2e5088 = JSON.parse(_0x211f48(_0x36be06));
    firebaseSetUserProperties(_0x2e5088);
  }
  function _0x4db8f3() {
    window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x51bcba) {
      _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        linkAccountResponseStr: JSON.stringify(_0x51bcba)
      }));
    }).catch(function (_0x2d77f7) {
      _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x2d77f7)
      }));
    });
  }
  function _0x2cf77a() {
    window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0xc88943) {
      _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        userJson: JSON.stringify(_0xc88943)
      }));
    }).catch(function (_0x86a7e7) {
      _0x4b2a2f("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x86a7e7)
      }));
    });
  }
  function _0x5b45e3(_0x59e107) {
    var _0x13c37d = JSON.parse(window.unityStringify(_0x59e107));
    var _0x437e59 = "";
    try {
      _0x437e59 = window.CrazyGames.SDK.game.showInviteButton(_0x13c37d);
    } catch (_0x1b13fc) {
      window.UnitySDK.logError("Error while showing invite button:", _0x1b13fc);
    }
    var _0x4f1f6b = _0x19d23e(_0x437e59) + 1;
    var _0xba305a = _0x5d6d4a(_0x4f1f6b);
    _0x156f83(_0x437e59, _0xba305a, _0x4f1f6b);
    return _0xba305a;
  }
  function _0x57871d() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0x353338(_0x2c9a90, _0x27d605, _0x4dd297) {
    var _0x3a6ae1 = _0x211f48(_0x2c9a90);
    var _0x5471e3 = _0x211f48(_0x27d605);
    var _0x1e6582 = _0x211f48(_0x4dd297);
    try {
      firebase.auth().signInAnonymously().then(function (_0x1c8deb) {
        window.unityInstance.SendMessage(_0x3a6ae1, _0x5471e3, "Success: signed up for " + _0x1c8deb);
      }).catch(function (_0x341b68) {
        window.unityInstance.SendMessage(_0x3a6ae1, _0x1e6582, JSON.stringify(_0x341b68, Object.getOwnPropertyNames(_0x341b68)));
      });
    } catch (_0x3f8403) {
      window.unityInstance.SendMessage(_0x3a6ae1, _0x1e6582, JSON.stringify(_0x3f8403, Object.getOwnPropertyNames(_0x3f8403)));
    }
  }
  function _0x1c778a(_0x4f4e30, _0x5c97c0, _0x110bae, _0x34eaad, _0x4563a5) {
    var _0x36e909 = _0x211f48(_0x4f4e30);
    var _0x5801ef = _0x211f48(_0x5c97c0);
    var _0x4d7ead = _0x211f48(_0x110bae);
    var _0x895db = _0x211f48(_0x34eaad);
    var _0xdadd6b = _0x211f48(_0x4563a5);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x36e909, _0x5801ef).then(function (_0x396e66) {
        window.unityInstance.SendMessage(_0x4d7ead, _0x895db, "Success: signed in for " + _0x36e909);
      }).catch(function (_0x6107bc) {
        window.unityInstance.SendMessage(_0x4d7ead, _0xdadd6b, JSON.stringify(_0x6107bc, Object.getOwnPropertyNames(_0x6107bc)));
      });
    } catch (_0x1f5b26) {
      window.unityInstance.SendMessage(_0x4d7ead, _0xdadd6b, JSON.stringify(_0x1f5b26, Object.getOwnPropertyNames(_0x1f5b26)));
    }
  }
  function _0x1308d8(_0x47fcc2, _0x2337c4, _0x889fd7) {
    var _0x18389f = _0x211f48(_0x47fcc2);
    var _0x5bc48a = _0x211f48(_0x2337c4);
    var _0x46055b = _0x211f48(_0x889fd7);
    try {
      var _0x47d870 = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0x47d870).then(function (_0x53acf0) {
        window.unityInstance.SendMessage(_0x18389f, _0x5bc48a, "Success: signed in with Facebook!");
      }).catch(function (_0x45cec1) {
        window.unityInstance.SendMessage(_0x18389f, _0x46055b, JSON.stringify(_0x45cec1, Object.getOwnPropertyNames(_0x45cec1)));
      });
    } catch (_0x340e5c) {
      window.unityInstance.SendMessage(_0x18389f, _0x46055b, JSON.stringify(_0x340e5c, Object.getOwnPropertyNames(_0x340e5c)));
    }
  }
  function _0x1eb3af(_0x39d1c8, _0x142519, _0x4f72c1) {
    var _0x2b4cfe = _0x211f48(_0x39d1c8);
    var _0x12013d = _0x211f48(_0x142519);
    var _0x359fb0 = _0x211f48(_0x4f72c1);
    try {
      var _0x521962 = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x521962).then(function (_0x749658) {
        window.unityInstance.SendMessage(_0x2b4cfe, _0x12013d, "Success: signed in with Google!");
      }).catch(function (_0x451392) {
        window.unityInstance.SendMessage(_0x2b4cfe, _0x359fb0, JSON.stringify(_0x451392, Object.getOwnPropertyNames(_0x451392)));
      });
    } catch (_0x559644) {
      window.unityInstance.SendMessage(_0x2b4cfe, _0x359fb0, JSON.stringify(_0x559644, Object.getOwnPropertyNames(_0x559644)));
    }
  }
  function _0x5111bb(_0x4cb74b, _0x480251, _0xf5803f, _0x4828bc) {
    var _0x47a109 = _0x211f48(_0x4cb74b);
    var _0x4d97cc = _0x211f48(_0x480251);
    var _0x2e3543 = _0x211f48(_0xf5803f);
    var _0x1cbab2 = _0x211f48(_0x4828bc);
    try {
      firebase.database().ref(_0x47a109).off("child_added");
      window.unityInstance.SendMessage(_0x4d97cc, _0x2e3543, "Success: listener removed");
    } catch (_0x2e581e) {
      window.unityInstance.SendMessage(_0x4d97cc, _0x1cbab2, JSON.stringify(_0x2e581e, Object.getOwnPropertyNames(_0x2e581e)));
    }
  }
  function _0x100ab4(_0xda280b, _0x2fc376, _0x7b874c, _0x57ff5c) {
    var _0x94f0a3 = _0x211f48(_0xda280b);
    var _0x608555 = _0x211f48(_0x2fc376);
    var _0x2250c0 = _0x211f48(_0x7b874c);
    var _0x1cdd4c = _0x211f48(_0x57ff5c);
    try {
      firebase.database().ref(_0x94f0a3).off("child_changed");
      window.unityInstance.SendMessage(_0x608555, _0x2250c0, "Success: listener removed");
    } catch (_0x19cf3b) {
      window.unityInstance.SendMessage(_0x608555, _0x1cdd4c, JSON.stringify(_0x19cf3b, Object.getOwnPropertyNames(_0x19cf3b)));
    }
  }
  function _0x4a5a7d(_0x476362, _0x4779f8, _0x21c2ba, _0x976d55) {
    var _0x3dcc7c = _0x211f48(_0x476362);
    var _0x2dab97 = _0x211f48(_0x4779f8);
    var _0x1c8956 = _0x211f48(_0x21c2ba);
    var _0x1e0d5e = _0x211f48(_0x976d55);
    try {
      firebase.database().ref(_0x3dcc7c).off("child_removed");
      window.unityInstance.SendMessage(_0x2dab97, _0x1c8956, "Success: listener removed");
    } catch (_0x5e363b) {
      window.unityInstance.SendMessage(_0x2dab97, _0x1e0d5e, JSON.stringify(_0x5e363b, Object.getOwnPropertyNames(_0x5e363b)));
    }
  }
  function _0x528cc6(_0x2fe67a, _0x5f3a62, _0x586404, _0xf10f10) {
    var _0xfc62c8 = _0x211f48(_0x2fe67a);
    var _0x3f20cc = _0x211f48(_0x5f3a62);
    var _0x4bc18f = _0x211f48(_0x586404);
    var _0x77154f = _0x211f48(_0xf10f10);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0xfc62c8 + "/collection/"]();
      window.unityInstance.SendMessage(_0x3f20cc, _0x4bc18f, "Success: listener was removed");
    } catch (_0xb60aa4) {
      window.unityInstance.SendMessage(_0x3f20cc, _0x77154f, JSON.stringify(_0xb60aa4, Object.getOwnPropertyNames(_0xb60aa4)));
    }
  }
  function _0x44d5c5(_0x5b0ab0, _0x137c6c, _0x19a50a, _0x23fcad, _0x19d159) {
    var _0x2d4d64 = _0x211f48(_0x5b0ab0);
    var _0x5438fb = _0x211f48(_0x137c6c);
    var _0x6f696d = _0x211f48(_0x19a50a);
    var _0x3f44a1 = _0x211f48(_0x23fcad);
    var _0x74327e = _0x211f48(_0x19d159);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x2d4d64 + "/" + _0x5438fb]();
      window.unityInstance.SendMessage(_0x6f696d, _0x3f44a1, "Success: listener was removed");
    } catch (_0x5b7362) {
      window.unityInstance.SendMessage(_0x6f696d, _0x74327e, JSON.stringify(_0x5b7362, Object.getOwnPropertyNames(_0x5b7362)));
    }
  }
  function _0x3215d6(_0x2da563, _0x54a176, _0x305669, _0x362297) {
    var _0x4c4752 = _0x211f48(_0x2da563);
    var _0x51484b = _0x211f48(_0x54a176);
    var _0x5ae794 = _0x211f48(_0x305669);
    var _0x3c24ec = _0x211f48(_0x362297);
    try {
      firebase.database().ref(_0x4c4752).off("value");
      window.unityInstance.SendMessage(_0x51484b, _0x5ae794, "Success: listener removed");
    } catch (_0x5f0724) {
      window.unityInstance.SendMessage(_0x51484b, _0x3c24ec, JSON.stringify(_0x5f0724, Object.getOwnPropertyNames(_0x5f0724)));
    }
  }
  function _0x132826() {
    try {
      window.CrazyGames.SDK.data.syncUnityGameData();
    } catch (_0x254671) {
      window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x254671);
    }
  }
  function _0x20ae1d(_0x2d54fe, _0x3477e7, _0x50b367, _0x5965df) {
    var _0x5dc7e4 = _0x211f48(_0x2d54fe);
    var _0x427dea = _0x211f48(_0x3477e7);
    var _0x5657d4 = _0x211f48(_0x50b367);
    var _0x50c25f = _0x211f48(_0x5965df);
    try {
      firebase.database().ref(_0x5dc7e4).transaction(function (_0x511947) {
        if (typeof _0x511947 === "boolean") {
          return !_0x511947;
        } else {
          return true;
        }
      }).then(function (_0x5a6994) {
        window.unityInstance.SendMessage(_0x427dea, _0x5657d4, "Success: transaction run in " + _0x5dc7e4);
      });
    } catch (_0x2584cb) {
      window.unityInstance.SendMessage(_0x427dea, _0x50c25f, JSON.stringify(_0x2584cb, Object.getOwnPropertyNames(_0x2584cb)));
    }
  }
  function _0x53a2e5(_0x24e5aa, _0x51cbea, _0xa1de6e, _0xb866c7, _0x15eba1, _0x51821f) {
    var _0x1495ab = _0x211f48(_0x24e5aa);
    var _0x2b4380 = _0x211f48(_0x51cbea);
    var _0x183579 = _0x211f48(_0xa1de6e);
    var _0x5a5c6a = _0x211f48(_0xb866c7);
    var _0x3479fe = _0x211f48(_0x15eba1);
    var _0x312a30 = _0x211f48(_0x51821f);
    try {
      firebase.firestore().collection(_0x1495ab).doc(_0x2b4380).update(JSON.parse(_0x183579)).then(function () {
        window.unityInstance.SendMessage(_0x5a5c6a, _0x3479fe, "Success: document " + _0x2b4380 + " was updated");
      }).catch(function (_0xcb364) {
        window.unityInstance.SendMessage(_0x5a5c6a, _0x312a30, JSON.stringify(_0xcb364, Object.getOwnPropertyNames(_0xcb364)));
      });
    } catch (_0x366fd6) {
      window.unityInstance.SendMessage(_0x5a5c6a, _0x312a30, JSON.stringify(_0x366fd6, Object.getOwnPropertyNames(_0x366fd6)));
    }
  }
  function _0x283dfb(_0x17a45c, _0x4dc992, _0x42d36b, _0x416d9d, _0x48c821) {
    var _0x484731 = _0x211f48(_0x17a45c);
    var _0x1b9747 = _0x211f48(_0x4dc992);
    var _0x197344 = _0x211f48(_0x42d36b);
    var _0x52a1c3 = _0x211f48(_0x416d9d);
    var _0x1b713a = _0x211f48(_0x48c821);
    try {
      firebase.database().ref(_0x484731).update(JSON.parse(_0x1b9747)).then(function (_0x4ecd85) {
        window.unityInstance.SendMessage(_0x197344, _0x52a1c3, "Success: " + _0x1b9747 + " was updated in " + _0x484731);
      });
    } catch (_0x4e5dc2) {
      window.unityInstance.SendMessage(_0x197344, _0x1b713a, JSON.stringify(_0x4e5dc2, Object.getOwnPropertyNames(_0x4e5dc2)));
    }
  }
  function _0x5321d9(_0x330e3f, _0x497319, _0x5a804e, _0x5b362b, _0x26eaac) {
    var _0x4ab658 = _0x211f48(_0x330e3f);
    var _0xf35985 = _0x211f48(_0x497319);
    var _0x5a12bf = _0x211f48(_0x5a804e);
    var _0x35ffcf = _0x211f48(_0x5b362b);
    var _0x56fab1 = _0x211f48(_0x26eaac);
    try {
      firebase.storage().ref(_0x4ab658).put(_0x29bced(_0xf35985)).then(function (_0xef30f2) {
        window.unityInstance.SendMessage(_0x5a12bf, _0x35ffcf, "Success: data was posted to " + _0x4ab658);
      });
    } catch (_0x540da3) {
      window.unityInstance.SendMessage(_0x5a12bf, _0x56fab1, JSON.stringify(_0x540da3, Object.getOwnPropertyNames(_0x540da3)));
    }
    function _0x29bced(_0x13d5eb) {
      var _0x262887 = window.atob(_0x13d5eb);
      var _0x52e9d5 = _0x262887.length;
      var _0x26560a = new Uint8Array(_0x52e9d5);
      for (var _0x544a13 = 0; _0x544a13 < _0x52e9d5; _0x544a13++) {
        _0x26560a[_0x544a13] = _0x262887.charCodeAt(_0x544a13);
      }
      return _0x26560a.buffer;
    }
  }
  var _0x1bd781 = {
    requestInstances: {},
    nextRequestId: 1,
    loglevel: 2,
    SendTextToCSharpSide: function (_0x3eee73, _0x1c15f7, _0x4c39e9) {
      const _0x2102e8 = new TextEncoder();
      const _0x4ffcc3 = _0x2102e8.encode(_0x4c39e9);
      const _0x3f9ef2 = function (_0x2b8656, _0x1ff806) {
        return _0x5e1bf4.apply(null, [_0x1bd781.onallocbuffer, _0x2b8656, _0x1ff806]);
      }(_0x3eee73, _0x4ffcc3.length);
      _0x298c61.set(_0x4ffcc3, _0x3f9ef2);
      (function (_0x27ae71, _0x3eb2c7, _0x20ca12) {
        _0x2c15b5.apply(null, [_0x1c15f7, _0x27ae71, _0x3eb2c7, _0x20ca12]);
      })(_0x3eee73, _0x3f9ef2, _0x4ffcc3.length);
    },
    GetResponseHeaders: function (_0x22fc04, _0x25e287) {
      if (_0x1bd781.loglevel <= 1) {
        console.log("GetResponseHeaders(" + _0x22fc04 + ")");
      }
      var _0x878f1a = "";
      if (document && document.cookie) {
        var _0x986a67 = document.cookie.split(";");
        for (var _0x5be59c = 0; _0x5be59c < _0x986a67.length; ++_0x5be59c) {
          const _0x53641e = _0x986a67[_0x5be59c].trim();
          if (_0x53641e.length > 0) {
            _0x878f1a += "Set-Cookie:" + _0x53641e + "\n";
          }
        }
      }
      const _0x281d86 = _0x1bd781.requestInstances[_0x22fc04].getAllResponseHeaders().trim().split(/[\r\n]+/);
      _0x281d86.forEach(_0x1b3fe6 => {
        const _0x5973bc = _0x1b3fe6.split(": ");
        const _0x1e217d = _0x5973bc.shift();
        const _0x1167bd = _0x5973bc.join(": ");
        if (_0x1e217d !== "content-length") {
          _0x878f1a += _0x1e217d + ":" + _0x1167bd + "\n";
        }
      });
      _0x1bd781.SendTextToCSharpSide(_0x22fc04, _0x25e287, _0x878f1a);
    }
  };
  function _0x965a86(_0x25d0ba) {
    if (_0x1bd781.loglevel <= 1) {
      console.log("XHR_Abort(" + _0x25d0ba + ")");
    }
    _0x1bd781.requestInstances[_0x25d0ba].abort();
  }
  function _0x197a2a(_0x11c08d, _0x5747d1, _0x159935, _0x5177ce, _0x523f8f) {
    var _0x472cf7 = new URL(_0x211f48(_0x5747d1));
    var _0x2318b2 = _0x211f48(_0x11c08d);
    if (_0x1bd781.loglevel <= 1) {
      console.log("XHR_Create (" + _0x1bd781.nextRequestId + ", " + _0x2318b2 + ", " + _0x472cf7.toString() + ", " + _0x523f8f + ")");
    }
    var _0x38f398 = new XMLHttpRequest();
    if (_0x159935 && _0x5177ce) {
      var _0x198849 = _0x211f48(_0x159935);
      var _0x13f20f = _0x211f48(_0x5177ce);
      _0x38f398.withCredentials = true;
      _0x38f398.open(_0x2318b2, _0x472cf7.toString(), true, _0x198849, _0x13f20f);
    } else {
      _0x38f398.withCredentials = _0x523f8f;
      _0x38f398.open(_0x2318b2, _0x472cf7.toString(), true);
    }
    _0x38f398.responseType = "arraybuffer";
    _0x1bd781.requestInstances[_0x1bd781.nextRequestId] = _0x38f398;
    return _0x1bd781.nextRequestId++;
  }
  function _0x3b26dd(_0x2d385e) {
    if (_0x1bd781.loglevel <= 1) {
      console.log("XHR_Release(" + _0x2d385e + ")");
    }
    delete _0x1bd781.requestInstances[_0x2d385e];
  }
  function _0x12a4e3(_0x42d992, _0x322882, _0xa569af) {
    if (_0x1bd781.loglevel <= 1) {
      console.log("XHR_Send(" + _0x42d992 + ", " + _0x322882 + ", " + _0xa569af + ")");
    }
    var _0xe3ead5 = _0x1bd781.requestInstances[_0x42d992];
    try {
      if (_0xa569af > 0) {
        _0xe3ead5.send(_0x298c61.subarray(_0x322882, _0x322882 + _0xa569af));
      } else {
        _0xe3ead5.send();
      }
    } catch (_0x79ee82) {
      if (_0x1bd781.loglevel <= 4) {
        console.error("XHR_Send(" + _0x42d992 + "): " + _0x79ee82.name + " : " + _0x79ee82.message);
      }
    }
  }
  function _0x4a826d(_0x250f45) {
    _0x1bd781.loglevel = _0x250f45;
  }
  function _0x39714a(_0x58da83, _0x3f8bb1, _0x41eec7) {
    if (_0x1bd781.loglevel <= 1) {
      console.log("XHR_SetProgressHandler(" + _0x58da83 + ")");
    }
    var _0x2cdfb9 = _0x1bd781.requestInstances[_0x58da83];
    if (_0x2cdfb9) {
      if (_0x3f8bb1) {
        _0x2cdfb9.onprogress = function _0x496eeb(_0x308370) {
          if (_0x1bd781.loglevel <= 1) {
            console.log("XHR_SetProgressHandler download(" + _0x58da83 + ", " + _0x308370.loaded + ", " + _0x308370.total + ")");
          }
          if (_0x308370.lengthComputable) {
            (function (_0x56cf13, _0x3b84c5, _0x1c1aa9) {
              _0x2c15b5.apply(null, [_0x3f8bb1, _0x56cf13, _0x3b84c5, _0x1c1aa9]);
            })(_0x58da83, _0x308370.loaded, _0x308370.total);
          }
        };
      }
      if (_0x41eec7) {
        _0x2cdfb9.upload.addEventListener("progress", function _0x42b488(_0x439cc0) {
          if (_0x1bd781.loglevel <= 1) {
            console.log("XHR_SetProgressHandler upload(" + _0x58da83 + ", " + _0x439cc0.loaded + ", " + _0x439cc0.total + ")");
          }
          if (_0x439cc0.lengthComputable) {
            (function (_0x374dcf, _0x119d0f, _0x421ddc) {
              _0x2c15b5.apply(null, [_0x41eec7, _0x374dcf, _0x119d0f, _0x421ddc]);
            })(_0x58da83, _0x439cc0.loaded, _0x439cc0.total);
          }
        }, true);
      }
    }
  }
  function _0x5e25b2(_0x47f469, _0x4be262, _0x5ebde6) {
    var _0x449026 = _0x211f48(_0x4be262);
    var _0x415841 = _0x211f48(_0x5ebde6);
    if (_0x1bd781.loglevel <= 1) {
      console.log("XHR_SetRequestHeader(" + _0x449026 + ", " + _0x415841 + ")");
    }
    if (_0x449026 != "Cookie") {
      _0x1bd781.requestInstances[_0x47f469].setRequestHeader(_0x449026, _0x415841);
    } else {
      var _0x2a1853 = _0x415841.split(";");
      for (var _0xebe949 = 0; _0xebe949 < _0x2a1853.length; _0xebe949++) {
        document.cookie = _0x2a1853[_0xebe949];
      }
    }
  }
  function _0x17d86f(_0x3370d9, _0x41c26f, _0x25f24e, _0x193a70, _0x206d5b, _0x6ef4a, _0x39ad24) {
    if (_0x1bd781.loglevel <= 1) {
      console.log("XHR_SetResponseHandler(" + _0x3370d9 + ")");
    }
    _0x1bd781.onallocbuffer = _0x39ad24;
    var _0x4d6ffd = _0x1bd781.requestInstances[_0x3370d9];
    _0x4d6ffd.onreadystatechange = _0x939d0f => {
      if (_0x1bd781.loglevel <= 1) {
        console.log(_0x3370d9 + " onreadystatechange(" + _0x4d6ffd.readyState + ")");
      }
      switch (_0x4d6ffd.readyState) {
        case XMLHttpRequest.UNSENT:
          break;
        case XMLHttpRequest.OPENED:
          break;
        case XMLHttpRequest.HEADERS_RECEIVED:
          {
            _0x1bd781.SendTextToCSharpSide(_0x3370d9, _0x6ef4a, "HTTP/1.1 " + _0x4d6ffd.status + " " + _0x4d6ffd.statusText + "\n");
            _0x1bd781.GetResponseHeaders(_0x3370d9, _0x6ef4a);
            break;
          }
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          break;
      }
    };
    _0x4d6ffd.onloadstart = _0x45c6a4 => {
      if (_0x1bd781.loglevel <= 1) {
        console.log(_0x3370d9 + " onloadstart: " + _0x45c6a4);
      }
    };
    _0x4d6ffd.onload = function _0x228e33(_0x147e93) {
      if (_0x1bd781.loglevel <= 1) {
        console.log(_0x3370d9 + " onload(" + _0x4d6ffd.status + ", " + _0x4d6ffd.statusText + ")");
      }
      if (_0x41c26f) {
        var _0x2c6b79 = 0;
        var _0x11bf2a = 0;
        if (_0x4d6ffd.response) {
          var _0x5466af = _0x4d6ffd.response;
          _0x2c6b79 = _0x5466af.byteLength;
          _0x1bd781.SendTextToCSharpSide(_0x3370d9, _0x6ef4a, "content-length:" + _0x2c6b79 + "\n\n");
          _0x11bf2a = function (_0x361538, _0x3f1ad7) {
            return _0x5e1bf4.apply(null, [_0x39ad24, _0x361538, _0x3f1ad7]);
          }(_0x3370d9, _0x2c6b79);
          var _0x2afcc1 = new Uint8Array(_0x5466af);
          var _0x230102 = _0x298c61.subarray(_0x11bf2a, _0x11bf2a + _0x2c6b79);
          _0x230102.set(_0x2afcc1);
        } else {
          _0x1bd781.SendTextToCSharpSide(_0x3370d9, _0x6ef4a, "content-length:0\n\n");
        }
        (function (_0x1a5960, _0x4bcdf6, _0x266004) {
          _0x2c15b5.apply(null, [_0x41c26f, _0x1a5960, _0x4bcdf6, _0x266004]);
        })(_0x3370d9, _0x11bf2a, _0x2c6b79);
      }
    };
    if (_0x25f24e) {
      _0x4d6ffd.onerror = function _0x2b73e2(_0x39226e) {
        function _0x527d6f(_0x280f45) {
          var _0x5d1d28 = _0x19d23e(_0x280f45) + 1;
          var _0x2ed90d = _0x5d6d4a(_0x5d1d28);
          _0x59dbc8(_0x280f45, _0x298c61, _0x2ed90d, _0x5d1d28);
          (function (_0x5ec45f, _0x5204b8) {
            _0xc7f8b0.apply(null, [_0x25f24e, _0x5ec45f, _0x5204b8]);
          })(_0x3370d9, _0x2ed90d);
          _0xb102d5(_0x2ed90d);
        }
        if (_0x39226e.error) {
          _0x527d6f(_0x39226e.error);
        } else {
          _0x527d6f("Unknown Error! Maybe a CORS porblem?");
        }
      };
    }
    if (_0x193a70) {
      _0x4d6ffd.ontimeout = function _0x2491a1(_0x632455) {
        (function (_0x4ccf45) {
          _0x1c7fce.apply(null, [_0x193a70, _0x4ccf45]);
        })(_0x3370d9);
      };
    }
    if (_0x206d5b) {
      _0x4d6ffd.onabort = function _0x528cc5(_0x7da917) {
        (function (_0x1dbffc) {
          _0x1c7fce.apply(null, [_0x206d5b, _0x1dbffc]);
        })(_0x3370d9);
      };
    }
  }
  function _0x42b2e5(_0x50393e, _0x401473) {
    if (_0x1bd781.loglevel <= 1) {
      console.log("XHR_SetTimeout(" + _0x50393e + ", " + _0x401473 + ")");
    }
    _0x1bd781.requestInstances[_0x50393e].timeout = _0x401473;
  }
  var _0x41aa9a = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
  };
  function _0x1177ef(_0x21e60d) {
    return _0x5d6d4a(_0x21e60d + _0x41aa9a.SIZE) + _0x41aa9a.SIZE;
  }
  function _0x9ecb9c(_0x128670) {
    this.excPtr = _0x128670;
    this.ptr = _0x128670 - _0x41aa9a.SIZE;
    this.set_type = function (_0x232c43) {
      _0x2beff6[this.ptr + _0x41aa9a.TYPE_OFFSET >> 2] = _0x232c43;
    };
    this.get_type = function () {
      return _0x2beff6[this.ptr + _0x41aa9a.TYPE_OFFSET >> 2];
    };
    this.set_destructor = function (_0x3c89aa) {
      _0x2beff6[this.ptr + _0x41aa9a.DESTRUCTOR_OFFSET >> 2] = _0x3c89aa;
    };
    this.get_destructor = function () {
      return _0x2beff6[this.ptr + _0x41aa9a.DESTRUCTOR_OFFSET >> 2];
    };
    this.set_refcount = function (_0x3a7ae3) {
      _0x2beff6[this.ptr + _0x41aa9a.REFCOUNT_OFFSET >> 2] = _0x3a7ae3;
    };
    this.set_caught = function (_0x17bda2) {
      _0x17bda2 = _0x17bda2 ? 1 : 0;
      _0x381c0f[this.ptr + _0x41aa9a.CAUGHT_OFFSET >> 0] = _0x17bda2;
    };
    this.get_caught = function () {
      return _0x381c0f[this.ptr + _0x41aa9a.CAUGHT_OFFSET >> 0] != 0;
    };
    this.set_rethrown = function (_0x5baeef) {
      _0x5baeef = _0x5baeef ? 1 : 0;
      _0x381c0f[this.ptr + _0x41aa9a.RETHROWN_OFFSET >> 0] = _0x5baeef;
    };
    this.get_rethrown = function () {
      return _0x381c0f[this.ptr + _0x41aa9a.RETHROWN_OFFSET >> 0] != 0;
    };
    this.init = function (_0x4c2b21, _0x1b5e0c) {
      this.set_type(_0x4c2b21);
      this.set_destructor(_0x1b5e0c);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0x147a2e = _0x2beff6[this.ptr + _0x41aa9a.REFCOUNT_OFFSET >> 2];
      _0x2beff6[this.ptr + _0x41aa9a.REFCOUNT_OFFSET >> 2] = _0x147a2e + 1;
    };
    this.release_ref = function () {
      var _0x1d5e7b = _0x2beff6[this.ptr + _0x41aa9a.REFCOUNT_OFFSET >> 2];
      _0x2beff6[this.ptr + _0x41aa9a.REFCOUNT_OFFSET >> 2] = _0x1d5e7b - 1;
      return _0x1d5e7b === 1;
    };
  }
  function _0x104442(_0x34fa32) {
    this.free = function () {
      _0xb102d5(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x3ab25e) {
      _0x2beff6[this.ptr >> 2] = _0x3ab25e;
    };
    this.get_base_ptr = function () {
      return _0x2beff6[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0x2db730) {
      var _0x225a23 = 4;
      _0x2beff6[this.ptr + _0x225a23 >> 2] = _0x2db730;
    };
    this.get_adjusted_ptr = function () {
      var _0x35f10f = 4;
      return _0x2beff6[this.ptr + _0x35f10f >> 2];
    };
    this.get_exception_ptr = function () {
      var _0xf5a62a = _0x339d4d(this.get_exception_info().get_type());
      if (_0xf5a62a) {
        return _0x2beff6[this.get_base_ptr() >> 2];
      }
      var _0x1d1e41 = this.get_adjusted_ptr();
      if (_0x1d1e41 !== 0) {
        return _0x1d1e41;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0x9ecb9c(this.get_base_ptr());
    };
    if (_0x34fa32 === undefined) {
      this.ptr = _0x5d6d4a(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x34fa32;
    }
  }
  var _0xbc414 = [];
  function _0x577217(_0x4c56da) {
    _0x4c56da.add_ref();
  }
  var _0x314f71 = 0;
  function _0x21638c(_0x5f18b5) {
    var _0x57d8ab = new _0x104442(_0x5f18b5);
    var _0x4aedc8 = _0x57d8ab.get_exception_info();
    if (!_0x4aedc8.get_caught()) {
      _0x4aedc8.set_caught(true);
      _0x314f71--;
    }
    _0x4aedc8.set_rethrown(false);
    _0xbc414.push(_0x57d8ab);
    _0x577217(_0x4aedc8);
    return _0x57d8ab.get_exception_ptr();
  }
  var _0x1464d2 = 0;
  function _0x15e2bc(_0x9eef91) {
    return _0xb102d5(new _0x9ecb9c(_0x9eef91).ptr);
  }
  function _0x452ab3(_0x1cd09f) {
    if (_0x1cd09f.release_ref() && !_0x1cd09f.get_rethrown()) {
      var _0x2689bc = _0x1cd09f.get_destructor();
      if (_0x2689bc) {
        (function (_0x4643c6) {
          return _0xd7622e.apply(null, [_0x2689bc, _0x4643c6]);
        })(_0x1cd09f.excPtr);
      }
      _0x15e2bc(_0x1cd09f.excPtr);
    }
  }
  function _0x3edb1a() {
    _0x4a7cd0(0);
    var _0x375966 = _0xbc414.pop();
    _0x452ab3(_0x375966.get_exception_info());
    _0x375966.free();
    _0x1464d2 = 0;
  }
  function _0x278760(_0x68dcf) {
    var _0x492930 = new _0x104442(_0x68dcf);
    var _0x4f5b12 = _0x492930.get_base_ptr();
    if (!_0x1464d2) {
      _0x1464d2 = _0x4f5b12;
    }
    _0x492930.free();
    throw _0x4f5b12;
  }
  function _0x19e01b() {
    var _0x4cc99c = _0x1464d2;
    if (!_0x4cc99c) {
      _0x58d587(0);
      return 0;
    }
    var _0x2d4ced = new _0x9ecb9c(_0x4cc99c);
    var _0x103a08 = _0x2d4ced.get_type();
    var _0x16e401 = new _0x104442();
    _0x16e401.set_base_ptr(_0x4cc99c);
    if (!_0x103a08) {
      _0x58d587(0);
      return _0x16e401.ptr | 0;
    }
    var _0x242aa4 = Array.prototype.slice.call(arguments);
    var _0x396d1e = _0x50e49c();
    var _0x377fee = _0x932d25(4);
    _0x2beff6[_0x377fee >> 2] = _0x4cc99c;
    for (var _0x1bfd53 = 0; _0x1bfd53 < _0x242aa4.length; _0x1bfd53++) {
      var _0x1b163d = _0x242aa4[_0x1bfd53];
      if (_0x1b163d === 0 || _0x1b163d === _0x103a08) {
        break;
      }
      if (_0x21e1bc(_0x1b163d, _0x103a08, _0x377fee)) {
        var _0x1a24de = _0x2beff6[_0x377fee >> 2];
        if (_0x4cc99c !== _0x1a24de) {
          _0x16e401.set_adjusted_ptr(_0x1a24de);
        }
        _0x58d587(_0x1b163d);
        return _0x16e401.ptr | 0;
      }
    }
    _0x229d9f(_0x396d1e);
    _0x58d587(_0x103a08);
    return _0x16e401.ptr | 0;
  }
  function _0x3da865() {
    var _0x1c398a = _0x1464d2;
    if (!_0x1c398a) {
      _0x58d587(0);
      return 0;
    }
    var _0x957752 = new _0x9ecb9c(_0x1c398a);
    var _0x26e650 = _0x957752.get_type();
    var _0x1b7391 = new _0x104442();
    _0x1b7391.set_base_ptr(_0x1c398a);
    if (!_0x26e650) {
      _0x58d587(0);
      return _0x1b7391.ptr | 0;
    }
    var _0x285f91 = Array.prototype.slice.call(arguments);
    var _0x51bab3 = _0x50e49c();
    var _0x5efaf7 = _0x932d25(4);
    _0x2beff6[_0x5efaf7 >> 2] = _0x1c398a;
    for (var _0x73aa6c = 0; _0x73aa6c < _0x285f91.length; _0x73aa6c++) {
      var _0x481283 = _0x285f91[_0x73aa6c];
      if (_0x481283 === 0 || _0x481283 === _0x26e650) {
        break;
      }
      if (_0x21e1bc(_0x481283, _0x26e650, _0x5efaf7)) {
        var _0x288e07 = _0x2beff6[_0x5efaf7 >> 2];
        if (_0x1c398a !== _0x288e07) {
          _0x1b7391.set_adjusted_ptr(_0x288e07);
        }
        _0x58d587(_0x481283);
        return _0x1b7391.ptr | 0;
      }
    }
    _0x229d9f(_0x51bab3);
    _0x58d587(_0x26e650);
    return _0x1b7391.ptr | 0;
  }
  function _0x7c7cbf() {
    var _0x2f9749 = _0x1464d2;
    if (!_0x2f9749) {
      _0x58d587(0);
      return 0;
    }
    var _0x353bb4 = new _0x9ecb9c(_0x2f9749);
    var _0x108aa6 = _0x353bb4.get_type();
    var _0x42d6ff = new _0x104442();
    _0x42d6ff.set_base_ptr(_0x2f9749);
    if (!_0x108aa6) {
      _0x58d587(0);
      return _0x42d6ff.ptr | 0;
    }
    var _0x29e608 = Array.prototype.slice.call(arguments);
    var _0x40bc42 = _0x50e49c();
    var _0x28e48d = _0x932d25(4);
    _0x2beff6[_0x28e48d >> 2] = _0x2f9749;
    for (var _0x43c668 = 0; _0x43c668 < _0x29e608.length; _0x43c668++) {
      var _0x24d06e = _0x29e608[_0x43c668];
      if (_0x24d06e === 0 || _0x24d06e === _0x108aa6) {
        break;
      }
      if (_0x21e1bc(_0x24d06e, _0x108aa6, _0x28e48d)) {
        var _0x4cd819 = _0x2beff6[_0x28e48d >> 2];
        if (_0x2f9749 !== _0x4cd819) {
          _0x42d6ff.set_adjusted_ptr(_0x4cd819);
        }
        _0x58d587(_0x24d06e);
        return _0x42d6ff.ptr | 0;
      }
    }
    _0x229d9f(_0x40bc42);
    _0x58d587(_0x108aa6);
    return _0x42d6ff.ptr | 0;
  }
  function _0x5cf9cb() {
    var _0x1b7fac = _0xbc414.pop();
    if (!_0x1b7fac) {
      _0x25a973("no exception to throw");
    }
    var _0xb19ee0 = _0x1b7fac.get_exception_info();
    var _0x370f55 = _0x1b7fac.get_base_ptr();
    if (!_0xb19ee0.get_rethrown()) {
      _0xbc414.push(_0x1b7fac);
      _0xb19ee0.set_rethrown(true);
      _0xb19ee0.set_caught(false);
      _0x314f71++;
    } else {
      _0x1b7fac.free();
    }
    _0x1464d2 = _0x370f55;
    throw _0x370f55;
  }
  function _0x1c0575(_0x5cf8cd, _0x2808ef, _0x4a6155) {
    var _0x5a7d26 = new _0x9ecb9c(_0x5cf8cd);
    _0x5a7d26.init(_0x2808ef, _0x4a6155);
    _0x1464d2 = _0x5cf8cd;
    _0x314f71++;
    throw _0x5cf8cd;
  }
  function _0x7b6d4b(_0x3d1496, _0x3b8e33) {
    var _0x398aaa = new Date(_0x2beff6[_0x3d1496 >> 2] * 1000);
    _0x2beff6[_0x3b8e33 >> 2] = _0x398aaa.getUTCSeconds();
    _0x2beff6[_0x3b8e33 + 4 >> 2] = _0x398aaa.getUTCMinutes();
    _0x2beff6[_0x3b8e33 + 8 >> 2] = _0x398aaa.getUTCHours();
    _0x2beff6[_0x3b8e33 + 12 >> 2] = _0x398aaa.getUTCDate();
    _0x2beff6[_0x3b8e33 + 16 >> 2] = _0x398aaa.getUTCMonth();
    _0x2beff6[_0x3b8e33 + 20 >> 2] = _0x398aaa.getUTCFullYear() - 1900;
    _0x2beff6[_0x3b8e33 + 24 >> 2] = _0x398aaa.getUTCDay();
    _0x2beff6[_0x3b8e33 + 36 >> 2] = 0;
    _0x2beff6[_0x3b8e33 + 32 >> 2] = 0;
    var _0x1cde1e = Date.UTC(_0x398aaa.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x340dda = (_0x398aaa.getTime() - _0x1cde1e) / 86400000 | 0;
    _0x2beff6[_0x3b8e33 + 28 >> 2] = _0x340dda;
    if (!_0x7b6d4b.GMTString) {
      _0x7b6d4b.GMTString = _0x3d1452("GMT");
    }
    _0x2beff6[_0x3b8e33 + 40 >> 2] = _0x7b6d4b.GMTString;
    return _0x3b8e33;
  }
  function _0x1e80da(_0x41e443, _0x4602a9) {
    return _0x7b6d4b(_0x41e443, _0x4602a9);
  }
  function _0x1496b8() {
    if (_0x1496b8.called) {
      return;
    }
    _0x1496b8.called = true;
    var _0x4e42b7 = new Date().getFullYear();
    var _0x56d709 = new Date(_0x4e42b7, 0, 1);
    var _0x8940d0 = new Date(_0x4e42b7, 6, 1);
    var _0x4c214e = _0x56d709.getTimezoneOffset();
    var _0x5d0228 = _0x8940d0.getTimezoneOffset();
    var _0x4eb6c2 = Math.max(_0x4c214e, _0x5d0228);
    _0x2beff6[_0x53b73b() >> 2] = _0x4eb6c2 * 60;
    _0x2beff6[_0x3f0f3c() >> 2] = Number(_0x4c214e != _0x5d0228);
    function _0x2fedad(_0x28c27c) {
      var _0x1ce6f5 = _0x28c27c.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x1ce6f5) {
        return _0x1ce6f5[1];
      } else {
        return "GMT";
      }
    }
    var _0x18b3db = _0x2fedad(_0x56d709);
    var _0xd87a64 = _0x2fedad(_0x8940d0);
    var _0x577c48 = _0x3d1452(_0x18b3db);
    var _0x36666c = _0x3d1452(_0xd87a64);
    if (_0x5d0228 < _0x4c214e) {
      _0x2beff6[_0x417dec() >> 2] = _0x577c48;
      _0x2beff6[_0x417dec() + 4 >> 2] = _0x36666c;
    } else {
      _0x2beff6[_0x417dec() >> 2] = _0x36666c;
      _0x2beff6[_0x417dec() + 4 >> 2] = _0x577c48;
    }
  }
  function _0x3d6848(_0x14a18e, _0x278c14) {
    _0x1496b8();
    var _0x2d4e19 = new Date(_0x2beff6[_0x14a18e >> 2] * 1000);
    _0x2beff6[_0x278c14 >> 2] = _0x2d4e19.getSeconds();
    _0x2beff6[_0x278c14 + 4 >> 2] = _0x2d4e19.getMinutes();
    _0x2beff6[_0x278c14 + 8 >> 2] = _0x2d4e19.getHours();
    _0x2beff6[_0x278c14 + 12 >> 2] = _0x2d4e19.getDate();
    _0x2beff6[_0x278c14 + 16 >> 2] = _0x2d4e19.getMonth();
    _0x2beff6[_0x278c14 + 20 >> 2] = _0x2d4e19.getFullYear() - 1900;
    _0x2beff6[_0x278c14 + 24 >> 2] = _0x2d4e19.getDay();
    var _0x5e725c = new Date(_0x2d4e19.getFullYear(), 0, 1);
    var _0x442d5c = (_0x2d4e19.getTime() - _0x5e725c.getTime()) / 86400000 | 0;
    _0x2beff6[_0x278c14 + 28 >> 2] = _0x442d5c;
    _0x2beff6[_0x278c14 + 36 >> 2] = -(_0x2d4e19.getTimezoneOffset() * 60);
    var _0x269716 = new Date(_0x2d4e19.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x18935b = _0x5e725c.getTimezoneOffset();
    var _0x56a643 = (_0x269716 != _0x18935b && _0x2d4e19.getTimezoneOffset() == Math.min(_0x18935b, _0x269716)) | 0;
    _0x2beff6[_0x278c14 + 32 >> 2] = _0x56a643;
    var _0x17c0b7 = _0x2beff6[_0x417dec() + (_0x56a643 ? 4 : 0) >> 2];
    _0x2beff6[_0x278c14 + 40 >> 2] = _0x17c0b7;
    return _0x278c14;
  }
  function _0xd3380d(_0x3b24c9, _0x51223d) {
    return _0x3d6848(_0x3b24c9, _0x51223d);
  }
  var _0xf450d6 = {
    splitPath: function (_0x108c2b) {
      var _0xb84511 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0xb84511.exec(_0x108c2b).slice(1);
    },
    normalizeArray: function (_0x4d0333, _0x4c13e1) {
      var _0x2252c1 = 0;
      for (var _0x421970 = _0x4d0333.length - 1; _0x421970 >= 0; _0x421970--) {
        var _0x4518db = _0x4d0333[_0x421970];
        if (_0x4518db === ".") {
          _0x4d0333.splice(_0x421970, 1);
        } else if (_0x4518db === "..") {
          _0x4d0333.splice(_0x421970, 1);
          _0x2252c1++;
        } else if (_0x2252c1) {
          _0x4d0333.splice(_0x421970, 1);
          _0x2252c1--;
        }
      }
      if (_0x4c13e1) {
        for (; _0x2252c1; _0x2252c1--) {
          _0x4d0333.unshift("..");
        }
      }
      return _0x4d0333;
    },
    normalize: function (_0x5ead18) {
      var _0x1679be = _0x5ead18.charAt(0) === "/";
      var _0xff30ba = _0x5ead18.substr(-1) === "/";
      _0x5ead18 = _0xf450d6.normalizeArray(_0x5ead18.split("/").filter(function (_0x3e1bfc) {
        return !!_0x3e1bfc;
      }), !_0x1679be).join("/");
      if (!_0x5ead18 && !_0x1679be) {
        _0x5ead18 = ".";
      }
      if (_0x5ead18 && _0xff30ba) {
        _0x5ead18 += "/";
      }
      return (_0x1679be ? "/" : "") + _0x5ead18;
    },
    dirname: function (_0x228a75) {
      var _0x1c446c = _0xf450d6.splitPath(_0x228a75);
      var _0x2b6aa8 = _0x1c446c[0];
      var _0x492231 = _0x1c446c[1];
      if (!_0x2b6aa8 && !_0x492231) {
        return ".";
      }
      _0x492231 &&= _0x492231.substr(0, _0x492231.length - 1);
      return _0x2b6aa8 + _0x492231;
    },
    basename: function (_0x57af78) {
      if (_0x57af78 === "/") {
        return "/";
      }
      _0x57af78 = _0xf450d6.normalize(_0x57af78);
      _0x57af78 = _0x57af78.replace(/\/$/, "");
      var _0x36c02d = _0x57af78.lastIndexOf("/");
      if (_0x36c02d === -1) {
        return _0x57af78;
      }
      return _0x57af78.substr(_0x36c02d + 1);
    },
    extname: function (_0x1deac4) {
      return _0xf450d6.splitPath(_0x1deac4)[3];
    },
    join: function () {
      var _0x3ff362 = Array.prototype.slice.call(arguments, 0);
      return _0xf450d6.normalize(_0x3ff362.join("/"));
    },
    join2: function (_0x36874c, _0x1f1673) {
      return _0xf450d6.normalize(_0x36874c + "/" + _0x1f1673);
    }
  };
  function _0x71ff11() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x212426 = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x212426);
        return _0x212426[0];
      };
    } else if (_0x3315ff) {
      try {
        var _0x386a44 = require("crypto");
        return function () {
          return _0x386a44.randomBytes(1)[0];
        };
      } catch (_0x25a903) {}
    }
    return function () {
      _0x25a973("randomDevice");
    };
  }
  var _0x102cd4 = {
    resolve: function () {
      var _0x112bec = "";
      var _0x33f9df = false;
      for (var _0x2a9963 = arguments.length - 1; _0x2a9963 >= -1 && !_0x33f9df; _0x2a9963--) {
        var _0x339b3b = _0x2a9963 >= 0 ? arguments[_0x2a9963] : _0x31cd57.cwd();
        if (typeof _0x339b3b !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0x339b3b) {
          return "";
        }
        _0x112bec = _0x339b3b + "/" + _0x112bec;
        _0x33f9df = _0x339b3b.charAt(0) === "/";
      }
      _0x112bec = _0xf450d6.normalizeArray(_0x112bec.split("/").filter(function (_0x3c63fc) {
        return !!_0x3c63fc;
      }), !_0x33f9df).join("/");
      return (_0x33f9df ? "/" : "") + _0x112bec || ".";
    },
    relative: function (_0x5c08ed, _0x2e625a) {
      _0x5c08ed = _0x102cd4.resolve(_0x5c08ed).substr(1);
      _0x2e625a = _0x102cd4.resolve(_0x2e625a).substr(1);
      function _0x3f2ae1(_0x4a38f2) {
        var _0xb6bda1 = 0;
        for (; _0xb6bda1 < _0x4a38f2.length; _0xb6bda1++) {
          if (_0x4a38f2[_0xb6bda1] !== "") {
            break;
          }
        }
        var _0xfb38c5 = _0x4a38f2.length - 1;
        for (; _0xfb38c5 >= 0; _0xfb38c5--) {
          if (_0x4a38f2[_0xfb38c5] !== "") {
            break;
          }
        }
        if (_0xb6bda1 > _0xfb38c5) {
          return [];
        }
        return _0x4a38f2.slice(_0xb6bda1, _0xfb38c5 - _0xb6bda1 + 1);
      }
      var _0x59fdc5 = _0x3f2ae1(_0x5c08ed.split("/"));
      var _0x40cb56 = _0x3f2ae1(_0x2e625a.split("/"));
      var _0x32a949 = Math.min(_0x59fdc5.length, _0x40cb56.length);
      var _0x467bbf = _0x32a949;
      for (var _0x4fa351 = 0; _0x4fa351 < _0x32a949; _0x4fa351++) {
        if (_0x59fdc5[_0x4fa351] !== _0x40cb56[_0x4fa351]) {
          _0x467bbf = _0x4fa351;
          break;
        }
      }
      var _0x268c9d = [];
      for (var _0x4fa351 = _0x467bbf; _0x4fa351 < _0x59fdc5.length; _0x4fa351++) {
        _0x268c9d.push("..");
      }
      _0x268c9d = _0x268c9d.concat(_0x40cb56.slice(_0x467bbf));
      return _0x268c9d.join("/");
    }
  };
  var _0x5f0478 = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x69f11b, _0x239f37) {
      _0x5f0478.ttys[_0x69f11b] = {
        input: [],
        output: [],
        ops: _0x239f37
      };
      _0x31cd57.registerDevice(_0x69f11b, _0x5f0478.stream_ops);
    },
    stream_ops: {
      open: function (_0x3a355d) {
        var _0x5b1e5b = _0x5f0478.ttys[_0x3a355d.node.rdev];
        if (!_0x5b1e5b) {
          throw new _0x31cd57.ErrnoError(43);
        }
        _0x3a355d.tty = _0x5b1e5b;
        _0x3a355d.seekable = false;
      },
      close: function (_0x3be14c) {
        _0x3be14c.tty.ops.flush(_0x3be14c.tty);
      },
      flush: function (_0x5a9d67) {
        _0x5a9d67.tty.ops.flush(_0x5a9d67.tty);
      },
      read: function (_0x471273, _0x51d81a, _0x30d26c, _0x55719c, _0x4a140a) {
        if (!_0x471273.tty || !_0x471273.tty.ops.get_char) {
          throw new _0x31cd57.ErrnoError(60);
        }
        var _0x42cade = 0;
        for (var _0x36f9d3 = 0; _0x36f9d3 < _0x55719c; _0x36f9d3++) {
          var _0x355df7;
          try {
            _0x355df7 = _0x471273.tty.ops.get_char(_0x471273.tty);
          } catch (_0x327a0f) {
            throw new _0x31cd57.ErrnoError(29);
          }
          if (_0x355df7 === undefined && _0x42cade === 0) {
            throw new _0x31cd57.ErrnoError(6);
          }
          if (_0x355df7 === null || _0x355df7 === undefined) {
            break;
          }
          _0x42cade++;
          _0x51d81a[_0x30d26c + _0x36f9d3] = _0x355df7;
        }
        if (_0x42cade) {
          _0x471273.node.timestamp = Date.now();
        }
        return _0x42cade;
      },
      write: function (_0x2936ba, _0x46a936, _0x1730a6, _0x46da56, _0x53cab4) {
        if (!_0x2936ba.tty || !_0x2936ba.tty.ops.put_char) {
          throw new _0x31cd57.ErrnoError(60);
        }
        try {
          for (var _0xb89197 = 0; _0xb89197 < _0x46da56; _0xb89197++) {
            _0x2936ba.tty.ops.put_char(_0x2936ba.tty, _0x46a936[_0x1730a6 + _0xb89197]);
          }
        } catch (_0x1ef243) {
          throw new _0x31cd57.ErrnoError(29);
        }
        if (_0x46da56) {
          _0x2936ba.node.timestamp = Date.now();
        }
        return _0xb89197;
      }
    },
    default_tty_ops: {
      get_char: function (_0xe2d52b) {
        if (!_0xe2d52b.input.length) {
          var _0x5172f9 = null;
          if (_0x3315ff) {
            var _0xbc394b = 256;
            var _0x22a6b5 = Buffer.alloc ? Buffer.alloc(_0xbc394b) : new Buffer(_0xbc394b);
            var _0x59315e = 0;
            try {
              _0x59315e = _0x3ecaec.readSync(process.stdin.fd, _0x22a6b5, 0, _0xbc394b, null);
            } catch (_0x34f14e) {
              if (_0x34f14e.toString().includes("EOF")) {
                _0x59315e = 0;
              } else {
                throw _0x34f14e;
              }
            }
            if (_0x59315e > 0) {
              _0x5172f9 = _0x22a6b5.slice(0, _0x59315e).toString("utf-8");
            } else {
              _0x5172f9 = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0x5172f9 = window.prompt("Input: ");
            if (_0x5172f9 !== null) {
              _0x5172f9 += "\n";
            }
          } else if (typeof readline == "function") {
            _0x5172f9 = readline();
            if (_0x5172f9 !== null) {
              _0x5172f9 += "\n";
            }
          }
          if (!_0x5172f9) {
            return null;
          }
          _0xe2d52b.input = _0x3e9728(_0x5172f9, true);
        }
        return _0xe2d52b.input.shift();
      },
      put_char: function (_0x162a5b, _0xde360e) {
        if (_0xde360e === null || _0xde360e === 10) {
          _0x41fa06(_0xed8485(_0x162a5b.output, 0));
          _0x162a5b.output = [];
        } else if (_0xde360e != 0) {
          _0x162a5b.output.push(_0xde360e);
        }
      },
      flush: function (_0x60a35c) {
        if (_0x60a35c.output && _0x60a35c.output.length > 0) {
          _0x41fa06(_0xed8485(_0x60a35c.output, 0));
          _0x60a35c.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0x273ac6, _0x3916b5) {
        if (_0x3916b5 === null || _0x3916b5 === 10) {
          _0x5761f3(_0xed8485(_0x273ac6.output, 0));
          _0x273ac6.output = [];
        } else if (_0x3916b5 != 0) {
          _0x273ac6.output.push(_0x3916b5);
        }
      },
      flush: function (_0xf9298) {
        if (_0xf9298.output && _0xf9298.output.length > 0) {
          _0x5761f3(_0xed8485(_0xf9298.output, 0));
          _0xf9298.output = [];
        }
      }
    }
  };
  function _0x55f20f(_0x37a8de) {
    var _0x389cf4 = _0x12caa6(_0x37a8de, 65536);
    var _0x351f5f = _0x5d6d4a(_0x389cf4);
    while (_0x37a8de < _0x389cf4) {
      _0x381c0f[_0x351f5f + _0x37a8de++] = 0;
    }
    return _0x351f5f;
  }
  var _0x33d90c = {
    ops_table: null,
    mount: function (_0x137cd3) {
      return _0x33d90c.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0x17ae8e, _0xc5146c, _0x5bb86c, _0x3d2c07) {
      if (_0x31cd57.isBlkdev(_0x5bb86c) || _0x31cd57.isFIFO(_0x5bb86c)) {
        throw new _0x31cd57.ErrnoError(63);
      }
      if (!_0x33d90c.ops_table) {
        _0x33d90c.ops_table = {
          dir: {
            node: {
              getattr: _0x33d90c.node_ops.getattr,
              setattr: _0x33d90c.node_ops.setattr,
              lookup: _0x33d90c.node_ops.lookup,
              mknod: _0x33d90c.node_ops.mknod,
              rename: _0x33d90c.node_ops.rename,
              unlink: _0x33d90c.node_ops.unlink,
              rmdir: _0x33d90c.node_ops.rmdir,
              readdir: _0x33d90c.node_ops.readdir,
              symlink: _0x33d90c.node_ops.symlink
            },
            stream: {
              llseek: _0x33d90c.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0x33d90c.node_ops.getattr,
              setattr: _0x33d90c.node_ops.setattr
            },
            stream: {
              llseek: _0x33d90c.stream_ops.llseek,
              read: _0x33d90c.stream_ops.read,
              write: _0x33d90c.stream_ops.write,
              allocate: _0x33d90c.stream_ops.allocate,
              mmap: _0x33d90c.stream_ops.mmap,
              msync: _0x33d90c.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0x33d90c.node_ops.getattr,
              setattr: _0x33d90c.node_ops.setattr,
              readlink: _0x33d90c.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0x33d90c.node_ops.getattr,
              setattr: _0x33d90c.node_ops.setattr
            },
            stream: _0x31cd57.chrdev_stream_ops
          }
        };
      }
      var _0x24646a = _0x31cd57.createNode(_0x17ae8e, _0xc5146c, _0x5bb86c, _0x3d2c07);
      if (_0x31cd57.isDir(_0x24646a.mode)) {
        _0x24646a.node_ops = _0x33d90c.ops_table.dir.node;
        _0x24646a.stream_ops = _0x33d90c.ops_table.dir.stream;
        _0x24646a.contents = {};
      } else if (_0x31cd57.isFile(_0x24646a.mode)) {
        _0x24646a.node_ops = _0x33d90c.ops_table.file.node;
        _0x24646a.stream_ops = _0x33d90c.ops_table.file.stream;
        _0x24646a.usedBytes = 0;
        _0x24646a.contents = null;
      } else if (_0x31cd57.isLink(_0x24646a.mode)) {
        _0x24646a.node_ops = _0x33d90c.ops_table.link.node;
        _0x24646a.stream_ops = _0x33d90c.ops_table.link.stream;
      } else if (_0x31cd57.isChrdev(_0x24646a.mode)) {
        _0x24646a.node_ops = _0x33d90c.ops_table.chrdev.node;
        _0x24646a.stream_ops = _0x33d90c.ops_table.chrdev.stream;
      }
      _0x24646a.timestamp = Date.now();
      if (_0x17ae8e) {
        _0x17ae8e.contents[_0xc5146c] = _0x24646a;
        _0x17ae8e.timestamp = _0x24646a.timestamp;
      }
      return _0x24646a;
    },
    getFileDataAsTypedArray: function (_0x67f718) {
      if (!_0x67f718.contents) {
        return new Uint8Array(0);
      }
      if (_0x67f718.contents.subarray) {
        return _0x67f718.contents.subarray(0, _0x67f718.usedBytes);
      }
      return new Uint8Array(_0x67f718.contents);
    },
    expandFileStorage: function (_0x277199, _0x35400b) {
      var _0x3e5e2d = _0x277199.contents ? _0x277199.contents.length : 0;
      if (_0x3e5e2d >= _0x35400b) {
        return;
      }
      var _0x5c7a71 = 1048576;
      _0x35400b = Math.max(_0x35400b, _0x3e5e2d * (_0x3e5e2d < _0x5c7a71 ? 2 : 1.125) >>> 0);
      if (_0x3e5e2d != 0) {
        _0x35400b = Math.max(_0x35400b, 256);
      }
      var _0x455875 = _0x277199.contents;
      _0x277199.contents = new Uint8Array(_0x35400b);
      if (_0x277199.usedBytes > 0) {
        _0x277199.contents.set(_0x455875.subarray(0, _0x277199.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0x51e27f, _0x58e0f9) {
      if (_0x51e27f.usedBytes == _0x58e0f9) {
        return;
      }
      if (_0x58e0f9 == 0) {
        _0x51e27f.contents = null;
        _0x51e27f.usedBytes = 0;
      } else {
        var _0x1ba622 = _0x51e27f.contents;
        _0x51e27f.contents = new Uint8Array(_0x58e0f9);
        if (_0x1ba622) {
          _0x51e27f.contents.set(_0x1ba622.subarray(0, Math.min(_0x58e0f9, _0x51e27f.usedBytes)));
        }
        _0x51e27f.usedBytes = _0x58e0f9;
      }
    },
    node_ops: {
      getattr: function (_0x4be633) {
        var _0x44c541 = {};
        _0x44c541.dev = _0x31cd57.isChrdev(_0x4be633.mode) ? _0x4be633.id : 1;
        _0x44c541.ino = _0x4be633.id;
        _0x44c541.mode = _0x4be633.mode;
        _0x44c541.nlink = 1;
        _0x44c541.uid = 0;
        _0x44c541.gid = 0;
        _0x44c541.rdev = _0x4be633.rdev;
        if (_0x31cd57.isDir(_0x4be633.mode)) {
          _0x44c541.size = 4096;
        } else if (_0x31cd57.isFile(_0x4be633.mode)) {
          _0x44c541.size = _0x4be633.usedBytes;
        } else if (_0x31cd57.isLink(_0x4be633.mode)) {
          _0x44c541.size = _0x4be633.link.length;
        } else {
          _0x44c541.size = 0;
        }
        _0x44c541.atime = new Date(_0x4be633.timestamp);
        _0x44c541.mtime = new Date(_0x4be633.timestamp);
        _0x44c541.ctime = new Date(_0x4be633.timestamp);
        _0x44c541.blksize = 4096;
        _0x44c541.blocks = Math.ceil(_0x44c541.size / _0x44c541.blksize);
        return _0x44c541;
      },
      setattr: function (_0x2a4171, _0x10e5e4) {
        if (_0x10e5e4.mode !== undefined) {
          _0x2a4171.mode = _0x10e5e4.mode;
        }
        if (_0x10e5e4.timestamp !== undefined) {
          _0x2a4171.timestamp = _0x10e5e4.timestamp;
        }
        if (_0x10e5e4.size !== undefined) {
          _0x33d90c.resizeFileStorage(_0x2a4171, _0x10e5e4.size);
        }
      },
      lookup: function (_0x28aec8, _0x59b83b) {
        throw _0x31cd57.genericErrors[44];
      },
      mknod: function (_0x40dc2e, _0x333a88, _0x55c5c6, _0x333c96) {
        return _0x33d90c.createNode(_0x40dc2e, _0x333a88, _0x55c5c6, _0x333c96);
      },
      rename: function (_0x5e6734, _0x453e0f, _0x2ce84c) {
        if (_0x31cd57.isDir(_0x5e6734.mode)) {
          var _0x28b3c9;
          try {
            _0x28b3c9 = _0x31cd57.lookupNode(_0x453e0f, _0x2ce84c);
          } catch (_0x1115c2) {}
          if (_0x28b3c9) {
            for (var _0x24e4f1 in _0x28b3c9.contents) {
              throw new _0x31cd57.ErrnoError(55);
            }
          }
        }
        delete _0x5e6734.parent.contents[_0x5e6734.name];
        _0x5e6734.parent.timestamp = Date.now();
        _0x5e6734.name = _0x2ce84c;
        _0x453e0f.contents[_0x2ce84c] = _0x5e6734;
        _0x453e0f.timestamp = _0x5e6734.parent.timestamp;
        _0x5e6734.parent = _0x453e0f;
      },
      unlink: function (_0x41932c, _0x3298b1) {
        delete _0x41932c.contents[_0x3298b1];
        _0x41932c.timestamp = Date.now();
      },
      rmdir: function (_0x1c0067, _0x1297a2) {
        var _0x17e0ee = _0x31cd57.lookupNode(_0x1c0067, _0x1297a2);
        for (var _0x10ce97 in _0x17e0ee.contents) {
          throw new _0x31cd57.ErrnoError(55);
        }
        delete _0x1c0067.contents[_0x1297a2];
        _0x1c0067.timestamp = Date.now();
      },
      readdir: function (_0xb4ee25) {
        var _0x4b5f30 = [".", ".."];
        for (var _0x3de70a in _0xb4ee25.contents) {
          if (!_0xb4ee25.contents.hasOwnProperty(_0x3de70a)) {
            continue;
          }
          _0x4b5f30.push(_0x3de70a);
        }
        return _0x4b5f30;
      },
      symlink: function (_0x53a9a6, _0x5299ca, _0x36de3e) {
        var _0x35d067 = _0x33d90c.createNode(_0x53a9a6, _0x5299ca, 41471, 0);
        _0x35d067.link = _0x36de3e;
        return _0x35d067;
      },
      readlink: function (_0x3af846) {
        if (!_0x31cd57.isLink(_0x3af846.mode)) {
          throw new _0x31cd57.ErrnoError(28);
        }
        return _0x3af846.link;
      }
    },
    stream_ops: {
      read: function (_0x12d5b8, _0x23f118, _0x2a044b, _0xfad6b3, _0x2eff39) {
        var _0x1730f6 = _0x12d5b8.node.contents;
        if (_0x2eff39 >= _0x12d5b8.node.usedBytes) {
          return 0;
        }
        var _0x3e4997 = Math.min(_0x12d5b8.node.usedBytes - _0x2eff39, _0xfad6b3);
        if (_0x3e4997 > 8 && _0x1730f6.subarray) {
          _0x23f118.set(_0x1730f6.subarray(_0x2eff39, _0x2eff39 + _0x3e4997), _0x2a044b);
        } else {
          for (var _0x5b55f9 = 0; _0x5b55f9 < _0x3e4997; _0x5b55f9++) {
            _0x23f118[_0x2a044b + _0x5b55f9] = _0x1730f6[_0x2eff39 + _0x5b55f9];
          }
        }
        return _0x3e4997;
      },
      write: function (_0x404c54, _0x160698, _0x29bfd7, _0x47ca5c, _0x24f395, _0xcfae0c) {
        if (_0x160698.buffer === _0x381c0f.buffer) {
          _0xcfae0c = false;
        }
        if (!_0x47ca5c) {
          return 0;
        }
        var _0x272944 = _0x404c54.node;
        _0x272944.timestamp = Date.now();
        if (_0x160698.subarray && (!_0x272944.contents || _0x272944.contents.subarray)) {
          if (_0xcfae0c) {
            _0x272944.contents = _0x160698.subarray(_0x29bfd7, _0x29bfd7 + _0x47ca5c);
            _0x272944.usedBytes = _0x47ca5c;
            return _0x47ca5c;
          } else if (_0x272944.usedBytes === 0 && _0x24f395 === 0) {
            _0x272944.contents = _0x160698.slice(_0x29bfd7, _0x29bfd7 + _0x47ca5c);
            _0x272944.usedBytes = _0x47ca5c;
            return _0x47ca5c;
          } else if (_0x24f395 + _0x47ca5c <= _0x272944.usedBytes) {
            _0x272944.contents.set(_0x160698.subarray(_0x29bfd7, _0x29bfd7 + _0x47ca5c), _0x24f395);
            return _0x47ca5c;
          }
        }
        _0x33d90c.expandFileStorage(_0x272944, _0x24f395 + _0x47ca5c);
        if (_0x272944.contents.subarray && _0x160698.subarray) {
          _0x272944.contents.set(_0x160698.subarray(_0x29bfd7, _0x29bfd7 + _0x47ca5c), _0x24f395);
        } else {
          for (var _0x1d80be = 0; _0x1d80be < _0x47ca5c; _0x1d80be++) {
            _0x272944.contents[_0x24f395 + _0x1d80be] = _0x160698[_0x29bfd7 + _0x1d80be];
          }
        }
        _0x272944.usedBytes = Math.max(_0x272944.usedBytes, _0x24f395 + _0x47ca5c);
        return _0x47ca5c;
      },
      llseek: function (_0x4d65bf, _0x5145ad, _0x5a0e0b) {
        var _0x2f4037 = _0x5145ad;
        if (_0x5a0e0b === 1) {
          _0x2f4037 += _0x4d65bf.position;
        } else if (_0x5a0e0b === 2) {
          if (_0x31cd57.isFile(_0x4d65bf.node.mode)) {
            _0x2f4037 += _0x4d65bf.node.usedBytes;
          }
        }
        if (_0x2f4037 < 0) {
          throw new _0x31cd57.ErrnoError(28);
        }
        return _0x2f4037;
      },
      allocate: function (_0x29cc2e, _0x4db834, _0x470b8a) {
        _0x33d90c.expandFileStorage(_0x29cc2e.node, _0x4db834 + _0x470b8a);
        _0x29cc2e.node.usedBytes = Math.max(_0x29cc2e.node.usedBytes, _0x4db834 + _0x470b8a);
      },
      mmap: function (_0x3581c8, _0x5e9e94, _0x2ff5eb, _0x24e9f7, _0x10948e, _0x38f965) {
        if (_0x5e9e94 !== 0) {
          throw new _0x31cd57.ErrnoError(28);
        }
        if (!_0x31cd57.isFile(_0x3581c8.node.mode)) {
          throw new _0x31cd57.ErrnoError(43);
        }
        var _0x48bdd9;
        var _0x498e48;
        var _0x1bfc8b = _0x3581c8.node.contents;
        if (!(_0x38f965 & 2) && _0x1bfc8b.buffer === _0x19ef6f) {
          _0x498e48 = false;
          _0x48bdd9 = _0x1bfc8b.byteOffset;
        } else {
          if (_0x24e9f7 > 0 || _0x24e9f7 + _0x2ff5eb < _0x1bfc8b.length) {
            if (_0x1bfc8b.subarray) {
              _0x1bfc8b = _0x1bfc8b.subarray(_0x24e9f7, _0x24e9f7 + _0x2ff5eb);
            } else {
              _0x1bfc8b = Array.prototype.slice.call(_0x1bfc8b, _0x24e9f7, _0x24e9f7 + _0x2ff5eb);
            }
          }
          _0x498e48 = true;
          _0x48bdd9 = _0x55f20f(_0x2ff5eb);
          if (!_0x48bdd9) {
            throw new _0x31cd57.ErrnoError(48);
          }
          _0x381c0f.set(_0x1bfc8b, _0x48bdd9);
        }
        return {
          ptr: _0x48bdd9,
          allocated: _0x498e48
        };
      },
      msync: function (_0x598cf7, _0x30f5ab, _0xfda64c, _0x4a7f6c, _0x3716b9) {
        if (!_0x31cd57.isFile(_0x598cf7.node.mode)) {
          throw new _0x31cd57.ErrnoError(43);
        }
        if (_0x3716b9 & 2) {
          return 0;
        }
        var _0x475dc9 = _0x33d90c.stream_ops.write(_0x598cf7, _0x30f5ab, 0, _0x4a7f6c, _0xfda64c, false);
        return 0;
      }
    }
  };
  var _0x4eae17 = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x421412 = null;
      if (typeof window === "object") {
        _0x421412 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x2c6ead(_0x421412, "IDBFS used, but indexedDB not supported");
      return _0x421412;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0x5049fa) {
      return _0x33d90c.mount.apply(null, arguments);
    },
    syncfs: function (_0x33a9a4, _0x2b69ed, _0x3808ea) {
      _0x4eae17.getLocalSet(_0x33a9a4, function (_0x147e64, _0xa109e8) {
        if (_0x147e64) {
          return _0x3808ea(_0x147e64);
        }
        _0x4eae17.getRemoteSet(_0x33a9a4, function (_0x390c12, _0x9fe3d0) {
          if (_0x390c12) {
            return _0x3808ea(_0x390c12);
          }
          var _0x5cf58b = _0x2b69ed ? _0x9fe3d0 : _0xa109e8;
          var _0x1a6f92 = _0x2b69ed ? _0xa109e8 : _0x9fe3d0;
          _0x4eae17.reconcile(_0x5cf58b, _0x1a6f92, _0x3808ea);
        });
      });
    },
    getDB: function (_0x3bbe42, _0x20ae58) {
      var _0x435149 = _0x4eae17.dbs[_0x3bbe42];
      if (_0x435149) {
        return _0x20ae58(null, _0x435149);
      }
      var _0x420dbb;
      try {
        _0x420dbb = _0x4eae17.indexedDB().open(_0x3bbe42, _0x4eae17.DB_VERSION);
      } catch (_0x384488) {
        return _0x20ae58(_0x384488);
      }
      if (!_0x420dbb) {
        return _0x20ae58("Unable to connect to IndexedDB");
      }
      _0x420dbb.onupgradeneeded = function (_0x274be2) {
        var _0x1179c4 = _0x274be2.target.result;
        var _0x22bfbc = _0x274be2.target.transaction;
        var _0x5cee94;
        if (_0x1179c4.objectStoreNames.contains(_0x4eae17.DB_STORE_NAME)) {
          _0x5cee94 = _0x22bfbc.objectStore(_0x4eae17.DB_STORE_NAME);
        } else {
          _0x5cee94 = _0x1179c4.createObjectStore(_0x4eae17.DB_STORE_NAME);
        }
        if (!_0x5cee94.indexNames.contains("timestamp")) {
          _0x5cee94.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0x420dbb.onsuccess = function () {
        _0x435149 = _0x420dbb.result;
        _0x4eae17.dbs[_0x3bbe42] = _0x435149;
        _0x20ae58(null, _0x435149);
      };
      _0x420dbb.onerror = function (_0x544193) {
        _0x20ae58(this.error);
        _0x544193.preventDefault();
      };
    },
    getLocalSet: function (_0x2484e2, _0x1b5d29) {
      var _0x4b6ad4 = {};
      function _0x525d8f(_0x36ceff) {
        return _0x36ceff !== "." && _0x36ceff !== "..";
      }
      function _0x5c69ab(_0x1e4975) {
        return function (_0x5085ad) {
          return _0xf450d6.join2(_0x1e4975, _0x5085ad);
        };
      }
      var _0x54dd8a = _0x31cd57.readdir(_0x2484e2.mountpoint).filter(_0x525d8f).map(_0x5c69ab(_0x2484e2.mountpoint));
      while (_0x54dd8a.length) {
        var _0x2ec9e7 = _0x54dd8a.pop();
        var _0x57af08;
        try {
          _0x57af08 = _0x31cd57.stat(_0x2ec9e7);
        } catch (_0x30469f) {
          return _0x1b5d29(_0x30469f);
        }
        if (_0x31cd57.isDir(_0x57af08.mode)) {
          _0x54dd8a.push.apply(_0x54dd8a, _0x31cd57.readdir(_0x2ec9e7).filter(_0x525d8f).map(_0x5c69ab(_0x2ec9e7)));
        }
        _0x4b6ad4[_0x2ec9e7] = {
          timestamp: _0x57af08.mtime
        };
      }
      return _0x1b5d29(null, {
        type: "local",
        entries: _0x4b6ad4
      });
    },
    getRemoteSet: function (_0x4699f0, _0x178f35) {
      var _0x1673c6 = {};
      _0x4eae17.getDB(_0x4699f0.mountpoint, function (_0x32866f, _0x571db0) {
        if (_0x32866f) {
          return _0x178f35(_0x32866f);
        }
        try {
          var _0x4c428f = _0x571db0.transaction([_0x4eae17.DB_STORE_NAME], "readonly");
          _0x4c428f.onerror = function (_0x24f512) {
            _0x178f35(this.error);
            _0x24f512.preventDefault();
          };
          var _0x450f4d = _0x4c428f.objectStore(_0x4eae17.DB_STORE_NAME);
          var _0x3fe912 = _0x450f4d.index("timestamp");
          _0x3fe912.openKeyCursor().onsuccess = function (_0x3cdb7c) {
            var _0x364947 = _0x3cdb7c.target.result;
            if (!_0x364947) {
              return _0x178f35(null, {
                type: "remote",
                db: _0x571db0,
                entries: _0x1673c6
              });
            }
            _0x1673c6[_0x364947.primaryKey] = {
              timestamp: _0x364947.key
            };
            _0x364947.continue();
          };
        } catch (_0x5713f5) {
          return _0x178f35(_0x5713f5);
        }
      });
    },
    loadLocalEntry: function (_0x2e6241, _0x80a62d) {
      var _0x4049cd;
      var _0x4b0f5b;
      try {
        var _0x1ff1a0 = _0x31cd57.lookupPath(_0x2e6241);
        _0x4b0f5b = _0x1ff1a0.node;
        _0x4049cd = _0x31cd57.stat(_0x2e6241);
      } catch (_0x3cde4d) {
        return _0x80a62d(_0x3cde4d);
      }
      if (_0x31cd57.isDir(_0x4049cd.mode)) {
        return _0x80a62d(null, {
          timestamp: _0x4049cd.mtime,
          mode: _0x4049cd.mode
        });
      } else if (_0x31cd57.isFile(_0x4049cd.mode)) {
        _0x4b0f5b.contents = _0x33d90c.getFileDataAsTypedArray(_0x4b0f5b);
        return _0x80a62d(null, {
          timestamp: _0x4049cd.mtime,
          mode: _0x4049cd.mode,
          contents: _0x4b0f5b.contents
        });
      } else {
        return _0x80a62d(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0x2abab7, _0x2c4534, _0xc6dfc6) {
      try {
        if (_0x31cd57.isDir(_0x2c4534.mode)) {
          _0x31cd57.mkdirTree(_0x2abab7, _0x2c4534.mode);
        } else if (_0x31cd57.isFile(_0x2c4534.mode)) {
          _0x31cd57.writeFile(_0x2abab7, _0x2c4534.contents, {
            canOwn: true
          });
        } else {
          return _0xc6dfc6(new Error("node type not supported"));
        }
        _0x31cd57.chmod(_0x2abab7, _0x2c4534.mode);
        _0x31cd57.utime(_0x2abab7, _0x2c4534.timestamp, _0x2c4534.timestamp);
      } catch (_0x5a6556) {
        return _0xc6dfc6(_0x5a6556);
      }
      _0xc6dfc6(null);
    },
    removeLocalEntry: function (_0x54139c, _0x2cc5a1) {
      try {
        var _0x323b6b = _0x31cd57.lookupPath(_0x54139c);
        var _0x43909b = _0x31cd57.stat(_0x54139c);
        if (_0x31cd57.isDir(_0x43909b.mode)) {
          _0x31cd57.rmdir(_0x54139c);
        } else if (_0x31cd57.isFile(_0x43909b.mode)) {
          _0x31cd57.unlink(_0x54139c);
        }
      } catch (_0x15756d) {
        return _0x2cc5a1(_0x15756d);
      }
      _0x2cc5a1(null);
    },
    loadRemoteEntry: function (_0xf59ff8, _0x5c1a09, _0x386c91) {
      var _0x31ed48 = _0xf59ff8.get(_0x5c1a09);
      _0x31ed48.onsuccess = function (_0x240010) {
        _0x386c91(null, _0x240010.target.result);
      };
      _0x31ed48.onerror = function (_0x1a5095) {
        _0x386c91(this.error);
        _0x1a5095.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x700131, _0x69b961, _0x4754c4, _0x33732c) {
      var _0x2912b2 = _0x700131.put(_0x4754c4, _0x69b961);
      _0x2912b2.onsuccess = function () {
        _0x33732c(null);
      };
      _0x2912b2.onerror = function (_0x14f2c9) {
        _0x33732c(this.error);
        _0x14f2c9.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x59f7a7, _0x35dd6d, _0xacd208) {
      var _0x104368 = _0x59f7a7.delete(_0x35dd6d);
      _0x104368.onsuccess = function () {
        _0xacd208(null);
      };
      _0x104368.onerror = function (_0x4a3645) {
        _0xacd208(this.error);
        _0x4a3645.preventDefault();
      };
    },
    reconcile: function (_0x36f43d, _0x46fef4, _0x2a7c62) {
      var _0x4b9dec = 0;
      var _0x30f9a9 = [];
      Object.keys(_0x36f43d.entries).forEach(function (_0x253917) {
        var _0x57287f = _0x36f43d.entries[_0x253917];
        var _0x4c28e7 = _0x46fef4.entries[_0x253917];
        if (!_0x4c28e7 || _0x57287f.timestamp.getTime() != _0x4c28e7.timestamp.getTime()) {
          _0x30f9a9.push(_0x253917);
          _0x4b9dec++;
        }
      });
      var _0x54fe25 = [];
      Object.keys(_0x46fef4.entries).forEach(function (_0x505ef3) {
        if (!_0x36f43d.entries[_0x505ef3]) {
          _0x54fe25.push(_0x505ef3);
          _0x4b9dec++;
        }
      });
      if (!_0x4b9dec) {
        return _0x2a7c62(null);
      }
      var _0x179420 = false;
      var _0x3a1259 = _0x36f43d.type === "remote" ? _0x36f43d.db : _0x46fef4.db;
      var _0x4846ba = _0x3a1259.transaction([_0x4eae17.DB_STORE_NAME], "readwrite");
      var _0x408d7e = _0x4846ba.objectStore(_0x4eae17.DB_STORE_NAME);
      function _0x1660bf(_0x47f441) {
        if (_0x47f441 && !_0x179420) {
          _0x179420 = true;
          return _0x2a7c62(_0x47f441);
        }
      }
      _0x4846ba.onerror = function (_0x437a4c) {
        _0x1660bf(this.error);
        _0x437a4c.preventDefault();
      };
      _0x4846ba.oncomplete = function (_0x557f02) {
        if (!_0x179420) {
          _0x2a7c62(null);
        }
      };
      _0x30f9a9.sort().forEach(function (_0x20340a) {
        if (_0x46fef4.type === "local") {
          _0x4eae17.loadRemoteEntry(_0x408d7e, _0x20340a, function (_0x10a6fc, _0x3a3fb5) {
            if (_0x10a6fc) {
              return _0x1660bf(_0x10a6fc);
            }
            _0x4eae17.storeLocalEntry(_0x20340a, _0x3a3fb5, _0x1660bf);
          });
        } else {
          _0x4eae17.loadLocalEntry(_0x20340a, function (_0x1d21ad, _0x980ea1) {
            if (_0x1d21ad) {
              return _0x1660bf(_0x1d21ad);
            }
            _0x4eae17.storeRemoteEntry(_0x408d7e, _0x20340a, _0x980ea1, _0x1660bf);
          });
        }
      });
      _0x54fe25.sort().reverse().forEach(function (_0x19ba09) {
        if (_0x46fef4.type === "local") {
          _0x4eae17.removeLocalEntry(_0x19ba09, _0x1660bf);
        } else {
          _0x4eae17.removeRemoteEntry(_0x408d7e, _0x19ba09, _0x1660bf);
        }
      });
    }
  };
  var _0x31cd57 = {
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
    lookupPath: function (_0x3fdd89, _0x4416bc) {
      _0x3fdd89 = _0x102cd4.resolve(_0x31cd57.cwd(), _0x3fdd89);
      _0x4416bc = _0x4416bc || {};
      if (!_0x3fdd89) {
        return {
          path: "",
          node: null
        };
      }
      var _0x5628b8 = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x5a2f06 in _0x5628b8) {
        if (_0x4416bc[_0x5a2f06] === undefined) {
          _0x4416bc[_0x5a2f06] = _0x5628b8[_0x5a2f06];
        }
      }
      if (_0x4416bc.recurse_count > 8) {
        throw new _0x31cd57.ErrnoError(32);
      }
      var _0x622cfb = _0xf450d6.normalizeArray(_0x3fdd89.split("/").filter(function (_0x57bc80) {
        return !!_0x57bc80;
      }), false);
      var _0x1a4601 = _0x31cd57.root;
      var _0x299eb3 = "/";
      for (var _0x3876e7 = 0; _0x3876e7 < _0x622cfb.length; _0x3876e7++) {
        var _0x1807c1 = _0x3876e7 === _0x622cfb.length - 1;
        if (_0x1807c1 && _0x4416bc.parent) {
          break;
        }
        _0x1a4601 = _0x31cd57.lookupNode(_0x1a4601, _0x622cfb[_0x3876e7]);
        _0x299eb3 = _0xf450d6.join2(_0x299eb3, _0x622cfb[_0x3876e7]);
        if (_0x31cd57.isMountpoint(_0x1a4601)) {
          if (!_0x1807c1 || _0x1807c1 && _0x4416bc.follow_mount) {
            _0x1a4601 = _0x1a4601.mounted.root;
          }
        }
        if (!_0x1807c1 || _0x4416bc.follow) {
          var _0x2eb401 = 0;
          while (_0x31cd57.isLink(_0x1a4601.mode)) {
            var _0x449066 = _0x31cd57.readlink(_0x299eb3);
            _0x299eb3 = _0x102cd4.resolve(_0xf450d6.dirname(_0x299eb3), _0x449066);
            var _0x447467 = _0x31cd57.lookupPath(_0x299eb3, {
              recurse_count: _0x4416bc.recurse_count
            });
            _0x1a4601 = _0x447467.node;
            if (_0x2eb401++ > 40) {
              throw new _0x31cd57.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0x299eb3,
        node: _0x1a4601
      };
    },
    getPath: function (_0x256bea) {
      var _0x99fdb0;
      while (true) {
        if (_0x31cd57.isRoot(_0x256bea)) {
          var _0x29ec61 = _0x256bea.mount.mountpoint;
          if (!_0x99fdb0) {
            return _0x29ec61;
          }
          if (_0x29ec61[_0x29ec61.length - 1] !== "/") {
            return _0x29ec61 + "/" + _0x99fdb0;
          } else {
            return _0x29ec61 + _0x99fdb0;
          }
        }
        _0x99fdb0 = _0x99fdb0 ? _0x256bea.name + "/" + _0x99fdb0 : _0x256bea.name;
        _0x256bea = _0x256bea.parent;
      }
    },
    hashName: function (_0x27358e, _0x2b8e18) {
      var _0x2fefc7 = 0;
      for (var _0x1216d9 = 0; _0x1216d9 < _0x2b8e18.length; _0x1216d9++) {
        _0x2fefc7 = (_0x2fefc7 << 5) - _0x2fefc7 + _0x2b8e18.charCodeAt(_0x1216d9) | 0;
      }
      return (_0x27358e + _0x2fefc7 >>> 0) % _0x31cd57.nameTable.length;
    },
    hashAddNode: function (_0x4addb4) {
      var _0x6b75dd = _0x31cd57.hashName(_0x4addb4.parent.id, _0x4addb4.name);
      _0x4addb4.name_next = _0x31cd57.nameTable[_0x6b75dd];
      _0x31cd57.nameTable[_0x6b75dd] = _0x4addb4;
    },
    hashRemoveNode: function (_0x12be49) {
      var _0x5156ad = _0x31cd57.hashName(_0x12be49.parent.id, _0x12be49.name);
      if (_0x31cd57.nameTable[_0x5156ad] === _0x12be49) {
        _0x31cd57.nameTable[_0x5156ad] = _0x12be49.name_next;
      } else {
        var _0x31fd18 = _0x31cd57.nameTable[_0x5156ad];
        while (_0x31fd18) {
          if (_0x31fd18.name_next === _0x12be49) {
            _0x31fd18.name_next = _0x12be49.name_next;
            break;
          }
          _0x31fd18 = _0x31fd18.name_next;
        }
      }
    },
    lookupNode: function (_0x2b8ade, _0x1fa432) {
      var _0x3a0d14 = _0x31cd57.mayLookup(_0x2b8ade);
      if (_0x3a0d14) {
        throw new _0x31cd57.ErrnoError(_0x3a0d14, _0x2b8ade);
      }
      var _0x875ff8 = _0x31cd57.hashName(_0x2b8ade.id, _0x1fa432);
      for (var _0x2e0476 = _0x31cd57.nameTable[_0x875ff8]; _0x2e0476; _0x2e0476 = _0x2e0476.name_next) {
        var _0x54ad6b = _0x2e0476.name;
        if (_0x2e0476.parent.id === _0x2b8ade.id && _0x54ad6b === _0x1fa432) {
          return _0x2e0476;
        }
      }
      return _0x31cd57.lookup(_0x2b8ade, _0x1fa432);
    },
    createNode: function (_0x537634, _0x2ea86b, _0x31669d, _0x1948a9) {
      var _0x293832 = new _0x31cd57.FSNode(_0x537634, _0x2ea86b, _0x31669d, _0x1948a9);
      _0x31cd57.hashAddNode(_0x293832);
      return _0x293832;
    },
    destroyNode: function (_0x489380) {
      _0x31cd57.hashRemoveNode(_0x489380);
    },
    isRoot: function (_0x2a842b) {
      return _0x2a842b === _0x2a842b.parent;
    },
    isMountpoint: function (_0x5b9279) {
      return !!_0x5b9279.mounted;
    },
    isFile: function (_0x145354) {
      return (_0x145354 & 61440) === 32768;
    },
    isDir: function (_0x112482) {
      return (_0x112482 & 61440) === 16384;
    },
    isLink: function (_0x461d7f) {
      return (_0x461d7f & 61440) === 40960;
    },
    isChrdev: function (_0x1a1178) {
      return (_0x1a1178 & 61440) === 8192;
    },
    isBlkdev: function (_0x1105f7) {
      return (_0x1105f7 & 61440) === 24576;
    },
    isFIFO: function (_0x15aba2) {
      return (_0x15aba2 & 61440) === 4096;
    },
    isSocket: function (_0x511698) {
      return (_0x511698 & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0x1a8d54) {
      var _0x43c9d2 = _0x31cd57.flagModes[_0x1a8d54];
      if (typeof _0x43c9d2 === "undefined") {
        throw new Error("Unknown file open mode: " + _0x1a8d54);
      }
      return _0x43c9d2;
    },
    flagsToPermissionString: function (_0x2dae08) {
      var _0x2f6e41 = ["r", "w", "rw"][_0x2dae08 & 3];
      if (_0x2dae08 & 512) {
        _0x2f6e41 += "w";
      }
      return _0x2f6e41;
    },
    nodePermissions: function (_0xd1924d, _0x4c5d78) {
      if (_0x31cd57.ignorePermissions) {
        return 0;
      }
      if (_0x4c5d78.includes("r") && !(_0xd1924d.mode & 292)) {
        return 2;
      } else if (_0x4c5d78.includes("w") && !(_0xd1924d.mode & 146)) {
        return 2;
      } else if (_0x4c5d78.includes("x") && !(_0xd1924d.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0x457674) {
      var _0x3616ff = _0x31cd57.nodePermissions(_0x457674, "x");
      if (_0x3616ff) {
        return _0x3616ff;
      }
      if (!_0x457674.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x3ce028, _0x346313) {
      try {
        var _0x4f4860 = _0x31cd57.lookupNode(_0x3ce028, _0x346313);
        return 20;
      } catch (_0x520c4a) {}
      return _0x31cd57.nodePermissions(_0x3ce028, "wx");
    },
    mayDelete: function (_0x2bbff4, _0x539c00, _0x52f79a) {
      var _0x350441;
      try {
        _0x350441 = _0x31cd57.lookupNode(_0x2bbff4, _0x539c00);
      } catch (_0x2bae34) {
        return _0x2bae34.errno;
      }
      var _0xd7a9d0 = _0x31cd57.nodePermissions(_0x2bbff4, "wx");
      if (_0xd7a9d0) {
        return _0xd7a9d0;
      }
      if (_0x52f79a) {
        if (!_0x31cd57.isDir(_0x350441.mode)) {
          return 54;
        }
        if (_0x31cd57.isRoot(_0x350441) || _0x31cd57.getPath(_0x350441) === _0x31cd57.cwd()) {
          return 10;
        }
      } else if (_0x31cd57.isDir(_0x350441.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0x8f967b, _0x50932e) {
      if (!_0x8f967b) {
        return 44;
      }
      if (_0x31cd57.isLink(_0x8f967b.mode)) {
        return 32;
      } else if (_0x31cd57.isDir(_0x8f967b.mode)) {
        if (_0x31cd57.flagsToPermissionString(_0x50932e) !== "r" || _0x50932e & 512) {
          return 31;
        }
      }
      return _0x31cd57.nodePermissions(_0x8f967b, _0x31cd57.flagsToPermissionString(_0x50932e));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x31a081, _0x2788cd) {
      _0x31a081 = _0x31a081 || 0;
      _0x2788cd = _0x2788cd || _0x31cd57.MAX_OPEN_FDS;
      for (var _0x52bc6e = _0x31a081; _0x52bc6e <= _0x2788cd; _0x52bc6e++) {
        if (!_0x31cd57.streams[_0x52bc6e]) {
          return _0x52bc6e;
        }
      }
      throw new _0x31cd57.ErrnoError(33);
    },
    getStream: function (_0x1cea35) {
      return _0x31cd57.streams[_0x1cea35];
    },
    createStream: function (_0x11ef1d, _0x2fcd7d, _0x2f9766) {
      if (!_0x31cd57.FSStream) {
        _0x31cd57.FSStream = function () {};
        _0x31cd57.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x2b0d3b) {
              this.node = _0x2b0d3b;
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
      var _0x555379 = new _0x31cd57.FSStream();
      for (var _0x538b0e in _0x11ef1d) {
        _0x555379[_0x538b0e] = _0x11ef1d[_0x538b0e];
      }
      _0x11ef1d = _0x555379;
      var _0x1c5293 = _0x31cd57.nextfd(_0x2fcd7d, _0x2f9766);
      _0x11ef1d.fd = _0x1c5293;
      _0x31cd57.streams[_0x1c5293] = _0x11ef1d;
      return _0x11ef1d;
    },
    closeStream: function (_0x2ce363) {
      _0x31cd57.streams[_0x2ce363] = null;
    },
    chrdev_stream_ops: {
      open: function (_0x39ba1d) {
        var _0x1c9774 = _0x31cd57.getDevice(_0x39ba1d.node.rdev);
        _0x39ba1d.stream_ops = _0x1c9774.stream_ops;
        if (_0x39ba1d.stream_ops.open) {
          _0x39ba1d.stream_ops.open(_0x39ba1d);
        }
      },
      llseek: function () {
        throw new _0x31cd57.ErrnoError(70);
      }
    },
    major: function (_0xf5108b) {
      return _0xf5108b >> 8;
    },
    minor: function (_0x4bbff5) {
      return _0x4bbff5 & 255;
    },
    makedev: function (_0x3bb64a, _0x476863) {
      return _0x3bb64a << 8 | _0x476863;
    },
    registerDevice: function (_0x53d1d1, _0x1ba85d) {
      _0x31cd57.devices[_0x53d1d1] = {
        stream_ops: _0x1ba85d
      };
    },
    getDevice: function (_0x20a103) {
      return _0x31cd57.devices[_0x20a103];
    },
    getMounts: function (_0x47ba74) {
      var _0x6fe750 = [];
      var _0x45e033 = [_0x47ba74];
      while (_0x45e033.length) {
        var _0xe88368 = _0x45e033.pop();
        _0x6fe750.push(_0xe88368);
        _0x45e033.push.apply(_0x45e033, _0xe88368.mounts);
      }
      return _0x6fe750;
    },
    syncfs: function (_0xd91844, _0x52813c) {
      if (typeof _0xd91844 === "function") {
        _0x52813c = _0xd91844;
        _0xd91844 = false;
      }
      _0x31cd57.syncFSRequests++;
      if (_0x31cd57.syncFSRequests > 1) {
        _0x5761f3("warning: " + _0x31cd57.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0x59de59 = _0x31cd57.getMounts(_0x31cd57.root.mount);
      var _0x11f922 = 0;
      function _0x12766e(_0x4e8258) {
        _0x31cd57.syncFSRequests--;
        return _0x52813c(_0x4e8258);
      }
      function _0x383ec4(_0x22c68c) {
        if (_0x22c68c) {
          if (!_0x383ec4.errored) {
            _0x383ec4.errored = true;
            return _0x12766e(_0x22c68c);
          }
          return;
        }
        if (++_0x11f922 >= _0x59de59.length) {
          _0x12766e(null);
        }
      }
      _0x59de59.forEach(function (_0x480250) {
        if (!_0x480250.type.syncfs) {
          return _0x383ec4(null);
        }
        _0x480250.type.syncfs(_0x480250, _0xd91844, _0x383ec4);
      });
    },
    mount: function (_0x4cb126, _0x138b78, _0x5df627) {
      var _0x2c22f1 = _0x5df627 === "/";
      var _0x46ddb8 = !_0x5df627;
      var _0x2ba97d;
      if (_0x2c22f1 && _0x31cd57.root) {
        throw new _0x31cd57.ErrnoError(10);
      } else if (!_0x2c22f1 && !_0x46ddb8) {
        var _0x141726 = _0x31cd57.lookupPath(_0x5df627, {
          follow_mount: false
        });
        _0x5df627 = _0x141726.path;
        _0x2ba97d = _0x141726.node;
        if (_0x31cd57.isMountpoint(_0x2ba97d)) {
          throw new _0x31cd57.ErrnoError(10);
        }
        if (!_0x31cd57.isDir(_0x2ba97d.mode)) {
          throw new _0x31cd57.ErrnoError(54);
        }
      }
      var _0x65cf71 = {
        type: _0x4cb126,
        opts: _0x138b78,
        mountpoint: _0x5df627,
        mounts: []
      };
      var _0x3fff95 = _0x4cb126.mount(_0x65cf71);
      _0x3fff95.mount = _0x65cf71;
      _0x65cf71.root = _0x3fff95;
      if (_0x2c22f1) {
        _0x31cd57.root = _0x3fff95;
      } else if (_0x2ba97d) {
        _0x2ba97d.mounted = _0x65cf71;
        if (_0x2ba97d.mount) {
          _0x2ba97d.mount.mounts.push(_0x65cf71);
        }
      }
      return _0x3fff95;
    },
    unmount: function (_0x5d4c14) {
      var _0x5a69dc = _0x31cd57.lookupPath(_0x5d4c14, {
        follow_mount: false
      });
      if (!_0x31cd57.isMountpoint(_0x5a69dc.node)) {
        throw new _0x31cd57.ErrnoError(28);
      }
      var _0x500957 = _0x5a69dc.node;
      var _0x260772 = _0x500957.mounted;
      var _0x3aaadc = _0x31cd57.getMounts(_0x260772);
      Object.keys(_0x31cd57.nameTable).forEach(function (_0x2edbd5) {
        var _0x284a4f = _0x31cd57.nameTable[_0x2edbd5];
        while (_0x284a4f) {
          var _0xfbb7ff = _0x284a4f.name_next;
          if (_0x3aaadc.includes(_0x284a4f.mount)) {
            _0x31cd57.destroyNode(_0x284a4f);
          }
          _0x284a4f = _0xfbb7ff;
        }
      });
      _0x500957.mounted = null;
      var _0x564da0 = _0x500957.mount.mounts.indexOf(_0x260772);
      _0x500957.mount.mounts.splice(_0x564da0, 1);
    },
    lookup: function (_0x398e2d, _0x3987b5) {
      return _0x398e2d.node_ops.lookup(_0x398e2d, _0x3987b5);
    },
    mknod: function (_0xb893b6, _0x25628f, _0x38cbf9) {
      var _0x290997 = _0x31cd57.lookupPath(_0xb893b6, {
        parent: true
      });
      var _0x46c7aa = _0x290997.node;
      var _0x15e24a = _0xf450d6.basename(_0xb893b6);
      if (!_0x15e24a || _0x15e24a === "." || _0x15e24a === "..") {
        throw new _0x31cd57.ErrnoError(28);
      }
      var _0x24cbac = _0x31cd57.mayCreate(_0x46c7aa, _0x15e24a);
      if (_0x24cbac) {
        throw new _0x31cd57.ErrnoError(_0x24cbac);
      }
      if (!_0x46c7aa.node_ops.mknod) {
        throw new _0x31cd57.ErrnoError(63);
      }
      return _0x46c7aa.node_ops.mknod(_0x46c7aa, _0x15e24a, _0x25628f, _0x38cbf9);
    },
    create: function (_0x2f2a3c, _0x45429e) {
      _0x45429e = _0x45429e !== undefined ? _0x45429e : 438;
      _0x45429e &= 4095;
      _0x45429e |= 32768;
      return _0x31cd57.mknod(_0x2f2a3c, _0x45429e, 0);
    },
    mkdir: function (_0x426767, _0x4de6d8) {
      _0x4de6d8 = _0x4de6d8 !== undefined ? _0x4de6d8 : 511;
      _0x4de6d8 &= 1023;
      _0x4de6d8 |= 16384;
      return _0x31cd57.mknod(_0x426767, _0x4de6d8, 0);
    },
    mkdirTree: function (_0x3369ac, _0x208a27) {
      var _0x92b5bd = _0x3369ac.split("/");
      var _0x2ac4af = "";
      for (var _0x2feb22 = 0; _0x2feb22 < _0x92b5bd.length; ++_0x2feb22) {
        if (!_0x92b5bd[_0x2feb22]) {
          continue;
        }
        _0x2ac4af += "/" + _0x92b5bd[_0x2feb22];
        try {
          _0x31cd57.mkdir(_0x2ac4af, _0x208a27);
        } catch (_0x7b67b4) {
          if (_0x7b67b4.errno != 20) {
            throw _0x7b67b4;
          }
        }
      }
    },
    mkdev: function (_0x59f09a, _0x1f89ec, _0x53c09b) {
      if (typeof _0x53c09b === "undefined") {
        _0x53c09b = _0x1f89ec;
        _0x1f89ec = 438;
      }
      _0x1f89ec |= 8192;
      return _0x31cd57.mknod(_0x59f09a, _0x1f89ec, _0x53c09b);
    },
    symlink: function (_0xe305ec, _0x4afa54) {
      if (!_0x102cd4.resolve(_0xe305ec)) {
        throw new _0x31cd57.ErrnoError(44);
      }
      var _0x5b064a = _0x31cd57.lookupPath(_0x4afa54, {
        parent: true
      });
      var _0x4c92c9 = _0x5b064a.node;
      if (!_0x4c92c9) {
        throw new _0x31cd57.ErrnoError(44);
      }
      var _0x2fdbdf = _0xf450d6.basename(_0x4afa54);
      var _0x35a34b = _0x31cd57.mayCreate(_0x4c92c9, _0x2fdbdf);
      if (_0x35a34b) {
        throw new _0x31cd57.ErrnoError(_0x35a34b);
      }
      if (!_0x4c92c9.node_ops.symlink) {
        throw new _0x31cd57.ErrnoError(63);
      }
      return _0x4c92c9.node_ops.symlink(_0x4c92c9, _0x2fdbdf, _0xe305ec);
    },
    rename: function (_0x46a65f, _0x29238a) {
      var _0x5752e7 = _0xf450d6.dirname(_0x46a65f);
      var _0x1a7051 = _0xf450d6.dirname(_0x29238a);
      var _0x21606a = _0xf450d6.basename(_0x46a65f);
      var _0x4f465d = _0xf450d6.basename(_0x29238a);
      var _0x215183;
      var _0x4e0eb2;
      var _0x5d7b55;
      _0x215183 = _0x31cd57.lookupPath(_0x46a65f, {
        parent: true
      });
      _0x4e0eb2 = _0x215183.node;
      _0x215183 = _0x31cd57.lookupPath(_0x29238a, {
        parent: true
      });
      _0x5d7b55 = _0x215183.node;
      if (!_0x4e0eb2 || !_0x5d7b55) {
        throw new _0x31cd57.ErrnoError(44);
      }
      if (_0x4e0eb2.mount !== _0x5d7b55.mount) {
        throw new _0x31cd57.ErrnoError(75);
      }
      var _0x55abef = _0x31cd57.lookupNode(_0x4e0eb2, _0x21606a);
      var _0x39cd34 = _0x102cd4.relative(_0x46a65f, _0x1a7051);
      if (_0x39cd34.charAt(0) !== ".") {
        throw new _0x31cd57.ErrnoError(28);
      }
      _0x39cd34 = _0x102cd4.relative(_0x29238a, _0x5752e7);
      if (_0x39cd34.charAt(0) !== ".") {
        throw new _0x31cd57.ErrnoError(55);
      }
      var _0x350439;
      try {
        _0x350439 = _0x31cd57.lookupNode(_0x5d7b55, _0x4f465d);
      } catch (_0x38cb7f) {}
      if (_0x55abef === _0x350439) {
        return;
      }
      var _0x2f3ad0 = _0x31cd57.isDir(_0x55abef.mode);
      var _0x15424f = _0x31cd57.mayDelete(_0x4e0eb2, _0x21606a, _0x2f3ad0);
      if (_0x15424f) {
        throw new _0x31cd57.ErrnoError(_0x15424f);
      }
      _0x15424f = _0x350439 ? _0x31cd57.mayDelete(_0x5d7b55, _0x4f465d, _0x2f3ad0) : _0x31cd57.mayCreate(_0x5d7b55, _0x4f465d);
      if (_0x15424f) {
        throw new _0x31cd57.ErrnoError(_0x15424f);
      }
      if (!_0x4e0eb2.node_ops.rename) {
        throw new _0x31cd57.ErrnoError(63);
      }
      if (_0x31cd57.isMountpoint(_0x55abef) || _0x350439 && _0x31cd57.isMountpoint(_0x350439)) {
        throw new _0x31cd57.ErrnoError(10);
      }
      if (_0x5d7b55 !== _0x4e0eb2) {
        _0x15424f = _0x31cd57.nodePermissions(_0x4e0eb2, "w");
        if (_0x15424f) {
          throw new _0x31cd57.ErrnoError(_0x15424f);
        }
      }
      try {
        if (_0x31cd57.trackingDelegate.willMovePath) {
          _0x31cd57.trackingDelegate.willMovePath(_0x46a65f, _0x29238a);
        }
      } catch (_0x5ea274) {
        _0x5761f3("FS.trackingDelegate['willMovePath']('" + _0x46a65f + "', '" + _0x29238a + "') threw an exception: " + _0x5ea274.message);
      }
      _0x31cd57.hashRemoveNode(_0x55abef);
      try {
        _0x4e0eb2.node_ops.rename(_0x55abef, _0x5d7b55, _0x4f465d);
      } catch (_0x45970a) {
        throw _0x45970a;
      } finally {
        _0x31cd57.hashAddNode(_0x55abef);
      }
      try {
        if (_0x31cd57.trackingDelegate.onMovePath) {
          _0x31cd57.trackingDelegate.onMovePath(_0x46a65f, _0x29238a);
        }
      } catch (_0x290a01) {
        _0x5761f3("FS.trackingDelegate['onMovePath']('" + _0x46a65f + "', '" + _0x29238a + "') threw an exception: " + _0x290a01.message);
      }
    },
    rmdir: function (_0x495d18) {
      var _0x3f9f7d = _0x31cd57.lookupPath(_0x495d18, {
        parent: true
      });
      var _0x588395 = _0x3f9f7d.node;
      var _0x3108b3 = _0xf450d6.basename(_0x495d18);
      var _0x54a0e6 = _0x31cd57.lookupNode(_0x588395, _0x3108b3);
      var _0xe70ccc = _0x31cd57.mayDelete(_0x588395, _0x3108b3, true);
      if (_0xe70ccc) {
        throw new _0x31cd57.ErrnoError(_0xe70ccc);
      }
      if (!_0x588395.node_ops.rmdir) {
        throw new _0x31cd57.ErrnoError(63);
      }
      if (_0x31cd57.isMountpoint(_0x54a0e6)) {
        throw new _0x31cd57.ErrnoError(10);
      }
      try {
        if (_0x31cd57.trackingDelegate.willDeletePath) {
          _0x31cd57.trackingDelegate.willDeletePath(_0x495d18);
        }
      } catch (_0x19ba3b) {
        _0x5761f3("FS.trackingDelegate['willDeletePath']('" + _0x495d18 + "') threw an exception: " + _0x19ba3b.message);
      }
      _0x588395.node_ops.rmdir(_0x588395, _0x3108b3);
      _0x31cd57.destroyNode(_0x54a0e6);
      try {
        if (_0x31cd57.trackingDelegate.onDeletePath) {
          _0x31cd57.trackingDelegate.onDeletePath(_0x495d18);
        }
      } catch (_0x1d2649) {
        _0x5761f3("FS.trackingDelegate['onDeletePath']('" + _0x495d18 + "') threw an exception: " + _0x1d2649.message);
      }
    },
    readdir: function (_0x222c9e) {
      var _0xa9da = _0x31cd57.lookupPath(_0x222c9e, {
        follow: true
      });
      var _0x4bc2b4 = _0xa9da.node;
      if (!_0x4bc2b4.node_ops.readdir) {
        throw new _0x31cd57.ErrnoError(54);
      }
      return _0x4bc2b4.node_ops.readdir(_0x4bc2b4);
    },
    unlink: function (_0x531050) {
      var _0x183b86 = _0x31cd57.lookupPath(_0x531050, {
        parent: true
      });
      var _0x3592ca = _0x183b86.node;
      var _0x1cb7eb = _0xf450d6.basename(_0x531050);
      var _0x3f3aca = _0x31cd57.lookupNode(_0x3592ca, _0x1cb7eb);
      var _0x87aeb9 = _0x31cd57.mayDelete(_0x3592ca, _0x1cb7eb, false);
      if (_0x87aeb9) {
        throw new _0x31cd57.ErrnoError(_0x87aeb9);
      }
      if (!_0x3592ca.node_ops.unlink) {
        throw new _0x31cd57.ErrnoError(63);
      }
      if (_0x31cd57.isMountpoint(_0x3f3aca)) {
        throw new _0x31cd57.ErrnoError(10);
      }
      try {
        if (_0x31cd57.trackingDelegate.willDeletePath) {
          _0x31cd57.trackingDelegate.willDeletePath(_0x531050);
        }
      } catch (_0x4fdc4b) {
        _0x5761f3("FS.trackingDelegate['willDeletePath']('" + _0x531050 + "') threw an exception: " + _0x4fdc4b.message);
      }
      _0x3592ca.node_ops.unlink(_0x3592ca, _0x1cb7eb);
      _0x31cd57.destroyNode(_0x3f3aca);
      try {
        if (_0x31cd57.trackingDelegate.onDeletePath) {
          _0x31cd57.trackingDelegate.onDeletePath(_0x531050);
        }
      } catch (_0x2a7aa4) {
        _0x5761f3("FS.trackingDelegate['onDeletePath']('" + _0x531050 + "') threw an exception: " + _0x2a7aa4.message);
      }
    },
    readlink: function (_0x1290d2) {
      var _0x8954e2 = _0x31cd57.lookupPath(_0x1290d2);
      var _0x33f7bb = _0x8954e2.node;
      if (!_0x33f7bb) {
        throw new _0x31cd57.ErrnoError(44);
      }
      if (!_0x33f7bb.node_ops.readlink) {
        throw new _0x31cd57.ErrnoError(28);
      }
      return _0x102cd4.resolve(_0x31cd57.getPath(_0x33f7bb.parent), _0x33f7bb.node_ops.readlink(_0x33f7bb));
    },
    stat: function (_0x4e1e21, _0x368e9c) {
      var _0x52c1d1 = _0x31cd57.lookupPath(_0x4e1e21, {
        follow: !_0x368e9c
      });
      var _0x3cccd4 = _0x52c1d1.node;
      if (!_0x3cccd4) {
        throw new _0x31cd57.ErrnoError(44);
      }
      if (!_0x3cccd4.node_ops.getattr) {
        throw new _0x31cd57.ErrnoError(63);
      }
      return _0x3cccd4.node_ops.getattr(_0x3cccd4);
    },
    lstat: function (_0xc20b98) {
      return _0x31cd57.stat(_0xc20b98, true);
    },
    chmod: function (_0x3418cd, _0x32a825, _0x3270e1) {
      var _0x46ab40;
      if (typeof _0x3418cd === "string") {
        var _0x28c6c4 = _0x31cd57.lookupPath(_0x3418cd, {
          follow: !_0x3270e1
        });
        _0x46ab40 = _0x28c6c4.node;
      } else {
        _0x46ab40 = _0x3418cd;
      }
      if (!_0x46ab40.node_ops.setattr) {
        throw new _0x31cd57.ErrnoError(63);
      }
      _0x46ab40.node_ops.setattr(_0x46ab40, {
        mode: _0x32a825 & 4095 | _0x46ab40.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0x35f05b, _0x19b268) {
      _0x31cd57.chmod(_0x35f05b, _0x19b268, true);
    },
    fchmod: function (_0x9c8775, _0x50821f) {
      var _0x3c5052 = _0x31cd57.getStream(_0x9c8775);
      if (!_0x3c5052) {
        throw new _0x31cd57.ErrnoError(8);
      }
      _0x31cd57.chmod(_0x3c5052.node, _0x50821f);
    },
    chown: function (_0x503bf1, _0x5c8b73, _0x1c05c8, _0x416a69) {
      var _0x2d34bd;
      if (typeof _0x503bf1 === "string") {
        var _0x314c8e = _0x31cd57.lookupPath(_0x503bf1, {
          follow: !_0x416a69
        });
        _0x2d34bd = _0x314c8e.node;
      } else {
        _0x2d34bd = _0x503bf1;
      }
      if (!_0x2d34bd.node_ops.setattr) {
        throw new _0x31cd57.ErrnoError(63);
      }
      _0x2d34bd.node_ops.setattr(_0x2d34bd, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0x432ec7, _0x4f5621, _0x2b5fca) {
      _0x31cd57.chown(_0x432ec7, _0x4f5621, _0x2b5fca, true);
    },
    fchown: function (_0x53df8e, _0x5506da, _0x5cb3d3) {
      var _0x35f876 = _0x31cd57.getStream(_0x53df8e);
      if (!_0x35f876) {
        throw new _0x31cd57.ErrnoError(8);
      }
      _0x31cd57.chown(_0x35f876.node, _0x5506da, _0x5cb3d3);
    },
    truncate: function (_0x28461f, _0x515d42) {
      if (_0x515d42 < 0) {
        throw new _0x31cd57.ErrnoError(28);
      }
      var _0x3af4de;
      if (typeof _0x28461f === "string") {
        var _0x37ff86 = _0x31cd57.lookupPath(_0x28461f, {
          follow: true
        });
        _0x3af4de = _0x37ff86.node;
      } else {
        _0x3af4de = _0x28461f;
      }
      if (!_0x3af4de.node_ops.setattr) {
        throw new _0x31cd57.ErrnoError(63);
      }
      if (_0x31cd57.isDir(_0x3af4de.mode)) {
        throw new _0x31cd57.ErrnoError(31);
      }
      if (!_0x31cd57.isFile(_0x3af4de.mode)) {
        throw new _0x31cd57.ErrnoError(28);
      }
      var _0x146470 = _0x31cd57.nodePermissions(_0x3af4de, "w");
      if (_0x146470) {
        throw new _0x31cd57.ErrnoError(_0x146470);
      }
      _0x3af4de.node_ops.setattr(_0x3af4de, {
        size: _0x515d42,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0xe3c115, _0xa6cb55) {
      var _0x20b3a8 = _0x31cd57.getStream(_0xe3c115);
      if (!_0x20b3a8) {
        throw new _0x31cd57.ErrnoError(8);
      }
      if ((_0x20b3a8.flags & 2097155) === 0) {
        throw new _0x31cd57.ErrnoError(28);
      }
      _0x31cd57.truncate(_0x20b3a8.node, _0xa6cb55);
    },
    utime: function (_0x346c45, _0x3d460b, _0x547051) {
      var _0x49ad90 = _0x31cd57.lookupPath(_0x346c45, {
        follow: true
      });
      var _0x31be0e = _0x49ad90.node;
      _0x31be0e.node_ops.setattr(_0x31be0e, {
        timestamp: Math.max(_0x3d460b, _0x547051)
      });
    },
    open: function (_0xaa29d8, _0x1634bc, _0x16b7f5, _0x625235, _0x25b205) {
      if (_0xaa29d8 === "") {
        throw new _0x31cd57.ErrnoError(44);
      }
      _0x1634bc = typeof _0x1634bc === "string" ? _0x31cd57.modeStringToFlags(_0x1634bc) : _0x1634bc;
      _0x16b7f5 = typeof _0x16b7f5 === "undefined" ? 438 : _0x16b7f5;
      if (_0x1634bc & 64) {
        _0x16b7f5 = _0x16b7f5 & 4095 | 32768;
      } else {
        _0x16b7f5 = 0;
      }
      var _0x12a5f0;
      if (typeof _0xaa29d8 === "object") {
        _0x12a5f0 = _0xaa29d8;
      } else {
        _0xaa29d8 = _0xf450d6.normalize(_0xaa29d8);
        try {
          var _0x44996f = _0x31cd57.lookupPath(_0xaa29d8, {
            follow: !(_0x1634bc & 131072)
          });
          _0x12a5f0 = _0x44996f.node;
        } catch (_0x23c84c) {}
      }
      var _0x3d2008 = false;
      if (_0x1634bc & 64) {
        if (_0x12a5f0) {
          if (_0x1634bc & 128) {
            throw new _0x31cd57.ErrnoError(20);
          }
        } else {
          _0x12a5f0 = _0x31cd57.mknod(_0xaa29d8, _0x16b7f5, 0);
          _0x3d2008 = true;
        }
      }
      if (!_0x12a5f0) {
        throw new _0x31cd57.ErrnoError(44);
      }
      if (_0x31cd57.isChrdev(_0x12a5f0.mode)) {
        _0x1634bc &= ~512;
      }
      if (_0x1634bc & 65536 && !_0x31cd57.isDir(_0x12a5f0.mode)) {
        throw new _0x31cd57.ErrnoError(54);
      }
      if (!_0x3d2008) {
        var _0x3ba6f6 = _0x31cd57.mayOpen(_0x12a5f0, _0x1634bc);
        if (_0x3ba6f6) {
          throw new _0x31cd57.ErrnoError(_0x3ba6f6);
        }
      }
      if (_0x1634bc & 512) {
        _0x31cd57.truncate(_0x12a5f0, 0);
      }
      _0x1634bc &= ~131712;
      var _0x2894d8 = _0x31cd57.createStream({
        node: _0x12a5f0,
        path: _0x31cd57.getPath(_0x12a5f0),
        flags: _0x1634bc,
        seekable: true,
        position: 0,
        stream_ops: _0x12a5f0.stream_ops,
        ungotten: [],
        error: false
      }, _0x625235, _0x25b205);
      if (_0x2894d8.stream_ops.open) {
        _0x2894d8.stream_ops.open(_0x2894d8);
      }
      if (_0x4c150b.logReadFiles && !(_0x1634bc & 1)) {
        if (!_0x31cd57.readFiles) {
          _0x31cd57.readFiles = {};
        }
        if (!(_0xaa29d8 in _0x31cd57.readFiles)) {
          _0x31cd57.readFiles[_0xaa29d8] = 1;
          _0x5761f3("FS.trackingDelegate error on read file: " + _0xaa29d8);
        }
      }
      try {
        if (_0x31cd57.trackingDelegate.onOpenFile) {
          var _0x3f4cfd = 0;
          if ((_0x1634bc & 2097155) !== 1) {
            _0x3f4cfd |= _0x31cd57.tracking.openFlags.READ;
          }
          if ((_0x1634bc & 2097155) !== 0) {
            _0x3f4cfd |= _0x31cd57.tracking.openFlags.WRITE;
          }
          _0x31cd57.trackingDelegate.onOpenFile(_0xaa29d8, _0x3f4cfd);
        }
      } catch (_0x281b3e) {
        _0x5761f3("FS.trackingDelegate['onOpenFile']('" + _0xaa29d8 + "', flags) threw an exception: " + _0x281b3e.message);
      }
      return _0x2894d8;
    },
    close: function (_0x4e20ea) {
      if (_0x31cd57.isClosed(_0x4e20ea)) {
        throw new _0x31cd57.ErrnoError(8);
      }
      if (_0x4e20ea.getdents) {
        _0x4e20ea.getdents = null;
      }
      try {
        if (_0x4e20ea.stream_ops.close) {
          _0x4e20ea.stream_ops.close(_0x4e20ea);
        }
      } catch (_0x36e8ef) {
        throw _0x36e8ef;
      } finally {
        _0x31cd57.closeStream(_0x4e20ea.fd);
      }
      _0x4e20ea.fd = null;
    },
    isClosed: function (_0x57ddc5) {
      return _0x57ddc5.fd === null;
    },
    llseek: function (_0x562eec, _0x5875f9, _0x58c385) {
      if (_0x31cd57.isClosed(_0x562eec)) {
        throw new _0x31cd57.ErrnoError(8);
      }
      if (!_0x562eec.seekable || !_0x562eec.stream_ops.llseek) {
        throw new _0x31cd57.ErrnoError(70);
      }
      if (_0x58c385 != 0 && _0x58c385 != 1 && _0x58c385 != 2) {
        throw new _0x31cd57.ErrnoError(28);
      }
      _0x562eec.position = _0x562eec.stream_ops.llseek(_0x562eec, _0x5875f9, _0x58c385);
      _0x562eec.ungotten = [];
      return _0x562eec.position;
    },
    read: function (_0x2da410, _0xfd0ca8, _0x2b389f, _0x35eeeb, _0x1e926a) {
      if (_0x35eeeb < 0 || _0x1e926a < 0) {
        throw new _0x31cd57.ErrnoError(28);
      }
      if (_0x31cd57.isClosed(_0x2da410)) {
        throw new _0x31cd57.ErrnoError(8);
      }
      if ((_0x2da410.flags & 2097155) === 1) {
        throw new _0x31cd57.ErrnoError(8);
      }
      if (_0x31cd57.isDir(_0x2da410.node.mode)) {
        throw new _0x31cd57.ErrnoError(31);
      }
      if (!_0x2da410.stream_ops.read) {
        throw new _0x31cd57.ErrnoError(28);
      }
      var _0x8ddab4 = typeof _0x1e926a !== "undefined";
      if (!_0x8ddab4) {
        _0x1e926a = _0x2da410.position;
      } else if (!_0x2da410.seekable) {
        throw new _0x31cd57.ErrnoError(70);
      }
      var _0x380649 = _0x2da410.stream_ops.read(_0x2da410, _0xfd0ca8, _0x2b389f, _0x35eeeb, _0x1e926a);
      if (!_0x8ddab4) {
        _0x2da410.position += _0x380649;
      }
      return _0x380649;
    },
    write: function (_0x126883, _0x2cc078, _0x54e7ba, _0x1e6ce0, _0x4fa0eb, _0x5db1b5) {
      if (_0x1e6ce0 < 0 || _0x4fa0eb < 0) {
        throw new _0x31cd57.ErrnoError(28);
      }
      if (_0x31cd57.isClosed(_0x126883)) {
        throw new _0x31cd57.ErrnoError(8);
      }
      if ((_0x126883.flags & 2097155) === 0) {
        throw new _0x31cd57.ErrnoError(8);
      }
      if (_0x31cd57.isDir(_0x126883.node.mode)) {
        throw new _0x31cd57.ErrnoError(31);
      }
      if (!_0x126883.stream_ops.write) {
        throw new _0x31cd57.ErrnoError(28);
      }
      if (_0x126883.seekable && _0x126883.flags & 1024) {
        _0x31cd57.llseek(_0x126883, 0, 2);
      }
      var _0x208119 = typeof _0x4fa0eb !== "undefined";
      if (!_0x208119) {
        _0x4fa0eb = _0x126883.position;
      } else if (!_0x126883.seekable) {
        throw new _0x31cd57.ErrnoError(70);
      }
      var _0xb61f1 = _0x126883.stream_ops.write(_0x126883, _0x2cc078, _0x54e7ba, _0x1e6ce0, _0x4fa0eb, _0x5db1b5);
      if (!_0x208119) {
        _0x126883.position += _0xb61f1;
      }
      try {
        if (_0x126883.path && _0x31cd57.trackingDelegate.onWriteToFile) {
          _0x31cd57.trackingDelegate.onWriteToFile(_0x126883.path);
        }
      } catch (_0x414f20) {
        _0x5761f3("FS.trackingDelegate['onWriteToFile']('" + _0x126883.path + "') threw an exception: " + _0x414f20.message);
      }
      return _0xb61f1;
    },
    allocate: function (_0x3c4bbe, _0x2cab39, _0x2dcd70) {
      if (_0x31cd57.isClosed(_0x3c4bbe)) {
        throw new _0x31cd57.ErrnoError(8);
      }
      if (_0x2cab39 < 0 || _0x2dcd70 <= 0) {
        throw new _0x31cd57.ErrnoError(28);
      }
      if ((_0x3c4bbe.flags & 2097155) === 0) {
        throw new _0x31cd57.ErrnoError(8);
      }
      if (!_0x31cd57.isFile(_0x3c4bbe.node.mode) && !_0x31cd57.isDir(_0x3c4bbe.node.mode)) {
        throw new _0x31cd57.ErrnoError(43);
      }
      if (!_0x3c4bbe.stream_ops.allocate) {
        throw new _0x31cd57.ErrnoError(138);
      }
      _0x3c4bbe.stream_ops.allocate(_0x3c4bbe, _0x2cab39, _0x2dcd70);
    },
    mmap: function (_0x7a620d, _0x9e6420, _0x37eb30, _0x3adeeb, _0x36bcc6, _0x35afa1) {
      if ((_0x36bcc6 & 2) !== 0 && (_0x35afa1 & 2) === 0 && (_0x7a620d.flags & 2097155) !== 2) {
        throw new _0x31cd57.ErrnoError(2);
      }
      if ((_0x7a620d.flags & 2097155) === 1) {
        throw new _0x31cd57.ErrnoError(2);
      }
      if (!_0x7a620d.stream_ops.mmap) {
        throw new _0x31cd57.ErrnoError(43);
      }
      return _0x7a620d.stream_ops.mmap(_0x7a620d, _0x9e6420, _0x37eb30, _0x3adeeb, _0x36bcc6, _0x35afa1);
    },
    msync: function (_0x2942a7, _0x27fb4e, _0x22407b, _0x2962df, _0x586a1a) {
      if (!_0x2942a7 || !_0x2942a7.stream_ops.msync) {
        return 0;
      }
      return _0x2942a7.stream_ops.msync(_0x2942a7, _0x27fb4e, _0x22407b, _0x2962df, _0x586a1a);
    },
    munmap: function (_0x32b645) {
      return 0;
    },
    ioctl: function (_0x814cc0, _0x536a45, _0x35b4cf) {
      if (!_0x814cc0.stream_ops.ioctl) {
        throw new _0x31cd57.ErrnoError(59);
      }
      return _0x814cc0.stream_ops.ioctl(_0x814cc0, _0x536a45, _0x35b4cf);
    },
    readFile: function (_0x2c9c3a, _0x177a44) {
      _0x177a44 = _0x177a44 || {};
      _0x177a44.flags = _0x177a44.flags || 0;
      _0x177a44.encoding = _0x177a44.encoding || "binary";
      if (_0x177a44.encoding !== "utf8" && _0x177a44.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x177a44.encoding + "\"");
      }
      var _0x257b68;
      var _0x5eb93f = _0x31cd57.open(_0x2c9c3a, _0x177a44.flags);
      var _0x50a814 = _0x31cd57.stat(_0x2c9c3a);
      var _0x1f3149 = _0x50a814.size;
      var _0x10e036 = new Uint8Array(_0x1f3149);
      _0x31cd57.read(_0x5eb93f, _0x10e036, 0, _0x1f3149, 0);
      if (_0x177a44.encoding === "utf8") {
        _0x257b68 = _0xed8485(_0x10e036, 0);
      } else if (_0x177a44.encoding === "binary") {
        _0x257b68 = _0x10e036;
      }
      _0x31cd57.close(_0x5eb93f);
      return _0x257b68;
    },
    writeFile: function (_0x5e337a, _0x5c8c2a, _0x47fbc2) {
      _0x47fbc2 = _0x47fbc2 || {};
      _0x47fbc2.flags = _0x47fbc2.flags || 577;
      var _0x2bbc99 = _0x31cd57.open(_0x5e337a, _0x47fbc2.flags, _0x47fbc2.mode);
      if (typeof _0x5c8c2a === "string") {
        var _0x2a115c = new Uint8Array(_0x19d23e(_0x5c8c2a) + 1);
        var _0x4d4745 = _0x59dbc8(_0x5c8c2a, _0x2a115c, 0, _0x2a115c.length);
        _0x31cd57.write(_0x2bbc99, _0x2a115c, 0, _0x4d4745, undefined, _0x47fbc2.canOwn);
      } else if (ArrayBuffer.isView(_0x5c8c2a)) {
        _0x31cd57.write(_0x2bbc99, _0x5c8c2a, 0, _0x5c8c2a.byteLength, undefined, _0x47fbc2.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0x31cd57.close(_0x2bbc99);
    },
    cwd: function () {
      return _0x31cd57.currentPath;
    },
    chdir: function (_0x2b143a) {
      var _0xc9dd04 = _0x31cd57.lookupPath(_0x2b143a, {
        follow: true
      });
      if (_0xc9dd04.node === null) {
        throw new _0x31cd57.ErrnoError(44);
      }
      if (!_0x31cd57.isDir(_0xc9dd04.node.mode)) {
        throw new _0x31cd57.ErrnoError(54);
      }
      var _0x27d9a5 = _0x31cd57.nodePermissions(_0xc9dd04.node, "x");
      if (_0x27d9a5) {
        throw new _0x31cd57.ErrnoError(_0x27d9a5);
      }
      _0x31cd57.currentPath = _0xc9dd04.path;
    },
    createDefaultDirectories: function () {
      _0x31cd57.mkdir("/tmp");
      _0x31cd57.mkdir("/home");
      _0x31cd57.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0x31cd57.mkdir("/dev");
      _0x31cd57.registerDevice(_0x31cd57.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0x21bdba, _0x21700b, _0x4b7e48, _0x3ff245, _0x407d30) {
          return _0x3ff245;
        }
      });
      _0x31cd57.mkdev("/dev/null", _0x31cd57.makedev(1, 3));
      _0x5f0478.register(_0x31cd57.makedev(5, 0), _0x5f0478.default_tty_ops);
      _0x5f0478.register(_0x31cd57.makedev(6, 0), _0x5f0478.default_tty1_ops);
      _0x31cd57.mkdev("/dev/tty", _0x31cd57.makedev(5, 0));
      _0x31cd57.mkdev("/dev/tty1", _0x31cd57.makedev(6, 0));
      var _0x3df3f0 = _0x71ff11();
      _0x31cd57.createDevice("/dev", "random", _0x3df3f0);
      _0x31cd57.createDevice("/dev", "urandom", _0x3df3f0);
      _0x31cd57.mkdir("/dev/shm");
      _0x31cd57.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0x31cd57.mkdir("/proc");
      var _0xb6b153 = _0x31cd57.mkdir("/proc/self");
      _0x31cd57.mkdir("/proc/self/fd");
      _0x31cd57.mount({
        mount: function () {
          var _0x3572aa = _0x31cd57.createNode(_0xb6b153, "fd", 16895, 73);
          _0x3572aa.node_ops = {
            lookup: function (_0x431e27, _0x426f05) {
              var _0x5b7255 = +_0x426f05;
              var _0x8a3240 = _0x31cd57.getStream(_0x5b7255);
              if (!_0x8a3240) {
                throw new _0x31cd57.ErrnoError(8);
              }
              var _0x3a4cfa = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x8a3240.path;
                  }
                }
              };
              _0x3a4cfa.parent = _0x3a4cfa;
              return _0x3a4cfa;
            }
          };
          return _0x3572aa;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0x4c150b.stdin) {
        _0x31cd57.createDevice("/dev", "stdin", _0x4c150b.stdin);
      } else {
        _0x31cd57.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0x4c150b.stdout) {
        _0x31cd57.createDevice("/dev", "stdout", null, _0x4c150b.stdout);
      } else {
        _0x31cd57.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0x4c150b.stderr) {
        _0x31cd57.createDevice("/dev", "stderr", null, _0x4c150b.stderr);
      } else {
        _0x31cd57.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0x2defc5 = _0x31cd57.open("/dev/stdin", 0);
      var _0xc3d4cb = _0x31cd57.open("/dev/stdout", 1);
      var _0x54874f = _0x31cd57.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0x31cd57.ErrnoError) {
        return;
      }
      _0x31cd57.ErrnoError = function _0x5a29b0(_0x43f7d0, _0x2ee6bb) {
        this.node = _0x2ee6bb;
        this.setErrno = function (_0x1558bf) {
          this.errno = _0x1558bf;
        };
        this.setErrno(_0x43f7d0);
        this.message = "FS error";
      };
      _0x31cd57.ErrnoError.prototype = new Error();
      _0x31cd57.ErrnoError.prototype.constructor = _0x31cd57.ErrnoError;
      [44].forEach(function (_0x423229) {
        _0x31cd57.genericErrors[_0x423229] = new _0x31cd57.ErrnoError(_0x423229);
        _0x31cd57.genericErrors[_0x423229].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0x31cd57.ensureErrnoError();
      _0x31cd57.nameTable = new Array(4096);
      _0x31cd57.mount(_0x33d90c, {}, "/");
      _0x31cd57.createDefaultDirectories();
      _0x31cd57.createDefaultDevices();
      _0x31cd57.createSpecialDirectories();
      _0x31cd57.filesystems = {
        MEMFS: _0x33d90c,
        IDBFS: _0x4eae17
      };
    },
    init: function (_0x3646c2, _0x48d8da, _0xd9fc4b) {
      _0x31cd57.init.initialized = true;
      _0x31cd57.ensureErrnoError();
      _0x4c150b.stdin = _0x3646c2 || _0x4c150b.stdin;
      _0x4c150b.stdout = _0x48d8da || _0x4c150b.stdout;
      _0x4c150b.stderr = _0xd9fc4b || _0x4c150b.stderr;
      _0x31cd57.createStandardStreams();
    },
    quit: function () {
      _0x31cd57.init.initialized = false;
      var _0x38b56c = _0x4c150b._fflush;
      if (_0x38b56c) {
        _0x38b56c(0);
      }
      for (var _0x366e6a = 0; _0x366e6a < _0x31cd57.streams.length; _0x366e6a++) {
        var _0x1478ab = _0x31cd57.streams[_0x366e6a];
        if (!_0x1478ab) {
          continue;
        }
        _0x31cd57.close(_0x1478ab);
      }
    },
    getMode: function (_0x5a229a, _0x5214dc) {
      var _0x2b1ab8 = 0;
      if (_0x5a229a) {
        _0x2b1ab8 |= 365;
      }
      if (_0x5214dc) {
        _0x2b1ab8 |= 146;
      }
      return _0x2b1ab8;
    },
    findObject: function (_0x587571, _0x1e54d6) {
      var _0x41457a = _0x31cd57.analyzePath(_0x587571, _0x1e54d6);
      if (_0x41457a.exists) {
        return _0x41457a.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0x3eb02d, _0x1f8bcf) {
      try {
        var _0x234c8c = _0x31cd57.lookupPath(_0x3eb02d, {
          follow: !_0x1f8bcf
        });
        _0x3eb02d = _0x234c8c.path;
      } catch (_0x205841) {}
      var _0x3ee11 = {
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
        var _0x234c8c = _0x31cd57.lookupPath(_0x3eb02d, {
          parent: true
        });
        _0x3ee11.parentExists = true;
        _0x3ee11.parentPath = _0x234c8c.path;
        _0x3ee11.parentObject = _0x234c8c.node;
        _0x3ee11.name = _0xf450d6.basename(_0x3eb02d);
        _0x234c8c = _0x31cd57.lookupPath(_0x3eb02d, {
          follow: !_0x1f8bcf
        });
        _0x3ee11.exists = true;
        _0x3ee11.path = _0x234c8c.path;
        _0x3ee11.object = _0x234c8c.node;
        _0x3ee11.name = _0x234c8c.node.name;
        _0x3ee11.isRoot = _0x234c8c.path === "/";
      } catch (_0x9b639e) {
        _0x3ee11.error = _0x9b639e.errno;
      }
      return _0x3ee11;
    },
    createPath: function (_0x2032d0, _0x37a949, _0x3c775d, _0x1d6a45) {
      _0x2032d0 = typeof _0x2032d0 === "string" ? _0x2032d0 : _0x31cd57.getPath(_0x2032d0);
      var _0xe05884 = _0x37a949.split("/").reverse();
      while (_0xe05884.length) {
        var _0x10d86c = _0xe05884.pop();
        if (!_0x10d86c) {
          continue;
        }
        var _0x32a633 = _0xf450d6.join2(_0x2032d0, _0x10d86c);
        try {
          _0x31cd57.mkdir(_0x32a633);
        } catch (_0x77e4ed) {}
        _0x2032d0 = _0x32a633;
      }
      return _0x32a633;
    },
    createFile: function (_0x1ef1b6, _0x2fdb7c, _0x175804, _0x5f055e, _0x35bb39) {
      var _0x1eaee8 = _0xf450d6.join2(typeof _0x1ef1b6 === "string" ? _0x1ef1b6 : _0x31cd57.getPath(_0x1ef1b6), _0x2fdb7c);
      var _0x583d6f = _0x31cd57.getMode(_0x5f055e, _0x35bb39);
      return _0x31cd57.create(_0x1eaee8, _0x583d6f);
    },
    createDataFile: function (_0x23c806, _0x39d605, _0x3a5dfc, _0x497d83, _0x13d09d, _0x31b9b7) {
      var _0x20d4b8 = _0x39d605 ? _0xf450d6.join2(typeof _0x23c806 === "string" ? _0x23c806 : _0x31cd57.getPath(_0x23c806), _0x39d605) : _0x23c806;
      var _0x589ce0 = _0x31cd57.getMode(_0x497d83, _0x13d09d);
      var _0x13a8cb = _0x31cd57.create(_0x20d4b8, _0x589ce0);
      if (_0x3a5dfc) {
        if (typeof _0x3a5dfc === "string") {
          var _0x132143 = new Array(_0x3a5dfc.length);
          for (var _0x5921eb = 0, _0x29d604 = _0x3a5dfc.length; _0x5921eb < _0x29d604; ++_0x5921eb) {
            _0x132143[_0x5921eb] = _0x3a5dfc.charCodeAt(_0x5921eb);
          }
          _0x3a5dfc = _0x132143;
        }
        _0x31cd57.chmod(_0x13a8cb, _0x589ce0 | 146);
        var _0x5ed804 = _0x31cd57.open(_0x13a8cb, 577);
        _0x31cd57.write(_0x5ed804, _0x3a5dfc, 0, _0x3a5dfc.length, 0, _0x31b9b7);
        _0x31cd57.close(_0x5ed804);
        _0x31cd57.chmod(_0x13a8cb, _0x589ce0);
      }
      return _0x13a8cb;
    },
    createDevice: function (_0x2e9fa6, _0x2f92ca, _0xe982be, _0x41f11e) {
      var _0x541e76 = _0xf450d6.join2(typeof _0x2e9fa6 === "string" ? _0x2e9fa6 : _0x31cd57.getPath(_0x2e9fa6), _0x2f92ca);
      var _0x2b3028 = _0x31cd57.getMode(!!_0xe982be, !!_0x41f11e);
      if (!_0x31cd57.createDevice.major) {
        _0x31cd57.createDevice.major = 64;
      }
      var _0x48c4ec = _0x31cd57.makedev(_0x31cd57.createDevice.major++, 0);
      _0x31cd57.registerDevice(_0x48c4ec, {
        open: function (_0x430ea3) {
          _0x430ea3.seekable = false;
        },
        close: function (_0x3fa806) {
          if (_0x41f11e && _0x41f11e.buffer && _0x41f11e.buffer.length) {
            _0x41f11e(10);
          }
        },
        read: function (_0x2a4663, _0x1872f4, _0x1a9225, _0x9f8aa8, _0x3fdf0d) {
          var _0x2e8bff = 0;
          for (var _0x2ebcb5 = 0; _0x2ebcb5 < _0x9f8aa8; _0x2ebcb5++) {
            var _0x51b669;
            try {
              _0x51b669 = _0xe982be();
            } catch (_0x5dca72) {
              throw new _0x31cd57.ErrnoError(29);
            }
            if (_0x51b669 === undefined && _0x2e8bff === 0) {
              throw new _0x31cd57.ErrnoError(6);
            }
            if (_0x51b669 === null || _0x51b669 === undefined) {
              break;
            }
            _0x2e8bff++;
            _0x1872f4[_0x1a9225 + _0x2ebcb5] = _0x51b669;
          }
          if (_0x2e8bff) {
            _0x2a4663.node.timestamp = Date.now();
          }
          return _0x2e8bff;
        },
        write: function (_0x442348, _0x454670, _0x24dc94, _0xc04c40, _0x2dae05) {
          for (var _0x1576fe = 0; _0x1576fe < _0xc04c40; _0x1576fe++) {
            try {
              _0x41f11e(_0x454670[_0x24dc94 + _0x1576fe]);
            } catch (_0x411018) {
              throw new _0x31cd57.ErrnoError(29);
            }
          }
          if (_0xc04c40) {
            _0x442348.node.timestamp = Date.now();
          }
          return _0x1576fe;
        }
      });
      return _0x31cd57.mkdev(_0x541e76, _0x2b3028, _0x48c4ec);
    },
    forceLoadFile: function (_0x201d92) {
      if (_0x201d92.isDevice || _0x201d92.isFolder || _0x201d92.link || _0x201d92.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0x59b86d) {
        try {
          _0x201d92.contents = _0x3e9728(_0x59b86d(_0x201d92.url), true);
          _0x201d92.usedBytes = _0x201d92.contents.length;
        } catch (_0x20b2be) {
          throw new _0x31cd57.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x6ec32c, _0x217eda, _0x14c9a2, _0x5e5fbc, _0x49d3f2) {
      function _0x17be5b() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x17be5b.prototype.get = function _0x13b241(_0x3f0e51) {
        if (_0x3f0e51 > this.length - 1 || _0x3f0e51 < 0) {
          return undefined;
        }
        var _0x5ac184 = _0x3f0e51 % this.chunkSize;
        var _0x2abe71 = _0x3f0e51 / this.chunkSize | 0;
        return this.getter(_0x2abe71)[_0x5ac184];
      };
      _0x17be5b.prototype.setDataGetter = function _0x535f42(_0x388afe) {
        this.getter = _0x388afe;
      };
      _0x17be5b.prototype.cacheLength = function _0x32406b() {
        var _0xc09798 = new XMLHttpRequest();
        _0xc09798.open("HEAD", _0x14c9a2, false);
        _0xc09798.send(null);
        if ((!(_0xc09798.status >= 200) || !(_0xc09798.status < 300)) && _0xc09798.status !== 304) {
          throw new Error("Couldn't load " + _0x14c9a2 + ". Status: " + _0xc09798.status);
        }
        var _0x2ae82f = Number(_0xc09798.getResponseHeader("Content-length"));
        var _0x311152;
        var _0xb31d2d = (_0x311152 = _0xc09798.getResponseHeader("Accept-Ranges")) && _0x311152 === "bytes";
        var _0x4f926d = (_0x311152 = _0xc09798.getResponseHeader("Content-Encoding")) && _0x311152 === "gzip";
        var _0x807e66 = 1048576;
        if (!_0xb31d2d) {
          _0x807e66 = _0x2ae82f;
        }
        function _0x3369a5(_0x2f97b8, _0xf0d52d) {
          if (_0x2f97b8 > _0xf0d52d) {
            throw new Error("invalid range (" + _0x2f97b8 + ", " + _0xf0d52d + ") or no bytes requested!");
          }
          if (_0xf0d52d > _0x2ae82f - 1) {
            throw new Error("only " + _0x2ae82f + " bytes available! programmer error!");
          }
          var _0x46456f = new XMLHttpRequest();
          _0x46456f.open("GET", _0x14c9a2, false);
          if (_0x2ae82f !== _0x807e66) {
            _0x46456f.setRequestHeader("Range", "bytes=" + _0x2f97b8 + "-" + _0xf0d52d);
          }
          if (typeof Uint8Array != "undefined") {
            _0x46456f.responseType = "arraybuffer";
          }
          if (_0x46456f.overrideMimeType) {
            _0x46456f.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x46456f.send(null);
          if ((!(_0x46456f.status >= 200) || !(_0x46456f.status < 300)) && _0x46456f.status !== 304) {
            throw new Error("Couldn't load " + _0x14c9a2 + ". Status: " + _0x46456f.status);
          }
          if (_0x46456f.response !== undefined) {
            return new Uint8Array(_0x46456f.response || []);
          } else {
            return _0x3e9728(_0x46456f.responseText || "", true);
          }
        }
        var _0x1a60f2 = this;
        _0x1a60f2.setDataGetter(function (_0x530117) {
          var _0x7e9496 = _0x530117 * _0x807e66;
          var _0x3e09a6 = (_0x530117 + 1) * _0x807e66 - 1;
          _0x3e09a6 = Math.min(_0x3e09a6, _0x2ae82f - 1);
          if (typeof _0x1a60f2.chunks[_0x530117] === "undefined") {
            _0x1a60f2.chunks[_0x530117] = _0x3369a5(_0x7e9496, _0x3e09a6);
          }
          if (typeof _0x1a60f2.chunks[_0x530117] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x1a60f2.chunks[_0x530117];
        });
        if (_0x4f926d || !_0x2ae82f) {
          _0x807e66 = _0x2ae82f = 1;
          _0x2ae82f = this.getter(0).length;
          _0x807e66 = _0x2ae82f;
          _0x41fa06("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x2ae82f;
        this._chunkSize = _0x807e66;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x6c617e) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x5ca9e3 = new _0x17be5b();
        Object.defineProperties(_0x5ca9e3, {
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
        var _0x22e0f8 = {
          isDevice: false,
          contents: _0x5ca9e3
        };
      } else {
        var _0x22e0f8 = {
          isDevice: false,
          url: _0x14c9a2
        };
      }
      var _0x1e7c90 = _0x31cd57.createFile(_0x6ec32c, _0x217eda, _0x22e0f8, _0x5e5fbc, _0x49d3f2);
      if (_0x22e0f8.contents) {
        _0x1e7c90.contents = _0x22e0f8.contents;
      } else if (_0x22e0f8.url) {
        _0x1e7c90.contents = null;
        _0x1e7c90.url = _0x22e0f8.url;
      }
      Object.defineProperties(_0x1e7c90, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0x45308b = {};
      var _0x4992eb = Object.keys(_0x1e7c90.stream_ops);
      _0x4992eb.forEach(function (_0x640c72) {
        var _0x223a8b = _0x1e7c90.stream_ops[_0x640c72];
        _0x45308b[_0x640c72] = function _0x54fe53() {
          _0x31cd57.forceLoadFile(_0x1e7c90);
          return _0x223a8b.apply(null, arguments);
        };
      });
      _0x45308b.read = function _0x14f2c2(_0x497da4, _0x436beb, _0x521d3c, _0x42ab30, _0x294105) {
        _0x31cd57.forceLoadFile(_0x1e7c90);
        var _0x1f6aac = _0x497da4.node.contents;
        if (_0x294105 >= _0x1f6aac.length) {
          return 0;
        }
        var _0x406a94 = Math.min(_0x1f6aac.length - _0x294105, _0x42ab30);
        if (_0x1f6aac.slice) {
          for (var _0x27e8bf = 0; _0x27e8bf < _0x406a94; _0x27e8bf++) {
            _0x436beb[_0x521d3c + _0x27e8bf] = _0x1f6aac[_0x294105 + _0x27e8bf];
          }
        } else {
          for (var _0x27e8bf = 0; _0x27e8bf < _0x406a94; _0x27e8bf++) {
            _0x436beb[_0x521d3c + _0x27e8bf] = _0x1f6aac.get(_0x294105 + _0x27e8bf);
          }
        }
        return _0x406a94;
      };
      _0x1e7c90.stream_ops = _0x45308b;
      return _0x1e7c90;
    },
    createPreloadedFile: function (_0x492994, _0x2872fb, _0x13a1a6, _0x2c369c, _0x7743b, _0x5c5dd4, _0x4525cb, _0x24a940, _0x1fee6c, _0x51abc1) {
      _0xaeecb0.init();
      var _0x4597f6 = _0x2872fb ? _0x102cd4.resolve(_0xf450d6.join2(_0x492994, _0x2872fb)) : _0x492994;
      var _0x270894 = _0xc7933a("cp " + _0x4597f6);
      function _0x4ee908(_0x11ae2c) {
        function _0x443f75(_0x53d4c3) {
          if (_0x51abc1) {
            _0x51abc1();
          }
          if (!_0x24a940) {
            _0x31cd57.createDataFile(_0x492994, _0x2872fb, _0x53d4c3, _0x2c369c, _0x7743b, _0x1fee6c);
          }
          if (_0x5c5dd4) {
            _0x5c5dd4();
          }
          _0x4e20eb(_0x270894);
        }
        var _0x1bdcb6 = false;
        _0x4c150b.preloadPlugins.forEach(function (_0x49f235) {
          if (_0x1bdcb6) {
            return;
          }
          if (_0x49f235.canHandle(_0x4597f6)) {
            _0x49f235.handle(_0x11ae2c, _0x4597f6, _0x443f75, function () {
              if (_0x4525cb) {
                _0x4525cb();
              }
              _0x4e20eb(_0x270894);
            });
            _0x1bdcb6 = true;
          }
        });
        if (!_0x1bdcb6) {
          _0x443f75(_0x11ae2c);
        }
      }
      _0x7a57e5(_0x270894);
      if (typeof _0x13a1a6 == "string") {
        _0xaeecb0.asyncLoad(_0x13a1a6, function (_0x4c49d9) {
          _0x4ee908(_0x4c49d9);
        }, _0x4525cb);
      } else {
        _0x4ee908(_0x13a1a6);
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
    saveFilesToDB: function (_0x5b08e2, _0x2b8f83, _0x11723f) {
      _0x2b8f83 = _0x2b8f83 || function () {};
      _0x11723f = _0x11723f || function () {};
      var _0x578e18 = _0x31cd57.indexedDB();
      try {
        var _0x15f34e = _0x578e18.open(_0x31cd57.DB_NAME(), _0x31cd57.DB_VERSION);
      } catch (_0x1542ce) {
        return _0x11723f(_0x1542ce);
      }
      _0x15f34e.onupgradeneeded = function _0xa383a3() {
        _0x41fa06("creating db");
        var _0x37644f = _0x15f34e.result;
        _0x37644f.createObjectStore(_0x31cd57.DB_STORE_NAME);
      };
      _0x15f34e.onsuccess = function _0x1fda19() {
        var _0x7bcdf9 = _0x15f34e.result;
        var _0x5c0362 = _0x7bcdf9.transaction([_0x31cd57.DB_STORE_NAME], "readwrite");
        var _0x52b1e1 = _0x5c0362.objectStore(_0x31cd57.DB_STORE_NAME);
        var _0xe6d02d = 0;
        var _0x2fb15d = 0;
        var _0x1b6a91 = _0x5b08e2.length;
        function _0x181ed4() {
          if (_0x2fb15d == 0) {
            _0x2b8f83();
          } else {
            _0x11723f();
          }
        }
        _0x5b08e2.forEach(function (_0x5e93d3) {
          var _0x392da5 = _0x52b1e1.put(_0x31cd57.analyzePath(_0x5e93d3).object.contents, _0x5e93d3);
          _0x392da5.onsuccess = function _0x5ad9ba() {
            _0xe6d02d++;
            if (_0xe6d02d + _0x2fb15d == _0x1b6a91) {
              _0x181ed4();
            }
          };
          _0x392da5.onerror = function _0x54dae3() {
            _0x2fb15d++;
            if (_0xe6d02d + _0x2fb15d == _0x1b6a91) {
              _0x181ed4();
            }
          };
        });
        _0x5c0362.onerror = _0x11723f;
      };
      _0x15f34e.onerror = _0x11723f;
    },
    loadFilesFromDB: function (_0x40b02d, _0xae02ac, _0xf42dba) {
      _0xae02ac = _0xae02ac || function () {};
      _0xf42dba = _0xf42dba || function () {};
      var _0x2b0af5 = _0x31cd57.indexedDB();
      try {
        var _0x2cb787 = _0x2b0af5.open(_0x31cd57.DB_NAME(), _0x31cd57.DB_VERSION);
      } catch (_0x7109c3) {
        return _0xf42dba(_0x7109c3);
      }
      _0x2cb787.onupgradeneeded = _0xf42dba;
      _0x2cb787.onsuccess = function _0x43b72b() {
        var _0x286a27 = _0x2cb787.result;
        try {
          var _0x35d0bd = _0x286a27.transaction([_0x31cd57.DB_STORE_NAME], "readonly");
        } catch (_0x7e64f2) {
          _0xf42dba(_0x7e64f2);
          return;
        }
        var _0x5c54d9 = _0x35d0bd.objectStore(_0x31cd57.DB_STORE_NAME);
        var _0x3b891a = 0;
        var _0x877f8f = 0;
        var _0x2179ac = _0x40b02d.length;
        function _0x5e07af() {
          if (_0x877f8f == 0) {
            _0xae02ac();
          } else {
            _0xf42dba();
          }
        }
        _0x40b02d.forEach(function (_0x39f46f) {
          var _0x2a709d = _0x5c54d9.get(_0x39f46f);
          _0x2a709d.onsuccess = function _0x1a8a1c() {
            if (_0x31cd57.analyzePath(_0x39f46f).exists) {
              _0x31cd57.unlink(_0x39f46f);
            }
            _0x31cd57.createDataFile(_0xf450d6.dirname(_0x39f46f), _0xf450d6.basename(_0x39f46f), _0x2a709d.result, true, true, true);
            _0x3b891a++;
            if (_0x3b891a + _0x877f8f == _0x2179ac) {
              _0x5e07af();
            }
          };
          _0x2a709d.onerror = function _0x5aa5c8() {
            _0x877f8f++;
            if (_0x3b891a + _0x877f8f == _0x2179ac) {
              _0x5e07af();
            }
          };
        });
        _0x35d0bd.onerror = _0xf42dba;
      };
      _0x2cb787.onerror = _0xf42dba;
    }
  };
  var _0x4283c9 = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x6e8f19, _0x494d0d, _0xbba15) {
      if (_0x494d0d[0] === "/") {
        return _0x494d0d;
      }
      var _0x4f83ec;
      if (_0x6e8f19 === -100) {
        _0x4f83ec = _0x31cd57.cwd();
      } else {
        var _0x54dbca = _0x31cd57.getStream(_0x6e8f19);
        if (!_0x54dbca) {
          throw new _0x31cd57.ErrnoError(8);
        }
        _0x4f83ec = _0x54dbca.path;
      }
      if (_0x494d0d.length == 0) {
        if (!_0xbba15) {
          throw new _0x31cd57.ErrnoError(44);
        }
        return _0x4f83ec;
      }
      return _0xf450d6.join2(_0x4f83ec, _0x494d0d);
    },
    doStat: function (_0x54b71f, _0x24874f, _0x3915e2) {
      try {
        var _0xb9f55d = _0x54b71f(_0x24874f);
      } catch (_0x295f26) {
        if (_0x295f26 && _0x295f26.node && _0xf450d6.normalize(_0x24874f) !== _0xf450d6.normalize(_0x31cd57.getPath(_0x295f26.node))) {
          return -54;
        }
        throw _0x295f26;
      }
      _0x2beff6[_0x3915e2 >> 2] = _0xb9f55d.dev;
      _0x2beff6[_0x3915e2 + 4 >> 2] = 0;
      _0x2beff6[_0x3915e2 + 8 >> 2] = _0xb9f55d.ino;
      _0x2beff6[_0x3915e2 + 12 >> 2] = _0xb9f55d.mode;
      _0x2beff6[_0x3915e2 + 16 >> 2] = _0xb9f55d.nlink;
      _0x2beff6[_0x3915e2 + 20 >> 2] = _0xb9f55d.uid;
      _0x2beff6[_0x3915e2 + 24 >> 2] = _0xb9f55d.gid;
      _0x2beff6[_0x3915e2 + 28 >> 2] = _0xb9f55d.rdev;
      _0x2beff6[_0x3915e2 + 32 >> 2] = 0;
      _0x457bc9 = [_0xb9f55d.size >>> 0, (_0x46766e = _0xb9f55d.size, +Math.abs(_0x46766e) >= 1 ? _0x46766e > 0 ? (Math.min(+Math.floor(_0x46766e / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x46766e - +(~~_0x46766e >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x2beff6[_0x3915e2 + 40 >> 2] = _0x457bc9[0];
      _0x2beff6[_0x3915e2 + 44 >> 2] = _0x457bc9[1];
      _0x2beff6[_0x3915e2 + 48 >> 2] = 4096;
      _0x2beff6[_0x3915e2 + 52 >> 2] = _0xb9f55d.blocks;
      _0x2beff6[_0x3915e2 + 56 >> 2] = _0xb9f55d.atime.getTime() / 1000 | 0;
      _0x2beff6[_0x3915e2 + 60 >> 2] = 0;
      _0x2beff6[_0x3915e2 + 64 >> 2] = _0xb9f55d.mtime.getTime() / 1000 | 0;
      _0x2beff6[_0x3915e2 + 68 >> 2] = 0;
      _0x2beff6[_0x3915e2 + 72 >> 2] = _0xb9f55d.ctime.getTime() / 1000 | 0;
      _0x2beff6[_0x3915e2 + 76 >> 2] = 0;
      _0x457bc9 = [_0xb9f55d.ino >>> 0, (_0x46766e = _0xb9f55d.ino, +Math.abs(_0x46766e) >= 1 ? _0x46766e > 0 ? (Math.min(+Math.floor(_0x46766e / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x46766e - +(~~_0x46766e >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x2beff6[_0x3915e2 + 80 >> 2] = _0x457bc9[0];
      _0x2beff6[_0x3915e2 + 84 >> 2] = _0x457bc9[1];
      return 0;
    },
    doMsync: function (_0x4ff44b, _0x93a9af, _0x1a9879, _0x1fb491, _0x53bd85) {
      var _0x240e96 = _0x298c61.slice(_0x4ff44b, _0x4ff44b + _0x1a9879);
      _0x31cd57.msync(_0x93a9af, _0x240e96, _0x53bd85, _0x1a9879, _0x1fb491);
    },
    doMkdir: function (_0x21a373, _0x2fa064) {
      _0x21a373 = _0xf450d6.normalize(_0x21a373);
      if (_0x21a373[_0x21a373.length - 1] === "/") {
        _0x21a373 = _0x21a373.substr(0, _0x21a373.length - 1);
      }
      _0x31cd57.mkdir(_0x21a373, _0x2fa064, 0);
      return 0;
    },
    doMknod: function (_0x3e3139, _0x3b1709, _0x4475ad) {
      switch (_0x3b1709 & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0x31cd57.mknod(_0x3e3139, _0x3b1709, _0x4475ad);
      return 0;
    },
    doReadlink: function (_0x25f3d0, _0x233540, _0x5012ab) {
      if (_0x5012ab <= 0) {
        return -28;
      }
      var _0x4ac4db = _0x31cd57.readlink(_0x25f3d0);
      var _0x38ed0d = Math.min(_0x5012ab, _0x19d23e(_0x4ac4db));
      var _0x2eb4ba = _0x381c0f[_0x233540 + _0x38ed0d];
      _0x156f83(_0x4ac4db, _0x233540, _0x5012ab + 1);
      _0x381c0f[_0x233540 + _0x38ed0d] = _0x2eb4ba;
      return _0x38ed0d;
    },
    doAccess: function (_0x5617cf, _0xbda939) {
      if (_0xbda939 & ~7) {
        return -28;
      }
      var _0x143f9f;
      var _0x977d5d = _0x31cd57.lookupPath(_0x5617cf, {
        follow: true
      });
      _0x143f9f = _0x977d5d.node;
      if (!_0x143f9f) {
        return -44;
      }
      var _0x1ea983 = "";
      if (_0xbda939 & 4) {
        _0x1ea983 += "r";
      }
      if (_0xbda939 & 2) {
        _0x1ea983 += "w";
      }
      if (_0xbda939 & 1) {
        _0x1ea983 += "x";
      }
      if (_0x1ea983 && _0x31cd57.nodePermissions(_0x143f9f, _0x1ea983)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0x1c7442, _0x20269a, _0x22cec7) {
      var _0x4e8a05 = _0x31cd57.getStream(_0x22cec7);
      if (_0x4e8a05) {
        _0x31cd57.close(_0x4e8a05);
      }
      return _0x31cd57.open(_0x1c7442, _0x20269a, 0, _0x22cec7, _0x22cec7).fd;
    },
    doReadv: function (_0x16559d, _0x3358b5, _0x81e7f1, _0xabc39e) {
      var _0x3238f6 = 0;
      for (var _0x2109e1 = 0; _0x2109e1 < _0x81e7f1; _0x2109e1++) {
        var _0xb8a12c = _0x2beff6[_0x3358b5 + _0x2109e1 * 8 >> 2];
        var _0x15de0e = _0x2beff6[_0x3358b5 + (_0x2109e1 * 8 + 4) >> 2];
        var _0x12d332 = _0x31cd57.read(_0x16559d, _0x381c0f, _0xb8a12c, _0x15de0e, _0xabc39e);
        if (_0x12d332 < 0) {
          return -1;
        }
        _0x3238f6 += _0x12d332;
        if (_0x12d332 < _0x15de0e) {
          break;
        }
      }
      return _0x3238f6;
    },
    doWritev: function (_0x5bc969, _0x460e76, _0x5cc7de, _0x112527) {
      var _0x3c7be3 = 0;
      for (var _0x419ed8 = 0; _0x419ed8 < _0x5cc7de; _0x419ed8++) {
        var _0x275dcc = _0x2beff6[_0x460e76 + _0x419ed8 * 8 >> 2];
        var _0x4d1a3c = _0x2beff6[_0x460e76 + (_0x419ed8 * 8 + 4) >> 2];
        var _0x163a6c = _0x31cd57.write(_0x5bc969, _0x381c0f, _0x275dcc, _0x4d1a3c, _0x112527);
        if (_0x163a6c < 0) {
          return -1;
        }
        _0x3c7be3 += _0x163a6c;
      }
      return _0x3c7be3;
    },
    varargs: undefined,
    get: function () {
      _0x4283c9.varargs += 4;
      var _0x1a941d = _0x2beff6[_0x4283c9.varargs - 4 >> 2];
      return _0x1a941d;
    },
    getStr: function (_0x6dd14c) {
      var _0x56950b = _0x211f48(_0x6dd14c);
      return _0x56950b;
    },
    getStreamFromFD: function (_0x1046ba) {
      var _0x2d5228 = _0x31cd57.getStream(_0x1046ba);
      if (!_0x2d5228) {
        throw new _0x31cd57.ErrnoError(8);
      }
      return _0x2d5228;
    },
    get64: function (_0x2a9f33, _0x1cdd9d) {
      return _0x2a9f33;
    }
  };
  function _0xcc4ec9(_0x36ee46, _0x4bd703, _0x23ad80, _0x59fc1c, _0x1f8449) {
    try {
      var _0x1fb34b = 0;
      var _0xff0b4 = _0x4bd703 ? _0x2beff6[_0x4bd703 >> 2] : 0;
      var _0x3cd228 = _0x4bd703 ? _0x2beff6[_0x4bd703 + 4 >> 2] : 0;
      var _0x14d4dc = _0x23ad80 ? _0x2beff6[_0x23ad80 >> 2] : 0;
      var _0x2bc838 = _0x23ad80 ? _0x2beff6[_0x23ad80 + 4 >> 2] : 0;
      var _0xb66d7d = _0x59fc1c ? _0x2beff6[_0x59fc1c >> 2] : 0;
      var _0x13ac5e = _0x59fc1c ? _0x2beff6[_0x59fc1c + 4 >> 2] : 0;
      var _0x3c6935 = 0;
      var _0x398719 = 0;
      var _0x1b75e4 = 0;
      var _0x5bac2d = 0;
      var _0x4beeaa = 0;
      var _0x33af81 = 0;
      var _0x363709 = (_0x4bd703 ? _0x2beff6[_0x4bd703 >> 2] : 0) | (_0x23ad80 ? _0x2beff6[_0x23ad80 >> 2] : 0) | (_0x59fc1c ? _0x2beff6[_0x59fc1c >> 2] : 0);
      var _0x599d24 = (_0x4bd703 ? _0x2beff6[_0x4bd703 + 4 >> 2] : 0) | (_0x23ad80 ? _0x2beff6[_0x23ad80 + 4 >> 2] : 0) | (_0x59fc1c ? _0x2beff6[_0x59fc1c + 4 >> 2] : 0);
      function _0x4c284c(_0x27f444, _0x9ac29c, _0x2fc7d8, _0x570d5b) {
        if (_0x27f444 < 32) {
          return _0x9ac29c & _0x570d5b;
        } else {
          return _0x2fc7d8 & _0x570d5b;
        }
      }
      for (var _0x32094c = 0; _0x32094c < _0x36ee46; _0x32094c++) {
        var _0x39ccbe = 1 << _0x32094c % 32;
        if (!_0x4c284c(_0x32094c, _0x363709, _0x599d24, _0x39ccbe)) {
          continue;
        }
        var _0x52bed0 = _0x31cd57.getStream(_0x32094c);
        if (!_0x52bed0) {
          throw new _0x31cd57.ErrnoError(8);
        }
        var _0x5104ff = _0x4283c9.DEFAULT_POLLMASK;
        if (_0x52bed0.stream_ops.poll) {
          _0x5104ff = _0x52bed0.stream_ops.poll(_0x52bed0);
        }
        if (_0x5104ff & 1 && _0x4c284c(_0x32094c, _0xff0b4, _0x3cd228, _0x39ccbe)) {
          if (_0x32094c < 32) {
            _0x3c6935 = _0x3c6935 | _0x39ccbe;
          } else {
            _0x398719 = _0x398719 | _0x39ccbe;
          }
          _0x1fb34b++;
        }
        if (_0x5104ff & 4 && _0x4c284c(_0x32094c, _0x14d4dc, _0x2bc838, _0x39ccbe)) {
          if (_0x32094c < 32) {
            _0x1b75e4 = _0x1b75e4 | _0x39ccbe;
          } else {
            _0x5bac2d = _0x5bac2d | _0x39ccbe;
          }
          _0x1fb34b++;
        }
        if (_0x5104ff & 2 && _0x4c284c(_0x32094c, _0xb66d7d, _0x13ac5e, _0x39ccbe)) {
          if (_0x32094c < 32) {
            _0x4beeaa = _0x4beeaa | _0x39ccbe;
          } else {
            _0x33af81 = _0x33af81 | _0x39ccbe;
          }
          _0x1fb34b++;
        }
      }
      if (_0x4bd703) {
        _0x2beff6[_0x4bd703 >> 2] = _0x3c6935;
        _0x2beff6[_0x4bd703 + 4 >> 2] = _0x398719;
      }
      if (_0x23ad80) {
        _0x2beff6[_0x23ad80 >> 2] = _0x1b75e4;
        _0x2beff6[_0x23ad80 + 4 >> 2] = _0x5bac2d;
      }
      if (_0x59fc1c) {
        _0x2beff6[_0x59fc1c >> 2] = _0x4beeaa;
        _0x2beff6[_0x59fc1c + 4 >> 2] = _0x33af81;
      }
      return _0x1fb34b;
    } catch (_0x23e62b) {
      if (typeof _0x31cd57 === "undefined" || !(_0x23e62b instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x23e62b);
      }
      return -_0x23e62b.errno;
    }
  }
  var _0x2c1cee = {
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
  var _0x431c92 = {
    mount: function (_0x14285b) {
      _0x4c150b.websocket = _0x4c150b.websocket && typeof _0x4c150b.websocket === "object" ? _0x4c150b.websocket : {};
      _0x4c150b.websocket._callbacks = {};
      _0x4c150b.websocket.on = function (_0x599aa0, _0x4da68e) {
        if (typeof _0x4da68e === "function") {
          this._callbacks[_0x599aa0] = _0x4da68e;
        }
        return this;
      };
      _0x4c150b.websocket.emit = function (_0x498fd5, _0xbf0507) {
        if (typeof this._callbacks[_0x498fd5] === "function") {
          this._callbacks[_0x498fd5].call(this, _0xbf0507);
        }
      };
      return _0x31cd57.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x1ebc3e, _0x5eba79, _0x4aaa18) {
      _0x5eba79 &= ~526336;
      var _0x57ba93 = _0x5eba79 == 1;
      if (_0x4aaa18) {
        _0x2c6ead(_0x57ba93 == (_0x4aaa18 == 6));
      }
      var _0x58bfb6 = {
        family: _0x1ebc3e,
        type: _0x5eba79,
        protocol: _0x4aaa18,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x431c92.websocket_sock_ops
      };
      var _0x2d01a6 = _0x431c92.nextname();
      var _0x3cc80e = _0x31cd57.createNode(_0x431c92.root, _0x2d01a6, 49152, 0);
      _0x3cc80e.sock = _0x58bfb6;
      var _0x5ea481 = _0x31cd57.createStream({
        path: _0x2d01a6,
        node: _0x3cc80e,
        flags: 2,
        seekable: false,
        stream_ops: _0x431c92.stream_ops
      });
      _0x58bfb6.stream = _0x5ea481;
      return _0x58bfb6;
    },
    getSocket: function (_0x4c3e02) {
      var _0x47b91a = _0x31cd57.getStream(_0x4c3e02);
      if (!_0x47b91a || !_0x31cd57.isSocket(_0x47b91a.node.mode)) {
        return null;
      }
      return _0x47b91a.node.sock;
    },
    stream_ops: {
      poll: function (_0x1655d6) {
        var _0x3be0ed = _0x1655d6.node.sock;
        return _0x3be0ed.sock_ops.poll(_0x3be0ed);
      },
      ioctl: function (_0x2eb5f3, _0x504dd2, _0xb3b294) {
        var _0x41d7cd = _0x2eb5f3.node.sock;
        return _0x41d7cd.sock_ops.ioctl(_0x41d7cd, _0x504dd2, _0xb3b294);
      },
      read: function (_0x2ac58b, _0x3e69b7, _0x1fad3f, _0xf9da93, _0x687335) {
        var _0x1c5743 = _0x2ac58b.node.sock;
        var _0x400aa3 = _0x1c5743.sock_ops.recvmsg(_0x1c5743, _0xf9da93);
        if (!_0x400aa3) {
          return 0;
        }
        _0x3e69b7.set(_0x400aa3.buffer, _0x1fad3f);
        return _0x400aa3.buffer.length;
      },
      write: function (_0x1f980d, _0x2b20dd, _0x3ff5e8, _0x4bae87, _0x59eaf7) {
        var _0x2b9a48 = _0x1f980d.node.sock;
        return _0x2b9a48.sock_ops.sendmsg(_0x2b9a48, _0x2b20dd, _0x3ff5e8, _0x4bae87);
      },
      close: function (_0x2c9662) {
        var _0x4778a3 = _0x2c9662.node.sock;
        _0x4778a3.sock_ops.close(_0x4778a3);
      }
    },
    nextname: function () {
      if (!_0x431c92.nextname.current) {
        _0x431c92.nextname.current = 0;
      }
      return "socket[" + _0x431c92.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0x4375fc, _0x32744a, _0x21fd61) {
        var _0x4e6c96;
        if (typeof _0x32744a === "object") {
          _0x4e6c96 = _0x32744a;
          _0x32744a = null;
          _0x21fd61 = null;
        }
        if (_0x4e6c96) {
          if (_0x4e6c96._socket) {
            _0x32744a = _0x4e6c96._socket.remoteAddress;
            _0x21fd61 = _0x4e6c96._socket.remotePort;
          } else {
            var _0x5c851c = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x4e6c96.url);
            if (!_0x5c851c) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x32744a = _0x5c851c[1];
            _0x21fd61 = parseInt(_0x5c851c[2], 10);
          }
        } else {
          try {
            var _0x27bbe4 = _0x4c150b.websocket && typeof _0x4c150b.websocket === "object";
            var _0x283cac = "ws:#".replace("#", "//");
            if (_0x27bbe4) {
              if (typeof _0x4c150b.websocket.url === "string") {
                _0x283cac = _0x4c150b.websocket.url;
              }
            }
            if (_0x283cac === "ws://" || _0x283cac === "wss://") {
              var _0x3d4729 = _0x32744a.split("/");
              _0x283cac = _0x283cac + _0x3d4729[0] + ":" + _0x21fd61 + "/" + _0x3d4729.slice(1).join("/");
            }
            var _0x4f7d42 = "binary";
            if (_0x27bbe4) {
              if (typeof _0x4c150b.websocket.subprotocol === "string") {
                _0x4f7d42 = _0x4c150b.websocket.subprotocol;
              }
            }
            var _0x357aaa = undefined;
            if (_0x4f7d42 !== "null") {
              _0x4f7d42 = _0x4f7d42.replace(/^ +| +$/g, "").split(/ *, */);
              _0x357aaa = _0x3315ff ? {
                protocol: _0x4f7d42.toString()
              } : _0x4f7d42;
            }
            if (_0x27bbe4 && _0x4c150b.websocket.subprotocol === null) {
              _0x4f7d42 = "null";
              _0x357aaa = undefined;
            }
            var _0x2d8abd;
            if (_0x3315ff) {
              _0x2d8abd = require("ws");
            } else {
              _0x2d8abd = WebSocket;
            }
            _0x4e6c96 = new _0x2d8abd(_0x283cac, _0x357aaa);
            _0x4e6c96.binaryType = "arraybuffer";
          } catch (_0x1b11e5) {
            throw new _0x31cd57.ErrnoError(_0x2c1cee.EHOSTUNREACH);
          }
        }
        var _0x3a9bbf = {
          addr: _0x32744a,
          port: _0x21fd61,
          socket: _0x4e6c96,
          dgram_send_queue: []
        };
        _0x431c92.websocket_sock_ops.addPeer(_0x4375fc, _0x3a9bbf);
        _0x431c92.websocket_sock_ops.handlePeerEvents(_0x4375fc, _0x3a9bbf);
        if (_0x4375fc.type === 2 && typeof _0x4375fc.sport !== "undefined") {
          _0x3a9bbf.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x4375fc.sport & 65280) >> 8, _0x4375fc.sport & 255]));
        }
        return _0x3a9bbf;
      },
      getPeer: function (_0x2e111a, _0x23e688, _0x50b43c) {
        return _0x2e111a.peers[_0x23e688 + ":" + _0x50b43c];
      },
      addPeer: function (_0x1a7ece, _0x121d74) {
        _0x1a7ece.peers[_0x121d74.addr + ":" + _0x121d74.port] = _0x121d74;
      },
      removePeer: function (_0x41398a, _0x31eee7) {
        delete _0x41398a.peers[_0x31eee7.addr + ":" + _0x31eee7.port];
      },
      handlePeerEvents: function (_0x5f4137, _0x245836) {
        var _0x43bdfa = true;
        function _0x345535() {
          _0x4c150b.websocket.emit("open", _0x5f4137.stream.fd);
          try {
            var _0x3bb3bf = _0x245836.dgram_send_queue.shift();
            while (_0x3bb3bf) {
              _0x245836.socket.send(_0x3bb3bf);
              _0x3bb3bf = _0x245836.dgram_send_queue.shift();
            }
          } catch (_0x425671) {
            _0x245836.socket.close();
          }
        }
        function _0x31142d(_0x29fde6) {
          if (typeof _0x29fde6 === "string") {
            var _0x1a357c = new TextEncoder();
            _0x29fde6 = _0x1a357c.encode(_0x29fde6);
          } else {
            _0x2c6ead(_0x29fde6.byteLength !== undefined);
            if (_0x29fde6.byteLength == 0) {
              return;
            } else {
              _0x29fde6 = new Uint8Array(_0x29fde6);
            }
          }
          var _0x1f1f3b = _0x43bdfa;
          _0x43bdfa = false;
          if (_0x1f1f3b && _0x29fde6.length === 10 && _0x29fde6[0] === 255 && _0x29fde6[1] === 255 && _0x29fde6[2] === 255 && _0x29fde6[3] === 255 && _0x29fde6[4] === "p".charCodeAt(0) && _0x29fde6[5] === "o".charCodeAt(0) && _0x29fde6[6] === "r".charCodeAt(0) && _0x29fde6[7] === "t".charCodeAt(0)) {
            var _0x843425 = _0x29fde6[8] << 8 | _0x29fde6[9];
            _0x431c92.websocket_sock_ops.removePeer(_0x5f4137, _0x245836);
            _0x245836.port = _0x843425;
            _0x431c92.websocket_sock_ops.addPeer(_0x5f4137, _0x245836);
            return;
          }
          _0x5f4137.recv_queue.push({
            addr: _0x245836.addr,
            port: _0x245836.port,
            data: _0x29fde6
          });
          _0x4c150b.websocket.emit("message", _0x5f4137.stream.fd);
        }
        if (_0x3315ff) {
          _0x245836.socket.on("open", _0x345535);
          _0x245836.socket.on("message", function (_0x4c288a, _0x44b44d) {
            if (!_0x44b44d.binary) {
              return;
            }
            _0x31142d(new Uint8Array(_0x4c288a).buffer);
          });
          _0x245836.socket.on("close", function () {
            _0x4c150b.websocket.emit("close", _0x5f4137.stream.fd);
          });
          _0x245836.socket.on("error", function (_0x150c47) {
            _0x5f4137.error = _0x2c1cee.ECONNREFUSED;
            _0x4c150b.websocket.emit("error", [_0x5f4137.stream.fd, _0x5f4137.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x245836.socket.onopen = _0x345535;
          _0x245836.socket.onclose = function () {
            _0x4c150b.websocket.emit("close", _0x5f4137.stream.fd);
          };
          _0x245836.socket.onmessage = function _0x5af43b(_0x13056a) {
            _0x31142d(_0x13056a.data);
          };
          _0x245836.socket.onerror = function (_0x3b48b3) {
            _0x5f4137.error = _0x2c1cee.ECONNREFUSED;
            _0x4c150b.websocket.emit("error", [_0x5f4137.stream.fd, _0x5f4137.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0x4ca84a) {
        if (_0x4ca84a.type === 1 && _0x4ca84a.server) {
          if (_0x4ca84a.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0x20def3 = 0;
        var _0x4022b2 = _0x4ca84a.type === 1 ? _0x431c92.websocket_sock_ops.getPeer(_0x4ca84a, _0x4ca84a.daddr, _0x4ca84a.dport) : null;
        if (_0x4ca84a.recv_queue.length || !_0x4022b2 || _0x4022b2 && _0x4022b2.socket.readyState === _0x4022b2.socket.CLOSING || _0x4022b2 && _0x4022b2.socket.readyState === _0x4022b2.socket.CLOSED) {
          _0x20def3 |= 65;
        }
        if (!_0x4022b2 || _0x4022b2 && _0x4022b2.socket.readyState === _0x4022b2.socket.OPEN) {
          _0x20def3 |= 4;
        }
        if (_0x4022b2 && _0x4022b2.socket.readyState === _0x4022b2.socket.CLOSING || _0x4022b2 && _0x4022b2.socket.readyState === _0x4022b2.socket.CLOSED) {
          _0x20def3 |= 16;
        }
        return _0x20def3;
      },
      ioctl: function (_0x56dcb4, _0x260700, _0x53e237) {
        switch (_0x260700) {
          case 21531:
            var _0x3e7398 = 0;
            if (_0x56dcb4.recv_queue.length) {
              _0x3e7398 = _0x56dcb4.recv_queue[0].data.length;
            }
            _0x2beff6[_0x53e237 >> 2] = _0x3e7398;
            return 0;
          default:
            return _0x2c1cee.EINVAL;
        }
      },
      close: function (_0x504cb5) {
        if (_0x504cb5.server) {
          try {
            _0x504cb5.server.close();
          } catch (_0xe6b8d1) {}
          _0x504cb5.server = null;
        }
        var _0x30eaee = Object.keys(_0x504cb5.peers);
        for (var _0x100383 = 0; _0x100383 < _0x30eaee.length; _0x100383++) {
          var _0xd9bd7e = _0x504cb5.peers[_0x30eaee[_0x100383]];
          try {
            _0xd9bd7e.socket.close();
          } catch (_0x5db3d0) {}
          _0x431c92.websocket_sock_ops.removePeer(_0x504cb5, _0xd9bd7e);
        }
        return 0;
      },
      bind: function (_0x585772, _0x26c3c1, _0x46e6ac) {
        if (typeof _0x585772.saddr !== "undefined" || typeof _0x585772.sport !== "undefined") {
          throw new _0x31cd57.ErrnoError(_0x2c1cee.EINVAL);
        }
        _0x585772.saddr = _0x26c3c1;
        _0x585772.sport = _0x46e6ac;
        if (_0x585772.type === 2) {
          if (_0x585772.server) {
            _0x585772.server.close();
            _0x585772.server = null;
          }
          try {
            _0x585772.sock_ops.listen(_0x585772, 0);
          } catch (_0x2d8af5) {
            if (!(_0x2d8af5 instanceof _0x31cd57.ErrnoError)) {
              throw _0x2d8af5;
            }
            if (_0x2d8af5.errno !== _0x2c1cee.EOPNOTSUPP) {
              throw _0x2d8af5;
            }
          }
        }
      },
      connect: function (_0x239321, _0x3b74a7, _0x510ae6) {
        if (_0x239321.server) {
          throw new _0x31cd57.ErrnoError(_0x2c1cee.EOPNOTSUPP);
        }
        if (typeof _0x239321.daddr !== "undefined" && typeof _0x239321.dport !== "undefined") {
          var _0x80ee46 = _0x431c92.websocket_sock_ops.getPeer(_0x239321, _0x239321.daddr, _0x239321.dport);
          if (_0x80ee46) {
            if (_0x80ee46.socket.readyState === _0x80ee46.socket.CONNECTING) {
              throw new _0x31cd57.ErrnoError(_0x2c1cee.EALREADY);
            } else {
              throw new _0x31cd57.ErrnoError(_0x2c1cee.EISCONN);
            }
          }
        }
        var _0x5d3b55 = _0x431c92.websocket_sock_ops.createPeer(_0x239321, _0x3b74a7, _0x510ae6);
        _0x239321.daddr = _0x5d3b55.addr;
        _0x239321.dport = _0x5d3b55.port;
        throw new _0x31cd57.ErrnoError(_0x2c1cee.EINPROGRESS);
      },
      listen: function (_0x5ca55c, _0x579352) {
        if (!_0x3315ff) {
          throw new _0x31cd57.ErrnoError(_0x2c1cee.EOPNOTSUPP);
        }
        if (_0x5ca55c.server) {
          throw new _0x31cd57.ErrnoError(_0x2c1cee.EINVAL);
        }
        var _0x19532e = require("ws").Server;
        var _0x20e500 = _0x5ca55c.saddr;
        _0x5ca55c.server = new _0x19532e({
          host: _0x20e500,
          port: _0x5ca55c.sport
        });
        _0x4c150b.websocket.emit("listen", _0x5ca55c.stream.fd);
        _0x5ca55c.server.on("connection", function (_0x34ac18) {
          if (_0x5ca55c.type === 1) {
            var _0x2cc467 = _0x431c92.createSocket(_0x5ca55c.family, _0x5ca55c.type, _0x5ca55c.protocol);
            var _0x3f668f = _0x431c92.websocket_sock_ops.createPeer(_0x2cc467, _0x34ac18);
            _0x2cc467.daddr = _0x3f668f.addr;
            _0x2cc467.dport = _0x3f668f.port;
            _0x5ca55c.pending.push(_0x2cc467);
            _0x4c150b.websocket.emit("connection", _0x2cc467.stream.fd);
          } else {
            _0x431c92.websocket_sock_ops.createPeer(_0x5ca55c, _0x34ac18);
            _0x4c150b.websocket.emit("connection", _0x5ca55c.stream.fd);
          }
        });
        _0x5ca55c.server.on("closed", function () {
          _0x4c150b.websocket.emit("close", _0x5ca55c.stream.fd);
          _0x5ca55c.server = null;
        });
        _0x5ca55c.server.on("error", function (_0x225e46) {
          _0x5ca55c.error = _0x2c1cee.EHOSTUNREACH;
          _0x4c150b.websocket.emit("error", [_0x5ca55c.stream.fd, _0x5ca55c.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0x1e8b7e) {
        if (!_0x1e8b7e.server) {
          throw new _0x31cd57.ErrnoError(_0x2c1cee.EINVAL);
        }
        var _0x179a86 = _0x1e8b7e.pending.shift();
        _0x179a86.stream.flags = _0x1e8b7e.stream.flags;
        return _0x179a86;
      },
      getname: function (_0x3608f0, _0x1e2cdd) {
        var _0x46ccb3;
        var _0x37d04c;
        if (_0x1e2cdd) {
          if (_0x3608f0.daddr === undefined || _0x3608f0.dport === undefined) {
            throw new _0x31cd57.ErrnoError(_0x2c1cee.ENOTCONN);
          }
          _0x46ccb3 = _0x3608f0.daddr;
          _0x37d04c = _0x3608f0.dport;
        } else {
          _0x46ccb3 = _0x3608f0.saddr || 0;
          _0x37d04c = _0x3608f0.sport || 0;
        }
        return {
          addr: _0x46ccb3,
          port: _0x37d04c
        };
      },
      sendmsg: function (_0x2bc660, _0x574ae4, _0x44a898, _0xbaf7e8, _0x5862c0, _0x50b131) {
        if (_0x2bc660.type === 2) {
          if (_0x5862c0 === undefined || _0x50b131 === undefined) {
            _0x5862c0 = _0x2bc660.daddr;
            _0x50b131 = _0x2bc660.dport;
          }
          if (_0x5862c0 === undefined || _0x50b131 === undefined) {
            throw new _0x31cd57.ErrnoError(_0x2c1cee.EDESTADDRREQ);
          }
        } else {
          _0x5862c0 = _0x2bc660.daddr;
          _0x50b131 = _0x2bc660.dport;
        }
        var _0x43bb53 = _0x431c92.websocket_sock_ops.getPeer(_0x2bc660, _0x5862c0, _0x50b131);
        if (_0x2bc660.type === 1) {
          if (!_0x43bb53 || _0x43bb53.socket.readyState === _0x43bb53.socket.CLOSING || _0x43bb53.socket.readyState === _0x43bb53.socket.CLOSED) {
            throw new _0x31cd57.ErrnoError(_0x2c1cee.ENOTCONN);
          } else if (_0x43bb53.socket.readyState === _0x43bb53.socket.CONNECTING) {
            throw new _0x31cd57.ErrnoError(_0x2c1cee.EAGAIN);
          }
        }
        if (ArrayBuffer.isView(_0x574ae4)) {
          _0x44a898 += _0x574ae4.byteOffset;
          _0x574ae4 = _0x574ae4.buffer;
        }
        var _0xdf984;
        _0xdf984 = _0x574ae4.slice(_0x44a898, _0x44a898 + _0xbaf7e8);
        if (_0x2bc660.type === 2) {
          if (!_0x43bb53 || _0x43bb53.socket.readyState !== _0x43bb53.socket.OPEN) {
            if (!_0x43bb53 || _0x43bb53.socket.readyState === _0x43bb53.socket.CLOSING || _0x43bb53.socket.readyState === _0x43bb53.socket.CLOSED) {
              _0x43bb53 = _0x431c92.websocket_sock_ops.createPeer(_0x2bc660, _0x5862c0, _0x50b131);
            }
            _0x43bb53.dgram_send_queue.push(_0xdf984);
            return _0xbaf7e8;
          }
        }
        try {
          _0x43bb53.socket.send(_0xdf984);
          return _0xbaf7e8;
        } catch (_0x1b4aff) {
          throw new _0x31cd57.ErrnoError(_0x2c1cee.EINVAL);
        }
      },
      recvmsg: function (_0x2674a5, _0x3988ae) {
        if (_0x2674a5.type === 1 && _0x2674a5.server) {
          throw new _0x31cd57.ErrnoError(_0x2c1cee.ENOTCONN);
        }
        var _0x3234db = _0x2674a5.recv_queue.shift();
        if (!_0x3234db) {
          if (_0x2674a5.type === 1) {
            var _0x290d88 = _0x431c92.websocket_sock_ops.getPeer(_0x2674a5, _0x2674a5.daddr, _0x2674a5.dport);
            if (!_0x290d88) {
              throw new _0x31cd57.ErrnoError(_0x2c1cee.ENOTCONN);
            } else if (_0x290d88.socket.readyState === _0x290d88.socket.CLOSING || _0x290d88.socket.readyState === _0x290d88.socket.CLOSED) {
              return null;
            } else {
              throw new _0x31cd57.ErrnoError(_0x2c1cee.EAGAIN);
            }
          } else {
            throw new _0x31cd57.ErrnoError(_0x2c1cee.EAGAIN);
          }
        }
        var _0x5c98ab = _0x3234db.data.byteLength || _0x3234db.data.length;
        var _0x1c21a4 = _0x3234db.data.byteOffset || 0;
        var _0x4079f9 = _0x3234db.data.buffer || _0x3234db.data;
        var _0x4bb699 = Math.min(_0x3988ae, _0x5c98ab);
        var _0x34eea3 = {
          buffer: new Uint8Array(_0x4079f9, _0x1c21a4, _0x4bb699),
          addr: _0x3234db.addr,
          port: _0x3234db.port
        };
        if (_0x2674a5.type === 1 && _0x4bb699 < _0x5c98ab) {
          var _0x46483e = _0x5c98ab - _0x4bb699;
          _0x3234db.data = new Uint8Array(_0x4079f9, _0x1c21a4 + _0x4bb699, _0x46483e);
          _0x2674a5.recv_queue.unshift(_0x3234db);
        }
        return _0x34eea3;
      }
    }
  };
  function _0x234299(_0x10384c) {
    var _0xb8ec8b = _0x431c92.getSocket(_0x10384c);
    if (!_0xb8ec8b) {
      throw new _0x31cd57.ErrnoError(8);
    }
    return _0xb8ec8b;
  }
  function _0x62bad8(_0x5b84d3) {
    _0x2beff6[_0x2904bb() >> 2] = _0x5b84d3;
    return _0x5b84d3;
  }
  function _0x143d33(_0xb2d9a2) {
    var _0xf5cf35 = _0xb2d9a2.split(".");
    for (var _0x284fa7 = 0; _0x284fa7 < 4; _0x284fa7++) {
      var _0x101a86 = Number(_0xf5cf35[_0x284fa7]);
      if (isNaN(_0x101a86)) {
        return null;
      }
      _0xf5cf35[_0x284fa7] = _0x101a86;
    }
    return (_0xf5cf35[0] | _0xf5cf35[1] << 8 | _0xf5cf35[2] << 16 | _0xf5cf35[3] << 24) >>> 0;
  }
  function _0xa71b32(_0x542a7c) {
    return parseInt(_0x542a7c);
  }
  function _0x2a18d2(_0x3de416) {
    var _0x3f2fc7;
    var _0x297c72;
    var _0x258f29;
    var _0x36e7e3;
    var _0x27de76 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x2c280a = [];
    if (!_0x27de76.test(_0x3de416)) {
      return null;
    }
    if (_0x3de416 === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x3de416.startsWith("::")) {
      _0x3de416 = _0x3de416.replace("::", "Z:");
    } else {
      _0x3de416 = _0x3de416.replace("::", ":Z:");
    }
    if (_0x3de416.indexOf(".") > 0) {
      _0x3de416 = _0x3de416.replace(new RegExp("[.]", "g"), ":");
      _0x3f2fc7 = _0x3de416.split(":");
      _0x3f2fc7[_0x3f2fc7.length - 4] = _0xa71b32(_0x3f2fc7[_0x3f2fc7.length - 4]) + _0xa71b32(_0x3f2fc7[_0x3f2fc7.length - 3]) * 256;
      _0x3f2fc7[_0x3f2fc7.length - 3] = _0xa71b32(_0x3f2fc7[_0x3f2fc7.length - 2]) + _0xa71b32(_0x3f2fc7[_0x3f2fc7.length - 1]) * 256;
      _0x3f2fc7 = _0x3f2fc7.slice(0, _0x3f2fc7.length - 2);
    } else {
      _0x3f2fc7 = _0x3de416.split(":");
    }
    _0x258f29 = 0;
    _0x36e7e3 = 0;
    for (_0x297c72 = 0; _0x297c72 < _0x3f2fc7.length; _0x297c72++) {
      if (typeof _0x3f2fc7[_0x297c72] === "string") {
        if (_0x3f2fc7[_0x297c72] === "Z") {
          for (_0x36e7e3 = 0; _0x36e7e3 < 8 - _0x3f2fc7.length + 1; _0x36e7e3++) {
            _0x2c280a[_0x297c72 + _0x36e7e3] = 0;
          }
          _0x258f29 = _0x36e7e3 - 1;
        } else {
          _0x2c280a[_0x297c72 + _0x258f29] = _0x892f4a(parseInt(_0x3f2fc7[_0x297c72], 16));
        }
      } else {
        _0x2c280a[_0x297c72 + _0x258f29] = _0x3f2fc7[_0x297c72];
      }
    }
    return [_0x2c280a[1] << 16 | _0x2c280a[0], _0x2c280a[3] << 16 | _0x2c280a[2], _0x2c280a[5] << 16 | _0x2c280a[4], _0x2c280a[7] << 16 | _0x2c280a[6]];
  }
  function _0x3f38b4(_0x3fc7ab, _0xe50c68, _0x328cea, _0x2d217f, _0x4e38ca) {
    switch (_0xe50c68) {
      case 2:
        _0x328cea = _0x143d33(_0x328cea);
        if (_0x4e38ca) {
          _0x2beff6[_0x4e38ca >> 2] = 16;
        }
        _0x2a9dc6[_0x3fc7ab >> 1] = _0xe50c68;
        _0x2beff6[_0x3fc7ab + 4 >> 2] = _0x328cea;
        _0x2a9dc6[_0x3fc7ab + 2 >> 1] = _0x892f4a(_0x2d217f);
        _0x457bc9 = [0, (_0x46766e = 0, +Math.abs(_0x46766e) >= 1 ? _0x46766e > 0 ? (Math.min(+Math.floor(_0x46766e / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x46766e - +(~~_0x46766e >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x2beff6[_0x3fc7ab + 8 >> 2] = _0x457bc9[0];
        _0x2beff6[_0x3fc7ab + 12 >> 2] = _0x457bc9[1];
        break;
      case 10:
        _0x328cea = _0x2a18d2(_0x328cea);
        if (_0x4e38ca) {
          _0x2beff6[_0x4e38ca >> 2] = 28;
        }
        _0x2beff6[_0x3fc7ab >> 2] = _0xe50c68;
        _0x2beff6[_0x3fc7ab + 8 >> 2] = _0x328cea[0];
        _0x2beff6[_0x3fc7ab + 12 >> 2] = _0x328cea[1];
        _0x2beff6[_0x3fc7ab + 16 >> 2] = _0x328cea[2];
        _0x2beff6[_0x3fc7ab + 20 >> 2] = _0x328cea[3];
        _0x2a9dc6[_0x3fc7ab + 2 >> 1] = _0x892f4a(_0x2d217f);
        _0x2beff6[_0x3fc7ab + 4 >> 2] = 0;
        _0x2beff6[_0x3fc7ab + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0xde0157 = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0x2f76fe) {
      var _0x170885 = _0x143d33(_0x2f76fe);
      if (_0x170885 !== null) {
        return _0x2f76fe;
      }
      _0x170885 = _0x2a18d2(_0x2f76fe);
      if (_0x170885 !== null) {
        return _0x2f76fe;
      }
      var _0x3d0ff4;
      if (_0xde0157.address_map.addrs[_0x2f76fe]) {
        _0x3d0ff4 = _0xde0157.address_map.addrs[_0x2f76fe];
      } else {
        var _0x186a03 = _0xde0157.address_map.id++;
        _0x2c6ead(_0x186a03 < 65535, "exceeded max address mappings of 65535");
        _0x3d0ff4 = "172.29." + (_0x186a03 & 255) + "." + (_0x186a03 & 65280);
        _0xde0157.address_map.names[_0x3d0ff4] = _0x2f76fe;
        _0xde0157.address_map.addrs[_0x2f76fe] = _0x3d0ff4;
      }
      return _0x3d0ff4;
    },
    lookup_addr: function (_0x1f4307) {
      if (_0xde0157.address_map.names[_0x1f4307]) {
        return _0xde0157.address_map.names[_0x1f4307];
      }
      return null;
    }
  };
  function _0x372ed9(_0x407be4, _0x38660a, _0x1cf99d, _0x3e0d97) {
    try {
      var _0x2610ac = _0x234299(_0x407be4);
      var _0x11421e = _0x2610ac.sock_ops.accept(_0x2610ac);
      if (_0x38660a) {
        var _0x4f4efc = _0x3f38b4(_0x38660a, _0x11421e.family, _0xde0157.lookup_name(_0x11421e.daddr), _0x11421e.dport, _0x1cf99d);
      }
      return _0x11421e.stream.fd;
    } catch (_0x3b48a7) {
      if (typeof _0x31cd57 === "undefined" || !(_0x3b48a7 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x3b48a7);
      }
      return -_0x3b48a7.errno;
    }
  }
  function _0x5f46fb(_0x2b82f4, _0x9c3eaf) {
    try {
      _0x2b82f4 = _0x4283c9.getStr(_0x2b82f4);
      return _0x4283c9.doAccess(_0x2b82f4, _0x9c3eaf);
    } catch (_0x315a46) {
      if (typeof _0x31cd57 === "undefined" || !(_0x315a46 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x315a46);
      }
      return -_0x315a46.errno;
    }
  }
  function _0x345e08(_0x4e0d90) {
    return (_0x4e0d90 & 255) + "." + (_0x4e0d90 >> 8 & 255) + "." + (_0x4e0d90 >> 16 & 255) + "." + (_0x4e0d90 >> 24 & 255);
  }
  function _0x1d5899(_0x28cab9) {
    var _0x2ec6b0 = "";
    var _0x3fbc42 = 0;
    var _0xebafe7 = 0;
    var _0xb060f9 = 0;
    var _0x37164f = 0;
    var _0x4f1aa4 = 0;
    var _0x5722b6 = 0;
    var _0x43b635 = [_0x28cab9[0] & 65535, _0x28cab9[0] >> 16, _0x28cab9[1] & 65535, _0x28cab9[1] >> 16, _0x28cab9[2] & 65535, _0x28cab9[2] >> 16, _0x28cab9[3] & 65535, _0x28cab9[3] >> 16];
    var _0x4ec70e = true;
    var _0x4504fd = "";
    for (_0x5722b6 = 0; _0x5722b6 < 5; _0x5722b6++) {
      if (_0x43b635[_0x5722b6] !== 0) {
        _0x4ec70e = false;
        break;
      }
    }
    if (_0x4ec70e) {
      _0x4504fd = _0x345e08(_0x43b635[6] | _0x43b635[7] << 16);
      if (_0x43b635[5] === -1) {
        _0x2ec6b0 = "::ffff:";
        _0x2ec6b0 += _0x4504fd;
        return _0x2ec6b0;
      }
      if (_0x43b635[5] === 0) {
        _0x2ec6b0 = "::";
        if (_0x4504fd === "0.0.0.0") {
          _0x4504fd = "";
        }
        if (_0x4504fd === "0.0.0.1") {
          _0x4504fd = "1";
        }
        _0x2ec6b0 += _0x4504fd;
        return _0x2ec6b0;
      }
    }
    for (_0x3fbc42 = 0; _0x3fbc42 < 8; _0x3fbc42++) {
      if (_0x43b635[_0x3fbc42] === 0) {
        if (_0x3fbc42 - _0xb060f9 > 1) {
          _0x4f1aa4 = 0;
        }
        _0xb060f9 = _0x3fbc42;
        _0x4f1aa4++;
      }
      if (_0x4f1aa4 > _0xebafe7) {
        _0xebafe7 = _0x4f1aa4;
        _0x37164f = _0x3fbc42 - _0xebafe7 + 1;
      }
    }
    for (_0x3fbc42 = 0; _0x3fbc42 < 8; _0x3fbc42++) {
      if (_0xebafe7 > 1) {
        if (_0x43b635[_0x3fbc42] === 0 && _0x3fbc42 >= _0x37164f && _0x3fbc42 < _0x37164f + _0xebafe7) {
          if (_0x3fbc42 === _0x37164f) {
            _0x2ec6b0 += ":";
            if (_0x37164f === 0) {
              _0x2ec6b0 += ":";
            }
          }
          continue;
        }
      }
      _0x2ec6b0 += Number(_0x15cc1a(_0x43b635[_0x3fbc42] & 65535)).toString(16);
      _0x2ec6b0 += _0x3fbc42 < 7 ? ":" : "";
    }
    return _0x2ec6b0;
  }
  function _0x2a19c5(_0x42fcc0, _0x367f39) {
    var _0x478213 = _0x2a9dc6[_0x42fcc0 >> 1];
    var _0xbd236f = _0x15cc1a(_0x22b5af[_0x42fcc0 + 2 >> 1]);
    var _0x193ded;
    switch (_0x478213) {
      case 2:
        if (_0x367f39 !== 16) {
          return {
            errno: 28
          };
        }
        _0x193ded = _0x2beff6[_0x42fcc0 + 4 >> 2];
        _0x193ded = _0x345e08(_0x193ded);
        break;
      case 10:
        if (_0x367f39 !== 28) {
          return {
            errno: 28
          };
        }
        _0x193ded = [_0x2beff6[_0x42fcc0 + 8 >> 2], _0x2beff6[_0x42fcc0 + 12 >> 2], _0x2beff6[_0x42fcc0 + 16 >> 2], _0x2beff6[_0x42fcc0 + 20 >> 2]];
        _0x193ded = _0x1d5899(_0x193ded);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x478213,
      addr: _0x193ded,
      port: _0xbd236f
    };
  }
  function _0x14c608(_0x6c950d, _0x423c37, _0x418dd5) {
    if (_0x418dd5 && _0x6c950d === 0) {
      return null;
    }
    var _0x6238c3 = _0x2a19c5(_0x6c950d, _0x423c37);
    if (_0x6238c3.errno) {
      throw new _0x31cd57.ErrnoError(_0x6238c3.errno);
    }
    _0x6238c3.addr = _0xde0157.lookup_addr(_0x6238c3.addr) || _0x6238c3.addr;
    return _0x6238c3;
  }
  function _0x15cbb9(_0x499e03, _0x315c81, _0x27084e) {
    try {
      var _0x2c0a09 = _0x234299(_0x499e03);
      var _0x4f944a = _0x14c608(_0x315c81, _0x27084e);
      _0x2c0a09.sock_ops.bind(_0x2c0a09, _0x4f944a.addr, _0x4f944a.port);
      return 0;
    } catch (_0x9a566c) {
      if (typeof _0x31cd57 === "undefined" || !(_0x9a566c instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x9a566c);
      }
      return -_0x9a566c.errno;
    }
  }
  function _0x3ce67b(_0x56c3ed, _0x200e8f) {
    try {
      _0x56c3ed = _0x4283c9.getStr(_0x56c3ed);
      _0x31cd57.chmod(_0x56c3ed, _0x200e8f);
      return 0;
    } catch (_0x1d5e42) {
      if (typeof _0x31cd57 === "undefined" || !(_0x1d5e42 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x1d5e42);
      }
      return -_0x1d5e42.errno;
    }
  }
  function _0x2f3668(_0x3dd099, _0x446598, _0x1da78c) {
    try {
      var _0x42f6d2 = _0x234299(_0x3dd099);
      var _0x9469f2 = _0x14c608(_0x446598, _0x1da78c);
      _0x42f6d2.sock_ops.connect(_0x42f6d2, _0x9469f2.addr, _0x9469f2.port);
      return 0;
    } catch (_0xd37899) {
      if (typeof _0x31cd57 === "undefined" || !(_0xd37899 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0xd37899);
      }
      return -_0xd37899.errno;
    }
  }
  function _0x4196c9(_0x472eb5, _0x4b1eaa) {
    try {
      var _0x56c50d = _0x4283c9.getStreamFromFD(_0x472eb5);
      if (_0x56c50d.fd === _0x4b1eaa) {
        return _0x4b1eaa;
      }
      return _0x4283c9.doDup(_0x56c50d.path, _0x56c50d.flags, _0x4b1eaa);
    } catch (_0x5cabef) {
      if (typeof _0x31cd57 === "undefined" || !(_0x5cabef instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x5cabef);
      }
      return -_0x5cabef.errno;
    }
  }
  function _0x2558e9(_0x4bf038, _0x51fb0e, _0xda9b5b) {
    _0x4283c9.varargs = _0xda9b5b;
    try {
      var _0x33ec3b = _0x4283c9.getStreamFromFD(_0x4bf038);
      switch (_0x51fb0e) {
        case 0:
          {
            var _0x204250 = _0x4283c9.get();
            if (_0x204250 < 0) {
              return -28;
            }
            var _0x37b8fd;
            _0x37b8fd = _0x31cd57.open(_0x33ec3b.path, _0x33ec3b.flags, 0, _0x204250);
            return _0x37b8fd.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0x33ec3b.flags;
        case 4:
          {
            var _0x204250 = _0x4283c9.get();
            _0x33ec3b.flags |= _0x204250;
            return 0;
          }
        case 12:
          {
            var _0x204250 = _0x4283c9.get();
            var _0x56c3d4 = 0;
            _0x2a9dc6[_0x204250 + _0x56c3d4 >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0x62bad8(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x947793) {
      if (typeof _0x31cd57 === "undefined" || !(_0x947793 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x947793);
      }
      return -_0x947793.errno;
    }
  }
  function _0x2b6ed0(_0x4c66ae, _0x276b86) {
    try {
      var _0x19e968 = _0x4283c9.getStreamFromFD(_0x4c66ae);
      return _0x4283c9.doStat(_0x31cd57.stat, _0x19e968.path, _0x276b86);
    } catch (_0xa9c49a) {
      if (typeof _0x31cd57 === "undefined" || !(_0xa9c49a instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0xa9c49a);
      }
      return -_0xa9c49a.errno;
    }
  }
  function _0x45520d(_0x34398e, _0xe19fd1, _0x4fe796, _0x39f74d) {
    try {
      var _0x1a7ca6 = _0x4283c9.get64(_0x4fe796, _0x39f74d);
      _0x31cd57.ftruncate(_0x34398e, _0x1a7ca6);
      return 0;
    } catch (_0x1b5498) {
      if (typeof _0x31cd57 === "undefined" || !(_0x1b5498 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x1b5498);
      }
      return -_0x1b5498.errno;
    }
  }
  function _0x72d9ad(_0x371fe1, _0x1ba54a) {
    try {
      if (_0x1ba54a === 0) {
        return -28;
      }
      var _0x204b68 = _0x31cd57.cwd();
      var _0x29daaa = _0x19d23e(_0x204b68);
      if (_0x1ba54a < _0x29daaa + 1) {
        return -68;
      }
      _0x156f83(_0x204b68, _0x371fe1, _0x1ba54a);
      return _0x371fe1;
    } catch (_0x493f5a) {
      if (typeof _0x31cd57 === "undefined" || !(_0x493f5a instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x493f5a);
      }
      return -_0x493f5a.errno;
    }
  }
  function _0x42c052(_0xc93968, _0x4c83b3, _0x518ce0) {
    try {
      var _0x4233e7 = _0x4283c9.getStreamFromFD(_0xc93968);
      if (!_0x4233e7.getdents) {
        _0x4233e7.getdents = _0x31cd57.readdir(_0x4233e7.path);
      }
      var _0x3f9530 = 280;
      var _0x476475 = 0;
      var _0x344a8d = _0x31cd57.llseek(_0x4233e7, 0, 1);
      var _0x58082a = Math.floor(_0x344a8d / _0x3f9530);
      while (_0x58082a < _0x4233e7.getdents.length && _0x476475 + _0x3f9530 <= _0x518ce0) {
        var _0x5d5a23;
        var _0x560088;
        var _0x3ae9f2 = _0x4233e7.getdents[_0x58082a];
        if (_0x3ae9f2[0] === ".") {
          _0x5d5a23 = 1;
          _0x560088 = 4;
        } else {
          var _0x1f92d8 = _0x31cd57.lookupNode(_0x4233e7.node, _0x3ae9f2);
          _0x5d5a23 = _0x1f92d8.id;
          _0x560088 = _0x31cd57.isChrdev(_0x1f92d8.mode) ? 2 : _0x31cd57.isDir(_0x1f92d8.mode) ? 4 : _0x31cd57.isLink(_0x1f92d8.mode) ? 10 : 8;
        }
        _0x457bc9 = [_0x5d5a23 >>> 0, (_0x46766e = _0x5d5a23, +Math.abs(_0x46766e) >= 1 ? _0x46766e > 0 ? (Math.min(+Math.floor(_0x46766e / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x46766e - +(~~_0x46766e >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x2beff6[_0x4c83b3 + _0x476475 >> 2] = _0x457bc9[0];
        _0x2beff6[_0x4c83b3 + _0x476475 + 4 >> 2] = _0x457bc9[1];
        _0x457bc9 = [(_0x58082a + 1) * _0x3f9530 >>> 0, (_0x46766e = (_0x58082a + 1) * _0x3f9530, +Math.abs(_0x46766e) >= 1 ? _0x46766e > 0 ? (Math.min(+Math.floor(_0x46766e / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x46766e - +(~~_0x46766e >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x2beff6[_0x4c83b3 + _0x476475 + 8 >> 2] = _0x457bc9[0];
        _0x2beff6[_0x4c83b3 + _0x476475 + 12 >> 2] = _0x457bc9[1];
        _0x2a9dc6[_0x4c83b3 + _0x476475 + 16 >> 1] = 280;
        _0x381c0f[_0x4c83b3 + _0x476475 + 18 >> 0] = _0x560088;
        _0x156f83(_0x3ae9f2, _0x4c83b3 + _0x476475 + 19, 256);
        _0x476475 += _0x3f9530;
        _0x58082a += 1;
      }
      _0x31cd57.llseek(_0x4233e7, _0x58082a * _0x3f9530, 0);
      return _0x476475;
    } catch (_0x42bda1) {
      if (typeof _0x31cd57 === "undefined" || !(_0x42bda1 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x42bda1);
      }
      return -_0x42bda1.errno;
    }
  }
  function _0x830b9d() {
    return 0;
  }
  function _0x2c306c() {
    return _0x830b9d();
  }
  function _0x56b9be(_0x39ef04, _0x527ab6, _0x368937) {
    try {
      var _0x1d71f2 = _0x234299(_0x39ef04);
      if (!_0x1d71f2.daddr) {
        return -53;
      }
      var _0x82a096 = _0x3f38b4(_0x527ab6, _0x1d71f2.family, _0xde0157.lookup_name(_0x1d71f2.daddr), _0x1d71f2.dport, _0x368937);
      return 0;
    } catch (_0x35b8ea) {
      if (typeof _0x31cd57 === "undefined" || !(_0x35b8ea instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x35b8ea);
      }
      return -_0x35b8ea.errno;
    }
  }
  function _0xfd50b6() {
    return 42;
  }
  function _0x2c5a47(_0x131a80, _0xad4f66) {
    try {
      _0x163d33(_0xad4f66, 0, 136);
      _0x2beff6[_0xad4f66 >> 2] = 1;
      _0x2beff6[_0xad4f66 + 4 >> 2] = 2;
      _0x2beff6[_0xad4f66 + 8 >> 2] = 3;
      _0x2beff6[_0xad4f66 + 12 >> 2] = 4;
      return 0;
    } catch (_0x3502be) {
      if (typeof _0x31cd57 === "undefined" || !(_0x3502be instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x3502be);
      }
      return -_0x3502be.errno;
    }
  }
  function _0x3986d3(_0x5efc25, _0x2d5f6e, _0x59eaa9) {
    try {
      _0x5761f3("__sys_getsockname " + _0x5efc25);
      var _0x35d962 = _0x234299(_0x5efc25);
      var _0x211e2e = _0x3f38b4(_0x2d5f6e, _0x35d962.family, _0xde0157.lookup_name(_0x35d962.saddr || "0.0.0.0"), _0x35d962.sport, _0x59eaa9);
      return 0;
    } catch (_0x171138) {
      if (typeof _0x31cd57 === "undefined" || !(_0x171138 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x171138);
      }
      return -_0x171138.errno;
    }
  }
  function _0x574f60(_0x15a998, _0x457b26, _0x194732, _0x45c81e, _0x58f65a) {
    try {
      var _0x3f704e = _0x234299(_0x15a998);
      if (_0x457b26 === 1) {
        if (_0x194732 === 4) {
          _0x2beff6[_0x45c81e >> 2] = _0x3f704e.error;
          _0x2beff6[_0x58f65a >> 2] = 4;
          _0x3f704e.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0x445015) {
      if (typeof _0x31cd57 === "undefined" || !(_0x445015 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x445015);
      }
      return -_0x445015.errno;
    }
  }
  function _0x3cd852() {
    return _0x830b9d();
  }
  function _0x1593f2(_0x15d55a, _0x5c9377, _0x320d37) {
    _0x4283c9.varargs = _0x320d37;
    try {
      var _0x2c1c62 = _0x4283c9.getStreamFromFD(_0x15d55a);
      switch (_0x5c9377) {
        case 21509:
        case 21505:
          {
            if (!_0x2c1c62.tty) {
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
            if (!_0x2c1c62.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x2c1c62.tty) {
              return -59;
            }
            var _0x2fa585 = _0x4283c9.get();
            _0x2beff6[_0x2fa585 >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x2c1c62.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0x2fa585 = _0x4283c9.get();
            return _0x31cd57.ioctl(_0x2c1c62, _0x5c9377, _0x2fa585);
          }
        case 21523:
          {
            if (!_0x2c1c62.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x2c1c62.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0x25a973("bad ioctl syscall " + _0x5c9377);
      }
    } catch (_0x4146e3) {
      if (typeof _0x31cd57 === "undefined" || !(_0x4146e3 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x4146e3);
      }
      return -_0x4146e3.errno;
    }
  }
  function _0x18bca0(_0x4eee65, _0x4863b3) {
    try {
      var _0x316d11 = _0x234299(_0x4eee65);
      _0x316d11.sock_ops.listen(_0x316d11, _0x4863b3);
      return 0;
    } catch (_0x15f43c) {
      if (typeof _0x31cd57 === "undefined" || !(_0x15f43c instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x15f43c);
      }
      return -_0x15f43c.errno;
    }
  }
  function _0x3a83c8(_0x33b53b, _0x2287a1) {
    try {
      _0x33b53b = _0x4283c9.getStr(_0x33b53b);
      return _0x4283c9.doStat(_0x31cd57.lstat, _0x33b53b, _0x2287a1);
    } catch (_0xd63ee2) {
      if (typeof _0x31cd57 === "undefined" || !(_0xd63ee2 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0xd63ee2);
      }
      return -_0xd63ee2.errno;
    }
  }
  function _0x4667cc(_0x34eb3d, _0x104d55) {
    try {
      _0x34eb3d = _0x4283c9.getStr(_0x34eb3d);
      return _0x4283c9.doMkdir(_0x34eb3d, _0x104d55);
    } catch (_0x2c60c5) {
      if (typeof _0x31cd57 === "undefined" || !(_0x2c60c5 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x2c60c5);
      }
      return -_0x2c60c5.errno;
    }
  }
  function _0x101607(_0x5e4136, _0x47e178, _0x1b97e5, _0x579a8c, _0x32831e, _0x1090a4) {
    _0x1090a4 <<= 12;
    var _0x2319f2;
    var _0x4265a0 = false;
    if ((_0x579a8c & 16) !== 0 && _0x5e4136 % 65536 !== 0) {
      return -28;
    }
    if ((_0x579a8c & 32) !== 0) {
      _0x2319f2 = _0x2803c2(65536, _0x47e178);
      if (!_0x2319f2) {
        return -48;
      }
      _0x163d33(_0x2319f2, 0, _0x47e178);
      _0x4265a0 = true;
    } else {
      var _0x458059 = _0x31cd57.getStream(_0x32831e);
      if (!_0x458059) {
        return -8;
      }
      var _0x243a85 = _0x31cd57.mmap(_0x458059, _0x5e4136, _0x47e178, _0x1090a4, _0x1b97e5, _0x579a8c);
      _0x2319f2 = _0x243a85.ptr;
      _0x4265a0 = _0x243a85.allocated;
    }
    _0x4283c9.mappings[_0x2319f2] = {
      malloc: _0x2319f2,
      len: _0x47e178,
      allocated: _0x4265a0,
      fd: _0x32831e,
      prot: _0x1b97e5,
      flags: _0x579a8c,
      offset: _0x1090a4
    };
    return _0x2319f2;
  }
  function _0xf057b6(_0x147041, _0x94438a, _0x125ed3, _0x4b1fef, _0xfe3266, _0x197cbd) {
    try {
      return _0x101607(_0x147041, _0x94438a, _0x125ed3, _0x4b1fef, _0xfe3266, _0x197cbd);
    } catch (_0x3977d6) {
      if (typeof _0x31cd57 === "undefined" || !(_0x3977d6 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x3977d6);
      }
      return -_0x3977d6.errno;
    }
  }
  function _0xdc88f3(_0x25746f, _0x33f517) {
    if ((_0x25746f | 0) === -1 || _0x33f517 === 0) {
      return -28;
    }
    var _0x14acc5 = _0x4283c9.mappings[_0x25746f];
    if (!_0x14acc5) {
      return 0;
    }
    if (_0x33f517 === _0x14acc5.len) {
      var _0x1d05b5 = _0x31cd57.getStream(_0x14acc5.fd);
      if (_0x1d05b5) {
        if (_0x14acc5.prot & 2) {
          _0x4283c9.doMsync(_0x25746f, _0x1d05b5, _0x33f517, _0x14acc5.flags, _0x14acc5.offset);
        }
        _0x31cd57.munmap(_0x1d05b5);
      }
      _0x4283c9.mappings[_0x25746f] = null;
      if (_0x14acc5.allocated) {
        _0xb102d5(_0x14acc5.malloc);
      }
    }
    return 0;
  }
  function _0x2363b4(_0x1cb332, _0x51348e) {
    try {
      return _0xdc88f3(_0x1cb332, _0x51348e);
    } catch (_0xfa3d1e) {
      if (typeof _0x31cd57 === "undefined" || !(_0xfa3d1e instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0xfa3d1e);
      }
      return -_0xfa3d1e.errno;
    }
  }
  function _0xa4dd80(_0x2ac7be, _0x4a45c1, _0x2553c1) {
    _0x4283c9.varargs = _0x2553c1;
    try {
      var _0x46d4b9 = _0x4283c9.getStr(_0x2ac7be);
      var _0x432c61 = _0x2553c1 ? _0x4283c9.get() : 0;
      var _0x185994 = _0x31cd57.open(_0x46d4b9, _0x4a45c1, _0x432c61);
      return _0x185994.fd;
    } catch (_0x2a32b3) {
      if (typeof _0x31cd57 === "undefined" || !(_0x2a32b3 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x2a32b3);
      }
      return -_0x2a32b3.errno;
    }
  }
  var _0x4b2abc = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0xa16d83) {
      return _0x31cd57.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0x73e158 = {
        buckets: []
      };
      _0x73e158.buckets.push({
        buffer: new Uint8Array(_0x4b2abc.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0xcef6f2 = _0x4b2abc.nextname();
      var _0x3b3d85 = _0x4b2abc.nextname();
      var _0x13b7d2 = _0x31cd57.createNode(_0x4b2abc.root, _0xcef6f2, 4096, 0);
      var _0x422ae3 = _0x31cd57.createNode(_0x4b2abc.root, _0x3b3d85, 4096, 0);
      _0x13b7d2.pipe = _0x73e158;
      _0x422ae3.pipe = _0x73e158;
      var _0x316e4e = _0x31cd57.createStream({
        path: _0xcef6f2,
        node: _0x13b7d2,
        flags: 0,
        seekable: false,
        stream_ops: _0x4b2abc.stream_ops
      });
      _0x13b7d2.stream = _0x316e4e;
      var _0x18e920 = _0x31cd57.createStream({
        path: _0x3b3d85,
        node: _0x422ae3,
        flags: 1,
        seekable: false,
        stream_ops: _0x4b2abc.stream_ops
      });
      _0x422ae3.stream = _0x18e920;
      return {
        readable_fd: _0x316e4e.fd,
        writable_fd: _0x18e920.fd
      };
    },
    stream_ops: {
      poll: function (_0x269eb1) {
        var _0x71631 = _0x269eb1.node.pipe;
        if ((_0x269eb1.flags & 2097155) === 1) {
          return 260;
        } else if (_0x71631.buckets.length > 0) {
          for (var _0x1cbdfa = 0; _0x1cbdfa < _0x71631.buckets.length; _0x1cbdfa++) {
            var _0x2c3e53 = _0x71631.buckets[_0x1cbdfa];
            if (_0x2c3e53.offset - _0x2c3e53.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0x11e516, _0x867919, _0x5f4a2b) {
        return _0x2c1cee.EINVAL;
      },
      fsync: function (_0x5e231a) {
        return _0x2c1cee.EINVAL;
      },
      read: function (_0x2967ad, _0x319ac2, _0x4c1f5b, _0x54693b, _0x3a1797) {
        var _0x334c2e = _0x2967ad.node.pipe;
        var _0x515e19 = 0;
        for (var _0x190e6a = 0; _0x190e6a < _0x334c2e.buckets.length; _0x190e6a++) {
          var _0x2e6270 = _0x334c2e.buckets[_0x190e6a];
          _0x515e19 += _0x2e6270.offset - _0x2e6270.roffset;
        }
        _0x2c6ead(_0x319ac2 instanceof ArrayBuffer || ArrayBuffer.isView(_0x319ac2));
        var _0x2320ad = _0x319ac2.subarray(_0x4c1f5b, _0x4c1f5b + _0x54693b);
        if (_0x54693b <= 0) {
          return 0;
        }
        if (_0x515e19 == 0) {
          throw new _0x31cd57.ErrnoError(_0x2c1cee.EAGAIN);
        }
        var _0x38ffb6 = Math.min(_0x515e19, _0x54693b);
        var _0x47e34e = _0x38ffb6;
        var _0x4b043e = 0;
        for (var _0x190e6a = 0; _0x190e6a < _0x334c2e.buckets.length; _0x190e6a++) {
          var _0xcc21f5 = _0x334c2e.buckets[_0x190e6a];
          var _0x20c5ef = _0xcc21f5.offset - _0xcc21f5.roffset;
          if (_0x38ffb6 <= _0x20c5ef) {
            var _0x2c7ac4 = _0xcc21f5.buffer.subarray(_0xcc21f5.roffset, _0xcc21f5.offset);
            if (_0x38ffb6 < _0x20c5ef) {
              _0x2c7ac4 = _0x2c7ac4.subarray(0, _0x38ffb6);
              _0xcc21f5.roffset += _0x38ffb6;
            } else {
              _0x4b043e++;
            }
            _0x2320ad.set(_0x2c7ac4);
            break;
          } else {
            var _0x2c7ac4 = _0xcc21f5.buffer.subarray(_0xcc21f5.roffset, _0xcc21f5.offset);
            _0x2320ad.set(_0x2c7ac4);
            _0x2320ad = _0x2320ad.subarray(_0x2c7ac4.byteLength);
            _0x38ffb6 -= _0x2c7ac4.byteLength;
            _0x4b043e++;
          }
        }
        if (_0x4b043e && _0x4b043e == _0x334c2e.buckets.length) {
          _0x4b043e--;
          _0x334c2e.buckets[_0x4b043e].offset = 0;
          _0x334c2e.buckets[_0x4b043e].roffset = 0;
        }
        _0x334c2e.buckets.splice(0, _0x4b043e);
        return _0x47e34e;
      },
      write: function (_0x1e806c, _0x49fe9, _0x44d767, _0x42cd1d, _0x5553f0) {
        var _0x1813c1 = _0x1e806c.node.pipe;
        _0x2c6ead(_0x49fe9 instanceof ArrayBuffer || ArrayBuffer.isView(_0x49fe9));
        var _0x4e8d7d = _0x49fe9.subarray(_0x44d767, _0x44d767 + _0x42cd1d);
        var _0x43e8aa = _0x4e8d7d.byteLength;
        if (_0x43e8aa <= 0) {
          return 0;
        }
        var _0x7e58bb = null;
        if (_0x1813c1.buckets.length == 0) {
          _0x7e58bb = {
            buffer: new Uint8Array(_0x4b2abc.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0x1813c1.buckets.push(_0x7e58bb);
        } else {
          _0x7e58bb = _0x1813c1.buckets[_0x1813c1.buckets.length - 1];
        }
        _0x2c6ead(_0x7e58bb.offset <= _0x4b2abc.BUCKET_BUFFER_SIZE);
        var _0x291d83 = _0x4b2abc.BUCKET_BUFFER_SIZE - _0x7e58bb.offset;
        if (_0x291d83 >= _0x43e8aa) {
          _0x7e58bb.buffer.set(_0x4e8d7d, _0x7e58bb.offset);
          _0x7e58bb.offset += _0x43e8aa;
          return _0x43e8aa;
        } else if (_0x291d83 > 0) {
          _0x7e58bb.buffer.set(_0x4e8d7d.subarray(0, _0x291d83), _0x7e58bb.offset);
          _0x7e58bb.offset += _0x291d83;
          _0x4e8d7d = _0x4e8d7d.subarray(_0x291d83, _0x4e8d7d.byteLength);
        }
        var _0x6ab3d7 = _0x4e8d7d.byteLength / _0x4b2abc.BUCKET_BUFFER_SIZE | 0;
        var _0x5f52fa = _0x4e8d7d.byteLength % _0x4b2abc.BUCKET_BUFFER_SIZE;
        for (var _0x486641 = 0; _0x486641 < _0x6ab3d7; _0x486641++) {
          var _0x45ee58 = {
            buffer: new Uint8Array(_0x4b2abc.BUCKET_BUFFER_SIZE),
            offset: _0x4b2abc.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0x1813c1.buckets.push(_0x45ee58);
          _0x45ee58.buffer.set(_0x4e8d7d.subarray(0, _0x4b2abc.BUCKET_BUFFER_SIZE));
          _0x4e8d7d = _0x4e8d7d.subarray(_0x4b2abc.BUCKET_BUFFER_SIZE, _0x4e8d7d.byteLength);
        }
        if (_0x5f52fa > 0) {
          var _0x45ee58 = {
            buffer: new Uint8Array(_0x4b2abc.BUCKET_BUFFER_SIZE),
            offset: _0x4e8d7d.byteLength,
            roffset: 0
          };
          _0x1813c1.buckets.push(_0x45ee58);
          _0x45ee58.buffer.set(_0x4e8d7d);
        }
        return _0x43e8aa;
      },
      close: function (_0x5e57e3) {
        var _0x3972a1 = _0x5e57e3.node.pipe;
        _0x3972a1.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x4b2abc.nextname.current) {
        _0x4b2abc.nextname.current = 0;
      }
      return "pipe[" + _0x4b2abc.nextname.current++ + "]";
    }
  };
  function _0x306a00(_0x2446d8) {
    try {
      if (_0x2446d8 == 0) {
        throw new _0x31cd57.ErrnoError(21);
      }
      var _0x3361bd = _0x4b2abc.createPipe();
      _0x2beff6[_0x2446d8 >> 2] = _0x3361bd.readable_fd;
      _0x2beff6[_0x2446d8 + 4 >> 2] = _0x3361bd.writable_fd;
      return 0;
    } catch (_0x129d45) {
      if (typeof _0x31cd57 === "undefined" || !(_0x129d45 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x129d45);
      }
      return -_0x129d45.errno;
    }
  }
  function _0xe22a6f(_0xf730d7, _0x39d996, _0x2fd41d) {
    try {
      var _0x28b2d3 = 0;
      for (var _0x22e810 = 0; _0x22e810 < _0x39d996; _0x22e810++) {
        var _0x52818a = _0xf730d7 + _0x22e810 * 8;
        var _0x2bd0c0 = _0x2beff6[_0x52818a >> 2];
        var _0x38cc79 = _0x2a9dc6[_0x52818a + 4 >> 1];
        var _0x18ea3e = 32;
        var _0x52e541 = _0x31cd57.getStream(_0x2bd0c0);
        if (_0x52e541) {
          _0x18ea3e = _0x4283c9.DEFAULT_POLLMASK;
          if (_0x52e541.stream_ops.poll) {
            _0x18ea3e = _0x52e541.stream_ops.poll(_0x52e541);
          }
        }
        _0x18ea3e &= _0x38cc79 | 8 | 16;
        if (_0x18ea3e) {
          _0x28b2d3++;
        }
        _0x2a9dc6[_0x52818a + 6 >> 1] = _0x18ea3e;
      }
      return _0x28b2d3;
    } catch (_0xf320b7) {
      if (typeof _0x31cd57 === "undefined" || !(_0xf320b7 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0xf320b7);
      }
      return -_0xf320b7.errno;
    }
  }
  function _0x5024cb(_0x2d47c9, _0x31b70f, _0xe9d0a9) {
    try {
      _0x2d47c9 = _0x4283c9.getStr(_0x2d47c9);
      return _0x4283c9.doReadlink(_0x2d47c9, _0x31b70f, _0xe9d0a9);
    } catch (_0x470029) {
      if (typeof _0x31cd57 === "undefined" || !(_0x470029 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x470029);
      }
      return -_0x470029.errno;
    }
  }
  function _0x4410be(_0x3e16c8, _0x5a1203, _0x537af2, _0x3bad9e, _0xe8a5c3, _0x33cdc7) {
    try {
      var _0x22c7fe = _0x234299(_0x3e16c8);
      var _0x51fc54 = _0x22c7fe.sock_ops.recvmsg(_0x22c7fe, _0x537af2);
      if (!_0x51fc54) {
        return 0;
      }
      if (_0xe8a5c3) {
        var _0x5eff20 = _0x3f38b4(_0xe8a5c3, _0x22c7fe.family, _0xde0157.lookup_name(_0x51fc54.addr), _0x51fc54.port, _0x33cdc7);
      }
      _0x298c61.set(_0x51fc54.buffer, _0x5a1203);
      return _0x51fc54.buffer.byteLength;
    } catch (_0x34594a) {
      if (typeof _0x31cd57 === "undefined" || !(_0x34594a instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x34594a);
      }
      return -_0x34594a.errno;
    }
  }
  function _0x3b7109(_0x182439, _0x41721, _0x92cd59) {
    try {
      var _0x1cf6a6 = _0x234299(_0x182439);
      var _0x4b7b40 = _0x2beff6[_0x41721 + 8 >> 2];
      var _0x1830e2 = _0x2beff6[_0x41721 + 12 >> 2];
      var _0x2726e4 = 0;
      for (var _0x52841c = 0; _0x52841c < _0x1830e2; _0x52841c++) {
        _0x2726e4 += _0x2beff6[_0x4b7b40 + (_0x52841c * 8 + 4) >> 2];
      }
      var _0x1f17f4 = _0x1cf6a6.sock_ops.recvmsg(_0x1cf6a6, _0x2726e4);
      if (!_0x1f17f4) {
        return 0;
      }
      var _0x3c0402 = _0x2beff6[_0x41721 >> 2];
      if (_0x3c0402) {
        var _0x49c657 = _0x3f38b4(_0x3c0402, _0x1cf6a6.family, _0xde0157.lookup_name(_0x1f17f4.addr), _0x1f17f4.port);
      }
      var _0x2daecc = 0;
      var _0xc720a1 = _0x1f17f4.buffer.byteLength;
      for (var _0x52841c = 0; _0xc720a1 > 0 && _0x52841c < _0x1830e2; _0x52841c++) {
        var _0x554991 = _0x2beff6[_0x4b7b40 + (_0x52841c * 8 + 0) >> 2];
        var _0xf97f3d = _0x2beff6[_0x4b7b40 + (_0x52841c * 8 + 4) >> 2];
        if (!_0xf97f3d) {
          continue;
        }
        var _0x5a3c2b = Math.min(_0xf97f3d, _0xc720a1);
        var _0x49e4e7 = _0x1f17f4.buffer.subarray(_0x2daecc, _0x2daecc + _0x5a3c2b);
        _0x298c61.set(_0x49e4e7, _0x554991 + _0x2daecc);
        _0x2daecc += _0x5a3c2b;
        _0xc720a1 -= _0x5a3c2b;
      }
      return _0x2daecc;
    } catch (_0x285b52) {
      if (typeof _0x31cd57 === "undefined" || !(_0x285b52 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x285b52);
      }
      return -_0x285b52.errno;
    }
  }
  function _0x4a3ae(_0xb4bb27, _0x4e795e) {
    try {
      _0xb4bb27 = _0x4283c9.getStr(_0xb4bb27);
      _0x4e795e = _0x4283c9.getStr(_0x4e795e);
      _0x31cd57.rename(_0xb4bb27, _0x4e795e);
      return 0;
    } catch (_0x39267d) {
      if (typeof _0x31cd57 === "undefined" || !(_0x39267d instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x39267d);
      }
      return -_0x39267d.errno;
    }
  }
  function _0x1c4c1b(_0x3d6048) {
    try {
      _0x3d6048 = _0x4283c9.getStr(_0x3d6048);
      _0x31cd57.rmdir(_0x3d6048);
      return 0;
    } catch (_0xf5880a) {
      if (typeof _0x31cd57 === "undefined" || !(_0xf5880a instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0xf5880a);
      }
      return -_0xf5880a.errno;
    }
  }
  function _0x18d0f1(_0x45ee39, _0x314b46, _0x33eb0c) {
    try {
      var _0x30c1bf = _0x234299(_0x45ee39);
      var _0x1fc845 = _0x2beff6[_0x314b46 + 8 >> 2];
      var _0x3e9dea = _0x2beff6[_0x314b46 + 12 >> 2];
      var _0x470047;
      var _0x3c53dc;
      var _0x3f7c2e = _0x2beff6[_0x314b46 >> 2];
      var _0x59bbf2 = _0x2beff6[_0x314b46 + 4 >> 2];
      if (_0x3f7c2e) {
        var _0x4b46c8 = _0x2a19c5(_0x3f7c2e, _0x59bbf2);
        if (_0x4b46c8.errno) {
          return -_0x4b46c8.errno;
        }
        _0x3c53dc = _0x4b46c8.port;
        _0x470047 = _0xde0157.lookup_addr(_0x4b46c8.addr) || _0x4b46c8.addr;
      }
      var _0x234f12 = 0;
      for (var _0x480974 = 0; _0x480974 < _0x3e9dea; _0x480974++) {
        _0x234f12 += _0x2beff6[_0x1fc845 + (_0x480974 * 8 + 4) >> 2];
      }
      var _0x156b73 = new Uint8Array(_0x234f12);
      var _0x1cdb78 = 0;
      for (var _0x480974 = 0; _0x480974 < _0x3e9dea; _0x480974++) {
        var _0x3e0ba0 = _0x2beff6[_0x1fc845 + (_0x480974 * 8 + 0) >> 2];
        var _0x4fa969 = _0x2beff6[_0x1fc845 + (_0x480974 * 8 + 4) >> 2];
        for (var _0x1bf4c3 = 0; _0x1bf4c3 < _0x4fa969; _0x1bf4c3++) {
          _0x156b73[_0x1cdb78++] = _0x381c0f[_0x3e0ba0 + _0x1bf4c3 >> 0];
        }
      }
      return _0x30c1bf.sock_ops.sendmsg(_0x30c1bf, _0x156b73, 0, _0x234f12, _0x470047, _0x3c53dc);
    } catch (_0x1ca05c) {
      if (typeof _0x31cd57 === "undefined" || !(_0x1ca05c instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x1ca05c);
      }
      return -_0x1ca05c.errno;
    }
  }
  function _0x279141(_0x38bd12, _0x14c7c7, _0x44c927, _0x194616, _0x208b7f, _0x79f999) {
    try {
      var _0x2ad65b = _0x234299(_0x38bd12);
      var _0x42df48 = _0x14c608(_0x208b7f, _0x79f999, true);
      if (!_0x42df48) {
        return _0x31cd57.write(_0x2ad65b.stream, _0x381c0f, _0x14c7c7, _0x44c927);
      } else {
        return _0x2ad65b.sock_ops.sendmsg(_0x2ad65b, _0x381c0f, _0x14c7c7, _0x44c927, _0x42df48.addr, _0x42df48.port);
      }
    } catch (_0x2ca3b6) {
      if (typeof _0x31cd57 === "undefined" || !(_0x2ca3b6 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x2ca3b6);
      }
      return -_0x2ca3b6.errno;
    }
  }
  function _0x22c770(_0x567344) {
    try {
      return -50;
    } catch (_0x5c2567) {
      if (typeof _0x31cd57 === "undefined" || !(_0x5c2567 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x5c2567);
      }
      return -_0x5c2567.errno;
    }
  }
  function _0x1ca894(_0x20f2e5, _0x152377) {
    try {
      _0x234299(_0x20f2e5);
      return -52;
    } catch (_0x3b422a) {
      if (typeof _0x31cd57 === "undefined" || !(_0x3b422a instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x3b422a);
      }
      return -_0x3b422a.errno;
    }
  }
  function _0x1db093(_0x390a22, _0xd9e824, _0x4c9e28) {
    try {
      var _0x2f1a86 = _0x431c92.createSocket(_0x390a22, _0xd9e824, _0x4c9e28);
      return _0x2f1a86.stream.fd;
    } catch (_0x2bc090) {
      if (typeof _0x31cd57 === "undefined" || !(_0x2bc090 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x2bc090);
      }
      return -_0x2bc090.errno;
    }
  }
  function _0x52c62f(_0x41fb62, _0x39e554) {
    try {
      _0x41fb62 = _0x4283c9.getStr(_0x41fb62);
      return _0x4283c9.doStat(_0x31cd57.stat, _0x41fb62, _0x39e554);
    } catch (_0x1a0312) {
      if (typeof _0x31cd57 === "undefined" || !(_0x1a0312 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x1a0312);
      }
      return -_0x1a0312.errno;
    }
  }
  function _0x98e490(_0x489243, _0x37752a, _0x17edd4) {
    try {
      _0x489243 = _0x4283c9.getStr(_0x489243);
      _0x2beff6[_0x17edd4 + 4 >> 2] = 4096;
      _0x2beff6[_0x17edd4 + 40 >> 2] = 4096;
      _0x2beff6[_0x17edd4 + 8 >> 2] = 1000000;
      _0x2beff6[_0x17edd4 + 12 >> 2] = 500000;
      _0x2beff6[_0x17edd4 + 16 >> 2] = 500000;
      _0x2beff6[_0x17edd4 + 20 >> 2] = _0x31cd57.nextInode;
      _0x2beff6[_0x17edd4 + 24 >> 2] = 1000000;
      _0x2beff6[_0x17edd4 + 28 >> 2] = 42;
      _0x2beff6[_0x17edd4 + 44 >> 2] = 2;
      _0x2beff6[_0x17edd4 + 36 >> 2] = 255;
      return 0;
    } catch (_0x66403c) {
      if (typeof _0x31cd57 === "undefined" || !(_0x66403c instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x66403c);
      }
      return -_0x66403c.errno;
    }
  }
  function _0x493280(_0x3026b3, _0x5943fc, _0x5aad50, _0x11afea) {
    try {
      _0x3026b3 = _0x4283c9.getStr(_0x3026b3);
      var _0x361ae6 = _0x4283c9.get64(_0x5aad50, _0x11afea);
      _0x31cd57.truncate(_0x3026b3, _0x361ae6);
      return 0;
    } catch (_0x48a971) {
      if (typeof _0x31cd57 === "undefined" || !(_0x48a971 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x48a971);
      }
      return -_0x48a971.errno;
    }
  }
  function _0x206322(_0x1e92b4) {
    try {
      if (!_0x1e92b4) {
        return -21;
      }
      var _0x457603 = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      function _0x12a2f8(_0x30f23b, _0x6f4933) {
        var _0x41395b = _0x457603[_0x30f23b];
        _0x5d94a1(_0x6f4933, _0x1e92b4 + _0x41395b);
      }
      _0x12a2f8("sysname", "Emscripten");
      _0x12a2f8("nodename", "emscripten");
      _0x12a2f8("release", "1.0");
      _0x12a2f8("version", "#1");
      _0x12a2f8("machine", "wasm32");
      return 0;
    } catch (_0x8d6f9c) {
      if (typeof _0x31cd57 === "undefined" || !(_0x8d6f9c instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x8d6f9c);
      }
      return -_0x8d6f9c.errno;
    }
  }
  function _0x4db903(_0x282ab8) {
    try {
      _0x282ab8 = _0x4283c9.getStr(_0x282ab8);
      _0x31cd57.unlink(_0x282ab8);
      return 0;
    } catch (_0x386deb) {
      if (typeof _0x31cd57 === "undefined" || !(_0x386deb instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x386deb);
      }
      return -_0x386deb.errno;
    }
  }
  function _0x4f25bd() {
    _0x25a973();
  }
  function _0x3af308() {
    if (_0x3af308.start === undefined) {
      _0x3af308.start = Date.now();
    }
    return (Date.now() - _0x3af308.start) * 1000 | 0;
  }
  function _0x18189c() {
    if (_0x3315ff) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0x1daba9 = true;
  function _0x1539f6(_0x566a18, _0x4d7e87) {
    var _0x359859;
    if (_0x566a18 === 0) {
      _0x359859 = 1000000;
    } else if (_0x566a18 === 1 && _0x1daba9) {
      _0x359859 = _0x18189c();
    } else {
      _0x62bad8(28);
      return -1;
    }
    _0x2beff6[_0x4d7e87 >> 2] = _0x359859 / 1000000000 | 0;
    _0x2beff6[_0x4d7e87 + 4 >> 2] = _0x359859;
    return 0;
  }
  var _0x481fbe;
  if (_0x3315ff) {
    _0x481fbe = function () {
      var _0x87eee7 = process.hrtime();
      return _0x87eee7[0] * 1000 + _0x87eee7[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0x481fbe = dateNow;
  } else {
    _0x481fbe = function () {
      return performance.now();
    };
  }
  function _0x35865d(_0x1a55ad, _0x3a36bc) {
    var _0x4ee3be;
    if (_0x1a55ad === 0) {
      _0x4ee3be = Date.now();
    } else if ((_0x1a55ad === 1 || _0x1a55ad === 4) && _0x1daba9) {
      _0x4ee3be = _0x481fbe();
    } else {
      _0x62bad8(28);
      return -1;
    }
    _0x2beff6[_0x3a36bc >> 2] = _0x4ee3be / 1000 | 0;
    _0x2beff6[_0x3a36bc + 4 >> 2] = _0x4ee3be % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x459cb1(_0x4c95e1, _0x31bd14) {
    return _0x4c95e1 - _0x31bd14;
  }
  function _0x49294b(_0x5f5296) {}
  function _0x2e15d8() {
    return 0;
  }
  function _0x63bed6(_0x39446a, _0x32be2d) {}
  function _0x6b070b(_0x56fc7a, _0x40e99b) {
    return 0;
  }
  var _0x128aa6 = [];
  function _0x2c8eb7(_0x2d0178, _0x530595) {
    _0x128aa6.length = 0;
    var _0xfb461;
    _0x530595 >>= 2;
    while (_0xfb461 = _0x298c61[_0x2d0178++]) {
      var _0x5a4213 = _0xfb461 < 105;
      if (_0x5a4213 && _0x530595 & 1) {
        _0x530595++;
      }
      _0x128aa6.push(_0x5a4213 ? _0xfbcc55[_0x530595++ >> 1] : _0x2beff6[_0x530595]);
      ++_0x530595;
    }
    return _0x128aa6;
  }
  function _0x3d0bac(_0x583e47, _0x2e63db, _0x2a00fe, _0x401fc0) {
    var _0x467ea5 = _0x2c8eb7(_0x2e63db, _0x2a00fe);
    return _0xac8e85[_0x583e47].apply(null, _0x467ea5);
  }
  function _0x553f9d(_0x2f030b, _0x162a81, _0x3ea917) {
    return _0x3d0bac(_0x2f030b, _0x162a81, _0x3ea917, 1);
  }
  function _0x2e202a(_0x5a11df, _0x2592a2) {
    _0xaeecb0.mainLoop.timingMode = _0x5a11df;
    _0xaeecb0.mainLoop.timingValue = _0x2592a2;
    if (!_0xaeecb0.mainLoop.func) {
      return 1;
    }
    if (!_0xaeecb0.mainLoop.running) {
      _0xaeecb0.mainLoop.running = true;
    }
    if (_0x5a11df == 0) {
      _0xaeecb0.mainLoop.scheduler = function _0x20fa63() {
        var _0x1825f4 = Math.max(0, _0xaeecb0.mainLoop.tickStartTime + _0x2592a2 - _0x481fbe()) | 0;
        setTimeout(_0xaeecb0.mainLoop.runner, _0x1825f4);
      };
      _0xaeecb0.mainLoop.method = "timeout";
    } else if (_0x5a11df == 1) {
      _0xaeecb0.mainLoop.scheduler = function _0x498d09() {
        _0xaeecb0.requestAnimationFrame(_0xaeecb0.mainLoop.runner);
      };
      _0xaeecb0.mainLoop.method = "rAF";
    } else if (_0x5a11df == 2) {
      if (typeof setImmediate === "undefined") {
        var _0x41db5b = [];
        var _0x550ae5 = "setimmediate";
        function _0x15db52(_0x59a3e9) {
          if (_0x59a3e9.data === _0x550ae5 || _0x59a3e9.data.target === _0x550ae5) {
            _0x59a3e9.stopPropagation();
            _0x41db5b.shift()();
          }
        }
        addEventListener("message", _0x15db52, true);
        setImmediate = function _0x5b0c19(_0x2cadca) {
          _0x41db5b.push(_0x2cadca);
          if (_0x6c617e) {
            if (_0x4c150b.setImmediates === undefined) {
              _0x4c150b.setImmediates = [];
            }
            _0x4c150b.setImmediates.push(_0x2cadca);
            postMessage({
              target: _0x550ae5
            });
          } else {
            postMessage(_0x550ae5, "*");
          }
        };
      }
      _0xaeecb0.mainLoop.scheduler = function _0x40a1b8() {
        setImmediate(_0xaeecb0.mainLoop.runner);
      };
      _0xaeecb0.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0x523f6e(_0x577657) {
    _0x2e7a2c(_0x577657);
  }
  function _0x37d4eb() {
    if (!_0x410db3()) {
      try {
        _0x523f6e(_0x104575);
      } catch (_0x5500bc) {
        if (_0x5500bc instanceof _0x4240aa) {
          return;
        }
        throw _0x5500bc;
      }
    }
  }
  function _0x2c9aae(_0x3ec85e, _0x1ef4ca, _0x4f8357, _0x65f93c, _0x3e3715) {
    _0x2c6ead(!_0xaeecb0.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0xaeecb0.mainLoop.func = _0x3ec85e;
    _0xaeecb0.mainLoop.arg = _0x65f93c;
    var _0x592b67 = _0xaeecb0.mainLoop.currentlyRunningMainloop;
    function _0xbf6758() {
      if (_0x592b67 < _0xaeecb0.mainLoop.currentlyRunningMainloop) {
        _0x37d4eb();
        return false;
      }
      return true;
    }
    _0xaeecb0.mainLoop.running = false;
    _0xaeecb0.mainLoop.runner = function _0x5c65f4() {
      if (_0x40dc51) {
        return;
      }
      if (_0xaeecb0.mainLoop.queue.length > 0) {
        var _0x48657e = Date.now();
        var _0x51b994 = _0xaeecb0.mainLoop.queue.shift();
        _0x51b994.func(_0x51b994.arg);
        if (_0xaeecb0.mainLoop.remainingBlockers) {
          var _0x1308af = _0xaeecb0.mainLoop.remainingBlockers;
          var _0x2bb14a = _0x1308af % 1 == 0 ? _0x1308af - 1 : Math.floor(_0x1308af);
          if (_0x51b994.counted) {
            _0xaeecb0.mainLoop.remainingBlockers = _0x2bb14a;
          } else {
            _0x2bb14a = _0x2bb14a + 0.5;
            _0xaeecb0.mainLoop.remainingBlockers = (_0x1308af * 8 + _0x2bb14a) / 9;
          }
        }
        console.log("main loop blocker \"" + _0x51b994.name + "\" took " + (Date.now() - _0x48657e) + " ms");
        _0xaeecb0.mainLoop.updateStatus();
        if (!_0xbf6758()) {
          return;
        }
        setTimeout(_0xaeecb0.mainLoop.runner, 0);
        return;
      }
      if (!_0xbf6758()) {
        return;
      }
      _0xaeecb0.mainLoop.currentFrameNumber = _0xaeecb0.mainLoop.currentFrameNumber + 1 | 0;
      if (_0xaeecb0.mainLoop.timingMode == 1 && _0xaeecb0.mainLoop.timingValue > 1 && _0xaeecb0.mainLoop.currentFrameNumber % _0xaeecb0.mainLoop.timingValue != 0) {
        _0xaeecb0.mainLoop.scheduler();
        return;
      } else if (_0xaeecb0.mainLoop.timingMode == 0) {
        _0xaeecb0.mainLoop.tickStartTime = _0x481fbe();
      }
      _0x411a6a.newRenderingFrameStarted();
      _0xaeecb0.mainLoop.runIter(_0x3ec85e);
      if (!_0xbf6758()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0xaeecb0.mainLoop.scheduler();
    };
    if (!_0x3e3715) {
      if (_0x1ef4ca && _0x1ef4ca > 0) {
        _0x2e202a(0, 1000 / _0x1ef4ca);
      } else {
        _0x2e202a(1, 1);
      }
      _0xaeecb0.mainLoop.scheduler();
    }
    if (_0x4f8357) {
      throw "unwind";
    }
  }
  function _0x4c99f0(_0x5b237a, _0x40ebb7) {
    if (_0x40dc51) {
      return;
    }
    if (_0x40ebb7) {
      _0x5b237a();
      return;
    }
    try {
      _0x5b237a();
    } catch (_0x109f2b) {
      if (_0x109f2b instanceof _0x4240aa) {
        return;
      } else if (_0x109f2b !== "unwind") {
        if (_0x109f2b && typeof _0x109f2b === "object" && _0x109f2b.stack) {
          _0x5761f3("exception thrown: " + [_0x109f2b, _0x109f2b.stack]);
        }
        throw _0x109f2b;
      }
    }
  }
  var _0xaeecb0 = {
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
        _0xaeecb0.mainLoop.scheduler = null;
        _0xaeecb0.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0xaeecb0.mainLoop.currentlyRunningMainloop++;
        var _0x4c9c8c = _0xaeecb0.mainLoop.timingMode;
        var _0x2f3ca3 = _0xaeecb0.mainLoop.timingValue;
        var _0x8fc403 = _0xaeecb0.mainLoop.func;
        _0xaeecb0.mainLoop.func = null;
        _0x2c9aae(_0x8fc403, 0, false, _0xaeecb0.mainLoop.arg, true);
        _0x2e202a(_0x4c9c8c, _0x2f3ca3);
        _0xaeecb0.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0x4c150b.setStatus) {
          var _0x478451 = _0x4c150b.statusMessage || "Please wait...";
          var _0x18a9fc = _0xaeecb0.mainLoop.remainingBlockers;
          var _0x17513f = _0xaeecb0.mainLoop.expectedBlockers;
          if (_0x18a9fc) {
            if (_0x18a9fc < _0x17513f) {
              _0x4c150b.setStatus(_0x478451 + " (" + (_0x17513f - _0x18a9fc) + "/" + _0x17513f + ")");
            } else {
              _0x4c150b.setStatus(_0x478451);
            }
          } else {
            _0x4c150b.setStatus("");
          }
        }
      },
      runIter: function (_0x5252e4) {
        if (_0x40dc51) {
          return;
        }
        if (_0x4c150b.preMainLoop) {
          var _0x1a16e8 = _0x4c150b.preMainLoop();
          if (_0x1a16e8 === false) {
            return;
          }
        }
        _0x4c99f0(_0x5252e4);
        if (_0x4c150b.postMainLoop) {
          _0x4c150b.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0x4c150b.preloadPlugins) {
        _0x4c150b.preloadPlugins = [];
      }
      if (_0xaeecb0.initted) {
        return;
      }
      _0xaeecb0.initted = true;
      try {
        new Blob();
        _0xaeecb0.hasBlobConstructor = true;
      } catch (_0x10be88) {
        _0xaeecb0.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0xaeecb0.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0xaeecb0.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0xaeecb0.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0x4c150b.noImageDecoding && typeof _0xaeecb0.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0x4c150b.noImageDecoding = true;
      }
      var _0x447356 = {};
      _0x447356.canHandle = function _0x4ed3ff(_0x1be8de) {
        return !_0x4c150b.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x1be8de);
      };
      _0x447356.handle = function _0x26fc8e(_0x52427b, _0x1ed0aa, _0x4e9eb6, _0xcce549) {
        var _0x238af5 = null;
        if (_0xaeecb0.hasBlobConstructor) {
          try {
            _0x238af5 = new Blob([_0x52427b], {
              type: _0xaeecb0.getMimetype(_0x1ed0aa)
            });
            if (_0x238af5.size !== _0x52427b.length) {
              _0x238af5 = new Blob([new Uint8Array(_0x52427b).buffer], {
                type: _0xaeecb0.getMimetype(_0x1ed0aa)
              });
            }
          } catch (_0x541cf0) {
            _0x1e49c0("Blob constructor present but fails: " + _0x541cf0 + "; falling back to blob builder");
          }
        }
        if (!_0x238af5) {
          var _0xdd880c = new _0xaeecb0.BlobBuilder();
          _0xdd880c.append(new Uint8Array(_0x52427b).buffer);
          _0x238af5 = _0xdd880c.getBlob();
        }
        var _0x585236 = _0xaeecb0.URLObject.createObjectURL(_0x238af5);
        var _0x3fda00 = new Image();
        _0x3fda00.onload = function _0x257deb() {
          _0x2c6ead(_0x3fda00.complete, "Image " + _0x1ed0aa + " could not be decoded");
          var _0x191969 = document.createElement("canvas");
          _0x191969.width = _0x3fda00.width;
          _0x191969.height = _0x3fda00.height;
          var _0x1032eb = _0x191969.getContext("2d");
          _0x1032eb.drawImage(_0x3fda00, 0, 0);
          _0x4c150b.preloadedImages[_0x1ed0aa] = _0x191969;
          _0xaeecb0.URLObject.revokeObjectURL(_0x585236);
          if (_0x4e9eb6) {
            _0x4e9eb6(_0x52427b);
          }
        };
        _0x3fda00.onerror = function _0x1e1375(_0x562058) {
          console.log("Image " + _0x585236 + " could not be decoded");
          if (_0xcce549) {
            _0xcce549();
          }
        };
        _0x3fda00.src = _0x585236;
      };
      _0x4c150b.preloadPlugins.push(_0x447356);
      var _0x40cc5e = {};
      _0x40cc5e.canHandle = function _0x51af3f(_0x5a31c6) {
        return !_0x4c150b.noAudioDecoding && _0x5a31c6.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0x40cc5e.handle = function _0x58df07(_0x575f74, _0x473420, _0x283116, _0x57eb09) {
        var _0x329210 = false;
        function _0x32141d(_0x5ea619) {
          if (_0x329210) {
            return;
          }
          _0x329210 = true;
          _0x4c150b.preloadedAudios[_0x473420] = _0x5ea619;
          if (_0x283116) {
            _0x283116(_0x575f74);
          }
        }
        function _0x39b442() {
          if (_0x329210) {
            return;
          }
          _0x329210 = true;
          _0x4c150b.preloadedAudios[_0x473420] = new Audio();
          if (_0x57eb09) {
            _0x57eb09();
          }
        }
        if (_0xaeecb0.hasBlobConstructor) {
          try {
            var _0x394fb1 = new Blob([_0x575f74], {
              type: _0xaeecb0.getMimetype(_0x473420)
            });
          } catch (_0x16660e) {
            return _0x39b442();
          }
          var _0x2027f0 = _0xaeecb0.URLObject.createObjectURL(_0x394fb1);
          var _0x3da3fc = new Audio();
          _0x3da3fc.addEventListener("canplaythrough", function () {
            _0x32141d(_0x3da3fc);
          }, false);
          _0x3da3fc.onerror = function _0x514be6(_0x130979) {
            if (_0x329210) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0x473420 + ", trying slower base64 approach");
            function _0x5804a7(_0x40c9c8) {
              var _0x488580 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x32d502 = "=";
              var _0xe1f46c = "";
              var _0x43065a = 0;
              var _0x14f575 = 0;
              for (var _0x4fe756 = 0; _0x4fe756 < _0x40c9c8.length; _0x4fe756++) {
                _0x43065a = _0x43065a << 8 | _0x40c9c8[_0x4fe756];
                _0x14f575 += 8;
                while (_0x14f575 >= 6) {
                  var _0x948aec = _0x43065a >> _0x14f575 - 6 & 63;
                  _0x14f575 -= 6;
                  _0xe1f46c += _0x488580[_0x948aec];
                }
              }
              if (_0x14f575 == 2) {
                _0xe1f46c += _0x488580[(_0x43065a & 3) << 4];
                _0xe1f46c += _0x32d502 + _0x32d502;
              } else if (_0x14f575 == 4) {
                _0xe1f46c += _0x488580[(_0x43065a & 15) << 2];
                _0xe1f46c += _0x32d502;
              }
              return _0xe1f46c;
            }
            _0x3da3fc.src = "data:audio/x-" + _0x473420.substr(-3) + ";base64," + _0x5804a7(_0x575f74);
            _0x32141d(_0x3da3fc);
          };
          _0x3da3fc.src = _0x2027f0;
          _0xaeecb0.safeSetTimeout(function () {
            _0x32141d(_0x3da3fc);
          }, 10000);
        } else {
          return _0x39b442();
        }
      };
      _0x4c150b.preloadPlugins.push(_0x40cc5e);
      function _0x28950a() {
        _0xaeecb0.pointerLock = document.pointerLockElement === _0x4c150b.canvas || document.mozPointerLockElement === _0x4c150b.canvas || document.webkitPointerLockElement === _0x4c150b.canvas || document.msPointerLockElement === _0x4c150b.canvas;
      }
      var _0x38efa8 = _0x4c150b.canvas;
      if (_0x38efa8) {
        _0x38efa8.requestPointerLock = _0x38efa8.requestPointerLock || _0x38efa8.mozRequestPointerLock || _0x38efa8.webkitRequestPointerLock || _0x38efa8.msRequestPointerLock || function () {};
        _0x38efa8.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x38efa8.exitPointerLock = _0x38efa8.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x28950a, false);
        document.addEventListener("mozpointerlockchange", _0x28950a, false);
        document.addEventListener("webkitpointerlockchange", _0x28950a, false);
        document.addEventListener("mspointerlockchange", _0x28950a, false);
        if (_0x4c150b.elementPointerLock) {
          _0x38efa8.addEventListener("click", function (_0x23a088) {
            if (!_0xaeecb0.pointerLock && _0x4c150b.canvas.requestPointerLock) {
              _0x4c150b.canvas.requestPointerLock();
              _0x23a088.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x32fd9f, _0x45239f, _0x3b2da0, _0x1e26ea) {
      if (_0x45239f && _0x4c150b.ctx && _0x32fd9f == _0x4c150b.canvas) {
        return _0x4c150b.ctx;
      }
      var _0x5ebd93;
      var _0x5df4c8;
      if (_0x45239f) {
        var _0x2dc7c4 = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0x1e26ea) {
          for (var _0x2ef50b in _0x1e26ea) {
            _0x2dc7c4[_0x2ef50b] = _0x1e26ea[_0x2ef50b];
          }
        }
        if (typeof _0x411a6a !== "undefined") {
          _0x5df4c8 = _0x411a6a.createContext(_0x32fd9f, _0x2dc7c4);
          if (_0x5df4c8) {
            _0x5ebd93 = _0x411a6a.getContext(_0x5df4c8).GLctx;
          }
        }
      } else {
        _0x5ebd93 = _0x32fd9f.getContext("2d");
      }
      if (!_0x5ebd93) {
        return null;
      }
      if (_0x3b2da0) {
        if (!_0x45239f) {
          _0x2c6ead(typeof _0x5a54d9 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0x4c150b.ctx = _0x5ebd93;
        if (_0x45239f) {
          _0x411a6a.makeContextCurrent(_0x5df4c8);
        }
        _0x4c150b.useWebGL = _0x45239f;
        _0xaeecb0.moduleContextCreatedCallbacks.forEach(function (_0x13e3db) {
          _0x13e3db();
        });
        _0xaeecb0.init();
      }
      return _0x5ebd93;
    },
    destroyContext: function (_0x1d98af, _0xf8f534, _0x35e425) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0x10c0be, _0x2f34ea) {
      _0xaeecb0.lockPointer = _0x10c0be;
      _0xaeecb0.resizeCanvas = _0x2f34ea;
      if (typeof _0xaeecb0.lockPointer === "undefined") {
        _0xaeecb0.lockPointer = true;
      }
      if (typeof _0xaeecb0.resizeCanvas === "undefined") {
        _0xaeecb0.resizeCanvas = false;
      }
      var _0x50ecd0 = _0x4c150b.canvas;
      function _0x3c793f() {
        _0xaeecb0.isFullscreen = false;
        var _0x2f927c = _0x50ecd0.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x2f927c) {
          _0x50ecd0.exitFullscreen = _0xaeecb0.exitFullscreen;
          if (_0xaeecb0.lockPointer) {
            _0x50ecd0.requestPointerLock();
          }
          _0xaeecb0.isFullscreen = true;
          if (_0xaeecb0.resizeCanvas) {
            _0xaeecb0.setFullscreenCanvasSize();
          } else {
            _0xaeecb0.updateCanvasDimensions(_0x50ecd0);
          }
        } else {
          _0x2f927c.parentNode.insertBefore(_0x50ecd0, _0x2f927c);
          _0x2f927c.parentNode.removeChild(_0x2f927c);
          if (_0xaeecb0.resizeCanvas) {
            _0xaeecb0.setWindowedCanvasSize();
          } else {
            _0xaeecb0.updateCanvasDimensions(_0x50ecd0);
          }
        }
        if (_0x4c150b.onFullScreen) {
          _0x4c150b.onFullScreen(_0xaeecb0.isFullscreen);
        }
        if (_0x4c150b.onFullscreen) {
          _0x4c150b.onFullscreen(_0xaeecb0.isFullscreen);
        }
      }
      if (!_0xaeecb0.fullscreenHandlersInstalled) {
        _0xaeecb0.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x3c793f, false);
        document.addEventListener("mozfullscreenchange", _0x3c793f, false);
        document.addEventListener("webkitfullscreenchange", _0x3c793f, false);
        document.addEventListener("MSFullscreenChange", _0x3c793f, false);
      }
      var _0x4059ce = document.createElement("div");
      _0x50ecd0.parentNode.insertBefore(_0x4059ce, _0x50ecd0);
      _0x4059ce.appendChild(_0x50ecd0);
      _0x4059ce.requestFullscreen = _0x4059ce.requestFullscreen || _0x4059ce.mozRequestFullScreen || _0x4059ce.msRequestFullscreen || (_0x4059ce.webkitRequestFullscreen ? function () {
        _0x4059ce.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x4059ce.webkitRequestFullScreen ? function () {
        _0x4059ce.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x4059ce.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0xaeecb0.isFullscreen) {
        return false;
      }
      var _0x5b66ba = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0x5b66ba.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0x1cc92e) {
      var _0x3ed828 = Date.now();
      if (_0xaeecb0.nextRAF === 0) {
        _0xaeecb0.nextRAF = _0x3ed828 + 1000 / 60;
      } else {
        while (_0x3ed828 + 2 >= _0xaeecb0.nextRAF) {
          _0xaeecb0.nextRAF += 1000 / 60;
        }
      }
      var _0x2927ad = Math.max(_0xaeecb0.nextRAF - _0x3ed828, 0);
      setTimeout(_0x1cc92e, _0x2927ad);
    },
    requestAnimationFrame: function (_0x2d391c) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0x2d391c);
        return;
      }
      var _0x288d12 = _0xaeecb0.fakeRequestAnimationFrame;
      _0x288d12(_0x2d391c);
    },
    safeRequestAnimationFrame: function (_0x3c1a2f) {
      return _0xaeecb0.requestAnimationFrame(function () {
        _0x4c99f0(_0x3c1a2f);
      });
    },
    safeSetTimeout: function (_0x459971, _0x112ae0) {
      return setTimeout(function () {
        _0x4c99f0(_0x459971);
      }, _0x112ae0);
    },
    getMimetype: function (_0x47f64c) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x47f64c.substr(_0x47f64c.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0x8604b4) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0x8604b4);
    },
    getMovementX: function (_0x4255c5) {
      return _0x4255c5.movementX || _0x4255c5.mozMovementX || _0x4255c5.webkitMovementX || 0;
    },
    getMovementY: function (_0x59b395) {
      return _0x59b395.movementY || _0x59b395.mozMovementY || _0x59b395.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0x1eb609) {
      var _0x5f4142 = 0;
      switch (_0x1eb609.type) {
        case "DOMMouseScroll":
          _0x5f4142 = _0x1eb609.detail / 3;
          break;
        case "mousewheel":
          _0x5f4142 = _0x1eb609.wheelDelta / 120;
          break;
        case "wheel":
          _0x5f4142 = _0x1eb609.deltaY;
          switch (_0x1eb609.deltaMode) {
            case 0:
              _0x5f4142 /= 100;
              break;
            case 1:
              _0x5f4142 /= 3;
              break;
            case 2:
              _0x5f4142 *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x1eb609.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x1eb609.type;
      }
      return _0x5f4142;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x4d4178) {
      if (_0xaeecb0.pointerLock) {
        if (_0x4d4178.type != "mousemove" && "mozMovementX" in _0x4d4178) {
          _0xaeecb0.mouseMovementX = _0xaeecb0.mouseMovementY = 0;
        } else {
          _0xaeecb0.mouseMovementX = _0xaeecb0.getMovementX(_0x4d4178);
          _0xaeecb0.mouseMovementY = _0xaeecb0.getMovementY(_0x4d4178);
        }
        if (typeof SDL != "undefined") {
          _0xaeecb0.mouseX = SDL.mouseX + _0xaeecb0.mouseMovementX;
          _0xaeecb0.mouseY = SDL.mouseY + _0xaeecb0.mouseMovementY;
        } else {
          _0xaeecb0.mouseX += _0xaeecb0.mouseMovementX;
          _0xaeecb0.mouseY += _0xaeecb0.mouseMovementY;
        }
      } else {
        var _0x2d5434 = _0x4c150b.canvas.getBoundingClientRect();
        var _0x1c9f69 = _0x4c150b.canvas.width;
        var _0x4a082a = _0x4c150b.canvas.height;
        var _0x232944 = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0x1f642d = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x4d4178.type === "touchstart" || _0x4d4178.type === "touchend" || _0x4d4178.type === "touchmove") {
          var _0x58043b = _0x4d4178.touch;
          if (_0x58043b === undefined) {
            return;
          }
          var _0x59f73b = _0x58043b.pageX - (_0x232944 + _0x2d5434.left);
          var _0xa1e973 = _0x58043b.pageY - (_0x1f642d + _0x2d5434.top);
          _0x59f73b = _0x59f73b * (_0x1c9f69 / _0x2d5434.width);
          _0xa1e973 = _0xa1e973 * (_0x4a082a / _0x2d5434.height);
          var _0x10a456 = {
            x: _0x59f73b,
            y: _0xa1e973
          };
          if (_0x4d4178.type === "touchstart") {
            _0xaeecb0.lastTouches[_0x58043b.identifier] = _0x10a456;
            _0xaeecb0.touches[_0x58043b.identifier] = _0x10a456;
          } else if (_0x4d4178.type === "touchend" || _0x4d4178.type === "touchmove") {
            var _0x5bb766 = _0xaeecb0.touches[_0x58043b.identifier];
            if (!_0x5bb766) {
              _0x5bb766 = _0x10a456;
            }
            _0xaeecb0.lastTouches[_0x58043b.identifier] = _0x5bb766;
            _0xaeecb0.touches[_0x58043b.identifier] = _0x10a456;
          }
          return;
        }
        var _0x4912f5 = _0x4d4178.pageX - (_0x232944 + _0x2d5434.left);
        var _0x123101 = _0x4d4178.pageY - (_0x1f642d + _0x2d5434.top);
        _0x4912f5 = _0x4912f5 * (_0x1c9f69 / _0x2d5434.width);
        _0x123101 = _0x123101 * (_0x4a082a / _0x2d5434.height);
        _0xaeecb0.mouseMovementX = _0x4912f5 - _0xaeecb0.mouseX;
        _0xaeecb0.mouseMovementY = _0x123101 - _0xaeecb0.mouseY;
        _0xaeecb0.mouseX = _0x4912f5;
        _0xaeecb0.mouseY = _0x123101;
      }
    },
    asyncLoad: function (_0x5310d3, _0x52959f, _0xd0aac8, _0x18e54b) {
      var _0x5842b8 = !_0x18e54b ? _0xc7933a("al " + _0x5310d3) : "";
      _0x266c6c(_0x5310d3, function (_0x3f65f2) {
        _0x2c6ead(_0x3f65f2, "Loading data file \"" + _0x5310d3 + "\" failed (no arrayBuffer).");
        _0x52959f(new Uint8Array(_0x3f65f2));
        if (_0x5842b8) {
          _0x4e20eb(_0x5842b8);
        }
      }, function (_0x425dcd) {
        if (_0xd0aac8) {
          _0xd0aac8();
        } else {
          throw "Loading data file \"" + _0x5310d3 + "\" failed.";
        }
      });
      if (_0x5842b8) {
        _0x7a57e5(_0x5842b8);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0xc53b49 = _0x4c150b.canvas;
      _0xaeecb0.resizeListeners.forEach(function (_0x17a8c9) {
        _0x17a8c9(_0xc53b49.width, _0xc53b49.height);
      });
    },
    setCanvasSize: function (_0x647b45, _0x447d59, _0x35f668) {
      var _0x3d4271 = _0x4c150b.canvas;
      _0xaeecb0.updateCanvasDimensions(_0x3d4271, _0x647b45, _0x447d59);
      if (!_0x35f668) {
        _0xaeecb0.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x694778 = _0x36d14b[SDL.screen >> 2];
        _0x694778 = _0x694778 | 8388608;
        _0x2beff6[SDL.screen >> 2] = _0x694778;
      }
      _0xaeecb0.updateCanvasDimensions(_0x4c150b.canvas);
      _0xaeecb0.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0xcf0bff = _0x36d14b[SDL.screen >> 2];
        _0xcf0bff = _0xcf0bff & ~8388608;
        _0x2beff6[SDL.screen >> 2] = _0xcf0bff;
      }
      _0xaeecb0.updateCanvasDimensions(_0x4c150b.canvas);
      _0xaeecb0.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0x4c2f3f, _0x15cd9f, _0x39bdbc) {
      if (_0x15cd9f && _0x39bdbc) {
        _0x4c2f3f.widthNative = _0x15cd9f;
        _0x4c2f3f.heightNative = _0x39bdbc;
      } else {
        _0x15cd9f = _0x4c2f3f.widthNative;
        _0x39bdbc = _0x4c2f3f.heightNative;
      }
      var _0x240c71 = _0x15cd9f;
      var _0x12df6b = _0x39bdbc;
      if (_0x4c150b.forcedAspectRatio && _0x4c150b.forcedAspectRatio > 0) {
        if (_0x240c71 / _0x12df6b < _0x4c150b.forcedAspectRatio) {
          _0x240c71 = Math.round(_0x12df6b * _0x4c150b.forcedAspectRatio);
        } else {
          _0x12df6b = Math.round(_0x240c71 / _0x4c150b.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x4c2f3f.parentNode && typeof screen != "undefined") {
        var _0x4f4a9f = Math.min(screen.width / _0x240c71, screen.height / _0x12df6b);
        _0x240c71 = Math.round(_0x240c71 * _0x4f4a9f);
        _0x12df6b = Math.round(_0x12df6b * _0x4f4a9f);
      }
      if (_0xaeecb0.resizeCanvas) {
        if (_0x4c2f3f.width != _0x240c71) {
          _0x4c2f3f.width = _0x240c71;
        }
        if (_0x4c2f3f.height != _0x12df6b) {
          _0x4c2f3f.height = _0x12df6b;
        }
        if (typeof _0x4c2f3f.style != "undefined") {
          _0x4c2f3f.style.removeProperty("width");
          _0x4c2f3f.style.removeProperty("height");
        }
      } else {
        if (_0x4c2f3f.width != _0x15cd9f) {
          _0x4c2f3f.width = _0x15cd9f;
        }
        if (_0x4c2f3f.height != _0x39bdbc) {
          _0x4c2f3f.height = _0x39bdbc;
        }
        if (typeof _0x4c2f3f.style != "undefined") {
          if (_0x240c71 != _0x15cd9f || _0x12df6b != _0x39bdbc) {
            _0x4c2f3f.style.setProperty("width", _0x240c71 + "px", "important");
            _0x4c2f3f.style.setProperty("height", _0x12df6b + "px", "important");
          } else {
            _0x4c2f3f.style.removeProperty("width");
            _0x4c2f3f.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0x568028 = _0xaeecb0.nextWgetRequestHandle;
      _0xaeecb0.nextWgetRequestHandle++;
      return _0x568028;
    }
  };
  function _0x1c3849() {
    _0xaeecb0.mainLoop.pause();
    _0xaeecb0.mainLoop.func = null;
  }
  function _0x2b5298(_0xf86357) {
    clearInterval(_0xf86357);
  }
  var _0x315133 = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0x1a1676 = _0x315133.eventHandlers.length - 1; _0x1a1676 >= 0; --_0x1a1676) {
        _0x315133._removeHandler(_0x1a1676);
      }
      _0x315133.eventHandlers = [];
      _0x315133.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x315133.removeEventListenersRegistered) {
        _0x1578c8.push(_0x315133.removeAllEventListeners);
        _0x315133.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x2b79ef, _0x1b059d, _0x4a6989) {
      function _0x1ef198(_0x4f57dd, _0x3d69ac) {
        if (_0x4f57dd.length != _0x3d69ac.length) {
          return false;
        }
        for (var _0x12f8a9 in _0x4f57dd) {
          if (_0x4f57dd[_0x12f8a9] != _0x3d69ac[_0x12f8a9]) {
            return false;
          }
        }
        return true;
      }
      for (var _0xa1c5f6 in _0x315133.deferredCalls) {
        var _0x31ff16 = _0x315133.deferredCalls[_0xa1c5f6];
        if (_0x31ff16.targetFunction == _0x2b79ef && _0x1ef198(_0x31ff16.argsList, _0x4a6989)) {
          return;
        }
      }
      _0x315133.deferredCalls.push({
        targetFunction: _0x2b79ef,
        precedence: _0x1b059d,
        argsList: _0x4a6989
      });
      _0x315133.deferredCalls.sort(function (_0x214c0e, _0x414d2c) {
        return _0x214c0e.precedence < _0x414d2c.precedence;
      });
    },
    removeDeferredCalls: function (_0x7638bf) {
      for (var _0x1f2a82 = 0; _0x1f2a82 < _0x315133.deferredCalls.length; ++_0x1f2a82) {
        if (_0x315133.deferredCalls[_0x1f2a82].targetFunction == _0x7638bf) {
          _0x315133.deferredCalls.splice(_0x1f2a82, 1);
          --_0x1f2a82;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x315133.inEventHandler && _0x315133.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x315133.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0x26623e = 0; _0x26623e < _0x315133.deferredCalls.length; ++_0x26623e) {
        var _0x503969 = _0x315133.deferredCalls[_0x26623e];
        _0x315133.deferredCalls.splice(_0x26623e, 1);
        --_0x26623e;
        _0x503969.targetFunction.apply(null, _0x503969.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0x20a38a, _0x1003bf) {
      for (var _0x3e1568 = 0; _0x3e1568 < _0x315133.eventHandlers.length; ++_0x3e1568) {
        if (_0x315133.eventHandlers[_0x3e1568].target == _0x20a38a && (!_0x1003bf || _0x1003bf == _0x315133.eventHandlers[_0x3e1568].eventTypeString)) {
          _0x315133._removeHandler(_0x3e1568--);
        }
      }
    },
    _removeHandler: function (_0x2681d9) {
      var _0x28264f = _0x315133.eventHandlers[_0x2681d9];
      _0x28264f.target.removeEventListener(_0x28264f.eventTypeString, _0x28264f.eventListenerFunc, _0x28264f.useCapture);
      _0x315133.eventHandlers.splice(_0x2681d9, 1);
    },
    registerOrRemoveHandler: function (_0x480cf3) {
      var _0x474253 = function _0x54ca5b(_0x59f018) {
        ++_0x315133.inEventHandler;
        _0x315133.currentEventHandler = _0x480cf3;
        _0x315133.runDeferredCalls();
        _0x480cf3.handlerFunc(_0x59f018);
        _0x315133.runDeferredCalls();
        --_0x315133.inEventHandler;
      };
      if (_0x480cf3.callbackfunc) {
        _0x480cf3.eventListenerFunc = _0x474253;
        _0x480cf3.target.addEventListener(_0x480cf3.eventTypeString, _0x474253, _0x480cf3.useCapture);
        _0x315133.eventHandlers.push(_0x480cf3);
        _0x315133.registerRemoveEventListeners();
      } else {
        for (var _0x21f377 = 0; _0x21f377 < _0x315133.eventHandlers.length; ++_0x21f377) {
          if (_0x315133.eventHandlers[_0x21f377].target == _0x480cf3.target && _0x315133.eventHandlers[_0x21f377].eventTypeString == _0x480cf3.eventTypeString) {
            _0x315133._removeHandler(_0x21f377--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0x17a6ae) {
      if (!_0x17a6ae) {
        return "";
      }
      if (_0x17a6ae == window) {
        return "#window";
      }
      if (_0x17a6ae == screen) {
        return "#screen";
      }
      if (_0x17a6ae && _0x17a6ae.nodeName) {
        return _0x17a6ae.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x4a5273 = {};
  function _0x4f75f7(_0x285934) {
    if (_0x285934 > 2) {
      return _0x211f48(_0x285934);
    } else {
      return _0x285934;
    }
  }
  var _0x24eb65 = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x11a7bc(_0x44325d) {
    _0x44325d = _0x4f75f7(_0x44325d);
    var _0x16ba26 = _0x24eb65[_0x44325d] || (typeof document !== "undefined" ? document.querySelector(_0x44325d) : undefined);
    return _0x16ba26;
  }
  function _0x5a129f(_0x232f65) {
    return _0x11a7bc(_0x232f65);
  }
  function _0x534de0(_0x2ba7ef, _0x65e253, _0x5cc78f) {
    var _0x59cbe8 = _0x5a129f(_0x2ba7ef);
    if (!_0x59cbe8) {
      return -4;
    }
    _0x2beff6[_0x65e253 >> 2] = _0x59cbe8.width;
    _0x2beff6[_0x5cc78f >> 2] = _0x59cbe8.height;
  }
  function _0x2a3b2c(_0x5c0c12) {
    var _0xe59d4a = _0x50e49c();
    var _0x1f8dfd = _0x932d25(8);
    var _0x24d0ad = _0x1f8dfd + 4;
    var _0x20e731 = _0x932d25(_0x5c0c12.id.length + 1);
    _0x156f83(_0x5c0c12.id, _0x20e731, _0x5c0c12.id.length + 1);
    var _0x1472c9 = _0x534de0(_0x20e731, _0x1f8dfd, _0x24d0ad);
    var _0x34aaf2 = [_0x2beff6[_0x1f8dfd >> 2], _0x2beff6[_0x24d0ad >> 2]];
    _0x229d9f(_0xe59d4a);
    return _0x34aaf2;
  }
  function _0x4f7a2c(_0x4c49aa, _0x32e56c, _0x3f08ef) {
    var _0x397195 = _0x5a129f(_0x4c49aa);
    if (!_0x397195) {
      return -4;
    }
    _0x397195.width = _0x32e56c;
    _0x397195.height = _0x3f08ef;
    return 0;
  }
  function _0x13cefa(_0x18db5f, _0x22d6f4, _0x202307) {
    if (!_0x18db5f.controlTransferredOffscreen) {
      _0x18db5f.width = _0x22d6f4;
      _0x18db5f.height = _0x202307;
    } else {
      var _0x451f35 = _0x50e49c();
      var _0x335be2 = _0x932d25(_0x18db5f.id.length + 1);
      _0x156f83(_0x18db5f.id, _0x335be2, _0x18db5f.id.length + 1);
      _0x4f7a2c(_0x335be2, _0x22d6f4, _0x202307);
      _0x229d9f(_0x451f35);
    }
  }
  function _0x1c205b(_0x5667bf) {
    var _0x94aa39 = _0x2a3b2c(_0x5667bf);
    var _0x98a481 = _0x94aa39[0];
    var _0x130c59 = _0x94aa39[1];
    var _0x41a3dc = _0x5667bf.style.width;
    var _0x48d753 = _0x5667bf.style.height;
    var _0x4ffd07 = _0x5667bf.style.backgroundColor;
    var _0x1ce42e = document.body.style.backgroundColor;
    var _0x57ea60 = _0x5667bf.style.paddingLeft;
    var _0xdb6c86 = _0x5667bf.style.paddingRight;
    var _0x279345 = _0x5667bf.style.paddingTop;
    var _0x5165ad = _0x5667bf.style.paddingBottom;
    var _0x1b42b8 = _0x5667bf.style.marginLeft;
    var _0x4d7b7c = _0x5667bf.style.marginRight;
    var _0x1994d5 = _0x5667bf.style.marginTop;
    var _0x13a264 = _0x5667bf.style.marginBottom;
    var _0x1b8c75 = document.body.style.margin;
    var _0xec8beb = document.documentElement.style.overflow;
    var _0x14b1f0 = document.body.scroll;
    var _0x3d83ef = _0x5667bf.style.imageRendering;
    function _0x4a75d6() {
      var _0x487438 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0x487438) {
        document.removeEventListener("fullscreenchange", _0x4a75d6);
        document.removeEventListener("webkitfullscreenchange", _0x4a75d6);
        _0x13cefa(_0x5667bf, _0x98a481, _0x130c59);
        _0x5667bf.style.width = _0x41a3dc;
        _0x5667bf.style.height = _0x48d753;
        _0x5667bf.style.backgroundColor = _0x4ffd07;
        if (!_0x1ce42e) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0x1ce42e;
        _0x5667bf.style.paddingLeft = _0x57ea60;
        _0x5667bf.style.paddingRight = _0xdb6c86;
        _0x5667bf.style.paddingTop = _0x279345;
        _0x5667bf.style.paddingBottom = _0x5165ad;
        _0x5667bf.style.marginLeft = _0x1b42b8;
        _0x5667bf.style.marginRight = _0x4d7b7c;
        _0x5667bf.style.marginTop = _0x1994d5;
        _0x5667bf.style.marginBottom = _0x13a264;
        document.body.style.margin = _0x1b8c75;
        document.documentElement.style.overflow = _0xec8beb;
        document.body.scroll = _0x14b1f0;
        _0x5667bf.style.imageRendering = _0x3d83ef;
        if (_0x5667bf.GLctxObject) {
          _0x5667bf.GLctxObject.GLctx.viewport(0, 0, _0x98a481, _0x130c59);
        }
        if (_0x4a5273.canvasResizedCallback) {
          (function (_0x27d0af, _0x292b05, _0x52bc12) {
            return _0x10910b.apply(null, [_0x4a5273.canvasResizedCallback, _0x27d0af, _0x292b05, _0x52bc12]);
          })(37, 0, _0x4a5273.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0x4a75d6);
    document.addEventListener("webkitfullscreenchange", _0x4a75d6);
    return _0x4a75d6;
  }
  function _0x52e2cd(_0x59023a, _0x591c08, _0x2650c1) {
    _0x59023a.style.paddingLeft = _0x59023a.style.paddingRight = _0x2650c1 + "px";
    _0x59023a.style.paddingTop = _0x59023a.style.paddingBottom = _0x591c08 + "px";
  }
  function _0x4b5b47(_0x28c2ff) {
    if (_0x24eb65.indexOf(_0x28c2ff) < 0) {
      return _0x28c2ff.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0x366f8e(_0x5a6ca7, _0x1135c5) {
    var _0x3f162d = _0x1c205b(_0x5a6ca7);
    var _0x47650d = _0x1135c5.softFullscreen ? innerWidth : screen.width;
    var _0x5f1e1e = _0x1135c5.softFullscreen ? innerHeight : screen.height;
    var _0x11df01 = _0x4b5b47(_0x5a6ca7);
    var _0x47e5c4 = _0x11df01.width;
    var _0x419014 = _0x11df01.height;
    var _0x361a85 = _0x2a3b2c(_0x5a6ca7);
    var _0x7bfa77 = _0x361a85[0];
    var _0x4398d9 = _0x361a85[1];
    if (_0x1135c5.scaleMode == 3) {
      _0x52e2cd(_0x5a6ca7, (_0x5f1e1e - _0x419014) / 2, (_0x47650d - _0x47e5c4) / 2);
      _0x47650d = _0x47e5c4;
      _0x5f1e1e = _0x419014;
    } else if (_0x1135c5.scaleMode == 2) {
      if (_0x47650d * _0x4398d9 < _0x7bfa77 * _0x5f1e1e) {
        var _0x1e8d54 = _0x4398d9 * _0x47650d / _0x7bfa77;
        _0x52e2cd(_0x5a6ca7, (_0x5f1e1e - _0x1e8d54) / 2, 0);
        _0x5f1e1e = _0x1e8d54;
      } else {
        var _0x1b836c = _0x7bfa77 * _0x5f1e1e / _0x4398d9;
        _0x52e2cd(_0x5a6ca7, 0, (_0x47650d - _0x1b836c) / 2);
        _0x47650d = _0x1b836c;
      }
    }
    if (!_0x5a6ca7.style.backgroundColor) {
      _0x5a6ca7.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0x5a6ca7.style.width = _0x47650d + "px";
    _0x5a6ca7.style.height = _0x5f1e1e + "px";
    if (_0x1135c5.filteringMode == 1) {
      _0x5a6ca7.style.imageRendering = "optimizeSpeed";
      _0x5a6ca7.style.imageRendering = "-moz-crisp-edges";
      _0x5a6ca7.style.imageRendering = "-o-crisp-edges";
      _0x5a6ca7.style.imageRendering = "-webkit-optimize-contrast";
      _0x5a6ca7.style.imageRendering = "optimize-contrast";
      _0x5a6ca7.style.imageRendering = "crisp-edges";
      _0x5a6ca7.style.imageRendering = "pixelated";
    }
    var _0x1667a9 = _0x1135c5.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x1135c5.canvasResolutionScaleMode != 0) {
      var _0x7ad32e = _0x47650d * _0x1667a9 | 0;
      var _0xff7694 = _0x5f1e1e * _0x1667a9 | 0;
      _0x13cefa(_0x5a6ca7, _0x7ad32e, _0xff7694);
      if (_0x5a6ca7.GLctxObject) {
        _0x5a6ca7.GLctxObject.GLctx.viewport(0, 0, _0x7ad32e, _0xff7694);
      }
    }
    return _0x3f162d;
  }
  function _0x3f910b(_0x4f7640, _0x91fac5) {
    if (_0x91fac5.scaleMode != 0 || _0x91fac5.canvasResolutionScaleMode != 0) {
      _0x366f8e(_0x4f7640, _0x91fac5);
    }
    if (_0x4f7640.requestFullscreen) {
      _0x4f7640.requestFullscreen();
    } else if (_0x4f7640.webkitRequestFullscreen) {
      _0x4f7640.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x315133.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x4a5273 = _0x91fac5;
    if (_0x91fac5.canvasResizedCallback) {
      (function (_0xf56652, _0x59e466, _0xae2c78) {
        return _0x10910b.apply(null, [_0x91fac5.canvasResizedCallback, _0xf56652, _0x59e466, _0xae2c78]);
      })(37, 0, _0x91fac5.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0x5a7119() {
    if (!_0x315133.fullscreenEnabled()) {
      return -1;
    }
    _0x315133.removeDeferredCalls(_0x3f910b);
    var _0x32ce5a = _0x24eb65[1];
    if (_0x32ce5a.exitFullscreen) {
      if (_0x32ce5a.fullscreenElement) {
        _0x32ce5a.exitFullscreen();
      }
    } else if (_0x32ce5a.webkitExitFullscreen) {
      if (_0x32ce5a.webkitFullscreenElement) {
        _0x32ce5a.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0x5bb47a(_0x4760c8) {
    if (_0x4760c8.requestPointerLock) {
      _0x4760c8.requestPointerLock();
    } else if (_0x4760c8.msRequestPointerLock) {
      _0x4760c8.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0xcba315() {
    _0x315133.removeDeferredCalls(_0x5bb47a);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0x128d50(_0x32939b) {
    var _0x33062e = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0x5152c1 = !!_0x33062e;
    _0x2beff6[_0x32939b >> 2] = _0x5152c1;
    _0x2beff6[_0x32939b + 4 >> 2] = _0x315133.fullscreenEnabled();
    var _0x408143 = _0x5152c1 ? _0x33062e : _0x315133.previousFullscreenElement;
    var _0x16b614 = _0x315133.getNodeNameForTarget(_0x408143);
    var _0x50ee66 = _0x408143 && _0x408143.id ? _0x408143.id : "";
    _0x156f83(_0x16b614, _0x32939b + 8, 128);
    _0x156f83(_0x50ee66, _0x32939b + 136, 128);
    _0x2beff6[_0x32939b + 264 >> 2] = _0x408143 ? _0x408143.clientWidth : 0;
    _0x2beff6[_0x32939b + 268 >> 2] = _0x408143 ? _0x408143.clientHeight : 0;
    _0x2beff6[_0x32939b + 272 >> 2] = screen.width;
    _0x2beff6[_0x32939b + 276 >> 2] = screen.height;
    if (_0x5152c1) {
      _0x315133.previousFullscreenElement = _0x33062e;
    }
  }
  function _0xc4e0b4(_0x2dfa2b) {
    if (!_0x315133.fullscreenEnabled()) {
      return -1;
    }
    _0x128d50(_0x2dfa2b);
    return 0;
  }
  function _0x10e8ab(_0x39ecb5, _0x3ffd65) {
    _0xfbcc55[_0x39ecb5 >> 3] = _0x3ffd65.timestamp;
    for (var _0x3e8307 = 0; _0x3e8307 < _0x3ffd65.axes.length; ++_0x3e8307) {
      _0xfbcc55[_0x39ecb5 + _0x3e8307 * 8 + 16 >> 3] = _0x3ffd65.axes[_0x3e8307];
    }
    for (var _0x3e8307 = 0; _0x3e8307 < _0x3ffd65.buttons.length; ++_0x3e8307) {
      if (typeof _0x3ffd65.buttons[_0x3e8307] === "object") {
        _0xfbcc55[_0x39ecb5 + _0x3e8307 * 8 + 528 >> 3] = _0x3ffd65.buttons[_0x3e8307].value;
      } else {
        _0xfbcc55[_0x39ecb5 + _0x3e8307 * 8 + 528 >> 3] = _0x3ffd65.buttons[_0x3e8307];
      }
    }
    for (var _0x3e8307 = 0; _0x3e8307 < _0x3ffd65.buttons.length; ++_0x3e8307) {
      if (typeof _0x3ffd65.buttons[_0x3e8307] === "object") {
        _0x2beff6[_0x39ecb5 + _0x3e8307 * 4 + 1040 >> 2] = _0x3ffd65.buttons[_0x3e8307].pressed;
      } else {
        _0x2beff6[_0x39ecb5 + _0x3e8307 * 4 + 1040 >> 2] = _0x3ffd65.buttons[_0x3e8307] == 1;
      }
    }
    _0x2beff6[_0x39ecb5 + 1296 >> 2] = _0x3ffd65.connected;
    _0x2beff6[_0x39ecb5 + 1300 >> 2] = _0x3ffd65.index;
    _0x2beff6[_0x39ecb5 + 8 >> 2] = _0x3ffd65.axes.length;
    _0x2beff6[_0x39ecb5 + 12 >> 2] = _0x3ffd65.buttons.length;
    _0x156f83(_0x3ffd65.id, _0x39ecb5 + 1304, 64);
    _0x156f83(_0x3ffd65.mapping, _0x39ecb5 + 1368, 64);
  }
  function _0x2011d5(_0x5f11b2, _0x322893) {
    if (_0x5f11b2 < 0 || _0x5f11b2 >= _0x315133.lastGamepadState.length) {
      return -5;
    }
    if (!_0x315133.lastGamepadState[_0x5f11b2]) {
      return -7;
    }
    _0x10e8ab(_0x322893, _0x315133.lastGamepadState[_0x5f11b2]);
    return 0;
  }
  function _0x2e1b69() {
    return 2147483648;
  }
  function _0x1890e4() {
    return _0x315133.lastGamepadState.length;
  }
  function _0xbfc3f6() {
    _0x315133.removeAllEventListeners();
  }
  function _0x4dc830(_0x2b8558) {
    return !_0x411a6a.contexts[_0x2b8558] || _0x411a6a.contexts[_0x2b8558].GLctx.isContextLost();
  }
  function _0x301e54(_0x22e1dd) {
    return _0x22e1dd < 0 || _0x22e1dd === 0 && 1 / _0x22e1dd === -Infinity;
  }
  function _0x441bb8(_0x458915, _0x57f33b) {
    return (_0x458915 >>> 0) + _0x57f33b * 4294967296;
  }
  function _0x8766f7(_0x126b5f, _0x4d0ff4) {
    return (_0x126b5f >>> 0) + (_0x4d0ff4 >>> 0) * 4294967296;
  }
  function _0x2fa9b8(_0x13cb15, _0x926132) {
    if (_0x13cb15 <= 0) {
      return _0x13cb15;
    }
    var _0xd83d1 = _0x926132 <= 32 ? Math.abs(1 << _0x926132 - 1) : Math.pow(2, _0x926132 - 1);
    if (_0x13cb15 >= _0xd83d1 && (_0x926132 <= 32 || _0x13cb15 > _0xd83d1)) {
      _0x13cb15 = _0xd83d1 * -2 + _0x13cb15;
    }
    return _0x13cb15;
  }
  function _0x35ff03(_0x25ad74, _0x290f82) {
    if (_0x25ad74 >= 0) {
      return _0x25ad74;
    }
    if (_0x290f82 <= 32) {
      return Math.abs(1 << _0x290f82 - 1) * 2 + _0x25ad74;
    } else {
      return Math.pow(2, _0x290f82) + _0x25ad74;
    }
  }
  function _0x39a62c(_0x2aeb4d, _0x1b002b) {
    var _0x3653b3 = _0x2aeb4d;
    var _0x21294b = _0x1b002b;
    function _0x55ee20(_0x1bab84, _0xb79eba) {
      if (_0xb79eba === "double" || _0xb79eba === "i64") {
        if (_0x1bab84 & 7) {
          _0x1bab84 += 4;
        }
      } else {}
      return _0x1bab84;
    }
    function _0x1b01a0(_0x4cf5c4) {
      var _0x56fe79;
      _0x21294b = _0x55ee20(_0x21294b, _0x4cf5c4);
      if (_0x4cf5c4 === "double") {
        _0x56fe79 = _0xfbcc55[_0x21294b >> 3];
        _0x21294b += 8;
      } else if (_0x4cf5c4 == "i64") {
        _0x56fe79 = [_0x2beff6[_0x21294b >> 2], _0x2beff6[_0x21294b + 4 >> 2]];
        _0x21294b += 8;
      } else {
        _0x4cf5c4 = "i32";
        _0x56fe79 = _0x2beff6[_0x21294b >> 2];
        _0x21294b += 4;
      }
      return _0x56fe79;
    }
    var _0x39f13f = [];
    var _0x34ca13;
    var _0x2e471d;
    var _0x287822;
    while (1) {
      var _0x52dc16 = _0x3653b3;
      _0x34ca13 = _0x381c0f[_0x3653b3 >> 0];
      if (_0x34ca13 === 0) {
        break;
      }
      _0x2e471d = _0x381c0f[_0x3653b3 + 1 >> 0];
      if (_0x34ca13 == 37) {
        var _0x44445b = false;
        var _0x10b57b = false;
        var _0x33e3ca = false;
        var _0x4e297e = false;
        var _0x1a6470 = false;
        _0x5cb5c8: while (1) {
          switch (_0x2e471d) {
            case 43:
              _0x44445b = true;
              break;
            case 45:
              _0x10b57b = true;
              break;
            case 35:
              _0x33e3ca = true;
              break;
            case 48:
              if (_0x4e297e) {
                break _0x5cb5c8;
              } else {
                _0x4e297e = true;
                break;
              }
            case 32:
              _0x1a6470 = true;
              break;
            default:
              break _0x5cb5c8;
          }
          _0x3653b3++;
          _0x2e471d = _0x381c0f[_0x3653b3 + 1 >> 0];
        }
        var _0x12acf3 = 0;
        if (_0x2e471d == 42) {
          _0x12acf3 = _0x1b01a0("i32");
          _0x3653b3++;
          _0x2e471d = _0x381c0f[_0x3653b3 + 1 >> 0];
        } else {
          while (_0x2e471d >= 48 && _0x2e471d <= 57) {
            _0x12acf3 = _0x12acf3 * 10 + (_0x2e471d - 48);
            _0x3653b3++;
            _0x2e471d = _0x381c0f[_0x3653b3 + 1 >> 0];
          }
        }
        var _0x281d25 = false;
        var _0xcf92d3 = -1;
        if (_0x2e471d == 46) {
          _0xcf92d3 = 0;
          _0x281d25 = true;
          _0x3653b3++;
          _0x2e471d = _0x381c0f[_0x3653b3 + 1 >> 0];
          if (_0x2e471d == 42) {
            _0xcf92d3 = _0x1b01a0("i32");
            _0x3653b3++;
          } else {
            while (1) {
              var _0x39fcd1 = _0x381c0f[_0x3653b3 + 1 >> 0];
              if (_0x39fcd1 < 48 || _0x39fcd1 > 57) {
                break;
              }
              _0xcf92d3 = _0xcf92d3 * 10 + (_0x39fcd1 - 48);
              _0x3653b3++;
            }
          }
          _0x2e471d = _0x381c0f[_0x3653b3 + 1 >> 0];
        }
        if (_0xcf92d3 < 0) {
          _0xcf92d3 = 6;
          _0x281d25 = false;
        }
        var _0x857912;
        switch (String.fromCharCode(_0x2e471d)) {
          case "h":
            var _0x233a59 = _0x381c0f[_0x3653b3 + 2 >> 0];
            if (_0x233a59 == 104) {
              _0x3653b3++;
              _0x857912 = 1;
            } else {
              _0x857912 = 2;
            }
            break;
          case "l":
            var _0x233a59 = _0x381c0f[_0x3653b3 + 2 >> 0];
            if (_0x233a59 == 108) {
              _0x3653b3++;
              _0x857912 = 8;
            } else {
              _0x857912 = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0x857912 = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x857912 = 4;
            break;
          default:
            _0x857912 = null;
        }
        if (_0x857912) {
          _0x3653b3++;
        }
        _0x2e471d = _0x381c0f[_0x3653b3 + 1 >> 0];
        switch (String.fromCharCode(_0x2e471d)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0x3cd20d = _0x2e471d == 100 || _0x2e471d == 105;
              _0x857912 = _0x857912 || 4;
              _0x287822 = _0x1b01a0("i" + _0x857912 * 8);
              var _0x450738;
              if (_0x857912 == 8) {
                _0x287822 = _0x2e471d == 117 ? _0x8766f7(_0x287822[0], _0x287822[1]) : _0x441bb8(_0x287822[0], _0x287822[1]);
              }
              if (_0x857912 <= 4) {
                var _0x2cf262 = Math.pow(256, _0x857912) - 1;
                _0x287822 = (_0x3cd20d ? _0x2fa9b8 : _0x35ff03)(_0x287822 & _0x2cf262, _0x857912 * 8);
              }
              var _0x44c5c7 = Math.abs(_0x287822);
              var _0x3eed4d = "";
              if (_0x2e471d == 100 || _0x2e471d == 105) {
                _0x450738 = _0x2fa9b8(_0x287822, _0x857912 * 8, 1).toString(10);
              } else if (_0x2e471d == 117) {
                _0x450738 = _0x35ff03(_0x287822, _0x857912 * 8, 1).toString(10);
                _0x287822 = Math.abs(_0x287822);
              } else if (_0x2e471d == 111) {
                _0x450738 = (_0x33e3ca ? "0" : "") + _0x44c5c7.toString(8);
              } else if (_0x2e471d == 120 || _0x2e471d == 88) {
                _0x3eed4d = _0x33e3ca && _0x287822 != 0 ? "0x" : "";
                if (_0x287822 < 0) {
                  _0x287822 = -_0x287822;
                  _0x450738 = (_0x44c5c7 - 1).toString(16);
                  var _0x204437 = [];
                  for (var _0x2564eb = 0; _0x2564eb < _0x450738.length; _0x2564eb++) {
                    _0x204437.push((15 - parseInt(_0x450738[_0x2564eb], 16)).toString(16));
                  }
                  _0x450738 = _0x204437.join("");
                  while (_0x450738.length < _0x857912 * 2) {
                    _0x450738 = "f" + _0x450738;
                  }
                } else {
                  _0x450738 = _0x44c5c7.toString(16);
                }
                if (_0x2e471d == 88) {
                  _0x3eed4d = _0x3eed4d.toUpperCase();
                  _0x450738 = _0x450738.toUpperCase();
                }
              } else if (_0x2e471d == 112) {
                if (_0x44c5c7 === 0) {
                  _0x450738 = "(nil)";
                } else {
                  _0x3eed4d = "0x";
                  _0x450738 = _0x44c5c7.toString(16);
                }
              }
              if (_0x281d25) {
                while (_0x450738.length < _0xcf92d3) {
                  _0x450738 = "0" + _0x450738;
                }
              }
              if (_0x287822 >= 0) {
                if (_0x44445b) {
                  _0x3eed4d = "+" + _0x3eed4d;
                } else if (_0x1a6470) {
                  _0x3eed4d = " " + _0x3eed4d;
                }
              }
              if (_0x450738.charAt(0) == "-") {
                _0x3eed4d = "-" + _0x3eed4d;
                _0x450738 = _0x450738.substr(1);
              }
              while (_0x3eed4d.length + _0x450738.length < _0x12acf3) {
                if (_0x10b57b) {
                  _0x450738 += " ";
                } else if (_0x4e297e) {
                  _0x450738 = "0" + _0x450738;
                } else {
                  _0x3eed4d = " " + _0x3eed4d;
                }
              }
              _0x450738 = _0x3eed4d + _0x450738;
              _0x450738.split("").forEach(function (_0x91a31e) {
                _0x39f13f.push(_0x91a31e.charCodeAt(0));
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
              _0x287822 = _0x1b01a0("double");
              var _0x450738;
              if (isNaN(_0x287822)) {
                _0x450738 = "nan";
                _0x4e297e = false;
              } else if (!isFinite(_0x287822)) {
                _0x450738 = (_0x287822 < 0 ? "-" : "") + "inf";
                _0x4e297e = false;
              } else {
                var _0xeb9a4f = false;
                var _0x5b39e0 = Math.min(_0xcf92d3, 20);
                if (_0x2e471d == 103 || _0x2e471d == 71) {
                  _0xeb9a4f = true;
                  _0xcf92d3 = _0xcf92d3 || 1;
                  var _0x230b8d = parseInt(_0x287822.toExponential(_0x5b39e0).split("e")[1], 10);
                  if (_0xcf92d3 > _0x230b8d && _0x230b8d >= -4) {
                    _0x2e471d = (_0x2e471d == 103 ? "f" : "F").charCodeAt(0);
                    _0xcf92d3 -= _0x230b8d + 1;
                  } else {
                    _0x2e471d = (_0x2e471d == 103 ? "e" : "E").charCodeAt(0);
                    _0xcf92d3--;
                  }
                  _0x5b39e0 = Math.min(_0xcf92d3, 20);
                }
                if (_0x2e471d == 101 || _0x2e471d == 69) {
                  _0x450738 = _0x287822.toExponential(_0x5b39e0);
                  if (/[eE][-+]\d$/.test(_0x450738)) {
                    _0x450738 = _0x450738.slice(0, -1) + "0" + _0x450738.slice(-1);
                  }
                } else if (_0x2e471d == 102 || _0x2e471d == 70) {
                  _0x450738 = _0x287822.toFixed(_0x5b39e0);
                  if (_0x287822 === 0 && _0x301e54(_0x287822)) {
                    _0x450738 = "-" + _0x450738;
                  }
                }
                var _0x320220 = _0x450738.split("e");
                if (_0xeb9a4f && !_0x33e3ca) {
                  while (_0x320220[0].length > 1 && _0x320220[0].includes(".") && (_0x320220[0].slice(-1) == "0" || _0x320220[0].slice(-1) == ".")) {
                    _0x320220[0] = _0x320220[0].slice(0, -1);
                  }
                } else {
                  if (_0x33e3ca && _0x450738.indexOf(".") == -1) {
                    _0x320220[0] += ".";
                  }
                  while (_0xcf92d3 > _0x5b39e0++) {
                    _0x320220[0] += "0";
                  }
                }
                _0x450738 = _0x320220[0] + (_0x320220.length > 1 ? "e" + _0x320220[1] : "");
                if (_0x2e471d == 69) {
                  _0x450738 = _0x450738.toUpperCase();
                }
                if (_0x287822 >= 0) {
                  if (_0x44445b) {
                    _0x450738 = "+" + _0x450738;
                  } else if (_0x1a6470) {
                    _0x450738 = " " + _0x450738;
                  }
                }
              }
              while (_0x450738.length < _0x12acf3) {
                if (_0x10b57b) {
                  _0x450738 += " ";
                } else if (_0x4e297e && (_0x450738[0] == "-" || _0x450738[0] == "+")) {
                  _0x450738 = _0x450738[0] + "0" + _0x450738.slice(1);
                } else {
                  _0x450738 = (_0x4e297e ? "0" : " ") + _0x450738;
                }
              }
              if (_0x2e471d < 97) {
                _0x450738 = _0x450738.toUpperCase();
              }
              _0x450738.split("").forEach(function (_0x6a72a3) {
                _0x39f13f.push(_0x6a72a3.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0xf89dbd = _0x1b01a0("i8*");
              var _0x22a921 = _0xf89dbd ? _0x408bd6(_0xf89dbd) : "(null)".length;
              if (_0x281d25) {
                _0x22a921 = Math.min(_0x22a921, _0xcf92d3);
              }
              if (!_0x10b57b) {
                while (_0x22a921 < _0x12acf3--) {
                  _0x39f13f.push(32);
                }
              }
              if (_0xf89dbd) {
                for (var _0x2564eb = 0; _0x2564eb < _0x22a921; _0x2564eb++) {
                  _0x39f13f.push(_0x298c61[_0xf89dbd++ >> 0]);
                }
              } else {
                _0x39f13f = _0x39f13f.concat(_0x3e9728("(null)".substr(0, _0x22a921), true));
              }
              if (_0x10b57b) {
                while (_0x22a921 < _0x12acf3--) {
                  _0x39f13f.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x10b57b) {
                _0x39f13f.push(_0x1b01a0("i8"));
              }
              while (--_0x12acf3 > 0) {
                _0x39f13f.push(32);
              }
              if (!_0x10b57b) {
                _0x39f13f.push(_0x1b01a0("i8"));
              }
              break;
            }
          case "n":
            {
              var _0x30a53c = _0x1b01a0("i32*");
              _0x2beff6[_0x30a53c >> 2] = _0x39f13f.length;
              break;
            }
          case "%":
            {
              _0x39f13f.push(_0x34ca13);
              break;
            }
          default:
            {
              for (var _0x2564eb = _0x52dc16; _0x2564eb < _0x3653b3 + 2; _0x2564eb++) {
                _0x39f13f.push(_0x381c0f[_0x2564eb >> 0]);
              }
            }
        }
        _0x3653b3 += 2;
      } else {
        _0x39f13f.push(_0x34ca13);
        _0x3653b3 += 1;
      }
    }
    return _0x39f13f;
  }
  function _0x2fb691(_0x261f31) {
    if (!_0x261f31 || !_0x261f31.callee || !_0x261f31.callee.name) {
      return [null, "", ""];
    }
    var _0x1a6cf3 = _0x261f31.callee.toString();
    var _0x5184f1 = _0x261f31.callee.name;
    var _0x20f5c5 = "(";
    var _0x502fef = true;
    for (var _0x20f778 in _0x261f31) {
      var _0xa31017 = _0x261f31[_0x20f778];
      if (!_0x502fef) {
        _0x20f5c5 += ", ";
      }
      _0x502fef = false;
      if (typeof _0xa31017 === "number" || typeof _0xa31017 === "string") {
        _0x20f5c5 += _0xa31017;
      } else {
        _0x20f5c5 += "(" + typeof _0xa31017 + ")";
      }
    }
    _0x20f5c5 += ")";
    var _0x4952f5 = _0x261f31.callee.caller;
    _0x261f31 = _0x4952f5 ? _0x4952f5.arguments : [];
    if (_0x502fef) {
      _0x20f5c5 = "";
    }
    return [_0x261f31, _0x5184f1, _0x20f5c5];
  }
  function _0x422c5a(_0x3302ec) {
    var _0x5f2194 = _0xf1b425();
    var _0x5d17aa = _0x5f2194.lastIndexOf("_emscripten_log");
    var _0x501b3a = _0x5f2194.lastIndexOf("_emscripten_get_callstack");
    var _0x7d218f = _0x5f2194.indexOf("\n", Math.max(_0x5d17aa, _0x501b3a)) + 1;
    _0x5f2194 = _0x5f2194.slice(_0x7d218f);
    if (_0x3302ec & 32) {
      _0x1e49c0("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x3302ec & 8 && typeof emscripten_source_map === "undefined") {
      _0x1e49c0("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x3302ec ^= 8;
      _0x3302ec |= 16;
    }
    var _0x2972c8 = null;
    if (_0x3302ec & 128) {
      _0x2972c8 = _0x2fb691(arguments);
      while (_0x2972c8[1].includes("_emscripten_")) {
        _0x2972c8 = _0x2fb691(_0x2972c8[0]);
      }
    }
    var _0x4a699b = _0x5f2194.split("\n");
    _0x5f2194 = "";
    var _0x7e1c4f = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0x17ee42 = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0x32b296 = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x5e69d3 in _0x4a699b) {
      var _0x584af6 = _0x4a699b[_0x5e69d3];
      var _0x2121b1 = "";
      var _0x291c72 = "";
      var _0x35c0d9 = 0;
      var _0x126df0 = 0;
      var _0x6db696 = _0x32b296.exec(_0x584af6);
      if (_0x6db696 && _0x6db696.length == 5) {
        _0x2121b1 = _0x6db696[1];
        _0x291c72 = _0x6db696[2];
        _0x35c0d9 = _0x6db696[3];
        _0x126df0 = _0x6db696[4];
      } else {
        _0x6db696 = _0x7e1c4f.exec(_0x584af6);
        if (!_0x6db696) {
          _0x6db696 = _0x17ee42.exec(_0x584af6);
        }
        if (_0x6db696 && _0x6db696.length >= 4) {
          _0x2121b1 = _0x6db696[1];
          _0x291c72 = _0x6db696[2];
          _0x35c0d9 = _0x6db696[3];
          _0x126df0 = _0x6db696[4] | 0;
        } else {
          _0x5f2194 += _0x584af6 + "\n";
          continue;
        }
      }
      var _0x569a0c = false;
      if (_0x3302ec & 8) {
        var _0x5ee906 = emscripten_source_map.originalPositionFor({
          line: _0x35c0d9,
          column: _0x126df0
        });
        _0x569a0c = _0x5ee906 && _0x5ee906.source;
        if (_0x569a0c) {
          if (_0x3302ec & 64) {
            _0x5ee906.source = _0x5ee906.source.substring(_0x5ee906.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x5f2194 += "    at " + _0x2121b1 + " (" + _0x5ee906.source + ":" + _0x5ee906.line + ":" + _0x5ee906.column + ")\n";
        }
      }
      if (_0x3302ec & 16 || !_0x569a0c) {
        if (_0x3302ec & 64) {
          _0x291c72 = _0x291c72.substring(_0x291c72.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x5f2194 += (_0x569a0c ? "     = " + _0x2121b1 : "    at " + _0x2121b1) + " (" + _0x291c72 + ":" + _0x35c0d9 + ":" + _0x126df0 + ")\n";
      }
      if (_0x3302ec & 128 && _0x2972c8[0]) {
        if (_0x2972c8[1] == _0x2121b1 && _0x2972c8[2].length > 0) {
          _0x5f2194 = _0x5f2194.replace(/\s+$/, "");
          _0x5f2194 += " with values: " + _0x2972c8[1] + _0x2972c8[2] + "\n";
        }
        _0x2972c8 = _0x2fb691(_0x2972c8[0]);
      }
    }
    _0x5f2194 = _0x5f2194.replace(/\s+$/, "");
    return _0x5f2194;
  }
  function _0x4f4a73(_0x1c47fd, _0x3a7d0c) {
    if (_0x1c47fd & 24) {
      _0x3a7d0c = _0x3a7d0c.replace(/\s+$/, "");
      _0x3a7d0c += (_0x3a7d0c.length > 0 ? "\n" : "") + _0x422c5a(_0x1c47fd);
    }
    if (_0x1c47fd & 1) {
      if (_0x1c47fd & 4) {
        console.error(_0x3a7d0c);
      } else if (_0x1c47fd & 2) {
        console.warn(_0x3a7d0c);
      } else if (_0x1c47fd & 512) {
        console.info(_0x3a7d0c);
      } else if (_0x1c47fd & 256) {
        console.debug(_0x3a7d0c);
      } else {
        console.log(_0x3a7d0c);
      }
    } else if (_0x1c47fd & 6) {
      _0x5761f3(_0x3a7d0c);
    } else {
      _0x41fa06(_0x3a7d0c);
    }
  }
  function _0x971efa(_0x2e8b4b, _0xb5312e, _0x2dc323) {
    var _0x58f016 = _0x39a62c(_0xb5312e, _0x2dc323);
    var _0x3c3377 = _0xed8485(_0x58f016, 0);
    _0x4f4a73(_0x2e8b4b, _0x3c3377);
  }
  function _0x2d6bd8(_0x22ed63, _0x10b8c4) {
    _0x4a7cd0(_0x22ed63, _0x10b8c4 || 1);
    throw "longjmp";
  }
  function _0x331d5c(_0x1fd806, _0x4dfb8a) {
    return _0x2d6bd8(_0x1fd806, _0x4dfb8a);
  }
  function _0x3d2099(_0x2f49d6, _0xad8e80, _0x3ea95f) {
    _0x298c61.copyWithin(_0x2f49d6, _0xad8e80, _0xad8e80 + _0x3ea95f);
  }
  function _0xa8edd9(_0x118dbc, _0x5109f1) {
    if (!_0x315133.fullscreenEnabled()) {
      return -1;
    }
    _0x118dbc = _0x11a7bc(_0x118dbc);
    if (!_0x118dbc) {
      return -4;
    }
    if (!_0x118dbc.requestFullscreen && !_0x118dbc.webkitRequestFullscreen) {
      return -3;
    }
    var _0x426217 = _0x315133.canPerformEventHandlerRequests();
    if (!_0x426217) {
      if (_0x5109f1.deferUntilInEventHandler) {
        _0x315133.deferCall(_0x3f910b, 1, [_0x118dbc, _0x5109f1]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x3f910b(_0x118dbc, _0x5109f1);
  }
  function _0x141425(_0x264ffd, _0x404001) {
    var _0x21eb93 = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0x404001,
      canvasResizedCallbackTargetThread: 2
    };
    return _0xa8edd9(_0x264ffd, _0x21eb93);
  }
  function _0x243c05(_0x5b9f1b, _0x134865) {
    _0x5b9f1b = _0x11a7bc(_0x5b9f1b);
    if (!_0x5b9f1b) {
      return -4;
    }
    if (!_0x5b9f1b.requestPointerLock && !_0x5b9f1b.msRequestPointerLock) {
      return -1;
    }
    var _0x1bf835 = _0x315133.canPerformEventHandlerRequests();
    if (!_0x1bf835) {
      if (_0x134865) {
        _0x315133.deferCall(_0x5bb47a, 2, [_0x5b9f1b]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x5bb47a(_0x5b9f1b);
  }
  function _0x1aff32(_0x2ae611) {
    try {
      _0x144208.grow(_0x2ae611 - _0x19ef6f.byteLength + 65535 >>> 16);
      _0x4fcd7e(_0x144208.buffer);
      return 1;
    } catch (_0x455740) {}
  }
  function _0x2846b0(_0x32af32) {
    var _0x512263 = _0x298c61.length;
    _0x32af32 = _0x32af32 >>> 0;
    var _0x2fe71a = 2147483648;
    if (_0x32af32 > _0x2fe71a) {
      return false;
    }
    for (var _0x288de3 = 1; _0x288de3 <= 4; _0x288de3 *= 2) {
      var _0x47304b = _0x512263 * (1 + 0.2 / _0x288de3);
      _0x47304b = Math.min(_0x47304b, _0x32af32 + 100663296);
      var _0x36d2cb = Math.min(_0x2fe71a, _0x1ee042(Math.max(_0x32af32, _0x47304b), 65536));
      var _0x5dcdfe = _0x1aff32(_0x36d2cb);
      if (_0x5dcdfe) {
        return true;
      }
    }
    return false;
  }
  function _0x276891() {
    try {
      if (navigator.getGamepads) {
        if (_0x315133.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0x56ec49) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0x201b89(_0x1ec844, _0x96034d, _0x5af000, _0x2e675f, _0x4f1346, _0x4a4c6e, _0x4376d7) {
    if (!_0x315133.focusEvent) {
      _0x315133.focusEvent = _0x5d6d4a(256);
    }
    function _0x185e14(_0xdb1749) {
      var _0x3a7c7f = _0xdb1749 || event;
      var _0x19e036 = _0x315133.getNodeNameForTarget(_0x3a7c7f.target);
      var _0xe89a12 = _0x3a7c7f.target.id ? _0x3a7c7f.target.id : "";
      var _0x11218d = _0x315133.focusEvent;
      _0x156f83(_0x19e036, _0x11218d + 0, 128);
      _0x156f83(_0xe89a12, _0x11218d + 128, 128);
      if (function (_0x30d45d, _0x42dd9b, _0x35cd0c) {
        return _0x10910b.apply(null, [_0x2e675f, _0x30d45d, _0x42dd9b, _0x35cd0c]);
      }(_0x4f1346, _0x11218d, _0x96034d)) {
        _0x3a7c7f.preventDefault();
      }
    }
    var _0x19a003 = {
      target: _0x11a7bc(_0x1ec844),
      eventTypeString: _0x4a4c6e,
      callbackfunc: _0x2e675f,
      handlerFunc: _0x185e14,
      useCapture: _0x5af000
    };
    _0x315133.registerOrRemoveHandler(_0x19a003);
  }
  function _0x1436fe(_0x32d6f3, _0x5431e7, _0x5c5d7e, _0x580ab1, _0x22e80c) {
    _0x201b89(_0x32d6f3, _0x5431e7, _0x5c5d7e, _0x580ab1, 12, "blur", _0x22e80c);
    return 0;
  }
  function _0x59738c(_0x35f9b1, _0x8963e9, _0x1a8291, _0x36b9e7, _0x4baad7) {
    _0x201b89(_0x35f9b1, _0x8963e9, _0x1a8291, _0x36b9e7, 13, "focus", _0x4baad7);
    return 0;
  }
  function _0x227aa7(_0x34ef77, _0x22353f, _0x2164af, _0xe6fafe, _0x28e5e9, _0x20c952, _0x5f3273) {
    if (!_0x315133.fullscreenChangeEvent) {
      _0x315133.fullscreenChangeEvent = _0x5d6d4a(280);
    }
    function _0x39e220(_0x5a8be0) {
      var _0x1b2b7c = _0x5a8be0 || event;
      var _0x34359e = _0x315133.fullscreenChangeEvent;
      _0x128d50(_0x34359e);
      if (function (_0x49c1d0, _0x1d3b10, _0x3fc2fd) {
        return _0x10910b.apply(null, [_0xe6fafe, _0x49c1d0, _0x1d3b10, _0x3fc2fd]);
      }(_0x28e5e9, _0x34359e, _0x22353f)) {
        _0x1b2b7c.preventDefault();
      }
    }
    var _0x3c7200 = {
      target: _0x34ef77,
      eventTypeString: _0x20c952,
      callbackfunc: _0xe6fafe,
      handlerFunc: _0x39e220,
      useCapture: _0x2164af
    };
    _0x315133.registerOrRemoveHandler(_0x3c7200);
  }
  function _0x13115c(_0x2eb126, _0x13fb72, _0x956f7d, _0x3d7f90, _0x2ad313) {
    if (!_0x315133.fullscreenEnabled()) {
      return -1;
    }
    _0x2eb126 = _0x11a7bc(_0x2eb126);
    if (!_0x2eb126) {
      return -4;
    }
    _0x227aa7(_0x2eb126, _0x13fb72, _0x956f7d, _0x3d7f90, 19, "fullscreenchange", _0x2ad313);
    _0x227aa7(_0x2eb126, _0x13fb72, _0x956f7d, _0x3d7f90, 19, "webkitfullscreenchange", _0x2ad313);
    return 0;
  }
  function _0x21756b(_0x177b8d, _0x181cea, _0x5e3871, _0x10c4f7, _0x4c99c5, _0x96817e, _0x36cf8f) {
    if (!_0x315133.gamepadEvent) {
      _0x315133.gamepadEvent = _0x5d6d4a(1432);
    }
    function _0x230567(_0x1db121) {
      var _0x2ca9b7 = _0x1db121 || event;
      var _0x2f92bd = _0x315133.gamepadEvent;
      _0x10e8ab(_0x2f92bd, _0x2ca9b7.gamepad);
      if (function (_0x505348, _0x39f44b, _0x3be6c8) {
        return _0x10910b.apply(null, [_0x10c4f7, _0x505348, _0x39f44b, _0x3be6c8]);
      }(_0x4c99c5, _0x2f92bd, _0x181cea)) {
        _0x2ca9b7.preventDefault();
      }
    }
    var _0x532d62 = {
      target: _0x11a7bc(_0x177b8d),
      allowsDeferredCalls: true,
      eventTypeString: _0x96817e,
      callbackfunc: _0x10c4f7,
      handlerFunc: _0x230567,
      useCapture: _0x5e3871
    };
    _0x315133.registerOrRemoveHandler(_0x532d62);
  }
  function _0x5d9665(_0x2b3d34, _0x30c1f3, _0x3c9889, _0x46e380) {
    if (_0x276891()) {
      return -1;
    }
    return _0x21756b(2, _0x2b3d34, _0x30c1f3, _0x3c9889, 26, "gamepadconnected", _0x46e380);
  }
  function _0x448fc5(_0x45df80, _0x1b2372, _0x12f609, _0x5b02f5) {
    if (_0x276891()) {
      return -1;
    }
    return _0x21756b(2, _0x45df80, _0x1b2372, _0x12f609, 27, "gamepaddisconnected", _0x5b02f5);
  }
  function _0x1cce88(_0x440757, _0x2d40a2, _0x45b811) {
    return setInterval(function () {
      (function (_0x5573a5) {
        _0x1c7fce.apply(null, [_0x440757, _0x5573a5]);
      })(_0x45b811);
    }, _0x2d40a2);
  }
  function _0x35e405(_0x2f546e, _0x44177a, _0x218740, _0x5b4c1c, _0x34566f, _0xec17fb, _0x3fda8a) {
    if (!_0x315133.keyEvent) {
      _0x315133.keyEvent = _0x5d6d4a(164);
    }
    function _0x266637(_0x4336ee) {
      var _0x1fd47b = _0x315133.keyEvent;
      var _0x46d4bf = _0x1fd47b >> 2;
      _0x2beff6[_0x46d4bf + 0] = _0x4336ee.location;
      _0x2beff6[_0x46d4bf + 1] = _0x4336ee.ctrlKey;
      _0x2beff6[_0x46d4bf + 2] = _0x4336ee.shiftKey;
      _0x2beff6[_0x46d4bf + 3] = _0x4336ee.altKey;
      _0x2beff6[_0x46d4bf + 4] = _0x4336ee.metaKey;
      _0x2beff6[_0x46d4bf + 5] = _0x4336ee.repeat;
      _0x2beff6[_0x46d4bf + 6] = _0x4336ee.charCode;
      _0x2beff6[_0x46d4bf + 7] = _0x4336ee.keyCode;
      _0x2beff6[_0x46d4bf + 8] = _0x4336ee.which;
      _0x156f83(_0x4336ee.key || "", _0x1fd47b + 36, 32);
      _0x156f83(_0x4336ee.code || "", _0x1fd47b + 68, 32);
      _0x156f83(_0x4336ee.char || "", _0x1fd47b + 100, 32);
      _0x156f83(_0x4336ee.locale || "", _0x1fd47b + 132, 32);
      if (function (_0x27ceb1, _0x3ba399, _0x3cfa65) {
        return _0x10910b.apply(null, [_0x5b4c1c, _0x27ceb1, _0x3ba399, _0x3cfa65]);
      }(_0x34566f, _0x1fd47b, _0x44177a)) {
        _0x4336ee.preventDefault();
      }
    }
    var _0x460d0f = {
      target: _0x11a7bc(_0x2f546e),
      allowsDeferredCalls: true,
      eventTypeString: _0xec17fb,
      callbackfunc: _0x5b4c1c,
      handlerFunc: _0x266637,
      useCapture: _0x218740
    };
    _0x315133.registerOrRemoveHandler(_0x460d0f);
  }
  function _0x4c9f4d(_0x2d87c1, _0x323da5, _0x2bf664, _0x436261, _0x2edbbb) {
    _0x35e405(_0x2d87c1, _0x323da5, _0x2bf664, _0x436261, 2, "keydown", _0x2edbbb);
    return 0;
  }
  function _0xe80851(_0x3f4806, _0x2398c1, _0x18b411, _0x49ecf8, _0x1842ba) {
    _0x35e405(_0x3f4806, _0x2398c1, _0x18b411, _0x49ecf8, 1, "keypress", _0x1842ba);
    return 0;
  }
  function _0x1da707(_0x398c9f, _0x1fbaea, _0x82968e, _0x92d84, _0x5637b1) {
    _0x35e405(_0x398c9f, _0x1fbaea, _0x82968e, _0x92d84, 3, "keyup", _0x5637b1);
    return 0;
  }
  function _0x3da5e5(_0x197c61, _0x17d1d6, _0xbce6) {
    function _0x40c330() {
      _0x24caf7.call(null, _0x197c61);
    }
    _0x2c9aae(_0x40c330, _0x17d1d6, _0xbce6);
  }
  function _0x2a972b(_0x59470d, _0x180c47, _0x199a63) {
    var _0x490fc7 = _0x59470d >> 2;
    _0x2beff6[_0x490fc7 + 0] = _0x180c47.screenX;
    _0x2beff6[_0x490fc7 + 1] = _0x180c47.screenY;
    _0x2beff6[_0x490fc7 + 2] = _0x180c47.clientX;
    _0x2beff6[_0x490fc7 + 3] = _0x180c47.clientY;
    _0x2beff6[_0x490fc7 + 4] = _0x180c47.ctrlKey;
    _0x2beff6[_0x490fc7 + 5] = _0x180c47.shiftKey;
    _0x2beff6[_0x490fc7 + 6] = _0x180c47.altKey;
    _0x2beff6[_0x490fc7 + 7] = _0x180c47.metaKey;
    _0x2a9dc6[_0x490fc7 * 2 + 16] = _0x180c47.button;
    _0x2a9dc6[_0x490fc7 * 2 + 17] = _0x180c47.buttons;
    _0x2beff6[_0x490fc7 + 9] = _0x180c47.movementX;
    _0x2beff6[_0x490fc7 + 10] = _0x180c47.movementY;
    var _0x58a998 = _0x4b5b47(_0x199a63);
    _0x2beff6[_0x490fc7 + 11] = _0x180c47.clientX - _0x58a998.left;
    _0x2beff6[_0x490fc7 + 12] = _0x180c47.clientY - _0x58a998.top;
  }
  function _0x131750(_0x3ee822, _0x3ee1c9, _0x576990, _0x6b3b9f, _0x25d73e, _0x47b2b3, _0x32b8d7) {
    if (!_0x315133.mouseEvent) {
      _0x315133.mouseEvent = _0x5d6d4a(64);
    }
    _0x3ee822 = _0x11a7bc(_0x3ee822);
    function _0x4a0375(_0x47e3bb) {
      var _0x284beb = _0x47e3bb || event;
      _0x2a972b(_0x315133.mouseEvent, _0x284beb, _0x3ee822);
      if (function (_0x350f7b, _0x1609d9, _0x37e36d) {
        return _0x10910b.apply(null, [_0x6b3b9f, _0x350f7b, _0x1609d9, _0x37e36d]);
      }(_0x25d73e, _0x315133.mouseEvent, _0x3ee1c9)) {
        _0x284beb.preventDefault();
      }
    }
    var _0x293b0d = {
      target: _0x3ee822,
      allowsDeferredCalls: _0x47b2b3 != "mousemove" && _0x47b2b3 != "mouseenter" && _0x47b2b3 != "mouseleave",
      eventTypeString: _0x47b2b3,
      callbackfunc: _0x6b3b9f,
      handlerFunc: _0x4a0375,
      useCapture: _0x576990
    };
    _0x315133.registerOrRemoveHandler(_0x293b0d);
  }
  function _0x29a007(_0x4ea1e6, _0x28c0ad, _0x16c559, _0x4ce677, _0x3110e7) {
    _0x131750(_0x4ea1e6, _0x28c0ad, _0x16c559, _0x4ce677, 5, "mousedown", _0x3110e7);
    return 0;
  }
  function _0x5d3758(_0x17b8df, _0x4f8a56, _0x229d7a, _0x2307c2, _0x3b5db2) {
    _0x131750(_0x17b8df, _0x4f8a56, _0x229d7a, _0x2307c2, 8, "mousemove", _0x3b5db2);
    return 0;
  }
  function _0x3e5b41(_0x3121d9, _0x8a317d, _0x4ac629, _0x2e17fb, _0x33b5c6) {
    _0x131750(_0x3121d9, _0x8a317d, _0x4ac629, _0x2e17fb, 6, "mouseup", _0x33b5c6);
    return 0;
  }
  function _0x58600a(_0x20cdee) {
    var _0x1a0730 = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x366cca = !!_0x1a0730;
    _0x2beff6[_0x20cdee >> 2] = _0x366cca;
    var _0xf1441a = _0x315133.getNodeNameForTarget(_0x1a0730);
    var _0x17d5e9 = _0x1a0730 && _0x1a0730.id ? _0x1a0730.id : "";
    _0x156f83(_0xf1441a, _0x20cdee + 4, 128);
    _0x156f83(_0x17d5e9, _0x20cdee + 132, 128);
  }
  function _0x940305(_0x2cf88e, _0x36d778, _0xf0d887, _0x27136e, _0x2d81fb, _0x283155, _0x56dc7e) {
    if (!_0x315133.pointerlockChangeEvent) {
      _0x315133.pointerlockChangeEvent = _0x5d6d4a(260);
    }
    function _0x34065b(_0x2f5603) {
      var _0x58257c = _0x2f5603 || event;
      var _0x32bf2c = _0x315133.pointerlockChangeEvent;
      _0x58600a(_0x32bf2c);
      if (function (_0x1ed8b4, _0x3cad0c, _0x19f7f9) {
        return _0x10910b.apply(null, [_0x27136e, _0x1ed8b4, _0x3cad0c, _0x19f7f9]);
      }(_0x2d81fb, _0x32bf2c, _0x36d778)) {
        _0x58257c.preventDefault();
      }
    }
    var _0x535285 = {
      target: _0x2cf88e,
      eventTypeString: _0x283155,
      callbackfunc: _0x27136e,
      handlerFunc: _0x34065b,
      useCapture: _0xf0d887
    };
    _0x315133.registerOrRemoveHandler(_0x535285);
  }
  function _0x17569a(_0x1f225c, _0x5257b4, _0x19b95c, _0x2795a5, _0x13eba6) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0x1f225c = _0x11a7bc(_0x1f225c);
    if (!_0x1f225c) {
      return -4;
    }
    _0x940305(_0x1f225c, _0x5257b4, _0x19b95c, _0x2795a5, 20, "pointerlockchange", _0x13eba6);
    _0x940305(_0x1f225c, _0x5257b4, _0x19b95c, _0x2795a5, 20, "mozpointerlockchange", _0x13eba6);
    _0x940305(_0x1f225c, _0x5257b4, _0x19b95c, _0x2795a5, 20, "webkitpointerlockchange", _0x13eba6);
    _0x940305(_0x1f225c, _0x5257b4, _0x19b95c, _0x2795a5, 20, "mspointerlockchange", _0x13eba6);
    return 0;
  }
  function _0x7e29af(_0x3d38f4, _0x375c7d, _0x52e43d, _0x405cc3, _0x4b3d57, _0x5a7ac4, _0x2b838e) {
    if (!_0x315133.touchEvent) {
      _0x315133.touchEvent = _0x5d6d4a(1684);
    }
    _0x3d38f4 = _0x11a7bc(_0x3d38f4);
    function _0x4a12eb(_0x304a49) {
      var _0xdb8d2d;
      var _0xba4323 = {};
      var _0x1af4ba = _0x304a49.touches;
      for (var _0x3d0e20 = 0; _0x3d0e20 < _0x1af4ba.length; ++_0x3d0e20) {
        _0xdb8d2d = _0x1af4ba[_0x3d0e20];
        _0xdb8d2d.isChanged = _0xdb8d2d.onTarget = 0;
        _0xba4323[_0xdb8d2d.identifier] = _0xdb8d2d;
      }
      for (var _0x3d0e20 = 0; _0x3d0e20 < _0x304a49.changedTouches.length; ++_0x3d0e20) {
        _0xdb8d2d = _0x304a49.changedTouches[_0x3d0e20];
        _0xdb8d2d.isChanged = 1;
        _0xba4323[_0xdb8d2d.identifier] = _0xdb8d2d;
      }
      for (var _0x3d0e20 = 0; _0x3d0e20 < _0x304a49.targetTouches.length; ++_0x3d0e20) {
        _0xba4323[_0x304a49.targetTouches[_0x3d0e20].identifier].onTarget = 1;
      }
      var _0xec44fe = _0x315133.touchEvent;
      var _0x18e5c8 = _0xec44fe >> 2;
      _0x2beff6[_0x18e5c8 + 1] = _0x304a49.ctrlKey;
      _0x2beff6[_0x18e5c8 + 2] = _0x304a49.shiftKey;
      _0x2beff6[_0x18e5c8 + 3] = _0x304a49.altKey;
      _0x2beff6[_0x18e5c8 + 4] = _0x304a49.metaKey;
      _0x18e5c8 += 5;
      var _0x33310f = _0x4b5b47(_0x3d38f4);
      var _0x3fa63a = 0;
      for (var _0x3d0e20 in _0xba4323) {
        var _0xdb8d2d = _0xba4323[_0x3d0e20];
        _0x2beff6[_0x18e5c8 + 0] = _0xdb8d2d.identifier;
        _0x2beff6[_0x18e5c8 + 1] = _0xdb8d2d.screenX;
        _0x2beff6[_0x18e5c8 + 2] = _0xdb8d2d.screenY;
        _0x2beff6[_0x18e5c8 + 3] = _0xdb8d2d.clientX;
        _0x2beff6[_0x18e5c8 + 4] = _0xdb8d2d.clientY;
        _0x2beff6[_0x18e5c8 + 5] = _0xdb8d2d.pageX;
        _0x2beff6[_0x18e5c8 + 6] = _0xdb8d2d.pageY;
        _0x2beff6[_0x18e5c8 + 7] = _0xdb8d2d.isChanged;
        _0x2beff6[_0x18e5c8 + 8] = _0xdb8d2d.onTarget;
        _0x2beff6[_0x18e5c8 + 9] = _0xdb8d2d.clientX - _0x33310f.left;
        _0x2beff6[_0x18e5c8 + 10] = _0xdb8d2d.clientY - _0x33310f.top;
        _0x18e5c8 += 13;
        if (++_0x3fa63a > 31) {
          break;
        }
      }
      _0x2beff6[_0xec44fe >> 2] = _0x3fa63a;
      if (function (_0x5c1dd1, _0x184f05, _0x196ab4) {
        return _0x10910b.apply(null, [_0x405cc3, _0x5c1dd1, _0x184f05, _0x196ab4]);
      }(_0x4b3d57, _0xec44fe, _0x375c7d)) {
        _0x304a49.preventDefault();
      }
    }
    var _0x6caed9 = {
      target: _0x3d38f4,
      allowsDeferredCalls: _0x5a7ac4 == "touchstart" || _0x5a7ac4 == "touchend",
      eventTypeString: _0x5a7ac4,
      callbackfunc: _0x405cc3,
      handlerFunc: _0x4a12eb,
      useCapture: _0x52e43d
    };
    _0x315133.registerOrRemoveHandler(_0x6caed9);
  }
  function _0x278cc8(_0x35428e, _0x4e3bee, _0x18b94d, _0x454ccf, _0xa732b6) {
    _0x7e29af(_0x35428e, _0x4e3bee, _0x18b94d, _0x454ccf, 25, "touchcancel", _0xa732b6);
    return 0;
  }
  function _0x15ec2e(_0x49728c, _0x4e3e0c, _0x58f3d6, _0x12b8e2, _0x121995) {
    _0x7e29af(_0x49728c, _0x4e3e0c, _0x58f3d6, _0x12b8e2, 23, "touchend", _0x121995);
    return 0;
  }
  function _0x36a42b(_0x32de99, _0x158b21, _0x355006, _0x1d3435, _0xcfb66e) {
    _0x7e29af(_0x32de99, _0x158b21, _0x355006, _0x1d3435, 24, "touchmove", _0xcfb66e);
    return 0;
  }
  function _0x19ed34(_0x337dc1, _0x54bcda, _0x3734dc, _0x5b8551, _0x9ab755) {
    _0x7e29af(_0x337dc1, _0x54bcda, _0x3734dc, _0x5b8551, 22, "touchstart", _0x9ab755);
    return 0;
  }
  function _0x4faea8(_0x44aabb, _0x3ac9df, _0x86a097, _0x581d40, _0x313983, _0x5809d1, _0x1bd640) {
    if (!_0x315133.wheelEvent) {
      _0x315133.wheelEvent = _0x5d6d4a(96);
    }
    function _0x204029(_0x1d61c5) {
      var _0x507b96 = _0x1d61c5 || event;
      var _0x1c2dba = _0x315133.wheelEvent;
      _0x2a972b(_0x1c2dba, _0x507b96, _0x44aabb);
      _0xfbcc55[_0x1c2dba + 64 >> 3] = _0x507b96.deltaX;
      _0xfbcc55[_0x1c2dba + 72 >> 3] = _0x507b96.deltaY;
      _0xfbcc55[_0x1c2dba + 80 >> 3] = _0x507b96.deltaZ;
      _0x2beff6[_0x1c2dba + 88 >> 2] = _0x507b96.deltaMode;
      if (function (_0x23513b, _0x182c32, _0x53bc3b) {
        return _0x10910b.apply(null, [_0x581d40, _0x23513b, _0x182c32, _0x53bc3b]);
      }(_0x313983, _0x1c2dba, _0x3ac9df)) {
        _0x507b96.preventDefault();
      }
    }
    var _0x28cf85 = {
      target: _0x44aabb,
      allowsDeferredCalls: true,
      eventTypeString: _0x5809d1,
      callbackfunc: _0x581d40,
      handlerFunc: _0x204029,
      useCapture: _0x86a097
    };
    _0x315133.registerOrRemoveHandler(_0x28cf85);
  }
  function _0x2ecc9c(_0x4dd62e, _0x44e6bf, _0x415f70, _0x2053e8, _0x330e98) {
    _0x4dd62e = _0x11a7bc(_0x4dd62e);
    if (typeof _0x4dd62e.onwheel !== "undefined") {
      _0x4faea8(_0x4dd62e, _0x44e6bf, _0x415f70, _0x2053e8, 9, "wheel", _0x330e98);
      return 0;
    } else {
      return -1;
    }
  }
  function _0x3f7d4f(_0x166dcd) {
    var _0x1c207a = _0x481fbe();
    while (_0x481fbe() - _0x1c207a < _0x166dcd) {}
  }
  function _0x5093d0(_0x50d6a1) {
    var _0x4375ce = _0x50d6a1.getExtension("ANGLE_instanced_arrays");
    if (_0x4375ce) {
      _0x50d6a1.vertexAttribDivisor = function (_0x4db202, _0x3aec83) {
        _0x4375ce.vertexAttribDivisorANGLE(_0x4db202, _0x3aec83);
      };
      _0x50d6a1.drawArraysInstanced = function (_0x19b815, _0x1bca6c, _0x3a4ba4, _0x480ccc) {
        _0x4375ce.drawArraysInstancedANGLE(_0x19b815, _0x1bca6c, _0x3a4ba4, _0x480ccc);
      };
      _0x50d6a1.drawElementsInstanced = function (_0x471edb, _0x20e4c6, _0x5b2158, _0x5312f1, _0x3d0217) {
        _0x4375ce.drawElementsInstancedANGLE(_0x471edb, _0x20e4c6, _0x5b2158, _0x5312f1, _0x3d0217);
      };
      return 1;
    }
  }
  function _0x5308b5(_0x4343f3) {
    var _0x4d25d1 = _0x4343f3.getExtension("OES_vertex_array_object");
    if (_0x4d25d1) {
      _0x4343f3.createVertexArray = function () {
        return _0x4d25d1.createVertexArrayOES();
      };
      _0x4343f3.deleteVertexArray = function (_0x1b809b) {
        _0x4d25d1.deleteVertexArrayOES(_0x1b809b);
      };
      _0x4343f3.bindVertexArray = function (_0x5c52f6) {
        _0x4d25d1.bindVertexArrayOES(_0x5c52f6);
      };
      _0x4343f3.isVertexArray = function (_0x247fc6) {
        return _0x4d25d1.isVertexArrayOES(_0x247fc6);
      };
      return 1;
    }
  }
  function _0x512b22(_0x5d820a) {
    var _0x351875 = _0x5d820a.getExtension("WEBGL_draw_buffers");
    if (_0x351875) {
      _0x5d820a.drawBuffers = function (_0x1bd468, _0x3cc9b4) {
        _0x351875.drawBuffersWEBGL(_0x1bd468, _0x3cc9b4);
      };
      return 1;
    }
  }
  function _0x529f6d(_0x3b687a) {
    return !!(_0x3b687a.dibvbi = _0x3b687a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x36dd68(_0x1f3900) {
    return !!(_0x1f3900.mdibvbi = _0x1f3900.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x1018bf(_0x340f9f) {
    return !!(_0x340f9f.multiDrawWebgl = _0x340f9f.getExtension("WEBGL_multi_draw"));
  }
  var _0x411a6a = {
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
    recordError: function _0x514586(_0x388bfc) {
      if (!_0x411a6a.lastError) {
        _0x411a6a.lastError = _0x388bfc;
      }
    },
    getNewId: function (_0x48135c) {
      var _0x3a43f2 = _0x411a6a.counter++;
      for (var _0x4f59b8 = _0x48135c.length; _0x4f59b8 < _0x3a43f2; _0x4f59b8++) {
        _0x48135c[_0x4f59b8] = null;
      }
      return _0x3a43f2;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x151f2d) {
      return 32 - Math.clz32(_0x151f2d === 0 ? 0 : _0x151f2d - 1);
    },
    generateTempBuffers: function (_0x353a01, _0x1a8e5c) {
      var _0xaa570f = _0x411a6a.log2ceilLookup(_0x411a6a.MAX_TEMP_BUFFER_SIZE);
      _0x1a8e5c.tempVertexBufferCounters1 = [];
      _0x1a8e5c.tempVertexBufferCounters2 = [];
      _0x1a8e5c.tempVertexBufferCounters1.length = _0x1a8e5c.tempVertexBufferCounters2.length = _0xaa570f + 1;
      _0x1a8e5c.tempVertexBuffers1 = [];
      _0x1a8e5c.tempVertexBuffers2 = [];
      _0x1a8e5c.tempVertexBuffers1.length = _0x1a8e5c.tempVertexBuffers2.length = _0xaa570f + 1;
      _0x1a8e5c.tempIndexBuffers = [];
      _0x1a8e5c.tempIndexBuffers.length = _0xaa570f + 1;
      for (var _0x59e78d = 0; _0x59e78d <= _0xaa570f; ++_0x59e78d) {
        _0x1a8e5c.tempIndexBuffers[_0x59e78d] = null;
        _0x1a8e5c.tempVertexBufferCounters1[_0x59e78d] = _0x1a8e5c.tempVertexBufferCounters2[_0x59e78d] = 0;
        var _0x3ba789 = _0x411a6a.numTempVertexBuffersPerSize;
        _0x1a8e5c.tempVertexBuffers1[_0x59e78d] = [];
        _0x1a8e5c.tempVertexBuffers2[_0x59e78d] = [];
        var _0x12d4ce = _0x1a8e5c.tempVertexBuffers1[_0x59e78d];
        var _0x2db793 = _0x1a8e5c.tempVertexBuffers2[_0x59e78d];
        _0x12d4ce.length = _0x2db793.length = _0x3ba789;
        for (var _0x3f10ef = 0; _0x3f10ef < _0x3ba789; ++_0x3f10ef) {
          _0x12d4ce[_0x3f10ef] = _0x2db793[_0x3f10ef] = null;
        }
      }
      if (_0x353a01) {
        _0x1a8e5c.tempQuadIndexBuffer = _0x5a54d9.createBuffer();
        _0x1a8e5c.GLctx.bindBuffer(34963, _0x1a8e5c.tempQuadIndexBuffer);
        var _0x49d228 = _0x411a6a.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0x5d0c5f = new Uint16Array(_0x49d228);
        var _0x59e78d = 0;
        var _0x1fdc78 = 0;
        while (1) {
          _0x5d0c5f[_0x59e78d++] = _0x1fdc78;
          if (_0x59e78d >= _0x49d228) {
            break;
          }
          _0x5d0c5f[_0x59e78d++] = _0x1fdc78 + 1;
          if (_0x59e78d >= _0x49d228) {
            break;
          }
          _0x5d0c5f[_0x59e78d++] = _0x1fdc78 + 2;
          if (_0x59e78d >= _0x49d228) {
            break;
          }
          _0x5d0c5f[_0x59e78d++] = _0x1fdc78;
          if (_0x59e78d >= _0x49d228) {
            break;
          }
          _0x5d0c5f[_0x59e78d++] = _0x1fdc78 + 2;
          if (_0x59e78d >= _0x49d228) {
            break;
          }
          _0x5d0c5f[_0x59e78d++] = _0x1fdc78 + 3;
          if (_0x59e78d >= _0x49d228) {
            break;
          }
          _0x1fdc78 += 4;
        }
        _0x1a8e5c.GLctx.bufferData(34963, _0x5d0c5f, 35044);
        _0x1a8e5c.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0x3b2597(_0xde3c12) {
      var _0x597226 = _0x411a6a.log2ceilLookup(_0xde3c12);
      var _0x228a8e = _0x411a6a.currentContext.tempVertexBuffers1[_0x597226];
      var _0x3cdeaa = _0x411a6a.currentContext.tempVertexBufferCounters1[_0x597226];
      _0x411a6a.currentContext.tempVertexBufferCounters1[_0x597226] = _0x411a6a.currentContext.tempVertexBufferCounters1[_0x597226] + 1 & _0x411a6a.numTempVertexBuffersPerSize - 1;
      var _0x5e3dcc = _0x228a8e[_0x3cdeaa];
      if (_0x5e3dcc) {
        return _0x5e3dcc;
      }
      var _0x17e0b1 = _0x5a54d9.getParameter(34964);
      _0x228a8e[_0x3cdeaa] = _0x5a54d9.createBuffer();
      _0x5a54d9.bindBuffer(34962, _0x228a8e[_0x3cdeaa]);
      _0x5a54d9.bufferData(34962, 1 << _0x597226, 35048);
      _0x5a54d9.bindBuffer(34962, _0x17e0b1);
      return _0x228a8e[_0x3cdeaa];
    },
    getTempIndexBuffer: function _0x233f46(_0x51aac8) {
      var _0x3368df = _0x411a6a.log2ceilLookup(_0x51aac8);
      var _0x257d35 = _0x411a6a.currentContext.tempIndexBuffers[_0x3368df];
      if (_0x257d35) {
        return _0x257d35;
      }
      var _0x10ed73 = _0x5a54d9.getParameter(34965);
      _0x411a6a.currentContext.tempIndexBuffers[_0x3368df] = _0x5a54d9.createBuffer();
      _0x5a54d9.bindBuffer(34963, _0x411a6a.currentContext.tempIndexBuffers[_0x3368df]);
      _0x5a54d9.bufferData(34963, 1 << _0x3368df, 35048);
      _0x5a54d9.bindBuffer(34963, _0x10ed73);
      return _0x411a6a.currentContext.tempIndexBuffers[_0x3368df];
    },
    newRenderingFrameStarted: function _0x1bb8b0() {
      if (!_0x411a6a.currentContext) {
        return;
      }
      var _0x1f4b35 = _0x411a6a.currentContext.tempVertexBuffers1;
      _0x411a6a.currentContext.tempVertexBuffers1 = _0x411a6a.currentContext.tempVertexBuffers2;
      _0x411a6a.currentContext.tempVertexBuffers2 = _0x1f4b35;
      _0x1f4b35 = _0x411a6a.currentContext.tempVertexBufferCounters1;
      _0x411a6a.currentContext.tempVertexBufferCounters1 = _0x411a6a.currentContext.tempVertexBufferCounters2;
      _0x411a6a.currentContext.tempVertexBufferCounters2 = _0x1f4b35;
      var _0x5fc156 = _0x411a6a.log2ceilLookup(_0x411a6a.MAX_TEMP_BUFFER_SIZE);
      for (var _0x365d24 = 0; _0x365d24 <= _0x5fc156; ++_0x365d24) {
        _0x411a6a.currentContext.tempVertexBufferCounters1[_0x365d24] = 0;
      }
    },
    getSource: function (_0x32709e, _0x1982e6, _0x1e5975, _0x3104c3) {
      var _0x9dd255 = "";
      for (var _0x5e006a = 0; _0x5e006a < _0x1982e6; ++_0x5e006a) {
        var _0x3e7a4c = _0x3104c3 ? _0x2beff6[_0x3104c3 + _0x5e006a * 4 >> 2] : -1;
        _0x9dd255 += _0x211f48(_0x2beff6[_0x1e5975 + _0x5e006a * 4 >> 2], _0x3e7a4c < 0 ? undefined : _0x3e7a4c);
      }
      return _0x9dd255;
    },
    calcBufLength: function _0x3c8496(_0x755c87, _0x20226d, _0x3df8a3, _0x414809) {
      if (_0x3df8a3 > 0) {
        return _0x414809 * _0x3df8a3;
      }
      var _0x4dacdb = _0x411a6a.byteSizeByType[_0x20226d - _0x411a6a.byteSizeByTypeRoot];
      return _0x755c87 * _0x4dacdb * _0x414809;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0x41d032(_0x10045f) {
      _0x411a6a.resetBufferBinding = false;
      for (var _0x32e872 = 0; _0x32e872 < _0x411a6a.currentContext.maxVertexAttribs; ++_0x32e872) {
        var _0x21470b = _0x411a6a.currentContext.clientBuffers[_0x32e872];
        if (!_0x21470b.clientside || !_0x21470b.enabled) {
          continue;
        }
        _0x411a6a.resetBufferBinding = true;
        var _0x52cb55 = _0x411a6a.calcBufLength(_0x21470b.size, _0x21470b.type, _0x21470b.stride, _0x10045f);
        var _0x5a9670 = _0x411a6a.getTempVertexBuffer(_0x52cb55);
        _0x5a54d9.bindBuffer(34962, _0x5a9670);
        _0x5a54d9.bufferSubData(34962, 0, _0x298c61.subarray(_0x21470b.ptr, _0x21470b.ptr + _0x52cb55));
        _0x21470b.vertexAttribPointerAdaptor.call(_0x5a54d9, _0x32e872, _0x21470b.size, _0x21470b.type, _0x21470b.normalized, _0x21470b.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0x553d94() {
      if (_0x411a6a.resetBufferBinding) {
        _0x5a54d9.bindBuffer(34962, _0x411a6a.buffers[_0x5a54d9.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0x5ceffe, _0x22e54b) {
      if (!_0x5ceffe.getContextSafariWebGL2Fixed) {
        _0x5ceffe.getContextSafariWebGL2Fixed = _0x5ceffe.getContext;
        _0x5ceffe.getContext = function (_0x14a402, _0x465a99) {
          var _0x42dc20 = _0x5ceffe.getContextSafariWebGL2Fixed(_0x14a402, _0x465a99);
          if (_0x14a402 == "webgl" == _0x42dc20 instanceof WebGLRenderingContext) {
            return _0x42dc20;
          } else {
            return null;
          }
        };
      }
      var _0x213f07 = _0x22e54b.majorVersion > 1 ? _0x5ceffe.getContext("webgl2", _0x22e54b) : _0x5ceffe.getContext("webgl", _0x22e54b);
      if (!_0x213f07) {
        return 0;
      }
      var _0x2e69a1 = _0x411a6a.registerContext(_0x213f07, _0x22e54b);
      return _0x2e69a1;
    },
    registerContext: function (_0xed124b, _0xb3b8f4) {
      var _0x32a8ba = _0x411a6a.getNewId(_0x411a6a.contexts);
      var _0x162c1f = {
        handle: _0x32a8ba,
        attributes: _0xb3b8f4,
        version: _0xb3b8f4.majorVersion,
        GLctx: _0xed124b
      };
      if (_0xed124b.canvas) {
        _0xed124b.canvas.GLctxObject = _0x162c1f;
      }
      _0x411a6a.contexts[_0x32a8ba] = _0x162c1f;
      if (typeof _0xb3b8f4.enableExtensionsByDefault === "undefined" || _0xb3b8f4.enableExtensionsByDefault) {
        _0x411a6a.initExtensions(_0x162c1f);
      }
      _0x162c1f.maxVertexAttribs = _0x162c1f.GLctx.getParameter(34921);
      _0x162c1f.clientBuffers = [];
      for (var _0x593bdf = 0; _0x593bdf < _0x162c1f.maxVertexAttribs; _0x593bdf++) {
        _0x162c1f.clientBuffers[_0x593bdf] = {
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
      _0x411a6a.generateTempBuffers(false, _0x162c1f);
      return _0x32a8ba;
    },
    makeContextCurrent: function (_0x1f54b) {
      _0x411a6a.currentContext = _0x411a6a.contexts[_0x1f54b];
      _0x4c150b.ctx = _0x5a54d9 = _0x411a6a.currentContext && _0x411a6a.currentContext.GLctx;
      return !_0x1f54b || !!_0x5a54d9;
    },
    getContext: function (_0x393fe3) {
      return _0x411a6a.contexts[_0x393fe3];
    },
    deleteContext: function (_0x1804fe) {
      if (_0x411a6a.currentContext === _0x411a6a.contexts[_0x1804fe]) {
        _0x411a6a.currentContext = null;
      }
      if (typeof _0x315133 === "object") {
        _0x315133.removeAllHandlersOnTarget(_0x411a6a.contexts[_0x1804fe].GLctx.canvas);
      }
      if (_0x411a6a.contexts[_0x1804fe] && _0x411a6a.contexts[_0x1804fe].GLctx.canvas) {
        _0x411a6a.contexts[_0x1804fe].GLctx.canvas.GLctxObject = undefined;
      }
      _0x411a6a.contexts[_0x1804fe] = null;
    },
    initExtensions: function (_0x1edda0) {
      if (!_0x1edda0) {
        _0x1edda0 = _0x411a6a.currentContext;
      }
      if (_0x1edda0.initExtensionsDone) {
        return;
      }
      _0x1edda0.initExtensionsDone = true;
      var _0x5bca4d = _0x1edda0.GLctx;
      _0x5093d0(_0x5bca4d);
      _0x5308b5(_0x5bca4d);
      _0x512b22(_0x5bca4d);
      _0x529f6d(_0x5bca4d);
      _0x36dd68(_0x5bca4d);
      if (_0x1edda0.version >= 2) {
        _0x5bca4d.disjointTimerQueryExt = _0x5bca4d.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x1edda0.version < 2 || !_0x5bca4d.disjointTimerQueryExt) {
        _0x5bca4d.disjointTimerQueryExt = _0x5bca4d.getExtension("EXT_disjoint_timer_query");
      }
      _0x1018bf(_0x5bca4d);
      var _0x1ae4a0 = _0x5bca4d.getSupportedExtensions() || [];
      _0x1ae4a0.forEach(function (_0x3e79ea) {
        if (!_0x3e79ea.includes("lose_context") && !_0x3e79ea.includes("debug")) {
          _0x5bca4d.getExtension(_0x3e79ea);
        }
      });
    }
  };
  var _0xb209d9 = ["default", "low-power", "high-performance"];
  function _0x2a3db3(_0x556395, _0x116726) {
    var _0x14ee53 = _0x116726 >> 2;
    var _0x4ab7e2 = _0x2beff6[_0x14ee53 + 6];
    var _0x4c4b34 = {
      alpha: !!_0x2beff6[_0x14ee53 + 0],
      depth: !!_0x2beff6[_0x14ee53 + 1],
      stencil: !!_0x2beff6[_0x14ee53 + 2],
      antialias: !!_0x2beff6[_0x14ee53 + 3],
      premultipliedAlpha: !!_0x2beff6[_0x14ee53 + 4],
      preserveDrawingBuffer: !!_0x2beff6[_0x14ee53 + 5],
      powerPreference: _0xb209d9[_0x4ab7e2],
      failIfMajorPerformanceCaveat: !!_0x2beff6[_0x14ee53 + 7],
      majorVersion: _0x2beff6[_0x14ee53 + 8],
      minorVersion: _0x2beff6[_0x14ee53 + 9],
      enableExtensionsByDefault: _0x2beff6[_0x14ee53 + 10],
      explicitSwapControl: _0x2beff6[_0x14ee53 + 11],
      proxyContextToMainThread: _0x2beff6[_0x14ee53 + 12],
      renderViaOffscreenBackBuffer: _0x2beff6[_0x14ee53 + 13]
    };
    var _0x48a89d = _0x5a129f(_0x556395);
    if (!_0x48a89d) {
      return 0;
    }
    if (_0x4c4b34.explicitSwapControl) {
      return 0;
    }
    var _0x3579a7 = _0x411a6a.createContext(_0x48a89d, _0x4c4b34);
    return _0x3579a7;
  }
  function _0x896fae(_0x29cf56, _0x3158d1) {
    return _0x2a3db3(_0x29cf56, _0x3158d1);
  }
  function _0x2eff63() {
    if (_0x411a6a.currentContext) {
      return _0x411a6a.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0x748f51() {
    return _0x2eff63();
  }
  _0x4c150b._emscripten_webgl_get_current_context = _0x748f51;
  function _0x1fd841(_0x489b49) {
    var _0x3e599c = _0x411a6a.makeContextCurrent(_0x489b49);
    if (_0x3e599c) {
      return 0;
    } else {
      return -5;
    }
  }
  _0x4c150b._emscripten_webgl_make_context_current = _0x1fd841;
  function _0x2cce12(_0x5383e1) {
    if (_0x411a6a.currentContext == _0x5383e1) {
      _0x411a6a.currentContext = 0;
    }
    _0x411a6a.deleteContext(_0x5383e1);
  }
  function _0x2e0cce(_0x3a859a, _0x34a2ac) {
    var _0x522f7d = _0x411a6a.getContext(_0x3a859a);
    var _0x128f0b = _0x211f48(_0x34a2ac);
    if (_0x128f0b.startsWith("GL_")) {
      _0x128f0b = _0x128f0b.substr(3);
    }
    if (_0x128f0b == "ANGLE_instanced_arrays") {
      _0x5093d0(_0x5a54d9);
    }
    if (_0x128f0b == "OES_vertex_array_object") {
      _0x5308b5(_0x5a54d9);
    }
    if (_0x128f0b == "WEBGL_draw_buffers") {
      _0x512b22(_0x5a54d9);
    }
    if (_0x128f0b == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0x529f6d(_0x5a54d9);
    }
    if (_0x128f0b == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x36dd68(_0x5a54d9);
    }
    if (_0x128f0b == "WEBGL_multi_draw") {
      _0x1018bf(_0x5a54d9);
    }
    var _0x35f6ca = _0x522f7d.GLctx.getExtension(_0x128f0b);
    return !!_0x35f6ca;
  }
  function _0x21980d(_0x2e5765) {
    var _0xd17663 = _0x2e5765 >> 2;
    for (var _0x184b67 = 0; _0x184b67 < 14; ++_0x184b67) {
      _0x2beff6[_0xd17663 + _0x184b67] = 0;
    }
    _0x2beff6[_0xd17663 + 0] = _0x2beff6[_0xd17663 + 1] = _0x2beff6[_0xd17663 + 3] = _0x2beff6[_0xd17663 + 4] = _0x2beff6[_0xd17663 + 8] = _0x2beff6[_0xd17663 + 10] = 1;
  }
  var _0x1a8af1 = {};
  function _0x43c3c1() {
    return _0x30671f || "./this.program";
  }
  function _0x2824e2() {
    if (!_0x2824e2.strings) {
      var _0x10520e = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0x4c735f = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0x10520e,
        _: _0x43c3c1()
      };
      for (var _0x582355 in _0x1a8af1) {
        _0x4c735f[_0x582355] = _0x1a8af1[_0x582355];
      }
      var _0x4952ce = [];
      for (var _0x582355 in _0x4c735f) {
        _0x4952ce.push(_0x582355 + "=" + _0x4c735f[_0x582355]);
      }
      _0x2824e2.strings = _0x4952ce;
    }
    return _0x2824e2.strings;
  }
  function _0x363690(_0x10fc33, _0x696369) {
    try {
      var _0x3580e7 = 0;
      _0x2824e2().forEach(function (_0xd179ef, _0x4a2e96) {
        var _0x28aa73 = _0x696369 + _0x3580e7;
        _0x2beff6[_0x10fc33 + _0x4a2e96 * 4 >> 2] = _0x28aa73;
        _0x5d94a1(_0xd179ef, _0x28aa73);
        _0x3580e7 += _0xd179ef.length + 1;
      });
      return 0;
    } catch (_0x1018b9) {
      if (typeof _0x31cd57 === "undefined" || !(_0x1018b9 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x1018b9);
      }
      return _0x1018b9.errno;
    }
  }
  function _0x262c67(_0x1ccbe3, _0x2516c9) {
    try {
      var _0x538c03 = _0x2824e2();
      _0x2beff6[_0x1ccbe3 >> 2] = _0x538c03.length;
      var _0x32e0d6 = 0;
      _0x538c03.forEach(function (_0x1ebe6d) {
        _0x32e0d6 += _0x1ebe6d.length + 1;
      });
      _0x2beff6[_0x2516c9 >> 2] = _0x32e0d6;
      return 0;
    } catch (_0x469a39) {
      if (typeof _0x31cd57 === "undefined" || !(_0x469a39 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x469a39);
      }
      return _0x469a39.errno;
    }
  }
  function _0x289026(_0xb7da8) {
    try {
      var _0x249da2 = _0x4283c9.getStreamFromFD(_0xb7da8);
      _0x31cd57.close(_0x249da2);
      return 0;
    } catch (_0x363c8f) {
      if (typeof _0x31cd57 === "undefined" || !(_0x363c8f instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x363c8f);
      }
      return _0x363c8f.errno;
    }
  }
  function _0x56da14(_0x29e023, _0x44224e) {
    try {
      var _0x52369d = _0x4283c9.getStreamFromFD(_0x29e023);
      var _0x872f64 = _0x52369d.tty ? 2 : _0x31cd57.isDir(_0x52369d.mode) ? 3 : _0x31cd57.isLink(_0x52369d.mode) ? 7 : 4;
      _0x381c0f[_0x44224e >> 0] = _0x872f64;
      return 0;
    } catch (_0x56345f) {
      if (typeof _0x31cd57 === "undefined" || !(_0x56345f instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x56345f);
      }
      return _0x56345f.errno;
    }
  }
  function _0x31d371(_0x2c8f3f, _0x299f4d, _0x4d5346, _0x15c75d) {
    try {
      var _0x360839 = _0x4283c9.getStreamFromFD(_0x2c8f3f);
      var _0x2c0a13 = _0x4283c9.doReadv(_0x360839, _0x299f4d, _0x4d5346);
      _0x2beff6[_0x15c75d >> 2] = _0x2c0a13;
      return 0;
    } catch (_0x2958d4) {
      if (typeof _0x31cd57 === "undefined" || !(_0x2958d4 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x2958d4);
      }
      return _0x2958d4.errno;
    }
  }
  function _0x3cd04c(_0x2e29fe, _0x59d9b7, _0x2df329, _0x441e91, _0x22221e) {
    try {
      var _0xa70744 = _0x4283c9.getStreamFromFD(_0x2e29fe);
      var _0x418ebb = 4294967296;
      var _0x3442c2 = _0x2df329 * _0x418ebb + (_0x59d9b7 >>> 0);
      var _0x484b8f = 9007199254740992;
      if (_0x3442c2 <= -_0x484b8f || _0x3442c2 >= _0x484b8f) {
        return -61;
      }
      _0x31cd57.llseek(_0xa70744, _0x3442c2, _0x441e91);
      _0x457bc9 = [_0xa70744.position >>> 0, (_0x46766e = _0xa70744.position, +Math.abs(_0x46766e) >= 1 ? _0x46766e > 0 ? (Math.min(+Math.floor(_0x46766e / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x46766e - +(~~_0x46766e >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x2beff6[_0x22221e >> 2] = _0x457bc9[0];
      _0x2beff6[_0x22221e + 4 >> 2] = _0x457bc9[1];
      if (_0xa70744.getdents && _0x3442c2 === 0 && _0x441e91 === 0) {
        _0xa70744.getdents = null;
      }
      return 0;
    } catch (_0x442f64) {
      if (typeof _0x31cd57 === "undefined" || !(_0x442f64 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x442f64);
      }
      return _0x442f64.errno;
    }
  }
  function _0x210483(_0x293f8b, _0x3335a9, _0xd60e7b, _0x2c5f7a) {
    try {
      var _0x158872 = _0x4283c9.getStreamFromFD(_0x293f8b);
      var _0x22202d = _0x4283c9.doWritev(_0x158872, _0x3335a9, _0xd60e7b);
      _0x2beff6[_0x2c5f7a >> 2] = _0x22202d;
      return 0;
    } catch (_0x23df65) {
      if (typeof _0x31cd57 === "undefined" || !(_0x23df65 instanceof _0x31cd57.ErrnoError)) {
        _0x25a973(_0x23df65);
      }
      return _0x23df65.errno;
    }
  }
  function _0x1dcb88(_0x3b9095, _0x34c6e1) {
    return 0;
  }
  function _0xe20103() {
    return _0x396fb2();
  }
  function _0x17ea3b(_0x181299, _0x41fabb, _0x43c9d7, _0x1686bd) {
    var _0x3eadfe = 0;
    var _0x3a54e0 = 0;
    var _0x4d9cbf = 0;
    var _0x29b82b = 0;
    var _0x3a692f = 0;
    var _0x2d3179 = 0;
    var _0x3fe3a4;
    function _0x29689f(_0x59e24c, _0x4117fb, _0x300fda, _0x2baff5, _0x1620ed, _0x226a45) {
      var _0x794ebe;
      var _0xb385c9;
      var _0x46e8ce;
      var _0x3dd15e;
      _0xb385c9 = _0x59e24c === 10 ? 28 : 16;
      _0x1620ed = _0x59e24c === 10 ? _0x1d5899(_0x1620ed) : _0x345e08(_0x1620ed);
      _0x794ebe = _0x5d6d4a(_0xb385c9);
      _0x3dd15e = _0x3f38b4(_0x794ebe, _0x59e24c, _0x1620ed, _0x226a45);
      _0x2c6ead(!_0x3dd15e);
      _0x46e8ce = _0x5d6d4a(32);
      _0x2beff6[_0x46e8ce + 4 >> 2] = _0x59e24c;
      _0x2beff6[_0x46e8ce + 8 >> 2] = _0x4117fb;
      _0x2beff6[_0x46e8ce + 12 >> 2] = _0x300fda;
      _0x2beff6[_0x46e8ce + 24 >> 2] = _0x2baff5;
      _0x2beff6[_0x46e8ce + 20 >> 2] = _0x794ebe;
      if (_0x59e24c === 10) {
        _0x2beff6[_0x46e8ce + 16 >> 2] = 28;
      } else {
        _0x2beff6[_0x46e8ce + 16 >> 2] = 16;
      }
      _0x2beff6[_0x46e8ce + 28 >> 2] = 0;
      return _0x46e8ce;
    }
    if (_0x43c9d7) {
      _0x4d9cbf = _0x2beff6[_0x43c9d7 >> 2];
      _0x29b82b = _0x2beff6[_0x43c9d7 + 4 >> 2];
      _0x3a692f = _0x2beff6[_0x43c9d7 + 8 >> 2];
      _0x2d3179 = _0x2beff6[_0x43c9d7 + 12 >> 2];
    }
    if (_0x3a692f && !_0x2d3179) {
      _0x2d3179 = _0x3a692f === 2 ? 17 : 6;
    }
    if (!_0x3a692f && _0x2d3179) {
      _0x3a692f = _0x2d3179 === 17 ? 2 : 1;
    }
    if (_0x2d3179 === 0) {
      _0x2d3179 = 6;
    }
    if (_0x3a692f === 0) {
      _0x3a692f = 1;
    }
    if (!_0x181299 && !_0x41fabb) {
      return -2;
    }
    if (_0x4d9cbf & ~1087) {
      return -1;
    }
    if (_0x43c9d7 !== 0 && _0x2beff6[_0x43c9d7 >> 2] & 2 && !_0x181299) {
      return -1;
    }
    if (_0x4d9cbf & 32) {
      return -2;
    }
    if (_0x3a692f !== 0 && _0x3a692f !== 1 && _0x3a692f !== 2) {
      return -7;
    }
    if (_0x29b82b !== 0 && _0x29b82b !== 2 && _0x29b82b !== 10) {
      return -6;
    }
    if (_0x41fabb) {
      _0x41fabb = _0x211f48(_0x41fabb);
      _0x3a54e0 = parseInt(_0x41fabb, 10);
      if (isNaN(_0x3a54e0)) {
        if (_0x4d9cbf & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0x181299) {
      if (_0x29b82b === 0) {
        _0x29b82b = 2;
      }
      if ((_0x4d9cbf & 1) === 0) {
        if (_0x29b82b === 2) {
          _0x3eadfe = _0x331b7c(2130706433);
        } else {
          _0x3eadfe = [0, 0, 0, 1];
        }
      }
      _0x3fe3a4 = _0x29689f(_0x29b82b, _0x3a692f, _0x2d3179, null, _0x3eadfe, _0x3a54e0);
      _0x2beff6[_0x1686bd >> 2] = _0x3fe3a4;
      return 0;
    }
    _0x181299 = _0x211f48(_0x181299);
    _0x3eadfe = _0x143d33(_0x181299);
    if (_0x3eadfe !== null) {
      if (_0x29b82b === 0 || _0x29b82b === 2) {
        _0x29b82b = 2;
      } else if (_0x29b82b === 10 && _0x4d9cbf & 8) {
        _0x3eadfe = [0, 0, _0x331b7c(65535), _0x3eadfe];
        _0x29b82b = 10;
      } else {
        return -2;
      }
    } else {
      _0x3eadfe = _0x2a18d2(_0x181299);
      if (_0x3eadfe !== null) {
        if (_0x29b82b === 0 || _0x29b82b === 10) {
          _0x29b82b = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0x3eadfe != null) {
      _0x3fe3a4 = _0x29689f(_0x29b82b, _0x3a692f, _0x2d3179, _0x181299, _0x3eadfe, _0x3a54e0);
      _0x2beff6[_0x1686bd >> 2] = _0x3fe3a4;
      return 0;
    }
    if (_0x4d9cbf & 4) {
      return -2;
    }
    _0x181299 = _0xde0157.lookup_name(_0x181299);
    _0x3eadfe = _0x143d33(_0x181299);
    if (_0x29b82b === 0) {
      _0x29b82b = 2;
    } else if (_0x29b82b === 10) {
      _0x3eadfe = [0, 0, _0x331b7c(65535), _0x3eadfe];
    }
    _0x3fe3a4 = _0x29689f(_0x29b82b, _0x3a692f, _0x2d3179, null, _0x3eadfe, _0x3a54e0);
    _0x2beff6[_0x1686bd >> 2] = _0x3fe3a4;
    return 0;
  }
  function _0x510fa4(_0x194ebb) {
    var _0x46e3ff = _0x5d6d4a(20);
    var _0x37cf28 = _0x5d6d4a(_0x194ebb.length + 1);
    _0x156f83(_0x194ebb, _0x37cf28, _0x194ebb.length + 1);
    _0x2beff6[_0x46e3ff >> 2] = _0x37cf28;
    var _0x555190 = _0x5d6d4a(4);
    _0x2beff6[_0x555190 >> 2] = 0;
    _0x2beff6[_0x46e3ff + 4 >> 2] = _0x555190;
    var _0x510d0d = 2;
    _0x2beff6[_0x46e3ff + 8 >> 2] = _0x510d0d;
    _0x2beff6[_0x46e3ff + 12 >> 2] = 4;
    var _0x45d370 = _0x5d6d4a(12);
    _0x2beff6[_0x45d370 >> 2] = _0x45d370 + 8;
    _0x2beff6[_0x45d370 + 4 >> 2] = 0;
    _0x2beff6[_0x45d370 + 8 >> 2] = _0x143d33(_0xde0157.lookup_name(_0x194ebb));
    _0x2beff6[_0x46e3ff + 16 >> 2] = _0x45d370;
    return _0x46e3ff;
  }
  function _0x1aba00(_0x236d55, _0x32bb2b, _0x541960) {
    if (_0x541960 !== 2) {
      _0x62bad8(5);
      return null;
    }
    _0x236d55 = _0x2beff6[_0x236d55 >> 2];
    var _0x3fdbb5 = _0x345e08(_0x236d55);
    var _0x50b274 = _0xde0157.lookup_addr(_0x3fdbb5);
    if (_0x50b274) {
      _0x3fdbb5 = _0x50b274;
    }
    return _0x510fa4(_0x3fdbb5);
  }
  function _0x5e5e10(_0x1192a6) {
    return _0x510fa4(_0x211f48(_0x1192a6));
  }
  function _0x44e7c2(_0x4f6179, _0x5d4ea2, _0x443254, _0x4c6f98, _0x1d0ec3, _0x3b5a6f, _0x1cba25) {
    var _0x35e3c6 = _0x2a19c5(_0x4f6179, _0x5d4ea2);
    if (_0x35e3c6.errno) {
      return -6;
    }
    var _0x4a709a = _0x35e3c6.port;
    var _0x583674 = _0x35e3c6.addr;
    var _0x12d620 = false;
    if (_0x443254 && _0x4c6f98) {
      var _0x1790ec;
      if (_0x1cba25 & 1 || !(_0x1790ec = _0xde0157.lookup_addr(_0x583674))) {
        if (_0x1cba25 & 8) {
          return -2;
        }
      } else {
        _0x583674 = _0x1790ec;
      }
      var _0x2e1380 = _0x156f83(_0x583674, _0x443254, _0x4c6f98);
      if (_0x2e1380 + 1 >= _0x4c6f98) {
        _0x12d620 = true;
      }
    }
    if (_0x1d0ec3 && _0x3b5a6f) {
      _0x4a709a = "" + _0x4a709a;
      var _0x2e1380 = _0x156f83(_0x4a709a, _0x1d0ec3, _0x3b5a6f);
      if (_0x2e1380 + 1 >= _0x3b5a6f) {
        _0x12d620 = true;
      }
    }
    if (_0x12d620) {
      return -12;
    }
    return 0;
  }
  function _0x3f18a0() {
    throw "getpwuid: TODO";
  }
  function _0x53bb7e(_0x3c3b20) {
    var _0x50580a = Date.now();
    _0x2beff6[_0x3c3b20 >> 2] = _0x50580a / 1000 | 0;
    _0x2beff6[_0x3c3b20 + 4 >> 2] = _0x50580a % 1000 * 1000 | 0;
    return 0;
  }
  function _0x5326b5(_0x1da1dd) {
    _0x5a54d9.activeTexture(_0x1da1dd);
  }
  function _0x1595ec(_0xb4a5d9, _0x510ba5) {
    _0xb4a5d9 = _0x411a6a.programs[_0xb4a5d9];
    _0x510ba5 = _0x411a6a.shaders[_0x510ba5];
    _0xb4a5d9[_0x510ba5.shaderType] = _0x510ba5;
    _0x5a54d9.attachShader(_0xb4a5d9, _0x510ba5);
  }
  function _0x29e3ee(_0x56fd64, _0x3ad50c) {
    _0x5a54d9.beginQuery(_0x56fd64, _0x411a6a.queries[_0x3ad50c]);
  }
  function _0x342c09(_0x5ce135) {
    _0x5a54d9.beginTransformFeedback(_0x5ce135);
  }
  function _0x7ede1f(_0x59daf1, _0x994e5f, _0x5efd03) {
    _0x5a54d9.bindAttribLocation(_0x411a6a.programs[_0x59daf1], _0x994e5f, _0x211f48(_0x5efd03));
  }
  function _0x4a58e7(_0x1166ad, _0x189a23) {
    if (_0x1166ad == 34962) {
      _0x5a54d9.currentArrayBufferBinding = _0x189a23;
    } else if (_0x1166ad == 34963) {
      _0x5a54d9.currentElementArrayBufferBinding = _0x189a23;
    }
    if (_0x1166ad == 35051) {
      _0x5a54d9.currentPixelPackBufferBinding = _0x189a23;
    } else if (_0x1166ad == 35052) {
      _0x5a54d9.currentPixelUnpackBufferBinding = _0x189a23;
    }
    _0x5a54d9.bindBuffer(_0x1166ad, _0x411a6a.buffers[_0x189a23]);
  }
  function _0x578c04(_0x327478, _0x389f82, _0x57c950) {
    _0x5a54d9.bindBufferBase(_0x327478, _0x389f82, _0x411a6a.buffers[_0x57c950]);
  }
  function _0x1332d8(_0x33535b, _0x242a8c, _0x65961f, _0x5301ea, _0x89b9c4) {
    _0x5a54d9.bindBufferRange(_0x33535b, _0x242a8c, _0x411a6a.buffers[_0x65961f], _0x5301ea, _0x89b9c4);
  }
  function _0x28a322(_0x2dc551, _0x29fe94) {
    _0x5a54d9.bindFramebuffer(_0x2dc551, _0x411a6a.framebuffers[_0x29fe94]);
  }
  function _0x2164f1(_0x307113, _0x18f5e0) {
    _0x5a54d9.bindRenderbuffer(_0x307113, _0x411a6a.renderbuffers[_0x18f5e0]);
  }
  function _0x1ea81a(_0xf68661, _0x3c86fd) {
    _0x5a54d9.bindSampler(_0xf68661, _0x411a6a.samplers[_0x3c86fd]);
  }
  function _0x5ad01b(_0x1a2fc3, _0x6ad825) {
    _0x5a54d9.bindTexture(_0x1a2fc3, _0x411a6a.textures[_0x6ad825]);
  }
  function _0x336272(_0x1be921, _0x1c3f84) {
    _0x5a54d9.bindTransformFeedback(_0x1be921, _0x411a6a.transformFeedbacks[_0x1c3f84]);
  }
  function _0x4966ef(_0x11b7fc) {
    _0x5a54d9.bindVertexArray(_0x411a6a.vaos[_0x11b7fc]);
    var _0x46787a = _0x5a54d9.getParameter(34965);
    _0x5a54d9.currentElementArrayBufferBinding = _0x46787a ? _0x46787a.name | 0 : 0;
  }
  function _0x3b6786(_0x12f5c3) {
    _0x5a54d9.blendEquation(_0x12f5c3);
  }
  function _0x13fc0a(_0x12231f, _0x2e1d9f) {
    _0x5a54d9.blendEquationSeparate(_0x12231f, _0x2e1d9f);
  }
  function _0x1e6932(_0x56ee76, _0xd394b8, _0x3cf7c1, _0x16c89f) {
    _0x5a54d9.blendFuncSeparate(_0x56ee76, _0xd394b8, _0x3cf7c1, _0x16c89f);
  }
  function _0x2328ce(_0x188458, _0x3025a1, _0x2e7ec9, _0x4440e9, _0x134533, _0x391e2b, _0x2d6ec0, _0x41f6f9, _0x496a83, _0x22836c) {
    _0x5a54d9.blitFramebuffer(_0x188458, _0x3025a1, _0x2e7ec9, _0x4440e9, _0x134533, _0x391e2b, _0x2d6ec0, _0x41f6f9, _0x496a83, _0x22836c);
  }
  function _0x5a7c64(_0x387661, _0x14d51f, _0x409203, _0x4b0a5f) {
    if (_0x411a6a.currentContext.version >= 2) {
      if (_0x409203) {
        _0x5a54d9.bufferData(_0x387661, _0x298c61, _0x4b0a5f, _0x409203, _0x14d51f);
      } else {
        _0x5a54d9.bufferData(_0x387661, _0x14d51f, _0x4b0a5f);
      }
    } else {
      _0x5a54d9.bufferData(_0x387661, _0x409203 ? _0x298c61.subarray(_0x409203, _0x409203 + _0x14d51f) : _0x14d51f, _0x4b0a5f);
    }
  }
  function _0x4a797f(_0x2a5853, _0x269103, _0x5e2d48, _0x3947b4) {
    if (_0x411a6a.currentContext.version >= 2) {
      _0x5a54d9.bufferSubData(_0x2a5853, _0x269103, _0x298c61, _0x3947b4, _0x5e2d48);
      return;
    }
    _0x5a54d9.bufferSubData(_0x2a5853, _0x269103, _0x298c61.subarray(_0x3947b4, _0x3947b4 + _0x5e2d48));
  }
  function _0x356767(_0x50485b) {
    return _0x5a54d9.checkFramebufferStatus(_0x50485b);
  }
  function _0xad4a21(_0x51bbf3) {
    _0x5a54d9.clear(_0x51bbf3);
  }
  function _0x3ca518(_0x4c1a8e, _0x1572e6, _0x1bae52, _0x2c752d) {
    _0x5a54d9.clearBufferfi(_0x4c1a8e, _0x1572e6, _0x1bae52, _0x2c752d);
  }
  function _0x152616(_0x39f53a, _0x2bdb52, _0x425a4a) {
    _0x5a54d9.clearBufferfv(_0x39f53a, _0x2bdb52, _0x5277b0, _0x425a4a >> 2);
  }
  function _0x1cd177(_0x461d4e, _0x15eaf2, _0x4bb8df) {
    _0x5a54d9.clearBufferuiv(_0x461d4e, _0x15eaf2, _0x36d14b, _0x4bb8df >> 2);
  }
  function _0x36a2f3(_0x45a883, _0x50ab98, _0x140bf4, _0x287651) {
    _0x5a54d9.clearColor(_0x45a883, _0x50ab98, _0x140bf4, _0x287651);
  }
  function _0x5ef7eb(_0x958077) {
    _0x5a54d9.clearDepth(_0x958077);
  }
  function _0x1e0d5d(_0x3028f8) {
    _0x5a54d9.clearStencil(_0x3028f8);
  }
  function _0x5ea2e7(_0x11ae57, _0x4e09ef, _0x8c6297, _0x359882) {
    return _0x5a54d9.clientWaitSync(_0x411a6a.syncs[_0x11ae57], _0x4e09ef, _0x441bb8(_0x8c6297, _0x359882));
  }
  function _0x3fcc74(_0x1d2982, _0x48d3d2, _0x3c96c8, _0x395c7a) {
    _0x5a54d9.colorMask(!!_0x1d2982, !!_0x48d3d2, !!_0x3c96c8, !!_0x395c7a);
  }
  function _0x2d6e1f(_0x1c2cbc) {
    _0x5a54d9.compileShader(_0x411a6a.shaders[_0x1c2cbc]);
  }
  function _0x42cd22(_0x1c89e9, _0x1cf194, _0x3379ba, _0x24d762, _0x2b44a2, _0x138298, _0x4f48d5, _0xc4499a) {
    if (_0x411a6a.currentContext.version >= 2) {
      if (_0x5a54d9.currentPixelUnpackBufferBinding) {
        _0x5a54d9.compressedTexImage2D(_0x1c89e9, _0x1cf194, _0x3379ba, _0x24d762, _0x2b44a2, _0x138298, _0x4f48d5, _0xc4499a);
      } else {
        _0x5a54d9.compressedTexImage2D(_0x1c89e9, _0x1cf194, _0x3379ba, _0x24d762, _0x2b44a2, _0x138298, _0x298c61, _0xc4499a, _0x4f48d5);
      }
      return;
    }
    _0x5a54d9.compressedTexImage2D(_0x1c89e9, _0x1cf194, _0x3379ba, _0x24d762, _0x2b44a2, _0x138298, _0xc4499a ? _0x298c61.subarray(_0xc4499a, _0xc4499a + _0x4f48d5) : null);
  }
  function _0x464964(_0xcf508f, _0x3f533a, _0x5bf4fd, _0x2f9b9d, _0x18fd6c, _0x55932d, _0xc3e50d, _0x5a7b41, _0x3b249f) {
    if (_0x5a54d9.currentPixelUnpackBufferBinding) {
      _0x5a54d9.compressedTexImage3D(_0xcf508f, _0x3f533a, _0x5bf4fd, _0x2f9b9d, _0x18fd6c, _0x55932d, _0xc3e50d, _0x5a7b41, _0x3b249f);
    } else {
      _0x5a54d9.compressedTexImage3D(_0xcf508f, _0x3f533a, _0x5bf4fd, _0x2f9b9d, _0x18fd6c, _0x55932d, _0xc3e50d, _0x298c61, _0x3b249f, _0x5a7b41);
    }
  }
  function _0x381b5a(_0x55c266, _0x255ce4, _0x15d6f4, _0x8f4c75, _0x16c2cf, _0x3a002b, _0x28fa98, _0x164740, _0x33d6be) {
    if (_0x411a6a.currentContext.version >= 2) {
      if (_0x5a54d9.currentPixelUnpackBufferBinding) {
        _0x5a54d9.compressedTexSubImage2D(_0x55c266, _0x255ce4, _0x15d6f4, _0x8f4c75, _0x16c2cf, _0x3a002b, _0x28fa98, _0x164740, _0x33d6be);
      } else {
        _0x5a54d9.compressedTexSubImage2D(_0x55c266, _0x255ce4, _0x15d6f4, _0x8f4c75, _0x16c2cf, _0x3a002b, _0x28fa98, _0x298c61, _0x33d6be, _0x164740);
      }
      return;
    }
    _0x5a54d9.compressedTexSubImage2D(_0x55c266, _0x255ce4, _0x15d6f4, _0x8f4c75, _0x16c2cf, _0x3a002b, _0x28fa98, _0x33d6be ? _0x298c61.subarray(_0x33d6be, _0x33d6be + _0x164740) : null);
  }
  function _0x5c2cec(_0x16a281, _0x4eaa8f, _0x54b1c4, _0x55e946, _0x51a506, _0x3c9e32, _0x566749, _0x5968dc, _0x10404f, _0x65f9ba, _0xffbbe2) {
    if (_0x5a54d9.currentPixelUnpackBufferBinding) {
      _0x5a54d9.compressedTexSubImage3D(_0x16a281, _0x4eaa8f, _0x54b1c4, _0x55e946, _0x51a506, _0x3c9e32, _0x566749, _0x5968dc, _0x10404f, _0x65f9ba, _0xffbbe2);
    } else {
      _0x5a54d9.compressedTexSubImage3D(_0x16a281, _0x4eaa8f, _0x54b1c4, _0x55e946, _0x51a506, _0x3c9e32, _0x566749, _0x5968dc, _0x10404f, _0x298c61, _0xffbbe2, _0x65f9ba);
    }
  }
  function _0x3a8334(_0x2d13f2, _0x3ebb46, _0x3484f4, _0x434c3a, _0x36d9ba) {
    _0x5a54d9.copyBufferSubData(_0x2d13f2, _0x3ebb46, _0x3484f4, _0x434c3a, _0x36d9ba);
  }
  function _0x34a2de(_0x3f0747, _0x25f98d, _0x17c793, _0x4bf6b5, _0x22ffb2, _0x1d0fdc, _0x496bde, _0x12c13a) {
    _0x5a54d9.copyTexImage2D(_0x3f0747, _0x25f98d, _0x17c793, _0x4bf6b5, _0x22ffb2, _0x1d0fdc, _0x496bde, _0x12c13a);
  }
  function _0x416953(_0x2b675b, _0x554262, _0x29a5a9, _0x2455c5, _0x3068f5, _0x242126, _0x2dd92b, _0xdb4c6e) {
    _0x5a54d9.copyTexSubImage2D(_0x2b675b, _0x554262, _0x29a5a9, _0x2455c5, _0x3068f5, _0x242126, _0x2dd92b, _0xdb4c6e);
  }
  function _0x1c8168() {
    var _0x1a6eeb = _0x411a6a.getNewId(_0x411a6a.programs);
    var _0x5dfc82 = _0x5a54d9.createProgram();
    _0x5dfc82.name = _0x1a6eeb;
    _0x5dfc82.maxUniformLength = _0x5dfc82.maxAttributeLength = _0x5dfc82.maxUniformBlockNameLength = 0;
    _0x5dfc82.uniformIdCounter = 1;
    _0x411a6a.programs[_0x1a6eeb] = _0x5dfc82;
    return _0x1a6eeb;
  }
  function _0x1ad397(_0x400b9e) {
    var _0x5e526b = _0x411a6a.getNewId(_0x411a6a.shaders);
    _0x411a6a.shaders[_0x5e526b] = _0x5a54d9.createShader(_0x400b9e);
    _0x411a6a.shaders[_0x5e526b].shaderType = _0x400b9e & 1 ? "vs" : "fs";
    return _0x5e526b;
  }
  function _0x2f695b(_0x5b1d49) {
    _0x5a54d9.cullFace(_0x5b1d49);
  }
  function _0x5394d3(_0x274a7c, _0x53a049) {
    for (var _0x765884 = 0; _0x765884 < _0x274a7c; _0x765884++) {
      var _0x2450c9 = _0x2beff6[_0x53a049 + _0x765884 * 4 >> 2];
      var _0x3a19df = _0x411a6a.buffers[_0x2450c9];
      if (!_0x3a19df) {
        continue;
      }
      _0x5a54d9.deleteBuffer(_0x3a19df);
      _0x3a19df.name = 0;
      _0x411a6a.buffers[_0x2450c9] = null;
      if (_0x2450c9 == _0x5a54d9.currentArrayBufferBinding) {
        _0x5a54d9.currentArrayBufferBinding = 0;
      }
      if (_0x2450c9 == _0x5a54d9.currentElementArrayBufferBinding) {
        _0x5a54d9.currentElementArrayBufferBinding = 0;
      }
      if (_0x2450c9 == _0x5a54d9.currentPixelPackBufferBinding) {
        _0x5a54d9.currentPixelPackBufferBinding = 0;
      }
      if (_0x2450c9 == _0x5a54d9.currentPixelUnpackBufferBinding) {
        _0x5a54d9.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0x130415(_0xdff89a, _0x2414c1) {
    for (var _0x20872c = 0; _0x20872c < _0xdff89a; ++_0x20872c) {
      var _0x248017 = _0x2beff6[_0x2414c1 + _0x20872c * 4 >> 2];
      var _0x4277dc = _0x411a6a.framebuffers[_0x248017];
      if (!_0x4277dc) {
        continue;
      }
      _0x5a54d9.deleteFramebuffer(_0x4277dc);
      _0x4277dc.name = 0;
      _0x411a6a.framebuffers[_0x248017] = null;
    }
  }
  function _0x11d09b(_0x41c218) {
    if (!_0x41c218) {
      return;
    }
    var _0x337a06 = _0x411a6a.programs[_0x41c218];
    if (!_0x337a06) {
      _0x411a6a.recordError(1281);
      return;
    }
    _0x5a54d9.deleteProgram(_0x337a06);
    _0x337a06.name = 0;
    _0x411a6a.programs[_0x41c218] = null;
  }
  function _0x138b36(_0x1a7bd1, _0x3acb2d) {
    for (var _0x4edf08 = 0; _0x4edf08 < _0x1a7bd1; _0x4edf08++) {
      var _0x9f1ed7 = _0x2beff6[_0x3acb2d + _0x4edf08 * 4 >> 2];
      var _0x5b211b = _0x411a6a.queries[_0x9f1ed7];
      if (!_0x5b211b) {
        continue;
      }
      _0x5a54d9.deleteQuery(_0x5b211b);
      _0x411a6a.queries[_0x9f1ed7] = null;
    }
  }
  function _0x511887(_0x56f62b, _0x2ae09d) {
    for (var _0x45c22c = 0; _0x45c22c < _0x56f62b; _0x45c22c++) {
      var _0x4ff324 = _0x2beff6[_0x2ae09d + _0x45c22c * 4 >> 2];
      var _0x46c95b = _0x411a6a.renderbuffers[_0x4ff324];
      if (!_0x46c95b) {
        continue;
      }
      _0x5a54d9.deleteRenderbuffer(_0x46c95b);
      _0x46c95b.name = 0;
      _0x411a6a.renderbuffers[_0x4ff324] = null;
    }
  }
  function _0x1be4aa(_0x49beb5, _0x1083b4) {
    for (var _0x1f5cd3 = 0; _0x1f5cd3 < _0x49beb5; _0x1f5cd3++) {
      var _0x5aeefb = _0x2beff6[_0x1083b4 + _0x1f5cd3 * 4 >> 2];
      var _0x12690b = _0x411a6a.samplers[_0x5aeefb];
      if (!_0x12690b) {
        continue;
      }
      _0x5a54d9.deleteSampler(_0x12690b);
      _0x12690b.name = 0;
      _0x411a6a.samplers[_0x5aeefb] = null;
    }
  }
  function _0x4bb4a6(_0x55e863) {
    if (!_0x55e863) {
      return;
    }
    var _0x4f7e4a = _0x411a6a.shaders[_0x55e863];
    if (!_0x4f7e4a) {
      _0x411a6a.recordError(1281);
      return;
    }
    _0x5a54d9.deleteShader(_0x4f7e4a);
    _0x411a6a.shaders[_0x55e863] = null;
  }
  function _0x7613cc(_0x4523f4) {
    if (!_0x4523f4) {
      return;
    }
    var _0x56340c = _0x411a6a.syncs[_0x4523f4];
    if (!_0x56340c) {
      _0x411a6a.recordError(1281);
      return;
    }
    _0x5a54d9.deleteSync(_0x56340c);
    _0x56340c.name = 0;
    _0x411a6a.syncs[_0x4523f4] = null;
  }
  function _0xae8605(_0x16fc9b, _0x28f265) {
    for (var _0x37f743 = 0; _0x37f743 < _0x16fc9b; _0x37f743++) {
      var _0x2e66cd = _0x2beff6[_0x28f265 + _0x37f743 * 4 >> 2];
      var _0x287589 = _0x411a6a.textures[_0x2e66cd];
      if (!_0x287589) {
        continue;
      }
      _0x5a54d9.deleteTexture(_0x287589);
      _0x287589.name = 0;
      _0x411a6a.textures[_0x2e66cd] = null;
    }
  }
  function _0x5b66dd(_0x4de8f2, _0x1f8009) {
    for (var _0x53b80a = 0; _0x53b80a < _0x4de8f2; _0x53b80a++) {
      var _0x5ee8ef = _0x2beff6[_0x1f8009 + _0x53b80a * 4 >> 2];
      var _0x478f52 = _0x411a6a.transformFeedbacks[_0x5ee8ef];
      if (!_0x478f52) {
        continue;
      }
      _0x5a54d9.deleteTransformFeedback(_0x478f52);
      _0x478f52.name = 0;
      _0x411a6a.transformFeedbacks[_0x5ee8ef] = null;
    }
  }
  function _0x5df30f(_0x5a1712, _0x433bdf) {
    for (var _0x18da3a = 0; _0x18da3a < _0x5a1712; _0x18da3a++) {
      var _0x28b624 = _0x2beff6[_0x433bdf + _0x18da3a * 4 >> 2];
      _0x5a54d9.deleteVertexArray(_0x411a6a.vaos[_0x28b624]);
      _0x411a6a.vaos[_0x28b624] = null;
    }
  }
  function _0x2c9f22(_0x1f4c63) {
    _0x5a54d9.depthFunc(_0x1f4c63);
  }
  function _0x1de7b9(_0x413d21) {
    _0x5a54d9.depthMask(!!_0x413d21);
  }
  function _0x30e1e0(_0x127920, _0x748d50) {
    _0x5a54d9.detachShader(_0x411a6a.programs[_0x127920], _0x411a6a.shaders[_0x748d50]);
  }
  function _0x5f4fa2(_0x58c247) {
    _0x5a54d9.disable(_0x58c247);
  }
  function _0x24b416(_0x46c1c9) {
    var _0x4fea32 = _0x411a6a.currentContext.clientBuffers[_0x46c1c9];
    _0x4fea32.enabled = false;
    _0x5a54d9.disableVertexAttribArray(_0x46c1c9);
  }
  function _0x7aab2d(_0x2c40e0, _0xe0c8a2, _0x5ba60a) {
    _0x411a6a.preDrawHandleClientVertexAttribBindings(_0xe0c8a2 + _0x5ba60a);
    _0x5a54d9.drawArrays(_0x2c40e0, _0xe0c8a2, _0x5ba60a);
    _0x411a6a.postDrawHandleClientVertexAttribBindings();
  }
  function _0x5c32a0(_0x2a81a2, _0x231e5e, _0x4edadb, _0x576080) {
    _0x5a54d9.drawArraysInstanced(_0x2a81a2, _0x231e5e, _0x4edadb, _0x576080);
  }
  var _0x4ccae0 = [];
  function _0x52646f(_0x2d773c, _0x2e315c) {
    var _0x163b0a = _0x4ccae0[_0x2d773c];
    for (var _0xb2d31d = 0; _0xb2d31d < _0x2d773c; _0xb2d31d++) {
      _0x163b0a[_0xb2d31d] = _0x2beff6[_0x2e315c + _0xb2d31d * 4 >> 2];
    }
    _0x5a54d9.drawBuffers(_0x163b0a);
  }
  function _0x3b5d95(_0x4c43aa, _0x2c5af6, _0x385bfb, _0x4c1744) {
    var _0x4790b1;
    if (!_0x5a54d9.currentElementArrayBufferBinding) {
      var _0x39d588 = _0x411a6a.calcBufLength(1, _0x385bfb, 0, _0x2c5af6);
      _0x4790b1 = _0x411a6a.getTempIndexBuffer(_0x39d588);
      _0x5a54d9.bindBuffer(34963, _0x4790b1);
      _0x5a54d9.bufferSubData(34963, 0, _0x298c61.subarray(_0x4c1744, _0x4c1744 + _0x39d588));
      _0x4c1744 = 0;
    }
    _0x411a6a.preDrawHandleClientVertexAttribBindings(_0x2c5af6);
    _0x5a54d9.drawElements(_0x4c43aa, _0x2c5af6, _0x385bfb, _0x4c1744);
    _0x411a6a.postDrawHandleClientVertexAttribBindings(_0x2c5af6);
    if (!_0x5a54d9.currentElementArrayBufferBinding) {
      _0x5a54d9.bindBuffer(34963, null);
    }
  }
  function _0x1c14d8(_0x320736, _0x10101a, _0x2a9087, _0x2f92b7, _0x59ae33) {
    _0x5a54d9.drawElementsInstanced(_0x320736, _0x10101a, _0x2a9087, _0x2f92b7, _0x59ae33);
  }
  function _0x15222d(_0x35224e) {
    _0x5a54d9.enable(_0x35224e);
  }
  function _0x3a3a7b(_0x1bdec5) {
    var _0x270b43 = _0x411a6a.currentContext.clientBuffers[_0x1bdec5];
    _0x270b43.enabled = true;
    _0x5a54d9.enableVertexAttribArray(_0x1bdec5);
  }
  function _0x1846f0(_0x3e8f57) {
    _0x5a54d9.endQuery(_0x3e8f57);
  }
  function _0x244b28() {
    _0x5a54d9.endTransformFeedback();
  }
  function _0x4d5ac8(_0x2a62ef, _0x49e9b6) {
    var _0x154f96 = _0x5a54d9.fenceSync(_0x2a62ef, _0x49e9b6);
    if (_0x154f96) {
      var _0x5748ea = _0x411a6a.getNewId(_0x411a6a.syncs);
      _0x154f96.name = _0x5748ea;
      _0x411a6a.syncs[_0x5748ea] = _0x154f96;
      return _0x5748ea;
    } else {
      return 0;
    }
  }
  function _0x14df90() {
    _0x5a54d9.finish();
  }
  function _0x3a5bf9() {
    _0x5a54d9.flush();
  }
  function _0x3e9edc(_0x27bdc7) {
    switch (_0x27bdc7) {
      case 34962:
        _0x27bdc7 = 34964;
        break;
      case 34963:
        _0x27bdc7 = 34965;
        break;
      case 35051:
        _0x27bdc7 = 35053;
        break;
      case 35052:
        _0x27bdc7 = 35055;
        break;
      case 35982:
        _0x27bdc7 = 35983;
        break;
      case 36662:
        _0x27bdc7 = 36662;
        break;
      case 36663:
        _0x27bdc7 = 36663;
        break;
      case 35345:
        _0x27bdc7 = 35368;
        break;
    }
    var _0x17e001 = _0x5a54d9.getParameter(_0x27bdc7);
    if (_0x17e001) {
      return _0x17e001.name | 0;
    } else {
      return 0;
    }
  }
  function _0x4c09ed(_0x286a5c) {
    switch (_0x286a5c) {
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
  function _0x43b558(_0xb2968, _0x541525, _0x1d0406) {
    if (!_0x4c09ed(_0xb2968)) {
      _0x411a6a.recordError(1280);
      _0x5761f3("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0x2c946c = _0x411a6a.mappedBuffers[_0x3e9edc(_0xb2968)];
    if (!_0x2c946c) {
      _0x411a6a.recordError(1282);
      _0x5761f3("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0x2c946c.access & 16)) {
      _0x411a6a.recordError(1282);
      _0x5761f3("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x541525 < 0 || _0x1d0406 < 0 || _0x541525 + _0x1d0406 > _0x2c946c.length) {
      _0x411a6a.recordError(1281);
      _0x5761f3("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0x5a54d9.bufferSubData(_0xb2968, _0x2c946c.offset, _0x298c61.subarray(_0x2c946c.mem + _0x541525, _0x2c946c.mem + _0x541525 + _0x1d0406));
  }
  function _0xa72971(_0xff1acf, _0x1c8948, _0x219ab1, _0x1fc61e) {
    _0x5a54d9.framebufferRenderbuffer(_0xff1acf, _0x1c8948, _0x219ab1, _0x411a6a.renderbuffers[_0x1fc61e]);
  }
  function _0x548ad1(_0x334c7e, _0x7ff6b7, _0x5f18ca, _0x26c2be, _0x75ea3b) {
    _0x5a54d9.framebufferTexture2D(_0x334c7e, _0x7ff6b7, _0x5f18ca, _0x411a6a.textures[_0x26c2be], _0x75ea3b);
  }
  function _0x258e82(_0x16ed53, _0x3f51b4, _0x1ddfcb, _0x3708e8, _0x1a0c23) {
    _0x5a54d9.framebufferTextureLayer(_0x16ed53, _0x3f51b4, _0x411a6a.textures[_0x1ddfcb], _0x3708e8, _0x1a0c23);
  }
  function _0x54150f(_0x536bbc) {
    _0x5a54d9.frontFace(_0x536bbc);
  }
  function _0x3f28a3(_0x1eab33, _0x2de039, _0x218e09, _0x4ae6b4) {
    for (var _0x1f68bf = 0; _0x1f68bf < _0x1eab33; _0x1f68bf++) {
      var _0x2dd90b = _0x5a54d9[_0x218e09]();
      var _0x3f32e6 = _0x2dd90b && _0x411a6a.getNewId(_0x4ae6b4);
      if (_0x2dd90b) {
        _0x2dd90b.name = _0x3f32e6;
        _0x4ae6b4[_0x3f32e6] = _0x2dd90b;
      } else {
        _0x411a6a.recordError(1282);
      }
      _0x2beff6[_0x2de039 + _0x1f68bf * 4 >> 2] = _0x3f32e6;
    }
  }
  function _0x567a4c(_0x4273e0, _0x409de8) {
    _0x3f28a3(_0x4273e0, _0x409de8, "createBuffer", _0x411a6a.buffers);
  }
  function _0x4612de(_0x496d35, _0x45175e) {
    _0x3f28a3(_0x496d35, _0x45175e, "createFramebuffer", _0x411a6a.framebuffers);
  }
  function _0x505cda(_0xa64ecf, _0x5d5a74) {
    _0x3f28a3(_0xa64ecf, _0x5d5a74, "createQuery", _0x411a6a.queries);
  }
  function _0x17ef8e(_0x34d7d5, _0x23f91f) {
    _0x3f28a3(_0x34d7d5, _0x23f91f, "createRenderbuffer", _0x411a6a.renderbuffers);
  }
  function _0x36c3cf(_0x21fa88, _0x19b03b) {
    _0x3f28a3(_0x21fa88, _0x19b03b, "createSampler", _0x411a6a.samplers);
  }
  function _0x27ceb3(_0x11cdaf, _0x3d9549) {
    _0x3f28a3(_0x11cdaf, _0x3d9549, "createTexture", _0x411a6a.textures);
  }
  function _0x3077a7(_0x21509a, _0x35f458) {
    _0x3f28a3(_0x21509a, _0x35f458, "createTransformFeedback", _0x411a6a.transformFeedbacks);
  }
  function _0x155927(_0xe6b812, _0x3630d1) {
    _0x3f28a3(_0xe6b812, _0x3630d1, "createVertexArray", _0x411a6a.vaos);
  }
  function _0x406cc6(_0x430131) {
    _0x5a54d9.generateMipmap(_0x430131);
  }
  function _0x5c2d5f(_0x87a20, _0x1e3fe8, _0x1ded90, _0x4d67ff, _0x35e0f2, _0x40baef, _0x36c039, _0x64c33) {
    _0x1e3fe8 = _0x411a6a.programs[_0x1e3fe8];
    var _0x40e64c = _0x5a54d9[_0x87a20](_0x1e3fe8, _0x1ded90);
    if (_0x40e64c) {
      var _0x4bc03f = _0x64c33 && _0x156f83(_0x40e64c.name, _0x64c33, _0x4d67ff);
      if (_0x35e0f2) {
        _0x2beff6[_0x35e0f2 >> 2] = _0x4bc03f;
      }
      if (_0x40baef) {
        _0x2beff6[_0x40baef >> 2] = _0x40e64c.size;
      }
      if (_0x36c039) {
        _0x2beff6[_0x36c039 >> 2] = _0x40e64c.type;
      }
    }
  }
  function _0x23aa3b(_0x5557ec, _0x5755c1, _0x341bbd, _0x493c06, _0x49c850, _0x5042b3, _0x50ff34) {
    _0x5c2d5f("getActiveAttrib", _0x5557ec, _0x5755c1, _0x341bbd, _0x493c06, _0x49c850, _0x5042b3, _0x50ff34);
  }
  function _0x1aae0d(_0x1f711e, _0x404314, _0x4b6217, _0x24648f, _0xa51f8b, _0x4fdea0, _0x5ac759) {
    _0x5c2d5f("getActiveUniform", _0x1f711e, _0x404314, _0x4b6217, _0x24648f, _0xa51f8b, _0x4fdea0, _0x5ac759);
  }
  function _0x5836bb(_0x271ac0, _0x3a76ce, _0xac66dd, _0x1e10f7, _0x49c303) {
    _0x271ac0 = _0x411a6a.programs[_0x271ac0];
    var _0x5a63bd = _0x5a54d9.getActiveUniformBlockName(_0x271ac0, _0x3a76ce);
    if (!_0x5a63bd) {
      return;
    }
    if (_0x49c303 && _0xac66dd > 0) {
      var _0x26e209 = _0x156f83(_0x5a63bd, _0x49c303, _0xac66dd);
      if (_0x1e10f7) {
        _0x2beff6[_0x1e10f7 >> 2] = _0x26e209;
      }
    } else if (_0x1e10f7) {
      _0x2beff6[_0x1e10f7 >> 2] = 0;
    }
  }
  function _0x3aa7bc(_0x472cb8, _0x49acf3, _0x1ea9fd, _0x541d97) {
    if (!_0x541d97) {
      _0x411a6a.recordError(1281);
      return;
    }
    _0x472cb8 = _0x411a6a.programs[_0x472cb8];
    if (_0x1ea9fd == 35393) {
      var _0x5795af = _0x5a54d9.getActiveUniformBlockName(_0x472cb8, _0x49acf3);
      _0x2beff6[_0x541d97 >> 2] = _0x5795af.length + 1;
      return;
    }
    var _0x5f27ec = _0x5a54d9.getActiveUniformBlockParameter(_0x472cb8, _0x49acf3, _0x1ea9fd);
    if (_0x5f27ec === null) {
      return;
    }
    if (_0x1ea9fd == 35395) {
      for (var _0x29692d = 0; _0x29692d < _0x5f27ec.length; _0x29692d++) {
        _0x2beff6[_0x541d97 + _0x29692d * 4 >> 2] = _0x5f27ec[_0x29692d];
      }
    } else {
      _0x2beff6[_0x541d97 >> 2] = _0x5f27ec;
    }
  }
  function _0x72ec7b(_0x55b65d, _0x2b580a, _0x3f3576, _0x29e832, _0x52f4d0) {
    if (!_0x52f4d0) {
      _0x411a6a.recordError(1281);
      return;
    }
    if (_0x2b580a > 0 && _0x3f3576 == 0) {
      _0x411a6a.recordError(1281);
      return;
    }
    _0x55b65d = _0x411a6a.programs[_0x55b65d];
    var _0x46c1f5 = [];
    for (var _0xc199af = 0; _0xc199af < _0x2b580a; _0xc199af++) {
      _0x46c1f5.push(_0x2beff6[_0x3f3576 + _0xc199af * 4 >> 2]);
    }
    var _0xd2a710 = _0x5a54d9.getActiveUniforms(_0x55b65d, _0x46c1f5, _0x29e832);
    if (!_0xd2a710) {
      return;
    }
    var _0x229fe4 = _0xd2a710.length;
    for (var _0xc199af = 0; _0xc199af < _0x229fe4; _0xc199af++) {
      _0x2beff6[_0x52f4d0 + _0xc199af * 4 >> 2] = _0xd2a710[_0xc199af];
    }
  }
  function _0x9c455b(_0xe4f0d3, _0x111454) {
    return _0x5a54d9.getAttribLocation(_0x411a6a.programs[_0xe4f0d3], _0x211f48(_0x111454));
  }
  function _0x4279c9(_0xf22197, _0x9fa67a, _0x24e595, _0x5e9442) {
    if (!_0x5e9442) {
      _0x411a6a.recordError(1281);
      return;
    }
    _0x5a54d9.getBufferSubData(_0xf22197, _0x9fa67a, _0x298c61, _0x5e9442, _0x24e595);
  }
  function _0x561021() {
    var _0x160181 = _0x5a54d9.getError() || _0x411a6a.lastError;
    _0x411a6a.lastError = 0;
    return _0x160181;
  }
  function _0xdd9ed9(_0x290e36, _0x4df4a7, _0x30b651, _0x25a495) {
    var _0x2715e2 = _0x5a54d9.getFramebufferAttachmentParameter(_0x290e36, _0x4df4a7, _0x30b651);
    if (_0x2715e2 instanceof WebGLRenderbuffer || _0x2715e2 instanceof WebGLTexture) {
      _0x2715e2 = _0x2715e2.name | 0;
    }
    _0x2beff6[_0x25a495 >> 2] = _0x2715e2;
  }
  function _0x54448a(_0x53b8bc, _0x3183f0) {
    _0x36d14b[_0x53b8bc >> 2] = _0x3183f0;
    _0x36d14b[_0x53b8bc + 4 >> 2] = (_0x3183f0 - _0x36d14b[_0x53b8bc >> 2]) / 4294967296;
  }
  function _0x34f3fb(_0x21dc28, _0x41a5c0, _0x2e0901, _0x4bc178) {
    if (!_0x2e0901) {
      _0x411a6a.recordError(1281);
      return;
    }
    var _0x1c7ee4 = _0x5a54d9.getIndexedParameter(_0x21dc28, _0x41a5c0);
    var _0x4240c3;
    switch (typeof _0x1c7ee4) {
      case "boolean":
        _0x4240c3 = _0x1c7ee4 ? 1 : 0;
        break;
      case "number":
        _0x4240c3 = _0x1c7ee4;
        break;
      case "object":
        if (_0x1c7ee4 === null) {
          switch (_0x21dc28) {
            case 35983:
            case 35368:
              _0x4240c3 = 0;
              break;
            default:
              {
                _0x411a6a.recordError(1280);
                return;
              }
          }
        } else if (_0x1c7ee4 instanceof WebGLBuffer) {
          _0x4240c3 = _0x1c7ee4.name | 0;
        } else {
          _0x411a6a.recordError(1280);
          return;
        }
        break;
      default:
        _0x411a6a.recordError(1280);
        return;
    }
    switch (_0x4bc178) {
      case 1:
        _0x54448a(_0x2e0901, _0x4240c3);
        break;
      case 0:
        _0x2beff6[_0x2e0901 >> 2] = _0x4240c3;
        break;
      case 2:
        _0x5277b0[_0x2e0901 >> 2] = _0x4240c3;
        break;
      case 4:
        _0x381c0f[_0x2e0901 >> 0] = _0x4240c3 ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x4bc178;
    }
  }
  function _0x5b429a(_0x1dd7f8, _0x5f4cd6, _0x3e0982) {
    _0x34f3fb(_0x1dd7f8, _0x5f4cd6, _0x3e0982, 0);
  }
  function _0x964267(_0x7352a, _0xf5cc4a, _0x1f6571) {
    if (!_0xf5cc4a) {
      _0x411a6a.recordError(1281);
      return;
    }
    var _0x46a5c2 = undefined;
    switch (_0x7352a) {
      case 36346:
        _0x46a5c2 = 1;
        break;
      case 36344:
        if (_0x1f6571 != 0 && _0x1f6571 != 1) {
          _0x411a6a.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0x46a5c2 = 0;
        break;
      case 34466:
        var _0x207019 = _0x5a54d9.getParameter(34467);
        _0x46a5c2 = _0x207019 ? _0x207019.length : 0;
        break;
      case 33390:
        _0x46a5c2 = 1048576;
        break;
      case 33309:
        if (_0x411a6a.currentContext.version < 2) {
          _0x411a6a.recordError(1282);
          return;
        }
        var _0x4cb74e = _0x5a54d9.getSupportedExtensions() || [];
        _0x46a5c2 = _0x4cb74e.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0x411a6a.currentContext.version < 2) {
          _0x411a6a.recordError(1280);
          return;
        }
        _0x46a5c2 = _0x7352a == 33307 ? 3 : 0;
        break;
    }
    if (_0x46a5c2 === undefined) {
      var _0x13abf7 = _0x5a54d9.getParameter(_0x7352a);
      switch (typeof _0x13abf7) {
        case "number":
          _0x46a5c2 = _0x13abf7;
          break;
        case "boolean":
          _0x46a5c2 = _0x13abf7 ? 1 : 0;
          break;
        case "string":
          _0x411a6a.recordError(1280);
          return;
        case "object":
          if (_0x13abf7 === null) {
            switch (_0x7352a) {
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
                  _0x46a5c2 = 0;
                  break;
                }
              default:
                {
                  _0x411a6a.recordError(1280);
                  return;
                }
            }
          } else if (_0x13abf7 instanceof Float32Array || _0x13abf7 instanceof Uint32Array || _0x13abf7 instanceof Int32Array || _0x13abf7 instanceof Array) {
            for (var _0x221955 = 0; _0x221955 < _0x13abf7.length; ++_0x221955) {
              switch (_0x1f6571) {
                case 0:
                  _0x2beff6[_0xf5cc4a + _0x221955 * 4 >> 2] = _0x13abf7[_0x221955];
                  break;
                case 2:
                  _0x5277b0[_0xf5cc4a + _0x221955 * 4 >> 2] = _0x13abf7[_0x221955];
                  break;
                case 4:
                  _0x381c0f[_0xf5cc4a + _0x221955 >> 0] = _0x13abf7[_0x221955] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0x46a5c2 = _0x13abf7.name | 0;
            } catch (_0x105004) {
              _0x411a6a.recordError(1280);
              _0x5761f3("GL_INVALID_ENUM in glGet" + _0x1f6571 + "v: Unknown object returned from WebGL getParameter(" + _0x7352a + ")! (error: " + _0x105004 + ")");
              return;
            }
          }
          break;
        default:
          _0x411a6a.recordError(1280);
          _0x5761f3("GL_INVALID_ENUM in glGet" + _0x1f6571 + "v: Native code calling glGet" + _0x1f6571 + "v(" + _0x7352a + ") and it returns " + _0x13abf7 + " of type " + typeof _0x13abf7 + "!");
          return;
      }
    }
    switch (_0x1f6571) {
      case 1:
        _0x54448a(_0xf5cc4a, _0x46a5c2);
        break;
      case 0:
        _0x2beff6[_0xf5cc4a >> 2] = _0x46a5c2;
        break;
      case 2:
        _0x5277b0[_0xf5cc4a >> 2] = _0x46a5c2;
        break;
      case 4:
        _0x381c0f[_0xf5cc4a >> 0] = _0x46a5c2 ? 1 : 0;
        break;
    }
  }
  function _0x465801(_0x2c9af6, _0x48222f) {
    _0x964267(_0x2c9af6, _0x48222f, 0);
  }
  function _0x4607af(_0x5437bc, _0x339b47, _0x5ddc71, _0x51edaa, _0x2a42f3) {
    if (_0x51edaa < 0) {
      _0x411a6a.recordError(1281);
      return;
    }
    if (!_0x2a42f3) {
      _0x411a6a.recordError(1281);
      return;
    }
    var _0x59a110 = _0x5a54d9.getInternalformatParameter(_0x5437bc, _0x339b47, _0x5ddc71);
    if (_0x59a110 === null) {
      return;
    }
    for (var _0x1bcf0c = 0; _0x1bcf0c < _0x59a110.length && _0x1bcf0c < _0x51edaa; ++_0x1bcf0c) {
      _0x2beff6[_0x2a42f3 + _0x1bcf0c * 4 >> 2] = _0x59a110[_0x1bcf0c];
    }
  }
  function _0x43f618(_0xa8f936, _0xb430df, _0x40f300, _0x8ba77d, _0x417ed1) {
    _0x411a6a.recordError(1282);
  }
  function _0x186bdd(_0x14eb79, _0x500275, _0x109055, _0x1ff28d) {
    var _0x5552ce = _0x5a54d9.getProgramInfoLog(_0x411a6a.programs[_0x14eb79]);
    if (_0x5552ce === null) {
      _0x5552ce = "(unknown error)";
    }
    var _0x3e1627 = _0x500275 > 0 && _0x1ff28d ? _0x156f83(_0x5552ce, _0x1ff28d, _0x500275) : 0;
    if (_0x109055) {
      _0x2beff6[_0x109055 >> 2] = _0x3e1627;
    }
  }
  function _0x1fdb97(_0x4bbd02, _0x577397, _0x54788c) {
    if (!_0x54788c) {
      _0x411a6a.recordError(1281);
      return;
    }
    if (_0x4bbd02 >= _0x411a6a.counter) {
      _0x411a6a.recordError(1281);
      return;
    }
    _0x4bbd02 = _0x411a6a.programs[_0x4bbd02];
    if (_0x577397 == 35716) {
      var _0x23e8dc = _0x5a54d9.getProgramInfoLog(_0x4bbd02);
      if (_0x23e8dc === null) {
        _0x23e8dc = "(unknown error)";
      }
      _0x2beff6[_0x54788c >> 2] = _0x23e8dc.length + 1;
    } else if (_0x577397 == 35719) {
      if (!_0x4bbd02.maxUniformLength) {
        for (var _0x513841 = 0; _0x513841 < _0x5a54d9.getProgramParameter(_0x4bbd02, 35718); ++_0x513841) {
          _0x4bbd02.maxUniformLength = Math.max(_0x4bbd02.maxUniformLength, _0x5a54d9.getActiveUniform(_0x4bbd02, _0x513841).name.length + 1);
        }
      }
      _0x2beff6[_0x54788c >> 2] = _0x4bbd02.maxUniformLength;
    } else if (_0x577397 == 35722) {
      if (!_0x4bbd02.maxAttributeLength) {
        for (var _0x513841 = 0; _0x513841 < _0x5a54d9.getProgramParameter(_0x4bbd02, 35721); ++_0x513841) {
          _0x4bbd02.maxAttributeLength = Math.max(_0x4bbd02.maxAttributeLength, _0x5a54d9.getActiveAttrib(_0x4bbd02, _0x513841).name.length + 1);
        }
      }
      _0x2beff6[_0x54788c >> 2] = _0x4bbd02.maxAttributeLength;
    } else if (_0x577397 == 35381) {
      if (!_0x4bbd02.maxUniformBlockNameLength) {
        for (var _0x513841 = 0; _0x513841 < _0x5a54d9.getProgramParameter(_0x4bbd02, 35382); ++_0x513841) {
          _0x4bbd02.maxUniformBlockNameLength = Math.max(_0x4bbd02.maxUniformBlockNameLength, _0x5a54d9.getActiveUniformBlockName(_0x4bbd02, _0x513841).length + 1);
        }
      }
      _0x2beff6[_0x54788c >> 2] = _0x4bbd02.maxUniformBlockNameLength;
    } else {
      _0x2beff6[_0x54788c >> 2] = _0x5a54d9.getProgramParameter(_0x4bbd02, _0x577397);
    }
  }
  function _0x4430e9(_0x1e604c, _0x2ff16a, _0xf20af0) {
    if (!_0xf20af0) {
      _0x411a6a.recordError(1281);
      return;
    }
    var _0x4caae9 = _0x411a6a.queries[_0x1e604c];
    var _0x14a9ee = _0x5a54d9.getQueryParameter(_0x4caae9, _0x2ff16a);
    var _0x5148a7;
    if (typeof _0x14a9ee == "boolean") {
      _0x5148a7 = _0x14a9ee ? 1 : 0;
    } else {
      _0x5148a7 = _0x14a9ee;
    }
    _0x2beff6[_0xf20af0 >> 2] = _0x5148a7;
  }
  function _0x532669(_0x21c810, _0x3d2404, _0x1b1279) {
    if (!_0x1b1279) {
      _0x411a6a.recordError(1281);
      return;
    }
    _0x2beff6[_0x1b1279 >> 2] = _0x5a54d9.getQuery(_0x21c810, _0x3d2404);
  }
  function _0x275ec1(_0x5680fa, _0x5304d0, _0x45d66f) {
    if (!_0x45d66f) {
      _0x411a6a.recordError(1281);
      return;
    }
    _0x2beff6[_0x45d66f >> 2] = _0x5a54d9.getRenderbufferParameter(_0x5680fa, _0x5304d0);
  }
  function _0x3faa39(_0x4dc8ec, _0x1f3831, _0x15ca25, _0x5ed3b8) {
    var _0x2f5892 = _0x5a54d9.getShaderInfoLog(_0x411a6a.shaders[_0x4dc8ec]);
    if (_0x2f5892 === null) {
      _0x2f5892 = "(unknown error)";
    }
    var _0x107aa4 = _0x1f3831 > 0 && _0x5ed3b8 ? _0x156f83(_0x2f5892, _0x5ed3b8, _0x1f3831) : 0;
    if (_0x15ca25) {
      _0x2beff6[_0x15ca25 >> 2] = _0x107aa4;
    }
  }
  function _0xe74de3(_0x154826, _0x3b8c47, _0x42d236, _0x125954) {
    var _0x33c334 = _0x5a54d9.getShaderPrecisionFormat(_0x154826, _0x3b8c47);
    _0x2beff6[_0x42d236 >> 2] = _0x33c334.rangeMin;
    _0x2beff6[_0x42d236 + 4 >> 2] = _0x33c334.rangeMax;
    _0x2beff6[_0x125954 >> 2] = _0x33c334.precision;
  }
  function _0x49fbc5(_0x4eee37, _0x584ccb, _0x3b9bb1, _0x521e58) {
    var _0x58f262 = _0x5a54d9.getShaderSource(_0x411a6a.shaders[_0x4eee37]);
    if (!_0x58f262) {
      return;
    }
    var _0x5c157a = _0x584ccb > 0 && _0x521e58 ? _0x156f83(_0x58f262, _0x521e58, _0x584ccb) : 0;
    if (_0x3b9bb1) {
      _0x2beff6[_0x3b9bb1 >> 2] = _0x5c157a;
    }
  }
  function _0x183bd3(_0x34f96c, _0x405e8d, _0x3377f0) {
    if (!_0x3377f0) {
      _0x411a6a.recordError(1281);
      return;
    }
    if (_0x405e8d == 35716) {
      var _0x4dd839 = _0x5a54d9.getShaderInfoLog(_0x411a6a.shaders[_0x34f96c]);
      if (_0x4dd839 === null) {
        _0x4dd839 = "(unknown error)";
      }
      var _0x1d530e = _0x4dd839 ? _0x4dd839.length + 1 : 0;
      _0x2beff6[_0x3377f0 >> 2] = _0x1d530e;
    } else if (_0x405e8d == 35720) {
      var _0x3f58f0 = _0x5a54d9.getShaderSource(_0x411a6a.shaders[_0x34f96c]);
      var _0x304b54 = _0x3f58f0 ? _0x3f58f0.length + 1 : 0;
      _0x2beff6[_0x3377f0 >> 2] = _0x304b54;
    } else {
      _0x2beff6[_0x3377f0 >> 2] = _0x5a54d9.getShaderParameter(_0x411a6a.shaders[_0x34f96c], _0x405e8d);
    }
  }
  function _0x36f6f8(_0x3698e9) {
    var _0x2524d7 = _0x411a6a.stringCache[_0x3698e9];
    if (!_0x2524d7) {
      switch (_0x3698e9) {
        case 7939:
          var _0x574a75 = _0x5a54d9.getSupportedExtensions() || [];
          _0x574a75 = _0x574a75.concat(_0x574a75.map(function (_0x1ee19f) {
            return "GL_" + _0x1ee19f;
          }));
          _0x2524d7 = _0x3db22a(_0x574a75.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0x479d1f = _0x5a54d9.getParameter(_0x3698e9);
          if (!_0x479d1f) {
            _0x411a6a.recordError(1280);
          }
          _0x2524d7 = _0x479d1f && _0x3db22a(_0x479d1f);
          break;
        case 7938:
          var _0x28abdb = _0x5a54d9.getParameter(7938);
          if (_0x411a6a.currentContext.version >= 2) {
            _0x28abdb = "OpenGL ES 3.0 (" + _0x28abdb + ")";
          } else {
            _0x28abdb = "OpenGL ES 2.0 (" + _0x28abdb + ")";
          }
          _0x2524d7 = _0x3db22a(_0x28abdb);
          break;
        case 35724:
          var _0x2026d0 = _0x5a54d9.getParameter(35724);
          var _0x25d26e = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0x4c9f3e = _0x2026d0.match(_0x25d26e);
          if (_0x4c9f3e !== null) {
            if (_0x4c9f3e[1].length == 3) {
              _0x4c9f3e[1] = _0x4c9f3e[1] + "0";
            }
            _0x2026d0 = "OpenGL ES GLSL ES " + _0x4c9f3e[1] + " (" + _0x2026d0 + ")";
          }
          _0x2524d7 = _0x3db22a(_0x2026d0);
          break;
        default:
          _0x411a6a.recordError(1280);
      }
      _0x411a6a.stringCache[_0x3698e9] = _0x2524d7;
    }
    return _0x2524d7;
  }
  function _0x325563(_0x89a47, _0x4c3900) {
    if (_0x411a6a.currentContext.version < 2) {
      _0x411a6a.recordError(1282);
      return 0;
    }
    var _0x1cf139 = _0x411a6a.stringiCache[_0x89a47];
    if (_0x1cf139) {
      if (_0x4c3900 < 0 || _0x4c3900 >= _0x1cf139.length) {
        _0x411a6a.recordError(1281);
        return 0;
      }
      return _0x1cf139[_0x4c3900];
    }
    switch (_0x89a47) {
      case 7939:
        var _0x3a14ce = _0x5a54d9.getSupportedExtensions() || [];
        _0x3a14ce = _0x3a14ce.concat(_0x3a14ce.map(function (_0x3cb8fa) {
          return "GL_" + _0x3cb8fa;
        }));
        _0x3a14ce = _0x3a14ce.map(function (_0x5ecedb) {
          return _0x3db22a(_0x5ecedb);
        });
        _0x1cf139 = _0x411a6a.stringiCache[_0x89a47] = _0x3a14ce;
        if (_0x4c3900 < 0 || _0x4c3900 >= _0x1cf139.length) {
          _0x411a6a.recordError(1281);
          return 0;
        }
        return _0x1cf139[_0x4c3900];
      default:
        _0x411a6a.recordError(1280);
        return 0;
    }
  }
  function _0x3194ae(_0xcb458a, _0xf8db22, _0x92c7f8) {
    if (!_0x92c7f8) {
      _0x411a6a.recordError(1281);
      return;
    }
    _0x2beff6[_0x92c7f8 >> 2] = _0x5a54d9.getTexParameter(_0xcb458a, _0xf8db22);
  }
  function _0x1e74b1(_0x1d2a8c, _0xf56033) {
    return _0x5a54d9.getUniformBlockIndex(_0x411a6a.programs[_0x1d2a8c], _0x211f48(_0xf56033));
  }
  function _0x2b1012(_0x15879e, _0x19934b, _0x30ae46, _0x56b1b4) {
    if (!_0x56b1b4) {
      _0x411a6a.recordError(1281);
      return;
    }
    if (_0x19934b > 0 && (_0x30ae46 == 0 || _0x56b1b4 == 0)) {
      _0x411a6a.recordError(1281);
      return;
    }
    _0x15879e = _0x411a6a.programs[_0x15879e];
    var _0x879bd9 = [];
    for (var _0x2537b0 = 0; _0x2537b0 < _0x19934b; _0x2537b0++) {
      _0x879bd9.push(_0x211f48(_0x2beff6[_0x30ae46 + _0x2537b0 * 4 >> 2]));
    }
    var _0x4fd9b1 = _0x5a54d9.getUniformIndices(_0x15879e, _0x879bd9);
    if (!_0x4fd9b1) {
      return;
    }
    var _0x5665e5 = _0x4fd9b1.length;
    for (var _0x2537b0 = 0; _0x2537b0 < _0x5665e5; _0x2537b0++) {
      _0x2beff6[_0x56b1b4 + _0x2537b0 * 4 >> 2] = _0x4fd9b1[_0x2537b0];
    }
  }
  function _0x31c74b(_0x5d07cf, _0x24aec3) {
    function _0x34c29e(_0x34aae2) {
      return _0x34aae2.slice(-1) == "]" && _0x34aae2.lastIndexOf("[");
    }
    _0x24aec3 = _0x211f48(_0x24aec3);
    if (_0x5d07cf = _0x411a6a.programs[_0x5d07cf]) {
      var _0x4e7600 = _0x5d07cf.uniformLocsById;
      var _0x5a94b1 = _0x5d07cf.uniformSizeAndIdsByName;
      var _0x514db6;
      var _0x4799b8;
      var _0x23a23e = 0;
      var _0x21e750 = _0x24aec3;
      var _0x5012de = _0x34c29e(_0x24aec3);
      if (!_0x4e7600) {
        _0x5d07cf.uniformLocsById = _0x4e7600 = {};
        _0x5d07cf.uniformArrayNamesById = {};
        for (_0x514db6 = 0; _0x514db6 < _0x5a54d9.getProgramParameter(_0x5d07cf, 35718); ++_0x514db6) {
          var _0x238efd = _0x5a54d9.getActiveUniform(_0x5d07cf, _0x514db6);
          var _0x2b874b = _0x238efd.name;
          var _0x5189d2 = _0x238efd.size;
          var _0x257994 = _0x34c29e(_0x2b874b);
          var _0x58b24b = _0x257994 > 0 ? _0x2b874b.slice(0, _0x257994) : _0x2b874b;
          var _0x59aa4a = _0x5a94b1[_0x58b24b] ? _0x5a94b1[_0x58b24b][1] : _0x5d07cf.uniformIdCounter;
          _0x5d07cf.uniformIdCounter = Math.max(_0x59aa4a + _0x5189d2, _0x5d07cf.uniformIdCounter);
          _0x5a94b1[_0x58b24b] = [_0x5189d2, _0x59aa4a];
          for (_0x4799b8 = 0; _0x4799b8 < _0x5189d2; ++_0x4799b8) {
            _0x4e7600[_0x59aa4a] = _0x4799b8;
            _0x5d07cf.uniformArrayNamesById[_0x59aa4a++] = _0x58b24b;
          }
        }
      }
      if (_0x5012de > 0) {
        _0x23a23e = _0xa71b32(_0x24aec3.slice(_0x5012de + 1)) >>> 0;
        _0x21e750 = _0x24aec3.slice(0, _0x5012de);
      }
      var _0x562f35 = _0x5a94b1[_0x21e750];
      if (_0x562f35 && _0x23a23e < _0x562f35[0]) {
        _0x23a23e += _0x562f35[1];
        if (_0x4e7600[_0x23a23e] = _0x4e7600[_0x23a23e] || _0x5a54d9.getUniformLocation(_0x5d07cf, _0x24aec3)) {
          return _0x23a23e;
        }
      }
    } else {
      _0x411a6a.recordError(1281);
    }
    return -1;
  }
  function _0xdc666d(_0x33becc) {
    var _0x1460f2 = _0x5a54d9.currentProgram;
    if (_0x1460f2) {
      var _0x2b18f4 = _0x1460f2.uniformLocsById[_0x33becc];
      if (typeof _0x2b18f4 === "number") {
        _0x1460f2.uniformLocsById[_0x33becc] = _0x2b18f4 = _0x5a54d9.getUniformLocation(_0x1460f2, _0x1460f2.uniformArrayNamesById[_0x33becc] + (_0x2b18f4 > 0 ? "[" + _0x2b18f4 + "]" : ""));
      }
      return _0x2b18f4;
    } else {
      _0x411a6a.recordError(1282);
    }
  }
  function _0x1b42ce(_0x3aedc6, _0x554fe4, _0x2c9abe, _0x1d83dd) {
    if (!_0x2c9abe) {
      _0x411a6a.recordError(1281);
      return;
    }
    _0x3aedc6 = _0x411a6a.programs[_0x3aedc6];
    var _0x32c935 = _0x5a54d9.getUniform(_0x3aedc6, _0xdc666d(_0x554fe4));
    if (typeof _0x32c935 == "number" || typeof _0x32c935 == "boolean") {
      switch (_0x1d83dd) {
        case 0:
          _0x2beff6[_0x2c9abe >> 2] = _0x32c935;
          break;
        case 2:
          _0x5277b0[_0x2c9abe >> 2] = _0x32c935;
          break;
      }
    } else {
      for (var _0xe8cded = 0; _0xe8cded < _0x32c935.length; _0xe8cded++) {
        switch (_0x1d83dd) {
          case 0:
            _0x2beff6[_0x2c9abe + _0xe8cded * 4 >> 2] = _0x32c935[_0xe8cded];
            break;
          case 2:
            _0x5277b0[_0x2c9abe + _0xe8cded * 4 >> 2] = _0x32c935[_0xe8cded];
            break;
        }
      }
    }
  }
  function _0x5f5231(_0x568d5a, _0x295aaf, _0x3e2a82) {
    _0x1b42ce(_0x568d5a, _0x295aaf, _0x3e2a82, 0);
  }
  function _0x4e44b5(_0x454b97, _0x647c1e, _0x1fe295, _0x1f9147) {
    if (!_0x1fe295) {
      _0x411a6a.recordError(1281);
      return;
    }
    if (_0x411a6a.currentContext.clientBuffers[_0x454b97].enabled) {
      _0x5761f3("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x11bfe = _0x5a54d9.getVertexAttrib(_0x454b97, _0x647c1e);
    if (_0x647c1e == 34975) {
      _0x2beff6[_0x1fe295 >> 2] = _0x11bfe && _0x11bfe.name;
    } else if (typeof _0x11bfe == "number" || typeof _0x11bfe == "boolean") {
      switch (_0x1f9147) {
        case 0:
          _0x2beff6[_0x1fe295 >> 2] = _0x11bfe;
          break;
        case 2:
          _0x5277b0[_0x1fe295 >> 2] = _0x11bfe;
          break;
        case 5:
          _0x2beff6[_0x1fe295 >> 2] = Math.fround(_0x11bfe);
          break;
      }
    } else {
      for (var _0x5be3e6 = 0; _0x5be3e6 < _0x11bfe.length; _0x5be3e6++) {
        switch (_0x1f9147) {
          case 0:
            _0x2beff6[_0x1fe295 + _0x5be3e6 * 4 >> 2] = _0x11bfe[_0x5be3e6];
            break;
          case 2:
            _0x5277b0[_0x1fe295 + _0x5be3e6 * 4 >> 2] = _0x11bfe[_0x5be3e6];
            break;
          case 5:
            _0x2beff6[_0x1fe295 + _0x5be3e6 * 4 >> 2] = Math.fround(_0x11bfe[_0x5be3e6]);
            break;
        }
      }
    }
  }
  function _0x598f94(_0x2a06e4, _0x167863, _0x66c548) {
    _0x4e44b5(_0x2a06e4, _0x167863, _0x66c548, 5);
  }
  function _0x4359df(_0x37d4b5, _0x33f007, _0x29d876) {
    var _0x2924c7 = _0x4ccae0[_0x33f007];
    for (var _0xa4cda3 = 0; _0xa4cda3 < _0x33f007; _0xa4cda3++) {
      _0x2924c7[_0xa4cda3] = _0x2beff6[_0x29d876 + _0xa4cda3 * 4 >> 2];
    }
    _0x5a54d9.invalidateFramebuffer(_0x37d4b5, _0x2924c7);
  }
  function _0x193cf2(_0xc12c1e) {
    return _0x5a54d9.isEnabled(_0xc12c1e);
  }
  function _0x8d85bc(_0x361e46) {
    var _0x1e5b33 = _0x411a6a.vaos[_0x361e46];
    if (!_0x1e5b33) {
      return 0;
    }
    return _0x5a54d9.isVertexArray(_0x1e5b33);
  }
  function _0x44eb59(_0x907ef) {
    _0x907ef = _0x411a6a.programs[_0x907ef];
    _0x5a54d9.linkProgram(_0x907ef);
    _0x907ef.uniformLocsById = 0;
    _0x907ef.uniformSizeAndIdsByName = {};
    [_0x907ef.vs, _0x907ef.fs].forEach(function (_0x1629a7) {
      Object.keys(_0x1629a7.explicitUniformLocations).forEach(function (_0x47a7a4) {
        var _0x1d68c4 = _0x1629a7.explicitUniformLocations[_0x47a7a4];
        _0x907ef.uniformSizeAndIdsByName[_0x47a7a4] = [1, _0x1d68c4];
        _0x907ef.uniformIdCounter = Math.max(_0x907ef.uniformIdCounter, _0x1d68c4 + 1);
      });
    });
    function _0x3b0a0b(_0x202ea7, _0x340122) {
      Object.keys(_0x340122).forEach(function (_0xdb552f) {
        _0x202ea7[_0xdb552f] = _0x340122[_0xdb552f];
      });
    }
    _0x907ef.explicitUniformBindings = {};
    _0x907ef.explicitSamplerBindings = {};
    [_0x907ef.vs, _0x907ef.fs].forEach(function (_0x297777) {
      _0x3b0a0b(_0x907ef.explicitUniformBindings, _0x297777.explicitUniformBindings);
      _0x3b0a0b(_0x907ef.explicitSamplerBindings, _0x297777.explicitSamplerBindings);
    });
    _0x907ef.explicitProgramBindingsApplied = 0;
  }
  function _0x4b6ee7(_0x3a715c, _0x1e1d99, _0x1aa202, _0x251e39) {
    if (_0x251e39 != 26 && _0x251e39 != 10) {
      _0x5761f3("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x4c09ed(_0x3a715c)) {
      _0x411a6a.recordError(1280);
      _0x5761f3("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x1da37a = _0x5d6d4a(_0x1aa202);
    if (!_0x1da37a) {
      return 0;
    }
    _0x411a6a.mappedBuffers[_0x3e9edc(_0x3a715c)] = {
      offset: _0x1e1d99,
      length: _0x1aa202,
      mem: _0x1da37a,
      access: _0x251e39
    };
    return _0x1da37a;
  }
  function _0x334d02(_0x3ef3de, _0x478be6) {
    if (_0x3ef3de == 3317) {
      _0x411a6a.unpackAlignment = _0x478be6;
    }
    _0x5a54d9.pixelStorei(_0x3ef3de, _0x478be6);
  }
  function _0x3343f3(_0x8369ef, _0x49bfae) {
    _0x5a54d9.polygonOffset(_0x8369ef, _0x49bfae);
  }
  function _0x88fd0f(_0x38bc82, _0x103ac3, _0x4a436c, _0x1632c7) {
    _0x411a6a.recordError(1280);
  }
  function _0x199f31(_0x2ea346, _0x19147d, _0xaa00bb) {
    _0x411a6a.recordError(1280);
  }
  function _0x38fe13(_0x40cec1) {
    _0x5a54d9.readBuffer(_0x40cec1);
  }
  function _0x5c3a95(_0x2fbb38, _0x4ac2b3, _0x1b2394, _0x1f3a04) {
    function _0x245e86(_0x3ca90c, _0x1d6a94) {
      return _0x3ca90c + _0x1d6a94 - 1 & -_0x1d6a94;
    }
    var _0x4ea885 = _0x2fbb38 * _0x1b2394;
    var _0x423c08 = _0x245e86(_0x4ea885, _0x1f3a04);
    return _0x4ac2b3 * _0x423c08;
  }
  function _0x2f4b07(_0x876967) {
    var _0x235d12 = {
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
    return _0x235d12[_0x876967 - 6402] || 1;
  }
  function _0x534113(_0x3a3e2c) {
    _0x3a3e2c -= 5120;
    if (_0x3a3e2c == 0) {
      return _0x381c0f;
    }
    if (_0x3a3e2c == 1) {
      return _0x298c61;
    }
    if (_0x3a3e2c == 2) {
      return _0x2a9dc6;
    }
    if (_0x3a3e2c == 4) {
      return _0x2beff6;
    }
    if (_0x3a3e2c == 6) {
      return _0x5277b0;
    }
    if (_0x3a3e2c == 5 || _0x3a3e2c == 28922 || _0x3a3e2c == 28520 || _0x3a3e2c == 30779 || _0x3a3e2c == 30782) {
      return _0x36d14b;
    }
    return _0x22b5af;
  }
  function _0x4d2978(_0x185c86) {
    return 31 - Math.clz32(_0x185c86.BYTES_PER_ELEMENT);
  }
  function _0x343199(_0x224bcd, _0x3faf23, _0x1c1cf7, _0x2249ed, _0x5b0ed0, _0x2cafe2) {
    var _0xbb6283 = _0x534113(_0x224bcd);
    var _0x456ac4 = _0x4d2978(_0xbb6283);
    var _0x6b42a6 = 1 << _0x456ac4;
    var _0x26e110 = _0x2f4b07(_0x3faf23) * _0x6b42a6;
    var _0x5d8387 = _0x5c3a95(_0x1c1cf7, _0x2249ed, _0x26e110, _0x411a6a.unpackAlignment);
    return _0xbb6283.subarray(_0x5b0ed0 >> _0x456ac4, _0x5b0ed0 + _0x5d8387 >> _0x456ac4);
  }
  function _0x3a9e4f(_0x157a97, _0x56defb, _0x13b2c7, _0x43a295, _0x884f23, _0x400ae3, _0x485895) {
    if (_0x411a6a.currentContext.version >= 2) {
      if (_0x5a54d9.currentPixelPackBufferBinding) {
        _0x5a54d9.readPixels(_0x157a97, _0x56defb, _0x13b2c7, _0x43a295, _0x884f23, _0x400ae3, _0x485895);
      } else {
        var _0x1c589b = _0x534113(_0x400ae3);
        _0x5a54d9.readPixels(_0x157a97, _0x56defb, _0x13b2c7, _0x43a295, _0x884f23, _0x400ae3, _0x1c589b, _0x485895 >> _0x4d2978(_0x1c589b));
      }
      return;
    }
    var _0x535500 = _0x343199(_0x400ae3, _0x884f23, _0x13b2c7, _0x43a295, _0x485895, _0x884f23);
    if (!_0x535500) {
      _0x411a6a.recordError(1280);
      return;
    }
    _0x5a54d9.readPixels(_0x157a97, _0x56defb, _0x13b2c7, _0x43a295, _0x884f23, _0x400ae3, _0x535500);
  }
  function _0x4a008d(_0xf29e04, _0x506689, _0x2d3860, _0x4d839d) {
    _0x5a54d9.renderbufferStorage(_0xf29e04, _0x506689, _0x2d3860, _0x4d839d);
  }
  function _0x458c83(_0x3e79f1, _0x3204d8, _0xe97288, _0x9c32a3, _0x300f27) {
    _0x5a54d9.renderbufferStorageMultisample(_0x3e79f1, _0x3204d8, _0xe97288, _0x9c32a3, _0x300f27);
  }
  function _0x370d5a(_0x4573a8, _0x91bf11, _0x39d9dc) {
    _0x5a54d9.samplerParameteri(_0x411a6a.samplers[_0x4573a8], _0x91bf11, _0x39d9dc);
  }
  function _0x1c7cc4(_0x5b945a, _0x3f5709, _0x34c2de, _0x374822) {
    _0x5a54d9.scissor(_0x5b945a, _0x3f5709, _0x34c2de, _0x374822);
  }
  function _0xbb08a3(_0x189e18, _0x32e09d, _0x84fc4f = "(", _0x2484d2 = ")") {
    var _0x5518fe = 0;
    for (; _0x32e09d < _0x189e18.length; ++_0x32e09d) {
      if (_0x189e18[_0x32e09d] == _0x84fc4f) {
        ++_0x5518fe;
      }
      if (_0x189e18[_0x32e09d] == _0x2484d2 && --_0x5518fe == 0) {
        return _0x32e09d;
      }
    }
  }
  function _0x246d99(_0xcfe4e2) {
    var _0x26f3f8 = 0;
    var _0x98921b = _0xcfe4e2.length;
    var _0x4666c2 = "";
    var _0x18b7aa = [1];
    var _0xedf909 = {
      defined: function (_0x78631f) {
        if (_0xedf909[_0x78631f[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0x505c3b(_0x9645fa, _0x2c9e5a) {
      return !(_0x9645fa.charCodeAt(_0x2c9e5a) > 32);
    }
    function _0x2da07e(_0x4f228b, _0x27d9bf) {
      while (!_0x505c3b(_0x4f228b, _0x27d9bf)) {
        ++_0x27d9bf;
      }
      return _0x27d9bf;
    }
    function _0x4cdf5e(_0x4ea2f2, _0x1adf36) {
      var _0x9b8772 = _0x4ea2f2.charCodeAt(_0x1adf36);
      if (_0x9b8772 > 32) {
        if (_0x9b8772 < 48) {
          return 1;
        }
        if (_0x9b8772 < 58) {
          return 2;
        }
        if (_0x9b8772 < 65) {
          return 1;
        }
        if (_0x9b8772 < 91 || _0x9b8772 == 95) {
          return 3;
        }
        if (_0x9b8772 < 97) {
          return 1;
        }
        if (_0x9b8772 < 123) {
          return 3;
        }
        return 1;
      }
      if (_0x9b8772 < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x1a10e0(_0x3e948a, _0x57082e) {
      var _0x984603 = [];
      var _0x238066 = _0x3e948a.length;
      for (var _0xfab8df = 0; _0xfab8df <= _0x238066; ++_0xfab8df) {
        var _0x1b4a71 = _0x4cdf5e(_0x3e948a, _0xfab8df);
        if (_0x1b4a71 == 2 || _0x1b4a71 == 3) {
          for (var _0x338ef1 = _0xfab8df + 1; _0x338ef1 <= _0x238066; ++_0x338ef1) {
            var _0x2be804 = _0x4cdf5e(_0x3e948a, _0x338ef1);
            if (_0x2be804 != _0x1b4a71 && (_0x2be804 != 2 || _0x1b4a71 != 3)) {
              _0x984603.push(_0x3e948a.substring(_0xfab8df, _0x338ef1));
              _0xfab8df = _0x338ef1 - 1;
              break;
            }
          }
        } else if (_0x1b4a71 == 1) {
          var _0x1d6f47 = _0x3e948a.substr(_0xfab8df, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x1d6f47)) {
            _0x984603.push(_0x1d6f47);
            ++_0xfab8df;
          } else {
            _0x984603.push(_0x3e948a[_0xfab8df]);
          }
        }
      }
      return _0x984603;
    }
    function _0x37fbf7(_0x20b246, _0xee1066, _0xfd8b24 = _0x20b246.length) {
      var _0x2a0e27 = _0x20b246.length;
      var _0xbe436d = "";
      for (var _0x4b620a = _0xee1066; _0x4b620a < _0xfd8b24; ++_0x4b620a) {
        var _0x5b4257 = _0x4cdf5e(_0x20b246, _0x4b620a);
        if (_0x5b4257 == 3) {
          for (var _0x551328 = _0x4b620a + 1; _0x551328 <= _0xfd8b24; ++_0x551328) {
            var _0x4f68dc = _0x4cdf5e(_0x20b246, _0x551328);
            if (_0x4f68dc != 2 && _0x4f68dc != 3) {
              var _0x1c68fc = _0x20b246.substring(_0x4b620a, _0x551328);
              var _0x41f5ec = _0xedf909[_0x1c68fc];
              if (_0x41f5ec) {
                var _0xdd2acd = _0x20b246.substring(_0xee1066, _0x4b620a);
                if (_0x41f5ec.length && _0x20b246[_0x551328] == "(") {
                  var _0x1f8e23 = _0xbb08a3(_0x20b246, _0x551328);
                  _0xdd2acd += _0x41f5ec(_0x20b246.substring(_0x551328 + 1, _0x1f8e23).split(",")) + _0x20b246.substring(_0x1f8e23 + 1, _0xfd8b24);
                } else {
                  _0xdd2acd += _0x41f5ec() + _0x20b246.substring(_0x551328, _0xfd8b24);
                }
                return _0x37fbf7(_0xdd2acd, 0);
              } else {
                _0xbe436d += _0x1c68fc;
                _0x4b620a = _0x551328 - 1;
                break;
              }
            }
          }
        } else {
          _0xbe436d += _0x20b246[_0x4b620a];
        }
      }
      return _0xbe436d;
    }
    function _0x35dc55(_0x241ef2) {
      while (_0x241ef2.length > 1 || typeof _0x241ef2[0] != "function") {
        _0x241ef2 = function (_0x140824) {
          var _0x329fcc;
          var _0x5dee22;
          var _0x1887dd;
          var _0xa8457a = -2;
          for (_0x5dee22 = 0; _0x5dee22 < _0x140824.length; ++_0x5dee22) {
            if ((_0x1887dd = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x140824[_0x5dee22])) > _0xa8457a) {
              _0x329fcc = _0x5dee22;
              _0xa8457a = _0x1887dd;
            }
          }
          if (_0xa8457a == 13) {
            var _0x5dee22 = _0xbb08a3(_0x140824, _0x329fcc);
            if (_0x5dee22) {
              _0x140824.splice(_0x329fcc, _0x5dee22 + 1 - _0x329fcc, _0x35dc55(_0x140824.slice(_0x329fcc + 1, _0x5dee22)));
              return _0x140824;
            }
          }
          if (_0xa8457a == 4) {
            _0x329fcc = _0x140824.lastIndexOf("!");
            var _0x17cb1d = _0x35dc55(_0x140824.slice(_0x329fcc + 1, _0x329fcc + 2));
            _0x140824.splice(_0x329fcc, 2, function () {
              return !_0x17cb1d();
            });
            return _0x140824;
          }
          if (_0xa8457a >= 0) {
            var _0x78cba4 = _0x35dc55(_0x140824.slice(0, _0x329fcc));
            var _0x16b245 = _0x35dc55(_0x140824.slice(_0x329fcc + 1));
            switch (_0x140824[_0x329fcc]) {
              case "&&":
                return [function () {
                  return _0x78cba4() && _0x16b245();
                }];
              case "||":
                return [function () {
                  return _0x78cba4() || _0x16b245();
                }];
              case "==":
                return [function () {
                  return _0x78cba4() == _0x16b245();
                }];
              case "!=":
                return [function () {
                  return _0x78cba4() != _0x16b245();
                }];
              case "<":
                return [function () {
                  return _0x78cba4() < _0x16b245();
                }];
              case "<=":
                return [function () {
                  return _0x78cba4() <= _0x16b245();
                }];
              case ">":
                return [function () {
                  return _0x78cba4() > _0x16b245();
                }];
              case ">=":
                return [function () {
                  return _0x78cba4() >= _0x16b245();
                }];
              case "+":
                return [function () {
                  return _0x78cba4() + _0x16b245();
                }];
              case "-":
                return [function () {
                  return _0x78cba4() - _0x16b245();
                }];
              case "*":
                return [function () {
                  return _0x78cba4() * _0x16b245();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x78cba4() / _0x16b245());
                }];
            }
          }
          var _0x25cb2c = _0xa71b32(_0x140824[_0x329fcc]);
          return [function () {
            return _0x25cb2c;
          }];
        }(_0x241ef2);
      }
      return _0x241ef2[0];
    }
    for (; _0x26f3f8 < _0x98921b; ++_0x26f3f8) {
      var _0x7cba7e = _0x26f3f8;
      _0x26f3f8 = _0xcfe4e2.indexOf("\n", _0x26f3f8);
      if (_0x26f3f8 < 0) {
        _0x26f3f8 = _0x98921b;
      }
      for (var _0x520d01 = _0x7cba7e; _0x520d01 < _0x26f3f8 && _0x505c3b(_0xcfe4e2, _0x520d01); ++_0x520d01);
      var _0xf6f09b = _0x18b7aa[_0x18b7aa.length - 1];
      if (_0xcfe4e2[_0x520d01] != "#") {
        if (_0xf6f09b) {
          _0x4666c2 += _0x37fbf7(_0xcfe4e2, _0x7cba7e, _0x26f3f8) + "\n";
        }
        continue;
      }
      var _0x3a404d = _0x2da07e(_0xcfe4e2, _0x520d01);
      var _0x11ae4f = _0xcfe4e2.substring(_0x520d01 + 1, _0x3a404d);
      var _0x5d545f = _0xcfe4e2.substring(_0x3a404d, _0x26f3f8).trim();
      switch (_0x11ae4f) {
        case "if":
          var _0x5e1d30 = _0x1a10e0(_0x37fbf7(_0x5d545f, 0));
          var _0x49a3e6 = _0x35dc55(_0x5e1d30);
          var _0x419eaa = _0x49a3e6();
          _0x18b7aa.push(!!_0x419eaa * _0x18b7aa[_0x18b7aa.length - 1]);
          break;
        case "ifdef":
          _0x18b7aa.push(!!_0xedf909[_0x5d545f] * _0x18b7aa[_0x18b7aa.length - 1]);
          break;
        case "ifndef":
          _0x18b7aa.push(!_0xedf909[_0x5d545f] * _0x18b7aa[_0x18b7aa.length - 1]);
          break;
        case "else":
          _0x18b7aa[_0x18b7aa.length - 1] = 1 - _0x18b7aa[_0x18b7aa.length - 1];
          break;
        case "endif":
          _0x18b7aa.pop();
          break;
        case "define":
          if (_0xf6f09b) {
            var _0x515033 = _0x5d545f.indexOf("(");
            var _0x399f9a = _0x2da07e(_0x5d545f, 0);
            if (_0x399f9a < _0x515033) {
              _0x515033 = 0;
            }
            if (_0x515033 > 0) {
              var _0x31cf2f = _0x5d545f.indexOf(")", _0x515033);
              let _0x526f8d = _0x5d545f.substring(_0x515033 + 1, _0x31cf2f).split(",").map(_0x4c7d6 => _0x4c7d6.trim());
              let _0x574578 = _0x1a10e0(_0x5d545f.substring(_0x31cf2f + 1).trim());
              _0xedf909[_0x5d545f.substring(0, _0x515033)] = function (_0x511b54) {
                var _0x42e7fd = "";
                _0x574578.forEach(_0x53b48e => {
                  var _0x141595 = _0x526f8d.indexOf(_0x53b48e);
                  _0x42e7fd += _0x141595 >= 0 ? _0x511b54[_0x141595] : _0x53b48e;
                });
                return _0x42e7fd;
              };
            } else {
              let _0xb93cbb = _0x37fbf7(_0x5d545f.substring(_0x399f9a + 1).trim(), 0);
              _0xedf909[_0x5d545f.substring(0, _0x399f9a)] = function () {
                return _0xb93cbb;
              };
            }
          }
          break;
        case "undef":
          if (_0xf6f09b) {
            delete _0xedf909[_0x5d545f];
          }
          break;
        default:
          if (_0x11ae4f != "version" && _0x11ae4f != "pragma" && _0x11ae4f != "extension") {}
          _0x4666c2 += _0x37fbf7(_0xcfe4e2, _0x7cba7e, _0x26f3f8) + "\n";
      }
    }
    return _0x4666c2;
  }
  function _0x5eb3e7(_0x1e3d8d) {
    var _0x1a58cc = 0;
    var _0x736ea1 = "";
    var _0x1e16cf;
    var _0x4f2f69;
    var _0x5de9f3 = _0x1e3d8d.length;
    for (; _0x1a58cc < _0x5de9f3; ++_0x1a58cc) {
      _0x1e16cf = _0x1e3d8d[_0x1a58cc];
      if (_0x1e16cf == "/") {
        _0x4f2f69 = _0x1e3d8d[_0x1a58cc + 1];
        if (_0x4f2f69 == "/") {
          while (_0x1a58cc < _0x5de9f3 && _0x1e3d8d[_0x1a58cc + 1] != "\n") {
            ++_0x1a58cc;
          }
        } else if (_0x4f2f69 == "*") {
          while (_0x1a58cc < _0x5de9f3 && (_0x1e3d8d[_0x1a58cc - 1] != "*" || _0x1e3d8d[_0x1a58cc] != "/")) {
            ++_0x1a58cc;
          }
        } else {
          _0x736ea1 += _0x1e16cf;
        }
      } else {
        _0x736ea1 += _0x1e16cf;
      }
    }
    return _0x736ea1;
  }
  function _0x357ee0(_0x5b7f72, _0x1f9d71, _0x454a55, _0x49f89f) {
    var _0xdc8882 = _0x411a6a.getSource(_0x5b7f72, _0x1f9d71, _0x454a55, _0x49f89f);
    _0xdc8882 = _0x246d99(_0x5eb3e7(_0xdc8882));
    var _0x42d2cc = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0x291a2a = {};
    var _0x9bfa6d;
    while (_0x9bfa6d = _0x42d2cc.exec(_0xdc8882)) {
      _0x291a2a[_0x9bfa6d[5]] = _0xa71b32(_0x9bfa6d[1]);
      if (!(_0x291a2a[_0x9bfa6d[5]] >= 0) || !(_0x291a2a[_0x9bfa6d[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0x291a2a[_0x9bfa6d[5]] + "\"! (" + _0x9bfa6d[0] + ")");
        _0x411a6a.recordError(1281);
        return;
      }
    }
    _0xdc8882 = _0xdc8882.replace(_0x42d2cc, "$2");
    _0x411a6a.shaders[_0x5b7f72].explicitUniformLocations = _0x291a2a;
    var _0x4b90cc = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0x41d225 = {};
    var _0x596542 = {};
    var _0x4b35d0;
    while (_0x4b35d0 = _0x4b90cc.exec(_0xdc8882)) {
      var _0x371354 = 1;
      for (var _0x346a3a = _0x4b35d0.index; _0x346a3a < _0xdc8882.length && _0xdc8882[_0x346a3a] != ";"; ++_0x346a3a) {
        if (_0xdc8882[_0x346a3a] == "[") {
          _0x371354 = _0xa71b32(_0xdc8882.slice(_0x346a3a + 1));
          break;
        }
        if (_0xdc8882[_0x346a3a] == "{") {
          _0x346a3a = _0xbb08a3(_0xdc8882, _0x346a3a, "{", "}") - 1;
        }
      }
      var _0x293ff1 = _0xa71b32(_0x4b35d0[1]);
      var _0xdc0d06 = 34930;
      if (_0x4b35d0[3] && _0x4b35d0[2].indexOf("sampler") != -1) {
        _0x41d225[_0x4b35d0[3]] = [_0x293ff1, _0x371354];
      } else {
        _0xdc0d06 = 35374;
        _0x596542[_0x4b35d0[2]] = [_0x293ff1, _0x371354];
      }
      var _0x418bbb = _0x5a54d9.getParameter(_0xdc0d06);
      if (!(_0x293ff1 >= 0) || !(_0x293ff1 + _0x371354 <= _0x418bbb)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x293ff1 + "\"! (" + _0x4b35d0[0] + "). Valid range is [0, " + _0x418bbb + "-1]");
        _0x411a6a.recordError(1281);
        return;
      }
    }
    _0xdc8882 = _0xdc8882.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0xdc8882 = _0xdc8882.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0xdc8882 = _0xdc8882.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0x411a6a.shaders[_0x5b7f72].explicitSamplerBindings = _0x41d225;
    _0x411a6a.shaders[_0x5b7f72].explicitUniformBindings = _0x596542;
    _0x5a54d9.shaderSource(_0x411a6a.shaders[_0x5b7f72], _0xdc8882);
  }
  function _0x39a9a4(_0x55a064, _0x382084, _0xf497c6, _0x400cb9) {
    _0x5a54d9.stencilFuncSeparate(_0x55a064, _0x382084, _0xf497c6, _0x400cb9);
  }
  function _0xf2ef3b(_0x3979e7) {
    _0x5a54d9.stencilMask(_0x3979e7);
  }
  function _0x1879f8(_0x4470cc, _0x1aa16e, _0x1df16d, _0x5bc158) {
    _0x5a54d9.stencilOpSeparate(_0x4470cc, _0x1aa16e, _0x1df16d, _0x5bc158);
  }
  function _0x4a4bb6(_0x1ff810, _0x1df812, _0x1cde31, _0x1b3784, _0x421a55, _0x3dea29, _0x34b38d, _0x58fbd5, _0x436013) {
    if (_0x411a6a.currentContext.version >= 2) {
      if (_0x5a54d9.currentPixelUnpackBufferBinding) {
        _0x5a54d9.texImage2D(_0x1ff810, _0x1df812, _0x1cde31, _0x1b3784, _0x421a55, _0x3dea29, _0x34b38d, _0x58fbd5, _0x436013);
      } else if (_0x436013) {
        var _0xb95c10 = _0x534113(_0x58fbd5);
        _0x5a54d9.texImage2D(_0x1ff810, _0x1df812, _0x1cde31, _0x1b3784, _0x421a55, _0x3dea29, _0x34b38d, _0x58fbd5, _0xb95c10, _0x436013 >> _0x4d2978(_0xb95c10));
      } else {
        _0x5a54d9.texImage2D(_0x1ff810, _0x1df812, _0x1cde31, _0x1b3784, _0x421a55, _0x3dea29, _0x34b38d, _0x58fbd5, null);
      }
      return;
    }
    _0x5a54d9.texImage2D(_0x1ff810, _0x1df812, _0x1cde31, _0x1b3784, _0x421a55, _0x3dea29, _0x34b38d, _0x58fbd5, _0x436013 ? _0x343199(_0x58fbd5, _0x34b38d, _0x1b3784, _0x421a55, _0x436013, _0x1cde31) : null);
  }
  function _0x4f5f1a(_0x3460e0, _0x40e0e3, _0x452a49, _0xdb5666, _0x3e17bb, _0x476765, _0x276e3b, _0x1ef799, _0x20f58b, _0x2a0aa0) {
    if (_0x5a54d9.currentPixelUnpackBufferBinding) {
      _0x5a54d9.texImage3D(_0x3460e0, _0x40e0e3, _0x452a49, _0xdb5666, _0x3e17bb, _0x476765, _0x276e3b, _0x1ef799, _0x20f58b, _0x2a0aa0);
    } else if (_0x2a0aa0) {
      var _0x32ca32 = _0x534113(_0x20f58b);
      _0x5a54d9.texImage3D(_0x3460e0, _0x40e0e3, _0x452a49, _0xdb5666, _0x3e17bb, _0x476765, _0x276e3b, _0x1ef799, _0x20f58b, _0x32ca32, _0x2a0aa0 >> _0x4d2978(_0x32ca32));
    } else {
      _0x5a54d9.texImage3D(_0x3460e0, _0x40e0e3, _0x452a49, _0xdb5666, _0x3e17bb, _0x476765, _0x276e3b, _0x1ef799, _0x20f58b, null);
    }
  }
  function _0xcef49c(_0x17292c, _0xde3f08, _0x1f06fd) {
    _0x5a54d9.texParameterf(_0x17292c, _0xde3f08, _0x1f06fd);
  }
  function _0x207349(_0x5bba0a, _0x59cf37, _0x580c39) {
    _0x5a54d9.texParameteri(_0x5bba0a, _0x59cf37, _0x580c39);
  }
  function _0x3b33f0(_0x4cde8b, _0x423a63, _0x4c6730) {
    var _0x59d1aa = _0x2beff6[_0x4c6730 >> 2];
    _0x5a54d9.texParameteri(_0x4cde8b, _0x423a63, _0x59d1aa);
  }
  function _0x899211(_0x398975, _0x22ffc0, _0x391e80, _0x55596b, _0x18fd9f) {
    _0x5a54d9.texStorage2D(_0x398975, _0x22ffc0, _0x391e80, _0x55596b, _0x18fd9f);
  }
  function _0x1a52a4(_0x45fc75, _0x3f41fb, _0x2bf2e6, _0x221fd8, _0x142c48, _0x1d10ea) {
    _0x5a54d9.texStorage3D(_0x45fc75, _0x3f41fb, _0x2bf2e6, _0x221fd8, _0x142c48, _0x1d10ea);
  }
  function _0x49cb45(_0x3730d5, _0x18fe86, _0x230c85, _0x5be3ee, _0x5c8b87, _0x303838, _0x1c6856, _0x3a6aa2, _0x3a631e) {
    if (_0x411a6a.currentContext.version >= 2) {
      if (_0x5a54d9.currentPixelUnpackBufferBinding) {
        _0x5a54d9.texSubImage2D(_0x3730d5, _0x18fe86, _0x230c85, _0x5be3ee, _0x5c8b87, _0x303838, _0x1c6856, _0x3a6aa2, _0x3a631e);
      } else if (_0x3a631e) {
        var _0x5211bf = _0x534113(_0x3a6aa2);
        _0x5a54d9.texSubImage2D(_0x3730d5, _0x18fe86, _0x230c85, _0x5be3ee, _0x5c8b87, _0x303838, _0x1c6856, _0x3a6aa2, _0x5211bf, _0x3a631e >> _0x4d2978(_0x5211bf));
      } else {
        _0x5a54d9.texSubImage2D(_0x3730d5, _0x18fe86, _0x230c85, _0x5be3ee, _0x5c8b87, _0x303838, _0x1c6856, _0x3a6aa2, null);
      }
      return;
    }
    var _0x496adc = null;
    if (_0x3a631e) {
      _0x496adc = _0x343199(_0x3a6aa2, _0x1c6856, _0x5c8b87, _0x303838, _0x3a631e, 0);
    }
    _0x5a54d9.texSubImage2D(_0x3730d5, _0x18fe86, _0x230c85, _0x5be3ee, _0x5c8b87, _0x303838, _0x1c6856, _0x3a6aa2, _0x496adc);
  }
  function _0x35c656(_0x337f74, _0x18e950, _0x3da91d, _0x3e2c10, _0x4493bc, _0x10df5f, _0x14da9b, _0xd233fa, _0x31ffb6, _0x2a4ccb, _0x546cc2) {
    if (_0x5a54d9.currentPixelUnpackBufferBinding) {
      _0x5a54d9.texSubImage3D(_0x337f74, _0x18e950, _0x3da91d, _0x3e2c10, _0x4493bc, _0x10df5f, _0x14da9b, _0xd233fa, _0x31ffb6, _0x2a4ccb, _0x546cc2);
    } else if (_0x546cc2) {
      var _0x321590 = _0x534113(_0x2a4ccb);
      _0x5a54d9.texSubImage3D(_0x337f74, _0x18e950, _0x3da91d, _0x3e2c10, _0x4493bc, _0x10df5f, _0x14da9b, _0xd233fa, _0x31ffb6, _0x2a4ccb, _0x321590, _0x546cc2 >> _0x4d2978(_0x321590));
    } else {
      _0x5a54d9.texSubImage3D(_0x337f74, _0x18e950, _0x3da91d, _0x3e2c10, _0x4493bc, _0x10df5f, _0x14da9b, _0xd233fa, _0x31ffb6, _0x2a4ccb, null);
    }
  }
  function _0x52d0c6(_0x33d685, _0x285f3b, _0x55caac, _0x5c582) {
    _0x33d685 = _0x411a6a.programs[_0x33d685];
    var _0x40d13c = [];
    for (var _0x13203a = 0; _0x13203a < _0x285f3b; _0x13203a++) {
      _0x40d13c.push(_0x211f48(_0x2beff6[_0x55caac + _0x13203a * 4 >> 2]));
    }
    _0x5a54d9.transformFeedbackVaryings(_0x33d685, _0x40d13c, _0x5c582);
  }
  var _0x49c18a = [];
  function _0x2e3717(_0x189384, _0x25dfde, _0x54559d) {
    if (_0x411a6a.currentContext.version >= 2) {
      _0x5a54d9.uniform1fv(_0xdc666d(_0x189384), _0x5277b0, _0x54559d >> 2, _0x25dfde);
      return;
    }
    if (_0x25dfde <= 288) {
      var _0x51c2a8 = _0x49c18a[_0x25dfde - 1];
      for (var _0x435a9f = 0; _0x435a9f < _0x25dfde; ++_0x435a9f) {
        _0x51c2a8[_0x435a9f] = _0x5277b0[_0x54559d + _0x435a9f * 4 >> 2];
      }
    } else {
      var _0x51c2a8 = _0x5277b0.subarray(_0x54559d >> 2, _0x54559d + _0x25dfde * 4 >> 2);
    }
    _0x5a54d9.uniform1fv(_0xdc666d(_0x189384), _0x51c2a8);
  }
  function _0x3b7974(_0x598581, _0x415e88) {
    _0x5a54d9.uniform1i(_0xdc666d(_0x598581), _0x415e88);
  }
  var _0x37d0ca = [];
  function _0x49cf01(_0x432805, _0x20e28f, _0x977d71) {
    if (_0x411a6a.currentContext.version >= 2) {
      _0x5a54d9.uniform1iv(_0xdc666d(_0x432805), _0x2beff6, _0x977d71 >> 2, _0x20e28f);
      return;
    }
    if (_0x20e28f <= 288) {
      var _0x30c088 = _0x37d0ca[_0x20e28f - 1];
      for (var _0x163abb = 0; _0x163abb < _0x20e28f; ++_0x163abb) {
        _0x30c088[_0x163abb] = _0x2beff6[_0x977d71 + _0x163abb * 4 >> 2];
      }
    } else {
      var _0x30c088 = _0x2beff6.subarray(_0x977d71 >> 2, _0x977d71 + _0x20e28f * 4 >> 2);
    }
    _0x5a54d9.uniform1iv(_0xdc666d(_0x432805), _0x30c088);
  }
  function _0x18fac2(_0x317bfa, _0x17c2d1, _0x521de3) {
    _0x5a54d9.uniform1uiv(_0xdc666d(_0x317bfa), _0x36d14b, _0x521de3 >> 2, _0x17c2d1);
  }
  function _0x513492(_0x55f15f, _0xddd759, _0xb45565) {
    if (_0x411a6a.currentContext.version >= 2) {
      _0x5a54d9.uniform2fv(_0xdc666d(_0x55f15f), _0x5277b0, _0xb45565 >> 2, _0xddd759 * 2);
      return;
    }
    if (_0xddd759 <= 144) {
      var _0x5506fd = _0x49c18a[_0xddd759 * 2 - 1];
      for (var _0x1c1585 = 0; _0x1c1585 < _0xddd759 * 2; _0x1c1585 += 2) {
        _0x5506fd[_0x1c1585] = _0x5277b0[_0xb45565 + _0x1c1585 * 4 >> 2];
        _0x5506fd[_0x1c1585 + 1] = _0x5277b0[_0xb45565 + (_0x1c1585 * 4 + 4) >> 2];
      }
    } else {
      var _0x5506fd = _0x5277b0.subarray(_0xb45565 >> 2, _0xb45565 + _0xddd759 * 8 >> 2);
    }
    _0x5a54d9.uniform2fv(_0xdc666d(_0x55f15f), _0x5506fd);
  }
  function _0x340e85(_0xfa26de, _0x2c360f, _0x261f0f) {
    if (_0x411a6a.currentContext.version >= 2) {
      _0x5a54d9.uniform2iv(_0xdc666d(_0xfa26de), _0x2beff6, _0x261f0f >> 2, _0x2c360f * 2);
      return;
    }
    if (_0x2c360f <= 144) {
      var _0x1e7efb = _0x37d0ca[_0x2c360f * 2 - 1];
      for (var _0x5f1f32 = 0; _0x5f1f32 < _0x2c360f * 2; _0x5f1f32 += 2) {
        _0x1e7efb[_0x5f1f32] = _0x2beff6[_0x261f0f + _0x5f1f32 * 4 >> 2];
        _0x1e7efb[_0x5f1f32 + 1] = _0x2beff6[_0x261f0f + (_0x5f1f32 * 4 + 4) >> 2];
      }
    } else {
      var _0x1e7efb = _0x2beff6.subarray(_0x261f0f >> 2, _0x261f0f + _0x2c360f * 8 >> 2);
    }
    _0x5a54d9.uniform2iv(_0xdc666d(_0xfa26de), _0x1e7efb);
  }
  function _0x35933c(_0x1a094f, _0x3cc6da, _0x5e224d) {
    _0x5a54d9.uniform2uiv(_0xdc666d(_0x1a094f), _0x36d14b, _0x5e224d >> 2, _0x3cc6da * 2);
  }
  function _0x4d46e1(_0x9e7cd5, _0x2f3015, _0x39a298) {
    if (_0x411a6a.currentContext.version >= 2) {
      _0x5a54d9.uniform3fv(_0xdc666d(_0x9e7cd5), _0x5277b0, _0x39a298 >> 2, _0x2f3015 * 3);
      return;
    }
    if (_0x2f3015 <= 96) {
      var _0x18e185 = _0x49c18a[_0x2f3015 * 3 - 1];
      for (var _0x570406 = 0; _0x570406 < _0x2f3015 * 3; _0x570406 += 3) {
        _0x18e185[_0x570406] = _0x5277b0[_0x39a298 + _0x570406 * 4 >> 2];
        _0x18e185[_0x570406 + 1] = _0x5277b0[_0x39a298 + (_0x570406 * 4 + 4) >> 2];
        _0x18e185[_0x570406 + 2] = _0x5277b0[_0x39a298 + (_0x570406 * 4 + 8) >> 2];
      }
    } else {
      var _0x18e185 = _0x5277b0.subarray(_0x39a298 >> 2, _0x39a298 + _0x2f3015 * 12 >> 2);
    }
    _0x5a54d9.uniform3fv(_0xdc666d(_0x9e7cd5), _0x18e185);
  }
  function _0x3326db(_0x118486, _0x435f05, _0x235bfd) {
    if (_0x411a6a.currentContext.version >= 2) {
      _0x5a54d9.uniform3iv(_0xdc666d(_0x118486), _0x2beff6, _0x235bfd >> 2, _0x435f05 * 3);
      return;
    }
    if (_0x435f05 <= 96) {
      var _0x1d6ae0 = _0x37d0ca[_0x435f05 * 3 - 1];
      for (var _0x293a26 = 0; _0x293a26 < _0x435f05 * 3; _0x293a26 += 3) {
        _0x1d6ae0[_0x293a26] = _0x2beff6[_0x235bfd + _0x293a26 * 4 >> 2];
        _0x1d6ae0[_0x293a26 + 1] = _0x2beff6[_0x235bfd + (_0x293a26 * 4 + 4) >> 2];
        _0x1d6ae0[_0x293a26 + 2] = _0x2beff6[_0x235bfd + (_0x293a26 * 4 + 8) >> 2];
      }
    } else {
      var _0x1d6ae0 = _0x2beff6.subarray(_0x235bfd >> 2, _0x235bfd + _0x435f05 * 12 >> 2);
    }
    _0x5a54d9.uniform3iv(_0xdc666d(_0x118486), _0x1d6ae0);
  }
  function _0x23b67a(_0x20cdd0, _0x421b49, _0x2770d4) {
    _0x5a54d9.uniform3uiv(_0xdc666d(_0x20cdd0), _0x36d14b, _0x2770d4 >> 2, _0x421b49 * 3);
  }
  function _0x244a90(_0x4bf155, _0x4b2349, _0x560422) {
    if (_0x411a6a.currentContext.version >= 2) {
      _0x5a54d9.uniform4fv(_0xdc666d(_0x4bf155), _0x5277b0, _0x560422 >> 2, _0x4b2349 * 4);
      return;
    }
    if (_0x4b2349 <= 72) {
      var _0x37771e = _0x49c18a[_0x4b2349 * 4 - 1];
      var _0x4ab7f6 = _0x5277b0;
      _0x560422 >>= 2;
      for (var _0x274f08 = 0; _0x274f08 < _0x4b2349 * 4; _0x274f08 += 4) {
        var _0x3ef4d2 = _0x560422 + _0x274f08;
        _0x37771e[_0x274f08] = _0x4ab7f6[_0x3ef4d2];
        _0x37771e[_0x274f08 + 1] = _0x4ab7f6[_0x3ef4d2 + 1];
        _0x37771e[_0x274f08 + 2] = _0x4ab7f6[_0x3ef4d2 + 2];
        _0x37771e[_0x274f08 + 3] = _0x4ab7f6[_0x3ef4d2 + 3];
      }
    } else {
      var _0x37771e = _0x5277b0.subarray(_0x560422 >> 2, _0x560422 + _0x4b2349 * 16 >> 2);
    }
    _0x5a54d9.uniform4fv(_0xdc666d(_0x4bf155), _0x37771e);
  }
  function _0x6b5a19(_0xc09ce1, _0x146c2f, _0x4c3a63) {
    if (_0x411a6a.currentContext.version >= 2) {
      _0x5a54d9.uniform4iv(_0xdc666d(_0xc09ce1), _0x2beff6, _0x4c3a63 >> 2, _0x146c2f * 4);
      return;
    }
    if (_0x146c2f <= 72) {
      var _0x26a04b = _0x37d0ca[_0x146c2f * 4 - 1];
      for (var _0xf3e6e6 = 0; _0xf3e6e6 < _0x146c2f * 4; _0xf3e6e6 += 4) {
        _0x26a04b[_0xf3e6e6] = _0x2beff6[_0x4c3a63 + _0xf3e6e6 * 4 >> 2];
        _0x26a04b[_0xf3e6e6 + 1] = _0x2beff6[_0x4c3a63 + (_0xf3e6e6 * 4 + 4) >> 2];
        _0x26a04b[_0xf3e6e6 + 2] = _0x2beff6[_0x4c3a63 + (_0xf3e6e6 * 4 + 8) >> 2];
        _0x26a04b[_0xf3e6e6 + 3] = _0x2beff6[_0x4c3a63 + (_0xf3e6e6 * 4 + 12) >> 2];
      }
    } else {
      var _0x26a04b = _0x2beff6.subarray(_0x4c3a63 >> 2, _0x4c3a63 + _0x146c2f * 16 >> 2);
    }
    _0x5a54d9.uniform4iv(_0xdc666d(_0xc09ce1), _0x26a04b);
  }
  function _0x5a9cb4(_0x49f17d, _0xaef1fb, _0x445df1) {
    _0x5a54d9.uniform4uiv(_0xdc666d(_0x49f17d), _0x36d14b, _0x445df1 >> 2, _0xaef1fb * 4);
  }
  function _0xcf6c1a(_0x17f57a, _0x50c5b5, _0x200b2d) {
    _0x17f57a = _0x411a6a.programs[_0x17f57a];
    _0x5a54d9.uniformBlockBinding(_0x17f57a, _0x50c5b5, _0x200b2d);
  }
  function _0x349850(_0xa10926, _0xa606be, _0x19cd82, _0x110d9c) {
    if (_0x411a6a.currentContext.version >= 2) {
      _0x5a54d9.uniformMatrix3fv(_0xdc666d(_0xa10926), !!_0x19cd82, _0x5277b0, _0x110d9c >> 2, _0xa606be * 9);
      return;
    }
    if (_0xa606be <= 32) {
      var _0x37eac6 = _0x49c18a[_0xa606be * 9 - 1];
      for (var _0x3c41b1 = 0; _0x3c41b1 < _0xa606be * 9; _0x3c41b1 += 9) {
        _0x37eac6[_0x3c41b1] = _0x5277b0[_0x110d9c + _0x3c41b1 * 4 >> 2];
        _0x37eac6[_0x3c41b1 + 1] = _0x5277b0[_0x110d9c + (_0x3c41b1 * 4 + 4) >> 2];
        _0x37eac6[_0x3c41b1 + 2] = _0x5277b0[_0x110d9c + (_0x3c41b1 * 4 + 8) >> 2];
        _0x37eac6[_0x3c41b1 + 3] = _0x5277b0[_0x110d9c + (_0x3c41b1 * 4 + 12) >> 2];
        _0x37eac6[_0x3c41b1 + 4] = _0x5277b0[_0x110d9c + (_0x3c41b1 * 4 + 16) >> 2];
        _0x37eac6[_0x3c41b1 + 5] = _0x5277b0[_0x110d9c + (_0x3c41b1 * 4 + 20) >> 2];
        _0x37eac6[_0x3c41b1 + 6] = _0x5277b0[_0x110d9c + (_0x3c41b1 * 4 + 24) >> 2];
        _0x37eac6[_0x3c41b1 + 7] = _0x5277b0[_0x110d9c + (_0x3c41b1 * 4 + 28) >> 2];
        _0x37eac6[_0x3c41b1 + 8] = _0x5277b0[_0x110d9c + (_0x3c41b1 * 4 + 32) >> 2];
      }
    } else {
      var _0x37eac6 = _0x5277b0.subarray(_0x110d9c >> 2, _0x110d9c + _0xa606be * 36 >> 2);
    }
    _0x5a54d9.uniformMatrix3fv(_0xdc666d(_0xa10926), !!_0x19cd82, _0x37eac6);
  }
  function _0x49af23(_0x4e3838, _0x3d8b36, _0x3dd005, _0x1ac94a) {
    if (_0x411a6a.currentContext.version >= 2) {
      _0x5a54d9.uniformMatrix4fv(_0xdc666d(_0x4e3838), !!_0x3dd005, _0x5277b0, _0x1ac94a >> 2, _0x3d8b36 * 16);
      return;
    }
    if (_0x3d8b36 <= 18) {
      var _0x326943 = _0x49c18a[_0x3d8b36 * 16 - 1];
      var _0x1673c7 = _0x5277b0;
      _0x1ac94a >>= 2;
      for (var _0x3f6c32 = 0; _0x3f6c32 < _0x3d8b36 * 16; _0x3f6c32 += 16) {
        var _0x4a5d47 = _0x1ac94a + _0x3f6c32;
        _0x326943[_0x3f6c32] = _0x1673c7[_0x4a5d47];
        _0x326943[_0x3f6c32 + 1] = _0x1673c7[_0x4a5d47 + 1];
        _0x326943[_0x3f6c32 + 2] = _0x1673c7[_0x4a5d47 + 2];
        _0x326943[_0x3f6c32 + 3] = _0x1673c7[_0x4a5d47 + 3];
        _0x326943[_0x3f6c32 + 4] = _0x1673c7[_0x4a5d47 + 4];
        _0x326943[_0x3f6c32 + 5] = _0x1673c7[_0x4a5d47 + 5];
        _0x326943[_0x3f6c32 + 6] = _0x1673c7[_0x4a5d47 + 6];
        _0x326943[_0x3f6c32 + 7] = _0x1673c7[_0x4a5d47 + 7];
        _0x326943[_0x3f6c32 + 8] = _0x1673c7[_0x4a5d47 + 8];
        _0x326943[_0x3f6c32 + 9] = _0x1673c7[_0x4a5d47 + 9];
        _0x326943[_0x3f6c32 + 10] = _0x1673c7[_0x4a5d47 + 10];
        _0x326943[_0x3f6c32 + 11] = _0x1673c7[_0x4a5d47 + 11];
        _0x326943[_0x3f6c32 + 12] = _0x1673c7[_0x4a5d47 + 12];
        _0x326943[_0x3f6c32 + 13] = _0x1673c7[_0x4a5d47 + 13];
        _0x326943[_0x3f6c32 + 14] = _0x1673c7[_0x4a5d47 + 14];
        _0x326943[_0x3f6c32 + 15] = _0x1673c7[_0x4a5d47 + 15];
      }
    } else {
      var _0x326943 = _0x5277b0.subarray(_0x1ac94a >> 2, _0x1ac94a + _0x3d8b36 * 64 >> 2);
    }
    _0x5a54d9.uniformMatrix4fv(_0xdc666d(_0x4e3838), !!_0x3dd005, _0x326943);
  }
  function _0x3be297(_0x14d4f3) {
    if (!_0x4c09ed(_0x14d4f3)) {
      _0x411a6a.recordError(1280);
      _0x5761f3("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0xf32821 = _0x3e9edc(_0x14d4f3);
    var _0x502f08 = _0x411a6a.mappedBuffers[_0xf32821];
    if (!_0x502f08) {
      _0x411a6a.recordError(1282);
      _0x5761f3("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0x411a6a.mappedBuffers[_0xf32821] = null;
    if (!(_0x502f08.access & 16)) {
      if (_0x411a6a.currentContext.version >= 2) {
        _0x5a54d9.bufferSubData(_0x14d4f3, _0x502f08.offset, _0x298c61, _0x502f08.mem, _0x502f08.length);
      } else {
        _0x5a54d9.bufferSubData(_0x14d4f3, _0x502f08.offset, _0x298c61.subarray(_0x502f08.mem, _0x502f08.mem + _0x502f08.length));
      }
    }
    _0xb102d5(_0x502f08.mem);
    return 1;
  }
  function _0x2b3a20() {
    var _0x22ea4 = _0x5a54d9.currentProgram;
    if (!_0x22ea4.explicitProgramBindingsApplied) {
      if (_0x411a6a.currentContext.version >= 2) {
        Object.keys(_0x22ea4.explicitUniformBindings).forEach(function (_0x2b6cd0) {
          var _0x1eccb0 = _0x22ea4.explicitUniformBindings[_0x2b6cd0];
          for (var _0x167563 = 0; _0x167563 < _0x1eccb0[1]; ++_0x167563) {
            var _0xeb0806 = _0x5a54d9.getUniformBlockIndex(_0x22ea4, _0x2b6cd0 + (_0x1eccb0[1] > 1 ? "[" + _0x167563 + "]" : ""));
            _0x5a54d9.uniformBlockBinding(_0x22ea4, _0xeb0806, _0x1eccb0[0] + _0x167563);
          }
        });
      }
      Object.keys(_0x22ea4.explicitSamplerBindings).forEach(function (_0x9b9ff2) {
        var _0x587e4f = _0x22ea4.explicitSamplerBindings[_0x9b9ff2];
        for (var _0x2ad09f = 0; _0x2ad09f < _0x587e4f[1]; ++_0x2ad09f) {
          _0x5a54d9.uniform1i(_0x5a54d9.getUniformLocation(_0x22ea4, _0x9b9ff2 + (_0x2ad09f ? "[" + _0x2ad09f + "]" : "")), _0x587e4f[0] + _0x2ad09f);
        }
      });
      _0x22ea4.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x896100(_0x268160) {
    _0x268160 = _0x411a6a.programs[_0x268160];
    _0x5a54d9.useProgram(_0x268160);
    if (_0x5a54d9.currentProgram = _0x268160) {
      _0x2b3a20();
    }
  }
  function _0x4f7a1b(_0x41a5a1) {
    _0x5a54d9.validateProgram(_0x411a6a.programs[_0x41a5a1]);
  }
  function _0x459ac8(_0x193c37, _0x876046, _0x5ba2e8, _0x34db3e, _0x58d783) {
    _0x5a54d9.vertexAttrib4f(_0x193c37, _0x876046, _0x5ba2e8, _0x34db3e, _0x58d783);
  }
  function _0x38cbbf(_0x2cb957, _0xbb9a64) {
    _0x5a54d9.vertexAttrib4f(_0x2cb957, _0x5277b0[_0xbb9a64 >> 2], _0x5277b0[_0xbb9a64 + 4 >> 2], _0x5277b0[_0xbb9a64 + 8 >> 2], _0x5277b0[_0xbb9a64 + 12 >> 2]);
  }
  function _0x2f32f5(_0x4e7f06, _0x5e9547, _0x5083f5, _0x1b4d51, _0x1da130) {
    var _0x28c8c1 = _0x411a6a.currentContext.clientBuffers[_0x4e7f06];
    if (!_0x5a54d9.currentArrayBufferBinding) {
      _0x28c8c1.size = _0x5e9547;
      _0x28c8c1.type = _0x5083f5;
      _0x28c8c1.normalized = false;
      _0x28c8c1.stride = _0x1b4d51;
      _0x28c8c1.ptr = _0x1da130;
      _0x28c8c1.clientside = true;
      _0x28c8c1.vertexAttribPointerAdaptor = function (_0x538bcd, _0x42c643, _0x2a47c7, _0x29c384, _0x1b0914, _0x1867cc) {
        this.vertexAttribIPointer(_0x538bcd, _0x42c643, _0x2a47c7, _0x1b0914, _0x1867cc);
      };
      return;
    }
    _0x28c8c1.clientside = false;
    _0x5a54d9.vertexAttribIPointer(_0x4e7f06, _0x5e9547, _0x5083f5, _0x1b4d51, _0x1da130);
  }
  function _0x33f59d(_0x28b35b, _0x5bb34c, _0x3e3e99, _0x54d740, _0x242bd0, _0x17ed4f) {
    var _0x11c6d8 = _0x411a6a.currentContext.clientBuffers[_0x28b35b];
    if (!_0x5a54d9.currentArrayBufferBinding) {
      _0x11c6d8.size = _0x5bb34c;
      _0x11c6d8.type = _0x3e3e99;
      _0x11c6d8.normalized = _0x54d740;
      _0x11c6d8.stride = _0x242bd0;
      _0x11c6d8.ptr = _0x17ed4f;
      _0x11c6d8.clientside = true;
      _0x11c6d8.vertexAttribPointerAdaptor = function (_0x3d9680, _0x2ed017, _0x515cde, _0x1a141c, _0x499b95, _0x526389) {
        this.vertexAttribPointer(_0x3d9680, _0x2ed017, _0x515cde, _0x1a141c, _0x499b95, _0x526389);
      };
      return;
    }
    _0x11c6d8.clientside = false;
    _0x5a54d9.vertexAttribPointer(_0x28b35b, _0x5bb34c, _0x3e3e99, !!_0x54d740, _0x242bd0, _0x17ed4f);
  }
  function _0x45507a(_0x5d95ac, _0x3e6790, _0x1cb6d8, _0x446691) {
    _0x5a54d9.viewport(_0x5d95ac, _0x3e6790, _0x1cb6d8, _0x446691);
  }
  function _0x2d3a83(_0x13bcfe) {
    return _0x13bcfe;
  }
  function _0x369a4e(_0xabc1ef) {
    _0x1496b8();
    var _0xb67a82 = new Date(_0x2beff6[_0xabc1ef + 20 >> 2] + 1900, _0x2beff6[_0xabc1ef + 16 >> 2], _0x2beff6[_0xabc1ef + 12 >> 2], _0x2beff6[_0xabc1ef + 8 >> 2], _0x2beff6[_0xabc1ef + 4 >> 2], _0x2beff6[_0xabc1ef >> 2], 0);
    var _0x23770d = _0x2beff6[_0xabc1ef + 32 >> 2];
    var _0x2f0806 = _0xb67a82.getTimezoneOffset();
    var _0x11ddf9 = new Date(_0xb67a82.getFullYear(), 0, 1);
    var _0x1c2bac = new Date(_0xb67a82.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x4df178 = _0x11ddf9.getTimezoneOffset();
    var _0x22cbd1 = Math.min(_0x4df178, _0x1c2bac);
    if (_0x23770d < 0) {
      _0x2beff6[_0xabc1ef + 32 >> 2] = Number(_0x1c2bac != _0x4df178 && _0x22cbd1 == _0x2f0806);
    } else if (_0x23770d > 0 != (_0x22cbd1 == _0x2f0806)) {
      var _0x3e3ddd = Math.max(_0x4df178, _0x1c2bac);
      var _0x12ed5d = _0x23770d > 0 ? _0x22cbd1 : _0x3e3ddd;
      _0xb67a82.setTime(_0xb67a82.getTime() + (_0x12ed5d - _0x2f0806) * 60000);
    }
    _0x2beff6[_0xabc1ef + 24 >> 2] = _0xb67a82.getDay();
    var _0x361fb5 = (_0xb67a82.getTime() - _0x11ddf9.getTime()) / 86400000 | 0;
    _0x2beff6[_0xabc1ef + 28 >> 2] = _0x361fb5;
    _0x2beff6[_0xabc1ef >> 2] = _0xb67a82.getSeconds();
    _0x2beff6[_0xabc1ef + 4 >> 2] = _0xb67a82.getMinutes();
    _0x2beff6[_0xabc1ef + 8 >> 2] = _0xb67a82.getHours();
    _0x2beff6[_0xabc1ef + 12 >> 2] = _0xb67a82.getDate();
    _0x2beff6[_0xabc1ef + 16 >> 2] = _0xb67a82.getMonth();
    return _0xb67a82.getTime() / 1000 | 0;
  }
  function _0x115108(_0xadabf7) {
    _0x58d587(_0xadabf7);
  }
  function _0x2f5eb6(_0x44a31a, _0x7575ac, _0x6e5651) {
    return 0;
  }
  function _0x19a586(_0x5ceade) {
    _0x2beff6[_0x5ceade >> 2] = 0;
    return 0;
  }
  function _0x3833e0(_0x2a1781) {
    return _0x2a1781 % 4 === 0 && (_0x2a1781 % 100 !== 0 || _0x2a1781 % 400 === 0);
  }
  function _0x387458(_0x6ecc7f, _0x3ca36b) {
    var _0x3e782e = 0;
    for (var _0x4bff4c = 0; _0x4bff4c <= _0x3ca36b; _0x3e782e += _0x6ecc7f[_0x4bff4c++]) {}
    return _0x3e782e;
  }
  var _0x450b0d = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0x441669 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0x5d6210(_0x2c4305, _0x45336f) {
    var _0x21d634 = new Date(_0x2c4305.getTime());
    while (_0x45336f > 0) {
      var _0x4666e0 = _0x3833e0(_0x21d634.getFullYear());
      var _0x21b96a = _0x21d634.getMonth();
      var _0x14c29d = (_0x4666e0 ? _0x450b0d : _0x441669)[_0x21b96a];
      if (_0x45336f > _0x14c29d - _0x21d634.getDate()) {
        _0x45336f -= _0x14c29d - _0x21d634.getDate() + 1;
        _0x21d634.setDate(1);
        if (_0x21b96a < 11) {
          _0x21d634.setMonth(_0x21b96a + 1);
        } else {
          _0x21d634.setMonth(0);
          _0x21d634.setFullYear(_0x21d634.getFullYear() + 1);
        }
      } else {
        _0x21d634.setDate(_0x21d634.getDate() + _0x45336f);
        return _0x21d634;
      }
    }
    return _0x21d634;
  }
  function _0x4c653f(_0x11d310, _0x29023d, _0x20159c, _0x425341) {
    var _0x41fac9 = _0x2beff6[_0x425341 + 40 >> 2];
    var _0x39d6a6 = {
      tm_sec: _0x2beff6[_0x425341 >> 2],
      tm_min: _0x2beff6[_0x425341 + 4 >> 2],
      tm_hour: _0x2beff6[_0x425341 + 8 >> 2],
      tm_mday: _0x2beff6[_0x425341 + 12 >> 2],
      tm_mon: _0x2beff6[_0x425341 + 16 >> 2],
      tm_year: _0x2beff6[_0x425341 + 20 >> 2],
      tm_wday: _0x2beff6[_0x425341 + 24 >> 2],
      tm_yday: _0x2beff6[_0x425341 + 28 >> 2],
      tm_isdst: _0x2beff6[_0x425341 + 32 >> 2],
      tm_gmtoff: _0x2beff6[_0x425341 + 36 >> 2],
      tm_zone: _0x41fac9 ? _0x211f48(_0x41fac9) : ""
    };
    var _0x4f1ea7 = _0x211f48(_0x20159c);
    var _0x216bba = {
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
    for (var _0x49936b in _0x216bba) {
      _0x4f1ea7 = _0x4f1ea7.replace(new RegExp(_0x49936b, "g"), _0x216bba[_0x49936b]);
    }
    var _0x2aa4f1 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0x5b8b23 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x1b3c45(_0x431ff7, _0x12149f, _0x4a18c5) {
      var _0x55b9d1 = typeof _0x431ff7 === "number" ? _0x431ff7.toString() : _0x431ff7 || "";
      while (_0x55b9d1.length < _0x12149f) {
        _0x55b9d1 = _0x4a18c5[0] + _0x55b9d1;
      }
      return _0x55b9d1;
    }
    function _0x3175ed(_0x4f23bd, _0x47e34b) {
      return _0x1b3c45(_0x4f23bd, _0x47e34b, "0");
    }
    function _0x446b90(_0x5ecf56, _0x1217a0) {
      function _0x24bb40(_0xcef03a) {
        if (_0xcef03a < 0) {
          return -1;
        } else if (_0xcef03a > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0x1d6501;
      if ((_0x1d6501 = _0x24bb40(_0x5ecf56.getFullYear() - _0x1217a0.getFullYear())) === 0) {
        if ((_0x1d6501 = _0x24bb40(_0x5ecf56.getMonth() - _0x1217a0.getMonth())) === 0) {
          _0x1d6501 = _0x24bb40(_0x5ecf56.getDate() - _0x1217a0.getDate());
        }
      }
      return _0x1d6501;
    }
    function _0xe1b219(_0x41eb58) {
      switch (_0x41eb58.getDay()) {
        case 0:
          return new Date(_0x41eb58.getFullYear() - 1, 11, 29);
        case 1:
          return _0x41eb58;
        case 2:
          return new Date(_0x41eb58.getFullYear(), 0, 3);
        case 3:
          return new Date(_0x41eb58.getFullYear(), 0, 2);
        case 4:
          return new Date(_0x41eb58.getFullYear(), 0, 1);
        case 5:
          return new Date(_0x41eb58.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0x41eb58.getFullYear() - 1, 11, 30);
      }
    }
    function _0x2cab22(_0x30d6c5) {
      var _0x374b78 = _0x5d6210(new Date(_0x30d6c5.tm_year + 1900, 0, 1), _0x30d6c5.tm_yday);
      var _0x741efd = new Date(_0x374b78.getFullYear(), 0, 4);
      var _0x1d7191 = new Date(_0x374b78.getFullYear() + 1, 0, 4);
      var _0x3de76c = _0xe1b219(_0x741efd);
      var _0x48d4cd = _0xe1b219(_0x1d7191);
      if (_0x446b90(_0x3de76c, _0x374b78) <= 0) {
        if (_0x446b90(_0x48d4cd, _0x374b78) <= 0) {
          return _0x374b78.getFullYear() + 1;
        } else {
          return _0x374b78.getFullYear();
        }
      } else {
        return _0x374b78.getFullYear() - 1;
      }
    }
    var _0x4756b1 = {
      "%a": function (_0x20f4a8) {
        return _0x2aa4f1[_0x20f4a8.tm_wday].substring(0, 3);
      },
      "%A": function (_0x1eea82) {
        return _0x2aa4f1[_0x1eea82.tm_wday];
      },
      "%b": function (_0x40e188) {
        return _0x5b8b23[_0x40e188.tm_mon].substring(0, 3);
      },
      "%B": function (_0x53251d) {
        return _0x5b8b23[_0x53251d.tm_mon];
      },
      "%C": function (_0x4e8bff) {
        var _0x1135f4 = _0x4e8bff.tm_year + 1900;
        return _0x3175ed(_0x1135f4 / 100 | 0, 2);
      },
      "%d": function (_0xc48881) {
        return _0x3175ed(_0xc48881.tm_mday, 2);
      },
      "%e": function (_0x2c40e6) {
        return _0x1b3c45(_0x2c40e6.tm_mday, 2, " ");
      },
      "%g": function (_0x19aa3e) {
        return _0x2cab22(_0x19aa3e).toString().substring(2);
      },
      "%G": function (_0x2d2c7a) {
        return _0x2cab22(_0x2d2c7a);
      },
      "%H": function (_0x1ccd08) {
        return _0x3175ed(_0x1ccd08.tm_hour, 2);
      },
      "%I": function (_0x44ccd5) {
        var _0x48274f = _0x44ccd5.tm_hour;
        if (_0x48274f == 0) {
          _0x48274f = 12;
        } else if (_0x48274f > 12) {
          _0x48274f -= 12;
        }
        return _0x3175ed(_0x48274f, 2);
      },
      "%j": function (_0xa08e34) {
        return _0x3175ed(_0xa08e34.tm_mday + _0x387458(_0x3833e0(_0xa08e34.tm_year + 1900) ? _0x450b0d : _0x441669, _0xa08e34.tm_mon - 1), 3);
      },
      "%m": function (_0x3ec951) {
        return _0x3175ed(_0x3ec951.tm_mon + 1, 2);
      },
      "%M": function (_0x4ea427) {
        return _0x3175ed(_0x4ea427.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x1cec0d) {
        if (_0x1cec0d.tm_hour >= 0 && _0x1cec0d.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x4bb008) {
        return _0x3175ed(_0x4bb008.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x168f32) {
        return _0x168f32.tm_wday || 7;
      },
      "%U": function (_0x26f76b) {
        var _0x5c3cee = new Date(_0x26f76b.tm_year + 1900, 0, 1);
        var _0x360078 = _0x5c3cee.getDay() === 0 ? _0x5c3cee : _0x5d6210(_0x5c3cee, 7 - _0x5c3cee.getDay());
        var _0xce2777 = new Date(_0x26f76b.tm_year + 1900, _0x26f76b.tm_mon, _0x26f76b.tm_mday);
        if (_0x446b90(_0x360078, _0xce2777) < 0) {
          var _0x55aae1 = _0x387458(_0x3833e0(_0xce2777.getFullYear()) ? _0x450b0d : _0x441669, _0xce2777.getMonth() - 1) - 31;
          var _0x1b7773 = 31 - _0x360078.getDate();
          var _0x1f4d3d = _0x1b7773 + _0x55aae1 + _0xce2777.getDate();
          return _0x3175ed(Math.ceil(_0x1f4d3d / 7), 2);
        }
        if (_0x446b90(_0x360078, _0x5c3cee) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0x15b44f) {
        var _0x22dbc2 = new Date(_0x15b44f.tm_year + 1900, 0, 4);
        var _0x5a90e2 = new Date(_0x15b44f.tm_year + 1901, 0, 4);
        var _0x19e43b = _0xe1b219(_0x22dbc2);
        var _0x32f6ca = _0xe1b219(_0x5a90e2);
        var _0x546863 = _0x5d6210(new Date(_0x15b44f.tm_year + 1900, 0, 1), _0x15b44f.tm_yday);
        if (_0x446b90(_0x546863, _0x19e43b) < 0) {
          return "53";
        }
        if (_0x446b90(_0x32f6ca, _0x546863) <= 0) {
          return "01";
        }
        var _0x29f3a1;
        if (_0x19e43b.getFullYear() < _0x15b44f.tm_year + 1900) {
          _0x29f3a1 = _0x15b44f.tm_yday + 32 - _0x19e43b.getDate();
        } else {
          _0x29f3a1 = _0x15b44f.tm_yday + 1 - _0x19e43b.getDate();
        }
        return _0x3175ed(Math.ceil(_0x29f3a1 / 7), 2);
      },
      "%w": function (_0x41f98e) {
        return _0x41f98e.tm_wday;
      },
      "%W": function (_0x253dfd) {
        var _0x324e00 = new Date(_0x253dfd.tm_year, 0, 1);
        var _0x1d6fd1 = _0x324e00.getDay() === 1 ? _0x324e00 : _0x5d6210(_0x324e00, _0x324e00.getDay() === 0 ? 1 : 7 - _0x324e00.getDay() + 1);
        var _0x511e38 = new Date(_0x253dfd.tm_year + 1900, _0x253dfd.tm_mon, _0x253dfd.tm_mday);
        if (_0x446b90(_0x1d6fd1, _0x511e38) < 0) {
          var _0x23744c = _0x387458(_0x3833e0(_0x511e38.getFullYear()) ? _0x450b0d : _0x441669, _0x511e38.getMonth() - 1) - 31;
          var _0x400cc6 = 31 - _0x1d6fd1.getDate();
          var _0x2e66a5 = _0x400cc6 + _0x23744c + _0x511e38.getDate();
          return _0x3175ed(Math.ceil(_0x2e66a5 / 7), 2);
        }
        if (_0x446b90(_0x1d6fd1, _0x324e00) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x4a7d42) {
        return (_0x4a7d42.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0xfb1df5) {
        return _0xfb1df5.tm_year + 1900;
      },
      "%z": function (_0x4e3bac) {
        var _0x50bc35 = _0x4e3bac.tm_gmtoff;
        var _0x4fecef = _0x50bc35 >= 0;
        _0x50bc35 = Math.abs(_0x50bc35) / 60;
        _0x50bc35 = _0x50bc35 / 60 * 100 + _0x50bc35 % 60;
        return (_0x4fecef ? "+" : "-") + String("0000" + _0x50bc35).slice(-4);
      },
      "%Z": function (_0x35f643) {
        return _0x35f643.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0x49936b in _0x4756b1) {
      if (_0x4f1ea7.includes(_0x49936b)) {
        _0x4f1ea7 = _0x4f1ea7.replace(new RegExp(_0x49936b, "g"), _0x4756b1[_0x49936b](_0x39d6a6));
      }
    }
    var _0x41e909 = _0x3e9728(_0x4f1ea7, false);
    if (_0x41e909.length > _0x29023d) {
      return 0;
    }
    _0x37c79e(_0x41e909, _0x11d310);
    return _0x41e909.length - 1;
  }
  function _0x5cba2f(_0x1d48eb) {
    var _0x4c021e = Date.now() / 1000 | 0;
    if (_0x1d48eb) {
      _0x2beff6[_0x1d48eb >> 2] = _0x4c021e;
    }
    return _0x4c021e;
  }
  function _0x4bda33(_0x2c4ae1, _0x11dae6) {
    _0x2c4ae1 = _0x211f48(_0x2c4ae1);
    try {
      _0x31cd57.utime(_0x2c4ae1, _0x11dae6, _0x11dae6);
      return 0;
    } catch (_0x4ccc46) {
      if (!(_0x4ccc46 instanceof _0x31cd57.ErrnoError)) {
        throw _0x4ccc46 + " : " + _0x1711d5();
      }
      _0x62bad8(_0x4ccc46.errno);
      return -1;
    }
  }
  function _0x40d275(_0x130bbb, _0x298326) {
    var _0x16bd54;
    if (_0x298326) {
      _0x16bd54 = _0x2beff6[_0x298326 + 4 >> 2] * 1000;
    } else {
      _0x16bd54 = Date.now();
    }
    return _0x4bda33(_0x130bbb, _0x16bd54);
  }
  function _0x4d2ced(_0x57ec3b, _0x31fef6, _0x3f00f1, _0xb412da) {
    if (!_0x57ec3b) {
      _0x57ec3b = this;
    }
    this.parent = _0x57ec3b;
    this.mount = _0x57ec3b.mount;
    this.mounted = null;
    this.id = _0x31cd57.nextInode++;
    this.name = _0x31fef6;
    this.mode = _0x3f00f1;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0xb412da;
  }
  var _0x1c85ce = 365;
  var _0x36b86b = 146;
  Object.defineProperties(_0x4d2ced.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x1c85ce) === _0x1c85ce;
      },
      set: function (_0x1e9a9b) {
        if (_0x1e9a9b) {
          this.mode |= _0x1c85ce;
        } else {
          this.mode &= ~_0x1c85ce;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0x36b86b) === _0x36b86b;
      },
      set: function (_0x5bdbd2) {
        if (_0x5bdbd2) {
          this.mode |= _0x36b86b;
        } else {
          this.mode &= ~_0x36b86b;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0x31cd57.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0x31cd57.isChrdev(this.mode);
      }
    }
  });
  _0x31cd57.FSNode = _0x4d2ced;
  _0x31cd57.staticInit();
  _0x4c150b.FS_createPath = _0x31cd57.createPath;
  _0x4c150b.FS_createDataFile = _0x31cd57.createDataFile;
  _0x4c150b.requestFullscreen = function _0x2c14c0(_0x4b41d2, _0x128ece) {
    _0xaeecb0.requestFullscreen(_0x4b41d2, _0x128ece);
  };
  _0x4c150b.requestAnimationFrame = function _0x282901(_0x15ac89) {
    _0xaeecb0.requestAnimationFrame(_0x15ac89);
  };
  _0x4c150b.setCanvasSize = function _0x56bd32(_0x89a347, _0x4af407, _0x4a2cdf) {
    _0xaeecb0.setCanvasSize(_0x89a347, _0x4af407, _0x4a2cdf);
  };
  _0x4c150b.pauseMainLoop = function _0x57facd() {
    _0xaeecb0.mainLoop.pause();
  };
  _0x4c150b.resumeMainLoop = function _0x20ff2e() {
    _0xaeecb0.mainLoop.resume();
  };
  _0x4c150b.getUserMedia = function _0x40d018() {
    _0xaeecb0.getUserMedia();
  };
  _0x4c150b.createContext = function _0x12e0a1(_0x5df89d, _0x3202e3, _0x491168, _0x5d6c5f) {
    return _0xaeecb0.createContext(_0x5df89d, _0x3202e3, _0x491168, _0x5d6c5f);
  };
  var _0x5a54d9;
  for (var _0x421b8c = 0; _0x421b8c < 32; ++_0x421b8c) {
    _0x4ccae0.push(new Array(_0x421b8c));
  }
  var _0x86ba24 = new Float32Array(288);
  for (var _0x421b8c = 0; _0x421b8c < 288; ++_0x421b8c) {
    _0x49c18a[_0x421b8c] = _0x86ba24.subarray(0, _0x421b8c + 1);
  }
  var _0x263a3f = new Int32Array(288);
  for (var _0x421b8c = 0; _0x421b8c < 288; ++_0x421b8c) {
    _0x37d0ca[_0x421b8c] = _0x263a3f.subarray(0, _0x421b8c + 1);
  }
  function _0x3e9728(_0x3426e0, _0x31075b, _0x20ef5f) {
    var _0x3b6088 = _0x20ef5f > 0 ? _0x20ef5f : _0x19d23e(_0x3426e0) + 1;
    var _0x20bb09 = new Array(_0x3b6088);
    var _0x47f4d7 = _0x59dbc8(_0x3426e0, _0x20bb09, 0, _0x20bb09.length);
    if (_0x31075b) {
      _0x20bb09.length = _0x47f4d7;
    }
    return _0x20bb09;
  }
  var _0x4a2d31 = {
    ij: _0x20d599,
    ej: _0x295fed,
    Lc: _0x491871,
    Oi: _0x29ac01,
    zi: _0x45f585,
    Gj: _0x4f83f7,
    Mi: _0x58de0e,
    Li: _0x290458,
    Ii: _0x12c3d6,
    Ki: _0x2e223c,
    Ji: _0x544504,
    gj: _0x1cd2e8,
    fj: _0x4f348b,
    wj: _0x15f4f1,
    Xi: _0x1b69b7,
    Hc: _0x10169c,
    Ti: _0x126bf1,
    Sc: _0x50f7b9,
    Uc: _0x3bb63f,
    Tc: _0xd8997d,
    ni: _0x4a6422,
    Ei: _0x1b6095,
    Di: _0x44ffe7,
    Zi: _0xf814c0,
    lj: _0x22cd83,
    kj: _0x459985,
    Qi: _0x2aad69,
    Hi: _0x102c20,
    Gi: _0x562490,
    Ri: _0x6a8d34,
    Aj: _0x6b5691,
    ri: _0x166b21,
    wi: _0x463b60,
    vi: _0x48cebe,
    ui: _0x435aa6,
    Uj: _0x3fad39,
    Tj: _0xe976fa,
    Sj: _0x4138ca,
    Rj: _0x267635,
    Fi: _0x2b4b1f,
    Ai: _0x52652c,
    cj: _0x402d76,
    Si: _0x5278ce,
    si: _0x4574ff,
    kf: _0x54e0ce,
    Kb: _0x37c1c8,
    Jb: _0x1422b0,
    pf: _0x1d0a8f,
    Sa: _0x594568,
    Ra: _0x23552c,
    Ne: _0x1b0ff7,
    qf: _0x4bfce0,
    Pe: _0x9a80b3,
    Fe: _0x759d2a,
    da: _0x453726,
    hf: _0x3d31d6,
    Gb: _0x5c4e9e,
    Fb: _0x55fe45,
    ff: _0x470d74,
    gf: _0x3ff6fd,
    Eb: _0x33912e,
    Db: _0x5de31a,
    hi: _0x13cfae,
    jf: _0x3fef64,
    Ib: _0x212d36,
    Hb: _0x5e921d,
    Oe: _0x38c8a2,
    Re: _0x5648ac,
    lf: _0x2f6084,
    Mb: _0x283ff4,
    Lb: _0xf24202,
    Nb: _0x212aec,
    Ie: _0x665707,
    cf: _0x3e1e56,
    nf: _0x3aa553,
    fa: _0x137874,
    Uf: _0x32cbd4,
    ha: _0x3ef79d,
    Pf: _0x1dc061,
    Nf: _0x14e299,
    _b: _0x3c428e,
    Of: _0x3199c9,
    Va: _0x49e259,
    Wa: _0x98bb62,
    Ob: _0xbaf956,
    Rf: _0x55795c,
    Lf: _0x48c036,
    Mf: _0x3085fa,
    ac: _0x2ee83c,
    $b: _0xcb9a27,
    sa: _0x3d5ca2,
    ga: _0x404aec,
    Tf: _0x3dc0cb,
    Sf: _0x10a091,
    ta: _0xc25b4e,
    xb: _0x3ec70e,
    wb: _0x253ddd,
    la: _0x1d19a4,
    ra: _0x5b8563,
    ub: _0x165cb4,
    vb: _0xc558d9,
    Cb: _0xb283d9,
    Ma: _0x39005e,
    yb: _0x56a7a6,
    Ab: _0x3ef0a7,
    Te: _0x3f901e,
    Zb: _0x24ba03,
    sf: _0xa39dfe,
    zb: _0x443584,
    bf: _0x4f1fed,
    va: _0x45b758,
    Me: _0x108a5c,
    Hf: _0x2dc068,
    Ef: _0x4cbfec,
    Ff: _0x289a48,
    Gf: _0x9d2c4b,
    Ua: _0x42b9f4,
    Af: _0x1558a3,
    Cf: _0x145aee,
    Bf: _0x2acc36,
    Df: _0x404fa3,
    tj: _0x37318c,
    rj: _0x142687,
    pj: _0x3a9583,
    $i: _0x48ee04,
    bj: _0x49c707,
    vj: _0x2a68a4,
    Vi: _0xf9c515,
    Ui: _0x1d2087,
    nj: _0x58b23a,
    Bj: _0x5249d6,
    qi: _0x4aa55a,
    zj: _0x47301f,
    yj: _0x14f6f3,
    ib: _0x13ec77,
    pi: _0x19855f,
    oi: _0x34ce93,
    dj: _0x36425f,
    Pi: _0x5cced3,
    Ni: _0x1f8c63,
    Ci: _0x325200,
    dk: _0x92b21,
    ck: _0x189b64,
    ak: _0x229f2e,
    bk: _0xdb8fe4,
    jj: _0x3bcc44,
    Wi: _0x5011ed,
    xi: _0x4db8f3,
    yi: _0x2cf77a,
    Bi: _0x5b45e3,
    Gc: _0x57871d,
    Hj: _0x353338,
    Fj: _0x1c778a,
    Cj: _0x1308d8,
    Ej: _0x1eb3af,
    sj: _0x5111bb,
    qj: _0x100ab4,
    oj: _0x4a5a7d,
    _i: _0x528cc6,
    aj: _0x44d5c5,
    uj: _0x3215d6,
    ti: _0x132826,
    mj: _0x20ae1d,
    hj: _0x53a2e5,
    xj: _0x283dfb,
    Yi: _0x5321d9,
    kb: _0x965a86,
    Oj: _0x197a2a,
    Mc: _0x3b26dd,
    Lj: _0x12a4e3,
    Nc: _0x4a826d,
    Ij: _0x39714a,
    Kj: _0x5e25b2,
    Jj: _0x17d86f,
    Mj: _0x42b2e5,
    p: _0x1177ef,
    h: _0x21638c,
    o: _0x3edb1a,
    f: _0x19e01b,
    a: _0x3da865,
    ek: _0x7c7cbf,
    jb: _0x15e2bc,
    gd: _0x5cf9cb,
    ea: _0x1c0575,
    nd: _0x1e80da,
    od: _0xd3380d,
    k: _0x278760,
    Ae: _0xcc4ec9,
    mf: _0x372ed9,
    Ke: _0x5f46fb,
    Vf: _0x15cbb9,
    dd: _0x3ce67b,
    If: _0x2f3668,
    jd: _0x4196c9,
    S: _0x2558e9,
    Sg: _0x2b6ed0,
    Fg: _0x45520d,
    ad: _0x72d9ad,
    Zc: _0x42c052,
    Ec: _0x830b9d,
    Fc: _0x2c306c,
    ld: _0x56b9be,
    Ha: _0xfd50b6,
    sd: _0x2c5a47,
    rf: _0x3986d3,
    Qf: _0x574f60,
    Zf: _0x3cd852,
    tb: _0x1593f2,
    of: _0x18bca0,
    ed: _0x3a83c8,
    $c: _0x4667cc,
    ef: _0xf057b6,
    td: _0x2363b4,
    cb: _0xa4dd80,
    fd: _0x306a00,
    zf: _0xe22a6f,
    li: _0x5024cb,
    Xe: _0x4410be,
    hd: _0x3b7109,
    bd: _0x4a3ae,
    _c: _0x1c4c1b,
    id: _0x18d0f1,
    df: _0x279141,
    Qe: _0x22c770,
    kd: _0x1ca894,
    pb: _0x1db093,
    hc: _0x52c62f,
    Wf: _0x98e490,
    Xf: _0x493280,
    pd: _0x206322,
    cd: _0x4db903,
    x: _0x4f25bd,
    O: _0x3af308,
    rd: _0x1539f6,
    sb: _0x35865d,
    Ia: _0x459cb1,
    $f: _0x49294b,
    wa: _0x2e15d8,
    gc: _0x63bed6,
    hg: _0x6b070b,
    Ta: _0x553f9d,
    Je: _0x1c3849,
    He: _0x2b5298,
    $e: _0x5a7119,
    Ue: _0xcba315,
    Se: _0x534de0,
    _e: _0xc4e0b4,
    Oa: _0x2011d5,
    qd: _0x2e1b69,
    K: _0x481fbe,
    Pa: _0x1890e4,
    Le: _0xbfc3f6,
    vf: _0x4dc830,
    C: _0x971efa,
    E: _0x331d5c,
    fk: _0x3d2099,
    af: _0x141425,
    Ve: _0x243c05,
    gk: _0x2846b0,
    Qa: _0x276891,
    Bb: _0x1436fe,
    Na: _0x4f7a2c,
    Ye: _0x59738c,
    Ze: _0x13115c,
    Qb: _0x5d9665,
    Pb: _0x448fc5,
    Ee: _0x1cce88,
    oa: _0x4c9f4d,
    ma: _0xe80851,
    na: _0x1da707,
    De: _0x3da5e5,
    Ge: _0x2e202a,
    Xb: _0x29a007,
    Wb: _0x5d3758,
    Yb: _0x3e5b41,
    We: _0x17569a,
    Rb: _0x278cc8,
    Tb: _0x15ec2e,
    Sb: _0x36a42b,
    Ub: _0x19ed34,
    Vb: _0x2ecc9c,
    ii: _0x3f7d4f,
    xf: _0x896fae,
    wf: _0x2cce12,
    pa: _0x2e0cce,
    uf: _0x748f51,
    _f: _0x21980d,
    qa: _0x1fd841,
    Dj: _0x363690,
    Nj: _0x262c67,
    A: _0x523f6e,
    Z: _0x289026,
    fc: _0x56da14,
    rb: _0x31d371,
    Ce: _0x3cd04c,
    gb: _0x210483,
    ua: _0x1dcb88,
    b: _0xe20103,
    md: _0x17ea3b,
    Jf: _0x1aba00,
    Kf: _0x5e5e10,
    qb: _0x44e7c2,
    Yf: _0x3f18a0,
    ka: _0x53bb7e,
    ai: _0x5326b5,
    Zh: _0x1595ec,
    jc: _0x29e3ee,
    Og: _0x342c09,
    Da: _0x7ede1f,
    Yh: _0x4a58e7,
    ng: _0x578c04,
    mg: _0x1332d8,
    Vh: _0x28a322,
    Wh: _0x2164f1,
    gg: _0x1ea81a,
    Xh: _0x5ad01b,
    Hg: _0x336272,
    Kg: _0x4966ef,
    Bc: _0x3b6786,
    Cc: _0x13fc0a,
    Dc: _0x1e6932,
    yg: _0x2328ce,
    Th: _0x5a7c64,
    Uh: _0x4a797f,
    Sh: _0x356767,
    Oh: _0xad4a21,
    cg: _0x3ca518,
    bg: _0x152616,
    ag: _0x1cd177,
    Ph: _0x36a2f3,
    Qh: _0x5ef7eb,
    Rh: _0x1e0d5d,
    ud: _0x5ea2e7,
    hb: _0x3fcc74,
    Nh: _0x2d6e1f,
    Lh: _0x42cd22,
    Ag: _0x464964,
    Mh: _0x381b5a,
    Eg: _0x5c2cec,
    qg: _0x3a8334,
    Kh: _0x34a2de,
    Ac: _0x416953,
    Jh: _0x1c8168,
    Ih: _0x1ad397,
    Hh: _0x2f695b,
    Gh: _0x5394d3,
    Fh: _0x130415,
    Eh: _0x11d09b,
    $a: _0x138b36,
    Dh: _0x511887,
    fg: _0x1be4aa,
    Ch: _0x4bb4a6,
    cc: _0x7613cc,
    Bh: _0xae8605,
    Ig: _0x5b66dd,
    Mg: _0x5df30f,
    Ca: _0x2c9f22,
    Ba: _0x1de7b9,
    Ah: _0x30e1e0,
    zh: _0x5f4fa2,
    yh: _0x24b416,
    vh: _0x7aab2d,
    sg: _0x5c32a0,
    pg: _0x52646f,
    wh: _0x3b5d95,
    rg: _0x1c14d8,
    xh: _0x15222d,
    uh: _0x3a3a7b,
    kc: _0x1846f0,
    Pg: _0x244b28,
    bc: _0x4d5ac8,
    rh: _0x14df90,
    sh: _0x3a5bf9,
    vg: _0x43b558,
    T: _0xa72971,
    R: _0x548ad1,
    xa: _0x258e82,
    Aa: _0x54150f,
    qh: _0x567a4c,
    mh: _0x4612de,
    ic: _0x505cda,
    nh: _0x17ef8e,
    eg: _0x36c3cf,
    ph: _0x27ceb3,
    Jg: _0x3077a7,
    Ng: _0x155927,
    oh: _0x406cc6,
    gi: _0x23aa3b,
    fb: _0x1aae0d,
    Ya: _0x5836bb,
    aa: _0x3aa7bc,
    $: _0x72ec7b,
    fi: _0x9c455b,
    tf: _0x4279c9,
    lh: _0x561021,
    kh: _0xdd9ed9,
    $h: _0x5b429a,
    Ea: _0x465801,
    jg: _0x4607af,
    dc: _0x43f618,
    ci: _0x186bdd,
    Y: _0x1fdb97,
    Rg: _0x4430e9,
    Qg: _0x532669,
    th: _0x275ec1,
    ih: _0x3faa39,
    yc: _0xe74de3,
    jh: _0x49fbc5,
    bi: _0x183bd3,
    hh: _0x36f6f8,
    wg: _0x325563,
    gh: _0x3194ae,
    kg: _0x1e74b1,
    Xa: _0x2b1012,
    ia: _0x31c74b,
    xc: _0x5f5231,
    ei: _0x598f94,
    _a: _0x4359df,
    _h: _0x193cf2,
    Lg: _0x8d85bc,
    eh: _0x44eb59,
    tg: _0x4b6ee7,
    fh: _0x334d02,
    wc: _0x3343f3,
    ec: _0x88fd0f,
    dg: _0x199f31,
    og: _0x38fe13,
    ca: _0x3a9e4f,
    dh: _0x4a008d,
    xg: _0x458c83,
    ig: _0x370d5a,
    eb: _0x1c7cc4,
    bh: _0x357ee0,
    ch: _0x39a9a4,
    $g: _0xf2ef3b,
    ah: _0x1879f8,
    Zg: _0x4a4bb6,
    Cg: _0x4f5f1a,
    _g: _0xcef49c,
    db: _0x207349,
    Yg: _0x3b33f0,
    zg: _0x899211,
    Bg: _0x1a52a4,
    Xg: _0x49cb45,
    Dg: _0x35c656,
    Gg: _0x52d0c6,
    lc: _0x2e3717,
    ya: _0x3b7974,
    mc: _0x49cf01,
    nc: _0x18fac2,
    oc: _0x513492,
    pc: _0x340e85,
    qc: _0x35933c,
    bb: _0x4d46e1,
    rc: _0x3326db,
    sc: _0x23b67a,
    ba: _0x244a90,
    tc: _0x6b5a19,
    uc: _0x5a9cb4,
    Za: _0xcf6c1a,
    vc: _0x349850,
    za: _0x49af23,
    ug: _0x3be297,
    Tg: _0x896100,
    di: _0x4f7a1b,
    Ug: _0x459ac8,
    Vg: _0x38cbbf,
    lg: _0x2f32f5,
    Wg: _0x33f59d,
    ab: _0x45507a,
    Qc: _0x313e16,
    mi: _0x5d2039,
    H: _0xd1966a,
    N: _0x2351c0,
    Wc: _0x117de5,
    J: _0x5e24a9,
    Bd: _0x229586,
    Rc: _0x5f3769,
    Kc: _0xe477d2,
    W: _0x2830af,
    F: _0x27916b,
    Vc: _0x475c1b,
    L: _0x5256ad,
    w: _0x27729f,
    mb: _0x32c0c0,
    Xc: _0xdb5f3b,
    d: _0x547ffa,
    Pc: _0x394dab,
    $j: _0x41702c,
    c: _0x28bbe6,
    lb: _0x1469f9,
    Jc: _0x4aee62,
    j: _0x127d39,
    ki: _0x37d44f,
    Wj: _0x2c1c0f,
    ji: _0x35ad5d,
    q: _0x2f1d06,
    Fa: _0x1c2e69,
    _j: _0x58c2f9,
    s: _0x496b63,
    u: _0x1d8b22,
    z: _0x51c7cf,
    D: _0x2e9be4,
    P: _0xace2bd,
    nb: _0x35e63d,
    Yc: _0x1641bc,
    Id: _0x266496,
    se: _0x5df39c,
    Xd: _0x345f78,
    Ld: _0x28d5cc,
    Vd: _0x573947,
    ze: _0x24615e,
    Yd: _0x536a91,
    we: _0x1a92b1,
    xe: _0x4a7998,
    je: _0x4570a2,
    Wd: _0x313b3e,
    he: _0x48a0bb,
    Td: _0x48ac9b,
    Cd: _0x1ba703,
    Ud: _0x3b8271,
    _d: _0x2bda21,
    me: _0x3353d0,
    be: _0x2da174,
    ye: _0x3959b5,
    Rd: _0x438413,
    ue: _0x53f7d8,
    Md: _0x117a7e,
    ve: _0x581a72,
    pe: _0x297bd5,
    Be: _0x366ea6,
    wd: _0x2b4c52,
    qe: _0x302c32,
    oe: _0x4a8f5f,
    ne: _0x67cc1d,
    Ed: _0x4fc8b4,
    Ad: _0x5a9e3e,
    vd: _0x409e47,
    ae: _0x732d2c,
    ie: _0x15a686,
    $d: _0x576ce5,
    e: _0x30b475,
    l: _0x3c19e9,
    yf: _0x18b15b,
    y: _0x1f2919,
    G: _0x228fb8,
    m: _0x413aca,
    ja: _0x200fde,
    Od: _0x3907a5,
    zc: _0x1eacef,
    V: _0x152cba,
    Xj: _0x10ebfd,
    Q: _0x226470,
    g: _0x31fbcb,
    Vj: _0x113f9c,
    Qj: _0x99c5a4,
    n: _0x3e3495,
    Pj: _0x5d46bf,
    r: _0x2c4ef7,
    t: _0x416526,
    B: _0x5d863f,
    Zj: _0x1de739,
    Yj: _0x33a774,
    M: _0x4cbebb,
    Zd: _0x31c92b,
    I: _0xa0489d,
    U: _0x1ede41,
    Ic: _0x5a5219,
    Ga: _0x25b2d9,
    Oc: _0x377c54,
    Jd: _0x423461,
    ke: _0x3f3952,
    Kd: _0x292f29,
    Dd: _0x50e64e,
    le: _0x24bbf0,
    ge: _0x2668c7,
    te: _0x15e5c9,
    xd: _0x2d23f9,
    Sd: _0x5b0b0a,
    Nd: _0x36553f,
    Gd: _0x1c9e33,
    fe: _0x4e1cd7,
    re: _0x34a578,
    Fd: _0x3e666b,
    ce: _0x456975,
    Pd: _0x2e0017,
    Qd: _0x5c6c1f,
    Hd: _0x146eb0,
    ee: _0x4739d8,
    yd: _0x11dc40,
    de: _0x5dcab7,
    zd: _0x5887b4,
    i: _0x2d3a83,
    _: _0x369a4e,
    v: _0x115108,
    Ka: _0x2f5eb6,
    La: _0x19a586,
    Ja: _0x4c653f,
    X: _0x5cba2f,
    ob: _0x40d275
  };
  var _0x19f15b = _0x24e38a();
  var _0xa435a4 = _0x4c150b.___wasm_call_ctors = function () {
    return (_0xa435a4 = _0x4c150b.___wasm_call_ctors = _0x4c150b.asm.ik).apply(null, arguments);
  };
  var _0x2cee59 = _0x4c150b._ReleaseKeys = function () {
    return (_0x2cee59 = _0x4c150b._ReleaseKeys = _0x4c150b.asm.jk).apply(null, arguments);
  };
  var _0xff1ec8 = _0x4c150b._SendMessageFloat = function () {
    return (_0xff1ec8 = _0x4c150b._SendMessageFloat = _0x4c150b.asm.kk).apply(null, arguments);
  };
  var _0x3cba1b = _0x4c150b._SendMessageString = function () {
    return (_0x3cba1b = _0x4c150b._SendMessageString = _0x4c150b.asm.lk).apply(null, arguments);
  };
  var _0x580fab = _0x4c150b._SendMessage = function () {
    return (_0x580fab = _0x4c150b._SendMessage = _0x4c150b.asm.mk).apply(null, arguments);
  };
  var _0x1b0b24 = _0x4c150b._SetFullscreen = function () {
    return (_0x1b0b24 = _0x4c150b._SetFullscreen = _0x4c150b.asm.nk).apply(null, arguments);
  };
  var _0x31703d = _0x4c150b._main = function () {
    return (_0x31703d = _0x4c150b._main = _0x4c150b.asm.ok).apply(null, arguments);
  };
  var _0x2904bb = _0x4c150b.___errno_location = function () {
    return (_0x2904bb = _0x4c150b.___errno_location = _0x4c150b.asm.pk).apply(null, arguments);
  };
  var _0x331b7c = _0x4c150b._htonl = function () {
    return (_0x331b7c = _0x4c150b._htonl = _0x4c150b.asm.qk).apply(null, arguments);
  };
  var _0x892f4a = _0x4c150b._htons = function () {
    return (_0x892f4a = _0x4c150b._htons = _0x4c150b.asm.rk).apply(null, arguments);
  };
  var _0x15cc1a = _0x4c150b._ntohs = function () {
    return (_0x15cc1a = _0x4c150b._ntohs = _0x4c150b.asm.sk).apply(null, arguments);
  };
  var _0x417dec = _0x4c150b.__get_tzname = function () {
    return (_0x417dec = _0x4c150b.__get_tzname = _0x4c150b.asm.tk).apply(null, arguments);
  };
  var _0x3f0f3c = _0x4c150b.__get_daylight = function () {
    return (_0x3f0f3c = _0x4c150b.__get_daylight = _0x4c150b.asm.uk).apply(null, arguments);
  };
  var _0x53b73b = _0x4c150b.__get_timezone = function () {
    return (_0x53b73b = _0x4c150b.__get_timezone = _0x4c150b.asm.vk).apply(null, arguments);
  };
  var _0x50e49c = _0x4c150b.stackSave = function () {
    return (_0x50e49c = _0x4c150b.stackSave = _0x4c150b.asm.wk).apply(null, arguments);
  };
  var _0x229d9f = _0x4c150b.stackRestore = function () {
    return (_0x229d9f = _0x4c150b.stackRestore = _0x4c150b.asm.xk).apply(null, arguments);
  };
  var _0x932d25 = _0x4c150b.stackAlloc = function () {
    return (_0x932d25 = _0x4c150b.stackAlloc = _0x4c150b.asm.yk).apply(null, arguments);
  };
  var _0x4a7cd0 = _0x4c150b._setThrew = function () {
    return (_0x4a7cd0 = _0x4c150b._setThrew = _0x4c150b.asm.zk).apply(null, arguments);
  };
  var _0x21e1bc = _0x4c150b.___cxa_can_catch = function () {
    return (_0x21e1bc = _0x4c150b.___cxa_can_catch = _0x4c150b.asm.Ak).apply(null, arguments);
  };
  var _0x339d4d = _0x4c150b.___cxa_is_pointer_type = function () {
    return (_0x339d4d = _0x4c150b.___cxa_is_pointer_type = _0x4c150b.asm.Bk).apply(null, arguments);
  };
  var _0x5d6d4a = _0x4c150b._malloc = function () {
    return (_0x5d6d4a = _0x4c150b._malloc = _0x4c150b.asm.Ck).apply(null, arguments);
  };
  var _0xb102d5 = _0x4c150b._free = function () {
    return (_0xb102d5 = _0x4c150b._free = _0x4c150b.asm.Dk).apply(null, arguments);
  };
  var _0x2803c2 = _0x4c150b._memalign = function () {
    return (_0x2803c2 = _0x4c150b._memalign = _0x4c150b.asm.Ek).apply(null, arguments);
  };
  var _0x163d33 = _0x4c150b._memset = function () {
    return (_0x163d33 = _0x4c150b._memset = _0x4c150b.asm.Fk).apply(null, arguments);
  };
  var _0x408bd6 = _0x4c150b._strlen = function () {
    return (_0x408bd6 = _0x4c150b._strlen = _0x4c150b.asm.Gk).apply(null, arguments);
  };
  var _0x411749 = _0x4c150b.dynCall_iidiiii = function () {
    return (_0x411749 = _0x4c150b.dynCall_iidiiii = _0x4c150b.asm.Ik).apply(null, arguments);
  };
  var _0xc7f8b0 = _0x4c150b.dynCall_vii = function () {
    return (_0xc7f8b0 = _0x4c150b.dynCall_vii = _0x4c150b.asm.Jk).apply(null, arguments);
  };
  var _0x5e1bf4 = _0x4c150b.dynCall_iii = function () {
    return (_0x5e1bf4 = _0x4c150b.dynCall_iii = _0x4c150b.asm.Kk).apply(null, arguments);
  };
  var _0xd7622e = _0x4c150b.dynCall_ii = function () {
    return (_0xd7622e = _0x4c150b.dynCall_ii = _0x4c150b.asm.Lk).apply(null, arguments);
  };
  var _0x10910b = _0x4c150b.dynCall_iiii = function () {
    return (_0x10910b = _0x4c150b.dynCall_iiii = _0x4c150b.asm.Mk).apply(null, arguments);
  };
  var _0x1b786b = _0x4c150b.dynCall_jiji = function () {
    return (_0x1b786b = _0x4c150b.dynCall_jiji = _0x4c150b.asm.Nk).apply(null, arguments);
  };
  var _0x1c7fce = _0x4c150b.dynCall_vi = function () {
    return (_0x1c7fce = _0x4c150b.dynCall_vi = _0x4c150b.asm.Ok).apply(null, arguments);
  };
  var _0x29b8e2 = _0x4c150b.dynCall_iiiii = function () {
    return (_0x29b8e2 = _0x4c150b.dynCall_iiiii = _0x4c150b.asm.Pk).apply(null, arguments);
  };
  var _0x2c15b5 = _0x4c150b.dynCall_viii = function () {
    return (_0x2c15b5 = _0x4c150b.dynCall_viii = _0x4c150b.asm.Qk).apply(null, arguments);
  };
  var _0x237c23 = _0x4c150b.dynCall_i = function () {
    return (_0x237c23 = _0x4c150b.dynCall_i = _0x4c150b.asm.Rk).apply(null, arguments);
  };
  var _0x24caf7 = _0x4c150b.dynCall_v = function () {
    return (_0x24caf7 = _0x4c150b.dynCall_v = _0x4c150b.asm.Sk).apply(null, arguments);
  };
  var _0x3039e2 = _0x4c150b.dynCall_viiiiii = function () {
    return (_0x3039e2 = _0x4c150b.dynCall_viiiiii = _0x4c150b.asm.Tk).apply(null, arguments);
  };
  var _0x5f2f20 = _0x4c150b.dynCall_viiiii = function () {
    return (_0x5f2f20 = _0x4c150b.dynCall_viiiii = _0x4c150b.asm.Uk).apply(null, arguments);
  };
  var _0x1dce6c = _0x4c150b.dynCall_viiii = function () {
    return (_0x1dce6c = _0x4c150b.dynCall_viiii = _0x4c150b.asm.Vk).apply(null, arguments);
  };
  var _0x4c8cfc = _0x4c150b.dynCall_iiiiii = function () {
    return (_0x4c8cfc = _0x4c150b.dynCall_iiiiii = _0x4c150b.asm.Wk).apply(null, arguments);
  };
  var _0x141c4b = _0x4c150b.dynCall_iiij = function () {
    return (_0x141c4b = _0x4c150b.dynCall_iiij = _0x4c150b.asm.Xk).apply(null, arguments);
  };
  var _0xc88a99 = _0x4c150b.dynCall_iiiiiiii = function () {
    return (_0xc88a99 = _0x4c150b.dynCall_iiiiiiii = _0x4c150b.asm.Yk).apply(null, arguments);
  };
  var _0x47340c = _0x4c150b.dynCall_iiijiii = function () {
    return (_0x47340c = _0x4c150b.dynCall_iiijiii = _0x4c150b.asm.Zk).apply(null, arguments);
  };
  var _0x5e0f64 = _0x4c150b.dynCall_iij = function () {
    return (_0x5e0f64 = _0x4c150b.dynCall_iij = _0x4c150b.asm._k).apply(null, arguments);
  };
  var _0x2712ce = _0x4c150b.dynCall_iiiiiii = function () {
    return (_0x2712ce = _0x4c150b.dynCall_iiiiiii = _0x4c150b.asm.$k).apply(null, arguments);
  };
  var _0x162997 = _0x4c150b.dynCall_jii = function () {
    return (_0x162997 = _0x4c150b.dynCall_jii = _0x4c150b.asm.al).apply(null, arguments);
  };
  var _0x374af2 = _0x4c150b.dynCall_viiiiiii = function () {
    return (_0x374af2 = _0x4c150b.dynCall_viiiiiii = _0x4c150b.asm.bl).apply(null, arguments);
  };
  var _0x3232dc = _0x4c150b.dynCall_fiiffi = function () {
    return (_0x3232dc = _0x4c150b.dynCall_fiiffi = _0x4c150b.asm.cl).apply(null, arguments);
  };
  var _0x1c714c = _0x4c150b.dynCall_viiififii = function () {
    return (_0x1c714c = _0x4c150b.dynCall_viiififii = _0x4c150b.asm.dl).apply(null, arguments);
  };
  var _0x1e852d = _0x4c150b.dynCall_fii = function () {
    return (_0x1e852d = _0x4c150b.dynCall_fii = _0x4c150b.asm.el).apply(null, arguments);
  };
  var _0xdc91fe = _0x4c150b.dynCall_viifi = function () {
    return (_0xdc91fe = _0x4c150b.dynCall_viifi = _0x4c150b.asm.fl).apply(null, arguments);
  };
  var _0x13f9c2 = _0x4c150b.dynCall_jiiiiiiiiii = function () {
    return (_0x13f9c2 = _0x4c150b.dynCall_jiiiiiiiiii = _0x4c150b.asm.gl).apply(null, arguments);
  };
  var _0x5b9fb2 = _0x4c150b.dynCall_iijji = function () {
    return (_0x5b9fb2 = _0x4c150b.dynCall_iijji = _0x4c150b.asm.hl).apply(null, arguments);
  };
  var _0x180e00 = _0x4c150b.dynCall_iiddi = function () {
    return (_0x180e00 = _0x4c150b.dynCall_iiddi = _0x4c150b.asm.il).apply(null, arguments);
  };
  var _0x412bc0 = _0x4c150b.dynCall_iiffi = function () {
    return (_0x412bc0 = _0x4c150b.dynCall_iiffi = _0x4c150b.asm.jl).apply(null, arguments);
  };
  var _0x4d3171 = _0x4c150b.dynCall_dii = function () {
    return (_0x4d3171 = _0x4c150b.dynCall_dii = _0x4c150b.asm.kl).apply(null, arguments);
  };
  var _0x4eb50e = _0x4c150b.dynCall_ifi = function () {
    return (_0x4eb50e = _0x4c150b.dynCall_ifi = _0x4c150b.asm.ll).apply(null, arguments);
  };
  var _0x4f4297 = _0x4c150b.dynCall_idi = function () {
    return (_0x4f4297 = _0x4c150b.dynCall_idi = _0x4c150b.asm.ml).apply(null, arguments);
  };
  var _0x5d4980 = _0x4c150b.dynCall_jiii = function () {
    return (_0x5d4980 = _0x4c150b.dynCall_jiii = _0x4c150b.asm.nl).apply(null, arguments);
  };
  var _0x341877 = _0x4c150b.dynCall_viiiiiiii = function () {
    return (_0x341877 = _0x4c150b.dynCall_viiiiiiii = _0x4c150b.asm.ol).apply(null, arguments);
  };
  var _0x2e29f7 = _0x4c150b.dynCall_viiiiiiiii = function () {
    return (_0x2e29f7 = _0x4c150b.dynCall_viiiiiiiii = _0x4c150b.asm.pl).apply(null, arguments);
  };
  var _0x3ec6b2 = _0x4c150b.dynCall_jiiii = function () {
    return (_0x3ec6b2 = _0x4c150b.dynCall_jiiii = _0x4c150b.asm.ql).apply(null, arguments);
  };
  var _0x170494 = _0x4c150b.dynCall_diii = function () {
    return (_0x170494 = _0x4c150b.dynCall_diii = _0x4c150b.asm.rl).apply(null, arguments);
  };
  var _0x39741f = _0x4c150b.dynCall_vifi = function () {
    return (_0x39741f = _0x4c150b.dynCall_vifi = _0x4c150b.asm.sl).apply(null, arguments);
  };
  var _0x176dfc = _0x4c150b.dynCall_viji = function () {
    return (_0x176dfc = _0x4c150b.dynCall_viji = _0x4c150b.asm.tl).apply(null, arguments);
  };
  var _0x2081dc = _0x4c150b.dynCall_viiiiiiiiiiii = function () {
    return (_0x2081dc = _0x4c150b.dynCall_viiiiiiiiiiii = _0x4c150b.asm.ul).apply(null, arguments);
  };
  var _0x7726e0 = _0x4c150b.dynCall_viiiiiiiiiiiii = function () {
    return (_0x7726e0 = _0x4c150b.dynCall_viiiiiiiiiiiii = _0x4c150b.asm.vl).apply(null, arguments);
  };
  var _0x493836 = _0x4c150b.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x493836 = _0x4c150b.dynCall_viiiiiiiiiiiiii = _0x4c150b.asm.wl).apply(null, arguments);
  };
  var _0x37cb29 = _0x4c150b.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0x37cb29 = _0x4c150b.dynCall_viiiiiiiiiiiiiii = _0x4c150b.asm.xl).apply(null, arguments);
  };
  var _0x46e5d1 = _0x4c150b.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x46e5d1 = _0x4c150b.dynCall_viiiiiiiiiiiiiiii = _0x4c150b.asm.yl).apply(null, arguments);
  };
  var _0x5cc49f = _0x4c150b.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0x5cc49f = _0x4c150b.dynCall_viiiiiiiiiiiiiiiii = _0x4c150b.asm.zl).apply(null, arguments);
  };
  var _0x2c1d8f = _0x4c150b.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x2c1d8f = _0x4c150b.dynCall_viiiiiiiiiiiiiiiiii = _0x4c150b.asm.Al).apply(null, arguments);
  };
  var _0x5e2051 = _0x4c150b.dynCall_vijii = function () {
    return (_0x5e2051 = _0x4c150b.dynCall_vijii = _0x4c150b.asm.Bl).apply(null, arguments);
  };
  var _0x2b3824 = _0x4c150b.dynCall_viidi = function () {
    return (_0x2b3824 = _0x4c150b.dynCall_viidi = _0x4c150b.asm.Cl).apply(null, arguments);
  };
  var _0xf04575 = _0x4c150b.dynCall_viiji = function () {
    return (_0xf04575 = _0x4c150b.dynCall_viiji = _0x4c150b.asm.Dl).apply(null, arguments);
  };
  var _0x35b65d = _0x4c150b.dynCall_viiidi = function () {
    return (_0x35b65d = _0x4c150b.dynCall_viiidi = _0x4c150b.asm.El).apply(null, arguments);
  };
  var _0x8fdb9a = _0x4c150b.dynCall_viiiji = function () {
    return (_0x8fdb9a = _0x4c150b.dynCall_viiiji = _0x4c150b.asm.Fl).apply(null, arguments);
  };
  var _0x24bbc5 = _0x4c150b.dynCall_viiifi = function () {
    return (_0x24bbc5 = _0x4c150b.dynCall_viiifi = _0x4c150b.asm.Gl).apply(null, arguments);
  };
  var _0x1ca453 = _0x4c150b.dynCall_vijijii = function () {
    return (_0x1ca453 = _0x4c150b.dynCall_vijijii = _0x4c150b.asm.Hl).apply(null, arguments);
  };
  var _0x464697 = _0x4c150b.dynCall_viiiiiiiiii = function () {
    return (_0x464697 = _0x4c150b.dynCall_viiiiiiiiii = _0x4c150b.asm.Il).apply(null, arguments);
  };
  var _0x4f6b4f = _0x4c150b.dynCall_viiiiiiiiiii = function () {
    return (_0x4f6b4f = _0x4c150b.dynCall_viiiiiiiiiii = _0x4c150b.asm.Jl).apply(null, arguments);
  };
  var _0x49c4ff = _0x4c150b.dynCall_viidii = function () {
    return (_0x49c4ff = _0x4c150b.dynCall_viidii = _0x4c150b.asm.Kl).apply(null, arguments);
  };
  var _0x5b9221 = _0x4c150b.dynCall_viijii = function () {
    return (_0x5b9221 = _0x4c150b.dynCall_viijii = _0x4c150b.asm.Ll).apply(null, arguments);
  };
  var _0x2e458a = _0x4c150b.dynCall_iiji = function () {
    return (_0x2e458a = _0x4c150b.dynCall_iiji = _0x4c150b.asm.Ml).apply(null, arguments);
  };
  var _0xa37eb = _0x4c150b.dynCall_vjiii = function () {
    return (_0xa37eb = _0x4c150b.dynCall_vjiii = _0x4c150b.asm.Nl).apply(null, arguments);
  };
  var _0x215401 = _0x4c150b.dynCall_vijiii = function () {
    return (_0x215401 = _0x4c150b.dynCall_vijiii = _0x4c150b.asm.Ol).apply(null, arguments);
  };
  var _0x4186f1 = _0x4c150b.dynCall_vjiiiiii = function () {
    return (_0x4186f1 = _0x4c150b.dynCall_vjiiiiii = _0x4c150b.asm.Pl).apply(null, arguments);
  };
  var _0x56456f = _0x4c150b.dynCall_vijiiiiii = function () {
    return (_0x56456f = _0x4c150b.dynCall_vijiiiiii = _0x4c150b.asm.Ql).apply(null, arguments);
  };
  var _0x5d6fda = _0x4c150b.dynCall_vijiiii = function () {
    return (_0x5d6fda = _0x4c150b.dynCall_vijiiii = _0x4c150b.asm.Rl).apply(null, arguments);
  };
  var _0x4eff2a = _0x4c150b.dynCall_vidi = function () {
    return (_0x4eff2a = _0x4c150b.dynCall_vidi = _0x4c150b.asm.Sl).apply(null, arguments);
  };
  var _0x356b9b = _0x4c150b.dynCall_fffi = function () {
    return (_0x356b9b = _0x4c150b.dynCall_fffi = _0x4c150b.asm.Tl).apply(null, arguments);
  };
  var _0x51e397 = _0x4c150b.dynCall_ijji = function () {
    return (_0x51e397 = _0x4c150b.dynCall_ijji = _0x4c150b.asm.Ul).apply(null, arguments);
  };
  var _0x1b661e = _0x4c150b.dynCall_jji = function () {
    return (_0x1b661e = _0x4c150b.dynCall_jji = _0x4c150b.asm.Vl).apply(null, arguments);
  };
  var _0x22b301 = _0x4c150b.dynCall_jjji = function () {
    return (_0x22b301 = _0x4c150b.dynCall_jjji = _0x4c150b.asm.Wl).apply(null, arguments);
  };
  var _0x1c85af = _0x4c150b.dynCall_dddi = function () {
    return (_0x1c85af = _0x4c150b.dynCall_dddi = _0x4c150b.asm.Xl).apply(null, arguments);
  };
  var _0x447b95 = _0x4c150b.dynCall_fiii = function () {
    return (_0x447b95 = _0x4c150b.dynCall_fiii = _0x4c150b.asm.Yl).apply(null, arguments);
  };
  var _0xd74355 = _0x4c150b.dynCall_diiii = function () {
    return (_0xd74355 = _0x4c150b.dynCall_diiii = _0x4c150b.asm.Zl).apply(null, arguments);
  };
  var _0x271858 = _0x4c150b.dynCall_iidi = function () {
    return (_0x271858 = _0x4c150b.dynCall_iidi = _0x4c150b.asm._l).apply(null, arguments);
  };
  var _0x4ffdcc = _0x4c150b.dynCall_iifi = function () {
    return (_0x4ffdcc = _0x4c150b.dynCall_iifi = _0x4c150b.asm.$l).apply(null, arguments);
  };
  var _0x194548 = _0x4c150b.dynCall_iji = function () {
    return (_0x194548 = _0x4c150b.dynCall_iji = _0x4c150b.asm.am).apply(null, arguments);
  };
  var _0x220550 = _0x4c150b.dynCall_iiiiiiiii = function () {
    return (_0x220550 = _0x4c150b.dynCall_iiiiiiiii = _0x4c150b.asm.bm).apply(null, arguments);
  };
  var _0x2bece0 = _0x4c150b.dynCall_iiiiidii = function () {
    return (_0x2bece0 = _0x4c150b.dynCall_iiiiidii = _0x4c150b.asm.cm).apply(null, arguments);
  };
  var _0x5bcbca = _0x4c150b.dynCall_iiiiiiiiii = function () {
    return (_0x5bcbca = _0x4c150b.dynCall_iiiiiiiiii = _0x4c150b.asm.dm).apply(null, arguments);
  };
  var _0x3c5734 = _0x4c150b.dynCall_viiiiiiifiifiii = function () {
    return (_0x3c5734 = _0x4c150b.dynCall_viiiiiiifiifiii = _0x4c150b.asm.em).apply(null, arguments);
  };
  var _0x1ce8a9 = _0x4c150b.dynCall_viiiiiiifddfiii = function () {
    return (_0x1ce8a9 = _0x4c150b.dynCall_viiiiiiifddfiii = _0x4c150b.asm.fm).apply(null, arguments);
  };
  var _0x257b37 = _0x4c150b.dynCall_viiiiiiifjjfiii = function () {
    return (_0x257b37 = _0x4c150b.dynCall_viiiiiiifjjfiii = _0x4c150b.asm.gm).apply(null, arguments);
  };
  var _0x1d896d = _0x4c150b.dynCall_viiiiiiiffffiii = function () {
    return (_0x1d896d = _0x4c150b.dynCall_viiiiiiiffffiii = _0x4c150b.asm.hm).apply(null, arguments);
  };
  var _0x4ab171 = _0x4c150b.dynCall_viiffi = function () {
    return (_0x4ab171 = _0x4c150b.dynCall_viiffi = _0x4c150b.asm.im).apply(null, arguments);
  };
  var _0xb24d8 = _0x4c150b.dynCall_iiiifii = function () {
    return (_0xb24d8 = _0x4c150b.dynCall_iiiifii = _0x4c150b.asm.jm).apply(null, arguments);
  };
  var _0x4d0c5b = _0x4c150b.dynCall_iiifii = function () {
    return (_0x4d0c5b = _0x4c150b.dynCall_iiifii = _0x4c150b.asm.km).apply(null, arguments);
  };
  var _0x21674e = _0x4c150b.dynCall_viiiifii = function () {
    return (_0x21674e = _0x4c150b.dynCall_viiiifii = _0x4c150b.asm.lm).apply(null, arguments);
  };
  var _0x1ff4da = _0x4c150b.dynCall_viijjii = function () {
    return (_0x1ff4da = _0x4c150b.dynCall_viijjii = _0x4c150b.asm.mm).apply(null, arguments);
  };
  var _0x4c3121 = _0x4c150b.dynCall_iiiji = function () {
    return (_0x4c3121 = _0x4c150b.dynCall_iiiji = _0x4c150b.asm.nm).apply(null, arguments);
  };
  var _0x40b14f = _0x4c150b.dynCall_iiidi = function () {
    return (_0x40b14f = _0x4c150b.dynCall_iiidi = _0x4c150b.asm.om).apply(null, arguments);
  };
  var _0x1dfb25 = _0x4c150b.dynCall_iiiiji = function () {
    return (_0x1dfb25 = _0x4c150b.dynCall_iiiiji = _0x4c150b.asm.pm).apply(null, arguments);
  };
  var _0x6d97ad = _0x4c150b.dynCall_viij = function () {
    return (_0x6d97ad = _0x4c150b.dynCall_viij = _0x4c150b.asm.qm).apply(null, arguments);
  };
  var _0x15e319 = _0x4c150b.dynCall_jiiji = function () {
    return (_0x15e319 = _0x4c150b.dynCall_jiiji = _0x4c150b.asm.rm).apply(null, arguments);
  };
  var _0x4fca8c = _0x4c150b.dynCall_ji = function () {
    return (_0x4fca8c = _0x4c150b.dynCall_ji = _0x4c150b.asm.sm).apply(null, arguments);
  };
  var _0x22013b = _0x4c150b.dynCall_viijiiijiiii = function () {
    return (_0x22013b = _0x4c150b.dynCall_viijiiijiiii = _0x4c150b.asm.tm).apply(null, arguments);
  };
  var _0x102893 = _0x4c150b.dynCall_iiijii = function () {
    return (_0x102893 = _0x4c150b.dynCall_iiijii = _0x4c150b.asm.um).apply(null, arguments);
  };
  var _0x4cd689 = _0x4c150b.dynCall_iijiiii = function () {
    return (_0x4cd689 = _0x4c150b.dynCall_iijiiii = _0x4c150b.asm.vm).apply(null, arguments);
  };
  var _0x3c6b56 = _0x4c150b.dynCall_jijiii = function () {
    return (_0x3c6b56 = _0x4c150b.dynCall_jijiii = _0x4c150b.asm.wm).apply(null, arguments);
  };
  var _0x32d120 = _0x4c150b.dynCall_iijiiiiii = function () {
    return (_0x32d120 = _0x4c150b.dynCall_iijiiiiii = _0x4c150b.asm.xm).apply(null, arguments);
  };
  var _0x5e131d = _0x4c150b.dynCall_iijjiiiiii = function () {
    return (_0x5e131d = _0x4c150b.dynCall_iijjiiiiii = _0x4c150b.asm.ym).apply(null, arguments);
  };
  var _0x51dc75 = _0x4c150b.dynCall_iiiijjii = function () {
    return (_0x51dc75 = _0x4c150b.dynCall_iiiijjii = _0x4c150b.asm.zm).apply(null, arguments);
  };
  var _0x54c5a1 = _0x4c150b.dynCall_iijii = function () {
    return (_0x54c5a1 = _0x4c150b.dynCall_iijii = _0x4c150b.asm.Am).apply(null, arguments);
  };
  var _0x18077b = _0x4c150b.dynCall_iijiii = function () {
    return (_0x18077b = _0x4c150b.dynCall_iijiii = _0x4c150b.asm.Bm).apply(null, arguments);
  };
  var _0x1d63be = _0x4c150b.dynCall_jdi = function () {
    return (_0x1d63be = _0x4c150b.dynCall_jdi = _0x4c150b.asm.Cm).apply(null, arguments);
  };
  var _0x4e6f22 = _0x4c150b.dynCall_vijjji = function () {
    return (_0x4e6f22 = _0x4c150b.dynCall_vijjji = _0x4c150b.asm.Dm).apply(null, arguments);
  };
  var _0x5c0e17 = _0x4c150b.dynCall_viffffi = function () {
    return (_0x5c0e17 = _0x4c150b.dynCall_viffffi = _0x4c150b.asm.Em).apply(null, arguments);
  };
  var _0x1058bc = _0x4c150b.dynCall_viiidiii = function () {
    return (_0x1058bc = _0x4c150b.dynCall_viiidiii = _0x4c150b.asm.Fm).apply(null, arguments);
  };
  var _0x1cb328 = _0x4c150b.dynCall_viidiiji = function () {
    return (_0x1cb328 = _0x4c150b.dynCall_viidiiji = _0x4c150b.asm.Gm).apply(null, arguments);
  };
  var _0x35739a = _0x4c150b.dynCall_viijijiii = function () {
    return (_0x35739a = _0x4c150b.dynCall_viijijiii = _0x4c150b.asm.Hm).apply(null, arguments);
  };
  var _0xafe16 = _0x4c150b.dynCall_iiiifi = function () {
    return (_0xafe16 = _0x4c150b.dynCall_iiiifi = _0x4c150b.asm.Im).apply(null, arguments);
  };
  var _0x5c8644 = _0x4c150b.dynCall_iiiiidi = function () {
    return (_0x5c8644 = _0x4c150b.dynCall_iiiiidi = _0x4c150b.asm.Jm).apply(null, arguments);
  };
  var _0x101ea6 = _0x4c150b.dynCall_jjii = function () {
    return (_0x101ea6 = _0x4c150b.dynCall_jjii = _0x4c150b.asm.Km).apply(null, arguments);
  };
  var _0x384752 = _0x4c150b.dynCall_jidi = function () {
    return (_0x384752 = _0x4c150b.dynCall_jidi = _0x4c150b.asm.Lm).apply(null, arguments);
  };
  var _0x420afa = _0x4c150b.dynCall_fiiii = function () {
    return (_0x420afa = _0x4c150b.dynCall_fiiii = _0x4c150b.asm.Mm).apply(null, arguments);
  };
  var _0x1aaaac = _0x4c150b.dynCall_iiiiij = function () {
    return (_0x1aaaac = _0x4c150b.dynCall_iiiiij = _0x4c150b.asm.Nm).apply(null, arguments);
  };
  var _0x525f0c = _0x4c150b.dynCall_viiij = function () {
    return (_0x525f0c = _0x4c150b.dynCall_viiij = _0x4c150b.asm.Om).apply(null, arguments);
  };
  var _0x46997d = _0x4c150b.dynCall_ijiii = function () {
    return (_0x46997d = _0x4c150b.dynCall_ijiii = _0x4c150b.asm.Pm).apply(null, arguments);
  };
  var _0x18742a = _0x4c150b.dynCall_vifii = function () {
    return (_0x18742a = _0x4c150b.dynCall_vifii = _0x4c150b.asm.Qm).apply(null, arguments);
  };
  var _0x2bf486 = _0x4c150b.dynCall_diiid = function () {
    return (_0x2bf486 = _0x4c150b.dynCall_diiid = _0x4c150b.asm.Rm).apply(null, arguments);
  };
  var _0x564654 = _0x4c150b.dynCall_jiiij = function () {
    return (_0x564654 = _0x4c150b.dynCall_jiiij = _0x4c150b.asm.Sm).apply(null, arguments);
  };
  var _0x32f7cd = _0x4c150b.dynCall_fiiif = function () {
    return (_0x32f7cd = _0x4c150b.dynCall_fiiif = _0x4c150b.asm.Tm).apply(null, arguments);
  };
  var _0x38ac4b = _0x4c150b.dynCall_viif = function () {
    return (_0x38ac4b = _0x4c150b.dynCall_viif = _0x4c150b.asm.Um).apply(null, arguments);
  };
  var _0x17e5eb = _0x4c150b.dynCall_viiiifi = function () {
    return (_0x17e5eb = _0x4c150b.dynCall_viiiifi = _0x4c150b.asm.Vm).apply(null, arguments);
  };
  var _0x591f54 = _0x4c150b.dynCall_viiiijiii = function () {
    return (_0x591f54 = _0x4c150b.dynCall_viiiijiii = _0x4c150b.asm.Wm).apply(null, arguments);
  };
  var _0x54068f = _0x4c150b.dynCall_iiiiiiiiiji = function () {
    return (_0x54068f = _0x4c150b.dynCall_iiiiiiiiiji = _0x4c150b.asm.Xm).apply(null, arguments);
  };
  var _0x5f5235 = _0x4c150b.dynCall_vji = function () {
    return (_0x5f5235 = _0x4c150b.dynCall_vji = _0x4c150b.asm.Ym).apply(null, arguments);
  };
  var _0x5ab95f = _0x4c150b.dynCall_viijji = function () {
    return (_0x5ab95f = _0x4c150b.dynCall_viijji = _0x4c150b.asm.Zm).apply(null, arguments);
  };
  var _0x3d757d = _0x4c150b.dynCall_viiijj = function () {
    return (_0x3d757d = _0x4c150b.dynCall_viiijj = _0x4c150b.asm._m).apply(null, arguments);
  };
  var _0x226886 = _0x4c150b.dynCall_viiiiiiiiifi = function () {
    return (_0x226886 = _0x4c150b.dynCall_viiiiiiiiifi = _0x4c150b.asm.$m).apply(null, arguments);
  };
  var _0x4ed0d8 = _0x4c150b.dynCall_iiiiiiiiiiiii = function () {
    return (_0x4ed0d8 = _0x4c150b.dynCall_iiiiiiiiiiiii = _0x4c150b.asm.an).apply(null, arguments);
  };
  var _0x5e8871 = _0x4c150b.dynCall_fi = function () {
    return (_0x5e8871 = _0x4c150b.dynCall_fi = _0x4c150b.asm.bn).apply(null, arguments);
  };
  var _0x3fb5ca = _0x4c150b.dynCall_iiifi = function () {
    return (_0x3fb5ca = _0x4c150b.dynCall_iiifi = _0x4c150b.asm.cn).apply(null, arguments);
  };
  var _0x25bd06 = _0x4c150b.dynCall_viiff = function () {
    return (_0x25bd06 = _0x4c150b.dynCall_viiff = _0x4c150b.asm.dn).apply(null, arguments);
  };
  var _0x4ad58a = _0x4c150b.dynCall_iiiiiiiiiiii = function () {
    return (_0x4ad58a = _0x4c150b.dynCall_iiiiiiiiiiii = _0x4c150b.asm.en).apply(null, arguments);
  };
  var _0x3f5269 = _0x4c150b.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x3f5269 = _0x4c150b.dynCall_iiiiiiiiiiiiii = _0x4c150b.asm.fn).apply(null, arguments);
  };
  var _0x27c0fd = _0x4c150b.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x27c0fd = _0x4c150b.dynCall_iiiiiiiiiiiiiii = _0x4c150b.asm.gn).apply(null, arguments);
  };
  var _0x14d142 = _0x4c150b.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x14d142 = _0x4c150b.dynCall_iiiiiiiiiiiiiiii = _0x4c150b.asm.hn).apply(null, arguments);
  };
  var _0x2fd98f = _0x4c150b.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x2fd98f = _0x4c150b.dynCall_iiiiiiiiiiiiiiiii = _0x4c150b.asm.jn).apply(null, arguments);
  };
  var _0x443b93 = _0x4c150b.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x443b93 = _0x4c150b.dynCall_iiiiiiiiiiiiiiiiii = _0x4c150b.asm.kn).apply(null, arguments);
  };
  var _0xeff5e3 = _0x4c150b.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0xeff5e3 = _0x4c150b.dynCall_iiiiiiiiiiiiiiiiiii = _0x4c150b.asm.ln).apply(null, arguments);
  };
  var _0x3bef8c = _0x4c150b.dynCall_fifi = function () {
    return (_0x3bef8c = _0x4c150b.dynCall_fifi = _0x4c150b.asm.mn).apply(null, arguments);
  };
  var _0x50481b = _0x4c150b.dynCall_fiifi = function () {
    return (_0x50481b = _0x4c150b.dynCall_fiifi = _0x4c150b.asm.nn).apply(null, arguments);
  };
  var _0x3c569e = _0x4c150b.dynCall_iiiiiiiiiii = function () {
    return (_0x3c569e = _0x4c150b.dynCall_iiiiiiiiiii = _0x4c150b.asm.on).apply(null, arguments);
  };
  var _0xf554f = _0x4c150b.dynCall_ddiii = function () {
    return (_0xf554f = _0x4c150b.dynCall_ddiii = _0x4c150b.asm.pn).apply(null, arguments);
  };
  var _0x5ce6c5 = _0x4c150b.dynCall_fiffffi = function () {
    return (_0x5ce6c5 = _0x4c150b.dynCall_fiffffi = _0x4c150b.asm.qn).apply(null, arguments);
  };
  var _0x49c7ef = _0x4c150b.dynCall_dji = function () {
    return (_0x49c7ef = _0x4c150b.dynCall_dji = _0x4c150b.asm.rn).apply(null, arguments);
  };
  var _0x27f775 = _0x4c150b.dynCall_viijiiiiii = function () {
    return (_0x27f775 = _0x4c150b.dynCall_viijiiiiii = _0x4c150b.asm.sn).apply(null, arguments);
  };
  var _0x998347 = _0x4c150b.dynCall_vjjjiiii = function () {
    return (_0x998347 = _0x4c150b.dynCall_vjjjiiii = _0x4c150b.asm.tn).apply(null, arguments);
  };
  var _0x49273d = _0x4c150b.dynCall_vjiiiii = function () {
    return (_0x49273d = _0x4c150b.dynCall_vjiiiii = _0x4c150b.asm.un).apply(null, arguments);
  };
  var _0x5877a3 = _0x4c150b.dynCall_jiiiii = function () {
    return (_0x5877a3 = _0x4c150b.dynCall_jiiiii = _0x4c150b.asm.vn).apply(null, arguments);
  };
  var _0x14e47c = _0x4c150b.dynCall_viffi = function () {
    return (_0x14e47c = _0x4c150b.dynCall_viffi = _0x4c150b.asm.wn).apply(null, arguments);
  };
  var _0x275042 = _0x4c150b.dynCall_vffi = function () {
    return (_0x275042 = _0x4c150b.dynCall_vffi = _0x4c150b.asm.xn).apply(null, arguments);
  };
  var _0xfd6f5a = _0x4c150b.dynCall_vfffffdi = function () {
    return (_0xfd6f5a = _0x4c150b.dynCall_vfffffdi = _0x4c150b.asm.yn).apply(null, arguments);
  };
  var _0x6e4dfe = _0x4c150b.dynCall_iiiffi = function () {
    return (_0x6e4dfe = _0x4c150b.dynCall_iiiffi = _0x4c150b.asm.zn).apply(null, arguments);
  };
  var _0x46cb2e = _0x4c150b.dynCall_iifii = function () {
    return (_0x46cb2e = _0x4c150b.dynCall_iifii = _0x4c150b.asm.An).apply(null, arguments);
  };
  var _0x49dc4c = _0x4c150b.dynCall_iiffii = function () {
    return (_0x49dc4c = _0x4c150b.dynCall_iiffii = _0x4c150b.asm.Bn).apply(null, arguments);
  };
  var _0x3b10d1 = _0x4c150b.dynCall_iiifiii = function () {
    return (_0x3b10d1 = _0x4c150b.dynCall_iiifiii = _0x4c150b.asm.Cn).apply(null, arguments);
  };
  var _0x4e6227 = _0x4c150b.dynCall_iiififii = function () {
    return (_0x4e6227 = _0x4c150b.dynCall_iiififii = _0x4c150b.asm.Dn).apply(null, arguments);
  };
  var _0x4ffb17 = _0x4c150b.dynCall_iiifiiiii = function () {
    return (_0x4ffb17 = _0x4c150b.dynCall_iiifiiiii = _0x4c150b.asm.En).apply(null, arguments);
  };
  var _0x3bd6fb = _0x4c150b.dynCall_iiffifiiii = function () {
    return (_0x3bd6fb = _0x4c150b.dynCall_iiffifiiii = _0x4c150b.asm.Fn).apply(null, arguments);
  };
  var _0x198bee = _0x4c150b.dynCall_iifiifiiii = function () {
    return (_0x198bee = _0x4c150b.dynCall_iifiifiiii = _0x4c150b.asm.Gn).apply(null, arguments);
  };
  var _0x4b0dc1 = _0x4c150b.dynCall_iiiifiii = function () {
    return (_0x4b0dc1 = _0x4c150b.dynCall_iiiifiii = _0x4c150b.asm.Hn).apply(null, arguments);
  };
  var _0x3bc627 = _0x4c150b.dynCall_iiifiiii = function () {
    return (_0x3bc627 = _0x4c150b.dynCall_iiifiiii = _0x4c150b.asm.In).apply(null, arguments);
  };
  var _0x3f4ce0 = _0x4c150b.dynCall_iiiffiii = function () {
    return (_0x3f4ce0 = _0x4c150b.dynCall_iiiffiii = _0x4c150b.asm.Jn).apply(null, arguments);
  };
  var _0x8d24e5 = _0x4c150b.dynCall_iiiiifii = function () {
    return (_0x8d24e5 = _0x4c150b.dynCall_iiiiifii = _0x4c150b.asm.Kn).apply(null, arguments);
  };
  var _0x4a0f9d = _0x4c150b.dynCall_iifiifffii = function () {
    return (_0x4a0f9d = _0x4c150b.dynCall_iifiifffii = _0x4c150b.asm.Ln).apply(null, arguments);
  };
  var _0x5e5b24 = _0x4c150b.dynCall_viiffii = function () {
    return (_0x5e5b24 = _0x4c150b.dynCall_viiffii = _0x4c150b.asm.Mn).apply(null, arguments);
  };
  var _0x4c8d09 = _0x4c150b.dynCall_iiiffii = function () {
    return (_0x4c8d09 = _0x4c150b.dynCall_iiiffii = _0x4c150b.asm.Nn).apply(null, arguments);
  };
  var _0x2cd846 = _0x4c150b.dynCall_viifffi = function () {
    return (_0x2cd846 = _0x4c150b.dynCall_viifffi = _0x4c150b.asm.On).apply(null, arguments);
  };
  var _0x4d3025 = _0x4c150b.dynCall_iiifffi = function () {
    return (_0x4d3025 = _0x4c150b.dynCall_iiifffi = _0x4c150b.asm.Pn).apply(null, arguments);
  };
  var _0x13407e = _0x4c150b.dynCall_viiiidiiii = function () {
    return (_0x13407e = _0x4c150b.dynCall_viiiidiiii = _0x4c150b.asm.Qn).apply(null, arguments);
  };
  var _0x240735 = _0x4c150b.dynCall_viifii = function () {
    return (_0x240735 = _0x4c150b.dynCall_viifii = _0x4c150b.asm.Rn).apply(null, arguments);
  };
  var _0x269522 = _0x4c150b.dynCall_ffffiii = function () {
    return (_0x269522 = _0x4c150b.dynCall_ffffiii = _0x4c150b.asm.Sn).apply(null, arguments);
  };
  var _0x50e9d5 = _0x4c150b.dynCall_viiifii = function () {
    return (_0x50e9d5 = _0x4c150b.dynCall_viiifii = _0x4c150b.asm.Tn).apply(null, arguments);
  };
  var _0x1001b9 = _0x4c150b.dynCall_vfi = function () {
    return (_0x1001b9 = _0x4c150b.dynCall_vfi = _0x4c150b.asm.Un).apply(null, arguments);
  };
  var _0x7111f7 = _0x4c150b.dynCall_viiiiifi = function () {
    return (_0x7111f7 = _0x4c150b.dynCall_viiiiifi = _0x4c150b.asm.Vn).apply(null, arguments);
  };
  var _0xe683f0 = _0x4c150b.dynCall_viiiiffi = function () {
    return (_0xe683f0 = _0x4c150b.dynCall_viiiiffi = _0x4c150b.asm.Wn).apply(null, arguments);
  };
  var _0x3cf87f = _0x4c150b.dynCall_viiiffi = function () {
    return (_0x3cf87f = _0x4c150b.dynCall_viiiffi = _0x4c150b.asm.Xn).apply(null, arguments);
  };
  var _0x516d73 = _0x4c150b.dynCall_fiffi = function () {
    return (_0x516d73 = _0x4c150b.dynCall_fiffi = _0x4c150b.asm.Yn).apply(null, arguments);
  };
  var _0x1a2710 = _0x4c150b.dynCall_ifii = function () {
    return (_0x1a2710 = _0x4c150b.dynCall_ifii = _0x4c150b.asm.Zn).apply(null, arguments);
  };
  var _0x314a71 = _0x4c150b.dynCall_vjii = function () {
    return (_0x314a71 = _0x4c150b.dynCall_vjii = _0x4c150b.asm._n).apply(null, arguments);
  };
  var _0x8a193d = _0x4c150b.dynCall_vijiiiiiiii = function () {
    return (_0x8a193d = _0x4c150b.dynCall_vijiiiiiiii = _0x4c150b.asm.$n).apply(null, arguments);
  };
  var _0x54e453 = _0x4c150b.dynCall_vijiiiiiiiii = function () {
    return (_0x54e453 = _0x4c150b.dynCall_vijiiiiiiiii = _0x4c150b.asm.ao).apply(null, arguments);
  };
  var _0x5f4b17 = _0x4c150b.dynCall_vijijijii = function () {
    return (_0x5f4b17 = _0x4c150b.dynCall_vijijijii = _0x4c150b.asm.bo).apply(null, arguments);
  };
  var _0x3b8e57 = _0x4c150b.dynCall_iiidiiii = function () {
    return (_0x3b8e57 = _0x4c150b.dynCall_iiidiiii = _0x4c150b.asm.co).apply(null, arguments);
  };
  var _0xfb26e3 = _0x4c150b.dynCall_viijiii = function () {
    return (_0xfb26e3 = _0x4c150b.dynCall_viijiii = _0x4c150b.asm.eo).apply(null, arguments);
  };
  var _0xeedc04 = _0x4c150b.dynCall_viiiijii = function () {
    return (_0xeedc04 = _0x4c150b.dynCall_viiiijii = _0x4c150b.asm.fo).apply(null, arguments);
  };
  var _0x881d6a = _0x4c150b.dynCall_viiijiii = function () {
    return (_0x881d6a = _0x4c150b.dynCall_viiijiii = _0x4c150b.asm.go).apply(null, arguments);
  };
  var _0x55794e = _0x4c150b.dynCall_iijiiiii = function () {
    return (_0x55794e = _0x4c150b.dynCall_iijiiiii = _0x4c150b.asm.ho).apply(null, arguments);
  };
  var _0x298edf = _0x4c150b.dynCall_iijiiiiiiii = function () {
    return (_0x298edf = _0x4c150b.dynCall_iijiiiiiiii = _0x4c150b.asm.io).apply(null, arguments);
  };
  var _0x1cd130 = _0x4c150b.dynCall_viiiijiiiii = function () {
    return (_0x1cd130 = _0x4c150b.dynCall_viiiijiiiii = _0x4c150b.asm.jo).apply(null, arguments);
  };
  var _0x458fb4 = _0x4c150b.dynCall_vifiiii = function () {
    return (_0x458fb4 = _0x4c150b.dynCall_vifiiii = _0x4c150b.asm.ko).apply(null, arguments);
  };
  var _0x1cc185 = _0x4c150b.dynCall_fiifii = function () {
    return (_0x1cc185 = _0x4c150b.dynCall_fiifii = _0x4c150b.asm.lo).apply(null, arguments);
  };
  var _0x46ae02 = _0x4c150b.dynCall_viiiiiifiifiiii = function () {
    return (_0x46ae02 = _0x4c150b.dynCall_viiiiiifiifiiii = _0x4c150b.asm.mo).apply(null, arguments);
  };
  var _0x461333 = _0x4c150b.dynCall_iiffffiii = function () {
    return (_0x461333 = _0x4c150b.dynCall_iiffffiii = _0x4c150b.asm.no).apply(null, arguments);
  };
  var _0x58a345 = _0x4c150b.dynCall_iiidfi = function () {
    return (_0x58a345 = _0x4c150b.dynCall_iiidfi = _0x4c150b.asm.oo).apply(null, arguments);
  };
  var _0x37e7dd = _0x4c150b.dynCall_iiijfi = function () {
    return (_0x37e7dd = _0x4c150b.dynCall_iiijfi = _0x4c150b.asm.po).apply(null, arguments);
  };
  var _0x2b864c = _0x4c150b.dynCall_iifffi = function () {
    return (_0x2b864c = _0x4c150b.dynCall_iifffi = _0x4c150b.asm.qo).apply(null, arguments);
  };
  var _0xbf8d5e = _0x4c150b.dynCall_iiiififi = function () {
    return (_0xbf8d5e = _0x4c150b.dynCall_iiiififi = _0x4c150b.asm.ro).apply(null, arguments);
  };
  var _0x58f59a = _0x4c150b.dynCall_iiiffifiiii = function () {
    return (_0x58f59a = _0x4c150b.dynCall_iiiffifiiii = _0x4c150b.asm.so).apply(null, arguments);
  };
  var _0x4bca37 = _0x4c150b.dynCall_iiifiifiii = function () {
    return (_0x4bca37 = _0x4c150b.dynCall_iiifiifiii = _0x4c150b.asm.to).apply(null, arguments);
  };
  var _0x287bb6 = _0x4c150b.dynCall_iiifiifiiiii = function () {
    return (_0x287bb6 = _0x4c150b.dynCall_iiifiifiiiii = _0x4c150b.asm.uo).apply(null, arguments);
  };
  var _0x7e108f = _0x4c150b.dynCall_ifffii = function () {
    return (_0x7e108f = _0x4c150b.dynCall_ifffii = _0x4c150b.asm.vo).apply(null, arguments);
  };
  var _0x33bff7 = _0x4c150b.dynCall_ffffii = function () {
    return (_0x33bff7 = _0x4c150b.dynCall_ffffii = _0x4c150b.asm.wo).apply(null, arguments);
  };
  var _0x199e98 = _0x4c150b.dynCall_ffffifi = function () {
    return (_0x199e98 = _0x4c150b.dynCall_ffffifi = _0x4c150b.asm.xo).apply(null, arguments);
  };
  var _0x3b1b84 = _0x4c150b.dynCall_ffffiffi = function () {
    return (_0x3b1b84 = _0x4c150b.dynCall_ffffiffi = _0x4c150b.asm.yo).apply(null, arguments);
  };
  var _0x204c54 = _0x4c150b.dynCall_viiififi = function () {
    return (_0x204c54 = _0x4c150b.dynCall_viiififi = _0x4c150b.asm.zo).apply(null, arguments);
  };
  var _0x324991 = _0x4c150b.dynCall_viiififfi = function () {
    return (_0x324991 = _0x4c150b.dynCall_viiififfi = _0x4c150b.asm.Ao).apply(null, arguments);
  };
  var _0x3944e7 = _0x4c150b.dynCall_ifiii = function () {
    return (_0x3944e7 = _0x4c150b.dynCall_ifiii = _0x4c150b.asm.Bo).apply(null, arguments);
  };
  var _0x1719ca = _0x4c150b.dynCall_vifiii = function () {
    return (_0x1719ca = _0x4c150b.dynCall_vifiii = _0x4c150b.asm.Co).apply(null, arguments);
  };
  var _0x1566ee = _0x4c150b.dynCall_iifiiiiii = function () {
    return (_0x1566ee = _0x4c150b.dynCall_iifiiiiii = _0x4c150b.asm.Do).apply(null, arguments);
  };
  var _0x50a3ef = _0x4c150b.dynCall_iifiiiii = function () {
    return (_0x50a3ef = _0x4c150b.dynCall_iifiiiii = _0x4c150b.asm.Eo).apply(null, arguments);
  };
  var _0x44fe76 = _0x4c150b.dynCall_iiffiiiii = function () {
    return (_0x44fe76 = _0x4c150b.dynCall_iiffiiiii = _0x4c150b.asm.Fo).apply(null, arguments);
  };
  var _0x357bf3 = _0x4c150b.dynCall_iiffifiii = function () {
    return (_0x357bf3 = _0x4c150b.dynCall_iiffifiii = _0x4c150b.asm.Go).apply(null, arguments);
  };
  var _0x4fed04 = _0x4c150b.dynCall_iifiifiii = function () {
    return (_0x4fed04 = _0x4c150b.dynCall_iifiifiii = _0x4c150b.asm.Ho).apply(null, arguments);
  };
  var _0x1339d3 = _0x4c150b.dynCall_iififi = function () {
    return (_0x1339d3 = _0x4c150b.dynCall_iififi = _0x4c150b.asm.Io).apply(null, arguments);
  };
  var _0x3e7174 = _0x4c150b.dynCall_iiififi = function () {
    return (_0x3e7174 = _0x4c150b.dynCall_iiififi = _0x4c150b.asm.Jo).apply(null, arguments);
  };
  var _0x46ed56 = _0x4c150b.dynCall_iifiii = function () {
    return (_0x46ed56 = _0x4c150b.dynCall_iifiii = _0x4c150b.asm.Ko).apply(null, arguments);
  };
  var _0x38d2fb = _0x4c150b.dynCall_iiiiifiiii = function () {
    return (_0x38d2fb = _0x4c150b.dynCall_iiiiifiiii = _0x4c150b.asm.Lo).apply(null, arguments);
  };
  var _0x1e2fc6 = _0x4c150b.dynCall_viidiii = function () {
    return (_0x1e2fc6 = _0x4c150b.dynCall_viidiii = _0x4c150b.asm.Mo).apply(null, arguments);
  };
  var _0x3ce0d7 = _0x4c150b.dynCall_diidi = function () {
    return (_0x3ce0d7 = _0x4c150b.dynCall_diidi = _0x4c150b.asm.No).apply(null, arguments);
  };
  var _0x74bc12 = _0x4c150b.dynCall_fiifdi = function () {
    return (_0x74bc12 = _0x4c150b.dynCall_fiifdi = _0x4c150b.asm.Oo).apply(null, arguments);
  };
  var _0x4060a1 = _0x4c150b.dynCall_viiiiiifddfiiii = function () {
    return (_0x4060a1 = _0x4c150b.dynCall_viiiiiifddfiiii = _0x4c150b.asm.Po).apply(null, arguments);
  };
  var _0x403c21 = _0x4c150b.dynCall_fiifji = function () {
    return (_0x403c21 = _0x4c150b.dynCall_fiifji = _0x4c150b.asm.Qo).apply(null, arguments);
  };
  var _0x353ab4 = _0x4c150b.dynCall_viiiiiifjjfiiii = function () {
    return (_0x353ab4 = _0x4c150b.dynCall_viiiiiifjjfiiii = _0x4c150b.asm.Ro).apply(null, arguments);
  };
  var _0x439509 = _0x4c150b.dynCall_viiiifiii = function () {
    return (_0x439509 = _0x4c150b.dynCall_viiiifiii = _0x4c150b.asm.So).apply(null, arguments);
  };
  var _0x1b6ecf = _0x4c150b.dynCall_viifiii = function () {
    return (_0x1b6ecf = _0x4c150b.dynCall_viifiii = _0x4c150b.asm.To).apply(null, arguments);
  };
  var _0x2d7e3f = _0x4c150b.dynCall_viiiiiiffffiiii = function () {
    return (_0x2d7e3f = _0x4c150b.dynCall_viiiiiiffffiiii = _0x4c150b.asm.Uo).apply(null, arguments);
  };
  var _0xc56bbb = _0x4c150b.dynCall_viifiiii = function () {
    return (_0xc56bbb = _0x4c150b.dynCall_viifiiii = _0x4c150b.asm.Vo).apply(null, arguments);
  };
  var _0x2bfc8b = _0x4c150b.dynCall_iiiiifiii = function () {
    return (_0x2bfc8b = _0x4c150b.dynCall_iiiiifiii = _0x4c150b.asm.Wo).apply(null, arguments);
  };
  var _0x20a390 = _0x4c150b.dynCall_fffffi = function () {
    return (_0x20a390 = _0x4c150b.dynCall_fffffi = _0x4c150b.asm.Xo).apply(null, arguments);
  };
  var _0x37fcdc = _0x4c150b.dynCall_fiiffffi = function () {
    return (_0x37fcdc = _0x4c150b.dynCall_fiiffffi = _0x4c150b.asm.Yo).apply(null, arguments);
  };
  var _0x14aa6f = _0x4c150b.dynCall_fffifffi = function () {
    return (_0x14aa6f = _0x4c150b.dynCall_fffifffi = _0x4c150b.asm.Zo).apply(null, arguments);
  };
  var _0x4de83f = _0x4c150b.dynCall_ifiiii = function () {
    return (_0x4de83f = _0x4c150b.dynCall_ifiiii = _0x4c150b.asm._o).apply(null, arguments);
  };
  var _0x3b3c48 = _0x4c150b.dynCall_idiiiii = function () {
    return (_0x3b3c48 = _0x4c150b.dynCall_idiiiii = _0x4c150b.asm.$o).apply(null, arguments);
  };
  var _0x5e3f47 = _0x4c150b.dynCall_idiiii = function () {
    return (_0x5e3f47 = _0x4c150b.dynCall_idiiii = _0x4c150b.asm.ap).apply(null, arguments);
  };
  var _0x3e50fa = _0x4c150b.dynCall_idii = function () {
    return (_0x3e50fa = _0x4c150b.dynCall_idii = _0x4c150b.asm.bp).apply(null, arguments);
  };
  var _0x4c5bce = _0x4c150b.dynCall_ijii = function () {
    return (_0x4c5bce = _0x4c150b.dynCall_ijii = _0x4c150b.asm.cp).apply(null, arguments);
  };
  var _0x24c495 = _0x4c150b.dynCall_iidii = function () {
    return (_0x24c495 = _0x4c150b.dynCall_iidii = _0x4c150b.asm.dp).apply(null, arguments);
  };
  var _0x44d295 = _0x4c150b.dynCall_iidiii = function () {
    return (_0x44d295 = _0x4c150b.dynCall_iidiii = _0x4c150b.asm.ep).apply(null, arguments);
  };
  var _0x1cae36 = _0x4c150b.dynCall_iiijiiii = function () {
    return (_0x1cae36 = _0x4c150b.dynCall_iiijiiii = _0x4c150b.asm.fp).apply(null, arguments);
  };
  var _0x4e5f33 = _0x4c150b.dynCall_vjiiii = function () {
    return (_0x4e5f33 = _0x4c150b.dynCall_vjiiii = _0x4c150b.asm.gp).apply(null, arguments);
  };
  var _0x300acd = _0x4c150b.dynCall_iddi = function () {
    return (_0x300acd = _0x4c150b.dynCall_iddi = _0x4c150b.asm.hp).apply(null, arguments);
  };
  var _0x2540a3 = _0x4c150b.dynCall_viiiiijii = function () {
    return (_0x2540a3 = _0x4c150b.dynCall_viiiiijii = _0x4c150b.asm.ip).apply(null, arguments);
  };
  var _0x582b58 = _0x4c150b.dynCall_viiiijiiiiiiii = function () {
    return (_0x582b58 = _0x4c150b.dynCall_viiiijiiiiiiii = _0x4c150b.asm.jp).apply(null, arguments);
  };
  var _0x2315ba = _0x4c150b.dynCall_viifiifi = function () {
    return (_0x2315ba = _0x4c150b.dynCall_viifiifi = _0x4c150b.asm.kp).apply(null, arguments);
  };
  var _0x51d563 = _0x4c150b.dynCall_vifiifi = function () {
    return (_0x51d563 = _0x4c150b.dynCall_vifiifi = _0x4c150b.asm.lp).apply(null, arguments);
  };
  var _0x32369 = _0x4c150b.dynCall_viffii = function () {
    return (_0x32369 = _0x4c150b.dynCall_viffii = _0x4c150b.asm.mp).apply(null, arguments);
  };
  var _0x2468f6 = _0x4c150b.dynCall_viddfffi = function () {
    return (_0x2468f6 = _0x4c150b.dynCall_viddfffi = _0x4c150b.asm.np).apply(null, arguments);
  };
  var _0x4f9b61 = _0x4c150b.dynCall_viidfffi = function () {
    return (_0x4f9b61 = _0x4c150b.dynCall_viidfffi = _0x4c150b.asm.op).apply(null, arguments);
  };
  var _0x30673d = _0x4c150b.dynCall_vidifffi = function () {
    return (_0x30673d = _0x4c150b.dynCall_vidifffi = _0x4c150b.asm.pp).apply(null, arguments);
  };
  var _0x21fe2c = _0x4c150b.dynCall_viiifffi = function () {
    return (_0x21fe2c = _0x4c150b.dynCall_viiifffi = _0x4c150b.asm.qp).apply(null, arguments);
  };
  var _0x2be731 = _0x4c150b.dynCall_viddi = function () {
    return (_0x2be731 = _0x4c150b.dynCall_viddi = _0x4c150b.asm.rp).apply(null, arguments);
  };
  var _0x30486a = _0x4c150b.dynCall_vidii = function () {
    return (_0x30486a = _0x4c150b.dynCall_vidii = _0x4c150b.asm.sp).apply(null, arguments);
  };
  var _0x28c705 = _0x4c150b.dynCall_viiiiiiifi = function () {
    return (_0x28c705 = _0x4c150b.dynCall_viiiiiiifi = _0x4c150b.asm.tp).apply(null, arguments);
  };
  var _0x2ae5eb = _0x4c150b.dynCall_viiiiffffffffii = function () {
    return (_0x2ae5eb = _0x4c150b.dynCall_viiiiffffffffii = _0x4c150b.asm.up).apply(null, arguments);
  };
  var _0x503e9b = _0x4c150b.dynCall_iffi = function () {
    return (_0x503e9b = _0x4c150b.dynCall_iffi = _0x4c150b.asm.vp).apply(null, arguments);
  };
  var _0x22231e = _0x4c150b.dynCall_viiffffi = function () {
    return (_0x22231e = _0x4c150b.dynCall_viiffffi = _0x4c150b.asm.wp).apply(null, arguments);
  };
  var _0x505446 = _0x4c150b.dynCall_ffffi = function () {
    return (_0x505446 = _0x4c150b.dynCall_ffffi = _0x4c150b.asm.xp).apply(null, arguments);
  };
  var _0x2cd443 = _0x4c150b.dynCall_ffi = function () {
    return (_0x2cd443 = _0x4c150b.dynCall_ffi = _0x4c150b.asm.yp).apply(null, arguments);
  };
  var _0x37daba = _0x4c150b.dynCall_ffii = function () {
    return (_0x37daba = _0x4c150b.dynCall_ffii = _0x4c150b.asm.zp).apply(null, arguments);
  };
  var _0x588bec = _0x4c150b.dynCall_fiiiii = function () {
    return (_0x588bec = _0x4c150b.dynCall_fiiiii = _0x4c150b.asm.Ap).apply(null, arguments);
  };
  var _0x371762 = _0x4c150b.dynCall_ddddi = function () {
    return (_0x371762 = _0x4c150b.dynCall_ddddi = _0x4c150b.asm.Bp).apply(null, arguments);
  };
  var _0x5dc61c = _0x4c150b.dynCall_ddi = function () {
    return (_0x5dc61c = _0x4c150b.dynCall_ddi = _0x4c150b.asm.Cp).apply(null, arguments);
  };
  var _0x1b28da = _0x4c150b.dynCall_jijii = function () {
    return (_0x1b28da = _0x4c150b.dynCall_jijii = _0x4c150b.asm.Dp).apply(null, arguments);
  };
  var _0x20037a = _0x4c150b.dynCall_iiiiiji = function () {
    return (_0x20037a = _0x4c150b.dynCall_iiiiiji = _0x4c150b.asm.Ep).apply(null, arguments);
  };
  var _0x4777fd = _0x4c150b.dynCall_viiijii = function () {
    return (_0x4777fd = _0x4c150b.dynCall_viiijii = _0x4c150b.asm.Fp).apply(null, arguments);
  };
  var _0x5f2b0e = _0x4c150b.dynCall_viiiiiji = function () {
    return (_0x5f2b0e = _0x4c150b.dynCall_viiiiiji = _0x4c150b.asm.Gp).apply(null, arguments);
  };
  var _0xb4350c = _0x4c150b.dynCall_ijjiiii = function () {
    return (_0xb4350c = _0x4c150b.dynCall_ijjiiii = _0x4c150b.asm.Hp).apply(null, arguments);
  };
  var _0x220afd = _0x4c150b.dynCall_vdiiiii = function () {
    return (_0x220afd = _0x4c150b.dynCall_vdiiiii = _0x4c150b.asm.Ip).apply(null, arguments);
  };
  var _0x4192f7 = _0x4c150b.dynCall_diiji = function () {
    return (_0x4192f7 = _0x4c150b.dynCall_diiji = _0x4c150b.asm.Jp).apply(null, arguments);
  };
  var _0x5e7478 = _0x4c150b.dynCall_vjiiiiiiii = function () {
    return (_0x5e7478 = _0x4c150b.dynCall_vjiiiiiiii = _0x4c150b.asm.Kp).apply(null, arguments);
  };
  var _0x3e379e = _0x4c150b.dynCall_vjiiiiiii = function () {
    return (_0x3e379e = _0x4c150b.dynCall_vjiiiiiii = _0x4c150b.asm.Lp).apply(null, arguments);
  };
  var _0x467cb8 = _0x4c150b.dynCall_ijiiii = function () {
    return (_0x467cb8 = _0x4c150b.dynCall_ijiiii = _0x4c150b.asm.Mp).apply(null, arguments);
  };
  var _0x9e0283 = _0x4c150b.dynCall_diji = function () {
    return (_0x9e0283 = _0x4c150b.dynCall_diji = _0x4c150b.asm.Np).apply(null, arguments);
  };
  var _0x5ccb10 = _0x4c150b.dynCall_fidi = function () {
    return (_0x5ccb10 = _0x4c150b.dynCall_fidi = _0x4c150b.asm.Op).apply(null, arguments);
  };
  var _0x53f0e2 = _0x4c150b.dynCall_vfffi = function () {
    return (_0x53f0e2 = _0x4c150b.dynCall_vfffi = _0x4c150b.asm.Pp).apply(null, arguments);
  };
  var _0x57bee1 = _0x4c150b.dynCall_vffffi = function () {
    return (_0x57bee1 = _0x4c150b.dynCall_vffffi = _0x4c150b.asm.Qp).apply(null, arguments);
  };
  var _0x4392db = _0x4c150b.dynCall_viiiffii = function () {
    return (_0x4392db = _0x4c150b.dynCall_viiiffii = _0x4c150b.asm.Rp).apply(null, arguments);
  };
  var _0x3157cd = _0x4c150b.dynCall_vijji = function () {
    return (_0x3157cd = _0x4c150b.dynCall_vijji = _0x4c150b.asm.Sp).apply(null, arguments);
  };
  var _0x3796d2 = _0x4c150b.dynCall_vifffi = function () {
    return (_0x3796d2 = _0x4c150b.dynCall_vifffi = _0x4c150b.asm.Tp).apply(null, arguments);
  };
  var _0x4cbffb = _0x4c150b.dynCall_vfiii = function () {
    return (_0x4cbffb = _0x4c150b.dynCall_vfiii = _0x4c150b.asm.Up).apply(null, arguments);
  };
  var _0x796579 = _0x4c150b.dynCall_vfii = function () {
    return (_0x796579 = _0x4c150b.dynCall_vfii = _0x4c150b.asm.Vp).apply(null, arguments);
  };
  var _0x505025 = _0x4c150b.dynCall_vifffii = function () {
    return (_0x505025 = _0x4c150b.dynCall_vifffii = _0x4c150b.asm.Wp).apply(null, arguments);
  };
  var _0x492c31 = _0x4c150b.dynCall_iiiifiiiii = function () {
    return (_0x492c31 = _0x4c150b.dynCall_iiiifiiiii = _0x4c150b.asm.Xp).apply(null, arguments);
  };
  var _0x460e1f = _0x4c150b.dynCall_iiiifiiii = function () {
    return (_0x460e1f = _0x4c150b.dynCall_iiiifiiii = _0x4c150b.asm.Yp).apply(null, arguments);
  };
  var _0x51371a = _0x4c150b.dynCall_vijjii = function () {
    return (_0x51371a = _0x4c150b.dynCall_vijjii = _0x4c150b.asm.Zp).apply(null, arguments);
  };
  var _0x40a92f = _0x4c150b.dynCall_viiiififfi = function () {
    return (_0x40a92f = _0x4c150b.dynCall_viiiififfi = _0x4c150b.asm._p).apply(null, arguments);
  };
  var _0x31d34a = _0x4c150b.dynCall_viiiifiifi = function () {
    return (_0x31d34a = _0x4c150b.dynCall_viiiifiifi = _0x4c150b.asm.$p).apply(null, arguments);
  };
  var _0x5aba12 = _0x4c150b.dynCall_viiiifiiii = function () {
    return (_0x5aba12 = _0x4c150b.dynCall_viiiifiiii = _0x4c150b.asm.aq).apply(null, arguments);
  };
  var _0x5a7d8f = _0x4c150b.dynCall_viiiifiiiii = function () {
    return (_0x5a7d8f = _0x4c150b.dynCall_viiiifiiiii = _0x4c150b.asm.bq).apply(null, arguments);
  };
  var _0xf2875c = _0x4c150b.dynCall_viiiifiiiiiiii = function () {
    return (_0xf2875c = _0x4c150b.dynCall_viiiifiiiiiiii = _0x4c150b.asm.cq).apply(null, arguments);
  };
  var _0x49b113 = _0x4c150b.dynCall_viiiiiffii = function () {
    return (_0x49b113 = _0x4c150b.dynCall_viiiiiffii = _0x4c150b.asm.dq).apply(null, arguments);
  };
  var _0x474b74 = _0x4c150b.dynCall_viffiii = function () {
    return (_0x474b74 = _0x4c150b.dynCall_viffiii = _0x4c150b.asm.eq).apply(null, arguments);
  };
  var _0x246360 = _0x4c150b.dynCall_viffffiii = function () {
    return (_0x246360 = _0x4c150b.dynCall_viffffiii = _0x4c150b.asm.fq).apply(null, arguments);
  };
  var _0x5c0777 = _0x4c150b.dynCall_viffffii = function () {
    return (_0x5c0777 = _0x4c150b.dynCall_viffffii = _0x4c150b.asm.gq).apply(null, arguments);
  };
  var _0x5e3ee8 = _0x4c150b.dynCall_viiifiii = function () {
    return (_0x5e3ee8 = _0x4c150b.dynCall_viiifiii = _0x4c150b.asm.hq).apply(null, arguments);
  };
  var _0x2af4a6 = _0x4c150b.dynCall_iiiiifi = function () {
    return (_0x2af4a6 = _0x4c150b.dynCall_iiiiifi = _0x4c150b.asm.iq).apply(null, arguments);
  };
  var _0x221d46 = _0x4c150b.dynCall_viiidii = function () {
    return (_0x221d46 = _0x4c150b.dynCall_viiidii = _0x4c150b.asm.jq).apply(null, arguments);
  };
  var _0x1ceddf = _0x4c150b.dynCall_vifffffi = function () {
    return (_0x1ceddf = _0x4c150b.dynCall_vifffffi = _0x4c150b.asm.kq).apply(null, arguments);
  };
  var _0x36830b = _0x4c150b.dynCall_viffiiii = function () {
    return (_0x36830b = _0x4c150b.dynCall_viffiiii = _0x4c150b.asm.lq).apply(null, arguments);
  };
  var _0x1fd118 = _0x4c150b.dynCall_viiiiffffiiii = function () {
    return (_0x1fd118 = _0x4c150b.dynCall_viiiiffffiiii = _0x4c150b.asm.mq).apply(null, arguments);
  };
  var _0x42662e = _0x4c150b.dynCall_viifiiiii = function () {
    return (_0x42662e = _0x4c150b.dynCall_viifiiiii = _0x4c150b.asm.nq).apply(null, arguments);
  };
  var _0x14916f = _0x4c150b.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x14916f = _0x4c150b.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x4c150b.asm.oq).apply(null, arguments);
  };
  var _0x56270c = _0x4c150b.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0x56270c = _0x4c150b.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x4c150b.asm.pq).apply(null, arguments);
  };
  var _0x5acc6e = _0x4c150b.dynCall_viififii = function () {
    return (_0x5acc6e = _0x4c150b.dynCall_viififii = _0x4c150b.asm.qq).apply(null, arguments);
  };
  var _0x4d77d2 = _0x4c150b.dynCall_viffffffi = function () {
    return (_0x4d77d2 = _0x4c150b.dynCall_viffffffi = _0x4c150b.asm.rq).apply(null, arguments);
  };
  var _0x1b18b3 = _0x4c150b.dynCall_iiiffiiii = function () {
    return (_0x1b18b3 = _0x4c150b.dynCall_iiiffiiii = _0x4c150b.asm.sq).apply(null, arguments);
  };
  var _0x4710b4 = _0x4c150b.dynCall_iiiiffiiii = function () {
    return (_0x4710b4 = _0x4c150b.dynCall_iiiiffiiii = _0x4c150b.asm.tq).apply(null, arguments);
  };
  var _0x22f837 = _0x4c150b.dynCall_fifffi = function () {
    return (_0x22f837 = _0x4c150b.dynCall_fifffi = _0x4c150b.asm.uq).apply(null, arguments);
  };
  var _0x34666a = _0x4c150b.dynCall_fffffffi = function () {
    return (_0x34666a = _0x4c150b.dynCall_fffffffi = _0x4c150b.asm.vq).apply(null, arguments);
  };
  var _0x5b0be6 = _0x4c150b.dynCall_viffifi = function () {
    return (_0x5b0be6 = _0x4c150b.dynCall_viffifi = _0x4c150b.asm.wq).apply(null, arguments);
  };
  var _0x2e8da4 = _0x4c150b.dynCall_viiffifi = function () {
    return (_0x2e8da4 = _0x4c150b.dynCall_viiffifi = _0x4c150b.asm.xq).apply(null, arguments);
  };
  var _0x224987 = _0x4c150b.dynCall_ifffi = function () {
    return (_0x224987 = _0x4c150b.dynCall_ifffi = _0x4c150b.asm.yq).apply(null, arguments);
  };
  var _0x574311 = _0x4c150b.dynCall_fiiiffi = function () {
    return (_0x574311 = _0x4c150b.dynCall_fiiiffi = _0x4c150b.asm.zq).apply(null, arguments);
  };
  var _0x2fee94 = _0x4c150b.dynCall_viiififiii = function () {
    return (_0x2fee94 = _0x4c150b.dynCall_viiififiii = _0x4c150b.asm.Aq).apply(null, arguments);
  };
  var _0x3592e8 = _0x4c150b.dynCall_viiffiiiiiiiii = function () {
    return (_0x3592e8 = _0x4c150b.dynCall_viiffiiiiiiiii = _0x4c150b.asm.Bq).apply(null, arguments);
  };
  var _0x3f4aa2 = _0x4c150b.dynCall_viiiiiffiii = function () {
    return (_0x3f4aa2 = _0x4c150b.dynCall_viiiiiffiii = _0x4c150b.asm.Cq).apply(null, arguments);
  };
  var _0x47bfa0 = _0x4c150b.dynCall_viiffiii = function () {
    return (_0x47bfa0 = _0x4c150b.dynCall_viiffiii = _0x4c150b.asm.Dq).apply(null, arguments);
  };
  var _0x4c25dc = _0x4c150b.dynCall_viiffiiiiiii = function () {
    return (_0x4c25dc = _0x4c150b.dynCall_viiffiiiiiii = _0x4c150b.asm.Eq).apply(null, arguments);
  };
  var _0x57b2f7 = _0x4c150b.dynCall_fffffffffi = function () {
    return (_0x57b2f7 = _0x4c150b.dynCall_fffffffffi = _0x4c150b.asm.Fq).apply(null, arguments);
  };
  var _0x4464e2 = _0x4c150b.dynCall_vifiiiiii = function () {
    return (_0x4464e2 = _0x4c150b.dynCall_vifiiiiii = _0x4c150b.asm.Gq).apply(null, arguments);
  };
  var _0xebdf23 = _0x4c150b.dynCall_vifiiiii = function () {
    return (_0xebdf23 = _0x4c150b.dynCall_vifiiiii = _0x4c150b.asm.Hq).apply(null, arguments);
  };
  var _0x14bd09 = _0x4c150b.dynCall_viifiiiiiii = function () {
    return (_0x14bd09 = _0x4c150b.dynCall_viifiiiiiii = _0x4c150b.asm.Iq).apply(null, arguments);
  };
  var _0x417d5e = _0x4c150b.dynCall_viiififfiiiiiii = function () {
    return (_0x417d5e = _0x4c150b.dynCall_viiififfiiiiiii = _0x4c150b.asm.Jq).apply(null, arguments);
  };
  var _0xe6ce06 = _0x4c150b.dynCall_viiffiifiiiiiii = function () {
    return (_0xe6ce06 = _0x4c150b.dynCall_viiffiifiiiiiii = _0x4c150b.asm.Kq).apply(null, arguments);
  };
  var _0x22c506 = _0x4c150b.dynCall_viifiiiiii = function () {
    return (_0x22c506 = _0x4c150b.dynCall_viifiiiiii = _0x4c150b.asm.Lq).apply(null, arguments);
  };
  var _0x3cc943 = _0x4c150b.dynCall_viiifiiiiii = function () {
    return (_0x3cc943 = _0x4c150b.dynCall_viiifiiiiii = _0x4c150b.asm.Mq).apply(null, arguments);
  };
  var _0x2c2753 = _0x4c150b.dynCall_viiiifiiiiii = function () {
    return (_0x2c2753 = _0x4c150b.dynCall_viiiifiiiiii = _0x4c150b.asm.Nq).apply(null, arguments);
  };
  var _0x3dc8b5 = _0x4c150b.dynCall_viififiiiiii = function () {
    return (_0x3dc8b5 = _0x4c150b.dynCall_viififiiiiii = _0x4c150b.asm.Oq).apply(null, arguments);
  };
  var _0x551dcc = _0x4c150b.dynCall_viiiffiifiiiiiii = function () {
    return (_0x551dcc = _0x4c150b.dynCall_viiiffiifiiiiiii = _0x4c150b.asm.Pq).apply(null, arguments);
  };
  var _0x56834 = _0x4c150b.dynCall_viiiiiifiiiiii = function () {
    return (_0x56834 = _0x4c150b.dynCall_viiiiiifiiiiii = _0x4c150b.asm.Qq).apply(null, arguments);
  };
  var _0x2019f2 = _0x4c150b.dynCall_vififiii = function () {
    return (_0x2019f2 = _0x4c150b.dynCall_vififiii = _0x4c150b.asm.Rq).apply(null, arguments);
  };
  var _0x2dac49 = _0x4c150b.dynCall_viiiiiiiijiiii = function () {
    return (_0x2dac49 = _0x4c150b.dynCall_viiiiiiiijiiii = _0x4c150b.asm.Sq).apply(null, arguments);
  };
  var _0x5bca99 = _0x4c150b.dynCall_fifii = function () {
    return (_0x5bca99 = _0x4c150b.dynCall_fifii = _0x4c150b.asm.Tq).apply(null, arguments);
  };
  var _0x493061 = _0x4c150b.dynCall_viiiiiffi = function () {
    return (_0x493061 = _0x4c150b.dynCall_viiiiiffi = _0x4c150b.asm.Uq).apply(null, arguments);
  };
  var _0x288b24 = _0x4c150b.dynCall_iidiiiii = function () {
    return (_0x288b24 = _0x4c150b.dynCall_iidiiiii = _0x4c150b.asm.Vq).apply(null, arguments);
  };
  var _0x285a8d = _0x4c150b.dynCall_ijiiiiiiiii = function () {
    return (_0x285a8d = _0x4c150b.dynCall_ijiiiiiiiii = _0x4c150b.asm.Wq).apply(null, arguments);
  };
  var _0x576468 = _0x4c150b.dynCall_iiijiiiii = function () {
    return (_0x576468 = _0x4c150b.dynCall_iiijiiiii = _0x4c150b.asm.Xq).apply(null, arguments);
  };
  var _0x5958a1 = _0x4c150b.dynCall_ijjiii = function () {
    return (_0x5958a1 = _0x4c150b.dynCall_ijjiii = _0x4c150b.asm.Yq).apply(null, arguments);
  };
  var _0x4b4f34 = _0x4c150b.dynCall_ffiii = function () {
    return (_0x4b4f34 = _0x4c150b.dynCall_ffiii = _0x4c150b.asm.Zq).apply(null, arguments);
  };
  var _0x54ff4c = _0x4c150b.dynCall_fffiii = function () {
    return (_0x54ff4c = _0x4c150b.dynCall_fffiii = _0x4c150b.asm._q).apply(null, arguments);
  };
  var _0x354714 = _0x4c150b.dynCall_dddiii = function () {
    return (_0x354714 = _0x4c150b.dynCall_dddiii = _0x4c150b.asm.$q).apply(null, arguments);
  };
  var _0x3a001c = _0x4c150b.dynCall_jjiii = function () {
    return (_0x3a001c = _0x4c150b.dynCall_jjiii = _0x4c150b.asm.ar).apply(null, arguments);
  };
  var _0x40a8b2 = _0x4c150b.dynCall_jddi = function () {
    return (_0x40a8b2 = _0x4c150b.dynCall_jddi = _0x4c150b.asm.br).apply(null, arguments);
  };
  var _0x4631fb = _0x4c150b.dynCall_jjjii = function () {
    return (_0x4631fb = _0x4c150b.dynCall_jjjii = _0x4c150b.asm.cr).apply(null, arguments);
  };
  var _0x500241 = _0x4c150b.dynCall_jdii = function () {
    return (_0x500241 = _0x4c150b.dynCall_jdii = _0x4c150b.asm.dr).apply(null, arguments);
  };
  var _0x8f030e = _0x4c150b.dynCall_djii = function () {
    return (_0x8f030e = _0x4c150b.dynCall_djii = _0x4c150b.asm.er).apply(null, arguments);
  };
  var _0x5461bf = _0x4c150b.dynCall_fdi = function () {
    return (_0x5461bf = _0x4c150b.dynCall_fdi = _0x4c150b.asm.fr).apply(null, arguments);
  };
  var _0x586947 = _0x4c150b.dynCall_jjiiii = function () {
    return (_0x586947 = _0x4c150b.dynCall_jjiiii = _0x4c150b.asm.gr).apply(null, arguments);
  };
  var _0x24aadc = _0x4c150b.dynCall_vidiii = function () {
    return (_0x24aadc = _0x4c150b.dynCall_vidiii = _0x4c150b.asm.hr).apply(null, arguments);
  };
  var _0x5a12a6 = _0x4c150b.dynCall_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii = function () {
    return (_0x5a12a6 = _0x4c150b.dynCall_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii = _0x4c150b.asm.ir).apply(null, arguments);
  };
  var _0x29aa42 = _0x4c150b.dynCall_viffffffffi = function () {
    return (_0x29aa42 = _0x4c150b.dynCall_viffffffffi = _0x4c150b.asm.jr).apply(null, arguments);
  };
  var _0x40091f = _0x4c150b.dynCall_viddddi = function () {
    return (_0x40091f = _0x4c150b.dynCall_viddddi = _0x4c150b.asm.kr).apply(null, arguments);
  };
  var _0x1e5d6a = _0x4c150b.dynCall_vijjjji = function () {
    return (_0x1e5d6a = _0x4c150b.dynCall_vijjjji = _0x4c150b.asm.lr).apply(null, arguments);
  };
  var _0x3ab756 = _0x4c150b.dynCall_ddii = function () {
    return (_0x3ab756 = _0x4c150b.dynCall_ddii = _0x4c150b.asm.mr).apply(null, arguments);
  };
  var _0x148213 = _0x4c150b.dynCall_iiiiiijii = function () {
    return (_0x148213 = _0x4c150b.dynCall_iiiiiijii = _0x4c150b.asm.nr).apply(null, arguments);
  };
  var _0x285d60 = _0x4c150b.dynCall_jiidi = function () {
    return (_0x285d60 = _0x4c150b.dynCall_jiidi = _0x4c150b.asm.or).apply(null, arguments);
  };
  var _0x57ef03 = _0x4c150b.dynCall_viiiidijii = function () {
    return (_0x57ef03 = _0x4c150b.dynCall_viiiidijii = _0x4c150b.asm.pr).apply(null, arguments);
  };
  var _0x2e2919 = _0x4c150b.dynCall_viiiidiii = function () {
    return (_0x2e2919 = _0x4c150b.dynCall_viiiidiii = _0x4c150b.asm.qr).apply(null, arguments);
  };
  var _0xc0a451 = _0x4c150b.dynCall_iiidiii = function () {
    return (_0xc0a451 = _0x4c150b.dynCall_iiidiii = _0x4c150b.asm.rr).apply(null, arguments);
  };
  var _0x3d053a = _0x4c150b.dynCall_iiidii = function () {
    return (_0x3d053a = _0x4c150b.dynCall_iiidii = _0x4c150b.asm.sr).apply(null, arguments);
  };
  var _0x1fb224 = _0x4c150b.dynCall_viiiidii = function () {
    return (_0x1fb224 = _0x4c150b.dynCall_viiiidii = _0x4c150b.asm.tr).apply(null, arguments);
  };
  var _0x153dc5 = _0x4c150b.dynCall_viijiiiii = function () {
    return (_0x153dc5 = _0x4c150b.dynCall_viijiiiii = _0x4c150b.asm.ur).apply(null, arguments);
  };
  var _0x3bec7d = _0x4c150b.dynCall_viifffffi = function () {
    return (_0x3bec7d = _0x4c150b.dynCall_viifffffi = _0x4c150b.asm.vr).apply(null, arguments);
  };
  var _0x395d18 = _0x4c150b.dynCall_viiffffffi = function () {
    return (_0x395d18 = _0x4c150b.dynCall_viiffffffi = _0x4c150b.asm.wr).apply(null, arguments);
  };
  var _0x3fa85c = _0x4c150b.dynCall_viifffffffi = function () {
    return (_0x3fa85c = _0x4c150b.dynCall_viifffffffi = _0x4c150b.asm.xr).apply(null, arguments);
  };
  var _0x3c2e11 = _0x4c150b.dynCall_viiffffffffi = function () {
    return (_0x3c2e11 = _0x4c150b.dynCall_viiffffffffi = _0x4c150b.asm.yr).apply(null, arguments);
  };
  var _0x3e0fea = _0x4c150b.dynCall_viiffffffffiii = function () {
    return (_0x3e0fea = _0x4c150b.dynCall_viiffffffffiii = _0x4c150b.asm.zr).apply(null, arguments);
  };
  var _0x6108c0 = _0x4c150b.dynCall_viiiiffffii = function () {
    return (_0x6108c0 = _0x4c150b.dynCall_viiiiffffii = _0x4c150b.asm.Ar).apply(null, arguments);
  };
  var _0x24e3ff = _0x4c150b.dynCall_fiiiiii = function () {
    return (_0x24e3ff = _0x4c150b.dynCall_fiiiiii = _0x4c150b.asm.Br).apply(null, arguments);
  };
  var _0x5af132 = _0x4c150b.dynCall_iiijjiii = function () {
    return (_0x5af132 = _0x4c150b.dynCall_iiijjiii = _0x4c150b.asm.Cr).apply(null, arguments);
  };
  var _0x117b83 = _0x4c150b.dynCall_viiijji = function () {
    return (_0x117b83 = _0x4c150b.dynCall_viiijji = _0x4c150b.asm.Dr).apply(null, arguments);
  };
  var _0x597411 = _0x4c150b.dynCall_vijiiiiiii = function () {
    return (_0x597411 = _0x4c150b.dynCall_vijiiiiiii = _0x4c150b.asm.Er).apply(null, arguments);
  };
  var _0xe18c03 = _0x4c150b.dynCall_jjiiiii = function () {
    return (_0xe18c03 = _0x4c150b.dynCall_jjiiiii = _0x4c150b.asm.Fr).apply(null, arguments);
  };
  var _0x5c6e3b = _0x4c150b.dynCall_jijjji = function () {
    return (_0x5c6e3b = _0x4c150b.dynCall_jijjji = _0x4c150b.asm.Gr).apply(null, arguments);
  };
  var _0x98252a = _0x4c150b.dynCall_jijjjii = function () {
    return (_0x98252a = _0x4c150b.dynCall_jijjjii = _0x4c150b.asm.Hr).apply(null, arguments);
  };
  var _0x1f3688 = _0x4c150b.dynCall_ijijiiiii = function () {
    return (_0x1f3688 = _0x4c150b.dynCall_ijijiiiii = _0x4c150b.asm.Ir).apply(null, arguments);
  };
  var _0xdcd3ff = _0x4c150b.dynCall_ijjjiii = function () {
    return (_0xdcd3ff = _0x4c150b.dynCall_ijjjiii = _0x4c150b.asm.Jr).apply(null, arguments);
  };
  var _0x493897 = _0x4c150b.dynCall_vijjjiijii = function () {
    return (_0x493897 = _0x4c150b.dynCall_vijjjiijii = _0x4c150b.asm.Kr).apply(null, arguments);
  };
  var _0x36283f = _0x4c150b.dynCall_ijjjiijii = function () {
    return (_0x36283f = _0x4c150b.dynCall_ijjjiijii = _0x4c150b.asm.Lr).apply(null, arguments);
  };
  var _0x3d9d50 = _0x4c150b.dynCall_jfi = function () {
    return (_0x3d9d50 = _0x4c150b.dynCall_jfi = _0x4c150b.asm.Mr).apply(null, arguments);
  };
  var _0x5a1b15 = _0x4c150b.dynCall_fji = function () {
    return (_0x5a1b15 = _0x4c150b.dynCall_fji = _0x4c150b.asm.Nr).apply(null, arguments);
  };
  var _0x222e39 = _0x4c150b.dynCall_dfi = function () {
    return (_0x222e39 = _0x4c150b.dynCall_dfi = _0x4c150b.asm.Or).apply(null, arguments);
  };
  var _0x5d0202 = _0x4c150b.dynCall_jidii = function () {
    return (_0x5d0202 = _0x4c150b.dynCall_jidii = _0x4c150b.asm.Pr).apply(null, arguments);
  };
  var _0x3b9346 = _0x4c150b.dynCall_viiiiiiiji = function () {
    return (_0x3b9346 = _0x4c150b.dynCall_viiiiiiiji = _0x4c150b.asm.Qr).apply(null, arguments);
  };
  var _0x6c3e3b = _0x4c150b.dynCall_viiiiiiiiji = function () {
    return (_0x6c3e3b = _0x4c150b.dynCall_viiiiiiiiji = _0x4c150b.asm.Rr).apply(null, arguments);
  };
  var _0x3e2cd3 = _0x4c150b.dynCall_viiiiiiiiiji = function () {
    return (_0x3e2cd3 = _0x4c150b.dynCall_viiiiiiiiiji = _0x4c150b.asm.Sr).apply(null, arguments);
  };
  var _0x16811f = _0x4c150b.dynCall_ijiijii = function () {
    return (_0x16811f = _0x4c150b.dynCall_ijiijii = _0x4c150b.asm.Tr).apply(null, arguments);
  };
  var _0x27e7ba = _0x4c150b.dynCall_vjjiiiii = function () {
    return (_0x27e7ba = _0x4c150b.dynCall_vjjiiiii = _0x4c150b.asm.Ur).apply(null, arguments);
  };
  var _0x56d050 = _0x4c150b.dynCall_vjjii = function () {
    return (_0x56d050 = _0x4c150b.dynCall_vjjii = _0x4c150b.asm.Vr).apply(null, arguments);
  };
  var _0x33dcd6 = _0x4c150b.dynCall_ijiiji = function () {
    return (_0x33dcd6 = _0x4c150b.dynCall_ijiiji = _0x4c150b.asm.Wr).apply(null, arguments);
  };
  var _0x551a4 = _0x4c150b.dynCall_ijiiiii = function () {
    return (_0x551a4 = _0x4c150b.dynCall_ijiiiii = _0x4c150b.asm.Xr).apply(null, arguments);
  };
  var _0x4fa693 = _0x4c150b.dynCall_ijiiiiji = function () {
    return (_0x4fa693 = _0x4c150b.dynCall_ijiiiiji = _0x4c150b.asm.Yr).apply(null, arguments);
  };
  var _0x62714c = _0x4c150b.dynCall_jiiiiii = function () {
    return (_0x62714c = _0x4c150b.dynCall_jiiiiii = _0x4c150b.asm.Zr).apply(null, arguments);
  };
  var _0x488754 = _0x4c150b.dynCall_idiii = function () {
    return (_0x488754 = _0x4c150b.dynCall_idiii = _0x4c150b.asm._r).apply(null, arguments);
  };
  var _0x39a758 = _0x4c150b.dynCall_ifiiiii = function () {
    return (_0x39a758 = _0x4c150b.dynCall_ifiiiii = _0x4c150b.asm.$r).apply(null, arguments);
  };
  var _0x36e5db = _0x4c150b.dynCall_vdiii = function () {
    return (_0x36e5db = _0x4c150b.dynCall_vdiii = _0x4c150b.asm.as).apply(null, arguments);
  };
  var _0x207e29 = _0x4c150b.dynCall_vijijji = function () {
    return (_0x207e29 = _0x4c150b.dynCall_vijijji = _0x4c150b.asm.bs).apply(null, arguments);
  };
  var _0x104acb = _0x4c150b.dynCall_iijjji = function () {
    return (_0x104acb = _0x4c150b.dynCall_iijjji = _0x4c150b.asm.cs).apply(null, arguments);
  };
  var _0x214bc3 = _0x4c150b.dynCall_viijjji = function () {
    return (_0x214bc3 = _0x4c150b.dynCall_viijjji = _0x4c150b.asm.ds).apply(null, arguments);
  };
  var _0x2c22ab = _0x4c150b.dynCall_vdii = function () {
    return (_0x2c22ab = _0x4c150b.dynCall_vdii = _0x4c150b.asm.es).apply(null, arguments);
  };
  var _0x3124e1 = _0x4c150b.dynCall_iiiijii = function () {
    return (_0x3124e1 = _0x4c150b.dynCall_iiiijii = _0x4c150b.asm.fs).apply(null, arguments);
  };
  var _0x1d0271 = _0x4c150b.dynCall_jijji = function () {
    return (_0x1d0271 = _0x4c150b.dynCall_jijji = _0x4c150b.asm.gs).apply(null, arguments);
  };
  var _0x30529b = _0x4c150b.dynCall_diddi = function () {
    return (_0x30529b = _0x4c150b.dynCall_diddi = _0x4c150b.asm.hs).apply(null, arguments);
  };
  var _0x17c00d = _0x4c150b.dynCall_didi = function () {
    return (_0x17c00d = _0x4c150b.dynCall_didi = _0x4c150b.asm.is).apply(null, arguments);
  };
  var _0x127db9 = _0x4c150b.dynCall_iijjii = function () {
    return (_0x127db9 = _0x4c150b.dynCall_iijjii = _0x4c150b.asm.js).apply(null, arguments);
  };
  var _0x536faa = _0x4c150b.dynCall_jjjji = function () {
    return (_0x536faa = _0x4c150b.dynCall_jjjji = _0x4c150b.asm.ks).apply(null, arguments);
  };
  var _0x5353c1 = _0x4c150b.dynCall_viijijii = function () {
    return (_0x5353c1 = _0x4c150b.dynCall_viijijii = _0x4c150b.asm.ls).apply(null, arguments);
  };
  var _0x49ff5f = _0x4c150b.dynCall_vijiji = function () {
    return (_0x49ff5f = _0x4c150b.dynCall_vijiji = _0x4c150b.asm.ms).apply(null, arguments);
  };
  var _0x513034 = _0x4c150b.dynCall_viijiijiii = function () {
    return (_0x513034 = _0x4c150b.dynCall_viijiijiii = _0x4c150b.asm.ns).apply(null, arguments);
  };
  var _0xdeca91 = _0x4c150b.dynCall_viiiijiiii = function () {
    return (_0xdeca91 = _0x4c150b.dynCall_viiiijiiii = _0x4c150b.asm.os).apply(null, arguments);
  };
  var _0x3d3e87 = _0x4c150b.dynCall_di = function () {
    return (_0x3d3e87 = _0x4c150b.dynCall_di = _0x4c150b.asm.ps).apply(null, arguments);
  };
  var _0x5c4710 = _0x4c150b.dynCall_jiiiiiiiii = function () {
    return (_0x5c4710 = _0x4c150b.dynCall_jiiiiiiiii = _0x4c150b.asm.qs).apply(null, arguments);
  };
  var _0x32d6a4 = _0x4c150b.dynCall_iiiiijii = function () {
    return (_0x32d6a4 = _0x4c150b.dynCall_iiiiijii = _0x4c150b.asm.rs).apply(null, arguments);
  };
  var _0x326119 = _0x4c150b.dynCall_iiiidii = function () {
    return (_0x326119 = _0x4c150b.dynCall_iiiidii = _0x4c150b.asm.ss).apply(null, arguments);
  };
  var _0x4c7b15 = _0x4c150b.dynCall_iidfii = function () {
    return (_0x4c7b15 = _0x4c150b.dynCall_iidfii = _0x4c150b.asm.ts).apply(null, arguments);
  };
  var _0x3e26db = _0x4c150b.dynCall_iidfi = function () {
    return (_0x3e26db = _0x4c150b.dynCall_iidfi = _0x4c150b.asm.us).apply(null, arguments);
  };
  var _0x512d0f = _0x4c150b.dynCall_iiddfi = function () {
    return (_0x512d0f = _0x4c150b.dynCall_iiddfi = _0x4c150b.asm.vs).apply(null, arguments);
  };
  var _0x41975b = _0x4c150b.dynCall_iijfii = function () {
    return (_0x41975b = _0x4c150b.dynCall_iijfii = _0x4c150b.asm.ws).apply(null, arguments);
  };
  var _0x577164 = _0x4c150b.dynCall_iijfi = function () {
    return (_0x577164 = _0x4c150b.dynCall_iijfi = _0x4c150b.asm.xs).apply(null, arguments);
  };
  var _0x1d95d5 = _0x4c150b.dynCall_iijjfi = function () {
    return (_0x1d95d5 = _0x4c150b.dynCall_iijjfi = _0x4c150b.asm.ys).apply(null, arguments);
  };
  var _0x4d92aa = _0x4c150b.dynCall_iiiiffiiiji = function () {
    return (_0x4d92aa = _0x4c150b.dynCall_iiiiffiiiji = _0x4c150b.asm.zs).apply(null, arguments);
  };
  var _0x188591 = _0x4c150b.dynCall_iiidfii = function () {
    return (_0x188591 = _0x4c150b.dynCall_iiidfii = _0x4c150b.asm.As).apply(null, arguments);
  };
  var _0x378b65 = _0x4c150b.dynCall_iiijfii = function () {
    return (_0x378b65 = _0x4c150b.dynCall_iiijfii = _0x4c150b.asm.Bs).apply(null, arguments);
  };
  var _0x747b86 = _0x4c150b.dynCall_jiiiiiii = function () {
    return (_0x747b86 = _0x4c150b.dynCall_jiiiiiii = _0x4c150b.asm.Cs).apply(null, arguments);
  };
  var _0x5162e9 = _0x4c150b.dynCall_iiiiffiiiii = function () {
    return (_0x5162e9 = _0x4c150b.dynCall_iiiiffiiiii = _0x4c150b.asm.Ds).apply(null, arguments);
  };
  var _0x1a6e7a = _0x4c150b.dynCall_iiiidfii = function () {
    return (_0x1a6e7a = _0x4c150b.dynCall_iiiidfii = _0x4c150b.asm.Es).apply(null, arguments);
  };
  var _0x1408c3 = _0x4c150b.dynCall_iiiijfii = function () {
    return (_0x1408c3 = _0x4c150b.dynCall_iiiijfii = _0x4c150b.asm.Fs).apply(null, arguments);
  };
  var _0x4903c5 = _0x4c150b.dynCall_iiiiffii = function () {
    return (_0x4903c5 = _0x4c150b.dynCall_iiiiffii = _0x4c150b.asm.Gs).apply(null, arguments);
  };
  var _0x1687f1 = _0x4c150b.dynCall_jiiiiji = function () {
    return (_0x1687f1 = _0x4c150b.dynCall_jiiiiji = _0x4c150b.asm.Hs).apply(null, arguments);
  };
  var _0x4692b1 = _0x4c150b.dynCall_fiiiifi = function () {
    return (_0x4692b1 = _0x4c150b.dynCall_fiiiifi = _0x4c150b.asm.Is).apply(null, arguments);
  };
  var _0x50081b = _0x4c150b.dynCall_iiijjii = function () {
    return (_0x50081b = _0x4c150b.dynCall_iiijjii = _0x4c150b.asm.Js).apply(null, arguments);
  };
  var _0x21de3a = _0x4c150b.dynCall_j = function () {
    return (_0x21de3a = _0x4c150b.dynCall_j = _0x4c150b.asm.Ks).apply(null, arguments);
  };
  var _0x22b504 = _0x4c150b.dynCall_jijj = function () {
    return (_0x22b504 = _0x4c150b.dynCall_jijj = _0x4c150b.asm.Ls).apply(null, arguments);
  };
  var _0x41b454 = _0x4c150b.dynCall_vij = function () {
    return (_0x41b454 = _0x4c150b.dynCall_vij = _0x4c150b.asm.Ms).apply(null, arguments);
  };
  var _0x39871b = _0x4c150b.dynCall_iiiijiii = function () {
    return (_0x39871b = _0x4c150b.dynCall_iiiijiii = _0x4c150b.asm.Ns).apply(null, arguments);
  };
  var _0x29b00e = _0x4c150b.dynCall_iiiij = function () {
    return (_0x29b00e = _0x4c150b.dynCall_iiiij = _0x4c150b.asm.Os).apply(null, arguments);
  };
  var _0x29e50e = _0x4c150b.dynCall_ijj = function () {
    return (_0x29e50e = _0x4c150b.dynCall_ijj = _0x4c150b.asm.Ps).apply(null, arguments);
  };
  var _0x14002d = _0x4c150b.dynCall_vjji = function () {
    return (_0x14002d = _0x4c150b.dynCall_vjji = _0x4c150b.asm.Qs).apply(null, arguments);
  };
  var _0x25baf5 = _0x4c150b.dynCall_ij = function () {
    return (_0x25baf5 = _0x4c150b.dynCall_ij = _0x4c150b.asm.Rs).apply(null, arguments);
  };
  var _0x5124a6 = _0x4c150b.dynCall_vif = function () {
    return (_0x5124a6 = _0x4c150b.dynCall_vif = _0x4c150b.asm.Ss).apply(null, arguments);
  };
  var _0x5a6592 = _0x4c150b.dynCall_vid = function () {
    return (_0x5a6592 = _0x4c150b.dynCall_vid = _0x4c150b.asm.Ts).apply(null, arguments);
  };
  var _0x18ba1f = _0x4c150b.dynCall_viiiiif = function () {
    return (_0x18ba1f = _0x4c150b.dynCall_viiiiif = _0x4c150b.asm.Us).apply(null, arguments);
  };
  var _0x4cc92a = _0x4c150b.dynCall_viiiif = function () {
    return (_0x4cc92a = _0x4c150b.dynCall_viiiif = _0x4c150b.asm.Vs).apply(null, arguments);
  };
  var _0x6d21b6 = _0x4c150b.dynCall_viiiiiif = function () {
    return (_0x6d21b6 = _0x4c150b.dynCall_viiiiiif = _0x4c150b.asm.Ws).apply(null, arguments);
  };
  var _0x1e18d2 = _0x4c150b.dynCall_viffff = function () {
    return (_0x1e18d2 = _0x4c150b.dynCall_viffff = _0x4c150b.asm.Xs).apply(null, arguments);
  };
  var _0x55ea3c = _0x4c150b.dynCall_iiif = function () {
    return (_0x55ea3c = _0x4c150b.dynCall_iiif = _0x4c150b.asm.Ys).apply(null, arguments);
  };
  var _0x4c497b = _0x4c150b.dynCall_fif = function () {
    return (_0x4c497b = _0x4c150b.dynCall_fif = _0x4c150b.asm.Zs).apply(null, arguments);
  };
  var _0x4bd8e9 = _0x4c150b.dynCall_iiiiiifff = function () {
    return (_0x4bd8e9 = _0x4c150b.dynCall_iiiiiifff = _0x4c150b.asm._s).apply(null, arguments);
  };
  var _0x270fc8 = _0x4c150b.dynCall_iiiiiifiif = function () {
    return (_0x270fc8 = _0x4c150b.dynCall_iiiiiifiif = _0x4c150b.asm.$s).apply(null, arguments);
  };
  var _0x3ac72f = _0x4c150b.dynCall_iiiiiifiii = function () {
    return (_0x3ac72f = _0x4c150b.dynCall_iiiiiifiii = _0x4c150b.asm.at).apply(null, arguments);
  };
  var _0x565057 = _0x4c150b.dynCall_iiiiiiifiif = function () {
    return (_0x565057 = _0x4c150b.dynCall_iiiiiiifiif = _0x4c150b.asm.bt).apply(null, arguments);
  };
  var _0x57a861 = _0x4c150b.dynCall_fiff = function () {
    return (_0x57a861 = _0x4c150b.dynCall_fiff = _0x4c150b.asm.ct).apply(null, arguments);
  };
  var _0x435431 = _0x4c150b.dynCall_fiiiiiifiifif = function () {
    return (_0x435431 = _0x4c150b.dynCall_fiiiiiifiifif = _0x4c150b.asm.dt).apply(null, arguments);
  };
  var _0x14a96c = _0x4c150b.dynCall_fiiiiiifiiiif = function () {
    return (_0x14a96c = _0x4c150b.dynCall_fiiiiiifiiiif = _0x4c150b.asm.et).apply(null, arguments);
  };
  var _0x36ff30 = _0x4c150b.dynCall_iifiiiijii = function () {
    return (_0x36ff30 = _0x4c150b.dynCall_iifiiiijii = _0x4c150b.asm.ft).apply(null, arguments);
  };
  var _0x2f94b5 = _0x4c150b.dynCall_vifijii = function () {
    return (_0x2f94b5 = _0x4c150b.dynCall_vifijii = _0x4c150b.asm.gt).apply(null, arguments);
  };
  var _0x3903c7 = _0x4c150b.dynCall_iiiifffiii = function () {
    return (_0x3903c7 = _0x4c150b.dynCall_iiiifffiii = _0x4c150b.asm.ht).apply(null, arguments);
  };
  var _0x29f8f9 = _0x4c150b.dynCall_iiiifffffi = function () {
    return (_0x29f8f9 = _0x4c150b.dynCall_iiiifffffi = _0x4c150b.asm.it).apply(null, arguments);
  };
  var _0x3294e3 = _0x4c150b.dynCall_viffiiiif = function () {
    return (_0x3294e3 = _0x4c150b.dynCall_viffiiiif = _0x4c150b.asm.jt).apply(null, arguments);
  };
  var _0x25b15b = _0x4c150b.dynCall_viffiifffffiii = function () {
    return (_0x25b15b = _0x4c150b.dynCall_viffiifffffiii = _0x4c150b.asm.kt).apply(null, arguments);
  };
  var _0x2e68e9 = _0x4c150b.dynCall_viffffiifffiiiiif = function () {
    return (_0x2e68e9 = _0x4c150b.dynCall_viffffiifffiiiiif = _0x4c150b.asm.lt).apply(null, arguments);
  };
  var _0x457688 = _0x4c150b.dynCall_iiiifffffii = function () {
    return (_0x457688 = _0x4c150b.dynCall_iiiifffffii = _0x4c150b.asm.mt).apply(null, arguments);
  };
  var _0x489bb8 = _0x4c150b.dynCall_viiiiiiiiiiifii = function () {
    return (_0x489bb8 = _0x4c150b.dynCall_viiiiiiiiiiifii = _0x4c150b.asm.nt).apply(null, arguments);
  };
  var _0x3c0b11 = _0x4c150b.dynCall_viff = function () {
    return (_0x3c0b11 = _0x4c150b.dynCall_viff = _0x4c150b.asm.ot).apply(null, arguments);
  };
  var _0x4c4eae = _0x4c150b.dynCall_iiiiifiiiiif = function () {
    return (_0x4c4eae = _0x4c150b.dynCall_iiiiifiiiiif = _0x4c150b.asm.pt).apply(null, arguments);
  };
  var _0x56057f = _0x4c150b.dynCall_viiifiiiii = function () {
    return (_0x56057f = _0x4c150b.dynCall_viiifiiiii = _0x4c150b.asm.qt).apply(null, arguments);
  };
  var _0x5ac639 = _0x4c150b.dynCall_viiiifiiiiif = function () {
    return (_0x5ac639 = _0x4c150b.dynCall_viiiifiiiiif = _0x4c150b.asm.rt).apply(null, arguments);
  };
  var _0x9c910a = _0x4c150b.dynCall_iifff = function () {
    return (_0x9c910a = _0x4c150b.dynCall_iifff = _0x4c150b.asm.st).apply(null, arguments);
  };
  var _0x5d07b4 = _0x4c150b.dynCall_iif = function () {
    return (_0x5d07b4 = _0x4c150b.dynCall_iif = _0x4c150b.asm.tt).apply(null, arguments);
  };
  var _0x30f03f = _0x4c150b.dynCall_viijijj = function () {
    return (_0x30f03f = _0x4c150b.dynCall_viijijj = _0x4c150b.asm.ut).apply(null, arguments);
  };
  var _0x528336 = _0x4c150b.dynCall_viijj = function () {
    return (_0x528336 = _0x4c150b.dynCall_viijj = _0x4c150b.asm.vt).apply(null, arguments);
  };
  var _0x3fb78e = _0x4c150b.dynCall_viiiij = function () {
    return (_0x3fb78e = _0x4c150b.dynCall_viiiij = _0x4c150b.asm.wt).apply(null, arguments);
  };
  var _0x55c666 = _0x4c150b.dynCall_iiijji = function () {
    return (_0x55c666 = _0x4c150b.dynCall_iiijji = _0x4c150b.asm.xt).apply(null, arguments);
  };
  var _0x24c580 = _0x4c150b.dynCall_ijjiiiii = function () {
    return (_0x24c580 = _0x4c150b.dynCall_ijjiiiii = _0x4c150b.asm.yt).apply(null, arguments);
  };
  var _0x34b257 = _0x4c150b.dynCall_vidd = function () {
    return (_0x34b257 = _0x4c150b.dynCall_vidd = _0x4c150b.asm.zt).apply(null, arguments);
  };
  var _0x39ae5e = _0x4c150b.dynCall_iiiiiifffiiifiii = function () {
    return (_0x39ae5e = _0x4c150b.dynCall_iiiiiifffiiifiii = _0x4c150b.asm.At).apply(null, arguments);
  };
  var _0x32dfb4 = _0x4c150b.dynCall_viid = function () {
    return (_0x32dfb4 = _0x4c150b.dynCall_viid = _0x4c150b.asm.Bt).apply(null, arguments);
  };
  var _0x173c64 = _0x4c150b.dynCall_viiif = function () {
    return (_0x173c64 = _0x4c150b.dynCall_viiif = _0x4c150b.asm.Ct).apply(null, arguments);
  };
  var _0x23befa = _0x4c150b.dynCall_fiiiif = function () {
    return (_0x23befa = _0x4c150b.dynCall_fiiiif = _0x4c150b.asm.Dt).apply(null, arguments);
  };
  var _0x1734c6 = _0x4c150b.dynCall_iiiiiff = function () {
    return (_0x1734c6 = _0x4c150b.dynCall_iiiiiff = _0x4c150b.asm.Et).apply(null, arguments);
  };
  var _0x318020 = _0x4c150b.dynCall_vifff = function () {
    return (_0x318020 = _0x4c150b.dynCall_vifff = _0x4c150b.asm.Ft).apply(null, arguments);
  };
  var _0x574763 = _0x4c150b.dynCall_viifff = function () {
    return (_0x574763 = _0x4c150b.dynCall_viifff = _0x4c150b.asm.Gt).apply(null, arguments);
  };
  var _0x33a3c7 = _0x4c150b.dynCall_vf = function () {
    return (_0x33a3c7 = _0x4c150b.dynCall_vf = _0x4c150b.asm.Ht).apply(null, arguments);
  };
  var _0x1e076c = _0x4c150b.dynCall_vffff = function () {
    return (_0x1e076c = _0x4c150b.dynCall_vffff = _0x4c150b.asm.It).apply(null, arguments);
  };
  var _0x1696a1 = _0x4c150b.dynCall_vff = function () {
    return (_0x1696a1 = _0x4c150b.dynCall_vff = _0x4c150b.asm.Jt).apply(null, arguments);
  };
  var _0x5d3024 = _0x4c150b.dynCall_fff = function () {
    return (_0x5d3024 = _0x4c150b.dynCall_fff = _0x4c150b.asm.Kt).apply(null, arguments);
  };
  var _0x489f84 = _0x4c150b.dynCall_f = function () {
    return (_0x489f84 = _0x4c150b.dynCall_f = _0x4c150b.asm.Lt).apply(null, arguments);
  };
  var _0x4eac37 = _0x4c150b.dynCall_vfff = function () {
    return (_0x4eac37 = _0x4c150b.dynCall_vfff = _0x4c150b.asm.Mt).apply(null, arguments);
  };
  var _0x2e81ff = _0x4c150b.dynCall_ff = function () {
    return (_0x2e81ff = _0x4c150b.dynCall_ff = _0x4c150b.asm.Nt).apply(null, arguments);
  };
  var _0x572298 = _0x4c150b.dynCall_iiid = function () {
    return (_0x572298 = _0x4c150b.dynCall_iiid = _0x4c150b.asm.Ot).apply(null, arguments);
  };
  var _0x2ba881 = _0x4c150b.dynCall_fiif = function () {
    return (_0x2ba881 = _0x4c150b.dynCall_fiif = _0x4c150b.asm.Pt).apply(null, arguments);
  };
  var _0x53d049 = _0x4c150b.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0x53d049 = _0x4c150b.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x4c150b.asm.Qt).apply(null, arguments);
  };
  var _0x25d580 = _0x4c150b.dynCall_viififi = function () {
    return (_0x25d580 = _0x4c150b.dynCall_viififi = _0x4c150b.asm.Rt).apply(null, arguments);
  };
  var _0x17fe24 = _0x4c150b.dynCall_viiiiiiiijiii = function () {
    return (_0x17fe24 = _0x4c150b.dynCall_viiiiiiiijiii = _0x4c150b.asm.St).apply(null, arguments);
  };
  function _0x496b63(_0x5e924d, _0x544eac, _0x58de60, _0x4e2bcb, _0x345f0a, _0x17b964) {
    var _0x430e17 = _0x50e49c();
    try {
      return _0x4c8cfc(_0x5e924d, _0x544eac, _0x58de60, _0x4e2bcb, _0x345f0a, _0x17b964);
    } catch (_0x24ad40) {
      _0x229d9f(_0x430e17);
      if (_0x24ad40 !== _0x24ad40 + 0 && _0x24ad40 !== "longjmp") {
        throw _0x24ad40;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x413aca(_0x4147bf, _0xea2f72, _0x218688) {
    var _0x1e3f80 = _0x50e49c();
    try {
      _0xc7f8b0(_0x4147bf, _0xea2f72, _0x218688);
    } catch (_0x49ae37) {
      _0x229d9f(_0x1e3f80);
      if (_0x49ae37 !== _0x49ae37 + 0 && _0x49ae37 !== "longjmp") {
        throw _0x49ae37;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x28bbe6(_0x302f4e, _0x1322a5, _0x26cb5f) {
    var _0x2fb670 = _0x50e49c();
    try {
      return _0x5e1bf4(_0x302f4e, _0x1322a5, _0x26cb5f);
    } catch (_0x27ccdc) {
      _0x229d9f(_0x2fb670);
      if (_0x27ccdc !== _0x27ccdc + 0 && _0x27ccdc !== "longjmp") {
        throw _0x27ccdc;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x127d39(_0x4fe7e7, _0x54ae50, _0x22e21d, _0x3f554a) {
    var _0x19a0bb = _0x50e49c();
    try {
      return _0x10910b(_0x4fe7e7, _0x54ae50, _0x22e21d, _0x3f554a);
    } catch (_0x1fdb18) {
      _0x229d9f(_0x19a0bb);
      if (_0x1fdb18 !== _0x1fdb18 + 0 && _0x1fdb18 !== "longjmp") {
        throw _0x1fdb18;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x3e3495(_0x956ae8, _0x1b9ef7, _0xdc8416, _0x1e792a, _0x45360a) {
    var _0x3103f3 = _0x50e49c();
    try {
      _0x1dce6c(_0x956ae8, _0x1b9ef7, _0xdc8416, _0x1e792a, _0x45360a);
    } catch (_0x1c7f32) {
      _0x229d9f(_0x3103f3);
      if (_0x1c7f32 !== _0x1c7f32 + 0 && _0x1c7f32 !== "longjmp") {
        throw _0x1c7f32;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x2f1d06(_0x53c320, _0x5bc885, _0x3d05a3, _0x17f805, _0x194bd0) {
    var _0x10088d = _0x50e49c();
    try {
      return _0x29b8e2(_0x53c320, _0x5bc885, _0x3d05a3, _0x17f805, _0x194bd0);
    } catch (_0xae46ae) {
      _0x229d9f(_0x10088d);
      if (_0xae46ae !== _0xae46ae + 0 && _0xae46ae !== "longjmp") {
        throw _0xae46ae;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x27916b(_0x56a506, _0x1b080c, _0x1f5ad5, _0x505aa0) {
    var _0x2b4be9 = _0x50e49c();
    try {
      return _0x447b95(_0x56a506, _0x1b080c, _0x1f5ad5, _0x505aa0);
    } catch (_0x58255b) {
      _0x229d9f(_0x2b4be9);
      if (_0x58255b !== _0x58255b + 0 && _0x58255b !== "longjmp") {
        throw _0x58255b;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x2351c0(_0x1e31f1, _0x55fe3c, _0xf34107, _0x28ad78) {
    var _0x31af00 = _0x50e49c();
    try {
      return _0x170494(_0x1e31f1, _0x55fe3c, _0xf34107, _0x28ad78);
    } catch (_0x31b6fd) {
      _0x229d9f(_0x31af00);
      if (_0x31b6fd !== _0x31b6fd + 0 && _0x31b6fd !== "longjmp") {
        throw _0x31b6fd;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x1eacef(_0x5590ca, _0xbd8bbe, _0x11a115, _0x179374) {
    var _0x393eba = _0x50e49c();
    try {
      _0x38ac4b(_0x5590ca, _0xbd8bbe, _0x11a115, _0x179374);
    } catch (_0x29397c) {
      _0x229d9f(_0x393eba);
      if (_0x29397c !== _0x29397c + 0 && _0x29397c !== "longjmp") {
        throw _0x29397c;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x3c19e9(_0x3d5fa5, _0x4a39f5) {
    var _0x268a03 = _0x50e49c();
    try {
      _0x1c7fce(_0x3d5fa5, _0x4a39f5);
    } catch (_0x3b9962) {
      _0x229d9f(_0x268a03);
      if (_0x3b9962 !== _0x3b9962 + 0 && _0x3b9962 !== "longjmp") {
        throw _0x3b9962;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x31fbcb(_0x2f1e4d, _0x4cd6c1, _0x41b75c, _0x2afd17) {
    var _0x20c6ee = _0x50e49c();
    try {
      _0x2c15b5(_0x2f1e4d, _0x4cd6c1, _0x41b75c, _0x2afd17);
    } catch (_0x4bfb54) {
      _0x229d9f(_0x20c6ee);
      if (_0x4bfb54 !== _0x4bfb54 + 0 && _0x4bfb54 !== "longjmp") {
        throw _0x4bfb54;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x547ffa(_0x13a5f9, _0x423b45) {
    var _0x3794b0 = _0x50e49c();
    try {
      return _0xd7622e(_0x13a5f9, _0x423b45);
    } catch (_0x2e39f4) {
      _0x229d9f(_0x3794b0);
      if (_0x2e39f4 !== _0x2e39f4 + 0 && _0x2e39f4 !== "longjmp") {
        throw _0x2e39f4;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x30b475(_0x4b87ee) {
    var _0x321a79 = _0x50e49c();
    try {
      _0x24caf7(_0x4b87ee);
    } catch (_0x5b37a0) {
      _0x229d9f(_0x321a79);
      if (_0x5b37a0 !== _0x5b37a0 + 0 && _0x5b37a0 !== "longjmp") {
        throw _0x5b37a0;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x27729f(_0x6a47fd) {
    var _0x7274c9 = _0x50e49c();
    try {
      return _0x237c23(_0x6a47fd);
    } catch (_0x58c6cd) {
      _0x229d9f(_0x7274c9);
      if (_0x58c6cd !== _0x58c6cd + 0 && _0x58c6cd !== "longjmp") {
        throw _0x58c6cd;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x51c7cf(_0x1a2e20, _0x5e7e9a, _0x1269ee, _0x5db723, _0x6d6896, _0x81d972, _0xb936fb, _0x1cba23) {
    var _0x1d4456 = _0x50e49c();
    try {
      return _0xc88a99(_0x1a2e20, _0x5e7e9a, _0x1269ee, _0x5db723, _0x6d6896, _0x81d972, _0xb936fb, _0x1cba23);
    } catch (_0x1d9419) {
      _0x229d9f(_0x1d4456);
      if (_0x1d9419 !== _0x1d9419 + 0 && _0x1d9419 !== "longjmp") {
        throw _0x1d9419;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x2c4ef7(_0x5c5e5c, _0x120c48, _0x5d35b3, _0x38479a, _0x1bc9f2, _0x5cc567) {
    var _0x440973 = _0x50e49c();
    try {
      _0x5f2f20(_0x5c5e5c, _0x120c48, _0x5d35b3, _0x38479a, _0x1bc9f2, _0x5cc567);
    } catch (_0x5851e4) {
      _0x229d9f(_0x440973);
      if (_0x5851e4 !== _0x5851e4 + 0 && _0x5851e4 !== "longjmp") {
        throw _0x5851e4;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x1d8b22(_0x4afca1, _0x36b65a, _0x184087, _0x1ee3aa, _0x54f657, _0x4939c8, _0x3da1a8) {
    var _0x3d2d5e = _0x50e49c();
    try {
      return _0x2712ce(_0x4afca1, _0x36b65a, _0x184087, _0x1ee3aa, _0x54f657, _0x4939c8, _0x3da1a8);
    } catch (_0x1121b5) {
      _0x229d9f(_0x3d2d5e);
      if (_0x1121b5 !== _0x1121b5 + 0 && _0x1121b5 !== "longjmp") {
        throw _0x1121b5;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x35e63d(_0x26575b, _0x3c91f8, _0x5a1a74, _0x1fe13b, _0x325ca1, _0x19d8a8, _0x33450e, _0x119f8d, _0x46cc78, _0x5e97d3, _0x320831) {
    var _0x891904 = _0x50e49c();
    try {
      return _0x3c569e(_0x26575b, _0x3c91f8, _0x5a1a74, _0x1fe13b, _0x325ca1, _0x19d8a8, _0x33450e, _0x119f8d, _0x46cc78, _0x5e97d3, _0x320831);
    } catch (_0x3d7bc2) {
      _0x229d9f(_0x891904);
      if (_0x3d7bc2 !== _0x3d7bc2 + 0 && _0x3d7bc2 !== "longjmp") {
        throw _0x3d7bc2;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x1641bc(_0xe6025a, _0x569c70, _0x122200, _0x2cb7f4, _0x96d04f, _0x389200, _0x5330b9, _0x363ccf, _0x1c1158, _0x1eab9b, _0x4fc27a, _0x23722e, _0x3c2177) {
    var _0x25381c = _0x50e49c();
    try {
      return _0x4ed0d8(_0xe6025a, _0x569c70, _0x122200, _0x2cb7f4, _0x96d04f, _0x389200, _0x5330b9, _0x363ccf, _0x1c1158, _0x1eab9b, _0x4fc27a, _0x23722e, _0x3c2177);
    } catch (_0x32e15b) {
      _0x229d9f(_0x25381c);
      if (_0x32e15b !== _0x32e15b + 0 && _0x32e15b !== "longjmp") {
        throw _0x32e15b;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x5d863f(_0x5c91a4, _0x94cef9, _0x1eb4cc, _0x30e472, _0x593dab, _0x107ced, _0x310403, _0x357c83) {
    var _0x3b266d = _0x50e49c();
    try {
      _0x374af2(_0x5c91a4, _0x94cef9, _0x1eb4cc, _0x30e472, _0x593dab, _0x107ced, _0x310403, _0x357c83);
    } catch (_0x3b0221) {
      _0x229d9f(_0x3b266d);
      if (_0x3b0221 !== _0x3b0221 + 0 && _0x3b0221 !== "longjmp") {
        throw _0x3b0221;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x25b2d9(_0x57c745, _0x33028d, _0x5cd4d3, _0x313f23, _0x297818, _0x327fdf, _0x55e1de, _0x214037, _0xfda58b, _0xab1510, _0x220f3b) {
    var _0x49b1a9 = _0x50e49c();
    try {
      _0x464697(_0x57c745, _0x33028d, _0x5cd4d3, _0x313f23, _0x297818, _0x327fdf, _0x55e1de, _0x214037, _0xfda58b, _0xab1510, _0x220f3b);
    } catch (_0x12091e) {
      _0x229d9f(_0x49b1a9);
      if (_0x12091e !== _0x12091e + 0 && _0x12091e !== "longjmp") {
        throw _0x12091e;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x416526(_0x28b2f5, _0x4a66de, _0x54b128, _0x57fa98, _0x1dfcac, _0x5c4dc4, _0x17b473) {
    var _0x43609a = _0x50e49c();
    try {
      _0x3039e2(_0x28b2f5, _0x4a66de, _0x54b128, _0x57fa98, _0x1dfcac, _0x5c4dc4, _0x17b473);
    } catch (_0x2e5f6d) {
      _0x229d9f(_0x43609a);
      if (_0x2e5f6d !== _0x2e5f6d + 0 && _0x2e5f6d !== "longjmp") {
        throw _0x2e5f6d;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x226470(_0x1a242b, _0x5689f8, _0x1ee5d8, _0x1b7535, _0x2d5b71) {
    var _0x552986 = _0x50e49c();
    try {
      _0xdc91fe(_0x1a242b, _0x5689f8, _0x1ee5d8, _0x1b7535, _0x2d5b71);
    } catch (_0x4e717d) {
      _0x229d9f(_0x552986);
      if (_0x4e717d !== _0x4e717d + 0 && _0x4e717d !== "longjmp") {
        throw _0x4e717d;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x2830af(_0x4b2095, _0x10ff3d, _0x4b0c1d) {
    var _0x2216ac = _0x50e49c();
    try {
      return _0x1e852d(_0x4b2095, _0x10ff3d, _0x4b0c1d);
    } catch (_0x558c0e) {
      _0x229d9f(_0x2216ac);
      if (_0x558c0e !== _0x558c0e + 0 && _0x558c0e !== "longjmp") {
        throw _0x558c0e;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x2e9be4(_0x3e65fb, _0x17f721, _0x550989, _0x30d9ac, _0x5c66e4, _0x122332, _0x44fbbe, _0x58ec3e, _0x4a9a82) {
    var _0x46b48a = _0x50e49c();
    try {
      return _0x220550(_0x3e65fb, _0x17f721, _0x550989, _0x30d9ac, _0x5c66e4, _0x122332, _0x44fbbe, _0x58ec3e, _0x4a9a82);
    } catch (_0x4c6c42) {
      _0x229d9f(_0x46b48a);
      if (_0x4c6c42 !== _0x4c6c42 + 0 && _0x4c6c42 !== "longjmp") {
        throw _0x4c6c42;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0xd1966a(_0xf4e69c, _0x3457ba, _0x21a3c7) {
    var _0x51f509 = _0x50e49c();
    try {
      return _0x4d3171(_0xf4e69c, _0x3457ba, _0x21a3c7);
    } catch (_0x7840fe) {
      _0x229d9f(_0x51f509);
      if (_0x7840fe !== _0x7840fe + 0 && _0x7840fe !== "longjmp") {
        throw _0x7840fe;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0xdb5f3b(_0xb50477, _0x3e814b, _0x695ffe) {
    var _0x382ab2 = _0x50e49c();
    try {
      return _0x4eb50e(_0xb50477, _0x3e814b, _0x695ffe);
    } catch (_0x27216f) {
      _0x229d9f(_0x382ab2);
      if (_0x27216f !== _0x27216f + 0 && _0x27216f !== "longjmp") {
        throw _0x27216f;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x32c0c0(_0x3f0a73, _0x368188, _0x29472b) {
    var _0x5adbd2 = _0x50e49c();
    try {
      return _0x4f4297(_0x3f0a73, _0x368188, _0x29472b);
    } catch (_0x11eb63) {
      _0x229d9f(_0x5adbd2);
      if (_0x11eb63 !== _0x11eb63 + 0 && _0x11eb63 !== "longjmp") {
        throw _0x11eb63;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0xa0489d(_0x15c195, _0x1a3ffd, _0x1c57aa, _0x240c92, _0x181fd0, _0x1466fd, _0x18b906, _0x110414, _0x16588d) {
    var _0x3ae5cb = _0x50e49c();
    try {
      _0x341877(_0x15c195, _0x1a3ffd, _0x1c57aa, _0x240c92, _0x181fd0, _0x1466fd, _0x18b906, _0x110414, _0x16588d);
    } catch (_0x3ca55a) {
      _0x229d9f(_0x3ae5cb);
      if (_0x3ca55a !== _0x3ca55a + 0 && _0x3ca55a !== "longjmp") {
        throw _0x3ca55a;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x1ede41(_0x2488b3, _0x2ed672, _0x1cc113, _0x1fcdf2, _0xf2b3f6, _0x113bd4, _0x401d65, _0x57efe2, _0x494666, _0x16541c) {
    var _0x4fa245 = _0x50e49c();
    try {
      _0x2e29f7(_0x2488b3, _0x2ed672, _0x1cc113, _0x1fcdf2, _0xf2b3f6, _0x113bd4, _0x401d65, _0x57efe2, _0x494666, _0x16541c);
    } catch (_0xb12302) {
      _0x229d9f(_0x4fa245);
      if (_0xb12302 !== _0xb12302 + 0 && _0xb12302 !== "longjmp") {
        throw _0xb12302;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x1f2919(_0x97f9e, _0x758bfd, _0x2f9223, _0x44be1c) {
    var _0x42525b = _0x50e49c();
    try {
      _0x4eff2a(_0x97f9e, _0x758bfd, _0x2f9223, _0x44be1c);
    } catch (_0x372c05) {
      _0x229d9f(_0x42525b);
      if (_0x372c05 !== _0x372c05 + 0 && _0x372c05 !== "longjmp") {
        throw _0x372c05;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x117de5(_0x49b969, _0x4d784a, _0x189d83, _0x3474dd, _0xc7f3f7) {
    var _0x1a1865 = _0x50e49c();
    try {
      return _0x2bf486(_0x49b969, _0x4d784a, _0x189d83, _0x3474dd, _0xc7f3f7);
    } catch (_0x25f828) {
      _0x229d9f(_0x1a1865);
      if (_0x25f828 !== _0x25f828 + 0 && _0x25f828 !== "longjmp") {
        throw _0x25f828;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x475c1b(_0xe1f248, _0x4a07cb, _0x3e01fa, _0x3cfa5d, _0x360dfc) {
    var _0x2b16d6 = _0x50e49c();
    try {
      return _0x32f7cd(_0xe1f248, _0x4a07cb, _0x3e01fa, _0x3cfa5d, _0x360dfc);
    } catch (_0x2a2ccf) {
      _0x229d9f(_0x2b16d6);
      if (_0x2a2ccf !== _0x2a2ccf + 0 && _0x2a2ccf !== "longjmp") {
        throw _0x2a2ccf;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x5256ad(_0x3a96f6, _0x1bb155, _0x953984, _0x348d11, _0x5589ef) {
    var _0x2b751b = _0x50e49c();
    try {
      return _0x420afa(_0x3a96f6, _0x1bb155, _0x953984, _0x348d11, _0x5589ef);
    } catch (_0x167748) {
      _0x229d9f(_0x2b751b);
      if (_0x167748 !== _0x167748 + 0 && _0x167748 !== "longjmp") {
        throw _0x167748;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x5e24a9(_0x2ee31f, _0x59431a, _0x262dd7, _0x5be7f5, _0x3e6504) {
    var _0x29df11 = _0x50e49c();
    try {
      return _0xd74355(_0x2ee31f, _0x59431a, _0x262dd7, _0x5be7f5, _0x3e6504);
    } catch (_0x5c19f0) {
      _0x229d9f(_0x29df11);
      if (_0x5c19f0 !== _0x5c19f0 + 0 && _0x5c19f0 !== "longjmp") {
        throw _0x5c19f0;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0xace2bd(_0x55db79, _0x3f2c81, _0x466e40, _0x481fb3, _0xd3fe5b, _0x480813, _0x367b5c, _0x1bbe16, _0xb633e8, _0x575537) {
    var _0x36e767 = _0x50e49c();
    try {
      return _0x5bcbca(_0x55db79, _0x3f2c81, _0x466e40, _0x481fb3, _0xd3fe5b, _0x480813, _0x367b5c, _0x1bbe16, _0xb633e8, _0x575537);
    } catch (_0x1c30bc) {
      _0x229d9f(_0x36e767);
      if (_0x1c30bc !== _0x1c30bc + 0 && _0x1c30bc !== "longjmp") {
        throw _0x1c30bc;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x200fde(_0x2b5caf, _0x47eaab, _0x5dfd45, _0x24aeb8, _0xbef0fc) {
    var _0x2b87af = _0x50e49c();
    try {
      _0x2b3824(_0x2b5caf, _0x47eaab, _0x5dfd45, _0x24aeb8, _0xbef0fc);
    } catch (_0x53435d) {
      _0x229d9f(_0x2b87af);
      if (_0x53435d !== _0x53435d + 0 && _0x53435d !== "longjmp") {
        throw _0x53435d;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x228fb8(_0xd7ee7f, _0x38d33c, _0x441526, _0x566b60) {
    var _0x1dffed = _0x50e49c();
    try {
      _0x39741f(_0xd7ee7f, _0x38d33c, _0x441526, _0x566b60);
    } catch (_0x53b832) {
      _0x229d9f(_0x1dffed);
      if (_0x53b832 !== _0x53b832 + 0 && _0x53b832 !== "longjmp") {
        throw _0x53b832;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x5f3769(_0x13a079, _0x3d4346, _0x156692, _0x282603) {
    var _0x3e4209 = _0x50e49c();
    try {
      return _0x356b9b(_0x13a079, _0x3d4346, _0x156692, _0x282603);
    } catch (_0x91cfba) {
      _0x229d9f(_0x3e4209);
      if (_0x91cfba !== _0x91cfba + 0 && _0x91cfba !== "longjmp") {
        throw _0x91cfba;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x313e16(_0x1466e0, _0x323358, _0x47f318, _0xdee4ee) {
    var _0x2757f8 = _0x50e49c();
    try {
      return _0x1c85af(_0x1466e0, _0x323358, _0x47f318, _0xdee4ee);
    } catch (_0x3b9065) {
      _0x229d9f(_0x2757f8);
      if (_0x3b9065 !== _0x3b9065 + 0 && _0x3b9065 !== "longjmp") {
        throw _0x3b9065;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x394dab(_0x1e78e1, _0x1fdc09, _0x2a988b, _0x40049d) {
    var _0x29b2f5 = _0x50e49c();
    try {
      return _0x271858(_0x1e78e1, _0x1fdc09, _0x2a988b, _0x40049d);
    } catch (_0x4f2c1e) {
      _0x229d9f(_0x29b2f5);
      if (_0x4f2c1e !== _0x4f2c1e + 0 && _0x4f2c1e !== "longjmp") {
        throw _0x4f2c1e;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x41702c(_0x3e3392, _0x3d3e3d, _0x572551, _0x5cfc1c) {
    var _0x42fec0 = _0x50e49c();
    try {
      return _0x4ffdcc(_0x3e3392, _0x3d3e3d, _0x572551, _0x5cfc1c);
    } catch (_0x1d7358) {
      _0x229d9f(_0x42fec0);
      if (_0x1d7358 !== _0x1d7358 + 0 && _0x1d7358 !== "longjmp") {
        throw _0x1d7358;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x58c2f9(_0x2484b0, _0xba8b31, _0x79dfee, _0xde21a0, _0x2855ce, _0x402041, _0x3b412b, _0x20cdce) {
    var _0x4e410c = _0x50e49c();
    try {
      return _0x2bece0(_0x2484b0, _0xba8b31, _0x79dfee, _0xde21a0, _0x2855ce, _0x402041, _0x3b412b, _0x20cdce);
    } catch (_0x21d3b4) {
      _0x229d9f(_0x4e410c);
      if (_0x21d3b4 !== _0x21d3b4 + 0 && _0x21d3b4 !== "longjmp") {
        throw _0x21d3b4;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x4cbebb(_0x3fc440, _0x878f97, _0x17a930, _0x3874ff, _0x437291, _0x34333d, _0x221e8f, _0x3429f7, _0x25d6b6, _0x2f4660, _0x128887, _0x3e6c15, _0x36d414, _0x27140e, _0x1f70ed) {
    var _0x5c7b30 = _0x50e49c();
    try {
      _0x3c5734(_0x3fc440, _0x878f97, _0x17a930, _0x3874ff, _0x437291, _0x34333d, _0x221e8f, _0x3429f7, _0x25d6b6, _0x2f4660, _0x128887, _0x3e6c15, _0x36d414, _0x27140e, _0x1f70ed);
    } catch (_0x1114c9) {
      _0x229d9f(_0x5c7b30);
      if (_0x1114c9 !== _0x1114c9 + 0 && _0x1114c9 !== "longjmp") {
        throw _0x1114c9;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x1de739(_0x13fb00, _0x3f3187, _0x2dcb64, _0x25e6c4, _0x16f4c3, _0x49216b, _0x5b3222, _0x4f4590, _0x1423ff, _0x3009a9, _0x229fcb, _0x8cc5e, _0x5541ff, _0x45c982, _0x4c12e3) {
    var _0x46a832 = _0x50e49c();
    try {
      _0x1ce8a9(_0x13fb00, _0x3f3187, _0x2dcb64, _0x25e6c4, _0x16f4c3, _0x49216b, _0x5b3222, _0x4f4590, _0x1423ff, _0x3009a9, _0x229fcb, _0x8cc5e, _0x5541ff, _0x45c982, _0x4c12e3);
    } catch (_0x48a039) {
      _0x229d9f(_0x46a832);
      if (_0x48a039 !== _0x48a039 + 0 && _0x48a039 !== "longjmp") {
        throw _0x48a039;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x33a774(_0x3c41db, _0x152d14, _0x396322, _0x1a0f39, _0x401f33, _0x3f1b0b, _0x5a7b5a, _0x4b097f, _0x44c297, _0x543996, _0x4f6b11, _0x388a39, _0x5ba952, _0x1dc13d, _0x53f2a5) {
    var _0x40d9f2 = _0x50e49c();
    try {
      _0x1d896d(_0x3c41db, _0x152d14, _0x396322, _0x1a0f39, _0x401f33, _0x3f1b0b, _0x5a7b5a, _0x4b097f, _0x44c297, _0x543996, _0x4f6b11, _0x388a39, _0x5ba952, _0x1dc13d, _0x53f2a5);
    } catch (_0x6f2205) {
      _0x229d9f(_0x40d9f2);
      if (_0x6f2205 !== _0x6f2205 + 0 && _0x6f2205 !== "longjmp") {
        throw _0x6f2205;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x10ebfd(_0x3775c9, _0x2348ca, _0x309a47, _0x52945c, _0x35523b, _0x11eff8) {
    var _0x4a634b = _0x50e49c();
    try {
      _0x4ab171(_0x3775c9, _0x2348ca, _0x309a47, _0x52945c, _0x35523b, _0x11eff8);
    } catch (_0xd9e926) {
      _0x229d9f(_0x4a634b);
      if (_0xd9e926 !== _0xd9e926 + 0 && _0xd9e926 !== "longjmp") {
        throw _0xd9e926;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x2c1c0f(_0x5904fb, _0x2a4568, _0x556756, _0x3f0590, _0x39acce, _0x6c7685) {
    var _0x1c0b04 = _0x50e49c();
    try {
      return _0xafe16(_0x5904fb, _0x2a4568, _0x556756, _0x3f0590, _0x39acce, _0x6c7685);
    } catch (_0x3d13b7) {
      _0x229d9f(_0x1c0b04);
      if (_0x3d13b7 !== _0x3d13b7 + 0 && _0x3d13b7 !== "longjmp") {
        throw _0x3d13b7;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x1469f9(_0x413c0c, _0x4cbabe, _0x5bf719, _0x1bb720, _0x5acd40) {
    var _0x5eceb0 = _0x50e49c();
    try {
      return _0x40b14f(_0x413c0c, _0x4cbabe, _0x5bf719, _0x1bb720, _0x5acd40);
    } catch (_0x1a734f) {
      _0x229d9f(_0x5eceb0);
      if (_0x1a734f !== _0x1a734f + 0 && _0x1a734f !== "longjmp") {
        throw _0x1a734f;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x113f9c(_0x21d0d5, _0x141738, _0x2e113c, _0x24252c, _0x4a9e51, _0x5a4bb3, _0x13715b, _0x28fd15) {
    var _0x11eec2 = _0x50e49c();
    try {
      _0x1058bc(_0x21d0d5, _0x141738, _0x2e113c, _0x24252c, _0x4a9e51, _0x5a4bb3, _0x13715b, _0x28fd15);
    } catch (_0x11f991) {
      _0x229d9f(_0x11eec2);
      if (_0x11f991 !== _0x11f991 + 0 && _0x11f991 !== "longjmp") {
        throw _0x11f991;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x1c2e69(_0x72678, _0x4ee78e, _0x41f66e, _0x29f225, _0x1da796, _0x498377, _0xce3db5) {
    var _0x57a967 = _0x50e49c();
    try {
      return _0x5c8644(_0x72678, _0x4ee78e, _0x41f66e, _0x29f225, _0x1da796, _0x498377, _0xce3db5);
    } catch (_0x44cc71) {
      _0x229d9f(_0x57a967);
      if (_0x44cc71 !== _0x44cc71 + 0 && _0x44cc71 !== "longjmp") {
        throw _0x44cc71;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x99c5a4(_0x573603, _0x59f838, _0xae44ce, _0x3afc87, _0x215a89, _0x39b007) {
    var _0x1d6832 = _0x50e49c();
    try {
      _0x24bbc5(_0x573603, _0x59f838, _0xae44ce, _0x3afc87, _0x215a89, _0x39b007);
    } catch (_0x23b008) {
      _0x229d9f(_0x1d6832);
      if (_0x23b008 !== _0x23b008 + 0 && _0x23b008 !== "longjmp") {
        throw _0x23b008;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x377c54(_0x247bc3, _0x3447f8, _0x1c4dcf, _0x8a8851, _0x214b1f, _0x3f0947, _0x2109a2, _0x462bef, _0x55a3c9, _0x3eadd8, _0x397bd3, _0x25493c, _0x29cab0) {
    var _0x5800e2 = _0x50e49c();
    try {
      _0x2081dc(_0x247bc3, _0x3447f8, _0x1c4dcf, _0x8a8851, _0x214b1f, _0x3f0947, _0x2109a2, _0x462bef, _0x55a3c9, _0x3eadd8, _0x397bd3, _0x25493c, _0x29cab0);
    } catch (_0x295038) {
      _0x229d9f(_0x5800e2);
      if (_0x295038 !== _0x295038 + 0 && _0x295038 !== "longjmp") {
        throw _0x295038;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x5d46bf(_0x20f54b, _0x1d55bd, _0x8525c9, _0x28ab80, _0x191f5d, _0xaef9ba, _0x2b41f4) {
    var _0x33ec43 = _0x50e49c();
    try {
      _0x17e5eb(_0x20f54b, _0x1d55bd, _0x8525c9, _0x28ab80, _0x191f5d, _0xaef9ba, _0x2b41f4);
    } catch (_0x26b546) {
      _0x229d9f(_0x33ec43);
      if (_0x26b546 !== _0x26b546 + 0 && _0x26b546 !== "longjmp") {
        throw _0x26b546;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0xe477d2(_0x561f71, _0x2d7b62) {
    var _0x2f98c0 = _0x50e49c();
    try {
      return _0x5e8871(_0x561f71, _0x2d7b62);
    } catch (_0x172c45) {
      _0x229d9f(_0x2f98c0);
      if (_0x172c45 !== _0x172c45 + 0 && _0x172c45 !== "longjmp") {
        throw _0x172c45;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x4aee62(_0x25fc48, _0x4a3c67, _0x3a73ef, _0x3b9702, _0xf2ca55) {
    var _0x4a2ca5 = _0x50e49c();
    try {
      return _0x3fb5ca(_0x25fc48, _0x4a3c67, _0x3a73ef, _0x3b9702, _0xf2ca55);
    } catch (_0x4f9694) {
      _0x229d9f(_0x4a2ca5);
      if (_0x4f9694 !== _0x4f9694 + 0 && _0x4f9694 !== "longjmp") {
        throw _0x4f9694;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x5a5219(_0x240712, _0x1f6a51, _0x4c8cab, _0x28989d, _0x1248e5, _0x3b24b2, _0x2827b5, _0x4b26e3, _0x390f34, _0x53688a, _0x2d379e, _0xe9cb8c) {
    var _0x55ea53 = _0x50e49c();
    try {
      _0x226886(_0x240712, _0x1f6a51, _0x4c8cab, _0x28989d, _0x1248e5, _0x3b24b2, _0x2827b5, _0x4b26e3, _0x390f34, _0x53688a, _0x2d379e, _0xe9cb8c);
    } catch (_0x1e01b) {
      _0x229d9f(_0x55ea53);
      if (_0x1e01b !== _0x1e01b + 0 && _0x1e01b !== "longjmp") {
        throw _0x1e01b;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x152cba(_0x38c993, _0x501ff3, _0x4389eb, _0xad4212, _0x3b1975) {
    var _0x4672e6 = _0x50e49c();
    try {
      _0x25bd06(_0x38c993, _0x501ff3, _0x4389eb, _0xad4212, _0x3b1975);
    } catch (_0xbfe003) {
      _0x229d9f(_0x4672e6);
      if (_0xbfe003 !== _0xbfe003 + 0 && _0xbfe003 !== "longjmp") {
        throw _0xbfe003;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x5d2039(_0x5749bb, _0x29d1d8, _0x5dc95e, _0x38d101, _0x510062) {
    var _0x34ad8e = _0x50e49c();
    try {
      return _0xf554f(_0x5749bb, _0x29d1d8, _0x5dc95e, _0x38d101, _0x510062);
    } catch (_0x18640b) {
      _0x229d9f(_0x34ad8e);
      if (_0x18640b !== _0x18640b + 0 && _0x18640b !== "longjmp") {
        throw _0x18640b;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x37d44f(_0x51fd5f, _0x4f6c54, _0x155159, _0x1c1293, _0x47b949, _0x1734b3, _0x4ec869) {
    var _0x47b04e = _0x50e49c();
    try {
      return _0x326119(_0x51fd5f, _0x4f6c54, _0x155159, _0x1c1293, _0x47b949, _0x1734b3, _0x4ec869);
    } catch (_0x124638) {
      _0x229d9f(_0x47b04e);
      if (_0x124638 !== _0x124638 + 0 && _0x124638 !== "longjmp") {
        throw _0x124638;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x35ad5d(_0x3c03db, _0x398c6b, _0x3b8b60, _0x4b44e8, _0x20ca74, _0x2a53d9, _0x129d70) {
    var _0x1dba6f = _0x50e49c();
    try {
      return _0xb24d8(_0x3c03db, _0x398c6b, _0x3b8b60, _0x4b44e8, _0x20ca74, _0x2a53d9, _0x129d70);
    } catch (_0x3e3dec) {
      _0x229d9f(_0x1dba6f);
      if (_0x3e3dec !== _0x3e3dec + 0 && _0x3e3dec !== "longjmp") {
        throw _0x3e3dec;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x18b15b(_0x309916, _0x3be24b, _0x392b2e, _0x117c66) {
    var _0x39ab28 = _0x50e49c();
    try {
      _0x34b257(_0x309916, _0x3be24b, _0x392b2e, _0x117c66);
    } catch (_0xc0a04e) {
      _0x229d9f(_0x39ab28);
      if (_0xc0a04e !== _0xc0a04e + 0 && _0xc0a04e !== "longjmp") {
        throw _0xc0a04e;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x366ea6(_0x348a83, _0x1dda74, _0x1ca56c, _0x1889d0, _0x4de201) {
    var _0xe1d825 = _0x50e49c();
    try {
      return _0x3ec6b2(_0x348a83, _0x1dda74, _0x1ca56c, _0x1889d0, _0x4de201);
    } catch (_0x545da0) {
      _0x229d9f(_0xe1d825);
      if (_0x545da0 !== _0x545da0 + 0 && _0x545da0 !== "longjmp") {
        throw _0x545da0;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x24615e(_0x53d217, _0x16d07d, _0x22366c, _0x26c98d, _0x35385b) {
    var _0x272c05 = _0x50e49c();
    try {
      return _0x141c4b(_0x53d217, _0x16d07d, _0x22366c, _0x26c98d, _0x35385b);
    } catch (_0x5ecdc1) {
      _0x229d9f(_0x272c05);
      if (_0x5ecdc1 !== _0x5ecdc1 + 0 && _0x5ecdc1 !== "longjmp") {
        throw _0x5ecdc1;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x3959b5(_0x149440) {
    var _0x380668 = _0x50e49c();
    try {
      return _0x21de3a(_0x149440);
    } catch (_0x91353d) {
      _0x229d9f(_0x380668);
      if (_0x91353d !== _0x91353d + 0 && _0x91353d !== "longjmp") {
        throw _0x91353d;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x4a7998(_0x33eb41, _0x589560, _0x4e1759, _0x119ed6) {
    var _0x4aa5ce = _0x50e49c();
    try {
      return _0x5e0f64(_0x33eb41, _0x589560, _0x4e1759, _0x119ed6);
    } catch (_0x1228af) {
      _0x229d9f(_0x4aa5ce);
      if (_0x1228af !== _0x1228af + 0 && _0x1228af !== "longjmp") {
        throw _0x1228af;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x1a92b1(_0x37a475, _0x455e77, _0x5d184a, _0x176bf1, _0x3d449c, _0x56b2ac, _0x5e401c, _0x4aa9dc) {
    var _0x344c0a = _0x50e49c();
    try {
      return _0x47340c(_0x37a475, _0x455e77, _0x5d184a, _0x176bf1, _0x3d449c, _0x56b2ac, _0x5e401c, _0x4aa9dc);
    } catch (_0x2c349e) {
      _0x229d9f(_0x344c0a);
      if (_0x2c349e !== _0x2c349e + 0 && _0x2c349e !== "longjmp") {
        throw _0x2c349e;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x581a72(_0x2c91fe, _0x3117e0, _0x4720b3) {
    var _0xccdd31 = _0x50e49c();
    try {
      return _0x162997(_0x2c91fe, _0x3117e0, _0x4720b3);
    } catch (_0x3ca25b) {
      _0x229d9f(_0xccdd31);
      if (_0x3ca25b !== _0x3ca25b + 0 && _0x3ca25b !== "longjmp") {
        throw _0x3ca25b;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x53f7d8(_0x4deea3, _0x45bd92) {
    var _0x5e5827 = _0x50e49c();
    try {
      return _0x4fca8c(_0x4deea3, _0x45bd92);
    } catch (_0x27de73) {
      _0x229d9f(_0x5e5827);
      if (_0x27de73 !== _0x27de73 + 0 && _0x27de73 !== "longjmp") {
        throw _0x27de73;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x15e5c9(_0x53bf35, _0x5d1fe0, _0x5c9552, _0x56b6e6, _0x579e1f, _0x50ad44, _0x392aab) {
    var _0x5978e0 = _0x50e49c();
    try {
      _0x5b9221(_0x53bf35, _0x5d1fe0, _0x5c9552, _0x56b6e6, _0x579e1f, _0x50ad44, _0x392aab);
    } catch (_0x59f306) {
      _0x229d9f(_0x5978e0);
      if (_0x59f306 !== _0x59f306 + 0 && _0x59f306 !== "longjmp") {
        throw _0x59f306;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x5df39c(_0x1623a5, _0x476314, _0x17c949, _0xfc3025, _0x359de6, _0x2966ce, _0x2109cb) {
    var _0x11cf80 = _0x50e49c();
    try {
      return _0x1aaaac(_0x1623a5, _0x476314, _0x17c949, _0xfc3025, _0x359de6, _0x2966ce, _0x2109cb);
    } catch (_0x2351f6) {
      _0x229d9f(_0x11cf80);
      if (_0x2351f6 !== _0x2351f6 + 0 && _0x2351f6 !== "longjmp") {
        throw _0x2351f6;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x34a578(_0x4b7337, _0x1f0387, _0x49aaea, _0x13e9ee, _0x5f2975, _0x371db5) {
    var _0x1a3f6e = _0x50e49c();
    try {
      _0x5e2051(_0x4b7337, _0x1f0387, _0x49aaea, _0x13e9ee, _0x5f2975, _0x371db5);
    } catch (_0x3e241f) {
      _0x229d9f(_0x1a3f6e);
      if (_0x3e241f !== _0x3e241f + 0 && _0x3e241f !== "longjmp") {
        throw _0x3e241f;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x302c32(_0x36caad, _0x163e28, _0x1a65fd, _0x57abdd, _0x509776, _0x45b9f2, _0x54c9d7, _0x475a98, _0x2bc6c5, _0x23cd5b, _0x3c2205) {
    var _0x527565 = _0x50e49c();
    try {
      return _0x13f9c2(_0x36caad, _0x163e28, _0x1a65fd, _0x57abdd, _0x509776, _0x45b9f2, _0x54c9d7, _0x475a98, _0x2bc6c5, _0x23cd5b, _0x3c2205);
    } catch (_0x5e4a89) {
      _0x229d9f(_0x527565);
      if (_0x5e4a89 !== _0x5e4a89 + 0 && _0x5e4a89 !== "longjmp") {
        throw _0x5e4a89;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x297bd5(_0x1d38ff, _0x5b14b5, _0x9acc07, _0x23ec74) {
    var _0xbb63b = _0x50e49c();
    try {
      return _0x5d4980(_0x1d38ff, _0x5b14b5, _0x9acc07, _0x23ec74);
    } catch (_0x1b631e) {
      _0x229d9f(_0xbb63b);
      if (_0x1b631e !== _0x1b631e + 0 && _0x1b631e !== "longjmp") {
        throw _0x1b631e;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x4a8f5f(_0x5e8c58, _0xb70d3d, _0x542d70, _0x3d6d04, _0x2c0d65, _0x42ed19) {
    var _0x5f692b = _0x50e49c();
    try {
      return _0x564654(_0x5e8c58, _0xb70d3d, _0x542d70, _0x3d6d04, _0x2c0d65, _0x42ed19);
    } catch (_0x3959e1) {
      _0x229d9f(_0x5f692b);
      if (_0x3959e1 !== _0x3959e1 + 0 && _0x3959e1 !== "longjmp") {
        throw _0x3959e1;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x67cc1d(_0x33b168, _0x45e745, _0x59af25, _0x1483f6, _0x191345, _0x5f5abc) {
    var _0x417961 = _0x50e49c();
    try {
      return _0x15e319(_0x33b168, _0x45e745, _0x59af25, _0x1483f6, _0x191345, _0x5f5abc);
    } catch (_0x4eb545) {
      _0x229d9f(_0x417961);
      if (_0x4eb545 !== _0x4eb545 + 0 && _0x4eb545 !== "longjmp") {
        throw _0x4eb545;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x3353d0(_0x432cea, _0xa030b4, _0x144a4e, _0x1b9496, _0x308867, _0x5c4f51) {
    var _0xc22762 = _0x50e49c();
    try {
      return _0x46997d(_0x432cea, _0xa030b4, _0x144a4e, _0x1b9496, _0x308867, _0x5c4f51);
    } catch (_0xc89cce) {
      _0x229d9f(_0xc22762);
      if (_0xc89cce !== _0xc89cce + 0 && _0xc89cce !== "longjmp") {
        throw _0xc89cce;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x24bbf0(_0x5b4365, _0x2029f1, _0x52f03f, _0x1eb31d, _0x45ed62) {
    var _0xc23484 = _0x50e49c();
    try {
      _0x6d97ad(_0x5b4365, _0x2029f1, _0x52f03f, _0x1eb31d, _0x45ed62);
    } catch (_0x317a2d) {
      _0x229d9f(_0xc23484);
      if (_0x317a2d !== _0x317a2d + 0 && _0x317a2d !== "longjmp") {
        throw _0x317a2d;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x3f3952(_0x13da22, _0x6a328, _0x3b8830, _0x405a58, _0x931db4, _0x5188b1) {
    var _0x68a5fb = _0x50e49c();
    try {
      _0x525f0c(_0x13da22, _0x6a328, _0x3b8830, _0x405a58, _0x931db4, _0x5188b1);
    } catch (_0x5ee39b) {
      _0x229d9f(_0x68a5fb);
      if (_0x5ee39b !== _0x5ee39b + 0 && _0x5ee39b !== "longjmp") {
        throw _0x5ee39b;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x4570a2(_0x3efe08, _0x1cf9f9, _0x3a19c2, _0x50e107, _0x33633e) {
    var _0x5ca0c6 = _0x50e49c();
    try {
      return _0x2e458a(_0x3efe08, _0x1cf9f9, _0x3a19c2, _0x50e107, _0x33633e);
    } catch (_0x34000c) {
      _0x229d9f(_0x5ca0c6);
      if (_0x34000c !== _0x34000c + 0 && _0x34000c !== "longjmp") {
        throw _0x34000c;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x15a686(_0x51f569, _0x401a6f, _0xb5c49c, _0x5e921f, _0x3943aa) {
    var _0x2ac52d = _0x50e49c();
    try {
      return _0x101ea6(_0x51f569, _0x401a6f, _0xb5c49c, _0x5e921f, _0x3943aa);
    } catch (_0x3aaf2b) {
      _0x229d9f(_0x2ac52d);
      if (_0x3aaf2b !== _0x3aaf2b + 0 && _0x3aaf2b !== "longjmp") {
        throw _0x3aaf2b;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x48a0bb(_0x2b620d, _0x5c81fb, _0x49b5e8, _0x245315, _0x22e531, _0xd3054, _0x14e17c) {
    var _0xea48ac = _0x50e49c();
    try {
      return _0x18077b(_0x2b620d, _0x5c81fb, _0x49b5e8, _0x245315, _0x22e531, _0xd3054, _0x14e17c);
    } catch (_0x5c8a43) {
      _0x229d9f(_0xea48ac);
      if (_0x5c8a43 !== _0x5c8a43 + 0 && _0x5c8a43 !== "longjmp") {
        throw _0x5c8a43;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x2668c7(_0xa2ee3e, _0x5c3ac9, _0xfc2982, _0x8c3165, _0x51dbee, _0xc7f922) {
    var _0x38fa16 = _0x50e49c();
    try {
      _0xf04575(_0xa2ee3e, _0x5c3ac9, _0xfc2982, _0x8c3165, _0x51dbee, _0xc7f922);
    } catch (_0x2e59ce) {
      _0x229d9f(_0x38fa16);
      if (_0x2e59ce !== _0x2e59ce + 0 && _0x2e59ce !== "longjmp") {
        throw _0x2e59ce;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x4e1cd7(_0xe1a1a5, _0x5db685, _0x5e27d9, _0x56ab73, _0x3d000a) {
    var _0xc8f847 = _0x50e49c();
    try {
      _0x176dfc(_0xe1a1a5, _0x5db685, _0x5e27d9, _0x56ab73, _0x3d000a);
    } catch (_0x28cb1a) {
      _0x229d9f(_0xc8f847);
      if (_0x28cb1a !== _0x28cb1a + 0 && _0x28cb1a !== "longjmp") {
        throw _0x28cb1a;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x4739d8(_0x2b5fb7, _0xabc26b, _0x5eb588, _0xe7dd35, _0x3dbc0a, _0x55b7bc) {
    var _0xd16ca6 = _0x50e49c();
    try {
      _0xa37eb(_0x2b5fb7, _0xabc26b, _0x5eb588, _0xe7dd35, _0x3dbc0a, _0x55b7bc);
    } catch (_0x1eb1bb) {
      _0x229d9f(_0xd16ca6);
      if (_0x1eb1bb !== _0x1eb1bb + 0 && _0x1eb1bb !== "longjmp") {
        throw _0x1eb1bb;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x5dcab7(_0x3de19f, _0x4050c6, _0x13e39a, _0x5219f2, _0xe16a71, _0x5ca6f6, _0x51a82c, _0xf10e02, _0x55c568) {
    var _0x465cf7 = _0x50e49c();
    try {
      _0x4186f1(_0x3de19f, _0x4050c6, _0x13e39a, _0x5219f2, _0xe16a71, _0x5ca6f6, _0x51a82c, _0xf10e02, _0x55c568);
    } catch (_0x1e4c86) {
      _0x229d9f(_0x465cf7);
      if (_0x1e4c86 !== _0x1e4c86 + 0 && _0x1e4c86 !== "longjmp") {
        throw _0x1e4c86;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x456975(_0x5c7666, _0x4904a0, _0x1f1c7a, _0x29104c, _0x79924b, _0x34050d, _0x5b3f0e, _0x5b897c) {
    var _0x2bf773 = _0x50e49c();
    try {
      _0x5d6fda(_0x5c7666, _0x4904a0, _0x1f1c7a, _0x29104c, _0x79924b, _0x34050d, _0x5b3f0e, _0x5b897c);
    } catch (_0x174892) {
      _0x229d9f(_0x2bf773);
      if (_0x174892 !== _0x174892 + 0 && _0x174892 !== "longjmp") {
        throw _0x174892;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x2da174(_0xbc096c, _0x21f2a3, _0x5d28de, _0x16daa0, _0x3cbaa4, _0x5b348a) {
    var _0x37c353 = _0x50e49c();
    try {
      return _0x51e397(_0xbc096c, _0x21f2a3, _0x5d28de, _0x16daa0, _0x3cbaa4, _0x5b348a);
    } catch (_0x14e64a) {
      _0x229d9f(_0x37c353);
      if (_0x14e64a !== _0x14e64a + 0 && _0x14e64a !== "longjmp") {
        throw _0x14e64a;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x732d2c(_0x16b1dd, _0x3221d9, _0x3ea42e, _0x525cf0) {
    var _0x1773e2 = _0x50e49c();
    try {
      return _0x1b661e(_0x16b1dd, _0x3221d9, _0x3ea42e, _0x525cf0);
    } catch (_0x573d44) {
      _0x229d9f(_0x1773e2);
      if (_0x573d44 !== _0x573d44 + 0 && _0x573d44 !== "longjmp") {
        throw _0x573d44;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x576ce5(_0x414212, _0x266632, _0x4291cd, _0x54149d, _0x23ef8d, _0x4a4dfa) {
    var _0x4c4e8c = _0x50e49c();
    try {
      return _0x22b301(_0x414212, _0x266632, _0x4291cd, _0x54149d, _0x23ef8d, _0x4a4dfa);
    } catch (_0x482a61) {
      _0x229d9f(_0x4c4e8c);
      if (_0x482a61 !== _0x482a61 + 0 && _0x482a61 !== "longjmp") {
        throw _0x482a61;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x2bda21(_0x337470, _0x384d5f, _0x5d81ae, _0xa3f7f8) {
    var _0x2c2a1c = _0x50e49c();
    try {
      return _0x194548(_0x337470, _0x384d5f, _0x5d81ae, _0xa3f7f8);
    } catch (_0x5be418) {
      _0x229d9f(_0x2c2a1c);
      if (_0x5be418 !== _0x5be418 + 0 && _0x5be418 !== "longjmp") {
        throw _0x5be418;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x31c92b(_0xe0462f, _0x43e5e2, _0x60fcef, _0x4dabfe, _0x3f6f07, _0x367aeb, _0xa1e549, _0x4f078a, _0x2461c4, _0x298003, _0x6db52c, _0x34526a, _0x2b7f14, _0x58e0c4, _0xcfe50b, _0x9ebeb3, _0x21c906) {
    var _0x1c7067 = _0x50e49c();
    try {
      _0x257b37(_0xe0462f, _0x43e5e2, _0x60fcef, _0x4dabfe, _0x3f6f07, _0x367aeb, _0xa1e549, _0x4f078a, _0x2461c4, _0x298003, _0x6db52c, _0x34526a, _0x2b7f14, _0x58e0c4, _0xcfe50b, _0x9ebeb3, _0x21c906);
    } catch (_0x538246) {
      _0x229d9f(_0x1c7067);
      if (_0x538246 !== _0x538246 + 0 && _0x538246 !== "longjmp") {
        throw _0x538246;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x536a91(_0x5c0ab6, _0xb382fb, _0x1bad68, _0x25aa97, _0x1a199d, _0x1b1907) {
    var _0x305437 = _0x50e49c();
    try {
      return _0x4c3121(_0x5c0ab6, _0xb382fb, _0x1bad68, _0x25aa97, _0x1a199d, _0x1b1907);
    } catch (_0x48cfa2) {
      _0x229d9f(_0x305437);
      if (_0x48cfa2 !== _0x48cfa2 + 0 && _0x48cfa2 !== "longjmp") {
        throw _0x48cfa2;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x345f78(_0xcde7db, _0x1f76a6, _0x4d8a79, _0x3862ed, _0x255ff7, _0x236275, _0x560a45) {
    var _0x1fd3a8 = _0x50e49c();
    try {
      return _0x1dfb25(_0xcde7db, _0x1f76a6, _0x4d8a79, _0x3862ed, _0x255ff7, _0x236275, _0x560a45);
    } catch (_0x3a1bb5) {
      _0x229d9f(_0x1fd3a8);
      if (_0x3a1bb5 !== _0x3a1bb5 + 0 && _0x3a1bb5 !== "longjmp") {
        throw _0x3a1bb5;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x313b3e(_0x20fc38, _0x10d3fc, _0x3e781d, _0x1340ff, _0x534a3a, _0x174542) {
    var _0x2b870c = _0x50e49c();
    try {
      return _0x54c5a1(_0x20fc38, _0x10d3fc, _0x3e781d, _0x1340ff, _0x534a3a, _0x174542);
    } catch (_0x5a1c68) {
      _0x229d9f(_0x2b870c);
      if (_0x5a1c68 !== _0x5a1c68 + 0 && _0x5a1c68 !== "longjmp") {
        throw _0x5a1c68;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x573947(_0x3fbced, _0x5b17ca, _0x3613de, _0xbc08ec, _0xff8b1f, _0x20eb89, _0x200b73, _0x24344b, _0x75f9ea, _0x39ec4d) {
    var _0xd52033 = _0x50e49c();
    try {
      return _0x51dc75(_0x3fbced, _0x5b17ca, _0x3613de, _0xbc08ec, _0xff8b1f, _0x20eb89, _0x200b73, _0x24344b, _0x75f9ea, _0x39ec4d);
    } catch (_0x4ad8c6) {
      _0x229d9f(_0xd52033);
      if (_0x4ad8c6 !== _0x4ad8c6 + 0 && _0x4ad8c6 !== "longjmp") {
        throw _0x4ad8c6;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x3b8271(_0x526bfc, _0x3f0817, _0x510387, _0x451720, _0x3fd13b, _0x3def43, _0x48f217, _0x52a020, _0x28515e, _0x3d49da, _0x218307, _0x1ccf03) {
    var _0x57136e = _0x50e49c();
    try {
      return _0x5e131d(_0x526bfc, _0x3f0817, _0x510387, _0x451720, _0x3fd13b, _0x3def43, _0x48f217, _0x52a020, _0x28515e, _0x3d49da, _0x218307, _0x1ccf03);
    } catch (_0x107c79) {
      _0x229d9f(_0x57136e);
      if (_0x107c79 !== _0x107c79 + 0 && _0x107c79 !== "longjmp") {
        throw _0x107c79;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x48ac9b(_0x173fe6, _0x5ef0b5, _0x28eef7, _0x5028c6, _0x399401, _0x10a2c9, _0x5767b7, _0x8ee9d3, _0x235e8d, _0x24b05b) {
    var _0x3ee089 = _0x50e49c();
    try {
      return _0x32d120(_0x173fe6, _0x5ef0b5, _0x28eef7, _0x5028c6, _0x399401, _0x10a2c9, _0x5767b7, _0x8ee9d3, _0x235e8d, _0x24b05b);
    } catch (_0x18fc97) {
      _0x229d9f(_0x3ee089);
      if (_0x18fc97 !== _0x18fc97 + 0 && _0x18fc97 !== "longjmp") {
        throw _0x18fc97;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x5b0b0a(_0xf8472d, _0x48b2f6, _0x132b7d, _0x19bdf1, _0x4f047d, _0x2d6a68, _0x4e7512, _0x50c49d, _0x49fff9, _0x2fb4bc, _0x2eb282, _0x45365e, _0x337684, _0x22a666) {
    var _0x49e62c = _0x50e49c();
    try {
      _0x22013b(_0xf8472d, _0x48b2f6, _0x132b7d, _0x19bdf1, _0x4f047d, _0x2d6a68, _0x4e7512, _0x50c49d, _0x49fff9, _0x2fb4bc, _0x2eb282, _0x45365e, _0x337684, _0x22a666);
    } catch (_0x52e085) {
      _0x229d9f(_0x49e62c);
      if (_0x52e085 !== _0x52e085 + 0 && _0x52e085 !== "longjmp") {
        throw _0x52e085;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x438413(_0x29eaca, _0x51f66a, _0x428dd4) {
    var _0x3728d8 = _0x50e49c();
    try {
      return _0x1d63be(_0x29eaca, _0x51f66a, _0x428dd4);
    } catch (_0x314678) {
      _0x229d9f(_0x3728d8);
      if (_0x314678 !== _0x314678 + 0 && _0x314678 !== "longjmp") {
        throw _0x314678;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x5c6c1f(_0x5908df, _0x376a91, _0x25956b, _0x45677b, _0x4fb6b7, _0x1c3cad, _0x1e68cb, _0x10188c, _0x7b4f2d) {
    var _0x3d37f9 = _0x50e49c();
    try {
      _0x4e6f22(_0x5908df, _0x376a91, _0x25956b, _0x45677b, _0x4fb6b7, _0x1c3cad, _0x1e68cb, _0x10188c, _0x7b4f2d);
    } catch (_0x10ceef) {
      _0x229d9f(_0x3d37f9);
      if (_0x10ceef !== _0x10ceef + 0 && _0x10ceef !== "longjmp") {
        throw _0x10ceef;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x2e0017(_0x11ae16, _0x5256e9, _0x3624c7, _0x499a4e, _0xbb391d, _0x5e7657, _0x3b69f6, _0x17e394, _0x4c7728) {
    var _0x11b570 = _0x50e49c();
    try {
      _0x1ca453(_0x11ae16, _0x5256e9, _0x3624c7, _0x499a4e, _0xbb391d, _0x5e7657, _0x3b69f6, _0x17e394, _0x4c7728);
    } catch (_0x990459) {
      _0x229d9f(_0x11b570);
      if (_0x990459 !== _0x990459 + 0 && _0x990459 !== "longjmp") {
        throw _0x990459;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x3907a5(_0x45781f, _0x5c0493, _0x47aed7, _0x86c6, _0x12bd4d, _0x1edea8, _0x3a3764, _0xfcb65e, _0x3857db) {
    var _0xf2a4ed = _0x50e49c();
    try {
      _0x1cb328(_0x45781f, _0x5c0493, _0x47aed7, _0x86c6, _0x12bd4d, _0x1edea8, _0x3a3764, _0xfcb65e, _0x3857db);
    } catch (_0x2d9f9) {
      _0x229d9f(_0xf2a4ed);
      if (_0x2d9f9 !== _0x2d9f9 + 0 && _0x2d9f9 !== "longjmp") {
        throw _0x2d9f9;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x36553f(_0x192553, _0x4be71f, _0x3145be, _0x36dad0, _0x4d4e63, _0x209208, _0x547531, _0xe93232, _0x197e35, _0x43df56, _0x158c8b) {
    var _0x18d278 = _0x50e49c();
    try {
      _0x35739a(_0x192553, _0x4be71f, _0x3145be, _0x36dad0, _0x4d4e63, _0x209208, _0x547531, _0xe93232, _0x197e35, _0x43df56, _0x158c8b);
    } catch (_0x51b23c) {
      _0x229d9f(_0x18d278);
      if (_0x51b23c !== _0x51b23c + 0 && _0x51b23c !== "longjmp") {
        throw _0x51b23c;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x117a7e(_0x2c66b1, _0x4b9a96, _0x4c725d, _0x358b7b) {
    var _0x2cd0ca = _0x50e49c();
    try {
      return _0x384752(_0x2c66b1, _0x4b9a96, _0x4c725d, _0x358b7b);
    } catch (_0x54298b) {
      _0x229d9f(_0x2cd0ca);
      if (_0x54298b !== _0x54298b + 0 && _0x54298b !== "longjmp") {
        throw _0x54298b;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x28d5cc(_0x48494b, _0x19ba7b, _0x1ed868, _0x46e671, _0x1ac7f2, _0x334f49, _0x146649, _0x402302) {
    var _0x5d4b68 = _0x50e49c();
    try {
      return _0x3124e1(_0x48494b, _0x19ba7b, _0x1ed868, _0x46e671, _0x1ac7f2, _0x334f49, _0x146649, _0x402302);
    } catch (_0x548ea5) {
      _0x229d9f(_0x5d4b68);
      if (_0x548ea5 !== _0x548ea5 + 0 && _0x548ea5 !== "longjmp") {
        throw _0x548ea5;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x292f29(_0x1a3e88, _0x3c41a0, _0x4ff6bb, _0x1a8ac2, _0x548b2c, _0x1f62f5, _0x2cdabf) {
    var _0x1d6593 = _0x50e49c();
    try {
      _0x8fdb9a(_0x1a3e88, _0x3c41a0, _0x4ff6bb, _0x1a8ac2, _0x548b2c, _0x1f62f5, _0x2cdabf);
    } catch (_0x2f2072) {
      _0x229d9f(_0x1d6593);
      if (_0x2f2072 !== _0x2f2072 + 0 && _0x2f2072 !== "longjmp") {
        throw _0x2f2072;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x423461(_0x476b78, _0x3affdb, _0x1dcfd3, _0x5a60cd, _0x1bfdd7, _0x434b8, _0x537010, _0x5d4c0c, _0x53e99a, _0x42f694) {
    var _0x4fb75c = _0x50e49c();
    try {
      _0x591f54(_0x476b78, _0x3affdb, _0x1dcfd3, _0x5a60cd, _0x1bfdd7, _0x434b8, _0x537010, _0x5d4c0c, _0x53e99a, _0x42f694);
    } catch (_0x3bd56c) {
      _0x229d9f(_0x4fb75c);
      if (_0x3bd56c !== _0x3bd56c + 0 && _0x3bd56c !== "longjmp") {
        throw _0x3bd56c;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x266496(_0x267528, _0x2f3430, _0x210046, _0x406c86, _0x54325c, _0x888c4e, _0x302a82, _0x3fb56c, _0x815ea7, _0x23a90c, _0x5cb62b, _0x8faf8e) {
    var _0x4913ce = _0x50e49c();
    try {
      return _0x54068f(_0x267528, _0x2f3430, _0x210046, _0x406c86, _0x54325c, _0x888c4e, _0x302a82, _0x3fb56c, _0x815ea7, _0x23a90c, _0x5cb62b, _0x8faf8e);
    } catch (_0x470433) {
      _0x229d9f(_0x4913ce);
      if (_0x470433 !== _0x470433 + 0 && _0x470433 !== "longjmp") {
        throw _0x470433;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x146eb0(_0x370517, _0x264c61, _0x4cbd0b, _0x2ee560) {
    var _0x64b65f = _0x50e49c();
    try {
      _0x5f5235(_0x370517, _0x264c61, _0x4cbd0b, _0x2ee560);
    } catch (_0x50ea12) {
      _0x229d9f(_0x64b65f);
      if (_0x50ea12 !== _0x50ea12 + 0 && _0x50ea12 !== "longjmp") {
        throw _0x50ea12;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x1c9e33(_0x51ca65, _0xa83b25, _0x1ea021, _0x488aed, _0x3a3e02, _0xed00bf, _0x54c303, _0x4eefef) {
    var _0x5c5c22 = _0x50e49c();
    try {
      _0x5ab95f(_0x51ca65, _0xa83b25, _0x1ea021, _0x488aed, _0x3a3e02, _0xed00bf, _0x54c303, _0x4eefef);
    } catch (_0x187308) {
      _0x229d9f(_0x5c5c22);
      if (_0x187308 !== _0x187308 + 0 && _0x187308 !== "longjmp") {
        throw _0x187308;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x3e666b(_0x4e8075, _0x4b846b, _0x20561f, _0x3471bb, _0x2e0957, _0x5e6049, _0x3fe736) {
    var _0x1fc0b2 = _0x50e49c();
    try {
      _0x215401(_0x4e8075, _0x4b846b, _0x20561f, _0x3471bb, _0x2e0957, _0x5e6049, _0x3fe736);
    } catch (_0x116535) {
      _0x229d9f(_0x1fc0b2);
      if (_0x116535 !== _0x116535 + 0 && _0x116535 !== "longjmp") {
        throw _0x116535;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x4fc8b4(_0x4e142e, _0x16bb8f, _0x3fb2a1, _0x2f0f54, _0x4bc93f) {
    var _0x342d55 = _0x50e49c();
    try {
      return _0x1b786b(_0x4e142e, _0x16bb8f, _0x3fb2a1, _0x2f0f54, _0x4bc93f);
    } catch (_0x3a3e77) {
      _0x229d9f(_0x342d55);
      if (_0x3a3e77 !== _0x3a3e77 + 0 && _0x3a3e77 !== "longjmp") {
        throw _0x3a3e77;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x50e64e(_0x3eaa39, _0x561048, _0xc5933a, _0x22b38f, _0xc3bb60, _0x122cdf, _0x56e350, _0xbee045) {
    var _0x9207ce = _0x50e49c();
    try {
      _0x3d757d(_0x3eaa39, _0x561048, _0xc5933a, _0x22b38f, _0xc3bb60, _0x122cdf, _0x56e350, _0xbee045);
    } catch (_0x3797ee) {
      _0x229d9f(_0x9207ce);
      if (_0x3797ee !== _0x3797ee + 0 && _0x3797ee !== "longjmp") {
        throw _0x3797ee;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x1ba703(_0x48db47, _0x4779cb, _0x202f85, _0x3fe8f9, _0x4cfe7e, _0x11d804, _0x40519d) {
    var _0x56b06a = _0x50e49c();
    try {
      return _0x5b9fb2(_0x48db47, _0x4779cb, _0x202f85, _0x3fe8f9, _0x4cfe7e, _0x11d804, _0x40519d);
    } catch (_0x1129a3) {
      _0x229d9f(_0x56b06a);
      if (_0x1129a3 !== _0x1129a3 + 0 && _0x1129a3 !== "longjmp") {
        throw _0x1129a3;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x229586(_0x3124b9, _0x21da13, _0x4a00d8, _0x3d2dd0) {
    var _0x449cfe = _0x50e49c();
    try {
      return _0x49c7ef(_0x3124b9, _0x21da13, _0x4a00d8, _0x3d2dd0);
    } catch (_0x314990) {
      _0x229d9f(_0x449cfe);
      if (_0x314990 !== _0x314990 + 0 && _0x314990 !== "longjmp") {
        throw _0x314990;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x5a9e3e(_0x1e0aec, _0x1fded5, _0x310cda, _0x1024b3, _0x4de9e9, _0x40fda1, _0x45b250) {
    var _0x36bff8 = _0x50e49c();
    try {
      return _0x3c6b56(_0x1e0aec, _0x1fded5, _0x310cda, _0x1024b3, _0x4de9e9, _0x40fda1, _0x45b250);
    } catch (_0x540fac) {
      _0x229d9f(_0x36bff8);
      if (_0x540fac !== _0x540fac + 0 && _0x540fac !== "longjmp") {
        throw _0x540fac;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x5887b4(_0x1240c1, _0x24a0df, _0x2eb197, _0x3c9a14, _0x3650a5, _0xd6ec41, _0x32b32f, _0x58d3d6, _0x16a26c, _0x49d95e, _0x1f636d) {
    var _0x473902 = _0x50e49c();
    try {
      _0x998347(_0x1240c1, _0x24a0df, _0x2eb197, _0x3c9a14, _0x3650a5, _0xd6ec41, _0x32b32f, _0x58d3d6, _0x16a26c, _0x49d95e, _0x1f636d);
    } catch (_0xb864d8) {
      _0x229d9f(_0x473902);
      if (_0xb864d8 !== _0xb864d8 + 0 && _0xb864d8 !== "longjmp") {
        throw _0xb864d8;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x11dc40(_0x208669, _0x195455, _0x1e6cbf, _0x550297, _0x24e6dd, _0x2e8513, _0x523797, _0x338873) {
    var _0x17f911 = _0x50e49c();
    try {
      _0x49273d(_0x208669, _0x195455, _0x1e6cbf, _0x550297, _0x24e6dd, _0x2e8513, _0x523797, _0x338873);
    } catch (_0x18a72f) {
      _0x229d9f(_0x17f911);
      if (_0x18a72f !== _0x18a72f + 0 && _0x18a72f !== "longjmp") {
        throw _0x18a72f;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x2d23f9(_0x3ca5aa, _0x4f6c59, _0x1834b3, _0x38fe4f, _0x1e9b3a, _0x4d8a95, _0x53dd1d, _0x521138, _0x830b6, _0x4ff88d, _0x3c6dba) {
    var _0x1b7eec = _0x50e49c();
    try {
      _0x27f775(_0x3ca5aa, _0x4f6c59, _0x1834b3, _0x38fe4f, _0x1e9b3a, _0x4d8a95, _0x53dd1d, _0x521138, _0x830b6, _0x4ff88d, _0x3c6dba);
    } catch (_0x4746c4) {
      _0x229d9f(_0x1b7eec);
      if (_0x4746c4 !== _0x4746c4 + 0 && _0x4746c4 !== "longjmp") {
        throw _0x4746c4;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x2b4c52(_0x4f2b06, _0x4efce3, _0x5aad7b, _0x17885d, _0x1ceb66, _0x192124) {
    var _0x4707f3 = _0x50e49c();
    try {
      return _0x5877a3(_0x4f2b06, _0x4efce3, _0x5aad7b, _0x17885d, _0x1ceb66, _0x192124);
    } catch (_0x12e270) {
      _0x229d9f(_0x4707f3);
      if (_0x12e270 !== _0x12e270 + 0 && _0x12e270 !== "longjmp") {
        throw _0x12e270;
      }
      _0x4a7cd0(1, 0);
    }
  }
  function _0x409e47(_0x591369, _0x557f45, _0x55c788, _0x14cbf8, _0x294286, _0x59770d) {
    var _0x267c0d = _0x50e49c();
    try {
      return _0x22b504(_0x591369, _0x557f45, _0x55c788, _0x14cbf8, _0x294286, _0x59770d);
    } catch (_0xfe2d10) {
      _0x229d9f(_0x267c0d);
      if (_0xfe2d10 !== _0xfe2d10 + 0 && _0xfe2d10 !== "longjmp") {
        throw _0xfe2d10;
      }
      _0x4a7cd0(1, 0);
    }
  }
  _0x4c150b.ccall = _0x28e67b;
  _0x4c150b.cwrap = _0x336b4f;
  _0x4c150b.stackTrace = _0x1711d5;
  _0x4c150b.addRunDependency = _0x7a57e5;
  _0x4c150b.removeRunDependency = _0x4e20eb;
  _0x4c150b.FS_createPath = _0x31cd57.createPath;
  _0x4c150b.FS_createDataFile = _0x31cd57.createDataFile;
  _0x4c150b.stackTrace = _0x1711d5;
  var _0x5ab711;
  function _0x4240aa(_0x4a7527) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x4a7527 + ")";
    this.status = _0x4a7527;
  }
  var _0x23a6d7 = false;
  _0x1e57c9 = function _0x4423ed() {
    if (!_0x5ab711) {
      _0x22f9f0();
    }
    if (!_0x5ab711) {
      _0x1e57c9 = _0x4423ed;
    }
  };
  function _0x4b08b8(_0x5c3cbf) {
    var _0x4855f2 = _0x4c150b._main;
    _0x5c3cbf = _0x5c3cbf || [];
    var _0x1ee611 = _0x5c3cbf.length + 1;
    var _0x485ab3 = _0x932d25((_0x1ee611 + 1) * 4);
    _0x2beff6[_0x485ab3 >> 2] = _0x6beff7(_0x30671f);
    for (var _0x39e2a4 = 1; _0x39e2a4 < _0x1ee611; _0x39e2a4++) {
      _0x2beff6[(_0x485ab3 >> 2) + _0x39e2a4] = _0x6beff7(_0x5c3cbf[_0x39e2a4 - 1]);
    }
    _0x2beff6[(_0x485ab3 >> 2) + _0x1ee611] = 0;
    try {
      var _0x5d2a47 = _0x4855f2(_0x1ee611, _0x485ab3);
      _0x2e7a2c(_0x5d2a47, true);
    } catch (_0x49b89c) {
      if (_0x49b89c instanceof _0x4240aa) {
        return;
      } else if (_0x49b89c == "unwind") {
        return;
      } else {
        var _0x4b4dcd = _0x49b89c;
        if (_0x49b89c && typeof _0x49b89c === "object" && _0x49b89c.stack) {
          _0x4b4dcd = [_0x49b89c, _0x49b89c.stack];
        }
        _0x5761f3("exception thrown: " + _0x4b4dcd);
        _0x511113(1, _0x49b89c);
      }
    } finally {
      _0x23a6d7 = true;
    }
  }
  function _0x22f9f0(_0x1e81a0) {
    _0x1e81a0 = _0x1e81a0 || _0x49dac4;
    if (_0x17db82 > 0) {
      return;
    }
    _0x1a83d5();
    if (_0x17db82 > 0) {
      return;
    }
    function _0x13adfb() {
      if (_0x5ab711) {
        return;
      }
      _0x5ab711 = true;
      _0x4c150b.calledRun = true;
      if (_0x40dc51) {
        return;
      }
      _0x17c50f();
      _0x52866d();
      if (_0x4c150b.onRuntimeInitialized) {
        _0x4c150b.onRuntimeInitialized();
      }
      if (_0x2f402e) {
        _0x4b08b8(_0x1e81a0);
      }
      _0x243575();
    }
    if (_0x4c150b.setStatus) {
      _0x4c150b.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0x4c150b.setStatus("");
        }, 1);
        _0x13adfb();
      }, 1);
    } else {
      _0x13adfb();
    }
  }
  _0x4c150b.run = _0x22f9f0;
  function _0x2e7a2c(_0x5a24cf, _0x2655b8) {
    _0x104575 = _0x5a24cf;
    if (_0x2655b8 && _0x410db3() && _0x5a24cf === 0) {
      return;
    }
    if (_0x410db3()) {} else {
      _0x1520b7();
      if (_0x4c150b.onExit) {
        _0x4c150b.onExit(_0x5a24cf);
      }
      _0x40dc51 = true;
    }
    _0x511113(_0x5a24cf, new _0x4240aa(_0x5a24cf));
  }
  if (_0x4c150b.preInit) {
    if (typeof _0x4c150b.preInit == "function") {
      _0x4c150b.preInit = [_0x4c150b.preInit];
    }
    while (_0x4c150b.preInit.length > 0) {
      _0x4c150b.preInit.pop()();
    }
  }
  var _0x2f402e = true;
  if (_0x4c150b.noInitialRun) {
    _0x2f402e = false;
  }
  _0x22f9f0();
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
function gmdebugtime(_0x26e793) {
  console.log("_TIME_" + _0x26e793 + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x2bb2ac) {
  console.log(_0x2bb2ac);
}
function gmEvent(_0x117565, _0x4f6f1) {
  loadGMData(_0x117565, _0x4f6f1);
}
function gmStartGame(_0x1b8d26) {
  _0x1b8d26();
}
function gmStartAds(_0x718cfa) {
  _0x718cfa();
}
let fireFPS = 0;
async function loadGMData(_0x2a41af, _0x3a4b0a) {
  try {
    if (!config.buildAPI) {
      return;
    }
    if (!config.eventLog && _0x2a41af != "document-ready" && _0x2a41af != "start-game" && _0x2a41af != "unload-game") {
      return;
    }
    if (_0x2a41af == "fps") {
      try {
        let _0xbdb051 = _0x3a4b0a.split("|");
        if (_0xbdb051.length >= 2) {
          firebaseLogEventParameter("timecounter", _0xbdb051[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0xbdb051[1]);
          }
        }
      } catch (_0x4c710a) {
        console.log("Error extracting time from abc:", _0x4c710a.message);
      }
    }
    let _0x5ec208 = "";
    if (_0x3a4b0a) {
      _0x5ec208 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x3a4b0a));
    }
    _0x5ec208 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x5ec208 += "&gid=" + config.gameId;
    if (_0x2a41af == "ban-game" || _0x2a41af == "document-ready" || _0x2a41af == "start-game") {
      _0x5ec208 += "&wtop=" + "escaperoad2d.io";
      _0x5ec208 += "&hn=" + "https://games.1games.io";
      _0x5ec208 += "&referrer=" + config.referrer;
    }
    let _0x1bde57 = "&data=" + btoa(_0x5ec208);
    let _0x544dc3 = config.buildAPI + "?event=" + _0x2a41af + _0x1bde57;
    let _0x4a4cf3 = new XMLHttpRequest();
    _0x4a4cf3.open("GET", _0x544dc3);
    _0x4a4cf3.onreadystatechange = function () {
      if (_0x4a4cf3.readyState !== 4) {
        return;
      }
      if (_0x4a4cf3.status === 200) {
        console.log(_0x4a4cf3.responseText);
      } else {
        console.log("HTTP error", _0x4a4cf3.status, _0x4a4cf3.statusText);
      }
    };
    _0x4a4cf3.send();
  } catch (_0xcef369) {}
}
function xorEncryptMsg(_0xb34ac8) {
  let _0x120734 = "gmdata@&!message@!3!@";
  let _0x189abf = "";
  for (let _0x418221 = 0; _0x418221 < _0xb34ac8.length; _0x418221++) {
    const _0x29dce6 = _0xb34ac8.charCodeAt(_0x418221) ^ _0x120734.charCodeAt(_0x418221 % _0x120734.length);
    _0x189abf += String.fromCharCode(_0x29dce6);
  }
  return btoa(_0x189abf);
}
function check_event_log() {
  const _0x1d8534 = window.location.search;
  const _0x49c019 = new URLSearchParams(_0x1d8534);
  if (_0x49c019.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x43c1d2) {
  try {
    const _0x18af3e = eval(_0x43c1d2);
    gmdebug("Result:", _0x18af3e);
    return _0x18af3e;
  } catch (_0x511d7) {
    gmdebug("Error executing code:", _0x511d7);
  }
}
window.addEventListener("beforeunload", function (_0x28c914) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x127d5d = "data@&@#$@#^FFgdfg!1estimate";
      let _0x481d60 = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x5d33ea = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x3726df = _0x481d60;
      let _0x41e08b = "";
      for (let _0x190165 = 0; _0x190165 < _0x5d33ea.length; _0x190165++) {
        const _0x3b1c03 = _0x5d33ea.charCodeAt(_0x190165) ^ _0x127d5d.charCodeAt(_0x190165 % _0x127d5d.length);
        _0x41e08b += String.fromCharCode(_0x3b1c03);
      }
      sourceHtml = _0x41e08b;
      let _0x27cd26 = document.getElementById("gmsoft-jssdk");
      if (!_0x27cd26 || _0x27cd26.src != sourceHtml) {
      }
    } catch (_0x14229a) {
    }
  }, 3000);
}
function check_enable_debug() {
  try {
    const _0x50c1e2 = window.location.search;
    const _0x4e474b = new URLSearchParams(_0x50c1e2);
    if (_0x4e474b.has("d")) {} else {
      console.error = function () {};
      console.warn = function () {};
      console.log = function () {};
    }
  } catch (_0x2ec372) {}
}