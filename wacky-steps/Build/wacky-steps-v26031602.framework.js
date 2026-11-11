function unityFramework(_0x4141f5) {
  var _0x4141f5 = typeof _0x4141f5 !== "undefined" ? _0x4141f5 : {};
  _0x4141f5.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x534cc1(_0x57547d, _0x2cb972) {
    _0x728a21("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0xa8c6ca(_0x57547d, _0x2cb972);
  }
  _0x4141f5.Pointer_stringify = _0x534cc1;
  var _0x479996 = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0xd95d4f = _0x48b8a1().match(new RegExp(_0x479996));
  if (_0xd95d4f) {
    _0x4141f5.stackTraceRegExp = new RegExp(_0x479996.replace("([^\\n]+)", _0xd95d4f[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  function _0x4ec462(_0xa36637) {
    if (_0xba6125) {
      return;
    }
    _0xba6125 = true;
    _0x213183 = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0xa36637 !== undefined) {
      _0x576054(_0xa36637);
      _0x5c756b(_0xa36637);
      _0xa36637 = JSON.stringify(_0xa36637);
    } else {
      _0xa36637 = "";
    }
    var _0x146c35 = "abort(" + _0xa36637 + ") at " + _0x34b948();
    if (_0x4141f5.abortHandler && _0x4141f5.abortHandler(_0x146c35)) {
      return;
    }
    throw _0x146c35;
  }
  _0x4141f5.SetFullscreen = function (_0x373203) {
    if (typeof _0x17cc09 === "undefined" || !_0x17cc09) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x2b5eda === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x5da313 = _0x2b5eda.canPerformEventHandlerRequests;
      _0x2b5eda.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0x4141f5.ccall("SetFullscreen", null, ["number"], [_0x373203]);
      _0x2b5eda.canPerformEventHandlerRequests = _0x5da313;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0x4141f5.preRun.push(function () {
      var _0x1ae7e1 = _0x4141f5.unityFileSystemInit || function () {
        _0xcb2023.mkdir("/idbfs");
        _0xcb2023.mount(_0x19020d, {}, "/idbfs");
        _0x4141f5.addRunDependency("JS_FileSystem_Mount");
        _0xcb2023.syncfs(true, function (_0x243e99) {
          if (_0x243e99) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0x4141f5.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x1ae7e1();
    });
  }
  var _0x153de2 = [];
  var _0x3af214 = false;
  var _0x1811bc;
  var _0x4fd325 = null;
  function _0x32cdfb(_0xee8860) {
    var _0xba300f = Object.keys(_0x153de2);
    for (var _0x40b021 = 0; _0x40b021 < _0xba300f.length; ++_0x40b021) {
      var _0x1587e4 = _0x153de2[_0xba300f[_0x40b021]];
      if (_0x1587e4.deviceId && _0x1587e4.deviceId == _0xee8860.deviceId) {
        return _0x1587e4;
      }
    }
    for (var _0x40b021 = 0; _0x40b021 < _0xba300f.length; ++_0x40b021) {
      var _0x1587e4 = _0x153de2[_0xba300f[_0x40b021]];
      if (_0x1587e4 == _0xee8860) {
        return _0x1587e4;
      }
    }
    for (var _0x40b021 = 0; _0x40b021 < _0xba300f.length; ++_0x40b021) {
      var _0x1587e4 = _0x153de2[_0xba300f[_0x40b021]];
      if (_0x1587e4.label && _0x1587e4.label == _0xee8860.label) {
        return _0x1587e4;
      }
    }
    for (var _0x40b021 = 0; _0x40b021 < _0xba300f.length; ++_0x40b021) {
      var _0x1587e4 = _0x153de2[_0xba300f[_0x40b021]];
      if (_0x1587e4.groupId && _0x1587e4.kind && _0x1587e4.groupId == _0xee8860.groupId && _0x1587e4.kind == _0xee8860.kind) {
        return _0x1587e4;
      }
    }
  }
  function _0x467f86() {
    for (var _0x1c46b2 = 0;; ++_0x1c46b2) {
      if (!_0x153de2[_0x1c46b2]) {
        return _0x1c46b2;
      }
    }
  }
  function _0x255c63(_0x247cc6) {
    _0x1811bc();
    _0x153de2 = [];
    var _0x331999 = {};
    var _0x149a4c = [];
    _0x247cc6.forEach(function (_0x4b8bb7) {
      if (_0x4b8bb7.kind === "videoinput") {
        var _0x192dca = _0x32cdfb(_0x4b8bb7);
        if (_0x192dca) {
          _0x331999[_0x192dca.id] = _0x192dca;
        } else {
          _0x149a4c.push(_0x4b8bb7);
        }
      }
    });
    _0x153de2 = _0x331999;
    _0x149a4c.forEach(function (_0x429fc7) {
      if (!_0x429fc7.id) {
        _0x429fc7.id = _0x467f86();
        _0x429fc7.name = _0x429fc7.label || "Video input #" + (_0x429fc7.id + 1);
        _0x429fc7.isFrontFacing = _0x429fc7.name.toLowerCase().includes("front") || !_0x429fc7.name.toLowerCase().includes("front") && !_0x429fc7.name.toLowerCase().includes("back");
        _0x153de2[_0x429fc7.id] = _0x429fc7;
      }
    });
  }
  function _0x3bd487() {
    if (!_0x153de2) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x49fcd5) {
      _0x255c63(_0x49fcd5);
      _0x3af214 = true;
    }).catch(function (_0x22fe67) {
      console.warn("Unable to enumerate media devices: " + _0x22fe67 + "\nWebcams will not be available.");
      _0x4692b8();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x3bd487, 60000);
      _0x728a21("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0x4692b8() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x3bd487);
    }
    _0x153de2 = null;
  }
  _0x4141f5.disableAccessToMediaDevices = _0x4692b8;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0x4692b8();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0x2e72ba("enumerateMediaDevices");
        _0x1811bc = function () {
          if (_0x4fd325 !== null) {
            clearTimeout(_0x4fd325);
          }
          _0x97cacc("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x1811bc = function () {};
        };
        _0x3bd487();
        _0x4fd325 = setTimeout(_0x1811bc, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x3bd487);
      } catch (_0x4598c1) {
        console.warn("Unable to enumerate media devices: " + _0x4598c1);
        _0x4692b8();
      }
    }, 0);
  }
  function _0x28e651(_0x20975d, _0x1f467c, _0x4e0683) {
    var _0x4c5068 = _0x5538e7(_0x1f467c);
    var _0x4e5a2f = _0x5538e7(_0x20975d);
    var _0x25bde3 = 0;
    try {
      if (_0x4e0683 === undefined) {
        _0x40617a(_0x4e5a2f, _0x4c5068);
      } else if (typeof _0x4e0683 === "string") {
        _0x25bde3 = _0x5538e7(_0x4e0683);
        _0x3fe313(_0x4e5a2f, _0x4c5068, _0x25bde3);
      } else if (typeof _0x4e0683 === "number") {
        _0x5afa49(_0x4e5a2f, _0x4c5068, _0x4e0683);
      } else {
        throw "" + _0x4e0683 + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0x59ed75(_0x25bde3);
      _0x59ed75(_0x4e5a2f);
      _0x59ed75(_0x4c5068);
    }
  }
  _0x4141f5.SendMessage = _0x28e651;
  var _0x324731 = {};
  var _0x411daa;
  for (_0x411daa in _0x4141f5) {
    if (_0x4141f5.hasOwnProperty(_0x411daa)) {
      _0x324731[_0x411daa] = _0x4141f5[_0x411daa];
    }
  }
  var _0x54fc66 = [];
  var _0x4070b4 = "./this.program";
  function _0x467c5d(_0x4baf34, _0x53638b) {
    throw _0x53638b;
  }
  var _0x4109f2 = false;
  var _0x8e8b07 = false;
  var _0x54f4b5 = false;
  var _0x3659af = false;
  _0x4109f2 = typeof window === "object";
  _0x8e8b07 = typeof importScripts === "function";
  _0x54f4b5 = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0x3659af = !_0x4109f2 && !_0x54f4b5 && !_0x8e8b07;
  var _0x5a0486 = "";
  function _0x5e8737(_0x2d707f) {
    if (_0x4141f5.locateFile) {
      return _0x4141f5.locateFile(_0x2d707f, _0x5a0486);
    }
    return _0x5a0486 + _0x2d707f;
  }
  var _0xc2cb8b;
  var _0x48b608;
  var _0x23e4e3;
  var _0x15dccd;
  var _0x7dfd36;
  var _0x17364d;
  if (_0x54f4b5) {
    if (_0x8e8b07) {
      _0x5a0486 = require("path").dirname(_0x5a0486) + "/";
    } else {
      _0x5a0486 = __dirname + "/";
    }
    _0xc2cb8b = function _0x1c26e2(_0x59e815, _0x3d7549) {
      if (!_0x7dfd36) {
        _0x7dfd36 = require("fs");
      }
      if (!_0x17364d) {
        _0x17364d = require("path");
      }
      _0x59e815 = _0x17364d.normalize(_0x59e815);
      return _0x7dfd36.readFileSync(_0x59e815, _0x3d7549 ? null : "utf8");
    };
    _0x23e4e3 = function _0xbc4c99(_0x4048dc) {
      var _0x509ba1 = _0xc2cb8b(_0x4048dc, true);
      if (!_0x509ba1.buffer) {
        _0x509ba1 = new Uint8Array(_0x509ba1);
      }
      _0x15301d(_0x509ba1.buffer);
      return _0x509ba1;
    };
    if (process.argv.length > 1) {
      _0x4070b4 = process.argv[1].replace(/\\/g, "/");
    }
    _0x54fc66 = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0x4141f5;
    }
    process.on("uncaughtException", function (_0x4a4b49) {
      if (!(_0x4a4b49 instanceof _0x425896)) {
        throw _0x4a4b49;
      }
    });
    process.on("unhandledRejection", _0x4ec462);
    _0x467c5d = function (_0x4800e5) {
      process.exit(_0x4800e5);
    };
    _0x4141f5.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0x3659af) {
    if (typeof read != "undefined") {
      _0xc2cb8b = function _0x4e7bbc(_0x20bf20) {
        return read(_0x20bf20);
      };
    }
    _0x23e4e3 = function _0x10c050(_0x4364b7) {
      var _0x324522;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0x4364b7));
      }
      _0x324522 = read(_0x4364b7, "binary");
      _0x15301d(typeof _0x324522 === "object");
      return _0x324522;
    };
    if (typeof scriptArgs != "undefined") {
      _0x54fc66 = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x54fc66 = arguments;
    }
    if (typeof quit === "function") {
      _0x467c5d = function (_0x2f9708) {
        quit(_0x2f9708);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0x4109f2 || _0x8e8b07) {
    if (_0x8e8b07) {
      _0x5a0486 = "https://games.ofree.io/escape-road-3/game.html";
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x5a0486 = document.currentScript.src;
    }
    if (_0x5a0486.indexOf("blob:") !== 0) {
      _0x5a0486 = _0x5a0486.substr(0, _0x5a0486.lastIndexOf("/") + 1);
    } else {
      _0x5a0486 = "";
    }
    {
      _0xc2cb8b = function (_0x541e12) {
        var _0x4a70f4 = new XMLHttpRequest();
        _0x4a70f4.open("GET", _0x541e12, false);
        _0x4a70f4.send(null);
        return _0x4a70f4.responseText;
      };
      if (_0x8e8b07) {
        _0x23e4e3 = function (_0x5d0c73) {
          var _0xcd86da = new XMLHttpRequest();
          _0xcd86da.open("GET", _0x5d0c73, false);
          _0xcd86da.responseType = "arraybuffer";
          _0xcd86da.send(null);
          return new Uint8Array(_0xcd86da.response);
        };
      }
      _0x48b608 = function (_0x53d41e, _0x543057, _0x245bc2) {
        var _0x4b2bb7 = new XMLHttpRequest();
        _0x4b2bb7.open("GET", _0x53d41e, true);
        _0x4b2bb7.responseType = "arraybuffer";
        _0x4b2bb7.onload = function () {
          if (_0x4b2bb7.status == 200 || _0x4b2bb7.status == 0 && _0x4b2bb7.response) {
            _0x543057(_0x4b2bb7.response);
            return;
          }
          _0x245bc2();
        };
        _0x4b2bb7.onerror = _0x245bc2;
        _0x4b2bb7.send(null);
      };
    }
    _0x15dccd = function (_0x4e0cda) {
      document.title = _0x4e0cda;
    };
  } else {}
  var _0x576054 = _0x4141f5.print || console.log.bind(console);
  var _0x5c756b = _0x4141f5.printErr || console.warn.bind(console);
  for (_0x411daa in _0x324731) {
    if (_0x324731.hasOwnProperty(_0x411daa)) {
      _0x4141f5[_0x411daa] = _0x324731[_0x411daa];
    }
  }
  _0x324731 = null;
  if (_0x4141f5.arguments) {
    _0x54fc66 = _0x4141f5.arguments;
  }
  if (_0x4141f5.thisProgram) {
    _0x4070b4 = _0x4141f5.thisProgram;
  }
  if (_0x4141f5.quit) {
    _0x467c5d = _0x4141f5.quit;
  }
  var _0x38e49f = 16;
  function _0x3b2144(_0x20363b, _0x2fe2a3) {
    if (!_0x2fe2a3) {
      _0x2fe2a3 = _0x38e49f;
    }
    return Math.ceil(_0x20363b / _0x2fe2a3) * _0x2fe2a3;
  }
  function _0x728a21(_0x4ab6e5) {
    if (!_0x728a21.shown) {
      _0x728a21.shown = {};
    }
    if (!_0x728a21.shown[_0x4ab6e5]) {
      _0x728a21.shown[_0x4ab6e5] = 1;
      _0x5c756b(_0x4ab6e5);
    }
  }
  var _0xc06d9b = 0;
  function _0x182d97(_0xcc3f) {
    _0xc06d9b = _0xcc3f;
  }
  function _0x250035() {
    return _0xc06d9b;
  }
  var _0x10d1e2;
  if (_0x4141f5.wasmBinary) {
    _0x10d1e2 = _0x4141f5.wasmBinary;
  }
  var _0x1db6a4 = _0x4141f5.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0x4ec462("no native wasm support detected");
  }
  var _0x36963e;
  var _0xba6125 = false;
  var _0x213183;
  function _0x15301d(_0x38c689, _0x142edb) {
    if (!_0x38c689) {
      _0x4ec462("Assertion failed: " + _0x142edb);
    }
  }
  function _0x3a9640(_0x3657d0) {
    var _0x406f42 = _0x4141f5["_" + _0x3657d0];
    _0x15301d(_0x406f42, "Cannot call unknown function " + _0x3657d0 + ", make sure it is exported");
    return _0x406f42;
  }
  function _0x9002b8(_0xd90877, _0x2a3c37, _0xfbf2ae, _0x41ccd9, _0x143605) {
    var _0x4da6cc = {
      string: function (_0x507d14) {
        var _0x5b66ca = 0;
        if (_0x507d14 !== null && _0x507d14 !== undefined && _0x507d14 !== 0) {
          var _0x27b779 = (_0x507d14.length << 2) + 1;
          _0x5b66ca = _0x41cdff(_0x27b779);
          _0x3c7021(_0x507d14, _0x5b66ca, _0x27b779);
        }
        return _0x5b66ca;
      },
      array: function (_0x1b394b) {
        var _0x4e1c7e = _0x41cdff(_0x1b394b.length);
        _0x4fc45f(_0x1b394b, _0x4e1c7e);
        return _0x4e1c7e;
      }
    };
    function _0x1fe6bf(_0x2b9236) {
      if (_0x2a3c37 === "string") {
        return _0xa8c6ca(_0x2b9236);
      }
      if (_0x2a3c37 === "boolean") {
        return Boolean(_0x2b9236);
      }
      return _0x2b9236;
    }
    var _0x20a105 = _0x3a9640(_0xd90877);
    var _0xed53c = [];
    var _0xf34f1d = 0;
    if (_0x41ccd9) {
      for (var _0x500b25 = 0; _0x500b25 < _0x41ccd9.length; _0x500b25++) {
        var _0x4baab9 = _0x4da6cc[_0xfbf2ae[_0x500b25]];
        if (_0x4baab9) {
          if (_0xf34f1d === 0) {
            _0xf34f1d = _0x555fcf();
          }
          _0xed53c[_0x500b25] = _0x4baab9(_0x41ccd9[_0x500b25]);
        } else {
          _0xed53c[_0x500b25] = _0x41ccd9[_0x500b25];
        }
      }
    }
    var _0x314b40 = _0x20a105.apply(null, _0xed53c);
    _0x314b40 = _0x1fe6bf(_0x314b40);
    if (_0xf34f1d !== 0) {
      _0x346df4(_0xf34f1d);
    }
    return _0x314b40;
  }
  function _0x140bab(_0x55f0ab, _0x319ad8, _0x3a5874, _0x1747b3) {
    _0x3a5874 = _0x3a5874 || [];
    var _0x1ce3dc = _0x3a5874.every(function (_0x83b33) {
      return _0x83b33 === "number";
    });
    var _0x4bc00b = _0x319ad8 !== "string";
    if (_0x4bc00b && _0x1ce3dc && !_0x1747b3) {
      return _0x3a9640(_0x55f0ab);
    }
    return function () {
      return _0x9002b8(_0x55f0ab, _0x319ad8, _0x3a5874, arguments, _0x1747b3);
    };
  }
  var _0x1a801d = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x3f816a(_0x1a23fc, _0x92f7ee, _0x17cfe3) {
    var _0x48c287 = _0x92f7ee + _0x17cfe3;
    var _0x303d40 = _0x92f7ee;
    while (_0x1a23fc[_0x303d40] && !(_0x303d40 >= _0x48c287)) {
      ++_0x303d40;
    }
    if (_0x303d40 - _0x92f7ee > 16 && _0x1a23fc.subarray && _0x1a801d) {
      return _0x1a801d.decode(_0x1a23fc.subarray(_0x92f7ee, _0x303d40));
    } else {
      var _0x57fba4 = "";
      while (_0x92f7ee < _0x303d40) {
        var _0x5f3b6c = _0x1a23fc[_0x92f7ee++];
        if (!(_0x5f3b6c & 128)) {
          _0x57fba4 += String.fromCharCode(_0x5f3b6c);
          continue;
        }
        var _0xa790a5 = _0x1a23fc[_0x92f7ee++] & 63;
        if ((_0x5f3b6c & 224) == 192) {
          _0x57fba4 += String.fromCharCode((_0x5f3b6c & 31) << 6 | _0xa790a5);
          continue;
        }
        var _0xfe239 = _0x1a23fc[_0x92f7ee++] & 63;
        if ((_0x5f3b6c & 240) == 224) {
          _0x5f3b6c = (_0x5f3b6c & 15) << 12 | _0xa790a5 << 6 | _0xfe239;
        } else {
          _0x5f3b6c = (_0x5f3b6c & 7) << 18 | _0xa790a5 << 12 | _0xfe239 << 6 | _0x1a23fc[_0x92f7ee++] & 63;
        }
        if (_0x5f3b6c < 65536) {
          _0x57fba4 += String.fromCharCode(_0x5f3b6c);
        } else {
          var _0x1a83cd = _0x5f3b6c - 65536;
          _0x57fba4 += String.fromCharCode(_0x1a83cd >> 10 | 55296, _0x1a83cd & 1023 | 56320);
        }
      }
    }
    return _0x57fba4;
  }
  function _0xa8c6ca(_0x2e1ade, _0x26f0d3) {
    if (_0x2e1ade) {
      return _0x3f816a(_0x42b281, _0x2e1ade, _0x26f0d3);
    } else {
      return "";
    }
  }
  function _0x3e0117(_0x4457d8, _0x27321e, _0x232ade, _0x285e49) {
    if (!(_0x285e49 > 0)) {
      return 0;
    }
    var _0x47a629 = _0x232ade;
    var _0x4d8ea3 = _0x232ade + _0x285e49 - 1;
    for (var _0x4fca25 = 0; _0x4fca25 < _0x4457d8.length; ++_0x4fca25) {
      var _0x250c15 = _0x4457d8.charCodeAt(_0x4fca25);
      if (_0x250c15 >= 55296 && _0x250c15 <= 57343) {
        var _0x718f70 = _0x4457d8.charCodeAt(++_0x4fca25);
        _0x250c15 = 65536 + ((_0x250c15 & 1023) << 10) | _0x718f70 & 1023;
      }
      if (_0x250c15 <= 127) {
        if (_0x232ade >= _0x4d8ea3) {
          break;
        }
        _0x27321e[_0x232ade++] = _0x250c15;
      } else if (_0x250c15 <= 2047) {
        if (_0x232ade + 1 >= _0x4d8ea3) {
          break;
        }
        _0x27321e[_0x232ade++] = _0x250c15 >> 6 | 192;
        _0x27321e[_0x232ade++] = _0x250c15 & 63 | 128;
      } else if (_0x250c15 <= 65535) {
        if (_0x232ade + 2 >= _0x4d8ea3) {
          break;
        }
        _0x27321e[_0x232ade++] = _0x250c15 >> 12 | 224;
        _0x27321e[_0x232ade++] = _0x250c15 >> 6 & 63 | 128;
        _0x27321e[_0x232ade++] = _0x250c15 & 63 | 128;
      } else {
        if (_0x232ade + 3 >= _0x4d8ea3) {
          break;
        }
        _0x27321e[_0x232ade++] = _0x250c15 >> 18 | 240;
        _0x27321e[_0x232ade++] = _0x250c15 >> 12 & 63 | 128;
        _0x27321e[_0x232ade++] = _0x250c15 >> 6 & 63 | 128;
        _0x27321e[_0x232ade++] = _0x250c15 & 63 | 128;
      }
    }
    _0x27321e[_0x232ade] = 0;
    return _0x232ade - _0x47a629;
  }
  function _0x3c7021(_0xe87aec, _0x5da658, _0x3807a1) {
    return _0x3e0117(_0xe87aec, _0x42b281, _0x5da658, _0x3807a1);
  }
  function _0x4da9ba(_0x20de85) {
    var _0x50d0eb = 0;
    for (var _0x18fbc5 = 0; _0x18fbc5 < _0x20de85.length; ++_0x18fbc5) {
      var _0x394ae6 = _0x20de85.charCodeAt(_0x18fbc5);
      if (_0x394ae6 >= 55296 && _0x394ae6 <= 57343) {
        _0x394ae6 = 65536 + ((_0x394ae6 & 1023) << 10) | _0x20de85.charCodeAt(++_0x18fbc5) & 1023;
      }
      if (_0x394ae6 <= 127) {
        ++_0x50d0eb;
      } else if (_0x394ae6 <= 2047) {
        _0x50d0eb += 2;
      } else if (_0x394ae6 <= 65535) {
        _0x50d0eb += 3;
      } else {
        _0x50d0eb += 4;
      }
    }
    return _0x50d0eb;
  }
  function _0x58c32d(_0x32b3c1) {
    var _0x2bfe81 = _0x4da9ba(_0x32b3c1) + 1;
    var _0x446868 = _0x48c1ae(_0x2bfe81);
    if (_0x446868) {
      _0x3e0117(_0x32b3c1, _0x51d7cf, _0x446868, _0x2bfe81);
    }
    return _0x446868;
  }
  function _0x376d00(_0x14139c) {
    var _0x29b3ac = _0x4da9ba(_0x14139c) + 1;
    var _0x83768c = _0x41cdff(_0x29b3ac);
    _0x3e0117(_0x14139c, _0x51d7cf, _0x83768c, _0x29b3ac);
    return _0x83768c;
  }
  function _0x4fc45f(_0x5726e8, _0x1fcc08) {
    _0x51d7cf.set(_0x5726e8, _0x1fcc08);
  }
  function _0x401b12(_0x2ecb0b, _0x56db61, _0x2d0f30) {
    for (var _0xd88fa7 = 0; _0xd88fa7 < _0x2ecb0b.length; ++_0xd88fa7) {
      _0x51d7cf[_0x56db61++ >> 0] = _0x2ecb0b.charCodeAt(_0xd88fa7);
    }
    if (!_0x2d0f30) {
      _0x51d7cf[_0x56db61 >> 0] = 0;
    }
  }
  function _0x7113ce(_0x3ed3b0, _0x569dae) {
    if (_0x3ed3b0 % _0x569dae > 0) {
      _0x3ed3b0 += _0x569dae - _0x3ed3b0 % _0x569dae;
    }
    return _0x3ed3b0;
  }
  var _0x2b1026;
  var _0x51d7cf;
  var _0x42b281;
  var _0x2f4991;
  var _0x999577;
  var _0x2c6e39;
  var _0x4d8b01;
  var _0xaf0aab;
  var _0x2862c3;
  function _0x40e298(_0x35198f) {
    _0x2b1026 = _0x35198f;
    _0x4141f5.HEAP8 = _0x51d7cf = new Int8Array(_0x35198f);
    _0x4141f5.HEAP16 = _0x2f4991 = new Int16Array(_0x35198f);
    _0x4141f5.HEAP32 = _0x2c6e39 = new Int32Array(_0x35198f);
    _0x4141f5.HEAPU8 = _0x42b281 = new Uint8Array(_0x35198f);
    _0x4141f5.HEAPU16 = _0x999577 = new Uint16Array(_0x35198f);
    _0x4141f5.HEAPU32 = _0x4d8b01 = new Uint32Array(_0x35198f);
    _0x4141f5.HEAPF32 = _0xaf0aab = new Float32Array(_0x35198f);
    _0x4141f5.HEAPF64 = _0x2862c3 = new Float64Array(_0x35198f);
  }
  var _0x4780b1 = _0x4141f5.INITIAL_MEMORY || 33554432;
  var _0x18878e;
  var _0x35616a = [];
  var _0x1925db = [];
  var _0x23fa99 = [];
  var _0x5e184b = [];
  var _0x3e5b7f = [];
  var _0x17cc09 = false;
  var _0x238987 = false;
  function _0x177338() {
    if (_0x4141f5.preRun) {
      if (typeof _0x4141f5.preRun == "function") {
        _0x4141f5.preRun = [_0x4141f5.preRun];
      }
      while (_0x4141f5.preRun.length) {
        _0x290076(_0x4141f5.preRun.shift());
      }
    }
    _0x2a55ff(_0x35616a);
  }
  function _0x5d5158() {
    _0x17cc09 = true;
    if (!_0x4141f5.noFSInit && !_0xcb2023.init.initialized) {
      _0xcb2023.init();
    }
    _0x3f6b4d.init();
    _0x1ccd37.root = _0xcb2023.mount(_0x1ccd37, {}, null);
    _0x3ea076.root = _0xcb2023.mount(_0x3ea076, {}, null);
    _0x2a55ff(_0x1925db);
  }
  function _0x47e24b() {
    _0xcb2023.ignorePermissions = false;
    _0x2a55ff(_0x23fa99);
  }
  function _0x55e597() {
    _0x238987 = true;
  }
  function _0x3bcd2b() {
    if (_0x4141f5.postRun) {
      if (typeof _0x4141f5.postRun == "function") {
        _0x4141f5.postRun = [_0x4141f5.postRun];
      }
      while (_0x4141f5.postRun.length) {
        _0x1e09ce(_0x4141f5.postRun.shift());
      }
    }
    _0x2a55ff(_0x3e5b7f);
  }
  function _0x290076(_0x2e54cb) {
    _0x35616a.unshift(_0x2e54cb);
  }
  function _0x130fdc(_0x637fc5) {
    _0x1925db.unshift(_0x637fc5);
  }
  function _0x1e09ce(_0x42830c) {
    _0x3e5b7f.unshift(_0x42830c);
  }
  var _0x55fa7c = 0;
  var _0x21fc0f = null;
  var _0x3a4712 = null;
  function _0x58bbd4(_0x1f66d1) {
    return _0x1f66d1;
  }
  function _0x2e72ba(_0xce1fb5) {
    _0x55fa7c++;
    if (_0x4141f5.monitorRunDependencies) {
      _0x4141f5.monitorRunDependencies(_0x55fa7c);
    }
  }
  function _0x97cacc(_0x46cd10) {
    _0x55fa7c--;
    if (_0x4141f5.monitorRunDependencies) {
      _0x4141f5.monitorRunDependencies(_0x55fa7c);
    }
    if (_0x55fa7c == 0) {
      if (_0x21fc0f !== null) {
        clearInterval(_0x21fc0f);
        _0x21fc0f = null;
      }
      if (_0x3a4712) {
        var _0x1e9441 = _0x3a4712;
        _0x3a4712 = null;
        _0x1e9441();
      }
    }
  }
  _0x4141f5.preloadedImages = {};
  _0x4141f5.preloadedAudios = {};
  function _0x4ec462(_0x1521f1) {
    if (_0x4141f5.onAbort) {
      _0x4141f5.onAbort(_0x1521f1);
    }
    _0x1521f1 += "";
    _0x5c756b(_0x1521f1);
    _0xba6125 = true;
    _0x213183 = 1;
    _0x1521f1 = "abort(" + _0x1521f1 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x4bf36a = new WebAssembly.RuntimeError(_0x1521f1);
    throw _0x4bf36a;
  }
  var _0x59fbf9 = "data:application/octet-stream;base64,";
  function _0x2bca2e(_0x26adb5) {
    return _0x26adb5.startsWith(_0x59fbf9);
  }
  function _0x2d6cad(_0x36dfde) {
    return _0x36dfde.startsWith("file://");
  }
  var _0x18c832 = "build.wasm";
  if (!_0x2bca2e(_0x18c832)) {
    _0x18c832 = _0x5e8737(_0x18c832);
  }
  function _0x1fcdf5(_0x278612) {
    try {
      if (_0x278612 == _0x18c832 && _0x10d1e2) {
        return new Uint8Array(_0x10d1e2);
      }
      if (_0x23e4e3) {
        return _0x23e4e3(_0x278612);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x5ad6ae) {
      _0x4ec462(_0x5ad6ae);
    }
  }
  function _0x2d2746() {
    if (!_0x10d1e2 && (_0x4109f2 || _0x8e8b07)) {
      if (typeof fetch === "function" && !_0x2d6cad(_0x18c832)) {
        return fetch(_0x18c832, {
          credentials: "same-origin"
        }).then(function (_0xebbfa5) {
          if (!_0xebbfa5.ok) {
            throw "failed to load wasm binary file at '" + _0x18c832 + "'";
          }
          return _0xebbfa5.arrayBuffer();
        }).catch(function () {
          return _0x1fcdf5(_0x18c832);
        });
      } else if (_0x48b608) {
        return new Promise(function (_0x5113ef, _0x35efe4) {
          _0x48b608(_0x18c832, function (_0x33aefa) {
            _0x5113ef(new Uint8Array(_0x33aefa));
          }, _0x35efe4);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0x1fcdf5(_0x18c832);
    });
  }
  function _0x4a123d() {
    var _0x42b300 = {
      a: _0x52dc77
    };
    function _0x1ccd8e(_0xf98b23, _0x4df130) {
      var _0x45ef02 = _0xf98b23.exports;
      _0x4141f5.asm = _0x45ef02;
      _0x36963e = _0x4141f5.asm.Rk;
      _0x40e298(_0x36963e.buffer);
      _0x18878e = _0x4141f5.asm.pl;
      _0x130fdc(_0x4141f5.asm.Sk);
      _0x97cacc("wasm-instantiate");
    }
    _0x2e72ba("wasm-instantiate");
    function _0x14b015(_0x5848ae) {
      _0x1ccd8e(_0x5848ae.instance);
    }
    function _0x14a6fa(_0x4cc5ea) {
      return _0x2d2746().then(function (_0x3303c9) {
        var _0x255c66 = WebAssembly.instantiate(_0x3303c9, _0x42b300);
        return _0x255c66;
      }).then(_0x4cc5ea, function (_0x283564) {
        _0x5c756b("failed to asynchronously prepare wasm: " + _0x283564);
        _0x4ec462(_0x283564);
      });
    }
    function _0x4656d1() {
      if (!_0x10d1e2 && typeof WebAssembly.instantiateStreaming === "function" && !_0x2bca2e(_0x18c832) && !_0x2d6cad(_0x18c832) && typeof fetch === "function") {
        return fetch(_0x18c832, {
          credentials: "same-origin"
        }).then(function (_0x4fafed) {
          var _0x69f016 = WebAssembly.instantiateStreaming(_0x4fafed, _0x42b300);
          return _0x69f016.then(_0x14b015, function (_0x396155) {
            _0x5c756b("wasm streaming compile failed: " + _0x396155);
            _0x5c756b("falling back to ArrayBuffer instantiation");
            return _0x14a6fa(_0x14b015);
          });
        });
      } else {
        return _0x14a6fa(_0x14b015);
      }
    }
    if (_0x4141f5.instantiateWasm) {
      try {
        var _0x54acbc = _0x4141f5.instantiateWasm(_0x42b300, _0x1ccd8e);
        return _0x54acbc;
      } catch (_0x120f73) {
        _0x5c756b("Module.instantiateWasm callback failed with error: " + _0x120f73);
        return false;
      }
    }
    _0x4656d1();
    return {};
  }
  var _0xe392d5;
  var _0x3df107;
  var _0x446cac = {
    4865096: function () {
      return _0x4141f5.webglContextAttributes.premultipliedAlpha;
    },
    4865157: function () {
      return _0x4141f5.webglContextAttributes.preserveDrawingBuffer;
    },
    4865221: function () {
      return _0x4141f5.webglContextAttributes.powerPreference;
    }
  };
  function _0x2a55ff(_0x30f585) {
    while (_0x30f585.length > 0) {
      var _0x46e45c = _0x30f585.shift();
      if (typeof _0x46e45c == "function") {
        _0x46e45c(_0x4141f5);
        continue;
      }
      var _0x2297a4 = _0x46e45c.func;
      if (typeof _0x2297a4 === "number") {
        if (_0x46e45c.arg === undefined) {
          (function () {
            _0x41ec79.call(null, _0x2297a4);
          })();
        } else {
          (function (_0x180123) {
            _0xa9e541.apply(null, [_0x2297a4, _0x180123]);
          })(_0x46e45c.arg);
        }
      } else {
        _0x2297a4(_0x46e45c.arg === undefined ? null : _0x46e45c.arg);
      }
    }
  }
  function _0x4a881(_0x28f6ec) {
    return _0x28f6ec;
  }
  function _0x4043bd(_0x2d07e3) {
    var _0x29cc5e = /\b_Z[\w\d_]+/g;
    return _0x2d07e3.replace(_0x29cc5e, function (_0x34ffaf) {
      var _0x2213fe = _0x4a881(_0x34ffaf);
      if (_0x34ffaf === _0x2213fe) {
        return _0x34ffaf;
      } else {
        return _0x2213fe + " [" + _0x34ffaf + "]";
      }
    });
  }
  function _0x376c73(_0x524fae, _0x495523, _0x15033c) {
    var _0x5c8810 = _0x4141f5["dynCall_" + _0x524fae];
    if (_0x15033c && _0x15033c.length) {
      return _0x5c8810.apply(null, [_0x495523].concat(_0x15033c));
    } else {
      return _0x5c8810.call(null, _0x495523);
    }
  }
  function _0x26f7f2(_0x22479e, _0x5c218d, _0x4260d9) {
    return _0x376c73(_0x22479e, _0x5c218d, _0x4260d9);
  }
  function _0x48b8a1() {
    var _0x1a9f34 = new Error();
    if (!_0x1a9f34.stack) {
      try {
        throw new Error();
      } catch (_0x18e5d2) {
        _0x1a9f34 = _0x18e5d2;
      }
      if (!_0x1a9f34.stack) {
        return "(no stack trace available)";
      }
    }
    return _0x1a9f34.stack.toString();
  }
  var _0x204842 = 0;
  function _0x3defe9() {
    return _0x1db6a4 || _0x204842 > 0;
  }
  function _0x34b948() {
    var _0x534009 = _0x48b8a1();
    if (_0x4141f5.extraStackTrace) {
      _0x534009 += "\n" + _0x4141f5.extraStackTrace();
    }
    return _0x4043bd(_0x534009);
  }
  function _0x19bd74(_0x483893, _0x503a24, _0x57836, _0x5a8ad9, _0x3eb5c9) {
    var _0x463cba = _0xa8c6ca(_0x483893);
    var _0xa3d335 = _0xa8c6ca(_0x503a24);
    var _0x3be3dc = _0xa8c6ca(_0x57836);
    var _0x4a4b47 = _0xa8c6ca(_0x5a8ad9);
    var _0x1a616f = _0xa8c6ca(_0x3eb5c9);
    try {
      firebase.firestore().collection(_0x463cba).add(JSON.parse(_0xa3d335)).then(function (_0x57d5dc) {
        window.unityInstance.SendMessage(_0x3be3dc, _0x4a4b47, "Success: document added in collection " + _0x463cba);
      }).catch(function (_0x345460) {
        window.unityInstance.SendMessage(_0x3be3dc, _0x1a616f, JSON.stringify(_0x345460, Object.getOwnPropertyNames(_0x345460)));
      });
    } catch (_0x17f055) {
      window.unityInstance.SendMessage(_0x3be3dc, _0x1a616f, JSON.stringify(_0x17f055, Object.getOwnPropertyNames(_0x17f055)));
    }
  }
  function _0x382d4e(_0x2adbda, _0x550375, _0x120060, _0x5d5e7c, _0x4d6a13, _0x13e13e, _0x311629) {
    var _0x478b11 = _0xa8c6ca(_0x2adbda);
    var _0x5a1dee = _0xa8c6ca(_0x550375);
    var _0x234d16 = _0xa8c6ca(_0x120060);
    var _0x26b0b8 = _0xa8c6ca(_0x5d5e7c);
    var _0x170aab = _0xa8c6ca(_0x4d6a13);
    var _0x4a8d39 = _0xa8c6ca(_0x13e13e);
    var _0xfb3174 = _0xa8c6ca(_0x311629);
    try {
      var _0x5d5e7c = {};
      _0x5d5e7c[_0x234d16] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x26b0b8));
      firebase.firestore().collection(_0x478b11).doc(_0x5a1dee).update(_0x5d5e7c).then(function () {
        window.unityInstance.SendMessage(_0x170aab, _0x4a8d39, "Success: element " + _0x26b0b8 + " was added in " + _0x234d16);
      }).catch(function (_0x385bce) {
        window.unityInstance.SendMessage(_0x170aab, _0xfb3174, JSON.stringify(_0x385bce, Object.getOwnPropertyNames(_0x385bce)));
      });
    } catch (_0x59700e) {
      window.unityInstance.SendMessage(_0x170aab, _0xfb3174, JSON.stringify(_0x59700e, Object.getOwnPropertyNames(_0x59700e)));
    }
  }
  function _0x13a78d(_0x5428ab) {
    try {
      window.CrazyGames.SDK.user.addScore(_0x5428ab);
    } catch (_0x30ab7b) {
      window.UnitySDK.logError("Error while calling addScore:", _0x30ab7b);
    }
  }
  function _0xd84a4(_0x19b07c, _0x1285f8) {
    try {
      window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x19b07c), JSON.parse(window.unityStringify(_0x1285f8)));
    } catch (_0x5142e1) {
      window.UnitySDK.logError("Error while calling trackOrder:", _0x5142e1);
    }
  }
  function _0x3d7980(_0x223fd9) {
    const _0x119163 = document.createElement("textarea");
    _0x119163.value = window.unityStringify(_0x223fd9);
    document.body.appendChild(_0x119163);
    _0x119163.select();
    _0x119163.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(_0x119163);
  }
  function _0x1140de(_0xab468b, _0x14dd0b, _0x571070, _0x33f38a, _0x115837) {
    var _0x34ffc4 = _0xa8c6ca(_0xab468b);
    var _0x120059 = _0xa8c6ca(_0x14dd0b);
    var _0x5debc3 = _0xa8c6ca(_0x571070);
    var _0x4b748d = _0xa8c6ca(_0x33f38a);
    var _0x2aee9a = _0xa8c6ca(_0x115837);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0x34ffc4, _0x120059).then(function (_0x166a22) {
        window.unityInstance.SendMessage(_0x5debc3, _0x4b748d, "Success: signed up for " + _0x34ffc4);
      }).catch(function (_0x4ef7d1) {
        window.unityInstance.SendMessage(_0x5debc3, _0x2aee9a, JSON.stringify(_0x4ef7d1, Object.getOwnPropertyNames(_0x4ef7d1)));
      });
    } catch (_0x53fdc6) {
      window.unityInstance.SendMessage(_0x5debc3, _0x2aee9a, JSON.stringify(_0x53fdc6, Object.getOwnPropertyNames(_0x53fdc6)));
    }
  }
  function _0x244de4() {
    try {
      window.CrazyGames.SDK.data.clear();
    } catch (_0x30b9d5) {
      window.UnitySDK.logError("Error while calling clear:", _0x30b9d5);
    }
  }
  function _0x46595c(_0x82edc8) {
    var _0x4ecdf6 = null;
    try {
      _0x4ecdf6 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x82edc8));
    } catch (_0x498c60) {
      window.UnitySDK.logError("Error while calling getItem:", _0x498c60);
    }
    var _0x30e269 = _0x4da9ba(_0x4ecdf6 + "") + 1;
    var _0x38c75b = _0x48c1ae(_0x30e269);
    _0x3c7021(_0x4ecdf6, _0x38c75b, _0x30e269);
    return _0x38c75b;
  }
  function _0x6e4580(_0x36a81a) {
    var _0xd89c53 = null;
    try {
      _0xd89c53 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x36a81a));
    } catch (_0x1029ef) {
      window.UnitySDK.logError("Error while calling getItem:", _0x1029ef);
    }
    return _0xd89c53 !== null;
  }
  function _0x39bf2e(_0xa9e558) {
    try {
      window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0xa9e558));
    } catch (_0x4058f4) {
      window.UnitySDK.logError("Error while calling removeItem:", _0x4058f4);
    }
  }
  function _0x436e74(_0x45c0cf, _0x427ca6) {
    try {
      window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x45c0cf), window.unityStringify(_0x427ca6));
    } catch (_0x45f451) {
      window.UnitySDK.logError("Error while calling setItem:", _0x45f451);
    }
  }
  function _0x1cbee6(_0x11981d, _0x198d7c, _0x42f1af, _0x5452ad, _0xf85004) {
    var _0xf6c9f3 = _0xa8c6ca(_0x11981d);
    var _0x5a79c4 = _0xa8c6ca(_0x198d7c);
    var _0x1be6b0 = _0xa8c6ca(_0x42f1af);
    var _0x6930aa = _0xa8c6ca(_0x5452ad);
    var _0x50f0d5 = _0xa8c6ca(_0xf85004);
    try {
      firebase.firestore().collection(_0xf6c9f3).doc(_0x5a79c4).delete().then(function () {
        window.unityInstance.SendMessage(_0x1be6b0, _0x6930aa, "Success: document " + _0x5a79c4 + " was deleted");
      }).catch(function (_0xbbe728) {
        window.unityInstance.SendMessage(_0x1be6b0, _0x50f0d5, JSON.stringify(_0xbbe728, Object.getOwnPropertyNames(_0xbbe728)));
      });
    } catch (_0x47f3b7) {
      window.unityInstance.SendMessage(_0x1be6b0, _0x50f0d5, JSON.stringify(_0x47f3b7, Object.getOwnPropertyNames(_0x47f3b7)));
    }
  }
  function _0x58b5b4(_0x4ce70d, _0xbcb24, _0x12eb91, _0x254e57, _0x4e7f69, _0x3354e6) {
    var _0xaf6708 = _0xa8c6ca(_0x4ce70d);
    var _0x415890 = _0xa8c6ca(_0xbcb24);
    var _0x4c6742 = _0xa8c6ca(_0x12eb91);
    var _0x5734cc = _0xa8c6ca(_0x254e57);
    var _0x1c0ae8 = _0xa8c6ca(_0x4e7f69);
    var _0x316e55 = _0xa8c6ca(_0x3354e6);
    try {
      var _0x47853c = {};
      _0x47853c[_0x4c6742] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0xaf6708).doc(_0x415890).update(_0x47853c).then(function () {
        window.unityInstance.SendMessage(_0x5734cc, _0x1c0ae8, "Success: field " + _0x4c6742 + " was deleted");
      }).catch(function (_0x336ba3) {
        window.unityInstance.SendMessage(_0x5734cc, _0x316e55, JSON.stringify(_0x336ba3, Object.getOwnPropertyNames(_0x336ba3)));
      });
    } catch (_0x3d611b) {
      window.unityInstance.SendMessage(_0x5734cc, _0x316e55, JSON.stringify(_0x3d611b, Object.getOwnPropertyNames(_0x3d611b)));
    }
  }
  function _0x4e579a(_0x482895, _0x1f4ad8, _0x56f0b6, _0x9e583d) {
    var _0x319ef0 = _0xa8c6ca(_0x482895);
    var _0x394a54 = _0xa8c6ca(_0x1f4ad8);
    var _0x55a265 = _0xa8c6ca(_0x56f0b6);
    var _0x575e3c = _0xa8c6ca(_0x9e583d);
    try {
      firebase.database().ref(_0x319ef0).remove().then(function (_0x18dd98) {
        window.unityInstance.SendMessage(_0x394a54, _0x55a265, "Success: " + _0x319ef0 + " was deleted");
      });
    } catch (_0x3971a9) {
      window.unityInstance.SendMessage(_0x394a54, _0x575e3c, JSON.stringify(_0x3971a9, Object.getOwnPropertyNames(_0x3971a9)));
    }
  }
  function _0x11d51e(_0x4411d0, _0x47d548, _0x3e6c50, _0xfe9452) {
    var _0x278424 = _0xa8c6ca(_0x4411d0);
    var _0x1bcfb7 = _0xa8c6ca(_0x47d548);
    var _0x4b9ec0 = _0xa8c6ca(_0x3e6c50);
    var _0x1a9af0 = _0xa8c6ca(_0xfe9452);
    try {
      firebase.storage().ref(_0x278424).getDownloadURL().then(function (_0x4fcf90) {
        var _0x3246ce = new XMLHttpRequest();
        _0x3246ce.responseType = "arraybuffer";
        _0x3246ce.onload = function (_0x1a71d3) {
          var _0x5a8dd8 = _0x3246ce.response;
          window.unityInstance.SendMessage(_0x1bcfb7, _0x4b9ec0, _0x1136d1(_0x5a8dd8));
        };
        _0x3246ce.open("GET", _0x4fcf90);
        _0x3246ce.send();
      }).catch(function (_0x1759f3) {
        window.unityInstance.SendMessage(_0x1bcfb7, _0x1a9af0, JSON.stringify(_0x1759f3, Object.getOwnPropertyNames(_0x1759f3)));
      });
    } catch (_0x21e748) {
      window.unityInstance.SendMessage(_0x1bcfb7, _0x1a9af0, JSON.stringify(_0x21e748, Object.getOwnPropertyNames(_0x21e748)));
    }
    function _0x1136d1(_0x41c9b8) {
      var _0x1d7e74 = "";
      var _0x53c512 = new Uint8Array(_0x41c9b8);
      var _0x4ff75f = _0x53c512.byteLength;
      for (var _0x583a7c = 0; _0x583a7c < _0x4ff75f; _0x583a7c++) {
        _0x1d7e74 += String.fromCharCode(_0x53c512[_0x583a7c]);
      }
      return window.btoa(_0x1d7e74);
    }
  }
  function _0x517826() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0x379d2f) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x2b9f39(_0x23d594) {
    var _0x41763a = {
      adStarted: function () {
        _0x28e651("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        _0x28e651("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      },
      adError: function (_0x301cd8) {
        _0x28e651("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x301cd8));
      }
    };
    var _0x2ae555 = window.GMSOFT_GMADS_INFO.reward;
    var _0x3b97d3 = _0x2ae555[Math.floor(Math.random() * _0x2ae555.length)];
    try {
      var _0xb3ddae = document.createElement("div");
      _0xb3ddae.id = "gm-ad-overlay";
      _0xb3ddae.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0x1c5050 = document.createElement("div");
      _0x1c5050.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x417d3b = document.createElement("video");
      _0x417d3b.src = _0x3b97d3.image;
      _0x417d3b.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
      _0x417d3b.autoplay = true;
      _0x417d3b.muted = true;
      _0x417d3b.preload = "auto";
      var _0x3788c0 = document.createElement("button");
      _0x3788c0.innerHTML = "Skip (5)";
      _0x3788c0.disabled = true;
      _0x3788c0.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
      _0x3788c0.disabled = true;
      _0x3788c0.style.opacity = "0.5";
      var _0x119d38 = document.createElement("div");
      _0x119d38.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0x55aa51 = document.createElement("div");
      _0x55aa51.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0x500273 = 5;
      var _0x650286 = setInterval(function () {
        _0x500273--;
        if (_0x500273 > 0) {
          _0x3788c0.innerHTML = "Skip (" + _0x500273 + ")";
        } else {
          _0x3788c0.innerHTML = "Skip";
          _0x3788c0.disabled = false;
          _0x3788c0.style.opacity = "1";
          _0x3788c0.style.cursor = "pointer";
          clearInterval(_0x650286);
        }
      }, 1000);
      function _0x4f2be1() {
        if (_0xb3ddae && _0xb3ddae.parentNode) {
          _0xb3ddae.parentNode.removeChild(_0xb3ddae);
        }
        clearInterval(_0x650286);
        _0x41763a.adFinished();
      }
      function _0x1942b6() {
        window.open(_0x3b97d3.url, "_blank");
      }
      function _0x376ecf() {
        if (_0x417d3b.duration && _0x417d3b.currentTime) {
          var _0x1c6d6a = _0x417d3b.currentTime / _0x417d3b.duration * 100;
          _0x55aa51.style.width = _0x1c6d6a + "%";
        }
      }
      _0x417d3b.addEventListener("loadstart", function () {
        _0x41763a.adStarted();
      });
      _0x417d3b.addEventListener("timeupdate", function () {
        _0x376ecf();
      });
      _0x417d3b.addEventListener("ended", function () {
        _0x4f2be1();
      });
      _0x417d3b.addEventListener("error", function (_0x58a843) {
        var _0x44ae73 = {
          message: "Video load error",
          code: _0x58a843.target.error ? _0x58a843.target.error.code : "unknown"
        };
        _0x41763a.adError(_0x44ae73);
        _0x4f2be1();
      });
      _0x417d3b.addEventListener("click", function () {
        _0x1942b6();
      });
      _0x3788c0.addEventListener("click", function () {
        if (!_0x3788c0.disabled) {
          _0x4f2be1();
        }
      });
      _0x417d3b.addEventListener("contextmenu", function (_0x12eae5) {
        _0x12eae5.preventDefault();
      });
      _0x119d38.appendChild(_0x55aa51);
      _0x1c5050.appendChild(_0x417d3b);
      _0x1c5050.appendChild(_0x3788c0);
      _0x1c5050.appendChild(_0x119d38);
      _0xb3ddae.appendChild(_0x1c5050);
      document.body.appendChild(_0xb3ddae);
      _0x417d3b.play().catch(function (_0x1a0703) {
        console.error("Video play error:", _0x1a0703);
        _0x41763a.adError({
          message: "Cannot play video",
          details: _0x1a0703.message
        });
        _0x4f2be1();
      });
    } catch (_0x3e35e8) {
      console.error("Ad overlay creation error:", _0x3e35e8);
      _0x41763a.adError({
        message: "Failed to create ad overlay",
        details: _0x3e35e8.message
      });
    }
  }
  function _0xfb555a(_0x314aca, _0x16895d) {
    gmEvent(_0xa8c6ca(_0x314aca), _0xa8c6ca(_0x16895d));
  }
  function _0xc0e5de() {
    const _0xebd90 = "gmsdksigndomain";
    try {
      if (localStorage.hasOwnProperty(_0xebd90)) {
        let _0x51a75e = localStorage.getItem(_0xebd90);
        if (_0x51a75e && _0x51a75e.length > 10) {
          window.GMSOFT_SIGNED = _0x51a75e;
          console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
          _0x28e651("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
          return;
        }
      }
    } catch (_0x2e1ca0) {
      console.error("Error getting GM_SDK_GetVeryfiedSignature from local storage: ", _0x2e1ca0);
    }
    try {
      let _0xc01ec4 = "hn=" + "games.ofree.io";
      let _0x16cf24 = btoa(_0xc01ec4);
      let _0x2eaa5c = "https://api.cdnwave.com/sdkdom/keysigned";
      if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
        _0x2eaa5c = window.GMSOFT_OPTIONS.signedurl;
      }
      let _0x24b135 = _0x2eaa5c + "?params=" + _0x16cf24;
      var _0x35f5f9 = new XMLHttpRequest();
      let _0x4b65d1 = "";
      _0x35f5f9.open("GET", _0x24b135, false);
      _0x35f5f9.send(_0x4b65d1);
      let _0x1d7242 = _0x35f5f9.responseText;
      if (_0x1d7242 && atob(_0x1d7242) === "bangame") {
        return;
      }
      window.GMSOFT_SIGNED = _0x1d7242;
      localStorage.setItem(_0xebd90, _0x1d7242);
      console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      _0x28e651("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
    } catch (_0xbd8365) {
      console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0xbd8365);
    }
  }
  function _0x4fd3b1() {
    let _0x49d3a1 = "games.ofree.io";
    _0x28e651("GmSoft", "SetUnityHostName", _0x49d3a1);
    _0x28e651("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
  }
  function _0x39e2f3() {
    console.log("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x28e651("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
      });
    } catch (_0x520dc0) {
      console.error("Error JS 12", _0x520dc0);
    }
    try {
      gmStartAds(function () {
        _0x28e651("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
      });
    } catch (_0x19a148) {
      console.error("Error JS 20", _0x19a148);
    }
    try {
      document.addEventListener("gmsoftbanevent", _0x39b688 => {
        _0x28e651("GmSoft", "LockGame", _0x39b688.detail);
      });
    } catch (_0x55aa6e) {
      console.error("Error JS 28", _0x55aa6e);
    }
  }
  function _0x38173f(_0x4e9f4b) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x4e9f4b);
    } catch (_0x31df10) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x8d7730() {
    try {
      window.CrazyGames.SDK.game.gameplayStart();
    } catch (_0x23ab92) {
      window.UnitySDK.logError("Error while calling gameplayStart:", _0x23ab92);
    }
  }
  function _0x1c957e() {
    try {
      window.CrazyGames.SDK.game.gameplayStop();
    } catch (_0x10224e) {
      window.UnitySDK.logError("Error while calling gameplayStop:", _0x10224e);
    }
  }
  function _0x113da9() {
    var _0x51fbfd = firebaseConfig.projectId;
    var _0x4c260f = _0x4da9ba(_0x51fbfd) + 1;
    var _0x11c725 = _0x48c1ae(_0x4c260f);
    _0x3c7021(_0x51fbfd, _0x11c725, _0x4c260f);
    return _0x11c725;
  }
  function _0x18e37b(_0x3909d8, _0x541981, _0x246cdf, _0x242d4e, _0x1451cf) {
    var _0x35e4dc = _0xa8c6ca(_0x3909d8);
    var _0x1f9a91 = _0xa8c6ca(_0x541981);
    var _0xa673c = _0xa8c6ca(_0x246cdf);
    var _0x5bda95 = _0xa8c6ca(_0x242d4e);
    var _0x14cfef = _0xa8c6ca(_0x1451cf);
    try {
      firebase.firestore().collection(_0x35e4dc).doc(_0x1f9a91).get().then(function (_0x2965a9) {
        if (_0x2965a9.exists) {
          window.unityInstance.SendMessage(_0xa673c, _0x5bda95, JSON.stringify(_0x2965a9.data()));
        } else {
          window.unityInstance.SendMessage(_0xa673c, _0x5bda95, "null");
        }
      }).catch(function (_0x91190d) {
        window.unityInstance.SendMessage(_0xa673c, _0x14cfef, JSON.stringify(_0x91190d, Object.getOwnPropertyNames(_0x91190d)));
      });
    } catch (_0x523bb5) {
      window.unityInstance.SendMessage(_0xa673c, _0x14cfef, JSON.stringify(_0x523bb5, Object.getOwnPropertyNames(_0x523bb5)));
    }
  }
  function _0x13ed10(_0xe6f4e4, _0x292f0c, _0x6b85d2, _0xbce642) {
    var _0xff8398 = _0xa8c6ca(_0xe6f4e4);
    var _0x2f1bc7 = _0xa8c6ca(_0x292f0c);
    var _0x25203a = _0xa8c6ca(_0x6b85d2);
    var _0xd8dec3 = _0xa8c6ca(_0xbce642);
    try {
      firebase.firestore().collection(_0xff8398).get().then(function (_0x69217a) {
        var _0x3a8af0 = {};
        _0x69217a.forEach(function (_0x5bc386) {
          _0x3a8af0[_0x5bc386.id] = _0x5bc386.data();
        });
        window.unityInstance.SendMessage(_0x2f1bc7, _0x25203a, JSON.stringify(_0x3a8af0));
      }).catch(function (_0x109e5e) {
        window.unityInstance.SendMessage(_0x2f1bc7, _0xd8dec3, JSON.stringify(_0x109e5e, Object.getOwnPropertyNames(_0x109e5e)));
      });
    } catch (_0x75f845) {
      window.unityInstance.SendMessage(_0x2f1bc7, _0xd8dec3, JSON.stringify(_0x75f845, Object.getOwnPropertyNames(_0x75f845)));
    }
  }
  function _0x461773() {
    var _0x275c8f = window.CrazyGames.SDK.environment;
    var _0x24907c = _0x4da9ba(_0x275c8f) + 1;
    var _0x25ed9d = _0x48c1ae(_0x24907c);
    _0x3c7021(_0x275c8f, _0x25ed9d, _0x24907c);
    return _0x25ed9d;
  }
  function _0x52277e() {
    var _0x1545e4 = JSON.stringify(window.CrazyGames.SDK.game.settings);
    var _0xba66f6 = _0x4da9ba(_0x1545e4) + 1;
    var _0x29e0ec = _0x48c1ae(_0xba66f6);
    _0x3c7021(_0x1545e4, _0x29e0ec, _0xba66f6);
    return _0x29e0ec;
  }
  function _0x3d6e84(_0x3aab6d) {
    var _0x280af0 = new URLSearchParams(window.location.search);
    var _0x443284 = _0x280af0.get(window.unityStringify(_0x3aab6d));
    if (_0x443284 === null) {
      _0x443284 = "";
    }
    var _0x3783fd = _0x4da9ba(_0x443284) + 1;
    var _0x19b271 = _0x48c1ae(_0x3783fd);
    _0x3c7021(_0x443284, _0x19b271, _0x3783fd);
    return _0x19b271;
  }
  function _0x270436() {
    return window.CrazyGames.SDK.isQaTool;
  }
  function _0x4807ad(_0x1f40e0, _0x2aab52, _0xd7a5bc, _0x534eda) {
    var _0x34b279 = _0xa8c6ca(_0x1f40e0);
    var _0x31801b = _0xa8c6ca(_0x2aab52);
    var _0x20cea6 = _0xa8c6ca(_0xd7a5bc);
    var _0x3bf237 = _0xa8c6ca(_0x534eda);
    try {
      firebase.database().ref(_0x34b279).once("value").then(function (_0x22479d) {
        window.unityInstance.SendMessage(_0x31801b, _0x20cea6, JSON.stringify(_0x22479d.val()));
      });
    } catch (_0x22f315) {
      window.unityInstance.SendMessage(_0x31801b, _0x3bf237, JSON.stringify(_0x22f315, Object.getOwnPropertyNames(_0x22f315)));
    }
  }
  function _0x49671d() {
    var _0x34c9d4 = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
    var _0x7d0251 = _0x4da9ba(_0x34c9d4) + 1;
    var _0x1eabf1 = _0x48c1ae(_0x7d0251);
    _0x3c7021(_0x34c9d4, _0x1eabf1, _0x7d0251);
    return _0x1eabf1;
  }
  function _0x45b7ea() {
    window.CrazyGames.SDK.user.getUser().then(function (_0x200b71) {
      _0x28e651("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        userJson: JSON.stringify(_0x200b71)
      }));
    }).catch(function (_0x446ab3) {
      _0x28e651("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        errorJson: JSON.stringify(_0x446ab3)
      }));
    });
  }
  function _0x5b9164() {
    window.CrazyGames.SDK.user.getUserToken().then(function (_0x1dba88) {
      _0x28e651("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        token: _0x1dba88
      }));
    }).catch(function (_0x5a9071) {
      _0x28e651("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x5a9071)
      }));
    });
  }
  function _0x1c7c92() {
    window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x16dac5) {
      _0x28e651("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        token: _0x16dac5
      }));
    }).catch(function (_0x241921) {
      _0x28e651("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x241921)
      }));
    });
  }
  function _0x5ea61c() {}
  function _0x3ebc96() {
    console.log("afg.ready: " + afg.ready);
    if (afg.ready) {
      _0x28e651("H5Adverisement", "PreloadRewardedVideoCallback", 1);
      afg.adBreak({
        type: "reward",
        name: "reward ads",
        beforeReward: function (_0x5c1f38) {
          this._showRewardAdFn = _0x5c1f38;
          console.log("[H5 Ads] before reward");
        }.bind(this),
        adViewed: function () {
          this._showRewardAdFn = null;
          _0x28e651("H5Adverisement", "RewardedVideoSuccessCallback");
          console.log("[H5 Ads] ad viewed");
        }.bind(this),
        adDismissed: function () {
          this._showRewardAdFn = null;
          _0x28e651("H5Adverisement", "RewardedVideoFailureCallback");
          console.log("[H5 Ads] ad failure");
        }.bind(this),
        adBreakDone: function (_0x1cbbdf) {
          console.log("[H5 Ads] Reward break done");
          _0x28e651("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("[H5 Ads] no reward ads");
      _0x28e651("H5Adverisement", "PreloadRewardedVideoCallback", 0);
    }
  }
  function _0x5991e9() {
    if (afg.ready) {
      afg.adBreak({
        type: "next",
        name: "next",
        beforeAd: function () {
          afg.onBeforeAd();
          console.log("[H5 Ads] Before ad");
          _0x28e651("H5Adverisement", "PauseGameCallback");
        }.bind(this),
        adBreakDone: function () {
          console.log("[H5 Ads] Ad break done");
          _0x28e651("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("no " + adType + " ads");
      _0x28e651("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x3946f9() {
    if (this._showRewardAdFn) {
      _0x28e651("H5Adverisement", "PauseGameCallback");
      this._showRewardAdFn();
    } else {
      _0x28e651("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x4d9661() {
    try {
      window.CrazyGames.SDK.game.happytime();
    } catch (_0x179f92) {
      window.UnitySDK.logError("Error while calling happytime:", _0x179f92);
    }
  }
  function _0x2ba99f() {
    try {
      window.CrazyGames.SDK.game.hideInviteButton();
    } catch (_0x532e44) {
      window.UnitySDK.logError("Error while calling hideInviteButton:", _0x532e44);
    }
  }
  function _0x32cfbf(_0x4420cd, _0x38a35e, _0x178041, _0x1f1969, _0x4778e8, _0x3a27d3, _0x78f936) {
    var _0x52e5ec = _0xa8c6ca(_0x4420cd);
    var _0x33aefe = _0xa8c6ca(_0x38a35e);
    var _0x560e14 = _0xa8c6ca(_0x178041);
    var _0x596f9c = _0xa8c6ca(_0x4778e8);
    var _0x14a13f = _0xa8c6ca(_0x3a27d3);
    var _0x106043 = _0xa8c6ca(_0x78f936);
    try {
      var _0x4883f5 = {};
      _0x4883f5[_0x560e14] = firebase.firestore.FieldValue.increment(_0x1f1969);
      firebase.firestore().collection(_0x52e5ec).doc(_0x33aefe).update(_0x4883f5).then(function () {
        window.unityInstance.SendMessage(_0x596f9c, _0x14a13f, "Success: incremented " + _0x560e14 + " by " + _0x1f1969);
      }).catch(function (_0xbb3534) {
        window.unityInstance.SendMessage(_0x596f9c, _0x106043, JSON.stringify(_0xbb3534, Object.getOwnPropertyNames(_0xbb3534)));
      });
    } catch (_0x5931d4) {
      window.unityInstance.SendMessage(_0x596f9c, _0x106043, JSON.stringify(_0x5931d4, Object.getOwnPropertyNames(_0x5931d4)));
    }
  }
  function _0x5bb6db(_0x549b17) {
    if (typeof _0xa8c6ca !== "undefined") {
      window.unityStringify = _0xa8c6ca;
    } else {
      window.unityStringify = _0xa8c6ca;
    }
    window.UnitySDK = {
      version: window.unityStringify(_0x549b17),
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
        var _0x26d626 = Array.prototype.slice.call(arguments);
        _0x26d626.unshift("[JsLib]");
        console.error.apply(console, _0x26d626);
      }
    };
    var _0x45e19f = {
      wrapper: {
        engine: "unity",
        sdkVersion: window.unityStringify(_0x549b17)
      }
    };
    var _0x5b58b7 = document.createElement("script");
    _0x5b58b7.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
    document.head.appendChild(_0x5b58b7);
    _0x5b58b7.addEventListener("load", function () {
      window.CrazyGames.SDK.init(_0x45e19f).then(function () {
        _0x28e651("CrazySDKSingleton", "JSLibCallback_Init");
        window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x9df0d9) {
          _0x28e651("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x9df0d9 ? 1 : 0);
        }).catch(function (_0xa1394) {
          window.UnitySDK.logError("Error while checking adblock:", _0xa1394);
          _0x28e651("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        });
        window.CrazyGames.SDK.user.addAuthListener(function (_0x3faa71) {
          _0x28e651("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
            userJson: JSON.stringify(_0x3faa71)
          }));
        });
      });
    });
  }
  function _0x1f441d() {
    return window.CrazyGames.SDK.user.isUserAccountAvailable;
  }
  var _0x360b8b = null;
  var _0x4f70ec = 0;
  function _0x41eb3d() {
    return _0x360b8b && _0x360b8b.activated || _0x4f70ec != 0;
  }
  var _0x321e4b = 1;
  var _0x266d12 = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0x39c0c5() {
    _0x266d12 = {
      x: _0x360b8b.x * _0x321e4b,
      y: _0x360b8b.y * _0x321e4b,
      z: _0x360b8b.z * _0x321e4b
    };
    if (_0x4f70ec != 0) {
      _0x45aa54(_0x4f70ec, _0x266d12.x, _0x266d12.y, _0x266d12.z);
    }
  }
  var _0x2ac010 = 0;
  var _0x16b04e = 0;
  var _0x46618a = 0;
  var _0x401b14 = 0;
  var _0x13f360 = 0;
  function _0x505bcc(_0x536388, _0x2b2775) {
    var _0x41fabe = {
      x: _0x536388.x - _0x2b2775.x,
      y: _0x536388.y - _0x2b2775.y,
      z: _0x536388.z - _0x2b2775.z
    };
    var _0x192d51 = _0x41fabe.x * _0x41fabe.x + _0x41fabe.y * _0x41fabe.y + _0x41fabe.z * _0x41fabe.z;
    var _0x4d0a50 = {
      x: _0x536388.x + _0x2b2775.x,
      y: _0x536388.y + _0x2b2775.y,
      z: _0x536388.z + _0x2b2775.z
    };
    var _0x31700f = _0x4d0a50.x * _0x4d0a50.x + _0x4d0a50.y * _0x4d0a50.y + _0x4d0a50.z * _0x4d0a50.z;
    if (_0x192d51 <= _0x31700f) {
      return _0x41fabe;
    } else {
      return _0x4d0a50;
    }
  }
  function _0x372e3a(_0x47a16a) {
    var _0x11825b = {
      x: _0x47a16a.accelerationIncludingGravity.x * _0x321e4b,
      y: _0x47a16a.accelerationIncludingGravity.y * _0x321e4b,
      z: _0x47a16a.accelerationIncludingGravity.z * _0x321e4b
    };
    if (_0x4f70ec != 0) {
      _0x45aa54(_0x4f70ec, _0x11825b.x, _0x11825b.y, _0x11825b.z);
    }
    var _0xb20de1 = {
      x: _0x47a16a.acceleration.x * _0x321e4b,
      y: _0x47a16a.acceleration.y * _0x321e4b,
      z: _0x47a16a.acceleration.z * _0x321e4b
    };
    if (_0x46618a != 0) {
      _0x45aa54(_0x46618a, _0xb20de1.x, _0xb20de1.y, _0xb20de1.z);
    }
    if (_0x401b14 != 0) {
      var _0x5d4d38 = _0x505bcc(_0x11825b, _0xb20de1);
      _0x45aa54(_0x401b14, _0x5d4d38.x, _0x5d4d38.y, _0x5d4d38.z);
    }
    if (_0x13f360 != 0) {
      var _0x34bc4b = Math.PI / 180;
      _0x45aa54(_0x13f360, _0x47a16a.rotationRate.alpha * _0x34bc4b, _0x47a16a.rotationRate.beta * _0x34bc4b, _0x47a16a.rotationRate.gamma * _0x34bc4b);
    }
  }
  var _0x38edfc = 0;
  function _0x1ad0b6(_0x59cc6a) {
    if (_0x59cc6a & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0x4282b1) {
          if (_0x4282b1 === "granted") {
            _0x38edfc &= ~1;
          } else {
            _0x728a21("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x26bb76) {
          _0x728a21(_0x26bb76);
          _0x38edfc |= 1;
        });
      }
    }
    if (_0x59cc6a & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x15eb6a) {
          if (_0x15eb6a === "granted") {
            _0x38edfc &= ~2;
          } else {
            _0x728a21("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0x3997cf) {
          _0x728a21(_0x3997cf);
          _0x38edfc |= 2;
        });
      }
    }
  }
  function _0x4b3edc() {
    if (_0x4f70ec == 0 && _0x46618a == 0 && _0x401b14 == 0 && _0x13f360 == 0) {
      _0x1ad0b6(2);
      window.addEventListener("devicemotion", _0x372e3a);
    }
  }
  function _0x27406c() {
    var _0x2440eb = 9.80665;
    _0x321e4b = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x2440eb : -1 / _0x2440eb;
  }
  function _0x7153cb(_0x50e43a, _0xf93083) {
    _0x27406c();
    if (typeof Accelerometer === "undefined") {
      _0x4b3edc();
      if (_0x50e43a != 0) {
        _0x4f70ec = _0x50e43a;
      }
      return;
    }
    if (_0x50e43a != 0) {
      _0x4f70ec = _0x50e43a;
    }
    function _0x5075b3(_0x2a3e26) {
      _0x360b8b = new Accelerometer({
        frequency: _0x2a3e26,
        referenceFrame: "device"
      });
      _0x360b8b.addEventListener("reading", _0x39c0c5);
      _0x360b8b.addEventListener("error", function (_0x224468) {
        _0x728a21(_0x224468.error ? _0x224468.error : _0x224468);
      });
      _0x360b8b.start();
      _0x16b04e = _0x2a3e26;
    }
    if (_0x360b8b) {
      if (_0x16b04e != _0xf93083) {
        _0x360b8b.stop();
        _0x360b8b.removeEventListener("reading", _0x39c0c5);
        _0x5075b3(_0xf93083);
      }
    } else if (_0x2ac010 != 0) {
      _0x2ac010 = _0xf93083;
    } else {
      _0x2ac010 = _0xf93083;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x30ab8c) {
        if (_0x30ab8c.state === "granted") {
          _0x5075b3(_0x2ac010);
        } else {
          _0x728a21("No permission to use Accelerometer.");
        }
        _0x2ac010 = 0;
      });
    }
  }
  function _0xa0324e() {
    if (_0x4f70ec == 0 && _0x46618a == 0 && _0x401b14 == 0 && _0x13f360 == 0) {
      window.removeEventListener("devicemotion", _0x19c832);
    }
  }
  function _0x43d788() {
    if (_0x360b8b) {
      if (typeof GravitySensor !== "undefined" || _0x401b14 == 0) {
        _0x360b8b.stop();
        _0x360b8b.removeEventListener("reading", _0x39c0c5);
        _0x360b8b = null;
      }
      _0x4f70ec = 0;
      _0x16b04e = 0;
    } else if (_0x4f70ec != 0) {
      _0x4f70ec = 0;
      _0xa0324e();
    }
  }
  function _0x15e9d(_0x58fbb8, _0x4f3cbe) {
    var _0x4c2c08 = "";
    for (var _0x8b6722 = 0; _0x8b6722 < _0x4f3cbe; _0x8b6722++) {
      _0x4c2c08 += String.fromCharCode(_0x42b281[_0x58fbb8 + _0x8b6722]);
    }
    _0x4141f5.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x4c2c08) + "),default";
  }
  function _0x16ad13(_0x455a0b) {
    _0x4141f5.canvas.style.cursor = _0x455a0b ? "default" : "none";
  }
  function _0x241375(_0x173da7) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0x173da7);
    }
    return _0x173da7.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x97d2a8() {
    var _0x5447a0 = _0x4141f5.canvas ? _0x4141f5.canvas.id : "unity-canvas";
    return "#" + _0x241375(_0x5447a0);
  }
  function _0x493c18(_0x517c79, _0x42a133, _0x124f15, _0x1d5457) {
    var _0x4e2327 = document.querySelector(_0x97d2a8());
    var _0x207769 = _0x4e2327 && _0x4e2327.getBoundingClientRect();
    _0x4d8b01[_0x124f15 >> 2] = _0x517c79 - (_0x207769 ? _0x207769.left : 0);
    _0x4d8b01[_0x1d5457 >> 2] = _0x42a133 - (_0x207769 ? _0x207769.top : 0);
  }
  function _0x5538e7(_0x403ddc) {
    var _0x12665c = _0x4da9ba(_0x403ddc) + 1;
    var _0x2d101f = _0x48c1ae(_0x12665c);
    _0x3c7021(_0x403ddc, _0x2d101f, _0x12665c);
    return _0x2d101f;
  }
  function _0x30b083() {
    var _0x451352 = _0x97d2a8();
    if (_0x30b083.selector != _0x451352) {
      _0x59ed75(_0x30b083.ptr);
      _0x30b083.ptr = _0x5538e7(_0x451352);
      _0x30b083.selector = _0x451352;
    }
    return _0x30b083.ptr;
  }
  function _0x7ba4eb(_0x1628bc) {
    var _0x529e2a = _0xa8c6ca(_0x1628bc);
    try {
      eval(_0x529e2a);
    } catch (_0x36cea7) {
      console.error(_0x36cea7);
    }
  }
  function _0x4e2319(_0x53764f) {
    var _0x420103 = _0xa8c6ca(_0x53764f);
    window.open(_0x420103, "_blank", "");
  }
  var _0x4aa74d = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0x3d3929) {
      if (_0x3d3929) {
        if (_0x4aa74d.numPendingSync == 0) {
          return;
        }
      } else if (_0x4aa74d.syncInProgress) {
        _0x4aa74d.numPendingSync++;
        return;
      }
      _0x4aa74d.syncInProgress = true;
      _0xcb2023.syncfs(false, function (_0x431704) {
        _0x4aa74d.syncInProgress = false;
      });
      _0x4aa74d.numPendingSync = 0;
    }
  };
  function _0x4681aa() {
    _0x4141f5.setInterval(function () {
      _0x4aa74d.sync(true);
    }, _0x4aa74d.syncInternal);
  }
  function _0x42a63a() {
    _0x4aa74d.sync(false);
  }
  var _0xf5e029 = null;
  function _0x1d992c() {
    if (typeof GravitySensor !== "undefined") {
      return _0xf5e029 && _0xf5e029.activated;
    } else {
      return _0x401b14 != 0;
    }
  }
  function _0x4eaa3d() {
    if (_0x401b14 != 0) {
      _0x45aa54(_0x401b14, _0xf5e029.x * _0x321e4b, _0xf5e029.y * _0x321e4b, _0xf5e029.z * _0x321e4b);
    }
  }
  var _0x19eccb = 0;
  var _0x14eb4e = null;
  function _0x340301() {
    var _0x13332c = {
      x: _0x14eb4e.x * _0x321e4b,
      y: _0x14eb4e.y * _0x321e4b,
      z: _0x14eb4e.z * _0x321e4b
    };
    if (_0x46618a != 0) {
      _0x45aa54(_0x46618a, _0x13332c.x, _0x13332c.y, _0x13332c.z);
    }
    if (_0x401b14 != 0 && typeof GravitySensor === "undefined") {
      var _0x484427 = _0x505bcc(_0x266d12, _0x13332c);
      _0x45aa54(_0x401b14, _0x484427.x, _0x484427.y, _0x484427.z);
    }
  }
  var _0x1c5597 = 0;
  var _0x32412c = 0;
  function _0x14ca4a(_0x251286, _0x20613d) {
    _0x27406c();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0x4b3edc();
      if (_0x251286 != 0) {
        _0x46618a = _0x251286;
      }
      return;
    }
    if (_0x251286 != 0) {
      _0x46618a = _0x251286;
    }
    function _0x151cce(_0xba41a5) {
      _0x14eb4e = new LinearAccelerationSensor({
        frequency: _0xba41a5,
        referenceFrame: "device"
      });
      _0x14eb4e.addEventListener("reading", _0x340301);
      _0x14eb4e.addEventListener("error", function (_0x59ba86) {
        _0x728a21(_0x59ba86.error ? _0x59ba86.error : _0x59ba86);
      });
      _0x14eb4e.start();
      _0x32412c = _0xba41a5;
    }
    if (_0x14eb4e) {
      if (_0x32412c != _0x20613d) {
        _0x14eb4e.stop();
        _0x14eb4e.removeEventListener("reading", _0x340301);
        _0x151cce(_0x20613d);
      }
    } else if (_0x1c5597 != 0) {
      _0x1c5597 = _0x20613d;
    } else {
      _0x1c5597 = _0x20613d;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x36e246) {
        if (_0x36e246.state === "granted") {
          _0x151cce(_0x1c5597);
        } else {
          _0x728a21("No permission to use LinearAccelerationSensor.");
        }
        _0x1c5597 = 0;
      });
    }
  }
  function _0x1b96e4(_0x13532e, _0x4be6f9) {
    if (typeof GravitySensor === "undefined") {
      _0x7153cb(0, Math.max(_0x4be6f9, _0x16b04e));
      _0x14ca4a(0, Math.max(_0x4be6f9, _0x32412c));
      _0x401b14 = _0x13532e;
      return;
    }
    _0x27406c();
    _0x401b14 = _0x13532e;
    function _0xc75766(_0x53af74) {
      _0xf5e029 = new GravitySensor({
        frequency: _0x53af74,
        referenceFrame: "device"
      });
      _0xf5e029.addEventListener("reading", _0x4eaa3d);
      _0xf5e029.addEventListener("error", function (_0x47281c) {
        _0x728a21(_0x47281c.error ? _0x47281c.error : _0x47281c);
      });
      _0xf5e029.start();
    }
    if (_0xf5e029) {
      _0xf5e029.stop();
      _0xf5e029.removeEventListener("reading", _0x4eaa3d);
      _0xc75766(_0x4be6f9);
    } else if (_0x19eccb != 0) {
      _0x19eccb = _0x4be6f9;
    } else {
      _0x19eccb = _0x4be6f9;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x12aeda) {
        if (_0x12aeda.state === "granted") {
          _0xc75766(_0x19eccb);
        } else {
          _0x728a21("No permission to use GravitySensor.");
        }
        _0x19eccb = 0;
      });
    }
  }
  function _0x5027e1() {
    if (_0x14eb4e) {
      if (typeof GravitySensor !== "undefined" || _0x401b14 == 0) {
        _0x14eb4e.stop();
        _0x14eb4e.removeEventListener("reading", _0x340301);
        _0x14eb4e = null;
      }
      _0x46618a = 0;
      _0x32412c = 0;
    } else if (_0x46618a != 0) {
      _0x46618a = 0;
      _0xa0324e();
    }
  }
  function _0x1a1393() {
    _0x401b14 = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x4f70ec == 0) {
        _0x43d788();
      }
      if (_0x46618a == 0) {
        _0x5027e1();
      }
      return;
    }
    if (_0xf5e029) {
      _0xf5e029.stop();
      _0xf5e029.removeEventListener("reading", _0x4eaa3d);
      _0xf5e029 = null;
    }
  }
  function _0x2b12d5(_0xc66186) {
    try {
      (function () {
        _0x41ec79.call(null, _0xc66186);
      })();
    } catch (_0x378e1e) {
      console.warn(_0x378e1e);
    }
  }
  var _0x5a6461 = null;
  function _0x3c4a68() {
    return _0x5a6461 && _0x5a6461.activated || _0x13f360 != 0;
  }
  function _0x26b004() {
    if (_0x13f360 != 0) {
      _0x45aa54(_0x13f360, _0x5a6461.x, _0x5a6461.y, _0x5a6461.z);
    }
  }
  var _0x5b9af1 = 0;
  function _0x197404(_0x521d6d, _0xacf780) {
    if (typeof Gyroscope === "undefined") {
      _0x4b3edc();
      _0x13f360 = _0x521d6d;
      return;
    }
    _0x13f360 = _0x521d6d;
    function _0x105566(_0x543ff2) {
      _0x5a6461 = new Gyroscope({
        frequency: _0x543ff2,
        referenceFrame: "device"
      });
      _0x5a6461.addEventListener("reading", _0x26b004);
      _0x5a6461.addEventListener("error", function (_0x96c3b3) {
        _0x728a21(_0x96c3b3.error ? _0x96c3b3.error : _0x96c3b3);
      });
      _0x5a6461.start();
    }
    if (_0x5a6461) {
      _0x5a6461.stop();
      _0x5a6461.removeEventListener("reading", _0x26b004);
      _0x105566(_0xacf780);
    } else if (_0x5b9af1 != 0) {
      _0x5b9af1 = _0xacf780;
    } else {
      _0x5b9af1 = _0xacf780;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x1a3010) {
        if (_0x1a3010.state === "granted") {
          _0x105566(_0x5b9af1);
        } else {
          _0x728a21("No permission to use Gyroscope.");
        }
        _0x5b9af1 = 0;
      });
    }
  }
  function _0x736367() {
    if (_0x5a6461) {
      _0x5a6461.stop();
      _0x5a6461.removeEventListener("reading", _0x26b004);
      _0x5a6461 = null;
      _0x13f360 = 0;
    } else if (_0x13f360 != 0) {
      _0x13f360 = 0;
      _0xa0324e();
    }
  }
  function _0x483e45() {
    const _0x26bc4f = function (_0x4f61ab) {
      if (_0x4f61ab.target.localName !== "canvas") {
        _0x19a41d();
      }
    };
    document.addEventListener("contextmenu", _0x26bc4f);
    _0x4141f5.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0x26bc4f);
    });
  }
  function _0x154b3f() {
    return _0x14eb4e && _0x14eb4e.activated || _0x46618a != 0;
  }
  function _0x1b7004(_0x10cb14, _0x4a3583) {
    var _0x3498a5 = _0xa8c6ca(_0x10cb14);
    if (typeof dump == "function") {
      dump(_0x3498a5);
    }
    switch (_0x4a3583) {
      case 0:
      case 1:
      case 4:
        console.error(_0x3498a5);
        return;
      case 2:
        console.warn(_0x3498a5);
        return;
      case 3:
      case 5:
        console.log(_0x3498a5);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(_0x3498a5);
    }
  }
  function _0x2252fd(_0x103877, _0x10437c) {
    var _0x4172fe = _0x34b948();
    if (_0x103877) {
      _0x3c7021(_0x4172fe, _0x103877, _0x10437c);
    }
    return _0x4da9ba(_0x4172fe);
  }
  var _0x1a23ba = null;
  var _0x1901b5 = 0;
  function _0x405aec() {
    return _0x1a23ba && _0x1a23ba.activated || _0x1901b5 != 0;
  }
  function _0x404c27() {
    if (_0x1901b5 != 0) {
      _0x50a694(_0x1901b5, _0x1a23ba.quaternion[0], _0x1a23ba.quaternion[1], _0x1a23ba.quaternion[2], _0x1a23ba.quaternion[3]);
    }
  }
  var _0x22a6e0 = 0;
  function _0x19c832(_0x5db9f7) {
    if (_0x1901b5) {
      var _0x40e210 = Math.PI / 180;
      var _0xc01bbb = _0x5db9f7.beta * _0x40e210;
      var _0x31851d = _0x5db9f7.gamma * _0x40e210;
      var _0x1cab1d = _0x5db9f7.alpha * _0x40e210;
      var _0x374bd8 = Math.cos(_0xc01bbb / 2);
      var _0x349ae9 = Math.sin(_0xc01bbb / 2);
      var _0x129a8e = Math.cos(_0x31851d / 2);
      var _0x11cd28 = Math.sin(_0x31851d / 2);
      var _0x1f5791 = Math.cos(_0x1cab1d / 2);
      var _0x3012c1 = Math.sin(_0x1cab1d / 2);
      var _0x4085c2 = _0x349ae9 * _0x129a8e * _0x1f5791 - _0x374bd8 * _0x11cd28 * _0x3012c1;
      var _0x32f8be = _0x374bd8 * _0x11cd28 * _0x1f5791 + _0x349ae9 * _0x129a8e * _0x3012c1;
      var _0x1d1839 = _0x374bd8 * _0x129a8e * _0x3012c1 + _0x349ae9 * _0x11cd28 * _0x1f5791;
      var _0x19391c = _0x374bd8 * _0x129a8e * _0x1f5791 - _0x349ae9 * _0x11cd28 * _0x3012c1;
      _0x50a694(_0x1901b5, _0x4085c2, _0x32f8be, _0x1d1839, _0x19391c);
    }
  }
  function _0x4f6a43(_0x30b9a3, _0x2db8e1) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0x1901b5 == 0) {
        _0x1901b5 = _0x30b9a3;
        _0x1ad0b6(1);
        window.addEventListener("deviceorientation", _0x19c832);
      }
      return;
    }
    _0x1901b5 = _0x30b9a3;
    function _0x44bc23(_0x5573f7) {
      _0x1a23ba = new RelativeOrientationSensor({
        frequency: _0x5573f7,
        referenceFrame: "device"
      });
      _0x1a23ba.addEventListener("reading", _0x404c27);
      _0x1a23ba.addEventListener("error", function (_0x54c15f) {
        _0x728a21(_0x54c15f.error ? _0x54c15f.error : _0x54c15f);
      });
      _0x1a23ba.start();
    }
    if (_0x1a23ba) {
      _0x1a23ba.stop();
      _0x1a23ba.removeEventListener("reading", _0x404c27);
      _0x44bc23(_0x2db8e1);
    } else if (_0x22a6e0 != 0) {
      _0x22a6e0 = _0x2db8e1;
    } else {
      _0x22a6e0 = _0x2db8e1;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0x54abcd) {
        if (_0x54abcd.every(function (_0x1e1ab5) {
          return _0x1e1ab5.state === "granted";
        })) {
          _0x44bc23(_0x22a6e0);
        } else {
          _0x728a21("No permissions to use RelativeOrientationSensor.");
        }
        _0x22a6e0 = 0;
      });
    }
  }
  function _0xe3e462() {
    if (_0x1a23ba) {
      _0x1a23ba.stop();
      _0x1a23ba.removeEventListener("reading", _0x404c27);
      _0x1a23ba = null;
    } else if (_0x1901b5 != 0) {
      window.removeEventListener("deviceorientation", _0x19c832);
    }
    _0x1901b5 = 0;
  }
  function _0x30b407() {
    if (_0x38edfc == 0) {
      return;
    }
    _0x1ad0b6(_0x38edfc);
  }
  function _0x2b1985() {
    _0x4141f5.QuitCleanup();
  }
  var _0x287f4a = 0;
  function _0x5a3507() {
    if (_0x287f4a) {
      _0x54bd5d(_0x287f4a, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0x456abb() {
    _0x287f4a = 0;
    window.removeEventListener("resize", _0x5a3507);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x5a3507);
    }
  }
  function _0x468376(_0xfa9146) {
    if (!_0x287f4a) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x5a3507);
      }
      window.addEventListener("resize", _0x5a3507);
      _0x287f4a = _0xfa9146;
      setTimeout(_0x5a3507, 0);
    }
  }
  var _0x26b118 = -1;
  var _0x1065db = -1;
  var _0x211a97 = -1;
  function _0x38a01f(_0x146e21) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0x42b7fe() {
      _0x1065db = _0x26b118;
      var _0x17f9ee = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x5c7b34 = _0x17f9ee[_0x1065db];
      screen.orientation.lock(_0x5c7b34).then(function () {
        if (_0x26b118 != _0x1065db) {
          _0x211a97 = setTimeout(_0x42b7fe, 0);
        } else {
          _0x211a97 = -1;
        }
      }).catch(function (_0x4d6587) {
        _0x728a21(_0x4d6587);
        _0x211a97 = -1;
      });
    }
    _0x26b118 = _0x146e21;
    if (_0x211a97 == -1 && _0x146e21 != _0x1065db) {
      _0x211a97 = setTimeout(_0x42b7fe, 0);
    }
  }
  var _0x29e580 = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0x57f369(_0x453138) {
    _0x453138.estimatePlaybackPosition = function () {
      var _0x3b475d = (_0x29e580.audioContext.currentTime - _0x453138.playbackStartTime) * _0x453138.playbackRate.value;
      if (_0x453138.loop && _0x3b475d >= _0x453138.loopStart) {
        _0x3b475d = (_0x3b475d - _0x453138.loopStart) % (_0x453138.loopEnd - _0x453138.loopStart) + _0x453138.loopStart;
      }
      return _0x3b475d;
    };
    _0x453138.setPitch = function (_0x5ddee7) {
      var _0x20a69a = _0x453138.estimatePlaybackPosition();
      if (_0x20a69a >= 0) {
        _0x453138.playbackStartTime = _0x29e580.audioContext.currentTime - _0x20a69a / _0x5ddee7;
      }
      if (_0x453138.playbackRate.value !== _0x5ddee7) {
        _0x453138.playbackRate.value = _0x5ddee7;
      }
    };
  }
  function _0x362ab4(_0xee00de, _0x54abe3) {
    var _0x246e94 = {
      buffer: _0xee00de,
      error: _0x54abe3
    };
    _0x246e94.release = function () {};
    _0x246e94.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x20c060 = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x20c060;
    };
    _0x246e94.getData = function (_0x5c681d, _0x1865c2) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0x36eac1 = _0x5c681d >> 2;
      var _0x4a7d88 = _0xaf0aab.subarray(_0x36eac1, _0x36eac1 + (_0x1865c2 >> 2));
      var _0x5979d1 = Math.floor((_0x1865c2 >> 2) / this.buffer.numberOfChannels);
      var _0x446098 = Math.min(this.buffer.length, _0x5979d1);
      for (var _0x1b6495 = 0; _0x1b6495 < this.buffer.numberOfChannels; _0x1b6495++) {
        var _0x4007a8 = this.buffer.getChannelData(_0x1b6495).subarray(0, _0x446098);
        _0x4a7d88.set(_0x4007a8, _0x1b6495 * _0x446098);
      }
      return _0x446098 * this.buffer.numberOfChannels * 4;
    };
    _0x246e94.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0x246e94.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0x246e94.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x1e6c56 = _0x29e580.audioContext.createBufferSource();
      _0x1e6c56.buffer = this.buffer;
      _0x57f369(_0x1e6c56);
      return _0x1e6c56;
    };
    return _0x246e94;
  }
  function _0xf793e(_0x45c84d, _0x5c8949) {
    var _0x2b9ae2 = {
      callback: _0x45c84d,
      userData: _0x5c8949,
      source: null,
      gain: _0x29e580.audioContext.createGain(),
      panner: _0x29e580.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x2b9ae2.panner.rolloffFactor = 0;
    _0x2b9ae2.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x2b9ae2.playSoundClip = function (_0x457cdd, _0x328db5, _0xbc15c9) {
      try {
        var _0x3088df = this;
        this.source = _0x457cdd.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0x3088df.source.isStopped = true;
          _0x3088df.disconnectSource();
          if (_0x3088df.callback) {
            _0x26f7f2("vi", _0x3088df.callback, [_0x3088df.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0x328db5, _0xbc15c9);
        this.source.playbackStartTime = _0x328db5 - _0xbc15c9 / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x5242e4) {
        console.error("Channel.playSoundClip error. Exception: " + _0x5242e4);
      }
    };
    _0x2b9ae2.stop = function (_0x23595e) {
      if (!this.source) {
        return;
      }
      try {
        _0x2b9ae2.source.stop(_0x29e580.audioContext.currentTime + _0x23595e);
      } catch (_0x273fa9) {}
      if (_0x23595e == 0) {
        this.disconnectSource();
      }
    };
    _0x2b9ae2.isPaused = function () {
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
    _0x2b9ae2.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x1c479c = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0x22841e) {
          this.playbackRate = _0x22841e;
        },
        stop: function (_0x3d742e) {
          this.scheduledStopTime = _0x3d742e;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x1c479c;
    };
    _0x2b9ae2.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x14fb92 = this.source;
      var _0x241ff0 = _0x362ab4(_0x14fb92.buffer, false);
      this.playSoundClip(_0x241ff0, _0x29e580.audioContext.currentTime, Math.max(0, _0x14fb92.playbackPausedAtPosition));
      this.source.loop = _0x14fb92.loop;
      this.source.loopStart = _0x14fb92.loopStart;
      this.source.loopEnd = _0x14fb92.loopEnd;
      this.source.setPitch(_0x14fb92.playbackRate);
      if (typeof _0x14fb92.scheduledStopTime !== "undefined") {
        var _0x2ca3d5 = Math.max(_0x14fb92.scheduledStopTime - _0x29e580.audioContext.currentTime, 0);
        this.stop(_0x2ca3d5);
      }
    };
    _0x2b9ae2.setLoop = function (_0x4d5008) {
      this.loop = _0x4d5008;
      if (!this.source || this.source.loop == _0x4d5008) {
        return;
      }
      this.source.loop = _0x4d5008;
    };
    _0x2b9ae2.setLoopPoints = function (_0x5999d3, _0xa69173) {
      this.loopStart = _0x5999d3;
      this.loopEnd = _0xa69173;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x5999d3) {
        this.source.loopStart = _0x5999d3;
      }
      if (this.source.loopEnd !== _0xa69173) {
        this.source.loopEnd = _0xa69173;
      }
    };
    _0x2b9ae2.set3D = function (_0x3eed60) {
      if (this.threeD == _0x3eed60) {
        return;
      }
      this.threeD = _0x3eed60;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x2b9ae2.setPitch = function (_0x5a803b) {
      this.pitch = _0x5a803b;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x5a803b);
    };
    _0x2b9ae2.setVolume = function (_0x9c10b2) {
      if (this.gain.gain.value == _0x9c10b2) {
        return;
      }
      this.gain.gain.value = _0x9c10b2;
    };
    _0x2b9ae2.setPosition = function (_0x220918, _0x21037d, _0x43e20f) {
      var _0x433046 = this.panner;
      if (_0x433046.positionX) {
        if (_0x433046.positionX.value !== _0x220918) {
          _0x433046.positionX.value = _0x220918;
        }
        if (_0x433046.positionY.value !== _0x21037d) {
          _0x433046.positionY.value = _0x21037d;
        }
        if (_0x433046.positionZ.value !== _0x43e20f) {
          _0x433046.positionZ.value = _0x43e20f;
        }
      } else if (_0x433046._x !== _0x220918 || _0x433046._y !== _0x21037d || _0x433046._z !== _0x43e20f) {
        _0x433046.setPosition(_0x220918, _0x21037d, _0x43e20f);
        _0x433046._x = _0x220918;
        _0x433046._y = _0x21037d;
        _0x433046._z = _0x43e20f;
      }
    };
    _0x2b9ae2.disconnectSource = function () {
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
    _0x2b9ae2.setupPanning = function () {
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
      this.gain.connect(_0x29e580.audioContext.destination);
    };
    _0x2b9ae2.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x2b9ae2;
  }
  function _0x32f22d(_0x13fa71, _0x3f9e9b) {
    if (_0x29e580.audioWebEnabled == 0) {
      return;
    }
    _0x29e580.audioInstances[++_0x29e580.audioInstanceIdCounter] = _0xf793e(_0x13fa71, _0x3f9e9b);
    return _0x29e580.audioInstanceIdCounter;
  }
  function _0xfd6ae3(_0x413f03) {
    if (_0x29e580.audioWebEnabled == 0) {
      return 0;
    }
    var _0x44018e = _0x29e580.audioInstances[_0x413f03];
    if (!_0x44018e) {
      return 0;
    }
    return _0x44018e.getLength();
  }
  function _0x60e863(_0x4f5652) {
    if (_0x29e580.audioWebEnabled == 0) {
      return 2;
    }
    var _0x3276ea = _0x29e580.audioInstances[_0x4f5652];
    if (_0x3276ea.error) {
      return 2;
    }
    if (_0x3276ea.buffer || _0x3276ea.url) {
      return 0;
    }
    return 1;
  }
  function _0x31ca25(_0xf4197f) {
    var _0x33931f = _0x29e580.pendingAudioSources[_0xf4197f];
    _0x33931f.sourceNode._startPlayback(_0x33931f.offset);
    delete _0x29e580.pendingAudioSources[_0xf4197f];
  }
  function _0x598b0f() {
    Object.keys(_0x29e580.pendingAudioSources).forEach(function (_0x27ffe0) {
      _0x31ca25(_0x27ffe0);
    });
  }
  function _0x385ed8() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x29e580.audioContext = new AudioContext();
      function _0x898c92() {
        if (_0x29e580.audioContext.state === "suspended") {
          _0x29e580.audioContext.resume().catch(function (_0xa2f088) {
            console.warn("Could not resume audio context. Exception: " + _0xa2f088);
          });
        } else {
          _0x4141f5.clearInterval(_0x1dae8f);
        }
      }
      var _0x1dae8f = _0x4141f5.setInterval(_0x898c92, 400);
      _0x29e580.audioWebEnabled = 1;
      function _0x331564() {
        try {
          if (_0x29e580.audioContext.state !== "running" && _0x29e580.audioContext.state !== "closed") {
            _0x29e580.audioContext.resume().catch(function (_0x340866) {
              console.warn("Could not resume audio context. Exception: " + _0x340866);
            });
          }
          _0x598b0f();
          var _0x70e6b = 20;
          while (_0x29e580.audioCache.length < _0x70e6b) {
            var _0x2d612e = new Audio();
            _0x2d612e.autoplay = false;
            _0x29e580.audioCache.push(_0x2d612e);
          }
        } catch (_0x1270df) {}
      }
      window.addEventListener("mousedown", _0x331564);
      window.addEventListener("touchstart", _0x331564);
      _0x4141f5.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x331564);
        window.removeEventListener("touchstart", _0x331564);
      });
    } catch (_0x32b3ab) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x43d62d(_0x14b035) {
    if (_0x29e580.audioWebEnabled == 0) {
      return true;
    }
    var _0x95b5a3 = _0x29e580.audioInstances[_0x14b035];
    if (!_0x95b5a3) {
      return true;
    }
    return _0x95b5a3.isStopped();
  }
  function _0x33f13c(_0x283b4c) {
    var _0x6dff4 = _0x362ab4(null, false);
    _0x29e580.audioContext.decodeAudioData(_0x283b4c, function (_0x2f143a) {
      _0x6dff4.buffer = _0x2f143a;
    }, function (_0x41ee51) {
      _0x6dff4.error = true;
      console.log("Decode error: " + _0x41ee51);
    });
    return _0x6dff4;
  }
  function _0x423a36(_0x3c6054, _0x1a9232) {
    _0x29e580.pendingAudioSources[_0x3c6054.mediaElement.src] = {
      sourceNode: _0x3c6054,
      offset: _0x1a9232
    };
  }
  function _0x5efbdf(_0x5c1d1e) {
    switch (_0x5c1d1e) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x4faa3c(_0x50393f, _0x580e91) {
    var _0x1bfc6a = _0x5efbdf(_0x580e91);
    var _0x53f60f = new Blob([_0x50393f], {
      type: _0x1bfc6a
    });
    var _0x535b67 = {
      url: URL.createObjectURL(_0x53f60f),
      error: false,
      mediaElement: new Audio()
    };
    _0x535b67.mediaElement.preload = "metadata";
    _0x535b67.mediaElement.src = _0x535b67.url;
    _0x535b67.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x535b67.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x535b67.getData = function (_0x57c84d, _0x3b9d26) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x535b67.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x535b67.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x535b67.createSourceNode = function () {
      var _0x444963 = this;
      var _0x32e08b = _0x29e580.audioCache.length ? _0x29e580.audioCache.pop() : new Audio();
      _0x32e08b.preload = "metadata";
      _0x32e08b.src = this.url;
      var _0x41d992 = _0x29e580.audioContext.createMediaElementSource(_0x32e08b);
      Object.defineProperty(_0x41d992, "loop", {
        get: function () {
          return _0x41d992.mediaElement.loop;
        },
        set: function (_0xdc5677) {
          if (_0x41d992.mediaElement.loop !== _0xdc5677) {
            _0x41d992.mediaElement.loop = _0xdc5677;
          }
        }
      });
      _0x41d992.playbackRate = {};
      Object.defineProperty(_0x41d992.playbackRate, "value", {
        get: function () {
          return _0x41d992.mediaElement.playbackRate;
        },
        set: function (_0x15a502) {
          if (_0x41d992.mediaElement.playbackRate !== _0x15a502) {
            _0x41d992.mediaElement.playbackRate = _0x15a502;
          }
        }
      });
      Object.defineProperty(_0x41d992, "currentTime", {
        get: function () {
          return _0x41d992.mediaElement.currentTime;
        },
        set: function (_0x81e737) {
          if (_0x41d992.mediaElement.currentTime !== _0x81e737) {
            _0x41d992.mediaElement.currentTime = _0x81e737;
          }
        }
      });
      Object.defineProperty(_0x41d992, "mute", {
        get: function () {
          return _0x41d992.mediaElement.mute;
        },
        set: function (_0x5b64df) {
          if (_0x41d992.mediaElement.mute !== _0x5b64df) {
            _0x41d992.mediaElement.mute = _0x5b64df;
          }
        }
      });
      Object.defineProperty(_0x41d992, "onended", {
        get: function () {
          return _0x41d992.mediaElement.onended;
        },
        set: function (_0xc45bd3) {
          _0x41d992.mediaElement.onended = _0xc45bd3;
        }
      });
      _0x41d992.playPromise = null;
      _0x41d992.playTimeout = null;
      _0x41d992.pauseRequested = false;
      _0x41d992.isStopped = false;
      _0x41d992._pauseMediaElement = function () {
        if (_0x41d992.playPromise || _0x41d992.playTimeout) {
          _0x41d992.pauseRequested = true;
        } else {
          _0x41d992.mediaElement.pause();
        }
      };
      _0x41d992._startPlayback = function (_0x440930) {
        if (_0x41d992.playPromise || _0x41d992.playTimeout) {
          _0x41d992.mediaElement.currentTime = _0x440930;
          _0x41d992.pauseRequested = false;
          return;
        }
        _0x41d992.mediaElement.currentTime = _0x440930;
        _0x41d992.playPromise = _0x41d992.mediaElement.play();
        if (_0x41d992.playPromise) {
          _0x41d992.playPromise.then(function () {
            if (_0x41d992.pauseRequested) {
              _0x41d992.mediaElement.pause();
              _0x41d992.pauseRequested = false;
            }
            _0x41d992.playPromise = null;
          }).catch(function (_0x5ba6c9) {
            _0x41d992.playPromise = null;
            if (_0x5ba6c9.name !== "NotAllowedError") {
              throw _0x5ba6c9;
            }
            _0x423a36(_0x41d992, _0x440930);
          });
        }
      };
      _0x41d992.start = function (_0x46398a, _0x5861fb) {
        if (typeof _0x46398a === "undefined") {
          _0x46398a = _0x29e580.audioContext.currentTime;
        }
        if (typeof _0x5861fb === "undefined") {
          _0x5861fb = 0;
        }
        var _0x2ff055 = 4;
        var _0x3380c9 = (_0x46398a - _0x29e580.audioContext.currentTime) * 1000;
        if (_0x3380c9 > _0x2ff055) {
          _0x41d992.playTimeout = setTimeout(function () {
            _0x41d992.playTimeout = null;
            _0x41d992._startPlayback(_0x5861fb);
          }, _0x3380c9);
        } else {
          _0x41d992._startPlayback(_0x5861fb);
        }
      };
      _0x41d992.stop = function (_0x349447) {
        if (typeof _0x349447 === "undefined") {
          _0x349447 = _0x29e580.audioContext.currentTime;
        }
        var _0x4d513a = 4;
        var _0x24e073 = (_0x349447 - _0x29e580.audioContext.currentTime) * 1000;
        if (_0x24e073 > _0x4d513a) {
          setTimeout(function () {
            _0x41d992._pauseMediaElement();
            _0x41d992.isStopped = true;
          }, _0x24e073);
        } else {
          _0x41d992._pauseMediaElement();
          _0x41d992.isStopped = true;
        }
      };
      _0x57f369(_0x41d992);
      return _0x41d992;
    };
    return _0x535b67;
  }
  function _0x1ba4ea(_0x48bb71, _0x25b05a, _0x2ca4a3, _0x273ebb) {
    if (_0x29e580.audioWebEnabled == 0) {
      return 0;
    }
    var _0x5852e6 = _0x42b281.buffer.slice(_0x48bb71, _0x48bb71 + _0x25b05a);
    if (_0x25b05a < 131072) {
      _0x2ca4a3 = 1;
    }
    var _0x4cefc3;
    if (_0x2ca4a3) {
      _0x4cefc3 = _0x33f13c(_0x5852e6);
    } else {
      _0x4cefc3 = _0x4faa3c(_0x5852e6, _0x273ebb);
    }
    _0x29e580.audioInstances[++_0x29e580.audioInstanceIdCounter] = _0x4cefc3;
    return _0x29e580.audioInstanceIdCounter;
  }
  function _0x1feb4b(_0x268a71, _0x559a1b, _0x5d3da9, _0x15656d) {
    var _0x48a6dc = _0x29e580.audioContext.createBuffer(_0x268a71, _0x559a1b, _0x5d3da9);
    for (var _0x246a0d = 0; _0x246a0d < _0x268a71; _0x246a0d++) {
      var _0x26019c = (_0x15656d >> 2) + _0x559a1b * _0x246a0d;
      var _0x509bb8 = _0x48a6dc.copyToChannel || function (_0x47f8c4, _0x2cd6ad, _0x5d23cf) {
        var _0x53552c = _0x47f8c4.subarray(0, Math.min(_0x47f8c4.length, this.length - (_0x5d23cf | 0)));
        this.getChannelData(_0x2cd6ad | 0).set(_0x53552c, _0x5d23cf | 0);
      };
      _0x509bb8.apply(_0x48a6dc, [_0xaf0aab.subarray(_0x26019c, _0x26019c + _0x559a1b), _0x246a0d, 0]);
    }
    return _0x362ab4(_0x48a6dc, false);
  }
  function _0x1f06a1(_0x4e6e35, _0x40a687, _0x467fff, _0x367433) {
    if (_0x29e580.audioWebEnabled == 0) {
      return 0;
    }
    var _0x3de2e0 = _0x1feb4b(_0x4e6e35, _0x40a687, _0x467fff, _0x367433);
    _0x29e580.audioInstances[++_0x29e580.audioInstanceIdCounter] = _0x3de2e0;
    return _0x29e580.audioInstanceIdCounter;
  }
  function _0x7cfa35(_0x11fa10, _0x2feebe, _0x40e6a9, _0x370f13) {
    if (_0x29e580.audioWebEnabled == 0) {
      return;
    }
    _0x5e36f8(_0x2feebe, 0);
    var _0x3fbf32 = _0x29e580.audioInstances[_0x11fa10];
    var _0x4db5c0 = _0x29e580.audioInstances[_0x2feebe];
    if (!_0x3fbf32) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x4db5c0.playSoundClip(_0x3fbf32, _0x29e580.audioContext.currentTime + _0x370f13, _0x40e6a9);
    } catch (_0xb7f601) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x3010f7(_0x1df420) {
    var _0x27d96b = _0x29e580.audioInstances[_0x1df420];
    if (_0x27d96b) {
      _0x27d96b.release();
    }
    delete _0x29e580.audioInstances[_0x1df420];
  }
  function _0x431d60() {
    if (_0x29e580.audioWebEnabled == 0) {
      return;
    }
    if (_0x29e580.audioContext.state === "suspended") {
      _0x29e580.audioContext.resume().catch(function (_0xf4dd97) {
        console.warn("Could not resume audio context. Exception: " + _0xf4dd97);
      });
    }
  }
  function _0x2d7f22(_0x1ef3f0, _0x1184c5) {
    var _0x2b45d1 = _0x29e580.audioInstances[_0x1ef3f0];
    _0x2b45d1.set3D(_0x1184c5);
  }
  function _0x55c54d(_0x3aaf5a, _0x1f63a2, _0x244494, _0x1f9706, _0x25d21e, _0xf2200f) {
    if (_0x29e580.audioWebEnabled == 0) {
      return;
    }
    _0x3aaf5a = -_0x3aaf5a;
    _0x1f63a2 = -_0x1f63a2;
    _0x244494 = -_0x244494;
    var _0x5b7af9 = _0x29e580.audioContext.listener;
    if (_0x5b7af9.forwardX) {
      if (_0x5b7af9.forwardX.value !== _0x3aaf5a) {
        _0x5b7af9.forwardX.value = _0x3aaf5a;
      }
      if (_0x5b7af9.forwardY.value !== _0x1f63a2) {
        _0x5b7af9.forwardY.value = _0x1f63a2;
      }
      if (_0x5b7af9.forwardZ.value !== _0x244494) {
        _0x5b7af9.forwardZ.value = _0x244494;
      }
      if (_0x5b7af9.upX.value !== _0x1f9706) {
        _0x5b7af9.upX.value = _0x1f9706;
      }
      if (_0x5b7af9.upY.value !== _0x25d21e) {
        _0x5b7af9.upY.value = _0x25d21e;
      }
      if (_0x5b7af9.upZ.value !== _0xf2200f) {
        _0x5b7af9.upZ.value = _0xf2200f;
      }
    } else if (_0x5b7af9._forwardX !== _0x3aaf5a || _0x5b7af9._forwardY !== _0x1f63a2 || _0x5b7af9._forwardZ !== _0x244494 || _0x5b7af9._upX !== _0x1f9706 || _0x5b7af9._upY !== _0x25d21e || _0x5b7af9._upZ !== _0xf2200f) {
      _0x5b7af9.setOrientation(_0x3aaf5a, _0x1f63a2, _0x244494, _0x1f9706, _0x25d21e, _0xf2200f);
      _0x5b7af9._forwardX = _0x3aaf5a;
      _0x5b7af9._forwardY = _0x1f63a2;
      _0x5b7af9._forwardZ = _0x244494;
      _0x5b7af9._upX = _0x1f9706;
      _0x5b7af9._upY = _0x25d21e;
      _0x5b7af9._upZ = _0xf2200f;
    }
  }
  function _0x277044(_0x308b88, _0x1c4ef0, _0x1f91ac) {
    if (_0x29e580.audioWebEnabled == 0) {
      return;
    }
    var _0x3fe5a1 = _0x29e580.audioContext.listener;
    if (_0x3fe5a1.positionX) {
      if (_0x3fe5a1.positionX.value !== _0x308b88) {
        _0x3fe5a1.positionX.value = _0x308b88;
      }
      if (_0x3fe5a1.positionY.value !== _0x1c4ef0) {
        _0x3fe5a1.positionY.value = _0x1c4ef0;
      }
      if (_0x3fe5a1.positionZ.value !== _0x1f91ac) {
        _0x3fe5a1.positionZ.value = _0x1f91ac;
      }
    } else if (_0x3fe5a1._positionX !== _0x308b88 || _0x3fe5a1._positionY !== _0x1c4ef0 || _0x3fe5a1._positionZ !== _0x1f91ac) {
      _0x3fe5a1.setPosition(_0x308b88, _0x1c4ef0, _0x1f91ac);
      _0x3fe5a1._positionX = _0x308b88;
      _0x3fe5a1._positionY = _0x1c4ef0;
      _0x3fe5a1._positionZ = _0x1f91ac;
    }
  }
  function _0x156802(_0x2ad634, _0x19c031) {
    if (_0x29e580.audioWebEnabled == 0) {
      return;
    }
    var _0x3c7276 = _0x29e580.audioInstances[_0x2ad634];
    _0x3c7276.setLoop(_0x19c031);
  }
  function _0x212dcc(_0x28b92e, _0x364624, _0x2463fd) {
    if (_0x29e580.audioWebEnabled == 0) {
      return;
    }
    var _0x1d1287 = _0x29e580.audioInstances[_0x28b92e];
    _0x1d1287.setLoopPoints(_0x364624, _0x2463fd);
  }
  function _0x3c8b55(_0x192b6f, _0x4d320d) {
    if (_0x29e580.audioWebEnabled == 0) {
      return;
    }
    var _0x40a09b = _0x29e580.audioInstances[_0x192b6f];
    if (_0x4d320d != _0x40a09b.isPaused()) {
      if (_0x4d320d) {
        _0x40a09b.pause();
      } else {
        _0x40a09b.resume();
      }
    }
  }
  function _0x44033a(_0x161792, _0x28d772) {
    if (_0x29e580.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x4da57c = _0x29e580.audioInstances[_0x161792];
      _0x4da57c.setPitch(_0x28d772);
    } catch (_0xdf2dae) {
      console.error("JS_Sound_SetPitch(channel=" + _0x161792 + ", pitch=" + _0x28d772 + ") threw an exception: " + _0xdf2dae);
    }
  }
  function _0x11035f(_0x423875, _0x102837, _0x20216e, _0x1b4530) {
    if (_0x29e580.audioWebEnabled == 0) {
      return;
    }
    var _0x34b106 = _0x29e580.audioInstances[_0x423875];
    _0x34b106.setPosition(_0x102837, _0x20216e, _0x1b4530);
  }
  function _0x277fa0(_0x4daba2, _0x325208) {
    if (_0x29e580.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0xb86896 = _0x29e580.audioInstances[_0x4daba2];
      _0xb86896.setVolume(_0x325208);
    } catch (_0x28771f) {
      console.error("JS_Sound_SetVolume(channel=" + _0x4daba2 + ", volume=" + _0x325208 + ") threw an exception: " + _0x28771f);
    }
  }
  function _0x5e36f8(_0x2956f6, _0x58ac31) {
    if (_0x29e580.audioWebEnabled == 0) {
      return;
    }
    var _0x3ea97a = _0x29e580.audioInstances[_0x2956f6];
    _0x3ea97a.stop(_0x58ac31);
  }
  function _0x11f2d9(_0x47c590, _0x224868) {
    var _0x17d093 = _0x4141f5.SystemInfo.browser;
    if (_0x47c590) {
      _0x3c7021(_0x17d093, _0x47c590, _0x224868);
    }
    return _0x4da9ba(_0x17d093);
  }
  function _0x368c2a(_0xc98636, _0x256d9c) {
    var _0x313ed5 = _0x4141f5.SystemInfo.browserVersion;
    if (_0xc98636) {
      _0x3c7021(_0x313ed5, _0xc98636, _0x256d9c);
    }
    return _0x4da9ba(_0x313ed5);
  }
  function _0x3d3f43(_0x9e1459, _0x384c42, _0x14d558) {
    var _0x34e4cc = _0xa8c6ca(_0x9e1459);
    var _0x333f01 = _0x34e4cc == "#canvas" ? _0x4141f5.canvas : document.querySelector(_0x34e4cc);
    var _0x19d893 = 0;
    var _0x4cbc9d = 0;
    if (_0x333f01) {
      var _0x14b159 = _0x333f01.getBoundingClientRect();
      _0x19d893 = _0x14b159.width;
      _0x4cbc9d = _0x14b159.height;
    }
    _0x2862c3[_0x384c42 >> 3] = _0x19d893;
    _0x2862c3[_0x14d558 >> 3] = _0x4cbc9d;
  }
  function _0x3a5f46(_0x294e3e, _0x117485) {
    if (_0x294e3e) {
      _0x3c7021("https://games.ofree.io/escape-road-3/game.html", _0x294e3e, _0x117485);
    }
    return _0x4da9ba("https://games.ofree.io/escape-road-3/game.html");
  }
  function _0x29a698(_0x23ae3, _0x2bf508) {
    var _0x453156 = _0x4141f5.SystemInfo.gpu;
    if (_0x23ae3) {
      _0x3c7021(_0x453156, _0x23ae3, _0x2bf508);
    }
    return _0x4da9ba(_0x453156);
  }
  function _0x1b2ab5(_0x158dfa, _0x34bdc5) {
    var _0x71672c = _0x4141f5.SystemInfo.language;
    if (_0x158dfa) {
      _0x3c7021(_0x71672c, _0x158dfa, _0x34bdc5);
    }
    return _0x4da9ba(_0x71672c);
  }
  function _0x329c15() {
    return _0x4141f5.matchWebGLToCanvasSize || _0x4141f5.matchWebGLToCanvasSize === undefined;
  }
  function _0xc5c20() {
    return _0x42b281.length / 1048576;
  }
  function _0x1f0c7d(_0x43318b, _0x19e8f1) {
    var _0x13a829 = _0x4141f5.SystemInfo.os + " " + _0x4141f5.SystemInfo.osVersion;
    if (_0x43318b) {
      _0x3c7021(_0x13a829, _0x43318b, _0x19e8f1);
    }
    return _0x4da9ba(_0x13a829);
  }
  function _0x5f770d() {
    if (_0x4141f5.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0x4141f5.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0x3bd802(_0x38bb3e, _0x3abd77) {
    _0x2862c3[_0x38bb3e >> 3] = _0x4141f5.SystemInfo.width;
    _0x2862c3[_0x3abd77 >> 3] = _0x4141f5.SystemInfo.height;
  }
  function _0x25ec68(_0x3321dd, _0x878853) {
    if (_0x3321dd) {
      _0x3c7021(_0x4141f5.streamingAssetsUrl, _0x3321dd, _0x878853);
    }
    return _0x4da9ba(_0x4141f5.streamingAssetsUrl);
  }
  function _0x3a3968() {
    var _0x2779e4 = _0xd640f0.getExtension("WEBGL_compressed_texture_astc");
    if (_0x2779e4 && _0x2779e4.getSupportedProfiles) {
      return _0x2779e4.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0x422d59() {
    return _0x4141f5.SystemInfo.hasCursorLock;
  }
  function _0x13be85() {
    return _0x4141f5.SystemInfo.hasFullscreen;
  }
  function _0x4c6fa3() {
    return _0x4141f5.SystemInfo.hasWebGL;
  }
  function _0x2970ae() {
    return _0x4141f5.SystemInfo.mobile;
  }
  function _0x2edb2b() {
    return !!_0x4141f5.shouldQuit;
  }
  var _0x15980c = {};
  var _0x3072bd = [];
  var _0x2dc4b0 = [];
  function _0x4b7812(_0x4f1e67) {
    _0x4f1e67 = _0xa8c6ca(_0x4f1e67);
    if (_0x3072bd.indexOf(_0x4f1e67) != -1) {
      return true;
    }
    if (_0x2dc4b0.indexOf(_0x4f1e67) != -1) {
      return false;
    }
    var _0x4a31c4 = document.createElement("video");
    var _0x3ca380 = _0x4a31c4.canPlayType(_0x4f1e67);
    if (_0x3ca380) {
      _0x3072bd.push(_0x4f1e67);
    } else {
      _0x2dc4b0.push(_0x4f1e67);
    }
    return !!_0x3ca380;
  }
  var _0x5a3748 = 0;
  function _0x4d103f() {
    if (this.onendedCallback) {
      _0xa9e541(this.onendedCallback, this.onendedRef);
    }
  }
  var _0x46bea5 = null;
  function _0x762cab(_0x4f6196) {
    var _0x5ac815 = _0xa8c6ca(_0x4f6196);
    var _0x3b7acb = document.createElement("video");
    _0x3b7acb.style.display = "none";
    _0x3b7acb.src = _0x5ac815;
    _0x3b7acb.muted = true;
    _0x3b7acb.setAttribute("muted", "");
    _0x3b7acb.setAttribute("playsinline", "");
    _0x3b7acb.crossOrigin = "anonymous";
    _0x15980c[++_0x5a3748] = _0x3b7acb;
    if (_0x46bea5 == null) {
      _0x46bea5 = _0x4141f5.SystemInfo.browser == "Chrome" || _0x4141f5.SystemInfo.browser == "Edge";
    }
    return _0x5a3748;
  }
  var _0x128308 = {};
  function _0x303e14(_0x4427d4) {
    _0x128308[_0x4427d4].play().then(function () {
      _0x565d99(_0x4427d4);
    });
  }
  function _0x56245c() {
    for (var _0x170584 in _0x128308) {
      if (_0x128308.hasOwnProperty(_0x170584)) {
        _0x303e14(_0x170584);
      }
    }
  }
  function _0x565d99(_0x24c25d) {
    delete _0x128308[_0x24c25d];
    if (Object.keys(_0x128308).length == 0) {
      window.removeEventListener("mousedown", _0x56245c);
    }
  }
  function _0x37627b(_0x449967) {
    var _0x8dc538 = _0x15980c[_0x449967];
    if (_0x8dc538.loopEndPollInterval) {
      clearInterval(_0x8dc538.loopEndPollInterval);
    }
    _0x565d99(_0x449967);
    _0x8dc538.src = "";
    delete _0x8dc538.onendedCallback;
    _0x8dc538.onended = _0x8dc538.onerror = _0x8dc538.oncanplay = _0x8dc538.onseeked = null;
    delete _0x15980c[_0x449967];
  }
  function _0x5f519c(_0x37abdd) {
    return _0x15980c[_0x37abdd].duration;
  }
  function _0x37b08f(_0x5d2b07, _0x50421e, _0x3273af) {
    var _0xe7159c = _0x15980c[_0x5d2b07];
    if (!_0xe7159c.enabledTracks) {
      _0xe7159c.enabledTracks = [];
    }
    while (_0xe7159c.enabledTracks.length <= _0x50421e) {
      _0xe7159c.enabledTracks.push(true);
    }
    _0xe7159c.enabledTracks[_0x50421e] = _0x3273af;
    var _0xe328c9 = _0xe7159c.audioTracks;
    if (!_0xe328c9) {
      return;
    }
    var _0x25b241 = _0xe328c9[_0x50421e];
    if (_0x25b241) {
      _0x25b241.enabled = _0x3273af ? true : false;
    }
  }
  function _0x1ba98d(_0x4faadb, _0x1ea54f) {
    var _0x3a4ac1 = _0x15980c[_0x4faadb].audioTracks;
    if (!_0x3a4ac1) {
      return "";
    }
    var _0x3ac566 = _0x3a4ac1[_0x1ea54f];
    if (_0x3ac566) {
      return _0x3ac566.language;
    } else {
      return "";
    }
  }
  function _0x28fba5(_0x57cb04) {
    var _0x511712 = _0x15980c[_0x57cb04].audioTracks;
    if (_0x511712) {
      return _0x511712.length;
    } else {
      return 1;
    }
  }
  function _0x3fa22b(_0x5ba832) {
    return _0x15980c[_0x5ba832].videoHeight;
  }
  function _0x29d391(_0x27cdaa) {
    var _0x4e1e48 = _0x15980c[_0x27cdaa];
    return !_0x4e1e48.paused && !_0x4e1e48.ended;
  }
  function _0x256e5e(_0x5265d3) {
    var _0x56dc7b = _0x15980c[_0x5265d3];
    var _0x6cab1e = /(iPhone|iPad)/i.test(navigator.userAgent) ? _0x56dc7b.HAVE_METADATA : _0x56dc7b.HAVE_ENOUGH_DATA;
    if (!_0x56dc7b.isReady && _0x56dc7b.readyState >= _0x6cab1e) {
      _0x56dc7b.isReady = true;
    }
    return _0x56dc7b.isReady;
  }
  function _0x502906(_0x376b55) {
    var _0x472bff = _0x15980c[_0x376b55];
    _0x472bff.pause();
    _0x565d99(_0x376b55);
    if (_0x472bff.loopEndPollInterval) {
      clearInterval(_0x472bff.loopEndPollInterval);
    }
  }
  function _0x1ddb3d(_0x240957, _0xffb69d) {
    var _0x477086 = _0x15980c[_0x240957];
    if (_0x477086.loopEndPollInterval) {
      clearInterval(_0x477086.loopEndPollInterval);
    }
    _0x477086.loop = _0xffb69d;
    if (_0xffb69d) {
      _0x477086.loopEndPollInterval = setInterval(function () {
        var _0x5c1a76 = _0x477086.currentTime;
        var _0x167256 = _0x477086.lastSeenPlaybackTime;
        if (_0x5c1a76 < _0x167256) {
          var _0x1714f3 = _0x477086.duration;
          var _0x384220 = 0.2;
          var _0xfbfc2e = _0x384220 * _0x1714f3;
          var _0x43c259 = _0x1714f3 - _0xfbfc2e;
          if (_0x5c1a76 < _0xfbfc2e && _0x167256 > _0x43c259) {
            _0x4d103f.apply(_0x477086);
          }
        }
        _0x477086.lastSeenPlaybackTime = _0x477086.currentTime;
      }, 1000 / 30);
      _0x477086.lastSeenPlaybackTime = _0x477086.currentTime;
      _0x477086.onended = null;
    } else {
      _0x477086.onended = _0x4d103f;
    }
  }
  function _0xd2fea6(_0xb39321) {
    if (!_0xb39321.enabledTracks) {
      return false;
    }
    for (var _0x867661 = 0; _0x867661 < _0xb39321.enabledTracks.length; ++_0x867661) {
      if (_0xb39321.enabledTracks[_0x867661]) {
        return false;
      }
    }
    return true;
  }
  function _0x1b4507(_0x4d36f3, _0x4faba4) {
    if (Object.keys(_0x128308).length == 0) {
      window.addEventListener("mousedown", _0x56245c);
    }
    _0x128308[_0x4d36f3] = _0x4faba4;
  }
  function _0x455dd1(_0x30c401, _0x3ec681) {
    var _0x3b2adc = _0x15980c[_0x30c401];
    _0x3b2adc.muted = _0x3ec681 || _0xd2fea6(_0x3b2adc);
    var _0x201945 = _0x3b2adc.play();
    if (_0x201945) {
      _0x201945.catch(function (_0x48f774) {
        if (_0x48f774.name == "NotAllowedError") {
          _0x1b4507(_0x30c401, _0x3b2adc);
        }
      });
    }
    _0x1ddb3d(_0x30c401, _0x3b2adc.loop);
  }
  function _0x5e7a38(_0x5df13c, _0x3413c6) {
    var _0x422a19 = _0x15980c[_0x5df13c];
    _0x422a19.lastSeenPlaybackTime = _0x422a19.currentTime = _0x3413c6;
  }
  function _0x4f545f(_0x4aa188, _0x47ae27, _0x45307a) {
    var _0x2e7252 = _0x15980c[_0x4aa188];
    _0x2e7252.onendedCallback = _0x45307a;
    _0x2e7252.onendedRef = _0x47ae27;
  }
  function _0x1b6ebc(_0x4381ec, _0x542fa6, _0x133018) {
    _0x15980c[_0x4381ec].onerror = function (_0x61eea3) {
      _0x6f8fd4(_0x133018, _0x542fa6, _0x61eea3.target.error.code);
    };
  }
  function _0x117230(_0x3dd2f9, _0x1f6c7e) {
    var _0x3f20b4 = _0x15980c[_0x3dd2f9];
    _0x3f20b4.muted = _0x1f6c7e || _0xd2fea6(_0x3f20b4);
  }
  function _0x1a297a(_0x26772e, _0x56ee7a) {
    _0x15980c[_0x26772e].playbackRate = _0x56ee7a;
  }
  function _0x187ec7(_0x317fa6, _0x4912f0, _0x57857f) {
    _0x15980c[_0x317fa6].oncanplay = function () {
      _0xa9e541(_0x57857f, _0x4912f0);
    };
  }
  function _0x69f636(_0xc8ce09, _0x22cd70, _0x1656e1) {
    _0x15980c[_0xc8ce09].onseeked = function () {
      var _0xbbe5b8 = _0x15980c[_0xc8ce09];
      _0xbbe5b8.lastUpdateTextureTime = null;
      _0xa9e541(_0x1656e1, _0x22cd70);
    };
  }
  function _0x37fc64(_0x32dee4, _0x22e4dc) {
    _0x15980c[_0x32dee4].volume = _0x22e4dc;
  }
  function _0x2a8438(_0xb0a511) {
    return _0x15980c[_0xb0a511].currentTime;
  }
  function _0x9bee9a() {
    var _0x54a3bf = _0xd640f0.createTexture();
    _0xd640f0.bindTexture(_0xd640f0.TEXTURE_2D, _0x54a3bf);
    _0xd640f0.texParameteri(_0xd640f0.TEXTURE_2D, _0xd640f0.TEXTURE_WRAP_S, _0xd640f0.CLAMP_TO_EDGE);
    _0xd640f0.texParameteri(_0xd640f0.TEXTURE_2D, _0xd640f0.TEXTURE_WRAP_T, _0xd640f0.CLAMP_TO_EDGE);
    _0xd640f0.texParameteri(_0xd640f0.TEXTURE_2D, _0xd640f0.TEXTURE_MIN_FILTER, _0xd640f0.LINEAR);
    return _0x54a3bf;
  }
  var _0x59a0dc = null;
  var _0x48f027 = null;
  var _0x2c9c49 = null;
  var _0x7b3108 = null;
  var _0x3d0a41 = null;
  function _0x2a36f9(_0x154968, _0xfc1752, _0x109039) {
    var _0x38393f = _0x15980c[_0x154968];
    if (!(_0x38393f.videoWidth > 0) || !(_0x38393f.videoHeight > 0)) {
      return false;
    }
    if (_0x38393f.lastUpdateTextureTime === _0x38393f.currentTime) {
      return false;
    }
    if (_0x38393f.seeking) {
      return false;
    }
    _0x38393f.lastUpdateTextureTime = _0x38393f.currentTime;
    _0xd640f0.pixelStorei(_0xd640f0.UNPACK_FLIP_Y_WEBGL, true);
    var _0x2321b6 = _0x109039 ? _0x46bea5 ? _0xd640f0.RGBA : _0xd640f0.RGB : _0xd640f0.RGBA;
    var _0x40cd75 = _0x109039 ? _0x46bea5 ? _0xd640f0.RGBA : _0xd640f0.RGB : _0xd640f0.RGBA;
    if (_0x38393f.previousUploadedWidth != _0x38393f.videoWidth || _0x38393f.previousUploadedHeight != _0x38393f.videoHeight) {
      _0xd640f0.deleteTexture(_0xa194ab.textures[_0xfc1752]);
      var _0x10d52c = _0x9bee9a();
      _0x10d52c.name = _0xfc1752;
      _0xa194ab.textures[_0xfc1752] = _0x10d52c;
      _0x38393f.previousUploadedWidth = _0x38393f.videoWidth;
      _0x38393f.previousUploadedHeight = _0x38393f.videoHeight;
      if (_0x109039) {
        _0xd640f0.texImage2D(_0xd640f0.TEXTURE_2D, 0, _0x2321b6, _0x38393f.videoWidth, _0x38393f.videoHeight, 0, _0x40cd75, _0xd640f0.UNSIGNED_BYTE, null);
        if (!_0x59a0dc) {
          _0x59a0dc = _0x9bee9a();
        } else {
          _0xd640f0.bindTexture(_0xd640f0.TEXTURE_2D, _0x59a0dc);
        }
      }
      _0xd640f0.texImage2D(_0xd640f0.TEXTURE_2D, 0, _0x2321b6, _0x40cd75, _0xd640f0.UNSIGNED_BYTE, _0x38393f);
    } else {
      if (_0x109039) {
        if (!_0x59a0dc) {
          _0x59a0dc = _0x9bee9a();
        } else {
          _0xd640f0.bindTexture(_0xd640f0.TEXTURE_2D, _0x59a0dc);
        }
      } else {
        _0xd640f0.bindTexture(_0xd640f0.TEXTURE_2D, _0xa194ab.textures[_0xfc1752]);
      }
      _0xd640f0.texImage2D(_0xd640f0.TEXTURE_2D, 0, _0x2321b6, _0x40cd75, _0xd640f0.UNSIGNED_BYTE, _0x38393f);
    }
    _0xd640f0.pixelStorei(_0xd640f0.UNPACK_FLIP_Y_WEBGL, false);
    if (_0x109039) {
      if (_0x7b3108 == null) {
        var _0x349eb6 = "precision lowp float;\n  \t\t\t\tattribute vec2 vertexPositionNDC;\n  \t\t\t\tvarying vec2 vTexCoords;\n  \t\t\t\tconst vec2 scale = vec2(0.5, 0.5);\n  \t\t\t\tvoid main() {\n  \t\t\t\t    vTexCoords = vertexPositionNDC * scale + scale; // scale vertex attribute to [0,1] range\n  \t\t\t\t    gl_Position = vec4(vertexPositionNDC, 0.0, 1.0);\n  \t\t\t\t}";
        var _0xa9ef32 = "precision mediump float;\n  \t\t\t\tuniform sampler2D colorMap;\n  \t\t\t\tvarying vec2 vTexCoords;\n  \t\t\t\tvec4 toLinear(vec4 sRGB) {\n  \t\t\t\t    vec3 c = sRGB.rgb;\n  \t\t\t\t    return vec4(c * (c * (c * 0.305306011 + 0.682171111) + 0.012522878), sRGB.a);\n  \t\t\t\t}\n  \t\t\t\tvoid main() {\n  \t\t\t\t    gl_FragColor = toLinear(texture2D(colorMap, vTexCoords));\n  \t\t\t\t}";
        var _0x4eed27 = _0xd640f0.createShader(_0xd640f0.VERTEX_SHADER);
        _0xd640f0.shaderSource(_0x4eed27, _0x349eb6);
        _0xd640f0.compileShader(_0x4eed27);
        var _0x240963 = _0xd640f0.createShader(_0xd640f0.FRAGMENT_SHADER);
        _0xd640f0.shaderSource(_0x240963, _0xa9ef32);
        _0xd640f0.compileShader(_0x240963);
        _0x7b3108 = _0xd640f0.createProgram();
        _0xd640f0.attachShader(_0x7b3108, _0x4eed27);
        _0xd640f0.attachShader(_0x7b3108, _0x240963);
        _0xd640f0.linkProgram(_0x7b3108);
        _0x3d0a41 = _0xd640f0.getAttribLocation(_0x7b3108, "vertexPositionNDC");
      }
      if (_0x2c9c49 == null) {
        _0x2c9c49 = _0xd640f0.createBuffer();
        _0xd640f0.bindBuffer(_0xd640f0.ARRAY_BUFFER, _0x2c9c49);
        var _0x156dae = [1, 1, -1, 1, -1, -1, -1, -1, 1, -1, 1, 1];
        _0xd640f0.bufferData(_0xd640f0.ARRAY_BUFFER, new Float32Array(_0x156dae), _0xd640f0.STATIC_DRAW);
      }
      if (!_0x48f027) {
        _0x48f027 = _0xd640f0.createFramebuffer();
      }
      _0xd640f0.bindFramebuffer(_0xd640f0.FRAMEBUFFER, _0x48f027);
      _0xd640f0.framebufferTexture2D(_0xd640f0.FRAMEBUFFER, _0xd640f0.COLOR_ATTACHMENT0, _0xd640f0.TEXTURE_2D, _0xa194ab.textures[_0xfc1752], 0);
      _0xd640f0.bindTexture(_0xd640f0.TEXTURE_2D, _0x59a0dc);
      _0xd640f0.viewport(0, 0, _0x38393f.videoWidth, _0x38393f.videoHeight);
      _0xd640f0.useProgram(_0x7b3108);
      _0xd640f0.bindBuffer(_0xd640f0.ARRAY_BUFFER, _0x2c9c49);
      _0xd640f0.enableVertexAttribArray(_0x3d0a41);
      _0xd640f0.vertexAttribPointer(_0x3d0a41, 2, _0xd640f0.FLOAT, false, 0, 0);
      _0xd640f0.drawArrays(_0xd640f0.TRIANGLES, 0, 6);
      _0xd640f0.viewport(0, 0, _0xd640f0.canvas.width, _0xd640f0.canvas.height);
      _0xd640f0.bindFramebuffer(_0xd640f0.FRAMEBUFFER, null);
    }
    return true;
  }
  function _0x57255e(_0x1f507a) {
    return _0x15980c[_0x1f507a].videoWidth;
  }
  var _0x5aad17 = {};
  function _0x4e4726(_0x455e69) {
    var _0x21c0ee = _0x5aad17[_0x455e69];
    return _0x21c0ee && _0x21c0ee.video.videoWidth > 0 && _0x21c0ee.video.videoHeight > 0;
  }
  function _0x35d8ab(_0x349f3b, _0x3cebf2, _0x5a2d00) {
    var _0x8c270e = _0x153de2[_0x349f3b];
    var _0x371b41 = _0x8c270e ? _0x8c270e.name : "(disconnected input #" + (_0x349f3b + 1) + ")";
    if (_0x3cebf2) {
      _0x3c7021(_0x371b41, _0x3cebf2, _0x5a2d00);
    }
    return _0x4da9ba(_0x371b41);
  }
  function _0x41649b(_0x4a6c38) {
    return _0x5aad17[_0x4a6c38] && _0x5aad17[_0x4a6c38].video.videoHeight;
  }
  function _0x16e8f8(_0x5cafef) {
    return _0x5aad17[_0x5cafef] && _0x5aad17[_0x5cafef].video.videoWidth;
  }
  function _0x1c347d() {
    var _0x36ae5c = 0;
    if (!_0x3af214) {
      console.warn("WebCam devices were used before being enumerated by the browser. The browser is likely pausing WebCam device enumeration due to the page being out of focus while the Unity application is being loaded in the background.\nIf you are a developer, you can ensure WebCam devices are enumerated by first requiring user interaction.\nSee https://github.com/w3c/mediacapture-main/issues/905 for details.");
      return _0x36ae5c;
    }
    Object.keys(_0x153de2).forEach(function (_0x1a4386) {
      _0x36ae5c = Math.max(_0x36ae5c, _0x153de2[_0x1a4386].id + 1);
    });
    return _0x36ae5c;
  }
  function _0x222de7(_0x2ac2ae, _0x50e2fa, _0x7fbd9b, _0x3b0343) {
    var _0x493ba1 = _0x5aad17[_0x2ac2ae];
    if (!_0x493ba1) {
      return;
    }
    var _0x440450 = performance.now();
    if (_0x440450 < _0x493ba1.nextFrameAvailableTime) {
      return;
    }
    _0x493ba1.nextFrameAvailableTime += _0x493ba1.frameLengthInMsecs;
    if (_0x493ba1.nextFrameAvailableTime < _0x440450) {
      _0x493ba1.nextFrameAvailableTime = _0x440450 + _0x493ba1.frameLengthInMsecs;
    }
    var _0x4006c0 = _0x493ba1.canvas;
    if (_0x4006c0.width != _0x7fbd9b || _0x4006c0.height != _0x3b0343 || !_0x493ba1.context2d) {
      _0x4006c0.width = _0x7fbd9b;
      _0x4006c0.height = _0x3b0343;
      _0x493ba1.context2d = _0x4006c0.getContext("2d");
    }
    var _0x28b6c7 = _0x493ba1.context2d;
    _0x28b6c7.drawImage(_0x493ba1.video, 0, 0, _0x493ba1.video.videoWidth, _0x493ba1.video.videoHeight, 0, 0, _0x7fbd9b, _0x3b0343);
    _0x42b281.set(_0x28b6c7.getImageData(0, 0, _0x7fbd9b, _0x3b0343).data, _0x50e2fa);
    return 1;
  }
  function _0x1db91f(_0x31ede5) {
    return _0x153de2[_0x31ede5].isFrontFacing;
  }
  function _0xd967ea(_0x4c95ba) {
    if (_0x5aad17[_0x4c95ba]) {
      ++_0x5aad17[_0x4c95ba].refCount;
      return;
    }
    if (!_0x153de2[_0x4c95ba]) {
      console.error("Cannot start video input with ID " + _0x4c95ba + ". No such ID exists! Existing video inputs are:");
      console.dir(_0x153de2);
      return;
    }
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: _0x153de2[_0x4c95ba].deviceId ? {
        deviceId: {
          exact: _0x153de2[_0x4c95ba].deviceId
        }
      } : true
    }).then(function (_0x357b15) {
      var _0x5e7c3a = document.createElement("video");
      _0x5e7c3a.srcObject = _0x357b15;
      if (/(iPhone|iPad|iPod)/.test(navigator.userAgent)) {
        _0x728a21("Applying iOS Safari specific workaround to video playback: https://bugs.webkit.org/show_bug.cgi?id=217578");
        _0x5e7c3a.setAttribute("playsinline", "");
      }
      _0x5e7c3a.play();
      var _0x441a29 = document.createElement("canvas");
      _0x5aad17[_0x4c95ba] = {
        video: _0x5e7c3a,
        canvas: document.createElement("canvas"),
        stream: _0x357b15,
        frameLengthInMsecs: 1000 / _0x357b15.getVideoTracks()[0].getSettings().frameRate,
        nextFrameAvailableTime: 0,
        refCount: 1
      };
    }).catch(function (_0x4b1881) {
      console.error("Unable to start video input! " + _0x4b1881);
    });
  }
  function _0x15c438(_0x56e4cb) {
    var _0x2533bf = _0x5aad17[_0x56e4cb];
    if (!_0x2533bf) {
      return;
    }
    if (--_0x2533bf.refCount <= 0) {
      _0x2533bf.video.pause();
      _0x2533bf.video.srcObject = null;
      _0x2533bf.stream.getVideoTracks().forEach(function (_0xaa0a9f) {
        _0xaa0a9f.stop();
      });
      delete _0x5aad17[_0x56e4cb];
    }
  }
  function _0x4e57e8() {
    return !!navigator.mediaDevices;
  }
  var _0x38af7d = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0x2acf17(_0x30cd51) {
    var _0x158f74 = _0x38af7d.abortControllers[_0x30cd51];
    if (!_0x158f74 || _0x158f74.signal.aborted) {
      return;
    }
    _0x158f74.abort();
  }
  function _0x2c0125(_0x3f0b23, _0x269d20) {
    var _0x350c4a = _0xa8c6ca(_0x3f0b23);
    var _0x1dabb7 = _0xa8c6ca(_0x269d20);
    var _0x26e398 = new AbortController();
    var _0x113cbe = {
      url: _0x350c4a,
      init: {
        method: _0x1dabb7,
        signal: _0x26e398.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0x38af7d.abortControllers[_0x38af7d.nextRequestId] = _0x26e398;
    _0x38af7d.requests[_0x38af7d.nextRequestId] = _0x113cbe;
    return _0x38af7d.nextRequestId++;
  }
  function _0x4c1827(_0x385077) {
    var _0x20e5f9 = _0x38af7d.responses[_0x385077];
    if (!_0x20e5f9) {
      return "";
    }
    if (_0x20e5f9.headerString) {
      return _0x20e5f9.headerString;
    }
    var _0x25922d = "";
    var _0x150c76 = _0x20e5f9.headers.entries();
    for (var _0x7250d8 = _0x150c76.next(); !_0x7250d8.done; _0x7250d8 = _0x150c76.next()) {
      _0x25922d += _0x7250d8.value[0] + ": " + _0x7250d8.value[1] + "\r\n";
    }
    _0x20e5f9.headerString = _0x25922d;
    return _0x25922d;
  }
  function _0x1db62f(_0x27d85f, _0x49d4fd, _0x133f85, _0x21e84e, _0x5cb8d9) {
    var _0x48537a = _0x38af7d.responses[_0x27d85f];
    if (!_0x48537a) {
      _0x3c7021("", _0x49d4fd, _0x133f85);
      _0x3c7021("", _0x21e84e, _0x5cb8d9);
      return;
    }
    if (_0x49d4fd) {
      var _0x258ab0 = _0x4c1827(_0x27d85f);
      _0x3c7021(_0x258ab0, _0x49d4fd, _0x133f85);
    }
    if (_0x21e84e) {
      _0x3c7021(_0x48537a.url, _0x21e84e, _0x5cb8d9);
    }
  }
  function _0x15924f(_0x4b34ec, _0x58b921) {
    var _0x577dab = _0x38af7d.responses[_0x4b34ec];
    if (!_0x577dab) {
      _0x4d8b01[_0x58b921 >> 2] = 0;
      _0x4d8b01[(_0x58b921 >> 2) + 1] = 0;
      return;
    }
    var _0xa7407c = _0x4c1827(_0x4b34ec);
    _0x4d8b01[_0x58b921 >> 2] = _0x4da9ba(_0xa7407c);
    _0x4d8b01[(_0x58b921 >> 2) + 1] = _0x4da9ba(_0x577dab.url);
  }
  function _0x574768(_0x4f19a9) {
    if (_0x38af7d.timer[_0x4f19a9]) {
      clearTimeout(_0x38af7d.timer[_0x4f19a9]);
    }
    delete _0x38af7d.requests[_0x4f19a9];
    delete _0x38af7d.responses[_0x4f19a9];
    delete _0x38af7d.abortControllers[_0x4f19a9];
    delete _0x38af7d.timer[_0x4f19a9];
  }
  function _0x2b44dd(_0xefd511, _0x4ebfb4, _0x43a428, _0x442af6, _0x5c71c1, _0x3349c8) {
    var _0x21d9ae = _0x38af7d.requests[_0xefd511];
    var _0x2e0cc9 = _0x38af7d.abortControllers[_0xefd511];
    function _0xd1b80f(_0xbcbc19) {
      if (!_0x21d9ae.tempBuffer) {
        const _0x1bd4eb = Math.max(_0xbcbc19, 1024);
        _0x21d9ae.tempBuffer = _0x48c1ae(_0x1bd4eb);
        _0x21d9ae.tempBufferSize = _0x1bd4eb;
      }
      if (_0x21d9ae.tempBufferSize < _0xbcbc19) {
        _0x59ed75(_0x21d9ae.tempBuffer);
        _0x21d9ae.tempBuffer = _0x48c1ae(_0xbcbc19);
        _0x21d9ae.tempBufferSize = _0xbcbc19;
      }
      return _0x21d9ae.tempBuffer;
    }
    function _0x3e1c84() {
      if (_0x38af7d.timer[_0xefd511]) {
        clearTimeout(_0x38af7d.timer[_0xefd511]);
        delete _0x38af7d.timer[_0xefd511];
      }
    }
    function _0x511571(_0xd57c4a, _0x387541) {
      _0x3e1c84();
      if (!_0x5c71c1) {
        return;
      }
      var _0x1499a0 = 0;
      if (_0x21d9ae.init.enableStreamingDownload) {
        _0x26f7f2("viiiiii", _0x5c71c1, [_0x442af6, _0xd57c4a.status, 0, _0x387541.length, 0, _0x1499a0]);
      } else if (_0x387541.length != 0) {
        var _0x27f18e = _0x48c1ae(_0x387541.length);
        _0x42b281.set(_0x387541, _0x27f18e);
        _0x26f7f2("viiiiii", _0x5c71c1, [_0x442af6, _0xd57c4a.status, _0x27f18e, _0x387541.length, 0, _0x1499a0]);
      } else {
        _0x26f7f2("viiiiii", _0x5c71c1, [_0x442af6, _0xd57c4a.status, 0, 0, 0, _0x1499a0]);
      }
      if (_0x21d9ae.tempBuffer) {
        _0x59ed75(_0x21d9ae.tempBuffer);
      }
    }
    function _0x3bf0ed(_0x319b1e, _0x35c1ae) {
      _0x3e1c84();
      if (!_0x5c71c1) {
        return;
      }
      var _0x293453 = _0x4da9ba(_0x319b1e) + 1;
      var _0x597e66 = _0x48c1ae(_0x293453);
      _0x3c7021(_0x319b1e, _0x597e66, _0x293453);
      _0x26f7f2("viiiiii", _0x5c71c1, [_0x442af6, 500, 0, 0, _0x597e66, _0x35c1ae]);
      _0x59ed75(_0x597e66);
      if (_0x21d9ae.tempBuffer) {
        _0x59ed75(_0x21d9ae.tempBuffer);
      }
    }
    function _0x455f05(_0x1c7802) {
      if (!_0x3349c8 || !_0x1c7802.lengthComputable) {
        return;
      }
      var _0x5717e4 = _0x1c7802.response;
      _0x38af7d.responses[_0xefd511] = _0x5717e4;
      if (_0x1c7802.chunk) {
        var _0x2ca5c8 = _0xd1b80f(_0x1c7802.chunk.length);
        _0x42b281.set(_0x1c7802.chunk, _0x2ca5c8);
        _0x26f7f2("viiiiii", _0x3349c8, [_0x442af6, _0x5717e4.status, _0x1c7802.loaded, _0x1c7802.total, _0x2ca5c8, _0x1c7802.chunk.length]);
      } else {
        _0x26f7f2("viiiiii", _0x3349c8, [_0x442af6, _0x5717e4.status, _0x1c7802.loaded, _0x1c7802.total, 0, 0]);
      }
    }
    try {
      if (_0x43a428 > 0) {
        var _0x1c04e4 = _0x42b281.subarray(_0x4ebfb4, _0x4ebfb4 + _0x43a428);
        _0x21d9ae.init.body = new Blob([_0x1c04e4]);
      }
      if (_0x21d9ae.timeout) {
        _0x38af7d.timer[_0xefd511] = setTimeout(function () {
          _0x21d9ae.isTimedOut = true;
          _0x2e0cc9.abort();
        }, _0x21d9ae.timeout);
      }
      var _0x478d45 = _0x4141f5.fetchWithProgress;
      _0x21d9ae.init.onProgress = _0x455f05;
      if (_0x4141f5.companyName && _0x4141f5.productName && _0x4141f5.cachedFetch) {
        _0x478d45 = _0x4141f5.cachedFetch;
        _0x21d9ae.init.companyName = _0x4141f5.companyName;
        _0x21d9ae.init.productName = _0x4141f5.productName;
        _0x21d9ae.control = _0x4141f5.cacheControl(_0x21d9ae.url);
      }
      _0x478d45(_0x21d9ae.url, _0x21d9ae.init).then(function (_0x4b358e) {
        _0x38af7d.responses[_0xefd511] = _0x4b358e;
        _0x511571(_0x4b358e, _0x4b358e.parsedBody);
      }).catch(function (_0x1f14d8) {
        var _0x13a81c = 2;
        var _0x4e14b0 = 17;
        var _0x5874ed = 14;
        if (_0x21d9ae.isTimedOut) {
          _0x3bf0ed("Connection timed out.", _0x5874ed);
        } else if (_0x2e0cc9.signal.aborted) {
          _0x3bf0ed("Aborted.", _0x4e14b0);
        } else {
          _0x3bf0ed(_0x1f14d8.message, _0x13a81c);
        }
      });
    } catch (_0x3f600a) {
      var _0x22d8f8 = 2;
      _0x3bf0ed(_0x3f600a.message, _0x22d8f8);
    }
  }
  function _0x3b66ac(_0x51bed1, _0x58abde) {
    var _0xf17eb7 = _0x38af7d.requests[_0x51bed1];
    if (!_0xf17eb7) {
      return;
    }
    _0xf17eb7.init.redirect = _0x58abde === 0 ? "error" : "follow";
  }
  function _0x44bc79(_0x44b930, _0x4cde37, _0x3f021f) {
    var _0x2e5f96 = _0x38af7d.requests[_0x44b930];
    if (!_0x2e5f96) {
      return;
    }
    var _0x239594 = _0xa8c6ca(_0x4cde37);
    var _0x434f64 = _0xa8c6ca(_0x3f021f);
    _0x2e5f96.init.headers[_0x239594] = _0x434f64;
  }
  function _0x353d7e(_0x687f16, _0x793cf8) {
    var _0x204b6f = _0x38af7d.requests[_0x687f16];
    if (!_0x204b6f) {
      return;
    }
    _0x204b6f.timeout = _0x793cf8;
  }
  function _0x338085(_0x17c72f, _0x1356f2, _0x423b84, _0x2158b8) {
    var _0x5db732 = _0xa8c6ca(_0x17c72f);
    var _0x57ec63 = _0xa8c6ca(_0x1356f2);
    var _0x1a487b = _0xa8c6ca(_0x423b84);
    var _0x2be5c5 = _0xa8c6ca(_0x2158b8);
    try {
      firebase.database().ref(_0x5db732).on("child_added", function (_0x525ccf) {
        window.unityInstance.SendMessage(_0x57ec63, _0x1a487b, JSON.stringify(_0x525ccf.val()));
      });
    } catch (_0x1c9311) {
      window.unityInstance.SendMessage(_0x57ec63, _0x2be5c5, JSON.stringify(_0x1c9311, Object.getOwnPropertyNames(_0x1c9311)));
    }
  }
  function _0x157765(_0xfbb311, _0x17bdc9, _0x3b5e41, _0x14d5a) {
    var _0x775bf1 = _0xa8c6ca(_0xfbb311);
    var _0x3411b0 = _0xa8c6ca(_0x17bdc9);
    var _0x5749a0 = _0xa8c6ca(_0x3b5e41);
    var _0x5c09c6 = _0xa8c6ca(_0x14d5a);
    try {
      firebase.database().ref(_0x775bf1).on("child_changed", function (_0x1a9fd1) {
        window.unityInstance.SendMessage(_0x3411b0, _0x5749a0, JSON.stringify(_0x1a9fd1.val()));
      });
    } catch (_0x4295c1) {
      window.unityInstance.SendMessage(_0x3411b0, _0x5c09c6, JSON.stringify(_0x4295c1, Object.getOwnPropertyNames(_0x4295c1)));
    }
  }
  function _0x24f436(_0x7fe976, _0x23c56f, _0x24efaa, _0x3659f8) {
    var _0x139d96 = _0xa8c6ca(_0x7fe976);
    var _0x4b5123 = _0xa8c6ca(_0x23c56f);
    var _0x4ef8bb = _0xa8c6ca(_0x24efaa);
    var _0x4c143f = _0xa8c6ca(_0x3659f8);
    try {
      firebase.database().ref(_0x139d96).on("child_removed", function (_0x140ac0) {
        window.unityInstance.SendMessage(_0x4b5123, _0x4ef8bb, JSON.stringify(_0x140ac0.val()));
      });
    } catch (_0x570ad8) {
      window.unityInstance.SendMessage(_0x4b5123, _0x4c143f, JSON.stringify(_0x570ad8, Object.getOwnPropertyNames(_0x570ad8)));
    }
  }
  function _0x506c53(_0x388c14, _0x34b70b, _0x14468b, _0x25544f, _0x186ca1) {
    var _0x3182c4 = _0xa8c6ca(_0x388c14);
    var _0x32be28 = _0xa8c6ca(_0x14468b);
    var _0x45e221 = _0xa8c6ca(_0x25544f);
    var _0x7db3d7 = _0xa8c6ca(_0x186ca1);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x3182c4 + "/collection/"] = firebase.firestore().collection(_0x3182c4).onSnapshot({
        includeMetadataChanges: _0x34b70b == 1
      }, function (_0x45434f) {
        var _0x3e42ff = {};
        _0x45434f.forEach(function (_0x57b463) {
          _0x3e42ff[_0x57b463.id] = _0x57b463.data();
        });
        window.unityInstance.SendMessage(_0x32be28, _0x45e221, JSON.stringify(_0x3e42ff));
      }, function (_0x2f2987) {
        window.unityInstance.SendMessage(_0x32be28, _0x7db3d7, JSON.stringify(_0x2f2987, Object.getOwnPropertyNames(_0x2f2987)));
      });
    } catch (_0x109cd1) {
      window.unityInstance.SendMessage(_0x32be28, _0x7db3d7, JSON.stringify(_0x109cd1, Object.getOwnPropertyNames(_0x109cd1)));
    }
  }
  function _0x505b75(_0x7e2ce2, _0x3488d7, _0x1267de, _0x55a9ce, _0x51fca1, _0x3e07f1) {
    var _0x2ddee7 = _0xa8c6ca(_0x7e2ce2);
    var _0x3c17b0 = _0xa8c6ca(_0x3488d7);
    var _0x2fd411 = _0xa8c6ca(_0x55a9ce);
    var _0x3bb066 = _0xa8c6ca(_0x51fca1);
    var _0x34251b = _0xa8c6ca(_0x3e07f1);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x2ddee7 + "/" + _0x3c17b0] = firebase.firestore().collection(_0x2ddee7).doc(_0x3c17b0).onSnapshot({
        includeMetadataChanges: _0x1267de == 1
      }, function (_0x3b0357) {
        window.unityInstance.SendMessage(_0x2fd411, _0x3bb066, JSON.stringify(_0x3b0357.data()));
      }, function (_0x1e4ed3) {
        window.unityInstance.SendMessage(_0x2fd411, _0x34251b, JSON.stringify(_0x1e4ed3, Object.getOwnPropertyNames(_0x1e4ed3)));
      });
    } catch (_0x4c9c47) {
      window.unityInstance.SendMessage(_0x2fd411, _0x34251b, JSON.stringify(_0x4c9c47, Object.getOwnPropertyNames(_0x4c9c47)));
    }
  }
  function _0x37032d(_0xda1793, _0x522e7a, _0x1f71b7, _0x3fb065) {
    var _0x357e30 = _0xa8c6ca(_0xda1793);
    var _0x26aeb3 = _0xa8c6ca(_0x522e7a);
    var _0x3c9136 = _0xa8c6ca(_0x1f71b7);
    var _0x5b1710 = _0xa8c6ca(_0x3fb065);
    try {
      firebase.database().ref(_0x357e30).on("value", function (_0xb9e268) {
        window.unityInstance.SendMessage(_0x26aeb3, _0x3c9136, JSON.stringify(_0xb9e268.val()));
      });
    } catch (_0x4271cc) {
      window.unityInstance.SendMessage(_0x26aeb3, _0x5b1710, JSON.stringify(_0x4271cc, Object.getOwnPropertyNames(_0x4271cc)));
    }
  }
  function _0xbe9f21(_0x401e1b) {
    var _0x4f5761 = _0xa8c6ca(_0x401e1b);
    firebaseLogEvent(_0x4f5761);
  }
  function _0x3ff36e(_0x185f8b, _0x5158f2) {
    var _0x23934e = _0xa8c6ca(_0x185f8b);
    var _0xb95cb = JSON.parse(_0xa8c6ca(_0x5158f2));
    firebaseLogEventParameter(_0x23934e, _0xb95cb);
  }
  function _0x19df1e(_0x419a66, _0x1eeb7d, _0x45fa3e, _0x12ea0b, _0x5726cf) {
    var _0x348e2a = _0xa8c6ca(_0x419a66);
    var _0x1f1b66 = _0xa8c6ca(_0x45fa3e);
    var _0x65add0 = _0xa8c6ca(_0x12ea0b);
    var _0x481cf2 = _0xa8c6ca(_0x5726cf);
    try {
      firebase.database().ref(_0x348e2a).transaction(function (_0x5688e5) {
        if (!isNaN(_0x5688e5)) {
          return _0x5688e5 + _0x1eeb7d;
        } else {
          return _0x1eeb7d;
        }
      }).then(function (_0x406626) {
        window.unityInstance.SendMessage(_0x1f1b66, _0x65add0, "Success: transaction run in " + _0x348e2a);
      });
    } catch (_0x5699fb) {
      window.unityInstance.SendMessage(_0x1f1b66, _0x481cf2, JSON.stringify(_0x5699fb, Object.getOwnPropertyNames(_0x5699fb)));
    }
  }
  function _0x43f44d(_0x242ca3, _0x1ec1b4, _0x158fa7) {
    var _0x3dc771 = _0xa8c6ca(_0x242ca3);
    var _0x1e3534 = _0xa8c6ca(_0x1ec1b4);
    var _0x5e15f6 = _0xa8c6ca(_0x158fa7);
    firebase.auth().onAuthStateChanged(function (_0x193158) {
      if (_0x193158) {
        window.unityInstance.SendMessage(_0x3dc771, _0x1e3534, JSON.stringify(_0x193158));
      } else {
        window.unityInstance.SendMessage(_0x3dc771, _0x5e15f6, "User signed out");
      }
    });
  }
  function _0x49d3b2(_0x3939c5) {
    window.wgUnityInstance = _0x4141f5;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x3939c5);
    } catch (_0x59e150) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x15ddfa = document.createElement("script");
      _0x15ddfa.addEventListener("load", function (_0x3c1149) {
        var _0x12ecd2 = document.createElement("script");
        _0x12ecd2.addEventListener("load", function (_0x55decd) {
          console.log("WGSDK: Development resources loaded.");
          _0x2d58cf(_0x3939c5, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x12ecd2);
        _0x12ecd2.src = window.GMSOFT_ADS_INFO.wgLibrary;
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x15ddfa);
      _0x15ddfa.src = window.GMSOFT_ADS_INFO.wgConf;
    }
  }
  function _0x2d58cf(_0x2db4b3, _0x4d16b3) {
    var _0x2d20c7;
    if (_0x4d16b3 === true) {
      _0x2d20c7 = _0x2db4b3;
    } else {
      _0x2d20c7 = _0xa8c6ca(_0x2db4b3);
    }
    setTimeout(function () {
      _0x49d3b2(_0x2d20c7);
    }, 250);
  }
  function _0x5ec08d(_0x35c05a, _0x2c9068, _0x10e1cd, _0x586e68, _0x2a4cec) {
    var _0x2d400a = _0xa8c6ca(_0x35c05a);
    var _0x2903a0 = _0xa8c6ca(_0x2c9068);
    var _0x191e9a = _0xa8c6ca(_0x10e1cd);
    var _0x3e848c = _0xa8c6ca(_0x586e68);
    var _0x495266 = _0xa8c6ca(_0x2a4cec);
    try {
      firebase.database().ref(_0x2d400a).set(JSON.parse(_0x2903a0)).then(function (_0x2047ae) {
        window.unityInstance.SendMessage(_0x191e9a, _0x3e848c, "Success: " + _0x2903a0 + " was posted to " + _0x2d400a);
      });
    } catch (_0x2babbc) {
      window.unityInstance.SendMessage(_0x191e9a, _0x495266, JSON.stringify(_0x2babbc, Object.getOwnPropertyNames(_0x2babbc)));
    }
  }
  function _0x5c45d4(_0x1120f9, _0x3b0d68, _0x1e80b2, _0x4ff919, _0x393aed) {
    var _0xf4af03 = _0xa8c6ca(_0x1120f9);
    var _0x7d8bf1 = _0xa8c6ca(_0x3b0d68);
    var _0x416caf = _0xa8c6ca(_0x1e80b2);
    var _0x859c4e = _0xa8c6ca(_0x4ff919);
    var _0x1113b3 = _0xa8c6ca(_0x393aed);
    try {
      firebase.database().ref(_0xf4af03).push().set(JSON.parse(_0x7d8bf1)).then(function (_0x7a3a09) {
        window.unityInstance.SendMessage(_0x416caf, _0x859c4e, "Success: " + _0x7d8bf1 + " was pushed to " + _0xf4af03);
      });
    } catch (_0x192872) {
      window.unityInstance.SendMessage(_0x416caf, _0x1113b3, JSON.stringify(_0x192872, Object.getOwnPropertyNames(_0x192872)));
    }
  }
  function _0x306c7a() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x3b6085) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x2da032() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0x4141f5);
    } catch (_0x17b2f9) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0x2da032();
      }, 250);
    }
  }
  function _0x43ab25() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0x675cd5) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0xd956ae();
    }
  }
  function _0xd956ae() {
    setTimeout(function () {
      _0x43ab25();
    }, 250);
  }
  function _0x36b639(_0x324aba, _0x2c9b9f, _0x53ce97, _0x50bf74, _0x252e32, _0x2801e3, _0x3f812d) {
    var _0x1a8c73 = _0xa8c6ca(_0x324aba);
    var _0x422f33 = _0xa8c6ca(_0x2c9b9f);
    var _0x273c36 = _0xa8c6ca(_0x53ce97);
    var _0x2beea2 = _0xa8c6ca(_0x50bf74);
    var _0x4a6113 = _0xa8c6ca(_0x252e32);
    var _0x1baee3 = _0xa8c6ca(_0x2801e3);
    var _0x5e2f7 = _0xa8c6ca(_0x3f812d);
    try {
      var _0x50bf74 = {};
      _0x50bf74[_0x273c36] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x2beea2));
      firebase.firestore().collection(_0x1a8c73).doc(_0x422f33).update(_0x50bf74).then(function () {
        window.unityInstance.SendMessage(_0x4a6113, _0x1baee3, "Success: element " + _0x2beea2 + " was removed in " + _0x273c36);
      }).catch(function (_0x5c6750) {
        window.unityInstance.SendMessage(_0x4a6113, _0x5e2f7, JSON.stringify(_0x5c6750, Object.getOwnPropertyNames(_0x5c6750)));
      });
    } catch (_0x2da039) {
      window.unityInstance.SendMessage(_0x4a6113, _0x5e2f7, JSON.stringify(_0x2da039, Object.getOwnPropertyNames(_0x2da039)));
    }
  }
  function _0xac51cc(_0x4252df) {
    var _0x5a1c8b = window.unityStringify(_0x4252df);
    var _0x337faf = {
      adStarted: function () {
        window.UnitySDK.unlockPointer();
        _0x28e651("CrazySDKSingleton", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        window.UnitySDK.lockPointer();
        _0x28e651("CrazySDKSingleton", "JSLibCallback_AdFinished");
      },
      adError: function (_0x1c3a92) {
        _0x28e651("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x1c3a92));
      }
    };
    window.CrazyGames.SDK.ad.requestAd(_0x5a1c8b, _0x337faf).catch(function (_0x16ffa1) {
      window.UnitySDK.logError("Error while requesting ad:", _0x16ffa1);
      _0x28e651("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
        code: "unknown",
        message: _0x16ffa1.message || "Unknown error"
      }));
    });
  }
  function _0x42297b(_0x20eeaa) {
    var _0x5af5f2 = JSON.parse(window.unityStringify(_0x20eeaa));
    try {
      window.CrazyGames.SDK.banner.requestOverlayBanners(_0x5af5f2, function (_0x46712e, _0x5b3f1e, _0x4fa252) {});
    } catch (_0x34eda8) {
      window.UnitySDK.logError("Error while requesting banners:", _0x34eda8);
    }
  }
  function _0x488ad7(_0x523ea8) {
    var _0x3a7336 = JSON.parse(window.unityStringify(_0x523ea8));
    var _0x3f9222 = "";
    try {
      _0x3f9222 = window.CrazyGames.SDK.game.inviteLink(_0x3a7336);
    } catch (_0x14a720) {
      window.UnitySDK.logError("Error while requesting invite url:", _0x14a720);
    }
    var _0x3f9da1 = _0x4da9ba(_0x3f9222) + 1;
    var _0x1c6b9c = _0x48c1ae(_0x3f9da1);
    _0x3c7021(_0x3f9222, _0x1c6b9c, _0x3f9da1);
    return _0x1c6b9c;
  }
  function _0x25250e(_0x36e147) {
    _0x36e147 = _0xa8c6ca(_0x36e147);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x36e147,
      onEvent: function (_0x4c482e) {
        switch (_0x4c482e.name) {
          case "SDK_GAME_START":
            _0x28e651("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x28e651("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x28e651("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x28e651("GameDistribution", "EventCallback", _0x4c482e.name);
        }
      }
    };
    (function (_0x2fad4a, _0x168e2d, _0x4a70d0) {
      var _0x1a56cf;
      var _0x5a848a = _0x2fad4a.getElementsByTagName(_0x168e2d)[0];
      if (_0x2fad4a.getElementById(_0x4a70d0)) {
        return;
      }
      _0x1a56cf = _0x2fad4a.createElement(_0x168e2d);
      _0x1a56cf.id = _0x4a70d0;
      _0x1a56cf.src = "//html5.api.gamedistribution.com/main.min.js";
      _0x5a848a.parentNode.insertBefore(_0x1a56cf, _0x5a848a);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0x3bdc05() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x2ab211) {
        _0x28e651("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x55dae4) {
        _0x28e651("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x44e038(_0x1f0776) {
    _0x1f0776 = _0xa8c6ca(_0x1f0776);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x1f0776 !== "undefined") {
      gdsdk.sendEvent(_0x1f0776).then(function (_0x333c97) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0x5c4f44) {
        console.log(_0x5c4f44.message);
      });
    }
  }
  function _0x7c6d20(_0x3ff9f0) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x3ff9f0 = _0xa8c6ca(_0x3ff9f0) || gdsdk.AdType.Interstitial;
      gdsdk.showAd(_0x3ff9f0).then(function (_0x392f2f) {
        if (_0x3ff9f0 === gdsdk.AdType.Rewarded) {
          _0x28e651("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x21b023) {
        if (_0x3ff9f0 === gdsdk.AdType.Rewarded) {
          _0x28e651("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x1a2d7c(_0x3713cf, _0x31f9a5, _0x1e3f7a, _0x3aa4ae, _0x3dbd21, _0x567ce1) {
    var _0x50ca4d = _0xa8c6ca(_0x3713cf);
    var _0x342e45 = _0xa8c6ca(_0x31f9a5);
    var _0x167b41 = _0xa8c6ca(_0x1e3f7a);
    var _0x94a85a = _0xa8c6ca(_0x3aa4ae);
    var _0x43d03f = _0xa8c6ca(_0x3dbd21);
    var _0x247b4b = _0xa8c6ca(_0x567ce1);
    try {
      firebase.firestore().collection(_0x50ca4d).doc(_0x342e45).set(JSON.parse(_0x167b41)).then(function () {
        window.unityInstance.SendMessage(_0x94a85a, _0x43d03f, "Success: document " + _0x342e45 + " was set");
      }).catch(function (_0x250a97) {
        window.unityInstance.SendMessage(_0x94a85a, _0x247b4b, JSON.stringify(_0x250a97, Object.getOwnPropertyNames(_0x250a97)));
      });
    } catch (_0x96daaf) {
      window.unityInstance.SendMessage(_0x94a85a, _0x247b4b, JSON.stringify(_0x96daaf, Object.getOwnPropertyNames(_0x96daaf)));
    }
  }
  function _0x244925(_0x3a56ff) {
    var _0x178cea = JSON.parse(_0xa8c6ca(_0x3a56ff));
    firebaseSetUserProperties(_0x178cea);
  }
  function _0x447e3b() {
    window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x1fb53e) {
      _0x28e651("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        linkAccountResponseStr: JSON.stringify(_0x1fb53e)
      }));
    }).catch(function (_0x1df7b5) {
      _0x28e651("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x1df7b5)
      }));
    });
  }
  function _0x1f5bd7() {
    window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x4edeb4) {
      _0x28e651("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        userJson: JSON.stringify(_0x4edeb4)
      }));
    }).catch(function (_0x3b4c94) {
      _0x28e651("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x3b4c94)
      }));
    });
  }
  function _0x77d565(_0x45c747) {
    var _0x5d3d67 = JSON.parse(window.unityStringify(_0x45c747));
    var _0x43b4b2 = "";
    try {
      _0x43b4b2 = window.CrazyGames.SDK.game.showInviteButton(_0x5d3d67);
    } catch (_0x4dcac7) {
      window.UnitySDK.logError("Error while showing invite button:", _0x4dcac7);
    }
    var _0x3e9cfb = _0x4da9ba(_0x43b4b2) + 1;
    var _0x413f9d = _0x48c1ae(_0x3e9cfb);
    _0x3c7021(_0x43b4b2, _0x413f9d, _0x3e9cfb);
    return _0x413f9d;
  }
  function _0x805780() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0x31c32a(_0xb3b341, _0x4a071e, _0x595bec) {
    var _0x27dd9a = _0xa8c6ca(_0xb3b341);
    var _0x50598f = _0xa8c6ca(_0x4a071e);
    var _0x235307 = _0xa8c6ca(_0x595bec);
    try {
      firebase.auth().signInAnonymously().then(function (_0x55c1d0) {
        window.unityInstance.SendMessage(_0x27dd9a, _0x50598f, "Success: signed up for " + _0x55c1d0);
      }).catch(function (_0x465add) {
        window.unityInstance.SendMessage(_0x27dd9a, _0x235307, JSON.stringify(_0x465add, Object.getOwnPropertyNames(_0x465add)));
      });
    } catch (_0x3e0159) {
      window.unityInstance.SendMessage(_0x27dd9a, _0x235307, JSON.stringify(_0x3e0159, Object.getOwnPropertyNames(_0x3e0159)));
    }
  }
  function _0x26f468(_0x341c25, _0x2597a4, _0x36af0a, _0x1c18d6, _0x3f116c) {
    var _0x2a4579 = _0xa8c6ca(_0x341c25);
    var _0x2a4a1f = _0xa8c6ca(_0x2597a4);
    var _0x561cd4 = _0xa8c6ca(_0x36af0a);
    var _0x242ff7 = _0xa8c6ca(_0x1c18d6);
    var _0x4758b9 = _0xa8c6ca(_0x3f116c);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x2a4579, _0x2a4a1f).then(function (_0x1a6f2f) {
        window.unityInstance.SendMessage(_0x561cd4, _0x242ff7, "Success: signed in for " + _0x2a4579);
      }).catch(function (_0x14c6b0) {
        window.unityInstance.SendMessage(_0x561cd4, _0x4758b9, JSON.stringify(_0x14c6b0, Object.getOwnPropertyNames(_0x14c6b0)));
      });
    } catch (_0xdcb1bd) {
      window.unityInstance.SendMessage(_0x561cd4, _0x4758b9, JSON.stringify(_0xdcb1bd, Object.getOwnPropertyNames(_0xdcb1bd)));
    }
  }
  function _0x4c9ee6(_0x44ce89, _0x2484fa, _0x13f96c) {
    var _0xc5d3f8 = _0xa8c6ca(_0x44ce89);
    var _0x11583e = _0xa8c6ca(_0x2484fa);
    var _0x434993 = _0xa8c6ca(_0x13f96c);
    try {
      var _0x274916 = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0x274916).then(function (_0x59c2f1) {
        window.unityInstance.SendMessage(_0xc5d3f8, _0x11583e, "Success: signed in with Facebook!");
      }).catch(function (_0x284f18) {
        window.unityInstance.SendMessage(_0xc5d3f8, _0x434993, JSON.stringify(_0x284f18, Object.getOwnPropertyNames(_0x284f18)));
      });
    } catch (_0x4675df) {
      window.unityInstance.SendMessage(_0xc5d3f8, _0x434993, JSON.stringify(_0x4675df, Object.getOwnPropertyNames(_0x4675df)));
    }
  }
  function _0x4aca55(_0x526d4a, _0x458e9e, _0x38aba1) {
    var _0x3a5ddf = _0xa8c6ca(_0x526d4a);
    var _0x306f1d = _0xa8c6ca(_0x458e9e);
    var _0x515ad6 = _0xa8c6ca(_0x38aba1);
    try {
      var _0x22c733 = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x22c733).then(function (_0x3d3208) {
        window.unityInstance.SendMessage(_0x3a5ddf, _0x306f1d, "Success: signed in with Google!");
      }).catch(function (_0x322608) {
        window.unityInstance.SendMessage(_0x3a5ddf, _0x515ad6, JSON.stringify(_0x322608, Object.getOwnPropertyNames(_0x322608)));
      });
    } catch (_0x3f15fc) {
      window.unityInstance.SendMessage(_0x3a5ddf, _0x515ad6, JSON.stringify(_0x3f15fc, Object.getOwnPropertyNames(_0x3f15fc)));
    }
  }
  function _0x4f1407(_0x226b75, _0x198017, _0x741301, _0x3424be) {
    var _0x4a2b23 = _0xa8c6ca(_0x226b75);
    var _0x5caed0 = _0xa8c6ca(_0x198017);
    var _0x3d930d = _0xa8c6ca(_0x741301);
    var _0x43d4b1 = _0xa8c6ca(_0x3424be);
    try {
      firebase.database().ref(_0x4a2b23).off("child_added");
      window.unityInstance.SendMessage(_0x5caed0, _0x3d930d, "Success: listener removed");
    } catch (_0x326a92) {
      window.unityInstance.SendMessage(_0x5caed0, _0x43d4b1, JSON.stringify(_0x326a92, Object.getOwnPropertyNames(_0x326a92)));
    }
  }
  function _0x4024f9(_0x1442ee, _0x3d2f82, _0x1e3720, _0x54b45b) {
    var _0x5b3a4d = _0xa8c6ca(_0x1442ee);
    var _0x5e98c5 = _0xa8c6ca(_0x3d2f82);
    var _0x5186c9 = _0xa8c6ca(_0x1e3720);
    var _0x4c2b60 = _0xa8c6ca(_0x54b45b);
    try {
      firebase.database().ref(_0x5b3a4d).off("child_changed");
      window.unityInstance.SendMessage(_0x5e98c5, _0x5186c9, "Success: listener removed");
    } catch (_0x2f8865) {
      window.unityInstance.SendMessage(_0x5e98c5, _0x4c2b60, JSON.stringify(_0x2f8865, Object.getOwnPropertyNames(_0x2f8865)));
    }
  }
  function _0x27e756(_0xa7100, _0x4a92e0, _0x2b3947, _0x1de2c1) {
    var _0x3364cb = _0xa8c6ca(_0xa7100);
    var _0xd73807 = _0xa8c6ca(_0x4a92e0);
    var _0x4e3641 = _0xa8c6ca(_0x2b3947);
    var _0x43b8f8 = _0xa8c6ca(_0x1de2c1);
    try {
      firebase.database().ref(_0x3364cb).off("child_removed");
      window.unityInstance.SendMessage(_0xd73807, _0x4e3641, "Success: listener removed");
    } catch (_0x10f614) {
      window.unityInstance.SendMessage(_0xd73807, _0x43b8f8, JSON.stringify(_0x10f614, Object.getOwnPropertyNames(_0x10f614)));
    }
  }
  function _0xe9ac56(_0x313aca, _0x5e3a66, _0x393241, _0x1ad326) {
    var _0x1557a0 = _0xa8c6ca(_0x313aca);
    var _0x4605a0 = _0xa8c6ca(_0x5e3a66);
    var _0x22d9aa = _0xa8c6ca(_0x393241);
    var _0x5281ee = _0xa8c6ca(_0x1ad326);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x1557a0 + "/collection/"]();
      window.unityInstance.SendMessage(_0x4605a0, _0x22d9aa, "Success: listener was removed");
    } catch (_0x5b6694) {
      window.unityInstance.SendMessage(_0x4605a0, _0x5281ee, JSON.stringify(_0x5b6694, Object.getOwnPropertyNames(_0x5b6694)));
    }
  }
  function _0x5a8e36(_0x287a29, _0x35e3e2, _0x4f874e, _0x7997fd, _0x19d03b) {
    var _0x1115c7 = _0xa8c6ca(_0x287a29);
    var _0x112d1d = _0xa8c6ca(_0x35e3e2);
    var _0x36aead = _0xa8c6ca(_0x4f874e);
    var _0x29baa1 = _0xa8c6ca(_0x7997fd);
    var _0x34976f = _0xa8c6ca(_0x19d03b);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x1115c7 + "/" + _0x112d1d]();
      window.unityInstance.SendMessage(_0x36aead, _0x29baa1, "Success: listener was removed");
    } catch (_0x37dc14) {
      window.unityInstance.SendMessage(_0x36aead, _0x34976f, JSON.stringify(_0x37dc14, Object.getOwnPropertyNames(_0x37dc14)));
    }
  }
  function _0x568fd3(_0x529c5b, _0x290150, _0x5d1bcc, _0x6f4df9) {
    var _0x10c6f9 = _0xa8c6ca(_0x529c5b);
    var _0x5569d7 = _0xa8c6ca(_0x290150);
    var _0x4e16f1 = _0xa8c6ca(_0x5d1bcc);
    var _0x3dafa3 = _0xa8c6ca(_0x6f4df9);
    try {
      firebase.database().ref(_0x10c6f9).off("value");
      window.unityInstance.SendMessage(_0x5569d7, _0x4e16f1, "Success: listener removed");
    } catch (_0x3d198c) {
      window.unityInstance.SendMessage(_0x5569d7, _0x3dafa3, JSON.stringify(_0x3d198c, Object.getOwnPropertyNames(_0x3d198c)));
    }
  }
  function _0x1bbff8() {
    try {
      window.CrazyGames.SDK.data.syncUnityGameData();
    } catch (_0x38f21f) {
      window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x38f21f);
    }
  }
  function _0x48213b(_0x200bdd, _0x402f09, _0x3ddcb3, _0x3caaeb) {
    var _0x41e70e = _0xa8c6ca(_0x200bdd);
    var _0x313e1b = _0xa8c6ca(_0x402f09);
    var _0x7ceda1 = _0xa8c6ca(_0x3ddcb3);
    var _0x255445 = _0xa8c6ca(_0x3caaeb);
    try {
      firebase.database().ref(_0x41e70e).transaction(function (_0x56f06a) {
        if (typeof _0x56f06a === "boolean") {
          return !_0x56f06a;
        } else {
          return true;
        }
      }).then(function (_0xcaf86c) {
        window.unityInstance.SendMessage(_0x313e1b, _0x7ceda1, "Success: transaction run in " + _0x41e70e);
      });
    } catch (_0x1136b9) {
      window.unityInstance.SendMessage(_0x313e1b, _0x255445, JSON.stringify(_0x1136b9, Object.getOwnPropertyNames(_0x1136b9)));
    }
  }
  function _0x4d3d10(_0x3f2b83, _0x5b1c28, _0x289fc3, _0x516620, _0x2f2531, _0x2043f4) {
    var _0x14db43 = _0xa8c6ca(_0x3f2b83);
    var _0x5105d4 = _0xa8c6ca(_0x5b1c28);
    var _0x1b9b7e = _0xa8c6ca(_0x289fc3);
    var _0x2ee698 = _0xa8c6ca(_0x516620);
    var _0xd9492d = _0xa8c6ca(_0x2f2531);
    var _0x11c5fb = _0xa8c6ca(_0x2043f4);
    try {
      firebase.firestore().collection(_0x14db43).doc(_0x5105d4).update(JSON.parse(_0x1b9b7e)).then(function () {
        window.unityInstance.SendMessage(_0x2ee698, _0xd9492d, "Success: document " + _0x5105d4 + " was updated");
      }).catch(function (_0x2d5406) {
        window.unityInstance.SendMessage(_0x2ee698, _0x11c5fb, JSON.stringify(_0x2d5406, Object.getOwnPropertyNames(_0x2d5406)));
      });
    } catch (_0x3feaf8) {
      window.unityInstance.SendMessage(_0x2ee698, _0x11c5fb, JSON.stringify(_0x3feaf8, Object.getOwnPropertyNames(_0x3feaf8)));
    }
  }
  function _0x531591(_0x5a7cb9, _0x122e8b, _0x4e96bf, _0xfd10b5, _0x16a59e) {
    var _0x3ba6df = _0xa8c6ca(_0x5a7cb9);
    var _0x570dc6 = _0xa8c6ca(_0x122e8b);
    var _0x78097 = _0xa8c6ca(_0x4e96bf);
    var _0x4be260 = _0xa8c6ca(_0xfd10b5);
    var _0xda36f2 = _0xa8c6ca(_0x16a59e);
    try {
      firebase.database().ref(_0x3ba6df).update(JSON.parse(_0x570dc6)).then(function (_0x9e6d00) {
        window.unityInstance.SendMessage(_0x78097, _0x4be260, "Success: " + _0x570dc6 + " was updated in " + _0x3ba6df);
      });
    } catch (_0x4fe7d9) {
      window.unityInstance.SendMessage(_0x78097, _0xda36f2, JSON.stringify(_0x4fe7d9, Object.getOwnPropertyNames(_0x4fe7d9)));
    }
  }
  function _0x4ef437(_0x17d078, _0x2b6e90, _0x233452, _0x3ce8f3, _0x2c9ecb) {
    var _0x532579 = _0xa8c6ca(_0x17d078);
    var _0x205d4a = _0xa8c6ca(_0x2b6e90);
    var _0x3908c8 = _0xa8c6ca(_0x233452);
    var _0x1df9b9 = _0xa8c6ca(_0x3ce8f3);
    var _0x328e24 = _0xa8c6ca(_0x2c9ecb);
    try {
      firebase.storage().ref(_0x532579).put(_0x5adf9e(_0x205d4a)).then(function (_0x16135c) {
        window.unityInstance.SendMessage(_0x3908c8, _0x1df9b9, "Success: data was posted to " + _0x532579);
      });
    } catch (_0x43aa07) {
      window.unityInstance.SendMessage(_0x3908c8, _0x328e24, JSON.stringify(_0x43aa07, Object.getOwnPropertyNames(_0x43aa07)));
    }
    function _0x5adf9e(_0x4b756b) {
      var _0x27c457 = window.atob(_0x4b756b);
      var _0xaca9af = _0x27c457.length;
      var _0x5575c2 = new Uint8Array(_0xaca9af);
      for (var _0x54939a = 0; _0x54939a < _0xaca9af; _0x54939a++) {
        _0x5575c2[_0x54939a] = _0x27c457.charCodeAt(_0x54939a);
      }
      return _0x5575c2.buffer;
    }
  }
  var _0x57a06f = {
    requestInstances: {},
    nextRequestId: 1,
    loglevel: 2,
    SendTextToCSharpSide: function (_0x40dd21, _0x2fe31c, _0x33c60a) {
      const _0x228724 = new TextEncoder();
      const _0x9d051c = _0x228724.encode(_0x33c60a);
      const _0x56819c = function (_0xdf01e7, _0x47a63f) {
        return _0x1b8a34.apply(null, [_0x57a06f.onallocbuffer, _0xdf01e7, _0x47a63f]);
      }(_0x40dd21, _0x9d051c.length);
      _0x42b281.set(_0x9d051c, _0x56819c);
      (function (_0x16d59c, _0xfb8f67, _0x304afe) {
        _0x54bd5d.apply(null, [_0x2fe31c, _0x16d59c, _0xfb8f67, _0x304afe]);
      })(_0x40dd21, _0x56819c, _0x9d051c.length);
    },
    GetResponseHeaders: function (_0x22a204, _0x1d8e84) {
      if (_0x57a06f.loglevel <= 1) {
        console.log("GetResponseHeaders(" + _0x22a204 + ")");
      }
      var _0x142781 = "";
      if (document && document.cookie) {
        var _0x1bb6ad = document.cookie.split(";");
        for (var _0x3b1248 = 0; _0x3b1248 < _0x1bb6ad.length; ++_0x3b1248) {
          const _0x5911a9 = _0x1bb6ad[_0x3b1248].trim();
          if (_0x5911a9.length > 0) {
            _0x142781 += "Set-Cookie:" + _0x5911a9 + "\n";
          }
        }
      }
      const _0x26e320 = _0x57a06f.requestInstances[_0x22a204].getAllResponseHeaders().trim().split(/[\r\n]+/);
      _0x26e320.forEach(_0x28aa8b => {
        const _0x177ce5 = _0x28aa8b.split(": ");
        const _0x1d78a9 = _0x177ce5.shift();
        const _0x203184 = _0x177ce5.join(": ");
        if (_0x1d78a9 !== "content-length") {
          _0x142781 += _0x1d78a9 + ":" + _0x203184 + "\n";
        }
      });
      _0x57a06f.SendTextToCSharpSide(_0x22a204, _0x1d8e84, _0x142781);
    }
  };
  function _0x4b0a90(_0x31777c) {
    if (_0x57a06f.loglevel <= 1) {
      console.log("XHR_Abort(" + _0x31777c + ")");
    }
    _0x57a06f.requestInstances[_0x31777c].abort();
  }
  function _0x2bcffd(_0x4373d1, _0x2f5837, _0x1b7959, _0x262054, _0x2c9e3f) {
    var _0x1eb515 = new URL(_0xa8c6ca(_0x2f5837));
    var _0x59f3ea = _0xa8c6ca(_0x4373d1);
    if (_0x57a06f.loglevel <= 1) {
      console.log("XHR_Create (" + _0x57a06f.nextRequestId + ", " + _0x59f3ea + ", " + _0x1eb515.toString() + ", " + _0x2c9e3f + ")");
    }
    var _0x278bcc = new XMLHttpRequest();
    if (_0x1b7959 && _0x262054) {
      var _0x19bf34 = _0xa8c6ca(_0x1b7959);
      var _0x3b19cc = _0xa8c6ca(_0x262054);
      _0x278bcc.withCredentials = true;
      _0x278bcc.open(_0x59f3ea, _0x1eb515.toString(), true, _0x19bf34, _0x3b19cc);
    } else {
      _0x278bcc.withCredentials = _0x2c9e3f;
      _0x278bcc.open(_0x59f3ea, _0x1eb515.toString(), true);
    }
    _0x278bcc.responseType = "arraybuffer";
    _0x57a06f.requestInstances[_0x57a06f.nextRequestId] = _0x278bcc;
    return _0x57a06f.nextRequestId++;
  }
  function _0x586ae5(_0x22133c) {
    if (_0x57a06f.loglevel <= 1) {
      console.log("XHR_Release(" + _0x22133c + ")");
    }
    delete _0x57a06f.requestInstances[_0x22133c];
  }
  function _0x22e582(_0x12dc58, _0x5f1990, _0x1e2e9c) {
    if (_0x57a06f.loglevel <= 1) {
      console.log("XHR_Send(" + _0x12dc58 + ", " + _0x5f1990 + ", " + _0x1e2e9c + ")");
    }
    var _0x353ee4 = _0x57a06f.requestInstances[_0x12dc58];
    try {
      if (_0x1e2e9c > 0) {
        _0x353ee4.send(_0x42b281.subarray(_0x5f1990, _0x5f1990 + _0x1e2e9c));
      } else {
        _0x353ee4.send();
      }
    } catch (_0x5f0f05) {
      if (_0x57a06f.loglevel <= 4) {
        console.error("XHR_Send(" + _0x12dc58 + "): " + _0x5f0f05.name + " : " + _0x5f0f05.message);
      }
    }
  }
  function _0x5ea31d(_0x9d334c) {
    _0x57a06f.loglevel = _0x9d334c;
  }
  function _0x549836(_0x1bb34d, _0x127fe3, _0x137d89) {
    if (_0x57a06f.loglevel <= 1) {
      console.log("XHR_SetProgressHandler(" + _0x1bb34d + ")");
    }
    var _0x592710 = _0x57a06f.requestInstances[_0x1bb34d];
    if (_0x592710) {
      if (_0x127fe3) {
        _0x592710.onprogress = function _0x299d51(_0x4a61c1) {
          if (_0x57a06f.loglevel <= 1) {
            console.log("XHR_SetProgressHandler download(" + _0x1bb34d + ", " + _0x4a61c1.loaded + ", " + _0x4a61c1.total + ")");
          }
          if (_0x4a61c1.lengthComputable) {
            (function (_0x524100, _0x59ef1c, _0xbdabb6) {
              _0x54bd5d.apply(null, [_0x127fe3, _0x524100, _0x59ef1c, _0xbdabb6]);
            })(_0x1bb34d, _0x4a61c1.loaded, _0x4a61c1.total);
          }
        };
      }
      if (_0x137d89) {
        _0x592710.upload.addEventListener("progress", function _0x5d99ce(_0x1f9656) {
          if (_0x57a06f.loglevel <= 1) {
            console.log("XHR_SetProgressHandler upload(" + _0x1bb34d + ", " + _0x1f9656.loaded + ", " + _0x1f9656.total + ")");
          }
          if (_0x1f9656.lengthComputable) {
            (function (_0x52c84, _0x56ba72, _0x1cc1b8) {
              _0x54bd5d.apply(null, [_0x137d89, _0x52c84, _0x56ba72, _0x1cc1b8]);
            })(_0x1bb34d, _0x1f9656.loaded, _0x1f9656.total);
          }
        }, true);
      }
    }
  }
  function _0x23fba6(_0x467e37, _0x61557f, _0x45ca5e) {
    var _0x5da352 = _0xa8c6ca(_0x61557f);
    var _0x4b3cab = _0xa8c6ca(_0x45ca5e);
    if (_0x57a06f.loglevel <= 1) {
      console.log("XHR_SetRequestHeader(" + _0x5da352 + ", " + _0x4b3cab + ")");
    }
    if (_0x5da352 != "Cookie") {
      _0x57a06f.requestInstances[_0x467e37].setRequestHeader(_0x5da352, _0x4b3cab);
    } else {
      var _0x629b79 = _0x4b3cab.split(";");
      for (var _0x18215b = 0; _0x18215b < _0x629b79.length; _0x18215b++) {
        document.cookie = _0x629b79[_0x18215b];
      }
    }
  }
  function _0x3295c7(_0x1ad922, _0x3ddf74, _0x6f753e, _0x20bfe1, _0x36d9f3, _0x1a1e39, _0x282ca3) {
    if (_0x57a06f.loglevel <= 1) {
      console.log("XHR_SetResponseHandler(" + _0x1ad922 + ")");
    }
    _0x57a06f.onallocbuffer = _0x282ca3;
    var _0xe313d5 = _0x57a06f.requestInstances[_0x1ad922];
    _0xe313d5.onreadystatechange = _0x30b77e => {
      if (_0x57a06f.loglevel <= 1) {
        console.log(_0x1ad922 + " onreadystatechange(" + _0xe313d5.readyState + ")");
      }
      switch (_0xe313d5.readyState) {
        case XMLHttpRequest.UNSENT:
          break;
        case XMLHttpRequest.OPENED:
          break;
        case XMLHttpRequest.HEADERS_RECEIVED:
          {
            _0x57a06f.SendTextToCSharpSide(_0x1ad922, _0x1a1e39, "HTTP/1.1 " + _0xe313d5.status + " " + _0xe313d5.statusText + "\n");
            _0x57a06f.GetResponseHeaders(_0x1ad922, _0x1a1e39);
            break;
          }
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          break;
      }
    };
    _0xe313d5.onloadstart = _0x445b7b => {
      if (_0x57a06f.loglevel <= 1) {
        console.log(_0x1ad922 + " onloadstart: " + _0x445b7b);
      }
    };
    _0xe313d5.onload = function _0x5e4c8f(_0x3598ce) {
      if (_0x57a06f.loglevel <= 1) {
        console.log(_0x1ad922 + " onload(" + _0xe313d5.status + ", " + _0xe313d5.statusText + ")");
      }
      if (_0x3ddf74) {
        var _0x3b8f3c = 0;
        var _0x52adf0 = 0;
        if (_0xe313d5.response) {
          var _0x19b4d2 = _0xe313d5.response;
          _0x3b8f3c = _0x19b4d2.byteLength;
          _0x57a06f.SendTextToCSharpSide(_0x1ad922, _0x1a1e39, "content-length:" + _0x3b8f3c + "\n\n");
          _0x52adf0 = function (_0x5a1d24, _0x31e4c6) {
            return _0x1b8a34.apply(null, [_0x282ca3, _0x5a1d24, _0x31e4c6]);
          }(_0x1ad922, _0x3b8f3c);
          var _0x3348fb = new Uint8Array(_0x19b4d2);
          var _0x20e577 = _0x42b281.subarray(_0x52adf0, _0x52adf0 + _0x3b8f3c);
          _0x20e577.set(_0x3348fb);
        } else {
          _0x57a06f.SendTextToCSharpSide(_0x1ad922, _0x1a1e39, "content-length:0\n\n");
        }
        (function (_0x26a7e6, _0x528d5f, _0x2f8fe6) {
          _0x54bd5d.apply(null, [_0x3ddf74, _0x26a7e6, _0x528d5f, _0x2f8fe6]);
        })(_0x1ad922, _0x52adf0, _0x3b8f3c);
      }
    };
    if (_0x6f753e) {
      _0xe313d5.onerror = function _0x3634b6(_0x585360) {
        function _0x243298(_0x29e3a6) {
          var _0x224a12 = _0x4da9ba(_0x29e3a6) + 1;
          var _0x2c24a0 = _0x48c1ae(_0x224a12);
          _0x3e0117(_0x29e3a6, _0x42b281, _0x2c24a0, _0x224a12);
          (function (_0x15ce0f, _0x27fdc6) {
            _0x6f8fd4.apply(null, [_0x6f753e, _0x15ce0f, _0x27fdc6]);
          })(_0x1ad922, _0x2c24a0);
          _0x59ed75(_0x2c24a0);
        }
        if (_0x585360.error) {
          _0x243298(_0x585360.error);
        } else {
          _0x243298("Unknown Error! Maybe a CORS porblem?");
        }
      };
    }
    if (_0x20bfe1) {
      _0xe313d5.ontimeout = function _0x1c7fb2(_0x293e4b) {
        (function (_0x38a7b0) {
          _0xa9e541.apply(null, [_0x20bfe1, _0x38a7b0]);
        })(_0x1ad922);
      };
    }
    if (_0x36d9f3) {
      _0xe313d5.onabort = function _0x696770(_0x336aad) {
        (function (_0x40ee36) {
          _0xa9e541.apply(null, [_0x36d9f3, _0x40ee36]);
        })(_0x1ad922);
      };
    }
  }
  function _0x272366(_0x5d6572, _0x27ce1e) {
    if (_0x57a06f.loglevel <= 1) {
      console.log("XHR_SetTimeout(" + _0x5d6572 + ", " + _0x27ce1e + ")");
    }
    _0x57a06f.requestInstances[_0x5d6572].timeout = _0x27ce1e;
  }
  var _0x49ea1c = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
  };
  function _0x155a2f(_0x3ecb21) {
    return _0x48c1ae(_0x3ecb21 + _0x49ea1c.SIZE) + _0x49ea1c.SIZE;
  }
  function _0x1534d3(_0x125ecb) {
    this.excPtr = _0x125ecb;
    this.ptr = _0x125ecb - _0x49ea1c.SIZE;
    this.set_type = function (_0x31872b) {
      _0x2c6e39[this.ptr + _0x49ea1c.TYPE_OFFSET >> 2] = _0x31872b;
    };
    this.get_type = function () {
      return _0x2c6e39[this.ptr + _0x49ea1c.TYPE_OFFSET >> 2];
    };
    this.set_destructor = function (_0x48419c) {
      _0x2c6e39[this.ptr + _0x49ea1c.DESTRUCTOR_OFFSET >> 2] = _0x48419c;
    };
    this.get_destructor = function () {
      return _0x2c6e39[this.ptr + _0x49ea1c.DESTRUCTOR_OFFSET >> 2];
    };
    this.set_refcount = function (_0x4571d2) {
      _0x2c6e39[this.ptr + _0x49ea1c.REFCOUNT_OFFSET >> 2] = _0x4571d2;
    };
    this.set_caught = function (_0x431017) {
      _0x431017 = _0x431017 ? 1 : 0;
      _0x51d7cf[this.ptr + _0x49ea1c.CAUGHT_OFFSET >> 0] = _0x431017;
    };
    this.get_caught = function () {
      return _0x51d7cf[this.ptr + _0x49ea1c.CAUGHT_OFFSET >> 0] != 0;
    };
    this.set_rethrown = function (_0x2f6cb1) {
      _0x2f6cb1 = _0x2f6cb1 ? 1 : 0;
      _0x51d7cf[this.ptr + _0x49ea1c.RETHROWN_OFFSET >> 0] = _0x2f6cb1;
    };
    this.get_rethrown = function () {
      return _0x51d7cf[this.ptr + _0x49ea1c.RETHROWN_OFFSET >> 0] != 0;
    };
    this.init = function (_0x5a5d64, _0x5dc666) {
      this.set_type(_0x5a5d64);
      this.set_destructor(_0x5dc666);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0xdcb083 = _0x2c6e39[this.ptr + _0x49ea1c.REFCOUNT_OFFSET >> 2];
      _0x2c6e39[this.ptr + _0x49ea1c.REFCOUNT_OFFSET >> 2] = _0xdcb083 + 1;
    };
    this.release_ref = function () {
      var _0x2041c5 = _0x2c6e39[this.ptr + _0x49ea1c.REFCOUNT_OFFSET >> 2];
      _0x2c6e39[this.ptr + _0x49ea1c.REFCOUNT_OFFSET >> 2] = _0x2041c5 - 1;
      return _0x2041c5 === 1;
    };
  }
  function _0x17bc59(_0x3c95a4) {
    this.free = function () {
      _0x59ed75(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x52e814) {
      _0x2c6e39[this.ptr >> 2] = _0x52e814;
    };
    this.get_base_ptr = function () {
      return _0x2c6e39[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0x48f19d) {
      var _0xf97dd7 = 4;
      _0x2c6e39[this.ptr + _0xf97dd7 >> 2] = _0x48f19d;
    };
    this.get_adjusted_ptr = function () {
      var _0x5ee515 = 4;
      return _0x2c6e39[this.ptr + _0x5ee515 >> 2];
    };
    this.get_exception_ptr = function () {
      var _0x442320 = _0x3b8104(this.get_exception_info().get_type());
      if (_0x442320) {
        return _0x2c6e39[this.get_base_ptr() >> 2];
      }
      var _0x47b422 = this.get_adjusted_ptr();
      if (_0x47b422 !== 0) {
        return _0x47b422;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0x1534d3(this.get_base_ptr());
    };
    if (_0x3c95a4 === undefined) {
      this.ptr = _0x48c1ae(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x3c95a4;
    }
  }
  var _0x2dfc94 = [];
  function _0x385ed5(_0x9cb466) {
    _0x9cb466.add_ref();
  }
  var _0x4bc4bf = 0;
  function _0x19c3ba(_0x48c899) {
    var _0x301e58 = new _0x17bc59(_0x48c899);
    var _0x36c521 = _0x301e58.get_exception_info();
    if (!_0x36c521.get_caught()) {
      _0x36c521.set_caught(true);
      _0x4bc4bf--;
    }
    _0x36c521.set_rethrown(false);
    _0x2dfc94.push(_0x301e58);
    _0x385ed5(_0x36c521);
    return _0x301e58.get_exception_ptr();
  }
  var _0x2f1b54 = 0;
  function _0x11250c(_0x5a8dc8) {
    return _0x59ed75(new _0x1534d3(_0x5a8dc8).ptr);
  }
  function _0xa2d9db(_0x5a805b) {
    if (_0x5a805b.release_ref() && !_0x5a805b.get_rethrown()) {
      var _0x259cbb = _0x5a805b.get_destructor();
      if (_0x259cbb) {
        (function (_0x10ce07) {
          return _0x21b1c5.apply(null, [_0x259cbb, _0x10ce07]);
        })(_0x5a805b.excPtr);
      }
      _0x11250c(_0x5a805b.excPtr);
    }
  }
  function _0x129ade() {
    _0x22893a(0);
    var _0x38385c = _0x2dfc94.pop();
    _0xa2d9db(_0x38385c.get_exception_info());
    _0x38385c.free();
    _0x2f1b54 = 0;
  }
  function _0x12b399(_0x2eb3ca) {
    var _0x1f7607 = new _0x17bc59(_0x2eb3ca);
    var _0x5409b9 = _0x1f7607.get_base_ptr();
    if (!_0x2f1b54) {
      _0x2f1b54 = _0x5409b9;
    }
    _0x1f7607.free();
    throw _0x5409b9;
  }
  function _0x40d199() {
    var _0x4e0cae = _0x2f1b54;
    if (!_0x4e0cae) {
      _0x182d97(0);
      return 0;
    }
    var _0x1da0a8 = new _0x1534d3(_0x4e0cae);
    var _0xb0c5b1 = _0x1da0a8.get_type();
    var _0x5e7062 = new _0x17bc59();
    _0x5e7062.set_base_ptr(_0x4e0cae);
    if (!_0xb0c5b1) {
      _0x182d97(0);
      return _0x5e7062.ptr | 0;
    }
    var _0x1b4f02 = Array.prototype.slice.call(arguments);
    var _0x27b5b1 = _0x555fcf();
    var _0xbf7bf = _0x41cdff(4);
    _0x2c6e39[_0xbf7bf >> 2] = _0x4e0cae;
    for (var _0x4845a6 = 0; _0x4845a6 < _0x1b4f02.length; _0x4845a6++) {
      var _0x5608cc = _0x1b4f02[_0x4845a6];
      if (_0x5608cc === 0 || _0x5608cc === _0xb0c5b1) {
        break;
      }
      if (_0x107c34(_0x5608cc, _0xb0c5b1, _0xbf7bf)) {
        var _0x2ca54e = _0x2c6e39[_0xbf7bf >> 2];
        if (_0x4e0cae !== _0x2ca54e) {
          _0x5e7062.set_adjusted_ptr(_0x2ca54e);
        }
        _0x182d97(_0x5608cc);
        return _0x5e7062.ptr | 0;
      }
    }
    _0x346df4(_0x27b5b1);
    _0x182d97(_0xb0c5b1);
    return _0x5e7062.ptr | 0;
  }
  function _0x5747ee() {
    var _0x4d3997 = _0x2f1b54;
    if (!_0x4d3997) {
      _0x182d97(0);
      return 0;
    }
    var _0x365ae0 = new _0x1534d3(_0x4d3997);
    var _0x43ef5e = _0x365ae0.get_type();
    var _0x303491 = new _0x17bc59();
    _0x303491.set_base_ptr(_0x4d3997);
    if (!_0x43ef5e) {
      _0x182d97(0);
      return _0x303491.ptr | 0;
    }
    var _0x2ffb29 = Array.prototype.slice.call(arguments);
    var _0x1d294a = _0x555fcf();
    var _0x21a78d = _0x41cdff(4);
    _0x2c6e39[_0x21a78d >> 2] = _0x4d3997;
    for (var _0xe5aeb1 = 0; _0xe5aeb1 < _0x2ffb29.length; _0xe5aeb1++) {
      var _0x1e278f = _0x2ffb29[_0xe5aeb1];
      if (_0x1e278f === 0 || _0x1e278f === _0x43ef5e) {
        break;
      }
      if (_0x107c34(_0x1e278f, _0x43ef5e, _0x21a78d)) {
        var _0x4d2725 = _0x2c6e39[_0x21a78d >> 2];
        if (_0x4d3997 !== _0x4d2725) {
          _0x303491.set_adjusted_ptr(_0x4d2725);
        }
        _0x182d97(_0x1e278f);
        return _0x303491.ptr | 0;
      }
    }
    _0x346df4(_0x1d294a);
    _0x182d97(_0x43ef5e);
    return _0x303491.ptr | 0;
  }
  function _0x54efc() {
    var _0x245e53 = _0x2f1b54;
    if (!_0x245e53) {
      _0x182d97(0);
      return 0;
    }
    var _0x280656 = new _0x1534d3(_0x245e53);
    var _0x2fc7c9 = _0x280656.get_type();
    var _0x24c663 = new _0x17bc59();
    _0x24c663.set_base_ptr(_0x245e53);
    if (!_0x2fc7c9) {
      _0x182d97(0);
      return _0x24c663.ptr | 0;
    }
    var _0x3adc84 = Array.prototype.slice.call(arguments);
    var _0x3d6777 = _0x555fcf();
    var _0x3886b5 = _0x41cdff(4);
    _0x2c6e39[_0x3886b5 >> 2] = _0x245e53;
    for (var _0x33d8a1 = 0; _0x33d8a1 < _0x3adc84.length; _0x33d8a1++) {
      var _0x216c5a = _0x3adc84[_0x33d8a1];
      if (_0x216c5a === 0 || _0x216c5a === _0x2fc7c9) {
        break;
      }
      if (_0x107c34(_0x216c5a, _0x2fc7c9, _0x3886b5)) {
        var _0x249fd8 = _0x2c6e39[_0x3886b5 >> 2];
        if (_0x245e53 !== _0x249fd8) {
          _0x24c663.set_adjusted_ptr(_0x249fd8);
        }
        _0x182d97(_0x216c5a);
        return _0x24c663.ptr | 0;
      }
    }
    _0x346df4(_0x3d6777);
    _0x182d97(_0x2fc7c9);
    return _0x24c663.ptr | 0;
  }
  function _0x268591() {
    var _0x5af096 = _0x2dfc94.pop();
    if (!_0x5af096) {
      _0x4ec462("no exception to throw");
    }
    var _0x554693 = _0x5af096.get_exception_info();
    var _0xcb8b3f = _0x5af096.get_base_ptr();
    if (!_0x554693.get_rethrown()) {
      _0x2dfc94.push(_0x5af096);
      _0x554693.set_rethrown(true);
      _0x554693.set_caught(false);
      _0x4bc4bf++;
    } else {
      _0x5af096.free();
    }
    _0x2f1b54 = _0xcb8b3f;
    throw _0xcb8b3f;
  }
  function _0x50e1d5(_0x239ad6, _0x56a26a, _0x1bec7b) {
    var _0x3460b8 = new _0x1534d3(_0x239ad6);
    _0x3460b8.init(_0x56a26a, _0x1bec7b);
    _0x2f1b54 = _0x239ad6;
    _0x4bc4bf++;
    throw _0x239ad6;
  }
  function _0x461480(_0x51eb34, _0x278fc7) {
    var _0x42090c = new Date(_0x2c6e39[_0x51eb34 >> 2] * 1000);
    _0x2c6e39[_0x278fc7 >> 2] = _0x42090c.getUTCSeconds();
    _0x2c6e39[_0x278fc7 + 4 >> 2] = _0x42090c.getUTCMinutes();
    _0x2c6e39[_0x278fc7 + 8 >> 2] = _0x42090c.getUTCHours();
    _0x2c6e39[_0x278fc7 + 12 >> 2] = _0x42090c.getUTCDate();
    _0x2c6e39[_0x278fc7 + 16 >> 2] = _0x42090c.getUTCMonth();
    _0x2c6e39[_0x278fc7 + 20 >> 2] = _0x42090c.getUTCFullYear() - 1900;
    _0x2c6e39[_0x278fc7 + 24 >> 2] = _0x42090c.getUTCDay();
    _0x2c6e39[_0x278fc7 + 36 >> 2] = 0;
    _0x2c6e39[_0x278fc7 + 32 >> 2] = 0;
    var _0x5b6348 = Date.UTC(_0x42090c.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x4e2e2d = (_0x42090c.getTime() - _0x5b6348) / 86400000 | 0;
    _0x2c6e39[_0x278fc7 + 28 >> 2] = _0x4e2e2d;
    if (!_0x461480.GMTString) {
      _0x461480.GMTString = _0x58c32d("GMT");
    }
    _0x2c6e39[_0x278fc7 + 40 >> 2] = _0x461480.GMTString;
    return _0x278fc7;
  }
  function _0x5bc603(_0x2d4480, _0x2e1523) {
    return _0x461480(_0x2d4480, _0x2e1523);
  }
  function _0x52bf2d() {
    if (_0x52bf2d.called) {
      return;
    }
    _0x52bf2d.called = true;
    var _0xa86550 = new Date().getFullYear();
    var _0xb7a1a2 = new Date(_0xa86550, 0, 1);
    var _0x474041 = new Date(_0xa86550, 6, 1);
    var _0x87780 = _0xb7a1a2.getTimezoneOffset();
    var _0x5a5643 = _0x474041.getTimezoneOffset();
    var _0x2a9c92 = Math.max(_0x87780, _0x5a5643);
    _0x2c6e39[_0x4af4ff() >> 2] = _0x2a9c92 * 60;
    _0x2c6e39[_0x47866b() >> 2] = Number(_0x87780 != _0x5a5643);
    function _0x2b1fde(_0x50a976) {
      var _0x4dc5fc = _0x50a976.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x4dc5fc) {
        return _0x4dc5fc[1];
      } else {
        return "GMT";
      }
    }
    var _0x457056 = _0x2b1fde(_0xb7a1a2);
    var _0x3c366a = _0x2b1fde(_0x474041);
    var _0x390c04 = _0x58c32d(_0x457056);
    var _0xe23714 = _0x58c32d(_0x3c366a);
    if (_0x5a5643 < _0x87780) {
      _0x2c6e39[_0x43be3c() >> 2] = _0x390c04;
      _0x2c6e39[_0x43be3c() + 4 >> 2] = _0xe23714;
    } else {
      _0x2c6e39[_0x43be3c() >> 2] = _0xe23714;
      _0x2c6e39[_0x43be3c() + 4 >> 2] = _0x390c04;
    }
  }
  function _0x34b226(_0x185d46, _0x292bf5) {
    _0x52bf2d();
    var _0x5ba63b = new Date(_0x2c6e39[_0x185d46 >> 2] * 1000);
    _0x2c6e39[_0x292bf5 >> 2] = _0x5ba63b.getSeconds();
    _0x2c6e39[_0x292bf5 + 4 >> 2] = _0x5ba63b.getMinutes();
    _0x2c6e39[_0x292bf5 + 8 >> 2] = _0x5ba63b.getHours();
    _0x2c6e39[_0x292bf5 + 12 >> 2] = _0x5ba63b.getDate();
    _0x2c6e39[_0x292bf5 + 16 >> 2] = _0x5ba63b.getMonth();
    _0x2c6e39[_0x292bf5 + 20 >> 2] = _0x5ba63b.getFullYear() - 1900;
    _0x2c6e39[_0x292bf5 + 24 >> 2] = _0x5ba63b.getDay();
    var _0x17cc5f = new Date(_0x5ba63b.getFullYear(), 0, 1);
    var _0x5c9bd8 = (_0x5ba63b.getTime() - _0x17cc5f.getTime()) / 86400000 | 0;
    _0x2c6e39[_0x292bf5 + 28 >> 2] = _0x5c9bd8;
    _0x2c6e39[_0x292bf5 + 36 >> 2] = -(_0x5ba63b.getTimezoneOffset() * 60);
    var _0x44853b = new Date(_0x5ba63b.getFullYear(), 6, 1).getTimezoneOffset();
    var _0xc84b9b = _0x17cc5f.getTimezoneOffset();
    var _0x5a3b9f = (_0x44853b != _0xc84b9b && _0x5ba63b.getTimezoneOffset() == Math.min(_0xc84b9b, _0x44853b)) | 0;
    _0x2c6e39[_0x292bf5 + 32 >> 2] = _0x5a3b9f;
    var _0x29fc5d = _0x2c6e39[_0x43be3c() + (_0x5a3b9f ? 4 : 0) >> 2];
    _0x2c6e39[_0x292bf5 + 40 >> 2] = _0x29fc5d;
    return _0x292bf5;
  }
  function _0x4b3fa0(_0x568e33, _0x40162b) {
    return _0x34b226(_0x568e33, _0x40162b);
  }
  var _0x4408b2 = {
    splitPath: function (_0x274f20) {
      var _0x2ec4e6 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x2ec4e6.exec(_0x274f20).slice(1);
    },
    normalizeArray: function (_0x441907, _0x661c56) {
      var _0x45132d = 0;
      for (var _0x57fd4f = _0x441907.length - 1; _0x57fd4f >= 0; _0x57fd4f--) {
        var _0x3b2160 = _0x441907[_0x57fd4f];
        if (_0x3b2160 === ".") {
          _0x441907.splice(_0x57fd4f, 1);
        } else if (_0x3b2160 === "..") {
          _0x441907.splice(_0x57fd4f, 1);
          _0x45132d++;
        } else if (_0x45132d) {
          _0x441907.splice(_0x57fd4f, 1);
          _0x45132d--;
        }
      }
      if (_0x661c56) {
        for (; _0x45132d; _0x45132d--) {
          _0x441907.unshift("..");
        }
      }
      return _0x441907;
    },
    normalize: function (_0x98c5ea) {
      var _0x31a43d = _0x98c5ea.charAt(0) === "/";
      var _0x2a23e8 = _0x98c5ea.substr(-1) === "/";
      _0x98c5ea = _0x4408b2.normalizeArray(_0x98c5ea.split("/").filter(function (_0x1c33c0) {
        return !!_0x1c33c0;
      }), !_0x31a43d).join("/");
      if (!_0x98c5ea && !_0x31a43d) {
        _0x98c5ea = ".";
      }
      if (_0x98c5ea && _0x2a23e8) {
        _0x98c5ea += "/";
      }
      return (_0x31a43d ? "/" : "") + _0x98c5ea;
    },
    dirname: function (_0x3d943f) {
      var _0x46cce7 = _0x4408b2.splitPath(_0x3d943f);
      var _0x69a00b = _0x46cce7[0];
      var _0x2f2ec1 = _0x46cce7[1];
      if (!_0x69a00b && !_0x2f2ec1) {
        return ".";
      }
      _0x2f2ec1 &&= _0x2f2ec1.substr(0, _0x2f2ec1.length - 1);
      return _0x69a00b + _0x2f2ec1;
    },
    basename: function (_0x3a7b84) {
      if (_0x3a7b84 === "/") {
        return "/";
      }
      _0x3a7b84 = _0x4408b2.normalize(_0x3a7b84);
      _0x3a7b84 = _0x3a7b84.replace(/\/$/, "");
      var _0x2625d8 = _0x3a7b84.lastIndexOf("/");
      if (_0x2625d8 === -1) {
        return _0x3a7b84;
      }
      return _0x3a7b84.substr(_0x2625d8 + 1);
    },
    extname: function (_0x2c255d) {
      return _0x4408b2.splitPath(_0x2c255d)[3];
    },
    join: function () {
      var _0xbf3dcf = Array.prototype.slice.call(arguments, 0);
      return _0x4408b2.normalize(_0xbf3dcf.join("/"));
    },
    join2: function (_0x1c6b3f, _0x5c6bd3) {
      return _0x4408b2.normalize(_0x1c6b3f + "/" + _0x5c6bd3);
    }
  };
  function _0x32f1e9() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x5c3509 = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x5c3509);
        return _0x5c3509[0];
      };
    } else if (_0x54f4b5) {
      try {
        var _0x5faa5c = require("crypto");
        return function () {
          return _0x5faa5c.randomBytes(1)[0];
        };
      } catch (_0xea6a4) {}
    }
    return function () {
      _0x4ec462("randomDevice");
    };
  }
  var _0x1ea882 = {
    resolve: function () {
      var _0x5467d1 = "";
      var _0x5209bf = false;
      for (var _0x2e094a = arguments.length - 1; _0x2e094a >= -1 && !_0x5209bf; _0x2e094a--) {
        var _0x2a2d64 = _0x2e094a >= 0 ? arguments[_0x2e094a] : _0xcb2023.cwd();
        if (typeof _0x2a2d64 !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0x2a2d64) {
          return "";
        }
        _0x5467d1 = _0x2a2d64 + "/" + _0x5467d1;
        _0x5209bf = _0x2a2d64.charAt(0) === "/";
      }
      _0x5467d1 = _0x4408b2.normalizeArray(_0x5467d1.split("/").filter(function (_0x457361) {
        return !!_0x457361;
      }), !_0x5209bf).join("/");
      return (_0x5209bf ? "/" : "") + _0x5467d1 || ".";
    },
    relative: function (_0x92799b, _0x215053) {
      _0x92799b = _0x1ea882.resolve(_0x92799b).substr(1);
      _0x215053 = _0x1ea882.resolve(_0x215053).substr(1);
      function _0x3320ea(_0x3f6914) {
        var _0x180ef7 = 0;
        for (; _0x180ef7 < _0x3f6914.length; _0x180ef7++) {
          if (_0x3f6914[_0x180ef7] !== "") {
            break;
          }
        }
        var _0x3a036f = _0x3f6914.length - 1;
        for (; _0x3a036f >= 0; _0x3a036f--) {
          if (_0x3f6914[_0x3a036f] !== "") {
            break;
          }
        }
        if (_0x180ef7 > _0x3a036f) {
          return [];
        }
        return _0x3f6914.slice(_0x180ef7, _0x3a036f - _0x180ef7 + 1);
      }
      var _0x1b41a2 = _0x3320ea(_0x92799b.split("/"));
      var _0x47cbca = _0x3320ea(_0x215053.split("/"));
      var _0x450419 = Math.min(_0x1b41a2.length, _0x47cbca.length);
      var _0x22360e = _0x450419;
      for (var _0x562717 = 0; _0x562717 < _0x450419; _0x562717++) {
        if (_0x1b41a2[_0x562717] !== _0x47cbca[_0x562717]) {
          _0x22360e = _0x562717;
          break;
        }
      }
      var _0x35f016 = [];
      for (var _0x562717 = _0x22360e; _0x562717 < _0x1b41a2.length; _0x562717++) {
        _0x35f016.push("..");
      }
      _0x35f016 = _0x35f016.concat(_0x47cbca.slice(_0x22360e));
      return _0x35f016.join("/");
    }
  };
  var _0x3f6b4d = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x8de926, _0x1a6601) {
      _0x3f6b4d.ttys[_0x8de926] = {
        input: [],
        output: [],
        ops: _0x1a6601
      };
      _0xcb2023.registerDevice(_0x8de926, _0x3f6b4d.stream_ops);
    },
    stream_ops: {
      open: function (_0x5bfe4c) {
        var _0x31c1fa = _0x3f6b4d.ttys[_0x5bfe4c.node.rdev];
        if (!_0x31c1fa) {
          throw new _0xcb2023.ErrnoError(43);
        }
        _0x5bfe4c.tty = _0x31c1fa;
        _0x5bfe4c.seekable = false;
      },
      close: function (_0x599709) {
        _0x599709.tty.ops.flush(_0x599709.tty);
      },
      flush: function (_0x31c659) {
        _0x31c659.tty.ops.flush(_0x31c659.tty);
      },
      read: function (_0x13f2f0, _0x5dce07, _0x4c3e1b, _0x5f02d4, _0x4ace7d) {
        if (!_0x13f2f0.tty || !_0x13f2f0.tty.ops.get_char) {
          throw new _0xcb2023.ErrnoError(60);
        }
        var _0x45dc61 = 0;
        for (var _0x134902 = 0; _0x134902 < _0x5f02d4; _0x134902++) {
          var _0x236031;
          try {
            _0x236031 = _0x13f2f0.tty.ops.get_char(_0x13f2f0.tty);
          } catch (_0x102534) {
            throw new _0xcb2023.ErrnoError(29);
          }
          if (_0x236031 === undefined && _0x45dc61 === 0) {
            throw new _0xcb2023.ErrnoError(6);
          }
          if (_0x236031 === null || _0x236031 === undefined) {
            break;
          }
          _0x45dc61++;
          _0x5dce07[_0x4c3e1b + _0x134902] = _0x236031;
        }
        if (_0x45dc61) {
          _0x13f2f0.node.timestamp = Date.now();
        }
        return _0x45dc61;
      },
      write: function (_0x132004, _0x6c7c9f, _0x1d6496, _0x4dc381, _0x4812e5) {
        if (!_0x132004.tty || !_0x132004.tty.ops.put_char) {
          throw new _0xcb2023.ErrnoError(60);
        }
        try {
          for (var _0x4999a9 = 0; _0x4999a9 < _0x4dc381; _0x4999a9++) {
            _0x132004.tty.ops.put_char(_0x132004.tty, _0x6c7c9f[_0x1d6496 + _0x4999a9]);
          }
        } catch (_0x317403) {
          throw new _0xcb2023.ErrnoError(29);
        }
        if (_0x4dc381) {
          _0x132004.node.timestamp = Date.now();
        }
        return _0x4999a9;
      }
    },
    default_tty_ops: {
      get_char: function (_0x5c0d29) {
        if (!_0x5c0d29.input.length) {
          var _0x3b3de9 = null;
          if (_0x54f4b5) {
            var _0x59dc05 = 256;
            var _0xc4748b = Buffer.alloc ? Buffer.alloc(_0x59dc05) : new Buffer(_0x59dc05);
            var _0x4e8657 = 0;
            try {
              _0x4e8657 = _0x7dfd36.readSync(process.stdin.fd, _0xc4748b, 0, _0x59dc05, null);
            } catch (_0x54dd9a) {
              if (_0x54dd9a.toString().includes("EOF")) {
                _0x4e8657 = 0;
              } else {
                throw _0x54dd9a;
              }
            }
            if (_0x4e8657 > 0) {
              _0x3b3de9 = _0xc4748b.slice(0, _0x4e8657).toString("utf-8");
            } else {
              _0x3b3de9 = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0x3b3de9 = window.prompt("Input: ");
            if (_0x3b3de9 !== null) {
              _0x3b3de9 += "\n";
            }
          } else if (typeof readline == "function") {
            _0x3b3de9 = readline();
            if (_0x3b3de9 !== null) {
              _0x3b3de9 += "\n";
            }
          }
          if (!_0x3b3de9) {
            return null;
          }
          _0x5c0d29.input = _0x710a1f(_0x3b3de9, true);
        }
        return _0x5c0d29.input.shift();
      },
      put_char: function (_0x5e6662, _0xcc72eb) {
        if (_0xcc72eb === null || _0xcc72eb === 10) {
          _0x576054(_0x3f816a(_0x5e6662.output, 0));
          _0x5e6662.output = [];
        } else if (_0xcc72eb != 0) {
          _0x5e6662.output.push(_0xcc72eb);
        }
      },
      flush: function (_0x29f224) {
        if (_0x29f224.output && _0x29f224.output.length > 0) {
          _0x576054(_0x3f816a(_0x29f224.output, 0));
          _0x29f224.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0xf0aea7, _0x22e05a) {
        if (_0x22e05a === null || _0x22e05a === 10) {
          _0x5c756b(_0x3f816a(_0xf0aea7.output, 0));
          _0xf0aea7.output = [];
        } else if (_0x22e05a != 0) {
          _0xf0aea7.output.push(_0x22e05a);
        }
      },
      flush: function (_0x1912c2) {
        if (_0x1912c2.output && _0x1912c2.output.length > 0) {
          _0x5c756b(_0x3f816a(_0x1912c2.output, 0));
          _0x1912c2.output = [];
        }
      }
    }
  };
  function _0x3fc323(_0x40dca4) {
    var _0x140ba4 = _0x3b2144(_0x40dca4, 65536);
    var _0x2ec65b = _0x48c1ae(_0x140ba4);
    while (_0x40dca4 < _0x140ba4) {
      _0x51d7cf[_0x2ec65b + _0x40dca4++] = 0;
    }
    return _0x2ec65b;
  }
  var _0x21b6e4 = {
    ops_table: null,
    mount: function (_0x3c9c48) {
      return _0x21b6e4.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0x50e482, _0xa8be4c, _0x565eae, _0x3fccbd) {
      if (_0xcb2023.isBlkdev(_0x565eae) || _0xcb2023.isFIFO(_0x565eae)) {
        throw new _0xcb2023.ErrnoError(63);
      }
      if (!_0x21b6e4.ops_table) {
        _0x21b6e4.ops_table = {
          dir: {
            node: {
              getattr: _0x21b6e4.node_ops.getattr,
              setattr: _0x21b6e4.node_ops.setattr,
              lookup: _0x21b6e4.node_ops.lookup,
              mknod: _0x21b6e4.node_ops.mknod,
              rename: _0x21b6e4.node_ops.rename,
              unlink: _0x21b6e4.node_ops.unlink,
              rmdir: _0x21b6e4.node_ops.rmdir,
              readdir: _0x21b6e4.node_ops.readdir,
              symlink: _0x21b6e4.node_ops.symlink
            },
            stream: {
              llseek: _0x21b6e4.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0x21b6e4.node_ops.getattr,
              setattr: _0x21b6e4.node_ops.setattr
            },
            stream: {
              llseek: _0x21b6e4.stream_ops.llseek,
              read: _0x21b6e4.stream_ops.read,
              write: _0x21b6e4.stream_ops.write,
              allocate: _0x21b6e4.stream_ops.allocate,
              mmap: _0x21b6e4.stream_ops.mmap,
              msync: _0x21b6e4.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0x21b6e4.node_ops.getattr,
              setattr: _0x21b6e4.node_ops.setattr,
              readlink: _0x21b6e4.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0x21b6e4.node_ops.getattr,
              setattr: _0x21b6e4.node_ops.setattr
            },
            stream: _0xcb2023.chrdev_stream_ops
          }
        };
      }
      var _0x5328da = _0xcb2023.createNode(_0x50e482, _0xa8be4c, _0x565eae, _0x3fccbd);
      if (_0xcb2023.isDir(_0x5328da.mode)) {
        _0x5328da.node_ops = _0x21b6e4.ops_table.dir.node;
        _0x5328da.stream_ops = _0x21b6e4.ops_table.dir.stream;
        _0x5328da.contents = {};
      } else if (_0xcb2023.isFile(_0x5328da.mode)) {
        _0x5328da.node_ops = _0x21b6e4.ops_table.file.node;
        _0x5328da.stream_ops = _0x21b6e4.ops_table.file.stream;
        _0x5328da.usedBytes = 0;
        _0x5328da.contents = null;
      } else if (_0xcb2023.isLink(_0x5328da.mode)) {
        _0x5328da.node_ops = _0x21b6e4.ops_table.link.node;
        _0x5328da.stream_ops = _0x21b6e4.ops_table.link.stream;
      } else if (_0xcb2023.isChrdev(_0x5328da.mode)) {
        _0x5328da.node_ops = _0x21b6e4.ops_table.chrdev.node;
        _0x5328da.stream_ops = _0x21b6e4.ops_table.chrdev.stream;
      }
      _0x5328da.timestamp = Date.now();
      if (_0x50e482) {
        _0x50e482.contents[_0xa8be4c] = _0x5328da;
        _0x50e482.timestamp = _0x5328da.timestamp;
      }
      return _0x5328da;
    },
    getFileDataAsTypedArray: function (_0x5f19ce) {
      if (!_0x5f19ce.contents) {
        return new Uint8Array(0);
      }
      if (_0x5f19ce.contents.subarray) {
        return _0x5f19ce.contents.subarray(0, _0x5f19ce.usedBytes);
      }
      return new Uint8Array(_0x5f19ce.contents);
    },
    expandFileStorage: function (_0x5b606a, _0x40b3c9) {
      var _0x769679 = _0x5b606a.contents ? _0x5b606a.contents.length : 0;
      if (_0x769679 >= _0x40b3c9) {
        return;
      }
      var _0x116236 = 1048576;
      _0x40b3c9 = Math.max(_0x40b3c9, _0x769679 * (_0x769679 < _0x116236 ? 2 : 1.125) >>> 0);
      if (_0x769679 != 0) {
        _0x40b3c9 = Math.max(_0x40b3c9, 256);
      }
      var _0x31d133 = _0x5b606a.contents;
      _0x5b606a.contents = new Uint8Array(_0x40b3c9);
      if (_0x5b606a.usedBytes > 0) {
        _0x5b606a.contents.set(_0x31d133.subarray(0, _0x5b606a.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0x2a0013, _0xaf52e7) {
      if (_0x2a0013.usedBytes == _0xaf52e7) {
        return;
      }
      if (_0xaf52e7 == 0) {
        _0x2a0013.contents = null;
        _0x2a0013.usedBytes = 0;
      } else {
        var _0x40ba46 = _0x2a0013.contents;
        _0x2a0013.contents = new Uint8Array(_0xaf52e7);
        if (_0x40ba46) {
          _0x2a0013.contents.set(_0x40ba46.subarray(0, Math.min(_0xaf52e7, _0x2a0013.usedBytes)));
        }
        _0x2a0013.usedBytes = _0xaf52e7;
      }
    },
    node_ops: {
      getattr: function (_0x4d233f) {
        var _0xc817a1 = {};
        _0xc817a1.dev = _0xcb2023.isChrdev(_0x4d233f.mode) ? _0x4d233f.id : 1;
        _0xc817a1.ino = _0x4d233f.id;
        _0xc817a1.mode = _0x4d233f.mode;
        _0xc817a1.nlink = 1;
        _0xc817a1.uid = 0;
        _0xc817a1.gid = 0;
        _0xc817a1.rdev = _0x4d233f.rdev;
        if (_0xcb2023.isDir(_0x4d233f.mode)) {
          _0xc817a1.size = 4096;
        } else if (_0xcb2023.isFile(_0x4d233f.mode)) {
          _0xc817a1.size = _0x4d233f.usedBytes;
        } else if (_0xcb2023.isLink(_0x4d233f.mode)) {
          _0xc817a1.size = _0x4d233f.link.length;
        } else {
          _0xc817a1.size = 0;
        }
        _0xc817a1.atime = new Date(_0x4d233f.timestamp);
        _0xc817a1.mtime = new Date(_0x4d233f.timestamp);
        _0xc817a1.ctime = new Date(_0x4d233f.timestamp);
        _0xc817a1.blksize = 4096;
        _0xc817a1.blocks = Math.ceil(_0xc817a1.size / _0xc817a1.blksize);
        return _0xc817a1;
      },
      setattr: function (_0x34f523, _0x3026cc) {
        if (_0x3026cc.mode !== undefined) {
          _0x34f523.mode = _0x3026cc.mode;
        }
        if (_0x3026cc.timestamp !== undefined) {
          _0x34f523.timestamp = _0x3026cc.timestamp;
        }
        if (_0x3026cc.size !== undefined) {
          _0x21b6e4.resizeFileStorage(_0x34f523, _0x3026cc.size);
        }
      },
      lookup: function (_0x4b6c9c, _0x4d00d5) {
        throw _0xcb2023.genericErrors[44];
      },
      mknod: function (_0x6d4809, _0x29a67d, _0x1283d0, _0x21c4d6) {
        return _0x21b6e4.createNode(_0x6d4809, _0x29a67d, _0x1283d0, _0x21c4d6);
      },
      rename: function (_0xce431e, _0x1656db, _0x2c507e) {
        if (_0xcb2023.isDir(_0xce431e.mode)) {
          var _0x3a2866;
          try {
            _0x3a2866 = _0xcb2023.lookupNode(_0x1656db, _0x2c507e);
          } catch (_0x14f850) {}
          if (_0x3a2866) {
            for (var _0x1fb82a in _0x3a2866.contents) {
              throw new _0xcb2023.ErrnoError(55);
            }
          }
        }
        delete _0xce431e.parent.contents[_0xce431e.name];
        _0xce431e.parent.timestamp = Date.now();
        _0xce431e.name = _0x2c507e;
        _0x1656db.contents[_0x2c507e] = _0xce431e;
        _0x1656db.timestamp = _0xce431e.parent.timestamp;
        _0xce431e.parent = _0x1656db;
      },
      unlink: function (_0x2ee362, _0x1fb9d8) {
        delete _0x2ee362.contents[_0x1fb9d8];
        _0x2ee362.timestamp = Date.now();
      },
      rmdir: function (_0x59c28d, _0x182e20) {
        var _0x10ef5c = _0xcb2023.lookupNode(_0x59c28d, _0x182e20);
        for (var _0x1056c9 in _0x10ef5c.contents) {
          throw new _0xcb2023.ErrnoError(55);
        }
        delete _0x59c28d.contents[_0x182e20];
        _0x59c28d.timestamp = Date.now();
      },
      readdir: function (_0x46f00c) {
        var _0x27ddad = [".", ".."];
        for (var _0x3ee2cc in _0x46f00c.contents) {
          if (!_0x46f00c.contents.hasOwnProperty(_0x3ee2cc)) {
            continue;
          }
          _0x27ddad.push(_0x3ee2cc);
        }
        return _0x27ddad;
      },
      symlink: function (_0x384ce4, _0x548d68, _0x163550) {
        var _0x4b3238 = _0x21b6e4.createNode(_0x384ce4, _0x548d68, 41471, 0);
        _0x4b3238.link = _0x163550;
        return _0x4b3238;
      },
      readlink: function (_0x50e69b) {
        if (!_0xcb2023.isLink(_0x50e69b.mode)) {
          throw new _0xcb2023.ErrnoError(28);
        }
        return _0x50e69b.link;
      }
    },
    stream_ops: {
      read: function (_0x30ba70, _0x39d340, _0x1d8992, _0x1803c1, _0x264c22) {
        var _0x3d9cb1 = _0x30ba70.node.contents;
        if (_0x264c22 >= _0x30ba70.node.usedBytes) {
          return 0;
        }
        var _0x4a7d55 = Math.min(_0x30ba70.node.usedBytes - _0x264c22, _0x1803c1);
        if (_0x4a7d55 > 8 && _0x3d9cb1.subarray) {
          _0x39d340.set(_0x3d9cb1.subarray(_0x264c22, _0x264c22 + _0x4a7d55), _0x1d8992);
        } else {
          for (var _0x59e2e1 = 0; _0x59e2e1 < _0x4a7d55; _0x59e2e1++) {
            _0x39d340[_0x1d8992 + _0x59e2e1] = _0x3d9cb1[_0x264c22 + _0x59e2e1];
          }
        }
        return _0x4a7d55;
      },
      write: function (_0x5f3e31, _0x5ce7ce, _0x446033, _0x26d4ec, _0x33ecd3, _0x121cd7) {
        if (_0x5ce7ce.buffer === _0x51d7cf.buffer) {
          _0x121cd7 = false;
        }
        if (!_0x26d4ec) {
          return 0;
        }
        var _0x351c14 = _0x5f3e31.node;
        _0x351c14.timestamp = Date.now();
        if (_0x5ce7ce.subarray && (!_0x351c14.contents || _0x351c14.contents.subarray)) {
          if (_0x121cd7) {
            _0x351c14.contents = _0x5ce7ce.subarray(_0x446033, _0x446033 + _0x26d4ec);
            _0x351c14.usedBytes = _0x26d4ec;
            return _0x26d4ec;
          } else if (_0x351c14.usedBytes === 0 && _0x33ecd3 === 0) {
            _0x351c14.contents = _0x5ce7ce.slice(_0x446033, _0x446033 + _0x26d4ec);
            _0x351c14.usedBytes = _0x26d4ec;
            return _0x26d4ec;
          } else if (_0x33ecd3 + _0x26d4ec <= _0x351c14.usedBytes) {
            _0x351c14.contents.set(_0x5ce7ce.subarray(_0x446033, _0x446033 + _0x26d4ec), _0x33ecd3);
            return _0x26d4ec;
          }
        }
        _0x21b6e4.expandFileStorage(_0x351c14, _0x33ecd3 + _0x26d4ec);
        if (_0x351c14.contents.subarray && _0x5ce7ce.subarray) {
          _0x351c14.contents.set(_0x5ce7ce.subarray(_0x446033, _0x446033 + _0x26d4ec), _0x33ecd3);
        } else {
          for (var _0x2cdedf = 0; _0x2cdedf < _0x26d4ec; _0x2cdedf++) {
            _0x351c14.contents[_0x33ecd3 + _0x2cdedf] = _0x5ce7ce[_0x446033 + _0x2cdedf];
          }
        }
        _0x351c14.usedBytes = Math.max(_0x351c14.usedBytes, _0x33ecd3 + _0x26d4ec);
        return _0x26d4ec;
      },
      llseek: function (_0xd11b37, _0x54f5ca, _0x3aada9) {
        var _0x4a6f49 = _0x54f5ca;
        if (_0x3aada9 === 1) {
          _0x4a6f49 += _0xd11b37.position;
        } else if (_0x3aada9 === 2) {
          if (_0xcb2023.isFile(_0xd11b37.node.mode)) {
            _0x4a6f49 += _0xd11b37.node.usedBytes;
          }
        }
        if (_0x4a6f49 < 0) {
          throw new _0xcb2023.ErrnoError(28);
        }
        return _0x4a6f49;
      },
      allocate: function (_0x41b813, _0x127085, _0x224341) {
        _0x21b6e4.expandFileStorage(_0x41b813.node, _0x127085 + _0x224341);
        _0x41b813.node.usedBytes = Math.max(_0x41b813.node.usedBytes, _0x127085 + _0x224341);
      },
      mmap: function (_0x2c18c6, _0x1083ea, _0x1a8c08, _0x1a5828, _0x34ed47, _0x8f5c3f) {
        if (_0x1083ea !== 0) {
          throw new _0xcb2023.ErrnoError(28);
        }
        if (!_0xcb2023.isFile(_0x2c18c6.node.mode)) {
          throw new _0xcb2023.ErrnoError(43);
        }
        var _0x4a34bc;
        var _0x4d5af3;
        var _0x52f421 = _0x2c18c6.node.contents;
        if (!(_0x8f5c3f & 2) && _0x52f421.buffer === _0x2b1026) {
          _0x4d5af3 = false;
          _0x4a34bc = _0x52f421.byteOffset;
        } else {
          if (_0x1a5828 > 0 || _0x1a5828 + _0x1a8c08 < _0x52f421.length) {
            if (_0x52f421.subarray) {
              _0x52f421 = _0x52f421.subarray(_0x1a5828, _0x1a5828 + _0x1a8c08);
            } else {
              _0x52f421 = Array.prototype.slice.call(_0x52f421, _0x1a5828, _0x1a5828 + _0x1a8c08);
            }
          }
          _0x4d5af3 = true;
          _0x4a34bc = _0x3fc323(_0x1a8c08);
          if (!_0x4a34bc) {
            throw new _0xcb2023.ErrnoError(48);
          }
          _0x51d7cf.set(_0x52f421, _0x4a34bc);
        }
        return {
          ptr: _0x4a34bc,
          allocated: _0x4d5af3
        };
      },
      msync: function (_0x451f5e, _0x651061, _0x451f96, _0x13cca6, _0x433c80) {
        if (!_0xcb2023.isFile(_0x451f5e.node.mode)) {
          throw new _0xcb2023.ErrnoError(43);
        }
        if (_0x433c80 & 2) {
          return 0;
        }
        var _0x513b24 = _0x21b6e4.stream_ops.write(_0x451f5e, _0x651061, 0, _0x13cca6, _0x451f96, false);
        return 0;
      }
    }
  };
  var _0x19020d = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x1cedbe = null;
      if (typeof window === "object") {
        _0x1cedbe = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x15301d(_0x1cedbe, "IDBFS used, but indexedDB not supported");
      return _0x1cedbe;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0xa5539b) {
      return _0x21b6e4.mount.apply(null, arguments);
    },
    syncfs: function (_0x37c8c9, _0x32dda0, _0x429b70) {
      _0x19020d.getLocalSet(_0x37c8c9, function (_0x26bd9a, _0x122274) {
        if (_0x26bd9a) {
          return _0x429b70(_0x26bd9a);
        }
        _0x19020d.getRemoteSet(_0x37c8c9, function (_0x5cee09, _0x2b583c) {
          if (_0x5cee09) {
            return _0x429b70(_0x5cee09);
          }
          var _0x16e3c1 = _0x32dda0 ? _0x2b583c : _0x122274;
          var _0x26b537 = _0x32dda0 ? _0x122274 : _0x2b583c;
          _0x19020d.reconcile(_0x16e3c1, _0x26b537, _0x429b70);
        });
      });
    },
    getDB: function (_0x522547, _0xbdadbe) {
      var _0x50c4ef = _0x19020d.dbs[_0x522547];
      if (_0x50c4ef) {
        return _0xbdadbe(null, _0x50c4ef);
      }
      var _0x2ace4a;
      try {
        _0x2ace4a = _0x19020d.indexedDB().open(_0x522547, _0x19020d.DB_VERSION);
      } catch (_0x2d2fad) {
        return _0xbdadbe(_0x2d2fad);
      }
      if (!_0x2ace4a) {
        return _0xbdadbe("Unable to connect to IndexedDB");
      }
      _0x2ace4a.onupgradeneeded = function (_0x144cf7) {
        var _0x2a3c1d = _0x144cf7.target.result;
        var _0x148ace = _0x144cf7.target.transaction;
        var _0x5ca2b1;
        if (_0x2a3c1d.objectStoreNames.contains(_0x19020d.DB_STORE_NAME)) {
          _0x5ca2b1 = _0x148ace.objectStore(_0x19020d.DB_STORE_NAME);
        } else {
          _0x5ca2b1 = _0x2a3c1d.createObjectStore(_0x19020d.DB_STORE_NAME);
        }
        if (!_0x5ca2b1.indexNames.contains("timestamp")) {
          _0x5ca2b1.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0x2ace4a.onsuccess = function () {
        _0x50c4ef = _0x2ace4a.result;
        _0x19020d.dbs[_0x522547] = _0x50c4ef;
        _0xbdadbe(null, _0x50c4ef);
      };
      _0x2ace4a.onerror = function (_0x4d3021) {
        _0xbdadbe(this.error);
        _0x4d3021.preventDefault();
      };
    },
    getLocalSet: function (_0x5c2091, _0x4f4ce7) {
      var _0x4cb8a9 = {};
      function _0x25fab3(_0x3e71cc) {
        return _0x3e71cc !== "." && _0x3e71cc !== "..";
      }
      function _0x3dd2ea(_0x3f97db) {
        return function (_0x4da4fa) {
          return _0x4408b2.join2(_0x3f97db, _0x4da4fa);
        };
      }
      var _0x155944 = _0xcb2023.readdir(_0x5c2091.mountpoint).filter(_0x25fab3).map(_0x3dd2ea(_0x5c2091.mountpoint));
      while (_0x155944.length) {
        var _0x193b96 = _0x155944.pop();
        var _0x3960da;
        try {
          _0x3960da = _0xcb2023.stat(_0x193b96);
        } catch (_0x17368a) {
          return _0x4f4ce7(_0x17368a);
        }
        if (_0xcb2023.isDir(_0x3960da.mode)) {
          _0x155944.push.apply(_0x155944, _0xcb2023.readdir(_0x193b96).filter(_0x25fab3).map(_0x3dd2ea(_0x193b96)));
        }
        _0x4cb8a9[_0x193b96] = {
          timestamp: _0x3960da.mtime
        };
      }
      return _0x4f4ce7(null, {
        type: "local",
        entries: _0x4cb8a9
      });
    },
    getRemoteSet: function (_0x3c23ab, _0x16ebe9) {
      var _0x2d579f = {};
      _0x19020d.getDB(_0x3c23ab.mountpoint, function (_0x20beee, _0x4f4017) {
        if (_0x20beee) {
          return _0x16ebe9(_0x20beee);
        }
        try {
          var _0x373056 = _0x4f4017.transaction([_0x19020d.DB_STORE_NAME], "readonly");
          _0x373056.onerror = function (_0x254000) {
            _0x16ebe9(this.error);
            _0x254000.preventDefault();
          };
          var _0x2ba3d5 = _0x373056.objectStore(_0x19020d.DB_STORE_NAME);
          var _0x5cbfa2 = _0x2ba3d5.index("timestamp");
          _0x5cbfa2.openKeyCursor().onsuccess = function (_0x25e6e9) {
            var _0x36805f = _0x25e6e9.target.result;
            if (!_0x36805f) {
              return _0x16ebe9(null, {
                type: "remote",
                db: _0x4f4017,
                entries: _0x2d579f
              });
            }
            _0x2d579f[_0x36805f.primaryKey] = {
              timestamp: _0x36805f.key
            };
            _0x36805f.continue();
          };
        } catch (_0x1a1bd8) {
          return _0x16ebe9(_0x1a1bd8);
        }
      });
    },
    loadLocalEntry: function (_0x2fac30, _0x17f75b) {
      var _0x1883bc;
      var _0x46ba9b;
      try {
        var _0x1d9a2f = _0xcb2023.lookupPath(_0x2fac30);
        _0x46ba9b = _0x1d9a2f.node;
        _0x1883bc = _0xcb2023.stat(_0x2fac30);
      } catch (_0x63a5b1) {
        return _0x17f75b(_0x63a5b1);
      }
      if (_0xcb2023.isDir(_0x1883bc.mode)) {
        return _0x17f75b(null, {
          timestamp: _0x1883bc.mtime,
          mode: _0x1883bc.mode
        });
      } else if (_0xcb2023.isFile(_0x1883bc.mode)) {
        _0x46ba9b.contents = _0x21b6e4.getFileDataAsTypedArray(_0x46ba9b);
        return _0x17f75b(null, {
          timestamp: _0x1883bc.mtime,
          mode: _0x1883bc.mode,
          contents: _0x46ba9b.contents
        });
      } else {
        return _0x17f75b(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0x224f2f, _0x3e217f, _0x137917) {
      try {
        if (_0xcb2023.isDir(_0x3e217f.mode)) {
          _0xcb2023.mkdirTree(_0x224f2f, _0x3e217f.mode);
        } else if (_0xcb2023.isFile(_0x3e217f.mode)) {
          _0xcb2023.writeFile(_0x224f2f, _0x3e217f.contents, {
            canOwn: true
          });
        } else {
          return _0x137917(new Error("node type not supported"));
        }
        _0xcb2023.chmod(_0x224f2f, _0x3e217f.mode);
        _0xcb2023.utime(_0x224f2f, _0x3e217f.timestamp, _0x3e217f.timestamp);
      } catch (_0xd98f37) {
        return _0x137917(_0xd98f37);
      }
      _0x137917(null);
    },
    removeLocalEntry: function (_0x477fc2, _0x329b32) {
      try {
        var _0x10e1a9 = _0xcb2023.lookupPath(_0x477fc2);
        var _0x508662 = _0xcb2023.stat(_0x477fc2);
        if (_0xcb2023.isDir(_0x508662.mode)) {
          _0xcb2023.rmdir(_0x477fc2);
        } else if (_0xcb2023.isFile(_0x508662.mode)) {
          _0xcb2023.unlink(_0x477fc2);
        }
      } catch (_0x1ce0af) {
        return _0x329b32(_0x1ce0af);
      }
      _0x329b32(null);
    },
    loadRemoteEntry: function (_0x29ed48, _0x3edece, _0x2992ed) {
      var _0x37c39e = _0x29ed48.get(_0x3edece);
      _0x37c39e.onsuccess = function (_0x245b22) {
        _0x2992ed(null, _0x245b22.target.result);
      };
      _0x37c39e.onerror = function (_0x5cef90) {
        _0x2992ed(this.error);
        _0x5cef90.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x2d3c0c, _0x553706, _0x1c80ec, _0x5c0b65) {
      var _0x30ddbc = _0x2d3c0c.put(_0x1c80ec, _0x553706);
      _0x30ddbc.onsuccess = function () {
        _0x5c0b65(null);
      };
      _0x30ddbc.onerror = function (_0x2e3b12) {
        _0x5c0b65(this.error);
        _0x2e3b12.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x152709, _0x32c7c9, _0x3241a7) {
      var _0xeba495 = _0x152709.delete(_0x32c7c9);
      _0xeba495.onsuccess = function () {
        _0x3241a7(null);
      };
      _0xeba495.onerror = function (_0x407bca) {
        _0x3241a7(this.error);
        _0x407bca.preventDefault();
      };
    },
    reconcile: function (_0x2ba5b8, _0x174589, _0x1f884d) {
      var _0x392f7a = 0;
      var _0x1e3498 = [];
      Object.keys(_0x2ba5b8.entries).forEach(function (_0x37d1ad) {
        var _0x5e1862 = _0x2ba5b8.entries[_0x37d1ad];
        var _0x54bdc6 = _0x174589.entries[_0x37d1ad];
        if (!_0x54bdc6 || _0x5e1862.timestamp.getTime() != _0x54bdc6.timestamp.getTime()) {
          _0x1e3498.push(_0x37d1ad);
          _0x392f7a++;
        }
      });
      var _0x647004 = [];
      Object.keys(_0x174589.entries).forEach(function (_0x15fd48) {
        if (!_0x2ba5b8.entries[_0x15fd48]) {
          _0x647004.push(_0x15fd48);
          _0x392f7a++;
        }
      });
      if (!_0x392f7a) {
        return _0x1f884d(null);
      }
      var _0x3032a9 = false;
      var _0x416831 = _0x2ba5b8.type === "remote" ? _0x2ba5b8.db : _0x174589.db;
      var _0x47ef5b = _0x416831.transaction([_0x19020d.DB_STORE_NAME], "readwrite");
      var _0x198ca = _0x47ef5b.objectStore(_0x19020d.DB_STORE_NAME);
      function _0x5de4fc(_0x68e9f1) {
        if (_0x68e9f1 && !_0x3032a9) {
          _0x3032a9 = true;
          return _0x1f884d(_0x68e9f1);
        }
      }
      _0x47ef5b.onerror = function (_0x17173b) {
        _0x5de4fc(this.error);
        _0x17173b.preventDefault();
      };
      _0x47ef5b.oncomplete = function (_0x2b5844) {
        if (!_0x3032a9) {
          _0x1f884d(null);
        }
      };
      _0x1e3498.sort().forEach(function (_0x5629fc) {
        if (_0x174589.type === "local") {
          _0x19020d.loadRemoteEntry(_0x198ca, _0x5629fc, function (_0x4d448f, _0x5ca273) {
            if (_0x4d448f) {
              return _0x5de4fc(_0x4d448f);
            }
            _0x19020d.storeLocalEntry(_0x5629fc, _0x5ca273, _0x5de4fc);
          });
        } else {
          _0x19020d.loadLocalEntry(_0x5629fc, function (_0x58e66c, _0x355939) {
            if (_0x58e66c) {
              return _0x5de4fc(_0x58e66c);
            }
            _0x19020d.storeRemoteEntry(_0x198ca, _0x5629fc, _0x355939, _0x5de4fc);
          });
        }
      });
      _0x647004.sort().reverse().forEach(function (_0x6a68d9) {
        if (_0x174589.type === "local") {
          _0x19020d.removeLocalEntry(_0x6a68d9, _0x5de4fc);
        } else {
          _0x19020d.removeRemoteEntry(_0x198ca, _0x6a68d9, _0x5de4fc);
        }
      });
    }
  };
  var _0xcb2023 = {
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
    lookupPath: function (_0x48d83a, _0x4cc98b) {
      _0x48d83a = _0x1ea882.resolve(_0xcb2023.cwd(), _0x48d83a);
      _0x4cc98b = _0x4cc98b || {};
      if (!_0x48d83a) {
        return {
          path: "",
          node: null
        };
      }
      var _0x345c51 = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x2aa0a8 in _0x345c51) {
        if (_0x4cc98b[_0x2aa0a8] === undefined) {
          _0x4cc98b[_0x2aa0a8] = _0x345c51[_0x2aa0a8];
        }
      }
      if (_0x4cc98b.recurse_count > 8) {
        throw new _0xcb2023.ErrnoError(32);
      }
      var _0x2e0d31 = _0x4408b2.normalizeArray(_0x48d83a.split("/").filter(function (_0x3de18c) {
        return !!_0x3de18c;
      }), false);
      var _0x17f3f7 = _0xcb2023.root;
      var _0x5a5803 = "/";
      for (var _0x12708c = 0; _0x12708c < _0x2e0d31.length; _0x12708c++) {
        var _0x47edc1 = _0x12708c === _0x2e0d31.length - 1;
        if (_0x47edc1 && _0x4cc98b.parent) {
          break;
        }
        _0x17f3f7 = _0xcb2023.lookupNode(_0x17f3f7, _0x2e0d31[_0x12708c]);
        _0x5a5803 = _0x4408b2.join2(_0x5a5803, _0x2e0d31[_0x12708c]);
        if (_0xcb2023.isMountpoint(_0x17f3f7)) {
          if (!_0x47edc1 || _0x47edc1 && _0x4cc98b.follow_mount) {
            _0x17f3f7 = _0x17f3f7.mounted.root;
          }
        }
        if (!_0x47edc1 || _0x4cc98b.follow) {
          var _0x5d8392 = 0;
          while (_0xcb2023.isLink(_0x17f3f7.mode)) {
            var _0x1cd880 = _0xcb2023.readlink(_0x5a5803);
            _0x5a5803 = _0x1ea882.resolve(_0x4408b2.dirname(_0x5a5803), _0x1cd880);
            var _0x15c8b5 = _0xcb2023.lookupPath(_0x5a5803, {
              recurse_count: _0x4cc98b.recurse_count
            });
            _0x17f3f7 = _0x15c8b5.node;
            if (_0x5d8392++ > 40) {
              throw new _0xcb2023.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0x5a5803,
        node: _0x17f3f7
      };
    },
    getPath: function (_0x1d9de2) {
      var _0x484803;
      while (true) {
        if (_0xcb2023.isRoot(_0x1d9de2)) {
          var _0x4e9a04 = _0x1d9de2.mount.mountpoint;
          if (!_0x484803) {
            return _0x4e9a04;
          }
          if (_0x4e9a04[_0x4e9a04.length - 1] !== "/") {
            return _0x4e9a04 + "/" + _0x484803;
          } else {
            return _0x4e9a04 + _0x484803;
          }
        }
        _0x484803 = _0x484803 ? _0x1d9de2.name + "/" + _0x484803 : _0x1d9de2.name;
        _0x1d9de2 = _0x1d9de2.parent;
      }
    },
    hashName: function (_0x5d2155, _0x3c904a) {
      var _0x142474 = 0;
      for (var _0x5465c3 = 0; _0x5465c3 < _0x3c904a.length; _0x5465c3++) {
        _0x142474 = (_0x142474 << 5) - _0x142474 + _0x3c904a.charCodeAt(_0x5465c3) | 0;
      }
      return (_0x5d2155 + _0x142474 >>> 0) % _0xcb2023.nameTable.length;
    },
    hashAddNode: function (_0x300447) {
      var _0x96a600 = _0xcb2023.hashName(_0x300447.parent.id, _0x300447.name);
      _0x300447.name_next = _0xcb2023.nameTable[_0x96a600];
      _0xcb2023.nameTable[_0x96a600] = _0x300447;
    },
    hashRemoveNode: function (_0x4d062a) {
      var _0x37524d = _0xcb2023.hashName(_0x4d062a.parent.id, _0x4d062a.name);
      if (_0xcb2023.nameTable[_0x37524d] === _0x4d062a) {
        _0xcb2023.nameTable[_0x37524d] = _0x4d062a.name_next;
      } else {
        var _0x33d711 = _0xcb2023.nameTable[_0x37524d];
        while (_0x33d711) {
          if (_0x33d711.name_next === _0x4d062a) {
            _0x33d711.name_next = _0x4d062a.name_next;
            break;
          }
          _0x33d711 = _0x33d711.name_next;
        }
      }
    },
    lookupNode: function (_0x5e4ccb, _0x218f14) {
      var _0x22f2d3 = _0xcb2023.mayLookup(_0x5e4ccb);
      if (_0x22f2d3) {
        throw new _0xcb2023.ErrnoError(_0x22f2d3, _0x5e4ccb);
      }
      var _0x307b96 = _0xcb2023.hashName(_0x5e4ccb.id, _0x218f14);
      for (var _0x165fcf = _0xcb2023.nameTable[_0x307b96]; _0x165fcf; _0x165fcf = _0x165fcf.name_next) {
        var _0x3a8b82 = _0x165fcf.name;
        if (_0x165fcf.parent.id === _0x5e4ccb.id && _0x3a8b82 === _0x218f14) {
          return _0x165fcf;
        }
      }
      return _0xcb2023.lookup(_0x5e4ccb, _0x218f14);
    },
    createNode: function (_0x1de56f, _0x5e3c54, _0x44acaa, _0x2f8191) {
      var _0x28efca = new _0xcb2023.FSNode(_0x1de56f, _0x5e3c54, _0x44acaa, _0x2f8191);
      _0xcb2023.hashAddNode(_0x28efca);
      return _0x28efca;
    },
    destroyNode: function (_0xff762f) {
      _0xcb2023.hashRemoveNode(_0xff762f);
    },
    isRoot: function (_0x2aa37b) {
      return _0x2aa37b === _0x2aa37b.parent;
    },
    isMountpoint: function (_0x18f541) {
      return !!_0x18f541.mounted;
    },
    isFile: function (_0x45d07d) {
      return (_0x45d07d & 61440) === 32768;
    },
    isDir: function (_0x24e4a7) {
      return (_0x24e4a7 & 61440) === 16384;
    },
    isLink: function (_0x57899b) {
      return (_0x57899b & 61440) === 40960;
    },
    isChrdev: function (_0x36c6dd) {
      return (_0x36c6dd & 61440) === 8192;
    },
    isBlkdev: function (_0x4b4c32) {
      return (_0x4b4c32 & 61440) === 24576;
    },
    isFIFO: function (_0x13f865) {
      return (_0x13f865 & 61440) === 4096;
    },
    isSocket: function (_0x38a0f9) {
      return (_0x38a0f9 & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0xbb820f) {
      var _0x49d2ae = _0xcb2023.flagModes[_0xbb820f];
      if (typeof _0x49d2ae === "undefined") {
        throw new Error("Unknown file open mode: " + _0xbb820f);
      }
      return _0x49d2ae;
    },
    flagsToPermissionString: function (_0x45df1a) {
      var _0x327773 = ["r", "w", "rw"][_0x45df1a & 3];
      if (_0x45df1a & 512) {
        _0x327773 += "w";
      }
      return _0x327773;
    },
    nodePermissions: function (_0x2f4f10, _0x4cf10f) {
      if (_0xcb2023.ignorePermissions) {
        return 0;
      }
      if (_0x4cf10f.includes("r") && !(_0x2f4f10.mode & 292)) {
        return 2;
      } else if (_0x4cf10f.includes("w") && !(_0x2f4f10.mode & 146)) {
        return 2;
      } else if (_0x4cf10f.includes("x") && !(_0x2f4f10.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0x374955) {
      var _0x41cfaf = _0xcb2023.nodePermissions(_0x374955, "x");
      if (_0x41cfaf) {
        return _0x41cfaf;
      }
      if (!_0x374955.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x5efa40, _0x12f4ff) {
      try {
        var _0xaa9c18 = _0xcb2023.lookupNode(_0x5efa40, _0x12f4ff);
        return 20;
      } catch (_0x1f82c7) {}
      return _0xcb2023.nodePermissions(_0x5efa40, "wx");
    },
    mayDelete: function (_0x58ae50, _0xdb3979, _0x2ae8c7) {
      var _0xc0a761;
      try {
        _0xc0a761 = _0xcb2023.lookupNode(_0x58ae50, _0xdb3979);
      } catch (_0x36b827) {
        return _0x36b827.errno;
      }
      var _0x4f7e49 = _0xcb2023.nodePermissions(_0x58ae50, "wx");
      if (_0x4f7e49) {
        return _0x4f7e49;
      }
      if (_0x2ae8c7) {
        if (!_0xcb2023.isDir(_0xc0a761.mode)) {
          return 54;
        }
        if (_0xcb2023.isRoot(_0xc0a761) || _0xcb2023.getPath(_0xc0a761) === _0xcb2023.cwd()) {
          return 10;
        }
      } else if (_0xcb2023.isDir(_0xc0a761.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0x261b9b, _0x278daa) {
      if (!_0x261b9b) {
        return 44;
      }
      if (_0xcb2023.isLink(_0x261b9b.mode)) {
        return 32;
      } else if (_0xcb2023.isDir(_0x261b9b.mode)) {
        if (_0xcb2023.flagsToPermissionString(_0x278daa) !== "r" || _0x278daa & 512) {
          return 31;
        }
      }
      return _0xcb2023.nodePermissions(_0x261b9b, _0xcb2023.flagsToPermissionString(_0x278daa));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x596f56, _0x2da61f) {
      _0x596f56 = _0x596f56 || 0;
      _0x2da61f = _0x2da61f || _0xcb2023.MAX_OPEN_FDS;
      for (var _0x5ef906 = _0x596f56; _0x5ef906 <= _0x2da61f; _0x5ef906++) {
        if (!_0xcb2023.streams[_0x5ef906]) {
          return _0x5ef906;
        }
      }
      throw new _0xcb2023.ErrnoError(33);
    },
    getStream: function (_0xdcccec) {
      return _0xcb2023.streams[_0xdcccec];
    },
    createStream: function (_0x57f0c8, _0x32024d, _0x36c64d) {
      if (!_0xcb2023.FSStream) {
        _0xcb2023.FSStream = function () {};
        _0xcb2023.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x340373) {
              this.node = _0x340373;
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
      var _0x2a3774 = new _0xcb2023.FSStream();
      for (var _0x4d88c8 in _0x57f0c8) {
        _0x2a3774[_0x4d88c8] = _0x57f0c8[_0x4d88c8];
      }
      _0x57f0c8 = _0x2a3774;
      var _0x24d0db = _0xcb2023.nextfd(_0x32024d, _0x36c64d);
      _0x57f0c8.fd = _0x24d0db;
      _0xcb2023.streams[_0x24d0db] = _0x57f0c8;
      return _0x57f0c8;
    },
    closeStream: function (_0x535973) {
      _0xcb2023.streams[_0x535973] = null;
    },
    chrdev_stream_ops: {
      open: function (_0x223de5) {
        var _0x459325 = _0xcb2023.getDevice(_0x223de5.node.rdev);
        _0x223de5.stream_ops = _0x459325.stream_ops;
        if (_0x223de5.stream_ops.open) {
          _0x223de5.stream_ops.open(_0x223de5);
        }
      },
      llseek: function () {
        throw new _0xcb2023.ErrnoError(70);
      }
    },
    major: function (_0x18ea97) {
      return _0x18ea97 >> 8;
    },
    minor: function (_0x64bdbf) {
      return _0x64bdbf & 255;
    },
    makedev: function (_0x502b1d, _0x2dcc2f) {
      return _0x502b1d << 8 | _0x2dcc2f;
    },
    registerDevice: function (_0x3d7d25, _0x2e4b35) {
      _0xcb2023.devices[_0x3d7d25] = {
        stream_ops: _0x2e4b35
      };
    },
    getDevice: function (_0x41be20) {
      return _0xcb2023.devices[_0x41be20];
    },
    getMounts: function (_0x541472) {
      var _0x17ed24 = [];
      var _0x1d80e5 = [_0x541472];
      while (_0x1d80e5.length) {
        var _0x23473f = _0x1d80e5.pop();
        _0x17ed24.push(_0x23473f);
        _0x1d80e5.push.apply(_0x1d80e5, _0x23473f.mounts);
      }
      return _0x17ed24;
    },
    syncfs: function (_0x5d494a, _0x350c46) {
      if (typeof _0x5d494a === "function") {
        _0x350c46 = _0x5d494a;
        _0x5d494a = false;
      }
      _0xcb2023.syncFSRequests++;
      if (_0xcb2023.syncFSRequests > 1) {
        _0x5c756b("warning: " + _0xcb2023.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0x339858 = _0xcb2023.getMounts(_0xcb2023.root.mount);
      var _0x2319f4 = 0;
      function _0xc8023d(_0x18f397) {
        _0xcb2023.syncFSRequests--;
        return _0x350c46(_0x18f397);
      }
      function _0x54209b(_0x387b4c) {
        if (_0x387b4c) {
          if (!_0x54209b.errored) {
            _0x54209b.errored = true;
            return _0xc8023d(_0x387b4c);
          }
          return;
        }
        if (++_0x2319f4 >= _0x339858.length) {
          _0xc8023d(null);
        }
      }
      _0x339858.forEach(function (_0x43f192) {
        if (!_0x43f192.type.syncfs) {
          return _0x54209b(null);
        }
        _0x43f192.type.syncfs(_0x43f192, _0x5d494a, _0x54209b);
      });
    },
    mount: function (_0x8dbd66, _0x3347be, _0x562213) {
      var _0x53e17d = _0x562213 === "/";
      var _0x7c9fae = !_0x562213;
      var _0x266b37;
      if (_0x53e17d && _0xcb2023.root) {
        throw new _0xcb2023.ErrnoError(10);
      } else if (!_0x53e17d && !_0x7c9fae) {
        var _0x4f2a7f = _0xcb2023.lookupPath(_0x562213, {
          follow_mount: false
        });
        _0x562213 = _0x4f2a7f.path;
        _0x266b37 = _0x4f2a7f.node;
        if (_0xcb2023.isMountpoint(_0x266b37)) {
          throw new _0xcb2023.ErrnoError(10);
        }
        if (!_0xcb2023.isDir(_0x266b37.mode)) {
          throw new _0xcb2023.ErrnoError(54);
        }
      }
      var _0x3cf9ff = {
        type: _0x8dbd66,
        opts: _0x3347be,
        mountpoint: _0x562213,
        mounts: []
      };
      var _0xc787bd = _0x8dbd66.mount(_0x3cf9ff);
      _0xc787bd.mount = _0x3cf9ff;
      _0x3cf9ff.root = _0xc787bd;
      if (_0x53e17d) {
        _0xcb2023.root = _0xc787bd;
      } else if (_0x266b37) {
        _0x266b37.mounted = _0x3cf9ff;
        if (_0x266b37.mount) {
          _0x266b37.mount.mounts.push(_0x3cf9ff);
        }
      }
      return _0xc787bd;
    },
    unmount: function (_0x44224d) {
      var _0x265458 = _0xcb2023.lookupPath(_0x44224d, {
        follow_mount: false
      });
      if (!_0xcb2023.isMountpoint(_0x265458.node)) {
        throw new _0xcb2023.ErrnoError(28);
      }
      var _0x3f1180 = _0x265458.node;
      var _0x214cf1 = _0x3f1180.mounted;
      var _0x18ba3d = _0xcb2023.getMounts(_0x214cf1);
      Object.keys(_0xcb2023.nameTable).forEach(function (_0x5b780d) {
        var _0x192078 = _0xcb2023.nameTable[_0x5b780d];
        while (_0x192078) {
          var _0x6bb038 = _0x192078.name_next;
          if (_0x18ba3d.includes(_0x192078.mount)) {
            _0xcb2023.destroyNode(_0x192078);
          }
          _0x192078 = _0x6bb038;
        }
      });
      _0x3f1180.mounted = null;
      var _0x3c3f77 = _0x3f1180.mount.mounts.indexOf(_0x214cf1);
      _0x3f1180.mount.mounts.splice(_0x3c3f77, 1);
    },
    lookup: function (_0x122e15, _0xb3d61) {
      return _0x122e15.node_ops.lookup(_0x122e15, _0xb3d61);
    },
    mknod: function (_0x3158cc, _0x34fe46, _0x9be0c1) {
      var _0x1196dd = _0xcb2023.lookupPath(_0x3158cc, {
        parent: true
      });
      var _0x3d8f4a = _0x1196dd.node;
      var _0x2f6243 = _0x4408b2.basename(_0x3158cc);
      if (!_0x2f6243 || _0x2f6243 === "." || _0x2f6243 === "..") {
        throw new _0xcb2023.ErrnoError(28);
      }
      var _0x1a73f7 = _0xcb2023.mayCreate(_0x3d8f4a, _0x2f6243);
      if (_0x1a73f7) {
        throw new _0xcb2023.ErrnoError(_0x1a73f7);
      }
      if (!_0x3d8f4a.node_ops.mknod) {
        throw new _0xcb2023.ErrnoError(63);
      }
      return _0x3d8f4a.node_ops.mknod(_0x3d8f4a, _0x2f6243, _0x34fe46, _0x9be0c1);
    },
    create: function (_0x7f0327, _0x2d0455) {
      _0x2d0455 = _0x2d0455 !== undefined ? _0x2d0455 : 438;
      _0x2d0455 &= 4095;
      _0x2d0455 |= 32768;
      return _0xcb2023.mknod(_0x7f0327, _0x2d0455, 0);
    },
    mkdir: function (_0x4f4088, _0x3dac99) {
      _0x3dac99 = _0x3dac99 !== undefined ? _0x3dac99 : 511;
      _0x3dac99 &= 1023;
      _0x3dac99 |= 16384;
      return _0xcb2023.mknod(_0x4f4088, _0x3dac99, 0);
    },
    mkdirTree: function (_0x94cb17, _0x25dc43) {
      var _0x3b4135 = _0x94cb17.split("/");
      var _0x57ec6a = "";
      for (var _0x13635a = 0; _0x13635a < _0x3b4135.length; ++_0x13635a) {
        if (!_0x3b4135[_0x13635a]) {
          continue;
        }
        _0x57ec6a += "/" + _0x3b4135[_0x13635a];
        try {
          _0xcb2023.mkdir(_0x57ec6a, _0x25dc43);
        } catch (_0x424612) {
          if (_0x424612.errno != 20) {
            throw _0x424612;
          }
        }
      }
    },
    mkdev: function (_0x3212af, _0x171f69, _0x3a6318) {
      if (typeof _0x3a6318 === "undefined") {
        _0x3a6318 = _0x171f69;
        _0x171f69 = 438;
      }
      _0x171f69 |= 8192;
      return _0xcb2023.mknod(_0x3212af, _0x171f69, _0x3a6318);
    },
    symlink: function (_0x417ac0, _0x258914) {
      if (!_0x1ea882.resolve(_0x417ac0)) {
        throw new _0xcb2023.ErrnoError(44);
      }
      var _0xfbd312 = _0xcb2023.lookupPath(_0x258914, {
        parent: true
      });
      var _0x22b7ab = _0xfbd312.node;
      if (!_0x22b7ab) {
        throw new _0xcb2023.ErrnoError(44);
      }
      var _0x1ef100 = _0x4408b2.basename(_0x258914);
      var _0x445e67 = _0xcb2023.mayCreate(_0x22b7ab, _0x1ef100);
      if (_0x445e67) {
        throw new _0xcb2023.ErrnoError(_0x445e67);
      }
      if (!_0x22b7ab.node_ops.symlink) {
        throw new _0xcb2023.ErrnoError(63);
      }
      return _0x22b7ab.node_ops.symlink(_0x22b7ab, _0x1ef100, _0x417ac0);
    },
    rename: function (_0x17988e, _0x1d8a7a) {
      var _0x318a02 = _0x4408b2.dirname(_0x17988e);
      var _0x26122e = _0x4408b2.dirname(_0x1d8a7a);
      var _0x172a00 = _0x4408b2.basename(_0x17988e);
      var _0x11b524 = _0x4408b2.basename(_0x1d8a7a);
      var _0x1be7dc;
      var _0x2cde15;
      var _0xba70a3;
      _0x1be7dc = _0xcb2023.lookupPath(_0x17988e, {
        parent: true
      });
      _0x2cde15 = _0x1be7dc.node;
      _0x1be7dc = _0xcb2023.lookupPath(_0x1d8a7a, {
        parent: true
      });
      _0xba70a3 = _0x1be7dc.node;
      if (!_0x2cde15 || !_0xba70a3) {
        throw new _0xcb2023.ErrnoError(44);
      }
      if (_0x2cde15.mount !== _0xba70a3.mount) {
        throw new _0xcb2023.ErrnoError(75);
      }
      var _0xbd2bda = _0xcb2023.lookupNode(_0x2cde15, _0x172a00);
      var _0x342cd9 = _0x1ea882.relative(_0x17988e, _0x26122e);
      if (_0x342cd9.charAt(0) !== ".") {
        throw new _0xcb2023.ErrnoError(28);
      }
      _0x342cd9 = _0x1ea882.relative(_0x1d8a7a, _0x318a02);
      if (_0x342cd9.charAt(0) !== ".") {
        throw new _0xcb2023.ErrnoError(55);
      }
      var _0x26572c;
      try {
        _0x26572c = _0xcb2023.lookupNode(_0xba70a3, _0x11b524);
      } catch (_0x3113e5) {}
      if (_0xbd2bda === _0x26572c) {
        return;
      }
      var _0x43bd06 = _0xcb2023.isDir(_0xbd2bda.mode);
      var _0x99da95 = _0xcb2023.mayDelete(_0x2cde15, _0x172a00, _0x43bd06);
      if (_0x99da95) {
        throw new _0xcb2023.ErrnoError(_0x99da95);
      }
      _0x99da95 = _0x26572c ? _0xcb2023.mayDelete(_0xba70a3, _0x11b524, _0x43bd06) : _0xcb2023.mayCreate(_0xba70a3, _0x11b524);
      if (_0x99da95) {
        throw new _0xcb2023.ErrnoError(_0x99da95);
      }
      if (!_0x2cde15.node_ops.rename) {
        throw new _0xcb2023.ErrnoError(63);
      }
      if (_0xcb2023.isMountpoint(_0xbd2bda) || _0x26572c && _0xcb2023.isMountpoint(_0x26572c)) {
        throw new _0xcb2023.ErrnoError(10);
      }
      if (_0xba70a3 !== _0x2cde15) {
        _0x99da95 = _0xcb2023.nodePermissions(_0x2cde15, "w");
        if (_0x99da95) {
          throw new _0xcb2023.ErrnoError(_0x99da95);
        }
      }
      try {
        if (_0xcb2023.trackingDelegate.willMovePath) {
          _0xcb2023.trackingDelegate.willMovePath(_0x17988e, _0x1d8a7a);
        }
      } catch (_0x3dae41) {
        _0x5c756b("FS.trackingDelegate['willMovePath']('" + _0x17988e + "', '" + _0x1d8a7a + "') threw an exception: " + _0x3dae41.message);
      }
      _0xcb2023.hashRemoveNode(_0xbd2bda);
      try {
        _0x2cde15.node_ops.rename(_0xbd2bda, _0xba70a3, _0x11b524);
      } catch (_0x463771) {
        throw _0x463771;
      } finally {
        _0xcb2023.hashAddNode(_0xbd2bda);
      }
      try {
        if (_0xcb2023.trackingDelegate.onMovePath) {
          _0xcb2023.trackingDelegate.onMovePath(_0x17988e, _0x1d8a7a);
        }
      } catch (_0x3a3231) {
        _0x5c756b("FS.trackingDelegate['onMovePath']('" + _0x17988e + "', '" + _0x1d8a7a + "') threw an exception: " + _0x3a3231.message);
      }
    },
    rmdir: function (_0x41da86) {
      var _0x268ffa = _0xcb2023.lookupPath(_0x41da86, {
        parent: true
      });
      var _0x1c3af9 = _0x268ffa.node;
      var _0x2c7068 = _0x4408b2.basename(_0x41da86);
      var _0xa8dac2 = _0xcb2023.lookupNode(_0x1c3af9, _0x2c7068);
      var _0x5f0899 = _0xcb2023.mayDelete(_0x1c3af9, _0x2c7068, true);
      if (_0x5f0899) {
        throw new _0xcb2023.ErrnoError(_0x5f0899);
      }
      if (!_0x1c3af9.node_ops.rmdir) {
        throw new _0xcb2023.ErrnoError(63);
      }
      if (_0xcb2023.isMountpoint(_0xa8dac2)) {
        throw new _0xcb2023.ErrnoError(10);
      }
      try {
        if (_0xcb2023.trackingDelegate.willDeletePath) {
          _0xcb2023.trackingDelegate.willDeletePath(_0x41da86);
        }
      } catch (_0x1cf94e) {
        _0x5c756b("FS.trackingDelegate['willDeletePath']('" + _0x41da86 + "') threw an exception: " + _0x1cf94e.message);
      }
      _0x1c3af9.node_ops.rmdir(_0x1c3af9, _0x2c7068);
      _0xcb2023.destroyNode(_0xa8dac2);
      try {
        if (_0xcb2023.trackingDelegate.onDeletePath) {
          _0xcb2023.trackingDelegate.onDeletePath(_0x41da86);
        }
      } catch (_0x42f250) {
        _0x5c756b("FS.trackingDelegate['onDeletePath']('" + _0x41da86 + "') threw an exception: " + _0x42f250.message);
      }
    },
    readdir: function (_0x2dfee4) {
      var _0x257dc0 = _0xcb2023.lookupPath(_0x2dfee4, {
        follow: true
      });
      var _0x1309cf = _0x257dc0.node;
      if (!_0x1309cf.node_ops.readdir) {
        throw new _0xcb2023.ErrnoError(54);
      }
      return _0x1309cf.node_ops.readdir(_0x1309cf);
    },
    unlink: function (_0x5800f9) {
      var _0x567036 = _0xcb2023.lookupPath(_0x5800f9, {
        parent: true
      });
      var _0x22d28a = _0x567036.node;
      var _0xe34ec2 = _0x4408b2.basename(_0x5800f9);
      var _0x7fa8f3 = _0xcb2023.lookupNode(_0x22d28a, _0xe34ec2);
      var _0x4122a0 = _0xcb2023.mayDelete(_0x22d28a, _0xe34ec2, false);
      if (_0x4122a0) {
        throw new _0xcb2023.ErrnoError(_0x4122a0);
      }
      if (!_0x22d28a.node_ops.unlink) {
        throw new _0xcb2023.ErrnoError(63);
      }
      if (_0xcb2023.isMountpoint(_0x7fa8f3)) {
        throw new _0xcb2023.ErrnoError(10);
      }
      try {
        if (_0xcb2023.trackingDelegate.willDeletePath) {
          _0xcb2023.trackingDelegate.willDeletePath(_0x5800f9);
        }
      } catch (_0x7766ce) {
        _0x5c756b("FS.trackingDelegate['willDeletePath']('" + _0x5800f9 + "') threw an exception: " + _0x7766ce.message);
      }
      _0x22d28a.node_ops.unlink(_0x22d28a, _0xe34ec2);
      _0xcb2023.destroyNode(_0x7fa8f3);
      try {
        if (_0xcb2023.trackingDelegate.onDeletePath) {
          _0xcb2023.trackingDelegate.onDeletePath(_0x5800f9);
        }
      } catch (_0x4c3181) {
        _0x5c756b("FS.trackingDelegate['onDeletePath']('" + _0x5800f9 + "') threw an exception: " + _0x4c3181.message);
      }
    },
    readlink: function (_0x883d11) {
      var _0x3e2f94 = _0xcb2023.lookupPath(_0x883d11);
      var _0x104d30 = _0x3e2f94.node;
      if (!_0x104d30) {
        throw new _0xcb2023.ErrnoError(44);
      }
      if (!_0x104d30.node_ops.readlink) {
        throw new _0xcb2023.ErrnoError(28);
      }
      return _0x1ea882.resolve(_0xcb2023.getPath(_0x104d30.parent), _0x104d30.node_ops.readlink(_0x104d30));
    },
    stat: function (_0x251d47, _0xb205d7) {
      var _0x3656b9 = _0xcb2023.lookupPath(_0x251d47, {
        follow: !_0xb205d7
      });
      var _0x1e79f5 = _0x3656b9.node;
      if (!_0x1e79f5) {
        throw new _0xcb2023.ErrnoError(44);
      }
      if (!_0x1e79f5.node_ops.getattr) {
        throw new _0xcb2023.ErrnoError(63);
      }
      return _0x1e79f5.node_ops.getattr(_0x1e79f5);
    },
    lstat: function (_0x2c67a8) {
      return _0xcb2023.stat(_0x2c67a8, true);
    },
    chmod: function (_0xaa4454, _0x5812e3, _0x56079d) {
      var _0x445b14;
      if (typeof _0xaa4454 === "string") {
        var _0x4bb3d0 = _0xcb2023.lookupPath(_0xaa4454, {
          follow: !_0x56079d
        });
        _0x445b14 = _0x4bb3d0.node;
      } else {
        _0x445b14 = _0xaa4454;
      }
      if (!_0x445b14.node_ops.setattr) {
        throw new _0xcb2023.ErrnoError(63);
      }
      _0x445b14.node_ops.setattr(_0x445b14, {
        mode: _0x5812e3 & 4095 | _0x445b14.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0x17865e, _0x3b6e47) {
      _0xcb2023.chmod(_0x17865e, _0x3b6e47, true);
    },
    fchmod: function (_0x5c1f7c, _0x445795) {
      var _0x2f7615 = _0xcb2023.getStream(_0x5c1f7c);
      if (!_0x2f7615) {
        throw new _0xcb2023.ErrnoError(8);
      }
      _0xcb2023.chmod(_0x2f7615.node, _0x445795);
    },
    chown: function (_0x285da7, _0x25d897, _0xc29c6c, _0x28c0d5) {
      var _0x521901;
      if (typeof _0x285da7 === "string") {
        var _0x4d00f1 = _0xcb2023.lookupPath(_0x285da7, {
          follow: !_0x28c0d5
        });
        _0x521901 = _0x4d00f1.node;
      } else {
        _0x521901 = _0x285da7;
      }
      if (!_0x521901.node_ops.setattr) {
        throw new _0xcb2023.ErrnoError(63);
      }
      _0x521901.node_ops.setattr(_0x521901, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0xf6bfc6, _0x3c3636, _0x967691) {
      _0xcb2023.chown(_0xf6bfc6, _0x3c3636, _0x967691, true);
    },
    fchown: function (_0x19847b, _0x8e610a, _0x423329) {
      var _0x223e2a = _0xcb2023.getStream(_0x19847b);
      if (!_0x223e2a) {
        throw new _0xcb2023.ErrnoError(8);
      }
      _0xcb2023.chown(_0x223e2a.node, _0x8e610a, _0x423329);
    },
    truncate: function (_0x3a5c86, _0x33d233) {
      if (_0x33d233 < 0) {
        throw new _0xcb2023.ErrnoError(28);
      }
      var _0x2aa447;
      if (typeof _0x3a5c86 === "string") {
        var _0x19b933 = _0xcb2023.lookupPath(_0x3a5c86, {
          follow: true
        });
        _0x2aa447 = _0x19b933.node;
      } else {
        _0x2aa447 = _0x3a5c86;
      }
      if (!_0x2aa447.node_ops.setattr) {
        throw new _0xcb2023.ErrnoError(63);
      }
      if (_0xcb2023.isDir(_0x2aa447.mode)) {
        throw new _0xcb2023.ErrnoError(31);
      }
      if (!_0xcb2023.isFile(_0x2aa447.mode)) {
        throw new _0xcb2023.ErrnoError(28);
      }
      var _0x5b8141 = _0xcb2023.nodePermissions(_0x2aa447, "w");
      if (_0x5b8141) {
        throw new _0xcb2023.ErrnoError(_0x5b8141);
      }
      _0x2aa447.node_ops.setattr(_0x2aa447, {
        size: _0x33d233,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0xe1add1, _0x1feef7) {
      var _0x4be083 = _0xcb2023.getStream(_0xe1add1);
      if (!_0x4be083) {
        throw new _0xcb2023.ErrnoError(8);
      }
      if ((_0x4be083.flags & 2097155) === 0) {
        throw new _0xcb2023.ErrnoError(28);
      }
      _0xcb2023.truncate(_0x4be083.node, _0x1feef7);
    },
    utime: function (_0x229122, _0xa51f81, _0x212dda) {
      var _0x1e24f5 = _0xcb2023.lookupPath(_0x229122, {
        follow: true
      });
      var _0x53326f = _0x1e24f5.node;
      _0x53326f.node_ops.setattr(_0x53326f, {
        timestamp: Math.max(_0xa51f81, _0x212dda)
      });
    },
    open: function (_0x255936, _0x4f014d, _0x48f5ed, _0x5189a3, _0x26a84f) {
      if (_0x255936 === "") {
        throw new _0xcb2023.ErrnoError(44);
      }
      _0x4f014d = typeof _0x4f014d === "string" ? _0xcb2023.modeStringToFlags(_0x4f014d) : _0x4f014d;
      _0x48f5ed = typeof _0x48f5ed === "undefined" ? 438 : _0x48f5ed;
      if (_0x4f014d & 64) {
        _0x48f5ed = _0x48f5ed & 4095 | 32768;
      } else {
        _0x48f5ed = 0;
      }
      var _0x65e2ec;
      if (typeof _0x255936 === "object") {
        _0x65e2ec = _0x255936;
      } else {
        _0x255936 = _0x4408b2.normalize(_0x255936);
        try {
          var _0x578aac = _0xcb2023.lookupPath(_0x255936, {
            follow: !(_0x4f014d & 131072)
          });
          _0x65e2ec = _0x578aac.node;
        } catch (_0x4a5b98) {}
      }
      var _0x50ec4c = false;
      if (_0x4f014d & 64) {
        if (_0x65e2ec) {
          if (_0x4f014d & 128) {
            throw new _0xcb2023.ErrnoError(20);
          }
        } else {
          _0x65e2ec = _0xcb2023.mknod(_0x255936, _0x48f5ed, 0);
          _0x50ec4c = true;
        }
      }
      if (!_0x65e2ec) {
        throw new _0xcb2023.ErrnoError(44);
      }
      if (_0xcb2023.isChrdev(_0x65e2ec.mode)) {
        _0x4f014d &= ~512;
      }
      if (_0x4f014d & 65536 && !_0xcb2023.isDir(_0x65e2ec.mode)) {
        throw new _0xcb2023.ErrnoError(54);
      }
      if (!_0x50ec4c) {
        var _0x2ed1b8 = _0xcb2023.mayOpen(_0x65e2ec, _0x4f014d);
        if (_0x2ed1b8) {
          throw new _0xcb2023.ErrnoError(_0x2ed1b8);
        }
      }
      if (_0x4f014d & 512) {
        _0xcb2023.truncate(_0x65e2ec, 0);
      }
      _0x4f014d &= ~131712;
      var _0x26f86b = _0xcb2023.createStream({
        node: _0x65e2ec,
        path: _0xcb2023.getPath(_0x65e2ec),
        flags: _0x4f014d,
        seekable: true,
        position: 0,
        stream_ops: _0x65e2ec.stream_ops,
        ungotten: [],
        error: false
      }, _0x5189a3, _0x26a84f);
      if (_0x26f86b.stream_ops.open) {
        _0x26f86b.stream_ops.open(_0x26f86b);
      }
      if (_0x4141f5.logReadFiles && !(_0x4f014d & 1)) {
        if (!_0xcb2023.readFiles) {
          _0xcb2023.readFiles = {};
        }
        if (!(_0x255936 in _0xcb2023.readFiles)) {
          _0xcb2023.readFiles[_0x255936] = 1;
          _0x5c756b("FS.trackingDelegate error on read file: " + _0x255936);
        }
      }
      try {
        if (_0xcb2023.trackingDelegate.onOpenFile) {
          var _0x2b4bc0 = 0;
          if ((_0x4f014d & 2097155) !== 1) {
            _0x2b4bc0 |= _0xcb2023.tracking.openFlags.READ;
          }
          if ((_0x4f014d & 2097155) !== 0) {
            _0x2b4bc0 |= _0xcb2023.tracking.openFlags.WRITE;
          }
          _0xcb2023.trackingDelegate.onOpenFile(_0x255936, _0x2b4bc0);
        }
      } catch (_0x736aba) {
        _0x5c756b("FS.trackingDelegate['onOpenFile']('" + _0x255936 + "', flags) threw an exception: " + _0x736aba.message);
      }
      return _0x26f86b;
    },
    close: function (_0x345073) {
      if (_0xcb2023.isClosed(_0x345073)) {
        throw new _0xcb2023.ErrnoError(8);
      }
      if (_0x345073.getdents) {
        _0x345073.getdents = null;
      }
      try {
        if (_0x345073.stream_ops.close) {
          _0x345073.stream_ops.close(_0x345073);
        }
      } catch (_0x1a7d7c) {
        throw _0x1a7d7c;
      } finally {
        _0xcb2023.closeStream(_0x345073.fd);
      }
      _0x345073.fd = null;
    },
    isClosed: function (_0x13ebfd) {
      return _0x13ebfd.fd === null;
    },
    llseek: function (_0x5593c8, _0x951590, _0x518c18) {
      if (_0xcb2023.isClosed(_0x5593c8)) {
        throw new _0xcb2023.ErrnoError(8);
      }
      if (!_0x5593c8.seekable || !_0x5593c8.stream_ops.llseek) {
        throw new _0xcb2023.ErrnoError(70);
      }
      if (_0x518c18 != 0 && _0x518c18 != 1 && _0x518c18 != 2) {
        throw new _0xcb2023.ErrnoError(28);
      }
      _0x5593c8.position = _0x5593c8.stream_ops.llseek(_0x5593c8, _0x951590, _0x518c18);
      _0x5593c8.ungotten = [];
      return _0x5593c8.position;
    },
    read: function (_0x5dd841, _0x4d94a0, _0x4ca0d4, _0x265dc6, _0x2067d7) {
      if (_0x265dc6 < 0 || _0x2067d7 < 0) {
        throw new _0xcb2023.ErrnoError(28);
      }
      if (_0xcb2023.isClosed(_0x5dd841)) {
        throw new _0xcb2023.ErrnoError(8);
      }
      if ((_0x5dd841.flags & 2097155) === 1) {
        throw new _0xcb2023.ErrnoError(8);
      }
      if (_0xcb2023.isDir(_0x5dd841.node.mode)) {
        throw new _0xcb2023.ErrnoError(31);
      }
      if (!_0x5dd841.stream_ops.read) {
        throw new _0xcb2023.ErrnoError(28);
      }
      var _0x143e18 = typeof _0x2067d7 !== "undefined";
      if (!_0x143e18) {
        _0x2067d7 = _0x5dd841.position;
      } else if (!_0x5dd841.seekable) {
        throw new _0xcb2023.ErrnoError(70);
      }
      var _0x33b8c4 = _0x5dd841.stream_ops.read(_0x5dd841, _0x4d94a0, _0x4ca0d4, _0x265dc6, _0x2067d7);
      if (!_0x143e18) {
        _0x5dd841.position += _0x33b8c4;
      }
      return _0x33b8c4;
    },
    write: function (_0x5b9f22, _0x454c0f, _0x2a55f0, _0x5a338f, _0x4d7710, _0x32b0f7) {
      if (_0x5a338f < 0 || _0x4d7710 < 0) {
        throw new _0xcb2023.ErrnoError(28);
      }
      if (_0xcb2023.isClosed(_0x5b9f22)) {
        throw new _0xcb2023.ErrnoError(8);
      }
      if ((_0x5b9f22.flags & 2097155) === 0) {
        throw new _0xcb2023.ErrnoError(8);
      }
      if (_0xcb2023.isDir(_0x5b9f22.node.mode)) {
        throw new _0xcb2023.ErrnoError(31);
      }
      if (!_0x5b9f22.stream_ops.write) {
        throw new _0xcb2023.ErrnoError(28);
      }
      if (_0x5b9f22.seekable && _0x5b9f22.flags & 1024) {
        _0xcb2023.llseek(_0x5b9f22, 0, 2);
      }
      var _0x5055d8 = typeof _0x4d7710 !== "undefined";
      if (!_0x5055d8) {
        _0x4d7710 = _0x5b9f22.position;
      } else if (!_0x5b9f22.seekable) {
        throw new _0xcb2023.ErrnoError(70);
      }
      var _0x5bca67 = _0x5b9f22.stream_ops.write(_0x5b9f22, _0x454c0f, _0x2a55f0, _0x5a338f, _0x4d7710, _0x32b0f7);
      if (!_0x5055d8) {
        _0x5b9f22.position += _0x5bca67;
      }
      try {
        if (_0x5b9f22.path && _0xcb2023.trackingDelegate.onWriteToFile) {
          _0xcb2023.trackingDelegate.onWriteToFile(_0x5b9f22.path);
        }
      } catch (_0x405318) {
        _0x5c756b("FS.trackingDelegate['onWriteToFile']('" + _0x5b9f22.path + "') threw an exception: " + _0x405318.message);
      }
      return _0x5bca67;
    },
    allocate: function (_0x552752, _0x1ebbf3, _0x330aa4) {
      if (_0xcb2023.isClosed(_0x552752)) {
        throw new _0xcb2023.ErrnoError(8);
      }
      if (_0x1ebbf3 < 0 || _0x330aa4 <= 0) {
        throw new _0xcb2023.ErrnoError(28);
      }
      if ((_0x552752.flags & 2097155) === 0) {
        throw new _0xcb2023.ErrnoError(8);
      }
      if (!_0xcb2023.isFile(_0x552752.node.mode) && !_0xcb2023.isDir(_0x552752.node.mode)) {
        throw new _0xcb2023.ErrnoError(43);
      }
      if (!_0x552752.stream_ops.allocate) {
        throw new _0xcb2023.ErrnoError(138);
      }
      _0x552752.stream_ops.allocate(_0x552752, _0x1ebbf3, _0x330aa4);
    },
    mmap: function (_0x44f905, _0x31e204, _0x286ad2, _0x43ae97, _0x4d4fe3, _0x3440fc) {
      if ((_0x4d4fe3 & 2) !== 0 && (_0x3440fc & 2) === 0 && (_0x44f905.flags & 2097155) !== 2) {
        throw new _0xcb2023.ErrnoError(2);
      }
      if ((_0x44f905.flags & 2097155) === 1) {
        throw new _0xcb2023.ErrnoError(2);
      }
      if (!_0x44f905.stream_ops.mmap) {
        throw new _0xcb2023.ErrnoError(43);
      }
      return _0x44f905.stream_ops.mmap(_0x44f905, _0x31e204, _0x286ad2, _0x43ae97, _0x4d4fe3, _0x3440fc);
    },
    msync: function (_0x234ce6, _0x2a3a44, _0x3f183a, _0x159b12, _0x4c63c9) {
      if (!_0x234ce6 || !_0x234ce6.stream_ops.msync) {
        return 0;
      }
      return _0x234ce6.stream_ops.msync(_0x234ce6, _0x2a3a44, _0x3f183a, _0x159b12, _0x4c63c9);
    },
    munmap: function (_0x37ef8e) {
      return 0;
    },
    ioctl: function (_0x57910a, _0x4e7fb4, _0xc661f) {
      if (!_0x57910a.stream_ops.ioctl) {
        throw new _0xcb2023.ErrnoError(59);
      }
      return _0x57910a.stream_ops.ioctl(_0x57910a, _0x4e7fb4, _0xc661f);
    },
    readFile: function (_0x21b3d5, _0xc4c4e0) {
      _0xc4c4e0 = _0xc4c4e0 || {};
      _0xc4c4e0.flags = _0xc4c4e0.flags || 0;
      _0xc4c4e0.encoding = _0xc4c4e0.encoding || "binary";
      if (_0xc4c4e0.encoding !== "utf8" && _0xc4c4e0.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0xc4c4e0.encoding + "\"");
      }
      var _0x11d665;
      var _0x1da506 = _0xcb2023.open(_0x21b3d5, _0xc4c4e0.flags);
      var _0x140828 = _0xcb2023.stat(_0x21b3d5);
      var _0x54374c = _0x140828.size;
      var _0x458a07 = new Uint8Array(_0x54374c);
      _0xcb2023.read(_0x1da506, _0x458a07, 0, _0x54374c, 0);
      if (_0xc4c4e0.encoding === "utf8") {
        _0x11d665 = _0x3f816a(_0x458a07, 0);
      } else if (_0xc4c4e0.encoding === "binary") {
        _0x11d665 = _0x458a07;
      }
      _0xcb2023.close(_0x1da506);
      return _0x11d665;
    },
    writeFile: function (_0x348c32, _0x523497, _0x2dceca) {
      _0x2dceca = _0x2dceca || {};
      _0x2dceca.flags = _0x2dceca.flags || 577;
      var _0x4ec90d = _0xcb2023.open(_0x348c32, _0x2dceca.flags, _0x2dceca.mode);
      if (typeof _0x523497 === "string") {
        var _0x36165f = new Uint8Array(_0x4da9ba(_0x523497) + 1);
        var _0x2a625d = _0x3e0117(_0x523497, _0x36165f, 0, _0x36165f.length);
        _0xcb2023.write(_0x4ec90d, _0x36165f, 0, _0x2a625d, undefined, _0x2dceca.canOwn);
      } else if (ArrayBuffer.isView(_0x523497)) {
        _0xcb2023.write(_0x4ec90d, _0x523497, 0, _0x523497.byteLength, undefined, _0x2dceca.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0xcb2023.close(_0x4ec90d);
    },
    cwd: function () {
      return _0xcb2023.currentPath;
    },
    chdir: function (_0x29f870) {
      var _0x780330 = _0xcb2023.lookupPath(_0x29f870, {
        follow: true
      });
      if (_0x780330.node === null) {
        throw new _0xcb2023.ErrnoError(44);
      }
      if (!_0xcb2023.isDir(_0x780330.node.mode)) {
        throw new _0xcb2023.ErrnoError(54);
      }
      var _0x24c266 = _0xcb2023.nodePermissions(_0x780330.node, "x");
      if (_0x24c266) {
        throw new _0xcb2023.ErrnoError(_0x24c266);
      }
      _0xcb2023.currentPath = _0x780330.path;
    },
    createDefaultDirectories: function () {
      _0xcb2023.mkdir("/tmp");
      _0xcb2023.mkdir("/home");
      _0xcb2023.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0xcb2023.mkdir("/dev");
      _0xcb2023.registerDevice(_0xcb2023.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0x5df218, _0x10f686, _0x17629a, _0x133c96, _0x4ab97e) {
          return _0x133c96;
        }
      });
      _0xcb2023.mkdev("/dev/null", _0xcb2023.makedev(1, 3));
      _0x3f6b4d.register(_0xcb2023.makedev(5, 0), _0x3f6b4d.default_tty_ops);
      _0x3f6b4d.register(_0xcb2023.makedev(6, 0), _0x3f6b4d.default_tty1_ops);
      _0xcb2023.mkdev("/dev/tty", _0xcb2023.makedev(5, 0));
      _0xcb2023.mkdev("/dev/tty1", _0xcb2023.makedev(6, 0));
      var _0x4985cb = _0x32f1e9();
      _0xcb2023.createDevice("/dev", "random", _0x4985cb);
      _0xcb2023.createDevice("/dev", "urandom", _0x4985cb);
      _0xcb2023.mkdir("/dev/shm");
      _0xcb2023.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0xcb2023.mkdir("/proc");
      var _0x3b36e5 = _0xcb2023.mkdir("/proc/self");
      _0xcb2023.mkdir("/proc/self/fd");
      _0xcb2023.mount({
        mount: function () {
          var _0x1a5217 = _0xcb2023.createNode(_0x3b36e5, "fd", 16895, 73);
          _0x1a5217.node_ops = {
            lookup: function (_0x194550, _0x3c12ef) {
              var _0x51047b = +_0x3c12ef;
              var _0x37c529 = _0xcb2023.getStream(_0x51047b);
              if (!_0x37c529) {
                throw new _0xcb2023.ErrnoError(8);
              }
              var _0x318c15 = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x37c529.path;
                  }
                }
              };
              _0x318c15.parent = _0x318c15;
              return _0x318c15;
            }
          };
          return _0x1a5217;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0x4141f5.stdin) {
        _0xcb2023.createDevice("/dev", "stdin", _0x4141f5.stdin);
      } else {
        _0xcb2023.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0x4141f5.stdout) {
        _0xcb2023.createDevice("/dev", "stdout", null, _0x4141f5.stdout);
      } else {
        _0xcb2023.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0x4141f5.stderr) {
        _0xcb2023.createDevice("/dev", "stderr", null, _0x4141f5.stderr);
      } else {
        _0xcb2023.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0x343e24 = _0xcb2023.open("/dev/stdin", 0);
      var _0x329c9e = _0xcb2023.open("/dev/stdout", 1);
      var _0x1d3aa2 = _0xcb2023.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0xcb2023.ErrnoError) {
        return;
      }
      _0xcb2023.ErrnoError = function _0x2704e1(_0x213f15, _0xb9add1) {
        this.node = _0xb9add1;
        this.setErrno = function (_0x50ed20) {
          this.errno = _0x50ed20;
        };
        this.setErrno(_0x213f15);
        this.message = "FS error";
      };
      _0xcb2023.ErrnoError.prototype = new Error();
      _0xcb2023.ErrnoError.prototype.constructor = _0xcb2023.ErrnoError;
      [44].forEach(function (_0x17e2b7) {
        _0xcb2023.genericErrors[_0x17e2b7] = new _0xcb2023.ErrnoError(_0x17e2b7);
        _0xcb2023.genericErrors[_0x17e2b7].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0xcb2023.ensureErrnoError();
      _0xcb2023.nameTable = new Array(4096);
      _0xcb2023.mount(_0x21b6e4, {}, "/");
      _0xcb2023.createDefaultDirectories();
      _0xcb2023.createDefaultDevices();
      _0xcb2023.createSpecialDirectories();
      _0xcb2023.filesystems = {
        MEMFS: _0x21b6e4,
        IDBFS: _0x19020d
      };
    },
    init: function (_0x51e866, _0x23edd6, _0x5730c9) {
      _0xcb2023.init.initialized = true;
      _0xcb2023.ensureErrnoError();
      _0x4141f5.stdin = _0x51e866 || _0x4141f5.stdin;
      _0x4141f5.stdout = _0x23edd6 || _0x4141f5.stdout;
      _0x4141f5.stderr = _0x5730c9 || _0x4141f5.stderr;
      _0xcb2023.createStandardStreams();
    },
    quit: function () {
      _0xcb2023.init.initialized = false;
      var _0x397fe9 = _0x4141f5._fflush;
      if (_0x397fe9) {
        _0x397fe9(0);
      }
      for (var _0x9ab705 = 0; _0x9ab705 < _0xcb2023.streams.length; _0x9ab705++) {
        var _0x240772 = _0xcb2023.streams[_0x9ab705];
        if (!_0x240772) {
          continue;
        }
        _0xcb2023.close(_0x240772);
      }
    },
    getMode: function (_0x38d70e, _0x42d93a) {
      var _0x79bdc2 = 0;
      if (_0x38d70e) {
        _0x79bdc2 |= 365;
      }
      if (_0x42d93a) {
        _0x79bdc2 |= 146;
      }
      return _0x79bdc2;
    },
    findObject: function (_0x2ab64d, _0x47a9c5) {
      var _0x59c80e = _0xcb2023.analyzePath(_0x2ab64d, _0x47a9c5);
      if (_0x59c80e.exists) {
        return _0x59c80e.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0x1375a3, _0x3ace89) {
      try {
        var _0x437b8e = _0xcb2023.lookupPath(_0x1375a3, {
          follow: !_0x3ace89
        });
        _0x1375a3 = _0x437b8e.path;
      } catch (_0x271dcb) {}
      var _0x97f2ad = {
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
        var _0x437b8e = _0xcb2023.lookupPath(_0x1375a3, {
          parent: true
        });
        _0x97f2ad.parentExists = true;
        _0x97f2ad.parentPath = _0x437b8e.path;
        _0x97f2ad.parentObject = _0x437b8e.node;
        _0x97f2ad.name = _0x4408b2.basename(_0x1375a3);
        _0x437b8e = _0xcb2023.lookupPath(_0x1375a3, {
          follow: !_0x3ace89
        });
        _0x97f2ad.exists = true;
        _0x97f2ad.path = _0x437b8e.path;
        _0x97f2ad.object = _0x437b8e.node;
        _0x97f2ad.name = _0x437b8e.node.name;
        _0x97f2ad.isRoot = _0x437b8e.path === "/";
      } catch (_0x509dc5) {
        _0x97f2ad.error = _0x509dc5.errno;
      }
      return _0x97f2ad;
    },
    createPath: function (_0x59a821, _0x1eba9f, _0x31fc57, _0x38cc09) {
      _0x59a821 = typeof _0x59a821 === "string" ? _0x59a821 : _0xcb2023.getPath(_0x59a821);
      var _0x2dbe40 = _0x1eba9f.split("/").reverse();
      while (_0x2dbe40.length) {
        var _0x2c61c4 = _0x2dbe40.pop();
        if (!_0x2c61c4) {
          continue;
        }
        var _0x290e51 = _0x4408b2.join2(_0x59a821, _0x2c61c4);
        try {
          _0xcb2023.mkdir(_0x290e51);
        } catch (_0x3db59d) {}
        _0x59a821 = _0x290e51;
      }
      return _0x290e51;
    },
    createFile: function (_0x192d8c, _0x5ac134, _0x21bc1e, _0x1a9273, _0x3de8cd) {
      var _0x4279fa = _0x4408b2.join2(typeof _0x192d8c === "string" ? _0x192d8c : _0xcb2023.getPath(_0x192d8c), _0x5ac134);
      var _0x3a8e30 = _0xcb2023.getMode(_0x1a9273, _0x3de8cd);
      return _0xcb2023.create(_0x4279fa, _0x3a8e30);
    },
    createDataFile: function (_0x3042ca, _0x797ba7, _0xf0a7d0, _0x51bd58, _0x219b67, _0x156812) {
      var _0x2b8cf2 = _0x797ba7 ? _0x4408b2.join2(typeof _0x3042ca === "string" ? _0x3042ca : _0xcb2023.getPath(_0x3042ca), _0x797ba7) : _0x3042ca;
      var _0x519c52 = _0xcb2023.getMode(_0x51bd58, _0x219b67);
      var _0x1179cc = _0xcb2023.create(_0x2b8cf2, _0x519c52);
      if (_0xf0a7d0) {
        if (typeof _0xf0a7d0 === "string") {
          var _0x13bf2e = new Array(_0xf0a7d0.length);
          for (var _0x1020c8 = 0, _0x3974d0 = _0xf0a7d0.length; _0x1020c8 < _0x3974d0; ++_0x1020c8) {
            _0x13bf2e[_0x1020c8] = _0xf0a7d0.charCodeAt(_0x1020c8);
          }
          _0xf0a7d0 = _0x13bf2e;
        }
        _0xcb2023.chmod(_0x1179cc, _0x519c52 | 146);
        var _0x292cc5 = _0xcb2023.open(_0x1179cc, 577);
        _0xcb2023.write(_0x292cc5, _0xf0a7d0, 0, _0xf0a7d0.length, 0, _0x156812);
        _0xcb2023.close(_0x292cc5);
        _0xcb2023.chmod(_0x1179cc, _0x519c52);
      }
      return _0x1179cc;
    },
    createDevice: function (_0x44ff9e, _0x4e0e08, _0x18d5ea, _0x25d932) {
      var _0x358028 = _0x4408b2.join2(typeof _0x44ff9e === "string" ? _0x44ff9e : _0xcb2023.getPath(_0x44ff9e), _0x4e0e08);
      var _0x367d52 = _0xcb2023.getMode(!!_0x18d5ea, !!_0x25d932);
      if (!_0xcb2023.createDevice.major) {
        _0xcb2023.createDevice.major = 64;
      }
      var _0x2f2899 = _0xcb2023.makedev(_0xcb2023.createDevice.major++, 0);
      _0xcb2023.registerDevice(_0x2f2899, {
        open: function (_0x3c6e3a) {
          _0x3c6e3a.seekable = false;
        },
        close: function (_0x557646) {
          if (_0x25d932 && _0x25d932.buffer && _0x25d932.buffer.length) {
            _0x25d932(10);
          }
        },
        read: function (_0x4d3583, _0x16f7f3, _0x48195a, _0x568f76, _0x4c8a39) {
          var _0x3ddf1c = 0;
          for (var _0x5a4a39 = 0; _0x5a4a39 < _0x568f76; _0x5a4a39++) {
            var _0x292aaa;
            try {
              _0x292aaa = _0x18d5ea();
            } catch (_0x2c4fae) {
              throw new _0xcb2023.ErrnoError(29);
            }
            if (_0x292aaa === undefined && _0x3ddf1c === 0) {
              throw new _0xcb2023.ErrnoError(6);
            }
            if (_0x292aaa === null || _0x292aaa === undefined) {
              break;
            }
            _0x3ddf1c++;
            _0x16f7f3[_0x48195a + _0x5a4a39] = _0x292aaa;
          }
          if (_0x3ddf1c) {
            _0x4d3583.node.timestamp = Date.now();
          }
          return _0x3ddf1c;
        },
        write: function (_0x391d1c, _0x1541ff, _0x300db6, _0x29a996, _0x53deff) {
          for (var _0x57d79b = 0; _0x57d79b < _0x29a996; _0x57d79b++) {
            try {
              _0x25d932(_0x1541ff[_0x300db6 + _0x57d79b]);
            } catch (_0x6730ad) {
              throw new _0xcb2023.ErrnoError(29);
            }
          }
          if (_0x29a996) {
            _0x391d1c.node.timestamp = Date.now();
          }
          return _0x57d79b;
        }
      });
      return _0xcb2023.mkdev(_0x358028, _0x367d52, _0x2f2899);
    },
    forceLoadFile: function (_0x98a3d5) {
      if (_0x98a3d5.isDevice || _0x98a3d5.isFolder || _0x98a3d5.link || _0x98a3d5.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0xc2cb8b) {
        try {
          _0x98a3d5.contents = _0x710a1f(_0xc2cb8b(_0x98a3d5.url), true);
          _0x98a3d5.usedBytes = _0x98a3d5.contents.length;
        } catch (_0x518599) {
          throw new _0xcb2023.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x45d80b, _0x2a3048, _0x1ec8db, _0x17dcee, _0x24e6df) {
      function _0x3c4ecd() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x3c4ecd.prototype.get = function _0x366b88(_0xc8e521) {
        if (_0xc8e521 > this.length - 1 || _0xc8e521 < 0) {
          return undefined;
        }
        var _0x3c5925 = _0xc8e521 % this.chunkSize;
        var _0x158bfe = _0xc8e521 / this.chunkSize | 0;
        return this.getter(_0x158bfe)[_0x3c5925];
      };
      _0x3c4ecd.prototype.setDataGetter = function _0x3dd040(_0x2afe56) {
        this.getter = _0x2afe56;
      };
      _0x3c4ecd.prototype.cacheLength = function _0x295b19() {
        var _0x35fa52 = new XMLHttpRequest();
        _0x35fa52.open("HEAD", _0x1ec8db, false);
        _0x35fa52.send(null);
        if ((!(_0x35fa52.status >= 200) || !(_0x35fa52.status < 300)) && _0x35fa52.status !== 304) {
          throw new Error("Couldn't load " + _0x1ec8db + ". Status: " + _0x35fa52.status);
        }
        var _0x1c56be = Number(_0x35fa52.getResponseHeader("Content-length"));
        var _0x52418e;
        var _0x4aea15 = (_0x52418e = _0x35fa52.getResponseHeader("Accept-Ranges")) && _0x52418e === "bytes";
        var _0x119429 = (_0x52418e = _0x35fa52.getResponseHeader("Content-Encoding")) && _0x52418e === "gzip";
        var _0x2eb25b = 1048576;
        if (!_0x4aea15) {
          _0x2eb25b = _0x1c56be;
        }
        function _0xe81338(_0x12ff04, _0x46c13b) {
          if (_0x12ff04 > _0x46c13b) {
            throw new Error("invalid range (" + _0x12ff04 + ", " + _0x46c13b + ") or no bytes requested!");
          }
          if (_0x46c13b > _0x1c56be - 1) {
            throw new Error("only " + _0x1c56be + " bytes available! programmer error!");
          }
          var _0x1f295d = new XMLHttpRequest();
          _0x1f295d.open("GET", _0x1ec8db, false);
          if (_0x1c56be !== _0x2eb25b) {
            _0x1f295d.setRequestHeader("Range", "bytes=" + _0x12ff04 + "-" + _0x46c13b);
          }
          if (typeof Uint8Array != "undefined") {
            _0x1f295d.responseType = "arraybuffer";
          }
          if (_0x1f295d.overrideMimeType) {
            _0x1f295d.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x1f295d.send(null);
          if ((!(_0x1f295d.status >= 200) || !(_0x1f295d.status < 300)) && _0x1f295d.status !== 304) {
            throw new Error("Couldn't load " + _0x1ec8db + ". Status: " + _0x1f295d.status);
          }
          if (_0x1f295d.response !== undefined) {
            return new Uint8Array(_0x1f295d.response || []);
          } else {
            return _0x710a1f(_0x1f295d.responseText || "", true);
          }
        }
        var _0x493026 = this;
        _0x493026.setDataGetter(function (_0x5a5908) {
          var _0x31d754 = _0x5a5908 * _0x2eb25b;
          var _0x4ed330 = (_0x5a5908 + 1) * _0x2eb25b - 1;
          _0x4ed330 = Math.min(_0x4ed330, _0x1c56be - 1);
          if (typeof _0x493026.chunks[_0x5a5908] === "undefined") {
            _0x493026.chunks[_0x5a5908] = _0xe81338(_0x31d754, _0x4ed330);
          }
          if (typeof _0x493026.chunks[_0x5a5908] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x493026.chunks[_0x5a5908];
        });
        if (_0x119429 || !_0x1c56be) {
          _0x2eb25b = _0x1c56be = 1;
          _0x1c56be = this.getter(0).length;
          _0x2eb25b = _0x1c56be;
          _0x576054("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x1c56be;
        this._chunkSize = _0x2eb25b;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x8e8b07) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x2ce7c3 = new _0x3c4ecd();
        Object.defineProperties(_0x2ce7c3, {
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
        var _0x2b0252 = {
          isDevice: false,
          contents: _0x2ce7c3
        };
      } else {
        var _0x2b0252 = {
          isDevice: false,
          url: _0x1ec8db
        };
      }
      var _0x5dacdc = _0xcb2023.createFile(_0x45d80b, _0x2a3048, _0x2b0252, _0x17dcee, _0x24e6df);
      if (_0x2b0252.contents) {
        _0x5dacdc.contents = _0x2b0252.contents;
      } else if (_0x2b0252.url) {
        _0x5dacdc.contents = null;
        _0x5dacdc.url = _0x2b0252.url;
      }
      Object.defineProperties(_0x5dacdc, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0x82f6d0 = {};
      var _0x3e3bce = Object.keys(_0x5dacdc.stream_ops);
      _0x3e3bce.forEach(function (_0x4e4e99) {
        var _0x24076b = _0x5dacdc.stream_ops[_0x4e4e99];
        _0x82f6d0[_0x4e4e99] = function _0x447b89() {
          _0xcb2023.forceLoadFile(_0x5dacdc);
          return _0x24076b.apply(null, arguments);
        };
      });
      _0x82f6d0.read = function _0x21d1c9(_0xb1d852, _0x332acd, _0x147580, _0x2de932, _0x5bc337) {
        _0xcb2023.forceLoadFile(_0x5dacdc);
        var _0x3d7594 = _0xb1d852.node.contents;
        if (_0x5bc337 >= _0x3d7594.length) {
          return 0;
        }
        var _0x3291ee = Math.min(_0x3d7594.length - _0x5bc337, _0x2de932);
        if (_0x3d7594.slice) {
          for (var _0x4548f1 = 0; _0x4548f1 < _0x3291ee; _0x4548f1++) {
            _0x332acd[_0x147580 + _0x4548f1] = _0x3d7594[_0x5bc337 + _0x4548f1];
          }
        } else {
          for (var _0x4548f1 = 0; _0x4548f1 < _0x3291ee; _0x4548f1++) {
            _0x332acd[_0x147580 + _0x4548f1] = _0x3d7594.get(_0x5bc337 + _0x4548f1);
          }
        }
        return _0x3291ee;
      };
      _0x5dacdc.stream_ops = _0x82f6d0;
      return _0x5dacdc;
    },
    createPreloadedFile: function (_0x542856, _0x16568d, _0xa50724, _0x26d77c, _0x3a8b35, _0x3a8ddb, _0x1ba911, _0x5105c9, _0x57075d, _0x4f1ab9) {
      _0x4989e8.init();
      var _0x542377 = _0x16568d ? _0x1ea882.resolve(_0x4408b2.join2(_0x542856, _0x16568d)) : _0x542856;
      var _0x135cdd = _0x58bbd4("cp " + _0x542377);
      function _0x40738e(_0x2e55dc) {
        function _0x301eca(_0x83def8) {
          if (_0x4f1ab9) {
            _0x4f1ab9();
          }
          if (!_0x5105c9) {
            _0xcb2023.createDataFile(_0x542856, _0x16568d, _0x83def8, _0x26d77c, _0x3a8b35, _0x57075d);
          }
          if (_0x3a8ddb) {
            _0x3a8ddb();
          }
          _0x97cacc(_0x135cdd);
        }
        var _0x6c6106 = false;
        _0x4141f5.preloadPlugins.forEach(function (_0x5242ad) {
          if (_0x6c6106) {
            return;
          }
          if (_0x5242ad.canHandle(_0x542377)) {
            _0x5242ad.handle(_0x2e55dc, _0x542377, _0x301eca, function () {
              if (_0x1ba911) {
                _0x1ba911();
              }
              _0x97cacc(_0x135cdd);
            });
            _0x6c6106 = true;
          }
        });
        if (!_0x6c6106) {
          _0x301eca(_0x2e55dc);
        }
      }
      _0x2e72ba(_0x135cdd);
      if (typeof _0xa50724 == "string") {
        _0x4989e8.asyncLoad(_0xa50724, function (_0x593dad) {
          _0x40738e(_0x593dad);
        }, _0x1ba911);
      } else {
        _0x40738e(_0xa50724);
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
    saveFilesToDB: function (_0x24ee0a, _0x1f6173, _0x420909) {
      _0x1f6173 = _0x1f6173 || function () {};
      _0x420909 = _0x420909 || function () {};
      var _0x24c5f7 = _0xcb2023.indexedDB();
      try {
        var _0x2731e1 = _0x24c5f7.open(_0xcb2023.DB_NAME(), _0xcb2023.DB_VERSION);
      } catch (_0x4c83c4) {
        return _0x420909(_0x4c83c4);
      }
      _0x2731e1.onupgradeneeded = function _0x43bb97() {
        _0x576054("creating db");
        var _0x26a0ab = _0x2731e1.result;
        _0x26a0ab.createObjectStore(_0xcb2023.DB_STORE_NAME);
      };
      _0x2731e1.onsuccess = function _0x7b798a() {
        var _0x5cb149 = _0x2731e1.result;
        var _0x55a4ff = _0x5cb149.transaction([_0xcb2023.DB_STORE_NAME], "readwrite");
        var _0x2c548e = _0x55a4ff.objectStore(_0xcb2023.DB_STORE_NAME);
        var _0x37b85d = 0;
        var _0x2e0094 = 0;
        var _0x4618cf = _0x24ee0a.length;
        function _0x25ea7e() {
          if (_0x2e0094 == 0) {
            _0x1f6173();
          } else {
            _0x420909();
          }
        }
        _0x24ee0a.forEach(function (_0x37921b) {
          var _0x2cb025 = _0x2c548e.put(_0xcb2023.analyzePath(_0x37921b).object.contents, _0x37921b);
          _0x2cb025.onsuccess = function _0x4e21e7() {
            _0x37b85d++;
            if (_0x37b85d + _0x2e0094 == _0x4618cf) {
              _0x25ea7e();
            }
          };
          _0x2cb025.onerror = function _0x13831e() {
            _0x2e0094++;
            if (_0x37b85d + _0x2e0094 == _0x4618cf) {
              _0x25ea7e();
            }
          };
        });
        _0x55a4ff.onerror = _0x420909;
      };
      _0x2731e1.onerror = _0x420909;
    },
    loadFilesFromDB: function (_0xd41cd5, _0x51906e, _0x5abf77) {
      _0x51906e = _0x51906e || function () {};
      _0x5abf77 = _0x5abf77 || function () {};
      var _0x51195a = _0xcb2023.indexedDB();
      try {
        var _0x454675 = _0x51195a.open(_0xcb2023.DB_NAME(), _0xcb2023.DB_VERSION);
      } catch (_0x182c93) {
        return _0x5abf77(_0x182c93);
      }
      _0x454675.onupgradeneeded = _0x5abf77;
      _0x454675.onsuccess = function _0x2ee46d() {
        var _0x465e91 = _0x454675.result;
        try {
          var _0x1b3c95 = _0x465e91.transaction([_0xcb2023.DB_STORE_NAME], "readonly");
        } catch (_0x783caf) {
          _0x5abf77(_0x783caf);
          return;
        }
        var _0x45609a = _0x1b3c95.objectStore(_0xcb2023.DB_STORE_NAME);
        var _0x391141 = 0;
        var _0x85316 = 0;
        var _0x1f63d9 = _0xd41cd5.length;
        function _0x2148a5() {
          if (_0x85316 == 0) {
            _0x51906e();
          } else {
            _0x5abf77();
          }
        }
        _0xd41cd5.forEach(function (_0x207037) {
          var _0x3a63fa = _0x45609a.get(_0x207037);
          _0x3a63fa.onsuccess = function _0x23607c() {
            if (_0xcb2023.analyzePath(_0x207037).exists) {
              _0xcb2023.unlink(_0x207037);
            }
            _0xcb2023.createDataFile(_0x4408b2.dirname(_0x207037), _0x4408b2.basename(_0x207037), _0x3a63fa.result, true, true, true);
            _0x391141++;
            if (_0x391141 + _0x85316 == _0x1f63d9) {
              _0x2148a5();
            }
          };
          _0x3a63fa.onerror = function _0x36adde() {
            _0x85316++;
            if (_0x391141 + _0x85316 == _0x1f63d9) {
              _0x2148a5();
            }
          };
        });
        _0x1b3c95.onerror = _0x5abf77;
      };
      _0x454675.onerror = _0x5abf77;
    }
  };
  var _0x519c68 = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x4ed64c, _0x3b1881, _0x356461) {
      if (_0x3b1881[0] === "/") {
        return _0x3b1881;
      }
      var _0x51bce2;
      if (_0x4ed64c === -100) {
        _0x51bce2 = _0xcb2023.cwd();
      } else {
        var _0x44013d = _0xcb2023.getStream(_0x4ed64c);
        if (!_0x44013d) {
          throw new _0xcb2023.ErrnoError(8);
        }
        _0x51bce2 = _0x44013d.path;
      }
      if (_0x3b1881.length == 0) {
        if (!_0x356461) {
          throw new _0xcb2023.ErrnoError(44);
        }
        return _0x51bce2;
      }
      return _0x4408b2.join2(_0x51bce2, _0x3b1881);
    },
    doStat: function (_0x2eb603, _0x27b55a, _0x3b630c) {
      try {
        var _0x126ecc = _0x2eb603(_0x27b55a);
      } catch (_0x4155b1) {
        if (_0x4155b1 && _0x4155b1.node && _0x4408b2.normalize(_0x27b55a) !== _0x4408b2.normalize(_0xcb2023.getPath(_0x4155b1.node))) {
          return -54;
        }
        throw _0x4155b1;
      }
      _0x2c6e39[_0x3b630c >> 2] = _0x126ecc.dev;
      _0x2c6e39[_0x3b630c + 4 >> 2] = 0;
      _0x2c6e39[_0x3b630c + 8 >> 2] = _0x126ecc.ino;
      _0x2c6e39[_0x3b630c + 12 >> 2] = _0x126ecc.mode;
      _0x2c6e39[_0x3b630c + 16 >> 2] = _0x126ecc.nlink;
      _0x2c6e39[_0x3b630c + 20 >> 2] = _0x126ecc.uid;
      _0x2c6e39[_0x3b630c + 24 >> 2] = _0x126ecc.gid;
      _0x2c6e39[_0x3b630c + 28 >> 2] = _0x126ecc.rdev;
      _0x2c6e39[_0x3b630c + 32 >> 2] = 0;
      _0x3df107 = [_0x126ecc.size >>> 0, (_0xe392d5 = _0x126ecc.size, +Math.abs(_0xe392d5) >= 1 ? _0xe392d5 > 0 ? (Math.min(+Math.floor(_0xe392d5 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0xe392d5 - +(~~_0xe392d5 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x2c6e39[_0x3b630c + 40 >> 2] = _0x3df107[0];
      _0x2c6e39[_0x3b630c + 44 >> 2] = _0x3df107[1];
      _0x2c6e39[_0x3b630c + 48 >> 2] = 4096;
      _0x2c6e39[_0x3b630c + 52 >> 2] = _0x126ecc.blocks;
      _0x2c6e39[_0x3b630c + 56 >> 2] = _0x126ecc.atime.getTime() / 1000 | 0;
      _0x2c6e39[_0x3b630c + 60 >> 2] = 0;
      _0x2c6e39[_0x3b630c + 64 >> 2] = _0x126ecc.mtime.getTime() / 1000 | 0;
      _0x2c6e39[_0x3b630c + 68 >> 2] = 0;
      _0x2c6e39[_0x3b630c + 72 >> 2] = _0x126ecc.ctime.getTime() / 1000 | 0;
      _0x2c6e39[_0x3b630c + 76 >> 2] = 0;
      _0x3df107 = [_0x126ecc.ino >>> 0, (_0xe392d5 = _0x126ecc.ino, +Math.abs(_0xe392d5) >= 1 ? _0xe392d5 > 0 ? (Math.min(+Math.floor(_0xe392d5 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0xe392d5 - +(~~_0xe392d5 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x2c6e39[_0x3b630c + 80 >> 2] = _0x3df107[0];
      _0x2c6e39[_0x3b630c + 84 >> 2] = _0x3df107[1];
      return 0;
    },
    doMsync: function (_0x58d5da, _0x8499d5, _0x4ebd57, _0x2b59e9, _0x3e0421) {
      var _0x28611e = _0x42b281.slice(_0x58d5da, _0x58d5da + _0x4ebd57);
      _0xcb2023.msync(_0x8499d5, _0x28611e, _0x3e0421, _0x4ebd57, _0x2b59e9);
    },
    doMkdir: function (_0x25a01d, _0x2b0f35) {
      _0x25a01d = _0x4408b2.normalize(_0x25a01d);
      if (_0x25a01d[_0x25a01d.length - 1] === "/") {
        _0x25a01d = _0x25a01d.substr(0, _0x25a01d.length - 1);
      }
      _0xcb2023.mkdir(_0x25a01d, _0x2b0f35, 0);
      return 0;
    },
    doMknod: function (_0x494367, _0x529e44, _0x5920d5) {
      switch (_0x529e44 & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0xcb2023.mknod(_0x494367, _0x529e44, _0x5920d5);
      return 0;
    },
    doReadlink: function (_0x1ed070, _0x5e1cf3, _0x4d11b8) {
      if (_0x4d11b8 <= 0) {
        return -28;
      }
      var _0x2598a4 = _0xcb2023.readlink(_0x1ed070);
      var _0x60b998 = Math.min(_0x4d11b8, _0x4da9ba(_0x2598a4));
      var _0x5af433 = _0x51d7cf[_0x5e1cf3 + _0x60b998];
      _0x3c7021(_0x2598a4, _0x5e1cf3, _0x4d11b8 + 1);
      _0x51d7cf[_0x5e1cf3 + _0x60b998] = _0x5af433;
      return _0x60b998;
    },
    doAccess: function (_0x53955c, _0x18bb43) {
      if (_0x18bb43 & ~7) {
        return -28;
      }
      var _0x27fc86;
      var _0x3fbaf2 = _0xcb2023.lookupPath(_0x53955c, {
        follow: true
      });
      _0x27fc86 = _0x3fbaf2.node;
      if (!_0x27fc86) {
        return -44;
      }
      var _0xf4e141 = "";
      if (_0x18bb43 & 4) {
        _0xf4e141 += "r";
      }
      if (_0x18bb43 & 2) {
        _0xf4e141 += "w";
      }
      if (_0x18bb43 & 1) {
        _0xf4e141 += "x";
      }
      if (_0xf4e141 && _0xcb2023.nodePermissions(_0x27fc86, _0xf4e141)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0x4c13e9, _0xaa0cee, _0x4cff10) {
      var _0x4f7242 = _0xcb2023.getStream(_0x4cff10);
      if (_0x4f7242) {
        _0xcb2023.close(_0x4f7242);
      }
      return _0xcb2023.open(_0x4c13e9, _0xaa0cee, 0, _0x4cff10, _0x4cff10).fd;
    },
    doReadv: function (_0x189450, _0x27d195, _0x305304, _0x428994) {
      var _0x58afb1 = 0;
      for (var _0x5966aa = 0; _0x5966aa < _0x305304; _0x5966aa++) {
        var _0x235e28 = _0x2c6e39[_0x27d195 + _0x5966aa * 8 >> 2];
        var _0x34b3ad = _0x2c6e39[_0x27d195 + (_0x5966aa * 8 + 4) >> 2];
        var _0x4c1d5b = _0xcb2023.read(_0x189450, _0x51d7cf, _0x235e28, _0x34b3ad, _0x428994);
        if (_0x4c1d5b < 0) {
          return -1;
        }
        _0x58afb1 += _0x4c1d5b;
        if (_0x4c1d5b < _0x34b3ad) {
          break;
        }
      }
      return _0x58afb1;
    },
    doWritev: function (_0x1da53d, _0x16f9a8, _0x1d90d2, _0x184fc4) {
      var _0x2fc3aa = 0;
      for (var _0x1fa32d = 0; _0x1fa32d < _0x1d90d2; _0x1fa32d++) {
        var _0x72145 = _0x2c6e39[_0x16f9a8 + _0x1fa32d * 8 >> 2];
        var _0x3c4b16 = _0x2c6e39[_0x16f9a8 + (_0x1fa32d * 8 + 4) >> 2];
        var _0x5ea23a = _0xcb2023.write(_0x1da53d, _0x51d7cf, _0x72145, _0x3c4b16, _0x184fc4);
        if (_0x5ea23a < 0) {
          return -1;
        }
        _0x2fc3aa += _0x5ea23a;
      }
      return _0x2fc3aa;
    },
    varargs: undefined,
    get: function () {
      _0x519c68.varargs += 4;
      var _0x1c68f0 = _0x2c6e39[_0x519c68.varargs - 4 >> 2];
      return _0x1c68f0;
    },
    getStr: function (_0x2b686f) {
      var _0x51c89d = _0xa8c6ca(_0x2b686f);
      return _0x51c89d;
    },
    getStreamFromFD: function (_0x4324ee) {
      var _0x2c35b7 = _0xcb2023.getStream(_0x4324ee);
      if (!_0x2c35b7) {
        throw new _0xcb2023.ErrnoError(8);
      }
      return _0x2c35b7;
    },
    get64: function (_0x3bd549, _0x2db4df) {
      return _0x3bd549;
    }
  };
  function _0x1c2d7d(_0x330824, _0x5385ee, _0x5f2459, _0x5d480b, _0x39465e) {
    try {
      var _0xd4f9a5 = 0;
      var _0x4128ed = _0x5385ee ? _0x2c6e39[_0x5385ee >> 2] : 0;
      var _0x1aabe3 = _0x5385ee ? _0x2c6e39[_0x5385ee + 4 >> 2] : 0;
      var _0x3129b2 = _0x5f2459 ? _0x2c6e39[_0x5f2459 >> 2] : 0;
      var _0x10151f = _0x5f2459 ? _0x2c6e39[_0x5f2459 + 4 >> 2] : 0;
      var _0x225a9c = _0x5d480b ? _0x2c6e39[_0x5d480b >> 2] : 0;
      var _0x1cf51b = _0x5d480b ? _0x2c6e39[_0x5d480b + 4 >> 2] : 0;
      var _0x11c988 = 0;
      var _0x18a5ba = 0;
      var _0x2091fd = 0;
      var _0x5a3be1 = 0;
      var _0x46b9b6 = 0;
      var _0x1d5591 = 0;
      var _0x1dc027 = (_0x5385ee ? _0x2c6e39[_0x5385ee >> 2] : 0) | (_0x5f2459 ? _0x2c6e39[_0x5f2459 >> 2] : 0) | (_0x5d480b ? _0x2c6e39[_0x5d480b >> 2] : 0);
      var _0x23c5f9 = (_0x5385ee ? _0x2c6e39[_0x5385ee + 4 >> 2] : 0) | (_0x5f2459 ? _0x2c6e39[_0x5f2459 + 4 >> 2] : 0) | (_0x5d480b ? _0x2c6e39[_0x5d480b + 4 >> 2] : 0);
      function _0x5f8396(_0x314657, _0x318c98, _0x4a4e11, _0x1dfcfd) {
        if (_0x314657 < 32) {
          return _0x318c98 & _0x1dfcfd;
        } else {
          return _0x4a4e11 & _0x1dfcfd;
        }
      }
      for (var _0x4cb3ab = 0; _0x4cb3ab < _0x330824; _0x4cb3ab++) {
        var _0x4c8ce8 = 1 << _0x4cb3ab % 32;
        if (!_0x5f8396(_0x4cb3ab, _0x1dc027, _0x23c5f9, _0x4c8ce8)) {
          continue;
        }
        var _0xad6433 = _0xcb2023.getStream(_0x4cb3ab);
        if (!_0xad6433) {
          throw new _0xcb2023.ErrnoError(8);
        }
        var _0xe7afd7 = _0x519c68.DEFAULT_POLLMASK;
        if (_0xad6433.stream_ops.poll) {
          _0xe7afd7 = _0xad6433.stream_ops.poll(_0xad6433);
        }
        if (_0xe7afd7 & 1 && _0x5f8396(_0x4cb3ab, _0x4128ed, _0x1aabe3, _0x4c8ce8)) {
          if (_0x4cb3ab < 32) {
            _0x11c988 = _0x11c988 | _0x4c8ce8;
          } else {
            _0x18a5ba = _0x18a5ba | _0x4c8ce8;
          }
          _0xd4f9a5++;
        }
        if (_0xe7afd7 & 4 && _0x5f8396(_0x4cb3ab, _0x3129b2, _0x10151f, _0x4c8ce8)) {
          if (_0x4cb3ab < 32) {
            _0x2091fd = _0x2091fd | _0x4c8ce8;
          } else {
            _0x5a3be1 = _0x5a3be1 | _0x4c8ce8;
          }
          _0xd4f9a5++;
        }
        if (_0xe7afd7 & 2 && _0x5f8396(_0x4cb3ab, _0x225a9c, _0x1cf51b, _0x4c8ce8)) {
          if (_0x4cb3ab < 32) {
            _0x46b9b6 = _0x46b9b6 | _0x4c8ce8;
          } else {
            _0x1d5591 = _0x1d5591 | _0x4c8ce8;
          }
          _0xd4f9a5++;
        }
      }
      if (_0x5385ee) {
        _0x2c6e39[_0x5385ee >> 2] = _0x11c988;
        _0x2c6e39[_0x5385ee + 4 >> 2] = _0x18a5ba;
      }
      if (_0x5f2459) {
        _0x2c6e39[_0x5f2459 >> 2] = _0x2091fd;
        _0x2c6e39[_0x5f2459 + 4 >> 2] = _0x5a3be1;
      }
      if (_0x5d480b) {
        _0x2c6e39[_0x5d480b >> 2] = _0x46b9b6;
        _0x2c6e39[_0x5d480b + 4 >> 2] = _0x1d5591;
      }
      return _0xd4f9a5;
    } catch (_0x53ef2e) {
      if (typeof _0xcb2023 === "undefined" || !(_0x53ef2e instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x53ef2e);
      }
      return -_0x53ef2e.errno;
    }
  }
  var _0x1b64d6 = {
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
  var _0x1ccd37 = {
    mount: function (_0x3565b1) {
      _0x4141f5.websocket = _0x4141f5.websocket && typeof _0x4141f5.websocket === "object" ? _0x4141f5.websocket : {};
      _0x4141f5.websocket._callbacks = {};
      _0x4141f5.websocket.on = function (_0x368bcf, _0x562454) {
        if (typeof _0x562454 === "function") {
          this._callbacks[_0x368bcf] = _0x562454;
        }
        return this;
      };
      _0x4141f5.websocket.emit = function (_0x533bf3, _0x316150) {
        if (typeof this._callbacks[_0x533bf3] === "function") {
          this._callbacks[_0x533bf3].call(this, _0x316150);
        }
      };
      return _0xcb2023.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x4b1d33, _0x468c1f, _0xa67545) {
      _0x468c1f &= ~526336;
      var _0x13d594 = _0x468c1f == 1;
      if (_0xa67545) {
        _0x15301d(_0x13d594 == (_0xa67545 == 6));
      }
      var _0x4cb8cf = {
        family: _0x4b1d33,
        type: _0x468c1f,
        protocol: _0xa67545,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x1ccd37.websocket_sock_ops
      };
      var _0x1775da = _0x1ccd37.nextname();
      var _0x3a3cf7 = _0xcb2023.createNode(_0x1ccd37.root, _0x1775da, 49152, 0);
      _0x3a3cf7.sock = _0x4cb8cf;
      var _0x1faf9a = _0xcb2023.createStream({
        path: _0x1775da,
        node: _0x3a3cf7,
        flags: 2,
        seekable: false,
        stream_ops: _0x1ccd37.stream_ops
      });
      _0x4cb8cf.stream = _0x1faf9a;
      return _0x4cb8cf;
    },
    getSocket: function (_0x5ad685) {
      var _0xdbb4b2 = _0xcb2023.getStream(_0x5ad685);
      if (!_0xdbb4b2 || !_0xcb2023.isSocket(_0xdbb4b2.node.mode)) {
        return null;
      }
      return _0xdbb4b2.node.sock;
    },
    stream_ops: {
      poll: function (_0x4a2aff) {
        var _0x4e9ad9 = _0x4a2aff.node.sock;
        return _0x4e9ad9.sock_ops.poll(_0x4e9ad9);
      },
      ioctl: function (_0x2805be, _0x60de95, _0x50cc30) {
        var _0x53d506 = _0x2805be.node.sock;
        return _0x53d506.sock_ops.ioctl(_0x53d506, _0x60de95, _0x50cc30);
      },
      read: function (_0x4410f3, _0x4dce2d, _0x4b44da, _0x5cd58f, _0x330bd4) {
        var _0x2fde64 = _0x4410f3.node.sock;
        var _0x18cd7d = _0x2fde64.sock_ops.recvmsg(_0x2fde64, _0x5cd58f);
        if (!_0x18cd7d) {
          return 0;
        }
        _0x4dce2d.set(_0x18cd7d.buffer, _0x4b44da);
        return _0x18cd7d.buffer.length;
      },
      write: function (_0x1b7d00, _0xa67c8b, _0x5c6edf, _0x438b49, _0x2dccc9) {
        var _0x24f9d5 = _0x1b7d00.node.sock;
        return _0x24f9d5.sock_ops.sendmsg(_0x24f9d5, _0xa67c8b, _0x5c6edf, _0x438b49);
      },
      close: function (_0x5874b9) {
        var _0x24ed31 = _0x5874b9.node.sock;
        _0x24ed31.sock_ops.close(_0x24ed31);
      }
    },
    nextname: function () {
      if (!_0x1ccd37.nextname.current) {
        _0x1ccd37.nextname.current = 0;
      }
      return "socket[" + _0x1ccd37.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0x44696b, _0x4e94ac, _0x387233) {
        var _0x2e9f6c;
        if (typeof _0x4e94ac === "object") {
          _0x2e9f6c = _0x4e94ac;
          _0x4e94ac = null;
          _0x387233 = null;
        }
        if (_0x2e9f6c) {
          if (_0x2e9f6c._socket) {
            _0x4e94ac = _0x2e9f6c._socket.remoteAddress;
            _0x387233 = _0x2e9f6c._socket.remotePort;
          } else {
            var _0x4e5ca6 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x2e9f6c.url);
            if (!_0x4e5ca6) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x4e94ac = _0x4e5ca6[1];
            _0x387233 = parseInt(_0x4e5ca6[2], 10);
          }
        } else {
          try {
            var _0x2da9d0 = _0x4141f5.websocket && typeof _0x4141f5.websocket === "object";
            var _0x56a8fe = "ws:#".replace("#", "//");
            if (_0x2da9d0) {
              if (typeof _0x4141f5.websocket.url === "string") {
                _0x56a8fe = _0x4141f5.websocket.url;
              }
            }
            if (_0x56a8fe === "ws://" || _0x56a8fe === "wss://") {
              var _0x19c5c1 = _0x4e94ac.split("/");
              _0x56a8fe = _0x56a8fe + _0x19c5c1[0] + ":" + _0x387233 + "/" + _0x19c5c1.slice(1).join("/");
            }
            var _0x4c3357 = "binary";
            if (_0x2da9d0) {
              if (typeof _0x4141f5.websocket.subprotocol === "string") {
                _0x4c3357 = _0x4141f5.websocket.subprotocol;
              }
            }
            var _0x107112 = undefined;
            if (_0x4c3357 !== "null") {
              _0x4c3357 = _0x4c3357.replace(/^ +| +$/g, "").split(/ *, */);
              _0x107112 = _0x54f4b5 ? {
                protocol: _0x4c3357.toString()
              } : _0x4c3357;
            }
            if (_0x2da9d0 && _0x4141f5.websocket.subprotocol === null) {
              _0x4c3357 = "null";
              _0x107112 = undefined;
            }
            var _0x40d35d;
            if (_0x54f4b5) {
              _0x40d35d = require("ws");
            } else {
              _0x40d35d = WebSocket;
            }
            _0x2e9f6c = new _0x40d35d(_0x56a8fe, _0x107112);
            _0x2e9f6c.binaryType = "arraybuffer";
          } catch (_0x5cf8c5) {
            throw new _0xcb2023.ErrnoError(_0x1b64d6.EHOSTUNREACH);
          }
        }
        var _0x1bc634 = {
          addr: _0x4e94ac,
          port: _0x387233,
          socket: _0x2e9f6c,
          dgram_send_queue: []
        };
        _0x1ccd37.websocket_sock_ops.addPeer(_0x44696b, _0x1bc634);
        _0x1ccd37.websocket_sock_ops.handlePeerEvents(_0x44696b, _0x1bc634);
        if (_0x44696b.type === 2 && typeof _0x44696b.sport !== "undefined") {
          _0x1bc634.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x44696b.sport & 65280) >> 8, _0x44696b.sport & 255]));
        }
        return _0x1bc634;
      },
      getPeer: function (_0x17e92c, _0x25da0e, _0x3d9e19) {
        return _0x17e92c.peers[_0x25da0e + ":" + _0x3d9e19];
      },
      addPeer: function (_0x48f7cf, _0x329b1b) {
        _0x48f7cf.peers[_0x329b1b.addr + ":" + _0x329b1b.port] = _0x329b1b;
      },
      removePeer: function (_0x143de9, _0x26fba5) {
        delete _0x143de9.peers[_0x26fba5.addr + ":" + _0x26fba5.port];
      },
      handlePeerEvents: function (_0x534b17, _0x4f2761) {
        var _0x31510f = true;
        function _0x51b5b0() {
          _0x4141f5.websocket.emit("open", _0x534b17.stream.fd);
          try {
            var _0x5eed8a = _0x4f2761.dgram_send_queue.shift();
            while (_0x5eed8a) {
              _0x4f2761.socket.send(_0x5eed8a);
              _0x5eed8a = _0x4f2761.dgram_send_queue.shift();
            }
          } catch (_0x1ae0d4) {
            _0x4f2761.socket.close();
          }
        }
        function _0x2005f3(_0x1eb554) {
          if (typeof _0x1eb554 === "string") {
            var _0x30a4a9 = new TextEncoder();
            _0x1eb554 = _0x30a4a9.encode(_0x1eb554);
          } else {
            _0x15301d(_0x1eb554.byteLength !== undefined);
            if (_0x1eb554.byteLength == 0) {
              return;
            } else {
              _0x1eb554 = new Uint8Array(_0x1eb554);
            }
          }
          var _0x554682 = _0x31510f;
          _0x31510f = false;
          if (_0x554682 && _0x1eb554.length === 10 && _0x1eb554[0] === 255 && _0x1eb554[1] === 255 && _0x1eb554[2] === 255 && _0x1eb554[3] === 255 && _0x1eb554[4] === "p".charCodeAt(0) && _0x1eb554[5] === "o".charCodeAt(0) && _0x1eb554[6] === "r".charCodeAt(0) && _0x1eb554[7] === "t".charCodeAt(0)) {
            var _0x463392 = _0x1eb554[8] << 8 | _0x1eb554[9];
            _0x1ccd37.websocket_sock_ops.removePeer(_0x534b17, _0x4f2761);
            _0x4f2761.port = _0x463392;
            _0x1ccd37.websocket_sock_ops.addPeer(_0x534b17, _0x4f2761);
            return;
          }
          _0x534b17.recv_queue.push({
            addr: _0x4f2761.addr,
            port: _0x4f2761.port,
            data: _0x1eb554
          });
          _0x4141f5.websocket.emit("message", _0x534b17.stream.fd);
        }
        if (_0x54f4b5) {
          _0x4f2761.socket.on("open", _0x51b5b0);
          _0x4f2761.socket.on("message", function (_0x37182a, _0x4b9a69) {
            if (!_0x4b9a69.binary) {
              return;
            }
            _0x2005f3(new Uint8Array(_0x37182a).buffer);
          });
          _0x4f2761.socket.on("close", function () {
            _0x4141f5.websocket.emit("close", _0x534b17.stream.fd);
          });
          _0x4f2761.socket.on("error", function (_0x920af5) {
            _0x534b17.error = _0x1b64d6.ECONNREFUSED;
            _0x4141f5.websocket.emit("error", [_0x534b17.stream.fd, _0x534b17.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x4f2761.socket.onopen = _0x51b5b0;
          _0x4f2761.socket.onclose = function () {
            _0x4141f5.websocket.emit("close", _0x534b17.stream.fd);
          };
          _0x4f2761.socket.onmessage = function _0x2454e8(_0x4b5513) {
            _0x2005f3(_0x4b5513.data);
          };
          _0x4f2761.socket.onerror = function (_0x5c46f8) {
            _0x534b17.error = _0x1b64d6.ECONNREFUSED;
            _0x4141f5.websocket.emit("error", [_0x534b17.stream.fd, _0x534b17.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0x84350a) {
        if (_0x84350a.type === 1 && _0x84350a.server) {
          if (_0x84350a.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0xd7b21e = 0;
        var _0x4917bf = _0x84350a.type === 1 ? _0x1ccd37.websocket_sock_ops.getPeer(_0x84350a, _0x84350a.daddr, _0x84350a.dport) : null;
        if (_0x84350a.recv_queue.length || !_0x4917bf || _0x4917bf && _0x4917bf.socket.readyState === _0x4917bf.socket.CLOSING || _0x4917bf && _0x4917bf.socket.readyState === _0x4917bf.socket.CLOSED) {
          _0xd7b21e |= 65;
        }
        if (!_0x4917bf || _0x4917bf && _0x4917bf.socket.readyState === _0x4917bf.socket.OPEN) {
          _0xd7b21e |= 4;
        }
        if (_0x4917bf && _0x4917bf.socket.readyState === _0x4917bf.socket.CLOSING || _0x4917bf && _0x4917bf.socket.readyState === _0x4917bf.socket.CLOSED) {
          _0xd7b21e |= 16;
        }
        return _0xd7b21e;
      },
      ioctl: function (_0x5d8acb, _0x1ca276, _0x1039d3) {
        switch (_0x1ca276) {
          case 21531:
            var _0x327243 = 0;
            if (_0x5d8acb.recv_queue.length) {
              _0x327243 = _0x5d8acb.recv_queue[0].data.length;
            }
            _0x2c6e39[_0x1039d3 >> 2] = _0x327243;
            return 0;
          default:
            return _0x1b64d6.EINVAL;
        }
      },
      close: function (_0x1df019) {
        if (_0x1df019.server) {
          try {
            _0x1df019.server.close();
          } catch (_0xe7f470) {}
          _0x1df019.server = null;
        }
        var _0x5de774 = Object.keys(_0x1df019.peers);
        for (var _0x4bd546 = 0; _0x4bd546 < _0x5de774.length; _0x4bd546++) {
          var _0xe77b9a = _0x1df019.peers[_0x5de774[_0x4bd546]];
          try {
            _0xe77b9a.socket.close();
          } catch (_0x34e90a) {}
          _0x1ccd37.websocket_sock_ops.removePeer(_0x1df019, _0xe77b9a);
        }
        return 0;
      },
      bind: function (_0x139693, _0x36e6b4, _0x4902c4) {
        if (typeof _0x139693.saddr !== "undefined" || typeof _0x139693.sport !== "undefined") {
          throw new _0xcb2023.ErrnoError(_0x1b64d6.EINVAL);
        }
        _0x139693.saddr = _0x36e6b4;
        _0x139693.sport = _0x4902c4;
        if (_0x139693.type === 2) {
          if (_0x139693.server) {
            _0x139693.server.close();
            _0x139693.server = null;
          }
          try {
            _0x139693.sock_ops.listen(_0x139693, 0);
          } catch (_0x3b2c40) {
            if (!(_0x3b2c40 instanceof _0xcb2023.ErrnoError)) {
              throw _0x3b2c40;
            }
            if (_0x3b2c40.errno !== _0x1b64d6.EOPNOTSUPP) {
              throw _0x3b2c40;
            }
          }
        }
      },
      connect: function (_0x43d4ca, _0x3f9260, _0x3870fc) {
        if (_0x43d4ca.server) {
          throw new _0xcb2023.ErrnoError(_0x1b64d6.EOPNOTSUPP);
        }
        if (typeof _0x43d4ca.daddr !== "undefined" && typeof _0x43d4ca.dport !== "undefined") {
          var _0x115d62 = _0x1ccd37.websocket_sock_ops.getPeer(_0x43d4ca, _0x43d4ca.daddr, _0x43d4ca.dport);
          if (_0x115d62) {
            if (_0x115d62.socket.readyState === _0x115d62.socket.CONNECTING) {
              throw new _0xcb2023.ErrnoError(_0x1b64d6.EALREADY);
            } else {
              throw new _0xcb2023.ErrnoError(_0x1b64d6.EISCONN);
            }
          }
        }
        var _0xc7f5e9 = _0x1ccd37.websocket_sock_ops.createPeer(_0x43d4ca, _0x3f9260, _0x3870fc);
        _0x43d4ca.daddr = _0xc7f5e9.addr;
        _0x43d4ca.dport = _0xc7f5e9.port;
        throw new _0xcb2023.ErrnoError(_0x1b64d6.EINPROGRESS);
      },
      listen: function (_0x3a8697, _0x5e52b9) {
        if (!_0x54f4b5) {
          throw new _0xcb2023.ErrnoError(_0x1b64d6.EOPNOTSUPP);
        }
        if (_0x3a8697.server) {
          throw new _0xcb2023.ErrnoError(_0x1b64d6.EINVAL);
        }
        var _0x6362a6 = require("ws").Server;
        var _0x1f010d = _0x3a8697.saddr;
        _0x3a8697.server = new _0x6362a6({
          host: _0x1f010d,
          port: _0x3a8697.sport
        });
        _0x4141f5.websocket.emit("listen", _0x3a8697.stream.fd);
        _0x3a8697.server.on("connection", function (_0x321bea) {
          if (_0x3a8697.type === 1) {
            var _0x3dc78a = _0x1ccd37.createSocket(_0x3a8697.family, _0x3a8697.type, _0x3a8697.protocol);
            var _0x14cd2c = _0x1ccd37.websocket_sock_ops.createPeer(_0x3dc78a, _0x321bea);
            _0x3dc78a.daddr = _0x14cd2c.addr;
            _0x3dc78a.dport = _0x14cd2c.port;
            _0x3a8697.pending.push(_0x3dc78a);
            _0x4141f5.websocket.emit("connection", _0x3dc78a.stream.fd);
          } else {
            _0x1ccd37.websocket_sock_ops.createPeer(_0x3a8697, _0x321bea);
            _0x4141f5.websocket.emit("connection", _0x3a8697.stream.fd);
          }
        });
        _0x3a8697.server.on("closed", function () {
          _0x4141f5.websocket.emit("close", _0x3a8697.stream.fd);
          _0x3a8697.server = null;
        });
        _0x3a8697.server.on("error", function (_0x2a0f68) {
          _0x3a8697.error = _0x1b64d6.EHOSTUNREACH;
          _0x4141f5.websocket.emit("error", [_0x3a8697.stream.fd, _0x3a8697.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0x117b99) {
        if (!_0x117b99.server) {
          throw new _0xcb2023.ErrnoError(_0x1b64d6.EINVAL);
        }
        var _0x3bf056 = _0x117b99.pending.shift();
        _0x3bf056.stream.flags = _0x117b99.stream.flags;
        return _0x3bf056;
      },
      getname: function (_0x665ac, _0xd99557) {
        var _0xaf16a5;
        var _0x5b7269;
        if (_0xd99557) {
          if (_0x665ac.daddr === undefined || _0x665ac.dport === undefined) {
            throw new _0xcb2023.ErrnoError(_0x1b64d6.ENOTCONN);
          }
          _0xaf16a5 = _0x665ac.daddr;
          _0x5b7269 = _0x665ac.dport;
        } else {
          _0xaf16a5 = _0x665ac.saddr || 0;
          _0x5b7269 = _0x665ac.sport || 0;
        }
        return {
          addr: _0xaf16a5,
          port: _0x5b7269
        };
      },
      sendmsg: function (_0x3e6f24, _0x400499, _0x6a75c5, _0x1bd1be, _0x253e3e, _0x267255) {
        if (_0x3e6f24.type === 2) {
          if (_0x253e3e === undefined || _0x267255 === undefined) {
            _0x253e3e = _0x3e6f24.daddr;
            _0x267255 = _0x3e6f24.dport;
          }
          if (_0x253e3e === undefined || _0x267255 === undefined) {
            throw new _0xcb2023.ErrnoError(_0x1b64d6.EDESTADDRREQ);
          }
        } else {
          _0x253e3e = _0x3e6f24.daddr;
          _0x267255 = _0x3e6f24.dport;
        }
        var _0x1be0cc = _0x1ccd37.websocket_sock_ops.getPeer(_0x3e6f24, _0x253e3e, _0x267255);
        if (_0x3e6f24.type === 1) {
          if (!_0x1be0cc || _0x1be0cc.socket.readyState === _0x1be0cc.socket.CLOSING || _0x1be0cc.socket.readyState === _0x1be0cc.socket.CLOSED) {
            throw new _0xcb2023.ErrnoError(_0x1b64d6.ENOTCONN);
          } else if (_0x1be0cc.socket.readyState === _0x1be0cc.socket.CONNECTING) {
            throw new _0xcb2023.ErrnoError(_0x1b64d6.EAGAIN);
          }
        }
        if (ArrayBuffer.isView(_0x400499)) {
          _0x6a75c5 += _0x400499.byteOffset;
          _0x400499 = _0x400499.buffer;
        }
        var _0x593c8a;
        _0x593c8a = _0x400499.slice(_0x6a75c5, _0x6a75c5 + _0x1bd1be);
        if (_0x3e6f24.type === 2) {
          if (!_0x1be0cc || _0x1be0cc.socket.readyState !== _0x1be0cc.socket.OPEN) {
            if (!_0x1be0cc || _0x1be0cc.socket.readyState === _0x1be0cc.socket.CLOSING || _0x1be0cc.socket.readyState === _0x1be0cc.socket.CLOSED) {
              _0x1be0cc = _0x1ccd37.websocket_sock_ops.createPeer(_0x3e6f24, _0x253e3e, _0x267255);
            }
            _0x1be0cc.dgram_send_queue.push(_0x593c8a);
            return _0x1bd1be;
          }
        }
        try {
          _0x1be0cc.socket.send(_0x593c8a);
          return _0x1bd1be;
        } catch (_0x217993) {
          throw new _0xcb2023.ErrnoError(_0x1b64d6.EINVAL);
        }
      },
      recvmsg: function (_0x2905b8, _0x4008ae) {
        if (_0x2905b8.type === 1 && _0x2905b8.server) {
          throw new _0xcb2023.ErrnoError(_0x1b64d6.ENOTCONN);
        }
        var _0x2c6b37 = _0x2905b8.recv_queue.shift();
        if (!_0x2c6b37) {
          if (_0x2905b8.type === 1) {
            var _0x925399 = _0x1ccd37.websocket_sock_ops.getPeer(_0x2905b8, _0x2905b8.daddr, _0x2905b8.dport);
            if (!_0x925399) {
              throw new _0xcb2023.ErrnoError(_0x1b64d6.ENOTCONN);
            } else if (_0x925399.socket.readyState === _0x925399.socket.CLOSING || _0x925399.socket.readyState === _0x925399.socket.CLOSED) {
              return null;
            } else {
              throw new _0xcb2023.ErrnoError(_0x1b64d6.EAGAIN);
            }
          } else {
            throw new _0xcb2023.ErrnoError(_0x1b64d6.EAGAIN);
          }
        }
        var _0x15910d = _0x2c6b37.data.byteLength || _0x2c6b37.data.length;
        var _0x2b6ebf = _0x2c6b37.data.byteOffset || 0;
        var _0x1e1be9 = _0x2c6b37.data.buffer || _0x2c6b37.data;
        var _0x28fd9f = Math.min(_0x4008ae, _0x15910d);
        var _0x53489f = {
          buffer: new Uint8Array(_0x1e1be9, _0x2b6ebf, _0x28fd9f),
          addr: _0x2c6b37.addr,
          port: _0x2c6b37.port
        };
        if (_0x2905b8.type === 1 && _0x28fd9f < _0x15910d) {
          var _0x403327 = _0x15910d - _0x28fd9f;
          _0x2c6b37.data = new Uint8Array(_0x1e1be9, _0x2b6ebf + _0x28fd9f, _0x403327);
          _0x2905b8.recv_queue.unshift(_0x2c6b37);
        }
        return _0x53489f;
      }
    }
  };
  function _0x5e6e1e(_0x413a2d) {
    var _0x52a442 = _0x1ccd37.getSocket(_0x413a2d);
    if (!_0x52a442) {
      throw new _0xcb2023.ErrnoError(8);
    }
    return _0x52a442;
  }
  function _0x345717(_0x2e2a92) {
    _0x2c6e39[_0x35c44f() >> 2] = _0x2e2a92;
    return _0x2e2a92;
  }
  function _0x1524ed(_0x4c168a) {
    var _0xdc408d = _0x4c168a.split(".");
    for (var _0x23a20e = 0; _0x23a20e < 4; _0x23a20e++) {
      var _0x3d025f = Number(_0xdc408d[_0x23a20e]);
      if (isNaN(_0x3d025f)) {
        return null;
      }
      _0xdc408d[_0x23a20e] = _0x3d025f;
    }
    return (_0xdc408d[0] | _0xdc408d[1] << 8 | _0xdc408d[2] << 16 | _0xdc408d[3] << 24) >>> 0;
  }
  function _0x3e7105(_0x42497c) {
    return parseInt(_0x42497c);
  }
  function _0x802327(_0x5b172b) {
    var _0x29424d;
    var _0x55eec4;
    var _0x320f9f;
    var _0x341033;
    var _0xb13b8e = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x5a19fb = [];
    if (!_0xb13b8e.test(_0x5b172b)) {
      return null;
    }
    if (_0x5b172b === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x5b172b.startsWith("::")) {
      _0x5b172b = _0x5b172b.replace("::", "Z:");
    } else {
      _0x5b172b = _0x5b172b.replace("::", ":Z:");
    }
    if (_0x5b172b.indexOf(".") > 0) {
      _0x5b172b = _0x5b172b.replace(new RegExp("[.]", "g"), ":");
      _0x29424d = _0x5b172b.split(":");
      _0x29424d[_0x29424d.length - 4] = _0x3e7105(_0x29424d[_0x29424d.length - 4]) + _0x3e7105(_0x29424d[_0x29424d.length - 3]) * 256;
      _0x29424d[_0x29424d.length - 3] = _0x3e7105(_0x29424d[_0x29424d.length - 2]) + _0x3e7105(_0x29424d[_0x29424d.length - 1]) * 256;
      _0x29424d = _0x29424d.slice(0, _0x29424d.length - 2);
    } else {
      _0x29424d = _0x5b172b.split(":");
    }
    _0x320f9f = 0;
    _0x341033 = 0;
    for (_0x55eec4 = 0; _0x55eec4 < _0x29424d.length; _0x55eec4++) {
      if (typeof _0x29424d[_0x55eec4] === "string") {
        if (_0x29424d[_0x55eec4] === "Z") {
          for (_0x341033 = 0; _0x341033 < 8 - _0x29424d.length + 1; _0x341033++) {
            _0x5a19fb[_0x55eec4 + _0x341033] = 0;
          }
          _0x320f9f = _0x341033 - 1;
        } else {
          _0x5a19fb[_0x55eec4 + _0x320f9f] = _0x4cad8d(parseInt(_0x29424d[_0x55eec4], 16));
        }
      } else {
        _0x5a19fb[_0x55eec4 + _0x320f9f] = _0x29424d[_0x55eec4];
      }
    }
    return [_0x5a19fb[1] << 16 | _0x5a19fb[0], _0x5a19fb[3] << 16 | _0x5a19fb[2], _0x5a19fb[5] << 16 | _0x5a19fb[4], _0x5a19fb[7] << 16 | _0x5a19fb[6]];
  }
  function _0x30b0ac(_0x55e00a, _0x14f1e7, _0x2d6bb2, _0x560f90, _0x3c592f) {
    switch (_0x14f1e7) {
      case 2:
        _0x2d6bb2 = _0x1524ed(_0x2d6bb2);
        if (_0x3c592f) {
          _0x2c6e39[_0x3c592f >> 2] = 16;
        }
        _0x2f4991[_0x55e00a >> 1] = _0x14f1e7;
        _0x2c6e39[_0x55e00a + 4 >> 2] = _0x2d6bb2;
        _0x2f4991[_0x55e00a + 2 >> 1] = _0x4cad8d(_0x560f90);
        _0x3df107 = [0, (_0xe392d5 = 0, +Math.abs(_0xe392d5) >= 1 ? _0xe392d5 > 0 ? (Math.min(+Math.floor(_0xe392d5 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0xe392d5 - +(~~_0xe392d5 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x2c6e39[_0x55e00a + 8 >> 2] = _0x3df107[0];
        _0x2c6e39[_0x55e00a + 12 >> 2] = _0x3df107[1];
        break;
      case 10:
        _0x2d6bb2 = _0x802327(_0x2d6bb2);
        if (_0x3c592f) {
          _0x2c6e39[_0x3c592f >> 2] = 28;
        }
        _0x2c6e39[_0x55e00a >> 2] = _0x14f1e7;
        _0x2c6e39[_0x55e00a + 8 >> 2] = _0x2d6bb2[0];
        _0x2c6e39[_0x55e00a + 12 >> 2] = _0x2d6bb2[1];
        _0x2c6e39[_0x55e00a + 16 >> 2] = _0x2d6bb2[2];
        _0x2c6e39[_0x55e00a + 20 >> 2] = _0x2d6bb2[3];
        _0x2f4991[_0x55e00a + 2 >> 1] = _0x4cad8d(_0x560f90);
        _0x2c6e39[_0x55e00a + 4 >> 2] = 0;
        _0x2c6e39[_0x55e00a + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0x28b747 = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0x3ebafa) {
      var _0x381902 = _0x1524ed(_0x3ebafa);
      if (_0x381902 !== null) {
        return _0x3ebafa;
      }
      _0x381902 = _0x802327(_0x3ebafa);
      if (_0x381902 !== null) {
        return _0x3ebafa;
      }
      var _0x2a72cf;
      if (_0x28b747.address_map.addrs[_0x3ebafa]) {
        _0x2a72cf = _0x28b747.address_map.addrs[_0x3ebafa];
      } else {
        var _0x591ea4 = _0x28b747.address_map.id++;
        _0x15301d(_0x591ea4 < 65535, "exceeded max address mappings of 65535");
        _0x2a72cf = "172.29." + (_0x591ea4 & 255) + "." + (_0x591ea4 & 65280);
        _0x28b747.address_map.names[_0x2a72cf] = _0x3ebafa;
        _0x28b747.address_map.addrs[_0x3ebafa] = _0x2a72cf;
      }
      return _0x2a72cf;
    },
    lookup_addr: function (_0x3985e2) {
      if (_0x28b747.address_map.names[_0x3985e2]) {
        return _0x28b747.address_map.names[_0x3985e2];
      }
      return null;
    }
  };
  function _0x39842c(_0x50712a, _0x31e409, _0x96a099, _0x341c9f) {
    try {
      var _0x15fca0 = _0x5e6e1e(_0x50712a);
      var _0x567120 = _0x15fca0.sock_ops.accept(_0x15fca0);
      if (_0x31e409) {
        var _0x4c43b9 = _0x30b0ac(_0x31e409, _0x567120.family, _0x28b747.lookup_name(_0x567120.daddr), _0x567120.dport, _0x96a099);
      }
      return _0x567120.stream.fd;
    } catch (_0x475051) {
      if (typeof _0xcb2023 === "undefined" || !(_0x475051 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x475051);
      }
      return -_0x475051.errno;
    }
  }
  function _0x1bac6b(_0xaaab8d, _0x566b33) {
    try {
      _0xaaab8d = _0x519c68.getStr(_0xaaab8d);
      return _0x519c68.doAccess(_0xaaab8d, _0x566b33);
    } catch (_0x2ff27c) {
      if (typeof _0xcb2023 === "undefined" || !(_0x2ff27c instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x2ff27c);
      }
      return -_0x2ff27c.errno;
    }
  }
  function _0x1803e4(_0x2e87f0) {
    return (_0x2e87f0 & 255) + "." + (_0x2e87f0 >> 8 & 255) + "." + (_0x2e87f0 >> 16 & 255) + "." + (_0x2e87f0 >> 24 & 255);
  }
  function _0xee3b97(_0x3a5c25) {
    var _0x3f5859 = "";
    var _0x3c5c8a = 0;
    var _0x31612a = 0;
    var _0x37400d = 0;
    var _0x201ea8 = 0;
    var _0x23d0be = 0;
    var _0x3ddf2b = 0;
    var _0x108553 = [_0x3a5c25[0] & 65535, _0x3a5c25[0] >> 16, _0x3a5c25[1] & 65535, _0x3a5c25[1] >> 16, _0x3a5c25[2] & 65535, _0x3a5c25[2] >> 16, _0x3a5c25[3] & 65535, _0x3a5c25[3] >> 16];
    var _0x16151a = true;
    var _0x22a761 = "";
    for (_0x3ddf2b = 0; _0x3ddf2b < 5; _0x3ddf2b++) {
      if (_0x108553[_0x3ddf2b] !== 0) {
        _0x16151a = false;
        break;
      }
    }
    if (_0x16151a) {
      _0x22a761 = _0x1803e4(_0x108553[6] | _0x108553[7] << 16);
      if (_0x108553[5] === -1) {
        _0x3f5859 = "::ffff:";
        _0x3f5859 += _0x22a761;
        return _0x3f5859;
      }
      if (_0x108553[5] === 0) {
        _0x3f5859 = "::";
        if (_0x22a761 === "0.0.0.0") {
          _0x22a761 = "";
        }
        if (_0x22a761 === "0.0.0.1") {
          _0x22a761 = "1";
        }
        _0x3f5859 += _0x22a761;
        return _0x3f5859;
      }
    }
    for (_0x3c5c8a = 0; _0x3c5c8a < 8; _0x3c5c8a++) {
      if (_0x108553[_0x3c5c8a] === 0) {
        if (_0x3c5c8a - _0x37400d > 1) {
          _0x23d0be = 0;
        }
        _0x37400d = _0x3c5c8a;
        _0x23d0be++;
      }
      if (_0x23d0be > _0x31612a) {
        _0x31612a = _0x23d0be;
        _0x201ea8 = _0x3c5c8a - _0x31612a + 1;
      }
    }
    for (_0x3c5c8a = 0; _0x3c5c8a < 8; _0x3c5c8a++) {
      if (_0x31612a > 1) {
        if (_0x108553[_0x3c5c8a] === 0 && _0x3c5c8a >= _0x201ea8 && _0x3c5c8a < _0x201ea8 + _0x31612a) {
          if (_0x3c5c8a === _0x201ea8) {
            _0x3f5859 += ":";
            if (_0x201ea8 === 0) {
              _0x3f5859 += ":";
            }
          }
          continue;
        }
      }
      _0x3f5859 += Number(_0x4c9ee4(_0x108553[_0x3c5c8a] & 65535)).toString(16);
      _0x3f5859 += _0x3c5c8a < 7 ? ":" : "";
    }
    return _0x3f5859;
  }
  function _0x1c33aa(_0x2875b4, _0x8704a2) {
    var _0x219617 = _0x2f4991[_0x2875b4 >> 1];
    var _0x305196 = _0x4c9ee4(_0x999577[_0x2875b4 + 2 >> 1]);
    var _0x2ac148;
    switch (_0x219617) {
      case 2:
        if (_0x8704a2 !== 16) {
          return {
            errno: 28
          };
        }
        _0x2ac148 = _0x2c6e39[_0x2875b4 + 4 >> 2];
        _0x2ac148 = _0x1803e4(_0x2ac148);
        break;
      case 10:
        if (_0x8704a2 !== 28) {
          return {
            errno: 28
          };
        }
        _0x2ac148 = [_0x2c6e39[_0x2875b4 + 8 >> 2], _0x2c6e39[_0x2875b4 + 12 >> 2], _0x2c6e39[_0x2875b4 + 16 >> 2], _0x2c6e39[_0x2875b4 + 20 >> 2]];
        _0x2ac148 = _0xee3b97(_0x2ac148);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x219617,
      addr: _0x2ac148,
      port: _0x305196
    };
  }
  function _0x36e357(_0x3081e8, _0x159888, _0x57f74b) {
    if (_0x57f74b && _0x3081e8 === 0) {
      return null;
    }
    var _0x5b57de = _0x1c33aa(_0x3081e8, _0x159888);
    if (_0x5b57de.errno) {
      throw new _0xcb2023.ErrnoError(_0x5b57de.errno);
    }
    _0x5b57de.addr = _0x28b747.lookup_addr(_0x5b57de.addr) || _0x5b57de.addr;
    return _0x5b57de;
  }
  function _0x29de54(_0x22bac0, _0x242464, _0x2da54c) {
    try {
      var _0x525118 = _0x5e6e1e(_0x22bac0);
      var _0x45d502 = _0x36e357(_0x242464, _0x2da54c);
      _0x525118.sock_ops.bind(_0x525118, _0x45d502.addr, _0x45d502.port);
      return 0;
    } catch (_0x5e10da) {
      if (typeof _0xcb2023 === "undefined" || !(_0x5e10da instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x5e10da);
      }
      return -_0x5e10da.errno;
    }
  }
  function _0x55ec14(_0x515fd0, _0x4e7963) {
    try {
      _0x515fd0 = _0x519c68.getStr(_0x515fd0);
      _0xcb2023.chmod(_0x515fd0, _0x4e7963);
      return 0;
    } catch (_0x523385) {
      if (typeof _0xcb2023 === "undefined" || !(_0x523385 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x523385);
      }
      return -_0x523385.errno;
    }
  }
  function _0x35ab74(_0x477f9e, _0x1dfb93, _0x30638b) {
    try {
      var _0x5b5fe7 = _0x5e6e1e(_0x477f9e);
      var _0xec61c3 = _0x36e357(_0x1dfb93, _0x30638b);
      _0x5b5fe7.sock_ops.connect(_0x5b5fe7, _0xec61c3.addr, _0xec61c3.port);
      return 0;
    } catch (_0x55e302) {
      if (typeof _0xcb2023 === "undefined" || !(_0x55e302 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x55e302);
      }
      return -_0x55e302.errno;
    }
  }
  function _0x541b84(_0xdca975, _0x2cf102) {
    try {
      var _0x20a4a4 = _0x519c68.getStreamFromFD(_0xdca975);
      if (_0x20a4a4.fd === _0x2cf102) {
        return _0x2cf102;
      }
      return _0x519c68.doDup(_0x20a4a4.path, _0x20a4a4.flags, _0x2cf102);
    } catch (_0x3d6b32) {
      if (typeof _0xcb2023 === "undefined" || !(_0x3d6b32 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x3d6b32);
      }
      return -_0x3d6b32.errno;
    }
  }
  function _0x527711(_0x7bd514, _0x4eec05, _0x555456) {
    _0x519c68.varargs = _0x555456;
    try {
      var _0x2aa240 = _0x519c68.getStreamFromFD(_0x7bd514);
      switch (_0x4eec05) {
        case 0:
          {
            var _0x4b042c = _0x519c68.get();
            if (_0x4b042c < 0) {
              return -28;
            }
            var _0x455002;
            _0x455002 = _0xcb2023.open(_0x2aa240.path, _0x2aa240.flags, 0, _0x4b042c);
            return _0x455002.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0x2aa240.flags;
        case 4:
          {
            var _0x4b042c = _0x519c68.get();
            _0x2aa240.flags |= _0x4b042c;
            return 0;
          }
        case 12:
          {
            var _0x4b042c = _0x519c68.get();
            var _0x53301 = 0;
            _0x2f4991[_0x4b042c + _0x53301 >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0x345717(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x1cb4f4) {
      if (typeof _0xcb2023 === "undefined" || !(_0x1cb4f4 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x1cb4f4);
      }
      return -_0x1cb4f4.errno;
    }
  }
  function _0x59eb64(_0xa443d2, _0x16a903) {
    try {
      var _0x3381bc = _0x519c68.getStreamFromFD(_0xa443d2);
      return _0x519c68.doStat(_0xcb2023.stat, _0x3381bc.path, _0x16a903);
    } catch (_0x5e10ee) {
      if (typeof _0xcb2023 === "undefined" || !(_0x5e10ee instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x5e10ee);
      }
      return -_0x5e10ee.errno;
    }
  }
  function _0x208145(_0x1611be, _0x5c21f6, _0xd49b75, _0x31e990) {
    try {
      var _0x131db8 = _0x519c68.get64(_0xd49b75, _0x31e990);
      _0xcb2023.ftruncate(_0x1611be, _0x131db8);
      return 0;
    } catch (_0x25cde7) {
      if (typeof _0xcb2023 === "undefined" || !(_0x25cde7 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x25cde7);
      }
      return -_0x25cde7.errno;
    }
  }
  function _0x184a73(_0x4f1b7d, _0x5b236f) {
    try {
      if (_0x5b236f === 0) {
        return -28;
      }
      var _0x30ea42 = _0xcb2023.cwd();
      var _0x4aab93 = _0x4da9ba(_0x30ea42);
      if (_0x5b236f < _0x4aab93 + 1) {
        return -68;
      }
      _0x3c7021(_0x30ea42, _0x4f1b7d, _0x5b236f);
      return _0x4f1b7d;
    } catch (_0x51f76e) {
      if (typeof _0xcb2023 === "undefined" || !(_0x51f76e instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x51f76e);
      }
      return -_0x51f76e.errno;
    }
  }
  function _0x2827ef(_0x567092, _0x10d656, _0x43eb15) {
    try {
      var _0x19f450 = _0x519c68.getStreamFromFD(_0x567092);
      if (!_0x19f450.getdents) {
        _0x19f450.getdents = _0xcb2023.readdir(_0x19f450.path);
      }
      var _0x321428 = 280;
      var _0x24e129 = 0;
      var _0x3d9243 = _0xcb2023.llseek(_0x19f450, 0, 1);
      var _0x4220a0 = Math.floor(_0x3d9243 / _0x321428);
      while (_0x4220a0 < _0x19f450.getdents.length && _0x24e129 + _0x321428 <= _0x43eb15) {
        var _0x4be7f6;
        var _0x2ab33d;
        var _0x298c93 = _0x19f450.getdents[_0x4220a0];
        if (_0x298c93[0] === ".") {
          _0x4be7f6 = 1;
          _0x2ab33d = 4;
        } else {
          var _0x7d8981 = _0xcb2023.lookupNode(_0x19f450.node, _0x298c93);
          _0x4be7f6 = _0x7d8981.id;
          _0x2ab33d = _0xcb2023.isChrdev(_0x7d8981.mode) ? 2 : _0xcb2023.isDir(_0x7d8981.mode) ? 4 : _0xcb2023.isLink(_0x7d8981.mode) ? 10 : 8;
        }
        _0x3df107 = [_0x4be7f6 >>> 0, (_0xe392d5 = _0x4be7f6, +Math.abs(_0xe392d5) >= 1 ? _0xe392d5 > 0 ? (Math.min(+Math.floor(_0xe392d5 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0xe392d5 - +(~~_0xe392d5 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x2c6e39[_0x10d656 + _0x24e129 >> 2] = _0x3df107[0];
        _0x2c6e39[_0x10d656 + _0x24e129 + 4 >> 2] = _0x3df107[1];
        _0x3df107 = [(_0x4220a0 + 1) * _0x321428 >>> 0, (_0xe392d5 = (_0x4220a0 + 1) * _0x321428, +Math.abs(_0xe392d5) >= 1 ? _0xe392d5 > 0 ? (Math.min(+Math.floor(_0xe392d5 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0xe392d5 - +(~~_0xe392d5 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x2c6e39[_0x10d656 + _0x24e129 + 8 >> 2] = _0x3df107[0];
        _0x2c6e39[_0x10d656 + _0x24e129 + 12 >> 2] = _0x3df107[1];
        _0x2f4991[_0x10d656 + _0x24e129 + 16 >> 1] = 280;
        _0x51d7cf[_0x10d656 + _0x24e129 + 18 >> 0] = _0x2ab33d;
        _0x3c7021(_0x298c93, _0x10d656 + _0x24e129 + 19, 256);
        _0x24e129 += _0x321428;
        _0x4220a0 += 1;
      }
      _0xcb2023.llseek(_0x19f450, _0x4220a0 * _0x321428, 0);
      return _0x24e129;
    } catch (_0x2669d5) {
      if (typeof _0xcb2023 === "undefined" || !(_0x2669d5 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x2669d5);
      }
      return -_0x2669d5.errno;
    }
  }
  function _0x3159c3() {
    return 0;
  }
  function _0x499ae3() {
    return _0x3159c3();
  }
  function _0x33bdb4(_0x138a06, _0x512ffb, _0x4f92ef) {
    try {
      var _0x4b14bb = _0x5e6e1e(_0x138a06);
      if (!_0x4b14bb.daddr) {
        return -53;
      }
      var _0x127e8f = _0x30b0ac(_0x512ffb, _0x4b14bb.family, _0x28b747.lookup_name(_0x4b14bb.daddr), _0x4b14bb.dport, _0x4f92ef);
      return 0;
    } catch (_0x78cecf) {
      if (typeof _0xcb2023 === "undefined" || !(_0x78cecf instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x78cecf);
      }
      return -_0x78cecf.errno;
    }
  }
  function _0x5c8770(_0x5de7cf, _0x47668a) {
    try {
      _0x4227d2(_0x47668a, 0, 136);
      _0x2c6e39[_0x47668a >> 2] = 1;
      _0x2c6e39[_0x47668a + 4 >> 2] = 2;
      _0x2c6e39[_0x47668a + 8 >> 2] = 3;
      _0x2c6e39[_0x47668a + 12 >> 2] = 4;
      return 0;
    } catch (_0x322950) {
      if (typeof _0xcb2023 === "undefined" || !(_0x322950 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x322950);
      }
      return -_0x322950.errno;
    }
  }
  function _0x3f9ac2(_0x98f1be, _0x5c67d5, _0x4c2d2b) {
    try {
      _0x5c756b("__sys_getsockname " + _0x98f1be);
      var _0x324447 = _0x5e6e1e(_0x98f1be);
      var _0x33af65 = _0x30b0ac(_0x5c67d5, _0x324447.family, _0x28b747.lookup_name(_0x324447.saddr || "0.0.0.0"), _0x324447.sport, _0x4c2d2b);
      return 0;
    } catch (_0x10a3b2) {
      if (typeof _0xcb2023 === "undefined" || !(_0x10a3b2 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x10a3b2);
      }
      return -_0x10a3b2.errno;
    }
  }
  function _0x383db3(_0x1e811d, _0x275e9f, _0xc388e4, _0x428a62, _0x475b74) {
    try {
      var _0x2c48fd = _0x5e6e1e(_0x1e811d);
      if (_0x275e9f === 1) {
        if (_0xc388e4 === 4) {
          _0x2c6e39[_0x428a62 >> 2] = _0x2c48fd.error;
          _0x2c6e39[_0x475b74 >> 2] = 4;
          _0x2c48fd.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0x2746cc) {
      if (typeof _0xcb2023 === "undefined" || !(_0x2746cc instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x2746cc);
      }
      return -_0x2746cc.errno;
    }
  }
  function _0x16e080() {
    return _0x3159c3();
  }
  function _0x2e5d90(_0x4fd5fd, _0x7efd9e, _0x5ca396) {
    _0x519c68.varargs = _0x5ca396;
    try {
      var _0x3dd135 = _0x519c68.getStreamFromFD(_0x4fd5fd);
      switch (_0x7efd9e) {
        case 21509:
        case 21505:
          {
            if (!_0x3dd135.tty) {
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
            if (!_0x3dd135.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x3dd135.tty) {
              return -59;
            }
            var _0x130929 = _0x519c68.get();
            _0x2c6e39[_0x130929 >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x3dd135.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0x130929 = _0x519c68.get();
            return _0xcb2023.ioctl(_0x3dd135, _0x7efd9e, _0x130929);
          }
        case 21523:
          {
            if (!_0x3dd135.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x3dd135.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0x4ec462("bad ioctl syscall " + _0x7efd9e);
      }
    } catch (_0x18cea2) {
      if (typeof _0xcb2023 === "undefined" || !(_0x18cea2 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x18cea2);
      }
      return -_0x18cea2.errno;
    }
  }
  function _0x1d64ef(_0x101f56, _0x56534a) {
    try {
      var _0x59beaf = _0x5e6e1e(_0x101f56);
      _0x59beaf.sock_ops.listen(_0x59beaf, _0x56534a);
      return 0;
    } catch (_0x35a9fa) {
      if (typeof _0xcb2023 === "undefined" || !(_0x35a9fa instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x35a9fa);
      }
      return -_0x35a9fa.errno;
    }
  }
  function _0x12adbc(_0x10fe8f, _0x4fc655) {
    try {
      _0x10fe8f = _0x519c68.getStr(_0x10fe8f);
      return _0x519c68.doStat(_0xcb2023.lstat, _0x10fe8f, _0x4fc655);
    } catch (_0x4e403c) {
      if (typeof _0xcb2023 === "undefined" || !(_0x4e403c instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x4e403c);
      }
      return -_0x4e403c.errno;
    }
  }
  function _0x2a7c16(_0xfd2a85, _0x44c324) {
    try {
      _0xfd2a85 = _0x519c68.getStr(_0xfd2a85);
      return _0x519c68.doMkdir(_0xfd2a85, _0x44c324);
    } catch (_0x396208) {
      if (typeof _0xcb2023 === "undefined" || !(_0x396208 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x396208);
      }
      return -_0x396208.errno;
    }
  }
  function _0x16e46a(_0x493a90, _0x526f50, _0x519b8a, _0x48b733, _0x481ad1, _0x5004cd) {
    _0x5004cd <<= 12;
    var _0x32978b;
    var _0x17e2f9 = false;
    if ((_0x48b733 & 16) !== 0 && _0x493a90 % 65536 !== 0) {
      return -28;
    }
    if ((_0x48b733 & 32) !== 0) {
      _0x32978b = _0x10aa47(65536, _0x526f50);
      if (!_0x32978b) {
        return -48;
      }
      _0x4227d2(_0x32978b, 0, _0x526f50);
      _0x17e2f9 = true;
    } else {
      var _0x1e58e0 = _0xcb2023.getStream(_0x481ad1);
      if (!_0x1e58e0) {
        return -8;
      }
      var _0x5dd86b = _0xcb2023.mmap(_0x1e58e0, _0x493a90, _0x526f50, _0x5004cd, _0x519b8a, _0x48b733);
      _0x32978b = _0x5dd86b.ptr;
      _0x17e2f9 = _0x5dd86b.allocated;
    }
    _0x519c68.mappings[_0x32978b] = {
      malloc: _0x32978b,
      len: _0x526f50,
      allocated: _0x17e2f9,
      fd: _0x481ad1,
      prot: _0x519b8a,
      flags: _0x48b733,
      offset: _0x5004cd
    };
    return _0x32978b;
  }
  function _0x3c30af(_0x198619, _0x4fafac, _0x17d3f5, _0x40d99c, _0x38678b, _0x238b8f) {
    try {
      return _0x16e46a(_0x198619, _0x4fafac, _0x17d3f5, _0x40d99c, _0x38678b, _0x238b8f);
    } catch (_0x24596d) {
      if (typeof _0xcb2023 === "undefined" || !(_0x24596d instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x24596d);
      }
      return -_0x24596d.errno;
    }
  }
  function _0x2eb4cc(_0x484b0e, _0x699010) {
    if ((_0x484b0e | 0) === -1 || _0x699010 === 0) {
      return -28;
    }
    var _0x3f789d = _0x519c68.mappings[_0x484b0e];
    if (!_0x3f789d) {
      return 0;
    }
    if (_0x699010 === _0x3f789d.len) {
      var _0x95fe3e = _0xcb2023.getStream(_0x3f789d.fd);
      if (_0x95fe3e) {
        if (_0x3f789d.prot & 2) {
          _0x519c68.doMsync(_0x484b0e, _0x95fe3e, _0x699010, _0x3f789d.flags, _0x3f789d.offset);
        }
        _0xcb2023.munmap(_0x95fe3e);
      }
      _0x519c68.mappings[_0x484b0e] = null;
      if (_0x3f789d.allocated) {
        _0x59ed75(_0x3f789d.malloc);
      }
    }
    return 0;
  }
  function _0x1bc714(_0xe3a7db, _0x4c461b) {
    try {
      return _0x2eb4cc(_0xe3a7db, _0x4c461b);
    } catch (_0x14089e) {
      if (typeof _0xcb2023 === "undefined" || !(_0x14089e instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x14089e);
      }
      return -_0x14089e.errno;
    }
  }
  function _0x2ef5cd(_0x57747f, _0x36763e, _0xbc4555) {
    _0x519c68.varargs = _0xbc4555;
    try {
      var _0x549f8a = _0x519c68.getStr(_0x57747f);
      var _0x173c18 = _0xbc4555 ? _0x519c68.get() : 0;
      var _0x5da454 = _0xcb2023.open(_0x549f8a, _0x36763e, _0x173c18);
      return _0x5da454.fd;
    } catch (_0x3292b3) {
      if (typeof _0xcb2023 === "undefined" || !(_0x3292b3 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x3292b3);
      }
      return -_0x3292b3.errno;
    }
  }
  var _0x3ea076 = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0x3aa43b) {
      return _0xcb2023.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0x35f5eb = {
        buckets: []
      };
      _0x35f5eb.buckets.push({
        buffer: new Uint8Array(_0x3ea076.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0x20310b = _0x3ea076.nextname();
      var _0xb094e4 = _0x3ea076.nextname();
      var _0x336d8f = _0xcb2023.createNode(_0x3ea076.root, _0x20310b, 4096, 0);
      var _0x6d9907 = _0xcb2023.createNode(_0x3ea076.root, _0xb094e4, 4096, 0);
      _0x336d8f.pipe = _0x35f5eb;
      _0x6d9907.pipe = _0x35f5eb;
      var _0x341e9f = _0xcb2023.createStream({
        path: _0x20310b,
        node: _0x336d8f,
        flags: 0,
        seekable: false,
        stream_ops: _0x3ea076.stream_ops
      });
      _0x336d8f.stream = _0x341e9f;
      var _0xfe02e1 = _0xcb2023.createStream({
        path: _0xb094e4,
        node: _0x6d9907,
        flags: 1,
        seekable: false,
        stream_ops: _0x3ea076.stream_ops
      });
      _0x6d9907.stream = _0xfe02e1;
      return {
        readable_fd: _0x341e9f.fd,
        writable_fd: _0xfe02e1.fd
      };
    },
    stream_ops: {
      poll: function (_0x2c2469) {
        var _0x2c33d7 = _0x2c2469.node.pipe;
        if ((_0x2c2469.flags & 2097155) === 1) {
          return 260;
        } else if (_0x2c33d7.buckets.length > 0) {
          for (var _0x1edd64 = 0; _0x1edd64 < _0x2c33d7.buckets.length; _0x1edd64++) {
            var _0x5f06b2 = _0x2c33d7.buckets[_0x1edd64];
            if (_0x5f06b2.offset - _0x5f06b2.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0x2ad38c, _0x5d960a, _0x5c22ca) {
        return _0x1b64d6.EINVAL;
      },
      fsync: function (_0x37f720) {
        return _0x1b64d6.EINVAL;
      },
      read: function (_0x334151, _0x37d3f5, _0xf9dd9c, _0x1d0969, _0x2b9cf1) {
        var _0x54f371 = _0x334151.node.pipe;
        var _0x2a49df = 0;
        for (var _0x11bd3e = 0; _0x11bd3e < _0x54f371.buckets.length; _0x11bd3e++) {
          var _0xb04e0f = _0x54f371.buckets[_0x11bd3e];
          _0x2a49df += _0xb04e0f.offset - _0xb04e0f.roffset;
        }
        _0x15301d(_0x37d3f5 instanceof ArrayBuffer || ArrayBuffer.isView(_0x37d3f5));
        var _0x50e260 = _0x37d3f5.subarray(_0xf9dd9c, _0xf9dd9c + _0x1d0969);
        if (_0x1d0969 <= 0) {
          return 0;
        }
        if (_0x2a49df == 0) {
          throw new _0xcb2023.ErrnoError(_0x1b64d6.EAGAIN);
        }
        var _0x2d8426 = Math.min(_0x2a49df, _0x1d0969);
        var _0x2a929b = _0x2d8426;
        var _0x439236 = 0;
        for (var _0x11bd3e = 0; _0x11bd3e < _0x54f371.buckets.length; _0x11bd3e++) {
          var _0x582572 = _0x54f371.buckets[_0x11bd3e];
          var _0x17da7f = _0x582572.offset - _0x582572.roffset;
          if (_0x2d8426 <= _0x17da7f) {
            var _0x45ca33 = _0x582572.buffer.subarray(_0x582572.roffset, _0x582572.offset);
            if (_0x2d8426 < _0x17da7f) {
              _0x45ca33 = _0x45ca33.subarray(0, _0x2d8426);
              _0x582572.roffset += _0x2d8426;
            } else {
              _0x439236++;
            }
            _0x50e260.set(_0x45ca33);
            break;
          } else {
            var _0x45ca33 = _0x582572.buffer.subarray(_0x582572.roffset, _0x582572.offset);
            _0x50e260.set(_0x45ca33);
            _0x50e260 = _0x50e260.subarray(_0x45ca33.byteLength);
            _0x2d8426 -= _0x45ca33.byteLength;
            _0x439236++;
          }
        }
        if (_0x439236 && _0x439236 == _0x54f371.buckets.length) {
          _0x439236--;
          _0x54f371.buckets[_0x439236].offset = 0;
          _0x54f371.buckets[_0x439236].roffset = 0;
        }
        _0x54f371.buckets.splice(0, _0x439236);
        return _0x2a929b;
      },
      write: function (_0x88ffc4, _0x20445a, _0x47ce73, _0x5d9be2, _0x3b6b36) {
        var _0x1d4600 = _0x88ffc4.node.pipe;
        _0x15301d(_0x20445a instanceof ArrayBuffer || ArrayBuffer.isView(_0x20445a));
        var _0x33da88 = _0x20445a.subarray(_0x47ce73, _0x47ce73 + _0x5d9be2);
        var _0x759993 = _0x33da88.byteLength;
        if (_0x759993 <= 0) {
          return 0;
        }
        var _0x5a6b8d = null;
        if (_0x1d4600.buckets.length == 0) {
          _0x5a6b8d = {
            buffer: new Uint8Array(_0x3ea076.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0x1d4600.buckets.push(_0x5a6b8d);
        } else {
          _0x5a6b8d = _0x1d4600.buckets[_0x1d4600.buckets.length - 1];
        }
        _0x15301d(_0x5a6b8d.offset <= _0x3ea076.BUCKET_BUFFER_SIZE);
        var _0x311aa9 = _0x3ea076.BUCKET_BUFFER_SIZE - _0x5a6b8d.offset;
        if (_0x311aa9 >= _0x759993) {
          _0x5a6b8d.buffer.set(_0x33da88, _0x5a6b8d.offset);
          _0x5a6b8d.offset += _0x759993;
          return _0x759993;
        } else if (_0x311aa9 > 0) {
          _0x5a6b8d.buffer.set(_0x33da88.subarray(0, _0x311aa9), _0x5a6b8d.offset);
          _0x5a6b8d.offset += _0x311aa9;
          _0x33da88 = _0x33da88.subarray(_0x311aa9, _0x33da88.byteLength);
        }
        var _0x552ab1 = _0x33da88.byteLength / _0x3ea076.BUCKET_BUFFER_SIZE | 0;
        var _0x55012b = _0x33da88.byteLength % _0x3ea076.BUCKET_BUFFER_SIZE;
        for (var _0x28f031 = 0; _0x28f031 < _0x552ab1; _0x28f031++) {
          var _0x140d75 = {
            buffer: new Uint8Array(_0x3ea076.BUCKET_BUFFER_SIZE),
            offset: _0x3ea076.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0x1d4600.buckets.push(_0x140d75);
          _0x140d75.buffer.set(_0x33da88.subarray(0, _0x3ea076.BUCKET_BUFFER_SIZE));
          _0x33da88 = _0x33da88.subarray(_0x3ea076.BUCKET_BUFFER_SIZE, _0x33da88.byteLength);
        }
        if (_0x55012b > 0) {
          var _0x140d75 = {
            buffer: new Uint8Array(_0x3ea076.BUCKET_BUFFER_SIZE),
            offset: _0x33da88.byteLength,
            roffset: 0
          };
          _0x1d4600.buckets.push(_0x140d75);
          _0x140d75.buffer.set(_0x33da88);
        }
        return _0x759993;
      },
      close: function (_0x2a6f60) {
        var _0xd8a9de = _0x2a6f60.node.pipe;
        _0xd8a9de.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x3ea076.nextname.current) {
        _0x3ea076.nextname.current = 0;
      }
      return "pipe[" + _0x3ea076.nextname.current++ + "]";
    }
  };
  function _0x2b6e91(_0x29fb2c) {
    try {
      if (_0x29fb2c == 0) {
        throw new _0xcb2023.ErrnoError(21);
      }
      var _0x24feed = _0x3ea076.createPipe();
      _0x2c6e39[_0x29fb2c >> 2] = _0x24feed.readable_fd;
      _0x2c6e39[_0x29fb2c + 4 >> 2] = _0x24feed.writable_fd;
      return 0;
    } catch (_0x4d89a4) {
      if (typeof _0xcb2023 === "undefined" || !(_0x4d89a4 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x4d89a4);
      }
      return -_0x4d89a4.errno;
    }
  }
  function _0x459d5d(_0x4c83f4, _0x5712e2, _0x19232f) {
    try {
      var _0x23c932 = 0;
      for (var _0xea7f04 = 0; _0xea7f04 < _0x5712e2; _0xea7f04++) {
        var _0x5bf48d = _0x4c83f4 + _0xea7f04 * 8;
        var _0x3b2a69 = _0x2c6e39[_0x5bf48d >> 2];
        var _0x1341a0 = _0x2f4991[_0x5bf48d + 4 >> 1];
        var _0x1042d8 = 32;
        var _0x32c112 = _0xcb2023.getStream(_0x3b2a69);
        if (_0x32c112) {
          _0x1042d8 = _0x519c68.DEFAULT_POLLMASK;
          if (_0x32c112.stream_ops.poll) {
            _0x1042d8 = _0x32c112.stream_ops.poll(_0x32c112);
          }
        }
        _0x1042d8 &= _0x1341a0 | 8 | 16;
        if (_0x1042d8) {
          _0x23c932++;
        }
        _0x2f4991[_0x5bf48d + 6 >> 1] = _0x1042d8;
      }
      return _0x23c932;
    } catch (_0x5748a6) {
      if (typeof _0xcb2023 === "undefined" || !(_0x5748a6 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x5748a6);
      }
      return -_0x5748a6.errno;
    }
  }
  function _0x42ec14(_0x33c2d1, _0x2eb719, _0x1c93e0) {
    try {
      _0x33c2d1 = _0x519c68.getStr(_0x33c2d1);
      return _0x519c68.doReadlink(_0x33c2d1, _0x2eb719, _0x1c93e0);
    } catch (_0x94ee5e) {
      if (typeof _0xcb2023 === "undefined" || !(_0x94ee5e instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x94ee5e);
      }
      return -_0x94ee5e.errno;
    }
  }
  function _0x58af5f(_0x4a2bc1, _0x3e0e59, _0x1702c1, _0x348459, _0x4a86fc, _0x5adbec) {
    try {
      var _0x36ea87 = _0x5e6e1e(_0x4a2bc1);
      var _0x45229b = _0x36ea87.sock_ops.recvmsg(_0x36ea87, _0x1702c1);
      if (!_0x45229b) {
        return 0;
      }
      if (_0x4a86fc) {
        var _0x5bd86b = _0x30b0ac(_0x4a86fc, _0x36ea87.family, _0x28b747.lookup_name(_0x45229b.addr), _0x45229b.port, _0x5adbec);
      }
      _0x42b281.set(_0x45229b.buffer, _0x3e0e59);
      return _0x45229b.buffer.byteLength;
    } catch (_0x2edb4b) {
      if (typeof _0xcb2023 === "undefined" || !(_0x2edb4b instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x2edb4b);
      }
      return -_0x2edb4b.errno;
    }
  }
  function _0x4aadc5(_0x3fb92f, _0xd4a42b, _0x45cfbd) {
    try {
      var _0x324531 = _0x5e6e1e(_0x3fb92f);
      var _0x21193c = _0x2c6e39[_0xd4a42b + 8 >> 2];
      var _0x2b44c = _0x2c6e39[_0xd4a42b + 12 >> 2];
      var _0x6d4c61 = 0;
      for (var _0x1cf286 = 0; _0x1cf286 < _0x2b44c; _0x1cf286++) {
        _0x6d4c61 += _0x2c6e39[_0x21193c + (_0x1cf286 * 8 + 4) >> 2];
      }
      var _0x26b157 = _0x324531.sock_ops.recvmsg(_0x324531, _0x6d4c61);
      if (!_0x26b157) {
        return 0;
      }
      var _0x1bb80d = _0x2c6e39[_0xd4a42b >> 2];
      if (_0x1bb80d) {
        var _0x44cfcb = _0x30b0ac(_0x1bb80d, _0x324531.family, _0x28b747.lookup_name(_0x26b157.addr), _0x26b157.port);
      }
      var _0x1a5e36 = 0;
      var _0x3930f9 = _0x26b157.buffer.byteLength;
      for (var _0x1cf286 = 0; _0x3930f9 > 0 && _0x1cf286 < _0x2b44c; _0x1cf286++) {
        var _0x22758f = _0x2c6e39[_0x21193c + (_0x1cf286 * 8 + 0) >> 2];
        var _0xb1c262 = _0x2c6e39[_0x21193c + (_0x1cf286 * 8 + 4) >> 2];
        if (!_0xb1c262) {
          continue;
        }
        var _0xb753fc = Math.min(_0xb1c262, _0x3930f9);
        var _0x27fd3b = _0x26b157.buffer.subarray(_0x1a5e36, _0x1a5e36 + _0xb753fc);
        _0x42b281.set(_0x27fd3b, _0x22758f + _0x1a5e36);
        _0x1a5e36 += _0xb753fc;
        _0x3930f9 -= _0xb753fc;
      }
      return _0x1a5e36;
    } catch (_0x331eef) {
      if (typeof _0xcb2023 === "undefined" || !(_0x331eef instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x331eef);
      }
      return -_0x331eef.errno;
    }
  }
  function _0x394c64(_0x2c3133, _0x278a2c) {
    try {
      _0x2c3133 = _0x519c68.getStr(_0x2c3133);
      _0x278a2c = _0x519c68.getStr(_0x278a2c);
      _0xcb2023.rename(_0x2c3133, _0x278a2c);
      return 0;
    } catch (_0x2387cb) {
      if (typeof _0xcb2023 === "undefined" || !(_0x2387cb instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x2387cb);
      }
      return -_0x2387cb.errno;
    }
  }
  function _0x37b8b9(_0xf00524) {
    try {
      _0xf00524 = _0x519c68.getStr(_0xf00524);
      _0xcb2023.rmdir(_0xf00524);
      return 0;
    } catch (_0x3fb90f) {
      if (typeof _0xcb2023 === "undefined" || !(_0x3fb90f instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x3fb90f);
      }
      return -_0x3fb90f.errno;
    }
  }
  function _0x9d7b66(_0xdc4921, _0x540fb0, _0x1f69e1) {
    try {
      var _0x3d4e4c = _0x5e6e1e(_0xdc4921);
      var _0x91e500 = _0x2c6e39[_0x540fb0 + 8 >> 2];
      var _0x5a917f = _0x2c6e39[_0x540fb0 + 12 >> 2];
      var _0x4fa9af;
      var _0x289d97;
      var _0x371dfe = _0x2c6e39[_0x540fb0 >> 2];
      var _0x315a6a = _0x2c6e39[_0x540fb0 + 4 >> 2];
      if (_0x371dfe) {
        var _0x353d00 = _0x1c33aa(_0x371dfe, _0x315a6a);
        if (_0x353d00.errno) {
          return -_0x353d00.errno;
        }
        _0x289d97 = _0x353d00.port;
        _0x4fa9af = _0x28b747.lookup_addr(_0x353d00.addr) || _0x353d00.addr;
      }
      var _0x370272 = 0;
      for (var _0x469cb7 = 0; _0x469cb7 < _0x5a917f; _0x469cb7++) {
        _0x370272 += _0x2c6e39[_0x91e500 + (_0x469cb7 * 8 + 4) >> 2];
      }
      var _0x350446 = new Uint8Array(_0x370272);
      var _0x259e76 = 0;
      for (var _0x469cb7 = 0; _0x469cb7 < _0x5a917f; _0x469cb7++) {
        var _0x9eef07 = _0x2c6e39[_0x91e500 + (_0x469cb7 * 8 + 0) >> 2];
        var _0x15a09a = _0x2c6e39[_0x91e500 + (_0x469cb7 * 8 + 4) >> 2];
        for (var _0x3337bb = 0; _0x3337bb < _0x15a09a; _0x3337bb++) {
          _0x350446[_0x259e76++] = _0x51d7cf[_0x9eef07 + _0x3337bb >> 0];
        }
      }
      return _0x3d4e4c.sock_ops.sendmsg(_0x3d4e4c, _0x350446, 0, _0x370272, _0x4fa9af, _0x289d97);
    } catch (_0xe05609) {
      if (typeof _0xcb2023 === "undefined" || !(_0xe05609 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0xe05609);
      }
      return -_0xe05609.errno;
    }
  }
  function _0x420eef(_0xe1c051, _0x124a71, _0x46d9ad, _0x267755, _0x48ebe2, _0x5ab11c) {
    try {
      var _0x5a1df8 = _0x5e6e1e(_0xe1c051);
      var _0x3f7243 = _0x36e357(_0x48ebe2, _0x5ab11c, true);
      if (!_0x3f7243) {
        return _0xcb2023.write(_0x5a1df8.stream, _0x51d7cf, _0x124a71, _0x46d9ad);
      } else {
        return _0x5a1df8.sock_ops.sendmsg(_0x5a1df8, _0x51d7cf, _0x124a71, _0x46d9ad, _0x3f7243.addr, _0x3f7243.port);
      }
    } catch (_0x3403a7) {
      if (typeof _0xcb2023 === "undefined" || !(_0x3403a7 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x3403a7);
      }
      return -_0x3403a7.errno;
    }
  }
  function _0x23cfc9(_0xc193d9) {
    try {
      return -50;
    } catch (_0x2dee72) {
      if (typeof _0xcb2023 === "undefined" || !(_0x2dee72 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x2dee72);
      }
      return -_0x2dee72.errno;
    }
  }
  function _0x3eada1(_0x241880, _0x16140d) {
    try {
      _0x5e6e1e(_0x241880);
      return -52;
    } catch (_0x531c21) {
      if (typeof _0xcb2023 === "undefined" || !(_0x531c21 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x531c21);
      }
      return -_0x531c21.errno;
    }
  }
  function _0x2e59ff(_0x4a7d69, _0x215622, _0x3e9ef6) {
    try {
      var _0x49bbbd = _0x1ccd37.createSocket(_0x4a7d69, _0x215622, _0x3e9ef6);
      return _0x49bbbd.stream.fd;
    } catch (_0x5395a1) {
      if (typeof _0xcb2023 === "undefined" || !(_0x5395a1 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x5395a1);
      }
      return -_0x5395a1.errno;
    }
  }
  function _0x4653b4(_0x5c4c26, _0x10b43e) {
    try {
      _0x5c4c26 = _0x519c68.getStr(_0x5c4c26);
      return _0x519c68.doStat(_0xcb2023.stat, _0x5c4c26, _0x10b43e);
    } catch (_0x97fd0e) {
      if (typeof _0xcb2023 === "undefined" || !(_0x97fd0e instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x97fd0e);
      }
      return -_0x97fd0e.errno;
    }
  }
  function _0x1dad4c(_0x483610, _0x1750c7, _0x265f07) {
    try {
      _0x483610 = _0x519c68.getStr(_0x483610);
      _0x2c6e39[_0x265f07 + 4 >> 2] = 4096;
      _0x2c6e39[_0x265f07 + 40 >> 2] = 4096;
      _0x2c6e39[_0x265f07 + 8 >> 2] = 1000000;
      _0x2c6e39[_0x265f07 + 12 >> 2] = 500000;
      _0x2c6e39[_0x265f07 + 16 >> 2] = 500000;
      _0x2c6e39[_0x265f07 + 20 >> 2] = _0xcb2023.nextInode;
      _0x2c6e39[_0x265f07 + 24 >> 2] = 1000000;
      _0x2c6e39[_0x265f07 + 28 >> 2] = 42;
      _0x2c6e39[_0x265f07 + 44 >> 2] = 2;
      _0x2c6e39[_0x265f07 + 36 >> 2] = 255;
      return 0;
    } catch (_0x3f6a47) {
      if (typeof _0xcb2023 === "undefined" || !(_0x3f6a47 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x3f6a47);
      }
      return -_0x3f6a47.errno;
    }
  }
  function _0x283b44(_0x337b25, _0x40e53e, _0xf30888, _0x3145b7) {
    try {
      _0x337b25 = _0x519c68.getStr(_0x337b25);
      var _0x25a066 = _0x519c68.get64(_0xf30888, _0x3145b7);
      _0xcb2023.truncate(_0x337b25, _0x25a066);
      return 0;
    } catch (_0x4fde1f) {
      if (typeof _0xcb2023 === "undefined" || !(_0x4fde1f instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x4fde1f);
      }
      return -_0x4fde1f.errno;
    }
  }
  function _0x3cf951(_0x1924ea) {
    try {
      if (!_0x1924ea) {
        return -21;
      }
      var _0x35617a = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      function _0x2eb68f(_0x12a5db, _0x507baf) {
        var _0x5acbdd = _0x35617a[_0x12a5db];
        _0x401b12(_0x507baf, _0x1924ea + _0x5acbdd);
      }
      _0x2eb68f("sysname", "Emscripten");
      _0x2eb68f("nodename", "emscripten");
      _0x2eb68f("release", "1.0");
      _0x2eb68f("version", "#1");
      _0x2eb68f("machine", "wasm32");
      return 0;
    } catch (_0x78af60) {
      if (typeof _0xcb2023 === "undefined" || !(_0x78af60 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x78af60);
      }
      return -_0x78af60.errno;
    }
  }
  function _0x5d4c5d(_0x3e8b61) {
    try {
      _0x3e8b61 = _0x519c68.getStr(_0x3e8b61);
      _0xcb2023.unlink(_0x3e8b61);
      return 0;
    } catch (_0x1f99a4) {
      if (typeof _0xcb2023 === "undefined" || !(_0x1f99a4 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x1f99a4);
      }
      return -_0x1f99a4.errno;
    }
  }
  function _0x470a1f() {
    _0x4ec462();
  }
  function _0x141b3d() {
    if (_0x141b3d.start === undefined) {
      _0x141b3d.start = Date.now();
    }
    return (Date.now() - _0x141b3d.start) * 1000 | 0;
  }
  function _0x22cb6c() {
    if (_0x54f4b5) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0x4eb9b2 = true;
  function _0x178b5a(_0x230ea7, _0x258d29) {
    var _0x2f7be0;
    if (_0x230ea7 === 0) {
      _0x2f7be0 = 1000000;
    } else if (_0x230ea7 === 1 && _0x4eb9b2) {
      _0x2f7be0 = _0x22cb6c();
    } else {
      _0x345717(28);
      return -1;
    }
    _0x2c6e39[_0x258d29 >> 2] = _0x2f7be0 / 1000000000 | 0;
    _0x2c6e39[_0x258d29 + 4 >> 2] = _0x2f7be0;
    return 0;
  }
  var _0x4b4cca;
  if (_0x54f4b5) {
    _0x4b4cca = function () {
      var _0x460352 = process.hrtime();
      return _0x460352[0] * 1000 + _0x460352[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0x4b4cca = dateNow;
  } else {
    _0x4b4cca = function () {
      return performance.now();
    };
  }
  function _0x47d6dd(_0x216000, _0x4856de) {
    var _0x30723a;
    if (_0x216000 === 0) {
      _0x30723a = Date.now();
    } else if ((_0x216000 === 1 || _0x216000 === 4) && _0x4eb9b2) {
      _0x30723a = _0x4b4cca();
    } else {
      _0x345717(28);
      return -1;
    }
    _0x2c6e39[_0x4856de >> 2] = _0x30723a / 1000 | 0;
    _0x2c6e39[_0x4856de + 4 >> 2] = _0x30723a % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x5f4796(_0x18e20a, _0x5a7022) {
    return _0x18e20a - _0x5a7022;
  }
  function _0x4ff91e(_0x1c7d28) {}
  function _0x2d5eef() {
    return 0;
  }
  function _0x2beb0b(_0x1a8a6b, _0x2be108) {}
  function _0x3ad938(_0xeb89d2, _0x3c0dc1) {
    return 0;
  }
  var _0x2630e5 = [];
  function _0x53edfe(_0x320a11, _0x1fe234) {
    _0x2630e5.length = 0;
    var _0x2a51fb;
    _0x1fe234 >>= 2;
    while (_0x2a51fb = _0x42b281[_0x320a11++]) {
      var _0x523553 = _0x2a51fb < 105;
      if (_0x523553 && _0x1fe234 & 1) {
        _0x1fe234++;
      }
      _0x2630e5.push(_0x523553 ? _0x2862c3[_0x1fe234++ >> 1] : _0x2c6e39[_0x1fe234]);
      ++_0x1fe234;
    }
    return _0x2630e5;
  }
  function _0x5692fa(_0x3ab6f5, _0x5da1b5, _0x4314b5, _0x4641d8) {
    var _0x320395 = _0x53edfe(_0x5da1b5, _0x4314b5);
    return _0x446cac[_0x3ab6f5].apply(null, _0x320395);
  }
  function _0x3d0924(_0x316caa, _0xbfc731, _0x20bd05) {
    return _0x5692fa(_0x316caa, _0xbfc731, _0x20bd05, 1);
  }
  function _0x51a320(_0x432051, _0x264066) {
    _0x4989e8.mainLoop.timingMode = _0x432051;
    _0x4989e8.mainLoop.timingValue = _0x264066;
    if (!_0x4989e8.mainLoop.func) {
      return 1;
    }
    if (!_0x4989e8.mainLoop.running) {
      _0x4989e8.mainLoop.running = true;
    }
    if (_0x432051 == 0) {
      _0x4989e8.mainLoop.scheduler = function _0x246134() {
        var _0x1f4919 = Math.max(0, _0x4989e8.mainLoop.tickStartTime + _0x264066 - _0x4b4cca()) | 0;
        setTimeout(_0x4989e8.mainLoop.runner, _0x1f4919);
      };
      _0x4989e8.mainLoop.method = "timeout";
    } else if (_0x432051 == 1) {
      _0x4989e8.mainLoop.scheduler = function _0x8e3e73() {
        _0x4989e8.requestAnimationFrame(_0x4989e8.mainLoop.runner);
      };
      _0x4989e8.mainLoop.method = "rAF";
    } else if (_0x432051 == 2) {
      if (typeof setImmediate === "undefined") {
        var _0xe527ca = [];
        var _0x3b79a0 = "setimmediate";
        function _0x3e0feb(_0x4a0214) {
          if (_0x4a0214.data === _0x3b79a0 || _0x4a0214.data.target === _0x3b79a0) {
            _0x4a0214.stopPropagation();
            _0xe527ca.shift()();
          }
        }
        addEventListener("message", _0x3e0feb, true);
        setImmediate = function _0x4b897d(_0x270dbf) {
          _0xe527ca.push(_0x270dbf);
          if (_0x8e8b07) {
            if (_0x4141f5.setImmediates === undefined) {
              _0x4141f5.setImmediates = [];
            }
            _0x4141f5.setImmediates.push(_0x270dbf);
            postMessage({
              target: _0x3b79a0
            });
          } else {
            postMessage(_0x3b79a0, "*");
          }
        };
      }
      _0x4989e8.mainLoop.scheduler = function _0x5c4787() {
        setImmediate(_0x4989e8.mainLoop.runner);
      };
      _0x4989e8.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0x27c7b6(_0x240f83) {
    _0x3bdba2(_0x240f83);
  }
  function _0x53d2ae() {
    if (!_0x3defe9()) {
      try {
        _0x27c7b6(_0x213183);
      } catch (_0x5b47d9) {
        if (_0x5b47d9 instanceof _0x425896) {
          return;
        }
        throw _0x5b47d9;
      }
    }
  }
  function _0x2c7f7c(_0xffa1d5, _0x31c2f0, _0x313589, _0x26fab9, _0x2668ca) {
    _0x15301d(!_0x4989e8.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x4989e8.mainLoop.func = _0xffa1d5;
    _0x4989e8.mainLoop.arg = _0x26fab9;
    var _0x5f2dbd = _0x4989e8.mainLoop.currentlyRunningMainloop;
    function _0xdd2bf8() {
      if (_0x5f2dbd < _0x4989e8.mainLoop.currentlyRunningMainloop) {
        _0x53d2ae();
        return false;
      }
      return true;
    }
    _0x4989e8.mainLoop.running = false;
    _0x4989e8.mainLoop.runner = function _0x1cc051() {
      if (_0xba6125) {
        return;
      }
      if (_0x4989e8.mainLoop.queue.length > 0) {
        var _0x468ae1 = Date.now();
        var _0x522f57 = _0x4989e8.mainLoop.queue.shift();
        _0x522f57.func(_0x522f57.arg);
        if (_0x4989e8.mainLoop.remainingBlockers) {
          var _0xb0e25c = _0x4989e8.mainLoop.remainingBlockers;
          var _0x1cec49 = _0xb0e25c % 1 == 0 ? _0xb0e25c - 1 : Math.floor(_0xb0e25c);
          if (_0x522f57.counted) {
            _0x4989e8.mainLoop.remainingBlockers = _0x1cec49;
          } else {
            _0x1cec49 = _0x1cec49 + 0.5;
            _0x4989e8.mainLoop.remainingBlockers = (_0xb0e25c * 8 + _0x1cec49) / 9;
          }
        }
        console.log("main loop blocker \"" + _0x522f57.name + "\" took " + (Date.now() - _0x468ae1) + " ms");
        _0x4989e8.mainLoop.updateStatus();
        if (!_0xdd2bf8()) {
          return;
        }
        setTimeout(_0x4989e8.mainLoop.runner, 0);
        return;
      }
      if (!_0xdd2bf8()) {
        return;
      }
      _0x4989e8.mainLoop.currentFrameNumber = _0x4989e8.mainLoop.currentFrameNumber + 1 | 0;
      if (_0x4989e8.mainLoop.timingMode == 1 && _0x4989e8.mainLoop.timingValue > 1 && _0x4989e8.mainLoop.currentFrameNumber % _0x4989e8.mainLoop.timingValue != 0) {
        _0x4989e8.mainLoop.scheduler();
        return;
      } else if (_0x4989e8.mainLoop.timingMode == 0) {
        _0x4989e8.mainLoop.tickStartTime = _0x4b4cca();
      }
      _0xa194ab.newRenderingFrameStarted();
      _0x4989e8.mainLoop.runIter(_0xffa1d5);
      if (!_0xdd2bf8()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x4989e8.mainLoop.scheduler();
    };
    if (!_0x2668ca) {
      if (_0x31c2f0 && _0x31c2f0 > 0) {
        _0x51a320(0, 1000 / _0x31c2f0);
      } else {
        _0x51a320(1, 1);
      }
      _0x4989e8.mainLoop.scheduler();
    }
    if (_0x313589) {
      throw "unwind";
    }
  }
  function _0x378bc8(_0x33164a, _0x1b9d25) {
    if (_0xba6125) {
      return;
    }
    if (_0x1b9d25) {
      _0x33164a();
      return;
    }
    try {
      _0x33164a();
    } catch (_0x3c0850) {
      if (_0x3c0850 instanceof _0x425896) {
        return;
      } else if (_0x3c0850 !== "unwind") {
        if (_0x3c0850 && typeof _0x3c0850 === "object" && _0x3c0850.stack) {
          _0x5c756b("exception thrown: " + [_0x3c0850, _0x3c0850.stack]);
        }
        throw _0x3c0850;
      }
    }
  }
  var _0x4989e8 = {
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
        _0x4989e8.mainLoop.scheduler = null;
        _0x4989e8.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0x4989e8.mainLoop.currentlyRunningMainloop++;
        var _0x58f9ef = _0x4989e8.mainLoop.timingMode;
        var _0x3be65e = _0x4989e8.mainLoop.timingValue;
        var _0x10dcb = _0x4989e8.mainLoop.func;
        _0x4989e8.mainLoop.func = null;
        _0x2c7f7c(_0x10dcb, 0, false, _0x4989e8.mainLoop.arg, true);
        _0x51a320(_0x58f9ef, _0x3be65e);
        _0x4989e8.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0x4141f5.setStatus) {
          var _0x4c0e70 = _0x4141f5.statusMessage || "Please wait...";
          var _0x30d2fe = _0x4989e8.mainLoop.remainingBlockers;
          var _0x376e04 = _0x4989e8.mainLoop.expectedBlockers;
          if (_0x30d2fe) {
            if (_0x30d2fe < _0x376e04) {
              _0x4141f5.setStatus(_0x4c0e70 + " (" + (_0x376e04 - _0x30d2fe) + "/" + _0x376e04 + ")");
            } else {
              _0x4141f5.setStatus(_0x4c0e70);
            }
          } else {
            _0x4141f5.setStatus("");
          }
        }
      },
      runIter: function (_0x712ac5) {
        if (_0xba6125) {
          return;
        }
        if (_0x4141f5.preMainLoop) {
          var _0x3d467d = _0x4141f5.preMainLoop();
          if (_0x3d467d === false) {
            return;
          }
        }
        _0x378bc8(_0x712ac5);
        if (_0x4141f5.postMainLoop) {
          _0x4141f5.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0x4141f5.preloadPlugins) {
        _0x4141f5.preloadPlugins = [];
      }
      if (_0x4989e8.initted) {
        return;
      }
      _0x4989e8.initted = true;
      try {
        new Blob();
        _0x4989e8.hasBlobConstructor = true;
      } catch (_0x18c732) {
        _0x4989e8.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x4989e8.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x4989e8.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x4989e8.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0x4141f5.noImageDecoding && typeof _0x4989e8.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0x4141f5.noImageDecoding = true;
      }
      var _0x3c684b = {};
      _0x3c684b.canHandle = function _0x178f28(_0x3e881a) {
        return !_0x4141f5.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x3e881a);
      };
      _0x3c684b.handle = function _0x4d3b55(_0x4ed046, _0x1e29ff, _0x51dab1, _0xac5134) {
        var _0x4ce760 = null;
        if (_0x4989e8.hasBlobConstructor) {
          try {
            _0x4ce760 = new Blob([_0x4ed046], {
              type: _0x4989e8.getMimetype(_0x1e29ff)
            });
            if (_0x4ce760.size !== _0x4ed046.length) {
              _0x4ce760 = new Blob([new Uint8Array(_0x4ed046).buffer], {
                type: _0x4989e8.getMimetype(_0x1e29ff)
              });
            }
          } catch (_0x506409) {
            _0x728a21("Blob constructor present but fails: " + _0x506409 + "; falling back to blob builder");
          }
        }
        if (!_0x4ce760) {
          var _0x44ad5a = new _0x4989e8.BlobBuilder();
          _0x44ad5a.append(new Uint8Array(_0x4ed046).buffer);
          _0x4ce760 = _0x44ad5a.getBlob();
        }
        var _0x1da843 = _0x4989e8.URLObject.createObjectURL(_0x4ce760);
        var _0x1c28e8 = new Image();
        _0x1c28e8.onload = function _0x2cab02() {
          _0x15301d(_0x1c28e8.complete, "Image " + _0x1e29ff + " could not be decoded");
          var _0x13c11e = document.createElement("canvas");
          _0x13c11e.width = _0x1c28e8.width;
          _0x13c11e.height = _0x1c28e8.height;
          var _0x4f9805 = _0x13c11e.getContext("2d");
          _0x4f9805.drawImage(_0x1c28e8, 0, 0);
          _0x4141f5.preloadedImages[_0x1e29ff] = _0x13c11e;
          _0x4989e8.URLObject.revokeObjectURL(_0x1da843);
          if (_0x51dab1) {
            _0x51dab1(_0x4ed046);
          }
        };
        _0x1c28e8.onerror = function _0x517fbb(_0x652949) {
          console.log("Image " + _0x1da843 + " could not be decoded");
          if (_0xac5134) {
            _0xac5134();
          }
        };
        _0x1c28e8.src = _0x1da843;
      };
      _0x4141f5.preloadPlugins.push(_0x3c684b);
      var _0x37d194 = {};
      _0x37d194.canHandle = function _0x1dcfb7(_0x6a58d8) {
        return !_0x4141f5.noAudioDecoding && _0x6a58d8.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0x37d194.handle = function _0x11aa4f(_0x582c87, _0x514604, _0x2552d9, _0x59ffa7) {
        var _0x3b47e3 = false;
        function _0x4e4e91(_0x5e168e) {
          if (_0x3b47e3) {
            return;
          }
          _0x3b47e3 = true;
          _0x4141f5.preloadedAudios[_0x514604] = _0x5e168e;
          if (_0x2552d9) {
            _0x2552d9(_0x582c87);
          }
        }
        function _0x1dfbc2() {
          if (_0x3b47e3) {
            return;
          }
          _0x3b47e3 = true;
          _0x4141f5.preloadedAudios[_0x514604] = new Audio();
          if (_0x59ffa7) {
            _0x59ffa7();
          }
        }
        if (_0x4989e8.hasBlobConstructor) {
          try {
            var _0x4a9c8e = new Blob([_0x582c87], {
              type: _0x4989e8.getMimetype(_0x514604)
            });
          } catch (_0x32a3d9) {
            return _0x1dfbc2();
          }
          var _0x110a05 = _0x4989e8.URLObject.createObjectURL(_0x4a9c8e);
          var _0x2dab74 = new Audio();
          _0x2dab74.addEventListener("canplaythrough", function () {
            _0x4e4e91(_0x2dab74);
          }, false);
          _0x2dab74.onerror = function _0x1a0557(_0x448d6a) {
            if (_0x3b47e3) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0x514604 + ", trying slower base64 approach");
            function _0x56a3c1(_0x1853bf) {
              var _0x1d7489 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x431d83 = "=";
              var _0x5024bc = "";
              var _0x1dfa26 = 0;
              var _0x10e0fc = 0;
              for (var _0x1e8d11 = 0; _0x1e8d11 < _0x1853bf.length; _0x1e8d11++) {
                _0x1dfa26 = _0x1dfa26 << 8 | _0x1853bf[_0x1e8d11];
                _0x10e0fc += 8;
                while (_0x10e0fc >= 6) {
                  var _0x2dab55 = _0x1dfa26 >> _0x10e0fc - 6 & 63;
                  _0x10e0fc -= 6;
                  _0x5024bc += _0x1d7489[_0x2dab55];
                }
              }
              if (_0x10e0fc == 2) {
                _0x5024bc += _0x1d7489[(_0x1dfa26 & 3) << 4];
                _0x5024bc += _0x431d83 + _0x431d83;
              } else if (_0x10e0fc == 4) {
                _0x5024bc += _0x1d7489[(_0x1dfa26 & 15) << 2];
                _0x5024bc += _0x431d83;
              }
              return _0x5024bc;
            }
            _0x2dab74.src = "data:audio/x-" + _0x514604.substr(-3) + ";base64," + _0x56a3c1(_0x582c87);
            _0x4e4e91(_0x2dab74);
          };
          _0x2dab74.src = _0x110a05;
          _0x4989e8.safeSetTimeout(function () {
            _0x4e4e91(_0x2dab74);
          }, 10000);
        } else {
          return _0x1dfbc2();
        }
      };
      _0x4141f5.preloadPlugins.push(_0x37d194);
      function _0x5e284a() {
        _0x4989e8.pointerLock = document.pointerLockElement === _0x4141f5.canvas || document.mozPointerLockElement === _0x4141f5.canvas || document.webkitPointerLockElement === _0x4141f5.canvas || document.msPointerLockElement === _0x4141f5.canvas;
      }
      var _0x2eb608 = _0x4141f5.canvas;
      if (_0x2eb608) {
        _0x2eb608.requestPointerLock = _0x2eb608.requestPointerLock || _0x2eb608.mozRequestPointerLock || _0x2eb608.webkitRequestPointerLock || _0x2eb608.msRequestPointerLock || function () {};
        _0x2eb608.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x2eb608.exitPointerLock = _0x2eb608.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x5e284a, false);
        document.addEventListener("mozpointerlockchange", _0x5e284a, false);
        document.addEventListener("webkitpointerlockchange", _0x5e284a, false);
        document.addEventListener("mspointerlockchange", _0x5e284a, false);
        if (_0x4141f5.elementPointerLock) {
          _0x2eb608.addEventListener("click", function (_0x10cb3e) {
            if (!_0x4989e8.pointerLock && _0x4141f5.canvas.requestPointerLock) {
              _0x4141f5.canvas.requestPointerLock();
              _0x10cb3e.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x29180e, _0x3f9bd7, _0x1f44e9, _0x54acb3) {
      if (_0x3f9bd7 && _0x4141f5.ctx && _0x29180e == _0x4141f5.canvas) {
        return _0x4141f5.ctx;
      }
      var _0x394881;
      var _0xc4abd5;
      if (_0x3f9bd7) {
        var _0x298019 = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0x54acb3) {
          for (var _0x252be8 in _0x54acb3) {
            _0x298019[_0x252be8] = _0x54acb3[_0x252be8];
          }
        }
        if (typeof _0xa194ab !== "undefined") {
          _0xc4abd5 = _0xa194ab.createContext(_0x29180e, _0x298019);
          if (_0xc4abd5) {
            _0x394881 = _0xa194ab.getContext(_0xc4abd5).GLctx;
          }
        }
      } else {
        _0x394881 = _0x29180e.getContext("2d");
      }
      if (!_0x394881) {
        return null;
      }
      if (_0x1f44e9) {
        if (!_0x3f9bd7) {
          _0x15301d(typeof _0xd640f0 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0x4141f5.ctx = _0x394881;
        if (_0x3f9bd7) {
          _0xa194ab.makeContextCurrent(_0xc4abd5);
        }
        _0x4141f5.useWebGL = _0x3f9bd7;
        _0x4989e8.moduleContextCreatedCallbacks.forEach(function (_0x1dd97b) {
          _0x1dd97b();
        });
        _0x4989e8.init();
      }
      return _0x394881;
    },
    destroyContext: function (_0x2072df, _0x4851d3, _0x2d6831) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0x2eb88f, _0x13e3f8) {
      _0x4989e8.lockPointer = _0x2eb88f;
      _0x4989e8.resizeCanvas = _0x13e3f8;
      if (typeof _0x4989e8.lockPointer === "undefined") {
        _0x4989e8.lockPointer = true;
      }
      if (typeof _0x4989e8.resizeCanvas === "undefined") {
        _0x4989e8.resizeCanvas = false;
      }
      var _0x1e1558 = _0x4141f5.canvas;
      function _0x25cf0d() {
        _0x4989e8.isFullscreen = false;
        var _0x20046e = _0x1e1558.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x20046e) {
          _0x1e1558.exitFullscreen = _0x4989e8.exitFullscreen;
          if (_0x4989e8.lockPointer) {
            _0x1e1558.requestPointerLock();
          }
          _0x4989e8.isFullscreen = true;
          if (_0x4989e8.resizeCanvas) {
            _0x4989e8.setFullscreenCanvasSize();
          } else {
            _0x4989e8.updateCanvasDimensions(_0x1e1558);
          }
        } else {
          _0x20046e.parentNode.insertBefore(_0x1e1558, _0x20046e);
          _0x20046e.parentNode.removeChild(_0x20046e);
          if (_0x4989e8.resizeCanvas) {
            _0x4989e8.setWindowedCanvasSize();
          } else {
            _0x4989e8.updateCanvasDimensions(_0x1e1558);
          }
        }
        if (_0x4141f5.onFullScreen) {
          _0x4141f5.onFullScreen(_0x4989e8.isFullscreen);
        }
        if (_0x4141f5.onFullscreen) {
          _0x4141f5.onFullscreen(_0x4989e8.isFullscreen);
        }
      }
      if (!_0x4989e8.fullscreenHandlersInstalled) {
        _0x4989e8.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x25cf0d, false);
        document.addEventListener("mozfullscreenchange", _0x25cf0d, false);
        document.addEventListener("webkitfullscreenchange", _0x25cf0d, false);
        document.addEventListener("MSFullscreenChange", _0x25cf0d, false);
      }
      var _0x188215 = document.createElement("div");
      _0x1e1558.parentNode.insertBefore(_0x188215, _0x1e1558);
      _0x188215.appendChild(_0x1e1558);
      _0x188215.requestFullscreen = _0x188215.requestFullscreen || _0x188215.mozRequestFullScreen || _0x188215.msRequestFullscreen || (_0x188215.webkitRequestFullscreen ? function () {
        _0x188215.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x188215.webkitRequestFullScreen ? function () {
        _0x188215.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x188215.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0x4989e8.isFullscreen) {
        return false;
      }
      var _0x17d77f = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0x17d77f.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0x229767) {
      var _0x103cc3 = Date.now();
      if (_0x4989e8.nextRAF === 0) {
        _0x4989e8.nextRAF = _0x103cc3 + 1000 / 60;
      } else {
        while (_0x103cc3 + 2 >= _0x4989e8.nextRAF) {
          _0x4989e8.nextRAF += 1000 / 60;
        }
      }
      var _0x4d83a9 = Math.max(_0x4989e8.nextRAF - _0x103cc3, 0);
      setTimeout(_0x229767, _0x4d83a9);
    },
    requestAnimationFrame: function (_0x5bc3b5) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0x5bc3b5);
        return;
      }
      var _0x2e319b = _0x4989e8.fakeRequestAnimationFrame;
      _0x2e319b(_0x5bc3b5);
    },
    safeRequestAnimationFrame: function (_0x258608) {
      return _0x4989e8.requestAnimationFrame(function () {
        _0x378bc8(_0x258608);
      });
    },
    safeSetTimeout: function (_0x3f7d8d, _0x30bba6) {
      return setTimeout(function () {
        _0x378bc8(_0x3f7d8d);
      }, _0x30bba6);
    },
    getMimetype: function (_0x4fb692) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x4fb692.substr(_0x4fb692.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0x3c4ee7) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0x3c4ee7);
    },
    getMovementX: function (_0x537376) {
      return _0x537376.movementX || _0x537376.mozMovementX || _0x537376.webkitMovementX || 0;
    },
    getMovementY: function (_0x74c598) {
      return _0x74c598.movementY || _0x74c598.mozMovementY || _0x74c598.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0x41b9bf) {
      var _0x562bfb = 0;
      switch (_0x41b9bf.type) {
        case "DOMMouseScroll":
          _0x562bfb = _0x41b9bf.detail / 3;
          break;
        case "mousewheel":
          _0x562bfb = _0x41b9bf.wheelDelta / 120;
          break;
        case "wheel":
          _0x562bfb = _0x41b9bf.deltaY;
          switch (_0x41b9bf.deltaMode) {
            case 0:
              _0x562bfb /= 100;
              break;
            case 1:
              _0x562bfb /= 3;
              break;
            case 2:
              _0x562bfb *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x41b9bf.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x41b9bf.type;
      }
      return _0x562bfb;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x5d388e) {
      if (_0x4989e8.pointerLock) {
        if (_0x5d388e.type != "mousemove" && "mozMovementX" in _0x5d388e) {
          _0x4989e8.mouseMovementX = _0x4989e8.mouseMovementY = 0;
        } else {
          _0x4989e8.mouseMovementX = _0x4989e8.getMovementX(_0x5d388e);
          _0x4989e8.mouseMovementY = _0x4989e8.getMovementY(_0x5d388e);
        }
        if (typeof SDL != "undefined") {
          _0x4989e8.mouseX = SDL.mouseX + _0x4989e8.mouseMovementX;
          _0x4989e8.mouseY = SDL.mouseY + _0x4989e8.mouseMovementY;
        } else {
          _0x4989e8.mouseX += _0x4989e8.mouseMovementX;
          _0x4989e8.mouseY += _0x4989e8.mouseMovementY;
        }
      } else {
        var _0x91a1f6 = _0x4141f5.canvas.getBoundingClientRect();
        var _0xb6491b = _0x4141f5.canvas.width;
        var _0x5c181a = _0x4141f5.canvas.height;
        var _0x55aa5a = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0x3fe514 = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x5d388e.type === "touchstart" || _0x5d388e.type === "touchend" || _0x5d388e.type === "touchmove") {
          var _0x1903bd = _0x5d388e.touch;
          if (_0x1903bd === undefined) {
            return;
          }
          var _0x448ce6 = _0x1903bd.pageX - (_0x55aa5a + _0x91a1f6.left);
          var _0x56112d = _0x1903bd.pageY - (_0x3fe514 + _0x91a1f6.top);
          _0x448ce6 = _0x448ce6 * (_0xb6491b / _0x91a1f6.width);
          _0x56112d = _0x56112d * (_0x5c181a / _0x91a1f6.height);
          var _0x23f8e0 = {
            x: _0x448ce6,
            y: _0x56112d
          };
          if (_0x5d388e.type === "touchstart") {
            _0x4989e8.lastTouches[_0x1903bd.identifier] = _0x23f8e0;
            _0x4989e8.touches[_0x1903bd.identifier] = _0x23f8e0;
          } else if (_0x5d388e.type === "touchend" || _0x5d388e.type === "touchmove") {
            var _0x242998 = _0x4989e8.touches[_0x1903bd.identifier];
            if (!_0x242998) {
              _0x242998 = _0x23f8e0;
            }
            _0x4989e8.lastTouches[_0x1903bd.identifier] = _0x242998;
            _0x4989e8.touches[_0x1903bd.identifier] = _0x23f8e0;
          }
          return;
        }
        var _0x3aa35d = _0x5d388e.pageX - (_0x55aa5a + _0x91a1f6.left);
        var _0xb05e68 = _0x5d388e.pageY - (_0x3fe514 + _0x91a1f6.top);
        _0x3aa35d = _0x3aa35d * (_0xb6491b / _0x91a1f6.width);
        _0xb05e68 = _0xb05e68 * (_0x5c181a / _0x91a1f6.height);
        _0x4989e8.mouseMovementX = _0x3aa35d - _0x4989e8.mouseX;
        _0x4989e8.mouseMovementY = _0xb05e68 - _0x4989e8.mouseY;
        _0x4989e8.mouseX = _0x3aa35d;
        _0x4989e8.mouseY = _0xb05e68;
      }
    },
    asyncLoad: function (_0x54476f, _0x19c8ae, _0x41a907, _0x485e7e) {
      var _0xc48e51 = !_0x485e7e ? _0x58bbd4("al " + _0x54476f) : "";
      _0x48b608(_0x54476f, function (_0x29a110) {
        _0x15301d(_0x29a110, "Loading data file \"" + _0x54476f + "\" failed (no arrayBuffer).");
        _0x19c8ae(new Uint8Array(_0x29a110));
        if (_0xc48e51) {
          _0x97cacc(_0xc48e51);
        }
      }, function (_0x2fc6ca) {
        if (_0x41a907) {
          _0x41a907();
        } else {
          throw "Loading data file \"" + _0x54476f + "\" failed.";
        }
      });
      if (_0xc48e51) {
        _0x2e72ba(_0xc48e51);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0x16074e = _0x4141f5.canvas;
      _0x4989e8.resizeListeners.forEach(function (_0x250a57) {
        _0x250a57(_0x16074e.width, _0x16074e.height);
      });
    },
    setCanvasSize: function (_0x1ff24b, _0x943266, _0x191e58) {
      var _0x288331 = _0x4141f5.canvas;
      _0x4989e8.updateCanvasDimensions(_0x288331, _0x1ff24b, _0x943266);
      if (!_0x191e58) {
        _0x4989e8.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x23d0d6 = _0x4d8b01[SDL.screen >> 2];
        _0x23d0d6 = _0x23d0d6 | 8388608;
        _0x2c6e39[SDL.screen >> 2] = _0x23d0d6;
      }
      _0x4989e8.updateCanvasDimensions(_0x4141f5.canvas);
      _0x4989e8.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x55aab0 = _0x4d8b01[SDL.screen >> 2];
        _0x55aab0 = _0x55aab0 & ~8388608;
        _0x2c6e39[SDL.screen >> 2] = _0x55aab0;
      }
      _0x4989e8.updateCanvasDimensions(_0x4141f5.canvas);
      _0x4989e8.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0x5c7688, _0x3af399, _0x1263dc) {
      if (_0x3af399 && _0x1263dc) {
        _0x5c7688.widthNative = _0x3af399;
        _0x5c7688.heightNative = _0x1263dc;
      } else {
        _0x3af399 = _0x5c7688.widthNative;
        _0x1263dc = _0x5c7688.heightNative;
      }
      var _0xad1cdb = _0x3af399;
      var _0x172f86 = _0x1263dc;
      if (_0x4141f5.forcedAspectRatio && _0x4141f5.forcedAspectRatio > 0) {
        if (_0xad1cdb / _0x172f86 < _0x4141f5.forcedAspectRatio) {
          _0xad1cdb = Math.round(_0x172f86 * _0x4141f5.forcedAspectRatio);
        } else {
          _0x172f86 = Math.round(_0xad1cdb / _0x4141f5.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x5c7688.parentNode && typeof screen != "undefined") {
        var _0x145ff8 = Math.min(screen.width / _0xad1cdb, screen.height / _0x172f86);
        _0xad1cdb = Math.round(_0xad1cdb * _0x145ff8);
        _0x172f86 = Math.round(_0x172f86 * _0x145ff8);
      }
      if (_0x4989e8.resizeCanvas) {
        if (_0x5c7688.width != _0xad1cdb) {
          _0x5c7688.width = _0xad1cdb;
        }
        if (_0x5c7688.height != _0x172f86) {
          _0x5c7688.height = _0x172f86;
        }
        if (typeof _0x5c7688.style != "undefined") {
          _0x5c7688.style.removeProperty("width");
          _0x5c7688.style.removeProperty("height");
        }
      } else {
        if (_0x5c7688.width != _0x3af399) {
          _0x5c7688.width = _0x3af399;
        }
        if (_0x5c7688.height != _0x1263dc) {
          _0x5c7688.height = _0x1263dc;
        }
        if (typeof _0x5c7688.style != "undefined") {
          if (_0xad1cdb != _0x3af399 || _0x172f86 != _0x1263dc) {
            _0x5c7688.style.setProperty("width", _0xad1cdb + "px", "important");
            _0x5c7688.style.setProperty("height", _0x172f86 + "px", "important");
          } else {
            _0x5c7688.style.removeProperty("width");
            _0x5c7688.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0xf0e78e = _0x4989e8.nextWgetRequestHandle;
      _0x4989e8.nextWgetRequestHandle++;
      return _0xf0e78e;
    }
  };
  function _0x4fb4ce() {
    _0x4989e8.mainLoop.pause();
    _0x4989e8.mainLoop.func = null;
  }
  function _0x5b830a(_0x5d0a0d) {
    clearInterval(_0x5d0a0d);
  }
  var _0x2b5eda = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0x1320f8 = _0x2b5eda.eventHandlers.length - 1; _0x1320f8 >= 0; --_0x1320f8) {
        _0x2b5eda._removeHandler(_0x1320f8);
      }
      _0x2b5eda.eventHandlers = [];
      _0x2b5eda.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x2b5eda.removeEventListenersRegistered) {
        _0x5e184b.push(_0x2b5eda.removeAllEventListeners);
        _0x2b5eda.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x3269f6, _0x1d8588, _0x1733fe) {
      function _0x253753(_0x21bf4e, _0x1c3a5f) {
        if (_0x21bf4e.length != _0x1c3a5f.length) {
          return false;
        }
        for (var _0x5c7294 in _0x21bf4e) {
          if (_0x21bf4e[_0x5c7294] != _0x1c3a5f[_0x5c7294]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x31179f in _0x2b5eda.deferredCalls) {
        var _0x1e7c47 = _0x2b5eda.deferredCalls[_0x31179f];
        if (_0x1e7c47.targetFunction == _0x3269f6 && _0x253753(_0x1e7c47.argsList, _0x1733fe)) {
          return;
        }
      }
      _0x2b5eda.deferredCalls.push({
        targetFunction: _0x3269f6,
        precedence: _0x1d8588,
        argsList: _0x1733fe
      });
      _0x2b5eda.deferredCalls.sort(function (_0x4abc26, _0x4e19e7) {
        return _0x4abc26.precedence < _0x4e19e7.precedence;
      });
    },
    removeDeferredCalls: function (_0x1874f3) {
      for (var _0x54ae7c = 0; _0x54ae7c < _0x2b5eda.deferredCalls.length; ++_0x54ae7c) {
        if (_0x2b5eda.deferredCalls[_0x54ae7c].targetFunction == _0x1874f3) {
          _0x2b5eda.deferredCalls.splice(_0x54ae7c, 1);
          --_0x54ae7c;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x2b5eda.inEventHandler && _0x2b5eda.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x2b5eda.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0x4b4047 = 0; _0x4b4047 < _0x2b5eda.deferredCalls.length; ++_0x4b4047) {
        var _0x3a2916 = _0x2b5eda.deferredCalls[_0x4b4047];
        _0x2b5eda.deferredCalls.splice(_0x4b4047, 1);
        --_0x4b4047;
        _0x3a2916.targetFunction.apply(null, _0x3a2916.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0x430dff, _0x332e17) {
      for (var _0x1a8de9 = 0; _0x1a8de9 < _0x2b5eda.eventHandlers.length; ++_0x1a8de9) {
        if (_0x2b5eda.eventHandlers[_0x1a8de9].target == _0x430dff && (!_0x332e17 || _0x332e17 == _0x2b5eda.eventHandlers[_0x1a8de9].eventTypeString)) {
          _0x2b5eda._removeHandler(_0x1a8de9--);
        }
      }
    },
    _removeHandler: function (_0x31a2fc) {
      var _0x4b0637 = _0x2b5eda.eventHandlers[_0x31a2fc];
      _0x4b0637.target.removeEventListener(_0x4b0637.eventTypeString, _0x4b0637.eventListenerFunc, _0x4b0637.useCapture);
      _0x2b5eda.eventHandlers.splice(_0x31a2fc, 1);
    },
    registerOrRemoveHandler: function (_0x36ab95) {
      var _0x7071d4 = function _0x5b322d(_0x22fa79) {
        ++_0x2b5eda.inEventHandler;
        _0x2b5eda.currentEventHandler = _0x36ab95;
        _0x2b5eda.runDeferredCalls();
        _0x36ab95.handlerFunc(_0x22fa79);
        _0x2b5eda.runDeferredCalls();
        --_0x2b5eda.inEventHandler;
      };
      if (_0x36ab95.callbackfunc) {
        _0x36ab95.eventListenerFunc = _0x7071d4;
        _0x36ab95.target.addEventListener(_0x36ab95.eventTypeString, _0x7071d4, _0x36ab95.useCapture);
        _0x2b5eda.eventHandlers.push(_0x36ab95);
        _0x2b5eda.registerRemoveEventListeners();
      } else {
        for (var _0x31ede0 = 0; _0x31ede0 < _0x2b5eda.eventHandlers.length; ++_0x31ede0) {
          if (_0x2b5eda.eventHandlers[_0x31ede0].target == _0x36ab95.target && _0x2b5eda.eventHandlers[_0x31ede0].eventTypeString == _0x36ab95.eventTypeString) {
            _0x2b5eda._removeHandler(_0x31ede0--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0x409754) {
      if (!_0x409754) {
        return "";
      }
      if (_0x409754 == window) {
        return "#window";
      }
      if (_0x409754 == screen) {
        return "#screen";
      }
      if (_0x409754 && _0x409754.nodeName) {
        return _0x409754.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x59a3a3 = {};
  function _0x21fa3b(_0x31e838) {
    if (_0x31e838 > 2) {
      return _0xa8c6ca(_0x31e838);
    } else {
      return _0x31e838;
    }
  }
  var _0x56352c = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x31e863(_0x47c046) {
    _0x47c046 = _0x21fa3b(_0x47c046);
    var _0xc96d8f = _0x56352c[_0x47c046] || (typeof document !== "undefined" ? document.querySelector(_0x47c046) : undefined);
    return _0xc96d8f;
  }
  function _0x2ddf30(_0x5c6a74) {
    return _0x31e863(_0x5c6a74);
  }
  function _0x14aa3a(_0x36d62f, _0x220748, _0x50eed1) {
    var _0x3be4b3 = _0x2ddf30(_0x36d62f);
    if (!_0x3be4b3) {
      return -4;
    }
    _0x2c6e39[_0x220748 >> 2] = _0x3be4b3.width;
    _0x2c6e39[_0x50eed1 >> 2] = _0x3be4b3.height;
  }
  function _0x5807d8(_0xf509b6) {
    var _0x2b3860 = _0x555fcf();
    var _0x31929b = _0x41cdff(8);
    var _0x4b2f32 = _0x31929b + 4;
    var _0x669c51 = _0x41cdff(_0xf509b6.id.length + 1);
    _0x3c7021(_0xf509b6.id, _0x669c51, _0xf509b6.id.length + 1);
    var _0x556920 = _0x14aa3a(_0x669c51, _0x31929b, _0x4b2f32);
    var _0x35d169 = [_0x2c6e39[_0x31929b >> 2], _0x2c6e39[_0x4b2f32 >> 2]];
    _0x346df4(_0x2b3860);
    return _0x35d169;
  }
  function _0x38740c(_0x23abc8, _0x467157, _0x53b392) {
    var _0x54cfdf = _0x2ddf30(_0x23abc8);
    if (!_0x54cfdf) {
      return -4;
    }
    _0x54cfdf.width = _0x467157;
    _0x54cfdf.height = _0x53b392;
    return 0;
  }
  function _0x3d3a80(_0x57ac13, _0x248501, _0x3dcc7f) {
    if (!_0x57ac13.controlTransferredOffscreen) {
      _0x57ac13.width = _0x248501;
      _0x57ac13.height = _0x3dcc7f;
    } else {
      var _0x4cfed9 = _0x555fcf();
      var _0x3527fe = _0x41cdff(_0x57ac13.id.length + 1);
      _0x3c7021(_0x57ac13.id, _0x3527fe, _0x57ac13.id.length + 1);
      _0x38740c(_0x3527fe, _0x248501, _0x3dcc7f);
      _0x346df4(_0x4cfed9);
    }
  }
  function _0x480a82(_0x2c656f) {
    var _0x36a934 = _0x5807d8(_0x2c656f);
    var _0x285934 = _0x36a934[0];
    var _0x34d477 = _0x36a934[1];
    var _0x29435d = _0x2c656f.style.width;
    var _0x212b62 = _0x2c656f.style.height;
    var _0x546498 = _0x2c656f.style.backgroundColor;
    var _0x26e6a6 = document.body.style.backgroundColor;
    var _0x3a43f3 = _0x2c656f.style.paddingLeft;
    var _0x876550 = _0x2c656f.style.paddingRight;
    var _0x457b88 = _0x2c656f.style.paddingTop;
    var _0x449cd4 = _0x2c656f.style.paddingBottom;
    var _0x2564da = _0x2c656f.style.marginLeft;
    var _0x51028f = _0x2c656f.style.marginRight;
    var _0x31747c = _0x2c656f.style.marginTop;
    var _0x511178 = _0x2c656f.style.marginBottom;
    var _0x2270ea = document.body.style.margin;
    var _0x5e6809 = document.documentElement.style.overflow;
    var _0x4eb5c2 = document.body.scroll;
    var _0x6f1664 = _0x2c656f.style.imageRendering;
    function _0x3ff9ee() {
      var _0x293b18 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0x293b18) {
        document.removeEventListener("fullscreenchange", _0x3ff9ee);
        document.removeEventListener("webkitfullscreenchange", _0x3ff9ee);
        _0x3d3a80(_0x2c656f, _0x285934, _0x34d477);
        _0x2c656f.style.width = _0x29435d;
        _0x2c656f.style.height = _0x212b62;
        _0x2c656f.style.backgroundColor = _0x546498;
        if (!_0x26e6a6) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0x26e6a6;
        _0x2c656f.style.paddingLeft = _0x3a43f3;
        _0x2c656f.style.paddingRight = _0x876550;
        _0x2c656f.style.paddingTop = _0x457b88;
        _0x2c656f.style.paddingBottom = _0x449cd4;
        _0x2c656f.style.marginLeft = _0x2564da;
        _0x2c656f.style.marginRight = _0x51028f;
        _0x2c656f.style.marginTop = _0x31747c;
        _0x2c656f.style.marginBottom = _0x511178;
        document.body.style.margin = _0x2270ea;
        document.documentElement.style.overflow = _0x5e6809;
        document.body.scroll = _0x4eb5c2;
        _0x2c656f.style.imageRendering = _0x6f1664;
        if (_0x2c656f.GLctxObject) {
          _0x2c656f.GLctxObject.GLctx.viewport(0, 0, _0x285934, _0x34d477);
        }
        if (_0x59a3a3.canvasResizedCallback) {
          (function (_0x31a513, _0x117143, _0x36c38c) {
            return _0x2c342c.apply(null, [_0x59a3a3.canvasResizedCallback, _0x31a513, _0x117143, _0x36c38c]);
          })(37, 0, _0x59a3a3.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0x3ff9ee);
    document.addEventListener("webkitfullscreenchange", _0x3ff9ee);
    return _0x3ff9ee;
  }
  function _0x276a48(_0x3c60e2, _0x43a2cd, _0x15db85) {
    _0x3c60e2.style.paddingLeft = _0x3c60e2.style.paddingRight = _0x15db85 + "px";
    _0x3c60e2.style.paddingTop = _0x3c60e2.style.paddingBottom = _0x43a2cd + "px";
  }
  function _0x4f9a23(_0x2020e9) {
    if (_0x56352c.indexOf(_0x2020e9) < 0) {
      return _0x2020e9.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0x2cc2e5(_0x2a30dd, _0x4dfdc6) {
    var _0x3a37b0 = _0x480a82(_0x2a30dd);
    var _0x2b9c35 = _0x4dfdc6.softFullscreen ? innerWidth : screen.width;
    var _0x3df9e1 = _0x4dfdc6.softFullscreen ? innerHeight : screen.height;
    var _0x2395d7 = _0x4f9a23(_0x2a30dd);
    var _0x18b14e = _0x2395d7.width;
    var _0x44556c = _0x2395d7.height;
    var _0x136cf8 = _0x5807d8(_0x2a30dd);
    var _0x1a5f75 = _0x136cf8[0];
    var _0x1a2afc = _0x136cf8[1];
    if (_0x4dfdc6.scaleMode == 3) {
      _0x276a48(_0x2a30dd, (_0x3df9e1 - _0x44556c) / 2, (_0x2b9c35 - _0x18b14e) / 2);
      _0x2b9c35 = _0x18b14e;
      _0x3df9e1 = _0x44556c;
    } else if (_0x4dfdc6.scaleMode == 2) {
      if (_0x2b9c35 * _0x1a2afc < _0x1a5f75 * _0x3df9e1) {
        var _0x4fdc41 = _0x1a2afc * _0x2b9c35 / _0x1a5f75;
        _0x276a48(_0x2a30dd, (_0x3df9e1 - _0x4fdc41) / 2, 0);
        _0x3df9e1 = _0x4fdc41;
      } else {
        var _0x17d91c = _0x1a5f75 * _0x3df9e1 / _0x1a2afc;
        _0x276a48(_0x2a30dd, 0, (_0x2b9c35 - _0x17d91c) / 2);
        _0x2b9c35 = _0x17d91c;
      }
    }
    if (!_0x2a30dd.style.backgroundColor) {
      _0x2a30dd.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0x2a30dd.style.width = _0x2b9c35 + "px";
    _0x2a30dd.style.height = _0x3df9e1 + "px";
    if (_0x4dfdc6.filteringMode == 1) {
      _0x2a30dd.style.imageRendering = "optimizeSpeed";
      _0x2a30dd.style.imageRendering = "-moz-crisp-edges";
      _0x2a30dd.style.imageRendering = "-o-crisp-edges";
      _0x2a30dd.style.imageRendering = "-webkit-optimize-contrast";
      _0x2a30dd.style.imageRendering = "optimize-contrast";
      _0x2a30dd.style.imageRendering = "crisp-edges";
      _0x2a30dd.style.imageRendering = "pixelated";
    }
    var _0x5520d1 = _0x4dfdc6.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x4dfdc6.canvasResolutionScaleMode != 0) {
      var _0x3b840e = _0x2b9c35 * _0x5520d1 | 0;
      var _0x263ac8 = _0x3df9e1 * _0x5520d1 | 0;
      _0x3d3a80(_0x2a30dd, _0x3b840e, _0x263ac8);
      if (_0x2a30dd.GLctxObject) {
        _0x2a30dd.GLctxObject.GLctx.viewport(0, 0, _0x3b840e, _0x263ac8);
      }
    }
    return _0x3a37b0;
  }
  function _0x57bdf2(_0x2b73cd, _0x5e7cd8) {
    if (_0x5e7cd8.scaleMode != 0 || _0x5e7cd8.canvasResolutionScaleMode != 0) {
      _0x2cc2e5(_0x2b73cd, _0x5e7cd8);
    }
    if (_0x2b73cd.requestFullscreen) {
      _0x2b73cd.requestFullscreen();
    } else if (_0x2b73cd.webkitRequestFullscreen) {
      _0x2b73cd.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x2b5eda.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x59a3a3 = _0x5e7cd8;
    if (_0x5e7cd8.canvasResizedCallback) {
      (function (_0xfdd9ac, _0x4d8ea5, _0xb714c1) {
        return _0x2c342c.apply(null, [_0x5e7cd8.canvasResizedCallback, _0xfdd9ac, _0x4d8ea5, _0xb714c1]);
      })(37, 0, _0x5e7cd8.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0x3babba() {
    if (!_0x2b5eda.fullscreenEnabled()) {
      return -1;
    }
    _0x2b5eda.removeDeferredCalls(_0x57bdf2);
    var _0x5a6499 = _0x56352c[1];
    if (_0x5a6499.exitFullscreen) {
      if (_0x5a6499.fullscreenElement) {
        _0x5a6499.exitFullscreen();
      }
    } else if (_0x5a6499.webkitExitFullscreen) {
      if (_0x5a6499.webkitFullscreenElement) {
        _0x5a6499.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0x16eaf9(_0x523ad9) {
    if (_0x523ad9.requestPointerLock) {
      _0x523ad9.requestPointerLock();
    } else if (_0x523ad9.msRequestPointerLock) {
      _0x523ad9.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0x230c91() {
    _0x2b5eda.removeDeferredCalls(_0x16eaf9);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0x53896c(_0x3b1f4e) {
    var _0x39eb51 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0x4e781a = !!_0x39eb51;
    _0x2c6e39[_0x3b1f4e >> 2] = _0x4e781a;
    _0x2c6e39[_0x3b1f4e + 4 >> 2] = _0x2b5eda.fullscreenEnabled();
    var _0x9612dd = _0x4e781a ? _0x39eb51 : _0x2b5eda.previousFullscreenElement;
    var _0x1b56cc = _0x2b5eda.getNodeNameForTarget(_0x9612dd);
    var _0x7d74a0 = _0x9612dd && _0x9612dd.id ? _0x9612dd.id : "";
    _0x3c7021(_0x1b56cc, _0x3b1f4e + 8, 128);
    _0x3c7021(_0x7d74a0, _0x3b1f4e + 136, 128);
    _0x2c6e39[_0x3b1f4e + 264 >> 2] = _0x9612dd ? _0x9612dd.clientWidth : 0;
    _0x2c6e39[_0x3b1f4e + 268 >> 2] = _0x9612dd ? _0x9612dd.clientHeight : 0;
    _0x2c6e39[_0x3b1f4e + 272 >> 2] = screen.width;
    _0x2c6e39[_0x3b1f4e + 276 >> 2] = screen.height;
    if (_0x4e781a) {
      _0x2b5eda.previousFullscreenElement = _0x39eb51;
    }
  }
  function _0x144f0b(_0x3526af) {
    if (!_0x2b5eda.fullscreenEnabled()) {
      return -1;
    }
    _0x53896c(_0x3526af);
    return 0;
  }
  function _0x34f7f8(_0x35eeab, _0x44cbe2) {
    _0x2862c3[_0x35eeab >> 3] = _0x44cbe2.timestamp;
    for (var _0x44f31e = 0; _0x44f31e < _0x44cbe2.axes.length; ++_0x44f31e) {
      _0x2862c3[_0x35eeab + _0x44f31e * 8 + 16 >> 3] = _0x44cbe2.axes[_0x44f31e];
    }
    for (var _0x44f31e = 0; _0x44f31e < _0x44cbe2.buttons.length; ++_0x44f31e) {
      if (typeof _0x44cbe2.buttons[_0x44f31e] === "object") {
        _0x2862c3[_0x35eeab + _0x44f31e * 8 + 528 >> 3] = _0x44cbe2.buttons[_0x44f31e].value;
      } else {
        _0x2862c3[_0x35eeab + _0x44f31e * 8 + 528 >> 3] = _0x44cbe2.buttons[_0x44f31e];
      }
    }
    for (var _0x44f31e = 0; _0x44f31e < _0x44cbe2.buttons.length; ++_0x44f31e) {
      if (typeof _0x44cbe2.buttons[_0x44f31e] === "object") {
        _0x2c6e39[_0x35eeab + _0x44f31e * 4 + 1040 >> 2] = _0x44cbe2.buttons[_0x44f31e].pressed;
      } else {
        _0x2c6e39[_0x35eeab + _0x44f31e * 4 + 1040 >> 2] = _0x44cbe2.buttons[_0x44f31e] == 1;
      }
    }
    _0x2c6e39[_0x35eeab + 1296 >> 2] = _0x44cbe2.connected;
    _0x2c6e39[_0x35eeab + 1300 >> 2] = _0x44cbe2.index;
    _0x2c6e39[_0x35eeab + 8 >> 2] = _0x44cbe2.axes.length;
    _0x2c6e39[_0x35eeab + 12 >> 2] = _0x44cbe2.buttons.length;
    _0x3c7021(_0x44cbe2.id, _0x35eeab + 1304, 64);
    _0x3c7021(_0x44cbe2.mapping, _0x35eeab + 1368, 64);
  }
  function _0x104f93(_0x5461dc, _0x588319) {
    if (_0x5461dc < 0 || _0x5461dc >= _0x2b5eda.lastGamepadState.length) {
      return -5;
    }
    if (!_0x2b5eda.lastGamepadState[_0x5461dc]) {
      return -7;
    }
    _0x34f7f8(_0x588319, _0x2b5eda.lastGamepadState[_0x5461dc]);
    return 0;
  }
  function _0x2fc518() {
    return 2147483648;
  }
  function _0x53ea82() {
    return _0x2b5eda.lastGamepadState.length;
  }
  function _0x476b69() {
    _0x2b5eda.removeAllEventListeners();
  }
  function _0x51dac1(_0x360e1d) {
    return !_0xa194ab.contexts[_0x360e1d] || _0xa194ab.contexts[_0x360e1d].GLctx.isContextLost();
  }
  function _0xf397c(_0x39fe48) {
    return _0x39fe48 < 0 || _0x39fe48 === 0 && 1 / _0x39fe48 === -Infinity;
  }
  function _0x76a111(_0x25a345, _0x40b0da) {
    return (_0x25a345 >>> 0) + _0x40b0da * 4294967296;
  }
  function _0xeb0074(_0x15ea2e, _0x95475) {
    return (_0x15ea2e >>> 0) + (_0x95475 >>> 0) * 4294967296;
  }
  function _0x284488(_0x44fb05, _0x59d1cd) {
    if (_0x44fb05 <= 0) {
      return _0x44fb05;
    }
    var _0x12d35f = _0x59d1cd <= 32 ? Math.abs(1 << _0x59d1cd - 1) : Math.pow(2, _0x59d1cd - 1);
    if (_0x44fb05 >= _0x12d35f && (_0x59d1cd <= 32 || _0x44fb05 > _0x12d35f)) {
      _0x44fb05 = _0x12d35f * -2 + _0x44fb05;
    }
    return _0x44fb05;
  }
  function _0x1e8638(_0x476d56, _0x1b77ca) {
    if (_0x476d56 >= 0) {
      return _0x476d56;
    }
    if (_0x1b77ca <= 32) {
      return Math.abs(1 << _0x1b77ca - 1) * 2 + _0x476d56;
    } else {
      return Math.pow(2, _0x1b77ca) + _0x476d56;
    }
  }
  function _0x4bef8a(_0x52505, _0x882d38) {
    var _0xc3164f = _0x52505;
    var _0x2ef34e = _0x882d38;
    function _0x3df928(_0x5e0d5e, _0x558fcd) {
      if (_0x558fcd === "double" || _0x558fcd === "i64") {
        if (_0x5e0d5e & 7) {
          _0x5e0d5e += 4;
        }
      } else {}
      return _0x5e0d5e;
    }
    function _0x2210df(_0x3cdf79) {
      var _0x212308;
      _0x2ef34e = _0x3df928(_0x2ef34e, _0x3cdf79);
      if (_0x3cdf79 === "double") {
        _0x212308 = _0x2862c3[_0x2ef34e >> 3];
        _0x2ef34e += 8;
      } else if (_0x3cdf79 == "i64") {
        _0x212308 = [_0x2c6e39[_0x2ef34e >> 2], _0x2c6e39[_0x2ef34e + 4 >> 2]];
        _0x2ef34e += 8;
      } else {
        _0x3cdf79 = "i32";
        _0x212308 = _0x2c6e39[_0x2ef34e >> 2];
        _0x2ef34e += 4;
      }
      return _0x212308;
    }
    var _0x16c24b = [];
    var _0x5716a0;
    var _0x10bedd;
    var _0x399c8a;
    while (1) {
      var _0x576bf7 = _0xc3164f;
      _0x5716a0 = _0x51d7cf[_0xc3164f >> 0];
      if (_0x5716a0 === 0) {
        break;
      }
      _0x10bedd = _0x51d7cf[_0xc3164f + 1 >> 0];
      if (_0x5716a0 == 37) {
        var _0xe47e6d = false;
        var _0x27b772 = false;
        var _0x1992a6 = false;
        var _0x4413fc = false;
        var _0x5df4c9 = false;
        _0xcdd388: while (1) {
          switch (_0x10bedd) {
            case 43:
              _0xe47e6d = true;
              break;
            case 45:
              _0x27b772 = true;
              break;
            case 35:
              _0x1992a6 = true;
              break;
            case 48:
              if (_0x4413fc) {
                break _0xcdd388;
              } else {
                _0x4413fc = true;
                break;
              }
            case 32:
              _0x5df4c9 = true;
              break;
            default:
              break _0xcdd388;
          }
          _0xc3164f++;
          _0x10bedd = _0x51d7cf[_0xc3164f + 1 >> 0];
        }
        var _0x543027 = 0;
        if (_0x10bedd == 42) {
          _0x543027 = _0x2210df("i32");
          _0xc3164f++;
          _0x10bedd = _0x51d7cf[_0xc3164f + 1 >> 0];
        } else {
          while (_0x10bedd >= 48 && _0x10bedd <= 57) {
            _0x543027 = _0x543027 * 10 + (_0x10bedd - 48);
            _0xc3164f++;
            _0x10bedd = _0x51d7cf[_0xc3164f + 1 >> 0];
          }
        }
        var _0x4ce1af = false;
        var _0xf38314 = -1;
        if (_0x10bedd == 46) {
          _0xf38314 = 0;
          _0x4ce1af = true;
          _0xc3164f++;
          _0x10bedd = _0x51d7cf[_0xc3164f + 1 >> 0];
          if (_0x10bedd == 42) {
            _0xf38314 = _0x2210df("i32");
            _0xc3164f++;
          } else {
            while (1) {
              var _0x18ec98 = _0x51d7cf[_0xc3164f + 1 >> 0];
              if (_0x18ec98 < 48 || _0x18ec98 > 57) {
                break;
              }
              _0xf38314 = _0xf38314 * 10 + (_0x18ec98 - 48);
              _0xc3164f++;
            }
          }
          _0x10bedd = _0x51d7cf[_0xc3164f + 1 >> 0];
        }
        if (_0xf38314 < 0) {
          _0xf38314 = 6;
          _0x4ce1af = false;
        }
        var _0x4c29ed;
        switch (String.fromCharCode(_0x10bedd)) {
          case "h":
            var _0x166848 = _0x51d7cf[_0xc3164f + 2 >> 0];
            if (_0x166848 == 104) {
              _0xc3164f++;
              _0x4c29ed = 1;
            } else {
              _0x4c29ed = 2;
            }
            break;
          case "l":
            var _0x166848 = _0x51d7cf[_0xc3164f + 2 >> 0];
            if (_0x166848 == 108) {
              _0xc3164f++;
              _0x4c29ed = 8;
            } else {
              _0x4c29ed = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0x4c29ed = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x4c29ed = 4;
            break;
          default:
            _0x4c29ed = null;
        }
        if (_0x4c29ed) {
          _0xc3164f++;
        }
        _0x10bedd = _0x51d7cf[_0xc3164f + 1 >> 0];
        switch (String.fromCharCode(_0x10bedd)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0x554a14 = _0x10bedd == 100 || _0x10bedd == 105;
              _0x4c29ed = _0x4c29ed || 4;
              _0x399c8a = _0x2210df("i" + _0x4c29ed * 8);
              var _0x5cefa1;
              if (_0x4c29ed == 8) {
                _0x399c8a = _0x10bedd == 117 ? _0xeb0074(_0x399c8a[0], _0x399c8a[1]) : _0x76a111(_0x399c8a[0], _0x399c8a[1]);
              }
              if (_0x4c29ed <= 4) {
                var _0xf8f79b = Math.pow(256, _0x4c29ed) - 1;
                _0x399c8a = (_0x554a14 ? _0x284488 : _0x1e8638)(_0x399c8a & _0xf8f79b, _0x4c29ed * 8);
              }
              var _0xa6f2cc = Math.abs(_0x399c8a);
              var _0x3d1c8e = "";
              if (_0x10bedd == 100 || _0x10bedd == 105) {
                _0x5cefa1 = _0x284488(_0x399c8a, _0x4c29ed * 8, 1).toString(10);
              } else if (_0x10bedd == 117) {
                _0x5cefa1 = _0x1e8638(_0x399c8a, _0x4c29ed * 8, 1).toString(10);
                _0x399c8a = Math.abs(_0x399c8a);
              } else if (_0x10bedd == 111) {
                _0x5cefa1 = (_0x1992a6 ? "0" : "") + _0xa6f2cc.toString(8);
              } else if (_0x10bedd == 120 || _0x10bedd == 88) {
                _0x3d1c8e = _0x1992a6 && _0x399c8a != 0 ? "0x" : "";
                if (_0x399c8a < 0) {
                  _0x399c8a = -_0x399c8a;
                  _0x5cefa1 = (_0xa6f2cc - 1).toString(16);
                  var _0x578b2a = [];
                  for (var _0x430b13 = 0; _0x430b13 < _0x5cefa1.length; _0x430b13++) {
                    _0x578b2a.push((15 - parseInt(_0x5cefa1[_0x430b13], 16)).toString(16));
                  }
                  _0x5cefa1 = _0x578b2a.join("");
                  while (_0x5cefa1.length < _0x4c29ed * 2) {
                    _0x5cefa1 = "f" + _0x5cefa1;
                  }
                } else {
                  _0x5cefa1 = _0xa6f2cc.toString(16);
                }
                if (_0x10bedd == 88) {
                  _0x3d1c8e = _0x3d1c8e.toUpperCase();
                  _0x5cefa1 = _0x5cefa1.toUpperCase();
                }
              } else if (_0x10bedd == 112) {
                if (_0xa6f2cc === 0) {
                  _0x5cefa1 = "(nil)";
                } else {
                  _0x3d1c8e = "0x";
                  _0x5cefa1 = _0xa6f2cc.toString(16);
                }
              }
              if (_0x4ce1af) {
                while (_0x5cefa1.length < _0xf38314) {
                  _0x5cefa1 = "0" + _0x5cefa1;
                }
              }
              if (_0x399c8a >= 0) {
                if (_0xe47e6d) {
                  _0x3d1c8e = "+" + _0x3d1c8e;
                } else if (_0x5df4c9) {
                  _0x3d1c8e = " " + _0x3d1c8e;
                }
              }
              if (_0x5cefa1.charAt(0) == "-") {
                _0x3d1c8e = "-" + _0x3d1c8e;
                _0x5cefa1 = _0x5cefa1.substr(1);
              }
              while (_0x3d1c8e.length + _0x5cefa1.length < _0x543027) {
                if (_0x27b772) {
                  _0x5cefa1 += " ";
                } else if (_0x4413fc) {
                  _0x5cefa1 = "0" + _0x5cefa1;
                } else {
                  _0x3d1c8e = " " + _0x3d1c8e;
                }
              }
              _0x5cefa1 = _0x3d1c8e + _0x5cefa1;
              _0x5cefa1.split("").forEach(function (_0x16877d) {
                _0x16c24b.push(_0x16877d.charCodeAt(0));
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
              _0x399c8a = _0x2210df("double");
              var _0x5cefa1;
              if (isNaN(_0x399c8a)) {
                _0x5cefa1 = "nan";
                _0x4413fc = false;
              } else if (!isFinite(_0x399c8a)) {
                _0x5cefa1 = (_0x399c8a < 0 ? "-" : "") + "inf";
                _0x4413fc = false;
              } else {
                var _0x9da843 = false;
                var _0x5794e8 = Math.min(_0xf38314, 20);
                if (_0x10bedd == 103 || _0x10bedd == 71) {
                  _0x9da843 = true;
                  _0xf38314 = _0xf38314 || 1;
                  var _0x4a6d90 = parseInt(_0x399c8a.toExponential(_0x5794e8).split("e")[1], 10);
                  if (_0xf38314 > _0x4a6d90 && _0x4a6d90 >= -4) {
                    _0x10bedd = (_0x10bedd == 103 ? "f" : "F").charCodeAt(0);
                    _0xf38314 -= _0x4a6d90 + 1;
                  } else {
                    _0x10bedd = (_0x10bedd == 103 ? "e" : "E").charCodeAt(0);
                    _0xf38314--;
                  }
                  _0x5794e8 = Math.min(_0xf38314, 20);
                }
                if (_0x10bedd == 101 || _0x10bedd == 69) {
                  _0x5cefa1 = _0x399c8a.toExponential(_0x5794e8);
                  if (/[eE][-+]\d$/.test(_0x5cefa1)) {
                    _0x5cefa1 = _0x5cefa1.slice(0, -1) + "0" + _0x5cefa1.slice(-1);
                  }
                } else if (_0x10bedd == 102 || _0x10bedd == 70) {
                  _0x5cefa1 = _0x399c8a.toFixed(_0x5794e8);
                  if (_0x399c8a === 0 && _0xf397c(_0x399c8a)) {
                    _0x5cefa1 = "-" + _0x5cefa1;
                  }
                }
                var _0x838209 = _0x5cefa1.split("e");
                if (_0x9da843 && !_0x1992a6) {
                  while (_0x838209[0].length > 1 && _0x838209[0].includes(".") && (_0x838209[0].slice(-1) == "0" || _0x838209[0].slice(-1) == ".")) {
                    _0x838209[0] = _0x838209[0].slice(0, -1);
                  }
                } else {
                  if (_0x1992a6 && _0x5cefa1.indexOf(".") == -1) {
                    _0x838209[0] += ".";
                  }
                  while (_0xf38314 > _0x5794e8++) {
                    _0x838209[0] += "0";
                  }
                }
                _0x5cefa1 = _0x838209[0] + (_0x838209.length > 1 ? "e" + _0x838209[1] : "");
                if (_0x10bedd == 69) {
                  _0x5cefa1 = _0x5cefa1.toUpperCase();
                }
                if (_0x399c8a >= 0) {
                  if (_0xe47e6d) {
                    _0x5cefa1 = "+" + _0x5cefa1;
                  } else if (_0x5df4c9) {
                    _0x5cefa1 = " " + _0x5cefa1;
                  }
                }
              }
              while (_0x5cefa1.length < _0x543027) {
                if (_0x27b772) {
                  _0x5cefa1 += " ";
                } else if (_0x4413fc && (_0x5cefa1[0] == "-" || _0x5cefa1[0] == "+")) {
                  _0x5cefa1 = _0x5cefa1[0] + "0" + _0x5cefa1.slice(1);
                } else {
                  _0x5cefa1 = (_0x4413fc ? "0" : " ") + _0x5cefa1;
                }
              }
              if (_0x10bedd < 97) {
                _0x5cefa1 = _0x5cefa1.toUpperCase();
              }
              _0x5cefa1.split("").forEach(function (_0x41aa6b) {
                _0x16c24b.push(_0x41aa6b.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0x20f425 = _0x2210df("i8*");
              var _0x5a8559 = _0x20f425 ? _0xb0036b(_0x20f425) : "(null)".length;
              if (_0x4ce1af) {
                _0x5a8559 = Math.min(_0x5a8559, _0xf38314);
              }
              if (!_0x27b772) {
                while (_0x5a8559 < _0x543027--) {
                  _0x16c24b.push(32);
                }
              }
              if (_0x20f425) {
                for (var _0x430b13 = 0; _0x430b13 < _0x5a8559; _0x430b13++) {
                  _0x16c24b.push(_0x42b281[_0x20f425++ >> 0]);
                }
              } else {
                _0x16c24b = _0x16c24b.concat(_0x710a1f("(null)".substr(0, _0x5a8559), true));
              }
              if (_0x27b772) {
                while (_0x5a8559 < _0x543027--) {
                  _0x16c24b.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x27b772) {
                _0x16c24b.push(_0x2210df("i8"));
              }
              while (--_0x543027 > 0) {
                _0x16c24b.push(32);
              }
              if (!_0x27b772) {
                _0x16c24b.push(_0x2210df("i8"));
              }
              break;
            }
          case "n":
            {
              var _0x502a82 = _0x2210df("i32*");
              _0x2c6e39[_0x502a82 >> 2] = _0x16c24b.length;
              break;
            }
          case "%":
            {
              _0x16c24b.push(_0x5716a0);
              break;
            }
          default:
            {
              for (var _0x430b13 = _0x576bf7; _0x430b13 < _0xc3164f + 2; _0x430b13++) {
                _0x16c24b.push(_0x51d7cf[_0x430b13 >> 0]);
              }
            }
        }
        _0xc3164f += 2;
      } else {
        _0x16c24b.push(_0x5716a0);
        _0xc3164f += 1;
      }
    }
    return _0x16c24b;
  }
  function _0x3dd1d4(_0x33ffb0) {
    if (!_0x33ffb0 || !_0x33ffb0.callee || !_0x33ffb0.callee.name) {
      return [null, "", ""];
    }
    var _0x19e5f = _0x33ffb0.callee.toString();
    var _0x1cb9b3 = _0x33ffb0.callee.name;
    var _0x509b51 = "(";
    var _0x30bf46 = true;
    for (var _0x78b3d1 in _0x33ffb0) {
      var _0x1b9299 = _0x33ffb0[_0x78b3d1];
      if (!_0x30bf46) {
        _0x509b51 += ", ";
      }
      _0x30bf46 = false;
      if (typeof _0x1b9299 === "number" || typeof _0x1b9299 === "string") {
        _0x509b51 += _0x1b9299;
      } else {
        _0x509b51 += "(" + typeof _0x1b9299 + ")";
      }
    }
    _0x509b51 += ")";
    var _0x470a1d = _0x33ffb0.callee.caller;
    _0x33ffb0 = _0x470a1d ? _0x470a1d.arguments : [];
    if (_0x30bf46) {
      _0x509b51 = "";
    }
    return [_0x33ffb0, _0x1cb9b3, _0x509b51];
  }
  function _0x98327(_0x33435c) {
    var _0x39b5e0 = _0x48b8a1();
    var _0x4ffb3b = _0x39b5e0.lastIndexOf("_emscripten_log");
    var _0x4cb7a2 = _0x39b5e0.lastIndexOf("_emscripten_get_callstack");
    var _0x252b78 = _0x39b5e0.indexOf("\n", Math.max(_0x4ffb3b, _0x4cb7a2)) + 1;
    _0x39b5e0 = _0x39b5e0.slice(_0x252b78);
    if (_0x33435c & 32) {
      _0x728a21("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x33435c & 8 && typeof emscripten_source_map === "undefined") {
      _0x728a21("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x33435c ^= 8;
      _0x33435c |= 16;
    }
    var _0x29e3e7 = null;
    if (_0x33435c & 128) {
      _0x29e3e7 = _0x3dd1d4(arguments);
      while (_0x29e3e7[1].includes("_emscripten_")) {
        _0x29e3e7 = _0x3dd1d4(_0x29e3e7[0]);
      }
    }
    var _0x37605c = _0x39b5e0.split("\n");
    _0x39b5e0 = "";
    var _0x55f2ce = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0x5f576c = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0x3a444e = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x529e90 in _0x37605c) {
      var _0x19621b = _0x37605c[_0x529e90];
      var _0x549524 = "";
      var _0xaaab53 = "";
      var _0x59ec77 = 0;
      var _0x594db7 = 0;
      var _0x4bf07d = _0x3a444e.exec(_0x19621b);
      if (_0x4bf07d && _0x4bf07d.length == 5) {
        _0x549524 = _0x4bf07d[1];
        _0xaaab53 = _0x4bf07d[2];
        _0x59ec77 = _0x4bf07d[3];
        _0x594db7 = _0x4bf07d[4];
      } else {
        _0x4bf07d = _0x55f2ce.exec(_0x19621b);
        if (!_0x4bf07d) {
          _0x4bf07d = _0x5f576c.exec(_0x19621b);
        }
        if (_0x4bf07d && _0x4bf07d.length >= 4) {
          _0x549524 = _0x4bf07d[1];
          _0xaaab53 = _0x4bf07d[2];
          _0x59ec77 = _0x4bf07d[3];
          _0x594db7 = _0x4bf07d[4] | 0;
        } else {
          _0x39b5e0 += _0x19621b + "\n";
          continue;
        }
      }
      var _0x5b00be = false;
      if (_0x33435c & 8) {
        var _0x40d87a = emscripten_source_map.originalPositionFor({
          line: _0x59ec77,
          column: _0x594db7
        });
        _0x5b00be = _0x40d87a && _0x40d87a.source;
        if (_0x5b00be) {
          if (_0x33435c & 64) {
            _0x40d87a.source = _0x40d87a.source.substring(_0x40d87a.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x39b5e0 += "    at " + _0x549524 + " (" + _0x40d87a.source + ":" + _0x40d87a.line + ":" + _0x40d87a.column + ")\n";
        }
      }
      if (_0x33435c & 16 || !_0x5b00be) {
        if (_0x33435c & 64) {
          _0xaaab53 = _0xaaab53.substring(_0xaaab53.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x39b5e0 += (_0x5b00be ? "     = " + _0x549524 : "    at " + _0x549524) + " (" + _0xaaab53 + ":" + _0x59ec77 + ":" + _0x594db7 + ")\n";
      }
      if (_0x33435c & 128 && _0x29e3e7[0]) {
        if (_0x29e3e7[1] == _0x549524 && _0x29e3e7[2].length > 0) {
          _0x39b5e0 = _0x39b5e0.replace(/\s+$/, "");
          _0x39b5e0 += " with values: " + _0x29e3e7[1] + _0x29e3e7[2] + "\n";
        }
        _0x29e3e7 = _0x3dd1d4(_0x29e3e7[0]);
      }
    }
    _0x39b5e0 = _0x39b5e0.replace(/\s+$/, "");
    return _0x39b5e0;
  }
  function _0x55d2fd(_0x1c41f6, _0x462b48) {
    if (_0x1c41f6 & 24) {
      _0x462b48 = _0x462b48.replace(/\s+$/, "");
      _0x462b48 += (_0x462b48.length > 0 ? "\n" : "") + _0x98327(_0x1c41f6);
    }
    if (_0x1c41f6 & 1) {
      if (_0x1c41f6 & 4) {
        console.error(_0x462b48);
      } else if (_0x1c41f6 & 2) {
        console.warn(_0x462b48);
      } else if (_0x1c41f6 & 512) {
        console.info(_0x462b48);
      } else if (_0x1c41f6 & 256) {
        console.debug(_0x462b48);
      } else {
        console.log(_0x462b48);
      }
    } else if (_0x1c41f6 & 6) {
      _0x5c756b(_0x462b48);
    } else {
      _0x576054(_0x462b48);
    }
  }
  function _0x3b5936(_0x2c5381, _0x26f8d6, _0x76a5ed) {
    var _0xcbe06d = _0x4bef8a(_0x26f8d6, _0x76a5ed);
    var _0x3df1fa = _0x3f816a(_0xcbe06d, 0);
    _0x55d2fd(_0x2c5381, _0x3df1fa);
  }
  function _0x4f2e45(_0x123026, _0x23464b) {
    _0x22893a(_0x123026, _0x23464b || 1);
    throw "longjmp";
  }
  function _0x3cf8b2(_0x21b1e7, _0x73c651) {
    return _0x4f2e45(_0x21b1e7, _0x73c651);
  }
  function _0x72d1e0(_0x1032c2, _0x21870b, _0xa099f1) {
    _0x42b281.copyWithin(_0x1032c2, _0x21870b, _0x21870b + _0xa099f1);
  }
  function _0x2b3b18(_0x211205, _0x1a19df) {
    if (!_0x2b5eda.fullscreenEnabled()) {
      return -1;
    }
    _0x211205 = _0x31e863(_0x211205);
    if (!_0x211205) {
      return -4;
    }
    if (!_0x211205.requestFullscreen && !_0x211205.webkitRequestFullscreen) {
      return -3;
    }
    var _0x2779a2 = _0x2b5eda.canPerformEventHandlerRequests();
    if (!_0x2779a2) {
      if (_0x1a19df.deferUntilInEventHandler) {
        _0x2b5eda.deferCall(_0x57bdf2, 1, [_0x211205, _0x1a19df]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x57bdf2(_0x211205, _0x1a19df);
  }
  function _0x4febf9(_0x4310e5, _0x5810d7) {
    var _0x6197ed = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0x5810d7,
      canvasResizedCallbackTargetThread: 2
    };
    return _0x2b3b18(_0x4310e5, _0x6197ed);
  }
  function _0x25cef2(_0x34b2af, _0x2e1f2b) {
    _0x34b2af = _0x31e863(_0x34b2af);
    if (!_0x34b2af) {
      return -4;
    }
    if (!_0x34b2af.requestPointerLock && !_0x34b2af.msRequestPointerLock) {
      return -1;
    }
    var _0x234136 = _0x2b5eda.canPerformEventHandlerRequests();
    if (!_0x234136) {
      if (_0x2e1f2b) {
        _0x2b5eda.deferCall(_0x16eaf9, 2, [_0x34b2af]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x16eaf9(_0x34b2af);
  }
  function _0x3a89bf(_0xfbbd3e) {
    try {
      _0x36963e.grow(_0xfbbd3e - _0x2b1026.byteLength + 65535 >>> 16);
      _0x40e298(_0x36963e.buffer);
      return 1;
    } catch (_0x5e8129) {}
  }
  function _0x52ec1c(_0x2d2601) {
    var _0x492f05 = _0x42b281.length;
    _0x2d2601 = _0x2d2601 >>> 0;
    var _0x55f2d9 = 2147483648;
    if (_0x2d2601 > _0x55f2d9) {
      return false;
    }
    for (var _0x3db04f = 1; _0x3db04f <= 4; _0x3db04f *= 2) {
      var _0x19bd50 = _0x492f05 * (1 + 0.2 / _0x3db04f);
      _0x19bd50 = Math.min(_0x19bd50, _0x2d2601 + 100663296);
      var _0x48448d = Math.min(_0x55f2d9, _0x7113ce(Math.max(_0x2d2601, _0x19bd50), 65536));
      var _0x21c369 = _0x3a89bf(_0x48448d);
      if (_0x21c369) {
        return true;
      }
    }
    return false;
  }
  function _0x4ce4cf() {
    try {
      if (navigator.getGamepads) {
        if (_0x2b5eda.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0x4b6541) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0x1d03ce(_0x113539, _0xa64997, _0x1ede87, _0x1b6385, _0x5b069b, _0x587b60, _0x2f195f) {
    if (!_0x2b5eda.focusEvent) {
      _0x2b5eda.focusEvent = _0x48c1ae(256);
    }
    function _0x207365(_0x530146) {
      var _0x26ffdd = _0x530146 || event;
      var _0x24b54b = _0x2b5eda.getNodeNameForTarget(_0x26ffdd.target);
      var _0x13f951 = _0x26ffdd.target.id ? _0x26ffdd.target.id : "";
      var _0x51ab15 = _0x2b5eda.focusEvent;
      _0x3c7021(_0x24b54b, _0x51ab15 + 0, 128);
      _0x3c7021(_0x13f951, _0x51ab15 + 128, 128);
      if (function (_0x16bb16, _0x336c8a, _0xedf4d0) {
        return _0x2c342c.apply(null, [_0x1b6385, _0x16bb16, _0x336c8a, _0xedf4d0]);
      }(_0x5b069b, _0x51ab15, _0xa64997)) {
        _0x26ffdd.preventDefault();
      }
    }
    var _0x4243a6 = {
      target: _0x31e863(_0x113539),
      eventTypeString: _0x587b60,
      callbackfunc: _0x1b6385,
      handlerFunc: _0x207365,
      useCapture: _0x1ede87
    };
    _0x2b5eda.registerOrRemoveHandler(_0x4243a6);
  }
  function _0x201e23(_0xebcd4e, _0x7ea749, _0x5effbe, _0x37d69d, _0x14a2c4) {
    _0x1d03ce(_0xebcd4e, _0x7ea749, _0x5effbe, _0x37d69d, 12, "blur", _0x14a2c4);
    return 0;
  }
  function _0x1ce95e(_0x28f7cd, _0x3c3005, _0x1d51c5, _0x5ea95f, _0x1d61c4) {
    _0x1d03ce(_0x28f7cd, _0x3c3005, _0x1d51c5, _0x5ea95f, 13, "focus", _0x1d61c4);
    return 0;
  }
  function _0x957762(_0x8b4250, _0x183f9c, _0x9d713c, _0x485f92, _0x4580bf, _0x3aa89b, _0x312dea) {
    if (!_0x2b5eda.fullscreenChangeEvent) {
      _0x2b5eda.fullscreenChangeEvent = _0x48c1ae(280);
    }
    function _0x4341dc(_0x442327) {
      var _0x25529e = _0x442327 || event;
      var _0x3c10a3 = _0x2b5eda.fullscreenChangeEvent;
      _0x53896c(_0x3c10a3);
      if (function (_0x2fb69d, _0x102c10, _0x1a41b1) {
        return _0x2c342c.apply(null, [_0x485f92, _0x2fb69d, _0x102c10, _0x1a41b1]);
      }(_0x4580bf, _0x3c10a3, _0x183f9c)) {
        _0x25529e.preventDefault();
      }
    }
    var _0x57ff90 = {
      target: _0x8b4250,
      eventTypeString: _0x3aa89b,
      callbackfunc: _0x485f92,
      handlerFunc: _0x4341dc,
      useCapture: _0x9d713c
    };
    _0x2b5eda.registerOrRemoveHandler(_0x57ff90);
  }
  function _0x3106f6(_0x4aa983, _0x3bea31, _0x4da026, _0x2b0bef, _0x2237ca) {
    if (!_0x2b5eda.fullscreenEnabled()) {
      return -1;
    }
    _0x4aa983 = _0x31e863(_0x4aa983);
    if (!_0x4aa983) {
      return -4;
    }
    _0x957762(_0x4aa983, _0x3bea31, _0x4da026, _0x2b0bef, 19, "fullscreenchange", _0x2237ca);
    _0x957762(_0x4aa983, _0x3bea31, _0x4da026, _0x2b0bef, 19, "webkitfullscreenchange", _0x2237ca);
    return 0;
  }
  function _0x26317a(_0x7b2886, _0x2957aa, _0x3030b1, _0x5b94a0, _0x51416b, _0x196eae, _0x2b4462) {
    if (!_0x2b5eda.gamepadEvent) {
      _0x2b5eda.gamepadEvent = _0x48c1ae(1432);
    }
    function _0x27c4b9(_0x3fbad9) {
      var _0x28703f = _0x3fbad9 || event;
      var _0x5ce2bd = _0x2b5eda.gamepadEvent;
      _0x34f7f8(_0x5ce2bd, _0x28703f.gamepad);
      if (function (_0x5089e4, _0x51777d, _0x474e4f) {
        return _0x2c342c.apply(null, [_0x5b94a0, _0x5089e4, _0x51777d, _0x474e4f]);
      }(_0x51416b, _0x5ce2bd, _0x2957aa)) {
        _0x28703f.preventDefault();
      }
    }
    var _0x3693eb = {
      target: _0x31e863(_0x7b2886),
      allowsDeferredCalls: true,
      eventTypeString: _0x196eae,
      callbackfunc: _0x5b94a0,
      handlerFunc: _0x27c4b9,
      useCapture: _0x3030b1
    };
    _0x2b5eda.registerOrRemoveHandler(_0x3693eb);
  }
  function _0x2bbfd0(_0x355054, _0x38bb4d, _0x52bfb9, _0x2184a8) {
    if (_0x4ce4cf()) {
      return -1;
    }
    return _0x26317a(2, _0x355054, _0x38bb4d, _0x52bfb9, 26, "gamepadconnected", _0x2184a8);
  }
  function _0x5bfc2b(_0x7a8b15, _0xa8d352, _0x4111ba, _0x576ab8) {
    if (_0x4ce4cf()) {
      return -1;
    }
    return _0x26317a(2, _0x7a8b15, _0xa8d352, _0x4111ba, 27, "gamepaddisconnected", _0x576ab8);
  }
  function _0x521076(_0x29717b, _0x1239f4, _0x23caa7) {
    return setInterval(function () {
      (function (_0x3fd016) {
        _0xa9e541.apply(null, [_0x29717b, _0x3fd016]);
      })(_0x23caa7);
    }, _0x1239f4);
  }
  function _0xeef6f6(_0x31303f, _0x55aa0a, _0x7c8df8, _0xa23ee7, _0x366507, _0x35954d, _0x15a875) {
    if (!_0x2b5eda.keyEvent) {
      _0x2b5eda.keyEvent = _0x48c1ae(164);
    }
    function _0x29a07e(_0x227123) {
      var _0x155ea3 = _0x2b5eda.keyEvent;
      var _0xd1e453 = _0x155ea3 >> 2;
      _0x2c6e39[_0xd1e453 + 0] = _0x227123.location;
      _0x2c6e39[_0xd1e453 + 1] = _0x227123.ctrlKey;
      _0x2c6e39[_0xd1e453 + 2] = _0x227123.shiftKey;
      _0x2c6e39[_0xd1e453 + 3] = _0x227123.altKey;
      _0x2c6e39[_0xd1e453 + 4] = _0x227123.metaKey;
      _0x2c6e39[_0xd1e453 + 5] = _0x227123.repeat;
      _0x2c6e39[_0xd1e453 + 6] = _0x227123.charCode;
      _0x2c6e39[_0xd1e453 + 7] = _0x227123.keyCode;
      _0x2c6e39[_0xd1e453 + 8] = _0x227123.which;
      _0x3c7021(_0x227123.key || "", _0x155ea3 + 36, 32);
      _0x3c7021(_0x227123.code || "", _0x155ea3 + 68, 32);
      _0x3c7021(_0x227123.char || "", _0x155ea3 + 100, 32);
      _0x3c7021(_0x227123.locale || "", _0x155ea3 + 132, 32);
      if (function (_0xe54482, _0xf13757, _0x360518) {
        return _0x2c342c.apply(null, [_0xa23ee7, _0xe54482, _0xf13757, _0x360518]);
      }(_0x366507, _0x155ea3, _0x55aa0a)) {
        _0x227123.preventDefault();
      }
    }
    var _0x348d4e = {
      target: _0x31e863(_0x31303f),
      allowsDeferredCalls: true,
      eventTypeString: _0x35954d,
      callbackfunc: _0xa23ee7,
      handlerFunc: _0x29a07e,
      useCapture: _0x7c8df8
    };
    _0x2b5eda.registerOrRemoveHandler(_0x348d4e);
  }
  function _0x5804b0(_0x483f45, _0x18e5a8, _0x1f8e9c, _0x2c58dc, _0x3672c6) {
    _0xeef6f6(_0x483f45, _0x18e5a8, _0x1f8e9c, _0x2c58dc, 2, "keydown", _0x3672c6);
    return 0;
  }
  function _0x39dbe5(_0x132b22, _0x54611e, _0x4fc7a2, _0x3eac4c, _0x20c0cd) {
    _0xeef6f6(_0x132b22, _0x54611e, _0x4fc7a2, _0x3eac4c, 1, "keypress", _0x20c0cd);
    return 0;
  }
  function _0x4d6235(_0x183a99, _0x5d0efa, _0x56adfc, _0x525a42, _0x35a554) {
    _0xeef6f6(_0x183a99, _0x5d0efa, _0x56adfc, _0x525a42, 3, "keyup", _0x35a554);
    return 0;
  }
  function _0x24c257(_0x4a8708, _0x28f2b2, _0x235479) {
    function _0x21e7fb() {
      _0x41ec79.call(null, _0x4a8708);
    }
    _0x2c7f7c(_0x21e7fb, _0x28f2b2, _0x235479);
  }
  function _0x1cb550(_0x489c5a, _0x597b6d, _0x56d526) {
    var _0x581733 = _0x489c5a >> 2;
    _0x2c6e39[_0x581733 + 0] = _0x597b6d.screenX;
    _0x2c6e39[_0x581733 + 1] = _0x597b6d.screenY;
    _0x2c6e39[_0x581733 + 2] = _0x597b6d.clientX;
    _0x2c6e39[_0x581733 + 3] = _0x597b6d.clientY;
    _0x2c6e39[_0x581733 + 4] = _0x597b6d.ctrlKey;
    _0x2c6e39[_0x581733 + 5] = _0x597b6d.shiftKey;
    _0x2c6e39[_0x581733 + 6] = _0x597b6d.altKey;
    _0x2c6e39[_0x581733 + 7] = _0x597b6d.metaKey;
    _0x2f4991[_0x581733 * 2 + 16] = _0x597b6d.button;
    _0x2f4991[_0x581733 * 2 + 17] = _0x597b6d.buttons;
    _0x2c6e39[_0x581733 + 9] = _0x597b6d.movementX;
    _0x2c6e39[_0x581733 + 10] = _0x597b6d.movementY;
    var _0x56f782 = _0x4f9a23(_0x56d526);
    _0x2c6e39[_0x581733 + 11] = _0x597b6d.clientX - _0x56f782.left;
    _0x2c6e39[_0x581733 + 12] = _0x597b6d.clientY - _0x56f782.top;
  }
  function _0x111acf(_0x2e0d62, _0x5b185c, _0x5bb7e5, _0x56b7ef, _0x5e28c3, _0x4747a9, _0x20cef1) {
    if (!_0x2b5eda.mouseEvent) {
      _0x2b5eda.mouseEvent = _0x48c1ae(64);
    }
    _0x2e0d62 = _0x31e863(_0x2e0d62);
    function _0x2f2b2a(_0x3555e4) {
      var _0x290154 = _0x3555e4 || event;
      _0x1cb550(_0x2b5eda.mouseEvent, _0x290154, _0x2e0d62);
      if (function (_0xfcfa94, _0x46384b, _0x681e53) {
        return _0x2c342c.apply(null, [_0x56b7ef, _0xfcfa94, _0x46384b, _0x681e53]);
      }(_0x5e28c3, _0x2b5eda.mouseEvent, _0x5b185c)) {
        _0x290154.preventDefault();
      }
    }
    var _0x25ff37 = {
      target: _0x2e0d62,
      allowsDeferredCalls: _0x4747a9 != "mousemove" && _0x4747a9 != "mouseenter" && _0x4747a9 != "mouseleave",
      eventTypeString: _0x4747a9,
      callbackfunc: _0x56b7ef,
      handlerFunc: _0x2f2b2a,
      useCapture: _0x5bb7e5
    };
    _0x2b5eda.registerOrRemoveHandler(_0x25ff37);
  }
  function _0x3e2181(_0x4aa7e0, _0xb9df82, _0x474cac, _0x3fe410, _0x56552f) {
    _0x111acf(_0x4aa7e0, _0xb9df82, _0x474cac, _0x3fe410, 5, "mousedown", _0x56552f);
    return 0;
  }
  function _0x2641de(_0xc76a15, _0x572234, _0x60bdd6, _0x5dcd53, _0x1251fb) {
    _0x111acf(_0xc76a15, _0x572234, _0x60bdd6, _0x5dcd53, 8, "mousemove", _0x1251fb);
    return 0;
  }
  function _0x171ef8(_0x3d1964, _0x55c8da, _0x5da531, _0x5a21c1, _0x3b4c75) {
    _0x111acf(_0x3d1964, _0x55c8da, _0x5da531, _0x5a21c1, 6, "mouseup", _0x3b4c75);
    return 0;
  }
  function _0x474304(_0x59eb38) {
    var _0x310fd9 = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x266538 = !!_0x310fd9;
    _0x2c6e39[_0x59eb38 >> 2] = _0x266538;
    var _0x2de686 = _0x2b5eda.getNodeNameForTarget(_0x310fd9);
    var _0x2d29bf = _0x310fd9 && _0x310fd9.id ? _0x310fd9.id : "";
    _0x3c7021(_0x2de686, _0x59eb38 + 4, 128);
    _0x3c7021(_0x2d29bf, _0x59eb38 + 132, 128);
  }
  function _0x3f86e8(_0x180c11, _0x3f45df, _0x4c8a6b, _0x49c53b, _0x46b1fb, _0x274ef6, _0x3ea187) {
    if (!_0x2b5eda.pointerlockChangeEvent) {
      _0x2b5eda.pointerlockChangeEvent = _0x48c1ae(260);
    }
    function _0xfe07aa(_0x282682) {
      var _0x580f32 = _0x282682 || event;
      var _0x5af4b2 = _0x2b5eda.pointerlockChangeEvent;
      _0x474304(_0x5af4b2);
      if (function (_0x1fe392, _0x55b1ad, _0x5c9bab) {
        return _0x2c342c.apply(null, [_0x49c53b, _0x1fe392, _0x55b1ad, _0x5c9bab]);
      }(_0x46b1fb, _0x5af4b2, _0x3f45df)) {
        _0x580f32.preventDefault();
      }
    }
    var _0x2b2f92 = {
      target: _0x180c11,
      eventTypeString: _0x274ef6,
      callbackfunc: _0x49c53b,
      handlerFunc: _0xfe07aa,
      useCapture: _0x4c8a6b
    };
    _0x2b5eda.registerOrRemoveHandler(_0x2b2f92);
  }
  function _0x5640ff(_0x4bb23d, _0x1b15d6, _0x49f3de, _0x25abbb, _0x3ac75a) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0x4bb23d = _0x31e863(_0x4bb23d);
    if (!_0x4bb23d) {
      return -4;
    }
    _0x3f86e8(_0x4bb23d, _0x1b15d6, _0x49f3de, _0x25abbb, 20, "pointerlockchange", _0x3ac75a);
    _0x3f86e8(_0x4bb23d, _0x1b15d6, _0x49f3de, _0x25abbb, 20, "mozpointerlockchange", _0x3ac75a);
    _0x3f86e8(_0x4bb23d, _0x1b15d6, _0x49f3de, _0x25abbb, 20, "webkitpointerlockchange", _0x3ac75a);
    _0x3f86e8(_0x4bb23d, _0x1b15d6, _0x49f3de, _0x25abbb, 20, "mspointerlockchange", _0x3ac75a);
    return 0;
  }
  function _0x51a489(_0x4c1eaf, _0x50247c, _0x18b832, _0x29db99, _0x16dfca, _0x307a9a, _0x14aa71) {
    if (!_0x2b5eda.touchEvent) {
      _0x2b5eda.touchEvent = _0x48c1ae(1684);
    }
    _0x4c1eaf = _0x31e863(_0x4c1eaf);
    function _0x2483ad(_0x10ed34) {
      var _0x11ccce;
      var _0x1f4bec = {};
      var _0x1dae79 = _0x10ed34.touches;
      for (var _0x5c6a3f = 0; _0x5c6a3f < _0x1dae79.length; ++_0x5c6a3f) {
        _0x11ccce = _0x1dae79[_0x5c6a3f];
        _0x11ccce.isChanged = _0x11ccce.onTarget = 0;
        _0x1f4bec[_0x11ccce.identifier] = _0x11ccce;
      }
      for (var _0x5c6a3f = 0; _0x5c6a3f < _0x10ed34.changedTouches.length; ++_0x5c6a3f) {
        _0x11ccce = _0x10ed34.changedTouches[_0x5c6a3f];
        _0x11ccce.isChanged = 1;
        _0x1f4bec[_0x11ccce.identifier] = _0x11ccce;
      }
      for (var _0x5c6a3f = 0; _0x5c6a3f < _0x10ed34.targetTouches.length; ++_0x5c6a3f) {
        _0x1f4bec[_0x10ed34.targetTouches[_0x5c6a3f].identifier].onTarget = 1;
      }
      var _0x4e7d6d = _0x2b5eda.touchEvent;
      var _0x278b00 = _0x4e7d6d >> 2;
      _0x2c6e39[_0x278b00 + 1] = _0x10ed34.ctrlKey;
      _0x2c6e39[_0x278b00 + 2] = _0x10ed34.shiftKey;
      _0x2c6e39[_0x278b00 + 3] = _0x10ed34.altKey;
      _0x2c6e39[_0x278b00 + 4] = _0x10ed34.metaKey;
      _0x278b00 += 5;
      var _0x31c331 = _0x4f9a23(_0x4c1eaf);
      var _0x38bb88 = 0;
      for (var _0x5c6a3f in _0x1f4bec) {
        var _0x11ccce = _0x1f4bec[_0x5c6a3f];
        _0x2c6e39[_0x278b00 + 0] = _0x11ccce.identifier;
        _0x2c6e39[_0x278b00 + 1] = _0x11ccce.screenX;
        _0x2c6e39[_0x278b00 + 2] = _0x11ccce.screenY;
        _0x2c6e39[_0x278b00 + 3] = _0x11ccce.clientX;
        _0x2c6e39[_0x278b00 + 4] = _0x11ccce.clientY;
        _0x2c6e39[_0x278b00 + 5] = _0x11ccce.pageX;
        _0x2c6e39[_0x278b00 + 6] = _0x11ccce.pageY;
        _0x2c6e39[_0x278b00 + 7] = _0x11ccce.isChanged;
        _0x2c6e39[_0x278b00 + 8] = _0x11ccce.onTarget;
        _0x2c6e39[_0x278b00 + 9] = _0x11ccce.clientX - _0x31c331.left;
        _0x2c6e39[_0x278b00 + 10] = _0x11ccce.clientY - _0x31c331.top;
        _0x278b00 += 13;
        if (++_0x38bb88 > 31) {
          break;
        }
      }
      _0x2c6e39[_0x4e7d6d >> 2] = _0x38bb88;
      if (function (_0x2a8c2f, _0x179687, _0x3d1f21) {
        return _0x2c342c.apply(null, [_0x29db99, _0x2a8c2f, _0x179687, _0x3d1f21]);
      }(_0x16dfca, _0x4e7d6d, _0x50247c)) {
        _0x10ed34.preventDefault();
      }
    }
    var _0x382380 = {
      target: _0x4c1eaf,
      allowsDeferredCalls: _0x307a9a == "touchstart" || _0x307a9a == "touchend",
      eventTypeString: _0x307a9a,
      callbackfunc: _0x29db99,
      handlerFunc: _0x2483ad,
      useCapture: _0x18b832
    };
    _0x2b5eda.registerOrRemoveHandler(_0x382380);
  }
  function _0x2d3697(_0x514094, _0x3b7cc8, _0x4e0b03, _0x1e2149, _0x323fa4) {
    _0x51a489(_0x514094, _0x3b7cc8, _0x4e0b03, _0x1e2149, 25, "touchcancel", _0x323fa4);
    return 0;
  }
  function _0x3d5a61(_0x2b1e14, _0x5ddf00, _0x3f6410, _0x2625ad, _0x2f5ccd) {
    _0x51a489(_0x2b1e14, _0x5ddf00, _0x3f6410, _0x2625ad, 23, "touchend", _0x2f5ccd);
    return 0;
  }
  function _0x407cf7(_0xc24bd2, _0x1c2b40, _0x3d73c5, _0x2bff1c, _0x4e8e6e) {
    _0x51a489(_0xc24bd2, _0x1c2b40, _0x3d73c5, _0x2bff1c, 24, "touchmove", _0x4e8e6e);
    return 0;
  }
  function _0x7fa3ee(_0x11a14f, _0xdd0626, _0x138ae5, _0x40926d, _0x1f2a68) {
    _0x51a489(_0x11a14f, _0xdd0626, _0x138ae5, _0x40926d, 22, "touchstart", _0x1f2a68);
    return 0;
  }
  function _0x51422b(_0x5c87b2, _0x4d632f, _0x4aab67, _0x42b46b, _0x8aa5a9, _0x1ee11f, _0x554841) {
    if (!_0x2b5eda.wheelEvent) {
      _0x2b5eda.wheelEvent = _0x48c1ae(96);
    }
    function _0x2f3ad8(_0x83a9b4) {
      var _0x4ac40a = _0x83a9b4 || event;
      var _0x5db03e = _0x2b5eda.wheelEvent;
      _0x1cb550(_0x5db03e, _0x4ac40a, _0x5c87b2);
      _0x2862c3[_0x5db03e + 64 >> 3] = _0x4ac40a.deltaX;
      _0x2862c3[_0x5db03e + 72 >> 3] = _0x4ac40a.deltaY;
      _0x2862c3[_0x5db03e + 80 >> 3] = _0x4ac40a.deltaZ;
      _0x2c6e39[_0x5db03e + 88 >> 2] = _0x4ac40a.deltaMode;
      if (function (_0x2d5c3f, _0x412423, _0x261171) {
        return _0x2c342c.apply(null, [_0x42b46b, _0x2d5c3f, _0x412423, _0x261171]);
      }(_0x8aa5a9, _0x5db03e, _0x4d632f)) {
        _0x4ac40a.preventDefault();
      }
    }
    var _0xdd7b96 = {
      target: _0x5c87b2,
      allowsDeferredCalls: true,
      eventTypeString: _0x1ee11f,
      callbackfunc: _0x42b46b,
      handlerFunc: _0x2f3ad8,
      useCapture: _0x4aab67
    };
    _0x2b5eda.registerOrRemoveHandler(_0xdd7b96);
  }
  function _0x211f70(_0x48d098, _0x72930d, _0x77f732, _0x1b8eaa, _0x4f3ef4) {
    _0x48d098 = _0x31e863(_0x48d098);
    if (typeof _0x48d098.onwheel !== "undefined") {
      _0x51422b(_0x48d098, _0x72930d, _0x77f732, _0x1b8eaa, 9, "wheel", _0x4f3ef4);
      return 0;
    } else {
      return -1;
    }
  }
  function _0x26e9c7(_0x100521) {
    var _0x25c2d1 = _0x4b4cca();
    while (_0x4b4cca() - _0x25c2d1 < _0x100521) {}
  }
  function _0x4109c5(_0x349a52) {
    var _0x50e3d6 = _0x349a52.getExtension("ANGLE_instanced_arrays");
    if (_0x50e3d6) {
      _0x349a52.vertexAttribDivisor = function (_0x5aaa6d, _0x377db5) {
        _0x50e3d6.vertexAttribDivisorANGLE(_0x5aaa6d, _0x377db5);
      };
      _0x349a52.drawArraysInstanced = function (_0x112232, _0x366378, _0x2e6043, _0x1d717b) {
        _0x50e3d6.drawArraysInstancedANGLE(_0x112232, _0x366378, _0x2e6043, _0x1d717b);
      };
      _0x349a52.drawElementsInstanced = function (_0x11fc5b, _0x435e48, _0x5f059f, _0x563671, _0x19610e) {
        _0x50e3d6.drawElementsInstancedANGLE(_0x11fc5b, _0x435e48, _0x5f059f, _0x563671, _0x19610e);
      };
      return 1;
    }
  }
  function _0x12816(_0x4bdaa8) {
    var _0x2f6874 = _0x4bdaa8.getExtension("OES_vertex_array_object");
    if (_0x2f6874) {
      _0x4bdaa8.createVertexArray = function () {
        return _0x2f6874.createVertexArrayOES();
      };
      _0x4bdaa8.deleteVertexArray = function (_0x5ed5d4) {
        _0x2f6874.deleteVertexArrayOES(_0x5ed5d4);
      };
      _0x4bdaa8.bindVertexArray = function (_0xdcb3d4) {
        _0x2f6874.bindVertexArrayOES(_0xdcb3d4);
      };
      _0x4bdaa8.isVertexArray = function (_0x5e38a1) {
        return _0x2f6874.isVertexArrayOES(_0x5e38a1);
      };
      return 1;
    }
  }
  function _0x15aa28(_0x473175) {
    var _0x41a65d = _0x473175.getExtension("WEBGL_draw_buffers");
    if (_0x41a65d) {
      _0x473175.drawBuffers = function (_0x352b27, _0x2502e1) {
        _0x41a65d.drawBuffersWEBGL(_0x352b27, _0x2502e1);
      };
      return 1;
    }
  }
  function _0x51e47d(_0x2000b3) {
    return !!(_0x2000b3.dibvbi = _0x2000b3.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x436ad9(_0x266a3f) {
    return !!(_0x266a3f.mdibvbi = _0x266a3f.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x449c10(_0x2dd1a6) {
    return !!(_0x2dd1a6.multiDrawWebgl = _0x2dd1a6.getExtension("WEBGL_multi_draw"));
  }
  var _0xa194ab = {
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
    recordError: function _0x3dd2f3(_0x315d30) {
      if (!_0xa194ab.lastError) {
        _0xa194ab.lastError = _0x315d30;
      }
    },
    getNewId: function (_0x8b58b2) {
      var _0x4395ea = _0xa194ab.counter++;
      for (var _0x5e1ec8 = _0x8b58b2.length; _0x5e1ec8 < _0x4395ea; _0x5e1ec8++) {
        _0x8b58b2[_0x5e1ec8] = null;
      }
      return _0x4395ea;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x303415) {
      return 32 - Math.clz32(_0x303415 === 0 ? 0 : _0x303415 - 1);
    },
    generateTempBuffers: function (_0x55b701, _0x8d7cf8) {
      var _0x1eb23a = _0xa194ab.log2ceilLookup(_0xa194ab.MAX_TEMP_BUFFER_SIZE);
      _0x8d7cf8.tempVertexBufferCounters1 = [];
      _0x8d7cf8.tempVertexBufferCounters2 = [];
      _0x8d7cf8.tempVertexBufferCounters1.length = _0x8d7cf8.tempVertexBufferCounters2.length = _0x1eb23a + 1;
      _0x8d7cf8.tempVertexBuffers1 = [];
      _0x8d7cf8.tempVertexBuffers2 = [];
      _0x8d7cf8.tempVertexBuffers1.length = _0x8d7cf8.tempVertexBuffers2.length = _0x1eb23a + 1;
      _0x8d7cf8.tempIndexBuffers = [];
      _0x8d7cf8.tempIndexBuffers.length = _0x1eb23a + 1;
      for (var _0x5e03b6 = 0; _0x5e03b6 <= _0x1eb23a; ++_0x5e03b6) {
        _0x8d7cf8.tempIndexBuffers[_0x5e03b6] = null;
        _0x8d7cf8.tempVertexBufferCounters1[_0x5e03b6] = _0x8d7cf8.tempVertexBufferCounters2[_0x5e03b6] = 0;
        var _0x2b689a = _0xa194ab.numTempVertexBuffersPerSize;
        _0x8d7cf8.tempVertexBuffers1[_0x5e03b6] = [];
        _0x8d7cf8.tempVertexBuffers2[_0x5e03b6] = [];
        var _0x1c546c = _0x8d7cf8.tempVertexBuffers1[_0x5e03b6];
        var _0x4f3877 = _0x8d7cf8.tempVertexBuffers2[_0x5e03b6];
        _0x1c546c.length = _0x4f3877.length = _0x2b689a;
        for (var _0x310a63 = 0; _0x310a63 < _0x2b689a; ++_0x310a63) {
          _0x1c546c[_0x310a63] = _0x4f3877[_0x310a63] = null;
        }
      }
      if (_0x55b701) {
        _0x8d7cf8.tempQuadIndexBuffer = _0xd640f0.createBuffer();
        _0x8d7cf8.GLctx.bindBuffer(34963, _0x8d7cf8.tempQuadIndexBuffer);
        var _0x2e3abd = _0xa194ab.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0x2af3b6 = new Uint16Array(_0x2e3abd);
        var _0x5e03b6 = 0;
        var _0x3ae817 = 0;
        while (1) {
          _0x2af3b6[_0x5e03b6++] = _0x3ae817;
          if (_0x5e03b6 >= _0x2e3abd) {
            break;
          }
          _0x2af3b6[_0x5e03b6++] = _0x3ae817 + 1;
          if (_0x5e03b6 >= _0x2e3abd) {
            break;
          }
          _0x2af3b6[_0x5e03b6++] = _0x3ae817 + 2;
          if (_0x5e03b6 >= _0x2e3abd) {
            break;
          }
          _0x2af3b6[_0x5e03b6++] = _0x3ae817;
          if (_0x5e03b6 >= _0x2e3abd) {
            break;
          }
          _0x2af3b6[_0x5e03b6++] = _0x3ae817 + 2;
          if (_0x5e03b6 >= _0x2e3abd) {
            break;
          }
          _0x2af3b6[_0x5e03b6++] = _0x3ae817 + 3;
          if (_0x5e03b6 >= _0x2e3abd) {
            break;
          }
          _0x3ae817 += 4;
        }
        _0x8d7cf8.GLctx.bufferData(34963, _0x2af3b6, 35044);
        _0x8d7cf8.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0x4579cc(_0x3c215c) {
      var _0x50d27f = _0xa194ab.log2ceilLookup(_0x3c215c);
      var _0x15b588 = _0xa194ab.currentContext.tempVertexBuffers1[_0x50d27f];
      var _0x192c3a = _0xa194ab.currentContext.tempVertexBufferCounters1[_0x50d27f];
      _0xa194ab.currentContext.tempVertexBufferCounters1[_0x50d27f] = _0xa194ab.currentContext.tempVertexBufferCounters1[_0x50d27f] + 1 & _0xa194ab.numTempVertexBuffersPerSize - 1;
      var _0x2e897b = _0x15b588[_0x192c3a];
      if (_0x2e897b) {
        return _0x2e897b;
      }
      var _0x4483b5 = _0xd640f0.getParameter(34964);
      _0x15b588[_0x192c3a] = _0xd640f0.createBuffer();
      _0xd640f0.bindBuffer(34962, _0x15b588[_0x192c3a]);
      _0xd640f0.bufferData(34962, 1 << _0x50d27f, 35048);
      _0xd640f0.bindBuffer(34962, _0x4483b5);
      return _0x15b588[_0x192c3a];
    },
    getTempIndexBuffer: function _0x14813d(_0x3af037) {
      var _0x51c71a = _0xa194ab.log2ceilLookup(_0x3af037);
      var _0x27371d = _0xa194ab.currentContext.tempIndexBuffers[_0x51c71a];
      if (_0x27371d) {
        return _0x27371d;
      }
      var _0x1423fe = _0xd640f0.getParameter(34965);
      _0xa194ab.currentContext.tempIndexBuffers[_0x51c71a] = _0xd640f0.createBuffer();
      _0xd640f0.bindBuffer(34963, _0xa194ab.currentContext.tempIndexBuffers[_0x51c71a]);
      _0xd640f0.bufferData(34963, 1 << _0x51c71a, 35048);
      _0xd640f0.bindBuffer(34963, _0x1423fe);
      return _0xa194ab.currentContext.tempIndexBuffers[_0x51c71a];
    },
    newRenderingFrameStarted: function _0x2a7ace() {
      if (!_0xa194ab.currentContext) {
        return;
      }
      var _0x58377b = _0xa194ab.currentContext.tempVertexBuffers1;
      _0xa194ab.currentContext.tempVertexBuffers1 = _0xa194ab.currentContext.tempVertexBuffers2;
      _0xa194ab.currentContext.tempVertexBuffers2 = _0x58377b;
      _0x58377b = _0xa194ab.currentContext.tempVertexBufferCounters1;
      _0xa194ab.currentContext.tempVertexBufferCounters1 = _0xa194ab.currentContext.tempVertexBufferCounters2;
      _0xa194ab.currentContext.tempVertexBufferCounters2 = _0x58377b;
      var _0x551c88 = _0xa194ab.log2ceilLookup(_0xa194ab.MAX_TEMP_BUFFER_SIZE);
      for (var _0x31494e = 0; _0x31494e <= _0x551c88; ++_0x31494e) {
        _0xa194ab.currentContext.tempVertexBufferCounters1[_0x31494e] = 0;
      }
    },
    getSource: function (_0x5cf016, _0x3fd045, _0x217cc5, _0x3ab84a) {
      var _0x1359f6 = "";
      for (var _0x42ddbb = 0; _0x42ddbb < _0x3fd045; ++_0x42ddbb) {
        var _0x27136c = _0x3ab84a ? _0x2c6e39[_0x3ab84a + _0x42ddbb * 4 >> 2] : -1;
        _0x1359f6 += _0xa8c6ca(_0x2c6e39[_0x217cc5 + _0x42ddbb * 4 >> 2], _0x27136c < 0 ? undefined : _0x27136c);
      }
      return _0x1359f6;
    },
    calcBufLength: function _0x3c8b1f(_0x339630, _0x1fa1c3, _0x5e104a, _0x1ad153) {
      if (_0x5e104a > 0) {
        return _0x1ad153 * _0x5e104a;
      }
      var _0x3d7b0 = _0xa194ab.byteSizeByType[_0x1fa1c3 - _0xa194ab.byteSizeByTypeRoot];
      return _0x339630 * _0x3d7b0 * _0x1ad153;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0x1c27fd(_0xa3ae12) {
      _0xa194ab.resetBufferBinding = false;
      for (var _0xc8921f = 0; _0xc8921f < _0xa194ab.currentContext.maxVertexAttribs; ++_0xc8921f) {
        var _0x3b38be = _0xa194ab.currentContext.clientBuffers[_0xc8921f];
        if (!_0x3b38be.clientside || !_0x3b38be.enabled) {
          continue;
        }
        _0xa194ab.resetBufferBinding = true;
        var _0x3e46d5 = _0xa194ab.calcBufLength(_0x3b38be.size, _0x3b38be.type, _0x3b38be.stride, _0xa3ae12);
        var _0x5643b2 = _0xa194ab.getTempVertexBuffer(_0x3e46d5);
        _0xd640f0.bindBuffer(34962, _0x5643b2);
        _0xd640f0.bufferSubData(34962, 0, _0x42b281.subarray(_0x3b38be.ptr, _0x3b38be.ptr + _0x3e46d5));
        _0x3b38be.vertexAttribPointerAdaptor.call(_0xd640f0, _0xc8921f, _0x3b38be.size, _0x3b38be.type, _0x3b38be.normalized, _0x3b38be.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0x44d7e6() {
      if (_0xa194ab.resetBufferBinding) {
        _0xd640f0.bindBuffer(34962, _0xa194ab.buffers[_0xd640f0.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0x59acf9, _0x531b90) {
      if (!_0x59acf9.getContextSafariWebGL2Fixed) {
        _0x59acf9.getContextSafariWebGL2Fixed = _0x59acf9.getContext;
        _0x59acf9.getContext = function (_0x129e40, _0x2026ac) {
          var _0x2f6d13 = _0x59acf9.getContextSafariWebGL2Fixed(_0x129e40, _0x2026ac);
          if (_0x129e40 == "webgl" == _0x2f6d13 instanceof WebGLRenderingContext) {
            return _0x2f6d13;
          } else {
            return null;
          }
        };
      }
      var _0x520efb = _0x531b90.majorVersion > 1 ? _0x59acf9.getContext("webgl2", _0x531b90) : _0x59acf9.getContext("webgl", _0x531b90);
      if (!_0x520efb) {
        return 0;
      }
      var _0x2b4c1b = _0xa194ab.registerContext(_0x520efb, _0x531b90);
      return _0x2b4c1b;
    },
    registerContext: function (_0x180624, _0x58b480) {
      var _0x3fcec1 = _0xa194ab.getNewId(_0xa194ab.contexts);
      var _0x85d499 = {
        handle: _0x3fcec1,
        attributes: _0x58b480,
        version: _0x58b480.majorVersion,
        GLctx: _0x180624
      };
      if (_0x180624.canvas) {
        _0x180624.canvas.GLctxObject = _0x85d499;
      }
      _0xa194ab.contexts[_0x3fcec1] = _0x85d499;
      if (typeof _0x58b480.enableExtensionsByDefault === "undefined" || _0x58b480.enableExtensionsByDefault) {
        _0xa194ab.initExtensions(_0x85d499);
      }
      _0x85d499.maxVertexAttribs = _0x85d499.GLctx.getParameter(34921);
      _0x85d499.clientBuffers = [];
      for (var _0x1c2366 = 0; _0x1c2366 < _0x85d499.maxVertexAttribs; _0x1c2366++) {
        _0x85d499.clientBuffers[_0x1c2366] = {
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
      _0xa194ab.generateTempBuffers(false, _0x85d499);
      return _0x3fcec1;
    },
    makeContextCurrent: function (_0x2b725b) {
      _0xa194ab.currentContext = _0xa194ab.contexts[_0x2b725b];
      _0x4141f5.ctx = _0xd640f0 = _0xa194ab.currentContext && _0xa194ab.currentContext.GLctx;
      return !_0x2b725b || !!_0xd640f0;
    },
    getContext: function (_0x267df0) {
      return _0xa194ab.contexts[_0x267df0];
    },
    deleteContext: function (_0x4fd488) {
      if (_0xa194ab.currentContext === _0xa194ab.contexts[_0x4fd488]) {
        _0xa194ab.currentContext = null;
      }
      if (typeof _0x2b5eda === "object") {
        _0x2b5eda.removeAllHandlersOnTarget(_0xa194ab.contexts[_0x4fd488].GLctx.canvas);
      }
      if (_0xa194ab.contexts[_0x4fd488] && _0xa194ab.contexts[_0x4fd488].GLctx.canvas) {
        _0xa194ab.contexts[_0x4fd488].GLctx.canvas.GLctxObject = undefined;
      }
      _0xa194ab.contexts[_0x4fd488] = null;
    },
    initExtensions: function (_0x29398a) {
      if (!_0x29398a) {
        _0x29398a = _0xa194ab.currentContext;
      }
      if (_0x29398a.initExtensionsDone) {
        return;
      }
      _0x29398a.initExtensionsDone = true;
      var _0x5b61c9 = _0x29398a.GLctx;
      _0x4109c5(_0x5b61c9);
      _0x12816(_0x5b61c9);
      _0x15aa28(_0x5b61c9);
      _0x51e47d(_0x5b61c9);
      _0x436ad9(_0x5b61c9);
      if (_0x29398a.version >= 2) {
        _0x5b61c9.disjointTimerQueryExt = _0x5b61c9.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x29398a.version < 2 || !_0x5b61c9.disjointTimerQueryExt) {
        _0x5b61c9.disjointTimerQueryExt = _0x5b61c9.getExtension("EXT_disjoint_timer_query");
      }
      _0x449c10(_0x5b61c9);
      var _0x11983b = _0x5b61c9.getSupportedExtensions() || [];
      _0x11983b.forEach(function (_0x30eb94) {
        if (!_0x30eb94.includes("lose_context") && !_0x30eb94.includes("debug")) {
          _0x5b61c9.getExtension(_0x30eb94);
        }
      });
    }
  };
  var _0x3f197e = ["default", "low-power", "high-performance"];
  function _0xfcd9cc(_0x48b734, _0x2cc186) {
    var _0x2c4e0e = _0x2cc186 >> 2;
    var _0x2aaf70 = _0x2c6e39[_0x2c4e0e + 6];
    var _0x3b5b83 = {
      alpha: !!_0x2c6e39[_0x2c4e0e + 0],
      depth: !!_0x2c6e39[_0x2c4e0e + 1],
      stencil: !!_0x2c6e39[_0x2c4e0e + 2],
      antialias: !!_0x2c6e39[_0x2c4e0e + 3],
      premultipliedAlpha: !!_0x2c6e39[_0x2c4e0e + 4],
      preserveDrawingBuffer: !!_0x2c6e39[_0x2c4e0e + 5],
      powerPreference: _0x3f197e[_0x2aaf70],
      failIfMajorPerformanceCaveat: !!_0x2c6e39[_0x2c4e0e + 7],
      majorVersion: _0x2c6e39[_0x2c4e0e + 8],
      minorVersion: _0x2c6e39[_0x2c4e0e + 9],
      enableExtensionsByDefault: _0x2c6e39[_0x2c4e0e + 10],
      explicitSwapControl: _0x2c6e39[_0x2c4e0e + 11],
      proxyContextToMainThread: _0x2c6e39[_0x2c4e0e + 12],
      renderViaOffscreenBackBuffer: _0x2c6e39[_0x2c4e0e + 13]
    };
    var _0x3636e1 = _0x2ddf30(_0x48b734);
    if (!_0x3636e1) {
      return 0;
    }
    if (_0x3b5b83.explicitSwapControl) {
      return 0;
    }
    var _0x1248c5 = _0xa194ab.createContext(_0x3636e1, _0x3b5b83);
    return _0x1248c5;
  }
  function _0x2a9ae5(_0x4afd59, _0x1dcc99) {
    return _0xfcd9cc(_0x4afd59, _0x1dcc99);
  }
  function _0x16b003() {
    if (_0xa194ab.currentContext) {
      return _0xa194ab.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0x31ccf1() {
    return _0x16b003();
  }
  _0x4141f5._emscripten_webgl_get_current_context = _0x31ccf1;
  function _0x1d63ac(_0x6444be) {
    var _0x26f79a = _0xa194ab.makeContextCurrent(_0x6444be);
    if (_0x26f79a) {
      return 0;
    } else {
      return -5;
    }
  }
  _0x4141f5._emscripten_webgl_make_context_current = _0x1d63ac;
  function _0x5112da(_0x25f49d) {
    if (_0xa194ab.currentContext == _0x25f49d) {
      _0xa194ab.currentContext = 0;
    }
    _0xa194ab.deleteContext(_0x25f49d);
  }
  function _0x1fe1c7(_0xf6529e, _0xa91918) {
    var _0x2faf4b = _0xa194ab.getContext(_0xf6529e);
    var _0x1e2571 = _0xa8c6ca(_0xa91918);
    if (_0x1e2571.startsWith("GL_")) {
      _0x1e2571 = _0x1e2571.substr(3);
    }
    if (_0x1e2571 == "ANGLE_instanced_arrays") {
      _0x4109c5(_0xd640f0);
    }
    if (_0x1e2571 == "OES_vertex_array_object") {
      _0x12816(_0xd640f0);
    }
    if (_0x1e2571 == "WEBGL_draw_buffers") {
      _0x15aa28(_0xd640f0);
    }
    if (_0x1e2571 == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0x51e47d(_0xd640f0);
    }
    if (_0x1e2571 == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x436ad9(_0xd640f0);
    }
    if (_0x1e2571 == "WEBGL_multi_draw") {
      _0x449c10(_0xd640f0);
    }
    var _0x53cbbc = _0x2faf4b.GLctx.getExtension(_0x1e2571);
    return !!_0x53cbbc;
  }
  function _0xe5f204(_0x3dea51) {
    var _0x28e13e = _0x3dea51 >> 2;
    for (var _0x41c3e1 = 0; _0x41c3e1 < 14; ++_0x41c3e1) {
      _0x2c6e39[_0x28e13e + _0x41c3e1] = 0;
    }
    _0x2c6e39[_0x28e13e + 0] = _0x2c6e39[_0x28e13e + 1] = _0x2c6e39[_0x28e13e + 3] = _0x2c6e39[_0x28e13e + 4] = _0x2c6e39[_0x28e13e + 8] = _0x2c6e39[_0x28e13e + 10] = 1;
  }
  var _0x2fb0d5 = {};
  function _0x2ee1cc() {
    return _0x4070b4 || "./this.program";
  }
  function _0x538799() {
    if (!_0x538799.strings) {
      var _0x47c58f = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0x178312 = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0x47c58f,
        _: _0x2ee1cc()
      };
      for (var _0x131a64 in _0x2fb0d5) {
        _0x178312[_0x131a64] = _0x2fb0d5[_0x131a64];
      }
      var _0x436ee7 = [];
      for (var _0x131a64 in _0x178312) {
        _0x436ee7.push(_0x131a64 + "=" + _0x178312[_0x131a64]);
      }
      _0x538799.strings = _0x436ee7;
    }
    return _0x538799.strings;
  }
  function _0x41afdd(_0x36cc69, _0x3e77f0) {
    try {
      var _0x1b2cef = 0;
      _0x538799().forEach(function (_0xd142ad, _0x3368b5) {
        var _0x4b8a93 = _0x3e77f0 + _0x1b2cef;
        _0x2c6e39[_0x36cc69 + _0x3368b5 * 4 >> 2] = _0x4b8a93;
        _0x401b12(_0xd142ad, _0x4b8a93);
        _0x1b2cef += _0xd142ad.length + 1;
      });
      return 0;
    } catch (_0x523f26) {
      if (typeof _0xcb2023 === "undefined" || !(_0x523f26 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x523f26);
      }
      return _0x523f26.errno;
    }
  }
  function _0x44ac79(_0x39dd7f, _0x3707ab) {
    try {
      var _0x32efd4 = _0x538799();
      _0x2c6e39[_0x39dd7f >> 2] = _0x32efd4.length;
      var _0x2e1c37 = 0;
      _0x32efd4.forEach(function (_0x154f27) {
        _0x2e1c37 += _0x154f27.length + 1;
      });
      _0x2c6e39[_0x3707ab >> 2] = _0x2e1c37;
      return 0;
    } catch (_0x14e1f7) {
      if (typeof _0xcb2023 === "undefined" || !(_0x14e1f7 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x14e1f7);
      }
      return _0x14e1f7.errno;
    }
  }
  function _0x3ea4fe(_0x29729f) {
    try {
      var _0x2bc203 = _0x519c68.getStreamFromFD(_0x29729f);
      _0xcb2023.close(_0x2bc203);
      return 0;
    } catch (_0x34a12c) {
      if (typeof _0xcb2023 === "undefined" || !(_0x34a12c instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x34a12c);
      }
      return _0x34a12c.errno;
    }
  }
  function _0x37d439(_0x5c4079, _0x1ebffe) {
    try {
      var _0x9d28e0 = _0x519c68.getStreamFromFD(_0x5c4079);
      var _0x4d32e3 = _0x9d28e0.tty ? 2 : _0xcb2023.isDir(_0x9d28e0.mode) ? 3 : _0xcb2023.isLink(_0x9d28e0.mode) ? 7 : 4;
      _0x51d7cf[_0x1ebffe >> 0] = _0x4d32e3;
      return 0;
    } catch (_0x3293e2) {
      if (typeof _0xcb2023 === "undefined" || !(_0x3293e2 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x3293e2);
      }
      return _0x3293e2.errno;
    }
  }
  function _0x130240(_0x1946d4, _0x5eb0ab, _0x1a8df5, _0x5a8c12) {
    try {
      var _0xdf968e = _0x519c68.getStreamFromFD(_0x1946d4);
      var _0x455226 = _0x519c68.doReadv(_0xdf968e, _0x5eb0ab, _0x1a8df5);
      _0x2c6e39[_0x5a8c12 >> 2] = _0x455226;
      return 0;
    } catch (_0x211d57) {
      if (typeof _0xcb2023 === "undefined" || !(_0x211d57 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x211d57);
      }
      return _0x211d57.errno;
    }
  }
  function _0x1eca02(_0x177dbb, _0x2a1365, _0x10dec3, _0x56427b, _0x143426) {
    try {
      var _0x10b6eb = _0x519c68.getStreamFromFD(_0x177dbb);
      var _0x516c4d = 4294967296;
      var _0x215fdd = _0x10dec3 * _0x516c4d + (_0x2a1365 >>> 0);
      var _0x179988 = 9007199254740992;
      if (_0x215fdd <= -_0x179988 || _0x215fdd >= _0x179988) {
        return -61;
      }
      _0xcb2023.llseek(_0x10b6eb, _0x215fdd, _0x56427b);
      _0x3df107 = [_0x10b6eb.position >>> 0, (_0xe392d5 = _0x10b6eb.position, +Math.abs(_0xe392d5) >= 1 ? _0xe392d5 > 0 ? (Math.min(+Math.floor(_0xe392d5 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0xe392d5 - +(~~_0xe392d5 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x2c6e39[_0x143426 >> 2] = _0x3df107[0];
      _0x2c6e39[_0x143426 + 4 >> 2] = _0x3df107[1];
      if (_0x10b6eb.getdents && _0x215fdd === 0 && _0x56427b === 0) {
        _0x10b6eb.getdents = null;
      }
      return 0;
    } catch (_0x54bb05) {
      if (typeof _0xcb2023 === "undefined" || !(_0x54bb05 instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x54bb05);
      }
      return _0x54bb05.errno;
    }
  }
  function _0x189cf7(_0x256ac4, _0x34011c, _0x325a9b, _0x46dcd4) {
    try {
      var _0x244c99 = _0x519c68.getStreamFromFD(_0x256ac4);
      var _0x311b43 = _0x519c68.doWritev(_0x244c99, _0x34011c, _0x325a9b);
      _0x2c6e39[_0x46dcd4 >> 2] = _0x311b43;
      return 0;
    } catch (_0x4aa93d) {
      if (typeof _0xcb2023 === "undefined" || !(_0x4aa93d instanceof _0xcb2023.ErrnoError)) {
        _0x4ec462(_0x4aa93d);
      }
      return _0x4aa93d.errno;
    }
  }
  function _0x4f4741(_0x1ecb98, _0x5aa4e8) {
    return 0;
  }
  function _0x268c67() {
    return _0x250035();
  }
  function _0x35bb77(_0xea6e85, _0x3f3423, _0x103be0, _0x147299) {
    var _0x14dbd6 = 0;
    var _0x543e3d = 0;
    var _0x479aaf = 0;
    var _0x57c432 = 0;
    var _0x526488 = 0;
    var _0x339646 = 0;
    var _0x26f35c;
    function _0x390003(_0x2ff361, _0x17a05f, _0x575b8e, _0x52b2dc, _0x4fc6ed, _0x21a599) {
      var _0x131dad;
      var _0x2d505d;
      var _0x115af8;
      var _0x388ca5;
      _0x2d505d = _0x2ff361 === 10 ? 28 : 16;
      _0x4fc6ed = _0x2ff361 === 10 ? _0xee3b97(_0x4fc6ed) : _0x1803e4(_0x4fc6ed);
      _0x131dad = _0x48c1ae(_0x2d505d);
      _0x388ca5 = _0x30b0ac(_0x131dad, _0x2ff361, _0x4fc6ed, _0x21a599);
      _0x15301d(!_0x388ca5);
      _0x115af8 = _0x48c1ae(32);
      _0x2c6e39[_0x115af8 + 4 >> 2] = _0x2ff361;
      _0x2c6e39[_0x115af8 + 8 >> 2] = _0x17a05f;
      _0x2c6e39[_0x115af8 + 12 >> 2] = _0x575b8e;
      _0x2c6e39[_0x115af8 + 24 >> 2] = _0x52b2dc;
      _0x2c6e39[_0x115af8 + 20 >> 2] = _0x131dad;
      if (_0x2ff361 === 10) {
        _0x2c6e39[_0x115af8 + 16 >> 2] = 28;
      } else {
        _0x2c6e39[_0x115af8 + 16 >> 2] = 16;
      }
      _0x2c6e39[_0x115af8 + 28 >> 2] = 0;
      return _0x115af8;
    }
    if (_0x103be0) {
      _0x479aaf = _0x2c6e39[_0x103be0 >> 2];
      _0x57c432 = _0x2c6e39[_0x103be0 + 4 >> 2];
      _0x526488 = _0x2c6e39[_0x103be0 + 8 >> 2];
      _0x339646 = _0x2c6e39[_0x103be0 + 12 >> 2];
    }
    if (_0x526488 && !_0x339646) {
      _0x339646 = _0x526488 === 2 ? 17 : 6;
    }
    if (!_0x526488 && _0x339646) {
      _0x526488 = _0x339646 === 17 ? 2 : 1;
    }
    if (_0x339646 === 0) {
      _0x339646 = 6;
    }
    if (_0x526488 === 0) {
      _0x526488 = 1;
    }
    if (!_0xea6e85 && !_0x3f3423) {
      return -2;
    }
    if (_0x479aaf & ~1087) {
      return -1;
    }
    if (_0x103be0 !== 0 && _0x2c6e39[_0x103be0 >> 2] & 2 && !_0xea6e85) {
      return -1;
    }
    if (_0x479aaf & 32) {
      return -2;
    }
    if (_0x526488 !== 0 && _0x526488 !== 1 && _0x526488 !== 2) {
      return -7;
    }
    if (_0x57c432 !== 0 && _0x57c432 !== 2 && _0x57c432 !== 10) {
      return -6;
    }
    if (_0x3f3423) {
      _0x3f3423 = _0xa8c6ca(_0x3f3423);
      _0x543e3d = parseInt(_0x3f3423, 10);
      if (isNaN(_0x543e3d)) {
        if (_0x479aaf & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0xea6e85) {
      if (_0x57c432 === 0) {
        _0x57c432 = 2;
      }
      if ((_0x479aaf & 1) === 0) {
        if (_0x57c432 === 2) {
          _0x14dbd6 = _0x5e1997(2130706433);
        } else {
          _0x14dbd6 = [0, 0, 0, 1];
        }
      }
      _0x26f35c = _0x390003(_0x57c432, _0x526488, _0x339646, null, _0x14dbd6, _0x543e3d);
      _0x2c6e39[_0x147299 >> 2] = _0x26f35c;
      return 0;
    }
    _0xea6e85 = _0xa8c6ca(_0xea6e85);
    _0x14dbd6 = _0x1524ed(_0xea6e85);
    if (_0x14dbd6 !== null) {
      if (_0x57c432 === 0 || _0x57c432 === 2) {
        _0x57c432 = 2;
      } else if (_0x57c432 === 10 && _0x479aaf & 8) {
        _0x14dbd6 = [0, 0, _0x5e1997(65535), _0x14dbd6];
        _0x57c432 = 10;
      } else {
        return -2;
      }
    } else {
      _0x14dbd6 = _0x802327(_0xea6e85);
      if (_0x14dbd6 !== null) {
        if (_0x57c432 === 0 || _0x57c432 === 10) {
          _0x57c432 = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0x14dbd6 != null) {
      _0x26f35c = _0x390003(_0x57c432, _0x526488, _0x339646, _0xea6e85, _0x14dbd6, _0x543e3d);
      _0x2c6e39[_0x147299 >> 2] = _0x26f35c;
      return 0;
    }
    if (_0x479aaf & 4) {
      return -2;
    }
    _0xea6e85 = _0x28b747.lookup_name(_0xea6e85);
    _0x14dbd6 = _0x1524ed(_0xea6e85);
    if (_0x57c432 === 0) {
      _0x57c432 = 2;
    } else if (_0x57c432 === 10) {
      _0x14dbd6 = [0, 0, _0x5e1997(65535), _0x14dbd6];
    }
    _0x26f35c = _0x390003(_0x57c432, _0x526488, _0x339646, null, _0x14dbd6, _0x543e3d);
    _0x2c6e39[_0x147299 >> 2] = _0x26f35c;
    return 0;
  }
  function _0x5d1e66(_0x3a8ba6) {
    var _0xfac9f8 = _0x48c1ae(20);
    var _0x29b83a = _0x48c1ae(_0x3a8ba6.length + 1);
    _0x3c7021(_0x3a8ba6, _0x29b83a, _0x3a8ba6.length + 1);
    _0x2c6e39[_0xfac9f8 >> 2] = _0x29b83a;
    var _0x394a66 = _0x48c1ae(4);
    _0x2c6e39[_0x394a66 >> 2] = 0;
    _0x2c6e39[_0xfac9f8 + 4 >> 2] = _0x394a66;
    var _0xdc2804 = 2;
    _0x2c6e39[_0xfac9f8 + 8 >> 2] = _0xdc2804;
    _0x2c6e39[_0xfac9f8 + 12 >> 2] = 4;
    var _0x38fb93 = _0x48c1ae(12);
    _0x2c6e39[_0x38fb93 >> 2] = _0x38fb93 + 8;
    _0x2c6e39[_0x38fb93 + 4 >> 2] = 0;
    _0x2c6e39[_0x38fb93 + 8 >> 2] = _0x1524ed(_0x28b747.lookup_name(_0x3a8ba6));
    _0x2c6e39[_0xfac9f8 + 16 >> 2] = _0x38fb93;
    return _0xfac9f8;
  }
  function _0x171615(_0x32fa31, _0x3da16b, _0x33fbe5) {
    if (_0x33fbe5 !== 2) {
      _0x345717(5);
      return null;
    }
    _0x32fa31 = _0x2c6e39[_0x32fa31 >> 2];
    var _0xab0906 = _0x1803e4(_0x32fa31);
    var _0x8f1e7e = _0x28b747.lookup_addr(_0xab0906);
    if (_0x8f1e7e) {
      _0xab0906 = _0x8f1e7e;
    }
    return _0x5d1e66(_0xab0906);
  }
  function _0xd9d716(_0x33c5d1) {
    return _0x5d1e66(_0xa8c6ca(_0x33c5d1));
  }
  function _0x39fb8d(_0x3954c5, _0x396516, _0x5e7cd9, _0x1947ae, _0x5178fd, _0x554b85, _0x5104c6) {
    var _0x3ae344 = _0x1c33aa(_0x3954c5, _0x396516);
    if (_0x3ae344.errno) {
      return -6;
    }
    var _0x1741a1 = _0x3ae344.port;
    var _0x23da7d = _0x3ae344.addr;
    var _0x3e2588 = false;
    if (_0x5e7cd9 && _0x1947ae) {
      var _0x59de4e;
      if (_0x5104c6 & 1 || !(_0x59de4e = _0x28b747.lookup_addr(_0x23da7d))) {
        if (_0x5104c6 & 8) {
          return -2;
        }
      } else {
        _0x23da7d = _0x59de4e;
      }
      var _0x33f893 = _0x3c7021(_0x23da7d, _0x5e7cd9, _0x1947ae);
      if (_0x33f893 + 1 >= _0x1947ae) {
        _0x3e2588 = true;
      }
    }
    if (_0x5178fd && _0x554b85) {
      _0x1741a1 = "" + _0x1741a1;
      var _0x33f893 = _0x3c7021(_0x1741a1, _0x5178fd, _0x554b85);
      if (_0x33f893 + 1 >= _0x554b85) {
        _0x3e2588 = true;
      }
    }
    if (_0x3e2588) {
      return -12;
    }
    return 0;
  }
  function _0x37f4c5() {
    throw "getpwuid: TODO";
  }
  function _0x32565b(_0x4f2d2b) {
    var _0x11891d = Date.now();
    _0x2c6e39[_0x4f2d2b >> 2] = _0x11891d / 1000 | 0;
    _0x2c6e39[_0x4f2d2b + 4 >> 2] = _0x11891d % 1000 * 1000 | 0;
    return 0;
  }
  function _0x2bc6dd(_0x172770) {
    _0xd640f0.activeTexture(_0x172770);
  }
  function _0x1df5d7(_0x4bcd8c, _0x26be01) {
    _0x4bcd8c = _0xa194ab.programs[_0x4bcd8c];
    _0x26be01 = _0xa194ab.shaders[_0x26be01];
    _0x4bcd8c[_0x26be01.shaderType] = _0x26be01;
    _0xd640f0.attachShader(_0x4bcd8c, _0x26be01);
  }
  function _0x50d678(_0x2bd808, _0x243c0e) {
    _0xd640f0.beginQuery(_0x2bd808, _0xa194ab.queries[_0x243c0e]);
  }
  function _0x2264ca(_0x45563e) {
    _0xd640f0.beginTransformFeedback(_0x45563e);
  }
  function _0x3756b9(_0x423096, _0x47d5bf, _0xee519) {
    _0xd640f0.bindAttribLocation(_0xa194ab.programs[_0x423096], _0x47d5bf, _0xa8c6ca(_0xee519));
  }
  function _0xd7c064(_0x469155, _0x23c95c) {
    if (_0x469155 == 34962) {
      _0xd640f0.currentArrayBufferBinding = _0x23c95c;
    } else if (_0x469155 == 34963) {
      _0xd640f0.currentElementArrayBufferBinding = _0x23c95c;
    }
    if (_0x469155 == 35051) {
      _0xd640f0.currentPixelPackBufferBinding = _0x23c95c;
    } else if (_0x469155 == 35052) {
      _0xd640f0.currentPixelUnpackBufferBinding = _0x23c95c;
    }
    _0xd640f0.bindBuffer(_0x469155, _0xa194ab.buffers[_0x23c95c]);
  }
  function _0xef9b58(_0x2ed3dc, _0x5a0269, _0x12575e) {
    _0xd640f0.bindBufferBase(_0x2ed3dc, _0x5a0269, _0xa194ab.buffers[_0x12575e]);
  }
  function _0x5f3215(_0x9a1d7c, _0xba9656, _0x42e45b, _0x1bd211, _0x373cf6) {
    _0xd640f0.bindBufferRange(_0x9a1d7c, _0xba9656, _0xa194ab.buffers[_0x42e45b], _0x1bd211, _0x373cf6);
  }
  function _0x3dae36(_0x35ebc0, _0x1d1560) {
    _0xd640f0.bindFramebuffer(_0x35ebc0, _0xa194ab.framebuffers[_0x1d1560]);
  }
  function _0x19ee0b(_0x2013be, _0x38a726) {
    _0xd640f0.bindRenderbuffer(_0x2013be, _0xa194ab.renderbuffers[_0x38a726]);
  }
  function _0xd2993f(_0x30fa65, _0x1b361e) {
    _0xd640f0.bindSampler(_0x30fa65, _0xa194ab.samplers[_0x1b361e]);
  }
  function _0x2d2ff9(_0x31f5ec, _0x236c8a) {
    _0xd640f0.bindTexture(_0x31f5ec, _0xa194ab.textures[_0x236c8a]);
  }
  function _0x171bf1(_0x3cbdf9, _0x508f13) {
    _0xd640f0.bindTransformFeedback(_0x3cbdf9, _0xa194ab.transformFeedbacks[_0x508f13]);
  }
  function _0xe2dbc(_0x505acd) {
    _0xd640f0.bindVertexArray(_0xa194ab.vaos[_0x505acd]);
    var _0x1f2533 = _0xd640f0.getParameter(34965);
    _0xd640f0.currentElementArrayBufferBinding = _0x1f2533 ? _0x1f2533.name | 0 : 0;
  }
  function _0x5e7cd3(_0x1c8d58) {
    _0xd640f0.blendEquation(_0x1c8d58);
  }
  function _0x44a982(_0x29ea71, _0x2ba016) {
    _0xd640f0.blendEquationSeparate(_0x29ea71, _0x2ba016);
  }
  function _0x404627(_0x168705, _0x33522a, _0x10f9b7, _0x5faeb9) {
    _0xd640f0.blendFuncSeparate(_0x168705, _0x33522a, _0x10f9b7, _0x5faeb9);
  }
  function _0x582905(_0x41d816, _0xe1c6b9, _0x2530f7, _0x15a71e, _0x58d354, _0x5ef3ac, _0x1090b9, _0x237a32, _0x318735, _0x303742) {
    _0xd640f0.blitFramebuffer(_0x41d816, _0xe1c6b9, _0x2530f7, _0x15a71e, _0x58d354, _0x5ef3ac, _0x1090b9, _0x237a32, _0x318735, _0x303742);
  }
  function _0x523532(_0xb75884, _0x3fa91a, _0x26588f, _0x25e070) {
    if (_0xa194ab.currentContext.version >= 2) {
      if (_0x26588f) {
        _0xd640f0.bufferData(_0xb75884, _0x42b281, _0x25e070, _0x26588f, _0x3fa91a);
      } else {
        _0xd640f0.bufferData(_0xb75884, _0x3fa91a, _0x25e070);
      }
    } else {
      _0xd640f0.bufferData(_0xb75884, _0x26588f ? _0x42b281.subarray(_0x26588f, _0x26588f + _0x3fa91a) : _0x3fa91a, _0x25e070);
    }
  }
  function _0x26b6f8(_0x4ec88e, _0x3a2586, _0x54f77e, _0x30cb97) {
    if (_0xa194ab.currentContext.version >= 2) {
      _0xd640f0.bufferSubData(_0x4ec88e, _0x3a2586, _0x42b281, _0x30cb97, _0x54f77e);
      return;
    }
    _0xd640f0.bufferSubData(_0x4ec88e, _0x3a2586, _0x42b281.subarray(_0x30cb97, _0x30cb97 + _0x54f77e));
  }
  function _0x109768(_0x508d23) {
    return _0xd640f0.checkFramebufferStatus(_0x508d23);
  }
  function _0x2c88e9(_0xddba75) {
    _0xd640f0.clear(_0xddba75);
  }
  function _0x2ef8ef(_0x47a67c, _0x4a7a13, _0x399a3a, _0x970989) {
    _0xd640f0.clearBufferfi(_0x47a67c, _0x4a7a13, _0x399a3a, _0x970989);
  }
  function _0x5e879d(_0x536db9, _0x36b59b, _0x4eb3ae) {
    _0xd640f0.clearBufferfv(_0x536db9, _0x36b59b, _0xaf0aab, _0x4eb3ae >> 2);
  }
  function _0x33cc28(_0x18a9c3, _0x39e144, _0xfbec1e) {
    _0xd640f0.clearBufferuiv(_0x18a9c3, _0x39e144, _0x4d8b01, _0xfbec1e >> 2);
  }
  function _0xc40293(_0x164c26, _0x2ae999, _0x38b5e0, _0x460dbe) {
    _0xd640f0.clearColor(_0x164c26, _0x2ae999, _0x38b5e0, _0x460dbe);
  }
  function _0x578c12(_0x5d3a7d) {
    _0xd640f0.clearDepth(_0x5d3a7d);
  }
  function _0x2d59ea(_0x294322) {
    _0xd640f0.clearStencil(_0x294322);
  }
  function _0x423b2e(_0x245057, _0x38d10d, _0x19bd6e, _0x2e7f0b) {
    return _0xd640f0.clientWaitSync(_0xa194ab.syncs[_0x245057], _0x38d10d, _0x76a111(_0x19bd6e, _0x2e7f0b));
  }
  function _0x3466a4(_0x8e1c81, _0x520878, _0x48b5, _0x3e7697) {
    _0xd640f0.colorMask(!!_0x8e1c81, !!_0x520878, !!_0x48b5, !!_0x3e7697);
  }
  function _0x562851(_0x85c072) {
    _0xd640f0.compileShader(_0xa194ab.shaders[_0x85c072]);
  }
  function _0xb35c5b(_0xe0d9de, _0x129f21, _0x2236a3, _0x2a528a, _0xe4f06c, _0xd3de7c, _0x51b084, _0x27a84b) {
    if (_0xa194ab.currentContext.version >= 2) {
      if (_0xd640f0.currentPixelUnpackBufferBinding) {
        _0xd640f0.compressedTexImage2D(_0xe0d9de, _0x129f21, _0x2236a3, _0x2a528a, _0xe4f06c, _0xd3de7c, _0x51b084, _0x27a84b);
      } else {
        _0xd640f0.compressedTexImage2D(_0xe0d9de, _0x129f21, _0x2236a3, _0x2a528a, _0xe4f06c, _0xd3de7c, _0x42b281, _0x27a84b, _0x51b084);
      }
      return;
    }
    _0xd640f0.compressedTexImage2D(_0xe0d9de, _0x129f21, _0x2236a3, _0x2a528a, _0xe4f06c, _0xd3de7c, _0x27a84b ? _0x42b281.subarray(_0x27a84b, _0x27a84b + _0x51b084) : null);
  }
  function _0x439a5e(_0x180f33, _0x263909, _0x377060, _0x43fb2b, _0x54d42d, _0x54d7e5, _0x29d03d, _0xaa47c5, _0x53754e) {
    if (_0xd640f0.currentPixelUnpackBufferBinding) {
      _0xd640f0.compressedTexImage3D(_0x180f33, _0x263909, _0x377060, _0x43fb2b, _0x54d42d, _0x54d7e5, _0x29d03d, _0xaa47c5, _0x53754e);
    } else {
      _0xd640f0.compressedTexImage3D(_0x180f33, _0x263909, _0x377060, _0x43fb2b, _0x54d42d, _0x54d7e5, _0x29d03d, _0x42b281, _0x53754e, _0xaa47c5);
    }
  }
  function _0x4dbb85(_0x5c0dcf, _0x22374a, _0x4ccc8b, _0x4211d1, _0x1a685b, _0xd6fb5c, _0x5a2dda, _0x20b759, _0x431677) {
    if (_0xa194ab.currentContext.version >= 2) {
      if (_0xd640f0.currentPixelUnpackBufferBinding) {
        _0xd640f0.compressedTexSubImage2D(_0x5c0dcf, _0x22374a, _0x4ccc8b, _0x4211d1, _0x1a685b, _0xd6fb5c, _0x5a2dda, _0x20b759, _0x431677);
      } else {
        _0xd640f0.compressedTexSubImage2D(_0x5c0dcf, _0x22374a, _0x4ccc8b, _0x4211d1, _0x1a685b, _0xd6fb5c, _0x5a2dda, _0x42b281, _0x431677, _0x20b759);
      }
      return;
    }
    _0xd640f0.compressedTexSubImage2D(_0x5c0dcf, _0x22374a, _0x4ccc8b, _0x4211d1, _0x1a685b, _0xd6fb5c, _0x5a2dda, _0x431677 ? _0x42b281.subarray(_0x431677, _0x431677 + _0x20b759) : null);
  }
  function _0x5e851a(_0x1b8314, _0x3d4f6e, _0x4d0b2b, _0x5618d9, _0xc41800, _0x47bfc0, _0xef18a3, _0x2c1756, _0x56acc0, _0x3292a8, _0x435dea) {
    if (_0xd640f0.currentPixelUnpackBufferBinding) {
      _0xd640f0.compressedTexSubImage3D(_0x1b8314, _0x3d4f6e, _0x4d0b2b, _0x5618d9, _0xc41800, _0x47bfc0, _0xef18a3, _0x2c1756, _0x56acc0, _0x3292a8, _0x435dea);
    } else {
      _0xd640f0.compressedTexSubImage3D(_0x1b8314, _0x3d4f6e, _0x4d0b2b, _0x5618d9, _0xc41800, _0x47bfc0, _0xef18a3, _0x2c1756, _0x56acc0, _0x42b281, _0x435dea, _0x3292a8);
    }
  }
  function _0x947dca(_0x493245, _0x4077f0, _0x5c225c, _0x2253ea, _0x57536d) {
    _0xd640f0.copyBufferSubData(_0x493245, _0x4077f0, _0x5c225c, _0x2253ea, _0x57536d);
  }
  function _0x345ff7(_0x58a346, _0x180ac6, _0x99f64d, _0x2ea36e, _0x577b0d, _0x2412bc, _0x4cea7a, _0x4329b8) {
    _0xd640f0.copyTexImage2D(_0x58a346, _0x180ac6, _0x99f64d, _0x2ea36e, _0x577b0d, _0x2412bc, _0x4cea7a, _0x4329b8);
  }
  function _0x4cf257(_0x2cfa99, _0x37a35a, _0x4f9f8e, _0x1b8dfb, _0x4c9d2c, _0x329460, _0x4a6390, _0x3b13bb) {
    _0xd640f0.copyTexSubImage2D(_0x2cfa99, _0x37a35a, _0x4f9f8e, _0x1b8dfb, _0x4c9d2c, _0x329460, _0x4a6390, _0x3b13bb);
  }
  function _0xc1d983() {
    var _0x1e1a74 = _0xa194ab.getNewId(_0xa194ab.programs);
    var _0x3c3407 = _0xd640f0.createProgram();
    _0x3c3407.name = _0x1e1a74;
    _0x3c3407.maxUniformLength = _0x3c3407.maxAttributeLength = _0x3c3407.maxUniformBlockNameLength = 0;
    _0x3c3407.uniformIdCounter = 1;
    _0xa194ab.programs[_0x1e1a74] = _0x3c3407;
    return _0x1e1a74;
  }
  function _0x587c81(_0x220f2e) {
    var _0x3a0113 = _0xa194ab.getNewId(_0xa194ab.shaders);
    _0xa194ab.shaders[_0x3a0113] = _0xd640f0.createShader(_0x220f2e);
    _0xa194ab.shaders[_0x3a0113].shaderType = _0x220f2e & 1 ? "vs" : "fs";
    return _0x3a0113;
  }
  function _0x3debfa(_0x26aabf) {
    _0xd640f0.cullFace(_0x26aabf);
  }
  function _0x42e647(_0x55b5a1, _0x4a17cf) {
    for (var _0x490e84 = 0; _0x490e84 < _0x55b5a1; _0x490e84++) {
      var _0x1c2cc6 = _0x2c6e39[_0x4a17cf + _0x490e84 * 4 >> 2];
      var _0x3dc41f = _0xa194ab.buffers[_0x1c2cc6];
      if (!_0x3dc41f) {
        continue;
      }
      _0xd640f0.deleteBuffer(_0x3dc41f);
      _0x3dc41f.name = 0;
      _0xa194ab.buffers[_0x1c2cc6] = null;
      if (_0x1c2cc6 == _0xd640f0.currentArrayBufferBinding) {
        _0xd640f0.currentArrayBufferBinding = 0;
      }
      if (_0x1c2cc6 == _0xd640f0.currentElementArrayBufferBinding) {
        _0xd640f0.currentElementArrayBufferBinding = 0;
      }
      if (_0x1c2cc6 == _0xd640f0.currentPixelPackBufferBinding) {
        _0xd640f0.currentPixelPackBufferBinding = 0;
      }
      if (_0x1c2cc6 == _0xd640f0.currentPixelUnpackBufferBinding) {
        _0xd640f0.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0x549074(_0x4da2a9, _0x1b7d8b) {
    for (var _0xfd8b14 = 0; _0xfd8b14 < _0x4da2a9; ++_0xfd8b14) {
      var _0x37bd17 = _0x2c6e39[_0x1b7d8b + _0xfd8b14 * 4 >> 2];
      var _0x2ce24d = _0xa194ab.framebuffers[_0x37bd17];
      if (!_0x2ce24d) {
        continue;
      }
      _0xd640f0.deleteFramebuffer(_0x2ce24d);
      _0x2ce24d.name = 0;
      _0xa194ab.framebuffers[_0x37bd17] = null;
    }
  }
  function _0x239926(_0x82852f) {
    if (!_0x82852f) {
      return;
    }
    var _0x28428e = _0xa194ab.programs[_0x82852f];
    if (!_0x28428e) {
      _0xa194ab.recordError(1281);
      return;
    }
    _0xd640f0.deleteProgram(_0x28428e);
    _0x28428e.name = 0;
    _0xa194ab.programs[_0x82852f] = null;
  }
  function _0xc8f6be(_0x32ca24, _0x541d5a) {
    for (var _0x1699c3 = 0; _0x1699c3 < _0x32ca24; _0x1699c3++) {
      var _0x3f1faf = _0x2c6e39[_0x541d5a + _0x1699c3 * 4 >> 2];
      var _0x17c9b5 = _0xa194ab.queries[_0x3f1faf];
      if (!_0x17c9b5) {
        continue;
      }
      _0xd640f0.deleteQuery(_0x17c9b5);
      _0xa194ab.queries[_0x3f1faf] = null;
    }
  }
  function _0x2780ac(_0x127c81, _0x8ba4dd) {
    for (var _0x1a3081 = 0; _0x1a3081 < _0x127c81; _0x1a3081++) {
      var _0x1b85a1 = _0x2c6e39[_0x8ba4dd + _0x1a3081 * 4 >> 2];
      var _0x4e8ab3 = _0xa194ab.renderbuffers[_0x1b85a1];
      if (!_0x4e8ab3) {
        continue;
      }
      _0xd640f0.deleteRenderbuffer(_0x4e8ab3);
      _0x4e8ab3.name = 0;
      _0xa194ab.renderbuffers[_0x1b85a1] = null;
    }
  }
  function _0x352785(_0x2509ed, _0x35fb83) {
    for (var _0x20119a = 0; _0x20119a < _0x2509ed; _0x20119a++) {
      var _0x4663a7 = _0x2c6e39[_0x35fb83 + _0x20119a * 4 >> 2];
      var _0x529538 = _0xa194ab.samplers[_0x4663a7];
      if (!_0x529538) {
        continue;
      }
      _0xd640f0.deleteSampler(_0x529538);
      _0x529538.name = 0;
      _0xa194ab.samplers[_0x4663a7] = null;
    }
  }
  function _0x4e1029(_0x1dd9f5) {
    if (!_0x1dd9f5) {
      return;
    }
    var _0x380df0 = _0xa194ab.shaders[_0x1dd9f5];
    if (!_0x380df0) {
      _0xa194ab.recordError(1281);
      return;
    }
    _0xd640f0.deleteShader(_0x380df0);
    _0xa194ab.shaders[_0x1dd9f5] = null;
  }
  function _0x3f6f47(_0xb6a7ef) {
    if (!_0xb6a7ef) {
      return;
    }
    var _0x2a7042 = _0xa194ab.syncs[_0xb6a7ef];
    if (!_0x2a7042) {
      _0xa194ab.recordError(1281);
      return;
    }
    _0xd640f0.deleteSync(_0x2a7042);
    _0x2a7042.name = 0;
    _0xa194ab.syncs[_0xb6a7ef] = null;
  }
  function _0x2b5e1c(_0x9df9a0, _0x182ef8) {
    for (var _0x3da001 = 0; _0x3da001 < _0x9df9a0; _0x3da001++) {
      var _0x57a98c = _0x2c6e39[_0x182ef8 + _0x3da001 * 4 >> 2];
      var _0xa129cf = _0xa194ab.textures[_0x57a98c];
      if (!_0xa129cf) {
        continue;
      }
      _0xd640f0.deleteTexture(_0xa129cf);
      _0xa129cf.name = 0;
      _0xa194ab.textures[_0x57a98c] = null;
    }
  }
  function _0x1f106e(_0x462bf4, _0x478f7b) {
    for (var _0x3211bf = 0; _0x3211bf < _0x462bf4; _0x3211bf++) {
      var _0x16c2ff = _0x2c6e39[_0x478f7b + _0x3211bf * 4 >> 2];
      var _0xbf19cb = _0xa194ab.transformFeedbacks[_0x16c2ff];
      if (!_0xbf19cb) {
        continue;
      }
      _0xd640f0.deleteTransformFeedback(_0xbf19cb);
      _0xbf19cb.name = 0;
      _0xa194ab.transformFeedbacks[_0x16c2ff] = null;
    }
  }
  function _0x561c17(_0xcd2cf4, _0x38962a) {
    for (var _0x37cc1c = 0; _0x37cc1c < _0xcd2cf4; _0x37cc1c++) {
      var _0x5a05f2 = _0x2c6e39[_0x38962a + _0x37cc1c * 4 >> 2];
      _0xd640f0.deleteVertexArray(_0xa194ab.vaos[_0x5a05f2]);
      _0xa194ab.vaos[_0x5a05f2] = null;
    }
  }
  function _0x1d48ad(_0x2a6af8) {
    _0xd640f0.depthFunc(_0x2a6af8);
  }
  function _0xb97b06(_0x3345f5) {
    _0xd640f0.depthMask(!!_0x3345f5);
  }
  function _0x5b1924(_0x15c31a, _0x542d89) {
    _0xd640f0.detachShader(_0xa194ab.programs[_0x15c31a], _0xa194ab.shaders[_0x542d89]);
  }
  function _0x1e2743(_0x20a168) {
    _0xd640f0.disable(_0x20a168);
  }
  function _0x4d214a(_0x22eb4d) {
    var _0x414232 = _0xa194ab.currentContext.clientBuffers[_0x22eb4d];
    _0x414232.enabled = false;
    _0xd640f0.disableVertexAttribArray(_0x22eb4d);
  }
  function _0xb4a8ab(_0x5aa8a5, _0x5ededc, _0x295f34) {
    _0xa194ab.preDrawHandleClientVertexAttribBindings(_0x5ededc + _0x295f34);
    _0xd640f0.drawArrays(_0x5aa8a5, _0x5ededc, _0x295f34);
    _0xa194ab.postDrawHandleClientVertexAttribBindings();
  }
  function _0xfe0a42(_0x514c28, _0x7e82d9, _0xe83642, _0x3b82e0) {
    _0xd640f0.drawArraysInstanced(_0x514c28, _0x7e82d9, _0xe83642, _0x3b82e0);
  }
  var _0x12aaaf = [];
  function _0x3454a6(_0x257888, _0x3bccf3) {
    var _0x120164 = _0x12aaaf[_0x257888];
    for (var _0x6cc8e1 = 0; _0x6cc8e1 < _0x257888; _0x6cc8e1++) {
      _0x120164[_0x6cc8e1] = _0x2c6e39[_0x3bccf3 + _0x6cc8e1 * 4 >> 2];
    }
    _0xd640f0.drawBuffers(_0x120164);
  }
  function _0x2a2b9e(_0x58e5a6, _0x13a93b, _0x212214, _0x3471eb) {
    var _0xdb814a;
    if (!_0xd640f0.currentElementArrayBufferBinding) {
      var _0xaeaa04 = _0xa194ab.calcBufLength(1, _0x212214, 0, _0x13a93b);
      _0xdb814a = _0xa194ab.getTempIndexBuffer(_0xaeaa04);
      _0xd640f0.bindBuffer(34963, _0xdb814a);
      _0xd640f0.bufferSubData(34963, 0, _0x42b281.subarray(_0x3471eb, _0x3471eb + _0xaeaa04));
      _0x3471eb = 0;
    }
    _0xa194ab.preDrawHandleClientVertexAttribBindings(_0x13a93b);
    _0xd640f0.drawElements(_0x58e5a6, _0x13a93b, _0x212214, _0x3471eb);
    _0xa194ab.postDrawHandleClientVertexAttribBindings(_0x13a93b);
    if (!_0xd640f0.currentElementArrayBufferBinding) {
      _0xd640f0.bindBuffer(34963, null);
    }
  }
  function _0x5a69af(_0x2c3b1c, _0x22de5b, _0x592839, _0xa0f272, _0x40cfab) {
    _0xd640f0.drawElementsInstanced(_0x2c3b1c, _0x22de5b, _0x592839, _0xa0f272, _0x40cfab);
  }
  function _0x16adff(_0xfa9ba6) {
    _0xd640f0.enable(_0xfa9ba6);
  }
  function _0x4bc4ee(_0x3bcb16) {
    var _0x370c71 = _0xa194ab.currentContext.clientBuffers[_0x3bcb16];
    _0x370c71.enabled = true;
    _0xd640f0.enableVertexAttribArray(_0x3bcb16);
  }
  function _0x45c49a(_0x2a4a07) {
    _0xd640f0.endQuery(_0x2a4a07);
  }
  function _0x56360b() {
    _0xd640f0.endTransformFeedback();
  }
  function _0x1f53e0(_0x3480d9, _0x1c16c8) {
    var _0x1595ae = _0xd640f0.fenceSync(_0x3480d9, _0x1c16c8);
    if (_0x1595ae) {
      var _0x31d810 = _0xa194ab.getNewId(_0xa194ab.syncs);
      _0x1595ae.name = _0x31d810;
      _0xa194ab.syncs[_0x31d810] = _0x1595ae;
      return _0x31d810;
    } else {
      return 0;
    }
  }
  function _0x26312d() {
    _0xd640f0.finish();
  }
  function _0x3a0add() {
    _0xd640f0.flush();
  }
  function _0x104b74(_0x1cdb3c) {
    switch (_0x1cdb3c) {
      case 34962:
        _0x1cdb3c = 34964;
        break;
      case 34963:
        _0x1cdb3c = 34965;
        break;
      case 35051:
        _0x1cdb3c = 35053;
        break;
      case 35052:
        _0x1cdb3c = 35055;
        break;
      case 35982:
        _0x1cdb3c = 35983;
        break;
      case 36662:
        _0x1cdb3c = 36662;
        break;
      case 36663:
        _0x1cdb3c = 36663;
        break;
      case 35345:
        _0x1cdb3c = 35368;
        break;
    }
    var _0x45e3da = _0xd640f0.getParameter(_0x1cdb3c);
    if (_0x45e3da) {
      return _0x45e3da.name | 0;
    } else {
      return 0;
    }
  }
  function _0x224357(_0x28f550) {
    switch (_0x28f550) {
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
  function _0x39d7ab(_0x5e593e, _0x12cde9, _0xf66ad2) {
    if (!_0x224357(_0x5e593e)) {
      _0xa194ab.recordError(1280);
      _0x5c756b("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0x15f68e = _0xa194ab.mappedBuffers[_0x104b74(_0x5e593e)];
    if (!_0x15f68e) {
      _0xa194ab.recordError(1282);
      _0x5c756b("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0x15f68e.access & 16)) {
      _0xa194ab.recordError(1282);
      _0x5c756b("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x12cde9 < 0 || _0xf66ad2 < 0 || _0x12cde9 + _0xf66ad2 > _0x15f68e.length) {
      _0xa194ab.recordError(1281);
      _0x5c756b("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0xd640f0.bufferSubData(_0x5e593e, _0x15f68e.offset, _0x42b281.subarray(_0x15f68e.mem + _0x12cde9, _0x15f68e.mem + _0x12cde9 + _0xf66ad2));
  }
  function _0x57f797(_0x5aad44, _0x16aa96, _0x51215e, _0x3ac0bf) {
    _0xd640f0.framebufferRenderbuffer(_0x5aad44, _0x16aa96, _0x51215e, _0xa194ab.renderbuffers[_0x3ac0bf]);
  }
  function _0x31ea62(_0x456f51, _0x3571fb, _0x59462c, _0x35ec16, _0x1d14ba) {
    _0xd640f0.framebufferTexture2D(_0x456f51, _0x3571fb, _0x59462c, _0xa194ab.textures[_0x35ec16], _0x1d14ba);
  }
  function _0x49109a(_0x5388e8, _0xcbdbdf, _0x3d36f5, _0xb571cc, _0x4b9c1d) {
    _0xd640f0.framebufferTextureLayer(_0x5388e8, _0xcbdbdf, _0xa194ab.textures[_0x3d36f5], _0xb571cc, _0x4b9c1d);
  }
  function _0x1a9c9e(_0x3cbc5b) {
    _0xd640f0.frontFace(_0x3cbc5b);
  }
  function _0x5a8245(_0x3b6d96, _0x277563, _0xd8b8e4, _0x57f3e2) {
    for (var _0x181d1b = 0; _0x181d1b < _0x3b6d96; _0x181d1b++) {
      var _0x23426e = _0xd640f0[_0xd8b8e4]();
      var _0x1f21dc = _0x23426e && _0xa194ab.getNewId(_0x57f3e2);
      if (_0x23426e) {
        _0x23426e.name = _0x1f21dc;
        _0x57f3e2[_0x1f21dc] = _0x23426e;
      } else {
        _0xa194ab.recordError(1282);
      }
      _0x2c6e39[_0x277563 + _0x181d1b * 4 >> 2] = _0x1f21dc;
    }
  }
  function _0x23b02e(_0x90b16a, _0x1fac1f) {
    _0x5a8245(_0x90b16a, _0x1fac1f, "createBuffer", _0xa194ab.buffers);
  }
  function _0x1f0f0e(_0x2ddc5a, _0x19e9e7) {
    _0x5a8245(_0x2ddc5a, _0x19e9e7, "createFramebuffer", _0xa194ab.framebuffers);
  }
  function _0x448cd2(_0x39eb8b, _0x287299) {
    _0x5a8245(_0x39eb8b, _0x287299, "createQuery", _0xa194ab.queries);
  }
  function _0x58d838(_0x41c940, _0x379b1d) {
    _0x5a8245(_0x41c940, _0x379b1d, "createRenderbuffer", _0xa194ab.renderbuffers);
  }
  function _0x535bca(_0x285bc5, _0x30b1c2) {
    _0x5a8245(_0x285bc5, _0x30b1c2, "createSampler", _0xa194ab.samplers);
  }
  function _0x5be91b(_0x5f2af2, _0x2073ae) {
    _0x5a8245(_0x5f2af2, _0x2073ae, "createTexture", _0xa194ab.textures);
  }
  function _0x14a668(_0x1f7e3f, _0x4e6d53) {
    _0x5a8245(_0x1f7e3f, _0x4e6d53, "createTransformFeedback", _0xa194ab.transformFeedbacks);
  }
  function _0x1777a3(_0x3602fc, _0x163b96) {
    _0x5a8245(_0x3602fc, _0x163b96, "createVertexArray", _0xa194ab.vaos);
  }
  function _0x1cb8b4(_0x467095) {
    _0xd640f0.generateMipmap(_0x467095);
  }
  function _0x55743d(_0xb77188, _0x7c3b33, _0x6a927, _0x243844, _0x35b0fe, _0x180d17, _0x253c08, _0x457a2f) {
    _0x7c3b33 = _0xa194ab.programs[_0x7c3b33];
    var _0x1900a4 = _0xd640f0[_0xb77188](_0x7c3b33, _0x6a927);
    if (_0x1900a4) {
      var _0x2594cd = _0x457a2f && _0x3c7021(_0x1900a4.name, _0x457a2f, _0x243844);
      if (_0x35b0fe) {
        _0x2c6e39[_0x35b0fe >> 2] = _0x2594cd;
      }
      if (_0x180d17) {
        _0x2c6e39[_0x180d17 >> 2] = _0x1900a4.size;
      }
      if (_0x253c08) {
        _0x2c6e39[_0x253c08 >> 2] = _0x1900a4.type;
      }
    }
  }
  function _0x11986a(_0x21f1e3, _0x4c49e6, _0x434169, _0x1b8b82, _0x23aca4, _0x159ef8, _0x2451cd) {
    _0x55743d("getActiveAttrib", _0x21f1e3, _0x4c49e6, _0x434169, _0x1b8b82, _0x23aca4, _0x159ef8, _0x2451cd);
  }
  function _0x11ff6c(_0x48239d, _0x1cd0a3, _0x2fff42, _0x9b9b97, _0x3be47e, _0x1c4542, _0x21d817) {
    _0x55743d("getActiveUniform", _0x48239d, _0x1cd0a3, _0x2fff42, _0x9b9b97, _0x3be47e, _0x1c4542, _0x21d817);
  }
  function _0x47aa64(_0x52214d, _0x2748fe, _0x38b7e9, _0x62cae4, _0x537d06) {
    _0x52214d = _0xa194ab.programs[_0x52214d];
    var _0x487415 = _0xd640f0.getActiveUniformBlockName(_0x52214d, _0x2748fe);
    if (!_0x487415) {
      return;
    }
    if (_0x537d06 && _0x38b7e9 > 0) {
      var _0x308f23 = _0x3c7021(_0x487415, _0x537d06, _0x38b7e9);
      if (_0x62cae4) {
        _0x2c6e39[_0x62cae4 >> 2] = _0x308f23;
      }
    } else if (_0x62cae4) {
      _0x2c6e39[_0x62cae4 >> 2] = 0;
    }
  }
  function _0x419b14(_0x1c185f, _0x1e6228, _0x169f25, _0x274bc9) {
    if (!_0x274bc9) {
      _0xa194ab.recordError(1281);
      return;
    }
    _0x1c185f = _0xa194ab.programs[_0x1c185f];
    if (_0x169f25 == 35393) {
      var _0x51dfef = _0xd640f0.getActiveUniformBlockName(_0x1c185f, _0x1e6228);
      _0x2c6e39[_0x274bc9 >> 2] = _0x51dfef.length + 1;
      return;
    }
    var _0x56f054 = _0xd640f0.getActiveUniformBlockParameter(_0x1c185f, _0x1e6228, _0x169f25);
    if (_0x56f054 === null) {
      return;
    }
    if (_0x169f25 == 35395) {
      for (var _0x364677 = 0; _0x364677 < _0x56f054.length; _0x364677++) {
        _0x2c6e39[_0x274bc9 + _0x364677 * 4 >> 2] = _0x56f054[_0x364677];
      }
    } else {
      _0x2c6e39[_0x274bc9 >> 2] = _0x56f054;
    }
  }
  function _0x161889(_0x514208, _0x5d90e3, _0x355f0e, _0x46b6de, _0x33f49a) {
    if (!_0x33f49a) {
      _0xa194ab.recordError(1281);
      return;
    }
    if (_0x5d90e3 > 0 && _0x355f0e == 0) {
      _0xa194ab.recordError(1281);
      return;
    }
    _0x514208 = _0xa194ab.programs[_0x514208];
    var _0x135021 = [];
    for (var _0x278ba1 = 0; _0x278ba1 < _0x5d90e3; _0x278ba1++) {
      _0x135021.push(_0x2c6e39[_0x355f0e + _0x278ba1 * 4 >> 2]);
    }
    var _0x505d53 = _0xd640f0.getActiveUniforms(_0x514208, _0x135021, _0x46b6de);
    if (!_0x505d53) {
      return;
    }
    var _0x1d798e = _0x505d53.length;
    for (var _0x278ba1 = 0; _0x278ba1 < _0x1d798e; _0x278ba1++) {
      _0x2c6e39[_0x33f49a + _0x278ba1 * 4 >> 2] = _0x505d53[_0x278ba1];
    }
  }
  function _0x5b8390(_0x1bbd05, _0x153421) {
    return _0xd640f0.getAttribLocation(_0xa194ab.programs[_0x1bbd05], _0xa8c6ca(_0x153421));
  }
  function _0x194093(_0x4967d2, _0x2c8703, _0x541282, _0x23b2ef) {
    if (!_0x23b2ef) {
      _0xa194ab.recordError(1281);
      return;
    }
    _0xd640f0.getBufferSubData(_0x4967d2, _0x2c8703, _0x42b281, _0x23b2ef, _0x541282);
  }
  function _0x22c1f6() {
    var _0xf67e5 = _0xd640f0.getError() || _0xa194ab.lastError;
    _0xa194ab.lastError = 0;
    return _0xf67e5;
  }
  function _0x3b4a06(_0x15b960, _0x491b5d, _0x13d24d, _0x5e6946) {
    var _0x53d5c5 = _0xd640f0.getFramebufferAttachmentParameter(_0x15b960, _0x491b5d, _0x13d24d);
    if (_0x53d5c5 instanceof WebGLRenderbuffer || _0x53d5c5 instanceof WebGLTexture) {
      _0x53d5c5 = _0x53d5c5.name | 0;
    }
    _0x2c6e39[_0x5e6946 >> 2] = _0x53d5c5;
  }
  function _0x147c95(_0x2d0bd5, _0x224ce5) {
    _0x4d8b01[_0x2d0bd5 >> 2] = _0x224ce5;
    _0x4d8b01[_0x2d0bd5 + 4 >> 2] = (_0x224ce5 - _0x4d8b01[_0x2d0bd5 >> 2]) / 4294967296;
  }
  function _0x2921eb(_0x438877, _0x3ab5cc, _0x8e33c9, _0x5ce174) {
    if (!_0x8e33c9) {
      _0xa194ab.recordError(1281);
      return;
    }
    var _0x20e150 = _0xd640f0.getIndexedParameter(_0x438877, _0x3ab5cc);
    var _0x3aea22;
    switch (typeof _0x20e150) {
      case "boolean":
        _0x3aea22 = _0x20e150 ? 1 : 0;
        break;
      case "number":
        _0x3aea22 = _0x20e150;
        break;
      case "object":
        if (_0x20e150 === null) {
          switch (_0x438877) {
            case 35983:
            case 35368:
              _0x3aea22 = 0;
              break;
            default:
              {
                _0xa194ab.recordError(1280);
                return;
              }
          }
        } else if (_0x20e150 instanceof WebGLBuffer) {
          _0x3aea22 = _0x20e150.name | 0;
        } else {
          _0xa194ab.recordError(1280);
          return;
        }
        break;
      default:
        _0xa194ab.recordError(1280);
        return;
    }
    switch (_0x5ce174) {
      case 1:
        _0x147c95(_0x8e33c9, _0x3aea22);
        break;
      case 0:
        _0x2c6e39[_0x8e33c9 >> 2] = _0x3aea22;
        break;
      case 2:
        _0xaf0aab[_0x8e33c9 >> 2] = _0x3aea22;
        break;
      case 4:
        _0x51d7cf[_0x8e33c9 >> 0] = _0x3aea22 ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x5ce174;
    }
  }
  function _0x36b2bd(_0x2587a4, _0x22faff, _0x20189e) {
    _0x2921eb(_0x2587a4, _0x22faff, _0x20189e, 0);
  }
  function _0xc85886(_0xe6ea8c, _0x374ea7, _0x268e05) {
    if (!_0x374ea7) {
      _0xa194ab.recordError(1281);
      return;
    }
    var _0x312824 = undefined;
    switch (_0xe6ea8c) {
      case 36346:
        _0x312824 = 1;
        break;
      case 36344:
        if (_0x268e05 != 0 && _0x268e05 != 1) {
          _0xa194ab.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0x312824 = 0;
        break;
      case 34466:
        var _0x2a9aec = _0xd640f0.getParameter(34467);
        _0x312824 = _0x2a9aec ? _0x2a9aec.length : 0;
        break;
      case 33390:
        _0x312824 = 1048576;
        break;
      case 33309:
        if (_0xa194ab.currentContext.version < 2) {
          _0xa194ab.recordError(1282);
          return;
        }
        var _0x40ec8e = _0xd640f0.getSupportedExtensions() || [];
        _0x312824 = _0x40ec8e.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0xa194ab.currentContext.version < 2) {
          _0xa194ab.recordError(1280);
          return;
        }
        _0x312824 = _0xe6ea8c == 33307 ? 3 : 0;
        break;
    }
    if (_0x312824 === undefined) {
      var _0x463052 = _0xd640f0.getParameter(_0xe6ea8c);
      switch (typeof _0x463052) {
        case "number":
          _0x312824 = _0x463052;
          break;
        case "boolean":
          _0x312824 = _0x463052 ? 1 : 0;
          break;
        case "string":
          _0xa194ab.recordError(1280);
          return;
        case "object":
          if (_0x463052 === null) {
            switch (_0xe6ea8c) {
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
                  _0x312824 = 0;
                  break;
                }
              default:
                {
                  _0xa194ab.recordError(1280);
                  return;
                }
            }
          } else if (_0x463052 instanceof Float32Array || _0x463052 instanceof Uint32Array || _0x463052 instanceof Int32Array || _0x463052 instanceof Array) {
            for (var _0x28b2d1 = 0; _0x28b2d1 < _0x463052.length; ++_0x28b2d1) {
              switch (_0x268e05) {
                case 0:
                  _0x2c6e39[_0x374ea7 + _0x28b2d1 * 4 >> 2] = _0x463052[_0x28b2d1];
                  break;
                case 2:
                  _0xaf0aab[_0x374ea7 + _0x28b2d1 * 4 >> 2] = _0x463052[_0x28b2d1];
                  break;
                case 4:
                  _0x51d7cf[_0x374ea7 + _0x28b2d1 >> 0] = _0x463052[_0x28b2d1] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0x312824 = _0x463052.name | 0;
            } catch (_0x2ae85b) {
              _0xa194ab.recordError(1280);
              _0x5c756b("GL_INVALID_ENUM in glGet" + _0x268e05 + "v: Unknown object returned from WebGL getParameter(" + _0xe6ea8c + ")! (error: " + _0x2ae85b + ")");
              return;
            }
          }
          break;
        default:
          _0xa194ab.recordError(1280);
          _0x5c756b("GL_INVALID_ENUM in glGet" + _0x268e05 + "v: Native code calling glGet" + _0x268e05 + "v(" + _0xe6ea8c + ") and it returns " + _0x463052 + " of type " + typeof _0x463052 + "!");
          return;
      }
    }
    switch (_0x268e05) {
      case 1:
        _0x147c95(_0x374ea7, _0x312824);
        break;
      case 0:
        _0x2c6e39[_0x374ea7 >> 2] = _0x312824;
        break;
      case 2:
        _0xaf0aab[_0x374ea7 >> 2] = _0x312824;
        break;
      case 4:
        _0x51d7cf[_0x374ea7 >> 0] = _0x312824 ? 1 : 0;
        break;
    }
  }
  function _0xf43afe(_0x2fbacc, _0x2e3019) {
    _0xc85886(_0x2fbacc, _0x2e3019, 0);
  }
  function _0x356b31(_0x632c54, _0x250921, _0x556ee0, _0x511a25, _0x317d01) {
    if (_0x511a25 < 0) {
      _0xa194ab.recordError(1281);
      return;
    }
    if (!_0x317d01) {
      _0xa194ab.recordError(1281);
      return;
    }
    var _0x40c228 = _0xd640f0.getInternalformatParameter(_0x632c54, _0x250921, _0x556ee0);
    if (_0x40c228 === null) {
      return;
    }
    for (var _0x371ead = 0; _0x371ead < _0x40c228.length && _0x371ead < _0x511a25; ++_0x371ead) {
      _0x2c6e39[_0x317d01 + _0x371ead * 4 >> 2] = _0x40c228[_0x371ead];
    }
  }
  function _0x17656c(_0x490dbb, _0x3a1594, _0xa7b244, _0x36989d, _0x2c7e97) {
    _0xa194ab.recordError(1282);
  }
  function _0x1e4ade(_0x101857, _0x39d355, _0x2ae1a3, _0x244666) {
    var _0x5f2396 = _0xd640f0.getProgramInfoLog(_0xa194ab.programs[_0x101857]);
    if (_0x5f2396 === null) {
      _0x5f2396 = "(unknown error)";
    }
    var _0xec816c = _0x39d355 > 0 && _0x244666 ? _0x3c7021(_0x5f2396, _0x244666, _0x39d355) : 0;
    if (_0x2ae1a3) {
      _0x2c6e39[_0x2ae1a3 >> 2] = _0xec816c;
    }
  }
  function _0x34afcc(_0x5b5ec0, _0x1a17e5, _0x5970a4) {
    if (!_0x5970a4) {
      _0xa194ab.recordError(1281);
      return;
    }
    if (_0x5b5ec0 >= _0xa194ab.counter) {
      _0xa194ab.recordError(1281);
      return;
    }
    _0x5b5ec0 = _0xa194ab.programs[_0x5b5ec0];
    if (_0x1a17e5 == 35716) {
      var _0x38e1a7 = _0xd640f0.getProgramInfoLog(_0x5b5ec0);
      if (_0x38e1a7 === null) {
        _0x38e1a7 = "(unknown error)";
      }
      _0x2c6e39[_0x5970a4 >> 2] = _0x38e1a7.length + 1;
    } else if (_0x1a17e5 == 35719) {
      if (!_0x5b5ec0.maxUniformLength) {
        for (var _0x227550 = 0; _0x227550 < _0xd640f0.getProgramParameter(_0x5b5ec0, 35718); ++_0x227550) {
          _0x5b5ec0.maxUniformLength = Math.max(_0x5b5ec0.maxUniformLength, _0xd640f0.getActiveUniform(_0x5b5ec0, _0x227550).name.length + 1);
        }
      }
      _0x2c6e39[_0x5970a4 >> 2] = _0x5b5ec0.maxUniformLength;
    } else if (_0x1a17e5 == 35722) {
      if (!_0x5b5ec0.maxAttributeLength) {
        for (var _0x227550 = 0; _0x227550 < _0xd640f0.getProgramParameter(_0x5b5ec0, 35721); ++_0x227550) {
          _0x5b5ec0.maxAttributeLength = Math.max(_0x5b5ec0.maxAttributeLength, _0xd640f0.getActiveAttrib(_0x5b5ec0, _0x227550).name.length + 1);
        }
      }
      _0x2c6e39[_0x5970a4 >> 2] = _0x5b5ec0.maxAttributeLength;
    } else if (_0x1a17e5 == 35381) {
      if (!_0x5b5ec0.maxUniformBlockNameLength) {
        for (var _0x227550 = 0; _0x227550 < _0xd640f0.getProgramParameter(_0x5b5ec0, 35382); ++_0x227550) {
          _0x5b5ec0.maxUniformBlockNameLength = Math.max(_0x5b5ec0.maxUniformBlockNameLength, _0xd640f0.getActiveUniformBlockName(_0x5b5ec0, _0x227550).length + 1);
        }
      }
      _0x2c6e39[_0x5970a4 >> 2] = _0x5b5ec0.maxUniformBlockNameLength;
    } else {
      _0x2c6e39[_0x5970a4 >> 2] = _0xd640f0.getProgramParameter(_0x5b5ec0, _0x1a17e5);
    }
  }
  function _0x975ae9(_0x389075, _0x1c6287, _0x19cb83) {
    if (!_0x19cb83) {
      _0xa194ab.recordError(1281);
      return;
    }
    var _0x1d3013 = _0xa194ab.queries[_0x389075];
    var _0x24e261 = _0xd640f0.getQueryParameter(_0x1d3013, _0x1c6287);
    var _0x5853e5;
    if (typeof _0x24e261 == "boolean") {
      _0x5853e5 = _0x24e261 ? 1 : 0;
    } else {
      _0x5853e5 = _0x24e261;
    }
    _0x2c6e39[_0x19cb83 >> 2] = _0x5853e5;
  }
  function _0x4b2647(_0x9599e6, _0x2e7dd3, _0xcd072) {
    if (!_0xcd072) {
      _0xa194ab.recordError(1281);
      return;
    }
    _0x2c6e39[_0xcd072 >> 2] = _0xd640f0.getQuery(_0x9599e6, _0x2e7dd3);
  }
  function _0x16c301(_0x31a4cc, _0x48ae5d, _0xe8b7ec) {
    if (!_0xe8b7ec) {
      _0xa194ab.recordError(1281);
      return;
    }
    _0x2c6e39[_0xe8b7ec >> 2] = _0xd640f0.getRenderbufferParameter(_0x31a4cc, _0x48ae5d);
  }
  function _0x3385de(_0x101a8a, _0x5ebc51, _0x1d433d, _0x500fd4) {
    var _0x3351e1 = _0xd640f0.getShaderInfoLog(_0xa194ab.shaders[_0x101a8a]);
    if (_0x3351e1 === null) {
      _0x3351e1 = "(unknown error)";
    }
    var _0x2f17cb = _0x5ebc51 > 0 && _0x500fd4 ? _0x3c7021(_0x3351e1, _0x500fd4, _0x5ebc51) : 0;
    if (_0x1d433d) {
      _0x2c6e39[_0x1d433d >> 2] = _0x2f17cb;
    }
  }
  function _0x4b4630(_0x49bceb, _0x5378d2, _0x44aed0, _0x549d33) {
    var _0x5d83eb = _0xd640f0.getShaderPrecisionFormat(_0x49bceb, _0x5378d2);
    _0x2c6e39[_0x44aed0 >> 2] = _0x5d83eb.rangeMin;
    _0x2c6e39[_0x44aed0 + 4 >> 2] = _0x5d83eb.rangeMax;
    _0x2c6e39[_0x549d33 >> 2] = _0x5d83eb.precision;
  }
  function _0x1f1165(_0xb78c5a, _0x385182, _0xc45a02, _0x1a633f) {
    var _0x2df98d = _0xd640f0.getShaderSource(_0xa194ab.shaders[_0xb78c5a]);
    if (!_0x2df98d) {
      return;
    }
    var _0xc36c13 = _0x385182 > 0 && _0x1a633f ? _0x3c7021(_0x2df98d, _0x1a633f, _0x385182) : 0;
    if (_0xc45a02) {
      _0x2c6e39[_0xc45a02 >> 2] = _0xc36c13;
    }
  }
  function _0x23dd13(_0x800040, _0x5e30df, _0xf748ff) {
    if (!_0xf748ff) {
      _0xa194ab.recordError(1281);
      return;
    }
    if (_0x5e30df == 35716) {
      var _0x180530 = _0xd640f0.getShaderInfoLog(_0xa194ab.shaders[_0x800040]);
      if (_0x180530 === null) {
        _0x180530 = "(unknown error)";
      }
      var _0x576143 = _0x180530 ? _0x180530.length + 1 : 0;
      _0x2c6e39[_0xf748ff >> 2] = _0x576143;
    } else if (_0x5e30df == 35720) {
      var _0x425f73 = _0xd640f0.getShaderSource(_0xa194ab.shaders[_0x800040]);
      var _0x3a3412 = _0x425f73 ? _0x425f73.length + 1 : 0;
      _0x2c6e39[_0xf748ff >> 2] = _0x3a3412;
    } else {
      _0x2c6e39[_0xf748ff >> 2] = _0xd640f0.getShaderParameter(_0xa194ab.shaders[_0x800040], _0x5e30df);
    }
  }
  function _0x51eb00(_0xd25c33) {
    var _0x5062d2 = _0xa194ab.stringCache[_0xd25c33];
    if (!_0x5062d2) {
      switch (_0xd25c33) {
        case 7939:
          var _0x5a609b = _0xd640f0.getSupportedExtensions() || [];
          _0x5a609b = _0x5a609b.concat(_0x5a609b.map(function (_0x1cfa11) {
            return "GL_" + _0x1cfa11;
          }));
          _0x5062d2 = _0x5538e7(_0x5a609b.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0x3181b0 = _0xd640f0.getParameter(_0xd25c33);
          if (!_0x3181b0) {
            _0xa194ab.recordError(1280);
          }
          _0x5062d2 = _0x3181b0 && _0x5538e7(_0x3181b0);
          break;
        case 7938:
          var _0x3b6c4f = _0xd640f0.getParameter(7938);
          if (_0xa194ab.currentContext.version >= 2) {
            _0x3b6c4f = "OpenGL ES 3.0 (" + _0x3b6c4f + ")";
          } else {
            _0x3b6c4f = "OpenGL ES 2.0 (" + _0x3b6c4f + ")";
          }
          _0x5062d2 = _0x5538e7(_0x3b6c4f);
          break;
        case 35724:
          var _0x47347f = _0xd640f0.getParameter(35724);
          var _0x259470 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0x3f8b5c = _0x47347f.match(_0x259470);
          if (_0x3f8b5c !== null) {
            if (_0x3f8b5c[1].length == 3) {
              _0x3f8b5c[1] = _0x3f8b5c[1] + "0";
            }
            _0x47347f = "OpenGL ES GLSL ES " + _0x3f8b5c[1] + " (" + _0x47347f + ")";
          }
          _0x5062d2 = _0x5538e7(_0x47347f);
          break;
        default:
          _0xa194ab.recordError(1280);
      }
      _0xa194ab.stringCache[_0xd25c33] = _0x5062d2;
    }
    return _0x5062d2;
  }
  function _0x38603e(_0x3f38a4, _0x257c31) {
    if (_0xa194ab.currentContext.version < 2) {
      _0xa194ab.recordError(1282);
      return 0;
    }
    var _0x542f43 = _0xa194ab.stringiCache[_0x3f38a4];
    if (_0x542f43) {
      if (_0x257c31 < 0 || _0x257c31 >= _0x542f43.length) {
        _0xa194ab.recordError(1281);
        return 0;
      }
      return _0x542f43[_0x257c31];
    }
    switch (_0x3f38a4) {
      case 7939:
        var _0x51f9fa = _0xd640f0.getSupportedExtensions() || [];
        _0x51f9fa = _0x51f9fa.concat(_0x51f9fa.map(function (_0x9e46b0) {
          return "GL_" + _0x9e46b0;
        }));
        _0x51f9fa = _0x51f9fa.map(function (_0x13d057) {
          return _0x5538e7(_0x13d057);
        });
        _0x542f43 = _0xa194ab.stringiCache[_0x3f38a4] = _0x51f9fa;
        if (_0x257c31 < 0 || _0x257c31 >= _0x542f43.length) {
          _0xa194ab.recordError(1281);
          return 0;
        }
        return _0x542f43[_0x257c31];
      default:
        _0xa194ab.recordError(1280);
        return 0;
    }
  }
  function _0x5a32c2(_0x3d5960, _0x127cf6, _0x2bc09c) {
    if (!_0x2bc09c) {
      _0xa194ab.recordError(1281);
      return;
    }
    _0x2c6e39[_0x2bc09c >> 2] = _0xd640f0.getTexParameter(_0x3d5960, _0x127cf6);
  }
  function _0x2eacc7(_0x40824e, _0x3bb144) {
    return _0xd640f0.getUniformBlockIndex(_0xa194ab.programs[_0x40824e], _0xa8c6ca(_0x3bb144));
  }
  function _0xc7ed0f(_0x234883, _0x28a6dd, _0x38de63, _0x32ef13) {
    if (!_0x32ef13) {
      _0xa194ab.recordError(1281);
      return;
    }
    if (_0x28a6dd > 0 && (_0x38de63 == 0 || _0x32ef13 == 0)) {
      _0xa194ab.recordError(1281);
      return;
    }
    _0x234883 = _0xa194ab.programs[_0x234883];
    var _0x396964 = [];
    for (var _0x13c7c2 = 0; _0x13c7c2 < _0x28a6dd; _0x13c7c2++) {
      _0x396964.push(_0xa8c6ca(_0x2c6e39[_0x38de63 + _0x13c7c2 * 4 >> 2]));
    }
    var _0x1327ce = _0xd640f0.getUniformIndices(_0x234883, _0x396964);
    if (!_0x1327ce) {
      return;
    }
    var _0x3a4f59 = _0x1327ce.length;
    for (var _0x13c7c2 = 0; _0x13c7c2 < _0x3a4f59; _0x13c7c2++) {
      _0x2c6e39[_0x32ef13 + _0x13c7c2 * 4 >> 2] = _0x1327ce[_0x13c7c2];
    }
  }
  function _0x3bccbb(_0x1323bf, _0x1bffcd) {
    function _0x34fa89(_0x42dd74) {
      return _0x42dd74.slice(-1) == "]" && _0x42dd74.lastIndexOf("[");
    }
    _0x1bffcd = _0xa8c6ca(_0x1bffcd);
    if (_0x1323bf = _0xa194ab.programs[_0x1323bf]) {
      var _0x5623a6 = _0x1323bf.uniformLocsById;
      var _0x228004 = _0x1323bf.uniformSizeAndIdsByName;
      var _0x5224e0;
      var _0x4f5904;
      var _0x17f988 = 0;
      var _0x472b7c = _0x1bffcd;
      var _0x1e5caa = _0x34fa89(_0x1bffcd);
      if (!_0x5623a6) {
        _0x1323bf.uniformLocsById = _0x5623a6 = {};
        _0x1323bf.uniformArrayNamesById = {};
        for (_0x5224e0 = 0; _0x5224e0 < _0xd640f0.getProgramParameter(_0x1323bf, 35718); ++_0x5224e0) {
          var _0x8c11d0 = _0xd640f0.getActiveUniform(_0x1323bf, _0x5224e0);
          var _0xf7a5d6 = _0x8c11d0.name;
          var _0x43e6a9 = _0x8c11d0.size;
          var _0x24819b = _0x34fa89(_0xf7a5d6);
          var _0x1a7444 = _0x24819b > 0 ? _0xf7a5d6.slice(0, _0x24819b) : _0xf7a5d6;
          var _0x34a3b8 = _0x228004[_0x1a7444] ? _0x228004[_0x1a7444][1] : _0x1323bf.uniformIdCounter;
          _0x1323bf.uniformIdCounter = Math.max(_0x34a3b8 + _0x43e6a9, _0x1323bf.uniformIdCounter);
          _0x228004[_0x1a7444] = [_0x43e6a9, _0x34a3b8];
          for (_0x4f5904 = 0; _0x4f5904 < _0x43e6a9; ++_0x4f5904) {
            _0x5623a6[_0x34a3b8] = _0x4f5904;
            _0x1323bf.uniformArrayNamesById[_0x34a3b8++] = _0x1a7444;
          }
        }
      }
      if (_0x1e5caa > 0) {
        _0x17f988 = _0x3e7105(_0x1bffcd.slice(_0x1e5caa + 1)) >>> 0;
        _0x472b7c = _0x1bffcd.slice(0, _0x1e5caa);
      }
      var _0x143525 = _0x228004[_0x472b7c];
      if (_0x143525 && _0x17f988 < _0x143525[0]) {
        _0x17f988 += _0x143525[1];
        if (_0x5623a6[_0x17f988] = _0x5623a6[_0x17f988] || _0xd640f0.getUniformLocation(_0x1323bf, _0x1bffcd)) {
          return _0x17f988;
        }
      }
    } else {
      _0xa194ab.recordError(1281);
    }
    return -1;
  }
  function _0x4035ad(_0x2bd695) {
    var _0x460a71 = _0xd640f0.currentProgram;
    if (_0x460a71) {
      var _0xff2918 = _0x460a71.uniformLocsById[_0x2bd695];
      if (typeof _0xff2918 === "number") {
        _0x460a71.uniformLocsById[_0x2bd695] = _0xff2918 = _0xd640f0.getUniformLocation(_0x460a71, _0x460a71.uniformArrayNamesById[_0x2bd695] + (_0xff2918 > 0 ? "[" + _0xff2918 + "]" : ""));
      }
      return _0xff2918;
    } else {
      _0xa194ab.recordError(1282);
    }
  }
  function _0x5555c0(_0x54bd68, _0x5b3a81, _0x5c947c, _0x5f0fc8) {
    if (!_0x5c947c) {
      _0xa194ab.recordError(1281);
      return;
    }
    _0x54bd68 = _0xa194ab.programs[_0x54bd68];
    var _0x220830 = _0xd640f0.getUniform(_0x54bd68, _0x4035ad(_0x5b3a81));
    if (typeof _0x220830 == "number" || typeof _0x220830 == "boolean") {
      switch (_0x5f0fc8) {
        case 0:
          _0x2c6e39[_0x5c947c >> 2] = _0x220830;
          break;
        case 2:
          _0xaf0aab[_0x5c947c >> 2] = _0x220830;
          break;
      }
    } else {
      for (var _0x46b9cc = 0; _0x46b9cc < _0x220830.length; _0x46b9cc++) {
        switch (_0x5f0fc8) {
          case 0:
            _0x2c6e39[_0x5c947c + _0x46b9cc * 4 >> 2] = _0x220830[_0x46b9cc];
            break;
          case 2:
            _0xaf0aab[_0x5c947c + _0x46b9cc * 4 >> 2] = _0x220830[_0x46b9cc];
            break;
        }
      }
    }
  }
  function _0x5cda40(_0x536ce4, _0x2e8b90, _0x89c560) {
    _0x5555c0(_0x536ce4, _0x2e8b90, _0x89c560, 0);
  }
  function _0x4e194b(_0x19ab56, _0x359d67, _0x44c1e4, _0x2d2430) {
    if (!_0x44c1e4) {
      _0xa194ab.recordError(1281);
      return;
    }
    if (_0xa194ab.currentContext.clientBuffers[_0x19ab56].enabled) {
      _0x5c756b("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x33cd6a = _0xd640f0.getVertexAttrib(_0x19ab56, _0x359d67);
    if (_0x359d67 == 34975) {
      _0x2c6e39[_0x44c1e4 >> 2] = _0x33cd6a && _0x33cd6a.name;
    } else if (typeof _0x33cd6a == "number" || typeof _0x33cd6a == "boolean") {
      switch (_0x2d2430) {
        case 0:
          _0x2c6e39[_0x44c1e4 >> 2] = _0x33cd6a;
          break;
        case 2:
          _0xaf0aab[_0x44c1e4 >> 2] = _0x33cd6a;
          break;
        case 5:
          _0x2c6e39[_0x44c1e4 >> 2] = Math.fround(_0x33cd6a);
          break;
      }
    } else {
      for (var _0x4d4993 = 0; _0x4d4993 < _0x33cd6a.length; _0x4d4993++) {
        switch (_0x2d2430) {
          case 0:
            _0x2c6e39[_0x44c1e4 + _0x4d4993 * 4 >> 2] = _0x33cd6a[_0x4d4993];
            break;
          case 2:
            _0xaf0aab[_0x44c1e4 + _0x4d4993 * 4 >> 2] = _0x33cd6a[_0x4d4993];
            break;
          case 5:
            _0x2c6e39[_0x44c1e4 + _0x4d4993 * 4 >> 2] = Math.fround(_0x33cd6a[_0x4d4993]);
            break;
        }
      }
    }
  }
  function _0x2b322b(_0x3ebbbf, _0x4fa4ce, _0x113cf8) {
    _0x4e194b(_0x3ebbbf, _0x4fa4ce, _0x113cf8, 5);
  }
  function _0x272421(_0x310c0e, _0x1d5289, _0x27388a) {
    var _0x218044 = _0x12aaaf[_0x1d5289];
    for (var _0x3b638c = 0; _0x3b638c < _0x1d5289; _0x3b638c++) {
      _0x218044[_0x3b638c] = _0x2c6e39[_0x27388a + _0x3b638c * 4 >> 2];
    }
    _0xd640f0.invalidateFramebuffer(_0x310c0e, _0x218044);
  }
  function _0x565970(_0x1fefdd) {
    return _0xd640f0.isEnabled(_0x1fefdd);
  }
  function _0x29799f(_0x44f65d) {
    var _0x407d3e = _0xa194ab.vaos[_0x44f65d];
    if (!_0x407d3e) {
      return 0;
    }
    return _0xd640f0.isVertexArray(_0x407d3e);
  }
  function _0x3aa164(_0x597a69) {
    _0x597a69 = _0xa194ab.programs[_0x597a69];
    _0xd640f0.linkProgram(_0x597a69);
    _0x597a69.uniformLocsById = 0;
    _0x597a69.uniformSizeAndIdsByName = {};
    [_0x597a69.vs, _0x597a69.fs].forEach(function (_0x23c94b) {
      Object.keys(_0x23c94b.explicitUniformLocations).forEach(function (_0xf31c8f) {
        var _0xfda88e = _0x23c94b.explicitUniformLocations[_0xf31c8f];
        _0x597a69.uniformSizeAndIdsByName[_0xf31c8f] = [1, _0xfda88e];
        _0x597a69.uniformIdCounter = Math.max(_0x597a69.uniformIdCounter, _0xfda88e + 1);
      });
    });
    function _0x49b7d4(_0x57ea02, _0x38b4e7) {
      Object.keys(_0x38b4e7).forEach(function (_0x19a547) {
        _0x57ea02[_0x19a547] = _0x38b4e7[_0x19a547];
      });
    }
    _0x597a69.explicitUniformBindings = {};
    _0x597a69.explicitSamplerBindings = {};
    [_0x597a69.vs, _0x597a69.fs].forEach(function (_0x2b286a) {
      _0x49b7d4(_0x597a69.explicitUniformBindings, _0x2b286a.explicitUniformBindings);
      _0x49b7d4(_0x597a69.explicitSamplerBindings, _0x2b286a.explicitSamplerBindings);
    });
    _0x597a69.explicitProgramBindingsApplied = 0;
  }
  function _0x4c8d4a(_0x5933bc, _0x3e7125, _0x128021, _0xd5e597) {
    if (_0xd5e597 != 26 && _0xd5e597 != 10) {
      _0x5c756b("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x224357(_0x5933bc)) {
      _0xa194ab.recordError(1280);
      _0x5c756b("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x563a83 = _0x48c1ae(_0x128021);
    if (!_0x563a83) {
      return 0;
    }
    _0xa194ab.mappedBuffers[_0x104b74(_0x5933bc)] = {
      offset: _0x3e7125,
      length: _0x128021,
      mem: _0x563a83,
      access: _0xd5e597
    };
    return _0x563a83;
  }
  function _0x4cea63(_0x121056, _0xf73ea) {
    if (_0x121056 == 3317) {
      _0xa194ab.unpackAlignment = _0xf73ea;
    }
    _0xd640f0.pixelStorei(_0x121056, _0xf73ea);
  }
  function _0x1d45ba(_0x394ba9, _0x1040f7) {
    _0xd640f0.polygonOffset(_0x394ba9, _0x1040f7);
  }
  function _0x28ec11(_0x5835a9, _0x3f805a, _0x2aaf3d, _0x264b8f) {
    _0xa194ab.recordError(1280);
  }
  function _0x43367a(_0x51b7b0, _0x32a27a, _0x5083ee) {
    _0xa194ab.recordError(1280);
  }
  function _0x535333(_0x36bf9c) {
    _0xd640f0.readBuffer(_0x36bf9c);
  }
  function _0x111ba2(_0x3883d6, _0x5bd43c, _0xa724c0, _0x7ed3e7) {
    function _0x58f748(_0x24fc1e, _0x413643) {
      return _0x24fc1e + _0x413643 - 1 & -_0x413643;
    }
    var _0x3aff5e = _0x3883d6 * _0xa724c0;
    var _0x281de3 = _0x58f748(_0x3aff5e, _0x7ed3e7);
    return _0x5bd43c * _0x281de3;
  }
  function _0xb939aa(_0x35528b) {
    var _0x358a5b = {
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
    return _0x358a5b[_0x35528b - 6402] || 1;
  }
  function _0x4199b6(_0x3dcbb1) {
    _0x3dcbb1 -= 5120;
    if (_0x3dcbb1 == 0) {
      return _0x51d7cf;
    }
    if (_0x3dcbb1 == 1) {
      return _0x42b281;
    }
    if (_0x3dcbb1 == 2) {
      return _0x2f4991;
    }
    if (_0x3dcbb1 == 4) {
      return _0x2c6e39;
    }
    if (_0x3dcbb1 == 6) {
      return _0xaf0aab;
    }
    if (_0x3dcbb1 == 5 || _0x3dcbb1 == 28922 || _0x3dcbb1 == 28520 || _0x3dcbb1 == 30779 || _0x3dcbb1 == 30782) {
      return _0x4d8b01;
    }
    return _0x999577;
  }
  function _0x5a4ef2(_0x258e3f) {
    return 31 - Math.clz32(_0x258e3f.BYTES_PER_ELEMENT);
  }
  function _0x35e8c7(_0x50525d, _0x45b484, _0x3c136d, _0x67599c, _0x132923, _0x4bafd9) {
    var _0x8f6941 = _0x4199b6(_0x50525d);
    var _0x322007 = _0x5a4ef2(_0x8f6941);
    var _0x31bd43 = 1 << _0x322007;
    var _0xec5d4b = _0xb939aa(_0x45b484) * _0x31bd43;
    var _0x49d079 = _0x111ba2(_0x3c136d, _0x67599c, _0xec5d4b, _0xa194ab.unpackAlignment);
    return _0x8f6941.subarray(_0x132923 >> _0x322007, _0x132923 + _0x49d079 >> _0x322007);
  }
  function _0x194e8f(_0x4ff2b4, _0x85251d, _0x14aec9, _0x24eb4b, _0x35b62f, _0x1a6621, _0x55e5f9) {
    if (_0xa194ab.currentContext.version >= 2) {
      if (_0xd640f0.currentPixelPackBufferBinding) {
        _0xd640f0.readPixels(_0x4ff2b4, _0x85251d, _0x14aec9, _0x24eb4b, _0x35b62f, _0x1a6621, _0x55e5f9);
      } else {
        var _0x2ab837 = _0x4199b6(_0x1a6621);
        _0xd640f0.readPixels(_0x4ff2b4, _0x85251d, _0x14aec9, _0x24eb4b, _0x35b62f, _0x1a6621, _0x2ab837, _0x55e5f9 >> _0x5a4ef2(_0x2ab837));
      }
      return;
    }
    var _0xffdd4a = _0x35e8c7(_0x1a6621, _0x35b62f, _0x14aec9, _0x24eb4b, _0x55e5f9, _0x35b62f);
    if (!_0xffdd4a) {
      _0xa194ab.recordError(1280);
      return;
    }
    _0xd640f0.readPixels(_0x4ff2b4, _0x85251d, _0x14aec9, _0x24eb4b, _0x35b62f, _0x1a6621, _0xffdd4a);
  }
  function _0x5e4694(_0x281a54, _0x5d59d4, _0x2144ff, _0x15bbad) {
    _0xd640f0.renderbufferStorage(_0x281a54, _0x5d59d4, _0x2144ff, _0x15bbad);
  }
  function _0x42d4ed(_0x2bb26b, _0x33ac86, _0x425337, _0xfaa575, _0x58af7f) {
    _0xd640f0.renderbufferStorageMultisample(_0x2bb26b, _0x33ac86, _0x425337, _0xfaa575, _0x58af7f);
  }
  function _0x4272eb(_0x31b0ab, _0x256df8, _0xe1d1f3) {
    _0xd640f0.samplerParameteri(_0xa194ab.samplers[_0x31b0ab], _0x256df8, _0xe1d1f3);
  }
  function _0x461a89(_0x15380a, _0x139a6d, _0x4e28d4, _0x4e0eca) {
    _0xd640f0.scissor(_0x15380a, _0x139a6d, _0x4e28d4, _0x4e0eca);
  }
  function _0x2ec87f(_0x486ff7, _0x2ab0da, _0x2cef2e = "(", _0x555b3f = ")") {
    var _0x5631ef = 0;
    for (; _0x2ab0da < _0x486ff7.length; ++_0x2ab0da) {
      if (_0x486ff7[_0x2ab0da] == _0x2cef2e) {
        ++_0x5631ef;
      }
      if (_0x486ff7[_0x2ab0da] == _0x555b3f && --_0x5631ef == 0) {
        return _0x2ab0da;
      }
    }
  }
  function _0x49fb2f(_0x19c15e) {
    var _0x1e8661 = 0;
    var _0x3db118 = _0x19c15e.length;
    var _0x5289d9 = "";
    var _0x52acfb = [1];
    var _0x5c5854 = {
      defined: function (_0x419086) {
        if (_0x5c5854[_0x419086[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0x24695a(_0x4eead0, _0x5fb081) {
      return !(_0x4eead0.charCodeAt(_0x5fb081) > 32);
    }
    function _0x2bcf2c(_0xd1c687, _0x3cf18c) {
      while (!_0x24695a(_0xd1c687, _0x3cf18c)) {
        ++_0x3cf18c;
      }
      return _0x3cf18c;
    }
    function _0x101560(_0x24e52f, _0x3d7870) {
      var _0x168a0e = _0x24e52f.charCodeAt(_0x3d7870);
      if (_0x168a0e > 32) {
        if (_0x168a0e < 48) {
          return 1;
        }
        if (_0x168a0e < 58) {
          return 2;
        }
        if (_0x168a0e < 65) {
          return 1;
        }
        if (_0x168a0e < 91 || _0x168a0e == 95) {
          return 3;
        }
        if (_0x168a0e < 97) {
          return 1;
        }
        if (_0x168a0e < 123) {
          return 3;
        }
        return 1;
      }
      if (_0x168a0e < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x303c92(_0x29ee39, _0x4534f5) {
      var _0x4d4815 = [];
      var _0x7d454c = _0x29ee39.length;
      for (var _0x26fc8b = 0; _0x26fc8b <= _0x7d454c; ++_0x26fc8b) {
        var _0x4fc5f9 = _0x101560(_0x29ee39, _0x26fc8b);
        if (_0x4fc5f9 == 2 || _0x4fc5f9 == 3) {
          for (var _0x172b50 = _0x26fc8b + 1; _0x172b50 <= _0x7d454c; ++_0x172b50) {
            var _0x3f320d = _0x101560(_0x29ee39, _0x172b50);
            if (_0x3f320d != _0x4fc5f9 && (_0x3f320d != 2 || _0x4fc5f9 != 3)) {
              _0x4d4815.push(_0x29ee39.substring(_0x26fc8b, _0x172b50));
              _0x26fc8b = _0x172b50 - 1;
              break;
            }
          }
        } else if (_0x4fc5f9 == 1) {
          var _0x3d0225 = _0x29ee39.substr(_0x26fc8b, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x3d0225)) {
            _0x4d4815.push(_0x3d0225);
            ++_0x26fc8b;
          } else {
            _0x4d4815.push(_0x29ee39[_0x26fc8b]);
          }
        }
      }
      return _0x4d4815;
    }
    function _0x5e3f6b(_0x48fae7, _0x25e8d7, _0x41d94b = _0x48fae7.length) {
      var _0x2395cf = _0x48fae7.length;
      var _0x703bfc = "";
      for (var _0x4f915a = _0x25e8d7; _0x4f915a < _0x41d94b; ++_0x4f915a) {
        var _0x53d0fd = _0x101560(_0x48fae7, _0x4f915a);
        if (_0x53d0fd == 3) {
          for (var _0x36a275 = _0x4f915a + 1; _0x36a275 <= _0x41d94b; ++_0x36a275) {
            var _0x5621c1 = _0x101560(_0x48fae7, _0x36a275);
            if (_0x5621c1 != 2 && _0x5621c1 != 3) {
              var _0x148fda = _0x48fae7.substring(_0x4f915a, _0x36a275);
              var _0x4d7ec0 = _0x5c5854[_0x148fda];
              if (_0x4d7ec0) {
                var _0x4d9f89 = _0x48fae7.substring(_0x25e8d7, _0x4f915a);
                if (_0x4d7ec0.length && _0x48fae7[_0x36a275] == "(") {
                  var _0x3cd59a = _0x2ec87f(_0x48fae7, _0x36a275);
                  _0x4d9f89 += _0x4d7ec0(_0x48fae7.substring(_0x36a275 + 1, _0x3cd59a).split(",")) + _0x48fae7.substring(_0x3cd59a + 1, _0x41d94b);
                } else {
                  _0x4d9f89 += _0x4d7ec0() + _0x48fae7.substring(_0x36a275, _0x41d94b);
                }
                return _0x5e3f6b(_0x4d9f89, 0);
              } else {
                _0x703bfc += _0x148fda;
                _0x4f915a = _0x36a275 - 1;
                break;
              }
            }
          }
        } else {
          _0x703bfc += _0x48fae7[_0x4f915a];
        }
      }
      return _0x703bfc;
    }
    function _0x307cc0(_0x31095c) {
      while (_0x31095c.length > 1 || typeof _0x31095c[0] != "function") {
        _0x31095c = function (_0x53ce64) {
          var _0x5be706;
          var _0x5050bc;
          var _0x2759fe;
          var _0x120bcb = -2;
          for (_0x5050bc = 0; _0x5050bc < _0x53ce64.length; ++_0x5050bc) {
            if ((_0x2759fe = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x53ce64[_0x5050bc])) > _0x120bcb) {
              _0x5be706 = _0x5050bc;
              _0x120bcb = _0x2759fe;
            }
          }
          if (_0x120bcb == 13) {
            var _0x5050bc = _0x2ec87f(_0x53ce64, _0x5be706);
            if (_0x5050bc) {
              _0x53ce64.splice(_0x5be706, _0x5050bc + 1 - _0x5be706, _0x307cc0(_0x53ce64.slice(_0x5be706 + 1, _0x5050bc)));
              return _0x53ce64;
            }
          }
          if (_0x120bcb == 4) {
            _0x5be706 = _0x53ce64.lastIndexOf("!");
            var _0x5325c9 = _0x307cc0(_0x53ce64.slice(_0x5be706 + 1, _0x5be706 + 2));
            _0x53ce64.splice(_0x5be706, 2, function () {
              return !_0x5325c9();
            });
            return _0x53ce64;
          }
          if (_0x120bcb >= 0) {
            var _0x563868 = _0x307cc0(_0x53ce64.slice(0, _0x5be706));
            var _0x4ce701 = _0x307cc0(_0x53ce64.slice(_0x5be706 + 1));
            switch (_0x53ce64[_0x5be706]) {
              case "&&":
                return [function () {
                  return _0x563868() && _0x4ce701();
                }];
              case "||":
                return [function () {
                  return _0x563868() || _0x4ce701();
                }];
              case "==":
                return [function () {
                  return _0x563868() == _0x4ce701();
                }];
              case "!=":
                return [function () {
                  return _0x563868() != _0x4ce701();
                }];
              case "<":
                return [function () {
                  return _0x563868() < _0x4ce701();
                }];
              case "<=":
                return [function () {
                  return _0x563868() <= _0x4ce701();
                }];
              case ">":
                return [function () {
                  return _0x563868() > _0x4ce701();
                }];
              case ">=":
                return [function () {
                  return _0x563868() >= _0x4ce701();
                }];
              case "+":
                return [function () {
                  return _0x563868() + _0x4ce701();
                }];
              case "-":
                return [function () {
                  return _0x563868() - _0x4ce701();
                }];
              case "*":
                return [function () {
                  return _0x563868() * _0x4ce701();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x563868() / _0x4ce701());
                }];
            }
          }
          var _0x20db4d = _0x3e7105(_0x53ce64[_0x5be706]);
          return [function () {
            return _0x20db4d;
          }];
        }(_0x31095c);
      }
      return _0x31095c[0];
    }
    for (; _0x1e8661 < _0x3db118; ++_0x1e8661) {
      var _0x5de693 = _0x1e8661;
      _0x1e8661 = _0x19c15e.indexOf("\n", _0x1e8661);
      if (_0x1e8661 < 0) {
        _0x1e8661 = _0x3db118;
      }
      for (var _0x1410ed = _0x5de693; _0x1410ed < _0x1e8661 && _0x24695a(_0x19c15e, _0x1410ed); ++_0x1410ed);
      var _0x4eb9dc = _0x52acfb[_0x52acfb.length - 1];
      if (_0x19c15e[_0x1410ed] != "#") {
        if (_0x4eb9dc) {
          _0x5289d9 += _0x5e3f6b(_0x19c15e, _0x5de693, _0x1e8661) + "\n";
        }
        continue;
      }
      var _0x4d597d = _0x2bcf2c(_0x19c15e, _0x1410ed);
      var _0x2b34e9 = _0x19c15e.substring(_0x1410ed + 1, _0x4d597d);
      var _0x5989ea = _0x19c15e.substring(_0x4d597d, _0x1e8661).trim();
      switch (_0x2b34e9) {
        case "if":
          var _0x97d373 = _0x303c92(_0x5e3f6b(_0x5989ea, 0));
          var _0x5b64c5 = _0x307cc0(_0x97d373);
          var _0x3c52e2 = _0x5b64c5();
          _0x52acfb.push(!!_0x3c52e2 * _0x52acfb[_0x52acfb.length - 1]);
          break;
        case "ifdef":
          _0x52acfb.push(!!_0x5c5854[_0x5989ea] * _0x52acfb[_0x52acfb.length - 1]);
          break;
        case "ifndef":
          _0x52acfb.push(!_0x5c5854[_0x5989ea] * _0x52acfb[_0x52acfb.length - 1]);
          break;
        case "else":
          _0x52acfb[_0x52acfb.length - 1] = 1 - _0x52acfb[_0x52acfb.length - 1];
          break;
        case "endif":
          _0x52acfb.pop();
          break;
        case "define":
          if (_0x4eb9dc) {
            var _0x2956b4 = _0x5989ea.indexOf("(");
            var _0x1d73d5 = _0x2bcf2c(_0x5989ea, 0);
            if (_0x1d73d5 < _0x2956b4) {
              _0x2956b4 = 0;
            }
            if (_0x2956b4 > 0) {
              var _0x50e1b2 = _0x5989ea.indexOf(")", _0x2956b4);
              let _0x4b8170 = _0x5989ea.substring(_0x2956b4 + 1, _0x50e1b2).split(",").map(_0x4ccf87 => _0x4ccf87.trim());
              let _0x1f2c6b = _0x303c92(_0x5989ea.substring(_0x50e1b2 + 1).trim());
              _0x5c5854[_0x5989ea.substring(0, _0x2956b4)] = function (_0x48b377) {
                var _0x5d5db1 = "";
                _0x1f2c6b.forEach(_0x5b6a8f => {
                  var _0x4a9e02 = _0x4b8170.indexOf(_0x5b6a8f);
                  _0x5d5db1 += _0x4a9e02 >= 0 ? _0x48b377[_0x4a9e02] : _0x5b6a8f;
                });
                return _0x5d5db1;
              };
            } else {
              let _0xc7d0c7 = _0x5e3f6b(_0x5989ea.substring(_0x1d73d5 + 1).trim(), 0);
              _0x5c5854[_0x5989ea.substring(0, _0x1d73d5)] = function () {
                return _0xc7d0c7;
              };
            }
          }
          break;
        case "undef":
          if (_0x4eb9dc) {
            delete _0x5c5854[_0x5989ea];
          }
          break;
        default:
          if (_0x2b34e9 != "version" && _0x2b34e9 != "pragma" && _0x2b34e9 != "extension") {}
          _0x5289d9 += _0x5e3f6b(_0x19c15e, _0x5de693, _0x1e8661) + "\n";
      }
    }
    return _0x5289d9;
  }
  function _0x2b05b6(_0x47d485) {
    var _0x28dd28 = 0;
    var _0x18d2fb = "";
    var _0x9d07a8;
    var _0x34ca1b;
    var _0x12392a = _0x47d485.length;
    for (; _0x28dd28 < _0x12392a; ++_0x28dd28) {
      _0x9d07a8 = _0x47d485[_0x28dd28];
      if (_0x9d07a8 == "/") {
        _0x34ca1b = _0x47d485[_0x28dd28 + 1];
        if (_0x34ca1b == "/") {
          while (_0x28dd28 < _0x12392a && _0x47d485[_0x28dd28 + 1] != "\n") {
            ++_0x28dd28;
          }
        } else if (_0x34ca1b == "*") {
          while (_0x28dd28 < _0x12392a && (_0x47d485[_0x28dd28 - 1] != "*" || _0x47d485[_0x28dd28] != "/")) {
            ++_0x28dd28;
          }
        } else {
          _0x18d2fb += _0x9d07a8;
        }
      } else {
        _0x18d2fb += _0x9d07a8;
      }
    }
    return _0x18d2fb;
  }
  function _0x1b6b17(_0x284fbb, _0x4fa90d, _0x273452, _0x344a9b) {
    var _0x4f5a61 = _0xa194ab.getSource(_0x284fbb, _0x4fa90d, _0x273452, _0x344a9b);
    _0x4f5a61 = _0x49fb2f(_0x2b05b6(_0x4f5a61));
    var _0x4d4edd = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0x281bbc = {};
    var _0x470e29;
    while (_0x470e29 = _0x4d4edd.exec(_0x4f5a61)) {
      _0x281bbc[_0x470e29[5]] = _0x3e7105(_0x470e29[1]);
      if (!(_0x281bbc[_0x470e29[5]] >= 0) || !(_0x281bbc[_0x470e29[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0x281bbc[_0x470e29[5]] + "\"! (" + _0x470e29[0] + ")");
        _0xa194ab.recordError(1281);
        return;
      }
    }
    _0x4f5a61 = _0x4f5a61.replace(_0x4d4edd, "$2");
    _0xa194ab.shaders[_0x284fbb].explicitUniformLocations = _0x281bbc;
    var _0x24e238 = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0x3fba59 = {};
    var _0x2dcddf = {};
    var _0x30eecc;
    while (_0x30eecc = _0x24e238.exec(_0x4f5a61)) {
      var _0x432bc3 = 1;
      for (var _0x3234b0 = _0x30eecc.index; _0x3234b0 < _0x4f5a61.length && _0x4f5a61[_0x3234b0] != ";"; ++_0x3234b0) {
        if (_0x4f5a61[_0x3234b0] == "[") {
          _0x432bc3 = _0x3e7105(_0x4f5a61.slice(_0x3234b0 + 1));
          break;
        }
        if (_0x4f5a61[_0x3234b0] == "{") {
          _0x3234b0 = _0x2ec87f(_0x4f5a61, _0x3234b0, "{", "}") - 1;
        }
      }
      var _0x45b4fb = _0x3e7105(_0x30eecc[1]);
      var _0x43bdeb = 34930;
      if (_0x30eecc[3] && _0x30eecc[2].indexOf("sampler") != -1) {
        _0x3fba59[_0x30eecc[3]] = [_0x45b4fb, _0x432bc3];
      } else {
        _0x43bdeb = 35374;
        _0x2dcddf[_0x30eecc[2]] = [_0x45b4fb, _0x432bc3];
      }
      var _0x23ddb5 = _0xd640f0.getParameter(_0x43bdeb);
      if (!(_0x45b4fb >= 0) || !(_0x45b4fb + _0x432bc3 <= _0x23ddb5)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x45b4fb + "\"! (" + _0x30eecc[0] + "). Valid range is [0, " + _0x23ddb5 + "-1]");
        _0xa194ab.recordError(1281);
        return;
      }
    }
    _0x4f5a61 = _0x4f5a61.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0x4f5a61 = _0x4f5a61.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0x4f5a61 = _0x4f5a61.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0xa194ab.shaders[_0x284fbb].explicitSamplerBindings = _0x3fba59;
    _0xa194ab.shaders[_0x284fbb].explicitUniformBindings = _0x2dcddf;
    _0xd640f0.shaderSource(_0xa194ab.shaders[_0x284fbb], _0x4f5a61);
  }
  function _0x163ba6(_0x24d0e8, _0x453fb3, _0x44c24b, _0x21ddef) {
    _0xd640f0.stencilFuncSeparate(_0x24d0e8, _0x453fb3, _0x44c24b, _0x21ddef);
  }
  function _0x2c26c5(_0x1e46a3) {
    _0xd640f0.stencilMask(_0x1e46a3);
  }
  function _0x43398c(_0x57b900, _0x3b77e4, _0xd408f7, _0x17c1cf) {
    _0xd640f0.stencilOpSeparate(_0x57b900, _0x3b77e4, _0xd408f7, _0x17c1cf);
  }
  function _0x3c6b30(_0x12743b, _0x4bc890, _0x127281, _0x4f47c9, _0x58b1a7, _0x3953fc, _0x585a04, _0x5b20df, _0x501027) {
    if (_0xa194ab.currentContext.version >= 2) {
      if (_0xd640f0.currentPixelUnpackBufferBinding) {
        _0xd640f0.texImage2D(_0x12743b, _0x4bc890, _0x127281, _0x4f47c9, _0x58b1a7, _0x3953fc, _0x585a04, _0x5b20df, _0x501027);
      } else if (_0x501027) {
        var _0x1cc0ab = _0x4199b6(_0x5b20df);
        _0xd640f0.texImage2D(_0x12743b, _0x4bc890, _0x127281, _0x4f47c9, _0x58b1a7, _0x3953fc, _0x585a04, _0x5b20df, _0x1cc0ab, _0x501027 >> _0x5a4ef2(_0x1cc0ab));
      } else {
        _0xd640f0.texImage2D(_0x12743b, _0x4bc890, _0x127281, _0x4f47c9, _0x58b1a7, _0x3953fc, _0x585a04, _0x5b20df, null);
      }
      return;
    }
    _0xd640f0.texImage2D(_0x12743b, _0x4bc890, _0x127281, _0x4f47c9, _0x58b1a7, _0x3953fc, _0x585a04, _0x5b20df, _0x501027 ? _0x35e8c7(_0x5b20df, _0x585a04, _0x4f47c9, _0x58b1a7, _0x501027, _0x127281) : null);
  }
  function _0x37834b(_0x5542ae, _0x35e4ff, _0x246128, _0x128543, _0x689643, _0x51f43d, _0x21d2f4, _0x5a780d, _0x4e0ab8, _0x896dc3) {
    if (_0xd640f0.currentPixelUnpackBufferBinding) {
      _0xd640f0.texImage3D(_0x5542ae, _0x35e4ff, _0x246128, _0x128543, _0x689643, _0x51f43d, _0x21d2f4, _0x5a780d, _0x4e0ab8, _0x896dc3);
    } else if (_0x896dc3) {
      var _0x29db48 = _0x4199b6(_0x4e0ab8);
      _0xd640f0.texImage3D(_0x5542ae, _0x35e4ff, _0x246128, _0x128543, _0x689643, _0x51f43d, _0x21d2f4, _0x5a780d, _0x4e0ab8, _0x29db48, _0x896dc3 >> _0x5a4ef2(_0x29db48));
    } else {
      _0xd640f0.texImage3D(_0x5542ae, _0x35e4ff, _0x246128, _0x128543, _0x689643, _0x51f43d, _0x21d2f4, _0x5a780d, _0x4e0ab8, null);
    }
  }
  function _0x2d04aa(_0x3962bb, _0x1cc761, _0x1f8272) {
    _0xd640f0.texParameterf(_0x3962bb, _0x1cc761, _0x1f8272);
  }
  function _0x41d936(_0x9cb084, _0x4e0ac6, _0x355766) {
    _0xd640f0.texParameteri(_0x9cb084, _0x4e0ac6, _0x355766);
  }
  function _0xc2a5d9(_0x2bdf07, _0x16e8cb, _0x445244) {
    var _0x38a365 = _0x2c6e39[_0x445244 >> 2];
    _0xd640f0.texParameteri(_0x2bdf07, _0x16e8cb, _0x38a365);
  }
  function _0x48076d(_0x5e6cbc, _0x3aa0cc, _0x174b25, _0x4f5114, _0x528d43) {
    _0xd640f0.texStorage2D(_0x5e6cbc, _0x3aa0cc, _0x174b25, _0x4f5114, _0x528d43);
  }
  function _0x5d5f6c(_0x15312f, _0x2cd60a, _0x2de244, _0x14796b, _0x2a2d57, _0x58ec75) {
    _0xd640f0.texStorage3D(_0x15312f, _0x2cd60a, _0x2de244, _0x14796b, _0x2a2d57, _0x58ec75);
  }
  function _0x5b0df7(_0x523d94, _0x3a0c49, _0x28c5fa, _0x55561b, _0x132d12, _0x5bc8b7, _0x5e4e4d, _0x1a7fdf, _0x72a62f) {
    if (_0xa194ab.currentContext.version >= 2) {
      if (_0xd640f0.currentPixelUnpackBufferBinding) {
        _0xd640f0.texSubImage2D(_0x523d94, _0x3a0c49, _0x28c5fa, _0x55561b, _0x132d12, _0x5bc8b7, _0x5e4e4d, _0x1a7fdf, _0x72a62f);
      } else if (_0x72a62f) {
        var _0x4a4c76 = _0x4199b6(_0x1a7fdf);
        _0xd640f0.texSubImage2D(_0x523d94, _0x3a0c49, _0x28c5fa, _0x55561b, _0x132d12, _0x5bc8b7, _0x5e4e4d, _0x1a7fdf, _0x4a4c76, _0x72a62f >> _0x5a4ef2(_0x4a4c76));
      } else {
        _0xd640f0.texSubImage2D(_0x523d94, _0x3a0c49, _0x28c5fa, _0x55561b, _0x132d12, _0x5bc8b7, _0x5e4e4d, _0x1a7fdf, null);
      }
      return;
    }
    var _0x57b73c = null;
    if (_0x72a62f) {
      _0x57b73c = _0x35e8c7(_0x1a7fdf, _0x5e4e4d, _0x132d12, _0x5bc8b7, _0x72a62f, 0);
    }
    _0xd640f0.texSubImage2D(_0x523d94, _0x3a0c49, _0x28c5fa, _0x55561b, _0x132d12, _0x5bc8b7, _0x5e4e4d, _0x1a7fdf, _0x57b73c);
  }
  function _0xa02abf(_0x51e23a, _0x471f95, _0x757cd2, _0x2a47a9, _0x3dde5c, _0x130387, _0x44bed7, _0x4e5258, _0x5e353b, _0x18c24a, _0x15eac8) {
    if (_0xd640f0.currentPixelUnpackBufferBinding) {
      _0xd640f0.texSubImage3D(_0x51e23a, _0x471f95, _0x757cd2, _0x2a47a9, _0x3dde5c, _0x130387, _0x44bed7, _0x4e5258, _0x5e353b, _0x18c24a, _0x15eac8);
    } else if (_0x15eac8) {
      var _0x53a0d7 = _0x4199b6(_0x18c24a);
      _0xd640f0.texSubImage3D(_0x51e23a, _0x471f95, _0x757cd2, _0x2a47a9, _0x3dde5c, _0x130387, _0x44bed7, _0x4e5258, _0x5e353b, _0x18c24a, _0x53a0d7, _0x15eac8 >> _0x5a4ef2(_0x53a0d7));
    } else {
      _0xd640f0.texSubImage3D(_0x51e23a, _0x471f95, _0x757cd2, _0x2a47a9, _0x3dde5c, _0x130387, _0x44bed7, _0x4e5258, _0x5e353b, _0x18c24a, null);
    }
  }
  function _0x5b6400(_0x90b676, _0x1b23d4, _0x4b421c, _0x259a93) {
    _0x90b676 = _0xa194ab.programs[_0x90b676];
    var _0x4043e4 = [];
    for (var _0x5a7587 = 0; _0x5a7587 < _0x1b23d4; _0x5a7587++) {
      _0x4043e4.push(_0xa8c6ca(_0x2c6e39[_0x4b421c + _0x5a7587 * 4 >> 2]));
    }
    _0xd640f0.transformFeedbackVaryings(_0x90b676, _0x4043e4, _0x259a93);
  }
  var _0x274fad = [];
  function _0x5ef1a9(_0x137e38, _0x3653c1, _0x3ccfbf) {
    if (_0xa194ab.currentContext.version >= 2) {
      _0xd640f0.uniform1fv(_0x4035ad(_0x137e38), _0xaf0aab, _0x3ccfbf >> 2, _0x3653c1);
      return;
    }
    if (_0x3653c1 <= 288) {
      var _0x186a57 = _0x274fad[_0x3653c1 - 1];
      for (var _0x19e6fd = 0; _0x19e6fd < _0x3653c1; ++_0x19e6fd) {
        _0x186a57[_0x19e6fd] = _0xaf0aab[_0x3ccfbf + _0x19e6fd * 4 >> 2];
      }
    } else {
      var _0x186a57 = _0xaf0aab.subarray(_0x3ccfbf >> 2, _0x3ccfbf + _0x3653c1 * 4 >> 2);
    }
    _0xd640f0.uniform1fv(_0x4035ad(_0x137e38), _0x186a57);
  }
  function _0x5b9736(_0x4ef312, _0x36c402) {
    _0xd640f0.uniform1i(_0x4035ad(_0x4ef312), _0x36c402);
  }
  var _0x1282b6 = [];
  function _0xe14a9d(_0x4d2c92, _0x554951, _0x4cf486) {
    if (_0xa194ab.currentContext.version >= 2) {
      _0xd640f0.uniform1iv(_0x4035ad(_0x4d2c92), _0x2c6e39, _0x4cf486 >> 2, _0x554951);
      return;
    }
    if (_0x554951 <= 288) {
      var _0x333b1c = _0x1282b6[_0x554951 - 1];
      for (var _0x1a7378 = 0; _0x1a7378 < _0x554951; ++_0x1a7378) {
        _0x333b1c[_0x1a7378] = _0x2c6e39[_0x4cf486 + _0x1a7378 * 4 >> 2];
      }
    } else {
      var _0x333b1c = _0x2c6e39.subarray(_0x4cf486 >> 2, _0x4cf486 + _0x554951 * 4 >> 2);
    }
    _0xd640f0.uniform1iv(_0x4035ad(_0x4d2c92), _0x333b1c);
  }
  function _0x2ec47e(_0x2ec936, _0x4c0bad, _0x4ed5b2) {
    _0xd640f0.uniform1uiv(_0x4035ad(_0x2ec936), _0x4d8b01, _0x4ed5b2 >> 2, _0x4c0bad);
  }
  function _0x5c0a57(_0x11220c, _0x181e73, _0x3ad3a2) {
    if (_0xa194ab.currentContext.version >= 2) {
      _0xd640f0.uniform2fv(_0x4035ad(_0x11220c), _0xaf0aab, _0x3ad3a2 >> 2, _0x181e73 * 2);
      return;
    }
    if (_0x181e73 <= 144) {
      var _0x1cd3b1 = _0x274fad[_0x181e73 * 2 - 1];
      for (var _0x13fb9b = 0; _0x13fb9b < _0x181e73 * 2; _0x13fb9b += 2) {
        _0x1cd3b1[_0x13fb9b] = _0xaf0aab[_0x3ad3a2 + _0x13fb9b * 4 >> 2];
        _0x1cd3b1[_0x13fb9b + 1] = _0xaf0aab[_0x3ad3a2 + (_0x13fb9b * 4 + 4) >> 2];
      }
    } else {
      var _0x1cd3b1 = _0xaf0aab.subarray(_0x3ad3a2 >> 2, _0x3ad3a2 + _0x181e73 * 8 >> 2);
    }
    _0xd640f0.uniform2fv(_0x4035ad(_0x11220c), _0x1cd3b1);
  }
  function _0x797a5(_0x6c0731, _0x5ef158, _0x44abd3) {
    if (_0xa194ab.currentContext.version >= 2) {
      _0xd640f0.uniform2iv(_0x4035ad(_0x6c0731), _0x2c6e39, _0x44abd3 >> 2, _0x5ef158 * 2);
      return;
    }
    if (_0x5ef158 <= 144) {
      var _0x4c1636 = _0x1282b6[_0x5ef158 * 2 - 1];
      for (var _0x136cc1 = 0; _0x136cc1 < _0x5ef158 * 2; _0x136cc1 += 2) {
        _0x4c1636[_0x136cc1] = _0x2c6e39[_0x44abd3 + _0x136cc1 * 4 >> 2];
        _0x4c1636[_0x136cc1 + 1] = _0x2c6e39[_0x44abd3 + (_0x136cc1 * 4 + 4) >> 2];
      }
    } else {
      var _0x4c1636 = _0x2c6e39.subarray(_0x44abd3 >> 2, _0x44abd3 + _0x5ef158 * 8 >> 2);
    }
    _0xd640f0.uniform2iv(_0x4035ad(_0x6c0731), _0x4c1636);
  }
  function _0x144eb0(_0x3e6a94, _0x5657b7, _0x522162) {
    _0xd640f0.uniform2uiv(_0x4035ad(_0x3e6a94), _0x4d8b01, _0x522162 >> 2, _0x5657b7 * 2);
  }
  function _0x5b8c27(_0x92dddf, _0xc21bef, _0x499689) {
    if (_0xa194ab.currentContext.version >= 2) {
      _0xd640f0.uniform3fv(_0x4035ad(_0x92dddf), _0xaf0aab, _0x499689 >> 2, _0xc21bef * 3);
      return;
    }
    if (_0xc21bef <= 96) {
      var _0x55029c = _0x274fad[_0xc21bef * 3 - 1];
      for (var _0x250ab6 = 0; _0x250ab6 < _0xc21bef * 3; _0x250ab6 += 3) {
        _0x55029c[_0x250ab6] = _0xaf0aab[_0x499689 + _0x250ab6 * 4 >> 2];
        _0x55029c[_0x250ab6 + 1] = _0xaf0aab[_0x499689 + (_0x250ab6 * 4 + 4) >> 2];
        _0x55029c[_0x250ab6 + 2] = _0xaf0aab[_0x499689 + (_0x250ab6 * 4 + 8) >> 2];
      }
    } else {
      var _0x55029c = _0xaf0aab.subarray(_0x499689 >> 2, _0x499689 + _0xc21bef * 12 >> 2);
    }
    _0xd640f0.uniform3fv(_0x4035ad(_0x92dddf), _0x55029c);
  }
  function _0x2766ac(_0x446d24, _0x345fa7, _0x4cd1f3) {
    if (_0xa194ab.currentContext.version >= 2) {
      _0xd640f0.uniform3iv(_0x4035ad(_0x446d24), _0x2c6e39, _0x4cd1f3 >> 2, _0x345fa7 * 3);
      return;
    }
    if (_0x345fa7 <= 96) {
      var _0x1605e2 = _0x1282b6[_0x345fa7 * 3 - 1];
      for (var _0x28816a = 0; _0x28816a < _0x345fa7 * 3; _0x28816a += 3) {
        _0x1605e2[_0x28816a] = _0x2c6e39[_0x4cd1f3 + _0x28816a * 4 >> 2];
        _0x1605e2[_0x28816a + 1] = _0x2c6e39[_0x4cd1f3 + (_0x28816a * 4 + 4) >> 2];
        _0x1605e2[_0x28816a + 2] = _0x2c6e39[_0x4cd1f3 + (_0x28816a * 4 + 8) >> 2];
      }
    } else {
      var _0x1605e2 = _0x2c6e39.subarray(_0x4cd1f3 >> 2, _0x4cd1f3 + _0x345fa7 * 12 >> 2);
    }
    _0xd640f0.uniform3iv(_0x4035ad(_0x446d24), _0x1605e2);
  }
  function _0x2b302c(_0x4e12c0, _0x27dd53, _0xc0f32f) {
    _0xd640f0.uniform3uiv(_0x4035ad(_0x4e12c0), _0x4d8b01, _0xc0f32f >> 2, _0x27dd53 * 3);
  }
  function _0x112c30(_0x39dd4f, _0x295803, _0x292c4a) {
    if (_0xa194ab.currentContext.version >= 2) {
      _0xd640f0.uniform4fv(_0x4035ad(_0x39dd4f), _0xaf0aab, _0x292c4a >> 2, _0x295803 * 4);
      return;
    }
    if (_0x295803 <= 72) {
      var _0x41e422 = _0x274fad[_0x295803 * 4 - 1];
      var _0x817a1a = _0xaf0aab;
      _0x292c4a >>= 2;
      for (var _0x486c1d = 0; _0x486c1d < _0x295803 * 4; _0x486c1d += 4) {
        var _0x2e7859 = _0x292c4a + _0x486c1d;
        _0x41e422[_0x486c1d] = _0x817a1a[_0x2e7859];
        _0x41e422[_0x486c1d + 1] = _0x817a1a[_0x2e7859 + 1];
        _0x41e422[_0x486c1d + 2] = _0x817a1a[_0x2e7859 + 2];
        _0x41e422[_0x486c1d + 3] = _0x817a1a[_0x2e7859 + 3];
      }
    } else {
      var _0x41e422 = _0xaf0aab.subarray(_0x292c4a >> 2, _0x292c4a + _0x295803 * 16 >> 2);
    }
    _0xd640f0.uniform4fv(_0x4035ad(_0x39dd4f), _0x41e422);
  }
  function _0x890963(_0xdcaabd, _0x5bee3a, _0x3e70d0) {
    if (_0xa194ab.currentContext.version >= 2) {
      _0xd640f0.uniform4iv(_0x4035ad(_0xdcaabd), _0x2c6e39, _0x3e70d0 >> 2, _0x5bee3a * 4);
      return;
    }
    if (_0x5bee3a <= 72) {
      var _0xaba02f = _0x1282b6[_0x5bee3a * 4 - 1];
      for (var _0xb20f3c = 0; _0xb20f3c < _0x5bee3a * 4; _0xb20f3c += 4) {
        _0xaba02f[_0xb20f3c] = _0x2c6e39[_0x3e70d0 + _0xb20f3c * 4 >> 2];
        _0xaba02f[_0xb20f3c + 1] = _0x2c6e39[_0x3e70d0 + (_0xb20f3c * 4 + 4) >> 2];
        _0xaba02f[_0xb20f3c + 2] = _0x2c6e39[_0x3e70d0 + (_0xb20f3c * 4 + 8) >> 2];
        _0xaba02f[_0xb20f3c + 3] = _0x2c6e39[_0x3e70d0 + (_0xb20f3c * 4 + 12) >> 2];
      }
    } else {
      var _0xaba02f = _0x2c6e39.subarray(_0x3e70d0 >> 2, _0x3e70d0 + _0x5bee3a * 16 >> 2);
    }
    _0xd640f0.uniform4iv(_0x4035ad(_0xdcaabd), _0xaba02f);
  }
  function _0x5d62fc(_0x1cb6a2, _0xe52c2c, _0x26a4ed) {
    _0xd640f0.uniform4uiv(_0x4035ad(_0x1cb6a2), _0x4d8b01, _0x26a4ed >> 2, _0xe52c2c * 4);
  }
  function _0x2c73ea(_0x46e3f1, _0x5f3b66, _0x6ad43c) {
    _0x46e3f1 = _0xa194ab.programs[_0x46e3f1];
    _0xd640f0.uniformBlockBinding(_0x46e3f1, _0x5f3b66, _0x6ad43c);
  }
  function _0x19750c(_0x532a4f, _0x525e32, _0x3598dc, _0xbbd8ec) {
    if (_0xa194ab.currentContext.version >= 2) {
      _0xd640f0.uniformMatrix3fv(_0x4035ad(_0x532a4f), !!_0x3598dc, _0xaf0aab, _0xbbd8ec >> 2, _0x525e32 * 9);
      return;
    }
    if (_0x525e32 <= 32) {
      var _0x4f458c = _0x274fad[_0x525e32 * 9 - 1];
      for (var _0x1f4249 = 0; _0x1f4249 < _0x525e32 * 9; _0x1f4249 += 9) {
        _0x4f458c[_0x1f4249] = _0xaf0aab[_0xbbd8ec + _0x1f4249 * 4 >> 2];
        _0x4f458c[_0x1f4249 + 1] = _0xaf0aab[_0xbbd8ec + (_0x1f4249 * 4 + 4) >> 2];
        _0x4f458c[_0x1f4249 + 2] = _0xaf0aab[_0xbbd8ec + (_0x1f4249 * 4 + 8) >> 2];
        _0x4f458c[_0x1f4249 + 3] = _0xaf0aab[_0xbbd8ec + (_0x1f4249 * 4 + 12) >> 2];
        _0x4f458c[_0x1f4249 + 4] = _0xaf0aab[_0xbbd8ec + (_0x1f4249 * 4 + 16) >> 2];
        _0x4f458c[_0x1f4249 + 5] = _0xaf0aab[_0xbbd8ec + (_0x1f4249 * 4 + 20) >> 2];
        _0x4f458c[_0x1f4249 + 6] = _0xaf0aab[_0xbbd8ec + (_0x1f4249 * 4 + 24) >> 2];
        _0x4f458c[_0x1f4249 + 7] = _0xaf0aab[_0xbbd8ec + (_0x1f4249 * 4 + 28) >> 2];
        _0x4f458c[_0x1f4249 + 8] = _0xaf0aab[_0xbbd8ec + (_0x1f4249 * 4 + 32) >> 2];
      }
    } else {
      var _0x4f458c = _0xaf0aab.subarray(_0xbbd8ec >> 2, _0xbbd8ec + _0x525e32 * 36 >> 2);
    }
    _0xd640f0.uniformMatrix3fv(_0x4035ad(_0x532a4f), !!_0x3598dc, _0x4f458c);
  }
  function _0x2a97f4(_0x8a6ad8, _0x468fa3, _0x9c44bb, _0x316a0b) {
    if (_0xa194ab.currentContext.version >= 2) {
      _0xd640f0.uniformMatrix4fv(_0x4035ad(_0x8a6ad8), !!_0x9c44bb, _0xaf0aab, _0x316a0b >> 2, _0x468fa3 * 16);
      return;
    }
    if (_0x468fa3 <= 18) {
      var _0x26296b = _0x274fad[_0x468fa3 * 16 - 1];
      var _0x3976d1 = _0xaf0aab;
      _0x316a0b >>= 2;
      for (var _0x350d2d = 0; _0x350d2d < _0x468fa3 * 16; _0x350d2d += 16) {
        var _0x2bae50 = _0x316a0b + _0x350d2d;
        _0x26296b[_0x350d2d] = _0x3976d1[_0x2bae50];
        _0x26296b[_0x350d2d + 1] = _0x3976d1[_0x2bae50 + 1];
        _0x26296b[_0x350d2d + 2] = _0x3976d1[_0x2bae50 + 2];
        _0x26296b[_0x350d2d + 3] = _0x3976d1[_0x2bae50 + 3];
        _0x26296b[_0x350d2d + 4] = _0x3976d1[_0x2bae50 + 4];
        _0x26296b[_0x350d2d + 5] = _0x3976d1[_0x2bae50 + 5];
        _0x26296b[_0x350d2d + 6] = _0x3976d1[_0x2bae50 + 6];
        _0x26296b[_0x350d2d + 7] = _0x3976d1[_0x2bae50 + 7];
        _0x26296b[_0x350d2d + 8] = _0x3976d1[_0x2bae50 + 8];
        _0x26296b[_0x350d2d + 9] = _0x3976d1[_0x2bae50 + 9];
        _0x26296b[_0x350d2d + 10] = _0x3976d1[_0x2bae50 + 10];
        _0x26296b[_0x350d2d + 11] = _0x3976d1[_0x2bae50 + 11];
        _0x26296b[_0x350d2d + 12] = _0x3976d1[_0x2bae50 + 12];
        _0x26296b[_0x350d2d + 13] = _0x3976d1[_0x2bae50 + 13];
        _0x26296b[_0x350d2d + 14] = _0x3976d1[_0x2bae50 + 14];
        _0x26296b[_0x350d2d + 15] = _0x3976d1[_0x2bae50 + 15];
      }
    } else {
      var _0x26296b = _0xaf0aab.subarray(_0x316a0b >> 2, _0x316a0b + _0x468fa3 * 64 >> 2);
    }
    _0xd640f0.uniformMatrix4fv(_0x4035ad(_0x8a6ad8), !!_0x9c44bb, _0x26296b);
  }
  function _0x29eee1(_0x17442b) {
    if (!_0x224357(_0x17442b)) {
      _0xa194ab.recordError(1280);
      _0x5c756b("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0x5e1780 = _0x104b74(_0x17442b);
    var _0x4e2b63 = _0xa194ab.mappedBuffers[_0x5e1780];
    if (!_0x4e2b63) {
      _0xa194ab.recordError(1282);
      _0x5c756b("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0xa194ab.mappedBuffers[_0x5e1780] = null;
    if (!(_0x4e2b63.access & 16)) {
      if (_0xa194ab.currentContext.version >= 2) {
        _0xd640f0.bufferSubData(_0x17442b, _0x4e2b63.offset, _0x42b281, _0x4e2b63.mem, _0x4e2b63.length);
      } else {
        _0xd640f0.bufferSubData(_0x17442b, _0x4e2b63.offset, _0x42b281.subarray(_0x4e2b63.mem, _0x4e2b63.mem + _0x4e2b63.length));
      }
    }
    _0x59ed75(_0x4e2b63.mem);
    return 1;
  }
  function _0x38337f() {
    var _0x4cc9fa = _0xd640f0.currentProgram;
    if (!_0x4cc9fa.explicitProgramBindingsApplied) {
      if (_0xa194ab.currentContext.version >= 2) {
        Object.keys(_0x4cc9fa.explicitUniformBindings).forEach(function (_0x5d308d) {
          var _0x4cd8b6 = _0x4cc9fa.explicitUniformBindings[_0x5d308d];
          for (var _0x210175 = 0; _0x210175 < _0x4cd8b6[1]; ++_0x210175) {
            var _0x2eaf2b = _0xd640f0.getUniformBlockIndex(_0x4cc9fa, _0x5d308d + (_0x4cd8b6[1] > 1 ? "[" + _0x210175 + "]" : ""));
            _0xd640f0.uniformBlockBinding(_0x4cc9fa, _0x2eaf2b, _0x4cd8b6[0] + _0x210175);
          }
        });
      }
      Object.keys(_0x4cc9fa.explicitSamplerBindings).forEach(function (_0x548918) {
        var _0x240e1f = _0x4cc9fa.explicitSamplerBindings[_0x548918];
        for (var _0x5e2667 = 0; _0x5e2667 < _0x240e1f[1]; ++_0x5e2667) {
          _0xd640f0.uniform1i(_0xd640f0.getUniformLocation(_0x4cc9fa, _0x548918 + (_0x5e2667 ? "[" + _0x5e2667 + "]" : "")), _0x240e1f[0] + _0x5e2667);
        }
      });
      _0x4cc9fa.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x1608a5(_0xe5fff4) {
    _0xe5fff4 = _0xa194ab.programs[_0xe5fff4];
    _0xd640f0.useProgram(_0xe5fff4);
    if (_0xd640f0.currentProgram = _0xe5fff4) {
      _0x38337f();
    }
  }
  function _0x4b7fce(_0x452eff) {
    _0xd640f0.validateProgram(_0xa194ab.programs[_0x452eff]);
  }
  function _0xa8d918(_0x475e76, _0x39ff50, _0x6afc90, _0xcb9fab, _0x55b615) {
    _0xd640f0.vertexAttrib4f(_0x475e76, _0x39ff50, _0x6afc90, _0xcb9fab, _0x55b615);
  }
  function _0x265715(_0x38bf1a, _0x158637) {
    _0xd640f0.vertexAttrib4f(_0x38bf1a, _0xaf0aab[_0x158637 >> 2], _0xaf0aab[_0x158637 + 4 >> 2], _0xaf0aab[_0x158637 + 8 >> 2], _0xaf0aab[_0x158637 + 12 >> 2]);
  }
  function _0x2bb9da(_0x3e693b, _0x3124af, _0x54c8f0, _0x263b67, _0x44afdc) {
    var _0x5327d1 = _0xa194ab.currentContext.clientBuffers[_0x3e693b];
    if (!_0xd640f0.currentArrayBufferBinding) {
      _0x5327d1.size = _0x3124af;
      _0x5327d1.type = _0x54c8f0;
      _0x5327d1.normalized = false;
      _0x5327d1.stride = _0x263b67;
      _0x5327d1.ptr = _0x44afdc;
      _0x5327d1.clientside = true;
      _0x5327d1.vertexAttribPointerAdaptor = function (_0x25dd02, _0x22e459, _0x4d098b, _0x205eb9, _0x15af38, _0x43ce0d) {
        this.vertexAttribIPointer(_0x25dd02, _0x22e459, _0x4d098b, _0x15af38, _0x43ce0d);
      };
      return;
    }
    _0x5327d1.clientside = false;
    _0xd640f0.vertexAttribIPointer(_0x3e693b, _0x3124af, _0x54c8f0, _0x263b67, _0x44afdc);
  }
  function _0x21388e(_0x3ecf94, _0xbb82c8, _0x1584e6, _0x30cb82, _0x41e4d7, _0x404ee1) {
    var _0x50b60e = _0xa194ab.currentContext.clientBuffers[_0x3ecf94];
    if (!_0xd640f0.currentArrayBufferBinding) {
      _0x50b60e.size = _0xbb82c8;
      _0x50b60e.type = _0x1584e6;
      _0x50b60e.normalized = _0x30cb82;
      _0x50b60e.stride = _0x41e4d7;
      _0x50b60e.ptr = _0x404ee1;
      _0x50b60e.clientside = true;
      _0x50b60e.vertexAttribPointerAdaptor = function (_0x4fb67e, _0x336d58, _0x154f57, _0x36290f, _0x9e59f2, _0x232400) {
        this.vertexAttribPointer(_0x4fb67e, _0x336d58, _0x154f57, _0x36290f, _0x9e59f2, _0x232400);
      };
      return;
    }
    _0x50b60e.clientside = false;
    _0xd640f0.vertexAttribPointer(_0x3ecf94, _0xbb82c8, _0x1584e6, !!_0x30cb82, _0x41e4d7, _0x404ee1);
  }
  function _0x3f8502(_0x2b1995, _0x20f01d, _0x325289, _0x3ff800) {
    _0xd640f0.viewport(_0x2b1995, _0x20f01d, _0x325289, _0x3ff800);
  }
  function _0x18c27c(_0x333df1) {
    return _0x333df1;
  }
  function _0x1ec341(_0x3ef8ce) {
    _0x52bf2d();
    var _0x297f57 = new Date(_0x2c6e39[_0x3ef8ce + 20 >> 2] + 1900, _0x2c6e39[_0x3ef8ce + 16 >> 2], _0x2c6e39[_0x3ef8ce + 12 >> 2], _0x2c6e39[_0x3ef8ce + 8 >> 2], _0x2c6e39[_0x3ef8ce + 4 >> 2], _0x2c6e39[_0x3ef8ce >> 2], 0);
    var _0x427235 = _0x2c6e39[_0x3ef8ce + 32 >> 2];
    var _0xadf332 = _0x297f57.getTimezoneOffset();
    var _0x2af1f4 = new Date(_0x297f57.getFullYear(), 0, 1);
    var _0x576c58 = new Date(_0x297f57.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x75f091 = _0x2af1f4.getTimezoneOffset();
    var _0x5f5db9 = Math.min(_0x75f091, _0x576c58);
    if (_0x427235 < 0) {
      _0x2c6e39[_0x3ef8ce + 32 >> 2] = Number(_0x576c58 != _0x75f091 && _0x5f5db9 == _0xadf332);
    } else if (_0x427235 > 0 != (_0x5f5db9 == _0xadf332)) {
      var _0x1a11f8 = Math.max(_0x75f091, _0x576c58);
      var _0x48475c = _0x427235 > 0 ? _0x5f5db9 : _0x1a11f8;
      _0x297f57.setTime(_0x297f57.getTime() + (_0x48475c - _0xadf332) * 60000);
    }
    _0x2c6e39[_0x3ef8ce + 24 >> 2] = _0x297f57.getDay();
    var _0x36400d = (_0x297f57.getTime() - _0x2af1f4.getTime()) / 86400000 | 0;
    _0x2c6e39[_0x3ef8ce + 28 >> 2] = _0x36400d;
    _0x2c6e39[_0x3ef8ce >> 2] = _0x297f57.getSeconds();
    _0x2c6e39[_0x3ef8ce + 4 >> 2] = _0x297f57.getMinutes();
    _0x2c6e39[_0x3ef8ce + 8 >> 2] = _0x297f57.getHours();
    _0x2c6e39[_0x3ef8ce + 12 >> 2] = _0x297f57.getDate();
    _0x2c6e39[_0x3ef8ce + 16 >> 2] = _0x297f57.getMonth();
    return _0x297f57.getTime() / 1000 | 0;
  }
  function _0x9c8838(_0x2d6b3a) {
    _0x182d97(_0x2d6b3a);
  }
  function _0x21afb5(_0x46b39a, _0xe78205, _0x563f96) {
    return 0;
  }
  function _0x210e73(_0x2c1c1a) {
    _0x2c6e39[_0x2c1c1a >> 2] = 0;
    return 0;
  }
  function _0x153b5c(_0x53bcc6) {
    return _0x53bcc6 % 4 === 0 && (_0x53bcc6 % 100 !== 0 || _0x53bcc6 % 400 === 0);
  }
  function _0x240620(_0x1d7ea1, _0x277a3c) {
    var _0x26167c = 0;
    for (var _0x32ecdb = 0; _0x32ecdb <= _0x277a3c; _0x26167c += _0x1d7ea1[_0x32ecdb++]) {}
    return _0x26167c;
  }
  var _0x4a3164 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0x4d9d2b = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0x34306e(_0x3cf60d, _0x10b127) {
    var _0x2d42c4 = new Date(_0x3cf60d.getTime());
    while (_0x10b127 > 0) {
      var _0x1607af = _0x153b5c(_0x2d42c4.getFullYear());
      var _0x2c7cc4 = _0x2d42c4.getMonth();
      var _0x3ea72a = (_0x1607af ? _0x4a3164 : _0x4d9d2b)[_0x2c7cc4];
      if (_0x10b127 > _0x3ea72a - _0x2d42c4.getDate()) {
        _0x10b127 -= _0x3ea72a - _0x2d42c4.getDate() + 1;
        _0x2d42c4.setDate(1);
        if (_0x2c7cc4 < 11) {
          _0x2d42c4.setMonth(_0x2c7cc4 + 1);
        } else {
          _0x2d42c4.setMonth(0);
          _0x2d42c4.setFullYear(_0x2d42c4.getFullYear() + 1);
        }
      } else {
        _0x2d42c4.setDate(_0x2d42c4.getDate() + _0x10b127);
        return _0x2d42c4;
      }
    }
    return _0x2d42c4;
  }
  function _0x23051e(_0x24482a, _0x151065, _0x726a2d, _0x2241f1) {
    var _0x18d728 = _0x2c6e39[_0x2241f1 + 40 >> 2];
    var _0x2da887 = {
      tm_sec: _0x2c6e39[_0x2241f1 >> 2],
      tm_min: _0x2c6e39[_0x2241f1 + 4 >> 2],
      tm_hour: _0x2c6e39[_0x2241f1 + 8 >> 2],
      tm_mday: _0x2c6e39[_0x2241f1 + 12 >> 2],
      tm_mon: _0x2c6e39[_0x2241f1 + 16 >> 2],
      tm_year: _0x2c6e39[_0x2241f1 + 20 >> 2],
      tm_wday: _0x2c6e39[_0x2241f1 + 24 >> 2],
      tm_yday: _0x2c6e39[_0x2241f1 + 28 >> 2],
      tm_isdst: _0x2c6e39[_0x2241f1 + 32 >> 2],
      tm_gmtoff: _0x2c6e39[_0x2241f1 + 36 >> 2],
      tm_zone: _0x18d728 ? _0xa8c6ca(_0x18d728) : ""
    };
    var _0x322268 = _0xa8c6ca(_0x726a2d);
    var _0x29ea31 = {
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
    for (var _0x1e2622 in _0x29ea31) {
      _0x322268 = _0x322268.replace(new RegExp(_0x1e2622, "g"), _0x29ea31[_0x1e2622]);
    }
    var _0x381102 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0xeb36b4 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x4813b7(_0x3c01d7, _0x35297d, _0x32a18f) {
      var _0x85767c = typeof _0x3c01d7 === "number" ? _0x3c01d7.toString() : _0x3c01d7 || "";
      while (_0x85767c.length < _0x35297d) {
        _0x85767c = _0x32a18f[0] + _0x85767c;
      }
      return _0x85767c;
    }
    function _0x30780b(_0xf1547b, _0x2783e) {
      return _0x4813b7(_0xf1547b, _0x2783e, "0");
    }
    function _0x4b9e25(_0x1bca4c, _0x402772) {
      function _0x12d888(_0x309409) {
        if (_0x309409 < 0) {
          return -1;
        } else if (_0x309409 > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0x50a153;
      if ((_0x50a153 = _0x12d888(_0x1bca4c.getFullYear() - _0x402772.getFullYear())) === 0) {
        if ((_0x50a153 = _0x12d888(_0x1bca4c.getMonth() - _0x402772.getMonth())) === 0) {
          _0x50a153 = _0x12d888(_0x1bca4c.getDate() - _0x402772.getDate());
        }
      }
      return _0x50a153;
    }
    function _0x41390c(_0xea7772) {
      switch (_0xea7772.getDay()) {
        case 0:
          return new Date(_0xea7772.getFullYear() - 1, 11, 29);
        case 1:
          return _0xea7772;
        case 2:
          return new Date(_0xea7772.getFullYear(), 0, 3);
        case 3:
          return new Date(_0xea7772.getFullYear(), 0, 2);
        case 4:
          return new Date(_0xea7772.getFullYear(), 0, 1);
        case 5:
          return new Date(_0xea7772.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0xea7772.getFullYear() - 1, 11, 30);
      }
    }
    function _0x483513(_0x38805e) {
      var _0x1939d2 = _0x34306e(new Date(_0x38805e.tm_year + 1900, 0, 1), _0x38805e.tm_yday);
      var _0x200bac = new Date(_0x1939d2.getFullYear(), 0, 4);
      var _0x26fa1f = new Date(_0x1939d2.getFullYear() + 1, 0, 4);
      var _0x5d516c = _0x41390c(_0x200bac);
      var _0x369c35 = _0x41390c(_0x26fa1f);
      if (_0x4b9e25(_0x5d516c, _0x1939d2) <= 0) {
        if (_0x4b9e25(_0x369c35, _0x1939d2) <= 0) {
          return _0x1939d2.getFullYear() + 1;
        } else {
          return _0x1939d2.getFullYear();
        }
      } else {
        return _0x1939d2.getFullYear() - 1;
      }
    }
    var _0x545699 = {
      "%a": function (_0x5049dc) {
        return _0x381102[_0x5049dc.tm_wday].substring(0, 3);
      },
      "%A": function (_0x5bec51) {
        return _0x381102[_0x5bec51.tm_wday];
      },
      "%b": function (_0x283d03) {
        return _0xeb36b4[_0x283d03.tm_mon].substring(0, 3);
      },
      "%B": function (_0x1c17c2) {
        return _0xeb36b4[_0x1c17c2.tm_mon];
      },
      "%C": function (_0x3e922a) {
        var _0x303f2a = _0x3e922a.tm_year + 1900;
        return _0x30780b(_0x303f2a / 100 | 0, 2);
      },
      "%d": function (_0x233514) {
        return _0x30780b(_0x233514.tm_mday, 2);
      },
      "%e": function (_0x276762) {
        return _0x4813b7(_0x276762.tm_mday, 2, " ");
      },
      "%g": function (_0x3dbc48) {
        return _0x483513(_0x3dbc48).toString().substring(2);
      },
      "%G": function (_0x1968e6) {
        return _0x483513(_0x1968e6);
      },
      "%H": function (_0x3537d0) {
        return _0x30780b(_0x3537d0.tm_hour, 2);
      },
      "%I": function (_0x1a9ce0) {
        var _0x379f13 = _0x1a9ce0.tm_hour;
        if (_0x379f13 == 0) {
          _0x379f13 = 12;
        } else if (_0x379f13 > 12) {
          _0x379f13 -= 12;
        }
        return _0x30780b(_0x379f13, 2);
      },
      "%j": function (_0x273df8) {
        return _0x30780b(_0x273df8.tm_mday + _0x240620(_0x153b5c(_0x273df8.tm_year + 1900) ? _0x4a3164 : _0x4d9d2b, _0x273df8.tm_mon - 1), 3);
      },
      "%m": function (_0x58ea27) {
        return _0x30780b(_0x58ea27.tm_mon + 1, 2);
      },
      "%M": function (_0x1c9344) {
        return _0x30780b(_0x1c9344.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x5272d0) {
        if (_0x5272d0.tm_hour >= 0 && _0x5272d0.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x5c8288) {
        return _0x30780b(_0x5c8288.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x2a3bf0) {
        return _0x2a3bf0.tm_wday || 7;
      },
      "%U": function (_0x174763) {
        var _0x2cb83f = new Date(_0x174763.tm_year + 1900, 0, 1);
        var _0x1add93 = _0x2cb83f.getDay() === 0 ? _0x2cb83f : _0x34306e(_0x2cb83f, 7 - _0x2cb83f.getDay());
        var _0x4d16ac = new Date(_0x174763.tm_year + 1900, _0x174763.tm_mon, _0x174763.tm_mday);
        if (_0x4b9e25(_0x1add93, _0x4d16ac) < 0) {
          var _0x32a306 = _0x240620(_0x153b5c(_0x4d16ac.getFullYear()) ? _0x4a3164 : _0x4d9d2b, _0x4d16ac.getMonth() - 1) - 31;
          var _0x5b3e81 = 31 - _0x1add93.getDate();
          var _0x583b85 = _0x5b3e81 + _0x32a306 + _0x4d16ac.getDate();
          return _0x30780b(Math.ceil(_0x583b85 / 7), 2);
        }
        if (_0x4b9e25(_0x1add93, _0x2cb83f) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0xeb7e6f) {
        var _0x2e82d1 = new Date(_0xeb7e6f.tm_year + 1900, 0, 4);
        var _0x35dc4e = new Date(_0xeb7e6f.tm_year + 1901, 0, 4);
        var _0x3c066d = _0x41390c(_0x2e82d1);
        var _0x50caf1 = _0x41390c(_0x35dc4e);
        var _0x27750b = _0x34306e(new Date(_0xeb7e6f.tm_year + 1900, 0, 1), _0xeb7e6f.tm_yday);
        if (_0x4b9e25(_0x27750b, _0x3c066d) < 0) {
          return "53";
        }
        if (_0x4b9e25(_0x50caf1, _0x27750b) <= 0) {
          return "01";
        }
        var _0x6b6751;
        if (_0x3c066d.getFullYear() < _0xeb7e6f.tm_year + 1900) {
          _0x6b6751 = _0xeb7e6f.tm_yday + 32 - _0x3c066d.getDate();
        } else {
          _0x6b6751 = _0xeb7e6f.tm_yday + 1 - _0x3c066d.getDate();
        }
        return _0x30780b(Math.ceil(_0x6b6751 / 7), 2);
      },
      "%w": function (_0x536fee) {
        return _0x536fee.tm_wday;
      },
      "%W": function (_0x586c94) {
        var _0x14b7ad = new Date(_0x586c94.tm_year, 0, 1);
        var _0x3386ba = _0x14b7ad.getDay() === 1 ? _0x14b7ad : _0x34306e(_0x14b7ad, _0x14b7ad.getDay() === 0 ? 1 : 7 - _0x14b7ad.getDay() + 1);
        var _0x2d5cac = new Date(_0x586c94.tm_year + 1900, _0x586c94.tm_mon, _0x586c94.tm_mday);
        if (_0x4b9e25(_0x3386ba, _0x2d5cac) < 0) {
          var _0x43348b = _0x240620(_0x153b5c(_0x2d5cac.getFullYear()) ? _0x4a3164 : _0x4d9d2b, _0x2d5cac.getMonth() - 1) - 31;
          var _0x7bbaeb = 31 - _0x3386ba.getDate();
          var _0x1da035 = _0x7bbaeb + _0x43348b + _0x2d5cac.getDate();
          return _0x30780b(Math.ceil(_0x1da035 / 7), 2);
        }
        if (_0x4b9e25(_0x3386ba, _0x14b7ad) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x8b6717) {
        return (_0x8b6717.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0x563e68) {
        return _0x563e68.tm_year + 1900;
      },
      "%z": function (_0x35fe42) {
        var _0x27bf5e = _0x35fe42.tm_gmtoff;
        var _0x542e84 = _0x27bf5e >= 0;
        _0x27bf5e = Math.abs(_0x27bf5e) / 60;
        _0x27bf5e = _0x27bf5e / 60 * 100 + _0x27bf5e % 60;
        return (_0x542e84 ? "+" : "-") + String("0000" + _0x27bf5e).slice(-4);
      },
      "%Z": function (_0x17ad12) {
        return _0x17ad12.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0x1e2622 in _0x545699) {
      if (_0x322268.includes(_0x1e2622)) {
        _0x322268 = _0x322268.replace(new RegExp(_0x1e2622, "g"), _0x545699[_0x1e2622](_0x2da887));
      }
    }
    var _0x121dcc = _0x710a1f(_0x322268, false);
    if (_0x121dcc.length > _0x151065) {
      return 0;
    }
    _0x4fc45f(_0x121dcc, _0x24482a);
    return _0x121dcc.length - 1;
  }
  function _0x4b55e8(_0x5a4669) {
    var _0x2d7510 = Date.now() / 1000 | 0;
    if (_0x5a4669) {
      _0x2c6e39[_0x5a4669 >> 2] = _0x2d7510;
    }
    return _0x2d7510;
  }
  function _0x4d2bbf(_0x3832b3, _0x3fdc37) {
    _0x3832b3 = _0xa8c6ca(_0x3832b3);
    try {
      _0xcb2023.utime(_0x3832b3, _0x3fdc37, _0x3fdc37);
      return 0;
    } catch (_0x54cf8d) {
      if (!(_0x54cf8d instanceof _0xcb2023.ErrnoError)) {
        throw _0x54cf8d + " : " + _0x34b948();
      }
      _0x345717(_0x54cf8d.errno);
      return -1;
    }
  }
  function _0x38c027(_0x318924, _0x49346d) {
    var _0x2d0977;
    if (_0x49346d) {
      _0x2d0977 = _0x2c6e39[_0x49346d + 4 >> 2] * 1000;
    } else {
      _0x2d0977 = Date.now();
    }
    return _0x4d2bbf(_0x318924, _0x2d0977);
  }
  function _0x537f6d(_0x2d0dbf, _0x5f0c38, _0x5adbcc, _0x9ae19d) {
    if (!_0x2d0dbf) {
      _0x2d0dbf = this;
    }
    this.parent = _0x2d0dbf;
    this.mount = _0x2d0dbf.mount;
    this.mounted = null;
    this.id = _0xcb2023.nextInode++;
    this.name = _0x5f0c38;
    this.mode = _0x5adbcc;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x9ae19d;
  }
  var _0x23dfae = 365;
  var _0xf33585 = 146;
  Object.defineProperties(_0x537f6d.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x23dfae) === _0x23dfae;
      },
      set: function (_0x2ccc92) {
        if (_0x2ccc92) {
          this.mode |= _0x23dfae;
        } else {
          this.mode &= ~_0x23dfae;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0xf33585) === _0xf33585;
      },
      set: function (_0x2a46f9) {
        if (_0x2a46f9) {
          this.mode |= _0xf33585;
        } else {
          this.mode &= ~_0xf33585;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0xcb2023.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0xcb2023.isChrdev(this.mode);
      }
    }
  });
  _0xcb2023.FSNode = _0x537f6d;
  _0xcb2023.staticInit();
  _0x4141f5.FS_createPath = _0xcb2023.createPath;
  _0x4141f5.FS_createDataFile = _0xcb2023.createDataFile;
  _0x4141f5.requestFullscreen = function _0x3f69cb(_0x376e7c, _0x5f34e5) {
    _0x4989e8.requestFullscreen(_0x376e7c, _0x5f34e5);
  };
  _0x4141f5.requestAnimationFrame = function _0x1b269e(_0xe9f9c3) {
    _0x4989e8.requestAnimationFrame(_0xe9f9c3);
  };
  _0x4141f5.setCanvasSize = function _0x137756(_0x47501c, _0xecfcc5, _0x59da07) {
    _0x4989e8.setCanvasSize(_0x47501c, _0xecfcc5, _0x59da07);
  };
  _0x4141f5.pauseMainLoop = function _0x37b3ff() {
    _0x4989e8.mainLoop.pause();
  };
  _0x4141f5.resumeMainLoop = function _0x58bcd2() {
    _0x4989e8.mainLoop.resume();
  };
  _0x4141f5.getUserMedia = function _0x46149d() {
    _0x4989e8.getUserMedia();
  };
  _0x4141f5.createContext = function _0x9030eb(_0x122444, _0x13541d, _0x509628, _0x262c0f) {
    return _0x4989e8.createContext(_0x122444, _0x13541d, _0x509628, _0x262c0f);
  };
  var _0xd640f0;
  for (var _0x46d271 = 0; _0x46d271 < 32; ++_0x46d271) {
    _0x12aaaf.push(new Array(_0x46d271));
  }
  var _0x49c865 = new Float32Array(288);
  for (var _0x46d271 = 0; _0x46d271 < 288; ++_0x46d271) {
    _0x274fad[_0x46d271] = _0x49c865.subarray(0, _0x46d271 + 1);
  }
  var _0x24fa4d = new Int32Array(288);
  for (var _0x46d271 = 0; _0x46d271 < 288; ++_0x46d271) {
    _0x1282b6[_0x46d271] = _0x24fa4d.subarray(0, _0x46d271 + 1);
  }
  function _0x710a1f(_0x28a5a8, _0x3854ab, _0x1c26ba) {
    var _0x38c044 = _0x1c26ba > 0 ? _0x1c26ba : _0x4da9ba(_0x28a5a8) + 1;
    var _0x468487 = new Array(_0x38c044);
    var _0x1120d6 = _0x3e0117(_0x28a5a8, _0x468487, 0, _0x468487.length);
    if (_0x3854ab) {
      _0x468487.length = _0x1120d6;
    }
    return _0x468487;
  }
  var _0x52dc77 = {
    Aj: _0x19bd74,
    wj: _0x382d4e,
    _c: _0x13a78d,
    Dk: _0xd84a4,
    ok: _0x3d7980,
    Xj: _0x1140de,
    Bk: _0x244de4,
    Ak: _0x46595c,
    xk: _0x6e4580,
    zk: _0x39bf2e,
    yk: _0x436e74,
    yj: _0x1cbee6,
    xj: _0x58b5b4,
    Oj: _0x4e579a,
    nj: _0x11d51e,
    Zc: _0x517826,
    jj: _0x2b9f39,
    Ek: _0xfb555a,
    $c: _0xc0e5de,
    bd: _0x4fd3b1,
    ad: _0x39e2f3,
    ck: _0x38173f,
    tk: _0x8d7730,
    sk: _0x1c957e,
    pj: _0x113da9,
    Dj: _0x18e37b,
    Cj: _0x13ed10,
    gj: _0x461773,
    wk: _0x52277e,
    vk: _0x3d6e84,
    hj: _0x270436,
    Sj: _0x4807ad,
    gk: _0x49671d,
    lk: _0x45b7ea,
    kk: _0x5b9164,
    jk: _0x1c7c92,
    ak: _0x5ea61c,
    $j: _0x3ebc96,
    _j: _0x5991e9,
    Zj: _0x3946f9,
    uk: _0x4d9661,
    pk: _0x2ba99f,
    uj: _0x32cfbf,
    ij: _0x5bb6db,
    hk: _0x1f441d,
    mf: _0x41eb3d,
    Ob: _0x7153cb,
    Nb: _0x43d788,
    rf: _0x15e9d,
    Wa: _0x16ad13,
    Va: _0x493c18,
    Re: _0x30b083,
    vf: _0x7ba4eb,
    Te: _0x4e2319,
    Ke: _0x4681aa,
    ga: _0x42a63a,
    kf: _0x1d992c,
    Jb: _0x1b96e4,
    Ib: _0x1a1393,
    hf: _0x2b12d5,
    jf: _0x3c4a68,
    Hb: _0x197404,
    Gb: _0x736367,
    ed: _0x483e45,
    lf: _0x154b3f,
    Mb: _0x14ca4a,
    Kb: _0x5027e1,
    Se: _0x1b7004,
    Ue: _0x2252fd,
    nf: _0x405aec,
    Qb: _0x4f6a43,
    Pb: _0xe3e462,
    Rb: _0x30b407,
    Ne: _0x2b1985,
    gf: _0x456abb,
    pf: _0x468376,
    la: _0x38a01f,
    Cg: _0x32f22d,
    ba: _0xfd6ae3,
    wg: _0x60e863,
    ug: _0x385ed8,
    Bg: _0x43d62d,
    hc: _0x1ba4ea,
    vg: _0x1f06a1,
    Za: _0x7cfa35,
    _a: _0x3010f7,
    Sb: _0x431d60,
    xg: _0x2d7f22,
    rg: _0x55c54d,
    tg: _0x277044,
    jc: _0x156802,
    ic: _0x212dcc,
    xa: _0x3c8b55,
    ma: _0x44033a,
    Ag: _0x11035f,
    zg: _0x277fa0,
    ya: _0x5e36f8,
    Ab: _0x11f2d9,
    zb: _0x368c2a,
    pa: _0x3d3f43,
    wa: _0x3a5f46,
    xb: _0x29a698,
    yb: _0x1b2ab5,
    Fb: _0x329c15,
    ka: _0xc5c20,
    Bb: _0x1f0c7d,
    Db: _0x5f770d,
    We: _0x3bd802,
    bc: _0x25ec68,
    wf: _0x3a3968,
    Cb: _0x422d59,
    ef: _0x13be85,
    Aa: _0x4c6fa3,
    sf: _0x2970ae,
    Qe: _0x2edb2b,
    Df: _0x4b7812,
    Yf: _0x762cab,
    va: _0x37627b,
    Nf: _0x5f519c,
    Uf: _0x37b08f,
    If: _0x1ba98d,
    Jf: _0x28fba5,
    Of: _0x3fa22b,
    Rf: _0x29d391,
    Lf: _0x256e5e,
    dc: _0x502906,
    Tf: _0x455dd1,
    cc: _0x5e7a38,
    Vf: _0x4f545f,
    Xf: _0x1b6ebc,
    Kf: _0x1ddb3d,
    Gf: _0x117230,
    Qf: _0x1a297a,
    Wf: _0x187ec7,
    Sf: _0x69f636,
    Hf: _0x37fc64,
    Ef: _0x2a8438,
    Ff: _0x2a36f9,
    Pf: _0x57255e,
    ng: _0x4e4726,
    fc: _0x35d8ab,
    lg: _0x41649b,
    mg: _0x16e8f8,
    qg: _0x1c347d,
    kg: _0x222de7,
    pg: _0x1db91f,
    og: _0xd967ea,
    ec: _0x15c438,
    gc: _0x4e57e8,
    gg: _0x2acf17,
    dg: _0x2c0125,
    eg: _0x1db62f,
    fg: _0x15924f,
    Ya: _0x574768,
    _f: _0x2b44dd,
    bg: _0x3b66ac,
    $f: _0x44bc79,
    cg: _0x353d7e,
    Lj: _0x338085,
    Jj: _0x157765,
    Hj: _0x24f436,
    rj: _0x506c53,
    tj: _0x505b75,
    Nj: _0x37032d,
    lj: _0xbe9f21,
    kj: _0x3ff36e,
    Fj: _0x19df1e,
    Tj: _0x43f44d,
    fk: _0x2d58cf,
    Rj: _0x5ec08d,
    Qj: _0x5c45d4,
    ob: _0x306c7a,
    ek: _0x2da032,
    dk: _0xd956ae,
    vj: _0x36b639,
    fj: _0xac51cc,
    Ck: _0x42297b,
    rk: _0x488ad7,
    Ik: _0x25250e,
    Hk: _0x3bdc05,
    Fk: _0x44e038,
    Gk: _0x7c6d20,
    Bj: _0x1a2d7c,
    mj: _0x244925,
    mk: _0x447e3b,
    nk: _0x1f5bd7,
    qk: _0x77d565,
    Yc: _0x805780,
    Yj: _0x31c32a,
    Wj: _0x26f468,
    Uj: _0x4c9ee6,
    Vj: _0x4aca55,
    Kj: _0x4f1407,
    Ij: _0x4024f9,
    Gj: _0x27e756,
    qj: _0xe9ac56,
    sj: _0x5a8e36,
    Mj: _0x568fd3,
    ik: _0x1bbff8,
    Ej: _0x48213b,
    zj: _0x4d3d10,
    Pj: _0x531591,
    oj: _0x4ef437,
    mb: _0x4b0a90,
    aj: _0x2bcffd,
    Tc: _0x586ae5,
    _i: _0x22e582,
    Uc: _0x5ea31d,
    Xi: _0x549836,
    Zi: _0x23fba6,
    Yi: _0x3295c7,
    $i: _0x272366,
    p: _0x155a2f,
    h: _0x19c3ba,
    n: _0x129ade,
    g: _0x40d199,
    a: _0x5747ee,
    Ok: _0x54efc,
    nb: _0x11250c,
    ud: _0x268591,
    ha: _0x50e1d5,
    gd: _0x5bc603,
    hd: _0x4b3fa0,
    k: _0x12b399,
    of: _0x1c2d7d,
    ag: _0x39842c,
    qf: _0x1bac6b,
    Tg: _0x29de54,
    rd: _0x55ec14,
    Eg: _0x35ab74,
    xd: _0x541b84,
    T: _0x527711,
    Mh: _0x59eb64,
    Bh: _0x208145,
    od: _0x184a73,
    ld: _0x2827ef,
    Nc: _0x3159c3,
    Oc: _0x499ae3,
    zd: _0x33bdb4,
    kd: _0x5c8770,
    sg: _0x3f9ac2,
    Lg: _0x383db3,
    Hg: _0x16e080,
    Lb: _0x2e5d90,
    jg: _0x1d64ef,
    sd: _0x12adbc,
    nd: _0x2a7c16,
    uf: _0x3c30af,
    ke: _0x1bc714,
    ib: _0x2ef5cd,
    td: _0x2b6e91,
    yg: _0x459d5d,
    Vi: _0x42ec14,
    Cf: _0x58af5f,
    vd: _0x4aadc5,
    pd: _0x394c64,
    md: _0x37b8b9,
    wd: _0x9d7b66,
    Mf: _0x420eef,
    tf: _0x23cfc9,
    yd: _0x3eada1,
    vb: _0x2e59ff,
    Ec: _0x4653b4,
    Dg: _0x1dad4c,
    Fg: _0x283b44,
    Qd: _0x3cf951,
    qd: _0x5d4c5d,
    x: _0x470a1f,
    Q: _0x141b3d,
    jd: _0x178b5a,
    sb: _0x47d6dd,
    Na: _0x5f4796,
    Zg: _0x4ff91e,
    Ca: _0x2d5eef,
    rc: _0x2beb0b,
    hh: _0x3ad938,
    Xa: _0x3d0924,
    Oe: _0x4fb4ce,
    Me: _0x5b830a,
    cf: _0x3babba,
    Xe: _0x230c91,
    Ve: _0x14aa3a,
    bf: _0x144f0b,
    Sa: _0x104f93,
    id: _0x2fc518,
    M: _0x4b4cca,
    Ta: _0x53ea82,
    Pe: _0x476b69,
    zf: _0x51dac1,
    C: _0x3b5936,
    D: _0x3cf8b2,
    Pk: _0x72d1e0,
    df: _0x4febf9,
    Ye: _0x25cef2,
    Qk: _0x52ec1c,
    Ua: _0x4ce4cf,
    Eb: _0x201e23,
    Ra: _0x38740c,
    $e: _0x1ce95e,
    af: _0x3106f6,
    Ub: _0x2bbfd0,
    Tb: _0x5bfc2b,
    Je: _0x521076,
    sa: _0x5804b0,
    qa: _0x39dbe5,
    ra: _0x4d6235,
    Ie: _0x24c257,
    Le: _0x51a320,
    $b: _0x3e2181,
    _b: _0x2641de,
    ac: _0x171ef8,
    Ze: _0x5640ff,
    Vb: _0x2d3697,
    Xb: _0x3d5a61,
    Wb: _0x407cf7,
    Yb: _0x7fa3ee,
    Zb: _0x211f70,
    fd: _0x26e9c7,
    Bf: _0x2a9ae5,
    Af: _0x5112da,
    ta: _0x1fe1c7,
    yf: _0x31ccf1,
    Ig: _0xe5f204,
    ua: _0x1d63ac,
    _e: _0x41afdd,
    ff: _0x44ac79,
    z: _0x27c7b6,
    $: _0x3ea4fe,
    oc: _0x37d439,
    ub: _0x130240,
    He: _0x1eca02,
    kb: _0x189cf7,
    za: _0x4f4741,
    b: _0x268c67,
    je: _0x35bb77,
    hg: _0x171615,
    ig: _0xd9d716,
    wb: _0x39fb8d,
    Gg: _0x37f4c5,
    Ma: _0x32565b,
    Mi: _0x2bc6dd,
    Ji: _0x1df5d7,
    qc: _0x50d678,
    xh: _0x2264ca,
    Ia: _0x3756b9,
    Ii: _0xd7c064,
    Xg: _0xef9b58,
    Wg: _0x5f3215,
    Fi: _0x3dae36,
    Gi: _0x19ee0b,
    Qg: _0xd2993f,
    Hi: _0x2d2ff9,
    qh: _0x171bf1,
    th: _0xe2dbc,
    Kc: _0x5e7cd3,
    Lc: _0x44a982,
    Mc: _0x404627,
    ih: _0x582905,
    Di: _0x523532,
    Ei: _0x26b6f8,
    Ci: _0x109768,
    yi: _0x2c88e9,
    Mg: _0x2ef8ef,
    Kg: _0x5e879d,
    Jg: _0x33cc28,
    zi: _0xc40293,
    Ai: _0x578c12,
    Bi: _0x2d59ea,
    Ad: _0x423b2e,
    lb: _0x3466a4,
    xi: _0x562851,
    vi: _0xb35c5b,
    kh: _0x439a5e,
    wi: _0x4dbb85,
    oh: _0x5e851a,
    $g: _0x947dca,
    ui: _0x345ff7,
    Jc: _0x4cf257,
    ti: _0xc1d983,
    si: _0x587c81,
    ri: _0x3debfa,
    qi: _0x42e647,
    pi: _0x549074,
    oi: _0x239926,
    db: _0xc8f6be,
    ni: _0x2780ac,
    Pg: _0x352785,
    mi: _0x4e1029,
    lc: _0x3f6f47,
    li: _0x2b5e1c,
    rh: _0x1f106e,
    vh: _0x561c17,
    Ha: _0x1d48ad,
    Ga: _0xb97b06,
    ki: _0x5b1924,
    ji: _0x1e2743,
    ii: _0x4d214a,
    fi: _0xb4a8ab,
    bh: _0xfe0a42,
    _g: _0x3454a6,
    gi: _0x2a2b9e,
    ah: _0x5a69af,
    hi: _0x16adff,
    ei: _0x4bc4ee,
    sc: _0x45c49a,
    yh: _0x56360b,
    kc: _0x1f53e0,
    bi: _0x26312d,
    ci: _0x3a0add,
    eh: _0x39d7ab,
    W: _0x57f797,
    R: _0x31ea62,
    Ba: _0x49109a,
    Fa: _0x1a9c9e,
    ai: _0x23b02e,
    Yh: _0x1f0f0e,
    pc: _0x448cd2,
    Zh: _0x58d838,
    Og: _0x535bca,
    $h: _0x5be91b,
    sh: _0x14a668,
    wh: _0x1777a3,
    _h: _0x1cb8b4,
    Si: _0x11986a,
    jb: _0x11ff6c,
    ab: _0x47aa64,
    da: _0x419b14,
    ca: _0x161889,
    Ri: _0x5b8390,
    xf: _0x194093,
    Xh: _0x22c1f6,
    Wh: _0x3b4a06,
    Li: _0x36b2bd,
    Ja: _0xf43afe,
    Sg: _0x356b31,
    mc: _0x17656c,
    Oi: _0x1e4ade,
    _: _0x34afcc,
    Ah: _0x975ae9,
    zh: _0x4b2647,
    di: _0x16c301,
    Uh: _0x3385de,
    Hc: _0x4b4630,
    Vh: _0x1f1165,
    Ni: _0x23dd13,
    Th: _0x51eb00,
    fh: _0x38603e,
    Sh: _0x5a32c2,
    Ug: _0x2eacc7,
    $a: _0xc7ed0f,
    na: _0x3bccbb,
    Gc: _0x5cda40,
    Qi: _0x2b322b,
    cb: _0x272421,
    Ki: _0x565970,
    uh: _0x29799f,
    Qh: _0x3aa164,
    ch: _0x4c8d4a,
    Rh: _0x4cea63,
    Fc: _0x1d45ba,
    nc: _0x28ec11,
    Ng: _0x43367a,
    Yg: _0x535333,
    fa: _0x194e8f,
    Ph: _0x5e4694,
    gh: _0x42d4ed,
    Rg: _0x4272eb,
    hb: _0x461a89,
    Nh: _0x1b6b17,
    Oh: _0x163ba6,
    Kh: _0x2c26c5,
    Lh: _0x43398c,
    Ih: _0x3c6b30,
    mh: _0x37834b,
    Jh: _0x2d04aa,
    gb: _0x41d936,
    Hh: _0xc2a5d9,
    jh: _0x48076d,
    lh: _0x5d5f6c,
    Gh: _0x5b0df7,
    nh: _0xa02abf,
    ph: _0x5b6400,
    tc: _0x5ef1a9,
    Da: _0x5b9736,
    uc: _0xe14a9d,
    vc: _0x2ec47e,
    wc: _0x5c0a57,
    xc: _0x797a5,
    yc: _0x144eb0,
    fb: _0x5b8c27,
    zc: _0x2766ac,
    Ac: _0x2b302c,
    ea: _0x112c30,
    Bc: _0x890963,
    Cc: _0x5d62fc,
    bb: _0x2c73ea,
    Dc: _0x19750c,
    Ea: _0x2a97f4,
    dh: _0x29eee1,
    Ch: _0x1608a5,
    Pi: _0x4b7fce,
    Dh: _0xa8d918,
    Eh: _0x265715,
    Vg: _0x2bb9da,
    Fh: _0x21388e,
    eb: _0x3f8502,
    Wc: _0x266958,
    Nk: _0xffa8f6,
    I: _0x4e035b,
    P: _0x71c0db,
    Rc: _0x53afd7,
    K: _0x5a0a82,
    $d: _0x1d2825,
    Xc: _0x4a7839,
    La: _0x115063,
    Y: _0x5085a4,
    U: _0xa892ec,
    H: _0x1aa230,
    E: _0x542fe8,
    Qc: _0x216bca,
    L: _0x1b071b,
    w: _0x44a0cf,
    rb: _0x48e613,
    bk: _0x4dcc40,
    dd: _0x325fe6,
    d: _0x27f749,
    dj: _0x2aa675,
    cj: _0x2518ca,
    c: _0x27bb59,
    pb: _0x51cd36,
    Sc: _0x242bb3,
    j: _0x1a69c8,
    Ui: _0x45495e,
    ja: _0x415fae,
    Ti: _0x435392,
    q: _0x22dfc2,
    Ka: _0x261b84,
    Lk: _0x36c832,
    s: _0x521d0b,
    u: _0x54fb37,
    A: _0x488fdb,
    G: _0x236b30,
    S: _0x10dc68,
    Pc: _0x525ca8,
    Mk: _0x5a7e4a,
    Pd: _0x5f2463,
    Wd: _0x5e3c2f,
    Bd: _0x12487b,
    Vd: _0x5a6f9a,
    Fe: _0x11d14f,
    ie: _0x4507ea,
    Ce: _0x10e86b,
    De: _0x58b49e,
    qe: _0xdb4fef,
    re: _0x34561e,
    Ud: _0x697bbd,
    Sd: _0x558eda,
    ne: _0x16d802,
    Td: _0x890386,
    me: _0x2adf70,
    Ld: _0x18dbfe,
    pe: _0x4e0cc7,
    Ee: _0x1884fe,
    Zd: _0x383a25,
    Be: _0x67c3c6,
    se: _0x6aab40,
    Ae: _0x306a40,
    we: _0x25ac75,
    Ge: _0x53c432,
    Cd: _0x416f9c,
    Jd: _0x511838,
    Id: _0x535e9d,
    ze: _0x3d41b,
    oe: _0x207fc3,
    Dd: _0x5749cf,
    Rd: _0x5b71dd,
    be: _0x4dea90,
    ae: _0x305ee2,
    ye: _0xda7d23,
    e: _0x4b5424,
    l: _0x1c2ce4,
    Zf: _0x3bf3e4,
    y: _0x43a74e,
    F: _0xd96960,
    m: _0x4fd986,
    oa: _0x2cce2a,
    Ic: _0x2f2763,
    Z: _0x1571aa,
    Jk: _0x4be960,
    O: _0x29cd75,
    f: _0x29f13c,
    qb: _0xbc734d,
    Kk: _0x2cf268,
    o: _0x244e70,
    bj: _0x2f1090,
    r: _0x16fc0f,
    t: _0x3e70dd,
    B: _0x119792,
    ej: _0x50fedd,
    Wi: _0x23e14f,
    N: _0x32c756,
    ce: _0xcd5a32,
    J: _0x2c51c6,
    V: _0x33aa52,
    cd: _0xaafef7,
    ia: _0x11a473,
    Vc: _0x1bbd77,
    Xd: _0x4e4da0,
    de: _0x268bb3,
    _d: _0x577f8a,
    Kd: _0x83c3b0,
    le: _0xee1b94,
    ve: _0x52f2ab,
    he: _0x4775e5,
    Ed: _0x137c0c,
    xe: _0x5e8fc0,
    Nd: _0x18c220,
    ue: _0x4f2a2a,
    te: _0x589019,
    Md: _0x2c8f97,
    ee: _0x3a0781,
    Hd: _0xb617c2,
    Yd: _0x4a6d06,
    Od: _0x403416,
    ge: _0x10b234,
    Fd: _0x347309,
    fe: _0x419823,
    Gd: _0x1777d7,
    i: _0x18c27c,
    aa: _0x1ec341,
    v: _0x9c8838,
    Pa: _0x21afb5,
    Qa: _0x210e73,
    Oa: _0x23051e,
    X: _0x4b55e8,
    tb: _0x38c027
  };
  var _0x16368a = _0x4a123d();
  var _0x3614d7 = _0x4141f5.___wasm_call_ctors = function () {
    return (_0x3614d7 = _0x4141f5.___wasm_call_ctors = _0x4141f5.asm.Sk).apply(null, arguments);
  };
  var _0x19a41d = _0x4141f5._ReleaseKeys = function () {
    return (_0x19a41d = _0x4141f5._ReleaseKeys = _0x4141f5.asm.Tk).apply(null, arguments);
  };
  var _0x5afa49 = _0x4141f5._SendMessageFloat = function () {
    return (_0x5afa49 = _0x4141f5._SendMessageFloat = _0x4141f5.asm.Uk).apply(null, arguments);
  };
  var _0x3fe313 = _0x4141f5._SendMessageString = function () {
    return (_0x3fe313 = _0x4141f5._SendMessageString = _0x4141f5.asm.Vk).apply(null, arguments);
  };
  var _0x40617a = _0x4141f5._SendMessage = function () {
    return (_0x40617a = _0x4141f5._SendMessage = _0x4141f5.asm.Wk).apply(null, arguments);
  };
  var _0x569a27 = _0x4141f5._SetFullscreen = function () {
    return (_0x569a27 = _0x4141f5._SetFullscreen = _0x4141f5.asm.Xk).apply(null, arguments);
  };
  var _0x4e7f07 = _0x4141f5._main = function () {
    return (_0x4e7f07 = _0x4141f5._main = _0x4141f5.asm.Yk).apply(null, arguments);
  };
  var _0x35c44f = _0x4141f5.___errno_location = function () {
    return (_0x35c44f = _0x4141f5.___errno_location = _0x4141f5.asm.Zk).apply(null, arguments);
  };
  var _0x5e1997 = _0x4141f5._htonl = function () {
    return (_0x5e1997 = _0x4141f5._htonl = _0x4141f5.asm._k).apply(null, arguments);
  };
  var _0x4cad8d = _0x4141f5._htons = function () {
    return (_0x4cad8d = _0x4141f5._htons = _0x4141f5.asm.$k).apply(null, arguments);
  };
  var _0x4c9ee4 = _0x4141f5._ntohs = function () {
    return (_0x4c9ee4 = _0x4141f5._ntohs = _0x4141f5.asm.al).apply(null, arguments);
  };
  var _0x43be3c = _0x4141f5.__get_tzname = function () {
    return (_0x43be3c = _0x4141f5.__get_tzname = _0x4141f5.asm.bl).apply(null, arguments);
  };
  var _0x47866b = _0x4141f5.__get_daylight = function () {
    return (_0x47866b = _0x4141f5.__get_daylight = _0x4141f5.asm.cl).apply(null, arguments);
  };
  var _0x4af4ff = _0x4141f5.__get_timezone = function () {
    return (_0x4af4ff = _0x4141f5.__get_timezone = _0x4141f5.asm.dl).apply(null, arguments);
  };
  var _0x555fcf = _0x4141f5.stackSave = function () {
    return (_0x555fcf = _0x4141f5.stackSave = _0x4141f5.asm.el).apply(null, arguments);
  };
  var _0x346df4 = _0x4141f5.stackRestore = function () {
    return (_0x346df4 = _0x4141f5.stackRestore = _0x4141f5.asm.fl).apply(null, arguments);
  };
  var _0x41cdff = _0x4141f5.stackAlloc = function () {
    return (_0x41cdff = _0x4141f5.stackAlloc = _0x4141f5.asm.gl).apply(null, arguments);
  };
  var _0x22893a = _0x4141f5._setThrew = function () {
    return (_0x22893a = _0x4141f5._setThrew = _0x4141f5.asm.hl).apply(null, arguments);
  };
  var _0x107c34 = _0x4141f5.___cxa_can_catch = function () {
    return (_0x107c34 = _0x4141f5.___cxa_can_catch = _0x4141f5.asm.il).apply(null, arguments);
  };
  var _0x3b8104 = _0x4141f5.___cxa_is_pointer_type = function () {
    return (_0x3b8104 = _0x4141f5.___cxa_is_pointer_type = _0x4141f5.asm.jl).apply(null, arguments);
  };
  var _0x48c1ae = _0x4141f5._malloc = function () {
    return (_0x48c1ae = _0x4141f5._malloc = _0x4141f5.asm.kl).apply(null, arguments);
  };
  var _0x59ed75 = _0x4141f5._free = function () {
    return (_0x59ed75 = _0x4141f5._free = _0x4141f5.asm.ll).apply(null, arguments);
  };
  var _0x10aa47 = _0x4141f5._memalign = function () {
    return (_0x10aa47 = _0x4141f5._memalign = _0x4141f5.asm.ml).apply(null, arguments);
  };
  var _0x4227d2 = _0x4141f5._memset = function () {
    return (_0x4227d2 = _0x4141f5._memset = _0x4141f5.asm.nl).apply(null, arguments);
  };
  var _0xb0036b = _0x4141f5._strlen = function () {
    return (_0xb0036b = _0x4141f5._strlen = _0x4141f5.asm.ol).apply(null, arguments);
  };
  var _0x4c6246 = _0x4141f5.dynCall_iidiiii = function () {
    return (_0x4c6246 = _0x4141f5.dynCall_iidiiii = _0x4141f5.asm.ql).apply(null, arguments);
  };
  var _0x6f8fd4 = _0x4141f5.dynCall_vii = function () {
    return (_0x6f8fd4 = _0x4141f5.dynCall_vii = _0x4141f5.asm.rl).apply(null, arguments);
  };
  var _0x1b8a34 = _0x4141f5.dynCall_iii = function () {
    return (_0x1b8a34 = _0x4141f5.dynCall_iii = _0x4141f5.asm.sl).apply(null, arguments);
  };
  var _0x21b1c5 = _0x4141f5.dynCall_ii = function () {
    return (_0x21b1c5 = _0x4141f5.dynCall_ii = _0x4141f5.asm.tl).apply(null, arguments);
  };
  var _0x2c342c = _0x4141f5.dynCall_iiii = function () {
    return (_0x2c342c = _0x4141f5.dynCall_iiii = _0x4141f5.asm.ul).apply(null, arguments);
  };
  var _0x7f1fa7 = _0x4141f5.dynCall_jiji = function () {
    return (_0x7f1fa7 = _0x4141f5.dynCall_jiji = _0x4141f5.asm.vl).apply(null, arguments);
  };
  var _0xa9e541 = _0x4141f5.dynCall_vi = function () {
    return (_0xa9e541 = _0x4141f5.dynCall_vi = _0x4141f5.asm.wl).apply(null, arguments);
  };
  var _0xec3c3f = _0x4141f5.dynCall_iiiii = function () {
    return (_0xec3c3f = _0x4141f5.dynCall_iiiii = _0x4141f5.asm.xl).apply(null, arguments);
  };
  var _0x54bd5d = _0x4141f5.dynCall_viii = function () {
    return (_0x54bd5d = _0x4141f5.dynCall_viii = _0x4141f5.asm.yl).apply(null, arguments);
  };
  var _0x3abff5 = _0x4141f5.dynCall_viiiiii = function () {
    return (_0x3abff5 = _0x4141f5.dynCall_viiiiii = _0x4141f5.asm.zl).apply(null, arguments);
  };
  var _0x3db51d = _0x4141f5.dynCall_viiiii = function () {
    return (_0x3db51d = _0x4141f5.dynCall_viiiii = _0x4141f5.asm.Al).apply(null, arguments);
  };
  var _0x46f5d9 = _0x4141f5.dynCall_viiii = function () {
    return (_0x46f5d9 = _0x4141f5.dynCall_viiii = _0x4141f5.asm.Bl).apply(null, arguments);
  };
  var _0x5095fb = _0x4141f5.dynCall_iiiiii = function () {
    return (_0x5095fb = _0x4141f5.dynCall_iiiiii = _0x4141f5.asm.Cl).apply(null, arguments);
  };
  var _0x159b2f = _0x4141f5.dynCall_iiij = function () {
    return (_0x159b2f = _0x4141f5.dynCall_iiij = _0x4141f5.asm.Dl).apply(null, arguments);
  };
  var _0x41ec79 = _0x4141f5.dynCall_v = function () {
    return (_0x41ec79 = _0x4141f5.dynCall_v = _0x4141f5.asm.El).apply(null, arguments);
  };
  var _0x1713eb = _0x4141f5.dynCall_i = function () {
    return (_0x1713eb = _0x4141f5.dynCall_i = _0x4141f5.asm.Fl).apply(null, arguments);
  };
  var _0x28ce66 = _0x4141f5.dynCall_iiiiiiii = function () {
    return (_0x28ce66 = _0x4141f5.dynCall_iiiiiiii = _0x4141f5.asm.Gl).apply(null, arguments);
  };
  var _0x3b00e4 = _0x4141f5.dynCall_iiijiii = function () {
    return (_0x3b00e4 = _0x4141f5.dynCall_iiijiii = _0x4141f5.asm.Hl).apply(null, arguments);
  };
  var _0x399f9b = _0x4141f5.dynCall_iij = function () {
    return (_0x399f9b = _0x4141f5.dynCall_iij = _0x4141f5.asm.Il).apply(null, arguments);
  };
  var _0x582bf5 = _0x4141f5.dynCall_iiiiiii = function () {
    return (_0x582bf5 = _0x4141f5.dynCall_iiiiiii = _0x4141f5.asm.Jl).apply(null, arguments);
  };
  var _0x4a7613 = _0x4141f5.dynCall_jii = function () {
    return (_0x4a7613 = _0x4141f5.dynCall_jii = _0x4141f5.asm.Kl).apply(null, arguments);
  };
  var _0x5cb7e2 = _0x4141f5.dynCall_viiiiiii = function () {
    return (_0x5cb7e2 = _0x4141f5.dynCall_viiiiiii = _0x4141f5.asm.Ll).apply(null, arguments);
  };
  var _0x1f6911 = _0x4141f5.dynCall_fiiffi = function () {
    return (_0x1f6911 = _0x4141f5.dynCall_fiiffi = _0x4141f5.asm.Ml).apply(null, arguments);
  };
  var _0x5a0c84 = _0x4141f5.dynCall_viiififii = function () {
    return (_0x5a0c84 = _0x4141f5.dynCall_viiififii = _0x4141f5.asm.Nl).apply(null, arguments);
  };
  var _0x3e270 = _0x4141f5.dynCall_iijji = function () {
    return (_0x3e270 = _0x4141f5.dynCall_iijji = _0x4141f5.asm.Ol).apply(null, arguments);
  };
  var _0x2243c5 = _0x4141f5.dynCall_iiddi = function () {
    return (_0x2243c5 = _0x4141f5.dynCall_iiddi = _0x4141f5.asm.Pl).apply(null, arguments);
  };
  var _0x5884ac = _0x4141f5.dynCall_dii = function () {
    return (_0x5884ac = _0x4141f5.dynCall_dii = _0x4141f5.asm.Ql).apply(null, arguments);
  };
  var _0x508109 = _0x4141f5.dynCall_fii = function () {
    return (_0x508109 = _0x4141f5.dynCall_fii = _0x4141f5.asm.Rl).apply(null, arguments);
  };
  var _0x47ca10 = _0x4141f5.dynCall_ifi = function () {
    return (_0x47ca10 = _0x4141f5.dynCall_ifi = _0x4141f5.asm.Sl).apply(null, arguments);
  };
  var _0x36ad94 = _0x4141f5.dynCall_idi = function () {
    return (_0x36ad94 = _0x4141f5.dynCall_idi = _0x4141f5.asm.Tl).apply(null, arguments);
  };
  var _0x4b7e45 = _0x4141f5.dynCall_jiii = function () {
    return (_0x4b7e45 = _0x4141f5.dynCall_jiii = _0x4141f5.asm.Ul).apply(null, arguments);
  };
  var _0x1f8012 = _0x4141f5.dynCall_viiiiiiii = function () {
    return (_0x1f8012 = _0x4141f5.dynCall_viiiiiiii = _0x4141f5.asm.Vl).apply(null, arguments);
  };
  var _0x4dd3a5 = _0x4141f5.dynCall_viiiiiiiii = function () {
    return (_0x4dd3a5 = _0x4141f5.dynCall_viiiiiiiii = _0x4141f5.asm.Wl).apply(null, arguments);
  };
  var _0x142ca6 = _0x4141f5.dynCall_jiiii = function () {
    return (_0x142ca6 = _0x4141f5.dynCall_jiiii = _0x4141f5.asm.Xl).apply(null, arguments);
  };
  var _0xd3c44c = _0x4141f5.dynCall_fiii = function () {
    return (_0xd3c44c = _0x4141f5.dynCall_fiii = _0x4141f5.asm.Yl).apply(null, arguments);
  };
  var _0x27817a = _0x4141f5.dynCall_viiji = function () {
    return (_0x27817a = _0x4141f5.dynCall_viiji = _0x4141f5.asm.Zl).apply(null, arguments);
  };
  var _0x473b61 = _0x4141f5.dynCall_viifi = function () {
    return (_0x473b61 = _0x4141f5.dynCall_viifi = _0x4141f5.asm._l).apply(null, arguments);
  };
  var _0x3b1a25 = _0x4141f5.dynCall_viiff = function () {
    return (_0x3b1a25 = _0x4141f5.dynCall_viiff = _0x4141f5.asm.$l).apply(null, arguments);
  };
  var _0x59cafb = _0x4141f5.dynCall_ddiii = function () {
    return (_0x59cafb = _0x4141f5.dynCall_ddiii = _0x4141f5.asm.am).apply(null, arguments);
  };
  var _0x4b2b2a = _0x4141f5.dynCall_vijii = function () {
    return (_0x4b2b2a = _0x4141f5.dynCall_vijii = _0x4141f5.asm.bm).apply(null, arguments);
  };
  var _0x594683 = _0x4141f5.dynCall_viiiiiiiiifi = function () {
    return (_0x594683 = _0x4141f5.dynCall_viiiiiiiiifi = _0x4141f5.asm.cm).apply(null, arguments);
  };
  var _0x1ccd13 = _0x4141f5.dynCall_iiiiiiiiiiiii = function () {
    return (_0x1ccd13 = _0x4141f5.dynCall_iiiiiiiiiiiii = _0x4141f5.asm.dm).apply(null, arguments);
  };
  var _0x5bfb58 = _0x4141f5.dynCall_ijji = function () {
    return (_0x5bfb58 = _0x4141f5.dynCall_ijji = _0x4141f5.asm.em).apply(null, arguments);
  };
  var _0x474f3b = _0x4141f5.dynCall_iji = function () {
    return (_0x474f3b = _0x4141f5.dynCall_iji = _0x4141f5.asm.fm).apply(null, arguments);
  };
  var _0x1db909 = _0x4141f5.dynCall_diii = function () {
    return (_0x1db909 = _0x4141f5.dynCall_diii = _0x4141f5.asm.gm).apply(null, arguments);
  };
  var _0x4a8a4e = _0x4141f5.dynCall_jjji = function () {
    return (_0x4a8a4e = _0x4141f5.dynCall_jjji = _0x4141f5.asm.hm).apply(null, arguments);
  };
  var _0x46bd47 = _0x4141f5.dynCall_viij = function () {
    return (_0x46bd47 = _0x4141f5.dynCall_viij = _0x4141f5.asm.im).apply(null, arguments);
  };
  var _0x3765fb = _0x4141f5.dynCall_fiiii = function () {
    return (_0x3765fb = _0x4141f5.dynCall_fiiii = _0x4141f5.asm.jm).apply(null, arguments);
  };
  var _0xd28ae8 = _0x4141f5.dynCall_diiii = function () {
    return (_0xd28ae8 = _0x4141f5.dynCall_diiii = _0x4141f5.asm.km).apply(null, arguments);
  };
  var _0x2e1e02 = _0x4141f5.dynCall_iiiiidii = function () {
    return (_0x2e1e02 = _0x4141f5.dynCall_iiiiidii = _0x4141f5.asm.lm).apply(null, arguments);
  };
  var _0x587265 = _0x4141f5.dynCall_iiiiiiiii = function () {
    return (_0x587265 = _0x4141f5.dynCall_iiiiiiiii = _0x4141f5.asm.mm).apply(null, arguments);
  };
  var _0x3b9860 = _0x4141f5.dynCall_viiifi = function () {
    return (_0x3b9860 = _0x4141f5.dynCall_viiifi = _0x4141f5.asm.nm).apply(null, arguments);
  };
  var _0x1dfc00 = _0x4141f5.dynCall_iiiifii = function () {
    return (_0x1dfc00 = _0x4141f5.dynCall_iiiifii = _0x4141f5.asm.om).apply(null, arguments);
  };
  var _0x30531f = _0x4141f5.dynCall_iiifii = function () {
    return (_0x30531f = _0x4141f5.dynCall_iiifii = _0x4141f5.asm.pm).apply(null, arguments);
  };
  var _0x148624 = _0x4141f5.dynCall_viiiifii = function () {
    return (_0x148624 = _0x4141f5.dynCall_viiiifii = _0x4141f5.asm.qm).apply(null, arguments);
  };
  var _0x439752 = _0x4141f5.dynCall_viiffi = function () {
    return (_0x439752 = _0x4141f5.dynCall_viiffi = _0x4141f5.asm.rm).apply(null, arguments);
  };
  var _0x123e91 = _0x4141f5.dynCall_viffffi = function () {
    return (_0x123e91 = _0x4141f5.dynCall_viffffi = _0x4141f5.asm.sm).apply(null, arguments);
  };
  var _0x58b238 = _0x4141f5.dynCall_fifi = function () {
    return (_0x58b238 = _0x4141f5.dynCall_fifi = _0x4141f5.asm.tm).apply(null, arguments);
  };
  var _0xacc3cf = _0x4141f5.dynCall_viijjii = function () {
    return (_0xacc3cf = _0x4141f5.dynCall_viijjii = _0x4141f5.asm.um).apply(null, arguments);
  };
  var _0x34fc5f = _0x4141f5.dynCall_iiiji = function () {
    return (_0x34fc5f = _0x4141f5.dynCall_iiiji = _0x4141f5.asm.vm).apply(null, arguments);
  };
  var _0x439b62 = _0x4141f5.dynCall_vifi = function () {
    return (_0x439b62 = _0x4141f5.dynCall_vifi = _0x4141f5.asm.wm).apply(null, arguments);
  };
  var _0x2f3e4d = _0x4141f5.dynCall_iiidi = function () {
    return (_0x2f3e4d = _0x4141f5.dynCall_iiidi = _0x4141f5.asm.xm).apply(null, arguments);
  };
  var _0x2c8d49 = _0x4141f5.dynCall_ffi = function () {
    return (_0x2c8d49 = _0x4141f5.dynCall_ffi = _0x4141f5.asm.ym).apply(null, arguments);
  };
  var _0x4c34a6 = _0x4141f5.dynCall_viiifffffiiiii = function () {
    return (_0x4c34a6 = _0x4141f5.dynCall_viiifffffiiiii = _0x4141f5.asm.zm).apply(null, arguments);
  };
  var _0x58d7c7 = _0x4141f5.dynCall_fi = function () {
    return (_0x58d7c7 = _0x4141f5.dynCall_fi = _0x4141f5.asm.Am).apply(null, arguments);
  };
  var _0x52e690 = _0x4141f5.dynCall_iiiifi = function () {
    return (_0x52e690 = _0x4141f5.dynCall_iiiifi = _0x4141f5.asm.Bm).apply(null, arguments);
  };
  var _0x3fedd8 = _0x4141f5.dynCall_viiiiiiiiii = function () {
    return (_0x3fedd8 = _0x4141f5.dynCall_viiiiiiiiii = _0x4141f5.asm.Cm).apply(null, arguments);
  };
  var _0xc23264 = _0x4141f5.dynCall_ffiffi = function () {
    return (_0xc23264 = _0x4141f5.dynCall_ffiffi = _0x4141f5.asm.Dm).apply(null, arguments);
  };
  var _0x5c0695 = _0x4141f5.dynCall_ifffi = function () {
    return (_0x5c0695 = _0x4141f5.dynCall_ifffi = _0x4141f5.asm.Em).apply(null, arguments);
  };
  var _0x2d83b0 = _0x4141f5.dynCall_viidii = function () {
    return (_0x2d83b0 = _0x4141f5.dynCall_viidii = _0x4141f5.asm.Fm).apply(null, arguments);
  };
  var _0x307898 = _0x4141f5.dynCall_viijii = function () {
    return (_0x307898 = _0x4141f5.dynCall_viijii = _0x4141f5.asm.Gm).apply(null, arguments);
  };
  var _0x5b7a8e = _0x4141f5.dynCall_iiji = function () {
    return (_0x5b7a8e = _0x4141f5.dynCall_iiji = _0x4141f5.asm.Hm).apply(null, arguments);
  };
  var _0x506a23 = _0x4141f5.dynCall_vjiii = function () {
    return (_0x506a23 = _0x4141f5.dynCall_vjiii = _0x4141f5.asm.Im).apply(null, arguments);
  };
  var _0x51d6db = _0x4141f5.dynCall_vjiiiiii = function () {
    return (_0x51d6db = _0x4141f5.dynCall_vjiiiiii = _0x4141f5.asm.Jm).apply(null, arguments);
  };
  var _0x3f3b87 = _0x4141f5.dynCall_vijiiii = function () {
    return (_0x3f3b87 = _0x4141f5.dynCall_vijiiii = _0x4141f5.asm.Km).apply(null, arguments);
  };
  var _0x27c501 = _0x4141f5.dynCall_vijiii = function () {
    return (_0x27c501 = _0x4141f5.dynCall_vijiii = _0x4141f5.asm.Lm).apply(null, arguments);
  };
  var _0x4a4c4e = _0x4141f5.dynCall_vijiiiiii = function () {
    return (_0x4a4c4e = _0x4141f5.dynCall_vijiiiiii = _0x4141f5.asm.Mm).apply(null, arguments);
  };
  var _0x4f8786 = _0x4141f5.dynCall_vidi = function () {
    return (_0x4f8786 = _0x4141f5.dynCall_vidi = _0x4141f5.asm.Nm).apply(null, arguments);
  };
  var _0x552079 = _0x4141f5.dynCall_iiiiidi = function () {
    return (_0x552079 = _0x4141f5.dynCall_iiiiidi = _0x4141f5.asm.Om).apply(null, arguments);
  };
  var _0x517df4 = _0x4141f5.dynCall_iidi = function () {
    return (_0x517df4 = _0x4141f5.dynCall_iidi = _0x4141f5.asm.Pm).apply(null, arguments);
  };
  var _0x200033 = _0x4141f5.dynCall_iifi = function () {
    return (_0x200033 = _0x4141f5.dynCall_iifi = _0x4141f5.asm.Qm).apply(null, arguments);
  };
  var _0x52fbd9 = _0x4141f5.dynCall_viiij = function () {
    return (_0x52fbd9 = _0x4141f5.dynCall_viiij = _0x4141f5.asm.Rm).apply(null, arguments);
  };
  var _0x15699f = _0x4141f5.dynCall_viji = function () {
    return (_0x15699f = _0x4141f5.dynCall_viji = _0x4141f5.asm.Sm).apply(null, arguments);
  };
  var _0x484656 = _0x4141f5.dynCall_viif = function () {
    return (_0x484656 = _0x4141f5.dynCall_viif = _0x4141f5.asm.Tm).apply(null, arguments);
  };
  var _0x3e8395 = _0x4141f5.dynCall_jidi = function () {
    return (_0x3e8395 = _0x4141f5.dynCall_jidi = _0x4141f5.asm.Um).apply(null, arguments);
  };
  var _0x16500d = _0x4141f5.dynCall_iijii = function () {
    return (_0x16500d = _0x4141f5.dynCall_iijii = _0x4141f5.asm.Vm).apply(null, arguments);
  };
  var _0x5b4586 = _0x4141f5.dynCall_ji = function () {
    return (_0x5b4586 = _0x4141f5.dynCall_ji = _0x4141f5.asm.Wm).apply(null, arguments);
  };
  var _0x113b9e = _0x4141f5.dynCall_viiiiiiifiifiii = function () {
    return (_0x113b9e = _0x4141f5.dynCall_viiiiiiifiifiii = _0x4141f5.asm.Xm).apply(null, arguments);
  };
  var _0x452644 = _0x4141f5.dynCall_viiiiiiifddfiii = function () {
    return (_0x452644 = _0x4141f5.dynCall_viiiiiiifddfiii = _0x4141f5.asm.Ym).apply(null, arguments);
  };
  var _0x75589c = _0x4141f5.dynCall_viiiiiiifjjfiii = function () {
    return (_0x75589c = _0x4141f5.dynCall_viiiiiiifjjfiii = _0x4141f5.asm.Zm).apply(null, arguments);
  };
  var _0x3334c5 = _0x4141f5.dynCall_fffi = function () {
    return (_0x3334c5 = _0x4141f5.dynCall_fffi = _0x4141f5.asm._m).apply(null, arguments);
  };
  var _0x2d6f10 = _0x4141f5.dynCall_jji = function () {
    return (_0x2d6f10 = _0x4141f5.dynCall_jji = _0x4141f5.asm.$m).apply(null, arguments);
  };
  var _0x6ee48f = _0x4141f5.dynCall_dddi = function () {
    return (_0x6ee48f = _0x4141f5.dynCall_dddi = _0x4141f5.asm.an).apply(null, arguments);
  };
  var _0x221c5d = _0x4141f5.dynCall_iiiiiiiiii = function () {
    return (_0x221c5d = _0x4141f5.dynCall_iiiiiiiiii = _0x4141f5.asm.bn).apply(null, arguments);
  };
  var _0x44b6ae = _0x4141f5.dynCall_jjii = function () {
    return (_0x44b6ae = _0x4141f5.dynCall_jjii = _0x4141f5.asm.cn).apply(null, arguments);
  };
  var _0x1f3a8a = _0x4141f5.dynCall_dji = function () {
    return (_0x1f3a8a = _0x4141f5.dynCall_dji = _0x4141f5.asm.dn).apply(null, arguments);
  };
  var _0x1543d4 = _0x4141f5.dynCall_viiiiiiiiiiii = function () {
    return (_0x1543d4 = _0x4141f5.dynCall_viiiiiiiiiiii = _0x4141f5.asm.en).apply(null, arguments);
  };
  var _0x48b89b = _0x4141f5.dynCall_iiiiji = function () {
    return (_0x48b89b = _0x4141f5.dynCall_iiiiji = _0x4141f5.asm.fn).apply(null, arguments);
  };
  var _0x2e6b74 = _0x4141f5.dynCall_viiiiiiiiiiiii = function () {
    return (_0x2e6b74 = _0x4141f5.dynCall_viiiiiiiiiiiii = _0x4141f5.asm.gn).apply(null, arguments);
  };
  var _0x5a638d = _0x4141f5.dynCall_vijijii = function () {
    return (_0x5a638d = _0x4141f5.dynCall_vijijii = _0x4141f5.asm.hn).apply(null, arguments);
  };
  var _0x2c1137 = _0x4141f5.dynCall_viiiiiiiiiii = function () {
    return (_0x2c1137 = _0x4141f5.dynCall_viiiiiiiiiii = _0x4141f5.asm.jn).apply(null, arguments);
  };
  var _0x2418f5 = _0x4141f5.dynCall_viiiji = function () {
    return (_0x2418f5 = _0x4141f5.dynCall_viiiji = _0x4141f5.asm.kn).apply(null, arguments);
  };
  var _0x22dec1 = _0x4141f5.dynCall_jiiji = function () {
    return (_0x22dec1 = _0x4141f5.dynCall_jiiji = _0x4141f5.asm.ln).apply(null, arguments);
  };
  var _0x1e7c6f = _0x4141f5.dynCall_viijiiijiiii = function () {
    return (_0x1e7c6f = _0x4141f5.dynCall_viijiiijiiii = _0x4141f5.asm.mn).apply(null, arguments);
  };
  var _0x1ef134 = _0x4141f5.dynCall_jdi = function () {
    return (_0x1ef134 = _0x4141f5.dynCall_jdi = _0x4141f5.asm.nn).apply(null, arguments);
  };
  var _0x5c4071 = _0x4141f5.dynCall_vijjji = function () {
    return (_0x5c4071 = _0x4141f5.dynCall_vijjji = _0x4141f5.asm.on).apply(null, arguments);
  };
  var _0x34b61d = _0x4141f5.dynCall_viiiijiii = function () {
    return (_0x34b61d = _0x4141f5.dynCall_viiiijiii = _0x4141f5.asm.pn).apply(null, arguments);
  };
  var _0x454abb = _0x4141f5.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x454abb = _0x4141f5.dynCall_viiiiiiiiiiiiii = _0x4141f5.asm.qn).apply(null, arguments);
  };
  var _0x609ddd = _0x4141f5.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0x609ddd = _0x4141f5.dynCall_viiiiiiiiiiiiiii = _0x4141f5.asm.rn).apply(null, arguments);
  };
  var _0x440092 = _0x4141f5.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x440092 = _0x4141f5.dynCall_viiiiiiiiiiiiiiii = _0x4141f5.asm.sn).apply(null, arguments);
  };
  var _0x4e842a = _0x4141f5.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0x4e842a = _0x4141f5.dynCall_viiiiiiiiiiiiiiiii = _0x4141f5.asm.tn).apply(null, arguments);
  };
  var _0x579fc7 = _0x4141f5.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x579fc7 = _0x4141f5.dynCall_viiiiiiiiiiiiiiiiii = _0x4141f5.asm.un).apply(null, arguments);
  };
  var _0x20ce10 = _0x4141f5.dynCall_viidi = function () {
    return (_0x20ce10 = _0x4141f5.dynCall_viidi = _0x4141f5.asm.vn).apply(null, arguments);
  };
  var _0xb75d75 = _0x4141f5.dynCall_viiidi = function () {
    return (_0xb75d75 = _0x4141f5.dynCall_viiidi = _0x4141f5.asm.wn).apply(null, arguments);
  };
  var _0x624647 = _0x4141f5.dynCall_viiiifi = function () {
    return (_0x624647 = _0x4141f5.dynCall_viiiifi = _0x4141f5.asm.xn).apply(null, arguments);
  };
  var _0x569141 = _0x4141f5.dynCall_iiiiij = function () {
    return (_0x569141 = _0x4141f5.dynCall_iiiiij = _0x4141f5.asm.yn).apply(null, arguments);
  };
  var _0x38e48c = _0x4141f5.dynCall_iiijii = function () {
    return (_0x38e48c = _0x4141f5.dynCall_iiijii = _0x4141f5.asm.zn).apply(null, arguments);
  };
  var _0x47371d = _0x4141f5.dynCall_iijiiii = function () {
    return (_0x47371d = _0x4141f5.dynCall_iijiiii = _0x4141f5.asm.An).apply(null, arguments);
  };
  var _0x4ab0e0 = _0x4141f5.dynCall_jijiii = function () {
    return (_0x4ab0e0 = _0x4141f5.dynCall_jijiii = _0x4141f5.asm.Bn).apply(null, arguments);
  };
  var _0x540fb1 = _0x4141f5.dynCall_iijiiiiii = function () {
    return (_0x540fb1 = _0x4141f5.dynCall_iijiiiiii = _0x4141f5.asm.Cn).apply(null, arguments);
  };
  var _0x730575 = _0x4141f5.dynCall_iijjiiiiii = function () {
    return (_0x730575 = _0x4141f5.dynCall_iijjiiiiii = _0x4141f5.asm.Dn).apply(null, arguments);
  };
  var _0x12c6ad = _0x4141f5.dynCall_iiiijjii = function () {
    return (_0x12c6ad = _0x4141f5.dynCall_iiiijjii = _0x4141f5.asm.En).apply(null, arguments);
  };
  var _0x410624 = _0x4141f5.dynCall_iijiii = function () {
    return (_0x410624 = _0x4141f5.dynCall_iijiii = _0x4141f5.asm.Fn).apply(null, arguments);
  };
  var _0x7d29ff = _0x4141f5.dynCall_j = function () {
    return (_0x7d29ff = _0x4141f5.dynCall_j = _0x4141f5.asm.Gn).apply(null, arguments);
  };
  var _0x51c303 = _0x4141f5.dynCall_jijj = function () {
    return (_0x51c303 = _0x4141f5.dynCall_jijj = _0x4141f5.asm.Hn).apply(null, arguments);
  };
  var _0x47324e = _0x4141f5.dynCall_iiiiiiiiiji = function () {
    return (_0x47324e = _0x4141f5.dynCall_iiiiiiiiiji = _0x4141f5.asm.In).apply(null, arguments);
  };
  var _0x4da9f1 = _0x4141f5.dynCall_vji = function () {
    return (_0x4da9f1 = _0x4141f5.dynCall_vji = _0x4141f5.asm.Jn).apply(null, arguments);
  };
  var _0x55b9af = _0x4141f5.dynCall_viijji = function () {
    return (_0x55b9af = _0x4141f5.dynCall_viijji = _0x4141f5.asm.Kn).apply(null, arguments);
  };
  var _0x11ef38 = _0x4141f5.dynCall_ijiii = function () {
    return (_0x11ef38 = _0x4141f5.dynCall_ijiii = _0x4141f5.asm.Ln).apply(null, arguments);
  };
  var _0x2c0fe7 = _0x4141f5.dynCall_viiijj = function () {
    return (_0x2c0fe7 = _0x4141f5.dynCall_viiijj = _0x4141f5.asm.Mn).apply(null, arguments);
  };
  var _0x590e83 = _0x4141f5.dynCall_vifii = function () {
    return (_0x590e83 = _0x4141f5.dynCall_vifii = _0x4141f5.asm.Nn).apply(null, arguments);
  };
  var _0x4ec9dd = _0x4141f5.dynCall_iiifi = function () {
    return (_0x4ec9dd = _0x4141f5.dynCall_iiifi = _0x4141f5.asm.On).apply(null, arguments);
  };
  var _0xd05f75 = _0x4141f5.dynCall_iiiiiiiiiiii = function () {
    return (_0xd05f75 = _0x4141f5.dynCall_iiiiiiiiiiii = _0x4141f5.asm.Pn).apply(null, arguments);
  };
  var _0x2a3ebf = _0x4141f5.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x2a3ebf = _0x4141f5.dynCall_iiiiiiiiiiiiii = _0x4141f5.asm.Qn).apply(null, arguments);
  };
  var _0x4a1ac9 = _0x4141f5.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x4a1ac9 = _0x4141f5.dynCall_iiiiiiiiiiiiiii = _0x4141f5.asm.Rn).apply(null, arguments);
  };
  var _0x3681f4 = _0x4141f5.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x3681f4 = _0x4141f5.dynCall_iiiiiiiiiiiiiiii = _0x4141f5.asm.Sn).apply(null, arguments);
  };
  var _0x22ba41 = _0x4141f5.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x22ba41 = _0x4141f5.dynCall_iiiiiiiiiiiiiiiii = _0x4141f5.asm.Tn).apply(null, arguments);
  };
  var _0x3f8392 = _0x4141f5.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x3f8392 = _0x4141f5.dynCall_iiiiiiiiiiiiiiiiii = _0x4141f5.asm.Un).apply(null, arguments);
  };
  var _0x83aacd = _0x4141f5.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x83aacd = _0x4141f5.dynCall_iiiiiiiiiiiiiiiiiii = _0x4141f5.asm.Vn).apply(null, arguments);
  };
  var _0x1ca4fa = _0x4141f5.dynCall_fiifi = function () {
    return (_0x1ca4fa = _0x4141f5.dynCall_fiifi = _0x4141f5.asm.Wn).apply(null, arguments);
  };
  var _0x27e791 = _0x4141f5.dynCall_iiffi = function () {
    return (_0x27e791 = _0x4141f5.dynCall_iiffi = _0x4141f5.asm.Xn).apply(null, arguments);
  };
  var _0x3044e5 = _0x4141f5.dynCall_iiiiiiiiiii = function () {
    return (_0x3044e5 = _0x4141f5.dynCall_iiiiiiiiiii = _0x4141f5.asm.Yn).apply(null, arguments);
  };
  var _0x3294ba = _0x4141f5.dynCall_jiiiiiiiiii = function () {
    return (_0x3294ba = _0x4141f5.dynCall_jiiiiiiiiii = _0x4141f5.asm.Zn).apply(null, arguments);
  };
  var _0x4a7f52 = _0x4141f5.dynCall_diiid = function () {
    return (_0x4a7f52 = _0x4141f5.dynCall_diiid = _0x4141f5.asm._n).apply(null, arguments);
  };
  var _0x275bca = _0x4141f5.dynCall_jiiij = function () {
    return (_0x275bca = _0x4141f5.dynCall_jiiij = _0x4141f5.asm.$n).apply(null, arguments);
  };
  var _0x437a0a = _0x4141f5.dynCall_fiiif = function () {
    return (_0x437a0a = _0x4141f5.dynCall_fiiif = _0x4141f5.asm.ao).apply(null, arguments);
  };
  var _0x398eab = _0x4141f5.dynCall_fiffffi = function () {
    return (_0x398eab = _0x4141f5.dynCall_fiffffi = _0x4141f5.asm.bo).apply(null, arguments);
  };
  var _0x347092 = _0x4141f5.dynCall_viiiiiiiffffiii = function () {
    return (_0x347092 = _0x4141f5.dynCall_viiiiiiiffffiii = _0x4141f5.asm.co).apply(null, arguments);
  };
  var _0x2c8720 = _0x4141f5.dynCall_viijiiiiii = function () {
    return (_0x2c8720 = _0x4141f5.dynCall_viijiiiiii = _0x4141f5.asm.eo).apply(null, arguments);
  };
  var _0x36af36 = _0x4141f5.dynCall_vjjjiiii = function () {
    return (_0x36af36 = _0x4141f5.dynCall_vjjjiiii = _0x4141f5.asm.fo).apply(null, arguments);
  };
  var _0x47cb37 = _0x4141f5.dynCall_vjiiiii = function () {
    return (_0x47cb37 = _0x4141f5.dynCall_vjiiiii = _0x4141f5.asm.go).apply(null, arguments);
  };
  var _0x26e6af = _0x4141f5.dynCall_jiiiii = function () {
    return (_0x26e6af = _0x4141f5.dynCall_jiiiii = _0x4141f5.asm.ho).apply(null, arguments);
  };
  var _0x5a069b = _0x4141f5.dynCall_viffi = function () {
    return (_0x5a069b = _0x4141f5.dynCall_viffi = _0x4141f5.asm.io).apply(null, arguments);
  };
  var _0x2b69be = _0x4141f5.dynCall_vffi = function () {
    return (_0x2b69be = _0x4141f5.dynCall_vffi = _0x4141f5.asm.jo).apply(null, arguments);
  };
  var _0x3276c4 = _0x4141f5.dynCall_iiiffi = function () {
    return (_0x3276c4 = _0x4141f5.dynCall_iiiffi = _0x4141f5.asm.ko).apply(null, arguments);
  };
  var _0x229299 = _0x4141f5.dynCall_iifii = function () {
    return (_0x229299 = _0x4141f5.dynCall_iifii = _0x4141f5.asm.lo).apply(null, arguments);
  };
  var _0x3bb7c8 = _0x4141f5.dynCall_iiffii = function () {
    return (_0x3bb7c8 = _0x4141f5.dynCall_iiffii = _0x4141f5.asm.mo).apply(null, arguments);
  };
  var _0xd402db = _0x4141f5.dynCall_iiifiii = function () {
    return (_0xd402db = _0x4141f5.dynCall_iiifiii = _0x4141f5.asm.no).apply(null, arguments);
  };
  var _0x4f6c98 = _0x4141f5.dynCall_iiififii = function () {
    return (_0x4f6c98 = _0x4141f5.dynCall_iiififii = _0x4141f5.asm.oo).apply(null, arguments);
  };
  var _0x4c8ab2 = _0x4141f5.dynCall_iiifiiiii = function () {
    return (_0x4c8ab2 = _0x4141f5.dynCall_iiifiiiii = _0x4141f5.asm.po).apply(null, arguments);
  };
  var _0x406d7b = _0x4141f5.dynCall_iiffifiiii = function () {
    return (_0x406d7b = _0x4141f5.dynCall_iiffifiiii = _0x4141f5.asm.qo).apply(null, arguments);
  };
  var _0x360521 = _0x4141f5.dynCall_iifiifiiii = function () {
    return (_0x360521 = _0x4141f5.dynCall_iifiifiiii = _0x4141f5.asm.ro).apply(null, arguments);
  };
  var _0x1594dd = _0x4141f5.dynCall_iiiifiii = function () {
    return (_0x1594dd = _0x4141f5.dynCall_iiiifiii = _0x4141f5.asm.so).apply(null, arguments);
  };
  var _0x535e2b = _0x4141f5.dynCall_iiifiiii = function () {
    return (_0x535e2b = _0x4141f5.dynCall_iiifiiii = _0x4141f5.asm.to).apply(null, arguments);
  };
  var _0x34f2da = _0x4141f5.dynCall_iiiffiii = function () {
    return (_0x34f2da = _0x4141f5.dynCall_iiiffiii = _0x4141f5.asm.uo).apply(null, arguments);
  };
  var _0x1193aa = _0x4141f5.dynCall_iiiiifii = function () {
    return (_0x1193aa = _0x4141f5.dynCall_iiiiifii = _0x4141f5.asm.vo).apply(null, arguments);
  };
  var _0x44a4a9 = _0x4141f5.dynCall_iifiifffii = function () {
    return (_0x44a4a9 = _0x4141f5.dynCall_iifiifffii = _0x4141f5.asm.wo).apply(null, arguments);
  };
  var _0x5ce495 = _0x4141f5.dynCall_ffffi = function () {
    return (_0x5ce495 = _0x4141f5.dynCall_ffffi = _0x4141f5.asm.xo).apply(null, arguments);
  };
  var _0x532fe7 = _0x4141f5.dynCall_vfiiiii = function () {
    return (_0x532fe7 = _0x4141f5.dynCall_vfiiiii = _0x4141f5.asm.yo).apply(null, arguments);
  };
  var _0x2e2b80 = _0x4141f5.dynCall_vffffiiii = function () {
    return (_0x2e2b80 = _0x4141f5.dynCall_vffffiiii = _0x4141f5.asm.zo).apply(null, arguments);
  };
  var _0x1ede5a = _0x4141f5.dynCall_vfffffdi = function () {
    return (_0x1ede5a = _0x4141f5.dynCall_vfffffdi = _0x4141f5.asm.Ao).apply(null, arguments);
  };
  var _0xca53c7 = _0x4141f5.dynCall_viifii = function () {
    return (_0xca53c7 = _0x4141f5.dynCall_viifii = _0x4141f5.asm.Bo).apply(null, arguments);
  };
  var _0x2a5689 = _0x4141f5.dynCall_vifiii = function () {
    return (_0x2a5689 = _0x4141f5.dynCall_vifiii = _0x4141f5.asm.Co).apply(null, arguments);
  };
  var _0xc51504 = _0x4141f5.dynCall_iiiiiiiifi = function () {
    return (_0xc51504 = _0x4141f5.dynCall_iiiiiiiifi = _0x4141f5.asm.Do).apply(null, arguments);
  };
  var _0x14ccff = _0x4141f5.dynCall_viiiiiifi = function () {
    return (_0x14ccff = _0x4141f5.dynCall_viiiiiifi = _0x4141f5.asm.Eo).apply(null, arguments);
  };
  var _0x1635e8 = _0x4141f5.dynCall_viiiiifiii = function () {
    return (_0x1635e8 = _0x4141f5.dynCall_viiiiifiii = _0x4141f5.asm.Fo).apply(null, arguments);
  };
  var _0x70b013 = _0x4141f5.dynCall_viiiiififi = function () {
    return (_0x70b013 = _0x4141f5.dynCall_viiiiififi = _0x4141f5.asm.Go).apply(null, arguments);
  };
  var _0x431495 = _0x4141f5.dynCall_fiiiii = function () {
    return (_0x431495 = _0x4141f5.dynCall_fiiiii = _0x4141f5.asm.Ho).apply(null, arguments);
  };
  var _0x2b0d01 = _0x4141f5.dynCall_viiiifiii = function () {
    return (_0x2b0d01 = _0x4141f5.dynCall_viiiifiii = _0x4141f5.asm.Io).apply(null, arguments);
  };
  var _0x473015 = _0x4141f5.dynCall_viffifi = function () {
    return (_0x473015 = _0x4141f5.dynCall_viffifi = _0x4141f5.asm.Jo).apply(null, arguments);
  };
  var _0x2d87c0 = _0x4141f5.dynCall_vfi = function () {
    return (_0x2d87c0 = _0x4141f5.dynCall_vfi = _0x4141f5.asm.Ko).apply(null, arguments);
  };
  var _0x457b6c = _0x4141f5.dynCall_viiiiiifiii = function () {
    return (_0x457b6c = _0x4141f5.dynCall_viiiiiifiii = _0x4141f5.asm.Lo).apply(null, arguments);
  };
  var _0x2698cc = _0x4141f5.dynCall_viiiiiffi = function () {
    return (_0x2698cc = _0x4141f5.dynCall_viiiiiffi = _0x4141f5.asm.Mo).apply(null, arguments);
  };
  var _0x1b2db8 = _0x4141f5.dynCall_fiiifiii = function () {
    return (_0x1b2db8 = _0x4141f5.dynCall_fiiifiii = _0x4141f5.asm.No).apply(null, arguments);
  };
  var _0x5f1ee3 = _0x4141f5.dynCall_viififi = function () {
    return (_0x5f1ee3 = _0x4141f5.dynCall_viififi = _0x4141f5.asm.Oo).apply(null, arguments);
  };
  var _0x170915 = _0x4141f5.dynCall_vffffi = function () {
    return (_0x170915 = _0x4141f5.dynCall_vffffi = _0x4141f5.asm.Po).apply(null, arguments);
  };
  var _0x45cd54 = _0x4141f5.dynCall_viffffffi = function () {
    return (_0x45cd54 = _0x4141f5.dynCall_viffffffi = _0x4141f5.asm.Qo).apply(null, arguments);
  };
  var _0x4bbd8d = _0x4141f5.dynCall_viiffffffffi = function () {
    return (_0x4bbd8d = _0x4141f5.dynCall_viiffffffffi = _0x4141f5.asm.Ro).apply(null, arguments);
  };
  var _0x28e059 = _0x4141f5.dynCall_viiifiii = function () {
    return (_0x28e059 = _0x4141f5.dynCall_viiifiii = _0x4141f5.asm.So).apply(null, arguments);
  };
  var _0x52b268 = _0x4141f5.dynCall_viiiffi = function () {
    return (_0x52b268 = _0x4141f5.dynCall_viiiffi = _0x4141f5.asm.To).apply(null, arguments);
  };
  var _0x1d26ea = _0x4141f5.dynCall_iififi = function () {
    return (_0x1d26ea = _0x4141f5.dynCall_iififi = _0x4141f5.asm.Uo).apply(null, arguments);
  };
  var _0x41fcfd = _0x4141f5.dynCall_viiifiiiii = function () {
    return (_0x41fcfd = _0x4141f5.dynCall_viiifiiiii = _0x4141f5.asm.Vo).apply(null, arguments);
  };
  var _0xe00aaa = _0x4141f5.dynCall_viififii = function () {
    return (_0xe00aaa = _0x4141f5.dynCall_viififii = _0x4141f5.asm.Wo).apply(null, arguments);
  };
  var _0x42c3b6 = _0x4141f5.dynCall_vifffii = function () {
    return (_0x42c3b6 = _0x4141f5.dynCall_vifffii = _0x4141f5.asm.Xo).apply(null, arguments);
  };
  var _0x83e630 = _0x4141f5.dynCall_ffffii = function () {
    return (_0x83e630 = _0x4141f5.dynCall_ffffii = _0x4141f5.asm.Yo).apply(null, arguments);
  };
  var _0x125cd0 = _0x4141f5.dynCall_fffffi = function () {
    return (_0x125cd0 = _0x4141f5.dynCall_fffffi = _0x4141f5.asm.Zo).apply(null, arguments);
  };
  var _0x336301 = _0x4141f5.dynCall_fffffii = function () {
    return (_0x336301 = _0x4141f5.dynCall_fffffii = _0x4141f5.asm._o).apply(null, arguments);
  };
  var _0x221444 = _0x4141f5.dynCall_viddi = function () {
    return (_0x221444 = _0x4141f5.dynCall_viddi = _0x4141f5.asm.$o).apply(null, arguments);
  };
  var _0x30b256 = _0x4141f5.dynCall_iifiii = function () {
    return (_0x30b256 = _0x4141f5.dynCall_iifiii = _0x4141f5.asm.ap).apply(null, arguments);
  };
  var _0x5b3172 = _0x4141f5.dynCall_ifii = function () {
    return (_0x5b3172 = _0x4141f5.dynCall_ifii = _0x4141f5.asm.bp).apply(null, arguments);
  };
  var _0x5b5853 = _0x4141f5.dynCall_iffi = function () {
    return (_0x5b5853 = _0x4141f5.dynCall_iffi = _0x4141f5.asm.cp).apply(null, arguments);
  };
  var _0x4dc282 = _0x4141f5.dynCall_fifiii = function () {
    return (_0x4dc282 = _0x4141f5.dynCall_fifiii = _0x4141f5.asm.dp).apply(null, arguments);
  };
  var _0x3b6d12 = _0x4141f5.dynCall_fifffi = function () {
    return (_0x3b6d12 = _0x4141f5.dynCall_fifffi = _0x4141f5.asm.ep).apply(null, arguments);
  };
  var _0xf0e563 = _0x4141f5.dynCall_viifffffii = function () {
    return (_0xf0e563 = _0x4141f5.dynCall_viifffffii = _0x4141f5.asm.fp).apply(null, arguments);
  };
  var _0x113bce = _0x4141f5.dynCall_viffii = function () {
    return (_0x113bce = _0x4141f5.dynCall_viffii = _0x4141f5.asm.gp).apply(null, arguments);
  };
  var _0x43f5f0 = _0x4141f5.dynCall_vidddi = function () {
    return (_0x43f5f0 = _0x4141f5.dynCall_vidddi = _0x4141f5.asm.hp).apply(null, arguments);
  };
  var _0x2576ce = _0x4141f5.dynCall_idii = function () {
    return (_0x2576ce = _0x4141f5.dynCall_idii = _0x4141f5.asm.ip).apply(null, arguments);
  };
  var _0x41febd = _0x4141f5.dynCall_vijijijii = function () {
    return (_0x41febd = _0x4141f5.dynCall_vijijijii = _0x4141f5.asm.jp).apply(null, arguments);
  };
  var _0x5a951e = _0x4141f5.dynCall_iiidiiii = function () {
    return (_0x5a951e = _0x4141f5.dynCall_iiidiiii = _0x4141f5.asm.kp).apply(null, arguments);
  };
  var _0x3cc338 = _0x4141f5.dynCall_viijiii = function () {
    return (_0x3cc338 = _0x4141f5.dynCall_viijiii = _0x4141f5.asm.lp).apply(null, arguments);
  };
  var _0x112247 = _0x4141f5.dynCall_viiiijii = function () {
    return (_0x112247 = _0x4141f5.dynCall_viiiijii = _0x4141f5.asm.mp).apply(null, arguments);
  };
  var _0x366c96 = _0x4141f5.dynCall_viiijiii = function () {
    return (_0x366c96 = _0x4141f5.dynCall_viiijiii = _0x4141f5.asm.np).apply(null, arguments);
  };
  var _0x525ad4 = _0x4141f5.dynCall_iijiiiii = function () {
    return (_0x525ad4 = _0x4141f5.dynCall_iijiiiii = _0x4141f5.asm.op).apply(null, arguments);
  };
  var _0xa98e89 = _0x4141f5.dynCall_iijiiiiiiii = function () {
    return (_0xa98e89 = _0x4141f5.dynCall_iijiiiiiiii = _0x4141f5.asm.pp).apply(null, arguments);
  };
  var _0x1a6a5c = _0x4141f5.dynCall_viiiijiiiii = function () {
    return (_0x1a6a5c = _0x4141f5.dynCall_viiiijiiiii = _0x4141f5.asm.qp).apply(null, arguments);
  };
  var _0x21b094 = _0x4141f5.dynCall_viiiiiiiiiiijjijiiiiii = function () {
    return (_0x21b094 = _0x4141f5.dynCall_viiiiiiiiiiijjijiiiiii = _0x4141f5.asm.rp).apply(null, arguments);
  };
  var _0x4562b3 = _0x4141f5.dynCall_vifiiii = function () {
    return (_0x4562b3 = _0x4141f5.dynCall_vifiiii = _0x4141f5.asm.sp).apply(null, arguments);
  };
  var _0x1e35eb = _0x4141f5.dynCall_fiifii = function () {
    return (_0x1e35eb = _0x4141f5.dynCall_fiifii = _0x4141f5.asm.tp).apply(null, arguments);
  };
  var _0x16ec21 = _0x4141f5.dynCall_viiiiiifiifiiii = function () {
    return (_0x16ec21 = _0x4141f5.dynCall_viiiiiifiifiiii = _0x4141f5.asm.up).apply(null, arguments);
  };
  var _0x398c7a = _0x4141f5.dynCall_iiffffiii = function () {
    return (_0x398c7a = _0x4141f5.dynCall_iiffffiii = _0x4141f5.asm.vp).apply(null, arguments);
  };
  var _0x20a77a = _0x4141f5.dynCall_viiiiifi = function () {
    return (_0x20a77a = _0x4141f5.dynCall_viiiiifi = _0x4141f5.asm.wp).apply(null, arguments);
  };
  var _0x1e6ec1 = _0x4141f5.dynCall_iiidfi = function () {
    return (_0x1e6ec1 = _0x4141f5.dynCall_iiidfi = _0x4141f5.asm.xp).apply(null, arguments);
  };
  var _0x5e60c0 = _0x4141f5.dynCall_iiijfi = function () {
    return (_0x5e60c0 = _0x4141f5.dynCall_iiijfi = _0x4141f5.asm.yp).apply(null, arguments);
  };
  var _0x9797d4 = _0x4141f5.dynCall_iiiffii = function () {
    return (_0x9797d4 = _0x4141f5.dynCall_iiiffii = _0x4141f5.asm.zp).apply(null, arguments);
  };
  var _0x158450 = _0x4141f5.dynCall_iifffi = function () {
    return (_0x158450 = _0x4141f5.dynCall_iifffi = _0x4141f5.asm.Ap).apply(null, arguments);
  };
  var _0x2ff5b2 = _0x4141f5.dynCall_iiiififi = function () {
    return (_0x2ff5b2 = _0x4141f5.dynCall_iiiififi = _0x4141f5.asm.Bp).apply(null, arguments);
  };
  var _0x2c4fab = _0x4141f5.dynCall_iiiffifiiii = function () {
    return (_0x2c4fab = _0x4141f5.dynCall_iiiffifiiii = _0x4141f5.asm.Cp).apply(null, arguments);
  };
  var _0x5dd8f1 = _0x4141f5.dynCall_iiifiifiii = function () {
    return (_0x5dd8f1 = _0x4141f5.dynCall_iiifiifiii = _0x4141f5.asm.Dp).apply(null, arguments);
  };
  var _0x37abb5 = _0x4141f5.dynCall_iiifiifiiiii = function () {
    return (_0x37abb5 = _0x4141f5.dynCall_iiifiifiiiii = _0x4141f5.asm.Ep).apply(null, arguments);
  };
  var _0x225587 = _0x4141f5.dynCall_ifffii = function () {
    return (_0x225587 = _0x4141f5.dynCall_ifffii = _0x4141f5.asm.Fp).apply(null, arguments);
  };
  var _0x230be7 = _0x4141f5.dynCall_ffffifi = function () {
    return (_0x230be7 = _0x4141f5.dynCall_ffffifi = _0x4141f5.asm.Gp).apply(null, arguments);
  };
  var _0x10e146 = _0x4141f5.dynCall_ffffiffi = function () {
    return (_0x10e146 = _0x4141f5.dynCall_ffffiffi = _0x4141f5.asm.Hp).apply(null, arguments);
  };
  var _0x5cc573 = _0x4141f5.dynCall_viiifii = function () {
    return (_0x5cc573 = _0x4141f5.dynCall_viiifii = _0x4141f5.asm.Ip).apply(null, arguments);
  };
  var _0x77de54 = _0x4141f5.dynCall_viiififi = function () {
    return (_0x77de54 = _0x4141f5.dynCall_viiififi = _0x4141f5.asm.Jp).apply(null, arguments);
  };
  var _0x27ba29 = _0x4141f5.dynCall_viiififfi = function () {
    return (_0x27ba29 = _0x4141f5.dynCall_viiififfi = _0x4141f5.asm.Kp).apply(null, arguments);
  };
  var _0x369d35 = _0x4141f5.dynCall_ifiii = function () {
    return (_0x369d35 = _0x4141f5.dynCall_ifiii = _0x4141f5.asm.Lp).apply(null, arguments);
  };
  var _0x3629df = _0x4141f5.dynCall_iifiiiiii = function () {
    return (_0x3629df = _0x4141f5.dynCall_iifiiiiii = _0x4141f5.asm.Mp).apply(null, arguments);
  };
  var _0x2393af = _0x4141f5.dynCall_iifiiiii = function () {
    return (_0x2393af = _0x4141f5.dynCall_iifiiiii = _0x4141f5.asm.Np).apply(null, arguments);
  };
  var _0x1ac909 = _0x4141f5.dynCall_iiffiiiii = function () {
    return (_0x1ac909 = _0x4141f5.dynCall_iiffiiiii = _0x4141f5.asm.Op).apply(null, arguments);
  };
  var _0x451e55 = _0x4141f5.dynCall_iiffifiii = function () {
    return (_0x451e55 = _0x4141f5.dynCall_iiffifiii = _0x4141f5.asm.Pp).apply(null, arguments);
  };
  var _0x365f26 = _0x4141f5.dynCall_iifiifiii = function () {
    return (_0x365f26 = _0x4141f5.dynCall_iifiifiii = _0x4141f5.asm.Qp).apply(null, arguments);
  };
  var _0x539311 = _0x4141f5.dynCall_iiififi = function () {
    return (_0x539311 = _0x4141f5.dynCall_iiififi = _0x4141f5.asm.Rp).apply(null, arguments);
  };
  var _0x3ca6da = _0x4141f5.dynCall_iiiiifiiii = function () {
    return (_0x3ca6da = _0x4141f5.dynCall_iiiiifiiii = _0x4141f5.asm.Sp).apply(null, arguments);
  };
  var _0x4cccc0 = _0x4141f5.dynCall_viidiii = function () {
    return (_0x4cccc0 = _0x4141f5.dynCall_viidiii = _0x4141f5.asm.Tp).apply(null, arguments);
  };
  var _0xbbdb6f = _0x4141f5.dynCall_diidi = function () {
    return (_0xbbdb6f = _0x4141f5.dynCall_diidi = _0x4141f5.asm.Up).apply(null, arguments);
  };
  var _0x90709f = _0x4141f5.dynCall_fiifdi = function () {
    return (_0x90709f = _0x4141f5.dynCall_fiifdi = _0x4141f5.asm.Vp).apply(null, arguments);
  };
  var _0x50cef2 = _0x4141f5.dynCall_viiiiiifddfiiii = function () {
    return (_0x50cef2 = _0x4141f5.dynCall_viiiiiifddfiiii = _0x4141f5.asm.Wp).apply(null, arguments);
  };
  var _0x290100 = _0x4141f5.dynCall_fiifji = function () {
    return (_0x290100 = _0x4141f5.dynCall_fiifji = _0x4141f5.asm.Xp).apply(null, arguments);
  };
  var _0x5c1c4c = _0x4141f5.dynCall_viiiiiifjjfiiii = function () {
    return (_0x5c1c4c = _0x4141f5.dynCall_viiiiiifjjfiiii = _0x4141f5.asm.Yp).apply(null, arguments);
  };
  var _0x232d54 = _0x4141f5.dynCall_viifiii = function () {
    return (_0x232d54 = _0x4141f5.dynCall_viifiii = _0x4141f5.asm.Zp).apply(null, arguments);
  };
  var _0x46eb16 = _0x4141f5.dynCall_viiiiiiffffiiii = function () {
    return (_0x46eb16 = _0x4141f5.dynCall_viiiiiiffffiiii = _0x4141f5.asm._p).apply(null, arguments);
  };
  var _0x383d33 = _0x4141f5.dynCall_viifiiii = function () {
    return (_0x383d33 = _0x4141f5.dynCall_viifiiii = _0x4141f5.asm.$p).apply(null, arguments);
  };
  var _0x58f2af = _0x4141f5.dynCall_iiiiifiii = function () {
    return (_0x58f2af = _0x4141f5.dynCall_iiiiifiii = _0x4141f5.asm.aq).apply(null, arguments);
  };
  var _0x5ce92d = _0x4141f5.dynCall_fiiffffi = function () {
    return (_0x5ce92d = _0x4141f5.dynCall_fiiffffi = _0x4141f5.asm.bq).apply(null, arguments);
  };
  var _0x41c95f = _0x4141f5.dynCall_fffifffi = function () {
    return (_0x41c95f = _0x4141f5.dynCall_fffifffi = _0x4141f5.asm.cq).apply(null, arguments);
  };
  var _0x236a5f = _0x4141f5.dynCall_ifiiii = function () {
    return (_0x236a5f = _0x4141f5.dynCall_ifiiii = _0x4141f5.asm.dq).apply(null, arguments);
  };
  var _0x3b12f5 = _0x4141f5.dynCall_idiiiii = function () {
    return (_0x3b12f5 = _0x4141f5.dynCall_idiiiii = _0x4141f5.asm.eq).apply(null, arguments);
  };
  var _0x253d04 = _0x4141f5.dynCall_idiiii = function () {
    return (_0x253d04 = _0x4141f5.dynCall_idiiii = _0x4141f5.asm.fq).apply(null, arguments);
  };
  var _0x5d3728 = _0x4141f5.dynCall_iiijiiii = function () {
    return (_0x5d3728 = _0x4141f5.dynCall_iiijiiii = _0x4141f5.asm.gq).apply(null, arguments);
  };
  var _0x282e9d = _0x4141f5.dynCall_vjiiii = function () {
    return (_0x282e9d = _0x4141f5.dynCall_vjiiii = _0x4141f5.asm.hq).apply(null, arguments);
  };
  var _0x116578 = _0x4141f5.dynCall_iddi = function () {
    return (_0x116578 = _0x4141f5.dynCall_iddi = _0x4141f5.asm.iq).apply(null, arguments);
  };
  var _0x2a8bd7 = _0x4141f5.dynCall_viifiifi = function () {
    return (_0x2a8bd7 = _0x4141f5.dynCall_viifiifi = _0x4141f5.asm.jq).apply(null, arguments);
  };
  var _0x24e064 = _0x4141f5.dynCall_vifiifi = function () {
    return (_0x24e064 = _0x4141f5.dynCall_vifiifi = _0x4141f5.asm.kq).apply(null, arguments);
  };
  var _0x30c64f = _0x4141f5.dynCall_viddfffi = function () {
    return (_0x30c64f = _0x4141f5.dynCall_viddfffi = _0x4141f5.asm.lq).apply(null, arguments);
  };
  var _0x2a93a8 = _0x4141f5.dynCall_viidfffi = function () {
    return (_0x2a93a8 = _0x4141f5.dynCall_viidfffi = _0x4141f5.asm.mq).apply(null, arguments);
  };
  var _0x1de291 = _0x4141f5.dynCall_vidifffi = function () {
    return (_0x1de291 = _0x4141f5.dynCall_vidifffi = _0x4141f5.asm.nq).apply(null, arguments);
  };
  var _0x116ed5 = _0x4141f5.dynCall_viiifffi = function () {
    return (_0x116ed5 = _0x4141f5.dynCall_viiifffi = _0x4141f5.asm.oq).apply(null, arguments);
  };
  var _0x4f8692 = _0x4141f5.dynCall_vidii = function () {
    return (_0x4f8692 = _0x4141f5.dynCall_vidii = _0x4141f5.asm.pq).apply(null, arguments);
  };
  var _0x532e5b = _0x4141f5.dynCall_viiiiiiifi = function () {
    return (_0x532e5b = _0x4141f5.dynCall_viiiiiiifi = _0x4141f5.asm.qq).apply(null, arguments);
  };
  var _0x2aa8c5 = _0x4141f5.dynCall_viiffffi = function () {
    return (_0x2aa8c5 = _0x4141f5.dynCall_viiffffi = _0x4141f5.asm.rq).apply(null, arguments);
  };
  var _0x289990 = _0x4141f5.dynCall_viiffii = function () {
    return (_0x289990 = _0x4141f5.dynCall_viiffii = _0x4141f5.asm.sq).apply(null, arguments);
  };
  var _0x1cdc71 = _0x4141f5.dynCall_ffii = function () {
    return (_0x1cdc71 = _0x4141f5.dynCall_ffii = _0x4141f5.asm.tq).apply(null, arguments);
  };
  var _0x3d2bad = _0x4141f5.dynCall_ddddi = function () {
    return (_0x3d2bad = _0x4141f5.dynCall_ddddi = _0x4141f5.asm.uq).apply(null, arguments);
  };
  var _0x27c08b = _0x4141f5.dynCall_ddi = function () {
    return (_0x27c08b = _0x4141f5.dynCall_ddi = _0x4141f5.asm.vq).apply(null, arguments);
  };
  var _0x2e52d1 = _0x4141f5.dynCall_jijii = function () {
    return (_0x2e52d1 = _0x4141f5.dynCall_jijii = _0x4141f5.asm.wq).apply(null, arguments);
  };
  var _0x18896b = _0x4141f5.dynCall_iiiiiji = function () {
    return (_0x18896b = _0x4141f5.dynCall_iiiiiji = _0x4141f5.asm.xq).apply(null, arguments);
  };
  var _0x149686 = _0x4141f5.dynCall_viiijii = function () {
    return (_0x149686 = _0x4141f5.dynCall_viiijii = _0x4141f5.asm.yq).apply(null, arguments);
  };
  var _0x173d39 = _0x4141f5.dynCall_viiiiiji = function () {
    return (_0x173d39 = _0x4141f5.dynCall_viiiiiji = _0x4141f5.asm.zq).apply(null, arguments);
  };
  var _0x48fb24 = _0x4141f5.dynCall_ijii = function () {
    return (_0x48fb24 = _0x4141f5.dynCall_ijii = _0x4141f5.asm.Aq).apply(null, arguments);
  };
  var _0x30890c = _0x4141f5.dynCall_ijjiiii = function () {
    return (_0x30890c = _0x4141f5.dynCall_ijjiiii = _0x4141f5.asm.Bq).apply(null, arguments);
  };
  var _0x15de28 = _0x4141f5.dynCall_vdiiiii = function () {
    return (_0x15de28 = _0x4141f5.dynCall_vdiiiii = _0x4141f5.asm.Cq).apply(null, arguments);
  };
  var _0x513b67 = _0x4141f5.dynCall_diiji = function () {
    return (_0x513b67 = _0x4141f5.dynCall_diiji = _0x4141f5.asm.Dq).apply(null, arguments);
  };
  var _0x308d6c = _0x4141f5.dynCall_vjiiiiiiii = function () {
    return (_0x308d6c = _0x4141f5.dynCall_vjiiiiiiii = _0x4141f5.asm.Eq).apply(null, arguments);
  };
  var _0x11378d = _0x4141f5.dynCall_vjiiiiiii = function () {
    return (_0x11378d = _0x4141f5.dynCall_vjiiiiiii = _0x4141f5.asm.Fq).apply(null, arguments);
  };
  var _0x1b7ffd = _0x4141f5.dynCall_ijiiii = function () {
    return (_0x1b7ffd = _0x4141f5.dynCall_ijiiii = _0x4141f5.asm.Gq).apply(null, arguments);
  };
  var _0x22c9c7 = _0x4141f5.dynCall_iidii = function () {
    return (_0x22c9c7 = _0x4141f5.dynCall_iidii = _0x4141f5.asm.Hq).apply(null, arguments);
  };
  var _0x3e1248 = _0x4141f5.dynCall_iidiii = function () {
    return (_0x3e1248 = _0x4141f5.dynCall_iidiii = _0x4141f5.asm.Iq).apply(null, arguments);
  };
  var _0x397a64 = _0x4141f5.dynCall_diji = function () {
    return (_0x397a64 = _0x4141f5.dynCall_diji = _0x4141f5.asm.Jq).apply(null, arguments);
  };
  var _0x61688f = _0x4141f5.dynCall_fidi = function () {
    return (_0x61688f = _0x4141f5.dynCall_fidi = _0x4141f5.asm.Kq).apply(null, arguments);
  };
  var _0x327fbd = _0x4141f5.dynCall_vfffi = function () {
    return (_0x327fbd = _0x4141f5.dynCall_vfffi = _0x4141f5.asm.Lq).apply(null, arguments);
  };
  var _0x476dfa = _0x4141f5.dynCall_viiiiffi = function () {
    return (_0x476dfa = _0x4141f5.dynCall_viiiiffi = _0x4141f5.asm.Mq).apply(null, arguments);
  };
  var _0x501276 = _0x4141f5.dynCall_viiiffii = function () {
    return (_0x501276 = _0x4141f5.dynCall_viiiffii = _0x4141f5.asm.Nq).apply(null, arguments);
  };
  var _0x144a5a = _0x4141f5.dynCall_vijji = function () {
    return (_0x144a5a = _0x4141f5.dynCall_vijji = _0x4141f5.asm.Oq).apply(null, arguments);
  };
  var _0x3c7a6e = _0x4141f5.dynCall_vifffi = function () {
    return (_0x3c7a6e = _0x4141f5.dynCall_vifffi = _0x4141f5.asm.Pq).apply(null, arguments);
  };
  var _0x3f9b51 = _0x4141f5.dynCall_vffffffii = function () {
    return (_0x3f9b51 = _0x4141f5.dynCall_vffffffii = _0x4141f5.asm.Qq).apply(null, arguments);
  };
  var _0x4c500a = _0x4141f5.dynCall_vfiii = function () {
    return (_0x4c500a = _0x4141f5.dynCall_vfiii = _0x4141f5.asm.Rq).apply(null, arguments);
  };
  var _0x66e2d8 = _0x4141f5.dynCall_vfii = function () {
    return (_0x66e2d8 = _0x4141f5.dynCall_vfii = _0x4141f5.asm.Sq).apply(null, arguments);
  };
  var _0x219283 = _0x4141f5.dynCall_iiiifiiiii = function () {
    return (_0x219283 = _0x4141f5.dynCall_iiiifiiiii = _0x4141f5.asm.Tq).apply(null, arguments);
  };
  var _0x36bc05 = _0x4141f5.dynCall_iiiifiiii = function () {
    return (_0x36bc05 = _0x4141f5.dynCall_iiiifiiii = _0x4141f5.asm.Uq).apply(null, arguments);
  };
  var _0x240427 = _0x4141f5.dynCall_vijjii = function () {
    return (_0x240427 = _0x4141f5.dynCall_vijjii = _0x4141f5.asm.Vq).apply(null, arguments);
  };
  var _0x4db15a = _0x4141f5.dynCall_viijijiii = function () {
    return (_0x4db15a = _0x4141f5.dynCall_viijijiii = _0x4141f5.asm.Wq).apply(null, arguments);
  };
  var _0x35fb44 = _0x4141f5.dynCall_viiiififfi = function () {
    return (_0x35fb44 = _0x4141f5.dynCall_viiiififfi = _0x4141f5.asm.Xq).apply(null, arguments);
  };
  var _0x51659d = _0x4141f5.dynCall_viiiifiifi = function () {
    return (_0x51659d = _0x4141f5.dynCall_viiiifiifi = _0x4141f5.asm.Yq).apply(null, arguments);
  };
  var _0x1613dd = _0x4141f5.dynCall_viiiifiiii = function () {
    return (_0x1613dd = _0x4141f5.dynCall_viiiifiiii = _0x4141f5.asm.Zq).apply(null, arguments);
  };
  var _0x6a39cf = _0x4141f5.dynCall_viiiifiiiii = function () {
    return (_0x6a39cf = _0x4141f5.dynCall_viiiifiiiii = _0x4141f5.asm._q).apply(null, arguments);
  };
  var _0x4a5cde = _0x4141f5.dynCall_viiiifiiiiiiii = function () {
    return (_0x4a5cde = _0x4141f5.dynCall_viiiifiiiiiiii = _0x4141f5.asm.$q).apply(null, arguments);
  };
  var _0x2e07a4 = _0x4141f5.dynCall_viiiiiffii = function () {
    return (_0x2e07a4 = _0x4141f5.dynCall_viiiiiffii = _0x4141f5.asm.ar).apply(null, arguments);
  };
  var _0x564386 = _0x4141f5.dynCall_viffiii = function () {
    return (_0x564386 = _0x4141f5.dynCall_viffiii = _0x4141f5.asm.br).apply(null, arguments);
  };
  var _0x5a9b86 = _0x4141f5.dynCall_viffffiii = function () {
    return (_0x5a9b86 = _0x4141f5.dynCall_viffffiii = _0x4141f5.asm.cr).apply(null, arguments);
  };
  var _0x475a84 = _0x4141f5.dynCall_viffffii = function () {
    return (_0x475a84 = _0x4141f5.dynCall_viffffii = _0x4141f5.asm.dr).apply(null, arguments);
  };
  var _0x20db66 = _0x4141f5.dynCall_iiiiifi = function () {
    return (_0x20db66 = _0x4141f5.dynCall_iiiiifi = _0x4141f5.asm.er).apply(null, arguments);
  };
  var _0x23fb9c = _0x4141f5.dynCall_iifiiii = function () {
    return (_0x23fb9c = _0x4141f5.dynCall_iifiiii = _0x4141f5.asm.fr).apply(null, arguments);
  };
  var _0x278d3d = _0x4141f5.dynCall_vififfii = function () {
    return (_0x278d3d = _0x4141f5.dynCall_vififfii = _0x4141f5.asm.gr).apply(null, arguments);
  };
  var _0x5e67fb = _0x4141f5.dynCall_vififfi = function () {
    return (_0x5e67fb = _0x4141f5.dynCall_vififfi = _0x4141f5.asm.hr).apply(null, arguments);
  };
  var _0x235e10 = _0x4141f5.dynCall_vififi = function () {
    return (_0x235e10 = _0x4141f5.dynCall_vififi = _0x4141f5.asm.ir).apply(null, arguments);
  };
  var _0x22cd17 = _0x4141f5.dynCall_vifffffi = function () {
    return (_0x22cd17 = _0x4141f5.dynCall_vifffffi = _0x4141f5.asm.jr).apply(null, arguments);
  };
  var _0x5da1b6 = _0x4141f5.dynCall_viffiiii = function () {
    return (_0x5da1b6 = _0x4141f5.dynCall_viffiiii = _0x4141f5.asm.kr).apply(null, arguments);
  };
  var _0x20f836 = _0x4141f5.dynCall_viiiiffffiiii = function () {
    return (_0x20f836 = _0x4141f5.dynCall_viiiiffffiiii = _0x4141f5.asm.lr).apply(null, arguments);
  };
  var _0x5c57ea = _0x4141f5.dynCall_viifiiiii = function () {
    return (_0x5c57ea = _0x4141f5.dynCall_viifiiiii = _0x4141f5.asm.mr).apply(null, arguments);
  };
  var _0x114efb = _0x4141f5.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x114efb = _0x4141f5.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x4141f5.asm.nr).apply(null, arguments);
  };
  var _0x4e6a3b = _0x4141f5.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0x4e6a3b = _0x4141f5.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x4141f5.asm.or).apply(null, arguments);
  };
  var _0x22c0bc = _0x4141f5.dynCall_iiiffiiii = function () {
    return (_0x22c0bc = _0x4141f5.dynCall_iiiffiiii = _0x4141f5.asm.pr).apply(null, arguments);
  };
  var _0x3104ce = _0x4141f5.dynCall_iiiiffiiii = function () {
    return (_0x3104ce = _0x4141f5.dynCall_iiiiffiiii = _0x4141f5.asm.qr).apply(null, arguments);
  };
  var _0x38d097 = _0x4141f5.dynCall_vjii = function () {
    return (_0x38d097 = _0x4141f5.dynCall_vjii = _0x4141f5.asm.rr).apply(null, arguments);
  };
  var _0x1da00f = _0x4141f5.dynCall_fffffffi = function () {
    return (_0x1da00f = _0x4141f5.dynCall_fffffffi = _0x4141f5.asm.sr).apply(null, arguments);
  };
  var _0x406954 = _0x4141f5.dynCall_viiffifi = function () {
    return (_0x406954 = _0x4141f5.dynCall_viiffifi = _0x4141f5.asm.tr).apply(null, arguments);
  };
  var _0x548e51 = _0x4141f5.dynCall_fiiiffi = function () {
    return (_0x548e51 = _0x4141f5.dynCall_fiiiffi = _0x4141f5.asm.ur).apply(null, arguments);
  };
  var _0x15c00a = _0x4141f5.dynCall_viiififiii = function () {
    return (_0x15c00a = _0x4141f5.dynCall_viiififiii = _0x4141f5.asm.vr).apply(null, arguments);
  };
  var _0x94f584 = _0x4141f5.dynCall_viiffiiiiiiiii = function () {
    return (_0x94f584 = _0x4141f5.dynCall_viiffiiiiiiiii = _0x4141f5.asm.wr).apply(null, arguments);
  };
  var _0xc033ea = _0x4141f5.dynCall_viiiiiffiii = function () {
    return (_0xc033ea = _0x4141f5.dynCall_viiiiiffiii = _0x4141f5.asm.xr).apply(null, arguments);
  };
  var _0x8b0d09 = _0x4141f5.dynCall_viiffiii = function () {
    return (_0x8b0d09 = _0x4141f5.dynCall_viiffiii = _0x4141f5.asm.yr).apply(null, arguments);
  };
  var _0x1b791c = _0x4141f5.dynCall_viiffiiiiiii = function () {
    return (_0x1b791c = _0x4141f5.dynCall_viiffiiiiiii = _0x4141f5.asm.zr).apply(null, arguments);
  };
  var _0x43f884 = _0x4141f5.dynCall_fffffffffi = function () {
    return (_0x43f884 = _0x4141f5.dynCall_fffffffffi = _0x4141f5.asm.Ar).apply(null, arguments);
  };
  var _0x4b76e6 = _0x4141f5.dynCall_vifiiiiii = function () {
    return (_0x4b76e6 = _0x4141f5.dynCall_vifiiiiii = _0x4141f5.asm.Br).apply(null, arguments);
  };
  var _0x57d56d = _0x4141f5.dynCall_vifiiiii = function () {
    return (_0x57d56d = _0x4141f5.dynCall_vifiiiii = _0x4141f5.asm.Cr).apply(null, arguments);
  };
  var _0x349684 = _0x4141f5.dynCall_viifiiiiiii = function () {
    return (_0x349684 = _0x4141f5.dynCall_viifiiiiiii = _0x4141f5.asm.Dr).apply(null, arguments);
  };
  var _0x319f6e = _0x4141f5.dynCall_viiififfiiiiiii = function () {
    return (_0x319f6e = _0x4141f5.dynCall_viiififfiiiiiii = _0x4141f5.asm.Er).apply(null, arguments);
  };
  var _0x78bd02 = _0x4141f5.dynCall_viiffiifiiiiiii = function () {
    return (_0x78bd02 = _0x4141f5.dynCall_viiffiifiiiiiii = _0x4141f5.asm.Fr).apply(null, arguments);
  };
  var _0x32b573 = _0x4141f5.dynCall_viifiiiiii = function () {
    return (_0x32b573 = _0x4141f5.dynCall_viifiiiiii = _0x4141f5.asm.Gr).apply(null, arguments);
  };
  var _0x102569 = _0x4141f5.dynCall_viiifiiiiii = function () {
    return (_0x102569 = _0x4141f5.dynCall_viiifiiiiii = _0x4141f5.asm.Hr).apply(null, arguments);
  };
  var _0x1664a4 = _0x4141f5.dynCall_viiiifiiiiii = function () {
    return (_0x1664a4 = _0x4141f5.dynCall_viiiifiiiiii = _0x4141f5.asm.Ir).apply(null, arguments);
  };
  var _0x677464 = _0x4141f5.dynCall_viififiiiiii = function () {
    return (_0x677464 = _0x4141f5.dynCall_viififiiiiii = _0x4141f5.asm.Jr).apply(null, arguments);
  };
  var _0x17c60a = _0x4141f5.dynCall_viiiffiifiiiiiii = function () {
    return (_0x17c60a = _0x4141f5.dynCall_viiiffiifiiiiiii = _0x4141f5.asm.Kr).apply(null, arguments);
  };
  var _0x4520f4 = _0x4141f5.dynCall_viiiiiifiiiiii = function () {
    return (_0x4520f4 = _0x4141f5.dynCall_viiiiiifiiiiii = _0x4141f5.asm.Lr).apply(null, arguments);
  };
  var _0x2f0af1 = _0x4141f5.dynCall_vififiii = function () {
    return (_0x2f0af1 = _0x4141f5.dynCall_vififiii = _0x4141f5.asm.Mr).apply(null, arguments);
  };
  var _0x56ff23 = _0x4141f5.dynCall_fiffi = function () {
    return (_0x56ff23 = _0x4141f5.dynCall_fiffi = _0x4141f5.asm.Nr).apply(null, arguments);
  };
  var _0x50673e = _0x4141f5.dynCall_viiiiiiiijiiii = function () {
    return (_0x50673e = _0x4141f5.dynCall_viiiiiiiijiiii = _0x4141f5.asm.Or).apply(null, arguments);
  };
  var _0x2e4566 = _0x4141f5.dynCall_fifii = function () {
    return (_0x2e4566 = _0x4141f5.dynCall_fifii = _0x4141f5.asm.Pr).apply(null, arguments);
  };
  var _0x11f39a = _0x4141f5.dynCall_viiidii = function () {
    return (_0x11f39a = _0x4141f5.dynCall_viiidii = _0x4141f5.asm.Qr).apply(null, arguments);
  };
  var _0x56b35c = _0x4141f5.dynCall_ijiiiiiiiii = function () {
    return (_0x56b35c = _0x4141f5.dynCall_ijiiiiiiiii = _0x4141f5.asm.Rr).apply(null, arguments);
  };
  var _0x196d9c = _0x4141f5.dynCall_ijjiii = function () {
    return (_0x196d9c = _0x4141f5.dynCall_ijjiii = _0x4141f5.asm.Sr).apply(null, arguments);
  };
  var _0x33e6a0 = _0x4141f5.dynCall_jiidi = function () {
    return (_0x33e6a0 = _0x4141f5.dynCall_jiidi = _0x4141f5.asm.Tr).apply(null, arguments);
  };
  var _0x49e07f = _0x4141f5.dynCall_viiiidijii = function () {
    return (_0x49e07f = _0x4141f5.dynCall_viiiidijii = _0x4141f5.asm.Ur).apply(null, arguments);
  };
  var _0x410e7d = _0x4141f5.dynCall_viiiidiii = function () {
    return (_0x410e7d = _0x4141f5.dynCall_viiiidiii = _0x4141f5.asm.Vr).apply(null, arguments);
  };
  var _0x4d5bdd = _0x4141f5.dynCall_iiidiii = function () {
    return (_0x4d5bdd = _0x4141f5.dynCall_iiidiii = _0x4141f5.asm.Wr).apply(null, arguments);
  };
  var _0x196a64 = _0x4141f5.dynCall_iiidii = function () {
    return (_0x196a64 = _0x4141f5.dynCall_iiidii = _0x4141f5.asm.Xr).apply(null, arguments);
  };
  var _0xe4d747 = _0x4141f5.dynCall_vidiii = function () {
    return (_0xe4d747 = _0x4141f5.dynCall_vidiii = _0x4141f5.asm.Yr).apply(null, arguments);
  };
  var _0x1a9c48 = _0x4141f5.dynCall_viiiidii = function () {
    return (_0x1a9c48 = _0x4141f5.dynCall_viiiidii = _0x4141f5.asm.Zr).apply(null, arguments);
  };
  var _0x4a7e38 = _0x4141f5.dynCall_viijiiiii = function () {
    return (_0x4a7e38 = _0x4141f5.dynCall_viijiiiii = _0x4141f5.asm._r).apply(null, arguments);
  };
  var _0x65b759 = _0x4141f5.dynCall_viifffi = function () {
    return (_0x65b759 = _0x4141f5.dynCall_viifffi = _0x4141f5.asm.$r).apply(null, arguments);
  };
  var _0x4c6cc2 = _0x4141f5.dynCall_viifffffi = function () {
    return (_0x4c6cc2 = _0x4141f5.dynCall_viifffffi = _0x4141f5.asm.as).apply(null, arguments);
  };
  var _0x3e0ab2 = _0x4141f5.dynCall_viiffffffi = function () {
    return (_0x3e0ab2 = _0x4141f5.dynCall_viiffffffi = _0x4141f5.asm.bs).apply(null, arguments);
  };
  var _0x940222 = _0x4141f5.dynCall_viifffffffi = function () {
    return (_0x940222 = _0x4141f5.dynCall_viifffffffi = _0x4141f5.asm.cs).apply(null, arguments);
  };
  var _0x5d11bb = _0x4141f5.dynCall_viiffffffffiii = function () {
    return (_0x5d11bb = _0x4141f5.dynCall_viiffffffffiii = _0x4141f5.asm.ds).apply(null, arguments);
  };
  var _0x91250e = _0x4141f5.dynCall_viiiiffffii = function () {
    return (_0x91250e = _0x4141f5.dynCall_viiiiffffii = _0x4141f5.asm.es).apply(null, arguments);
  };
  var _0x2d8f95 = _0x4141f5.dynCall_fiiiiii = function () {
    return (_0x2d8f95 = _0x4141f5.dynCall_fiiiiii = _0x4141f5.asm.fs).apply(null, arguments);
  };
  var _0x2aad71 = _0x4141f5.dynCall_viiijji = function () {
    return (_0x2aad71 = _0x4141f5.dynCall_viiijji = _0x4141f5.asm.gs).apply(null, arguments);
  };
  var _0x3e0cc4 = _0x4141f5.dynCall_vijiiiiiii = function () {
    return (_0x3e0cc4 = _0x4141f5.dynCall_vijiiiiiii = _0x4141f5.asm.hs).apply(null, arguments);
  };
  var _0x1f6e9a = _0x4141f5.dynCall_vijiiiiiiii = function () {
    return (_0x1f6e9a = _0x4141f5.dynCall_vijiiiiiiii = _0x4141f5.asm.is).apply(null, arguments);
  };
  var _0x2ed059 = _0x4141f5.dynCall_jjiiii = function () {
    return (_0x2ed059 = _0x4141f5.dynCall_jjiiii = _0x4141f5.asm.js).apply(null, arguments);
  };
  var _0x5e92cb = _0x4141f5.dynCall_jjiiiii = function () {
    return (_0x5e92cb = _0x4141f5.dynCall_jjiiiii = _0x4141f5.asm.ks).apply(null, arguments);
  };
  var _0x507f01 = _0x4141f5.dynCall_jijjji = function () {
    return (_0x507f01 = _0x4141f5.dynCall_jijjji = _0x4141f5.asm.ls).apply(null, arguments);
  };
  var _0x3731f6 = _0x4141f5.dynCall_jijjjii = function () {
    return (_0x3731f6 = _0x4141f5.dynCall_jijjjii = _0x4141f5.asm.ms).apply(null, arguments);
  };
  var _0x5de14a = _0x4141f5.dynCall_jjiii = function () {
    return (_0x5de14a = _0x4141f5.dynCall_jjiii = _0x4141f5.asm.ns).apply(null, arguments);
  };
  var _0x32a606 = _0x4141f5.dynCall_ijijiiiii = function () {
    return (_0x32a606 = _0x4141f5.dynCall_ijijiiiii = _0x4141f5.asm.os).apply(null, arguments);
  };
  var _0x5a1fbc = _0x4141f5.dynCall_ijjjiii = function () {
    return (_0x5a1fbc = _0x4141f5.dynCall_ijjjiii = _0x4141f5.asm.ps).apply(null, arguments);
  };
  var _0x343a83 = _0x4141f5.dynCall_vijjjiijii = function () {
    return (_0x343a83 = _0x4141f5.dynCall_vijjjiijii = _0x4141f5.asm.qs).apply(null, arguments);
  };
  var _0x10c494 = _0x4141f5.dynCall_ijjjiijii = function () {
    return (_0x10c494 = _0x4141f5.dynCall_ijjjiijii = _0x4141f5.asm.rs).apply(null, arguments);
  };
  var _0x4c8755 = _0x4141f5.dynCall_jfi = function () {
    return (_0x4c8755 = _0x4141f5.dynCall_jfi = _0x4141f5.asm.ss).apply(null, arguments);
  };
  var _0x3998ee = _0x4141f5.dynCall_fji = function () {
    return (_0x3998ee = _0x4141f5.dynCall_fji = _0x4141f5.asm.ts).apply(null, arguments);
  };
  var _0x31ad9b = _0x4141f5.dynCall_fdi = function () {
    return (_0x31ad9b = _0x4141f5.dynCall_fdi = _0x4141f5.asm.us).apply(null, arguments);
  };
  var _0x4b848b = _0x4141f5.dynCall_dfi = function () {
    return (_0x4b848b = _0x4141f5.dynCall_dfi = _0x4141f5.asm.vs).apply(null, arguments);
  };
  var _0x12ede5 = _0x4141f5.dynCall_jidii = function () {
    return (_0x12ede5 = _0x4141f5.dynCall_jidii = _0x4141f5.asm.ws).apply(null, arguments);
  };
  var _0x37f785 = _0x4141f5.dynCall_viiiiiiiji = function () {
    return (_0x37f785 = _0x4141f5.dynCall_viiiiiiiji = _0x4141f5.asm.xs).apply(null, arguments);
  };
  var _0x3cb28c = _0x4141f5.dynCall_viiiiiiiiji = function () {
    return (_0x3cb28c = _0x4141f5.dynCall_viiiiiiiiji = _0x4141f5.asm.ys).apply(null, arguments);
  };
  var _0x1b3659 = _0x4141f5.dynCall_viiiiiiiiiji = function () {
    return (_0x1b3659 = _0x4141f5.dynCall_viiiiiiiiiji = _0x4141f5.asm.zs).apply(null, arguments);
  };
  var _0x263a32 = _0x4141f5.dynCall_ijiijii = function () {
    return (_0x263a32 = _0x4141f5.dynCall_ijiijii = _0x4141f5.asm.As).apply(null, arguments);
  };
  var _0x49cd46 = _0x4141f5.dynCall_vjjiiiii = function () {
    return (_0x49cd46 = _0x4141f5.dynCall_vjjiiiii = _0x4141f5.asm.Bs).apply(null, arguments);
  };
  var _0x5645f9 = _0x4141f5.dynCall_vjjii = function () {
    return (_0x5645f9 = _0x4141f5.dynCall_vjjii = _0x4141f5.asm.Cs).apply(null, arguments);
  };
  var _0x561457 = _0x4141f5.dynCall_ijiiji = function () {
    return (_0x561457 = _0x4141f5.dynCall_ijiiji = _0x4141f5.asm.Ds).apply(null, arguments);
  };
  var _0x281f8d = _0x4141f5.dynCall_ijiiiii = function () {
    return (_0x281f8d = _0x4141f5.dynCall_ijiiiii = _0x4141f5.asm.Es).apply(null, arguments);
  };
  var _0x2f69e8 = _0x4141f5.dynCall_ijiiiiji = function () {
    return (_0x2f69e8 = _0x4141f5.dynCall_ijiiiiji = _0x4141f5.asm.Fs).apply(null, arguments);
  };
  var _0x4689f0 = _0x4141f5.dynCall_jiiiiii = function () {
    return (_0x4689f0 = _0x4141f5.dynCall_jiiiiii = _0x4141f5.asm.Gs).apply(null, arguments);
  };
  var _0x41fc1d = _0x4141f5.dynCall_ddii = function () {
    return (_0x41fc1d = _0x4141f5.dynCall_ddii = _0x4141f5.asm.Hs).apply(null, arguments);
  };
  var _0x139ea4 = _0x4141f5.dynCall_idiii = function () {
    return (_0x139ea4 = _0x4141f5.dynCall_idiii = _0x4141f5.asm.Is).apply(null, arguments);
  };
  var _0x2cab24 = _0x4141f5.dynCall_ifiiiii = function () {
    return (_0x2cab24 = _0x4141f5.dynCall_ifiiiii = _0x4141f5.asm.Js).apply(null, arguments);
  };
  var _0x46e53b = _0x4141f5.dynCall_jjjii = function () {
    return (_0x46e53b = _0x4141f5.dynCall_jjjii = _0x4141f5.asm.Ks).apply(null, arguments);
  };
  var _0x3b46af = _0x4141f5.dynCall_vdiii = function () {
    return (_0x3b46af = _0x4141f5.dynCall_vdiii = _0x4141f5.asm.Ls).apply(null, arguments);
  };
  var _0x57c5c0 = _0x4141f5.dynCall_jdii = function () {
    return (_0x57c5c0 = _0x4141f5.dynCall_jdii = _0x4141f5.asm.Ms).apply(null, arguments);
  };
  var _0x54e091 = _0x4141f5.dynCall_vijijji = function () {
    return (_0x54e091 = _0x4141f5.dynCall_vijijji = _0x4141f5.asm.Ns).apply(null, arguments);
  };
  var _0xf52994 = _0x4141f5.dynCall_iijjji = function () {
    return (_0xf52994 = _0x4141f5.dynCall_iijjji = _0x4141f5.asm.Os).apply(null, arguments);
  };
  var _0x1f30ea = _0x4141f5.dynCall_viijjji = function () {
    return (_0x1f30ea = _0x4141f5.dynCall_viijjji = _0x4141f5.asm.Ps).apply(null, arguments);
  };
  var _0x2fd932 = _0x4141f5.dynCall_vdii = function () {
    return (_0x2fd932 = _0x4141f5.dynCall_vdii = _0x4141f5.asm.Qs).apply(null, arguments);
  };
  var _0xfbe660 = _0x4141f5.dynCall_iiiijii = function () {
    return (_0xfbe660 = _0x4141f5.dynCall_iiiijii = _0x4141f5.asm.Rs).apply(null, arguments);
  };
  var _0x31d618 = _0x4141f5.dynCall_jijji = function () {
    return (_0x31d618 = _0x4141f5.dynCall_jijji = _0x4141f5.asm.Ss).apply(null, arguments);
  };
  var _0x442345 = _0x4141f5.dynCall_diddi = function () {
    return (_0x442345 = _0x4141f5.dynCall_diddi = _0x4141f5.asm.Ts).apply(null, arguments);
  };
  var _0x561803 = _0x4141f5.dynCall_didi = function () {
    return (_0x561803 = _0x4141f5.dynCall_didi = _0x4141f5.asm.Us).apply(null, arguments);
  };
  var _0x317abe = _0x4141f5.dynCall_iijjii = function () {
    return (_0x317abe = _0x4141f5.dynCall_iijjii = _0x4141f5.asm.Vs).apply(null, arguments);
  };
  var _0x3ba59c = _0x4141f5.dynCall_jjjji = function () {
    return (_0x3ba59c = _0x4141f5.dynCall_jjjji = _0x4141f5.asm.Ws).apply(null, arguments);
  };
  var _0x5a3ed4 = _0x4141f5.dynCall_viijijii = function () {
    return (_0x5a3ed4 = _0x4141f5.dynCall_viijijii = _0x4141f5.asm.Xs).apply(null, arguments);
  };
  var _0x53f39d = _0x4141f5.dynCall_vijiji = function () {
    return (_0x53f39d = _0x4141f5.dynCall_vijiji = _0x4141f5.asm.Ys).apply(null, arguments);
  };
  var _0x37c736 = _0x4141f5.dynCall_viijiijiii = function () {
    return (_0x37c736 = _0x4141f5.dynCall_viijiijiii = _0x4141f5.asm.Zs).apply(null, arguments);
  };
  var _0x5de7bc = _0x4141f5.dynCall_viiiijiiii = function () {
    return (_0x5de7bc = _0x4141f5.dynCall_viiiijiiii = _0x4141f5.asm._s).apply(null, arguments);
  };
  var _0x3387d4 = _0x4141f5.dynCall_di = function () {
    return (_0x3387d4 = _0x4141f5.dynCall_di = _0x4141f5.asm.$s).apply(null, arguments);
  };
  var _0x2f2f8f = _0x4141f5.dynCall_jiiiiiiiii = function () {
    return (_0x2f2f8f = _0x4141f5.dynCall_jiiiiiiiii = _0x4141f5.asm.at).apply(null, arguments);
  };
  var _0x3ac931 = _0x4141f5.dynCall_iiiiijii = function () {
    return (_0x3ac931 = _0x4141f5.dynCall_iiiiijii = _0x4141f5.asm.bt).apply(null, arguments);
  };
  var _0x53e8f4 = _0x4141f5.dynCall_iiiidii = function () {
    return (_0x53e8f4 = _0x4141f5.dynCall_iiiidii = _0x4141f5.asm.ct).apply(null, arguments);
  };
  var _0x5eee28 = _0x4141f5.dynCall_iidfii = function () {
    return (_0x5eee28 = _0x4141f5.dynCall_iidfii = _0x4141f5.asm.dt).apply(null, arguments);
  };
  var _0x16ad83 = _0x4141f5.dynCall_iidfi = function () {
    return (_0x16ad83 = _0x4141f5.dynCall_iidfi = _0x4141f5.asm.et).apply(null, arguments);
  };
  var _0x395f28 = _0x4141f5.dynCall_iiddfi = function () {
    return (_0x395f28 = _0x4141f5.dynCall_iiddfi = _0x4141f5.asm.ft).apply(null, arguments);
  };
  var _0x5b5edd = _0x4141f5.dynCall_iijfii = function () {
    return (_0x5b5edd = _0x4141f5.dynCall_iijfii = _0x4141f5.asm.gt).apply(null, arguments);
  };
  var _0x3c2b02 = _0x4141f5.dynCall_iijfi = function () {
    return (_0x3c2b02 = _0x4141f5.dynCall_iijfi = _0x4141f5.asm.ht).apply(null, arguments);
  };
  var _0x285444 = _0x4141f5.dynCall_iijjfi = function () {
    return (_0x285444 = _0x4141f5.dynCall_iijjfi = _0x4141f5.asm.it).apply(null, arguments);
  };
  var _0x38d495 = _0x4141f5.dynCall_iiiiffiiiji = function () {
    return (_0x38d495 = _0x4141f5.dynCall_iiiiffiiiji = _0x4141f5.asm.jt).apply(null, arguments);
  };
  var _0x61bdf1 = _0x4141f5.dynCall_iiidfii = function () {
    return (_0x61bdf1 = _0x4141f5.dynCall_iiidfii = _0x4141f5.asm.kt).apply(null, arguments);
  };
  var _0x165690 = _0x4141f5.dynCall_iiijfii = function () {
    return (_0x165690 = _0x4141f5.dynCall_iiijfii = _0x4141f5.asm.lt).apply(null, arguments);
  };
  var _0x31d124 = _0x4141f5.dynCall_jiiiiiii = function () {
    return (_0x31d124 = _0x4141f5.dynCall_jiiiiiii = _0x4141f5.asm.mt).apply(null, arguments);
  };
  var _0x12e710 = _0x4141f5.dynCall_iiiiffiiiii = function () {
    return (_0x12e710 = _0x4141f5.dynCall_iiiiffiiiii = _0x4141f5.asm.nt).apply(null, arguments);
  };
  var _0x3f5c78 = _0x4141f5.dynCall_iiiidfii = function () {
    return (_0x3f5c78 = _0x4141f5.dynCall_iiiidfii = _0x4141f5.asm.ot).apply(null, arguments);
  };
  var _0x49cc5e = _0x4141f5.dynCall_iiiijfii = function () {
    return (_0x49cc5e = _0x4141f5.dynCall_iiiijfii = _0x4141f5.asm.pt).apply(null, arguments);
  };
  var _0x32a377 = _0x4141f5.dynCall_iiiiffii = function () {
    return (_0x32a377 = _0x4141f5.dynCall_iiiiffii = _0x4141f5.asm.qt).apply(null, arguments);
  };
  var _0x87841a = _0x4141f5.dynCall_jiiiiji = function () {
    return (_0x87841a = _0x4141f5.dynCall_jiiiiji = _0x4141f5.asm.rt).apply(null, arguments);
  };
  var _0x487db7 = _0x4141f5.dynCall_fiiiifi = function () {
    return (_0x487db7 = _0x4141f5.dynCall_fiiiifi = _0x4141f5.asm.st).apply(null, arguments);
  };
  var _0x26e158 = _0x4141f5.dynCall_iiijjii = function () {
    return (_0x26e158 = _0x4141f5.dynCall_iiijjii = _0x4141f5.asm.tt).apply(null, arguments);
  };
  var _0x9325cf = _0x4141f5.dynCall_vij = function () {
    return (_0x9325cf = _0x4141f5.dynCall_vij = _0x4141f5.asm.ut).apply(null, arguments);
  };
  var _0x1a2ced = _0x4141f5.dynCall_iiiijiii = function () {
    return (_0x1a2ced = _0x4141f5.dynCall_iiiijiii = _0x4141f5.asm.vt).apply(null, arguments);
  };
  var _0x28c7d2 = _0x4141f5.dynCall_iiiij = function () {
    return (_0x28c7d2 = _0x4141f5.dynCall_iiiij = _0x4141f5.asm.wt).apply(null, arguments);
  };
  var _0x2c76ee = _0x4141f5.dynCall_ijj = function () {
    return (_0x2c76ee = _0x4141f5.dynCall_ijj = _0x4141f5.asm.xt).apply(null, arguments);
  };
  var _0x1003ac = _0x4141f5.dynCall_vjji = function () {
    return (_0x1003ac = _0x4141f5.dynCall_vjji = _0x4141f5.asm.yt).apply(null, arguments);
  };
  var _0x460892 = _0x4141f5.dynCall_ij = function () {
    return (_0x460892 = _0x4141f5.dynCall_ij = _0x4141f5.asm.zt).apply(null, arguments);
  };
  var _0xedbd5b = _0x4141f5.dynCall_vif = function () {
    return (_0xedbd5b = _0x4141f5.dynCall_vif = _0x4141f5.asm.At).apply(null, arguments);
  };
  var _0x473f44 = _0x4141f5.dynCall_vid = function () {
    return (_0x473f44 = _0x4141f5.dynCall_vid = _0x4141f5.asm.Bt).apply(null, arguments);
  };
  var _0x5414da = _0x4141f5.dynCall_viiiiif = function () {
    return (_0x5414da = _0x4141f5.dynCall_viiiiif = _0x4141f5.asm.Ct).apply(null, arguments);
  };
  var _0x4abc7b = _0x4141f5.dynCall_viiiif = function () {
    return (_0x4abc7b = _0x4141f5.dynCall_viiiif = _0x4141f5.asm.Dt).apply(null, arguments);
  };
  var _0x46813c = _0x4141f5.dynCall_viiiiiif = function () {
    return (_0x46813c = _0x4141f5.dynCall_viiiiiif = _0x4141f5.asm.Et).apply(null, arguments);
  };
  var _0x2f93ce = _0x4141f5.dynCall_iiif = function () {
    return (_0x2f93ce = _0x4141f5.dynCall_iiif = _0x4141f5.asm.Ft).apply(null, arguments);
  };
  var _0x2cc5e4 = _0x4141f5.dynCall_fif = function () {
    return (_0x2cc5e4 = _0x4141f5.dynCall_fif = _0x4141f5.asm.Gt).apply(null, arguments);
  };
  var _0x36caee = _0x4141f5.dynCall_viff = function () {
    return (_0x36caee = _0x4141f5.dynCall_viff = _0x4141f5.asm.Ht).apply(null, arguments);
  };
  var _0x3969d8 = _0x4141f5.dynCall_iiiiiifff = function () {
    return (_0x3969d8 = _0x4141f5.dynCall_iiiiiifff = _0x4141f5.asm.It).apply(null, arguments);
  };
  var _0x5294d = _0x4141f5.dynCall_iiiiiifiif = function () {
    return (_0x5294d = _0x4141f5.dynCall_iiiiiifiif = _0x4141f5.asm.Jt).apply(null, arguments);
  };
  var _0x508bc7 = _0x4141f5.dynCall_iiiiiifiii = function () {
    return (_0x508bc7 = _0x4141f5.dynCall_iiiiiifiii = _0x4141f5.asm.Kt).apply(null, arguments);
  };
  var _0x2971be = _0x4141f5.dynCall_iiiiiiifiif = function () {
    return (_0x2971be = _0x4141f5.dynCall_iiiiiiifiif = _0x4141f5.asm.Lt).apply(null, arguments);
  };
  var _0x494e3d = _0x4141f5.dynCall_fiff = function () {
    return (_0x494e3d = _0x4141f5.dynCall_fiff = _0x4141f5.asm.Mt).apply(null, arguments);
  };
  var _0x10a4b7 = _0x4141f5.dynCall_fiiiiiifiifif = function () {
    return (_0x10a4b7 = _0x4141f5.dynCall_fiiiiiifiifif = _0x4141f5.asm.Nt).apply(null, arguments);
  };
  var _0x234d88 = _0x4141f5.dynCall_fiiiiiifiiiif = function () {
    return (_0x234d88 = _0x4141f5.dynCall_fiiiiiifiiiif = _0x4141f5.asm.Ot).apply(null, arguments);
  };
  var _0x2d3d79 = _0x4141f5.dynCall_iifiiiijii = function () {
    return (_0x2d3d79 = _0x4141f5.dynCall_iifiiiijii = _0x4141f5.asm.Pt).apply(null, arguments);
  };
  var _0x3e3ef2 = _0x4141f5.dynCall_vifijii = function () {
    return (_0x3e3ef2 = _0x4141f5.dynCall_vifijii = _0x4141f5.asm.Qt).apply(null, arguments);
  };
  var _0x334931 = _0x4141f5.dynCall_iiiifffiii = function () {
    return (_0x334931 = _0x4141f5.dynCall_iiiifffiii = _0x4141f5.asm.Rt).apply(null, arguments);
  };
  var _0x52acb3 = _0x4141f5.dynCall_iiiifffffi = function () {
    return (_0x52acb3 = _0x4141f5.dynCall_iiiifffffi = _0x4141f5.asm.St).apply(null, arguments);
  };
  var _0x39d7ff = _0x4141f5.dynCall_viffiiiif = function () {
    return (_0x39d7ff = _0x4141f5.dynCall_viffiiiif = _0x4141f5.asm.Tt).apply(null, arguments);
  };
  var _0x33623a = _0x4141f5.dynCall_viffiifffffiii = function () {
    return (_0x33623a = _0x4141f5.dynCall_viffiifffffiii = _0x4141f5.asm.Ut).apply(null, arguments);
  };
  var _0x733a6e = _0x4141f5.dynCall_viffffiifffiiiiif = function () {
    return (_0x733a6e = _0x4141f5.dynCall_viffffiifffiiiiif = _0x4141f5.asm.Vt).apply(null, arguments);
  };
  var _0x5d2df8 = _0x4141f5.dynCall_iiiifffffii = function () {
    return (_0x5d2df8 = _0x4141f5.dynCall_iiiifffffii = _0x4141f5.asm.Wt).apply(null, arguments);
  };
  var _0x34af77 = _0x4141f5.dynCall_viiiiiiiiiiifii = function () {
    return (_0x34af77 = _0x4141f5.dynCall_viiiiiiiiiiifii = _0x4141f5.asm.Xt).apply(null, arguments);
  };
  var _0x2da745 = _0x4141f5.dynCall_iiiiifiiiiif = function () {
    return (_0x2da745 = _0x4141f5.dynCall_iiiiifiiiiif = _0x4141f5.asm.Yt).apply(null, arguments);
  };
  var _0x246f05 = _0x4141f5.dynCall_viiiifiiiiif = function () {
    return (_0x246f05 = _0x4141f5.dynCall_viiiifiiiiif = _0x4141f5.asm.Zt).apply(null, arguments);
  };
  var _0x7c4e0f = _0x4141f5.dynCall_iifff = function () {
    return (_0x7c4e0f = _0x4141f5.dynCall_iifff = _0x4141f5.asm._t).apply(null, arguments);
  };
  var _0x420430 = _0x4141f5.dynCall_iif = function () {
    return (_0x420430 = _0x4141f5.dynCall_iif = _0x4141f5.asm.$t).apply(null, arguments);
  };
  var _0x21ab66 = _0x4141f5.dynCall_viijijj = function () {
    return (_0x21ab66 = _0x4141f5.dynCall_viijijj = _0x4141f5.asm.au).apply(null, arguments);
  };
  var _0x1143cc = _0x4141f5.dynCall_viijj = function () {
    return (_0x1143cc = _0x4141f5.dynCall_viijj = _0x4141f5.asm.bu).apply(null, arguments);
  };
  var _0x4b975e = _0x4141f5.dynCall_viiiij = function () {
    return (_0x4b975e = _0x4141f5.dynCall_viiiij = _0x4141f5.asm.cu).apply(null, arguments);
  };
  var _0x1ff5ee = _0x4141f5.dynCall_iiijji = function () {
    return (_0x1ff5ee = _0x4141f5.dynCall_iiijji = _0x4141f5.asm.du).apply(null, arguments);
  };
  var _0x46da9 = _0x4141f5.dynCall_ijjiiiii = function () {
    return (_0x46da9 = _0x4141f5.dynCall_ijjiiiii = _0x4141f5.asm.eu).apply(null, arguments);
  };
  var _0x108218 = _0x4141f5.dynCall_vidd = function () {
    return (_0x108218 = _0x4141f5.dynCall_vidd = _0x4141f5.asm.fu).apply(null, arguments);
  };
  var _0x1d3b18 = _0x4141f5.dynCall_iiiiiifffiiifiii = function () {
    return (_0x1d3b18 = _0x4141f5.dynCall_iiiiiifffiiifiii = _0x4141f5.asm.gu).apply(null, arguments);
  };
  var _0x251f89 = _0x4141f5.dynCall_viid = function () {
    return (_0x251f89 = _0x4141f5.dynCall_viid = _0x4141f5.asm.hu).apply(null, arguments);
  };
  var _0x29792f = _0x4141f5.dynCall_viiif = function () {
    return (_0x29792f = _0x4141f5.dynCall_viiif = _0x4141f5.asm.iu).apply(null, arguments);
  };
  var _0x43adf = _0x4141f5.dynCall_fiiiif = function () {
    return (_0x43adf = _0x4141f5.dynCall_fiiiif = _0x4141f5.asm.ju).apply(null, arguments);
  };
  var _0x3636f7 = _0x4141f5.dynCall_viiifffiiij = function () {
    return (_0x3636f7 = _0x4141f5.dynCall_viiifffiiij = _0x4141f5.asm.ku).apply(null, arguments);
  };
  var _0x356ba8 = _0x4141f5.dynCall_viiffiiii = function () {
    return (_0x356ba8 = _0x4141f5.dynCall_viiffiiii = _0x4141f5.asm.lu).apply(null, arguments);
  };
  var _0x491f10 = _0x4141f5.dynCall_viffffffffffffiiii = function () {
    return (_0x491f10 = _0x4141f5.dynCall_viffffffffffffiiii = _0x4141f5.asm.mu).apply(null, arguments);
  };
  var _0x35221e = _0x4141f5.dynCall_ff = function () {
    return (_0x35221e = _0x4141f5.dynCall_ff = _0x4141f5.asm.nu).apply(null, arguments);
  };
  var _0x8ea946 = _0x4141f5.dynCall_fff = function () {
    return (_0x8ea946 = _0x4141f5.dynCall_fff = _0x4141f5.asm.ou).apply(null, arguments);
  };
  var _0x465028 = _0x4141f5.dynCall_iiiiiff = function () {
    return (_0x465028 = _0x4141f5.dynCall_iiiiiff = _0x4141f5.asm.pu).apply(null, arguments);
  };
  var _0x591445 = _0x4141f5.dynCall_viffff = function () {
    return (_0x591445 = _0x4141f5.dynCall_viffff = _0x4141f5.asm.qu).apply(null, arguments);
  };
  var _0x54a695 = _0x4141f5.dynCall_vifff = function () {
    return (_0x54a695 = _0x4141f5.dynCall_vifff = _0x4141f5.asm.ru).apply(null, arguments);
  };
  var _0x34c737 = _0x4141f5.dynCall_viifff = function () {
    return (_0x34c737 = _0x4141f5.dynCall_viifff = _0x4141f5.asm.su).apply(null, arguments);
  };
  var _0x351024 = _0x4141f5.dynCall_vf = function () {
    return (_0x351024 = _0x4141f5.dynCall_vf = _0x4141f5.asm.tu).apply(null, arguments);
  };
  var _0x50a694 = _0x4141f5.dynCall_vffff = function () {
    return (_0x50a694 = _0x4141f5.dynCall_vffff = _0x4141f5.asm.uu).apply(null, arguments);
  };
  var _0x16feb3 = _0x4141f5.dynCall_vff = function () {
    return (_0x16feb3 = _0x4141f5.dynCall_vff = _0x4141f5.asm.vu).apply(null, arguments);
  };
  var _0x3ee5c0 = _0x4141f5.dynCall_f = function () {
    return (_0x3ee5c0 = _0x4141f5.dynCall_f = _0x4141f5.asm.wu).apply(null, arguments);
  };
  var _0x45aa54 = _0x4141f5.dynCall_vfff = function () {
    return (_0x45aa54 = _0x4141f5.dynCall_vfff = _0x4141f5.asm.xu).apply(null, arguments);
  };
  var _0x4ab901 = _0x4141f5.dynCall_vffffffi = function () {
    return (_0x4ab901 = _0x4141f5.dynCall_vffffffi = _0x4141f5.asm.yu).apply(null, arguments);
  };
  var _0x50a358 = _0x4141f5.dynCall_iiid = function () {
    return (_0x50a358 = _0x4141f5.dynCall_iiid = _0x4141f5.asm.zu).apply(null, arguments);
  };
  var _0x4382c1 = _0x4141f5.dynCall_fiif = function () {
    return (_0x4382c1 = _0x4141f5.dynCall_fiif = _0x4141f5.asm.Au).apply(null, arguments);
  };
  var _0xb6cd2f = _0x4141f5.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0xb6cd2f = _0x4141f5.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x4141f5.asm.Bu).apply(null, arguments);
  };
  var _0x4e2778 = _0x4141f5.dynCall_viiiiiiiijiii = function () {
    return (_0x4e2778 = _0x4141f5.dynCall_viiiiiiiijiii = _0x4141f5.asm.Cu).apply(null, arguments);
  };
  function _0x27f749(_0x157602, _0x50407b) {
    var _0x4b4a10 = _0x555fcf();
    try {
      return _0x21b1c5(_0x157602, _0x50407b);
    } catch (_0x5c0bb2) {
      _0x346df4(_0x4b4a10);
      if (_0x5c0bb2 !== _0x5c0bb2 + 0 && _0x5c0bb2 !== "longjmp") {
        throw _0x5c0bb2;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x27bb59(_0x25c6c7, _0x118244, _0x419e87) {
    var _0x1c1612 = _0x555fcf();
    try {
      return _0x1b8a34(_0x25c6c7, _0x118244, _0x419e87);
    } catch (_0x206889) {
      _0x346df4(_0x1c1612);
      if (_0x206889 !== _0x206889 + 0 && _0x206889 !== "longjmp") {
        throw _0x206889;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x29f13c(_0xd8eb34, _0x41c872, _0x310fd1, _0x335336) {
    var _0x204186 = _0x555fcf();
    try {
      _0x54bd5d(_0xd8eb34, _0x41c872, _0x310fd1, _0x335336);
    } catch (_0x5b7df1) {
      _0x346df4(_0x204186);
      if (_0x5b7df1 !== _0x5b7df1 + 0 && _0x5b7df1 !== "longjmp") {
        throw _0x5b7df1;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x521d0b(_0x2970c4, _0x3590bc, _0x492782, _0x1e83da, _0x31d6e9, _0x130b61) {
    var _0x30cf1e = _0x555fcf();
    try {
      return _0x5095fb(_0x2970c4, _0x3590bc, _0x492782, _0x1e83da, _0x31d6e9, _0x130b61);
    } catch (_0x3ac4bf) {
      _0x346df4(_0x30cf1e);
      if (_0x3ac4bf !== _0x3ac4bf + 0 && _0x3ac4bf !== "longjmp") {
        throw _0x3ac4bf;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x1a69c8(_0x5ac4d7, _0xd3c940, _0x510ff6, _0x2d30b7) {
    var _0x11a844 = _0x555fcf();
    try {
      return _0x2c342c(_0x5ac4d7, _0xd3c940, _0x510ff6, _0x2d30b7);
    } catch (_0x4f57cd) {
      _0x346df4(_0x11a844);
      if (_0x4f57cd !== _0x4f57cd + 0 && _0x4f57cd !== "longjmp") {
        throw _0x4f57cd;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x244e70(_0x5054fc, _0x409aa6, _0x36cf34, _0x2d7de2, _0x50ae5a) {
    var _0x200232 = _0x555fcf();
    try {
      _0x46f5d9(_0x5054fc, _0x409aa6, _0x36cf34, _0x2d7de2, _0x50ae5a);
    } catch (_0x46e376) {
      _0x346df4(_0x200232);
      if (_0x46e376 !== _0x46e376 + 0 && _0x46e376 !== "longjmp") {
        throw _0x46e376;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x22dfc2(_0x488970, _0x197f49, _0xc0d5a8, _0x16badc, _0x21d10a) {
    var _0x34703b = _0x555fcf();
    try {
      return _0xec3c3f(_0x488970, _0x197f49, _0xc0d5a8, _0x16badc, _0x21d10a);
    } catch (_0x45b5c4) {
      _0x346df4(_0x34703b);
      if (_0x45b5c4 !== _0x45b5c4 + 0 && _0x45b5c4 !== "longjmp") {
        throw _0x45b5c4;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x542fe8(_0x4bc6cc, _0x561972, _0x56b84b, _0x41e0ae) {
    var _0x5a7a3e = _0x555fcf();
    try {
      return _0xd3c44c(_0x4bc6cc, _0x561972, _0x56b84b, _0x41e0ae);
    } catch (_0x563a48) {
      _0x346df4(_0x5a7a3e);
      if (_0x563a48 !== _0x563a48 + 0 && _0x563a48 !== "longjmp") {
        throw _0x563a48;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x71c0db(_0x4baf14, _0x119025, _0x1aa33b, _0x45e7d4) {
    var _0x1ce9f7 = _0x555fcf();
    try {
      return _0x1db909(_0x4baf14, _0x119025, _0x1aa33b, _0x45e7d4);
    } catch (_0x3aa1e5) {
      _0x346df4(_0x1ce9f7);
      if (_0x3aa1e5 !== _0x3aa1e5 + 0 && _0x3aa1e5 !== "longjmp") {
        throw _0x3aa1e5;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x2f2763(_0x50fd55, _0x185ec8, _0xdf3417, _0x353b05) {
    var _0x5ac8fb = _0x555fcf();
    try {
      _0x484656(_0x50fd55, _0x185ec8, _0xdf3417, _0x353b05);
    } catch (_0x401705) {
      _0x346df4(_0x5ac8fb);
      if (_0x401705 !== _0x401705 + 0 && _0x401705 !== "longjmp") {
        throw _0x401705;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x4fd986(_0x4affd9, _0x87c7a, _0x261806) {
    var _0x49f093 = _0x555fcf();
    try {
      _0x6f8fd4(_0x4affd9, _0x87c7a, _0x261806);
    } catch (_0x156785) {
      _0x346df4(_0x49f093);
      if (_0x156785 !== _0x156785 + 0 && _0x156785 !== "longjmp") {
        throw _0x156785;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x1c2ce4(_0x98f858, _0x1c3ed0) {
    var _0x4388e6 = _0x555fcf();
    try {
      _0xa9e541(_0x98f858, _0x1c3ed0);
    } catch (_0x57124b) {
      _0x346df4(_0x4388e6);
      if (_0x57124b !== _0x57124b + 0 && _0x57124b !== "longjmp") {
        throw _0x57124b;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x4b5424(_0x121171) {
    var _0x3bf1ee = _0x555fcf();
    try {
      _0x41ec79(_0x121171);
    } catch (_0xb7bf24) {
      _0x346df4(_0x3bf1ee);
      if (_0xb7bf24 !== _0xb7bf24 + 0 && _0xb7bf24 !== "longjmp") {
        throw _0xb7bf24;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x44a0cf(_0x2414c6) {
    var _0x362a34 = _0x555fcf();
    try {
      return _0x1713eb(_0x2414c6);
    } catch (_0x5c8327) {
      _0x346df4(_0x362a34);
      if (_0x5c8327 !== _0x5c8327 + 0 && _0x5c8327 !== "longjmp") {
        throw _0x5c8327;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x488fdb(_0x2ba985, _0xe6c0ca, _0x4e7175, _0x125f92, _0x57ed1e, _0x104c1e, _0x4532cb, _0x5e8391) {
    var _0x48cdc8 = _0x555fcf();
    try {
      return _0x28ce66(_0x2ba985, _0xe6c0ca, _0x4e7175, _0x125f92, _0x57ed1e, _0x104c1e, _0x4532cb, _0x5e8391);
    } catch (_0x132915) {
      _0x346df4(_0x48cdc8);
      if (_0x132915 !== _0x132915 + 0 && _0x132915 !== "longjmp") {
        throw _0x132915;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x16fc0f(_0x521292, _0x1451f2, _0x4ac2da, _0x4fa07c, _0x1a2f5e, _0x23d602) {
    var _0x16da0a = _0x555fcf();
    try {
      _0x3db51d(_0x521292, _0x1451f2, _0x4ac2da, _0x4fa07c, _0x1a2f5e, _0x23d602);
    } catch (_0x1c3bda) {
      _0x346df4(_0x16da0a);
      if (_0x1c3bda !== _0x1c3bda + 0 && _0x1c3bda !== "longjmp") {
        throw _0x1c3bda;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x54fb37(_0x13f208, _0x34d50c, _0x2cbac7, _0xdde11d, _0xd4c165, _0x38a193, _0x453177) {
    var _0x4fc93d = _0x555fcf();
    try {
      return _0x582bf5(_0x13f208, _0x34d50c, _0x2cbac7, _0xdde11d, _0xd4c165, _0x38a193, _0x453177);
    } catch (_0x12e2b8) {
      _0x346df4(_0x4fc93d);
      if (_0x12e2b8 !== _0x12e2b8 + 0 && _0x12e2b8 !== "longjmp") {
        throw _0x12e2b8;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x119792(_0x397727, _0x2cf1c8, _0x3c9097, _0x45a167, _0x5c0e5c, _0x1e7d1f, _0x50481e, _0x7c5137) {
    var _0x572e81 = _0x555fcf();
    try {
      _0x5cb7e2(_0x397727, _0x2cf1c8, _0x3c9097, _0x45a167, _0x5c0e5c, _0x1e7d1f, _0x50481e, _0x7c5137);
    } catch (_0x2795a1) {
      _0x346df4(_0x572e81);
      if (_0x2795a1 !== _0x2795a1 + 0 && _0x2795a1 !== "longjmp") {
        throw _0x2795a1;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x3e70dd(_0x3213d5, _0x5ecdd2, _0x1e5f97, _0x3821eb, _0x36499c, _0x3e27f7, _0x4b78b2) {
    var _0x202803 = _0x555fcf();
    try {
      _0x3abff5(_0x3213d5, _0x5ecdd2, _0x1e5f97, _0x3821eb, _0x36499c, _0x3e27f7, _0x4b78b2);
    } catch (_0x1695a8) {
      _0x346df4(_0x202803);
      if (_0x1695a8 !== _0x1695a8 + 0 && _0x1695a8 !== "longjmp") {
        throw _0x1695a8;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x236b30(_0x5619f5, _0x3bb3a7, _0x50b0c0, _0x2acdb0, _0x132f44, _0x2305d3, _0x7cc8f5, _0x42d645, _0x1fd53c) {
    var _0xd28fe0 = _0x555fcf();
    try {
      return _0x587265(_0x5619f5, _0x3bb3a7, _0x50b0c0, _0x2acdb0, _0x132f44, _0x2305d3, _0x7cc8f5, _0x42d645, _0x1fd53c);
    } catch (_0x49c8ed) {
      _0x346df4(_0xd28fe0);
      if (_0x49c8ed !== _0x49c8ed + 0 && _0x49c8ed !== "longjmp") {
        throw _0x49c8ed;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x33aa52(_0x1e668e, _0x9eef36, _0x1ff3f2, _0x36c22a, _0x55b040, _0x1cf804, _0x5ae7a5, _0x195a3b, _0x132362, _0x4f8d04) {
    var _0x45bcac = _0x555fcf();
    try {
      _0x4dd3a5(_0x1e668e, _0x9eef36, _0x1ff3f2, _0x36c22a, _0x55b040, _0x1cf804, _0x5ae7a5, _0x195a3b, _0x132362, _0x4f8d04);
    } catch (_0x511a5b) {
      _0x346df4(_0x45bcac);
      if (_0x511a5b !== _0x511a5b + 0 && _0x511a5b !== "longjmp") {
        throw _0x511a5b;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x4e035b(_0x370f97, _0x187c18, _0x1f6c09) {
    var _0x1ec892 = _0x555fcf();
    try {
      return _0x5884ac(_0x370f97, _0x187c18, _0x1f6c09);
    } catch (_0x5b9533) {
      _0x346df4(_0x1ec892);
      if (_0x5b9533 !== _0x5b9533 + 0 && _0x5b9533 !== "longjmp") {
        throw _0x5b9533;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x1aa230(_0x286823, _0x2e9411, _0xf46a32) {
    var _0x5473d3 = _0x555fcf();
    try {
      return _0x508109(_0x286823, _0x2e9411, _0xf46a32);
    } catch (_0x11a892) {
      _0x346df4(_0x5473d3);
      if (_0x11a892 !== _0x11a892 + 0 && _0x11a892 !== "longjmp") {
        throw _0x11a892;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x325fe6(_0x5ba183, _0x200f5b, _0x1ed4a2) {
    var _0x1bfe5f = _0x555fcf();
    try {
      return _0x47ca10(_0x5ba183, _0x200f5b, _0x1ed4a2);
    } catch (_0x3bce10) {
      _0x346df4(_0x1bfe5f);
      if (_0x3bce10 !== _0x3bce10 + 0 && _0x3bce10 !== "longjmp") {
        throw _0x3bce10;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x48e613(_0x1d0ecf, _0x242f7e, _0x4e7a6b) {
    var _0x14fb60 = _0x555fcf();
    try {
      return _0x36ad94(_0x1d0ecf, _0x242f7e, _0x4e7a6b);
    } catch (_0x4df709) {
      _0x346df4(_0x14fb60);
      if (_0x4df709 !== _0x4df709 + 0 && _0x4df709 !== "longjmp") {
        throw _0x4df709;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x2c51c6(_0x27db94, _0x51ef52, _0x10586b, _0x2a5e06, _0x45f0ee, _0x3c7602, _0x1123e4, _0x18fa6b, _0x533c16) {
    var _0x3e4a26 = _0x555fcf();
    try {
      _0x1f8012(_0x27db94, _0x51ef52, _0x10586b, _0x2a5e06, _0x45f0ee, _0x3c7602, _0x1123e4, _0x18fa6b, _0x533c16);
    } catch (_0x1e520d) {
      _0x346df4(_0x3e4a26);
      if (_0x1e520d !== _0x1e520d + 0 && _0x1e520d !== "longjmp") {
        throw _0x1e520d;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x29cd75(_0x271e71, _0xa05922, _0xa771f4, _0x398723, _0x1a939b) {
    var _0x4d7e19 = _0x555fcf();
    try {
      _0x473b61(_0x271e71, _0xa05922, _0xa771f4, _0x398723, _0x1a939b);
    } catch (_0x9ef404) {
      _0x346df4(_0x4d7e19);
      if (_0x9ef404 !== _0x9ef404 + 0 && _0x9ef404 !== "longjmp") {
        throw _0x9ef404;
      }
      _0x22893a(1, 0);
    }
  }
  function _0xd96960(_0x534f4d, _0x3dcef0, _0x197dc0, _0x788c36) {
    var _0x11e2d8 = _0x555fcf();
    try {
      _0x439b62(_0x534f4d, _0x3dcef0, _0x197dc0, _0x788c36);
    } catch (_0x32aa65) {
      _0x346df4(_0x11e2d8);
      if (_0x32aa65 !== _0x32aa65 + 0 && _0x32aa65 !== "longjmp") {
        throw _0x32aa65;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x1571aa(_0x312920, _0x18aa09, _0x551018, _0x1d1000, _0x2ef480) {
    var _0x1a0d9a = _0x555fcf();
    try {
      _0x3b1a25(_0x312920, _0x18aa09, _0x551018, _0x1d1000, _0x2ef480);
    } catch (_0x130f6d) {
      _0x346df4(_0x1a0d9a);
      if (_0x130f6d !== _0x130f6d + 0 && _0x130f6d !== "longjmp") {
        throw _0x130f6d;
      }
      _0x22893a(1, 0);
    }
  }
  function _0xffa8f6(_0x27190c, _0x16f499, _0xf5efd8, _0xaab6e0, _0x215511) {
    var _0x1a5a2e = _0x555fcf();
    try {
      return _0x59cafb(_0x27190c, _0x16f499, _0xf5efd8, _0xaab6e0, _0x215511);
    } catch (_0x6a5e8) {
      _0x346df4(_0x1a5a2e);
      if (_0x6a5e8 !== _0x6a5e8 + 0 && _0x6a5e8 !== "longjmp") {
        throw _0x6a5e8;
      }
      _0x22893a(1, 0);
    }
  }
  function _0xaafef7(_0x1dfcce, _0x265b16, _0xdf6b2f, _0x304d34, _0x5273c1, _0x23d242, _0x469394, _0xe02e77, _0x1372e7, _0x361f0d, _0x240529, _0x445762) {
    var _0x46428e = _0x555fcf();
    try {
      _0x594683(_0x1dfcce, _0x265b16, _0xdf6b2f, _0x304d34, _0x5273c1, _0x23d242, _0x469394, _0xe02e77, _0x1372e7, _0x361f0d, _0x240529, _0x445762);
    } catch (_0x358aa5) {
      _0x346df4(_0x46428e);
      if (_0x358aa5 !== _0x358aa5 + 0 && _0x358aa5 !== "longjmp") {
        throw _0x358aa5;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x5a7e4a(_0x52fdfd, _0x4bfd83, _0x2d6609, _0x4761ec, _0x20180d, _0x907117, _0x35c3a5, _0x3bd17a, _0xc5529b, _0x47193d, _0x5bb7b6, _0x178b87, _0x80e3c2) {
    var _0x4f7084 = _0x555fcf();
    try {
      return _0x1ccd13(_0x52fdfd, _0x4bfd83, _0x2d6609, _0x4761ec, _0x20180d, _0x907117, _0x35c3a5, _0x3bd17a, _0xc5529b, _0x47193d, _0x5bb7b6, _0x178b87, _0x80e3c2);
    } catch (_0x3c9312) {
      _0x346df4(_0x4f7084);
      if (_0x3c9312 !== _0x3c9312 + 0 && _0x3c9312 !== "longjmp") {
        throw _0x3c9312;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x2cce2a(_0x505c50, _0x5d4303, _0x59bd15, _0x5c60a3, _0x55a123) {
    var _0x49c353 = _0x555fcf();
    try {
      _0x20ce10(_0x505c50, _0x5d4303, _0x59bd15, _0x5c60a3, _0x55a123);
    } catch (_0x267f4e) {
      _0x346df4(_0x49c353);
      if (_0x267f4e !== _0x267f4e + 0 && _0x267f4e !== "longjmp") {
        throw _0x267f4e;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x43a74e(_0x59a8fe, _0x4e1c15, _0x1075e7, _0x187e9) {
    var _0x368637 = _0x555fcf();
    try {
      _0x4f8786(_0x59a8fe, _0x4e1c15, _0x1075e7, _0x187e9);
    } catch (_0x5952b1) {
      _0x346df4(_0x368637);
      if (_0x5952b1 !== _0x5952b1 + 0 && _0x5952b1 !== "longjmp") {
        throw _0x5952b1;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x1b071b(_0x29a06d, _0x3e7be0, _0xa25929, _0x4db43b, _0x415b34) {
    var _0x272900 = _0x555fcf();
    try {
      return _0x3765fb(_0x29a06d, _0x3e7be0, _0xa25929, _0x4db43b, _0x415b34);
    } catch (_0x3aa242) {
      _0x346df4(_0x272900);
      if (_0x3aa242 !== _0x3aa242 + 0 && _0x3aa242 !== "longjmp") {
        throw _0x3aa242;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x5a0a82(_0x1c96da, _0x752976, _0x384b9c, _0x59ab1a, _0x4acaa2) {
    var _0xaecf44 = _0x555fcf();
    try {
      return _0xd28ae8(_0x1c96da, _0x752976, _0x384b9c, _0x59ab1a, _0x4acaa2);
    } catch (_0x38ea55) {
      _0x346df4(_0xaecf44);
      if (_0x38ea55 !== _0x38ea55 + 0 && _0x38ea55 !== "longjmp") {
        throw _0x38ea55;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x36c832(_0x24d095, _0x471148, _0x473481, _0x56ce13, _0x5ec9d5, _0x4f6154, _0x53058d, _0xe029e6) {
    var _0x2594be = _0x555fcf();
    try {
      return _0x2e1e02(_0x24d095, _0x471148, _0x473481, _0x56ce13, _0x5ec9d5, _0x4f6154, _0x53058d, _0xe029e6);
    } catch (_0x8cc9b3) {
      _0x346df4(_0x2594be);
      if (_0x8cc9b3 !== _0x8cc9b3 + 0 && _0x8cc9b3 !== "longjmp") {
        throw _0x8cc9b3;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x2cf268(_0x3fa0b0, _0xbfbbbf, _0x14294e, _0x5a74cb, _0x155f02, _0xe1e4ab) {
    var _0x4b5972 = _0x555fcf();
    try {
      _0x3b9860(_0x3fa0b0, _0xbfbbbf, _0x14294e, _0x5a74cb, _0x155f02, _0xe1e4ab);
    } catch (_0x7c2a76) {
      _0x346df4(_0x4b5972);
      if (_0x7c2a76 !== _0x7c2a76 + 0 && _0x7c2a76 !== "longjmp") {
        throw _0x7c2a76;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x4be960(_0x51657d, _0x2248b2, _0x15c0d2, _0x483723, _0xe0b82f, _0x55b880) {
    var _0x3c7cce = _0x555fcf();
    try {
      _0x439752(_0x51657d, _0x2248b2, _0x15c0d2, _0x483723, _0xe0b82f, _0x55b880);
    } catch (_0x47275e) {
      _0x346df4(_0x3c7cce);
      if (_0x47275e !== _0x47275e + 0 && _0x47275e !== "longjmp") {
        throw _0x47275e;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x415fae(_0x6d4864, _0x40032b, _0x4aaa9a, _0x5432d5, _0x2ae3bf, _0x43fb1e) {
    var _0x120542 = _0x555fcf();
    try {
      return _0x52e690(_0x6d4864, _0x40032b, _0x4aaa9a, _0x5432d5, _0x2ae3bf, _0x43fb1e);
    } catch (_0x2adf14) {
      _0x346df4(_0x120542);
      if (_0x2adf14 !== _0x2adf14 + 0 && _0x2adf14 !== "longjmp") {
        throw _0x2adf14;
      }
      _0x22893a(1, 0);
    }
  }
  function _0xa892ec(_0x2f9407, _0x2f79d7, _0x44d7d6, _0x1be851) {
    var _0xdc41d1 = _0x555fcf();
    try {
      return _0x58b238(_0x2f9407, _0x2f79d7, _0x44d7d6, _0x1be851);
    } catch (_0x1802c6) {
      _0x346df4(_0xdc41d1);
      if (_0x1802c6 !== _0x1802c6 + 0 && _0x1802c6 !== "longjmp") {
        throw _0x1802c6;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x115063(_0x15c758, _0x2af60c, _0x34f90b) {
    var _0xf4b827 = _0x555fcf();
    try {
      return _0x2c8d49(_0x15c758, _0x2af60c, _0x34f90b);
    } catch (_0xd4bcb3) {
      _0x346df4(_0xf4b827);
      if (_0xd4bcb3 !== _0xd4bcb3 + 0 && _0xd4bcb3 !== "longjmp") {
        throw _0xd4bcb3;
      }
      _0x22893a(1, 0);
    }
  }
  function _0xbc734d(_0x13a3d6, _0x36e21e, _0x22ee4f, _0x420c15, _0x8993c7, _0x9fbf5a, _0x4c5ce4, _0xeb204c, _0x44d399, _0x1c9eae, _0x59140c, _0x540eea, _0x998ff5, _0x15a632) {
    var _0x182b04 = _0x555fcf();
    try {
      _0x4c34a6(_0x13a3d6, _0x36e21e, _0x22ee4f, _0x420c15, _0x8993c7, _0x9fbf5a, _0x4c5ce4, _0xeb204c, _0x44d399, _0x1c9eae, _0x59140c, _0x540eea, _0x998ff5, _0x15a632);
    } catch (_0x429659) {
      _0x346df4(_0x182b04);
      if (_0x429659 !== _0x429659 + 0 && _0x429659 !== "longjmp") {
        throw _0x429659;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x5085a4(_0x59eaf2, _0x51d953) {
    var _0x1c40dc = _0x555fcf();
    try {
      return _0x58d7c7(_0x59eaf2, _0x51d953);
    } catch (_0x496356) {
      _0x346df4(_0x1c40dc);
      if (_0x496356 !== _0x496356 + 0 && _0x496356 !== "longjmp") {
        throw _0x496356;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x51cd36(_0x32f725, _0x39ba29, _0x43768b, _0x180fba, _0x1511f8) {
    var _0x329858 = _0x555fcf();
    try {
      return _0x2f3e4d(_0x32f725, _0x39ba29, _0x43768b, _0x180fba, _0x1511f8);
    } catch (_0x26c19c) {
      _0x346df4(_0x329858);
      if (_0x26c19c !== _0x26c19c + 0 && _0x26c19c !== "longjmp") {
        throw _0x26c19c;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x11a473(_0x3749d7, _0x56121e, _0x3d3342, _0x3a3590, _0xe15ceb, _0x1edbbc, _0x253b03, _0x2acb5a, _0x578d13, _0x10f4a7, _0x1a5903) {
    var _0x5e1c60 = _0x555fcf();
    try {
      _0x3fedd8(_0x3749d7, _0x56121e, _0x3d3342, _0x3a3590, _0xe15ceb, _0x1edbbc, _0x253b03, _0x2acb5a, _0x578d13, _0x10f4a7, _0x1a5903);
    } catch (_0x336816) {
      _0x346df4(_0x5e1c60);
      if (_0x336816 !== _0x336816 + 0 && _0x336816 !== "longjmp") {
        throw _0x336816;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x4dcc40(_0x1945cc, _0x39f6d8, _0x24fbf5, _0x1d122b, _0x5d352f) {
    var _0x5d2c6b = _0x555fcf();
    try {
      return _0x5c0695(_0x1945cc, _0x39f6d8, _0x24fbf5, _0x1d122b, _0x5d352f);
    } catch (_0x455f33) {
      _0x346df4(_0x5d2c6b);
      if (_0x455f33 !== _0x455f33 + 0 && _0x455f33 !== "longjmp") {
        throw _0x455f33;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x261b84(_0x2a7341, _0x5c1055, _0x24558c, _0x6a8c86, _0x4c2a2d, _0x197fcc, _0x50a685) {
    var _0x5a0a03 = _0x555fcf();
    try {
      return _0x552079(_0x2a7341, _0x5c1055, _0x24558c, _0x6a8c86, _0x4c2a2d, _0x197fcc, _0x50a685);
    } catch (_0x3f12d3) {
      _0x346df4(_0x5a0a03);
      if (_0x3f12d3 !== _0x3f12d3 + 0 && _0x3f12d3 !== "longjmp") {
        throw _0x3f12d3;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x32c756(_0x21cd16, _0x494e0f, _0x573940, _0x1bfb39, _0x3faf6f, _0x25f6d3, _0x117f84, _0xe14860, _0x14497a, _0x2be8db, _0xdd6b8a, _0x3145a7, _0x13681f, _0x2bb77b, _0x4d87fe) {
    var _0x3f96f1 = _0x555fcf();
    try {
      _0x113b9e(_0x21cd16, _0x494e0f, _0x573940, _0x1bfb39, _0x3faf6f, _0x25f6d3, _0x117f84, _0xe14860, _0x14497a, _0x2be8db, _0xdd6b8a, _0x3145a7, _0x13681f, _0x2bb77b, _0x4d87fe);
    } catch (_0x2dd81d) {
      _0x346df4(_0x3f96f1);
      if (_0x2dd81d !== _0x2dd81d + 0 && _0x2dd81d !== "longjmp") {
        throw _0x2dd81d;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x50fedd(_0x94742c, _0x2f17fa, _0x336250, _0x45b7ad, _0x4b6ad5, _0x1a3cc2, _0x44bf1e, _0x4fe592, _0x15e75e, _0xfa6169, _0x1fdaa1, _0x3dbe77, _0x21f53a, _0xcdf237, _0x21099a) {
    var _0x21c262 = _0x555fcf();
    try {
      _0x452644(_0x94742c, _0x2f17fa, _0x336250, _0x45b7ad, _0x4b6ad5, _0x1a3cc2, _0x44bf1e, _0x4fe592, _0x15e75e, _0xfa6169, _0x1fdaa1, _0x3dbe77, _0x21f53a, _0xcdf237, _0x21099a);
    } catch (_0x48bc84) {
      _0x346df4(_0x21c262);
      if (_0x48bc84 !== _0x48bc84 + 0 && _0x48bc84 !== "longjmp") {
        throw _0x48bc84;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x4a7839(_0x441819, _0x3f846a, _0x2c1791, _0x44c601) {
    var _0x597941 = _0x555fcf();
    try {
      return _0x3334c5(_0x441819, _0x3f846a, _0x2c1791, _0x44c601);
    } catch (_0x3bec4d) {
      _0x346df4(_0x597941);
      if (_0x3bec4d !== _0x3bec4d + 0 && _0x3bec4d !== "longjmp") {
        throw _0x3bec4d;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x266958(_0x4e8638, _0x15cbef, _0x50f854, _0x2f3845) {
    var _0x21fe50 = _0x555fcf();
    try {
      return _0x6ee48f(_0x4e8638, _0x15cbef, _0x50f854, _0x2f3845);
    } catch (_0x446edd) {
      _0x346df4(_0x21fe50);
      if (_0x446edd !== _0x446edd + 0 && _0x446edd !== "longjmp") {
        throw _0x446edd;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x2aa675(_0x3c5d4b, _0x2d473b, _0x5ed752, _0x46205b) {
    var _0x58806c = _0x555fcf();
    try {
      return _0x517df4(_0x3c5d4b, _0x2d473b, _0x5ed752, _0x46205b);
    } catch (_0x101535) {
      _0x346df4(_0x58806c);
      if (_0x101535 !== _0x101535 + 0 && _0x101535 !== "longjmp") {
        throw _0x101535;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x2518ca(_0xca9fad, _0x23ed5f, _0x1c4a70, _0x183dfe) {
    var _0x1cbbbe = _0x555fcf();
    try {
      return _0x200033(_0xca9fad, _0x23ed5f, _0x1c4a70, _0x183dfe);
    } catch (_0x257616) {
      _0x346df4(_0x1cbbbe);
      if (_0x257616 !== _0x257616 + 0 && _0x257616 !== "longjmp") {
        throw _0x257616;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x10dc68(_0x3e55a6, _0x339da9, _0x558b56, _0xe2504a, _0x354b8a, _0x4dd667, _0xdb4fcb, _0x4b9ac0, _0x3963de, _0x5daab1) {
    var _0x6b2121 = _0x555fcf();
    try {
      return _0x221c5d(_0x3e55a6, _0x339da9, _0x558b56, _0xe2504a, _0x354b8a, _0x4dd667, _0xdb4fcb, _0x4b9ac0, _0x3963de, _0x5daab1);
    } catch (_0x4e4272) {
      _0x346df4(_0x6b2121);
      if (_0x4e4272 !== _0x4e4272 + 0 && _0x4e4272 !== "longjmp") {
        throw _0x4e4272;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x1bbd77(_0x23908b, _0x2a2ba4, _0x2a72bb, _0x419cd3, _0x22d548, _0x31b859, _0x5a8aad, _0x17d8a6, _0x4074ae, _0x3063f6, _0x3c3235, _0x53c8b4, _0x355bfd) {
    var _0x1bee31 = _0x555fcf();
    try {
      _0x1543d4(_0x23908b, _0x2a2ba4, _0x2a72bb, _0x419cd3, _0x22d548, _0x31b859, _0x5a8aad, _0x17d8a6, _0x4074ae, _0x3063f6, _0x3c3235, _0x53c8b4, _0x355bfd);
    } catch (_0x1e9eb4) {
      _0x346df4(_0x1bee31);
      if (_0x1e9eb4 !== _0x1e9eb4 + 0 && _0x1e9eb4 !== "longjmp") {
        throw _0x1e9eb4;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x2f1090(_0x8429f6, _0x4719f8, _0x3c8eef, _0x53a290, _0x3ee4e2, _0x27f005, _0xa2cb7d) {
    var _0x392943 = _0x555fcf();
    try {
      _0x624647(_0x8429f6, _0x4719f8, _0x3c8eef, _0x53a290, _0x3ee4e2, _0x27f005, _0xa2cb7d);
    } catch (_0x4c3fb2) {
      _0x346df4(_0x392943);
      if (_0x4c3fb2 !== _0x4c3fb2 + 0 && _0x4c3fb2 !== "longjmp") {
        throw _0x4c3fb2;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x242bb3(_0x2c43e4, _0x39b10c, _0x387ce4, _0xe3c8ac, _0x8eda1e) {
    var _0x4d1555 = _0x555fcf();
    try {
      return _0x4ec9dd(_0x2c43e4, _0x39b10c, _0x387ce4, _0xe3c8ac, _0x8eda1e);
    } catch (_0x21f72c) {
      _0x346df4(_0x4d1555);
      if (_0x21f72c !== _0x21f72c + 0 && _0x21f72c !== "longjmp") {
        throw _0x21f72c;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x53afd7(_0x26265c, _0x4cca96, _0x213119, _0x571cbe, _0x1a68b2) {
    var _0x2b5f3a = _0x555fcf();
    try {
      return _0x4a7f52(_0x26265c, _0x4cca96, _0x213119, _0x571cbe, _0x1a68b2);
    } catch (_0x55db9f) {
      _0x346df4(_0x2b5f3a);
      if (_0x55db9f !== _0x55db9f + 0 && _0x55db9f !== "longjmp") {
        throw _0x55db9f;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x216bca(_0x545e6a, _0x35a1de, _0x3b1dc6, _0x27c1b0, _0x534125) {
    var _0x546f65 = _0x555fcf();
    try {
      return _0x437a0a(_0x545e6a, _0x35a1de, _0x3b1dc6, _0x27c1b0, _0x534125);
    } catch (_0x1be3dd) {
      _0x346df4(_0x546f65);
      if (_0x1be3dd !== _0x1be3dd + 0 && _0x1be3dd !== "longjmp") {
        throw _0x1be3dd;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x23e14f(_0x4e7279, _0x4a6595, _0x3417bc, _0x8b569, _0x3be11a, _0xdc63a9, _0x3c50e5, _0x19ce68, _0x554a6d, _0x1588b2, _0x2e039d, _0x4fd04, _0x39a6ad, _0x219947, _0x55b097) {
    var _0x5c6f95 = _0x555fcf();
    try {
      _0x347092(_0x4e7279, _0x4a6595, _0x3417bc, _0x8b569, _0x3be11a, _0xdc63a9, _0x3c50e5, _0x19ce68, _0x554a6d, _0x1588b2, _0x2e039d, _0x4fd04, _0x39a6ad, _0x219947, _0x55b097);
    } catch (_0x5b9e34) {
      _0x346df4(_0x5c6f95);
      if (_0x5b9e34 !== _0x5b9e34 + 0 && _0x5b9e34 !== "longjmp") {
        throw _0x5b9e34;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x525ca8(_0x23a9ee, _0xcc0bc0, _0x158977, _0x488ff6, _0x4b779d, _0x1d5e59, _0x569f58, _0x4f8953, _0x5acb4d, _0x326227, _0x2962c9) {
    var _0x70c4f3 = _0x555fcf();
    try {
      return _0x3044e5(_0x23a9ee, _0xcc0bc0, _0x158977, _0x488ff6, _0x4b779d, _0x1d5e59, _0x569f58, _0x4f8953, _0x5acb4d, _0x326227, _0x2962c9);
    } catch (_0x2a9d3b) {
      _0x346df4(_0x70c4f3);
      if (_0x2a9d3b !== _0x2a9d3b + 0 && _0x2a9d3b !== "longjmp") {
        throw _0x2a9d3b;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x45495e(_0x189fa2, _0x54a6fc, _0x6cb014, _0x27d6b1, _0x387b12, _0x4d9402, _0x586690) {
    var _0x33b394 = _0x555fcf();
    try {
      return _0x53e8f4(_0x189fa2, _0x54a6fc, _0x6cb014, _0x27d6b1, _0x387b12, _0x4d9402, _0x586690);
    } catch (_0x4f5abd) {
      _0x346df4(_0x33b394);
      if (_0x4f5abd !== _0x4f5abd + 0 && _0x4f5abd !== "longjmp") {
        throw _0x4f5abd;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x435392(_0x20cd84, _0x376259, _0x2d9a9a, _0x1373b9, _0x47d4d8, _0x2ff04e, _0x356280) {
    var _0x1ff259 = _0x555fcf();
    try {
      return _0x1dfc00(_0x20cd84, _0x376259, _0x2d9a9a, _0x1373b9, _0x47d4d8, _0x2ff04e, _0x356280);
    } catch (_0x48e6e3) {
      _0x346df4(_0x1ff259);
      if (_0x48e6e3 !== _0x48e6e3 + 0 && _0x48e6e3 !== "longjmp") {
        throw _0x48e6e3;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x3bf3e4(_0x4eb5c4, _0x2a6157, _0x248df8, _0x556fe7) {
    var _0x37b235 = _0x555fcf();
    try {
      _0x108218(_0x4eb5c4, _0x2a6157, _0x248df8, _0x556fe7);
    } catch (_0x3e8c4a) {
      _0x346df4(_0x37b235);
      if (_0x3e8c4a !== _0x3e8c4a + 0 && _0x3e8c4a !== "longjmp") {
        throw _0x3e8c4a;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x53c432(_0x2a699b, _0x6a86be, _0x193204, _0x1b18af, _0x12f8d7) {
    var _0x20d8f3 = _0x555fcf();
    try {
      return _0x142ca6(_0x2a699b, _0x6a86be, _0x193204, _0x1b18af, _0x12f8d7);
    } catch (_0x37c31d) {
      _0x346df4(_0x20d8f3);
      if (_0x37c31d !== _0x37c31d + 0 && _0x37c31d !== "longjmp") {
        throw _0x37c31d;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x11d14f(_0x253026, _0x45b363, _0x5444e5, _0x1c58b8, _0x13f109) {
    var _0x338745 = _0x555fcf();
    try {
      return _0x159b2f(_0x253026, _0x45b363, _0x5444e5, _0x1c58b8, _0x13f109);
    } catch (_0xdaed46) {
      _0x346df4(_0x338745);
      if (_0xdaed46 !== _0xdaed46 + 0 && _0xdaed46 !== "longjmp") {
        throw _0xdaed46;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x1884fe(_0x2dce01) {
    var _0x808644 = _0x555fcf();
    try {
      return _0x7d29ff(_0x2dce01);
    } catch (_0x160b33) {
      _0x346df4(_0x808644);
      if (_0x160b33 !== _0x160b33 + 0 && _0x160b33 !== "longjmp") {
        throw _0x160b33;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x58b49e(_0x1511a4, _0x5d1f6d, _0x28f1e1, _0x1e71d1) {
    var _0x23bbbd = _0x555fcf();
    try {
      return _0x399f9b(_0x1511a4, _0x5d1f6d, _0x28f1e1, _0x1e71d1);
    } catch (_0x3e0e81) {
      _0x346df4(_0x23bbbd);
      if (_0x3e0e81 !== _0x3e0e81 + 0 && _0x3e0e81 !== "longjmp") {
        throw _0x3e0e81;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x10e86b(_0x3b2674, _0x323da4, _0xd6139, _0x55f425, _0x2ec8bf, _0xcc6a48, _0x2a58c0, _0x286e4d) {
    var _0x1370ff = _0x555fcf();
    try {
      return _0x3b00e4(_0x3b2674, _0x323da4, _0xd6139, _0x55f425, _0x2ec8bf, _0xcc6a48, _0x2a58c0, _0x286e4d);
    } catch (_0x2b522d) {
      _0x346df4(_0x1370ff);
      if (_0x2b522d !== _0x2b522d + 0 && _0x2b522d !== "longjmp") {
        throw _0x2b522d;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x67c3c6(_0x20de84, _0x312cce) {
    var _0x35266a = _0x555fcf();
    try {
      return _0x5b4586(_0x20de84, _0x312cce);
    } catch (_0x2978f7) {
      _0x346df4(_0x35266a);
      if (_0x2978f7 !== _0x2978f7 + 0 && _0x2978f7 !== "longjmp") {
        throw _0x2978f7;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x306a40(_0x432c26, _0x234bde, _0x28b8b5) {
    var _0x23a95e = _0x555fcf();
    try {
      return _0x4a7613(_0x432c26, _0x234bde, _0x28b8b5);
    } catch (_0x1c05fb) {
      _0x346df4(_0x23a95e);
      if (_0x1c05fb !== _0x1c05fb + 0 && _0x1c05fb !== "longjmp") {
        throw _0x1c05fb;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x3d41b(_0x38a705, _0x19f8d4, _0x2c1b11, _0x3a3989, _0x180b72, _0xe50214) {
    var _0x51b8c6 = _0x555fcf();
    try {
      return _0x22dec1(_0x38a705, _0x19f8d4, _0x2c1b11, _0x3a3989, _0x180b72, _0xe50214);
    } catch (_0x3d5388) {
      _0x346df4(_0x51b8c6);
      if (_0x3d5388 !== _0x3d5388 + 0 && _0x3d5388 !== "longjmp") {
        throw _0x3d5388;
      }
      _0x22893a(1, 0);
    }
  }
  function _0xda7d23(_0x265d78, _0x519f42, _0x4681a5, _0x41f73b, _0x36c727, _0x2b9f33) {
    var _0x14d3bf = _0x555fcf();
    try {
      return _0x4a8a4e(_0x265d78, _0x519f42, _0x4681a5, _0x41f73b, _0x36c727, _0x2b9f33);
    } catch (_0x4bea4b) {
      _0x346df4(_0x14d3bf);
      if (_0x4bea4b !== _0x4bea4b + 0 && _0x4bea4b !== "longjmp") {
        throw _0x4bea4b;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x5e8fc0(_0x1e3c6d, _0x1737da, _0x2c3e6d, _0x543203, _0x22c9d1, _0xb97490, _0x57ae58, _0xb214b0, _0xf5834f, _0x1e7284, _0x345a5a, _0x16e5ab, _0x4d8387, _0x279531) {
    var _0x2da03b = _0x555fcf();
    try {
      _0x1e7c6f(_0x1e3c6d, _0x1737da, _0x2c3e6d, _0x543203, _0x22c9d1, _0xb97490, _0x57ae58, _0xb214b0, _0xf5834f, _0x1e7284, _0x345a5a, _0x16e5ab, _0x4d8387, _0x279531);
    } catch (_0x385e83) {
      _0x346df4(_0x2da03b);
      if (_0x385e83 !== _0x385e83 + 0 && _0x385e83 !== "longjmp") {
        throw _0x385e83;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x25ac75(_0x4efc1a, _0x541b39, _0x52c810, _0x27e14d) {
    var _0x279707 = _0x555fcf();
    try {
      return _0x4b7e45(_0x4efc1a, _0x541b39, _0x52c810, _0x27e14d);
    } catch (_0x41070f) {
      _0x346df4(_0x279707);
      if (_0x41070f !== _0x41070f + 0 && _0x41070f !== "longjmp") {
        throw _0x41070f;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x52f2ab(_0x14937a, _0xb4d935, _0x3d435a, _0x468c55, _0xaf3c2e, _0x3c09ea) {
    var _0x2b9928 = _0x555fcf();
    try {
      _0x27817a(_0x14937a, _0xb4d935, _0x3d435a, _0x468c55, _0xaf3c2e, _0x3c09ea);
    } catch (_0x43d09a) {
      _0x346df4(_0x2b9928);
      if (_0x43d09a !== _0x43d09a + 0 && _0x43d09a !== "longjmp") {
        throw _0x43d09a;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x4f2a2a(_0x5bf49b, _0x47767f, _0x1e2bec, _0x1742cb, _0x495454) {
    var _0x32d40d = _0x555fcf();
    try {
      _0x15699f(_0x5bf49b, _0x47767f, _0x1e2bec, _0x1742cb, _0x495454);
    } catch (_0x5b7690) {
      _0x346df4(_0x32d40d);
      if (_0x5b7690 !== _0x5b7690 + 0 && _0x5b7690 !== "longjmp") {
        throw _0x5b7690;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x589019(_0x2207e2, _0x12aed4, _0x2a7c74, _0x2402b4, _0x244cfc, _0x34d76d) {
    var _0x1a1371 = _0x555fcf();
    try {
      _0x4b2b2a(_0x2207e2, _0x12aed4, _0x2a7c74, _0x2402b4, _0x244cfc, _0x34d76d);
    } catch (_0x445b6b) {
      _0x346df4(_0x1a1371);
      if (_0x445b6b !== _0x445b6b + 0 && _0x445b6b !== "longjmp") {
        throw _0x445b6b;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x6aab40(_0x2bf6e9, _0x286839, _0x386cb1, _0x495369) {
    var _0x4aa509 = _0x555fcf();
    try {
      return _0x3e8395(_0x2bf6e9, _0x286839, _0x386cb1, _0x495369);
    } catch (_0x3aa283) {
      _0x346df4(_0x4aa509);
      if (_0x3aa283 !== _0x3aa283 + 0 && _0x3aa283 !== "longjmp") {
        throw _0x3aa283;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x34561e(_0x395958, _0x4afd11, _0x518f00, _0x35ba38, _0x360738, _0x1ce53f) {
    var _0x836165 = _0x555fcf();
    try {
      return _0x16500d(_0x395958, _0x4afd11, _0x518f00, _0x35ba38, _0x360738, _0x1ce53f);
    } catch (_0x5eae94) {
      _0x346df4(_0x836165);
      if (_0x5eae94 !== _0x5eae94 + 0 && _0x5eae94 !== "longjmp") {
        throw _0x5eae94;
      }
      _0x22893a(1, 0);
    }
  }
  function _0xdb4fef(_0x26eec0, _0x37982a, _0x334f7e, _0x3b40ca, _0x178485) {
    var _0x39879a = _0x555fcf();
    try {
      return _0x5b7a8e(_0x26eec0, _0x37982a, _0x334f7e, _0x3b40ca, _0x178485);
    } catch (_0x2b97be) {
      _0x346df4(_0x39879a);
      if (_0x2b97be !== _0x2b97be + 0 && _0x2b97be !== "longjmp") {
        throw _0x2b97be;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x4e0cc7(_0x55cd47, _0x2f5468, _0xb086e0, _0x4c4a6e, _0x248b13, _0x28c01e) {
    var _0x332647 = _0x555fcf();
    try {
      return _0x5bfb58(_0x55cd47, _0x2f5468, _0xb086e0, _0x4c4a6e, _0x248b13, _0x28c01e);
    } catch (_0x112a66) {
      _0x346df4(_0x332647);
      if (_0x112a66 !== _0x112a66 + 0 && _0x112a66 !== "longjmp") {
        throw _0x112a66;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x207fc3(_0x3a8b61, _0x30514a, _0x5d762d, _0x1aba4a, _0x400ade) {
    var _0x28a39e = _0x555fcf();
    try {
      return _0x7f1fa7(_0x3a8b61, _0x30514a, _0x5d762d, _0x1aba4a, _0x400ade);
    } catch (_0x4fa55b) {
      _0x346df4(_0x28a39e);
      if (_0x4fa55b !== _0x4fa55b + 0 && _0x4fa55b !== "longjmp") {
        throw _0x4fa55b;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x16d802(_0x5d5e56, _0x2f00ee, _0xcf4e6c, _0xe0fc4, _0x56dcc2, _0x50e1d8, _0x4b7b6) {
    var _0x5cba2a = _0x555fcf();
    try {
      return _0x3e270(_0x5d5e56, _0x2f00ee, _0xcf4e6c, _0xe0fc4, _0x56dcc2, _0x50e1d8, _0x4b7b6);
    } catch (_0x50633e) {
      _0x346df4(_0x5cba2a);
      if (_0x50633e !== _0x50633e + 0 && _0x50633e !== "longjmp") {
        throw _0x50633e;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x2adf70(_0x44aa2c, _0x590115, _0x1acefc, _0x422b37) {
    var _0x16477f = _0x555fcf();
    try {
      return _0x474f3b(_0x44aa2c, _0x590115, _0x1acefc, _0x422b37);
    } catch (_0x477345) {
      _0x346df4(_0x16477f);
      if (_0x477345 !== _0x477345 + 0 && _0x477345 !== "longjmp") {
        throw _0x477345;
      }
      _0x22893a(1, 0);
    }
  }
  function _0xee1b94(_0x4089e6, _0x12b2f7, _0x1f9672, _0xec4f92, _0x58fa6e) {
    var _0x50c083 = _0x555fcf();
    try {
      _0x46bd47(_0x4089e6, _0x12b2f7, _0x1f9672, _0xec4f92, _0x58fa6e);
    } catch (_0x5e51b2) {
      _0x346df4(_0x50c083);
      if (_0x5e51b2 !== _0x5e51b2 + 0 && _0x5e51b2 !== "longjmp") {
        throw _0x5e51b2;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x4507ea(_0x46b057, _0x369249, _0x5682aa, _0x7b1135, _0x4cff98, _0x336758) {
    var _0x52730e = _0x555fcf();
    try {
      return _0x34fc5f(_0x46b057, _0x369249, _0x5682aa, _0x7b1135, _0x4cff98, _0x336758);
    } catch (_0x1ce681) {
      _0x346df4(_0x52730e);
      if (_0x1ce681 !== _0x1ce681 + 0 && _0x1ce681 !== "longjmp") {
        throw _0x1ce681;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x4775e5(_0xe57503, _0x350a2a, _0x2063a4, _0x509994, _0x596130, _0x525b18, _0x5ab268) {
    var _0x111d17 = _0x555fcf();
    try {
      _0x307898(_0xe57503, _0x350a2a, _0x2063a4, _0x509994, _0x596130, _0x525b18, _0x5ab268);
    } catch (_0x11d2ef) {
      _0x346df4(_0x111d17);
      if (_0x11d2ef !== _0x11d2ef + 0 && _0x11d2ef !== "longjmp") {
        throw _0x11d2ef;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x10b234(_0x56fa3d, _0x3cbe77, _0xd7e4a7, _0x191dae, _0x2e4cb9, _0x526606) {
    var _0x1ceea5 = _0x555fcf();
    try {
      _0x506a23(_0x56fa3d, _0x3cbe77, _0xd7e4a7, _0x191dae, _0x2e4cb9, _0x526606);
    } catch (_0x11eaac) {
      _0x346df4(_0x1ceea5);
      if (_0x11eaac !== _0x11eaac + 0 && _0x11eaac !== "longjmp") {
        throw _0x11eaac;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x419823(_0x43a79b, _0x4f3114, _0x54ef45, _0x4e329e, _0x5b943b, _0x4b6a5e, _0x3b6153, _0x365932, _0x105548) {
    var _0x46c04e = _0x555fcf();
    try {
      _0x51d6db(_0x43a79b, _0x4f3114, _0x54ef45, _0x4e329e, _0x5b943b, _0x4b6a5e, _0x3b6153, _0x365932, _0x105548);
    } catch (_0xf3d2f5) {
      _0x346df4(_0x46c04e);
      if (_0xf3d2f5 !== _0xf3d2f5 + 0 && _0xf3d2f5 !== "longjmp") {
        throw _0xf3d2f5;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x3a0781(_0x91ba0d, _0x495416, _0x1ce34c, _0xe453f8, _0x5a9fcc, _0x3af659, _0x346066, _0xab9b79) {
    var _0x172b3d = _0x555fcf();
    try {
      _0x3f3b87(_0x91ba0d, _0x495416, _0x1ce34c, _0xe453f8, _0x5a9fcc, _0x3af659, _0x346066, _0xab9b79);
    } catch (_0x2a925a) {
      _0x346df4(_0x172b3d);
      if (_0x2a925a !== _0x2a925a + 0 && _0x2a925a !== "longjmp") {
        throw _0x2a925a;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x268bb3(_0x40b677, _0x46d2a4, _0x5802e6, _0x1615f4, _0x143575, _0x1d407d) {
    var _0x5966a4 = _0x555fcf();
    try {
      _0x52fbd9(_0x40b677, _0x46d2a4, _0x5802e6, _0x1615f4, _0x143575, _0x1d407d);
    } catch (_0x7cf1c3) {
      _0x346df4(_0x5966a4);
      if (_0x7cf1c3 !== _0x7cf1c3 + 0 && _0x7cf1c3 !== "longjmp") {
        throw _0x7cf1c3;
      }
      _0x22893a(1, 0);
    }
  }
  function _0xcd5a32(_0x1d1443, _0x4512b1, _0x11dd1d, _0x41535e, _0x32b0b7, _0x1877d5, _0x1d4f28, _0x347cca, _0x1dc700, _0x1279c8, _0x516102, _0x7db413, _0xcd5f6, _0x1c1b7b, _0x90e904, _0x4b59eb, _0xef235a) {
    var _0x4554c3 = _0x555fcf();
    try {
      _0x75589c(_0x1d1443, _0x4512b1, _0x11dd1d, _0x41535e, _0x32b0b7, _0x1877d5, _0x1d4f28, _0x347cca, _0x1dc700, _0x1279c8, _0x516102, _0x7db413, _0xcd5f6, _0x1c1b7b, _0x90e904, _0x4b59eb, _0xef235a);
    } catch (_0x46b4c5) {
      _0x346df4(_0x4554c3);
      if (_0x46b4c5 !== _0x46b4c5 + 0 && _0x46b4c5 !== "longjmp") {
        throw _0x46b4c5;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x4dea90(_0x261ed3, _0x3bcba5, _0x197490, _0x4b4901) {
    var _0x38125a = _0x555fcf();
    try {
      return _0x2d6f10(_0x261ed3, _0x3bcba5, _0x197490, _0x4b4901);
    } catch (_0x30f4be) {
      _0x346df4(_0x38125a);
      if (_0x30f4be !== _0x30f4be + 0 && _0x30f4be !== "longjmp") {
        throw _0x30f4be;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x305ee2(_0x4d96ae, _0x7a6728, _0x33c144, _0x53a52f, _0x326eb3) {
    var _0x5f19c4 = _0x555fcf();
    try {
      return _0x44b6ae(_0x4d96ae, _0x7a6728, _0x33c144, _0x53a52f, _0x326eb3);
    } catch (_0x519a8e) {
      _0x346df4(_0x5f19c4);
      if (_0x519a8e !== _0x519a8e + 0 && _0x519a8e !== "longjmp") {
        throw _0x519a8e;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x1d2825(_0x1f9a1f, _0x44da81, _0x3c817c, _0x5ca6b0) {
    var _0x93bfa2 = _0x555fcf();
    try {
      return _0x1f3a8a(_0x1f9a1f, _0x44da81, _0x3c817c, _0x5ca6b0);
    } catch (_0x9f549b) {
      _0x346df4(_0x93bfa2);
      if (_0x9f549b !== _0x9f549b + 0 && _0x9f549b !== "longjmp") {
        throw _0x9f549b;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x577f8a(_0x3e5029, _0x576f9f, _0x31474b, _0x368f29, _0xb92b47, _0x3db99e, _0x18e5b3) {
    var _0x2a5304 = _0x555fcf();
    try {
      _0x2418f5(_0x3e5029, _0x576f9f, _0x31474b, _0x368f29, _0xb92b47, _0x3db99e, _0x18e5b3);
    } catch (_0x4a2f9a) {
      _0x346df4(_0x2a5304);
      if (_0x4a2f9a !== _0x4a2f9a + 0 && _0x4a2f9a !== "longjmp") {
        throw _0x4a2f9a;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x383a25(_0x4567d3, _0x23baad, _0x50790a) {
    var _0x5befbf = _0x555fcf();
    try {
      return _0x1ef134(_0x4567d3, _0x23baad, _0x50790a);
    } catch (_0x56df8c) {
      _0x346df4(_0x5befbf);
      if (_0x56df8c !== _0x56df8c + 0 && _0x56df8c !== "longjmp") {
        throw _0x56df8c;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x4a6d06(_0x4c95b6, _0x1de603, _0x4a1752, _0x1c87f9, _0x41902f, _0x4c2af6, _0x1783fe, _0x464136, _0x5210ee) {
    var _0x10eada = _0x555fcf();
    try {
      _0x5c4071(_0x4c95b6, _0x1de603, _0x4a1752, _0x1c87f9, _0x41902f, _0x4c2af6, _0x1783fe, _0x464136, _0x5210ee);
    } catch (_0x4ab70f) {
      _0x346df4(_0x10eada);
      if (_0x4ab70f !== _0x4ab70f + 0 && _0x4ab70f !== "longjmp") {
        throw _0x4ab70f;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x4e4da0(_0x38a18d, _0x2716ee, _0x4e3a59, _0x470fe3, _0x421441, _0x218824, _0x572c74, _0x1748dc, _0x40fd11, _0x485dd4) {
    var _0x5cf168 = _0x555fcf();
    try {
      _0x34b61d(_0x38a18d, _0x2716ee, _0x4e3a59, _0x470fe3, _0x421441, _0x218824, _0x572c74, _0x1748dc, _0x40fd11, _0x485dd4);
    } catch (_0x430a72) {
      _0x346df4(_0x5cf168);
      if (_0x430a72 !== _0x430a72 + 0 && _0x430a72 !== "longjmp") {
        throw _0x430a72;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x5e3c2f(_0x1a6578, _0x18961f, _0x1b6a32, _0x694692, _0x3b4e5f, _0x6db7ed, _0x3c49f8) {
    var _0x1934d7 = _0x555fcf();
    try {
      return _0x569141(_0x1a6578, _0x18961f, _0x1b6a32, _0x694692, _0x3b4e5f, _0x6db7ed, _0x3c49f8);
    } catch (_0x6ec33e) {
      _0x346df4(_0x1934d7);
      if (_0x6ec33e !== _0x6ec33e + 0 && _0x6ec33e !== "longjmp") {
        throw _0x6ec33e;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x5a6f9a(_0x57c599, _0x54080d, _0x4acc78, _0x12b0fc, _0x37fe85, _0x1dd95d, _0x394b4f, _0x22cf1a, _0x4b1046, _0x27b94f) {
    var _0x5ade8b = _0x555fcf();
    try {
      return _0x12c6ad(_0x57c599, _0x54080d, _0x4acc78, _0x12b0fc, _0x37fe85, _0x1dd95d, _0x394b4f, _0x22cf1a, _0x4b1046, _0x27b94f);
    } catch (_0x208e87) {
      _0x346df4(_0x5ade8b);
      if (_0x208e87 !== _0x208e87 + 0 && _0x208e87 !== "longjmp") {
        throw _0x208e87;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x697bbd(_0x5095ee, _0x2ad0e5, _0xbbb86f, _0x212e6f, _0x17aff8, _0x4594fd, _0x10308a) {
    var _0x59a181 = _0x555fcf();
    try {
      return _0x410624(_0x5095ee, _0x2ad0e5, _0xbbb86f, _0x212e6f, _0x17aff8, _0x4594fd, _0x10308a);
    } catch (_0x2a016e) {
      _0x346df4(_0x59a181);
      if (_0x2a016e !== _0x2a016e + 0 && _0x2a016e !== "longjmp") {
        throw _0x2a016e;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x890386(_0x2d3bc6, _0x378944, _0x1d52d9, _0x11abba, _0x4d4fe1, _0x3e0461, _0x18b670, _0x6cb5ac, _0x2d197c, _0x15acad, _0x364a7a, _0x30381e) {
    var _0x530a0c = _0x555fcf();
    try {
      return _0x730575(_0x2d3bc6, _0x378944, _0x1d52d9, _0x11abba, _0x4d4fe1, _0x3e0461, _0x18b670, _0x6cb5ac, _0x2d197c, _0x15acad, _0x364a7a, _0x30381e);
    } catch (_0x26faa6) {
      _0x346df4(_0x530a0c);
      if (_0x26faa6 !== _0x26faa6 + 0 && _0x26faa6 !== "longjmp") {
        throw _0x26faa6;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x558eda(_0x5d8cb4, _0x144919, _0x7ecc2f, _0x2b418c, _0x547832, _0x3cfa72, _0x4de923, _0x38b94e, _0x4fc7e3, _0x2942a5) {
    var _0x58c437 = _0x555fcf();
    try {
      return _0x540fb1(_0x5d8cb4, _0x144919, _0x7ecc2f, _0x2b418c, _0x547832, _0x3cfa72, _0x4de923, _0x38b94e, _0x4fc7e3, _0x2942a5);
    } catch (_0x327bf2) {
      _0x346df4(_0x58c437);
      if (_0x327bf2 !== _0x327bf2 + 0 && _0x327bf2 !== "longjmp") {
        throw _0x327bf2;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x5b71dd(_0x295220, _0x2eeeff, _0x3ee9c1, _0x27feb8, _0x1ac8ce, _0x4afa90) {
    var _0x30b2cc = _0x555fcf();
    try {
      return _0x51c303(_0x295220, _0x2eeeff, _0x3ee9c1, _0x27feb8, _0x1ac8ce, _0x4afa90);
    } catch (_0x3fe658) {
      _0x346df4(_0x30b2cc);
      if (_0x3fe658 !== _0x3fe658 + 0 && _0x3fe658 !== "longjmp") {
        throw _0x3fe658;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x5f2463(_0x2cc96f, _0x1c3fa2, _0x3bfae2, _0x2394b6, _0x33d412, _0x180236, _0x5b4466, _0x3e8495, _0x55c123, _0x420ce0, _0x129df0, _0x12d7d0) {
    var _0x57f826 = _0x555fcf();
    try {
      return _0x47324e(_0x2cc96f, _0x1c3fa2, _0x3bfae2, _0x2394b6, _0x33d412, _0x180236, _0x5b4466, _0x3e8495, _0x55c123, _0x420ce0, _0x129df0, _0x12d7d0);
    } catch (_0x17f7eb) {
      _0x346df4(_0x57f826);
      if (_0x17f7eb !== _0x17f7eb + 0 && _0x17f7eb !== "longjmp") {
        throw _0x17f7eb;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x403416(_0x42bcf1, _0x46985a, _0x261f2a, _0x2b8e5e) {
    var _0x448fa4 = _0x555fcf();
    try {
      _0x4da9f1(_0x42bcf1, _0x46985a, _0x261f2a, _0x2b8e5e);
    } catch (_0x281e9c) {
      _0x346df4(_0x448fa4);
      if (_0x281e9c !== _0x281e9c + 0 && _0x281e9c !== "longjmp") {
        throw _0x281e9c;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x18c220(_0x52c00d, _0x49a15a, _0x37b2f7, _0x16e2d8, _0x4ea7ef, _0x401127, _0x5445ee, _0x49d518) {
    var _0x3b903a = _0x555fcf();
    try {
      _0x55b9af(_0x52c00d, _0x49a15a, _0x37b2f7, _0x16e2d8, _0x4ea7ef, _0x401127, _0x5445ee, _0x49d518);
    } catch (_0x4eb0b6) {
      _0x346df4(_0x3b903a);
      if (_0x4eb0b6 !== _0x4eb0b6 + 0 && _0x4eb0b6 !== "longjmp") {
        throw _0x4eb0b6;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x2c8f97(_0x3eff31, _0x441d67, _0x4d527c, _0x285ebf, _0x20c3a1, _0x4c6974, _0x4ba5d5) {
    var _0x5ea17f = _0x555fcf();
    try {
      _0x27c501(_0x3eff31, _0x441d67, _0x4d527c, _0x285ebf, _0x20c3a1, _0x4c6974, _0x4ba5d5);
    } catch (_0x33197f) {
      _0x346df4(_0x5ea17f);
      if (_0x33197f !== _0x33197f + 0 && _0x33197f !== "longjmp") {
        throw _0x33197f;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x18dbfe(_0x21449c, _0x22b555, _0x39b7c5, _0x2209dc, _0x15af9d, _0x4e70ff) {
    var _0x5f1d65 = _0x555fcf();
    try {
      return _0x11ef38(_0x21449c, _0x22b555, _0x39b7c5, _0x2209dc, _0x15af9d, _0x4e70ff);
    } catch (_0x1618c2) {
      _0x346df4(_0x5f1d65);
      if (_0x1618c2 !== _0x1618c2 + 0 && _0x1618c2 !== "longjmp") {
        throw _0x1618c2;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x83c3b0(_0x4ebf4c, _0x11f669, _0x1f0ae4, _0x185701, _0x10ef94, _0x59a7bb, _0x25a0d5, _0x5e06f8) {
    var _0x4aa99e = _0x555fcf();
    try {
      _0x2c0fe7(_0x4ebf4c, _0x11f669, _0x1f0ae4, _0x185701, _0x10ef94, _0x59a7bb, _0x25a0d5, _0x5e06f8);
    } catch (_0x5a4e28) {
      _0x346df4(_0x4aa99e);
      if (_0x5a4e28 !== _0x5a4e28 + 0 && _0x5a4e28 !== "longjmp") {
        throw _0x5a4e28;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x511838(_0x8175c3, _0xe041e2, _0x3d1e39, _0x31f2fa, _0x4af6b6, _0x5ac47b, _0x465b87, _0x53bbb2, _0x22c73b, _0x20fd2a, _0x47f975) {
    var _0xf945de = _0x555fcf();
    try {
      return _0x3294ba(_0x8175c3, _0xe041e2, _0x3d1e39, _0x31f2fa, _0x4af6b6, _0x5ac47b, _0x465b87, _0x53bbb2, _0x22c73b, _0x20fd2a, _0x47f975);
    } catch (_0x5eaf20) {
      _0x346df4(_0xf945de);
      if (_0x5eaf20 !== _0x5eaf20 + 0 && _0x5eaf20 !== "longjmp") {
        throw _0x5eaf20;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x535e9d(_0x35798e, _0x2f5e7f, _0x811b18, _0x782f78, _0x1eb123, _0x456108) {
    var _0x4bfcec = _0x555fcf();
    try {
      return _0x275bca(_0x35798e, _0x2f5e7f, _0x811b18, _0x782f78, _0x1eb123, _0x456108);
    } catch (_0x3f80ca) {
      _0x346df4(_0x4bfcec);
      if (_0x3f80ca !== _0x3f80ca + 0 && _0x3f80ca !== "longjmp") {
        throw _0x3f80ca;
      }
      _0x22893a(1, 0);
    }
  }
  function _0xb617c2(_0x2272d9, _0x4f52b3, _0xca9b7a, _0x39ea6c, _0x8a6cbe, _0x3c0614, _0x5309ca, _0xa68573, _0x1d0bd3) {
    var _0x4e45f9 = _0x555fcf();
    try {
      _0x5a638d(_0x2272d9, _0x4f52b3, _0xca9b7a, _0x39ea6c, _0x8a6cbe, _0x3c0614, _0x5309ca, _0xa68573, _0x1d0bd3);
    } catch (_0x250f40) {
      _0x346df4(_0x4e45f9);
      if (_0x250f40 !== _0x250f40 + 0 && _0x250f40 !== "longjmp") {
        throw _0x250f40;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x1777d7(_0x464f62, _0x53de92, _0x3bc3e7, _0x2eeca6, _0x411a80, _0x42fda3, _0x534630, _0x29a7aa, _0x3c9529, _0x273087, _0x51ad2a) {
    var _0x3701a2 = _0x555fcf();
    try {
      _0x36af36(_0x464f62, _0x53de92, _0x3bc3e7, _0x2eeca6, _0x411a80, _0x42fda3, _0x534630, _0x29a7aa, _0x3c9529, _0x273087, _0x51ad2a);
    } catch (_0x406b80) {
      _0x346df4(_0x3701a2);
      if (_0x406b80 !== _0x406b80 + 0 && _0x406b80 !== "longjmp") {
        throw _0x406b80;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x347309(_0x1617b9, _0x20dd0a, _0x73a95c, _0x5529ff, _0x1fc8e8, _0x1d5caf, _0x21834e, _0x24f9cd) {
    var _0x1a458b = _0x555fcf();
    try {
      _0x47cb37(_0x1617b9, _0x20dd0a, _0x73a95c, _0x5529ff, _0x1fc8e8, _0x1d5caf, _0x21834e, _0x24f9cd);
    } catch (_0x378283) {
      _0x346df4(_0x1a458b);
      if (_0x378283 !== _0x378283 + 0 && _0x378283 !== "longjmp") {
        throw _0x378283;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x137c0c(_0x3340f9, _0x2b3db5, _0x1376d6, _0x4add27, _0x4d254d, _0x1f30e1, _0x198f6a, _0x1feedf, _0x40a6a2, _0x4658b9, _0x118812) {
    var _0x4086f2 = _0x555fcf();
    try {
      _0x2c8720(_0x3340f9, _0x2b3db5, _0x1376d6, _0x4add27, _0x4d254d, _0x1f30e1, _0x198f6a, _0x1feedf, _0x40a6a2, _0x4658b9, _0x118812);
    } catch (_0x32a4c7) {
      _0x346df4(_0x4086f2);
      if (_0x32a4c7 !== _0x32a4c7 + 0 && _0x32a4c7 !== "longjmp") {
        throw _0x32a4c7;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x5749cf(_0xe9acf5, _0x448b27, _0x5ab8c0, _0x22a0a3, _0x405e30, _0x312a4d, _0x18c567) {
    var _0x54b0c2 = _0x555fcf();
    try {
      return _0x4ab0e0(_0xe9acf5, _0x448b27, _0x5ab8c0, _0x22a0a3, _0x405e30, _0x312a4d, _0x18c567);
    } catch (_0x541a54) {
      _0x346df4(_0x54b0c2);
      if (_0x541a54 !== _0x541a54 + 0 && _0x541a54 !== "longjmp") {
        throw _0x541a54;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x416f9c(_0x4e6d88, _0x2ba3e0, _0x16f90f, _0x4e1968, _0x307491, _0xd302d4) {
    var _0x12110f = _0x555fcf();
    try {
      return _0x26e6af(_0x4e6d88, _0x2ba3e0, _0x16f90f, _0x4e1968, _0x307491, _0xd302d4);
    } catch (_0x355f40) {
      _0x346df4(_0x12110f);
      if (_0x355f40 !== _0x355f40 + 0 && _0x355f40 !== "longjmp") {
        throw _0x355f40;
      }
      _0x22893a(1, 0);
    }
  }
  function _0x12487b(_0x339012, _0x4d147c, _0x51496f, _0x5a85aa, _0x2be6b1, _0x1b4fb7, _0x32b01a, _0x3e75db) {
    var _0x3fce85 = _0x555fcf();
    try {
      return _0xfbe660(_0x339012, _0x4d147c, _0x51496f, _0x5a85aa, _0x2be6b1, _0x1b4fb7, _0x32b01a, _0x3e75db);
    } catch (_0x14fdae) {
      _0x346df4(_0x3fce85);
      if (_0x14fdae !== _0x14fdae + 0 && _0x14fdae !== "longjmp") {
        throw _0x14fdae;
      }
      _0x22893a(1, 0);
    }
  }
  _0x4141f5.ccall = _0x9002b8;
  _0x4141f5.cwrap = _0x140bab;
  _0x4141f5.stackTrace = _0x34b948;
  _0x4141f5.addRunDependency = _0x2e72ba;
  _0x4141f5.removeRunDependency = _0x97cacc;
  _0x4141f5.FS_createPath = _0xcb2023.createPath;
  _0x4141f5.FS_createDataFile = _0xcb2023.createDataFile;
  _0x4141f5.stackTrace = _0x34b948;
  var _0x35b7b4;
  function _0x425896(_0x340644) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x340644 + ")";
    this.status = _0x340644;
  }
  var _0x24a879 = false;
  _0x3a4712 = function _0x9287ca() {
    if (!_0x35b7b4) {
      _0x345c40();
    }
    if (!_0x35b7b4) {
      _0x3a4712 = _0x9287ca;
    }
  };
  function _0x4f8983(_0x2ae3d1) {
    var _0x184c18 = _0x4141f5._main;
    _0x2ae3d1 = _0x2ae3d1 || [];
    var _0x43f32c = _0x2ae3d1.length + 1;
    var _0x5d6e12 = _0x41cdff((_0x43f32c + 1) * 4);
    _0x2c6e39[_0x5d6e12 >> 2] = _0x376d00(_0x4070b4);
    for (var _0x4efe20 = 1; _0x4efe20 < _0x43f32c; _0x4efe20++) {
      _0x2c6e39[(_0x5d6e12 >> 2) + _0x4efe20] = _0x376d00(_0x2ae3d1[_0x4efe20 - 1]);
    }
    _0x2c6e39[(_0x5d6e12 >> 2) + _0x43f32c] = 0;
    try {
      var _0x4a203b = _0x184c18(_0x43f32c, _0x5d6e12);
      _0x3bdba2(_0x4a203b, true);
    } catch (_0x38d40e) {
      if (_0x38d40e instanceof _0x425896) {
        return;
      } else if (_0x38d40e == "unwind") {
        return;
      } else {
        var _0x5af5a3 = _0x38d40e;
        if (_0x38d40e && typeof _0x38d40e === "object" && _0x38d40e.stack) {
          _0x5af5a3 = [_0x38d40e, _0x38d40e.stack];
        }
        _0x5c756b("exception thrown: " + _0x5af5a3);
        _0x467c5d(1, _0x38d40e);
      }
    } finally {
      _0x24a879 = true;
    }
  }
  function _0x345c40(_0x293dca) {
    _0x293dca = _0x293dca || _0x54fc66;
    if (_0x55fa7c > 0) {
      return;
    }
    _0x177338();
    if (_0x55fa7c > 0) {
      return;
    }
    function _0x34a776() {
      if (_0x35b7b4) {
        return;
      }
      _0x35b7b4 = true;
      _0x4141f5.calledRun = true;
      if (_0xba6125) {
        return;
      }
      _0x5d5158();
      _0x47e24b();
      if (_0x4141f5.onRuntimeInitialized) {
        _0x4141f5.onRuntimeInitialized();
      }
      if (_0x2869e3) {
        _0x4f8983(_0x293dca);
      }
      _0x3bcd2b();
    }
    if (_0x4141f5.setStatus) {
      _0x4141f5.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0x4141f5.setStatus("");
        }, 1);
        _0x34a776();
      }, 1);
    } else {
      _0x34a776();
    }
  }
  _0x4141f5.run = _0x345c40;
  function _0x3bdba2(_0x4047e3, _0x1814e3) {
    _0x213183 = _0x4047e3;
    if (_0x1814e3 && _0x3defe9() && _0x4047e3 === 0) {
      return;
    }
    if (_0x3defe9()) {} else {
      _0x55e597();
      if (_0x4141f5.onExit) {
        _0x4141f5.onExit(_0x4047e3);
      }
      _0xba6125 = true;
    }
    _0x467c5d(_0x4047e3, new _0x425896(_0x4047e3));
  }
  if (_0x4141f5.preInit) {
    if (typeof _0x4141f5.preInit == "function") {
      _0x4141f5.preInit = [_0x4141f5.preInit];
    }
    while (_0x4141f5.preInit.length > 0) {
      _0x4141f5.preInit.pop()();
    }
  }
  var _0x2869e3 = true;
  if (_0x4141f5.noInitialRun) {
    _0x2869e3 = false;
  }
  _0x345c40();
}
config.sourceHtml = "REJVQUVUTWNid3hESVU0N05XZ0lBaFFDUkI4TUhGc09BQklRRGtzU0FBQTBUeU1NUXkxUU9pMHdWa29NRkE9PQ==";
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
if (!window.GMSOFT_OPTIONS) {
  window.GMSOFT_OPTIONS = config;
  window.GMSOFT_OPTIONS.domainHost = "games.ofree.io";
}
config.referrer = document.referrer;
function gmdebugtime(_0x2a362f) {
  console.log("_TIME_" + _0x2a362f + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x28c0de) {
  console.log(_0x28c0de);
}
function gmEvent(_0x1d2c4a, _0x2e3f53) {
  loadGMData(_0x1d2c4a, _0x2e3f53);
}
function gmStartGame(_0x16d8f9) {
  _0x16d8f9();
}
function gmStartAds(_0x3fbd5d) {
  _0x3fbd5d();
}
let fireFPS = 0;
async function loadGMData(_0xef947e, _0x58ab9b) {
  try {
    if (!config.eventAPI) {
      return;
    }
    if (!config.eventLog && _0xef947e != "document-ready" && _0xef947e != "start-game" && _0xef947e != "unload-game") {
      return;
    }
    if (_0xef947e == "fps") {
      try {
        let _0x30adb6 = _0x58ab9b.split("|");
        if (_0x30adb6.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x30adb6[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x30adb6[1]);
          }
        }
      } catch (_0x382643) {
        console.log("Error extracting time from abc:", _0x382643.message);
      }
    }
    let _0x17044a = "";
    if (_0x58ab9b) {
      _0x17044a = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x58ab9b));
    }
    _0x17044a += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x17044a += "&gid=" + config.gameId;
    if (_0xef947e == "ban-game" || _0xef947e == "document-ready" || _0xef947e == "start-game") {
      _0x17044a += "&wtop=" + "escaperoad2d.io";
      _0x17044a += "&hn=" + "games.ofree.io";
      _0x17044a += "&referrer=" + config.referrer;
    }
    let _0x1d138e = "&data=" + btoa(_0x17044a);
    let _0x11ced8 = config.eventAPI + "?event=" + _0xef947e + _0x1d138e;
    let _0x1762a7 = new XMLHttpRequest();
    _0x1762a7.open("GET", _0x11ced8);
    _0x1762a7.onreadystatechange = function () {
      if (_0x1762a7.readyState !== 4) {
        return;
      }
      if (_0x1762a7.status === 200) {
        console.log(_0x1762a7.responseText);
      } else {
        console.log("HTTP error", _0x1762a7.status, _0x1762a7.statusText);
      }
    };
    _0x1762a7.send();
  } catch (_0x323f70) {}
}
function xorEncryptMsg(_0x4d429f) {
  let _0x1da782 = "gmdata@&!message@!3!@";
  let _0x2de570 = "";
  for (let _0x1f7df7 = 0; _0x1f7df7 < _0x4d429f.length; _0x1f7df7++) {
    const _0x14a2a2 = _0x4d429f.charCodeAt(_0x1f7df7) ^ _0x1da782.charCodeAt(_0x1f7df7 % _0x1da782.length);
    _0x2de570 += String.fromCharCode(_0x14a2a2);
  }
  return btoa(_0x2de570);
}
function check_event_log() {
  const _0x48bd84 = window.location.search;
  const _0x5bd29d = new URLSearchParams(_0x48bd84);
  if (_0x5bd29d.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x2ce1d9) {
  try {
    const _0x2a5411 = eval(_0x2ce1d9);
    gmdebug("Result:", _0x2a5411);
    return _0x2a5411;
  } catch (_0x286d28) {
    gmdebug("Error executing code:", _0x286d28);
  }
}
window.addEventListener("beforeunload", function (_0x41fd33) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x2fc534 = "data@&@#$@#^FFgdfg!1estimate";
      let _0x5ca906 = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x21cf0a = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x18b067 = _0x5ca906;
      let _0x3cc909 = "";
      for (let _0x43ba51 = 0; _0x43ba51 < _0x21cf0a.length; _0x43ba51++) {
        const _0x4bb608 = _0x21cf0a.charCodeAt(_0x43ba51) ^ _0x2fc534.charCodeAt(_0x43ba51 % _0x2fc534.length);
        _0x3cc909 += String.fromCharCode(_0x4bb608);
      }
      sourceHtml = _0x3cc909;
      let _0x5577bb = document.getElementById("gmsoft-jssdk");
      if (!_0x5577bb || _0x5577bb.src != sourceHtml) {
        bangame("d", "s", "id", "code 1");
      }
    } catch (_0x37de0b) {
      bangame("d", "s", "id", "JS code 2:" + _0x37de0b.message);
    }
  }, 3000);
}