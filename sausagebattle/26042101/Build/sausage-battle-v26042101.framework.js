function unityFramework(_0x5c0d54) {
  var _0x5c0d54 = typeof _0x5c0d54 !== "undefined" ? _0x5c0d54 : {};
  _0x5c0d54.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x657d9b(_0x358467, _0x128f33) {
    _0x596987("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0x51c742(_0x358467, _0x128f33);
  }
  _0x5c0d54.Pointer_stringify = _0x657d9b;
  var _0x10f32c = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0x2277fa = _0x39fca6().match(new RegExp(_0x10f32c));
  if (_0x2277fa) {
    _0x5c0d54.stackTraceRegExp = new RegExp(_0x10f32c.replace("([^\\n]+)", _0x2277fa[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  function _0x57adfd(_0x4c00f8) {
    if (_0x5114fe) {
      return;
    }
    _0x5114fe = true;
    _0x10a662 = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x4c00f8 !== undefined) {
      _0xaa0590(_0x4c00f8);
      _0x33bd81(_0x4c00f8);
      _0x4c00f8 = JSON.stringify(_0x4c00f8);
    } else {
      _0x4c00f8 = "";
    }
    var _0x1a782a = "abort(" + _0x4c00f8 + ") at " + _0x4e533e();
    if (_0x5c0d54.abortHandler && _0x5c0d54.abortHandler(_0x1a782a)) {
      return;
    }
    throw _0x1a782a;
  }
  _0x5c0d54.SetFullscreen = function (_0x15fe94) {
    if (typeof _0x5ec214 === "undefined" || !_0x5ec214) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x2e5ba2 === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x1413bd = _0x2e5ba2.canPerformEventHandlerRequests;
      _0x2e5ba2.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0x5c0d54.ccall("SetFullscreen", null, ["number"], [_0x15fe94]);
      _0x2e5ba2.canPerformEventHandlerRequests = _0x1413bd;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0x5c0d54.preRun.push(function () {
      var _0x6853f3 = _0x5c0d54.unityFileSystemInit || function () {
        _0x453483.mkdir("/idbfs");
        _0x453483.mount(_0x3a00cc, {}, "/idbfs");
        _0x5c0d54.addRunDependency("JS_FileSystem_Mount");
        _0x453483.syncfs(true, function (_0x3299cf) {
          if (_0x3299cf) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0x5c0d54.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x6853f3();
    });
  }
  var _0x4ec156 = [];
  var _0x56e1dc = false;
  var _0x5cfd20;
  var _0x756982 = null;
  function _0x300111(_0x6997d) {
    var _0x5e143d = Object.keys(_0x4ec156);
    for (var _0x1526da = 0; _0x1526da < _0x5e143d.length; ++_0x1526da) {
      var _0x3fc6d5 = _0x4ec156[_0x5e143d[_0x1526da]];
      if (_0x3fc6d5.deviceId && _0x3fc6d5.deviceId == _0x6997d.deviceId) {
        return _0x3fc6d5;
      }
    }
    for (var _0x1526da = 0; _0x1526da < _0x5e143d.length; ++_0x1526da) {
      var _0x3fc6d5 = _0x4ec156[_0x5e143d[_0x1526da]];
      if (_0x3fc6d5 == _0x6997d) {
        return _0x3fc6d5;
      }
    }
    for (var _0x1526da = 0; _0x1526da < _0x5e143d.length; ++_0x1526da) {
      var _0x3fc6d5 = _0x4ec156[_0x5e143d[_0x1526da]];
      if (_0x3fc6d5.label && _0x3fc6d5.label == _0x6997d.label) {
        return _0x3fc6d5;
      }
    }
    for (var _0x1526da = 0; _0x1526da < _0x5e143d.length; ++_0x1526da) {
      var _0x3fc6d5 = _0x4ec156[_0x5e143d[_0x1526da]];
      if (_0x3fc6d5.groupId && _0x3fc6d5.kind && _0x3fc6d5.groupId == _0x6997d.groupId && _0x3fc6d5.kind == _0x6997d.kind) {
        return _0x3fc6d5;
      }
    }
  }
  function _0x5d7919() {
    for (var _0x4cff72 = 0;; ++_0x4cff72) {
      if (!_0x4ec156[_0x4cff72]) {
        return _0x4cff72;
      }
    }
  }
  function _0x5e0386(_0x21181a) {
    _0x5cfd20();
    _0x4ec156 = [];
    var _0x20a4e3 = {};
    var _0x2ed72f = [];
    _0x21181a.forEach(function (_0x521bf4) {
      if (_0x521bf4.kind === "videoinput") {
        var _0x4239f2 = _0x300111(_0x521bf4);
        if (_0x4239f2) {
          _0x20a4e3[_0x4239f2.id] = _0x4239f2;
        } else {
          _0x2ed72f.push(_0x521bf4);
        }
      }
    });
    _0x4ec156 = _0x20a4e3;
    _0x2ed72f.forEach(function (_0x4de158) {
      if (!_0x4de158.id) {
        _0x4de158.id = _0x5d7919();
        _0x4de158.name = _0x4de158.label || "Video input #" + (_0x4de158.id + 1);
        _0x4de158.isFrontFacing = _0x4de158.name.toLowerCase().includes("front") || !_0x4de158.name.toLowerCase().includes("front") && !_0x4de158.name.toLowerCase().includes("back");
        _0x4ec156[_0x4de158.id] = _0x4de158;
      }
    });
  }
  function _0x43af86() {
    if (!_0x4ec156) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x59b327) {
      _0x5e0386(_0x59b327);
      _0x56e1dc = true;
    }).catch(function (_0x53cd20) {
      console.warn("Unable to enumerate media devices: " + _0x53cd20 + "\nWebcams will not be available.");
      _0x478fe6();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x43af86, 60000);
      _0x596987("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0x478fe6() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x43af86);
    }
    _0x4ec156 = null;
  }
  _0x5c0d54.disableAccessToMediaDevices = _0x478fe6;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0x478fe6();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0x9df903("enumerateMediaDevices");
        _0x5cfd20 = function () {
          if (_0x756982 !== null) {
            clearTimeout(_0x756982);
          }
          _0x5ac12f("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x5cfd20 = function () {};
        };
        _0x43af86();
        _0x756982 = setTimeout(_0x5cfd20, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x43af86);
      } catch (_0xe4e19a) {
        console.warn("Unable to enumerate media devices: " + _0xe4e19a);
        _0x478fe6();
      }
    }, 0);
  }
  function _0x5cf36d(_0x478353, _0x1f05e4, _0x5b7a0f) {
    var _0x169d7f = _0x4cf08f(_0x1f05e4);
    var _0x50d629 = _0x4cf08f(_0x478353);
    var _0x5f3fd1 = 0;
    try {
      if (_0x5b7a0f === undefined) {
        _0x160d43(_0x50d629, _0x169d7f);
      } else if (typeof _0x5b7a0f === "string") {
        _0x5f3fd1 = _0x4cf08f(_0x5b7a0f);
        _0x3c288a(_0x50d629, _0x169d7f, _0x5f3fd1);
      } else if (typeof _0x5b7a0f === "number") {
        _0xbb5585(_0x50d629, _0x169d7f, _0x5b7a0f);
      } else {
        throw "" + _0x5b7a0f + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0xf67877(_0x5f3fd1);
      _0xf67877(_0x50d629);
      _0xf67877(_0x169d7f);
    }
  }
  _0x5c0d54.SendMessage = _0x5cf36d;
  var _0x100ea5 = {};
  var _0x3140e7;
  for (_0x3140e7 in _0x5c0d54) {
    if (_0x5c0d54.hasOwnProperty(_0x3140e7)) {
      _0x100ea5[_0x3140e7] = _0x5c0d54[_0x3140e7];
    }
  }
  var _0x24954b = [];
  var _0x428320 = "./this.program";
  function _0x4a5c9f(_0x459806, _0x1e3080) {
    throw _0x1e3080;
  }
  var _0x48c286 = false;
  var _0x445082 = false;
  var _0x2ea75e = false;
  var _0xe79dab = false;
  _0x48c286 = typeof window === "object";
  _0x445082 = typeof importScripts === "function";
  _0x2ea75e = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0xe79dab = !_0x48c286 && !_0x2ea75e && !_0x445082;
  var _0x477cc7 = "";
  function _0x3fdf61(_0x3fbb74) {
    if (_0x5c0d54.locateFile) {
      return _0x5c0d54.locateFile(_0x3fbb74, _0x477cc7);
    }
    return _0x477cc7 + _0x3fbb74;
  }
  var _0x25ee7a;
  var _0x440841;
  var _0x5e387c;
  var _0x1e5687;
  var _0x1eb312;
  var _0x20fe29;
  if (_0x2ea75e) {
    if (_0x445082) {
      _0x477cc7 = require("path").dirname(_0x477cc7) + "/";
    } else {
      _0x477cc7 = __dirname + "/";
    }
    _0x25ee7a = function _0x74a77d(_0x5aca96, _0x43db88) {
      if (!_0x1eb312) {
        _0x1eb312 = require("fs");
      }
      if (!_0x20fe29) {
        _0x20fe29 = require("path");
      }
      _0x5aca96 = _0x20fe29.normalize(_0x5aca96);
      return _0x1eb312.readFileSync(_0x5aca96, _0x43db88 ? null : "utf8");
    };
    _0x5e387c = function _0x3bd670(_0x22f652) {
      var _0x3e4731 = _0x25ee7a(_0x22f652, true);
      if (!_0x3e4731.buffer) {
        _0x3e4731 = new Uint8Array(_0x3e4731);
      }
      _0x1f7fa5(_0x3e4731.buffer);
      return _0x3e4731;
    };
    if (process.argv.length > 1) {
      _0x428320 = process.argv[1].replace(/\\/g, "/");
    }
    _0x24954b = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0x5c0d54;
    }
    process.on("uncaughtException", function (_0x21bd9c) {
      if (!(_0x21bd9c instanceof _0x5e5c06)) {
        throw _0x21bd9c;
      }
    });
    process.on("unhandledRejection", _0x57adfd);
    _0x4a5c9f = function (_0xfd66ee) {
      process.exit(_0xfd66ee);
    };
    _0x5c0d54.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0xe79dab) {
    if (typeof read != "undefined") {
      _0x25ee7a = function _0x4cdbe0(_0x521886) {
        return read(_0x521886);
      };
    }
    _0x5e387c = function _0x180b20(_0x4476de) {
      var _0x35bd16;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0x4476de));
      }
      _0x35bd16 = read(_0x4476de, "binary");
      _0x1f7fa5(typeof _0x35bd16 === "object");
      return _0x35bd16;
    };
    if (typeof scriptArgs != "undefined") {
      _0x24954b = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x24954b = arguments;
    }
    if (typeof quit === "function") {
      _0x4a5c9f = function (_0x3247cc) {
        quit(_0x3247cc);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0x48c286 || _0x445082) {
    if (_0x445082) {
      _0x477cc7 = "https://games.1games.io";
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x477cc7 = document.currentScript.src;
    }
    if (_0x477cc7.indexOf("blob:") !== 0) {
      _0x477cc7 = _0x477cc7.substr(0, _0x477cc7.lastIndexOf("/") + 1);
    } else {
      _0x477cc7 = "";
    }
    {
      _0x25ee7a = function (_0x2581a3) {
        var _0x4b8be3 = new XMLHttpRequest();
        _0x4b8be3.open("GET", _0x2581a3, false);
        _0x4b8be3.send(null);
        return _0x4b8be3.responseText;
      };
      if (_0x445082) {
        _0x5e387c = function (_0x19eb74) {
          var _0x4e8c9a = new XMLHttpRequest();
          _0x4e8c9a.open("GET", _0x19eb74, false);
          _0x4e8c9a.responseType = "arraybuffer";
          _0x4e8c9a.send(null);
          return new Uint8Array(_0x4e8c9a.response);
        };
      }
      _0x440841 = function (_0x3b457a, _0x4f4299, _0x57c461) {
        var _0x140fc8 = new XMLHttpRequest();
        _0x140fc8.open("GET", _0x3b457a, true);
        _0x140fc8.responseType = "arraybuffer";
        _0x140fc8.onload = function () {
          if (_0x140fc8.status == 200 || _0x140fc8.status == 0 && _0x140fc8.response) {
            _0x4f4299(_0x140fc8.response);
            return;
          }
          _0x57c461();
        };
        _0x140fc8.onerror = _0x57c461;
        _0x140fc8.send(null);
      };
    }
    _0x1e5687 = function (_0x4d0b7d) {
      document.title = _0x4d0b7d;
    };
  } else {}
  var _0xaa0590 = _0x5c0d54.print || console.log.bind(console);
  var _0x33bd81 = _0x5c0d54.printErr || console.warn.bind(console);
  for (_0x3140e7 in _0x100ea5) {
    if (_0x100ea5.hasOwnProperty(_0x3140e7)) {
      _0x5c0d54[_0x3140e7] = _0x100ea5[_0x3140e7];
    }
  }
  _0x100ea5 = null;
  if (_0x5c0d54.arguments) {
    _0x24954b = _0x5c0d54.arguments;
  }
  if (_0x5c0d54.thisProgram) {
    _0x428320 = _0x5c0d54.thisProgram;
  }
  if (_0x5c0d54.quit) {
    _0x4a5c9f = _0x5c0d54.quit;
  }
  var _0x5063c9 = 16;
  function _0x5b5b86(_0x168fa4, _0x2132d7) {
    if (!_0x2132d7) {
      _0x2132d7 = _0x5063c9;
    }
    return Math.ceil(_0x168fa4 / _0x2132d7) * _0x2132d7;
  }
  function _0x596987(_0x1147f3) {
    if (!_0x596987.shown) {
      _0x596987.shown = {};
    }
    if (!_0x596987.shown[_0x1147f3]) {
      _0x596987.shown[_0x1147f3] = 1;
      _0x33bd81(_0x1147f3);
    }
  }
  var _0x3910de = 0;
  function _0x47b672(_0x430bde) {
    _0x3910de = _0x430bde;
  }
  function _0x43ef0f() {
    return _0x3910de;
  }
  var _0x200057;
  if (_0x5c0d54.wasmBinary) {
    _0x200057 = _0x5c0d54.wasmBinary;
  }
  var _0x460d44 = _0x5c0d54.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0x57adfd("no native wasm support detected");
  }
  var _0x43c2d9;
  var _0x5114fe = false;
  var _0x10a662;
  function _0x1f7fa5(_0x507198, _0x487967) {
    if (!_0x507198) {
      _0x57adfd("Assertion failed: " + _0x487967);
    }
  }
  function _0x46ee19(_0xc2c8cb) {
    var _0x452a78 = _0x5c0d54["_" + _0xc2c8cb];
    _0x1f7fa5(_0x452a78, "Cannot call unknown function " + _0xc2c8cb + ", make sure it is exported");
    return _0x452a78;
  }
  function _0x35bcc6(_0xc24e77, _0x330856, _0x2af576, _0x29c0ec, _0x4c0fe1) {
    var _0xd1d9c4 = {
      string: function (_0x29279e) {
        var _0x4ec350 = 0;
        if (_0x29279e !== null && _0x29279e !== undefined && _0x29279e !== 0) {
          var _0x2a7250 = (_0x29279e.length << 2) + 1;
          _0x4ec350 = _0x2b6616(_0x2a7250);
          _0x4cad61(_0x29279e, _0x4ec350, _0x2a7250);
        }
        return _0x4ec350;
      },
      array: function (_0x5560b1) {
        var _0x41bdae = _0x2b6616(_0x5560b1.length);
        _0x54df4b(_0x5560b1, _0x41bdae);
        return _0x41bdae;
      }
    };
    function _0x53eabd(_0x15adc5) {
      if (_0x330856 === "string") {
        return _0x51c742(_0x15adc5);
      }
      if (_0x330856 === "boolean") {
        return Boolean(_0x15adc5);
      }
      return _0x15adc5;
    }
    var _0x5cc074 = _0x46ee19(_0xc24e77);
    var _0x8d69bf = [];
    var _0xc4904 = 0;
    if (_0x29c0ec) {
      for (var _0x53ea44 = 0; _0x53ea44 < _0x29c0ec.length; _0x53ea44++) {
        var _0x3e2955 = _0xd1d9c4[_0x2af576[_0x53ea44]];
        if (_0x3e2955) {
          if (_0xc4904 === 0) {
            _0xc4904 = _0x212590();
          }
          _0x8d69bf[_0x53ea44] = _0x3e2955(_0x29c0ec[_0x53ea44]);
        } else {
          _0x8d69bf[_0x53ea44] = _0x29c0ec[_0x53ea44];
        }
      }
    }
    var _0x444838 = _0x5cc074.apply(null, _0x8d69bf);
    _0x444838 = _0x53eabd(_0x444838);
    if (_0xc4904 !== 0) {
      _0x4a640e(_0xc4904);
    }
    return _0x444838;
  }
  function _0x49a24e(_0x1be682, _0x317ced, _0x385fac, _0x448998) {
    _0x385fac = _0x385fac || [];
    var _0x3dc61b = _0x385fac.every(function (_0x5d5a88) {
      return _0x5d5a88 === "number";
    });
    var _0x155f0e = _0x317ced !== "string";
    if (_0x155f0e && _0x3dc61b && !_0x448998) {
      return _0x46ee19(_0x1be682);
    }
    return function () {
      return _0x35bcc6(_0x1be682, _0x317ced, _0x385fac, arguments, _0x448998);
    };
  }
  var _0x4b6d1a = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x10dc1b(_0x59d8ee, _0x2e3936, _0x5521e2) {
    var _0x25e65c = _0x2e3936 + _0x5521e2;
    var _0x43e1be = _0x2e3936;
    while (_0x59d8ee[_0x43e1be] && !(_0x43e1be >= _0x25e65c)) {
      ++_0x43e1be;
    }
    if (_0x43e1be - _0x2e3936 > 16 && _0x59d8ee.subarray && _0x4b6d1a) {
      return _0x4b6d1a.decode(_0x59d8ee.subarray(_0x2e3936, _0x43e1be));
    } else {
      var _0x24aba7 = "";
      while (_0x2e3936 < _0x43e1be) {
        var _0x1ffbfd = _0x59d8ee[_0x2e3936++];
        if (!(_0x1ffbfd & 128)) {
          _0x24aba7 += String.fromCharCode(_0x1ffbfd);
          continue;
        }
        var _0x35eade = _0x59d8ee[_0x2e3936++] & 63;
        if ((_0x1ffbfd & 224) == 192) {
          _0x24aba7 += String.fromCharCode((_0x1ffbfd & 31) << 6 | _0x35eade);
          continue;
        }
        var _0x3c4611 = _0x59d8ee[_0x2e3936++] & 63;
        if ((_0x1ffbfd & 240) == 224) {
          _0x1ffbfd = (_0x1ffbfd & 15) << 12 | _0x35eade << 6 | _0x3c4611;
        } else {
          _0x1ffbfd = (_0x1ffbfd & 7) << 18 | _0x35eade << 12 | _0x3c4611 << 6 | _0x59d8ee[_0x2e3936++] & 63;
        }
        if (_0x1ffbfd < 65536) {
          _0x24aba7 += String.fromCharCode(_0x1ffbfd);
        } else {
          var _0x54e941 = _0x1ffbfd - 65536;
          _0x24aba7 += String.fromCharCode(_0x54e941 >> 10 | 55296, _0x54e941 & 1023 | 56320);
        }
      }
    }
    return _0x24aba7;
  }
  function _0x51c742(_0x20078e, _0x52adae) {
    if (_0x20078e) {
      return _0x10dc1b(_0x12f402, _0x20078e, _0x52adae);
    } else {
      return "";
    }
  }
  function _0x1425b7(_0x2874fa, _0x489ef5, _0x34fbcb, _0x1fbadb) {
    if (!(_0x1fbadb > 0)) {
      return 0;
    }
    var _0x38d8ac = _0x34fbcb;
    var _0x5e38ab = _0x34fbcb + _0x1fbadb - 1;
    for (var _0x54ec44 = 0; _0x54ec44 < _0x2874fa.length; ++_0x54ec44) {
      var _0x2e1799 = _0x2874fa.charCodeAt(_0x54ec44);
      if (_0x2e1799 >= 55296 && _0x2e1799 <= 57343) {
        var _0x58f951 = _0x2874fa.charCodeAt(++_0x54ec44);
        _0x2e1799 = 65536 + ((_0x2e1799 & 1023) << 10) | _0x58f951 & 1023;
      }
      if (_0x2e1799 <= 127) {
        if (_0x34fbcb >= _0x5e38ab) {
          break;
        }
        _0x489ef5[_0x34fbcb++] = _0x2e1799;
      } else if (_0x2e1799 <= 2047) {
        if (_0x34fbcb + 1 >= _0x5e38ab) {
          break;
        }
        _0x489ef5[_0x34fbcb++] = _0x2e1799 >> 6 | 192;
        _0x489ef5[_0x34fbcb++] = _0x2e1799 & 63 | 128;
      } else if (_0x2e1799 <= 65535) {
        if (_0x34fbcb + 2 >= _0x5e38ab) {
          break;
        }
        _0x489ef5[_0x34fbcb++] = _0x2e1799 >> 12 | 224;
        _0x489ef5[_0x34fbcb++] = _0x2e1799 >> 6 & 63 | 128;
        _0x489ef5[_0x34fbcb++] = _0x2e1799 & 63 | 128;
      } else {
        if (_0x34fbcb + 3 >= _0x5e38ab) {
          break;
        }
        _0x489ef5[_0x34fbcb++] = _0x2e1799 >> 18 | 240;
        _0x489ef5[_0x34fbcb++] = _0x2e1799 >> 12 & 63 | 128;
        _0x489ef5[_0x34fbcb++] = _0x2e1799 >> 6 & 63 | 128;
        _0x489ef5[_0x34fbcb++] = _0x2e1799 & 63 | 128;
      }
    }
    _0x489ef5[_0x34fbcb] = 0;
    return _0x34fbcb - _0x38d8ac;
  }
  function _0x4cad61(_0x18f177, _0x3fa6f7, _0x5678f5) {
    return _0x1425b7(_0x18f177, _0x12f402, _0x3fa6f7, _0x5678f5);
  }
  function _0x219de1(_0x47bb96) {
    var _0x58cb79 = 0;
    for (var _0x29ad1f = 0; _0x29ad1f < _0x47bb96.length; ++_0x29ad1f) {
      var _0x212f47 = _0x47bb96.charCodeAt(_0x29ad1f);
      if (_0x212f47 >= 55296 && _0x212f47 <= 57343) {
        _0x212f47 = 65536 + ((_0x212f47 & 1023) << 10) | _0x47bb96.charCodeAt(++_0x29ad1f) & 1023;
      }
      if (_0x212f47 <= 127) {
        ++_0x58cb79;
      } else if (_0x212f47 <= 2047) {
        _0x58cb79 += 2;
      } else if (_0x212f47 <= 65535) {
        _0x58cb79 += 3;
      } else {
        _0x58cb79 += 4;
      }
    }
    return _0x58cb79;
  }
  function _0x40be1d(_0x54c73b) {
    var _0x46b640 = _0x219de1(_0x54c73b) + 1;
    var _0x1afb9c = _0x18375c(_0x46b640);
    if (_0x1afb9c) {
      _0x1425b7(_0x54c73b, _0x28416d, _0x1afb9c, _0x46b640);
    }
    return _0x1afb9c;
  }
  function _0x2d0a5c(_0x2349f3) {
    var _0x57608c = _0x219de1(_0x2349f3) + 1;
    var _0x57cd24 = _0x2b6616(_0x57608c);
    _0x1425b7(_0x2349f3, _0x28416d, _0x57cd24, _0x57608c);
    return _0x57cd24;
  }
  function _0x54df4b(_0x1e19d3, _0x4393f3) {
    _0x28416d.set(_0x1e19d3, _0x4393f3);
  }
  function _0x4dcdc2(_0x4bc89e, _0x4755aa, _0x4c4be6) {
    for (var _0x48d29b = 0; _0x48d29b < _0x4bc89e.length; ++_0x48d29b) {
      _0x28416d[_0x4755aa++ >> 0] = _0x4bc89e.charCodeAt(_0x48d29b);
    }
    if (!_0x4c4be6) {
      _0x28416d[_0x4755aa >> 0] = 0;
    }
  }
  function _0x2d9c29(_0x34b780, _0x31c330) {
    if (_0x34b780 % _0x31c330 > 0) {
      _0x34b780 += _0x31c330 - _0x34b780 % _0x31c330;
    }
    return _0x34b780;
  }
  var _0x2c155a;
  var _0x28416d;
  var _0x12f402;
  var _0x4c83dc;
  var _0x55dbec;
  var _0x5ce4f8;
  var _0x1ee1a1;
  var _0x3e31eb;
  var _0xbff719;
  function _0x5be588(_0x543c9b) {
    _0x2c155a = _0x543c9b;
    _0x5c0d54.HEAP8 = _0x28416d = new Int8Array(_0x543c9b);
    _0x5c0d54.HEAP16 = _0x4c83dc = new Int16Array(_0x543c9b);
    _0x5c0d54.HEAP32 = _0x5ce4f8 = new Int32Array(_0x543c9b);
    _0x5c0d54.HEAPU8 = _0x12f402 = new Uint8Array(_0x543c9b);
    _0x5c0d54.HEAPU16 = _0x55dbec = new Uint16Array(_0x543c9b);
    _0x5c0d54.HEAPU32 = _0x1ee1a1 = new Uint32Array(_0x543c9b);
    _0x5c0d54.HEAPF32 = _0x3e31eb = new Float32Array(_0x543c9b);
    _0x5c0d54.HEAPF64 = _0xbff719 = new Float64Array(_0x543c9b);
  }
  var _0x424e9e = _0x5c0d54.INITIAL_MEMORY || 33554432;
  var _0x2dd3d1;
  var _0xb80b0e = [];
  var _0x1d474f = [];
  var _0x9df0a6 = [];
  var _0x2596a3 = [];
  var _0x59a5cf = [];
  var _0x5ec214 = false;
  var _0xdce5a1 = false;
  function _0x3010b5() {
    if (_0x5c0d54.preRun) {
      if (typeof _0x5c0d54.preRun == "function") {
        _0x5c0d54.preRun = [_0x5c0d54.preRun];
      }
      while (_0x5c0d54.preRun.length) {
        _0x2086a3(_0x5c0d54.preRun.shift());
      }
    }
    _0x1d7e1b(_0xb80b0e);
  }
  function _0x7e981c() {
    _0x5ec214 = true;
    if (!_0x5c0d54.noFSInit && !_0x453483.init.initialized) {
      _0x453483.init();
    }
    _0x43e1de.init();
    _0x5d1efe.root = _0x453483.mount(_0x5d1efe, {}, null);
    _0x519002.root = _0x453483.mount(_0x519002, {}, null);
    _0x1d7e1b(_0x1d474f);
  }
  function _0x20c56b() {
    _0x453483.ignorePermissions = false;
    _0x1d7e1b(_0x9df0a6);
  }
  function _0x57f1c5() {
    _0xdce5a1 = true;
  }
  function _0x495082() {
    if (_0x5c0d54.postRun) {
      if (typeof _0x5c0d54.postRun == "function") {
        _0x5c0d54.postRun = [_0x5c0d54.postRun];
      }
      while (_0x5c0d54.postRun.length) {
        _0x139c7b(_0x5c0d54.postRun.shift());
      }
    }
    _0x1d7e1b(_0x59a5cf);
  }
  function _0x2086a3(_0x5eeedb) {
    _0xb80b0e.unshift(_0x5eeedb);
  }
  function _0xc9ca85(_0x3c9484) {
    _0x1d474f.unshift(_0x3c9484);
  }
  function _0x139c7b(_0x12d937) {
    _0x59a5cf.unshift(_0x12d937);
  }
  var _0x4100cb = 0;
  var _0x2f534d = null;
  var _0x1ef21c = null;
  function _0x52f3f7(_0x44f7c4) {
    return _0x44f7c4;
  }
  function _0x9df903(_0x25b7c8) {
    _0x4100cb++;
    if (_0x5c0d54.monitorRunDependencies) {
      _0x5c0d54.monitorRunDependencies(_0x4100cb);
    }
  }
  function _0x5ac12f(_0x7b3995) {
    _0x4100cb--;
    if (_0x5c0d54.monitorRunDependencies) {
      _0x5c0d54.monitorRunDependencies(_0x4100cb);
    }
    if (_0x4100cb == 0) {
      if (_0x2f534d !== null) {
        clearInterval(_0x2f534d);
        _0x2f534d = null;
      }
      if (_0x1ef21c) {
        var _0x5104de = _0x1ef21c;
        _0x1ef21c = null;
        _0x5104de();
      }
    }
  }
  _0x5c0d54.preloadedImages = {};
  _0x5c0d54.preloadedAudios = {};
  function _0x57adfd(_0x23b277) {
    if (_0x5c0d54.onAbort) {
      _0x5c0d54.onAbort(_0x23b277);
    }
    _0x23b277 += "";
    _0x33bd81(_0x23b277);
    _0x5114fe = true;
    _0x10a662 = 1;
    _0x23b277 = "abort(" + _0x23b277 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x107f9e = new WebAssembly.RuntimeError(_0x23b277);
    throw _0x107f9e;
  }
  var _0x56f87a = "data:application/octet-stream;base64,";
  function _0x2f5109(_0x904b76) {
    return _0x904b76.startsWith(_0x56f87a);
  }
  function _0x146d77(_0x116ec4) {
    return _0x116ec4.startsWith("file://");
  }
  var _0x416cff = "build.wasm";
  if (!_0x2f5109(_0x416cff)) {
    _0x416cff = _0x3fdf61(_0x416cff);
  }
  function _0x2a7c0c(_0x3e3a11) {
    try {
      if (_0x3e3a11 == _0x416cff && _0x200057) {
        return new Uint8Array(_0x200057);
      }
      if (_0x5e387c) {
        return _0x5e387c(_0x3e3a11);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x543eee) {
      _0x57adfd(_0x543eee);
    }
  }
  function _0x342fba() {
    if (!_0x200057 && (_0x48c286 || _0x445082)) {
      if (typeof fetch === "function" && !_0x146d77(_0x416cff)) {
        return fetch(_0x416cff, {
          credentials: "same-origin"
        }).then(function (_0x5d2552) {
          if (!_0x5d2552.ok) {
            throw "failed to load wasm binary file at '" + _0x416cff + "'";
          }
          return _0x5d2552.arrayBuffer();
        }).catch(function () {
          return _0x2a7c0c(_0x416cff);
        });
      } else if (_0x440841) {
        return new Promise(function (_0xf75f41, _0x4e3258) {
          _0x440841(_0x416cff, function (_0x537787) {
            _0xf75f41(new Uint8Array(_0x537787));
          }, _0x4e3258);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0x2a7c0c(_0x416cff);
    });
  }
  function _0x5c95be() {
    var _0x246abc = {
      a: _0x222a7b
    };
    function _0x56f825(_0x494545, _0xc8a2aa) {
      var _0x167624 = _0x494545.exports;
      _0x5c0d54.asm = _0x167624;
      _0x43c2d9 = _0x5c0d54.asm.tk;
      _0x5be588(_0x43c2d9.buffer);
      _0x2dd3d1 = _0x5c0d54.asm.Tk;
      _0xc9ca85(_0x5c0d54.asm.uk);
      _0x5ac12f("wasm-instantiate");
    }
    _0x9df903("wasm-instantiate");
    function _0x1076cb(_0x4c00ec) {
      _0x56f825(_0x4c00ec.instance);
    }
    function _0x3c9829(_0x58838e) {
      return _0x342fba().then(function (_0x56717d) {
        var _0x4803ab = WebAssembly.instantiate(_0x56717d, _0x246abc);
        return _0x4803ab;
      }).then(_0x58838e, function (_0x52b484) {
        _0x33bd81("failed to asynchronously prepare wasm: " + _0x52b484);
        _0x57adfd(_0x52b484);
      });
    }
    function _0x4941f5() {
      if (!_0x200057 && typeof WebAssembly.instantiateStreaming === "function" && !_0x2f5109(_0x416cff) && !_0x146d77(_0x416cff) && typeof fetch === "function") {
        return fetch(_0x416cff, {
          credentials: "same-origin"
        }).then(function (_0x1c3da3) {
          var _0x3eb369 = WebAssembly.instantiateStreaming(_0x1c3da3, _0x246abc);
          return _0x3eb369.then(_0x1076cb, function (_0x448a8) {
            _0x33bd81("wasm streaming compile failed: " + _0x448a8);
            _0x33bd81("falling back to ArrayBuffer instantiation");
            return _0x3c9829(_0x1076cb);
          });
        });
      } else {
        return _0x3c9829(_0x1076cb);
      }
    }
    if (_0x5c0d54.instantiateWasm) {
      try {
        var _0x2ef717 = _0x5c0d54.instantiateWasm(_0x246abc, _0x56f825);
        return _0x2ef717;
      } catch (_0x19f22e) {
        _0x33bd81("Module.instantiateWasm callback failed with error: " + _0x19f22e);
        return false;
      }
    }
    _0x4941f5();
    return {};
  }
  var _0x29224d;
  var _0x2bb7d8;
  var _0x18015c = {
    8414664: function () {
      return _0x5c0d54.webglContextAttributes.premultipliedAlpha;
    },
    8414725: function () {
      return _0x5c0d54.webglContextAttributes.preserveDrawingBuffer;
    },
    8414789: function () {
      return _0x5c0d54.webglContextAttributes.powerPreference;
    }
  };
  function _0x1d7e1b(_0x303983) {
    while (_0x303983.length > 0) {
      var _0x260c9d = _0x303983.shift();
      if (typeof _0x260c9d == "function") {
        _0x260c9d(_0x5c0d54);
        continue;
      }
      var _0x534d7e = _0x260c9d.func;
      if (typeof _0x534d7e === "number") {
        if (_0x260c9d.arg === undefined) {
          (function () {
            _0x1c1467.call(null, _0x534d7e);
          })();
        } else {
          (function (_0x281896) {
            _0x1cebc1.apply(null, [_0x534d7e, _0x281896]);
          })(_0x260c9d.arg);
        }
      } else {
        _0x534d7e(_0x260c9d.arg === undefined ? null : _0x260c9d.arg);
      }
    }
  }
  function _0x53f7b4(_0x115df8) {
    return _0x115df8;
  }
  function _0x2834c4(_0x4efc99) {
    var _0x127bac = /\b_Z[\w\d_]+/g;
    return _0x4efc99.replace(_0x127bac, function (_0x1fa659) {
      var _0x3f45ee = _0x53f7b4(_0x1fa659);
      if (_0x1fa659 === _0x3f45ee) {
        return _0x1fa659;
      } else {
        return _0x3f45ee + " [" + _0x1fa659 + "]";
      }
    });
  }
  function _0x4aadbf(_0x2ced86, _0x125ddd, _0x4850be) {
    var _0x449ca2 = _0x5c0d54["dynCall_" + _0x2ced86];
    if (_0x4850be && _0x4850be.length) {
      return _0x449ca2.apply(null, [_0x125ddd].concat(_0x4850be));
    } else {
      return _0x449ca2.call(null, _0x125ddd);
    }
  }
  function _0x507d94(_0x15c7b4, _0x581c3f, _0x529fd5) {
    return _0x4aadbf(_0x15c7b4, _0x581c3f, _0x529fd5);
  }
  function _0x39fca6() {
    var _0x113452 = new Error();
    if (!_0x113452.stack) {
      try {
        throw new Error();
      } catch (_0x334935) {
        _0x113452 = _0x334935;
      }
      if (!_0x113452.stack) {
        return "(no stack trace available)";
      }
    }
    return _0x113452.stack.toString();
  }
  var _0x3e7fd4 = 0;
  function _0x9b458f() {
    return _0x460d44 || _0x3e7fd4 > 0;
  }
  function _0x4e533e() {
    var _0x3e6001 = _0x39fca6();
    if (_0x5c0d54.extraStackTrace) {
      _0x3e6001 += "\n" + _0x5c0d54.extraStackTrace();
    }
    return _0x2834c4(_0x3e6001);
  }
  function _0xebda16(_0x1e6475, _0x345895, _0x459bf5, _0x52fdf7, _0x485bd1) {
    var _0x4e1276 = _0x51c742(_0x1e6475);
    var _0x4dd88c = _0x51c742(_0x345895);
    var _0x265b9a = _0x51c742(_0x459bf5);
    var _0x4fb6f1 = _0x51c742(_0x52fdf7);
    var _0xf9a5b4 = _0x51c742(_0x485bd1);
    try {
      firebase.firestore().collection(_0x4e1276).add(JSON.parse(_0x4dd88c)).then(function (_0x3cc271) {
        window.unityInstance.SendMessage(_0x265b9a, _0x4fb6f1, "Success: document added in collection " + _0x4e1276);
      }).catch(function (_0x12275c) {
        window.unityInstance.SendMessage(_0x265b9a, _0xf9a5b4, JSON.stringify(_0x12275c, Object.getOwnPropertyNames(_0x12275c)));
      });
    } catch (_0x57f7d1) {
      window.unityInstance.SendMessage(_0x265b9a, _0xf9a5b4, JSON.stringify(_0x57f7d1, Object.getOwnPropertyNames(_0x57f7d1)));
    }
  }
  function _0x1e7b04(_0x364cec, _0x4ef2c8, _0x475f11, _0x352eac, _0x2c10f8, _0x305c0f, _0x12a2bc) {
    var _0x4298fe = _0x51c742(_0x364cec);
    var _0x427499 = _0x51c742(_0x4ef2c8);
    var _0xf8b458 = _0x51c742(_0x475f11);
    var _0x582d91 = _0x51c742(_0x352eac);
    var _0x1d91e8 = _0x51c742(_0x2c10f8);
    var _0x14cf66 = _0x51c742(_0x305c0f);
    var _0x536835 = _0x51c742(_0x12a2bc);
    try {
      var _0x352eac = {};
      _0x352eac[_0xf8b458] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x582d91));
      firebase.firestore().collection(_0x4298fe).doc(_0x427499).update(_0x352eac).then(function () {
        window.unityInstance.SendMessage(_0x1d91e8, _0x14cf66, "Success: element " + _0x582d91 + " was added in " + _0xf8b458);
      }).catch(function (_0x2d528c) {
        window.unityInstance.SendMessage(_0x1d91e8, _0x536835, JSON.stringify(_0x2d528c, Object.getOwnPropertyNames(_0x2d528c)));
      });
    } catch (_0xb6dbd7) {
      window.unityInstance.SendMessage(_0x1d91e8, _0x536835, JSON.stringify(_0xb6dbd7, Object.getOwnPropertyNames(_0xb6dbd7)));
    }
  }
  function _0x5c0808(_0x5d9dde) {
    try {
      window.CrazyGames.SDK.user.addScore(_0x5d9dde);
    } catch (_0x5c536b) {
      window.UnitySDK.logError("Error while calling addScore:", _0x5c536b);
    }
  }
  function _0x15aacf(_0x1fd006, _0x4620cc) {
    try {
      window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x1fd006), JSON.parse(window.unityStringify(_0x4620cc)));
    } catch (_0x225a9d) {
      window.UnitySDK.logError("Error while calling trackOrder:", _0x225a9d);
    }
  }
  function _0x2736df(_0x35dbe4) {
    const _0xf76d2a = document.createElement("textarea");
    _0xf76d2a.value = window.unityStringify(_0x35dbe4);
    document.body.appendChild(_0xf76d2a);
    _0xf76d2a.select();
    _0xf76d2a.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(_0xf76d2a);
  }
  function _0x25e79e(_0x5f182d, _0x1b5e29, _0x9063a2, _0x555712, _0x8b5acb) {
    var _0x21bfee = _0x51c742(_0x5f182d);
    var _0x36ddc1 = _0x51c742(_0x1b5e29);
    var _0x55acad = _0x51c742(_0x9063a2);
    var _0x1fe18d = _0x51c742(_0x555712);
    var _0xbe0ff4 = _0x51c742(_0x8b5acb);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0x21bfee, _0x36ddc1).then(function (_0x3f2ca2) {
        window.unityInstance.SendMessage(_0x55acad, _0x1fe18d, "Success: signed up for " + _0x21bfee);
      }).catch(function (_0x2329cf) {
        window.unityInstance.SendMessage(_0x55acad, _0xbe0ff4, JSON.stringify(_0x2329cf, Object.getOwnPropertyNames(_0x2329cf)));
      });
    } catch (_0x1d97a9) {
      window.unityInstance.SendMessage(_0x55acad, _0xbe0ff4, JSON.stringify(_0x1d97a9, Object.getOwnPropertyNames(_0x1d97a9)));
    }
  }
  function _0x41ec72() {
    try {
      window.CrazyGames.SDK.data.clear();
    } catch (_0xfd9011) {
      window.UnitySDK.logError("Error while calling clear:", _0xfd9011);
    }
  }
  function _0x1fa90e(_0x528a99) {
    var _0x1f72c5 = null;
    try {
      _0x1f72c5 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x528a99));
    } catch (_0x562e2b) {
      window.UnitySDK.logError("Error while calling getItem:", _0x562e2b);
    }
    var _0x378b53 = _0x219de1(_0x1f72c5 + "") + 1;
    var _0x19391e = _0x18375c(_0x378b53);
    _0x4cad61(_0x1f72c5, _0x19391e, _0x378b53);
    return _0x19391e;
  }
  function _0x24495a(_0x2b3347) {
    var _0x42f9d5 = null;
    try {
      _0x42f9d5 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x2b3347));
    } catch (_0xcb2343) {
      window.UnitySDK.logError("Error while calling getItem:", _0xcb2343);
    }
    return _0x42f9d5 !== null;
  }
  function _0x5a6086(_0x4a2c9f) {
    try {
      window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x4a2c9f));
    } catch (_0x39a3a9) {
      window.UnitySDK.logError("Error while calling removeItem:", _0x39a3a9);
    }
  }
  function _0x4b2221(_0x1e6581, _0x1be118) {
    try {
      window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x1e6581), window.unityStringify(_0x1be118));
    } catch (_0x50ec82) {
      window.UnitySDK.logError("Error while calling setItem:", _0x50ec82);
    }
  }
  function _0x326a92(_0x459b58, _0x5c2f3e, _0x42191b, _0xd41edc, _0x557314) {
    var _0x3df9c5 = _0x51c742(_0x459b58);
    var _0x54c0eb = _0x51c742(_0x5c2f3e);
    var _0x5dd29b = _0x51c742(_0x42191b);
    var _0xedb36f = _0x51c742(_0xd41edc);
    var _0x1f8fa0 = _0x51c742(_0x557314);
    try {
      firebase.firestore().collection(_0x3df9c5).doc(_0x54c0eb).delete().then(function () {
        window.unityInstance.SendMessage(_0x5dd29b, _0xedb36f, "Success: document " + _0x54c0eb + " was deleted");
      }).catch(function (_0x2a4131) {
        window.unityInstance.SendMessage(_0x5dd29b, _0x1f8fa0, JSON.stringify(_0x2a4131, Object.getOwnPropertyNames(_0x2a4131)));
      });
    } catch (_0x883fba) {
      window.unityInstance.SendMessage(_0x5dd29b, _0x1f8fa0, JSON.stringify(_0x883fba, Object.getOwnPropertyNames(_0x883fba)));
    }
  }
  function _0xb6dca0(_0x547250, _0x1370c3, _0x44c2fa, _0x5db6e7, _0x35e396, _0x492466) {
    var _0x5f563f = _0x51c742(_0x547250);
    var _0x51d519 = _0x51c742(_0x1370c3);
    var _0x338825 = _0x51c742(_0x44c2fa);
    var _0xd31dc6 = _0x51c742(_0x5db6e7);
    var _0x3d78f8 = _0x51c742(_0x35e396);
    var _0x421039 = _0x51c742(_0x492466);
    try {
      var _0x302758 = {};
      _0x302758[_0x338825] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0x5f563f).doc(_0x51d519).update(_0x302758).then(function () {
        window.unityInstance.SendMessage(_0xd31dc6, _0x3d78f8, "Success: field " + _0x338825 + " was deleted");
      }).catch(function (_0x4cc7c8) {
        window.unityInstance.SendMessage(_0xd31dc6, _0x421039, JSON.stringify(_0x4cc7c8, Object.getOwnPropertyNames(_0x4cc7c8)));
      });
    } catch (_0x3fbf58) {
      window.unityInstance.SendMessage(_0xd31dc6, _0x421039, JSON.stringify(_0x3fbf58, Object.getOwnPropertyNames(_0x3fbf58)));
    }
  }
  function _0x3b9c69(_0x3a7876, _0x494582, _0x582a6a, _0x1e968f) {
    var _0x13c3e0 = _0x51c742(_0x3a7876);
    var _0x5c4498 = _0x51c742(_0x494582);
    var _0xabf143 = _0x51c742(_0x582a6a);
    var _0x11f1a6 = _0x51c742(_0x1e968f);
    try {
      firebase.database().ref(_0x13c3e0).remove().then(function (_0x48ef4a) {
        window.unityInstance.SendMessage(_0x5c4498, _0xabf143, "Success: " + _0x13c3e0 + " was deleted");
      });
    } catch (_0x958239) {
      window.unityInstance.SendMessage(_0x5c4498, _0x11f1a6, JSON.stringify(_0x958239, Object.getOwnPropertyNames(_0x958239)));
    }
  }
  function _0x48943d(_0x5baf21, _0x257c83, _0x2126f6, _0x5c8778) {
    var _0x459963 = _0x51c742(_0x5baf21);
    var _0xc4351d = _0x51c742(_0x257c83);
    var _0x2f533d = _0x51c742(_0x2126f6);
    var _0x509b7b = _0x51c742(_0x5c8778);
    try {
      firebase.storage().ref(_0x459963).getDownloadURL().then(function (_0x57ed30) {
        var _0x41da57 = new XMLHttpRequest();
        _0x41da57.responseType = "arraybuffer";
        _0x41da57.onload = function (_0x39e1fd) {
          var _0x382f27 = _0x41da57.response;
          window.unityInstance.SendMessage(_0xc4351d, _0x2f533d, _0x3cda0c(_0x382f27));
        };
        _0x41da57.open("GET", _0x57ed30);
        _0x41da57.send();
      }).catch(function (_0x22573c) {
        window.unityInstance.SendMessage(_0xc4351d, _0x509b7b, JSON.stringify(_0x22573c, Object.getOwnPropertyNames(_0x22573c)));
      });
    } catch (_0x3178f7) {
      window.unityInstance.SendMessage(_0xc4351d, _0x509b7b, JSON.stringify(_0x3178f7, Object.getOwnPropertyNames(_0x3178f7)));
    }
    function _0x3cda0c(_0x2da758) {
      var _0x16e377 = "";
      var _0x4b66ce = new Uint8Array(_0x2da758);
      var _0x2789cb = _0x4b66ce.byteLength;
      for (var _0x388c2f = 0; _0x388c2f < _0x2789cb; _0x388c2f++) {
        _0x16e377 += String.fromCharCode(_0x4b66ce[_0x388c2f]);
      }
      return window.btoa(_0x16e377);
    }
  }
  function _0x2a497a() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0xd8739a) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x19d266(_0x126723) {
    var _0x3c0bc5 = {
      adStarted: function () {
        _0x5cf36d("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        _0x5cf36d("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      },
      adError: function (_0x323ae6) {
        _0x5cf36d("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x323ae6));
      }
    };
    var _0x1ebfd2 = window.GMSOFT_GMADS_INFO.reward;
    var _0x406f2b = _0x1ebfd2[Math.floor(Math.random() * _0x1ebfd2.length)];
    try {
      var _0x333243 = document.createElement("div");
      _0x333243.id = "gm-ad-overlay";
      _0x333243.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0x1a6b87 = document.createElement("div");
      _0x1a6b87.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x16a69d = document.createElement("video");
      _0x16a69d.src = _0x406f2b.image;
      _0x16a69d.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
      _0x16a69d.autoplay = true;
      _0x16a69d.muted = true;
      _0x16a69d.preload = "auto";
      var _0x10807a = document.createElement("button");
      _0x10807a.innerHTML = "Skip (5)";
      _0x10807a.disabled = true;
      _0x10807a.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
      _0x10807a.disabled = true;
      _0x10807a.style.opacity = "0.5";
      var _0x435c81 = document.createElement("div");
      _0x435c81.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0x122f56 = document.createElement("div");
      _0x122f56.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0x20c542 = 5;
      var _0xb198ff = setInterval(function () {
        _0x20c542--;
        if (_0x20c542 > 0) {
          _0x10807a.innerHTML = "Skip (" + _0x20c542 + ")";
        } else {
          _0x10807a.innerHTML = "Skip";
          _0x10807a.disabled = false;
          _0x10807a.style.opacity = "1";
          _0x10807a.style.cursor = "pointer";
          clearInterval(_0xb198ff);
        }
      }, 1000);
      function _0x27d317() {
        if (_0x333243 && _0x333243.parentNode) {
          _0x333243.parentNode.removeChild(_0x333243);
        }
        clearInterval(_0xb198ff);
        _0x3c0bc5.adFinished();
      }
      function _0x38596c() {
        window.open(_0x406f2b.url, "_blank");
      }
      function _0x598c2d() {
        if (_0x16a69d.duration && _0x16a69d.currentTime) {
          var _0x197007 = _0x16a69d.currentTime / _0x16a69d.duration * 100;
          _0x122f56.style.width = _0x197007 + "%";
        }
      }
      _0x16a69d.addEventListener("loadstart", function () {
        _0x3c0bc5.adStarted();
      });
      _0x16a69d.addEventListener("timeupdate", function () {
        _0x598c2d();
      });
      _0x16a69d.addEventListener("ended", function () {
        _0x27d317();
      });
      _0x16a69d.addEventListener("error", function (_0x19923a) {
        var _0x1f8217 = {
          message: "Video load error",
          code: _0x19923a.target.error ? _0x19923a.target.error.code : "unknown"
        };
        _0x3c0bc5.adError(_0x1f8217);
        _0x27d317();
      });
      _0x16a69d.addEventListener("click", function () {
        _0x38596c();
      });
      _0x10807a.addEventListener("click", function () {
        if (!_0x10807a.disabled) {
          _0x27d317();
        }
      });
      _0x16a69d.addEventListener("contextmenu", function (_0x5c368d) {
        _0x5c368d.preventDefault();
      });
      _0x435c81.appendChild(_0x122f56);
      _0x1a6b87.appendChild(_0x16a69d);
      _0x1a6b87.appendChild(_0x10807a);
      _0x1a6b87.appendChild(_0x435c81);
      _0x333243.appendChild(_0x1a6b87);
      document.body.appendChild(_0x333243);
      _0x16a69d.play().catch(function (_0x18e529) {
        console.error("Video play error:", _0x18e529);
        _0x3c0bc5.adError({
          message: "Cannot play video",
          details: _0x18e529.message
        });
        _0x27d317();
      });
    } catch (_0x4f007) {
      console.error("Ad overlay creation error:", _0x4f007);
      _0x3c0bc5.adError({
        message: "Failed to create ad overlay",
        details: _0x4f007.message
      });
    }
  }
  function _0x946587() {
    try {
      console.log("Check local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      if (window.GMSOFT_SIGNED) {
        console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
        _0x5cf36d("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
        return;
      }
    } catch (_0xc17494) {
      console.error("Error getting GM_SDK_GetVeryfiedSignature  ", _0xc17494);
    }
    try {
      let _0x909a20 = "hn=" + "https://games.1games.io";
      let _0xd92b5d = btoa(_0x909a20);
      let _0x377592 = "https://api.cdnwave.com/sdkdom/keysigned";
      if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
        _0x377592 = window.GMSOFT_OPTIONS.signedurl;
      }
      let _0x2b74f6 = _0x377592 + "?params=" + _0xd92b5d;
      var _0x290f8f = new XMLHttpRequest();
      let _0x4dfc74 = "";
      _0x290f8f.open("GET", _0x2b74f6, false);
      _0x290f8f.send(_0x4dfc74);
      let _0xe31e1c = _0x290f8f.responseText;
      window.GMSOFT_SIGNED = _0xe31e1c;
      console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      _0x5cf36d("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
    } catch (_0x336b2c) {
      console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x336b2c);
    }
  }
  function _0x2b362d() {
    let _0x4033c5 = "https://games.1games.io";
    _0x5cf36d("GmSoft", "SetUnityHostName", _0x4033c5);
    _0x5cf36d("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
  }
  function _0x583054() {
    console.log("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x5cf36d("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
      });
    } catch (_0xf4bea8) {
      console.error("Error JS 12", _0xf4bea8);
    }
    try {
      gmStartAds(function () {
        _0x5cf36d("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
      });
    } catch (_0x488f8e) {
      console.error("Error JS 20", _0x488f8e);
    }
    try {
      document.addEventListener("gmsoftbanevent", _0x258307 => {
        _0x5cf36d("GmSoft", "LockGame", _0x258307.detail);
      });
    } catch (_0x2e303e) {
      console.error("Error JS 28", _0x2e303e);
    }
  }
  function _0x1f9d5c(_0x3d8a6f) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x3d8a6f);
    } catch (_0x40aca5) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x577d55() {
    try {
      window.CrazyGames.SDK.game.gameplayStart();
    } catch (_0x4fae67) {
      window.UnitySDK.logError("Error while calling gameplayStart:", _0x4fae67);
    }
  }
  function _0xa40311() {
    try {
      window.CrazyGames.SDK.game.gameplayStop();
    } catch (_0x2d5234) {
      window.UnitySDK.logError("Error while calling gameplayStop:", _0x2d5234);
    }
  }
  function _0x4d3553() {
    var _0x49d31c = firebaseConfig.projectId;
    var _0x593697 = _0x219de1(_0x49d31c) + 1;
    var _0x3d1896 = _0x18375c(_0x593697);
    _0x4cad61(_0x49d31c, _0x3d1896, _0x593697);
    return _0x3d1896;
  }
  function _0x3799a5(_0x4f44d3, _0x9d846e, _0x46fb7c, _0x1ae3db, _0x4d7a06) {
    var _0x27aaf7 = _0x51c742(_0x4f44d3);
    var _0x1c79ee = _0x51c742(_0x9d846e);
    var _0x26cb9a = _0x51c742(_0x46fb7c);
    var _0x23ad4f = _0x51c742(_0x1ae3db);
    var _0x400b9a = _0x51c742(_0x4d7a06);
    try {
      firebase.firestore().collection(_0x27aaf7).doc(_0x1c79ee).get().then(function (_0x28d4bf) {
        if (_0x28d4bf.exists) {
          window.unityInstance.SendMessage(_0x26cb9a, _0x23ad4f, JSON.stringify(_0x28d4bf.data()));
        } else {
          window.unityInstance.SendMessage(_0x26cb9a, _0x23ad4f, "null");
        }
      }).catch(function (_0x1d536b) {
        window.unityInstance.SendMessage(_0x26cb9a, _0x400b9a, JSON.stringify(_0x1d536b, Object.getOwnPropertyNames(_0x1d536b)));
      });
    } catch (_0xcc8db2) {
      window.unityInstance.SendMessage(_0x26cb9a, _0x400b9a, JSON.stringify(_0xcc8db2, Object.getOwnPropertyNames(_0xcc8db2)));
    }
  }
  function _0x5f14d6(_0xc039c9, _0x349fde, _0x14040f, _0x2004d5) {
    var _0x3c6ade = _0x51c742(_0xc039c9);
    var _0x4da30f = _0x51c742(_0x349fde);
    var _0xf1db0f = _0x51c742(_0x14040f);
    var _0x586730 = _0x51c742(_0x2004d5);
    try {
      firebase.firestore().collection(_0x3c6ade).get().then(function (_0x45cc9b) {
        var _0x3b69dc = {};
        _0x45cc9b.forEach(function (_0x21678c) {
          _0x3b69dc[_0x21678c.id] = _0x21678c.data();
        });
        window.unityInstance.SendMessage(_0x4da30f, _0xf1db0f, JSON.stringify(_0x3b69dc));
      }).catch(function (_0x5b168b) {
        window.unityInstance.SendMessage(_0x4da30f, _0x586730, JSON.stringify(_0x5b168b, Object.getOwnPropertyNames(_0x5b168b)));
      });
    } catch (_0x5eeee3) {
      window.unityInstance.SendMessage(_0x4da30f, _0x586730, JSON.stringify(_0x5eeee3, Object.getOwnPropertyNames(_0x5eeee3)));
    }
  }
  function _0x596756() {
    var _0x14d93e = window.CrazyGames.SDK.environment;
    var _0xdcdf8f = _0x219de1(_0x14d93e) + 1;
    var _0x599f6b = _0x18375c(_0xdcdf8f);
    _0x4cad61(_0x14d93e, _0x599f6b, _0xdcdf8f);
    return _0x599f6b;
  }
  function _0x1221cf() {
    var _0x3b555f = JSON.stringify(window.CrazyGames.SDK.game.settings);
    var _0x21e723 = _0x219de1(_0x3b555f) + 1;
    var _0x35fbf4 = _0x18375c(_0x21e723);
    _0x4cad61(_0x3b555f, _0x35fbf4, _0x21e723);
    return _0x35fbf4;
  }
  function _0x473115(_0x130638) {
    var _0x38a2e3 = new URLSearchParams(window.location.search);
    var _0x22c8fb = _0x38a2e3.get(window.unityStringify(_0x130638));
    if (_0x22c8fb === null) {
      _0x22c8fb = "";
    }
    var _0x5bae23 = _0x219de1(_0x22c8fb) + 1;
    var _0x5902e1 = _0x18375c(_0x5bae23);
    _0x4cad61(_0x22c8fb, _0x5902e1, _0x5bae23);
    return _0x5902e1;
  }
  function _0x2418de() {
    return window.CrazyGames.SDK.isQaTool;
  }
  function _0x16890c(_0x10e69b, _0xc4319c, _0x41f086, _0x22d858) {
    var _0x547750 = _0x51c742(_0x10e69b);
    var _0x445d08 = _0x51c742(_0xc4319c);
    var _0xfe8e01 = _0x51c742(_0x41f086);
    var _0x284798 = _0x51c742(_0x22d858);
    try {
      firebase.database().ref(_0x547750).once("value").then(function (_0x571b45) {
        window.unityInstance.SendMessage(_0x445d08, _0xfe8e01, JSON.stringify(_0x571b45.val()));
      });
    } catch (_0x5d2ecb) {
      window.unityInstance.SendMessage(_0x445d08, _0x284798, JSON.stringify(_0x5d2ecb, Object.getOwnPropertyNames(_0x5d2ecb)));
    }
  }
  function _0xf23b13() {
    var _0x48698d = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
    var _0x1da7ea = _0x219de1(_0x48698d) + 1;
    var _0x1973ca = _0x18375c(_0x1da7ea);
    _0x4cad61(_0x48698d, _0x1973ca, _0x1da7ea);
    return _0x1973ca;
  }
  function _0x18dd68() {
    window.CrazyGames.SDK.user.getUser().then(function (_0xd45f60) {
      _0x5cf36d("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        userJson: JSON.stringify(_0xd45f60)
      }));
    }).catch(function (_0xb92f54) {
      _0x5cf36d("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        errorJson: JSON.stringify(_0xb92f54)
      }));
    });
  }
  function _0x205091() {
    window.CrazyGames.SDK.user.getUserToken().then(function (_0x511930) {
      _0x5cf36d("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        token: _0x511930
      }));
    }).catch(function (_0xd1dd56) {
      _0x5cf36d("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0xd1dd56)
      }));
    });
  }
  function _0xdf0f17() {
    window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x5f16c5) {
      _0x5cf36d("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        token: _0x5f16c5
      }));
    }).catch(function (_0x1bf6d4) {
      _0x5cf36d("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x1bf6d4)
      }));
    });
  }
  function _0x102b71() {}
  function _0xb6d3bd() {
    console.log("afg.ready: " + afg.ready);
    if (afg.ready) {
      _0x5cf36d("H5Adverisement", "PreloadRewardedVideoCallback", 1);
      afg.adBreak({
        type: "reward",
        name: "reward ads",
        beforeReward: function (_0x33bcfd) {
          this._showRewardAdFn = _0x33bcfd;
          console.log("[H5 Ads] before reward");
        }.bind(this),
        adViewed: function () {
          this._showRewardAdFn = null;
          _0x5cf36d("H5Adverisement", "RewardedVideoSuccessCallback");
          console.log("[H5 Ads] ad viewed");
        }.bind(this),
        adDismissed: function () {
          this._showRewardAdFn = null;
          _0x5cf36d("H5Adverisement", "RewardedVideoFailureCallback");
          console.log("[H5 Ads] ad failure");
        }.bind(this),
        adBreakDone: function (_0x3b0a2d) {
          console.log("[H5 Ads] Reward break done");
          _0x5cf36d("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("[H5 Ads] no reward ads");
      _0x5cf36d("H5Adverisement", "PreloadRewardedVideoCallback", 0);
    }
  }
  function _0x659aab() {
    if (afg.ready) {
      afg.adBreak({
        type: "next",
        name: "next",
        beforeAd: function () {
          afg.onBeforeAd();
          console.log("[H5 Ads] Before ad");
          _0x5cf36d("H5Adverisement", "PauseGameCallback");
        }.bind(this),
        adBreakDone: function () {
          console.log("[H5 Ads] Ad break done");
          _0x5cf36d("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("no " + adType + " ads");
      _0x5cf36d("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x1021df() {
    if (this._showRewardAdFn) {
      _0x5cf36d("H5Adverisement", "PauseGameCallback");
      this._showRewardAdFn();
    } else {
      _0x5cf36d("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x5340b2() {
    try {
      window.CrazyGames.SDK.game.happytime();
    } catch (_0x180a8f) {
      window.UnitySDK.logError("Error while calling happytime:", _0x180a8f);
    }
  }
  function _0x4ed9c4() {
    try {
      window.CrazyGames.SDK.game.hideInviteButton();
    } catch (_0x2a9a3f) {
      window.UnitySDK.logError("Error while calling hideInviteButton:", _0x2a9a3f);
    }
  }
  function _0x5342fd(_0x84042c, _0x520675, _0x43f883, _0x90e495, _0x5ad3a8, _0x570ace, _0x4791fc) {
    var _0x191517 = _0x51c742(_0x84042c);
    var _0x55d74f = _0x51c742(_0x520675);
    var _0x3a277f = _0x51c742(_0x43f883);
    var _0xa506e9 = _0x51c742(_0x5ad3a8);
    var _0x1d1e03 = _0x51c742(_0x570ace);
    var _0x4c8211 = _0x51c742(_0x4791fc);
    try {
      var _0x892bbb = {};
      _0x892bbb[_0x3a277f] = firebase.firestore.FieldValue.increment(_0x90e495);
      firebase.firestore().collection(_0x191517).doc(_0x55d74f).update(_0x892bbb).then(function () {
        window.unityInstance.SendMessage(_0xa506e9, _0x1d1e03, "Success: incremented " + _0x3a277f + " by " + _0x90e495);
      }).catch(function (_0x110858) {
        window.unityInstance.SendMessage(_0xa506e9, _0x4c8211, JSON.stringify(_0x110858, Object.getOwnPropertyNames(_0x110858)));
      });
    } catch (_0x5dbc9c) {
      window.unityInstance.SendMessage(_0xa506e9, _0x4c8211, JSON.stringify(_0x5dbc9c, Object.getOwnPropertyNames(_0x5dbc9c)));
    }
  }
  function _0x3f11e9(_0x4d0ab5) {
    if (typeof _0x51c742 !== "undefined") {
      window.unityStringify = _0x51c742;
    } else {
      window.unityStringify = _0x51c742;
    }
    window.UnitySDK = {
      version: window.unityStringify(_0x4d0ab5),
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
        var _0x2af79a = Array.prototype.slice.call(arguments);
        _0x2af79a.unshift("[JsLib]");
        console.error.apply(console, _0x2af79a);
      }
    };
    var _0x10bcf5 = {
      wrapper: {
        engine: "unity",
        sdkVersion: window.unityStringify(_0x4d0ab5)
      }
    };
    var _0x33843d = document.createElement("script");
    _0x33843d.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
    document.head.appendChild(_0x33843d);
    _0x33843d.addEventListener("load", function () {
      window.CrazyGames.SDK.init(_0x10bcf5).then(function () {
        _0x5cf36d("CrazySDKSingleton", "JSLibCallback_Init");
        window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x55352c) {
          _0x5cf36d("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x55352c ? 1 : 0);
        }).catch(function (_0x2e3ae0) {
          window.UnitySDK.logError("Error while checking adblock:", _0x2e3ae0);
          _0x5cf36d("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        });
        window.CrazyGames.SDK.user.addAuthListener(function (_0xf614c6) {
          _0x5cf36d("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
            userJson: JSON.stringify(_0xf614c6)
          }));
        });
      });
    });
  }
  function _0x32db5d() {
    return window.CrazyGames.SDK.user.isUserAccountAvailable;
  }
  var _0x141675 = null;
  var _0x5ce6f1 = 0;
  function _0x288c3f() {
    return _0x141675 && _0x141675.activated || _0x5ce6f1 != 0;
  }
  var _0x13f45e = 1;
  var _0x1dd8cc = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0x38ea88() {
    _0x1dd8cc = {
      x: _0x141675.x * _0x13f45e,
      y: _0x141675.y * _0x13f45e,
      z: _0x141675.z * _0x13f45e
    };
    if (_0x5ce6f1 != 0) {
      _0x36eebc(_0x5ce6f1, _0x1dd8cc.x, _0x1dd8cc.y, _0x1dd8cc.z);
    }
  }
  var _0x4f94ae = 0;
  var _0x2cb54f = 0;
  var _0x47a859 = 0;
  var _0x16b6d7 = 0;
  var _0x549e94 = 0;
  function _0xda9af6(_0x255ed7, _0x399d3f) {
    var _0x37eb85 = {
      x: _0x255ed7.x - _0x399d3f.x,
      y: _0x255ed7.y - _0x399d3f.y,
      z: _0x255ed7.z - _0x399d3f.z
    };
    var _0xa97f76 = _0x37eb85.x * _0x37eb85.x + _0x37eb85.y * _0x37eb85.y + _0x37eb85.z * _0x37eb85.z;
    var _0x343fee = {
      x: _0x255ed7.x + _0x399d3f.x,
      y: _0x255ed7.y + _0x399d3f.y,
      z: _0x255ed7.z + _0x399d3f.z
    };
    var _0x512374 = _0x343fee.x * _0x343fee.x + _0x343fee.y * _0x343fee.y + _0x343fee.z * _0x343fee.z;
    if (_0xa97f76 <= _0x512374) {
      return _0x37eb85;
    } else {
      return _0x343fee;
    }
  }
  function _0x8f58bf(_0x4af8e1) {
    var _0x2fc8ba = {
      x: _0x4af8e1.accelerationIncludingGravity.x * _0x13f45e,
      y: _0x4af8e1.accelerationIncludingGravity.y * _0x13f45e,
      z: _0x4af8e1.accelerationIncludingGravity.z * _0x13f45e
    };
    if (_0x5ce6f1 != 0) {
      _0x36eebc(_0x5ce6f1, _0x2fc8ba.x, _0x2fc8ba.y, _0x2fc8ba.z);
    }
    var _0x463511 = {
      x: _0x4af8e1.acceleration.x * _0x13f45e,
      y: _0x4af8e1.acceleration.y * _0x13f45e,
      z: _0x4af8e1.acceleration.z * _0x13f45e
    };
    if (_0x47a859 != 0) {
      _0x36eebc(_0x47a859, _0x463511.x, _0x463511.y, _0x463511.z);
    }
    if (_0x16b6d7 != 0) {
      var _0x2b2318 = _0xda9af6(_0x2fc8ba, _0x463511);
      _0x36eebc(_0x16b6d7, _0x2b2318.x, _0x2b2318.y, _0x2b2318.z);
    }
    if (_0x549e94 != 0) {
      var _0x333f99 = Math.PI / 180;
      _0x36eebc(_0x549e94, _0x4af8e1.rotationRate.alpha * _0x333f99, _0x4af8e1.rotationRate.beta * _0x333f99, _0x4af8e1.rotationRate.gamma * _0x333f99);
    }
  }
  var _0x4a1865 = 0;
  function _0x381c47(_0x1ae17d) {
    if (_0x1ae17d & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0x66bbd0) {
          if (_0x66bbd0 === "granted") {
            _0x4a1865 &= ~1;
          } else {
            _0x596987("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x2117be) {
          _0x596987(_0x2117be);
          _0x4a1865 |= 1;
        });
      }
    }
    if (_0x1ae17d & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x2b244c) {
          if (_0x2b244c === "granted") {
            _0x4a1865 &= ~2;
          } else {
            _0x596987("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0x3e55ee) {
          _0x596987(_0x3e55ee);
          _0x4a1865 |= 2;
        });
      }
    }
  }
  function _0xe94ec0() {
    if (_0x5ce6f1 == 0 && _0x47a859 == 0 && _0x16b6d7 == 0 && _0x549e94 == 0) {
      _0x381c47(2);
      window.addEventListener("devicemotion", _0x8f58bf);
    }
  }
  function _0x55f51b() {
    var _0x38e4cf = 9.80665;
    _0x13f45e = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x38e4cf : -1 / _0x38e4cf;
  }
  function _0x33a157(_0x4b0cec, _0x54c5b8) {
    _0x55f51b();
    if (typeof Accelerometer === "undefined") {
      _0xe94ec0();
      if (_0x4b0cec != 0) {
        _0x5ce6f1 = _0x4b0cec;
      }
      return;
    }
    if (_0x4b0cec != 0) {
      _0x5ce6f1 = _0x4b0cec;
    }
    function _0x292d1e(_0x59f32e) {
      _0x141675 = new Accelerometer({
        frequency: _0x59f32e,
        referenceFrame: "device"
      });
      _0x141675.addEventListener("reading", _0x38ea88);
      _0x141675.addEventListener("error", function (_0x219bd9) {
        _0x596987(_0x219bd9.error ? _0x219bd9.error : _0x219bd9);
      });
      _0x141675.start();
      _0x2cb54f = _0x59f32e;
    }
    if (_0x141675) {
      if (_0x2cb54f != _0x54c5b8) {
        _0x141675.stop();
        _0x141675.removeEventListener("reading", _0x38ea88);
        _0x292d1e(_0x54c5b8);
      }
    } else if (_0x4f94ae != 0) {
      _0x4f94ae = _0x54c5b8;
    } else {
      _0x4f94ae = _0x54c5b8;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x332007) {
        if (_0x332007.state === "granted") {
          _0x292d1e(_0x4f94ae);
        } else {
          _0x596987("No permission to use Accelerometer.");
        }
        _0x4f94ae = 0;
      });
    }
  }
  function _0x3db844() {
    if (_0x5ce6f1 == 0 && _0x47a859 == 0 && _0x16b6d7 == 0 && _0x549e94 == 0) {
      window.removeEventListener("devicemotion", _0x40065c);
    }
  }
  function _0x9be929() {
    if (_0x141675) {
      if (typeof GravitySensor !== "undefined" || _0x16b6d7 == 0) {
        _0x141675.stop();
        _0x141675.removeEventListener("reading", _0x38ea88);
        _0x141675 = null;
      }
      _0x5ce6f1 = 0;
      _0x2cb54f = 0;
    } else if (_0x5ce6f1 != 0) {
      _0x5ce6f1 = 0;
      _0x3db844();
    }
  }
  function _0x1330af(_0x3af949, _0x555878) {
    var _0x3e3187 = "";
    for (var _0x4f2a51 = 0; _0x4f2a51 < _0x555878; _0x4f2a51++) {
      _0x3e3187 += String.fromCharCode(_0x12f402[_0x3af949 + _0x4f2a51]);
    }
    _0x5c0d54.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x3e3187) + "),default";
  }
  function _0x2e284b(_0x2220b4) {
    _0x5c0d54.canvas.style.cursor = _0x2220b4 ? "default" : "none";
  }
  function _0x414cfc(_0x4f1e68) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0x4f1e68);
    }
    return _0x4f1e68.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x20e790() {
    var _0x10a41a = _0x5c0d54.canvas ? _0x5c0d54.canvas.id : "unity-canvas";
    return "#" + _0x414cfc(_0x10a41a);
  }
  function _0x59cb62(_0x88e261, _0x14f5a6, _0x3dcab7, _0x5cc086) {
    var _0x10450f = document.querySelector(_0x20e790());
    var _0x320982 = _0x10450f && _0x10450f.getBoundingClientRect();
    _0x1ee1a1[_0x3dcab7 >> 2] = _0x88e261 - (_0x320982 ? _0x320982.left : 0);
    _0x1ee1a1[_0x5cc086 >> 2] = _0x14f5a6 - (_0x320982 ? _0x320982.top : 0);
  }
  function _0x4cf08f(_0x768ab7) {
    var _0x28655d = _0x219de1(_0x768ab7) + 1;
    var _0x352f12 = _0x18375c(_0x28655d);
    _0x4cad61(_0x768ab7, _0x352f12, _0x28655d);
    return _0x352f12;
  }
  function _0x68fa0f() {
    var _0x2bf9b5 = _0x20e790();
    if (_0x68fa0f.selector != _0x2bf9b5) {
      _0xf67877(_0x68fa0f.ptr);
      _0x68fa0f.ptr = _0x4cf08f(_0x2bf9b5);
      _0x68fa0f.selector = _0x2bf9b5;
    }
    return _0x68fa0f.ptr;
  }
  function _0x3cf6c6(_0x345e9b) {
    var _0x7ef3a9 = _0x51c742(_0x345e9b);
    try {
      eval(_0x7ef3a9);
    } catch (_0x2aa3a4) {
      console.error(_0x2aa3a4);
    }
  }
  function _0x9b4db4(_0x797fc7) {
    var _0x1936c1 = _0x51c742(_0x797fc7);
    window.open(_0x1936c1, "_blank", "");
  }
  var _0x159456 = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0x4e57c3) {
      if (_0x4e57c3) {
        if (_0x159456.numPendingSync == 0) {
          return;
        }
      } else if (_0x159456.syncInProgress) {
        _0x159456.numPendingSync++;
        return;
      }
      _0x159456.syncInProgress = true;
      _0x453483.syncfs(false, function (_0x35bb9d) {
        _0x159456.syncInProgress = false;
      });
      _0x159456.numPendingSync = 0;
    }
  };
  function _0x5edcda() {
    _0x5c0d54.setInterval(function () {
      _0x159456.sync(true);
    }, _0x159456.syncInternal);
  }
  function _0x312343() {
    _0x159456.sync(false);
  }
  var _0x2d1a7d = null;
  function _0x1b00ff() {
    if (typeof GravitySensor !== "undefined") {
      return _0x2d1a7d && _0x2d1a7d.activated;
    } else {
      return _0x16b6d7 != 0;
    }
  }
  function _0x5a0404() {
    if (_0x16b6d7 != 0) {
      _0x36eebc(_0x16b6d7, _0x2d1a7d.x * _0x13f45e, _0x2d1a7d.y * _0x13f45e, _0x2d1a7d.z * _0x13f45e);
    }
  }
  var _0x20a9e1 = 0;
  var _0x1fb704 = null;
  function _0x4bc824() {
    var _0x233235 = {
      x: _0x1fb704.x * _0x13f45e,
      y: _0x1fb704.y * _0x13f45e,
      z: _0x1fb704.z * _0x13f45e
    };
    if (_0x47a859 != 0) {
      _0x36eebc(_0x47a859, _0x233235.x, _0x233235.y, _0x233235.z);
    }
    if (_0x16b6d7 != 0 && typeof GravitySensor === "undefined") {
      var _0x53d446 = _0xda9af6(_0x1dd8cc, _0x233235);
      _0x36eebc(_0x16b6d7, _0x53d446.x, _0x53d446.y, _0x53d446.z);
    }
  }
  var _0x2f0f78 = 0;
  var _0x14c3b4 = 0;
  function _0x18ebda(_0xefa8de, _0x45b1db) {
    _0x55f51b();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0xe94ec0();
      if (_0xefa8de != 0) {
        _0x47a859 = _0xefa8de;
      }
      return;
    }
    if (_0xefa8de != 0) {
      _0x47a859 = _0xefa8de;
    }
    function _0x178ac6(_0x4b906e) {
      _0x1fb704 = new LinearAccelerationSensor({
        frequency: _0x4b906e,
        referenceFrame: "device"
      });
      _0x1fb704.addEventListener("reading", _0x4bc824);
      _0x1fb704.addEventListener("error", function (_0x36a342) {
        _0x596987(_0x36a342.error ? _0x36a342.error : _0x36a342);
      });
      _0x1fb704.start();
      _0x14c3b4 = _0x4b906e;
    }
    if (_0x1fb704) {
      if (_0x14c3b4 != _0x45b1db) {
        _0x1fb704.stop();
        _0x1fb704.removeEventListener("reading", _0x4bc824);
        _0x178ac6(_0x45b1db);
      }
    } else if (_0x2f0f78 != 0) {
      _0x2f0f78 = _0x45b1db;
    } else {
      _0x2f0f78 = _0x45b1db;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x58c5c2) {
        if (_0x58c5c2.state === "granted") {
          _0x178ac6(_0x2f0f78);
        } else {
          _0x596987("No permission to use LinearAccelerationSensor.");
        }
        _0x2f0f78 = 0;
      });
    }
  }
  function _0x488222(_0x1b9581, _0x5667ad) {
    if (typeof GravitySensor === "undefined") {
      _0x33a157(0, Math.max(_0x5667ad, _0x2cb54f));
      _0x18ebda(0, Math.max(_0x5667ad, _0x14c3b4));
      _0x16b6d7 = _0x1b9581;
      return;
    }
    _0x55f51b();
    _0x16b6d7 = _0x1b9581;
    function _0xc3847e(_0x224499) {
      _0x2d1a7d = new GravitySensor({
        frequency: _0x224499,
        referenceFrame: "device"
      });
      _0x2d1a7d.addEventListener("reading", _0x5a0404);
      _0x2d1a7d.addEventListener("error", function (_0x3fa80f) {
        _0x596987(_0x3fa80f.error ? _0x3fa80f.error : _0x3fa80f);
      });
      _0x2d1a7d.start();
    }
    if (_0x2d1a7d) {
      _0x2d1a7d.stop();
      _0x2d1a7d.removeEventListener("reading", _0x5a0404);
      _0xc3847e(_0x5667ad);
    } else if (_0x20a9e1 != 0) {
      _0x20a9e1 = _0x5667ad;
    } else {
      _0x20a9e1 = _0x5667ad;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x524ce1) {
        if (_0x524ce1.state === "granted") {
          _0xc3847e(_0x20a9e1);
        } else {
          _0x596987("No permission to use GravitySensor.");
        }
        _0x20a9e1 = 0;
      });
    }
  }
  function _0x4371d4() {
    if (_0x1fb704) {
      if (typeof GravitySensor !== "undefined" || _0x16b6d7 == 0) {
        _0x1fb704.stop();
        _0x1fb704.removeEventListener("reading", _0x4bc824);
        _0x1fb704 = null;
      }
      _0x47a859 = 0;
      _0x14c3b4 = 0;
    } else if (_0x47a859 != 0) {
      _0x47a859 = 0;
      _0x3db844();
    }
  }
  function _0x11f751() {
    _0x16b6d7 = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x5ce6f1 == 0) {
        _0x9be929();
      }
      if (_0x47a859 == 0) {
        _0x4371d4();
      }
      return;
    }
    if (_0x2d1a7d) {
      _0x2d1a7d.stop();
      _0x2d1a7d.removeEventListener("reading", _0x5a0404);
      _0x2d1a7d = null;
    }
  }
  function _0x585fa0(_0x40ac11) {
    try {
      (function () {
        _0x1c1467.call(null, _0x40ac11);
      })();
    } catch (_0x3bebc8) {
      console.warn(_0x3bebc8);
    }
  }
  var _0x4a0f16 = null;
  function _0x259cab() {
    return _0x4a0f16 && _0x4a0f16.activated || _0x549e94 != 0;
  }
  function _0x3f183f() {
    if (_0x549e94 != 0) {
      _0x36eebc(_0x549e94, _0x4a0f16.x, _0x4a0f16.y, _0x4a0f16.z);
    }
  }
  var _0x58830a = 0;
  function _0xca700a(_0xbe0c61, _0x239dae) {
    if (typeof Gyroscope === "undefined") {
      _0xe94ec0();
      _0x549e94 = _0xbe0c61;
      return;
    }
    _0x549e94 = _0xbe0c61;
    function _0x558b1f(_0x376284) {
      _0x4a0f16 = new Gyroscope({
        frequency: _0x376284,
        referenceFrame: "device"
      });
      _0x4a0f16.addEventListener("reading", _0x3f183f);
      _0x4a0f16.addEventListener("error", function (_0x10e4b9) {
        _0x596987(_0x10e4b9.error ? _0x10e4b9.error : _0x10e4b9);
      });
      _0x4a0f16.start();
    }
    if (_0x4a0f16) {
      _0x4a0f16.stop();
      _0x4a0f16.removeEventListener("reading", _0x3f183f);
      _0x558b1f(_0x239dae);
    } else if (_0x58830a != 0) {
      _0x58830a = _0x239dae;
    } else {
      _0x58830a = _0x239dae;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x1cd8c2) {
        if (_0x1cd8c2.state === "granted") {
          _0x558b1f(_0x58830a);
        } else {
          _0x596987("No permission to use Gyroscope.");
        }
        _0x58830a = 0;
      });
    }
  }
  function _0x387a28() {
    if (_0x4a0f16) {
      _0x4a0f16.stop();
      _0x4a0f16.removeEventListener("reading", _0x3f183f);
      _0x4a0f16 = null;
      _0x549e94 = 0;
    } else if (_0x549e94 != 0) {
      _0x549e94 = 0;
      _0x3db844();
    }
  }
  function _0x3f810f() {
    const _0x126cd8 = function (_0x54ac87) {
      if (_0x54ac87.target.localName !== "canvas") {
        _0x19a314();
      }
    };
    document.addEventListener("contextmenu", _0x126cd8);
    _0x5c0d54.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0x126cd8);
    });
  }
  function _0x431e36() {
    return _0x1fb704 && _0x1fb704.activated || _0x47a859 != 0;
  }
  function _0x4b7eb9(_0x598994, _0x5182dd) {
    var _0x2cd4fc = _0x51c742(_0x598994);
    if (typeof dump == "function") {
      dump(_0x2cd4fc);
    }
    switch (_0x5182dd) {
      case 0:
      case 1:
      case 4:
        console.error(_0x2cd4fc);
        return;
      case 2:
        console.warn(_0x2cd4fc);
        return;
      case 3:
      case 5:
        console.log(_0x2cd4fc);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(_0x2cd4fc);
    }
  }
  function _0x50dd20(_0xd463a9, _0x1c399c) {
    var _0x1e186e = _0x4e533e();
    if (_0xd463a9) {
      _0x4cad61(_0x1e186e, _0xd463a9, _0x1c399c);
    }
    return _0x219de1(_0x1e186e);
  }
  var _0x203e9e = null;
  var _0x297e16 = 0;
  function _0x5a71c1() {
    return _0x203e9e && _0x203e9e.activated || _0x297e16 != 0;
  }
  function _0x1ff46b() {
    if (_0x297e16 != 0) {
      _0xeaff5a(_0x297e16, _0x203e9e.quaternion[0], _0x203e9e.quaternion[1], _0x203e9e.quaternion[2], _0x203e9e.quaternion[3]);
    }
  }
  var _0x215600 = 0;
  function _0x40065c(_0x5c6687) {
    if (_0x297e16) {
      var _0x29ad71 = Math.PI / 180;
      var _0x5dd3be = _0x5c6687.beta * _0x29ad71;
      var _0x4d2d53 = _0x5c6687.gamma * _0x29ad71;
      var _0x4a9fed = _0x5c6687.alpha * _0x29ad71;
      var _0x386ea6 = Math.cos(_0x5dd3be / 2);
      var _0x536a34 = Math.sin(_0x5dd3be / 2);
      var _0x736514 = Math.cos(_0x4d2d53 / 2);
      var _0xf079e2 = Math.sin(_0x4d2d53 / 2);
      var _0x5113e2 = Math.cos(_0x4a9fed / 2);
      var _0x1f5a6b = Math.sin(_0x4a9fed / 2);
      var _0x588b0e = _0x536a34 * _0x736514 * _0x5113e2 - _0x386ea6 * _0xf079e2 * _0x1f5a6b;
      var _0x2d3ee6 = _0x386ea6 * _0xf079e2 * _0x5113e2 + _0x536a34 * _0x736514 * _0x1f5a6b;
      var _0x33f7b9 = _0x386ea6 * _0x736514 * _0x1f5a6b + _0x536a34 * _0xf079e2 * _0x5113e2;
      var _0x18e69c = _0x386ea6 * _0x736514 * _0x5113e2 - _0x536a34 * _0xf079e2 * _0x1f5a6b;
      _0xeaff5a(_0x297e16, _0x588b0e, _0x2d3ee6, _0x33f7b9, _0x18e69c);
    }
  }
  function _0x37d29d(_0x28a1d6, _0x309b51) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0x297e16 == 0) {
        _0x297e16 = _0x28a1d6;
        _0x381c47(1);
        window.addEventListener("deviceorientation", _0x40065c);
      }
      return;
    }
    _0x297e16 = _0x28a1d6;
    function _0x299fd2(_0x213eaa) {
      _0x203e9e = new RelativeOrientationSensor({
        frequency: _0x213eaa,
        referenceFrame: "device"
      });
      _0x203e9e.addEventListener("reading", _0x1ff46b);
      _0x203e9e.addEventListener("error", function (_0x396890) {
        _0x596987(_0x396890.error ? _0x396890.error : _0x396890);
      });
      _0x203e9e.start();
    }
    if (_0x203e9e) {
      _0x203e9e.stop();
      _0x203e9e.removeEventListener("reading", _0x1ff46b);
      _0x299fd2(_0x309b51);
    } else if (_0x215600 != 0) {
      _0x215600 = _0x309b51;
    } else {
      _0x215600 = _0x309b51;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0x86f0df) {
        if (_0x86f0df.every(function (_0x4595fa) {
          return _0x4595fa.state === "granted";
        })) {
          _0x299fd2(_0x215600);
        } else {
          _0x596987("No permissions to use RelativeOrientationSensor.");
        }
        _0x215600 = 0;
      });
    }
  }
  function _0x411bd2() {
    if (_0x203e9e) {
      _0x203e9e.stop();
      _0x203e9e.removeEventListener("reading", _0x1ff46b);
      _0x203e9e = null;
    } else if (_0x297e16 != 0) {
      window.removeEventListener("deviceorientation", _0x40065c);
    }
    _0x297e16 = 0;
  }
  function _0x17d9ae() {
    if (_0x4a1865 == 0) {
      return;
    }
    _0x381c47(_0x4a1865);
  }
  function _0x27f90c() {
    _0x5c0d54.QuitCleanup();
  }
  var _0x13529d = 0;
  function _0x273ab4() {
    if (_0x13529d) {
      _0x58cad7(_0x13529d, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0x160b78() {
    _0x13529d = 0;
    window.removeEventListener("resize", _0x273ab4);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x273ab4);
    }
  }
  function _0x413678(_0x4f0a6b) {
    if (!_0x13529d) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x273ab4);
      }
      window.addEventListener("resize", _0x273ab4);
      _0x13529d = _0x4f0a6b;
      setTimeout(_0x273ab4, 0);
    }
  }
  var _0x7729db = -1;
  var _0x296ed3 = -1;
  var _0x4019bd = -1;
  function _0x2bb6a3(_0x4133e5) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0x3f6ca9() {
      _0x296ed3 = _0x7729db;
      var _0x5b7c99 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x2896d7 = _0x5b7c99[_0x296ed3];
      screen.orientation.lock(_0x2896d7).then(function () {
        if (_0x7729db != _0x296ed3) {
          _0x4019bd = setTimeout(_0x3f6ca9, 0);
        } else {
          _0x4019bd = -1;
        }
      }).catch(function (_0x32fde9) {
        _0x596987(_0x32fde9);
        _0x4019bd = -1;
      });
    }
    _0x7729db = _0x4133e5;
    if (_0x4019bd == -1 && _0x4133e5 != _0x296ed3) {
      _0x4019bd = setTimeout(_0x3f6ca9, 0);
    }
  }
  var _0x2f2685 = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0x4d6fdc(_0x47f17f) {
    _0x47f17f.estimatePlaybackPosition = function () {
      var _0x46730e = (_0x2f2685.audioContext.currentTime - _0x47f17f.playbackStartTime) * _0x47f17f.playbackRate.value;
      if (_0x47f17f.loop && _0x46730e >= _0x47f17f.loopStart) {
        _0x46730e = (_0x46730e - _0x47f17f.loopStart) % (_0x47f17f.loopEnd - _0x47f17f.loopStart) + _0x47f17f.loopStart;
      }
      return _0x46730e;
    };
    _0x47f17f.setPitch = function (_0x4de91c) {
      var _0x5209e1 = _0x47f17f.estimatePlaybackPosition();
      if (_0x5209e1 >= 0) {
        _0x47f17f.playbackStartTime = _0x2f2685.audioContext.currentTime - _0x5209e1 / _0x4de91c;
      }
      if (_0x47f17f.playbackRate.value !== _0x4de91c) {
        _0x47f17f.playbackRate.value = _0x4de91c;
      }
    };
  }
  function _0xb109b8(_0x270b16, _0x134d2b) {
    var _0x5d5f23 = {
      buffer: _0x270b16,
      error: _0x134d2b
    };
    _0x5d5f23.release = function () {};
    _0x5d5f23.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x501965 = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x501965;
    };
    _0x5d5f23.getData = function (_0x38375f, _0x3d451d) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0x2237c2 = _0x38375f >> 2;
      var _0x2037ab = _0x3e31eb.subarray(_0x2237c2, _0x2237c2 + (_0x3d451d >> 2));
      var _0x6b20dd = Math.floor((_0x3d451d >> 2) / this.buffer.numberOfChannels);
      var _0x14babb = Math.min(this.buffer.length, _0x6b20dd);
      for (var _0x51fd0c = 0; _0x51fd0c < this.buffer.numberOfChannels; _0x51fd0c++) {
        var _0x557467 = this.buffer.getChannelData(_0x51fd0c).subarray(0, _0x14babb);
        _0x2037ab.set(_0x557467, _0x51fd0c * _0x14babb);
      }
      return _0x14babb * this.buffer.numberOfChannels * 4;
    };
    _0x5d5f23.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0x5d5f23.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0x5d5f23.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x7ad0df = _0x2f2685.audioContext.createBufferSource();
      _0x7ad0df.buffer = this.buffer;
      _0x4d6fdc(_0x7ad0df);
      return _0x7ad0df;
    };
    return _0x5d5f23;
  }
  function _0xca8409(_0x3daf2a, _0x5c6de6) {
    var _0x242f4c = {
      callback: _0x3daf2a,
      userData: _0x5c6de6,
      source: null,
      gain: _0x2f2685.audioContext.createGain(),
      panner: _0x2f2685.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x242f4c.panner.rolloffFactor = 0;
    _0x242f4c.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x242f4c.playSoundClip = function (_0x16f440, _0x29e3f1, _0x578ad8) {
      try {
        var _0x4b1245 = this;
        this.source = _0x16f440.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0x4b1245.source.isStopped = true;
          _0x4b1245.disconnectSource();
          if (_0x4b1245.callback) {
            _0x507d94("vi", _0x4b1245.callback, [_0x4b1245.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0x29e3f1, _0x578ad8);
        this.source.playbackStartTime = _0x29e3f1 - _0x578ad8 / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x527564) {
        console.error("Channel.playSoundClip error. Exception: " + _0x527564);
      }
    };
    _0x242f4c.stop = function (_0x2287f6) {
      if (!this.source) {
        return;
      }
      try {
        _0x242f4c.source.stop(_0x2f2685.audioContext.currentTime + _0x2287f6);
      } catch (_0x212968) {}
      if (_0x2287f6 == 0) {
        this.disconnectSource();
      }
    };
    _0x242f4c.isPaused = function () {
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
    _0x242f4c.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x14e601 = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0x36b184) {
          this.playbackRate = _0x36b184;
        },
        stop: function (_0x2d74c5) {
          this.scheduledStopTime = _0x2d74c5;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x14e601;
    };
    _0x242f4c.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x1ce983 = this.source;
      var _0x134f9e = _0xb109b8(_0x1ce983.buffer, false);
      this.playSoundClip(_0x134f9e, _0x2f2685.audioContext.currentTime, Math.max(0, _0x1ce983.playbackPausedAtPosition));
      this.source.loop = _0x1ce983.loop;
      this.source.loopStart = _0x1ce983.loopStart;
      this.source.loopEnd = _0x1ce983.loopEnd;
      this.source.setPitch(_0x1ce983.playbackRate);
      if (typeof _0x1ce983.scheduledStopTime !== "undefined") {
        var _0x367964 = Math.max(_0x1ce983.scheduledStopTime - _0x2f2685.audioContext.currentTime, 0);
        this.stop(_0x367964);
      }
    };
    _0x242f4c.setLoop = function (_0x23a0e5) {
      this.loop = _0x23a0e5;
      if (!this.source || this.source.loop == _0x23a0e5) {
        return;
      }
      this.source.loop = _0x23a0e5;
    };
    _0x242f4c.setLoopPoints = function (_0x256eb5, _0x45c23f) {
      this.loopStart = _0x256eb5;
      this.loopEnd = _0x45c23f;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x256eb5) {
        this.source.loopStart = _0x256eb5;
      }
      if (this.source.loopEnd !== _0x45c23f) {
        this.source.loopEnd = _0x45c23f;
      }
    };
    _0x242f4c.set3D = function (_0x3772d2) {
      if (this.threeD == _0x3772d2) {
        return;
      }
      this.threeD = _0x3772d2;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x242f4c.setPitch = function (_0x37cb2a) {
      this.pitch = _0x37cb2a;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x37cb2a);
    };
    _0x242f4c.setVolume = function (_0x2f898f) {
      if (this.gain.gain.value == _0x2f898f) {
        return;
      }
      this.gain.gain.value = _0x2f898f;
    };
    _0x242f4c.setPosition = function (_0x36b6d9, _0x3943f5, _0x23df94) {
      var _0x333e64 = this.panner;
      if (_0x333e64.positionX) {
        if (_0x333e64.positionX.value !== _0x36b6d9) {
          _0x333e64.positionX.value = _0x36b6d9;
        }
        if (_0x333e64.positionY.value !== _0x3943f5) {
          _0x333e64.positionY.value = _0x3943f5;
        }
        if (_0x333e64.positionZ.value !== _0x23df94) {
          _0x333e64.positionZ.value = _0x23df94;
        }
      } else if (_0x333e64._x !== _0x36b6d9 || _0x333e64._y !== _0x3943f5 || _0x333e64._z !== _0x23df94) {
        _0x333e64.setPosition(_0x36b6d9, _0x3943f5, _0x23df94);
        _0x333e64._x = _0x36b6d9;
        _0x333e64._y = _0x3943f5;
        _0x333e64._z = _0x23df94;
      }
    };
    _0x242f4c.disconnectSource = function () {
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
    _0x242f4c.setupPanning = function () {
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
      this.gain.connect(_0x2f2685.audioContext.destination);
    };
    _0x242f4c.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x242f4c;
  }
  function _0x30c720(_0x2646c3, _0xf1704c) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return;
    }
    _0x2f2685.audioInstances[++_0x2f2685.audioInstanceIdCounter] = _0xca8409(_0x2646c3, _0xf1704c);
    return _0x2f2685.audioInstanceIdCounter;
  }
  function _0x2e3b3f(_0x46098b, _0x2c04f3, _0x1e5d3d) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return 0;
    }
    var _0x55061b = _0x2f2685.audioInstances[_0x46098b];
    if (!_0x55061b) {
      return 0;
    }
    return _0x55061b.getData(_0x2c04f3, _0x1e5d3d);
  }
  function _0x5f2adb(_0x53a7ff) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return 0;
    }
    var _0x2653e4 = _0x2f2685.audioInstances[_0x53a7ff];
    if (!_0x2653e4) {
      return 0;
    }
    return _0x2653e4.getLength();
  }
  function _0x511222(_0x337408) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return 2;
    }
    var _0x523812 = _0x2f2685.audioInstances[_0x337408];
    if (_0x523812.error) {
      return 2;
    }
    if (_0x523812.buffer || _0x523812.url) {
      return 0;
    }
    return 1;
  }
  function _0x22509c(_0x35d18b, _0x333daf) {
    if (_0x2f2685.audioWebEnabled == 0) {
      _0x1ee1a1[_0x333daf >> 2] = 0;
      _0x1ee1a1[(_0x333daf >> 2) + 1] = 0;
      return false;
    }
    var _0x2cb827 = _0x2f2685.audioInstances[_0x35d18b];
    if (!_0x2cb827) {
      _0x1ee1a1[_0x333daf >> 2] = 0;
      _0x1ee1a1[(_0x333daf >> 2) + 1] = 0;
      return false;
    }
    _0x1ee1a1[_0x333daf >> 2] = _0x2cb827.getNumberOfChannels();
    _0x1ee1a1[(_0x333daf >> 2) + 1] = _0x2cb827.getFrequency();
    return true;
  }
  function _0x17533c(_0x23ad65) {
    var _0x1832f7 = _0x2f2685.pendingAudioSources[_0x23ad65];
    _0x1832f7.sourceNode._startPlayback(_0x1832f7.offset);
    delete _0x2f2685.pendingAudioSources[_0x23ad65];
  }
  function _0x188611() {
    Object.keys(_0x2f2685.pendingAudioSources).forEach(function (_0x2a7230) {
      _0x17533c(_0x2a7230);
    });
  }
  function _0x185c7c() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x2f2685.audioContext = new AudioContext();
      function _0x530ea9() {
        if (_0x2f2685.audioContext.state === "suspended") {
          _0x2f2685.audioContext.resume().catch(function (_0x2d81f6) {
            console.warn("Could not resume audio context. Exception: " + _0x2d81f6);
          });
        } else {
          _0x5c0d54.clearInterval(_0xfc4437);
        }
      }
      var _0xfc4437 = _0x5c0d54.setInterval(_0x530ea9, 400);
      _0x2f2685.audioWebEnabled = 1;
      function _0x2e3404() {
        try {
          if (_0x2f2685.audioContext.state !== "running" && _0x2f2685.audioContext.state !== "closed") {
            _0x2f2685.audioContext.resume().catch(function (_0x335b7b) {
              console.warn("Could not resume audio context. Exception: " + _0x335b7b);
            });
          }
          _0x188611();
          var _0x2793fa = 20;
          while (_0x2f2685.audioCache.length < _0x2793fa) {
            var _0x330847 = new Audio();
            _0x330847.autoplay = false;
            _0x2f2685.audioCache.push(_0x330847);
          }
        } catch (_0xf73842) {}
      }
      window.addEventListener("mousedown", _0x2e3404);
      window.addEventListener("touchstart", _0x2e3404);
      _0x5c0d54.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x2e3404);
        window.removeEventListener("touchstart", _0x2e3404);
      });
    } catch (_0x357f6a) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x29bcfb(_0x146f6e) {
    var _0x22df89 = _0xb109b8(null, false);
    _0x2f2685.audioContext.decodeAudioData(_0x146f6e, function (_0x5b6125) {
      _0x22df89.buffer = _0x5b6125;
    }, function (_0x1470e6) {
      _0x22df89.error = true;
      console.log("Decode error: " + _0x1470e6);
    });
    return _0x22df89;
  }
  function _0x450762(_0x2c7465, _0x115272) {
    _0x2f2685.pendingAudioSources[_0x2c7465.mediaElement.src] = {
      sourceNode: _0x2c7465,
      offset: _0x115272
    };
  }
  function _0x1f688a(_0x2a4813) {
    switch (_0x2a4813) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x2a063f(_0x56d246, _0x2978af) {
    var _0x12e114 = _0x1f688a(_0x2978af);
    var _0x4f52d0 = new Blob([_0x56d246], {
      type: _0x12e114
    });
    var _0x58b80b = {
      url: URL.createObjectURL(_0x4f52d0),
      error: false,
      mediaElement: new Audio()
    };
    _0x58b80b.mediaElement.preload = "metadata";
    _0x58b80b.mediaElement.src = _0x58b80b.url;
    _0x58b80b.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x58b80b.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x58b80b.getData = function (_0xe90c2b, _0x5ca292) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x58b80b.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x58b80b.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x58b80b.createSourceNode = function () {
      var _0x17884a = this;
      var _0x281be8 = _0x2f2685.audioCache.length ? _0x2f2685.audioCache.pop() : new Audio();
      _0x281be8.preload = "metadata";
      _0x281be8.src = this.url;
      var _0x49bc86 = _0x2f2685.audioContext.createMediaElementSource(_0x281be8);
      Object.defineProperty(_0x49bc86, "loop", {
        get: function () {
          return _0x49bc86.mediaElement.loop;
        },
        set: function (_0x4c3a55) {
          if (_0x49bc86.mediaElement.loop !== _0x4c3a55) {
            _0x49bc86.mediaElement.loop = _0x4c3a55;
          }
        }
      });
      _0x49bc86.playbackRate = {};
      Object.defineProperty(_0x49bc86.playbackRate, "value", {
        get: function () {
          return _0x49bc86.mediaElement.playbackRate;
        },
        set: function (_0x1b48d1) {
          if (_0x49bc86.mediaElement.playbackRate !== _0x1b48d1) {
            _0x49bc86.mediaElement.playbackRate = _0x1b48d1;
          }
        }
      });
      Object.defineProperty(_0x49bc86, "currentTime", {
        get: function () {
          return _0x49bc86.mediaElement.currentTime;
        },
        set: function (_0x3b76e6) {
          if (_0x49bc86.mediaElement.currentTime !== _0x3b76e6) {
            _0x49bc86.mediaElement.currentTime = _0x3b76e6;
          }
        }
      });
      Object.defineProperty(_0x49bc86, "mute", {
        get: function () {
          return _0x49bc86.mediaElement.mute;
        },
        set: function (_0x1d46af) {
          if (_0x49bc86.mediaElement.mute !== _0x1d46af) {
            _0x49bc86.mediaElement.mute = _0x1d46af;
          }
        }
      });
      Object.defineProperty(_0x49bc86, "onended", {
        get: function () {
          return _0x49bc86.mediaElement.onended;
        },
        set: function (_0x484966) {
          _0x49bc86.mediaElement.onended = _0x484966;
        }
      });
      _0x49bc86.playPromise = null;
      _0x49bc86.playTimeout = null;
      _0x49bc86.pauseRequested = false;
      _0x49bc86.isStopped = false;
      _0x49bc86._pauseMediaElement = function () {
        if (_0x49bc86.playPromise || _0x49bc86.playTimeout) {
          _0x49bc86.pauseRequested = true;
        } else {
          _0x49bc86.mediaElement.pause();
        }
      };
      _0x49bc86._startPlayback = function (_0x3a3b61) {
        if (_0x49bc86.playPromise || _0x49bc86.playTimeout) {
          _0x49bc86.mediaElement.currentTime = _0x3a3b61;
          _0x49bc86.pauseRequested = false;
          return;
        }
        _0x49bc86.mediaElement.currentTime = _0x3a3b61;
        _0x49bc86.playPromise = _0x49bc86.mediaElement.play();
        if (_0x49bc86.playPromise) {
          _0x49bc86.playPromise.then(function () {
            if (_0x49bc86.pauseRequested) {
              _0x49bc86.mediaElement.pause();
              _0x49bc86.pauseRequested = false;
            }
            _0x49bc86.playPromise = null;
          }).catch(function (_0x377097) {
            _0x49bc86.playPromise = null;
            if (_0x377097.name !== "NotAllowedError") {
              throw _0x377097;
            }
            _0x450762(_0x49bc86, _0x3a3b61);
          });
        }
      };
      _0x49bc86.start = function (_0x31b246, _0x21f930) {
        if (typeof _0x31b246 === "undefined") {
          _0x31b246 = _0x2f2685.audioContext.currentTime;
        }
        if (typeof _0x21f930 === "undefined") {
          _0x21f930 = 0;
        }
        var _0x13c2f2 = 4;
        var _0x2421e1 = (_0x31b246 - _0x2f2685.audioContext.currentTime) * 1000;
        if (_0x2421e1 > _0x13c2f2) {
          _0x49bc86.playTimeout = setTimeout(function () {
            _0x49bc86.playTimeout = null;
            _0x49bc86._startPlayback(_0x21f930);
          }, _0x2421e1);
        } else {
          _0x49bc86._startPlayback(_0x21f930);
        }
      };
      _0x49bc86.stop = function (_0x2c0e80) {
        if (typeof _0x2c0e80 === "undefined") {
          _0x2c0e80 = _0x2f2685.audioContext.currentTime;
        }
        var _0x3e3ac2 = 4;
        var _0x1d3567 = (_0x2c0e80 - _0x2f2685.audioContext.currentTime) * 1000;
        if (_0x1d3567 > _0x3e3ac2) {
          setTimeout(function () {
            _0x49bc86._pauseMediaElement();
            _0x49bc86.isStopped = true;
          }, _0x1d3567);
        } else {
          _0x49bc86._pauseMediaElement();
          _0x49bc86.isStopped = true;
        }
      };
      _0x4d6fdc(_0x49bc86);
      return _0x49bc86;
    };
    return _0x58b80b;
  }
  function _0x180814(_0x40941d, _0x14dbce, _0x2d2417, _0x199d36) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return 0;
    }
    var _0x4186c3 = _0x12f402.buffer.slice(_0x40941d, _0x40941d + _0x14dbce);
    if (_0x14dbce < 131072) {
      _0x2d2417 = 1;
    }
    var _0x8f4c56;
    if (_0x2d2417) {
      _0x8f4c56 = _0x29bcfb(_0x4186c3);
    } else {
      _0x8f4c56 = _0x2a063f(_0x4186c3, _0x199d36);
    }
    _0x2f2685.audioInstances[++_0x2f2685.audioInstanceIdCounter] = _0x8f4c56;
    return _0x2f2685.audioInstanceIdCounter;
  }
  function _0x1f434d(_0x4a01d6, _0xed8c74, _0x41be08, _0x4a8360) {
    var _0x57e08a = _0x2f2685.audioContext.createBuffer(_0x4a01d6, _0xed8c74, _0x41be08);
    for (var _0x301aa3 = 0; _0x301aa3 < _0x4a01d6; _0x301aa3++) {
      var _0x3d631b = (_0x4a8360 >> 2) + _0xed8c74 * _0x301aa3;
      var _0x172fbf = _0x57e08a.copyToChannel || function (_0x4c563b, _0x27c2ac, _0x201710) {
        var _0x486c10 = _0x4c563b.subarray(0, Math.min(_0x4c563b.length, this.length - (_0x201710 | 0)));
        this.getChannelData(_0x27c2ac | 0).set(_0x486c10, _0x201710 | 0);
      };
      _0x172fbf.apply(_0x57e08a, [_0x3e31eb.subarray(_0x3d631b, _0x3d631b + _0xed8c74), _0x301aa3, 0]);
    }
    return _0xb109b8(_0x57e08a, false);
  }
  function _0x3d3bee(_0x2b2dd9, _0x4647c8, _0x1cf833, _0x4a901d) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return 0;
    }
    var _0x34f604 = _0x1f434d(_0x2b2dd9, _0x4647c8, _0x1cf833, _0x4a901d);
    _0x2f2685.audioInstances[++_0x2f2685.audioInstanceIdCounter] = _0x34f604;
    return _0x2f2685.audioInstanceIdCounter;
  }
  function _0x1e8ee0(_0x4e7ef7, _0x13c711, _0x300c26, _0x4490b5) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return;
    }
    _0x37502d(_0x13c711, 0);
    var _0x36fe25 = _0x2f2685.audioInstances[_0x4e7ef7];
    var _0x592251 = _0x2f2685.audioInstances[_0x13c711];
    if (!_0x36fe25) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x592251.playSoundClip(_0x36fe25, _0x2f2685.audioContext.currentTime + _0x4490b5, _0x300c26);
    } catch (_0x2f9f9a) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x1d1d2c(_0x529652) {
    var _0x376e03 = _0x2f2685.audioInstances[_0x529652];
    if (_0x376e03) {
      _0x376e03.release();
    }
    delete _0x2f2685.audioInstances[_0x529652];
  }
  function _0x3c09cc() {
    if (_0x2f2685.audioWebEnabled == 0) {
      return;
    }
    if (_0x2f2685.audioContext.state === "suspended") {
      _0x2f2685.audioContext.resume().catch(function (_0x44beb2) {
        console.warn("Could not resume audio context. Exception: " + _0x44beb2);
      });
    }
  }
  function _0x4dcf51(_0x3642f9, _0x2489db) {
    var _0x50424f = _0x2f2685.audioInstances[_0x3642f9];
    _0x50424f.set3D(_0x2489db);
  }
  function _0x26d5d4(_0x5af19b, _0x259621, _0x434e85, _0x3e8284, _0x44a684, _0x37a06d) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return;
    }
    _0x5af19b = -_0x5af19b;
    _0x259621 = -_0x259621;
    _0x434e85 = -_0x434e85;
    var _0x2cb886 = _0x2f2685.audioContext.listener;
    if (_0x2cb886.forwardX) {
      if (_0x2cb886.forwardX.value !== _0x5af19b) {
        _0x2cb886.forwardX.value = _0x5af19b;
      }
      if (_0x2cb886.forwardY.value !== _0x259621) {
        _0x2cb886.forwardY.value = _0x259621;
      }
      if (_0x2cb886.forwardZ.value !== _0x434e85) {
        _0x2cb886.forwardZ.value = _0x434e85;
      }
      if (_0x2cb886.upX.value !== _0x3e8284) {
        _0x2cb886.upX.value = _0x3e8284;
      }
      if (_0x2cb886.upY.value !== _0x44a684) {
        _0x2cb886.upY.value = _0x44a684;
      }
      if (_0x2cb886.upZ.value !== _0x37a06d) {
        _0x2cb886.upZ.value = _0x37a06d;
      }
    } else if (_0x2cb886._forwardX !== _0x5af19b || _0x2cb886._forwardY !== _0x259621 || _0x2cb886._forwardZ !== _0x434e85 || _0x2cb886._upX !== _0x3e8284 || _0x2cb886._upY !== _0x44a684 || _0x2cb886._upZ !== _0x37a06d) {
      _0x2cb886.setOrientation(_0x5af19b, _0x259621, _0x434e85, _0x3e8284, _0x44a684, _0x37a06d);
      _0x2cb886._forwardX = _0x5af19b;
      _0x2cb886._forwardY = _0x259621;
      _0x2cb886._forwardZ = _0x434e85;
      _0x2cb886._upX = _0x3e8284;
      _0x2cb886._upY = _0x44a684;
      _0x2cb886._upZ = _0x37a06d;
    }
  }
  function _0x293b9a(_0x5c415b, _0x4e9e0f, _0x5582c7) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return;
    }
    var _0x3b6365 = _0x2f2685.audioContext.listener;
    if (_0x3b6365.positionX) {
      if (_0x3b6365.positionX.value !== _0x5c415b) {
        _0x3b6365.positionX.value = _0x5c415b;
      }
      if (_0x3b6365.positionY.value !== _0x4e9e0f) {
        _0x3b6365.positionY.value = _0x4e9e0f;
      }
      if (_0x3b6365.positionZ.value !== _0x5582c7) {
        _0x3b6365.positionZ.value = _0x5582c7;
      }
    } else if (_0x3b6365._positionX !== _0x5c415b || _0x3b6365._positionY !== _0x4e9e0f || _0x3b6365._positionZ !== _0x5582c7) {
      _0x3b6365.setPosition(_0x5c415b, _0x4e9e0f, _0x5582c7);
      _0x3b6365._positionX = _0x5c415b;
      _0x3b6365._positionY = _0x4e9e0f;
      _0x3b6365._positionZ = _0x5582c7;
    }
  }
  function _0x32528c(_0x5a4e1a, _0x4d577b) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return;
    }
    var _0x53dca2 = _0x2f2685.audioInstances[_0x5a4e1a];
    _0x53dca2.setLoop(_0x4d577b);
  }
  function _0x59fca6(_0x2a2433, _0x3f7da9, _0x112545) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return;
    }
    var _0xa91b17 = _0x2f2685.audioInstances[_0x2a2433];
    _0xa91b17.setLoopPoints(_0x3f7da9, _0x112545);
  }
  function _0x164f1f(_0x57027a, _0x1acc18) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return;
    }
    var _0x249d7f = _0x2f2685.audioInstances[_0x57027a];
    if (_0x1acc18 != _0x249d7f.isPaused()) {
      if (_0x1acc18) {
        _0x249d7f.pause();
      } else {
        _0x249d7f.resume();
      }
    }
  }
  function _0x227694(_0x5671f7, _0x3acda8) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x402777 = _0x2f2685.audioInstances[_0x5671f7];
      _0x402777.setPitch(_0x3acda8);
    } catch (_0x3e2881) {
      console.error("JS_Sound_SetPitch(channel=" + _0x5671f7 + ", pitch=" + _0x3acda8 + ") threw an exception: " + _0x3e2881);
    }
  }
  function _0x2dd8b5(_0x5659c8, _0x2e8ef9, _0x5ec598, _0x165125) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return;
    }
    var _0x5ccee4 = _0x2f2685.audioInstances[_0x5659c8];
    _0x5ccee4.setPosition(_0x2e8ef9, _0x5ec598, _0x165125);
  }
  function _0x59a98e(_0x1e4d85, _0x50262d) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x451fe2 = _0x2f2685.audioInstances[_0x1e4d85];
      _0x451fe2.setVolume(_0x50262d);
    } catch (_0x5d38f3) {
      console.error("JS_Sound_SetVolume(channel=" + _0x1e4d85 + ", volume=" + _0x50262d + ") threw an exception: " + _0x5d38f3);
    }
  }
  function _0x37502d(_0x543d2d, _0x1483d5) {
    if (_0x2f2685.audioWebEnabled == 0) {
      return;
    }
    var _0xb3f372 = _0x2f2685.audioInstances[_0x543d2d];
    _0xb3f372.stop(_0x1483d5);
  }
  function _0x44031f(_0x425508, _0x100ec9) {
    var _0x3dbead = _0x5c0d54.SystemInfo.browser;
    if (_0x425508) {
      _0x4cad61(_0x3dbead, _0x425508, _0x100ec9);
    }
    return _0x219de1(_0x3dbead);
  }
  function _0xb5e63(_0x34820f, _0x557fb8) {
    var _0x429c05 = _0x5c0d54.SystemInfo.browserVersion;
    if (_0x34820f) {
      _0x4cad61(_0x429c05, _0x34820f, _0x557fb8);
    }
    return _0x219de1(_0x429c05);
  }
  function _0x491fa1(_0x23e530, _0x2af3bd, _0x3d0a6f) {
    var _0xb23db1 = _0x51c742(_0x23e530);
    var _0x525dd5 = _0xb23db1 == "#canvas" ? _0x5c0d54.canvas : document.querySelector(_0xb23db1);
    var _0x333f0c = 0;
    var _0x5901f7 = 0;
    if (_0x525dd5) {
      var _0x312f64 = _0x525dd5.getBoundingClientRect();
      _0x333f0c = _0x312f64.width;
      _0x5901f7 = _0x312f64.height;
    }
    _0xbff719[_0x2af3bd >> 3] = _0x333f0c;
    _0xbff719[_0x3d0a6f >> 3] = _0x5901f7;
  }
  function _0x596336(_0x7565f0, _0x3f45b0) {
    if (_0x7565f0) {
      _0x4cad61("https://games.1games.io", _0x7565f0, _0x3f45b0);
    }
    return _0x219de1("https://games.1games.io");
  }
  function _0x1a7537(_0x42307a, _0x5bf1df) {
    var _0x374bfc = _0x5c0d54.SystemInfo.gpu;
    if (_0x42307a) {
      _0x4cad61(_0x374bfc, _0x42307a, _0x5bf1df);
    }
    return _0x219de1(_0x374bfc);
  }
  function _0x2edc3b(_0x3e3008, _0x788d03) {
    var _0x4e0846 = _0x5c0d54.SystemInfo.language;
    if (_0x3e3008) {
      _0x4cad61(_0x4e0846, _0x3e3008, _0x788d03);
    }
    return _0x219de1(_0x4e0846);
  }
  function _0x1a6bca() {
    return _0x5c0d54.matchWebGLToCanvasSize || _0x5c0d54.matchWebGLToCanvasSize === undefined;
  }
  function _0x58f6e6() {
    return _0x12f402.length / 1048576;
  }
  function _0xc17e43(_0x22e9ff, _0x3a0543) {
    var _0x4b6038 = _0x5c0d54.SystemInfo.os + " " + _0x5c0d54.SystemInfo.osVersion;
    if (_0x22e9ff) {
      _0x4cad61(_0x4b6038, _0x22e9ff, _0x3a0543);
    }
    return _0x219de1(_0x4b6038);
  }
  function _0x2df8f5() {
    if (_0x5c0d54.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0x5c0d54.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0x51db19(_0x627442, _0x38328e) {
    _0xbff719[_0x627442 >> 3] = _0x5c0d54.SystemInfo.width;
    _0xbff719[_0x38328e >> 3] = _0x5c0d54.SystemInfo.height;
  }
  function _0x39345c(_0x41afc7, _0x3c4b32) {
    if (_0x41afc7) {
      _0x4cad61(_0x5c0d54.streamingAssetsUrl, _0x41afc7, _0x3c4b32);
    }
    return _0x219de1(_0x5c0d54.streamingAssetsUrl);
  }
  function _0x165a88() {
    var _0x4d3112 = _0x3afc48.getExtension("WEBGL_compressed_texture_astc");
    if (_0x4d3112 && _0x4d3112.getSupportedProfiles) {
      return _0x4d3112.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0x1717ab() {
    return _0x5c0d54.SystemInfo.hasCursorLock;
  }
  function _0x15ba40() {
    return _0x5c0d54.SystemInfo.hasFullscreen;
  }
  function _0xda6a0a() {
    return _0x5c0d54.SystemInfo.hasWebGL;
  }
  function _0x23c877() {
    return _0x5c0d54.SystemInfo.mobile;
  }
  function _0x4ef91f() {
    return !!_0x5c0d54.shouldQuit;
  }
  var _0x501273 = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0x2a429c(_0x38df47) {
    var _0x373e3a = _0x501273.abortControllers[_0x38df47];
    if (!_0x373e3a || _0x373e3a.signal.aborted) {
      return;
    }
    _0x373e3a.abort();
  }
  function _0x1c53df(_0x5a89f8, _0x3cc108) {
    var _0x252010 = _0x51c742(_0x5a89f8);
    var _0x3d5996 = _0x51c742(_0x3cc108);
    var _0x116937 = new AbortController();
    var _0x50df0c = {
      url: _0x252010,
      init: {
        method: _0x3d5996,
        signal: _0x116937.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0x501273.abortControllers[_0x501273.nextRequestId] = _0x116937;
    _0x501273.requests[_0x501273.nextRequestId] = _0x50df0c;
    return _0x501273.nextRequestId++;
  }
  function _0x1df613(_0x790ae3) {
    var _0x23b95e = _0x501273.responses[_0x790ae3];
    if (!_0x23b95e) {
      return "";
    }
    if (_0x23b95e.headerString) {
      return _0x23b95e.headerString;
    }
    var _0x136b99 = "";
    var _0x3cf88c = _0x23b95e.headers.entries();
    for (var _0x23b428 = _0x3cf88c.next(); !_0x23b428.done; _0x23b428 = _0x3cf88c.next()) {
      _0x136b99 += _0x23b428.value[0] + ": " + _0x23b428.value[1] + "\r\n";
    }
    _0x23b95e.headerString = _0x136b99;
    return _0x136b99;
  }
  function _0x2a48d7(_0x1969ca, _0x5350ae, _0x227c48, _0x29d49c, _0x35ad0e) {
    var _0x4163d6 = _0x501273.responses[_0x1969ca];
    if (!_0x4163d6) {
      _0x4cad61("", _0x5350ae, _0x227c48);
      _0x4cad61("", _0x29d49c, _0x35ad0e);
      return;
    }
    if (_0x5350ae) {
      var _0x155e66 = _0x1df613(_0x1969ca);
      _0x4cad61(_0x155e66, _0x5350ae, _0x227c48);
    }
    if (_0x29d49c) {
      _0x4cad61(_0x4163d6.url, _0x29d49c, _0x35ad0e);
    }
  }
  function _0x30a698(_0x5168ef, _0x20aed5) {
    var _0x585230 = _0x501273.responses[_0x5168ef];
    if (!_0x585230) {
      _0x1ee1a1[_0x20aed5 >> 2] = 0;
      _0x1ee1a1[(_0x20aed5 >> 2) + 1] = 0;
      return;
    }
    var _0x502988 = _0x1df613(_0x5168ef);
    _0x1ee1a1[_0x20aed5 >> 2] = _0x219de1(_0x502988);
    _0x1ee1a1[(_0x20aed5 >> 2) + 1] = _0x219de1(_0x585230.url);
  }
  function _0x6e8e69(_0x13fd81) {
    if (_0x501273.timer[_0x13fd81]) {
      clearTimeout(_0x501273.timer[_0x13fd81]);
    }
    delete _0x501273.requests[_0x13fd81];
    delete _0x501273.responses[_0x13fd81];
    delete _0x501273.abortControllers[_0x13fd81];
    delete _0x501273.timer[_0x13fd81];
  }
  function _0x47fb4b(_0x49e964, _0x10ef53, _0x2f6324, _0x365b4c, _0x45cfb9, _0x17ab52) {
    var _0x5792a7 = _0x501273.requests[_0x49e964];
    var _0x3b70a2 = _0x501273.abortControllers[_0x49e964];
    function _0x53f3c7(_0x1d93f4) {
      if (!_0x5792a7.tempBuffer) {
        const _0x45eb20 = Math.max(_0x1d93f4, 1024);
        _0x5792a7.tempBuffer = _0x18375c(_0x45eb20);
        _0x5792a7.tempBufferSize = _0x45eb20;
      }
      if (_0x5792a7.tempBufferSize < _0x1d93f4) {
        _0xf67877(_0x5792a7.tempBuffer);
        _0x5792a7.tempBuffer = _0x18375c(_0x1d93f4);
        _0x5792a7.tempBufferSize = _0x1d93f4;
      }
      return _0x5792a7.tempBuffer;
    }
    function _0xeb6fb8() {
      if (_0x501273.timer[_0x49e964]) {
        clearTimeout(_0x501273.timer[_0x49e964]);
        delete _0x501273.timer[_0x49e964];
      }
    }
    function _0x9a9e18(_0x4d2a5d, _0x32178a) {
      _0xeb6fb8();
      if (!_0x45cfb9) {
        return;
      }
      var _0x2747f9 = 0;
      if (_0x5792a7.init.enableStreamingDownload) {
        _0x507d94("viiiiii", _0x45cfb9, [_0x365b4c, _0x4d2a5d.status, 0, _0x32178a.length, 0, _0x2747f9]);
      } else if (_0x32178a.length != 0) {
        var _0x1ac653 = _0x18375c(_0x32178a.length);
        _0x12f402.set(_0x32178a, _0x1ac653);
        _0x507d94("viiiiii", _0x45cfb9, [_0x365b4c, _0x4d2a5d.status, _0x1ac653, _0x32178a.length, 0, _0x2747f9]);
      } else {
        _0x507d94("viiiiii", _0x45cfb9, [_0x365b4c, _0x4d2a5d.status, 0, 0, 0, _0x2747f9]);
      }
      if (_0x5792a7.tempBuffer) {
        _0xf67877(_0x5792a7.tempBuffer);
      }
    }
    function _0xf53007(_0x2d2270, _0x3f4c3c) {
      _0xeb6fb8();
      if (!_0x45cfb9) {
        return;
      }
      var _0x41ddb1 = _0x219de1(_0x2d2270) + 1;
      var _0x36a7da = _0x18375c(_0x41ddb1);
      _0x4cad61(_0x2d2270, _0x36a7da, _0x41ddb1);
      _0x507d94("viiiiii", _0x45cfb9, [_0x365b4c, 500, 0, 0, _0x36a7da, _0x3f4c3c]);
      _0xf67877(_0x36a7da);
      if (_0x5792a7.tempBuffer) {
        _0xf67877(_0x5792a7.tempBuffer);
      }
    }
    function _0x3c2d55(_0x117905) {
      if (!_0x17ab52 || !_0x117905.lengthComputable) {
        return;
      }
      var _0x2a76c7 = _0x117905.response;
      _0x501273.responses[_0x49e964] = _0x2a76c7;
      if (_0x117905.chunk) {
        var _0x4c97da = _0x53f3c7(_0x117905.chunk.length);
        _0x12f402.set(_0x117905.chunk, _0x4c97da);
        _0x507d94("viiiiii", _0x17ab52, [_0x365b4c, _0x2a76c7.status, _0x117905.loaded, _0x117905.total, _0x4c97da, _0x117905.chunk.length]);
      } else {
        _0x507d94("viiiiii", _0x17ab52, [_0x365b4c, _0x2a76c7.status, _0x117905.loaded, _0x117905.total, 0, 0]);
      }
    }
    try {
      if (_0x2f6324 > 0) {
        var _0x7ff33e = _0x12f402.subarray(_0x10ef53, _0x10ef53 + _0x2f6324);
        _0x5792a7.init.body = new Blob([_0x7ff33e]);
      }
      if (_0x5792a7.timeout) {
        _0x501273.timer[_0x49e964] = setTimeout(function () {
          _0x5792a7.isTimedOut = true;
          _0x3b70a2.abort();
        }, _0x5792a7.timeout);
      }
      var _0x2a6fa4 = _0x5c0d54.fetchWithProgress;
      _0x5792a7.init.onProgress = _0x3c2d55;
      if (_0x5c0d54.companyName && _0x5c0d54.productName && _0x5c0d54.cachedFetch) {
        _0x2a6fa4 = _0x5c0d54.cachedFetch;
        _0x5792a7.init.companyName = _0x5c0d54.companyName;
        _0x5792a7.init.productName = _0x5c0d54.productName;
        _0x5792a7.control = _0x5c0d54.cacheControl(_0x5792a7.url);
      }
      _0x2a6fa4(_0x5792a7.url, _0x5792a7.init).then(function (_0x2f9059) {
        _0x501273.responses[_0x49e964] = _0x2f9059;
        _0x9a9e18(_0x2f9059, _0x2f9059.parsedBody);
      }).catch(function (_0x2c01fe) {
        var _0x362a5d = 2;
        var _0x42a554 = 17;
        var _0x57b908 = 14;
        if (_0x5792a7.isTimedOut) {
          _0xf53007("Connection timed out.", _0x57b908);
        } else if (_0x3b70a2.signal.aborted) {
          _0xf53007("Aborted.", _0x42a554);
        } else {
          _0xf53007(_0x2c01fe.message, _0x362a5d);
        }
      });
    } catch (_0x4713de) {
      var _0x209f29 = 2;
      _0xf53007(_0x4713de.message, _0x209f29);
    }
  }
  function _0x1198b3(_0x27a97c, _0x19b232) {
    var _0x14ca26 = _0x501273.requests[_0x27a97c];
    if (!_0x14ca26) {
      return;
    }
    _0x14ca26.init.redirect = _0x19b232 === 0 ? "error" : "follow";
  }
  function _0x566a30(_0x1f0110, _0x51c00b, _0x3c09be) {
    var _0x215379 = _0x501273.requests[_0x1f0110];
    if (!_0x215379) {
      return;
    }
    var _0x10d8ec = _0x51c742(_0x51c00b);
    var _0x2ff7f0 = _0x51c742(_0x3c09be);
    _0x215379.init.headers[_0x10d8ec] = _0x2ff7f0;
  }
  function _0x3493e8(_0x5e5080, _0xebefdb) {
    var _0x2dac19 = _0x501273.requests[_0x5e5080];
    if (!_0x2dac19) {
      return;
    }
    _0x2dac19.timeout = _0xebefdb;
  }
  function _0x5d2b55(_0x1fa501, _0xca588e, _0x20a98a, _0x4759ae) {
    var _0x31072b = _0x51c742(_0x1fa501);
    var _0x56cec0 = _0x51c742(_0xca588e);
    var _0x478d22 = _0x51c742(_0x20a98a);
    var _0x454254 = _0x51c742(_0x4759ae);
    try {
      firebase.database().ref(_0x31072b).on("child_added", function (_0x303591) {
        window.unityInstance.SendMessage(_0x56cec0, _0x478d22, JSON.stringify(_0x303591.val()));
      });
    } catch (_0x55c240) {
      window.unityInstance.SendMessage(_0x56cec0, _0x454254, JSON.stringify(_0x55c240, Object.getOwnPropertyNames(_0x55c240)));
    }
  }
  function _0x576112(_0x5e7d6d, _0xc87927, _0x4670e1, _0x4ba7ae) {
    var _0x3d7591 = _0x51c742(_0x5e7d6d);
    var _0x12f60b = _0x51c742(_0xc87927);
    var _0xd11489 = _0x51c742(_0x4670e1);
    var _0x27e220 = _0x51c742(_0x4ba7ae);
    try {
      firebase.database().ref(_0x3d7591).on("child_changed", function (_0x5664df) {
        window.unityInstance.SendMessage(_0x12f60b, _0xd11489, JSON.stringify(_0x5664df.val()));
      });
    } catch (_0xa83f23) {
      window.unityInstance.SendMessage(_0x12f60b, _0x27e220, JSON.stringify(_0xa83f23, Object.getOwnPropertyNames(_0xa83f23)));
    }
  }
  function _0x5c07cb(_0x14dbb5, _0x5263b4, _0x313988, _0x1acebf) {
    var _0x3e9452 = _0x51c742(_0x14dbb5);
    var _0x528cc9 = _0x51c742(_0x5263b4);
    var _0x6ac224 = _0x51c742(_0x313988);
    var _0x5bc370 = _0x51c742(_0x1acebf);
    try {
      firebase.database().ref(_0x3e9452).on("child_removed", function (_0x17c351) {
        window.unityInstance.SendMessage(_0x528cc9, _0x6ac224, JSON.stringify(_0x17c351.val()));
      });
    } catch (_0x10b846) {
      window.unityInstance.SendMessage(_0x528cc9, _0x5bc370, JSON.stringify(_0x10b846, Object.getOwnPropertyNames(_0x10b846)));
    }
  }
  function _0x567fcc(_0x1e4a98, _0x14f4e4, _0x37f043, _0x12bc11, _0x4f6816) {
    var _0x40085a = _0x51c742(_0x1e4a98);
    var _0x44e108 = _0x51c742(_0x37f043);
    var _0x13bfae = _0x51c742(_0x12bc11);
    var _0x515d21 = _0x51c742(_0x4f6816);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x40085a + "/collection/"] = firebase.firestore().collection(_0x40085a).onSnapshot({
        includeMetadataChanges: _0x14f4e4 == 1
      }, function (_0x9288a2) {
        var _0x269eed = {};
        _0x9288a2.forEach(function (_0x3be174) {
          _0x269eed[_0x3be174.id] = _0x3be174.data();
        });
        window.unityInstance.SendMessage(_0x44e108, _0x13bfae, JSON.stringify(_0x269eed));
      }, function (_0x2a02fa) {
        window.unityInstance.SendMessage(_0x44e108, _0x515d21, JSON.stringify(_0x2a02fa, Object.getOwnPropertyNames(_0x2a02fa)));
      });
    } catch (_0x3aa894) {
      window.unityInstance.SendMessage(_0x44e108, _0x515d21, JSON.stringify(_0x3aa894, Object.getOwnPropertyNames(_0x3aa894)));
    }
  }
  function _0x4b8964(_0x3ea9e2, _0xce7d0c, _0x3b807d, _0x52fc55, _0x3f55f8, _0x1cae24) {
    var _0x1fbd70 = _0x51c742(_0x3ea9e2);
    var _0x393847 = _0x51c742(_0xce7d0c);
    var _0x158dbe = _0x51c742(_0x52fc55);
    var _0x1988df = _0x51c742(_0x3f55f8);
    var _0x2022d9 = _0x51c742(_0x1cae24);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x1fbd70 + "/" + _0x393847] = firebase.firestore().collection(_0x1fbd70).doc(_0x393847).onSnapshot({
        includeMetadataChanges: _0x3b807d == 1
      }, function (_0x186b15) {
        window.unityInstance.SendMessage(_0x158dbe, _0x1988df, JSON.stringify(_0x186b15.data()));
      }, function (_0x474429) {
        window.unityInstance.SendMessage(_0x158dbe, _0x2022d9, JSON.stringify(_0x474429, Object.getOwnPropertyNames(_0x474429)));
      });
    } catch (_0x4d66c4) {
      window.unityInstance.SendMessage(_0x158dbe, _0x2022d9, JSON.stringify(_0x4d66c4, Object.getOwnPropertyNames(_0x4d66c4)));
    }
  }
  function _0x4b7e26(_0x4071f3, _0x26ed12, _0x356bc3, _0x4f1c96) {
    var _0x5219cd = _0x51c742(_0x4071f3);
    var _0x1bb026 = _0x51c742(_0x26ed12);
    var _0x5554dd = _0x51c742(_0x356bc3);
    var _0x482bef = _0x51c742(_0x4f1c96);
    try {
      firebase.database().ref(_0x5219cd).on("value", function (_0x21e7dd) {
        window.unityInstance.SendMessage(_0x1bb026, _0x5554dd, JSON.stringify(_0x21e7dd.val()));
      });
    } catch (_0x3d389e) {
      window.unityInstance.SendMessage(_0x1bb026, _0x482bef, JSON.stringify(_0x3d389e, Object.getOwnPropertyNames(_0x3d389e)));
    }
  }
  function _0x2b5f41(_0x15bff3) {
    var _0x190f76 = _0x51c742(_0x15bff3);
    firebaseLogEvent(_0x190f76);
  }
  function _0x34a0a3(_0x2557d2, _0x2202e2) {
    var _0x4d4943 = _0x51c742(_0x2557d2);
    var _0x20d0bc = JSON.parse(_0x51c742(_0x2202e2));
    firebaseLogEventParameter(_0x4d4943, _0x20d0bc);
  }
  function _0x4751ea(_0x14046e, _0x213a0a, _0x1f9d94, _0x1a6315, _0x28817b) {
    var _0x558a26 = _0x51c742(_0x14046e);
    var _0x30a10a = _0x51c742(_0x1f9d94);
    var _0x1aacdd = _0x51c742(_0x1a6315);
    var _0x31cb19 = _0x51c742(_0x28817b);
    try {
      firebase.database().ref(_0x558a26).transaction(function (_0x1f9104) {
        if (!isNaN(_0x1f9104)) {
          return _0x1f9104 + _0x213a0a;
        } else {
          return _0x213a0a;
        }
      }).then(function (_0x5adcb1) {
        window.unityInstance.SendMessage(_0x30a10a, _0x1aacdd, "Success: transaction run in " + _0x558a26);
      });
    } catch (_0x1e8896) {
      window.unityInstance.SendMessage(_0x30a10a, _0x31cb19, JSON.stringify(_0x1e8896, Object.getOwnPropertyNames(_0x1e8896)));
    }
  }
  function _0x7b25e4(_0x50ff72, _0xcd4e17, _0x229e7e) {
    var _0xc600bf = _0x51c742(_0x50ff72);
    var _0xc0d14c = _0x51c742(_0xcd4e17);
    var _0xd80550 = _0x51c742(_0x229e7e);
    firebase.auth().onAuthStateChanged(function (_0xa81d9d) {
      if (_0xa81d9d) {
        window.unityInstance.SendMessage(_0xc600bf, _0xc0d14c, JSON.stringify(_0xa81d9d));
      } else {
        window.unityInstance.SendMessage(_0xc600bf, _0xd80550, "User signed out");
      }
    });
  }
  function _0x37b1bf(_0x2d1c17) {
    window.wgUnityInstance = _0x5c0d54;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x2d1c17);
    } catch (_0x34f02b) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x4410fb = document.createElement("script");
      _0x4410fb.addEventListener("load", function (_0x4f0132) {
        var _0x31379c = document.createElement("script");
        _0x31379c.addEventListener("load", function (_0xd3b754) {
          console.log("WGSDK: Development resources loaded.");
          _0x36751b(_0x2d1c17, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x31379c);
        _0x31379c.src = window.GMSOFT_ADS_INFO.wgLibrary;
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x4410fb);
      _0x4410fb.src = window.GMSOFT_ADS_INFO.wgConf;
    }
  }
  function _0x36751b(_0x4a94ef, _0x939bf1) {
    var _0xa32c13;
    if (_0x939bf1 === true) {
      _0xa32c13 = _0x4a94ef;
    } else {
      _0xa32c13 = _0x51c742(_0x4a94ef);
    }
    setTimeout(function () {
      _0x37b1bf(_0xa32c13);
    }, 250);
  }
  function _0x36f646(_0x9143e, _0x5a0b44, _0x2499f2, _0x11b9e6, _0x2ae0fd) {
    var _0x341d67 = _0x51c742(_0x9143e);
    var _0x3598a7 = _0x51c742(_0x5a0b44);
    var _0x5ad506 = _0x51c742(_0x2499f2);
    var _0x462b6f = _0x51c742(_0x11b9e6);
    var _0x37020f = _0x51c742(_0x2ae0fd);
    try {
      firebase.database().ref(_0x341d67).set(JSON.parse(_0x3598a7)).then(function (_0x1bab85) {
        window.unityInstance.SendMessage(_0x5ad506, _0x462b6f, "Success: " + _0x3598a7 + " was posted to " + _0x341d67);
      });
    } catch (_0x708cce) {
      window.unityInstance.SendMessage(_0x5ad506, _0x37020f, JSON.stringify(_0x708cce, Object.getOwnPropertyNames(_0x708cce)));
    }
  }
  function _0x573f3f(_0x4b0b3e, _0x33b543, _0x2b0308, _0x49d07c, _0x160a37) {
    var _0x45c4b7 = _0x51c742(_0x4b0b3e);
    var _0x29cf16 = _0x51c742(_0x33b543);
    var _0x1327ec = _0x51c742(_0x2b0308);
    var _0x727e40 = _0x51c742(_0x49d07c);
    var _0x2be7fb = _0x51c742(_0x160a37);
    try {
      firebase.database().ref(_0x45c4b7).push().set(JSON.parse(_0x29cf16)).then(function (_0x42a646) {
        window.unityInstance.SendMessage(_0x1327ec, _0x727e40, "Success: " + _0x29cf16 + " was pushed to " + _0x45c4b7);
      });
    } catch (_0x2d4936) {
      window.unityInstance.SendMessage(_0x1327ec, _0x2be7fb, JSON.stringify(_0x2d4936, Object.getOwnPropertyNames(_0x2d4936)));
    }
  }
  function _0x21001c() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x151a8c) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x1c1e2c() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0x5c0d54);
    } catch (_0x1963d9) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0x1c1e2c();
      }, 250);
    }
  }
  function _0x59b950() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0x43606b) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x48000e();
    }
  }
  function _0x48000e() {
    setTimeout(function () {
      _0x59b950();
    }, 250);
  }
  function _0x5d5818(_0x4d2122, _0xa509c6, _0x48d6a3, _0x2aefd6, _0x86a886, _0x1d20ae, _0x35e61a) {
    var _0x1af74d = _0x51c742(_0x4d2122);
    var _0x12fc0e = _0x51c742(_0xa509c6);
    var _0x226d75 = _0x51c742(_0x48d6a3);
    var _0x10cef3 = _0x51c742(_0x2aefd6);
    var _0xed3799 = _0x51c742(_0x86a886);
    var _0x2d1946 = _0x51c742(_0x1d20ae);
    var _0x342b90 = _0x51c742(_0x35e61a);
    try {
      var _0x2aefd6 = {};
      _0x2aefd6[_0x226d75] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x10cef3));
      firebase.firestore().collection(_0x1af74d).doc(_0x12fc0e).update(_0x2aefd6).then(function () {
        window.unityInstance.SendMessage(_0xed3799, _0x2d1946, "Success: element " + _0x10cef3 + " was removed in " + _0x226d75);
      }).catch(function (_0x51a0af) {
        window.unityInstance.SendMessage(_0xed3799, _0x342b90, JSON.stringify(_0x51a0af, Object.getOwnPropertyNames(_0x51a0af)));
      });
    } catch (_0x3b01b4) {
      window.unityInstance.SendMessage(_0xed3799, _0x342b90, JSON.stringify(_0x3b01b4, Object.getOwnPropertyNames(_0x3b01b4)));
    }
  }
  function _0x5ccf73(_0x4bb03a) {
    var _0x4f6c21 = window.unityStringify(_0x4bb03a);
    var _0x252ac1 = {
      adStarted: function () {
        window.UnitySDK.unlockPointer();
        _0x5cf36d("CrazySDKSingleton", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        window.UnitySDK.lockPointer();
        _0x5cf36d("CrazySDKSingleton", "JSLibCallback_AdFinished");
      },
      adError: function (_0x8ccdb4) {
        _0x5cf36d("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x8ccdb4));
      }
    };
    window.CrazyGames.SDK.ad.requestAd(_0x4f6c21, _0x252ac1).catch(function (_0x35542f) {
      window.UnitySDK.logError("Error while requesting ad:", _0x35542f);
      _0x5cf36d("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
        code: "unknown",
        message: _0x35542f.message || "Unknown error"
      }));
    });
  }
  function _0x15aa5b(_0x5e8f06) {
    var _0x3df483 = JSON.parse(window.unityStringify(_0x5e8f06));
    try {
      window.CrazyGames.SDK.banner.requestOverlayBanners(_0x3df483, function (_0x4f39a3, _0x3410dd, _0x1b0044) {});
    } catch (_0x5f0c36) {
      window.UnitySDK.logError("Error while requesting banners:", _0x5f0c36);
    }
  }
  function _0x142759(_0x1e2394) {
    var _0x2259ec = JSON.parse(window.unityStringify(_0x1e2394));
    var _0x419d01 = "";
    try {
      _0x419d01 = window.CrazyGames.SDK.game.inviteLink(_0x2259ec);
    } catch (_0x4a53c4) {
      window.UnitySDK.logError("Error while requesting invite url:", _0x4a53c4);
    }
    var _0x4a86af = _0x219de1(_0x419d01) + 1;
    var _0x30acf2 = _0x18375c(_0x4a86af);
    _0x4cad61(_0x419d01, _0x30acf2, _0x4a86af);
    return _0x30acf2;
  }
  function _0x5099f9(_0x5d9222) {
    _0x5d9222 = _0x51c742(_0x5d9222);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x5d9222,
      onEvent: function (_0x7e8ba0) {
        switch (_0x7e8ba0.name) {
          case "SDK_GAME_START":
            _0x5cf36d("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x5cf36d("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x5cf36d("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x5cf36d("GameDistribution", "EventCallback", _0x7e8ba0.name);
        }
      }
    };
    (function (_0xaf3c7e, _0x5506ca, _0x1ed7eb) {
      var _0x56621f;
      var _0x1e16ad = _0xaf3c7e.getElementsByTagName(_0x5506ca)[0];
      if (_0xaf3c7e.getElementById(_0x1ed7eb)) {
        return;
      }
      _0x56621f = _0xaf3c7e.createElement(_0x5506ca);
      _0x56621f.id = _0x1ed7eb;
      _0x56621f.src = "//html5.api.gamedistribution.com/main.min.js";
      _0x1e16ad.parentNode.insertBefore(_0x56621f, _0x1e16ad);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0x412162() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x5d03e3) {
        _0x5cf36d("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x2e0db0) {
        _0x5cf36d("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x523199(_0x1f6e89) {
    _0x1f6e89 = _0x51c742(_0x1f6e89);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x1f6e89 !== "undefined") {
      gdsdk.sendEvent(_0x1f6e89).then(function (_0x17854d) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0x2f81e9) {
        console.log(_0x2f81e9.message);
      });
    }
  }
  function _0x4465e1(_0x211352) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x211352 = _0x51c742(_0x211352) || gdsdk.AdType.Interstitial;
      gdsdk.showAd(_0x211352).then(function (_0x436eab) {
        if (_0x211352 === gdsdk.AdType.Rewarded) {
          _0x5cf36d("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x32ed9e) {
        if (_0x211352 === gdsdk.AdType.Rewarded) {
          _0x5cf36d("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x2823ae(_0xf81c5d, _0x444545, _0x90c419, _0x48fd1a, _0x24b04d, _0x48de86) {
    var _0x3507fb = _0x51c742(_0xf81c5d);
    var _0x342c48 = _0x51c742(_0x444545);
    var _0x359ccb = _0x51c742(_0x90c419);
    var _0x4c28d9 = _0x51c742(_0x48fd1a);
    var _0x2f7b61 = _0x51c742(_0x24b04d);
    var _0x3162ab = _0x51c742(_0x48de86);
    try {
      firebase.firestore().collection(_0x3507fb).doc(_0x342c48).set(JSON.parse(_0x359ccb)).then(function () {
        window.unityInstance.SendMessage(_0x4c28d9, _0x2f7b61, "Success: document " + _0x342c48 + " was set");
      }).catch(function (_0x3e606c) {
        window.unityInstance.SendMessage(_0x4c28d9, _0x3162ab, JSON.stringify(_0x3e606c, Object.getOwnPropertyNames(_0x3e606c)));
      });
    } catch (_0x486b6a) {
      window.unityInstance.SendMessage(_0x4c28d9, _0x3162ab, JSON.stringify(_0x486b6a, Object.getOwnPropertyNames(_0x486b6a)));
    }
  }
  function _0x1bc110(_0x417d3b) {
    var _0x220cde = JSON.parse(_0x51c742(_0x417d3b));
    firebaseSetUserProperties(_0x220cde);
  }
  function _0x270fb0() {
    window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x1b7342) {
      _0x5cf36d("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        linkAccountResponseStr: JSON.stringify(_0x1b7342)
      }));
    }).catch(function (_0x370d41) {
      _0x5cf36d("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x370d41)
      }));
    });
  }
  function _0x1e7af6() {
    window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x4c7e04) {
      _0x5cf36d("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        userJson: JSON.stringify(_0x4c7e04)
      }));
    }).catch(function (_0x1dcbed) {
      _0x5cf36d("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x1dcbed)
      }));
    });
  }
  function _0x322625(_0xd22410) {
    var _0x511aed = JSON.parse(window.unityStringify(_0xd22410));
    var _0x11f8c8 = "";
    try {
      _0x11f8c8 = window.CrazyGames.SDK.game.showInviteButton(_0x511aed);
    } catch (_0x231820) {
      window.UnitySDK.logError("Error while showing invite button:", _0x231820);
    }
    var _0x4177fa = _0x219de1(_0x11f8c8) + 1;
    var _0x3544d7 = _0x18375c(_0x4177fa);
    _0x4cad61(_0x11f8c8, _0x3544d7, _0x4177fa);
    return _0x3544d7;
  }
  function _0x876a8a() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0x136f2a(_0x55bf3f, _0x5dd138, _0x2092e2) {
    var _0x313947 = _0x51c742(_0x55bf3f);
    var _0x4e2911 = _0x51c742(_0x5dd138);
    var _0x11db90 = _0x51c742(_0x2092e2);
    try {
      firebase.auth().signInAnonymously().then(function (_0x251c55) {
        window.unityInstance.SendMessage(_0x313947, _0x4e2911, "Success: signed up for " + _0x251c55);
      }).catch(function (_0x2dac74) {
        window.unityInstance.SendMessage(_0x313947, _0x11db90, JSON.stringify(_0x2dac74, Object.getOwnPropertyNames(_0x2dac74)));
      });
    } catch (_0x13429d) {
      window.unityInstance.SendMessage(_0x313947, _0x11db90, JSON.stringify(_0x13429d, Object.getOwnPropertyNames(_0x13429d)));
    }
  }
  function _0x4e124b(_0x5d8587, _0x15245b, _0x416d, _0x445016, _0x5dc23b) {
    var _0x507130 = _0x51c742(_0x5d8587);
    var _0x4395cf = _0x51c742(_0x15245b);
    var _0x5e2705 = _0x51c742(_0x416d);
    var _0x2371cd = _0x51c742(_0x445016);
    var _0x3bed61 = _0x51c742(_0x5dc23b);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x507130, _0x4395cf).then(function (_0x5e2b2e) {
        window.unityInstance.SendMessage(_0x5e2705, _0x2371cd, "Success: signed in for " + _0x507130);
      }).catch(function (_0x56c5e6) {
        window.unityInstance.SendMessage(_0x5e2705, _0x3bed61, JSON.stringify(_0x56c5e6, Object.getOwnPropertyNames(_0x56c5e6)));
      });
    } catch (_0x519d99) {
      window.unityInstance.SendMessage(_0x5e2705, _0x3bed61, JSON.stringify(_0x519d99, Object.getOwnPropertyNames(_0x519d99)));
    }
  }
  function _0x13dc6f(_0x431fd9, _0x1f8dcf, _0x2321cd) {
    var _0x4263d2 = _0x51c742(_0x431fd9);
    var _0x1bf59e = _0x51c742(_0x1f8dcf);
    var _0x193f96 = _0x51c742(_0x2321cd);
    try {
      var _0x8ecfb6 = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0x8ecfb6).then(function (_0x50dd18) {
        window.unityInstance.SendMessage(_0x4263d2, _0x1bf59e, "Success: signed in with Facebook!");
      }).catch(function (_0x5bcdb6) {
        window.unityInstance.SendMessage(_0x4263d2, _0x193f96, JSON.stringify(_0x5bcdb6, Object.getOwnPropertyNames(_0x5bcdb6)));
      });
    } catch (_0x380bab) {
      window.unityInstance.SendMessage(_0x4263d2, _0x193f96, JSON.stringify(_0x380bab, Object.getOwnPropertyNames(_0x380bab)));
    }
  }
  function _0x538b14(_0xc2220c, _0x36d3d3, _0x480b7a) {
    var _0x1ff0d1 = _0x51c742(_0xc2220c);
    var _0x569190 = _0x51c742(_0x36d3d3);
    var _0x5d3731 = _0x51c742(_0x480b7a);
    try {
      var _0x225340 = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x225340).then(function (_0xecaf8c) {
        window.unityInstance.SendMessage(_0x1ff0d1, _0x569190, "Success: signed in with Google!");
      }).catch(function (_0x45668e) {
        window.unityInstance.SendMessage(_0x1ff0d1, _0x5d3731, JSON.stringify(_0x45668e, Object.getOwnPropertyNames(_0x45668e)));
      });
    } catch (_0x2b8e72) {
      window.unityInstance.SendMessage(_0x1ff0d1, _0x5d3731, JSON.stringify(_0x2b8e72, Object.getOwnPropertyNames(_0x2b8e72)));
    }
  }
  function _0x1248a3(_0xbbe551, _0x120974, _0x5a7ec7, _0x567ae5) {
    var _0x22dbcf = _0x51c742(_0xbbe551);
    var _0x4d4d52 = _0x51c742(_0x120974);
    var _0x12744f = _0x51c742(_0x5a7ec7);
    var _0x490743 = _0x51c742(_0x567ae5);
    try {
      firebase.database().ref(_0x22dbcf).off("child_added");
      window.unityInstance.SendMessage(_0x4d4d52, _0x12744f, "Success: listener removed");
    } catch (_0x231983) {
      window.unityInstance.SendMessage(_0x4d4d52, _0x490743, JSON.stringify(_0x231983, Object.getOwnPropertyNames(_0x231983)));
    }
  }
  function _0x35cd47(_0x4fddf4, _0x1c95e2, _0x1abc6b, _0x358f4a) {
    var _0x18269c = _0x51c742(_0x4fddf4);
    var _0x49529e = _0x51c742(_0x1c95e2);
    var _0x27d09d = _0x51c742(_0x1abc6b);
    var _0x3cf792 = _0x51c742(_0x358f4a);
    try {
      firebase.database().ref(_0x18269c).off("child_changed");
      window.unityInstance.SendMessage(_0x49529e, _0x27d09d, "Success: listener removed");
    } catch (_0x50915d) {
      window.unityInstance.SendMessage(_0x49529e, _0x3cf792, JSON.stringify(_0x50915d, Object.getOwnPropertyNames(_0x50915d)));
    }
  }
  function _0x3deccd(_0x6f20e0, _0x41dae5, _0x13e143, _0x1c8952) {
    var _0x5b9929 = _0x51c742(_0x6f20e0);
    var _0x538afb = _0x51c742(_0x41dae5);
    var _0x5db420 = _0x51c742(_0x13e143);
    var _0x5f4ea4 = _0x51c742(_0x1c8952);
    try {
      firebase.database().ref(_0x5b9929).off("child_removed");
      window.unityInstance.SendMessage(_0x538afb, _0x5db420, "Success: listener removed");
    } catch (_0x49accc) {
      window.unityInstance.SendMessage(_0x538afb, _0x5f4ea4, JSON.stringify(_0x49accc, Object.getOwnPropertyNames(_0x49accc)));
    }
  }
  function _0x13e93a(_0x89dba6, _0x3890cb, _0xb17e67, _0x46bfd4) {
    var _0x3475b3 = _0x51c742(_0x89dba6);
    var _0x1d7ff6 = _0x51c742(_0x3890cb);
    var _0x523212 = _0x51c742(_0xb17e67);
    var _0x28ed00 = _0x51c742(_0x46bfd4);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x3475b3 + "/collection/"]();
      window.unityInstance.SendMessage(_0x1d7ff6, _0x523212, "Success: listener was removed");
    } catch (_0x1fb353) {
      window.unityInstance.SendMessage(_0x1d7ff6, _0x28ed00, JSON.stringify(_0x1fb353, Object.getOwnPropertyNames(_0x1fb353)));
    }
  }
  function _0x26a693(_0x5e5c8c, _0x484cfe, _0x1ee322, _0x4f71bf, _0x1232f2) {
    var _0x5cd1d3 = _0x51c742(_0x5e5c8c);
    var _0x2585d3 = _0x51c742(_0x484cfe);
    var _0x33bf10 = _0x51c742(_0x1ee322);
    var _0x3d693a = _0x51c742(_0x4f71bf);
    var _0x5f368d = _0x51c742(_0x1232f2);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x5cd1d3 + "/" + _0x2585d3]();
      window.unityInstance.SendMessage(_0x33bf10, _0x3d693a, "Success: listener was removed");
    } catch (_0x2569b2) {
      window.unityInstance.SendMessage(_0x33bf10, _0x5f368d, JSON.stringify(_0x2569b2, Object.getOwnPropertyNames(_0x2569b2)));
    }
  }
  function _0xd2d174(_0x5c68de, _0x548f01, _0x25139d, _0xc4211c) {
    var _0x539573 = _0x51c742(_0x5c68de);
    var _0x104c0d = _0x51c742(_0x548f01);
    var _0xe0dc14 = _0x51c742(_0x25139d);
    var _0x314c79 = _0x51c742(_0xc4211c);
    try {
      firebase.database().ref(_0x539573).off("value");
      window.unityInstance.SendMessage(_0x104c0d, _0xe0dc14, "Success: listener removed");
    } catch (_0x789bd6) {
      window.unityInstance.SendMessage(_0x104c0d, _0x314c79, JSON.stringify(_0x789bd6, Object.getOwnPropertyNames(_0x789bd6)));
    }
  }
  function _0x17734e() {
    try {
      window.CrazyGames.SDK.data.syncUnityGameData();
    } catch (_0xa226b6) {
      window.UnitySDK.logError("Error while calling syncUnityGameData:", _0xa226b6);
    }
  }
  function _0x39828e(_0x2259c1, _0x2d8e18, _0x5c9c3c, _0x3d3577) {
    var _0x4ecd70 = _0x51c742(_0x2259c1);
    var _0x5dcf4f = _0x51c742(_0x2d8e18);
    var _0x2c6eac = _0x51c742(_0x5c9c3c);
    var _0x1a7ac1 = _0x51c742(_0x3d3577);
    try {
      firebase.database().ref(_0x4ecd70).transaction(function (_0x1c3b4d) {
        if (typeof _0x1c3b4d === "boolean") {
          return !_0x1c3b4d;
        } else {
          return true;
        }
      }).then(function (_0x5e168c) {
        window.unityInstance.SendMessage(_0x5dcf4f, _0x2c6eac, "Success: transaction run in " + _0x4ecd70);
      });
    } catch (_0x4d1a6d) {
      window.unityInstance.SendMessage(_0x5dcf4f, _0x1a7ac1, JSON.stringify(_0x4d1a6d, Object.getOwnPropertyNames(_0x4d1a6d)));
    }
  }
  function _0x4631df(_0x6c6284, _0x294b43, _0x2746d0, _0x5dd662, _0xb90ebd, _0x37f035) {
    var _0x1dc5c3 = _0x51c742(_0x6c6284);
    var _0x358dee = _0x51c742(_0x294b43);
    var _0x5a2935 = _0x51c742(_0x2746d0);
    var _0xd3fe7a = _0x51c742(_0x5dd662);
    var _0x2f007a = _0x51c742(_0xb90ebd);
    var _0x539b0f = _0x51c742(_0x37f035);
    try {
      firebase.firestore().collection(_0x1dc5c3).doc(_0x358dee).update(JSON.parse(_0x5a2935)).then(function () {
        window.unityInstance.SendMessage(_0xd3fe7a, _0x2f007a, "Success: document " + _0x358dee + " was updated");
      }).catch(function (_0x2d1d1d) {
        window.unityInstance.SendMessage(_0xd3fe7a, _0x539b0f, JSON.stringify(_0x2d1d1d, Object.getOwnPropertyNames(_0x2d1d1d)));
      });
    } catch (_0x5d2c48) {
      window.unityInstance.SendMessage(_0xd3fe7a, _0x539b0f, JSON.stringify(_0x5d2c48, Object.getOwnPropertyNames(_0x5d2c48)));
    }
  }
  function _0x2cd09f(_0x13204f, _0x54cc14, _0x4f0264, _0xbb4b40, _0x125b90) {
    var _0x2cce04 = _0x51c742(_0x13204f);
    var _0x4018c4 = _0x51c742(_0x54cc14);
    var _0x527561 = _0x51c742(_0x4f0264);
    var _0x10d9eb = _0x51c742(_0xbb4b40);
    var _0x30491a = _0x51c742(_0x125b90);
    try {
      firebase.database().ref(_0x2cce04).update(JSON.parse(_0x4018c4)).then(function (_0x1979b9) {
        window.unityInstance.SendMessage(_0x527561, _0x10d9eb, "Success: " + _0x4018c4 + " was updated in " + _0x2cce04);
      });
    } catch (_0x5d68cd) {
      window.unityInstance.SendMessage(_0x527561, _0x30491a, JSON.stringify(_0x5d68cd, Object.getOwnPropertyNames(_0x5d68cd)));
    }
  }
  function _0x452fab(_0x47531c, _0x507644, _0x2ab955, _0x42695d, _0x1a103e) {
    var _0x57d9f2 = _0x51c742(_0x47531c);
    var _0x4d2871 = _0x51c742(_0x507644);
    var _0x47503f = _0x51c742(_0x2ab955);
    var _0x4cc170 = _0x51c742(_0x42695d);
    var _0x1446ca = _0x51c742(_0x1a103e);
    try {
      firebase.storage().ref(_0x57d9f2).put(_0x38bbae(_0x4d2871)).then(function (_0xe3d70c) {
        window.unityInstance.SendMessage(_0x47503f, _0x4cc170, "Success: data was posted to " + _0x57d9f2);
      });
    } catch (_0x323c98) {
      window.unityInstance.SendMessage(_0x47503f, _0x1446ca, JSON.stringify(_0x323c98, Object.getOwnPropertyNames(_0x323c98)));
    }
    function _0x38bbae(_0x169d2b) {
      var _0x5015e8 = window.atob(_0x169d2b);
      var _0x4f7677 = _0x5015e8.length;
      var _0x1922b4 = new Uint8Array(_0x4f7677);
      for (var _0x401735 = 0; _0x401735 < _0x4f7677; _0x401735++) {
        _0x1922b4[_0x401735] = _0x5015e8.charCodeAt(_0x401735);
      }
      return _0x1922b4.buffer;
    }
  }
  var _0xfd93a2 = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
  };
  function _0x26eff2(_0x1c4486) {
    return _0x18375c(_0x1c4486 + _0xfd93a2.SIZE) + _0xfd93a2.SIZE;
  }
  function _0x5ef6f7(_0x1f0a68) {
    this.excPtr = _0x1f0a68;
    this.ptr = _0x1f0a68 - _0xfd93a2.SIZE;
    this.set_type = function (_0x10c82f) {
      _0x5ce4f8[this.ptr + _0xfd93a2.TYPE_OFFSET >> 2] = _0x10c82f;
    };
    this.get_type = function () {
      return _0x5ce4f8[this.ptr + _0xfd93a2.TYPE_OFFSET >> 2];
    };
    this.set_destructor = function (_0x394a64) {
      _0x5ce4f8[this.ptr + _0xfd93a2.DESTRUCTOR_OFFSET >> 2] = _0x394a64;
    };
    this.get_destructor = function () {
      return _0x5ce4f8[this.ptr + _0xfd93a2.DESTRUCTOR_OFFSET >> 2];
    };
    this.set_refcount = function (_0x333104) {
      _0x5ce4f8[this.ptr + _0xfd93a2.REFCOUNT_OFFSET >> 2] = _0x333104;
    };
    this.set_caught = function (_0x43dd50) {
      _0x43dd50 = _0x43dd50 ? 1 : 0;
      _0x28416d[this.ptr + _0xfd93a2.CAUGHT_OFFSET >> 0] = _0x43dd50;
    };
    this.get_caught = function () {
      return _0x28416d[this.ptr + _0xfd93a2.CAUGHT_OFFSET >> 0] != 0;
    };
    this.set_rethrown = function (_0x48c175) {
      _0x48c175 = _0x48c175 ? 1 : 0;
      _0x28416d[this.ptr + _0xfd93a2.RETHROWN_OFFSET >> 0] = _0x48c175;
    };
    this.get_rethrown = function () {
      return _0x28416d[this.ptr + _0xfd93a2.RETHROWN_OFFSET >> 0] != 0;
    };
    this.init = function (_0x2c6fc4, _0xc9aafb) {
      this.set_type(_0x2c6fc4);
      this.set_destructor(_0xc9aafb);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0x4241e6 = _0x5ce4f8[this.ptr + _0xfd93a2.REFCOUNT_OFFSET >> 2];
      _0x5ce4f8[this.ptr + _0xfd93a2.REFCOUNT_OFFSET >> 2] = _0x4241e6 + 1;
    };
    this.release_ref = function () {
      var _0x53dc7 = _0x5ce4f8[this.ptr + _0xfd93a2.REFCOUNT_OFFSET >> 2];
      _0x5ce4f8[this.ptr + _0xfd93a2.REFCOUNT_OFFSET >> 2] = _0x53dc7 - 1;
      return _0x53dc7 === 1;
    };
  }
  function _0x35dea5(_0x49d44f) {
    this.free = function () {
      _0xf67877(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x446627) {
      _0x5ce4f8[this.ptr >> 2] = _0x446627;
    };
    this.get_base_ptr = function () {
      return _0x5ce4f8[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0x4a21b7) {
      var _0x49b338 = 4;
      _0x5ce4f8[this.ptr + _0x49b338 >> 2] = _0x4a21b7;
    };
    this.get_adjusted_ptr = function () {
      var _0x37f331 = 4;
      return _0x5ce4f8[this.ptr + _0x37f331 >> 2];
    };
    this.get_exception_ptr = function () {
      var _0x1e31f4 = _0x5704d8(this.get_exception_info().get_type());
      if (_0x1e31f4) {
        return _0x5ce4f8[this.get_base_ptr() >> 2];
      }
      var _0x52344d = this.get_adjusted_ptr();
      if (_0x52344d !== 0) {
        return _0x52344d;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0x5ef6f7(this.get_base_ptr());
    };
    if (_0x49d44f === undefined) {
      this.ptr = _0x18375c(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x49d44f;
    }
  }
  var _0x3eedd8 = [];
  function _0x5ec988(_0x5cc3d7) {
    _0x5cc3d7.add_ref();
  }
  var _0x579a3f = 0;
  function _0x272b50(_0x1e56b6) {
    var _0x3f7e4d = new _0x35dea5(_0x1e56b6);
    var _0xbd2e48 = _0x3f7e4d.get_exception_info();
    if (!_0xbd2e48.get_caught()) {
      _0xbd2e48.set_caught(true);
      _0x579a3f--;
    }
    _0xbd2e48.set_rethrown(false);
    _0x3eedd8.push(_0x3f7e4d);
    _0x5ec988(_0xbd2e48);
    return _0x3f7e4d.get_exception_ptr();
  }
  var _0xebea98 = 0;
  function _0x20b253(_0x1ae1df) {
    return _0xf67877(new _0x5ef6f7(_0x1ae1df).ptr);
  }
  function _0x94b7e0(_0x136017) {
    if (_0x136017.release_ref() && !_0x136017.get_rethrown()) {
      var _0x30055c = _0x136017.get_destructor();
      if (_0x30055c) {
        (function (_0x1d272f) {
          return _0x96b4a2.apply(null, [_0x30055c, _0x1d272f]);
        })(_0x136017.excPtr);
      }
      _0x20b253(_0x136017.excPtr);
    }
  }
  function _0x251f02() {
    _0x1dc1f2(0);
    var _0x149f6b = _0x3eedd8.pop();
    _0x94b7e0(_0x149f6b.get_exception_info());
    _0x149f6b.free();
    _0xebea98 = 0;
  }
  function _0x1e99ca(_0x1cf52a) {
    var _0x249b65 = new _0x35dea5(_0x1cf52a);
    var _0x122ce4 = _0x249b65.get_base_ptr();
    if (!_0xebea98) {
      _0xebea98 = _0x122ce4;
    }
    _0x249b65.free();
    throw _0x122ce4;
  }
  function _0x26fefc() {
    var _0x2b75e4 = _0xebea98;
    if (!_0x2b75e4) {
      _0x47b672(0);
      return 0;
    }
    var _0x5d37a7 = new _0x5ef6f7(_0x2b75e4);
    var _0x5cb3fc = _0x5d37a7.get_type();
    var _0x1d9717 = new _0x35dea5();
    _0x1d9717.set_base_ptr(_0x2b75e4);
    if (!_0x5cb3fc) {
      _0x47b672(0);
      return _0x1d9717.ptr | 0;
    }
    var _0x31d50d = Array.prototype.slice.call(arguments);
    var _0x57c9ff = _0x212590();
    var _0x1a1c02 = _0x2b6616(4);
    _0x5ce4f8[_0x1a1c02 >> 2] = _0x2b75e4;
    for (var _0x120e56 = 0; _0x120e56 < _0x31d50d.length; _0x120e56++) {
      var _0x48359b = _0x31d50d[_0x120e56];
      if (_0x48359b === 0 || _0x48359b === _0x5cb3fc) {
        break;
      }
      if (_0x180bdc(_0x48359b, _0x5cb3fc, _0x1a1c02)) {
        var _0x173d16 = _0x5ce4f8[_0x1a1c02 >> 2];
        if (_0x2b75e4 !== _0x173d16) {
          _0x1d9717.set_adjusted_ptr(_0x173d16);
        }
        _0x47b672(_0x48359b);
        return _0x1d9717.ptr | 0;
      }
    }
    _0x4a640e(_0x57c9ff);
    _0x47b672(_0x5cb3fc);
    return _0x1d9717.ptr | 0;
  }
  function _0x2a1985() {
    var _0xbc33a5 = _0xebea98;
    if (!_0xbc33a5) {
      _0x47b672(0);
      return 0;
    }
    var _0x109875 = new _0x5ef6f7(_0xbc33a5);
    var _0x3d94c6 = _0x109875.get_type();
    var _0x40dd57 = new _0x35dea5();
    _0x40dd57.set_base_ptr(_0xbc33a5);
    if (!_0x3d94c6) {
      _0x47b672(0);
      return _0x40dd57.ptr | 0;
    }
    var _0x53cb43 = Array.prototype.slice.call(arguments);
    var _0x284963 = _0x212590();
    var _0x4320ca = _0x2b6616(4);
    _0x5ce4f8[_0x4320ca >> 2] = _0xbc33a5;
    for (var _0x23339d = 0; _0x23339d < _0x53cb43.length; _0x23339d++) {
      var _0x503865 = _0x53cb43[_0x23339d];
      if (_0x503865 === 0 || _0x503865 === _0x3d94c6) {
        break;
      }
      if (_0x180bdc(_0x503865, _0x3d94c6, _0x4320ca)) {
        var _0x5d4eab = _0x5ce4f8[_0x4320ca >> 2];
        if (_0xbc33a5 !== _0x5d4eab) {
          _0x40dd57.set_adjusted_ptr(_0x5d4eab);
        }
        _0x47b672(_0x503865);
        return _0x40dd57.ptr | 0;
      }
    }
    _0x4a640e(_0x284963);
    _0x47b672(_0x3d94c6);
    return _0x40dd57.ptr | 0;
  }
  function _0x1f993f() {
    var _0x1724f7 = _0xebea98;
    if (!_0x1724f7) {
      _0x47b672(0);
      return 0;
    }
    var _0x8b3666 = new _0x5ef6f7(_0x1724f7);
    var _0x5c2409 = _0x8b3666.get_type();
    var _0x48770d = new _0x35dea5();
    _0x48770d.set_base_ptr(_0x1724f7);
    if (!_0x5c2409) {
      _0x47b672(0);
      return _0x48770d.ptr | 0;
    }
    var _0x1e2dff = Array.prototype.slice.call(arguments);
    var _0x59c268 = _0x212590();
    var _0x32f3cc = _0x2b6616(4);
    _0x5ce4f8[_0x32f3cc >> 2] = _0x1724f7;
    for (var _0x3259a1 = 0; _0x3259a1 < _0x1e2dff.length; _0x3259a1++) {
      var _0x406bd4 = _0x1e2dff[_0x3259a1];
      if (_0x406bd4 === 0 || _0x406bd4 === _0x5c2409) {
        break;
      }
      if (_0x180bdc(_0x406bd4, _0x5c2409, _0x32f3cc)) {
        var _0x593082 = _0x5ce4f8[_0x32f3cc >> 2];
        if (_0x1724f7 !== _0x593082) {
          _0x48770d.set_adjusted_ptr(_0x593082);
        }
        _0x47b672(_0x406bd4);
        return _0x48770d.ptr | 0;
      }
    }
    _0x4a640e(_0x59c268);
    _0x47b672(_0x5c2409);
    return _0x48770d.ptr | 0;
  }
  function _0x244104() {
    var _0x1cd6b1 = _0x3eedd8.pop();
    if (!_0x1cd6b1) {
      _0x57adfd("no exception to throw");
    }
    var _0x2cb9a6 = _0x1cd6b1.get_exception_info();
    var _0x109bab = _0x1cd6b1.get_base_ptr();
    if (!_0x2cb9a6.get_rethrown()) {
      _0x3eedd8.push(_0x1cd6b1);
      _0x2cb9a6.set_rethrown(true);
      _0x2cb9a6.set_caught(false);
      _0x579a3f++;
    } else {
      _0x1cd6b1.free();
    }
    _0xebea98 = _0x109bab;
    throw _0x109bab;
  }
  function _0x4ed400(_0x5b9c09, _0x4dbf74, _0x4c489d) {
    var _0x900f3f = new _0x5ef6f7(_0x5b9c09);
    _0x900f3f.init(_0x4dbf74, _0x4c489d);
    _0xebea98 = _0x5b9c09;
    _0x579a3f++;
    throw _0x5b9c09;
  }
  function _0x28dded(_0x26d177, _0x386368) {
    var _0x474160 = new Date(_0x5ce4f8[_0x26d177 >> 2] * 1000);
    _0x5ce4f8[_0x386368 >> 2] = _0x474160.getUTCSeconds();
    _0x5ce4f8[_0x386368 + 4 >> 2] = _0x474160.getUTCMinutes();
    _0x5ce4f8[_0x386368 + 8 >> 2] = _0x474160.getUTCHours();
    _0x5ce4f8[_0x386368 + 12 >> 2] = _0x474160.getUTCDate();
    _0x5ce4f8[_0x386368 + 16 >> 2] = _0x474160.getUTCMonth();
    _0x5ce4f8[_0x386368 + 20 >> 2] = _0x474160.getUTCFullYear() - 1900;
    _0x5ce4f8[_0x386368 + 24 >> 2] = _0x474160.getUTCDay();
    _0x5ce4f8[_0x386368 + 36 >> 2] = 0;
    _0x5ce4f8[_0x386368 + 32 >> 2] = 0;
    var _0x58bc43 = Date.UTC(_0x474160.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x4467f0 = (_0x474160.getTime() - _0x58bc43) / 86400000 | 0;
    _0x5ce4f8[_0x386368 + 28 >> 2] = _0x4467f0;
    if (!_0x28dded.GMTString) {
      _0x28dded.GMTString = _0x40be1d("GMT");
    }
    _0x5ce4f8[_0x386368 + 40 >> 2] = _0x28dded.GMTString;
    return _0x386368;
  }
  function _0x1f510f(_0x279a10, _0x411e3b) {
    return _0x28dded(_0x279a10, _0x411e3b);
  }
  function _0xf77ab2() {
    if (_0xf77ab2.called) {
      return;
    }
    _0xf77ab2.called = true;
    var _0x3e4870 = new Date().getFullYear();
    var _0xd46183 = new Date(_0x3e4870, 0, 1);
    var _0x102f54 = new Date(_0x3e4870, 6, 1);
    var _0x737ce2 = _0xd46183.getTimezoneOffset();
    var _0x43cc74 = _0x102f54.getTimezoneOffset();
    var _0x2bda93 = Math.max(_0x737ce2, _0x43cc74);
    _0x5ce4f8[_0xde99e1() >> 2] = _0x2bda93 * 60;
    _0x5ce4f8[_0x314c61() >> 2] = Number(_0x737ce2 != _0x43cc74);
    function _0x2a45a0(_0x15e6ef) {
      var _0x2e518d = _0x15e6ef.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x2e518d) {
        return _0x2e518d[1];
      } else {
        return "GMT";
      }
    }
    var _0x50ebaf = _0x2a45a0(_0xd46183);
    var _0x58baae = _0x2a45a0(_0x102f54);
    var _0x1a79b3 = _0x40be1d(_0x50ebaf);
    var _0x308b6e = _0x40be1d(_0x58baae);
    if (_0x43cc74 < _0x737ce2) {
      _0x5ce4f8[_0x26272a() >> 2] = _0x1a79b3;
      _0x5ce4f8[_0x26272a() + 4 >> 2] = _0x308b6e;
    } else {
      _0x5ce4f8[_0x26272a() >> 2] = _0x308b6e;
      _0x5ce4f8[_0x26272a() + 4 >> 2] = _0x1a79b3;
    }
  }
  function _0x4ea250(_0x4f50aa, _0x2bec1f) {
    _0xf77ab2();
    var _0x3afb24 = new Date(_0x5ce4f8[_0x4f50aa >> 2] * 1000);
    _0x5ce4f8[_0x2bec1f >> 2] = _0x3afb24.getSeconds();
    _0x5ce4f8[_0x2bec1f + 4 >> 2] = _0x3afb24.getMinutes();
    _0x5ce4f8[_0x2bec1f + 8 >> 2] = _0x3afb24.getHours();
    _0x5ce4f8[_0x2bec1f + 12 >> 2] = _0x3afb24.getDate();
    _0x5ce4f8[_0x2bec1f + 16 >> 2] = _0x3afb24.getMonth();
    _0x5ce4f8[_0x2bec1f + 20 >> 2] = _0x3afb24.getFullYear() - 1900;
    _0x5ce4f8[_0x2bec1f + 24 >> 2] = _0x3afb24.getDay();
    var _0x551bac = new Date(_0x3afb24.getFullYear(), 0, 1);
    var _0x3cb2df = (_0x3afb24.getTime() - _0x551bac.getTime()) / 86400000 | 0;
    _0x5ce4f8[_0x2bec1f + 28 >> 2] = _0x3cb2df;
    _0x5ce4f8[_0x2bec1f + 36 >> 2] = -(_0x3afb24.getTimezoneOffset() * 60);
    var _0x568e42 = new Date(_0x3afb24.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x311b5c = _0x551bac.getTimezoneOffset();
    var _0x4473cf = (_0x568e42 != _0x311b5c && _0x3afb24.getTimezoneOffset() == Math.min(_0x311b5c, _0x568e42)) | 0;
    _0x5ce4f8[_0x2bec1f + 32 >> 2] = _0x4473cf;
    var _0xe4c215 = _0x5ce4f8[_0x26272a() + (_0x4473cf ? 4 : 0) >> 2];
    _0x5ce4f8[_0x2bec1f + 40 >> 2] = _0xe4c215;
    return _0x2bec1f;
  }
  function _0x456092(_0x618b8b, _0x1a2b14) {
    return _0x4ea250(_0x618b8b, _0x1a2b14);
  }
  var _0x402431 = {
    splitPath: function (_0x5a13b3) {
      var _0x1fa376 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x1fa376.exec(_0x5a13b3).slice(1);
    },
    normalizeArray: function (_0x466678, _0x2bd17c) {
      var _0x17f4d0 = 0;
      for (var _0x356392 = _0x466678.length - 1; _0x356392 >= 0; _0x356392--) {
        var _0x20f380 = _0x466678[_0x356392];
        if (_0x20f380 === ".") {
          _0x466678.splice(_0x356392, 1);
        } else if (_0x20f380 === "..") {
          _0x466678.splice(_0x356392, 1);
          _0x17f4d0++;
        } else if (_0x17f4d0) {
          _0x466678.splice(_0x356392, 1);
          _0x17f4d0--;
        }
      }
      if (_0x2bd17c) {
        for (; _0x17f4d0; _0x17f4d0--) {
          _0x466678.unshift("..");
        }
      }
      return _0x466678;
    },
    normalize: function (_0x333e93) {
      var _0x45f20c = _0x333e93.charAt(0) === "/";
      var _0x356227 = _0x333e93.substr(-1) === "/";
      _0x333e93 = _0x402431.normalizeArray(_0x333e93.split("/").filter(function (_0xae997a) {
        return !!_0xae997a;
      }), !_0x45f20c).join("/");
      if (!_0x333e93 && !_0x45f20c) {
        _0x333e93 = ".";
      }
      if (_0x333e93 && _0x356227) {
        _0x333e93 += "/";
      }
      return (_0x45f20c ? "/" : "") + _0x333e93;
    },
    dirname: function (_0x2ac2c9) {
      var _0x28ae59 = _0x402431.splitPath(_0x2ac2c9);
      var _0x121283 = _0x28ae59[0];
      var _0x17efe7 = _0x28ae59[1];
      if (!_0x121283 && !_0x17efe7) {
        return ".";
      }
      _0x17efe7 &&= _0x17efe7.substr(0, _0x17efe7.length - 1);
      return _0x121283 + _0x17efe7;
    },
    basename: function (_0x3a48e5) {
      if (_0x3a48e5 === "/") {
        return "/";
      }
      _0x3a48e5 = _0x402431.normalize(_0x3a48e5);
      _0x3a48e5 = _0x3a48e5.replace(/\/$/, "");
      var _0x439453 = _0x3a48e5.lastIndexOf("/");
      if (_0x439453 === -1) {
        return _0x3a48e5;
      }
      return _0x3a48e5.substr(_0x439453 + 1);
    },
    extname: function (_0x2c6bf0) {
      return _0x402431.splitPath(_0x2c6bf0)[3];
    },
    join: function () {
      var _0x6d54cd = Array.prototype.slice.call(arguments, 0);
      return _0x402431.normalize(_0x6d54cd.join("/"));
    },
    join2: function (_0x3d0164, _0x1587f8) {
      return _0x402431.normalize(_0x3d0164 + "/" + _0x1587f8);
    }
  };
  function _0x1eafd2() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x284b41 = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x284b41);
        return _0x284b41[0];
      };
    } else if (_0x2ea75e) {
      try {
        var _0x4645d0 = require("crypto");
        return function () {
          return _0x4645d0.randomBytes(1)[0];
        };
      } catch (_0x53bcb7) {}
    }
    return function () {
      _0x57adfd("randomDevice");
    };
  }
  var _0x285bab = {
    resolve: function () {
      var _0xffd19c = "";
      var _0x4d0752 = false;
      for (var _0x3d7b96 = arguments.length - 1; _0x3d7b96 >= -1 && !_0x4d0752; _0x3d7b96--) {
        var _0x3fc91e = _0x3d7b96 >= 0 ? arguments[_0x3d7b96] : _0x453483.cwd();
        if (typeof _0x3fc91e !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0x3fc91e) {
          return "";
        }
        _0xffd19c = _0x3fc91e + "/" + _0xffd19c;
        _0x4d0752 = _0x3fc91e.charAt(0) === "/";
      }
      _0xffd19c = _0x402431.normalizeArray(_0xffd19c.split("/").filter(function (_0x13ccc3) {
        return !!_0x13ccc3;
      }), !_0x4d0752).join("/");
      return (_0x4d0752 ? "/" : "") + _0xffd19c || ".";
    },
    relative: function (_0x546b0c, _0x140978) {
      _0x546b0c = _0x285bab.resolve(_0x546b0c).substr(1);
      _0x140978 = _0x285bab.resolve(_0x140978).substr(1);
      function _0x178ab6(_0x3444f6) {
        var _0x2db515 = 0;
        for (; _0x2db515 < _0x3444f6.length; _0x2db515++) {
          if (_0x3444f6[_0x2db515] !== "") {
            break;
          }
        }
        var _0x2eec62 = _0x3444f6.length - 1;
        for (; _0x2eec62 >= 0; _0x2eec62--) {
          if (_0x3444f6[_0x2eec62] !== "") {
            break;
          }
        }
        if (_0x2db515 > _0x2eec62) {
          return [];
        }
        return _0x3444f6.slice(_0x2db515, _0x2eec62 - _0x2db515 + 1);
      }
      var _0x323dbd = _0x178ab6(_0x546b0c.split("/"));
      var _0x59336e = _0x178ab6(_0x140978.split("/"));
      var _0x3c8bff = Math.min(_0x323dbd.length, _0x59336e.length);
      var _0x496376 = _0x3c8bff;
      for (var _0x2a5deb = 0; _0x2a5deb < _0x3c8bff; _0x2a5deb++) {
        if (_0x323dbd[_0x2a5deb] !== _0x59336e[_0x2a5deb]) {
          _0x496376 = _0x2a5deb;
          break;
        }
      }
      var _0x36b461 = [];
      for (var _0x2a5deb = _0x496376; _0x2a5deb < _0x323dbd.length; _0x2a5deb++) {
        _0x36b461.push("..");
      }
      _0x36b461 = _0x36b461.concat(_0x59336e.slice(_0x496376));
      return _0x36b461.join("/");
    }
  };
  var _0x43e1de = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x35480e, _0x10f7c4) {
      _0x43e1de.ttys[_0x35480e] = {
        input: [],
        output: [],
        ops: _0x10f7c4
      };
      _0x453483.registerDevice(_0x35480e, _0x43e1de.stream_ops);
    },
    stream_ops: {
      open: function (_0x195819) {
        var _0x1fb92e = _0x43e1de.ttys[_0x195819.node.rdev];
        if (!_0x1fb92e) {
          throw new _0x453483.ErrnoError(43);
        }
        _0x195819.tty = _0x1fb92e;
        _0x195819.seekable = false;
      },
      close: function (_0x555b24) {
        _0x555b24.tty.ops.flush(_0x555b24.tty);
      },
      flush: function (_0x226073) {
        _0x226073.tty.ops.flush(_0x226073.tty);
      },
      read: function (_0x3a9407, _0x5ecd00, _0x1fb6e3, _0x937d9f, _0x571ae4) {
        if (!_0x3a9407.tty || !_0x3a9407.tty.ops.get_char) {
          throw new _0x453483.ErrnoError(60);
        }
        var _0x5ec6fa = 0;
        for (var _0x5c5e9c = 0; _0x5c5e9c < _0x937d9f; _0x5c5e9c++) {
          var _0x5a1463;
          try {
            _0x5a1463 = _0x3a9407.tty.ops.get_char(_0x3a9407.tty);
          } catch (_0x132c42) {
            throw new _0x453483.ErrnoError(29);
          }
          if (_0x5a1463 === undefined && _0x5ec6fa === 0) {
            throw new _0x453483.ErrnoError(6);
          }
          if (_0x5a1463 === null || _0x5a1463 === undefined) {
            break;
          }
          _0x5ec6fa++;
          _0x5ecd00[_0x1fb6e3 + _0x5c5e9c] = _0x5a1463;
        }
        if (_0x5ec6fa) {
          _0x3a9407.node.timestamp = Date.now();
        }
        return _0x5ec6fa;
      },
      write: function (_0x412c02, _0x2f92a4, _0xce4b83, _0x56ab02, _0x15f2aa) {
        if (!_0x412c02.tty || !_0x412c02.tty.ops.put_char) {
          throw new _0x453483.ErrnoError(60);
        }
        try {
          for (var _0x2a5100 = 0; _0x2a5100 < _0x56ab02; _0x2a5100++) {
            _0x412c02.tty.ops.put_char(_0x412c02.tty, _0x2f92a4[_0xce4b83 + _0x2a5100]);
          }
        } catch (_0x3f7433) {
          throw new _0x453483.ErrnoError(29);
        }
        if (_0x56ab02) {
          _0x412c02.node.timestamp = Date.now();
        }
        return _0x2a5100;
      }
    },
    default_tty_ops: {
      get_char: function (_0x195804) {
        if (!_0x195804.input.length) {
          var _0x34fbbb = null;
          if (_0x2ea75e) {
            var _0x3c40ad = 256;
            var _0x4c0ddd = Buffer.alloc ? Buffer.alloc(_0x3c40ad) : new Buffer(_0x3c40ad);
            var _0x52d742 = 0;
            try {
              _0x52d742 = _0x1eb312.readSync(process.stdin.fd, _0x4c0ddd, 0, _0x3c40ad, null);
            } catch (_0x22ad13) {
              if (_0x22ad13.toString().includes("EOF")) {
                _0x52d742 = 0;
              } else {
                throw _0x22ad13;
              }
            }
            if (_0x52d742 > 0) {
              _0x34fbbb = _0x4c0ddd.slice(0, _0x52d742).toString("utf-8");
            } else {
              _0x34fbbb = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0x34fbbb = window.prompt("Input: ");
            if (_0x34fbbb !== null) {
              _0x34fbbb += "\n";
            }
          } else if (typeof readline == "function") {
            _0x34fbbb = readline();
            if (_0x34fbbb !== null) {
              _0x34fbbb += "\n";
            }
          }
          if (!_0x34fbbb) {
            return null;
          }
          _0x195804.input = _0x1cc621(_0x34fbbb, true);
        }
        return _0x195804.input.shift();
      },
      put_char: function (_0x66170a, _0x3b10fa) {
        if (_0x3b10fa === null || _0x3b10fa === 10) {
          _0xaa0590(_0x10dc1b(_0x66170a.output, 0));
          _0x66170a.output = [];
        } else if (_0x3b10fa != 0) {
          _0x66170a.output.push(_0x3b10fa);
        }
      },
      flush: function (_0x5abe73) {
        if (_0x5abe73.output && _0x5abe73.output.length > 0) {
          _0xaa0590(_0x10dc1b(_0x5abe73.output, 0));
          _0x5abe73.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0x2b7f3d, _0x241a24) {
        if (_0x241a24 === null || _0x241a24 === 10) {
          _0x33bd81(_0x10dc1b(_0x2b7f3d.output, 0));
          _0x2b7f3d.output = [];
        } else if (_0x241a24 != 0) {
          _0x2b7f3d.output.push(_0x241a24);
        }
      },
      flush: function (_0x596430) {
        if (_0x596430.output && _0x596430.output.length > 0) {
          _0x33bd81(_0x10dc1b(_0x596430.output, 0));
          _0x596430.output = [];
        }
      }
    }
  };
  function _0xef6cba(_0x115de7) {
    var _0x24682b = _0x5b5b86(_0x115de7, 65536);
    var _0x15ff2c = _0x18375c(_0x24682b);
    while (_0x115de7 < _0x24682b) {
      _0x28416d[_0x15ff2c + _0x115de7++] = 0;
    }
    return _0x15ff2c;
  }
  var _0x2d71f7 = {
    ops_table: null,
    mount: function (_0xeb7cf7) {
      return _0x2d71f7.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0x7fb1d8, _0x1d2043, _0x109041, _0x28a81d) {
      if (_0x453483.isBlkdev(_0x109041) || _0x453483.isFIFO(_0x109041)) {
        throw new _0x453483.ErrnoError(63);
      }
      if (!_0x2d71f7.ops_table) {
        _0x2d71f7.ops_table = {
          dir: {
            node: {
              getattr: _0x2d71f7.node_ops.getattr,
              setattr: _0x2d71f7.node_ops.setattr,
              lookup: _0x2d71f7.node_ops.lookup,
              mknod: _0x2d71f7.node_ops.mknod,
              rename: _0x2d71f7.node_ops.rename,
              unlink: _0x2d71f7.node_ops.unlink,
              rmdir: _0x2d71f7.node_ops.rmdir,
              readdir: _0x2d71f7.node_ops.readdir,
              symlink: _0x2d71f7.node_ops.symlink
            },
            stream: {
              llseek: _0x2d71f7.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0x2d71f7.node_ops.getattr,
              setattr: _0x2d71f7.node_ops.setattr
            },
            stream: {
              llseek: _0x2d71f7.stream_ops.llseek,
              read: _0x2d71f7.stream_ops.read,
              write: _0x2d71f7.stream_ops.write,
              allocate: _0x2d71f7.stream_ops.allocate,
              mmap: _0x2d71f7.stream_ops.mmap,
              msync: _0x2d71f7.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0x2d71f7.node_ops.getattr,
              setattr: _0x2d71f7.node_ops.setattr,
              readlink: _0x2d71f7.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0x2d71f7.node_ops.getattr,
              setattr: _0x2d71f7.node_ops.setattr
            },
            stream: _0x453483.chrdev_stream_ops
          }
        };
      }
      var _0x46f2fa = _0x453483.createNode(_0x7fb1d8, _0x1d2043, _0x109041, _0x28a81d);
      if (_0x453483.isDir(_0x46f2fa.mode)) {
        _0x46f2fa.node_ops = _0x2d71f7.ops_table.dir.node;
        _0x46f2fa.stream_ops = _0x2d71f7.ops_table.dir.stream;
        _0x46f2fa.contents = {};
      } else if (_0x453483.isFile(_0x46f2fa.mode)) {
        _0x46f2fa.node_ops = _0x2d71f7.ops_table.file.node;
        _0x46f2fa.stream_ops = _0x2d71f7.ops_table.file.stream;
        _0x46f2fa.usedBytes = 0;
        _0x46f2fa.contents = null;
      } else if (_0x453483.isLink(_0x46f2fa.mode)) {
        _0x46f2fa.node_ops = _0x2d71f7.ops_table.link.node;
        _0x46f2fa.stream_ops = _0x2d71f7.ops_table.link.stream;
      } else if (_0x453483.isChrdev(_0x46f2fa.mode)) {
        _0x46f2fa.node_ops = _0x2d71f7.ops_table.chrdev.node;
        _0x46f2fa.stream_ops = _0x2d71f7.ops_table.chrdev.stream;
      }
      _0x46f2fa.timestamp = Date.now();
      if (_0x7fb1d8) {
        _0x7fb1d8.contents[_0x1d2043] = _0x46f2fa;
        _0x7fb1d8.timestamp = _0x46f2fa.timestamp;
      }
      return _0x46f2fa;
    },
    getFileDataAsTypedArray: function (_0xe908de) {
      if (!_0xe908de.contents) {
        return new Uint8Array(0);
      }
      if (_0xe908de.contents.subarray) {
        return _0xe908de.contents.subarray(0, _0xe908de.usedBytes);
      }
      return new Uint8Array(_0xe908de.contents);
    },
    expandFileStorage: function (_0x247747, _0x13c558) {
      var _0x195662 = _0x247747.contents ? _0x247747.contents.length : 0;
      if (_0x195662 >= _0x13c558) {
        return;
      }
      var _0x4b40ae = 1048576;
      _0x13c558 = Math.max(_0x13c558, _0x195662 * (_0x195662 < _0x4b40ae ? 2 : 1.125) >>> 0);
      if (_0x195662 != 0) {
        _0x13c558 = Math.max(_0x13c558, 256);
      }
      var _0x35678a = _0x247747.contents;
      _0x247747.contents = new Uint8Array(_0x13c558);
      if (_0x247747.usedBytes > 0) {
        _0x247747.contents.set(_0x35678a.subarray(0, _0x247747.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0x1e8c65, _0x4a7d26) {
      if (_0x1e8c65.usedBytes == _0x4a7d26) {
        return;
      }
      if (_0x4a7d26 == 0) {
        _0x1e8c65.contents = null;
        _0x1e8c65.usedBytes = 0;
      } else {
        var _0x553015 = _0x1e8c65.contents;
        _0x1e8c65.contents = new Uint8Array(_0x4a7d26);
        if (_0x553015) {
          _0x1e8c65.contents.set(_0x553015.subarray(0, Math.min(_0x4a7d26, _0x1e8c65.usedBytes)));
        }
        _0x1e8c65.usedBytes = _0x4a7d26;
      }
    },
    node_ops: {
      getattr: function (_0x1b0e9d) {
        var _0x38b0f1 = {};
        _0x38b0f1.dev = _0x453483.isChrdev(_0x1b0e9d.mode) ? _0x1b0e9d.id : 1;
        _0x38b0f1.ino = _0x1b0e9d.id;
        _0x38b0f1.mode = _0x1b0e9d.mode;
        _0x38b0f1.nlink = 1;
        _0x38b0f1.uid = 0;
        _0x38b0f1.gid = 0;
        _0x38b0f1.rdev = _0x1b0e9d.rdev;
        if (_0x453483.isDir(_0x1b0e9d.mode)) {
          _0x38b0f1.size = 4096;
        } else if (_0x453483.isFile(_0x1b0e9d.mode)) {
          _0x38b0f1.size = _0x1b0e9d.usedBytes;
        } else if (_0x453483.isLink(_0x1b0e9d.mode)) {
          _0x38b0f1.size = _0x1b0e9d.link.length;
        } else {
          _0x38b0f1.size = 0;
        }
        _0x38b0f1.atime = new Date(_0x1b0e9d.timestamp);
        _0x38b0f1.mtime = new Date(_0x1b0e9d.timestamp);
        _0x38b0f1.ctime = new Date(_0x1b0e9d.timestamp);
        _0x38b0f1.blksize = 4096;
        _0x38b0f1.blocks = Math.ceil(_0x38b0f1.size / _0x38b0f1.blksize);
        return _0x38b0f1;
      },
      setattr: function (_0x475d96, _0x209d9) {
        if (_0x209d9.mode !== undefined) {
          _0x475d96.mode = _0x209d9.mode;
        }
        if (_0x209d9.timestamp !== undefined) {
          _0x475d96.timestamp = _0x209d9.timestamp;
        }
        if (_0x209d9.size !== undefined) {
          _0x2d71f7.resizeFileStorage(_0x475d96, _0x209d9.size);
        }
      },
      lookup: function (_0x186bf9, _0x3886b4) {
        throw _0x453483.genericErrors[44];
      },
      mknod: function (_0x437cd8, _0x2edb51, _0x176ce1, _0x47cd71) {
        return _0x2d71f7.createNode(_0x437cd8, _0x2edb51, _0x176ce1, _0x47cd71);
      },
      rename: function (_0x22c497, _0x5499cc, _0x18a14f) {
        if (_0x453483.isDir(_0x22c497.mode)) {
          var _0x26e15c;
          try {
            _0x26e15c = _0x453483.lookupNode(_0x5499cc, _0x18a14f);
          } catch (_0xf30da0) {}
          if (_0x26e15c) {
            for (var _0x422a48 in _0x26e15c.contents) {
              throw new _0x453483.ErrnoError(55);
            }
          }
        }
        delete _0x22c497.parent.contents[_0x22c497.name];
        _0x22c497.parent.timestamp = Date.now();
        _0x22c497.name = _0x18a14f;
        _0x5499cc.contents[_0x18a14f] = _0x22c497;
        _0x5499cc.timestamp = _0x22c497.parent.timestamp;
        _0x22c497.parent = _0x5499cc;
      },
      unlink: function (_0x5865e7, _0x34850e) {
        delete _0x5865e7.contents[_0x34850e];
        _0x5865e7.timestamp = Date.now();
      },
      rmdir: function (_0x273d25, _0x4b7f58) {
        var _0x315491 = _0x453483.lookupNode(_0x273d25, _0x4b7f58);
        for (var _0x4265c0 in _0x315491.contents) {
          throw new _0x453483.ErrnoError(55);
        }
        delete _0x273d25.contents[_0x4b7f58];
        _0x273d25.timestamp = Date.now();
      },
      readdir: function (_0x3b83cd) {
        var _0x3c124c = [".", ".."];
        for (var _0x401189 in _0x3b83cd.contents) {
          if (!_0x3b83cd.contents.hasOwnProperty(_0x401189)) {
            continue;
          }
          _0x3c124c.push(_0x401189);
        }
        return _0x3c124c;
      },
      symlink: function (_0xb9d392, _0x13cba4, _0x4d0741) {
        var _0x3595b7 = _0x2d71f7.createNode(_0xb9d392, _0x13cba4, 41471, 0);
        _0x3595b7.link = _0x4d0741;
        return _0x3595b7;
      },
      readlink: function (_0x1cbde3) {
        if (!_0x453483.isLink(_0x1cbde3.mode)) {
          throw new _0x453483.ErrnoError(28);
        }
        return _0x1cbde3.link;
      }
    },
    stream_ops: {
      read: function (_0x40d0bd, _0x8e235f, _0x433b8a, _0x58bf97, _0x2d92d7) {
        var _0x204724 = _0x40d0bd.node.contents;
        if (_0x2d92d7 >= _0x40d0bd.node.usedBytes) {
          return 0;
        }
        var _0xe7c6a2 = Math.min(_0x40d0bd.node.usedBytes - _0x2d92d7, _0x58bf97);
        if (_0xe7c6a2 > 8 && _0x204724.subarray) {
          _0x8e235f.set(_0x204724.subarray(_0x2d92d7, _0x2d92d7 + _0xe7c6a2), _0x433b8a);
        } else {
          for (var _0x44bc3d = 0; _0x44bc3d < _0xe7c6a2; _0x44bc3d++) {
            _0x8e235f[_0x433b8a + _0x44bc3d] = _0x204724[_0x2d92d7 + _0x44bc3d];
          }
        }
        return _0xe7c6a2;
      },
      write: function (_0x42c78f, _0xac7993, _0x1ecb2b, _0x47b179, _0xb6bc83, _0xc96293) {
        if (_0xac7993.buffer === _0x28416d.buffer) {
          _0xc96293 = false;
        }
        if (!_0x47b179) {
          return 0;
        }
        var _0x5c0af2 = _0x42c78f.node;
        _0x5c0af2.timestamp = Date.now();
        if (_0xac7993.subarray && (!_0x5c0af2.contents || _0x5c0af2.contents.subarray)) {
          if (_0xc96293) {
            _0x5c0af2.contents = _0xac7993.subarray(_0x1ecb2b, _0x1ecb2b + _0x47b179);
            _0x5c0af2.usedBytes = _0x47b179;
            return _0x47b179;
          } else if (_0x5c0af2.usedBytes === 0 && _0xb6bc83 === 0) {
            _0x5c0af2.contents = _0xac7993.slice(_0x1ecb2b, _0x1ecb2b + _0x47b179);
            _0x5c0af2.usedBytes = _0x47b179;
            return _0x47b179;
          } else if (_0xb6bc83 + _0x47b179 <= _0x5c0af2.usedBytes) {
            _0x5c0af2.contents.set(_0xac7993.subarray(_0x1ecb2b, _0x1ecb2b + _0x47b179), _0xb6bc83);
            return _0x47b179;
          }
        }
        _0x2d71f7.expandFileStorage(_0x5c0af2, _0xb6bc83 + _0x47b179);
        if (_0x5c0af2.contents.subarray && _0xac7993.subarray) {
          _0x5c0af2.contents.set(_0xac7993.subarray(_0x1ecb2b, _0x1ecb2b + _0x47b179), _0xb6bc83);
        } else {
          for (var _0x3bfedd = 0; _0x3bfedd < _0x47b179; _0x3bfedd++) {
            _0x5c0af2.contents[_0xb6bc83 + _0x3bfedd] = _0xac7993[_0x1ecb2b + _0x3bfedd];
          }
        }
        _0x5c0af2.usedBytes = Math.max(_0x5c0af2.usedBytes, _0xb6bc83 + _0x47b179);
        return _0x47b179;
      },
      llseek: function (_0xbaa4e6, _0x6fb66d, _0x3fce08) {
        var _0x3ffe25 = _0x6fb66d;
        if (_0x3fce08 === 1) {
          _0x3ffe25 += _0xbaa4e6.position;
        } else if (_0x3fce08 === 2) {
          if (_0x453483.isFile(_0xbaa4e6.node.mode)) {
            _0x3ffe25 += _0xbaa4e6.node.usedBytes;
          }
        }
        if (_0x3ffe25 < 0) {
          throw new _0x453483.ErrnoError(28);
        }
        return _0x3ffe25;
      },
      allocate: function (_0x4d7118, _0x2835d7, _0x1dae2f) {
        _0x2d71f7.expandFileStorage(_0x4d7118.node, _0x2835d7 + _0x1dae2f);
        _0x4d7118.node.usedBytes = Math.max(_0x4d7118.node.usedBytes, _0x2835d7 + _0x1dae2f);
      },
      mmap: function (_0x58af41, _0x19294c, _0x3ea3f3, _0x5c9142, _0x132b95, _0x1591b7) {
        if (_0x19294c !== 0) {
          throw new _0x453483.ErrnoError(28);
        }
        if (!_0x453483.isFile(_0x58af41.node.mode)) {
          throw new _0x453483.ErrnoError(43);
        }
        var _0x51eac7;
        var _0x3486ee;
        var _0x3069ed = _0x58af41.node.contents;
        if (!(_0x1591b7 & 2) && _0x3069ed.buffer === _0x2c155a) {
          _0x3486ee = false;
          _0x51eac7 = _0x3069ed.byteOffset;
        } else {
          if (_0x5c9142 > 0 || _0x5c9142 + _0x3ea3f3 < _0x3069ed.length) {
            if (_0x3069ed.subarray) {
              _0x3069ed = _0x3069ed.subarray(_0x5c9142, _0x5c9142 + _0x3ea3f3);
            } else {
              _0x3069ed = Array.prototype.slice.call(_0x3069ed, _0x5c9142, _0x5c9142 + _0x3ea3f3);
            }
          }
          _0x3486ee = true;
          _0x51eac7 = _0xef6cba(_0x3ea3f3);
          if (!_0x51eac7) {
            throw new _0x453483.ErrnoError(48);
          }
          _0x28416d.set(_0x3069ed, _0x51eac7);
        }
        return {
          ptr: _0x51eac7,
          allocated: _0x3486ee
        };
      },
      msync: function (_0x2ed7f3, _0xed41c8, _0x5cefbd, _0x2937a3, _0x5f4e17) {
        if (!_0x453483.isFile(_0x2ed7f3.node.mode)) {
          throw new _0x453483.ErrnoError(43);
        }
        if (_0x5f4e17 & 2) {
          return 0;
        }
        var _0x5be345 = _0x2d71f7.stream_ops.write(_0x2ed7f3, _0xed41c8, 0, _0x2937a3, _0x5cefbd, false);
        return 0;
      }
    }
  };
  var _0x3a00cc = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x5f3f82 = null;
      if (typeof window === "object") {
        _0x5f3f82 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x1f7fa5(_0x5f3f82, "IDBFS used, but indexedDB not supported");
      return _0x5f3f82;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0x483e89) {
      return _0x2d71f7.mount.apply(null, arguments);
    },
    syncfs: function (_0xe78132, _0x1418d7, _0x4a1eda) {
      _0x3a00cc.getLocalSet(_0xe78132, function (_0x576627, _0x46694d) {
        if (_0x576627) {
          return _0x4a1eda(_0x576627);
        }
        _0x3a00cc.getRemoteSet(_0xe78132, function (_0x2d0839, _0x1fda5e) {
          if (_0x2d0839) {
            return _0x4a1eda(_0x2d0839);
          }
          var _0x315c38 = _0x1418d7 ? _0x1fda5e : _0x46694d;
          var _0x927513 = _0x1418d7 ? _0x46694d : _0x1fda5e;
          _0x3a00cc.reconcile(_0x315c38, _0x927513, _0x4a1eda);
        });
      });
    },
    getDB: function (_0x316c4e, _0x155bd1) {
      var _0x4c718b = _0x3a00cc.dbs[_0x316c4e];
      if (_0x4c718b) {
        return _0x155bd1(null, _0x4c718b);
      }
      var _0x51228a;
      try {
        _0x51228a = _0x3a00cc.indexedDB().open(_0x316c4e, _0x3a00cc.DB_VERSION);
      } catch (_0x15e009) {
        return _0x155bd1(_0x15e009);
      }
      if (!_0x51228a) {
        return _0x155bd1("Unable to connect to IndexedDB");
      }
      _0x51228a.onupgradeneeded = function (_0xaf5d30) {
        var _0xb7ca95 = _0xaf5d30.target.result;
        var _0x35aefa = _0xaf5d30.target.transaction;
        var _0x3d6ec4;
        if (_0xb7ca95.objectStoreNames.contains(_0x3a00cc.DB_STORE_NAME)) {
          _0x3d6ec4 = _0x35aefa.objectStore(_0x3a00cc.DB_STORE_NAME);
        } else {
          _0x3d6ec4 = _0xb7ca95.createObjectStore(_0x3a00cc.DB_STORE_NAME);
        }
        if (!_0x3d6ec4.indexNames.contains("timestamp")) {
          _0x3d6ec4.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0x51228a.onsuccess = function () {
        _0x4c718b = _0x51228a.result;
        _0x3a00cc.dbs[_0x316c4e] = _0x4c718b;
        _0x155bd1(null, _0x4c718b);
      };
      _0x51228a.onerror = function (_0x2326a3) {
        _0x155bd1(this.error);
        _0x2326a3.preventDefault();
      };
    },
    getLocalSet: function (_0x14d795, _0x164843) {
      var _0x4797c6 = {};
      function _0x26a5b9(_0x473132) {
        return _0x473132 !== "." && _0x473132 !== "..";
      }
      function _0x208e08(_0x27534e) {
        return function (_0x411c6c) {
          return _0x402431.join2(_0x27534e, _0x411c6c);
        };
      }
      var _0x2c4279 = _0x453483.readdir(_0x14d795.mountpoint).filter(_0x26a5b9).map(_0x208e08(_0x14d795.mountpoint));
      while (_0x2c4279.length) {
        var _0x29e9f8 = _0x2c4279.pop();
        var _0x9354a8;
        try {
          _0x9354a8 = _0x453483.stat(_0x29e9f8);
        } catch (_0x36f026) {
          return _0x164843(_0x36f026);
        }
        if (_0x453483.isDir(_0x9354a8.mode)) {
          _0x2c4279.push.apply(_0x2c4279, _0x453483.readdir(_0x29e9f8).filter(_0x26a5b9).map(_0x208e08(_0x29e9f8)));
        }
        _0x4797c6[_0x29e9f8] = {
          timestamp: _0x9354a8.mtime
        };
      }
      return _0x164843(null, {
        type: "local",
        entries: _0x4797c6
      });
    },
    getRemoteSet: function (_0x2a1c3c, _0x3cd73d) {
      var _0x308863 = {};
      _0x3a00cc.getDB(_0x2a1c3c.mountpoint, function (_0x2f1a48, _0x5ca3fb) {
        if (_0x2f1a48) {
          return _0x3cd73d(_0x2f1a48);
        }
        try {
          var _0x1f83bb = _0x5ca3fb.transaction([_0x3a00cc.DB_STORE_NAME], "readonly");
          _0x1f83bb.onerror = function (_0x195306) {
            _0x3cd73d(this.error);
            _0x195306.preventDefault();
          };
          var _0x55760c = _0x1f83bb.objectStore(_0x3a00cc.DB_STORE_NAME);
          var _0x47607d = _0x55760c.index("timestamp");
          _0x47607d.openKeyCursor().onsuccess = function (_0x25c66e) {
            var _0x36b78e = _0x25c66e.target.result;
            if (!_0x36b78e) {
              return _0x3cd73d(null, {
                type: "remote",
                db: _0x5ca3fb,
                entries: _0x308863
              });
            }
            _0x308863[_0x36b78e.primaryKey] = {
              timestamp: _0x36b78e.key
            };
            _0x36b78e.continue();
          };
        } catch (_0x4853e5) {
          return _0x3cd73d(_0x4853e5);
        }
      });
    },
    loadLocalEntry: function (_0x18828e, _0x2cdd5d) {
      var _0x5eb536;
      var _0x2fea61;
      try {
        var _0x1c7620 = _0x453483.lookupPath(_0x18828e);
        _0x2fea61 = _0x1c7620.node;
        _0x5eb536 = _0x453483.stat(_0x18828e);
      } catch (_0x5c04a9) {
        return _0x2cdd5d(_0x5c04a9);
      }
      if (_0x453483.isDir(_0x5eb536.mode)) {
        return _0x2cdd5d(null, {
          timestamp: _0x5eb536.mtime,
          mode: _0x5eb536.mode
        });
      } else if (_0x453483.isFile(_0x5eb536.mode)) {
        _0x2fea61.contents = _0x2d71f7.getFileDataAsTypedArray(_0x2fea61);
        return _0x2cdd5d(null, {
          timestamp: _0x5eb536.mtime,
          mode: _0x5eb536.mode,
          contents: _0x2fea61.contents
        });
      } else {
        return _0x2cdd5d(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0x1ea445, _0x20a2df, _0x4b7142) {
      try {
        if (_0x453483.isDir(_0x20a2df.mode)) {
          _0x453483.mkdirTree(_0x1ea445, _0x20a2df.mode);
        } else if (_0x453483.isFile(_0x20a2df.mode)) {
          _0x453483.writeFile(_0x1ea445, _0x20a2df.contents, {
            canOwn: true
          });
        } else {
          return _0x4b7142(new Error("node type not supported"));
        }
        _0x453483.chmod(_0x1ea445, _0x20a2df.mode);
        _0x453483.utime(_0x1ea445, _0x20a2df.timestamp, _0x20a2df.timestamp);
      } catch (_0x2ca0b3) {
        return _0x4b7142(_0x2ca0b3);
      }
      _0x4b7142(null);
    },
    removeLocalEntry: function (_0x4cf84c, _0x41c827) {
      try {
        var _0x11bc48 = _0x453483.lookupPath(_0x4cf84c);
        var _0x529807 = _0x453483.stat(_0x4cf84c);
        if (_0x453483.isDir(_0x529807.mode)) {
          _0x453483.rmdir(_0x4cf84c);
        } else if (_0x453483.isFile(_0x529807.mode)) {
          _0x453483.unlink(_0x4cf84c);
        }
      } catch (_0x3f77d4) {
        return _0x41c827(_0x3f77d4);
      }
      _0x41c827(null);
    },
    loadRemoteEntry: function (_0x3b0f4f, _0x198019, _0x2b5463) {
      var _0x4aad85 = _0x3b0f4f.get(_0x198019);
      _0x4aad85.onsuccess = function (_0x4014f5) {
        _0x2b5463(null, _0x4014f5.target.result);
      };
      _0x4aad85.onerror = function (_0x56d2f2) {
        _0x2b5463(this.error);
        _0x56d2f2.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x28e1d7, _0x5561c0, _0x1a0843, _0x5570cc) {
      var _0x4e970b = _0x28e1d7.put(_0x1a0843, _0x5561c0);
      _0x4e970b.onsuccess = function () {
        _0x5570cc(null);
      };
      _0x4e970b.onerror = function (_0xc6f21b) {
        _0x5570cc(this.error);
        _0xc6f21b.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x5db2da, _0x4740a3, _0x13872e) {
      var _0x2ef217 = _0x5db2da.delete(_0x4740a3);
      _0x2ef217.onsuccess = function () {
        _0x13872e(null);
      };
      _0x2ef217.onerror = function (_0x1eba17) {
        _0x13872e(this.error);
        _0x1eba17.preventDefault();
      };
    },
    reconcile: function (_0x5cd390, _0x34d0ee, _0x132b4e) {
      var _0x110b32 = 0;
      var _0xd87cb6 = [];
      Object.keys(_0x5cd390.entries).forEach(function (_0x3c658b) {
        var _0x25151d = _0x5cd390.entries[_0x3c658b];
        var _0x343101 = _0x34d0ee.entries[_0x3c658b];
        if (!_0x343101 || _0x25151d.timestamp.getTime() != _0x343101.timestamp.getTime()) {
          _0xd87cb6.push(_0x3c658b);
          _0x110b32++;
        }
      });
      var _0x1e377e = [];
      Object.keys(_0x34d0ee.entries).forEach(function (_0x18886e) {
        if (!_0x5cd390.entries[_0x18886e]) {
          _0x1e377e.push(_0x18886e);
          _0x110b32++;
        }
      });
      if (!_0x110b32) {
        return _0x132b4e(null);
      }
      var _0x28cf36 = false;
      var _0x14f585 = _0x5cd390.type === "remote" ? _0x5cd390.db : _0x34d0ee.db;
      var _0x10771d = _0x14f585.transaction([_0x3a00cc.DB_STORE_NAME], "readwrite");
      var _0x12a60d = _0x10771d.objectStore(_0x3a00cc.DB_STORE_NAME);
      function _0x4454e7(_0x5a219d) {
        if (_0x5a219d && !_0x28cf36) {
          _0x28cf36 = true;
          return _0x132b4e(_0x5a219d);
        }
      }
      _0x10771d.onerror = function (_0x101200) {
        _0x4454e7(this.error);
        _0x101200.preventDefault();
      };
      _0x10771d.oncomplete = function (_0x42d4a6) {
        if (!_0x28cf36) {
          _0x132b4e(null);
        }
      };
      _0xd87cb6.sort().forEach(function (_0x199e87) {
        if (_0x34d0ee.type === "local") {
          _0x3a00cc.loadRemoteEntry(_0x12a60d, _0x199e87, function (_0x328bd7, _0x5a9951) {
            if (_0x328bd7) {
              return _0x4454e7(_0x328bd7);
            }
            _0x3a00cc.storeLocalEntry(_0x199e87, _0x5a9951, _0x4454e7);
          });
        } else {
          _0x3a00cc.loadLocalEntry(_0x199e87, function (_0xfd56d1, _0x1c63e8) {
            if (_0xfd56d1) {
              return _0x4454e7(_0xfd56d1);
            }
            _0x3a00cc.storeRemoteEntry(_0x12a60d, _0x199e87, _0x1c63e8, _0x4454e7);
          });
        }
      });
      _0x1e377e.sort().reverse().forEach(function (_0x242158) {
        if (_0x34d0ee.type === "local") {
          _0x3a00cc.removeLocalEntry(_0x242158, _0x4454e7);
        } else {
          _0x3a00cc.removeRemoteEntry(_0x12a60d, _0x242158, _0x4454e7);
        }
      });
    }
  };
  var _0x453483 = {
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
    lookupPath: function (_0x4ab17c, _0x59e320) {
      _0x4ab17c = _0x285bab.resolve(_0x453483.cwd(), _0x4ab17c);
      _0x59e320 = _0x59e320 || {};
      if (!_0x4ab17c) {
        return {
          path: "",
          node: null
        };
      }
      var _0x500a46 = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x46a33e in _0x500a46) {
        if (_0x59e320[_0x46a33e] === undefined) {
          _0x59e320[_0x46a33e] = _0x500a46[_0x46a33e];
        }
      }
      if (_0x59e320.recurse_count > 8) {
        throw new _0x453483.ErrnoError(32);
      }
      var _0x44092a = _0x402431.normalizeArray(_0x4ab17c.split("/").filter(function (_0x47e486) {
        return !!_0x47e486;
      }), false);
      var _0xe152a5 = _0x453483.root;
      var _0x1b43f1 = "/";
      for (var _0x9fbf37 = 0; _0x9fbf37 < _0x44092a.length; _0x9fbf37++) {
        var _0xaebb58 = _0x9fbf37 === _0x44092a.length - 1;
        if (_0xaebb58 && _0x59e320.parent) {
          break;
        }
        _0xe152a5 = _0x453483.lookupNode(_0xe152a5, _0x44092a[_0x9fbf37]);
        _0x1b43f1 = _0x402431.join2(_0x1b43f1, _0x44092a[_0x9fbf37]);
        if (_0x453483.isMountpoint(_0xe152a5)) {
          if (!_0xaebb58 || _0xaebb58 && _0x59e320.follow_mount) {
            _0xe152a5 = _0xe152a5.mounted.root;
          }
        }
        if (!_0xaebb58 || _0x59e320.follow) {
          var _0x525138 = 0;
          while (_0x453483.isLink(_0xe152a5.mode)) {
            var _0x266dd0 = _0x453483.readlink(_0x1b43f1);
            _0x1b43f1 = _0x285bab.resolve(_0x402431.dirname(_0x1b43f1), _0x266dd0);
            var _0x4569f4 = _0x453483.lookupPath(_0x1b43f1, {
              recurse_count: _0x59e320.recurse_count
            });
            _0xe152a5 = _0x4569f4.node;
            if (_0x525138++ > 40) {
              throw new _0x453483.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0x1b43f1,
        node: _0xe152a5
      };
    },
    getPath: function (_0x42f267) {
      var _0x527bc6;
      while (true) {
        if (_0x453483.isRoot(_0x42f267)) {
          var _0x458347 = _0x42f267.mount.mountpoint;
          if (!_0x527bc6) {
            return _0x458347;
          }
          if (_0x458347[_0x458347.length - 1] !== "/") {
            return _0x458347 + "/" + _0x527bc6;
          } else {
            return _0x458347 + _0x527bc6;
          }
        }
        _0x527bc6 = _0x527bc6 ? _0x42f267.name + "/" + _0x527bc6 : _0x42f267.name;
        _0x42f267 = _0x42f267.parent;
      }
    },
    hashName: function (_0x579300, _0x4181d4) {
      var _0x40755b = 0;
      for (var _0x3cb792 = 0; _0x3cb792 < _0x4181d4.length; _0x3cb792++) {
        _0x40755b = (_0x40755b << 5) - _0x40755b + _0x4181d4.charCodeAt(_0x3cb792) | 0;
      }
      return (_0x579300 + _0x40755b >>> 0) % _0x453483.nameTable.length;
    },
    hashAddNode: function (_0x1e7a36) {
      var _0x3508f2 = _0x453483.hashName(_0x1e7a36.parent.id, _0x1e7a36.name);
      _0x1e7a36.name_next = _0x453483.nameTable[_0x3508f2];
      _0x453483.nameTable[_0x3508f2] = _0x1e7a36;
    },
    hashRemoveNode: function (_0x335bf4) {
      var _0x4b377f = _0x453483.hashName(_0x335bf4.parent.id, _0x335bf4.name);
      if (_0x453483.nameTable[_0x4b377f] === _0x335bf4) {
        _0x453483.nameTable[_0x4b377f] = _0x335bf4.name_next;
      } else {
        var _0xa5a8b = _0x453483.nameTable[_0x4b377f];
        while (_0xa5a8b) {
          if (_0xa5a8b.name_next === _0x335bf4) {
            _0xa5a8b.name_next = _0x335bf4.name_next;
            break;
          }
          _0xa5a8b = _0xa5a8b.name_next;
        }
      }
    },
    lookupNode: function (_0x72fe53, _0x12d365) {
      var _0x236bb2 = _0x453483.mayLookup(_0x72fe53);
      if (_0x236bb2) {
        throw new _0x453483.ErrnoError(_0x236bb2, _0x72fe53);
      }
      var _0x5a41af = _0x453483.hashName(_0x72fe53.id, _0x12d365);
      for (var _0x2533c2 = _0x453483.nameTable[_0x5a41af]; _0x2533c2; _0x2533c2 = _0x2533c2.name_next) {
        var _0x347d2b = _0x2533c2.name;
        if (_0x2533c2.parent.id === _0x72fe53.id && _0x347d2b === _0x12d365) {
          return _0x2533c2;
        }
      }
      return _0x453483.lookup(_0x72fe53, _0x12d365);
    },
    createNode: function (_0x205243, _0x97adaf, _0x3761c1, _0xd80ecb) {
      var _0x22ca24 = new _0x453483.FSNode(_0x205243, _0x97adaf, _0x3761c1, _0xd80ecb);
      _0x453483.hashAddNode(_0x22ca24);
      return _0x22ca24;
    },
    destroyNode: function (_0x19e10e) {
      _0x453483.hashRemoveNode(_0x19e10e);
    },
    isRoot: function (_0x4d7ea9) {
      return _0x4d7ea9 === _0x4d7ea9.parent;
    },
    isMountpoint: function (_0x15844d) {
      return !!_0x15844d.mounted;
    },
    isFile: function (_0x6fc6ca) {
      return (_0x6fc6ca & 61440) === 32768;
    },
    isDir: function (_0x59bd3c) {
      return (_0x59bd3c & 61440) === 16384;
    },
    isLink: function (_0x1d4427) {
      return (_0x1d4427 & 61440) === 40960;
    },
    isChrdev: function (_0x44fed1) {
      return (_0x44fed1 & 61440) === 8192;
    },
    isBlkdev: function (_0x18e0ea) {
      return (_0x18e0ea & 61440) === 24576;
    },
    isFIFO: function (_0x280dac) {
      return (_0x280dac & 61440) === 4096;
    },
    isSocket: function (_0x588a0a) {
      return (_0x588a0a & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0x49fa01) {
      var _0x2ddfe7 = _0x453483.flagModes[_0x49fa01];
      if (typeof _0x2ddfe7 === "undefined") {
        throw new Error("Unknown file open mode: " + _0x49fa01);
      }
      return _0x2ddfe7;
    },
    flagsToPermissionString: function (_0x4e7825) {
      var _0x3cdc54 = ["r", "w", "rw"][_0x4e7825 & 3];
      if (_0x4e7825 & 512) {
        _0x3cdc54 += "w";
      }
      return _0x3cdc54;
    },
    nodePermissions: function (_0x4cbc91, _0x36c71a) {
      if (_0x453483.ignorePermissions) {
        return 0;
      }
      if (_0x36c71a.includes("r") && !(_0x4cbc91.mode & 292)) {
        return 2;
      } else if (_0x36c71a.includes("w") && !(_0x4cbc91.mode & 146)) {
        return 2;
      } else if (_0x36c71a.includes("x") && !(_0x4cbc91.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0x203ae1) {
      var _0x2d4434 = _0x453483.nodePermissions(_0x203ae1, "x");
      if (_0x2d4434) {
        return _0x2d4434;
      }
      if (!_0x203ae1.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x527c53, _0x28aac0) {
      try {
        var _0x4b8b15 = _0x453483.lookupNode(_0x527c53, _0x28aac0);
        return 20;
      } catch (_0x32269e) {}
      return _0x453483.nodePermissions(_0x527c53, "wx");
    },
    mayDelete: function (_0x1619e4, _0x456252, _0x5adacf) {
      var _0x13772d;
      try {
        _0x13772d = _0x453483.lookupNode(_0x1619e4, _0x456252);
      } catch (_0x2e86b8) {
        return _0x2e86b8.errno;
      }
      var _0x2a7a5a = _0x453483.nodePermissions(_0x1619e4, "wx");
      if (_0x2a7a5a) {
        return _0x2a7a5a;
      }
      if (_0x5adacf) {
        if (!_0x453483.isDir(_0x13772d.mode)) {
          return 54;
        }
        if (_0x453483.isRoot(_0x13772d) || _0x453483.getPath(_0x13772d) === _0x453483.cwd()) {
          return 10;
        }
      } else if (_0x453483.isDir(_0x13772d.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0x5a272d, _0x412979) {
      if (!_0x5a272d) {
        return 44;
      }
      if (_0x453483.isLink(_0x5a272d.mode)) {
        return 32;
      } else if (_0x453483.isDir(_0x5a272d.mode)) {
        if (_0x453483.flagsToPermissionString(_0x412979) !== "r" || _0x412979 & 512) {
          return 31;
        }
      }
      return _0x453483.nodePermissions(_0x5a272d, _0x453483.flagsToPermissionString(_0x412979));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x3a6928, _0x487263) {
      _0x3a6928 = _0x3a6928 || 0;
      _0x487263 = _0x487263 || _0x453483.MAX_OPEN_FDS;
      for (var _0x515ec3 = _0x3a6928; _0x515ec3 <= _0x487263; _0x515ec3++) {
        if (!_0x453483.streams[_0x515ec3]) {
          return _0x515ec3;
        }
      }
      throw new _0x453483.ErrnoError(33);
    },
    getStream: function (_0x3e394a) {
      return _0x453483.streams[_0x3e394a];
    },
    createStream: function (_0x4fc0e1, _0x5aeb06, _0x451133) {
      if (!_0x453483.FSStream) {
        _0x453483.FSStream = function () {};
        _0x453483.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x2e5b4e) {
              this.node = _0x2e5b4e;
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
      var _0x46b200 = new _0x453483.FSStream();
      for (var _0x504f90 in _0x4fc0e1) {
        _0x46b200[_0x504f90] = _0x4fc0e1[_0x504f90];
      }
      _0x4fc0e1 = _0x46b200;
      var _0x4fc379 = _0x453483.nextfd(_0x5aeb06, _0x451133);
      _0x4fc0e1.fd = _0x4fc379;
      _0x453483.streams[_0x4fc379] = _0x4fc0e1;
      return _0x4fc0e1;
    },
    closeStream: function (_0x3cdcb8) {
      _0x453483.streams[_0x3cdcb8] = null;
    },
    chrdev_stream_ops: {
      open: function (_0x3b1e2b) {
        var _0x346545 = _0x453483.getDevice(_0x3b1e2b.node.rdev);
        _0x3b1e2b.stream_ops = _0x346545.stream_ops;
        if (_0x3b1e2b.stream_ops.open) {
          _0x3b1e2b.stream_ops.open(_0x3b1e2b);
        }
      },
      llseek: function () {
        throw new _0x453483.ErrnoError(70);
      }
    },
    major: function (_0x5f314a) {
      return _0x5f314a >> 8;
    },
    minor: function (_0x3d0d17) {
      return _0x3d0d17 & 255;
    },
    makedev: function (_0x3dc368, _0x1aa279) {
      return _0x3dc368 << 8 | _0x1aa279;
    },
    registerDevice: function (_0x1f580f, _0x47222a) {
      _0x453483.devices[_0x1f580f] = {
        stream_ops: _0x47222a
      };
    },
    getDevice: function (_0x28bd2f) {
      return _0x453483.devices[_0x28bd2f];
    },
    getMounts: function (_0x27fb25) {
      var _0x4ffb8e = [];
      var _0xa94213 = [_0x27fb25];
      while (_0xa94213.length) {
        var _0x31208b = _0xa94213.pop();
        _0x4ffb8e.push(_0x31208b);
        _0xa94213.push.apply(_0xa94213, _0x31208b.mounts);
      }
      return _0x4ffb8e;
    },
    syncfs: function (_0x599486, _0x3d34ae) {
      if (typeof _0x599486 === "function") {
        _0x3d34ae = _0x599486;
        _0x599486 = false;
      }
      _0x453483.syncFSRequests++;
      if (_0x453483.syncFSRequests > 1) {
        _0x33bd81("warning: " + _0x453483.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0x5db7b8 = _0x453483.getMounts(_0x453483.root.mount);
      var _0x41f1e2 = 0;
      function _0x38e90a(_0x575b2d) {
        _0x453483.syncFSRequests--;
        return _0x3d34ae(_0x575b2d);
      }
      function _0x4a7428(_0xa5341b) {
        if (_0xa5341b) {
          if (!_0x4a7428.errored) {
            _0x4a7428.errored = true;
            return _0x38e90a(_0xa5341b);
          }
          return;
        }
        if (++_0x41f1e2 >= _0x5db7b8.length) {
          _0x38e90a(null);
        }
      }
      _0x5db7b8.forEach(function (_0x49b104) {
        if (!_0x49b104.type.syncfs) {
          return _0x4a7428(null);
        }
        _0x49b104.type.syncfs(_0x49b104, _0x599486, _0x4a7428);
      });
    },
    mount: function (_0x2e1520, _0x13efee, _0x2336c0) {
      var _0x4d6360 = _0x2336c0 === "/";
      var _0x4ad8f4 = !_0x2336c0;
      var _0xf1ad3c;
      if (_0x4d6360 && _0x453483.root) {
        throw new _0x453483.ErrnoError(10);
      } else if (!_0x4d6360 && !_0x4ad8f4) {
        var _0x1139d5 = _0x453483.lookupPath(_0x2336c0, {
          follow_mount: false
        });
        _0x2336c0 = _0x1139d5.path;
        _0xf1ad3c = _0x1139d5.node;
        if (_0x453483.isMountpoint(_0xf1ad3c)) {
          throw new _0x453483.ErrnoError(10);
        }
        if (!_0x453483.isDir(_0xf1ad3c.mode)) {
          throw new _0x453483.ErrnoError(54);
        }
      }
      var _0x5c2a68 = {
        type: _0x2e1520,
        opts: _0x13efee,
        mountpoint: _0x2336c0,
        mounts: []
      };
      var _0xccd541 = _0x2e1520.mount(_0x5c2a68);
      _0xccd541.mount = _0x5c2a68;
      _0x5c2a68.root = _0xccd541;
      if (_0x4d6360) {
        _0x453483.root = _0xccd541;
      } else if (_0xf1ad3c) {
        _0xf1ad3c.mounted = _0x5c2a68;
        if (_0xf1ad3c.mount) {
          _0xf1ad3c.mount.mounts.push(_0x5c2a68);
        }
      }
      return _0xccd541;
    },
    unmount: function (_0x57a904) {
      var _0xd3deef = _0x453483.lookupPath(_0x57a904, {
        follow_mount: false
      });
      if (!_0x453483.isMountpoint(_0xd3deef.node)) {
        throw new _0x453483.ErrnoError(28);
      }
      var _0x37e4d4 = _0xd3deef.node;
      var _0x24344e = _0x37e4d4.mounted;
      var _0x4c5608 = _0x453483.getMounts(_0x24344e);
      Object.keys(_0x453483.nameTable).forEach(function (_0x30baec) {
        var _0x1b6478 = _0x453483.nameTable[_0x30baec];
        while (_0x1b6478) {
          var _0x583bfb = _0x1b6478.name_next;
          if (_0x4c5608.includes(_0x1b6478.mount)) {
            _0x453483.destroyNode(_0x1b6478);
          }
          _0x1b6478 = _0x583bfb;
        }
      });
      _0x37e4d4.mounted = null;
      var _0x32f1eb = _0x37e4d4.mount.mounts.indexOf(_0x24344e);
      _0x37e4d4.mount.mounts.splice(_0x32f1eb, 1);
    },
    lookup: function (_0x2c618f, _0x1cff5b) {
      return _0x2c618f.node_ops.lookup(_0x2c618f, _0x1cff5b);
    },
    mknod: function (_0x32c14d, _0x339fbd, _0x3d25d5) {
      var _0x5ed9b3 = _0x453483.lookupPath(_0x32c14d, {
        parent: true
      });
      var _0x2eb719 = _0x5ed9b3.node;
      var _0x1a9076 = _0x402431.basename(_0x32c14d);
      if (!_0x1a9076 || _0x1a9076 === "." || _0x1a9076 === "..") {
        throw new _0x453483.ErrnoError(28);
      }
      var _0x3ba28a = _0x453483.mayCreate(_0x2eb719, _0x1a9076);
      if (_0x3ba28a) {
        throw new _0x453483.ErrnoError(_0x3ba28a);
      }
      if (!_0x2eb719.node_ops.mknod) {
        throw new _0x453483.ErrnoError(63);
      }
      return _0x2eb719.node_ops.mknod(_0x2eb719, _0x1a9076, _0x339fbd, _0x3d25d5);
    },
    create: function (_0x1170b3, _0xcfd4c7) {
      _0xcfd4c7 = _0xcfd4c7 !== undefined ? _0xcfd4c7 : 438;
      _0xcfd4c7 &= 4095;
      _0xcfd4c7 |= 32768;
      return _0x453483.mknod(_0x1170b3, _0xcfd4c7, 0);
    },
    mkdir: function (_0x239eb2, _0x5c3466) {
      _0x5c3466 = _0x5c3466 !== undefined ? _0x5c3466 : 511;
      _0x5c3466 &= 1023;
      _0x5c3466 |= 16384;
      return _0x453483.mknod(_0x239eb2, _0x5c3466, 0);
    },
    mkdirTree: function (_0x4ef850, _0x141b3f) {
      var _0x357a82 = _0x4ef850.split("/");
      var _0x21ea58 = "";
      for (var _0x53e58c = 0; _0x53e58c < _0x357a82.length; ++_0x53e58c) {
        if (!_0x357a82[_0x53e58c]) {
          continue;
        }
        _0x21ea58 += "/" + _0x357a82[_0x53e58c];
        try {
          _0x453483.mkdir(_0x21ea58, _0x141b3f);
        } catch (_0x1c7102) {
          if (_0x1c7102.errno != 20) {
            throw _0x1c7102;
          }
        }
      }
    },
    mkdev: function (_0x2acf80, _0x3aa78e, _0x5ca6f8) {
      if (typeof _0x5ca6f8 === "undefined") {
        _0x5ca6f8 = _0x3aa78e;
        _0x3aa78e = 438;
      }
      _0x3aa78e |= 8192;
      return _0x453483.mknod(_0x2acf80, _0x3aa78e, _0x5ca6f8);
    },
    symlink: function (_0x438871, _0x364e59) {
      if (!_0x285bab.resolve(_0x438871)) {
        throw new _0x453483.ErrnoError(44);
      }
      var _0x574a1b = _0x453483.lookupPath(_0x364e59, {
        parent: true
      });
      var _0x54f056 = _0x574a1b.node;
      if (!_0x54f056) {
        throw new _0x453483.ErrnoError(44);
      }
      var _0x386d74 = _0x402431.basename(_0x364e59);
      var _0x2434bc = _0x453483.mayCreate(_0x54f056, _0x386d74);
      if (_0x2434bc) {
        throw new _0x453483.ErrnoError(_0x2434bc);
      }
      if (!_0x54f056.node_ops.symlink) {
        throw new _0x453483.ErrnoError(63);
      }
      return _0x54f056.node_ops.symlink(_0x54f056, _0x386d74, _0x438871);
    },
    rename: function (_0x4be60f, _0x1f4bf5) {
      var _0x5d4098 = _0x402431.dirname(_0x4be60f);
      var _0x1ddde0 = _0x402431.dirname(_0x1f4bf5);
      var _0x57227c = _0x402431.basename(_0x4be60f);
      var _0x49364d = _0x402431.basename(_0x1f4bf5);
      var _0xda4cf3;
      var _0x34ac2a;
      var _0x49bec7;
      _0xda4cf3 = _0x453483.lookupPath(_0x4be60f, {
        parent: true
      });
      _0x34ac2a = _0xda4cf3.node;
      _0xda4cf3 = _0x453483.lookupPath(_0x1f4bf5, {
        parent: true
      });
      _0x49bec7 = _0xda4cf3.node;
      if (!_0x34ac2a || !_0x49bec7) {
        throw new _0x453483.ErrnoError(44);
      }
      if (_0x34ac2a.mount !== _0x49bec7.mount) {
        throw new _0x453483.ErrnoError(75);
      }
      var _0x14fabd = _0x453483.lookupNode(_0x34ac2a, _0x57227c);
      var _0x1fd184 = _0x285bab.relative(_0x4be60f, _0x1ddde0);
      if (_0x1fd184.charAt(0) !== ".") {
        throw new _0x453483.ErrnoError(28);
      }
      _0x1fd184 = _0x285bab.relative(_0x1f4bf5, _0x5d4098);
      if (_0x1fd184.charAt(0) !== ".") {
        throw new _0x453483.ErrnoError(55);
      }
      var _0x12dc49;
      try {
        _0x12dc49 = _0x453483.lookupNode(_0x49bec7, _0x49364d);
      } catch (_0x1a4eba) {}
      if (_0x14fabd === _0x12dc49) {
        return;
      }
      var _0x496f1f = _0x453483.isDir(_0x14fabd.mode);
      var _0x5b5ac6 = _0x453483.mayDelete(_0x34ac2a, _0x57227c, _0x496f1f);
      if (_0x5b5ac6) {
        throw new _0x453483.ErrnoError(_0x5b5ac6);
      }
      _0x5b5ac6 = _0x12dc49 ? _0x453483.mayDelete(_0x49bec7, _0x49364d, _0x496f1f) : _0x453483.mayCreate(_0x49bec7, _0x49364d);
      if (_0x5b5ac6) {
        throw new _0x453483.ErrnoError(_0x5b5ac6);
      }
      if (!_0x34ac2a.node_ops.rename) {
        throw new _0x453483.ErrnoError(63);
      }
      if (_0x453483.isMountpoint(_0x14fabd) || _0x12dc49 && _0x453483.isMountpoint(_0x12dc49)) {
        throw new _0x453483.ErrnoError(10);
      }
      if (_0x49bec7 !== _0x34ac2a) {
        _0x5b5ac6 = _0x453483.nodePermissions(_0x34ac2a, "w");
        if (_0x5b5ac6) {
          throw new _0x453483.ErrnoError(_0x5b5ac6);
        }
      }
      try {
        if (_0x453483.trackingDelegate.willMovePath) {
          _0x453483.trackingDelegate.willMovePath(_0x4be60f, _0x1f4bf5);
        }
      } catch (_0x654b7d) {
        _0x33bd81("FS.trackingDelegate['willMovePath']('" + _0x4be60f + "', '" + _0x1f4bf5 + "') threw an exception: " + _0x654b7d.message);
      }
      _0x453483.hashRemoveNode(_0x14fabd);
      try {
        _0x34ac2a.node_ops.rename(_0x14fabd, _0x49bec7, _0x49364d);
      } catch (_0x2ee0ee) {
        throw _0x2ee0ee;
      } finally {
        _0x453483.hashAddNode(_0x14fabd);
      }
      try {
        if (_0x453483.trackingDelegate.onMovePath) {
          _0x453483.trackingDelegate.onMovePath(_0x4be60f, _0x1f4bf5);
        }
      } catch (_0x2a16c1) {
        _0x33bd81("FS.trackingDelegate['onMovePath']('" + _0x4be60f + "', '" + _0x1f4bf5 + "') threw an exception: " + _0x2a16c1.message);
      }
    },
    rmdir: function (_0x43ae3c) {
      var _0x447ae7 = _0x453483.lookupPath(_0x43ae3c, {
        parent: true
      });
      var _0x2fb378 = _0x447ae7.node;
      var _0x508e3e = _0x402431.basename(_0x43ae3c);
      var _0x527bcb = _0x453483.lookupNode(_0x2fb378, _0x508e3e);
      var _0xb0ec01 = _0x453483.mayDelete(_0x2fb378, _0x508e3e, true);
      if (_0xb0ec01) {
        throw new _0x453483.ErrnoError(_0xb0ec01);
      }
      if (!_0x2fb378.node_ops.rmdir) {
        throw new _0x453483.ErrnoError(63);
      }
      if (_0x453483.isMountpoint(_0x527bcb)) {
        throw new _0x453483.ErrnoError(10);
      }
      try {
        if (_0x453483.trackingDelegate.willDeletePath) {
          _0x453483.trackingDelegate.willDeletePath(_0x43ae3c);
        }
      } catch (_0x3954a8) {
        _0x33bd81("FS.trackingDelegate['willDeletePath']('" + _0x43ae3c + "') threw an exception: " + _0x3954a8.message);
      }
      _0x2fb378.node_ops.rmdir(_0x2fb378, _0x508e3e);
      _0x453483.destroyNode(_0x527bcb);
      try {
        if (_0x453483.trackingDelegate.onDeletePath) {
          _0x453483.trackingDelegate.onDeletePath(_0x43ae3c);
        }
      } catch (_0x5559a7) {
        _0x33bd81("FS.trackingDelegate['onDeletePath']('" + _0x43ae3c + "') threw an exception: " + _0x5559a7.message);
      }
    },
    readdir: function (_0x41f151) {
      var _0x3a6c4f = _0x453483.lookupPath(_0x41f151, {
        follow: true
      });
      var _0x34eb6b = _0x3a6c4f.node;
      if (!_0x34eb6b.node_ops.readdir) {
        throw new _0x453483.ErrnoError(54);
      }
      return _0x34eb6b.node_ops.readdir(_0x34eb6b);
    },
    unlink: function (_0x25e240) {
      var _0xd0605e = _0x453483.lookupPath(_0x25e240, {
        parent: true
      });
      var _0x2a2e78 = _0xd0605e.node;
      var _0x35c033 = _0x402431.basename(_0x25e240);
      var _0x5e9cdf = _0x453483.lookupNode(_0x2a2e78, _0x35c033);
      var _0x52e3e3 = _0x453483.mayDelete(_0x2a2e78, _0x35c033, false);
      if (_0x52e3e3) {
        throw new _0x453483.ErrnoError(_0x52e3e3);
      }
      if (!_0x2a2e78.node_ops.unlink) {
        throw new _0x453483.ErrnoError(63);
      }
      if (_0x453483.isMountpoint(_0x5e9cdf)) {
        throw new _0x453483.ErrnoError(10);
      }
      try {
        if (_0x453483.trackingDelegate.willDeletePath) {
          _0x453483.trackingDelegate.willDeletePath(_0x25e240);
        }
      } catch (_0x3924f4) {
        _0x33bd81("FS.trackingDelegate['willDeletePath']('" + _0x25e240 + "') threw an exception: " + _0x3924f4.message);
      }
      _0x2a2e78.node_ops.unlink(_0x2a2e78, _0x35c033);
      _0x453483.destroyNode(_0x5e9cdf);
      try {
        if (_0x453483.trackingDelegate.onDeletePath) {
          _0x453483.trackingDelegate.onDeletePath(_0x25e240);
        }
      } catch (_0x8929fa) {
        _0x33bd81("FS.trackingDelegate['onDeletePath']('" + _0x25e240 + "') threw an exception: " + _0x8929fa.message);
      }
    },
    readlink: function (_0x7560b6) {
      var _0x26f3ab = _0x453483.lookupPath(_0x7560b6);
      var _0x5d27ac = _0x26f3ab.node;
      if (!_0x5d27ac) {
        throw new _0x453483.ErrnoError(44);
      }
      if (!_0x5d27ac.node_ops.readlink) {
        throw new _0x453483.ErrnoError(28);
      }
      return _0x285bab.resolve(_0x453483.getPath(_0x5d27ac.parent), _0x5d27ac.node_ops.readlink(_0x5d27ac));
    },
    stat: function (_0x2d1fad, _0x5379fc) {
      var _0x3604b8 = _0x453483.lookupPath(_0x2d1fad, {
        follow: !_0x5379fc
      });
      var _0x284cd2 = _0x3604b8.node;
      if (!_0x284cd2) {
        throw new _0x453483.ErrnoError(44);
      }
      if (!_0x284cd2.node_ops.getattr) {
        throw new _0x453483.ErrnoError(63);
      }
      return _0x284cd2.node_ops.getattr(_0x284cd2);
    },
    lstat: function (_0xa19e14) {
      return _0x453483.stat(_0xa19e14, true);
    },
    chmod: function (_0x1f9a67, _0x38137f, _0x70f7c3) {
      var _0x4d558f;
      if (typeof _0x1f9a67 === "string") {
        var _0x4b9686 = _0x453483.lookupPath(_0x1f9a67, {
          follow: !_0x70f7c3
        });
        _0x4d558f = _0x4b9686.node;
      } else {
        _0x4d558f = _0x1f9a67;
      }
      if (!_0x4d558f.node_ops.setattr) {
        throw new _0x453483.ErrnoError(63);
      }
      _0x4d558f.node_ops.setattr(_0x4d558f, {
        mode: _0x38137f & 4095 | _0x4d558f.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0x205e45, _0x3b2f11) {
      _0x453483.chmod(_0x205e45, _0x3b2f11, true);
    },
    fchmod: function (_0x454992, _0x14f15a) {
      var _0x2150d6 = _0x453483.getStream(_0x454992);
      if (!_0x2150d6) {
        throw new _0x453483.ErrnoError(8);
      }
      _0x453483.chmod(_0x2150d6.node, _0x14f15a);
    },
    chown: function (_0x2321a0, _0x149092, _0x4641df, _0x153576) {
      var _0x3afd91;
      if (typeof _0x2321a0 === "string") {
        var _0x22fb2b = _0x453483.lookupPath(_0x2321a0, {
          follow: !_0x153576
        });
        _0x3afd91 = _0x22fb2b.node;
      } else {
        _0x3afd91 = _0x2321a0;
      }
      if (!_0x3afd91.node_ops.setattr) {
        throw new _0x453483.ErrnoError(63);
      }
      _0x3afd91.node_ops.setattr(_0x3afd91, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0x37a37f, _0x5a37a5, _0x5bef9a) {
      _0x453483.chown(_0x37a37f, _0x5a37a5, _0x5bef9a, true);
    },
    fchown: function (_0x106fe6, _0xb5458, _0xbb4622) {
      var _0x146316 = _0x453483.getStream(_0x106fe6);
      if (!_0x146316) {
        throw new _0x453483.ErrnoError(8);
      }
      _0x453483.chown(_0x146316.node, _0xb5458, _0xbb4622);
    },
    truncate: function (_0x11fa84, _0x39119e) {
      if (_0x39119e < 0) {
        throw new _0x453483.ErrnoError(28);
      }
      var _0xd2facb;
      if (typeof _0x11fa84 === "string") {
        var _0x13ddc8 = _0x453483.lookupPath(_0x11fa84, {
          follow: true
        });
        _0xd2facb = _0x13ddc8.node;
      } else {
        _0xd2facb = _0x11fa84;
      }
      if (!_0xd2facb.node_ops.setattr) {
        throw new _0x453483.ErrnoError(63);
      }
      if (_0x453483.isDir(_0xd2facb.mode)) {
        throw new _0x453483.ErrnoError(31);
      }
      if (!_0x453483.isFile(_0xd2facb.mode)) {
        throw new _0x453483.ErrnoError(28);
      }
      var _0x346714 = _0x453483.nodePermissions(_0xd2facb, "w");
      if (_0x346714) {
        throw new _0x453483.ErrnoError(_0x346714);
      }
      _0xd2facb.node_ops.setattr(_0xd2facb, {
        size: _0x39119e,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0x48a29a, _0x3c8163) {
      var _0x422000 = _0x453483.getStream(_0x48a29a);
      if (!_0x422000) {
        throw new _0x453483.ErrnoError(8);
      }
      if ((_0x422000.flags & 2097155) === 0) {
        throw new _0x453483.ErrnoError(28);
      }
      _0x453483.truncate(_0x422000.node, _0x3c8163);
    },
    utime: function (_0x5b67c0, _0x3b4c7c, _0x3bd6fb) {
      var _0x13efad = _0x453483.lookupPath(_0x5b67c0, {
        follow: true
      });
      var _0x3f11f8 = _0x13efad.node;
      _0x3f11f8.node_ops.setattr(_0x3f11f8, {
        timestamp: Math.max(_0x3b4c7c, _0x3bd6fb)
      });
    },
    open: function (_0x440e15, _0x3113a1, _0x414c24, _0x1dfbac, _0x47ce25) {
      if (_0x440e15 === "") {
        throw new _0x453483.ErrnoError(44);
      }
      _0x3113a1 = typeof _0x3113a1 === "string" ? _0x453483.modeStringToFlags(_0x3113a1) : _0x3113a1;
      _0x414c24 = typeof _0x414c24 === "undefined" ? 438 : _0x414c24;
      if (_0x3113a1 & 64) {
        _0x414c24 = _0x414c24 & 4095 | 32768;
      } else {
        _0x414c24 = 0;
      }
      var _0x2c41e5;
      if (typeof _0x440e15 === "object") {
        _0x2c41e5 = _0x440e15;
      } else {
        _0x440e15 = _0x402431.normalize(_0x440e15);
        try {
          var _0x5b3e03 = _0x453483.lookupPath(_0x440e15, {
            follow: !(_0x3113a1 & 131072)
          });
          _0x2c41e5 = _0x5b3e03.node;
        } catch (_0x5234e2) {}
      }
      var _0x1360fb = false;
      if (_0x3113a1 & 64) {
        if (_0x2c41e5) {
          if (_0x3113a1 & 128) {
            throw new _0x453483.ErrnoError(20);
          }
        } else {
          _0x2c41e5 = _0x453483.mknod(_0x440e15, _0x414c24, 0);
          _0x1360fb = true;
        }
      }
      if (!_0x2c41e5) {
        throw new _0x453483.ErrnoError(44);
      }
      if (_0x453483.isChrdev(_0x2c41e5.mode)) {
        _0x3113a1 &= ~512;
      }
      if (_0x3113a1 & 65536 && !_0x453483.isDir(_0x2c41e5.mode)) {
        throw new _0x453483.ErrnoError(54);
      }
      if (!_0x1360fb) {
        var _0x2f7fae = _0x453483.mayOpen(_0x2c41e5, _0x3113a1);
        if (_0x2f7fae) {
          throw new _0x453483.ErrnoError(_0x2f7fae);
        }
      }
      if (_0x3113a1 & 512) {
        _0x453483.truncate(_0x2c41e5, 0);
      }
      _0x3113a1 &= ~131712;
      var _0x4f4953 = _0x453483.createStream({
        node: _0x2c41e5,
        path: _0x453483.getPath(_0x2c41e5),
        flags: _0x3113a1,
        seekable: true,
        position: 0,
        stream_ops: _0x2c41e5.stream_ops,
        ungotten: [],
        error: false
      }, _0x1dfbac, _0x47ce25);
      if (_0x4f4953.stream_ops.open) {
        _0x4f4953.stream_ops.open(_0x4f4953);
      }
      if (_0x5c0d54.logReadFiles && !(_0x3113a1 & 1)) {
        if (!_0x453483.readFiles) {
          _0x453483.readFiles = {};
        }
        if (!(_0x440e15 in _0x453483.readFiles)) {
          _0x453483.readFiles[_0x440e15] = 1;
          _0x33bd81("FS.trackingDelegate error on read file: " + _0x440e15);
        }
      }
      try {
        if (_0x453483.trackingDelegate.onOpenFile) {
          var _0x26f9d4 = 0;
          if ((_0x3113a1 & 2097155) !== 1) {
            _0x26f9d4 |= _0x453483.tracking.openFlags.READ;
          }
          if ((_0x3113a1 & 2097155) !== 0) {
            _0x26f9d4 |= _0x453483.tracking.openFlags.WRITE;
          }
          _0x453483.trackingDelegate.onOpenFile(_0x440e15, _0x26f9d4);
        }
      } catch (_0x17c138) {
        _0x33bd81("FS.trackingDelegate['onOpenFile']('" + _0x440e15 + "', flags) threw an exception: " + _0x17c138.message);
      }
      return _0x4f4953;
    },
    close: function (_0x25388d) {
      if (_0x453483.isClosed(_0x25388d)) {
        throw new _0x453483.ErrnoError(8);
      }
      if (_0x25388d.getdents) {
        _0x25388d.getdents = null;
      }
      try {
        if (_0x25388d.stream_ops.close) {
          _0x25388d.stream_ops.close(_0x25388d);
        }
      } catch (_0x3a8f35) {
        throw _0x3a8f35;
      } finally {
        _0x453483.closeStream(_0x25388d.fd);
      }
      _0x25388d.fd = null;
    },
    isClosed: function (_0x1ea836) {
      return _0x1ea836.fd === null;
    },
    llseek: function (_0x32bf0b, _0xe4a19b, _0x43524f) {
      if (_0x453483.isClosed(_0x32bf0b)) {
        throw new _0x453483.ErrnoError(8);
      }
      if (!_0x32bf0b.seekable || !_0x32bf0b.stream_ops.llseek) {
        throw new _0x453483.ErrnoError(70);
      }
      if (_0x43524f != 0 && _0x43524f != 1 && _0x43524f != 2) {
        throw new _0x453483.ErrnoError(28);
      }
      _0x32bf0b.position = _0x32bf0b.stream_ops.llseek(_0x32bf0b, _0xe4a19b, _0x43524f);
      _0x32bf0b.ungotten = [];
      return _0x32bf0b.position;
    },
    read: function (_0x1c19f8, _0xba6a07, _0x4e9e67, _0x12c32c, _0x724b55) {
      if (_0x12c32c < 0 || _0x724b55 < 0) {
        throw new _0x453483.ErrnoError(28);
      }
      if (_0x453483.isClosed(_0x1c19f8)) {
        throw new _0x453483.ErrnoError(8);
      }
      if ((_0x1c19f8.flags & 2097155) === 1) {
        throw new _0x453483.ErrnoError(8);
      }
      if (_0x453483.isDir(_0x1c19f8.node.mode)) {
        throw new _0x453483.ErrnoError(31);
      }
      if (!_0x1c19f8.stream_ops.read) {
        throw new _0x453483.ErrnoError(28);
      }
      var _0x707f0 = typeof _0x724b55 !== "undefined";
      if (!_0x707f0) {
        _0x724b55 = _0x1c19f8.position;
      } else if (!_0x1c19f8.seekable) {
        throw new _0x453483.ErrnoError(70);
      }
      var _0x151bff = _0x1c19f8.stream_ops.read(_0x1c19f8, _0xba6a07, _0x4e9e67, _0x12c32c, _0x724b55);
      if (!_0x707f0) {
        _0x1c19f8.position += _0x151bff;
      }
      return _0x151bff;
    },
    write: function (_0x9f0ea4, _0x8b6ff0, _0x55a636, _0x3daa73, _0x522102, _0x48fdfa) {
      if (_0x3daa73 < 0 || _0x522102 < 0) {
        throw new _0x453483.ErrnoError(28);
      }
      if (_0x453483.isClosed(_0x9f0ea4)) {
        throw new _0x453483.ErrnoError(8);
      }
      if ((_0x9f0ea4.flags & 2097155) === 0) {
        throw new _0x453483.ErrnoError(8);
      }
      if (_0x453483.isDir(_0x9f0ea4.node.mode)) {
        throw new _0x453483.ErrnoError(31);
      }
      if (!_0x9f0ea4.stream_ops.write) {
        throw new _0x453483.ErrnoError(28);
      }
      if (_0x9f0ea4.seekable && _0x9f0ea4.flags & 1024) {
        _0x453483.llseek(_0x9f0ea4, 0, 2);
      }
      var _0x37120f = typeof _0x522102 !== "undefined";
      if (!_0x37120f) {
        _0x522102 = _0x9f0ea4.position;
      } else if (!_0x9f0ea4.seekable) {
        throw new _0x453483.ErrnoError(70);
      }
      var _0x14c99f = _0x9f0ea4.stream_ops.write(_0x9f0ea4, _0x8b6ff0, _0x55a636, _0x3daa73, _0x522102, _0x48fdfa);
      if (!_0x37120f) {
        _0x9f0ea4.position += _0x14c99f;
      }
      try {
        if (_0x9f0ea4.path && _0x453483.trackingDelegate.onWriteToFile) {
          _0x453483.trackingDelegate.onWriteToFile(_0x9f0ea4.path);
        }
      } catch (_0x5a4869) {
        _0x33bd81("FS.trackingDelegate['onWriteToFile']('" + _0x9f0ea4.path + "') threw an exception: " + _0x5a4869.message);
      }
      return _0x14c99f;
    },
    allocate: function (_0x5bd563, _0x35c43c, _0x127131) {
      if (_0x453483.isClosed(_0x5bd563)) {
        throw new _0x453483.ErrnoError(8);
      }
      if (_0x35c43c < 0 || _0x127131 <= 0) {
        throw new _0x453483.ErrnoError(28);
      }
      if ((_0x5bd563.flags & 2097155) === 0) {
        throw new _0x453483.ErrnoError(8);
      }
      if (!_0x453483.isFile(_0x5bd563.node.mode) && !_0x453483.isDir(_0x5bd563.node.mode)) {
        throw new _0x453483.ErrnoError(43);
      }
      if (!_0x5bd563.stream_ops.allocate) {
        throw new _0x453483.ErrnoError(138);
      }
      _0x5bd563.stream_ops.allocate(_0x5bd563, _0x35c43c, _0x127131);
    },
    mmap: function (_0x341b74, _0x549bc5, _0xefc110, _0x408984, _0x572257, _0x406fab) {
      if ((_0x572257 & 2) !== 0 && (_0x406fab & 2) === 0 && (_0x341b74.flags & 2097155) !== 2) {
        throw new _0x453483.ErrnoError(2);
      }
      if ((_0x341b74.flags & 2097155) === 1) {
        throw new _0x453483.ErrnoError(2);
      }
      if (!_0x341b74.stream_ops.mmap) {
        throw new _0x453483.ErrnoError(43);
      }
      return _0x341b74.stream_ops.mmap(_0x341b74, _0x549bc5, _0xefc110, _0x408984, _0x572257, _0x406fab);
    },
    msync: function (_0x1f6fed, _0x3a6bfd, _0x2f1998, _0x3510c3, _0x35a35e) {
      if (!_0x1f6fed || !_0x1f6fed.stream_ops.msync) {
        return 0;
      }
      return _0x1f6fed.stream_ops.msync(_0x1f6fed, _0x3a6bfd, _0x2f1998, _0x3510c3, _0x35a35e);
    },
    munmap: function (_0x36c204) {
      return 0;
    },
    ioctl: function (_0x3e3326, _0x27f3ba, _0x500e5f) {
      if (!_0x3e3326.stream_ops.ioctl) {
        throw new _0x453483.ErrnoError(59);
      }
      return _0x3e3326.stream_ops.ioctl(_0x3e3326, _0x27f3ba, _0x500e5f);
    },
    readFile: function (_0xde8bf6, _0x4f5eed) {
      _0x4f5eed = _0x4f5eed || {};
      _0x4f5eed.flags = _0x4f5eed.flags || 0;
      _0x4f5eed.encoding = _0x4f5eed.encoding || "binary";
      if (_0x4f5eed.encoding !== "utf8" && _0x4f5eed.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x4f5eed.encoding + "\"");
      }
      var _0x2fae88;
      var _0x265d66 = _0x453483.open(_0xde8bf6, _0x4f5eed.flags);
      var _0x49bde7 = _0x453483.stat(_0xde8bf6);
      var _0x45f7db = _0x49bde7.size;
      var _0x53c1fd = new Uint8Array(_0x45f7db);
      _0x453483.read(_0x265d66, _0x53c1fd, 0, _0x45f7db, 0);
      if (_0x4f5eed.encoding === "utf8") {
        _0x2fae88 = _0x10dc1b(_0x53c1fd, 0);
      } else if (_0x4f5eed.encoding === "binary") {
        _0x2fae88 = _0x53c1fd;
      }
      _0x453483.close(_0x265d66);
      return _0x2fae88;
    },
    writeFile: function (_0x1be6be, _0x331fb2, _0x4a97d1) {
      _0x4a97d1 = _0x4a97d1 || {};
      _0x4a97d1.flags = _0x4a97d1.flags || 577;
      var _0xd13f01 = _0x453483.open(_0x1be6be, _0x4a97d1.flags, _0x4a97d1.mode);
      if (typeof _0x331fb2 === "string") {
        var _0x3919a3 = new Uint8Array(_0x219de1(_0x331fb2) + 1);
        var _0x1a6445 = _0x1425b7(_0x331fb2, _0x3919a3, 0, _0x3919a3.length);
        _0x453483.write(_0xd13f01, _0x3919a3, 0, _0x1a6445, undefined, _0x4a97d1.canOwn);
      } else if (ArrayBuffer.isView(_0x331fb2)) {
        _0x453483.write(_0xd13f01, _0x331fb2, 0, _0x331fb2.byteLength, undefined, _0x4a97d1.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0x453483.close(_0xd13f01);
    },
    cwd: function () {
      return _0x453483.currentPath;
    },
    chdir: function (_0x37795d) {
      var _0x3aab8c = _0x453483.lookupPath(_0x37795d, {
        follow: true
      });
      if (_0x3aab8c.node === null) {
        throw new _0x453483.ErrnoError(44);
      }
      if (!_0x453483.isDir(_0x3aab8c.node.mode)) {
        throw new _0x453483.ErrnoError(54);
      }
      var _0x127361 = _0x453483.nodePermissions(_0x3aab8c.node, "x");
      if (_0x127361) {
        throw new _0x453483.ErrnoError(_0x127361);
      }
      _0x453483.currentPath = _0x3aab8c.path;
    },
    createDefaultDirectories: function () {
      _0x453483.mkdir("/tmp");
      _0x453483.mkdir("/home");
      _0x453483.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0x453483.mkdir("/dev");
      _0x453483.registerDevice(_0x453483.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0x91da8, _0x3a533f, _0x11997c, _0x518d59, _0x57d0b6) {
          return _0x518d59;
        }
      });
      _0x453483.mkdev("/dev/null", _0x453483.makedev(1, 3));
      _0x43e1de.register(_0x453483.makedev(5, 0), _0x43e1de.default_tty_ops);
      _0x43e1de.register(_0x453483.makedev(6, 0), _0x43e1de.default_tty1_ops);
      _0x453483.mkdev("/dev/tty", _0x453483.makedev(5, 0));
      _0x453483.mkdev("/dev/tty1", _0x453483.makedev(6, 0));
      var _0x37a800 = _0x1eafd2();
      _0x453483.createDevice("/dev", "random", _0x37a800);
      _0x453483.createDevice("/dev", "urandom", _0x37a800);
      _0x453483.mkdir("/dev/shm");
      _0x453483.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0x453483.mkdir("/proc");
      var _0x2bb593 = _0x453483.mkdir("/proc/self");
      _0x453483.mkdir("/proc/self/fd");
      _0x453483.mount({
        mount: function () {
          var _0x1233ba = _0x453483.createNode(_0x2bb593, "fd", 16895, 73);
          _0x1233ba.node_ops = {
            lookup: function (_0x13fb24, _0x2ba515) {
              var _0x12f098 = +_0x2ba515;
              var _0x5911bf = _0x453483.getStream(_0x12f098);
              if (!_0x5911bf) {
                throw new _0x453483.ErrnoError(8);
              }
              var _0x5dd2d0 = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x5911bf.path;
                  }
                }
              };
              _0x5dd2d0.parent = _0x5dd2d0;
              return _0x5dd2d0;
            }
          };
          return _0x1233ba;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0x5c0d54.stdin) {
        _0x453483.createDevice("/dev", "stdin", _0x5c0d54.stdin);
      } else {
        _0x453483.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0x5c0d54.stdout) {
        _0x453483.createDevice("/dev", "stdout", null, _0x5c0d54.stdout);
      } else {
        _0x453483.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0x5c0d54.stderr) {
        _0x453483.createDevice("/dev", "stderr", null, _0x5c0d54.stderr);
      } else {
        _0x453483.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0x62d886 = _0x453483.open("/dev/stdin", 0);
      var _0x1cccca = _0x453483.open("/dev/stdout", 1);
      var _0x5662fa = _0x453483.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0x453483.ErrnoError) {
        return;
      }
      _0x453483.ErrnoError = function _0x330af8(_0x12e4bb, _0x561be3) {
        this.node = _0x561be3;
        this.setErrno = function (_0x207160) {
          this.errno = _0x207160;
        };
        this.setErrno(_0x12e4bb);
        this.message = "FS error";
      };
      _0x453483.ErrnoError.prototype = new Error();
      _0x453483.ErrnoError.prototype.constructor = _0x453483.ErrnoError;
      [44].forEach(function (_0x1d02a9) {
        _0x453483.genericErrors[_0x1d02a9] = new _0x453483.ErrnoError(_0x1d02a9);
        _0x453483.genericErrors[_0x1d02a9].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0x453483.ensureErrnoError();
      _0x453483.nameTable = new Array(4096);
      _0x453483.mount(_0x2d71f7, {}, "/");
      _0x453483.createDefaultDirectories();
      _0x453483.createDefaultDevices();
      _0x453483.createSpecialDirectories();
      _0x453483.filesystems = {
        MEMFS: _0x2d71f7,
        IDBFS: _0x3a00cc
      };
    },
    init: function (_0x578e1e, _0xff7693, _0x42ae81) {
      _0x453483.init.initialized = true;
      _0x453483.ensureErrnoError();
      _0x5c0d54.stdin = _0x578e1e || _0x5c0d54.stdin;
      _0x5c0d54.stdout = _0xff7693 || _0x5c0d54.stdout;
      _0x5c0d54.stderr = _0x42ae81 || _0x5c0d54.stderr;
      _0x453483.createStandardStreams();
    },
    quit: function () {
      _0x453483.init.initialized = false;
      var _0x351d15 = _0x5c0d54._fflush;
      if (_0x351d15) {
        _0x351d15(0);
      }
      for (var _0x115eae = 0; _0x115eae < _0x453483.streams.length; _0x115eae++) {
        var _0x4e3998 = _0x453483.streams[_0x115eae];
        if (!_0x4e3998) {
          continue;
        }
        _0x453483.close(_0x4e3998);
      }
    },
    getMode: function (_0x2beab8, _0x2407ce) {
      var _0x51c6f6 = 0;
      if (_0x2beab8) {
        _0x51c6f6 |= 365;
      }
      if (_0x2407ce) {
        _0x51c6f6 |= 146;
      }
      return _0x51c6f6;
    },
    findObject: function (_0x554fe7, _0x459a18) {
      var _0x3880e5 = _0x453483.analyzePath(_0x554fe7, _0x459a18);
      if (_0x3880e5.exists) {
        return _0x3880e5.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0x4e93b4, _0x320bc0) {
      try {
        var _0x2bd1ab = _0x453483.lookupPath(_0x4e93b4, {
          follow: !_0x320bc0
        });
        _0x4e93b4 = _0x2bd1ab.path;
      } catch (_0x323455) {}
      var _0x26e076 = {
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
        var _0x2bd1ab = _0x453483.lookupPath(_0x4e93b4, {
          parent: true
        });
        _0x26e076.parentExists = true;
        _0x26e076.parentPath = _0x2bd1ab.path;
        _0x26e076.parentObject = _0x2bd1ab.node;
        _0x26e076.name = _0x402431.basename(_0x4e93b4);
        _0x2bd1ab = _0x453483.lookupPath(_0x4e93b4, {
          follow: !_0x320bc0
        });
        _0x26e076.exists = true;
        _0x26e076.path = _0x2bd1ab.path;
        _0x26e076.object = _0x2bd1ab.node;
        _0x26e076.name = _0x2bd1ab.node.name;
        _0x26e076.isRoot = _0x2bd1ab.path === "/";
      } catch (_0x14a5ba) {
        _0x26e076.error = _0x14a5ba.errno;
      }
      return _0x26e076;
    },
    createPath: function (_0x284857, _0xefdf35, _0x54bf25, _0x292201) {
      _0x284857 = typeof _0x284857 === "string" ? _0x284857 : _0x453483.getPath(_0x284857);
      var _0xdc1cf9 = _0xefdf35.split("/").reverse();
      while (_0xdc1cf9.length) {
        var _0x5781ed = _0xdc1cf9.pop();
        if (!_0x5781ed) {
          continue;
        }
        var _0xe454f3 = _0x402431.join2(_0x284857, _0x5781ed);
        try {
          _0x453483.mkdir(_0xe454f3);
        } catch (_0x5144f0) {}
        _0x284857 = _0xe454f3;
      }
      return _0xe454f3;
    },
    createFile: function (_0x3c3d80, _0x55fcb6, _0x3b16f4, _0xccab6e, _0x5caf48) {
      var _0x4abe1d = _0x402431.join2(typeof _0x3c3d80 === "string" ? _0x3c3d80 : _0x453483.getPath(_0x3c3d80), _0x55fcb6);
      var _0x495225 = _0x453483.getMode(_0xccab6e, _0x5caf48);
      return _0x453483.create(_0x4abe1d, _0x495225);
    },
    createDataFile: function (_0x4f95f1, _0x2d59a3, _0x578cc1, _0x4d973f, _0x586e1d, _0x2c69eb) {
      var _0x231646 = _0x2d59a3 ? _0x402431.join2(typeof _0x4f95f1 === "string" ? _0x4f95f1 : _0x453483.getPath(_0x4f95f1), _0x2d59a3) : _0x4f95f1;
      var _0x84ae20 = _0x453483.getMode(_0x4d973f, _0x586e1d);
      var _0x399ac6 = _0x453483.create(_0x231646, _0x84ae20);
      if (_0x578cc1) {
        if (typeof _0x578cc1 === "string") {
          var _0xf7f3bc = new Array(_0x578cc1.length);
          for (var _0x2811bc = 0, _0x553f7b = _0x578cc1.length; _0x2811bc < _0x553f7b; ++_0x2811bc) {
            _0xf7f3bc[_0x2811bc] = _0x578cc1.charCodeAt(_0x2811bc);
          }
          _0x578cc1 = _0xf7f3bc;
        }
        _0x453483.chmod(_0x399ac6, _0x84ae20 | 146);
        var _0x3e14ee = _0x453483.open(_0x399ac6, 577);
        _0x453483.write(_0x3e14ee, _0x578cc1, 0, _0x578cc1.length, 0, _0x2c69eb);
        _0x453483.close(_0x3e14ee);
        _0x453483.chmod(_0x399ac6, _0x84ae20);
      }
      return _0x399ac6;
    },
    createDevice: function (_0x5de280, _0xfb58e6, _0x59ad94, _0x2971eb) {
      var _0x563f95 = _0x402431.join2(typeof _0x5de280 === "string" ? _0x5de280 : _0x453483.getPath(_0x5de280), _0xfb58e6);
      var _0x3688f9 = _0x453483.getMode(!!_0x59ad94, !!_0x2971eb);
      if (!_0x453483.createDevice.major) {
        _0x453483.createDevice.major = 64;
      }
      var _0x12a0fd = _0x453483.makedev(_0x453483.createDevice.major++, 0);
      _0x453483.registerDevice(_0x12a0fd, {
        open: function (_0x5b4ea2) {
          _0x5b4ea2.seekable = false;
        },
        close: function (_0x4163f6) {
          if (_0x2971eb && _0x2971eb.buffer && _0x2971eb.buffer.length) {
            _0x2971eb(10);
          }
        },
        read: function (_0x1ce913, _0x310a63, _0x56d366, _0x43e23b, _0xa52063) {
          var _0x60e923 = 0;
          for (var _0x28230b = 0; _0x28230b < _0x43e23b; _0x28230b++) {
            var _0x2820f9;
            try {
              _0x2820f9 = _0x59ad94();
            } catch (_0x28433d) {
              throw new _0x453483.ErrnoError(29);
            }
            if (_0x2820f9 === undefined && _0x60e923 === 0) {
              throw new _0x453483.ErrnoError(6);
            }
            if (_0x2820f9 === null || _0x2820f9 === undefined) {
              break;
            }
            _0x60e923++;
            _0x310a63[_0x56d366 + _0x28230b] = _0x2820f9;
          }
          if (_0x60e923) {
            _0x1ce913.node.timestamp = Date.now();
          }
          return _0x60e923;
        },
        write: function (_0x4f9d91, _0x1e835b, _0x41c116, _0x1992d9, _0x208c63) {
          for (var _0x30beee = 0; _0x30beee < _0x1992d9; _0x30beee++) {
            try {
              _0x2971eb(_0x1e835b[_0x41c116 + _0x30beee]);
            } catch (_0x31a9ff) {
              throw new _0x453483.ErrnoError(29);
            }
          }
          if (_0x1992d9) {
            _0x4f9d91.node.timestamp = Date.now();
          }
          return _0x30beee;
        }
      });
      return _0x453483.mkdev(_0x563f95, _0x3688f9, _0x12a0fd);
    },
    forceLoadFile: function (_0x2c81f4) {
      if (_0x2c81f4.isDevice || _0x2c81f4.isFolder || _0x2c81f4.link || _0x2c81f4.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0x25ee7a) {
        try {
          _0x2c81f4.contents = _0x1cc621(_0x25ee7a(_0x2c81f4.url), true);
          _0x2c81f4.usedBytes = _0x2c81f4.contents.length;
        } catch (_0x439368) {
          throw new _0x453483.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x327565, _0x327ed7, _0xaf4218, _0x2dafa9, _0x124fb4) {
      function _0x3be638() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x3be638.prototype.get = function _0x12981b(_0x6e753c) {
        if (_0x6e753c > this.length - 1 || _0x6e753c < 0) {
          return undefined;
        }
        var _0x14d89f = _0x6e753c % this.chunkSize;
        var _0x31e52a = _0x6e753c / this.chunkSize | 0;
        return this.getter(_0x31e52a)[_0x14d89f];
      };
      _0x3be638.prototype.setDataGetter = function _0x55fc71(_0x3ce2e0) {
        this.getter = _0x3ce2e0;
      };
      _0x3be638.prototype.cacheLength = function _0x4f7ef5() {
        var _0x4893ff = new XMLHttpRequest();
        _0x4893ff.open("HEAD", _0xaf4218, false);
        _0x4893ff.send(null);
        if ((!(_0x4893ff.status >= 200) || !(_0x4893ff.status < 300)) && _0x4893ff.status !== 304) {
          throw new Error("Couldn't load " + _0xaf4218 + ". Status: " + _0x4893ff.status);
        }
        var _0x4fa5e9 = Number(_0x4893ff.getResponseHeader("Content-length"));
        var _0x17d4e2;
        var _0x4191f7 = (_0x17d4e2 = _0x4893ff.getResponseHeader("Accept-Ranges")) && _0x17d4e2 === "bytes";
        var _0x1cb64a = (_0x17d4e2 = _0x4893ff.getResponseHeader("Content-Encoding")) && _0x17d4e2 === "gzip";
        var _0x57ea89 = 1048576;
        if (!_0x4191f7) {
          _0x57ea89 = _0x4fa5e9;
        }
        function _0x25fd36(_0x3eea85, _0x5ed85e) {
          if (_0x3eea85 > _0x5ed85e) {
            throw new Error("invalid range (" + _0x3eea85 + ", " + _0x5ed85e + ") or no bytes requested!");
          }
          if (_0x5ed85e > _0x4fa5e9 - 1) {
            throw new Error("only " + _0x4fa5e9 + " bytes available! programmer error!");
          }
          var _0xbb076a = new XMLHttpRequest();
          _0xbb076a.open("GET", _0xaf4218, false);
          if (_0x4fa5e9 !== _0x57ea89) {
            _0xbb076a.setRequestHeader("Range", "bytes=" + _0x3eea85 + "-" + _0x5ed85e);
          }
          if (typeof Uint8Array != "undefined") {
            _0xbb076a.responseType = "arraybuffer";
          }
          if (_0xbb076a.overrideMimeType) {
            _0xbb076a.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0xbb076a.send(null);
          if ((!(_0xbb076a.status >= 200) || !(_0xbb076a.status < 300)) && _0xbb076a.status !== 304) {
            throw new Error("Couldn't load " + _0xaf4218 + ". Status: " + _0xbb076a.status);
          }
          if (_0xbb076a.response !== undefined) {
            return new Uint8Array(_0xbb076a.response || []);
          } else {
            return _0x1cc621(_0xbb076a.responseText || "", true);
          }
        }
        var _0x1c3bd0 = this;
        _0x1c3bd0.setDataGetter(function (_0x508166) {
          var _0x49420f = _0x508166 * _0x57ea89;
          var _0x437441 = (_0x508166 + 1) * _0x57ea89 - 1;
          _0x437441 = Math.min(_0x437441, _0x4fa5e9 - 1);
          if (typeof _0x1c3bd0.chunks[_0x508166] === "undefined") {
            _0x1c3bd0.chunks[_0x508166] = _0x25fd36(_0x49420f, _0x437441);
          }
          if (typeof _0x1c3bd0.chunks[_0x508166] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x1c3bd0.chunks[_0x508166];
        });
        if (_0x1cb64a || !_0x4fa5e9) {
          _0x57ea89 = _0x4fa5e9 = 1;
          _0x4fa5e9 = this.getter(0).length;
          _0x57ea89 = _0x4fa5e9;
          _0xaa0590("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x4fa5e9;
        this._chunkSize = _0x57ea89;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x445082) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0xba76e9 = new _0x3be638();
        Object.defineProperties(_0xba76e9, {
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
        var _0x11d039 = {
          isDevice: false,
          contents: _0xba76e9
        };
      } else {
        var _0x11d039 = {
          isDevice: false,
          url: _0xaf4218
        };
      }
      var _0x7a8dda = _0x453483.createFile(_0x327565, _0x327ed7, _0x11d039, _0x2dafa9, _0x124fb4);
      if (_0x11d039.contents) {
        _0x7a8dda.contents = _0x11d039.contents;
      } else if (_0x11d039.url) {
        _0x7a8dda.contents = null;
        _0x7a8dda.url = _0x11d039.url;
      }
      Object.defineProperties(_0x7a8dda, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0x4561da = {};
      var _0x36077f = Object.keys(_0x7a8dda.stream_ops);
      _0x36077f.forEach(function (_0x2148bf) {
        var _0x172ff0 = _0x7a8dda.stream_ops[_0x2148bf];
        _0x4561da[_0x2148bf] = function _0xabc277() {
          _0x453483.forceLoadFile(_0x7a8dda);
          return _0x172ff0.apply(null, arguments);
        };
      });
      _0x4561da.read = function _0xf6b4a5(_0x43ae16, _0xa66525, _0x3a5081, _0x579e67, _0x4996d0) {
        _0x453483.forceLoadFile(_0x7a8dda);
        var _0xdd714f = _0x43ae16.node.contents;
        if (_0x4996d0 >= _0xdd714f.length) {
          return 0;
        }
        var _0x5389da = Math.min(_0xdd714f.length - _0x4996d0, _0x579e67);
        if (_0xdd714f.slice) {
          for (var _0x2d847f = 0; _0x2d847f < _0x5389da; _0x2d847f++) {
            _0xa66525[_0x3a5081 + _0x2d847f] = _0xdd714f[_0x4996d0 + _0x2d847f];
          }
        } else {
          for (var _0x2d847f = 0; _0x2d847f < _0x5389da; _0x2d847f++) {
            _0xa66525[_0x3a5081 + _0x2d847f] = _0xdd714f.get(_0x4996d0 + _0x2d847f);
          }
        }
        return _0x5389da;
      };
      _0x7a8dda.stream_ops = _0x4561da;
      return _0x7a8dda;
    },
    createPreloadedFile: function (_0x5aa05a, _0x246892, _0x61942a, _0x55f50c, _0x5b4d7d, _0x59a9bd, _0x4ac31f, _0x419ed4, _0x3d4f53, _0x1853af) {
      _0x4b29bf.init();
      var _0x396828 = _0x246892 ? _0x285bab.resolve(_0x402431.join2(_0x5aa05a, _0x246892)) : _0x5aa05a;
      var _0x2e3e34 = _0x52f3f7("cp " + _0x396828);
      function _0x1b62be(_0x26b6cc) {
        function _0x504ac8(_0x589ff0) {
          if (_0x1853af) {
            _0x1853af();
          }
          if (!_0x419ed4) {
            _0x453483.createDataFile(_0x5aa05a, _0x246892, _0x589ff0, _0x55f50c, _0x5b4d7d, _0x3d4f53);
          }
          if (_0x59a9bd) {
            _0x59a9bd();
          }
          _0x5ac12f(_0x2e3e34);
        }
        var _0x2c2b86 = false;
        _0x5c0d54.preloadPlugins.forEach(function (_0x128188) {
          if (_0x2c2b86) {
            return;
          }
          if (_0x128188.canHandle(_0x396828)) {
            _0x128188.handle(_0x26b6cc, _0x396828, _0x504ac8, function () {
              if (_0x4ac31f) {
                _0x4ac31f();
              }
              _0x5ac12f(_0x2e3e34);
            });
            _0x2c2b86 = true;
          }
        });
        if (!_0x2c2b86) {
          _0x504ac8(_0x26b6cc);
        }
      }
      _0x9df903(_0x2e3e34);
      if (typeof _0x61942a == "string") {
        _0x4b29bf.asyncLoad(_0x61942a, function (_0x56311e) {
          _0x1b62be(_0x56311e);
        }, _0x4ac31f);
      } else {
        _0x1b62be(_0x61942a);
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
    saveFilesToDB: function (_0x1908fa, _0x70f448, _0x23aacf) {
      _0x70f448 = _0x70f448 || function () {};
      _0x23aacf = _0x23aacf || function () {};
      var _0x3e0459 = _0x453483.indexedDB();
      try {
        var _0x1cf1b0 = _0x3e0459.open(_0x453483.DB_NAME(), _0x453483.DB_VERSION);
      } catch (_0x5cb281) {
        return _0x23aacf(_0x5cb281);
      }
      _0x1cf1b0.onupgradeneeded = function _0x1f8aab() {
        _0xaa0590("creating db");
        var _0x3f0d57 = _0x1cf1b0.result;
        _0x3f0d57.createObjectStore(_0x453483.DB_STORE_NAME);
      };
      _0x1cf1b0.onsuccess = function _0x1cf4f3() {
        var _0x3d904c = _0x1cf1b0.result;
        var _0x4cae35 = _0x3d904c.transaction([_0x453483.DB_STORE_NAME], "readwrite");
        var _0x27d996 = _0x4cae35.objectStore(_0x453483.DB_STORE_NAME);
        var _0x509ef6 = 0;
        var _0x41f5d2 = 0;
        var _0x27fab1 = _0x1908fa.length;
        function _0xc3d789() {
          if (_0x41f5d2 == 0) {
            _0x70f448();
          } else {
            _0x23aacf();
          }
        }
        _0x1908fa.forEach(function (_0x182e50) {
          var _0x3f5c2e = _0x27d996.put(_0x453483.analyzePath(_0x182e50).object.contents, _0x182e50);
          _0x3f5c2e.onsuccess = function _0x426fda() {
            _0x509ef6++;
            if (_0x509ef6 + _0x41f5d2 == _0x27fab1) {
              _0xc3d789();
            }
          };
          _0x3f5c2e.onerror = function _0x26f116() {
            _0x41f5d2++;
            if (_0x509ef6 + _0x41f5d2 == _0x27fab1) {
              _0xc3d789();
            }
          };
        });
        _0x4cae35.onerror = _0x23aacf;
      };
      _0x1cf1b0.onerror = _0x23aacf;
    },
    loadFilesFromDB: function (_0x5d2c34, _0x556ddc, _0x1f5155) {
      _0x556ddc = _0x556ddc || function () {};
      _0x1f5155 = _0x1f5155 || function () {};
      var _0x3a9c6a = _0x453483.indexedDB();
      try {
        var _0x499916 = _0x3a9c6a.open(_0x453483.DB_NAME(), _0x453483.DB_VERSION);
      } catch (_0x572ed4) {
        return _0x1f5155(_0x572ed4);
      }
      _0x499916.onupgradeneeded = _0x1f5155;
      _0x499916.onsuccess = function _0x740cee() {
        var _0x35b24b = _0x499916.result;
        try {
          var _0x571721 = _0x35b24b.transaction([_0x453483.DB_STORE_NAME], "readonly");
        } catch (_0x32a0ba) {
          _0x1f5155(_0x32a0ba);
          return;
        }
        var _0x51c934 = _0x571721.objectStore(_0x453483.DB_STORE_NAME);
        var _0x4c548e = 0;
        var _0x42d5bc = 0;
        var _0x354f0b = _0x5d2c34.length;
        function _0x4ae791() {
          if (_0x42d5bc == 0) {
            _0x556ddc();
          } else {
            _0x1f5155();
          }
        }
        _0x5d2c34.forEach(function (_0x37a996) {
          var _0x3ba2c0 = _0x51c934.get(_0x37a996);
          _0x3ba2c0.onsuccess = function _0x6aa4e8() {
            if (_0x453483.analyzePath(_0x37a996).exists) {
              _0x453483.unlink(_0x37a996);
            }
            _0x453483.createDataFile(_0x402431.dirname(_0x37a996), _0x402431.basename(_0x37a996), _0x3ba2c0.result, true, true, true);
            _0x4c548e++;
            if (_0x4c548e + _0x42d5bc == _0x354f0b) {
              _0x4ae791();
            }
          };
          _0x3ba2c0.onerror = function _0x3231e2() {
            _0x42d5bc++;
            if (_0x4c548e + _0x42d5bc == _0x354f0b) {
              _0x4ae791();
            }
          };
        });
        _0x571721.onerror = _0x1f5155;
      };
      _0x499916.onerror = _0x1f5155;
    }
  };
  var _0x167ead = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x3e1e6c, _0x4f4cf3, _0x2d492e) {
      if (_0x4f4cf3[0] === "/") {
        return _0x4f4cf3;
      }
      var _0x38c9b7;
      if (_0x3e1e6c === -100) {
        _0x38c9b7 = _0x453483.cwd();
      } else {
        var _0x2d4b3a = _0x453483.getStream(_0x3e1e6c);
        if (!_0x2d4b3a) {
          throw new _0x453483.ErrnoError(8);
        }
        _0x38c9b7 = _0x2d4b3a.path;
      }
      if (_0x4f4cf3.length == 0) {
        if (!_0x2d492e) {
          throw new _0x453483.ErrnoError(44);
        }
        return _0x38c9b7;
      }
      return _0x402431.join2(_0x38c9b7, _0x4f4cf3);
    },
    doStat: function (_0x40d5d4, _0x462f2e, _0x210b06) {
      try {
        var _0x5ba829 = _0x40d5d4(_0x462f2e);
      } catch (_0x32c89c) {
        if (_0x32c89c && _0x32c89c.node && _0x402431.normalize(_0x462f2e) !== _0x402431.normalize(_0x453483.getPath(_0x32c89c.node))) {
          return -54;
        }
        throw _0x32c89c;
      }
      _0x5ce4f8[_0x210b06 >> 2] = _0x5ba829.dev;
      _0x5ce4f8[_0x210b06 + 4 >> 2] = 0;
      _0x5ce4f8[_0x210b06 + 8 >> 2] = _0x5ba829.ino;
      _0x5ce4f8[_0x210b06 + 12 >> 2] = _0x5ba829.mode;
      _0x5ce4f8[_0x210b06 + 16 >> 2] = _0x5ba829.nlink;
      _0x5ce4f8[_0x210b06 + 20 >> 2] = _0x5ba829.uid;
      _0x5ce4f8[_0x210b06 + 24 >> 2] = _0x5ba829.gid;
      _0x5ce4f8[_0x210b06 + 28 >> 2] = _0x5ba829.rdev;
      _0x5ce4f8[_0x210b06 + 32 >> 2] = 0;
      _0x2bb7d8 = [_0x5ba829.size >>> 0, (_0x29224d = _0x5ba829.size, +Math.abs(_0x29224d) >= 1 ? _0x29224d > 0 ? (Math.min(+Math.floor(_0x29224d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x29224d - +(~~_0x29224d >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x5ce4f8[_0x210b06 + 40 >> 2] = _0x2bb7d8[0];
      _0x5ce4f8[_0x210b06 + 44 >> 2] = _0x2bb7d8[1];
      _0x5ce4f8[_0x210b06 + 48 >> 2] = 4096;
      _0x5ce4f8[_0x210b06 + 52 >> 2] = _0x5ba829.blocks;
      _0x5ce4f8[_0x210b06 + 56 >> 2] = _0x5ba829.atime.getTime() / 1000 | 0;
      _0x5ce4f8[_0x210b06 + 60 >> 2] = 0;
      _0x5ce4f8[_0x210b06 + 64 >> 2] = _0x5ba829.mtime.getTime() / 1000 | 0;
      _0x5ce4f8[_0x210b06 + 68 >> 2] = 0;
      _0x5ce4f8[_0x210b06 + 72 >> 2] = _0x5ba829.ctime.getTime() / 1000 | 0;
      _0x5ce4f8[_0x210b06 + 76 >> 2] = 0;
      _0x2bb7d8 = [_0x5ba829.ino >>> 0, (_0x29224d = _0x5ba829.ino, +Math.abs(_0x29224d) >= 1 ? _0x29224d > 0 ? (Math.min(+Math.floor(_0x29224d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x29224d - +(~~_0x29224d >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x5ce4f8[_0x210b06 + 80 >> 2] = _0x2bb7d8[0];
      _0x5ce4f8[_0x210b06 + 84 >> 2] = _0x2bb7d8[1];
      return 0;
    },
    doMsync: function (_0x3a2e73, _0x4e0251, _0x4e2ce8, _0x107196, _0x416e9e) {
      var _0x3488d8 = _0x12f402.slice(_0x3a2e73, _0x3a2e73 + _0x4e2ce8);
      _0x453483.msync(_0x4e0251, _0x3488d8, _0x416e9e, _0x4e2ce8, _0x107196);
    },
    doMkdir: function (_0x480515, _0x89f20f) {
      _0x480515 = _0x402431.normalize(_0x480515);
      if (_0x480515[_0x480515.length - 1] === "/") {
        _0x480515 = _0x480515.substr(0, _0x480515.length - 1);
      }
      _0x453483.mkdir(_0x480515, _0x89f20f, 0);
      return 0;
    },
    doMknod: function (_0x379f02, _0x13222c, _0x174670) {
      switch (_0x13222c & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0x453483.mknod(_0x379f02, _0x13222c, _0x174670);
      return 0;
    },
    doReadlink: function (_0x388f2d, _0x36e1df, _0x40db1f) {
      if (_0x40db1f <= 0) {
        return -28;
      }
      var _0x790989 = _0x453483.readlink(_0x388f2d);
      var _0x186f40 = Math.min(_0x40db1f, _0x219de1(_0x790989));
      var _0x452497 = _0x28416d[_0x36e1df + _0x186f40];
      _0x4cad61(_0x790989, _0x36e1df, _0x40db1f + 1);
      _0x28416d[_0x36e1df + _0x186f40] = _0x452497;
      return _0x186f40;
    },
    doAccess: function (_0x581cd5, _0x595baf) {
      if (_0x595baf & ~7) {
        return -28;
      }
      var _0x58d92c;
      var _0x31f1ab = _0x453483.lookupPath(_0x581cd5, {
        follow: true
      });
      _0x58d92c = _0x31f1ab.node;
      if (!_0x58d92c) {
        return -44;
      }
      var _0x300627 = "";
      if (_0x595baf & 4) {
        _0x300627 += "r";
      }
      if (_0x595baf & 2) {
        _0x300627 += "w";
      }
      if (_0x595baf & 1) {
        _0x300627 += "x";
      }
      if (_0x300627 && _0x453483.nodePermissions(_0x58d92c, _0x300627)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0x25cb1e, _0x268bcb, _0x1c0379) {
      var _0x1b747c = _0x453483.getStream(_0x1c0379);
      if (_0x1b747c) {
        _0x453483.close(_0x1b747c);
      }
      return _0x453483.open(_0x25cb1e, _0x268bcb, 0, _0x1c0379, _0x1c0379).fd;
    },
    doReadv: function (_0x498a84, _0xa96b38, _0x1203bb, _0x1e066e) {
      var _0x499946 = 0;
      for (var _0x3cfcde = 0; _0x3cfcde < _0x1203bb; _0x3cfcde++) {
        var _0x28095a = _0x5ce4f8[_0xa96b38 + _0x3cfcde * 8 >> 2];
        var _0x3be553 = _0x5ce4f8[_0xa96b38 + (_0x3cfcde * 8 + 4) >> 2];
        var _0x3ca8af = _0x453483.read(_0x498a84, _0x28416d, _0x28095a, _0x3be553, _0x1e066e);
        if (_0x3ca8af < 0) {
          return -1;
        }
        _0x499946 += _0x3ca8af;
        if (_0x3ca8af < _0x3be553) {
          break;
        }
      }
      return _0x499946;
    },
    doWritev: function (_0x44e219, _0x59d7d0, _0x2c9120, _0x5032c7) {
      var _0x1912c7 = 0;
      for (var _0xaca723 = 0; _0xaca723 < _0x2c9120; _0xaca723++) {
        var _0x28f419 = _0x5ce4f8[_0x59d7d0 + _0xaca723 * 8 >> 2];
        var _0x1b611a = _0x5ce4f8[_0x59d7d0 + (_0xaca723 * 8 + 4) >> 2];
        var _0x5f5018 = _0x453483.write(_0x44e219, _0x28416d, _0x28f419, _0x1b611a, _0x5032c7);
        if (_0x5f5018 < 0) {
          return -1;
        }
        _0x1912c7 += _0x5f5018;
      }
      return _0x1912c7;
    },
    varargs: undefined,
    get: function () {
      _0x167ead.varargs += 4;
      var _0x2d57d4 = _0x5ce4f8[_0x167ead.varargs - 4 >> 2];
      return _0x2d57d4;
    },
    getStr: function (_0x39bc8b) {
      var _0x5350c7 = _0x51c742(_0x39bc8b);
      return _0x5350c7;
    },
    getStreamFromFD: function (_0x588b58) {
      var _0x66cbaa = _0x453483.getStream(_0x588b58);
      if (!_0x66cbaa) {
        throw new _0x453483.ErrnoError(8);
      }
      return _0x66cbaa;
    },
    get64: function (_0x20d706, _0x410c40) {
      return _0x20d706;
    }
  };
  function _0x3b8281(_0x224dfe, _0x3ebaa8, _0x35217f, _0x31e7a1, _0xfb0ebb) {
    try {
      var _0x2118eb = 0;
      var _0x37209c = _0x3ebaa8 ? _0x5ce4f8[_0x3ebaa8 >> 2] : 0;
      var _0x66a1dd = _0x3ebaa8 ? _0x5ce4f8[_0x3ebaa8 + 4 >> 2] : 0;
      var _0x5bbd23 = _0x35217f ? _0x5ce4f8[_0x35217f >> 2] : 0;
      var _0x25a417 = _0x35217f ? _0x5ce4f8[_0x35217f + 4 >> 2] : 0;
      var _0x20e030 = _0x31e7a1 ? _0x5ce4f8[_0x31e7a1 >> 2] : 0;
      var _0x1b128e = _0x31e7a1 ? _0x5ce4f8[_0x31e7a1 + 4 >> 2] : 0;
      var _0x872145 = 0;
      var _0x4d0e89 = 0;
      var _0x364457 = 0;
      var _0xf0e2c0 = 0;
      var _0x2d3239 = 0;
      var _0x2f2690 = 0;
      var _0xa978a2 = (_0x3ebaa8 ? _0x5ce4f8[_0x3ebaa8 >> 2] : 0) | (_0x35217f ? _0x5ce4f8[_0x35217f >> 2] : 0) | (_0x31e7a1 ? _0x5ce4f8[_0x31e7a1 >> 2] : 0);
      var _0x5070a4 = (_0x3ebaa8 ? _0x5ce4f8[_0x3ebaa8 + 4 >> 2] : 0) | (_0x35217f ? _0x5ce4f8[_0x35217f + 4 >> 2] : 0) | (_0x31e7a1 ? _0x5ce4f8[_0x31e7a1 + 4 >> 2] : 0);
      function _0x12f6f1(_0x3955ff, _0x3a5197, _0x54187c, _0x493a8c) {
        if (_0x3955ff < 32) {
          return _0x3a5197 & _0x493a8c;
        } else {
          return _0x54187c & _0x493a8c;
        }
      }
      for (var _0x306892 = 0; _0x306892 < _0x224dfe; _0x306892++) {
        var _0x42ff8b = 1 << _0x306892 % 32;
        if (!_0x12f6f1(_0x306892, _0xa978a2, _0x5070a4, _0x42ff8b)) {
          continue;
        }
        var _0x21cdd4 = _0x453483.getStream(_0x306892);
        if (!_0x21cdd4) {
          throw new _0x453483.ErrnoError(8);
        }
        var _0x5a2a2d = _0x167ead.DEFAULT_POLLMASK;
        if (_0x21cdd4.stream_ops.poll) {
          _0x5a2a2d = _0x21cdd4.stream_ops.poll(_0x21cdd4);
        }
        if (_0x5a2a2d & 1 && _0x12f6f1(_0x306892, _0x37209c, _0x66a1dd, _0x42ff8b)) {
          if (_0x306892 < 32) {
            _0x872145 = _0x872145 | _0x42ff8b;
          } else {
            _0x4d0e89 = _0x4d0e89 | _0x42ff8b;
          }
          _0x2118eb++;
        }
        if (_0x5a2a2d & 4 && _0x12f6f1(_0x306892, _0x5bbd23, _0x25a417, _0x42ff8b)) {
          if (_0x306892 < 32) {
            _0x364457 = _0x364457 | _0x42ff8b;
          } else {
            _0xf0e2c0 = _0xf0e2c0 | _0x42ff8b;
          }
          _0x2118eb++;
        }
        if (_0x5a2a2d & 2 && _0x12f6f1(_0x306892, _0x20e030, _0x1b128e, _0x42ff8b)) {
          if (_0x306892 < 32) {
            _0x2d3239 = _0x2d3239 | _0x42ff8b;
          } else {
            _0x2f2690 = _0x2f2690 | _0x42ff8b;
          }
          _0x2118eb++;
        }
      }
      if (_0x3ebaa8) {
        _0x5ce4f8[_0x3ebaa8 >> 2] = _0x872145;
        _0x5ce4f8[_0x3ebaa8 + 4 >> 2] = _0x4d0e89;
      }
      if (_0x35217f) {
        _0x5ce4f8[_0x35217f >> 2] = _0x364457;
        _0x5ce4f8[_0x35217f + 4 >> 2] = _0xf0e2c0;
      }
      if (_0x31e7a1) {
        _0x5ce4f8[_0x31e7a1 >> 2] = _0x2d3239;
        _0x5ce4f8[_0x31e7a1 + 4 >> 2] = _0x2f2690;
      }
      return _0x2118eb;
    } catch (_0x33553a) {
      if (typeof _0x453483 === "undefined" || !(_0x33553a instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x33553a);
      }
      return -_0x33553a.errno;
    }
  }
  var _0xf8f32b = {
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
  var _0x5d1efe = {
    mount: function (_0x3a9621) {
      _0x5c0d54.websocket = _0x5c0d54.websocket && typeof _0x5c0d54.websocket === "object" ? _0x5c0d54.websocket : {};
      _0x5c0d54.websocket._callbacks = {};
      _0x5c0d54.websocket.on = function (_0x2b81c1, _0x12b08a) {
        if (typeof _0x12b08a === "function") {
          this._callbacks[_0x2b81c1] = _0x12b08a;
        }
        return this;
      };
      _0x5c0d54.websocket.emit = function (_0x2a4dbb, _0x428771) {
        if (typeof this._callbacks[_0x2a4dbb] === "function") {
          this._callbacks[_0x2a4dbb].call(this, _0x428771);
        }
      };
      return _0x453483.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x29fc15, _0x2ac0a3, _0x167c51) {
      _0x2ac0a3 &= ~526336;
      var _0x5068d8 = _0x2ac0a3 == 1;
      if (_0x167c51) {
        _0x1f7fa5(_0x5068d8 == (_0x167c51 == 6));
      }
      var _0x3f3784 = {
        family: _0x29fc15,
        type: _0x2ac0a3,
        protocol: _0x167c51,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x5d1efe.websocket_sock_ops
      };
      var _0x598ece = _0x5d1efe.nextname();
      var _0x58d11b = _0x453483.createNode(_0x5d1efe.root, _0x598ece, 49152, 0);
      _0x58d11b.sock = _0x3f3784;
      var _0x260a66 = _0x453483.createStream({
        path: _0x598ece,
        node: _0x58d11b,
        flags: 2,
        seekable: false,
        stream_ops: _0x5d1efe.stream_ops
      });
      _0x3f3784.stream = _0x260a66;
      return _0x3f3784;
    },
    getSocket: function (_0x541140) {
      var _0x248f5b = _0x453483.getStream(_0x541140);
      if (!_0x248f5b || !_0x453483.isSocket(_0x248f5b.node.mode)) {
        return null;
      }
      return _0x248f5b.node.sock;
    },
    stream_ops: {
      poll: function (_0x31a41f) {
        var _0x10c457 = _0x31a41f.node.sock;
        return _0x10c457.sock_ops.poll(_0x10c457);
      },
      ioctl: function (_0x204b28, _0x2b6916, _0x35203a) {
        var _0x591a56 = _0x204b28.node.sock;
        return _0x591a56.sock_ops.ioctl(_0x591a56, _0x2b6916, _0x35203a);
      },
      read: function (_0x512228, _0x42f51b, _0x11d5fd, _0x1c3073, _0x154bcc) {
        var _0x656f6b = _0x512228.node.sock;
        var _0x5033b0 = _0x656f6b.sock_ops.recvmsg(_0x656f6b, _0x1c3073);
        if (!_0x5033b0) {
          return 0;
        }
        _0x42f51b.set(_0x5033b0.buffer, _0x11d5fd);
        return _0x5033b0.buffer.length;
      },
      write: function (_0x173375, _0x3f2d63, _0x2cb2a5, _0x1264e6, _0x13cff3) {
        var _0x5041e9 = _0x173375.node.sock;
        return _0x5041e9.sock_ops.sendmsg(_0x5041e9, _0x3f2d63, _0x2cb2a5, _0x1264e6);
      },
      close: function (_0x41c65f) {
        var _0x559464 = _0x41c65f.node.sock;
        _0x559464.sock_ops.close(_0x559464);
      }
    },
    nextname: function () {
      if (!_0x5d1efe.nextname.current) {
        _0x5d1efe.nextname.current = 0;
      }
      return "socket[" + _0x5d1efe.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0x9168f3, _0x486be8, _0x50c361) {
        var _0x42b14a;
        if (typeof _0x486be8 === "object") {
          _0x42b14a = _0x486be8;
          _0x486be8 = null;
          _0x50c361 = null;
        }
        if (_0x42b14a) {
          if (_0x42b14a._socket) {
            _0x486be8 = _0x42b14a._socket.remoteAddress;
            _0x50c361 = _0x42b14a._socket.remotePort;
          } else {
            var _0x397aa4 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x42b14a.url);
            if (!_0x397aa4) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x486be8 = _0x397aa4[1];
            _0x50c361 = parseInt(_0x397aa4[2], 10);
          }
        } else {
          try {
            var _0x47140b = _0x5c0d54.websocket && typeof _0x5c0d54.websocket === "object";
            var _0x27c769 = "ws:#".replace("#", "//");
            if (_0x47140b) {
              if (typeof _0x5c0d54.websocket.url === "string") {
                _0x27c769 = _0x5c0d54.websocket.url;
              }
            }
            if (_0x27c769 === "ws://" || _0x27c769 === "wss://") {
              var _0x5d6b1c = _0x486be8.split("/");
              _0x27c769 = _0x27c769 + _0x5d6b1c[0] + ":" + _0x50c361 + "/" + _0x5d6b1c.slice(1).join("/");
            }
            var _0x2490d9 = "binary";
            if (_0x47140b) {
              if (typeof _0x5c0d54.websocket.subprotocol === "string") {
                _0x2490d9 = _0x5c0d54.websocket.subprotocol;
              }
            }
            var _0x4dcedf = undefined;
            if (_0x2490d9 !== "null") {
              _0x2490d9 = _0x2490d9.replace(/^ +| +$/g, "").split(/ *, */);
              _0x4dcedf = _0x2ea75e ? {
                protocol: _0x2490d9.toString()
              } : _0x2490d9;
            }
            if (_0x47140b && _0x5c0d54.websocket.subprotocol === null) {
              _0x2490d9 = "null";
              _0x4dcedf = undefined;
            }
            var _0x85cece;
            if (_0x2ea75e) {
              _0x85cece = require("ws");
            } else {
              _0x85cece = WebSocket;
            }
            _0x42b14a = new _0x85cece(_0x27c769, _0x4dcedf);
            _0x42b14a.binaryType = "arraybuffer";
          } catch (_0x17b570) {
            throw new _0x453483.ErrnoError(_0xf8f32b.EHOSTUNREACH);
          }
        }
        var _0x341fac = {
          addr: _0x486be8,
          port: _0x50c361,
          socket: _0x42b14a,
          dgram_send_queue: []
        };
        _0x5d1efe.websocket_sock_ops.addPeer(_0x9168f3, _0x341fac);
        _0x5d1efe.websocket_sock_ops.handlePeerEvents(_0x9168f3, _0x341fac);
        if (_0x9168f3.type === 2 && typeof _0x9168f3.sport !== "undefined") {
          _0x341fac.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x9168f3.sport & 65280) >> 8, _0x9168f3.sport & 255]));
        }
        return _0x341fac;
      },
      getPeer: function (_0x433a69, _0x2c7ff0, _0x3205cd) {
        return _0x433a69.peers[_0x2c7ff0 + ":" + _0x3205cd];
      },
      addPeer: function (_0x3ae15c, _0xe06c5) {
        _0x3ae15c.peers[_0xe06c5.addr + ":" + _0xe06c5.port] = _0xe06c5;
      },
      removePeer: function (_0x52d0cf, _0x10f494) {
        delete _0x52d0cf.peers[_0x10f494.addr + ":" + _0x10f494.port];
      },
      handlePeerEvents: function (_0xe117e6, _0x440999) {
        var _0x460c80 = true;
        function _0x8b4394() {
          _0x5c0d54.websocket.emit("open", _0xe117e6.stream.fd);
          try {
            var _0x35267e = _0x440999.dgram_send_queue.shift();
            while (_0x35267e) {
              _0x440999.socket.send(_0x35267e);
              _0x35267e = _0x440999.dgram_send_queue.shift();
            }
          } catch (_0x17f78b) {
            _0x440999.socket.close();
          }
        }
        function _0x5f2331(_0x2c3a08) {
          if (typeof _0x2c3a08 === "string") {
            var _0x4cd877 = new TextEncoder();
            _0x2c3a08 = _0x4cd877.encode(_0x2c3a08);
          } else {
            _0x1f7fa5(_0x2c3a08.byteLength !== undefined);
            if (_0x2c3a08.byteLength == 0) {
              return;
            } else {
              _0x2c3a08 = new Uint8Array(_0x2c3a08);
            }
          }
          var _0x4692ca = _0x460c80;
          _0x460c80 = false;
          if (_0x4692ca && _0x2c3a08.length === 10 && _0x2c3a08[0] === 255 && _0x2c3a08[1] === 255 && _0x2c3a08[2] === 255 && _0x2c3a08[3] === 255 && _0x2c3a08[4] === "p".charCodeAt(0) && _0x2c3a08[5] === "o".charCodeAt(0) && _0x2c3a08[6] === "r".charCodeAt(0) && _0x2c3a08[7] === "t".charCodeAt(0)) {
            var _0x1c1401 = _0x2c3a08[8] << 8 | _0x2c3a08[9];
            _0x5d1efe.websocket_sock_ops.removePeer(_0xe117e6, _0x440999);
            _0x440999.port = _0x1c1401;
            _0x5d1efe.websocket_sock_ops.addPeer(_0xe117e6, _0x440999);
            return;
          }
          _0xe117e6.recv_queue.push({
            addr: _0x440999.addr,
            port: _0x440999.port,
            data: _0x2c3a08
          });
          _0x5c0d54.websocket.emit("message", _0xe117e6.stream.fd);
        }
        if (_0x2ea75e) {
          _0x440999.socket.on("open", _0x8b4394);
          _0x440999.socket.on("message", function (_0x3e86f2, _0x991581) {
            if (!_0x991581.binary) {
              return;
            }
            _0x5f2331(new Uint8Array(_0x3e86f2).buffer);
          });
          _0x440999.socket.on("close", function () {
            _0x5c0d54.websocket.emit("close", _0xe117e6.stream.fd);
          });
          _0x440999.socket.on("error", function (_0x55ba5c) {
            _0xe117e6.error = _0xf8f32b.ECONNREFUSED;
            _0x5c0d54.websocket.emit("error", [_0xe117e6.stream.fd, _0xe117e6.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x440999.socket.onopen = _0x8b4394;
          _0x440999.socket.onclose = function () {
            _0x5c0d54.websocket.emit("close", _0xe117e6.stream.fd);
          };
          _0x440999.socket.onmessage = function _0x685a1(_0x6595a5) {
            _0x5f2331(_0x6595a5.data);
          };
          _0x440999.socket.onerror = function (_0x22f38c) {
            _0xe117e6.error = _0xf8f32b.ECONNREFUSED;
            _0x5c0d54.websocket.emit("error", [_0xe117e6.stream.fd, _0xe117e6.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0x22481a) {
        if (_0x22481a.type === 1 && _0x22481a.server) {
          if (_0x22481a.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0x606af3 = 0;
        var _0xc26eab = _0x22481a.type === 1 ? _0x5d1efe.websocket_sock_ops.getPeer(_0x22481a, _0x22481a.daddr, _0x22481a.dport) : null;
        if (_0x22481a.recv_queue.length || !_0xc26eab || _0xc26eab && _0xc26eab.socket.readyState === _0xc26eab.socket.CLOSING || _0xc26eab && _0xc26eab.socket.readyState === _0xc26eab.socket.CLOSED) {
          _0x606af3 |= 65;
        }
        if (!_0xc26eab || _0xc26eab && _0xc26eab.socket.readyState === _0xc26eab.socket.OPEN) {
          _0x606af3 |= 4;
        }
        if (_0xc26eab && _0xc26eab.socket.readyState === _0xc26eab.socket.CLOSING || _0xc26eab && _0xc26eab.socket.readyState === _0xc26eab.socket.CLOSED) {
          _0x606af3 |= 16;
        }
        return _0x606af3;
      },
      ioctl: function (_0x2ef0f9, _0x174824, _0x447248) {
        switch (_0x174824) {
          case 21531:
            var _0x4ecf30 = 0;
            if (_0x2ef0f9.recv_queue.length) {
              _0x4ecf30 = _0x2ef0f9.recv_queue[0].data.length;
            }
            _0x5ce4f8[_0x447248 >> 2] = _0x4ecf30;
            return 0;
          default:
            return _0xf8f32b.EINVAL;
        }
      },
      close: function (_0x11e617) {
        if (_0x11e617.server) {
          try {
            _0x11e617.server.close();
          } catch (_0x513336) {}
          _0x11e617.server = null;
        }
        var _0x3d6278 = Object.keys(_0x11e617.peers);
        for (var _0x577672 = 0; _0x577672 < _0x3d6278.length; _0x577672++) {
          var _0x184fee = _0x11e617.peers[_0x3d6278[_0x577672]];
          try {
            _0x184fee.socket.close();
          } catch (_0x355e40) {}
          _0x5d1efe.websocket_sock_ops.removePeer(_0x11e617, _0x184fee);
        }
        return 0;
      },
      bind: function (_0x4d1947, _0x5a497c, _0x2f37b1) {
        if (typeof _0x4d1947.saddr !== "undefined" || typeof _0x4d1947.sport !== "undefined") {
          throw new _0x453483.ErrnoError(_0xf8f32b.EINVAL);
        }
        _0x4d1947.saddr = _0x5a497c;
        _0x4d1947.sport = _0x2f37b1;
        if (_0x4d1947.type === 2) {
          if (_0x4d1947.server) {
            _0x4d1947.server.close();
            _0x4d1947.server = null;
          }
          try {
            _0x4d1947.sock_ops.listen(_0x4d1947, 0);
          } catch (_0x44e3c1) {
            if (!(_0x44e3c1 instanceof _0x453483.ErrnoError)) {
              throw _0x44e3c1;
            }
            if (_0x44e3c1.errno !== _0xf8f32b.EOPNOTSUPP) {
              throw _0x44e3c1;
            }
          }
        }
      },
      connect: function (_0x55b89c, _0x288a7c, _0x1d9a26) {
        if (_0x55b89c.server) {
          throw new _0x453483.ErrnoError(_0xf8f32b.EOPNOTSUPP);
        }
        if (typeof _0x55b89c.daddr !== "undefined" && typeof _0x55b89c.dport !== "undefined") {
          var _0x66caf8 = _0x5d1efe.websocket_sock_ops.getPeer(_0x55b89c, _0x55b89c.daddr, _0x55b89c.dport);
          if (_0x66caf8) {
            if (_0x66caf8.socket.readyState === _0x66caf8.socket.CONNECTING) {
              throw new _0x453483.ErrnoError(_0xf8f32b.EALREADY);
            } else {
              throw new _0x453483.ErrnoError(_0xf8f32b.EISCONN);
            }
          }
        }
        var _0x318854 = _0x5d1efe.websocket_sock_ops.createPeer(_0x55b89c, _0x288a7c, _0x1d9a26);
        _0x55b89c.daddr = _0x318854.addr;
        _0x55b89c.dport = _0x318854.port;
        throw new _0x453483.ErrnoError(_0xf8f32b.EINPROGRESS);
      },
      listen: function (_0x56f6ff, _0x4c440d) {
        if (!_0x2ea75e) {
          throw new _0x453483.ErrnoError(_0xf8f32b.EOPNOTSUPP);
        }
        if (_0x56f6ff.server) {
          throw new _0x453483.ErrnoError(_0xf8f32b.EINVAL);
        }
        var _0x34db98 = require("ws").Server;
        var _0x564daa = _0x56f6ff.saddr;
        _0x56f6ff.server = new _0x34db98({
          host: _0x564daa,
          port: _0x56f6ff.sport
        });
        _0x5c0d54.websocket.emit("listen", _0x56f6ff.stream.fd);
        _0x56f6ff.server.on("connection", function (_0x18f3ac) {
          if (_0x56f6ff.type === 1) {
            var _0x3de3ee = _0x5d1efe.createSocket(_0x56f6ff.family, _0x56f6ff.type, _0x56f6ff.protocol);
            var _0x3069b5 = _0x5d1efe.websocket_sock_ops.createPeer(_0x3de3ee, _0x18f3ac);
            _0x3de3ee.daddr = _0x3069b5.addr;
            _0x3de3ee.dport = _0x3069b5.port;
            _0x56f6ff.pending.push(_0x3de3ee);
            _0x5c0d54.websocket.emit("connection", _0x3de3ee.stream.fd);
          } else {
            _0x5d1efe.websocket_sock_ops.createPeer(_0x56f6ff, _0x18f3ac);
            _0x5c0d54.websocket.emit("connection", _0x56f6ff.stream.fd);
          }
        });
        _0x56f6ff.server.on("closed", function () {
          _0x5c0d54.websocket.emit("close", _0x56f6ff.stream.fd);
          _0x56f6ff.server = null;
        });
        _0x56f6ff.server.on("error", function (_0x217494) {
          _0x56f6ff.error = _0xf8f32b.EHOSTUNREACH;
          _0x5c0d54.websocket.emit("error", [_0x56f6ff.stream.fd, _0x56f6ff.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0x2deb3) {
        if (!_0x2deb3.server) {
          throw new _0x453483.ErrnoError(_0xf8f32b.EINVAL);
        }
        var _0x8fad05 = _0x2deb3.pending.shift();
        _0x8fad05.stream.flags = _0x2deb3.stream.flags;
        return _0x8fad05;
      },
      getname: function (_0x3977a7, _0x9aea52) {
        var _0x3b2e07;
        var _0x3ef2c9;
        if (_0x9aea52) {
          if (_0x3977a7.daddr === undefined || _0x3977a7.dport === undefined) {
            throw new _0x453483.ErrnoError(_0xf8f32b.ENOTCONN);
          }
          _0x3b2e07 = _0x3977a7.daddr;
          _0x3ef2c9 = _0x3977a7.dport;
        } else {
          _0x3b2e07 = _0x3977a7.saddr || 0;
          _0x3ef2c9 = _0x3977a7.sport || 0;
        }
        return {
          addr: _0x3b2e07,
          port: _0x3ef2c9
        };
      },
      sendmsg: function (_0x20517b, _0x1bbbfb, _0x22dc3b, _0x4a8cbf, _0x88f301, _0x403840) {
        if (_0x20517b.type === 2) {
          if (_0x88f301 === undefined || _0x403840 === undefined) {
            _0x88f301 = _0x20517b.daddr;
            _0x403840 = _0x20517b.dport;
          }
          if (_0x88f301 === undefined || _0x403840 === undefined) {
            throw new _0x453483.ErrnoError(_0xf8f32b.EDESTADDRREQ);
          }
        } else {
          _0x88f301 = _0x20517b.daddr;
          _0x403840 = _0x20517b.dport;
        }
        var _0x5ba980 = _0x5d1efe.websocket_sock_ops.getPeer(_0x20517b, _0x88f301, _0x403840);
        if (_0x20517b.type === 1) {
          if (!_0x5ba980 || _0x5ba980.socket.readyState === _0x5ba980.socket.CLOSING || _0x5ba980.socket.readyState === _0x5ba980.socket.CLOSED) {
            throw new _0x453483.ErrnoError(_0xf8f32b.ENOTCONN);
          } else if (_0x5ba980.socket.readyState === _0x5ba980.socket.CONNECTING) {
            throw new _0x453483.ErrnoError(_0xf8f32b.EAGAIN);
          }
        }
        if (ArrayBuffer.isView(_0x1bbbfb)) {
          _0x22dc3b += _0x1bbbfb.byteOffset;
          _0x1bbbfb = _0x1bbbfb.buffer;
        }
        var _0x5b8866;
        _0x5b8866 = _0x1bbbfb.slice(_0x22dc3b, _0x22dc3b + _0x4a8cbf);
        if (_0x20517b.type === 2) {
          if (!_0x5ba980 || _0x5ba980.socket.readyState !== _0x5ba980.socket.OPEN) {
            if (!_0x5ba980 || _0x5ba980.socket.readyState === _0x5ba980.socket.CLOSING || _0x5ba980.socket.readyState === _0x5ba980.socket.CLOSED) {
              _0x5ba980 = _0x5d1efe.websocket_sock_ops.createPeer(_0x20517b, _0x88f301, _0x403840);
            }
            _0x5ba980.dgram_send_queue.push(_0x5b8866);
            return _0x4a8cbf;
          }
        }
        try {
          _0x5ba980.socket.send(_0x5b8866);
          return _0x4a8cbf;
        } catch (_0x577bb0) {
          throw new _0x453483.ErrnoError(_0xf8f32b.EINVAL);
        }
      },
      recvmsg: function (_0x2d5098, _0xbdc908) {
        if (_0x2d5098.type === 1 && _0x2d5098.server) {
          throw new _0x453483.ErrnoError(_0xf8f32b.ENOTCONN);
        }
        var _0x4758f7 = _0x2d5098.recv_queue.shift();
        if (!_0x4758f7) {
          if (_0x2d5098.type === 1) {
            var _0x16579b = _0x5d1efe.websocket_sock_ops.getPeer(_0x2d5098, _0x2d5098.daddr, _0x2d5098.dport);
            if (!_0x16579b) {
              throw new _0x453483.ErrnoError(_0xf8f32b.ENOTCONN);
            } else if (_0x16579b.socket.readyState === _0x16579b.socket.CLOSING || _0x16579b.socket.readyState === _0x16579b.socket.CLOSED) {
              return null;
            } else {
              throw new _0x453483.ErrnoError(_0xf8f32b.EAGAIN);
            }
          } else {
            throw new _0x453483.ErrnoError(_0xf8f32b.EAGAIN);
          }
        }
        var _0x36b7bf = _0x4758f7.data.byteLength || _0x4758f7.data.length;
        var _0x3ae2fe = _0x4758f7.data.byteOffset || 0;
        var _0x2dc88a = _0x4758f7.data.buffer || _0x4758f7.data;
        var _0xb02a70 = Math.min(_0xbdc908, _0x36b7bf);
        var _0x1f8e35 = {
          buffer: new Uint8Array(_0x2dc88a, _0x3ae2fe, _0xb02a70),
          addr: _0x4758f7.addr,
          port: _0x4758f7.port
        };
        if (_0x2d5098.type === 1 && _0xb02a70 < _0x36b7bf) {
          var _0x155fef = _0x36b7bf - _0xb02a70;
          _0x4758f7.data = new Uint8Array(_0x2dc88a, _0x3ae2fe + _0xb02a70, _0x155fef);
          _0x2d5098.recv_queue.unshift(_0x4758f7);
        }
        return _0x1f8e35;
      }
    }
  };
  function _0x57fdf4(_0x3dd09d) {
    var _0x175c3d = _0x5d1efe.getSocket(_0x3dd09d);
    if (!_0x175c3d) {
      throw new _0x453483.ErrnoError(8);
    }
    return _0x175c3d;
  }
  function _0x249f9c(_0x36942f) {
    _0x5ce4f8[_0x490017() >> 2] = _0x36942f;
    return _0x36942f;
  }
  function _0x25739d(_0x46e839) {
    var _0x31b517 = _0x46e839.split(".");
    for (var _0x58dfa7 = 0; _0x58dfa7 < 4; _0x58dfa7++) {
      var _0x7ed200 = Number(_0x31b517[_0x58dfa7]);
      if (isNaN(_0x7ed200)) {
        return null;
      }
      _0x31b517[_0x58dfa7] = _0x7ed200;
    }
    return (_0x31b517[0] | _0x31b517[1] << 8 | _0x31b517[2] << 16 | _0x31b517[3] << 24) >>> 0;
  }
  function _0x6e55b1(_0x4a6989) {
    return parseInt(_0x4a6989);
  }
  function _0x2dabec(_0x5a1011) {
    var _0x38d335;
    var _0x288184;
    var _0x4fea3e;
    var _0x159d97;
    var _0x319cd8 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x8205e2 = [];
    if (!_0x319cd8.test(_0x5a1011)) {
      return null;
    }
    if (_0x5a1011 === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x5a1011.startsWith("::")) {
      _0x5a1011 = _0x5a1011.replace("::", "Z:");
    } else {
      _0x5a1011 = _0x5a1011.replace("::", ":Z:");
    }
    if (_0x5a1011.indexOf(".") > 0) {
      _0x5a1011 = _0x5a1011.replace(new RegExp("[.]", "g"), ":");
      _0x38d335 = _0x5a1011.split(":");
      _0x38d335[_0x38d335.length - 4] = _0x6e55b1(_0x38d335[_0x38d335.length - 4]) + _0x6e55b1(_0x38d335[_0x38d335.length - 3]) * 256;
      _0x38d335[_0x38d335.length - 3] = _0x6e55b1(_0x38d335[_0x38d335.length - 2]) + _0x6e55b1(_0x38d335[_0x38d335.length - 1]) * 256;
      _0x38d335 = _0x38d335.slice(0, _0x38d335.length - 2);
    } else {
      _0x38d335 = _0x5a1011.split(":");
    }
    _0x4fea3e = 0;
    _0x159d97 = 0;
    for (_0x288184 = 0; _0x288184 < _0x38d335.length; _0x288184++) {
      if (typeof _0x38d335[_0x288184] === "string") {
        if (_0x38d335[_0x288184] === "Z") {
          for (_0x159d97 = 0; _0x159d97 < 8 - _0x38d335.length + 1; _0x159d97++) {
            _0x8205e2[_0x288184 + _0x159d97] = 0;
          }
          _0x4fea3e = _0x159d97 - 1;
        } else {
          _0x8205e2[_0x288184 + _0x4fea3e] = _0x31b328(parseInt(_0x38d335[_0x288184], 16));
        }
      } else {
        _0x8205e2[_0x288184 + _0x4fea3e] = _0x38d335[_0x288184];
      }
    }
    return [_0x8205e2[1] << 16 | _0x8205e2[0], _0x8205e2[3] << 16 | _0x8205e2[2], _0x8205e2[5] << 16 | _0x8205e2[4], _0x8205e2[7] << 16 | _0x8205e2[6]];
  }
  function _0x29a5b5(_0x233005, _0x3ffa1d, _0x583bd5, _0x5f5a31, _0x4d3a10) {
    switch (_0x3ffa1d) {
      case 2:
        _0x583bd5 = _0x25739d(_0x583bd5);
        if (_0x4d3a10) {
          _0x5ce4f8[_0x4d3a10 >> 2] = 16;
        }
        _0x4c83dc[_0x233005 >> 1] = _0x3ffa1d;
        _0x5ce4f8[_0x233005 + 4 >> 2] = _0x583bd5;
        _0x4c83dc[_0x233005 + 2 >> 1] = _0x31b328(_0x5f5a31);
        _0x2bb7d8 = [0, (_0x29224d = 0, +Math.abs(_0x29224d) >= 1 ? _0x29224d > 0 ? (Math.min(+Math.floor(_0x29224d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x29224d - +(~~_0x29224d >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x5ce4f8[_0x233005 + 8 >> 2] = _0x2bb7d8[0];
        _0x5ce4f8[_0x233005 + 12 >> 2] = _0x2bb7d8[1];
        break;
      case 10:
        _0x583bd5 = _0x2dabec(_0x583bd5);
        if (_0x4d3a10) {
          _0x5ce4f8[_0x4d3a10 >> 2] = 28;
        }
        _0x5ce4f8[_0x233005 >> 2] = _0x3ffa1d;
        _0x5ce4f8[_0x233005 + 8 >> 2] = _0x583bd5[0];
        _0x5ce4f8[_0x233005 + 12 >> 2] = _0x583bd5[1];
        _0x5ce4f8[_0x233005 + 16 >> 2] = _0x583bd5[2];
        _0x5ce4f8[_0x233005 + 20 >> 2] = _0x583bd5[3];
        _0x4c83dc[_0x233005 + 2 >> 1] = _0x31b328(_0x5f5a31);
        _0x5ce4f8[_0x233005 + 4 >> 2] = 0;
        _0x5ce4f8[_0x233005 + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0x548ba6 = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0x3e73c8) {
      var _0x4e6191 = _0x25739d(_0x3e73c8);
      if (_0x4e6191 !== null) {
        return _0x3e73c8;
      }
      _0x4e6191 = _0x2dabec(_0x3e73c8);
      if (_0x4e6191 !== null) {
        return _0x3e73c8;
      }
      var _0x2fa7db;
      if (_0x548ba6.address_map.addrs[_0x3e73c8]) {
        _0x2fa7db = _0x548ba6.address_map.addrs[_0x3e73c8];
      } else {
        var _0x250524 = _0x548ba6.address_map.id++;
        _0x1f7fa5(_0x250524 < 65535, "exceeded max address mappings of 65535");
        _0x2fa7db = "172.29." + (_0x250524 & 255) + "." + (_0x250524 & 65280);
        _0x548ba6.address_map.names[_0x2fa7db] = _0x3e73c8;
        _0x548ba6.address_map.addrs[_0x3e73c8] = _0x2fa7db;
      }
      return _0x2fa7db;
    },
    lookup_addr: function (_0x5340a0) {
      if (_0x548ba6.address_map.names[_0x5340a0]) {
        return _0x548ba6.address_map.names[_0x5340a0];
      }
      return null;
    }
  };
  function _0x28bd12(_0x597a35, _0x50c588, _0x558eae, _0x46cbea) {
    try {
      var _0x144680 = _0x57fdf4(_0x597a35);
      var _0x56d7c5 = _0x144680.sock_ops.accept(_0x144680);
      if (_0x50c588) {
        var _0xdd9e07 = _0x29a5b5(_0x50c588, _0x56d7c5.family, _0x548ba6.lookup_name(_0x56d7c5.daddr), _0x56d7c5.dport, _0x558eae);
      }
      return _0x56d7c5.stream.fd;
    } catch (_0x548273) {
      if (typeof _0x453483 === "undefined" || !(_0x548273 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x548273);
      }
      return -_0x548273.errno;
    }
  }
  function _0x3fc937(_0x3806d4, _0x4301ec) {
    try {
      _0x3806d4 = _0x167ead.getStr(_0x3806d4);
      return _0x167ead.doAccess(_0x3806d4, _0x4301ec);
    } catch (_0x2694e3) {
      if (typeof _0x453483 === "undefined" || !(_0x2694e3 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x2694e3);
      }
      return -_0x2694e3.errno;
    }
  }
  function _0x4db452(_0xecf423) {
    return (_0xecf423 & 255) + "." + (_0xecf423 >> 8 & 255) + "." + (_0xecf423 >> 16 & 255) + "." + (_0xecf423 >> 24 & 255);
  }
  function _0x3b9f82(_0x23f06d) {
    var _0x4a7269 = "";
    var _0x345a52 = 0;
    var _0x3d4822 = 0;
    var _0x208e38 = 0;
    var _0x3c89cd = 0;
    var _0xe3ecb0 = 0;
    var _0x3a0e9f = 0;
    var _0x382394 = [_0x23f06d[0] & 65535, _0x23f06d[0] >> 16, _0x23f06d[1] & 65535, _0x23f06d[1] >> 16, _0x23f06d[2] & 65535, _0x23f06d[2] >> 16, _0x23f06d[3] & 65535, _0x23f06d[3] >> 16];
    var _0x570979 = true;
    var _0x3d0a06 = "";
    for (_0x3a0e9f = 0; _0x3a0e9f < 5; _0x3a0e9f++) {
      if (_0x382394[_0x3a0e9f] !== 0) {
        _0x570979 = false;
        break;
      }
    }
    if (_0x570979) {
      _0x3d0a06 = _0x4db452(_0x382394[6] | _0x382394[7] << 16);
      if (_0x382394[5] === -1) {
        _0x4a7269 = "::ffff:";
        _0x4a7269 += _0x3d0a06;
        return _0x4a7269;
      }
      if (_0x382394[5] === 0) {
        _0x4a7269 = "::";
        if (_0x3d0a06 === "0.0.0.0") {
          _0x3d0a06 = "";
        }
        if (_0x3d0a06 === "0.0.0.1") {
          _0x3d0a06 = "1";
        }
        _0x4a7269 += _0x3d0a06;
        return _0x4a7269;
      }
    }
    for (_0x345a52 = 0; _0x345a52 < 8; _0x345a52++) {
      if (_0x382394[_0x345a52] === 0) {
        if (_0x345a52 - _0x208e38 > 1) {
          _0xe3ecb0 = 0;
        }
        _0x208e38 = _0x345a52;
        _0xe3ecb0++;
      }
      if (_0xe3ecb0 > _0x3d4822) {
        _0x3d4822 = _0xe3ecb0;
        _0x3c89cd = _0x345a52 - _0x3d4822 + 1;
      }
    }
    for (_0x345a52 = 0; _0x345a52 < 8; _0x345a52++) {
      if (_0x3d4822 > 1) {
        if (_0x382394[_0x345a52] === 0 && _0x345a52 >= _0x3c89cd && _0x345a52 < _0x3c89cd + _0x3d4822) {
          if (_0x345a52 === _0x3c89cd) {
            _0x4a7269 += ":";
            if (_0x3c89cd === 0) {
              _0x4a7269 += ":";
            }
          }
          continue;
        }
      }
      _0x4a7269 += Number(_0x222208(_0x382394[_0x345a52] & 65535)).toString(16);
      _0x4a7269 += _0x345a52 < 7 ? ":" : "";
    }
    return _0x4a7269;
  }
  function _0x4beb82(_0x34b430, _0x276a46) {
    var _0x4b11dc = _0x4c83dc[_0x34b430 >> 1];
    var _0xef48a3 = _0x222208(_0x55dbec[_0x34b430 + 2 >> 1]);
    var _0x345c1d;
    switch (_0x4b11dc) {
      case 2:
        if (_0x276a46 !== 16) {
          return {
            errno: 28
          };
        }
        _0x345c1d = _0x5ce4f8[_0x34b430 + 4 >> 2];
        _0x345c1d = _0x4db452(_0x345c1d);
        break;
      case 10:
        if (_0x276a46 !== 28) {
          return {
            errno: 28
          };
        }
        _0x345c1d = [_0x5ce4f8[_0x34b430 + 8 >> 2], _0x5ce4f8[_0x34b430 + 12 >> 2], _0x5ce4f8[_0x34b430 + 16 >> 2], _0x5ce4f8[_0x34b430 + 20 >> 2]];
        _0x345c1d = _0x3b9f82(_0x345c1d);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x4b11dc,
      addr: _0x345c1d,
      port: _0xef48a3
    };
  }
  function _0x35f8e6(_0x1e5c9f, _0x536349, _0x46e0a8) {
    if (_0x46e0a8 && _0x1e5c9f === 0) {
      return null;
    }
    var _0xf81201 = _0x4beb82(_0x1e5c9f, _0x536349);
    if (_0xf81201.errno) {
      throw new _0x453483.ErrnoError(_0xf81201.errno);
    }
    _0xf81201.addr = _0x548ba6.lookup_addr(_0xf81201.addr) || _0xf81201.addr;
    return _0xf81201;
  }
  function _0x271996(_0xa0a284, _0xfa363, _0x8543d2) {
    try {
      var _0x271eb5 = _0x57fdf4(_0xa0a284);
      var _0x14f899 = _0x35f8e6(_0xfa363, _0x8543d2);
      _0x271eb5.sock_ops.bind(_0x271eb5, _0x14f899.addr, _0x14f899.port);
      return 0;
    } catch (_0x41afd4) {
      if (typeof _0x453483 === "undefined" || !(_0x41afd4 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x41afd4);
      }
      return -_0x41afd4.errno;
    }
  }
  function _0x7497ca(_0x58e77d, _0x25d0af) {
    try {
      _0x58e77d = _0x167ead.getStr(_0x58e77d);
      _0x453483.chmod(_0x58e77d, _0x25d0af);
      return 0;
    } catch (_0x76f89b) {
      if (typeof _0x453483 === "undefined" || !(_0x76f89b instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x76f89b);
      }
      return -_0x76f89b.errno;
    }
  }
  function _0x594d35(_0x47edc3, _0xc669b0, _0x2f8aab) {
    try {
      var _0x1fdc58 = _0x57fdf4(_0x47edc3);
      var _0x20c006 = _0x35f8e6(_0xc669b0, _0x2f8aab);
      _0x1fdc58.sock_ops.connect(_0x1fdc58, _0x20c006.addr, _0x20c006.port);
      return 0;
    } catch (_0x2a2733) {
      if (typeof _0x453483 === "undefined" || !(_0x2a2733 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x2a2733);
      }
      return -_0x2a2733.errno;
    }
  }
  function _0x4b7c91(_0x1c7e6e, _0x159dae) {
    try {
      var _0xdedca0 = _0x167ead.getStreamFromFD(_0x1c7e6e);
      if (_0xdedca0.fd === _0x159dae) {
        return _0x159dae;
      }
      return _0x167ead.doDup(_0xdedca0.path, _0xdedca0.flags, _0x159dae);
    } catch (_0x336468) {
      if (typeof _0x453483 === "undefined" || !(_0x336468 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x336468);
      }
      return -_0x336468.errno;
    }
  }
  function _0x5d6b4a(_0xf23f1b, _0x59f3b6, _0x153507) {
    _0x167ead.varargs = _0x153507;
    try {
      var _0x167d47 = _0x167ead.getStreamFromFD(_0xf23f1b);
      switch (_0x59f3b6) {
        case 0:
          {
            var _0x143320 = _0x167ead.get();
            if (_0x143320 < 0) {
              return -28;
            }
            var _0x247cf1;
            _0x247cf1 = _0x453483.open(_0x167d47.path, _0x167d47.flags, 0, _0x143320);
            return _0x247cf1.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0x167d47.flags;
        case 4:
          {
            var _0x143320 = _0x167ead.get();
            _0x167d47.flags |= _0x143320;
            return 0;
          }
        case 12:
          {
            var _0x143320 = _0x167ead.get();
            var _0x4d748a = 0;
            _0x4c83dc[_0x143320 + _0x4d748a >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0x249f9c(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x56ad84) {
      if (typeof _0x453483 === "undefined" || !(_0x56ad84 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x56ad84);
      }
      return -_0x56ad84.errno;
    }
  }
  function _0x1510d7(_0x4829cf, _0x5304c0) {
    try {
      var _0x5d0800 = _0x167ead.getStreamFromFD(_0x4829cf);
      return _0x167ead.doStat(_0x453483.stat, _0x5d0800.path, _0x5304c0);
    } catch (_0xf5a31d) {
      if (typeof _0x453483 === "undefined" || !(_0xf5a31d instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0xf5a31d);
      }
      return -_0xf5a31d.errno;
    }
  }
  function _0x30f6af(_0x2bbecd, _0x2ad892) {
    try {
      if (_0x2ad892 === 0) {
        return -28;
      }
      var _0x27768f = _0x453483.cwd();
      var _0x5caabf = _0x219de1(_0x27768f);
      if (_0x2ad892 < _0x5caabf + 1) {
        return -68;
      }
      _0x4cad61(_0x27768f, _0x2bbecd, _0x2ad892);
      return _0x2bbecd;
    } catch (_0x35a71a) {
      if (typeof _0x453483 === "undefined" || !(_0x35a71a instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x35a71a);
      }
      return -_0x35a71a.errno;
    }
  }
  function _0x2cf206(_0x3f9a08, _0x39660a, _0x7f7847) {
    try {
      var _0x3024a8 = _0x167ead.getStreamFromFD(_0x3f9a08);
      if (!_0x3024a8.getdents) {
        _0x3024a8.getdents = _0x453483.readdir(_0x3024a8.path);
      }
      var _0x24c81 = 280;
      var _0x37ab2d = 0;
      var _0x126526 = _0x453483.llseek(_0x3024a8, 0, 1);
      var _0x4cfe9a = Math.floor(_0x126526 / _0x24c81);
      while (_0x4cfe9a < _0x3024a8.getdents.length && _0x37ab2d + _0x24c81 <= _0x7f7847) {
        var _0xabec1f;
        var _0x47d8fa;
        var _0x4e6d71 = _0x3024a8.getdents[_0x4cfe9a];
        if (_0x4e6d71[0] === ".") {
          _0xabec1f = 1;
          _0x47d8fa = 4;
        } else {
          var _0x5cab33 = _0x453483.lookupNode(_0x3024a8.node, _0x4e6d71);
          _0xabec1f = _0x5cab33.id;
          _0x47d8fa = _0x453483.isChrdev(_0x5cab33.mode) ? 2 : _0x453483.isDir(_0x5cab33.mode) ? 4 : _0x453483.isLink(_0x5cab33.mode) ? 10 : 8;
        }
        _0x2bb7d8 = [_0xabec1f >>> 0, (_0x29224d = _0xabec1f, +Math.abs(_0x29224d) >= 1 ? _0x29224d > 0 ? (Math.min(+Math.floor(_0x29224d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x29224d - +(~~_0x29224d >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x5ce4f8[_0x39660a + _0x37ab2d >> 2] = _0x2bb7d8[0];
        _0x5ce4f8[_0x39660a + _0x37ab2d + 4 >> 2] = _0x2bb7d8[1];
        _0x2bb7d8 = [(_0x4cfe9a + 1) * _0x24c81 >>> 0, (_0x29224d = (_0x4cfe9a + 1) * _0x24c81, +Math.abs(_0x29224d) >= 1 ? _0x29224d > 0 ? (Math.min(+Math.floor(_0x29224d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x29224d - +(~~_0x29224d >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x5ce4f8[_0x39660a + _0x37ab2d + 8 >> 2] = _0x2bb7d8[0];
        _0x5ce4f8[_0x39660a + _0x37ab2d + 12 >> 2] = _0x2bb7d8[1];
        _0x4c83dc[_0x39660a + _0x37ab2d + 16 >> 1] = 280;
        _0x28416d[_0x39660a + _0x37ab2d + 18 >> 0] = _0x47d8fa;
        _0x4cad61(_0x4e6d71, _0x39660a + _0x37ab2d + 19, 256);
        _0x37ab2d += _0x24c81;
        _0x4cfe9a += 1;
      }
      _0x453483.llseek(_0x3024a8, _0x4cfe9a * _0x24c81, 0);
      return _0x37ab2d;
    } catch (_0x371c9c) {
      if (typeof _0x453483 === "undefined" || !(_0x371c9c instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x371c9c);
      }
      return -_0x371c9c.errno;
    }
  }
  function _0x5723c8() {
    return 0;
  }
  function _0x245a43() {
    return _0x5723c8();
  }
  function _0x5ec349(_0x56d892, _0x4c4689, _0x403ed9) {
    try {
      var _0x2a252d = _0x57fdf4(_0x56d892);
      if (!_0x2a252d.daddr) {
        return -53;
      }
      var _0x55dd93 = _0x29a5b5(_0x4c4689, _0x2a252d.family, _0x548ba6.lookup_name(_0x2a252d.daddr), _0x2a252d.dport, _0x403ed9);
      return 0;
    } catch (_0x3bb0c4) {
      if (typeof _0x453483 === "undefined" || !(_0x3bb0c4 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x3bb0c4);
      }
      return -_0x3bb0c4.errno;
    }
  }
  function _0x12dabb() {
    return 42;
  }
  function _0x567c53(_0x249cc2, _0x567452) {
    try {
      _0x228de9(_0x567452, 0, 136);
      _0x5ce4f8[_0x567452 >> 2] = 1;
      _0x5ce4f8[_0x567452 + 4 >> 2] = 2;
      _0x5ce4f8[_0x567452 + 8 >> 2] = 3;
      _0x5ce4f8[_0x567452 + 12 >> 2] = 4;
      return 0;
    } catch (_0x1bbe7f) {
      if (typeof _0x453483 === "undefined" || !(_0x1bbe7f instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x1bbe7f);
      }
      return -_0x1bbe7f.errno;
    }
  }
  function _0x53c2bf(_0x192cad, _0x11d1d2, _0x30ad69) {
    try {
      _0x33bd81("__sys_getsockname " + _0x192cad);
      var _0x24443b = _0x57fdf4(_0x192cad);
      var _0x41b01f = _0x29a5b5(_0x11d1d2, _0x24443b.family, _0x548ba6.lookup_name(_0x24443b.saddr || "0.0.0.0"), _0x24443b.sport, _0x30ad69);
      return 0;
    } catch (_0x3b75e0) {
      if (typeof _0x453483 === "undefined" || !(_0x3b75e0 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x3b75e0);
      }
      return -_0x3b75e0.errno;
    }
  }
  function _0x523ac4(_0x288873, _0x2003a4, _0x186d68, _0x150c51, _0x1cfb90) {
    try {
      var _0x9ede70 = _0x57fdf4(_0x288873);
      if (_0x2003a4 === 1) {
        if (_0x186d68 === 4) {
          _0x5ce4f8[_0x150c51 >> 2] = _0x9ede70.error;
          _0x5ce4f8[_0x1cfb90 >> 2] = 4;
          _0x9ede70.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0x11fc20) {
      if (typeof _0x453483 === "undefined" || !(_0x11fc20 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x11fc20);
      }
      return -_0x11fc20.errno;
    }
  }
  function _0xd7ee0b() {
    return _0x5723c8();
  }
  function _0x33c23d(_0x520a58, _0x25c4c0, _0x5cd55c) {
    _0x167ead.varargs = _0x5cd55c;
    try {
      var _0x467ffe = _0x167ead.getStreamFromFD(_0x520a58);
      switch (_0x25c4c0) {
        case 21509:
        case 21505:
          {
            if (!_0x467ffe.tty) {
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
            if (!_0x467ffe.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x467ffe.tty) {
              return -59;
            }
            var _0x5e28da = _0x167ead.get();
            _0x5ce4f8[_0x5e28da >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x467ffe.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0x5e28da = _0x167ead.get();
            return _0x453483.ioctl(_0x467ffe, _0x25c4c0, _0x5e28da);
          }
        case 21523:
          {
            if (!_0x467ffe.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x467ffe.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0x57adfd("bad ioctl syscall " + _0x25c4c0);
      }
    } catch (_0x52e39c) {
      if (typeof _0x453483 === "undefined" || !(_0x52e39c instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x52e39c);
      }
      return -_0x52e39c.errno;
    }
  }
  function _0x34f2d5(_0x1c8c52, _0x2b4dc9) {
    try {
      var _0x351102 = _0x57fdf4(_0x1c8c52);
      _0x351102.sock_ops.listen(_0x351102, _0x2b4dc9);
      return 0;
    } catch (_0x775f59) {
      if (typeof _0x453483 === "undefined" || !(_0x775f59 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x775f59);
      }
      return -_0x775f59.errno;
    }
  }
  function _0x3a5ca8(_0x507522, _0x52083f) {
    try {
      _0x507522 = _0x167ead.getStr(_0x507522);
      return _0x167ead.doStat(_0x453483.lstat, _0x507522, _0x52083f);
    } catch (_0x4ecf55) {
      if (typeof _0x453483 === "undefined" || !(_0x4ecf55 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x4ecf55);
      }
      return -_0x4ecf55.errno;
    }
  }
  function _0x235702(_0x21a5ec, _0x53b686) {
    try {
      _0x21a5ec = _0x167ead.getStr(_0x21a5ec);
      return _0x167ead.doMkdir(_0x21a5ec, _0x53b686);
    } catch (_0x5a853f) {
      if (typeof _0x453483 === "undefined" || !(_0x5a853f instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x5a853f);
      }
      return -_0x5a853f.errno;
    }
  }
  function _0x31b9b3(_0x52f4fb, _0x1b06b4, _0x3fa000, _0x2f70a2, _0x4b9c7c, _0x3dcaf0) {
    _0x3dcaf0 <<= 12;
    var _0x472518;
    var _0x3e558f = false;
    if ((_0x2f70a2 & 16) !== 0 && _0x52f4fb % 65536 !== 0) {
      return -28;
    }
    if ((_0x2f70a2 & 32) !== 0) {
      _0x472518 = _0x4c3846(65536, _0x1b06b4);
      if (!_0x472518) {
        return -48;
      }
      _0x228de9(_0x472518, 0, _0x1b06b4);
      _0x3e558f = true;
    } else {
      var _0x259f6e = _0x453483.getStream(_0x4b9c7c);
      if (!_0x259f6e) {
        return -8;
      }
      var _0x57ad1e = _0x453483.mmap(_0x259f6e, _0x52f4fb, _0x1b06b4, _0x3dcaf0, _0x3fa000, _0x2f70a2);
      _0x472518 = _0x57ad1e.ptr;
      _0x3e558f = _0x57ad1e.allocated;
    }
    _0x167ead.mappings[_0x472518] = {
      malloc: _0x472518,
      len: _0x1b06b4,
      allocated: _0x3e558f,
      fd: _0x4b9c7c,
      prot: _0x3fa000,
      flags: _0x2f70a2,
      offset: _0x3dcaf0
    };
    return _0x472518;
  }
  function _0x2289ff(_0x41313c, _0xe51b4f, _0x50b8d7, _0x2f62c1, _0x203224, _0x19b01b) {
    try {
      return _0x31b9b3(_0x41313c, _0xe51b4f, _0x50b8d7, _0x2f62c1, _0x203224, _0x19b01b);
    } catch (_0x2f645e) {
      if (typeof _0x453483 === "undefined" || !(_0x2f645e instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x2f645e);
      }
      return -_0x2f645e.errno;
    }
  }
  function _0x3c938b(_0x46a608, _0x507f5e) {
    if ((_0x46a608 | 0) === -1 || _0x507f5e === 0) {
      return -28;
    }
    var _0x4a9161 = _0x167ead.mappings[_0x46a608];
    if (!_0x4a9161) {
      return 0;
    }
    if (_0x507f5e === _0x4a9161.len) {
      var _0xae876c = _0x453483.getStream(_0x4a9161.fd);
      if (_0xae876c) {
        if (_0x4a9161.prot & 2) {
          _0x167ead.doMsync(_0x46a608, _0xae876c, _0x507f5e, _0x4a9161.flags, _0x4a9161.offset);
        }
        _0x453483.munmap(_0xae876c);
      }
      _0x167ead.mappings[_0x46a608] = null;
      if (_0x4a9161.allocated) {
        _0xf67877(_0x4a9161.malloc);
      }
    }
    return 0;
  }
  function _0x197822(_0x424ce1, _0x3a6337) {
    try {
      return _0x3c938b(_0x424ce1, _0x3a6337);
    } catch (_0x5980be) {
      if (typeof _0x453483 === "undefined" || !(_0x5980be instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x5980be);
      }
      return -_0x5980be.errno;
    }
  }
  function _0x3df0fd(_0x340159, _0x573b9e, _0x20bcef) {
    _0x167ead.varargs = _0x20bcef;
    try {
      var _0x4f9017 = _0x167ead.getStr(_0x340159);
      var _0x49bc7f = _0x20bcef ? _0x167ead.get() : 0;
      var _0x242b46 = _0x453483.open(_0x4f9017, _0x573b9e, _0x49bc7f);
      return _0x242b46.fd;
    } catch (_0x54aa54) {
      if (typeof _0x453483 === "undefined" || !(_0x54aa54 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x54aa54);
      }
      return -_0x54aa54.errno;
    }
  }
  var _0x519002 = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0x31207b) {
      return _0x453483.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0x445566 = {
        buckets: []
      };
      _0x445566.buckets.push({
        buffer: new Uint8Array(_0x519002.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0x25381c = _0x519002.nextname();
      var _0x3fd4bc = _0x519002.nextname();
      var _0x20ec05 = _0x453483.createNode(_0x519002.root, _0x25381c, 4096, 0);
      var _0x524ad3 = _0x453483.createNode(_0x519002.root, _0x3fd4bc, 4096, 0);
      _0x20ec05.pipe = _0x445566;
      _0x524ad3.pipe = _0x445566;
      var _0x3ad003 = _0x453483.createStream({
        path: _0x25381c,
        node: _0x20ec05,
        flags: 0,
        seekable: false,
        stream_ops: _0x519002.stream_ops
      });
      _0x20ec05.stream = _0x3ad003;
      var _0x2a8326 = _0x453483.createStream({
        path: _0x3fd4bc,
        node: _0x524ad3,
        flags: 1,
        seekable: false,
        stream_ops: _0x519002.stream_ops
      });
      _0x524ad3.stream = _0x2a8326;
      return {
        readable_fd: _0x3ad003.fd,
        writable_fd: _0x2a8326.fd
      };
    },
    stream_ops: {
      poll: function (_0x15d648) {
        var _0x1f121d = _0x15d648.node.pipe;
        if ((_0x15d648.flags & 2097155) === 1) {
          return 260;
        } else if (_0x1f121d.buckets.length > 0) {
          for (var _0x123ff3 = 0; _0x123ff3 < _0x1f121d.buckets.length; _0x123ff3++) {
            var _0x3deafe = _0x1f121d.buckets[_0x123ff3];
            if (_0x3deafe.offset - _0x3deafe.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0x10c0ab, _0x27ad32, _0x3fee90) {
        return _0xf8f32b.EINVAL;
      },
      fsync: function (_0x279ce7) {
        return _0xf8f32b.EINVAL;
      },
      read: function (_0x2596ad, _0x124ded, _0x33cc64, _0x2450d6, _0x1cd6f6) {
        var _0x7beed4 = _0x2596ad.node.pipe;
        var _0x2c39a8 = 0;
        for (var _0x385b61 = 0; _0x385b61 < _0x7beed4.buckets.length; _0x385b61++) {
          var _0x581b61 = _0x7beed4.buckets[_0x385b61];
          _0x2c39a8 += _0x581b61.offset - _0x581b61.roffset;
        }
        _0x1f7fa5(_0x124ded instanceof ArrayBuffer || ArrayBuffer.isView(_0x124ded));
        var _0x53e259 = _0x124ded.subarray(_0x33cc64, _0x33cc64 + _0x2450d6);
        if (_0x2450d6 <= 0) {
          return 0;
        }
        if (_0x2c39a8 == 0) {
          throw new _0x453483.ErrnoError(_0xf8f32b.EAGAIN);
        }
        var _0x4ca394 = Math.min(_0x2c39a8, _0x2450d6);
        var _0x3c9c79 = _0x4ca394;
        var _0x52317e = 0;
        for (var _0x385b61 = 0; _0x385b61 < _0x7beed4.buckets.length; _0x385b61++) {
          var _0x56017e = _0x7beed4.buckets[_0x385b61];
          var _0x365296 = _0x56017e.offset - _0x56017e.roffset;
          if (_0x4ca394 <= _0x365296) {
            var _0x10b252 = _0x56017e.buffer.subarray(_0x56017e.roffset, _0x56017e.offset);
            if (_0x4ca394 < _0x365296) {
              _0x10b252 = _0x10b252.subarray(0, _0x4ca394);
              _0x56017e.roffset += _0x4ca394;
            } else {
              _0x52317e++;
            }
            _0x53e259.set(_0x10b252);
            break;
          } else {
            var _0x10b252 = _0x56017e.buffer.subarray(_0x56017e.roffset, _0x56017e.offset);
            _0x53e259.set(_0x10b252);
            _0x53e259 = _0x53e259.subarray(_0x10b252.byteLength);
            _0x4ca394 -= _0x10b252.byteLength;
            _0x52317e++;
          }
        }
        if (_0x52317e && _0x52317e == _0x7beed4.buckets.length) {
          _0x52317e--;
          _0x7beed4.buckets[_0x52317e].offset = 0;
          _0x7beed4.buckets[_0x52317e].roffset = 0;
        }
        _0x7beed4.buckets.splice(0, _0x52317e);
        return _0x3c9c79;
      },
      write: function (_0x34aa31, _0x39656e, _0x44b50d, _0x20662a, _0x58eedf) {
        var _0x518336 = _0x34aa31.node.pipe;
        _0x1f7fa5(_0x39656e instanceof ArrayBuffer || ArrayBuffer.isView(_0x39656e));
        var _0x29a185 = _0x39656e.subarray(_0x44b50d, _0x44b50d + _0x20662a);
        var _0x1cc6ba = _0x29a185.byteLength;
        if (_0x1cc6ba <= 0) {
          return 0;
        }
        var _0x581c4c = null;
        if (_0x518336.buckets.length == 0) {
          _0x581c4c = {
            buffer: new Uint8Array(_0x519002.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0x518336.buckets.push(_0x581c4c);
        } else {
          _0x581c4c = _0x518336.buckets[_0x518336.buckets.length - 1];
        }
        _0x1f7fa5(_0x581c4c.offset <= _0x519002.BUCKET_BUFFER_SIZE);
        var _0x165399 = _0x519002.BUCKET_BUFFER_SIZE - _0x581c4c.offset;
        if (_0x165399 >= _0x1cc6ba) {
          _0x581c4c.buffer.set(_0x29a185, _0x581c4c.offset);
          _0x581c4c.offset += _0x1cc6ba;
          return _0x1cc6ba;
        } else if (_0x165399 > 0) {
          _0x581c4c.buffer.set(_0x29a185.subarray(0, _0x165399), _0x581c4c.offset);
          _0x581c4c.offset += _0x165399;
          _0x29a185 = _0x29a185.subarray(_0x165399, _0x29a185.byteLength);
        }
        var _0x451dbf = _0x29a185.byteLength / _0x519002.BUCKET_BUFFER_SIZE | 0;
        var _0x2e5879 = _0x29a185.byteLength % _0x519002.BUCKET_BUFFER_SIZE;
        for (var _0x2350fa = 0; _0x2350fa < _0x451dbf; _0x2350fa++) {
          var _0x35bdb1 = {
            buffer: new Uint8Array(_0x519002.BUCKET_BUFFER_SIZE),
            offset: _0x519002.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0x518336.buckets.push(_0x35bdb1);
          _0x35bdb1.buffer.set(_0x29a185.subarray(0, _0x519002.BUCKET_BUFFER_SIZE));
          _0x29a185 = _0x29a185.subarray(_0x519002.BUCKET_BUFFER_SIZE, _0x29a185.byteLength);
        }
        if (_0x2e5879 > 0) {
          var _0x35bdb1 = {
            buffer: new Uint8Array(_0x519002.BUCKET_BUFFER_SIZE),
            offset: _0x29a185.byteLength,
            roffset: 0
          };
          _0x518336.buckets.push(_0x35bdb1);
          _0x35bdb1.buffer.set(_0x29a185);
        }
        return _0x1cc6ba;
      },
      close: function (_0x11f114) {
        var _0x1ffe65 = _0x11f114.node.pipe;
        _0x1ffe65.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x519002.nextname.current) {
        _0x519002.nextname.current = 0;
      }
      return "pipe[" + _0x519002.nextname.current++ + "]";
    }
  };
  function _0x6ea154(_0x1eda45) {
    try {
      if (_0x1eda45 == 0) {
        throw new _0x453483.ErrnoError(21);
      }
      var _0x401eb1 = _0x519002.createPipe();
      _0x5ce4f8[_0x1eda45 >> 2] = _0x401eb1.readable_fd;
      _0x5ce4f8[_0x1eda45 + 4 >> 2] = _0x401eb1.writable_fd;
      return 0;
    } catch (_0x262526) {
      if (typeof _0x453483 === "undefined" || !(_0x262526 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x262526);
      }
      return -_0x262526.errno;
    }
  }
  function _0x498dc5(_0x2072e3, _0x23ff99, _0x4cf99e) {
    try {
      var _0x4c12a0 = 0;
      for (var _0x1706ea = 0; _0x1706ea < _0x23ff99; _0x1706ea++) {
        var _0x2026cd = _0x2072e3 + _0x1706ea * 8;
        var _0x3c1c7a = _0x5ce4f8[_0x2026cd >> 2];
        var _0x36c87c = _0x4c83dc[_0x2026cd + 4 >> 1];
        var _0x4935e5 = 32;
        var _0x3adfaf = _0x453483.getStream(_0x3c1c7a);
        if (_0x3adfaf) {
          _0x4935e5 = _0x167ead.DEFAULT_POLLMASK;
          if (_0x3adfaf.stream_ops.poll) {
            _0x4935e5 = _0x3adfaf.stream_ops.poll(_0x3adfaf);
          }
        }
        _0x4935e5 &= _0x36c87c | 8 | 16;
        if (_0x4935e5) {
          _0x4c12a0++;
        }
        _0x4c83dc[_0x2026cd + 6 >> 1] = _0x4935e5;
      }
      return _0x4c12a0;
    } catch (_0x51d0bd) {
      if (typeof _0x453483 === "undefined" || !(_0x51d0bd instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x51d0bd);
      }
      return -_0x51d0bd.errno;
    }
  }
  function _0x46fa4e(_0x2d4a73, _0x57b9fb, _0x171781) {
    try {
      _0x2d4a73 = _0x167ead.getStr(_0x2d4a73);
      return _0x167ead.doReadlink(_0x2d4a73, _0x57b9fb, _0x171781);
    } catch (_0x237d75) {
      if (typeof _0x453483 === "undefined" || !(_0x237d75 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x237d75);
      }
      return -_0x237d75.errno;
    }
  }
  function _0x59c955(_0x2deca8, _0x2e5e56, _0x34c34c, _0x17df4a, _0x274a75, _0x4228e7) {
    try {
      var _0x1fc206 = _0x57fdf4(_0x2deca8);
      var _0x132e11 = _0x1fc206.sock_ops.recvmsg(_0x1fc206, _0x34c34c);
      if (!_0x132e11) {
        return 0;
      }
      if (_0x274a75) {
        var _0x2d8265 = _0x29a5b5(_0x274a75, _0x1fc206.family, _0x548ba6.lookup_name(_0x132e11.addr), _0x132e11.port, _0x4228e7);
      }
      _0x12f402.set(_0x132e11.buffer, _0x2e5e56);
      return _0x132e11.buffer.byteLength;
    } catch (_0x9bb83e) {
      if (typeof _0x453483 === "undefined" || !(_0x9bb83e instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x9bb83e);
      }
      return -_0x9bb83e.errno;
    }
  }
  function _0x49ac34(_0x4061eb, _0x2f7864, _0x37430c) {
    try {
      var _0x22c813 = _0x57fdf4(_0x4061eb);
      var _0x52100d = _0x5ce4f8[_0x2f7864 + 8 >> 2];
      var _0x5c3a6f = _0x5ce4f8[_0x2f7864 + 12 >> 2];
      var _0x199849 = 0;
      for (var _0x516433 = 0; _0x516433 < _0x5c3a6f; _0x516433++) {
        _0x199849 += _0x5ce4f8[_0x52100d + (_0x516433 * 8 + 4) >> 2];
      }
      var _0xd1514 = _0x22c813.sock_ops.recvmsg(_0x22c813, _0x199849);
      if (!_0xd1514) {
        return 0;
      }
      var _0x674b23 = _0x5ce4f8[_0x2f7864 >> 2];
      if (_0x674b23) {
        var _0x5198f5 = _0x29a5b5(_0x674b23, _0x22c813.family, _0x548ba6.lookup_name(_0xd1514.addr), _0xd1514.port);
      }
      var _0x882430 = 0;
      var _0x4c032b = _0xd1514.buffer.byteLength;
      for (var _0x516433 = 0; _0x4c032b > 0 && _0x516433 < _0x5c3a6f; _0x516433++) {
        var _0xad08ae = _0x5ce4f8[_0x52100d + (_0x516433 * 8 + 0) >> 2];
        var _0x24c7fb = _0x5ce4f8[_0x52100d + (_0x516433 * 8 + 4) >> 2];
        if (!_0x24c7fb) {
          continue;
        }
        var _0x178b5e = Math.min(_0x24c7fb, _0x4c032b);
        var _0x41cebd = _0xd1514.buffer.subarray(_0x882430, _0x882430 + _0x178b5e);
        _0x12f402.set(_0x41cebd, _0xad08ae + _0x882430);
        _0x882430 += _0x178b5e;
        _0x4c032b -= _0x178b5e;
      }
      return _0x882430;
    } catch (_0x43d899) {
      if (typeof _0x453483 === "undefined" || !(_0x43d899 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x43d899);
      }
      return -_0x43d899.errno;
    }
  }
  function _0x1f83af(_0x548a4b, _0x5c99de) {
    try {
      _0x548a4b = _0x167ead.getStr(_0x548a4b);
      _0x5c99de = _0x167ead.getStr(_0x5c99de);
      _0x453483.rename(_0x548a4b, _0x5c99de);
      return 0;
    } catch (_0x49aeda) {
      if (typeof _0x453483 === "undefined" || !(_0x49aeda instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x49aeda);
      }
      return -_0x49aeda.errno;
    }
  }
  function _0x2c435b(_0x3ee07a) {
    try {
      _0x3ee07a = _0x167ead.getStr(_0x3ee07a);
      _0x453483.rmdir(_0x3ee07a);
      return 0;
    } catch (_0x5102f7) {
      if (typeof _0x453483 === "undefined" || !(_0x5102f7 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x5102f7);
      }
      return -_0x5102f7.errno;
    }
  }
  function _0x4ed47d(_0x424d39, _0x3fd053, _0x56623a) {
    try {
      var _0x4a8a3f = _0x57fdf4(_0x424d39);
      var _0x231d15 = _0x5ce4f8[_0x3fd053 + 8 >> 2];
      var _0x2534ab = _0x5ce4f8[_0x3fd053 + 12 >> 2];
      var _0x58cdb8;
      var _0x30be6a;
      var _0x252862 = _0x5ce4f8[_0x3fd053 >> 2];
      var _0x143c11 = _0x5ce4f8[_0x3fd053 + 4 >> 2];
      if (_0x252862) {
        var _0x4eed66 = _0x4beb82(_0x252862, _0x143c11);
        if (_0x4eed66.errno) {
          return -_0x4eed66.errno;
        }
        _0x30be6a = _0x4eed66.port;
        _0x58cdb8 = _0x548ba6.lookup_addr(_0x4eed66.addr) || _0x4eed66.addr;
      }
      var _0x53da83 = 0;
      for (var _0x4eab88 = 0; _0x4eab88 < _0x2534ab; _0x4eab88++) {
        _0x53da83 += _0x5ce4f8[_0x231d15 + (_0x4eab88 * 8 + 4) >> 2];
      }
      var _0x9675d = new Uint8Array(_0x53da83);
      var _0x22e12f = 0;
      for (var _0x4eab88 = 0; _0x4eab88 < _0x2534ab; _0x4eab88++) {
        var _0x3f856a = _0x5ce4f8[_0x231d15 + (_0x4eab88 * 8 + 0) >> 2];
        var _0x298480 = _0x5ce4f8[_0x231d15 + (_0x4eab88 * 8 + 4) >> 2];
        for (var _0x4716d1 = 0; _0x4716d1 < _0x298480; _0x4716d1++) {
          _0x9675d[_0x22e12f++] = _0x28416d[_0x3f856a + _0x4716d1 >> 0];
        }
      }
      return _0x4a8a3f.sock_ops.sendmsg(_0x4a8a3f, _0x9675d, 0, _0x53da83, _0x58cdb8, _0x30be6a);
    } catch (_0x52f8b3) {
      if (typeof _0x453483 === "undefined" || !(_0x52f8b3 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x52f8b3);
      }
      return -_0x52f8b3.errno;
    }
  }
  function _0x5c1962(_0x1d26ca, _0x437e71, _0x31d083, _0x3c9f14, _0x141565, _0x7850e6) {
    try {
      var _0x580211 = _0x57fdf4(_0x1d26ca);
      var _0xdde924 = _0x35f8e6(_0x141565, _0x7850e6, true);
      if (!_0xdde924) {
        return _0x453483.write(_0x580211.stream, _0x28416d, _0x437e71, _0x31d083);
      } else {
        return _0x580211.sock_ops.sendmsg(_0x580211, _0x28416d, _0x437e71, _0x31d083, _0xdde924.addr, _0xdde924.port);
      }
    } catch (_0x54a4ca) {
      if (typeof _0x453483 === "undefined" || !(_0x54a4ca instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x54a4ca);
      }
      return -_0x54a4ca.errno;
    }
  }
  function _0x47415a(_0x2f442f) {
    try {
      return -50;
    } catch (_0x2f1e08) {
      if (typeof _0x453483 === "undefined" || !(_0x2f1e08 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x2f1e08);
      }
      return -_0x2f1e08.errno;
    }
  }
  function _0x400e60(_0x1a58e4, _0x3ca4ac) {
    try {
      _0x57fdf4(_0x1a58e4);
      return -52;
    } catch (_0x1aedd8) {
      if (typeof _0x453483 === "undefined" || !(_0x1aedd8 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x1aedd8);
      }
      return -_0x1aedd8.errno;
    }
  }
  function _0x4a3287(_0xe76949, _0x1ddbb1, _0x1bbc37) {
    try {
      var _0x2429fc = _0x5d1efe.createSocket(_0xe76949, _0x1ddbb1, _0x1bbc37);
      return _0x2429fc.stream.fd;
    } catch (_0x16e31f) {
      if (typeof _0x453483 === "undefined" || !(_0x16e31f instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x16e31f);
      }
      return -_0x16e31f.errno;
    }
  }
  function _0x3acf6d(_0xaef76e, _0x57c112) {
    try {
      _0xaef76e = _0x167ead.getStr(_0xaef76e);
      return _0x167ead.doStat(_0x453483.stat, _0xaef76e, _0x57c112);
    } catch (_0x46edc7) {
      if (typeof _0x453483 === "undefined" || !(_0x46edc7 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x46edc7);
      }
      return -_0x46edc7.errno;
    }
  }
  function _0x29ca06(_0xfda34e, _0x5d895a, _0x574017) {
    try {
      _0xfda34e = _0x167ead.getStr(_0xfda34e);
      _0x5ce4f8[_0x574017 + 4 >> 2] = 4096;
      _0x5ce4f8[_0x574017 + 40 >> 2] = 4096;
      _0x5ce4f8[_0x574017 + 8 >> 2] = 1000000;
      _0x5ce4f8[_0x574017 + 12 >> 2] = 500000;
      _0x5ce4f8[_0x574017 + 16 >> 2] = 500000;
      _0x5ce4f8[_0x574017 + 20 >> 2] = _0x453483.nextInode;
      _0x5ce4f8[_0x574017 + 24 >> 2] = 1000000;
      _0x5ce4f8[_0x574017 + 28 >> 2] = 42;
      _0x5ce4f8[_0x574017 + 44 >> 2] = 2;
      _0x5ce4f8[_0x574017 + 36 >> 2] = 255;
      return 0;
    } catch (_0x1f6711) {
      if (typeof _0x453483 === "undefined" || !(_0x1f6711 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x1f6711);
      }
      return -_0x1f6711.errno;
    }
  }
  function _0x199d76(_0x1d5333, _0xb35d4a, _0x11bcec, _0x216595) {
    try {
      _0x1d5333 = _0x167ead.getStr(_0x1d5333);
      var _0x448f6e = _0x167ead.get64(_0x11bcec, _0x216595);
      _0x453483.truncate(_0x1d5333, _0x448f6e);
      return 0;
    } catch (_0x15d662) {
      if (typeof _0x453483 === "undefined" || !(_0x15d662 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x15d662);
      }
      return -_0x15d662.errno;
    }
  }
  function _0x23f5c0(_0x4bceea) {
    try {
      if (!_0x4bceea) {
        return -21;
      }
      var _0x30dfd4 = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      function _0x4cb575(_0x1da224, _0x5c7491) {
        var _0x27412e = _0x30dfd4[_0x1da224];
        _0x4dcdc2(_0x5c7491, _0x4bceea + _0x27412e);
      }
      _0x4cb575("sysname", "Emscripten");
      _0x4cb575("nodename", "emscripten");
      _0x4cb575("release", "1.0");
      _0x4cb575("version", "#1");
      _0x4cb575("machine", "wasm32");
      return 0;
    } catch (_0x14c99c) {
      if (typeof _0x453483 === "undefined" || !(_0x14c99c instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x14c99c);
      }
      return -_0x14c99c.errno;
    }
  }
  function _0xd83669(_0x37e2f7) {
    try {
      _0x37e2f7 = _0x167ead.getStr(_0x37e2f7);
      _0x453483.unlink(_0x37e2f7);
      return 0;
    } catch (_0x2d3e2e) {
      if (typeof _0x453483 === "undefined" || !(_0x2d3e2e instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x2d3e2e);
      }
      return -_0x2d3e2e.errno;
    }
  }
  function _0x1ecaef() {
    _0x57adfd();
  }
  function _0x54560a() {
    if (_0x54560a.start === undefined) {
      _0x54560a.start = Date.now();
    }
    return (Date.now() - _0x54560a.start) * 1000 | 0;
  }
  function _0xb8918f() {
    if (_0x2ea75e) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0x594f05 = true;
  function _0x59d7c0(_0x3a07d8, _0x4a208b) {
    var _0x3f0fd;
    if (_0x3a07d8 === 0) {
      _0x3f0fd = 1000000;
    } else if (_0x3a07d8 === 1 && _0x594f05) {
      _0x3f0fd = _0xb8918f();
    } else {
      _0x249f9c(28);
      return -1;
    }
    _0x5ce4f8[_0x4a208b >> 2] = _0x3f0fd / 1000000000 | 0;
    _0x5ce4f8[_0x4a208b + 4 >> 2] = _0x3f0fd;
    return 0;
  }
  var _0x10009c;
  if (_0x2ea75e) {
    _0x10009c = function () {
      var _0x557e91 = process.hrtime();
      return _0x557e91[0] * 1000 + _0x557e91[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0x10009c = dateNow;
  } else {
    _0x10009c = function () {
      return performance.now();
    };
  }
  function _0x512492(_0x812baa, _0x50e142) {
    var _0x31b772;
    if (_0x812baa === 0) {
      _0x31b772 = Date.now();
    } else if ((_0x812baa === 1 || _0x812baa === 4) && _0x594f05) {
      _0x31b772 = _0x10009c();
    } else {
      _0x249f9c(28);
      return -1;
    }
    _0x5ce4f8[_0x50e142 >> 2] = _0x31b772 / 1000 | 0;
    _0x5ce4f8[_0x50e142 + 4 >> 2] = _0x31b772 % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x5ca2e5(_0x18d132, _0x263141) {
    return _0x18d132 - _0x263141;
  }
  function _0x780fd2(_0x520c3d) {}
  function _0x48d6ff() {
    return 0;
  }
  function _0x24fba8(_0x36a65d, _0x3c316e) {}
  function _0xc9abea(_0xdd3cb3, _0x485e94) {
    return 0;
  }
  var _0x575585 = [];
  function _0x301885(_0x438b1d, _0x410850) {
    _0x575585.length = 0;
    var _0x5bfcde;
    _0x410850 >>= 2;
    while (_0x5bfcde = _0x12f402[_0x438b1d++]) {
      var _0x238535 = _0x5bfcde < 105;
      if (_0x238535 && _0x410850 & 1) {
        _0x410850++;
      }
      _0x575585.push(_0x238535 ? _0xbff719[_0x410850++ >> 1] : _0x5ce4f8[_0x410850]);
      ++_0x410850;
    }
    return _0x575585;
  }
  function _0x105343(_0x2f814b, _0x26292f, _0x2cf858, _0x576c3d) {
    var _0x4b7692 = _0x301885(_0x26292f, _0x2cf858);
    return _0x18015c[_0x2f814b].apply(null, _0x4b7692);
  }
  function _0x5f4de9(_0x367ea6, _0x305d36, _0x47ef72) {
    return _0x105343(_0x367ea6, _0x305d36, _0x47ef72, 1);
  }
  function _0xa6f69a(_0x5055cb, _0x2aa882) {
    _0x4b29bf.mainLoop.timingMode = _0x5055cb;
    _0x4b29bf.mainLoop.timingValue = _0x2aa882;
    if (!_0x4b29bf.mainLoop.func) {
      return 1;
    }
    if (!_0x4b29bf.mainLoop.running) {
      _0x4b29bf.mainLoop.running = true;
    }
    if (_0x5055cb == 0) {
      _0x4b29bf.mainLoop.scheduler = function _0x5dda75() {
        var _0x22fe51 = Math.max(0, _0x4b29bf.mainLoop.tickStartTime + _0x2aa882 - _0x10009c()) | 0;
        setTimeout(_0x4b29bf.mainLoop.runner, _0x22fe51);
      };
      _0x4b29bf.mainLoop.method = "timeout";
    } else if (_0x5055cb == 1) {
      _0x4b29bf.mainLoop.scheduler = function _0xf9e597() {
        _0x4b29bf.requestAnimationFrame(_0x4b29bf.mainLoop.runner);
      };
      _0x4b29bf.mainLoop.method = "rAF";
    } else if (_0x5055cb == 2) {
      if (typeof setImmediate === "undefined") {
        var _0x5ada5c = [];
        var _0x36d3a2 = "setimmediate";
        function _0x3c4bf6(_0x2ba7ff) {
          if (_0x2ba7ff.data === _0x36d3a2 || _0x2ba7ff.data.target === _0x36d3a2) {
            _0x2ba7ff.stopPropagation();
            _0x5ada5c.shift()();
          }
        }
        addEventListener("message", _0x3c4bf6, true);
        setImmediate = function _0x1ebd51(_0x5e6ea7) {
          _0x5ada5c.push(_0x5e6ea7);
          if (_0x445082) {
            if (_0x5c0d54.setImmediates === undefined) {
              _0x5c0d54.setImmediates = [];
            }
            _0x5c0d54.setImmediates.push(_0x5e6ea7);
            postMessage({
              target: _0x36d3a2
            });
          } else {
            postMessage(_0x36d3a2, "*");
          }
        };
      }
      _0x4b29bf.mainLoop.scheduler = function _0x336395() {
        setImmediate(_0x4b29bf.mainLoop.runner);
      };
      _0x4b29bf.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0x179da4(_0x4ba45b) {
    _0x4f5bfa(_0x4ba45b);
  }
  function _0x5c2e95() {
    if (!_0x9b458f()) {
      try {
        _0x179da4(_0x10a662);
      } catch (_0x291a76) {
        if (_0x291a76 instanceof _0x5e5c06) {
          return;
        }
        throw _0x291a76;
      }
    }
  }
  function _0x3a9309(_0xc8f5cd, _0x3026ec, _0x58aa57, _0x275f97, _0x46a9bf) {
    _0x1f7fa5(!_0x4b29bf.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x4b29bf.mainLoop.func = _0xc8f5cd;
    _0x4b29bf.mainLoop.arg = _0x275f97;
    var _0x3c8fb1 = _0x4b29bf.mainLoop.currentlyRunningMainloop;
    function _0x11a37e() {
      if (_0x3c8fb1 < _0x4b29bf.mainLoop.currentlyRunningMainloop) {
        _0x5c2e95();
        return false;
      }
      return true;
    }
    _0x4b29bf.mainLoop.running = false;
    _0x4b29bf.mainLoop.runner = function _0x572557() {
      if (_0x5114fe) {
        return;
      }
      if (_0x4b29bf.mainLoop.queue.length > 0) {
        var _0x582e69 = Date.now();
        var _0x16ade0 = _0x4b29bf.mainLoop.queue.shift();
        _0x16ade0.func(_0x16ade0.arg);
        if (_0x4b29bf.mainLoop.remainingBlockers) {
          var _0x116878 = _0x4b29bf.mainLoop.remainingBlockers;
          var _0x249571 = _0x116878 % 1 == 0 ? _0x116878 - 1 : Math.floor(_0x116878);
          if (_0x16ade0.counted) {
            _0x4b29bf.mainLoop.remainingBlockers = _0x249571;
          } else {
            _0x249571 = _0x249571 + 0.5;
            _0x4b29bf.mainLoop.remainingBlockers = (_0x116878 * 8 + _0x249571) / 9;
          }
        }
        console.log("main loop blocker \"" + _0x16ade0.name + "\" took " + (Date.now() - _0x582e69) + " ms");
        _0x4b29bf.mainLoop.updateStatus();
        if (!_0x11a37e()) {
          return;
        }
        setTimeout(_0x4b29bf.mainLoop.runner, 0);
        return;
      }
      if (!_0x11a37e()) {
        return;
      }
      _0x4b29bf.mainLoop.currentFrameNumber = _0x4b29bf.mainLoop.currentFrameNumber + 1 | 0;
      if (_0x4b29bf.mainLoop.timingMode == 1 && _0x4b29bf.mainLoop.timingValue > 1 && _0x4b29bf.mainLoop.currentFrameNumber % _0x4b29bf.mainLoop.timingValue != 0) {
        _0x4b29bf.mainLoop.scheduler();
        return;
      } else if (_0x4b29bf.mainLoop.timingMode == 0) {
        _0x4b29bf.mainLoop.tickStartTime = _0x10009c();
      }
      _0x3ba29d.newRenderingFrameStarted();
      _0x4b29bf.mainLoop.runIter(_0xc8f5cd);
      if (!_0x11a37e()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x4b29bf.mainLoop.scheduler();
    };
    if (!_0x46a9bf) {
      if (_0x3026ec && _0x3026ec > 0) {
        _0xa6f69a(0, 1000 / _0x3026ec);
      } else {
        _0xa6f69a(1, 1);
      }
      _0x4b29bf.mainLoop.scheduler();
    }
    if (_0x58aa57) {
      throw "unwind";
    }
  }
  function _0x53f3c9(_0x2a54f3, _0x1f710f) {
    if (_0x5114fe) {
      return;
    }
    if (_0x1f710f) {
      _0x2a54f3();
      return;
    }
    try {
      _0x2a54f3();
    } catch (_0x3c0488) {
      if (_0x3c0488 instanceof _0x5e5c06) {
        return;
      } else if (_0x3c0488 !== "unwind") {
        if (_0x3c0488 && typeof _0x3c0488 === "object" && _0x3c0488.stack) {
          _0x33bd81("exception thrown: " + [_0x3c0488, _0x3c0488.stack]);
        }
        throw _0x3c0488;
      }
    }
  }
  var _0x4b29bf = {
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
        _0x4b29bf.mainLoop.scheduler = null;
        _0x4b29bf.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0x4b29bf.mainLoop.currentlyRunningMainloop++;
        var _0x4186bc = _0x4b29bf.mainLoop.timingMode;
        var _0x5f43d8 = _0x4b29bf.mainLoop.timingValue;
        var _0x260026 = _0x4b29bf.mainLoop.func;
        _0x4b29bf.mainLoop.func = null;
        _0x3a9309(_0x260026, 0, false, _0x4b29bf.mainLoop.arg, true);
        _0xa6f69a(_0x4186bc, _0x5f43d8);
        _0x4b29bf.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0x5c0d54.setStatus) {
          var _0x5d765a = _0x5c0d54.statusMessage || "Please wait...";
          var _0x122927 = _0x4b29bf.mainLoop.remainingBlockers;
          var _0x47e295 = _0x4b29bf.mainLoop.expectedBlockers;
          if (_0x122927) {
            if (_0x122927 < _0x47e295) {
              _0x5c0d54.setStatus(_0x5d765a + " (" + (_0x47e295 - _0x122927) + "/" + _0x47e295 + ")");
            } else {
              _0x5c0d54.setStatus(_0x5d765a);
            }
          } else {
            _0x5c0d54.setStatus("");
          }
        }
      },
      runIter: function (_0x3c1bf7) {
        if (_0x5114fe) {
          return;
        }
        if (_0x5c0d54.preMainLoop) {
          var _0x416c03 = _0x5c0d54.preMainLoop();
          if (_0x416c03 === false) {
            return;
          }
        }
        _0x53f3c9(_0x3c1bf7);
        if (_0x5c0d54.postMainLoop) {
          _0x5c0d54.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0x5c0d54.preloadPlugins) {
        _0x5c0d54.preloadPlugins = [];
      }
      if (_0x4b29bf.initted) {
        return;
      }
      _0x4b29bf.initted = true;
      try {
        new Blob();
        _0x4b29bf.hasBlobConstructor = true;
      } catch (_0x4a45cc) {
        _0x4b29bf.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x4b29bf.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x4b29bf.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x4b29bf.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0x5c0d54.noImageDecoding && typeof _0x4b29bf.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0x5c0d54.noImageDecoding = true;
      }
      var _0x32113f = {};
      _0x32113f.canHandle = function _0x204d65(_0x22cbfc) {
        return !_0x5c0d54.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x22cbfc);
      };
      _0x32113f.handle = function _0x33d1f8(_0x16d1c4, _0x8f96a0, _0x47875a, _0x4a0a3e) {
        var _0x2625b5 = null;
        if (_0x4b29bf.hasBlobConstructor) {
          try {
            _0x2625b5 = new Blob([_0x16d1c4], {
              type: _0x4b29bf.getMimetype(_0x8f96a0)
            });
            if (_0x2625b5.size !== _0x16d1c4.length) {
              _0x2625b5 = new Blob([new Uint8Array(_0x16d1c4).buffer], {
                type: _0x4b29bf.getMimetype(_0x8f96a0)
              });
            }
          } catch (_0x4710a3) {
            _0x596987("Blob constructor present but fails: " + _0x4710a3 + "; falling back to blob builder");
          }
        }
        if (!_0x2625b5) {
          var _0x12353e = new _0x4b29bf.BlobBuilder();
          _0x12353e.append(new Uint8Array(_0x16d1c4).buffer);
          _0x2625b5 = _0x12353e.getBlob();
        }
        var _0x5f05c1 = _0x4b29bf.URLObject.createObjectURL(_0x2625b5);
        var _0x20dd29 = new Image();
        _0x20dd29.onload = function _0x1d64ba() {
          _0x1f7fa5(_0x20dd29.complete, "Image " + _0x8f96a0 + " could not be decoded");
          var _0xe98a86 = document.createElement("canvas");
          _0xe98a86.width = _0x20dd29.width;
          _0xe98a86.height = _0x20dd29.height;
          var _0x1a28e0 = _0xe98a86.getContext("2d");
          _0x1a28e0.drawImage(_0x20dd29, 0, 0);
          _0x5c0d54.preloadedImages[_0x8f96a0] = _0xe98a86;
          _0x4b29bf.URLObject.revokeObjectURL(_0x5f05c1);
          if (_0x47875a) {
            _0x47875a(_0x16d1c4);
          }
        };
        _0x20dd29.onerror = function _0x4a1351(_0x37b2c9) {
          console.log("Image " + _0x5f05c1 + " could not be decoded");
          if (_0x4a0a3e) {
            _0x4a0a3e();
          }
        };
        _0x20dd29.src = _0x5f05c1;
      };
      _0x5c0d54.preloadPlugins.push(_0x32113f);
      var _0x35b6ce = {};
      _0x35b6ce.canHandle = function _0x239c1a(_0x30d79b) {
        return !_0x5c0d54.noAudioDecoding && _0x30d79b.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0x35b6ce.handle = function _0x38dd4c(_0x237eda, _0x180c21, _0x3ce8f8, _0x4213d9) {
        var _0x4f1e9b = false;
        function _0x60c02f(_0x4b7ada) {
          if (_0x4f1e9b) {
            return;
          }
          _0x4f1e9b = true;
          _0x5c0d54.preloadedAudios[_0x180c21] = _0x4b7ada;
          if (_0x3ce8f8) {
            _0x3ce8f8(_0x237eda);
          }
        }
        function _0x370104() {
          if (_0x4f1e9b) {
            return;
          }
          _0x4f1e9b = true;
          _0x5c0d54.preloadedAudios[_0x180c21] = new Audio();
          if (_0x4213d9) {
            _0x4213d9();
          }
        }
        if (_0x4b29bf.hasBlobConstructor) {
          try {
            var _0x5a1d0b = new Blob([_0x237eda], {
              type: _0x4b29bf.getMimetype(_0x180c21)
            });
          } catch (_0x4d9d6e) {
            return _0x370104();
          }
          var _0xc1af39 = _0x4b29bf.URLObject.createObjectURL(_0x5a1d0b);
          var _0x1aeafc = new Audio();
          _0x1aeafc.addEventListener("canplaythrough", function () {
            _0x60c02f(_0x1aeafc);
          }, false);
          _0x1aeafc.onerror = function _0x557973(_0xcc07ca) {
            if (_0x4f1e9b) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0x180c21 + ", trying slower base64 approach");
            function _0x5e329b(_0x45490f) {
              var _0x5bd58d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x18c7dc = "=";
              var _0x372760 = "";
              var _0x5cba83 = 0;
              var _0x593977 = 0;
              for (var _0x13e89 = 0; _0x13e89 < _0x45490f.length; _0x13e89++) {
                _0x5cba83 = _0x5cba83 << 8 | _0x45490f[_0x13e89];
                _0x593977 += 8;
                while (_0x593977 >= 6) {
                  var _0x2d0b6a = _0x5cba83 >> _0x593977 - 6 & 63;
                  _0x593977 -= 6;
                  _0x372760 += _0x5bd58d[_0x2d0b6a];
                }
              }
              if (_0x593977 == 2) {
                _0x372760 += _0x5bd58d[(_0x5cba83 & 3) << 4];
                _0x372760 += _0x18c7dc + _0x18c7dc;
              } else if (_0x593977 == 4) {
                _0x372760 += _0x5bd58d[(_0x5cba83 & 15) << 2];
                _0x372760 += _0x18c7dc;
              }
              return _0x372760;
            }
            _0x1aeafc.src = "data:audio/x-" + _0x180c21.substr(-3) + ";base64," + _0x5e329b(_0x237eda);
            _0x60c02f(_0x1aeafc);
          };
          _0x1aeafc.src = _0xc1af39;
          _0x4b29bf.safeSetTimeout(function () {
            _0x60c02f(_0x1aeafc);
          }, 10000);
        } else {
          return _0x370104();
        }
      };
      _0x5c0d54.preloadPlugins.push(_0x35b6ce);
      function _0x21a9a0() {
        _0x4b29bf.pointerLock = document.pointerLockElement === _0x5c0d54.canvas || document.mozPointerLockElement === _0x5c0d54.canvas || document.webkitPointerLockElement === _0x5c0d54.canvas || document.msPointerLockElement === _0x5c0d54.canvas;
      }
      var _0x232f56 = _0x5c0d54.canvas;
      if (_0x232f56) {
        _0x232f56.requestPointerLock = _0x232f56.requestPointerLock || _0x232f56.mozRequestPointerLock || _0x232f56.webkitRequestPointerLock || _0x232f56.msRequestPointerLock || function () {};
        _0x232f56.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x232f56.exitPointerLock = _0x232f56.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x21a9a0, false);
        document.addEventListener("mozpointerlockchange", _0x21a9a0, false);
        document.addEventListener("webkitpointerlockchange", _0x21a9a0, false);
        document.addEventListener("mspointerlockchange", _0x21a9a0, false);
        if (_0x5c0d54.elementPointerLock) {
          _0x232f56.addEventListener("click", function (_0x44b695) {
            if (!_0x4b29bf.pointerLock && _0x5c0d54.canvas.requestPointerLock) {
              _0x5c0d54.canvas.requestPointerLock();
              _0x44b695.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x5a0fac, _0x164aab, _0x38103e, _0xbcd2c3) {
      if (_0x164aab && _0x5c0d54.ctx && _0x5a0fac == _0x5c0d54.canvas) {
        return _0x5c0d54.ctx;
      }
      var _0x42c47b;
      var _0x4f2461;
      if (_0x164aab) {
        var _0x23fec7 = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0xbcd2c3) {
          for (var _0xde1976 in _0xbcd2c3) {
            _0x23fec7[_0xde1976] = _0xbcd2c3[_0xde1976];
          }
        }
        if (typeof _0x3ba29d !== "undefined") {
          _0x4f2461 = _0x3ba29d.createContext(_0x5a0fac, _0x23fec7);
          if (_0x4f2461) {
            _0x42c47b = _0x3ba29d.getContext(_0x4f2461).GLctx;
          }
        }
      } else {
        _0x42c47b = _0x5a0fac.getContext("2d");
      }
      if (!_0x42c47b) {
        return null;
      }
      if (_0x38103e) {
        if (!_0x164aab) {
          _0x1f7fa5(typeof _0x3afc48 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0x5c0d54.ctx = _0x42c47b;
        if (_0x164aab) {
          _0x3ba29d.makeContextCurrent(_0x4f2461);
        }
        _0x5c0d54.useWebGL = _0x164aab;
        _0x4b29bf.moduleContextCreatedCallbacks.forEach(function (_0x1c965a) {
          _0x1c965a();
        });
        _0x4b29bf.init();
      }
      return _0x42c47b;
    },
    destroyContext: function (_0x411df5, _0x4efbda, _0x30c70a) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0x536964, _0x5d285c) {
      _0x4b29bf.lockPointer = _0x536964;
      _0x4b29bf.resizeCanvas = _0x5d285c;
      if (typeof _0x4b29bf.lockPointer === "undefined") {
        _0x4b29bf.lockPointer = true;
      }
      if (typeof _0x4b29bf.resizeCanvas === "undefined") {
        _0x4b29bf.resizeCanvas = false;
      }
      var _0x2548a7 = _0x5c0d54.canvas;
      function _0x514033() {
        _0x4b29bf.isFullscreen = false;
        var _0x389841 = _0x2548a7.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x389841) {
          _0x2548a7.exitFullscreen = _0x4b29bf.exitFullscreen;
          if (_0x4b29bf.lockPointer) {
            _0x2548a7.requestPointerLock();
          }
          _0x4b29bf.isFullscreen = true;
          if (_0x4b29bf.resizeCanvas) {
            _0x4b29bf.setFullscreenCanvasSize();
          } else {
            _0x4b29bf.updateCanvasDimensions(_0x2548a7);
          }
        } else {
          _0x389841.parentNode.insertBefore(_0x2548a7, _0x389841);
          _0x389841.parentNode.removeChild(_0x389841);
          if (_0x4b29bf.resizeCanvas) {
            _0x4b29bf.setWindowedCanvasSize();
          } else {
            _0x4b29bf.updateCanvasDimensions(_0x2548a7);
          }
        }
        if (_0x5c0d54.onFullScreen) {
          _0x5c0d54.onFullScreen(_0x4b29bf.isFullscreen);
        }
        if (_0x5c0d54.onFullscreen) {
          _0x5c0d54.onFullscreen(_0x4b29bf.isFullscreen);
        }
      }
      if (!_0x4b29bf.fullscreenHandlersInstalled) {
        _0x4b29bf.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x514033, false);
        document.addEventListener("mozfullscreenchange", _0x514033, false);
        document.addEventListener("webkitfullscreenchange", _0x514033, false);
        document.addEventListener("MSFullscreenChange", _0x514033, false);
      }
      var _0x3fdade = document.createElement("div");
      _0x2548a7.parentNode.insertBefore(_0x3fdade, _0x2548a7);
      _0x3fdade.appendChild(_0x2548a7);
      _0x3fdade.requestFullscreen = _0x3fdade.requestFullscreen || _0x3fdade.mozRequestFullScreen || _0x3fdade.msRequestFullscreen || (_0x3fdade.webkitRequestFullscreen ? function () {
        _0x3fdade.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x3fdade.webkitRequestFullScreen ? function () {
        _0x3fdade.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x3fdade.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0x4b29bf.isFullscreen) {
        return false;
      }
      var _0x5a9082 = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0x5a9082.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0xc62e1a) {
      var _0xdecad5 = Date.now();
      if (_0x4b29bf.nextRAF === 0) {
        _0x4b29bf.nextRAF = _0xdecad5 + 1000 / 60;
      } else {
        while (_0xdecad5 + 2 >= _0x4b29bf.nextRAF) {
          _0x4b29bf.nextRAF += 1000 / 60;
        }
      }
      var _0x4923a9 = Math.max(_0x4b29bf.nextRAF - _0xdecad5, 0);
      setTimeout(_0xc62e1a, _0x4923a9);
    },
    requestAnimationFrame: function (_0x5d192b) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0x5d192b);
        return;
      }
      var _0x2a4a9a = _0x4b29bf.fakeRequestAnimationFrame;
      _0x2a4a9a(_0x5d192b);
    },
    safeRequestAnimationFrame: function (_0x41f88e) {
      return _0x4b29bf.requestAnimationFrame(function () {
        _0x53f3c9(_0x41f88e);
      });
    },
    safeSetTimeout: function (_0x17047b, _0x79cf59) {
      return setTimeout(function () {
        _0x53f3c9(_0x17047b);
      }, _0x79cf59);
    },
    getMimetype: function (_0x3f1889) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x3f1889.substr(_0x3f1889.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0x4fa7e8) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0x4fa7e8);
    },
    getMovementX: function (_0x3e7a85) {
      return _0x3e7a85.movementX || _0x3e7a85.mozMovementX || _0x3e7a85.webkitMovementX || 0;
    },
    getMovementY: function (_0x62146c) {
      return _0x62146c.movementY || _0x62146c.mozMovementY || _0x62146c.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0x18115c) {
      var _0x4c0976 = 0;
      switch (_0x18115c.type) {
        case "DOMMouseScroll":
          _0x4c0976 = _0x18115c.detail / 3;
          break;
        case "mousewheel":
          _0x4c0976 = _0x18115c.wheelDelta / 120;
          break;
        case "wheel":
          _0x4c0976 = _0x18115c.deltaY;
          switch (_0x18115c.deltaMode) {
            case 0:
              _0x4c0976 /= 100;
              break;
            case 1:
              _0x4c0976 /= 3;
              break;
            case 2:
              _0x4c0976 *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x18115c.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x18115c.type;
      }
      return _0x4c0976;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x5942fc) {
      if (_0x4b29bf.pointerLock) {
        if (_0x5942fc.type != "mousemove" && "mozMovementX" in _0x5942fc) {
          _0x4b29bf.mouseMovementX = _0x4b29bf.mouseMovementY = 0;
        } else {
          _0x4b29bf.mouseMovementX = _0x4b29bf.getMovementX(_0x5942fc);
          _0x4b29bf.mouseMovementY = _0x4b29bf.getMovementY(_0x5942fc);
        }
        if (typeof SDL != "undefined") {
          _0x4b29bf.mouseX = SDL.mouseX + _0x4b29bf.mouseMovementX;
          _0x4b29bf.mouseY = SDL.mouseY + _0x4b29bf.mouseMovementY;
        } else {
          _0x4b29bf.mouseX += _0x4b29bf.mouseMovementX;
          _0x4b29bf.mouseY += _0x4b29bf.mouseMovementY;
        }
      } else {
        var _0x597176 = _0x5c0d54.canvas.getBoundingClientRect();
        var _0x17e5ee = _0x5c0d54.canvas.width;
        var _0x258615 = _0x5c0d54.canvas.height;
        var _0xb6806e = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0x3499b3 = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x5942fc.type === "touchstart" || _0x5942fc.type === "touchend" || _0x5942fc.type === "touchmove") {
          var _0x3d33d8 = _0x5942fc.touch;
          if (_0x3d33d8 === undefined) {
            return;
          }
          var _0x1ef4af = _0x3d33d8.pageX - (_0xb6806e + _0x597176.left);
          var _0x387221 = _0x3d33d8.pageY - (_0x3499b3 + _0x597176.top);
          _0x1ef4af = _0x1ef4af * (_0x17e5ee / _0x597176.width);
          _0x387221 = _0x387221 * (_0x258615 / _0x597176.height);
          var _0x5cb1d4 = {
            x: _0x1ef4af,
            y: _0x387221
          };
          if (_0x5942fc.type === "touchstart") {
            _0x4b29bf.lastTouches[_0x3d33d8.identifier] = _0x5cb1d4;
            _0x4b29bf.touches[_0x3d33d8.identifier] = _0x5cb1d4;
          } else if (_0x5942fc.type === "touchend" || _0x5942fc.type === "touchmove") {
            var _0x45d75b = _0x4b29bf.touches[_0x3d33d8.identifier];
            if (!_0x45d75b) {
              _0x45d75b = _0x5cb1d4;
            }
            _0x4b29bf.lastTouches[_0x3d33d8.identifier] = _0x45d75b;
            _0x4b29bf.touches[_0x3d33d8.identifier] = _0x5cb1d4;
          }
          return;
        }
        var _0x39a31b = _0x5942fc.pageX - (_0xb6806e + _0x597176.left);
        var _0xb3a59 = _0x5942fc.pageY - (_0x3499b3 + _0x597176.top);
        _0x39a31b = _0x39a31b * (_0x17e5ee / _0x597176.width);
        _0xb3a59 = _0xb3a59 * (_0x258615 / _0x597176.height);
        _0x4b29bf.mouseMovementX = _0x39a31b - _0x4b29bf.mouseX;
        _0x4b29bf.mouseMovementY = _0xb3a59 - _0x4b29bf.mouseY;
        _0x4b29bf.mouseX = _0x39a31b;
        _0x4b29bf.mouseY = _0xb3a59;
      }
    },
    asyncLoad: function (_0x1d5a17, _0x378f01, _0x1f83bf, _0x5ab31b) {
      var _0x1687b4 = !_0x5ab31b ? _0x52f3f7("al " + _0x1d5a17) : "";
      _0x440841(_0x1d5a17, function (_0x5bb8ee) {
        _0x1f7fa5(_0x5bb8ee, "Loading data file \"" + _0x1d5a17 + "\" failed (no arrayBuffer).");
        _0x378f01(new Uint8Array(_0x5bb8ee));
        if (_0x1687b4) {
          _0x5ac12f(_0x1687b4);
        }
      }, function (_0xe4cc34) {
        if (_0x1f83bf) {
          _0x1f83bf();
        } else {
          throw "Loading data file \"" + _0x1d5a17 + "\" failed.";
        }
      });
      if (_0x1687b4) {
        _0x9df903(_0x1687b4);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0x44c336 = _0x5c0d54.canvas;
      _0x4b29bf.resizeListeners.forEach(function (_0x523842) {
        _0x523842(_0x44c336.width, _0x44c336.height);
      });
    },
    setCanvasSize: function (_0x549509, _0x4e058b, _0x94ecf5) {
      var _0x484354 = _0x5c0d54.canvas;
      _0x4b29bf.updateCanvasDimensions(_0x484354, _0x549509, _0x4e058b);
      if (!_0x94ecf5) {
        _0x4b29bf.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0xba9a8f = _0x1ee1a1[SDL.screen >> 2];
        _0xba9a8f = _0xba9a8f | 8388608;
        _0x5ce4f8[SDL.screen >> 2] = _0xba9a8f;
      }
      _0x4b29bf.updateCanvasDimensions(_0x5c0d54.canvas);
      _0x4b29bf.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x53faed = _0x1ee1a1[SDL.screen >> 2];
        _0x53faed = _0x53faed & ~8388608;
        _0x5ce4f8[SDL.screen >> 2] = _0x53faed;
      }
      _0x4b29bf.updateCanvasDimensions(_0x5c0d54.canvas);
      _0x4b29bf.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0xc20cd0, _0x22ac46, _0x163209) {
      if (_0x22ac46 && _0x163209) {
        _0xc20cd0.widthNative = _0x22ac46;
        _0xc20cd0.heightNative = _0x163209;
      } else {
        _0x22ac46 = _0xc20cd0.widthNative;
        _0x163209 = _0xc20cd0.heightNative;
      }
      var _0x2665f0 = _0x22ac46;
      var _0x519cb6 = _0x163209;
      if (_0x5c0d54.forcedAspectRatio && _0x5c0d54.forcedAspectRatio > 0) {
        if (_0x2665f0 / _0x519cb6 < _0x5c0d54.forcedAspectRatio) {
          _0x2665f0 = Math.round(_0x519cb6 * _0x5c0d54.forcedAspectRatio);
        } else {
          _0x519cb6 = Math.round(_0x2665f0 / _0x5c0d54.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0xc20cd0.parentNode && typeof screen != "undefined") {
        var _0x179f91 = Math.min(screen.width / _0x2665f0, screen.height / _0x519cb6);
        _0x2665f0 = Math.round(_0x2665f0 * _0x179f91);
        _0x519cb6 = Math.round(_0x519cb6 * _0x179f91);
      }
      if (_0x4b29bf.resizeCanvas) {
        if (_0xc20cd0.width != _0x2665f0) {
          _0xc20cd0.width = _0x2665f0;
        }
        if (_0xc20cd0.height != _0x519cb6) {
          _0xc20cd0.height = _0x519cb6;
        }
        if (typeof _0xc20cd0.style != "undefined") {
          _0xc20cd0.style.removeProperty("width");
          _0xc20cd0.style.removeProperty("height");
        }
      } else {
        if (_0xc20cd0.width != _0x22ac46) {
          _0xc20cd0.width = _0x22ac46;
        }
        if (_0xc20cd0.height != _0x163209) {
          _0xc20cd0.height = _0x163209;
        }
        if (typeof _0xc20cd0.style != "undefined") {
          if (_0x2665f0 != _0x22ac46 || _0x519cb6 != _0x163209) {
            _0xc20cd0.style.setProperty("width", _0x2665f0 + "px", "important");
            _0xc20cd0.style.setProperty("height", _0x519cb6 + "px", "important");
          } else {
            _0xc20cd0.style.removeProperty("width");
            _0xc20cd0.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0x5a92b1 = _0x4b29bf.nextWgetRequestHandle;
      _0x4b29bf.nextWgetRequestHandle++;
      return _0x5a92b1;
    }
  };
  function _0x4543ed() {
    _0x4b29bf.mainLoop.pause();
    _0x4b29bf.mainLoop.func = null;
  }
  function _0x2462b9(_0x17d1a3) {
    clearInterval(_0x17d1a3);
  }
  var _0x2e5ba2 = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0x1df648 = _0x2e5ba2.eventHandlers.length - 1; _0x1df648 >= 0; --_0x1df648) {
        _0x2e5ba2._removeHandler(_0x1df648);
      }
      _0x2e5ba2.eventHandlers = [];
      _0x2e5ba2.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x2e5ba2.removeEventListenersRegistered) {
        _0x2596a3.push(_0x2e5ba2.removeAllEventListeners);
        _0x2e5ba2.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x493299, _0x19ac43, _0x2ecbdd) {
      function _0x13bd69(_0x11883a, _0x154a12) {
        if (_0x11883a.length != _0x154a12.length) {
          return false;
        }
        for (var _0x559c7f in _0x11883a) {
          if (_0x11883a[_0x559c7f] != _0x154a12[_0x559c7f]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x338aa3 in _0x2e5ba2.deferredCalls) {
        var _0x4cf344 = _0x2e5ba2.deferredCalls[_0x338aa3];
        if (_0x4cf344.targetFunction == _0x493299 && _0x13bd69(_0x4cf344.argsList, _0x2ecbdd)) {
          return;
        }
      }
      _0x2e5ba2.deferredCalls.push({
        targetFunction: _0x493299,
        precedence: _0x19ac43,
        argsList: _0x2ecbdd
      });
      _0x2e5ba2.deferredCalls.sort(function (_0x15b1b5, _0x4ba6c6) {
        return _0x15b1b5.precedence < _0x4ba6c6.precedence;
      });
    },
    removeDeferredCalls: function (_0x1d8228) {
      for (var _0x9eb649 = 0; _0x9eb649 < _0x2e5ba2.deferredCalls.length; ++_0x9eb649) {
        if (_0x2e5ba2.deferredCalls[_0x9eb649].targetFunction == _0x1d8228) {
          _0x2e5ba2.deferredCalls.splice(_0x9eb649, 1);
          --_0x9eb649;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x2e5ba2.inEventHandler && _0x2e5ba2.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x2e5ba2.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0x1451d8 = 0; _0x1451d8 < _0x2e5ba2.deferredCalls.length; ++_0x1451d8) {
        var _0x1c97fc = _0x2e5ba2.deferredCalls[_0x1451d8];
        _0x2e5ba2.deferredCalls.splice(_0x1451d8, 1);
        --_0x1451d8;
        _0x1c97fc.targetFunction.apply(null, _0x1c97fc.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0x5735e6, _0x1b75d2) {
      for (var _0x5b8383 = 0; _0x5b8383 < _0x2e5ba2.eventHandlers.length; ++_0x5b8383) {
        if (_0x2e5ba2.eventHandlers[_0x5b8383].target == _0x5735e6 && (!_0x1b75d2 || _0x1b75d2 == _0x2e5ba2.eventHandlers[_0x5b8383].eventTypeString)) {
          _0x2e5ba2._removeHandler(_0x5b8383--);
        }
      }
    },
    _removeHandler: function (_0x228b23) {
      var _0x4b6e0d = _0x2e5ba2.eventHandlers[_0x228b23];
      _0x4b6e0d.target.removeEventListener(_0x4b6e0d.eventTypeString, _0x4b6e0d.eventListenerFunc, _0x4b6e0d.useCapture);
      _0x2e5ba2.eventHandlers.splice(_0x228b23, 1);
    },
    registerOrRemoveHandler: function (_0x12381a) {
      var _0x1595da = function _0x2a764b(_0x3bbb7e) {
        ++_0x2e5ba2.inEventHandler;
        _0x2e5ba2.currentEventHandler = _0x12381a;
        _0x2e5ba2.runDeferredCalls();
        _0x12381a.handlerFunc(_0x3bbb7e);
        _0x2e5ba2.runDeferredCalls();
        --_0x2e5ba2.inEventHandler;
      };
      if (_0x12381a.callbackfunc) {
        _0x12381a.eventListenerFunc = _0x1595da;
        _0x12381a.target.addEventListener(_0x12381a.eventTypeString, _0x1595da, _0x12381a.useCapture);
        _0x2e5ba2.eventHandlers.push(_0x12381a);
        _0x2e5ba2.registerRemoveEventListeners();
      } else {
        for (var _0x4e114b = 0; _0x4e114b < _0x2e5ba2.eventHandlers.length; ++_0x4e114b) {
          if (_0x2e5ba2.eventHandlers[_0x4e114b].target == _0x12381a.target && _0x2e5ba2.eventHandlers[_0x4e114b].eventTypeString == _0x12381a.eventTypeString) {
            _0x2e5ba2._removeHandler(_0x4e114b--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0x669038) {
      if (!_0x669038) {
        return "";
      }
      if (_0x669038 == window) {
        return "#window";
      }
      if (_0x669038 == screen) {
        return "#screen";
      }
      if (_0x669038 && _0x669038.nodeName) {
        return _0x669038.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x559989 = {};
  function _0x2a36e2(_0x5e8f90) {
    if (_0x5e8f90 > 2) {
      return _0x51c742(_0x5e8f90);
    } else {
      return _0x5e8f90;
    }
  }
  var _0x1e299e = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x85f95f(_0x59876d) {
    _0x59876d = _0x2a36e2(_0x59876d);
    var _0x5c87c7 = _0x1e299e[_0x59876d] || (typeof document !== "undefined" ? document.querySelector(_0x59876d) : undefined);
    return _0x5c87c7;
  }
  function _0x3bf707(_0x40ccd2) {
    return _0x85f95f(_0x40ccd2);
  }
  function _0x203a83(_0x455cb8, _0x555ea2, _0x1b378a) {
    var _0x5b721a = _0x3bf707(_0x455cb8);
    if (!_0x5b721a) {
      return -4;
    }
    _0x5ce4f8[_0x555ea2 >> 2] = _0x5b721a.width;
    _0x5ce4f8[_0x1b378a >> 2] = _0x5b721a.height;
  }
  function _0x8349cc(_0x23ed8f) {
    var _0x1dcf99 = _0x212590();
    var _0x5c3d31 = _0x2b6616(8);
    var _0x37f151 = _0x5c3d31 + 4;
    var _0x1e2f03 = _0x2b6616(_0x23ed8f.id.length + 1);
    _0x4cad61(_0x23ed8f.id, _0x1e2f03, _0x23ed8f.id.length + 1);
    var _0xd9d54e = _0x203a83(_0x1e2f03, _0x5c3d31, _0x37f151);
    var _0x4069a9 = [_0x5ce4f8[_0x5c3d31 >> 2], _0x5ce4f8[_0x37f151 >> 2]];
    _0x4a640e(_0x1dcf99);
    return _0x4069a9;
  }
  function _0x3e82f5(_0x14f4bd, _0x26b05d, _0x3103b2) {
    var _0x56a462 = _0x3bf707(_0x14f4bd);
    if (!_0x56a462) {
      return -4;
    }
    _0x56a462.width = _0x26b05d;
    _0x56a462.height = _0x3103b2;
    return 0;
  }
  function _0x31964e(_0x3b017c, _0x50963f, _0x21336b) {
    if (!_0x3b017c.controlTransferredOffscreen) {
      _0x3b017c.width = _0x50963f;
      _0x3b017c.height = _0x21336b;
    } else {
      var _0x131a39 = _0x212590();
      var _0x1da362 = _0x2b6616(_0x3b017c.id.length + 1);
      _0x4cad61(_0x3b017c.id, _0x1da362, _0x3b017c.id.length + 1);
      _0x3e82f5(_0x1da362, _0x50963f, _0x21336b);
      _0x4a640e(_0x131a39);
    }
  }
  function _0x4a9472(_0x17f526) {
    var _0x468a8a = _0x8349cc(_0x17f526);
    var _0x334308 = _0x468a8a[0];
    var _0x29617b = _0x468a8a[1];
    var _0x5c0798 = _0x17f526.style.width;
    var _0x2b9af3 = _0x17f526.style.height;
    var _0x18c567 = _0x17f526.style.backgroundColor;
    var _0x53be37 = document.body.style.backgroundColor;
    var _0x5214af = _0x17f526.style.paddingLeft;
    var _0x4fd908 = _0x17f526.style.paddingRight;
    var _0x3a0dcd = _0x17f526.style.paddingTop;
    var _0x213b28 = _0x17f526.style.paddingBottom;
    var _0x1bcd46 = _0x17f526.style.marginLeft;
    var _0x161f63 = _0x17f526.style.marginRight;
    var _0x4010ef = _0x17f526.style.marginTop;
    var _0x5bb266 = _0x17f526.style.marginBottom;
    var _0x371767 = document.body.style.margin;
    var _0x2a613c = document.documentElement.style.overflow;
    var _0x563a73 = document.body.scroll;
    var _0x406dbb = _0x17f526.style.imageRendering;
    function _0x1e1256() {
      var _0xf49475 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0xf49475) {
        document.removeEventListener("fullscreenchange", _0x1e1256);
        document.removeEventListener("webkitfullscreenchange", _0x1e1256);
        _0x31964e(_0x17f526, _0x334308, _0x29617b);
        _0x17f526.style.width = _0x5c0798;
        _0x17f526.style.height = _0x2b9af3;
        _0x17f526.style.backgroundColor = _0x18c567;
        if (!_0x53be37) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0x53be37;
        _0x17f526.style.paddingLeft = _0x5214af;
        _0x17f526.style.paddingRight = _0x4fd908;
        _0x17f526.style.paddingTop = _0x3a0dcd;
        _0x17f526.style.paddingBottom = _0x213b28;
        _0x17f526.style.marginLeft = _0x1bcd46;
        _0x17f526.style.marginRight = _0x161f63;
        _0x17f526.style.marginTop = _0x4010ef;
        _0x17f526.style.marginBottom = _0x5bb266;
        document.body.style.margin = _0x371767;
        document.documentElement.style.overflow = _0x2a613c;
        document.body.scroll = _0x563a73;
        _0x17f526.style.imageRendering = _0x406dbb;
        if (_0x17f526.GLctxObject) {
          _0x17f526.GLctxObject.GLctx.viewport(0, 0, _0x334308, _0x29617b);
        }
        if (_0x559989.canvasResizedCallback) {
          (function (_0x3435c4, _0x5dc051, _0x121f07) {
            return _0x3b1023.apply(null, [_0x559989.canvasResizedCallback, _0x3435c4, _0x5dc051, _0x121f07]);
          })(37, 0, _0x559989.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0x1e1256);
    document.addEventListener("webkitfullscreenchange", _0x1e1256);
    return _0x1e1256;
  }
  function _0x21d070(_0x214c28, _0x35af14, _0x21f85c) {
    _0x214c28.style.paddingLeft = _0x214c28.style.paddingRight = _0x21f85c + "px";
    _0x214c28.style.paddingTop = _0x214c28.style.paddingBottom = _0x35af14 + "px";
  }
  function _0x2ea1c0(_0x5c54b8) {
    if (_0x1e299e.indexOf(_0x5c54b8) < 0) {
      return _0x5c54b8.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0x107c80(_0xc69eb8, _0x4b8c1f) {
    var _0x2d3f49 = _0x4a9472(_0xc69eb8);
    var _0xeb35a7 = _0x4b8c1f.softFullscreen ? innerWidth : screen.width;
    var _0x4643d1 = _0x4b8c1f.softFullscreen ? innerHeight : screen.height;
    var _0x365afc = _0x2ea1c0(_0xc69eb8);
    var _0x2cad14 = _0x365afc.width;
    var _0x4e84ea = _0x365afc.height;
    var _0x18ab09 = _0x8349cc(_0xc69eb8);
    var _0x4b8ba0 = _0x18ab09[0];
    var _0x3c9e5d = _0x18ab09[1];
    if (_0x4b8c1f.scaleMode == 3) {
      _0x21d070(_0xc69eb8, (_0x4643d1 - _0x4e84ea) / 2, (_0xeb35a7 - _0x2cad14) / 2);
      _0xeb35a7 = _0x2cad14;
      _0x4643d1 = _0x4e84ea;
    } else if (_0x4b8c1f.scaleMode == 2) {
      if (_0xeb35a7 * _0x3c9e5d < _0x4b8ba0 * _0x4643d1) {
        var _0x3cb2ec = _0x3c9e5d * _0xeb35a7 / _0x4b8ba0;
        _0x21d070(_0xc69eb8, (_0x4643d1 - _0x3cb2ec) / 2, 0);
        _0x4643d1 = _0x3cb2ec;
      } else {
        var _0x11a7f7 = _0x4b8ba0 * _0x4643d1 / _0x3c9e5d;
        _0x21d070(_0xc69eb8, 0, (_0xeb35a7 - _0x11a7f7) / 2);
        _0xeb35a7 = _0x11a7f7;
      }
    }
    if (!_0xc69eb8.style.backgroundColor) {
      _0xc69eb8.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0xc69eb8.style.width = _0xeb35a7 + "px";
    _0xc69eb8.style.height = _0x4643d1 + "px";
    if (_0x4b8c1f.filteringMode == 1) {
      _0xc69eb8.style.imageRendering = "optimizeSpeed";
      _0xc69eb8.style.imageRendering = "-moz-crisp-edges";
      _0xc69eb8.style.imageRendering = "-o-crisp-edges";
      _0xc69eb8.style.imageRendering = "-webkit-optimize-contrast";
      _0xc69eb8.style.imageRendering = "optimize-contrast";
      _0xc69eb8.style.imageRendering = "crisp-edges";
      _0xc69eb8.style.imageRendering = "pixelated";
    }
    var _0x36c38a = _0x4b8c1f.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x4b8c1f.canvasResolutionScaleMode != 0) {
      var _0x28f9d9 = _0xeb35a7 * _0x36c38a | 0;
      var _0x537aee = _0x4643d1 * _0x36c38a | 0;
      _0x31964e(_0xc69eb8, _0x28f9d9, _0x537aee);
      if (_0xc69eb8.GLctxObject) {
        _0xc69eb8.GLctxObject.GLctx.viewport(0, 0, _0x28f9d9, _0x537aee);
      }
    }
    return _0x2d3f49;
  }
  function _0x588ff2(_0x4993e3, _0x53abc1) {
    if (_0x53abc1.scaleMode != 0 || _0x53abc1.canvasResolutionScaleMode != 0) {
      _0x107c80(_0x4993e3, _0x53abc1);
    }
    if (_0x4993e3.requestFullscreen) {
      _0x4993e3.requestFullscreen();
    } else if (_0x4993e3.webkitRequestFullscreen) {
      _0x4993e3.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x2e5ba2.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x559989 = _0x53abc1;
    if (_0x53abc1.canvasResizedCallback) {
      (function (_0x30a042, _0x3f5487, _0x2fbc7e) {
        return _0x3b1023.apply(null, [_0x53abc1.canvasResizedCallback, _0x30a042, _0x3f5487, _0x2fbc7e]);
      })(37, 0, _0x53abc1.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0x331b0f() {
    if (!_0x2e5ba2.fullscreenEnabled()) {
      return -1;
    }
    _0x2e5ba2.removeDeferredCalls(_0x588ff2);
    var _0x2514c6 = _0x1e299e[1];
    if (_0x2514c6.exitFullscreen) {
      if (_0x2514c6.fullscreenElement) {
        _0x2514c6.exitFullscreen();
      }
    } else if (_0x2514c6.webkitExitFullscreen) {
      if (_0x2514c6.webkitFullscreenElement) {
        _0x2514c6.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0x4d74bf(_0x5d5ab0) {
    if (_0x5d5ab0.requestPointerLock) {
      _0x5d5ab0.requestPointerLock();
    } else if (_0x5d5ab0.msRequestPointerLock) {
      _0x5d5ab0.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0x15e9c6() {
    _0x2e5ba2.removeDeferredCalls(_0x4d74bf);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0x3f55c2(_0x588a45) {
    var _0x983a80 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0x26e5e1 = !!_0x983a80;
    _0x5ce4f8[_0x588a45 >> 2] = _0x26e5e1;
    _0x5ce4f8[_0x588a45 + 4 >> 2] = _0x2e5ba2.fullscreenEnabled();
    var _0x5aa729 = _0x26e5e1 ? _0x983a80 : _0x2e5ba2.previousFullscreenElement;
    var _0x10070d = _0x2e5ba2.getNodeNameForTarget(_0x5aa729);
    var _0x5d9198 = _0x5aa729 && _0x5aa729.id ? _0x5aa729.id : "";
    _0x4cad61(_0x10070d, _0x588a45 + 8, 128);
    _0x4cad61(_0x5d9198, _0x588a45 + 136, 128);
    _0x5ce4f8[_0x588a45 + 264 >> 2] = _0x5aa729 ? _0x5aa729.clientWidth : 0;
    _0x5ce4f8[_0x588a45 + 268 >> 2] = _0x5aa729 ? _0x5aa729.clientHeight : 0;
    _0x5ce4f8[_0x588a45 + 272 >> 2] = screen.width;
    _0x5ce4f8[_0x588a45 + 276 >> 2] = screen.height;
    if (_0x26e5e1) {
      _0x2e5ba2.previousFullscreenElement = _0x983a80;
    }
  }
  function _0x43a868(_0x10819d) {
    if (!_0x2e5ba2.fullscreenEnabled()) {
      return -1;
    }
    _0x3f55c2(_0x10819d);
    return 0;
  }
  function _0x3e28dd(_0x5cd0e2, _0x591800) {
    _0xbff719[_0x5cd0e2 >> 3] = _0x591800.timestamp;
    for (var _0x4a4732 = 0; _0x4a4732 < _0x591800.axes.length; ++_0x4a4732) {
      _0xbff719[_0x5cd0e2 + _0x4a4732 * 8 + 16 >> 3] = _0x591800.axes[_0x4a4732];
    }
    for (var _0x4a4732 = 0; _0x4a4732 < _0x591800.buttons.length; ++_0x4a4732) {
      if (typeof _0x591800.buttons[_0x4a4732] === "object") {
        _0xbff719[_0x5cd0e2 + _0x4a4732 * 8 + 528 >> 3] = _0x591800.buttons[_0x4a4732].value;
      } else {
        _0xbff719[_0x5cd0e2 + _0x4a4732 * 8 + 528 >> 3] = _0x591800.buttons[_0x4a4732];
      }
    }
    for (var _0x4a4732 = 0; _0x4a4732 < _0x591800.buttons.length; ++_0x4a4732) {
      if (typeof _0x591800.buttons[_0x4a4732] === "object") {
        _0x5ce4f8[_0x5cd0e2 + _0x4a4732 * 4 + 1040 >> 2] = _0x591800.buttons[_0x4a4732].pressed;
      } else {
        _0x5ce4f8[_0x5cd0e2 + _0x4a4732 * 4 + 1040 >> 2] = _0x591800.buttons[_0x4a4732] == 1;
      }
    }
    _0x5ce4f8[_0x5cd0e2 + 1296 >> 2] = _0x591800.connected;
    _0x5ce4f8[_0x5cd0e2 + 1300 >> 2] = _0x591800.index;
    _0x5ce4f8[_0x5cd0e2 + 8 >> 2] = _0x591800.axes.length;
    _0x5ce4f8[_0x5cd0e2 + 12 >> 2] = _0x591800.buttons.length;
    _0x4cad61(_0x591800.id, _0x5cd0e2 + 1304, 64);
    _0x4cad61(_0x591800.mapping, _0x5cd0e2 + 1368, 64);
  }
  function _0x132d69(_0x11ce2f, _0x169257) {
    if (_0x11ce2f < 0 || _0x11ce2f >= _0x2e5ba2.lastGamepadState.length) {
      return -5;
    }
    if (!_0x2e5ba2.lastGamepadState[_0x11ce2f]) {
      return -7;
    }
    _0x3e28dd(_0x169257, _0x2e5ba2.lastGamepadState[_0x11ce2f]);
    return 0;
  }
  function _0x498b27() {
    return 2147483648;
  }
  function _0x59a61b() {
    return _0x2e5ba2.lastGamepadState.length;
  }
  function _0x3acca9() {
    _0x2e5ba2.removeAllEventListeners();
  }
  function _0x2a6594(_0x2633d5) {
    return !_0x3ba29d.contexts[_0x2633d5] || _0x3ba29d.contexts[_0x2633d5].GLctx.isContextLost();
  }
  function _0x4fa4a6(_0x516318) {
    return _0x516318 < 0 || _0x516318 === 0 && 1 / _0x516318 === -Infinity;
  }
  function _0x365bde(_0x718e7e, _0x568f1e) {
    return (_0x718e7e >>> 0) + _0x568f1e * 4294967296;
  }
  function _0x547a20(_0x394859, _0x31e079) {
    return (_0x394859 >>> 0) + (_0x31e079 >>> 0) * 4294967296;
  }
  function _0x511e66(_0x23e636, _0x14ff78) {
    if (_0x23e636 <= 0) {
      return _0x23e636;
    }
    var _0x2b3844 = _0x14ff78 <= 32 ? Math.abs(1 << _0x14ff78 - 1) : Math.pow(2, _0x14ff78 - 1);
    if (_0x23e636 >= _0x2b3844 && (_0x14ff78 <= 32 || _0x23e636 > _0x2b3844)) {
      _0x23e636 = _0x2b3844 * -2 + _0x23e636;
    }
    return _0x23e636;
  }
  function _0x2890c6(_0x242bdc, _0x28e39c) {
    if (_0x242bdc >= 0) {
      return _0x242bdc;
    }
    if (_0x28e39c <= 32) {
      return Math.abs(1 << _0x28e39c - 1) * 2 + _0x242bdc;
    } else {
      return Math.pow(2, _0x28e39c) + _0x242bdc;
    }
  }
  function _0x7f776c(_0x5f1b25, _0x56dd05) {
    var _0x298ed5 = _0x5f1b25;
    var _0x55f58b = _0x56dd05;
    function _0xf6cc7c(_0x27239b, _0x4a0e8f) {
      if (_0x4a0e8f === "double" || _0x4a0e8f === "i64") {
        if (_0x27239b & 7) {
          _0x27239b += 4;
        }
      } else {}
      return _0x27239b;
    }
    function _0x5989b4(_0xb4f5e3) {
      var _0x106302;
      _0x55f58b = _0xf6cc7c(_0x55f58b, _0xb4f5e3);
      if (_0xb4f5e3 === "double") {
        _0x106302 = _0xbff719[_0x55f58b >> 3];
        _0x55f58b += 8;
      } else if (_0xb4f5e3 == "i64") {
        _0x106302 = [_0x5ce4f8[_0x55f58b >> 2], _0x5ce4f8[_0x55f58b + 4 >> 2]];
        _0x55f58b += 8;
      } else {
        _0xb4f5e3 = "i32";
        _0x106302 = _0x5ce4f8[_0x55f58b >> 2];
        _0x55f58b += 4;
      }
      return _0x106302;
    }
    var _0x23ca4a = [];
    var _0x4d4f8c;
    var _0x14e321;
    var _0x1be20c;
    while (1) {
      var _0x131f7e = _0x298ed5;
      _0x4d4f8c = _0x28416d[_0x298ed5 >> 0];
      if (_0x4d4f8c === 0) {
        break;
      }
      _0x14e321 = _0x28416d[_0x298ed5 + 1 >> 0];
      if (_0x4d4f8c == 37) {
        var _0x52b512 = false;
        var _0x1c2c49 = false;
        var _0x5cf059 = false;
        var _0x30047c = false;
        var _0x12a925 = false;
        _0x3948eb: while (1) {
          switch (_0x14e321) {
            case 43:
              _0x52b512 = true;
              break;
            case 45:
              _0x1c2c49 = true;
              break;
            case 35:
              _0x5cf059 = true;
              break;
            case 48:
              if (_0x30047c) {
                break _0x3948eb;
              } else {
                _0x30047c = true;
                break;
              }
            case 32:
              _0x12a925 = true;
              break;
            default:
              break _0x3948eb;
          }
          _0x298ed5++;
          _0x14e321 = _0x28416d[_0x298ed5 + 1 >> 0];
        }
        var _0x5543a7 = 0;
        if (_0x14e321 == 42) {
          _0x5543a7 = _0x5989b4("i32");
          _0x298ed5++;
          _0x14e321 = _0x28416d[_0x298ed5 + 1 >> 0];
        } else {
          while (_0x14e321 >= 48 && _0x14e321 <= 57) {
            _0x5543a7 = _0x5543a7 * 10 + (_0x14e321 - 48);
            _0x298ed5++;
            _0x14e321 = _0x28416d[_0x298ed5 + 1 >> 0];
          }
        }
        var _0x14e4d9 = false;
        var _0xdf22d1 = -1;
        if (_0x14e321 == 46) {
          _0xdf22d1 = 0;
          _0x14e4d9 = true;
          _0x298ed5++;
          _0x14e321 = _0x28416d[_0x298ed5 + 1 >> 0];
          if (_0x14e321 == 42) {
            _0xdf22d1 = _0x5989b4("i32");
            _0x298ed5++;
          } else {
            while (1) {
              var _0x34f553 = _0x28416d[_0x298ed5 + 1 >> 0];
              if (_0x34f553 < 48 || _0x34f553 > 57) {
                break;
              }
              _0xdf22d1 = _0xdf22d1 * 10 + (_0x34f553 - 48);
              _0x298ed5++;
            }
          }
          _0x14e321 = _0x28416d[_0x298ed5 + 1 >> 0];
        }
        if (_0xdf22d1 < 0) {
          _0xdf22d1 = 6;
          _0x14e4d9 = false;
        }
        var _0x391910;
        switch (String.fromCharCode(_0x14e321)) {
          case "h":
            var _0x2299da = _0x28416d[_0x298ed5 + 2 >> 0];
            if (_0x2299da == 104) {
              _0x298ed5++;
              _0x391910 = 1;
            } else {
              _0x391910 = 2;
            }
            break;
          case "l":
            var _0x2299da = _0x28416d[_0x298ed5 + 2 >> 0];
            if (_0x2299da == 108) {
              _0x298ed5++;
              _0x391910 = 8;
            } else {
              _0x391910 = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0x391910 = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x391910 = 4;
            break;
          default:
            _0x391910 = null;
        }
        if (_0x391910) {
          _0x298ed5++;
        }
        _0x14e321 = _0x28416d[_0x298ed5 + 1 >> 0];
        switch (String.fromCharCode(_0x14e321)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0xbc4e05 = _0x14e321 == 100 || _0x14e321 == 105;
              _0x391910 = _0x391910 || 4;
              _0x1be20c = _0x5989b4("i" + _0x391910 * 8);
              var _0x271396;
              if (_0x391910 == 8) {
                _0x1be20c = _0x14e321 == 117 ? _0x547a20(_0x1be20c[0], _0x1be20c[1]) : _0x365bde(_0x1be20c[0], _0x1be20c[1]);
              }
              if (_0x391910 <= 4) {
                var _0x549952 = Math.pow(256, _0x391910) - 1;
                _0x1be20c = (_0xbc4e05 ? _0x511e66 : _0x2890c6)(_0x1be20c & _0x549952, _0x391910 * 8);
              }
              var _0x29af73 = Math.abs(_0x1be20c);
              var _0x7a2fa0 = "";
              if (_0x14e321 == 100 || _0x14e321 == 105) {
                _0x271396 = _0x511e66(_0x1be20c, _0x391910 * 8, 1).toString(10);
              } else if (_0x14e321 == 117) {
                _0x271396 = _0x2890c6(_0x1be20c, _0x391910 * 8, 1).toString(10);
                _0x1be20c = Math.abs(_0x1be20c);
              } else if (_0x14e321 == 111) {
                _0x271396 = (_0x5cf059 ? "0" : "") + _0x29af73.toString(8);
              } else if (_0x14e321 == 120 || _0x14e321 == 88) {
                _0x7a2fa0 = _0x5cf059 && _0x1be20c != 0 ? "0x" : "";
                if (_0x1be20c < 0) {
                  _0x1be20c = -_0x1be20c;
                  _0x271396 = (_0x29af73 - 1).toString(16);
                  var _0x6939fd = [];
                  for (var _0x1b8ae2 = 0; _0x1b8ae2 < _0x271396.length; _0x1b8ae2++) {
                    _0x6939fd.push((15 - parseInt(_0x271396[_0x1b8ae2], 16)).toString(16));
                  }
                  _0x271396 = _0x6939fd.join("");
                  while (_0x271396.length < _0x391910 * 2) {
                    _0x271396 = "f" + _0x271396;
                  }
                } else {
                  _0x271396 = _0x29af73.toString(16);
                }
                if (_0x14e321 == 88) {
                  _0x7a2fa0 = _0x7a2fa0.toUpperCase();
                  _0x271396 = _0x271396.toUpperCase();
                }
              } else if (_0x14e321 == 112) {
                if (_0x29af73 === 0) {
                  _0x271396 = "(nil)";
                } else {
                  _0x7a2fa0 = "0x";
                  _0x271396 = _0x29af73.toString(16);
                }
              }
              if (_0x14e4d9) {
                while (_0x271396.length < _0xdf22d1) {
                  _0x271396 = "0" + _0x271396;
                }
              }
              if (_0x1be20c >= 0) {
                if (_0x52b512) {
                  _0x7a2fa0 = "+" + _0x7a2fa0;
                } else if (_0x12a925) {
                  _0x7a2fa0 = " " + _0x7a2fa0;
                }
              }
              if (_0x271396.charAt(0) == "-") {
                _0x7a2fa0 = "-" + _0x7a2fa0;
                _0x271396 = _0x271396.substr(1);
              }
              while (_0x7a2fa0.length + _0x271396.length < _0x5543a7) {
                if (_0x1c2c49) {
                  _0x271396 += " ";
                } else if (_0x30047c) {
                  _0x271396 = "0" + _0x271396;
                } else {
                  _0x7a2fa0 = " " + _0x7a2fa0;
                }
              }
              _0x271396 = _0x7a2fa0 + _0x271396;
              _0x271396.split("").forEach(function (_0xa35649) {
                _0x23ca4a.push(_0xa35649.charCodeAt(0));
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
              _0x1be20c = _0x5989b4("double");
              var _0x271396;
              if (isNaN(_0x1be20c)) {
                _0x271396 = "nan";
                _0x30047c = false;
              } else if (!isFinite(_0x1be20c)) {
                _0x271396 = (_0x1be20c < 0 ? "-" : "") + "inf";
                _0x30047c = false;
              } else {
                var _0x6989f4 = false;
                var _0x1c80b3 = Math.min(_0xdf22d1, 20);
                if (_0x14e321 == 103 || _0x14e321 == 71) {
                  _0x6989f4 = true;
                  _0xdf22d1 = _0xdf22d1 || 1;
                  var _0x3dc142 = parseInt(_0x1be20c.toExponential(_0x1c80b3).split("e")[1], 10);
                  if (_0xdf22d1 > _0x3dc142 && _0x3dc142 >= -4) {
                    _0x14e321 = (_0x14e321 == 103 ? "f" : "F").charCodeAt(0);
                    _0xdf22d1 -= _0x3dc142 + 1;
                  } else {
                    _0x14e321 = (_0x14e321 == 103 ? "e" : "E").charCodeAt(0);
                    _0xdf22d1--;
                  }
                  _0x1c80b3 = Math.min(_0xdf22d1, 20);
                }
                if (_0x14e321 == 101 || _0x14e321 == 69) {
                  _0x271396 = _0x1be20c.toExponential(_0x1c80b3);
                  if (/[eE][-+]\d$/.test(_0x271396)) {
                    _0x271396 = _0x271396.slice(0, -1) + "0" + _0x271396.slice(-1);
                  }
                } else if (_0x14e321 == 102 || _0x14e321 == 70) {
                  _0x271396 = _0x1be20c.toFixed(_0x1c80b3);
                  if (_0x1be20c === 0 && _0x4fa4a6(_0x1be20c)) {
                    _0x271396 = "-" + _0x271396;
                  }
                }
                var _0xdc89b9 = _0x271396.split("e");
                if (_0x6989f4 && !_0x5cf059) {
                  while (_0xdc89b9[0].length > 1 && _0xdc89b9[0].includes(".") && (_0xdc89b9[0].slice(-1) == "0" || _0xdc89b9[0].slice(-1) == ".")) {
                    _0xdc89b9[0] = _0xdc89b9[0].slice(0, -1);
                  }
                } else {
                  if (_0x5cf059 && _0x271396.indexOf(".") == -1) {
                    _0xdc89b9[0] += ".";
                  }
                  while (_0xdf22d1 > _0x1c80b3++) {
                    _0xdc89b9[0] += "0";
                  }
                }
                _0x271396 = _0xdc89b9[0] + (_0xdc89b9.length > 1 ? "e" + _0xdc89b9[1] : "");
                if (_0x14e321 == 69) {
                  _0x271396 = _0x271396.toUpperCase();
                }
                if (_0x1be20c >= 0) {
                  if (_0x52b512) {
                    _0x271396 = "+" + _0x271396;
                  } else if (_0x12a925) {
                    _0x271396 = " " + _0x271396;
                  }
                }
              }
              while (_0x271396.length < _0x5543a7) {
                if (_0x1c2c49) {
                  _0x271396 += " ";
                } else if (_0x30047c && (_0x271396[0] == "-" || _0x271396[0] == "+")) {
                  _0x271396 = _0x271396[0] + "0" + _0x271396.slice(1);
                } else {
                  _0x271396 = (_0x30047c ? "0" : " ") + _0x271396;
                }
              }
              if (_0x14e321 < 97) {
                _0x271396 = _0x271396.toUpperCase();
              }
              _0x271396.split("").forEach(function (_0x1b2f4a) {
                _0x23ca4a.push(_0x1b2f4a.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0x3d49db = _0x5989b4("i8*");
              var _0x2739e4 = _0x3d49db ? _0x4929db(_0x3d49db) : "(null)".length;
              if (_0x14e4d9) {
                _0x2739e4 = Math.min(_0x2739e4, _0xdf22d1);
              }
              if (!_0x1c2c49) {
                while (_0x2739e4 < _0x5543a7--) {
                  _0x23ca4a.push(32);
                }
              }
              if (_0x3d49db) {
                for (var _0x1b8ae2 = 0; _0x1b8ae2 < _0x2739e4; _0x1b8ae2++) {
                  _0x23ca4a.push(_0x12f402[_0x3d49db++ >> 0]);
                }
              } else {
                _0x23ca4a = _0x23ca4a.concat(_0x1cc621("(null)".substr(0, _0x2739e4), true));
              }
              if (_0x1c2c49) {
                while (_0x2739e4 < _0x5543a7--) {
                  _0x23ca4a.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x1c2c49) {
                _0x23ca4a.push(_0x5989b4("i8"));
              }
              while (--_0x5543a7 > 0) {
                _0x23ca4a.push(32);
              }
              if (!_0x1c2c49) {
                _0x23ca4a.push(_0x5989b4("i8"));
              }
              break;
            }
          case "n":
            {
              var _0x100c71 = _0x5989b4("i32*");
              _0x5ce4f8[_0x100c71 >> 2] = _0x23ca4a.length;
              break;
            }
          case "%":
            {
              _0x23ca4a.push(_0x4d4f8c);
              break;
            }
          default:
            {
              for (var _0x1b8ae2 = _0x131f7e; _0x1b8ae2 < _0x298ed5 + 2; _0x1b8ae2++) {
                _0x23ca4a.push(_0x28416d[_0x1b8ae2 >> 0]);
              }
            }
        }
        _0x298ed5 += 2;
      } else {
        _0x23ca4a.push(_0x4d4f8c);
        _0x298ed5 += 1;
      }
    }
    return _0x23ca4a;
  }
  function _0x328a9a(_0x4158e0) {
    if (!_0x4158e0 || !_0x4158e0.callee || !_0x4158e0.callee.name) {
      return [null, "", ""];
    }
    var _0x18330e = _0x4158e0.callee.toString();
    var _0xeb6441 = _0x4158e0.callee.name;
    var _0x3b3fb1 = "(";
    var _0x452089 = true;
    for (var _0x5b6906 in _0x4158e0) {
      var _0xb0d860 = _0x4158e0[_0x5b6906];
      if (!_0x452089) {
        _0x3b3fb1 += ", ";
      }
      _0x452089 = false;
      if (typeof _0xb0d860 === "number" || typeof _0xb0d860 === "string") {
        _0x3b3fb1 += _0xb0d860;
      } else {
        _0x3b3fb1 += "(" + typeof _0xb0d860 + ")";
      }
    }
    _0x3b3fb1 += ")";
    var _0x34ad7c = _0x4158e0.callee.caller;
    _0x4158e0 = _0x34ad7c ? _0x34ad7c.arguments : [];
    if (_0x452089) {
      _0x3b3fb1 = "";
    }
    return [_0x4158e0, _0xeb6441, _0x3b3fb1];
  }
  function _0x44385e(_0x1adcac) {
    var _0x567980 = _0x39fca6();
    var _0xdbefd8 = _0x567980.lastIndexOf("_emscripten_log");
    var _0xe7436d = _0x567980.lastIndexOf("_emscripten_get_callstack");
    var _0x184f18 = _0x567980.indexOf("\n", Math.max(_0xdbefd8, _0xe7436d)) + 1;
    _0x567980 = _0x567980.slice(_0x184f18);
    if (_0x1adcac & 32) {
      _0x596987("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x1adcac & 8 && typeof emscripten_source_map === "undefined") {
      _0x596987("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x1adcac ^= 8;
      _0x1adcac |= 16;
    }
    var _0x33e8be = null;
    if (_0x1adcac & 128) {
      _0x33e8be = _0x328a9a(arguments);
      while (_0x33e8be[1].includes("_emscripten_")) {
        _0x33e8be = _0x328a9a(_0x33e8be[0]);
      }
    }
    var _0x1bb031 = _0x567980.split("\n");
    _0x567980 = "";
    var _0x2aa76e = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0x459320 = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0x3ad409 = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x66ac48 in _0x1bb031) {
      var _0x7a10ea = _0x1bb031[_0x66ac48];
      var _0x767441 = "";
      var _0x29bb8e = "";
      var _0x3612ac = 0;
      var _0xc47460 = 0;
      var _0x335183 = _0x3ad409.exec(_0x7a10ea);
      if (_0x335183 && _0x335183.length == 5) {
        _0x767441 = _0x335183[1];
        _0x29bb8e = _0x335183[2];
        _0x3612ac = _0x335183[3];
        _0xc47460 = _0x335183[4];
      } else {
        _0x335183 = _0x2aa76e.exec(_0x7a10ea);
        if (!_0x335183) {
          _0x335183 = _0x459320.exec(_0x7a10ea);
        }
        if (_0x335183 && _0x335183.length >= 4) {
          _0x767441 = _0x335183[1];
          _0x29bb8e = _0x335183[2];
          _0x3612ac = _0x335183[3];
          _0xc47460 = _0x335183[4] | 0;
        } else {
          _0x567980 += _0x7a10ea + "\n";
          continue;
        }
      }
      var _0x2bc044 = false;
      if (_0x1adcac & 8) {
        var _0x5e64d2 = emscripten_source_map.originalPositionFor({
          line: _0x3612ac,
          column: _0xc47460
        });
        _0x2bc044 = _0x5e64d2 && _0x5e64d2.source;
        if (_0x2bc044) {
          if (_0x1adcac & 64) {
            _0x5e64d2.source = _0x5e64d2.source.substring(_0x5e64d2.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x567980 += "    at " + _0x767441 + " (" + _0x5e64d2.source + ":" + _0x5e64d2.line + ":" + _0x5e64d2.column + ")\n";
        }
      }
      if (_0x1adcac & 16 || !_0x2bc044) {
        if (_0x1adcac & 64) {
          _0x29bb8e = _0x29bb8e.substring(_0x29bb8e.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x567980 += (_0x2bc044 ? "     = " + _0x767441 : "    at " + _0x767441) + " (" + _0x29bb8e + ":" + _0x3612ac + ":" + _0xc47460 + ")\n";
      }
      if (_0x1adcac & 128 && _0x33e8be[0]) {
        if (_0x33e8be[1] == _0x767441 && _0x33e8be[2].length > 0) {
          _0x567980 = _0x567980.replace(/\s+$/, "");
          _0x567980 += " with values: " + _0x33e8be[1] + _0x33e8be[2] + "\n";
        }
        _0x33e8be = _0x328a9a(_0x33e8be[0]);
      }
    }
    _0x567980 = _0x567980.replace(/\s+$/, "");
    return _0x567980;
  }
  function _0x57e8eb(_0x1319b9, _0x49a94d) {
    if (_0x1319b9 & 24) {
      _0x49a94d = _0x49a94d.replace(/\s+$/, "");
      _0x49a94d += (_0x49a94d.length > 0 ? "\n" : "") + _0x44385e(_0x1319b9);
    }
    if (_0x1319b9 & 1) {
      if (_0x1319b9 & 4) {
        console.error(_0x49a94d);
      } else if (_0x1319b9 & 2) {
        console.warn(_0x49a94d);
      } else if (_0x1319b9 & 512) {
        console.info(_0x49a94d);
      } else if (_0x1319b9 & 256) {
        console.debug(_0x49a94d);
      } else {
        console.log(_0x49a94d);
      }
    } else if (_0x1319b9 & 6) {
      _0x33bd81(_0x49a94d);
    } else {
      _0xaa0590(_0x49a94d);
    }
  }
  function _0x41a505(_0x361cba, _0x1a9244, _0x525428) {
    var _0x4e42fe = _0x7f776c(_0x1a9244, _0x525428);
    var _0x2b6da5 = _0x10dc1b(_0x4e42fe, 0);
    _0x57e8eb(_0x361cba, _0x2b6da5);
  }
  function _0x3524d8(_0x1919cc, _0xb012b0) {
    _0x1dc1f2(_0x1919cc, _0xb012b0 || 1);
    throw "longjmp";
  }
  function _0xe603e5(_0x3f83c4, _0x594d8e) {
    return _0x3524d8(_0x3f83c4, _0x594d8e);
  }
  function _0x587f09(_0x35648b, _0x42d52, _0x253b95) {
    _0x12f402.copyWithin(_0x35648b, _0x42d52, _0x42d52 + _0x253b95);
  }
  function _0x4f0d48(_0x10391b, _0x27285b) {
    if (!_0x2e5ba2.fullscreenEnabled()) {
      return -1;
    }
    _0x10391b = _0x85f95f(_0x10391b);
    if (!_0x10391b) {
      return -4;
    }
    if (!_0x10391b.requestFullscreen && !_0x10391b.webkitRequestFullscreen) {
      return -3;
    }
    var _0x7dc139 = _0x2e5ba2.canPerformEventHandlerRequests();
    if (!_0x7dc139) {
      if (_0x27285b.deferUntilInEventHandler) {
        _0x2e5ba2.deferCall(_0x588ff2, 1, [_0x10391b, _0x27285b]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x588ff2(_0x10391b, _0x27285b);
  }
  function _0x848111(_0x38a7b9, _0x30d44f) {
    var _0x539187 = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0x30d44f,
      canvasResizedCallbackTargetThread: 2
    };
    return _0x4f0d48(_0x38a7b9, _0x539187);
  }
  function _0x43f96a(_0x4ae0f5, _0x38f3fa) {
    _0x4ae0f5 = _0x85f95f(_0x4ae0f5);
    if (!_0x4ae0f5) {
      return -4;
    }
    if (!_0x4ae0f5.requestPointerLock && !_0x4ae0f5.msRequestPointerLock) {
      return -1;
    }
    var _0x28a47d = _0x2e5ba2.canPerformEventHandlerRequests();
    if (!_0x28a47d) {
      if (_0x38f3fa) {
        _0x2e5ba2.deferCall(_0x4d74bf, 2, [_0x4ae0f5]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x4d74bf(_0x4ae0f5);
  }
  function _0x4486fa(_0x5a1bdb) {
    try {
      _0x43c2d9.grow(_0x5a1bdb - _0x2c155a.byteLength + 65535 >>> 16);
      _0x5be588(_0x43c2d9.buffer);
      return 1;
    } catch (_0x464b9a) {}
  }
  function _0x3c9119(_0x3e4d63) {
    var _0x15362f = _0x12f402.length;
    _0x3e4d63 = _0x3e4d63 >>> 0;
    var _0x1baba1 = 2147483648;
    if (_0x3e4d63 > _0x1baba1) {
      return false;
    }
    for (var _0x1a9268 = 1; _0x1a9268 <= 4; _0x1a9268 *= 2) {
      var _0xb5d103 = _0x15362f * (1 + 0.2 / _0x1a9268);
      _0xb5d103 = Math.min(_0xb5d103, _0x3e4d63 + 100663296);
      var _0x5f153f = Math.min(_0x1baba1, _0x2d9c29(Math.max(_0x3e4d63, _0xb5d103), 65536));
      var _0x1dce23 = _0x4486fa(_0x5f153f);
      if (_0x1dce23) {
        return true;
      }
    }
    return false;
  }
  function _0x1a4038() {
    try {
      if (navigator.getGamepads) {
        if (_0x2e5ba2.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0x445c8c) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0x3f682b(_0x31e554, _0x1942e1, _0x18034b, _0x109f03, _0x2dc4e3, _0x2dd89b, _0x4abbb7) {
    if (!_0x2e5ba2.focusEvent) {
      _0x2e5ba2.focusEvent = _0x18375c(256);
    }
    function _0x579909(_0x3aaded) {
      var _0xbba5ba = _0x3aaded || event;
      var _0x57979d = _0x2e5ba2.getNodeNameForTarget(_0xbba5ba.target);
      var _0xc8058b = _0xbba5ba.target.id ? _0xbba5ba.target.id : "";
      var _0x24c816 = _0x2e5ba2.focusEvent;
      _0x4cad61(_0x57979d, _0x24c816 + 0, 128);
      _0x4cad61(_0xc8058b, _0x24c816 + 128, 128);
      if (function (_0xe964b3, _0x3abd75, _0x2c4644) {
        return _0x3b1023.apply(null, [_0x109f03, _0xe964b3, _0x3abd75, _0x2c4644]);
      }(_0x2dc4e3, _0x24c816, _0x1942e1)) {
        _0xbba5ba.preventDefault();
      }
    }
    var _0x413e82 = {
      target: _0x85f95f(_0x31e554),
      eventTypeString: _0x2dd89b,
      callbackfunc: _0x109f03,
      handlerFunc: _0x579909,
      useCapture: _0x18034b
    };
    _0x2e5ba2.registerOrRemoveHandler(_0x413e82);
  }
  function _0x5c5771(_0x58f9be, _0x350684, _0x2d9c3d, _0x6fa542, _0x489699) {
    _0x3f682b(_0x58f9be, _0x350684, _0x2d9c3d, _0x6fa542, 12, "blur", _0x489699);
    return 0;
  }
  function _0x47a055(_0x244eba, _0x4ae8d1, _0xe31740, _0x3cb2bb, _0x418feb) {
    _0x3f682b(_0x244eba, _0x4ae8d1, _0xe31740, _0x3cb2bb, 13, "focus", _0x418feb);
    return 0;
  }
  function _0x7a234c(_0x126435, _0x216072, _0x339dc1, _0x9dd55, _0x1b2aa8, _0x17a659, _0x5c4a5f) {
    if (!_0x2e5ba2.fullscreenChangeEvent) {
      _0x2e5ba2.fullscreenChangeEvent = _0x18375c(280);
    }
    function _0x539be5(_0x25d7b2) {
      var _0x1f93f0 = _0x25d7b2 || event;
      var _0x17c301 = _0x2e5ba2.fullscreenChangeEvent;
      _0x3f55c2(_0x17c301);
      if (function (_0x55ab74, _0x20164e, _0x72cbb5) {
        return _0x3b1023.apply(null, [_0x9dd55, _0x55ab74, _0x20164e, _0x72cbb5]);
      }(_0x1b2aa8, _0x17c301, _0x216072)) {
        _0x1f93f0.preventDefault();
      }
    }
    var _0x40b965 = {
      target: _0x126435,
      eventTypeString: _0x17a659,
      callbackfunc: _0x9dd55,
      handlerFunc: _0x539be5,
      useCapture: _0x339dc1
    };
    _0x2e5ba2.registerOrRemoveHandler(_0x40b965);
  }
  function _0x723f69(_0x3cfa7a, _0x2432da, _0x15a619, _0x43d2d6, _0x5f19fc) {
    if (!_0x2e5ba2.fullscreenEnabled()) {
      return -1;
    }
    _0x3cfa7a = _0x85f95f(_0x3cfa7a);
    if (!_0x3cfa7a) {
      return -4;
    }
    _0x7a234c(_0x3cfa7a, _0x2432da, _0x15a619, _0x43d2d6, 19, "fullscreenchange", _0x5f19fc);
    _0x7a234c(_0x3cfa7a, _0x2432da, _0x15a619, _0x43d2d6, 19, "webkitfullscreenchange", _0x5f19fc);
    return 0;
  }
  function _0x309217(_0x1aeb16, _0x38fd60, _0x5ae776, _0x18c8a8, _0x49d8d6, _0x53bc43, _0x442c77) {
    if (!_0x2e5ba2.gamepadEvent) {
      _0x2e5ba2.gamepadEvent = _0x18375c(1432);
    }
    function _0x2d915c(_0x4803b8) {
      var _0x52a987 = _0x4803b8 || event;
      var _0x447d91 = _0x2e5ba2.gamepadEvent;
      _0x3e28dd(_0x447d91, _0x52a987.gamepad);
      if (function (_0x5ed4fa, _0x40c4fc, _0x545b28) {
        return _0x3b1023.apply(null, [_0x18c8a8, _0x5ed4fa, _0x40c4fc, _0x545b28]);
      }(_0x49d8d6, _0x447d91, _0x38fd60)) {
        _0x52a987.preventDefault();
      }
    }
    var _0x343553 = {
      target: _0x85f95f(_0x1aeb16),
      allowsDeferredCalls: true,
      eventTypeString: _0x53bc43,
      callbackfunc: _0x18c8a8,
      handlerFunc: _0x2d915c,
      useCapture: _0x5ae776
    };
    _0x2e5ba2.registerOrRemoveHandler(_0x343553);
  }
  function _0xa2da16(_0x5e232b, _0x7badc0, _0x64330d, _0x55705d) {
    if (_0x1a4038()) {
      return -1;
    }
    return _0x309217(2, _0x5e232b, _0x7badc0, _0x64330d, 26, "gamepadconnected", _0x55705d);
  }
  function _0x5037c2(_0x400027, _0x1986e2, _0x2110e2, _0x35da27) {
    if (_0x1a4038()) {
      return -1;
    }
    return _0x309217(2, _0x400027, _0x1986e2, _0x2110e2, 27, "gamepaddisconnected", _0x35da27);
  }
  function _0x16aa2f(_0x7225b3, _0x160389, _0x2ac62b) {
    return setInterval(function () {
      (function (_0x1dc25c) {
        _0x1cebc1.apply(null, [_0x7225b3, _0x1dc25c]);
      })(_0x2ac62b);
    }, _0x160389);
  }
  function _0x3f9b6b(_0x1204f1, _0x4cc6a1, _0x281173, _0x117ebb, _0x5a0f61, _0x45e576, _0xbc42c9) {
    if (!_0x2e5ba2.keyEvent) {
      _0x2e5ba2.keyEvent = _0x18375c(164);
    }
    function _0x5cb0c4(_0x2338c7) {
      var _0x56bcfa = _0x2e5ba2.keyEvent;
      var _0x1d1582 = _0x56bcfa >> 2;
      _0x5ce4f8[_0x1d1582 + 0] = _0x2338c7.location;
      _0x5ce4f8[_0x1d1582 + 1] = _0x2338c7.ctrlKey;
      _0x5ce4f8[_0x1d1582 + 2] = _0x2338c7.shiftKey;
      _0x5ce4f8[_0x1d1582 + 3] = _0x2338c7.altKey;
      _0x5ce4f8[_0x1d1582 + 4] = _0x2338c7.metaKey;
      _0x5ce4f8[_0x1d1582 + 5] = _0x2338c7.repeat;
      _0x5ce4f8[_0x1d1582 + 6] = _0x2338c7.charCode;
      _0x5ce4f8[_0x1d1582 + 7] = _0x2338c7.keyCode;
      _0x5ce4f8[_0x1d1582 + 8] = _0x2338c7.which;
      _0x4cad61(_0x2338c7.key || "", _0x56bcfa + 36, 32);
      _0x4cad61(_0x2338c7.code || "", _0x56bcfa + 68, 32);
      _0x4cad61(_0x2338c7.char || "", _0x56bcfa + 100, 32);
      _0x4cad61(_0x2338c7.locale || "", _0x56bcfa + 132, 32);
      if (function (_0x1376b4, _0x270419, _0x2aaf4e) {
        return _0x3b1023.apply(null, [_0x117ebb, _0x1376b4, _0x270419, _0x2aaf4e]);
      }(_0x5a0f61, _0x56bcfa, _0x4cc6a1)) {
        _0x2338c7.preventDefault();
      }
    }
    var _0x42a553 = {
      target: _0x85f95f(_0x1204f1),
      allowsDeferredCalls: true,
      eventTypeString: _0x45e576,
      callbackfunc: _0x117ebb,
      handlerFunc: _0x5cb0c4,
      useCapture: _0x281173
    };
    _0x2e5ba2.registerOrRemoveHandler(_0x42a553);
  }
  function _0x67566e(_0x330b3c, _0x5bc85e, _0x26919a, _0x74c0fc, _0x106c05) {
    _0x3f9b6b(_0x330b3c, _0x5bc85e, _0x26919a, _0x74c0fc, 2, "keydown", _0x106c05);
    return 0;
  }
  function _0x97465f(_0x3bcb11, _0x284e02, _0x28d79c, _0x403795, _0x56f4e9) {
    _0x3f9b6b(_0x3bcb11, _0x284e02, _0x28d79c, _0x403795, 1, "keypress", _0x56f4e9);
    return 0;
  }
  function _0x127964(_0x3d4294, _0x59564e, _0x1b0b6a, _0x59b9d7, _0x18bdc4) {
    _0x3f9b6b(_0x3d4294, _0x59564e, _0x1b0b6a, _0x59b9d7, 3, "keyup", _0x18bdc4);
    return 0;
  }
  function _0xd9a318(_0x2cc0ad, _0x1f5be3, _0x4df451) {
    function _0x2db842() {
      _0x1c1467.call(null, _0x2cc0ad);
    }
    _0x3a9309(_0x2db842, _0x1f5be3, _0x4df451);
  }
  function _0xb613ea(_0x2838aa, _0x30f179, _0x2dfb49) {
    var _0x1efa7a = _0x2838aa >> 2;
    _0x5ce4f8[_0x1efa7a + 0] = _0x30f179.screenX;
    _0x5ce4f8[_0x1efa7a + 1] = _0x30f179.screenY;
    _0x5ce4f8[_0x1efa7a + 2] = _0x30f179.clientX;
    _0x5ce4f8[_0x1efa7a + 3] = _0x30f179.clientY;
    _0x5ce4f8[_0x1efa7a + 4] = _0x30f179.ctrlKey;
    _0x5ce4f8[_0x1efa7a + 5] = _0x30f179.shiftKey;
    _0x5ce4f8[_0x1efa7a + 6] = _0x30f179.altKey;
    _0x5ce4f8[_0x1efa7a + 7] = _0x30f179.metaKey;
    _0x4c83dc[_0x1efa7a * 2 + 16] = _0x30f179.button;
    _0x4c83dc[_0x1efa7a * 2 + 17] = _0x30f179.buttons;
    _0x5ce4f8[_0x1efa7a + 9] = _0x30f179.movementX;
    _0x5ce4f8[_0x1efa7a + 10] = _0x30f179.movementY;
    var _0x38c7e7 = _0x2ea1c0(_0x2dfb49);
    _0x5ce4f8[_0x1efa7a + 11] = _0x30f179.clientX - _0x38c7e7.left;
    _0x5ce4f8[_0x1efa7a + 12] = _0x30f179.clientY - _0x38c7e7.top;
  }
  function _0x370b40(_0x31868f, _0x9c0586, _0x1b0697, _0x2a4a62, _0x2f635a, _0x3ae0f1, _0x95dc7e) {
    if (!_0x2e5ba2.mouseEvent) {
      _0x2e5ba2.mouseEvent = _0x18375c(64);
    }
    _0x31868f = _0x85f95f(_0x31868f);
    function _0x4788a8(_0x217316) {
      var _0x4c90aa = _0x217316 || event;
      _0xb613ea(_0x2e5ba2.mouseEvent, _0x4c90aa, _0x31868f);
      if (function (_0x1ea8f7, _0x1db08f, _0x2ad752) {
        return _0x3b1023.apply(null, [_0x2a4a62, _0x1ea8f7, _0x1db08f, _0x2ad752]);
      }(_0x2f635a, _0x2e5ba2.mouseEvent, _0x9c0586)) {
        _0x4c90aa.preventDefault();
      }
    }
    var _0x3e49e3 = {
      target: _0x31868f,
      allowsDeferredCalls: _0x3ae0f1 != "mousemove" && _0x3ae0f1 != "mouseenter" && _0x3ae0f1 != "mouseleave",
      eventTypeString: _0x3ae0f1,
      callbackfunc: _0x2a4a62,
      handlerFunc: _0x4788a8,
      useCapture: _0x1b0697
    };
    _0x2e5ba2.registerOrRemoveHandler(_0x3e49e3);
  }
  function _0x54e826(_0x52e0ed, _0x307f81, _0x154f9d, _0x402f31, _0x54c638) {
    _0x370b40(_0x52e0ed, _0x307f81, _0x154f9d, _0x402f31, 5, "mousedown", _0x54c638);
    return 0;
  }
  function _0x220664(_0x1f15fc, _0x3dff5c, _0x50833e, _0x43046d, _0x20a9c4) {
    _0x370b40(_0x1f15fc, _0x3dff5c, _0x50833e, _0x43046d, 8, "mousemove", _0x20a9c4);
    return 0;
  }
  function _0x3f5f6b(_0x2fcc38, _0x4c354d, _0x5ecf8a, _0x5b2f7d, _0x1b9845) {
    _0x370b40(_0x2fcc38, _0x4c354d, _0x5ecf8a, _0x5b2f7d, 6, "mouseup", _0x1b9845);
    return 0;
  }
  function _0x4e9a0a(_0x46f268) {
    var _0x1b5c17 = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x2daa39 = !!_0x1b5c17;
    _0x5ce4f8[_0x46f268 >> 2] = _0x2daa39;
    var _0x27eb09 = _0x2e5ba2.getNodeNameForTarget(_0x1b5c17);
    var _0x41fe88 = _0x1b5c17 && _0x1b5c17.id ? _0x1b5c17.id : "";
    _0x4cad61(_0x27eb09, _0x46f268 + 4, 128);
    _0x4cad61(_0x41fe88, _0x46f268 + 132, 128);
  }
  function _0x258425(_0x30228f, _0x5f513e, _0x3c74b0, _0x548aa7, _0x4211df, _0x177aba, _0x595749) {
    if (!_0x2e5ba2.pointerlockChangeEvent) {
      _0x2e5ba2.pointerlockChangeEvent = _0x18375c(260);
    }
    function _0x4874c8(_0x16610e) {
      var _0x268d74 = _0x16610e || event;
      var _0x5f0b50 = _0x2e5ba2.pointerlockChangeEvent;
      _0x4e9a0a(_0x5f0b50);
      if (function (_0x1b5208, _0x41d68b, _0x507de8) {
        return _0x3b1023.apply(null, [_0x548aa7, _0x1b5208, _0x41d68b, _0x507de8]);
      }(_0x4211df, _0x5f0b50, _0x5f513e)) {
        _0x268d74.preventDefault();
      }
    }
    var _0x29d744 = {
      target: _0x30228f,
      eventTypeString: _0x177aba,
      callbackfunc: _0x548aa7,
      handlerFunc: _0x4874c8,
      useCapture: _0x3c74b0
    };
    _0x2e5ba2.registerOrRemoveHandler(_0x29d744);
  }
  function _0x4c58d8(_0x1d01bc, _0xaf2220, _0x1de9aa, _0x1eef26, _0x261ccf) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0x1d01bc = _0x85f95f(_0x1d01bc);
    if (!_0x1d01bc) {
      return -4;
    }
    _0x258425(_0x1d01bc, _0xaf2220, _0x1de9aa, _0x1eef26, 20, "pointerlockchange", _0x261ccf);
    _0x258425(_0x1d01bc, _0xaf2220, _0x1de9aa, _0x1eef26, 20, "mozpointerlockchange", _0x261ccf);
    _0x258425(_0x1d01bc, _0xaf2220, _0x1de9aa, _0x1eef26, 20, "webkitpointerlockchange", _0x261ccf);
    _0x258425(_0x1d01bc, _0xaf2220, _0x1de9aa, _0x1eef26, 20, "mspointerlockchange", _0x261ccf);
    return 0;
  }
  function _0x5e9079(_0x1b6392, _0x2a58d7, _0x350cc7, _0x14ce26, _0x2c6fa6, _0x5e983b, _0x4dbdab) {
    if (!_0x2e5ba2.touchEvent) {
      _0x2e5ba2.touchEvent = _0x18375c(1684);
    }
    _0x1b6392 = _0x85f95f(_0x1b6392);
    function _0xf3931a(_0x10e16e) {
      var _0x356104;
      var _0x1231bd = {};
      var _0x3d2ddf = _0x10e16e.touches;
      for (var _0x3b5584 = 0; _0x3b5584 < _0x3d2ddf.length; ++_0x3b5584) {
        _0x356104 = _0x3d2ddf[_0x3b5584];
        _0x356104.isChanged = _0x356104.onTarget = 0;
        _0x1231bd[_0x356104.identifier] = _0x356104;
      }
      for (var _0x3b5584 = 0; _0x3b5584 < _0x10e16e.changedTouches.length; ++_0x3b5584) {
        _0x356104 = _0x10e16e.changedTouches[_0x3b5584];
        _0x356104.isChanged = 1;
        _0x1231bd[_0x356104.identifier] = _0x356104;
      }
      for (var _0x3b5584 = 0; _0x3b5584 < _0x10e16e.targetTouches.length; ++_0x3b5584) {
        _0x1231bd[_0x10e16e.targetTouches[_0x3b5584].identifier].onTarget = 1;
      }
      var _0x2a868f = _0x2e5ba2.touchEvent;
      var _0x8f7dd0 = _0x2a868f >> 2;
      _0x5ce4f8[_0x8f7dd0 + 1] = _0x10e16e.ctrlKey;
      _0x5ce4f8[_0x8f7dd0 + 2] = _0x10e16e.shiftKey;
      _0x5ce4f8[_0x8f7dd0 + 3] = _0x10e16e.altKey;
      _0x5ce4f8[_0x8f7dd0 + 4] = _0x10e16e.metaKey;
      _0x8f7dd0 += 5;
      var _0x70eb1e = _0x2ea1c0(_0x1b6392);
      var _0x15a3c0 = 0;
      for (var _0x3b5584 in _0x1231bd) {
        var _0x356104 = _0x1231bd[_0x3b5584];
        _0x5ce4f8[_0x8f7dd0 + 0] = _0x356104.identifier;
        _0x5ce4f8[_0x8f7dd0 + 1] = _0x356104.screenX;
        _0x5ce4f8[_0x8f7dd0 + 2] = _0x356104.screenY;
        _0x5ce4f8[_0x8f7dd0 + 3] = _0x356104.clientX;
        _0x5ce4f8[_0x8f7dd0 + 4] = _0x356104.clientY;
        _0x5ce4f8[_0x8f7dd0 + 5] = _0x356104.pageX;
        _0x5ce4f8[_0x8f7dd0 + 6] = _0x356104.pageY;
        _0x5ce4f8[_0x8f7dd0 + 7] = _0x356104.isChanged;
        _0x5ce4f8[_0x8f7dd0 + 8] = _0x356104.onTarget;
        _0x5ce4f8[_0x8f7dd0 + 9] = _0x356104.clientX - _0x70eb1e.left;
        _0x5ce4f8[_0x8f7dd0 + 10] = _0x356104.clientY - _0x70eb1e.top;
        _0x8f7dd0 += 13;
        if (++_0x15a3c0 > 31) {
          break;
        }
      }
      _0x5ce4f8[_0x2a868f >> 2] = _0x15a3c0;
      if (function (_0x2b16ed, _0x15d475, _0x436213) {
        return _0x3b1023.apply(null, [_0x14ce26, _0x2b16ed, _0x15d475, _0x436213]);
      }(_0x2c6fa6, _0x2a868f, _0x2a58d7)) {
        _0x10e16e.preventDefault();
      }
    }
    var _0x36c6ef = {
      target: _0x1b6392,
      allowsDeferredCalls: _0x5e983b == "touchstart" || _0x5e983b == "touchend",
      eventTypeString: _0x5e983b,
      callbackfunc: _0x14ce26,
      handlerFunc: _0xf3931a,
      useCapture: _0x350cc7
    };
    _0x2e5ba2.registerOrRemoveHandler(_0x36c6ef);
  }
  function _0x10132c(_0x2db4d3, _0x2f5155, _0xaf9c6b, _0x484a04, _0xb489d7) {
    _0x5e9079(_0x2db4d3, _0x2f5155, _0xaf9c6b, _0x484a04, 25, "touchcancel", _0xb489d7);
    return 0;
  }
  function _0x18d49f(_0x539ae9, _0x304cde, _0xc388ba, _0x3baad4, _0x28a106) {
    _0x5e9079(_0x539ae9, _0x304cde, _0xc388ba, _0x3baad4, 23, "touchend", _0x28a106);
    return 0;
  }
  function _0x4f9105(_0x33b4ec, _0x27f16f, _0x213fa9, _0x522fd6, _0x4468f2) {
    _0x5e9079(_0x33b4ec, _0x27f16f, _0x213fa9, _0x522fd6, 24, "touchmove", _0x4468f2);
    return 0;
  }
  function _0x279911(_0x1c88ef, _0x5a34f3, _0x28e0d2, _0xafd51a, _0x5f3856) {
    _0x5e9079(_0x1c88ef, _0x5a34f3, _0x28e0d2, _0xafd51a, 22, "touchstart", _0x5f3856);
    return 0;
  }
  function _0x15121e(_0x36f349, _0x28d224, _0x43305f, _0x5d38a1, _0xc2b754, _0x55c5d5, _0x4284e4) {
    if (!_0x2e5ba2.wheelEvent) {
      _0x2e5ba2.wheelEvent = _0x18375c(96);
    }
    function _0x36d55d(_0x4e9a1b) {
      var _0x1644c7 = _0x4e9a1b || event;
      var _0x56e891 = _0x2e5ba2.wheelEvent;
      _0xb613ea(_0x56e891, _0x1644c7, _0x36f349);
      _0xbff719[_0x56e891 + 64 >> 3] = _0x1644c7.deltaX;
      _0xbff719[_0x56e891 + 72 >> 3] = _0x1644c7.deltaY;
      _0xbff719[_0x56e891 + 80 >> 3] = _0x1644c7.deltaZ;
      _0x5ce4f8[_0x56e891 + 88 >> 2] = _0x1644c7.deltaMode;
      if (function (_0x24a253, _0x435512, _0x282483) {
        return _0x3b1023.apply(null, [_0x5d38a1, _0x24a253, _0x435512, _0x282483]);
      }(_0xc2b754, _0x56e891, _0x28d224)) {
        _0x1644c7.preventDefault();
      }
    }
    var _0x55ed07 = {
      target: _0x36f349,
      allowsDeferredCalls: true,
      eventTypeString: _0x55c5d5,
      callbackfunc: _0x5d38a1,
      handlerFunc: _0x36d55d,
      useCapture: _0x43305f
    };
    _0x2e5ba2.registerOrRemoveHandler(_0x55ed07);
  }
  function _0x23656c(_0x67f436, _0x33557e, _0x222228, _0x11f58d, _0x44019b) {
    _0x67f436 = _0x85f95f(_0x67f436);
    if (typeof _0x67f436.onwheel !== "undefined") {
      _0x15121e(_0x67f436, _0x33557e, _0x222228, _0x11f58d, 9, "wheel", _0x44019b);
      return 0;
    } else {
      return -1;
    }
  }
  function _0x430587(_0x35b5ca) {
    var _0xcc3f33 = _0x10009c();
    while (_0x10009c() - _0xcc3f33 < _0x35b5ca) {}
  }
  function _0x585692(_0x22e8b7) {
    var _0x308f26 = _0x22e8b7.getExtension("ANGLE_instanced_arrays");
    if (_0x308f26) {
      _0x22e8b7.vertexAttribDivisor = function (_0x328345, _0x483d94) {
        _0x308f26.vertexAttribDivisorANGLE(_0x328345, _0x483d94);
      };
      _0x22e8b7.drawArraysInstanced = function (_0x458df4, _0x33b8ac, _0x42f23f, _0x3801e2) {
        _0x308f26.drawArraysInstancedANGLE(_0x458df4, _0x33b8ac, _0x42f23f, _0x3801e2);
      };
      _0x22e8b7.drawElementsInstanced = function (_0x4365cf, _0x10eeea, _0x4dd335, _0x21e206, _0x47f067) {
        _0x308f26.drawElementsInstancedANGLE(_0x4365cf, _0x10eeea, _0x4dd335, _0x21e206, _0x47f067);
      };
      return 1;
    }
  }
  function _0x2a220f(_0x42f3f6) {
    var _0x4434fc = _0x42f3f6.getExtension("OES_vertex_array_object");
    if (_0x4434fc) {
      _0x42f3f6.createVertexArray = function () {
        return _0x4434fc.createVertexArrayOES();
      };
      _0x42f3f6.deleteVertexArray = function (_0x203f42) {
        _0x4434fc.deleteVertexArrayOES(_0x203f42);
      };
      _0x42f3f6.bindVertexArray = function (_0x67c674) {
        _0x4434fc.bindVertexArrayOES(_0x67c674);
      };
      _0x42f3f6.isVertexArray = function (_0x547915) {
        return _0x4434fc.isVertexArrayOES(_0x547915);
      };
      return 1;
    }
  }
  function _0x20099f(_0x39b960) {
    var _0x378620 = _0x39b960.getExtension("WEBGL_draw_buffers");
    if (_0x378620) {
      _0x39b960.drawBuffers = function (_0x3d8870, _0x16eba4) {
        _0x378620.drawBuffersWEBGL(_0x3d8870, _0x16eba4);
      };
      return 1;
    }
  }
  function _0x305128(_0x4e3a59) {
    return !!(_0x4e3a59.dibvbi = _0x4e3a59.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x5ac21f(_0x3a2559) {
    return !!(_0x3a2559.mdibvbi = _0x3a2559.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0xca4436(_0x473beb) {
    return !!(_0x473beb.multiDrawWebgl = _0x473beb.getExtension("WEBGL_multi_draw"));
  }
  var _0x3ba29d = {
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
    recordError: function _0x10f954(_0x168550) {
      if (!_0x3ba29d.lastError) {
        _0x3ba29d.lastError = _0x168550;
      }
    },
    getNewId: function (_0x46602b) {
      var _0x1717ce = _0x3ba29d.counter++;
      for (var _0x324ee3 = _0x46602b.length; _0x324ee3 < _0x1717ce; _0x324ee3++) {
        _0x46602b[_0x324ee3] = null;
      }
      return _0x1717ce;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x20782b) {
      return 32 - Math.clz32(_0x20782b === 0 ? 0 : _0x20782b - 1);
    },
    generateTempBuffers: function (_0x59bc88, _0x51ae1b) {
      var _0x19bad4 = _0x3ba29d.log2ceilLookup(_0x3ba29d.MAX_TEMP_BUFFER_SIZE);
      _0x51ae1b.tempVertexBufferCounters1 = [];
      _0x51ae1b.tempVertexBufferCounters2 = [];
      _0x51ae1b.tempVertexBufferCounters1.length = _0x51ae1b.tempVertexBufferCounters2.length = _0x19bad4 + 1;
      _0x51ae1b.tempVertexBuffers1 = [];
      _0x51ae1b.tempVertexBuffers2 = [];
      _0x51ae1b.tempVertexBuffers1.length = _0x51ae1b.tempVertexBuffers2.length = _0x19bad4 + 1;
      _0x51ae1b.tempIndexBuffers = [];
      _0x51ae1b.tempIndexBuffers.length = _0x19bad4 + 1;
      for (var _0x5edf1e = 0; _0x5edf1e <= _0x19bad4; ++_0x5edf1e) {
        _0x51ae1b.tempIndexBuffers[_0x5edf1e] = null;
        _0x51ae1b.tempVertexBufferCounters1[_0x5edf1e] = _0x51ae1b.tempVertexBufferCounters2[_0x5edf1e] = 0;
        var _0x5ee047 = _0x3ba29d.numTempVertexBuffersPerSize;
        _0x51ae1b.tempVertexBuffers1[_0x5edf1e] = [];
        _0x51ae1b.tempVertexBuffers2[_0x5edf1e] = [];
        var _0x473877 = _0x51ae1b.tempVertexBuffers1[_0x5edf1e];
        var _0x48431e = _0x51ae1b.tempVertexBuffers2[_0x5edf1e];
        _0x473877.length = _0x48431e.length = _0x5ee047;
        for (var _0x250c4d = 0; _0x250c4d < _0x5ee047; ++_0x250c4d) {
          _0x473877[_0x250c4d] = _0x48431e[_0x250c4d] = null;
        }
      }
      if (_0x59bc88) {
        _0x51ae1b.tempQuadIndexBuffer = _0x3afc48.createBuffer();
        _0x51ae1b.GLctx.bindBuffer(34963, _0x51ae1b.tempQuadIndexBuffer);
        var _0x769423 = _0x3ba29d.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0x193e70 = new Uint16Array(_0x769423);
        var _0x5edf1e = 0;
        var _0xe99b98 = 0;
        while (1) {
          _0x193e70[_0x5edf1e++] = _0xe99b98;
          if (_0x5edf1e >= _0x769423) {
            break;
          }
          _0x193e70[_0x5edf1e++] = _0xe99b98 + 1;
          if (_0x5edf1e >= _0x769423) {
            break;
          }
          _0x193e70[_0x5edf1e++] = _0xe99b98 + 2;
          if (_0x5edf1e >= _0x769423) {
            break;
          }
          _0x193e70[_0x5edf1e++] = _0xe99b98;
          if (_0x5edf1e >= _0x769423) {
            break;
          }
          _0x193e70[_0x5edf1e++] = _0xe99b98 + 2;
          if (_0x5edf1e >= _0x769423) {
            break;
          }
          _0x193e70[_0x5edf1e++] = _0xe99b98 + 3;
          if (_0x5edf1e >= _0x769423) {
            break;
          }
          _0xe99b98 += 4;
        }
        _0x51ae1b.GLctx.bufferData(34963, _0x193e70, 35044);
        _0x51ae1b.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0xa43241(_0x429e26) {
      var _0x128e0f = _0x3ba29d.log2ceilLookup(_0x429e26);
      var _0xca3e40 = _0x3ba29d.currentContext.tempVertexBuffers1[_0x128e0f];
      var _0xed5531 = _0x3ba29d.currentContext.tempVertexBufferCounters1[_0x128e0f];
      _0x3ba29d.currentContext.tempVertexBufferCounters1[_0x128e0f] = _0x3ba29d.currentContext.tempVertexBufferCounters1[_0x128e0f] + 1 & _0x3ba29d.numTempVertexBuffersPerSize - 1;
      var _0x479f70 = _0xca3e40[_0xed5531];
      if (_0x479f70) {
        return _0x479f70;
      }
      var _0x4a4943 = _0x3afc48.getParameter(34964);
      _0xca3e40[_0xed5531] = _0x3afc48.createBuffer();
      _0x3afc48.bindBuffer(34962, _0xca3e40[_0xed5531]);
      _0x3afc48.bufferData(34962, 1 << _0x128e0f, 35048);
      _0x3afc48.bindBuffer(34962, _0x4a4943);
      return _0xca3e40[_0xed5531];
    },
    getTempIndexBuffer: function _0x340e01(_0x3228d7) {
      var _0x531f68 = _0x3ba29d.log2ceilLookup(_0x3228d7);
      var _0x1c356e = _0x3ba29d.currentContext.tempIndexBuffers[_0x531f68];
      if (_0x1c356e) {
        return _0x1c356e;
      }
      var _0x7110a6 = _0x3afc48.getParameter(34965);
      _0x3ba29d.currentContext.tempIndexBuffers[_0x531f68] = _0x3afc48.createBuffer();
      _0x3afc48.bindBuffer(34963, _0x3ba29d.currentContext.tempIndexBuffers[_0x531f68]);
      _0x3afc48.bufferData(34963, 1 << _0x531f68, 35048);
      _0x3afc48.bindBuffer(34963, _0x7110a6);
      return _0x3ba29d.currentContext.tempIndexBuffers[_0x531f68];
    },
    newRenderingFrameStarted: function _0x33ecef() {
      if (!_0x3ba29d.currentContext) {
        return;
      }
      var _0x2a7dd9 = _0x3ba29d.currentContext.tempVertexBuffers1;
      _0x3ba29d.currentContext.tempVertexBuffers1 = _0x3ba29d.currentContext.tempVertexBuffers2;
      _0x3ba29d.currentContext.tempVertexBuffers2 = _0x2a7dd9;
      _0x2a7dd9 = _0x3ba29d.currentContext.tempVertexBufferCounters1;
      _0x3ba29d.currentContext.tempVertexBufferCounters1 = _0x3ba29d.currentContext.tempVertexBufferCounters2;
      _0x3ba29d.currentContext.tempVertexBufferCounters2 = _0x2a7dd9;
      var _0x52e5db = _0x3ba29d.log2ceilLookup(_0x3ba29d.MAX_TEMP_BUFFER_SIZE);
      for (var _0x4fc76f = 0; _0x4fc76f <= _0x52e5db; ++_0x4fc76f) {
        _0x3ba29d.currentContext.tempVertexBufferCounters1[_0x4fc76f] = 0;
      }
    },
    getSource: function (_0x1f2d1b, _0xcf002c, _0x2029e9, _0x2f1fbf) {
      var _0x469a83 = "";
      for (var _0x3cb571 = 0; _0x3cb571 < _0xcf002c; ++_0x3cb571) {
        var _0x3316d5 = _0x2f1fbf ? _0x5ce4f8[_0x2f1fbf + _0x3cb571 * 4 >> 2] : -1;
        _0x469a83 += _0x51c742(_0x5ce4f8[_0x2029e9 + _0x3cb571 * 4 >> 2], _0x3316d5 < 0 ? undefined : _0x3316d5);
      }
      return _0x469a83;
    },
    calcBufLength: function _0x44a618(_0xc06c17, _0x59589c, _0x6be30, _0x2aafe2) {
      if (_0x6be30 > 0) {
        return _0x2aafe2 * _0x6be30;
      }
      var _0x2680b3 = _0x3ba29d.byteSizeByType[_0x59589c - _0x3ba29d.byteSizeByTypeRoot];
      return _0xc06c17 * _0x2680b3 * _0x2aafe2;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0x4d2e29(_0x1cdb3c) {
      _0x3ba29d.resetBufferBinding = false;
      for (var _0x162b21 = 0; _0x162b21 < _0x3ba29d.currentContext.maxVertexAttribs; ++_0x162b21) {
        var _0x53ecbd = _0x3ba29d.currentContext.clientBuffers[_0x162b21];
        if (!_0x53ecbd.clientside || !_0x53ecbd.enabled) {
          continue;
        }
        _0x3ba29d.resetBufferBinding = true;
        var _0x3e27b1 = _0x3ba29d.calcBufLength(_0x53ecbd.size, _0x53ecbd.type, _0x53ecbd.stride, _0x1cdb3c);
        var _0x17d56d = _0x3ba29d.getTempVertexBuffer(_0x3e27b1);
        _0x3afc48.bindBuffer(34962, _0x17d56d);
        _0x3afc48.bufferSubData(34962, 0, _0x12f402.subarray(_0x53ecbd.ptr, _0x53ecbd.ptr + _0x3e27b1));
        _0x53ecbd.vertexAttribPointerAdaptor.call(_0x3afc48, _0x162b21, _0x53ecbd.size, _0x53ecbd.type, _0x53ecbd.normalized, _0x53ecbd.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0x2fd987() {
      if (_0x3ba29d.resetBufferBinding) {
        _0x3afc48.bindBuffer(34962, _0x3ba29d.buffers[_0x3afc48.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0x5e8590, _0x41d46e) {
      if (!_0x5e8590.getContextSafariWebGL2Fixed) {
        _0x5e8590.getContextSafariWebGL2Fixed = _0x5e8590.getContext;
        _0x5e8590.getContext = function (_0x473b57, _0x450166) {
          var _0x4e1615 = _0x5e8590.getContextSafariWebGL2Fixed(_0x473b57, _0x450166);
          if (_0x473b57 == "webgl" == _0x4e1615 instanceof WebGLRenderingContext) {
            return _0x4e1615;
          } else {
            return null;
          }
        };
      }
      var _0x1ce4f2 = _0x41d46e.majorVersion > 1 ? _0x5e8590.getContext("webgl2", _0x41d46e) : _0x5e8590.getContext("webgl", _0x41d46e);
      if (!_0x1ce4f2) {
        return 0;
      }
      var _0x32dd60 = _0x3ba29d.registerContext(_0x1ce4f2, _0x41d46e);
      return _0x32dd60;
    },
    registerContext: function (_0x2b8b36, _0x36a100) {
      var _0xfb8fbb = _0x3ba29d.getNewId(_0x3ba29d.contexts);
      var _0x3974da = {
        handle: _0xfb8fbb,
        attributes: _0x36a100,
        version: _0x36a100.majorVersion,
        GLctx: _0x2b8b36
      };
      if (_0x2b8b36.canvas) {
        _0x2b8b36.canvas.GLctxObject = _0x3974da;
      }
      _0x3ba29d.contexts[_0xfb8fbb] = _0x3974da;
      if (typeof _0x36a100.enableExtensionsByDefault === "undefined" || _0x36a100.enableExtensionsByDefault) {
        _0x3ba29d.initExtensions(_0x3974da);
      }
      _0x3974da.maxVertexAttribs = _0x3974da.GLctx.getParameter(34921);
      _0x3974da.clientBuffers = [];
      for (var _0x234392 = 0; _0x234392 < _0x3974da.maxVertexAttribs; _0x234392++) {
        _0x3974da.clientBuffers[_0x234392] = {
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
      _0x3ba29d.generateTempBuffers(false, _0x3974da);
      return _0xfb8fbb;
    },
    makeContextCurrent: function (_0x29fd17) {
      _0x3ba29d.currentContext = _0x3ba29d.contexts[_0x29fd17];
      _0x5c0d54.ctx = _0x3afc48 = _0x3ba29d.currentContext && _0x3ba29d.currentContext.GLctx;
      return !_0x29fd17 || !!_0x3afc48;
    },
    getContext: function (_0x1e42bd) {
      return _0x3ba29d.contexts[_0x1e42bd];
    },
    deleteContext: function (_0x2f23a8) {
      if (_0x3ba29d.currentContext === _0x3ba29d.contexts[_0x2f23a8]) {
        _0x3ba29d.currentContext = null;
      }
      if (typeof _0x2e5ba2 === "object") {
        _0x2e5ba2.removeAllHandlersOnTarget(_0x3ba29d.contexts[_0x2f23a8].GLctx.canvas);
      }
      if (_0x3ba29d.contexts[_0x2f23a8] && _0x3ba29d.contexts[_0x2f23a8].GLctx.canvas) {
        _0x3ba29d.contexts[_0x2f23a8].GLctx.canvas.GLctxObject = undefined;
      }
      _0x3ba29d.contexts[_0x2f23a8] = null;
    },
    initExtensions: function (_0x55570b) {
      if (!_0x55570b) {
        _0x55570b = _0x3ba29d.currentContext;
      }
      if (_0x55570b.initExtensionsDone) {
        return;
      }
      _0x55570b.initExtensionsDone = true;
      var _0x297dde = _0x55570b.GLctx;
      _0x585692(_0x297dde);
      _0x2a220f(_0x297dde);
      _0x20099f(_0x297dde);
      _0x305128(_0x297dde);
      _0x5ac21f(_0x297dde);
      if (_0x55570b.version >= 2) {
        _0x297dde.disjointTimerQueryExt = _0x297dde.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x55570b.version < 2 || !_0x297dde.disjointTimerQueryExt) {
        _0x297dde.disjointTimerQueryExt = _0x297dde.getExtension("EXT_disjoint_timer_query");
      }
      _0xca4436(_0x297dde);
      var _0x50788c = _0x297dde.getSupportedExtensions() || [];
      _0x50788c.forEach(function (_0x6d6586) {
        if (!_0x6d6586.includes("lose_context") && !_0x6d6586.includes("debug")) {
          _0x297dde.getExtension(_0x6d6586);
        }
      });
    }
  };
  var _0x3beffa = ["default", "low-power", "high-performance"];
  function _0x405780(_0x4112c3, _0x48056a) {
    var _0x432b1f = _0x48056a >> 2;
    var _0x3a913d = _0x5ce4f8[_0x432b1f + 6];
    var _0x24284e = {
      alpha: !!_0x5ce4f8[_0x432b1f + 0],
      depth: !!_0x5ce4f8[_0x432b1f + 1],
      stencil: !!_0x5ce4f8[_0x432b1f + 2],
      antialias: !!_0x5ce4f8[_0x432b1f + 3],
      premultipliedAlpha: !!_0x5ce4f8[_0x432b1f + 4],
      preserveDrawingBuffer: !!_0x5ce4f8[_0x432b1f + 5],
      powerPreference: _0x3beffa[_0x3a913d],
      failIfMajorPerformanceCaveat: !!_0x5ce4f8[_0x432b1f + 7],
      majorVersion: _0x5ce4f8[_0x432b1f + 8],
      minorVersion: _0x5ce4f8[_0x432b1f + 9],
      enableExtensionsByDefault: _0x5ce4f8[_0x432b1f + 10],
      explicitSwapControl: _0x5ce4f8[_0x432b1f + 11],
      proxyContextToMainThread: _0x5ce4f8[_0x432b1f + 12],
      renderViaOffscreenBackBuffer: _0x5ce4f8[_0x432b1f + 13]
    };
    var _0x4e7e90 = _0x3bf707(_0x4112c3);
    if (!_0x4e7e90) {
      return 0;
    }
    if (_0x24284e.explicitSwapControl) {
      return 0;
    }
    var _0x5df1c2 = _0x3ba29d.createContext(_0x4e7e90, _0x24284e);
    return _0x5df1c2;
  }
  function _0x4b44f7(_0x43bfae, _0x394dfa) {
    return _0x405780(_0x43bfae, _0x394dfa);
  }
  function _0x1d7bc6() {
    if (_0x3ba29d.currentContext) {
      return _0x3ba29d.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0x21dbcf() {
    return _0x1d7bc6();
  }
  _0x5c0d54._emscripten_webgl_get_current_context = _0x21dbcf;
  function _0xf53aa(_0x13fa12) {
    var _0x26faff = _0x3ba29d.makeContextCurrent(_0x13fa12);
    if (_0x26faff) {
      return 0;
    } else {
      return -5;
    }
  }
  _0x5c0d54._emscripten_webgl_make_context_current = _0xf53aa;
  function _0xa27c90(_0x13002b) {
    if (_0x3ba29d.currentContext == _0x13002b) {
      _0x3ba29d.currentContext = 0;
    }
    _0x3ba29d.deleteContext(_0x13002b);
  }
  function _0x2a4b47(_0xe377c, _0x5033e9) {
    var _0x2fa531 = _0x3ba29d.getContext(_0xe377c);
    var _0x4fe1a0 = _0x51c742(_0x5033e9);
    if (_0x4fe1a0.startsWith("GL_")) {
      _0x4fe1a0 = _0x4fe1a0.substr(3);
    }
    if (_0x4fe1a0 == "ANGLE_instanced_arrays") {
      _0x585692(_0x3afc48);
    }
    if (_0x4fe1a0 == "OES_vertex_array_object") {
      _0x2a220f(_0x3afc48);
    }
    if (_0x4fe1a0 == "WEBGL_draw_buffers") {
      _0x20099f(_0x3afc48);
    }
    if (_0x4fe1a0 == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0x305128(_0x3afc48);
    }
    if (_0x4fe1a0 == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x5ac21f(_0x3afc48);
    }
    if (_0x4fe1a0 == "WEBGL_multi_draw") {
      _0xca4436(_0x3afc48);
    }
    var _0x3b5fbd = _0x2fa531.GLctx.getExtension(_0x4fe1a0);
    return !!_0x3b5fbd;
  }
  function _0x459de3(_0x5b28b9) {
    var _0x51df94 = _0x5b28b9 >> 2;
    for (var _0x5980ad = 0; _0x5980ad < 14; ++_0x5980ad) {
      _0x5ce4f8[_0x51df94 + _0x5980ad] = 0;
    }
    _0x5ce4f8[_0x51df94 + 0] = _0x5ce4f8[_0x51df94 + 1] = _0x5ce4f8[_0x51df94 + 3] = _0x5ce4f8[_0x51df94 + 4] = _0x5ce4f8[_0x51df94 + 8] = _0x5ce4f8[_0x51df94 + 10] = 1;
  }
  var _0x1ee982 = {};
  function _0x3cf008() {
    return _0x428320 || "./this.program";
  }
  function _0x518bc7() {
    if (!_0x518bc7.strings) {
      var _0x1de2f5 = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0x1f3525 = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0x1de2f5,
        _: _0x3cf008()
      };
      for (var _0x2fc5b9 in _0x1ee982) {
        _0x1f3525[_0x2fc5b9] = _0x1ee982[_0x2fc5b9];
      }
      var _0x2a784b = [];
      for (var _0x2fc5b9 in _0x1f3525) {
        _0x2a784b.push(_0x2fc5b9 + "=" + _0x1f3525[_0x2fc5b9]);
      }
      _0x518bc7.strings = _0x2a784b;
    }
    return _0x518bc7.strings;
  }
  function _0x9dcd4a(_0x294348, _0x3d685b) {
    try {
      var _0x2efa63 = 0;
      _0x518bc7().forEach(function (_0x225eb0, _0x51bf0b) {
        var _0xbb7495 = _0x3d685b + _0x2efa63;
        _0x5ce4f8[_0x294348 + _0x51bf0b * 4 >> 2] = _0xbb7495;
        _0x4dcdc2(_0x225eb0, _0xbb7495);
        _0x2efa63 += _0x225eb0.length + 1;
      });
      return 0;
    } catch (_0x2c47fe) {
      if (typeof _0x453483 === "undefined" || !(_0x2c47fe instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x2c47fe);
      }
      return _0x2c47fe.errno;
    }
  }
  function _0x4aca4e(_0x51251e, _0x57ee61) {
    try {
      var _0x511b90 = _0x518bc7();
      _0x5ce4f8[_0x51251e >> 2] = _0x511b90.length;
      var _0x2d1785 = 0;
      _0x511b90.forEach(function (_0x566722) {
        _0x2d1785 += _0x566722.length + 1;
      });
      _0x5ce4f8[_0x57ee61 >> 2] = _0x2d1785;
      return 0;
    } catch (_0x1f6187) {
      if (typeof _0x453483 === "undefined" || !(_0x1f6187 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x1f6187);
      }
      return _0x1f6187.errno;
    }
  }
  function _0x5be321(_0x1a8d58) {
    try {
      var _0x5bdb7c = _0x167ead.getStreamFromFD(_0x1a8d58);
      _0x453483.close(_0x5bdb7c);
      return 0;
    } catch (_0x52d1d3) {
      if (typeof _0x453483 === "undefined" || !(_0x52d1d3 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x52d1d3);
      }
      return _0x52d1d3.errno;
    }
  }
  function _0x341973(_0x536f89, _0x1b767f) {
    try {
      var _0x453681 = _0x167ead.getStreamFromFD(_0x536f89);
      var _0x4b4a39 = _0x453681.tty ? 2 : _0x453483.isDir(_0x453681.mode) ? 3 : _0x453483.isLink(_0x453681.mode) ? 7 : 4;
      _0x28416d[_0x1b767f >> 0] = _0x4b4a39;
      return 0;
    } catch (_0x59af62) {
      if (typeof _0x453483 === "undefined" || !(_0x59af62 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x59af62);
      }
      return _0x59af62.errno;
    }
  }
  function _0x536321(_0x431065, _0x2d0fc0, _0x27d9c0, _0x280e9a) {
    try {
      var _0x314a14 = _0x167ead.getStreamFromFD(_0x431065);
      var _0x2958ac = _0x167ead.doReadv(_0x314a14, _0x2d0fc0, _0x27d9c0);
      _0x5ce4f8[_0x280e9a >> 2] = _0x2958ac;
      return 0;
    } catch (_0x10ac25) {
      if (typeof _0x453483 === "undefined" || !(_0x10ac25 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x10ac25);
      }
      return _0x10ac25.errno;
    }
  }
  function _0x5c244b(_0x39893b, _0x3e45aa, _0x182ae5, _0x5b0933, _0x1c8040) {
    try {
      var _0x37d013 = _0x167ead.getStreamFromFD(_0x39893b);
      var _0x40013b = 4294967296;
      var _0x33c6b3 = _0x182ae5 * _0x40013b + (_0x3e45aa >>> 0);
      var _0x3a8943 = 9007199254740992;
      if (_0x33c6b3 <= -_0x3a8943 || _0x33c6b3 >= _0x3a8943) {
        return -61;
      }
      _0x453483.llseek(_0x37d013, _0x33c6b3, _0x5b0933);
      _0x2bb7d8 = [_0x37d013.position >>> 0, (_0x29224d = _0x37d013.position, +Math.abs(_0x29224d) >= 1 ? _0x29224d > 0 ? (Math.min(+Math.floor(_0x29224d / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x29224d - +(~~_0x29224d >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x5ce4f8[_0x1c8040 >> 2] = _0x2bb7d8[0];
      _0x5ce4f8[_0x1c8040 + 4 >> 2] = _0x2bb7d8[1];
      if (_0x37d013.getdents && _0x33c6b3 === 0 && _0x5b0933 === 0) {
        _0x37d013.getdents = null;
      }
      return 0;
    } catch (_0x429057) {
      if (typeof _0x453483 === "undefined" || !(_0x429057 instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x429057);
      }
      return _0x429057.errno;
    }
  }
  function _0x3f5866(_0x1a23d7, _0x259b4b, _0x31690d, _0x1db91c) {
    try {
      var _0x406d57 = _0x167ead.getStreamFromFD(_0x1a23d7);
      var _0x31586d = _0x167ead.doWritev(_0x406d57, _0x259b4b, _0x31690d);
      _0x5ce4f8[_0x1db91c >> 2] = _0x31586d;
      return 0;
    } catch (_0x35688c) {
      if (typeof _0x453483 === "undefined" || !(_0x35688c instanceof _0x453483.ErrnoError)) {
        _0x57adfd(_0x35688c);
      }
      return _0x35688c.errno;
    }
  }
  function _0x580dbf(_0x4c3bd4, _0x224fff) {
    return 0;
  }
  function _0x19fd33() {
    return _0x43ef0f();
  }
  function _0x2507e5(_0x17c9d4, _0x4f16b8, _0x58bbb9, _0x3f99c5) {
    var _0x296ecf = 0;
    var _0x459a98 = 0;
    var _0x2cba79 = 0;
    var _0x555207 = 0;
    var _0x110723 = 0;
    var _0x7f791c = 0;
    var _0x2c8259;
    function _0xdccf4b(_0x4b8f2c, _0x6725a1, _0x488d0e, _0x19fd3e, _0x2ba7db, _0x3fbfc0) {
      var _0x3dec53;
      var _0x5448eb;
      var _0x5dc07a;
      var _0x4a1676;
      _0x5448eb = _0x4b8f2c === 10 ? 28 : 16;
      _0x2ba7db = _0x4b8f2c === 10 ? _0x3b9f82(_0x2ba7db) : _0x4db452(_0x2ba7db);
      _0x3dec53 = _0x18375c(_0x5448eb);
      _0x4a1676 = _0x29a5b5(_0x3dec53, _0x4b8f2c, _0x2ba7db, _0x3fbfc0);
      _0x1f7fa5(!_0x4a1676);
      _0x5dc07a = _0x18375c(32);
      _0x5ce4f8[_0x5dc07a + 4 >> 2] = _0x4b8f2c;
      _0x5ce4f8[_0x5dc07a + 8 >> 2] = _0x6725a1;
      _0x5ce4f8[_0x5dc07a + 12 >> 2] = _0x488d0e;
      _0x5ce4f8[_0x5dc07a + 24 >> 2] = _0x19fd3e;
      _0x5ce4f8[_0x5dc07a + 20 >> 2] = _0x3dec53;
      if (_0x4b8f2c === 10) {
        _0x5ce4f8[_0x5dc07a + 16 >> 2] = 28;
      } else {
        _0x5ce4f8[_0x5dc07a + 16 >> 2] = 16;
      }
      _0x5ce4f8[_0x5dc07a + 28 >> 2] = 0;
      return _0x5dc07a;
    }
    if (_0x58bbb9) {
      _0x2cba79 = _0x5ce4f8[_0x58bbb9 >> 2];
      _0x555207 = _0x5ce4f8[_0x58bbb9 + 4 >> 2];
      _0x110723 = _0x5ce4f8[_0x58bbb9 + 8 >> 2];
      _0x7f791c = _0x5ce4f8[_0x58bbb9 + 12 >> 2];
    }
    if (_0x110723 && !_0x7f791c) {
      _0x7f791c = _0x110723 === 2 ? 17 : 6;
    }
    if (!_0x110723 && _0x7f791c) {
      _0x110723 = _0x7f791c === 17 ? 2 : 1;
    }
    if (_0x7f791c === 0) {
      _0x7f791c = 6;
    }
    if (_0x110723 === 0) {
      _0x110723 = 1;
    }
    if (!_0x17c9d4 && !_0x4f16b8) {
      return -2;
    }
    if (_0x2cba79 & ~1087) {
      return -1;
    }
    if (_0x58bbb9 !== 0 && _0x5ce4f8[_0x58bbb9 >> 2] & 2 && !_0x17c9d4) {
      return -1;
    }
    if (_0x2cba79 & 32) {
      return -2;
    }
    if (_0x110723 !== 0 && _0x110723 !== 1 && _0x110723 !== 2) {
      return -7;
    }
    if (_0x555207 !== 0 && _0x555207 !== 2 && _0x555207 !== 10) {
      return -6;
    }
    if (_0x4f16b8) {
      _0x4f16b8 = _0x51c742(_0x4f16b8);
      _0x459a98 = parseInt(_0x4f16b8, 10);
      if (isNaN(_0x459a98)) {
        if (_0x2cba79 & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0x17c9d4) {
      if (_0x555207 === 0) {
        _0x555207 = 2;
      }
      if ((_0x2cba79 & 1) === 0) {
        if (_0x555207 === 2) {
          _0x296ecf = _0x245d50(2130706433);
        } else {
          _0x296ecf = [0, 0, 0, 1];
        }
      }
      _0x2c8259 = _0xdccf4b(_0x555207, _0x110723, _0x7f791c, null, _0x296ecf, _0x459a98);
      _0x5ce4f8[_0x3f99c5 >> 2] = _0x2c8259;
      return 0;
    }
    _0x17c9d4 = _0x51c742(_0x17c9d4);
    _0x296ecf = _0x25739d(_0x17c9d4);
    if (_0x296ecf !== null) {
      if (_0x555207 === 0 || _0x555207 === 2) {
        _0x555207 = 2;
      } else if (_0x555207 === 10 && _0x2cba79 & 8) {
        _0x296ecf = [0, 0, _0x245d50(65535), _0x296ecf];
        _0x555207 = 10;
      } else {
        return -2;
      }
    } else {
      _0x296ecf = _0x2dabec(_0x17c9d4);
      if (_0x296ecf !== null) {
        if (_0x555207 === 0 || _0x555207 === 10) {
          _0x555207 = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0x296ecf != null) {
      _0x2c8259 = _0xdccf4b(_0x555207, _0x110723, _0x7f791c, _0x17c9d4, _0x296ecf, _0x459a98);
      _0x5ce4f8[_0x3f99c5 >> 2] = _0x2c8259;
      return 0;
    }
    if (_0x2cba79 & 4) {
      return -2;
    }
    _0x17c9d4 = _0x548ba6.lookup_name(_0x17c9d4);
    _0x296ecf = _0x25739d(_0x17c9d4);
    if (_0x555207 === 0) {
      _0x555207 = 2;
    } else if (_0x555207 === 10) {
      _0x296ecf = [0, 0, _0x245d50(65535), _0x296ecf];
    }
    _0x2c8259 = _0xdccf4b(_0x555207, _0x110723, _0x7f791c, null, _0x296ecf, _0x459a98);
    _0x5ce4f8[_0x3f99c5 >> 2] = _0x2c8259;
    return 0;
  }
  function _0x5e3632(_0x5cc509) {
    var _0x1910f9 = _0x18375c(20);
    var _0x51079c = _0x18375c(_0x5cc509.length + 1);
    _0x4cad61(_0x5cc509, _0x51079c, _0x5cc509.length + 1);
    _0x5ce4f8[_0x1910f9 >> 2] = _0x51079c;
    var _0x29e0d2 = _0x18375c(4);
    _0x5ce4f8[_0x29e0d2 >> 2] = 0;
    _0x5ce4f8[_0x1910f9 + 4 >> 2] = _0x29e0d2;
    var _0x68e0c4 = 2;
    _0x5ce4f8[_0x1910f9 + 8 >> 2] = _0x68e0c4;
    _0x5ce4f8[_0x1910f9 + 12 >> 2] = 4;
    var _0x1941a2 = _0x18375c(12);
    _0x5ce4f8[_0x1941a2 >> 2] = _0x1941a2 + 8;
    _0x5ce4f8[_0x1941a2 + 4 >> 2] = 0;
    _0x5ce4f8[_0x1941a2 + 8 >> 2] = _0x25739d(_0x548ba6.lookup_name(_0x5cc509));
    _0x5ce4f8[_0x1910f9 + 16 >> 2] = _0x1941a2;
    return _0x1910f9;
  }
  function _0x273e4a(_0x4051da, _0x44d934, _0x3f3e94) {
    if (_0x3f3e94 !== 2) {
      _0x249f9c(5);
      return null;
    }
    _0x4051da = _0x5ce4f8[_0x4051da >> 2];
    var _0x48ffb9 = _0x4db452(_0x4051da);
    var _0x5a24aa = _0x548ba6.lookup_addr(_0x48ffb9);
    if (_0x5a24aa) {
      _0x48ffb9 = _0x5a24aa;
    }
    return _0x5e3632(_0x48ffb9);
  }
  function _0x358535(_0x33ef79) {
    return _0x5e3632(_0x51c742(_0x33ef79));
  }
  function _0x4f5b82(_0x5f233c, _0x21b95d, _0x2296ab, _0x44a0dc, _0x4ee6cd, _0x3ebc0c, _0x5f1bb0) {
    var _0xd3628b = _0x4beb82(_0x5f233c, _0x21b95d);
    if (_0xd3628b.errno) {
      return -6;
    }
    var _0x668f33 = _0xd3628b.port;
    var _0x558f44 = _0xd3628b.addr;
    var _0x533cf0 = false;
    if (_0x2296ab && _0x44a0dc) {
      var _0xaf3178;
      if (_0x5f1bb0 & 1 || !(_0xaf3178 = _0x548ba6.lookup_addr(_0x558f44))) {
        if (_0x5f1bb0 & 8) {
          return -2;
        }
      } else {
        _0x558f44 = _0xaf3178;
      }
      var _0x3c6e3e = _0x4cad61(_0x558f44, _0x2296ab, _0x44a0dc);
      if (_0x3c6e3e + 1 >= _0x44a0dc) {
        _0x533cf0 = true;
      }
    }
    if (_0x4ee6cd && _0x3ebc0c) {
      _0x668f33 = "" + _0x668f33;
      var _0x3c6e3e = _0x4cad61(_0x668f33, _0x4ee6cd, _0x3ebc0c);
      if (_0x3c6e3e + 1 >= _0x3ebc0c) {
        _0x533cf0 = true;
      }
    }
    if (_0x533cf0) {
      return -12;
    }
    return 0;
  }
  function _0x30d8ff() {
    throw "getpwuid: TODO";
  }
  function _0x494c16(_0xa1b466) {
    var _0x1fbf6c = Date.now();
    _0x5ce4f8[_0xa1b466 >> 2] = _0x1fbf6c / 1000 | 0;
    _0x5ce4f8[_0xa1b466 + 4 >> 2] = _0x1fbf6c % 1000 * 1000 | 0;
    return 0;
  }
  function _0x3ae1fc(_0x32ad8a) {
    _0x3afc48.activeTexture(_0x32ad8a);
  }
  function _0x5677ca(_0x1dee26, _0xbc54ac) {
    _0x1dee26 = _0x3ba29d.programs[_0x1dee26];
    _0xbc54ac = _0x3ba29d.shaders[_0xbc54ac];
    _0x1dee26[_0xbc54ac.shaderType] = _0xbc54ac;
    _0x3afc48.attachShader(_0x1dee26, _0xbc54ac);
  }
  function _0x15fcc4(_0xfb123, _0x35766e) {
    _0x3afc48.beginQuery(_0xfb123, _0x3ba29d.queries[_0x35766e]);
  }
  function _0x18c2ee(_0xa2c586) {
    _0x3afc48.beginTransformFeedback(_0xa2c586);
  }
  function _0x196461(_0x1eaafd, _0x163e5b, _0x5721cb) {
    _0x3afc48.bindAttribLocation(_0x3ba29d.programs[_0x1eaafd], _0x163e5b, _0x51c742(_0x5721cb));
  }
  function _0x26d066(_0x377ca8, _0x30aa19) {
    if (_0x377ca8 == 34962) {
      _0x3afc48.currentArrayBufferBinding = _0x30aa19;
    } else if (_0x377ca8 == 34963) {
      _0x3afc48.currentElementArrayBufferBinding = _0x30aa19;
    }
    if (_0x377ca8 == 35051) {
      _0x3afc48.currentPixelPackBufferBinding = _0x30aa19;
    } else if (_0x377ca8 == 35052) {
      _0x3afc48.currentPixelUnpackBufferBinding = _0x30aa19;
    }
    _0x3afc48.bindBuffer(_0x377ca8, _0x3ba29d.buffers[_0x30aa19]);
  }
  function _0x3fa381(_0x1815ea, _0x47e64c, _0x130719) {
    _0x3afc48.bindBufferBase(_0x1815ea, _0x47e64c, _0x3ba29d.buffers[_0x130719]);
  }
  function _0x3a277c(_0x757e1b, _0x2ed896, _0x3e0127, _0x1bea19, _0x5a9595) {
    _0x3afc48.bindBufferRange(_0x757e1b, _0x2ed896, _0x3ba29d.buffers[_0x3e0127], _0x1bea19, _0x5a9595);
  }
  function _0x52edf9(_0x5d4d36, _0x5c9526) {
    _0x3afc48.bindFramebuffer(_0x5d4d36, _0x3ba29d.framebuffers[_0x5c9526]);
  }
  function _0xf669f5(_0x50e203, _0x5edf6b) {
    _0x3afc48.bindRenderbuffer(_0x50e203, _0x3ba29d.renderbuffers[_0x5edf6b]);
  }
  function _0x46bca7(_0x15e9b8, _0x5f5b15) {
    _0x3afc48.bindSampler(_0x15e9b8, _0x3ba29d.samplers[_0x5f5b15]);
  }
  function _0x2864c8(_0x26492d, _0x111a93) {
    _0x3afc48.bindTexture(_0x26492d, _0x3ba29d.textures[_0x111a93]);
  }
  function _0x3c4659(_0x5ca9eb, _0x252d2f) {
    _0x3afc48.bindTransformFeedback(_0x5ca9eb, _0x3ba29d.transformFeedbacks[_0x252d2f]);
  }
  function _0x173612(_0x2e89ac) {
    _0x3afc48.bindVertexArray(_0x3ba29d.vaos[_0x2e89ac]);
    var _0x17b0c0 = _0x3afc48.getParameter(34965);
    _0x3afc48.currentElementArrayBufferBinding = _0x17b0c0 ? _0x17b0c0.name | 0 : 0;
  }
  function _0xb46315(_0x3e66c1) {
    _0x3afc48.blendEquation(_0x3e66c1);
  }
  function _0x1428f8(_0x2f1074, _0x5432bd) {
    _0x3afc48.blendEquationSeparate(_0x2f1074, _0x5432bd);
  }
  function _0x2d5fd1(_0x22aaec, _0x14801e, _0x2e8fa7, _0x2a7b3a) {
    _0x3afc48.blendFuncSeparate(_0x22aaec, _0x14801e, _0x2e8fa7, _0x2a7b3a);
  }
  function _0x2d9e1f(_0x17ab01, _0xe8d74f, _0x2810dd, _0x3a164e, _0x5cdd82, _0x327d42, _0x3d4d83, _0x3a0487, _0x5e4860, _0x404fdc) {
    _0x3afc48.blitFramebuffer(_0x17ab01, _0xe8d74f, _0x2810dd, _0x3a164e, _0x5cdd82, _0x327d42, _0x3d4d83, _0x3a0487, _0x5e4860, _0x404fdc);
  }
  function _0x1b6125(_0x1c8b32, _0x4b7bfe, _0x1ed958, _0xbf3a8b) {
    if (_0x3ba29d.currentContext.version >= 2) {
      if (_0x1ed958) {
        _0x3afc48.bufferData(_0x1c8b32, _0x12f402, _0xbf3a8b, _0x1ed958, _0x4b7bfe);
      } else {
        _0x3afc48.bufferData(_0x1c8b32, _0x4b7bfe, _0xbf3a8b);
      }
    } else {
      _0x3afc48.bufferData(_0x1c8b32, _0x1ed958 ? _0x12f402.subarray(_0x1ed958, _0x1ed958 + _0x4b7bfe) : _0x4b7bfe, _0xbf3a8b);
    }
  }
  function _0xa8ecbb(_0x48e959, _0x3b54dd, _0x4b11d7, _0xe86e4d) {
    if (_0x3ba29d.currentContext.version >= 2) {
      _0x3afc48.bufferSubData(_0x48e959, _0x3b54dd, _0x12f402, _0xe86e4d, _0x4b11d7);
      return;
    }
    _0x3afc48.bufferSubData(_0x48e959, _0x3b54dd, _0x12f402.subarray(_0xe86e4d, _0xe86e4d + _0x4b11d7));
  }
  function _0x590601(_0x22f162) {
    return _0x3afc48.checkFramebufferStatus(_0x22f162);
  }
  function _0x5d2234(_0x5f5510) {
    _0x3afc48.clear(_0x5f5510);
  }
  function _0xd1753a(_0x57d636, _0x41c05a, _0x9a3fe6, _0x266abc) {
    _0x3afc48.clearBufferfi(_0x57d636, _0x41c05a, _0x9a3fe6, _0x266abc);
  }
  function _0x43a718(_0x12a7a7, _0x1cc360, _0x1b454b) {
    _0x3afc48.clearBufferfv(_0x12a7a7, _0x1cc360, _0x3e31eb, _0x1b454b >> 2);
  }
  function _0x108398(_0x5f20fc, _0x40f128, _0x4ad1e4) {
    _0x3afc48.clearBufferuiv(_0x5f20fc, _0x40f128, _0x1ee1a1, _0x4ad1e4 >> 2);
  }
  function _0x5d66d3(_0x4a440e, _0x339e93, _0x5f08da, _0x43e9c2) {
    _0x3afc48.clearColor(_0x4a440e, _0x339e93, _0x5f08da, _0x43e9c2);
  }
  function _0x1fd6db(_0x47ae0d) {
    _0x3afc48.clearDepth(_0x47ae0d);
  }
  function _0x1426e4(_0x5e2dc8) {
    _0x3afc48.clearStencil(_0x5e2dc8);
  }
  function _0x11078e(_0x1b0d53, _0x25fade, _0x32340f, _0x5e89ad) {
    return _0x3afc48.clientWaitSync(_0x3ba29d.syncs[_0x1b0d53], _0x25fade, _0x365bde(_0x32340f, _0x5e89ad));
  }
  function _0x46af77(_0x31eb69, _0x17c0c0, _0x25b300, _0x36a572) {
    _0x3afc48.colorMask(!!_0x31eb69, !!_0x17c0c0, !!_0x25b300, !!_0x36a572);
  }
  function _0x433e63(_0xd8f455) {
    _0x3afc48.compileShader(_0x3ba29d.shaders[_0xd8f455]);
  }
  function _0x4e73ec(_0x1b4f2e, _0x5f321c, _0x3d37d7, _0x1d5262, _0xe113a2, _0x18d6b9, _0x559beb, _0x5286f9) {
    if (_0x3ba29d.currentContext.version >= 2) {
      if (_0x3afc48.currentPixelUnpackBufferBinding) {
        _0x3afc48.compressedTexImage2D(_0x1b4f2e, _0x5f321c, _0x3d37d7, _0x1d5262, _0xe113a2, _0x18d6b9, _0x559beb, _0x5286f9);
      } else {
        _0x3afc48.compressedTexImage2D(_0x1b4f2e, _0x5f321c, _0x3d37d7, _0x1d5262, _0xe113a2, _0x18d6b9, _0x12f402, _0x5286f9, _0x559beb);
      }
      return;
    }
    _0x3afc48.compressedTexImage2D(_0x1b4f2e, _0x5f321c, _0x3d37d7, _0x1d5262, _0xe113a2, _0x18d6b9, _0x5286f9 ? _0x12f402.subarray(_0x5286f9, _0x5286f9 + _0x559beb) : null);
  }
  function _0xd426b0(_0x537247, _0xd13b00, _0x158e18, _0x2a5d12, _0x5c8eea, _0x1b01e2, _0x1eaace, _0x4e406a, _0x248b27) {
    if (_0x3afc48.currentPixelUnpackBufferBinding) {
      _0x3afc48.compressedTexImage3D(_0x537247, _0xd13b00, _0x158e18, _0x2a5d12, _0x5c8eea, _0x1b01e2, _0x1eaace, _0x4e406a, _0x248b27);
    } else {
      _0x3afc48.compressedTexImage3D(_0x537247, _0xd13b00, _0x158e18, _0x2a5d12, _0x5c8eea, _0x1b01e2, _0x1eaace, _0x12f402, _0x248b27, _0x4e406a);
    }
  }
  function _0x2927a8(_0x5bdfd5, _0x37fe1f, _0x5631dd, _0x1e3f08, _0x4db886, _0x19aabe, _0x4010cd, _0x3eba14, _0x7c830b) {
    if (_0x3ba29d.currentContext.version >= 2) {
      if (_0x3afc48.currentPixelUnpackBufferBinding) {
        _0x3afc48.compressedTexSubImage2D(_0x5bdfd5, _0x37fe1f, _0x5631dd, _0x1e3f08, _0x4db886, _0x19aabe, _0x4010cd, _0x3eba14, _0x7c830b);
      } else {
        _0x3afc48.compressedTexSubImage2D(_0x5bdfd5, _0x37fe1f, _0x5631dd, _0x1e3f08, _0x4db886, _0x19aabe, _0x4010cd, _0x12f402, _0x7c830b, _0x3eba14);
      }
      return;
    }
    _0x3afc48.compressedTexSubImage2D(_0x5bdfd5, _0x37fe1f, _0x5631dd, _0x1e3f08, _0x4db886, _0x19aabe, _0x4010cd, _0x7c830b ? _0x12f402.subarray(_0x7c830b, _0x7c830b + _0x3eba14) : null);
  }
  function _0x1ad103(_0x248f73, _0x1fac85, _0x460f94, _0x2c43b2, _0x2157ff, _0x34b515, _0x56ec09, _0x3bc01e, _0x19b579, _0x5e4a9b, _0x9b98a) {
    if (_0x3afc48.currentPixelUnpackBufferBinding) {
      _0x3afc48.compressedTexSubImage3D(_0x248f73, _0x1fac85, _0x460f94, _0x2c43b2, _0x2157ff, _0x34b515, _0x56ec09, _0x3bc01e, _0x19b579, _0x5e4a9b, _0x9b98a);
    } else {
      _0x3afc48.compressedTexSubImage3D(_0x248f73, _0x1fac85, _0x460f94, _0x2c43b2, _0x2157ff, _0x34b515, _0x56ec09, _0x3bc01e, _0x19b579, _0x12f402, _0x9b98a, _0x5e4a9b);
    }
  }
  function _0x55378d(_0xbc11ba, _0x127cd7, _0x5caabe, _0x1c6004, _0x35639c) {
    _0x3afc48.copyBufferSubData(_0xbc11ba, _0x127cd7, _0x5caabe, _0x1c6004, _0x35639c);
  }
  function _0x51475d(_0x23d0c0, _0x4f87a1, _0x93111b, _0x6d34b5, _0x14d75f, _0x430ee2, _0x4e7bae, _0x30db0b) {
    _0x3afc48.copyTexImage2D(_0x23d0c0, _0x4f87a1, _0x93111b, _0x6d34b5, _0x14d75f, _0x430ee2, _0x4e7bae, _0x30db0b);
  }
  function _0x9f355c(_0x3cf360, _0x2abada, _0x2d6581, _0x4b839a, _0x2a2a6e, _0x37cc82, _0x1686b1, _0x384657) {
    _0x3afc48.copyTexSubImage2D(_0x3cf360, _0x2abada, _0x2d6581, _0x4b839a, _0x2a2a6e, _0x37cc82, _0x1686b1, _0x384657);
  }
  function _0x538fd1() {
    var _0x31cec2 = _0x3ba29d.getNewId(_0x3ba29d.programs);
    var _0x42d223 = _0x3afc48.createProgram();
    _0x42d223.name = _0x31cec2;
    _0x42d223.maxUniformLength = _0x42d223.maxAttributeLength = _0x42d223.maxUniformBlockNameLength = 0;
    _0x42d223.uniformIdCounter = 1;
    _0x3ba29d.programs[_0x31cec2] = _0x42d223;
    return _0x31cec2;
  }
  function _0x4fe320(_0xd66a76) {
    var _0x170559 = _0x3ba29d.getNewId(_0x3ba29d.shaders);
    _0x3ba29d.shaders[_0x170559] = _0x3afc48.createShader(_0xd66a76);
    _0x3ba29d.shaders[_0x170559].shaderType = _0xd66a76 & 1 ? "vs" : "fs";
    return _0x170559;
  }
  function _0x189896(_0x3033eb) {
    _0x3afc48.cullFace(_0x3033eb);
  }
  function _0x2d44a4(_0x1e76f8, _0x1811c9) {
    for (var _0x3d0d10 = 0; _0x3d0d10 < _0x1e76f8; _0x3d0d10++) {
      var _0x354918 = _0x5ce4f8[_0x1811c9 + _0x3d0d10 * 4 >> 2];
      var _0x416b10 = _0x3ba29d.buffers[_0x354918];
      if (!_0x416b10) {
        continue;
      }
      _0x3afc48.deleteBuffer(_0x416b10);
      _0x416b10.name = 0;
      _0x3ba29d.buffers[_0x354918] = null;
      if (_0x354918 == _0x3afc48.currentArrayBufferBinding) {
        _0x3afc48.currentArrayBufferBinding = 0;
      }
      if (_0x354918 == _0x3afc48.currentElementArrayBufferBinding) {
        _0x3afc48.currentElementArrayBufferBinding = 0;
      }
      if (_0x354918 == _0x3afc48.currentPixelPackBufferBinding) {
        _0x3afc48.currentPixelPackBufferBinding = 0;
      }
      if (_0x354918 == _0x3afc48.currentPixelUnpackBufferBinding) {
        _0x3afc48.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0xafdff0(_0x1455bb, _0x835a7a) {
    for (var _0x183421 = 0; _0x183421 < _0x1455bb; ++_0x183421) {
      var _0x2a9bd2 = _0x5ce4f8[_0x835a7a + _0x183421 * 4 >> 2];
      var _0x18c983 = _0x3ba29d.framebuffers[_0x2a9bd2];
      if (!_0x18c983) {
        continue;
      }
      _0x3afc48.deleteFramebuffer(_0x18c983);
      _0x18c983.name = 0;
      _0x3ba29d.framebuffers[_0x2a9bd2] = null;
    }
  }
  function _0x5d9f4c(_0x541aa2) {
    if (!_0x541aa2) {
      return;
    }
    var _0x34222c = _0x3ba29d.programs[_0x541aa2];
    if (!_0x34222c) {
      _0x3ba29d.recordError(1281);
      return;
    }
    _0x3afc48.deleteProgram(_0x34222c);
    _0x34222c.name = 0;
    _0x3ba29d.programs[_0x541aa2] = null;
  }
  function _0x5b91ae(_0x5363ae, _0x3ebe94) {
    for (var _0xdecd7f = 0; _0xdecd7f < _0x5363ae; _0xdecd7f++) {
      var _0x3218cb = _0x5ce4f8[_0x3ebe94 + _0xdecd7f * 4 >> 2];
      var _0xadf0 = _0x3ba29d.queries[_0x3218cb];
      if (!_0xadf0) {
        continue;
      }
      _0x3afc48.deleteQuery(_0xadf0);
      _0x3ba29d.queries[_0x3218cb] = null;
    }
  }
  function _0x37bf77(_0x4448fd, _0x15d851) {
    for (var _0x4dcbf4 = 0; _0x4dcbf4 < _0x4448fd; _0x4dcbf4++) {
      var _0x28245b = _0x5ce4f8[_0x15d851 + _0x4dcbf4 * 4 >> 2];
      var _0xc793df = _0x3ba29d.renderbuffers[_0x28245b];
      if (!_0xc793df) {
        continue;
      }
      _0x3afc48.deleteRenderbuffer(_0xc793df);
      _0xc793df.name = 0;
      _0x3ba29d.renderbuffers[_0x28245b] = null;
    }
  }
  function _0x35861c(_0x44b2a3, _0x13958c) {
    for (var _0x60c574 = 0; _0x60c574 < _0x44b2a3; _0x60c574++) {
      var _0x43a757 = _0x5ce4f8[_0x13958c + _0x60c574 * 4 >> 2];
      var _0x25ee18 = _0x3ba29d.samplers[_0x43a757];
      if (!_0x25ee18) {
        continue;
      }
      _0x3afc48.deleteSampler(_0x25ee18);
      _0x25ee18.name = 0;
      _0x3ba29d.samplers[_0x43a757] = null;
    }
  }
  function _0x5d844d(_0x1b25cc) {
    if (!_0x1b25cc) {
      return;
    }
    var _0x364bb2 = _0x3ba29d.shaders[_0x1b25cc];
    if (!_0x364bb2) {
      _0x3ba29d.recordError(1281);
      return;
    }
    _0x3afc48.deleteShader(_0x364bb2);
    _0x3ba29d.shaders[_0x1b25cc] = null;
  }
  function _0x11b386(_0x4b16af) {
    if (!_0x4b16af) {
      return;
    }
    var _0x41c462 = _0x3ba29d.syncs[_0x4b16af];
    if (!_0x41c462) {
      _0x3ba29d.recordError(1281);
      return;
    }
    _0x3afc48.deleteSync(_0x41c462);
    _0x41c462.name = 0;
    _0x3ba29d.syncs[_0x4b16af] = null;
  }
  function _0x416b14(_0x42b08c, _0x104f62) {
    for (var _0x5c1984 = 0; _0x5c1984 < _0x42b08c; _0x5c1984++) {
      var _0x4a76f2 = _0x5ce4f8[_0x104f62 + _0x5c1984 * 4 >> 2];
      var _0xc8d899 = _0x3ba29d.textures[_0x4a76f2];
      if (!_0xc8d899) {
        continue;
      }
      _0x3afc48.deleteTexture(_0xc8d899);
      _0xc8d899.name = 0;
      _0x3ba29d.textures[_0x4a76f2] = null;
    }
  }
  function _0x47ae66(_0x2e5ce7, _0x11f8ac) {
    for (var _0x349316 = 0; _0x349316 < _0x2e5ce7; _0x349316++) {
      var _0x3a0df0 = _0x5ce4f8[_0x11f8ac + _0x349316 * 4 >> 2];
      var _0x478c15 = _0x3ba29d.transformFeedbacks[_0x3a0df0];
      if (!_0x478c15) {
        continue;
      }
      _0x3afc48.deleteTransformFeedback(_0x478c15);
      _0x478c15.name = 0;
      _0x3ba29d.transformFeedbacks[_0x3a0df0] = null;
    }
  }
  function _0x1a08cd(_0x31b91a, _0x224be9) {
    for (var _0x557633 = 0; _0x557633 < _0x31b91a; _0x557633++) {
      var _0x41df09 = _0x5ce4f8[_0x224be9 + _0x557633 * 4 >> 2];
      _0x3afc48.deleteVertexArray(_0x3ba29d.vaos[_0x41df09]);
      _0x3ba29d.vaos[_0x41df09] = null;
    }
  }
  function _0x5117cb(_0x4223cf) {
    _0x3afc48.depthFunc(_0x4223cf);
  }
  function _0x5d456a(_0x5b7753) {
    _0x3afc48.depthMask(!!_0x5b7753);
  }
  function _0x459cd1(_0x587c05, _0xc84e30) {
    _0x3afc48.detachShader(_0x3ba29d.programs[_0x587c05], _0x3ba29d.shaders[_0xc84e30]);
  }
  function _0x390c1f(_0x4083ee) {
    _0x3afc48.disable(_0x4083ee);
  }
  function _0x99693f(_0x29b8f3) {
    var _0x3c112d = _0x3ba29d.currentContext.clientBuffers[_0x29b8f3];
    _0x3c112d.enabled = false;
    _0x3afc48.disableVertexAttribArray(_0x29b8f3);
  }
  function _0x4e2116(_0x355ca0, _0x19dfbf, _0x47859c) {
    _0x3ba29d.preDrawHandleClientVertexAttribBindings(_0x19dfbf + _0x47859c);
    _0x3afc48.drawArrays(_0x355ca0, _0x19dfbf, _0x47859c);
    _0x3ba29d.postDrawHandleClientVertexAttribBindings();
  }
  function _0x241af8(_0x350f47, _0x4513cf, _0x3d2e23, _0x2e8fb6) {
    _0x3afc48.drawArraysInstanced(_0x350f47, _0x4513cf, _0x3d2e23, _0x2e8fb6);
  }
  var _0x1bb38d = [];
  function _0x8d113(_0x3c89a8, _0x509c38) {
    var _0x470a06 = _0x1bb38d[_0x3c89a8];
    for (var _0x8b6647 = 0; _0x8b6647 < _0x3c89a8; _0x8b6647++) {
      _0x470a06[_0x8b6647] = _0x5ce4f8[_0x509c38 + _0x8b6647 * 4 >> 2];
    }
    _0x3afc48.drawBuffers(_0x470a06);
  }
  function _0x20622b(_0x24f6bd, _0x2d2fa6, _0x5be35c, _0x15f60f) {
    var _0x518952;
    if (!_0x3afc48.currentElementArrayBufferBinding) {
      var _0x50dced = _0x3ba29d.calcBufLength(1, _0x5be35c, 0, _0x2d2fa6);
      _0x518952 = _0x3ba29d.getTempIndexBuffer(_0x50dced);
      _0x3afc48.bindBuffer(34963, _0x518952);
      _0x3afc48.bufferSubData(34963, 0, _0x12f402.subarray(_0x15f60f, _0x15f60f + _0x50dced));
      _0x15f60f = 0;
    }
    _0x3ba29d.preDrawHandleClientVertexAttribBindings(_0x2d2fa6);
    _0x3afc48.drawElements(_0x24f6bd, _0x2d2fa6, _0x5be35c, _0x15f60f);
    _0x3ba29d.postDrawHandleClientVertexAttribBindings(_0x2d2fa6);
    if (!_0x3afc48.currentElementArrayBufferBinding) {
      _0x3afc48.bindBuffer(34963, null);
    }
  }
  function _0x254780(_0x24a3e0, _0x486b3b, _0x382ccb, _0x4f5d62, _0x2951fa) {
    _0x3afc48.drawElementsInstanced(_0x24a3e0, _0x486b3b, _0x382ccb, _0x4f5d62, _0x2951fa);
  }
  function _0x3919d0(_0x594a1d) {
    _0x3afc48.enable(_0x594a1d);
  }
  function _0x3ecca8(_0x585096) {
    var _0x27796a = _0x3ba29d.currentContext.clientBuffers[_0x585096];
    _0x27796a.enabled = true;
    _0x3afc48.enableVertexAttribArray(_0x585096);
  }
  function _0x4f2d81(_0x381129) {
    _0x3afc48.endQuery(_0x381129);
  }
  function _0x485026() {
    _0x3afc48.endTransformFeedback();
  }
  function _0xcde360(_0x1ce935, _0x39cd99) {
    var _0x444071 = _0x3afc48.fenceSync(_0x1ce935, _0x39cd99);
    if (_0x444071) {
      var _0x465deb = _0x3ba29d.getNewId(_0x3ba29d.syncs);
      _0x444071.name = _0x465deb;
      _0x3ba29d.syncs[_0x465deb] = _0x444071;
      return _0x465deb;
    } else {
      return 0;
    }
  }
  function _0x2ecb20() {
    _0x3afc48.finish();
  }
  function _0x1c2b7d() {
    _0x3afc48.flush();
  }
  function _0x6b4565(_0x18c258) {
    switch (_0x18c258) {
      case 34962:
        _0x18c258 = 34964;
        break;
      case 34963:
        _0x18c258 = 34965;
        break;
      case 35051:
        _0x18c258 = 35053;
        break;
      case 35052:
        _0x18c258 = 35055;
        break;
      case 35982:
        _0x18c258 = 35983;
        break;
      case 36662:
        _0x18c258 = 36662;
        break;
      case 36663:
        _0x18c258 = 36663;
        break;
      case 35345:
        _0x18c258 = 35368;
        break;
    }
    var _0x34e772 = _0x3afc48.getParameter(_0x18c258);
    if (_0x34e772) {
      return _0x34e772.name | 0;
    } else {
      return 0;
    }
  }
  function _0x27cc64(_0x4f195d) {
    switch (_0x4f195d) {
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
  function _0x325b0b(_0x106b79, _0x16a7c4, _0xfee452) {
    if (!_0x27cc64(_0x106b79)) {
      _0x3ba29d.recordError(1280);
      _0x33bd81("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0xb08fc1 = _0x3ba29d.mappedBuffers[_0x6b4565(_0x106b79)];
    if (!_0xb08fc1) {
      _0x3ba29d.recordError(1282);
      _0x33bd81("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0xb08fc1.access & 16)) {
      _0x3ba29d.recordError(1282);
      _0x33bd81("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x16a7c4 < 0 || _0xfee452 < 0 || _0x16a7c4 + _0xfee452 > _0xb08fc1.length) {
      _0x3ba29d.recordError(1281);
      _0x33bd81("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0x3afc48.bufferSubData(_0x106b79, _0xb08fc1.offset, _0x12f402.subarray(_0xb08fc1.mem + _0x16a7c4, _0xb08fc1.mem + _0x16a7c4 + _0xfee452));
  }
  function _0xa5c9dc(_0x5782bd, _0x3c6b97, _0x4ab09a, _0x2c6754) {
    _0x3afc48.framebufferRenderbuffer(_0x5782bd, _0x3c6b97, _0x4ab09a, _0x3ba29d.renderbuffers[_0x2c6754]);
  }
  function _0x4f2b74(_0xaabf93, _0x419ceb, _0x218b12, _0x16f8a0, _0xec5f71) {
    _0x3afc48.framebufferTexture2D(_0xaabf93, _0x419ceb, _0x218b12, _0x3ba29d.textures[_0x16f8a0], _0xec5f71);
  }
  function _0x26557a(_0x40d415, _0x4fe11d, _0x473475, _0x1cab93, _0x3362ef) {
    _0x3afc48.framebufferTextureLayer(_0x40d415, _0x4fe11d, _0x3ba29d.textures[_0x473475], _0x1cab93, _0x3362ef);
  }
  function _0x3b8be4(_0x354298) {
    _0x3afc48.frontFace(_0x354298);
  }
  function _0x562492(_0x3a204d, _0x53d21c, _0x545b88, _0x1061c6) {
    for (var _0x499294 = 0; _0x499294 < _0x3a204d; _0x499294++) {
      var _0x39c015 = _0x3afc48[_0x545b88]();
      var _0xc732a1 = _0x39c015 && _0x3ba29d.getNewId(_0x1061c6);
      if (_0x39c015) {
        _0x39c015.name = _0xc732a1;
        _0x1061c6[_0xc732a1] = _0x39c015;
      } else {
        _0x3ba29d.recordError(1282);
      }
      _0x5ce4f8[_0x53d21c + _0x499294 * 4 >> 2] = _0xc732a1;
    }
  }
  function _0x1f9321(_0x287875, _0x573b3a) {
    _0x562492(_0x287875, _0x573b3a, "createBuffer", _0x3ba29d.buffers);
  }
  function _0x283993(_0x2b4a95, _0x1560c2) {
    _0x562492(_0x2b4a95, _0x1560c2, "createFramebuffer", _0x3ba29d.framebuffers);
  }
  function _0x1eb834(_0x344d4, _0x10dec1) {
    _0x562492(_0x344d4, _0x10dec1, "createQuery", _0x3ba29d.queries);
  }
  function _0x2b8c3b(_0xee74c0, _0xbe0d9b) {
    _0x562492(_0xee74c0, _0xbe0d9b, "createRenderbuffer", _0x3ba29d.renderbuffers);
  }
  function _0x4c25ec(_0x5365c1, _0x27d457) {
    _0x562492(_0x5365c1, _0x27d457, "createSampler", _0x3ba29d.samplers);
  }
  function _0x44166e(_0x1a3e64, _0x2ac399) {
    _0x562492(_0x1a3e64, _0x2ac399, "createTexture", _0x3ba29d.textures);
  }
  function _0x317a47(_0x2b14c9, _0x615203) {
    _0x562492(_0x2b14c9, _0x615203, "createTransformFeedback", _0x3ba29d.transformFeedbacks);
  }
  function _0x1f0daa(_0x3c6364, _0x4f6c31) {
    _0x562492(_0x3c6364, _0x4f6c31, "createVertexArray", _0x3ba29d.vaos);
  }
  function _0x237a0d(_0x55a75a) {
    _0x3afc48.generateMipmap(_0x55a75a);
  }
  function _0x3fc3c6(_0x46db93, _0x24de78, _0x23ca91, _0x5a2c31, _0x2895df, _0x8a4665, _0x3dd2a1, _0x26d55e) {
    _0x24de78 = _0x3ba29d.programs[_0x24de78];
    var _0x2bad71 = _0x3afc48[_0x46db93](_0x24de78, _0x23ca91);
    if (_0x2bad71) {
      var _0x541139 = _0x26d55e && _0x4cad61(_0x2bad71.name, _0x26d55e, _0x5a2c31);
      if (_0x2895df) {
        _0x5ce4f8[_0x2895df >> 2] = _0x541139;
      }
      if (_0x8a4665) {
        _0x5ce4f8[_0x8a4665 >> 2] = _0x2bad71.size;
      }
      if (_0x3dd2a1) {
        _0x5ce4f8[_0x3dd2a1 >> 2] = _0x2bad71.type;
      }
    }
  }
  function _0x4b81b7(_0x2e24fa, _0x4e06eb, _0x49b342, _0x5966e3, _0x1267d8, _0x1a573f, _0x2d19b6) {
    _0x3fc3c6("getActiveAttrib", _0x2e24fa, _0x4e06eb, _0x49b342, _0x5966e3, _0x1267d8, _0x1a573f, _0x2d19b6);
  }
  function _0x3483f2(_0x172ea4, _0x3d1ed0, _0x16ede4, _0x3e1995, _0x5d32e3, _0x5bd89e, _0x4368e9) {
    _0x3fc3c6("getActiveUniform", _0x172ea4, _0x3d1ed0, _0x16ede4, _0x3e1995, _0x5d32e3, _0x5bd89e, _0x4368e9);
  }
  function _0x5f05a8(_0x3f3731, _0x224a73, _0x2f8029, _0x3658eb, _0x4e47e2) {
    _0x3f3731 = _0x3ba29d.programs[_0x3f3731];
    var _0x5343c5 = _0x3afc48.getActiveUniformBlockName(_0x3f3731, _0x224a73);
    if (!_0x5343c5) {
      return;
    }
    if (_0x4e47e2 && _0x2f8029 > 0) {
      var _0x259a2a = _0x4cad61(_0x5343c5, _0x4e47e2, _0x2f8029);
      if (_0x3658eb) {
        _0x5ce4f8[_0x3658eb >> 2] = _0x259a2a;
      }
    } else if (_0x3658eb) {
      _0x5ce4f8[_0x3658eb >> 2] = 0;
    }
  }
  function _0xfbe6b6(_0x2d929e, _0x27b7e4, _0x30d384, _0xbeb61b) {
    if (!_0xbeb61b) {
      _0x3ba29d.recordError(1281);
      return;
    }
    _0x2d929e = _0x3ba29d.programs[_0x2d929e];
    if (_0x30d384 == 35393) {
      var _0x328c33 = _0x3afc48.getActiveUniformBlockName(_0x2d929e, _0x27b7e4);
      _0x5ce4f8[_0xbeb61b >> 2] = _0x328c33.length + 1;
      return;
    }
    var _0x3b7f89 = _0x3afc48.getActiveUniformBlockParameter(_0x2d929e, _0x27b7e4, _0x30d384);
    if (_0x3b7f89 === null) {
      return;
    }
    if (_0x30d384 == 35395) {
      for (var _0x2d4dc4 = 0; _0x2d4dc4 < _0x3b7f89.length; _0x2d4dc4++) {
        _0x5ce4f8[_0xbeb61b + _0x2d4dc4 * 4 >> 2] = _0x3b7f89[_0x2d4dc4];
      }
    } else {
      _0x5ce4f8[_0xbeb61b >> 2] = _0x3b7f89;
    }
  }
  function _0x44c0fa(_0x1f067f, _0x23bf54, _0x1d6b3a, _0x52f54e, _0x1b7e0d) {
    if (!_0x1b7e0d) {
      _0x3ba29d.recordError(1281);
      return;
    }
    if (_0x23bf54 > 0 && _0x1d6b3a == 0) {
      _0x3ba29d.recordError(1281);
      return;
    }
    _0x1f067f = _0x3ba29d.programs[_0x1f067f];
    var _0x374b48 = [];
    for (var _0x3bbf45 = 0; _0x3bbf45 < _0x23bf54; _0x3bbf45++) {
      _0x374b48.push(_0x5ce4f8[_0x1d6b3a + _0x3bbf45 * 4 >> 2]);
    }
    var _0x49bbb3 = _0x3afc48.getActiveUniforms(_0x1f067f, _0x374b48, _0x52f54e);
    if (!_0x49bbb3) {
      return;
    }
    var _0xa5f2d4 = _0x49bbb3.length;
    for (var _0x3bbf45 = 0; _0x3bbf45 < _0xa5f2d4; _0x3bbf45++) {
      _0x5ce4f8[_0x1b7e0d + _0x3bbf45 * 4 >> 2] = _0x49bbb3[_0x3bbf45];
    }
  }
  function _0x2f7dd4(_0x377b44, _0x264019) {
    return _0x3afc48.getAttribLocation(_0x3ba29d.programs[_0x377b44], _0x51c742(_0x264019));
  }
  function _0x1855fc(_0x4d2824, _0x595cb8, _0x280b14, _0x47eb0e) {
    if (!_0x47eb0e) {
      _0x3ba29d.recordError(1281);
      return;
    }
    _0x3afc48.getBufferSubData(_0x4d2824, _0x595cb8, _0x12f402, _0x47eb0e, _0x280b14);
  }
  function _0x144736() {
    var _0x178502 = _0x3afc48.getError() || _0x3ba29d.lastError;
    _0x3ba29d.lastError = 0;
    return _0x178502;
  }
  function _0x4a8b6c(_0x5b11c3, _0x52c6e7, _0x1a44f5, _0x522381) {
    var _0x201e78 = _0x3afc48.getFramebufferAttachmentParameter(_0x5b11c3, _0x52c6e7, _0x1a44f5);
    if (_0x201e78 instanceof WebGLRenderbuffer || _0x201e78 instanceof WebGLTexture) {
      _0x201e78 = _0x201e78.name | 0;
    }
    _0x5ce4f8[_0x522381 >> 2] = _0x201e78;
  }
  function _0x3c643b(_0x6241ca, _0x4fd67d) {
    _0x1ee1a1[_0x6241ca >> 2] = _0x4fd67d;
    _0x1ee1a1[_0x6241ca + 4 >> 2] = (_0x4fd67d - _0x1ee1a1[_0x6241ca >> 2]) / 4294967296;
  }
  function _0x4c6b33(_0xb53ffb, _0x52ee58, _0x5d99f2, _0x145365) {
    if (!_0x5d99f2) {
      _0x3ba29d.recordError(1281);
      return;
    }
    var _0x4380d8 = _0x3afc48.getIndexedParameter(_0xb53ffb, _0x52ee58);
    var _0x781faf;
    switch (typeof _0x4380d8) {
      case "boolean":
        _0x781faf = _0x4380d8 ? 1 : 0;
        break;
      case "number":
        _0x781faf = _0x4380d8;
        break;
      case "object":
        if (_0x4380d8 === null) {
          switch (_0xb53ffb) {
            case 35983:
            case 35368:
              _0x781faf = 0;
              break;
            default:
              {
                _0x3ba29d.recordError(1280);
                return;
              }
          }
        } else if (_0x4380d8 instanceof WebGLBuffer) {
          _0x781faf = _0x4380d8.name | 0;
        } else {
          _0x3ba29d.recordError(1280);
          return;
        }
        break;
      default:
        _0x3ba29d.recordError(1280);
        return;
    }
    switch (_0x145365) {
      case 1:
        _0x3c643b(_0x5d99f2, _0x781faf);
        break;
      case 0:
        _0x5ce4f8[_0x5d99f2 >> 2] = _0x781faf;
        break;
      case 2:
        _0x3e31eb[_0x5d99f2 >> 2] = _0x781faf;
        break;
      case 4:
        _0x28416d[_0x5d99f2 >> 0] = _0x781faf ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x145365;
    }
  }
  function _0x2f509c(_0x390a95, _0x18c5e8, _0x3bacb2) {
    _0x4c6b33(_0x390a95, _0x18c5e8, _0x3bacb2, 0);
  }
  function _0x5a3b21(_0x580a79, _0x416cbe, _0x12269f) {
    if (!_0x416cbe) {
      _0x3ba29d.recordError(1281);
      return;
    }
    var _0x168407 = undefined;
    switch (_0x580a79) {
      case 36346:
        _0x168407 = 1;
        break;
      case 36344:
        if (_0x12269f != 0 && _0x12269f != 1) {
          _0x3ba29d.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0x168407 = 0;
        break;
      case 34466:
        var _0x441aa7 = _0x3afc48.getParameter(34467);
        _0x168407 = _0x441aa7 ? _0x441aa7.length : 0;
        break;
      case 33390:
        _0x168407 = 1048576;
        break;
      case 33309:
        if (_0x3ba29d.currentContext.version < 2) {
          _0x3ba29d.recordError(1282);
          return;
        }
        var _0x1a9336 = _0x3afc48.getSupportedExtensions() || [];
        _0x168407 = _0x1a9336.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0x3ba29d.currentContext.version < 2) {
          _0x3ba29d.recordError(1280);
          return;
        }
        _0x168407 = _0x580a79 == 33307 ? 3 : 0;
        break;
    }
    if (_0x168407 === undefined) {
      var _0x1f004e = _0x3afc48.getParameter(_0x580a79);
      switch (typeof _0x1f004e) {
        case "number":
          _0x168407 = _0x1f004e;
          break;
        case "boolean":
          _0x168407 = _0x1f004e ? 1 : 0;
          break;
        case "string":
          _0x3ba29d.recordError(1280);
          return;
        case "object":
          if (_0x1f004e === null) {
            switch (_0x580a79) {
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
                  _0x168407 = 0;
                  break;
                }
              default:
                {
                  _0x3ba29d.recordError(1280);
                  return;
                }
            }
          } else if (_0x1f004e instanceof Float32Array || _0x1f004e instanceof Uint32Array || _0x1f004e instanceof Int32Array || _0x1f004e instanceof Array) {
            for (var _0x29811e = 0; _0x29811e < _0x1f004e.length; ++_0x29811e) {
              switch (_0x12269f) {
                case 0:
                  _0x5ce4f8[_0x416cbe + _0x29811e * 4 >> 2] = _0x1f004e[_0x29811e];
                  break;
                case 2:
                  _0x3e31eb[_0x416cbe + _0x29811e * 4 >> 2] = _0x1f004e[_0x29811e];
                  break;
                case 4:
                  _0x28416d[_0x416cbe + _0x29811e >> 0] = _0x1f004e[_0x29811e] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0x168407 = _0x1f004e.name | 0;
            } catch (_0x29c51e) {
              _0x3ba29d.recordError(1280);
              _0x33bd81("GL_INVALID_ENUM in glGet" + _0x12269f + "v: Unknown object returned from WebGL getParameter(" + _0x580a79 + ")! (error: " + _0x29c51e + ")");
              return;
            }
          }
          break;
        default:
          _0x3ba29d.recordError(1280);
          _0x33bd81("GL_INVALID_ENUM in glGet" + _0x12269f + "v: Native code calling glGet" + _0x12269f + "v(" + _0x580a79 + ") and it returns " + _0x1f004e + " of type " + typeof _0x1f004e + "!");
          return;
      }
    }
    switch (_0x12269f) {
      case 1:
        _0x3c643b(_0x416cbe, _0x168407);
        break;
      case 0:
        _0x5ce4f8[_0x416cbe >> 2] = _0x168407;
        break;
      case 2:
        _0x3e31eb[_0x416cbe >> 2] = _0x168407;
        break;
      case 4:
        _0x28416d[_0x416cbe >> 0] = _0x168407 ? 1 : 0;
        break;
    }
  }
  function _0x4aad6e(_0x354a92, _0x5559e3) {
    _0x5a3b21(_0x354a92, _0x5559e3, 0);
  }
  function _0x3b3a44(_0x15d6ab, _0x58fc4d, _0x4c0d47, _0x51f2b8, _0x3fe06a) {
    if (_0x51f2b8 < 0) {
      _0x3ba29d.recordError(1281);
      return;
    }
    if (!_0x3fe06a) {
      _0x3ba29d.recordError(1281);
      return;
    }
    var _0x4bd214 = _0x3afc48.getInternalformatParameter(_0x15d6ab, _0x58fc4d, _0x4c0d47);
    if (_0x4bd214 === null) {
      return;
    }
    for (var _0x4b08c5 = 0; _0x4b08c5 < _0x4bd214.length && _0x4b08c5 < _0x51f2b8; ++_0x4b08c5) {
      _0x5ce4f8[_0x3fe06a + _0x4b08c5 * 4 >> 2] = _0x4bd214[_0x4b08c5];
    }
  }
  function _0x119986(_0x5bbe47, _0x1b658e, _0x4dc4b4, _0x30ab60, _0x242017) {
    _0x3ba29d.recordError(1282);
  }
  function _0x4b7319(_0x6cbc7d, _0x2a958a, _0x4abd7a, _0xd8e46f) {
    var _0x469335 = _0x3afc48.getProgramInfoLog(_0x3ba29d.programs[_0x6cbc7d]);
    if (_0x469335 === null) {
      _0x469335 = "(unknown error)";
    }
    var _0x30c987 = _0x2a958a > 0 && _0xd8e46f ? _0x4cad61(_0x469335, _0xd8e46f, _0x2a958a) : 0;
    if (_0x4abd7a) {
      _0x5ce4f8[_0x4abd7a >> 2] = _0x30c987;
    }
  }
  function _0x5a55b9(_0x3776f6, _0x2a6d77, _0x389075) {
    if (!_0x389075) {
      _0x3ba29d.recordError(1281);
      return;
    }
    if (_0x3776f6 >= _0x3ba29d.counter) {
      _0x3ba29d.recordError(1281);
      return;
    }
    _0x3776f6 = _0x3ba29d.programs[_0x3776f6];
    if (_0x2a6d77 == 35716) {
      var _0xef5733 = _0x3afc48.getProgramInfoLog(_0x3776f6);
      if (_0xef5733 === null) {
        _0xef5733 = "(unknown error)";
      }
      _0x5ce4f8[_0x389075 >> 2] = _0xef5733.length + 1;
    } else if (_0x2a6d77 == 35719) {
      if (!_0x3776f6.maxUniformLength) {
        for (var _0x89b336 = 0; _0x89b336 < _0x3afc48.getProgramParameter(_0x3776f6, 35718); ++_0x89b336) {
          _0x3776f6.maxUniformLength = Math.max(_0x3776f6.maxUniformLength, _0x3afc48.getActiveUniform(_0x3776f6, _0x89b336).name.length + 1);
        }
      }
      _0x5ce4f8[_0x389075 >> 2] = _0x3776f6.maxUniformLength;
    } else if (_0x2a6d77 == 35722) {
      if (!_0x3776f6.maxAttributeLength) {
        for (var _0x89b336 = 0; _0x89b336 < _0x3afc48.getProgramParameter(_0x3776f6, 35721); ++_0x89b336) {
          _0x3776f6.maxAttributeLength = Math.max(_0x3776f6.maxAttributeLength, _0x3afc48.getActiveAttrib(_0x3776f6, _0x89b336).name.length + 1);
        }
      }
      _0x5ce4f8[_0x389075 >> 2] = _0x3776f6.maxAttributeLength;
    } else if (_0x2a6d77 == 35381) {
      if (!_0x3776f6.maxUniformBlockNameLength) {
        for (var _0x89b336 = 0; _0x89b336 < _0x3afc48.getProgramParameter(_0x3776f6, 35382); ++_0x89b336) {
          _0x3776f6.maxUniformBlockNameLength = Math.max(_0x3776f6.maxUniformBlockNameLength, _0x3afc48.getActiveUniformBlockName(_0x3776f6, _0x89b336).length + 1);
        }
      }
      _0x5ce4f8[_0x389075 >> 2] = _0x3776f6.maxUniformBlockNameLength;
    } else {
      _0x5ce4f8[_0x389075 >> 2] = _0x3afc48.getProgramParameter(_0x3776f6, _0x2a6d77);
    }
  }
  function _0x1cc2ea(_0x4a00cd, _0x382870, _0x41d970) {
    if (!_0x41d970) {
      _0x3ba29d.recordError(1281);
      return;
    }
    var _0x1948a3 = _0x3ba29d.queries[_0x4a00cd];
    var _0x5c0974 = _0x3afc48.getQueryParameter(_0x1948a3, _0x382870);
    var _0x13fec1;
    if (typeof _0x5c0974 == "boolean") {
      _0x13fec1 = _0x5c0974 ? 1 : 0;
    } else {
      _0x13fec1 = _0x5c0974;
    }
    _0x5ce4f8[_0x41d970 >> 2] = _0x13fec1;
  }
  function _0x25839a(_0x53f488, _0x481b0d, _0x17c2ef) {
    if (!_0x17c2ef) {
      _0x3ba29d.recordError(1281);
      return;
    }
    _0x5ce4f8[_0x17c2ef >> 2] = _0x3afc48.getQuery(_0x53f488, _0x481b0d);
  }
  function _0x361608(_0x14efad, _0x2c26e5, _0x21b28a) {
    if (!_0x21b28a) {
      _0x3ba29d.recordError(1281);
      return;
    }
    _0x5ce4f8[_0x21b28a >> 2] = _0x3afc48.getRenderbufferParameter(_0x14efad, _0x2c26e5);
  }
  function _0xb180c6(_0x4ba8aa, _0x12279b, _0x505b6c, _0x5a0632) {
    var _0x243099 = _0x3afc48.getShaderInfoLog(_0x3ba29d.shaders[_0x4ba8aa]);
    if (_0x243099 === null) {
      _0x243099 = "(unknown error)";
    }
    var _0x41f61a = _0x12279b > 0 && _0x5a0632 ? _0x4cad61(_0x243099, _0x5a0632, _0x12279b) : 0;
    if (_0x505b6c) {
      _0x5ce4f8[_0x505b6c >> 2] = _0x41f61a;
    }
  }
  function _0x33836f(_0xdc2cee, _0x1113ab, _0x3f283c, _0x20ae0e) {
    var _0x19ad7d = _0x3afc48.getShaderPrecisionFormat(_0xdc2cee, _0x1113ab);
    _0x5ce4f8[_0x3f283c >> 2] = _0x19ad7d.rangeMin;
    _0x5ce4f8[_0x3f283c + 4 >> 2] = _0x19ad7d.rangeMax;
    _0x5ce4f8[_0x20ae0e >> 2] = _0x19ad7d.precision;
  }
  function _0x5cca25(_0xe26f66, _0x51a740, _0x52dcc1, _0x548b53) {
    var _0x53e7a2 = _0x3afc48.getShaderSource(_0x3ba29d.shaders[_0xe26f66]);
    if (!_0x53e7a2) {
      return;
    }
    var _0x15b4f1 = _0x51a740 > 0 && _0x548b53 ? _0x4cad61(_0x53e7a2, _0x548b53, _0x51a740) : 0;
    if (_0x52dcc1) {
      _0x5ce4f8[_0x52dcc1 >> 2] = _0x15b4f1;
    }
  }
  function _0x5320a6(_0x1a9ace, _0x46f76f, _0x2f9107) {
    if (!_0x2f9107) {
      _0x3ba29d.recordError(1281);
      return;
    }
    if (_0x46f76f == 35716) {
      var _0x3ab419 = _0x3afc48.getShaderInfoLog(_0x3ba29d.shaders[_0x1a9ace]);
      if (_0x3ab419 === null) {
        _0x3ab419 = "(unknown error)";
      }
      var _0x410aeb = _0x3ab419 ? _0x3ab419.length + 1 : 0;
      _0x5ce4f8[_0x2f9107 >> 2] = _0x410aeb;
    } else if (_0x46f76f == 35720) {
      var _0x525d7e = _0x3afc48.getShaderSource(_0x3ba29d.shaders[_0x1a9ace]);
      var _0x254086 = _0x525d7e ? _0x525d7e.length + 1 : 0;
      _0x5ce4f8[_0x2f9107 >> 2] = _0x254086;
    } else {
      _0x5ce4f8[_0x2f9107 >> 2] = _0x3afc48.getShaderParameter(_0x3ba29d.shaders[_0x1a9ace], _0x46f76f);
    }
  }
  function _0x486645(_0x2d8163) {
    var _0x3f3a09 = _0x3ba29d.stringCache[_0x2d8163];
    if (!_0x3f3a09) {
      switch (_0x2d8163) {
        case 7939:
          var _0x1c53fd = _0x3afc48.getSupportedExtensions() || [];
          _0x1c53fd = _0x1c53fd.concat(_0x1c53fd.map(function (_0x155494) {
            return "GL_" + _0x155494;
          }));
          _0x3f3a09 = _0x4cf08f(_0x1c53fd.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0xbe439e = _0x3afc48.getParameter(_0x2d8163);
          if (!_0xbe439e) {
            _0x3ba29d.recordError(1280);
          }
          _0x3f3a09 = _0xbe439e && _0x4cf08f(_0xbe439e);
          break;
        case 7938:
          var _0xae9d85 = _0x3afc48.getParameter(7938);
          if (_0x3ba29d.currentContext.version >= 2) {
            _0xae9d85 = "OpenGL ES 3.0 (" + _0xae9d85 + ")";
          } else {
            _0xae9d85 = "OpenGL ES 2.0 (" + _0xae9d85 + ")";
          }
          _0x3f3a09 = _0x4cf08f(_0xae9d85);
          break;
        case 35724:
          var _0x197c33 = _0x3afc48.getParameter(35724);
          var _0x5d3b40 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0x28eebd = _0x197c33.match(_0x5d3b40);
          if (_0x28eebd !== null) {
            if (_0x28eebd[1].length == 3) {
              _0x28eebd[1] = _0x28eebd[1] + "0";
            }
            _0x197c33 = "OpenGL ES GLSL ES " + _0x28eebd[1] + " (" + _0x197c33 + ")";
          }
          _0x3f3a09 = _0x4cf08f(_0x197c33);
          break;
        default:
          _0x3ba29d.recordError(1280);
      }
      _0x3ba29d.stringCache[_0x2d8163] = _0x3f3a09;
    }
    return _0x3f3a09;
  }
  function _0x41efb9(_0x40d902, _0x147151) {
    if (_0x3ba29d.currentContext.version < 2) {
      _0x3ba29d.recordError(1282);
      return 0;
    }
    var _0xa9fe66 = _0x3ba29d.stringiCache[_0x40d902];
    if (_0xa9fe66) {
      if (_0x147151 < 0 || _0x147151 >= _0xa9fe66.length) {
        _0x3ba29d.recordError(1281);
        return 0;
      }
      return _0xa9fe66[_0x147151];
    }
    switch (_0x40d902) {
      case 7939:
        var _0x53c144 = _0x3afc48.getSupportedExtensions() || [];
        _0x53c144 = _0x53c144.concat(_0x53c144.map(function (_0x3398a5) {
          return "GL_" + _0x3398a5;
        }));
        _0x53c144 = _0x53c144.map(function (_0x50027f) {
          return _0x4cf08f(_0x50027f);
        });
        _0xa9fe66 = _0x3ba29d.stringiCache[_0x40d902] = _0x53c144;
        if (_0x147151 < 0 || _0x147151 >= _0xa9fe66.length) {
          _0x3ba29d.recordError(1281);
          return 0;
        }
        return _0xa9fe66[_0x147151];
      default:
        _0x3ba29d.recordError(1280);
        return 0;
    }
  }
  function _0x2dce92(_0x1b5b42, _0xa1f846, _0x5d174b) {
    if (!_0x5d174b) {
      _0x3ba29d.recordError(1281);
      return;
    }
    _0x5ce4f8[_0x5d174b >> 2] = _0x3afc48.getTexParameter(_0x1b5b42, _0xa1f846);
  }
  function _0x395609(_0x4ca256, _0x32083e) {
    return _0x3afc48.getUniformBlockIndex(_0x3ba29d.programs[_0x4ca256], _0x51c742(_0x32083e));
  }
  function _0x5e238f(_0x4a62db, _0x20634d, _0x3381a4, _0x2deb17) {
    if (!_0x2deb17) {
      _0x3ba29d.recordError(1281);
      return;
    }
    if (_0x20634d > 0 && (_0x3381a4 == 0 || _0x2deb17 == 0)) {
      _0x3ba29d.recordError(1281);
      return;
    }
    _0x4a62db = _0x3ba29d.programs[_0x4a62db];
    var _0x38e622 = [];
    for (var _0x6f54ba = 0; _0x6f54ba < _0x20634d; _0x6f54ba++) {
      _0x38e622.push(_0x51c742(_0x5ce4f8[_0x3381a4 + _0x6f54ba * 4 >> 2]));
    }
    var _0x5d7a1a = _0x3afc48.getUniformIndices(_0x4a62db, _0x38e622);
    if (!_0x5d7a1a) {
      return;
    }
    var _0x66ab03 = _0x5d7a1a.length;
    for (var _0x6f54ba = 0; _0x6f54ba < _0x66ab03; _0x6f54ba++) {
      _0x5ce4f8[_0x2deb17 + _0x6f54ba * 4 >> 2] = _0x5d7a1a[_0x6f54ba];
    }
  }
  function _0x1ec938(_0x3c3bd2, _0x48fa8d) {
    function _0x1ec7fb(_0x3e7c54) {
      return _0x3e7c54.slice(-1) == "]" && _0x3e7c54.lastIndexOf("[");
    }
    _0x48fa8d = _0x51c742(_0x48fa8d);
    if (_0x3c3bd2 = _0x3ba29d.programs[_0x3c3bd2]) {
      var _0x4ec37e = _0x3c3bd2.uniformLocsById;
      var _0x4f1ad4 = _0x3c3bd2.uniformSizeAndIdsByName;
      var _0x384b8f;
      var _0x524397;
      var _0x2cd539 = 0;
      var _0x8b0ec1 = _0x48fa8d;
      var _0x3bd08d = _0x1ec7fb(_0x48fa8d);
      if (!_0x4ec37e) {
        _0x3c3bd2.uniformLocsById = _0x4ec37e = {};
        _0x3c3bd2.uniformArrayNamesById = {};
        for (_0x384b8f = 0; _0x384b8f < _0x3afc48.getProgramParameter(_0x3c3bd2, 35718); ++_0x384b8f) {
          var _0x144a99 = _0x3afc48.getActiveUniform(_0x3c3bd2, _0x384b8f);
          var _0x1cd94d = _0x144a99.name;
          var _0x2780bb = _0x144a99.size;
          var _0x5eab14 = _0x1ec7fb(_0x1cd94d);
          var _0x3e55fc = _0x5eab14 > 0 ? _0x1cd94d.slice(0, _0x5eab14) : _0x1cd94d;
          var _0x819e28 = _0x4f1ad4[_0x3e55fc] ? _0x4f1ad4[_0x3e55fc][1] : _0x3c3bd2.uniformIdCounter;
          _0x3c3bd2.uniformIdCounter = Math.max(_0x819e28 + _0x2780bb, _0x3c3bd2.uniformIdCounter);
          _0x4f1ad4[_0x3e55fc] = [_0x2780bb, _0x819e28];
          for (_0x524397 = 0; _0x524397 < _0x2780bb; ++_0x524397) {
            _0x4ec37e[_0x819e28] = _0x524397;
            _0x3c3bd2.uniformArrayNamesById[_0x819e28++] = _0x3e55fc;
          }
        }
      }
      if (_0x3bd08d > 0) {
        _0x2cd539 = _0x6e55b1(_0x48fa8d.slice(_0x3bd08d + 1)) >>> 0;
        _0x8b0ec1 = _0x48fa8d.slice(0, _0x3bd08d);
      }
      var _0x1e74a2 = _0x4f1ad4[_0x8b0ec1];
      if (_0x1e74a2 && _0x2cd539 < _0x1e74a2[0]) {
        _0x2cd539 += _0x1e74a2[1];
        if (_0x4ec37e[_0x2cd539] = _0x4ec37e[_0x2cd539] || _0x3afc48.getUniformLocation(_0x3c3bd2, _0x48fa8d)) {
          return _0x2cd539;
        }
      }
    } else {
      _0x3ba29d.recordError(1281);
    }
    return -1;
  }
  function _0x4389dd(_0x5842f2) {
    var _0x2674f0 = _0x3afc48.currentProgram;
    if (_0x2674f0) {
      var _0x17f197 = _0x2674f0.uniformLocsById[_0x5842f2];
      if (typeof _0x17f197 === "number") {
        _0x2674f0.uniformLocsById[_0x5842f2] = _0x17f197 = _0x3afc48.getUniformLocation(_0x2674f0, _0x2674f0.uniformArrayNamesById[_0x5842f2] + (_0x17f197 > 0 ? "[" + _0x17f197 + "]" : ""));
      }
      return _0x17f197;
    } else {
      _0x3ba29d.recordError(1282);
    }
  }
  function _0x24cd3b(_0x1e1e2b, _0xaf89b1, _0x2078a4, _0x26d266) {
    if (!_0x2078a4) {
      _0x3ba29d.recordError(1281);
      return;
    }
    _0x1e1e2b = _0x3ba29d.programs[_0x1e1e2b];
    var _0x45f342 = _0x3afc48.getUniform(_0x1e1e2b, _0x4389dd(_0xaf89b1));
    if (typeof _0x45f342 == "number" || typeof _0x45f342 == "boolean") {
      switch (_0x26d266) {
        case 0:
          _0x5ce4f8[_0x2078a4 >> 2] = _0x45f342;
          break;
        case 2:
          _0x3e31eb[_0x2078a4 >> 2] = _0x45f342;
          break;
      }
    } else {
      for (var _0x20b1cc = 0; _0x20b1cc < _0x45f342.length; _0x20b1cc++) {
        switch (_0x26d266) {
          case 0:
            _0x5ce4f8[_0x2078a4 + _0x20b1cc * 4 >> 2] = _0x45f342[_0x20b1cc];
            break;
          case 2:
            _0x3e31eb[_0x2078a4 + _0x20b1cc * 4 >> 2] = _0x45f342[_0x20b1cc];
            break;
        }
      }
    }
  }
  function _0x245d36(_0x31e245, _0x211850, _0x5ac914) {
    _0x24cd3b(_0x31e245, _0x211850, _0x5ac914, 0);
  }
  function _0x3f8a2f(_0x38164b, _0x578d2e, _0x361f92, _0x4bd525) {
    if (!_0x361f92) {
      _0x3ba29d.recordError(1281);
      return;
    }
    if (_0x3ba29d.currentContext.clientBuffers[_0x38164b].enabled) {
      _0x33bd81("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x5c9181 = _0x3afc48.getVertexAttrib(_0x38164b, _0x578d2e);
    if (_0x578d2e == 34975) {
      _0x5ce4f8[_0x361f92 >> 2] = _0x5c9181 && _0x5c9181.name;
    } else if (typeof _0x5c9181 == "number" || typeof _0x5c9181 == "boolean") {
      switch (_0x4bd525) {
        case 0:
          _0x5ce4f8[_0x361f92 >> 2] = _0x5c9181;
          break;
        case 2:
          _0x3e31eb[_0x361f92 >> 2] = _0x5c9181;
          break;
        case 5:
          _0x5ce4f8[_0x361f92 >> 2] = Math.fround(_0x5c9181);
          break;
      }
    } else {
      for (var _0xbad2b4 = 0; _0xbad2b4 < _0x5c9181.length; _0xbad2b4++) {
        switch (_0x4bd525) {
          case 0:
            _0x5ce4f8[_0x361f92 + _0xbad2b4 * 4 >> 2] = _0x5c9181[_0xbad2b4];
            break;
          case 2:
            _0x3e31eb[_0x361f92 + _0xbad2b4 * 4 >> 2] = _0x5c9181[_0xbad2b4];
            break;
          case 5:
            _0x5ce4f8[_0x361f92 + _0xbad2b4 * 4 >> 2] = Math.fround(_0x5c9181[_0xbad2b4]);
            break;
        }
      }
    }
  }
  function _0x5397b1(_0x7a99f3, _0x54cd82, _0x246fa8) {
    _0x3f8a2f(_0x7a99f3, _0x54cd82, _0x246fa8, 5);
  }
  function _0x45f8e9(_0x1e042c, _0x3077db, _0x79e9a) {
    var _0x5779ba = _0x1bb38d[_0x3077db];
    for (var _0x36fc6a = 0; _0x36fc6a < _0x3077db; _0x36fc6a++) {
      _0x5779ba[_0x36fc6a] = _0x5ce4f8[_0x79e9a + _0x36fc6a * 4 >> 2];
    }
    _0x3afc48.invalidateFramebuffer(_0x1e042c, _0x5779ba);
  }
  function _0x12a507(_0x4b0e4d) {
    return _0x3afc48.isEnabled(_0x4b0e4d);
  }
  function _0x35b018(_0x29f56a) {
    var _0x45b3b5 = _0x3ba29d.vaos[_0x29f56a];
    if (!_0x45b3b5) {
      return 0;
    }
    return _0x3afc48.isVertexArray(_0x45b3b5);
  }
  function _0x161e10(_0xcc2aed) {
    _0xcc2aed = _0x3ba29d.programs[_0xcc2aed];
    _0x3afc48.linkProgram(_0xcc2aed);
    _0xcc2aed.uniformLocsById = 0;
    _0xcc2aed.uniformSizeAndIdsByName = {};
    [_0xcc2aed.vs, _0xcc2aed.fs].forEach(function (_0xc66e66) {
      Object.keys(_0xc66e66.explicitUniformLocations).forEach(function (_0x3cff26) {
        var _0x53caa1 = _0xc66e66.explicitUniformLocations[_0x3cff26];
        _0xcc2aed.uniformSizeAndIdsByName[_0x3cff26] = [1, _0x53caa1];
        _0xcc2aed.uniformIdCounter = Math.max(_0xcc2aed.uniformIdCounter, _0x53caa1 + 1);
      });
    });
    function _0x1909fd(_0x252db6, _0x165449) {
      Object.keys(_0x165449).forEach(function (_0x18f2e0) {
        _0x252db6[_0x18f2e0] = _0x165449[_0x18f2e0];
      });
    }
    _0xcc2aed.explicitUniformBindings = {};
    _0xcc2aed.explicitSamplerBindings = {};
    [_0xcc2aed.vs, _0xcc2aed.fs].forEach(function (_0x528588) {
      _0x1909fd(_0xcc2aed.explicitUniformBindings, _0x528588.explicitUniformBindings);
      _0x1909fd(_0xcc2aed.explicitSamplerBindings, _0x528588.explicitSamplerBindings);
    });
    _0xcc2aed.explicitProgramBindingsApplied = 0;
  }
  function _0x2eb37(_0x2494e4, _0x590c31, _0xc13b31, _0x49fe68) {
    if (_0x49fe68 != 26 && _0x49fe68 != 10) {
      _0x33bd81("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x27cc64(_0x2494e4)) {
      _0x3ba29d.recordError(1280);
      _0x33bd81("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x59ef77 = _0x18375c(_0xc13b31);
    if (!_0x59ef77) {
      return 0;
    }
    _0x3ba29d.mappedBuffers[_0x6b4565(_0x2494e4)] = {
      offset: _0x590c31,
      length: _0xc13b31,
      mem: _0x59ef77,
      access: _0x49fe68
    };
    return _0x59ef77;
  }
  function _0x49ab2d(_0x2b021c, _0x346cd4) {
    if (_0x2b021c == 3317) {
      _0x3ba29d.unpackAlignment = _0x346cd4;
    }
    _0x3afc48.pixelStorei(_0x2b021c, _0x346cd4);
  }
  function _0x168aa5(_0x38b7ba, _0x3dcb18) {
    _0x3afc48.polygonOffset(_0x38b7ba, _0x3dcb18);
  }
  function _0x22a56c(_0x22a68f, _0x34f066, _0x3c5a4b, _0x27d065) {
    _0x3ba29d.recordError(1280);
  }
  function _0x5cdc07(_0xbe78f5, _0x157c76, _0x5e2a93) {
    _0x3ba29d.recordError(1280);
  }
  function _0x3a1601(_0xe0638) {
    _0x3afc48.readBuffer(_0xe0638);
  }
  function _0x42d7cc(_0x125e16, _0x3cf59e, _0x482f6d, _0x3527fe) {
    function _0x196101(_0x460d9f, _0x1c395c) {
      return _0x460d9f + _0x1c395c - 1 & -_0x1c395c;
    }
    var _0x29f23d = _0x125e16 * _0x482f6d;
    var _0x506995 = _0x196101(_0x29f23d, _0x3527fe);
    return _0x3cf59e * _0x506995;
  }
  function _0x5d2c2e(_0x5e134c) {
    var _0x1ae126 = {
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
    return _0x1ae126[_0x5e134c - 6402] || 1;
  }
  function _0x236268(_0x2dc887) {
    _0x2dc887 -= 5120;
    if (_0x2dc887 == 0) {
      return _0x28416d;
    }
    if (_0x2dc887 == 1) {
      return _0x12f402;
    }
    if (_0x2dc887 == 2) {
      return _0x4c83dc;
    }
    if (_0x2dc887 == 4) {
      return _0x5ce4f8;
    }
    if (_0x2dc887 == 6) {
      return _0x3e31eb;
    }
    if (_0x2dc887 == 5 || _0x2dc887 == 28922 || _0x2dc887 == 28520 || _0x2dc887 == 30779 || _0x2dc887 == 30782) {
      return _0x1ee1a1;
    }
    return _0x55dbec;
  }
  function _0x2135bc(_0x5e28e8) {
    return 31 - Math.clz32(_0x5e28e8.BYTES_PER_ELEMENT);
  }
  function _0x251e8c(_0x298ea7, _0x1b98a7, _0x43b3e7, _0x24dd58, _0x1493f3, _0xe3926a) {
    var _0x51c5b5 = _0x236268(_0x298ea7);
    var _0x177147 = _0x2135bc(_0x51c5b5);
    var _0x243e9c = 1 << _0x177147;
    var _0x2cf7dc = _0x5d2c2e(_0x1b98a7) * _0x243e9c;
    var _0x30fddd = _0x42d7cc(_0x43b3e7, _0x24dd58, _0x2cf7dc, _0x3ba29d.unpackAlignment);
    return _0x51c5b5.subarray(_0x1493f3 >> _0x177147, _0x1493f3 + _0x30fddd >> _0x177147);
  }
  function _0x51169e(_0x2314ac, _0x247eb9, _0x585769, _0x40a189, _0x576cb3, _0xa034f2, _0x50bbaa) {
    if (_0x3ba29d.currentContext.version >= 2) {
      if (_0x3afc48.currentPixelPackBufferBinding) {
        _0x3afc48.readPixels(_0x2314ac, _0x247eb9, _0x585769, _0x40a189, _0x576cb3, _0xa034f2, _0x50bbaa);
      } else {
        var _0x19ee08 = _0x236268(_0xa034f2);
        _0x3afc48.readPixels(_0x2314ac, _0x247eb9, _0x585769, _0x40a189, _0x576cb3, _0xa034f2, _0x19ee08, _0x50bbaa >> _0x2135bc(_0x19ee08));
      }
      return;
    }
    var _0x23a853 = _0x251e8c(_0xa034f2, _0x576cb3, _0x585769, _0x40a189, _0x50bbaa, _0x576cb3);
    if (!_0x23a853) {
      _0x3ba29d.recordError(1280);
      return;
    }
    _0x3afc48.readPixels(_0x2314ac, _0x247eb9, _0x585769, _0x40a189, _0x576cb3, _0xa034f2, _0x23a853);
  }
  function _0x14c55c(_0x14ad8e, _0x54186a, _0x497a6d, _0xf624d4) {
    _0x3afc48.renderbufferStorage(_0x14ad8e, _0x54186a, _0x497a6d, _0xf624d4);
  }
  function _0x3fd6b7(_0x3c9d9a, _0x5991c0, _0x1d882f, _0x5d42d6, _0x438894) {
    _0x3afc48.renderbufferStorageMultisample(_0x3c9d9a, _0x5991c0, _0x1d882f, _0x5d42d6, _0x438894);
  }
  function _0x45d239(_0x2028b8, _0x2704bd, _0xfbc094) {
    _0x3afc48.samplerParameteri(_0x3ba29d.samplers[_0x2028b8], _0x2704bd, _0xfbc094);
  }
  function _0x3f476e(_0x250bd0, _0x363c86, _0x152f81, _0x4bfd86) {
    _0x3afc48.scissor(_0x250bd0, _0x363c86, _0x152f81, _0x4bfd86);
  }
  function _0x5ab9e2(_0x996f7, _0x546e5e, _0x489a70 = "(", _0x1b9fba = ")") {
    var _0x411c3e = 0;
    for (; _0x546e5e < _0x996f7.length; ++_0x546e5e) {
      if (_0x996f7[_0x546e5e] == _0x489a70) {
        ++_0x411c3e;
      }
      if (_0x996f7[_0x546e5e] == _0x1b9fba && --_0x411c3e == 0) {
        return _0x546e5e;
      }
    }
  }
  function _0x9fc2c6(_0x590da7) {
    var _0x276d84 = 0;
    var _0x59c5b9 = _0x590da7.length;
    var _0x12ee49 = "";
    var _0x2a335a = [1];
    var _0x23d28a = {
      defined: function (_0x2dba8b) {
        if (_0x23d28a[_0x2dba8b[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0x524005(_0x1e9920, _0x5e488c) {
      return !(_0x1e9920.charCodeAt(_0x5e488c) > 32);
    }
    function _0x51b115(_0x6bfb71, _0x5471da) {
      while (!_0x524005(_0x6bfb71, _0x5471da)) {
        ++_0x5471da;
      }
      return _0x5471da;
    }
    function _0x55e1d1(_0x38f174, _0x1ac08d) {
      var _0x51175e = _0x38f174.charCodeAt(_0x1ac08d);
      if (_0x51175e > 32) {
        if (_0x51175e < 48) {
          return 1;
        }
        if (_0x51175e < 58) {
          return 2;
        }
        if (_0x51175e < 65) {
          return 1;
        }
        if (_0x51175e < 91 || _0x51175e == 95) {
          return 3;
        }
        if (_0x51175e < 97) {
          return 1;
        }
        if (_0x51175e < 123) {
          return 3;
        }
        return 1;
      }
      if (_0x51175e < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x5097f3(_0x4af588, _0x103e42) {
      var _0x302ed1 = [];
      var _0x2167bb = _0x4af588.length;
      for (var _0xd4b344 = 0; _0xd4b344 <= _0x2167bb; ++_0xd4b344) {
        var _0x38fade = _0x55e1d1(_0x4af588, _0xd4b344);
        if (_0x38fade == 2 || _0x38fade == 3) {
          for (var _0x50f5a3 = _0xd4b344 + 1; _0x50f5a3 <= _0x2167bb; ++_0x50f5a3) {
            var _0x402e32 = _0x55e1d1(_0x4af588, _0x50f5a3);
            if (_0x402e32 != _0x38fade && (_0x402e32 != 2 || _0x38fade != 3)) {
              _0x302ed1.push(_0x4af588.substring(_0xd4b344, _0x50f5a3));
              _0xd4b344 = _0x50f5a3 - 1;
              break;
            }
          }
        } else if (_0x38fade == 1) {
          var _0x557802 = _0x4af588.substr(_0xd4b344, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x557802)) {
            _0x302ed1.push(_0x557802);
            ++_0xd4b344;
          } else {
            _0x302ed1.push(_0x4af588[_0xd4b344]);
          }
        }
      }
      return _0x302ed1;
    }
    function _0x1d40dd(_0x20ce49, _0xa7bb61, _0x1cc0a1 = _0x20ce49.length) {
      var _0x527f0b = _0x20ce49.length;
      var _0x5318fa = "";
      for (var _0x49440f = _0xa7bb61; _0x49440f < _0x1cc0a1; ++_0x49440f) {
        var _0x4b6b68 = _0x55e1d1(_0x20ce49, _0x49440f);
        if (_0x4b6b68 == 3) {
          for (var _0x579772 = _0x49440f + 1; _0x579772 <= _0x1cc0a1; ++_0x579772) {
            var _0x7615e6 = _0x55e1d1(_0x20ce49, _0x579772);
            if (_0x7615e6 != 2 && _0x7615e6 != 3) {
              var _0x1f7e2a = _0x20ce49.substring(_0x49440f, _0x579772);
              var _0x30c6e3 = _0x23d28a[_0x1f7e2a];
              if (_0x30c6e3) {
                var _0x4e39c3 = _0x20ce49.substring(_0xa7bb61, _0x49440f);
                if (_0x30c6e3.length && _0x20ce49[_0x579772] == "(") {
                  var _0x3702bc = _0x5ab9e2(_0x20ce49, _0x579772);
                  _0x4e39c3 += _0x30c6e3(_0x20ce49.substring(_0x579772 + 1, _0x3702bc).split(",")) + _0x20ce49.substring(_0x3702bc + 1, _0x1cc0a1);
                } else {
                  _0x4e39c3 += _0x30c6e3() + _0x20ce49.substring(_0x579772, _0x1cc0a1);
                }
                return _0x1d40dd(_0x4e39c3, 0);
              } else {
                _0x5318fa += _0x1f7e2a;
                _0x49440f = _0x579772 - 1;
                break;
              }
            }
          }
        } else {
          _0x5318fa += _0x20ce49[_0x49440f];
        }
      }
      return _0x5318fa;
    }
    function _0x20ea70(_0x1c365b) {
      while (_0x1c365b.length > 1 || typeof _0x1c365b[0] != "function") {
        _0x1c365b = function (_0x1b00f4) {
          var _0x3c0730;
          var _0x25f0db;
          var _0x1664ed;
          var _0x121b84 = -2;
          for (_0x25f0db = 0; _0x25f0db < _0x1b00f4.length; ++_0x25f0db) {
            if ((_0x1664ed = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x1b00f4[_0x25f0db])) > _0x121b84) {
              _0x3c0730 = _0x25f0db;
              _0x121b84 = _0x1664ed;
            }
          }
          if (_0x121b84 == 13) {
            var _0x25f0db = _0x5ab9e2(_0x1b00f4, _0x3c0730);
            if (_0x25f0db) {
              _0x1b00f4.splice(_0x3c0730, _0x25f0db + 1 - _0x3c0730, _0x20ea70(_0x1b00f4.slice(_0x3c0730 + 1, _0x25f0db)));
              return _0x1b00f4;
            }
          }
          if (_0x121b84 == 4) {
            _0x3c0730 = _0x1b00f4.lastIndexOf("!");
            var _0x229c83 = _0x20ea70(_0x1b00f4.slice(_0x3c0730 + 1, _0x3c0730 + 2));
            _0x1b00f4.splice(_0x3c0730, 2, function () {
              return !_0x229c83();
            });
            return _0x1b00f4;
          }
          if (_0x121b84 >= 0) {
            var _0x8208e5 = _0x20ea70(_0x1b00f4.slice(0, _0x3c0730));
            var _0x246426 = _0x20ea70(_0x1b00f4.slice(_0x3c0730 + 1));
            switch (_0x1b00f4[_0x3c0730]) {
              case "&&":
                return [function () {
                  return _0x8208e5() && _0x246426();
                }];
              case "||":
                return [function () {
                  return _0x8208e5() || _0x246426();
                }];
              case "==":
                return [function () {
                  return _0x8208e5() == _0x246426();
                }];
              case "!=":
                return [function () {
                  return _0x8208e5() != _0x246426();
                }];
              case "<":
                return [function () {
                  return _0x8208e5() < _0x246426();
                }];
              case "<=":
                return [function () {
                  return _0x8208e5() <= _0x246426();
                }];
              case ">":
                return [function () {
                  return _0x8208e5() > _0x246426();
                }];
              case ">=":
                return [function () {
                  return _0x8208e5() >= _0x246426();
                }];
              case "+":
                return [function () {
                  return _0x8208e5() + _0x246426();
                }];
              case "-":
                return [function () {
                  return _0x8208e5() - _0x246426();
                }];
              case "*":
                return [function () {
                  return _0x8208e5() * _0x246426();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x8208e5() / _0x246426());
                }];
            }
          }
          var _0x48c3fc = _0x6e55b1(_0x1b00f4[_0x3c0730]);
          return [function () {
            return _0x48c3fc;
          }];
        }(_0x1c365b);
      }
      return _0x1c365b[0];
    }
    for (; _0x276d84 < _0x59c5b9; ++_0x276d84) {
      var _0x246801 = _0x276d84;
      _0x276d84 = _0x590da7.indexOf("\n", _0x276d84);
      if (_0x276d84 < 0) {
        _0x276d84 = _0x59c5b9;
      }
      for (var _0xc5bd3f = _0x246801; _0xc5bd3f < _0x276d84 && _0x524005(_0x590da7, _0xc5bd3f); ++_0xc5bd3f);
      var _0x15fbb8 = _0x2a335a[_0x2a335a.length - 1];
      if (_0x590da7[_0xc5bd3f] != "#") {
        if (_0x15fbb8) {
          _0x12ee49 += _0x1d40dd(_0x590da7, _0x246801, _0x276d84) + "\n";
        }
        continue;
      }
      var _0x4ae6ff = _0x51b115(_0x590da7, _0xc5bd3f);
      var _0x50120b = _0x590da7.substring(_0xc5bd3f + 1, _0x4ae6ff);
      var _0x58fdae = _0x590da7.substring(_0x4ae6ff, _0x276d84).trim();
      switch (_0x50120b) {
        case "if":
          var _0x1d8d1f = _0x5097f3(_0x1d40dd(_0x58fdae, 0));
          var _0x13570c = _0x20ea70(_0x1d8d1f);
          var _0x20195c = _0x13570c();
          _0x2a335a.push(!!_0x20195c * _0x2a335a[_0x2a335a.length - 1]);
          break;
        case "ifdef":
          _0x2a335a.push(!!_0x23d28a[_0x58fdae] * _0x2a335a[_0x2a335a.length - 1]);
          break;
        case "ifndef":
          _0x2a335a.push(!_0x23d28a[_0x58fdae] * _0x2a335a[_0x2a335a.length - 1]);
          break;
        case "else":
          _0x2a335a[_0x2a335a.length - 1] = 1 - _0x2a335a[_0x2a335a.length - 1];
          break;
        case "endif":
          _0x2a335a.pop();
          break;
        case "define":
          if (_0x15fbb8) {
            var _0x5a03b7 = _0x58fdae.indexOf("(");
            var _0x1472ee = _0x51b115(_0x58fdae, 0);
            if (_0x1472ee < _0x5a03b7) {
              _0x5a03b7 = 0;
            }
            if (_0x5a03b7 > 0) {
              var _0x358f6f = _0x58fdae.indexOf(")", _0x5a03b7);
              let _0x5a9a8f = _0x58fdae.substring(_0x5a03b7 + 1, _0x358f6f).split(",").map(_0x32b060 => _0x32b060.trim());
              let _0x575c6a = _0x5097f3(_0x58fdae.substring(_0x358f6f + 1).trim());
              _0x23d28a[_0x58fdae.substring(0, _0x5a03b7)] = function (_0x3b6cb2) {
                var _0x3c7da8 = "";
                _0x575c6a.forEach(_0xda1020 => {
                  var _0x13528b = _0x5a9a8f.indexOf(_0xda1020);
                  _0x3c7da8 += _0x13528b >= 0 ? _0x3b6cb2[_0x13528b] : _0xda1020;
                });
                return _0x3c7da8;
              };
            } else {
              let _0x102e7f = _0x1d40dd(_0x58fdae.substring(_0x1472ee + 1).trim(), 0);
              _0x23d28a[_0x58fdae.substring(0, _0x1472ee)] = function () {
                return _0x102e7f;
              };
            }
          }
          break;
        case "undef":
          if (_0x15fbb8) {
            delete _0x23d28a[_0x58fdae];
          }
          break;
        default:
          if (_0x50120b != "version" && _0x50120b != "pragma" && _0x50120b != "extension") {}
          _0x12ee49 += _0x1d40dd(_0x590da7, _0x246801, _0x276d84) + "\n";
      }
    }
    return _0x12ee49;
  }
  function _0x5b9dde(_0x3554a5) {
    var _0x542b9d = 0;
    var _0x35ee81 = "";
    var _0x3699ae;
    var _0x138eca;
    var _0x45b404 = _0x3554a5.length;
    for (; _0x542b9d < _0x45b404; ++_0x542b9d) {
      _0x3699ae = _0x3554a5[_0x542b9d];
      if (_0x3699ae == "/") {
        _0x138eca = _0x3554a5[_0x542b9d + 1];
        if (_0x138eca == "/") {
          while (_0x542b9d < _0x45b404 && _0x3554a5[_0x542b9d + 1] != "\n") {
            ++_0x542b9d;
          }
        } else if (_0x138eca == "*") {
          while (_0x542b9d < _0x45b404 && (_0x3554a5[_0x542b9d - 1] != "*" || _0x3554a5[_0x542b9d] != "/")) {
            ++_0x542b9d;
          }
        } else {
          _0x35ee81 += _0x3699ae;
        }
      } else {
        _0x35ee81 += _0x3699ae;
      }
    }
    return _0x35ee81;
  }
  function _0x2d6cf5(_0x51430b, _0x3dbde2, _0x26d30a, _0x446401) {
    var _0x35ac3e = _0x3ba29d.getSource(_0x51430b, _0x3dbde2, _0x26d30a, _0x446401);
    _0x35ac3e = _0x9fc2c6(_0x5b9dde(_0x35ac3e));
    var _0x2f512a = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0xbcf8c7 = {};
    var _0x24be68;
    while (_0x24be68 = _0x2f512a.exec(_0x35ac3e)) {
      _0xbcf8c7[_0x24be68[5]] = _0x6e55b1(_0x24be68[1]);
      if (!(_0xbcf8c7[_0x24be68[5]] >= 0) || !(_0xbcf8c7[_0x24be68[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0xbcf8c7[_0x24be68[5]] + "\"! (" + _0x24be68[0] + ")");
        _0x3ba29d.recordError(1281);
        return;
      }
    }
    _0x35ac3e = _0x35ac3e.replace(_0x2f512a, "$2");
    _0x3ba29d.shaders[_0x51430b].explicitUniformLocations = _0xbcf8c7;
    var _0x4863e2 = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0x27dc79 = {};
    var _0x917e1d = {};
    var _0x3266b8;
    while (_0x3266b8 = _0x4863e2.exec(_0x35ac3e)) {
      var _0x256141 = 1;
      for (var _0x2941c0 = _0x3266b8.index; _0x2941c0 < _0x35ac3e.length && _0x35ac3e[_0x2941c0] != ";"; ++_0x2941c0) {
        if (_0x35ac3e[_0x2941c0] == "[") {
          _0x256141 = _0x6e55b1(_0x35ac3e.slice(_0x2941c0 + 1));
          break;
        }
        if (_0x35ac3e[_0x2941c0] == "{") {
          _0x2941c0 = _0x5ab9e2(_0x35ac3e, _0x2941c0, "{", "}") - 1;
        }
      }
      var _0x3d6300 = _0x6e55b1(_0x3266b8[1]);
      var _0x41dc13 = 34930;
      if (_0x3266b8[3] && _0x3266b8[2].indexOf("sampler") != -1) {
        _0x27dc79[_0x3266b8[3]] = [_0x3d6300, _0x256141];
      } else {
        _0x41dc13 = 35374;
        _0x917e1d[_0x3266b8[2]] = [_0x3d6300, _0x256141];
      }
      var _0x3ed489 = _0x3afc48.getParameter(_0x41dc13);
      if (!(_0x3d6300 >= 0) || !(_0x3d6300 + _0x256141 <= _0x3ed489)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x3d6300 + "\"! (" + _0x3266b8[0] + "). Valid range is [0, " + _0x3ed489 + "-1]");
        _0x3ba29d.recordError(1281);
        return;
      }
    }
    _0x35ac3e = _0x35ac3e.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0x35ac3e = _0x35ac3e.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0x35ac3e = _0x35ac3e.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0x3ba29d.shaders[_0x51430b].explicitSamplerBindings = _0x27dc79;
    _0x3ba29d.shaders[_0x51430b].explicitUniformBindings = _0x917e1d;
    _0x3afc48.shaderSource(_0x3ba29d.shaders[_0x51430b], _0x35ac3e);
  }
  function _0x73d478(_0x1b6214, _0x50ab79, _0x57540c, _0x5773fc) {
    _0x3afc48.stencilFuncSeparate(_0x1b6214, _0x50ab79, _0x57540c, _0x5773fc);
  }
  function _0x100c22(_0xa22bea) {
    _0x3afc48.stencilMask(_0xa22bea);
  }
  function _0x143a81(_0x54d1bf, _0x1f1dc5, _0x11aae7, _0x2dd5bd) {
    _0x3afc48.stencilOpSeparate(_0x54d1bf, _0x1f1dc5, _0x11aae7, _0x2dd5bd);
  }
  function _0x2da268(_0x2427f3, _0x188c0b, _0x16b06f, _0x25abae, _0x4aba0d, _0x580343, _0xd2499a, _0xa84d9f, _0x52f715) {
    if (_0x3ba29d.currentContext.version >= 2) {
      if (_0x3afc48.currentPixelUnpackBufferBinding) {
        _0x3afc48.texImage2D(_0x2427f3, _0x188c0b, _0x16b06f, _0x25abae, _0x4aba0d, _0x580343, _0xd2499a, _0xa84d9f, _0x52f715);
      } else if (_0x52f715) {
        var _0x51b00f = _0x236268(_0xa84d9f);
        _0x3afc48.texImage2D(_0x2427f3, _0x188c0b, _0x16b06f, _0x25abae, _0x4aba0d, _0x580343, _0xd2499a, _0xa84d9f, _0x51b00f, _0x52f715 >> _0x2135bc(_0x51b00f));
      } else {
        _0x3afc48.texImage2D(_0x2427f3, _0x188c0b, _0x16b06f, _0x25abae, _0x4aba0d, _0x580343, _0xd2499a, _0xa84d9f, null);
      }
      return;
    }
    _0x3afc48.texImage2D(_0x2427f3, _0x188c0b, _0x16b06f, _0x25abae, _0x4aba0d, _0x580343, _0xd2499a, _0xa84d9f, _0x52f715 ? _0x251e8c(_0xa84d9f, _0xd2499a, _0x25abae, _0x4aba0d, _0x52f715, _0x16b06f) : null);
  }
  function _0x4815c5(_0x2aea22, _0x438ae9, _0x60a994, _0x459dfc, _0x4e7a6b, _0x230a85, _0x1f3ffa, _0x21c24b, _0x145a70, _0x5c602f) {
    if (_0x3afc48.currentPixelUnpackBufferBinding) {
      _0x3afc48.texImage3D(_0x2aea22, _0x438ae9, _0x60a994, _0x459dfc, _0x4e7a6b, _0x230a85, _0x1f3ffa, _0x21c24b, _0x145a70, _0x5c602f);
    } else if (_0x5c602f) {
      var _0x3188b2 = _0x236268(_0x145a70);
      _0x3afc48.texImage3D(_0x2aea22, _0x438ae9, _0x60a994, _0x459dfc, _0x4e7a6b, _0x230a85, _0x1f3ffa, _0x21c24b, _0x145a70, _0x3188b2, _0x5c602f >> _0x2135bc(_0x3188b2));
    } else {
      _0x3afc48.texImage3D(_0x2aea22, _0x438ae9, _0x60a994, _0x459dfc, _0x4e7a6b, _0x230a85, _0x1f3ffa, _0x21c24b, _0x145a70, null);
    }
  }
  function _0x367b0a(_0x26712a, _0x46bb1a, _0x374c09) {
    _0x3afc48.texParameterf(_0x26712a, _0x46bb1a, _0x374c09);
  }
  function _0x25d3f4(_0x111177, _0x5e3f74, _0x38dea5) {
    _0x3afc48.texParameteri(_0x111177, _0x5e3f74, _0x38dea5);
  }
  function _0x52c2af(_0x3dc6ff, _0x165f4b, _0x2b3ba5) {
    var _0x594ac5 = _0x5ce4f8[_0x2b3ba5 >> 2];
    _0x3afc48.texParameteri(_0x3dc6ff, _0x165f4b, _0x594ac5);
  }
  function _0x3a6ce5(_0x5c696d, _0x40f588, _0x34a65f, _0x51066c, _0x104ee2) {
    _0x3afc48.texStorage2D(_0x5c696d, _0x40f588, _0x34a65f, _0x51066c, _0x104ee2);
  }
  function _0x341395(_0x45ec37, _0x513f4b, _0x49ef28, _0x2cc08f, _0x38f14b, _0x4d1f0c) {
    _0x3afc48.texStorage3D(_0x45ec37, _0x513f4b, _0x49ef28, _0x2cc08f, _0x38f14b, _0x4d1f0c);
  }
  function _0x4ad53b(_0x1b19ec, _0x2cf29a, _0x3c042e, _0x21407d, _0x277fe5, _0x8a119b, _0x563d0c, _0x20d185, _0x178549) {
    if (_0x3ba29d.currentContext.version >= 2) {
      if (_0x3afc48.currentPixelUnpackBufferBinding) {
        _0x3afc48.texSubImage2D(_0x1b19ec, _0x2cf29a, _0x3c042e, _0x21407d, _0x277fe5, _0x8a119b, _0x563d0c, _0x20d185, _0x178549);
      } else if (_0x178549) {
        var _0x1a3952 = _0x236268(_0x20d185);
        _0x3afc48.texSubImage2D(_0x1b19ec, _0x2cf29a, _0x3c042e, _0x21407d, _0x277fe5, _0x8a119b, _0x563d0c, _0x20d185, _0x1a3952, _0x178549 >> _0x2135bc(_0x1a3952));
      } else {
        _0x3afc48.texSubImage2D(_0x1b19ec, _0x2cf29a, _0x3c042e, _0x21407d, _0x277fe5, _0x8a119b, _0x563d0c, _0x20d185, null);
      }
      return;
    }
    var _0x3408db = null;
    if (_0x178549) {
      _0x3408db = _0x251e8c(_0x20d185, _0x563d0c, _0x277fe5, _0x8a119b, _0x178549, 0);
    }
    _0x3afc48.texSubImage2D(_0x1b19ec, _0x2cf29a, _0x3c042e, _0x21407d, _0x277fe5, _0x8a119b, _0x563d0c, _0x20d185, _0x3408db);
  }
  function _0x4f5f36(_0x54efea, _0x517257, _0x5ad3e3, _0x4a4798, _0x1368a7, _0x4834f6, _0x307aef, _0x3f5e43, _0x5d0d51, _0x10a217, _0x576d50) {
    if (_0x3afc48.currentPixelUnpackBufferBinding) {
      _0x3afc48.texSubImage3D(_0x54efea, _0x517257, _0x5ad3e3, _0x4a4798, _0x1368a7, _0x4834f6, _0x307aef, _0x3f5e43, _0x5d0d51, _0x10a217, _0x576d50);
    } else if (_0x576d50) {
      var _0x4d4a33 = _0x236268(_0x10a217);
      _0x3afc48.texSubImage3D(_0x54efea, _0x517257, _0x5ad3e3, _0x4a4798, _0x1368a7, _0x4834f6, _0x307aef, _0x3f5e43, _0x5d0d51, _0x10a217, _0x4d4a33, _0x576d50 >> _0x2135bc(_0x4d4a33));
    } else {
      _0x3afc48.texSubImage3D(_0x54efea, _0x517257, _0x5ad3e3, _0x4a4798, _0x1368a7, _0x4834f6, _0x307aef, _0x3f5e43, _0x5d0d51, _0x10a217, null);
    }
  }
  function _0x37ef3c(_0x1ffcd4, _0x168445, _0xeb60f3, _0x436ea6) {
    _0x1ffcd4 = _0x3ba29d.programs[_0x1ffcd4];
    var _0x2abe1a = [];
    for (var _0x2e47fc = 0; _0x2e47fc < _0x168445; _0x2e47fc++) {
      _0x2abe1a.push(_0x51c742(_0x5ce4f8[_0xeb60f3 + _0x2e47fc * 4 >> 2]));
    }
    _0x3afc48.transformFeedbackVaryings(_0x1ffcd4, _0x2abe1a, _0x436ea6);
  }
  var _0x276155 = [];
  function _0x12473d(_0x69ebe7, _0x4efedb, _0x14cb2b) {
    if (_0x3ba29d.currentContext.version >= 2) {
      _0x3afc48.uniform1fv(_0x4389dd(_0x69ebe7), _0x3e31eb, _0x14cb2b >> 2, _0x4efedb);
      return;
    }
    if (_0x4efedb <= 288) {
      var _0x171860 = _0x276155[_0x4efedb - 1];
      for (var _0x40032b = 0; _0x40032b < _0x4efedb; ++_0x40032b) {
        _0x171860[_0x40032b] = _0x3e31eb[_0x14cb2b + _0x40032b * 4 >> 2];
      }
    } else {
      var _0x171860 = _0x3e31eb.subarray(_0x14cb2b >> 2, _0x14cb2b + _0x4efedb * 4 >> 2);
    }
    _0x3afc48.uniform1fv(_0x4389dd(_0x69ebe7), _0x171860);
  }
  function _0x32efa5(_0x3edcf8, _0x56b28a) {
    _0x3afc48.uniform1i(_0x4389dd(_0x3edcf8), _0x56b28a);
  }
  var _0x596965 = [];
  function _0x36843b(_0x298222, _0x323a8a, _0x41ba1d) {
    if (_0x3ba29d.currentContext.version >= 2) {
      _0x3afc48.uniform1iv(_0x4389dd(_0x298222), _0x5ce4f8, _0x41ba1d >> 2, _0x323a8a);
      return;
    }
    if (_0x323a8a <= 288) {
      var _0x5f48a4 = _0x596965[_0x323a8a - 1];
      for (var _0x1b5d9b = 0; _0x1b5d9b < _0x323a8a; ++_0x1b5d9b) {
        _0x5f48a4[_0x1b5d9b] = _0x5ce4f8[_0x41ba1d + _0x1b5d9b * 4 >> 2];
      }
    } else {
      var _0x5f48a4 = _0x5ce4f8.subarray(_0x41ba1d >> 2, _0x41ba1d + _0x323a8a * 4 >> 2);
    }
    _0x3afc48.uniform1iv(_0x4389dd(_0x298222), _0x5f48a4);
  }
  function _0x4b6ca0(_0x5dacf9, _0x3c3e45, _0x32c90c) {
    _0x3afc48.uniform1uiv(_0x4389dd(_0x5dacf9), _0x1ee1a1, _0x32c90c >> 2, _0x3c3e45);
  }
  function _0x4c24e3(_0x3d93a8, _0xc51d14, _0x4ebc6b) {
    if (_0x3ba29d.currentContext.version >= 2) {
      _0x3afc48.uniform2fv(_0x4389dd(_0x3d93a8), _0x3e31eb, _0x4ebc6b >> 2, _0xc51d14 * 2);
      return;
    }
    if (_0xc51d14 <= 144) {
      var _0x47df5e = _0x276155[_0xc51d14 * 2 - 1];
      for (var _0x444acd = 0; _0x444acd < _0xc51d14 * 2; _0x444acd += 2) {
        _0x47df5e[_0x444acd] = _0x3e31eb[_0x4ebc6b + _0x444acd * 4 >> 2];
        _0x47df5e[_0x444acd + 1] = _0x3e31eb[_0x4ebc6b + (_0x444acd * 4 + 4) >> 2];
      }
    } else {
      var _0x47df5e = _0x3e31eb.subarray(_0x4ebc6b >> 2, _0x4ebc6b + _0xc51d14 * 8 >> 2);
    }
    _0x3afc48.uniform2fv(_0x4389dd(_0x3d93a8), _0x47df5e);
  }
  function _0x30fa89(_0x520e8d, _0x2d129, _0x5a942e) {
    if (_0x3ba29d.currentContext.version >= 2) {
      _0x3afc48.uniform2iv(_0x4389dd(_0x520e8d), _0x5ce4f8, _0x5a942e >> 2, _0x2d129 * 2);
      return;
    }
    if (_0x2d129 <= 144) {
      var _0xbe9de6 = _0x596965[_0x2d129 * 2 - 1];
      for (var _0x19a003 = 0; _0x19a003 < _0x2d129 * 2; _0x19a003 += 2) {
        _0xbe9de6[_0x19a003] = _0x5ce4f8[_0x5a942e + _0x19a003 * 4 >> 2];
        _0xbe9de6[_0x19a003 + 1] = _0x5ce4f8[_0x5a942e + (_0x19a003 * 4 + 4) >> 2];
      }
    } else {
      var _0xbe9de6 = _0x5ce4f8.subarray(_0x5a942e >> 2, _0x5a942e + _0x2d129 * 8 >> 2);
    }
    _0x3afc48.uniform2iv(_0x4389dd(_0x520e8d), _0xbe9de6);
  }
  function _0x2dd29e(_0x4eb1eb, _0x35032a, _0x387430) {
    _0x3afc48.uniform2uiv(_0x4389dd(_0x4eb1eb), _0x1ee1a1, _0x387430 >> 2, _0x35032a * 2);
  }
  function _0xbe3781(_0x4e694a, _0x4387de, _0x5dca18) {
    if (_0x3ba29d.currentContext.version >= 2) {
      _0x3afc48.uniform3fv(_0x4389dd(_0x4e694a), _0x3e31eb, _0x5dca18 >> 2, _0x4387de * 3);
      return;
    }
    if (_0x4387de <= 96) {
      var _0x574932 = _0x276155[_0x4387de * 3 - 1];
      for (var _0x249f01 = 0; _0x249f01 < _0x4387de * 3; _0x249f01 += 3) {
        _0x574932[_0x249f01] = _0x3e31eb[_0x5dca18 + _0x249f01 * 4 >> 2];
        _0x574932[_0x249f01 + 1] = _0x3e31eb[_0x5dca18 + (_0x249f01 * 4 + 4) >> 2];
        _0x574932[_0x249f01 + 2] = _0x3e31eb[_0x5dca18 + (_0x249f01 * 4 + 8) >> 2];
      }
    } else {
      var _0x574932 = _0x3e31eb.subarray(_0x5dca18 >> 2, _0x5dca18 + _0x4387de * 12 >> 2);
    }
    _0x3afc48.uniform3fv(_0x4389dd(_0x4e694a), _0x574932);
  }
  function _0x30396d(_0x2aff57, _0x20dc46, _0x239541) {
    if (_0x3ba29d.currentContext.version >= 2) {
      _0x3afc48.uniform3iv(_0x4389dd(_0x2aff57), _0x5ce4f8, _0x239541 >> 2, _0x20dc46 * 3);
      return;
    }
    if (_0x20dc46 <= 96) {
      var _0x2c6b61 = _0x596965[_0x20dc46 * 3 - 1];
      for (var _0x9dcfc2 = 0; _0x9dcfc2 < _0x20dc46 * 3; _0x9dcfc2 += 3) {
        _0x2c6b61[_0x9dcfc2] = _0x5ce4f8[_0x239541 + _0x9dcfc2 * 4 >> 2];
        _0x2c6b61[_0x9dcfc2 + 1] = _0x5ce4f8[_0x239541 + (_0x9dcfc2 * 4 + 4) >> 2];
        _0x2c6b61[_0x9dcfc2 + 2] = _0x5ce4f8[_0x239541 + (_0x9dcfc2 * 4 + 8) >> 2];
      }
    } else {
      var _0x2c6b61 = _0x5ce4f8.subarray(_0x239541 >> 2, _0x239541 + _0x20dc46 * 12 >> 2);
    }
    _0x3afc48.uniform3iv(_0x4389dd(_0x2aff57), _0x2c6b61);
  }
  function _0x1e245d(_0x39cefa, _0x12a560, _0xb8285c) {
    _0x3afc48.uniform3uiv(_0x4389dd(_0x39cefa), _0x1ee1a1, _0xb8285c >> 2, _0x12a560 * 3);
  }
  function _0x71d4f7(_0x28e193, _0x4ab70d, _0x1f60ce) {
    if (_0x3ba29d.currentContext.version >= 2) {
      _0x3afc48.uniform4fv(_0x4389dd(_0x28e193), _0x3e31eb, _0x1f60ce >> 2, _0x4ab70d * 4);
      return;
    }
    if (_0x4ab70d <= 72) {
      var _0x6b6a44 = _0x276155[_0x4ab70d * 4 - 1];
      var _0x34b1bc = _0x3e31eb;
      _0x1f60ce >>= 2;
      for (var _0x546044 = 0; _0x546044 < _0x4ab70d * 4; _0x546044 += 4) {
        var _0x21e47a = _0x1f60ce + _0x546044;
        _0x6b6a44[_0x546044] = _0x34b1bc[_0x21e47a];
        _0x6b6a44[_0x546044 + 1] = _0x34b1bc[_0x21e47a + 1];
        _0x6b6a44[_0x546044 + 2] = _0x34b1bc[_0x21e47a + 2];
        _0x6b6a44[_0x546044 + 3] = _0x34b1bc[_0x21e47a + 3];
      }
    } else {
      var _0x6b6a44 = _0x3e31eb.subarray(_0x1f60ce >> 2, _0x1f60ce + _0x4ab70d * 16 >> 2);
    }
    _0x3afc48.uniform4fv(_0x4389dd(_0x28e193), _0x6b6a44);
  }
  function _0x2f40ec(_0x327e87, _0x36cb83, _0x417615) {
    if (_0x3ba29d.currentContext.version >= 2) {
      _0x3afc48.uniform4iv(_0x4389dd(_0x327e87), _0x5ce4f8, _0x417615 >> 2, _0x36cb83 * 4);
      return;
    }
    if (_0x36cb83 <= 72) {
      var _0x1fd8e6 = _0x596965[_0x36cb83 * 4 - 1];
      for (var _0x515188 = 0; _0x515188 < _0x36cb83 * 4; _0x515188 += 4) {
        _0x1fd8e6[_0x515188] = _0x5ce4f8[_0x417615 + _0x515188 * 4 >> 2];
        _0x1fd8e6[_0x515188 + 1] = _0x5ce4f8[_0x417615 + (_0x515188 * 4 + 4) >> 2];
        _0x1fd8e6[_0x515188 + 2] = _0x5ce4f8[_0x417615 + (_0x515188 * 4 + 8) >> 2];
        _0x1fd8e6[_0x515188 + 3] = _0x5ce4f8[_0x417615 + (_0x515188 * 4 + 12) >> 2];
      }
    } else {
      var _0x1fd8e6 = _0x5ce4f8.subarray(_0x417615 >> 2, _0x417615 + _0x36cb83 * 16 >> 2);
    }
    _0x3afc48.uniform4iv(_0x4389dd(_0x327e87), _0x1fd8e6);
  }
  function _0x37cd65(_0x5a0da3, _0x3c4667, _0x2ed4b5) {
    _0x3afc48.uniform4uiv(_0x4389dd(_0x5a0da3), _0x1ee1a1, _0x2ed4b5 >> 2, _0x3c4667 * 4);
  }
  function _0x166eda(_0xc53a9b, _0x5ceda9, _0x235aea) {
    _0xc53a9b = _0x3ba29d.programs[_0xc53a9b];
    _0x3afc48.uniformBlockBinding(_0xc53a9b, _0x5ceda9, _0x235aea);
  }
  function _0x197fef(_0x3a10c8, _0xb3ff84, _0x4e86c9, _0xcbb044) {
    if (_0x3ba29d.currentContext.version >= 2) {
      _0x3afc48.uniformMatrix3fv(_0x4389dd(_0x3a10c8), !!_0x4e86c9, _0x3e31eb, _0xcbb044 >> 2, _0xb3ff84 * 9);
      return;
    }
    if (_0xb3ff84 <= 32) {
      var _0x3d2b73 = _0x276155[_0xb3ff84 * 9 - 1];
      for (var _0x29a886 = 0; _0x29a886 < _0xb3ff84 * 9; _0x29a886 += 9) {
        _0x3d2b73[_0x29a886] = _0x3e31eb[_0xcbb044 + _0x29a886 * 4 >> 2];
        _0x3d2b73[_0x29a886 + 1] = _0x3e31eb[_0xcbb044 + (_0x29a886 * 4 + 4) >> 2];
        _0x3d2b73[_0x29a886 + 2] = _0x3e31eb[_0xcbb044 + (_0x29a886 * 4 + 8) >> 2];
        _0x3d2b73[_0x29a886 + 3] = _0x3e31eb[_0xcbb044 + (_0x29a886 * 4 + 12) >> 2];
        _0x3d2b73[_0x29a886 + 4] = _0x3e31eb[_0xcbb044 + (_0x29a886 * 4 + 16) >> 2];
        _0x3d2b73[_0x29a886 + 5] = _0x3e31eb[_0xcbb044 + (_0x29a886 * 4 + 20) >> 2];
        _0x3d2b73[_0x29a886 + 6] = _0x3e31eb[_0xcbb044 + (_0x29a886 * 4 + 24) >> 2];
        _0x3d2b73[_0x29a886 + 7] = _0x3e31eb[_0xcbb044 + (_0x29a886 * 4 + 28) >> 2];
        _0x3d2b73[_0x29a886 + 8] = _0x3e31eb[_0xcbb044 + (_0x29a886 * 4 + 32) >> 2];
      }
    } else {
      var _0x3d2b73 = _0x3e31eb.subarray(_0xcbb044 >> 2, _0xcbb044 + _0xb3ff84 * 36 >> 2);
    }
    _0x3afc48.uniformMatrix3fv(_0x4389dd(_0x3a10c8), !!_0x4e86c9, _0x3d2b73);
  }
  function _0x48391f(_0xd83126, _0x55cef2, _0x30cecf, _0xa7358b) {
    if (_0x3ba29d.currentContext.version >= 2) {
      _0x3afc48.uniformMatrix4fv(_0x4389dd(_0xd83126), !!_0x30cecf, _0x3e31eb, _0xa7358b >> 2, _0x55cef2 * 16);
      return;
    }
    if (_0x55cef2 <= 18) {
      var _0x528b9d = _0x276155[_0x55cef2 * 16 - 1];
      var _0x102826 = _0x3e31eb;
      _0xa7358b >>= 2;
      for (var _0x1193cc = 0; _0x1193cc < _0x55cef2 * 16; _0x1193cc += 16) {
        var _0x3ac2b9 = _0xa7358b + _0x1193cc;
        _0x528b9d[_0x1193cc] = _0x102826[_0x3ac2b9];
        _0x528b9d[_0x1193cc + 1] = _0x102826[_0x3ac2b9 + 1];
        _0x528b9d[_0x1193cc + 2] = _0x102826[_0x3ac2b9 + 2];
        _0x528b9d[_0x1193cc + 3] = _0x102826[_0x3ac2b9 + 3];
        _0x528b9d[_0x1193cc + 4] = _0x102826[_0x3ac2b9 + 4];
        _0x528b9d[_0x1193cc + 5] = _0x102826[_0x3ac2b9 + 5];
        _0x528b9d[_0x1193cc + 6] = _0x102826[_0x3ac2b9 + 6];
        _0x528b9d[_0x1193cc + 7] = _0x102826[_0x3ac2b9 + 7];
        _0x528b9d[_0x1193cc + 8] = _0x102826[_0x3ac2b9 + 8];
        _0x528b9d[_0x1193cc + 9] = _0x102826[_0x3ac2b9 + 9];
        _0x528b9d[_0x1193cc + 10] = _0x102826[_0x3ac2b9 + 10];
        _0x528b9d[_0x1193cc + 11] = _0x102826[_0x3ac2b9 + 11];
        _0x528b9d[_0x1193cc + 12] = _0x102826[_0x3ac2b9 + 12];
        _0x528b9d[_0x1193cc + 13] = _0x102826[_0x3ac2b9 + 13];
        _0x528b9d[_0x1193cc + 14] = _0x102826[_0x3ac2b9 + 14];
        _0x528b9d[_0x1193cc + 15] = _0x102826[_0x3ac2b9 + 15];
      }
    } else {
      var _0x528b9d = _0x3e31eb.subarray(_0xa7358b >> 2, _0xa7358b + _0x55cef2 * 64 >> 2);
    }
    _0x3afc48.uniformMatrix4fv(_0x4389dd(_0xd83126), !!_0x30cecf, _0x528b9d);
  }
  function _0xf7af2b(_0x5d5c79) {
    if (!_0x27cc64(_0x5d5c79)) {
      _0x3ba29d.recordError(1280);
      _0x33bd81("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0x44ad93 = _0x6b4565(_0x5d5c79);
    var _0x263cd1 = _0x3ba29d.mappedBuffers[_0x44ad93];
    if (!_0x263cd1) {
      _0x3ba29d.recordError(1282);
      _0x33bd81("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0x3ba29d.mappedBuffers[_0x44ad93] = null;
    if (!(_0x263cd1.access & 16)) {
      if (_0x3ba29d.currentContext.version >= 2) {
        _0x3afc48.bufferSubData(_0x5d5c79, _0x263cd1.offset, _0x12f402, _0x263cd1.mem, _0x263cd1.length);
      } else {
        _0x3afc48.bufferSubData(_0x5d5c79, _0x263cd1.offset, _0x12f402.subarray(_0x263cd1.mem, _0x263cd1.mem + _0x263cd1.length));
      }
    }
    _0xf67877(_0x263cd1.mem);
    return 1;
  }
  function _0xa67c39() {
    var _0xb37797 = _0x3afc48.currentProgram;
    if (!_0xb37797.explicitProgramBindingsApplied) {
      if (_0x3ba29d.currentContext.version >= 2) {
        Object.keys(_0xb37797.explicitUniformBindings).forEach(function (_0x3f1b01) {
          var _0x8cbc3d = _0xb37797.explicitUniformBindings[_0x3f1b01];
          for (var _0x2cdd4c = 0; _0x2cdd4c < _0x8cbc3d[1]; ++_0x2cdd4c) {
            var _0x55caec = _0x3afc48.getUniformBlockIndex(_0xb37797, _0x3f1b01 + (_0x8cbc3d[1] > 1 ? "[" + _0x2cdd4c + "]" : ""));
            _0x3afc48.uniformBlockBinding(_0xb37797, _0x55caec, _0x8cbc3d[0] + _0x2cdd4c);
          }
        });
      }
      Object.keys(_0xb37797.explicitSamplerBindings).forEach(function (_0x52701e) {
        var _0x27b36b = _0xb37797.explicitSamplerBindings[_0x52701e];
        for (var _0x1de73e = 0; _0x1de73e < _0x27b36b[1]; ++_0x1de73e) {
          _0x3afc48.uniform1i(_0x3afc48.getUniformLocation(_0xb37797, _0x52701e + (_0x1de73e ? "[" + _0x1de73e + "]" : "")), _0x27b36b[0] + _0x1de73e);
        }
      });
      _0xb37797.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x12251e(_0x588eed) {
    _0x588eed = _0x3ba29d.programs[_0x588eed];
    _0x3afc48.useProgram(_0x588eed);
    if (_0x3afc48.currentProgram = _0x588eed) {
      _0xa67c39();
    }
  }
  function _0xdb8854(_0x37095a) {
    _0x3afc48.validateProgram(_0x3ba29d.programs[_0x37095a]);
  }
  function _0x1d7f2b(_0x38e3c9, _0x9c82e5, _0x3e0320, _0x268928, _0x125875) {
    _0x3afc48.vertexAttrib4f(_0x38e3c9, _0x9c82e5, _0x3e0320, _0x268928, _0x125875);
  }
  function _0x14e932(_0x9cc277, _0x465e6a) {
    _0x3afc48.vertexAttrib4f(_0x9cc277, _0x3e31eb[_0x465e6a >> 2], _0x3e31eb[_0x465e6a + 4 >> 2], _0x3e31eb[_0x465e6a + 8 >> 2], _0x3e31eb[_0x465e6a + 12 >> 2]);
  }
  function _0x1100a0(_0x406a63, _0x175bf1, _0x3e2f81, _0x3fdf9b, _0x10858e) {
    var _0x4acb1b = _0x3ba29d.currentContext.clientBuffers[_0x406a63];
    if (!_0x3afc48.currentArrayBufferBinding) {
      _0x4acb1b.size = _0x175bf1;
      _0x4acb1b.type = _0x3e2f81;
      _0x4acb1b.normalized = false;
      _0x4acb1b.stride = _0x3fdf9b;
      _0x4acb1b.ptr = _0x10858e;
      _0x4acb1b.clientside = true;
      _0x4acb1b.vertexAttribPointerAdaptor = function (_0x22e502, _0x270132, _0x16c813, _0x5bd0e0, _0x6a5c09, _0x542b48) {
        this.vertexAttribIPointer(_0x22e502, _0x270132, _0x16c813, _0x6a5c09, _0x542b48);
      };
      return;
    }
    _0x4acb1b.clientside = false;
    _0x3afc48.vertexAttribIPointer(_0x406a63, _0x175bf1, _0x3e2f81, _0x3fdf9b, _0x10858e);
  }
  function _0xa51ac9(_0x1efce2, _0x4c3f46, _0x328e83, _0x565bb, _0x1d385f, _0x4b6dc6) {
    var _0x6fe614 = _0x3ba29d.currentContext.clientBuffers[_0x1efce2];
    if (!_0x3afc48.currentArrayBufferBinding) {
      _0x6fe614.size = _0x4c3f46;
      _0x6fe614.type = _0x328e83;
      _0x6fe614.normalized = _0x565bb;
      _0x6fe614.stride = _0x1d385f;
      _0x6fe614.ptr = _0x4b6dc6;
      _0x6fe614.clientside = true;
      _0x6fe614.vertexAttribPointerAdaptor = function (_0x1f696d, _0x45ecad, _0x592baa, _0x3a8c3c, _0x4e4a57, _0x34c28c) {
        this.vertexAttribPointer(_0x1f696d, _0x45ecad, _0x592baa, _0x3a8c3c, _0x4e4a57, _0x34c28c);
      };
      return;
    }
    _0x6fe614.clientside = false;
    _0x3afc48.vertexAttribPointer(_0x1efce2, _0x4c3f46, _0x328e83, !!_0x565bb, _0x1d385f, _0x4b6dc6);
  }
  function _0x3a3253(_0x4514da, _0x3170bf, _0x204314, _0x29a23b) {
    _0x3afc48.viewport(_0x4514da, _0x3170bf, _0x204314, _0x29a23b);
  }
  function _0x18e886(_0x5bb4d0) {
    return _0x5bb4d0;
  }
  function _0x3948ef(_0x2336d9) {
    _0xf77ab2();
    var _0x3e7117 = new Date(_0x5ce4f8[_0x2336d9 + 20 >> 2] + 1900, _0x5ce4f8[_0x2336d9 + 16 >> 2], _0x5ce4f8[_0x2336d9 + 12 >> 2], _0x5ce4f8[_0x2336d9 + 8 >> 2], _0x5ce4f8[_0x2336d9 + 4 >> 2], _0x5ce4f8[_0x2336d9 >> 2], 0);
    var _0xdb05a3 = _0x5ce4f8[_0x2336d9 + 32 >> 2];
    var _0x2d7f2b = _0x3e7117.getTimezoneOffset();
    var _0x52f345 = new Date(_0x3e7117.getFullYear(), 0, 1);
    var _0x288488 = new Date(_0x3e7117.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x316b03 = _0x52f345.getTimezoneOffset();
    var _0x2083ef = Math.min(_0x316b03, _0x288488);
    if (_0xdb05a3 < 0) {
      _0x5ce4f8[_0x2336d9 + 32 >> 2] = Number(_0x288488 != _0x316b03 && _0x2083ef == _0x2d7f2b);
    } else if (_0xdb05a3 > 0 != (_0x2083ef == _0x2d7f2b)) {
      var _0x39f41d = Math.max(_0x316b03, _0x288488);
      var _0x585782 = _0xdb05a3 > 0 ? _0x2083ef : _0x39f41d;
      _0x3e7117.setTime(_0x3e7117.getTime() + (_0x585782 - _0x2d7f2b) * 60000);
    }
    _0x5ce4f8[_0x2336d9 + 24 >> 2] = _0x3e7117.getDay();
    var _0x1ac663 = (_0x3e7117.getTime() - _0x52f345.getTime()) / 86400000 | 0;
    _0x5ce4f8[_0x2336d9 + 28 >> 2] = _0x1ac663;
    _0x5ce4f8[_0x2336d9 >> 2] = _0x3e7117.getSeconds();
    _0x5ce4f8[_0x2336d9 + 4 >> 2] = _0x3e7117.getMinutes();
    _0x5ce4f8[_0x2336d9 + 8 >> 2] = _0x3e7117.getHours();
    _0x5ce4f8[_0x2336d9 + 12 >> 2] = _0x3e7117.getDate();
    _0x5ce4f8[_0x2336d9 + 16 >> 2] = _0x3e7117.getMonth();
    return _0x3e7117.getTime() / 1000 | 0;
  }
  function _0x376714(_0x29fd6d) {
    _0x47b672(_0x29fd6d);
  }
  function _0x5107a3(_0x52a989, _0x38cc2a, _0x4cd0ab) {
    return 0;
  }
  function _0x397392(_0x322f71) {
    _0x5ce4f8[_0x322f71 >> 2] = 0;
    return 0;
  }
  function _0x2493e9(_0x167923) {
    return _0x167923 % 4 === 0 && (_0x167923 % 100 !== 0 || _0x167923 % 400 === 0);
  }
  function _0x1d4dd3(_0x538ea5, _0x33ea90) {
    var _0x414bb1 = 0;
    for (var _0x1c1e36 = 0; _0x1c1e36 <= _0x33ea90; _0x414bb1 += _0x538ea5[_0x1c1e36++]) {}
    return _0x414bb1;
  }
  var _0x43503e = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0x4bc6e1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0x4cc4e5(_0x5a217b, _0x4260a3) {
    var _0xcf661b = new Date(_0x5a217b.getTime());
    while (_0x4260a3 > 0) {
      var _0x5a77f4 = _0x2493e9(_0xcf661b.getFullYear());
      var _0x2dca64 = _0xcf661b.getMonth();
      var _0x152795 = (_0x5a77f4 ? _0x43503e : _0x4bc6e1)[_0x2dca64];
      if (_0x4260a3 > _0x152795 - _0xcf661b.getDate()) {
        _0x4260a3 -= _0x152795 - _0xcf661b.getDate() + 1;
        _0xcf661b.setDate(1);
        if (_0x2dca64 < 11) {
          _0xcf661b.setMonth(_0x2dca64 + 1);
        } else {
          _0xcf661b.setMonth(0);
          _0xcf661b.setFullYear(_0xcf661b.getFullYear() + 1);
        }
      } else {
        _0xcf661b.setDate(_0xcf661b.getDate() + _0x4260a3);
        return _0xcf661b;
      }
    }
    return _0xcf661b;
  }
  function _0x586a7b(_0x26c785, _0x5bcde5, _0x40cb0a, _0x56de12) {
    var _0x1e2c75 = _0x5ce4f8[_0x56de12 + 40 >> 2];
    var _0x5c9c24 = {
      tm_sec: _0x5ce4f8[_0x56de12 >> 2],
      tm_min: _0x5ce4f8[_0x56de12 + 4 >> 2],
      tm_hour: _0x5ce4f8[_0x56de12 + 8 >> 2],
      tm_mday: _0x5ce4f8[_0x56de12 + 12 >> 2],
      tm_mon: _0x5ce4f8[_0x56de12 + 16 >> 2],
      tm_year: _0x5ce4f8[_0x56de12 + 20 >> 2],
      tm_wday: _0x5ce4f8[_0x56de12 + 24 >> 2],
      tm_yday: _0x5ce4f8[_0x56de12 + 28 >> 2],
      tm_isdst: _0x5ce4f8[_0x56de12 + 32 >> 2],
      tm_gmtoff: _0x5ce4f8[_0x56de12 + 36 >> 2],
      tm_zone: _0x1e2c75 ? _0x51c742(_0x1e2c75) : ""
    };
    var _0x4e7c49 = _0x51c742(_0x40cb0a);
    var _0x4a67b1 = {
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
    for (var _0x248894 in _0x4a67b1) {
      _0x4e7c49 = _0x4e7c49.replace(new RegExp(_0x248894, "g"), _0x4a67b1[_0x248894]);
    }
    var _0x120788 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0x5c3671 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x1f8060(_0x11343c, _0x18ae35, _0x52ba27) {
      var _0xcbc750 = typeof _0x11343c === "number" ? _0x11343c.toString() : _0x11343c || "";
      while (_0xcbc750.length < _0x18ae35) {
        _0xcbc750 = _0x52ba27[0] + _0xcbc750;
      }
      return _0xcbc750;
    }
    function _0x38f37b(_0x179b4a, _0x5af883) {
      return _0x1f8060(_0x179b4a, _0x5af883, "0");
    }
    function _0x45416c(_0x300e3e, _0x1322f4) {
      function _0x44e8a7(_0x263be6) {
        if (_0x263be6 < 0) {
          return -1;
        } else if (_0x263be6 > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0xece7d5;
      if ((_0xece7d5 = _0x44e8a7(_0x300e3e.getFullYear() - _0x1322f4.getFullYear())) === 0) {
        if ((_0xece7d5 = _0x44e8a7(_0x300e3e.getMonth() - _0x1322f4.getMonth())) === 0) {
          _0xece7d5 = _0x44e8a7(_0x300e3e.getDate() - _0x1322f4.getDate());
        }
      }
      return _0xece7d5;
    }
    function _0x356a52(_0x42483f) {
      switch (_0x42483f.getDay()) {
        case 0:
          return new Date(_0x42483f.getFullYear() - 1, 11, 29);
        case 1:
          return _0x42483f;
        case 2:
          return new Date(_0x42483f.getFullYear(), 0, 3);
        case 3:
          return new Date(_0x42483f.getFullYear(), 0, 2);
        case 4:
          return new Date(_0x42483f.getFullYear(), 0, 1);
        case 5:
          return new Date(_0x42483f.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0x42483f.getFullYear() - 1, 11, 30);
      }
    }
    function _0xea4ae1(_0x1ef58a) {
      var _0x4998c9 = _0x4cc4e5(new Date(_0x1ef58a.tm_year + 1900, 0, 1), _0x1ef58a.tm_yday);
      var _0x4ae8c7 = new Date(_0x4998c9.getFullYear(), 0, 4);
      var _0x122454 = new Date(_0x4998c9.getFullYear() + 1, 0, 4);
      var _0x3f0267 = _0x356a52(_0x4ae8c7);
      var _0x3cf952 = _0x356a52(_0x122454);
      if (_0x45416c(_0x3f0267, _0x4998c9) <= 0) {
        if (_0x45416c(_0x3cf952, _0x4998c9) <= 0) {
          return _0x4998c9.getFullYear() + 1;
        } else {
          return _0x4998c9.getFullYear();
        }
      } else {
        return _0x4998c9.getFullYear() - 1;
      }
    }
    var _0xa2158c = {
      "%a": function (_0x4244f1) {
        return _0x120788[_0x4244f1.tm_wday].substring(0, 3);
      },
      "%A": function (_0x38b9c0) {
        return _0x120788[_0x38b9c0.tm_wday];
      },
      "%b": function (_0x1a5e58) {
        return _0x5c3671[_0x1a5e58.tm_mon].substring(0, 3);
      },
      "%B": function (_0x6158e) {
        return _0x5c3671[_0x6158e.tm_mon];
      },
      "%C": function (_0x312578) {
        var _0x1d1907 = _0x312578.tm_year + 1900;
        return _0x38f37b(_0x1d1907 / 100 | 0, 2);
      },
      "%d": function (_0x378e76) {
        return _0x38f37b(_0x378e76.tm_mday, 2);
      },
      "%e": function (_0x356027) {
        return _0x1f8060(_0x356027.tm_mday, 2, " ");
      },
      "%g": function (_0x59aa61) {
        return _0xea4ae1(_0x59aa61).toString().substring(2);
      },
      "%G": function (_0x35ad18) {
        return _0xea4ae1(_0x35ad18);
      },
      "%H": function (_0x4443ff) {
        return _0x38f37b(_0x4443ff.tm_hour, 2);
      },
      "%I": function (_0x571866) {
        var _0x61a7d3 = _0x571866.tm_hour;
        if (_0x61a7d3 == 0) {
          _0x61a7d3 = 12;
        } else if (_0x61a7d3 > 12) {
          _0x61a7d3 -= 12;
        }
        return _0x38f37b(_0x61a7d3, 2);
      },
      "%j": function (_0x18835f) {
        return _0x38f37b(_0x18835f.tm_mday + _0x1d4dd3(_0x2493e9(_0x18835f.tm_year + 1900) ? _0x43503e : _0x4bc6e1, _0x18835f.tm_mon - 1), 3);
      },
      "%m": function (_0x4abd29) {
        return _0x38f37b(_0x4abd29.tm_mon + 1, 2);
      },
      "%M": function (_0x375331) {
        return _0x38f37b(_0x375331.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x2fc865) {
        if (_0x2fc865.tm_hour >= 0 && _0x2fc865.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x56cea8) {
        return _0x38f37b(_0x56cea8.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x578b70) {
        return _0x578b70.tm_wday || 7;
      },
      "%U": function (_0x4c0780) {
        var _0x459e9b = new Date(_0x4c0780.tm_year + 1900, 0, 1);
        var _0x48b354 = _0x459e9b.getDay() === 0 ? _0x459e9b : _0x4cc4e5(_0x459e9b, 7 - _0x459e9b.getDay());
        var _0x47b7da = new Date(_0x4c0780.tm_year + 1900, _0x4c0780.tm_mon, _0x4c0780.tm_mday);
        if (_0x45416c(_0x48b354, _0x47b7da) < 0) {
          var _0x5cb584 = _0x1d4dd3(_0x2493e9(_0x47b7da.getFullYear()) ? _0x43503e : _0x4bc6e1, _0x47b7da.getMonth() - 1) - 31;
          var _0x2d5e6f = 31 - _0x48b354.getDate();
          var _0x4037aa = _0x2d5e6f + _0x5cb584 + _0x47b7da.getDate();
          return _0x38f37b(Math.ceil(_0x4037aa / 7), 2);
        }
        if (_0x45416c(_0x48b354, _0x459e9b) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0x3abae3) {
        var _0x8090a1 = new Date(_0x3abae3.tm_year + 1900, 0, 4);
        var _0x368ec6 = new Date(_0x3abae3.tm_year + 1901, 0, 4);
        var _0x42ee06 = _0x356a52(_0x8090a1);
        var _0x381ec1 = _0x356a52(_0x368ec6);
        var _0x3cddde = _0x4cc4e5(new Date(_0x3abae3.tm_year + 1900, 0, 1), _0x3abae3.tm_yday);
        if (_0x45416c(_0x3cddde, _0x42ee06) < 0) {
          return "53";
        }
        if (_0x45416c(_0x381ec1, _0x3cddde) <= 0) {
          return "01";
        }
        var _0x5b6ac0;
        if (_0x42ee06.getFullYear() < _0x3abae3.tm_year + 1900) {
          _0x5b6ac0 = _0x3abae3.tm_yday + 32 - _0x42ee06.getDate();
        } else {
          _0x5b6ac0 = _0x3abae3.tm_yday + 1 - _0x42ee06.getDate();
        }
        return _0x38f37b(Math.ceil(_0x5b6ac0 / 7), 2);
      },
      "%w": function (_0x293c5c) {
        return _0x293c5c.tm_wday;
      },
      "%W": function (_0x2d0980) {
        var _0x3e6e20 = new Date(_0x2d0980.tm_year, 0, 1);
        var _0x356882 = _0x3e6e20.getDay() === 1 ? _0x3e6e20 : _0x4cc4e5(_0x3e6e20, _0x3e6e20.getDay() === 0 ? 1 : 7 - _0x3e6e20.getDay() + 1);
        var _0x50c0c6 = new Date(_0x2d0980.tm_year + 1900, _0x2d0980.tm_mon, _0x2d0980.tm_mday);
        if (_0x45416c(_0x356882, _0x50c0c6) < 0) {
          var _0x4696b5 = _0x1d4dd3(_0x2493e9(_0x50c0c6.getFullYear()) ? _0x43503e : _0x4bc6e1, _0x50c0c6.getMonth() - 1) - 31;
          var _0x1e96e0 = 31 - _0x356882.getDate();
          var _0x20e3fb = _0x1e96e0 + _0x4696b5 + _0x50c0c6.getDate();
          return _0x38f37b(Math.ceil(_0x20e3fb / 7), 2);
        }
        if (_0x45416c(_0x356882, _0x3e6e20) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x10dbf8) {
        return (_0x10dbf8.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0x2d973a) {
        return _0x2d973a.tm_year + 1900;
      },
      "%z": function (_0x452c70) {
        var _0x51912f = _0x452c70.tm_gmtoff;
        var _0x245dc5 = _0x51912f >= 0;
        _0x51912f = Math.abs(_0x51912f) / 60;
        _0x51912f = _0x51912f / 60 * 100 + _0x51912f % 60;
        return (_0x245dc5 ? "+" : "-") + String("0000" + _0x51912f).slice(-4);
      },
      "%Z": function (_0x2c11d4) {
        return _0x2c11d4.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0x248894 in _0xa2158c) {
      if (_0x4e7c49.includes(_0x248894)) {
        _0x4e7c49 = _0x4e7c49.replace(new RegExp(_0x248894, "g"), _0xa2158c[_0x248894](_0x5c9c24));
      }
    }
    var _0x2fb7bc = _0x1cc621(_0x4e7c49, false);
    if (_0x2fb7bc.length > _0x5bcde5) {
      return 0;
    }
    _0x54df4b(_0x2fb7bc, _0x26c785);
    return _0x2fb7bc.length - 1;
  }
  function _0x5b265d(_0x47cae1) {
    var _0x2623fd = Date.now() / 1000 | 0;
    if (_0x47cae1) {
      _0x5ce4f8[_0x47cae1 >> 2] = _0x2623fd;
    }
    return _0x2623fd;
  }
  function _0x187844(_0x3b070f, _0x5228a7) {
    _0x3b070f = _0x51c742(_0x3b070f);
    try {
      _0x453483.utime(_0x3b070f, _0x5228a7, _0x5228a7);
      return 0;
    } catch (_0x3d2370) {
      if (!(_0x3d2370 instanceof _0x453483.ErrnoError)) {
        throw _0x3d2370 + " : " + _0x4e533e();
      }
      _0x249f9c(_0x3d2370.errno);
      return -1;
    }
  }
  function _0x289c30(_0x122cc4, _0x9a08a6) {
    var _0x8eb429;
    if (_0x9a08a6) {
      _0x8eb429 = _0x5ce4f8[_0x9a08a6 + 4 >> 2] * 1000;
    } else {
      _0x8eb429 = Date.now();
    }
    return _0x187844(_0x122cc4, _0x8eb429);
  }
  function _0x4a3778(_0x2df35d, _0x326925, _0x279b30, _0x45de9a) {
    if (!_0x2df35d) {
      _0x2df35d = this;
    }
    this.parent = _0x2df35d;
    this.mount = _0x2df35d.mount;
    this.mounted = null;
    this.id = _0x453483.nextInode++;
    this.name = _0x326925;
    this.mode = _0x279b30;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x45de9a;
  }
  var _0x57326b = 365;
  var _0x530f4c = 146;
  Object.defineProperties(_0x4a3778.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x57326b) === _0x57326b;
      },
      set: function (_0x4fd836) {
        if (_0x4fd836) {
          this.mode |= _0x57326b;
        } else {
          this.mode &= ~_0x57326b;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0x530f4c) === _0x530f4c;
      },
      set: function (_0x28186f) {
        if (_0x28186f) {
          this.mode |= _0x530f4c;
        } else {
          this.mode &= ~_0x530f4c;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0x453483.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0x453483.isChrdev(this.mode);
      }
    }
  });
  _0x453483.FSNode = _0x4a3778;
  _0x453483.staticInit();
  _0x5c0d54.FS_createPath = _0x453483.createPath;
  _0x5c0d54.FS_createDataFile = _0x453483.createDataFile;
  _0x5c0d54.requestFullscreen = function _0x454264(_0x2d6c83, _0x513ce7) {
    _0x4b29bf.requestFullscreen(_0x2d6c83, _0x513ce7);
  };
  _0x5c0d54.requestAnimationFrame = function _0x8d12e1(_0x5e911c) {
    _0x4b29bf.requestAnimationFrame(_0x5e911c);
  };
  _0x5c0d54.setCanvasSize = function _0x3f84e6(_0x8d1025, _0x45cc5c, _0x594f54) {
    _0x4b29bf.setCanvasSize(_0x8d1025, _0x45cc5c, _0x594f54);
  };
  _0x5c0d54.pauseMainLoop = function _0x1513ba() {
    _0x4b29bf.mainLoop.pause();
  };
  _0x5c0d54.resumeMainLoop = function _0x56d5d2() {
    _0x4b29bf.mainLoop.resume();
  };
  _0x5c0d54.getUserMedia = function _0x1a52c2() {
    _0x4b29bf.getUserMedia();
  };
  _0x5c0d54.createContext = function _0x349fd5(_0x15e56b, _0x5c5b08, _0x2e5696, _0x4f937c) {
    return _0x4b29bf.createContext(_0x15e56b, _0x5c5b08, _0x2e5696, _0x4f937c);
  };
  var _0x3afc48;
  for (var _0x1404fc = 0; _0x1404fc < 32; ++_0x1404fc) {
    _0x1bb38d.push(new Array(_0x1404fc));
  }
  var _0x1e0437 = new Float32Array(288);
  for (var _0x1404fc = 0; _0x1404fc < 288; ++_0x1404fc) {
    _0x276155[_0x1404fc] = _0x1e0437.subarray(0, _0x1404fc + 1);
  }
  var _0x154572 = new Int32Array(288);
  for (var _0x1404fc = 0; _0x1404fc < 288; ++_0x1404fc) {
    _0x596965[_0x1404fc] = _0x154572.subarray(0, _0x1404fc + 1);
  }
  function _0x1cc621(_0x2c409a, _0x20c53c, _0xc24b89) {
    var _0x132c5f = _0xc24b89 > 0 ? _0xc24b89 : _0x219de1(_0x2c409a) + 1;
    var _0x5172ac = new Array(_0x132c5f);
    var _0x47d3b9 = _0x1425b7(_0x2c409a, _0x5172ac, 0, _0x5172ac.length);
    if (_0x20c53c) {
      _0x5172ac.length = _0x47d3b9;
    }
    return _0x5172ac;
  }
  var _0x222a7b = {
    Hj: _0xebda16,
    Dj: _0x1e7b04,
    $c: _0x5c0808,
    lj: _0x15aacf,
    Yi: _0x2736df,
    ck: _0x25e79e,
    jj: _0x41ec72,
    ij: _0x1fa90e,
    fj: _0x24495a,
    hj: _0x5a6086,
    gj: _0x4b2221,
    Fj: _0x326a92,
    Ej: _0xb6dca0,
    Vj: _0x3b9c69,
    uj: _0x48943d,
    Wc: _0x2a497a,
    qj: _0x19d266,
    Yc: _0x946587,
    _c: _0x2b362d,
    Zc: _0x583054,
    Mi: _0x1f9d5c,
    bj: _0x577d55,
    aj: _0xa40311,
    wj: _0x4d3553,
    Kj: _0x3799a5,
    Jj: _0x5f14d6,
    nj: _0x596756,
    ej: _0x1221cf,
    dj: _0x473115,
    oj: _0x2418de,
    Zj: _0x16890c,
    Qi: _0xf23b13,
    Vi: _0x18dd68,
    Ui: _0x205091,
    Ti: _0xdf0f17,
    zi: _0x102b71,
    yi: _0xb6d3bd,
    xi: _0x659aab,
    wi: _0x1021df,
    cj: _0x5340b2,
    Zi: _0x4ed9c4,
    Bj: _0x5342fd,
    pj: _0x3f11e9,
    Ri: _0x32db5d,
    qf: _0x288c3f,
    Ub: _0x33a157,
    Tb: _0x9be929,
    wf: _0x1330af,
    $a: _0x2e284b,
    _a: _0x59cb62,
    Ue: _0x68fa0f,
    zf: _0x3cf6c6,
    We: _0x9b4db4,
    Me: _0x5edcda,
    ka: _0x312343,
    nf: _0x1b00ff,
    Qb: _0x488222,
    Pb: _0x11f751,
    lf: _0x585fa0,
    mf: _0x259cab,
    Ob: _0xca700a,
    Nb: _0x387a28,
    hd: _0x3f810f,
    pf: _0x431e36,
    Sb: _0x18ebda,
    Rb: _0x4371d4,
    Ve: _0x4b7eb9,
    Ye: _0x50dd20,
    rf: _0x5a71c1,
    Wb: _0x37d29d,
    Vb: _0x411bd2,
    Xb: _0x17d9ae,
    Qe: _0x27f90c,
    kf: _0x160b78,
    uf: _0x413678,
    na: _0x2bb6a3,
    bg: _0x30c720,
    Wf: _0x2e3b3f,
    pa: _0x5f2adb,
    Xf: _0x511222,
    Yf: _0x22509c,
    Uf: _0x185c7c,
    jc: _0x180814,
    kc: _0x3d3bee,
    cb: _0x1e8ee0,
    Da: _0x1d1d2c,
    Yb: _0x3c09cc,
    Zf: _0x4dcf51,
    Sf: _0x26d5d4,
    Tf: _0x293b9a,
    mc: _0x32528c,
    lc: _0x59fca6,
    Ba: _0x164f1f,
    oa: _0x227694,
    ag: _0x2dd8b5,
    $f: _0x59a98e,
    Ca: _0x37502d,
    Gb: _0x44031f,
    Fb: _0xb5e63,
    va: _0x491fa1,
    ic: _0x596336,
    Db: _0x1a7537,
    Eb: _0x2edc3b,
    Mb: _0x1a6bca,
    Va: _0x58f6e6,
    Hb: _0xc17e43,
    Kb: _0x2df8f5,
    _e: _0x51db19,
    hc: _0x39345c,
    Af: _0x165a88,
    Ib: _0x1717ab,
    hf: _0x15ba40,
    Fa: _0xda6a0a,
    yf: _0x23c877,
    Te: _0x4ef91f,
    Pf: _0x2a429c,
    Mf: _0x1c53df,
    Nf: _0x2a48d7,
    Of: _0x30a698,
    bb: _0x6e8e69,
    Hf: _0x47fb4b,
    Jf: _0x1198b3,
    If: _0x566a30,
    Kf: _0x3493e8,
    Sj: _0x5d2b55,
    Qj: _0x576112,
    Oj: _0x5c07cb,
    yj: _0x567fcc,
    Aj: _0x4b8964,
    Uj: _0x4b7e26,
    sj: _0x2b5f41,
    rj: _0x34a0a3,
    Mj: _0x4751ea,
    _j: _0x7b25e4,
    Pi: _0x36751b,
    Yj: _0x36f646,
    Xj: _0x573f3f,
    qb: _0x21001c,
    Oi: _0x1c1e2c,
    Ni: _0x48000e,
    Cj: _0x5d5818,
    mj: _0x5ccf73,
    kj: _0x15aa5b,
    $i: _0x142759,
    lk: _0x5099f9,
    kk: _0x412162,
    ik: _0x523199,
    jk: _0x4465e1,
    Ij: _0x2823ae,
    tj: _0x1bc110,
    Wi: _0x270fb0,
    Xi: _0x1e7af6,
    _i: _0x322625,
    Vc: _0x876a8a,
    dk: _0x136f2a,
    bk: _0x4e124b,
    $j: _0x13dc6f,
    ak: _0x538b14,
    Rj: _0x1248a3,
    Pj: _0x35cd47,
    Nj: _0x3deccd,
    xj: _0x13e93a,
    zj: _0x26a693,
    Tj: _0xd2d174,
    Si: _0x17734e,
    Lj: _0x39828e,
    Gj: _0x4631df,
    Wj: _0x2cd09f,
    vj: _0x452fab,
    p: _0x26eff2,
    f: _0x272b50,
    o: _0x251f02,
    h: _0x26fefc,
    a: _0x2a1985,
    qk: _0x1f993f,
    rb: _0x20b253,
    yd: _0x244104,
    la: _0x4ed400,
    kd: _0x1f510f,
    ld: _0x456092,
    k: _0x1e99ca,
    jf: _0x3b8281,
    Lf: _0x28bd12,
    of: _0x3fc937,
    zg: _0x271996,
    vd: _0x7497ca,
    lg: _0x594d35,
    Bd: _0x4b7c91,
    V: _0x5d6b4a,
    lh: _0x1510d7,
    sd: _0x30f6af,
    pd: _0x2cf206,
    fd: _0x5723c8,
    gd: _0x245a43,
    Dd: _0x5ec349,
    Sa: _0x12dabb,
    od: _0x567c53,
    _f: _0x53c2bf,
    tg: _0x523ac4,
    gg: _0xd7ee0b,
    Jb: _0x33c23d,
    Vf: _0x34f2d5,
    wd: _0x3a5ca8,
    rd: _0x235702,
    tf: _0x2289ff,
    Sd: _0x197822,
    mb: _0x3df0fd,
    xd: _0x6ea154,
    eg: _0x498dc5,
    pk: _0x46fa4e,
    vf: _0x59c955,
    zd: _0x49ac34,
    td: _0x1f83af,
    qd: _0x2c435b,
    Ad: _0x4ed47d,
    xf: _0x5c1962,
    sf: _0x47415a,
    Cd: _0x400e60,
    Bb: _0x4a3287,
    Hc: _0x3acf6d,
    cg: _0x29ca06,
    dg: _0x199d76,
    Ed: _0x23f5c0,
    ud: _0xd83669,
    x: _0x1ecaef,
    S: _0x54560a,
    nd: _0x59d7c0,
    yb: _0x512492,
    jd: _0x5ca2e5,
    Jg: _0x780fd2,
    Ha: _0x48d6ff,
    Bc: _0x24fba8,
    Ug: _0xc9abea,
    ab: _0x5f4de9,
    Re: _0x4543ed,
    Pe: _0x2462b9,
    ff: _0x331b0f,
    $e: _0x15e9c6,
    Ze: _0x203a83,
    ef: _0x43a868,
    Xa: _0x132d69,
    md: _0x498b27,
    P: _0x10009c,
    Ya: _0x59a61b,
    Se: _0x3acca9,
    Df: _0x2a6594,
    E: _0x41a505,
    I: _0xe603e5,
    rk: _0x587f09,
    gf: _0x848111,
    af: _0x43f96a,
    sk: _0x3c9119,
    Za: _0x1a4038,
    Lb: _0x5c5771,
    Wa: _0x3e82f5,
    cf: _0x47a055,
    df: _0x723f69,
    _b: _0xa2da16,
    Zb: _0x5037c2,
    Le: _0x16aa2f,
    ya: _0x67566e,
    wa: _0x97465f,
    xa: _0x127964,
    Ke: _0xd9a318,
    Ne: _0xa6f69a,
    fc: _0x54e826,
    ec: _0x220664,
    gc: _0x3f5f6b,
    bf: _0x4c58d8,
    $b: _0x10132c,
    bc: _0x18d49f,
    ac: _0x4f9105,
    cc: _0x279911,
    dc: _0x23656c,
    id: _0x430587,
    Ff: _0x4b44f7,
    Ef: _0xa27c90,
    za: _0x2a4b47,
    Cf: _0x21dbcf,
    hg: _0x459de3,
    Aa: _0xf53aa,
    Oe: _0x9dcd4a,
    Xe: _0x4aca4e,
    C: _0x179da4,
    da: _0x5be321,
    rc: _0x341973,
    Ab: _0x536321,
    Je: _0x5c244b,
    ob: _0x3f5866,
    Ea: _0x580dbf,
    b: _0x19fd33,
    Rd: _0x2507e5,
    Qf: _0x273e4a,
    Rf: _0x358535,
    Cb: _0x4f5b82,
    fg: _0x30d8ff,
    Pa: _0x494c16,
    mi: _0x3ae1fc,
    ji: _0x5677ca,
    tc: _0x15fcc4,
    Zg: _0x18c2ee,
    Na: _0x196461,
    ii: _0x26d066,
    wg: _0x3fa381,
    vg: _0x3a277c,
    fi: _0x52edf9,
    gi: _0xf669f5,
    pg: _0x46bca7,
    hi: _0x2864c8,
    Rg: _0x3c4659,
    Vg: _0x173612,
    Mc: _0xb46315,
    Nc: _0x1428f8,
    Oc: _0x2d5fd1,
    Ig: _0x2d9e1f,
    di: _0x1b6125,
    ei: _0xa8ecbb,
    ci: _0x590601,
    _h: _0x5d2234,
    kg: _0xd1753a,
    jg: _0x43a718,
    ig: _0x108398,
    $h: _0x5d66d3,
    ai: _0x1fd6db,
    bi: _0x1426e4,
    Fd: _0x11078e,
    pb: _0x46af77,
    Zh: _0x433e63,
    Xh: _0x4e73ec,
    Lg: _0xd426b0,
    Yh: _0x2927a8,
    Pg: _0x1ad103,
    Ag: _0x55378d,
    Wh: _0x51475d,
    Lc: _0x9f355c,
    Vh: _0x538fd1,
    Uh: _0x4fe320,
    Th: _0x189896,
    Sh: _0x2d44a4,
    Rh: _0xafdff0,
    Qh: _0x5d9f4c,
    hb: _0x5b91ae,
    Ph: _0x37bf77,
    og: _0x35861c,
    Oh: _0x5d844d,
    oc: _0x11b386,
    Nh: _0x416b14,
    Sg: _0x47ae66,
    Xg: _0x1a08cd,
    Ma: _0x5117cb,
    La: _0x5d456a,
    Mh: _0x459cd1,
    Lh: _0x390c1f,
    Kh: _0x99693f,
    Gh: _0x4e2116,
    Cg: _0x241af8,
    yg: _0x8d113,
    Ih: _0x20622b,
    Bg: _0x254780,
    Jh: _0x3919d0,
    Fh: _0x3ecca8,
    uc: _0x4f2d81,
    _g: _0x485026,
    nc: _0xcde360,
    Ch: _0x2ecb20,
    Dh: _0x1c2b7d,
    Fg: _0x325b0b,
    W: _0xa5c9dc,
    T: _0x4f2b74,
    Ga: _0x26557a,
    Ka: _0x3b8be4,
    Bh: _0x1f9321,
    xh: _0x283993,
    sc: _0x1eb834,
    yh: _0x2b8c3b,
    ng: _0x4c25ec,
    Ah: _0x44166e,
    Tg: _0x317a47,
    Yg: _0x1f0daa,
    zh: _0x237a0d,
    si: _0x4b81b7,
    nb: _0x3483f2,
    eb: _0x5f05a8,
    ha: _0xfbe6b6,
    ga: _0x44c0fa,
    ri: _0x2f7dd4,
    Bf: _0x1855fc,
    wh: _0x144736,
    vh: _0x4a8b6c,
    li: _0x2f509c,
    Oa: _0x4aad6e,
    rg: _0x3b3a44,
    pc: _0x119986,
    oi: _0x4b7319,
    _: _0x5a55b9,
    ah: _0x1cc2ea,
    $g: _0x25839a,
    Eh: _0x361608,
    th: _0xb180c6,
    Kc: _0x33836f,
    uh: _0x5cca25,
    ni: _0x5320a6,
    sh: _0x486645,
    Gg: _0x41efb9,
    rh: _0x2dce92,
    sg: _0x395609,
    db: _0x5e238f,
    qa: _0x1ec938,
    Jc: _0x245d36,
    qi: _0x5397b1,
    gb: _0x45f8e9,
    ki: _0x12a507,
    Wg: _0x35b018,
    ph: _0x161e10,
    Dg: _0x2eb37,
    qh: _0x49ab2d,
    Ic: _0x168aa5,
    qc: _0x22a56c,
    mg: _0x5cdc07,
    xg: _0x3a1601,
    ja: _0x51169e,
    oh: _0x14c55c,
    Hg: _0x3fd6b7,
    qg: _0x45d239,
    lb: _0x3f476e,
    mh: _0x2d6cf5,
    nh: _0x73d478,
    jh: _0x100c22,
    kh: _0x143a81,
    hh: _0x2da268,
    Ng: _0x4815c5,
    ih: _0x367b0a,
    kb: _0x25d3f4,
    gh: _0x52c2af,
    Kg: _0x3a6ce5,
    Mg: _0x341395,
    fh: _0x4ad53b,
    Og: _0x4f5f36,
    Qg: _0x37ef3c,
    vc: _0x12473d,
    Ia: _0x32efa5,
    wc: _0x36843b,
    xc: _0x4b6ca0,
    yc: _0x4c24e3,
    zc: _0x30fa89,
    Ac: _0x2dd29e,
    jb: _0xbe3781,
    Cc: _0x30396d,
    Dc: _0x1e245d,
    ia: _0x71d4f7,
    Ec: _0x2f40ec,
    Fc: _0x37cd65,
    fb: _0x166eda,
    Gc: _0x197fef,
    Ja: _0x48391f,
    Eg: _0xf7af2b,
    bh: _0x12251e,
    pi: _0xdb8854,
    ch: _0x1d7f2b,
    dh: _0x14e932,
    ug: _0x1100a0,
    eh: _0xa51ac9,
    ib: _0x3a3253,
    fa: _0x4ac58e,
    ba: _0x1b847f,
    H: _0x1d702f,
    M: _0x177bc0,
    Q: _0x40d361,
    qe: _0x264214,
    aa: _0x1a7f24,
    ub: _0x4b6cb4,
    ca: _0x249ad0,
    $: _0x1bfbed,
    z: _0x40e644,
    D: _0x3abb86,
    hk: _0x7e88fa,
    N: _0x4f818b,
    vi: _0x5a87c6,
    w: _0x30f38d,
    sb: _0x3d611c,
    ma: _0x5be7a4,
    d: _0x9388a2,
    ek: _0xd34ffd,
    bd: _0x2f275a,
    Hi: _0x58e690,
    c: _0x342b39,
    ua: _0x42c8a7,
    ta: _0x1369f9,
    j: _0x5cae08,
    Ci: _0x22a7f2,
    ui: _0x23b4ad,
    Bi: _0x4ab789,
    ad: _0x41bb8c,
    ti: _0x5ad6d0,
    q: _0x38ffec,
    gk: _0x53c1cd,
    s: _0x37b73c,
    t: _0xf1c69f,
    B: _0x13661c,
    Ei: _0x414c5a,
    K: _0x2a3812,
    O: _0x52d5f0,
    Pc: _0x54dde1,
    Ai: _0x569c2b,
    Pd: _0x10a580,
    de: _0x42c423,
    Vd: _0xe7b21b,
    te: _0xbbfd78,
    Md: _0x1b0696,
    Ge: _0x47bdd8,
    ue: _0x2671db,
    De: _0x29130f,
    Ee: _0x4351c7,
    oe: _0x409f4a,
    Nd: _0x2c3e62,
    he: _0x1fa663,
    Kd: _0x18e1f5,
    xe: _0x4ec2e7,
    Ld: _0x5ab2ee,
    we: _0x2af556,
    Wd: _0x12a1fe,
    re: _0x9f1f99,
    Fe: _0x3e3d65,
    se: _0x4fcd1d,
    Ce: _0x1a1d5d,
    Be: _0x420204,
    ye: _0x25cc5d,
    Ie: _0x3ac0a2,
    Ud: _0x37f54a,
    je: _0x12fc8e,
    ce: _0x414ad8,
    ne: _0x5e5c1d,
    ve: _0x14872c,
    Gd: _0x524722,
    Qd: _0x242096,
    ae: _0x3255be,
    ie: _0x1814fa,
    fe: _0x519cd7,
    e: _0x3d4d7e,
    Gi: _0x608152,
    l: _0xec0494,
    Gf: _0x439e4d,
    A: _0x566a3d,
    Li: _0xbbdaba,
    cd: _0x4246cc,
    mk: _0x1e5bba,
    Fi: _0x3e33bc,
    J: _0x54013e,
    Qa: _0x54734e,
    n: _0x4aa86e,
    Hh: _0x587800,
    nk: _0x452eae,
    wb: _0x4029b0,
    dd: _0x2dfbbf,
    ra: _0x14f062,
    Z: _0x2549bc,
    Qc: _0x4549be,
    Sc: _0x52715b,
    Xc: _0x392938,
    G: _0x521ab3,
    ok: _0x389ede,
    g: _0x558506,
    X: _0x2c2493,
    ea: _0x19375c,
    m: _0x4d68ec,
    Ki: _0x26eec2,
    ed: _0x4249f0,
    Uc: _0x3094c3,
    r: _0x34cd57,
    Ji: _0x3ebd22,
    sa: _0x32470a,
    Di: _0x17a85e,
    tb: _0x19cb78,
    u: _0xc65f64,
    Ii: _0x5cd611,
    y: _0x324695,
    Tc: _0x4915df,
    F: _0x567e76,
    L: _0x536127,
    Rc: _0x212006,
    U: _0x413773,
    R: _0xd57eaa,
    vb: _0x1a2fa2,
    fk: _0x44f25b,
    Yd: _0x27ea27,
    le: _0x315d4e,
    me: _0x46f9de,
    $d: _0xe97406,
    ge: _0x195f13,
    Ae: _0x4bd372,
    Xd: _0x936bac,
    Td: _0x4a3370,
    Zd: _0x352220,
    Hd: _0x327436,
    be: _0x100e31,
    He: _0x44b600,
    ze: _0x44d949,
    pe: _0x36c449,
    _d: _0x3443fa,
    ke: _0x54f4b6,
    ee: _0x463fd9,
    Od: _0x58bbcb,
    Id: _0x4d91b4,
    Jd: _0x39746f,
    i: _0x18e886,
    xb: _0x3948ef,
    v: _0x376714,
    Ta: _0x5107a3,
    Ua: _0x397392,
    Ra: _0x586a7b,
    Y: _0x5b265d,
    zb: _0x289c30
  };
  var _0x5cbb02 = _0x5c95be();
  var _0x5b3e79 = _0x5c0d54.___wasm_call_ctors = function () {
    return (_0x5b3e79 = _0x5c0d54.___wasm_call_ctors = _0x5c0d54.asm.uk).apply(null, arguments);
  };
  var _0x19a314 = _0x5c0d54._ReleaseKeys = function () {
    return (_0x19a314 = _0x5c0d54._ReleaseKeys = _0x5c0d54.asm.vk).apply(null, arguments);
  };
  var _0xbb5585 = _0x5c0d54._SendMessageFloat = function () {
    return (_0xbb5585 = _0x5c0d54._SendMessageFloat = _0x5c0d54.asm.wk).apply(null, arguments);
  };
  var _0x3c288a = _0x5c0d54._SendMessageString = function () {
    return (_0x3c288a = _0x5c0d54._SendMessageString = _0x5c0d54.asm.xk).apply(null, arguments);
  };
  var _0x160d43 = _0x5c0d54._SendMessage = function () {
    return (_0x160d43 = _0x5c0d54._SendMessage = _0x5c0d54.asm.yk).apply(null, arguments);
  };
  var _0x317f55 = _0x5c0d54._SetFullscreen = function () {
    return (_0x317f55 = _0x5c0d54._SetFullscreen = _0x5c0d54.asm.zk).apply(null, arguments);
  };
  var _0x153add = _0x5c0d54._main = function () {
    return (_0x153add = _0x5c0d54._main = _0x5c0d54.asm.Ak).apply(null, arguments);
  };
  var _0x490017 = _0x5c0d54.___errno_location = function () {
    return (_0x490017 = _0x5c0d54.___errno_location = _0x5c0d54.asm.Bk).apply(null, arguments);
  };
  var _0x245d50 = _0x5c0d54._htonl = function () {
    return (_0x245d50 = _0x5c0d54._htonl = _0x5c0d54.asm.Ck).apply(null, arguments);
  };
  var _0x31b328 = _0x5c0d54._htons = function () {
    return (_0x31b328 = _0x5c0d54._htons = _0x5c0d54.asm.Dk).apply(null, arguments);
  };
  var _0x222208 = _0x5c0d54._ntohs = function () {
    return (_0x222208 = _0x5c0d54._ntohs = _0x5c0d54.asm.Ek).apply(null, arguments);
  };
  var _0x26272a = _0x5c0d54.__get_tzname = function () {
    return (_0x26272a = _0x5c0d54.__get_tzname = _0x5c0d54.asm.Fk).apply(null, arguments);
  };
  var _0x314c61 = _0x5c0d54.__get_daylight = function () {
    return (_0x314c61 = _0x5c0d54.__get_daylight = _0x5c0d54.asm.Gk).apply(null, arguments);
  };
  var _0xde99e1 = _0x5c0d54.__get_timezone = function () {
    return (_0xde99e1 = _0x5c0d54.__get_timezone = _0x5c0d54.asm.Hk).apply(null, arguments);
  };
  var _0x212590 = _0x5c0d54.stackSave = function () {
    return (_0x212590 = _0x5c0d54.stackSave = _0x5c0d54.asm.Ik).apply(null, arguments);
  };
  var _0x4a640e = _0x5c0d54.stackRestore = function () {
    return (_0x4a640e = _0x5c0d54.stackRestore = _0x5c0d54.asm.Jk).apply(null, arguments);
  };
  var _0x2b6616 = _0x5c0d54.stackAlloc = function () {
    return (_0x2b6616 = _0x5c0d54.stackAlloc = _0x5c0d54.asm.Kk).apply(null, arguments);
  };
  var _0x1dc1f2 = _0x5c0d54._setThrew = function () {
    return (_0x1dc1f2 = _0x5c0d54._setThrew = _0x5c0d54.asm.Lk).apply(null, arguments);
  };
  var _0x180bdc = _0x5c0d54.___cxa_can_catch = function () {
    return (_0x180bdc = _0x5c0d54.___cxa_can_catch = _0x5c0d54.asm.Mk).apply(null, arguments);
  };
  var _0x5704d8 = _0x5c0d54.___cxa_is_pointer_type = function () {
    return (_0x5704d8 = _0x5c0d54.___cxa_is_pointer_type = _0x5c0d54.asm.Nk).apply(null, arguments);
  };
  var _0x18375c = _0x5c0d54._malloc = function () {
    return (_0x18375c = _0x5c0d54._malloc = _0x5c0d54.asm.Ok).apply(null, arguments);
  };
  var _0xf67877 = _0x5c0d54._free = function () {
    return (_0xf67877 = _0x5c0d54._free = _0x5c0d54.asm.Pk).apply(null, arguments);
  };
  var _0x4c3846 = _0x5c0d54._memalign = function () {
    return (_0x4c3846 = _0x5c0d54._memalign = _0x5c0d54.asm.Qk).apply(null, arguments);
  };
  var _0x228de9 = _0x5c0d54._memset = function () {
    return (_0x228de9 = _0x5c0d54._memset = _0x5c0d54.asm.Rk).apply(null, arguments);
  };
  var _0x4929db = _0x5c0d54._strlen = function () {
    return (_0x4929db = _0x5c0d54._strlen = _0x5c0d54.asm.Sk).apply(null, arguments);
  };
  var _0x5b126d = _0x5c0d54.dynCall_iidiiii = function () {
    return (_0x5b126d = _0x5c0d54.dynCall_iidiiii = _0x5c0d54.asm.Uk).apply(null, arguments);
  };
  var _0x4be795 = _0x5c0d54.dynCall_vii = function () {
    return (_0x4be795 = _0x5c0d54.dynCall_vii = _0x5c0d54.asm.Vk).apply(null, arguments);
  };
  var _0xbea22c = _0x5c0d54.dynCall_iii = function () {
    return (_0xbea22c = _0x5c0d54.dynCall_iii = _0x5c0d54.asm.Wk).apply(null, arguments);
  };
  var _0x96b4a2 = _0x5c0d54.dynCall_ii = function () {
    return (_0x96b4a2 = _0x5c0d54.dynCall_ii = _0x5c0d54.asm.Xk).apply(null, arguments);
  };
  var _0x3b1023 = _0x5c0d54.dynCall_iiii = function () {
    return (_0x3b1023 = _0x5c0d54.dynCall_iiii = _0x5c0d54.asm.Yk).apply(null, arguments);
  };
  var _0x57422a = _0x5c0d54.dynCall_jiji = function () {
    return (_0x57422a = _0x5c0d54.dynCall_jiji = _0x5c0d54.asm.Zk).apply(null, arguments);
  };
  var _0x1cebc1 = _0x5c0d54.dynCall_vi = function () {
    return (_0x1cebc1 = _0x5c0d54.dynCall_vi = _0x5c0d54.asm._k).apply(null, arguments);
  };
  var _0x417b4a = _0x5c0d54.dynCall_iiiii = function () {
    return (_0x417b4a = _0x5c0d54.dynCall_iiiii = _0x5c0d54.asm.$k).apply(null, arguments);
  };
  var _0x58cad7 = _0x5c0d54.dynCall_viii = function () {
    return (_0x58cad7 = _0x5c0d54.dynCall_viii = _0x5c0d54.asm.al).apply(null, arguments);
  };
  var _0x9f021d = _0x5c0d54.dynCall_viiiiii = function () {
    return (_0x9f021d = _0x5c0d54.dynCall_viiiiii = _0x5c0d54.asm.bl).apply(null, arguments);
  };
  var _0x59a556 = _0x5c0d54.dynCall_viiiii = function () {
    return (_0x59a556 = _0x5c0d54.dynCall_viiiii = _0x5c0d54.asm.cl).apply(null, arguments);
  };
  var _0x3b717f = _0x5c0d54.dynCall_viiii = function () {
    return (_0x3b717f = _0x5c0d54.dynCall_viiii = _0x5c0d54.asm.dl).apply(null, arguments);
  };
  var _0xee95c5 = _0x5c0d54.dynCall_iiiiii = function () {
    return (_0xee95c5 = _0x5c0d54.dynCall_iiiiii = _0x5c0d54.asm.el).apply(null, arguments);
  };
  var _0x241c40 = _0x5c0d54.dynCall_iiij = function () {
    return (_0x241c40 = _0x5c0d54.dynCall_iiij = _0x5c0d54.asm.fl).apply(null, arguments);
  };
  var _0x1c1467 = _0x5c0d54.dynCall_v = function () {
    return (_0x1c1467 = _0x5c0d54.dynCall_v = _0x5c0d54.asm.gl).apply(null, arguments);
  };
  var _0x534172 = _0x5c0d54.dynCall_i = function () {
    return (_0x534172 = _0x5c0d54.dynCall_i = _0x5c0d54.asm.hl).apply(null, arguments);
  };
  var _0x191c1b = _0x5c0d54.dynCall_iiiiiiii = function () {
    return (_0x191c1b = _0x5c0d54.dynCall_iiiiiiii = _0x5c0d54.asm.il).apply(null, arguments);
  };
  var _0x44f870 = _0x5c0d54.dynCall_iiijiii = function () {
    return (_0x44f870 = _0x5c0d54.dynCall_iiijiii = _0x5c0d54.asm.jl).apply(null, arguments);
  };
  var _0x379605 = _0x5c0d54.dynCall_iij = function () {
    return (_0x379605 = _0x5c0d54.dynCall_iij = _0x5c0d54.asm.kl).apply(null, arguments);
  };
  var _0x442dab = _0x5c0d54.dynCall_iiiiiii = function () {
    return (_0x442dab = _0x5c0d54.dynCall_iiiiiii = _0x5c0d54.asm.ll).apply(null, arguments);
  };
  var _0x178742 = _0x5c0d54.dynCall_jii = function () {
    return (_0x178742 = _0x5c0d54.dynCall_jii = _0x5c0d54.asm.ml).apply(null, arguments);
  };
  var _0x569ace = _0x5c0d54.dynCall_viiiiiii = function () {
    return (_0x569ace = _0x5c0d54.dynCall_viiiiiii = _0x5c0d54.asm.nl).apply(null, arguments);
  };
  var _0x36b2a2 = _0x5c0d54.dynCall_jiii = function () {
    return (_0x36b2a2 = _0x5c0d54.dynCall_jiii = _0x5c0d54.asm.ol).apply(null, arguments);
  };
  var _0x231537 = _0x5c0d54.dynCall_fii = function () {
    return (_0x231537 = _0x5c0d54.dynCall_fii = _0x5c0d54.asm.pl).apply(null, arguments);
  };
  var _0x16b874 = _0x5c0d54.dynCall_iiiiiiiiiiii = function () {
    return (_0x16b874 = _0x5c0d54.dynCall_iiiiiiiiiiii = _0x5c0d54.asm.ql).apply(null, arguments);
  };
  var _0x49a5cf = _0x5c0d54.dynCall_iiiiiiiiiiiii = function () {
    return (_0x49a5cf = _0x5c0d54.dynCall_iiiiiiiiiiiii = _0x5c0d54.asm.rl).apply(null, arguments);
  };
  var _0x586d7c = _0x5c0d54.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x586d7c = _0x5c0d54.dynCall_iiiiiiiiiiiiii = _0x5c0d54.asm.sl).apply(null, arguments);
  };
  var _0x44f3a6 = _0x5c0d54.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x44f3a6 = _0x5c0d54.dynCall_iiiiiiiiiiiiiii = _0x5c0d54.asm.tl).apply(null, arguments);
  };
  var _0x25dfb4 = _0x5c0d54.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x25dfb4 = _0x5c0d54.dynCall_iiiiiiiiiiiiiiii = _0x5c0d54.asm.ul).apply(null, arguments);
  };
  var _0x1db51d = _0x5c0d54.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x1db51d = _0x5c0d54.dynCall_iiiiiiiiiiiiiiiii = _0x5c0d54.asm.vl).apply(null, arguments);
  };
  var _0x38dfed = _0x5c0d54.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x38dfed = _0x5c0d54.dynCall_iiiiiiiiiiiiiiiiii = _0x5c0d54.asm.wl).apply(null, arguments);
  };
  var _0x178cf4 = _0x5c0d54.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x178cf4 = _0x5c0d54.dynCall_iiiiiiiiiiiiiiiiiii = _0x5c0d54.asm.xl).apply(null, arguments);
  };
  var _0x2dd359 = _0x5c0d54.dynCall_didi = function () {
    return (_0x2dd359 = _0x5c0d54.dynCall_didi = _0x5c0d54.asm.yl).apply(null, arguments);
  };
  var _0x176fe4 = _0x5c0d54.dynCall_fiii = function () {
    return (_0x176fe4 = _0x5c0d54.dynCall_fiii = _0x5c0d54.asm.zl).apply(null, arguments);
  };
  var _0x595988 = _0x5c0d54.dynCall_iiji = function () {
    return (_0x595988 = _0x5c0d54.dynCall_iiji = _0x5c0d54.asm.Al).apply(null, arguments);
  };
  var _0x547dc2 = _0x5c0d54.dynCall_viiji = function () {
    return (_0x547dc2 = _0x5c0d54.dynCall_viiji = _0x5c0d54.asm.Bl).apply(null, arguments);
  };
  var _0x470ad1 = _0x5c0d54.dynCall_viifi = function () {
    return (_0x470ad1 = _0x5c0d54.dynCall_viifi = _0x5c0d54.asm.Cl).apply(null, arguments);
  };
  var _0x1ca4a8 = _0x5c0d54.dynCall_jiiii = function () {
    return (_0x1ca4a8 = _0x5c0d54.dynCall_jiiii = _0x5c0d54.asm.Dl).apply(null, arguments);
  };
  var _0x11a8b2 = _0x5c0d54.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x11a8b2 = _0x5c0d54.dynCall_viiiiiiiiiiiiii = _0x5c0d54.asm.El).apply(null, arguments);
  };
  var _0x4c1c50 = _0x5c0d54.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0x4c1c50 = _0x5c0d54.dynCall_viiiiiiiiiiiiiii = _0x5c0d54.asm.Fl).apply(null, arguments);
  };
  var _0x30f97d = _0x5c0d54.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x30f97d = _0x5c0d54.dynCall_viiiiiiiiiiiiiiii = _0x5c0d54.asm.Gl).apply(null, arguments);
  };
  var _0xc27f35 = _0x5c0d54.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0xc27f35 = _0x5c0d54.dynCall_viiiiiiiiiiiiiiiii = _0x5c0d54.asm.Hl).apply(null, arguments);
  };
  var _0x4101d0 = _0x5c0d54.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x4101d0 = _0x5c0d54.dynCall_viiiiiiiiiiiiiiiiii = _0x5c0d54.asm.Il).apply(null, arguments);
  };
  var _0x4505e6 = _0x5c0d54.dynCall_vifii = function () {
    return (_0x4505e6 = _0x5c0d54.dynCall_vifii = _0x5c0d54.asm.Jl).apply(null, arguments);
  };
  var _0x3ef535 = _0x5c0d54.dynCall_viffi = function () {
    return (_0x3ef535 = _0x5c0d54.dynCall_viffi = _0x5c0d54.asm.Kl).apply(null, arguments);
  };
  var _0x84b756 = _0x5c0d54.dynCall_viidi = function () {
    return (_0x84b756 = _0x5c0d54.dynCall_viidi = _0x5c0d54.asm.Ll).apply(null, arguments);
  };
  var _0x415854 = _0x5c0d54.dynCall_viiifi = function () {
    return (_0x415854 = _0x5c0d54.dynCall_viiifi = _0x5c0d54.asm.Ml).apply(null, arguments);
  };
  var _0x350b51 = _0x5c0d54.dynCall_vijiiii = function () {
    return (_0x350b51 = _0x5c0d54.dynCall_vijiiii = _0x5c0d54.asm.Nl).apply(null, arguments);
  };
  var _0x3f8d5d = _0x5c0d54.dynCall_viiiijii = function () {
    return (_0x3f8d5d = _0x5c0d54.dynCall_viiiijii = _0x5c0d54.asm.Ol).apply(null, arguments);
  };
  var _0x9eaaed = _0x5c0d54.dynCall_viiiiiiii = function () {
    return (_0x9eaaed = _0x5c0d54.dynCall_viiiiiiii = _0x5c0d54.asm.Pl).apply(null, arguments);
  };
  var _0x4e3e7a = _0x5c0d54.dynCall_viiiiiiiii = function () {
    return (_0x4e3e7a = _0x5c0d54.dynCall_viiiiiiiii = _0x5c0d54.asm.Ql).apply(null, arguments);
  };
  var _0x5e0b5a = _0x5c0d54.dynCall_viiiiiiiiii = function () {
    return (_0x5e0b5a = _0x5c0d54.dynCall_viiiiiiiiii = _0x5c0d54.asm.Rl).apply(null, arguments);
  };
  var _0x3b48e5 = _0x5c0d54.dynCall_viiiiiiiiiii = function () {
    return (_0x3b48e5 = _0x5c0d54.dynCall_viiiiiiiiiii = _0x5c0d54.asm.Sl).apply(null, arguments);
  };
  var _0x10b1cb = _0x5c0d54.dynCall_iijji = function () {
    return (_0x10b1cb = _0x5c0d54.dynCall_iijji = _0x5c0d54.asm.Tl).apply(null, arguments);
  };
  var _0x5383ba = _0x5c0d54.dynCall_iiddi = function () {
    return (_0x5383ba = _0x5c0d54.dynCall_iiddi = _0x5c0d54.asm.Ul).apply(null, arguments);
  };
  var _0x4d84fa = _0x5c0d54.dynCall_iiffi = function () {
    return (_0x4d84fa = _0x5c0d54.dynCall_iiffi = _0x5c0d54.asm.Vl).apply(null, arguments);
  };
  var _0x41e820 = _0x5c0d54.dynCall_viiiif = function () {
    return (_0x41e820 = _0x5c0d54.dynCall_viiiif = _0x5c0d54.asm.Wl).apply(null, arguments);
  };
  var _0x4f88e2 = _0x5c0d54.dynCall_vifi = function () {
    return (_0x4f88e2 = _0x5c0d54.dynCall_vifi = _0x5c0d54.asm.Xl).apply(null, arguments);
  };
  var _0x41414d = _0x5c0d54.dynCall_viiddi = function () {
    return (_0x41414d = _0x5c0d54.dynCall_viiddi = _0x5c0d54.asm.Yl).apply(null, arguments);
  };
  var _0x3ee696 = _0x5c0d54.dynCall_viidii = function () {
    return (_0x3ee696 = _0x5c0d54.dynCall_viidii = _0x5c0d54.asm.Zl).apply(null, arguments);
  };
  var _0x1f0308 = _0x5c0d54.dynCall_diii = function () {
    return (_0x1f0308 = _0x5c0d54.dynCall_diii = _0x5c0d54.asm._l).apply(null, arguments);
  };
  var _0x2d6429 = _0x5c0d54.dynCall_jdi = function () {
    return (_0x2d6429 = _0x5c0d54.dynCall_jdi = _0x5c0d54.asm.$l).apply(null, arguments);
  };
  var _0x5cbb56 = _0x5c0d54.dynCall_ijji = function () {
    return (_0x5cbb56 = _0x5c0d54.dynCall_ijji = _0x5c0d54.asm.am).apply(null, arguments);
  };
  var _0x18e594 = _0x5c0d54.dynCall_dji = function () {
    return (_0x18e594 = _0x5c0d54.dynCall_dji = _0x5c0d54.asm.bm).apply(null, arguments);
  };
  var _0x21062c = _0x5c0d54.dynCall_vidiii = function () {
    return (_0x21062c = _0x5c0d54.dynCall_vidiii = _0x5c0d54.asm.cm).apply(null, arguments);
  };
  var _0x561a5b = _0x5c0d54.dynCall_dii = function () {
    return (_0x561a5b = _0x5c0d54.dynCall_dii = _0x5c0d54.asm.dm).apply(null, arguments);
  };
  var _0x39ab4f = _0x5c0d54.dynCall_fiiii = function () {
    return (_0x39ab4f = _0x5c0d54.dynCall_fiiii = _0x5c0d54.asm.em).apply(null, arguments);
  };
  var _0x2df266 = _0x5c0d54.dynCall_diiii = function () {
    return (_0x2df266 = _0x5c0d54.dynCall_diiii = _0x5c0d54.asm.fm).apply(null, arguments);
  };
  var _0x5c79ff = _0x5c0d54.dynCall_dddi = function () {
    return (_0x5c79ff = _0x5c0d54.dynCall_dddi = _0x5c0d54.asm.gm).apply(null, arguments);
  };
  var _0x379b8a = _0x5c0d54.dynCall_vijii = function () {
    return (_0x379b8a = _0x5c0d54.dynCall_vijii = _0x5c0d54.asm.hm).apply(null, arguments);
  };
  var _0x18037e = _0x5c0d54.dynCall_iiiji = function () {
    return (_0x18037e = _0x5c0d54.dynCall_iiiji = _0x5c0d54.asm.im).apply(null, arguments);
  };
  var _0x3ba8de = _0x5c0d54.dynCall_iiiiiiiii = function () {
    return (_0x3ba8de = _0x5c0d54.dynCall_iiiiiiiii = _0x5c0d54.asm.jm).apply(null, arguments);
  };
  var _0x59f7c3 = _0x5c0d54.dynCall_iiiiiiiiii = function () {
    return (_0x59f7c3 = _0x5c0d54.dynCall_iiiiiiiiii = _0x5c0d54.asm.km).apply(null, arguments);
  };
  var _0x503d81 = _0x5c0d54.dynCall_fiifii = function () {
    return (_0x503d81 = _0x5c0d54.dynCall_fiifii = _0x5c0d54.asm.lm).apply(null, arguments);
  };
  var _0x4a5db1 = _0x5c0d54.dynCall_viiiiiiiiiiii = function () {
    return (_0x4a5db1 = _0x5c0d54.dynCall_viiiiiiiiiiii = _0x5c0d54.asm.mm).apply(null, arguments);
  };
  var _0x584fc5 = _0x5c0d54.dynCall_viffffi = function () {
    return (_0x584fc5 = _0x5c0d54.dynCall_viffffi = _0x5c0d54.asm.nm).apply(null, arguments);
  };
  var _0x1b6182 = _0x5c0d54.dynCall_viji = function () {
    return (_0x1b6182 = _0x5c0d54.dynCall_viji = _0x5c0d54.asm.om).apply(null, arguments);
  };
  var _0x2d649b = _0x5c0d54.dynCall_viif = function () {
    return (_0x2d649b = _0x5c0d54.dynCall_viif = _0x5c0d54.asm.pm).apply(null, arguments);
  };
  var _0x26e166 = _0x5c0d54.dynCall_viiij = function () {
    return (_0x26e166 = _0x5c0d54.dynCall_viiij = _0x5c0d54.asm.qm).apply(null, arguments);
  };
  var _0x3901dc = _0x5c0d54.dynCall_iiifi = function () {
    return (_0x3901dc = _0x5c0d54.dynCall_iiifi = _0x5c0d54.asm.rm).apply(null, arguments);
  };
  var _0x3f1352 = _0x5c0d54.dynCall_iiifii = function () {
    return (_0x3f1352 = _0x5c0d54.dynCall_iiifii = _0x5c0d54.asm.sm).apply(null, arguments);
  };
  var _0x239f91 = _0x5c0d54.dynCall_iiiiifiiiii = function () {
    return (_0x239f91 = _0x5c0d54.dynCall_iiiiifiiiii = _0x5c0d54.asm.tm).apply(null, arguments);
  };
  var _0x270ab8 = _0x5c0d54.dynCall_viiiiifi = function () {
    return (_0x270ab8 = _0x5c0d54.dynCall_viiiiifi = _0x5c0d54.asm.um).apply(null, arguments);
  };
  var _0x510522 = _0x5c0d54.dynCall_jiiiiiiiiii = function () {
    return (_0x510522 = _0x5c0d54.dynCall_jiiiiiiiiii = _0x5c0d54.asm.vm).apply(null, arguments);
  };
  var _0x172afc = _0x5c0d54.dynCall_ifi = function () {
    return (_0x172afc = _0x5c0d54.dynCall_ifi = _0x5c0d54.asm.wm).apply(null, arguments);
  };
  var _0x429145 = _0x5c0d54.dynCall_idi = function () {
    return (_0x429145 = _0x5c0d54.dynCall_idi = _0x5c0d54.asm.xm).apply(null, arguments);
  };
  var _0x21e141 = _0x5c0d54.dynCall_viij = function () {
    return (_0x21e141 = _0x5c0d54.dynCall_viij = _0x5c0d54.asm.ym).apply(null, arguments);
  };
  var _0x140364 = _0x5c0d54.dynCall_viid = function () {
    return (_0x140364 = _0x5c0d54.dynCall_viid = _0x5c0d54.asm.zm).apply(null, arguments);
  };
  var _0xe2e9ad = _0x5c0d54.dynCall_iiiiji = function () {
    return (_0xe2e9ad = _0x5c0d54.dynCall_iiiiji = _0x5c0d54.asm.Am).apply(null, arguments);
  };
  var _0x5e33f7 = _0x5c0d54.dynCall_viiiiiiiiiiiii = function () {
    return (_0x5e33f7 = _0x5c0d54.dynCall_viiiiiiiiiiiii = _0x5c0d54.asm.Bm).apply(null, arguments);
  };
  var _0x51fc82 = _0x5c0d54.dynCall_ji = function () {
    return (_0x51fc82 = _0x5c0d54.dynCall_ji = _0x5c0d54.asm.Cm).apply(null, arguments);
  };
  var _0x4a4ac6 = _0x5c0d54.dynCall_jjji = function () {
    return (_0x4a4ac6 = _0x5c0d54.dynCall_jjji = _0x5c0d54.asm.Dm).apply(null, arguments);
  };
  var _0x10a53d = _0x5c0d54.dynCall_iiiiij = function () {
    return (_0x10a53d = _0x5c0d54.dynCall_iiiiij = _0x5c0d54.asm.Em).apply(null, arguments);
  };
  var _0x5a8668 = _0x5c0d54.dynCall_vijjji = function () {
    return (_0x5a8668 = _0x5c0d54.dynCall_vijjji = _0x5c0d54.asm.Fm).apply(null, arguments);
  };
  var _0x5f246f = _0x5c0d54.dynCall_jiiji = function () {
    return (_0x5f246f = _0x5c0d54.dynCall_jiiji = _0x5c0d54.asm.Gm).apply(null, arguments);
  };
  var _0x5804cf = _0x5c0d54.dynCall_viijiiijiiii = function () {
    return (_0x5804cf = _0x5c0d54.dynCall_viijiiijiiii = _0x5c0d54.asm.Hm).apply(null, arguments);
  };
  var _0x316dc3 = _0x5c0d54.dynCall_vidi = function () {
    return (_0x316dc3 = _0x5c0d54.dynCall_vidi = _0x5c0d54.asm.Im).apply(null, arguments);
  };
  var _0x287565 = _0x5c0d54.dynCall_fffi = function () {
    return (_0x287565 = _0x5c0d54.dynCall_fffi = _0x5c0d54.asm.Jm).apply(null, arguments);
  };
  var _0x44399a = _0x5c0d54.dynCall_jji = function () {
    return (_0x44399a = _0x5c0d54.dynCall_jji = _0x5c0d54.asm.Km).apply(null, arguments);
  };
  var _0x339da6 = _0x5c0d54.dynCall_iidi = function () {
    return (_0x339da6 = _0x5c0d54.dynCall_iidi = _0x5c0d54.asm.Lm).apply(null, arguments);
  };
  var _0x1d1a3e = _0x5c0d54.dynCall_iifi = function () {
    return (_0x1d1a3e = _0x5c0d54.dynCall_iifi = _0x5c0d54.asm.Mm).apply(null, arguments);
  };
  var _0x58fdf3 = _0x5c0d54.dynCall_iji = function () {
    return (_0x58fdf3 = _0x5c0d54.dynCall_iji = _0x5c0d54.asm.Nm).apply(null, arguments);
  };
  var _0x5177ef = _0x5c0d54.dynCall_jjii = function () {
    return (_0x5177ef = _0x5c0d54.dynCall_jjii = _0x5c0d54.asm.Om).apply(null, arguments);
  };
  var _0x12b18c = _0x5c0d54.dynCall_iijiii = function () {
    return (_0x12b18c = _0x5c0d54.dynCall_iijiii = _0x5c0d54.asm.Pm).apply(null, arguments);
  };
  var _0x11e001 = _0x5c0d54.dynCall_ffi = function () {
    return (_0x11e001 = _0x5c0d54.dynCall_ffi = _0x5c0d54.asm.Qm).apply(null, arguments);
  };
  var _0x499d5d = _0x5c0d54.dynCall_fiiifi = function () {
    return (_0x499d5d = _0x5c0d54.dynCall_fiiifi = _0x5c0d54.asm.Rm).apply(null, arguments);
  };
  var _0x2ec48d = _0x5c0d54.dynCall_iiiifi = function () {
    return (_0x2ec48d = _0x5c0d54.dynCall_iiiifi = _0x5c0d54.asm.Sm).apply(null, arguments);
  };
  var _0x2fbf04 = _0x5c0d54.dynCall_viiffi = function () {
    return (_0x2fbf04 = _0x5c0d54.dynCall_viiffi = _0x5c0d54.asm.Tm).apply(null, arguments);
  };
  var _0x226503 = _0x5c0d54.dynCall_viiijj = function () {
    return (_0x226503 = _0x5c0d54.dynCall_viiijj = _0x5c0d54.asm.Um).apply(null, arguments);
  };
  var _0x3e1257 = _0x5c0d54.dynCall_viijj = function () {
    return (_0x3e1257 = _0x5c0d54.dynCall_viijj = _0x5c0d54.asm.Vm).apply(null, arguments);
  };
  var _0x22d3af = _0x5c0d54.dynCall_viiiifi = function () {
    return (_0x22d3af = _0x5c0d54.dynCall_viiiifi = _0x5c0d54.asm.Wm).apply(null, arguments);
  };
  var _0x3dbaf6 = _0x5c0d54.dynCall_di = function () {
    return (_0x3dbaf6 = _0x5c0d54.dynCall_di = _0x5c0d54.asm.Xm).apply(null, arguments);
  };
  var _0x23dbbe = _0x5c0d54.dynCall_vidii = function () {
    return (_0x23dbbe = _0x5c0d54.dynCall_vidii = _0x5c0d54.asm.Ym).apply(null, arguments);
  };
  var _0x111da9 = _0x5c0d54.dynCall_vijiii = function () {
    return (_0x111da9 = _0x5c0d54.dynCall_vijiii = _0x5c0d54.asm.Zm).apply(null, arguments);
  };
  var _0x1448a2 = _0x5c0d54.dynCall_viiiidi = function () {
    return (_0x1448a2 = _0x5c0d54.dynCall_viiiidi = _0x5c0d54.asm._m).apply(null, arguments);
  };
  var _0x3b6842 = _0x5c0d54.dynCall_viiiiidi = function () {
    return (_0x3b6842 = _0x5c0d54.dynCall_viiiiidi = _0x5c0d54.asm.$m).apply(null, arguments);
  };
  var _0x4d498f = _0x5c0d54.dynCall_viiiiiidi = function () {
    return (_0x4d498f = _0x5c0d54.dynCall_viiiiiidi = _0x5c0d54.asm.an).apply(null, arguments);
  };
  var _0x252510 = _0x5c0d54.dynCall_viiiiiiid = function () {
    return (_0x252510 = _0x5c0d54.dynCall_viiiiiiid = _0x5c0d54.asm.bn).apply(null, arguments);
  };
  var _0x1f1c54 = _0x5c0d54.dynCall_viiif = function () {
    return (_0x1f1c54 = _0x5c0d54.dynCall_viiif = _0x5c0d54.asm.cn).apply(null, arguments);
  };
  var _0x28fc23 = _0x5c0d54.dynCall_viijiiii = function () {
    return (_0x28fc23 = _0x5c0d54.dynCall_viijiiii = _0x5c0d54.asm.dn).apply(null, arguments);
  };
  var _0x53cb55 = _0x5c0d54.dynCall_viijii = function () {
    return (_0x53cb55 = _0x5c0d54.dynCall_viijii = _0x5c0d54.asm.en).apply(null, arguments);
  };
  var _0x5c37ec = _0x5c0d54.dynCall_ijiiii = function () {
    return (_0x5c37ec = _0x5c0d54.dynCall_ijiiii = _0x5c0d54.asm.fn).apply(null, arguments);
  };
  var _0x44103f = _0x5c0d54.dynCall_fi = function () {
    return (_0x44103f = _0x5c0d54.dynCall_fi = _0x5c0d54.asm.gn).apply(null, arguments);
  };
  var _0x3543a3 = _0x5c0d54.dynCall_viifiiiii = function () {
    return (_0x3543a3 = _0x5c0d54.dynCall_viifiiiii = _0x5c0d54.asm.hn).apply(null, arguments);
  };
  var _0x25e05b = _0x5c0d54.dynCall_iifii = function () {
    return (_0x25e05b = _0x5c0d54.dynCall_iifii = _0x5c0d54.asm.jn).apply(null, arguments);
  };
  var _0x2fbcde = _0x5c0d54.dynCall_vfi = function () {
    return (_0x2fbcde = _0x5c0d54.dynCall_vfi = _0x5c0d54.asm.kn).apply(null, arguments);
  };
  var _0x36bd2f = _0x5c0d54.dynCall_viifii = function () {
    return (_0x36bd2f = _0x5c0d54.dynCall_viifii = _0x5c0d54.asm.ln).apply(null, arguments);
  };
  var _0x2fd350 = _0x5c0d54.dynCall_viifffi = function () {
    return (_0x2fd350 = _0x5c0d54.dynCall_viifffi = _0x5c0d54.asm.mn).apply(null, arguments);
  };
  var _0x2fdc3e = _0x5c0d54.dynCall_iiiiiiiifiii = function () {
    return (_0x2fdc3e = _0x5c0d54.dynCall_iiiiiiiifiii = _0x5c0d54.asm.nn).apply(null, arguments);
  };
  var _0x211335 = _0x5c0d54.dynCall_viiiiiffi = function () {
    return (_0x211335 = _0x5c0d54.dynCall_viiiiiffi = _0x5c0d54.asm.on).apply(null, arguments);
  };
  var _0x46e3f6 = _0x5c0d54.dynCall_iiiid = function () {
    return (_0x46e3f6 = _0x5c0d54.dynCall_iiiid = _0x5c0d54.asm.pn).apply(null, arguments);
  };
  var _0x52849b = _0x5c0d54.dynCall_iiiij = function () {
    return (_0x52849b = _0x5c0d54.dynCall_iiiij = _0x5c0d54.asm.qn).apply(null, arguments);
  };
  var _0x4b377e = _0x5c0d54.dynCall_iiiif = function () {
    return (_0x4b377e = _0x5c0d54.dynCall_iiiif = _0x5c0d54.asm.rn).apply(null, arguments);
  };
  var _0x11fbf0 = _0x5c0d54.dynCall_viiiiiiiiifi = function () {
    return (_0x11fbf0 = _0x5c0d54.dynCall_viiiiiiiiifi = _0x5c0d54.asm.sn).apply(null, arguments);
  };
  var _0x23d740 = _0x5c0d54.dynCall_iiiifii = function () {
    return (_0x23d740 = _0x5c0d54.dynCall_iiiifii = _0x5c0d54.asm.tn).apply(null, arguments);
  };
  var _0x4d4dcb = _0x5c0d54.dynCall_viiiifii = function () {
    return (_0x4d4dcb = _0x5c0d54.dynCall_viiiifii = _0x5c0d54.asm.un).apply(null, arguments);
  };
  var _0x5373f6 = _0x5c0d54.dynCall_jiiiii = function () {
    return (_0x5373f6 = _0x5c0d54.dynCall_jiiiii = _0x5c0d54.asm.vn).apply(null, arguments);
  };
  var _0x3e2129 = _0x5c0d54.dynCall_viijiii = function () {
    return (_0x3e2129 = _0x5c0d54.dynCall_viijiii = _0x5c0d54.asm.wn).apply(null, arguments);
  };
  var _0x179bac = _0x5c0d54.dynCall_j = function () {
    return (_0x179bac = _0x5c0d54.dynCall_j = _0x5c0d54.asm.xn).apply(null, arguments);
  };
  var _0x435a92 = _0x5c0d54.dynCall_jijj = function () {
    return (_0x435a92 = _0x5c0d54.dynCall_jijj = _0x5c0d54.asm.yn).apply(null, arguments);
  };
  var _0x4d1b7c = _0x5c0d54.dynCall_iiiiiiiiiji = function () {
    return (_0x4d1b7c = _0x5c0d54.dynCall_iiiiiiiiiji = _0x5c0d54.asm.zn).apply(null, arguments);
  };
  var _0xd91db8 = _0x5c0d54.dynCall_vji = function () {
    return (_0xd91db8 = _0x5c0d54.dynCall_vji = _0x5c0d54.asm.An).apply(null, arguments);
  };
  var _0x40382c = _0x5c0d54.dynCall_iiijii = function () {
    return (_0x40382c = _0x5c0d54.dynCall_iiijii = _0x5c0d54.asm.Bn).apply(null, arguments);
  };
  var _0x1dcc1c = _0x5c0d54.dynCall_iijiiii = function () {
    return (_0x1dcc1c = _0x5c0d54.dynCall_iijiiii = _0x5c0d54.asm.Cn).apply(null, arguments);
  };
  var _0x3c4e90 = _0x5c0d54.dynCall_jijiii = function () {
    return (_0x3c4e90 = _0x5c0d54.dynCall_jijiii = _0x5c0d54.asm.Dn).apply(null, arguments);
  };
  var _0x35fe72 = _0x5c0d54.dynCall_iijiiiiii = function () {
    return (_0x35fe72 = _0x5c0d54.dynCall_iijiiiiii = _0x5c0d54.asm.En).apply(null, arguments);
  };
  var _0x26e7f0 = _0x5c0d54.dynCall_iijjiiiiii = function () {
    return (_0x26e7f0 = _0x5c0d54.dynCall_iijjiiiiii = _0x5c0d54.asm.Fn).apply(null, arguments);
  };
  var _0xe8f71a = _0x5c0d54.dynCall_iiiijjii = function () {
    return (_0xe8f71a = _0x5c0d54.dynCall_iiiijjii = _0x5c0d54.asm.Gn).apply(null, arguments);
  };
  var _0x51cb65 = _0x5c0d54.dynCall_iijii = function () {
    return (_0x51cb65 = _0x5c0d54.dynCall_iijii = _0x5c0d54.asm.Hn).apply(null, arguments);
  };
  var _0x14d136 = _0x5c0d54.dynCall_viiiji = function () {
    return (_0x14d136 = _0x5c0d54.dynCall_viiiji = _0x5c0d54.asm.In).apply(null, arguments);
  };
  var _0x527fc7 = _0x5c0d54.dynCall_viiff = function () {
    return (_0x527fc7 = _0x5c0d54.dynCall_viiff = _0x5c0d54.asm.Jn).apply(null, arguments);
  };
  var _0x5e8712 = _0x5c0d54.dynCall_viifffffi = function () {
    return (_0x5e8712 = _0x5c0d54.dynCall_viifffffi = _0x5c0d54.asm.Kn).apply(null, arguments);
  };
  var _0x1a5a76 = _0x5c0d54.dynCall_fifi = function () {
    return (_0x1a5a76 = _0x5c0d54.dynCall_fifi = _0x5c0d54.asm.Ln).apply(null, arguments);
  };
  var _0x40701c = _0x5c0d54.dynCall_viiiiifffiii = function () {
    return (_0x40701c = _0x5c0d54.dynCall_viiiiifffiii = _0x5c0d54.asm.Mn).apply(null, arguments);
  };
  var _0x2be823 = _0x5c0d54.dynCall_fiiiii = function () {
    return (_0x2be823 = _0x5c0d54.dynCall_fiiiii = _0x5c0d54.asm.Nn).apply(null, arguments);
  };
  var _0x50b9a6 = _0x5c0d54.dynCall_fiiffi = function () {
    return (_0x50b9a6 = _0x5c0d54.dynCall_fiiffi = _0x5c0d54.asm.On).apply(null, arguments);
  };
  var _0x417baa = _0x5c0d54.dynCall_viiififii = function () {
    return (_0x417baa = _0x5c0d54.dynCall_viiififii = _0x5c0d54.asm.Pn).apply(null, arguments);
  };
  var _0x17ba3e = _0x5c0d54.dynCall_jijii = function () {
    return (_0x17ba3e = _0x5c0d54.dynCall_jijii = _0x5c0d54.asm.Qn).apply(null, arguments);
  };
  var _0x57420c = _0x5c0d54.dynCall_fiifi = function () {
    return (_0x57420c = _0x5c0d54.dynCall_fiifi = _0x5c0d54.asm.Rn).apply(null, arguments);
  };
  var _0xf4b13a = _0x5c0d54.dynCall_viiiffi = function () {
    return (_0xf4b13a = _0x5c0d54.dynCall_viiiffi = _0x5c0d54.asm.Sn).apply(null, arguments);
  };
  var _0x1eadcd = _0x5c0d54.dynCall_iiiijii = function () {
    return (_0x1eadcd = _0x5c0d54.dynCall_iiiijii = _0x5c0d54.asm.Tn).apply(null, arguments);
  };
  var _0x184951 = _0x5c0d54.dynCall_iiiiiiiiiii = function () {
    return (_0x184951 = _0x5c0d54.dynCall_iiiiiiiiiii = _0x5c0d54.asm.Un).apply(null, arguments);
  };
  var _0x2b3275 = _0x5c0d54.dynCall_viijiiiiii = function () {
    return (_0x2b3275 = _0x5c0d54.dynCall_viijiiiiii = _0x5c0d54.asm.Vn).apply(null, arguments);
  };
  var _0x3d5008 = _0x5c0d54.dynCall_vjjjiiii = function () {
    return (_0x3d5008 = _0x5c0d54.dynCall_vjjjiiii = _0x5c0d54.asm.Wn).apply(null, arguments);
  };
  var _0x45e94d = _0x5c0d54.dynCall_vjiiiii = function () {
    return (_0x45e94d = _0x5c0d54.dynCall_vjiiiii = _0x5c0d54.asm.Xn).apply(null, arguments);
  };
  var _0x2bf1a7 = _0x5c0d54.dynCall_fiiiiiiii = function () {
    return (_0x2bf1a7 = _0x5c0d54.dynCall_fiiiiiiii = _0x5c0d54.asm.Yn).apply(null, arguments);
  };
  var _0x34cf63 = _0x5c0d54.dynCall_viiifii = function () {
    return (_0x34cf63 = _0x5c0d54.dynCall_viiifii = _0x5c0d54.asm.Zn).apply(null, arguments);
  };
  var _0x5d831a = _0x5c0d54.dynCall_iiifiii = function () {
    return (_0x5d831a = _0x5c0d54.dynCall_iiifiii = _0x5c0d54.asm._n).apply(null, arguments);
  };
  var _0x19a482 = _0x5c0d54.dynCall_ifii = function () {
    return (_0x19a482 = _0x5c0d54.dynCall_ifii = _0x5c0d54.asm.$n).apply(null, arguments);
  };
  var _0x78c4a8 = _0x5c0d54.dynCall_iiiffi = function () {
    return (_0x78c4a8 = _0x5c0d54.dynCall_iiiffi = _0x5c0d54.asm.ao).apply(null, arguments);
  };
  var _0x3c0980 = _0x5c0d54.dynCall_iifffi = function () {
    return (_0x3c0980 = _0x5c0d54.dynCall_iifffi = _0x5c0d54.asm.bo).apply(null, arguments);
  };
  var _0x1a8d4a = _0x5c0d54.dynCall_ifffi = function () {
    return (_0x1a8d4a = _0x5c0d54.dynCall_ifffi = _0x5c0d54.asm.co).apply(null, arguments);
  };
  var _0x577380 = _0x5c0d54.dynCall_iiifffi = function () {
    return (_0x577380 = _0x5c0d54.dynCall_iiifffi = _0x5c0d54.asm.eo).apply(null, arguments);
  };
  var _0xebcc28 = _0x5c0d54.dynCall_iiiiifi = function () {
    return (_0xebcc28 = _0x5c0d54.dynCall_iiiiifi = _0x5c0d54.asm.fo).apply(null, arguments);
  };
  var _0x50babc = _0x5c0d54.dynCall_ffffi = function () {
    return (_0x50babc = _0x5c0d54.dynCall_ffffi = _0x5c0d54.asm.go).apply(null, arguments);
  };
  var _0x44810f = _0x5c0d54.dynCall_fffffi = function () {
    return (_0x44810f = _0x5c0d54.dynCall_fffffi = _0x5c0d54.asm.ho).apply(null, arguments);
  };
  var _0x46344c = _0x5c0d54.dynCall_ffffffi = function () {
    return (_0x46344c = _0x5c0d54.dynCall_ffffffi = _0x5c0d54.asm.io).apply(null, arguments);
  };
  var _0x14c310 = _0x5c0d54.dynCall_vifffffi = function () {
    return (_0x14c310 = _0x5c0d54.dynCall_vifffffi = _0x5c0d54.asm.jo).apply(null, arguments);
  };
  var _0x56aa87 = _0x5c0d54.dynCall_viffffffi = function () {
    return (_0x56aa87 = _0x5c0d54.dynCall_viffffffi = _0x5c0d54.asm.ko).apply(null, arguments);
  };
  var _0x1e34e0 = _0x5c0d54.dynCall_iiiifiii = function () {
    return (_0x1e34e0 = _0x5c0d54.dynCall_iiiifiii = _0x5c0d54.asm.lo).apply(null, arguments);
  };
  var _0x24c678 = _0x5c0d54.dynCall_iijffffi = function () {
    return (_0x24c678 = _0x5c0d54.dynCall_iijffffi = _0x5c0d54.asm.mo).apply(null, arguments);
  };
  var _0x515c79 = _0x5c0d54.dynCall_vijiffji = function () {
    return (_0x515c79 = _0x5c0d54.dynCall_vijiffji = _0x5c0d54.asm.no).apply(null, arguments);
  };
  var _0x1c1bb7 = _0x5c0d54.dynCall_iiiiiiiffiii = function () {
    return (_0x1c1bb7 = _0x5c0d54.dynCall_iiiiiiiffiii = _0x5c0d54.asm.oo).apply(null, arguments);
  };
  var _0x18237f = _0x5c0d54.dynCall_iiiiffiii = function () {
    return (_0x18237f = _0x5c0d54.dynCall_iiiiffiii = _0x5c0d54.asm.po).apply(null, arguments);
  };
  var _0x2207b3 = _0x5c0d54.dynCall_vjii = function () {
    return (_0x2207b3 = _0x5c0d54.dynCall_vjii = _0x5c0d54.asm.qo).apply(null, arguments);
  };
  var _0x373ef9 = _0x5c0d54.dynCall_iffi = function () {
    return (_0x373ef9 = _0x5c0d54.dynCall_iffi = _0x5c0d54.asm.ro).apply(null, arguments);
  };
  var _0x42ae2a = _0x5c0d54.dynCall_viffii = function () {
    return (_0x42ae2a = _0x5c0d54.dynCall_viffii = _0x5c0d54.asm.so).apply(null, arguments);
  };
  var _0x348516 = _0x5c0d54.dynCall_fiiiiii = function () {
    return (_0x348516 = _0x5c0d54.dynCall_fiiiiii = _0x5c0d54.asm.to).apply(null, arguments);
  };
  var _0x549ce1 = _0x5c0d54.dynCall_vififii = function () {
    return (_0x549ce1 = _0x5c0d54.dynCall_vififii = _0x5c0d54.asm.uo).apply(null, arguments);
  };
  var _0x181038 = _0x5c0d54.dynCall_vifffi = function () {
    return (_0x181038 = _0x5c0d54.dynCall_vifffi = _0x5c0d54.asm.vo).apply(null, arguments);
  };
  var _0x530186 = _0x5c0d54.dynCall_viiifiiiifii = function () {
    return (_0x530186 = _0x5c0d54.dynCall_viiifiiiifii = _0x5c0d54.asm.wo).apply(null, arguments);
  };
  var _0x4c904c = _0x5c0d54.dynCall_viiiffii = function () {
    return (_0x4c904c = _0x5c0d54.dynCall_viiiffii = _0x5c0d54.asm.xo).apply(null, arguments);
  };
  var _0x4854b5 = _0x5c0d54.dynCall_viiffii = function () {
    return (_0x4854b5 = _0x5c0d54.dynCall_viiffii = _0x5c0d54.asm.yo).apply(null, arguments);
  };
  var _0x421893 = _0x5c0d54.dynCall_viififfii = function () {
    return (_0x421893 = _0x5c0d54.dynCall_viififfii = _0x5c0d54.asm.zo).apply(null, arguments);
  };
  var _0x26e6f9 = _0x5c0d54.dynCall_iiiiifiii = function () {
    return (_0x26e6f9 = _0x5c0d54.dynCall_iiiiifiii = _0x5c0d54.asm.Ao).apply(null, arguments);
  };
  var _0x50fa55 = _0x5c0d54.dynCall_iiiiiifiii = function () {
    return (_0x50fa55 = _0x5c0d54.dynCall_iiiiiifiii = _0x5c0d54.asm.Bo).apply(null, arguments);
  };
  var _0x3a5a93 = _0x5c0d54.dynCall_iiiiififiii = function () {
    return (_0x3a5a93 = _0x5c0d54.dynCall_iiiiififiii = _0x5c0d54.asm.Co).apply(null, arguments);
  };
  var _0x12fbb9 = _0x5c0d54.dynCall_iiiiiiifiii = function () {
    return (_0x12fbb9 = _0x5c0d54.dynCall_iiiiiiifiii = _0x5c0d54.asm.Do).apply(null, arguments);
  };
  var _0x17b59f = _0x5c0d54.dynCall_iiiiifiifiii = function () {
    return (_0x17b59f = _0x5c0d54.dynCall_iiiiifiifiii = _0x5c0d54.asm.Eo).apply(null, arguments);
  };
  var _0x5084e6 = _0x5c0d54.dynCall_iiiiiififiii = function () {
    return (_0x5084e6 = _0x5c0d54.dynCall_iiiiiififiii = _0x5c0d54.asm.Fo).apply(null, arguments);
  };
  var _0x402749 = _0x5c0d54.dynCall_iiiiifiiifiii = function () {
    return (_0x402749 = _0x5c0d54.dynCall_iiiiifiiifiii = _0x5c0d54.asm.Go).apply(null, arguments);
  };
  var _0x3ed9e8 = _0x5c0d54.dynCall_iiiiiifiifiii = function () {
    return (_0x3ed9e8 = _0x5c0d54.dynCall_iiiiiifiifiii = _0x5c0d54.asm.Ho).apply(null, arguments);
  };
  var _0x1908e8 = _0x5c0d54.dynCall_iiiiiifiiifiii = function () {
    return (_0x1908e8 = _0x5c0d54.dynCall_iiiiiifiiifiii = _0x5c0d54.asm.Io).apply(null, arguments);
  };
  var _0x178581 = _0x5c0d54.dynCall_iiifiifiii = function () {
    return (_0x178581 = _0x5c0d54.dynCall_iiifiifiii = _0x5c0d54.asm.Jo).apply(null, arguments);
  };
  var _0x4a3798 = _0x5c0d54.dynCall_iiifififiii = function () {
    return (_0x4a3798 = _0x5c0d54.dynCall_iiifififiii = _0x5c0d54.asm.Ko).apply(null, arguments);
  };
  var _0x272871 = _0x5c0d54.dynCall_iiifiiifiii = function () {
    return (_0x272871 = _0x5c0d54.dynCall_iiifiiifiii = _0x5c0d54.asm.Lo).apply(null, arguments);
  };
  var _0x17f3f4 = _0x5c0d54.dynCall_iiififiifiii = function () {
    return (_0x17f3f4 = _0x5c0d54.dynCall_iiififiifiii = _0x5c0d54.asm.Mo).apply(null, arguments);
  };
  var _0x529be1 = _0x5c0d54.dynCall_iiifiififiii = function () {
    return (_0x529be1 = _0x5c0d54.dynCall_iiifiififiii = _0x5c0d54.asm.No).apply(null, arguments);
  };
  var _0x168c71 = _0x5c0d54.dynCall_iiififiiifiii = function () {
    return (_0x168c71 = _0x5c0d54.dynCall_iiififiiifiii = _0x5c0d54.asm.Oo).apply(null, arguments);
  };
  var _0x2830d4 = _0x5c0d54.dynCall_iiifiifiifiii = function () {
    return (_0x2830d4 = _0x5c0d54.dynCall_iiifiifiifiii = _0x5c0d54.asm.Po).apply(null, arguments);
  };
  var _0x3128ee = _0x5c0d54.dynCall_iiifiifiiifiii = function () {
    return (_0x3128ee = _0x5c0d54.dynCall_iiifiifiiifiii = _0x5c0d54.asm.Qo).apply(null, arguments);
  };
  var _0x378014 = _0x5c0d54.dynCall_iiififiii = function () {
    return (_0x378014 = _0x5c0d54.dynCall_iiififiii = _0x5c0d54.asm.Ro).apply(null, arguments);
  };
  var _0x4fdd21 = _0x5c0d54.dynCall_iififiii = function () {
    return (_0x4fdd21 = _0x5c0d54.dynCall_iififiii = _0x5c0d54.asm.So).apply(null, arguments);
  };
  var _0x51e044 = _0x5c0d54.dynCall_iifiifiii = function () {
    return (_0x51e044 = _0x5c0d54.dynCall_iifiifiii = _0x5c0d54.asm.To).apply(null, arguments);
  };
  var _0x35b5d = _0x5c0d54.dynCall_iifiiifiii = function () {
    return (_0x35b5d = _0x5c0d54.dynCall_iifiiifiii = _0x5c0d54.asm.Uo).apply(null, arguments);
  };
  var _0x1a8886 = _0x5c0d54.dynCall_iiifiiiifiii = function () {
    return (_0x1a8886 = _0x5c0d54.dynCall_iiifiiiifiii = _0x5c0d54.asm.Vo).apply(null, arguments);
  };
  var _0x44a789 = _0x5c0d54.dynCall_iifiiiifiii = function () {
    return (_0x44a789 = _0x5c0d54.dynCall_iifiiiifiii = _0x5c0d54.asm.Wo).apply(null, arguments);
  };
  var _0x55c492 = _0x5c0d54.dynCall_iiiififiii = function () {
    return (_0x55c492 = _0x5c0d54.dynCall_iiiififiii = _0x5c0d54.asm.Xo).apply(null, arguments);
  };
  var _0x425c85 = _0x5c0d54.dynCall_iiiifiifiii = function () {
    return (_0x425c85 = _0x5c0d54.dynCall_iiiifiifiii = _0x5c0d54.asm.Yo).apply(null, arguments);
  };
  var _0x5c8b3c = _0x5c0d54.dynCall_iiiifiiifiii = function () {
    return (_0x5c8b3c = _0x5c0d54.dynCall_iiiifiiifiii = _0x5c0d54.asm.Zo).apply(null, arguments);
  };
  var _0x4dd05b = _0x5c0d54.dynCall_iifififiii = function () {
    return (_0x4dd05b = _0x5c0d54.dynCall_iifififiii = _0x5c0d54.asm._o).apply(null, arguments);
  };
  var _0x308e7b = _0x5c0d54.dynCall_iififiifiii = function () {
    return (_0x308e7b = _0x5c0d54.dynCall_iififiifiii = _0x5c0d54.asm.$o).apply(null, arguments);
  };
  var _0xd469cf = _0x5c0d54.dynCall_iififiiifiii = function () {
    return (_0xd469cf = _0x5c0d54.dynCall_iififiiifiii = _0x5c0d54.asm.ap).apply(null, arguments);
  };
  var _0x5e743c = _0x5c0d54.dynCall_iifiififiii = function () {
    return (_0x5e743c = _0x5c0d54.dynCall_iifiififiii = _0x5c0d54.asm.bp).apply(null, arguments);
  };
  var _0x474fa6 = _0x5c0d54.dynCall_iifiifiifiii = function () {
    return (_0x474fa6 = _0x5c0d54.dynCall_iifiifiifiii = _0x5c0d54.asm.cp).apply(null, arguments);
  };
  var _0x465fc2 = _0x5c0d54.dynCall_iifiifiiifiii = function () {
    return (_0x465fc2 = _0x5c0d54.dynCall_iifiifiiifiii = _0x5c0d54.asm.dp).apply(null, arguments);
  };
  var _0x53a14d = _0x5c0d54.dynCall_iiffifiii = function () {
    return (_0x53a14d = _0x5c0d54.dynCall_iiffifiii = _0x5c0d54.asm.ep).apply(null, arguments);
  };
  var _0x26f7a8 = _0x5c0d54.dynCall_iiffiifiii = function () {
    return (_0x26f7a8 = _0x5c0d54.dynCall_iiffiifiii = _0x5c0d54.asm.fp).apply(null, arguments);
  };
  var _0x170f9e = _0x5c0d54.dynCall_iiffiiifiii = function () {
    return (_0x170f9e = _0x5c0d54.dynCall_iiffiiifiii = _0x5c0d54.asm.gp).apply(null, arguments);
  };
  var _0x441908 = _0x5c0d54.dynCall_viiifiifiii = function () {
    return (_0x441908 = _0x5c0d54.dynCall_viiifiifiii = _0x5c0d54.asm.hp).apply(null, arguments);
  };
  var _0x2f650e = _0x5c0d54.dynCall_viiifififiii = function () {
    return (_0x2f650e = _0x5c0d54.dynCall_viiifififiii = _0x5c0d54.asm.ip).apply(null, arguments);
  };
  var _0x22f6b6 = _0x5c0d54.dynCall_viiififiifiii = function () {
    return (_0x22f6b6 = _0x5c0d54.dynCall_viiififiifiii = _0x5c0d54.asm.jp).apply(null, arguments);
  };
  var _0x308ccb = _0x5c0d54.dynCall_viiififififiii = function () {
    return (_0x308ccb = _0x5c0d54.dynCall_viiififififiii = _0x5c0d54.asm.kp).apply(null, arguments);
  };
  var _0xde95ab = _0x5c0d54.dynCall_viiifififfifiii = function () {
    return (_0xde95ab = _0x5c0d54.dynCall_viiifififfifiii = _0x5c0d54.asm.lp).apply(null, arguments);
  };
  var _0x54074d = _0x5c0d54.dynCall_iiifiiii = function () {
    return (_0x54074d = _0x5c0d54.dynCall_iiifiiii = _0x5c0d54.asm.mp).apply(null, arguments);
  };
  var _0x1ba238 = _0x5c0d54.dynCall_iiifiiififiii = function () {
    return (_0x1ba238 = _0x5c0d54.dynCall_iiifiiififiii = _0x5c0d54.asm.np).apply(null, arguments);
  };
  var _0x14721c = _0x5c0d54.dynCall_iiififififiii = function () {
    return (_0x14721c = _0x5c0d54.dynCall_iiififififiii = _0x5c0d54.asm.op).apply(null, arguments);
  };
  var _0x5718d8 = _0x5c0d54.dynCall_iiifififfifiii = function () {
    return (_0x5718d8 = _0x5c0d54.dynCall_iiifififfifiii = _0x5c0d54.asm.pp).apply(null, arguments);
  };
  var _0x124dfa = _0x5c0d54.dynCall_iiifiifififiii = function () {
    return (_0x124dfa = _0x5c0d54.dynCall_iiifiifififiii = _0x5c0d54.asm.qp).apply(null, arguments);
  };
  var _0x5b0bca = _0x5c0d54.dynCall_iiifiififfifiii = function () {
    return (_0x5b0bca = _0x5c0d54.dynCall_iiifiififfifiii = _0x5c0d54.asm.rp).apply(null, arguments);
  };
  var _0x5bc0aa = _0x5c0d54.dynCall_viiiifiifiii = function () {
    return (_0x5bc0aa = _0x5c0d54.dynCall_viiiifiifiii = _0x5c0d54.asm.sp).apply(null, arguments);
  };
  var _0x1e2397 = _0x5c0d54.dynCall_viiiifififiii = function () {
    return (_0x1e2397 = _0x5c0d54.dynCall_viiiifififiii = _0x5c0d54.asm.tp).apply(null, arguments);
  };
  var _0x46107a = _0x5c0d54.dynCall_viiiififiifiii = function () {
    return (_0x46107a = _0x5c0d54.dynCall_viiiififiifiii = _0x5c0d54.asm.up).apply(null, arguments);
  };
  var _0x2dcf68 = _0x5c0d54.dynCall_viiiififififiii = function () {
    return (_0x2dcf68 = _0x5c0d54.dynCall_viiiififififiii = _0x5c0d54.asm.vp).apply(null, arguments);
  };
  var _0x51c24f = _0x5c0d54.dynCall_viiiifififfifiii = function () {
    return (_0x51c24f = _0x5c0d54.dynCall_viiiifififfifiii = _0x5c0d54.asm.wp).apply(null, arguments);
  };
  var _0x38e9eb = _0x5c0d54.dynCall_iiiifiiiifiii = function () {
    return (_0x38e9eb = _0x5c0d54.dynCall_iiiifiiiifiii = _0x5c0d54.asm.xp).apply(null, arguments);
  };
  var _0x16528a = _0x5c0d54.dynCall_iiiifiiififiii = function () {
    return (_0x16528a = _0x5c0d54.dynCall_iiiifiiififiii = _0x5c0d54.asm.yp).apply(null, arguments);
  };
  var _0x24d96e = _0x5c0d54.dynCall_iiiifififiii = function () {
    return (_0x24d96e = _0x5c0d54.dynCall_iiiifififiii = _0x5c0d54.asm.zp).apply(null, arguments);
  };
  var _0x48a38f = _0x5c0d54.dynCall_iiiififiifiii = function () {
    return (_0x48a38f = _0x5c0d54.dynCall_iiiififiifiii = _0x5c0d54.asm.Ap).apply(null, arguments);
  };
  var _0x20761f = _0x5c0d54.dynCall_iiiififififiii = function () {
    return (_0x20761f = _0x5c0d54.dynCall_iiiififififiii = _0x5c0d54.asm.Bp).apply(null, arguments);
  };
  var _0x57dba9 = _0x5c0d54.dynCall_iiiifififfifiii = function () {
    return (_0x57dba9 = _0x5c0d54.dynCall_iiiifififfifiii = _0x5c0d54.asm.Cp).apply(null, arguments);
  };
  var _0x47f1b4 = _0x5c0d54.dynCall_iiiifiififiii = function () {
    return (_0x47f1b4 = _0x5c0d54.dynCall_iiiifiififiii = _0x5c0d54.asm.Dp).apply(null, arguments);
  };
  var _0x3e2466 = _0x5c0d54.dynCall_iiiifiifiifiii = function () {
    return (_0x3e2466 = _0x5c0d54.dynCall_iiiifiifiifiii = _0x5c0d54.asm.Ep).apply(null, arguments);
  };
  var _0x434267 = _0x5c0d54.dynCall_iiiifiifififiii = function () {
    return (_0x434267 = _0x5c0d54.dynCall_iiiifiifififiii = _0x5c0d54.asm.Fp).apply(null, arguments);
  };
  var _0x386d0f = _0x5c0d54.dynCall_iiiifiififfifiii = function () {
    return (_0x386d0f = _0x5c0d54.dynCall_iiiifiififfifiii = _0x5c0d54.asm.Gp).apply(null, arguments);
  };
  var _0x96d4a9 = _0x5c0d54.dynCall_viifiifiii = function () {
    return (_0x96d4a9 = _0x5c0d54.dynCall_viifiifiii = _0x5c0d54.asm.Hp).apply(null, arguments);
  };
  var _0x4d24e2 = _0x5c0d54.dynCall_viifififiii = function () {
    return (_0x4d24e2 = _0x5c0d54.dynCall_viifififiii = _0x5c0d54.asm.Ip).apply(null, arguments);
  };
  var _0xa1e2a7 = _0x5c0d54.dynCall_viififiifiii = function () {
    return (_0xa1e2a7 = _0x5c0d54.dynCall_viififiifiii = _0x5c0d54.asm.Jp).apply(null, arguments);
  };
  var _0x3bae91 = _0x5c0d54.dynCall_viififififiii = function () {
    return (_0x3bae91 = _0x5c0d54.dynCall_viififififiii = _0x5c0d54.asm.Kp).apply(null, arguments);
  };
  var _0x3c68c7 = _0x5c0d54.dynCall_viifififfifiii = function () {
    return (_0x3c68c7 = _0x5c0d54.dynCall_viifififfifiii = _0x5c0d54.asm.Lp).apply(null, arguments);
  };
  var _0x3839ac = _0x5c0d54.dynCall_iifiiififiii = function () {
    return (_0x3839ac = _0x5c0d54.dynCall_iifiiififiii = _0x5c0d54.asm.Mp).apply(null, arguments);
  };
  var _0x26ae3f = _0x5c0d54.dynCall_iififififiii = function () {
    return (_0x26ae3f = _0x5c0d54.dynCall_iififififiii = _0x5c0d54.asm.Np).apply(null, arguments);
  };
  var _0x3a4dcf = _0x5c0d54.dynCall_iifififfifiii = function () {
    return (_0x3a4dcf = _0x5c0d54.dynCall_iifififfifiii = _0x5c0d54.asm.Op).apply(null, arguments);
  };
  var _0x24f73e = _0x5c0d54.dynCall_iifiifififiii = function () {
    return (_0x24f73e = _0x5c0d54.dynCall_iifiifififiii = _0x5c0d54.asm.Pp).apply(null, arguments);
  };
  var _0x3fdd54 = _0x5c0d54.dynCall_iifiififfifiii = function () {
    return (_0x3fdd54 = _0x5c0d54.dynCall_iifiififfifiii = _0x5c0d54.asm.Qp).apply(null, arguments);
  };
  var _0x31f31c = _0x5c0d54.dynCall_viiiifiii = function () {
    return (_0x31f31c = _0x5c0d54.dynCall_viiiifiii = _0x5c0d54.asm.Rp).apply(null, arguments);
  };
  var _0x2bc4d4 = _0x5c0d54.dynCall_viiiiifiii = function () {
    return (_0x2bc4d4 = _0x5c0d54.dynCall_viiiiifiii = _0x5c0d54.asm.Sp).apply(null, arguments);
  };
  var _0x562bb8 = _0x5c0d54.dynCall_viiiififiii = function () {
    return (_0x562bb8 = _0x5c0d54.dynCall_viiiififiii = _0x5c0d54.asm.Tp).apply(null, arguments);
  };
  var _0x26ed56 = _0x5c0d54.dynCall_viiiiffifiii = function () {
    return (_0x26ed56 = _0x5c0d54.dynCall_viiiiffifiii = _0x5c0d54.asm.Up).apply(null, arguments);
  };
  var _0x59513d = _0x5c0d54.dynCall_iiiiffifiii = function () {
    return (_0x59513d = _0x5c0d54.dynCall_iiiiffifiii = _0x5c0d54.asm.Vp).apply(null, arguments);
  };
  var _0x287f19 = _0x5c0d54.dynCall_iiiiiffifiii = function () {
    return (_0x287f19 = _0x5c0d54.dynCall_iiiiiffifiii = _0x5c0d54.asm.Wp).apply(null, arguments);
  };
  var _0x27fc4c = _0x5c0d54.dynCall_iiififfifiii = function () {
    return (_0x27fc4c = _0x5c0d54.dynCall_iiififfifiii = _0x5c0d54.asm.Xp).apply(null, arguments);
  };
  var _0x4399bb = _0x5c0d54.dynCall_iiifiiffifiii = function () {
    return (_0x4399bb = _0x5c0d54.dynCall_iiifiiffifiii = _0x5c0d54.asm.Yp).apply(null, arguments);
  };
  var _0x37a578 = _0x5c0d54.dynCall_iiiififfifiii = function () {
    return (_0x37a578 = _0x5c0d54.dynCall_iiiififfifiii = _0x5c0d54.asm.Zp).apply(null, arguments);
  };
  var _0x560654 = _0x5c0d54.dynCall_iiiifiiffifiii = function () {
    return (_0x560654 = _0x5c0d54.dynCall_iiiifiiffifiii = _0x5c0d54.asm._p).apply(null, arguments);
  };
  var _0x2ec3c3 = _0x5c0d54.dynCall_iififfifiii = function () {
    return (_0x2ec3c3 = _0x5c0d54.dynCall_iififfifiii = _0x5c0d54.asm.$p).apply(null, arguments);
  };
  var _0x4daa14 = _0x5c0d54.dynCall_iifiiffifiii = function () {
    return (_0x4daa14 = _0x5c0d54.dynCall_iifiiffifiii = _0x5c0d54.asm.aq).apply(null, arguments);
  };
  var _0xc70851 = _0x5c0d54.dynCall_iiiffifiii = function () {
    return (_0xc70851 = _0x5c0d54.dynCall_iiiffifiii = _0x5c0d54.asm.bq).apply(null, arguments);
  };
  var _0x5de000 = _0x5c0d54.dynCall_iiifffifiii = function () {
    return (_0x5de000 = _0x5c0d54.dynCall_iiifffifiii = _0x5c0d54.asm.cq).apply(null, arguments);
  };
  var _0x46eb3b = _0x5c0d54.dynCall_iiiifffifiii = function () {
    return (_0x46eb3b = _0x5c0d54.dynCall_iiiifffifiii = _0x5c0d54.asm.dq).apply(null, arguments);
  };
  var _0x3cb189 = _0x5c0d54.dynCall_viiififiii = function () {
    return (_0x3cb189 = _0x5c0d54.dynCall_viiififiii = _0x5c0d54.asm.eq).apply(null, arguments);
  };
  var _0x376694 = _0x5c0d54.dynCall_viiififfifiii = function () {
    return (_0x376694 = _0x5c0d54.dynCall_viiififfifiii = _0x5c0d54.asm.fq).apply(null, arguments);
  };
  var _0x591852 = _0x5c0d54.dynCall_vifiiii = function () {
    return (_0x591852 = _0x5c0d54.dynCall_vifiiii = _0x5c0d54.asm.gq).apply(null, arguments);
  };
  var _0x2281b6 = _0x5c0d54.dynCall_iiiiiffi = function () {
    return (_0x2281b6 = _0x5c0d54.dynCall_iiiiiffi = _0x5c0d54.asm.hq).apply(null, arguments);
  };
  var _0x4d6260 = _0x5c0d54.dynCall_viiiiiiifiii = function () {
    return (_0x4d6260 = _0x5c0d54.dynCall_viiiiiiifiii = _0x5c0d54.asm.iq).apply(null, arguments);
  };
  var _0x271ccd = _0x5c0d54.dynCall_fiiifii = function () {
    return (_0x271ccd = _0x5c0d54.dynCall_fiiifii = _0x5c0d54.asm.jq).apply(null, arguments);
  };
  var _0xff5c72 = _0x5c0d54.dynCall_fifii = function () {
    return (_0xff5c72 = _0x5c0d54.dynCall_fifii = _0x5c0d54.asm.kq).apply(null, arguments);
  };
  var _0x1a9fe5 = _0x5c0d54.dynCall_fiffi = function () {
    return (_0x1a9fe5 = _0x5c0d54.dynCall_fiffi = _0x5c0d54.asm.lq).apply(null, arguments);
  };
  var _0x31a30d = _0x5c0d54.dynCall_iiiffii = function () {
    return (_0x31a30d = _0x5c0d54.dynCall_iiiffii = _0x5c0d54.asm.mq).apply(null, arguments);
  };
  var _0x340c2b = _0x5c0d54.dynCall_fifiii = function () {
    return (_0x340c2b = _0x5c0d54.dynCall_fifiii = _0x5c0d54.asm.nq).apply(null, arguments);
  };
  var _0x2728b8 = _0x5c0d54.dynCall_viiiiffii = function () {
    return (_0x2728b8 = _0x5c0d54.dynCall_viiiiffii = _0x5c0d54.asm.oq).apply(null, arguments);
  };
  var _0x1ef24b = _0x5c0d54.dynCall_viiiiifffi = function () {
    return (_0x1ef24b = _0x5c0d54.dynCall_viiiiifffi = _0x5c0d54.asm.pq).apply(null, arguments);
  };
  var _0x41c4e8 = _0x5c0d54.dynCall_viiifffi = function () {
    return (_0x41c4e8 = _0x5c0d54.dynCall_viiifffi = _0x5c0d54.asm.qq).apply(null, arguments);
  };
  var _0x3c7f7f = _0x5c0d54.dynCall_fifiiiii = function () {
    return (_0x3c7f7f = _0x5c0d54.dynCall_fifiiiii = _0x5c0d54.asm.rq).apply(null, arguments);
  };
  var _0x21f676 = _0x5c0d54.dynCall_viifiii = function () {
    return (_0x21f676 = _0x5c0d54.dynCall_viifiii = _0x5c0d54.asm.sq).apply(null, arguments);
  };
  var _0x9cdc2c = _0x5c0d54.dynCall_vifiiiii = function () {
    return (_0x9cdc2c = _0x5c0d54.dynCall_vifiiiii = _0x5c0d54.asm.tq).apply(null, arguments);
  };
  var _0x14310a = _0x5c0d54.dynCall_viffiifffiii = function () {
    return (_0x14310a = _0x5c0d54.dynCall_viffiifffiii = _0x5c0d54.asm.uq).apply(null, arguments);
  };
  var _0x2b7efb = _0x5c0d54.dynCall_viiiiiifi = function () {
    return (_0x2b7efb = _0x5c0d54.dynCall_viiiiiifi = _0x5c0d54.asm.vq).apply(null, arguments);
  };
  var _0x46682f = _0x5c0d54.dynCall_viiiiffi = function () {
    return (_0x46682f = _0x5c0d54.dynCall_viiiiffi = _0x5c0d54.asm.wq).apply(null, arguments);
  };
  var _0x29a6b3 = _0x5c0d54.dynCall_fifffi = function () {
    return (_0x29a6b3 = _0x5c0d54.dynCall_fifffi = _0x5c0d54.asm.xq).apply(null, arguments);
  };
  var _0x3a0453 = _0x5c0d54.dynCall_viffiiiii = function () {
    return (_0x3a0453 = _0x5c0d54.dynCall_viffiiiii = _0x5c0d54.asm.yq).apply(null, arguments);
  };
  var _0x440826 = _0x5c0d54.dynCall_vifiii = function () {
    return (_0x440826 = _0x5c0d54.dynCall_vifiii = _0x5c0d54.asm.zq).apply(null, arguments);
  };
  var _0x45a5f0 = _0x5c0d54.dynCall_iifiiii = function () {
    return (_0x45a5f0 = _0x5c0d54.dynCall_iifiiii = _0x5c0d54.asm.Aq).apply(null, arguments);
  };
  var _0x56dbfa = _0x5c0d54.dynCall_viddi = function () {
    return (_0x56dbfa = _0x5c0d54.dynCall_viddi = _0x5c0d54.asm.Bq).apply(null, arguments);
  };
  var _0x5423e7 = _0x5c0d54.dynCall_vijji = function () {
    return (_0x5423e7 = _0x5c0d54.dynCall_vijji = _0x5c0d54.asm.Cq).apply(null, arguments);
  };
  var _0x156187 = _0x5c0d54.dynCall_vijjjji = function () {
    return (_0x156187 = _0x5c0d54.dynCall_vijjjji = _0x5c0d54.asm.Dq).apply(null, arguments);
  };
  var _0x17f803 = _0x5c0d54.dynCall_iijjjji = function () {
    return (_0x17f803 = _0x5c0d54.dynCall_iijjjji = _0x5c0d54.asm.Eq).apply(null, arguments);
  };
  var _0x299941 = _0x5c0d54.dynCall_iiidi = function () {
    return (_0x299941 = _0x5c0d54.dynCall_iiidi = _0x5c0d54.asm.Fq).apply(null, arguments);
  };
  var _0xb47e8 = _0x5c0d54.dynCall_iijjjjiii = function () {
    return (_0xb47e8 = _0x5c0d54.dynCall_iijjjjiii = _0x5c0d54.asm.Gq).apply(null, arguments);
  };
  var _0x31cea0 = _0x5c0d54.dynCall_iiiidi = function () {
    return (_0x31cea0 = _0x5c0d54.dynCall_iiiidi = _0x5c0d54.asm.Hq).apply(null, arguments);
  };
  var _0x5cadb4 = _0x5c0d54.dynCall_viiidi = function () {
    return (_0x5cadb4 = _0x5c0d54.dynCall_viiidi = _0x5c0d54.asm.Iq).apply(null, arguments);
  };
  var _0x3fcbe1 = _0x5c0d54.dynCall_ijiii = function () {
    return (_0x3fcbe1 = _0x5c0d54.dynCall_ijiii = _0x5c0d54.asm.Jq).apply(null, arguments);
  };
  var _0x268a4e = _0x5c0d54.dynCall_ifiiii = function () {
    return (_0x268a4e = _0x5c0d54.dynCall_ifiiii = _0x5c0d54.asm.Kq).apply(null, arguments);
  };
  var _0x8cd4f9 = _0x5c0d54.dynCall_idiiiii = function () {
    return (_0x8cd4f9 = _0x5c0d54.dynCall_idiiiii = _0x5c0d54.asm.Lq).apply(null, arguments);
  };
  var _0xc04997 = _0x5c0d54.dynCall_idiiii = function () {
    return (_0xc04997 = _0x5c0d54.dynCall_idiiii = _0x5c0d54.asm.Mq).apply(null, arguments);
  };
  var _0x3757b6 = _0x5c0d54.dynCall_idii = function () {
    return (_0x3757b6 = _0x5c0d54.dynCall_idii = _0x5c0d54.asm.Nq).apply(null, arguments);
  };
  var _0x5d83f7 = _0x5c0d54.dynCall_ijii = function () {
    return (_0x5d83f7 = _0x5c0d54.dynCall_ijii = _0x5c0d54.asm.Oq).apply(null, arguments);
  };
  var _0x482b08 = _0x5c0d54.dynCall_iidii = function () {
    return (_0x482b08 = _0x5c0d54.dynCall_iidii = _0x5c0d54.asm.Pq).apply(null, arguments);
  };
  var _0x5f4bc9 = _0x5c0d54.dynCall_iidiii = function () {
    return (_0x5f4bc9 = _0x5c0d54.dynCall_iidiii = _0x5c0d54.asm.Qq).apply(null, arguments);
  };
  var _0x28f0e4 = _0x5c0d54.dynCall_iifiii = function () {
    return (_0x28f0e4 = _0x5c0d54.dynCall_iifiii = _0x5c0d54.asm.Rq).apply(null, arguments);
  };
  var _0xe98e91 = _0x5c0d54.dynCall_iiijiiii = function () {
    return (_0xe98e91 = _0x5c0d54.dynCall_iiijiiii = _0x5c0d54.asm.Sq).apply(null, arguments);
  };
  var _0x20d8c2 = _0x5c0d54.dynCall_vjiiii = function () {
    return (_0x20d8c2 = _0x5c0d54.dynCall_vjiiii = _0x5c0d54.asm.Tq).apply(null, arguments);
  };
  var _0x2e5748 = _0x5c0d54.dynCall_iddi = function () {
    return (_0x2e5748 = _0x5c0d54.dynCall_iddi = _0x5c0d54.asm.Uq).apply(null, arguments);
  };
  var _0x373166 = _0x5c0d54.dynCall_viiiffdi = function () {
    return (_0x373166 = _0x5c0d54.dynCall_viiiffdi = _0x5c0d54.asm.Vq).apply(null, arguments);
  };
  var _0x24b7c5 = _0x5c0d54.dynCall_viiiiiiifii = function () {
    return (_0x24b7c5 = _0x5c0d54.dynCall_viiiiiiifii = _0x5c0d54.asm.Wq).apply(null, arguments);
  };
  var _0x38a79e = _0x5c0d54.dynCall_viiffiii = function () {
    return (_0x38a79e = _0x5c0d54.dynCall_viiffiii = _0x5c0d54.asm.Xq).apply(null, arguments);
  };
  var _0x27e061 = _0x5c0d54.dynCall_viiiiffiii = function () {
    return (_0x27e061 = _0x5c0d54.dynCall_viiiiffiii = _0x5c0d54.asm.Yq).apply(null, arguments);
  };
  var _0x17601c = _0x5c0d54.dynCall_viiiffffiiifii = function () {
    return (_0x17601c = _0x5c0d54.dynCall_viiiffffiiifii = _0x5c0d54.asm.Zq).apply(null, arguments);
  };
  var _0x3719e7 = _0x5c0d54.dynCall_fiffiii = function () {
    return (_0x3719e7 = _0x5c0d54.dynCall_fiffiii = _0x5c0d54.asm._q).apply(null, arguments);
  };
  var _0x4c04e3 = _0x5c0d54.dynCall_fififiii = function () {
    return (_0x4c04e3 = _0x5c0d54.dynCall_fififiii = _0x5c0d54.asm.$q).apply(null, arguments);
  };
  var _0x636ef7 = _0x5c0d54.dynCall_viiffffiii = function () {
    return (_0x636ef7 = _0x5c0d54.dynCall_viiffffiii = _0x5c0d54.asm.ar).apply(null, arguments);
  };
  var _0x111b32 = _0x5c0d54.dynCall_viiffffiifi = function () {
    return (_0x111b32 = _0x5c0d54.dynCall_viiffffiifi = _0x5c0d54.asm.br).apply(null, arguments);
  };
  var _0x48de04 = _0x5c0d54.dynCall_viiffffiiifii = function () {
    return (_0x48de04 = _0x5c0d54.dynCall_viiffffiiifii = _0x5c0d54.asm.cr).apply(null, arguments);
  };
  var _0x2697c4 = _0x5c0d54.dynCall_vijifffi = function () {
    return (_0x2697c4 = _0x5c0d54.dynCall_vijifffi = _0x5c0d54.asm.dr).apply(null, arguments);
  };
  var _0x5656ba = _0x5c0d54.dynCall_viiiiiiiffffiii = function () {
    return (_0x5656ba = _0x5c0d54.dynCall_viiiiiiiffffiii = _0x5c0d54.asm.er).apply(null, arguments);
  };
  var _0x4d089c = _0x5c0d54.dynCall_viffffiiifii = function () {
    return (_0x4d089c = _0x5c0d54.dynCall_viffffiiifii = _0x5c0d54.asm.fr).apply(null, arguments);
  };
  var _0x27a972 = _0x5c0d54.dynCall_viiffffi = function () {
    return (_0x27a972 = _0x5c0d54.dynCall_viiffffi = _0x5c0d54.asm.gr).apply(null, arguments);
  };
  var _0x127321 = _0x5c0d54.dynCall_viiffffii = function () {
    return (_0x127321 = _0x5c0d54.dynCall_viiffffii = _0x5c0d54.asm.hr).apply(null, arguments);
  };
  var _0x4d0982 = _0x5c0d54.dynCall_viifffffii = function () {
    return (_0x4d0982 = _0x5c0d54.dynCall_viifffffii = _0x5c0d54.asm.ir).apply(null, arguments);
  };
  var _0x854b0b = _0x5c0d54.dynCall_ffffffiiifii = function () {
    return (_0x854b0b = _0x5c0d54.dynCall_ffffffiiifii = _0x5c0d54.asm.jr).apply(null, arguments);
  };
  var _0x52bcc4 = _0x5c0d54.dynCall_fffiiifii = function () {
    return (_0x52bcc4 = _0x5c0d54.dynCall_fffiiifii = _0x5c0d54.asm.kr).apply(null, arguments);
  };
  var _0x58f89d = _0x5c0d54.dynCall_ffifii = function () {
    return (_0x58f89d = _0x5c0d54.dynCall_ffifii = _0x5c0d54.asm.lr).apply(null, arguments);
  };
  var _0x380154 = _0x5c0d54.dynCall_ddi = function () {
    return (_0x380154 = _0x5c0d54.dynCall_ddi = _0x5c0d54.asm.mr).apply(null, arguments);
  };
  var _0x35bc19 = _0x5c0d54.dynCall_ififi = function () {
    return (_0x35bc19 = _0x5c0d54.dynCall_ififi = _0x5c0d54.asm.nr).apply(null, arguments);
  };
  var _0x1b8b00 = _0x5c0d54.dynCall_jjjji = function () {
    return (_0x1b8b00 = _0x5c0d54.dynCall_jjjji = _0x5c0d54.asm.or).apply(null, arguments);
  };
  var _0x4dc732 = _0x5c0d54.dynCall_ddddi = function () {
    return (_0x4dc732 = _0x5c0d54.dynCall_ddddi = _0x5c0d54.asm.pr).apply(null, arguments);
  };
  var _0x9b80a7 = _0x5c0d54.dynCall_vififi = function () {
    return (_0x9b80a7 = _0x5c0d54.dynCall_vififi = _0x5c0d54.asm.qr).apply(null, arguments);
  };
  var _0x5bc407 = _0x5c0d54.dynCall_viffffffffi = function () {
    return (_0x5bc407 = _0x5c0d54.dynCall_viffffffffi = _0x5c0d54.asm.rr).apply(null, arguments);
  };
  var _0x47723d = _0x5c0d54.dynCall_jiiiiiiii = function () {
    return (_0x47723d = _0x5c0d54.dynCall_jiiiiiiii = _0x5c0d54.asm.sr).apply(null, arguments);
  };
  var _0x5b4b9a = _0x5c0d54.dynCall_viddddi = function () {
    return (_0x5b4b9a = _0x5c0d54.dynCall_viddddi = _0x5c0d54.asm.tr).apply(null, arguments);
  };
  var _0x5c3ddd = _0x5c0d54.dynCall_ffffffffi = function () {
    return (_0x5c3ddd = _0x5c0d54.dynCall_ffffffffi = _0x5c0d54.asm.ur).apply(null, arguments);
  };
  var _0x46608b = _0x5c0d54.dynCall_ddddddddi = function () {
    return (_0x46608b = _0x5c0d54.dynCall_ddddddddi = _0x5c0d54.asm.vr).apply(null, arguments);
  };
  var _0x2537ea = _0x5c0d54.dynCall_vfiii = function () {
    return (_0x2537ea = _0x5c0d54.dynCall_vfiii = _0x5c0d54.asm.wr).apply(null, arguments);
  };
  var _0x7c871 = _0x5c0d54.dynCall_iiiiidiii = function () {
    return (_0x7c871 = _0x5c0d54.dynCall_iiiiidiii = _0x5c0d54.asm.xr).apply(null, arguments);
  };
  var _0x4013b5 = _0x5c0d54.dynCall_viijji = function () {
    return (_0x4013b5 = _0x5c0d54.dynCall_viijji = _0x5c0d54.asm.yr).apply(null, arguments);
  };
  var _0xc00f7e = _0x5c0d54.dynCall_viiijji = function () {
    return (_0xc00f7e = _0x5c0d54.dynCall_viiijji = _0x5c0d54.asm.zr).apply(null, arguments);
  };
  var _0x4b4498 = _0x5c0d54.dynCall_iijjjii = function () {
    return (_0x4b4498 = _0x5c0d54.dynCall_iijjjii = _0x5c0d54.asm.Ar).apply(null, arguments);
  };
  var _0x39ac83 = _0x5c0d54.dynCall_iiijjjii = function () {
    return (_0x39ac83 = _0x5c0d54.dynCall_iiijjjii = _0x5c0d54.asm.Br).apply(null, arguments);
  };
  var _0x45ac06 = _0x5c0d54.dynCall_iiiijiiii = function () {
    return (_0x45ac06 = _0x5c0d54.dynCall_iiiijiiii = _0x5c0d54.asm.Cr).apply(null, arguments);
  };
  var _0x2d6921 = _0x5c0d54.dynCall_iiiiijiiii = function () {
    return (_0x2d6921 = _0x5c0d54.dynCall_iiiiijiiii = _0x5c0d54.asm.Dr).apply(null, arguments);
  };
  var _0x44e659 = _0x5c0d54.dynCall_iiiiiji = function () {
    return (_0x44e659 = _0x5c0d54.dynCall_iiiiiji = _0x5c0d54.asm.Er).apply(null, arguments);
  };
  var _0x2d8a41 = _0x5c0d54.dynCall_iijiiiii = function () {
    return (_0x2d8a41 = _0x5c0d54.dynCall_iijiiiii = _0x5c0d54.asm.Fr).apply(null, arguments);
  };
  var _0x31bfc8 = _0x5c0d54.dynCall_iiijiiiii = function () {
    return (_0x31bfc8 = _0x5c0d54.dynCall_iiijiiiii = _0x5c0d54.asm.Gr).apply(null, arguments);
  };
  var _0x3dd06c = _0x5c0d54.dynCall_viiiiiiiifi = function () {
    return (_0x3dd06c = _0x5c0d54.dynCall_viiiiiiiifi = _0x5c0d54.asm.Hr).apply(null, arguments);
  };
  var _0x39e0d5 = _0x5c0d54.dynCall_iiiffffi = function () {
    return (_0x39e0d5 = _0x5c0d54.dynCall_iiiffffi = _0x5c0d54.asm.Ir).apply(null, arguments);
  };
  var _0x5a884c = _0x5c0d54.dynCall_viiijii = function () {
    return (_0x5a884c = _0x5c0d54.dynCall_viiijii = _0x5c0d54.asm.Jr).apply(null, arguments);
  };
  var _0x167cd3 = _0x5c0d54.dynCall_ijjiiii = function () {
    return (_0x167cd3 = _0x5c0d54.dynCall_ijjiiii = _0x5c0d54.asm.Kr).apply(null, arguments);
  };
  var _0x3e7c02 = _0x5c0d54.dynCall_vdiiiii = function () {
    return (_0x3e7c02 = _0x5c0d54.dynCall_vdiiiii = _0x5c0d54.asm.Lr).apply(null, arguments);
  };
  var _0x314471 = _0x5c0d54.dynCall_diiji = function () {
    return (_0x314471 = _0x5c0d54.dynCall_diiji = _0x5c0d54.asm.Mr).apply(null, arguments);
  };
  var _0x4736fd = _0x5c0d54.dynCall_vjiiiiiiii = function () {
    return (_0x4736fd = _0x5c0d54.dynCall_vjiiiiiiii = _0x5c0d54.asm.Nr).apply(null, arguments);
  };
  var _0x4911b4 = _0x5c0d54.dynCall_vjiiiiiii = function () {
    return (_0x4911b4 = _0x5c0d54.dynCall_vjiiiiiii = _0x5c0d54.asm.Or).apply(null, arguments);
  };
  var _0x13f9ab = _0x5c0d54.dynCall_jidi = function () {
    return (_0x13f9ab = _0x5c0d54.dynCall_jidi = _0x5c0d54.asm.Pr).apply(null, arguments);
  };
  var _0x5e31e8 = _0x5c0d54.dynCall_diji = function () {
    return (_0x5e31e8 = _0x5c0d54.dynCall_diji = _0x5c0d54.asm.Qr).apply(null, arguments);
  };
  var _0x5c8536 = _0x5c0d54.dynCall_fidi = function () {
    return (_0x5c8536 = _0x5c0d54.dynCall_fidi = _0x5c0d54.asm.Rr).apply(null, arguments);
  };
  var _0x49275e = _0x5c0d54.dynCall_ijjii = function () {
    return (_0x49275e = _0x5c0d54.dynCall_ijjii = _0x5c0d54.asm.Sr).apply(null, arguments);
  };
  var _0x5a12bb = _0x5c0d54.dynCall_viiijiiiiii = function () {
    return (_0x5a12bb = _0x5c0d54.dynCall_viiijiiiiii = _0x5c0d54.asm.Tr).apply(null, arguments);
  };
  var _0x559af6 = _0x5c0d54.dynCall_vidddi = function () {
    return (_0x559af6 = _0x5c0d54.dynCall_vidddi = _0x5c0d54.asm.Ur).apply(null, arguments);
  };
  var _0x59727f = _0x5c0d54.dynCall_iffffi = function () {
    return (_0x59727f = _0x5c0d54.dynCall_iffffi = _0x5c0d54.asm.Vr).apply(null, arguments);
  };
  var _0x3c9cfe = _0x5c0d54.dynCall_vfffi = function () {
    return (_0x3c9cfe = _0x5c0d54.dynCall_vfffi = _0x5c0d54.asm.Wr).apply(null, arguments);
  };
  var _0xfbf6dd = _0x5c0d54.dynCall_vffi = function () {
    return (_0xfbf6dd = _0x5c0d54.dynCall_vffi = _0x5c0d54.asm.Xr).apply(null, arguments);
  };
  var _0x190518 = _0x5c0d54.dynCall_vffffi = function () {
    return (_0x190518 = _0x5c0d54.dynCall_vffffi = _0x5c0d54.asm.Yr).apply(null, arguments);
  };
  var _0x3983ae = _0x5c0d54.dynCall_vffffffii = function () {
    return (_0x3983ae = _0x5c0d54.dynCall_vffffffii = _0x5c0d54.asm.Zr).apply(null, arguments);
  };
  var _0x40ee18 = _0x5c0d54.dynCall_vffffii = function () {
    return (_0x40ee18 = _0x5c0d54.dynCall_vffffii = _0x5c0d54.asm._r).apply(null, arguments);
  };
  var _0x36a9b = _0x5c0d54.dynCall_viiiifffi = function () {
    return (_0x36a9b = _0x5c0d54.dynCall_viiiifffi = _0x5c0d54.asm.$r).apply(null, arguments);
  };
  var _0x1c4ecf = _0x5c0d54.dynCall_fffifffi = function () {
    return (_0x1c4ecf = _0x5c0d54.dynCall_fffifffi = _0x5c0d54.asm.as).apply(null, arguments);
  };
  var _0x30f2dc = _0x5c0d54.dynCall_vfii = function () {
    return (_0x30f2dc = _0x5c0d54.dynCall_vfii = _0x5c0d54.asm.bs).apply(null, arguments);
  };
  var _0x3514ed = _0x5c0d54.dynCall_iiiifiiiii = function () {
    return (_0x3514ed = _0x5c0d54.dynCall_iiiifiiiii = _0x5c0d54.asm.cs).apply(null, arguments);
  };
  var _0x162ccc = _0x5c0d54.dynCall_iiiifiiii = function () {
    return (_0x162ccc = _0x5c0d54.dynCall_iiiifiiii = _0x5c0d54.asm.ds).apply(null, arguments);
  };
  var _0x36ab03 = _0x5c0d54.dynCall_vijjii = function () {
    return (_0x36ab03 = _0x5c0d54.dynCall_vijjii = _0x5c0d54.asm.es).apply(null, arguments);
  };
  var _0x33a6ff = _0x5c0d54.dynCall_viiiiiiifi = function () {
    return (_0x33a6ff = _0x5c0d54.dynCall_viiiiiiifi = _0x5c0d54.asm.fs).apply(null, arguments);
  };
  var _0x3dab8e = _0x5c0d54.dynCall_iiiiiiifiiii = function () {
    return (_0x3dab8e = _0x5c0d54.dynCall_iiiiiiifiiii = _0x5c0d54.asm.gs).apply(null, arguments);
  };
  var _0x52e12f = _0x5c0d54.dynCall_viiiififfi = function () {
    return (_0x52e12f = _0x5c0d54.dynCall_viiiififfi = _0x5c0d54.asm.hs).apply(null, arguments);
  };
  var _0x2a1b1e = _0x5c0d54.dynCall_viiiifiifi = function () {
    return (_0x2a1b1e = _0x5c0d54.dynCall_viiiifiifi = _0x5c0d54.asm.is).apply(null, arguments);
  };
  var _0x42e376 = _0x5c0d54.dynCall_viiiifiiii = function () {
    return (_0x42e376 = _0x5c0d54.dynCall_viiiifiiii = _0x5c0d54.asm.js).apply(null, arguments);
  };
  var _0x2fbd17 = _0x5c0d54.dynCall_viiiifiiiii = function () {
    return (_0x2fbd17 = _0x5c0d54.dynCall_viiiifiiiii = _0x5c0d54.asm.ks).apply(null, arguments);
  };
  var _0x4586d0 = _0x5c0d54.dynCall_viiiifiiiiiiii = function () {
    return (_0x4586d0 = _0x5c0d54.dynCall_viiiifiiiiiiii = _0x5c0d54.asm.ls).apply(null, arguments);
  };
  var _0xceabab = _0x5c0d54.dynCall_fifffiii = function () {
    return (_0xceabab = _0x5c0d54.dynCall_fifffiii = _0x5c0d54.asm.ms).apply(null, arguments);
  };
  var _0x317c54 = _0x5c0d54.dynCall_fiffffiiiiii = function () {
    return (_0x317c54 = _0x5c0d54.dynCall_fiffffiiiiii = _0x5c0d54.asm.ns).apply(null, arguments);
  };
  var _0x49ba50 = _0x5c0d54.dynCall_fiffffii = function () {
    return (_0x49ba50 = _0x5c0d54.dynCall_fiffffii = _0x5c0d54.asm.os).apply(null, arguments);
  };
  var _0x383ba5 = _0x5c0d54.dynCall_viiiiiffii = function () {
    return (_0x383ba5 = _0x5c0d54.dynCall_viiiiiffii = _0x5c0d54.asm.ps).apply(null, arguments);
  };
  var _0x539a36 = _0x5c0d54.dynCall_ffffii = function () {
    return (_0x539a36 = _0x5c0d54.dynCall_ffffii = _0x5c0d54.asm.qs).apply(null, arguments);
  };
  var _0x465842 = _0x5c0d54.dynCall_ffffiiii = function () {
    return (_0x465842 = _0x5c0d54.dynCall_ffffiiii = _0x5c0d54.asm.rs).apply(null, arguments);
  };
  var _0x2eea5f = _0x5c0d54.dynCall_viffiii = function () {
    return (_0x2eea5f = _0x5c0d54.dynCall_viffiii = _0x5c0d54.asm.ss).apply(null, arguments);
  };
  var _0x5eb22e = _0x5c0d54.dynCall_viffffiii = function () {
    return (_0x5eb22e = _0x5c0d54.dynCall_viffffiii = _0x5c0d54.asm.ts).apply(null, arguments);
  };
  var _0x205151 = _0x5c0d54.dynCall_viffffii = function () {
    return (_0x205151 = _0x5c0d54.dynCall_viffffii = _0x5c0d54.asm.us).apply(null, arguments);
  };
  var _0x590cdd = _0x5c0d54.dynCall_viiffffiiiiii = function () {
    return (_0x590cdd = _0x5c0d54.dynCall_viiffffiiiiii = _0x5c0d54.asm.vs).apply(null, arguments);
  };
  var _0x230fe4 = _0x5c0d54.dynCall_viiiififii = function () {
    return (_0x230fe4 = _0x5c0d54.dynCall_viiiififii = _0x5c0d54.asm.ws).apply(null, arguments);
  };
  var _0xaf9f30 = _0x5c0d54.dynCall_viiiiififii = function () {
    return (_0xaf9f30 = _0x5c0d54.dynCall_viiiiififii = _0x5c0d54.asm.xs).apply(null, arguments);
  };
  var _0x1c74fe = _0x5c0d54.dynCall_iiiiifii = function () {
    return (_0x1c74fe = _0x5c0d54.dynCall_iiiiifii = _0x5c0d54.asm.ys).apply(null, arguments);
  };
  var _0x562665 = _0x5c0d54.dynCall_viiifiii = function () {
    return (_0x562665 = _0x5c0d54.dynCall_viiifiii = _0x5c0d54.asm.zs).apply(null, arguments);
  };
  var _0x584c7e = _0x5c0d54.dynCall_viififiii = function () {
    return (_0x584c7e = _0x5c0d54.dynCall_viififiii = _0x5c0d54.asm.As).apply(null, arguments);
  };
  var _0x2940bb = _0x5c0d54.dynCall_viiififi = function () {
    return (_0x2940bb = _0x5c0d54.dynCall_viiififi = _0x5c0d54.asm.Bs).apply(null, arguments);
  };
  var _0x3f2966 = _0x5c0d54.dynCall_viiififfi = function () {
    return (_0x3f2966 = _0x5c0d54.dynCall_viiififfi = _0x5c0d54.asm.Cs).apply(null, arguments);
  };
  var _0x88f39e = _0x5c0d54.dynCall_iiiififfi = function () {
    return (_0x88f39e = _0x5c0d54.dynCall_iiiififfi = _0x5c0d54.asm.Ds).apply(null, arguments);
  };
  var _0x4478d5 = _0x5c0d54.dynCall_iiififfi = function () {
    return (_0x4478d5 = _0x5c0d54.dynCall_iiififfi = _0x5c0d54.asm.Es).apply(null, arguments);
  };
  var _0x29ea2a = _0x5c0d54.dynCall_viififii = function () {
    return (_0x29ea2a = _0x5c0d54.dynCall_viififii = _0x5c0d54.asm.Fs).apply(null, arguments);
  };
  var _0x4801d6 = _0x5c0d54.dynCall_viifififfi = function () {
    return (_0x4801d6 = _0x5c0d54.dynCall_viifififfi = _0x5c0d54.asm.Gs).apply(null, arguments);
  };
  var _0x17e6d9 = _0x5c0d54.dynCall_iifiiifi = function () {
    return (_0x17e6d9 = _0x5c0d54.dynCall_iifiiifi = _0x5c0d54.asm.Hs).apply(null, arguments);
  };
  var _0x3db123 = _0x5c0d54.dynCall_iifififfi = function () {
    return (_0x3db123 = _0x5c0d54.dynCall_iifififfi = _0x5c0d54.asm.Is).apply(null, arguments);
  };
  var _0x5865f8 = _0x5c0d54.dynCall_iiififii = function () {
    return (_0x5865f8 = _0x5c0d54.dynCall_iiififii = _0x5c0d54.asm.Js).apply(null, arguments);
  };
  var _0xf4e108 = _0x5c0d54.dynCall_iifiififfi = function () {
    return (_0xf4e108 = _0x5c0d54.dynCall_iifiififfi = _0x5c0d54.asm.Ks).apply(null, arguments);
  };
  var _0x44c0c6 = _0x5c0d54.dynCall_viiifififfi = function () {
    return (_0x44c0c6 = _0x5c0d54.dynCall_viiifififfi = _0x5c0d54.asm.Ls).apply(null, arguments);
  };
  var _0x71739d = _0x5c0d54.dynCall_iiifiiifi = function () {
    return (_0x71739d = _0x5c0d54.dynCall_iiifiiifi = _0x5c0d54.asm.Ms).apply(null, arguments);
  };
  var _0x121675 = _0x5c0d54.dynCall_iiifififfi = function () {
    return (_0x121675 = _0x5c0d54.dynCall_iiifififfi = _0x5c0d54.asm.Ns).apply(null, arguments);
  };
  var _0x3cdf39 = _0x5c0d54.dynCall_iiiififii = function () {
    return (_0x3cdf39 = _0x5c0d54.dynCall_iiiififii = _0x5c0d54.asm.Os).apply(null, arguments);
  };
  var _0x33a969 = _0x5c0d54.dynCall_iiifiififfi = function () {
    return (_0x33a969 = _0x5c0d54.dynCall_iiifiififfi = _0x5c0d54.asm.Ps).apply(null, arguments);
  };
  var _0x2a254f = _0x5c0d54.dynCall_viiiifififfi = function () {
    return (_0x2a254f = _0x5c0d54.dynCall_viiiifififfi = _0x5c0d54.asm.Qs).apply(null, arguments);
  };
  var _0xb6c92d = _0x5c0d54.dynCall_iiiifiiifi = function () {
    return (_0xb6c92d = _0x5c0d54.dynCall_iiiifiiifi = _0x5c0d54.asm.Rs).apply(null, arguments);
  };
  var _0x331706 = _0x5c0d54.dynCall_iiiiififii = function () {
    return (_0x331706 = _0x5c0d54.dynCall_iiiiififii = _0x5c0d54.asm.Ss).apply(null, arguments);
  };
  var _0x260422 = _0x5c0d54.dynCall_iiiifififfi = function () {
    return (_0x260422 = _0x5c0d54.dynCall_iiiifififfi = _0x5c0d54.asm.Ts).apply(null, arguments);
  };
  var _0x7bc240 = _0x5c0d54.dynCall_iiiifiififfi = function () {
    return (_0x7bc240 = _0x5c0d54.dynCall_iiiifiififfi = _0x5c0d54.asm.Us).apply(null, arguments);
  };
  var _0xe7fe69 = _0x5c0d54.dynCall_iiiiffi = function () {
    return (_0xe7fe69 = _0x5c0d54.dynCall_iiiiffi = _0x5c0d54.asm.Vs).apply(null, arguments);
  };
  var _0x2115b8 = _0x5c0d54.dynCall_iififfi = function () {
    return (_0x2115b8 = _0x5c0d54.dynCall_iififfi = _0x5c0d54.asm.Ws).apply(null, arguments);
  };
  var _0x3feb23 = _0x5c0d54.dynCall_iifiiffi = function () {
    return (_0x3feb23 = _0x5c0d54.dynCall_iifiiffi = _0x5c0d54.asm.Xs).apply(null, arguments);
  };
  var _0x25b93a = _0x5c0d54.dynCall_iiifiiffi = function () {
    return (_0x25b93a = _0x5c0d54.dynCall_iiifiiffi = _0x5c0d54.asm.Ys).apply(null, arguments);
  };
  var _0x4c1122 = _0x5c0d54.dynCall_iiiifiiffi = function () {
    return (_0x4c1122 = _0x5c0d54.dynCall_iiiifiiffi = _0x5c0d54.asm.Zs).apply(null, arguments);
  };
  var _0x29894a = _0x5c0d54.dynCall_iifiifii = function () {
    return (_0x29894a = _0x5c0d54.dynCall_iifiifii = _0x5c0d54.asm._s).apply(null, arguments);
  };
  var _0x5348f3 = _0x5c0d54.dynCall_iiffiii = function () {
    return (_0x5348f3 = _0x5c0d54.dynCall_iiffiii = _0x5c0d54.asm.$s).apply(null, arguments);
  };
  var _0x2e68c4 = _0x5c0d54.dynCall_iiiififiiii = function () {
    return (_0x2e68c4 = _0x5c0d54.dynCall_iiiififiiii = _0x5c0d54.asm.at).apply(null, arguments);
  };
  var _0xe19cd6 = _0x5c0d54.dynCall_iiififiiii = function () {
    return (_0xe19cd6 = _0x5c0d54.dynCall_iiififiiii = _0x5c0d54.asm.bt).apply(null, arguments);
  };
  var _0x1f0f64 = _0x5c0d54.dynCall_iiiiiifiiii = function () {
    return (_0x1f0f64 = _0x5c0d54.dynCall_iiiiiifiiii = _0x5c0d54.asm.ct).apply(null, arguments);
  };
  var _0x499daf = _0x5c0d54.dynCall_viffiiii = function () {
    return (_0x499daf = _0x5c0d54.dynCall_viffiiii = _0x5c0d54.asm.dt).apply(null, arguments);
  };
  var _0x1b523b = _0x5c0d54.dynCall_viiiiffffiiii = function () {
    return (_0x1b523b = _0x5c0d54.dynCall_viiiiffffiiii = _0x5c0d54.asm.et).apply(null, arguments);
  };
  var _0x1eb42c = _0x5c0d54.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x1eb42c = _0x5c0d54.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x5c0d54.asm.ft).apply(null, arguments);
  };
  var _0xa05b0f = _0x5c0d54.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0xa05b0f = _0x5c0d54.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x5c0d54.asm.gt).apply(null, arguments);
  };
  var _0x123e8a = _0x5c0d54.dynCall_iiiffiiii = function () {
    return (_0x123e8a = _0x5c0d54.dynCall_iiiffiiii = _0x5c0d54.asm.ht).apply(null, arguments);
  };
  var _0x5e98b6 = _0x5c0d54.dynCall_iiiiffiiii = function () {
    return (_0x5e98b6 = _0x5c0d54.dynCall_iiiiffiiii = _0x5c0d54.asm.it).apply(null, arguments);
  };
  var _0x570843 = _0x5c0d54.dynCall_fiffffi = function () {
    return (_0x570843 = _0x5c0d54.dynCall_fiffffi = _0x5c0d54.asm.jt).apply(null, arguments);
  };
  var _0x4ad4fe = _0x5c0d54.dynCall_fffffffi = function () {
    return (_0x4ad4fe = _0x5c0d54.dynCall_fffffffi = _0x5c0d54.asm.kt).apply(null, arguments);
  };
  var _0x1f5cf1 = _0x5c0d54.dynCall_viffifi = function () {
    return (_0x1f5cf1 = _0x5c0d54.dynCall_viffifi = _0x5c0d54.asm.lt).apply(null, arguments);
  };
  var _0xe327e4 = _0x5c0d54.dynCall_viiffifi = function () {
    return (_0xe327e4 = _0x5c0d54.dynCall_viiffifi = _0x5c0d54.asm.mt).apply(null, arguments);
  };
  var _0x7e2f9a = _0x5c0d54.dynCall_fiiiffi = function () {
    return (_0x7e2f9a = _0x5c0d54.dynCall_fiiiffi = _0x5c0d54.asm.nt).apply(null, arguments);
  };
  var _0x809205 = _0x5c0d54.dynCall_viiffiiiiiiiii = function () {
    return (_0x809205 = _0x5c0d54.dynCall_viiffiiiiiiiii = _0x5c0d54.asm.ot).apply(null, arguments);
  };
  var _0x2f3ba7 = _0x5c0d54.dynCall_viiiiiffiii = function () {
    return (_0x2f3ba7 = _0x5c0d54.dynCall_viiiiiffiii = _0x5c0d54.asm.pt).apply(null, arguments);
  };
  var _0x34b34b = _0x5c0d54.dynCall_viiffiiiiiii = function () {
    return (_0x34b34b = _0x5c0d54.dynCall_viiffiiiiiii = _0x5c0d54.asm.qt).apply(null, arguments);
  };
  var _0xbe1a07 = _0x5c0d54.dynCall_fffffffffi = function () {
    return (_0xbe1a07 = _0x5c0d54.dynCall_fffffffffi = _0x5c0d54.asm.rt).apply(null, arguments);
  };
  var _0x11668f = _0x5c0d54.dynCall_vifiiiiii = function () {
    return (_0x11668f = _0x5c0d54.dynCall_vifiiiiii = _0x5c0d54.asm.st).apply(null, arguments);
  };
  var _0x44cf99 = _0x5c0d54.dynCall_viifiiiiiii = function () {
    return (_0x44cf99 = _0x5c0d54.dynCall_viifiiiiiii = _0x5c0d54.asm.tt).apply(null, arguments);
  };
  var _0x261814 = _0x5c0d54.dynCall_viiififfiiiiiii = function () {
    return (_0x261814 = _0x5c0d54.dynCall_viiififfiiiiiii = _0x5c0d54.asm.ut).apply(null, arguments);
  };
  var _0x163f95 = _0x5c0d54.dynCall_viiffiifiiiiiii = function () {
    return (_0x163f95 = _0x5c0d54.dynCall_viiffiifiiiiiii = _0x5c0d54.asm.vt).apply(null, arguments);
  };
  var _0x638f0 = _0x5c0d54.dynCall_viifiiiiii = function () {
    return (_0x638f0 = _0x5c0d54.dynCall_viifiiiiii = _0x5c0d54.asm.wt).apply(null, arguments);
  };
  var _0x57bfcd = _0x5c0d54.dynCall_viiifiiiiii = function () {
    return (_0x57bfcd = _0x5c0d54.dynCall_viiifiiiiii = _0x5c0d54.asm.xt).apply(null, arguments);
  };
  var _0x3aeb22 = _0x5c0d54.dynCall_viiiifiiiiii = function () {
    return (_0x3aeb22 = _0x5c0d54.dynCall_viiiifiiiiii = _0x5c0d54.asm.yt).apply(null, arguments);
  };
  var _0x2c5e3b = _0x5c0d54.dynCall_viififiiiiii = function () {
    return (_0x2c5e3b = _0x5c0d54.dynCall_viififiiiiii = _0x5c0d54.asm.zt).apply(null, arguments);
  };
  var _0x485390 = _0x5c0d54.dynCall_viiiffiifiiiiiii = function () {
    return (_0x485390 = _0x5c0d54.dynCall_viiiffiifiiiiiii = _0x5c0d54.asm.At).apply(null, arguments);
  };
  var _0x3d487a = _0x5c0d54.dynCall_viiiiiifiiiiii = function () {
    return (_0x3d487a = _0x5c0d54.dynCall_viiiiiifiiiiii = _0x5c0d54.asm.Bt).apply(null, arguments);
  };
  var _0x313af1 = _0x5c0d54.dynCall_ffii = function () {
    return (_0x313af1 = _0x5c0d54.dynCall_ffii = _0x5c0d54.asm.Ct).apply(null, arguments);
  };
  var _0x45434d = _0x5c0d54.dynCall_vififiii = function () {
    return (_0x45434d = _0x5c0d54.dynCall_vififiii = _0x5c0d54.asm.Dt).apply(null, arguments);
  };
  var _0x359b11 = _0x5c0d54.dynCall_viiiiiiiijiiii = function () {
    return (_0x359b11 = _0x5c0d54.dynCall_viiiiiiiijiiii = _0x5c0d54.asm.Et).apply(null, arguments);
  };
  var _0x2dfaee = _0x5c0d54.dynCall_viifiiii = function () {
    return (_0x2dfaee = _0x5c0d54.dynCall_viifiiii = _0x5c0d54.asm.Ft).apply(null, arguments);
  };
  var _0x264162 = _0x5c0d54.dynCall_vifffii = function () {
    return (_0x264162 = _0x5c0d54.dynCall_vifffii = _0x5c0d54.asm.Gt).apply(null, arguments);
  };
  var _0x5ea713 = _0x5c0d54.dynCall_viiidii = function () {
    return (_0x5ea713 = _0x5c0d54.dynCall_viiidii = _0x5c0d54.asm.Ht).apply(null, arguments);
  };
  var _0x3c2954 = _0x5c0d54.dynCall_ijiiiiiiiii = function () {
    return (_0x3c2954 = _0x5c0d54.dynCall_ijiiiiiiiii = _0x5c0d54.asm.It).apply(null, arguments);
  };
  var _0x1fa2aa = _0x5c0d54.dynCall_viiijiii = function () {
    return (_0x1fa2aa = _0x5c0d54.dynCall_viiijiii = _0x5c0d54.asm.Jt).apply(null, arguments);
  };
  var _0x238c66 = _0x5c0d54.dynCall_ijjiii = function () {
    return (_0x238c66 = _0x5c0d54.dynCall_ijjiii = _0x5c0d54.asm.Kt).apply(null, arguments);
  };
  var _0x18f5d5 = _0x5c0d54.dynCall_ffiii = function () {
    return (_0x18f5d5 = _0x5c0d54.dynCall_ffiii = _0x5c0d54.asm.Lt).apply(null, arguments);
  };
  var _0x212cb6 = _0x5c0d54.dynCall_ddiii = function () {
    return (_0x212cb6 = _0x5c0d54.dynCall_ddiii = _0x5c0d54.asm.Mt).apply(null, arguments);
  };
  var _0x19651a = _0x5c0d54.dynCall_fffiii = function () {
    return (_0x19651a = _0x5c0d54.dynCall_fffiii = _0x5c0d54.asm.Nt).apply(null, arguments);
  };
  var _0x41438e = _0x5c0d54.dynCall_dddiii = function () {
    return (_0x41438e = _0x5c0d54.dynCall_dddiii = _0x5c0d54.asm.Ot).apply(null, arguments);
  };
  var _0x197453 = _0x5c0d54.dynCall_jjiii = function () {
    return (_0x197453 = _0x5c0d54.dynCall_jjiii = _0x5c0d54.asm.Pt).apply(null, arguments);
  };
  var _0x1f4264 = _0x5c0d54.dynCall_jddi = function () {
    return (_0x1f4264 = _0x5c0d54.dynCall_jddi = _0x5c0d54.asm.Qt).apply(null, arguments);
  };
  var _0xf24a36 = _0x5c0d54.dynCall_jjjii = function () {
    return (_0xf24a36 = _0x5c0d54.dynCall_jjjii = _0x5c0d54.asm.Rt).apply(null, arguments);
  };
  var _0xa3990d = _0x5c0d54.dynCall_jdii = function () {
    return (_0xa3990d = _0x5c0d54.dynCall_jdii = _0x5c0d54.asm.St).apply(null, arguments);
  };
  var _0x500bcb = _0x5c0d54.dynCall_djii = function () {
    return (_0x500bcb = _0x5c0d54.dynCall_djii = _0x5c0d54.asm.Tt).apply(null, arguments);
  };
  var _0x5a3720 = _0x5c0d54.dynCall_fdi = function () {
    return (_0x5a3720 = _0x5c0d54.dynCall_fdi = _0x5c0d54.asm.Ut).apply(null, arguments);
  };
  var _0x1bb2c3 = _0x5c0d54.dynCall_jjiiii = function () {
    return (_0x1bb2c3 = _0x5c0d54.dynCall_jjiiii = _0x5c0d54.asm.Vt).apply(null, arguments);
  };
  var _0xc90ac7 = _0x5c0d54.dynCall_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii = function () {
    return (_0xc90ac7 = _0x5c0d54.dynCall_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii = _0x5c0d54.asm.Wt).apply(null, arguments);
  };
  var _0x278d69 = _0x5c0d54.dynCall_ddii = function () {
    return (_0x278d69 = _0x5c0d54.dynCall_ddii = _0x5c0d54.asm.Xt).apply(null, arguments);
  };
  var _0x149e3a = _0x5c0d54.dynCall_viddddddi = function () {
    return (_0x149e3a = _0x5c0d54.dynCall_viddddddi = _0x5c0d54.asm.Yt).apply(null, arguments);
  };
  var _0x3e3b14 = _0x5c0d54.dynCall_viddddddddi = function () {
    return (_0x3e3b14 = _0x5c0d54.dynCall_viddddddddi = _0x5c0d54.asm.Zt).apply(null, arguments);
  };
  var _0x3e6ee0 = _0x5c0d54.dynCall_vidddddddddi = function () {
    return (_0x3e6ee0 = _0x5c0d54.dynCall_vidddddddddi = _0x5c0d54.asm._t).apply(null, arguments);
  };
  var _0x47af66 = _0x5c0d54.dynCall_viddddddddddddi = function () {
    return (_0x47af66 = _0x5c0d54.dynCall_viddddddddddddi = _0x5c0d54.asm.$t).apply(null, arguments);
  };
  var _0x2a21e0 = _0x5c0d54.dynCall_viddii = function () {
    return (_0x2a21e0 = _0x5c0d54.dynCall_viddii = _0x5c0d54.asm.au).apply(null, arguments);
  };
  var _0x4e992f = _0x5c0d54.dynCall_vididi = function () {
    return (_0x4e992f = _0x5c0d54.dynCall_vididi = _0x5c0d54.asm.bu).apply(null, arguments);
  };
  var _0x5e39ef = _0x5c0d54.dynCall_viddddddddddddddddi = function () {
    return (_0x5e39ef = _0x5c0d54.dynCall_viddddddddddddddddi = _0x5c0d54.asm.cu).apply(null, arguments);
  };
  var _0x4b4815 = _0x5c0d54.dynCall_vifffffffffi = function () {
    return (_0x4b4815 = _0x5c0d54.dynCall_vifffffffffi = _0x5c0d54.asm.du).apply(null, arguments);
  };
  var _0x2b6a54 = _0x5c0d54.dynCall_viffffffffffffi = function () {
    return (_0x2b6a54 = _0x5c0d54.dynCall_viffffffffffffi = _0x5c0d54.asm.eu).apply(null, arguments);
  };
  var _0x4e492e = _0x5c0d54.dynCall_viffffffffffffffffi = function () {
    return (_0x4e492e = _0x5c0d54.dynCall_viffffffffffffffffi = _0x5c0d54.asm.fu).apply(null, arguments);
  };
  var _0x42683d = _0x5c0d54.dynCall_ddddddi = function () {
    return (_0x42683d = _0x5c0d54.dynCall_ddddddi = _0x5c0d54.asm.gu).apply(null, arguments);
  };
  var _0xa2dda4 = _0x5c0d54.dynCall_fffii = function () {
    return (_0xa2dda4 = _0x5c0d54.dynCall_fffii = _0x5c0d54.asm.hu).apply(null, arguments);
  };
  var _0x1b1f1b = _0x5c0d54.dynCall_dddii = function () {
    return (_0x1b1f1b = _0x5c0d54.dynCall_dddii = _0x5c0d54.asm.iu).apply(null, arguments);
  };
  var _0x37e930 = _0x5c0d54.dynCall_vdiii = function () {
    return (_0x37e930 = _0x5c0d54.dynCall_vdiii = _0x5c0d54.asm.ju).apply(null, arguments);
  };
  var _0x87ad6d = _0x5c0d54.dynCall_diddi = function () {
    return (_0x87ad6d = _0x5c0d54.dynCall_diddi = _0x5c0d54.asm.ku).apply(null, arguments);
  };
  var _0x93e307 = _0x5c0d54.dynCall_iiffffi = function () {
    return (_0x93e307 = _0x5c0d54.dynCall_iiffffi = _0x5c0d54.asm.lu).apply(null, arguments);
  };
  var _0x5716d2 = _0x5c0d54.dynCall_vifffiii = function () {
    return (_0x5716d2 = _0x5c0d54.dynCall_vifffiii = _0x5c0d54.asm.mu).apply(null, arguments);
  };
  var _0x5612b9 = _0x5c0d54.dynCall_iiffffiii = function () {
    return (_0x5612b9 = _0x5c0d54.dynCall_iiffffiii = _0x5c0d54.asm.nu).apply(null, arguments);
  };
  var _0x219282 = _0x5c0d54.dynCall_iiifffiiii = function () {
    return (_0x219282 = _0x5c0d54.dynCall_iiifffiiii = _0x5c0d54.asm.ou).apply(null, arguments);
  };
  var _0x4f7e7b = _0x5c0d54.dynCall_iiiffiii = function () {
    return (_0x4f7e7b = _0x5c0d54.dynCall_iiiffiii = _0x5c0d54.asm.pu).apply(null, arguments);
  };
  var _0x7cdb99 = _0x5c0d54.dynCall_iifffffi = function () {
    return (_0x7cdb99 = _0x5c0d54.dynCall_iifffffi = _0x5c0d54.asm.qu).apply(null, arguments);
  };
  var _0x504d7e = _0x5c0d54.dynCall_iiffiiii = function () {
    return (_0x504d7e = _0x5c0d54.dynCall_iiffiiii = _0x5c0d54.asm.ru).apply(null, arguments);
  };
  var _0x3545c1 = _0x5c0d54.dynCall_iifffiii = function () {
    return (_0x3545c1 = _0x5c0d54.dynCall_iifffiii = _0x5c0d54.asm.su).apply(null, arguments);
  };
  var _0x5dbd71 = _0x5c0d54.dynCall_iiffii = function () {
    return (_0x5dbd71 = _0x5c0d54.dynCall_iiffii = _0x5c0d54.asm.tu).apply(null, arguments);
  };
  var _0x19c75d = _0x5c0d54.dynCall_iiffffiiiiiii = function () {
    return (_0x19c75d = _0x5c0d54.dynCall_iiffffiiiiiii = _0x5c0d54.asm.uu).apply(null, arguments);
  };
  var _0x36d05a = _0x5c0d54.dynCall_iiffifi = function () {
    return (_0x36d05a = _0x5c0d54.dynCall_iiffifi = _0x5c0d54.asm.vu).apply(null, arguments);
  };
  var _0x2ddc1b = _0x5c0d54.dynCall_iiiiffiffii = function () {
    return (_0x2ddc1b = _0x5c0d54.dynCall_iiiiffiffii = _0x5c0d54.asm.wu).apply(null, arguments);
  };
  var _0x28c734 = _0x5c0d54.dynCall_iifiiiii = function () {
    return (_0x28c734 = _0x5c0d54.dynCall_iifiiiii = _0x5c0d54.asm.xu).apply(null, arguments);
  };
  var _0x40fd30 = _0x5c0d54.dynCall_viifffii = function () {
    return (_0x40fd30 = _0x5c0d54.dynCall_viifffii = _0x5c0d54.asm.yu).apply(null, arguments);
  };
  var _0xa9af3f = _0x5c0d54.dynCall_viiiffiffiiiiiiiiiiiiiii = function () {
    return (_0xa9af3f = _0x5c0d54.dynCall_viiiffiffiiiiiiiiiiiiiii = _0x5c0d54.asm.zu).apply(null, arguments);
  };
  var _0x302c91 = _0x5c0d54.dynCall_viiiffiffiiiiiiiiiiiiiiiii = function () {
    return (_0x302c91 = _0x5c0d54.dynCall_viiiffiffiiiiiiiiiiiiiiiii = _0x5c0d54.asm.Au).apply(null, arguments);
  };
  var _0x497373 = _0x5c0d54.dynCall_viiiiiffiiiii = function () {
    return (_0x497373 = _0x5c0d54.dynCall_viiiiiffiiiii = _0x5c0d54.asm.Bu).apply(null, arguments);
  };
  var _0x5605f0 = _0x5c0d54.dynCall_iiiiiiiiiiiiiifiiiiii = function () {
    return (_0x5605f0 = _0x5c0d54.dynCall_iiiiiiiiiiiiiifiiiiii = _0x5c0d54.asm.Cu).apply(null, arguments);
  };
  var _0x4d6767 = _0x5c0d54.dynCall_iiiiiiiiiiiiiiiifiiiiii = function () {
    return (_0x4d6767 = _0x5c0d54.dynCall_iiiiiiiiiiiiiiiifiiiiii = _0x5c0d54.asm.Du).apply(null, arguments);
  };
  var _0x24735f = _0x5c0d54.dynCall_iiiiiiiiiiiiifiiiiii = function () {
    return (_0x24735f = _0x5c0d54.dynCall_iiiiiiiiiiiiifiiiiii = _0x5c0d54.asm.Eu).apply(null, arguments);
  };
  var _0x145281 = _0x5c0d54.dynCall_iiiiiiiiiiiiiiifiiiiii = function () {
    return (_0x145281 = _0x5c0d54.dynCall_iiiiiiiiiiiiiiifiiiiii = _0x5c0d54.asm.Fu).apply(null, arguments);
  };
  var _0x193246 = _0x5c0d54.dynCall_iiiiiiiiiiiiiiiiifiiiiii = function () {
    return (_0x193246 = _0x5c0d54.dynCall_iiiiiiiiiiiiiiiiifiiiiii = _0x5c0d54.asm.Gu).apply(null, arguments);
  };
  var _0x209aa3 = _0x5c0d54.dynCall_viiiffffi = function () {
    return (_0x209aa3 = _0x5c0d54.dynCall_viiiffffi = _0x5c0d54.asm.Hu).apply(null, arguments);
  };
  var _0x43c58a = _0x5c0d54.dynCall_iiiiiiifi = function () {
    return (_0x43c58a = _0x5c0d54.dynCall_iiiiiiifi = _0x5c0d54.asm.Iu).apply(null, arguments);
  };
  var _0x1bba47 = _0x5c0d54.dynCall_iiiiiiiifiiiii = function () {
    return (_0x1bba47 = _0x5c0d54.dynCall_iiiiiiiifiiiii = _0x5c0d54.asm.Ju).apply(null, arguments);
  };
  var _0x46e746 = _0x5c0d54.dynCall_vffiii = function () {
    return (_0x46e746 = _0x5c0d54.dynCall_vffiii = _0x5c0d54.asm.Ku).apply(null, arguments);
  };
  var _0x209070 = _0x5c0d54.dynCall_vififiiii = function () {
    return (_0x209070 = _0x5c0d54.dynCall_vififiiii = _0x5c0d54.asm.Lu).apply(null, arguments);
  };
  var _0x3edd11 = _0x5c0d54.dynCall_iiiiiffii = function () {
    return (_0x3edd11 = _0x5c0d54.dynCall_iiiiiffii = _0x5c0d54.asm.Mu).apply(null, arguments);
  };
  var _0x381020 = _0x5c0d54.dynCall_iiffiiiiiiiiii = function () {
    return (_0x381020 = _0x5c0d54.dynCall_iiffiiiiiiiiii = _0x5c0d54.asm.Nu).apply(null, arguments);
  };
  var _0x2d7ba8 = _0x5c0d54.dynCall_viiiiiiiiiiffiii = function () {
    return (_0x2d7ba8 = _0x5c0d54.dynCall_viiiiiiiiiiffiii = _0x5c0d54.asm.Ou).apply(null, arguments);
  };
  var _0x15fa18 = _0x5c0d54.dynCall_viiffffffi = function () {
    return (_0x15fa18 = _0x5c0d54.dynCall_viiffffffi = _0x5c0d54.asm.Pu).apply(null, arguments);
  };
  var _0x1557f2 = _0x5c0d54.dynCall_viifffffffi = function () {
    return (_0x1557f2 = _0x5c0d54.dynCall_viifffffffi = _0x5c0d54.asm.Qu).apply(null, arguments);
  };
  var _0x898238 = _0x5c0d54.dynCall_viiffffffffi = function () {
    return (_0x898238 = _0x5c0d54.dynCall_viiffffffffi = _0x5c0d54.asm.Ru).apply(null, arguments);
  };
  var _0x5f38d7 = _0x5c0d54.dynCall_viiffffffffiii = function () {
    return (_0x5f38d7 = _0x5c0d54.dynCall_viiffffffffiii = _0x5c0d54.asm.Su).apply(null, arguments);
  };
  var _0xa1fa01 = _0x5c0d54.dynCall_viiiiffffii = function () {
    return (_0xa1fa01 = _0x5c0d54.dynCall_viiiiffffii = _0x5c0d54.asm.Tu).apply(null, arguments);
  };
  var _0x589b63 = _0x5c0d54.dynCall_ddidi = function () {
    return (_0x589b63 = _0x5c0d54.dynCall_ddidi = _0x5c0d54.asm.Uu).apply(null, arguments);
  };
  var _0x121298 = _0x5c0d54.dynCall_jfi = function () {
    return (_0x121298 = _0x5c0d54.dynCall_jfi = _0x5c0d54.asm.Vu).apply(null, arguments);
  };
  var _0x293554 = _0x5c0d54.dynCall_fji = function () {
    return (_0x293554 = _0x5c0d54.dynCall_fji = _0x5c0d54.asm.Wu).apply(null, arguments);
  };
  var _0x510044 = _0x5c0d54.dynCall_viiiiddi = function () {
    return (_0x510044 = _0x5c0d54.dynCall_viiiiddi = _0x5c0d54.asm.Xu).apply(null, arguments);
  };
  var _0x151be2 = _0x5c0d54.dynCall_iiidii = function () {
    return (_0x151be2 = _0x5c0d54.dynCall_iiidii = _0x5c0d54.asm.Yu).apply(null, arguments);
  };
  var _0x278e8f = _0x5c0d54.dynCall_iiiddi = function () {
    return (_0x278e8f = _0x5c0d54.dynCall_iiiddi = _0x5c0d54.asm.Zu).apply(null, arguments);
  };
  var _0x223b03 = _0x5c0d54.dynCall_viddiiii = function () {
    return (_0x223b03 = _0x5c0d54.dynCall_viddiiii = _0x5c0d54.asm._u).apply(null, arguments);
  };
  var _0x442193 = _0x5c0d54.dynCall_vdi = function () {
    return (_0x442193 = _0x5c0d54.dynCall_vdi = _0x5c0d54.asm.$u).apply(null, arguments);
  };
  var _0x14c6a8 = _0x5c0d54.dynCall_idddi = function () {
    return (_0x14c6a8 = _0x5c0d54.dynCall_idddi = _0x5c0d54.asm.av).apply(null, arguments);
  };
  var _0x49e9c4 = _0x5c0d54.dynCall_iddii = function () {
    return (_0x49e9c4 = _0x5c0d54.dynCall_iddii = _0x5c0d54.asm.bv).apply(null, arguments);
  };
  var _0x4659d4 = _0x5c0d54.dynCall_vijiiiiiii = function () {
    return (_0x4659d4 = _0x5c0d54.dynCall_vijiiiiiii = _0x5c0d54.asm.cv).apply(null, arguments);
  };
  var _0x203256 = _0x5c0d54.dynCall_vijiiiiiiii = function () {
    return (_0x203256 = _0x5c0d54.dynCall_vijiiiiiiii = _0x5c0d54.asm.dv).apply(null, arguments);
  };
  var _0x51f579 = _0x5c0d54.dynCall_jjiiiii = function () {
    return (_0x51f579 = _0x5c0d54.dynCall_jjiiiii = _0x5c0d54.asm.ev).apply(null, arguments);
  };
  var _0xda3e0a = _0x5c0d54.dynCall_jijjji = function () {
    return (_0xda3e0a = _0x5c0d54.dynCall_jijjji = _0x5c0d54.asm.fv).apply(null, arguments);
  };
  var _0x260be9 = _0x5c0d54.dynCall_jijjjii = function () {
    return (_0x260be9 = _0x5c0d54.dynCall_jijjjii = _0x5c0d54.asm.gv).apply(null, arguments);
  };
  var _0x898386 = _0x5c0d54.dynCall_ijijiiiii = function () {
    return (_0x898386 = _0x5c0d54.dynCall_ijijiiiii = _0x5c0d54.asm.hv).apply(null, arguments);
  };
  var _0x3ca9c4 = _0x5c0d54.dynCall_ijjjiii = function () {
    return (_0x3ca9c4 = _0x5c0d54.dynCall_ijjjiii = _0x5c0d54.asm.iv).apply(null, arguments);
  };
  var _0x24dcc4 = _0x5c0d54.dynCall_vijjjiijii = function () {
    return (_0x24dcc4 = _0x5c0d54.dynCall_vijjjiijii = _0x5c0d54.asm.jv).apply(null, arguments);
  };
  var _0x3939bf = _0x5c0d54.dynCall_ijjjiijii = function () {
    return (_0x3939bf = _0x5c0d54.dynCall_ijjjiijii = _0x5c0d54.asm.kv).apply(null, arguments);
  };
  var _0x30372a = _0x5c0d54.dynCall_vijiiiiii = function () {
    return (_0x30372a = _0x5c0d54.dynCall_vijiiiiii = _0x5c0d54.asm.lv).apply(null, arguments);
  };
  var _0x207b6f = _0x5c0d54.dynCall_dfi = function () {
    return (_0x207b6f = _0x5c0d54.dynCall_dfi = _0x5c0d54.asm.mv).apply(null, arguments);
  };
  var _0x19fcbc = _0x5c0d54.dynCall_jidii = function () {
    return (_0x19fcbc = _0x5c0d54.dynCall_jidii = _0x5c0d54.asm.nv).apply(null, arguments);
  };
  var _0x58f436 = _0x5c0d54.dynCall_viiiiiiiji = function () {
    return (_0x58f436 = _0x5c0d54.dynCall_viiiiiiiji = _0x5c0d54.asm.ov).apply(null, arguments);
  };
  var _0x5d1fb4 = _0x5c0d54.dynCall_viiiiiiiiji = function () {
    return (_0x5d1fb4 = _0x5c0d54.dynCall_viiiiiiiiji = _0x5c0d54.asm.pv).apply(null, arguments);
  };
  var _0x2c32c9 = _0x5c0d54.dynCall_viiiiiiiiiji = function () {
    return (_0x2c32c9 = _0x5c0d54.dynCall_viiiiiiiiiji = _0x5c0d54.asm.qv).apply(null, arguments);
  };
  var _0x29e6ba = _0x5c0d54.dynCall_ijiijii = function () {
    return (_0x29e6ba = _0x5c0d54.dynCall_ijiijii = _0x5c0d54.asm.rv).apply(null, arguments);
  };
  var _0x894c4 = _0x5c0d54.dynCall_vjjiiiii = function () {
    return (_0x894c4 = _0x5c0d54.dynCall_vjjiiiii = _0x5c0d54.asm.sv).apply(null, arguments);
  };
  var _0x5ebb77 = _0x5c0d54.dynCall_vjjii = function () {
    return (_0x5ebb77 = _0x5c0d54.dynCall_vjjii = _0x5c0d54.asm.tv).apply(null, arguments);
  };
  var _0x514ef0 = _0x5c0d54.dynCall_ijiiji = function () {
    return (_0x514ef0 = _0x5c0d54.dynCall_ijiiji = _0x5c0d54.asm.uv).apply(null, arguments);
  };
  var _0x3f669b = _0x5c0d54.dynCall_ijiiiii = function () {
    return (_0x3f669b = _0x5c0d54.dynCall_ijiiiii = _0x5c0d54.asm.vv).apply(null, arguments);
  };
  var _0x5b47a6 = _0x5c0d54.dynCall_ijiiiiji = function () {
    return (_0x5b47a6 = _0x5c0d54.dynCall_ijiiiiji = _0x5c0d54.asm.wv).apply(null, arguments);
  };
  var _0x45bec3 = _0x5c0d54.dynCall_jiiiiii = function () {
    return (_0x45bec3 = _0x5c0d54.dynCall_jiiiiii = _0x5c0d54.asm.xv).apply(null, arguments);
  };
  var _0x146e55 = _0x5c0d54.dynCall_idiii = function () {
    return (_0x146e55 = _0x5c0d54.dynCall_idiii = _0x5c0d54.asm.yv).apply(null, arguments);
  };
  var _0x15146e = _0x5c0d54.dynCall_ifiii = function () {
    return (_0x15146e = _0x5c0d54.dynCall_ifiii = _0x5c0d54.asm.zv).apply(null, arguments);
  };
  var _0x574555 = _0x5c0d54.dynCall_ifiiiii = function () {
    return (_0x574555 = _0x5c0d54.dynCall_ifiiiii = _0x5c0d54.asm.Av).apply(null, arguments);
  };
  var _0x1da10c = _0x5c0d54.dynCall_vijijji = function () {
    return (_0x1da10c = _0x5c0d54.dynCall_vijijji = _0x5c0d54.asm.Bv).apply(null, arguments);
  };
  var _0x45c0ce = _0x5c0d54.dynCall_iijjji = function () {
    return (_0x45c0ce = _0x5c0d54.dynCall_iijjji = _0x5c0d54.asm.Cv).apply(null, arguments);
  };
  var _0x413e91 = _0x5c0d54.dynCall_viijjji = function () {
    return (_0x413e91 = _0x5c0d54.dynCall_viijjji = _0x5c0d54.asm.Dv).apply(null, arguments);
  };
  var _0x1432c8 = _0x5c0d54.dynCall_vdii = function () {
    return (_0x1432c8 = _0x5c0d54.dynCall_vdii = _0x5c0d54.asm.Ev).apply(null, arguments);
  };
  var _0x3c92b9 = _0x5c0d54.dynCall_jijji = function () {
    return (_0x3c92b9 = _0x5c0d54.dynCall_jijji = _0x5c0d54.asm.Fv).apply(null, arguments);
  };
  var _0x550c48 = _0x5c0d54.dynCall_iijjii = function () {
    return (_0x550c48 = _0x5c0d54.dynCall_iijjii = _0x5c0d54.asm.Gv).apply(null, arguments);
  };
  var _0x38340e = _0x5c0d54.dynCall_viijijii = function () {
    return (_0x38340e = _0x5c0d54.dynCall_viijijii = _0x5c0d54.asm.Hv).apply(null, arguments);
  };
  var _0x2967c5 = _0x5c0d54.dynCall_viijijiii = function () {
    return (_0x2967c5 = _0x5c0d54.dynCall_viijijiii = _0x5c0d54.asm.Iv).apply(null, arguments);
  };
  var _0x14e198 = _0x5c0d54.dynCall_vijiji = function () {
    return (_0x14e198 = _0x5c0d54.dynCall_vijiji = _0x5c0d54.asm.Jv).apply(null, arguments);
  };
  var _0x201b92 = _0x5c0d54.dynCall_viijiijiii = function () {
    return (_0x201b92 = _0x5c0d54.dynCall_viijiijiii = _0x5c0d54.asm.Kv).apply(null, arguments);
  };
  var _0x42e226 = _0x5c0d54.dynCall_viiiijiiii = function () {
    return (_0x42e226 = _0x5c0d54.dynCall_viiiijiiii = _0x5c0d54.asm.Lv).apply(null, arguments);
  };
  var _0x11f564 = _0x5c0d54.dynCall_viijjii = function () {
    return (_0x11f564 = _0x5c0d54.dynCall_viijjii = _0x5c0d54.asm.Mv).apply(null, arguments);
  };
  var _0x582ddd = _0x5c0d54.dynCall_jiiiiiiiii = function () {
    return (_0x582ddd = _0x5c0d54.dynCall_jiiiiiiiii = _0x5c0d54.asm.Nv).apply(null, arguments);
  };
  var _0x3e7d28 = _0x5c0d54.dynCall_iiiiijii = function () {
    return (_0x3e7d28 = _0x5c0d54.dynCall_iiiiijii = _0x5c0d54.asm.Ov).apply(null, arguments);
  };
  var _0x22bad7 = _0x5c0d54.dynCall_iiiiidii = function () {
    return (_0x22bad7 = _0x5c0d54.dynCall_iiiiidii = _0x5c0d54.asm.Pv).apply(null, arguments);
  };
  var _0x45af08 = _0x5c0d54.dynCall_iiiidii = function () {
    return (_0x45af08 = _0x5c0d54.dynCall_iiiidii = _0x5c0d54.asm.Qv).apply(null, arguments);
  };
  var _0x55341a = _0x5c0d54.dynCall_iijfiii = function () {
    return (_0x55341a = _0x5c0d54.dynCall_iijfiii = _0x5c0d54.asm.Rv).apply(null, arguments);
  };
  var _0x28bc61 = _0x5c0d54.dynCall_iiidiii = function () {
    return (_0x28bc61 = _0x5c0d54.dynCall_iiidiii = _0x5c0d54.asm.Sv).apply(null, arguments);
  };
  var _0x2a7195 = _0x5c0d54.dynCall_iiiiffiiiji = function () {
    return (_0x2a7195 = _0x5c0d54.dynCall_iiiiffiiiji = _0x5c0d54.asm.Tv).apply(null, arguments);
  };
  var _0x113ac1 = _0x5c0d54.dynCall_jiiiiiii = function () {
    return (_0x113ac1 = _0x5c0d54.dynCall_jiiiiiii = _0x5c0d54.asm.Uv).apply(null, arguments);
  };
  var _0x46b1d3 = _0x5c0d54.dynCall_iiiiffiiiii = function () {
    return (_0x46b1d3 = _0x5c0d54.dynCall_iiiiffiiiii = _0x5c0d54.asm.Vv).apply(null, arguments);
  };
  var _0x51f1c3 = _0x5c0d54.dynCall_jiiiiji = function () {
    return (_0x51f1c3 = _0x5c0d54.dynCall_jiiiiji = _0x5c0d54.asm.Wv).apply(null, arguments);
  };
  var _0x556dd8 = _0x5c0d54.dynCall_fiiiifi = function () {
    return (_0x556dd8 = _0x5c0d54.dynCall_fiiiifi = _0x5c0d54.asm.Xv).apply(null, arguments);
  };
  var _0x32dd88 = _0x5c0d54.dynCall_iiijjii = function () {
    return (_0x32dd88 = _0x5c0d54.dynCall_iiijjii = _0x5c0d54.asm.Yv).apply(null, arguments);
  };
  var _0x152423 = _0x5c0d54.dynCall_vij = function () {
    return (_0x152423 = _0x5c0d54.dynCall_vij = _0x5c0d54.asm.Zv).apply(null, arguments);
  };
  var _0x1d166f = _0x5c0d54.dynCall_iiiijiii = function () {
    return (_0x1d166f = _0x5c0d54.dynCall_iiiijiii = _0x5c0d54.asm._v).apply(null, arguments);
  };
  var _0x1089fe = _0x5c0d54.dynCall_ijj = function () {
    return (_0x1089fe = _0x5c0d54.dynCall_ijj = _0x5c0d54.asm.$v).apply(null, arguments);
  };
  var _0x2235bd = _0x5c0d54.dynCall_vjji = function () {
    return (_0x2235bd = _0x5c0d54.dynCall_vjji = _0x5c0d54.asm.aw).apply(null, arguments);
  };
  var _0x329b17 = _0x5c0d54.dynCall_ij = function () {
    return (_0x329b17 = _0x5c0d54.dynCall_ij = _0x5c0d54.asm.bw).apply(null, arguments);
  };
  var _0x575811 = _0x5c0d54.dynCall_vif = function () {
    return (_0x575811 = _0x5c0d54.dynCall_vif = _0x5c0d54.asm.cw).apply(null, arguments);
  };
  var _0x383034 = _0x5c0d54.dynCall_vid = function () {
    return (_0x383034 = _0x5c0d54.dynCall_vid = _0x5c0d54.asm.dw).apply(null, arguments);
  };
  var _0x48d409 = _0x5c0d54.dynCall_viiiiif = function () {
    return (_0x48d409 = _0x5c0d54.dynCall_viiiiif = _0x5c0d54.asm.ew).apply(null, arguments);
  };
  var _0x153dcf = _0x5c0d54.dynCall_viiiiiif = function () {
    return (_0x153dcf = _0x5c0d54.dynCall_viiiiiif = _0x5c0d54.asm.fw).apply(null, arguments);
  };
  var _0x570db5 = _0x5c0d54.dynCall_viffff = function () {
    return (_0x570db5 = _0x5c0d54.dynCall_viffff = _0x5c0d54.asm.gw).apply(null, arguments);
  };
  var _0x3c27f2 = _0x5c0d54.dynCall_iiif = function () {
    return (_0x3c27f2 = _0x5c0d54.dynCall_iiif = _0x5c0d54.asm.hw).apply(null, arguments);
  };
  var _0x4f7686 = _0x5c0d54.dynCall_viiiiiji = function () {
    return (_0x4f7686 = _0x5c0d54.dynCall_viiiiiji = _0x5c0d54.asm.iw).apply(null, arguments);
  };
  var _0x4c427e = _0x5c0d54.dynCall_fif = function () {
    return (_0x4c427e = _0x5c0d54.dynCall_fif = _0x5c0d54.asm.jw).apply(null, arguments);
  };
  var _0x389411 = _0x5c0d54.dynCall_iiiiiifff = function () {
    return (_0x389411 = _0x5c0d54.dynCall_iiiiiifff = _0x5c0d54.asm.kw).apply(null, arguments);
  };
  var _0x5c3b38 = _0x5c0d54.dynCall_iiiiiifiif = function () {
    return (_0x5c3b38 = _0x5c0d54.dynCall_iiiiiifiif = _0x5c0d54.asm.lw).apply(null, arguments);
  };
  var _0x5ad282 = _0x5c0d54.dynCall_iiiiiiifiif = function () {
    return (_0x5ad282 = _0x5c0d54.dynCall_iiiiiiifiif = _0x5c0d54.asm.mw).apply(null, arguments);
  };
  var _0x424876 = _0x5c0d54.dynCall_fiff = function () {
    return (_0x424876 = _0x5c0d54.dynCall_fiff = _0x5c0d54.asm.nw).apply(null, arguments);
  };
  var _0x544bde = _0x5c0d54.dynCall_fiiiiiifiifif = function () {
    return (_0x544bde = _0x5c0d54.dynCall_fiiiiiifiifif = _0x5c0d54.asm.ow).apply(null, arguments);
  };
  var _0x44c938 = _0x5c0d54.dynCall_fiiiiiifiiiif = function () {
    return (_0x44c938 = _0x5c0d54.dynCall_fiiiiiifiiiif = _0x5c0d54.asm.pw).apply(null, arguments);
  };
  var _0x21bb6b = _0x5c0d54.dynCall_iifiiiijii = function () {
    return (_0x21bb6b = _0x5c0d54.dynCall_iifiiiijii = _0x5c0d54.asm.qw).apply(null, arguments);
  };
  var _0xeac5ac = _0x5c0d54.dynCall_vifijii = function () {
    return (_0xeac5ac = _0x5c0d54.dynCall_vifijii = _0x5c0d54.asm.rw).apply(null, arguments);
  };
  var _0x1a2415 = _0x5c0d54.dynCall_iiiifffiii = function () {
    return (_0x1a2415 = _0x5c0d54.dynCall_iiiifffiii = _0x5c0d54.asm.sw).apply(null, arguments);
  };
  var _0x588ec1 = _0x5c0d54.dynCall_iiiifffffi = function () {
    return (_0x588ec1 = _0x5c0d54.dynCall_iiiifffffi = _0x5c0d54.asm.tw).apply(null, arguments);
  };
  var _0x29d384 = _0x5c0d54.dynCall_viffiiiif = function () {
    return (_0x29d384 = _0x5c0d54.dynCall_viffiiiif = _0x5c0d54.asm.uw).apply(null, arguments);
  };
  var _0x5ca43b = _0x5c0d54.dynCall_viffiifffffiii = function () {
    return (_0x5ca43b = _0x5c0d54.dynCall_viffiifffffiii = _0x5c0d54.asm.vw).apply(null, arguments);
  };
  var _0x5b26cc = _0x5c0d54.dynCall_viffffiifffiiiiif = function () {
    return (_0x5b26cc = _0x5c0d54.dynCall_viffffiifffiiiiif = _0x5c0d54.asm.ww).apply(null, arguments);
  };
  var _0x508a34 = _0x5c0d54.dynCall_iiiifffffii = function () {
    return (_0x508a34 = _0x5c0d54.dynCall_iiiifffffii = _0x5c0d54.asm.xw).apply(null, arguments);
  };
  var _0x3d747a = _0x5c0d54.dynCall_viiiiiiiiiiifii = function () {
    return (_0x3d747a = _0x5c0d54.dynCall_viiiiiiiiiiifii = _0x5c0d54.asm.yw).apply(null, arguments);
  };
  var _0x3566a8 = _0x5c0d54.dynCall_viff = function () {
    return (_0x3566a8 = _0x5c0d54.dynCall_viff = _0x5c0d54.asm.zw).apply(null, arguments);
  };
  var _0x2f98f9 = _0x5c0d54.dynCall_iiiiifiiiiif = function () {
    return (_0x2f98f9 = _0x5c0d54.dynCall_iiiiifiiiiif = _0x5c0d54.asm.Aw).apply(null, arguments);
  };
  var _0x2c56c4 = _0x5c0d54.dynCall_viiifiiiii = function () {
    return (_0x2c56c4 = _0x5c0d54.dynCall_viiifiiiii = _0x5c0d54.asm.Bw).apply(null, arguments);
  };
  var _0x12b393 = _0x5c0d54.dynCall_viiiifiiiiif = function () {
    return (_0x12b393 = _0x5c0d54.dynCall_viiiifiiiiif = _0x5c0d54.asm.Cw).apply(null, arguments);
  };
  var _0x53227c = _0x5c0d54.dynCall_iifff = function () {
    return (_0x53227c = _0x5c0d54.dynCall_iifff = _0x5c0d54.asm.Dw).apply(null, arguments);
  };
  var _0x40604a = _0x5c0d54.dynCall_iif = function () {
    return (_0x40604a = _0x5c0d54.dynCall_iif = _0x5c0d54.asm.Ew).apply(null, arguments);
  };
  var _0x1cb216 = _0x5c0d54.dynCall_viijijj = function () {
    return (_0x1cb216 = _0x5c0d54.dynCall_viijijj = _0x5c0d54.asm.Fw).apply(null, arguments);
  };
  var _0x1005a9 = _0x5c0d54.dynCall_viiiij = function () {
    return (_0x1005a9 = _0x5c0d54.dynCall_viiiij = _0x5c0d54.asm.Gw).apply(null, arguments);
  };
  var _0x566beb = _0x5c0d54.dynCall_iiijji = function () {
    return (_0x566beb = _0x5c0d54.dynCall_iiijji = _0x5c0d54.asm.Hw).apply(null, arguments);
  };
  var _0x295605 = _0x5c0d54.dynCall_ijjiiiii = function () {
    return (_0x295605 = _0x5c0d54.dynCall_ijjiiiii = _0x5c0d54.asm.Iw).apply(null, arguments);
  };
  var _0x49e374 = _0x5c0d54.dynCall_vidd = function () {
    return (_0x49e374 = _0x5c0d54.dynCall_vidd = _0x5c0d54.asm.Jw).apply(null, arguments);
  };
  var _0x5d0128 = _0x5c0d54.dynCall_iiiiiifffiiifiii = function () {
    return (_0x5d0128 = _0x5c0d54.dynCall_iiiiiifffiiifiii = _0x5c0d54.asm.Kw).apply(null, arguments);
  };
  var _0x54c153 = _0x5c0d54.dynCall_fiiiif = function () {
    return (_0x54c153 = _0x5c0d54.dynCall_fiiiif = _0x5c0d54.asm.Lw).apply(null, arguments);
  };
  var _0x1dbe5e = _0x5c0d54.dynCall_viiifffiiij = function () {
    return (_0x1dbe5e = _0x5c0d54.dynCall_viiifffiiij = _0x5c0d54.asm.Mw).apply(null, arguments);
  };
  var _0x4230e2 = _0x5c0d54.dynCall_viiffiiii = function () {
    return (_0x4230e2 = _0x5c0d54.dynCall_viiffiiii = _0x5c0d54.asm.Nw).apply(null, arguments);
  };
  var _0x247c9f = _0x5c0d54.dynCall_iiiiiff = function () {
    return (_0x247c9f = _0x5c0d54.dynCall_iiiiiff = _0x5c0d54.asm.Ow).apply(null, arguments);
  };
  var _0x185a57 = _0x5c0d54.dynCall_vifff = function () {
    return (_0x185a57 = _0x5c0d54.dynCall_vifff = _0x5c0d54.asm.Pw).apply(null, arguments);
  };
  var _0x58f096 = _0x5c0d54.dynCall_viifff = function () {
    return (_0x58f096 = _0x5c0d54.dynCall_viifff = _0x5c0d54.asm.Qw).apply(null, arguments);
  };
  var _0xcbee1 = _0x5c0d54.dynCall_vf = function () {
    return (_0xcbee1 = _0x5c0d54.dynCall_vf = _0x5c0d54.asm.Rw).apply(null, arguments);
  };
  var _0xeaff5a = _0x5c0d54.dynCall_vffff = function () {
    return (_0xeaff5a = _0x5c0d54.dynCall_vffff = _0x5c0d54.asm.Sw).apply(null, arguments);
  };
  var _0x79ac19 = _0x5c0d54.dynCall_vff = function () {
    return (_0x79ac19 = _0x5c0d54.dynCall_vff = _0x5c0d54.asm.Tw).apply(null, arguments);
  };
  var _0x4e150c = _0x5c0d54.dynCall_fff = function () {
    return (_0x4e150c = _0x5c0d54.dynCall_fff = _0x5c0d54.asm.Uw).apply(null, arguments);
  };
  var _0x18db79 = _0x5c0d54.dynCall_iiff = function () {
    return (_0x18db79 = _0x5c0d54.dynCall_iiff = _0x5c0d54.asm.Vw).apply(null, arguments);
  };
  var _0x98c021 = _0x5c0d54.dynCall_f = function () {
    return (_0x98c021 = _0x5c0d54.dynCall_f = _0x5c0d54.asm.Ww).apply(null, arguments);
  };
  var _0x36eebc = _0x5c0d54.dynCall_vfff = function () {
    return (_0x36eebc = _0x5c0d54.dynCall_vfff = _0x5c0d54.asm.Xw).apply(null, arguments);
  };
  var _0x3022e0 = _0x5c0d54.dynCall_vffffffi = function () {
    return (_0x3022e0 = _0x5c0d54.dynCall_vffffffi = _0x5c0d54.asm.Yw).apply(null, arguments);
  };
  var _0x338251 = _0x5c0d54.dynCall_ff = function () {
    return (_0x338251 = _0x5c0d54.dynCall_ff = _0x5c0d54.asm.Zw).apply(null, arguments);
  };
  var _0x3c4a95 = _0x5c0d54.dynCall_if = function () {
    return (_0x3c4a95 = _0x5c0d54.dynCall_if = _0x5c0d54.asm._w).apply(null, arguments);
  };
  var _0x3c5eea = _0x5c0d54.dynCall_iiiiiifii = function () {
    return (_0x3c5eea = _0x5c0d54.dynCall_iiiiiifii = _0x5c0d54.asm.$w).apply(null, arguments);
  };
  var _0x49a6e8 = _0x5c0d54.dynCall_iiiifiifii = function () {
    return (_0x49a6e8 = _0x5c0d54.dynCall_iiiifiifii = _0x5c0d54.asm.ax).apply(null, arguments);
  };
  var _0x5c1171 = _0x5c0d54.dynCall_iiifiifii = function () {
    return (_0x5c1171 = _0x5c0d54.dynCall_iiifiifii = _0x5c0d54.asm.bx).apply(null, arguments);
  };
  var _0x4abd18 = _0x5c0d54.dynCall_iiiiiiifii = function () {
    return (_0x4abd18 = _0x5c0d54.dynCall_iiiiiiifii = _0x5c0d54.asm.cx).apply(null, arguments);
  };
  var _0xfc7a27 = _0x5c0d54.dynCall_iiififi = function () {
    return (_0xfc7a27 = _0x5c0d54.dynCall_iiififi = _0x5c0d54.asm.dx).apply(null, arguments);
  };
  var _0x55b24c = _0x5c0d54.dynCall_iiiififi = function () {
    return (_0x55b24c = _0x5c0d54.dynCall_iiiififi = _0x5c0d54.asm.ex).apply(null, arguments);
  };
  var _0x4edd2c = _0x5c0d54.dynCall_iiiiififi = function () {
    return (_0x4edd2c = _0x5c0d54.dynCall_iiiiififi = _0x5c0d54.asm.fx).apply(null, arguments);
  };
  var _0x4fb44a = _0x5c0d54.dynCall_fiif = function () {
    return (_0x4fb44a = _0x5c0d54.dynCall_fiif = _0x5c0d54.asm.gx).apply(null, arguments);
  };
  var _0x693a68 = _0x5c0d54.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0x693a68 = _0x5c0d54.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x5c0d54.asm.hx).apply(null, arguments);
  };
  var _0x179dac = _0x5c0d54.dynCall_viififi = function () {
    return (_0x179dac = _0x5c0d54.dynCall_viififi = _0x5c0d54.asm.ix).apply(null, arguments);
  };
  var _0x37271d = _0x5c0d54.dynCall_viiiiiiiijiii = function () {
    return (_0x37271d = _0x5c0d54.dynCall_viiiiiiiijiii = _0x5c0d54.asm.jx).apply(null, arguments);
  };
  function _0x9388a2(_0x4aabf3, _0x20c98d) {
    var _0x50ad7e = _0x212590();
    try {
      return _0x96b4a2(_0x4aabf3, _0x20c98d);
    } catch (_0x3a06fe) {
      _0x4a640e(_0x50ad7e);
      if (_0x3a06fe !== _0x3a06fe + 0 && _0x3a06fe !== "longjmp") {
        throw _0x3a06fe;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x342b39(_0x5aac16, _0x1da027, _0x42a18a) {
    var _0x26e587 = _0x212590();
    try {
      return _0xbea22c(_0x5aac16, _0x1da027, _0x42a18a);
    } catch (_0x27ea52) {
      _0x4a640e(_0x26e587);
      if (_0x27ea52 !== _0x27ea52 + 0 && _0x27ea52 !== "longjmp") {
        throw _0x27ea52;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x558506(_0x8f46c7, _0x502ca1, _0x16a1b8, _0x58ed0c) {
    var _0x29f44f = _0x212590();
    try {
      _0x58cad7(_0x8f46c7, _0x502ca1, _0x16a1b8, _0x58ed0c);
    } catch (_0x234afa) {
      _0x4a640e(_0x29f44f);
      if (_0x234afa !== _0x234afa + 0 && _0x234afa !== "longjmp") {
        throw _0x234afa;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x37b73c(_0x1e6819, _0x4b2a02, _0x67be2f, _0xd2e3a2, _0xc005db, _0x26fa42) {
    var _0x2b109d = _0x212590();
    try {
      return _0xee95c5(_0x1e6819, _0x4b2a02, _0x67be2f, _0xd2e3a2, _0xc005db, _0x26fa42);
    } catch (_0x11565a) {
      _0x4a640e(_0x2b109d);
      if (_0x11565a !== _0x11565a + 0 && _0x11565a !== "longjmp") {
        throw _0x11565a;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x5cae08(_0x223fbf, _0x212b8d, _0x5b3a8a, _0x4bbea8) {
    var _0x2acd40 = _0x212590();
    try {
      return _0x3b1023(_0x223fbf, _0x212b8d, _0x5b3a8a, _0x4bbea8);
    } catch (_0x308415) {
      _0x4a640e(_0x2acd40);
      if (_0x308415 !== _0x308415 + 0 && _0x308415 !== "longjmp") {
        throw _0x308415;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4d68ec(_0xb7e8ac, _0x27e771, _0x3bab5e, _0x50d787, _0xf1fa1b) {
    var _0x1abd9b = _0x212590();
    try {
      _0x3b717f(_0xb7e8ac, _0x27e771, _0x3bab5e, _0x50d787, _0xf1fa1b);
    } catch (_0xaf477d) {
      _0x4a640e(_0x1abd9b);
      if (_0xaf477d !== _0xaf477d + 0 && _0xaf477d !== "longjmp") {
        throw _0xaf477d;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x38ffec(_0x1eea91, _0x5bb619, _0x542e57, _0x413ae2, _0xad63a0) {
    var _0x2cb61d = _0x212590();
    try {
      return _0x417b4a(_0x1eea91, _0x5bb619, _0x542e57, _0x413ae2, _0xad63a0);
    } catch (_0x52ed37) {
      _0x4a640e(_0x2cb61d);
      if (_0x52ed37 !== _0x52ed37 + 0 && _0x52ed37 !== "longjmp") {
        throw _0x52ed37;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x3abb86(_0x5b4eaa, _0x4f00cc, _0x162ceb, _0x30f63f) {
    var _0x3dab61 = _0x212590();
    try {
      return _0x176fe4(_0x5b4eaa, _0x4f00cc, _0x162ceb, _0x30f63f);
    } catch (_0x37e3ce) {
      _0x4a640e(_0x3dab61);
      if (_0x37e3ce !== _0x37e3ce + 0 && _0x37e3ce !== "longjmp") {
        throw _0x37e3ce;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x177bc0(_0x28b91c, _0x131d2e, _0x481a17, _0x4cd2f5) {
    var _0x44311b = _0x212590();
    try {
      return _0x1f0308(_0x28b91c, _0x131d2e, _0x481a17, _0x4cd2f5);
    } catch (_0x952ab2) {
      _0x4a640e(_0x44311b);
      if (_0x952ab2 !== _0x952ab2 + 0 && _0x952ab2 !== "longjmp") {
        throw _0x952ab2;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x14f062(_0x3c84b5, _0x3886a4, _0x125763, _0x4984b6) {
    var _0x28c3b4 = _0x212590();
    try {
      _0x2d649b(_0x3c84b5, _0x3886a4, _0x125763, _0x4984b6);
    } catch (_0x3f3289) {
      _0x4a640e(_0x28c3b4);
      if (_0x3f3289 !== _0x3f3289 + 0 && _0x3f3289 !== "longjmp") {
        throw _0x3f3289;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4aa86e(_0x54f877, _0xf0eb7, _0x420c79) {
    var _0x4f502a = _0x212590();
    try {
      _0x4be795(_0x54f877, _0xf0eb7, _0x420c79);
    } catch (_0x2d9f3a) {
      _0x4a640e(_0x4f502a);
      if (_0x2d9f3a !== _0x2d9f3a + 0 && _0x2d9f3a !== "longjmp") {
        throw _0x2d9f3a;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x587800(_0x983d84, _0x1c8a27, _0x475508, _0x282fb9) {
    var _0x1a0ca0 = _0x212590();
    try {
      _0x140364(_0x983d84, _0x1c8a27, _0x475508, _0x282fb9);
    } catch (_0x3181e5) {
      _0x4a640e(_0x1a0ca0);
      if (_0x3181e5 !== _0x3181e5 + 0 && _0x3181e5 !== "longjmp") {
        throw _0x3181e5;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0xec0494(_0x487ed2, _0x127387) {
    var _0x20b829 = _0x212590();
    try {
      _0x1cebc1(_0x487ed2, _0x127387);
    } catch (_0x332cee) {
      _0x4a640e(_0x20b829);
      if (_0x332cee !== _0x332cee + 0 && _0x332cee !== "longjmp") {
        throw _0x332cee;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x3d4d7e(_0x467f7b) {
    var _0x258098 = _0x212590();
    try {
      _0x1c1467(_0x467f7b);
    } catch (_0x24d166) {
      _0x4a640e(_0x258098);
      if (_0x24d166 !== _0x24d166 + 0 && _0x24d166 !== "longjmp") {
        throw _0x24d166;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x30f38d(_0xa5f3fd) {
    var _0x43e934 = _0x212590();
    try {
      return _0x534172(_0xa5f3fd);
    } catch (_0x327f30) {
      _0x4a640e(_0x43e934);
      if (_0x327f30 !== _0x327f30 + 0 && _0x327f30 !== "longjmp") {
        throw _0x327f30;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x13661c(_0x39a701, _0x5db332, _0x4c7091, _0x232b21, _0x127534, _0x3ac03c, _0x237e73, _0x2b43b7) {
    var _0x309f1e = _0x212590();
    try {
      return _0x191c1b(_0x39a701, _0x5db332, _0x4c7091, _0x232b21, _0x127534, _0x3ac03c, _0x237e73, _0x2b43b7);
    } catch (_0x18a3a3) {
      _0x4a640e(_0x309f1e);
      if (_0x18a3a3 !== _0x18a3a3 + 0 && _0x18a3a3 !== "longjmp") {
        throw _0x18a3a3;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x34cd57(_0x18a653, _0x70b55d, _0x2d44bf, _0x1082b0, _0x2c61e5, _0x4b4acc) {
    var _0x3de419 = _0x212590();
    try {
      _0x59a556(_0x18a653, _0x70b55d, _0x2d44bf, _0x1082b0, _0x2c61e5, _0x4b4acc);
    } catch (_0x28d481) {
      _0x4a640e(_0x3de419);
      if (_0x28d481 !== _0x28d481 + 0 && _0x28d481 !== "longjmp") {
        throw _0x28d481;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0xf1c69f(_0x40f5d6, _0x5e1233, _0x11e259, _0x47c192, _0x1e6265, _0x4c1a6c, _0x286a45) {
    var _0x39a136 = _0x212590();
    try {
      return _0x442dab(_0x40f5d6, _0x5e1233, _0x11e259, _0x47c192, _0x1e6265, _0x4c1a6c, _0x286a45);
    } catch (_0xa19f8a) {
      _0x4a640e(_0x39a136);
      if (_0xa19f8a !== _0xa19f8a + 0 && _0xa19f8a !== "longjmp") {
        throw _0xa19f8a;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x324695(_0x47759e, _0x44e819, _0x4422b1, _0x386db8, _0x49f012, _0x4e9793, _0x217735, _0x5b1f09) {
    var _0x3c6e8a = _0x212590();
    try {
      _0x569ace(_0x47759e, _0x44e819, _0x4422b1, _0x386db8, _0x49f012, _0x4e9793, _0x217735, _0x5b1f09);
    } catch (_0x21b762) {
      _0x4a640e(_0x3c6e8a);
      if (_0x21b762 !== _0x21b762 + 0 && _0x21b762 !== "longjmp") {
        throw _0x21b762;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0xc65f64(_0x1b0389, _0x3957e8, _0x33477b, _0x2049fc, _0x155f98, _0x1fdcc6, _0x3d9222) {
    var _0x512757 = _0x212590();
    try {
      _0x9f021d(_0x1b0389, _0x3957e8, _0x33477b, _0x2049fc, _0x155f98, _0x1fdcc6, _0x3d9222);
    } catch (_0x888b10) {
      _0x4a640e(_0x512757);
      if (_0x888b10 !== _0x888b10 + 0 && _0x888b10 !== "longjmp") {
        throw _0x888b10;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x2a3812(_0x38ab8c, _0x5d837a, _0x463781, _0x311da0, _0x5b3fe3, _0x4c6195, _0x4eae00, _0x5dcb50, _0x1df0e5) {
    var _0x3fb030 = _0x212590();
    try {
      return _0x3ba8de(_0x38ab8c, _0x5d837a, _0x463781, _0x311da0, _0x5b3fe3, _0x4c6195, _0x4eae00, _0x5dcb50, _0x1df0e5);
    } catch (_0xd41278) {
      _0x4a640e(_0x3fb030);
      if (_0xd41278 !== _0xd41278 + 0 && _0xd41278 !== "longjmp") {
        throw _0xd41278;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x40e644(_0x5aed4b, _0x2f463e, _0x53c679) {
    var _0x14476e = _0x212590();
    try {
      return _0x231537(_0x5aed4b, _0x2f463e, _0x53c679);
    } catch (_0x291fe1) {
      _0x4a640e(_0x14476e);
      if (_0x291fe1 !== _0x291fe1 + 0 && _0x291fe1 !== "longjmp") {
        throw _0x291fe1;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x521ab3(_0x493624, _0x10a70a, _0x539890, _0x4e8fc9, _0x29dd42) {
    var _0x20da84 = _0x212590();
    try {
      _0x470ad1(_0x493624, _0x10a70a, _0x539890, _0x4e8fc9, _0x29dd42);
    } catch (_0x47ea04) {
      _0x4a640e(_0x20da84);
      if (_0x47ea04 !== _0x47ea04 + 0 && _0x47ea04 !== "longjmp") {
        throw _0x47ea04;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4f818b(_0xfe4cbd, _0x32ccfb, _0x184d58, _0x212024, _0x108ed1) {
    var _0x16d261 = _0x212590();
    try {
      return _0x39ab4f(_0xfe4cbd, _0x32ccfb, _0x184d58, _0x212024, _0x108ed1);
    } catch (_0x5b0af1) {
      _0x4a640e(_0x16d261);
      if (_0x5b0af1 !== _0x5b0af1 + 0 && _0x5b0af1 !== "longjmp") {
        throw _0x5b0af1;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x249ad0(_0x146379, _0x922572) {
    var _0x1ddbf5 = _0x212590();
    try {
      return _0x44103f(_0x146379, _0x922572);
    } catch (_0x1f74b4) {
      _0x4a640e(_0x1ddbf5);
      if (_0x1f74b4 !== _0x1f74b4 + 0 && _0x1f74b4 !== "longjmp") {
        throw _0x1f74b4;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x389ede(_0x295428, _0x45e38e, _0x17eda6, _0x7682e2, _0x43c1e8, _0x3d9686, _0x4d93f6, _0x1810a4, _0x438d57) {
    var _0x8e5dd1 = _0x212590();
    try {
      _0x3543a3(_0x295428, _0x45e38e, _0x17eda6, _0x7682e2, _0x43c1e8, _0x3d9686, _0x4d93f6, _0x1810a4, _0x438d57);
    } catch (_0x4fbf0c) {
      _0x4a640e(_0x8e5dd1);
      if (_0x4fbf0c !== _0x4fbf0c + 0 && _0x4fbf0c !== "longjmp") {
        throw _0x4fbf0c;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x536127(_0x18e026, _0x452e80, _0x4b740a, _0x2c90c9, _0x24d305, _0x311133, _0x222fa4, _0x30fa4d, _0x318fd5, _0x106c74) {
    var _0x21779f = _0x212590();
    try {
      _0x4e3e7a(_0x18e026, _0x452e80, _0x4b740a, _0x2c90c9, _0x24d305, _0x311133, _0x222fa4, _0x30fa4d, _0x318fd5, _0x106c74);
    } catch (_0x48a7f0) {
      _0x4a640e(_0x21779f);
      if (_0x48a7f0 !== _0x48a7f0 + 0 && _0x48a7f0 !== "longjmp") {
        throw _0x48a7f0;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x566a3d(_0x55b0ae, _0x490b41, _0x540d3f, _0x156240) {
    var _0x2f2e4f = _0x212590();
    try {
      _0x316dc3(_0x55b0ae, _0x490b41, _0x540d3f, _0x156240);
    } catch (_0x3e8507) {
      _0x4a640e(_0x2f2e4f);
      if (_0x3e8507 !== _0x3e8507 + 0 && _0x3e8507 !== "longjmp") {
        throw _0x3e8507;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x54013e(_0x18c75b, _0x54a5a8, _0x3ff25b, _0x3c9166) {
    var _0x207a3c = _0x212590();
    try {
      _0x4f88e2(_0x18c75b, _0x54a5a8, _0x3ff25b, _0x3c9166);
    } catch (_0x1c7297) {
      _0x4a640e(_0x207a3c);
      if (_0x1c7297 !== _0x1c7297 + 0 && _0x1c7297 !== "longjmp") {
        throw _0x1c7297;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x40d361(_0x29dde1, _0x4c0095, _0x1702f2, _0x44899b, _0xb8e29a) {
    var _0x4c6258 = _0x212590();
    try {
      return _0x2df266(_0x29dde1, _0x4c0095, _0x1702f2, _0x44899b, _0xb8e29a);
    } catch (_0x3e06be) {
      _0x4a640e(_0x4c6258);
      if (_0x3e06be !== _0x3e06be + 0 && _0x3e06be !== "longjmp") {
        throw _0x3e06be;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x42c8a7(_0x4d7cca, _0x38a14b, _0x3d0edd, _0x8a5bdc, _0xd60894) {
    var _0x2e4b85 = _0x212590();
    try {
      return _0x3901dc(_0x4d7cca, _0x38a14b, _0x3d0edd, _0x8a5bdc, _0xd60894);
    } catch (_0xc359b8) {
      _0x4a640e(_0x2e4b85);
      if (_0xc359b8 !== _0xc359b8 + 0 && _0xc359b8 !== "longjmp") {
        throw _0xc359b8;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4249f0(_0x32dfca, _0x1e17cd, _0x26aba6, _0x134aa1, _0x28276c, _0x3847e4) {
    var _0xf371f3 = _0x212590();
    try {
      _0x41e820(_0x32dfca, _0x1e17cd, _0x26aba6, _0x134aa1, _0x28276c, _0x3847e4);
    } catch (_0x511a93) {
      _0x4a640e(_0xf371f3);
      if (_0x511a93 !== _0x511a93 + 0 && _0x511a93 !== "longjmp") {
        throw _0x511a93;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x567e76(_0x4b4bb8, _0x3604ce, _0x57e2e9, _0x436f4f, _0x59a0e3, _0x17a8a6, _0x214dec, _0x5e09f5, _0x4bd167) {
    var _0x6fed17 = _0x212590();
    try {
      _0x9eaaed(_0x4b4bb8, _0x3604ce, _0x57e2e9, _0x436f4f, _0x59a0e3, _0x17a8a6, _0x214dec, _0x5e09f5, _0x4bd167);
    } catch (_0x3e2d28) {
      _0x4a640e(_0x6fed17);
      if (_0x3e2d28 !== _0x3e2d28 + 0 && _0x3e2d28 !== "longjmp") {
        throw _0x3e2d28;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x452eae(_0x4c9a90, _0x3116fb, _0x2bb211, _0x10a3a2, _0x283a76, _0xfcfe2e) {
    var _0x3193a1 = _0x212590();
    try {
      _0x41414d(_0x4c9a90, _0x3116fb, _0x2bb211, _0x10a3a2, _0x283a76, _0xfcfe2e);
    } catch (_0x489c0c) {
      _0x4a640e(_0x3193a1);
      if (_0x489c0c !== _0x489c0c + 0 && _0x489c0c !== "longjmp") {
        throw _0x489c0c;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x2dfbbf(_0x55941d, _0x2b4f57, _0x1ab001, _0x561354, _0x1697ce, _0x5b60f9) {
    var _0x589ce7 = _0x212590();
    try {
      _0x3ee696(_0x55941d, _0x2b4f57, _0x1ab001, _0x561354, _0x1697ce, _0x5b60f9);
    } catch (_0x3359f2) {
      _0x4a640e(_0x589ce7);
      if (_0x3359f2 !== _0x3359f2 + 0 && _0x3359f2 !== "longjmp") {
        throw _0x3359f2;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4246cc(_0x4bf4dc, _0x21fddd, _0x4ac217, _0x357cf3, _0x31d9bc, _0x16b4b) {
    var _0x24d126 = _0x212590();
    try {
      _0x21062c(_0x4bf4dc, _0x21fddd, _0x4ac217, _0x357cf3, _0x31d9bc, _0x16b4b);
    } catch (_0x691103) {
      _0x4a640e(_0x24d126);
      if (_0x691103 !== _0x691103 + 0 && _0x691103 !== "longjmp") {
        throw _0x691103;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x1d702f(_0x5ebf59, _0x5aa4cf, _0x220c32) {
    var _0x3e31e6 = _0x212590();
    try {
      return _0x561a5b(_0x5ebf59, _0x5aa4cf, _0x220c32);
    } catch (_0x2bbd6e) {
      _0x4a640e(_0x3e31e6);
      if (_0x2bbd6e !== _0x2bbd6e + 0 && _0x2bbd6e !== "longjmp") {
        throw _0x2bbd6e;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4ac58e(_0x4a8321, _0x171ad6, _0x5064a8, _0x30a231) {
    var _0x10fe6e = _0x212590();
    try {
      return _0x5c79ff(_0x4a8321, _0x171ad6, _0x5064a8, _0x30a231);
    } catch (_0x36cdd3) {
      _0x4a640e(_0x10fe6e);
      if (_0x36cdd3 !== _0x36cdd3 + 0 && _0x36cdd3 !== "longjmp") {
        throw _0x36cdd3;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4029b0(_0x3d5fd5, _0xb4dc05, _0x3bd64c, _0x4d7412, _0xf5a508) {
    var _0x1e227d = _0x212590();
    try {
      _0x84b756(_0x3d5fd5, _0xb4dc05, _0x3bd64c, _0x4d7412, _0xf5a508);
    } catch (_0xf1052c) {
      _0x4a640e(_0x1e227d);
      if (_0xf1052c !== _0xf1052c + 0 && _0xf1052c !== "longjmp") {
        throw _0xf1052c;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x54734e(_0x3816cd, _0x4ad635, _0x39a741, _0x5da428, _0x3c629b) {
    var _0x169300 = _0x212590();
    try {
      _0x4505e6(_0x3816cd, _0x4ad635, _0x39a741, _0x5da428, _0x3c629b);
    } catch (_0x22c5fb) {
      _0x4a640e(_0x169300);
      if (_0x22c5fb !== _0x22c5fb + 0 && _0x22c5fb !== "longjmp") {
        throw _0x22c5fb;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x1b847f(_0x2c66a4, _0x18ca5d) {
    var _0x20912a = _0x212590();
    try {
      return _0x3dbaf6(_0x2c66a4, _0x18ca5d);
    } catch (_0xb6a6e7) {
      _0x4a640e(_0x20912a);
      if (_0xb6a6e7 !== _0xb6a6e7 + 0 && _0xb6a6e7 !== "longjmp") {
        throw _0xb6a6e7;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x1a2fa2(_0x11af28, _0x5855e4, _0x4b2b63, _0x278e3b, _0x178d4c, _0x57a274, _0x4b8e23, _0x1d9164, _0x5ccf8b, _0x951915, _0x3cf9ac, _0x5c7509, _0x4b7e4f) {
    var _0x552eb5 = _0x212590();
    try {
      _0x4a5db1(_0x11af28, _0x5855e4, _0x4b2b63, _0x278e3b, _0x178d4c, _0x57a274, _0x4b8e23, _0x1d9164, _0x5ccf8b, _0x951915, _0x3cf9ac, _0x5c7509, _0x4b7e4f);
    } catch (_0x3f7bf0) {
      _0x4a640e(_0x552eb5);
      if (_0x3f7bf0 !== _0x3f7bf0 + 0 && _0x3f7bf0 !== "longjmp") {
        throw _0x3f7bf0;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x19375c(_0x43b26f, _0x1d66d0, _0x1bb54c, _0x307e57, _0x466227, _0x154e42) {
    var _0x414fa2 = _0x212590();
    try {
      _0x415854(_0x43b26f, _0x1d66d0, _0x1bb54c, _0x307e57, _0x466227, _0x154e42);
    } catch (_0x3626ab) {
      _0x4a640e(_0x414fa2);
      if (_0x3626ab !== _0x3626ab + 0 && _0x3626ab !== "longjmp") {
        throw _0x3626ab;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x1e5bba(_0x4485b6, _0x31885d, _0x2a8dd2, _0x4a6428, _0x4af8f9, _0x44db9b, _0x19c79c) {
    var _0xe89eb5 = _0x212590();
    try {
      _0x584fc5(_0x4485b6, _0x31885d, _0x2a8dd2, _0x4a6428, _0x4af8f9, _0x44db9b, _0x19c79c);
    } catch (_0x20cfc7) {
      _0x4a640e(_0xe89eb5);
      if (_0x20cfc7 !== _0x20cfc7 + 0 && _0x20cfc7 !== "longjmp") {
        throw _0x20cfc7;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4b6cb4(_0x29da76, _0x2d7f16, _0x443ae9) {
    var _0x1ca6b3 = _0x212590();
    try {
      return _0x11e001(_0x29da76, _0x2d7f16, _0x443ae9);
    } catch (_0x5bf830) {
      _0x4a640e(_0x1ca6b3);
      if (_0x5bf830 !== _0x5bf830 + 0 && _0x5bf830 !== "longjmp") {
        throw _0x5bf830;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x1369f9(_0x52ec2d, _0xcd9997, _0x142841, _0x26c3ec, _0x3c86f3, _0x548289) {
    var _0x2536a6 = _0x212590();
    try {
      return _0x3f1352(_0x52ec2d, _0xcd9997, _0x142841, _0x26c3ec, _0x3c86f3, _0x548289);
    } catch (_0x53f203) {
      _0x4a640e(_0x2536a6);
      if (_0x53f203 !== _0x53f203 + 0 && _0x53f203 !== "longjmp") {
        throw _0x53f203;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x7e88fa(_0x483706, _0x104093, _0x37cdd3, _0x206f96, _0xd4d0f2, _0x3c9301) {
    var _0x5dd712 = _0x212590();
    try {
      return _0x499d5d(_0x483706, _0x104093, _0x37cdd3, _0x206f96, _0xd4d0f2, _0x3c9301);
    } catch (_0x1500cf) {
      _0x4a640e(_0x5dd712);
      if (_0x1500cf !== _0x1500cf + 0 && _0x1500cf !== "longjmp") {
        throw _0x1500cf;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x53c1cd(_0xc9bd7, _0x505df9, _0x492ab9, _0x532e5e, _0x10626f, _0x4d96af, _0x17c02e, _0x699790, _0x417340, _0x51cdc4, _0xc3ac90) {
    var _0x45a72c = _0x212590();
    try {
      return _0x239f91(_0xc9bd7, _0x505df9, _0x492ab9, _0x532e5e, _0x10626f, _0x4d96af, _0x17c02e, _0x699790, _0x417340, _0x51cdc4, _0xc3ac90);
    } catch (_0x33bebf) {
      _0x4a640e(_0x45a72c);
      if (_0x33bebf !== _0x33bebf + 0 && _0x33bebf !== "longjmp") {
        throw _0x33bebf;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x19cb78(_0x549663, _0x2bedc7, _0x1c3db4, _0x2006c6, _0x61eb3a, _0xa8b119, _0x3457db, _0x1a268c) {
    var _0x1b3034 = _0x212590();
    try {
      _0x270ab8(_0x549663, _0x2bedc7, _0x1c3db4, _0x2006c6, _0x61eb3a, _0xa8b119, _0x3457db, _0x1a268c);
    } catch (_0x3c55f5) {
      _0x4a640e(_0x1b3034);
      if (_0x3c55f5 !== _0x3c55f5 + 0 && _0x3c55f5 !== "longjmp") {
        throw _0x3c55f5;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x52d5f0(_0x263b22, _0x244b18, _0x1fe13c, _0x240f64, _0xa6eb02, _0xdf8897, _0x459323, _0x12f518, _0x36cd40, _0x524102) {
    var _0x33561b = _0x212590();
    try {
      return _0x59f7c3(_0x263b22, _0x244b18, _0x1fe13c, _0x240f64, _0xa6eb02, _0xdf8897, _0x459323, _0x12f518, _0x36cd40, _0x524102);
    } catch (_0x29b8a9) {
      _0x4a640e(_0x33561b);
      if (_0x29b8a9 !== _0x29b8a9 + 0 && _0x29b8a9 !== "longjmp") {
        throw _0x29b8a9;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x5be7a4(_0x505c8e, _0x34e49e, _0x290c63) {
    var _0x499167 = _0x212590();
    try {
      return _0x172afc(_0x505c8e, _0x34e49e, _0x290c63);
    } catch (_0x15da6c) {
      _0x4a640e(_0x499167);
      if (_0x15da6c !== _0x15da6c + 0 && _0x15da6c !== "longjmp") {
        throw _0x15da6c;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x3d611c(_0x311b76, _0x3ee200, _0x447c24) {
    var _0x194637 = _0x212590();
    try {
      return _0x429145(_0x311b76, _0x3ee200, _0x447c24);
    } catch (_0x59083e) {
      _0x4a640e(_0x194637);
      if (_0x59083e !== _0x59083e + 0 && _0x59083e !== "longjmp") {
        throw _0x59083e;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x44f25b(_0x54ca4a, _0xe37ce5, _0x24fea, _0x1f4482, _0x239b76, _0x3a6a6c, _0x1503c9, _0x414e2e, _0x524eaa, _0x4228ea, _0x310cc, _0x1360ed, _0xdf011a, _0x208a96) {
    var _0x5bf253 = _0x212590();
    try {
      _0x5e33f7(_0x54ca4a, _0xe37ce5, _0x24fea, _0x1f4482, _0x239b76, _0x3a6a6c, _0x1503c9, _0x414e2e, _0x524eaa, _0x4228ea, _0x310cc, _0x1360ed, _0xdf011a, _0x208a96);
    } catch (_0x262955) {
      _0x4a640e(_0x5bf253);
      if (_0x262955 !== _0x262955 + 0 && _0x262955 !== "longjmp") {
        throw _0x262955;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x413773(_0x43a668, _0x57e984, _0x910cd9, _0x12eeb7, _0x2b33cd, _0x13578b, _0xa63a7e, _0x2537b6, _0x148653, _0x140b0f, _0x45284a) {
    var _0x1f85dd = _0x212590();
    try {
      _0x5e0b5a(_0x43a668, _0x57e984, _0x910cd9, _0x12eeb7, _0x2b33cd, _0x13578b, _0xa63a7e, _0x2537b6, _0x148653, _0x140b0f, _0x45284a);
    } catch (_0x1258e7) {
      _0x4a640e(_0x1f85dd);
      if (_0x1258e7 !== _0x1258e7 + 0 && _0x1258e7 !== "longjmp") {
        throw _0x1258e7;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x1a7f24(_0xa3b4ea, _0x43766a, _0x2f8823, _0x1a0ec6) {
    var _0x15a0f4 = _0x212590();
    try {
      return _0x287565(_0xa3b4ea, _0x43766a, _0x2f8823, _0x1a0ec6);
    } catch (_0xa588d7) {
      _0x4a640e(_0x15a0f4);
      if (_0xa588d7 !== _0xa588d7 + 0 && _0xa588d7 !== "longjmp") {
        throw _0xa588d7;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0xd34ffd(_0x5db7c4, _0x4ad1b6, _0x22c043, _0x17a862) {
    var _0xa1de01 = _0x212590();
    try {
      return _0x339da6(_0x5db7c4, _0x4ad1b6, _0x22c043, _0x17a862);
    } catch (_0x285537) {
      _0x4a640e(_0xa1de01);
      if (_0x285537 !== _0x285537 + 0 && _0x285537 !== "longjmp") {
        throw _0x285537;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x2f275a(_0x526c7e, _0x523de6, _0x84dab, _0x3d537a) {
    var _0x21f1e9 = _0x212590();
    try {
      return _0x1d1a3e(_0x526c7e, _0x523de6, _0x84dab, _0x3d537a);
    } catch (_0x48d773) {
      _0x4a640e(_0x21f1e9);
      if (_0x48d773 !== _0x48d773 + 0 && _0x48d773 !== "longjmp") {
        throw _0x48d773;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x41bb8c(_0x297e02, _0x4b5e6d, _0x21585c, _0x513fea, _0x119b56, _0x3775dd) {
    var _0x3a170b = _0x212590();
    try {
      return _0x2ec48d(_0x297e02, _0x4b5e6d, _0x21585c, _0x513fea, _0x119b56, _0x3775dd);
    } catch (_0x1dbc53) {
      _0x4a640e(_0x3a170b);
      if (_0x1dbc53 !== _0x1dbc53 + 0 && _0x1dbc53 !== "longjmp") {
        throw _0x1dbc53;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x392938(_0x6a041f, _0x265a06, _0x42f9c9, _0x2db514, _0x2e3586, _0x2e57e0) {
    var _0x439795 = _0x212590();
    try {
      _0x2fbf04(_0x6a041f, _0x265a06, _0x42f9c9, _0x2db514, _0x2e3586, _0x2e57e0);
    } catch (_0xb2330d) {
      _0x4a640e(_0x439795);
      if (_0xb2330d !== _0xb2330d + 0 && _0xb2330d !== "longjmp") {
        throw _0xb2330d;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0xd57eaa(_0x3e8b82, _0x572e30, _0x302a12, _0x30f713, _0x36c02c, _0x3c6c75, _0x2be087, _0x26859b, _0x2e3a3d, _0x3d6c4a, _0x332835, _0x2e8234) {
    var _0x109a9d = _0x212590();
    try {
      _0x3b48e5(_0x3e8b82, _0x572e30, _0x302a12, _0x30f713, _0x36c02c, _0x3c6c75, _0x2be087, _0x26859b, _0x2e3a3d, _0x3d6c4a, _0x332835, _0x2e8234);
    } catch (_0x2d9c9a) {
      _0x4a640e(_0x109a9d);
      if (_0x2d9c9a !== _0x2d9c9a + 0 && _0x2d9c9a !== "longjmp") {
        throw _0x2d9c9a;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x3094c3(_0x2e31b4, _0x18a1f5, _0x41fa63, _0x400202, _0x3aefd2, _0x2263e3, _0x3355ec) {
    var _0x5631e0 = _0x212590();
    try {
      _0x22d3af(_0x2e31b4, _0x18a1f5, _0x41fa63, _0x400202, _0x3aefd2, _0x2263e3, _0x3355ec);
    } catch (_0x42539d) {
      _0x4a640e(_0x5631e0);
      if (_0x42539d !== _0x42539d + 0 && _0x42539d !== "longjmp") {
        throw _0x42539d;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0xbbdaba(_0x625914, _0x53a214, _0x115f7e, _0x489c07, _0x570761) {
    var _0x1f7c15 = _0x212590();
    try {
      _0x23dbbe(_0x625914, _0x53a214, _0x115f7e, _0x489c07, _0x570761);
    } catch (_0x108c8d) {
      _0x4a640e(_0x1f7c15);
      if (_0x108c8d !== _0x108c8d + 0 && _0x108c8d !== "longjmp") {
        throw _0x108c8d;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x26eec2(_0x412e21, _0x4760dc, _0x21a24e, _0x56a796, _0x1225a, _0x54ed43, _0x30f69b) {
    var _0x330021 = _0x212590();
    try {
      _0x1448a2(_0x412e21, _0x4760dc, _0x21a24e, _0x56a796, _0x1225a, _0x54ed43, _0x30f69b);
    } catch (_0x5ba250) {
      _0x4a640e(_0x330021);
      if (_0x5ba250 !== _0x5ba250 + 0 && _0x5ba250 !== "longjmp") {
        throw _0x5ba250;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x3ebd22(_0x38b1ad, _0x42e541, _0x532047, _0x5e1acc, _0x3f8576, _0x3d9314, _0x4b84ae, _0x33e4db) {
    var _0xe5aa32 = _0x212590();
    try {
      _0x3b6842(_0x38b1ad, _0x42e541, _0x532047, _0x5e1acc, _0x3f8576, _0x3d9314, _0x4b84ae, _0x33e4db);
    } catch (_0x3c4eb2) {
      _0x4a640e(_0xe5aa32);
      if (_0x3c4eb2 !== _0x3c4eb2 + 0 && _0x3c4eb2 !== "longjmp") {
        throw _0x3c4eb2;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x5cd611(_0x376520, _0x1cf867, _0x1cac96, _0x2647af, _0x45b293, _0x29c464, _0x21c974, _0x37e8d3, _0x71008a) {
    var _0x3f2d9d = _0x212590();
    try {
      _0x4d498f(_0x376520, _0x1cf867, _0x1cac96, _0x2647af, _0x45b293, _0x29c464, _0x21c974, _0x37e8d3, _0x71008a);
    } catch (_0x4ac977) {
      _0x4a640e(_0x3f2d9d);
      if (_0x4ac977 !== _0x4ac977 + 0 && _0x4ac977 !== "longjmp") {
        throw _0x4ac977;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4915df(_0x83d5c6, _0x15aa37, _0x58b86d, _0x4bd5d0, _0x5c21ca, _0x352d16, _0x1c4372, _0x3afe29, _0xb45acf) {
    var _0x4a3cb2 = _0x212590();
    try {
      _0x252510(_0x83d5c6, _0x15aa37, _0x58b86d, _0x4bd5d0, _0x5c21ca, _0x352d16, _0x1c4372, _0x3afe29, _0xb45acf);
    } catch (_0x2b386c) {
      _0x4a640e(_0x4a3cb2);
      if (_0x2b386c !== _0x2b386c + 0 && _0x2b386c !== "longjmp") {
        throw _0x2b386c;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x2c2493(_0x217f46, _0x44563d, _0x3f9c32, _0xd12955, _0x3a9180) {
    var _0x20ab9d = _0x212590();
    try {
      _0x1f1c54(_0x217f46, _0x44563d, _0x3f9c32, _0xd12955, _0x3a9180);
    } catch (_0x1b506f) {
      _0x4a640e(_0x20ab9d);
      if (_0x1b506f !== _0x1b506f + 0 && _0x1b506f !== "longjmp") {
        throw _0x1b506f;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x58e690(_0x462f8c, _0x187bb9, _0x524213, _0x527697, _0x177035) {
    var _0x318170 = _0x212590();
    try {
      return _0x25e05b(_0x462f8c, _0x187bb9, _0x524213, _0x527697, _0x177035);
    } catch (_0x2db074) {
      _0x4a640e(_0x318170);
      if (_0x2db074 !== _0x2db074 + 0 && _0x2db074 !== "longjmp") {
        throw _0x2db074;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x608152(_0x572162, _0xe5d810, _0x134ec2) {
    var _0x15ed67 = _0x212590();
    try {
      _0x2fbcde(_0x572162, _0xe5d810, _0x134ec2);
    } catch (_0x404b84) {
      _0x4a640e(_0x15ed67);
      if (_0x404b84 !== _0x404b84 + 0 && _0x404b84 !== "longjmp") {
        throw _0x404b84;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x52715b(_0x45e435, _0x632bd9, _0x26bf7d, _0x150d11, _0x8b20b1, _0xbeaa36, _0x3ca2b9) {
    var _0x5124d4 = _0x212590();
    try {
      _0x2fd350(_0x45e435, _0x632bd9, _0x26bf7d, _0x150d11, _0x8b20b1, _0xbeaa36, _0x3ca2b9);
    } catch (_0x3809ca) {
      _0x4a640e(_0x5124d4);
      if (_0x3809ca !== _0x3809ca + 0 && _0x3809ca !== "longjmp") {
        throw _0x3809ca;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x3e33bc(_0x14c8a8, _0x4d84de, _0x188586, _0x58a685, _0x93d381) {
    var _0x1e13c4 = _0x212590();
    try {
      _0x3ef535(_0x14c8a8, _0x4d84de, _0x188586, _0x58a685, _0x93d381);
    } catch (_0x3ad4ab) {
      _0x4a640e(_0x1e13c4);
      if (_0x3ad4ab !== _0x3ad4ab + 0 && _0x3ad4ab !== "longjmp") {
        throw _0x3ad4ab;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x414c5a(_0xbd05fd, _0x450d4a, _0x58be15, _0x1cd5fb, _0xe1d094, _0x19913c, _0x3580a1, _0x5eb64f, _0x255d03, _0x440492, _0x39442d, _0x5362f0) {
    var _0xc310a = _0x212590();
    try {
      return _0x2fdc3e(_0xbd05fd, _0x450d4a, _0x58be15, _0x1cd5fb, _0xe1d094, _0x19913c, _0x3580a1, _0x5eb64f, _0x255d03, _0x440492, _0x39442d, _0x5362f0);
    } catch (_0x24c32f) {
      _0x4a640e(_0xc310a);
      if (_0x24c32f !== _0x24c32f + 0 && _0x24c32f !== "longjmp") {
        throw _0x24c32f;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x17a85e(_0x154ce9, _0x3077ed, _0x59f2ef, _0x3b6c6b, _0x5b1eb2, _0x2cfa1f, _0xfb2a75, _0xa040b3, _0xfed191) {
    var _0x5ebab7 = _0x212590();
    try {
      _0x211335(_0x154ce9, _0x3077ed, _0x59f2ef, _0x3b6c6b, _0x5b1eb2, _0x2cfa1f, _0xfb2a75, _0xa040b3, _0xfed191);
    } catch (_0x178d1e) {
      _0x4a640e(_0x5ebab7);
      if (_0x178d1e !== _0x178d1e + 0 && _0x178d1e !== "longjmp") {
        throw _0x178d1e;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x22a7f2(_0x105eef, _0xaf6b3, _0x59d9e3, _0x52b992, _0x4ae4a9) {
    var _0x2b08d2 = _0x212590();
    try {
      return _0x46e3f6(_0x105eef, _0xaf6b3, _0x59d9e3, _0x52b992, _0x4ae4a9);
    } catch (_0x26f9fa) {
      _0x4a640e(_0x2b08d2);
      if (_0x26f9fa !== _0x26f9fa + 0 && _0x26f9fa !== "longjmp") {
        throw _0x26f9fa;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4ab789(_0x1c802a, _0x9e007c, _0x4953a7, _0x164212, _0x5ac72e) {
    var _0x1d929b = _0x212590();
    try {
      return _0x4b377e(_0x1c802a, _0x9e007c, _0x4953a7, _0x164212, _0x5ac72e);
    } catch (_0x35834a) {
      _0x4a640e(_0x1d929b);
      if (_0x35834a !== _0x35834a + 0 && _0x35834a !== "longjmp") {
        throw _0x35834a;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x212006(_0x47e3b8, _0x3e4c1e, _0x95120c, _0x60a3b3, _0x4c6b8c, _0x30d298, _0x2fc013, _0x3e1f25, _0x2d6d2e, _0x471fd6, _0x2a9aec, _0x11990e) {
    var _0x555440 = _0x212590();
    try {
      _0x11fbf0(_0x47e3b8, _0x3e4c1e, _0x95120c, _0x60a3b3, _0x4c6b8c, _0x30d298, _0x2fc013, _0x3e1f25, _0x2d6d2e, _0x471fd6, _0x2a9aec, _0x11990e);
    } catch (_0x18535d) {
      _0x4a640e(_0x555440);
      if (_0x18535d !== _0x18535d + 0 && _0x18535d !== "longjmp") {
        throw _0x18535d;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x569c2b(_0x2ad161, _0x3618b4, _0x4a5879, _0x2e416d, _0xaf151d, _0x119453, _0x79adb8, _0x346cac, _0x9d4cb1, _0x10f2b8, _0x30a7d4, _0x31c893, _0x51d7b7) {
    var _0x23ec5f = _0x212590();
    try {
      return _0x49a5cf(_0x2ad161, _0x3618b4, _0x4a5879, _0x2e416d, _0xaf151d, _0x119453, _0x79adb8, _0x346cac, _0x9d4cb1, _0x10f2b8, _0x30a7d4, _0x31c893, _0x51d7b7);
    } catch (_0x42d674) {
      _0x4a640e(_0x23ec5f);
      if (_0x42d674 !== _0x42d674 + 0 && _0x42d674 !== "longjmp") {
        throw _0x42d674;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x2549bc(_0x487b12, _0x25b61c, _0x414bcd, _0x13a5b0, _0x5027ba) {
    var _0x1834ea = _0x212590();
    try {
      _0x527fc7(_0x487b12, _0x25b61c, _0x414bcd, _0x13a5b0, _0x5027ba);
    } catch (_0x5aaf9a) {
      _0x4a640e(_0x1834ea);
      if (_0x5aaf9a !== _0x5aaf9a + 0 && _0x5aaf9a !== "longjmp") {
        throw _0x5aaf9a;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4549be(_0x394293, _0x51683e, _0x3fe4ec, _0x443d57, _0x157940, _0x43405f, _0x11a92b, _0x577e8c, _0x4dce5b) {
    var _0x2d9654 = _0x212590();
    try {
      _0x5e8712(_0x394293, _0x51683e, _0x3fe4ec, _0x443d57, _0x157940, _0x43405f, _0x11a92b, _0x577e8c, _0x4dce5b);
    } catch (_0x199c39) {
      _0x4a640e(_0x2d9654);
      if (_0x199c39 !== _0x199c39 + 0 && _0x199c39 !== "longjmp") {
        throw _0x199c39;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x1bfbed(_0x222207, _0x305c4a, _0x422153, _0x3ab383) {
    var _0x4e03fc = _0x212590();
    try {
      return _0x1a5a76(_0x222207, _0x305c4a, _0x422153, _0x3ab383);
    } catch (_0x73680a) {
      _0x4a640e(_0x4e03fc);
      if (_0x73680a !== _0x73680a + 0 && _0x73680a !== "longjmp") {
        throw _0x73680a;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x32470a(_0x5bd5d4, _0x3f19ee, _0x246ebc, _0x426c21, _0x4cc83d, _0x2607ce, _0xf7f766, _0x3d87a5, _0x1982b1, _0x104bed, _0xe41fb0, _0xac9af2) {
    var _0x2ec22c = _0x212590();
    try {
      _0x40701c(_0x5bd5d4, _0x3f19ee, _0x246ebc, _0x426c21, _0x4cc83d, _0x2607ce, _0xf7f766, _0x3d87a5, _0x1982b1, _0x104bed, _0xe41fb0, _0xac9af2);
    } catch (_0x5d4168) {
      _0x4a640e(_0x2ec22c);
      if (_0x5d4168 !== _0x5d4168 + 0 && _0x5d4168 !== "longjmp") {
        throw _0x5d4168;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x5a87c6(_0x49604f, _0x5e2bc4, _0x9d161, _0x223b31, _0x39fe88, _0x409e0d) {
    var _0x4a181d = _0x212590();
    try {
      return _0x2be823(_0x49604f, _0x5e2bc4, _0x9d161, _0x223b31, _0x39fe88, _0x409e0d);
    } catch (_0x3d4c11) {
      _0x4a640e(_0x4a181d);
      if (_0x3d4c11 !== _0x3d4c11 + 0 && _0x3d4c11 !== "longjmp") {
        throw _0x3d4c11;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x54dde1(_0x6d9b32, _0x260f62, _0x46ff72, _0x48b6d5, _0x51fc16, _0x1d37aa, _0x27d106, _0x5667ce, _0x43979f, _0x4a10c3, _0xfe8ed0) {
    var _0x54238f = _0x212590();
    try {
      return _0x184951(_0x6d9b32, _0x260f62, _0x46ff72, _0x48b6d5, _0x51fc16, _0x1d37aa, _0x27d106, _0x5667ce, _0x43979f, _0x4a10c3, _0xfe8ed0);
    } catch (_0x1af019) {
      _0x4a640e(_0x54238f);
      if (_0x1af019 !== _0x1af019 + 0 && _0x1af019 !== "longjmp") {
        throw _0x1af019;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x23b4ad(_0x239bda, _0x2d0b57, _0x81a038, _0x39b94c, _0x1e30f0, _0x122ba0, _0x4e61e5) {
    var _0x40b7ea = _0x212590();
    try {
      return _0x45af08(_0x239bda, _0x2d0b57, _0x81a038, _0x39b94c, _0x1e30f0, _0x122ba0, _0x4e61e5);
    } catch (_0x2d14f6) {
      _0x4a640e(_0x40b7ea);
      if (_0x2d14f6 !== _0x2d14f6 + 0 && _0x2d14f6 !== "longjmp") {
        throw _0x2d14f6;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x5ad6d0(_0x418de7, _0x2637d0, _0x36341c, _0x239ac0, _0x1fe4e1, _0x45c86a, _0x53caac) {
    var _0x117b6f = _0x212590();
    try {
      return _0x23d740(_0x418de7, _0x2637d0, _0x36341c, _0x239ac0, _0x1fe4e1, _0x45c86a, _0x53caac);
    } catch (_0x36aeea) {
      _0x4a640e(_0x117b6f);
      if (_0x36aeea !== _0x36aeea + 0 && _0x36aeea !== "longjmp") {
        throw _0x36aeea;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x439e4d(_0x3ccc31, _0x1abd0c, _0x300f72, _0x2a5cc4) {
    var _0x1f231b = _0x212590();
    try {
      _0x49e374(_0x3ccc31, _0x1abd0c, _0x300f72, _0x2a5cc4);
    } catch (_0x59f8bf) {
      _0x4a640e(_0x1f231b);
      if (_0x59f8bf !== _0x59f8bf + 0 && _0x59f8bf !== "longjmp") {
        throw _0x59f8bf;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x3ac0a2(_0x2d7516, _0x17f634, _0x19e9ac, _0x342299, _0x5a7931) {
    var _0x83b623 = _0x212590();
    try {
      return _0x1ca4a8(_0x2d7516, _0x17f634, _0x19e9ac, _0x342299, _0x5a7931);
    } catch (_0x1c99a7) {
      _0x4a640e(_0x83b623);
      if (_0x1c99a7 !== _0x1c99a7 + 0 && _0x1c99a7 !== "longjmp") {
        throw _0x1c99a7;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x44b600(_0x113529, _0x21ddf9, _0x1c5c76, _0x5cff68, _0x37a16d, _0x3cf3fb, _0x1c2dcd) {
    var _0x2bd001 = _0x212590();
    try {
      _0x3e1257(_0x113529, _0x21ddf9, _0x1c5c76, _0x5cff68, _0x37a16d, _0x3cf3fb, _0x1c2dcd);
    } catch (_0x723763) {
      _0x4a640e(_0x2bd001);
      if (_0x723763 !== _0x723763 + 0 && _0x723763 !== "longjmp") {
        throw _0x723763;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x47bdd8(_0x1cb52d, _0x2a96b9, _0x10fb23, _0x2b9048, _0x5947d2) {
    var _0x421b14 = _0x212590();
    try {
      return _0x241c40(_0x1cb52d, _0x2a96b9, _0x10fb23, _0x2b9048, _0x5947d2);
    } catch (_0x18a6f1) {
      _0x4a640e(_0x421b14);
      if (_0x18a6f1 !== _0x18a6f1 + 0 && _0x18a6f1 !== "longjmp") {
        throw _0x18a6f1;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x3e3d65(_0x3dce4d) {
    var _0x1bdcea = _0x212590();
    try {
      return _0x179bac(_0x3dce4d);
    } catch (_0x5550ca) {
      _0x4a640e(_0x1bdcea);
      if (_0x5550ca !== _0x5550ca + 0 && _0x5550ca !== "longjmp") {
        throw _0x5550ca;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4351c7(_0x56d13c, _0x5c5aed, _0xfc6188, _0x320bf2) {
    var _0xd1ef6b = _0x212590();
    try {
      return _0x379605(_0x56d13c, _0x5c5aed, _0xfc6188, _0x320bf2);
    } catch (_0x30df1e) {
      _0x4a640e(_0xd1ef6b);
      if (_0x30df1e !== _0x30df1e + 0 && _0x30df1e !== "longjmp") {
        throw _0x30df1e;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x29130f(_0x493e15, _0x28cec2, _0x5983f4, _0x55e919, _0x3d4680, _0x1f04e1, _0x29e838, _0x1dfb43) {
    var _0x60df32 = _0x212590();
    try {
      return _0x44f870(_0x493e15, _0x28cec2, _0x5983f4, _0x55e919, _0x3d4680, _0x1f04e1, _0x29e838, _0x1dfb43);
    } catch (_0x1022fd) {
      _0x4a640e(_0x60df32);
      if (_0x1022fd !== _0x1022fd + 0 && _0x1022fd !== "longjmp") {
        throw _0x1022fd;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x1a1d5d(_0xecdcd7, _0x30b705) {
    var _0x431dfc = _0x212590();
    try {
      return _0x51fc82(_0xecdcd7, _0x30b705);
    } catch (_0x28a90d) {
      _0x4a640e(_0x431dfc);
      if (_0x28a90d !== _0x28a90d + 0 && _0x28a90d !== "longjmp") {
        throw _0x28a90d;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x420204(_0x2f59b6, _0xbaa911, _0x43ded2) {
    var _0x1796d7 = _0x212590();
    try {
      return _0x178742(_0x2f59b6, _0xbaa911, _0x43ded2);
    } catch (_0x3069b7) {
      _0x4a640e(_0x1796d7);
      if (_0x3069b7 !== _0x3069b7 + 0 && _0x3069b7 !== "longjmp") {
        throw _0x3069b7;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4bd372(_0x1a44e3, _0x5e2cc4, _0x20c1df, _0x574cbd, _0x56d5f9, _0x3acd7e) {
    var _0x32d6ef = _0x212590();
    try {
      _0x547dc2(_0x1a44e3, _0x5e2cc4, _0x20c1df, _0x574cbd, _0x56d5f9, _0x3acd7e);
    } catch (_0x30489e) {
      _0x4a640e(_0x32d6ef);
      if (_0x30489e !== _0x30489e + 0 && _0x30489e !== "longjmp") {
        throw _0x30489e;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x44d949(_0x528805, _0x3cec22, _0x2c52a3, _0x1bda7a, _0x2e4d80) {
    var _0x57cd41 = _0x212590();
    try {
      _0x1b6182(_0x528805, _0x3cec22, _0x2c52a3, _0x1bda7a, _0x2e4d80);
    } catch (_0x350e0f) {
      _0x4a640e(_0x57cd41);
      if (_0x350e0f !== _0x350e0f + 0 && _0x350e0f !== "longjmp") {
        throw _0x350e0f;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x25cc5d(_0x1d60c1, _0x44d154, _0x301c22, _0x278822) {
    var _0x3bb5dd = _0x212590();
    try {
      return _0x36b2a2(_0x1d60c1, _0x44d154, _0x301c22, _0x278822);
    } catch (_0x262efb) {
      _0x4a640e(_0x3bb5dd);
      if (_0x262efb !== _0x262efb + 0 && _0x262efb !== "longjmp") {
        throw _0x262efb;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4ec2e7(_0x59dcb8, _0x5cca73, _0x17aa03, _0x102f23, _0x221c48, _0x44bef2, _0x288750) {
    var _0x3d7fec = _0x212590();
    try {
      return _0x10b1cb(_0x59dcb8, _0x5cca73, _0x17aa03, _0x102f23, _0x221c48, _0x44bef2, _0x288750);
    } catch (_0x1832de) {
      _0x4a640e(_0x3d7fec);
      if (_0x1832de !== _0x1832de + 0 && _0x1832de !== "longjmp") {
        throw _0x1832de;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x2af556(_0x2e887e, _0x1c7100, _0x3def6e, _0x379de9) {
    var _0x30e9dd = _0x212590();
    try {
      return _0x58fdf3(_0x2e887e, _0x1c7100, _0x3def6e, _0x379de9);
    } catch (_0x5b3ac7) {
      _0x4a640e(_0x30e9dd);
      if (_0x5b3ac7 !== _0x5b3ac7 + 0 && _0x5b3ac7 !== "longjmp") {
        throw _0x5b3ac7;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x14872c(_0x2f7387, _0x3e6c7c, _0x149096, _0x2aec56, _0x4d59fd, _0x1b87c9) {
    var _0x35436a = _0x212590();
    try {
      return _0x17ba3e(_0x2f7387, _0x3e6c7c, _0x149096, _0x2aec56, _0x4d59fd, _0x1b87c9);
    } catch (_0xbfb426) {
      _0x4a640e(_0x35436a);
      if (_0xbfb426 !== _0xbfb426 + 0 && _0xbfb426 !== "longjmp") {
        throw _0xbfb426;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x2671db(_0x11d6a4, _0x228438, _0xbd365a, _0x3eb019, _0x5d2ed0, _0x316cc5) {
    var _0x32ae3f = _0x212590();
    try {
      return _0x18037e(_0x11d6a4, _0x228438, _0xbd365a, _0x3eb019, _0x5d2ed0, _0x316cc5);
    } catch (_0x24ee72) {
      _0x4a640e(_0x32ae3f);
      if (_0x24ee72 !== _0x24ee72 + 0 && _0x24ee72 !== "longjmp") {
        throw _0x24ee72;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0xbbfd78(_0x5e4863, _0x2b6966, _0x27fe8d, _0x57d462, _0x5e9372, _0x59d548, _0x34cd68, _0x4c6c6c) {
    var _0x53564d = _0x212590();
    try {
      return _0x1eadcd(_0x5e4863, _0x2b6966, _0x27fe8d, _0x57d462, _0x5e9372, _0x59d548, _0x34cd68, _0x4c6c6c);
    } catch (_0x104523) {
      _0x4a640e(_0x53564d);
      if (_0x104523 !== _0x104523 + 0 && _0x104523 !== "longjmp") {
        throw _0x104523;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4fcd1d(_0x17ec86, _0xb8e613, _0x4b0bb8) {
    var _0x415e20 = _0x212590();
    try {
      return _0x2d6429(_0x17ec86, _0xb8e613, _0x4b0bb8);
    } catch (_0x41bee1) {
      _0x4a640e(_0x415e20);
      if (_0x41bee1 !== _0x41bee1 + 0 && _0x41bee1 !== "longjmp") {
        throw _0x41bee1;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x9f1f99(_0x1b9139, _0x74c9a6, _0x13c402, _0x230fa4, _0x15a8ce, _0x136507) {
    var _0x3df482 = _0x212590();
    try {
      return _0x5cbb56(_0x1b9139, _0x74c9a6, _0x13c402, _0x230fa4, _0x15a8ce, _0x136507);
    } catch (_0x4f0c06) {
      _0x4a640e(_0x3df482);
      if (_0x4f0c06 !== _0x4f0c06 + 0 && _0x4f0c06 !== "longjmp") {
        throw _0x4f0c06;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x264214(_0x4a5028, _0x4b6e2c, _0x2ea5ff, _0x1d8d6c) {
    var _0x237da4 = _0x212590();
    try {
      return _0x18e594(_0x4a5028, _0x4b6e2c, _0x2ea5ff, _0x1d8d6c);
    } catch (_0x493ce9) {
      _0x4a640e(_0x237da4);
      if (_0x493ce9 !== _0x493ce9 + 0 && _0x493ce9 !== "longjmp") {
        throw _0x493ce9;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x36c449(_0x5f3ed8, _0x3d53bb, _0xf9b7c4, _0x1882f9, _0x324e7e, _0x1cb76c) {
    var _0xe8a168 = _0x212590();
    try {
      _0x379b8a(_0x5f3ed8, _0x3d53bb, _0xf9b7c4, _0x1882f9, _0x324e7e, _0x1cb76c);
    } catch (_0x4238e4) {
      _0x4a640e(_0xe8a168);
      if (_0x4238e4 !== _0x4238e4 + 0 && _0x4238e4 !== "longjmp") {
        throw _0x4238e4;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x409f4a(_0x565262, _0xbd3777, _0x518a32, _0x8ee3d6, _0x3376f9) {
    var _0x15b20f = _0x212590();
    try {
      return _0x595988(_0x565262, _0xbd3777, _0x518a32, _0x8ee3d6, _0x3376f9);
    } catch (_0x1b0588) {
      _0x4a640e(_0x15b20f);
      if (_0x1b0588 !== _0x1b0588 + 0 && _0x1b0588 !== "longjmp") {
        throw _0x1b0588;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x5e5c1d(_0x415be5, _0x225b6d, _0x334d4f, _0xec7e21, _0x3ad39c) {
    var _0x183185 = _0x212590();
    try {
      return _0x57422a(_0x415be5, _0x225b6d, _0x334d4f, _0xec7e21, _0x3ad39c);
    } catch (_0x35dbca) {
      _0x4a640e(_0x183185);
      if (_0x35dbca !== _0x35dbca + 0 && _0x35dbca !== "longjmp") {
        throw _0x35dbca;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x46f9de(_0x2f6ed8, _0x4cd6c1, _0x362f73, _0x214af3, _0x478506, _0x12fd9c, _0x343782) {
    var _0x8cd36d = _0x212590();
    try {
      _0x14d136(_0x2f6ed8, _0x4cd6c1, _0x362f73, _0x214af3, _0x478506, _0x12fd9c, _0x343782);
    } catch (_0x4e788a) {
      _0x4a640e(_0x8cd36d);
      if (_0x4e788a !== _0x4e788a + 0 && _0x4e788a !== "longjmp") {
        throw _0x4e788a;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x315d4e(_0x54a967, _0x55852e, _0x3b8a67, _0xc4b8bd, _0x543b1e, _0x2ee68b) {
    var _0x5f5cb5 = _0x212590();
    try {
      _0x26e166(_0x54a967, _0x55852e, _0x3b8a67, _0xc4b8bd, _0x543b1e, _0x2ee68b);
    } catch (_0x26b55e) {
      _0x4a640e(_0x5f5cb5);
      if (_0x26b55e !== _0x26b55e + 0 && _0x26b55e !== "longjmp") {
        throw _0x26b55e;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x54f4b6(_0x18fa1e, _0x13d6bb, _0x291c4b, _0x2f190c, _0x320527, _0x7c34a, _0x4a167a, _0xe6adc4) {
    var _0x26ce93 = _0x212590();
    try {
      _0x350b51(_0x18fa1e, _0x13d6bb, _0x291c4b, _0x2f190c, _0x320527, _0x7c34a, _0x4a167a, _0xe6adc4);
    } catch (_0x52b549) {
      _0x4a640e(_0x26ce93);
      if (_0x52b549 !== _0x52b549 + 0 && _0x52b549 !== "longjmp") {
        throw _0x52b549;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x12fc8e(_0x5d8ae9, _0x1f90ea, _0x4aeea5, _0x1d0700, _0x2a9f75, _0x81ce46, _0x174d1c, _0x4947a7, _0x3a5bc8, _0x390896, _0x51e1df) {
    var _0x17a7af = _0x212590();
    try {
      return _0x510522(_0x5d8ae9, _0x1f90ea, _0x4aeea5, _0x1d0700, _0x2a9f75, _0x81ce46, _0x174d1c, _0x4947a7, _0x3a5bc8, _0x390896, _0x51e1df);
    } catch (_0x255de7) {
      _0x4a640e(_0x17a7af);
      if (_0x255de7 !== _0x255de7 + 0 && _0x255de7 !== "longjmp") {
        throw _0x255de7;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x1814fa(_0x22ffee, _0x176d10, _0x26fee9, _0x53549d, _0x527c10) {
    var _0x796504 = _0x212590();
    try {
      return _0x5177ef(_0x22ffee, _0x176d10, _0x26fee9, _0x53549d, _0x527c10);
    } catch (_0x161c78) {
      _0x4a640e(_0x796504);
      if (_0x161c78 !== _0x161c78 + 0 && _0x161c78 !== "longjmp") {
        throw _0x161c78;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x1fa663(_0x53f7d7, _0xc813b8, _0x59ce63, _0x34619e, _0x30896f, _0x9ff856, _0x1f23cc) {
    var _0x16c0e4 = _0x212590();
    try {
      return _0x12b18c(_0x53f7d7, _0xc813b8, _0x59ce63, _0x34619e, _0x30896f, _0x9ff856, _0x1f23cc);
    } catch (_0x4e3c4a) {
      _0x4a640e(_0x16c0e4);
      if (_0x4e3c4a !== _0x4e3c4a + 0 && _0x4e3c4a !== "longjmp") {
        throw _0x4e3c4a;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x195f13(_0x1c5ddf, _0x3b2efc, _0x25f4de, _0x513660, _0x1144f3) {
    var _0x57c957 = _0x212590();
    try {
      _0x21e141(_0x1c5ddf, _0x3b2efc, _0x25f4de, _0x513660, _0x1144f3);
    } catch (_0x20245c) {
      _0x4a640e(_0x57c957);
      if (_0x20245c !== _0x20245c + 0 && _0x20245c !== "longjmp") {
        throw _0x20245c;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x519cd7(_0x10df28, _0x2aaa0e, _0x1f8d38, _0x66c331, _0x39514f, _0x281e3a) {
    var _0x5cd696 = _0x212590();
    try {
      return _0x4a4ac6(_0x10df28, _0x2aaa0e, _0x1f8d38, _0x66c331, _0x39514f, _0x281e3a);
    } catch (_0x3ad41b) {
      _0x4a640e(_0x5cd696);
      if (_0x3ad41b !== _0x3ad41b + 0 && _0x3ad41b !== "longjmp") {
        throw _0x3ad41b;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x463fd9(_0x46d1c7, _0x5a5423, _0x595383, _0x1ad079, _0x43bc32, _0x2ccc4b, _0x524a23, _0x2f88e1, _0x544428) {
    var _0x5c3685 = _0x212590();
    try {
      _0x5a8668(_0x46d1c7, _0x5a5423, _0x595383, _0x1ad079, _0x43bc32, _0x2ccc4b, _0x524a23, _0x2f88e1, _0x544428);
    } catch (_0x3abc42) {
      _0x4a640e(_0x5c3685);
      if (_0x3abc42 !== _0x3abc42 + 0 && _0x3abc42 !== "longjmp") {
        throw _0x3abc42;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x42c423(_0x44fa16, _0x368654, _0x2119d7, _0x78a6d3, _0x325f4a, _0x2c5acb, _0xb0cc72) {
    var _0x1f3ca0 = _0x212590();
    try {
      return _0x10a53d(_0x44fa16, _0x368654, _0x2119d7, _0x78a6d3, _0x325f4a, _0x2c5acb, _0xb0cc72);
    } catch (_0x42fbce) {
      _0x4a640e(_0x1f3ca0);
      if (_0x42fbce !== _0x42fbce + 0 && _0x42fbce !== "longjmp") {
        throw _0x42fbce;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x414ad8(_0x87e209, _0x5bb25b, _0x49c00e, _0x4304ea, _0x2154ef, _0x15480b) {
    var _0x51dc29 = _0x212590();
    try {
      return _0x5f246f(_0x87e209, _0x5bb25b, _0x49c00e, _0x4304ea, _0x2154ef, _0x15480b);
    } catch (_0x363e5c) {
      _0x4a640e(_0x51dc29);
      if (_0x363e5c !== _0x363e5c + 0 && _0x363e5c !== "longjmp") {
        throw _0x363e5c;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x100e31(_0x336999, _0x17184f, _0x586d72, _0x45e682, _0x22cb21, _0x45cd80, _0x4643d5, _0x434966, _0xf08e3, _0x4c5ca5, _0x7c1d80, _0x423760, _0x89eb3f, _0x126cdd) {
    var _0x3b7e01 = _0x212590();
    try {
      _0x5804cf(_0x336999, _0x17184f, _0x586d72, _0x45e682, _0x22cb21, _0x45cd80, _0x4643d5, _0x434966, _0xf08e3, _0x4c5ca5, _0x7c1d80, _0x423760, _0x89eb3f, _0x126cdd);
    } catch (_0x4f3f63) {
      _0x4a640e(_0x3b7e01);
      if (_0x4f3f63 !== _0x4f3f63 + 0 && _0x4f3f63 !== "longjmp") {
        throw _0x4f3f63;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x3255be(_0x14eba0, _0x337689, _0xa9d339, _0x3d75f5) {
    var _0x7e9273 = _0x212590();
    try {
      return _0x44399a(_0x14eba0, _0x337689, _0xa9d339, _0x3d75f5);
    } catch (_0x3225b8) {
      _0x4a640e(_0x7e9273);
      if (_0x3225b8 !== _0x3225b8 + 0 && _0x3225b8 !== "longjmp") {
        throw _0x3225b8;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0xe97406(_0x319606, _0x19bb11, _0x35b4fb, _0x2b63e7, _0x3a10b8, _0x2b717d, _0x5358e9, _0x499282) {
    var _0x293af2 = _0x212590();
    try {
      _0x226503(_0x319606, _0x19bb11, _0x35b4fb, _0x2b63e7, _0x3a10b8, _0x2b717d, _0x5358e9, _0x499282);
    } catch (_0x3fa01b) {
      _0x4a640e(_0x293af2);
      if (_0x3fa01b !== _0x3fa01b + 0 && _0x3fa01b !== "longjmp") {
        throw _0x3fa01b;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x3443fa(_0x5ceefb, _0x3fb8c6, _0x25ceba, _0x4e4777, _0xa18d40, _0x522aa2, _0x5f3d6d) {
    var _0x530d65 = _0x212590();
    try {
      _0x111da9(_0x5ceefb, _0x3fb8c6, _0x25ceba, _0x4e4777, _0xa18d40, _0x522aa2, _0x5f3d6d);
    } catch (_0x346489) {
      _0x4a640e(_0x530d65);
      if (_0x346489 !== _0x346489 + 0 && _0x346489 !== "longjmp") {
        throw _0x346489;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x352220(_0x5ee588, _0x29267a, _0x13ed80, _0x505365, _0x32efea, _0x34fa2e, _0xe34514, _0x1377a8, _0x43b1d7) {
    var _0x550770 = _0x212590();
    try {
      _0x28fc23(_0x5ee588, _0x29267a, _0x13ed80, _0x505365, _0x32efea, _0x34fa2e, _0xe34514, _0x1377a8, _0x43b1d7);
    } catch (_0x39309e) {
      _0x4a640e(_0x550770);
      if (_0x39309e !== _0x39309e + 0 && _0x39309e !== "longjmp") {
        throw _0x39309e;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x27ea27(_0x562cf2, _0x5f212d, _0x1776a3, _0x1fbe12, _0x120b6b, _0x103a71, _0x5580a9, _0x3ff55b, _0xf793e9) {
    var _0x5bed0a = _0x212590();
    try {
      _0x3f8d5d(_0x562cf2, _0x5f212d, _0x1776a3, _0x1fbe12, _0x120b6b, _0x103a71, _0x5580a9, _0x3ff55b, _0xf793e9);
    } catch (_0x16f0a1) {
      _0x4a640e(_0x5bed0a);
      if (_0x16f0a1 !== _0x16f0a1 + 0 && _0x16f0a1 !== "longjmp") {
        throw _0x16f0a1;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x936bac(_0x37fb50, _0x55b194, _0xdf5386, _0x5de4c2, _0x3d9da9, _0x33e6fb, _0x1adcba) {
    var _0x4109ec = _0x212590();
    try {
      _0x53cb55(_0x37fb50, _0x55b194, _0xdf5386, _0x5de4c2, _0x3d9da9, _0x33e6fb, _0x1adcba);
    } catch (_0x4de241) {
      _0x4a640e(_0x4109ec);
      if (_0x4de241 !== _0x4de241 + 0 && _0x4de241 !== "longjmp") {
        throw _0x4de241;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x12a1fe(_0x5c1cdd, _0x34a1bc, _0x16ba0b, _0x5ac4f7, _0x118ac9, _0x313ea3, _0x4febf9) {
    var _0x11b9c0 = _0x212590();
    try {
      return _0x5c37ec(_0x5c1cdd, _0x34a1bc, _0x16ba0b, _0x5ac4f7, _0x118ac9, _0x313ea3, _0x4febf9);
    } catch (_0x4cc760) {
      _0x4a640e(_0x11b9c0);
      if (_0x4cc760 !== _0x4cc760 + 0 && _0x4cc760 !== "longjmp") {
        throw _0x4cc760;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0xe7b21b(_0x28e0ff, _0x112b28, _0x5dccea, _0xb98f34, _0x4c3ecc, _0x215994) {
    var _0x421bf2 = _0x212590();
    try {
      return _0x52849b(_0x28e0ff, _0x112b28, _0x5dccea, _0xb98f34, _0x4c3ecc, _0x215994);
    } catch (_0x172c4a) {
      _0x4a640e(_0x421bf2);
      if (_0x172c4a !== _0x172c4a + 0 && _0x172c4a !== "longjmp") {
        throw _0x172c4a;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x37f54a(_0x16e366, _0x4ad966, _0x31981f, _0x2dedb, _0x4264b6, _0x31a0a6) {
    var _0x3c4261 = _0x212590();
    try {
      return _0x5373f6(_0x16e366, _0x4ad966, _0x31981f, _0x2dedb, _0x4264b6, _0x31a0a6);
    } catch (_0x697357) {
      _0x4a640e(_0x3c4261);
      if (_0x697357 !== _0x697357 + 0 && _0x697357 !== "longjmp") {
        throw _0x697357;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4a3370(_0x30f1a2, _0x21e624, _0x41d5ae, _0x78ac03, _0x46345b, _0x492a30, _0x145855, _0x3451d9) {
    var _0x4a222c = _0x212590();
    try {
      _0x3e2129(_0x30f1a2, _0x21e624, _0x41d5ae, _0x78ac03, _0x46345b, _0x492a30, _0x145855, _0x3451d9);
    } catch (_0x56a102) {
      _0x4a640e(_0x4a222c);
      if (_0x56a102 !== _0x56a102 + 0 && _0x56a102 !== "longjmp") {
        throw _0x56a102;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x242096(_0x3e8b95, _0x54d663, _0x353e23, _0x2007c5, _0x387fd, _0x6e6e7d) {
    var _0x489edc = _0x212590();
    try {
      return _0x435a92(_0x3e8b95, _0x54d663, _0x353e23, _0x2007c5, _0x387fd, _0x6e6e7d);
    } catch (_0x24c3c6) {
      _0x4a640e(_0x489edc);
      if (_0x24c3c6 !== _0x24c3c6 + 0 && _0x24c3c6 !== "longjmp") {
        throw _0x24c3c6;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x10a580(_0x14d933, _0x5a8d23, _0x978a4a, _0x270a6d, _0x280627, _0x1e347a, _0x2127e2, _0x47c818, _0x1d6d51, _0x1dbd91, _0x223eac, _0x4a87e2) {
    var _0x358300 = _0x212590();
    try {
      return _0x4d1b7c(_0x14d933, _0x5a8d23, _0x978a4a, _0x270a6d, _0x280627, _0x1e347a, _0x2127e2, _0x47c818, _0x1d6d51, _0x1dbd91, _0x223eac, _0x4a87e2);
    } catch (_0x34d56b) {
      _0x4a640e(_0x358300);
      if (_0x34d56b !== _0x34d56b + 0 && _0x34d56b !== "longjmp") {
        throw _0x34d56b;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x58bbcb(_0x43b8f0, _0x681e7, _0x5ea2eb, _0x504a05) {
    var _0x29e798 = _0x212590();
    try {
      _0xd91db8(_0x43b8f0, _0x681e7, _0x5ea2eb, _0x504a05);
    } catch (_0x394484) {
      _0x4a640e(_0x29e798);
      if (_0x394484 !== _0x394484 + 0 && _0x394484 !== "longjmp") {
        throw _0x394484;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x2c3e62(_0x22dcb1, _0x21f023, _0xe5b0af, _0x47b826, _0x46b7e1, _0x5849f0) {
    var _0x3f4c48 = _0x212590();
    try {
      return _0x51cb65(_0x22dcb1, _0x21f023, _0xe5b0af, _0x47b826, _0x46b7e1, _0x5849f0);
    } catch (_0x3ce388) {
      _0x4a640e(_0x3f4c48);
      if (_0x3ce388 !== _0x3ce388 + 0 && _0x3ce388 !== "longjmp") {
        throw _0x3ce388;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x1b0696(_0x327fc1, _0x29def0, _0x3a6843, _0x38df8c, _0x3a0399, _0x5a3f82, _0x3ebdc5, _0x2406c3, _0x15b0ee, _0x342f5c) {
    var _0xf2dba7 = _0x212590();
    try {
      return _0xe8f71a(_0x327fc1, _0x29def0, _0x3a6843, _0x38df8c, _0x3a0399, _0x5a3f82, _0x3ebdc5, _0x2406c3, _0x15b0ee, _0x342f5c);
    } catch (_0x483822) {
      _0x4a640e(_0xf2dba7);
      if (_0x483822 !== _0x483822 + 0 && _0x483822 !== "longjmp") {
        throw _0x483822;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x5ab2ee(_0xd6a392, _0x4c4ca0, _0x159727, _0xa21b9e, _0x53bc04, _0x4e8f3c, _0xcff792, _0x12f887, _0x2461d2, _0x2e13f2, _0x2b9681, _0xda1b6a) {
    var _0x1f329c = _0x212590();
    try {
      return _0x26e7f0(_0xd6a392, _0x4c4ca0, _0x159727, _0xa21b9e, _0x53bc04, _0x4e8f3c, _0xcff792, _0x12f887, _0x2461d2, _0x2e13f2, _0x2b9681, _0xda1b6a);
    } catch (_0x444c7a) {
      _0x4a640e(_0x1f329c);
      if (_0x444c7a !== _0x444c7a + 0 && _0x444c7a !== "longjmp") {
        throw _0x444c7a;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x18e1f5(_0x4825c1, _0xe2b82, _0xa404af, _0x4f1d02, _0xe4ce37, _0x317622, _0x40f112, _0x1d198b, _0x20b50b, _0x25791b) {
    var _0x26c734 = _0x212590();
    try {
      return _0x35fe72(_0x4825c1, _0xe2b82, _0xa404af, _0x4f1d02, _0xe4ce37, _0x317622, _0x40f112, _0x1d198b, _0x20b50b, _0x25791b);
    } catch (_0x328fb4) {
      _0x4a640e(_0x26c734);
      if (_0x328fb4 !== _0x328fb4 + 0 && _0x328fb4 !== "longjmp") {
        throw _0x328fb4;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x39746f(_0x231c48, _0x2b20b6, _0x88cd40, _0x3c3231, _0x3ca7e9, _0x5e122e, _0x4d9db5, _0x107e7d, _0x341a16, _0x53acf9, _0x5a931d) {
    var _0x1a30e1 = _0x212590();
    try {
      _0x3d5008(_0x231c48, _0x2b20b6, _0x88cd40, _0x3c3231, _0x3ca7e9, _0x5e122e, _0x4d9db5, _0x107e7d, _0x341a16, _0x53acf9, _0x5a931d);
    } catch (_0x650335) {
      _0x4a640e(_0x1a30e1);
      if (_0x650335 !== _0x650335 + 0 && _0x650335 !== "longjmp") {
        throw _0x650335;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x4d91b4(_0x5797dd, _0x120289, _0x584239, _0x1049b2, _0x2294e0, _0x39bd8d, _0x1da539, _0x84b562) {
    var _0x39c896 = _0x212590();
    try {
      _0x45e94d(_0x5797dd, _0x120289, _0x584239, _0x1049b2, _0x2294e0, _0x39bd8d, _0x1da539, _0x84b562);
    } catch (_0x19885f) {
      _0x4a640e(_0x39c896);
      if (_0x19885f !== _0x19885f + 0 && _0x19885f !== "longjmp") {
        throw _0x19885f;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x327436(_0x38c65b, _0x37e28a, _0x27f375, _0x469506, _0x443472, _0x4bc455, _0x87c148, _0x1aaf11, _0xe7d1af, _0x5e8001, _0x9ae465) {
    var _0x71a6ac = _0x212590();
    try {
      _0x2b3275(_0x38c65b, _0x37e28a, _0x27f375, _0x469506, _0x443472, _0x4bc455, _0x87c148, _0x1aaf11, _0xe7d1af, _0x5e8001, _0x9ae465);
    } catch (_0x85a5d0) {
      _0x4a640e(_0x71a6ac);
      if (_0x85a5d0 !== _0x85a5d0 + 0 && _0x85a5d0 !== "longjmp") {
        throw _0x85a5d0;
      }
      _0x1dc1f2(1, 0);
    }
  }
  function _0x524722(_0x18e055, _0x16559e, _0x456584, _0x4feb9a, _0x3a8edd, _0x328f19, _0x35671e) {
    var _0x2c505b = _0x212590();
    try {
      return _0x3c4e90(_0x18e055, _0x16559e, _0x456584, _0x4feb9a, _0x3a8edd, _0x328f19, _0x35671e);
    } catch (_0x188ec5) {
      _0x4a640e(_0x2c505b);
      if (_0x188ec5 !== _0x188ec5 + 0 && _0x188ec5 !== "longjmp") {
        throw _0x188ec5;
      }
      _0x1dc1f2(1, 0);
    }
  }
  _0x5c0d54.ccall = _0x35bcc6;
  _0x5c0d54.cwrap = _0x49a24e;
  _0x5c0d54.stackTrace = _0x4e533e;
  _0x5c0d54.addRunDependency = _0x9df903;
  _0x5c0d54.removeRunDependency = _0x5ac12f;
  _0x5c0d54.FS_createPath = _0x453483.createPath;
  _0x5c0d54.FS_createDataFile = _0x453483.createDataFile;
  _0x5c0d54.stackTrace = _0x4e533e;
  var _0x31d729;
  function _0x5e5c06(_0x2d8a39) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x2d8a39 + ")";
    this.status = _0x2d8a39;
  }
  var _0x5d50ba = false;
  _0x1ef21c = function _0x475789() {
    if (!_0x31d729) {
      _0x2aa917();
    }
    if (!_0x31d729) {
      _0x1ef21c = _0x475789;
    }
  };
  function _0x1b8a0d(_0x38747b) {
    var _0x3c801b = _0x5c0d54._main;
    _0x38747b = _0x38747b || [];
    var _0x213ecb = _0x38747b.length + 1;
    var _0x41547c = _0x2b6616((_0x213ecb + 1) * 4);
    _0x5ce4f8[_0x41547c >> 2] = _0x2d0a5c(_0x428320);
    for (var _0x2c9a52 = 1; _0x2c9a52 < _0x213ecb; _0x2c9a52++) {
      _0x5ce4f8[(_0x41547c >> 2) + _0x2c9a52] = _0x2d0a5c(_0x38747b[_0x2c9a52 - 1]);
    }
    _0x5ce4f8[(_0x41547c >> 2) + _0x213ecb] = 0;
    try {
      var _0x186729 = _0x3c801b(_0x213ecb, _0x41547c);
      _0x4f5bfa(_0x186729, true);
    } catch (_0x1b5486) {
      if (_0x1b5486 instanceof _0x5e5c06) {
        return;
      } else if (_0x1b5486 == "unwind") {
        return;
      } else {
        var _0x5cad56 = _0x1b5486;
        if (_0x1b5486 && typeof _0x1b5486 === "object" && _0x1b5486.stack) {
          _0x5cad56 = [_0x1b5486, _0x1b5486.stack];
        }
        _0x33bd81("exception thrown: " + _0x5cad56);
        _0x4a5c9f(1, _0x1b5486);
      }
    } finally {
      _0x5d50ba = true;
    }
  }
  function _0x2aa917(_0x4cb0cb) {
    _0x4cb0cb = _0x4cb0cb || _0x24954b;
    if (_0x4100cb > 0) {
      return;
    }
    _0x3010b5();
    if (_0x4100cb > 0) {
      return;
    }
    function _0x51d5b9() {
      if (_0x31d729) {
        return;
      }
      _0x31d729 = true;
      _0x5c0d54.calledRun = true;
      if (_0x5114fe) {
        return;
      }
      _0x7e981c();
      _0x20c56b();
      if (_0x5c0d54.onRuntimeInitialized) {
        _0x5c0d54.onRuntimeInitialized();
      }
      if (_0x288ef2) {
        _0x1b8a0d(_0x4cb0cb);
      }
      _0x495082();
    }
    if (_0x5c0d54.setStatus) {
      _0x5c0d54.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0x5c0d54.setStatus("");
        }, 1);
        _0x51d5b9();
      }, 1);
    } else {
      _0x51d5b9();
    }
  }
  _0x5c0d54.run = _0x2aa917;
  function _0x4f5bfa(_0x390b43, _0x8142df) {
    _0x10a662 = _0x390b43;
    if (_0x8142df && _0x9b458f() && _0x390b43 === 0) {
      return;
    }
    if (_0x9b458f()) {} else {
      _0x57f1c5();
      if (_0x5c0d54.onExit) {
        _0x5c0d54.onExit(_0x390b43);
      }
      _0x5114fe = true;
    }
    _0x4a5c9f(_0x390b43, new _0x5e5c06(_0x390b43));
  }
  if (_0x5c0d54.preInit) {
    if (typeof _0x5c0d54.preInit == "function") {
      _0x5c0d54.preInit = [_0x5c0d54.preInit];
    }
    while (_0x5c0d54.preInit.length > 0) {
      _0x5c0d54.preInit.pop()();
    }
  }
  var _0x288ef2 = true;
  if (_0x5c0d54.noInitialRun) {
    _0x288ef2 = false;
  }
  _0x2aa917();
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
function gmdebugtime(_0x7c2c74) {
  console.log("_TIME_" + _0x7c2c74 + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0xb96024) {
  console.log(_0xb96024);
}
function gmEvent(_0x334539, _0x230d5c) {
  loadGMData(_0x334539, _0x230d5c);
}
function gmStartGame(_0x343357) {
  _0x343357();
}
function gmStartAds(_0x197a0d) {
  _0x197a0d();
}
let fireFPS = 0;
async function loadGMData(_0x1a59fb, _0x3298d1) {
  try {
    if (!config.buildAPI) {
      return;
    }
    if (!config.eventLog && _0x1a59fb != "document-ready" && _0x1a59fb != "start-game" && _0x1a59fb != "unload-game") {
      return;
    }
    if (_0x1a59fb == "fps") {
      try {
        let _0x43a9fd = _0x3298d1.split("|");
        if (_0x43a9fd.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x43a9fd[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x43a9fd[1]);
          }
        }
      } catch (_0x58f7ab) {
        console.log("Error extracting time from abc:", _0x58f7ab.message);
      }
    }
    let _0x2a074b = "";
    if (_0x3298d1) {
      _0x2a074b = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x3298d1));
    }
    _0x2a074b += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x2a074b += "&gid=" + config.gameId;
    if (_0x1a59fb == "ban-game" || _0x1a59fb == "document-ready" || _0x1a59fb == "start-game") {
      _0x2a074b += "&wtop=" + "escaperoad2d.io";
      _0x2a074b += "&hn=" + "https://games.1games.io";
      _0x2a074b += "&referrer=" + config.referrer;
    }
    let _0x35ea6d = "&data=" + btoa(_0x2a074b);
    let _0x53c843 = config.buildAPI + "?event=" + _0x1a59fb + _0x35ea6d;
    let _0x412e3c = new XMLHttpRequest();
    _0x412e3c.open("GET", _0x53c843);
    _0x412e3c.onreadystatechange = function () {
      if (_0x412e3c.readyState !== 4) {
        return;
      }
      if (_0x412e3c.status === 200) {
        console.log(_0x412e3c.responseText);
      } else {
        console.log("HTTP error", _0x412e3c.status, _0x412e3c.statusText);
      }
    };
    _0x412e3c.send();
  } catch (_0x2a04b6) {}
}
function xorEncryptMsg(_0x5350cd) {
  let _0x3966b1 = "gmdata@&!message@!3!@";
  let _0x9813e7 = "";
  for (let _0x40d795 = 0; _0x40d795 < _0x5350cd.length; _0x40d795++) {
    const _0x97d7e4 = _0x5350cd.charCodeAt(_0x40d795) ^ _0x3966b1.charCodeAt(_0x40d795 % _0x3966b1.length);
    _0x9813e7 += String.fromCharCode(_0x97d7e4);
  }
  return btoa(_0x9813e7);
}
function check_event_log() {
  const _0x1a2b26 = window.location.search;
  const _0x300405 = new URLSearchParams(_0x1a2b26);
  if (_0x300405.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x40e18f) {
  try {
    const _0xaa2a2d = eval(_0x40e18f);
    gmdebug("Result:", _0xaa2a2d);
    return _0xaa2a2d;
  } catch (_0x2818a8) {
    gmdebug("Error executing code:", _0x2818a8);
  }
}
window.addEventListener("beforeunload", function (_0x4c9a9a) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x429cc9 = "data@&@#$@#^FFgdfg!1estimate";
      let _0x2a1c81 = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x2f8a9d = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x1a55ec = _0x2a1c81;
      let _0xc2df23 = "";
      for (let _0x19d1b4 = 0; _0x19d1b4 < _0x2f8a9d.length; _0x19d1b4++) {
        const _0x2093fa = _0x2f8a9d.charCodeAt(_0x19d1b4) ^ _0x429cc9.charCodeAt(_0x19d1b4 % _0x429cc9.length);
        _0xc2df23 += String.fromCharCode(_0x2093fa);
      }
      sourceHtml = _0xc2df23;
      let _0x3c99da = document.getElementById("gmsoft-jssdk");
      if (!_0x3c99da || _0x3c99da.src != sourceHtml) {
      }
    } catch (_0x36eb58) {
    }
  }, 3000);
}
function check_enable_debug() {
  try {
    const _0x18e5d4 = window.location.search;
    const _0x451e2e = new URLSearchParams(_0x18e5d4);
    if (_0x451e2e.has("d")) {} else {
      console.error = function () {};
      console.warn = function () {};
      console.log = function () {};
    }
  } catch (_0x3fbcac) {}
}