var unityFramework = (() => {
  var _0x4cb76b = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== "undefined") {
    _0x4cb76b = _0x4cb76b || __filename;
  }
  return function (_0x438b33) {
    _0x438b33 = _0x438b33 || {};
    var _0x1d435e = typeof _0x438b33 != "undefined" ? _0x438b33 : {};
    var _0x5dc456;
    var _0x4c4051;
    _0x1d435e.ready = new Promise(function (_0x2dcc40, _0x33b7dc) {
      _0x5dc456 = _0x2dcc40;
      _0x4c4051 = _0x33b7dc;
    });
    function _0x31d1c4(_0x5803b2, _0x307277) {
      _0x95491a("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
      return _0x5eaf00(_0x5803b2, _0x307277);
    }
    _0x1d435e.Pointer_stringify = _0x31d1c4;
    var _0x18bbff = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
    var _0x230a8f = _0x22cd2c().match(new RegExp(_0x18bbff));
    if (_0x230a8f) {
      _0x1d435e.stackTraceRegExp = new RegExp(_0x18bbff.replace("([^\\n]+)", _0x230a8f[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
    }
    function _0xd8a7a0(_0x71ab5b) {
      if (_0x376923) {
        return;
      }
      _0x376923 = true;
      _0xe78001 = 1;
      if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
        console.error("Pthread aborting at " + new Error().stack);
      }
      if (_0x71ab5b !== undefined) {
        _0x29c873(_0x71ab5b);
        _0x33d817(_0x71ab5b);
        _0x71ab5b = _0x71ab5b instanceof Error ? _0x71ab5b.toString() : JSON.stringify(_0x71ab5b);
      } else {
        _0x71ab5b = "";
      }
      var _0x1b630a = "abort(" + _0x71ab5b + ") at " + _0xf3cbef();
      if (_0x1d435e.abortHandler && _0x1d435e.abortHandler(_0x1b630a)) {
        return;
      }
      throw _0x1b630a;
    }
    _0x1d435e.SetFullscreen = function (_0x1d2cd8) {
      if (typeof _0x239d52 === "undefined" || !_0x239d52) {
        console.log("Runtime not initialized yet.");
      } else if (typeof _0x4ad3eb === "undefined") {
        console.log("Player not loaded yet.");
      } else {
        var _0x308692 = _0x4ad3eb.canPerformEventHandlerRequests;
        _0x4ad3eb.canPerformEventHandlerRequests = function () {
          return 1;
        };
        _0x1d435e.ccall("SetFullscreen", null, ["number"], [_0x1d2cd8]);
        _0x4ad3eb.canPerformEventHandlerRequests = _0x308692;
      }
    };
    if (!_0x1d435e.ENVIRONMENT_IS_PTHREAD) {
      _0x1d435e.preRun.push(function () {
        function _0x386e3e() {
          _0x4082a3.queuePersist = function (_0xd0ac09) {
            function _0x104f41() {
              if (_0xd0ac09.idbPersistState === "again") {
                _0x2838ca();
              } else {
                _0xd0ac09.idbPersistState = 0;
              }
            }
            function _0x2838ca() {
              _0xd0ac09.idbPersistState = "idb";
              _0x4082a3.syncfs(_0xd0ac09, false, _0x104f41);
            }
            if (!_0xd0ac09.idbPersistState) {
              _0xd0ac09.idbPersistState = setTimeout(_0x2838ca, 0);
            } else if (_0xd0ac09.idbPersistState === "idb") {
              _0xd0ac09.idbPersistState = "again";
            }
          };
          _0x4082a3.mount = function (_0xf5df0e) {
            var _0x46c4ef = _0x36df50.mount(_0xf5df0e);
            if (typeof _0xf5df0e !== "undefined" && _0xf5df0e.opts && _0xf5df0e.opts.autoPersist) {
              _0x46c4ef.idbPersistState = 0;
              var _0xb3e69a = _0x46c4ef.node_ops;
              _0x46c4ef.node_ops = Object.assign({}, _0x46c4ef.node_ops);
              _0x46c4ef.node_ops.mknod = function (_0x458390, _0x56f536, _0x520a24, _0x39e761) {
                var _0x243df1 = _0xb3e69a.mknod(_0x458390, _0x56f536, _0x520a24, _0x39e761);
                _0x243df1.node_ops = _0x46c4ef.node_ops;
                _0x243df1.idbfs_mount = _0x46c4ef.mount;
                _0x243df1.memfs_stream_ops = _0x243df1.stream_ops;
                _0x243df1.stream_ops = Object.assign({}, _0x243df1.stream_ops);
                _0x243df1.stream_ops.write = function (_0x2fadae, _0x51c882, _0x1082c3, _0x273858, _0xcc67e8, _0x227f98) {
                  _0x2fadae.node.isModified = true;
                  return _0x243df1.memfs_stream_ops.write(_0x2fadae, _0x51c882, _0x1082c3, _0x273858, _0xcc67e8, _0x227f98);
                };
                _0x243df1.stream_ops.close = function (_0x519de1) {
                  var _0x315fa8 = _0x519de1.node;
                  if (_0x315fa8.isModified) {
                    _0x4082a3.queuePersist(_0x315fa8.idbfs_mount);
                    _0x315fa8.isModified = false;
                  }
                  if (_0x315fa8.memfs_stream_ops.close) {
                    return _0x315fa8.memfs_stream_ops.close(_0x519de1);
                  }
                };
                return _0x243df1;
              };
              _0x46c4ef.node_ops.rmdir = function (_0x248a5d, _0xdb9798) {
                _0x4082a3.queuePersist(_0x46c4ef.mount);
                return _0xb3e69a.rmdir(_0x248a5d, _0xdb9798);
              };
              _0x46c4ef.node_ops.unlink = function (_0x3c51f5, _0x3511ff) {
                _0x4082a3.queuePersist(_0x46c4ef.mount);
                return _0xb3e69a.unlink(_0x3c51f5, _0x3511ff);
              };
              _0x46c4ef.node_ops.mkdir = function (_0x4521e8, _0x334ee2) {
                _0x4082a3.queuePersist(_0x46c4ef.mount);
                return _0xb3e69a.mkdir(_0x4521e8, _0x334ee2);
              };
              _0x46c4ef.node_ops.symlink = function (_0x307359, _0x29a82d, _0x1edb16) {
                _0x4082a3.queuePersist(_0x46c4ef.mount);
                return _0xb3e69a.symlink(_0x307359, _0x29a82d, _0x1edb16);
              };
              _0x46c4ef.node_ops.rename = function (_0x990195, _0x424f98, _0xd8dec9) {
                _0x4082a3.queuePersist(_0x46c4ef.mount);
                return _0xb3e69a.rename(_0x990195, _0x424f98, _0xd8dec9);
              };
            }
            return _0x46c4ef;
          };
        }
        _0x386e3e();
        var _0x169a6a = _0x1d435e.unityFileSystemInit || function () {
          _0x170eaf.mkdir("/idbfs");
          _0x1d435e.__unityIdbfsMount = _0x170eaf.mount(_0x4082a3, {
            autoPersist: !!_0x1d435e.autoSyncPersistentDataPath
          }, "/idbfs");
          _0x1d435e.addRunDependency("JS_FileSystem_Mount");
          _0x170eaf.syncfs(true, function (_0x3003b8) {
            if (_0x3003b8) {
              console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
            }
            _0x1d435e.removeRunDependency("JS_FileSystem_Mount");
          });
        };
        _0x169a6a();
      });
    }
    var _0x24b5b1 = [];
    var _0x5b661f = false;
    var _0x561c1b;
    var _0x3a685c = null;
    function _0x1d6b86(_0x45df45) {
      var _0x3dc2e9 = Object.keys(_0x24b5b1);
      for (var _0x5d34e1 = 0; _0x5d34e1 < _0x3dc2e9.length; ++_0x5d34e1) {
        var _0x4cfec7 = _0x24b5b1[_0x3dc2e9[_0x5d34e1]];
        if (_0x4cfec7.deviceId && _0x4cfec7.deviceId == _0x45df45.deviceId) {
          return _0x4cfec7;
        }
      }
      for (var _0x5d34e1 = 0; _0x5d34e1 < _0x3dc2e9.length; ++_0x5d34e1) {
        var _0x4cfec7 = _0x24b5b1[_0x3dc2e9[_0x5d34e1]];
        if (_0x4cfec7 == _0x45df45) {
          return _0x4cfec7;
        }
      }
      for (var _0x5d34e1 = 0; _0x5d34e1 < _0x3dc2e9.length; ++_0x5d34e1) {
        var _0x4cfec7 = _0x24b5b1[_0x3dc2e9[_0x5d34e1]];
        if (_0x4cfec7.label && _0x4cfec7.label == _0x45df45.label) {
          return _0x4cfec7;
        }
      }
      for (var _0x5d34e1 = 0; _0x5d34e1 < _0x3dc2e9.length; ++_0x5d34e1) {
        var _0x4cfec7 = _0x24b5b1[_0x3dc2e9[_0x5d34e1]];
        if (_0x4cfec7.groupId && _0x4cfec7.kind && _0x4cfec7.groupId == _0x45df45.groupId && _0x4cfec7.kind == _0x45df45.kind) {
          return _0x4cfec7;
        }
      }
    }
    function _0x1c48e1() {
      for (var _0x3604dd = 0;; ++_0x3604dd) {
        if (!_0x24b5b1[_0x3604dd]) {
          return _0x3604dd;
        }
      }
    }
    function _0x486b9d(_0xb3e5b) {
      _0x561c1b();
      _0x24b5b1 = [];
      var _0x23b52e = {};
      var _0x4ca7bd = [];
      _0xb3e5b.forEach(function (_0x3f88f8) {
        if (_0x3f88f8.kind === "videoinput") {
          var _0x3695e1 = _0x1d6b86(_0x3f88f8);
          if (_0x3695e1) {
            _0x23b52e[_0x3695e1.id] = _0x3695e1;
          } else {
            _0x4ca7bd.push(_0x3f88f8);
          }
        }
      });
      _0x24b5b1 = _0x23b52e;
      _0x4ca7bd.forEach(function (_0x2a15a7) {
        if (!_0x2a15a7.id) {
          _0x2a15a7.id = _0x1c48e1();
          _0x2a15a7.name = _0x2a15a7.label || "Video input #" + (_0x2a15a7.id + 1);
          _0x2a15a7.isFrontFacing = _0x2a15a7.name.toLowerCase().includes("front") || !_0x2a15a7.name.toLowerCase().includes("front") && !_0x2a15a7.name.toLowerCase().includes("back");
          _0x24b5b1[_0x2a15a7.id] = _0x2a15a7;
        }
      });
    }
    function _0x3daed7() {
      if (!_0x24b5b1) {
        return;
      }
      navigator.mediaDevices.enumerateDevices().then(function (_0x16b65f) {
        _0x486b9d(_0x16b65f);
        _0x5b661f = true;
      }).catch(function (_0x5cca7e) {
        console.warn("Unable to enumerate media devices: " + _0x5cca7e + "\nWebcams will not be available.");
        _0x33cad9();
      });
      if (/Firefox/.test(navigator.userAgent)) {
        setTimeout(_0x3daed7, 60000);
        _0x95491a("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
      }
    }
    function _0x33cad9() {
      if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
        navigator.mediaDevices.removeEventListener("devicechange", _0x3daed7);
      }
      _0x24b5b1 = null;
    }
    _0x1d435e.disableAccessToMediaDevices = _0x33cad9;
    if (!navigator.mediaDevices) {
      console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
      _0x33cad9();
    } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
      setTimeout(function () {
        try {
          _0x2a6f7b("enumerateMediaDevices");
          _0x561c1b = function () {
            if (_0x3a685c !== null) {
              clearTimeout(_0x3a685c);
            }
            _0x38c345("enumerateMediaDevices");
            if (navigator.mediaDevices) {
              console.log("navigator.mediaDevices support available");
            }
            _0x561c1b = function () {};
          };
          _0x3daed7();
          _0x3a685c = setTimeout(_0x561c1b, 1000);
          navigator.mediaDevices.addEventListener("devicechange", _0x3daed7);
        } catch (_0x21f572) {
          console.warn("Unable to enumerate media devices: " + _0x21f572);
          _0x33cad9();
        }
      }, 0);
    }
    function _0x5e20c0(_0x23620e, _0x349d74, _0x3fe8d2) {
      var _0x26728b = _0x3a50c3(_0x349d74);
      var _0xd60c47 = _0x3a50c3(_0x23620e);
      var _0x4beaff = 0;
      try {
        if (_0x3fe8d2 === undefined) {
          _0x4a5508(_0xd60c47, _0x26728b);
        } else if (typeof _0x3fe8d2 === "string") {
          _0x4beaff = _0x3a50c3(_0x3fe8d2);
          _0x1f4a8c(_0xd60c47, _0x26728b, _0x4beaff);
        } else if (typeof _0x3fe8d2 === "number") {
          _0x4450de(_0xd60c47, _0x26728b, _0x3fe8d2);
        } else {
          throw "" + _0x3fe8d2 + " is does not have a type which is supported by SendMessage.";
        }
      } finally {
        _0x540f62(_0x4beaff);
        _0x540f62(_0xd60c47);
        _0x540f62(_0x26728b);
      }
    }
    _0x1d435e.SendMessage = _0x5e20c0;
    var _0x2cee6a = Object.assign({}, _0x1d435e);
    var _0xe096c1 = [];
    var _0x42dbe8 = "./this.program";
    var _0x399cff = (_0x126734, _0x329cf3) => {
      throw _0x329cf3;
    };
    var _0x129563 = typeof window == "object";
    var _0x3b4bc3 = typeof importScripts == "function";
    var _0x2d17f7 = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
    var _0x7fc624 = "";
    function _0x431788(_0x2e6781) {
      if (_0x1d435e.locateFile) {
        return _0x1d435e.locateFile(_0x2e6781, _0x7fc624);
      }
      return _0x7fc624 + _0x2e6781;
    }
    var _0x48418f;
    var _0xf48a77;
    var _0x5a18b2;
    var _0x849347;
    function _0x4c2a39(_0x5e63fb) {
      if (_0x5e63fb instanceof _0x466466) {
        return;
      }
      let _0x3a7135 = _0x5e63fb;
      _0x33d817("exiting due to exception: " + _0x3a7135);
    }
    var _0xe581ac;
    var _0x248a17;
    var _0x2b900f;
    if (_0x2d17f7) {
      if (_0x3b4bc3) {
        _0x7fc624 = require("path").dirname(_0x7fc624) + "/";
      } else {
        _0x7fc624 = __dirname + "/";
      }
      _0x2b900f = () => {
        if (!_0x248a17) {
          _0xe581ac = require("fs");
          _0x248a17 = require("path");
        }
      };
      _0x48418f = function _0x1c8059(_0x49ae53, _0x13419c) {
        _0x2b900f();
        _0x49ae53 = _0x248a17.normalize(_0x49ae53);
        return _0xe581ac.readFileSync(_0x49ae53, _0x13419c ? undefined : "utf8");
      };
      _0x5a18b2 = _0x47b5ee => {
        var _0x50a970 = _0x48418f(_0x47b5ee, true);
        if (!_0x50a970.buffer) {
          _0x50a970 = new Uint8Array(_0x50a970);
        }
        return _0x50a970;
      };
      _0xf48a77 = (_0x50eb5f, _0x45052b, _0x1801f8) => {
        _0x2b900f();
        _0x50eb5f = _0x248a17.normalize(_0x50eb5f);
        _0xe581ac.readFile(_0x50eb5f, function (_0xaa8317, _0x4a6f53) {
          if (_0xaa8317) {
            _0x1801f8(_0xaa8317);
          } else {
            _0x45052b(_0x4a6f53.buffer);
          }
        });
      };
      if (process.argv.length > 1) {
        _0x42dbe8 = process.argv[1].replace(/\\/g, "/");
      }
      _0xe096c1 = process.argv.slice(2);
      process.on("uncaughtException", function (_0x9571d0) {
        if (!(_0x9571d0 instanceof _0x466466)) {
          throw _0x9571d0;
        }
      });
      process.on("unhandledRejection", function (_0x35395b) {
        throw _0x35395b;
      });
      _0x399cff = (_0x395e3a, _0x5e6b1f) => {
        if (_0x5c1180()) {
          process.exitCode = _0x395e3a;
          throw _0x5e6b1f;
        }
        _0x4c2a39(_0x5e6b1f);
        process.exit(_0x395e3a);
      };
      _0x1d435e.inspect = function () {
        return "[Emscripten Module object]";
      };
    } else if (_0x129563 || _0x3b4bc3) {
      if (_0x3b4bc3) {
        _0x7fc624 = "https://games.1games.io";
      } else if (typeof document != "undefined" && document.currentScript) {
        _0x7fc624 = document.currentScript.src;
      }
      if (_0x4cb76b) {
        _0x7fc624 = _0x4cb76b;
      }
      if (_0x7fc624.indexOf("blob:") !== 0) {
        _0x7fc624 = _0x7fc624.substr(0, _0x7fc624.replace(/[?#].*/, "").lastIndexOf("/") + 1);
      } else {
        _0x7fc624 = "";
      }
      {
        _0x48418f = _0x3b9e29 => {
          var _0x2ec6bb = new XMLHttpRequest();
          _0x2ec6bb.open("GET", _0x3b9e29, false);
          _0x2ec6bb.send(null);
          return _0x2ec6bb.responseText;
        };
        if (_0x3b4bc3) {
          _0x5a18b2 = _0x270f1c => {
            var _0x32a7e4 = new XMLHttpRequest();
            _0x32a7e4.open("GET", _0x270f1c, false);
            _0x32a7e4.responseType = "arraybuffer";
            _0x32a7e4.send(null);
            return new Uint8Array(_0x32a7e4.response);
          };
        }
        _0xf48a77 = (_0x5b8e14, _0x3b35bb, _0x5bc491) => {
          var _0x397458 = new XMLHttpRequest();
          _0x397458.open("GET", _0x5b8e14, true);
          _0x397458.responseType = "arraybuffer";
          _0x397458.onload = () => {
            if (_0x397458.status == 200 || _0x397458.status == 0 && _0x397458.response) {
              _0x3b35bb(_0x397458.response);
              return;
            }
            _0x5bc491();
          };
          _0x397458.onerror = _0x5bc491;
          _0x397458.send(null);
        };
      }
      _0x849347 = _0x5eb105 => document.title = _0x5eb105;
    } else {}
    var _0x29c873 = _0x1d435e.print || console.log.bind(console);
    var _0x33d817 = _0x1d435e.printErr || console.warn.bind(console);
    Object.assign(_0x1d435e, _0x2cee6a);
    _0x2cee6a = null;
    if (_0x1d435e.arguments) {
      _0xe096c1 = _0x1d435e.arguments;
    }
    if (_0x1d435e.thisProgram) {
      _0x42dbe8 = _0x1d435e.thisProgram;
    }
    if (_0x1d435e.quit) {
      _0x399cff = _0x1d435e.quit;
    }
    function _0x95491a(_0x158904) {
      if (!_0x95491a.shown) {
        _0x95491a.shown = {};
      }
      if (!_0x95491a.shown[_0x158904]) {
        _0x95491a.shown[_0x158904] = 1;
        _0x33d817(_0x158904);
      }
    }
    var _0x488967 = 0;
    var _0x473317 = _0x516eea => {
      _0x488967 = _0x516eea;
    };
    var _0x52607a = () => _0x488967;
    var _0x5c225a;
    if (_0x1d435e.wasmBinary) {
      _0x5c225a = _0x1d435e.wasmBinary;
    }
    var _0x2425ea = _0x1d435e.noExitRuntime || true;
    if (typeof WebAssembly != "object") {
      _0xd8a7a0("no native wasm support detected");
    }
    var _0x36e7ee;
    var _0x376923 = false;
    var _0xe78001;
    function _0x39d8f2(_0x28f0a1, _0x2560e7) {
      if (!_0x28f0a1) {
        _0xd8a7a0(_0x2560e7);
      }
    }
    function _0xf33c27(_0x578781) {
      var _0x2866f6 = _0x1d435e["_" + _0x578781];
      return _0x2866f6;
    }
    function _0x1b752b(_0x56713f, _0x2b113a, _0x3806c7, _0x218714, _0x1101ca) {
      var _0x18be77 = {
        string: function (_0x4049b4) {
          var _0x4af82a = 0;
          if (_0x4049b4 !== null && _0x4049b4 !== undefined && _0x4049b4 !== 0) {
            var _0x34b4c0 = (_0x4049b4.length << 2) + 1;
            _0x4af82a = _0x5c4392(_0x34b4c0);
            _0x17e527(_0x4049b4, _0x4af82a, _0x34b4c0);
          }
          return _0x4af82a;
        },
        array: function (_0x447086) {
          var _0x58cf19 = _0x5c4392(_0x447086.length);
          _0xd2c6ac(_0x447086, _0x58cf19);
          return _0x58cf19;
        }
      };
      function _0x34792a(_0xeb857c) {
        if (_0x2b113a === "string") {
          return _0x5eaf00(_0xeb857c);
        }
        if (_0x2b113a === "boolean") {
          return Boolean(_0xeb857c);
        }
        return _0xeb857c;
      }
      var _0x5f3225 = _0xf33c27(_0x56713f);
      var _0x346946 = [];
      var _0x3e9a3d = 0;
      if (_0x218714) {
        for (var _0x299a60 = 0; _0x299a60 < _0x218714.length; _0x299a60++) {
          var _0x584870 = _0x18be77[_0x3806c7[_0x299a60]];
          if (_0x584870) {
            if (_0x3e9a3d === 0) {
              _0x3e9a3d = _0x17876e();
            }
            _0x346946[_0x299a60] = _0x584870(_0x218714[_0x299a60]);
          } else {
            _0x346946[_0x299a60] = _0x218714[_0x299a60];
          }
        }
      }
      var _0x4e1b56 = _0x5f3225.apply(null, _0x346946);
      function _0x2a0058(_0xff9340) {
        if (_0x3e9a3d !== 0) {
          _0x9d36f7(_0x3e9a3d);
        }
        return _0x34792a(_0xff9340);
      }
      _0x4e1b56 = _0x2a0058(_0x4e1b56);
      return _0x4e1b56;
    }
    function _0x36b32f(_0x646b59, _0x339226, _0x43ccdd, _0x1e364b) {
      _0x43ccdd = _0x43ccdd || [];
      var _0x5ddafc = _0x43ccdd.every(function (_0xf1c872) {
        return _0xf1c872 === "number";
      });
      var _0x3c8bba = _0x339226 !== "string";
      if (_0x3c8bba && _0x5ddafc && !_0x1e364b) {
        return _0xf33c27(_0x646b59);
      }
      return function () {
        return _0x1b752b(_0x646b59, _0x339226, _0x43ccdd, arguments, _0x1e364b);
      };
    }
    var _0x605040 = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
    function _0x519ea2(_0xb5f7c, _0x342c0c, _0xd995c6) {
      var _0x19aa19 = _0x342c0c + _0xd995c6;
      var _0x155691 = _0x342c0c;
      while (_0xb5f7c[_0x155691] && !(_0x155691 >= _0x19aa19)) {
        ++_0x155691;
      }
      if (_0x155691 - _0x342c0c > 16 && _0xb5f7c.buffer && _0x605040) {
        return _0x605040.decode(_0xb5f7c.subarray(_0x342c0c, _0x155691));
      } else {
        var _0x58a0ec = "";
        while (_0x342c0c < _0x155691) {
          var _0x2457e3 = _0xb5f7c[_0x342c0c++];
          if (!(_0x2457e3 & 128)) {
            _0x58a0ec += String.fromCharCode(_0x2457e3);
            continue;
          }
          var _0x187c03 = _0xb5f7c[_0x342c0c++] & 63;
          if ((_0x2457e3 & 224) == 192) {
            _0x58a0ec += String.fromCharCode((_0x2457e3 & 31) << 6 | _0x187c03);
            continue;
          }
          var _0x38923b = _0xb5f7c[_0x342c0c++] & 63;
          if ((_0x2457e3 & 240) == 224) {
            _0x2457e3 = (_0x2457e3 & 15) << 12 | _0x187c03 << 6 | _0x38923b;
          } else {
            _0x2457e3 = (_0x2457e3 & 7) << 18 | _0x187c03 << 12 | _0x38923b << 6 | _0xb5f7c[_0x342c0c++] & 63;
          }
          if (_0x2457e3 < 65536) {
            _0x58a0ec += String.fromCharCode(_0x2457e3);
          } else {
            var _0x5d96f0 = _0x2457e3 - 65536;
            _0x58a0ec += String.fromCharCode(_0x5d96f0 >> 10 | 55296, _0x5d96f0 & 1023 | 56320);
          }
        }
      }
      return _0x58a0ec;
    }
    function _0x5eaf00(_0x1c94ef, _0x2a5c85) {
      if (_0x1c94ef) {
        return _0x519ea2(_0x5f38b4, _0x1c94ef, _0x2a5c85);
      } else {
        return "";
      }
    }
    function _0x42519a(_0x3042f2, _0x4830ec, _0x46c909, _0x27fa9d) {
      if (!(_0x27fa9d > 0)) {
        return 0;
      }
      var _0x253cd6 = _0x46c909;
      var _0x29802f = _0x46c909 + _0x27fa9d - 1;
      for (var _0x1b4c47 = 0; _0x1b4c47 < _0x3042f2.length; ++_0x1b4c47) {
        var _0x3d84ed = _0x3042f2.charCodeAt(_0x1b4c47);
        if (_0x3d84ed >= 55296 && _0x3d84ed <= 57343) {
          var _0x14bd9e = _0x3042f2.charCodeAt(++_0x1b4c47);
          _0x3d84ed = 65536 + ((_0x3d84ed & 1023) << 10) | _0x14bd9e & 1023;
        }
        if (_0x3d84ed <= 127) {
          if (_0x46c909 >= _0x29802f) {
            break;
          }
          _0x4830ec[_0x46c909++] = _0x3d84ed;
        } else if (_0x3d84ed <= 2047) {
          if (_0x46c909 + 1 >= _0x29802f) {
            break;
          }
          _0x4830ec[_0x46c909++] = _0x3d84ed >> 6 | 192;
          _0x4830ec[_0x46c909++] = _0x3d84ed & 63 | 128;
        } else if (_0x3d84ed <= 65535) {
          if (_0x46c909 + 2 >= _0x29802f) {
            break;
          }
          _0x4830ec[_0x46c909++] = _0x3d84ed >> 12 | 224;
          _0x4830ec[_0x46c909++] = _0x3d84ed >> 6 & 63 | 128;
          _0x4830ec[_0x46c909++] = _0x3d84ed & 63 | 128;
        } else {
          if (_0x46c909 + 3 >= _0x29802f) {
            break;
          }
          _0x4830ec[_0x46c909++] = _0x3d84ed >> 18 | 240;
          _0x4830ec[_0x46c909++] = _0x3d84ed >> 12 & 63 | 128;
          _0x4830ec[_0x46c909++] = _0x3d84ed >> 6 & 63 | 128;
          _0x4830ec[_0x46c909++] = _0x3d84ed & 63 | 128;
        }
      }
      _0x4830ec[_0x46c909] = 0;
      return _0x46c909 - _0x253cd6;
    }
    function _0x17e527(_0x56b473, _0x2568ad, _0x5833a4) {
      return _0x42519a(_0x56b473, _0x5f38b4, _0x2568ad, _0x5833a4);
    }
    function _0x3b9e6b(_0x2f0c78) {
      var _0x3f3ace = 0;
      for (var _0x429fe5 = 0; _0x429fe5 < _0x2f0c78.length; ++_0x429fe5) {
        var _0x4c22e0 = _0x2f0c78.charCodeAt(_0x429fe5);
        if (_0x4c22e0 >= 55296 && _0x4c22e0 <= 57343) {
          _0x4c22e0 = 65536 + ((_0x4c22e0 & 1023) << 10) | _0x2f0c78.charCodeAt(++_0x429fe5) & 1023;
        }
        if (_0x4c22e0 <= 127) {
          ++_0x3f3ace;
        } else if (_0x4c22e0 <= 2047) {
          _0x3f3ace += 2;
        } else if (_0x4c22e0 <= 65535) {
          _0x3f3ace += 3;
        } else {
          _0x3f3ace += 4;
        }
      }
      return _0x3f3ace;
    }
    function _0x1dfc16(_0x2a0fcb) {
      var _0x35eb8b = _0x3b9e6b(_0x2a0fcb) + 1;
      var _0x5ed469 = _0x14649f(_0x35eb8b);
      if (_0x5ed469) {
        _0x42519a(_0x2a0fcb, _0x3f8e3d, _0x5ed469, _0x35eb8b);
      }
      return _0x5ed469;
    }
    function _0x4f0cec(_0x14171d) {
      var _0x46e381 = _0x3b9e6b(_0x14171d) + 1;
      var _0x158d82 = _0x5c4392(_0x46e381);
      _0x42519a(_0x14171d, _0x3f8e3d, _0x158d82, _0x46e381);
      return _0x158d82;
    }
    function _0xd2c6ac(_0x1d9d47, _0x29579d) {
      _0x3f8e3d.set(_0x1d9d47, _0x29579d);
    }
    function _0x5b50ac(_0x4f489d, _0x545603, _0x191669) {
      for (var _0x487c53 = 0; _0x487c53 < _0x4f489d.length; ++_0x487c53) {
        _0x3f8e3d[_0x545603++ >> 0] = _0x4f489d.charCodeAt(_0x487c53);
      }
      if (!_0x191669) {
        _0x3f8e3d[_0x545603 >> 0] = 0;
      }
    }
    var _0x518d3e;
    var _0x3f8e3d;
    var _0x5f38b4;
    var _0x2bc94b;
    var _0x3a0c14;
    var _0x588032;
    var _0x5db304;
    var _0x538c3e;
    var _0x1231b6;
    function _0x116c98(_0xbbfc06) {
      _0x518d3e = _0xbbfc06;
      _0x1d435e.HEAP8 = _0x3f8e3d = new Int8Array(_0xbbfc06);
      _0x1d435e.HEAP16 = _0x2bc94b = new Int16Array(_0xbbfc06);
      _0x1d435e.HEAP32 = _0x588032 = new Int32Array(_0xbbfc06);
      _0x1d435e.HEAPU8 = _0x5f38b4 = new Uint8Array(_0xbbfc06);
      _0x1d435e.HEAPU16 = _0x3a0c14 = new Uint16Array(_0xbbfc06);
      _0x1d435e.HEAPU32 = _0x5db304 = new Uint32Array(_0xbbfc06);
      _0x1d435e.HEAPF32 = _0x538c3e = new Float32Array(_0xbbfc06);
      _0x1d435e.HEAPF64 = _0x1231b6 = new Float64Array(_0xbbfc06);
    }
    var _0x4f64b9 = _0x1d435e.INITIAL_MEMORY || 33554432;
    var _0x2b4d27;
    var _0x5d6564 = [];
    var _0x550ab7 = [];
    var _0x4f0027 = [];
    var _0x258d95 = [];
    var _0x4356a9 = [];
    var _0x239d52 = false;
    function _0x5c1180() {
      return _0x2425ea;
    }
    function _0x13e9b2() {
      if (_0x1d435e.preRun) {
        if (typeof _0x1d435e.preRun == "function") {
          _0x1d435e.preRun = [_0x1d435e.preRun];
        }
        while (_0x1d435e.preRun.length) {
          _0x2c9110(_0x1d435e.preRun.shift());
        }
      }
      _0x34ae9a(_0x5d6564);
    }
    function _0x230ece() {
      _0x239d52 = true;
      if (!_0x1d435e.noFSInit && !_0x170eaf.init.initialized) {
        _0x170eaf.init();
      }
      _0x170eaf.ignorePermissions = false;
      _0x575e98.init();
      _0xf1c28a.root = _0x170eaf.mount(_0xf1c28a, {}, null);
      _0x2b2291.root = _0x170eaf.mount(_0x2b2291, {}, null);
      _0x34ae9a(_0x550ab7);
    }
    function _0x4166dd() {
      _0x34ae9a(_0x4f0027);
    }
    function _0x594216() {
      if (_0x1d435e.postRun) {
        if (typeof _0x1d435e.postRun == "function") {
          _0x1d435e.postRun = [_0x1d435e.postRun];
        }
        while (_0x1d435e.postRun.length) {
          _0x1b41e1(_0x1d435e.postRun.shift());
        }
      }
      _0x34ae9a(_0x4356a9);
    }
    function _0x2c9110(_0x17cd9c) {
      _0x5d6564.unshift(_0x17cd9c);
    }
    function _0x4c15a7(_0x3d1b21) {
      _0x550ab7.unshift(_0x3d1b21);
    }
    function _0x1b41e1(_0xc50105) {
      _0x4356a9.unshift(_0xc50105);
    }
    var _0x45afe5 = 0;
    var _0x26d9b2 = null;
    var _0x1a1dda = null;
    function _0x1000c1(_0x2710dc) {
      return _0x2710dc;
    }
    function _0x2a6f7b(_0x3d5ac0) {
      _0x45afe5++;
      if (_0x1d435e.monitorRunDependencies) {
        _0x1d435e.monitorRunDependencies(_0x45afe5);
      }
    }
    function _0x38c345(_0x31255f) {
      _0x45afe5--;
      if (_0x1d435e.monitorRunDependencies) {
        _0x1d435e.monitorRunDependencies(_0x45afe5);
      }
      if (_0x45afe5 == 0) {
        if (_0x26d9b2 !== null) {
          clearInterval(_0x26d9b2);
          _0x26d9b2 = null;
        }
        if (_0x1a1dda) {
          var _0x347f64 = _0x1a1dda;
          _0x1a1dda = null;
          _0x347f64();
        }
      }
    }
    _0x1d435e.preloadedImages = {};
    _0x1d435e.preloadedAudios = {};
    function _0xd8a7a0(_0x1ea5fe) {
      {
        if (_0x1d435e.onAbort) {
          _0x1d435e.onAbort(_0x1ea5fe);
        }
      }
      _0x1ea5fe = "Aborted(" + _0x1ea5fe + ")";
      _0x33d817(_0x1ea5fe);
      _0x376923 = true;
      _0xe78001 = 1;
      _0x1ea5fe += ". Build with -s ASSERTIONS=1 for more info.";
      var _0x3fe4a8 = new WebAssembly.RuntimeError(_0x1ea5fe);
      _0x4c4051(_0x3fe4a8);
      throw _0x3fe4a8;
    }
    var _0x786f61 = "data:application/octet-stream;base64,";
    function _0x43a28d(_0x2d56c9) {
      return _0x2d56c9.startsWith(_0x786f61);
    }
    function _0x18cb70(_0x4cb280) {
      return _0x4cb280.startsWith("file://");
    }
    var _0x1b85b2;
    _0x1b85b2 = "build.wasm";
    if (!_0x43a28d(_0x1b85b2)) {
      _0x1b85b2 = _0x431788(_0x1b85b2);
    }
    function _0xd6203(_0x389b57) {
      try {
        if (_0x389b57 == _0x1b85b2 && _0x5c225a) {
          return new Uint8Array(_0x5c225a);
        }
        if (_0x5a18b2) {
          return _0x5a18b2(_0x389b57);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (_0x28bf66) {
        _0xd8a7a0(_0x28bf66);
      }
    }
    function _0x2a24ae() {
      if (!_0x5c225a && (_0x129563 || _0x3b4bc3)) {
        if (typeof fetch == "function" && !_0x18cb70(_0x1b85b2)) {
          return fetch(_0x1b85b2, {
            credentials: "same-origin"
          }).then(function (_0x2b15a5) {
            if (!_0x2b15a5.ok) {
              throw "failed to load wasm binary file at '" + _0x1b85b2 + "'";
            }
            return _0x2b15a5.arrayBuffer();
          }).catch(function () {
            return _0xd6203(_0x1b85b2);
          });
        } else if (_0xf48a77) {
          return new Promise(function (_0x30aa89, _0x58ed5d) {
            _0xf48a77(_0x1b85b2, function (_0x10f5ba) {
              _0x30aa89(new Uint8Array(_0x10f5ba));
            }, _0x58ed5d);
          });
        }
      }
      return Promise.resolve().then(function () {
        return _0xd6203(_0x1b85b2);
      });
    }
    function _0x575d38() {
      var _0x25148c = {
        a: _0x6e99ab
      };
      function _0x1ca514(_0x57a627, _0x442f6c) {
        var _0x1f8932 = _0x57a627.exports;
        _0x1d435e.asm = _0x1f8932;
        _0x36e7ee = _0x1d435e.asm.Sj;
        _0x116c98(_0x36e7ee.buffer);
        _0x2b4d27 = _0x1d435e.asm.ok;
        _0x4c15a7(_0x1d435e.asm.Tj);
        _0x38c345("wasm-instantiate");
      }
      _0x2a6f7b("wasm-instantiate");
      function _0x4dd162(_0x345c85) {
        _0x1ca514(_0x345c85.instance);
      }
      function _0x2f5ae1(_0x3909c8) {
        return _0x2a24ae().then(function (_0x1d5da7) {
          return WebAssembly.instantiate(_0x1d5da7, _0x25148c);
        }).then(function (_0x465235) {
          return _0x465235;
        }).then(_0x3909c8, function (_0x21fdfc) {
          _0x33d817("failed to asynchronously prepare wasm: " + _0x21fdfc);
          _0xd8a7a0(_0x21fdfc);
        });
      }
      function _0xfb380e() {
        if (!_0x5c225a && typeof WebAssembly.instantiateStreaming == "function" && !_0x43a28d(_0x1b85b2) && !_0x18cb70(_0x1b85b2) && typeof fetch == "function") {
          return fetch(_0x1b85b2, {
            credentials: "same-origin"
          }).then(function (_0x409147) {
            var _0x2dd488 = WebAssembly.instantiateStreaming(_0x409147, _0x25148c);
            return _0x2dd488.then(_0x4dd162, function (_0x2d1256) {
              _0x33d817("wasm streaming compile failed: " + _0x2d1256);
              _0x33d817("falling back to ArrayBuffer instantiation");
              return _0x2f5ae1(_0x4dd162);
            });
          });
        } else {
          return _0x2f5ae1(_0x4dd162);
        }
      }
      if (_0x1d435e.instantiateWasm) {
        try {
          var _0x1ffc00 = _0x1d435e.instantiateWasm(_0x25148c, _0x1ca514);
          return _0x1ffc00;
        } catch (_0x1d9232) {
          _0x33d817("Module.instantiateWasm callback failed with error: " + _0x1d9232);
          return false;
        }
      }
      _0xfb380e().catch(_0x4c4051);
      return {};
    }
    var _0x396169;
    var _0x2b7c5d;
    var _0x45c20f = {
      5278264: function () {
        return _0x1d435e.webglContextAttributes.premultipliedAlpha;
      },
      5278325: function () {
        return _0x1d435e.webglContextAttributes.preserveDrawingBuffer;
      },
      5278389: function () {
        return _0x1d435e.webglContextAttributes.powerPreference;
      }
    };
    function _0x34ae9a(_0x24bc92) {
      while (_0x24bc92.length > 0) {
        var _0x56fae2 = _0x24bc92.shift();
        if (typeof _0x56fae2 == "function") {
          _0x56fae2(_0x1d435e);
          continue;
        }
        var _0xcf1f96 = _0x56fae2.func;
        if (typeof _0xcf1f96 == "number") {
          if (_0x56fae2.arg === undefined) {
            (function () {
              _0x5d5381.call(null, _0xcf1f96);
            })();
          } else {
            (function (_0x4c23c4) {
              _0x4f74e2.apply(null, [_0xcf1f96, _0x4c23c4]);
            })(_0x56fae2.arg);
          }
        } else {
          _0xcf1f96(_0x56fae2.arg === undefined ? null : _0x56fae2.arg);
        }
      }
    }
    function _0x14b627(_0x236897) {
      var _0x34402c = _0x17876e();
      var _0xead1ee = _0x236897();
      _0x9d36f7(_0x34402c);
      return _0xead1ee;
    }
    function _0x1e3604(_0x50f0fb) {
      return _0x50f0fb;
    }
    function _0x40132e(_0x574832) {
      var _0x4979aa = /\b_Z[\w\d_]+/g;
      return _0x574832.replace(_0x4979aa, function (_0x4f5c4d) {
        var _0x2bef10 = _0x1e3604(_0x4f5c4d);
        if (_0x4f5c4d === _0x2bef10) {
          return _0x4f5c4d;
        } else {
          return _0x2bef10 + " [" + _0x4f5c4d + "]";
        }
      });
    }
    function _0x41898c(_0x1183f4, _0x22b7d1, _0x41edc7) {
      var _0x32fe81 = _0x1d435e["dynCall_" + _0x1183f4];
      if (_0x41edc7 && _0x41edc7.length) {
        return _0x32fe81.apply(null, [_0x22b7d1].concat(_0x41edc7));
      } else {
        return _0x32fe81.call(null, _0x22b7d1);
      }
    }
    function _0x1d5130(_0x153e83, _0x1edbbc, _0x34a14c) {
      return _0x41898c(_0x153e83, _0x1edbbc, _0x34a14c);
    }
    function _0x4bbf2b(_0x792df1) {
      if (_0x792df1 instanceof _0x466466 || _0x792df1 == "unwind") {
        return _0xe78001;
      }
      _0x399cff(1, _0x792df1);
    }
    function _0x22cd2c() {
      var _0x4aca5d = new Error();
      if (!_0x4aca5d.stack) {
        try {
          throw new Error();
        } catch (_0x49fefc) {
          _0x4aca5d = _0x49fefc;
        }
        if (!_0x4aca5d.stack) {
          return "(no stack trace available)";
        }
      }
      return _0x4aca5d.stack.toString();
    }
    function _0xf3cbef() {
      var _0x359a85 = _0x22cd2c();
      if (_0x1d435e.extraStackTrace) {
        _0x359a85 += "\n" + _0x1d435e.extraStackTrace();
      }
      return _0x40132e(_0x359a85);
    }
    function _0x46b4ac(_0x1d71e6, _0x2b362e, _0xce08c8, _0x10b5ea, _0x5c1bc1) {
      var _0x14f557 = _0x5eaf00(_0x1d71e6);
      var _0x3c4c9f = _0x5eaf00(_0x2b362e);
      var _0x211290 = _0x5eaf00(_0xce08c8);
      var _0xe36f77 = _0x5eaf00(_0x10b5ea);
      var _0x51107d = _0x5eaf00(_0x5c1bc1);
      try {
        firebase.firestore().collection(_0x14f557).add(JSON.parse(_0x3c4c9f)).then(function (_0x5f243f) {
          window.unityInstance.SendMessage(_0x211290, _0xe36f77, "Success: document added in collection " + _0x14f557);
        }).catch(function (_0x1926d3) {
          window.unityInstance.SendMessage(_0x211290, _0x51107d, JSON.stringify(_0x1926d3, Object.getOwnPropertyNames(_0x1926d3)));
        });
      } catch (_0x4a5d02) {
        window.unityInstance.SendMessage(_0x211290, _0x51107d, JSON.stringify(_0x4a5d02, Object.getOwnPropertyNames(_0x4a5d02)));
      }
    }
    function _0x31ed5e(_0x4f3d1d, _0x2fe636, _0x56ded6, _0x1df1b3, _0x119f22, _0x845c2, _0x313d8d) {
      var _0x5512a1 = _0x5eaf00(_0x4f3d1d);
      var _0x110f81 = _0x5eaf00(_0x2fe636);
      var _0xc23edf = _0x5eaf00(_0x56ded6);
      var _0x532340 = _0x5eaf00(_0x1df1b3);
      var _0x1af53c = _0x5eaf00(_0x119f22);
      var _0x275681 = _0x5eaf00(_0x845c2);
      var _0xfea575 = _0x5eaf00(_0x313d8d);
      try {
        var _0x1df1b3 = {};
        _0x1df1b3[_0xc23edf] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x532340));
        firebase.firestore().collection(_0x5512a1).doc(_0x110f81).update(_0x1df1b3).then(function () {
          window.unityInstance.SendMessage(_0x1af53c, _0x275681, "Success: element " + _0x532340 + " was added in " + _0xc23edf);
        }).catch(function (_0x5f33d9) {
          window.unityInstance.SendMessage(_0x1af53c, _0xfea575, JSON.stringify(_0x5f33d9, Object.getOwnPropertyNames(_0x5f33d9)));
        });
      } catch (_0x2d37c0) {
        window.unityInstance.SendMessage(_0x1af53c, _0xfea575, JSON.stringify(_0x2d37c0, Object.getOwnPropertyNames(_0x2d37c0)));
      }
    }
    function _0x4de5fb(_0x32e44d) {
      try {
        window.CrazyGames.SDK.user.addScore(_0x32e44d);
      } catch (_0x4afe53) {
        window.UnitySDK.logError("Error while calling addScore:", _0x4afe53);
      }
    }
    function _0x17506e(_0x1978ab, _0x193af2) {
      try {
        window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x1978ab), JSON.parse(window.unityStringify(_0x193af2)));
      } catch (_0x5c3b10) {
        window.UnitySDK.logError("Error while calling trackOrder:", _0x5c3b10);
      }
    }
    function _0x405836(_0x35573b) {
      if (!navigator || !navigator.clipboard || !navigator.clipboard.writeText) {
        return 0;
      }
      var _0x8b0cb2 = _0x5eaf00(_0x35573b);
      navigator.clipboard.writeText(_0x8b0cb2).then(() => {
        console.log("Text copied successfully!");
        return 1;
      }).catch(_0x477a9a => {
        console.error("Failed to copy text", _0x477a9a);
        return -1;
      });
    }
    function _0x13ab0d(_0x57b03c) {
      const _0x5c33cf = document.createElement("textarea");
      _0x5c33cf.value = window.unityStringify(_0x57b03c);
      document.body.appendChild(_0x5c33cf);
      _0x5c33cf.select();
      _0x5c33cf.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.body.removeChild(_0x5c33cf);
    }
    function _0x2aefae(_0x596fbb, _0x128aa7, _0x1cff23, _0x35bd31, _0x26c445) {
      var _0x1c8756 = _0x5eaf00(_0x596fbb);
      var _0xdc6133 = _0x5eaf00(_0x128aa7);
      var _0x5c1f25 = _0x5eaf00(_0x1cff23);
      var _0x522c6d = _0x5eaf00(_0x35bd31);
      var _0x27ed08 = _0x5eaf00(_0x26c445);
      try {
        firebase.auth().createUserWithEmailAndPassword(_0x1c8756, _0xdc6133).then(function (_0x4f953b) {
          window.unityInstance.SendMessage(_0x5c1f25, _0x522c6d, "Success: signed up for " + _0x1c8756);
        }).catch(function (_0x41c5d9) {
          window.unityInstance.SendMessage(_0x5c1f25, _0x27ed08, JSON.stringify(_0x41c5d9, Object.getOwnPropertyNames(_0x41c5d9)));
        });
      } catch (_0x2975f1) {
        window.unityInstance.SendMessage(_0x5c1f25, _0x27ed08, JSON.stringify(_0x2975f1, Object.getOwnPropertyNames(_0x2975f1)));
      }
    }
    function _0x31380c() {
      try {
        window.CrazyGames.SDK.data.clear();
      } catch (_0x4582fc) {
        window.UnitySDK.logError("Error while calling clear:", _0x4582fc);
      }
    }
    function _0x5ddd99(_0x43470e) {
      var _0x335d9c = null;
      try {
        _0x335d9c = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x43470e));
      } catch (_0x350dae) {
        window.UnitySDK.logError("Error while calling getItem:", _0x350dae);
      }
      var _0x435465 = _0x3b9e6b(_0x335d9c + "") + 1;
      var _0x23b1ae = _0x14649f(_0x435465);
      _0x17e527(_0x335d9c, _0x23b1ae, _0x435465);
      return _0x23b1ae;
    }
    function _0x2c33bd(_0x2c8b52) {
      var _0x38573d = null;
      try {
        _0x38573d = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x2c8b52));
      } catch (_0x1f1e5e) {
        window.UnitySDK.logError("Error while calling getItem:", _0x1f1e5e);
      }
      return _0x38573d !== null;
    }
    function _0x5e6c97(_0x179bcf) {
      try {
        window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x179bcf));
      } catch (_0x100c95) {
        window.UnitySDK.logError("Error while calling removeItem:", _0x100c95);
      }
    }
    function _0x29e410(_0x1bd638, _0x5a2fb8) {
      try {
        window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x1bd638), window.unityStringify(_0x5a2fb8));
      } catch (_0x1ec1e0) {
        window.UnitySDK.logError("Error while calling setItem:", _0x1ec1e0);
      }
    }
    function _0x1c8b2e(_0x2c7184, _0x23f21e, _0x577ebd, _0x4d2d67, _0x21bbde) {
      var _0x585e36 = _0x5eaf00(_0x2c7184);
      var _0xf314c9 = _0x5eaf00(_0x23f21e);
      var _0x2a6212 = _0x5eaf00(_0x577ebd);
      var _0x5d7ad8 = _0x5eaf00(_0x4d2d67);
      var _0x589b54 = _0x5eaf00(_0x21bbde);
      try {
        firebase.firestore().collection(_0x585e36).doc(_0xf314c9).delete().then(function () {
          window.unityInstance.SendMessage(_0x2a6212, _0x5d7ad8, "Success: document " + _0xf314c9 + " was deleted");
        }).catch(function (_0x9c736f) {
          window.unityInstance.SendMessage(_0x2a6212, _0x589b54, JSON.stringify(_0x9c736f, Object.getOwnPropertyNames(_0x9c736f)));
        });
      } catch (_0x19669b) {
        window.unityInstance.SendMessage(_0x2a6212, _0x589b54, JSON.stringify(_0x19669b, Object.getOwnPropertyNames(_0x19669b)));
      }
    }
    function _0x4716c4(_0x4ac6d5, _0xcec200, _0x2e4ebc, _0x25d659, _0x1ca584, _0x29e854) {
      var _0x31221c = _0x5eaf00(_0x4ac6d5);
      var _0x4a57c4 = _0x5eaf00(_0xcec200);
      var _0x1093e0 = _0x5eaf00(_0x2e4ebc);
      var _0x415cf4 = _0x5eaf00(_0x25d659);
      var _0x481ba9 = _0x5eaf00(_0x1ca584);
      var _0x339786 = _0x5eaf00(_0x29e854);
      try {
        var _0x89bb00 = {};
        _0x89bb00[_0x1093e0] = firebase.firestore.FieldValue.delete();
        firebase.firestore().collection(_0x31221c).doc(_0x4a57c4).update(_0x89bb00).then(function () {
          window.unityInstance.SendMessage(_0x415cf4, _0x481ba9, "Success: field " + _0x1093e0 + " was deleted");
        }).catch(function (_0x5ef275) {
          window.unityInstance.SendMessage(_0x415cf4, _0x339786, JSON.stringify(_0x5ef275, Object.getOwnPropertyNames(_0x5ef275)));
        });
      } catch (_0x51dac8) {
        window.unityInstance.SendMessage(_0x415cf4, _0x339786, JSON.stringify(_0x51dac8, Object.getOwnPropertyNames(_0x51dac8)));
      }
    }
    function _0x5f3a0e(_0x479f7c, _0x26486d, _0x1091d9, _0x49789f) {
      var _0x972238 = _0x5eaf00(_0x479f7c);
      var _0x170733 = _0x5eaf00(_0x26486d);
      var _0x243c05 = _0x5eaf00(_0x1091d9);
      var _0x584280 = _0x5eaf00(_0x49789f);
      try {
        firebase.database().ref(_0x972238).remove().then(function (_0x4061ae) {
          window.unityInstance.SendMessage(_0x170733, _0x243c05, "Success: " + _0x972238 + " was deleted");
        });
      } catch (_0x82142a) {
        window.unityInstance.SendMessage(_0x170733, _0x584280, JSON.stringify(_0x82142a, Object.getOwnPropertyNames(_0x82142a)));
      }
    }
    function _0x1d3199(_0x5c77c5, _0x32fdd2, _0x319529, _0x1eb548) {
      var _0x213774 = _0x5eaf00(_0x5c77c5);
      var _0x150c62 = _0x5eaf00(_0x32fdd2);
      var _0x512cf3 = _0x5eaf00(_0x319529);
      var _0x32cf97 = _0x5eaf00(_0x1eb548);
      try {
        firebase.storage().ref(_0x213774).getDownloadURL().then(function (_0x5491de) {
          var _0x5a0365 = new XMLHttpRequest();
          _0x5a0365.responseType = "arraybuffer";
          _0x5a0365.onload = function (_0x24b2f1) {
            var _0x165879 = _0x5a0365.response;
            window.unityInstance.SendMessage(_0x150c62, _0x512cf3, _0x3066c8(_0x165879));
          };
          _0x5a0365.open("GET", _0x5491de);
          _0x5a0365.send();
        }).catch(function (_0x4644db) {
          window.unityInstance.SendMessage(_0x150c62, _0x32cf97, JSON.stringify(_0x4644db, Object.getOwnPropertyNames(_0x4644db)));
        });
      } catch (_0x142f86) {
        window.unityInstance.SendMessage(_0x150c62, _0x32cf97, JSON.stringify(_0x142f86, Object.getOwnPropertyNames(_0x142f86)));
      }
      function _0x3066c8(_0x490040) {
        var _0xeb4c85 = "";
        var _0x5bffa6 = new Uint8Array(_0x490040);
        var _0x5c1d61 = _0x5bffa6.byteLength;
        for (var _0x51bfe6 = 0; _0x51bfe6 < _0x5c1d61; _0x51bfe6++) {
          _0xeb4c85 += String.fromCharCode(_0x5bffa6[_0x51bfe6]);
        }
        return window.btoa(_0xeb4c85);
      }
    }
    function _0x34c0c6() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
        window[preroll.config.loaderObjectName].refetchAd();
      } catch (_0x5394b8) {
        console.log("No WeeGooAFG implementation found!");
      }
    }
    function _0x37615c(_0x59bcaf) {
      var _0x59f1ea = {
        adStarted: function () {
          _0x5e20c0("GMSDKAdvertisement", "JSLibCallback_AdStarted");
        },
        adFinished: function () {
          _0x5e20c0("GMSDKAdvertisement", "JSLibCallback_AdFinished");
        },
        adError: function (_0x1737f0) {
          _0x5e20c0("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x1737f0));
        }
      };
      var _0x1e5f5e = window.GMSOFT_GMADS_INFO.reward;
      var _0x8583bb = _0x1e5f5e[Math.floor(Math.random() * _0x1e5f5e.length)];
      try {
        var _0x803650 = document.createElement("div");
        _0x803650.id = "gm-ad-overlay";
        _0x803650.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
        var _0x4beccf = document.createElement("div");
        _0x4beccf.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
        var _0x18f1c0 = document.createElement("video");
        _0x18f1c0.src = _0x8583bb.image;
        _0x18f1c0.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
        _0x18f1c0.autoplay = true;
        _0x18f1c0.muted = true;
        _0x18f1c0.preload = "auto";
        var _0x1209a3 = document.createElement("button");
        _0x1209a3.innerHTML = "Skip (5)";
        _0x1209a3.disabled = true;
        _0x1209a3.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
        _0x1209a3.disabled = true;
        _0x1209a3.style.opacity = "0.5";
        var _0x1c5b1e = document.createElement("div");
        _0x1c5b1e.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
        var _0x5b419c = document.createElement("div");
        _0x5b419c.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
        var _0x32f4ec = 5;
        var _0x1f860b = setInterval(function () {
          _0x32f4ec--;
          if (_0x32f4ec > 0) {
            _0x1209a3.innerHTML = "Skip (" + _0x32f4ec + ")";
          } else {
            _0x1209a3.innerHTML = "Skip";
            _0x1209a3.disabled = false;
            _0x1209a3.style.opacity = "1";
            _0x1209a3.style.cursor = "pointer";
            clearInterval(_0x1f860b);
          }
        }, 1000);
        function _0x3d9910() {
          if (_0x803650 && _0x803650.parentNode) {
            _0x803650.parentNode.removeChild(_0x803650);
          }
          clearInterval(_0x1f860b);
          _0x59f1ea.adFinished();
        }
        function _0x237d31() {
          window.open(_0x8583bb.url, "_blank");
        }
        function _0x910647() {
          if (_0x18f1c0.duration && _0x18f1c0.currentTime) {
            var _0x463985 = _0x18f1c0.currentTime / _0x18f1c0.duration * 100;
            _0x5b419c.style.width = _0x463985 + "%";
          }
        }
        _0x18f1c0.addEventListener("loadstart", function () {
          _0x59f1ea.adStarted();
        });
        _0x18f1c0.addEventListener("timeupdate", function () {
          _0x910647();
        });
        _0x18f1c0.addEventListener("ended", function () {
          _0x3d9910();
        });
        _0x18f1c0.addEventListener("error", function (_0x47f615) {
          var _0x380929 = {
            message: "Video load error",
            code: _0x47f615.target.error ? _0x47f615.target.error.code : "unknown"
          };
          _0x59f1ea.adError(_0x380929);
          _0x3d9910();
        });
        _0x18f1c0.addEventListener("click", function () {
          _0x237d31();
        });
        _0x1209a3.addEventListener("click", function () {
          if (!_0x1209a3.disabled) {
            _0x3d9910();
          }
        });
        _0x18f1c0.addEventListener("contextmenu", function (_0x2b445a) {
          _0x2b445a.preventDefault();
        });
        _0x1c5b1e.appendChild(_0x5b419c);
        _0x4beccf.appendChild(_0x18f1c0);
        _0x4beccf.appendChild(_0x1209a3);
        _0x4beccf.appendChild(_0x1c5b1e);
        _0x803650.appendChild(_0x4beccf);
        document.body.appendChild(_0x803650);
        _0x18f1c0.play().catch(function (_0x3139a8) {
          console.error("Video play error:", _0x3139a8);
          _0x59f1ea.adError({
            message: "Cannot play video",
            details: _0x3139a8.message
          });
          _0x3d9910();
        });
      } catch (_0x227b75) {
        console.error("Ad overlay creation error:", _0x227b75);
        _0x59f1ea.adError({
          message: "Failed to create ad overlay",
          details: _0x227b75.message
        });
      }
    }
    function _0x496cfe(_0x43668e, _0x1d7fe1) {
      gmEvent(_0x5eaf00(_0x43668e), _0x5eaf00(_0x1d7fe1));
    }
    function _0x519d9e() {
      const _0x5a8079 = "gmsdksigndomain";
      try {
        if (localStorage.hasOwnProperty(_0x5a8079)) {
          let _0x3e8d8a = localStorage.getItem(_0x5a8079);
          if (_0x3e8d8a && _0x3e8d8a.length > 10) {
            window.GMSOFT_SIGNED = _0x3e8d8a;
            console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
            _0x5e20c0("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
            return;
          }
        }
      } catch (_0x26c7ba) {
        console.error("Error getting GM_SDK_GetVeryfiedSignature from local storage: ", _0x26c7ba);
      }
      try {
        let _0x59bb2a = "hn=" + "https://games.1games.io";
        let _0x1a300e = btoa(_0x59bb2a);
        let _0xecc0c0 = "https://api.cdnwave.com/sdkdom/keysigned";
        if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
          _0xecc0c0 = window.GMSOFT_OPTIONS.signedurl;
        }
        let _0x51c731 = _0xecc0c0 + "?params=" + _0x1a300e;
        var _0x4b0d7a = new XMLHttpRequest();
        let _0x1009f5 = "";
        _0x4b0d7a.open("GET", _0x51c731, false);
        _0x4b0d7a.send(_0x1009f5);
        let _0x526155 = _0x4b0d7a.responseText;
        window.GMSOFT_SIGNED = _0x526155;
        localStorage.setItem(_0x5a8079, _0x526155);
        console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
        _0x5e20c0("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
      } catch (_0xc1788f) {
        console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0xc1788f);
      }
    }
    function _0x5bd6c7() {
      let _0x36e05c = "https://games.1games.io";
      _0x5e20c0("GmSoft", "SetUnityHostName", _0x36e05c);
      _0x5e20c0("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
    }
    function _0xd39a0() {
      console.log("GM_SDK_StartGame");
      try {
        gmStartGame(function () {
          _0x5e20c0("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
        });
      } catch (_0x378427) {
        console.error("Error JS 12", _0x378427);
      }
      try {
        gmStartAds(function () {
          _0x5e20c0("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
        });
      } catch (_0x2f0075) {
        console.error("Error JS 20", _0x2f0075);
      }
      try {
        document.addEventListener("gmsoftbanevent", _0x15d121 => {
          _0x5e20c0("GmSoft", "LockGame", _0x15d121.detail);
        });
      } catch (_0x2b6d08) {
        console.error("Error JS 28", _0x2b6d08);
      }
    }
    function _0x13e35b(_0x2be799) {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
        window[preroll.config.loaderObjectName].GameEvent(_0x2be799);
      } catch (_0xdf630e) {
        console.log("No WeeGooAFG implementation found!");
      }
    }
    function _0x43e7af() {
      try {
        window.CrazyGames.SDK.game.gameplayStart();
      } catch (_0x1b1bd4) {
        window.UnitySDK.logError("Error while calling gameplayStart:", _0x1b1bd4);
      }
    }
    function _0x11d330() {
      try {
        window.CrazyGames.SDK.game.gameplayStop();
      } catch (_0x285ecf) {
        window.UnitySDK.logError("Error while calling gameplayStop:", _0x285ecf);
      }
    }
    function _0x4ce4eb() {
      var _0x34dfb7 = firebaseConfig.projectId;
      var _0x28a959 = _0x3b9e6b(_0x34dfb7) + 1;
      var _0x453866 = _0x14649f(_0x28a959);
      _0x17e527(_0x34dfb7, _0x453866, _0x28a959);
      return _0x453866;
    }
    function _0x25f27b(_0x5d3182, _0x348d34, _0x51d339, _0x515e8e, _0x3c1252) {
      var _0x24d5a8 = _0x5eaf00(_0x5d3182);
      var _0x434844 = _0x5eaf00(_0x348d34);
      var _0x2ff2e5 = _0x5eaf00(_0x51d339);
      var _0x5dd06c = _0x5eaf00(_0x515e8e);
      var _0x559cdc = _0x5eaf00(_0x3c1252);
      try {
        firebase.firestore().collection(_0x24d5a8).doc(_0x434844).get().then(function (_0x4f87ac) {
          if (_0x4f87ac.exists) {
            window.unityInstance.SendMessage(_0x2ff2e5, _0x5dd06c, JSON.stringify(_0x4f87ac.data()));
          } else {
            window.unityInstance.SendMessage(_0x2ff2e5, _0x5dd06c, "null");
          }
        }).catch(function (_0x521dd1) {
          window.unityInstance.SendMessage(_0x2ff2e5, _0x559cdc, JSON.stringify(_0x521dd1, Object.getOwnPropertyNames(_0x521dd1)));
        });
      } catch (_0x55ea59) {
        window.unityInstance.SendMessage(_0x2ff2e5, _0x559cdc, JSON.stringify(_0x55ea59, Object.getOwnPropertyNames(_0x55ea59)));
      }
    }
    function _0x45623f(_0x5b1e44, _0x41f21a, _0x5bc106, _0xde6efd) {
      var _0x20ff96 = _0x5eaf00(_0x5b1e44);
      var _0x47c836 = _0x5eaf00(_0x41f21a);
      var _0x5883ab = _0x5eaf00(_0x5bc106);
      var _0x202911 = _0x5eaf00(_0xde6efd);
      try {
        firebase.firestore().collection(_0x20ff96).get().then(function (_0x354388) {
          var _0x4d7b8f = {};
          _0x354388.forEach(function (_0x1003bf) {
            _0x4d7b8f[_0x1003bf.id] = _0x1003bf.data();
          });
          window.unityInstance.SendMessage(_0x47c836, _0x5883ab, JSON.stringify(_0x4d7b8f));
        }).catch(function (_0x2492c3) {
          window.unityInstance.SendMessage(_0x47c836, _0x202911, JSON.stringify(_0x2492c3, Object.getOwnPropertyNames(_0x2492c3)));
        });
      } catch (_0x212b58) {
        window.unityInstance.SendMessage(_0x47c836, _0x202911, JSON.stringify(_0x212b58, Object.getOwnPropertyNames(_0x212b58)));
      }
    }
    function _0x9e80da() {
      var _0x2e03f3 = window.CrazyGames.SDK.environment;
      var _0x5b85de = _0x3b9e6b(_0x2e03f3) + 1;
      var _0x5cf901 = _0x14649f(_0x5b85de);
      _0x17e527(_0x2e03f3, _0x5cf901, _0x5b85de);
      return _0x5cf901;
    }
    function _0x26ade4() {
      var _0x50f222 = JSON.stringify(window.CrazyGames.SDK.game.settings);
      var _0x55dd26 = _0x3b9e6b(_0x50f222) + 1;
      var _0x2479e5 = _0x14649f(_0x55dd26);
      _0x17e527(_0x50f222, _0x2479e5, _0x55dd26);
      return _0x2479e5;
    }
    function _0xee679d(_0x4be656) {
      var _0xf88573 = new URLSearchParams(window.location.search);
      var _0x53f86e = _0xf88573.get(window.unityStringify(_0x4be656));
      if (_0x53f86e === null) {
        _0x53f86e = "";
      }
      var _0x224f1c = _0x3b9e6b(_0x53f86e) + 1;
      var _0x286b9a = _0x14649f(_0x224f1c);
      _0x17e527(_0x53f86e, _0x286b9a, _0x224f1c);
      return _0x286b9a;
    }
    function _0x4e2503() {
      return window.CrazyGames.SDK.isQaTool;
    }
    function _0x40c298(_0x27e9f7, _0x52e332) {
      if (performance.memory) {
        _0x1231b6[_0x27e9f7 >> 3] = performance.memory.totalJSHeapSize;
        _0x1231b6[_0x52e332 >> 3] = performance.memory.usedJSHeapSize;
      } else {
        _0x1231b6[_0x27e9f7 >> 3] = NaN;
        _0x1231b6[_0x52e332 >> 3] = NaN;
      }
    }
    function _0x25a694(_0x139a49, _0x3dc23e, _0x36bc10, _0x29ccc7) {
      var _0x348a55 = _0x5eaf00(_0x139a49);
      var _0x481d10 = _0x5eaf00(_0x3dc23e);
      var _0x3c850e = _0x5eaf00(_0x36bc10);
      var _0x2df68e = _0x5eaf00(_0x29ccc7);
      try {
        firebase.database().ref(_0x348a55).once("value").then(function (_0x43031f) {
          window.unityInstance.SendMessage(_0x481d10, _0x3c850e, JSON.stringify(_0x43031f.val()));
        });
      } catch (_0x570604) {
        window.unityInstance.SendMessage(_0x481d10, _0x2df68e, JSON.stringify(_0x570604, Object.getOwnPropertyNames(_0x570604)));
      }
    }
    function _0x408cb9() {
      var _0x37d61c = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
      var _0x5715ad = _0x3b9e6b(_0x37d61c) + 1;
      var _0x45c2f4 = _0x14649f(_0x5715ad);
      _0x17e527(_0x37d61c, _0x45c2f4, _0x5715ad);
      return _0x45c2f4;
    }
    function _0x17c1ad() {
      window.CrazyGames.SDK.user.getUser().then(function (_0x5a86ee) {
        _0x5e20c0("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
          userJson: JSON.stringify(_0x5a86ee)
        }));
      }).catch(function (_0x5a1838) {
        _0x5e20c0("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
          errorJson: JSON.stringify(_0x5a1838)
        }));
      });
    }
    function _0x407aa3() {
      window.CrazyGames.SDK.user.getUserToken().then(function (_0x11c35d) {
        _0x5e20c0("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
          token: _0x11c35d
        }));
      }).catch(function (_0xa11743) {
        _0x5e20c0("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
          errorJson: JSON.stringify(_0xa11743)
        }));
      });
    }
    function _0x5f5a97() {
      window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x1be0f1) {
        _0x5e20c0("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
          token: _0x1be0f1
        }));
      }).catch(function (_0x32be16) {
        _0x5e20c0("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
          errorJson: JSON.stringify(_0x32be16)
        }));
      });
    }
    function _0x15d746() {}
    function _0x24b717() {
      console.log("afg.ready: " + afg.ready);
      if (afg.ready) {
        _0x5e20c0("H5Adverisement", "PreloadRewardedVideoCallback", 1);
        afg.adBreak({
          type: "reward",
          name: "reward ads",
          beforeReward: function (_0x25ba5b) {
            this._showRewardAdFn = _0x25ba5b;
            console.log("[H5 Ads] before reward");
          }.bind(this),
          adViewed: function () {
            this._showRewardAdFn = null;
            _0x5e20c0("H5Adverisement", "RewardedVideoSuccessCallback");
            console.log("[H5 Ads] ad viewed");
          }.bind(this),
          adDismissed: function () {
            this._showRewardAdFn = null;
            _0x5e20c0("H5Adverisement", "RewardedVideoFailureCallback");
            console.log("[H5 Ads] ad failure");
          }.bind(this),
          adBreakDone: function (_0x23736d) {
            console.log("[H5 Ads] Reward break done");
            _0x5e20c0("H5Adverisement", "ResumeGameCallback");
          }.bind(this)
        });
      } else {
        console.log("[H5 Ads] no reward ads");
        _0x5e20c0("H5Adverisement", "PreloadRewardedVideoCallback", 0);
      }
    }
    function _0x1cf477() {
      if (afg.ready) {
        afg.adBreak({
          type: "next",
          name: "next",
          beforeAd: function () {
            afg.onBeforeAd();
            console.log("[H5 Ads] Before ad");
            _0x5e20c0("H5Adverisement", "PauseGameCallback");
          }.bind(this),
          adBreakDone: function () {
            console.log("[H5 Ads] Ad break done");
            _0x5e20c0("H5Adverisement", "ResumeGameCallback");
          }.bind(this)
        });
      } else {
        console.log("no " + adType + " ads");
        _0x5e20c0("H5Adverisement", "ResumeGameCallback");
      }
    }
    function _0x4bc0f3() {
      if (this._showRewardAdFn) {
        _0x5e20c0("H5Adverisement", "PauseGameCallback");
        this._showRewardAdFn();
      } else {
        _0x5e20c0("H5Adverisement", "ResumeGameCallback");
      }
    }
    function _0x16b7cc() {
      try {
        window.CrazyGames.SDK.game.happytime();
      } catch (_0x535717) {
        window.UnitySDK.logError("Error while calling happytime:", _0x535717);
      }
    }
    function _0x1fd807() {
      try {
        window.CrazyGames.SDK.game.hideInviteButton();
      } catch (_0x2f9881) {
        window.UnitySDK.logError("Error while calling hideInviteButton:", _0x2f9881);
      }
    }
    function _0x543523(_0x5282e5, _0x4b2ca6, _0x41ee85, _0x4fb1da, _0x2ca7d6, _0xeff0ea, _0x2f69df) {
      var _0xf61a57 = _0x5eaf00(_0x5282e5);
      var _0xc70d69 = _0x5eaf00(_0x4b2ca6);
      var _0x5cc0e4 = _0x5eaf00(_0x41ee85);
      var _0x4cb0dc = _0x5eaf00(_0x2ca7d6);
      var _0x2d2331 = _0x5eaf00(_0xeff0ea);
      var _0x2fd2fb = _0x5eaf00(_0x2f69df);
      try {
        var _0x26520e = {};
        _0x26520e[_0x5cc0e4] = firebase.firestore.FieldValue.increment(_0x4fb1da);
        firebase.firestore().collection(_0xf61a57).doc(_0xc70d69).update(_0x26520e).then(function () {
          window.unityInstance.SendMessage(_0x4cb0dc, _0x2d2331, "Success: incremented " + _0x5cc0e4 + " by " + _0x4fb1da);
        }).catch(function (_0xba2cf3) {
          window.unityInstance.SendMessage(_0x4cb0dc, _0x2fd2fb, JSON.stringify(_0xba2cf3, Object.getOwnPropertyNames(_0xba2cf3)));
        });
      } catch (_0x20d5c3) {
        window.unityInstance.SendMessage(_0x4cb0dc, _0x2fd2fb, JSON.stringify(_0x20d5c3, Object.getOwnPropertyNames(_0x20d5c3)));
      }
    }
    function _0x322277(_0x507519) {
      if (typeof _0x5eaf00 !== "undefined") {
        window.unityStringify = _0x5eaf00;
      } else {
        window.unityStringify = _0x5eaf00;
      }
      window.UnitySDK = {
        version: window.unityStringify(_0x507519),
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
          var _0xe836bf = Array.prototype.slice.call(arguments);
          _0xe836bf.unshift("[JsLib]");
          console.error.apply(console, _0xe836bf);
        }
      };
      var _0x12a300 = {
        wrapper: {
          engine: "unity",
          sdkVersion: window.unityStringify(_0x507519)
        }
      };
      var _0x4bd080 = document.createElement("script");
      _0x4bd080.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
      document.head.appendChild(_0x4bd080);
      _0x4bd080.addEventListener("load", function () {
        window.CrazyGames.SDK.init(_0x12a300).then(function () {
          _0x5e20c0("CrazySDKSingleton", "JSLibCallback_Init");
          window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x3633c1) {
            _0x5e20c0("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x3633c1 ? 1 : 0);
          }).catch(function (_0x286385) {
            window.UnitySDK.logError("Error while checking adblock:", _0x286385);
            _0x5e20c0("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
          });
          window.CrazyGames.SDK.user.addAuthListener(function (_0x365af8) {
            _0x5e20c0("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
              userJson: JSON.stringify(_0x365af8)
            }));
          });
        });
      });
    }
    function _0x45d7a2() {
      return window.CrazyGames.SDK.user.isUserAccountAvailable;
    }
    var _0x270b9a = null;
    var _0x4d8904 = 0;
    function _0x554154() {
      return _0x270b9a && _0x270b9a.activated || _0x4d8904 != 0;
    }
    var _0x3d76d6 = 1;
    var _0x2207c8 = {
      x: 0,
      y: 0,
      z: 0
    };
    function _0xa0ba9b() {
      _0x2207c8 = {
        x: _0x270b9a.x * _0x3d76d6,
        y: _0x270b9a.y * _0x3d76d6,
        z: _0x270b9a.z * _0x3d76d6
      };
      if (_0x4d8904 != 0) {
        _0x1c790d(_0x4d8904, _0x2207c8.x, _0x2207c8.y, _0x2207c8.z);
      }
    }
    var _0x5cf324 = 0;
    var _0x2978c6 = 0;
    var _0x605a82 = 0;
    var _0x584d44 = 0;
    var _0xf59589 = 0;
    function _0x4d7e81(_0x1a8983, _0x53d6ea) {
      var _0x3103a9 = {
        x: _0x1a8983.x - _0x53d6ea.x,
        y: _0x1a8983.y - _0x53d6ea.y,
        z: _0x1a8983.z - _0x53d6ea.z
      };
      var _0x33d730 = _0x3103a9.x * _0x3103a9.x + _0x3103a9.y * _0x3103a9.y + _0x3103a9.z * _0x3103a9.z;
      var _0x3254f0 = {
        x: _0x1a8983.x + _0x53d6ea.x,
        y: _0x1a8983.y + _0x53d6ea.y,
        z: _0x1a8983.z + _0x53d6ea.z
      };
      var _0x2fcc81 = _0x3254f0.x * _0x3254f0.x + _0x3254f0.y * _0x3254f0.y + _0x3254f0.z * _0x3254f0.z;
      if (_0x33d730 <= _0x2fcc81) {
        return _0x3103a9;
      } else {
        return _0x3254f0;
      }
    }
    function _0x454ad4(_0xfe3f6d) {
      var _0x2ad3a0 = {
        x: _0xfe3f6d.accelerationIncludingGravity.x * _0x3d76d6,
        y: _0xfe3f6d.accelerationIncludingGravity.y * _0x3d76d6,
        z: _0xfe3f6d.accelerationIncludingGravity.z * _0x3d76d6
      };
      if (_0x4d8904 != 0) {
        _0x1c790d(_0x4d8904, _0x2ad3a0.x, _0x2ad3a0.y, _0x2ad3a0.z);
      }
      var _0x36652f = {
        x: _0xfe3f6d.acceleration.x * _0x3d76d6,
        y: _0xfe3f6d.acceleration.y * _0x3d76d6,
        z: _0xfe3f6d.acceleration.z * _0x3d76d6
      };
      if (_0x605a82 != 0) {
        _0x1c790d(_0x605a82, _0x36652f.x, _0x36652f.y, _0x36652f.z);
      }
      if (_0x584d44 != 0) {
        var _0x3df7f2 = _0x4d7e81(_0x2ad3a0, _0x36652f);
        _0x1c790d(_0x584d44, _0x3df7f2.x, _0x3df7f2.y, _0x3df7f2.z);
      }
      if (_0xf59589 != 0) {
        var _0x5c364e = Math.PI / 180;
        _0x1c790d(_0xf59589, _0xfe3f6d.rotationRate.alpha * _0x5c364e, _0xfe3f6d.rotationRate.beta * _0x5c364e, _0xfe3f6d.rotationRate.gamma * _0x5c364e);
      }
    }
    var _0x44e21d = 0;
    function _0x29431f(_0x4dde5e) {
      if (_0x4dde5e & 1) {
        if (typeof DeviceOrientationEvent.requestPermission === "function") {
          DeviceOrientationEvent.requestPermission().then(function (_0x495f54) {
            if (_0x495f54 === "granted") {
              _0x44e21d &= ~1;
            } else {
              _0x95491a("DeviceOrientationEvent permission not granted");
            }
          }).catch(function (_0x53303e) {
            _0x95491a(_0x53303e);
            _0x44e21d |= 1;
          });
        }
      }
      if (_0x4dde5e & 2) {
        if (typeof DeviceMotionEvent.requestPermission === "function") {
          DeviceMotionEvent.requestPermission().then(function (_0x105593) {
            if (_0x105593 === "granted") {
              _0x44e21d &= ~2;
            } else {
              _0x95491a("DeviceMotionEvent permission not granted");
            }
          }).catch(function (_0x438952) {
            _0x95491a(_0x438952);
            _0x44e21d |= 2;
          });
        }
      }
    }
    function _0x2f1df3() {
      if (_0x4d8904 == 0 && _0x605a82 == 0 && _0x584d44 == 0 && _0xf59589 == 0) {
        _0x29431f(2);
        window.addEventListener("devicemotion", _0x454ad4);
      }
    }
    function _0x46380b() {
      var _0x5d28c7 = 9.80665;
      _0x3d76d6 = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x5d28c7 : -1 / _0x5d28c7;
    }
    function _0x4d21fc(_0x58f2c3, _0x31f02e) {
      _0x46380b();
      if (typeof Accelerometer === "undefined") {
        _0x2f1df3();
        if (_0x58f2c3 != 0) {
          _0x4d8904 = _0x58f2c3;
        }
        return;
      }
      if (_0x58f2c3 != 0) {
        _0x4d8904 = _0x58f2c3;
      }
      function _0x10846a(_0x322eca) {
        _0x270b9a = new Accelerometer({
          frequency: _0x322eca,
          referenceFrame: "device"
        });
        _0x270b9a.addEventListener("reading", _0xa0ba9b);
        _0x270b9a.addEventListener("error", function (_0x2a52b4) {
          _0x95491a(_0x2a52b4.error ? _0x2a52b4.error : _0x2a52b4);
        });
        _0x270b9a.start();
        _0x2978c6 = _0x322eca;
      }
      if (_0x270b9a) {
        if (_0x2978c6 != _0x31f02e) {
          _0x270b9a.stop();
          _0x270b9a.removeEventListener("reading", _0xa0ba9b);
          _0x10846a(_0x31f02e);
        }
      } else if (_0x5cf324 != 0) {
        _0x5cf324 = _0x31f02e;
      } else {
        _0x5cf324 = _0x31f02e;
        navigator.permissions.query({
          name: "accelerometer"
        }).then(function (_0x1bc0ab) {
          if (_0x1bc0ab.state === "granted") {
            _0x10846a(_0x5cf324);
          } else {
            _0x95491a("No permission to use Accelerometer.");
          }
          _0x5cf324 = 0;
        });
      }
    }
    function _0x5241ca() {
      if (_0x4d8904 == 0 && _0x605a82 == 0 && _0x584d44 == 0 && _0xf59589 == 0) {
        window.removeEventListener("devicemotion", _0x504d90);
      }
    }
    function _0x3f2011() {
      if (_0x270b9a) {
        if (typeof GravitySensor !== "undefined" || _0x584d44 == 0) {
          _0x270b9a.stop();
          _0x270b9a.removeEventListener("reading", _0xa0ba9b);
          _0x270b9a = null;
        }
        _0x4d8904 = 0;
        _0x2978c6 = 0;
      } else if (_0x4d8904 != 0) {
        _0x4d8904 = 0;
        _0x5241ca();
      }
    }
    var _0x351fc9 = 0;
    function _0x263dbe(_0x5112be) {
      if (!_0x351fc9) {
        try {
          (function () {
            _0x5d5381.call(null, _0x5112be);
          })();
        } catch (_0x53dd47) {
          _0x351fc9 = 1;
          console.error("Uncaught exception from main loop:");
          console.error(_0x53dd47);
          console.error("Halting program.");
          if (_0x1d435e.errorHandler) {
            _0x1d435e.errorHandler(_0x53dd47);
          }
          throw _0x53dd47;
        }
      }
    }
    function _0x390b7a(_0x159880, _0x19a9a0) {
      var _0x1f09a3 = "";
      for (var _0x562f0d = 0; _0x562f0d < _0x19a9a0; _0x562f0d++) {
        _0x1f09a3 += String.fromCharCode(_0x5f38b4[_0x159880 + _0x562f0d]);
      }
      _0x1d435e.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x1f09a3) + "),default";
    }
    function _0x29b4d9(_0x3e8cdc) {
      _0x1d435e.canvas.style.cursor = _0x3e8cdc ? "default" : "none";
    }
    function _0x461080(_0x2ed3f5) {
      if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
        return window.CSS.escape(_0x2ed3f5);
      }
      return _0x2ed3f5.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
    }
    function _0x52c8bf() {
      var _0x1855db = _0x1d435e.canvas ? _0x1d435e.canvas.id : "unity-canvas";
      return "#" + _0x461080(_0x1855db);
    }
    function _0x3f1332(_0x17b2a8, _0x5aadfc, _0x5732bb, _0x292044) {
      var _0x5354ac = document.querySelector(_0x52c8bf());
      var _0x19fac2 = _0x5354ac && _0x5354ac.getBoundingClientRect();
      _0x5db304[_0x5732bb >> 2] = _0x17b2a8 - (_0x19fac2 ? _0x19fac2.left : 0);
      _0x5db304[_0x292044 >> 2] = _0x5aadfc - (_0x19fac2 ? _0x19fac2.top : 0);
    }
    function _0x3a50c3(_0x1095f1) {
      var _0x37ed43 = _0x3b9e6b(_0x1095f1) + 1;
      var _0x2dcf3a = _0x14649f(_0x37ed43);
      _0x17e527(_0x1095f1, _0x2dcf3a, _0x37ed43);
      return _0x2dcf3a;
    }
    function _0x1fb237() {
      var _0x263120 = _0x52c8bf();
      if (_0x1fb237.selector != _0x263120) {
        _0x540f62(_0x1fb237.ptr);
        _0x1fb237.ptr = _0x3a50c3(_0x263120);
        _0x1fb237.selector = _0x263120;
      }
      return _0x1fb237.ptr;
    }
    function _0x103510(_0x4e3ab4) {
      var _0x450808 = _0x5eaf00(_0x4e3ab4);
      try {
        eval(_0x450808);
      } catch (_0x12bbe3) {
        console.error(_0x12bbe3);
      }
    }
    function _0x456529(_0x5ad1ce) {
      var _0x2315e7 = _0x5eaf00(_0x5ad1ce);
      window.open(_0x2315e7, "_blank", "");
    }
    function _0x536950() {}
    function _0x1e0c3c() {
      _0x4082a3.queuePersist(_0x1d435e.__unityIdbfsMount.mount);
      if (!window.warnedAboutManualFilesystemSyncGettingDeprecated) {
        window.warnedAboutManualFilesystemSyncGettingDeprecated = true;
        if (!_0x1d435e.autoSyncPersistentDataPath) {
          console.warn("Manual synchronization of Unity Application.persistentDataPath via JS_FileSystem_Sync() is deprecated and will be later removed in a future Unity version. The persistent data directory will be automatically synchronized instead on file modification. Pass config.autoSyncPersistentDataPath = true; to configuration in createUnityInstance() to opt in to the new behavior.");
        }
      }
    }
    var _0x5f1aa4 = null;
    function _0x4dbe5a() {
      if (typeof GravitySensor !== "undefined") {
        return _0x5f1aa4 && _0x5f1aa4.activated;
      } else {
        return _0x584d44 != 0;
      }
    }
    function _0x2930ad() {
      if (_0x584d44 != 0) {
        _0x1c790d(_0x584d44, _0x5f1aa4.x * _0x3d76d6, _0x5f1aa4.y * _0x3d76d6, _0x5f1aa4.z * _0x3d76d6);
      }
    }
    var _0x11a3b4 = 0;
    var _0x451dea = null;
    function _0x3a85b5() {
      var _0x42d4f5 = {
        x: _0x451dea.x * _0x3d76d6,
        y: _0x451dea.y * _0x3d76d6,
        z: _0x451dea.z * _0x3d76d6
      };
      if (_0x605a82 != 0) {
        _0x1c790d(_0x605a82, _0x42d4f5.x, _0x42d4f5.y, _0x42d4f5.z);
      }
      if (_0x584d44 != 0 && typeof GravitySensor === "undefined") {
        var _0x44ff91 = _0x4d7e81(_0x2207c8, _0x42d4f5);
        _0x1c790d(_0x584d44, _0x44ff91.x, _0x44ff91.y, _0x44ff91.z);
      }
    }
    var _0x61eb1a = 0;
    var _0x4d9491 = 0;
    function _0x11ba59(_0x479bc4, _0x1325d6) {
      _0x46380b();
      if (typeof LinearAccelerationSensor === "undefined") {
        _0x2f1df3();
        if (_0x479bc4 != 0) {
          _0x605a82 = _0x479bc4;
        }
        return;
      }
      if (_0x479bc4 != 0) {
        _0x605a82 = _0x479bc4;
      }
      function _0x2f298c(_0x374739) {
        _0x451dea = new LinearAccelerationSensor({
          frequency: _0x374739,
          referenceFrame: "device"
        });
        _0x451dea.addEventListener("reading", _0x3a85b5);
        _0x451dea.addEventListener("error", function (_0x1119dd) {
          _0x95491a(_0x1119dd.error ? _0x1119dd.error : _0x1119dd);
        });
        _0x451dea.start();
        _0x4d9491 = _0x374739;
      }
      if (_0x451dea) {
        if (_0x4d9491 != _0x1325d6) {
          _0x451dea.stop();
          _0x451dea.removeEventListener("reading", _0x3a85b5);
          _0x2f298c(_0x1325d6);
        }
      } else if (_0x61eb1a != 0) {
        _0x61eb1a = _0x1325d6;
      } else {
        _0x61eb1a = _0x1325d6;
        navigator.permissions.query({
          name: "accelerometer"
        }).then(function (_0xbf4077) {
          if (_0xbf4077.state === "granted") {
            _0x2f298c(_0x61eb1a);
          } else {
            _0x95491a("No permission to use LinearAccelerationSensor.");
          }
          _0x61eb1a = 0;
        });
      }
    }
    function _0x461204(_0x4680de, _0x48e4ce) {
      if (typeof GravitySensor === "undefined") {
        _0x4d21fc(0, Math.max(_0x48e4ce, _0x2978c6));
        _0x11ba59(0, Math.max(_0x48e4ce, _0x4d9491));
        _0x584d44 = _0x4680de;
        return;
      }
      _0x46380b();
      _0x584d44 = _0x4680de;
      function _0x46fa17(_0xb0af49) {
        _0x5f1aa4 = new GravitySensor({
          frequency: _0xb0af49,
          referenceFrame: "device"
        });
        _0x5f1aa4.addEventListener("reading", _0x2930ad);
        _0x5f1aa4.addEventListener("error", function (_0x313a7b) {
          _0x95491a(_0x313a7b.error ? _0x313a7b.error : _0x313a7b);
        });
        _0x5f1aa4.start();
      }
      if (_0x5f1aa4) {
        _0x5f1aa4.stop();
        _0x5f1aa4.removeEventListener("reading", _0x2930ad);
        _0x46fa17(_0x48e4ce);
      } else if (_0x11a3b4 != 0) {
        _0x11a3b4 = _0x48e4ce;
      } else {
        _0x11a3b4 = _0x48e4ce;
        navigator.permissions.query({
          name: "accelerometer"
        }).then(function (_0x544697) {
          if (_0x544697.state === "granted") {
            _0x46fa17(_0x11a3b4);
          } else {
            _0x95491a("No permission to use GravitySensor.");
          }
          _0x11a3b4 = 0;
        });
      }
    }
    function _0x2ebbc9() {
      if (_0x451dea) {
        if (typeof GravitySensor !== "undefined" || _0x584d44 == 0) {
          _0x451dea.stop();
          _0x451dea.removeEventListener("reading", _0x3a85b5);
          _0x451dea = null;
        }
        _0x605a82 = 0;
        _0x4d9491 = 0;
      } else if (_0x605a82 != 0) {
        _0x605a82 = 0;
        _0x5241ca();
      }
    }
    function _0x186f44() {
      _0x584d44 = 0;
      if (typeof GravitySensor === "undefined") {
        if (_0x4d8904 == 0) {
          _0x3f2011();
        }
        if (_0x605a82 == 0) {
          _0x2ebbc9();
        }
        return;
      }
      if (_0x5f1aa4) {
        _0x5f1aa4.stop();
        _0x5f1aa4.removeEventListener("reading", _0x2930ad);
        _0x5f1aa4 = null;
      }
    }
    function _0x209ae6(_0x250b06) {
      try {
        (function () {
          _0x5d5381.call(null, _0x250b06);
        })();
      } catch (_0x590cea) {
        console.warn(_0x590cea);
      }
    }
    var _0x4b94d1 = null;
    function _0x5d8472() {
      return _0x4b94d1 && _0x4b94d1.activated || _0xf59589 != 0;
    }
    function _0x40dc72() {
      if (_0xf59589 != 0) {
        _0x1c790d(_0xf59589, _0x4b94d1.x, _0x4b94d1.y, _0x4b94d1.z);
      }
    }
    var _0x516750 = 0;
    function _0x396b5f(_0x10190b, _0x320b7d) {
      if (typeof Gyroscope === "undefined") {
        _0x2f1df3();
        _0xf59589 = _0x10190b;
        return;
      }
      _0xf59589 = _0x10190b;
      function _0x23bbd3(_0x331861) {
        _0x4b94d1 = new Gyroscope({
          frequency: _0x331861,
          referenceFrame: "device"
        });
        _0x4b94d1.addEventListener("reading", _0x40dc72);
        _0x4b94d1.addEventListener("error", function (_0x338b3c) {
          _0x95491a(_0x338b3c.error ? _0x338b3c.error : _0x338b3c);
        });
        _0x4b94d1.start();
      }
      if (_0x4b94d1) {
        _0x4b94d1.stop();
        _0x4b94d1.removeEventListener("reading", _0x40dc72);
        _0x23bbd3(_0x320b7d);
      } else if (_0x516750 != 0) {
        _0x516750 = _0x320b7d;
      } else {
        _0x516750 = _0x320b7d;
        navigator.permissions.query({
          name: "gyroscope"
        }).then(function (_0x16415e) {
          if (_0x16415e.state === "granted") {
            _0x23bbd3(_0x516750);
          } else {
            _0x95491a("No permission to use Gyroscope.");
          }
          _0x516750 = 0;
        });
      }
    }
    function _0x245c35() {
      if (_0x4b94d1) {
        _0x4b94d1.stop();
        _0x4b94d1.removeEventListener("reading", _0x40dc72);
        _0x4b94d1 = null;
        _0xf59589 = 0;
      } else if (_0xf59589 != 0) {
        _0xf59589 = 0;
        _0x5241ca();
      }
    }
    function _0x41d005() {
      const _0x57661a = function (_0x1d4ef9) {
        if (_0x1d4ef9.target.localName !== "canvas") {
          _0xfd2453();
        }
      };
      document.addEventListener("contextmenu", _0x57661a);
      _0x1d435e.deinitializers.push(function () {
        document.removeEventListener("contextmenu", _0x57661a);
      });
    }
    function _0x46198a() {
      return _0x451dea && _0x451dea.activated || _0x605a82 != 0;
    }
    function _0x3c2165(_0x1b1260, _0x5d9ec4) {
      var _0x3f8532 = _0x5eaf00(_0x1b1260);
      if (typeof dump == "function") {
        dump(_0x3f8532);
      }
      switch (_0x5d9ec4) {
        case 0:
        case 1:
        case 4:
          console.error(_0x3f8532);
          return;
        case 2:
          console.warn(_0x3f8532);
          return;
        case 3:
        case 5:
          console.log(_0x3f8532);
          return;
        default:
          console.error("Unknown console message type!");
          console.error(_0x3f8532);
      }
    }
    function _0x580833(_0x1b3166, _0x4870d4) {
      var _0x14d5e5 = _0xf3cbef();
      if (_0x1b3166) {
        _0x17e527(_0x14d5e5, _0x1b3166, _0x4870d4);
      }
      return _0x3b9e6b(_0x14d5e5);
    }
    var _0x48789e = null;
    var _0x29711c = null;
    var _0x51691b = null;
    var _0x7e4b74 = false;
    function _0x22fdb1() {
      return _0x7e4b74;
    }
    function _0x5d771b() {
      var _0x1c4b1d = 0;
      var _0xd02f6f = 1;
      if (!_0x51691b) {
        return _0xd02f6f;
      }
      return _0x1c4b1d;
    }
    function _0x4535d8(_0x3be22f, _0x55ebf2) {
      var _0x343ae0 = _0x51691b && _0x51691b.input ? _0x51691b.input.value : _0x29711c ? _0x29711c : "";
      if (_0x3be22f) {
        _0x17e527(_0x343ae0, _0x3be22f, _0x55ebf2);
      }
      return _0x3b9e6b(_0x343ae0);
    }
    function _0x2d5d5e(_0x33a13e, _0x2648e8) {
      if (!_0x51691b) {
        _0x588032[_0x33a13e >> 2] = 0;
        _0x588032[_0x2648e8 >> 2] = 0;
        return;
      }
      _0x588032[_0x33a13e >> 2] = _0x51691b.input.selectionStart;
      _0x588032[_0x2648e8 >> 2] = _0x51691b.input.selectionEnd - _0x51691b.input.selectionStart;
    }
    function _0x2ebdef(_0x265696) {
      if (_0x48789e) {
        return;
      }
      _0x7e4b74 = true;
      function _0x33043a() {
        if (_0x51691b && _0x51691b.input) {
          _0x29711c = _0x51691b.input.value;
          _0x51691b.input = null;
          if (_0x51691b.parentNode && _0x51691b.parentNode) {
            _0x51691b.parentNode.removeChild(_0x51691b);
          }
        }
        _0x51691b = null;
        _0x48789e = null;
        setTimeout(function () {
          _0x7e4b74 = false;
        }, 100);
      }
      if (_0x265696) {
        var _0x5650f5 = 200;
        _0x48789e = setTimeout(_0x33043a, _0x5650f5);
      } else {
        _0x33043a();
      }
    }
    function _0x24dfda(_0x5a2176) {
      if (!_0x51691b) {
        return;
      }
      _0x51691b.input.maxLength = _0x5a2176;
    }
    function _0x2419fb(_0x2f0f3b) {
      if (!_0x51691b) {
        return;
      }
      _0x2f0f3b = _0x5eaf00(_0x2f0f3b);
      _0x51691b.input.value = _0x2f0f3b;
    }
    function _0x3f653a(_0x4935ae, _0x28011c) {
      if (!_0x51691b) {
        return;
      }
      if (_0x51691b.input.type === "number") {
        _0x51691b.input.type = "text";
        _0x51691b.input.setSelectionRange(_0x4935ae, _0x4935ae + _0x28011c);
        _0x51691b.input.type = "number";
      } else {
        _0x51691b.input.setSelectionRange(_0x4935ae, _0x4935ae + _0x28011c);
      }
    }
    function _0x1ba92f(_0x81613, _0x269d21, _0xba1725, _0x150f8f, _0x154dea, _0x5e6853, _0x27683c, _0x49a763) {
      if (_0x48789e) {
        clearTimeout(_0x48789e);
        _0x48789e = null;
      }
      _0x81613 = _0x5eaf00(_0x81613);
      _0x29711c = _0x81613;
      _0x27683c = _0x5eaf00(_0x27683c);
      var _0x30c65c = document.body;
      var _0x39a3a6 = !!_0x51691b;
      var _0x2d164f;
      var _0x57e6e2 = 2;
      var _0x7aef52 = 3;
      var _0x1bd9dc = 4;
      var _0x393781 = 5;
      var _0x4224c7 = 7;
      if (!_0x154dea) {
        switch (_0x269d21) {
          case _0x4224c7:
            _0x2d164f = "email";
            break;
          case _0x7aef52:
            _0x2d164f = "url";
            break;
          case _0x57e6e2:
          case _0x1bd9dc:
          case _0x393781:
            _0x2d164f = "number";
            break;
          default:
            _0x2d164f = "text";
            break;
        }
      } else {
        _0x2d164f = "password";
      }
      if (_0x39a3a6) {
        if (_0x51691b.multiline != _0x150f8f) {
          _0x2ebdef(false);
          return;
        }
      }
      var _0x34be6e = _0x51691b || document.createElement("div");
      if (!_0x39a3a6) {
        _0x34be6e.style = "width:100%; position:fixed; bottom:0px; margin:0px; padding:0px; left:0px; border: 1px solid #000; border-radius: 5px; background-color:#fff; font-size:14pt;";
        _0x30c65c.appendChild(_0x34be6e);
        _0x51691b = _0x34be6e;
      }
      var _0x414846 = _0x39a3a6 ? _0x51691b.input : document.createElement(_0x150f8f ? "textarea" : "input");
      _0x51691b.multiline = _0x150f8f;
      _0x51691b.secure = _0x154dea;
      _0x51691b.keyboardType = _0x269d21;
      _0x51691b.inputType = _0x2d164f;
      _0x414846.type = _0x2d164f;
      _0x414846.style = "width:calc(100% - 85px); " + (_0x150f8f ? "height:100px;" : "") + "vertical-align:top; border-radius: 5px; outline:none; cursor:default; resize:none; border:0px; padding:10px 0px 10px 10px;";
      _0x414846.spellcheck = _0xba1725 ? true : false;
      _0x414846.maxLength = _0x49a763 > 0 ? _0x49a763 : 524288;
      _0x414846.value = _0x81613;
      _0x414846.placeholder = _0x27683c;
      if (!_0x39a3a6) {
        _0x34be6e.appendChild(_0x414846);
        _0x34be6e.input = _0x414846;
      }
      if (!_0x39a3a6) {
        var _0x2c71af = document.createElement("button");
        _0x2c71af.innerText = "OK";
        _0x2c71af.style = "border:0; position:absolute; left:calc(100% - 75px); top:0px; width:75px; height:100%; margin:0; padding:0; border-radius: 5px; background-color:#fff";
        _0x2c71af.addEventListener("touchend", function () {
          _0x2ebdef(true);
        });
        _0x34be6e.appendChild(_0x2c71af);
        _0x34be6e.okButton = _0x2c71af;
        _0x414846.addEventListener("keyup", function (_0x458eb8) {
          if (_0x414846.parentNode.multiline) {
            return;
          }
          if (_0x458eb8.code == "Enter" || _0x458eb8.which == 13 || _0x458eb8.keyCode == 13) {
            _0x2ebdef(true);
          }
        });
        _0x414846.addEventListener("blur", function (_0x265361) {
          _0x2ebdef(true);
          _0x265361.stopPropagation();
          _0x265361.preventDefault();
        });
        _0x414846.select();
        _0x414846.focus();
      } else {
        _0x414846.select();
      }
    }
    var _0x38795f = null;
    var _0x41032a = 0;
    function _0x3e6776() {
      return _0x38795f && _0x38795f.activated || _0x41032a != 0;
    }
    function _0x389005() {
      if (_0x41032a != 0) {
        _0x296216(_0x41032a, _0x38795f.quaternion[0], _0x38795f.quaternion[1], _0x38795f.quaternion[2], _0x38795f.quaternion[3]);
      }
    }
    var _0x198b1d = 0;
    function _0x504d90(_0x12fbd2) {
      if (_0x41032a) {
        var _0x9bbbd2 = Math.PI / 180;
        var _0x1bed6a = _0x12fbd2.beta * _0x9bbbd2;
        var _0x2a382a = _0x12fbd2.gamma * _0x9bbbd2;
        var _0x2a2b94 = _0x12fbd2.alpha * _0x9bbbd2;
        var _0x3ecb6b = Math.cos(_0x1bed6a / 2);
        var _0x4f6aec = Math.sin(_0x1bed6a / 2);
        var _0x2bb4eb = Math.cos(_0x2a382a / 2);
        var _0x6eacf8 = Math.sin(_0x2a382a / 2);
        var _0xb695ad = Math.cos(_0x2a2b94 / 2);
        var _0x588261 = Math.sin(_0x2a2b94 / 2);
        var _0x18c2e5 = _0x4f6aec * _0x2bb4eb * _0xb695ad - _0x3ecb6b * _0x6eacf8 * _0x588261;
        var _0xdc2886 = _0x3ecb6b * _0x6eacf8 * _0xb695ad + _0x4f6aec * _0x2bb4eb * _0x588261;
        var _0xc59107 = _0x3ecb6b * _0x2bb4eb * _0x588261 + _0x4f6aec * _0x6eacf8 * _0xb695ad;
        var _0x3578ba = _0x3ecb6b * _0x2bb4eb * _0xb695ad - _0x4f6aec * _0x6eacf8 * _0x588261;
        _0x296216(_0x41032a, _0x18c2e5, _0xdc2886, _0xc59107, _0x3578ba);
      }
    }
    function _0x331ffc(_0x29ac60, _0x3b28d0) {
      if (typeof RelativeOrientationSensor === "undefined") {
        if (_0x41032a == 0) {
          _0x41032a = _0x29ac60;
          _0x29431f(1);
          window.addEventListener("deviceorientation", _0x504d90);
        }
        return;
      }
      _0x41032a = _0x29ac60;
      function _0x36619c(_0xcf0a9c) {
        _0x38795f = new RelativeOrientationSensor({
          frequency: _0xcf0a9c,
          referenceFrame: "device"
        });
        _0x38795f.addEventListener("reading", _0x389005);
        _0x38795f.addEventListener("error", function (_0x48c469) {
          _0x95491a(_0x48c469.error ? _0x48c469.error : _0x48c469);
        });
        _0x38795f.start();
      }
      if (_0x38795f) {
        _0x38795f.stop();
        _0x38795f.removeEventListener("reading", _0x389005);
        _0x36619c(_0x3b28d0);
      } else if (_0x198b1d != 0) {
        _0x198b1d = _0x3b28d0;
      } else {
        _0x198b1d = _0x3b28d0;
        Promise.all([navigator.permissions.query({
          name: "accelerometer"
        }), navigator.permissions.query({
          name: "gyroscope"
        })]).then(function (_0x5780af) {
          if (_0x5780af.every(function (_0x2427e3) {
            return _0x2427e3.state === "granted";
          })) {
            _0x36619c(_0x198b1d);
          } else {
            _0x95491a("No permissions to use RelativeOrientationSensor.");
          }
          _0x198b1d = 0;
        });
      }
    }
    function _0xc41be5() {
      if (_0x38795f) {
        _0x38795f.stop();
        _0x38795f.removeEventListener("reading", _0x389005);
        _0x38795f = null;
      } else if (_0x41032a != 0) {
        window.removeEventListener("deviceorientation", _0x504d90);
      }
      _0x41032a = 0;
    }
    function _0x72265() {
      if (_0x44e21d == 0) {
        return;
      }
      _0x29431f(_0x44e21d);
    }
    function _0x5a7ad8() {
      _0x1d435e.QuitCleanup();
    }
    var _0x45590d = 0;
    function _0x58b68b() {
      if (_0x45590d) {
        _0x3e4226(_0x45590d, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
      }
    }
    function _0x551a84() {
      _0x45590d = 0;
      window.removeEventListener("resize", _0x58b68b);
      if (screen.orientation) {
        screen.orientation.removeEventListener("change", _0x58b68b);
      }
    }
    function _0x215e41(_0x33375e) {
      if (!_0x45590d) {
        if (screen.orientation) {
          screen.orientation.addEventListener("change", _0x58b68b);
        }
        window.addEventListener("resize", _0x58b68b);
        _0x45590d = _0x33375e;
        setTimeout(_0x58b68b, 0);
      }
    }
    var _0x10ea0a = -1;
    var _0xd06789 = -1;
    var _0x437d79 = -1;
    function _0x3940fe(_0x3fe725) {
      if (!screen.orientation || !screen.orientation.lock) {
        return;
      }
      function _0x107822() {
        _0xd06789 = _0x10ea0a;
        var _0x40dc47 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
        var _0x2566ef = _0x40dc47[_0xd06789];
        screen.orientation.lock(_0x2566ef).then(function () {
          if (_0x10ea0a != _0xd06789) {
            _0x437d79 = setTimeout(_0x107822, 0);
          } else {
            _0x437d79 = -1;
          }
        }).catch(function (_0x27c49f) {
          _0x95491a(_0x27c49f);
          _0x437d79 = -1;
        });
      }
      _0x10ea0a = _0x3fe725;
      if (_0x437d79 == -1 && _0x3fe725 != _0xd06789) {
        _0x437d79 = setTimeout(_0x107822, 0);
      }
    }
    var _0x28cc94 = {
      audioInstanceIdCounter: 0,
      audioInstances: {},
      audioContext: null,
      audioWebEnabled: 0,
      audioCache: [],
      pendingAudioSources: {},
      FAKEMOD_SAMPLERATE: 44100,
      audioContextSuspendedTime: 0,
      audioContextResumeOffset: 0,
      contextIsRunning: false,
      soundsPendingContextResume: []
    };
    function _0x2c30dd(_0x1511a2) {
      _0x1511a2.estimatePlaybackPosition = function () {
        var _0x158bac = (_0x28cc94.audioContext.currentTime - _0x1511a2.playbackStartTime) * _0x1511a2.playbackRate.value;
        if (_0x1511a2.loop && _0x158bac >= _0x1511a2.loopStart) {
          _0x158bac = (_0x158bac - _0x1511a2.loopStart) % (_0x1511a2.loopEnd - _0x1511a2.loopStart) + _0x1511a2.loopStart;
        }
        return _0x158bac;
      };
      _0x1511a2.setPitch = function (_0x2cabab) {
        var _0x338f48 = _0x1511a2.estimatePlaybackPosition();
        if (_0x338f48 >= 0) {
          _0x1511a2.playbackStartTime = _0x28cc94.audioContext.currentTime - _0x338f48 / _0x2cabab;
        }
        if (_0x1511a2.playbackRate.value !== _0x2cabab) {
          _0x1511a2.playbackRate.value = _0x2cabab;
        }
      };
    }
    function _0x75552e(_0x14ea11, _0x3a8816) {
      var _0x576c05 = {
        buffer: _0x14ea11,
        error: _0x3a8816
      };
      _0x576c05.release = function () {};
      _0x576c05.getLength = function () {
        if (!this.buffer) {
          console.log("Trying to get length of sound which is not loaded yet.");
          return 0;
        }
        return this.buffer.length;
      };
      _0x576c05.getData = function (_0x3464a1, _0x5327c9) {
        if (!this.buffer) {
          console.log("Trying to get data of sound which is not loaded.");
          return 0;
        }
        var _0x5646bc = _0x3464a1 >> 2;
        var _0x53bba2 = _0x538c3e.subarray(_0x5646bc, _0x5646bc + (_0x5327c9 >> 2));
        var _0x49d663 = Math.floor((_0x5327c9 >> 2) / this.buffer.numberOfChannels);
        var _0x278c54 = Math.min(this.buffer.length, _0x49d663);
        for (var _0x16ca9f = 0; _0x16ca9f < this.buffer.numberOfChannels; _0x16ca9f++) {
          var _0x4e5dad = this.buffer.getChannelData(_0x16ca9f).subarray(0, _0x278c54);
          _0x53bba2.set(_0x4e5dad, _0x16ca9f * _0x278c54);
        }
        return _0x278c54 * this.buffer.numberOfChannels * 4;
      };
      _0x576c05.getNumberOfChannels = function () {
        if (!this.buffer) {
          console.log("Trying to get metadata of sound which is not loaded.");
          return 0;
        }
        return this.buffer.numberOfChannels;
      };
      _0x576c05.getFrequency = function () {
        if (!this.buffer) {
          console.log("Trying to get metadata of sound which is not loaded.");
          return 0;
        }
        return this.buffer.sampleRate;
      };
      _0x576c05.createSourceNode = function () {
        if (!this.buffer) {
          console.log("Trying to play sound which is not loaded.");
        }
        var _0x2aea8a = _0x28cc94.audioContext.createBufferSource();
        _0x2aea8a.buffer = this.buffer;
        _0x2c30dd(_0x2aea8a);
        return _0x2aea8a;
      };
      return _0x576c05;
    }
    function _0x44bc41(_0x4d3fe7, _0x4e974e) {
      var _0x3528f2 = {
        callback: _0x4d3fe7,
        userData: _0x4e974e,
        source: null,
        gain: _0x28cc94.audioContext.createGain(),
        panner: _0x28cc94.audioContext.createPanner(),
        spatialBlendDryGain: _0x28cc94.audioContext.createGain(),
        spatialBlendWetGain: _0x28cc94.audioContext.createGain(),
        spatialBlendLevel: 0,
        loop: false,
        loopStart: 0,
        loopEnd: 0,
        pitch: 1
      };
      _0x3528f2.panner.rolloffFactor = 0;
      _0x3528f2.release = function () {
        this.disconnectSource();
        this.gain.disconnect();
        this.panner.disconnect();
      };
      _0x3528f2.playSoundClip = function (_0x313640, _0x195b02, _0xed0566) {
        try {
          var _0x19428b = this;
          this.source = _0x313640.createSourceNode();
          this.configurePanningNodes();
          this.setSpatialBlendLevel(this.spatialBlendLevel);
          this.source.onended = function () {
            _0x19428b.source.isStopped = true;
            _0x19428b.disconnectSource();
            if (_0x19428b.callback) {
              _0x1d5130("vi", _0x19428b.callback, [_0x19428b.userData]);
            }
          };
          this.source.loop = this.loop;
          this.source.loopStart = this.loopStart;
          this.source.loopEnd = this.loopEnd;
          this.source.start(_0x195b02, _0xed0566);
          this.source.playbackStartTime = _0x195b02 - _0xed0566 / this.source.playbackRate.value;
          this.source.setPitch(this.pitch);
        } catch (_0x4b4a5e) {
          console.error("Channel.playSoundClip error. Exception: " + _0x4b4a5e);
        }
      };
      _0x3528f2.stop = function (_0x511eb1) {
        if (!this.source) {
          return;
        }
        try {
          _0x3528f2.source.stop(_0x28cc94.audioContext.currentTime + _0x511eb1);
        } catch (_0x2c0cc4) {}
        if (_0x511eb1 == 0) {
          this.disconnectSource();
        }
      };
      _0x3528f2.isPaused = function () {
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
      _0x3528f2.pause = function () {
        if (!this.source || this.source.isPausedMockNode) {
          return;
        }
        if (this.source.mediaElement) {
          this.source._pauseMediaElement();
          return;
        }
        var _0x25deea = {
          isPausedMockNode: true,
          buffer: this.source.buffer,
          loop: this.source.loop,
          loopStart: this.source.loopStart,
          loopEnd: this.source.loopEnd,
          playbackRate: this.source.playbackRate.value,
          scheduledStopTime: undefined,
          playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
          setPitch: function (_0x278a7d) {
            this.playbackRate = _0x278a7d;
          },
          stop: function (_0x37fa1c) {
            this.scheduledStopTime = _0x37fa1c;
          }
        };
        this.stop(0);
        this.disconnectSource();
        this.source = _0x25deea;
      };
      _0x3528f2.resume = function (_0x752a6e = 0) {
        if (this.source && this.source.mediaElement) {
          this.source.start(undefined, this.source.currentTime);
          return;
        }
        if (!this.source || !this.source.isPausedMockNode) {
          return;
        }
        var _0x11cfb5 = this.source;
        var _0x315628 = _0x28cc94.audioContext.currentTime;
        if (_0x11cfb5.playbackPausedAtPosition < 0) {
          _0x315628 -= _0x11cfb5.playbackPausedAtPosition;
        }
        var _0x2edec3 = _0x75552e(_0x11cfb5.buffer, false);
        this.playSoundClip(_0x2edec3, _0x315628, Math.max(0, _0x11cfb5.playbackPausedAtPosition) + _0x752a6e);
        this.source.loop = _0x11cfb5.loop;
        this.source.loopStart = _0x11cfb5.loopStart;
        this.source.loopEnd = _0x11cfb5.loopEnd;
        this.source.setPitch(_0x11cfb5.playbackRate);
        if (typeof _0x11cfb5.scheduledStopTime !== "undefined") {
          var _0x44239b = Math.max(_0x11cfb5.scheduledStopTime - _0x28cc94.audioContext.currentTime, 0);
          this.stop(_0x44239b);
        }
      };
      _0x3528f2.setLoop = function (_0x2127fb) {
        this.loop = _0x2127fb;
        if (!this.source || this.source.loop == _0x2127fb) {
          return;
        }
        this.source.loop = _0x2127fb;
      };
      _0x3528f2.setLoopPoints = function (_0x8309d3, _0x8538b8) {
        this.loopStart = _0x8309d3;
        this.loopEnd = _0x8538b8;
        if (!this.source) {
          return;
        }
        if (this.source.loopStart !== _0x8309d3) {
          this.source.loopStart = _0x8309d3;
        }
        if (this.source.loopEnd !== _0x8538b8) {
          this.source.loopEnd = _0x8538b8;
        }
      };
      _0x3528f2.set3D = function (_0x907c3a) {
        if (this.spatialBlendLevel != _0x907c3a) {
          this.setSpatialBlendLevel(_0x907c3a);
        }
      };
      _0x3528f2.setPitch = function (_0x55ea90) {
        this.pitch = _0x55ea90;
        if (!this.source) {
          return;
        }
        this.source.setPitch(_0x55ea90);
      };
      _0x3528f2.setVolume = function (_0x3996c8) {
        if (this.gain.gain.value == _0x3996c8) {
          return;
        }
        this.gain.gain.value = _0x3996c8;
      };
      _0x3528f2.setPosition = function (_0x21720e, _0x1c490e, _0x5a7b80) {
        var _0x5698c2 = this.panner;
        if (_0x5698c2.positionX) {
          if (_0x5698c2.positionX.value !== _0x21720e) {
            _0x5698c2.positionX.value = _0x21720e;
          }
          if (_0x5698c2.positionY.value !== _0x1c490e) {
            _0x5698c2.positionY.value = _0x1c490e;
          }
          if (_0x5698c2.positionZ.value !== _0x5a7b80) {
            _0x5698c2.positionZ.value = _0x5a7b80;
          }
        } else if (_0x5698c2._x !== _0x21720e || _0x5698c2._y !== _0x1c490e || _0x5698c2._z !== _0x5a7b80) {
          _0x5698c2.setPosition(_0x21720e, _0x1c490e, _0x5a7b80);
          _0x5698c2._x = _0x21720e;
          _0x5698c2._y = _0x1c490e;
          _0x5698c2._z = _0x5a7b80;
        }
      };
      _0x3528f2.disconnectSource = function () {
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
      _0x3528f2.setSpatialBlendLevel = function (_0x104e4) {
        var _0x457070 = this.source && !this.source.isPausedMockNode;
        var _0x182590 = this.spatialBlendLevel > 0 && _0x104e4 == 0 || this.spatialBlendLevel == 0 && _0x104e4 > 0;
        var _0x3d764b = _0x457070 && _0x182590;
        this.spatialBlendWetGain.gain.value = _0x104e4;
        this.spatialBlendDryGain.gain.value = 1 - _0x104e4;
        this.spatialBlendLevel = _0x104e4;
        if (_0x3d764b) {
          this.configurePanningNodes();
        }
      };
      _0x3528f2.configurePanningNodes = function () {
        if (!this.source) {
          return;
        }
        this.source.disconnect();
        this.spatialBlendDryGain.disconnect();
        this.spatialBlendWetGain.disconnect();
        this.panner.disconnect();
        this.gain.disconnect();
        if (this.spatialBlendLevel > 0) {
          this.source.connect(this.spatialBlendDryGain);
          this.spatialBlendDryGain.connect(this.gain);
          this.source.connect(this.spatialBlendWetGain);
          this.spatialBlendWetGain.connect(this.panner);
          this.panner.connect(this.gain);
        } else {
          this.source.connect(this.gain);
        }
        this.gain.connect(_0x28cc94.audioContext.destination);
      };
      _0x3528f2.isStopped = function () {
        if (!this.source) {
          return true;
        }
        if (this.source.mediaElement) {
          return this.source.isStopped;
        }
        return false;
      };
      return _0x3528f2;
    }
    function _0x4de1d9(_0x58fcbc, _0x41c510) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return;
      }
      _0x28cc94.audioInstances[++_0x28cc94.audioInstanceIdCounter] = _0x44bc41(_0x58fcbc, _0x41c510);
      return _0x28cc94.audioInstanceIdCounter;
    }
    function _0x5b4f69(_0x1e8e06) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return _0x28cc94.FAKEMOD_SAMPLERATE;
      }
      var _0x4440aa = _0x28cc94.audioInstances[_0x1e8e06];
      if (!_0x4440aa) {
        return _0x28cc94.FAKEMOD_SAMPLERATE;
      }
      var _0x4c8b27 = _0x4440aa.buffer ? _0x4440aa.buffer : _0x4440aa.source ? _0x4440aa.source.buffer : 0;
      if (!_0x4c8b27) {
        return _0x28cc94.FAKEMOD_SAMPLERATE;
      }
      return _0x4c8b27.sampleRate;
    }
    function _0x1cde34() {
      if (_0x28cc94.audioWebEnabled == 0) {
        return _0x28cc94.FAKEMOD_SAMPLERATE;
      }
      return _0x28cc94.audioContext.sampleRate;
    }
    function _0x35fc0f(_0x34c160) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return 0;
      }
      var _0x199f83 = _0x28cc94.audioInstances[_0x34c160];
      if (!_0x199f83) {
        return 0;
      }
      return _0x199f83.getLength();
    }
    function _0x29eee8(_0x4f7ee7) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return 2;
      }
      var _0x3aa85d = _0x28cc94.audioInstances[_0x4f7ee7];
      if (_0x3aa85d.error) {
        return 2;
      }
      if (_0x3aa85d.buffer || _0x3aa85d.url) {
        return 0;
      }
      return 1;
    }
    function _0x3649af() {
      try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        _0x28cc94.audioContext = new AudioContext();
        _0x28cc94.audioContextSuspendedTime = _0x5d7344();
        _0x28cc94.audioContextResumeOffset = 0;
        _0x28cc94.audioContext.onstatechange = () => {
          var _0x5ca48f = _0x28cc94.audioContext.state;
          if (_0x5ca48f === "running") {
            _0x28cc94.contextIsRunning = true;
            var _0x2a5c99 = _0x5d7344();
            _0x28cc94.audioContextResumeOffset = _0x2a5c99 - _0x28cc94.audioContextSuspendedTime;
            console.log("Audio context resumed after " + _0x28cc94.audioContextResumeOffset.toFixed(3) + " seconds.");
            var _0x45c493 = _0x28cc94.soundsPendingContextResume.pop();
            while (_0x45c493 !== undefined) {
              if (_0x45c493.channel.source) {
                _0x45c493.channel.resume(_0x45c493.offset + _0x28cc94.audioContextResumeOffset);
              } else {
                var _0x2ce173 = 0;
                if (_0x2a5c99 > _0x45c493.startTime) {
                  _0x2ce173 = _0x2a5c99 - _0x45c493.startTime;
                }
                _0x45c493.channel.playSoundClip(_0x45c493.clip, _0x45c493.startTime, _0x45c493.offset + _0x2ce173);
              }
              _0x45c493 = _0x28cc94.soundsPendingContextResume.pop();
            }
          } else {
            _0x28cc94.contextIsRunning = false;
            console.log("Audio context suspended.");
            _0x28cc94.audioContextSuspendedTime = _0x5d7344();
            Object.values(_0x28cc94.audioInstances).forEach(_0x1beb4b => {
              if (_0x1beb4b.source != null) {
                if (!_0x1beb4b.isPaused()) {
                  _0x1beb4b.pause();
                  _0x28cc94.soundsPendingContextResume.push({
                    channel: _0x1beb4b,
                    clip: null,
                    startTime: null,
                    offset: _0x1beb4b.source.playbackPausedAtPosition
                  });
                }
              }
            });
          }
        };
        function _0x5c20a1() {
          if (_0x28cc94.audioContext.state === "suspended") {
            _0x28cc94.audioContext.resume().catch(function (_0x441f90) {
              console.warn("Could not resume audio context. Exception: " + _0x441f90);
            });
          } else {
            _0x1d435e.clearInterval(_0x2e92a4);
          }
        }
        var _0x2e92a4 = _0x1d435e.setInterval(_0x5c20a1, 400);
        _0x28cc94.audioWebEnabled = 1;
        function _0x3cd575() {
          try {
            if (_0x28cc94.audioContext.state !== "running" && _0x28cc94.audioContext.state !== "closed") {
              _0x28cc94.audioContext.resume().catch(function (_0xa0d4b) {
                console.warn("Could not resume audio context. Exception: " + _0xa0d4b);
              });
            }
            var _0xdc6e64 = 20;
            while (_0x28cc94.audioCache.length < _0xdc6e64) {
              var _0x461ba9 = new Audio();
              _0x461ba9.autoplay = false;
              _0x28cc94.audioCache.push(_0x461ba9);
            }
          } catch (_0x3bbca7) {}
        }
        window.addEventListener("mousedown", _0x3cd575);
        window.addEventListener("touchstart", _0x3cd575);
        _0x1d435e.deinitializers.push(function () {
          window.removeEventListener("mousedown", _0x3cd575);
          window.removeEventListener("touchstart", _0x3cd575);
        });
      } catch (_0x251d0b) {
        alert("Web Audio API is not supported in this browser");
      }
    }
    function _0x1fdd93(_0x7960bd) {
      var _0x56a6a9 = _0x75552e(null, false);
      _0x28cc94.audioContext.decodeAudioData(_0x7960bd, function (_0x56b63e) {
        _0x56a6a9.buffer = _0x56b63e;
      }, function (_0x51aa60) {
        _0x56a6a9.error = true;
        console.log("Decode error: " + _0x51aa60);
      });
      return _0x56a6a9;
    }
    function _0x37d48f(_0x55fd99) {
      switch (_0x55fd99) {
        case 13:
          return "audio/mpeg";
        case 20:
          return "audio/wav";
        default:
          return "audio/mp4";
      }
    }
    function _0x304f08(_0x142d4c, _0xa9ef90) {
      var _0x5675aa = _0x37d48f(_0xa9ef90);
      var _0x5c9492 = new Blob([_0x142d4c], {
        type: _0x5675aa
      });
      var _0x543405 = {
        url: URL.createObjectURL(_0x5c9492),
        error: false,
        mediaElement: new Audio()
      };
      _0x543405.mediaElement.preload = "metadata";
      _0x543405.mediaElement.src = _0x543405.url;
      _0x543405.release = function () {
        if (!this.mediaElement) {
          return;
        }
        this.mediaElement.src = "";
        URL.revokeObjectURL(this.url);
        delete this.mediaElement;
        delete this.url;
      };
      _0x543405.getLength = function () {
        return this.mediaElement.duration * 44100;
      };
      _0x543405.getData = function (_0x3ce750, _0x1b931a) {
        console.warn("getData() is not supported for compressed sound.");
        return 0;
      };
      _0x543405.getNumberOfChannels = function () {
        console.warn("getNumberOfChannels() is not supported for compressed sound.");
        return 0;
      };
      _0x543405.getFrequency = function () {
        console.warn("getFrequency() is not supported for compressed sound.");
        return 0;
      };
      _0x543405.createSourceNode = function () {
        var _0xa988a7 = this;
        var _0x4b2e58 = _0x28cc94.audioCache.length ? _0x28cc94.audioCache.pop() : new Audio();
        _0x4b2e58.preload = "metadata";
        _0x4b2e58.src = this.url;
        var _0x4652de = _0x28cc94.audioContext.createMediaElementSource(_0x4b2e58);
        Object.defineProperty(_0x4652de, "loop", {
          get: function () {
            return _0x4652de.mediaElement.loop;
          },
          set: function (_0x4354e1) {
            if (_0x4652de.mediaElement.loop !== _0x4354e1) {
              _0x4652de.mediaElement.loop = _0x4354e1;
            }
          }
        });
        _0x4652de.playbackRate = {};
        Object.defineProperty(_0x4652de.playbackRate, "value", {
          get: function () {
            return _0x4652de.mediaElement.playbackRate;
          },
          set: function (_0x1e3508) {
            if (_0x4652de.mediaElement.playbackRate !== _0x1e3508) {
              _0x4652de.mediaElement.playbackRate = _0x1e3508;
            }
          }
        });
        Object.defineProperty(_0x4652de, "currentTime", {
          get: function () {
            return _0x4652de.mediaElement.currentTime;
          },
          set: function (_0x2fa89a) {
            if (_0x4652de.mediaElement.currentTime !== _0x2fa89a) {
              _0x4652de.mediaElement.currentTime = _0x2fa89a;
            }
          }
        });
        Object.defineProperty(_0x4652de, "mute", {
          get: function () {
            return _0x4652de.mediaElement.mute;
          },
          set: function (_0x44db7a) {
            if (_0x4652de.mediaElement.mute !== _0x44db7a) {
              _0x4652de.mediaElement.mute = _0x44db7a;
            }
          }
        });
        Object.defineProperty(_0x4652de, "onended", {
          get: function () {
            return _0x4652de.mediaElement.onended;
          },
          set: function (_0x271b4b) {
            _0x4652de.mediaElement.onended = _0x271b4b;
          }
        });
        _0x4652de.playPromise = null;
        _0x4652de.playTimeout = null;
        _0x4652de.pauseRequested = false;
        _0x4652de.isStopped = false;
        _0x4652de._pauseMediaElement = function () {
          if (_0x4652de.playPromise || _0x4652de.playTimeout) {
            _0x4652de.pauseRequested = true;
          } else {
            _0x4652de.mediaElement.pause();
          }
        };
        _0x4652de._startPlayback = function (_0x58eb70) {
          if (_0x4652de.playPromise || _0x4652de.playTimeout) {
            _0x4652de.mediaElement.currentTime = _0x58eb70;
            _0x4652de.pauseRequested = false;
            return;
          }
          _0x4652de.mediaElement.currentTime = _0x58eb70;
          _0x4652de.playPromise = _0x4652de.mediaElement.play();
          if (_0x4652de.playPromise) {
            _0x4652de.playPromise.then(function () {
              if (_0x4652de.pauseRequested) {
                _0x4652de.mediaElement.pause();
                _0x4652de.pauseRequested = false;
              }
              _0x4652de.playPromise = null;
            }).catch(function (_0x4fd898) {
              _0x4652de.playPromise = null;
              if (_0x4fd898.name !== "NotAllowedError") {
                throw _0x4fd898;
              }
            });
          }
        };
        _0x4652de.start = function (_0x2ef9f9, _0x4a5b34) {
          if (typeof _0x2ef9f9 === "undefined") {
            _0x2ef9f9 = _0x28cc94.audioContext.currentTime;
          }
          if (typeof _0x4a5b34 === "undefined") {
            _0x4a5b34 = 0;
          }
          var _0x2677da = 4;
          var _0x1f9691 = (_0x2ef9f9 - _0x28cc94.audioContext.currentTime) * 1000;
          if (_0x1f9691 > _0x2677da) {
            _0x4652de.playTimeout = setTimeout(function () {
              _0x4652de.playTimeout = null;
              _0x4652de._startPlayback(_0x4a5b34);
            }, _0x1f9691);
          } else {
            _0x4652de._startPlayback(_0x4a5b34);
          }
        };
        _0x4652de.stop = function (_0x1e6a66) {
          if (typeof _0x1e6a66 === "undefined") {
            _0x1e6a66 = _0x28cc94.audioContext.currentTime;
          }
          var _0x56b351 = 4;
          var _0x52a070 = (_0x1e6a66 - _0x28cc94.audioContext.currentTime) * 1000;
          if (_0x52a070 > _0x56b351) {
            setTimeout(function () {
              _0x4652de._pauseMediaElement();
              _0x4652de.isStopped = true;
            }, _0x52a070);
          } else {
            _0x4652de._pauseMediaElement();
            _0x4652de.isStopped = true;
          }
        };
        _0x2c30dd(_0x4652de);
        return _0x4652de;
      };
      return _0x543405;
    }
    function _0x49f311(_0x1f6ed6, _0x4649a5, _0x1cfebe, _0x9589a6) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return 0;
      }
      var _0xaa8cd5 = _0x5f38b4.buffer.slice(_0x1f6ed6, _0x1f6ed6 + _0x4649a5);
      if (_0x4649a5 < 131072) {
        _0x1cfebe = 1;
      }
      var _0x52b3d9;
      if (_0x1cfebe) {
        _0x52b3d9 = _0x1fdd93(_0xaa8cd5);
      } else {
        _0x52b3d9 = _0x304f08(_0xaa8cd5, _0x9589a6);
      }
      _0x28cc94.audioInstances[++_0x28cc94.audioInstanceIdCounter] = _0x52b3d9;
      return _0x28cc94.audioInstanceIdCounter;
    }
    function _0x55f1ab(_0x23a462, _0x346391, _0x3e95f2, _0x2d248d) {
      var _0x5b8e9b = _0x28cc94.audioContext.createBuffer(_0x23a462, _0x346391, _0x3e95f2);
      for (var _0x566885 = 0; _0x566885 < _0x23a462; _0x566885++) {
        var _0x503979 = (_0x2d248d >> 2) + _0x346391 * _0x566885;
        var _0x5488a8 = _0x5b8e9b.copyToChannel || function (_0x3e2f41, _0x4f9d61, _0x22d403) {
          var _0x5c8bdd = _0x3e2f41.subarray(0, Math.min(_0x3e2f41.length, this.length - (_0x22d403 | 0)));
          this.getChannelData(_0x4f9d61 | 0).set(_0x5c8bdd, _0x22d403 | 0);
        };
        _0x5488a8.apply(_0x5b8e9b, [_0x538c3e.subarray(_0x503979, _0x503979 + _0x346391), _0x566885, 0]);
      }
      return _0x75552e(_0x5b8e9b, false);
    }
    function _0x5ab8ef(_0x299c35, _0x8896d4, _0x4a2f14, _0x486ca8) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return 0;
      }
      var _0x21e7a4 = _0x55f1ab(_0x299c35, _0x8896d4, _0x4a2f14, _0x486ca8);
      _0x28cc94.audioInstances[++_0x28cc94.audioInstanceIdCounter] = _0x21e7a4;
      return _0x28cc94.audioInstanceIdCounter;
    }
    function _0x13e8a3(_0x6c8d6e, _0x2a15bb, _0x4b1ad8, _0x24a9c7) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return;
      }
      _0x59f630(_0x2a15bb, 0);
      var _0x4aca4d = _0x28cc94.audioInstances[_0x6c8d6e];
      var _0x21614f = _0x28cc94.audioInstances[_0x2a15bb];
      if (!_0x4aca4d) {
        console.log("Trying to play sound which is not loaded.");
        return;
      }
      try {
        if (_0x28cc94.contextIsRunning) {
          _0x21614f.playSoundClip(_0x4aca4d, _0x28cc94.audioContext.currentTime + _0x24a9c7, _0x4b1ad8);
        } else {
          _0x28cc94.soundsPendingContextResume.push({
            channel: _0x21614f,
            clip: _0x4aca4d,
            startTime: _0x28cc94.audioContext.currentTime + _0x24a9c7,
            offset: _0x4b1ad8
          });
        }
      } catch (_0x9e0298) {
        console.error("playSoundClip error. Exception: " + _0x9e0298);
      }
    }
    function _0x2e7454(_0x885b63) {
      var _0x2f3200 = _0x28cc94.audioInstances[_0x885b63];
      if (_0x2f3200) {
        _0x2f3200.release();
      }
      delete _0x28cc94.audioInstances[_0x885b63];
    }
    function _0x5892e7() {
      if (_0x28cc94.audioWebEnabled == 0) {
        return;
      }
      if (_0x28cc94.audioContext.state === "suspended") {
        _0x28cc94.audioContext.resume().catch(function (_0x11c5ff) {
          console.warn("Could not resume audio context. Exception: " + _0x11c5ff);
        });
      }
    }
    function _0x5f329d(_0x38f58e, _0x2ab53c) {
      var _0x1f6b7e = _0x28cc94.audioInstances[_0x38f58e];
      _0x1f6b7e.set3D(_0x2ab53c);
    }
    function _0x241344(_0xc0853d, _0x1c5091, _0x423810, _0x43d472, _0x4de69b, _0x574ceb) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return;
      }
      _0xc0853d = -_0xc0853d;
      _0x1c5091 = -_0x1c5091;
      _0x423810 = -_0x423810;
      var _0x4ca412 = _0x28cc94.audioContext.listener;
      if (_0x4ca412.forwardX) {
        if (_0x4ca412.forwardX.value !== _0xc0853d) {
          _0x4ca412.forwardX.value = _0xc0853d;
        }
        if (_0x4ca412.forwardY.value !== _0x1c5091) {
          _0x4ca412.forwardY.value = _0x1c5091;
        }
        if (_0x4ca412.forwardZ.value !== _0x423810) {
          _0x4ca412.forwardZ.value = _0x423810;
        }
        if (_0x4ca412.upX.value !== _0x43d472) {
          _0x4ca412.upX.value = _0x43d472;
        }
        if (_0x4ca412.upY.value !== _0x4de69b) {
          _0x4ca412.upY.value = _0x4de69b;
        }
        if (_0x4ca412.upZ.value !== _0x574ceb) {
          _0x4ca412.upZ.value = _0x574ceb;
        }
      } else if (_0x4ca412._forwardX !== _0xc0853d || _0x4ca412._forwardY !== _0x1c5091 || _0x4ca412._forwardZ !== _0x423810 || _0x4ca412._upX !== _0x43d472 || _0x4ca412._upY !== _0x4de69b || _0x4ca412._upZ !== _0x574ceb) {
        _0x4ca412.setOrientation(_0xc0853d, _0x1c5091, _0x423810, _0x43d472, _0x4de69b, _0x574ceb);
        _0x4ca412._forwardX = _0xc0853d;
        _0x4ca412._forwardY = _0x1c5091;
        _0x4ca412._forwardZ = _0x423810;
        _0x4ca412._upX = _0x43d472;
        _0x4ca412._upY = _0x4de69b;
        _0x4ca412._upZ = _0x574ceb;
      }
    }
    function _0x45f951(_0x293d80, _0x3f2c18, _0x3ff64c) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return;
      }
      var _0x5494e5 = _0x28cc94.audioContext.listener;
      if (_0x5494e5.positionX) {
        if (_0x5494e5.positionX.value !== _0x293d80) {
          _0x5494e5.positionX.value = _0x293d80;
        }
        if (_0x5494e5.positionY.value !== _0x3f2c18) {
          _0x5494e5.positionY.value = _0x3f2c18;
        }
        if (_0x5494e5.positionZ.value !== _0x3ff64c) {
          _0x5494e5.positionZ.value = _0x3ff64c;
        }
      } else if (_0x5494e5._positionX !== _0x293d80 || _0x5494e5._positionY !== _0x3f2c18 || _0x5494e5._positionZ !== _0x3ff64c) {
        _0x5494e5.setPosition(_0x293d80, _0x3f2c18, _0x3ff64c);
        _0x5494e5._positionX = _0x293d80;
        _0x5494e5._positionY = _0x3f2c18;
        _0x5494e5._positionZ = _0x3ff64c;
      }
    }
    function _0x14fa84(_0x1850ad, _0x3f98ed) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return;
      }
      var _0x44f740 = _0x28cc94.audioInstances[_0x1850ad];
      _0x44f740.setLoop(_0x3f98ed);
    }
    function _0x3acd15(_0x1f88a2, _0x15329f, _0x1f33bc) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return;
      }
      var _0x2fd9c9 = _0x28cc94.audioInstances[_0x1f88a2];
      _0x2fd9c9.setLoopPoints(_0x15329f, _0x1f33bc);
    }
    function _0x44abcd(_0x26b656, _0xdb2637) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return;
      }
      var _0x1ca872 = _0x28cc94.audioInstances[_0x26b656];
      if (_0xdb2637 != _0x1ca872.isPaused()) {
        if (_0xdb2637) {
          _0x1ca872.pause();
        } else {
          _0x1ca872.resume();
        }
      }
    }
    function _0x1dbb3c(_0x265dc5, _0x90f355) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return;
      }
      try {
        var _0xa29e03 = _0x28cc94.audioInstances[_0x265dc5];
        _0xa29e03.setPitch(_0x90f355);
      } catch (_0x2300be) {
        console.error("JS_Sound_SetPitch(channel=" + _0x265dc5 + ", pitch=" + _0x90f355 + ") threw an exception: " + _0x2300be);
      }
    }
    function _0x771b54(_0x2de233, _0x5c10a0, _0x400ab2, _0x1f0bba) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return;
      }
      var _0x5e2238 = _0x28cc94.audioInstances[_0x2de233];
      _0x5e2238.setPosition(_0x5c10a0, _0x400ab2, _0x1f0bba);
    }
    function _0x5b289d(_0x14ee3e, _0x135a8e) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return;
      }
      try {
        var _0x30ac1a = _0x28cc94.audioInstances[_0x14ee3e];
        _0x30ac1a.setVolume(_0x135a8e);
      } catch (_0x31422b) {
        console.error("JS_Sound_SetVolume(channel=" + _0x14ee3e + ", volume=" + _0x135a8e + ") threw an exception: " + _0x31422b);
      }
    }
    function _0x59f630(_0xf529eb, _0x1ddb46) {
      if (_0x28cc94.audioWebEnabled == 0) {
        return;
      }
      var _0x55dad0 = _0x28cc94.audioInstances[_0xf529eb];
      _0x55dad0.stop(_0x1ddb46);
    }
    function _0x292997(_0x50df8a, _0x570008) {
      var _0x2967e0 = _0x1d435e.SystemInfo.browser;
      if (_0x50df8a) {
        _0x17e527(_0x2967e0, _0x50df8a, _0x570008);
      }
      return _0x3b9e6b(_0x2967e0);
    }
    function _0x1b0546(_0x11ebe1, _0x593315) {
      var _0x3eb83d = _0x1d435e.SystemInfo.browserVersion;
      if (_0x11ebe1) {
        _0x17e527(_0x3eb83d, _0x11ebe1, _0x593315);
      }
      return _0x3b9e6b(_0x3eb83d);
    }
    function _0x1a637e(_0x17e8e1, _0x5ea0a7, _0x3fb1fe) {
      var _0x1115a1 = _0x5eaf00(_0x17e8e1);
      var _0x448095 = _0x1115a1 == "#canvas" ? _0x1d435e.canvas : document.querySelector(_0x1115a1);
      var _0x5c8795 = 0;
      var _0x45ab15 = 0;
      if (_0x448095) {
        var _0x10b97d = _0x448095.getBoundingClientRect();
        _0x5c8795 = _0x10b97d.width;
        _0x45ab15 = _0x10b97d.height;
      }
      _0x1231b6[_0x5ea0a7 >> 3] = _0x5c8795;
      _0x1231b6[_0x3fb1fe >> 3] = _0x45ab15;
    }
    function _0x58cccf(_0x238828, _0x4d2651) {
      if (_0x238828) {
        _0x17e527("https://games.1games.io", _0x238828, _0x4d2651);
      }
      return _0x3b9e6b("https://games.1games.io");
    }
    function _0x5c109a(_0x48959f, _0x47ca8a) {
      var _0x310a90 = _0x1d435e.SystemInfo.gpu;
      if (_0x48959f) {
        _0x17e527(_0x310a90, _0x48959f, _0x47ca8a);
      }
      return _0x3b9e6b(_0x310a90);
    }
    function _0x3cc25b(_0x514b57, _0x20a93c) {
      var _0x14d1ce = _0x1d435e.SystemInfo.language;
      if (_0x514b57) {
        _0x17e527(_0x14d1ce, _0x514b57, _0x20a93c);
      }
      return _0x3b9e6b(_0x14d1ce);
    }
    function _0x9e9bed() {
      return _0x1d435e.matchWebGLToCanvasSize || _0x1d435e.matchWebGLToCanvasSize === undefined;
    }
    function _0x4d9881() {
      return _0x5f38b4.length / 1048576;
    }
    function _0x1ea465(_0x595bc6, _0x173b2d) {
      var _0x4d65a3 = _0x1d435e.SystemInfo.os + " " + _0x1d435e.SystemInfo.osVersion;
      if (_0x595bc6) {
        _0x17e527(_0x4d65a3, _0x595bc6, _0x173b2d);
      }
      return _0x3b9e6b(_0x4d65a3);
    }
    function _0x3bfa32() {
      if (_0x1d435e.matchWebGLToCanvasSize == false) {
        return 1;
      } else {
        return _0x1d435e.devicePixelRatio || window.devicePixelRatio || 1;
      }
    }
    function _0x441bc3(_0x2ee4c0, _0x49af0c) {
      _0x1231b6[_0x2ee4c0 >> 3] = _0x1d435e.SystemInfo.width;
      _0x1231b6[_0x49af0c >> 3] = _0x1d435e.SystemInfo.height;
    }
    function _0x2e1378(_0x3d54ef, _0x2eb5bc) {
      if (_0x3d54ef) {
        _0x17e527(_0x1d435e.streamingAssetsUrl, _0x3d54ef, _0x2eb5bc);
      }
      return _0x3b9e6b(_0x1d435e.streamingAssetsUrl);
    }
    function _0x3c79ea() {
      var _0x2bdcbb = _0x1b6649.getExtension("WEBGL_compressed_texture_astc");
      if (_0x2bdcbb && _0x2bdcbb.getSupportedProfiles) {
        return _0x2bdcbb.getSupportedProfiles().includes("hdr");
      }
      return false;
    }
    function _0x3c98a9() {
      return _0x1d435e.SystemInfo.hasCursorLock;
    }
    function _0x2425c0() {
      return _0x1d435e.SystemInfo.hasFullscreen;
    }
    function _0xa452e8() {
      return _0x1d435e.SystemInfo.hasWebGL;
    }
    function _0x1dd50e() {
      return !!_0x1d435e.shouldQuit;
    }
    var _0x4e165f = {
      requests: {},
      responses: {},
      abortControllers: {},
      timer: {},
      nextRequestId: 1
    };
    function _0x2b7fd6(_0x3cc26b) {
      var _0xe42e2d = _0x4e165f.abortControllers[_0x3cc26b];
      if (!_0xe42e2d || _0xe42e2d.signal.aborted) {
        return;
      }
      _0xe42e2d.abort();
    }
    function _0x169f9c(_0x3a0906, _0x2af1ec) {
      var _0x200105 = _0x5eaf00(_0x3a0906);
      var _0x21f40d = _0x5eaf00(_0x2af1ec);
      var _0x11ff32 = new AbortController();
      var _0x3cbc87 = {
        url: _0x200105,
        init: {
          method: _0x21f40d,
          signal: _0x11ff32.signal,
          headers: {},
          enableStreamingDownload: true
        },
        tempBuffer: null,
        tempBufferSize: 0
      };
      _0x4e165f.abortControllers[_0x4e165f.nextRequestId] = _0x11ff32;
      _0x4e165f.requests[_0x4e165f.nextRequestId] = _0x3cbc87;
      return _0x4e165f.nextRequestId++;
    }
    function _0x58171f(_0x4bc34d) {
      var _0x102729 = _0x4e165f.responses[_0x4bc34d];
      if (!_0x102729) {
        return "";
      }
      if (_0x102729.headerString) {
        return _0x102729.headerString;
      }
      var _0x544bd0 = "";
      var _0xf78e01 = _0x102729.headers.entries();
      for (var _0x22de46 = _0xf78e01.next(); !_0x22de46.done; _0x22de46 = _0xf78e01.next()) {
        _0x544bd0 += _0x22de46.value[0] + ": " + _0x22de46.value[1] + "\r\n";
      }
      _0x102729.headerString = _0x544bd0;
      return _0x544bd0;
    }
    function _0x24d649(_0x351457, _0x3a018a, _0x9d6f39, _0x3e5d3f, _0x1eb788) {
      var _0x4e12fa = _0x4e165f.responses[_0x351457];
      if (!_0x4e12fa) {
        _0x17e527("", _0x3a018a, _0x9d6f39);
        _0x17e527("", _0x3e5d3f, _0x1eb788);
        return;
      }
      if (_0x3a018a) {
        var _0x140cc9 = _0x58171f(_0x351457);
        _0x17e527(_0x140cc9, _0x3a018a, _0x9d6f39);
      }
      if (_0x3e5d3f) {
        _0x17e527(_0x4e12fa.url, _0x3e5d3f, _0x1eb788);
      }
    }
    function _0x138342(_0x3c8fd5, _0x11e65d) {
      var _0x315e31 = _0x4e165f.responses[_0x3c8fd5];
      if (!_0x315e31) {
        _0x5db304[_0x11e65d >> 2] = 0;
        _0x5db304[(_0x11e65d >> 2) + 1] = 0;
        return;
      }
      var _0x43cec4 = _0x58171f(_0x3c8fd5);
      _0x5db304[_0x11e65d >> 2] = _0x3b9e6b(_0x43cec4);
      _0x5db304[(_0x11e65d >> 2) + 1] = _0x3b9e6b(_0x315e31.url);
    }
    function _0x252607(_0x21f214) {
      if (_0x4e165f.timer[_0x21f214]) {
        clearTimeout(_0x4e165f.timer[_0x21f214]);
      }
      delete _0x4e165f.requests[_0x21f214];
      delete _0x4e165f.responses[_0x21f214];
      delete _0x4e165f.abortControllers[_0x21f214];
      delete _0x4e165f.timer[_0x21f214];
    }
    function _0x57eb79(_0x41b38c, _0x400f14, _0x32248a, _0x3f8303, _0x3b434a, _0x7731d3) {
      var _0xe9f639 = _0x4e165f.requests[_0x41b38c];
      var _0x4fff31 = _0x4e165f.abortControllers[_0x41b38c];
      function _0x14e87c(_0x3ecd42) {
        if (!_0xe9f639.tempBuffer) {
          const _0x48cd8a = Math.max(_0x3ecd42, 1024);
          _0xe9f639.tempBuffer = _0x14649f(_0x48cd8a);
          _0xe9f639.tempBufferSize = _0x48cd8a;
        }
        if (_0xe9f639.tempBufferSize < _0x3ecd42) {
          _0x540f62(_0xe9f639.tempBuffer);
          _0xe9f639.tempBuffer = _0x14649f(_0x3ecd42);
          _0xe9f639.tempBufferSize = _0x3ecd42;
        }
        return _0xe9f639.tempBuffer;
      }
      function _0x15fa29() {
        if (_0x4e165f.timer[_0x41b38c]) {
          clearTimeout(_0x4e165f.timer[_0x41b38c]);
          delete _0x4e165f.timer[_0x41b38c];
        }
      }
      function _0x43f66e(_0x473a94, _0x3e8485) {
        _0x15fa29();
        if (!_0x3b434a) {
          return;
        }
        var _0x5cd26c = 0;
        if (_0xe9f639.init.enableStreamingDownload) {
          _0x1d5130("viiiiii", _0x3b434a, [_0x3f8303, _0x473a94.status, 0, _0x3e8485.length, 0, _0x5cd26c]);
        } else if (_0x3e8485.length != 0) {
          var _0x2d86b6 = _0x14649f(_0x3e8485.length);
          _0x5f38b4.set(_0x3e8485, _0x2d86b6);
          _0x1d5130("viiiiii", _0x3b434a, [_0x3f8303, _0x473a94.status, _0x2d86b6, _0x3e8485.length, 0, _0x5cd26c]);
        } else {
          _0x1d5130("viiiiii", _0x3b434a, [_0x3f8303, _0x473a94.status, 0, 0, 0, _0x5cd26c]);
        }
        if (_0xe9f639.tempBuffer) {
          _0x540f62(_0xe9f639.tempBuffer);
        }
      }
      function _0x307e24(_0x4fcfbe, _0x2f275c) {
        _0x15fa29();
        if (!_0x3b434a) {
          return;
        }
        var _0xf08639 = _0x3b9e6b(_0x4fcfbe) + 1;
        var _0x3b91d6 = _0x14649f(_0xf08639);
        _0x17e527(_0x4fcfbe, _0x3b91d6, _0xf08639);
        _0x1d5130("viiiiii", _0x3b434a, [_0x3f8303, 500, 0, 0, _0x3b91d6, _0x2f275c]);
        _0x540f62(_0x3b91d6);
        if (_0xe9f639.tempBuffer) {
          _0x540f62(_0xe9f639.tempBuffer);
        }
      }
      function _0x8a5410(_0x31bcda) {
        if (!_0x7731d3 || !_0x31bcda.lengthComputable) {
          return;
        }
        var _0x4d0a23 = _0x31bcda.response;
        _0x4e165f.responses[_0x41b38c] = _0x4d0a23;
        if (_0x31bcda.chunk) {
          var _0x19d2f2 = _0x14e87c(_0x31bcda.chunk.length);
          _0x5f38b4.set(_0x31bcda.chunk, _0x19d2f2);
          _0x1d5130("viiiiii", _0x7731d3, [_0x3f8303, _0x4d0a23.status, _0x31bcda.loaded, _0x31bcda.total, _0x19d2f2, _0x31bcda.chunk.length]);
        } else {
          _0x1d5130("viiiiii", _0x7731d3, [_0x3f8303, _0x4d0a23.status, _0x31bcda.loaded, _0x31bcda.total, 0, 0]);
        }
      }
      try {
        if (_0x32248a > 0) {
          var _0x3b1f83 = _0x5f38b4.subarray(_0x400f14, _0x400f14 + _0x32248a);
          _0xe9f639.init.body = new Blob([_0x3b1f83]);
        }
        if (_0xe9f639.timeout) {
          _0x4e165f.timer[_0x41b38c] = setTimeout(function () {
            _0xe9f639.isTimedOut = true;
            _0x4fff31.abort();
          }, _0xe9f639.timeout);
        }
        var _0x23d459 = _0x1d435e.fetchWithProgress;
        _0xe9f639.init.onProgress = _0x8a5410;
        if (_0x1d435e.companyName && _0x1d435e.productName && _0x1d435e.cachedFetch) {
          _0x23d459 = _0x1d435e.cachedFetch;
          _0xe9f639.init.companyName = _0x1d435e.companyName;
          _0xe9f639.init.productName = _0x1d435e.productName;
          _0xe9f639.init.productVersion = _0x1d435e.productVersion;
          _0xe9f639.init.control = _0x1d435e.cacheControl(_0xe9f639.url);
        }
        _0x23d459(_0xe9f639.url, _0xe9f639.init).then(function (_0x3a7d38) {
          _0x4e165f.responses[_0x41b38c] = _0x3a7d38;
          _0x43f66e(_0x3a7d38, _0x3a7d38.parsedBody);
        }).catch(function (_0xee8580) {
          var _0x3d31d6 = 2;
          var _0x1083d5 = 17;
          var _0x200b14 = 14;
          if (_0xe9f639.isTimedOut) {
            _0x307e24("Connection timed out.", _0x200b14);
          } else if (_0x4fff31.signal.aborted) {
            _0x307e24("Aborted.", _0x1083d5);
          } else {
            _0x307e24(_0xee8580.message, _0x3d31d6);
          }
        });
      } catch (_0x5a49a2) {
        var _0x2152bb = 2;
        _0x307e24(_0x5a49a2.message, _0x2152bb);
      }
    }
    function _0x1eeb5f(_0x303e22, _0x509c90) {
      var _0x3eb61e = _0x4e165f.requests[_0x303e22];
      if (!_0x3eb61e) {
        return;
      }
      _0x3eb61e.init.redirect = _0x509c90 === 0 ? "error" : "follow";
    }
    function _0xa80cf3(_0x4a9a8f, _0x22a7f1, _0x10b37b) {
      var _0x5b48ac = _0x4e165f.requests[_0x4a9a8f];
      if (!_0x5b48ac) {
        return;
      }
      var _0x1da119 = _0x5eaf00(_0x22a7f1);
      var _0xc27249 = _0x5eaf00(_0x10b37b);
      _0x5b48ac.init.headers[_0x1da119] = _0xc27249;
    }
    function _0x5cddac(_0x5e609d, _0x5840cd) {
      var _0x4f137b = _0x4e165f.requests[_0x5e609d];
      if (!_0x4f137b) {
        return;
      }
      _0x4f137b.timeout = _0x5840cd;
    }
    function _0x57c5f2(_0x1806b2, _0x707cf5, _0x44836c, _0x107242) {
      var _0x3fbdea = _0x5eaf00(_0x1806b2);
      var _0x26848d = _0x5eaf00(_0x707cf5);
      var _0x1cc41e = _0x5eaf00(_0x44836c);
      var _0xb12b48 = _0x5eaf00(_0x107242);
      try {
        firebase.database().ref(_0x3fbdea).on("child_added", function (_0x15f030) {
          window.unityInstance.SendMessage(_0x26848d, _0x1cc41e, JSON.stringify(_0x15f030.val()));
        });
      } catch (_0xc8e0b4) {
        window.unityInstance.SendMessage(_0x26848d, _0xb12b48, JSON.stringify(_0xc8e0b4, Object.getOwnPropertyNames(_0xc8e0b4)));
      }
    }
    function _0x37e48e(_0x189648, _0x585a74, _0x238e26, _0x19d5a8) {
      var _0x57f83d = _0x5eaf00(_0x189648);
      var _0xfd6f29 = _0x5eaf00(_0x585a74);
      var _0x2517cb = _0x5eaf00(_0x238e26);
      var _0x53fad3 = _0x5eaf00(_0x19d5a8);
      try {
        firebase.database().ref(_0x57f83d).on("child_changed", function (_0xdb2cfc) {
          window.unityInstance.SendMessage(_0xfd6f29, _0x2517cb, JSON.stringify(_0xdb2cfc.val()));
        });
      } catch (_0x49cc3c) {
        window.unityInstance.SendMessage(_0xfd6f29, _0x53fad3, JSON.stringify(_0x49cc3c, Object.getOwnPropertyNames(_0x49cc3c)));
      }
    }
    function _0x123355(_0x2a6d3a, _0x4e1aa6, _0x2a5384, _0x533ca3) {
      var _0x5040df = _0x5eaf00(_0x2a6d3a);
      var _0x37bfea = _0x5eaf00(_0x4e1aa6);
      var _0x190d95 = _0x5eaf00(_0x2a5384);
      var _0x3a9186 = _0x5eaf00(_0x533ca3);
      try {
        firebase.database().ref(_0x5040df).on("child_removed", function (_0x23c2b5) {
          window.unityInstance.SendMessage(_0x37bfea, _0x190d95, JSON.stringify(_0x23c2b5.val()));
        });
      } catch (_0x4af93d) {
        window.unityInstance.SendMessage(_0x37bfea, _0x3a9186, JSON.stringify(_0x4af93d, Object.getOwnPropertyNames(_0x4af93d)));
      }
    }
    function _0xdb661b(_0x4eb9b1, _0x2f31bf, _0x201b8b, _0x56fd64, _0x27198e) {
      var _0x18d742 = _0x5eaf00(_0x4eb9b1);
      var _0x4b9510 = _0x5eaf00(_0x201b8b);
      var _0x1a9a51 = _0x5eaf00(_0x56fd64);
      var _0x306567 = _0x5eaf00(_0x27198e);
      try {
        if (typeof firestorelisteners === "undefined") {
          firestorelisteners = {};
        }
        this.firestorelisteners[_0x18d742 + "/collection/"] = firebase.firestore().collection(_0x18d742).onSnapshot({
          includeMetadataChanges: _0x2f31bf == 1
        }, function (_0x3ba34c) {
          var _0x48a1ef = {};
          _0x3ba34c.forEach(function (_0x3c9985) {
            _0x48a1ef[_0x3c9985.id] = _0x3c9985.data();
          });
          window.unityInstance.SendMessage(_0x4b9510, _0x1a9a51, JSON.stringify(_0x48a1ef));
        }, function (_0x213f0c) {
          window.unityInstance.SendMessage(_0x4b9510, _0x306567, JSON.stringify(_0x213f0c, Object.getOwnPropertyNames(_0x213f0c)));
        });
      } catch (_0x34e245) {
        window.unityInstance.SendMessage(_0x4b9510, _0x306567, JSON.stringify(_0x34e245, Object.getOwnPropertyNames(_0x34e245)));
      }
    }
    function _0x13b07d(_0x23df80, _0x33a7e4, _0x593dc5, _0x235bf8, _0x41b387, _0x5429bf) {
      var _0x4c3115 = _0x5eaf00(_0x23df80);
      var _0x160436 = _0x5eaf00(_0x33a7e4);
      var _0x3647a2 = _0x5eaf00(_0x235bf8);
      var _0x1d0145 = _0x5eaf00(_0x41b387);
      var _0x555423 = _0x5eaf00(_0x5429bf);
      try {
        if (typeof firestorelisteners === "undefined") {
          firestorelisteners = {};
        }
        this.firestorelisteners[_0x4c3115 + "/" + _0x160436] = firebase.firestore().collection(_0x4c3115).doc(_0x160436).onSnapshot({
          includeMetadataChanges: _0x593dc5 == 1
        }, function (_0x37792e) {
          window.unityInstance.SendMessage(_0x3647a2, _0x1d0145, JSON.stringify(_0x37792e.data()));
        }, function (_0x577cde) {
          window.unityInstance.SendMessage(_0x3647a2, _0x555423, JSON.stringify(_0x577cde, Object.getOwnPropertyNames(_0x577cde)));
        });
      } catch (_0x942a65) {
        window.unityInstance.SendMessage(_0x3647a2, _0x555423, JSON.stringify(_0x942a65, Object.getOwnPropertyNames(_0x942a65)));
      }
    }
    function _0x4c2b62(_0x5b6ab9, _0x444a4c, _0x128e9d, _0x123f77) {
      var _0x2d48c0 = _0x5eaf00(_0x5b6ab9);
      var _0x2b2716 = _0x5eaf00(_0x444a4c);
      var _0x1049d4 = _0x5eaf00(_0x128e9d);
      var _0x12a0bf = _0x5eaf00(_0x123f77);
      try {
        firebase.database().ref(_0x2d48c0).on("value", function (_0x2632cd) {
          window.unityInstance.SendMessage(_0x2b2716, _0x1049d4, JSON.stringify(_0x2632cd.val()));
        });
      } catch (_0x8241d8) {
        window.unityInstance.SendMessage(_0x2b2716, _0x12a0bf, JSON.stringify(_0x8241d8, Object.getOwnPropertyNames(_0x8241d8)));
      }
    }
    function _0x4cfca1(_0x233d35) {
      var _0x3ad12a = _0x5eaf00(_0x233d35);
      firebaseLogEvent(_0x3ad12a);
    }
    function _0x4a470c(_0xce854d, _0x435ab4) {
      var _0x484960 = _0x5eaf00(_0xce854d);
      var _0x2a2a2f = JSON.parse(_0x5eaf00(_0x435ab4));
      firebaseLogEventParameter(_0x484960, _0x2a2a2f);
    }
    function _0x48996f(_0x5c76b1, _0x2e7a54, _0x53bcc9, _0xfc063d, _0x3dbed4) {
      var _0x250046 = _0x5eaf00(_0x5c76b1);
      var _0x15abe1 = _0x5eaf00(_0x53bcc9);
      var _0x1056a9 = _0x5eaf00(_0xfc063d);
      var _0x5c8be8 = _0x5eaf00(_0x3dbed4);
      try {
        firebase.database().ref(_0x250046).transaction(function (_0x338ff6) {
          if (!isNaN(_0x338ff6)) {
            return _0x338ff6 + _0x2e7a54;
          } else {
            return _0x2e7a54;
          }
        }).then(function (_0x40f91e) {
          window.unityInstance.SendMessage(_0x15abe1, _0x1056a9, "Success: transaction run in " + _0x250046);
        });
      } catch (_0x41fd1a) {
        window.unityInstance.SendMessage(_0x15abe1, _0x5c8be8, JSON.stringify(_0x41fd1a, Object.getOwnPropertyNames(_0x41fd1a)));
      }
    }
    function _0x17d239(_0x2e00f3, _0x2d3502, _0x19d149) {
      var _0x53651a = _0x5eaf00(_0x2e00f3);
      var _0x4556b1 = _0x5eaf00(_0x2d3502);
      var _0x528c31 = _0x5eaf00(_0x19d149);
      firebase.auth().onAuthStateChanged(function (_0x482183) {
        if (_0x482183) {
          window.unityInstance.SendMessage(_0x53651a, _0x4556b1, JSON.stringify(_0x482183));
        } else {
          window.unityInstance.SendMessage(_0x53651a, _0x528c31, "User signed out");
        }
      });
    }
    function _0x2c2d3e() {
      if (!navigator || !navigator.clipboard || !navigator.clipboard.readText) {
        window.unityInstance.SendMessage("ClipboardUI", "SetClipboardText", "");
        return 0;
      }
      navigator.clipboard.readText().then(_0x4bc53e => {
        window.unityInstance.SendMessage("ClipboardUI", "SetClipboardText", _0x4bc53e);
        return 1;
      }).catch(_0x43de3c => {
        console.error("Failed to read clipboard", _0x43de3c);
        return -1;
      });
    }
    function _0x5934e5() {
      var _0x1cb59f = prompt("Paste your text (press Ctrl + V) here:");
      if (_0x1cb59f === null) {
        _0x1cb59f = "";
      }
      var _0xd1705 = _0x3b9e6b(_0x1cb59f) + 1;
      var _0x497b9f = _0x14649f(_0xd1705);
      _0x17e527(_0x1cb59f, _0x497b9f, _0xd1705);
      return _0x497b9f;
    }
    function _0xf0e07b(_0xc0458b) {
      window.wgUnityInstance = _0x1d435e;
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
        window[preroll.config.loaderObjectName].ping(_0xc0458b);
      } catch (_0x25357d) {
        console.log("WGSDK: No production WGSDK resources found, loading development resources.");
        var _0x4d4651 = document.createElement("script");
        _0x4d4651.addEventListener("load", function (_0x22d94a) {
          var _0x4b6877 = document.createElement("script");
          _0x4b6877.addEventListener("load", function (_0x5683c1) {
            console.log("WGSDK: Development resources loaded.");
            _0x3a87e4(_0xc0458b, true);
          }.bind(this));
          document.getElementsByTagName("head")[0].appendChild(_0x4b6877);
          _0x4b6877.src = window.GMSOFT_ADS_INFO.wgLibrary;
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x4d4651);
        _0x4d4651.src = window.GMSOFT_ADS_INFO.wgConf;
      }
    }
    function _0x3a87e4(_0x30b39e, _0x13cb13) {
      var _0x52f0ef;
      if (_0x13cb13 === true) {
        _0x52f0ef = _0x30b39e;
      } else {
        _0x52f0ef = _0x5eaf00(_0x30b39e);
      }
      setTimeout(function () {
        _0xf0e07b(_0x52f0ef);
      }, 250);
    }
    function _0x3cb0a9(_0x61d4dd, _0x5871e4, _0x9a30e5, _0x49522b, _0x4ad20f) {
      var _0x4ecbe9 = _0x5eaf00(_0x61d4dd);
      var _0x263b3c = _0x5eaf00(_0x5871e4);
      var _0x3c92a9 = _0x5eaf00(_0x9a30e5);
      var _0x5446ba = _0x5eaf00(_0x49522b);
      var _0x244d1a = _0x5eaf00(_0x4ad20f);
      try {
        firebase.database().ref(_0x4ecbe9).set(JSON.parse(_0x263b3c)).then(function (_0xd1d48e) {
          window.unityInstance.SendMessage(_0x3c92a9, _0x5446ba, "Success: " + _0x263b3c + " was posted to " + _0x4ecbe9);
        });
      } catch (_0xe1454d) {
        window.unityInstance.SendMessage(_0x3c92a9, _0x244d1a, JSON.stringify(_0xe1454d, Object.getOwnPropertyNames(_0xe1454d)));
      }
    }
    function _0x22f222(_0x518055, _0xf71d98, _0xc5ee71, _0x3353c7, _0x349391) {
      var _0x2a2350 = _0x5eaf00(_0x518055);
      var _0xee9453 = _0x5eaf00(_0xf71d98);
      var _0x339dae = _0x5eaf00(_0xc5ee71);
      var _0xd39748 = _0x5eaf00(_0x3353c7);
      var _0x772e74 = _0x5eaf00(_0x349391);
      try {
        firebase.database().ref(_0x2a2350).push().set(JSON.parse(_0xee9453)).then(function (_0x1b51b7) {
          window.unityInstance.SendMessage(_0x339dae, _0xd39748, "Success: " + _0xee9453 + " was pushed to " + _0x2a2350);
        });
      } catch (_0x44a971) {
        window.unityInstance.SendMessage(_0x339dae, _0x772e74, JSON.stringify(_0x44a971, Object.getOwnPropertyNames(_0x44a971)));
      }
    }
    function _0xf62fd7() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
        window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
      } catch (_0x1215cc) {
        console.log("No WeeGooAFG implementation found!");
      }
    }
    function _0x2c5c6c() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
        window[window.preroll.config.loaderObjectName].registerGameControls(_0x1d435e);
      } catch (_0x278579) {
        console.log("WGSDK: Can not register game controls.");
        setTimeout(function () {
          _0x2c5c6c();
        }, 250);
      }
    }
    function _0x30bb36() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
        window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
          onReady: "OnReadyMethod",
          onSuccess: "OnSuccessMethod",
          onFail: "OnFailMethod"
        });
      } catch (_0x2a4dd9) {
        console.log("WGSDK: Can not register reward ad callbacks.");
        _0x495f3b();
      }
    }
    function _0x495f3b() {
      setTimeout(function () {
        _0x30bb36();
      }, 250);
    }
    function _0x50fdd5(_0x1f4187, _0x5efc48, _0x1c9e80, _0x186b59, _0x56de5b, _0x4f0f79, _0x5844ce) {
      var _0x356c49 = _0x5eaf00(_0x1f4187);
      var _0x2749ab = _0x5eaf00(_0x5efc48);
      var _0x240820 = _0x5eaf00(_0x1c9e80);
      var _0x10e847 = _0x5eaf00(_0x186b59);
      var _0x46e018 = _0x5eaf00(_0x56de5b);
      var _0xd7f7a8 = _0x5eaf00(_0x4f0f79);
      var _0x1e5fb1 = _0x5eaf00(_0x5844ce);
      try {
        var _0x186b59 = {};
        _0x186b59[_0x240820] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x10e847));
        firebase.firestore().collection(_0x356c49).doc(_0x2749ab).update(_0x186b59).then(function () {
          window.unityInstance.SendMessage(_0x46e018, _0xd7f7a8, "Success: element " + _0x10e847 + " was removed in " + _0x240820);
        }).catch(function (_0x49b67c) {
          window.unityInstance.SendMessage(_0x46e018, _0x1e5fb1, JSON.stringify(_0x49b67c, Object.getOwnPropertyNames(_0x49b67c)));
        });
      } catch (_0x5337ea) {
        window.unityInstance.SendMessage(_0x46e018, _0x1e5fb1, JSON.stringify(_0x5337ea, Object.getOwnPropertyNames(_0x5337ea)));
      }
    }
    function _0x3fbb49(_0x199663) {
      var _0x590ea3 = window.unityStringify(_0x199663);
      var _0x1dce7e = {
        adStarted: function () {
          window.UnitySDK.unlockPointer();
          _0x5e20c0("CrazySDKSingleton", "JSLibCallback_AdStarted");
        },
        adFinished: function () {
          window.UnitySDK.lockPointer();
          _0x5e20c0("CrazySDKSingleton", "JSLibCallback_AdFinished");
        },
        adError: function (_0x3dc394) {
          _0x5e20c0("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x3dc394));
        }
      };
      window.CrazyGames.SDK.ad.requestAd(_0x590ea3, _0x1dce7e).catch(function (_0x5a19ab) {
        window.UnitySDK.logError("Error while requesting ad:", _0x5a19ab);
        _0x5e20c0("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
          code: "unknown",
          message: _0x5a19ab.message || "Unknown error"
        }));
      });
    }
    function _0x3b96cf(_0x307ca2) {
      var _0xbfc1fd = JSON.parse(window.unityStringify(_0x307ca2));
      try {
        window.CrazyGames.SDK.banner.requestOverlayBanners(_0xbfc1fd, function (_0x55f338, _0xdf402e, _0x405b84) {});
      } catch (_0x244596) {
        window.UnitySDK.logError("Error while requesting banners:", _0x244596);
      }
    }
    function _0x5a74bb(_0x493402) {
      var _0x223957 = JSON.parse(window.unityStringify(_0x493402));
      var _0x50480f = "";
      try {
        _0x50480f = window.CrazyGames.SDK.game.inviteLink(_0x223957);
      } catch (_0x104784) {
        window.UnitySDK.logError("Error while requesting invite url:", _0x104784);
      }
      var _0xf266f4 = _0x3b9e6b(_0x50480f) + 1;
      var _0x32c201 = _0x14649f(_0xf266f4);
      _0x17e527(_0x50480f, _0x32c201, _0xf266f4);
      return _0x32c201;
    }
    function _0x3839d1(_0x193132) {
      _0x193132 = _0x5eaf00(_0x193132);
      window.GD_OPTIONS = {
        debug: false,
        gameId: _0x193132,
        onEvent: function (_0x412edf) {
          switch (_0x412edf.name) {
            case "SDK_GAME_START":
              _0x5e20c0("GameDistribution", "ResumeGameCallback");
              break;
            case "SDK_GAME_PAUSE":
              _0x5e20c0("GameDistribution", "PauseGameCallback");
              break;
            case "SDK_REWARDED_WATCH_COMPLETE":
              _0x5e20c0("GameDistribution", "RewardedCompleteCallback");
              break;
            case "SDK_ERROR":
              break;
            default:
              _0x5e20c0("GameDistribution", "EventCallback", _0x412edf.name);
          }
        }
      };
      (function (_0x5db003, _0x31b6ea, _0x490d45) {
        var _0x69cf8f;
        var _0x3dfc39 = _0x5db003.getElementsByTagName(_0x31b6ea)[0];
        if (_0x5db003.getElementById(_0x490d45)) {
          return;
        }
        _0x69cf8f = _0x5db003.createElement(_0x31b6ea);
        _0x69cf8f.id = _0x490d45;
        _0x69cf8f.src = "//html5.api.gamedistribution.com/main.min.js";
        _0x3dfc39.parentNode.insertBefore(_0x69cf8f, _0x3dfc39);
      })(document, "script", "gamedistribution-jssdk");
    }
    function _0x1c077f() {
      if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
        gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x25eeb5) {
          _0x5e20c0("GameDistribution", "PreloadRewardedVideoCallback", 1);
        }).catch(function (_0x52ecfc) {
          _0x5e20c0("GameDistribution", "PreloadRewardedVideoCallback", 0);
        });
      }
    }
    function _0xdccce1(_0xaefc91) {
      _0xaefc91 = _0x5eaf00(_0xaefc91);
      if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0xaefc91 !== "undefined") {
        gdsdk.sendEvent(_0xaefc91).then(function (_0x3169b9) {
          console.log("Game event post message sent Succesfully...");
        }).catch(function (_0x31373d) {
          console.log(_0x31373d.message);
        });
      }
    }
    function _0x52d274(_0x13b192) {
      if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
        _0x13b192 = _0x5eaf00(_0x13b192) || gdsdk.AdType.Interstitial;
        gdsdk.showAd(_0x13b192).then(function (_0x439465) {
          if (_0x13b192 === gdsdk.AdType.Rewarded) {
            _0x5e20c0("GameDistribution", "RewardedVideoSuccessCallback");
          }
        }).catch(function (_0x1db55c) {
          if (_0x13b192 === gdsdk.AdType.Rewarded) {
            _0x5e20c0("GameDistribution", "RewardedVideoFailureCallback");
          }
        });
      }
    }
    function _0x4f513f(_0x4a5a0f, _0x3c8f5c, _0x4d3aba, _0x448523, _0x2a721d, _0x1ec22f) {
      var _0xc82d68 = _0x5eaf00(_0x4a5a0f);
      var _0x5a6605 = _0x5eaf00(_0x3c8f5c);
      var _0x3583bd = _0x5eaf00(_0x4d3aba);
      var _0x534a56 = _0x5eaf00(_0x448523);
      var _0x29c64f = _0x5eaf00(_0x2a721d);
      var _0x33ef7e = _0x5eaf00(_0x1ec22f);
      try {
        firebase.firestore().collection(_0xc82d68).doc(_0x5a6605).set(JSON.parse(_0x3583bd)).then(function () {
          window.unityInstance.SendMessage(_0x534a56, _0x29c64f, "Success: document " + _0x5a6605 + " was set");
        }).catch(function (_0x19f1d3) {
          window.unityInstance.SendMessage(_0x534a56, _0x33ef7e, JSON.stringify(_0x19f1d3, Object.getOwnPropertyNames(_0x19f1d3)));
        });
      } catch (_0x3bb9b8) {
        window.unityInstance.SendMessage(_0x534a56, _0x33ef7e, JSON.stringify(_0x3bb9b8, Object.getOwnPropertyNames(_0x3bb9b8)));
      }
    }
    function _0x1c50c3(_0x1e095f) {
      var _0x403cf6 = JSON.parse(_0x5eaf00(_0x1e095f));
      firebaseSetUserProperties(_0x403cf6);
    }
    function _0x3eb1cb() {
      window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x524cca) {
        _0x5e20c0("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
          linkAccountResponseStr: JSON.stringify(_0x524cca)
        }));
      }).catch(function (_0x684bb0) {
        _0x5e20c0("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
          errorJson: JSON.stringify(_0x684bb0)
        }));
      });
    }
    function _0x5dfe60() {
      window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0xb44c5b) {
        _0x5e20c0("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
          userJson: JSON.stringify(_0xb44c5b)
        }));
      }).catch(function (_0x3e678f) {
        _0x5e20c0("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
          errorJson: JSON.stringify(_0x3e678f)
        }));
      });
    }
    function _0x447876(_0x258fa2) {
      var _0x2ab966 = JSON.parse(window.unityStringify(_0x258fa2));
      var _0x2e0b02 = "";
      try {
        _0x2e0b02 = window.CrazyGames.SDK.game.showInviteButton(_0x2ab966);
      } catch (_0x37aceb) {
        window.UnitySDK.logError("Error while showing invite button:", _0x37aceb);
      }
      var _0x2fea21 = _0x3b9e6b(_0x2e0b02) + 1;
      var _0x4ee29 = _0x14649f(_0x2fea21);
      _0x17e527(_0x2e0b02, _0x4ee29, _0x2fea21);
      return _0x4ee29;
    }
    function _0x14c405() {
      window[preroll.config.loaderObjectName].showRewardAd();
    }
    function _0xd6adc7(_0xb12372, _0x196f0d, _0x4251d3) {
      var _0x5d5941 = _0x5eaf00(_0xb12372);
      var _0xf64fa0 = _0x5eaf00(_0x196f0d);
      var _0x4e0cf6 = _0x5eaf00(_0x4251d3);
      try {
        firebase.auth().signInAnonymously().then(function (_0x1acb28) {
          window.unityInstance.SendMessage(_0x5d5941, _0xf64fa0, "Success: signed up for " + _0x1acb28);
        }).catch(function (_0x50630f) {
          window.unityInstance.SendMessage(_0x5d5941, _0x4e0cf6, JSON.stringify(_0x50630f, Object.getOwnPropertyNames(_0x50630f)));
        });
      } catch (_0x2638b9) {
        window.unityInstance.SendMessage(_0x5d5941, _0x4e0cf6, JSON.stringify(_0x2638b9, Object.getOwnPropertyNames(_0x2638b9)));
      }
    }
    function _0x1f0c69(_0x5db245, _0x2778b9, _0x44cb20, _0x444ad3, _0xd4d377) {
      var _0x455626 = _0x5eaf00(_0x5db245);
      var _0x499588 = _0x5eaf00(_0x2778b9);
      var _0x4ee37d = _0x5eaf00(_0x44cb20);
      var _0x68ad14 = _0x5eaf00(_0x444ad3);
      var _0x3fad22 = _0x5eaf00(_0xd4d377);
      try {
        firebase.auth().signInWithEmailAndPassword(_0x455626, _0x499588).then(function (_0x41bf5b) {
          window.unityInstance.SendMessage(_0x4ee37d, _0x68ad14, "Success: signed in for " + _0x455626);
        }).catch(function (_0x366b83) {
          window.unityInstance.SendMessage(_0x4ee37d, _0x3fad22, JSON.stringify(_0x366b83, Object.getOwnPropertyNames(_0x366b83)));
        });
      } catch (_0x308bd3) {
        window.unityInstance.SendMessage(_0x4ee37d, _0x3fad22, JSON.stringify(_0x308bd3, Object.getOwnPropertyNames(_0x308bd3)));
      }
    }
    function _0x5af51e(_0x528865, _0x33e015, _0x877a6e) {
      var _0x1b3e2e = _0x5eaf00(_0x528865);
      var _0x549cfd = _0x5eaf00(_0x33e015);
      var _0x226f8d = _0x5eaf00(_0x877a6e);
      try {
        var _0x1e23be = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(_0x1e23be).then(function (_0x1c4d50) {
          window.unityInstance.SendMessage(_0x1b3e2e, _0x549cfd, "Success: signed in with Facebook!");
        }).catch(function (_0x2f7b54) {
          window.unityInstance.SendMessage(_0x1b3e2e, _0x226f8d, JSON.stringify(_0x2f7b54, Object.getOwnPropertyNames(_0x2f7b54)));
        });
      } catch (_0x466edb) {
        window.unityInstance.SendMessage(_0x1b3e2e, _0x226f8d, JSON.stringify(_0x466edb, Object.getOwnPropertyNames(_0x466edb)));
      }
    }
    function _0x37bab3(_0x4f1e79, _0x1a6dea, _0x14d672) {
      var _0x4a8764 = _0x5eaf00(_0x4f1e79);
      var _0x388fa5 = _0x5eaf00(_0x1a6dea);
      var _0x18e6d7 = _0x5eaf00(_0x14d672);
      try {
        var _0x3ff1b8 = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(_0x3ff1b8).then(function (_0x1890c7) {
          window.unityInstance.SendMessage(_0x4a8764, _0x388fa5, "Success: signed in with Google!");
        }).catch(function (_0x294d59) {
          window.unityInstance.SendMessage(_0x4a8764, _0x18e6d7, JSON.stringify(_0x294d59, Object.getOwnPropertyNames(_0x294d59)));
        });
      } catch (_0x20fabf) {
        window.unityInstance.SendMessage(_0x4a8764, _0x18e6d7, JSON.stringify(_0x20fabf, Object.getOwnPropertyNames(_0x20fabf)));
      }
    }
    function _0x58583e(_0x371573, _0x902ba8, _0x190b72, _0x45a76c) {
      var _0x4f8103 = _0x5eaf00(_0x371573);
      var _0x39519b = _0x5eaf00(_0x902ba8);
      var _0x4b8e0c = _0x5eaf00(_0x190b72);
      var _0xeb422e = _0x5eaf00(_0x45a76c);
      try {
        firebase.database().ref(_0x4f8103).off("child_added");
        window.unityInstance.SendMessage(_0x39519b, _0x4b8e0c, "Success: listener removed");
      } catch (_0x1b2561) {
        window.unityInstance.SendMessage(_0x39519b, _0xeb422e, JSON.stringify(_0x1b2561, Object.getOwnPropertyNames(_0x1b2561)));
      }
    }
    function _0x316d83(_0xf5c52a, _0x2a10b5, _0x51e242, _0x329090) {
      var _0x13070c = _0x5eaf00(_0xf5c52a);
      var _0xd65cc6 = _0x5eaf00(_0x2a10b5);
      var _0x145a74 = _0x5eaf00(_0x51e242);
      var _0xa0b1c = _0x5eaf00(_0x329090);
      try {
        firebase.database().ref(_0x13070c).off("child_changed");
        window.unityInstance.SendMessage(_0xd65cc6, _0x145a74, "Success: listener removed");
      } catch (_0x3f5571) {
        window.unityInstance.SendMessage(_0xd65cc6, _0xa0b1c, JSON.stringify(_0x3f5571, Object.getOwnPropertyNames(_0x3f5571)));
      }
    }
    function _0x3a2c3b(_0x14f7d8, _0x1a9a18, _0x3889a1, _0x1ebd1d) {
      var _0x2621da = _0x5eaf00(_0x14f7d8);
      var _0x41669f = _0x5eaf00(_0x1a9a18);
      var _0x160e56 = _0x5eaf00(_0x3889a1);
      var _0x4288bc = _0x5eaf00(_0x1ebd1d);
      try {
        firebase.database().ref(_0x2621da).off("child_removed");
        window.unityInstance.SendMessage(_0x41669f, _0x160e56, "Success: listener removed");
      } catch (_0x2c6069) {
        window.unityInstance.SendMessage(_0x41669f, _0x4288bc, JSON.stringify(_0x2c6069, Object.getOwnPropertyNames(_0x2c6069)));
      }
    }
    function _0x3f8ab9(_0x26a47b, _0x5b2f38, _0x24c871, _0x32287e) {
      var _0x38790b = _0x5eaf00(_0x26a47b);
      var _0x1516ac = _0x5eaf00(_0x5b2f38);
      var _0x2670d7 = _0x5eaf00(_0x24c871);
      var _0x5b72ce = _0x5eaf00(_0x32287e);
      try {
        if (typeof firestorelisteners === "undefined") {
          firestorelisteners = {};
        }
        this.firestorelisteners[_0x38790b + "/collection/"]();
        window.unityInstance.SendMessage(_0x1516ac, _0x2670d7, "Success: listener was removed");
      } catch (_0x15b848) {
        window.unityInstance.SendMessage(_0x1516ac, _0x5b72ce, JSON.stringify(_0x15b848, Object.getOwnPropertyNames(_0x15b848)));
      }
    }
    function _0x470fb5(_0xd54a57, _0x37c909, _0x1d9687, _0x1632f6, _0x54c399) {
      var _0x42145d = _0x5eaf00(_0xd54a57);
      var _0x1c4765 = _0x5eaf00(_0x37c909);
      var _0x8a70dc = _0x5eaf00(_0x1d9687);
      var _0x30e677 = _0x5eaf00(_0x1632f6);
      var _0x52ffd7 = _0x5eaf00(_0x54c399);
      try {
        if (typeof firestorelisteners === "undefined") {
          firestorelisteners = {};
        }
        this.firestorelisteners[_0x42145d + "/" + _0x1c4765]();
        window.unityInstance.SendMessage(_0x8a70dc, _0x30e677, "Success: listener was removed");
      } catch (_0x354dac) {
        window.unityInstance.SendMessage(_0x8a70dc, _0x52ffd7, JSON.stringify(_0x354dac, Object.getOwnPropertyNames(_0x354dac)));
      }
    }
    function _0x5e2348(_0x54a10a, _0x2e92f5, _0x4b9315, _0x1f3e0a) {
      var _0x407335 = _0x5eaf00(_0x54a10a);
      var _0x3bb270 = _0x5eaf00(_0x2e92f5);
      var _0x3dd0f7 = _0x5eaf00(_0x4b9315);
      var _0x3f8f9c = _0x5eaf00(_0x1f3e0a);
      try {
        firebase.database().ref(_0x407335).off("value");
        window.unityInstance.SendMessage(_0x3bb270, _0x3dd0f7, "Success: listener removed");
      } catch (_0x1619e9) {
        window.unityInstance.SendMessage(_0x3bb270, _0x3f8f9c, JSON.stringify(_0x1619e9, Object.getOwnPropertyNames(_0x1619e9)));
      }
    }
    function _0x3c80b6() {
      try {
        window.CrazyGames.SDK.data.syncUnityGameData();
      } catch (_0x339ee1) {
        window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x339ee1);
      }
    }
    function _0x37d71e(_0x2a90e9, _0x59b486, _0x268273, _0x5e4338) {
      var _0x366547 = _0x5eaf00(_0x2a90e9);
      var _0x3fbc12 = _0x5eaf00(_0x59b486);
      var _0x2cc7de = _0x5eaf00(_0x268273);
      var _0x4f482d = _0x5eaf00(_0x5e4338);
      try {
        firebase.database().ref(_0x366547).transaction(function (_0x4d3252) {
          if (typeof _0x4d3252 === "boolean") {
            return !_0x4d3252;
          } else {
            return true;
          }
        }).then(function (_0x4b410b) {
          window.unityInstance.SendMessage(_0x3fbc12, _0x2cc7de, "Success: transaction run in " + _0x366547);
        });
      } catch (_0x1c6aba) {
        window.unityInstance.SendMessage(_0x3fbc12, _0x4f482d, JSON.stringify(_0x1c6aba, Object.getOwnPropertyNames(_0x1c6aba)));
      }
    }
    function _0x4844bf(_0x2517b0, _0x2bb7dd, _0x27992c, _0x3b2041, _0x15ffcd, _0x19f422) {
      var _0x1faafc = _0x5eaf00(_0x2517b0);
      var _0x297c22 = _0x5eaf00(_0x2bb7dd);
      var _0x2cc909 = _0x5eaf00(_0x27992c);
      var _0x4ea318 = _0x5eaf00(_0x3b2041);
      var _0x1e0973 = _0x5eaf00(_0x15ffcd);
      var _0xf45dd5 = _0x5eaf00(_0x19f422);
      try {
        firebase.firestore().collection(_0x1faafc).doc(_0x297c22).update(JSON.parse(_0x2cc909)).then(function () {
          window.unityInstance.SendMessage(_0x4ea318, _0x1e0973, "Success: document " + _0x297c22 + " was updated");
        }).catch(function (_0x1fefab) {
          window.unityInstance.SendMessage(_0x4ea318, _0xf45dd5, JSON.stringify(_0x1fefab, Object.getOwnPropertyNames(_0x1fefab)));
        });
      } catch (_0x501f47) {
        window.unityInstance.SendMessage(_0x4ea318, _0xf45dd5, JSON.stringify(_0x501f47, Object.getOwnPropertyNames(_0x501f47)));
      }
    }
    function _0x526eff(_0x556509, _0x5e6119, _0x2c109d, _0x74702c, _0x452480) {
      var _0x227bc3 = _0x5eaf00(_0x556509);
      var _0x571069 = _0x5eaf00(_0x5e6119);
      var _0x4374a5 = _0x5eaf00(_0x2c109d);
      var _0x2075c6 = _0x5eaf00(_0x74702c);
      var _0xcc8335 = _0x5eaf00(_0x452480);
      try {
        firebase.database().ref(_0x227bc3).update(JSON.parse(_0x571069)).then(function (_0x8b2e41) {
          window.unityInstance.SendMessage(_0x4374a5, _0x2075c6, "Success: " + _0x571069 + " was updated in " + _0x227bc3);
        });
      } catch (_0x4c2dd0) {
        window.unityInstance.SendMessage(_0x4374a5, _0xcc8335, JSON.stringify(_0x4c2dd0, Object.getOwnPropertyNames(_0x4c2dd0)));
      }
    }
    function _0x4cc652(_0x3a355e, _0x420e36, _0x169820, _0x3d2e68, _0x4706ce) {
      var _0x311dab = _0x5eaf00(_0x3a355e);
      var _0x48f1ef = _0x5eaf00(_0x420e36);
      var _0x31244d = _0x5eaf00(_0x169820);
      var _0x289616 = _0x5eaf00(_0x3d2e68);
      var _0x3381bc = _0x5eaf00(_0x4706ce);
      try {
        firebase.storage().ref(_0x311dab).put(_0x394f00(_0x48f1ef)).then(function (_0x26d81f) {
          window.unityInstance.SendMessage(_0x31244d, _0x289616, "Success: data was posted to " + _0x311dab);
        });
      } catch (_0xc4320c) {
        window.unityInstance.SendMessage(_0x31244d, _0x3381bc, JSON.stringify(_0xc4320c, Object.getOwnPropertyNames(_0xc4320c)));
      }
      function _0x394f00(_0x3fa62c) {
        var _0x224fa7 = window.atob(_0x3fa62c);
        var _0x47c05c = _0x224fa7.length;
        var _0x5db7d7 = new Uint8Array(_0x47c05c);
        for (var _0x53985c = 0; _0x53985c < _0x47c05c; _0x53985c++) {
          _0x5db7d7[_0x53985c] = _0x224fa7.charCodeAt(_0x53985c);
        }
        return _0x5db7d7.buffer;
      }
    }
    var _0x2f064a = {
      requestInstances: {},
      nextRequestId: 1,
      loglevel: 2,
      SendTextToCSharpSide: function (_0x441bec, _0x22098a, _0x5d7c04) {
        const _0x4bdc23 = new TextEncoder();
        const _0x1eb0b5 = _0x4bdc23.encode(_0x5d7c04);
        const _0x251003 = function (_0x41f3d6, _0x454d59) {
          return _0x1d7d72.apply(null, [_0x2f064a.onallocbuffer, _0x41f3d6, _0x454d59]);
        }(_0x441bec, _0x1eb0b5.length);
        _0x5f38b4.set(_0x1eb0b5, _0x251003);
        (function (_0x34cd2e, _0x2896de, _0xa976fc) {
          _0x3e4226.apply(null, [_0x22098a, _0x34cd2e, _0x2896de, _0xa976fc]);
        })(_0x441bec, _0x251003, _0x1eb0b5.length);
      },
      GetResponseHeaders: function (_0x4d03a6, _0x3103cc) {
        if (_0x2f064a.loglevel <= 1) {
          console.log("GetResponseHeaders(" + _0x4d03a6 + ")");
        }
        var _0x4e204c = "";
        if (document && document.cookie) {
          var _0x2ac3d9 = document.cookie.split(";");
          for (var _0x9e22b0 = 0; _0x9e22b0 < _0x2ac3d9.length; ++_0x9e22b0) {
            const _0x498b4f = _0x2ac3d9[_0x9e22b0].trim();
            if (_0x498b4f.length > 0) {
              _0x4e204c += "Set-Cookie:" + _0x498b4f + "\n";
            }
          }
        }
        const _0x524765 = _0x2f064a.requestInstances[_0x4d03a6].getAllResponseHeaders().trim().split(/[\r\n]+/);
        _0x524765.forEach(_0x3973d7 => {
          const _0x4ba97b = _0x3973d7.split(": ");
          const _0x3d3602 = _0x4ba97b.shift();
          const _0x163e02 = _0x4ba97b.join(": ");
          if (_0x3d3602 !== "content-length") {
            _0x4e204c += _0x3d3602 + ":" + _0x163e02 + "\n";
          }
        });
        _0x2f064a.SendTextToCSharpSide(_0x4d03a6, _0x3103cc, _0x4e204c);
      }
    };
    function _0xce0f8f(_0x2e9ace) {
      if (_0x2f064a.loglevel <= 1) {
        console.log("XHR_Abort(" + _0x2e9ace + ")");
      }
      _0x2f064a.requestInstances[_0x2e9ace].abort();
    }
    function _0x31f7aa(_0x4beb7d, _0x2018b4, _0x25b04d, _0x29a721, _0x10d80d) {
      var _0x2269c2 = new URL(_0x5eaf00(_0x2018b4));
      var _0x71e7d6 = _0x5eaf00(_0x4beb7d);
      if (_0x2f064a.loglevel <= 1) {
        console.log("XHR_Create (" + _0x2f064a.nextRequestId + ", " + _0x71e7d6 + ", " + _0x2269c2.toString() + ", " + _0x10d80d + ")");
      }
      var _0x1344b6 = new XMLHttpRequest();
      if (_0x25b04d && _0x29a721) {
        var _0x3d3012 = _0x5eaf00(_0x25b04d);
        var _0x5a9d72 = _0x5eaf00(_0x29a721);
        _0x1344b6.withCredentials = true;
        _0x1344b6.open(_0x71e7d6, _0x2269c2.toString(), true, _0x3d3012, _0x5a9d72);
      } else {
        _0x1344b6.withCredentials = _0x10d80d;
        _0x1344b6.open(_0x71e7d6, _0x2269c2.toString(), true);
      }
      _0x1344b6.responseType = "arraybuffer";
      _0x2f064a.requestInstances[_0x2f064a.nextRequestId] = _0x1344b6;
      return _0x2f064a.nextRequestId++;
    }
    function _0x2c365c(_0x5f0c4a) {
      if (_0x2f064a.loglevel <= 1) {
        console.log("XHR_Release(" + _0x5f0c4a + ")");
      }
      delete _0x2f064a.requestInstances[_0x5f0c4a];
    }
    function _0x2542a2(_0x1ffa03, _0x26178, _0x5ca85d) {
      if (_0x2f064a.loglevel <= 1) {
        console.log("XHR_Send(" + _0x1ffa03 + ", " + _0x26178 + ", " + _0x5ca85d + ")");
      }
      var _0x54bc6e = _0x2f064a.requestInstances[_0x1ffa03];
      try {
        if (_0x5ca85d > 0) {
          _0x54bc6e.send(_0x5f38b4.subarray(_0x26178, _0x26178 + _0x5ca85d));
        } else {
          _0x54bc6e.send();
        }
      } catch (_0x28f02e) {
        if (_0x2f064a.loglevel <= 4) {
          console.error("XHR_Send(" + _0x1ffa03 + "): " + _0x28f02e.name + " : " + _0x28f02e.message);
        }
      }
    }
    function _0x355afe(_0xbef49a) {
      _0x2f064a.loglevel = _0xbef49a;
    }
    function _0x971468(_0x41349a, _0x143922, _0xcd86dc) {
      if (_0x2f064a.loglevel <= 1) {
        console.log("XHR_SetProgressHandler(" + _0x41349a + ")");
      }
      var _0x852789 = _0x2f064a.requestInstances[_0x41349a];
      if (_0x852789) {
        if (_0x143922) {
          _0x852789.onprogress = function _0xfa25bb(_0x5d54e5) {
            if (_0x2f064a.loglevel <= 1) {
              console.log("XHR_SetProgressHandler download(" + _0x41349a + ", " + _0x5d54e5.loaded + ", " + _0x5d54e5.total + ")");
            }
            if (_0x5d54e5.lengthComputable) {
              (function (_0x414420, _0x33e689, _0x4ebedd) {
                _0x3e4226.apply(null, [_0x143922, _0x414420, _0x33e689, _0x4ebedd]);
              })(_0x41349a, _0x5d54e5.loaded, _0x5d54e5.total);
            }
          };
        }
        if (_0xcd86dc) {
          _0x852789.upload.addEventListener("progress", function _0xc7c8aa(_0x9ac54d) {
            if (_0x2f064a.loglevel <= 1) {
              console.log("XHR_SetProgressHandler upload(" + _0x41349a + ", " + _0x9ac54d.loaded + ", " + _0x9ac54d.total + ")");
            }
            if (_0x9ac54d.lengthComputable) {
              (function (_0x1fd596, _0x59e375, _0x152c62) {
                _0x3e4226.apply(null, [_0xcd86dc, _0x1fd596, _0x59e375, _0x152c62]);
              })(_0x41349a, _0x9ac54d.loaded, _0x9ac54d.total);
            }
          }, true);
        }
      }
    }
    function _0x4b116a(_0x3cb4a7, _0x3cd9bc, _0x3a308d) {
      var _0x5d1423 = _0x5eaf00(_0x3cd9bc);
      var _0x3e211b = _0x5eaf00(_0x3a308d);
      if (_0x2f064a.loglevel <= 1) {
        console.log("XHR_SetRequestHeader(" + _0x5d1423 + ", " + _0x3e211b + ")");
      }
      if (_0x5d1423 != "Cookie") {
        _0x2f064a.requestInstances[_0x3cb4a7].setRequestHeader(_0x5d1423, _0x3e211b);
      } else {
        var _0x383c4b = _0x3e211b.split(";");
        for (var _0x537c16 = 0; _0x537c16 < _0x383c4b.length; _0x537c16++) {
          document.cookie = _0x383c4b[_0x537c16];
        }
      }
    }
    function _0x4a61c6(_0x30f696, _0x22c51d, _0x58dee4, _0x2fbf15, _0x436142, _0x258cdc, _0x1c33bd) {
      if (_0x2f064a.loglevel <= 1) {
        console.log("XHR_SetResponseHandler(" + _0x30f696 + ")");
      }
      _0x2f064a.onallocbuffer = _0x1c33bd;
      var _0x31843d = _0x2f064a.requestInstances[_0x30f696];
      _0x31843d.onreadystatechange = _0x43fdbd => {
        if (_0x2f064a.loglevel <= 1) {
          console.log(_0x30f696 + " onreadystatechange(" + _0x31843d.readyState + ")");
        }
        switch (_0x31843d.readyState) {
          case XMLHttpRequest.UNSENT:
            break;
          case XMLHttpRequest.OPENED:
            break;
          case XMLHttpRequest.HEADERS_RECEIVED:
            {
              _0x2f064a.SendTextToCSharpSide(_0x30f696, _0x258cdc, "HTTP/1.1 " + _0x31843d.status + " " + _0x31843d.statusText + "\n");
              _0x2f064a.GetResponseHeaders(_0x30f696, _0x258cdc);
              break;
            }
          case XMLHttpRequest.LOADING:
            break;
          case XMLHttpRequest.DONE:
            break;
        }
      };
      _0x31843d.onloadstart = _0x14311b => {
        if (_0x2f064a.loglevel <= 1) {
          console.log(_0x30f696 + " onloadstart: " + _0x14311b);
        }
      };
      _0x31843d.onload = function _0x4685c3(_0x413bce) {
        if (_0x2f064a.loglevel <= 1) {
          console.log(_0x30f696 + " onload(" + _0x31843d.status + ", " + _0x31843d.statusText + ")");
        }
        if (_0x22c51d) {
          var _0x4ce3af = 0;
          var _0x12b0b1 = 0;
          if (_0x31843d.response) {
            var _0x37bf31 = _0x31843d.response;
            _0x4ce3af = _0x37bf31.byteLength;
            _0x2f064a.SendTextToCSharpSide(_0x30f696, _0x258cdc, "content-length:" + _0x4ce3af + "\n\n");
            _0x12b0b1 = function (_0x460a2f, _0x1dc03e) {
              return _0x1d7d72.apply(null, [_0x1c33bd, _0x460a2f, _0x1dc03e]);
            }(_0x30f696, _0x4ce3af);
            var _0x264ac1 = new Uint8Array(_0x37bf31);
            var _0x19d33b = _0x5f38b4.subarray(_0x12b0b1, _0x12b0b1 + _0x4ce3af);
            _0x19d33b.set(_0x264ac1);
          } else {
            _0x2f064a.SendTextToCSharpSide(_0x30f696, _0x258cdc, "content-length:0\n\n");
          }
          (function (_0x59d93c, _0x32a534, _0x2dd53a) {
            _0x3e4226.apply(null, [_0x22c51d, _0x59d93c, _0x32a534, _0x2dd53a]);
          })(_0x30f696, _0x12b0b1, _0x4ce3af);
        }
      };
      if (_0x58dee4) {
        _0x31843d.onerror = function _0x5ae73c(_0x203b92) {
          function _0x4c8bd8(_0x117c98) {
            var _0x4e87c5 = _0x3b9e6b(_0x117c98) + 1;
            var _0x4e21c0 = _0x14649f(_0x4e87c5);
            _0x42519a(_0x117c98, _0x5f38b4, _0x4e21c0, _0x4e87c5);
            (function (_0x175460, _0x3fd6b9) {
              _0x29540c.apply(null, [_0x58dee4, _0x175460, _0x3fd6b9]);
            })(_0x30f696, _0x4e21c0);
            _0x540f62(_0x4e21c0);
          }
          if (_0x203b92.error) {
            _0x4c8bd8(_0x203b92.error);
          } else {
            _0x4c8bd8("Unknown Error! Maybe a CORS porblem?");
          }
        };
      }
      if (_0x2fbf15) {
        _0x31843d.ontimeout = function _0x2d4af0(_0x44ccd7) {
          (function (_0x25d14c) {
            _0x4f74e2.apply(null, [_0x2fbf15, _0x25d14c]);
          })(_0x30f696);
        };
      }
      if (_0x436142) {
        _0x31843d.onabort = function _0x1208f2(_0x1fb994) {
          (function (_0x39914e) {
            _0x4f74e2.apply(null, [_0x436142, _0x39914e]);
          })(_0x30f696);
        };
      }
    }
    function _0x1dd741(_0x27099f, _0x38acbf) {
      if (_0x2f064a.loglevel <= 1) {
        console.log("XHR_SetTimeout(" + _0x27099f + ", " + _0x38acbf + ")");
      }
      _0x2f064a.requestInstances[_0x27099f].timeout = _0x38acbf;
    }
    function _0x22073e(_0x4170fa) {
      return _0x14649f(_0x4170fa + 16) + 16;
    }
    function _0x479579(_0x61718c) {
      this.excPtr = _0x61718c;
      this.ptr = _0x61718c - 16;
      this.set_type = function (_0x48a887) {
        _0x588032[this.ptr + 4 >> 2] = _0x48a887;
      };
      this.get_type = function () {
        return _0x588032[this.ptr + 4 >> 2];
      };
      this.set_destructor = function (_0x4db3c0) {
        _0x588032[this.ptr + 8 >> 2] = _0x4db3c0;
      };
      this.get_destructor = function () {
        return _0x588032[this.ptr + 8 >> 2];
      };
      this.set_refcount = function (_0x1cc53b) {
        _0x588032[this.ptr >> 2] = _0x1cc53b;
      };
      this.set_caught = function (_0x177521) {
        _0x177521 = _0x177521 ? 1 : 0;
        _0x3f8e3d[this.ptr + 12 >> 0] = _0x177521;
      };
      this.get_caught = function () {
        return _0x3f8e3d[this.ptr + 12 >> 0] != 0;
      };
      this.set_rethrown = function (_0x36a141) {
        _0x36a141 = _0x36a141 ? 1 : 0;
        _0x3f8e3d[this.ptr + 13 >> 0] = _0x36a141;
      };
      this.get_rethrown = function () {
        return _0x3f8e3d[this.ptr + 13 >> 0] != 0;
      };
      this.init = function (_0x128d4a, _0x311bac) {
        this.set_type(_0x128d4a);
        this.set_destructor(_0x311bac);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      };
      this.add_ref = function () {
        var _0x3d8852 = _0x588032[this.ptr >> 2];
        _0x588032[this.ptr >> 2] = _0x3d8852 + 1;
      };
      this.release_ref = function () {
        var _0x29193e = _0x588032[this.ptr >> 2];
        _0x588032[this.ptr >> 2] = _0x29193e - 1;
        return _0x29193e === 1;
      };
    }
    function _0x3d2802(_0xaa28ca) {
      this.free = function () {
        _0x540f62(this.ptr);
        this.ptr = 0;
      };
      this.set_base_ptr = function (_0x4b1dc4) {
        _0x588032[this.ptr >> 2] = _0x4b1dc4;
      };
      this.get_base_ptr = function () {
        return _0x588032[this.ptr >> 2];
      };
      this.set_adjusted_ptr = function (_0x4ddea5) {
        _0x588032[this.ptr + 4 >> 2] = _0x4ddea5;
      };
      this.get_adjusted_ptr_addr = function () {
        return this.ptr + 4;
      };
      this.get_adjusted_ptr = function () {
        return _0x588032[this.ptr + 4 >> 2];
      };
      this.get_exception_ptr = function () {
        var _0xc916dc = _0x2ad985(this.get_exception_info().get_type());
        if (_0xc916dc) {
          return _0x588032[this.get_base_ptr() >> 2];
        }
        var _0x3202bc = this.get_adjusted_ptr();
        if (_0x3202bc !== 0) {
          return _0x3202bc;
        }
        return this.get_base_ptr();
      };
      this.get_exception_info = function () {
        return new _0x479579(this.get_base_ptr());
      };
      if (_0xaa28ca === undefined) {
        this.ptr = _0x14649f(8);
        this.set_adjusted_ptr(0);
      } else {
        this.ptr = _0xaa28ca;
      }
    }
    var _0x4d6196 = [];
    function _0x49003f(_0x275195) {
      _0x275195.add_ref();
    }
    var _0x364bd3 = 0;
    function _0x336afc(_0x627108) {
      var _0x10e563 = new _0x3d2802(_0x627108);
      var _0x17a6b6 = _0x10e563.get_exception_info();
      if (!_0x17a6b6.get_caught()) {
        _0x17a6b6.set_caught(true);
        _0x364bd3--;
      }
      _0x17a6b6.set_rethrown(false);
      _0x4d6196.push(_0x10e563);
      _0x49003f(_0x17a6b6);
      return _0x10e563.get_exception_ptr();
    }
    var _0x398af2 = 0;
    function _0x2eb082(_0x5f0fc7) {
      return _0x540f62(new _0x479579(_0x5f0fc7).ptr);
    }
    function _0x5933c1(_0x200a3a) {
      if (_0x200a3a.release_ref() && !_0x200a3a.get_rethrown()) {
        var _0xc9da2 = _0x200a3a.get_destructor();
        if (_0xc9da2) {
          (function (_0x29a420) {
            return _0x54ca8f.apply(null, [_0xc9da2, _0x29a420]);
          })(_0x200a3a.excPtr);
        }
        _0x2eb082(_0x200a3a.excPtr);
      }
    }
    function _0x2edc20() {
      _0x5a0f93(0);
      var _0x3e5223 = _0x4d6196.pop();
      _0x5933c1(_0x3e5223.get_exception_info());
      _0x3e5223.free();
      _0x398af2 = 0;
    }
    function _0x111804(_0x38b805) {
      var _0x5aad4c = new _0x3d2802(_0x38b805);
      var _0x46b742 = _0x5aad4c.get_base_ptr();
      if (!_0x398af2) {
        _0x398af2 = _0x46b742;
      }
      _0x5aad4c.free();
      throw _0x46b742;
    }
    function _0x4c4430() {
      var _0x5a45fa = _0x398af2;
      if (!_0x5a45fa) {
        _0x473317(0);
        return 0;
      }
      var _0x3e2cb9 = new _0x479579(_0x5a45fa);
      var _0x3c0569 = _0x3e2cb9.get_type();
      var _0x28722c = new _0x3d2802();
      _0x28722c.set_base_ptr(_0x5a45fa);
      _0x28722c.set_adjusted_ptr(_0x5a45fa);
      if (!_0x3c0569) {
        _0x473317(0);
        return _0x28722c.ptr | 0;
      }
      var _0x4a6f8d = Array.prototype.slice.call(arguments);
      for (var _0x1a701b = 0; _0x1a701b < _0x4a6f8d.length; _0x1a701b++) {
        var _0x48b93c = _0x4a6f8d[_0x1a701b];
        if (_0x48b93c === 0 || _0x48b93c === _0x3c0569) {
          break;
        }
        if (_0x4cc899(_0x48b93c, _0x3c0569, _0x28722c.get_adjusted_ptr_addr())) {
          _0x473317(_0x48b93c);
          return _0x28722c.ptr | 0;
        }
      }
      _0x473317(_0x3c0569);
      return _0x28722c.ptr | 0;
    }
    function _0x319e45() {
      var _0x20c7ec = _0x398af2;
      if (!_0x20c7ec) {
        _0x473317(0);
        return 0;
      }
      var _0x24f5c8 = new _0x479579(_0x20c7ec);
      var _0x5d0065 = _0x24f5c8.get_type();
      var _0x40862f = new _0x3d2802();
      _0x40862f.set_base_ptr(_0x20c7ec);
      _0x40862f.set_adjusted_ptr(_0x20c7ec);
      if (!_0x5d0065) {
        _0x473317(0);
        return _0x40862f.ptr | 0;
      }
      var _0x476cc5 = Array.prototype.slice.call(arguments);
      for (var _0x277fd2 = 0; _0x277fd2 < _0x476cc5.length; _0x277fd2++) {
        var _0x89658b = _0x476cc5[_0x277fd2];
        if (_0x89658b === 0 || _0x89658b === _0x5d0065) {
          break;
        }
        if (_0x4cc899(_0x89658b, _0x5d0065, _0x40862f.get_adjusted_ptr_addr())) {
          _0x473317(_0x89658b);
          return _0x40862f.ptr | 0;
        }
      }
      _0x473317(_0x5d0065);
      return _0x40862f.ptr | 0;
    }
    function _0x18e2bf() {
      var _0x5b3f0d = _0x398af2;
      if (!_0x5b3f0d) {
        _0x473317(0);
        return 0;
      }
      var _0x11f254 = new _0x479579(_0x5b3f0d);
      var _0x143918 = _0x11f254.get_type();
      var _0x560499 = new _0x3d2802();
      _0x560499.set_base_ptr(_0x5b3f0d);
      _0x560499.set_adjusted_ptr(_0x5b3f0d);
      if (!_0x143918) {
        _0x473317(0);
        return _0x560499.ptr | 0;
      }
      var _0x5bc82c = Array.prototype.slice.call(arguments);
      for (var _0x4d727a = 0; _0x4d727a < _0x5bc82c.length; _0x4d727a++) {
        var _0x49825f = _0x5bc82c[_0x4d727a];
        if (_0x49825f === 0 || _0x49825f === _0x143918) {
          break;
        }
        if (_0x4cc899(_0x49825f, _0x143918, _0x560499.get_adjusted_ptr_addr())) {
          _0x473317(_0x49825f);
          return _0x560499.ptr | 0;
        }
      }
      _0x473317(_0x143918);
      return _0x560499.ptr | 0;
    }
    function _0x5bcae3() {
      var _0x9d1f45 = _0x4d6196.pop();
      if (!_0x9d1f45) {
        _0xd8a7a0("no exception to throw");
      }
      var _0x3f89a0 = _0x9d1f45.get_exception_info();
      var _0x4e3497 = _0x9d1f45.get_base_ptr();
      if (!_0x3f89a0.get_rethrown()) {
        _0x4d6196.push(_0x9d1f45);
        _0x3f89a0.set_rethrown(true);
        _0x3f89a0.set_caught(false);
        _0x364bd3++;
      } else {
        _0x9d1f45.free();
      }
      _0x398af2 = _0x4e3497;
      throw _0x4e3497;
    }
    function _0x13fb20(_0x58e6d2, _0x35df6e, _0x5c023f) {
      var _0x43823d = new _0x479579(_0x58e6d2);
      _0x43823d.init(_0x35df6e, _0x5c023f);
      _0x398af2 = _0x58e6d2;
      _0x364bd3++;
      throw _0x58e6d2;
    }
    var _0x59b6ba = {
      splitPath: function (_0x2765ad) {
        var _0x6b0794 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return _0x6b0794.exec(_0x2765ad).slice(1);
      },
      normalizeArray: function (_0x53c919, _0x56ae07) {
        var _0x150b4a = 0;
        for (var _0x4f71ac = _0x53c919.length - 1; _0x4f71ac >= 0; _0x4f71ac--) {
          var _0x5e1c58 = _0x53c919[_0x4f71ac];
          if (_0x5e1c58 === ".") {
            _0x53c919.splice(_0x4f71ac, 1);
          } else if (_0x5e1c58 === "..") {
            _0x53c919.splice(_0x4f71ac, 1);
            _0x150b4a++;
          } else if (_0x150b4a) {
            _0x53c919.splice(_0x4f71ac, 1);
            _0x150b4a--;
          }
        }
        if (_0x56ae07) {
          for (; _0x150b4a; _0x150b4a--) {
            _0x53c919.unshift("..");
          }
        }
        return _0x53c919;
      },
      normalize: function (_0x3d9d77) {
        var _0x4bd126 = _0x3d9d77.charAt(0) === "/";
        var _0xe3ec1b = _0x3d9d77.substr(-1) === "/";
        _0x3d9d77 = _0x59b6ba.normalizeArray(_0x3d9d77.split("/").filter(function (_0x42300f) {
          return !!_0x42300f;
        }), !_0x4bd126).join("/");
        if (!_0x3d9d77 && !_0x4bd126) {
          _0x3d9d77 = ".";
        }
        if (_0x3d9d77 && _0xe3ec1b) {
          _0x3d9d77 += "/";
        }
        return (_0x4bd126 ? "/" : "") + _0x3d9d77;
      },
      dirname: function (_0x48d7cd) {
        var _0x1de1bc = _0x59b6ba.splitPath(_0x48d7cd);
        var _0x1f2446 = _0x1de1bc[0];
        var _0x551304 = _0x1de1bc[1];
        if (!_0x1f2446 && !_0x551304) {
          return ".";
        }
        _0x551304 &&= _0x551304.substr(0, _0x551304.length - 1);
        return _0x1f2446 + _0x551304;
      },
      basename: function (_0xed1342) {
        if (_0xed1342 === "/") {
          return "/";
        }
        _0xed1342 = _0x59b6ba.normalize(_0xed1342);
        _0xed1342 = _0xed1342.replace(/\/$/, "");
        var _0x1f3948 = _0xed1342.lastIndexOf("/");
        if (_0x1f3948 === -1) {
          return _0xed1342;
        }
        return _0xed1342.substr(_0x1f3948 + 1);
      },
      extname: function (_0x1c064d) {
        return _0x59b6ba.splitPath(_0x1c064d)[3];
      },
      join: function () {
        var _0x5d2aa3 = Array.prototype.slice.call(arguments, 0);
        return _0x59b6ba.normalize(_0x5d2aa3.join("/"));
      },
      join2: function (_0x28a123, _0x50608c) {
        return _0x59b6ba.normalize(_0x28a123 + "/" + _0x50608c);
      }
    };
    function _0x58afd1() {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
        var _0x1340d2 = new Uint8Array(1);
        return function () {
          crypto.getRandomValues(_0x1340d2);
          return _0x1340d2[0];
        };
      } else if (_0x2d17f7) {
        try {
          var _0x16f2da = require("crypto");
          return function () {
            return _0x16f2da.randomBytes(1)[0];
          };
        } catch (_0x84ba4c) {}
      }
      return function () {
        _0xd8a7a0("randomDevice");
      };
    }
    var _0x1c9931 = {
      resolve: function () {
        var _0x321d29 = "";
        var _0x301bbb = false;
        for (var _0xc3a85 = arguments.length - 1; _0xc3a85 >= -1 && !_0x301bbb; _0xc3a85--) {
          var _0x32c1a4 = _0xc3a85 >= 0 ? arguments[_0xc3a85] : _0x170eaf.cwd();
          if (typeof _0x32c1a4 != "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
          } else if (!_0x32c1a4) {
            return "";
          }
          _0x321d29 = _0x32c1a4 + "/" + _0x321d29;
          _0x301bbb = _0x32c1a4.charAt(0) === "/";
        }
        _0x321d29 = _0x59b6ba.normalizeArray(_0x321d29.split("/").filter(function (_0x49394e) {
          return !!_0x49394e;
        }), !_0x301bbb).join("/");
        return (_0x301bbb ? "/" : "") + _0x321d29 || ".";
      },
      relative: function (_0x43da59, _0x107f14) {
        _0x43da59 = _0x1c9931.resolve(_0x43da59).substr(1);
        _0x107f14 = _0x1c9931.resolve(_0x107f14).substr(1);
        function _0x2eae1d(_0x408bdb) {
          var _0x20a233 = 0;
          for (; _0x20a233 < _0x408bdb.length; _0x20a233++) {
            if (_0x408bdb[_0x20a233] !== "") {
              break;
            }
          }
          var _0x1ef154 = _0x408bdb.length - 1;
          for (; _0x1ef154 >= 0; _0x1ef154--) {
            if (_0x408bdb[_0x1ef154] !== "") {
              break;
            }
          }
          if (_0x20a233 > _0x1ef154) {
            return [];
          }
          return _0x408bdb.slice(_0x20a233, _0x1ef154 - _0x20a233 + 1);
        }
        var _0x42908d = _0x2eae1d(_0x43da59.split("/"));
        var _0x23adbf = _0x2eae1d(_0x107f14.split("/"));
        var _0x23ae7c = Math.min(_0x42908d.length, _0x23adbf.length);
        var _0x33b9d0 = _0x23ae7c;
        for (var _0x4f3a2b = 0; _0x4f3a2b < _0x23ae7c; _0x4f3a2b++) {
          if (_0x42908d[_0x4f3a2b] !== _0x23adbf[_0x4f3a2b]) {
            _0x33b9d0 = _0x4f3a2b;
            break;
          }
        }
        var _0xfa74f0 = [];
        for (var _0x4f3a2b = _0x33b9d0; _0x4f3a2b < _0x42908d.length; _0x4f3a2b++) {
          _0xfa74f0.push("..");
        }
        _0xfa74f0 = _0xfa74f0.concat(_0x23adbf.slice(_0x33b9d0));
        return _0xfa74f0.join("/");
      }
    };
    var _0x575e98 = {
      ttys: [],
      init: function () {},
      shutdown: function () {},
      register: function (_0x1cc6e4, _0x1000c2) {
        _0x575e98.ttys[_0x1cc6e4] = {
          input: [],
          output: [],
          ops: _0x1000c2
        };
        _0x170eaf.registerDevice(_0x1cc6e4, _0x575e98.stream_ops);
      },
      stream_ops: {
        open: function (_0x51c21e) {
          var _0x18c9ef = _0x575e98.ttys[_0x51c21e.node.rdev];
          if (!_0x18c9ef) {
            throw new _0x170eaf.ErrnoError(43);
          }
          _0x51c21e.tty = _0x18c9ef;
          _0x51c21e.seekable = false;
        },
        close: function (_0x32b7db) {
          _0x32b7db.tty.ops.flush(_0x32b7db.tty);
        },
        flush: function (_0x18ac3f) {
          _0x18ac3f.tty.ops.flush(_0x18ac3f.tty);
        },
        read: function (_0x3e54eb, _0x4eaa24, _0x3ef72c, _0x2c8cbd, _0x485edd) {
          if (!_0x3e54eb.tty || !_0x3e54eb.tty.ops.get_char) {
            throw new _0x170eaf.ErrnoError(60);
          }
          var _0x3ec6ae = 0;
          for (var _0xe728c4 = 0; _0xe728c4 < _0x2c8cbd; _0xe728c4++) {
            var _0x1c7d41;
            try {
              _0x1c7d41 = _0x3e54eb.tty.ops.get_char(_0x3e54eb.tty);
            } catch (_0x2d04e3) {
              throw new _0x170eaf.ErrnoError(29);
            }
            if (_0x1c7d41 === undefined && _0x3ec6ae === 0) {
              throw new _0x170eaf.ErrnoError(6);
            }
            if (_0x1c7d41 === null || _0x1c7d41 === undefined) {
              break;
            }
            _0x3ec6ae++;
            _0x4eaa24[_0x3ef72c + _0xe728c4] = _0x1c7d41;
          }
          if (_0x3ec6ae) {
            _0x3e54eb.node.timestamp = Date.now();
          }
          return _0x3ec6ae;
        },
        write: function (_0xee2e01, _0x38965d, _0x51d987, _0xa9fbec, _0x5ed558) {
          if (!_0xee2e01.tty || !_0xee2e01.tty.ops.put_char) {
            throw new _0x170eaf.ErrnoError(60);
          }
          try {
            for (var _0xda9a1d = 0; _0xda9a1d < _0xa9fbec; _0xda9a1d++) {
              _0xee2e01.tty.ops.put_char(_0xee2e01.tty, _0x38965d[_0x51d987 + _0xda9a1d]);
            }
          } catch (_0xfda65) {
            throw new _0x170eaf.ErrnoError(29);
          }
          if (_0xa9fbec) {
            _0xee2e01.node.timestamp = Date.now();
          }
          return _0xda9a1d;
        }
      },
      default_tty_ops: {
        get_char: function (_0x18a775) {
          if (!_0x18a775.input.length) {
            var _0x41a30c = null;
            if (_0x2d17f7) {
              var _0x208d07 = 256;
              var _0x18d15e = Buffer.alloc(_0x208d07);
              var _0x390337 = 0;
              try {
                _0x390337 = _0xe581ac.readSync(process.stdin.fd, _0x18d15e, 0, _0x208d07, -1);
              } catch (_0x175700) {
                if (_0x175700.toString().includes("EOF")) {
                  _0x390337 = 0;
                } else {
                  throw _0x175700;
                }
              }
              if (_0x390337 > 0) {
                _0x41a30c = _0x18d15e.slice(0, _0x390337).toString("utf-8");
              } else {
                _0x41a30c = null;
              }
            } else if (typeof window != "undefined" && typeof window.prompt == "function") {
              _0x41a30c = window.prompt("Input: ");
              if (_0x41a30c !== null) {
                _0x41a30c += "\n";
              }
            } else if (typeof readline == "function") {
              _0x41a30c = readline();
              if (_0x41a30c !== null) {
                _0x41a30c += "\n";
              }
            }
            if (!_0x41a30c) {
              return null;
            }
            _0x18a775.input = _0x28f5f4(_0x41a30c, true);
          }
          return _0x18a775.input.shift();
        },
        put_char: function (_0x46656c, _0x15e22d) {
          if (_0x15e22d === null || _0x15e22d === 10) {
            _0x29c873(_0x519ea2(_0x46656c.output, 0));
            _0x46656c.output = [];
          } else if (_0x15e22d != 0) {
            _0x46656c.output.push(_0x15e22d);
          }
        },
        flush: function (_0x2e2cfb) {
          if (_0x2e2cfb.output && _0x2e2cfb.output.length > 0) {
            _0x29c873(_0x519ea2(_0x2e2cfb.output, 0));
            _0x2e2cfb.output = [];
          }
        }
      },
      default_tty1_ops: {
        put_char: function (_0x6b9c86, _0x2b6080) {
          if (_0x2b6080 === null || _0x2b6080 === 10) {
            _0x33d817(_0x519ea2(_0x6b9c86.output, 0));
            _0x6b9c86.output = [];
          } else if (_0x2b6080 != 0) {
            _0x6b9c86.output.push(_0x2b6080);
          }
        },
        flush: function (_0x29f91f) {
          if (_0x29f91f.output && _0x29f91f.output.length > 0) {
            _0x33d817(_0x519ea2(_0x29f91f.output, 0));
            _0x29f91f.output = [];
          }
        }
      }
    };
    function _0xfe2cf8(_0x1f95d8, _0x3fa96c) {
      _0x5f38b4.fill(0, _0x1f95d8, _0x1f95d8 + _0x3fa96c);
    }
    function _0x4bda8e(_0x50f865, _0x2e8fab) {
      return Math.ceil(_0x50f865 / _0x2e8fab) * _0x2e8fab;
    }
    function _0x55c30c(_0x18718c) {
      _0x18718c = _0x4bda8e(_0x18718c, 65536);
      var _0x43d243 = _0x94ab9c(65536, _0x18718c);
      if (!_0x43d243) {
        return 0;
      }
      _0xfe2cf8(_0x43d243, _0x18718c);
      return _0x43d243;
    }
    var _0x36df50 = {
      ops_table: null,
      mount: function (_0x241b9b) {
        return _0x36df50.createNode(null, "/", 16895, 0);
      },
      createNode: function (_0x10e56e, _0x170075, _0x3fda55, _0x119672) {
        if (_0x170eaf.isBlkdev(_0x3fda55) || _0x170eaf.isFIFO(_0x3fda55)) {
          throw new _0x170eaf.ErrnoError(63);
        }
        if (!_0x36df50.ops_table) {
          _0x36df50.ops_table = {
            dir: {
              node: {
                getattr: _0x36df50.node_ops.getattr,
                setattr: _0x36df50.node_ops.setattr,
                lookup: _0x36df50.node_ops.lookup,
                mknod: _0x36df50.node_ops.mknod,
                rename: _0x36df50.node_ops.rename,
                unlink: _0x36df50.node_ops.unlink,
                rmdir: _0x36df50.node_ops.rmdir,
                readdir: _0x36df50.node_ops.readdir,
                symlink: _0x36df50.node_ops.symlink
              },
              stream: {
                llseek: _0x36df50.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: _0x36df50.node_ops.getattr,
                setattr: _0x36df50.node_ops.setattr
              },
              stream: {
                llseek: _0x36df50.stream_ops.llseek,
                read: _0x36df50.stream_ops.read,
                write: _0x36df50.stream_ops.write,
                allocate: _0x36df50.stream_ops.allocate,
                mmap: _0x36df50.stream_ops.mmap,
                msync: _0x36df50.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: _0x36df50.node_ops.getattr,
                setattr: _0x36df50.node_ops.setattr,
                readlink: _0x36df50.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: _0x36df50.node_ops.getattr,
                setattr: _0x36df50.node_ops.setattr
              },
              stream: _0x170eaf.chrdev_stream_ops
            }
          };
        }
        var _0x433602 = _0x170eaf.createNode(_0x10e56e, _0x170075, _0x3fda55, _0x119672);
        if (_0x170eaf.isDir(_0x433602.mode)) {
          _0x433602.node_ops = _0x36df50.ops_table.dir.node;
          _0x433602.stream_ops = _0x36df50.ops_table.dir.stream;
          _0x433602.contents = {};
        } else if (_0x170eaf.isFile(_0x433602.mode)) {
          _0x433602.node_ops = _0x36df50.ops_table.file.node;
          _0x433602.stream_ops = _0x36df50.ops_table.file.stream;
          _0x433602.usedBytes = 0;
          _0x433602.contents = null;
        } else if (_0x170eaf.isLink(_0x433602.mode)) {
          _0x433602.node_ops = _0x36df50.ops_table.link.node;
          _0x433602.stream_ops = _0x36df50.ops_table.link.stream;
        } else if (_0x170eaf.isChrdev(_0x433602.mode)) {
          _0x433602.node_ops = _0x36df50.ops_table.chrdev.node;
          _0x433602.stream_ops = _0x36df50.ops_table.chrdev.stream;
        }
        _0x433602.timestamp = Date.now();
        if (_0x10e56e) {
          _0x10e56e.contents[_0x170075] = _0x433602;
          _0x10e56e.timestamp = _0x433602.timestamp;
        }
        return _0x433602;
      },
      getFileDataAsTypedArray: function (_0x590709) {
        if (!_0x590709.contents) {
          return new Uint8Array(0);
        }
        if (_0x590709.contents.subarray) {
          return _0x590709.contents.subarray(0, _0x590709.usedBytes);
        }
        return new Uint8Array(_0x590709.contents);
      },
      expandFileStorage: function (_0x15933b, _0xe20c0f) {
        var _0x2060b2 = _0x15933b.contents ? _0x15933b.contents.length : 0;
        if (_0x2060b2 >= _0xe20c0f) {
          return;
        }
        var _0x5e0231 = 1048576;
        _0xe20c0f = Math.max(_0xe20c0f, _0x2060b2 * (_0x2060b2 < _0x5e0231 ? 2 : 1.125) >>> 0);
        if (_0x2060b2 != 0) {
          _0xe20c0f = Math.max(_0xe20c0f, 256);
        }
        var _0x36a395 = _0x15933b.contents;
        _0x15933b.contents = new Uint8Array(_0xe20c0f);
        if (_0x15933b.usedBytes > 0) {
          _0x15933b.contents.set(_0x36a395.subarray(0, _0x15933b.usedBytes), 0);
        }
      },
      resizeFileStorage: function (_0x36b100, _0x349111) {
        if (_0x36b100.usedBytes == _0x349111) {
          return;
        }
        if (_0x349111 == 0) {
          _0x36b100.contents = null;
          _0x36b100.usedBytes = 0;
        } else {
          var _0x41e09c = _0x36b100.contents;
          _0x36b100.contents = new Uint8Array(_0x349111);
          if (_0x41e09c) {
            _0x36b100.contents.set(_0x41e09c.subarray(0, Math.min(_0x349111, _0x36b100.usedBytes)));
          }
          _0x36b100.usedBytes = _0x349111;
        }
      },
      node_ops: {
        getattr: function (_0x5d4906) {
          var _0x12a675 = {};
          _0x12a675.dev = _0x170eaf.isChrdev(_0x5d4906.mode) ? _0x5d4906.id : 1;
          _0x12a675.ino = _0x5d4906.id;
          _0x12a675.mode = _0x5d4906.mode;
          _0x12a675.nlink = 1;
          _0x12a675.uid = 0;
          _0x12a675.gid = 0;
          _0x12a675.rdev = _0x5d4906.rdev;
          if (_0x170eaf.isDir(_0x5d4906.mode)) {
            _0x12a675.size = 4096;
          } else if (_0x170eaf.isFile(_0x5d4906.mode)) {
            _0x12a675.size = _0x5d4906.usedBytes;
          } else if (_0x170eaf.isLink(_0x5d4906.mode)) {
            _0x12a675.size = _0x5d4906.link.length;
          } else {
            _0x12a675.size = 0;
          }
          _0x12a675.atime = new Date(_0x5d4906.timestamp);
          _0x12a675.mtime = new Date(_0x5d4906.timestamp);
          _0x12a675.ctime = new Date(_0x5d4906.timestamp);
          _0x12a675.blksize = 4096;
          _0x12a675.blocks = Math.ceil(_0x12a675.size / _0x12a675.blksize);
          return _0x12a675;
        },
        setattr: function (_0x577011, _0x556c31) {
          if (_0x556c31.mode !== undefined) {
            _0x577011.mode = _0x556c31.mode;
          }
          if (_0x556c31.timestamp !== undefined) {
            _0x577011.timestamp = _0x556c31.timestamp;
          }
          if (_0x556c31.size !== undefined) {
            _0x36df50.resizeFileStorage(_0x577011, _0x556c31.size);
          }
        },
        lookup: function (_0x2cc44f, _0x101a27) {
          throw _0x170eaf.genericErrors[44];
        },
        mknod: function (_0x5982a2, _0x29ae0e, _0x1718b5, _0x4c68ed) {
          return _0x36df50.createNode(_0x5982a2, _0x29ae0e, _0x1718b5, _0x4c68ed);
        },
        rename: function (_0x50f16b, _0xdf5ab4, _0x1b6bef) {
          if (_0x170eaf.isDir(_0x50f16b.mode)) {
            var _0x54b55a;
            try {
              _0x54b55a = _0x170eaf.lookupNode(_0xdf5ab4, _0x1b6bef);
            } catch (_0x51394b) {}
            if (_0x54b55a) {
              for (var _0x5db451 in _0x54b55a.contents) {
                throw new _0x170eaf.ErrnoError(55);
              }
            }
          }
          delete _0x50f16b.parent.contents[_0x50f16b.name];
          _0x50f16b.parent.timestamp = Date.now();
          _0x50f16b.name = _0x1b6bef;
          _0xdf5ab4.contents[_0x1b6bef] = _0x50f16b;
          _0xdf5ab4.timestamp = _0x50f16b.parent.timestamp;
          _0x50f16b.parent = _0xdf5ab4;
        },
        unlink: function (_0x2daff9, _0x5f23e0) {
          delete _0x2daff9.contents[_0x5f23e0];
          _0x2daff9.timestamp = Date.now();
        },
        rmdir: function (_0x1b820f, _0x547d0e) {
          var _0x1957ae = _0x170eaf.lookupNode(_0x1b820f, _0x547d0e);
          for (var _0x483a1a in _0x1957ae.contents) {
            throw new _0x170eaf.ErrnoError(55);
          }
          delete _0x1b820f.contents[_0x547d0e];
          _0x1b820f.timestamp = Date.now();
        },
        readdir: function (_0x4d6e4a) {
          var _0x455f25 = [".", ".."];
          for (var _0x2f2fc8 in _0x4d6e4a.contents) {
            if (!_0x4d6e4a.contents.hasOwnProperty(_0x2f2fc8)) {
              continue;
            }
            _0x455f25.push(_0x2f2fc8);
          }
          return _0x455f25;
        },
        symlink: function (_0xd12a63, _0x420dc5, _0x1dcfde) {
          var _0xf353bf = _0x36df50.createNode(_0xd12a63, _0x420dc5, 41471, 0);
          _0xf353bf.link = _0x1dcfde;
          return _0xf353bf;
        },
        readlink: function (_0x2b58fc) {
          if (!_0x170eaf.isLink(_0x2b58fc.mode)) {
            throw new _0x170eaf.ErrnoError(28);
          }
          return _0x2b58fc.link;
        }
      },
      stream_ops: {
        read: function (_0x3c9904, _0x3c6f74, _0x176dff, _0x267b39, _0x63740c) {
          var _0x3ed26a = _0x3c9904.node.contents;
          if (_0x63740c >= _0x3c9904.node.usedBytes) {
            return 0;
          }
          var _0x4e53b2 = Math.min(_0x3c9904.node.usedBytes - _0x63740c, _0x267b39);
          if (_0x4e53b2 > 8 && _0x3ed26a.subarray) {
            _0x3c6f74.set(_0x3ed26a.subarray(_0x63740c, _0x63740c + _0x4e53b2), _0x176dff);
          } else {
            for (var _0x40c303 = 0; _0x40c303 < _0x4e53b2; _0x40c303++) {
              _0x3c6f74[_0x176dff + _0x40c303] = _0x3ed26a[_0x63740c + _0x40c303];
            }
          }
          return _0x4e53b2;
        },
        write: function (_0x5780c3, _0x51e14c, _0x2b1328, _0x2d4606, _0xfa0e17, _0x4affaf) {
          if (_0x51e14c.buffer === _0x3f8e3d.buffer) {
            _0x4affaf = false;
          }
          if (!_0x2d4606) {
            return 0;
          }
          var _0x297788 = _0x5780c3.node;
          _0x297788.timestamp = Date.now();
          if (_0x51e14c.subarray && (!_0x297788.contents || _0x297788.contents.subarray)) {
            if (_0x4affaf) {
              _0x297788.contents = _0x51e14c.subarray(_0x2b1328, _0x2b1328 + _0x2d4606);
              _0x297788.usedBytes = _0x2d4606;
              return _0x2d4606;
            } else if (_0x297788.usedBytes === 0 && _0xfa0e17 === 0) {
              _0x297788.contents = _0x51e14c.slice(_0x2b1328, _0x2b1328 + _0x2d4606);
              _0x297788.usedBytes = _0x2d4606;
              return _0x2d4606;
            } else if (_0xfa0e17 + _0x2d4606 <= _0x297788.usedBytes) {
              _0x297788.contents.set(_0x51e14c.subarray(_0x2b1328, _0x2b1328 + _0x2d4606), _0xfa0e17);
              return _0x2d4606;
            }
          }
          _0x36df50.expandFileStorage(_0x297788, _0xfa0e17 + _0x2d4606);
          if (_0x297788.contents.subarray && _0x51e14c.subarray) {
            _0x297788.contents.set(_0x51e14c.subarray(_0x2b1328, _0x2b1328 + _0x2d4606), _0xfa0e17);
          } else {
            for (var _0x2abca3 = 0; _0x2abca3 < _0x2d4606; _0x2abca3++) {
              _0x297788.contents[_0xfa0e17 + _0x2abca3] = _0x51e14c[_0x2b1328 + _0x2abca3];
            }
          }
          _0x297788.usedBytes = Math.max(_0x297788.usedBytes, _0xfa0e17 + _0x2d4606);
          return _0x2d4606;
        },
        llseek: function (_0x421c19, _0x4794a7, _0x1b2872) {
          var _0x2224cd = _0x4794a7;
          if (_0x1b2872 === 1) {
            _0x2224cd += _0x421c19.position;
          } else if (_0x1b2872 === 2) {
            if (_0x170eaf.isFile(_0x421c19.node.mode)) {
              _0x2224cd += _0x421c19.node.usedBytes;
            }
          }
          if (_0x2224cd < 0) {
            throw new _0x170eaf.ErrnoError(28);
          }
          return _0x2224cd;
        },
        allocate: function (_0x3c67c8, _0x4cd3ea, _0x1e0283) {
          _0x36df50.expandFileStorage(_0x3c67c8.node, _0x4cd3ea + _0x1e0283);
          _0x3c67c8.node.usedBytes = Math.max(_0x3c67c8.node.usedBytes, _0x4cd3ea + _0x1e0283);
        },
        mmap: function (_0x57decd, _0xb67c83, _0x5ea591, _0x2828da, _0x35eece, _0x5413b4) {
          if (_0xb67c83 !== 0) {
            throw new _0x170eaf.ErrnoError(28);
          }
          if (!_0x170eaf.isFile(_0x57decd.node.mode)) {
            throw new _0x170eaf.ErrnoError(43);
          }
          var _0x28c99f;
          var _0x46b889;
          var _0x217dd0 = _0x57decd.node.contents;
          if (!(_0x5413b4 & 2) && _0x217dd0.buffer === _0x518d3e) {
            _0x46b889 = false;
            _0x28c99f = _0x217dd0.byteOffset;
          } else {
            if (_0x2828da > 0 || _0x2828da + _0x5ea591 < _0x217dd0.length) {
              if (_0x217dd0.subarray) {
                _0x217dd0 = _0x217dd0.subarray(_0x2828da, _0x2828da + _0x5ea591);
              } else {
                _0x217dd0 = Array.prototype.slice.call(_0x217dd0, _0x2828da, _0x2828da + _0x5ea591);
              }
            }
            _0x46b889 = true;
            _0x28c99f = _0x55c30c(_0x5ea591);
            if (!_0x28c99f) {
              throw new _0x170eaf.ErrnoError(48);
            }
            _0x3f8e3d.set(_0x217dd0, _0x28c99f);
          }
          return {
            ptr: _0x28c99f,
            allocated: _0x46b889
          };
        },
        msync: function (_0x4d9c7a, _0x3e1168, _0x211a0b, _0x318411, _0x556c96) {
          if (!_0x170eaf.isFile(_0x4d9c7a.node.mode)) {
            throw new _0x170eaf.ErrnoError(43);
          }
          if (_0x556c96 & 2) {
            return 0;
          }
          var _0x443530 = _0x36df50.stream_ops.write(_0x4d9c7a, _0x3e1168, 0, _0x318411, _0x211a0b, false);
          return 0;
        }
      }
    };
    function _0x2e8b46(_0xb88789, _0x7c6215, _0x208d39, _0x3d6877) {
      var _0x4f2edc = !_0x3d6877 ? _0x1000c1("al " + _0xb88789) : "";
      _0xf48a77(_0xb88789, function (_0x341584) {
        _0x39d8f2(_0x341584, "Loading data file \"" + _0xb88789 + "\" failed (no arrayBuffer).");
        _0x7c6215(new Uint8Array(_0x341584));
        if (_0x4f2edc) {
          _0x38c345(_0x4f2edc);
        }
      }, function (_0x5c19f3) {
        if (_0x208d39) {
          _0x208d39();
        } else {
          throw "Loading data file \"" + _0xb88789 + "\" failed.";
        }
      });
      if (_0x4f2edc) {
        _0x2a6f7b(_0x4f2edc);
      }
    }
    var _0x4082a3 = {
      dbs: {},
      indexedDB: () => {
        if (typeof indexedDB != "undefined") {
          return indexedDB;
        }
        var _0xceb9e1 = null;
        if (typeof window == "object") {
          _0xceb9e1 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        }
        _0x39d8f2(_0xceb9e1, "IDBFS used, but indexedDB not supported");
        return _0xceb9e1;
      },
      DB_VERSION: 21,
      DB_STORE_NAME: "FILE_DATA",
      mount: function (_0x7863d4) {
        return _0x36df50.mount.apply(null, arguments);
      },
      syncfs: (_0x320c1a, _0x2d58ec, _0x38a125) => {
        _0x4082a3.getLocalSet(_0x320c1a, (_0x9cbdab, _0x205aeb) => {
          if (_0x9cbdab) {
            return _0x38a125(_0x9cbdab);
          }
          _0x4082a3.getRemoteSet(_0x320c1a, (_0x33327d, _0x1506b9) => {
            if (_0x33327d) {
              return _0x38a125(_0x33327d);
            }
            var _0x181432 = _0x2d58ec ? _0x1506b9 : _0x205aeb;
            var _0x59d646 = _0x2d58ec ? _0x205aeb : _0x1506b9;
            _0x4082a3.reconcile(_0x181432, _0x59d646, _0x38a125);
          });
        });
      },
      getDB: (_0x362d66, _0x362067) => {
        var _0x178529 = _0x4082a3.dbs[_0x362d66];
        if (_0x178529) {
          return _0x362067(null, _0x178529);
        }
        var _0xfd58e7;
        try {
          _0xfd58e7 = _0x4082a3.indexedDB().open(_0x362d66, _0x4082a3.DB_VERSION);
        } catch (_0x2ff3c4) {
          return _0x362067(_0x2ff3c4);
        }
        if (!_0xfd58e7) {
          return _0x362067("Unable to connect to IndexedDB");
        }
        _0xfd58e7.onupgradeneeded = _0xc28f88 => {
          var _0x2e1cc6 = _0xc28f88.target.result;
          var _0x2235dd = _0xc28f88.target.transaction;
          var _0x594e77;
          if (_0x2e1cc6.objectStoreNames.contains(_0x4082a3.DB_STORE_NAME)) {
            _0x594e77 = _0x2235dd.objectStore(_0x4082a3.DB_STORE_NAME);
          } else {
            _0x594e77 = _0x2e1cc6.createObjectStore(_0x4082a3.DB_STORE_NAME);
          }
          if (!_0x594e77.indexNames.contains("timestamp")) {
            _0x594e77.createIndex("timestamp", "timestamp", {
              unique: false
            });
          }
        };
        _0xfd58e7.onsuccess = () => {
          _0x178529 = _0xfd58e7.result;
          _0x4082a3.dbs[_0x362d66] = _0x178529;
          _0x362067(null, _0x178529);
        };
        _0xfd58e7.onerror = _0xe2e02 => {
          _0x362067(this.error);
          _0xe2e02.preventDefault();
        };
      },
      getLocalSet: (_0x3791e4, _0x154eac) => {
        var _0x2d24b6 = {};
        function _0x4b50f9(_0x231bcc) {
          return _0x231bcc !== "." && _0x231bcc !== "..";
        }
        function _0x2b012c(_0x2d6631) {
          return _0x1f6586 => {
            return _0x59b6ba.join2(_0x2d6631, _0x1f6586);
          };
        }
        var _0x3d1ebc = _0x170eaf.readdir(_0x3791e4.mountpoint).filter(_0x4b50f9).map(_0x2b012c(_0x3791e4.mountpoint));
        while (_0x3d1ebc.length) {
          var _0x697211 = _0x3d1ebc.pop();
          var _0x335796;
          try {
            _0x335796 = _0x170eaf.stat(_0x697211);
          } catch (_0x554648) {
            return _0x154eac(_0x554648);
          }
          if (_0x170eaf.isDir(_0x335796.mode)) {
            _0x3d1ebc.push.apply(_0x3d1ebc, _0x170eaf.readdir(_0x697211).filter(_0x4b50f9).map(_0x2b012c(_0x697211)));
          }
          _0x2d24b6[_0x697211] = {
            timestamp: _0x335796.mtime
          };
        }
        return _0x154eac(null, {
          type: "local",
          entries: _0x2d24b6
        });
      },
      getRemoteSet: (_0x365122, _0x132028) => {
        var _0x20099e = {};
        _0x4082a3.getDB(_0x365122.mountpoint, (_0x14b214, _0x40d27a) => {
          if (_0x14b214) {
            return _0x132028(_0x14b214);
          }
          try {
            var _0x18e316 = _0x40d27a.transaction([_0x4082a3.DB_STORE_NAME], "readonly");
            _0x18e316.onerror = _0xbefec5 => {
              _0x132028(this.error);
              _0xbefec5.preventDefault();
            };
            var _0x3c137e = _0x18e316.objectStore(_0x4082a3.DB_STORE_NAME);
            var _0x853c7b = _0x3c137e.index("timestamp");
            _0x853c7b.openKeyCursor().onsuccess = _0x40253b => {
              var _0x49c376 = _0x40253b.target.result;
              if (!_0x49c376) {
                return _0x132028(null, {
                  type: "remote",
                  db: _0x40d27a,
                  entries: _0x20099e
                });
              }
              _0x20099e[_0x49c376.primaryKey] = {
                timestamp: _0x49c376.key
              };
              _0x49c376.continue();
            };
          } catch (_0x1e859d) {
            return _0x132028(_0x1e859d);
          }
        });
      },
      loadLocalEntry: (_0x5c20c0, _0xfc7a2a) => {
        var _0x94c0bb;
        var _0x1d6747;
        try {
          var _0x4d2c3d = _0x170eaf.lookupPath(_0x5c20c0);
          _0x1d6747 = _0x4d2c3d.node;
          _0x94c0bb = _0x170eaf.stat(_0x5c20c0);
        } catch (_0x1c806b) {
          return _0xfc7a2a(_0x1c806b);
        }
        if (_0x170eaf.isDir(_0x94c0bb.mode)) {
          return _0xfc7a2a(null, {
            timestamp: _0x94c0bb.mtime,
            mode: _0x94c0bb.mode
          });
        } else if (_0x170eaf.isFile(_0x94c0bb.mode)) {
          _0x1d6747.contents = _0x36df50.getFileDataAsTypedArray(_0x1d6747);
          return _0xfc7a2a(null, {
            timestamp: _0x94c0bb.mtime,
            mode: _0x94c0bb.mode,
            contents: _0x1d6747.contents
          });
        } else {
          return _0xfc7a2a(new Error("node type not supported"));
        }
      },
      storeLocalEntry: (_0x3981b5, _0x296059, _0x2fdfec) => {
        try {
          if (_0x170eaf.isDir(_0x296059.mode)) {
            _0x170eaf.mkdirTree(_0x3981b5, _0x296059.mode);
          } else if (_0x170eaf.isFile(_0x296059.mode)) {
            _0x170eaf.writeFile(_0x3981b5, _0x296059.contents, {
              canOwn: true
            });
          } else {
            return _0x2fdfec(new Error("node type not supported"));
          }
          _0x170eaf.chmod(_0x3981b5, _0x296059.mode);
          _0x170eaf.utime(_0x3981b5, _0x296059.timestamp, _0x296059.timestamp);
        } catch (_0x4c892d) {
          return _0x2fdfec(_0x4c892d);
        }
        _0x2fdfec(null);
      },
      removeLocalEntry: (_0x3fb0bb, _0x5d6de8) => {
        try {
          var _0x3373bf = _0x170eaf.lookupPath(_0x3fb0bb);
          var _0x54fc52 = _0x170eaf.stat(_0x3fb0bb);
          if (_0x170eaf.isDir(_0x54fc52.mode)) {
            _0x170eaf.rmdir(_0x3fb0bb);
          } else if (_0x170eaf.isFile(_0x54fc52.mode)) {
            _0x170eaf.unlink(_0x3fb0bb);
          }
        } catch (_0x1b800d) {
          return _0x5d6de8(_0x1b800d);
        }
        _0x5d6de8(null);
      },
      loadRemoteEntry: (_0x3839a8, _0xf016d5, _0xb78970) => {
        var _0x387cd8 = _0x3839a8.get(_0xf016d5);
        _0x387cd8.onsuccess = _0x4e07a5 => {
          _0xb78970(null, _0x4e07a5.target.result);
        };
        _0x387cd8.onerror = _0x35da0b => {
          _0xb78970(this.error);
          _0x35da0b.preventDefault();
        };
      },
      storeRemoteEntry: (_0x56cc76, _0x345bcf, _0x3b714f, _0x1f8bc8) => {
        try {
          var _0x5c8cb2 = _0x56cc76.put(_0x3b714f, _0x345bcf);
        } catch (_0x3c2c40) {
          _0x1f8bc8(_0x3c2c40);
          return;
        }
        _0x5c8cb2.onsuccess = () => {
          _0x1f8bc8(null);
        };
        _0x5c8cb2.onerror = _0x559af4 => {
          _0x1f8bc8(this.error);
          _0x559af4.preventDefault();
        };
      },
      removeRemoteEntry: (_0x4789dc, _0x58700f, _0x54ee79) => {
        var _0x18e68b = _0x4789dc.delete(_0x58700f);
        _0x18e68b.onsuccess = () => {
          _0x54ee79(null);
        };
        _0x18e68b.onerror = _0x1e8978 => {
          _0x54ee79(this.error);
          _0x1e8978.preventDefault();
        };
      },
      reconcile: (_0x191409, _0x261eb9, _0x5d0b7d) => {
        var _0x1a9efc = 0;
        var _0x4d579b = [];
        Object.keys(_0x191409.entries).forEach(function (_0x30462c) {
          var _0x388498 = _0x191409.entries[_0x30462c];
          var _0xb2f85f = _0x261eb9.entries[_0x30462c];
          if (!_0xb2f85f || _0x388498.timestamp.getTime() != _0xb2f85f.timestamp.getTime()) {
            _0x4d579b.push(_0x30462c);
            _0x1a9efc++;
          }
        });
        var _0x4646a8 = [];
        Object.keys(_0x261eb9.entries).forEach(function (_0x2c812f) {
          if (!_0x191409.entries[_0x2c812f]) {
            _0x4646a8.push(_0x2c812f);
            _0x1a9efc++;
          }
        });
        if (!_0x1a9efc) {
          return _0x5d0b7d(null);
        }
        var _0xe7266b = false;
        var _0x1cc89f = _0x191409.type === "remote" ? _0x191409.db : _0x261eb9.db;
        var _0x46f72e = _0x1cc89f.transaction([_0x4082a3.DB_STORE_NAME], "readwrite");
        var _0x3ddd21 = _0x46f72e.objectStore(_0x4082a3.DB_STORE_NAME);
        function _0x5909bb(_0x6426d3) {
          if (_0x6426d3 && !_0xe7266b) {
            _0xe7266b = true;
            return _0x5d0b7d(_0x6426d3);
          }
        }
        _0x46f72e.onerror = _0x5e1ee4 => {
          _0x5909bb(this.error);
          _0x5e1ee4.preventDefault();
        };
        _0x46f72e.oncomplete = _0x5c6160 => {
          if (!_0xe7266b) {
            _0x5d0b7d(null);
          }
        };
        _0x4d579b.sort().forEach(_0x599139 => {
          if (_0x261eb9.type === "local") {
            _0x4082a3.loadRemoteEntry(_0x3ddd21, _0x599139, (_0x322a66, _0x20e115) => {
              if (_0x322a66) {
                return _0x5909bb(_0x322a66);
              }
              _0x4082a3.storeLocalEntry(_0x599139, _0x20e115, _0x5909bb);
            });
          } else {
            _0x4082a3.loadLocalEntry(_0x599139, (_0x58ace7, _0x39f6c4) => {
              if (_0x58ace7) {
                return _0x5909bb(_0x58ace7);
              }
              _0x4082a3.storeRemoteEntry(_0x3ddd21, _0x599139, _0x39f6c4, _0x5909bb);
            });
          }
        });
        _0x4646a8.sort().reverse().forEach(_0x5c44a8 => {
          if (_0x261eb9.type === "local") {
            _0x4082a3.removeLocalEntry(_0x5c44a8, _0x5909bb);
          } else {
            _0x4082a3.removeRemoteEntry(_0x3ddd21, _0x5c44a8, _0x5909bb);
          }
        });
      }
    };
    var _0x170eaf = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: false,
      ignorePermissions: true,
      ErrnoError: null,
      genericErrors: {},
      filesystems: null,
      syncFSRequests: 0,
      lookupPath: (_0x30ddcb, _0x75bc0 = {}) => {
        _0x30ddcb = _0x1c9931.resolve(_0x170eaf.cwd(), _0x30ddcb);
        if (!_0x30ddcb) {
          return {
            path: "",
            node: null
          };
        }
        var _0x1934eb = {
          follow_mount: true,
          recurse_count: 0
        };
        _0x75bc0 = Object.assign(_0x1934eb, _0x75bc0);
        if (_0x75bc0.recurse_count > 8) {
          throw new _0x170eaf.ErrnoError(32);
        }
        var _0x52eb50 = _0x59b6ba.normalizeArray(_0x30ddcb.split("/").filter(_0x412961 => !!_0x412961), false);
        var _0xe5bf2e = _0x170eaf.root;
        var _0x3d7189 = "/";
        for (var _0x30b274 = 0; _0x30b274 < _0x52eb50.length; _0x30b274++) {
          var _0x1a96a1 = _0x30b274 === _0x52eb50.length - 1;
          if (_0x1a96a1 && _0x75bc0.parent) {
            break;
          }
          _0xe5bf2e = _0x170eaf.lookupNode(_0xe5bf2e, _0x52eb50[_0x30b274]);
          _0x3d7189 = _0x59b6ba.join2(_0x3d7189, _0x52eb50[_0x30b274]);
          if (_0x170eaf.isMountpoint(_0xe5bf2e)) {
            if (!_0x1a96a1 || _0x1a96a1 && _0x75bc0.follow_mount) {
              _0xe5bf2e = _0xe5bf2e.mounted.root;
            }
          }
          if (!_0x1a96a1 || _0x75bc0.follow) {
            var _0x43525c = 0;
            while (_0x170eaf.isLink(_0xe5bf2e.mode)) {
              var _0x18154a = _0x170eaf.readlink(_0x3d7189);
              _0x3d7189 = _0x1c9931.resolve(_0x59b6ba.dirname(_0x3d7189), _0x18154a);
              var _0x21d2c7 = _0x170eaf.lookupPath(_0x3d7189, {
                recurse_count: _0x75bc0.recurse_count + 1
              });
              _0xe5bf2e = _0x21d2c7.node;
              if (_0x43525c++ > 40) {
                throw new _0x170eaf.ErrnoError(32);
              }
            }
          }
        }
        return {
          path: _0x3d7189,
          node: _0xe5bf2e
        };
      },
      getPath: _0x2ce5d1 => {
        var _0x399215;
        while (true) {
          if (_0x170eaf.isRoot(_0x2ce5d1)) {
            var _0x405ac4 = _0x2ce5d1.mount.mountpoint;
            if (!_0x399215) {
              return _0x405ac4;
            }
            if (_0x405ac4[_0x405ac4.length - 1] !== "/") {
              return _0x405ac4 + "/" + _0x399215;
            } else {
              return _0x405ac4 + _0x399215;
            }
          }
          _0x399215 = _0x399215 ? _0x2ce5d1.name + "/" + _0x399215 : _0x2ce5d1.name;
          _0x2ce5d1 = _0x2ce5d1.parent;
        }
      },
      hashName: (_0x3d5dde, _0x478af4) => {
        var _0x152c06 = 0;
        for (var _0x27c9b5 = 0; _0x27c9b5 < _0x478af4.length; _0x27c9b5++) {
          _0x152c06 = (_0x152c06 << 5) - _0x152c06 + _0x478af4.charCodeAt(_0x27c9b5) | 0;
        }
        return (_0x3d5dde + _0x152c06 >>> 0) % _0x170eaf.nameTable.length;
      },
      hashAddNode: _0x57e0b0 => {
        var _0x9a1e57 = _0x170eaf.hashName(_0x57e0b0.parent.id, _0x57e0b0.name);
        _0x57e0b0.name_next = _0x170eaf.nameTable[_0x9a1e57];
        _0x170eaf.nameTable[_0x9a1e57] = _0x57e0b0;
      },
      hashRemoveNode: _0x318998 => {
        var _0x3c12fd = _0x170eaf.hashName(_0x318998.parent.id, _0x318998.name);
        if (_0x170eaf.nameTable[_0x3c12fd] === _0x318998) {
          _0x170eaf.nameTable[_0x3c12fd] = _0x318998.name_next;
        } else {
          var _0x4ac9a4 = _0x170eaf.nameTable[_0x3c12fd];
          while (_0x4ac9a4) {
            if (_0x4ac9a4.name_next === _0x318998) {
              _0x4ac9a4.name_next = _0x318998.name_next;
              break;
            }
            _0x4ac9a4 = _0x4ac9a4.name_next;
          }
        }
      },
      lookupNode: (_0xb62ffa, _0x28d654) => {
        var _0x292fd4 = _0x170eaf.mayLookup(_0xb62ffa);
        if (_0x292fd4) {
          throw new _0x170eaf.ErrnoError(_0x292fd4, _0xb62ffa);
        }
        var _0x2e69fd = _0x170eaf.hashName(_0xb62ffa.id, _0x28d654);
        for (var _0x500d86 = _0x170eaf.nameTable[_0x2e69fd]; _0x500d86; _0x500d86 = _0x500d86.name_next) {
          var _0x9cc50 = _0x500d86.name;
          if (_0x500d86.parent.id === _0xb62ffa.id && _0x9cc50 === _0x28d654) {
            return _0x500d86;
          }
        }
        return _0x170eaf.lookup(_0xb62ffa, _0x28d654);
      },
      createNode: (_0x532acd, _0x2ef02e, _0x5d1ba8, _0x298956) => {
        var _0x1d4c21 = new _0x170eaf.FSNode(_0x532acd, _0x2ef02e, _0x5d1ba8, _0x298956);
        _0x170eaf.hashAddNode(_0x1d4c21);
        return _0x1d4c21;
      },
      destroyNode: _0x13d385 => {
        _0x170eaf.hashRemoveNode(_0x13d385);
      },
      isRoot: _0x5b3fe3 => {
        return _0x5b3fe3 === _0x5b3fe3.parent;
      },
      isMountpoint: _0x23841d => {
        return !!_0x23841d.mounted;
      },
      isFile: _0x28090e => {
        return (_0x28090e & 61440) === 32768;
      },
      isDir: _0x395aaa => {
        return (_0x395aaa & 61440) === 16384;
      },
      isLink: _0x254dea => {
        return (_0x254dea & 61440) === 40960;
      },
      isChrdev: _0x520d12 => {
        return (_0x520d12 & 61440) === 8192;
      },
      isBlkdev: _0x475f9d => {
        return (_0x475f9d & 61440) === 24576;
      },
      isFIFO: _0x51b927 => {
        return (_0x51b927 & 61440) === 4096;
      },
      isSocket: _0xbdfb71 => {
        return (_0xbdfb71 & 49152) === 49152;
      },
      flagModes: {
        r: 0,
        "r+": 2,
        w: 577,
        "w+": 578,
        a: 1089,
        "a+": 1090
      },
      modeStringToFlags: _0x3d251c => {
        var _0x2688ca = _0x170eaf.flagModes[_0x3d251c];
        if (typeof _0x2688ca == "undefined") {
          throw new Error("Unknown file open mode: " + _0x3d251c);
        }
        return _0x2688ca;
      },
      flagsToPermissionString: _0x3fb3b9 => {
        var _0x3079c4 = ["r", "w", "rw"][_0x3fb3b9 & 3];
        if (_0x3fb3b9 & 512) {
          _0x3079c4 += "w";
        }
        return _0x3079c4;
      },
      nodePermissions: (_0x2cdc66, _0x290a91) => {
        if (_0x170eaf.ignorePermissions) {
          return 0;
        }
        if (_0x290a91.includes("r") && !(_0x2cdc66.mode & 292)) {
          return 2;
        } else if (_0x290a91.includes("w") && !(_0x2cdc66.mode & 146)) {
          return 2;
        } else if (_0x290a91.includes("x") && !(_0x2cdc66.mode & 73)) {
          return 2;
        }
        return 0;
      },
      mayLookup: _0x4d7341 => {
        var _0x28809e = _0x170eaf.nodePermissions(_0x4d7341, "x");
        if (_0x28809e) {
          return _0x28809e;
        }
        if (!_0x4d7341.node_ops.lookup) {
          return 2;
        }
        return 0;
      },
      mayCreate: (_0x299437, _0x3612de) => {
        try {
          var _0x944421 = _0x170eaf.lookupNode(_0x299437, _0x3612de);
          return 20;
        } catch (_0xafa705) {}
        return _0x170eaf.nodePermissions(_0x299437, "wx");
      },
      mayDelete: (_0x57ddb4, _0x451dd7, _0x4aa2c1) => {
        var _0x1f2ec2;
        try {
          _0x1f2ec2 = _0x170eaf.lookupNode(_0x57ddb4, _0x451dd7);
        } catch (_0x308604) {
          return _0x308604.errno;
        }
        var _0x50ad53 = _0x170eaf.nodePermissions(_0x57ddb4, "wx");
        if (_0x50ad53) {
          return _0x50ad53;
        }
        if (_0x4aa2c1) {
          if (!_0x170eaf.isDir(_0x1f2ec2.mode)) {
            return 54;
          }
          if (_0x170eaf.isRoot(_0x1f2ec2) || _0x170eaf.getPath(_0x1f2ec2) === _0x170eaf.cwd()) {
            return 10;
          }
        } else if (_0x170eaf.isDir(_0x1f2ec2.mode)) {
          return 31;
        }
        return 0;
      },
      mayOpen: (_0x26db6b, _0x3f175a) => {
        if (!_0x26db6b) {
          return 44;
        }
        if (_0x170eaf.isLink(_0x26db6b.mode)) {
          return 32;
        } else if (_0x170eaf.isDir(_0x26db6b.mode)) {
          if (_0x170eaf.flagsToPermissionString(_0x3f175a) !== "r" || _0x3f175a & 512) {
            return 31;
          }
        }
        return _0x170eaf.nodePermissions(_0x26db6b, _0x170eaf.flagsToPermissionString(_0x3f175a));
      },
      MAX_OPEN_FDS: 4096,
      nextfd: (_0x2f5618 = 0, _0x398172 = _0x170eaf.MAX_OPEN_FDS) => {
        for (var _0x5d4805 = _0x2f5618; _0x5d4805 <= _0x398172; _0x5d4805++) {
          if (!_0x170eaf.streams[_0x5d4805]) {
            return _0x5d4805;
          }
        }
        throw new _0x170eaf.ErrnoError(33);
      },
      getStream: _0x25141c => _0x170eaf.streams[_0x25141c],
      createStream: (_0x253ccd, _0x33ec31, _0x5a7e4b) => {
        if (!_0x170eaf.FSStream) {
          _0x170eaf.FSStream = function () {};
          _0x170eaf.FSStream.prototype = {
            object: {
              get: function () {
                return this.node;
              },
              set: function (_0x162ba1) {
                this.node = _0x162ba1;
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
        _0x253ccd = Object.assign(new _0x170eaf.FSStream(), _0x253ccd);
        var _0x578a86 = _0x170eaf.nextfd(_0x33ec31, _0x5a7e4b);
        _0x253ccd.fd = _0x578a86;
        _0x170eaf.streams[_0x578a86] = _0x253ccd;
        return _0x253ccd;
      },
      closeStream: _0x2fed08 => {
        _0x170eaf.streams[_0x2fed08] = null;
      },
      chrdev_stream_ops: {
        open: _0x574595 => {
          var _0x26fc9d = _0x170eaf.getDevice(_0x574595.node.rdev);
          _0x574595.stream_ops = _0x26fc9d.stream_ops;
          if (_0x574595.stream_ops.open) {
            _0x574595.stream_ops.open(_0x574595);
          }
        },
        llseek: () => {
          throw new _0x170eaf.ErrnoError(70);
        }
      },
      major: _0xfbdb39 => _0xfbdb39 >> 8,
      minor: _0x5e6cdf => _0x5e6cdf & 255,
      makedev: (_0x3bb2b9, _0x3d2864) => _0x3bb2b9 << 8 | _0x3d2864,
      registerDevice: (_0x440cc0, _0x1658c8) => {
        _0x170eaf.devices[_0x440cc0] = {
          stream_ops: _0x1658c8
        };
      },
      getDevice: _0x1a1d72 => _0x170eaf.devices[_0x1a1d72],
      getMounts: _0x2c93b1 => {
        var _0xec63f5 = [];
        var _0x2b53ac = [_0x2c93b1];
        while (_0x2b53ac.length) {
          var _0x1d9f78 = _0x2b53ac.pop();
          _0xec63f5.push(_0x1d9f78);
          _0x2b53ac.push.apply(_0x2b53ac, _0x1d9f78.mounts);
        }
        return _0xec63f5;
      },
      syncfs: (_0x227926, _0x544e34) => {
        if (typeof _0x227926 == "function") {
          _0x544e34 = _0x227926;
          _0x227926 = false;
        }
        _0x170eaf.syncFSRequests++;
        if (_0x170eaf.syncFSRequests > 1) {
          _0x33d817("warning: " + _0x170eaf.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
        }
        var _0x7c8892 = _0x170eaf.getMounts(_0x170eaf.root.mount);
        var _0x2647d1 = 0;
        function _0x3ad564(_0x2ccef5) {
          _0x170eaf.syncFSRequests--;
          return _0x544e34(_0x2ccef5);
        }
        function _0xe3dd48(_0x11d98a) {
          if (_0x11d98a) {
            if (!_0xe3dd48.errored) {
              _0xe3dd48.errored = true;
              return _0x3ad564(_0x11d98a);
            }
            return;
          }
          if (++_0x2647d1 >= _0x7c8892.length) {
            _0x3ad564(null);
          }
        }
        _0x7c8892.forEach(_0x2f8fcc => {
          if (!_0x2f8fcc.type.syncfs) {
            return _0xe3dd48(null);
          }
          _0x2f8fcc.type.syncfs(_0x2f8fcc, _0x227926, _0xe3dd48);
        });
      },
      mount: (_0x323838, _0x13d43c, _0x409894) => {
        var _0x490360 = _0x409894 === "/";
        var _0x10dfbe = !_0x409894;
        var _0x557c34;
        if (_0x490360 && _0x170eaf.root) {
          throw new _0x170eaf.ErrnoError(10);
        } else if (!_0x490360 && !_0x10dfbe) {
          var _0x3bc3b3 = _0x170eaf.lookupPath(_0x409894, {
            follow_mount: false
          });
          _0x409894 = _0x3bc3b3.path;
          _0x557c34 = _0x3bc3b3.node;
          if (_0x170eaf.isMountpoint(_0x557c34)) {
            throw new _0x170eaf.ErrnoError(10);
          }
          if (!_0x170eaf.isDir(_0x557c34.mode)) {
            throw new _0x170eaf.ErrnoError(54);
          }
        }
        var _0x361e52 = {
          type: _0x323838,
          opts: _0x13d43c,
          mountpoint: _0x409894,
          mounts: []
        };
        var _0x5155e5 = _0x323838.mount(_0x361e52);
        _0x5155e5.mount = _0x361e52;
        _0x361e52.root = _0x5155e5;
        if (_0x490360) {
          _0x170eaf.root = _0x5155e5;
        } else if (_0x557c34) {
          _0x557c34.mounted = _0x361e52;
          if (_0x557c34.mount) {
            _0x557c34.mount.mounts.push(_0x361e52);
          }
        }
        return _0x5155e5;
      },
      unmount: _0x599781 => {
        var _0x40b0df = _0x170eaf.lookupPath(_0x599781, {
          follow_mount: false
        });
        if (!_0x170eaf.isMountpoint(_0x40b0df.node)) {
          throw new _0x170eaf.ErrnoError(28);
        }
        var _0x976638 = _0x40b0df.node;
        var _0x952db8 = _0x976638.mounted;
        var _0x3c759c = _0x170eaf.getMounts(_0x952db8);
        Object.keys(_0x170eaf.nameTable).forEach(_0x121a01 => {
          var _0x371a8c = _0x170eaf.nameTable[_0x121a01];
          while (_0x371a8c) {
            var _0x15535d = _0x371a8c.name_next;
            if (_0x3c759c.includes(_0x371a8c.mount)) {
              _0x170eaf.destroyNode(_0x371a8c);
            }
            _0x371a8c = _0x15535d;
          }
        });
        _0x976638.mounted = null;
        var _0x2f3a17 = _0x976638.mount.mounts.indexOf(_0x952db8);
        _0x976638.mount.mounts.splice(_0x2f3a17, 1);
      },
      lookup: (_0x3afe23, _0x2ef608) => {
        return _0x3afe23.node_ops.lookup(_0x3afe23, _0x2ef608);
      },
      mknod: (_0x211f3c, _0x21a44d, _0x5872b1) => {
        var _0x4ed2f9 = _0x170eaf.lookupPath(_0x211f3c, {
          parent: true
        });
        var _0x17cf6e = _0x4ed2f9.node;
        var _0x12359c = _0x59b6ba.basename(_0x211f3c);
        if (!_0x12359c || _0x12359c === "." || _0x12359c === "..") {
          throw new _0x170eaf.ErrnoError(28);
        }
        var _0x3e197f = _0x170eaf.mayCreate(_0x17cf6e, _0x12359c);
        if (_0x3e197f) {
          throw new _0x170eaf.ErrnoError(_0x3e197f);
        }
        if (!_0x17cf6e.node_ops.mknod) {
          throw new _0x170eaf.ErrnoError(63);
        }
        return _0x17cf6e.node_ops.mknod(_0x17cf6e, _0x12359c, _0x21a44d, _0x5872b1);
      },
      create: (_0x483de3, _0xde009c) => {
        _0xde009c = _0xde009c !== undefined ? _0xde009c : 438;
        _0xde009c &= 4095;
        _0xde009c |= 32768;
        return _0x170eaf.mknod(_0x483de3, _0xde009c, 0);
      },
      mkdir: (_0x1b592b, _0x2078a1) => {
        _0x2078a1 = _0x2078a1 !== undefined ? _0x2078a1 : 511;
        _0x2078a1 &= 1023;
        _0x2078a1 |= 16384;
        return _0x170eaf.mknod(_0x1b592b, _0x2078a1, 0);
      },
      mkdirTree: (_0x370b37, _0x2b0a45) => {
        var _0x274400 = _0x370b37.split("/");
        var _0xfde562 = "";
        for (var _0xd41263 = 0; _0xd41263 < _0x274400.length; ++_0xd41263) {
          if (!_0x274400[_0xd41263]) {
            continue;
          }
          _0xfde562 += "/" + _0x274400[_0xd41263];
          try {
            _0x170eaf.mkdir(_0xfde562, _0x2b0a45);
          } catch (_0x4058d9) {
            if (_0x4058d9.errno != 20) {
              throw _0x4058d9;
            }
          }
        }
      },
      mkdev: (_0x3478bf, _0x3b99fb, _0x2cb590) => {
        if (typeof _0x2cb590 == "undefined") {
          _0x2cb590 = _0x3b99fb;
          _0x3b99fb = 438;
        }
        _0x3b99fb |= 8192;
        return _0x170eaf.mknod(_0x3478bf, _0x3b99fb, _0x2cb590);
      },
      symlink: (_0x31ac42, _0xe583e0) => {
        if (!_0x1c9931.resolve(_0x31ac42)) {
          throw new _0x170eaf.ErrnoError(44);
        }
        var _0x39c051 = _0x170eaf.lookupPath(_0xe583e0, {
          parent: true
        });
        var _0x27eac9 = _0x39c051.node;
        if (!_0x27eac9) {
          throw new _0x170eaf.ErrnoError(44);
        }
        var _0x1573a2 = _0x59b6ba.basename(_0xe583e0);
        var _0x45a571 = _0x170eaf.mayCreate(_0x27eac9, _0x1573a2);
        if (_0x45a571) {
          throw new _0x170eaf.ErrnoError(_0x45a571);
        }
        if (!_0x27eac9.node_ops.symlink) {
          throw new _0x170eaf.ErrnoError(63);
        }
        return _0x27eac9.node_ops.symlink(_0x27eac9, _0x1573a2, _0x31ac42);
      },
      rename: (_0x4066cd, _0x1ed251) => {
        var _0x1ffaaf = _0x59b6ba.dirname(_0x4066cd);
        var _0x178b75 = _0x59b6ba.dirname(_0x1ed251);
        var _0x168ffa = _0x59b6ba.basename(_0x4066cd);
        var _0x3e66e2 = _0x59b6ba.basename(_0x1ed251);
        var _0x1f6033;
        var _0x2501df;
        var _0x2698b3;
        _0x1f6033 = _0x170eaf.lookupPath(_0x4066cd, {
          parent: true
        });
        _0x2501df = _0x1f6033.node;
        _0x1f6033 = _0x170eaf.lookupPath(_0x1ed251, {
          parent: true
        });
        _0x2698b3 = _0x1f6033.node;
        if (!_0x2501df || !_0x2698b3) {
          throw new _0x170eaf.ErrnoError(44);
        }
        if (_0x2501df.mount !== _0x2698b3.mount) {
          throw new _0x170eaf.ErrnoError(75);
        }
        var _0x4ab75d = _0x170eaf.lookupNode(_0x2501df, _0x168ffa);
        var _0x2bb121 = _0x1c9931.relative(_0x4066cd, _0x178b75);
        if (_0x2bb121.charAt(0) !== ".") {
          throw new _0x170eaf.ErrnoError(28);
        }
        _0x2bb121 = _0x1c9931.relative(_0x1ed251, _0x1ffaaf);
        if (_0x2bb121.charAt(0) !== ".") {
          throw new _0x170eaf.ErrnoError(55);
        }
        var _0x488b73;
        try {
          _0x488b73 = _0x170eaf.lookupNode(_0x2698b3, _0x3e66e2);
        } catch (_0x206492) {}
        if (_0x4ab75d === _0x488b73) {
          return;
        }
        var _0x157471 = _0x170eaf.isDir(_0x4ab75d.mode);
        var _0x36cacb = _0x170eaf.mayDelete(_0x2501df, _0x168ffa, _0x157471);
        if (_0x36cacb) {
          throw new _0x170eaf.ErrnoError(_0x36cacb);
        }
        _0x36cacb = _0x488b73 ? _0x170eaf.mayDelete(_0x2698b3, _0x3e66e2, _0x157471) : _0x170eaf.mayCreate(_0x2698b3, _0x3e66e2);
        if (_0x36cacb) {
          throw new _0x170eaf.ErrnoError(_0x36cacb);
        }
        if (!_0x2501df.node_ops.rename) {
          throw new _0x170eaf.ErrnoError(63);
        }
        if (_0x170eaf.isMountpoint(_0x4ab75d) || _0x488b73 && _0x170eaf.isMountpoint(_0x488b73)) {
          throw new _0x170eaf.ErrnoError(10);
        }
        if (_0x2698b3 !== _0x2501df) {
          _0x36cacb = _0x170eaf.nodePermissions(_0x2501df, "w");
          if (_0x36cacb) {
            throw new _0x170eaf.ErrnoError(_0x36cacb);
          }
        }
        _0x170eaf.hashRemoveNode(_0x4ab75d);
        try {
          _0x2501df.node_ops.rename(_0x4ab75d, _0x2698b3, _0x3e66e2);
        } catch (_0x1cc13f) {
          throw _0x1cc13f;
        } finally {
          _0x170eaf.hashAddNode(_0x4ab75d);
        }
      },
      rmdir: _0x239ea7 => {
        var _0x1a44d0 = _0x170eaf.lookupPath(_0x239ea7, {
          parent: true
        });
        var _0x3ce73b = _0x1a44d0.node;
        var _0x1ce0b2 = _0x59b6ba.basename(_0x239ea7);
        var _0x36c7fb = _0x170eaf.lookupNode(_0x3ce73b, _0x1ce0b2);
        var _0x1ec8af = _0x170eaf.mayDelete(_0x3ce73b, _0x1ce0b2, true);
        if (_0x1ec8af) {
          throw new _0x170eaf.ErrnoError(_0x1ec8af);
        }
        if (!_0x3ce73b.node_ops.rmdir) {
          throw new _0x170eaf.ErrnoError(63);
        }
        if (_0x170eaf.isMountpoint(_0x36c7fb)) {
          throw new _0x170eaf.ErrnoError(10);
        }
        _0x3ce73b.node_ops.rmdir(_0x3ce73b, _0x1ce0b2);
        _0x170eaf.destroyNode(_0x36c7fb);
      },
      readdir: _0xe370d9 => {
        var _0x234ddb = _0x170eaf.lookupPath(_0xe370d9, {
          follow: true
        });
        var _0x3e3052 = _0x234ddb.node;
        if (!_0x3e3052.node_ops.readdir) {
          throw new _0x170eaf.ErrnoError(54);
        }
        return _0x3e3052.node_ops.readdir(_0x3e3052);
      },
      unlink: _0x34ca51 => {
        var _0x38a7ba = _0x170eaf.lookupPath(_0x34ca51, {
          parent: true
        });
        var _0x593dc3 = _0x38a7ba.node;
        if (!_0x593dc3) {
          throw new _0x170eaf.ErrnoError(44);
        }
        var _0x14a398 = _0x59b6ba.basename(_0x34ca51);
        var _0x523278 = _0x170eaf.lookupNode(_0x593dc3, _0x14a398);
        var _0x223eb8 = _0x170eaf.mayDelete(_0x593dc3, _0x14a398, false);
        if (_0x223eb8) {
          throw new _0x170eaf.ErrnoError(_0x223eb8);
        }
        if (!_0x593dc3.node_ops.unlink) {
          throw new _0x170eaf.ErrnoError(63);
        }
        if (_0x170eaf.isMountpoint(_0x523278)) {
          throw new _0x170eaf.ErrnoError(10);
        }
        _0x593dc3.node_ops.unlink(_0x593dc3, _0x14a398);
        _0x170eaf.destroyNode(_0x523278);
      },
      readlink: _0x46b2dc => {
        var _0x513b4e = _0x170eaf.lookupPath(_0x46b2dc);
        var _0x354647 = _0x513b4e.node;
        if (!_0x354647) {
          throw new _0x170eaf.ErrnoError(44);
        }
        if (!_0x354647.node_ops.readlink) {
          throw new _0x170eaf.ErrnoError(28);
        }
        return _0x1c9931.resolve(_0x170eaf.getPath(_0x354647.parent), _0x354647.node_ops.readlink(_0x354647));
      },
      stat: (_0x1ba8ae, _0x41e549) => {
        var _0x151e9a = _0x170eaf.lookupPath(_0x1ba8ae, {
          follow: !_0x41e549
        });
        var _0x2200d8 = _0x151e9a.node;
        if (!_0x2200d8) {
          throw new _0x170eaf.ErrnoError(44);
        }
        if (!_0x2200d8.node_ops.getattr) {
          throw new _0x170eaf.ErrnoError(63);
        }
        return _0x2200d8.node_ops.getattr(_0x2200d8);
      },
      lstat: _0x4347f3 => {
        return _0x170eaf.stat(_0x4347f3, true);
      },
      chmod: (_0x220429, _0xd3abe7, _0x140a5b) => {
        var _0x498c4a;
        if (typeof _0x220429 == "string") {
          var _0xd6e62f = _0x170eaf.lookupPath(_0x220429, {
            follow: !_0x140a5b
          });
          _0x498c4a = _0xd6e62f.node;
        } else {
          _0x498c4a = _0x220429;
        }
        if (!_0x498c4a.node_ops.setattr) {
          throw new _0x170eaf.ErrnoError(63);
        }
        _0x498c4a.node_ops.setattr(_0x498c4a, {
          mode: _0xd3abe7 & 4095 | _0x498c4a.mode & ~4095,
          timestamp: Date.now()
        });
      },
      lchmod: (_0x30f9e8, _0x46afef) => {
        _0x170eaf.chmod(_0x30f9e8, _0x46afef, true);
      },
      fchmod: (_0x10fa0b, _0x78285e) => {
        var _0x3b0a6a = _0x170eaf.getStream(_0x10fa0b);
        if (!_0x3b0a6a) {
          throw new _0x170eaf.ErrnoError(8);
        }
        _0x170eaf.chmod(_0x3b0a6a.node, _0x78285e);
      },
      chown: (_0x32e47d, _0x347fcb, _0x5a6c1e, _0x50aade) => {
        var _0x32e1b4;
        if (typeof _0x32e47d == "string") {
          var _0x267c4b = _0x170eaf.lookupPath(_0x32e47d, {
            follow: !_0x50aade
          });
          _0x32e1b4 = _0x267c4b.node;
        } else {
          _0x32e1b4 = _0x32e47d;
        }
        if (!_0x32e1b4.node_ops.setattr) {
          throw new _0x170eaf.ErrnoError(63);
        }
        _0x32e1b4.node_ops.setattr(_0x32e1b4, {
          timestamp: Date.now()
        });
      },
      lchown: (_0x5bdf28, _0xb70bd0, _0x23e606) => {
        _0x170eaf.chown(_0x5bdf28, _0xb70bd0, _0x23e606, true);
      },
      fchown: (_0x416a7b, _0x204fb1, _0x54c5d2) => {
        var _0x1812cc = _0x170eaf.getStream(_0x416a7b);
        if (!_0x1812cc) {
          throw new _0x170eaf.ErrnoError(8);
        }
        _0x170eaf.chown(_0x1812cc.node, _0x204fb1, _0x54c5d2);
      },
      truncate: (_0x35fdce, _0x44201c) => {
        if (_0x44201c < 0) {
          throw new _0x170eaf.ErrnoError(28);
        }
        var _0xb38a98;
        if (typeof _0x35fdce == "string") {
          var _0x35ab55 = _0x170eaf.lookupPath(_0x35fdce, {
            follow: true
          });
          _0xb38a98 = _0x35ab55.node;
        } else {
          _0xb38a98 = _0x35fdce;
        }
        if (!_0xb38a98.node_ops.setattr) {
          throw new _0x170eaf.ErrnoError(63);
        }
        if (_0x170eaf.isDir(_0xb38a98.mode)) {
          throw new _0x170eaf.ErrnoError(31);
        }
        if (!_0x170eaf.isFile(_0xb38a98.mode)) {
          throw new _0x170eaf.ErrnoError(28);
        }
        var _0x58c893 = _0x170eaf.nodePermissions(_0xb38a98, "w");
        if (_0x58c893) {
          throw new _0x170eaf.ErrnoError(_0x58c893);
        }
        _0xb38a98.node_ops.setattr(_0xb38a98, {
          size: _0x44201c,
          timestamp: Date.now()
        });
      },
      ftruncate: (_0x11286f, _0x3f3363) => {
        var _0x5b49b8 = _0x170eaf.getStream(_0x11286f);
        if (!_0x5b49b8) {
          throw new _0x170eaf.ErrnoError(8);
        }
        if ((_0x5b49b8.flags & 2097155) === 0) {
          throw new _0x170eaf.ErrnoError(28);
        }
        _0x170eaf.truncate(_0x5b49b8.node, _0x3f3363);
      },
      utime: (_0x4414b7, _0x1ce00e, _0x2a09ee) => {
        var _0x2c1b3a = _0x170eaf.lookupPath(_0x4414b7, {
          follow: true
        });
        var _0x1b1922 = _0x2c1b3a.node;
        _0x1b1922.node_ops.setattr(_0x1b1922, {
          timestamp: Math.max(_0x1ce00e, _0x2a09ee)
        });
      },
      open: (_0x3cc8c7, _0xa6427c, _0x386b22, _0x12e106, _0xc91bd8) => {
        if (_0x3cc8c7 === "") {
          throw new _0x170eaf.ErrnoError(44);
        }
        _0xa6427c = typeof _0xa6427c == "string" ? _0x170eaf.modeStringToFlags(_0xa6427c) : _0xa6427c;
        _0x386b22 = typeof _0x386b22 == "undefined" ? 438 : _0x386b22;
        if (_0xa6427c & 64) {
          _0x386b22 = _0x386b22 & 4095 | 32768;
        } else {
          _0x386b22 = 0;
        }
        var _0x3100e6;
        if (typeof _0x3cc8c7 == "object") {
          _0x3100e6 = _0x3cc8c7;
        } else {
          _0x3cc8c7 = _0x59b6ba.normalize(_0x3cc8c7);
          try {
            var _0x3d3862 = _0x170eaf.lookupPath(_0x3cc8c7, {
              follow: !(_0xa6427c & 131072)
            });
            _0x3100e6 = _0x3d3862.node;
          } catch (_0x5f2544) {}
        }
        var _0x460b7e = false;
        if (_0xa6427c & 64) {
          if (_0x3100e6) {
            if (_0xa6427c & 128) {
              throw new _0x170eaf.ErrnoError(20);
            }
          } else {
            _0x3100e6 = _0x170eaf.mknod(_0x3cc8c7, _0x386b22, 0);
            _0x460b7e = true;
          }
        }
        if (!_0x3100e6) {
          throw new _0x170eaf.ErrnoError(44);
        }
        if (_0x170eaf.isChrdev(_0x3100e6.mode)) {
          _0xa6427c &= ~512;
        }
        if (_0xa6427c & 65536 && !_0x170eaf.isDir(_0x3100e6.mode)) {
          throw new _0x170eaf.ErrnoError(54);
        }
        if (!_0x460b7e) {
          var _0x16cbb8 = _0x170eaf.mayOpen(_0x3100e6, _0xa6427c);
          if (_0x16cbb8) {
            throw new _0x170eaf.ErrnoError(_0x16cbb8);
          }
        }
        if (_0xa6427c & 512) {
          _0x170eaf.truncate(_0x3100e6, 0);
        }
        _0xa6427c &= ~131712;
        var _0x40536f = _0x170eaf.createStream({
          node: _0x3100e6,
          path: _0x170eaf.getPath(_0x3100e6),
          flags: _0xa6427c,
          seekable: true,
          position: 0,
          stream_ops: _0x3100e6.stream_ops,
          ungotten: [],
          error: false
        }, _0x12e106, _0xc91bd8);
        if (_0x40536f.stream_ops.open) {
          _0x40536f.stream_ops.open(_0x40536f);
        }
        if (_0x1d435e.logReadFiles && !(_0xa6427c & 1)) {
          if (!_0x170eaf.readFiles) {
            _0x170eaf.readFiles = {};
          }
          if (!(_0x3cc8c7 in _0x170eaf.readFiles)) {
            _0x170eaf.readFiles[_0x3cc8c7] = 1;
          }
        }
        return _0x40536f;
      },
      close: _0x227a92 => {
        if (_0x170eaf.isClosed(_0x227a92)) {
          throw new _0x170eaf.ErrnoError(8);
        }
        if (_0x227a92.getdents) {
          _0x227a92.getdents = null;
        }
        try {
          if (_0x227a92.stream_ops.close) {
            _0x227a92.stream_ops.close(_0x227a92);
          }
        } catch (_0x46eca0) {
          throw _0x46eca0;
        } finally {
          _0x170eaf.closeStream(_0x227a92.fd);
        }
        _0x227a92.fd = null;
      },
      isClosed: _0x396f41 => {
        return _0x396f41.fd === null;
      },
      llseek: (_0x9983ac, _0x23d5c3, _0x7fd794) => {
        if (_0x170eaf.isClosed(_0x9983ac)) {
          throw new _0x170eaf.ErrnoError(8);
        }
        if (!_0x9983ac.seekable || !_0x9983ac.stream_ops.llseek) {
          throw new _0x170eaf.ErrnoError(70);
        }
        if (_0x7fd794 != 0 && _0x7fd794 != 1 && _0x7fd794 != 2) {
          throw new _0x170eaf.ErrnoError(28);
        }
        _0x9983ac.position = _0x9983ac.stream_ops.llseek(_0x9983ac, _0x23d5c3, _0x7fd794);
        _0x9983ac.ungotten = [];
        return _0x9983ac.position;
      },
      read: (_0x496f5c, _0x3420dd, _0x406d39, _0x36a89d, _0x7dc9e1) => {
        if (_0x36a89d < 0 || _0x7dc9e1 < 0) {
          throw new _0x170eaf.ErrnoError(28);
        }
        if (_0x170eaf.isClosed(_0x496f5c)) {
          throw new _0x170eaf.ErrnoError(8);
        }
        if ((_0x496f5c.flags & 2097155) === 1) {
          throw new _0x170eaf.ErrnoError(8);
        }
        if (_0x170eaf.isDir(_0x496f5c.node.mode)) {
          throw new _0x170eaf.ErrnoError(31);
        }
        if (!_0x496f5c.stream_ops.read) {
          throw new _0x170eaf.ErrnoError(28);
        }
        var _0x3f70f0 = typeof _0x7dc9e1 != "undefined";
        if (!_0x3f70f0) {
          _0x7dc9e1 = _0x496f5c.position;
        } else if (!_0x496f5c.seekable) {
          throw new _0x170eaf.ErrnoError(70);
        }
        var _0x1896c3 = _0x496f5c.stream_ops.read(_0x496f5c, _0x3420dd, _0x406d39, _0x36a89d, _0x7dc9e1);
        if (!_0x3f70f0) {
          _0x496f5c.position += _0x1896c3;
        }
        return _0x1896c3;
      },
      write: (_0x5e214f, _0x12c951, _0x429b4e, _0x219fe6, _0x557e06, _0x541529) => {
        if (_0x219fe6 < 0 || _0x557e06 < 0) {
          throw new _0x170eaf.ErrnoError(28);
        }
        if (_0x170eaf.isClosed(_0x5e214f)) {
          throw new _0x170eaf.ErrnoError(8);
        }
        if ((_0x5e214f.flags & 2097155) === 0) {
          throw new _0x170eaf.ErrnoError(8);
        }
        if (_0x170eaf.isDir(_0x5e214f.node.mode)) {
          throw new _0x170eaf.ErrnoError(31);
        }
        if (!_0x5e214f.stream_ops.write) {
          throw new _0x170eaf.ErrnoError(28);
        }
        if (_0x5e214f.seekable && _0x5e214f.flags & 1024) {
          _0x170eaf.llseek(_0x5e214f, 0, 2);
        }
        var _0x16309d = typeof _0x557e06 != "undefined";
        if (!_0x16309d) {
          _0x557e06 = _0x5e214f.position;
        } else if (!_0x5e214f.seekable) {
          throw new _0x170eaf.ErrnoError(70);
        }
        var _0x28d6fa = _0x5e214f.stream_ops.write(_0x5e214f, _0x12c951, _0x429b4e, _0x219fe6, _0x557e06, _0x541529);
        if (!_0x16309d) {
          _0x5e214f.position += _0x28d6fa;
        }
        return _0x28d6fa;
      },
      allocate: (_0x1685a6, _0x472922, _0x113d0d) => {
        if (_0x170eaf.isClosed(_0x1685a6)) {
          throw new _0x170eaf.ErrnoError(8);
        }
        if (_0x472922 < 0 || _0x113d0d <= 0) {
          throw new _0x170eaf.ErrnoError(28);
        }
        if ((_0x1685a6.flags & 2097155) === 0) {
          throw new _0x170eaf.ErrnoError(8);
        }
        if (!_0x170eaf.isFile(_0x1685a6.node.mode) && !_0x170eaf.isDir(_0x1685a6.node.mode)) {
          throw new _0x170eaf.ErrnoError(43);
        }
        if (!_0x1685a6.stream_ops.allocate) {
          throw new _0x170eaf.ErrnoError(138);
        }
        _0x1685a6.stream_ops.allocate(_0x1685a6, _0x472922, _0x113d0d);
      },
      mmap: (_0x7b1df9, _0x5f22b6, _0x2410d0, _0x117301, _0x42df07, _0x137001) => {
        if ((_0x42df07 & 2) !== 0 && (_0x137001 & 2) === 0 && (_0x7b1df9.flags & 2097155) !== 2) {
          throw new _0x170eaf.ErrnoError(2);
        }
        if ((_0x7b1df9.flags & 2097155) === 1) {
          throw new _0x170eaf.ErrnoError(2);
        }
        if (!_0x7b1df9.stream_ops.mmap) {
          throw new _0x170eaf.ErrnoError(43);
        }
        return _0x7b1df9.stream_ops.mmap(_0x7b1df9, _0x5f22b6, _0x2410d0, _0x117301, _0x42df07, _0x137001);
      },
      msync: (_0x2e5320, _0x4b15e1, _0x15f7a9, _0x4fbee2, _0x34a3b1) => {
        if (!_0x2e5320 || !_0x2e5320.stream_ops.msync) {
          return 0;
        }
        return _0x2e5320.stream_ops.msync(_0x2e5320, _0x4b15e1, _0x15f7a9, _0x4fbee2, _0x34a3b1);
      },
      munmap: _0x1240c5 => 0,
      ioctl: (_0x174d82, _0x364195, _0x51637c) => {
        if (!_0x174d82.stream_ops.ioctl) {
          throw new _0x170eaf.ErrnoError(59);
        }
        return _0x174d82.stream_ops.ioctl(_0x174d82, _0x364195, _0x51637c);
      },
      readFile: (_0x2aa587, _0x85400c = {}) => {
        _0x85400c.flags = _0x85400c.flags || 0;
        _0x85400c.encoding = _0x85400c.encoding || "binary";
        if (_0x85400c.encoding !== "utf8" && _0x85400c.encoding !== "binary") {
          throw new Error("Invalid encoding type \"" + _0x85400c.encoding + "\"");
        }
        var _0x1effc7;
        var _0x1328a5 = _0x170eaf.open(_0x2aa587, _0x85400c.flags);
        var _0x240705 = _0x170eaf.stat(_0x2aa587);
        var _0x11ba06 = _0x240705.size;
        var _0x52ae9d = new Uint8Array(_0x11ba06);
        _0x170eaf.read(_0x1328a5, _0x52ae9d, 0, _0x11ba06, 0);
        if (_0x85400c.encoding === "utf8") {
          _0x1effc7 = _0x519ea2(_0x52ae9d, 0);
        } else if (_0x85400c.encoding === "binary") {
          _0x1effc7 = _0x52ae9d;
        }
        _0x170eaf.close(_0x1328a5);
        return _0x1effc7;
      },
      writeFile: (_0x567de9, _0x2a7a41, _0x2d3de7 = {}) => {
        _0x2d3de7.flags = _0x2d3de7.flags || 577;
        var _0x36c5fb = _0x170eaf.open(_0x567de9, _0x2d3de7.flags, _0x2d3de7.mode);
        if (typeof _0x2a7a41 == "string") {
          var _0x2e08ba = new Uint8Array(_0x3b9e6b(_0x2a7a41) + 1);
          var _0xedc6db = _0x42519a(_0x2a7a41, _0x2e08ba, 0, _0x2e08ba.length);
          _0x170eaf.write(_0x36c5fb, _0x2e08ba, 0, _0xedc6db, undefined, _0x2d3de7.canOwn);
        } else if (ArrayBuffer.isView(_0x2a7a41)) {
          _0x170eaf.write(_0x36c5fb, _0x2a7a41, 0, _0x2a7a41.byteLength, undefined, _0x2d3de7.canOwn);
        } else {
          throw new Error("Unsupported data type");
        }
        _0x170eaf.close(_0x36c5fb);
      },
      cwd: () => _0x170eaf.currentPath,
      chdir: _0x21a8e7 => {
        var _0x5aaaf0 = _0x170eaf.lookupPath(_0x21a8e7, {
          follow: true
        });
        if (_0x5aaaf0.node === null) {
          throw new _0x170eaf.ErrnoError(44);
        }
        if (!_0x170eaf.isDir(_0x5aaaf0.node.mode)) {
          throw new _0x170eaf.ErrnoError(54);
        }
        var _0x5dff70 = _0x170eaf.nodePermissions(_0x5aaaf0.node, "x");
        if (_0x5dff70) {
          throw new _0x170eaf.ErrnoError(_0x5dff70);
        }
        _0x170eaf.currentPath = _0x5aaaf0.path;
      },
      createDefaultDirectories: () => {
        _0x170eaf.mkdir("/tmp");
        _0x170eaf.mkdir("/home");
        _0x170eaf.mkdir("/home/web_user");
      },
      createDefaultDevices: () => {
        _0x170eaf.mkdir("/dev");
        _0x170eaf.registerDevice(_0x170eaf.makedev(1, 3), {
          read: () => 0,
          write: (_0x25e6e9, _0x2e2788, _0x59d115, _0x12963b, _0x40fec4) => _0x12963b
        });
        _0x170eaf.mkdev("/dev/null", _0x170eaf.makedev(1, 3));
        _0x575e98.register(_0x170eaf.makedev(5, 0), _0x575e98.default_tty_ops);
        _0x575e98.register(_0x170eaf.makedev(6, 0), _0x575e98.default_tty1_ops);
        _0x170eaf.mkdev("/dev/tty", _0x170eaf.makedev(5, 0));
        _0x170eaf.mkdev("/dev/tty1", _0x170eaf.makedev(6, 0));
        var _0x2749a7 = _0x58afd1();
        _0x170eaf.createDevice("/dev", "random", _0x2749a7);
        _0x170eaf.createDevice("/dev", "urandom", _0x2749a7);
        _0x170eaf.mkdir("/dev/shm");
        _0x170eaf.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories: () => {
        _0x170eaf.mkdir("/proc");
        var _0x4754f2 = _0x170eaf.mkdir("/proc/self");
        _0x170eaf.mkdir("/proc/self/fd");
        _0x170eaf.mount({
          mount: () => {
            var _0x121be1 = _0x170eaf.createNode(_0x4754f2, "fd", 16895, 73);
            _0x121be1.node_ops = {
              lookup: (_0x5a284c, _0x357005) => {
                var _0xf4aceb = +_0x357005;
                var _0x2f89e7 = _0x170eaf.getStream(_0xf4aceb);
                if (!_0x2f89e7) {
                  throw new _0x170eaf.ErrnoError(8);
                }
                var _0x31c31c = {
                  parent: null,
                  mount: {
                    mountpoint: "fake"
                  },
                  node_ops: {
                    readlink: () => _0x2f89e7.path
                  }
                };
                _0x31c31c.parent = _0x31c31c;
                return _0x31c31c;
              }
            };
            return _0x121be1;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams: () => {
        if (_0x1d435e.stdin) {
          _0x170eaf.createDevice("/dev", "stdin", _0x1d435e.stdin);
        } else {
          _0x170eaf.symlink("/dev/tty", "/dev/stdin");
        }
        if (_0x1d435e.stdout) {
          _0x170eaf.createDevice("/dev", "stdout", null, _0x1d435e.stdout);
        } else {
          _0x170eaf.symlink("/dev/tty", "/dev/stdout");
        }
        if (_0x1d435e.stderr) {
          _0x170eaf.createDevice("/dev", "stderr", null, _0x1d435e.stderr);
        } else {
          _0x170eaf.symlink("/dev/tty1", "/dev/stderr");
        }
        var _0x1bdce6 = _0x170eaf.open("/dev/stdin", 0);
        var _0x243dec = _0x170eaf.open("/dev/stdout", 1);
        var _0x14cd77 = _0x170eaf.open("/dev/stderr", 1);
      },
      ensureErrnoError: () => {
        if (_0x170eaf.ErrnoError) {
          return;
        }
        _0x170eaf.ErrnoError = function _0x16bbb7(_0x10c89b, _0x148dcf) {
          this.node = _0x148dcf;
          this.setErrno = function (_0x1591df) {
            this.errno = _0x1591df;
          };
          this.setErrno(_0x10c89b);
          this.message = "FS error";
        };
        _0x170eaf.ErrnoError.prototype = new Error();
        _0x170eaf.ErrnoError.prototype.constructor = _0x170eaf.ErrnoError;
        [44].forEach(_0x24f64a => {
          _0x170eaf.genericErrors[_0x24f64a] = new _0x170eaf.ErrnoError(_0x24f64a);
          _0x170eaf.genericErrors[_0x24f64a].stack = "<generic error, no stack>";
        });
      },
      staticInit: () => {
        _0x170eaf.ensureErrnoError();
        _0x170eaf.nameTable = new Array(4096);
        _0x170eaf.mount(_0x36df50, {}, "/");
        _0x170eaf.createDefaultDirectories();
        _0x170eaf.createDefaultDevices();
        _0x170eaf.createSpecialDirectories();
        _0x170eaf.filesystems = {
          MEMFS: _0x36df50,
          IDBFS: _0x4082a3
        };
      },
      init: (_0x4400a6, _0x28f3eb, _0x1ebdad) => {
        _0x170eaf.init.initialized = true;
        _0x170eaf.ensureErrnoError();
        _0x1d435e.stdin = _0x4400a6 || _0x1d435e.stdin;
        _0x1d435e.stdout = _0x28f3eb || _0x1d435e.stdout;
        _0x1d435e.stderr = _0x1ebdad || _0x1d435e.stderr;
        _0x170eaf.createStandardStreams();
      },
      quit: () => {
        _0x170eaf.init.initialized = false;
        for (var _0x591f25 = 0; _0x591f25 < _0x170eaf.streams.length; _0x591f25++) {
          var _0x423ce7 = _0x170eaf.streams[_0x591f25];
          if (!_0x423ce7) {
            continue;
          }
          _0x170eaf.close(_0x423ce7);
        }
      },
      getMode: (_0x783df5, _0x66e429) => {
        var _0x45a9ef = 0;
        if (_0x783df5) {
          _0x45a9ef |= 365;
        }
        if (_0x66e429) {
          _0x45a9ef |= 146;
        }
        return _0x45a9ef;
      },
      findObject: (_0x2ddbe7, _0xe4d861) => {
        var _0x418345 = _0x170eaf.analyzePath(_0x2ddbe7, _0xe4d861);
        if (_0x418345.exists) {
          return _0x418345.object;
        } else {
          return null;
        }
      },
      analyzePath: (_0x1a5002, _0x544ba2) => {
        try {
          var _0x5cf302 = _0x170eaf.lookupPath(_0x1a5002, {
            follow: !_0x544ba2
          });
          _0x1a5002 = _0x5cf302.path;
        } catch (_0x11ae65) {}
        var _0x34615c = {
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
          var _0x5cf302 = _0x170eaf.lookupPath(_0x1a5002, {
            parent: true
          });
          _0x34615c.parentExists = true;
          _0x34615c.parentPath = _0x5cf302.path;
          _0x34615c.parentObject = _0x5cf302.node;
          _0x34615c.name = _0x59b6ba.basename(_0x1a5002);
          _0x5cf302 = _0x170eaf.lookupPath(_0x1a5002, {
            follow: !_0x544ba2
          });
          _0x34615c.exists = true;
          _0x34615c.path = _0x5cf302.path;
          _0x34615c.object = _0x5cf302.node;
          _0x34615c.name = _0x5cf302.node.name;
          _0x34615c.isRoot = _0x5cf302.path === "/";
        } catch (_0x2a0c4b) {
          _0x34615c.error = _0x2a0c4b.errno;
        }
        return _0x34615c;
      },
      createPath: (_0x187d5d, _0x4ff479, _0xcf569f, _0x390091) => {
        _0x187d5d = typeof _0x187d5d == "string" ? _0x187d5d : _0x170eaf.getPath(_0x187d5d);
        var _0xc06f1b = _0x4ff479.split("/").reverse();
        while (_0xc06f1b.length) {
          var _0x182acb = _0xc06f1b.pop();
          if (!_0x182acb) {
            continue;
          }
          var _0x2798a1 = _0x59b6ba.join2(_0x187d5d, _0x182acb);
          try {
            _0x170eaf.mkdir(_0x2798a1);
          } catch (_0x5b8cde) {}
          _0x187d5d = _0x2798a1;
        }
        return _0x2798a1;
      },
      createFile: (_0x4837b1, _0x2ece5c, _0x117fce, _0x5eed06, _0x3cac78) => {
        var _0x483f7b = _0x59b6ba.join2(typeof _0x4837b1 == "string" ? _0x4837b1 : _0x170eaf.getPath(_0x4837b1), _0x2ece5c);
        var _0x56fd5d = _0x170eaf.getMode(_0x5eed06, _0x3cac78);
        return _0x170eaf.create(_0x483f7b, _0x56fd5d);
      },
      createDataFile: (_0x2f31fd, _0x400a00, _0x36e910, _0x39edab, _0x602c6c, _0x1d61c6) => {
        var _0x13ebc4 = _0x400a00;
        if (_0x2f31fd) {
          _0x2f31fd = typeof _0x2f31fd == "string" ? _0x2f31fd : _0x170eaf.getPath(_0x2f31fd);
          _0x13ebc4 = _0x400a00 ? _0x59b6ba.join2(_0x2f31fd, _0x400a00) : _0x2f31fd;
        }
        var _0x3bcfb3 = _0x170eaf.getMode(_0x39edab, _0x602c6c);
        var _0x3b8c67 = _0x170eaf.create(_0x13ebc4, _0x3bcfb3);
        if (_0x36e910) {
          if (typeof _0x36e910 == "string") {
            var _0x51b628 = new Array(_0x36e910.length);
            for (var _0x22d4e0 = 0, _0x591a60 = _0x36e910.length; _0x22d4e0 < _0x591a60; ++_0x22d4e0) {
              _0x51b628[_0x22d4e0] = _0x36e910.charCodeAt(_0x22d4e0);
            }
            _0x36e910 = _0x51b628;
          }
          _0x170eaf.chmod(_0x3b8c67, _0x3bcfb3 | 146);
          var _0x151449 = _0x170eaf.open(_0x3b8c67, 577);
          _0x170eaf.write(_0x151449, _0x36e910, 0, _0x36e910.length, 0, _0x1d61c6);
          _0x170eaf.close(_0x151449);
          _0x170eaf.chmod(_0x3b8c67, _0x3bcfb3);
        }
        return _0x3b8c67;
      },
      createDevice: (_0x35596c, _0x10f03f, _0x560799, _0x414e0e) => {
        var _0x39e05c = _0x59b6ba.join2(typeof _0x35596c == "string" ? _0x35596c : _0x170eaf.getPath(_0x35596c), _0x10f03f);
        var _0x19737c = _0x170eaf.getMode(!!_0x560799, !!_0x414e0e);
        if (!_0x170eaf.createDevice.major) {
          _0x170eaf.createDevice.major = 64;
        }
        var _0x17a04b = _0x170eaf.makedev(_0x170eaf.createDevice.major++, 0);
        _0x170eaf.registerDevice(_0x17a04b, {
          open: _0x3eec40 => {
            _0x3eec40.seekable = false;
          },
          close: _0xae88f6 => {
            if (_0x414e0e && _0x414e0e.buffer && _0x414e0e.buffer.length) {
              _0x414e0e(10);
            }
          },
          read: (_0xe0a7b6, _0x49bfce, _0xffa0aa, _0x1bebe9, _0x150e71) => {
            var _0x112742 = 0;
            for (var _0x316022 = 0; _0x316022 < _0x1bebe9; _0x316022++) {
              var _0x3d2061;
              try {
                _0x3d2061 = _0x560799();
              } catch (_0x8f7e25) {
                throw new _0x170eaf.ErrnoError(29);
              }
              if (_0x3d2061 === undefined && _0x112742 === 0) {
                throw new _0x170eaf.ErrnoError(6);
              }
              if (_0x3d2061 === null || _0x3d2061 === undefined) {
                break;
              }
              _0x112742++;
              _0x49bfce[_0xffa0aa + _0x316022] = _0x3d2061;
            }
            if (_0x112742) {
              _0xe0a7b6.node.timestamp = Date.now();
            }
            return _0x112742;
          },
          write: (_0x5d082a, _0x4c65c2, _0x1da496, _0x1a0ad4, _0x2d5277) => {
            for (var _0x419f70 = 0; _0x419f70 < _0x1a0ad4; _0x419f70++) {
              try {
                _0x414e0e(_0x4c65c2[_0x1da496 + _0x419f70]);
              } catch (_0x4c89c3) {
                throw new _0x170eaf.ErrnoError(29);
              }
            }
            if (_0x1a0ad4) {
              _0x5d082a.node.timestamp = Date.now();
            }
            return _0x419f70;
          }
        });
        return _0x170eaf.mkdev(_0x39e05c, _0x19737c, _0x17a04b);
      },
      forceLoadFile: _0x5259af => {
        if (_0x5259af.isDevice || _0x5259af.isFolder || _0x5259af.link || _0x5259af.contents) {
          return true;
        }
        if (typeof XMLHttpRequest != "undefined") {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (_0x48418f) {
          try {
            _0x5259af.contents = _0x28f5f4(_0x48418f(_0x5259af.url), true);
            _0x5259af.usedBytes = _0x5259af.contents.length;
          } catch (_0x1dbf86) {
            throw new _0x170eaf.ErrnoError(29);
          }
        } else {
          throw new Error("Cannot load without read() or XMLHttpRequest.");
        }
      },
      createLazyFile: (_0x1ec58c, _0x123dfd, _0x330386, _0x401c19, _0x35bbf9) => {
        function _0x2cff7f() {
          this.lengthKnown = false;
          this.chunks = [];
        }
        _0x2cff7f.prototype.get = function _0x3227f1(_0x5350bb) {
          if (_0x5350bb > this.length - 1 || _0x5350bb < 0) {
            return undefined;
          }
          var _0x2dc8e1 = _0x5350bb % this.chunkSize;
          var _0x745067 = _0x5350bb / this.chunkSize | 0;
          return this.getter(_0x745067)[_0x2dc8e1];
        };
        _0x2cff7f.prototype.setDataGetter = function _0x4880f3(_0x268ee1) {
          this.getter = _0x268ee1;
        };
        _0x2cff7f.prototype.cacheLength = function _0x24ef1c() {
          var _0x717cfc = new XMLHttpRequest();
          _0x717cfc.open("HEAD", _0x330386, false);
          _0x717cfc.send(null);
          if ((!(_0x717cfc.status >= 200) || !(_0x717cfc.status < 300)) && _0x717cfc.status !== 304) {
            throw new Error("Couldn't load " + _0x330386 + ". Status: " + _0x717cfc.status);
          }
          var _0x217811 = Number(_0x717cfc.getResponseHeader("Content-length"));
          var _0x202e87;
          var _0x20d498 = (_0x202e87 = _0x717cfc.getResponseHeader("Accept-Ranges")) && _0x202e87 === "bytes";
          var _0x22cb60 = (_0x202e87 = _0x717cfc.getResponseHeader("Content-Encoding")) && _0x202e87 === "gzip";
          var _0x484a4b = 1048576;
          if (!_0x20d498) {
            _0x484a4b = _0x217811;
          }
          var _0x2224f4 = (_0x3059ca, _0x2a7a35) => {
            if (_0x3059ca > _0x2a7a35) {
              throw new Error("invalid range (" + _0x3059ca + ", " + _0x2a7a35 + ") or no bytes requested!");
            }
            if (_0x2a7a35 > _0x217811 - 1) {
              throw new Error("only " + _0x217811 + " bytes available! programmer error!");
            }
            var _0x4ef96b = new XMLHttpRequest();
            _0x4ef96b.open("GET", _0x330386, false);
            if (_0x217811 !== _0x484a4b) {
              _0x4ef96b.setRequestHeader("Range", "bytes=" + _0x3059ca + "-" + _0x2a7a35);
            }
            _0x4ef96b.responseType = "arraybuffer";
            if (_0x4ef96b.overrideMimeType) {
              _0x4ef96b.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x4ef96b.send(null);
            if ((!(_0x4ef96b.status >= 200) || !(_0x4ef96b.status < 300)) && _0x4ef96b.status !== 304) {
              throw new Error("Couldn't load " + _0x330386 + ". Status: " + _0x4ef96b.status);
            }
            if (_0x4ef96b.response !== undefined) {
              return new Uint8Array(_0x4ef96b.response || []);
            } else {
              return _0x28f5f4(_0x4ef96b.responseText || "", true);
            }
          };
          var _0x5c866c = this;
          _0x5c866c.setDataGetter(_0x4d5c36 => {
            var _0x5f0436 = _0x4d5c36 * _0x484a4b;
            var _0x4d2f3e = (_0x4d5c36 + 1) * _0x484a4b - 1;
            _0x4d2f3e = Math.min(_0x4d2f3e, _0x217811 - 1);
            if (typeof _0x5c866c.chunks[_0x4d5c36] == "undefined") {
              _0x5c866c.chunks[_0x4d5c36] = _0x2224f4(_0x5f0436, _0x4d2f3e);
            }
            if (typeof _0x5c866c.chunks[_0x4d5c36] == "undefined") {
              throw new Error("doXHR failed!");
            }
            return _0x5c866c.chunks[_0x4d5c36];
          });
          if (_0x22cb60 || !_0x217811) {
            _0x484a4b = _0x217811 = 1;
            _0x217811 = this.getter(0).length;
            _0x484a4b = _0x217811;
            _0x29c873("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
          this._length = _0x217811;
          this._chunkSize = _0x484a4b;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != "undefined") {
          if (!_0x3b4bc3) {
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          }
          var _0x1c1b84 = new _0x2cff7f();
          Object.defineProperties(_0x1c1b84, {
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
          var _0x5481dc = {
            isDevice: false,
            contents: _0x1c1b84
          };
        } else {
          var _0x5481dc = {
            isDevice: false,
            url: _0x330386
          };
        }
        var _0x331122 = _0x170eaf.createFile(_0x1ec58c, _0x123dfd, _0x5481dc, _0x401c19, _0x35bbf9);
        if (_0x5481dc.contents) {
          _0x331122.contents = _0x5481dc.contents;
        } else if (_0x5481dc.url) {
          _0x331122.contents = null;
          _0x331122.url = _0x5481dc.url;
        }
        Object.defineProperties(_0x331122, {
          usedBytes: {
            get: function () {
              return this.contents.length;
            }
          }
        });
        var _0x1e6d58 = {};
        var _0x1a45bf = Object.keys(_0x331122.stream_ops);
        _0x1a45bf.forEach(_0xcb5e77 => {
          var _0x5600e4 = _0x331122.stream_ops[_0xcb5e77];
          _0x1e6d58[_0xcb5e77] = function _0x391ba8() {
            _0x170eaf.forceLoadFile(_0x331122);
            return _0x5600e4.apply(null, arguments);
          };
        });
        _0x1e6d58.read = (_0x4cff4f, _0x1c5a74, _0x9b6c03, _0x400dea, _0x15b798) => {
          _0x170eaf.forceLoadFile(_0x331122);
          var _0x1fc55d = _0x4cff4f.node.contents;
          if (_0x15b798 >= _0x1fc55d.length) {
            return 0;
          }
          var _0x4d083f = Math.min(_0x1fc55d.length - _0x15b798, _0x400dea);
          if (_0x1fc55d.slice) {
            for (var _0x51ce59 = 0; _0x51ce59 < _0x4d083f; _0x51ce59++) {
              _0x1c5a74[_0x9b6c03 + _0x51ce59] = _0x1fc55d[_0x15b798 + _0x51ce59];
            }
          } else {
            for (var _0x51ce59 = 0; _0x51ce59 < _0x4d083f; _0x51ce59++) {
              _0x1c5a74[_0x9b6c03 + _0x51ce59] = _0x1fc55d.get(_0x15b798 + _0x51ce59);
            }
          }
          return _0x4d083f;
        };
        _0x331122.stream_ops = _0x1e6d58;
        return _0x331122;
      },
      createPreloadedFile: (_0x40bf5c, _0x28d947, _0x509870, _0x54bccf, _0x299817, _0x305346, _0xb4ef72, _0x3e739d, _0x234770, _0x3a4cbc) => {
        var _0x96630f = _0x28d947 ? _0x1c9931.resolve(_0x59b6ba.join2(_0x40bf5c, _0x28d947)) : _0x40bf5c;
        var _0x1231b8 = _0x1000c1("cp " + _0x96630f);
        function _0x3cb092(_0x918247) {
          function _0x37769d(_0x3f829a) {
            if (_0x3a4cbc) {
              _0x3a4cbc();
            }
            if (!_0x3e739d) {
              _0x170eaf.createDataFile(_0x40bf5c, _0x28d947, _0x3f829a, _0x54bccf, _0x299817, _0x234770);
            }
            if (_0x305346) {
              _0x305346();
            }
            _0x38c345(_0x1231b8);
          }
          if (_0x4b83e4.handledByPreloadPlugin(_0x918247, _0x96630f, _0x37769d, () => {
            if (_0xb4ef72) {
              _0xb4ef72();
            }
            _0x38c345(_0x1231b8);
          })) {
            return;
          }
          _0x37769d(_0x918247);
        }
        _0x2a6f7b(_0x1231b8);
        if (typeof _0x509870 == "string") {
          _0x2e8b46(_0x509870, _0x4cbd62 => _0x3cb092(_0x4cbd62), _0xb4ef72);
        } else {
          _0x3cb092(_0x509870);
        }
      },
      indexedDB: () => {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },
      DB_NAME: () => {
        return "EM_FS_" + window.location.pathname;
      },
      DB_VERSION: 20,
      DB_STORE_NAME: "FILE_DATA",
      saveFilesToDB: (_0x3cd06b, _0x5e20c5, _0x5e271e) => {
        _0x5e20c5 = _0x5e20c5 || (() => {});
        _0x5e271e = _0x5e271e || (() => {});
        var _0x322375 = _0x170eaf.indexedDB();
        try {
          var _0x49eb2f = _0x322375.open(_0x170eaf.DB_NAME(), _0x170eaf.DB_VERSION);
        } catch (_0x199bce) {
          return _0x5e271e(_0x199bce);
        }
        _0x49eb2f.onupgradeneeded = () => {
          _0x29c873("creating db");
          var _0x20f05e = _0x49eb2f.result;
          _0x20f05e.createObjectStore(_0x170eaf.DB_STORE_NAME);
        };
        _0x49eb2f.onsuccess = () => {
          var _0x4bb09e = _0x49eb2f.result;
          var _0x364856 = _0x4bb09e.transaction([_0x170eaf.DB_STORE_NAME], "readwrite");
          var _0x392726 = _0x364856.objectStore(_0x170eaf.DB_STORE_NAME);
          var _0x2e3739 = 0;
          var _0x185913 = 0;
          var _0x5ea70d = _0x3cd06b.length;
          function _0x3da7cd() {
            if (_0x185913 == 0) {
              _0x5e20c5();
            } else {
              _0x5e271e();
            }
          }
          _0x3cd06b.forEach(_0x44082a => {
            var _0x105f38 = _0x392726.put(_0x170eaf.analyzePath(_0x44082a).object.contents, _0x44082a);
            _0x105f38.onsuccess = () => {
              _0x2e3739++;
              if (_0x2e3739 + _0x185913 == _0x5ea70d) {
                _0x3da7cd();
              }
            };
            _0x105f38.onerror = () => {
              _0x185913++;
              if (_0x2e3739 + _0x185913 == _0x5ea70d) {
                _0x3da7cd();
              }
            };
          });
          _0x364856.onerror = _0x5e271e;
        };
        _0x49eb2f.onerror = _0x5e271e;
      },
      loadFilesFromDB: (_0x409713, _0x19e0d9, _0x1cb8ed) => {
        _0x19e0d9 = _0x19e0d9 || (() => {});
        _0x1cb8ed = _0x1cb8ed || (() => {});
        var _0x37a512 = _0x170eaf.indexedDB();
        try {
          var _0x4953e7 = _0x37a512.open(_0x170eaf.DB_NAME(), _0x170eaf.DB_VERSION);
        } catch (_0x28f5ad) {
          return _0x1cb8ed(_0x28f5ad);
        }
        _0x4953e7.onupgradeneeded = _0x1cb8ed;
        _0x4953e7.onsuccess = () => {
          var _0x35c069 = _0x4953e7.result;
          try {
            var _0x19f186 = _0x35c069.transaction([_0x170eaf.DB_STORE_NAME], "readonly");
          } catch (_0x1dc788) {
            _0x1cb8ed(_0x1dc788);
            return;
          }
          var _0x7b9c34 = _0x19f186.objectStore(_0x170eaf.DB_STORE_NAME);
          var _0x24af60 = 0;
          var _0x1a1ac1 = 0;
          var _0x45c92b = _0x409713.length;
          function _0x1e22b8() {
            if (_0x1a1ac1 == 0) {
              _0x19e0d9();
            } else {
              _0x1cb8ed();
            }
          }
          _0x409713.forEach(_0x45d862 => {
            var _0x5611b7 = _0x7b9c34.get(_0x45d862);
            _0x5611b7.onsuccess = () => {
              if (_0x170eaf.analyzePath(_0x45d862).exists) {
                _0x170eaf.unlink(_0x45d862);
              }
              _0x170eaf.createDataFile(_0x59b6ba.dirname(_0x45d862), _0x59b6ba.basename(_0x45d862), _0x5611b7.result, true, true, true);
              _0x24af60++;
              if (_0x24af60 + _0x1a1ac1 == _0x45c92b) {
                _0x1e22b8();
              }
            };
            _0x5611b7.onerror = () => {
              _0x1a1ac1++;
              if (_0x24af60 + _0x1a1ac1 == _0x45c92b) {
                _0x1e22b8();
              }
            };
          });
          _0x19f186.onerror = _0x1cb8ed;
        };
        _0x4953e7.onerror = _0x1cb8ed;
      }
    };
    var _0x1162f4 = {
      DEFAULT_POLLMASK: 5,
      calculateAt: function (_0x27a4da, _0xa8dcb3, _0xebcd3c) {
        if (_0xa8dcb3[0] === "/") {
          return _0xa8dcb3;
        }
        var _0x1b1879;
        if (_0x27a4da === -100) {
          _0x1b1879 = _0x170eaf.cwd();
        } else {
          var _0x18ca4a = _0x170eaf.getStream(_0x27a4da);
          if (!_0x18ca4a) {
            throw new _0x170eaf.ErrnoError(8);
          }
          _0x1b1879 = _0x18ca4a.path;
        }
        if (_0xa8dcb3.length == 0) {
          if (!_0xebcd3c) {
            throw new _0x170eaf.ErrnoError(44);
          }
          return _0x1b1879;
        }
        return _0x59b6ba.join2(_0x1b1879, _0xa8dcb3);
      },
      doStat: function (_0x3c6943, _0x5d4c80, _0x50d307) {
        try {
          var _0x2c30e0 = _0x3c6943(_0x5d4c80);
        } catch (_0x522f45) {
          if (_0x522f45 && _0x522f45.node && _0x59b6ba.normalize(_0x5d4c80) !== _0x59b6ba.normalize(_0x170eaf.getPath(_0x522f45.node))) {
            return -54;
          }
          throw _0x522f45;
        }
        _0x588032[_0x50d307 >> 2] = _0x2c30e0.dev;
        _0x588032[_0x50d307 + 4 >> 2] = 0;
        _0x588032[_0x50d307 + 8 >> 2] = _0x2c30e0.ino;
        _0x588032[_0x50d307 + 12 >> 2] = _0x2c30e0.mode;
        _0x588032[_0x50d307 + 16 >> 2] = _0x2c30e0.nlink;
        _0x588032[_0x50d307 + 20 >> 2] = _0x2c30e0.uid;
        _0x588032[_0x50d307 + 24 >> 2] = _0x2c30e0.gid;
        _0x588032[_0x50d307 + 28 >> 2] = _0x2c30e0.rdev;
        _0x588032[_0x50d307 + 32 >> 2] = 0;
        _0x2b7c5d = [_0x2c30e0.size >>> 0, (_0x396169 = _0x2c30e0.size, +Math.abs(_0x396169) >= 1 ? _0x396169 > 0 ? (Math.min(+Math.floor(_0x396169 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x396169 - +(~~_0x396169 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x588032[_0x50d307 + 40 >> 2] = _0x2b7c5d[0];
        _0x588032[_0x50d307 + 44 >> 2] = _0x2b7c5d[1];
        _0x588032[_0x50d307 + 48 >> 2] = 4096;
        _0x588032[_0x50d307 + 52 >> 2] = _0x2c30e0.blocks;
        _0x588032[_0x50d307 + 56 >> 2] = _0x2c30e0.atime.getTime() / 1000 | 0;
        _0x588032[_0x50d307 + 60 >> 2] = 0;
        _0x588032[_0x50d307 + 64 >> 2] = _0x2c30e0.mtime.getTime() / 1000 | 0;
        _0x588032[_0x50d307 + 68 >> 2] = 0;
        _0x588032[_0x50d307 + 72 >> 2] = _0x2c30e0.ctime.getTime() / 1000 | 0;
        _0x588032[_0x50d307 + 76 >> 2] = 0;
        _0x2b7c5d = [_0x2c30e0.ino >>> 0, (_0x396169 = _0x2c30e0.ino, +Math.abs(_0x396169) >= 1 ? _0x396169 > 0 ? (Math.min(+Math.floor(_0x396169 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x396169 - +(~~_0x396169 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x588032[_0x50d307 + 80 >> 2] = _0x2b7c5d[0];
        _0x588032[_0x50d307 + 84 >> 2] = _0x2b7c5d[1];
        return 0;
      },
      doMsync: function (_0x5a1aca, _0x4c5d9c, _0x2bbeca, _0x3954d3, _0x5e2509) {
        var _0x4f674d = _0x5f38b4.slice(_0x5a1aca, _0x5a1aca + _0x2bbeca);
        _0x170eaf.msync(_0x4c5d9c, _0x4f674d, _0x5e2509, _0x2bbeca, _0x3954d3);
      },
      doMkdir: function (_0x9992aa, _0x13b724) {
        _0x9992aa = _0x59b6ba.normalize(_0x9992aa);
        if (_0x9992aa[_0x9992aa.length - 1] === "/") {
          _0x9992aa = _0x9992aa.substr(0, _0x9992aa.length - 1);
        }
        _0x170eaf.mkdir(_0x9992aa, _0x13b724, 0);
        return 0;
      },
      doMknod: function (_0x40a2c6, _0x142233, _0x630df1) {
        switch (_0x142233 & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default:
            return -28;
        }
        _0x170eaf.mknod(_0x40a2c6, _0x142233, _0x630df1);
        return 0;
      },
      doReadlink: function (_0x3119d4, _0x470cb3, _0x20618a) {
        if (_0x20618a <= 0) {
          return -28;
        }
        var _0x2df2a2 = _0x170eaf.readlink(_0x3119d4);
        var _0x2ddfb0 = Math.min(_0x20618a, _0x3b9e6b(_0x2df2a2));
        var _0x3b795d = _0x3f8e3d[_0x470cb3 + _0x2ddfb0];
        _0x17e527(_0x2df2a2, _0x470cb3, _0x20618a + 1);
        _0x3f8e3d[_0x470cb3 + _0x2ddfb0] = _0x3b795d;
        return _0x2ddfb0;
      },
      doAccess: function (_0x37b3aa, _0x499da6) {
        if (_0x499da6 & ~7) {
          return -28;
        }
        var _0x558a62 = _0x170eaf.lookupPath(_0x37b3aa, {
          follow: true
        });
        var _0x5124f1 = _0x558a62.node;
        if (!_0x5124f1) {
          return -44;
        }
        var _0xa436b7 = "";
        if (_0x499da6 & 4) {
          _0xa436b7 += "r";
        }
        if (_0x499da6 & 2) {
          _0xa436b7 += "w";
        }
        if (_0x499da6 & 1) {
          _0xa436b7 += "x";
        }
        if (_0xa436b7 && _0x170eaf.nodePermissions(_0x5124f1, _0xa436b7)) {
          return -2;
        }
        return 0;
      },
      doReadv: function (_0x5739c2, _0x3df0c4, _0x562b7c, _0x586f4d) {
        var _0x56fa12 = 0;
        for (var _0x1015c2 = 0; _0x1015c2 < _0x562b7c; _0x1015c2++) {
          var _0x503e5c = _0x588032[_0x3df0c4 + _0x1015c2 * 8 >> 2];
          var _0x2a4854 = _0x588032[_0x3df0c4 + (_0x1015c2 * 8 + 4) >> 2];
          var _0x44ced2 = _0x170eaf.read(_0x5739c2, _0x3f8e3d, _0x503e5c, _0x2a4854, _0x586f4d);
          if (_0x44ced2 < 0) {
            return -1;
          }
          _0x56fa12 += _0x44ced2;
          if (_0x44ced2 < _0x2a4854) {
            break;
          }
        }
        return _0x56fa12;
      },
      doWritev: function (_0x2a231e, _0x5390ea, _0x561492, _0x4b328c) {
        var _0x39705f = 0;
        for (var _0x3a601b = 0; _0x3a601b < _0x561492; _0x3a601b++) {
          var _0x1d84e9 = _0x588032[_0x5390ea + _0x3a601b * 8 >> 2];
          var _0x49eb0f = _0x588032[_0x5390ea + (_0x3a601b * 8 + 4) >> 2];
          var _0x44b7a6 = _0x170eaf.write(_0x2a231e, _0x3f8e3d, _0x1d84e9, _0x49eb0f, _0x4b328c);
          if (_0x44b7a6 < 0) {
            return -1;
          }
          _0x39705f += _0x44b7a6;
        }
        return _0x39705f;
      },
      varargs: undefined,
      get: function () {
        _0x1162f4.varargs += 4;
        var _0x51213c = _0x588032[_0x1162f4.varargs - 4 >> 2];
        return _0x51213c;
      },
      getStr: function (_0x369514) {
        var _0x252060 = _0x5eaf00(_0x369514);
        return _0x252060;
      },
      getStreamFromFD: function (_0x327947) {
        var _0x25b348 = _0x170eaf.getStream(_0x327947);
        if (!_0x25b348) {
          throw new _0x170eaf.ErrnoError(8);
        }
        return _0x25b348;
      },
      get64: function (_0x3e947e, _0x3f3375) {
        return _0x3e947e;
      }
    };
    function _0x5e3c7e(_0x3ac454, _0xbd7e2d, _0x2bcca0, _0x1363e0, _0x2442ad) {
      try {
        var _0x5b8ae7 = 0;
        var _0x14f1cc = _0xbd7e2d ? _0x588032[_0xbd7e2d >> 2] : 0;
        var _0x553ed3 = _0xbd7e2d ? _0x588032[_0xbd7e2d + 4 >> 2] : 0;
        var _0x5538cc = _0x2bcca0 ? _0x588032[_0x2bcca0 >> 2] : 0;
        var _0x54b144 = _0x2bcca0 ? _0x588032[_0x2bcca0 + 4 >> 2] : 0;
        var _0x51c413 = _0x1363e0 ? _0x588032[_0x1363e0 >> 2] : 0;
        var _0x5d29e1 = _0x1363e0 ? _0x588032[_0x1363e0 + 4 >> 2] : 0;
        var _0x32ae2f = 0;
        var _0x2825af = 0;
        var _0x10da32 = 0;
        var _0x574d85 = 0;
        var _0x2d8b51 = 0;
        var _0x1829d5 = 0;
        var _0x11e259 = (_0xbd7e2d ? _0x588032[_0xbd7e2d >> 2] : 0) | (_0x2bcca0 ? _0x588032[_0x2bcca0 >> 2] : 0) | (_0x1363e0 ? _0x588032[_0x1363e0 >> 2] : 0);
        var _0x4bb9bc = (_0xbd7e2d ? _0x588032[_0xbd7e2d + 4 >> 2] : 0) | (_0x2bcca0 ? _0x588032[_0x2bcca0 + 4 >> 2] : 0) | (_0x1363e0 ? _0x588032[_0x1363e0 + 4 >> 2] : 0);
        function _0x2c5fcb(_0x43a8e1, _0x42febb, _0x3be0a6, _0x15cbc2) {
          if (_0x43a8e1 < 32) {
            return _0x42febb & _0x15cbc2;
          } else {
            return _0x3be0a6 & _0x15cbc2;
          }
        }
        for (var _0x40489c = 0; _0x40489c < _0x3ac454; _0x40489c++) {
          var _0x183acc = 1 << _0x40489c % 32;
          if (!_0x2c5fcb(_0x40489c, _0x11e259, _0x4bb9bc, _0x183acc)) {
            continue;
          }
          var _0x30d675 = _0x170eaf.getStream(_0x40489c);
          if (!_0x30d675) {
            throw new _0x170eaf.ErrnoError(8);
          }
          var _0x2b0755 = _0x1162f4.DEFAULT_POLLMASK;
          if (_0x30d675.stream_ops.poll) {
            _0x2b0755 = _0x30d675.stream_ops.poll(_0x30d675);
          }
          if (_0x2b0755 & 1 && _0x2c5fcb(_0x40489c, _0x14f1cc, _0x553ed3, _0x183acc)) {
            if (_0x40489c < 32) {
              _0x32ae2f = _0x32ae2f | _0x183acc;
            } else {
              _0x2825af = _0x2825af | _0x183acc;
            }
            _0x5b8ae7++;
          }
          if (_0x2b0755 & 4 && _0x2c5fcb(_0x40489c, _0x5538cc, _0x54b144, _0x183acc)) {
            if (_0x40489c < 32) {
              _0x10da32 = _0x10da32 | _0x183acc;
            } else {
              _0x574d85 = _0x574d85 | _0x183acc;
            }
            _0x5b8ae7++;
          }
          if (_0x2b0755 & 2 && _0x2c5fcb(_0x40489c, _0x51c413, _0x5d29e1, _0x183acc)) {
            if (_0x40489c < 32) {
              _0x2d8b51 = _0x2d8b51 | _0x183acc;
            } else {
              _0x1829d5 = _0x1829d5 | _0x183acc;
            }
            _0x5b8ae7++;
          }
        }
        if (_0xbd7e2d) {
          _0x588032[_0xbd7e2d >> 2] = _0x32ae2f;
          _0x588032[_0xbd7e2d + 4 >> 2] = _0x2825af;
        }
        if (_0x2bcca0) {
          _0x588032[_0x2bcca0 >> 2] = _0x10da32;
          _0x588032[_0x2bcca0 + 4 >> 2] = _0x574d85;
        }
        if (_0x1363e0) {
          _0x588032[_0x1363e0 >> 2] = _0x2d8b51;
          _0x588032[_0x1363e0 + 4 >> 2] = _0x1829d5;
        }
        return _0x5b8ae7;
      } catch (_0x4286f8) {
        if (typeof _0x170eaf == "undefined" || !(_0x4286f8 instanceof _0x170eaf.ErrnoError)) {
          throw _0x4286f8;
        }
        return -_0x4286f8.errno;
      }
    }
    var _0xf1c28a = {
      mount: function (_0x35504a) {
        _0x1d435e.websocket = _0x1d435e.websocket && typeof _0x1d435e.websocket === "object" ? _0x1d435e.websocket : {};
        _0x1d435e.websocket._callbacks = {};
        _0x1d435e.websocket.on = function (_0x5defe1, _0x1fd4d6) {
          if (typeof _0x1fd4d6 === "function") {
            this._callbacks[_0x5defe1] = _0x1fd4d6;
          }
          return this;
        };
        _0x1d435e.websocket.emit = function (_0x4a6c2d, _0x55f05a) {
          if (typeof this._callbacks[_0x4a6c2d] === "function") {
            this._callbacks[_0x4a6c2d].call(this, _0x55f05a);
          }
        };
        return _0x170eaf.createNode(null, "/", 16895, 0);
      },
      createSocket: function (_0x5db267, _0x3728ad, _0x56a621) {
        _0x3728ad &= ~526336;
        var _0x127a27 = _0x3728ad == 1;
        if (_0x127a27 && _0x56a621 && _0x56a621 != 6) {
          throw new _0x170eaf.ErrnoError(66);
        }
        var _0x1eb032 = {
          family: _0x5db267,
          type: _0x3728ad,
          protocol: _0x56a621,
          server: null,
          error: null,
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: _0xf1c28a.websocket_sock_ops
        };
        var _0x48d739 = _0xf1c28a.nextname();
        var _0x243a25 = _0x170eaf.createNode(_0xf1c28a.root, _0x48d739, 49152, 0);
        _0x243a25.sock = _0x1eb032;
        var _0x52c0de = _0x170eaf.createStream({
          path: _0x48d739,
          node: _0x243a25,
          flags: 2,
          seekable: false,
          stream_ops: _0xf1c28a.stream_ops
        });
        _0x1eb032.stream = _0x52c0de;
        return _0x1eb032;
      },
      getSocket: function (_0x5cf05d) {
        var _0x5eb2ce = _0x170eaf.getStream(_0x5cf05d);
        if (!_0x5eb2ce || !_0x170eaf.isSocket(_0x5eb2ce.node.mode)) {
          return null;
        }
        return _0x5eb2ce.node.sock;
      },
      stream_ops: {
        poll: function (_0x5e7bea) {
          var _0xa6c91e = _0x5e7bea.node.sock;
          return _0xa6c91e.sock_ops.poll(_0xa6c91e);
        },
        ioctl: function (_0x413f5d, _0x148ee9, _0x1fd0f7) {
          var _0x2f9a25 = _0x413f5d.node.sock;
          return _0x2f9a25.sock_ops.ioctl(_0x2f9a25, _0x148ee9, _0x1fd0f7);
        },
        read: function (_0x433788, _0x521875, _0x43a365, _0x458344, _0x3dab58) {
          var _0x1a016f = _0x433788.node.sock;
          var _0x3a67d9 = _0x1a016f.sock_ops.recvmsg(_0x1a016f, _0x458344);
          if (!_0x3a67d9) {
            return 0;
          }
          _0x521875.set(_0x3a67d9.buffer, _0x43a365);
          return _0x3a67d9.buffer.length;
        },
        write: function (_0x49d633, _0x12e977, _0x413f86, _0x3fb89f, _0x5f4527) {
          var _0x4180a1 = _0x49d633.node.sock;
          return _0x4180a1.sock_ops.sendmsg(_0x4180a1, _0x12e977, _0x413f86, _0x3fb89f);
        },
        close: function (_0x2111e9) {
          var _0x267439 = _0x2111e9.node.sock;
          _0x267439.sock_ops.close(_0x267439);
        }
      },
      nextname: function () {
        if (!_0xf1c28a.nextname.current) {
          _0xf1c28a.nextname.current = 0;
        }
        return "socket[" + _0xf1c28a.nextname.current++ + "]";
      },
      websocket_sock_ops: {
        createPeer: function (_0x20e801, _0x212eaf, _0xd69441) {
          var _0x2c7077;
          if (typeof _0x212eaf == "object") {
            _0x2c7077 = _0x212eaf;
            _0x212eaf = null;
            _0xd69441 = null;
          }
          if (_0x2c7077) {
            if (_0x2c7077._socket) {
              _0x212eaf = _0x2c7077._socket.remoteAddress;
              _0xd69441 = _0x2c7077._socket.remotePort;
            } else {
              var _0x27fb3d = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x2c7077.url);
              if (!_0x27fb3d) {
                throw new Error("WebSocket URL must be in the format ws(s)://address:port");
              }
              _0x212eaf = _0x27fb3d[1];
              _0xd69441 = parseInt(_0x27fb3d[2], 10);
            }
          } else {
            try {
              var _0x13ad10 = _0x1d435e.websocket && typeof _0x1d435e.websocket === "object";
              var _0x33ecec = "ws:#".replace("#", "//");
              if (_0x13ad10) {
                if (typeof _0x1d435e.websocket.url === "string") {
                  _0x33ecec = _0x1d435e.websocket.url;
                }
              }
              if (_0x33ecec === "ws://" || _0x33ecec === "wss://") {
                var _0x1c52ab = _0x212eaf.split("/");
                _0x33ecec = _0x33ecec + _0x1c52ab[0] + ":" + _0xd69441 + "/" + _0x1c52ab.slice(1).join("/");
              }
              var _0x5275f3 = "binary";
              if (_0x13ad10) {
                if (typeof _0x1d435e.websocket.subprotocol === "string") {
                  _0x5275f3 = _0x1d435e.websocket.subprotocol;
                }
              }
              var _0x712a51 = undefined;
              if (_0x5275f3 !== "null") {
                _0x5275f3 = _0x5275f3.replace(/^ +| +$/g, "").split(/ *, */);
                _0x712a51 = _0x2d17f7 ? {
                  protocol: _0x5275f3.toString()
                } : _0x5275f3;
              }
              if (_0x13ad10 && _0x1d435e.websocket.subprotocol === null) {
                _0x5275f3 = "null";
                _0x712a51 = undefined;
              }
              var _0x10434d;
              if (_0x2d17f7) {
                _0x10434d = require("ws");
              } else {
                _0x10434d = WebSocket;
              }
              _0x2c7077 = new _0x10434d(_0x33ecec, _0x712a51);
              _0x2c7077.binaryType = "arraybuffer";
            } catch (_0x1541df) {
              throw new _0x170eaf.ErrnoError(23);
            }
          }
          var _0x79956d = {
            addr: _0x212eaf,
            port: _0xd69441,
            socket: _0x2c7077,
            dgram_send_queue: []
          };
          _0xf1c28a.websocket_sock_ops.addPeer(_0x20e801, _0x79956d);
          _0xf1c28a.websocket_sock_ops.handlePeerEvents(_0x20e801, _0x79956d);
          if (_0x20e801.type === 2 && typeof _0x20e801.sport != "undefined") {
            _0x79956d.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x20e801.sport & 65280) >> 8, _0x20e801.sport & 255]));
          }
          return _0x79956d;
        },
        getPeer: function (_0x55905d, _0x5676dc, _0x52ddb9) {
          return _0x55905d.peers[_0x5676dc + ":" + _0x52ddb9];
        },
        addPeer: function (_0x3d1fbb, _0x3cbafd) {
          _0x3d1fbb.peers[_0x3cbafd.addr + ":" + _0x3cbafd.port] = _0x3cbafd;
        },
        removePeer: function (_0x168157, _0x38c3ac) {
          delete _0x168157.peers[_0x38c3ac.addr + ":" + _0x38c3ac.port];
        },
        handlePeerEvents: function (_0x4b664e, _0x1d0467) {
          var _0x24b785 = true;
          function _0x54f94c() {
            _0x1d435e.websocket.emit("open", _0x4b664e.stream.fd);
            try {
              var _0xdfd03f = _0x1d0467.dgram_send_queue.shift();
              while (_0xdfd03f) {
                _0x1d0467.socket.send(_0xdfd03f);
                _0xdfd03f = _0x1d0467.dgram_send_queue.shift();
              }
            } catch (_0x5968bc) {
              _0x1d0467.socket.close();
            }
          }
          function _0x131004(_0x5165d2) {
            if (typeof _0x5165d2 == "string") {
              var _0x4f42ba = new TextEncoder();
              _0x5165d2 = _0x4f42ba.encode(_0x5165d2);
            } else {
              _0x39d8f2(_0x5165d2.byteLength !== undefined);
              if (_0x5165d2.byteLength == 0) {
                return;
              } else {
                _0x5165d2 = new Uint8Array(_0x5165d2);
              }
            }
            var _0x13cf95 = _0x24b785;
            _0x24b785 = false;
            if (_0x13cf95 && _0x5165d2.length === 10 && _0x5165d2[0] === 255 && _0x5165d2[1] === 255 && _0x5165d2[2] === 255 && _0x5165d2[3] === 255 && _0x5165d2[4] === "p".charCodeAt(0) && _0x5165d2[5] === "o".charCodeAt(0) && _0x5165d2[6] === "r".charCodeAt(0) && _0x5165d2[7] === "t".charCodeAt(0)) {
              var _0x5cc298 = _0x5165d2[8] << 8 | _0x5165d2[9];
              _0xf1c28a.websocket_sock_ops.removePeer(_0x4b664e, _0x1d0467);
              _0x1d0467.port = _0x5cc298;
              _0xf1c28a.websocket_sock_ops.addPeer(_0x4b664e, _0x1d0467);
              return;
            }
            _0x4b664e.recv_queue.push({
              addr: _0x1d0467.addr,
              port: _0x1d0467.port,
              data: _0x5165d2
            });
            _0x1d435e.websocket.emit("message", _0x4b664e.stream.fd);
          }
          if (_0x2d17f7) {
            _0x1d0467.socket.on("open", _0x54f94c);
            _0x1d0467.socket.on("message", function (_0x5ed052, _0x684d24) {
              if (!_0x684d24.binary) {
                return;
              }
              _0x131004(new Uint8Array(_0x5ed052).buffer);
            });
            _0x1d0467.socket.on("close", function () {
              _0x1d435e.websocket.emit("close", _0x4b664e.stream.fd);
            });
            _0x1d0467.socket.on("error", function (_0x125dc5) {
              _0x4b664e.error = 14;
              _0x1d435e.websocket.emit("error", [_0x4b664e.stream.fd, _0x4b664e.error, "ECONNREFUSED: Connection refused"]);
            });
          } else {
            _0x1d0467.socket.onopen = _0x54f94c;
            _0x1d0467.socket.onclose = function () {
              _0x1d435e.websocket.emit("close", _0x4b664e.stream.fd);
            };
            _0x1d0467.socket.onmessage = function _0x5b4009(_0xa5a7b6) {
              _0x131004(_0xa5a7b6.data);
            };
            _0x1d0467.socket.onerror = function (_0x1a62a5) {
              _0x4b664e.error = 14;
              _0x1d435e.websocket.emit("error", [_0x4b664e.stream.fd, _0x4b664e.error, "ECONNREFUSED: Connection refused"]);
            };
          }
        },
        poll: function (_0x407b04) {
          if (_0x407b04.type === 1 && _0x407b04.server) {
            if (_0x407b04.pending.length) {
              return 65;
            } else {
              return 0;
            }
          }
          var _0x4559dc = 0;
          var _0x11bf90 = _0x407b04.type === 1 ? _0xf1c28a.websocket_sock_ops.getPeer(_0x407b04, _0x407b04.daddr, _0x407b04.dport) : null;
          if (_0x407b04.recv_queue.length || !_0x11bf90 || _0x11bf90 && _0x11bf90.socket.readyState === _0x11bf90.socket.CLOSING || _0x11bf90 && _0x11bf90.socket.readyState === _0x11bf90.socket.CLOSED) {
            _0x4559dc |= 65;
          }
          if (!_0x11bf90 || _0x11bf90 && _0x11bf90.socket.readyState === _0x11bf90.socket.OPEN) {
            _0x4559dc |= 4;
          }
          if (_0x11bf90 && _0x11bf90.socket.readyState === _0x11bf90.socket.CLOSING || _0x11bf90 && _0x11bf90.socket.readyState === _0x11bf90.socket.CLOSED) {
            _0x4559dc |= 16;
          }
          return _0x4559dc;
        },
        ioctl: function (_0xd24973, _0x4ec306, _0x237ae9) {
          switch (_0x4ec306) {
            case 21531:
              var _0x408347 = 0;
              if (_0xd24973.recv_queue.length) {
                _0x408347 = _0xd24973.recv_queue[0].data.length;
              }
              _0x588032[_0x237ae9 >> 2] = _0x408347;
              return 0;
            default:
              return 28;
          }
        },
        close: function (_0x47c073) {
          if (_0x47c073.server) {
            try {
              _0x47c073.server.close();
            } catch (_0x29502e) {}
            _0x47c073.server = null;
          }
          var _0x531029 = Object.keys(_0x47c073.peers);
          for (var _0x25f9b5 = 0; _0x25f9b5 < _0x531029.length; _0x25f9b5++) {
            var _0x5a4669 = _0x47c073.peers[_0x531029[_0x25f9b5]];
            try {
              _0x5a4669.socket.close();
            } catch (_0x1f22ee) {}
            _0xf1c28a.websocket_sock_ops.removePeer(_0x47c073, _0x5a4669);
          }
          return 0;
        },
        bind: function (_0x1cf107, _0x3b46e8, _0x3f77dc) {
          if (typeof _0x1cf107.saddr != "undefined" || typeof _0x1cf107.sport != "undefined") {
            throw new _0x170eaf.ErrnoError(28);
          }
          _0x1cf107.saddr = _0x3b46e8;
          _0x1cf107.sport = _0x3f77dc;
          if (_0x1cf107.type === 2) {
            if (_0x1cf107.server) {
              _0x1cf107.server.close();
              _0x1cf107.server = null;
            }
            try {
              _0x1cf107.sock_ops.listen(_0x1cf107, 0);
            } catch (_0x4f3a03) {
              if (!(_0x4f3a03 instanceof _0x170eaf.ErrnoError)) {
                throw _0x4f3a03;
              }
              if (_0x4f3a03.errno !== 138) {
                throw _0x4f3a03;
              }
            }
          }
        },
        connect: function (_0x10ee2b, _0x333f91, _0x3768c3) {
          if (_0x10ee2b.server) {
            throw new _0x170eaf.ErrnoError(138);
          }
          if (typeof _0x10ee2b.daddr != "undefined" && typeof _0x10ee2b.dport != "undefined") {
            var _0x569a8f = _0xf1c28a.websocket_sock_ops.getPeer(_0x10ee2b, _0x10ee2b.daddr, _0x10ee2b.dport);
            if (_0x569a8f) {
              if (_0x569a8f.socket.readyState === _0x569a8f.socket.CONNECTING) {
                throw new _0x170eaf.ErrnoError(7);
              } else {
                throw new _0x170eaf.ErrnoError(30);
              }
            }
          }
          var _0x4dadbd = _0xf1c28a.websocket_sock_ops.createPeer(_0x10ee2b, _0x333f91, _0x3768c3);
          _0x10ee2b.daddr = _0x4dadbd.addr;
          _0x10ee2b.dport = _0x4dadbd.port;
          throw new _0x170eaf.ErrnoError(26);
        },
        listen: function (_0x42f2bd, _0x2e2486) {
          if (!_0x2d17f7) {
            throw new _0x170eaf.ErrnoError(138);
          }
          if (_0x42f2bd.server) {
            throw new _0x170eaf.ErrnoError(28);
          }
          var _0x2aab9f = require("ws").Server;
          var _0x25dcbd = _0x42f2bd.saddr;
          _0x42f2bd.server = new _0x2aab9f({
            host: _0x25dcbd,
            port: _0x42f2bd.sport
          });
          _0x1d435e.websocket.emit("listen", _0x42f2bd.stream.fd);
          _0x42f2bd.server.on("connection", function (_0x10c6b8) {
            if (_0x42f2bd.type === 1) {
              var _0x109387 = _0xf1c28a.createSocket(_0x42f2bd.family, _0x42f2bd.type, _0x42f2bd.protocol);
              var _0x2d67f6 = _0xf1c28a.websocket_sock_ops.createPeer(_0x109387, _0x10c6b8);
              _0x109387.daddr = _0x2d67f6.addr;
              _0x109387.dport = _0x2d67f6.port;
              _0x42f2bd.pending.push(_0x109387);
              _0x1d435e.websocket.emit("connection", _0x109387.stream.fd);
            } else {
              _0xf1c28a.websocket_sock_ops.createPeer(_0x42f2bd, _0x10c6b8);
              _0x1d435e.websocket.emit("connection", _0x42f2bd.stream.fd);
            }
          });
          _0x42f2bd.server.on("closed", function () {
            _0x1d435e.websocket.emit("close", _0x42f2bd.stream.fd);
            _0x42f2bd.server = null;
          });
          _0x42f2bd.server.on("error", function (_0x3ec2f0) {
            _0x42f2bd.error = 23;
            _0x1d435e.websocket.emit("error", [_0x42f2bd.stream.fd, _0x42f2bd.error, "EHOSTUNREACH: Host is unreachable"]);
          });
        },
        accept: function (_0x448844) {
          if (!_0x448844.server || !_0x448844.pending.length) {
            throw new _0x170eaf.ErrnoError(28);
          }
          var _0x1a6529 = _0x448844.pending.shift();
          _0x1a6529.stream.flags = _0x448844.stream.flags;
          return _0x1a6529;
        },
        getname: function (_0x1b3a81, _0x508c74) {
          var _0x4a03f0;
          var _0x37c079;
          if (_0x508c74) {
            if (_0x1b3a81.daddr === undefined || _0x1b3a81.dport === undefined) {
              throw new _0x170eaf.ErrnoError(53);
            }
            _0x4a03f0 = _0x1b3a81.daddr;
            _0x37c079 = _0x1b3a81.dport;
          } else {
            _0x4a03f0 = _0x1b3a81.saddr || 0;
            _0x37c079 = _0x1b3a81.sport || 0;
          }
          return {
            addr: _0x4a03f0,
            port: _0x37c079
          };
        },
        sendmsg: function (_0x5c5288, _0x28fec4, _0x5395aa, _0x1e9f30, _0x352d26, _0x11d84a) {
          if (_0x5c5288.type === 2) {
            if (_0x352d26 === undefined || _0x11d84a === undefined) {
              _0x352d26 = _0x5c5288.daddr;
              _0x11d84a = _0x5c5288.dport;
            }
            if (_0x352d26 === undefined || _0x11d84a === undefined) {
              throw new _0x170eaf.ErrnoError(17);
            }
          } else {
            _0x352d26 = _0x5c5288.daddr;
            _0x11d84a = _0x5c5288.dport;
          }
          var _0x1d411e = _0xf1c28a.websocket_sock_ops.getPeer(_0x5c5288, _0x352d26, _0x11d84a);
          if (_0x5c5288.type === 1) {
            if (!_0x1d411e || _0x1d411e.socket.readyState === _0x1d411e.socket.CLOSING || _0x1d411e.socket.readyState === _0x1d411e.socket.CLOSED) {
              throw new _0x170eaf.ErrnoError(53);
            } else if (_0x1d411e.socket.readyState === _0x1d411e.socket.CONNECTING) {
              throw new _0x170eaf.ErrnoError(6);
            }
          }
          if (ArrayBuffer.isView(_0x28fec4)) {
            _0x5395aa += _0x28fec4.byteOffset;
            _0x28fec4 = _0x28fec4.buffer;
          }
          var _0x42d529;
          _0x42d529 = _0x28fec4.slice(_0x5395aa, _0x5395aa + _0x1e9f30);
          if (_0x5c5288.type === 2) {
            if (!_0x1d411e || _0x1d411e.socket.readyState !== _0x1d411e.socket.OPEN) {
              if (!_0x1d411e || _0x1d411e.socket.readyState === _0x1d411e.socket.CLOSING || _0x1d411e.socket.readyState === _0x1d411e.socket.CLOSED) {
                _0x1d411e = _0xf1c28a.websocket_sock_ops.createPeer(_0x5c5288, _0x352d26, _0x11d84a);
              }
              _0x1d411e.dgram_send_queue.push(_0x42d529);
              return _0x1e9f30;
            }
          }
          try {
            _0x1d411e.socket.send(_0x42d529);
            return _0x1e9f30;
          } catch (_0x26dd4a) {
            throw new _0x170eaf.ErrnoError(28);
          }
        },
        recvmsg: function (_0x35eb33, _0xf83d2f) {
          if (_0x35eb33.type === 1 && _0x35eb33.server) {
            throw new _0x170eaf.ErrnoError(53);
          }
          var _0x537109 = _0x35eb33.recv_queue.shift();
          if (!_0x537109) {
            if (_0x35eb33.type === 1) {
              var _0x3293f2 = _0xf1c28a.websocket_sock_ops.getPeer(_0x35eb33, _0x35eb33.daddr, _0x35eb33.dport);
              if (!_0x3293f2) {
                throw new _0x170eaf.ErrnoError(53);
              } else if (_0x3293f2.socket.readyState === _0x3293f2.socket.CLOSING || _0x3293f2.socket.readyState === _0x3293f2.socket.CLOSED) {
                return null;
              } else {
                throw new _0x170eaf.ErrnoError(6);
              }
            } else {
              throw new _0x170eaf.ErrnoError(6);
            }
          }
          var _0xc615bb = _0x537109.data.byteLength || _0x537109.data.length;
          var _0x56b969 = _0x537109.data.byteOffset || 0;
          var _0x41537b = _0x537109.data.buffer || _0x537109.data;
          var _0x158b77 = Math.min(_0xf83d2f, _0xc615bb);
          var _0xd3bc64 = {
            buffer: new Uint8Array(_0x41537b, _0x56b969, _0x158b77),
            addr: _0x537109.addr,
            port: _0x537109.port
          };
          if (_0x35eb33.type === 1 && _0x158b77 < _0xc615bb) {
            var _0x22b60c = _0xc615bb - _0x158b77;
            _0x537109.data = new Uint8Array(_0x41537b, _0x56b969 + _0x158b77, _0x22b60c);
            _0x35eb33.recv_queue.unshift(_0x537109);
          }
          return _0xd3bc64;
        }
      }
    };
    function _0x4e601e(_0x2f7da3) {
      var _0x5d8184 = _0xf1c28a.getSocket(_0x2f7da3);
      if (!_0x5d8184) {
        throw new _0x170eaf.ErrnoError(8);
      }
      return _0x5d8184;
    }
    function _0x155f41(_0x5c6baa) {
      _0x588032[_0x44d37e() >> 2] = _0x5c6baa;
      return _0x5c6baa;
    }
    function _0xd5931a(_0x26f6d1) {
      var _0x54cf05 = _0x26f6d1.split(".");
      for (var _0x2e41c5 = 0; _0x2e41c5 < 4; _0x2e41c5++) {
        var _0x3e92ee = Number(_0x54cf05[_0x2e41c5]);
        if (isNaN(_0x3e92ee)) {
          return null;
        }
        _0x54cf05[_0x2e41c5] = _0x3e92ee;
      }
      return (_0x54cf05[0] | _0x54cf05[1] << 8 | _0x54cf05[2] << 16 | _0x54cf05[3] << 24) >>> 0;
    }
    function _0x14c9e0(_0x1828d9) {
      return parseInt(_0x1828d9);
    }
    function _0x394bab(_0x1bd8e2) {
      var _0xd269e1;
      var _0x3d80dd;
      var _0x5d493b;
      var _0x5bcc83;
      var _0x4010af = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
      var _0xe1ee8e = [];
      if (!_0x4010af.test(_0x1bd8e2)) {
        return null;
      }
      if (_0x1bd8e2 === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      if (_0x1bd8e2.startsWith("::")) {
        _0x1bd8e2 = _0x1bd8e2.replace("::", "Z:");
      } else {
        _0x1bd8e2 = _0x1bd8e2.replace("::", ":Z:");
      }
      if (_0x1bd8e2.indexOf(".") > 0) {
        _0x1bd8e2 = _0x1bd8e2.replace(new RegExp("[.]", "g"), ":");
        _0xd269e1 = _0x1bd8e2.split(":");
        _0xd269e1[_0xd269e1.length - 4] = _0x14c9e0(_0xd269e1[_0xd269e1.length - 4]) + _0x14c9e0(_0xd269e1[_0xd269e1.length - 3]) * 256;
        _0xd269e1[_0xd269e1.length - 3] = _0x14c9e0(_0xd269e1[_0xd269e1.length - 2]) + _0x14c9e0(_0xd269e1[_0xd269e1.length - 1]) * 256;
        _0xd269e1 = _0xd269e1.slice(0, _0xd269e1.length - 2);
      } else {
        _0xd269e1 = _0x1bd8e2.split(":");
      }
      _0x5d493b = 0;
      _0x5bcc83 = 0;
      for (_0x3d80dd = 0; _0x3d80dd < _0xd269e1.length; _0x3d80dd++) {
        if (typeof _0xd269e1[_0x3d80dd] == "string") {
          if (_0xd269e1[_0x3d80dd] === "Z") {
            for (_0x5bcc83 = 0; _0x5bcc83 < 8 - _0xd269e1.length + 1; _0x5bcc83++) {
              _0xe1ee8e[_0x3d80dd + _0x5bcc83] = 0;
            }
            _0x5d493b = _0x5bcc83 - 1;
          } else {
            _0xe1ee8e[_0x3d80dd + _0x5d493b] = _0x7cc544(parseInt(_0xd269e1[_0x3d80dd], 16));
          }
        } else {
          _0xe1ee8e[_0x3d80dd + _0x5d493b] = _0xd269e1[_0x3d80dd];
        }
      }
      return [_0xe1ee8e[1] << 16 | _0xe1ee8e[0], _0xe1ee8e[3] << 16 | _0xe1ee8e[2], _0xe1ee8e[5] << 16 | _0xe1ee8e[4], _0xe1ee8e[7] << 16 | _0xe1ee8e[6]];
    }
    function _0x28692c(_0x25d64b, _0x4d5f7c, _0x572f3d, _0x13c07b, _0x26a9a1) {
      switch (_0x4d5f7c) {
        case 2:
          _0x572f3d = _0xd5931a(_0x572f3d);
          _0xfe2cf8(_0x25d64b, 16);
          if (_0x26a9a1) {
            _0x588032[_0x26a9a1 >> 2] = 16;
          }
          _0x2bc94b[_0x25d64b >> 1] = _0x4d5f7c;
          _0x588032[_0x25d64b + 4 >> 2] = _0x572f3d;
          _0x2bc94b[_0x25d64b + 2 >> 1] = _0x7cc544(_0x13c07b);
          break;
        case 10:
          _0x572f3d = _0x394bab(_0x572f3d);
          _0xfe2cf8(_0x25d64b, 28);
          if (_0x26a9a1) {
            _0x588032[_0x26a9a1 >> 2] = 28;
          }
          _0x588032[_0x25d64b >> 2] = _0x4d5f7c;
          _0x588032[_0x25d64b + 8 >> 2] = _0x572f3d[0];
          _0x588032[_0x25d64b + 12 >> 2] = _0x572f3d[1];
          _0x588032[_0x25d64b + 16 >> 2] = _0x572f3d[2];
          _0x588032[_0x25d64b + 20 >> 2] = _0x572f3d[3];
          _0x2bc94b[_0x25d64b + 2 >> 1] = _0x7cc544(_0x13c07b);
          break;
        default:
          return 5;
      }
      return 0;
    }
    var _0x4624b2 = {
      address_map: {
        id: 1,
        addrs: {},
        names: {}
      },
      lookup_name: function (_0x418e4b) {
        var _0x1e367f = _0xd5931a(_0x418e4b);
        if (_0x1e367f !== null) {
          return _0x418e4b;
        }
        _0x1e367f = _0x394bab(_0x418e4b);
        if (_0x1e367f !== null) {
          return _0x418e4b;
        }
        var _0xa2c40c;
        if (_0x4624b2.address_map.addrs[_0x418e4b]) {
          _0xa2c40c = _0x4624b2.address_map.addrs[_0x418e4b];
        } else {
          var _0xca827b = _0x4624b2.address_map.id++;
          _0x39d8f2(_0xca827b < 65535, "exceeded max address mappings of 65535");
          _0xa2c40c = "172.29." + (_0xca827b & 255) + "." + (_0xca827b & 65280);
          _0x4624b2.address_map.names[_0xa2c40c] = _0x418e4b;
          _0x4624b2.address_map.addrs[_0x418e4b] = _0xa2c40c;
        }
        return _0xa2c40c;
      },
      lookup_addr: function (_0xac43ef) {
        if (_0x4624b2.address_map.names[_0xac43ef]) {
          return _0x4624b2.address_map.names[_0xac43ef];
        }
        return null;
      }
    };
    function _0xc21f9b(_0x3651fc, _0x522cd9, _0xc0a36a, _0x133fbb) {
      try {
        var _0x4f337f = _0x4e601e(_0x3651fc);
        var _0xd4a315 = _0x4f337f.sock_ops.accept(_0x4f337f);
        if (_0x522cd9) {
          var _0x3d0d78 = _0x28692c(_0x522cd9, _0xd4a315.family, _0x4624b2.lookup_name(_0xd4a315.daddr), _0xd4a315.dport, _0xc0a36a);
        }
        return _0xd4a315.stream.fd;
      } catch (_0x33c522) {
        if (typeof _0x170eaf == "undefined" || !(_0x33c522 instanceof _0x170eaf.ErrnoError)) {
          throw _0x33c522;
        }
        return -_0x33c522.errno;
      }
    }
    function _0x13e1b3(_0x29371e) {
      return (_0x29371e & 255) + "." + (_0x29371e >> 8 & 255) + "." + (_0x29371e >> 16 & 255) + "." + (_0x29371e >> 24 & 255);
    }
    function _0x47e949(_0x31c10d) {
      var _0x47d402 = "";
      var _0x769dd1 = 0;
      var _0x44bf11 = 0;
      var _0x54f657 = 0;
      var _0x2b4ef4 = 0;
      var _0x408246 = 0;
      var _0x2b21b9 = 0;
      var _0x196fab = [_0x31c10d[0] & 65535, _0x31c10d[0] >> 16, _0x31c10d[1] & 65535, _0x31c10d[1] >> 16, _0x31c10d[2] & 65535, _0x31c10d[2] >> 16, _0x31c10d[3] & 65535, _0x31c10d[3] >> 16];
      var _0x21c936 = true;
      var _0x32aa13 = "";
      for (_0x2b21b9 = 0; _0x2b21b9 < 5; _0x2b21b9++) {
        if (_0x196fab[_0x2b21b9] !== 0) {
          _0x21c936 = false;
          break;
        }
      }
      if (_0x21c936) {
        _0x32aa13 = _0x13e1b3(_0x196fab[6] | _0x196fab[7] << 16);
        if (_0x196fab[5] === -1) {
          _0x47d402 = "::ffff:";
          _0x47d402 += _0x32aa13;
          return _0x47d402;
        }
        if (_0x196fab[5] === 0) {
          _0x47d402 = "::";
          if (_0x32aa13 === "0.0.0.0") {
            _0x32aa13 = "";
          }
          if (_0x32aa13 === "0.0.0.1") {
            _0x32aa13 = "1";
          }
          _0x47d402 += _0x32aa13;
          return _0x47d402;
        }
      }
      for (_0x769dd1 = 0; _0x769dd1 < 8; _0x769dd1++) {
        if (_0x196fab[_0x769dd1] === 0) {
          if (_0x769dd1 - _0x54f657 > 1) {
            _0x408246 = 0;
          }
          _0x54f657 = _0x769dd1;
          _0x408246++;
        }
        if (_0x408246 > _0x44bf11) {
          _0x44bf11 = _0x408246;
          _0x2b4ef4 = _0x769dd1 - _0x44bf11 + 1;
        }
      }
      for (_0x769dd1 = 0; _0x769dd1 < 8; _0x769dd1++) {
        if (_0x44bf11 > 1) {
          if (_0x196fab[_0x769dd1] === 0 && _0x769dd1 >= _0x2b4ef4 && _0x769dd1 < _0x2b4ef4 + _0x44bf11) {
            if (_0x769dd1 === _0x2b4ef4) {
              _0x47d402 += ":";
              if (_0x2b4ef4 === 0) {
                _0x47d402 += ":";
              }
            }
            continue;
          }
        }
        _0x47d402 += Number(_0x5c7c3e(_0x196fab[_0x769dd1] & 65535)).toString(16);
        _0x47d402 += _0x769dd1 < 7 ? ":" : "";
      }
      return _0x47d402;
    }
    function _0x6870c2(_0x3dcea7, _0x352868) {
      var _0x16ffc5 = _0x2bc94b[_0x3dcea7 >> 1];
      var _0x484f53 = _0x5c7c3e(_0x3a0c14[_0x3dcea7 + 2 >> 1]);
      var _0x319089;
      switch (_0x16ffc5) {
        case 2:
          if (_0x352868 !== 16) {
            return {
              errno: 28
            };
          }
          _0x319089 = _0x588032[_0x3dcea7 + 4 >> 2];
          _0x319089 = _0x13e1b3(_0x319089);
          break;
        case 10:
          if (_0x352868 !== 28) {
            return {
              errno: 28
            };
          }
          _0x319089 = [_0x588032[_0x3dcea7 + 8 >> 2], _0x588032[_0x3dcea7 + 12 >> 2], _0x588032[_0x3dcea7 + 16 >> 2], _0x588032[_0x3dcea7 + 20 >> 2]];
          _0x319089 = _0x47e949(_0x319089);
          break;
        default:
          return {
            errno: 5
          };
      }
      return {
        family: _0x16ffc5,
        addr: _0x319089,
        port: _0x484f53
      };
    }
    function _0x112e64(_0x205e9f, _0x5779ee, _0x5dc275) {
      if (_0x5dc275 && _0x205e9f === 0) {
        return null;
      }
      var _0x4bd16a = _0x6870c2(_0x205e9f, _0x5779ee);
      if (_0x4bd16a.errno) {
        throw new _0x170eaf.ErrnoError(_0x4bd16a.errno);
      }
      _0x4bd16a.addr = _0x4624b2.lookup_addr(_0x4bd16a.addr) || _0x4bd16a.addr;
      return _0x4bd16a;
    }
    function _0x7694fe(_0x39c0ef, _0x3fbca0, _0x51d331) {
      try {
        var _0x40a8bc = _0x4e601e(_0x39c0ef);
        var _0x4dd8dd = _0x112e64(_0x3fbca0, _0x51d331);
        _0x40a8bc.sock_ops.bind(_0x40a8bc, _0x4dd8dd.addr, _0x4dd8dd.port);
        return 0;
      } catch (_0x35bc45) {
        if (typeof _0x170eaf == "undefined" || !(_0x35bc45 instanceof _0x170eaf.ErrnoError)) {
          throw _0x35bc45;
        }
        return -_0x35bc45.errno;
      }
    }
    function _0x11ff17(_0x17e2e7, _0x14bf2f) {
      try {
        _0x17e2e7 = _0x1162f4.getStr(_0x17e2e7);
        _0x170eaf.chmod(_0x17e2e7, _0x14bf2f);
        return 0;
      } catch (_0x23d294) {
        if (typeof _0x170eaf == "undefined" || !(_0x23d294 instanceof _0x170eaf.ErrnoError)) {
          throw _0x23d294;
        }
        return -_0x23d294.errno;
      }
    }
    function _0x3acc26(_0x2afa86, _0x2c619d, _0x1d622e) {
      try {
        var _0x531775 = _0x4e601e(_0x2afa86);
        var _0x303529 = _0x112e64(_0x2c619d, _0x1d622e);
        _0x531775.sock_ops.connect(_0x531775, _0x303529.addr, _0x303529.port);
        return 0;
      } catch (_0x11f47a) {
        if (typeof _0x170eaf == "undefined" || !(_0x11f47a instanceof _0x170eaf.ErrnoError)) {
          throw _0x11f47a;
        }
        return -_0x11f47a.errno;
      }
    }
    function _0x1a73ab(_0x3f6dac, _0x16b429, _0xb889db) {
      try {
        var _0x4f3e93 = _0x1162f4.getStreamFromFD(_0x3f6dac);
        if (_0x4f3e93.fd === _0x16b429) {
          return -28;
        }
        var _0x51193c = _0x170eaf.getStream(_0x16b429);
        if (_0x51193c) {
          _0x170eaf.close(_0x51193c);
        }
        return _0x170eaf.open(_0x4f3e93.path, _0x4f3e93.flags, 0, _0x16b429, _0x16b429).fd;
      } catch (_0x59aff2) {
        if (typeof _0x170eaf == "undefined" || !(_0x59aff2 instanceof _0x170eaf.ErrnoError)) {
          throw _0x59aff2;
        }
        return -_0x59aff2.errno;
      }
    }
    function _0xd60168(_0x35d50f, _0x1e67b3, _0x2bfd10, _0x56f60b) {
      try {
        _0x1e67b3 = _0x1162f4.getStr(_0x1e67b3);
        _0x1e67b3 = _0x1162f4.calculateAt(_0x35d50f, _0x1e67b3);
        return _0x1162f4.doAccess(_0x1e67b3, _0x2bfd10);
      } catch (_0xa7168c) {
        if (typeof _0x170eaf == "undefined" || !(_0xa7168c instanceof _0x170eaf.ErrnoError)) {
          throw _0xa7168c;
        }
        return -_0xa7168c.errno;
      }
    }
    function _0x58eff5(_0x13a3cd, _0x454cd0, _0x4eec4c) {
      _0x1162f4.varargs = _0x4eec4c;
      try {
        var _0x5ad52b = _0x1162f4.getStreamFromFD(_0x13a3cd);
        switch (_0x454cd0) {
          case 0:
            {
              var _0x591672 = _0x1162f4.get();
              if (_0x591672 < 0) {
                return -28;
              }
              var _0x1bb31b;
              _0x1bb31b = _0x170eaf.open(_0x5ad52b.path, _0x5ad52b.flags, 0, _0x591672);
              return _0x1bb31b.fd;
            }
          case 1:
          case 2:
            return 0;
          case 3:
            return _0x5ad52b.flags;
          case 4:
            {
              var _0x591672 = _0x1162f4.get();
              _0x5ad52b.flags |= _0x591672;
              return 0;
            }
          case 5:
            {
              var _0x591672 = _0x1162f4.get();
              var _0x34886a = 0;
              _0x2bc94b[_0x591672 + _0x34886a >> 1] = 2;
              return 0;
            }
          case 6:
          case 7:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            _0x155f41(28);
            return -1;
          default:
            {
              return -28;
            }
        }
      } catch (_0xbba369) {
        if (typeof _0x170eaf == "undefined" || !(_0xbba369 instanceof _0x170eaf.ErrnoError)) {
          throw _0xbba369;
        }
        return -_0xbba369.errno;
      }
    }
    function _0x5b2bad(_0x40a095, _0x4917d0) {
      try {
        var _0x3f4afb = _0x1162f4.getStreamFromFD(_0x40a095);
        return _0x1162f4.doStat(_0x170eaf.stat, _0x3f4afb.path, _0x4917d0);
      } catch (_0x3962d2) {
        if (typeof _0x170eaf == "undefined" || !(_0x3962d2 instanceof _0x170eaf.ErrnoError)) {
          throw _0x3962d2;
        }
        return -_0x3962d2.errno;
      }
    }
    function _0x404019(_0x1fb006, _0x4b947a, _0x5ab861) {
      try {
        var _0x1fa3a5 = _0x1162f4.get64(_0x4b947a, _0x5ab861);
        _0x170eaf.ftruncate(_0x1fb006, _0x1fa3a5);
        return 0;
      } catch (_0x4c4776) {
        if (typeof _0x170eaf == "undefined" || !(_0x4c4776 instanceof _0x170eaf.ErrnoError)) {
          throw _0x4c4776;
        }
        return -_0x4c4776.errno;
      }
    }
    function _0x46a110(_0x463da4, _0x57fae3) {
      try {
        if (_0x57fae3 === 0) {
          return -28;
        }
        var _0x25d9e0 = _0x170eaf.cwd();
        var _0x1eaeae = _0x3b9e6b(_0x25d9e0);
        if (_0x57fae3 < _0x1eaeae + 1) {
          return -68;
        }
        _0x17e527(_0x25d9e0, _0x463da4, _0x57fae3);
        return _0x463da4;
      } catch (_0x2b7ad9) {
        if (typeof _0x170eaf == "undefined" || !(_0x2b7ad9 instanceof _0x170eaf.ErrnoError)) {
          throw _0x2b7ad9;
        }
        return -_0x2b7ad9.errno;
      }
    }
    function _0x380c40(_0x49fca8, _0x2f0c7e, _0x429b15) {
      try {
        var _0x324f33 = _0x1162f4.getStreamFromFD(_0x49fca8);
        if (!_0x324f33.getdents) {
          _0x324f33.getdents = _0x170eaf.readdir(_0x324f33.path);
        }
        var _0x36c83a = 280;
        var _0x5cdaa0 = 0;
        var _0x3eaa92 = _0x170eaf.llseek(_0x324f33, 0, 1);
        var _0x121344 = Math.floor(_0x3eaa92 / _0x36c83a);
        while (_0x121344 < _0x324f33.getdents.length && _0x5cdaa0 + _0x36c83a <= _0x429b15) {
          var _0xe95d68;
          var _0x193f7f;
          var _0x531079 = _0x324f33.getdents[_0x121344];
          if (_0x531079 === ".") {
            _0xe95d68 = _0x324f33.node.id;
            _0x193f7f = 4;
          } else if (_0x531079 === "..") {
            var _0x2908ea = _0x170eaf.lookupPath(_0x324f33.path, {
              parent: true
            });
            _0xe95d68 = _0x2908ea.node.id;
            _0x193f7f = 4;
          } else {
            var _0x13e9ef = _0x170eaf.lookupNode(_0x324f33.node, _0x531079);
            _0xe95d68 = _0x13e9ef.id;
            _0x193f7f = _0x170eaf.isChrdev(_0x13e9ef.mode) ? 2 : _0x170eaf.isDir(_0x13e9ef.mode) ? 4 : _0x170eaf.isLink(_0x13e9ef.mode) ? 10 : 8;
          }
          _0x2b7c5d = [_0xe95d68 >>> 0, (_0x396169 = _0xe95d68, +Math.abs(_0x396169) >= 1 ? _0x396169 > 0 ? (Math.min(+Math.floor(_0x396169 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x396169 - +(~~_0x396169 >>> 0)) / 4294967296) >>> 0 : 0)];
          _0x588032[_0x2f0c7e + _0x5cdaa0 >> 2] = _0x2b7c5d[0];
          _0x588032[_0x2f0c7e + _0x5cdaa0 + 4 >> 2] = _0x2b7c5d[1];
          _0x2b7c5d = [(_0x121344 + 1) * _0x36c83a >>> 0, (_0x396169 = (_0x121344 + 1) * _0x36c83a, +Math.abs(_0x396169) >= 1 ? _0x396169 > 0 ? (Math.min(+Math.floor(_0x396169 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x396169 - +(~~_0x396169 >>> 0)) / 4294967296) >>> 0 : 0)];
          _0x588032[_0x2f0c7e + _0x5cdaa0 + 8 >> 2] = _0x2b7c5d[0];
          _0x588032[_0x2f0c7e + _0x5cdaa0 + 12 >> 2] = _0x2b7c5d[1];
          _0x2bc94b[_0x2f0c7e + _0x5cdaa0 + 16 >> 1] = 280;
          _0x3f8e3d[_0x2f0c7e + _0x5cdaa0 + 18 >> 0] = _0x193f7f;
          _0x17e527(_0x531079, _0x2f0c7e + _0x5cdaa0 + 19, 256);
          _0x5cdaa0 += _0x36c83a;
          _0x121344 += 1;
        }
        _0x170eaf.llseek(_0x324f33, _0x121344 * _0x36c83a, 0);
        return _0x5cdaa0;
      } catch (_0x490b4b) {
        if (typeof _0x170eaf == "undefined" || !(_0x490b4b instanceof _0x170eaf.ErrnoError)) {
          throw _0x490b4b;
        }
        return -_0x490b4b.errno;
      }
    }
    function _0x3e64c7(_0x3c91e5, _0x4c3ce8, _0x381e2d) {
      try {
        var _0xdb6d40 = _0x4e601e(_0x3c91e5);
        if (!_0xdb6d40.daddr) {
          return -53;
        }
        var _0x4f2e93 = _0x28692c(_0x4c3ce8, _0xdb6d40.family, _0x4624b2.lookup_name(_0xdb6d40.daddr), _0xdb6d40.dport, _0x381e2d);
        return 0;
      } catch (_0x41c46c) {
        if (typeof _0x170eaf == "undefined" || !(_0x41c46c instanceof _0x170eaf.ErrnoError)) {
          throw _0x41c46c;
        }
        return -_0x41c46c.errno;
      }
    }
    function _0x20ec8a(_0x3a894f, _0x5452d9, _0x2a3386) {
      try {
        _0x33d817("__syscall_getsockname " + _0x3a894f);
        var _0x2c695e = _0x4e601e(_0x3a894f);
        var _0x31d5ce = _0x28692c(_0x5452d9, _0x2c695e.family, _0x4624b2.lookup_name(_0x2c695e.saddr || "0.0.0.0"), _0x2c695e.sport, _0x2a3386);
        return 0;
      } catch (_0x56747d) {
        if (typeof _0x170eaf == "undefined" || !(_0x56747d instanceof _0x170eaf.ErrnoError)) {
          throw _0x56747d;
        }
        return -_0x56747d.errno;
      }
    }
    function _0x82d517(_0x9ee9f5, _0x4acfe8, _0x15cba9, _0x4f33fe, _0x335eac) {
      try {
        var _0x1d5118 = _0x4e601e(_0x9ee9f5);
        if (_0x4acfe8 === 1) {
          if (_0x15cba9 === 4) {
            _0x588032[_0x4f33fe >> 2] = _0x1d5118.error;
            _0x588032[_0x335eac >> 2] = 4;
            _0x1d5118.error = null;
            return 0;
          }
        }
        return -50;
      } catch (_0x1cc69f) {
        if (typeof _0x170eaf == "undefined" || !(_0x1cc69f instanceof _0x170eaf.ErrnoError)) {
          throw _0x1cc69f;
        }
        return -_0x1cc69f.errno;
      }
    }
    function _0x36a3af(_0x50580c, _0x82f30b, _0x1e17ed) {
      _0x1162f4.varargs = _0x1e17ed;
      try {
        var _0x20661d = _0x1162f4.getStreamFromFD(_0x50580c);
        switch (_0x82f30b) {
          case 21509:
          case 21505:
            {
              if (!_0x20661d.tty) {
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
              if (!_0x20661d.tty) {
                return -59;
              }
              return 0;
            }
          case 21519:
            {
              if (!_0x20661d.tty) {
                return -59;
              }
              var _0x518db3 = _0x1162f4.get();
              _0x588032[_0x518db3 >> 2] = 0;
              return 0;
            }
          case 21520:
            {
              if (!_0x20661d.tty) {
                return -59;
              }
              return -28;
            }
          case 21531:
            {
              var _0x518db3 = _0x1162f4.get();
              return _0x170eaf.ioctl(_0x20661d, _0x82f30b, _0x518db3);
            }
          case 21523:
            {
              if (!_0x20661d.tty) {
                return -59;
              }
              return 0;
            }
          case 21524:
            {
              if (!_0x20661d.tty) {
                return -59;
              }
              return 0;
            }
          default:
            _0xd8a7a0("bad ioctl syscall " + _0x82f30b);
        }
      } catch (_0x570a31) {
        if (typeof _0x170eaf == "undefined" || !(_0x570a31 instanceof _0x170eaf.ErrnoError)) {
          throw _0x570a31;
        }
        return -_0x570a31.errno;
      }
    }
    function _0x1dc73e(_0x1faa8d, _0x560a1b) {
      try {
        var _0x1f7536 = _0x4e601e(_0x1faa8d);
        _0x1f7536.sock_ops.listen(_0x1f7536, _0x560a1b);
        return 0;
      } catch (_0x58d444) {
        if (typeof _0x170eaf == "undefined" || !(_0x58d444 instanceof _0x170eaf.ErrnoError)) {
          throw _0x58d444;
        }
        return -_0x58d444.errno;
      }
    }
    function _0x472f8b(_0x47144d, _0x2a42e3) {
      try {
        _0x47144d = _0x1162f4.getStr(_0x47144d);
        return _0x1162f4.doStat(_0x170eaf.lstat, _0x47144d, _0x2a42e3);
      } catch (_0x3abf0f) {
        if (typeof _0x170eaf == "undefined" || !(_0x3abf0f instanceof _0x170eaf.ErrnoError)) {
          throw _0x3abf0f;
        }
        return -_0x3abf0f.errno;
      }
    }
    function _0x4b2231(_0x4808b3, _0x3346f7) {
      try {
        _0x4808b3 = _0x1162f4.getStr(_0x4808b3);
        return _0x1162f4.doMkdir(_0x4808b3, _0x3346f7);
      } catch (_0x5185c2) {
        if (typeof _0x170eaf == "undefined" || !(_0x5185c2 instanceof _0x170eaf.ErrnoError)) {
          throw _0x5185c2;
        }
        return -_0x5185c2.errno;
      }
    }
    function _0x203bdc(_0x58a240, _0x4f7479, _0x50b9a3, _0x61008c) {
      try {
        _0x4f7479 = _0x1162f4.getStr(_0x4f7479);
        var _0x574017 = _0x61008c & 256;
        var _0x21321d = _0x61008c & 4096;
        _0x61008c = _0x61008c & ~4352;
        _0x4f7479 = _0x1162f4.calculateAt(_0x58a240, _0x4f7479, _0x21321d);
        return _0x1162f4.doStat(_0x574017 ? _0x170eaf.lstat : _0x170eaf.stat, _0x4f7479, _0x50b9a3);
      } catch (_0x4441cf) {
        if (typeof _0x170eaf == "undefined" || !(_0x4441cf instanceof _0x170eaf.ErrnoError)) {
          throw _0x4441cf;
        }
        return -_0x4441cf.errno;
      }
    }
    function _0x1adc95(_0x16f0ed, _0x547595, _0x2980fa, _0x5b6767) {
      _0x1162f4.varargs = _0x5b6767;
      try {
        _0x547595 = _0x1162f4.getStr(_0x547595);
        _0x547595 = _0x1162f4.calculateAt(_0x16f0ed, _0x547595);
        var _0x5590a8 = _0x5b6767 ? _0x1162f4.get() : 0;
        return _0x170eaf.open(_0x547595, _0x2980fa, _0x5590a8).fd;
      } catch (_0x3424e2) {
        if (typeof _0x170eaf == "undefined" || !(_0x3424e2 instanceof _0x170eaf.ErrnoError)) {
          throw _0x3424e2;
        }
        return -_0x3424e2.errno;
      }
    }
    var _0x2b2291 = {
      BUCKET_BUFFER_SIZE: 8192,
      mount: function (_0xa953e6) {
        return _0x170eaf.createNode(null, "/", 16895, 0);
      },
      createPipe: function () {
        var _0x3cf503 = {
          buckets: [],
          refcnt: 2
        };
        _0x3cf503.buckets.push({
          buffer: new Uint8Array(_0x2b2291.BUCKET_BUFFER_SIZE),
          offset: 0,
          roffset: 0
        });
        var _0x54db82 = _0x2b2291.nextname();
        var _0x449de6 = _0x2b2291.nextname();
        var _0x29bb38 = _0x170eaf.createNode(_0x2b2291.root, _0x54db82, 4096, 0);
        var _0x41498 = _0x170eaf.createNode(_0x2b2291.root, _0x449de6, 4096, 0);
        _0x29bb38.pipe = _0x3cf503;
        _0x41498.pipe = _0x3cf503;
        var _0x122654 = _0x170eaf.createStream({
          path: _0x54db82,
          node: _0x29bb38,
          flags: 0,
          seekable: false,
          stream_ops: _0x2b2291.stream_ops
        });
        _0x29bb38.stream = _0x122654;
        var _0x2f27e0 = _0x170eaf.createStream({
          path: _0x449de6,
          node: _0x41498,
          flags: 1,
          seekable: false,
          stream_ops: _0x2b2291.stream_ops
        });
        _0x41498.stream = _0x2f27e0;
        return {
          readable_fd: _0x122654.fd,
          writable_fd: _0x2f27e0.fd
        };
      },
      stream_ops: {
        poll: function (_0x4d0522) {
          var _0xa37195 = _0x4d0522.node.pipe;
          if ((_0x4d0522.flags & 2097155) === 1) {
            return 260;
          } else if (_0xa37195.buckets.length > 0) {
            for (var _0x26a36f = 0; _0x26a36f < _0xa37195.buckets.length; _0x26a36f++) {
              var _0xdf73bf = _0xa37195.buckets[_0x26a36f];
              if (_0xdf73bf.offset - _0xdf73bf.roffset > 0) {
                return 65;
              }
            }
          }
          return 0;
        },
        ioctl: function (_0x1420c0, _0x82018b, _0x3de506) {
          return 28;
        },
        fsync: function (_0x3964bd) {
          return 28;
        },
        read: function (_0x4f4c0d, _0x3124df, _0x581464, _0x3a04f1, _0x69ffef) {
          var _0xc67119 = _0x4f4c0d.node.pipe;
          var _0x491dd2 = 0;
          for (var _0x14da9b = 0; _0x14da9b < _0xc67119.buckets.length; _0x14da9b++) {
            var _0x2380fd = _0xc67119.buckets[_0x14da9b];
            _0x491dd2 += _0x2380fd.offset - _0x2380fd.roffset;
          }
          _0x39d8f2(_0x3124df instanceof ArrayBuffer || ArrayBuffer.isView(_0x3124df));
          var _0x10508d = _0x3124df.subarray(_0x581464, _0x581464 + _0x3a04f1);
          if (_0x3a04f1 <= 0) {
            return 0;
          }
          if (_0x491dd2 == 0) {
            throw new _0x170eaf.ErrnoError(6);
          }
          var _0x16b853 = Math.min(_0x491dd2, _0x3a04f1);
          var _0x3ed3af = _0x16b853;
          var _0xe1af43 = 0;
          for (var _0x14da9b = 0; _0x14da9b < _0xc67119.buckets.length; _0x14da9b++) {
            var _0x3ecb70 = _0xc67119.buckets[_0x14da9b];
            var _0x2ac8ee = _0x3ecb70.offset - _0x3ecb70.roffset;
            if (_0x16b853 <= _0x2ac8ee) {
              var _0x581341 = _0x3ecb70.buffer.subarray(_0x3ecb70.roffset, _0x3ecb70.offset);
              if (_0x16b853 < _0x2ac8ee) {
                _0x581341 = _0x581341.subarray(0, _0x16b853);
                _0x3ecb70.roffset += _0x16b853;
              } else {
                _0xe1af43++;
              }
              _0x10508d.set(_0x581341);
              break;
            } else {
              var _0x581341 = _0x3ecb70.buffer.subarray(_0x3ecb70.roffset, _0x3ecb70.offset);
              _0x10508d.set(_0x581341);
              _0x10508d = _0x10508d.subarray(_0x581341.byteLength);
              _0x16b853 -= _0x581341.byteLength;
              _0xe1af43++;
            }
          }
          if (_0xe1af43 && _0xe1af43 == _0xc67119.buckets.length) {
            _0xe1af43--;
            _0xc67119.buckets[_0xe1af43].offset = 0;
            _0xc67119.buckets[_0xe1af43].roffset = 0;
          }
          _0xc67119.buckets.splice(0, _0xe1af43);
          return _0x3ed3af;
        },
        write: function (_0xa8581b, _0x380d06, _0x2809ef, _0x25442e, _0xd291a4) {
          var _0x3319d6 = _0xa8581b.node.pipe;
          _0x39d8f2(_0x380d06 instanceof ArrayBuffer || ArrayBuffer.isView(_0x380d06));
          var _0x548bfb = _0x380d06.subarray(_0x2809ef, _0x2809ef + _0x25442e);
          var _0x37c1dd = _0x548bfb.byteLength;
          if (_0x37c1dd <= 0) {
            return 0;
          }
          var _0xdab18c = null;
          if (_0x3319d6.buckets.length == 0) {
            _0xdab18c = {
              buffer: new Uint8Array(_0x2b2291.BUCKET_BUFFER_SIZE),
              offset: 0,
              roffset: 0
            };
            _0x3319d6.buckets.push(_0xdab18c);
          } else {
            _0xdab18c = _0x3319d6.buckets[_0x3319d6.buckets.length - 1];
          }
          _0x39d8f2(_0xdab18c.offset <= _0x2b2291.BUCKET_BUFFER_SIZE);
          var _0x150ab3 = _0x2b2291.BUCKET_BUFFER_SIZE - _0xdab18c.offset;
          if (_0x150ab3 >= _0x37c1dd) {
            _0xdab18c.buffer.set(_0x548bfb, _0xdab18c.offset);
            _0xdab18c.offset += _0x37c1dd;
            return _0x37c1dd;
          } else if (_0x150ab3 > 0) {
            _0xdab18c.buffer.set(_0x548bfb.subarray(0, _0x150ab3), _0xdab18c.offset);
            _0xdab18c.offset += _0x150ab3;
            _0x548bfb = _0x548bfb.subarray(_0x150ab3, _0x548bfb.byteLength);
          }
          var _0x5da81d = _0x548bfb.byteLength / _0x2b2291.BUCKET_BUFFER_SIZE | 0;
          var _0x28ad91 = _0x548bfb.byteLength % _0x2b2291.BUCKET_BUFFER_SIZE;
          for (var _0xe5dea8 = 0; _0xe5dea8 < _0x5da81d; _0xe5dea8++) {
            var _0x46fe82 = {
              buffer: new Uint8Array(_0x2b2291.BUCKET_BUFFER_SIZE),
              offset: _0x2b2291.BUCKET_BUFFER_SIZE,
              roffset: 0
            };
            _0x3319d6.buckets.push(_0x46fe82);
            _0x46fe82.buffer.set(_0x548bfb.subarray(0, _0x2b2291.BUCKET_BUFFER_SIZE));
            _0x548bfb = _0x548bfb.subarray(_0x2b2291.BUCKET_BUFFER_SIZE, _0x548bfb.byteLength);
          }
          if (_0x28ad91 > 0) {
            var _0x46fe82 = {
              buffer: new Uint8Array(_0x2b2291.BUCKET_BUFFER_SIZE),
              offset: _0x548bfb.byteLength,
              roffset: 0
            };
            _0x3319d6.buckets.push(_0x46fe82);
            _0x46fe82.buffer.set(_0x548bfb);
          }
          return _0x37c1dd;
        },
        close: function (_0x13424d) {
          var _0x58788e = _0x13424d.node.pipe;
          _0x58788e.refcnt--;
          if (_0x58788e.refcnt === 0) {
            _0x58788e.buckets = null;
          }
        }
      },
      nextname: function () {
        if (!_0x2b2291.nextname.current) {
          _0x2b2291.nextname.current = 0;
        }
        return "pipe[" + _0x2b2291.nextname.current++ + "]";
      }
    };
    function _0x15f1a1(_0x517aaf) {
      try {
        if (_0x517aaf == 0) {
          throw new _0x170eaf.ErrnoError(21);
        }
        var _0x114959 = _0x2b2291.createPipe();
        _0x588032[_0x517aaf >> 2] = _0x114959.readable_fd;
        _0x588032[_0x517aaf + 4 >> 2] = _0x114959.writable_fd;
        return 0;
      } catch (_0x441b04) {
        if (typeof _0x170eaf == "undefined" || !(_0x441b04 instanceof _0x170eaf.ErrnoError)) {
          throw _0x441b04;
        }
        return -_0x441b04.errno;
      }
    }
    function _0xf53e44(_0x5637bd, _0x599263, _0x38ede5) {
      try {
        var _0x1d62a3 = 0;
        for (var _0xeca83a = 0; _0xeca83a < _0x599263; _0xeca83a++) {
          var _0xfdd89f = _0x5637bd + _0xeca83a * 8;
          var _0x35b2f0 = _0x588032[_0xfdd89f >> 2];
          var _0x209c87 = _0x2bc94b[_0xfdd89f + 4 >> 1];
          var _0x3e1b0d = 32;
          var _0x3bc3b2 = _0x170eaf.getStream(_0x35b2f0);
          if (_0x3bc3b2) {
            _0x3e1b0d = _0x1162f4.DEFAULT_POLLMASK;
            if (_0x3bc3b2.stream_ops.poll) {
              _0x3e1b0d = _0x3bc3b2.stream_ops.poll(_0x3bc3b2);
            }
          }
          _0x3e1b0d &= _0x209c87 | 8 | 16;
          if (_0x3e1b0d) {
            _0x1d62a3++;
          }
          _0x2bc94b[_0xfdd89f + 6 >> 1] = _0x3e1b0d;
        }
        return _0x1d62a3;
      } catch (_0x1373f9) {
        if (typeof _0x170eaf == "undefined" || !(_0x1373f9 instanceof _0x170eaf.ErrnoError)) {
          throw _0x1373f9;
        }
        return -_0x1373f9.errno;
      }
    }
    function _0x59a4c7(_0x5c916b, _0x36fa4f, _0x1d671d, _0x3fdb3d) {
      try {
        _0x36fa4f = _0x1162f4.getStr(_0x36fa4f);
        _0x36fa4f = _0x1162f4.calculateAt(_0x5c916b, _0x36fa4f);
        return _0x1162f4.doReadlink(_0x36fa4f, _0x1d671d, _0x3fdb3d);
      } catch (_0xe41b5b) {
        if (typeof _0x170eaf == "undefined" || !(_0xe41b5b instanceof _0x170eaf.ErrnoError)) {
          throw _0xe41b5b;
        }
        return -_0xe41b5b.errno;
      }
    }
    function _0x469d03(_0x32c16c, _0x172bfd, _0x2f930b, _0xc88372, _0x2d7c56, _0x43f631) {
      try {
        var _0x302b5b = _0x4e601e(_0x32c16c);
        var _0x93ebfc = _0x302b5b.sock_ops.recvmsg(_0x302b5b, _0x2f930b);
        if (!_0x93ebfc) {
          return 0;
        }
        if (_0x2d7c56) {
          var _0x1e1ea7 = _0x28692c(_0x2d7c56, _0x302b5b.family, _0x4624b2.lookup_name(_0x93ebfc.addr), _0x93ebfc.port, _0x43f631);
        }
        _0x5f38b4.set(_0x93ebfc.buffer, _0x172bfd);
        return _0x93ebfc.buffer.byteLength;
      } catch (_0x806175) {
        if (typeof _0x170eaf == "undefined" || !(_0x806175 instanceof _0x170eaf.ErrnoError)) {
          throw _0x806175;
        }
        return -_0x806175.errno;
      }
    }
    function _0xbdfd85(_0x47e98c, _0x318dc6, _0x233d32) {
      try {
        var _0x3dc41e = _0x4e601e(_0x47e98c);
        var _0x5769df = _0x588032[_0x318dc6 + 8 >> 2];
        var _0x1e77a4 = _0x588032[_0x318dc6 + 12 >> 2];
        var _0x3b6a1c = 0;
        for (var _0xb22c66 = 0; _0xb22c66 < _0x1e77a4; _0xb22c66++) {
          _0x3b6a1c += _0x588032[_0x5769df + (_0xb22c66 * 8 + 4) >> 2];
        }
        var _0x143989 = _0x3dc41e.sock_ops.recvmsg(_0x3dc41e, _0x3b6a1c);
        if (!_0x143989) {
          return 0;
        }
        var _0x2a2073 = _0x588032[_0x318dc6 >> 2];
        if (_0x2a2073) {
          var _0x4ccbd4 = _0x28692c(_0x2a2073, _0x3dc41e.family, _0x4624b2.lookup_name(_0x143989.addr), _0x143989.port);
        }
        var _0x3aec66 = 0;
        var _0x1221dc = _0x143989.buffer.byteLength;
        for (var _0xb22c66 = 0; _0x1221dc > 0 && _0xb22c66 < _0x1e77a4; _0xb22c66++) {
          var _0x275ae8 = _0x588032[_0x5769df + (_0xb22c66 * 8 + 0) >> 2];
          var _0x534f46 = _0x588032[_0x5769df + (_0xb22c66 * 8 + 4) >> 2];
          if (!_0x534f46) {
            continue;
          }
          var _0x39c514 = Math.min(_0x534f46, _0x1221dc);
          var _0x147955 = _0x143989.buffer.subarray(_0x3aec66, _0x3aec66 + _0x39c514);
          _0x5f38b4.set(_0x147955, _0x275ae8 + _0x3aec66);
          _0x3aec66 += _0x39c514;
          _0x1221dc -= _0x39c514;
        }
        return _0x3aec66;
      } catch (_0x3cbbfc) {
        if (typeof _0x170eaf == "undefined" || !(_0x3cbbfc instanceof _0x170eaf.ErrnoError)) {
          throw _0x3cbbfc;
        }
        return -_0x3cbbfc.errno;
      }
    }
    function _0x1ec8e3(_0x32916d, _0x3c013b, _0x52ab78, _0x3a5ca2) {
      try {
        _0x3c013b = _0x1162f4.getStr(_0x3c013b);
        _0x3a5ca2 = _0x1162f4.getStr(_0x3a5ca2);
        _0x3c013b = _0x1162f4.calculateAt(_0x32916d, _0x3c013b);
        _0x3a5ca2 = _0x1162f4.calculateAt(_0x52ab78, _0x3a5ca2);
        _0x170eaf.rename(_0x3c013b, _0x3a5ca2);
        return 0;
      } catch (_0x57aed4) {
        if (typeof _0x170eaf == "undefined" || !(_0x57aed4 instanceof _0x170eaf.ErrnoError)) {
          throw _0x57aed4;
        }
        return -_0x57aed4.errno;
      }
    }
    function _0x58c17d(_0x56a1db) {
      try {
        _0x56a1db = _0x1162f4.getStr(_0x56a1db);
        _0x170eaf.rmdir(_0x56a1db);
        return 0;
      } catch (_0x5229e1) {
        if (typeof _0x170eaf == "undefined" || !(_0x5229e1 instanceof _0x170eaf.ErrnoError)) {
          throw _0x5229e1;
        }
        return -_0x5229e1.errno;
      }
    }
    function _0x5be5af(_0x398dee, _0x110385, _0x5cc907) {
      try {
        var _0x55e5ed = _0x4e601e(_0x398dee);
        var _0x1993fb = _0x588032[_0x110385 + 8 >> 2];
        var _0x228a22 = _0x588032[_0x110385 + 12 >> 2];
        var _0x1d6c06;
        var _0x3d3707;
        var _0x4b6291 = _0x588032[_0x110385 >> 2];
        var _0x3fad29 = _0x588032[_0x110385 + 4 >> 2];
        if (_0x4b6291) {
          var _0xe57ce5 = _0x6870c2(_0x4b6291, _0x3fad29);
          if (_0xe57ce5.errno) {
            return -_0xe57ce5.errno;
          }
          _0x3d3707 = _0xe57ce5.port;
          _0x1d6c06 = _0x4624b2.lookup_addr(_0xe57ce5.addr) || _0xe57ce5.addr;
        }
        var _0x3e1f38 = 0;
        for (var _0x54905a = 0; _0x54905a < _0x228a22; _0x54905a++) {
          _0x3e1f38 += _0x588032[_0x1993fb + (_0x54905a * 8 + 4) >> 2];
        }
        var _0x30b7f1 = new Uint8Array(_0x3e1f38);
        var _0x5d520d = 0;
        for (var _0x54905a = 0; _0x54905a < _0x228a22; _0x54905a++) {
          var _0x52170f = _0x588032[_0x1993fb + (_0x54905a * 8 + 0) >> 2];
          var _0xe79264 = _0x588032[_0x1993fb + (_0x54905a * 8 + 4) >> 2];
          for (var _0x567a64 = 0; _0x567a64 < _0xe79264; _0x567a64++) {
            _0x30b7f1[_0x5d520d++] = _0x3f8e3d[_0x52170f + _0x567a64 >> 0];
          }
        }
        return _0x55e5ed.sock_ops.sendmsg(_0x55e5ed, _0x30b7f1, 0, _0x3e1f38, _0x1d6c06, _0x3d3707);
      } catch (_0x1e713a) {
        if (typeof _0x170eaf == "undefined" || !(_0x1e713a instanceof _0x170eaf.ErrnoError)) {
          throw _0x1e713a;
        }
        return -_0x1e713a.errno;
      }
    }
    function _0x164d53(_0x195fe7, _0x1b88cb, _0x37baac, _0x48d9fb, _0x114728, _0xf6c5f9) {
      try {
        var _0x24a9a0 = _0x4e601e(_0x195fe7);
        var _0x66a5b1 = _0x112e64(_0x114728, _0xf6c5f9, true);
        if (!_0x66a5b1) {
          return _0x170eaf.write(_0x24a9a0.stream, _0x3f8e3d, _0x1b88cb, _0x37baac);
        } else {
          return _0x24a9a0.sock_ops.sendmsg(_0x24a9a0, _0x3f8e3d, _0x1b88cb, _0x37baac, _0x66a5b1.addr, _0x66a5b1.port);
        }
      } catch (_0xd50d1e) {
        if (typeof _0x170eaf == "undefined" || !(_0xd50d1e instanceof _0x170eaf.ErrnoError)) {
          throw _0xd50d1e;
        }
        return -_0xd50d1e.errno;
      }
    }
    function _0x27ae0a(_0x4cd557, _0x5c6694, _0x193ddc) {
      try {
        var _0x4be420 = _0xf1c28a.createSocket(_0x4cd557, _0x5c6694, _0x193ddc);
        return _0x4be420.stream.fd;
      } catch (_0x4a3317) {
        if (typeof _0x170eaf == "undefined" || !(_0x4a3317 instanceof _0x170eaf.ErrnoError)) {
          throw _0x4a3317;
        }
        return -_0x4a3317.errno;
      }
    }
    function _0x396a1e(_0x79ca44, _0x4ab593) {
      try {
        _0x79ca44 = _0x1162f4.getStr(_0x79ca44);
        return _0x1162f4.doStat(_0x170eaf.stat, _0x79ca44, _0x4ab593);
      } catch (_0x4aaf9c) {
        if (typeof _0x170eaf == "undefined" || !(_0x4aaf9c instanceof _0x170eaf.ErrnoError)) {
          throw _0x4aaf9c;
        }
        return -_0x4aaf9c.errno;
      }
    }
    function _0x378b52(_0x2b1e3a, _0x4ea49a, _0x3e6c5f) {
      try {
        _0x2b1e3a = _0x1162f4.getStr(_0x2b1e3a);
        _0x588032[_0x3e6c5f + 4 >> 2] = 4096;
        _0x588032[_0x3e6c5f + 40 >> 2] = 4096;
        _0x588032[_0x3e6c5f + 8 >> 2] = 1000000;
        _0x588032[_0x3e6c5f + 12 >> 2] = 500000;
        _0x588032[_0x3e6c5f + 16 >> 2] = 500000;
        _0x588032[_0x3e6c5f + 20 >> 2] = _0x170eaf.nextInode;
        _0x588032[_0x3e6c5f + 24 >> 2] = 1000000;
        _0x588032[_0x3e6c5f + 28 >> 2] = 42;
        _0x588032[_0x3e6c5f + 44 >> 2] = 2;
        _0x588032[_0x3e6c5f + 36 >> 2] = 255;
        return 0;
      } catch (_0x506192) {
        if (typeof _0x170eaf == "undefined" || !(_0x506192 instanceof _0x170eaf.ErrnoError)) {
          throw _0x506192;
        }
        return -_0x506192.errno;
      }
    }
    function _0x2b8f95(_0x5249f1, _0x1ac875) {
      try {
        _0x5249f1 = _0x1162f4.getStr(_0x5249f1);
        _0x1ac875 = _0x1162f4.getStr(_0x1ac875);
        _0x170eaf.symlink(_0x5249f1, _0x1ac875);
        return 0;
      } catch (_0x9dfc65) {
        if (typeof _0x170eaf == "undefined" || !(_0x9dfc65 instanceof _0x170eaf.ErrnoError)) {
          throw _0x9dfc65;
        }
        return -_0x9dfc65.errno;
      }
    }
    function _0x588fda(_0x775f4c, _0x13fe73, _0x1ab245) {
      try {
        _0x775f4c = _0x1162f4.getStr(_0x775f4c);
        var _0x3629af = _0x1162f4.get64(_0x13fe73, _0x1ab245);
        _0x170eaf.truncate(_0x775f4c, _0x3629af);
        return 0;
      } catch (_0x30fd13) {
        if (typeof _0x170eaf == "undefined" || !(_0x30fd13 instanceof _0x170eaf.ErrnoError)) {
          throw _0x30fd13;
        }
        return -_0x30fd13.errno;
      }
    }
    function _0x5eb21c(_0x307fe1, _0x245c8e, _0x39764b) {
      try {
        _0x245c8e = _0x1162f4.getStr(_0x245c8e);
        _0x245c8e = _0x1162f4.calculateAt(_0x307fe1, _0x245c8e);
        if (_0x39764b === 0) {
          _0x170eaf.unlink(_0x245c8e);
        } else if (_0x39764b === 512) {
          _0x170eaf.rmdir(_0x245c8e);
        } else {
          _0xd8a7a0("Invalid flags passed to unlinkat");
        }
        return 0;
      } catch (_0x12f846) {
        if (typeof _0x170eaf == "undefined" || !(_0x12f846 instanceof _0x170eaf.ErrnoError)) {
          throw _0x12f846;
        }
        return -_0x12f846.errno;
      }
    }
    function _0x3fd5c2(_0x527cee, _0x315ea5, _0x54e2bc, _0x1a1450) {
      try {
        _0x315ea5 = _0x1162f4.getStr(_0x315ea5);
        _0x315ea5 = _0x1162f4.calculateAt(_0x527cee, _0x315ea5, true);
        if (!_0x54e2bc) {
          var _0x21f417 = Date.now();
          var _0x44d97e = _0x21f417;
        } else {
          var _0x1fed87 = _0x588032[_0x54e2bc >> 2];
          var _0x2ff14a = _0x588032[_0x54e2bc + 4 >> 2];
          _0x21f417 = _0x1fed87 * 1000 + _0x2ff14a / 1000000;
          _0x54e2bc += 8;
          _0x1fed87 = _0x588032[_0x54e2bc >> 2];
          _0x2ff14a = _0x588032[_0x54e2bc + 4 >> 2];
          _0x44d97e = _0x1fed87 * 1000 + _0x2ff14a / 1000000;
        }
        _0x170eaf.utime(_0x315ea5, _0x21f417, _0x44d97e);
        return 0;
      } catch (_0x5376cc) {
        if (typeof _0x170eaf == "undefined" || !(_0x5376cc instanceof _0x170eaf.ErrnoError)) {
          throw _0x5376cc;
        }
        return -_0x5376cc.errno;
      }
    }
    var _0x4e0314 = 0;
    function _0x3c4c5f(_0x18dd29) {
      var _0x279d18 = !_0x4e0314;
      _0x4e0314 = 1;
      return _0x279d18;
    }
    function _0x5c2601(_0xa1fbd2, _0x55e685) {
      return 0;
    }
    function _0x11fac5() {
      return Date.now();
    }
    var _0x16fc0e = true;
    function _0x58ca87() {
      return _0x16fc0e;
    }
    function _0xfc3f54() {
      throw Infinity;
    }
    function _0x1b6f6f(_0x490da8, _0x39816a) {
      var _0x1e830c = new Date(_0x588032[_0x490da8 >> 2] * 1000);
      _0x588032[_0x39816a >> 2] = _0x1e830c.getUTCSeconds();
      _0x588032[_0x39816a + 4 >> 2] = _0x1e830c.getUTCMinutes();
      _0x588032[_0x39816a + 8 >> 2] = _0x1e830c.getUTCHours();
      _0x588032[_0x39816a + 12 >> 2] = _0x1e830c.getUTCDate();
      _0x588032[_0x39816a + 16 >> 2] = _0x1e830c.getUTCMonth();
      _0x588032[_0x39816a + 20 >> 2] = _0x1e830c.getUTCFullYear() - 1900;
      _0x588032[_0x39816a + 24 >> 2] = _0x1e830c.getUTCDay();
      var _0x489c3a = Date.UTC(_0x1e830c.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var _0x595fbf = (_0x1e830c.getTime() - _0x489c3a) / 86400000 | 0;
      _0x588032[_0x39816a + 28 >> 2] = _0x595fbf;
    }
    function _0x59deac(_0x34b891, _0x2e0a92) {
      var _0x22140e = new Date(_0x588032[_0x34b891 >> 2] * 1000);
      _0x588032[_0x2e0a92 >> 2] = _0x22140e.getSeconds();
      _0x588032[_0x2e0a92 + 4 >> 2] = _0x22140e.getMinutes();
      _0x588032[_0x2e0a92 + 8 >> 2] = _0x22140e.getHours();
      _0x588032[_0x2e0a92 + 12 >> 2] = _0x22140e.getDate();
      _0x588032[_0x2e0a92 + 16 >> 2] = _0x22140e.getMonth();
      _0x588032[_0x2e0a92 + 20 >> 2] = _0x22140e.getFullYear() - 1900;
      _0x588032[_0x2e0a92 + 24 >> 2] = _0x22140e.getDay();
      var _0x25e84b = new Date(_0x22140e.getFullYear(), 0, 1);
      var _0x33043e = (_0x22140e.getTime() - _0x25e84b.getTime()) / 86400000 | 0;
      _0x588032[_0x2e0a92 + 28 >> 2] = _0x33043e;
      _0x588032[_0x2e0a92 + 36 >> 2] = -(_0x22140e.getTimezoneOffset() * 60);
      var _0x82aadd = new Date(_0x22140e.getFullYear(), 6, 1).getTimezoneOffset();
      var _0x47f190 = _0x25e84b.getTimezoneOffset();
      var _0x2e5eb5 = (_0x82aadd != _0x47f190 && _0x22140e.getTimezoneOffset() == Math.min(_0x47f190, _0x82aadd)) | 0;
      _0x588032[_0x2e0a92 + 32 >> 2] = _0x2e5eb5;
    }
    function _0x9ba2c3(_0x29ac78) {
      var _0x523b86 = new Date(_0x588032[_0x29ac78 + 20 >> 2] + 1900, _0x588032[_0x29ac78 + 16 >> 2], _0x588032[_0x29ac78 + 12 >> 2], _0x588032[_0x29ac78 + 8 >> 2], _0x588032[_0x29ac78 + 4 >> 2], _0x588032[_0x29ac78 >> 2], 0);
      var _0x4f77e4 = _0x588032[_0x29ac78 + 32 >> 2];
      var _0x4a16ab = _0x523b86.getTimezoneOffset();
      var _0x3b7de5 = new Date(_0x523b86.getFullYear(), 0, 1);
      var _0x40a256 = new Date(_0x523b86.getFullYear(), 6, 1).getTimezoneOffset();
      var _0xdc1d10 = _0x3b7de5.getTimezoneOffset();
      var _0x1b15a3 = Math.min(_0xdc1d10, _0x40a256);
      if (_0x4f77e4 < 0) {
        _0x588032[_0x29ac78 + 32 >> 2] = Number(_0x40a256 != _0xdc1d10 && _0x1b15a3 == _0x4a16ab);
      } else if (_0x4f77e4 > 0 != (_0x1b15a3 == _0x4a16ab)) {
        var _0x3208ed = Math.max(_0xdc1d10, _0x40a256);
        var _0xa20806 = _0x4f77e4 > 0 ? _0x1b15a3 : _0x3208ed;
        _0x523b86.setTime(_0x523b86.getTime() + (_0xa20806 - _0x4a16ab) * 60000);
      }
      _0x588032[_0x29ac78 + 24 >> 2] = _0x523b86.getDay();
      var _0x43808c = (_0x523b86.getTime() - _0x3b7de5.getTime()) / 86400000 | 0;
      _0x588032[_0x29ac78 + 28 >> 2] = _0x43808c;
      _0x588032[_0x29ac78 >> 2] = _0x523b86.getSeconds();
      _0x588032[_0x29ac78 + 4 >> 2] = _0x523b86.getMinutes();
      _0x588032[_0x29ac78 + 8 >> 2] = _0x523b86.getHours();
      _0x588032[_0x29ac78 + 12 >> 2] = _0x523b86.getDate();
      _0x588032[_0x29ac78 + 16 >> 2] = _0x523b86.getMonth();
      return _0x523b86.getTime() / 1000 | 0;
    }
    function _0x5dcc9c(_0x3844db, _0x4f5eb8, _0x4dd586, _0xf2935e, _0x235967, _0x203054) {
      try {
        var _0x13d229 = _0x170eaf.getStream(_0x235967);
        if (_0x13d229) {
          if (_0x4dd586 & 2) {
            _0x1162f4.doMsync(_0x3844db, _0x13d229, _0x4f5eb8, _0xf2935e, _0x203054);
          }
          _0x170eaf.munmap(_0x13d229);
        }
      } catch (_0x16b894) {
        if (typeof _0x170eaf == "undefined" || !(_0x16b894 instanceof _0x170eaf.ErrnoError)) {
          throw _0x16b894;
        }
        return -_0x16b894.errno;
      }
    }
    function _0x4a997c(_0xc14c44, _0x3429e0, _0x6cc29a) {
      var _0x429eea = new Date().getFullYear();
      var _0xa9806c = new Date(_0x429eea, 0, 1);
      var _0x3a2d09 = new Date(_0x429eea, 6, 1);
      var _0xb99ac3 = _0xa9806c.getTimezoneOffset();
      var _0xcb3da7 = _0x3a2d09.getTimezoneOffset();
      var _0x247add = Math.max(_0xb99ac3, _0xcb3da7);
      _0x588032[_0xc14c44 >> 2] = _0x247add * 60;
      _0x588032[_0x3429e0 >> 2] = Number(_0xb99ac3 != _0xcb3da7);
      function _0x13e00b(_0x4b2827) {
        var _0x5545c8 = _0x4b2827.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        if (_0x5545c8) {
          return _0x5545c8[1];
        } else {
          return "GMT";
        }
      }
      var _0x5360df = _0x13e00b(_0xa9806c);
      var _0x41e8a0 = _0x13e00b(_0x3a2d09);
      var _0x5dfc75 = _0x1dfc16(_0x5360df);
      var _0x1510ae = _0x1dfc16(_0x41e8a0);
      if (_0xcb3da7 < _0xb99ac3) {
        _0x588032[_0x6cc29a >> 2] = _0x5dfc75;
        _0x588032[_0x6cc29a + 4 >> 2] = _0x1510ae;
      } else {
        _0x588032[_0x6cc29a >> 2] = _0x1510ae;
        _0x588032[_0x6cc29a + 4 >> 2] = _0x5dfc75;
      }
    }
    function _0x5a0f59(_0x5d4894, _0x2b6ea6, _0x4ed061) {
      if (_0x5a0f59.called) {
        return;
      }
      _0x5a0f59.called = true;
      _0x4a997c(_0x5d4894, _0x2b6ea6, _0x4ed061);
    }
    function _0x1dd280() {
      _0xd8a7a0("");
    }
    var _0x44c6d1 = [];
    function _0x23f66f(_0x4a6073, _0x27518a) {
      _0x44c6d1.length = 0;
      var _0x27d252;
      _0x27518a >>= 2;
      while (_0x27d252 = _0x5f38b4[_0x4a6073++]) {
        var _0x3fbc3a = _0x27d252 < 105;
        if (_0x3fbc3a && _0x27518a & 1) {
          _0x27518a++;
        }
        _0x44c6d1.push(_0x3fbc3a ? _0x1231b6[_0x27518a++ >> 1] : _0x588032[_0x27518a]);
        ++_0x27518a;
      }
      return _0x44c6d1;
    }
    function _0x1e15d3(_0x3831f7, _0x153ecc, _0xcf02b6, _0x1e7e0a) {
      var _0x162cf7 = _0x23f66f(_0x153ecc, _0xcf02b6);
      return _0x45c20f[_0x3831f7].apply(null, _0x162cf7);
    }
    function _0x3cdf8a(_0x1ef8eb, _0x4204c6, _0x42a037) {
      return _0x1e15d3(_0x1ef8eb, _0x4204c6, _0x42a037, 1);
    }
    function _0x3a9cbf(_0x13cf64, _0x27acce) {
      _0x4b83e4.mainLoop.timingMode = _0x13cf64;
      _0x4b83e4.mainLoop.timingValue = _0x27acce;
      if (!_0x4b83e4.mainLoop.func) {
        return 1;
      }
      if (!_0x4b83e4.mainLoop.running) {
        _0x4b83e4.mainLoop.running = true;
      }
      if (_0x13cf64 == 0) {
        _0x4b83e4.mainLoop.scheduler = function _0x2b4e2a() {
          var _0x6d97fc = Math.max(0, _0x4b83e4.mainLoop.tickStartTime + _0x27acce - _0x4400f3()) | 0;
          setTimeout(_0x4b83e4.mainLoop.runner, _0x6d97fc);
        };
        _0x4b83e4.mainLoop.method = "timeout";
      } else if (_0x13cf64 == 1) {
        _0x4b83e4.mainLoop.scheduler = function _0x3b7fbf() {
          _0x4b83e4.requestAnimationFrame(_0x4b83e4.mainLoop.runner);
        };
        _0x4b83e4.mainLoop.method = "rAF";
      } else if (_0x13cf64 == 2) {
        if (typeof setImmediate == "undefined") {
          var _0x301bf0 = [];
          var _0x5e87a1 = "setimmediate";
          function _0x57c43e(_0x413dbb) {
            if (_0x413dbb.data === _0x5e87a1 || _0x413dbb.data.target === _0x5e87a1) {
              _0x413dbb.stopPropagation();
              _0x301bf0.shift()();
            }
          }
          addEventListener("message", _0x57c43e, true);
          setImmediate = function _0xf158bd(_0x39be65) {
            _0x301bf0.push(_0x39be65);
            if (_0x3b4bc3) {
              if (_0x1d435e.setImmediates === undefined) {
                _0x1d435e.setImmediates = [];
              }
              _0x1d435e.setImmediates.push(_0x39be65);
              postMessage({
                target: _0x5e87a1
              });
            } else {
              postMessage(_0x5e87a1, "*");
            }
          };
        }
        _0x4b83e4.mainLoop.scheduler = function _0x4c54b4() {
          setImmediate(_0x4b83e4.mainLoop.runner);
        };
        _0x4b83e4.mainLoop.method = "immediate";
      }
      return 0;
    }
    var _0x4400f3;
    if (_0x2d17f7) {
      _0x4400f3 = () => {
        var _0x61011e = process.hrtime();
        return _0x61011e[0] * 1000 + _0x61011e[1] / 1000000;
      };
    } else {
      _0x4400f3 = () => performance.now();
    }
    function _0x4f47b0(_0x3da4b5) {
      _0x2b0816(_0x3da4b5);
    }
    function _0x428fcf() {}
    function _0x18477a(_0x443454, _0xfb51e2, _0x174ca3, _0xdda11, _0x34b361) {
      _0x39d8f2(!_0x4b83e4.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
      _0x4b83e4.mainLoop.func = _0x443454;
      _0x4b83e4.mainLoop.arg = _0xdda11;
      var _0x5c4e60 = _0x4b83e4.mainLoop.currentlyRunningMainloop;
      function _0x549aae() {
        if (_0x5c4e60 < _0x4b83e4.mainLoop.currentlyRunningMainloop) {
          _0x428fcf();
          return false;
        }
        return true;
      }
      _0x4b83e4.mainLoop.running = false;
      _0x4b83e4.mainLoop.runner = function _0x18d088() {
        if (_0x376923) {
          return;
        }
        if (_0x4b83e4.mainLoop.queue.length > 0) {
          var _0x3aef9a = Date.now();
          var _0x2cc48f = _0x4b83e4.mainLoop.queue.shift();
          _0x2cc48f.func(_0x2cc48f.arg);
          if (_0x4b83e4.mainLoop.remainingBlockers) {
            var _0x311a86 = _0x4b83e4.mainLoop.remainingBlockers;
            var _0x5d1106 = _0x311a86 % 1 == 0 ? _0x311a86 - 1 : Math.floor(_0x311a86);
            if (_0x2cc48f.counted) {
              _0x4b83e4.mainLoop.remainingBlockers = _0x5d1106;
            } else {
              _0x5d1106 = _0x5d1106 + 0.5;
              _0x4b83e4.mainLoop.remainingBlockers = (_0x311a86 * 8 + _0x5d1106) / 9;
            }
          }
          _0x29c873("main loop blocker \"" + _0x2cc48f.name + "\" took " + (Date.now() - _0x3aef9a) + " ms");
          _0x4b83e4.mainLoop.updateStatus();
          if (!_0x549aae()) {
            return;
          }
          setTimeout(_0x4b83e4.mainLoop.runner, 0);
          return;
        }
        if (!_0x549aae()) {
          return;
        }
        _0x4b83e4.mainLoop.currentFrameNumber = _0x4b83e4.mainLoop.currentFrameNumber + 1 | 0;
        if (_0x4b83e4.mainLoop.timingMode == 1 && _0x4b83e4.mainLoop.timingValue > 1 && _0x4b83e4.mainLoop.currentFrameNumber % _0x4b83e4.mainLoop.timingValue != 0) {
          _0x4b83e4.mainLoop.scheduler();
          return;
        } else if (_0x4b83e4.mainLoop.timingMode == 0) {
          _0x4b83e4.mainLoop.tickStartTime = _0x4400f3();
        }
        _0x5ae6d1.newRenderingFrameStarted();
        _0x4b83e4.mainLoop.runIter(_0x443454);
        if (!_0x549aae()) {
          return;
        }
        if (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData) {
          SDL.audio.queueNewAudioData();
        }
        _0x4b83e4.mainLoop.scheduler();
      };
      if (!_0x34b361) {
        if (_0xfb51e2 && _0xfb51e2 > 0) {
          _0x3a9cbf(0, 1000 / _0xfb51e2);
        } else {
          _0x3a9cbf(1, 1);
        }
        _0x4b83e4.mainLoop.scheduler();
      }
      if (_0x174ca3) {
        throw "unwind";
      }
    }
    function _0x197ee6(_0x3daf2e, _0x23324e) {
      if (_0x376923) {
        return;
      }
      if (_0x23324e) {
        _0x3daf2e();
        return;
      }
      try {
        _0x3daf2e();
      } catch (_0x463e3d) {
        _0x4bbf2b(_0x463e3d);
      }
    }
    function _0x36e941(_0x3ef807, _0x598c40) {
      return setTimeout(function () {
        _0x197ee6(_0x3ef807);
      }, _0x598c40);
    }
    var _0x4b83e4 = {
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
          _0x4b83e4.mainLoop.scheduler = null;
          _0x4b83e4.mainLoop.currentlyRunningMainloop++;
        },
        resume: function () {
          _0x4b83e4.mainLoop.currentlyRunningMainloop++;
          var _0x2911b0 = _0x4b83e4.mainLoop.timingMode;
          var _0x1bb349 = _0x4b83e4.mainLoop.timingValue;
          var _0x3dfe90 = _0x4b83e4.mainLoop.func;
          _0x4b83e4.mainLoop.func = null;
          _0x18477a(_0x3dfe90, 0, false, _0x4b83e4.mainLoop.arg, true);
          _0x3a9cbf(_0x2911b0, _0x1bb349);
          _0x4b83e4.mainLoop.scheduler();
        },
        updateStatus: function () {
          if (_0x1d435e.setStatus) {
            var _0x31a2c9 = _0x1d435e.statusMessage || "Please wait...";
            var _0x2abaa0 = _0x4b83e4.mainLoop.remainingBlockers;
            var _0x329188 = _0x4b83e4.mainLoop.expectedBlockers;
            if (_0x2abaa0) {
              if (_0x2abaa0 < _0x329188) {
                _0x1d435e.setStatus(_0x31a2c9 + " (" + (_0x329188 - _0x2abaa0) + "/" + _0x329188 + ")");
              } else {
                _0x1d435e.setStatus(_0x31a2c9);
              }
            } else {
              _0x1d435e.setStatus("");
            }
          }
        },
        runIter: function (_0x40cd37) {
          if (_0x376923) {
            return;
          }
          if (_0x1d435e.preMainLoop) {
            var _0xe7e1e2 = _0x1d435e.preMainLoop();
            if (_0xe7e1e2 === false) {
              return;
            }
          }
          _0x197ee6(_0x40cd37);
          if (_0x1d435e.postMainLoop) {
            _0x1d435e.postMainLoop();
          }
        }
      },
      isFullscreen: false,
      pointerLock: false,
      moduleContextCreatedCallbacks: [],
      workers: [],
      init: function () {
        if (!_0x1d435e.preloadPlugins) {
          _0x1d435e.preloadPlugins = [];
        }
        if (_0x4b83e4.initted) {
          return;
        }
        _0x4b83e4.initted = true;
        try {
          new Blob();
          _0x4b83e4.hasBlobConstructor = true;
        } catch (_0x182c85) {
          _0x4b83e4.hasBlobConstructor = false;
          _0x29c873("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        _0x4b83e4.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x4b83e4.hasBlobConstructor ? _0x29c873("warning: no BlobBuilder") : null;
        _0x4b83e4.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
        if (!_0x1d435e.noImageDecoding && typeof _0x4b83e4.URLObject == "undefined") {
          _0x29c873("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          _0x1d435e.noImageDecoding = true;
        }
        var _0x42655c = {};
        _0x42655c.canHandle = function _0x2ccd29(_0x146619) {
          return !_0x1d435e.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x146619);
        };
        _0x42655c.handle = function _0x366e68(_0x4c81c0, _0x1d4eb7, _0x196eb6, _0x155a46) {
          var _0x4bf433 = null;
          if (_0x4b83e4.hasBlobConstructor) {
            try {
              _0x4bf433 = new Blob([_0x4c81c0], {
                type: _0x4b83e4.getMimetype(_0x1d4eb7)
              });
              if (_0x4bf433.size !== _0x4c81c0.length) {
                _0x4bf433 = new Blob([new Uint8Array(_0x4c81c0).buffer], {
                  type: _0x4b83e4.getMimetype(_0x1d4eb7)
                });
              }
            } catch (_0x2f0631) {
              _0x95491a("Blob constructor present but fails: " + _0x2f0631 + "; falling back to blob builder");
            }
          }
          if (!_0x4bf433) {
            var _0xc623a7 = new _0x4b83e4.BlobBuilder();
            _0xc623a7.append(new Uint8Array(_0x4c81c0).buffer);
            _0x4bf433 = _0xc623a7.getBlob();
          }
          var _0x19ce25 = _0x4b83e4.URLObject.createObjectURL(_0x4bf433);
          var _0x5bebe9 = new Image();
          _0x5bebe9.onload = () => {
            _0x39d8f2(_0x5bebe9.complete, "Image " + _0x1d4eb7 + " could not be decoded");
            var _0x88511b = document.createElement("canvas");
            _0x88511b.width = _0x5bebe9.width;
            _0x88511b.height = _0x5bebe9.height;
            var _0x427991 = _0x88511b.getContext("2d");
            _0x427991.drawImage(_0x5bebe9, 0, 0);
            _0x1d435e.preloadedImages[_0x1d4eb7] = _0x88511b;
            _0x4b83e4.URLObject.revokeObjectURL(_0x19ce25);
            if (_0x196eb6) {
              _0x196eb6(_0x4c81c0);
            }
          };
          _0x5bebe9.onerror = _0x42b56e => {
            _0x29c873("Image " + _0x19ce25 + " could not be decoded");
            if (_0x155a46) {
              _0x155a46();
            }
          };
          _0x5bebe9.src = _0x19ce25;
        };
        _0x1d435e.preloadPlugins.push(_0x42655c);
        var _0x44afb8 = {};
        _0x44afb8.canHandle = function _0x4031a5(_0x15835d) {
          return !_0x1d435e.noAudioDecoding && _0x15835d.substr(-4) in {
            ".ogg": 1,
            ".wav": 1,
            ".mp3": 1
          };
        };
        _0x44afb8.handle = function _0x3d4ed3(_0x4c94be, _0xc256da, _0xa12ac2, _0x1ab9f7) {
          var _0x5210d1 = false;
          function _0x353762(_0x448c91) {
            if (_0x5210d1) {
              return;
            }
            _0x5210d1 = true;
            _0x1d435e.preloadedAudios[_0xc256da] = _0x448c91;
            if (_0xa12ac2) {
              _0xa12ac2(_0x4c94be);
            }
          }
          function _0x16c3b7() {
            if (_0x5210d1) {
              return;
            }
            _0x5210d1 = true;
            _0x1d435e.preloadedAudios[_0xc256da] = new Audio();
            if (_0x1ab9f7) {
              _0x1ab9f7();
            }
          }
          if (_0x4b83e4.hasBlobConstructor) {
            try {
              var _0x271cfb = new Blob([_0x4c94be], {
                type: _0x4b83e4.getMimetype(_0xc256da)
              });
            } catch (_0x41f4e1) {
              return _0x16c3b7();
            }
            var _0x4bc421 = _0x4b83e4.URLObject.createObjectURL(_0x271cfb);
            var _0x12d0e4 = new Audio();
            _0x12d0e4.addEventListener("canplaythrough", function () {
              _0x353762(_0x12d0e4);
            }, false);
            _0x12d0e4.onerror = function _0x49763f(_0x554509) {
              if (_0x5210d1) {
                return;
              }
              _0x29c873("warning: browser could not fully decode audio " + _0xc256da + ", trying slower base64 approach");
              function _0x5c15b5(_0x2ad02f) {
                var _0x5cba41 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var _0x16402a = "=";
                var _0x82360c = "";
                var _0x20043d = 0;
                var _0x155ada = 0;
                for (var _0x5bf9cb = 0; _0x5bf9cb < _0x2ad02f.length; _0x5bf9cb++) {
                  _0x20043d = _0x20043d << 8 | _0x2ad02f[_0x5bf9cb];
                  _0x155ada += 8;
                  while (_0x155ada >= 6) {
                    var _0x16d84 = _0x20043d >> _0x155ada - 6 & 63;
                    _0x155ada -= 6;
                    _0x82360c += _0x5cba41[_0x16d84];
                  }
                }
                if (_0x155ada == 2) {
                  _0x82360c += _0x5cba41[(_0x20043d & 3) << 4];
                  _0x82360c += _0x16402a + _0x16402a;
                } else if (_0x155ada == 4) {
                  _0x82360c += _0x5cba41[(_0x20043d & 15) << 2];
                  _0x82360c += _0x16402a;
                }
                return _0x82360c;
              }
              _0x12d0e4.src = "data:audio/x-" + _0xc256da.substr(-3) + ";base64," + _0x5c15b5(_0x4c94be);
              _0x353762(_0x12d0e4);
            };
            _0x12d0e4.src = _0x4bc421;
            _0x36e941(function () {
              _0x353762(_0x12d0e4);
            }, 10000);
          } else {
            return _0x16c3b7();
          }
        };
        _0x1d435e.preloadPlugins.push(_0x44afb8);
        function _0x5f2d0e() {
          _0x4b83e4.pointerLock = document.pointerLockElement === _0x1d435e.canvas || document.mozPointerLockElement === _0x1d435e.canvas || document.webkitPointerLockElement === _0x1d435e.canvas || document.msPointerLockElement === _0x1d435e.canvas;
        }
        var _0x2ea51b = _0x1d435e.canvas;
        if (_0x2ea51b) {
          _0x2ea51b.requestPointerLock = _0x2ea51b.requestPointerLock || _0x2ea51b.mozRequestPointerLock || _0x2ea51b.webkitRequestPointerLock || _0x2ea51b.msRequestPointerLock || function () {};
          _0x2ea51b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
          _0x2ea51b.exitPointerLock = _0x2ea51b.exitPointerLock.bind(document);
          document.addEventListener("pointerlockchange", _0x5f2d0e, false);
          document.addEventListener("mozpointerlockchange", _0x5f2d0e, false);
          document.addEventListener("webkitpointerlockchange", _0x5f2d0e, false);
          document.addEventListener("mspointerlockchange", _0x5f2d0e, false);
          if (_0x1d435e.elementPointerLock) {
            _0x2ea51b.addEventListener("click", function (_0x43b8cd) {
              if (!_0x4b83e4.pointerLock && _0x1d435e.canvas.requestPointerLock) {
                _0x1d435e.canvas.requestPointerLock();
                _0x43b8cd.preventDefault();
              }
            }, false);
          }
        }
      },
      handledByPreloadPlugin: function (_0x2e87b3, _0x4f5967, _0x9ad72a, _0x504183) {
        _0x4b83e4.init();
        var _0x4119ae = false;
        _0x1d435e.preloadPlugins.forEach(function (_0x3b233e) {
          if (_0x4119ae) {
            return;
          }
          if (_0x3b233e.canHandle(_0x4f5967)) {
            _0x3b233e.handle(_0x2e87b3, _0x4f5967, _0x9ad72a, _0x504183);
            _0x4119ae = true;
          }
        });
        return _0x4119ae;
      },
      createContext: function (_0x242826, _0x30da0f, _0x1de0d9, _0x16d472) {
        if (_0x30da0f && _0x1d435e.ctx && _0x242826 == _0x1d435e.canvas) {
          return _0x1d435e.ctx;
        }
        var _0x1b2a57;
        var _0x22fa7a;
        if (_0x30da0f) {
          var _0x4c883c = {
            antialias: false,
            alpha: false,
            majorVersion: typeof WebGL2RenderingContext != "undefined" ? 2 : 1
          };
          if (_0x16d472) {
            for (var _0x5a5867 in _0x16d472) {
              _0x4c883c[_0x5a5867] = _0x16d472[_0x5a5867];
            }
          }
          if (typeof _0x5ae6d1 != "undefined") {
            _0x22fa7a = _0x5ae6d1.createContext(_0x242826, _0x4c883c);
            if (_0x22fa7a) {
              _0x1b2a57 = _0x5ae6d1.getContext(_0x22fa7a).GLctx;
            }
          }
        } else {
          _0x1b2a57 = _0x242826.getContext("2d");
        }
        if (!_0x1b2a57) {
          return null;
        }
        if (_0x1de0d9) {
          if (!_0x30da0f) {
            _0x39d8f2(typeof _0x1b6649 == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
          }
          _0x1d435e.ctx = _0x1b2a57;
          if (_0x30da0f) {
            _0x5ae6d1.makeContextCurrent(_0x22fa7a);
          }
          _0x1d435e.useWebGL = _0x30da0f;
          _0x4b83e4.moduleContextCreatedCallbacks.forEach(function (_0x418a96) {
            _0x418a96();
          });
          _0x4b83e4.init();
        }
        return _0x1b2a57;
      },
      destroyContext: function (_0x123cd4, _0x3db674, _0x224d47) {},
      fullscreenHandlersInstalled: false,
      lockPointer: undefined,
      resizeCanvas: undefined,
      requestFullscreen: function (_0x5f183f, _0x415eac) {
        _0x4b83e4.lockPointer = _0x5f183f;
        _0x4b83e4.resizeCanvas = _0x415eac;
        if (typeof _0x4b83e4.lockPointer == "undefined") {
          _0x4b83e4.lockPointer = true;
        }
        if (typeof _0x4b83e4.resizeCanvas == "undefined") {
          _0x4b83e4.resizeCanvas = false;
        }
        var _0x470250 = _0x1d435e.canvas;
        function _0x4cac45() {
          _0x4b83e4.isFullscreen = false;
          var _0xab249c = _0x470250.parentNode;
          if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0xab249c) {
            _0x470250.exitFullscreen = _0x4b83e4.exitFullscreen;
            if (_0x4b83e4.lockPointer) {
              _0x470250.requestPointerLock();
            }
            _0x4b83e4.isFullscreen = true;
            if (_0x4b83e4.resizeCanvas) {
              _0x4b83e4.setFullscreenCanvasSize();
            } else {
              _0x4b83e4.updateCanvasDimensions(_0x470250);
            }
          } else {
            _0xab249c.parentNode.insertBefore(_0x470250, _0xab249c);
            _0xab249c.parentNode.removeChild(_0xab249c);
            if (_0x4b83e4.resizeCanvas) {
              _0x4b83e4.setWindowedCanvasSize();
            } else {
              _0x4b83e4.updateCanvasDimensions(_0x470250);
            }
          }
          if (_0x1d435e.onFullScreen) {
            _0x1d435e.onFullScreen(_0x4b83e4.isFullscreen);
          }
          if (_0x1d435e.onFullscreen) {
            _0x1d435e.onFullscreen(_0x4b83e4.isFullscreen);
          }
        }
        if (!_0x4b83e4.fullscreenHandlersInstalled) {
          _0x4b83e4.fullscreenHandlersInstalled = true;
          document.addEventListener("fullscreenchange", _0x4cac45, false);
          document.addEventListener("mozfullscreenchange", _0x4cac45, false);
          document.addEventListener("webkitfullscreenchange", _0x4cac45, false);
          document.addEventListener("MSFullscreenChange", _0x4cac45, false);
        }
        var _0x42b9ab = document.createElement("div");
        _0x470250.parentNode.insertBefore(_0x42b9ab, _0x470250);
        _0x42b9ab.appendChild(_0x470250);
        _0x42b9ab.requestFullscreen = _0x42b9ab.requestFullscreen || _0x42b9ab.mozRequestFullScreen || _0x42b9ab.msRequestFullscreen || (_0x42b9ab.webkitRequestFullscreen ? function () {
          _0x42b9ab.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null) || (_0x42b9ab.webkitRequestFullScreen ? function () {
          _0x42b9ab.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null);
        _0x42b9ab.requestFullscreen();
      },
      exitFullscreen: function () {
        if (!_0x4b83e4.isFullscreen) {
          return false;
        }
        var _0xf2d792 = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
        _0xf2d792.apply(document, []);
        return true;
      },
      nextRAF: 0,
      fakeRequestAnimationFrame: function (_0x2cc2b9) {
        var _0x2ead6e = Date.now();
        if (_0x4b83e4.nextRAF === 0) {
          _0x4b83e4.nextRAF = _0x2ead6e + 1000 / 60;
        } else {
          while (_0x2ead6e + 2 >= _0x4b83e4.nextRAF) {
            _0x4b83e4.nextRAF += 1000 / 60;
          }
        }
        var _0x3ff51e = Math.max(_0x4b83e4.nextRAF - _0x2ead6e, 0);
        setTimeout(_0x2cc2b9, _0x3ff51e);
      },
      requestAnimationFrame: function (_0x48854f) {
        if (typeof requestAnimationFrame == "function") {
          requestAnimationFrame(_0x48854f);
          return;
        }
        var _0xb338a = _0x4b83e4.fakeRequestAnimationFrame;
        _0xb338a(_0x48854f);
      },
      safeSetTimeout: function (_0x3e3b43) {
        return _0x36e941(_0x3e3b43);
      },
      safeRequestAnimationFrame: function (_0x1abb54) {
        return _0x4b83e4.requestAnimationFrame(function () {
          _0x197ee6(_0x1abb54);
        });
      },
      getMimetype: function (_0x5305d3) {
        return {
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          png: "image/png",
          bmp: "image/bmp",
          ogg: "audio/ogg",
          wav: "audio/wav",
          mp3: "audio/mpeg"
        }[_0x5305d3.substr(_0x5305d3.lastIndexOf(".") + 1)];
      },
      getUserMedia: function (_0x1fa50e) {
        if (!window.getUserMedia) {
          window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
        }
        window.getUserMedia(_0x1fa50e);
      },
      getMovementX: function (_0x19f5d7) {
        return _0x19f5d7.movementX || _0x19f5d7.mozMovementX || _0x19f5d7.webkitMovementX || 0;
      },
      getMovementY: function (_0x256ded) {
        return _0x256ded.movementY || _0x256ded.mozMovementY || _0x256ded.webkitMovementY || 0;
      },
      getMouseWheelDelta: function (_0x384c2b) {
        var _0x50aab6 = 0;
        switch (_0x384c2b.type) {
          case "DOMMouseScroll":
            _0x50aab6 = _0x384c2b.detail / 3;
            break;
          case "mousewheel":
            _0x50aab6 = _0x384c2b.wheelDelta / 120;
            break;
          case "wheel":
            _0x50aab6 = _0x384c2b.deltaY;
            switch (_0x384c2b.deltaMode) {
              case 0:
                _0x50aab6 /= 100;
                break;
              case 1:
                _0x50aab6 /= 3;
                break;
              case 2:
                _0x50aab6 *= 80;
                break;
              default:
                throw "unrecognized mouse wheel delta mode: " + _0x384c2b.deltaMode;
            }
            break;
          default:
            throw "unrecognized mouse wheel event: " + _0x384c2b.type;
        }
        return _0x50aab6;
      },
      mouseX: 0,
      mouseY: 0,
      mouseMovementX: 0,
      mouseMovementY: 0,
      touches: {},
      lastTouches: {},
      calculateMouseEvent: function (_0x244785) {
        if (_0x4b83e4.pointerLock) {
          if (_0x244785.type != "mousemove" && "mozMovementX" in _0x244785) {
            _0x4b83e4.mouseMovementX = _0x4b83e4.mouseMovementY = 0;
          } else {
            _0x4b83e4.mouseMovementX = _0x4b83e4.getMovementX(_0x244785);
            _0x4b83e4.mouseMovementY = _0x4b83e4.getMovementY(_0x244785);
          }
          if (typeof SDL != "undefined") {
            _0x4b83e4.mouseX = SDL.mouseX + _0x4b83e4.mouseMovementX;
            _0x4b83e4.mouseY = SDL.mouseY + _0x4b83e4.mouseMovementY;
          } else {
            _0x4b83e4.mouseX += _0x4b83e4.mouseMovementX;
            _0x4b83e4.mouseY += _0x4b83e4.mouseMovementY;
          }
        } else {
          var _0x326fb2 = _0x1d435e.canvas.getBoundingClientRect();
          var _0x3dffc0 = _0x1d435e.canvas.width;
          var _0x4ac6f0 = _0x1d435e.canvas.height;
          var _0x6e1c97 = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
          var _0x265470 = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
          if (_0x244785.type === "touchstart" || _0x244785.type === "touchend" || _0x244785.type === "touchmove") {
            var _0x45ee4c = _0x244785.touch;
            if (_0x45ee4c === undefined) {
              return;
            }
            var _0x326f2d = _0x45ee4c.pageX - (_0x6e1c97 + _0x326fb2.left);
            var _0x2d27fb = _0x45ee4c.pageY - (_0x265470 + _0x326fb2.top);
            _0x326f2d = _0x326f2d * (_0x3dffc0 / _0x326fb2.width);
            _0x2d27fb = _0x2d27fb * (_0x4ac6f0 / _0x326fb2.height);
            var _0xf40990 = {
              x: _0x326f2d,
              y: _0x2d27fb
            };
            if (_0x244785.type === "touchstart") {
              _0x4b83e4.lastTouches[_0x45ee4c.identifier] = _0xf40990;
              _0x4b83e4.touches[_0x45ee4c.identifier] = _0xf40990;
            } else if (_0x244785.type === "touchend" || _0x244785.type === "touchmove") {
              var _0xf154f3 = _0x4b83e4.touches[_0x45ee4c.identifier];
              if (!_0xf154f3) {
                _0xf154f3 = _0xf40990;
              }
              _0x4b83e4.lastTouches[_0x45ee4c.identifier] = _0xf154f3;
              _0x4b83e4.touches[_0x45ee4c.identifier] = _0xf40990;
            }
            return;
          }
          var _0x510f04 = _0x244785.pageX - (_0x6e1c97 + _0x326fb2.left);
          var _0x28b694 = _0x244785.pageY - (_0x265470 + _0x326fb2.top);
          _0x510f04 = _0x510f04 * (_0x3dffc0 / _0x326fb2.width);
          _0x28b694 = _0x28b694 * (_0x4ac6f0 / _0x326fb2.height);
          _0x4b83e4.mouseMovementX = _0x510f04 - _0x4b83e4.mouseX;
          _0x4b83e4.mouseMovementY = _0x28b694 - _0x4b83e4.mouseY;
          _0x4b83e4.mouseX = _0x510f04;
          _0x4b83e4.mouseY = _0x28b694;
        }
      },
      resizeListeners: [],
      updateResizeListeners: function () {
        var _0x1680fb = _0x1d435e.canvas;
        _0x4b83e4.resizeListeners.forEach(function (_0x4ab89c) {
          _0x4ab89c(_0x1680fb.width, _0x1680fb.height);
        });
      },
      setCanvasSize: function (_0x5c49ed, _0x38864d, _0x2915c0) {
        var _0x40d4de = _0x1d435e.canvas;
        _0x4b83e4.updateCanvasDimensions(_0x40d4de, _0x5c49ed, _0x38864d);
        if (!_0x2915c0) {
          _0x4b83e4.updateResizeListeners();
        }
      },
      windowedWidth: 0,
      windowedHeight: 0,
      setFullscreenCanvasSize: function () {
        if (typeof SDL != "undefined") {
          var _0x517943 = _0x5db304[SDL.screen >> 2];
          _0x517943 = _0x517943 | 8388608;
          _0x588032[SDL.screen >> 2] = _0x517943;
        }
        _0x4b83e4.updateCanvasDimensions(_0x1d435e.canvas);
        _0x4b83e4.updateResizeListeners();
      },
      setWindowedCanvasSize: function () {
        if (typeof SDL != "undefined") {
          var _0x219d04 = _0x5db304[SDL.screen >> 2];
          _0x219d04 = _0x219d04 & ~8388608;
          _0x588032[SDL.screen >> 2] = _0x219d04;
        }
        _0x4b83e4.updateCanvasDimensions(_0x1d435e.canvas);
        _0x4b83e4.updateResizeListeners();
      },
      updateCanvasDimensions: function (_0x63ced3, _0x3045ea, _0x31bc5d) {
        if (_0x3045ea && _0x31bc5d) {
          _0x63ced3.widthNative = _0x3045ea;
          _0x63ced3.heightNative = _0x31bc5d;
        } else {
          _0x3045ea = _0x63ced3.widthNative;
          _0x31bc5d = _0x63ced3.heightNative;
        }
        var _0x1b0230 = _0x3045ea;
        var _0x343a13 = _0x31bc5d;
        if (_0x1d435e.forcedAspectRatio && _0x1d435e.forcedAspectRatio > 0) {
          if (_0x1b0230 / _0x343a13 < _0x1d435e.forcedAspectRatio) {
            _0x1b0230 = Math.round(_0x343a13 * _0x1d435e.forcedAspectRatio);
          } else {
            _0x343a13 = Math.round(_0x1b0230 / _0x1d435e.forcedAspectRatio);
          }
        }
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x63ced3.parentNode && typeof screen != "undefined") {
          var _0x3b44bd = Math.min(screen.width / _0x1b0230, screen.height / _0x343a13);
          _0x1b0230 = Math.round(_0x1b0230 * _0x3b44bd);
          _0x343a13 = Math.round(_0x343a13 * _0x3b44bd);
        }
        if (_0x4b83e4.resizeCanvas) {
          if (_0x63ced3.width != _0x1b0230) {
            _0x63ced3.width = _0x1b0230;
          }
          if (_0x63ced3.height != _0x343a13) {
            _0x63ced3.height = _0x343a13;
          }
          if (typeof _0x63ced3.style != "undefined") {
            _0x63ced3.style.removeProperty("width");
            _0x63ced3.style.removeProperty("height");
          }
        } else {
          if (_0x63ced3.width != _0x3045ea) {
            _0x63ced3.width = _0x3045ea;
          }
          if (_0x63ced3.height != _0x31bc5d) {
            _0x63ced3.height = _0x31bc5d;
          }
          if (typeof _0x63ced3.style != "undefined") {
            if (_0x1b0230 != _0x3045ea || _0x343a13 != _0x31bc5d) {
              _0x63ced3.style.setProperty("width", _0x1b0230 + "px", "important");
              _0x63ced3.style.setProperty("height", _0x343a13 + "px", "important");
            } else {
              _0x63ced3.style.removeProperty("width");
              _0x63ced3.style.removeProperty("height");
            }
          }
        }
      }
    };
    function _0x44c09e() {
      _0x4b83e4.mainLoop.pause();
      _0x4b83e4.mainLoop.func = null;
    }
    function _0x46142d(_0x117886) {
      clearInterval(_0x117886);
    }
    function _0xd4595() {
      return Date.now();
    }
    var _0x4ad3eb = {
      inEventHandler: 0,
      removeAllEventListeners: function () {
        for (var _0x3a5375 = _0x4ad3eb.eventHandlers.length - 1; _0x3a5375 >= 0; --_0x3a5375) {
          _0x4ad3eb._removeHandler(_0x3a5375);
        }
        _0x4ad3eb.eventHandlers = [];
        _0x4ad3eb.deferredCalls = [];
      },
      registerRemoveEventListeners: function () {
        if (!_0x4ad3eb.removeEventListenersRegistered) {
          _0x258d95.push(_0x4ad3eb.removeAllEventListeners);
          _0x4ad3eb.removeEventListenersRegistered = true;
        }
      },
      deferredCalls: [],
      deferCall: function (_0x347b09, _0x2d2acc, _0x2abfdf) {
        function _0x3c704c(_0x73236b, _0x53ec2a) {
          if (_0x73236b.length != _0x53ec2a.length) {
            return false;
          }
          for (var _0x3cb36d in _0x73236b) {
            if (_0x73236b[_0x3cb36d] != _0x53ec2a[_0x3cb36d]) {
              return false;
            }
          }
          return true;
        }
        for (var _0x1a10ac in _0x4ad3eb.deferredCalls) {
          var _0x53a528 = _0x4ad3eb.deferredCalls[_0x1a10ac];
          if (_0x53a528.targetFunction == _0x347b09 && _0x3c704c(_0x53a528.argsList, _0x2abfdf)) {
            return;
          }
        }
        _0x4ad3eb.deferredCalls.push({
          targetFunction: _0x347b09,
          precedence: _0x2d2acc,
          argsList: _0x2abfdf
        });
        _0x4ad3eb.deferredCalls.sort(function (_0x1c6e89, _0x1a276d) {
          return _0x1c6e89.precedence < _0x1a276d.precedence;
        });
      },
      removeDeferredCalls: function (_0x21312d) {
        for (var _0x1ffb86 = 0; _0x1ffb86 < _0x4ad3eb.deferredCalls.length; ++_0x1ffb86) {
          if (_0x4ad3eb.deferredCalls[_0x1ffb86].targetFunction == _0x21312d) {
            _0x4ad3eb.deferredCalls.splice(_0x1ffb86, 1);
            --_0x1ffb86;
          }
        }
      },
      canPerformEventHandlerRequests: function () {
        return _0x4ad3eb.inEventHandler && _0x4ad3eb.currentEventHandler.allowsDeferredCalls;
      },
      runDeferredCalls: function () {
        if (!_0x4ad3eb.canPerformEventHandlerRequests()) {
          return;
        }
        for (var _0x16312e = 0; _0x16312e < _0x4ad3eb.deferredCalls.length; ++_0x16312e) {
          var _0x32d673 = _0x4ad3eb.deferredCalls[_0x16312e];
          _0x4ad3eb.deferredCalls.splice(_0x16312e, 1);
          --_0x16312e;
          _0x32d673.targetFunction.apply(null, _0x32d673.argsList);
        }
      },
      eventHandlers: [],
      removeAllHandlersOnTarget: function (_0x54e279, _0x15c0d1) {
        for (var _0x55d94b = 0; _0x55d94b < _0x4ad3eb.eventHandlers.length; ++_0x55d94b) {
          if (_0x4ad3eb.eventHandlers[_0x55d94b].target == _0x54e279 && (!_0x15c0d1 || _0x15c0d1 == _0x4ad3eb.eventHandlers[_0x55d94b].eventTypeString)) {
            _0x4ad3eb._removeHandler(_0x55d94b--);
          }
        }
      },
      _removeHandler: function (_0x331b88) {
        var _0x69a462 = _0x4ad3eb.eventHandlers[_0x331b88];
        _0x69a462.target.removeEventListener(_0x69a462.eventTypeString, _0x69a462.eventListenerFunc, _0x69a462.useCapture);
        _0x4ad3eb.eventHandlers.splice(_0x331b88, 1);
      },
      registerOrRemoveHandler: function (_0x5b7a48) {
        var _0x57955a = function _0x5cf78d(_0x2565e0) {
          ++_0x4ad3eb.inEventHandler;
          _0x4ad3eb.currentEventHandler = _0x5b7a48;
          _0x4ad3eb.runDeferredCalls();
          _0x5b7a48.handlerFunc(_0x2565e0);
          _0x4ad3eb.runDeferredCalls();
          --_0x4ad3eb.inEventHandler;
        };
        if (_0x5b7a48.callbackfunc) {
          _0x5b7a48.eventListenerFunc = _0x57955a;
          _0x5b7a48.target.addEventListener(_0x5b7a48.eventTypeString, _0x57955a, _0x5b7a48.useCapture);
          _0x4ad3eb.eventHandlers.push(_0x5b7a48);
          _0x4ad3eb.registerRemoveEventListeners();
        } else {
          for (var _0x45c251 = 0; _0x45c251 < _0x4ad3eb.eventHandlers.length; ++_0x45c251) {
            if (_0x4ad3eb.eventHandlers[_0x45c251].target == _0x5b7a48.target && _0x4ad3eb.eventHandlers[_0x45c251].eventTypeString == _0x5b7a48.eventTypeString) {
              _0x4ad3eb._removeHandler(_0x45c251--);
            }
          }
        }
      },
      getNodeNameForTarget: function (_0x3adf43) {
        if (!_0x3adf43) {
          return "";
        }
        if (_0x3adf43 == window) {
          return "#window";
        }
        if (_0x3adf43 == screen) {
          return "#screen";
        }
        if (_0x3adf43 && _0x3adf43.nodeName) {
          return _0x3adf43.nodeName;
        } else {
          return "";
        }
      },
      fullscreenEnabled: function () {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled;
      }
    };
    var _0x173432 = {};
    function _0x424038(_0x25c8d0) {
      if (_0x25c8d0 > 2) {
        return _0x5eaf00(_0x25c8d0);
      } else {
        return _0x25c8d0;
      }
    }
    var _0x54bbc9 = [0, typeof document != "undefined" ? document : 0, typeof window != "undefined" ? window : 0];
    function _0x335a2b(_0x4b6880) {
      _0x4b6880 = _0x424038(_0x4b6880);
      var _0x329e6f = _0x54bbc9[_0x4b6880] || (typeof document != "undefined" ? document.querySelector(_0x4b6880) : undefined);
      return _0x329e6f;
    }
    function _0x17b2ae(_0x19906c) {
      return _0x335a2b(_0x19906c);
    }
    function _0x1d9bb4(_0x4834b5, _0x341c74, _0x486802) {
      var _0x21553e = _0x17b2ae(_0x4834b5);
      if (!_0x21553e) {
        return -4;
      }
      _0x588032[_0x341c74 >> 2] = _0x21553e.width;
      _0x588032[_0x486802 >> 2] = _0x21553e.height;
    }
    function _0x2b5cbf(_0x1013ca) {
      return _0x14b627(function () {
        var _0x1c5b34 = _0x5c4392(8);
        var _0x3a3035 = _0x1c5b34 + 4;
        var _0x5146cd = _0x5c4392(_0x1013ca.id.length + 1);
        _0x17e527(_0x1013ca.id, _0x5146cd, _0x1013ca.id.length + 1);
        var _0x319914 = _0x1d9bb4(_0x5146cd, _0x1c5b34, _0x3a3035);
        var _0x2063c0 = [_0x588032[_0x1c5b34 >> 2], _0x588032[_0x3a3035 >> 2]];
        return _0x2063c0;
      });
    }
    function _0x4ec937(_0x8708a9, _0x3e5148, _0x3949b7) {
      var _0x425521 = _0x17b2ae(_0x8708a9);
      if (!_0x425521) {
        return -4;
      }
      _0x425521.width = _0x3e5148;
      _0x425521.height = _0x3949b7;
      return 0;
    }
    function _0x6ca98b(_0x3ae3d7, _0x12a3c4, _0x3fa69e) {
      if (!_0x3ae3d7.controlTransferredOffscreen) {
        _0x3ae3d7.width = _0x12a3c4;
        _0x3ae3d7.height = _0x3fa69e;
      } else {
        _0x14b627(function () {
          var _0x2c3225 = _0x5c4392(_0x3ae3d7.id.length + 1);
          _0x17e527(_0x3ae3d7.id, _0x2c3225, _0x3ae3d7.id.length + 1);
          _0x4ec937(_0x2c3225, _0x12a3c4, _0x3fa69e);
        });
      }
    }
    function _0x2724a0(_0x3b8189) {
      var _0x42085f = _0x2b5cbf(_0x3b8189);
      var _0x1bf9be = _0x42085f[0];
      var _0x48234f = _0x42085f[1];
      var _0xf37383 = _0x3b8189.style.width;
      var _0x200c45 = _0x3b8189.style.height;
      var _0x3cb646 = _0x3b8189.style.backgroundColor;
      var _0x5e7463 = document.body.style.backgroundColor;
      var _0xb9921 = _0x3b8189.style.paddingLeft;
      var _0x1b9b1b = _0x3b8189.style.paddingRight;
      var _0x2527ff = _0x3b8189.style.paddingTop;
      var _0x51090d = _0x3b8189.style.paddingBottom;
      var _0x5b0e58 = _0x3b8189.style.marginLeft;
      var _0x351ef7 = _0x3b8189.style.marginRight;
      var _0x8a8750 = _0x3b8189.style.marginTop;
      var _0x1e62fa = _0x3b8189.style.marginBottom;
      var _0x505978 = document.body.style.margin;
      var _0x110b83 = document.documentElement.style.overflow;
      var _0x597930 = document.body.scroll;
      var _0x3eec3a = _0x3b8189.style.imageRendering;
      function _0x596c22() {
        var _0x425fd9 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        if (!_0x425fd9) {
          document.removeEventListener("fullscreenchange", _0x596c22);
          document.removeEventListener("webkitfullscreenchange", _0x596c22);
          _0x6ca98b(_0x3b8189, _0x1bf9be, _0x48234f);
          _0x3b8189.style.width = _0xf37383;
          _0x3b8189.style.height = _0x200c45;
          _0x3b8189.style.backgroundColor = _0x3cb646;
          if (!_0x5e7463) {
            document.body.style.backgroundColor = "white";
          }
          document.body.style.backgroundColor = _0x5e7463;
          _0x3b8189.style.paddingLeft = _0xb9921;
          _0x3b8189.style.paddingRight = _0x1b9b1b;
          _0x3b8189.style.paddingTop = _0x2527ff;
          _0x3b8189.style.paddingBottom = _0x51090d;
          _0x3b8189.style.marginLeft = _0x5b0e58;
          _0x3b8189.style.marginRight = _0x351ef7;
          _0x3b8189.style.marginTop = _0x8a8750;
          _0x3b8189.style.marginBottom = _0x1e62fa;
          document.body.style.margin = _0x505978;
          document.documentElement.style.overflow = _0x110b83;
          document.body.scroll = _0x597930;
          _0x3b8189.style.imageRendering = _0x3eec3a;
          if (_0x3b8189.GLctxObject) {
            _0x3b8189.GLctxObject.GLctx.viewport(0, 0, _0x1bf9be, _0x48234f);
          }
          if (_0x173432.canvasResizedCallback) {
            (function (_0x15e417, _0x47ab77, _0x48cdb0) {
              return _0x9a870b.apply(null, [_0x173432.canvasResizedCallback, _0x15e417, _0x47ab77, _0x48cdb0]);
            })(37, 0, _0x173432.canvasResizedCallbackUserData);
          }
        }
      }
      document.addEventListener("fullscreenchange", _0x596c22);
      document.addEventListener("webkitfullscreenchange", _0x596c22);
      return _0x596c22;
    }
    function _0x520306(_0x21e85d, _0x3c0538, _0x5466ee) {
      _0x21e85d.style.paddingLeft = _0x21e85d.style.paddingRight = _0x5466ee + "px";
      _0x21e85d.style.paddingTop = _0x21e85d.style.paddingBottom = _0x3c0538 + "px";
    }
    function _0x1396f3(_0x114652) {
      if (_0x54bbc9.indexOf(_0x114652) < 0) {
        return _0x114652.getBoundingClientRect();
      } else {
        return {
          left: 0,
          top: 0
        };
      }
    }
    function _0xc927a(_0x571070, _0x19724d) {
      var _0xce76bb = _0x2724a0(_0x571070);
      var _0x2d0576 = _0x19724d.softFullscreen ? innerWidth : screen.width;
      var _0x160715 = _0x19724d.softFullscreen ? innerHeight : screen.height;
      var _0x4d1558 = _0x1396f3(_0x571070);
      var _0x38cd3f = _0x4d1558.width;
      var _0x320c47 = _0x4d1558.height;
      var _0x1d3c50 = _0x2b5cbf(_0x571070);
      var _0x103e30 = _0x1d3c50[0];
      var _0x52216e = _0x1d3c50[1];
      if (_0x19724d.scaleMode == 3) {
        _0x520306(_0x571070, (_0x160715 - _0x320c47) / 2, (_0x2d0576 - _0x38cd3f) / 2);
        _0x2d0576 = _0x38cd3f;
        _0x160715 = _0x320c47;
      } else if (_0x19724d.scaleMode == 2) {
        if (_0x2d0576 * _0x52216e < _0x103e30 * _0x160715) {
          var _0x78440e = _0x52216e * _0x2d0576 / _0x103e30;
          _0x520306(_0x571070, (_0x160715 - _0x78440e) / 2, 0);
          _0x160715 = _0x78440e;
        } else {
          var _0x3b410d = _0x103e30 * _0x160715 / _0x52216e;
          _0x520306(_0x571070, 0, (_0x2d0576 - _0x3b410d) / 2);
          _0x2d0576 = _0x3b410d;
        }
      }
      if (!_0x571070.style.backgroundColor) {
        _0x571070.style.backgroundColor = "black";
      }
      if (!document.body.style.backgroundColor) {
        document.body.style.backgroundColor = "black";
      }
      _0x571070.style.width = _0x2d0576 + "px";
      _0x571070.style.height = _0x160715 + "px";
      if (_0x19724d.filteringMode == 1) {
        _0x571070.style.imageRendering = "optimizeSpeed";
        _0x571070.style.imageRendering = "-moz-crisp-edges";
        _0x571070.style.imageRendering = "-o-crisp-edges";
        _0x571070.style.imageRendering = "-webkit-optimize-contrast";
        _0x571070.style.imageRendering = "optimize-contrast";
        _0x571070.style.imageRendering = "crisp-edges";
        _0x571070.style.imageRendering = "pixelated";
      }
      var _0x43eb79 = _0x19724d.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
      if (_0x19724d.canvasResolutionScaleMode != 0) {
        var _0x58fd1b = _0x2d0576 * _0x43eb79 | 0;
        var _0xc019ad = _0x160715 * _0x43eb79 | 0;
        _0x6ca98b(_0x571070, _0x58fd1b, _0xc019ad);
        if (_0x571070.GLctxObject) {
          _0x571070.GLctxObject.GLctx.viewport(0, 0, _0x58fd1b, _0xc019ad);
        }
      }
      return _0xce76bb;
    }
    function _0x3fc0b0(_0x59f124, _0x6b1b7b) {
      if (_0x6b1b7b.scaleMode != 0 || _0x6b1b7b.canvasResolutionScaleMode != 0) {
        _0xc927a(_0x59f124, _0x6b1b7b);
      }
      if (_0x59f124.requestFullscreen) {
        _0x59f124.requestFullscreen();
      } else if (_0x59f124.webkitRequestFullscreen) {
        _0x59f124.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (_0x4ad3eb.fullscreenEnabled()) {
        return -3;
      } else {
        return -1;
      }
      _0x173432 = _0x6b1b7b;
      if (_0x6b1b7b.canvasResizedCallback) {
        (function (_0x5af23b, _0x1df61d, _0x55eb2c) {
          return _0x9a870b.apply(null, [_0x6b1b7b.canvasResizedCallback, _0x5af23b, _0x1df61d, _0x55eb2c]);
        })(37, 0, _0x6b1b7b.canvasResizedCallbackUserData);
      }
      return 0;
    }
    function _0x3c4a1a() {
      if (!_0x4ad3eb.fullscreenEnabled()) {
        return -1;
      }
      _0x4ad3eb.removeDeferredCalls(_0x3fc0b0);
      var _0x49003e = _0x54bbc9[1];
      if (_0x49003e.exitFullscreen) {
        if (_0x49003e.fullscreenElement) {
          _0x49003e.exitFullscreen();
        }
      } else if (_0x49003e.webkitExitFullscreen) {
        if (_0x49003e.webkitFullscreenElement) {
          _0x49003e.webkitExitFullscreen();
        }
      } else {
        return -1;
      }
      return 0;
    }
    function _0x5c4cfe(_0x117773) {
      if (_0x117773.requestPointerLock) {
        _0x117773.requestPointerLock();
      } else if (_0x117773.msRequestPointerLock) {
        _0x117773.msRequestPointerLock();
      } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
        return -3;
      } else {
        return -1;
      }
      return 0;
    }
    function _0x4557a8() {
      _0x4ad3eb.removeDeferredCalls(_0x5c4cfe);
      if (document.exitPointerLock) {
        document.exitPointerLock();
      } else if (document.msExitPointerLock) {
        document.msExitPointerLock();
      } else {
        return -1;
      }
      return 0;
    }
    function _0x339644(_0xce3ca3) {
      var _0x25cbe3 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      var _0x5ba7b4 = !!_0x25cbe3;
      _0x588032[_0xce3ca3 >> 2] = _0x5ba7b4;
      _0x588032[_0xce3ca3 + 4 >> 2] = _0x4ad3eb.fullscreenEnabled();
      var _0x3e34cc = _0x5ba7b4 ? _0x25cbe3 : _0x4ad3eb.previousFullscreenElement;
      var _0x24a280 = _0x4ad3eb.getNodeNameForTarget(_0x3e34cc);
      var _0x5538f3 = _0x3e34cc && _0x3e34cc.id ? _0x3e34cc.id : "";
      _0x17e527(_0x24a280, _0xce3ca3 + 8, 128);
      _0x17e527(_0x5538f3, _0xce3ca3 + 136, 128);
      _0x588032[_0xce3ca3 + 264 >> 2] = _0x3e34cc ? _0x3e34cc.clientWidth : 0;
      _0x588032[_0xce3ca3 + 268 >> 2] = _0x3e34cc ? _0x3e34cc.clientHeight : 0;
      _0x588032[_0xce3ca3 + 272 >> 2] = screen.width;
      _0x588032[_0xce3ca3 + 276 >> 2] = screen.height;
      if (_0x5ba7b4) {
        _0x4ad3eb.previousFullscreenElement = _0x25cbe3;
      }
    }
    function _0x4c023e(_0x5f0560) {
      if (!_0x4ad3eb.fullscreenEnabled()) {
        return -1;
      }
      _0x339644(_0x5f0560);
      return 0;
    }
    function _0x5f0859(_0x84d915, _0x3d402e) {
      _0x1231b6[_0x84d915 >> 3] = _0x3d402e.timestamp;
      for (var _0x317f79 = 0; _0x317f79 < _0x3d402e.axes.length; ++_0x317f79) {
        _0x1231b6[_0x84d915 + _0x317f79 * 8 + 16 >> 3] = _0x3d402e.axes[_0x317f79];
      }
      for (var _0x317f79 = 0; _0x317f79 < _0x3d402e.buttons.length; ++_0x317f79) {
        if (typeof _0x3d402e.buttons[_0x317f79] == "object") {
          _0x1231b6[_0x84d915 + _0x317f79 * 8 + 528 >> 3] = _0x3d402e.buttons[_0x317f79].value;
        } else {
          _0x1231b6[_0x84d915 + _0x317f79 * 8 + 528 >> 3] = _0x3d402e.buttons[_0x317f79];
        }
      }
      for (var _0x317f79 = 0; _0x317f79 < _0x3d402e.buttons.length; ++_0x317f79) {
        if (typeof _0x3d402e.buttons[_0x317f79] == "object") {
          _0x588032[_0x84d915 + _0x317f79 * 4 + 1040 >> 2] = _0x3d402e.buttons[_0x317f79].pressed;
        } else {
          _0x588032[_0x84d915 + _0x317f79 * 4 + 1040 >> 2] = _0x3d402e.buttons[_0x317f79] == 1;
        }
      }
      _0x588032[_0x84d915 + 1296 >> 2] = _0x3d402e.connected;
      _0x588032[_0x84d915 + 1300 >> 2] = _0x3d402e.index;
      _0x588032[_0x84d915 + 8 >> 2] = _0x3d402e.axes.length;
      _0x588032[_0x84d915 + 12 >> 2] = _0x3d402e.buttons.length;
      _0x17e527(_0x3d402e.id, _0x84d915 + 1304, 64);
      _0x17e527(_0x3d402e.mapping, _0x84d915 + 1368, 64);
    }
    function _0x10943a(_0x52230c, _0x5ede84) {
      if (_0x52230c < 0 || _0x52230c >= _0x4ad3eb.lastGamepadState.length) {
        return -5;
      }
      if (!_0x4ad3eb.lastGamepadState[_0x52230c]) {
        return -7;
      }
      _0x5f0859(_0x5ede84, _0x4ad3eb.lastGamepadState[_0x52230c]);
      return 0;
    }
    function _0x17a838() {
      return 2147483648;
    }
    function _0x71e5ae() {
      if (_0x2d17f7) {
        return 1;
      } else {
        return 1000;
      }
    }
    function _0xe58c80() {
      return _0x4ad3eb.lastGamepadState.length;
    }
    function _0x1886ba() {
      _0x4ad3eb.removeAllEventListeners();
    }
    function _0x9cff14(_0x34a2ef) {
      return !_0x5ae6d1.contexts[_0x34a2ef] || _0x5ae6d1.contexts[_0x34a2ef].GLctx.isContextLost();
    }
    function _0x317fba(_0x3a2fae) {
      return _0x3a2fae < 0 || _0x3a2fae === 0 && 1 / _0x3a2fae === -Infinity;
    }
    function _0x1f17bd(_0x5d4b3c, _0xaa2f29) {
      return (_0x5d4b3c >>> 0) + _0xaa2f29 * 4294967296;
    }
    function _0x3e063c(_0x573002, _0x44f1b6) {
      return (_0x573002 >>> 0) + (_0x44f1b6 >>> 0) * 4294967296;
    }
    function _0x100e78(_0x1c5ae1, _0x1632dc) {
      if (_0x1c5ae1 <= 0) {
        return _0x1c5ae1;
      }
      var _0x9fb721 = _0x1632dc <= 32 ? Math.abs(1 << _0x1632dc - 1) : Math.pow(2, _0x1632dc - 1);
      if (_0x1c5ae1 >= _0x9fb721 && (_0x1632dc <= 32 || _0x1c5ae1 > _0x9fb721)) {
        _0x1c5ae1 = _0x9fb721 * -2 + _0x1c5ae1;
      }
      return _0x1c5ae1;
    }
    function _0x249316(_0x25d3dc, _0x207242) {
      if (_0x25d3dc >= 0) {
        return _0x25d3dc;
      }
      if (_0x207242 <= 32) {
        return Math.abs(1 << _0x207242 - 1) * 2 + _0x25d3dc;
      } else {
        return Math.pow(2, _0x207242) + _0x25d3dc;
      }
    }
    function _0x4a456d(_0x1dcd51, _0xbf855f) {
      var _0x691735 = _0x1dcd51;
      var _0x380a18 = _0xbf855f;
      function _0x436128(_0x1e725d, _0x959e58) {
        if (_0x959e58 === "double" || _0x959e58 === "i64") {
          if (_0x1e725d & 7) {
            _0x1e725d += 4;
          }
        } else {}
        return _0x1e725d;
      }
      function _0x116a3f(_0x5ccaf1) {
        var _0x518448;
        _0x380a18 = _0x436128(_0x380a18, _0x5ccaf1);
        if (_0x5ccaf1 === "double") {
          _0x518448 = Number(_0x1231b6[_0x380a18 >> 3]);
          _0x380a18 += 8;
        } else if (_0x5ccaf1 == "i64") {
          _0x518448 = [_0x588032[_0x380a18 >> 2], _0x588032[_0x380a18 + 4 >> 2]];
          _0x380a18 += 8;
        } else {
          _0x5ccaf1 = "i32";
          _0x518448 = _0x588032[_0x380a18 >> 2];
          _0x380a18 += 4;
        }
        return _0x518448;
      }
      var _0x5e54ef = [];
      var _0x33f5ac;
      var _0x123341;
      var _0x6cc365;
      while (1) {
        var _0x3106ee = _0x691735;
        _0x33f5ac = _0x3f8e3d[_0x691735 >> 0];
        if (_0x33f5ac === 0) {
          break;
        }
        _0x123341 = _0x3f8e3d[_0x691735 + 1 >> 0];
        if (_0x33f5ac == 37) {
          var _0x483d51 = false;
          var _0x38db72 = false;
          var _0x4c1e10 = false;
          var _0x5c384f = false;
          var _0x177947 = false;
          _0x584fc5: while (1) {
            switch (_0x123341) {
              case 43:
                _0x483d51 = true;
                break;
              case 45:
                _0x38db72 = true;
                break;
              case 35:
                _0x4c1e10 = true;
                break;
              case 48:
                if (_0x5c384f) {
                  break _0x584fc5;
                } else {
                  _0x5c384f = true;
                  break;
                }
              case 32:
                _0x177947 = true;
                break;
              default:
                break _0x584fc5;
            }
            _0x691735++;
            _0x123341 = _0x3f8e3d[_0x691735 + 1 >> 0];
          }
          var _0x447831 = 0;
          if (_0x123341 == 42) {
            _0x447831 = _0x116a3f("i32");
            _0x691735++;
            _0x123341 = _0x3f8e3d[_0x691735 + 1 >> 0];
          } else {
            while (_0x123341 >= 48 && _0x123341 <= 57) {
              _0x447831 = _0x447831 * 10 + (_0x123341 - 48);
              _0x691735++;
              _0x123341 = _0x3f8e3d[_0x691735 + 1 >> 0];
            }
          }
          var _0x596e9a = false;
          var _0x118254 = -1;
          if (_0x123341 == 46) {
            _0x118254 = 0;
            _0x596e9a = true;
            _0x691735++;
            _0x123341 = _0x3f8e3d[_0x691735 + 1 >> 0];
            if (_0x123341 == 42) {
              _0x118254 = _0x116a3f("i32");
              _0x691735++;
            } else {
              while (1) {
                var _0x163c0f = _0x3f8e3d[_0x691735 + 1 >> 0];
                if (_0x163c0f < 48 || _0x163c0f > 57) {
                  break;
                }
                _0x118254 = _0x118254 * 10 + (_0x163c0f - 48);
                _0x691735++;
              }
            }
            _0x123341 = _0x3f8e3d[_0x691735 + 1 >> 0];
          }
          if (_0x118254 < 0) {
            _0x118254 = 6;
            _0x596e9a = false;
          }
          var _0x496c20;
          switch (String.fromCharCode(_0x123341)) {
            case "h":
              var _0x40109e = _0x3f8e3d[_0x691735 + 2 >> 0];
              if (_0x40109e == 104) {
                _0x691735++;
                _0x496c20 = 1;
              } else {
                _0x496c20 = 2;
              }
              break;
            case "l":
              var _0x40109e = _0x3f8e3d[_0x691735 + 2 >> 0];
              if (_0x40109e == 108) {
                _0x691735++;
                _0x496c20 = 8;
              } else {
                _0x496c20 = 4;
              }
              break;
            case "L":
            case "q":
            case "j":
              _0x496c20 = 8;
              break;
            case "z":
            case "t":
            case "I":
              _0x496c20 = 4;
              break;
            default:
              _0x496c20 = null;
          }
          if (_0x496c20) {
            _0x691735++;
          }
          _0x123341 = _0x3f8e3d[_0x691735 + 1 >> 0];
          switch (String.fromCharCode(_0x123341)) {
            case "d":
            case "i":
            case "u":
            case "o":
            case "x":
            case "X":
            case "p":
              {
                var _0x56d5c3 = _0x123341 == 100 || _0x123341 == 105;
                _0x496c20 = _0x496c20 || 4;
                _0x6cc365 = _0x116a3f("i" + _0x496c20 * 8);
                var _0x144136;
                if (_0x496c20 == 8) {
                  _0x6cc365 = _0x123341 == 117 ? _0x3e063c(_0x6cc365[0], _0x6cc365[1]) : _0x1f17bd(_0x6cc365[0], _0x6cc365[1]);
                }
                if (_0x496c20 <= 4) {
                  var _0x30261b = Math.pow(256, _0x496c20) - 1;
                  _0x6cc365 = (_0x56d5c3 ? _0x100e78 : _0x249316)(_0x6cc365 & _0x30261b, _0x496c20 * 8);
                }
                var _0x194f75 = Math.abs(_0x6cc365);
                var _0x22890d = "";
                if (_0x123341 == 100 || _0x123341 == 105) {
                  _0x144136 = _0x100e78(_0x6cc365, _0x496c20 * 8).toString(10);
                } else if (_0x123341 == 117) {
                  _0x144136 = _0x249316(_0x6cc365, _0x496c20 * 8).toString(10);
                  _0x6cc365 = Math.abs(_0x6cc365);
                } else if (_0x123341 == 111) {
                  _0x144136 = (_0x4c1e10 ? "0" : "") + _0x194f75.toString(8);
                } else if (_0x123341 == 120 || _0x123341 == 88) {
                  _0x22890d = _0x4c1e10 && _0x6cc365 != 0 ? "0x" : "";
                  if (_0x6cc365 < 0) {
                    _0x6cc365 = -_0x6cc365;
                    _0x144136 = (_0x194f75 - 1).toString(16);
                    var _0x11d26e = [];
                    for (var _0x34f054 = 0; _0x34f054 < _0x144136.length; _0x34f054++) {
                      _0x11d26e.push((15 - parseInt(_0x144136[_0x34f054], 16)).toString(16));
                    }
                    _0x144136 = _0x11d26e.join("");
                    while (_0x144136.length < _0x496c20 * 2) {
                      _0x144136 = "f" + _0x144136;
                    }
                  } else {
                    _0x144136 = _0x194f75.toString(16);
                  }
                  if (_0x123341 == 88) {
                    _0x22890d = _0x22890d.toUpperCase();
                    _0x144136 = _0x144136.toUpperCase();
                  }
                } else if (_0x123341 == 112) {
                  if (_0x194f75 === 0) {
                    _0x144136 = "(nil)";
                  } else {
                    _0x22890d = "0x";
                    _0x144136 = _0x194f75.toString(16);
                  }
                }
                if (_0x596e9a) {
                  while (_0x144136.length < _0x118254) {
                    _0x144136 = "0" + _0x144136;
                  }
                }
                if (_0x6cc365 >= 0) {
                  if (_0x483d51) {
                    _0x22890d = "+" + _0x22890d;
                  } else if (_0x177947) {
                    _0x22890d = " " + _0x22890d;
                  }
                }
                if (_0x144136.charAt(0) == "-") {
                  _0x22890d = "-" + _0x22890d;
                  _0x144136 = _0x144136.substr(1);
                }
                while (_0x22890d.length + _0x144136.length < _0x447831) {
                  if (_0x38db72) {
                    _0x144136 += " ";
                  } else if (_0x5c384f) {
                    _0x144136 = "0" + _0x144136;
                  } else {
                    _0x22890d = " " + _0x22890d;
                  }
                }
                _0x144136 = _0x22890d + _0x144136;
                _0x144136.split("").forEach(function (_0x31da5d) {
                  _0x5e54ef.push(_0x31da5d.charCodeAt(0));
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
                _0x6cc365 = _0x116a3f("double");
                var _0x144136;
                if (isNaN(_0x6cc365)) {
                  _0x144136 = "nan";
                  _0x5c384f = false;
                } else if (!isFinite(_0x6cc365)) {
                  _0x144136 = (_0x6cc365 < 0 ? "-" : "") + "inf";
                  _0x5c384f = false;
                } else {
                  var _0x51a8a7 = false;
                  var _0x45145e = Math.min(_0x118254, 20);
                  if (_0x123341 == 103 || _0x123341 == 71) {
                    _0x51a8a7 = true;
                    _0x118254 = _0x118254 || 1;
                    var _0x5448ec = parseInt(_0x6cc365.toExponential(_0x45145e).split("e")[1], 10);
                    if (_0x118254 > _0x5448ec && _0x5448ec >= -4) {
                      _0x123341 = (_0x123341 == 103 ? "f" : "F").charCodeAt(0);
                      _0x118254 -= _0x5448ec + 1;
                    } else {
                      _0x123341 = (_0x123341 == 103 ? "e" : "E").charCodeAt(0);
                      _0x118254--;
                    }
                    _0x45145e = Math.min(_0x118254, 20);
                  }
                  if (_0x123341 == 101 || _0x123341 == 69) {
                    _0x144136 = _0x6cc365.toExponential(_0x45145e);
                    if (/[eE][-+]\d$/.test(_0x144136)) {
                      _0x144136 = _0x144136.slice(0, -1) + "0" + _0x144136.slice(-1);
                    }
                  } else if (_0x123341 == 102 || _0x123341 == 70) {
                    _0x144136 = _0x6cc365.toFixed(_0x45145e);
                    if (_0x6cc365 === 0 && _0x317fba(_0x6cc365)) {
                      _0x144136 = "-" + _0x144136;
                    }
                  }
                  var _0x2e293c = _0x144136.split("e");
                  if (_0x51a8a7 && !_0x4c1e10) {
                    while (_0x2e293c[0].length > 1 && _0x2e293c[0].includes(".") && (_0x2e293c[0].slice(-1) == "0" || _0x2e293c[0].slice(-1) == ".")) {
                      _0x2e293c[0] = _0x2e293c[0].slice(0, -1);
                    }
                  } else {
                    if (_0x4c1e10 && _0x144136.indexOf(".") == -1) {
                      _0x2e293c[0] += ".";
                    }
                    while (_0x118254 > _0x45145e++) {
                      _0x2e293c[0] += "0";
                    }
                  }
                  _0x144136 = _0x2e293c[0] + (_0x2e293c.length > 1 ? "e" + _0x2e293c[1] : "");
                  if (_0x123341 == 69) {
                    _0x144136 = _0x144136.toUpperCase();
                  }
                  if (_0x6cc365 >= 0) {
                    if (_0x483d51) {
                      _0x144136 = "+" + _0x144136;
                    } else if (_0x177947) {
                      _0x144136 = " " + _0x144136;
                    }
                  }
                }
                while (_0x144136.length < _0x447831) {
                  if (_0x38db72) {
                    _0x144136 += " ";
                  } else if (_0x5c384f && (_0x144136[0] == "-" || _0x144136[0] == "+")) {
                    _0x144136 = _0x144136[0] + "0" + _0x144136.slice(1);
                  } else {
                    _0x144136 = (_0x5c384f ? "0" : " ") + _0x144136;
                  }
                }
                if (_0x123341 < 97) {
                  _0x144136 = _0x144136.toUpperCase();
                }
                _0x144136.split("").forEach(function (_0x28e203) {
                  _0x5e54ef.push(_0x28e203.charCodeAt(0));
                });
                break;
              }
            case "s":
              {
                var _0x1c57db = _0x116a3f("i8*");
                var _0x1832cf = _0x1c57db ? _0x5705f5(_0x1c57db) : "(null)".length;
                if (_0x596e9a) {
                  _0x1832cf = Math.min(_0x1832cf, _0x118254);
                }
                if (!_0x38db72) {
                  while (_0x1832cf < _0x447831--) {
                    _0x5e54ef.push(32);
                  }
                }
                if (_0x1c57db) {
                  for (var _0x34f054 = 0; _0x34f054 < _0x1832cf; _0x34f054++) {
                    _0x5e54ef.push(_0x5f38b4[_0x1c57db++ >> 0]);
                  }
                } else {
                  _0x5e54ef = _0x5e54ef.concat(_0x28f5f4("(null)".substr(0, _0x1832cf), true));
                }
                if (_0x38db72) {
                  while (_0x1832cf < _0x447831--) {
                    _0x5e54ef.push(32);
                  }
                }
                break;
              }
            case "c":
              {
                if (_0x38db72) {
                  _0x5e54ef.push(_0x116a3f("i8"));
                }
                while (--_0x447831 > 0) {
                  _0x5e54ef.push(32);
                }
                if (!_0x38db72) {
                  _0x5e54ef.push(_0x116a3f("i8"));
                }
                break;
              }
            case "n":
              {
                var _0x705bbd = _0x116a3f("i32*");
                _0x588032[_0x705bbd >> 2] = _0x5e54ef.length;
                break;
              }
            case "%":
              {
                _0x5e54ef.push(_0x33f5ac);
                break;
              }
            default:
              {
                for (var _0x34f054 = _0x3106ee; _0x34f054 < _0x691735 + 2; _0x34f054++) {
                  _0x5e54ef.push(_0x3f8e3d[_0x34f054 >> 0]);
                }
              }
          }
          _0x691735 += 2;
        } else {
          _0x5e54ef.push(_0x33f5ac);
          _0x691735 += 1;
        }
      }
      return _0x5e54ef;
    }
    function _0x3d1d7b(_0x285adc) {
      if (!_0x285adc || !_0x285adc.callee || !_0x285adc.callee.name) {
        return [null, "", ""];
      }
      var _0x4525dd = _0x285adc.callee.toString();
      var _0x22f3d0 = _0x285adc.callee.name;
      var _0x50ea4c = "(";
      var _0x350ad9 = true;
      for (var _0x2ca619 in _0x285adc) {
        var _0x586803 = _0x285adc[_0x2ca619];
        if (!_0x350ad9) {
          _0x50ea4c += ", ";
        }
        _0x350ad9 = false;
        if (typeof _0x586803 == "number" || typeof _0x586803 == "string") {
          _0x50ea4c += _0x586803;
        } else {
          _0x50ea4c += "(" + typeof _0x586803 + ")";
        }
      }
      _0x50ea4c += ")";
      var _0x556999 = _0x285adc.callee.caller;
      _0x285adc = _0x556999 ? _0x556999.arguments : [];
      if (_0x350ad9) {
        _0x50ea4c = "";
      }
      return [_0x285adc, _0x22f3d0, _0x50ea4c];
    }
    function _0xdbc0cd(_0x451283) {
      var _0x333168 = _0x22cd2c();
      var _0x563d5c = _0x333168.lastIndexOf("_emscripten_log");
      var _0x321fd0 = _0x333168.lastIndexOf("_emscripten_get_callstack");
      var _0x21e43a = _0x333168.indexOf("\n", Math.max(_0x563d5c, _0x321fd0)) + 1;
      _0x333168 = _0x333168.slice(_0x21e43a);
      if (_0x451283 & 32) {
        _0x95491a("EM_LOG_DEMANGLE is deprecated; ignoring");
      }
      if (_0x451283 & 8 && typeof emscripten_source_map == "undefined") {
        _0x95491a("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
        _0x451283 ^= 8;
        _0x451283 |= 16;
      }
      var _0x43c5e8 = null;
      if (_0x451283 & 128) {
        _0x43c5e8 = _0x3d1d7b(arguments);
        while (_0x43c5e8[1].includes("_emscripten_")) {
          _0x43c5e8 = _0x3d1d7b(_0x43c5e8[0]);
        }
      }
      var _0x7de8e = _0x333168.split("\n");
      _0x333168 = "";
      var _0x3ca4a9 = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
      var _0x5fa5bd = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
      var _0x15137d = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
      for (var _0x4d9d9c in _0x7de8e) {
        var _0x3caf6f = _0x7de8e[_0x4d9d9c];
        var _0xd23c36 = "";
        var _0x36e358 = "";
        var _0x511e5f = 0;
        var _0x5e0ce8 = 0;
        var _0x1cd61f = _0x15137d.exec(_0x3caf6f);
        if (_0x1cd61f && _0x1cd61f.length == 5) {
          _0xd23c36 = _0x1cd61f[1];
          _0x36e358 = _0x1cd61f[2];
          _0x511e5f = _0x1cd61f[3];
          _0x5e0ce8 = _0x1cd61f[4];
        } else {
          _0x1cd61f = _0x3ca4a9.exec(_0x3caf6f);
          if (!_0x1cd61f) {
            _0x1cd61f = _0x5fa5bd.exec(_0x3caf6f);
          }
          if (_0x1cd61f && _0x1cd61f.length >= 4) {
            _0xd23c36 = _0x1cd61f[1];
            _0x36e358 = _0x1cd61f[2];
            _0x511e5f = _0x1cd61f[3];
            _0x5e0ce8 = _0x1cd61f[4] | 0;
          } else {
            _0x333168 += _0x3caf6f + "\n";
            continue;
          }
        }
        var _0x4ad6f0 = false;
        if (_0x451283 & 8) {
          var _0x3eba8d = emscripten_source_map.originalPositionFor({
            line: _0x511e5f,
            column: _0x5e0ce8
          });
          _0x4ad6f0 = _0x3eba8d && _0x3eba8d.source;
          if (_0x4ad6f0) {
            if (_0x451283 & 64) {
              _0x3eba8d.source = _0x3eba8d.source.substring(_0x3eba8d.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
            }
            _0x333168 += "    at " + _0xd23c36 + " (" + _0x3eba8d.source + ":" + _0x3eba8d.line + ":" + _0x3eba8d.column + ")\n";
          }
        }
        if (_0x451283 & 16 || !_0x4ad6f0) {
          if (_0x451283 & 64) {
            _0x36e358 = _0x36e358.substring(_0x36e358.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x333168 += (_0x4ad6f0 ? "     = " + _0xd23c36 : "    at " + _0xd23c36) + " (" + _0x36e358 + ":" + _0x511e5f + ":" + _0x5e0ce8 + ")\n";
        }
        if (_0x451283 & 128 && _0x43c5e8[0]) {
          if (_0x43c5e8[1] == _0xd23c36 && _0x43c5e8[2].length > 0) {
            _0x333168 = _0x333168.replace(/\s+$/, "");
            _0x333168 += " with values: " + _0x43c5e8[1] + _0x43c5e8[2] + "\n";
          }
          _0x43c5e8 = _0x3d1d7b(_0x43c5e8[0]);
        }
      }
      _0x333168 = _0x333168.replace(/\s+$/, "");
      return _0x333168;
    }
    function _0x5da509(_0x2d084c, _0x2db5d8) {
      if (_0x2d084c & 24) {
        _0x2db5d8 = _0x2db5d8.replace(/\s+$/, "");
        _0x2db5d8 += (_0x2db5d8.length > 0 ? "\n" : "") + _0xdbc0cd(_0x2d084c);
      }
      if (_0x2d084c & 1) {
        if (_0x2d084c & 4) {
          console.error(_0x2db5d8);
        } else if (_0x2d084c & 2) {
          console.warn(_0x2db5d8);
        } else if (_0x2d084c & 512) {
          console.info(_0x2db5d8);
        } else if (_0x2d084c & 256) {
          console.debug(_0x2db5d8);
        } else {
          console.log(_0x2db5d8);
        }
      } else if (_0x2d084c & 6) {
        _0x33d817(_0x2db5d8);
      } else {
        _0x29c873(_0x2db5d8);
      }
    }
    function _0x4ce561(_0x545527, _0xcf280a, _0x2b1329) {
      var _0xa6636e = _0x4a456d(_0xcf280a, _0x2b1329);
      var _0x2206a0 = _0x519ea2(_0xa6636e, 0);
      _0x5da509(_0x545527, _0x2206a0);
    }
    function _0x4f1c81(_0x5482cb, _0x33879c, _0x571a48) {
      _0x5f38b4.copyWithin(_0x5482cb, _0x33879c, _0x33879c + _0x571a48);
    }
    function _0x5497b1(_0x2ec166, _0x4e5004) {
      if (!_0x4ad3eb.fullscreenEnabled()) {
        return -1;
      }
      _0x2ec166 = _0x335a2b(_0x2ec166);
      if (!_0x2ec166) {
        return -4;
      }
      if (!_0x2ec166.requestFullscreen && !_0x2ec166.webkitRequestFullscreen) {
        return -3;
      }
      var _0x468ab3 = _0x4ad3eb.canPerformEventHandlerRequests();
      if (!_0x468ab3) {
        if (_0x4e5004.deferUntilInEventHandler) {
          _0x4ad3eb.deferCall(_0x3fc0b0, 1, [_0x2ec166, _0x4e5004]);
          return 1;
        } else {
          return -2;
        }
      }
      return _0x3fc0b0(_0x2ec166, _0x4e5004);
    }
    function _0x2199bf(_0x3b8a97, _0x40ed54) {
      var _0x271c54 = {
        scaleMode: 0,
        canvasResolutionScaleMode: 0,
        filteringMode: 0,
        deferUntilInEventHandler: _0x40ed54,
        canvasResizedCallbackTargetThread: 2
      };
      return _0x5497b1(_0x3b8a97, _0x271c54);
    }
    function _0x435251(_0x952a9, _0x1c85a4) {
      _0x952a9 = _0x335a2b(_0x952a9);
      if (!_0x952a9) {
        return -4;
      }
      if (!_0x952a9.requestPointerLock && !_0x952a9.msRequestPointerLock) {
        return -1;
      }
      var _0x1ab2a7 = _0x4ad3eb.canPerformEventHandlerRequests();
      if (!_0x1ab2a7) {
        if (_0x1c85a4) {
          _0x4ad3eb.deferCall(_0x5c4cfe, 2, [_0x952a9]);
          return 1;
        } else {
          return -2;
        }
      }
      return _0x5c4cfe(_0x952a9);
    }
    function _0x5a0504(_0x15011b) {
      try {
        _0x36e7ee.grow(_0x15011b - _0x518d3e.byteLength + 65535 >>> 16);
        _0x116c98(_0x36e7ee.buffer);
        return 1;
      } catch (_0x24ba83) {}
    }
    function _0x2fecdd(_0x5d80ff) {
      var _0x260733 = _0x5f38b4.length;
      _0x5d80ff = _0x5d80ff >>> 0;
      var _0x5424e4 = _0x17a838();
      if (_0x5d80ff > _0x5424e4) {
        return false;
      }
      let _0x49c387 = (_0x52fc26, _0x24a08a) => _0x52fc26 + (_0x24a08a - _0x52fc26 % _0x24a08a) % _0x24a08a;
      for (var _0x4e13fd = 1; _0x4e13fd <= 4; _0x4e13fd *= 2) {
        var _0x2e31fb = _0x260733 * (1 + 0.2 / _0x4e13fd);
        _0x2e31fb = Math.min(_0x2e31fb, _0x5d80ff + 100663296);
        var _0x584c67 = Math.min(_0x5424e4, _0x49c387(Math.max(_0x5d80ff, _0x2e31fb), 65536));
        var _0x4ad9c6 = _0x5a0504(_0x584c67);
        if (_0x4ad9c6) {
          return true;
        }
      }
      return false;
    }
    function _0x1e196b() {
      try {
        if (navigator.getGamepads) {
          if (_0x4ad3eb.lastGamepadState = navigator.getGamepads()) {
            return 0;
          } else {
            return -1;
          }
        }
      } catch (_0x38a1c6) {
        navigator.getGamepads = null;
      }
      return -1;
    }
    function _0x537af1(_0x39d522, _0x374b51, _0x498160, _0x9b83db, _0x183497, _0x15322b, _0x3a7ba6) {
      if (!_0x4ad3eb.focusEvent) {
        _0x4ad3eb.focusEvent = _0x14649f(256);
      }
      function _0x19ebaa(_0x179230) {
        var _0x38ccf8 = _0x179230 || event;
        var _0x21bec9 = _0x4ad3eb.getNodeNameForTarget(_0x38ccf8.target);
        var _0x1298ea = _0x38ccf8.target.id ? _0x38ccf8.target.id : "";
        var _0x144cad = _0x4ad3eb.focusEvent;
        _0x17e527(_0x21bec9, _0x144cad + 0, 128);
        _0x17e527(_0x1298ea, _0x144cad + 128, 128);
        if (function (_0x338e01, _0x285956, _0x5074f9) {
          return _0x9a870b.apply(null, [_0x9b83db, _0x338e01, _0x285956, _0x5074f9]);
        }(_0x183497, _0x144cad, _0x374b51)) {
          _0x38ccf8.preventDefault();
        }
      }
      var _0x2f7420 = {
        target: _0x335a2b(_0x39d522),
        eventTypeString: _0x15322b,
        callbackfunc: _0x9b83db,
        handlerFunc: _0x19ebaa,
        useCapture: _0x498160
      };
      _0x4ad3eb.registerOrRemoveHandler(_0x2f7420);
    }
    function _0x1230a5(_0xc7dadb, _0x5120d8, _0x219326, _0x3bd972, _0x10509f) {
      _0x537af1(_0xc7dadb, _0x5120d8, _0x219326, _0x3bd972, 12, "blur", _0x10509f);
      return 0;
    }
    function _0x8c291e(_0x369f01, _0x12dcea, _0x6aad81, _0x3535f7, _0x81d24b) {
      _0x537af1(_0x369f01, _0x12dcea, _0x6aad81, _0x3535f7, 13, "focus", _0x81d24b);
      return 0;
    }
    function _0x424c41(_0x583326, _0x43ffd3, _0xf65a6f, _0x4e1817, _0x553b43, _0x5870e3, _0x5963d8) {
      if (!_0x4ad3eb.fullscreenChangeEvent) {
        _0x4ad3eb.fullscreenChangeEvent = _0x14649f(280);
      }
      function _0x4ad99e(_0xa900d7) {
        var _0x2248bd = _0xa900d7 || event;
        var _0x292b99 = _0x4ad3eb.fullscreenChangeEvent;
        _0x339644(_0x292b99);
        if (function (_0x1b730a, _0x34f7c0, _0x1f85d2) {
          return _0x9a870b.apply(null, [_0x4e1817, _0x1b730a, _0x34f7c0, _0x1f85d2]);
        }(_0x553b43, _0x292b99, _0x43ffd3)) {
          _0x2248bd.preventDefault();
        }
      }
      var _0x1f5444 = {
        target: _0x583326,
        eventTypeString: _0x5870e3,
        callbackfunc: _0x4e1817,
        handlerFunc: _0x4ad99e,
        useCapture: _0xf65a6f
      };
      _0x4ad3eb.registerOrRemoveHandler(_0x1f5444);
    }
    function _0x4b2e1e(_0x3d6869, _0x301da1, _0x4cce02, _0x43b06e, _0x3532dd) {
      if (!_0x4ad3eb.fullscreenEnabled()) {
        return -1;
      }
      _0x3d6869 = _0x335a2b(_0x3d6869);
      if (!_0x3d6869) {
        return -4;
      }
      _0x424c41(_0x3d6869, _0x301da1, _0x4cce02, _0x43b06e, 19, "fullscreenchange", _0x3532dd);
      _0x424c41(_0x3d6869, _0x301da1, _0x4cce02, _0x43b06e, 19, "webkitfullscreenchange", _0x3532dd);
      return 0;
    }
    function _0x2669e8(_0x43db0d, _0x1b76a3, _0x1d4601, _0x378034, _0x542f15, _0x5414fc, _0x15e1a4) {
      if (!_0x4ad3eb.gamepadEvent) {
        _0x4ad3eb.gamepadEvent = _0x14649f(1432);
      }
      function _0x51ba8a(_0x44dfb2) {
        var _0x47c26b = _0x44dfb2 || event;
        var _0x2f2a08 = _0x4ad3eb.gamepadEvent;
        _0x5f0859(_0x2f2a08, _0x47c26b.gamepad);
        if (function (_0x4a3377, _0x896052, _0x191d24) {
          return _0x9a870b.apply(null, [_0x378034, _0x4a3377, _0x896052, _0x191d24]);
        }(_0x542f15, _0x2f2a08, _0x1b76a3)) {
          _0x47c26b.preventDefault();
        }
      }
      var _0x3e4c85 = {
        target: _0x335a2b(_0x43db0d),
        allowsDeferredCalls: true,
        eventTypeString: _0x5414fc,
        callbackfunc: _0x378034,
        handlerFunc: _0x51ba8a,
        useCapture: _0x1d4601
      };
      _0x4ad3eb.registerOrRemoveHandler(_0x3e4c85);
    }
    function _0x1f64f7(_0x49f6a2, _0x5dd99e, _0xd60cba, _0x5c4c92) {
      if (_0x1e196b()) {
        return -1;
      }
      return _0x2669e8(2, _0x49f6a2, _0x5dd99e, _0xd60cba, 26, "gamepadconnected", _0x5c4c92);
    }
    function _0x5b263c(_0x43576b, _0x40b0bb, _0x4bc4e8, _0x3d95f9) {
      if (_0x1e196b()) {
        return -1;
      }
      return _0x2669e8(2, _0x43576b, _0x40b0bb, _0x4bc4e8, 27, "gamepaddisconnected", _0x3d95f9);
    }
    function _0x3c98c4(_0x2bd567, _0x13504e, _0x507ea9) {
      return setInterval(function () {
        _0x197ee6(function () {
          (function (_0x3298fb) {
            _0x4f74e2.apply(null, [_0x2bd567, _0x3298fb]);
          })(_0x507ea9);
        });
      }, _0x13504e);
    }
    function _0x122b6a(_0x49145a, _0x2c6d70, _0x1cc0b3, _0x317e3e, _0x7d4824, _0x19b356, _0x246698) {
      if (!_0x4ad3eb.keyEvent) {
        _0x4ad3eb.keyEvent = _0x14649f(176);
      }
      function _0x1c1c37(_0x18e4e9) {
        var _0x1820c3 = _0x4ad3eb.keyEvent;
        _0x1231b6[_0x1820c3 >> 3] = _0x18e4e9.timeStamp;
        var _0x1f7c16 = _0x1820c3 >> 2;
        _0x588032[_0x1f7c16 + 2] = _0x18e4e9.location;
        _0x588032[_0x1f7c16 + 3] = _0x18e4e9.ctrlKey;
        _0x588032[_0x1f7c16 + 4] = _0x18e4e9.shiftKey;
        _0x588032[_0x1f7c16 + 5] = _0x18e4e9.altKey;
        _0x588032[_0x1f7c16 + 6] = _0x18e4e9.metaKey;
        _0x588032[_0x1f7c16 + 7] = _0x18e4e9.repeat;
        _0x588032[_0x1f7c16 + 8] = _0x18e4e9.charCode;
        _0x588032[_0x1f7c16 + 9] = _0x18e4e9.keyCode;
        _0x588032[_0x1f7c16 + 10] = _0x18e4e9.which;
        _0x17e527(_0x18e4e9.key || "", _0x1820c3 + 44, 32);
        _0x17e527(_0x18e4e9.code || "", _0x1820c3 + 76, 32);
        _0x17e527(_0x18e4e9.char || "", _0x1820c3 + 108, 32);
        _0x17e527(_0x18e4e9.locale || "", _0x1820c3 + 140, 32);
        if (function (_0x574cce, _0xc19f4e, _0x2d25a8) {
          return _0x9a870b.apply(null, [_0x317e3e, _0x574cce, _0xc19f4e, _0x2d25a8]);
        }(_0x7d4824, _0x1820c3, _0x2c6d70)) {
          _0x18e4e9.preventDefault();
        }
      }
      var _0x478daf = {
        target: _0x335a2b(_0x49145a),
        allowsDeferredCalls: true,
        eventTypeString: _0x19b356,
        callbackfunc: _0x317e3e,
        handlerFunc: _0x1c1c37,
        useCapture: _0x1cc0b3
      };
      _0x4ad3eb.registerOrRemoveHandler(_0x478daf);
    }
    function _0x571e66(_0x3eabdd, _0x188627, _0x1f357f, _0x227b83, _0x4df148) {
      _0x122b6a(_0x3eabdd, _0x188627, _0x1f357f, _0x227b83, 2, "keydown", _0x4df148);
      return 0;
    }
    function _0x2129b9(_0x19f117, _0x3193c1, _0x5e1ba7, _0x55079c, _0x1bf68f) {
      _0x122b6a(_0x19f117, _0x3193c1, _0x5e1ba7, _0x55079c, 1, "keypress", _0x1bf68f);
      return 0;
    }
    function _0xaff96b(_0xa19ea9, _0x452dc6, _0x31c9ff, _0x51ab92, _0x504ebe) {
      _0x122b6a(_0xa19ea9, _0x452dc6, _0x31c9ff, _0x51ab92, 3, "keyup", _0x504ebe);
      return 0;
    }
    function _0x3c6bb2(_0x5d28db, _0x9d2ae8, _0x7532bb) {
      function _0xb7b2d6() {
        _0x5d5381.call(null, _0x5d28db);
      }
      _0x18477a(_0xb7b2d6, _0x9d2ae8, _0x7532bb);
    }
    function _0x36c2d2(_0x29a470, _0x4f4ea0, _0x2eaf9b) {
      _0x1231b6[_0x29a470 >> 3] = _0x4f4ea0.timeStamp;
      var _0x2232de = _0x29a470 >> 2;
      _0x588032[_0x2232de + 2] = _0x4f4ea0.screenX;
      _0x588032[_0x2232de + 3] = _0x4f4ea0.screenY;
      _0x588032[_0x2232de + 4] = _0x4f4ea0.clientX;
      _0x588032[_0x2232de + 5] = _0x4f4ea0.clientY;
      _0x588032[_0x2232de + 6] = _0x4f4ea0.ctrlKey;
      _0x588032[_0x2232de + 7] = _0x4f4ea0.shiftKey;
      _0x588032[_0x2232de + 8] = _0x4f4ea0.altKey;
      _0x588032[_0x2232de + 9] = _0x4f4ea0.metaKey;
      _0x2bc94b[_0x2232de * 2 + 20] = _0x4f4ea0.button;
      _0x2bc94b[_0x2232de * 2 + 21] = _0x4f4ea0.buttons;
      _0x588032[_0x2232de + 11] = _0x4f4ea0.movementX;
      _0x588032[_0x2232de + 12] = _0x4f4ea0.movementY;
      var _0x344d2e = _0x1396f3(_0x2eaf9b);
      _0x588032[_0x2232de + 13] = _0x4f4ea0.clientX - _0x344d2e.left;
      _0x588032[_0x2232de + 14] = _0x4f4ea0.clientY - _0x344d2e.top;
    }
    function _0x2807e1(_0x5553f9, _0x4a453c, _0x4903e0, _0xb0d9ce, _0x35abcb, _0x86e43e, _0x52d648) {
      if (!_0x4ad3eb.mouseEvent) {
        _0x4ad3eb.mouseEvent = _0x14649f(72);
      }
      _0x5553f9 = _0x335a2b(_0x5553f9);
      function _0x4638a9(_0x4cd3e0) {
        var _0x169b00 = _0x4cd3e0 || event;
        _0x36c2d2(_0x4ad3eb.mouseEvent, _0x169b00, _0x5553f9);
        if (function (_0x20dc41, _0x43abb1, _0x1e3fcb) {
          return _0x9a870b.apply(null, [_0xb0d9ce, _0x20dc41, _0x43abb1, _0x1e3fcb]);
        }(_0x35abcb, _0x4ad3eb.mouseEvent, _0x4a453c)) {
          _0x169b00.preventDefault();
        }
      }
      var _0xb96fe4 = {
        target: _0x5553f9,
        allowsDeferredCalls: _0x86e43e != "mousemove" && _0x86e43e != "mouseenter" && _0x86e43e != "mouseleave",
        eventTypeString: _0x86e43e,
        callbackfunc: _0xb0d9ce,
        handlerFunc: _0x4638a9,
        useCapture: _0x4903e0
      };
      _0x4ad3eb.registerOrRemoveHandler(_0xb96fe4);
    }
    function _0x7ba1ce(_0x148c20, _0x13198d, _0x858e14, _0x5c9f68, _0x2712b3) {
      _0x2807e1(_0x148c20, _0x13198d, _0x858e14, _0x5c9f68, 5, "mousedown", _0x2712b3);
      return 0;
    }
    function _0x189cbd(_0x3610cc, _0x3ad460, _0x32630e, _0x55ea20, _0x17b348) {
      _0x2807e1(_0x3610cc, _0x3ad460, _0x32630e, _0x55ea20, 8, "mousemove", _0x17b348);
      return 0;
    }
    function _0x488487(_0x4c9270, _0x137328, _0x25a690, _0x2b11dd, _0x2d9ff0) {
      _0x2807e1(_0x4c9270, _0x137328, _0x25a690, _0x2b11dd, 6, "mouseup", _0x2d9ff0);
      return 0;
    }
    function _0x4541ee(_0x1154f3) {
      var _0xd07f0e = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
      var _0x1a18ca = !!_0xd07f0e;
      _0x588032[_0x1154f3 >> 2] = _0x1a18ca;
      var _0x4ae159 = _0x4ad3eb.getNodeNameForTarget(_0xd07f0e);
      var _0x36b865 = _0xd07f0e && _0xd07f0e.id ? _0xd07f0e.id : "";
      _0x17e527(_0x4ae159, _0x1154f3 + 4, 128);
      _0x17e527(_0x36b865, _0x1154f3 + 132, 128);
    }
    function _0x2ffe04(_0x1c1cec, _0x102cbc, _0x55cdc1, _0x23a389, _0x1cefd5, _0x47b945, _0x5b7315) {
      if (!_0x4ad3eb.pointerlockChangeEvent) {
        _0x4ad3eb.pointerlockChangeEvent = _0x14649f(260);
      }
      function _0x8e8eae(_0x5cb2a1) {
        var _0x5aea03 = _0x5cb2a1 || event;
        var _0xf17b7e = _0x4ad3eb.pointerlockChangeEvent;
        _0x4541ee(_0xf17b7e);
        if (function (_0x271915, _0x113dc1, _0x14a585) {
          return _0x9a870b.apply(null, [_0x23a389, _0x271915, _0x113dc1, _0x14a585]);
        }(_0x1cefd5, _0xf17b7e, _0x102cbc)) {
          _0x5aea03.preventDefault();
        }
      }
      var _0x1c4e06 = {
        target: _0x1c1cec,
        eventTypeString: _0x47b945,
        callbackfunc: _0x23a389,
        handlerFunc: _0x8e8eae,
        useCapture: _0x55cdc1
      };
      _0x4ad3eb.registerOrRemoveHandler(_0x1c4e06);
    }
    function _0x404bd6(_0x58ef7c, _0x5100ef, _0x57a1d0, _0x3cc9fc, _0x1f0f0f) {
      if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
        return -1;
      }
      _0x58ef7c = _0x335a2b(_0x58ef7c);
      if (!_0x58ef7c) {
        return -4;
      }
      _0x2ffe04(_0x58ef7c, _0x5100ef, _0x57a1d0, _0x3cc9fc, 20, "pointerlockchange", _0x1f0f0f);
      _0x2ffe04(_0x58ef7c, _0x5100ef, _0x57a1d0, _0x3cc9fc, 20, "mozpointerlockchange", _0x1f0f0f);
      _0x2ffe04(_0x58ef7c, _0x5100ef, _0x57a1d0, _0x3cc9fc, 20, "webkitpointerlockchange", _0x1f0f0f);
      _0x2ffe04(_0x58ef7c, _0x5100ef, _0x57a1d0, _0x3cc9fc, 20, "mspointerlockchange", _0x1f0f0f);
      return 0;
    }
    function _0x37a5d7(_0x5dbc32, _0x5baae2, _0x19ba0a, _0x225e99, _0x1b5117, _0x389526, _0x1703eb) {
      if (!_0x4ad3eb.touchEvent) {
        _0x4ad3eb.touchEvent = _0x14649f(1696);
      }
      _0x5dbc32 = _0x335a2b(_0x5dbc32);
      function _0x4cb18e(_0x1df452) {
        var _0x5717bc;
        var _0x302896 = {};
        var _0x234027 = _0x1df452.touches;
        for (var _0x1efc0a = 0; _0x1efc0a < _0x234027.length; ++_0x1efc0a) {
          _0x5717bc = _0x234027[_0x1efc0a];
          _0x5717bc.isChanged = _0x5717bc.onTarget = 0;
          _0x302896[_0x5717bc.identifier] = _0x5717bc;
        }
        for (var _0x1efc0a = 0; _0x1efc0a < _0x1df452.changedTouches.length; ++_0x1efc0a) {
          _0x5717bc = _0x1df452.changedTouches[_0x1efc0a];
          _0x5717bc.isChanged = 1;
          _0x302896[_0x5717bc.identifier] = _0x5717bc;
        }
        for (var _0x1efc0a = 0; _0x1efc0a < _0x1df452.targetTouches.length; ++_0x1efc0a) {
          _0x302896[_0x1df452.targetTouches[_0x1efc0a].identifier].onTarget = 1;
        }
        var _0x303cbe = _0x4ad3eb.touchEvent;
        var _0x59686e = _0x303cbe >> 2;
        _0x588032[_0x59686e + 3] = _0x1df452.ctrlKey;
        _0x588032[_0x59686e + 4] = _0x1df452.shiftKey;
        _0x588032[_0x59686e + 5] = _0x1df452.altKey;
        _0x588032[_0x59686e + 6] = _0x1df452.metaKey;
        _0x59686e += 7;
        var _0x2479a5 = _0x1396f3(_0x5dbc32);
        var _0x1019fd = 0;
        for (var _0x1efc0a in _0x302896) {
          var _0x5717bc = _0x302896[_0x1efc0a];
          _0x588032[_0x59686e + 0] = _0x5717bc.identifier;
          _0x588032[_0x59686e + 1] = _0x5717bc.screenX;
          _0x588032[_0x59686e + 2] = _0x5717bc.screenY;
          _0x588032[_0x59686e + 3] = _0x5717bc.clientX;
          _0x588032[_0x59686e + 4] = _0x5717bc.clientY;
          _0x588032[_0x59686e + 5] = _0x5717bc.pageX;
          _0x588032[_0x59686e + 6] = _0x5717bc.pageY;
          _0x588032[_0x59686e + 7] = _0x5717bc.isChanged;
          _0x588032[_0x59686e + 8] = _0x5717bc.onTarget;
          _0x588032[_0x59686e + 9] = _0x5717bc.clientX - _0x2479a5.left;
          _0x588032[_0x59686e + 10] = _0x5717bc.clientY - _0x2479a5.top;
          _0x59686e += 13;
          if (++_0x1019fd > 31) {
            break;
          }
        }
        _0x588032[_0x303cbe + 8 >> 2] = _0x1019fd;
        if (function (_0x7baf7f, _0x5e4834, _0x2becbb) {
          return _0x9a870b.apply(null, [_0x225e99, _0x7baf7f, _0x5e4834, _0x2becbb]);
        }(_0x1b5117, _0x303cbe, _0x5baae2)) {
          _0x1df452.preventDefault();
        }
      }
      var _0x2540c9 = {
        target: _0x5dbc32,
        allowsDeferredCalls: _0x389526 == "touchstart" || _0x389526 == "touchend",
        eventTypeString: _0x389526,
        callbackfunc: _0x225e99,
        handlerFunc: _0x4cb18e,
        useCapture: _0x19ba0a
      };
      _0x4ad3eb.registerOrRemoveHandler(_0x2540c9);
    }
    function _0x11c38c(_0xd13f66, _0x367b6f, _0x3f40dc, _0x50407c, _0xd9d698) {
      _0x37a5d7(_0xd13f66, _0x367b6f, _0x3f40dc, _0x50407c, 25, "touchcancel", _0xd9d698);
      return 0;
    }
    function _0x1f7518(_0x31d3cd, _0x30297a, _0x2b6978, _0x20c176, _0x28229c) {
      _0x37a5d7(_0x31d3cd, _0x30297a, _0x2b6978, _0x20c176, 23, "touchend", _0x28229c);
      return 0;
    }
    function _0x5e5856(_0x5ef477, _0xee20a3, _0xe81943, _0x4ad9d2, _0x5d2259) {
      _0x37a5d7(_0x5ef477, _0xee20a3, _0xe81943, _0x4ad9d2, 24, "touchmove", _0x5d2259);
      return 0;
    }
    function _0x82d789(_0x4b59e9, _0x894dc5, _0x469440, _0x2d08dc, _0x1e2572) {
      _0x37a5d7(_0x4b59e9, _0x894dc5, _0x469440, _0x2d08dc, 22, "touchstart", _0x1e2572);
      return 0;
    }
    function _0x3befc2(_0x166a42, _0x32e4e4, _0x6a3bd0, _0x1a4cec, _0x54a159, _0x5c06f1, _0x230950) {
      if (!_0x4ad3eb.wheelEvent) {
        _0x4ad3eb.wheelEvent = _0x14649f(104);
      }
      function _0x55bda9(_0x6f6a0b) {
        var _0x43017f = _0x6f6a0b || event;
        var _0x55b0f8 = _0x4ad3eb.wheelEvent;
        _0x36c2d2(_0x55b0f8, _0x43017f, _0x166a42);
        _0x1231b6[_0x55b0f8 + 72 >> 3] = _0x43017f.deltaX;
        _0x1231b6[_0x55b0f8 + 80 >> 3] = _0x43017f.deltaY;
        _0x1231b6[_0x55b0f8 + 88 >> 3] = _0x43017f.deltaZ;
        _0x588032[_0x55b0f8 + 96 >> 2] = _0x43017f.deltaMode;
        if (function (_0x321280, _0x5362f1, _0x2a8707) {
          return _0x9a870b.apply(null, [_0x1a4cec, _0x321280, _0x5362f1, _0x2a8707]);
        }(_0x54a159, _0x55b0f8, _0x32e4e4)) {
          _0x43017f.preventDefault();
        }
      }
      var _0x391878 = {
        target: _0x166a42,
        allowsDeferredCalls: true,
        eventTypeString: _0x5c06f1,
        callbackfunc: _0x1a4cec,
        handlerFunc: _0x55bda9,
        useCapture: _0x6a3bd0
      };
      _0x4ad3eb.registerOrRemoveHandler(_0x391878);
    }
    function _0x2cce30(_0x336e89, _0x3e5880, _0x5bb688, _0x396c4b, _0x1a10f9) {
      _0x336e89 = _0x335a2b(_0x336e89);
      if (typeof _0x336e89.onwheel != "undefined") {
        _0x3befc2(_0x336e89, _0x3e5880, _0x5bb688, _0x396c4b, 9, "wheel", _0x1a10f9);
        return 0;
      } else {
        return -1;
      }
    }
    function _0x420513(_0x2a971d) {
      var _0x87dd1d = _0x2a971d.getExtension("ANGLE_instanced_arrays");
      if (_0x87dd1d) {
        _0x2a971d.vertexAttribDivisor = function (_0x5b9ce3, _0x29651e) {
          _0x87dd1d.vertexAttribDivisorANGLE(_0x5b9ce3, _0x29651e);
        };
        _0x2a971d.drawArraysInstanced = function (_0x4372c9, _0x5b2152, _0x5a6c83, _0x493774) {
          _0x87dd1d.drawArraysInstancedANGLE(_0x4372c9, _0x5b2152, _0x5a6c83, _0x493774);
        };
        _0x2a971d.drawElementsInstanced = function (_0x58552c, _0xb9b1c9, _0x9845f7, _0x2a372d, _0x107a94) {
          _0x87dd1d.drawElementsInstancedANGLE(_0x58552c, _0xb9b1c9, _0x9845f7, _0x2a372d, _0x107a94);
        };
        return 1;
      }
    }
    function _0x1a2efd(_0x45a0e1) {
      var _0x571f7f = _0x45a0e1.getExtension("OES_vertex_array_object");
      if (_0x571f7f) {
        _0x45a0e1.createVertexArray = function () {
          return _0x571f7f.createVertexArrayOES();
        };
        _0x45a0e1.deleteVertexArray = function (_0x5927a5) {
          _0x571f7f.deleteVertexArrayOES(_0x5927a5);
        };
        _0x45a0e1.bindVertexArray = function (_0x345e70) {
          _0x571f7f.bindVertexArrayOES(_0x345e70);
        };
        _0x45a0e1.isVertexArray = function (_0x1f7989) {
          return _0x571f7f.isVertexArrayOES(_0x1f7989);
        };
        return 1;
      }
    }
    function _0x439af2(_0x1f430c) {
      var _0x2f533d = _0x1f430c.getExtension("WEBGL_draw_buffers");
      if (_0x2f533d) {
        _0x1f430c.drawBuffers = function (_0x368a32, _0x2eb740) {
          _0x2f533d.drawBuffersWEBGL(_0x368a32, _0x2eb740);
        };
        return 1;
      }
    }
    function _0x71a9f7(_0x386653) {
      return !!(_0x386653.dibvbi = _0x386653.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
    }
    function _0x337e7e(_0x4885e9) {
      return !!(_0x4885e9.mdibvbi = _0x4885e9.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
    }
    function _0x47224b(_0x52802b) {
      return !!(_0x52802b.multiDrawWebgl = _0x52802b.getExtension("WEBGL_multi_draw"));
    }
    var _0x5ae6d1 = {
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
      recordError: function _0x49aada(_0x39f345) {
        if (!_0x5ae6d1.lastError) {
          _0x5ae6d1.lastError = _0x39f345;
        }
      },
      getNewId: function (_0xe1d7a7) {
        var _0x5976f6 = _0x5ae6d1.counter++;
        for (var _0xc396ca = _0xe1d7a7.length; _0xc396ca < _0x5976f6; _0xc396ca++) {
          _0xe1d7a7[_0xc396ca] = null;
        }
        return _0x5976f6;
      },
      MAX_TEMP_BUFFER_SIZE: 2097152,
      numTempVertexBuffersPerSize: 64,
      log2ceilLookup: function (_0x58d8f1) {
        return 32 - Math.clz32(_0x58d8f1 === 0 ? 0 : _0x58d8f1 - 1);
      },
      generateTempBuffers: function (_0x271ad7, _0x1fe474) {
        var _0x593956 = _0x5ae6d1.log2ceilLookup(_0x5ae6d1.MAX_TEMP_BUFFER_SIZE);
        _0x1fe474.tempVertexBufferCounters1 = [];
        _0x1fe474.tempVertexBufferCounters2 = [];
        _0x1fe474.tempVertexBufferCounters1.length = _0x1fe474.tempVertexBufferCounters2.length = _0x593956 + 1;
        _0x1fe474.tempVertexBuffers1 = [];
        _0x1fe474.tempVertexBuffers2 = [];
        _0x1fe474.tempVertexBuffers1.length = _0x1fe474.tempVertexBuffers2.length = _0x593956 + 1;
        _0x1fe474.tempIndexBuffers = [];
        _0x1fe474.tempIndexBuffers.length = _0x593956 + 1;
        for (var _0x34de1e = 0; _0x34de1e <= _0x593956; ++_0x34de1e) {
          _0x1fe474.tempIndexBuffers[_0x34de1e] = null;
          _0x1fe474.tempVertexBufferCounters1[_0x34de1e] = _0x1fe474.tempVertexBufferCounters2[_0x34de1e] = 0;
          var _0x1545c6 = _0x5ae6d1.numTempVertexBuffersPerSize;
          _0x1fe474.tempVertexBuffers1[_0x34de1e] = [];
          _0x1fe474.tempVertexBuffers2[_0x34de1e] = [];
          var _0x3fdfe2 = _0x1fe474.tempVertexBuffers1[_0x34de1e];
          var _0xa60892 = _0x1fe474.tempVertexBuffers2[_0x34de1e];
          _0x3fdfe2.length = _0xa60892.length = _0x1545c6;
          for (var _0x2516f7 = 0; _0x2516f7 < _0x1545c6; ++_0x2516f7) {
            _0x3fdfe2[_0x2516f7] = _0xa60892[_0x2516f7] = null;
          }
        }
        if (_0x271ad7) {
          _0x1fe474.tempQuadIndexBuffer = _0x1b6649.createBuffer();
          _0x1fe474.GLctx.bindBuffer(34963, _0x1fe474.tempQuadIndexBuffer);
          var _0x35714b = _0x5ae6d1.MAX_TEMP_BUFFER_SIZE >> 1;
          var _0x36f76e = new Uint16Array(_0x35714b);
          var _0x34de1e = 0;
          var _0x1fc349 = 0;
          while (1) {
            _0x36f76e[_0x34de1e++] = _0x1fc349;
            if (_0x34de1e >= _0x35714b) {
              break;
            }
            _0x36f76e[_0x34de1e++] = _0x1fc349 + 1;
            if (_0x34de1e >= _0x35714b) {
              break;
            }
            _0x36f76e[_0x34de1e++] = _0x1fc349 + 2;
            if (_0x34de1e >= _0x35714b) {
              break;
            }
            _0x36f76e[_0x34de1e++] = _0x1fc349;
            if (_0x34de1e >= _0x35714b) {
              break;
            }
            _0x36f76e[_0x34de1e++] = _0x1fc349 + 2;
            if (_0x34de1e >= _0x35714b) {
              break;
            }
            _0x36f76e[_0x34de1e++] = _0x1fc349 + 3;
            if (_0x34de1e >= _0x35714b) {
              break;
            }
            _0x1fc349 += 4;
          }
          _0x1fe474.GLctx.bufferData(34963, _0x36f76e, 35044);
          _0x1fe474.GLctx.bindBuffer(34963, null);
        }
      },
      getTempVertexBuffer: function _0x1f5043(_0x152b9d) {
        var _0x52aaaf = _0x5ae6d1.log2ceilLookup(_0x152b9d);
        var _0x3dbd58 = _0x5ae6d1.currentContext.tempVertexBuffers1[_0x52aaaf];
        var _0x1d4ab4 = _0x5ae6d1.currentContext.tempVertexBufferCounters1[_0x52aaaf];
        _0x5ae6d1.currentContext.tempVertexBufferCounters1[_0x52aaaf] = _0x5ae6d1.currentContext.tempVertexBufferCounters1[_0x52aaaf] + 1 & _0x5ae6d1.numTempVertexBuffersPerSize - 1;
        var _0x747e74 = _0x3dbd58[_0x1d4ab4];
        if (_0x747e74) {
          return _0x747e74;
        }
        var _0x50c213 = _0x1b6649.getParameter(34964);
        _0x3dbd58[_0x1d4ab4] = _0x1b6649.createBuffer();
        _0x1b6649.bindBuffer(34962, _0x3dbd58[_0x1d4ab4]);
        _0x1b6649.bufferData(34962, 1 << _0x52aaaf, 35048);
        _0x1b6649.bindBuffer(34962, _0x50c213);
        return _0x3dbd58[_0x1d4ab4];
      },
      getTempIndexBuffer: function _0x1d1bfe(_0x406c82) {
        var _0x3e26c3 = _0x5ae6d1.log2ceilLookup(_0x406c82);
        var _0x22dd2c = _0x5ae6d1.currentContext.tempIndexBuffers[_0x3e26c3];
        if (_0x22dd2c) {
          return _0x22dd2c;
        }
        var _0x3435a3 = _0x1b6649.getParameter(34965);
        _0x5ae6d1.currentContext.tempIndexBuffers[_0x3e26c3] = _0x1b6649.createBuffer();
        _0x1b6649.bindBuffer(34963, _0x5ae6d1.currentContext.tempIndexBuffers[_0x3e26c3]);
        _0x1b6649.bufferData(34963, 1 << _0x3e26c3, 35048);
        _0x1b6649.bindBuffer(34963, _0x3435a3);
        return _0x5ae6d1.currentContext.tempIndexBuffers[_0x3e26c3];
      },
      newRenderingFrameStarted: function _0x3fe0a5() {
        if (!_0x5ae6d1.currentContext) {
          return;
        }
        var _0x4077a9 = _0x5ae6d1.currentContext.tempVertexBuffers1;
        _0x5ae6d1.currentContext.tempVertexBuffers1 = _0x5ae6d1.currentContext.tempVertexBuffers2;
        _0x5ae6d1.currentContext.tempVertexBuffers2 = _0x4077a9;
        _0x4077a9 = _0x5ae6d1.currentContext.tempVertexBufferCounters1;
        _0x5ae6d1.currentContext.tempVertexBufferCounters1 = _0x5ae6d1.currentContext.tempVertexBufferCounters2;
        _0x5ae6d1.currentContext.tempVertexBufferCounters2 = _0x4077a9;
        var _0x478a1b = _0x5ae6d1.log2ceilLookup(_0x5ae6d1.MAX_TEMP_BUFFER_SIZE);
        for (var _0x15e8af = 0; _0x15e8af <= _0x478a1b; ++_0x15e8af) {
          _0x5ae6d1.currentContext.tempVertexBufferCounters1[_0x15e8af] = 0;
        }
      },
      getSource: function (_0x14a85e, _0x53419a, _0x16200d, _0x3db099) {
        var _0x1f1c55 = "";
        for (var _0x33f0fc = 0; _0x33f0fc < _0x53419a; ++_0x33f0fc) {
          var _0x404cb8 = _0x3db099 ? _0x588032[_0x3db099 + _0x33f0fc * 4 >> 2] : -1;
          _0x1f1c55 += _0x5eaf00(_0x588032[_0x16200d + _0x33f0fc * 4 >> 2], _0x404cb8 < 0 ? undefined : _0x404cb8);
        }
        return _0x1f1c55;
      },
      calcBufLength: function _0x25c4b1(_0x232225, _0x3771f9, _0x5bbea5, _0x137629) {
        if (_0x5bbea5 > 0) {
          return _0x137629 * _0x5bbea5;
        }
        var _0x36fbbe = _0x5ae6d1.byteSizeByType[_0x3771f9 - _0x5ae6d1.byteSizeByTypeRoot];
        return _0x232225 * _0x36fbbe * _0x137629;
      },
      usedTempBuffers: [],
      preDrawHandleClientVertexAttribBindings: function _0x171180(_0x2bada6) {
        _0x5ae6d1.resetBufferBinding = false;
        for (var _0x2088c1 = 0; _0x2088c1 < _0x5ae6d1.currentContext.maxVertexAttribs; ++_0x2088c1) {
          var _0x22b5e6 = _0x5ae6d1.currentContext.clientBuffers[_0x2088c1];
          if (!_0x22b5e6.clientside || !_0x22b5e6.enabled) {
            continue;
          }
          _0x5ae6d1.resetBufferBinding = true;
          var _0x4207c5 = _0x5ae6d1.calcBufLength(_0x22b5e6.size, _0x22b5e6.type, _0x22b5e6.stride, _0x2bada6);
          var _0xcaa7a8 = _0x5ae6d1.getTempVertexBuffer(_0x4207c5);
          _0x1b6649.bindBuffer(34962, _0xcaa7a8);
          _0x1b6649.bufferSubData(34962, 0, _0x5f38b4.subarray(_0x22b5e6.ptr, _0x22b5e6.ptr + _0x4207c5));
          _0x22b5e6.vertexAttribPointerAdaptor.call(_0x1b6649, _0x2088c1, _0x22b5e6.size, _0x22b5e6.type, _0x22b5e6.normalized, _0x22b5e6.stride, 0);
        }
      },
      postDrawHandleClientVertexAttribBindings: function _0x276cdc() {
        if (_0x5ae6d1.resetBufferBinding) {
          _0x1b6649.bindBuffer(34962, _0x5ae6d1.buffers[_0x1b6649.currentArrayBufferBinding]);
        }
      },
      createContext: function (_0x1988d3, _0x2866e9) {
        if (!_0x1988d3.getContextSafariWebGL2Fixed) {
          _0x1988d3.getContextSafariWebGL2Fixed = _0x1988d3.getContext;
          function _0x811c7d(_0x472d40, _0x46229c) {
            var _0x2c0dc3 = _0x1988d3.getContextSafariWebGL2Fixed(_0x472d40, _0x46229c);
            if (_0x472d40 == "webgl" == _0x2c0dc3 instanceof WebGLRenderingContext) {
              return _0x2c0dc3;
            } else {
              return null;
            }
          }
          _0x1988d3.getContext = _0x811c7d;
        }
        var _0x55336b = _0x2866e9.majorVersion > 1 ? _0x1988d3.getContext("webgl2", _0x2866e9) : _0x1988d3.getContext("webgl", _0x2866e9);
        if (!_0x55336b) {
          return 0;
        }
        var _0x24f55f = _0x5ae6d1.registerContext(_0x55336b, _0x2866e9);
        return _0x24f55f;
      },
      registerContext: function (_0x42d8c4, _0x512d7a) {
        var _0x3bd973 = _0x5ae6d1.getNewId(_0x5ae6d1.contexts);
        var _0x264370 = {
          handle: _0x3bd973,
          attributes: _0x512d7a,
          version: _0x512d7a.majorVersion,
          GLctx: _0x42d8c4
        };
        if (_0x42d8c4.canvas) {
          _0x42d8c4.canvas.GLctxObject = _0x264370;
        }
        _0x5ae6d1.contexts[_0x3bd973] = _0x264370;
        if (typeof _0x512d7a.enableExtensionsByDefault == "undefined" || _0x512d7a.enableExtensionsByDefault) {
          _0x5ae6d1.initExtensions(_0x264370);
        }
        _0x264370.maxVertexAttribs = _0x264370.GLctx.getParameter(34921);
        _0x264370.clientBuffers = [];
        for (var _0x3824fa = 0; _0x3824fa < _0x264370.maxVertexAttribs; _0x3824fa++) {
          _0x264370.clientBuffers[_0x3824fa] = {
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
        _0x5ae6d1.generateTempBuffers(false, _0x264370);
        return _0x3bd973;
      },
      makeContextCurrent: function (_0x56c8f3) {
        _0x5ae6d1.currentContext = _0x5ae6d1.contexts[_0x56c8f3];
        _0x1d435e.ctx = _0x1b6649 = _0x5ae6d1.currentContext && _0x5ae6d1.currentContext.GLctx;
        return !_0x56c8f3 || !!_0x1b6649;
      },
      getContext: function (_0x3adaa5) {
        return _0x5ae6d1.contexts[_0x3adaa5];
      },
      deleteContext: function (_0x2ea948) {
        if (_0x5ae6d1.currentContext === _0x5ae6d1.contexts[_0x2ea948]) {
          _0x5ae6d1.currentContext = null;
        }
        if (typeof _0x4ad3eb == "object") {
          _0x4ad3eb.removeAllHandlersOnTarget(_0x5ae6d1.contexts[_0x2ea948].GLctx.canvas);
        }
        if (_0x5ae6d1.contexts[_0x2ea948] && _0x5ae6d1.contexts[_0x2ea948].GLctx.canvas) {
          _0x5ae6d1.contexts[_0x2ea948].GLctx.canvas.GLctxObject = undefined;
        }
        _0x5ae6d1.contexts[_0x2ea948] = null;
      },
      initExtensions: function (_0x864813) {
        if (!_0x864813) {
          _0x864813 = _0x5ae6d1.currentContext;
        }
        if (_0x864813.initExtensionsDone) {
          return;
        }
        _0x864813.initExtensionsDone = true;
        var _0x2edbd8 = _0x864813.GLctx;
        _0x420513(_0x2edbd8);
        _0x1a2efd(_0x2edbd8);
        _0x439af2(_0x2edbd8);
        _0x71a9f7(_0x2edbd8);
        _0x337e7e(_0x2edbd8);
        if (_0x864813.version >= 2) {
          _0x2edbd8.disjointTimerQueryExt = _0x2edbd8.getExtension("EXT_disjoint_timer_query_webgl2");
        }
        if (_0x864813.version < 2 || !_0x2edbd8.disjointTimerQueryExt) {
          _0x2edbd8.disjointTimerQueryExt = _0x2edbd8.getExtension("EXT_disjoint_timer_query");
        }
        _0x47224b(_0x2edbd8);
        var _0x231c94 = _0x2edbd8.getSupportedExtensions() || [];
        _0x231c94.forEach(function (_0xeef97) {
          if (!_0xeef97.includes("lose_context") && !_0xeef97.includes("debug")) {
            _0x2edbd8.getExtension(_0xeef97);
          }
        });
      }
    };
    var _0x5cc23b = ["default", "low-power", "high-performance"];
    function _0x58f4ca(_0x385dc2, _0x34f7be) {
      var _0x4a9732 = _0x34f7be >> 2;
      var _0x5504e5 = _0x588032[_0x4a9732 + 6];
      var _0x3cbb75 = {
        alpha: !!_0x588032[_0x4a9732 + 0],
        depth: !!_0x588032[_0x4a9732 + 1],
        stencil: !!_0x588032[_0x4a9732 + 2],
        antialias: !!_0x588032[_0x4a9732 + 3],
        premultipliedAlpha: !!_0x588032[_0x4a9732 + 4],
        preserveDrawingBuffer: !!_0x588032[_0x4a9732 + 5],
        powerPreference: _0x5cc23b[_0x5504e5],
        failIfMajorPerformanceCaveat: !!_0x588032[_0x4a9732 + 7],
        majorVersion: _0x588032[_0x4a9732 + 8],
        minorVersion: _0x588032[_0x4a9732 + 9],
        enableExtensionsByDefault: _0x588032[_0x4a9732 + 10],
        explicitSwapControl: _0x588032[_0x4a9732 + 11],
        proxyContextToMainThread: _0x588032[_0x4a9732 + 12],
        renderViaOffscreenBackBuffer: _0x588032[_0x4a9732 + 13]
      };
      var _0x20c237 = _0x17b2ae(_0x385dc2);
      if (!_0x20c237) {
        return 0;
      }
      if (_0x3cbb75.explicitSwapControl) {
        return 0;
      }
      var _0x3977d9 = _0x5ae6d1.createContext(_0x20c237, _0x3cbb75);
      return _0x3977d9;
    }
    function _0x26b0a5(_0x63ae85, _0xddc051) {
      return _0x58f4ca(_0x63ae85, _0xddc051);
    }
    function _0x44a9ad(_0x358bd1) {
      if (_0x5ae6d1.currentContext == _0x358bd1) {
        _0x5ae6d1.currentContext = 0;
      }
      _0x5ae6d1.deleteContext(_0x358bd1);
    }
    function _0x49b2e5(_0x47c2fa, _0x3efa89) {
      var _0x1e9d86 = _0x5ae6d1.getContext(_0x47c2fa);
      var _0x3f32d0 = _0x5eaf00(_0x3efa89);
      if (_0x3f32d0.startsWith("GL_")) {
        _0x3f32d0 = _0x3f32d0.substr(3);
      }
      if (_0x3f32d0 == "ANGLE_instanced_arrays") {
        _0x420513(_0x1b6649);
      }
      if (_0x3f32d0 == "OES_vertex_array_object") {
        _0x1a2efd(_0x1b6649);
      }
      if (_0x3f32d0 == "WEBGL_draw_buffers") {
        _0x439af2(_0x1b6649);
      }
      if (_0x3f32d0 == "WEBGL_draw_instanced_base_vertex_base_instance") {
        _0x71a9f7(_0x1b6649);
      }
      if (_0x3f32d0 == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
        _0x337e7e(_0x1b6649);
      }
      if (_0x3f32d0 == "WEBGL_multi_draw") {
        _0x47224b(_0x1b6649);
      }
      var _0x3f3240 = _0x1e9d86.GLctx.getExtension(_0x3f32d0);
      return !!_0x3f3240;
    }
    function _0x19e9d6() {
      if (_0x5ae6d1.currentContext) {
        return _0x5ae6d1.currentContext.handle;
      } else {
        return 0;
      }
    }
    function _0x929cdb() {
      return _0x19e9d6();
    }
    function _0x22b082(_0x46f47d) {
      var _0x2e5939 = _0x46f47d >> 2;
      for (var _0x389156 = 0; _0x389156 < 14; ++_0x389156) {
        _0x588032[_0x2e5939 + _0x389156] = 0;
      }
      _0x588032[_0x2e5939 + 0] = _0x588032[_0x2e5939 + 1] = _0x588032[_0x2e5939 + 3] = _0x588032[_0x2e5939 + 4] = _0x588032[_0x2e5939 + 8] = _0x588032[_0x2e5939 + 10] = 1;
    }
    function _0x5327da(_0x1fe8ec) {
      var _0x49075d = _0x5ae6d1.makeContextCurrent(_0x1fe8ec);
      if (_0x49075d) {
        return 0;
      } else {
        return -5;
      }
    }
    var _0x2cd1ab = {};
    function _0x53e95f() {
      return _0x42dbe8 || "./this.program";
    }
    function _0x3140bb() {
      if (!_0x3140bb.strings) {
        var _0x474e4f = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var _0x1159e7 = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: _0x474e4f,
          _: _0x53e95f()
        };
        for (var _0x547d7c in _0x2cd1ab) {
          if (_0x2cd1ab[_0x547d7c] === undefined) {
            delete _0x1159e7[_0x547d7c];
          } else {
            _0x1159e7[_0x547d7c] = _0x2cd1ab[_0x547d7c];
          }
        }
        var _0x215381 = [];
        for (var _0x547d7c in _0x1159e7) {
          _0x215381.push(_0x547d7c + "=" + _0x1159e7[_0x547d7c]);
        }
        _0x3140bb.strings = _0x215381;
      }
      return _0x3140bb.strings;
    }
    function _0x6bbf54(_0x1f15c4, _0x11fb47) {
      var _0x1ea054 = 0;
      _0x3140bb().forEach(function (_0x119c3c, _0x38b860) {
        var _0xea7511 = _0x11fb47 + _0x1ea054;
        _0x588032[_0x1f15c4 + _0x38b860 * 4 >> 2] = _0xea7511;
        _0x5b50ac(_0x119c3c, _0xea7511);
        _0x1ea054 += _0x119c3c.length + 1;
      });
      return 0;
    }
    function _0x3210c9(_0x26b712, _0x38800e) {
      var _0x59ccf7 = _0x3140bb();
      _0x588032[_0x26b712 >> 2] = _0x59ccf7.length;
      var _0x5350d1 = 0;
      _0x59ccf7.forEach(function (_0x20bc86) {
        _0x5350d1 += _0x20bc86.length + 1;
      });
      _0x588032[_0x38800e >> 2] = _0x5350d1;
      return 0;
    }
    function _0x2b2c09(_0x57c788) {
      try {
        var _0x15dd24 = _0x1162f4.getStreamFromFD(_0x57c788);
        _0x170eaf.close(_0x15dd24);
        return 0;
      } catch (_0x8d2fd2) {
        if (typeof _0x170eaf == "undefined" || !(_0x8d2fd2 instanceof _0x170eaf.ErrnoError)) {
          throw _0x8d2fd2;
        }
        return _0x8d2fd2.errno;
      }
    }
    function _0x6260e7(_0x15c659, _0x716b55) {
      try {
        var _0x2041c9 = _0x1162f4.getStreamFromFD(_0x15c659);
        var _0x4ac1b9 = _0x2041c9.tty ? 2 : _0x170eaf.isDir(_0x2041c9.mode) ? 3 : _0x170eaf.isLink(_0x2041c9.mode) ? 7 : 4;
        _0x3f8e3d[_0x716b55 >> 0] = _0x4ac1b9;
        return 0;
      } catch (_0x28253d) {
        if (typeof _0x170eaf == "undefined" || !(_0x28253d instanceof _0x170eaf.ErrnoError)) {
          throw _0x28253d;
        }
        return _0x28253d.errno;
      }
    }
    function _0x516a3e(_0x3d50a1, _0x5dc871, _0x244e3e, _0x3ba5c4) {
      try {
        var _0x1a2874 = _0x1162f4.getStreamFromFD(_0x3d50a1);
        var _0x13f97e = _0x1162f4.doReadv(_0x1a2874, _0x5dc871, _0x244e3e);
        _0x588032[_0x3ba5c4 >> 2] = _0x13f97e;
        return 0;
      } catch (_0x58914b) {
        if (typeof _0x170eaf == "undefined" || !(_0x58914b instanceof _0x170eaf.ErrnoError)) {
          throw _0x58914b;
        }
        return _0x58914b.errno;
      }
    }
    function _0x54caae(_0x5aa718, _0x5778e4, _0x51183d, _0x3eae18, _0x1b91ea) {
      try {
        var _0x34bfde = _0x1162f4.getStreamFromFD(_0x5aa718);
        var _0x2365fa = 4294967296;
        var _0x1c29de = _0x51183d * _0x2365fa + (_0x5778e4 >>> 0);
        var _0x1eda70 = 9007199254740992;
        if (_0x1c29de <= -_0x1eda70 || _0x1c29de >= _0x1eda70) {
          return -61;
        }
        _0x170eaf.llseek(_0x34bfde, _0x1c29de, _0x3eae18);
        _0x2b7c5d = [_0x34bfde.position >>> 0, (_0x396169 = _0x34bfde.position, +Math.abs(_0x396169) >= 1 ? _0x396169 > 0 ? (Math.min(+Math.floor(_0x396169 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x396169 - +(~~_0x396169 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x588032[_0x1b91ea >> 2] = _0x2b7c5d[0];
        _0x588032[_0x1b91ea + 4 >> 2] = _0x2b7c5d[1];
        if (_0x34bfde.getdents && _0x1c29de === 0 && _0x3eae18 === 0) {
          _0x34bfde.getdents = null;
        }
        return 0;
      } catch (_0x42b5ee) {
        if (typeof _0x170eaf == "undefined" || !(_0x42b5ee instanceof _0x170eaf.ErrnoError)) {
          throw _0x42b5ee;
        }
        return _0x42b5ee.errno;
      }
    }
    function _0x4929cd(_0x443e72, _0x12aa60, _0x19d696, _0x1d4bb8) {
      try {
        var _0x374a17 = _0x1162f4.getStreamFromFD(_0x443e72);
        var _0x5cd2e9 = _0x1162f4.doWritev(_0x374a17, _0x12aa60, _0x19d696);
        _0x588032[_0x1d4bb8 >> 2] = _0x5cd2e9;
        return 0;
      } catch (_0x18bd20) {
        if (typeof _0x170eaf == "undefined" || !(_0x18bd20 instanceof _0x170eaf.ErrnoError)) {
          throw _0x18bd20;
        }
        return _0x18bd20.errno;
      }
    }
    function _0x302a7c() {
      return _0x52607a();
    }
    function _0x24e130(_0x48411c, _0x1bed0f, _0x3c90bd, _0x21ba30) {
      var _0x2e11f6 = 0;
      var _0x2bc963 = 0;
      var _0x870870 = 0;
      var _0x524c3c = 0;
      var _0x3dc416 = 0;
      var _0x35f4cf = 0;
      var _0x37e1aa;
      function _0x447a36(_0x27fa30, _0xd08563, _0xb1a580, _0x20ecc3, _0x2e3d65, _0x529d0a) {
        var _0x2fca32;
        var _0x1971c7;
        var _0xd345d7;
        var _0x55f924;
        _0x1971c7 = _0x27fa30 === 10 ? 28 : 16;
        _0x2e3d65 = _0x27fa30 === 10 ? _0x47e949(_0x2e3d65) : _0x13e1b3(_0x2e3d65);
        _0x2fca32 = _0x14649f(_0x1971c7);
        _0x55f924 = _0x28692c(_0x2fca32, _0x27fa30, _0x2e3d65, _0x529d0a);
        _0x39d8f2(!_0x55f924);
        _0xd345d7 = _0x14649f(32);
        _0x588032[_0xd345d7 + 4 >> 2] = _0x27fa30;
        _0x588032[_0xd345d7 + 8 >> 2] = _0xd08563;
        _0x588032[_0xd345d7 + 12 >> 2] = _0xb1a580;
        _0x588032[_0xd345d7 + 24 >> 2] = _0x20ecc3;
        _0x588032[_0xd345d7 + 20 >> 2] = _0x2fca32;
        if (_0x27fa30 === 10) {
          _0x588032[_0xd345d7 + 16 >> 2] = 28;
        } else {
          _0x588032[_0xd345d7 + 16 >> 2] = 16;
        }
        _0x588032[_0xd345d7 + 28 >> 2] = 0;
        return _0xd345d7;
      }
      if (_0x3c90bd) {
        _0x870870 = _0x588032[_0x3c90bd >> 2];
        _0x524c3c = _0x588032[_0x3c90bd + 4 >> 2];
        _0x3dc416 = _0x588032[_0x3c90bd + 8 >> 2];
        _0x35f4cf = _0x588032[_0x3c90bd + 12 >> 2];
      }
      if (_0x3dc416 && !_0x35f4cf) {
        _0x35f4cf = _0x3dc416 === 2 ? 17 : 6;
      }
      if (!_0x3dc416 && _0x35f4cf) {
        _0x3dc416 = _0x35f4cf === 17 ? 2 : 1;
      }
      if (_0x35f4cf === 0) {
        _0x35f4cf = 6;
      }
      if (_0x3dc416 === 0) {
        _0x3dc416 = 1;
      }
      if (!_0x48411c && !_0x1bed0f) {
        return -2;
      }
      if (_0x870870 & ~1087) {
        return -1;
      }
      if (_0x3c90bd !== 0 && _0x588032[_0x3c90bd >> 2] & 2 && !_0x48411c) {
        return -1;
      }
      if (_0x870870 & 32) {
        return -2;
      }
      if (_0x3dc416 !== 0 && _0x3dc416 !== 1 && _0x3dc416 !== 2) {
        return -7;
      }
      if (_0x524c3c !== 0 && _0x524c3c !== 2 && _0x524c3c !== 10) {
        return -6;
      }
      if (_0x1bed0f) {
        _0x1bed0f = _0x5eaf00(_0x1bed0f);
        _0x2bc963 = parseInt(_0x1bed0f, 10);
        if (isNaN(_0x2bc963)) {
          if (_0x870870 & 1024) {
            return -2;
          }
          return -8;
        }
      }
      if (!_0x48411c) {
        if (_0x524c3c === 0) {
          _0x524c3c = 2;
        }
        if ((_0x870870 & 1) === 0) {
          if (_0x524c3c === 2) {
            _0x2e11f6 = _0x412a44(2130706433);
          } else {
            _0x2e11f6 = [0, 0, 0, 1];
          }
        }
        _0x37e1aa = _0x447a36(_0x524c3c, _0x3dc416, _0x35f4cf, null, _0x2e11f6, _0x2bc963);
        _0x588032[_0x21ba30 >> 2] = _0x37e1aa;
        return 0;
      }
      _0x48411c = _0x5eaf00(_0x48411c);
      _0x2e11f6 = _0xd5931a(_0x48411c);
      if (_0x2e11f6 !== null) {
        if (_0x524c3c === 0 || _0x524c3c === 2) {
          _0x524c3c = 2;
        } else if (_0x524c3c === 10 && _0x870870 & 8) {
          _0x2e11f6 = [0, 0, _0x412a44(65535), _0x2e11f6];
          _0x524c3c = 10;
        } else {
          return -2;
        }
      } else {
        _0x2e11f6 = _0x394bab(_0x48411c);
        if (_0x2e11f6 !== null) {
          if (_0x524c3c === 0 || _0x524c3c === 10) {
            _0x524c3c = 10;
          } else {
            return -2;
          }
        }
      }
      if (_0x2e11f6 != null) {
        _0x37e1aa = _0x447a36(_0x524c3c, _0x3dc416, _0x35f4cf, _0x48411c, _0x2e11f6, _0x2bc963);
        _0x588032[_0x21ba30 >> 2] = _0x37e1aa;
        return 0;
      }
      if (_0x870870 & 4) {
        return -2;
      }
      _0x48411c = _0x4624b2.lookup_name(_0x48411c);
      _0x2e11f6 = _0xd5931a(_0x48411c);
      if (_0x524c3c === 0) {
        _0x524c3c = 2;
      } else if (_0x524c3c === 10) {
        _0x2e11f6 = [0, 0, _0x412a44(65535), _0x2e11f6];
      }
      _0x37e1aa = _0x447a36(_0x524c3c, _0x3dc416, _0x35f4cf, null, _0x2e11f6, _0x2bc963);
      _0x588032[_0x21ba30 >> 2] = _0x37e1aa;
      return 0;
    }
    function _0x5339a7(_0x546db1) {
      var _0x16ea20 = _0x14649f(20);
      var _0x2178de = _0x14649f(_0x546db1.length + 1);
      _0x17e527(_0x546db1, _0x2178de, _0x546db1.length + 1);
      _0x588032[_0x16ea20 >> 2] = _0x2178de;
      var _0x1bce2c = _0x14649f(4);
      _0x588032[_0x1bce2c >> 2] = 0;
      _0x588032[_0x16ea20 + 4 >> 2] = _0x1bce2c;
      var _0xd0a0ca = 2;
      _0x588032[_0x16ea20 + 8 >> 2] = _0xd0a0ca;
      _0x588032[_0x16ea20 + 12 >> 2] = 4;
      var _0x1a9e90 = _0x14649f(12);
      _0x588032[_0x1a9e90 >> 2] = _0x1a9e90 + 8;
      _0x588032[_0x1a9e90 + 4 >> 2] = 0;
      _0x588032[_0x1a9e90 + 8 >> 2] = _0xd5931a(_0x4624b2.lookup_name(_0x546db1));
      _0x588032[_0x16ea20 + 16 >> 2] = _0x1a9e90;
      return _0x16ea20;
    }
    function _0x9ab753(_0x59e283, _0x1fe127, _0x1298d4) {
      if (_0x1298d4 !== 2) {
        _0x155f41(5);
        return null;
      }
      _0x59e283 = _0x588032[_0x59e283 >> 2];
      var _0x52a658 = _0x13e1b3(_0x59e283);
      var _0x14d966 = _0x4624b2.lookup_addr(_0x52a658);
      if (_0x14d966) {
        _0x52a658 = _0x14d966;
      }
      return _0x5339a7(_0x52a658);
    }
    function _0x457209(_0xfb58ed) {
      return _0x5339a7(_0x5eaf00(_0xfb58ed));
    }
    function _0x3b14c4(_0x5accf3, _0x5f28dc, _0x2726e8, _0x1930f8, _0x5caa75, _0x457acd, _0x105015) {
      var _0xaa7c25 = _0x6870c2(_0x5accf3, _0x5f28dc);
      if (_0xaa7c25.errno) {
        return -6;
      }
      var _0x808c5b = _0xaa7c25.port;
      var _0x538e15 = _0xaa7c25.addr;
      var _0x4e4d69 = false;
      if (_0x2726e8 && _0x1930f8) {
        var _0x47c361;
        if (_0x105015 & 1 || !(_0x47c361 = _0x4624b2.lookup_addr(_0x538e15))) {
          if (_0x105015 & 8) {
            return -2;
          }
        } else {
          _0x538e15 = _0x47c361;
        }
        var _0x478a8c = _0x17e527(_0x538e15, _0x2726e8, _0x1930f8);
        if (_0x478a8c + 1 >= _0x1930f8) {
          _0x4e4d69 = true;
        }
      }
      if (_0x5caa75 && _0x457acd) {
        _0x808c5b = "" + _0x808c5b;
        var _0x478a8c = _0x17e527(_0x808c5b, _0x5caa75, _0x457acd);
        if (_0x478a8c + 1 >= _0x457acd) {
          _0x4e4d69 = true;
        }
      }
      if (_0x4e4d69) {
        return -12;
      }
      return 0;
    }
    function _0x5ae15b(_0x194664) {
      _0x1b6649.activeTexture(_0x194664);
    }
    function _0xf93853(_0x3be87d, _0x47bfcf) {
      _0x3be87d = _0x5ae6d1.programs[_0x3be87d];
      _0x47bfcf = _0x5ae6d1.shaders[_0x47bfcf];
      _0x3be87d[_0x47bfcf.shaderType] = _0x47bfcf;
      _0x1b6649.attachShader(_0x3be87d, _0x47bfcf);
    }
    function _0x2e69b0(_0x58fb97, _0x5de6a2) {
      _0x1b6649.beginQuery(_0x58fb97, _0x5ae6d1.queries[_0x5de6a2]);
    }
    function _0x377f59(_0x33b6fd, _0x82d18f, _0x3d9cda) {
      _0x1b6649.bindAttribLocation(_0x5ae6d1.programs[_0x33b6fd], _0x82d18f, _0x5eaf00(_0x3d9cda));
    }
    function _0x4ee052(_0x1e847a, _0x2358c) {
      if (_0x1e847a == 34962) {
        _0x1b6649.currentArrayBufferBinding = _0x2358c;
      } else if (_0x1e847a == 34963) {
        _0x1b6649.currentElementArrayBufferBinding = _0x2358c;
      }
      if (_0x1e847a == 35051) {
        _0x1b6649.currentPixelPackBufferBinding = _0x2358c;
      } else if (_0x1e847a == 35052) {
        _0x1b6649.currentPixelUnpackBufferBinding = _0x2358c;
      }
      _0x1b6649.bindBuffer(_0x1e847a, _0x5ae6d1.buffers[_0x2358c]);
    }
    function _0x359525(_0x245f72, _0x18bea3, _0x10d6e7) {
      _0x1b6649.bindBufferBase(_0x245f72, _0x18bea3, _0x5ae6d1.buffers[_0x10d6e7]);
    }
    function _0x133bae(_0x3a7cfd, _0x1f483e, _0x2b4eb0, _0x1bd177, _0xe88c29) {
      _0x1b6649.bindBufferRange(_0x3a7cfd, _0x1f483e, _0x5ae6d1.buffers[_0x2b4eb0], _0x1bd177, _0xe88c29);
    }
    function _0x392bfc(_0x59464f, _0x21674c) {
      _0x1b6649.bindFramebuffer(_0x59464f, _0x5ae6d1.framebuffers[_0x21674c]);
    }
    function _0x5ca515(_0x870fb9, _0x5ed11f) {
      _0x1b6649.bindRenderbuffer(_0x870fb9, _0x5ae6d1.renderbuffers[_0x5ed11f]);
    }
    function _0x369d99(_0x59bf19, _0x4b7b6d) {
      _0x1b6649.bindSampler(_0x59bf19, _0x5ae6d1.samplers[_0x4b7b6d]);
    }
    function _0xedefe4(_0x267767, _0x528b8d) {
      _0x1b6649.bindTexture(_0x267767, _0x5ae6d1.textures[_0x528b8d]);
    }
    function _0x50861c(_0x279b9e) {
      _0x1b6649.bindVertexArray(_0x5ae6d1.vaos[_0x279b9e]);
      var _0x1f67a3 = _0x1b6649.getParameter(34965);
      _0x1b6649.currentElementArrayBufferBinding = _0x1f67a3 ? _0x1f67a3.name | 0 : 0;
    }
    function _0x549997(_0x749b9f) {
      _0x1b6649.blendEquation(_0x749b9f);
    }
    function _0x464f55(_0x231130, _0x39d9f7) {
      _0x1b6649.blendEquationSeparate(_0x231130, _0x39d9f7);
    }
    function _0x4e0fe6(_0x4db936, _0x101d41, _0x1d5e76, _0x2aab0f) {
      _0x1b6649.blendFuncSeparate(_0x4db936, _0x101d41, _0x1d5e76, _0x2aab0f);
    }
    function _0x366f11(_0x3c2389, _0x1a7739, _0x42c7a5, _0x25d057, _0x124212, _0x317d33, _0x3dde7d, _0xbed4e3, _0x27780c, _0x6a68fd) {
      _0x1b6649.blitFramebuffer(_0x3c2389, _0x1a7739, _0x42c7a5, _0x25d057, _0x124212, _0x317d33, _0x3dde7d, _0xbed4e3, _0x27780c, _0x6a68fd);
    }
    function _0x2fb08b(_0x28739b, _0x4a40a2, _0x5a053d, _0x409580) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        if (_0x5a053d) {
          _0x1b6649.bufferData(_0x28739b, _0x5f38b4, _0x409580, _0x5a053d, _0x4a40a2);
        } else {
          _0x1b6649.bufferData(_0x28739b, _0x4a40a2, _0x409580);
        }
      } else {
        _0x1b6649.bufferData(_0x28739b, _0x5a053d ? _0x5f38b4.subarray(_0x5a053d, _0x5a053d + _0x4a40a2) : _0x4a40a2, _0x409580);
      }
    }
    function _0x13e9be(_0x3c5d1e, _0x4d016c, _0x2dad52, _0x1a4aa4) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        _0x1b6649.bufferSubData(_0x3c5d1e, _0x4d016c, _0x5f38b4, _0x1a4aa4, _0x2dad52);
        return;
      }
      _0x1b6649.bufferSubData(_0x3c5d1e, _0x4d016c, _0x5f38b4.subarray(_0x1a4aa4, _0x1a4aa4 + _0x2dad52));
    }
    function _0xa9e645(_0x305cb5) {
      return _0x1b6649.checkFramebufferStatus(_0x305cb5);
    }
    function _0xfdc703(_0x62624f) {
      _0x1b6649.clear(_0x62624f);
    }
    function _0x4d4bca(_0x1064c8, _0x2c1589, _0x314caa, _0x19e621) {
      _0x1b6649.clearBufferfi(_0x1064c8, _0x2c1589, _0x314caa, _0x19e621);
    }
    function _0x891119(_0x2499f8, _0xa09790, _0x1900c8) {
      _0x1b6649.clearBufferfv(_0x2499f8, _0xa09790, _0x538c3e, _0x1900c8 >> 2);
    }
    function _0x374299(_0x1446ed, _0x131b32, _0x1f73b1) {
      _0x1b6649.clearBufferuiv(_0x1446ed, _0x131b32, _0x5db304, _0x1f73b1 >> 2);
    }
    function _0x1834f4(_0x4691c2, _0xe9dc24, _0x47fd03, _0x3c6502) {
      _0x1b6649.clearColor(_0x4691c2, _0xe9dc24, _0x47fd03, _0x3c6502);
    }
    function _0x499890(_0x273f17) {
      _0x1b6649.clearDepth(_0x273f17);
    }
    function _0x570ab3(_0x5cfb1e) {
      _0x1b6649.clearStencil(_0x5cfb1e);
    }
    function _0x3cb5c7(_0x5b0f1b, _0x361b15, _0xb3ed9b, _0x4dcae1) {
      return _0x1b6649.clientWaitSync(_0x5ae6d1.syncs[_0x5b0f1b], _0x361b15, _0x1f17bd(_0xb3ed9b, _0x4dcae1));
    }
    function _0x5a3c46(_0x5c902d, _0xcac5bc, _0x3dc202, _0x218e65) {
      _0x1b6649.colorMask(!!_0x5c902d, !!_0xcac5bc, !!_0x3dc202, !!_0x218e65);
    }
    function _0xf33748(_0x4c36eb) {
      _0x1b6649.compileShader(_0x5ae6d1.shaders[_0x4c36eb]);
    }
    function _0x13ca2c(_0x56f72c, _0x98fcd, _0x26192e, _0x5d1d0f, _0x221e48, _0x4ae575, _0x2b8390, _0xd936f2) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        if (_0x1b6649.currentPixelUnpackBufferBinding) {
          _0x1b6649.compressedTexImage2D(_0x56f72c, _0x98fcd, _0x26192e, _0x5d1d0f, _0x221e48, _0x4ae575, _0x2b8390, _0xd936f2);
        } else {
          _0x1b6649.compressedTexImage2D(_0x56f72c, _0x98fcd, _0x26192e, _0x5d1d0f, _0x221e48, _0x4ae575, _0x5f38b4, _0xd936f2, _0x2b8390);
        }
        return;
      }
      _0x1b6649.compressedTexImage2D(_0x56f72c, _0x98fcd, _0x26192e, _0x5d1d0f, _0x221e48, _0x4ae575, _0xd936f2 ? _0x5f38b4.subarray(_0xd936f2, _0xd936f2 + _0x2b8390) : null);
    }
    function _0x2d6d45(_0x8a100, _0x548216, _0x5e85f5, _0x536c71, _0x2aedc5, _0x51bf65, _0xff445f, _0x51ef2e, _0x5cb7a8) {
      if (_0x1b6649.currentPixelUnpackBufferBinding) {
        _0x1b6649.compressedTexImage3D(_0x8a100, _0x548216, _0x5e85f5, _0x536c71, _0x2aedc5, _0x51bf65, _0xff445f, _0x51ef2e, _0x5cb7a8);
      } else {
        _0x1b6649.compressedTexImage3D(_0x8a100, _0x548216, _0x5e85f5, _0x536c71, _0x2aedc5, _0x51bf65, _0xff445f, _0x5f38b4, _0x5cb7a8, _0x51ef2e);
      }
    }
    function _0x195877(_0x58ccd5, _0x588846, _0x4139ec, _0x4abf23, _0x306c89, _0x2bfcaa, _0x55f4f7, _0x508cff, _0x3917a3) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        if (_0x1b6649.currentPixelUnpackBufferBinding) {
          _0x1b6649.compressedTexSubImage2D(_0x58ccd5, _0x588846, _0x4139ec, _0x4abf23, _0x306c89, _0x2bfcaa, _0x55f4f7, _0x508cff, _0x3917a3);
        } else {
          _0x1b6649.compressedTexSubImage2D(_0x58ccd5, _0x588846, _0x4139ec, _0x4abf23, _0x306c89, _0x2bfcaa, _0x55f4f7, _0x5f38b4, _0x3917a3, _0x508cff);
        }
        return;
      }
      _0x1b6649.compressedTexSubImage2D(_0x58ccd5, _0x588846, _0x4139ec, _0x4abf23, _0x306c89, _0x2bfcaa, _0x55f4f7, _0x3917a3 ? _0x5f38b4.subarray(_0x3917a3, _0x3917a3 + _0x508cff) : null);
    }
    function _0x3463fd(_0x1924db, _0x22a0fd, _0x233814, _0x594065, _0x1175f8, _0x3fbe1b, _0x5979d2, _0x575358, _0x52fd66, _0x268623, _0x125372) {
      if (_0x1b6649.currentPixelUnpackBufferBinding) {
        _0x1b6649.compressedTexSubImage3D(_0x1924db, _0x22a0fd, _0x233814, _0x594065, _0x1175f8, _0x3fbe1b, _0x5979d2, _0x575358, _0x52fd66, _0x268623, _0x125372);
      } else {
        _0x1b6649.compressedTexSubImage3D(_0x1924db, _0x22a0fd, _0x233814, _0x594065, _0x1175f8, _0x3fbe1b, _0x5979d2, _0x575358, _0x52fd66, _0x5f38b4, _0x125372, _0x268623);
      }
    }
    function _0x903570(_0x1d1445, _0x6c3115, _0x1ee379, _0x42928a, _0x1e49dd) {
      _0x1b6649.copyBufferSubData(_0x1d1445, _0x6c3115, _0x1ee379, _0x42928a, _0x1e49dd);
    }
    function _0x4ddc9d(_0xb5b29a, _0x2233d7, _0x417dc7, _0x44b5ec, _0x573930, _0x1bda0e, _0x131664, _0x250d6d) {
      _0x1b6649.copyTexImage2D(_0xb5b29a, _0x2233d7, _0x417dc7, _0x44b5ec, _0x573930, _0x1bda0e, _0x131664, _0x250d6d);
    }
    function _0x23f851(_0xcd7ff6, _0x38808d, _0x518355, _0x4a195d, _0x1d7316, _0x44c43d, _0x35650f, _0x55e7f6) {
      _0x1b6649.copyTexSubImage2D(_0xcd7ff6, _0x38808d, _0x518355, _0x4a195d, _0x1d7316, _0x44c43d, _0x35650f, _0x55e7f6);
    }
    function _0xae50c6() {
      var _0x5d3ff2 = _0x5ae6d1.getNewId(_0x5ae6d1.programs);
      var _0x5eecea = _0x1b6649.createProgram();
      _0x5eecea.name = _0x5d3ff2;
      _0x5eecea.maxUniformLength = _0x5eecea.maxAttributeLength = _0x5eecea.maxUniformBlockNameLength = 0;
      _0x5eecea.uniformIdCounter = 1;
      _0x5ae6d1.programs[_0x5d3ff2] = _0x5eecea;
      return _0x5d3ff2;
    }
    function _0x46c1d1(_0x2ef70b) {
      var _0x5d6126 = _0x5ae6d1.getNewId(_0x5ae6d1.shaders);
      _0x5ae6d1.shaders[_0x5d6126] = _0x1b6649.createShader(_0x2ef70b);
      _0x5ae6d1.shaders[_0x5d6126].shaderType = _0x2ef70b & 1 ? "vs" : "fs";
      return _0x5d6126;
    }
    function _0x1bcffa(_0x411b54) {
      _0x1b6649.cullFace(_0x411b54);
    }
    function _0x467cb3(_0x2f41bd, _0x5124ae) {
      for (var _0x588a50 = 0; _0x588a50 < _0x2f41bd; _0x588a50++) {
        var _0xd55a1e = _0x588032[_0x5124ae + _0x588a50 * 4 >> 2];
        var _0xf803ff = _0x5ae6d1.buffers[_0xd55a1e];
        if (!_0xf803ff) {
          continue;
        }
        _0x1b6649.deleteBuffer(_0xf803ff);
        _0xf803ff.name = 0;
        _0x5ae6d1.buffers[_0xd55a1e] = null;
        if (_0xd55a1e == _0x1b6649.currentArrayBufferBinding) {
          _0x1b6649.currentArrayBufferBinding = 0;
        }
        if (_0xd55a1e == _0x1b6649.currentElementArrayBufferBinding) {
          _0x1b6649.currentElementArrayBufferBinding = 0;
        }
        if (_0xd55a1e == _0x1b6649.currentPixelPackBufferBinding) {
          _0x1b6649.currentPixelPackBufferBinding = 0;
        }
        if (_0xd55a1e == _0x1b6649.currentPixelUnpackBufferBinding) {
          _0x1b6649.currentPixelUnpackBufferBinding = 0;
        }
      }
    }
    function _0x463245(_0x45ce32, _0x521246) {
      for (var _0x29a51a = 0; _0x29a51a < _0x45ce32; ++_0x29a51a) {
        var _0x584e41 = _0x588032[_0x521246 + _0x29a51a * 4 >> 2];
        var _0x67a0b2 = _0x5ae6d1.framebuffers[_0x584e41];
        if (!_0x67a0b2) {
          continue;
        }
        _0x1b6649.deleteFramebuffer(_0x67a0b2);
        _0x67a0b2.name = 0;
        _0x5ae6d1.framebuffers[_0x584e41] = null;
      }
    }
    function _0x309086(_0x109a0e) {
      if (!_0x109a0e) {
        return;
      }
      var _0xe10884 = _0x5ae6d1.programs[_0x109a0e];
      if (!_0xe10884) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      _0x1b6649.deleteProgram(_0xe10884);
      _0xe10884.name = 0;
      _0x5ae6d1.programs[_0x109a0e] = null;
    }
    function _0x5524ea(_0x54bf8e, _0x4ab7a) {
      for (var _0x3fb87c = 0; _0x3fb87c < _0x54bf8e; _0x3fb87c++) {
        var _0x487bb8 = _0x588032[_0x4ab7a + _0x3fb87c * 4 >> 2];
        var _0xb67b87 = _0x5ae6d1.queries[_0x487bb8];
        if (!_0xb67b87) {
          continue;
        }
        _0x1b6649.deleteQuery(_0xb67b87);
        _0x5ae6d1.queries[_0x487bb8] = null;
      }
    }
    function _0x46f485(_0x4705c4, _0x6d762a) {
      for (var _0x57b0d9 = 0; _0x57b0d9 < _0x4705c4; _0x57b0d9++) {
        var _0x345533 = _0x588032[_0x6d762a + _0x57b0d9 * 4 >> 2];
        var _0x42e699 = _0x5ae6d1.renderbuffers[_0x345533];
        if (!_0x42e699) {
          continue;
        }
        _0x1b6649.deleteRenderbuffer(_0x42e699);
        _0x42e699.name = 0;
        _0x5ae6d1.renderbuffers[_0x345533] = null;
      }
    }
    function _0x591100(_0x8459ed, _0xf3f262) {
      for (var _0x250197 = 0; _0x250197 < _0x8459ed; _0x250197++) {
        var _0x4e28a2 = _0x588032[_0xf3f262 + _0x250197 * 4 >> 2];
        var _0x53fd17 = _0x5ae6d1.samplers[_0x4e28a2];
        if (!_0x53fd17) {
          continue;
        }
        _0x1b6649.deleteSampler(_0x53fd17);
        _0x53fd17.name = 0;
        _0x5ae6d1.samplers[_0x4e28a2] = null;
      }
    }
    function _0x439a0a(_0x1f7261) {
      if (!_0x1f7261) {
        return;
      }
      var _0x3c37d3 = _0x5ae6d1.shaders[_0x1f7261];
      if (!_0x3c37d3) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      _0x1b6649.deleteShader(_0x3c37d3);
      _0x5ae6d1.shaders[_0x1f7261] = null;
    }
    function _0x44df56(_0x4a3f0e) {
      if (!_0x4a3f0e) {
        return;
      }
      var _0x1c72e8 = _0x5ae6d1.syncs[_0x4a3f0e];
      if (!_0x1c72e8) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      _0x1b6649.deleteSync(_0x1c72e8);
      _0x1c72e8.name = 0;
      _0x5ae6d1.syncs[_0x4a3f0e] = null;
    }
    function _0x48fcbc(_0x33de7a, _0x44c1d9) {
      for (var _0x277da5 = 0; _0x277da5 < _0x33de7a; _0x277da5++) {
        var _0x2fa93e = _0x588032[_0x44c1d9 + _0x277da5 * 4 >> 2];
        var _0x3a8ccc = _0x5ae6d1.textures[_0x2fa93e];
        if (!_0x3a8ccc) {
          continue;
        }
        _0x1b6649.deleteTexture(_0x3a8ccc);
        _0x3a8ccc.name = 0;
        _0x5ae6d1.textures[_0x2fa93e] = null;
      }
    }
    function _0x3943fe(_0x529a0e, _0x32ad29) {
      for (var _0x3ba3d0 = 0; _0x3ba3d0 < _0x529a0e; _0x3ba3d0++) {
        var _0x240256 = _0x588032[_0x32ad29 + _0x3ba3d0 * 4 >> 2];
        _0x1b6649.deleteVertexArray(_0x5ae6d1.vaos[_0x240256]);
        _0x5ae6d1.vaos[_0x240256] = null;
      }
    }
    function _0x552f9e(_0x3ddbe4) {
      _0x1b6649.depthFunc(_0x3ddbe4);
    }
    function _0x2143d2(_0x395b37) {
      _0x1b6649.depthMask(!!_0x395b37);
    }
    function _0x47d58c(_0x3c0c5b, _0x3767c4) {
      _0x1b6649.detachShader(_0x5ae6d1.programs[_0x3c0c5b], _0x5ae6d1.shaders[_0x3767c4]);
    }
    function _0x2fbb0b(_0x6b8187) {
      _0x1b6649.disable(_0x6b8187);
    }
    function _0x3c3cc4(_0x57db48) {
      var _0x51da69 = _0x5ae6d1.currentContext.clientBuffers[_0x57db48];
      _0x51da69.enabled = false;
      _0x1b6649.disableVertexAttribArray(_0x57db48);
    }
    function _0x32d35b(_0x2ee074, _0x2e7a95, _0x3e9a93) {
      _0x5ae6d1.preDrawHandleClientVertexAttribBindings(_0x2e7a95 + _0x3e9a93);
      _0x1b6649.drawArrays(_0x2ee074, _0x2e7a95, _0x3e9a93);
      _0x5ae6d1.postDrawHandleClientVertexAttribBindings();
    }
    function _0x43a677(_0x1c5db2, _0x2b07c7, _0x46226d, _0x27144c) {
      _0x1b6649.drawArraysInstanced(_0x1c5db2, _0x2b07c7, _0x46226d, _0x27144c);
    }
    var _0x5601ac = [];
    function _0x1fec88(_0x2f8c67, _0x34317e) {
      var _0x25cd96 = _0x5601ac[_0x2f8c67];
      for (var _0xc03bf = 0; _0xc03bf < _0x2f8c67; _0xc03bf++) {
        _0x25cd96[_0xc03bf] = _0x588032[_0x34317e + _0xc03bf * 4 >> 2];
      }
      _0x1b6649.drawBuffers(_0x25cd96);
    }
    function _0x38506b(_0x1a9ef3, _0x617d95, _0x2bd5ff, _0x177fa0) {
      var _0x29ae8a;
      if (!_0x1b6649.currentElementArrayBufferBinding) {
        var _0x487e4d = _0x5ae6d1.calcBufLength(1, _0x2bd5ff, 0, _0x617d95);
        _0x29ae8a = _0x5ae6d1.getTempIndexBuffer(_0x487e4d);
        _0x1b6649.bindBuffer(34963, _0x29ae8a);
        _0x1b6649.bufferSubData(34963, 0, _0x5f38b4.subarray(_0x177fa0, _0x177fa0 + _0x487e4d));
        _0x177fa0 = 0;
      }
      _0x5ae6d1.preDrawHandleClientVertexAttribBindings(_0x617d95);
      _0x1b6649.drawElements(_0x1a9ef3, _0x617d95, _0x2bd5ff, _0x177fa0);
      _0x5ae6d1.postDrawHandleClientVertexAttribBindings(_0x617d95);
      if (!_0x1b6649.currentElementArrayBufferBinding) {
        _0x1b6649.bindBuffer(34963, null);
      }
    }
    function _0x5225a1(_0x1fa786, _0x43d8ee, _0x563d3a, _0x1d6b58, _0x558443) {
      _0x1b6649.drawElementsInstanced(_0x1fa786, _0x43d8ee, _0x563d3a, _0x1d6b58, _0x558443);
    }
    function _0x11d35f(_0x288d1b) {
      _0x1b6649.enable(_0x288d1b);
    }
    function _0x17a853(_0x400fe4) {
      var _0x177155 = _0x5ae6d1.currentContext.clientBuffers[_0x400fe4];
      _0x177155.enabled = true;
      _0x1b6649.enableVertexAttribArray(_0x400fe4);
    }
    function _0x432518(_0x5ca948) {
      _0x1b6649.endQuery(_0x5ca948);
    }
    function _0x4cbf22(_0x1801fb, _0x17e904) {
      var _0x4ca79b = _0x1b6649.fenceSync(_0x1801fb, _0x17e904);
      if (_0x4ca79b) {
        var _0x289fc5 = _0x5ae6d1.getNewId(_0x5ae6d1.syncs);
        _0x4ca79b.name = _0x289fc5;
        _0x5ae6d1.syncs[_0x289fc5] = _0x4ca79b;
        return _0x289fc5;
      } else {
        return 0;
      }
    }
    function _0x380426() {
      _0x1b6649.finish();
    }
    function _0x9bf8ac() {
      _0x1b6649.flush();
    }
    function _0x2b1ca8(_0x31dacc) {
      switch (_0x31dacc) {
        case 34962:
          _0x31dacc = 34964;
          break;
        case 34963:
          _0x31dacc = 34965;
          break;
        case 35051:
          _0x31dacc = 35053;
          break;
        case 35052:
          _0x31dacc = 35055;
          break;
        case 35982:
          _0x31dacc = 35983;
          break;
        case 36662:
          _0x31dacc = 36662;
          break;
        case 36663:
          _0x31dacc = 36663;
          break;
        case 35345:
          _0x31dacc = 35368;
          break;
      }
      var _0x832224 = _0x1b6649.getParameter(_0x31dacc);
      if (_0x832224) {
        return _0x832224.name | 0;
      } else {
        return 0;
      }
    }
    function _0x1121f5(_0x6ac89c) {
      switch (_0x6ac89c) {
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
    function _0x48648c(_0x5949c3, _0xd794b7, _0x209583) {
      if (!_0x1121f5(_0x5949c3)) {
        _0x5ae6d1.recordError(1280);
        _0x33d817("GL_INVALID_ENUM in glFlushMappedBufferRange");
        return;
      }
      var _0x207d6c = _0x5ae6d1.mappedBuffers[_0x2b1ca8(_0x5949c3)];
      if (!_0x207d6c) {
        _0x5ae6d1.recordError(1282);
        _0x33d817("buffer was never mapped in glFlushMappedBufferRange");
        return;
      }
      if (!(_0x207d6c.access & 16)) {
        _0x5ae6d1.recordError(1282);
        _0x33d817("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
        return;
      }
      if (_0xd794b7 < 0 || _0x209583 < 0 || _0xd794b7 + _0x209583 > _0x207d6c.length) {
        _0x5ae6d1.recordError(1281);
        _0x33d817("invalid range in glFlushMappedBufferRange");
        return;
      }
      _0x1b6649.bufferSubData(_0x5949c3, _0x207d6c.offset, _0x5f38b4.subarray(_0x207d6c.mem + _0xd794b7, _0x207d6c.mem + _0xd794b7 + _0x209583));
    }
    function _0x1f60a5(_0x496924, _0x2095e0, _0x456f1c, _0x58473c) {
      _0x1b6649.framebufferRenderbuffer(_0x496924, _0x2095e0, _0x456f1c, _0x5ae6d1.renderbuffers[_0x58473c]);
    }
    function _0x3d3d79(_0x570390, _0x4e7dcc, _0x19ecc1, _0xe990bd, _0x35d364) {
      _0x1b6649.framebufferTexture2D(_0x570390, _0x4e7dcc, _0x19ecc1, _0x5ae6d1.textures[_0xe990bd], _0x35d364);
    }
    function _0x1b77b4(_0xc24dc1, _0x10fdd8, _0x149aef, _0x213fd6, _0x97c7a3) {
      _0x1b6649.framebufferTextureLayer(_0xc24dc1, _0x10fdd8, _0x5ae6d1.textures[_0x149aef], _0x213fd6, _0x97c7a3);
    }
    function _0x569cb2(_0x5d58ee) {
      _0x1b6649.frontFace(_0x5d58ee);
    }
    function _0x53e57e(_0x13c7e0, _0xd1271d, _0x6cb10c, _0x2e65c9) {
      for (var _0x10759b = 0; _0x10759b < _0x13c7e0; _0x10759b++) {
        var _0x3feaca = _0x1b6649[_0x6cb10c]();
        var _0x2de010 = _0x3feaca && _0x5ae6d1.getNewId(_0x2e65c9);
        if (_0x3feaca) {
          _0x3feaca.name = _0x2de010;
          _0x2e65c9[_0x2de010] = _0x3feaca;
        } else {
          _0x5ae6d1.recordError(1282);
        }
        _0x588032[_0xd1271d + _0x10759b * 4 >> 2] = _0x2de010;
      }
    }
    function _0x348bc9(_0x13c816, _0x15f0f7) {
      _0x53e57e(_0x13c816, _0x15f0f7, "createBuffer", _0x5ae6d1.buffers);
    }
    function _0x236090(_0x24ea24, _0x421aa8) {
      _0x53e57e(_0x24ea24, _0x421aa8, "createFramebuffer", _0x5ae6d1.framebuffers);
    }
    function _0x289446(_0x58d8e7, _0x29456c) {
      _0x53e57e(_0x58d8e7, _0x29456c, "createQuery", _0x5ae6d1.queries);
    }
    function _0x352749(_0x23e9ca, _0x7bac81) {
      _0x53e57e(_0x23e9ca, _0x7bac81, "createRenderbuffer", _0x5ae6d1.renderbuffers);
    }
    function _0x157edd(_0x3c0632, _0x17d88a) {
      _0x53e57e(_0x3c0632, _0x17d88a, "createSampler", _0x5ae6d1.samplers);
    }
    function _0x4160ff(_0x35de31, _0x3d00f3) {
      _0x53e57e(_0x35de31, _0x3d00f3, "createTexture", _0x5ae6d1.textures);
    }
    function _0x9166d8(_0x11e3c3, _0x35bfe0) {
      _0x53e57e(_0x11e3c3, _0x35bfe0, "createVertexArray", _0x5ae6d1.vaos);
    }
    function _0x117458(_0x2ec780) {
      _0x1b6649.generateMipmap(_0x2ec780);
    }
    function _0x276b14(_0x32a558, _0x2a6857, _0x523c50, _0x5a08ec, _0xa31b50, _0x3983ca, _0x357451, _0x41d04f) {
      _0x2a6857 = _0x5ae6d1.programs[_0x2a6857];
      var _0x552121 = _0x1b6649[_0x32a558](_0x2a6857, _0x523c50);
      if (_0x552121) {
        var _0x53dc2b = _0x41d04f && _0x17e527(_0x552121.name, _0x41d04f, _0x5a08ec);
        if (_0xa31b50) {
          _0x588032[_0xa31b50 >> 2] = _0x53dc2b;
        }
        if (_0x3983ca) {
          _0x588032[_0x3983ca >> 2] = _0x552121.size;
        }
        if (_0x357451) {
          _0x588032[_0x357451 >> 2] = _0x552121.type;
        }
      }
    }
    function _0x225eb8(_0x3e9bb7, _0x46185f, _0x5e4a8e, _0x7ae75f, _0x497a90, _0x5d3611, _0x59fc5d) {
      _0x276b14("getActiveAttrib", _0x3e9bb7, _0x46185f, _0x5e4a8e, _0x7ae75f, _0x497a90, _0x5d3611, _0x59fc5d);
    }
    function _0x7806ca(_0x5a6738, _0x462cc4, _0x44d880, _0x1369b3, _0x63aa27, _0x483ab9, _0x4fe80e) {
      _0x276b14("getActiveUniform", _0x5a6738, _0x462cc4, _0x44d880, _0x1369b3, _0x63aa27, _0x483ab9, _0x4fe80e);
    }
    function _0x8f39d5(_0x53baf2, _0x2bc642, _0x27d1ff, _0x25fce9, _0x3d97e4) {
      _0x53baf2 = _0x5ae6d1.programs[_0x53baf2];
      var _0x8c25a6 = _0x1b6649.getActiveUniformBlockName(_0x53baf2, _0x2bc642);
      if (!_0x8c25a6) {
        return;
      }
      if (_0x3d97e4 && _0x27d1ff > 0) {
        var _0x2a843f = _0x17e527(_0x8c25a6, _0x3d97e4, _0x27d1ff);
        if (_0x25fce9) {
          _0x588032[_0x25fce9 >> 2] = _0x2a843f;
        }
      } else if (_0x25fce9) {
        _0x588032[_0x25fce9 >> 2] = 0;
      }
    }
    function _0x1b3e48(_0x5b49de, _0x4721e4, _0x4792cc, _0x151a26) {
      if (!_0x151a26) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      _0x5b49de = _0x5ae6d1.programs[_0x5b49de];
      if (_0x4792cc == 35393) {
        var _0x4db07a = _0x1b6649.getActiveUniformBlockName(_0x5b49de, _0x4721e4);
        _0x588032[_0x151a26 >> 2] = _0x4db07a.length + 1;
        return;
      }
      var _0x4758d6 = _0x1b6649.getActiveUniformBlockParameter(_0x5b49de, _0x4721e4, _0x4792cc);
      if (_0x4758d6 === null) {
        return;
      }
      if (_0x4792cc == 35395) {
        for (var _0x12e7ba = 0; _0x12e7ba < _0x4758d6.length; _0x12e7ba++) {
          _0x588032[_0x151a26 + _0x12e7ba * 4 >> 2] = _0x4758d6[_0x12e7ba];
        }
      } else {
        _0x588032[_0x151a26 >> 2] = _0x4758d6;
      }
    }
    function _0x369589(_0x2c88eb, _0x54bd39, _0x1699fd, _0x375f20, _0xb140ba) {
      if (!_0xb140ba) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      if (_0x54bd39 > 0 && _0x1699fd == 0) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      _0x2c88eb = _0x5ae6d1.programs[_0x2c88eb];
      var _0x13a42f = [];
      for (var _0xef442f = 0; _0xef442f < _0x54bd39; _0xef442f++) {
        _0x13a42f.push(_0x588032[_0x1699fd + _0xef442f * 4 >> 2]);
      }
      var _0xd5e447 = _0x1b6649.getActiveUniforms(_0x2c88eb, _0x13a42f, _0x375f20);
      if (!_0xd5e447) {
        return;
      }
      var _0x323756 = _0xd5e447.length;
      for (var _0xef442f = 0; _0xef442f < _0x323756; _0xef442f++) {
        _0x588032[_0xb140ba + _0xef442f * 4 >> 2] = _0xd5e447[_0xef442f];
      }
    }
    function _0x36a7d7(_0x309821, _0x33ecf3) {
      return _0x1b6649.getAttribLocation(_0x5ae6d1.programs[_0x309821], _0x5eaf00(_0x33ecf3));
    }
    function _0x2e049f(_0x31ec9a, _0x547fa4, _0x37d6ed, _0xbbda68) {
      if (!_0xbbda68) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      _0x1b6649.getBufferSubData(_0x31ec9a, _0x547fa4, _0x5f38b4, _0xbbda68, _0x37d6ed);
    }
    function _0x135155() {
      var _0x53b46a = _0x1b6649.getError() || _0x5ae6d1.lastError;
      _0x5ae6d1.lastError = 0;
      return _0x53b46a;
    }
    function _0x58a530(_0x3982cd, _0x142436, _0x348697, _0x261144) {
      var _0x486372 = _0x1b6649.getFramebufferAttachmentParameter(_0x3982cd, _0x142436, _0x348697);
      if (_0x486372 instanceof WebGLRenderbuffer || _0x486372 instanceof WebGLTexture) {
        _0x486372 = _0x486372.name | 0;
      }
      _0x588032[_0x261144 >> 2] = _0x486372;
    }
    function _0x488c3e(_0x39c066, _0x3e4498) {
      _0x5db304[_0x39c066 >> 2] = _0x3e4498;
      _0x5db304[_0x39c066 + 4 >> 2] = (_0x3e4498 - _0x5db304[_0x39c066 >> 2]) / 4294967296;
    }
    function _0x4741e2(_0x24742a, _0x3f5294, _0x4e7852, _0x4d3454) {
      if (!_0x4e7852) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      var _0x91f721 = _0x1b6649.getIndexedParameter(_0x24742a, _0x3f5294);
      var _0x5c78a3;
      switch (typeof _0x91f721) {
        case "boolean":
          _0x5c78a3 = _0x91f721 ? 1 : 0;
          break;
        case "number":
          _0x5c78a3 = _0x91f721;
          break;
        case "object":
          if (_0x91f721 === null) {
            switch (_0x24742a) {
              case 35983:
              case 35368:
                _0x5c78a3 = 0;
                break;
              default:
                {
                  _0x5ae6d1.recordError(1280);
                  return;
                }
            }
          } else if (_0x91f721 instanceof WebGLBuffer) {
            _0x5c78a3 = _0x91f721.name | 0;
          } else {
            _0x5ae6d1.recordError(1280);
            return;
          }
          break;
        default:
          _0x5ae6d1.recordError(1280);
          return;
      }
      switch (_0x4d3454) {
        case 1:
          _0x488c3e(_0x4e7852, _0x5c78a3);
          break;
        case 0:
          _0x588032[_0x4e7852 >> 2] = _0x5c78a3;
          break;
        case 2:
          _0x538c3e[_0x4e7852 >> 2] = _0x5c78a3;
          break;
        case 4:
          _0x3f8e3d[_0x4e7852 >> 0] = _0x5c78a3 ? 1 : 0;
          break;
        default:
          throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x4d3454;
      }
    }
    function _0x2af801(_0x309047, _0x27f88, _0x2243f0) {
      _0x4741e2(_0x309047, _0x27f88, _0x2243f0, 0);
    }
    function _0x566c1f(_0x3044f4, _0x273985, _0x4e1735) {
      if (!_0x273985) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      var _0x3657ef = undefined;
      switch (_0x3044f4) {
        case 36346:
          _0x3657ef = 1;
          break;
        case 36344:
          if (_0x4e1735 != 0 && _0x4e1735 != 1) {
            _0x5ae6d1.recordError(1280);
          }
          return;
        case 34814:
        case 36345:
          _0x3657ef = 0;
          break;
        case 34466:
          var _0x5dbd4f = _0x1b6649.getParameter(34467);
          _0x3657ef = _0x5dbd4f ? _0x5dbd4f.length : 0;
          break;
        case 33390:
          _0x3657ef = 1048576;
          break;
        case 33309:
          if (_0x5ae6d1.currentContext.version < 2) {
            _0x5ae6d1.recordError(1282);
            return;
          }
          var _0x3d9d35 = _0x1b6649.getSupportedExtensions() || [];
          _0x3657ef = _0x3d9d35.length * 2;
          break;
        case 33307:
        case 33308:
          if (_0x5ae6d1.currentContext.version < 2) {
            _0x5ae6d1.recordError(1280);
            return;
          }
          _0x3657ef = _0x3044f4 == 33307 ? 3 : 0;
          break;
      }
      if (_0x3657ef === undefined) {
        var _0x303f44 = _0x1b6649.getParameter(_0x3044f4);
        switch (typeof _0x303f44) {
          case "number":
            _0x3657ef = _0x303f44;
            break;
          case "boolean":
            _0x3657ef = _0x303f44 ? 1 : 0;
            break;
          case "string":
            _0x5ae6d1.recordError(1280);
            return;
          case "object":
            if (_0x303f44 === null) {
              switch (_0x3044f4) {
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
                    _0x3657ef = 0;
                    break;
                  }
                default:
                  {
                    _0x5ae6d1.recordError(1280);
                    return;
                  }
              }
            } else if (_0x303f44 instanceof Float32Array || _0x303f44 instanceof Uint32Array || _0x303f44 instanceof Int32Array || _0x303f44 instanceof Array) {
              for (var _0x4c72d3 = 0; _0x4c72d3 < _0x303f44.length; ++_0x4c72d3) {
                switch (_0x4e1735) {
                  case 0:
                    _0x588032[_0x273985 + _0x4c72d3 * 4 >> 2] = _0x303f44[_0x4c72d3];
                    break;
                  case 2:
                    _0x538c3e[_0x273985 + _0x4c72d3 * 4 >> 2] = _0x303f44[_0x4c72d3];
                    break;
                  case 4:
                    _0x3f8e3d[_0x273985 + _0x4c72d3 >> 0] = _0x303f44[_0x4c72d3] ? 1 : 0;
                    break;
                }
              }
              return;
            } else {
              try {
                _0x3657ef = _0x303f44.name | 0;
              } catch (_0x1008e0) {
                _0x5ae6d1.recordError(1280);
                _0x33d817("GL_INVALID_ENUM in glGet" + _0x4e1735 + "v: Unknown object returned from WebGL getParameter(" + _0x3044f4 + ")! (error: " + _0x1008e0 + ")");
                return;
              }
            }
            break;
          default:
            _0x5ae6d1.recordError(1280);
            _0x33d817("GL_INVALID_ENUM in glGet" + _0x4e1735 + "v: Native code calling glGet" + _0x4e1735 + "v(" + _0x3044f4 + ") and it returns " + _0x303f44 + " of type " + typeof _0x303f44 + "!");
            return;
        }
      }
      switch (_0x4e1735) {
        case 1:
          _0x488c3e(_0x273985, _0x3657ef);
          break;
        case 0:
          _0x588032[_0x273985 >> 2] = _0x3657ef;
          break;
        case 2:
          _0x538c3e[_0x273985 >> 2] = _0x3657ef;
          break;
        case 4:
          _0x3f8e3d[_0x273985 >> 0] = _0x3657ef ? 1 : 0;
          break;
      }
    }
    function _0x3e9dde(_0x37a0fc, _0xacb7d) {
      _0x566c1f(_0x37a0fc, _0xacb7d, 0);
    }
    function _0x53ae97(_0x393e55, _0x5bdf4b, _0x3ec486, _0x442f8e, _0x26f9ab) {
      if (_0x442f8e < 0) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      if (!_0x26f9ab) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      var _0x55bb43 = _0x1b6649.getInternalformatParameter(_0x393e55, _0x5bdf4b, _0x3ec486);
      if (_0x55bb43 === null) {
        return;
      }
      for (var _0xb8393 = 0; _0xb8393 < _0x55bb43.length && _0xb8393 < _0x442f8e; ++_0xb8393) {
        _0x588032[_0x26f9ab + _0xb8393 * 4 >> 2] = _0x55bb43[_0xb8393];
      }
    }
    function _0x30d61d(_0x11f582, _0x23794f, _0x3d1293, _0xfd493b, _0x1a24cd) {
      _0x5ae6d1.recordError(1282);
    }
    function _0x311581(_0x377b75, _0x2ca09e, _0xfb34ec, _0x2e7c90) {
      var _0x5388bb = _0x1b6649.getProgramInfoLog(_0x5ae6d1.programs[_0x377b75]);
      if (_0x5388bb === null) {
        _0x5388bb = "(unknown error)";
      }
      var _0x5b77a7 = _0x2ca09e > 0 && _0x2e7c90 ? _0x17e527(_0x5388bb, _0x2e7c90, _0x2ca09e) : 0;
      if (_0xfb34ec) {
        _0x588032[_0xfb34ec >> 2] = _0x5b77a7;
      }
    }
    function _0x3f093c(_0x27a3f8, _0x3c85d0, _0x398cb4) {
      if (!_0x398cb4) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      if (_0x27a3f8 >= _0x5ae6d1.counter) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      _0x27a3f8 = _0x5ae6d1.programs[_0x27a3f8];
      if (_0x3c85d0 == 35716) {
        var _0x18a0bd = _0x1b6649.getProgramInfoLog(_0x27a3f8);
        if (_0x18a0bd === null) {
          _0x18a0bd = "(unknown error)";
        }
        _0x588032[_0x398cb4 >> 2] = _0x18a0bd.length + 1;
      } else if (_0x3c85d0 == 35719) {
        if (!_0x27a3f8.maxUniformLength) {
          for (var _0x48e287 = 0; _0x48e287 < _0x1b6649.getProgramParameter(_0x27a3f8, 35718); ++_0x48e287) {
            _0x27a3f8.maxUniformLength = Math.max(_0x27a3f8.maxUniformLength, _0x1b6649.getActiveUniform(_0x27a3f8, _0x48e287).name.length + 1);
          }
        }
        _0x588032[_0x398cb4 >> 2] = _0x27a3f8.maxUniformLength;
      } else if (_0x3c85d0 == 35722) {
        if (!_0x27a3f8.maxAttributeLength) {
          for (var _0x48e287 = 0; _0x48e287 < _0x1b6649.getProgramParameter(_0x27a3f8, 35721); ++_0x48e287) {
            _0x27a3f8.maxAttributeLength = Math.max(_0x27a3f8.maxAttributeLength, _0x1b6649.getActiveAttrib(_0x27a3f8, _0x48e287).name.length + 1);
          }
        }
        _0x588032[_0x398cb4 >> 2] = _0x27a3f8.maxAttributeLength;
      } else if (_0x3c85d0 == 35381) {
        if (!_0x27a3f8.maxUniformBlockNameLength) {
          for (var _0x48e287 = 0; _0x48e287 < _0x1b6649.getProgramParameter(_0x27a3f8, 35382); ++_0x48e287) {
            _0x27a3f8.maxUniformBlockNameLength = Math.max(_0x27a3f8.maxUniformBlockNameLength, _0x1b6649.getActiveUniformBlockName(_0x27a3f8, _0x48e287).length + 1);
          }
        }
        _0x588032[_0x398cb4 >> 2] = _0x27a3f8.maxUniformBlockNameLength;
      } else {
        _0x588032[_0x398cb4 >> 2] = _0x1b6649.getProgramParameter(_0x27a3f8, _0x3c85d0);
      }
    }
    function _0x58cd1b(_0x3c5154, _0x1af283, _0x188817) {
      if (!_0x188817) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      var _0x175075 = _0x5ae6d1.queries[_0x3c5154];
      var _0x2955e5 = _0x1b6649.getQueryParameter(_0x175075, _0x1af283);
      var _0x272190;
      if (typeof _0x2955e5 == "boolean") {
        _0x272190 = _0x2955e5 ? 1 : 0;
      } else {
        _0x272190 = _0x2955e5;
      }
      _0x588032[_0x188817 >> 2] = _0x272190;
    }
    function _0x2c3314(_0x207def, _0x3dfcc1, _0x474381) {
      if (!_0x474381) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      _0x588032[_0x474381 >> 2] = _0x1b6649.getQuery(_0x207def, _0x3dfcc1);
    }
    function _0x858538(_0x225eb2, _0x4bfd84, _0x11cce1) {
      if (!_0x11cce1) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      _0x588032[_0x11cce1 >> 2] = _0x1b6649.getRenderbufferParameter(_0x225eb2, _0x4bfd84);
    }
    function _0x3cd599(_0x14a082, _0x33689c, _0x325ae8, _0x1794cb) {
      var _0x4b7097 = _0x1b6649.getShaderInfoLog(_0x5ae6d1.shaders[_0x14a082]);
      if (_0x4b7097 === null) {
        _0x4b7097 = "(unknown error)";
      }
      var _0x7075b7 = _0x33689c > 0 && _0x1794cb ? _0x17e527(_0x4b7097, _0x1794cb, _0x33689c) : 0;
      if (_0x325ae8) {
        _0x588032[_0x325ae8 >> 2] = _0x7075b7;
      }
    }
    function _0x28dd63(_0x7a006a, _0x105e87, _0x176398, _0x401ed2) {
      var _0x3bbca3 = _0x1b6649.getShaderPrecisionFormat(_0x7a006a, _0x105e87);
      _0x588032[_0x176398 >> 2] = _0x3bbca3.rangeMin;
      _0x588032[_0x176398 + 4 >> 2] = _0x3bbca3.rangeMax;
      _0x588032[_0x401ed2 >> 2] = _0x3bbca3.precision;
    }
    function _0x372825(_0x377ad2, _0x166a02, _0x3bf4a9, _0x157871) {
      var _0x2d8e45 = _0x1b6649.getShaderSource(_0x5ae6d1.shaders[_0x377ad2]);
      if (!_0x2d8e45) {
        return;
      }
      var _0x30dce0 = _0x166a02 > 0 && _0x157871 ? _0x17e527(_0x2d8e45, _0x157871, _0x166a02) : 0;
      if (_0x3bf4a9) {
        _0x588032[_0x3bf4a9 >> 2] = _0x30dce0;
      }
    }
    function _0x2af4fc(_0x373c5b, _0x37c0ba, _0x1d9f1c) {
      if (!_0x1d9f1c) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      if (_0x37c0ba == 35716) {
        var _0xe0718e = _0x1b6649.getShaderInfoLog(_0x5ae6d1.shaders[_0x373c5b]);
        if (_0xe0718e === null) {
          _0xe0718e = "(unknown error)";
        }
        var _0x1456b4 = _0xe0718e ? _0xe0718e.length + 1 : 0;
        _0x588032[_0x1d9f1c >> 2] = _0x1456b4;
      } else if (_0x37c0ba == 35720) {
        var _0x359d0b = _0x1b6649.getShaderSource(_0x5ae6d1.shaders[_0x373c5b]);
        var _0x1428eb = _0x359d0b ? _0x359d0b.length + 1 : 0;
        _0x588032[_0x1d9f1c >> 2] = _0x1428eb;
      } else {
        _0x588032[_0x1d9f1c >> 2] = _0x1b6649.getShaderParameter(_0x5ae6d1.shaders[_0x373c5b], _0x37c0ba);
      }
    }
    function _0x4d62d0(_0x275cc6) {
      var _0x177c74 = _0x5ae6d1.stringCache[_0x275cc6];
      if (!_0x177c74) {
        switch (_0x275cc6) {
          case 7939:
            var _0x104920 = _0x1b6649.getSupportedExtensions() || [];
            _0x104920 = _0x104920.concat(_0x104920.map(function (_0x5f3d72) {
              return "GL_" + _0x5f3d72;
            }));
            _0x177c74 = _0x3a50c3(_0x104920.join(" "));
            break;
          case 7936:
          case 7937:
          case 37445:
          case 37446:
            var _0x499630 = _0x1b6649.getParameter(_0x275cc6);
            if (!_0x499630) {
              _0x5ae6d1.recordError(1280);
            }
            _0x177c74 = _0x499630 && _0x3a50c3(_0x499630);
            break;
          case 7938:
            var _0x5ebcf3 = _0x1b6649.getParameter(7938);
            if (_0x5ae6d1.currentContext.version >= 2) {
              _0x5ebcf3 = "OpenGL ES 3.0 (" + _0x5ebcf3 + ")";
            } else {
              _0x5ebcf3 = "OpenGL ES 2.0 (" + _0x5ebcf3 + ")";
            }
            _0x177c74 = _0x3a50c3(_0x5ebcf3);
            break;
          case 35724:
            var _0x53b292 = _0x1b6649.getParameter(35724);
            var _0x4cdb88 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
            var _0x461f05 = _0x53b292.match(_0x4cdb88);
            if (_0x461f05 !== null) {
              if (_0x461f05[1].length == 3) {
                _0x461f05[1] = _0x461f05[1] + "0";
              }
              _0x53b292 = "OpenGL ES GLSL ES " + _0x461f05[1] + " (" + _0x53b292 + ")";
            }
            _0x177c74 = _0x3a50c3(_0x53b292);
            break;
          default:
            _0x5ae6d1.recordError(1280);
        }
        _0x5ae6d1.stringCache[_0x275cc6] = _0x177c74;
      }
      return _0x177c74;
    }
    function _0x3dee3b(_0xf18c10, _0x178963) {
      if (_0x5ae6d1.currentContext.version < 2) {
        _0x5ae6d1.recordError(1282);
        return 0;
      }
      var _0x533575 = _0x5ae6d1.stringiCache[_0xf18c10];
      if (_0x533575) {
        if (_0x178963 < 0 || _0x178963 >= _0x533575.length) {
          _0x5ae6d1.recordError(1281);
          return 0;
        }
        return _0x533575[_0x178963];
      }
      switch (_0xf18c10) {
        case 7939:
          var _0x3fd6e9 = _0x1b6649.getSupportedExtensions() || [];
          _0x3fd6e9 = _0x3fd6e9.concat(_0x3fd6e9.map(function (_0x28867a) {
            return "GL_" + _0x28867a;
          }));
          _0x3fd6e9 = _0x3fd6e9.map(function (_0x29d932) {
            return _0x3a50c3(_0x29d932);
          });
          _0x533575 = _0x5ae6d1.stringiCache[_0xf18c10] = _0x3fd6e9;
          if (_0x178963 < 0 || _0x178963 >= _0x533575.length) {
            _0x5ae6d1.recordError(1281);
            return 0;
          }
          return _0x533575[_0x178963];
        default:
          _0x5ae6d1.recordError(1280);
          return 0;
      }
    }
    function _0x3e04b9(_0x28aa79, _0x129a01, _0xbdc263) {
      if (!_0xbdc263) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      _0x588032[_0xbdc263 >> 2] = _0x1b6649.getTexParameter(_0x28aa79, _0x129a01);
    }
    function _0x47f6fd(_0x2678d5, _0x4172c3) {
      return _0x1b6649.getUniformBlockIndex(_0x5ae6d1.programs[_0x2678d5], _0x5eaf00(_0x4172c3));
    }
    function _0x151b06(_0x5abef8, _0x1e3771, _0x3a69c7, _0x1e54dd) {
      if (!_0x1e54dd) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      if (_0x1e3771 > 0 && (_0x3a69c7 == 0 || _0x1e54dd == 0)) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      _0x5abef8 = _0x5ae6d1.programs[_0x5abef8];
      var _0x1c4b2f = [];
      for (var _0x431124 = 0; _0x431124 < _0x1e3771; _0x431124++) {
        _0x1c4b2f.push(_0x5eaf00(_0x588032[_0x3a69c7 + _0x431124 * 4 >> 2]));
      }
      var _0x307b74 = _0x1b6649.getUniformIndices(_0x5abef8, _0x1c4b2f);
      if (!_0x307b74) {
        return;
      }
      var _0x56398c = _0x307b74.length;
      for (var _0x431124 = 0; _0x431124 < _0x56398c; _0x431124++) {
        _0x588032[_0x1e54dd + _0x431124 * 4 >> 2] = _0x307b74[_0x431124];
      }
    }
    function _0x4e4e78(_0xf7fe04) {
      return _0xf7fe04.slice(-1) == "]" && _0xf7fe04.lastIndexOf("[");
    }
    function _0x5b0500(_0x4d174e) {
      var _0x3ab356 = _0x4d174e.uniformLocsById;
      var _0x137239 = _0x4d174e.uniformSizeAndIdsByName;
      var _0xf6d8d7;
      var _0x2f7ea5;
      if (!_0x3ab356) {
        _0x4d174e.uniformLocsById = _0x3ab356 = {};
        _0x4d174e.uniformArrayNamesById = {};
        for (_0xf6d8d7 = 0; _0xf6d8d7 < _0x1b6649.getProgramParameter(_0x4d174e, 35718); ++_0xf6d8d7) {
          var _0x1ca2cb = _0x1b6649.getActiveUniform(_0x4d174e, _0xf6d8d7);
          var _0x11ce6b = _0x1ca2cb.name;
          var _0x52e1cf = _0x1ca2cb.size;
          var _0x3f5bb7 = _0x4e4e78(_0x11ce6b);
          var _0x374217 = _0x3f5bb7 > 0 ? _0x11ce6b.slice(0, _0x3f5bb7) : _0x11ce6b;
          var _0x5e9f71 = _0x137239[_0x374217] ? _0x137239[_0x374217][1] : _0x4d174e.uniformIdCounter;
          _0x4d174e.uniformIdCounter = Math.max(_0x5e9f71 + _0x52e1cf, _0x4d174e.uniformIdCounter);
          _0x137239[_0x374217] = [_0x52e1cf, _0x5e9f71];
          for (_0x2f7ea5 = 0; _0x2f7ea5 < _0x52e1cf; ++_0x2f7ea5) {
            _0x3ab356[_0x5e9f71] = _0x2f7ea5;
            _0x4d174e.uniformArrayNamesById[_0x5e9f71++] = _0x374217;
          }
        }
      }
    }
    function _0x36f6ba(_0x19f5b2, _0x1635f3) {
      _0x1635f3 = _0x5eaf00(_0x1635f3);
      if (_0x19f5b2 = _0x5ae6d1.programs[_0x19f5b2]) {
        _0x5b0500(_0x19f5b2);
        var _0x358d3c = _0x19f5b2.uniformLocsById;
        var _0x37d7a1 = 0;
        var _0x2c9ef8 = _0x1635f3;
        var _0x36d581 = _0x4e4e78(_0x1635f3);
        if (_0x36d581 > 0) {
          _0x37d7a1 = _0x14c9e0(_0x1635f3.slice(_0x36d581 + 1)) >>> 0;
          _0x2c9ef8 = _0x1635f3.slice(0, _0x36d581);
        }
        var _0x1f4910 = _0x19f5b2.uniformSizeAndIdsByName[_0x2c9ef8];
        if (_0x1f4910 && _0x37d7a1 < _0x1f4910[0]) {
          _0x37d7a1 += _0x1f4910[1];
          if (_0x358d3c[_0x37d7a1] = _0x358d3c[_0x37d7a1] || _0x1b6649.getUniformLocation(_0x19f5b2, _0x1635f3)) {
            return _0x37d7a1;
          }
        }
      } else {
        _0x5ae6d1.recordError(1281);
      }
      return -1;
    }
    function _0x2c0cf6(_0x2d0ba0) {
      var _0x228e86 = _0x1b6649.currentProgram;
      if (_0x228e86) {
        var _0x1e0a51 = _0x228e86.uniformLocsById[_0x2d0ba0];
        if (typeof _0x1e0a51 == "number") {
          _0x228e86.uniformLocsById[_0x2d0ba0] = _0x1e0a51 = _0x1b6649.getUniformLocation(_0x228e86, _0x228e86.uniformArrayNamesById[_0x2d0ba0] + (_0x1e0a51 > 0 ? "[" + _0x1e0a51 + "]" : ""));
        }
        return _0x1e0a51;
      } else {
        _0x5ae6d1.recordError(1282);
      }
    }
    function _0x4c3de1(_0x48348f, _0x21d171, _0x373f9b, _0x3fa20c) {
      if (!_0x373f9b) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      _0x48348f = _0x5ae6d1.programs[_0x48348f];
      _0x5b0500(_0x48348f);
      var _0x563c1d = _0x1b6649.getUniform(_0x48348f, _0x2c0cf6(_0x21d171));
      if (typeof _0x563c1d == "number" || typeof _0x563c1d == "boolean") {
        switch (_0x3fa20c) {
          case 0:
            _0x588032[_0x373f9b >> 2] = _0x563c1d;
            break;
          case 2:
            _0x538c3e[_0x373f9b >> 2] = _0x563c1d;
            break;
        }
      } else {
        for (var _0x2df746 = 0; _0x2df746 < _0x563c1d.length; _0x2df746++) {
          switch (_0x3fa20c) {
            case 0:
              _0x588032[_0x373f9b + _0x2df746 * 4 >> 2] = _0x563c1d[_0x2df746];
              break;
            case 2:
              _0x538c3e[_0x373f9b + _0x2df746 * 4 >> 2] = _0x563c1d[_0x2df746];
              break;
          }
        }
      }
    }
    function _0x51e322(_0x7f5b87, _0x15a0bc, _0x3c186c) {
      _0x4c3de1(_0x7f5b87, _0x15a0bc, _0x3c186c, 0);
    }
    function _0x3cd840(_0x4c1b8c, _0x50494b, _0x1c7813, _0x1d27b3) {
      if (!_0x1c7813) {
        _0x5ae6d1.recordError(1281);
        return;
      }
      if (_0x5ae6d1.currentContext.clientBuffers[_0x4c1b8c].enabled) {
        _0x33d817("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
      }
      var _0xc25011 = _0x1b6649.getVertexAttrib(_0x4c1b8c, _0x50494b);
      if (_0x50494b == 34975) {
        _0x588032[_0x1c7813 >> 2] = _0xc25011 && _0xc25011.name;
      } else if (typeof _0xc25011 == "number" || typeof _0xc25011 == "boolean") {
        switch (_0x1d27b3) {
          case 0:
            _0x588032[_0x1c7813 >> 2] = _0xc25011;
            break;
          case 2:
            _0x538c3e[_0x1c7813 >> 2] = _0xc25011;
            break;
          case 5:
            _0x588032[_0x1c7813 >> 2] = Math.fround(_0xc25011);
            break;
        }
      } else {
        for (var _0x2dfe09 = 0; _0x2dfe09 < _0xc25011.length; _0x2dfe09++) {
          switch (_0x1d27b3) {
            case 0:
              _0x588032[_0x1c7813 + _0x2dfe09 * 4 >> 2] = _0xc25011[_0x2dfe09];
              break;
            case 2:
              _0x538c3e[_0x1c7813 + _0x2dfe09 * 4 >> 2] = _0xc25011[_0x2dfe09];
              break;
            case 5:
              _0x588032[_0x1c7813 + _0x2dfe09 * 4 >> 2] = Math.fround(_0xc25011[_0x2dfe09]);
              break;
          }
        }
      }
    }
    function _0x5dafe4(_0x1f0836, _0x59dc18, _0x867520) {
      _0x3cd840(_0x1f0836, _0x59dc18, _0x867520, 5);
    }
    function _0x57e596(_0x4c8ac4, _0x35c6e4, _0x5d6450) {
      var _0x2abad0 = _0x5601ac[_0x35c6e4];
      for (var _0x38e6f3 = 0; _0x38e6f3 < _0x35c6e4; _0x38e6f3++) {
        _0x2abad0[_0x38e6f3] = _0x588032[_0x5d6450 + _0x38e6f3 * 4 >> 2];
      }
      _0x1b6649.invalidateFramebuffer(_0x4c8ac4, _0x2abad0);
    }
    function _0x2ff463(_0x20b89a) {
      return _0x1b6649.isEnabled(_0x20b89a);
    }
    function _0x66309e(_0x451c02) {
      var _0x1cc956 = _0x5ae6d1.vaos[_0x451c02];
      if (!_0x1cc956) {
        return 0;
      }
      return _0x1b6649.isVertexArray(_0x1cc956);
    }
    function _0x3167a2(_0x35aff9) {
      _0x35aff9 = _0x5ae6d1.programs[_0x35aff9];
      _0x1b6649.linkProgram(_0x35aff9);
      _0x35aff9.uniformLocsById = 0;
      _0x35aff9.uniformSizeAndIdsByName = {};
      [_0x35aff9.vs, _0x35aff9.fs].forEach(function (_0xd5046c) {
        Object.keys(_0xd5046c.explicitUniformLocations).forEach(function (_0x2659df) {
          var _0x273d51 = _0xd5046c.explicitUniformLocations[_0x2659df];
          _0x35aff9.uniformSizeAndIdsByName[_0x2659df] = [1, _0x273d51];
          _0x35aff9.uniformIdCounter = Math.max(_0x35aff9.uniformIdCounter, _0x273d51 + 1);
        });
      });
      function _0x13c9f6(_0x29d0f1, _0x7ec284) {
        Object.keys(_0x7ec284).forEach(function (_0x12d832) {
          _0x29d0f1[_0x12d832] = _0x7ec284[_0x12d832];
        });
      }
      _0x35aff9.explicitUniformBindings = {};
      _0x35aff9.explicitSamplerBindings = {};
      [_0x35aff9.vs, _0x35aff9.fs].forEach(function (_0x470591) {
        _0x13c9f6(_0x35aff9.explicitUniformBindings, _0x470591.explicitUniformBindings);
        _0x13c9f6(_0x35aff9.explicitSamplerBindings, _0x470591.explicitSamplerBindings);
      });
      _0x35aff9.explicitProgramBindingsApplied = 0;
    }
    function _0x359ada(_0x1ecc8d, _0x1baae0, _0x188ca7, _0x4438d7) {
      if (_0x4438d7 != 26 && _0x4438d7 != 10) {
        _0x33d817("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
        return 0;
      }
      if (!_0x1121f5(_0x1ecc8d)) {
        _0x5ae6d1.recordError(1280);
        _0x33d817("GL_INVALID_ENUM in glMapBufferRange");
        return 0;
      }
      var _0x3f62dd = _0x14649f(_0x188ca7);
      if (!_0x3f62dd) {
        return 0;
      }
      _0x5ae6d1.mappedBuffers[_0x2b1ca8(_0x1ecc8d)] = {
        offset: _0x1baae0,
        length: _0x188ca7,
        mem: _0x3f62dd,
        access: _0x4438d7
      };
      return _0x3f62dd;
    }
    function _0x14a1f1(_0x31fe5c, _0x51e7a3) {
      if (_0x31fe5c == 3317) {
        _0x5ae6d1.unpackAlignment = _0x51e7a3;
      }
      _0x1b6649.pixelStorei(_0x31fe5c, _0x51e7a3);
    }
    function _0x2e3880(_0x40f6a7, _0x28e80a) {
      _0x1b6649.polygonOffset(_0x40f6a7, _0x28e80a);
    }
    function _0xf03fcb(_0x4c8289, _0x20ce4e, _0x1e0f2, _0xa4b117) {
      _0x5ae6d1.recordError(1280);
    }
    function _0x4dc69a(_0x5ed4e0, _0x3d74f4, _0x25331a) {
      _0x5ae6d1.recordError(1280);
    }
    function _0x52d524(_0x5d1a98) {
      _0x1b6649.readBuffer(_0x5d1a98);
    }
    function _0x4b2f9c(_0xd30b1, _0x249023, _0x3788d3, _0x21caeb) {
      function _0xba562b(_0x46c54c, _0x2ce6b1) {
        return _0x46c54c + _0x2ce6b1 - 1 & -_0x2ce6b1;
      }
      var _0x19c8e7 = _0xd30b1 * _0x3788d3;
      var _0x5ad132 = _0xba562b(_0x19c8e7, _0x21caeb);
      return _0x249023 * _0x5ad132;
    }
    function _0x1a01d5(_0x2151e1) {
      var _0x3bdbb8 = {
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
      return _0x3bdbb8[_0x2151e1 - 6402] || 1;
    }
    function _0x273874(_0x10724f) {
      _0x10724f -= 5120;
      if (_0x10724f == 0) {
        return _0x3f8e3d;
      }
      if (_0x10724f == 1) {
        return _0x5f38b4;
      }
      if (_0x10724f == 2) {
        return _0x2bc94b;
      }
      if (_0x10724f == 4) {
        return _0x588032;
      }
      if (_0x10724f == 6) {
        return _0x538c3e;
      }
      if (_0x10724f == 5 || _0x10724f == 28922 || _0x10724f == 28520 || _0x10724f == 30779 || _0x10724f == 30782) {
        return _0x5db304;
      }
      return _0x3a0c14;
    }
    function _0xc957e8(_0x182987) {
      return 31 - Math.clz32(_0x182987.BYTES_PER_ELEMENT);
    }
    function _0x42adfb(_0x1e8b44, _0x4ce16a, _0x5d5f99, _0x856d59, _0x1a1bff, _0x201caf) {
      var _0x4a7bd3 = _0x273874(_0x1e8b44);
      var _0x1211ba = _0xc957e8(_0x4a7bd3);
      var _0x3f38ed = 1 << _0x1211ba;
      var _0x2f4c09 = _0x1a01d5(_0x4ce16a) * _0x3f38ed;
      var _0x4ed72c = _0x4b2f9c(_0x5d5f99, _0x856d59, _0x2f4c09, _0x5ae6d1.unpackAlignment);
      return _0x4a7bd3.subarray(_0x1a1bff >> _0x1211ba, _0x1a1bff + _0x4ed72c >> _0x1211ba);
    }
    function _0x4a1f57(_0x2491f9, _0x11bd91, _0x465880, _0x7077fb, _0x2412dd, _0x368412, _0x18b5e4) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        if (_0x1b6649.currentPixelPackBufferBinding) {
          _0x1b6649.readPixels(_0x2491f9, _0x11bd91, _0x465880, _0x7077fb, _0x2412dd, _0x368412, _0x18b5e4);
        } else {
          var _0x55ced0 = _0x273874(_0x368412);
          _0x1b6649.readPixels(_0x2491f9, _0x11bd91, _0x465880, _0x7077fb, _0x2412dd, _0x368412, _0x55ced0, _0x18b5e4 >> _0xc957e8(_0x55ced0));
        }
        return;
      }
      var _0x8f8530 = _0x42adfb(_0x368412, _0x2412dd, _0x465880, _0x7077fb, _0x18b5e4, _0x2412dd);
      if (!_0x8f8530) {
        _0x5ae6d1.recordError(1280);
        return;
      }
      _0x1b6649.readPixels(_0x2491f9, _0x11bd91, _0x465880, _0x7077fb, _0x2412dd, _0x368412, _0x8f8530);
    }
    function _0x2ab998(_0x4561a3, _0x493c94, _0x4ff566, _0x1fe80f) {
      _0x1b6649.renderbufferStorage(_0x4561a3, _0x493c94, _0x4ff566, _0x1fe80f);
    }
    function _0x52b7ec(_0xf0593d, _0x555e7c, _0x51a74f, _0x30b23d, _0x3ff289) {
      _0x1b6649.renderbufferStorageMultisample(_0xf0593d, _0x555e7c, _0x51a74f, _0x30b23d, _0x3ff289);
    }
    function _0x6466a4(_0xdea660, _0x40658c, _0x264444) {
      _0x1b6649.samplerParameteri(_0x5ae6d1.samplers[_0xdea660], _0x40658c, _0x264444);
    }
    function _0x5e4e93(_0x39b14f, _0x5186a9, _0x260425, _0x1580a9) {
      _0x1b6649.scissor(_0x39b14f, _0x5186a9, _0x260425, _0x1580a9);
    }
    function _0x73a316(_0x1108c0, _0x32dd73, _0x3a3317 = "(", _0x3cc495 = ")") {
      var _0x4ca1d9 = 0;
      for (; _0x32dd73 < _0x1108c0.length; ++_0x32dd73) {
        if (_0x1108c0[_0x32dd73] == _0x3a3317) {
          ++_0x4ca1d9;
        }
        if (_0x1108c0[_0x32dd73] == _0x3cc495 && --_0x4ca1d9 == 0) {
          return _0x32dd73;
        }
      }
    }
    function _0x30d1c2(_0x2fd0f1, _0x14a77c = {}) {
      var _0x39d333 = 0;
      var _0x5a2b41 = _0x2fd0f1.length;
      var _0x39d58f = "";
      var _0x33bcf4 = [1];
      _0x14a77c.defined = _0x33084d => {
        if (_0x14a77c[_0x33084d[0]]) {
          return 1;
        } else {
          return 0;
        }
      };
      function _0x4c69d3(_0x5cb487, _0x589468) {
        return !(_0x5cb487.charCodeAt(_0x589468) > 32);
      }
      function _0x5b17c8(_0xa8359f, _0x1a17a8) {
        while (!_0x4c69d3(_0xa8359f, _0x1a17a8)) {
          ++_0x1a17a8;
        }
        return _0x1a17a8;
      }
      function _0xe8448e(_0xeb00b2, _0x3315a7) {
        var _0xfc46dc = _0xeb00b2.charCodeAt(_0x3315a7);
        if (_0xfc46dc > 32) {
          if (_0xfc46dc < 48) {
            return 1;
          }
          if (_0xfc46dc < 58) {
            return 2;
          }
          if (_0xfc46dc < 65) {
            return 1;
          }
          if (_0xfc46dc < 91 || _0xfc46dc == 95) {
            return 3;
          }
          if (_0xfc46dc < 97) {
            return 1;
          }
          if (_0xfc46dc < 123) {
            return 3;
          }
          return 1;
        }
        if (_0xfc46dc < 33) {
          return 0;
        } else {
          return 4;
        }
      }
      function _0x157c33(_0x429822, _0x208530) {
        var _0x3ed1dc = [];
        var _0x65ead4 = _0x429822.length;
        for (var _0x2d6e39 = 0; _0x2d6e39 <= _0x65ead4; ++_0x2d6e39) {
          var _0x1e5cdd = _0xe8448e(_0x429822, _0x2d6e39);
          if (_0x1e5cdd == 2 || _0x1e5cdd == 3) {
            for (var _0x12c536 = _0x2d6e39 + 1; _0x12c536 <= _0x65ead4; ++_0x12c536) {
              var _0x3d964e = _0xe8448e(_0x429822, _0x12c536);
              if (_0x3d964e != _0x1e5cdd && (_0x3d964e != 2 || _0x1e5cdd != 3)) {
                _0x3ed1dc.push(_0x429822.substring(_0x2d6e39, _0x12c536));
                _0x2d6e39 = _0x12c536 - 1;
                break;
              }
            }
          } else if (_0x1e5cdd == 1) {
            var _0x32b691 = _0x429822.substr(_0x2d6e39, 2);
            if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x32b691)) {
              _0x3ed1dc.push(_0x32b691);
              ++_0x2d6e39;
            } else {
              _0x3ed1dc.push(_0x429822[_0x2d6e39]);
            }
          }
        }
        return _0x3ed1dc;
      }
      function _0x4dbdd9(_0x452b26, _0x15991a, _0x4195d5 = _0x452b26.length) {
        var _0x29139f = _0x452b26.length;
        var _0xa5ea2b = "";
        for (var _0x4a7058 = _0x15991a; _0x4a7058 < _0x4195d5; ++_0x4a7058) {
          var _0x2079a7 = _0xe8448e(_0x452b26, _0x4a7058);
          if (_0x2079a7 == 3) {
            for (var _0x11a1d5 = _0x4a7058 + 1; _0x11a1d5 <= _0x4195d5; ++_0x11a1d5) {
              var _0x4e4e07 = _0xe8448e(_0x452b26, _0x11a1d5);
              if (_0x4e4e07 != 2 && _0x4e4e07 != 3) {
                var _0x34236f = _0x452b26.substring(_0x4a7058, _0x11a1d5);
                var _0x22fc66 = _0x14a77c[_0x34236f];
                if (_0x22fc66) {
                  var _0x438412 = _0x452b26.substring(_0x15991a, _0x4a7058);
                  if (_0x22fc66.length && _0x452b26[_0x11a1d5] == "(") {
                    var _0x5f200b = _0x73a316(_0x452b26, _0x11a1d5);
                    _0x438412 += _0x22fc66(_0x452b26.substring(_0x11a1d5 + 1, _0x5f200b).split(",")) + _0x452b26.substring(_0x5f200b + 1, _0x4195d5);
                  } else {
                    _0x438412 += _0x22fc66() + _0x452b26.substring(_0x11a1d5, _0x4195d5);
                  }
                  return _0x4dbdd9(_0x438412, 0);
                } else {
                  _0xa5ea2b += _0x34236f;
                  _0x4a7058 = _0x11a1d5 - 1;
                  break;
                }
              }
            }
          } else {
            _0xa5ea2b += _0x452b26[_0x4a7058];
          }
        }
        return _0xa5ea2b;
      }
      function _0x5258c9(_0x512e62) {
        while (_0x512e62.length > 1 || typeof _0x512e62[0] != "function") {
          _0x512e62 = function (_0x306530) {
            var _0x281320;
            var _0x19fdda;
            var _0x3c920c;
            var _0x5082f0 = -2;
            for (_0x19fdda = 0; _0x19fdda < _0x306530.length; ++_0x19fdda) {
              if ((_0x3c920c = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x306530[_0x19fdda])) > _0x5082f0) {
                _0x281320 = _0x19fdda;
                _0x5082f0 = _0x3c920c;
              }
            }
            if (_0x5082f0 == 13) {
              var _0x19fdda = _0x73a316(_0x306530, _0x281320);
              if (_0x19fdda) {
                _0x306530.splice(_0x281320, _0x19fdda + 1 - _0x281320, _0x5258c9(_0x306530.slice(_0x281320 + 1, _0x19fdda)));
                return _0x306530;
              }
            }
            if (_0x5082f0 == 4) {
              _0x281320 = _0x306530.lastIndexOf("!");
              var _0x2cb8da = _0x5258c9(_0x306530.slice(_0x281320 + 1, _0x281320 + 2));
              _0x306530.splice(_0x281320, 2, function () {
                return !_0x2cb8da();
              });
              return _0x306530;
            }
            if (_0x5082f0 >= 0) {
              var _0x40ef84 = _0x5258c9(_0x306530.slice(0, _0x281320));
              var _0x147a12 = _0x5258c9(_0x306530.slice(_0x281320 + 1));
              switch (_0x306530[_0x281320]) {
                case "&&":
                  return [function () {
                    return _0x40ef84() && _0x147a12();
                  }];
                case "||":
                  return [function () {
                    return _0x40ef84() || _0x147a12();
                  }];
                case "==":
                  return [function () {
                    return _0x40ef84() == _0x147a12();
                  }];
                case "!=":
                  return [function () {
                    return _0x40ef84() != _0x147a12();
                  }];
                case "<":
                  return [function () {
                    return _0x40ef84() < _0x147a12();
                  }];
                case "<=":
                  return [function () {
                    return _0x40ef84() <= _0x147a12();
                  }];
                case ">":
                  return [function () {
                    return _0x40ef84() > _0x147a12();
                  }];
                case ">=":
                  return [function () {
                    return _0x40ef84() >= _0x147a12();
                  }];
                case "+":
                  return [function () {
                    return _0x40ef84() + _0x147a12();
                  }];
                case "-":
                  return [function () {
                    return _0x40ef84() - _0x147a12();
                  }];
                case "*":
                  return [function () {
                    return _0x40ef84() * _0x147a12();
                  }];
                case "/":
                  return [function () {
                    return Math.floor(_0x40ef84() / _0x147a12());
                  }];
              }
            }
            var _0x3accc2 = _0x14c9e0(_0x306530[_0x281320]);
            return [function () {
              return _0x3accc2;
            }];
          }(_0x512e62);
        }
        return _0x512e62[0];
      }
      for (; _0x39d333 < _0x5a2b41; ++_0x39d333) {
        var _0x3dc4d8 = _0x39d333;
        _0x39d333 = _0x2fd0f1.indexOf("\n", _0x39d333);
        if (_0x39d333 < 0) {
          _0x39d333 = _0x5a2b41;
        }
        for (var _0x329107 = _0x3dc4d8; _0x329107 < _0x39d333 && _0x4c69d3(_0x2fd0f1, _0x329107); ++_0x329107);
        var _0x4e6646 = _0x33bcf4[_0x33bcf4.length - 1];
        if (_0x2fd0f1[_0x329107] != "#") {
          if (_0x4e6646) {
            _0x39d58f += _0x4dbdd9(_0x2fd0f1, _0x3dc4d8, _0x39d333) + "\n";
          }
          continue;
        }
        var _0x25b26d = _0x5b17c8(_0x2fd0f1, _0x329107);
        var _0x109fa9 = _0x2fd0f1.substring(_0x329107 + 1, _0x25b26d);
        var _0x532ef8 = _0x2fd0f1.substring(_0x25b26d, _0x39d333).trim();
        switch (_0x109fa9) {
          case "if":
            var _0x32d258 = _0x157c33(_0x4dbdd9(_0x532ef8, 0));
            var _0x2e26ca = _0x5258c9(_0x32d258);
            var _0x14e750 = _0x2e26ca();
            _0x33bcf4.push(!!_0x14e750 * _0x33bcf4[_0x33bcf4.length - 1]);
            break;
          case "ifdef":
            _0x33bcf4.push(!!_0x14a77c[_0x532ef8] * _0x33bcf4[_0x33bcf4.length - 1]);
            break;
          case "ifndef":
            _0x33bcf4.push(!_0x14a77c[_0x532ef8] * _0x33bcf4[_0x33bcf4.length - 1]);
            break;
          case "else":
            _0x33bcf4[_0x33bcf4.length - 1] = 1 - _0x33bcf4[_0x33bcf4.length - 1];
            break;
          case "endif":
            _0x33bcf4.pop();
            break;
          case "define":
            if (_0x4e6646) {
              var _0x16f453 = _0x532ef8.indexOf("(");
              var _0xcc7c08 = _0x5b17c8(_0x532ef8, 0);
              if (_0xcc7c08 < _0x16f453) {
                _0x16f453 = 0;
              }
              if (_0x16f453 > 0) {
                var _0x4e5761 = _0x532ef8.indexOf(")", _0x16f453);
                let _0x3af4ec = _0x532ef8.substring(_0x16f453 + 1, _0x4e5761).split(",").map(_0x490ebe => _0x490ebe.trim());
                let _0x3bc32a = _0x157c33(_0x532ef8.substring(_0x4e5761 + 1).trim());
                _0x14a77c[_0x532ef8.substring(0, _0x16f453)] = _0x1bb85f => {
                  var _0x394104 = "";
                  _0x3bc32a.forEach(_0x13b153 => {
                    var _0x2ab138 = _0x3af4ec.indexOf(_0x13b153);
                    _0x394104 += _0x2ab138 >= 0 ? _0x1bb85f[_0x2ab138] : _0x13b153;
                  });
                  return _0x394104;
                };
              } else {
                let _0x3ff2d9 = _0x4dbdd9(_0x532ef8.substring(_0xcc7c08 + 1).trim(), 0);
                _0x14a77c[_0x532ef8.substring(0, _0xcc7c08)] = () => _0x3ff2d9;
              }
            }
            break;
          case "undef":
            if (_0x4e6646) {
              delete _0x14a77c[_0x532ef8];
            }
            break;
          default:
            if (_0x109fa9 != "version" && _0x109fa9 != "pragma" && _0x109fa9 != "extension") {}
            _0x39d58f += _0x4dbdd9(_0x2fd0f1, _0x3dc4d8, _0x39d333) + "\n";
        }
      }
      return _0x39d58f;
    }
    function _0x36c396(_0x402cda) {
      var _0x3227bb = 0;
      var _0x3d3998 = "";
      var _0x466f77;
      var _0x40b200;
      var _0x37d912 = _0x402cda.length;
      for (; _0x3227bb < _0x37d912; ++_0x3227bb) {
        _0x466f77 = _0x402cda[_0x3227bb];
        if (_0x466f77 == "/") {
          _0x40b200 = _0x402cda[_0x3227bb + 1];
          if (_0x40b200 == "/") {
            while (_0x3227bb < _0x37d912 && _0x402cda[_0x3227bb + 1] != "\n") {
              ++_0x3227bb;
            }
          } else if (_0x40b200 == "*") {
            while (_0x3227bb < _0x37d912 && (_0x402cda[_0x3227bb - 1] != "*" || _0x402cda[_0x3227bb] != "/")) {
              ++_0x3227bb;
            }
          } else {
            _0x3d3998 += _0x466f77;
          }
        } else {
          _0x3d3998 += _0x466f77;
        }
      }
      return _0x3d3998;
    }
    function _0x12504e(_0x2771d2, _0x4514ea, _0x3dd677, _0x59c05c) {
      var _0x172e4e = _0x5ae6d1.getSource(_0x2771d2, _0x4514ea, _0x3dd677, _0x59c05c);
      _0x172e4e = _0x30d1c2(_0x36c396(_0x172e4e), {
        GL_FRAGMENT_PRECISION_HIGH: () => 1,
        GL_ES: () => 1,
        __VERSION__: () => _0x172e4e.includes("#version 300") ? 300 : 100
      });
      var _0x4f4ee6 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
      var _0xf97b5d = {};
      var _0x4c77db;
      while (_0x4c77db = _0x4f4ee6.exec(_0x172e4e)) {
        _0xf97b5d[_0x4c77db[5]] = _0x14c9e0(_0x4c77db[1]);
        if (!(_0xf97b5d[_0x4c77db[5]] >= 0) || !(_0xf97b5d[_0x4c77db[5]] < 1048576)) {
          _0x33d817("Specified an out of range layout(location=x) directive \"" + _0xf97b5d[_0x4c77db[5]] + "\"! (" + _0x4c77db[0] + ")");
          _0x5ae6d1.recordError(1281);
          return;
        }
      }
      _0x172e4e = _0x172e4e.replace(_0x4f4ee6, "$2");
      _0x5ae6d1.shaders[_0x2771d2].explicitUniformLocations = _0xf97b5d;
      var _0x2be20a = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
      var _0x2b0a16 = {};
      var _0x33a449 = {};
      var _0x1ef22c;
      while (_0x1ef22c = _0x2be20a.exec(_0x172e4e)) {
        var _0x1c8d89 = 1;
        for (var _0xd2a45e = _0x1ef22c.index; _0xd2a45e < _0x172e4e.length && _0x172e4e[_0xd2a45e] != ";"; ++_0xd2a45e) {
          if (_0x172e4e[_0xd2a45e] == "[") {
            _0x1c8d89 = _0x14c9e0(_0x172e4e.slice(_0xd2a45e + 1));
            break;
          }
          if (_0x172e4e[_0xd2a45e] == "{") {
            _0xd2a45e = _0x73a316(_0x172e4e, _0xd2a45e, "{", "}") - 1;
          }
        }
        var _0x97fd18 = _0x14c9e0(_0x1ef22c[1]);
        var _0x249033 = 34930;
        if (_0x1ef22c[3] && _0x1ef22c[2].indexOf("sampler") != -1) {
          _0x2b0a16[_0x1ef22c[3]] = [_0x97fd18, _0x1c8d89];
        } else {
          _0x249033 = 35374;
          _0x33a449[_0x1ef22c[2]] = [_0x97fd18, _0x1c8d89];
        }
        var _0x5dcbde = _0x1b6649.getParameter(_0x249033);
        if (!(_0x97fd18 >= 0) || !(_0x97fd18 + _0x1c8d89 <= _0x5dcbde)) {
          _0x33d817("Specified an out of range layout(binding=x) directive \"" + _0x97fd18 + "\"! (" + _0x1ef22c[0] + "). Valid range is [0, " + _0x5dcbde + "-1]");
          _0x5ae6d1.recordError(1281);
          return;
        }
      }
      _0x172e4e = _0x172e4e.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
      _0x172e4e = _0x172e4e.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
      _0x172e4e = _0x172e4e.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
      _0x5ae6d1.shaders[_0x2771d2].explicitSamplerBindings = _0x2b0a16;
      _0x5ae6d1.shaders[_0x2771d2].explicitUniformBindings = _0x33a449;
      _0x1b6649.shaderSource(_0x5ae6d1.shaders[_0x2771d2], _0x172e4e);
    }
    function _0x12b3a8(_0x4c5463, _0x17db8d, _0x50470b, _0x352cd1) {
      _0x1b6649.stencilFuncSeparate(_0x4c5463, _0x17db8d, _0x50470b, _0x352cd1);
    }
    function _0x1c62a7(_0xb7d4b0) {
      _0x1b6649.stencilMask(_0xb7d4b0);
    }
    function _0x29b1a2(_0x112006, _0x506f7a, _0x178ec7, _0x5596cc) {
      _0x1b6649.stencilOpSeparate(_0x112006, _0x506f7a, _0x178ec7, _0x5596cc);
    }
    function _0x12e311(_0x2dde4b, _0x1e5f5b, _0x352b55, _0x8f0f67, _0x46e315, _0x509a49, _0x1584db, _0x5c943e, _0x1c6fb9) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        if (_0x1b6649.currentPixelUnpackBufferBinding) {
          _0x1b6649.texImage2D(_0x2dde4b, _0x1e5f5b, _0x352b55, _0x8f0f67, _0x46e315, _0x509a49, _0x1584db, _0x5c943e, _0x1c6fb9);
        } else if (_0x1c6fb9) {
          var _0x2e1551 = _0x273874(_0x5c943e);
          _0x1b6649.texImage2D(_0x2dde4b, _0x1e5f5b, _0x352b55, _0x8f0f67, _0x46e315, _0x509a49, _0x1584db, _0x5c943e, _0x2e1551, _0x1c6fb9 >> _0xc957e8(_0x2e1551));
        } else {
          _0x1b6649.texImage2D(_0x2dde4b, _0x1e5f5b, _0x352b55, _0x8f0f67, _0x46e315, _0x509a49, _0x1584db, _0x5c943e, null);
        }
        return;
      }
      _0x1b6649.texImage2D(_0x2dde4b, _0x1e5f5b, _0x352b55, _0x8f0f67, _0x46e315, _0x509a49, _0x1584db, _0x5c943e, _0x1c6fb9 ? _0x42adfb(_0x5c943e, _0x1584db, _0x8f0f67, _0x46e315, _0x1c6fb9, _0x352b55) : null);
    }
    function _0x40aa8f(_0x5cd6ab, _0x2037d3, _0x23d8d1, _0x1dd9ae, _0x44b093, _0x251247, _0x3eceed, _0x5ca17c, _0x304d23, _0x4a5512) {
      if (_0x1b6649.currentPixelUnpackBufferBinding) {
        _0x1b6649.texImage3D(_0x5cd6ab, _0x2037d3, _0x23d8d1, _0x1dd9ae, _0x44b093, _0x251247, _0x3eceed, _0x5ca17c, _0x304d23, _0x4a5512);
      } else if (_0x4a5512) {
        var _0x2e2a73 = _0x273874(_0x304d23);
        _0x1b6649.texImage3D(_0x5cd6ab, _0x2037d3, _0x23d8d1, _0x1dd9ae, _0x44b093, _0x251247, _0x3eceed, _0x5ca17c, _0x304d23, _0x2e2a73, _0x4a5512 >> _0xc957e8(_0x2e2a73));
      } else {
        _0x1b6649.texImage3D(_0x5cd6ab, _0x2037d3, _0x23d8d1, _0x1dd9ae, _0x44b093, _0x251247, _0x3eceed, _0x5ca17c, _0x304d23, null);
      }
    }
    function _0x23736f(_0x455c1d, _0x430418, _0x1dee05) {
      _0x1b6649.texParameterf(_0x455c1d, _0x430418, _0x1dee05);
    }
    function _0x167686(_0x3946b6, _0x4f83cb, _0xa5c0da) {
      _0x1b6649.texParameteri(_0x3946b6, _0x4f83cb, _0xa5c0da);
    }
    function _0x5bbb37(_0x423e90, _0x283cf8, _0x134c2b) {
      var _0x59c188 = _0x588032[_0x134c2b >> 2];
      _0x1b6649.texParameteri(_0x423e90, _0x283cf8, _0x59c188);
    }
    function _0x108e1e(_0x366e67, _0x422a12, _0x2d1edd, _0x42d5ea, _0x1d23de) {
      _0x1b6649.texStorage2D(_0x366e67, _0x422a12, _0x2d1edd, _0x42d5ea, _0x1d23de);
    }
    function _0x5a6ffe(_0x5791f3, _0x39b91c, _0x456d1a, _0x49e4ad, _0x4d4fbb, _0x5c1bf1) {
      _0x1b6649.texStorage3D(_0x5791f3, _0x39b91c, _0x456d1a, _0x49e4ad, _0x4d4fbb, _0x5c1bf1);
    }
    function _0x356af8(_0x4dbfdd, _0xa33ad5, _0x49977c, _0x4db4a1, _0x64db3b, _0x256f36, _0x470738, _0x1cd513, _0x4106a8) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        if (_0x1b6649.currentPixelUnpackBufferBinding) {
          _0x1b6649.texSubImage2D(_0x4dbfdd, _0xa33ad5, _0x49977c, _0x4db4a1, _0x64db3b, _0x256f36, _0x470738, _0x1cd513, _0x4106a8);
        } else if (_0x4106a8) {
          var _0x462ba5 = _0x273874(_0x1cd513);
          _0x1b6649.texSubImage2D(_0x4dbfdd, _0xa33ad5, _0x49977c, _0x4db4a1, _0x64db3b, _0x256f36, _0x470738, _0x1cd513, _0x462ba5, _0x4106a8 >> _0xc957e8(_0x462ba5));
        } else {
          _0x1b6649.texSubImage2D(_0x4dbfdd, _0xa33ad5, _0x49977c, _0x4db4a1, _0x64db3b, _0x256f36, _0x470738, _0x1cd513, null);
        }
        return;
      }
      var _0x116712 = null;
      if (_0x4106a8) {
        _0x116712 = _0x42adfb(_0x1cd513, _0x470738, _0x64db3b, _0x256f36, _0x4106a8, 0);
      }
      _0x1b6649.texSubImage2D(_0x4dbfdd, _0xa33ad5, _0x49977c, _0x4db4a1, _0x64db3b, _0x256f36, _0x470738, _0x1cd513, _0x116712);
    }
    function _0x2c910b(_0x1ee0a5, _0x266946, _0x4ed022, _0x206f7, _0xda5aa2, _0x978d89, _0x45ec87, _0x50eb0b, _0x56fd6b, _0x40e239, _0x3cf805) {
      if (_0x1b6649.currentPixelUnpackBufferBinding) {
        _0x1b6649.texSubImage3D(_0x1ee0a5, _0x266946, _0x4ed022, _0x206f7, _0xda5aa2, _0x978d89, _0x45ec87, _0x50eb0b, _0x56fd6b, _0x40e239, _0x3cf805);
      } else if (_0x3cf805) {
        var _0x4736b4 = _0x273874(_0x40e239);
        _0x1b6649.texSubImage3D(_0x1ee0a5, _0x266946, _0x4ed022, _0x206f7, _0xda5aa2, _0x978d89, _0x45ec87, _0x50eb0b, _0x56fd6b, _0x40e239, _0x4736b4, _0x3cf805 >> _0xc957e8(_0x4736b4));
      } else {
        _0x1b6649.texSubImage3D(_0x1ee0a5, _0x266946, _0x4ed022, _0x206f7, _0xda5aa2, _0x978d89, _0x45ec87, _0x50eb0b, _0x56fd6b, _0x40e239, null);
      }
    }
    var _0x155d14 = [];
    function _0x5d85b9(_0x34aec1, _0x387f43, _0x2fb2a4) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        _0x1b6649.uniform1fv(_0x2c0cf6(_0x34aec1), _0x538c3e, _0x2fb2a4 >> 2, _0x387f43);
        return;
      }
      if (_0x387f43 <= 288) {
        var _0x3a14d3 = _0x155d14[_0x387f43 - 1];
        for (var _0x33e0a3 = 0; _0x33e0a3 < _0x387f43; ++_0x33e0a3) {
          _0x3a14d3[_0x33e0a3] = _0x538c3e[_0x2fb2a4 + _0x33e0a3 * 4 >> 2];
        }
      } else {
        var _0x3a14d3 = _0x538c3e.subarray(_0x2fb2a4 >> 2, _0x2fb2a4 + _0x387f43 * 4 >> 2);
      }
      _0x1b6649.uniform1fv(_0x2c0cf6(_0x34aec1), _0x3a14d3);
    }
    function _0x28994(_0x38330a, _0x5841c4) {
      _0x1b6649.uniform1i(_0x2c0cf6(_0x38330a), _0x5841c4);
    }
    var _0x109d57 = [];
    function _0x389051(_0x14aec4, _0xcc401e, _0x9242a4) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        _0x1b6649.uniform1iv(_0x2c0cf6(_0x14aec4), _0x588032, _0x9242a4 >> 2, _0xcc401e);
        return;
      }
      if (_0xcc401e <= 288) {
        var _0x2548c3 = _0x109d57[_0xcc401e - 1];
        for (var _0x4d49ca = 0; _0x4d49ca < _0xcc401e; ++_0x4d49ca) {
          _0x2548c3[_0x4d49ca] = _0x588032[_0x9242a4 + _0x4d49ca * 4 >> 2];
        }
      } else {
        var _0x2548c3 = _0x588032.subarray(_0x9242a4 >> 2, _0x9242a4 + _0xcc401e * 4 >> 2);
      }
      _0x1b6649.uniform1iv(_0x2c0cf6(_0x14aec4), _0x2548c3);
    }
    function _0x27b5aa(_0x377cf6, _0x2009fd, _0x43fb4d) {
      _0x1b6649.uniform1uiv(_0x2c0cf6(_0x377cf6), _0x5db304, _0x43fb4d >> 2, _0x2009fd);
    }
    function _0x456b7d(_0x196cb1, _0x4b853b, _0xe6a6c0) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        _0x1b6649.uniform2fv(_0x2c0cf6(_0x196cb1), _0x538c3e, _0xe6a6c0 >> 2, _0x4b853b * 2);
        return;
      }
      if (_0x4b853b <= 144) {
        var _0x501135 = _0x155d14[_0x4b853b * 2 - 1];
        for (var _0x276afa = 0; _0x276afa < _0x4b853b * 2; _0x276afa += 2) {
          _0x501135[_0x276afa] = _0x538c3e[_0xe6a6c0 + _0x276afa * 4 >> 2];
          _0x501135[_0x276afa + 1] = _0x538c3e[_0xe6a6c0 + (_0x276afa * 4 + 4) >> 2];
        }
      } else {
        var _0x501135 = _0x538c3e.subarray(_0xe6a6c0 >> 2, _0xe6a6c0 + _0x4b853b * 8 >> 2);
      }
      _0x1b6649.uniform2fv(_0x2c0cf6(_0x196cb1), _0x501135);
    }
    function _0x42e283(_0x29fbe0, _0x581651, _0x2b47bb) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        _0x1b6649.uniform2iv(_0x2c0cf6(_0x29fbe0), _0x588032, _0x2b47bb >> 2, _0x581651 * 2);
        return;
      }
      if (_0x581651 <= 144) {
        var _0x54dc79 = _0x109d57[_0x581651 * 2 - 1];
        for (var _0x20fbe6 = 0; _0x20fbe6 < _0x581651 * 2; _0x20fbe6 += 2) {
          _0x54dc79[_0x20fbe6] = _0x588032[_0x2b47bb + _0x20fbe6 * 4 >> 2];
          _0x54dc79[_0x20fbe6 + 1] = _0x588032[_0x2b47bb + (_0x20fbe6 * 4 + 4) >> 2];
        }
      } else {
        var _0x54dc79 = _0x588032.subarray(_0x2b47bb >> 2, _0x2b47bb + _0x581651 * 8 >> 2);
      }
      _0x1b6649.uniform2iv(_0x2c0cf6(_0x29fbe0), _0x54dc79);
    }
    function _0x2c2e0d(_0x2d6285, _0x33f900, _0x451c92) {
      _0x1b6649.uniform2uiv(_0x2c0cf6(_0x2d6285), _0x5db304, _0x451c92 >> 2, _0x33f900 * 2);
    }
    function _0x4f80da(_0x322feb, _0x512eb7, _0x49bfb4) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        _0x1b6649.uniform3fv(_0x2c0cf6(_0x322feb), _0x538c3e, _0x49bfb4 >> 2, _0x512eb7 * 3);
        return;
      }
      if (_0x512eb7 <= 96) {
        var _0xc65245 = _0x155d14[_0x512eb7 * 3 - 1];
        for (var _0x1cc38d = 0; _0x1cc38d < _0x512eb7 * 3; _0x1cc38d += 3) {
          _0xc65245[_0x1cc38d] = _0x538c3e[_0x49bfb4 + _0x1cc38d * 4 >> 2];
          _0xc65245[_0x1cc38d + 1] = _0x538c3e[_0x49bfb4 + (_0x1cc38d * 4 + 4) >> 2];
          _0xc65245[_0x1cc38d + 2] = _0x538c3e[_0x49bfb4 + (_0x1cc38d * 4 + 8) >> 2];
        }
      } else {
        var _0xc65245 = _0x538c3e.subarray(_0x49bfb4 >> 2, _0x49bfb4 + _0x512eb7 * 12 >> 2);
      }
      _0x1b6649.uniform3fv(_0x2c0cf6(_0x322feb), _0xc65245);
    }
    function _0x5422b3(_0x1994ed, _0x35d6ce, _0x41933c) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        _0x1b6649.uniform3iv(_0x2c0cf6(_0x1994ed), _0x588032, _0x41933c >> 2, _0x35d6ce * 3);
        return;
      }
      if (_0x35d6ce <= 96) {
        var _0x368502 = _0x109d57[_0x35d6ce * 3 - 1];
        for (var _0x2c4a3e = 0; _0x2c4a3e < _0x35d6ce * 3; _0x2c4a3e += 3) {
          _0x368502[_0x2c4a3e] = _0x588032[_0x41933c + _0x2c4a3e * 4 >> 2];
          _0x368502[_0x2c4a3e + 1] = _0x588032[_0x41933c + (_0x2c4a3e * 4 + 4) >> 2];
          _0x368502[_0x2c4a3e + 2] = _0x588032[_0x41933c + (_0x2c4a3e * 4 + 8) >> 2];
        }
      } else {
        var _0x368502 = _0x588032.subarray(_0x41933c >> 2, _0x41933c + _0x35d6ce * 12 >> 2);
      }
      _0x1b6649.uniform3iv(_0x2c0cf6(_0x1994ed), _0x368502);
    }
    function _0x1f7094(_0x1c1e4b, _0x248e07, _0x3003a5) {
      _0x1b6649.uniform3uiv(_0x2c0cf6(_0x1c1e4b), _0x5db304, _0x3003a5 >> 2, _0x248e07 * 3);
    }
    function _0x159dff(_0x5728b6, _0x33b631, _0x10396b) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        _0x1b6649.uniform4fv(_0x2c0cf6(_0x5728b6), _0x538c3e, _0x10396b >> 2, _0x33b631 * 4);
        return;
      }
      if (_0x33b631 <= 72) {
        var _0xc53a11 = _0x155d14[_0x33b631 * 4 - 1];
        var _0x258472 = _0x538c3e;
        _0x10396b >>= 2;
        for (var _0x51c562 = 0; _0x51c562 < _0x33b631 * 4; _0x51c562 += 4) {
          var _0x20c732 = _0x10396b + _0x51c562;
          _0xc53a11[_0x51c562] = _0x258472[_0x20c732];
          _0xc53a11[_0x51c562 + 1] = _0x258472[_0x20c732 + 1];
          _0xc53a11[_0x51c562 + 2] = _0x258472[_0x20c732 + 2];
          _0xc53a11[_0x51c562 + 3] = _0x258472[_0x20c732 + 3];
        }
      } else {
        var _0xc53a11 = _0x538c3e.subarray(_0x10396b >> 2, _0x10396b + _0x33b631 * 16 >> 2);
      }
      _0x1b6649.uniform4fv(_0x2c0cf6(_0x5728b6), _0xc53a11);
    }
    function _0x4e3f58(_0x3427e3, _0x3937e2, _0x55ff1a) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        _0x1b6649.uniform4iv(_0x2c0cf6(_0x3427e3), _0x588032, _0x55ff1a >> 2, _0x3937e2 * 4);
        return;
      }
      if (_0x3937e2 <= 72) {
        var _0x1caa13 = _0x109d57[_0x3937e2 * 4 - 1];
        for (var _0x2ec0ae = 0; _0x2ec0ae < _0x3937e2 * 4; _0x2ec0ae += 4) {
          _0x1caa13[_0x2ec0ae] = _0x588032[_0x55ff1a + _0x2ec0ae * 4 >> 2];
          _0x1caa13[_0x2ec0ae + 1] = _0x588032[_0x55ff1a + (_0x2ec0ae * 4 + 4) >> 2];
          _0x1caa13[_0x2ec0ae + 2] = _0x588032[_0x55ff1a + (_0x2ec0ae * 4 + 8) >> 2];
          _0x1caa13[_0x2ec0ae + 3] = _0x588032[_0x55ff1a + (_0x2ec0ae * 4 + 12) >> 2];
        }
      } else {
        var _0x1caa13 = _0x588032.subarray(_0x55ff1a >> 2, _0x55ff1a + _0x3937e2 * 16 >> 2);
      }
      _0x1b6649.uniform4iv(_0x2c0cf6(_0x3427e3), _0x1caa13);
    }
    function _0x3c22d8(_0x13cb14, _0xb8f3bf, _0x110723) {
      _0x1b6649.uniform4uiv(_0x2c0cf6(_0x13cb14), _0x5db304, _0x110723 >> 2, _0xb8f3bf * 4);
    }
    function _0x8d23a9(_0x478d02, _0x4dbb4b, _0xba71fa) {
      _0x478d02 = _0x5ae6d1.programs[_0x478d02];
      _0x1b6649.uniformBlockBinding(_0x478d02, _0x4dbb4b, _0xba71fa);
    }
    function _0x554c9d(_0x2b42e8, _0x2f25fb, _0x5a3ccd, _0x36bfe1) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        _0x1b6649.uniformMatrix3fv(_0x2c0cf6(_0x2b42e8), !!_0x5a3ccd, _0x538c3e, _0x36bfe1 >> 2, _0x2f25fb * 9);
        return;
      }
      if (_0x2f25fb <= 32) {
        var _0x113b66 = _0x155d14[_0x2f25fb * 9 - 1];
        for (var _0x5a425e = 0; _0x5a425e < _0x2f25fb * 9; _0x5a425e += 9) {
          _0x113b66[_0x5a425e] = _0x538c3e[_0x36bfe1 + _0x5a425e * 4 >> 2];
          _0x113b66[_0x5a425e + 1] = _0x538c3e[_0x36bfe1 + (_0x5a425e * 4 + 4) >> 2];
          _0x113b66[_0x5a425e + 2] = _0x538c3e[_0x36bfe1 + (_0x5a425e * 4 + 8) >> 2];
          _0x113b66[_0x5a425e + 3] = _0x538c3e[_0x36bfe1 + (_0x5a425e * 4 + 12) >> 2];
          _0x113b66[_0x5a425e + 4] = _0x538c3e[_0x36bfe1 + (_0x5a425e * 4 + 16) >> 2];
          _0x113b66[_0x5a425e + 5] = _0x538c3e[_0x36bfe1 + (_0x5a425e * 4 + 20) >> 2];
          _0x113b66[_0x5a425e + 6] = _0x538c3e[_0x36bfe1 + (_0x5a425e * 4 + 24) >> 2];
          _0x113b66[_0x5a425e + 7] = _0x538c3e[_0x36bfe1 + (_0x5a425e * 4 + 28) >> 2];
          _0x113b66[_0x5a425e + 8] = _0x538c3e[_0x36bfe1 + (_0x5a425e * 4 + 32) >> 2];
        }
      } else {
        var _0x113b66 = _0x538c3e.subarray(_0x36bfe1 >> 2, _0x36bfe1 + _0x2f25fb * 36 >> 2);
      }
      _0x1b6649.uniformMatrix3fv(_0x2c0cf6(_0x2b42e8), !!_0x5a3ccd, _0x113b66);
    }
    function _0x45389b(_0x14bb68, _0x2a73e9, _0x57e593, _0x4cd6b2) {
      if (_0x5ae6d1.currentContext.version >= 2) {
        _0x1b6649.uniformMatrix4fv(_0x2c0cf6(_0x14bb68), !!_0x57e593, _0x538c3e, _0x4cd6b2 >> 2, _0x2a73e9 * 16);
        return;
      }
      if (_0x2a73e9 <= 18) {
        var _0x540793 = _0x155d14[_0x2a73e9 * 16 - 1];
        var _0x29c9cd = _0x538c3e;
        _0x4cd6b2 >>= 2;
        for (var _0x3658ff = 0; _0x3658ff < _0x2a73e9 * 16; _0x3658ff += 16) {
          var _0x4a5f4c = _0x4cd6b2 + _0x3658ff;
          _0x540793[_0x3658ff] = _0x29c9cd[_0x4a5f4c];
          _0x540793[_0x3658ff + 1] = _0x29c9cd[_0x4a5f4c + 1];
          _0x540793[_0x3658ff + 2] = _0x29c9cd[_0x4a5f4c + 2];
          _0x540793[_0x3658ff + 3] = _0x29c9cd[_0x4a5f4c + 3];
          _0x540793[_0x3658ff + 4] = _0x29c9cd[_0x4a5f4c + 4];
          _0x540793[_0x3658ff + 5] = _0x29c9cd[_0x4a5f4c + 5];
          _0x540793[_0x3658ff + 6] = _0x29c9cd[_0x4a5f4c + 6];
          _0x540793[_0x3658ff + 7] = _0x29c9cd[_0x4a5f4c + 7];
          _0x540793[_0x3658ff + 8] = _0x29c9cd[_0x4a5f4c + 8];
          _0x540793[_0x3658ff + 9] = _0x29c9cd[_0x4a5f4c + 9];
          _0x540793[_0x3658ff + 10] = _0x29c9cd[_0x4a5f4c + 10];
          _0x540793[_0x3658ff + 11] = _0x29c9cd[_0x4a5f4c + 11];
          _0x540793[_0x3658ff + 12] = _0x29c9cd[_0x4a5f4c + 12];
          _0x540793[_0x3658ff + 13] = _0x29c9cd[_0x4a5f4c + 13];
          _0x540793[_0x3658ff + 14] = _0x29c9cd[_0x4a5f4c + 14];
          _0x540793[_0x3658ff + 15] = _0x29c9cd[_0x4a5f4c + 15];
        }
      } else {
        var _0x540793 = _0x538c3e.subarray(_0x4cd6b2 >> 2, _0x4cd6b2 + _0x2a73e9 * 64 >> 2);
      }
      _0x1b6649.uniformMatrix4fv(_0x2c0cf6(_0x14bb68), !!_0x57e593, _0x540793);
    }
    function _0x35527e(_0x10c381) {
      if (!_0x1121f5(_0x10c381)) {
        _0x5ae6d1.recordError(1280);
        _0x33d817("GL_INVALID_ENUM in glUnmapBuffer");
        return 0;
      }
      var _0x389116 = _0x2b1ca8(_0x10c381);
      var _0x3013f1 = _0x5ae6d1.mappedBuffers[_0x389116];
      if (!_0x3013f1) {
        _0x5ae6d1.recordError(1282);
        _0x33d817("buffer was never mapped in glUnmapBuffer");
        return 0;
      }
      _0x5ae6d1.mappedBuffers[_0x389116] = null;
      if (!(_0x3013f1.access & 16)) {
        if (_0x5ae6d1.currentContext.version >= 2) {
          _0x1b6649.bufferSubData(_0x10c381, _0x3013f1.offset, _0x5f38b4, _0x3013f1.mem, _0x3013f1.length);
        } else {
          _0x1b6649.bufferSubData(_0x10c381, _0x3013f1.offset, _0x5f38b4.subarray(_0x3013f1.mem, _0x3013f1.mem + _0x3013f1.length));
        }
      }
      _0x540f62(_0x3013f1.mem);
      return 1;
    }
    function _0x4a6cf1() {
      var _0x805cce = _0x1b6649.currentProgram;
      if (!_0x805cce.explicitProgramBindingsApplied) {
        if (_0x5ae6d1.currentContext.version >= 2) {
          Object.keys(_0x805cce.explicitUniformBindings).forEach(function (_0x164438) {
            var _0x5b476a = _0x805cce.explicitUniformBindings[_0x164438];
            for (var _0xa626c3 = 0; _0xa626c3 < _0x5b476a[1]; ++_0xa626c3) {
              var _0x3b6ad8 = _0x1b6649.getUniformBlockIndex(_0x805cce, _0x164438 + (_0x5b476a[1] > 1 ? "[" + _0xa626c3 + "]" : ""));
              _0x1b6649.uniformBlockBinding(_0x805cce, _0x3b6ad8, _0x5b476a[0] + _0xa626c3);
            }
          });
        }
        Object.keys(_0x805cce.explicitSamplerBindings).forEach(function (_0x2277dc) {
          var _0x42cb56 = _0x805cce.explicitSamplerBindings[_0x2277dc];
          for (var _0x5c5967 = 0; _0x5c5967 < _0x42cb56[1]; ++_0x5c5967) {
            _0x1b6649.uniform1i(_0x1b6649.getUniformLocation(_0x805cce, _0x2277dc + (_0x5c5967 ? "[" + _0x5c5967 + "]" : "")), _0x42cb56[0] + _0x5c5967);
          }
        });
        _0x805cce.explicitProgramBindingsApplied = 1;
      }
    }
    function _0x15f17e(_0x2fba20) {
      _0x2fba20 = _0x5ae6d1.programs[_0x2fba20];
      _0x1b6649.useProgram(_0x2fba20);
      if (_0x1b6649.currentProgram = _0x2fba20) {
        _0x4a6cf1();
      }
    }
    function _0x2cfd1c(_0xd89133) {
      _0x1b6649.validateProgram(_0x5ae6d1.programs[_0xd89133]);
    }
    function _0x4342ce(_0x5948aa, _0x2dad99, _0x5cd614, _0x236b91, _0x29cfbc) {
      _0x1b6649.vertexAttrib4f(_0x5948aa, _0x2dad99, _0x5cd614, _0x236b91, _0x29cfbc);
    }
    function _0x2a11e6(_0x4f82ee, _0x2e76a5) {
      _0x1b6649.vertexAttrib4f(_0x4f82ee, _0x538c3e[_0x2e76a5 >> 2], _0x538c3e[_0x2e76a5 + 4 >> 2], _0x538c3e[_0x2e76a5 + 8 >> 2], _0x538c3e[_0x2e76a5 + 12 >> 2]);
    }
    function _0x14443c(_0x199de0, _0x56bb13, _0x444c15, _0x14aa1a, _0x5422f3) {
      var _0x20ce1f = _0x5ae6d1.currentContext.clientBuffers[_0x199de0];
      if (!_0x1b6649.currentArrayBufferBinding) {
        _0x20ce1f.size = _0x56bb13;
        _0x20ce1f.type = _0x444c15;
        _0x20ce1f.normalized = false;
        _0x20ce1f.stride = _0x14aa1a;
        _0x20ce1f.ptr = _0x5422f3;
        _0x20ce1f.clientside = true;
        _0x20ce1f.vertexAttribPointerAdaptor = function (_0x169604, _0x28ebe9, _0x4b4649, _0x5a1284, _0x396d4c, _0x947487) {
          this.vertexAttribIPointer(_0x169604, _0x28ebe9, _0x4b4649, _0x396d4c, _0x947487);
        };
        return;
      }
      _0x20ce1f.clientside = false;
      _0x1b6649.vertexAttribIPointer(_0x199de0, _0x56bb13, _0x444c15, _0x14aa1a, _0x5422f3);
    }
    function _0x29f78(_0x4278b4, _0x3e186d, _0x1cc973, _0x335986, _0x1997bd, _0x37175a) {
      var _0x379c21 = _0x5ae6d1.currentContext.clientBuffers[_0x4278b4];
      if (!_0x1b6649.currentArrayBufferBinding) {
        _0x379c21.size = _0x3e186d;
        _0x379c21.type = _0x1cc973;
        _0x379c21.normalized = _0x335986;
        _0x379c21.stride = _0x1997bd;
        _0x379c21.ptr = _0x37175a;
        _0x379c21.clientside = true;
        _0x379c21.vertexAttribPointerAdaptor = function (_0x57a50a, _0x5dc953, _0x50b7bf, _0x229e05, _0x31c99f, _0x5b4d72) {
          this.vertexAttribPointer(_0x57a50a, _0x5dc953, _0x50b7bf, _0x229e05, _0x31c99f, _0x5b4d72);
        };
        return;
      }
      _0x379c21.clientside = false;
      _0x1b6649.vertexAttribPointer(_0x4278b4, _0x3e186d, _0x1cc973, !!_0x335986, _0x1997bd, _0x37175a);
    }
    function _0x13f23d(_0x486b70, _0x25f8ce, _0x18dca0, _0x5edb09) {
      _0x1b6649.viewport(_0x486b70, _0x25f8ce, _0x18dca0, _0x5edb09);
    }
    function _0x3452cd(_0x50c71a) {
      return _0x50c71a;
    }
    function _0x15b3a0(_0x631b1c) {
      _0x473317(_0x631b1c);
    }
    function _0x38f6ba(_0x54e74d) {
      return _0x54e74d % 4 === 0 && (_0x54e74d % 100 !== 0 || _0x54e74d % 400 === 0);
    }
    function _0x223053(_0x47c623, _0x8cbcaf) {
      var _0x57c3aa = 0;
      for (var _0xf81401 = 0; _0xf81401 <= _0x8cbcaf; _0x57c3aa += _0x47c623[_0xf81401++]) {}
      return _0x57c3aa;
    }
    var _0x49b53f = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var _0x10ecd9 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function _0x553691(_0x84584c, _0x45af87) {
      var _0x33e128 = new Date(_0x84584c.getTime());
      while (_0x45af87 > 0) {
        var _0x4c87cc = _0x38f6ba(_0x33e128.getFullYear());
        var _0x110f58 = _0x33e128.getMonth();
        var _0x5138b3 = (_0x4c87cc ? _0x49b53f : _0x10ecd9)[_0x110f58];
        if (_0x45af87 > _0x5138b3 - _0x33e128.getDate()) {
          _0x45af87 -= _0x5138b3 - _0x33e128.getDate() + 1;
          _0x33e128.setDate(1);
          if (_0x110f58 < 11) {
            _0x33e128.setMonth(_0x110f58 + 1);
          } else {
            _0x33e128.setMonth(0);
            _0x33e128.setFullYear(_0x33e128.getFullYear() + 1);
          }
        } else {
          _0x33e128.setDate(_0x33e128.getDate() + _0x45af87);
          return _0x33e128;
        }
      }
      return _0x33e128;
    }
    function _0x490396(_0x22fb43, _0x579f17, _0x44a712, _0x1b8025) {
      var _0x3cd6d1 = _0x588032[_0x1b8025 + 40 >> 2];
      var _0x52dceb = {
        tm_sec: _0x588032[_0x1b8025 >> 2],
        tm_min: _0x588032[_0x1b8025 + 4 >> 2],
        tm_hour: _0x588032[_0x1b8025 + 8 >> 2],
        tm_mday: _0x588032[_0x1b8025 + 12 >> 2],
        tm_mon: _0x588032[_0x1b8025 + 16 >> 2],
        tm_year: _0x588032[_0x1b8025 + 20 >> 2],
        tm_wday: _0x588032[_0x1b8025 + 24 >> 2],
        tm_yday: _0x588032[_0x1b8025 + 28 >> 2],
        tm_isdst: _0x588032[_0x1b8025 + 32 >> 2],
        tm_gmtoff: _0x588032[_0x1b8025 + 36 >> 2],
        tm_zone: _0x3cd6d1 ? _0x5eaf00(_0x3cd6d1) : ""
      };
      var _0x4dcac4 = _0x5eaf00(_0x44a712);
      var _0x197cf0 = {
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
      for (var _0x126c4 in _0x197cf0) {
        _0x4dcac4 = _0x4dcac4.replace(new RegExp(_0x126c4, "g"), _0x197cf0[_0x126c4]);
      }
      var _0x3cc6b3 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var _0x59bb85 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function _0x2c263e(_0x3fdd3f, _0x206ab0, _0x33ec52) {
        var _0x246c1b = typeof _0x3fdd3f == "number" ? _0x3fdd3f.toString() : _0x3fdd3f || "";
        while (_0x246c1b.length < _0x206ab0) {
          _0x246c1b = _0x33ec52[0] + _0x246c1b;
        }
        return _0x246c1b;
      }
      function _0x378c0a(_0x473159, _0x5d8da7) {
        return _0x2c263e(_0x473159, _0x5d8da7, "0");
      }
      function _0x4a20ee(_0xe5674, _0xdee9e8) {
        function _0x2f6b4d(_0x4f601d) {
          if (_0x4f601d < 0) {
            return -1;
          } else if (_0x4f601d > 0) {
            return 1;
          } else {
            return 0;
          }
        }
        var _0x40ed79;
        if ((_0x40ed79 = _0x2f6b4d(_0xe5674.getFullYear() - _0xdee9e8.getFullYear())) === 0) {
          if ((_0x40ed79 = _0x2f6b4d(_0xe5674.getMonth() - _0xdee9e8.getMonth())) === 0) {
            _0x40ed79 = _0x2f6b4d(_0xe5674.getDate() - _0xdee9e8.getDate());
          }
        }
        return _0x40ed79;
      }
      function _0x5a7207(_0x2bee56) {
        switch (_0x2bee56.getDay()) {
          case 0:
            return new Date(_0x2bee56.getFullYear() - 1, 11, 29);
          case 1:
            return _0x2bee56;
          case 2:
            return new Date(_0x2bee56.getFullYear(), 0, 3);
          case 3:
            return new Date(_0x2bee56.getFullYear(), 0, 2);
          case 4:
            return new Date(_0x2bee56.getFullYear(), 0, 1);
          case 5:
            return new Date(_0x2bee56.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(_0x2bee56.getFullYear() - 1, 11, 30);
        }
      }
      function _0x58028d(_0x35d1bf) {
        var _0x158029 = _0x553691(new Date(_0x35d1bf.tm_year + 1900, 0, 1), _0x35d1bf.tm_yday);
        var _0x1fa69b = new Date(_0x158029.getFullYear(), 0, 4);
        var _0x421b3e = new Date(_0x158029.getFullYear() + 1, 0, 4);
        var _0xc00eb7 = _0x5a7207(_0x1fa69b);
        var _0x1eeea8 = _0x5a7207(_0x421b3e);
        if (_0x4a20ee(_0xc00eb7, _0x158029) <= 0) {
          if (_0x4a20ee(_0x1eeea8, _0x158029) <= 0) {
            return _0x158029.getFullYear() + 1;
          } else {
            return _0x158029.getFullYear();
          }
        } else {
          return _0x158029.getFullYear() - 1;
        }
      }
      var _0x2e23b9 = {
        "%a": function (_0x2f7e68) {
          return _0x3cc6b3[_0x2f7e68.tm_wday].substring(0, 3);
        },
        "%A": function (_0x6cc85e) {
          return _0x3cc6b3[_0x6cc85e.tm_wday];
        },
        "%b": function (_0x474f58) {
          return _0x59bb85[_0x474f58.tm_mon].substring(0, 3);
        },
        "%B": function (_0x3968ce) {
          return _0x59bb85[_0x3968ce.tm_mon];
        },
        "%C": function (_0x338f15) {
          var _0x396f6e = _0x338f15.tm_year + 1900;
          return _0x378c0a(_0x396f6e / 100 | 0, 2);
        },
        "%d": function (_0x15f73f) {
          return _0x378c0a(_0x15f73f.tm_mday, 2);
        },
        "%e": function (_0x300303) {
          return _0x2c263e(_0x300303.tm_mday, 2, " ");
        },
        "%g": function (_0x211f85) {
          return _0x58028d(_0x211f85).toString().substring(2);
        },
        "%G": function (_0xc67856) {
          return _0x58028d(_0xc67856);
        },
        "%H": function (_0x4583f7) {
          return _0x378c0a(_0x4583f7.tm_hour, 2);
        },
        "%I": function (_0x51f7a6) {
          var _0x3399ad = _0x51f7a6.tm_hour;
          if (_0x3399ad == 0) {
            _0x3399ad = 12;
          } else if (_0x3399ad > 12) {
            _0x3399ad -= 12;
          }
          return _0x378c0a(_0x3399ad, 2);
        },
        "%j": function (_0x33dd2c) {
          return _0x378c0a(_0x33dd2c.tm_mday + _0x223053(_0x38f6ba(_0x33dd2c.tm_year + 1900) ? _0x49b53f : _0x10ecd9, _0x33dd2c.tm_mon - 1), 3);
        },
        "%m": function (_0x831aeb) {
          return _0x378c0a(_0x831aeb.tm_mon + 1, 2);
        },
        "%M": function (_0xdb1dcf) {
          return _0x378c0a(_0xdb1dcf.tm_min, 2);
        },
        "%n": function () {
          return "\n";
        },
        "%p": function (_0x4337b2) {
          if (_0x4337b2.tm_hour >= 0 && _0x4337b2.tm_hour < 12) {
            return "AM";
          } else {
            return "PM";
          }
        },
        "%S": function (_0x9614d1) {
          return _0x378c0a(_0x9614d1.tm_sec, 2);
        },
        "%t": function () {
          return "\t";
        },
        "%u": function (_0x1e8b2b) {
          return _0x1e8b2b.tm_wday || 7;
        },
        "%U": function (_0x3b4095) {
          var _0x217841 = _0x3b4095.tm_yday + 7 - _0x3b4095.tm_wday;
          return _0x378c0a(Math.floor(_0x217841 / 7), 2);
        },
        "%V": function (_0x1231f8) {
          var _0x4b90d7 = Math.floor((_0x1231f8.tm_yday + 7 - (_0x1231f8.tm_wday + 6) % 7) / 7);
          if ((_0x1231f8.tm_wday + 371 - _0x1231f8.tm_yday - 2) % 7 <= 2) {
            _0x4b90d7++;
          }
          if (!_0x4b90d7) {
            _0x4b90d7 = 52;
            var _0x3db961 = (_0x1231f8.tm_wday + 7 - _0x1231f8.tm_yday - 1) % 7;
            if (_0x3db961 == 4 || _0x3db961 == 5 && _0x38f6ba(_0x1231f8.tm_year % 400 - 1)) {
              _0x4b90d7++;
            }
          } else if (_0x4b90d7 == 53) {
            var _0x5043e1 = (_0x1231f8.tm_wday + 371 - _0x1231f8.tm_yday) % 7;
            if (_0x5043e1 != 4 && (_0x5043e1 != 3 || !_0x38f6ba(_0x1231f8.tm_year))) {
              _0x4b90d7 = 1;
            }
          }
          return _0x378c0a(_0x4b90d7, 2);
        },
        "%w": function (_0x569f67) {
          return _0x569f67.tm_wday;
        },
        "%W": function (_0x255085) {
          var _0x2c3cdf = _0x255085.tm_yday + 7 - (_0x255085.tm_wday + 6) % 7;
          return _0x378c0a(Math.floor(_0x2c3cdf / 7), 2);
        },
        "%y": function (_0xee2ddf) {
          return (_0xee2ddf.tm_year + 1900).toString().substring(2);
        },
        "%Y": function (_0x2fdae0) {
          return _0x2fdae0.tm_year + 1900;
        },
        "%z": function (_0x3b18a3) {
          var _0x27b2fe = _0x3b18a3.tm_gmtoff;
          var _0x16c396 = _0x27b2fe >= 0;
          _0x27b2fe = Math.abs(_0x27b2fe) / 60;
          _0x27b2fe = _0x27b2fe / 60 * 100 + _0x27b2fe % 60;
          return (_0x16c396 ? "+" : "-") + String("0000" + _0x27b2fe).slice(-4);
        },
        "%Z": function (_0x1cdebd) {
          return _0x1cdebd.tm_zone;
        },
        "%%": function () {
          return "%";
        }
      };
      _0x4dcac4 = _0x4dcac4.replace(/%%/g, "\0\0");
      for (var _0x126c4 in _0x2e23b9) {
        if (_0x4dcac4.includes(_0x126c4)) {
          _0x4dcac4 = _0x4dcac4.replace(new RegExp(_0x126c4, "g"), _0x2e23b9[_0x126c4](_0x52dceb));
        }
      }
      _0x4dcac4 = _0x4dcac4.replace(/\0\0/g, "%");
      var _0x1a54f6 = _0x28f5f4(_0x4dcac4, false);
      if (_0x1a54f6.length > _0x579f17) {
        return 0;
      }
      _0xd2c6ac(_0x1a54f6, _0x22fb43);
      return _0x1a54f6.length - 1;
    }
    function _0x215f74(_0x18e9ea, _0x1becb4, _0x2a7c9b, _0x2215bc) {
      if (!_0x18e9ea) {
        _0x18e9ea = this;
      }
      this.parent = _0x18e9ea;
      this.mount = _0x18e9ea.mount;
      this.mounted = null;
      this.id = _0x170eaf.nextInode++;
      this.name = _0x1becb4;
      this.mode = _0x2a7c9b;
      this.node_ops = {};
      this.stream_ops = {};
      this.rdev = _0x2215bc;
    }
    var _0x573cbb = 365;
    var _0x4cf47e = 146;
    Object.defineProperties(_0x215f74.prototype, {
      read: {
        get: function () {
          return (this.mode & _0x573cbb) === _0x573cbb;
        },
        set: function (_0x3d9e27) {
          if (_0x3d9e27) {
            this.mode |= _0x573cbb;
          } else {
            this.mode &= ~_0x573cbb;
          }
        }
      },
      write: {
        get: function () {
          return (this.mode & _0x4cf47e) === _0x4cf47e;
        },
        set: function (_0x5e8abc) {
          if (_0x5e8abc) {
            this.mode |= _0x4cf47e;
          } else {
            this.mode &= ~_0x4cf47e;
          }
        }
      },
      isFolder: {
        get: function () {
          return _0x170eaf.isDir(this.mode);
        }
      },
      isDevice: {
        get: function () {
          return _0x170eaf.isChrdev(this.mode);
        }
      }
    });
    _0x170eaf.FSNode = _0x215f74;
    _0x170eaf.staticInit();
    _0x1d435e.FS_createPath = _0x170eaf.createPath;
    _0x1d435e.FS_createDataFile = _0x170eaf.createDataFile;
    _0x1d435e.requestFullscreen = function _0x39dd6c(_0x198a22, _0x2cf263) {
      _0x4b83e4.requestFullscreen(_0x198a22, _0x2cf263);
    };
    _0x1d435e.requestAnimationFrame = function _0x43c961(_0x1ae9a4) {
      _0x4b83e4.requestAnimationFrame(_0x1ae9a4);
    };
    _0x1d435e.setCanvasSize = function _0x7adace(_0x1f1ce8, _0x294150, _0x196789) {
      _0x4b83e4.setCanvasSize(_0x1f1ce8, _0x294150, _0x196789);
    };
    _0x1d435e.pauseMainLoop = function _0x57eb05() {
      _0x4b83e4.mainLoop.pause();
    };
    _0x1d435e.resumeMainLoop = function _0x4a3455() {
      _0x4b83e4.mainLoop.resume();
    };
    _0x1d435e.getUserMedia = function _0x291b06() {
      _0x4b83e4.getUserMedia();
    };
    _0x1d435e.createContext = function _0x1018bc(_0x13234a, _0x3f7868, _0x59399b, _0x5a6e2d) {
      return _0x4b83e4.createContext(_0x13234a, _0x3f7868, _0x59399b, _0x5a6e2d);
    };
    var _0x1b6649;
    for (var _0x31240f = 0; _0x31240f < 32; ++_0x31240f) {
      _0x5601ac.push(new Array(_0x31240f));
    }
    var _0x3c5805 = new Float32Array(288);
    for (var _0x31240f = 0; _0x31240f < 288; ++_0x31240f) {
      _0x155d14[_0x31240f] = _0x3c5805.subarray(0, _0x31240f + 1);
    }
    var _0x48f374 = new Int32Array(288);
    for (var _0x31240f = 0; _0x31240f < 288; ++_0x31240f) {
      _0x109d57[_0x31240f] = _0x48f374.subarray(0, _0x31240f + 1);
    }
    function _0x28f5f4(_0x8e8a81, _0x1d5059, _0x565dfb) {
      var _0x150f5c = _0x565dfb > 0 ? _0x565dfb : _0x3b9e6b(_0x8e8a81) + 1;
      var _0x2876a0 = new Array(_0x150f5c);
      var _0x566d79 = _0x42519a(_0x8e8a81, _0x2876a0, 0, _0x2876a0.length);
      if (_0x1d5059) {
        _0x2876a0.length = _0x566d79;
      }
      return _0x2876a0;
    }
    var _0x6e99ab = {
      mj: _0x46b4ac,
      ij: _0x31ed5e,
      Vc: _0x4de5fb,
      cd: _0x17506e,
      Ka: _0x405836,
      Wc: _0x13ab0d,
      Jj: _0x2aefae,
      Pi: _0x31380c,
      Ja: _0x5ddd99,
      $c: _0x2c33bd,
      ad: _0x5e6c97,
      Ia: _0x29e410,
      kj: _0x1c8b2e,
      jj: _0x4716c4,
      Aj: _0x5f3a0e,
      aj: _0x1d3199,
      mb: _0x34c0c6,
      ma: _0x37615c,
      la: _0x496cfe,
      od: _0x519d9e,
      rd: _0x5bd6c7,
      pd: _0xd39a0,
      Q: _0x13e35b,
      Ni: _0x43e7af,
      Li: _0x11d330,
      zd: _0x4ce4eb,
      pj: _0x25f27b,
      oj: _0x45623f,
      Ri: _0x9e80da,
      Zc: _0x26ade4,
      _c: _0xee679d,
      Si: _0x4e2503,
      Nf: _0x40c298,
      Ej: _0x25a694,
      Pc: _0x408cb9,
      Sc: _0x17c1ad,
      Rc: _0x407aa3,
      Qc: _0x5f5a97,
      jd: _0x15d746,
      id: _0x24b717,
      hd: _0x1cf477,
      gd: _0x4bc0f3,
      Oi: _0x16b7cc,
      Ki: _0x1fd807,
      gj: _0x543523,
      ed: _0x322277,
      Hi: _0x45d7a2,
      Tf: _0x554154,
      Pb: _0x4d21fc,
      Ob: _0x3f2011,
      wb: _0x263dbe,
      Yf: _0x390b7a,
      Ta: _0x29b4d9,
      Sa: _0x3f1332,
      nf: _0x1fb237,
      sf: _0x103510,
      xf: _0x456529,
      ff: _0x536950,
      ga: _0x1e0c3c,
      Rf: _0x4dbe5a,
      Lb: _0x461204,
      Kb: _0x186f44,
      Pf: _0x209ae6,
      Qf: _0x5d8472,
      Jb: _0x396b5f,
      Ib: _0x245c35,
      Gi: _0x41d005,
      Sf: _0x46198a,
      Nb: _0x11ba59,
      Mb: _0x2ebbc9,
      pf: _0x3c2165,
      yf: _0x580833,
      Hf: _0x22fdb1,
      pa: _0x5d771b,
      xb: _0x4535d8,
      uf: _0x2d5d5e,
      Oa: _0x2ebdef,
      vf: _0x24dfda,
      wf: _0x2419fb,
      tf: _0x3f653a,
      zb: _0x1ba92f,
      Uf: _0x3e6776,
      Rb: _0x331ffc,
      Qb: _0xc41be5,
      Vb: _0x72265,
      jf: _0x5a7ad8,
      Of: _0x551a84,
      Wf: _0x215e41,
      fa: _0x3940fe,
      zg: _0x4de1d9,
      Z: _0x5b4f69,
      W: _0x1cde34,
      xa: _0x35fc0f,
      vg: _0x29eee8,
      tg: _0x3649af,
      hc: _0x49f311,
      ug: _0x5ab8ef,
      Wa: _0x13e8a3,
      Xa: _0x2e7454,
      Wb: _0x5892e7,
      wg: _0x5f329d,
      rg: _0x241344,
      sg: _0x45f951,
      jc: _0x14fa84,
      ic: _0x3acd15,
      ya: _0x44abcd,
      kc: _0x1dbb3c,
      yg: _0x771b54,
      xg: _0x5b289d,
      za: _0x59f630,
      fc: _0x292997,
      Bb: _0x1b0546,
      qa: _0x1a637e,
      gc: _0x58cccf,
      vb: _0x5c109a,
      Ab: _0x3cc25b,
      Gb: _0x9e9bed,
      Pa: _0x4d9881,
      Cb: _0x1ea465,
      Eb: _0x3bfa32,
      Bf: _0x441bc3,
      lc: _0x2e1378,
      Zf: _0x3c79ea,
      Db: _0x3c98a9,
      Mf: _0x2425c0,
      wa: _0xa452e8,
      mf: _0x1dd50e,
      og: _0x2b7fd6,
      lg: _0x169f9c,
      mg: _0x24d649,
      ng: _0x138342,
      Va: _0x252607,
      hg: _0x57eb79,
      jg: _0x1eeb5f,
      ig: _0xa80cf3,
      kg: _0x5cddac,
      xj: _0x57c5f2,
      vj: _0x37e48e,
      tj: _0x123355,
      dj: _0xdb661b,
      fj: _0x13b07d,
      zj: _0x4c2b62,
      yd: _0x4cfca1,
      ob: _0x4a470c,
      rj: _0x48996f,
      Fj: _0x17d239,
      wd: _0x2c2d3e,
      nb: _0x5934e5,
      nd: _0x3a87e4,
      Dj: _0x3cb0a9,
      Cj: _0x22f222,
      lb: _0xf62fd7,
      md: _0x2c5c6c,
      ld: _0x495f3b,
      hj: _0x50fdd5,
      dd: _0x3fbb49,
      bd: _0x3b96cf,
      Yc: _0x5a74bb,
      vd: _0x3839d1,
      ud: _0x1c077f,
      sd: _0xdccce1,
      td: _0x52d274,
      nj: _0x4f513f,
      $i: _0x1c50c3,
      Tc: _0x3eb1cb,
      Uc: _0x5dfe60,
      Xc: _0x447876,
      kd: _0x14c405,
      Kj: _0xd6adc7,
      Ij: _0x1f0c69,
      Gj: _0x5af51e,
      Hj: _0x37bab3,
      wj: _0x58583e,
      uj: _0x316d83,
      sj: _0x3a2c3b,
      cj: _0x3f8ab9,
      ej: _0x470fb5,
      yj: _0x5e2348,
      Ii: _0x3c80b6,
      qj: _0x37d71e,
      lj: _0x4844bf,
      Bj: _0x526eff,
      bj: _0x4cc652,
      pb: _0xce0f8f,
      Jd: _0x31f7aa,
      Ed: _0x2c365c,
      Hd: _0x2542a2,
      Kd: _0x355afe,
      Fd: _0x971468,
      Dd: _0x4b116a,
      Gd: _0x4a61c6,
      Id: _0x1dd741,
      o: _0x22073e,
      i: _0x336afc,
      n: _0x2edc20,
      j: _0x4c4430,
      a: _0x319e45,
      Od: _0x18e2bf,
      Ma: _0x2eb082,
      Pd: _0x5bcae3,
      aa: _0x13fb20,
      l: _0x111804,
      Af: _0x5e3c7e,
      qh: _0xc21f9b,
      mi: _0x7694fe,
      be: _0x11ff17,
      Wh: _0x3acc26,
      Sd: _0x1a73ab,
      ce: _0xd60168,
      U: _0x58eff5,
      Wi: _0x5b2bad,
      Ji: _0x404019,
      Zd: _0x46a110,
      Vd: _0x380c40,
      Td: _0x3e64c7,
      Fh: _0x20ec8a,
      di: _0x82d517,
      yb: _0x36a3af,
      yh: _0x1dc73e,
      Mi: _0x472f8b,
      Yd: _0x4b2231,
      Qi: _0x203bdc,
      qd: _0x1adc95,
      de: _0x15f1a1,
      Nh: _0xf53e44,
      Md: _0x59a4c7,
      gh: _0x469d03,
      Qd: _0xbdfd85,
      $d: _0x1ec8e3,
      Xd: _0x58c17d,
      Rd: _0x5be5af,
      jh: _0x164d53,
      rb: _0x27ae0a,
      Ui: _0x396a1e,
      qf: _0x378b52,
      Nd: _0x2b8f95,
      rf: _0x588fda,
      ae: _0x5eb21c,
      _d: _0x3fd5c2,
      Oc: _0x3c4c5f,
      ui: _0x5c2601,
      ha: _0x11fac5,
      Hb: _0x58ca87,
      Ag: _0xfc3f54,
      Vf: _0x1b6f6f,
      Xf: _0x59deac,
      $f: _0x9ba2c3,
      Wd: _0x5dcc9c,
      fg: _0x5a0f59,
      x: _0x1dd280,
      Ua: _0x3cdf8a,
      kf: _0x44c09e,
      hf: _0x46142d,
      oa: _0xd4595,
      Kf: _0x3c4a1a,
      Cf: _0x4557a8,
      zf: _0x1d9bb4,
      Jf: _0x4c023e,
      Sb: _0x10943a,
      Ve: _0x17a838,
      K: _0x4400f3,
      If: _0x71e5ae,
      Tb: _0xe58c80,
      lf: _0x1886ba,
      bg: _0x9cff14,
      B: _0x4ce561,
      Qj: _0x4f1c81,
      Lf: _0x2199bf,
      Df: _0x435251,
      Rj: _0x2fecdd,
      Ub: _0x1e196b,
      Fb: _0x1230a5,
      Ra: _0x4ec937,
      Ff: _0x8c291e,
      Gf: _0x4b2e1e,
      Yb: _0x1f64f7,
      Xb: _0x5b263c,
      ef: _0x3c98c4,
      ta: _0x571e66,
      ra: _0x2129b9,
      sa: _0xaff96b,
      cf: _0x3c6bb2,
      gf: _0x3a9cbf,
      dc: _0x7ba1ce,
      cc: _0x189cbd,
      ec: _0x488487,
      Ef: _0x404bd6,
      Zb: _0x11c38c,
      $b: _0x1f7518,
      _b: _0x5e5856,
      ac: _0x82d789,
      bc: _0x2cce30,
      dg: _0x26b0a5,
      cg: _0x44a9ad,
      ua: _0x49b2e5,
      ag: _0x929cdb,
      eg: _0x22b082,
      va: _0x5327da,
      df: _0x6bbf54,
      of: _0x3210c9,
      C: _0x4f47b0,
      ia: _0x2b2c09,
      tb: _0x6260e7,
      ub: _0x516a3e,
      bf: _0x54caae,
      Qa: _0x4929cd,
      b: _0x302a7c,
      Ud: _0x24e130,
      pg: _0x9ab753,
      qg: _0x457209,
      sb: _0x3b14c4,
      zi: _0x5ae15b,
      wi: _0xf93853,
      sc: _0x2e69b0,
      Ga: _0x377f59,
      vi: _0x4ee052,
      Og: _0x359525,
      Lg: _0x133bae,
      ri: _0x392bfc,
      si: _0x5ca515,
      Hg: _0x369d99,
      ti: _0xedefe4,
      dh: _0x50861c,
      Lc: _0x549997,
      Mc: _0x464f55,
      Nc: _0x4e0fe6,
      Wg: _0x366f11,
      pi: _0x2fb08b,
      qi: _0x13e9be,
      oi: _0xa9e645,
      ji: _0xfdc703,
      Dg: _0x4d4bca,
      Cg: _0x891119,
      Bg: _0x374299,
      ki: _0x1834f4,
      li: _0x499890,
      ni: _0x570ab3,
      ee: _0x3cb5c7,
      gb: _0x5a3c46,
      ii: _0xf33748,
      gi: _0x13ca2c,
      $g: _0x2d6d45,
      hi: _0x195877,
      ch: _0x3463fd,
      Qg: _0x903570,
      fi: _0x4ddc9d,
      Kc: _0x23f851,
      ei: _0xae50c6,
      ci: _0x46c1d1,
      bi: _0x1bcffa,
      ai: _0x467cb3,
      $h: _0x463245,
      _h: _0x309086,
      rc: _0x5524ea,
      Zh: _0x46f485,
      Gg: _0x591100,
      Yh: _0x439a0a,
      nc: _0x44df56,
      Xh: _0x48fcbc,
      fh: _0x3943fe,
      Fa: _0x552f9e,
      Ea: _0x2143d2,
      Vh: _0x47d58c,
      Uh: _0x2fbb0b,
      Th: _0x3c3cc4,
      Qh: _0x32d35b,
      Sg: _0x43a677,
      Pg: _0x1fec88,
      Rh: _0x38506b,
      Rg: _0x5225a1,
      Sh: _0x11d35f,
      Ph: _0x17a853,
      tc: _0x432518,
      mc: _0x4cbf22,
      Mh: _0x380426,
      Jc: _0x9bf8ac,
      Vg: _0x48648c,
      T: _0x1f60a5,
      S: _0x3d3d79,
      Aa: _0x1b77b4,
      Da: _0x569cb2,
      Lh: _0x348bc9,
      Hh: _0x236090,
      qc: _0x289446,
      Ih: _0x352749,
      Fg: _0x157edd,
      Kh: _0x4160ff,
      hh: _0x9166d8,
      Jh: _0x117458,
      Fi: _0x225eb8,
      fb: _0x7806ca,
      Za: _0x8f39d5,
      da: _0x1b3e48,
      ca: _0x369589,
      Ei: _0x36a7d7,
      _f: _0x2e049f,
      Gh: _0x135155,
      Eh: _0x58a530,
      yi: _0x2af801,
      hb: _0x3e9dde,
      Jg: _0x53ae97,
      oc: _0x30d61d,
      Bi: _0x311581,
      _: _0x3f093c,
      uc: _0x58cd1b,
      ih: _0x2c3314,
      Oh: _0x858538,
      Ch: _0x3cd599,
      Ic: _0x28dd63,
      Dh: _0x372825,
      Ai: _0x2af4fc,
      Bh: _0x4d62d0,
      Yg: _0x3dee3b,
      Ah: _0x3e04b9,
      Kg: _0x47f6fd,
      Ya: _0x151b06,
      ja: _0x36f6ba,
      Hc: _0x51e322,
      Di: _0x5dafe4,
      $a: _0x57e596,
      xi: _0x2ff463,
      eh: _0x66309e,
      zh: _0x3167a2,
      Tg: _0x359ada,
      eb: _0x14a1f1,
      Gc: _0x2e3880,
      pc: _0xf03fcb,
      Eg: _0x4dc69a,
      Ng: _0x52d524,
      ba: _0x4a1f57,
      xh: _0x2ab998,
      Xg: _0x52b7ec,
      Ig: _0x6466a4,
      db: _0x5e4e93,
      vh: _0x12504e,
      wh: _0x12b3a8,
      th: _0x1c62a7,
      uh: _0x29b1a2,
      rh: _0x12e311,
      ah: _0x40aa8f,
      sh: _0x23736f,
      cb: _0x167686,
      ph: _0x5bbb37,
      Zg: _0x108e1e,
      _g: _0x5a6ffe,
      oh: _0x356af8,
      bh: _0x2c910b,
      vc: _0x5d85b9,
      Ba: _0x28994,
      wc: _0x389051,
      xc: _0x27b5aa,
      yc: _0x456b7d,
      zc: _0x42e283,
      Ac: _0x2c2e0d,
      bb: _0x4f80da,
      Bc: _0x5422b3,
      Cc: _0x1f7094,
      ea: _0x159dff,
      Dc: _0x4e3f58,
      Ec: _0x3c22d8,
      _a: _0x8d23a9,
      Fc: _0x554c9d,
      Ca: _0x45389b,
      Ug: _0x35527e,
      kh: _0x15f17e,
      Ci: _0x2cfd1c,
      lh: _0x4342ce,
      mh: _0x2a11e6,
      Mg: _0x14443c,
      nh: _0x29f78,
      ab: _0x13f23d,
      Ad: _0x320e73,
      G: _0x83e785,
      Cd: _0x26b33a,
      R: _0x1f6881,
      M: _0x950f8f,
      ke: _0x402e36,
      V: _0x2aacd7,
      $: _0x3e4422,
      D: _0x2b2ba8,
      Bd: _0x1df8ea,
      I: _0xf3a460,
      P: _0x15c3a0,
      t: _0x49fd96,
      kb: _0x51f3e8,
      ka: _0xb08b32,
      c: _0x3fa88a,
      Zi: _0x133ab7,
      Yi: _0x54962d,
      ib: _0x566c31,
      d: _0x3aebfe,
      Ha: _0x3d98f7,
      Pj: _0xbc0dfb,
      La: _0x3dc3b0,
      J: _0x409e66,
      _i: _0x1a4799,
      g: _0x2825b4,
      Oj: _0x3771c9,
      Xi: _0x3901aa,
      Ld: _0x3525f9,
      r: _0x413a94,
      s: _0x3b7533,
      v: _0x3ea8fc,
      z: _0xa6c1f5,
      H: _0x117ab8,
      L: _0x191cc8,
      qb: _0x345f1e,
      ne: _0x1329ea,
      se: _0x1a2f78,
      We: _0x1a61c9,
      re: _0x1c52d7,
      we: _0x206313,
      Ce: _0xd4405f,
      $e: _0x2c3d15,
      af: _0xfaf72c,
      Je: _0x5239d9,
      Ae: _0x14a550,
      ve: _0x2a2d58,
      oe: _0x2f6e3e,
      ie: _0x20142b,
      pe: _0x7fa211,
      je: _0x5d0c36,
      Ke: _0x15545e,
      Re: _0x2bd02d,
      Xe: _0x569048,
      Me: _0x1fdb2e,
      Ze: _0x47b381,
      ze: _0x4ef573,
      Ye: _0x23a882,
      Se: _0x357b49,
      _e: _0x45080f,
      fe: _0x455b2d,
      Ge: _0xd43543,
      De: _0xa8fef4,
      Oe: _0x4d62ac,
      Ie: _0x47b866,
      He: _0x508c07,
      xe: _0x4ef798,
      Qe: _0x70218f,
      e: _0x309e20,
      h: _0x197b64,
      gg: _0x145db5,
      y: _0x419eb4,
      X: _0x1762a6,
      E: _0x497e27,
      xd: _0x3da482,
      m: _0x5abd56,
      fd: _0x3a4740,
      Ti: _0x3b7dd3,
      N: _0x57ebba,
      Vi: _0x2b2bad,
      f: _0x22a87c,
      p: _0x214350,
      Nj: _0x5ebd07,
      q: _0x5f42d4,
      u: _0x34db32,
      Mj: _0x3a74ba,
      Lj: _0x3a9f2c,
      O: _0x44fee2,
      Ee: _0x5a1f63,
      A: _0xf3370f,
      F: _0x375d5a,
      Y: _0x1d1e18,
      na: _0x2fc2bc,
      jb: _0x4b2ac5,
      Pe: _0x599a10,
      Fe: _0x4cc33b,
      Te: _0x5144b4,
      qe: _0x410c1e,
      te: _0x6c4b0c,
      Ne: _0x1a2620,
      Ue: _0x50858e,
      ye: _0x408afa,
      Le: _0x353c32,
      le: _0x37d94d,
      Be: _0x1f54a2,
      ue: _0x276cb2,
      me: _0x49d53f,
      ge: _0x1f7922,
      he: _0x3bfb66,
      k: _0x3452cd,
      w: _0x15b3a0,
      Na: _0x490396
    };
    var _0x5208a5 = _0x575d38();
    var _0x705b28 = _0x1d435e.___wasm_call_ctors = function () {
      return (_0x705b28 = _0x1d435e.___wasm_call_ctors = _0x1d435e.asm.Tj).apply(null, arguments);
    };
    var _0x5d7344 = _0x1d435e._GetFakemodTimeInSeconds = function () {
      return (_0x5d7344 = _0x1d435e._GetFakemodTimeInSeconds = _0x1d435e.asm.Uj).apply(null, arguments);
    };
    var _0xfd2453 = _0x1d435e._ReleaseKeys = function () {
      return (_0xfd2453 = _0x1d435e._ReleaseKeys = _0x1d435e.asm.Vj).apply(null, arguments);
    };
    var _0x108e23 = _0x1d435e._getMemInfo = function () {
      return (_0x108e23 = _0x1d435e._getMemInfo = _0x1d435e.asm.Wj).apply(null, arguments);
    };
    var _0x4450de = _0x1d435e._SendMessageFloat = function () {
      return (_0x4450de = _0x1d435e._SendMessageFloat = _0x1d435e.asm.Xj).apply(null, arguments);
    };
    var _0x1f4a8c = _0x1d435e._SendMessageString = function () {
      return (_0x1f4a8c = _0x1d435e._SendMessageString = _0x1d435e.asm.Yj).apply(null, arguments);
    };
    var _0x4a5508 = _0x1d435e._SendMessage = function () {
      return (_0x4a5508 = _0x1d435e._SendMessage = _0x1d435e.asm.Zj).apply(null, arguments);
    };
    var _0x383a08 = _0x1d435e._SetFullscreen = function () {
      return (_0x383a08 = _0x1d435e._SetFullscreen = _0x1d435e.asm._j).apply(null, arguments);
    };
    var _0x468b78 = _0x1d435e._main = function () {
      return (_0x468b78 = _0x1d435e._main = _0x1d435e.asm.$j).apply(null, arguments);
    };
    var _0x44d37e = _0x1d435e.___errno_location = function () {
      return (_0x44d37e = _0x1d435e.___errno_location = _0x1d435e.asm.ak).apply(null, arguments);
    };
    var _0x412a44 = _0x1d435e._htonl = function () {
      return (_0x412a44 = _0x1d435e._htonl = _0x1d435e.asm.bk).apply(null, arguments);
    };
    var _0x7cc544 = _0x1d435e._htons = function () {
      return (_0x7cc544 = _0x1d435e._htons = _0x1d435e.asm.ck).apply(null, arguments);
    };
    var _0x5c7c3e = _0x1d435e._ntohs = function () {
      return (_0x5c7c3e = _0x1d435e._ntohs = _0x1d435e.asm.dk).apply(null, arguments);
    };
    var _0x5705f5 = _0x1d435e._strlen = function () {
      return (_0x5705f5 = _0x1d435e._strlen = _0x1d435e.asm.ek).apply(null, arguments);
    };
    var _0x14649f = _0x1d435e._malloc = function () {
      return (_0x14649f = _0x1d435e._malloc = _0x1d435e.asm.fk).apply(null, arguments);
    };
    var _0x540f62 = _0x1d435e._free = function () {
      return (_0x540f62 = _0x1d435e._free = _0x1d435e.asm.gk).apply(null, arguments);
    };
    var _0x94ab9c = _0x1d435e._emscripten_builtin_memalign = function () {
      return (_0x94ab9c = _0x1d435e._emscripten_builtin_memalign = _0x1d435e.asm.hk).apply(null, arguments);
    };
    var _0x5a0f93 = _0x1d435e._setThrew = function () {
      return (_0x5a0f93 = _0x1d435e._setThrew = _0x1d435e.asm.ik).apply(null, arguments);
    };
    var _0x17876e = _0x1d435e.stackSave = function () {
      return (_0x17876e = _0x1d435e.stackSave = _0x1d435e.asm.jk).apply(null, arguments);
    };
    var _0x9d36f7 = _0x1d435e.stackRestore = function () {
      return (_0x9d36f7 = _0x1d435e.stackRestore = _0x1d435e.asm.kk).apply(null, arguments);
    };
    var _0x5c4392 = _0x1d435e.stackAlloc = function () {
      return (_0x5c4392 = _0x1d435e.stackAlloc = _0x1d435e.asm.lk).apply(null, arguments);
    };
    var _0x4cc899 = _0x1d435e.___cxa_can_catch = function () {
      return (_0x4cc899 = _0x1d435e.___cxa_can_catch = _0x1d435e.asm.mk).apply(null, arguments);
    };
    var _0x2ad985 = _0x1d435e.___cxa_is_pointer_type = function () {
      return (_0x2ad985 = _0x1d435e.___cxa_is_pointer_type = _0x1d435e.asm.nk).apply(null, arguments);
    };
    var _0x2b76ce = _0x1d435e.dynCall_iidiiii = function () {
      return (_0x2b76ce = _0x1d435e.dynCall_iidiiii = _0x1d435e.asm.pk).apply(null, arguments);
    };
    var _0x29540c = _0x1d435e.dynCall_vii = function () {
      return (_0x29540c = _0x1d435e.dynCall_vii = _0x1d435e.asm.qk).apply(null, arguments);
    };
    var _0x9a870b = _0x1d435e.dynCall_iiii = function () {
      return (_0x9a870b = _0x1d435e.dynCall_iiii = _0x1d435e.asm.rk).apply(null, arguments);
    };
    var _0x1d7d72 = _0x1d435e.dynCall_iii = function () {
      return (_0x1d7d72 = _0x1d435e.dynCall_iii = _0x1d435e.asm.sk).apply(null, arguments);
    };
    var _0x54ca8f = _0x1d435e.dynCall_ii = function () {
      return (_0x54ca8f = _0x1d435e.dynCall_ii = _0x1d435e.asm.tk).apply(null, arguments);
    };
    var _0x5d2a02 = _0x1d435e.dynCall_jiji = function () {
      return (_0x5d2a02 = _0x1d435e.dynCall_jiji = _0x1d435e.asm.uk).apply(null, arguments);
    };
    var _0x4f74e2 = _0x1d435e.dynCall_vi = function () {
      return (_0x4f74e2 = _0x1d435e.dynCall_vi = _0x1d435e.asm.vk).apply(null, arguments);
    };
    var _0x177f95 = _0x1d435e.dynCall_iiiii = function () {
      return (_0x177f95 = _0x1d435e.dynCall_iiiii = _0x1d435e.asm.wk).apply(null, arguments);
    };
    var _0x3e4226 = _0x1d435e.dynCall_viii = function () {
      return (_0x3e4226 = _0x1d435e.dynCall_viii = _0x1d435e.asm.xk).apply(null, arguments);
    };
    var _0x5d5381 = _0x1d435e.dynCall_v = function () {
      return (_0x5d5381 = _0x1d435e.dynCall_v = _0x1d435e.asm.yk).apply(null, arguments);
    };
    var _0x2ae5b1 = _0x1d435e.dynCall_viiiiii = function () {
      return (_0x2ae5b1 = _0x1d435e.dynCall_viiiiii = _0x1d435e.asm.zk).apply(null, arguments);
    };
    var _0x44836f = _0x1d435e.dynCall_viiiii = function () {
      return (_0x44836f = _0x1d435e.dynCall_viiiii = _0x1d435e.asm.Ak).apply(null, arguments);
    };
    var _0x5f341a = _0x1d435e.dynCall_viiii = function () {
      return (_0x5f341a = _0x1d435e.dynCall_viiii = _0x1d435e.asm.Bk).apply(null, arguments);
    };
    var _0x3accf8 = _0x1d435e.dynCall_iiiiii = function () {
      return (_0x3accf8 = _0x1d435e.dynCall_iiiiii = _0x1d435e.asm.Ck).apply(null, arguments);
    };
    var _0x519f64 = _0x1d435e.dynCall_i = function () {
      return (_0x519f64 = _0x1d435e.dynCall_i = _0x1d435e.asm.Dk).apply(null, arguments);
    };
    var _0x1b9782 = _0x1d435e.dynCall_iiiiiiii = function () {
      return (_0x1b9782 = _0x1d435e.dynCall_iiiiiiii = _0x1d435e.asm.Ek).apply(null, arguments);
    };
    var _0x205f9d = _0x1d435e.dynCall_iiijiii = function () {
      return (_0x205f9d = _0x1d435e.dynCall_iiijiii = _0x1d435e.asm.Fk).apply(null, arguments);
    };
    var _0x99dfb2 = _0x1d435e.dynCall_iij = function () {
      return (_0x99dfb2 = _0x1d435e.dynCall_iij = _0x1d435e.asm.Gk).apply(null, arguments);
    };
    var _0x125c4e = _0x1d435e.dynCall_iiiiiii = function () {
      return (_0x125c4e = _0x1d435e.dynCall_iiiiiii = _0x1d435e.asm.Hk).apply(null, arguments);
    };
    var _0xec2d23 = _0x1d435e.dynCall_jii = function () {
      return (_0xec2d23 = _0x1d435e.dynCall_jii = _0x1d435e.asm.Ik).apply(null, arguments);
    };
    var _0x4178d8 = _0x1d435e.dynCall_viiiiiiii = function () {
      return (_0x4178d8 = _0x1d435e.dynCall_viiiiiiii = _0x1d435e.asm.Jk).apply(null, arguments);
    };
    var _0x11cd53 = _0x1d435e.dynCall_iiiifii = function () {
      return (_0x11cd53 = _0x1d435e.dynCall_iiiifii = _0x1d435e.asm.Kk).apply(null, arguments);
    };
    var _0x53ec33 = _0x1d435e.dynCall_iiiijii = function () {
      return (_0x53ec33 = _0x1d435e.dynCall_iiiijii = _0x1d435e.asm.Lk).apply(null, arguments);
    };
    var _0xbcd887 = _0x1d435e.dynCall_viji = function () {
      return (_0xbcd887 = _0x1d435e.dynCall_viji = _0x1d435e.asm.Mk).apply(null, arguments);
    };
    var _0x2d9fd8 = _0x1d435e.dynCall_viiji = function () {
      return (_0x2d9fd8 = _0x1d435e.dynCall_viiji = _0x1d435e.asm.Nk).apply(null, arguments);
    };
    var _0x3e8f7f = _0x1d435e.dynCall_iiifii = function () {
      return (_0x3e8f7f = _0x1d435e.dynCall_iiifii = _0x1d435e.asm.Ok).apply(null, arguments);
    };
    var _0x2a046e = _0x1d435e.dynCall_viifi = function () {
      return (_0x2a046e = _0x1d435e.dynCall_viifi = _0x1d435e.asm.Pk).apply(null, arguments);
    };
    var _0x110b49 = _0x1d435e.dynCall_viiiiiii = function () {
      return (_0x110b49 = _0x1d435e.dynCall_viiiiiii = _0x1d435e.asm.Qk).apply(null, arguments);
    };
    var _0x2027f1 = _0x1d435e.dynCall_viijji = function () {
      return (_0x2027f1 = _0x1d435e.dynCall_viijji = _0x1d435e.asm.Rk).apply(null, arguments);
    };
    var _0x1483b8 = _0x1d435e.dynCall_ji = function () {
      return (_0x1483b8 = _0x1d435e.dynCall_ji = _0x1d435e.asm.Sk).apply(null, arguments);
    };
    var _0x5505d6 = _0x1d435e.dynCall_jdi = function () {
      return (_0x5505d6 = _0x1d435e.dynCall_jdi = _0x1d435e.asm.Tk).apply(null, arguments);
    };
    var _0x2586c3 = _0x1d435e.dynCall_vijiii = function () {
      return (_0x2586c3 = _0x1d435e.dynCall_vijiii = _0x1d435e.asm.Uk).apply(null, arguments);
    };
    var _0x165a61 = _0x1d435e.dynCall_ijiii = function () {
      return (_0x165a61 = _0x1d435e.dynCall_ijiii = _0x1d435e.asm.Vk).apply(null, arguments);
    };
    var _0x35f57c = _0x1d435e.dynCall_iiji = function () {
      return (_0x35f57c = _0x1d435e.dynCall_iiji = _0x1d435e.asm.Wk).apply(null, arguments);
    };
    var _0x43b84b = _0x1d435e.dynCall_jji = function () {
      return (_0x43b84b = _0x1d435e.dynCall_jji = _0x1d435e.asm.Xk).apply(null, arguments);
    };
    var _0x3e2592 = _0x1d435e.dynCall_iiiidii = function () {
      return (_0x3e2592 = _0x1d435e.dynCall_iiiidii = _0x1d435e.asm.Yk).apply(null, arguments);
    };
    var _0x9817c3 = _0x1d435e.dynCall_vifi = function () {
      return (_0x9817c3 = _0x1d435e.dynCall_vifi = _0x1d435e.asm.Zk).apply(null, arguments);
    };
    var _0x5ec3ff = _0x1d435e.dynCall_fiii = function () {
      return (_0x5ec3ff = _0x1d435e.dynCall_fiii = _0x1d435e.asm._k).apply(null, arguments);
    };
    var _0x9f9584 = _0x1d435e.dynCall_fii = function () {
      return (_0x9f9584 = _0x1d435e.dynCall_fii = _0x1d435e.asm.$k).apply(null, arguments);
    };
    var _0x2974b1 = _0x1d435e.dynCall_viiiifi = function () {
      return (_0x2974b1 = _0x1d435e.dynCall_viiiifi = _0x1d435e.asm.al).apply(null, arguments);
    };
    var _0x2f6eb9 = _0x1d435e.dynCall_jiiijii = function () {
      return (_0x2f6eb9 = _0x1d435e.dynCall_jiiijii = _0x1d435e.asm.bl).apply(null, arguments);
    };
    var _0x477b45 = _0x1d435e.dynCall_viiijiii = function () {
      return (_0x477b45 = _0x1d435e.dynCall_viiijiii = _0x1d435e.asm.cl).apply(null, arguments);
    };
    var _0x2a40e0 = _0x1d435e.dynCall_fiffffi = function () {
      return (_0x2a40e0 = _0x1d435e.dynCall_fiffffi = _0x1d435e.asm.dl).apply(null, arguments);
    };
    var _0x42d47f = _0x1d435e.dynCall_jiii = function () {
      return (_0x42d47f = _0x1d435e.dynCall_jiii = _0x1d435e.asm.el).apply(null, arguments);
    };
    var _0x4458e3 = _0x1d435e.dynCall_ddiii = function () {
      return (_0x4458e3 = _0x1d435e.dynCall_ddiii = _0x1d435e.asm.fl).apply(null, arguments);
    };
    var _0x361ebc = _0x1d435e.dynCall_vifii = function () {
      return (_0x361ebc = _0x1d435e.dynCall_vifii = _0x1d435e.asm.gl).apply(null, arguments);
    };
    var _0x7792d7 = _0x1d435e.dynCall_fi = function () {
      return (_0x7792d7 = _0x1d435e.dynCall_fi = _0x1d435e.asm.hl).apply(null, arguments);
    };
    var _0x482b8b = _0x1d435e.dynCall_fffi = function () {
      return (_0x482b8b = _0x1d435e.dynCall_fffi = _0x1d435e.asm.il).apply(null, arguments);
    };
    var _0x2e8336 = _0x1d435e.dynCall_iiifi = function () {
      return (_0x2e8336 = _0x1d435e.dynCall_iiifi = _0x1d435e.asm.jl).apply(null, arguments);
    };
    var _0x313026 = _0x1d435e.dynCall_iiijii = function () {
      return (_0x313026 = _0x1d435e.dynCall_iiijii = _0x1d435e.asm.kl).apply(null, arguments);
    };
    var _0x1611de = _0x1d435e.dynCall_iiifiii = function () {
      return (_0x1611de = _0x1d435e.dynCall_iiifiii = _0x1d435e.asm.ll).apply(null, arguments);
    };
    var _0x1ebafb = _0x1d435e.dynCall_iiffii = function () {
      return (_0x1ebafb = _0x1d435e.dynCall_iiffii = _0x1d435e.asm.ml).apply(null, arguments);
    };
    var _0x305f09 = _0x1d435e.dynCall_iifi = function () {
      return (_0x305f09 = _0x1d435e.dynCall_iifi = _0x1d435e.asm.nl).apply(null, arguments);
    };
    var _0x3aabb8 = _0x1d435e.dynCall_dii = function () {
      return (_0x3aabb8 = _0x1d435e.dynCall_dii = _0x1d435e.asm.ol).apply(null, arguments);
    };
    var _0x2bd259 = _0x1d435e.dynCall_iiiifi = function () {
      return (_0x2bd259 = _0x1d435e.dynCall_iiiifi = _0x1d435e.asm.pl).apply(null, arguments);
    };
    var _0x3f30f4 = _0x1d435e.dynCall_ifi = function () {
      return (_0x3f30f4 = _0x1d435e.dynCall_ifi = _0x1d435e.asm.ql).apply(null, arguments);
    };
    var _0x3cab2b = _0x1d435e.dynCall_vidi = function () {
      return (_0x3cab2b = _0x1d435e.dynCall_vidi = _0x1d435e.asm.rl).apply(null, arguments);
    };
    var _0x4d323f = _0x1d435e.dynCall_viifii = function () {
      return (_0x4d323f = _0x1d435e.dynCall_viifii = _0x1d435e.asm.sl).apply(null, arguments);
    };
    var _0x16f210 = _0x1d435e.dynCall_jjji = function () {
      return (_0x16f210 = _0x1d435e.dynCall_jjji = _0x1d435e.asm.tl).apply(null, arguments);
    };
    var _0x38bba6 = _0x1d435e.dynCall_ijji = function () {
      return (_0x38bba6 = _0x1d435e.dynCall_ijji = _0x1d435e.asm.ul).apply(null, arguments);
    };
    var _0x4322d4 = _0x1d435e.dynCall_jiiii = function () {
      return (_0x4322d4 = _0x1d435e.dynCall_jiiii = _0x1d435e.asm.vl).apply(null, arguments);
    };
    var _0x194c4b = _0x1d435e.dynCall_jidi = function () {
      return (_0x194c4b = _0x1d435e.dynCall_jidi = _0x1d435e.asm.wl).apply(null, arguments);
    };
    var _0x29e875 = _0x1d435e.dynCall_vijii = function () {
      return (_0x29e875 = _0x1d435e.dynCall_vijii = _0x1d435e.asm.xl).apply(null, arguments);
    };
    var _0xbd7545 = _0x1d435e.dynCall_iijii = function () {
      return (_0xbd7545 = _0x1d435e.dynCall_iijii = _0x1d435e.asm.yl).apply(null, arguments);
    };
    var _0x376e57 = _0x1d435e.dynCall_viiiijiii = function () {
      return (_0x376e57 = _0x1d435e.dynCall_viiiijiii = _0x1d435e.asm.zl).apply(null, arguments);
    };
    var _0x5e4b00 = _0x1d435e.dynCall_viiiiiiiiiiii = function () {
      return (_0x5e4b00 = _0x1d435e.dynCall_viiiiiiiiiiii = _0x1d435e.asm.Al).apply(null, arguments);
    };
    var _0x169616 = _0x1d435e.dynCall_viiiiiiiiiiiii = function () {
      return (_0x169616 = _0x1d435e.dynCall_viiiiiiiiiiiii = _0x1d435e.asm.Bl).apply(null, arguments);
    };
    var _0x4fe4ea = _0x1d435e.dynCall_viiiiiiiiiiiiii = function () {
      return (_0x4fe4ea = _0x1d435e.dynCall_viiiiiiiiiiiiii = _0x1d435e.asm.Cl).apply(null, arguments);
    };
    var _0x265ec9 = _0x1d435e.dynCall_viiiiiiiiiiiiiii = function () {
      return (_0x265ec9 = _0x1d435e.dynCall_viiiiiiiiiiiiiii = _0x1d435e.asm.Dl).apply(null, arguments);
    };
    var _0x2c26da = _0x1d435e.dynCall_viiiiiiiiiiiiiiii = function () {
      return (_0x2c26da = _0x1d435e.dynCall_viiiiiiiiiiiiiiii = _0x1d435e.asm.El).apply(null, arguments);
    };
    var _0x52f7f6 = _0x1d435e.dynCall_viiiiiiiiiiiiiiiii = function () {
      return (_0x52f7f6 = _0x1d435e.dynCall_viiiiiiiiiiiiiiiii = _0x1d435e.asm.Fl).apply(null, arguments);
    };
    var _0x3ef723 = _0x1d435e.dynCall_viiiiiiiiiiiiiiiiii = function () {
      return (_0x3ef723 = _0x1d435e.dynCall_viiiiiiiiiiiiiiiiii = _0x1d435e.asm.Gl).apply(null, arguments);
    };
    var _0x2de7ec = _0x1d435e.dynCall_viidi = function () {
      return (_0x2de7ec = _0x1d435e.dynCall_viidi = _0x1d435e.asm.Hl).apply(null, arguments);
    };
    var _0x2e4216 = _0x1d435e.dynCall_viiidi = function () {
      return (_0x2e4216 = _0x1d435e.dynCall_viiidi = _0x1d435e.asm.Il).apply(null, arguments);
    };
    var _0x1a6802 = _0x1d435e.dynCall_viiiji = function () {
      return (_0x1a6802 = _0x1d435e.dynCall_viiiji = _0x1d435e.asm.Jl).apply(null, arguments);
    };
    var _0x4a95f1 = _0x1d435e.dynCall_viiifi = function () {
      return (_0x4a95f1 = _0x1d435e.dynCall_viiifi = _0x1d435e.asm.Kl).apply(null, arguments);
    };
    var _0x557e00 = _0x1d435e.dynCall_vijijii = function () {
      return (_0x557e00 = _0x1d435e.dynCall_vijijii = _0x1d435e.asm.Ll).apply(null, arguments);
    };
    var _0x4e7f51 = _0x1d435e.dynCall_viiiiiiiii = function () {
      return (_0x4e7f51 = _0x1d435e.dynCall_viiiiiiiii = _0x1d435e.asm.Ml).apply(null, arguments);
    };
    var _0x329ab8 = _0x1d435e.dynCall_viiiiiiiiii = function () {
      return (_0x329ab8 = _0x1d435e.dynCall_viiiiiiiiii = _0x1d435e.asm.Nl).apply(null, arguments);
    };
    var _0x54aef9 = _0x1d435e.dynCall_viiiiiiiiiii = function () {
      return (_0x54aef9 = _0x1d435e.dynCall_viiiiiiiiiii = _0x1d435e.asm.Ol).apply(null, arguments);
    };
    var _0x1892ea = _0x1d435e.dynCall_iiiiiiiiii = function () {
      return (_0x1892ea = _0x1d435e.dynCall_iiiiiiiiii = _0x1d435e.asm.Pl).apply(null, arguments);
    };
    var _0x5ecad9 = _0x1d435e.dynCall_iiiiiiiii = function () {
      return (_0x5ecad9 = _0x1d435e.dynCall_iiiiiiiii = _0x1d435e.asm.Ql).apply(null, arguments);
    };
    var _0x4b4d28 = _0x1d435e.dynCall_jjii = function () {
      return (_0x4b4d28 = _0x1d435e.dynCall_jjii = _0x1d435e.asm.Rl).apply(null, arguments);
    };
    var _0x4d24d4 = _0x1d435e.dynCall_diii = function () {
      return (_0x4d24d4 = _0x1d435e.dynCall_diii = _0x1d435e.asm.Sl).apply(null, arguments);
    };
    var _0x314952 = _0x1d435e.dynCall_iidi = function () {
      return (_0x314952 = _0x1d435e.dynCall_iidi = _0x1d435e.asm.Tl).apply(null, arguments);
    };
    var _0x5dfc94 = _0x1d435e.dynCall_diiii = function () {
      return (_0x5dfc94 = _0x1d435e.dynCall_diiii = _0x1d435e.asm.Ul).apply(null, arguments);
    };
    var _0x1a04fa = _0x1d435e.dynCall_dddi = function () {
      return (_0x1a04fa = _0x1d435e.dynCall_dddi = _0x1d435e.asm.Vl).apply(null, arguments);
    };
    var _0x221864 = _0x1d435e.dynCall_idi = function () {
      return (_0x221864 = _0x1d435e.dynCall_idi = _0x1d435e.asm.Wl).apply(null, arguments);
    };
    var _0x48fd04 = _0x1d435e.dynCall_iiiji = function () {
      return (_0x48fd04 = _0x1d435e.dynCall_iiiji = _0x1d435e.asm.Xl).apply(null, arguments);
    };
    var _0x5cce37 = _0x1d435e.dynCall_iijiii = function () {
      return (_0x5cce37 = _0x1d435e.dynCall_iijiii = _0x1d435e.asm.Yl).apply(null, arguments);
    };
    var _0x26ffac = _0x1d435e.dynCall_vijjji = function () {
      return (_0x26ffac = _0x1d435e.dynCall_vijjji = _0x1d435e.asm.Zl).apply(null, arguments);
    };
    var _0x95cda1 = _0x1d435e.dynCall_viijiiijiiii = function () {
      return (_0x95cda1 = _0x1d435e.dynCall_viijiiijiiii = _0x1d435e.asm._l).apply(null, arguments);
    };
    var _0x976968 = _0x1d435e.dynCall_iiiiij = function () {
      return (_0x976968 = _0x1d435e.dynCall_iiiiij = _0x1d435e.asm.$l).apply(null, arguments);
    };
    var _0x79a2f = _0x1d435e.dynCall_iijiiii = function () {
      return (_0x79a2f = _0x1d435e.dynCall_iijiiii = _0x1d435e.asm.am).apply(null, arguments);
    };
    var _0xf3c031 = _0x1d435e.dynCall_jijiii = function () {
      return (_0xf3c031 = _0x1d435e.dynCall_jijiii = _0x1d435e.asm.bm).apply(null, arguments);
    };
    var _0x137ef5 = _0x1d435e.dynCall_viijii = function () {
      return (_0x137ef5 = _0x1d435e.dynCall_viijii = _0x1d435e.asm.cm).apply(null, arguments);
    };
    var _0x596246 = _0x1d435e.dynCall_iijiiiiii = function () {
      return (_0x596246 = _0x1d435e.dynCall_iijiiiiii = _0x1d435e.asm.dm).apply(null, arguments);
    };
    var _0x235600 = _0x1d435e.dynCall_iijjiiiiii = function () {
      return (_0x235600 = _0x1d435e.dynCall_iijjiiiiii = _0x1d435e.asm.em).apply(null, arguments);
    };
    var _0x21ae63 = _0x1d435e.dynCall_iiiijjii = function () {
      return (_0x21ae63 = _0x1d435e.dynCall_iiiijjii = _0x1d435e.asm.fm).apply(null, arguments);
    };
    var _0x4add67 = _0x1d435e.dynCall_j = function () {
      return (_0x4add67 = _0x1d435e.dynCall_j = _0x1d435e.asm.gm).apply(null, arguments);
    };
    var _0x553e96 = _0x1d435e.dynCall_iiiiiiiiiji = function () {
      return (_0x553e96 = _0x1d435e.dynCall_iiiiiiiiiji = _0x1d435e.asm.hm).apply(null, arguments);
    };
    var _0x2fe9fc = _0x1d435e.dynCall_vji = function () {
      return (_0x2fe9fc = _0x1d435e.dynCall_vji = _0x1d435e.asm.im).apply(null, arguments);
    };
    var _0x553bb8 = _0x1d435e.dynCall_iiiiji = function () {
      return (_0x553bb8 = _0x1d435e.dynCall_iiiiji = _0x1d435e.asm.jm).apply(null, arguments);
    };
    var _0x481e77 = _0x1d435e.dynCall_viiiifii = function () {
      return (_0x481e77 = _0x1d435e.dynCall_viiiifii = _0x1d435e.asm.km).apply(null, arguments);
    };
    var _0x2f9847 = _0x1d435e.dynCall_viiffi = function () {
      return (_0x2f9847 = _0x1d435e.dynCall_viiffi = _0x1d435e.asm.lm).apply(null, arguments);
    };
    var _0x2c3b66 = _0x1d435e.dynCall_fiiii = function () {
      return (_0x2c3b66 = _0x1d435e.dynCall_fiiii = _0x1d435e.asm.mm).apply(null, arguments);
    };
    var _0x378a90 = _0x1d435e.dynCall_dji = function () {
      return (_0x378a90 = _0x1d435e.dynCall_dji = _0x1d435e.asm.nm).apply(null, arguments);
    };
    var _0x120b83 = _0x1d435e.dynCall_iji = function () {
      return (_0x120b83 = _0x1d435e.dynCall_iji = _0x1d435e.asm.om).apply(null, arguments);
    };
    var _0x52c9fb = _0x1d435e.dynCall_fiiffi = function () {
      return (_0x52c9fb = _0x1d435e.dynCall_fiiffi = _0x1d435e.asm.pm).apply(null, arguments);
    };
    var _0x4d248a = _0x1d435e.dynCall_viiififii = function () {
      return (_0x4d248a = _0x1d435e.dynCall_viiififii = _0x1d435e.asm.qm).apply(null, arguments);
    };
    var _0x58e6c3 = _0x1d435e.dynCall_iifiii = function () {
      return (_0x58e6c3 = _0x1d435e.dynCall_iifiii = _0x1d435e.asm.rm).apply(null, arguments);
    };
    var _0x316047 = _0x1d435e.dynCall_viiiiiiiiiiiiiiiiiii = function () {
      return (_0x316047 = _0x1d435e.dynCall_viiiiiiiiiiiiiiiiiii = _0x1d435e.asm.sm).apply(null, arguments);
    };
    var _0xae7418 = _0x1d435e.dynCall_didi = function () {
      return (_0xae7418 = _0x1d435e.dynCall_didi = _0x1d435e.asm.tm).apply(null, arguments);
    };
    var _0xebda19 = _0x1d435e.dynCall_fifi = function () {
      return (_0xebda19 = _0x1d435e.dynCall_fifi = _0x1d435e.asm.um).apply(null, arguments);
    };
    var _0x2b7974 = _0x1d435e.dynCall_iiddi = function () {
      return (_0x2b7974 = _0x1d435e.dynCall_iiddi = _0x1d435e.asm.vm).apply(null, arguments);
    };
    var _0x58d06a = _0x1d435e.dynCall_diidi = function () {
      return (_0x58d06a = _0x1d435e.dynCall_diidi = _0x1d435e.asm.wm).apply(null, arguments);
    };
    var _0x51a8a8 = _0x1d435e.dynCall_jiiji = function () {
      return (_0x51a8a8 = _0x1d435e.dynCall_jiiji = _0x1d435e.asm.xm).apply(null, arguments);
    };
    var _0x2c20c7 = _0x1d435e.dynCall_fiifi = function () {
      return (_0x2c20c7 = _0x1d435e.dynCall_fiifi = _0x1d435e.asm.ym).apply(null, arguments);
    };
    var _0x1c8540 = _0x1d435e.dynCall_iiffi = function () {
      return (_0x1c8540 = _0x1d435e.dynCall_iiffi = _0x1d435e.asm.zm).apply(null, arguments);
    };
    var _0x2217d0 = _0x1d435e.dynCall_iijji = function () {
      return (_0x2217d0 = _0x1d435e.dynCall_iijji = _0x1d435e.asm.Am).apply(null, arguments);
    };
    var _0x18fef6 = _0x1d435e.dynCall_vjjjiiii = function () {
      return (_0x18fef6 = _0x1d435e.dynCall_vjjjiiii = _0x1d435e.asm.Bm).apply(null, arguments);
    };
    var _0x523c51 = _0x1d435e.dynCall_vjiiiii = function () {
      return (_0x523c51 = _0x1d435e.dynCall_vjiiiii = _0x1d435e.asm.Cm).apply(null, arguments);
    };
    var _0x9e9cba = _0x1d435e.dynCall_jijii = function () {
      return (_0x9e9cba = _0x1d435e.dynCall_jijii = _0x1d435e.asm.Dm).apply(null, arguments);
    };
    var _0x57fc33 = _0x1d435e.dynCall_jiiiii = function () {
      return (_0x57fc33 = _0x1d435e.dynCall_jiiiii = _0x1d435e.asm.Em).apply(null, arguments);
    };
    var _0x6b7a30 = _0x1d435e.dynCall_vjiii = function () {
      return (_0x6b7a30 = _0x1d435e.dynCall_vjiii = _0x1d435e.asm.Fm).apply(null, arguments);
    };
    var _0x1b83a5 = _0x1d435e.dynCall_iifii = function () {
      return (_0x1b83a5 = _0x1d435e.dynCall_iifii = _0x1d435e.asm.Gm).apply(null, arguments);
    };
    var _0x515714 = _0x1d435e.dynCall_vfii = function () {
      return (_0x515714 = _0x1d435e.dynCall_vfii = _0x1d435e.asm.Hm).apply(null, arguments);
    };
    var _0x3d6f91 = _0x1d435e.dynCall_vifiii = function () {
      return (_0x3d6f91 = _0x1d435e.dynCall_vifiii = _0x1d435e.asm.Im).apply(null, arguments);
    };
    var _0x20f816 = _0x1d435e.dynCall_viffiii = function () {
      return (_0x20f816 = _0x1d435e.dynCall_viffiii = _0x1d435e.asm.Jm).apply(null, arguments);
    };
    var _0x4e9406 = _0x1d435e.dynCall_viiiiifi = function () {
      return (_0x4e9406 = _0x1d435e.dynCall_viiiiifi = _0x1d435e.asm.Km).apply(null, arguments);
    };
    var _0xf084ab = _0x1d435e.dynCall_viiifiii = function () {
      return (_0xf084ab = _0x1d435e.dynCall_viiifiii = _0x1d435e.asm.Lm).apply(null, arguments);
    };
    var _0x482957 = _0x1d435e.dynCall_vfiiiii = function () {
      return (_0x482957 = _0x1d435e.dynCall_vfiiiii = _0x1d435e.asm.Mm).apply(null, arguments);
    };
    var _0x37c3e0 = _0x1d435e.dynCall_vffffiiii = function () {
      return (_0x37c3e0 = _0x1d435e.dynCall_vffffiiii = _0x1d435e.asm.Nm).apply(null, arguments);
    };
    var _0x26aa8e = _0x1d435e.dynCall_iiiffi = function () {
      return (_0x26aa8e = _0x1d435e.dynCall_iiiffi = _0x1d435e.asm.Om).apply(null, arguments);
    };
    var _0x366a9b = _0x1d435e.dynCall_iiififii = function () {
      return (_0x366a9b = _0x1d435e.dynCall_iiififii = _0x1d435e.asm.Pm).apply(null, arguments);
    };
    var _0x4ee470 = _0x1d435e.dynCall_iiifiiiii = function () {
      return (_0x4ee470 = _0x1d435e.dynCall_iiifiiiii = _0x1d435e.asm.Qm).apply(null, arguments);
    };
    var _0x44682c = _0x1d435e.dynCall_iiffifiiii = function () {
      return (_0x44682c = _0x1d435e.dynCall_iiffifiiii = _0x1d435e.asm.Rm).apply(null, arguments);
    };
    var _0x3ee644 = _0x1d435e.dynCall_iifiifiiii = function () {
      return (_0x3ee644 = _0x1d435e.dynCall_iifiifiiii = _0x1d435e.asm.Sm).apply(null, arguments);
    };
    var _0x4c4c92 = _0x1d435e.dynCall_iiiifiii = function () {
      return (_0x4c4c92 = _0x1d435e.dynCall_iiiifiii = _0x1d435e.asm.Tm).apply(null, arguments);
    };
    var _0x398b1f = _0x1d435e.dynCall_iiifiiii = function () {
      return (_0x398b1f = _0x1d435e.dynCall_iiifiiii = _0x1d435e.asm.Um).apply(null, arguments);
    };
    var _0x1a1efe = _0x1d435e.dynCall_iiiffiii = function () {
      return (_0x1a1efe = _0x1d435e.dynCall_iiiffiii = _0x1d435e.asm.Vm).apply(null, arguments);
    };
    var _0x468898 = _0x1d435e.dynCall_iiiiifii = function () {
      return (_0x468898 = _0x1d435e.dynCall_iiiiifii = _0x1d435e.asm.Wm).apply(null, arguments);
    };
    var _0xc7170 = _0x1d435e.dynCall_iifiifffii = function () {
      return (_0xc7170 = _0x1d435e.dynCall_iifiifffii = _0x1d435e.asm.Xm).apply(null, arguments);
    };
    var _0x554860 = _0x1d435e.dynCall_viffi = function () {
      return (_0x554860 = _0x1d435e.dynCall_viffi = _0x1d435e.asm.Ym).apply(null, arguments);
    };
    var _0x5020b1 = _0x1d435e.dynCall_fiffi = function () {
      return (_0x5020b1 = _0x1d435e.dynCall_fiffi = _0x1d435e.asm.Zm).apply(null, arguments);
    };
    var _0x49d9bc = _0x1d435e.dynCall_viiifii = function () {
      return (_0x49d9bc = _0x1d435e.dynCall_viiifii = _0x1d435e.asm._m).apply(null, arguments);
    };
    var _0x2c0677 = _0x1d435e.dynCall_iiiiffi = function () {
      return (_0x2c0677 = _0x1d435e.dynCall_iiiiffi = _0x1d435e.asm.$m).apply(null, arguments);
    };
    var _0x23ddbd = _0x1d435e.dynCall_viifffi = function () {
      return (_0x23ddbd = _0x1d435e.dynCall_viifffi = _0x1d435e.asm.an).apply(null, arguments);
    };
    var _0x5de383 = _0x1d435e.dynCall_viiiffii = function () {
      return (_0x5de383 = _0x1d435e.dynCall_viiiffii = _0x1d435e.asm.bn).apply(null, arguments);
    };
    var _0x3dd3d4 = _0x1d435e.dynCall_viiifffiii = function () {
      return (_0x3dd3d4 = _0x1d435e.dynCall_viiifffiii = _0x1d435e.asm.cn).apply(null, arguments);
    };
    var _0x459f25 = _0x1d435e.dynCall_viiififfi = function () {
      return (_0x459f25 = _0x1d435e.dynCall_viiififfi = _0x1d435e.asm.dn).apply(null, arguments);
    };
    var _0x5afc83 = _0x1d435e.dynCall_viiififfiffi = function () {
      return (_0x5afc83 = _0x1d435e.dynCall_viiififfiffi = _0x1d435e.asm.en).apply(null, arguments);
    };
    var _0x1df143 = _0x1d435e.dynCall_viiiififi = function () {
      return (_0x1df143 = _0x1d435e.dynCall_viiiififi = _0x1d435e.asm.fn).apply(null, arguments);
    };
    var _0x208fbc = _0x1d435e.dynCall_ijii = function () {
      return (_0x208fbc = _0x1d435e.dynCall_ijii = _0x1d435e.asm.gn).apply(null, arguments);
    };
    var _0x373cef = _0x1d435e.dynCall_iifffi = function () {
      return (_0x373cef = _0x1d435e.dynCall_iifffi = _0x1d435e.asm.hn).apply(null, arguments);
    };
    var _0x1cbdd2 = _0x1d435e.dynCall_iiffffi = function () {
      return (_0x1cbdd2 = _0x1d435e.dynCall_iiffffi = _0x1d435e.asm.jn).apply(null, arguments);
    };
    var _0xa6e44e = _0x1d435e.dynCall_fdfii = function () {
      return (_0xa6e44e = _0x1d435e.dynCall_fdfii = _0x1d435e.asm.kn).apply(null, arguments);
    };
    var _0x264cb3 = _0x1d435e.dynCall_fdii = function () {
      return (_0x264cb3 = _0x1d435e.dynCall_fdii = _0x1d435e.asm.ln).apply(null, arguments);
    };
    var _0x512ab3 = _0x1d435e.dynCall_fdiii = function () {
      return (_0x512ab3 = _0x1d435e.dynCall_fdiii = _0x1d435e.asm.mn).apply(null, arguments);
    };
    var _0x25ae4d = _0x1d435e.dynCall_fdi = function () {
      return (_0x25ae4d = _0x1d435e.dynCall_fdi = _0x1d435e.asm.nn).apply(null, arguments);
    };
    var _0x584b3d = _0x1d435e.dynCall_fdddi = function () {
      return (_0x584b3d = _0x1d435e.dynCall_fdddi = _0x1d435e.asm.on).apply(null, arguments);
    };
    var _0xb8cd8a = _0x1d435e.dynCall_didddi = function () {
      return (_0xb8cd8a = _0x1d435e.dynCall_didddi = _0x1d435e.asm.pn).apply(null, arguments);
    };
    var _0x121bdd = _0x1d435e.dynCall_vfi = function () {
      return (_0x121bdd = _0x1d435e.dynCall_vfi = _0x1d435e.asm.qn).apply(null, arguments);
    };
    var _0x590296 = _0x1d435e.dynCall_viiiijii = function () {
      return (_0x590296 = _0x1d435e.dynCall_viiiijii = _0x1d435e.asm.rn).apply(null, arguments);
    };
    var _0x3e8ca8 = _0x1d435e.dynCall_vifiiii = function () {
      return (_0x3e8ca8 = _0x1d435e.dynCall_vifiiii = _0x1d435e.asm.sn).apply(null, arguments);
    };
    var _0x432a72 = _0x1d435e.dynCall_viiifiiii = function () {
      return (_0x432a72 = _0x1d435e.dynCall_viiifiiii = _0x1d435e.asm.tn).apply(null, arguments);
    };
    var _0x3ec1b5 = _0x1d435e.dynCall_di = function () {
      return (_0x3ec1b5 = _0x1d435e.dynCall_di = _0x1d435e.asm.un).apply(null, arguments);
    };
    var _0x1046e5 = _0x1d435e.dynCall_vifffii = function () {
      return (_0x1046e5 = _0x1d435e.dynCall_vifffii = _0x1d435e.asm.vn).apply(null, arguments);
    };
    var _0x2d7df0 = _0x1d435e.dynCall_vifffiii = function () {
      return (_0x2d7df0 = _0x1d435e.dynCall_vifffiii = _0x1d435e.asm.wn).apply(null, arguments);
    };
    var _0x5637b3 = _0x1d435e.dynCall_vifffiiii = function () {
      return (_0x5637b3 = _0x1d435e.dynCall_vifffiiii = _0x1d435e.asm.xn).apply(null, arguments);
    };
    var _0x2319e4 = _0x1d435e.dynCall_viiiffi = function () {
      return (_0x2319e4 = _0x1d435e.dynCall_viiiffi = _0x1d435e.asm.yn).apply(null, arguments);
    };
    var _0x277d18 = _0x1d435e.dynCall_viiffii = function () {
      return (_0x277d18 = _0x1d435e.dynCall_viiffii = _0x1d435e.asm.zn).apply(null, arguments);
    };
    var _0x28fc88 = _0x1d435e.dynCall_fiifii = function () {
      return (_0x28fc88 = _0x1d435e.dynCall_fiifii = _0x1d435e.asm.An).apply(null, arguments);
    };
    var _0x5a7e18 = _0x1d435e.dynCall_viiiiiifiifiiii = function () {
      return (_0x5a7e18 = _0x1d435e.dynCall_viiiiiifiifiiii = _0x1d435e.asm.Bn).apply(null, arguments);
    };
    var _0x4629f5 = _0x1d435e.dynCall_iiffffiii = function () {
      return (_0x4629f5 = _0x1d435e.dynCall_iiffffiii = _0x1d435e.asm.Cn).apply(null, arguments);
    };
    var _0x5d242c = _0x1d435e.dynCall_vffi = function () {
      return (_0x5d242c = _0x1d435e.dynCall_vffi = _0x1d435e.asm.Dn).apply(null, arguments);
    };
    var _0x3b2ed3 = _0x1d435e.dynCall_iiidfi = function () {
      return (_0x3b2ed3 = _0x1d435e.dynCall_iiidfi = _0x1d435e.asm.En).apply(null, arguments);
    };
    var _0xd58e8f = _0x1d435e.dynCall_iiijfi = function () {
      return (_0xd58e8f = _0x1d435e.dynCall_iiijfi = _0x1d435e.asm.Fn).apply(null, arguments);
    };
    var _0x51eb72 = _0x1d435e.dynCall_iiiffii = function () {
      return (_0x51eb72 = _0x1d435e.dynCall_iiiffii = _0x1d435e.asm.Gn).apply(null, arguments);
    };
    var _0x1e1d40 = _0x1d435e.dynCall_iiiififi = function () {
      return (_0x1e1d40 = _0x1d435e.dynCall_iiiififi = _0x1d435e.asm.Hn).apply(null, arguments);
    };
    var _0xdf967e = _0x1d435e.dynCall_iiiffifiiii = function () {
      return (_0xdf967e = _0x1d435e.dynCall_iiiffifiiii = _0x1d435e.asm.In).apply(null, arguments);
    };
    var _0x7abc46 = _0x1d435e.dynCall_iiifiifiii = function () {
      return (_0x7abc46 = _0x1d435e.dynCall_iiifiifiii = _0x1d435e.asm.Jn).apply(null, arguments);
    };
    var _0x27d82a = _0x1d435e.dynCall_iiifiifiiiii = function () {
      return (_0x27d82a = _0x1d435e.dynCall_iiifiifiiiii = _0x1d435e.asm.Kn).apply(null, arguments);
    };
    var _0x216b3e = _0x1d435e.dynCall_ifii = function () {
      return (_0x216b3e = _0x1d435e.dynCall_ifii = _0x1d435e.asm.Ln).apply(null, arguments);
    };
    var _0xe1a80a = _0x1d435e.dynCall_ifffii = function () {
      return (_0xe1a80a = _0x1d435e.dynCall_ifffii = _0x1d435e.asm.Mn).apply(null, arguments);
    };
    var _0x359a17 = _0x1d435e.dynCall_ffffii = function () {
      return (_0x359a17 = _0x1d435e.dynCall_ffffii = _0x1d435e.asm.Nn).apply(null, arguments);
    };
    var _0x71de1b = _0x1d435e.dynCall_ffffifi = function () {
      return (_0x71de1b = _0x1d435e.dynCall_ffffifi = _0x1d435e.asm.On).apply(null, arguments);
    };
    var _0x55e7fb = _0x1d435e.dynCall_ffffiffi = function () {
      return (_0x55e7fb = _0x1d435e.dynCall_ffffiffi = _0x1d435e.asm.Pn).apply(null, arguments);
    };
    var _0x463274 = _0x1d435e.dynCall_viiififi = function () {
      return (_0x463274 = _0x1d435e.dynCall_viiififi = _0x1d435e.asm.Qn).apply(null, arguments);
    };
    var _0x3b6989 = _0x1d435e.dynCall_ifiii = function () {
      return (_0x3b6989 = _0x1d435e.dynCall_ifiii = _0x1d435e.asm.Rn).apply(null, arguments);
    };
    var _0x4c411c = _0x1d435e.dynCall_iifiiiiii = function () {
      return (_0x4c411c = _0x1d435e.dynCall_iifiiiiii = _0x1d435e.asm.Sn).apply(null, arguments);
    };
    var _0x8aa57f = _0x1d435e.dynCall_iifiiiii = function () {
      return (_0x8aa57f = _0x1d435e.dynCall_iifiiiii = _0x1d435e.asm.Tn).apply(null, arguments);
    };
    var _0x2f55ad = _0x1d435e.dynCall_iiffiiiii = function () {
      return (_0x2f55ad = _0x1d435e.dynCall_iiffiiiii = _0x1d435e.asm.Un).apply(null, arguments);
    };
    var _0x22aff0 = _0x1d435e.dynCall_iiffifiii = function () {
      return (_0x22aff0 = _0x1d435e.dynCall_iiffifiii = _0x1d435e.asm.Vn).apply(null, arguments);
    };
    var _0x5c0837 = _0x1d435e.dynCall_iifiifiii = function () {
      return (_0x5c0837 = _0x1d435e.dynCall_iifiifiii = _0x1d435e.asm.Wn).apply(null, arguments);
    };
    var _0x4662ac = _0x1d435e.dynCall_iififi = function () {
      return (_0x4662ac = _0x1d435e.dynCall_iififi = _0x1d435e.asm.Xn).apply(null, arguments);
    };
    var _0x256eaf = _0x1d435e.dynCall_iiififi = function () {
      return (_0x256eaf = _0x1d435e.dynCall_iiififi = _0x1d435e.asm.Yn).apply(null, arguments);
    };
    var _0x2ec5b1 = _0x1d435e.dynCall_iiiiifiiii = function () {
      return (_0x2ec5b1 = _0x1d435e.dynCall_iiiiifiiii = _0x1d435e.asm.Zn).apply(null, arguments);
    };
    var _0x4bb177 = _0x1d435e.dynCall_viidiii = function () {
      return (_0x4bb177 = _0x1d435e.dynCall_viidiii = _0x1d435e.asm._n).apply(null, arguments);
    };
    var _0xb6fec6 = _0x1d435e.dynCall_fiifdi = function () {
      return (_0xb6fec6 = _0x1d435e.dynCall_fiifdi = _0x1d435e.asm.$n).apply(null, arguments);
    };
    var _0x126456 = _0x1d435e.dynCall_viiiiiifddfiiii = function () {
      return (_0x126456 = _0x1d435e.dynCall_viiiiiifddfiiii = _0x1d435e.asm.ao).apply(null, arguments);
    };
    var _0x4624be = _0x1d435e.dynCall_viijiii = function () {
      return (_0x4624be = _0x1d435e.dynCall_viijiii = _0x1d435e.asm.bo).apply(null, arguments);
    };
    var _0x3418d0 = _0x1d435e.dynCall_fiifji = function () {
      return (_0x3418d0 = _0x1d435e.dynCall_fiifji = _0x1d435e.asm.co).apply(null, arguments);
    };
    var _0x2a80a0 = _0x1d435e.dynCall_viiiiiifjjfiiii = function () {
      return (_0x2a80a0 = _0x1d435e.dynCall_viiiiiifjjfiiii = _0x1d435e.asm.eo).apply(null, arguments);
    };
    var _0x161295 = _0x1d435e.dynCall_viiiifiii = function () {
      return (_0x161295 = _0x1d435e.dynCall_viiiifiii = _0x1d435e.asm.fo).apply(null, arguments);
    };
    var _0x2ad95a = _0x1d435e.dynCall_viifiii = function () {
      return (_0x2ad95a = _0x1d435e.dynCall_viifiii = _0x1d435e.asm.go).apply(null, arguments);
    };
    var _0xf25f33 = _0x1d435e.dynCall_viiiiiiffffiiii = function () {
      return (_0xf25f33 = _0x1d435e.dynCall_viiiiiiffffiiii = _0x1d435e.asm.ho).apply(null, arguments);
    };
    var _0x32a52f = _0x1d435e.dynCall_viifiiii = function () {
      return (_0x32a52f = _0x1d435e.dynCall_viifiiii = _0x1d435e.asm.io).apply(null, arguments);
    };
    var _0x3f86eb = _0x1d435e.dynCall_iiiiifiii = function () {
      return (_0x3f86eb = _0x1d435e.dynCall_iiiiifiii = _0x1d435e.asm.jo).apply(null, arguments);
    };
    var _0x54b00b = _0x1d435e.dynCall_fffffi = function () {
      return (_0x54b00b = _0x1d435e.dynCall_fffffi = _0x1d435e.asm.ko).apply(null, arguments);
    };
    var _0x4ce576 = _0x1d435e.dynCall_fiiffffi = function () {
      return (_0x4ce576 = _0x1d435e.dynCall_fiiffffi = _0x1d435e.asm.lo).apply(null, arguments);
    };
    var _0x269144 = _0x1d435e.dynCall_fffifffi = function () {
      return (_0x269144 = _0x1d435e.dynCall_fffifffi = _0x1d435e.asm.mo).apply(null, arguments);
    };
    var _0x8e621b = _0x1d435e.dynCall_vfiii = function () {
      return (_0x8e621b = _0x1d435e.dynCall_vfiii = _0x1d435e.asm.no).apply(null, arguments);
    };
    var _0x10e8b8 = _0x1d435e.dynCall_ifiiii = function () {
      return (_0x10e8b8 = _0x1d435e.dynCall_ifiiii = _0x1d435e.asm.oo).apply(null, arguments);
    };
    var _0x26aaef = _0x1d435e.dynCall_idiiiii = function () {
      return (_0x26aaef = _0x1d435e.dynCall_idiiiii = _0x1d435e.asm.po).apply(null, arguments);
    };
    var _0x4f93cc = _0x1d435e.dynCall_idiiii = function () {
      return (_0x4f93cc = _0x1d435e.dynCall_idiiii = _0x1d435e.asm.qo).apply(null, arguments);
    };
    var _0x945068 = _0x1d435e.dynCall_idii = function () {
      return (_0x945068 = _0x1d435e.dynCall_idii = _0x1d435e.asm.ro).apply(null, arguments);
    };
    var _0x340cc5 = _0x1d435e.dynCall_vijiiii = function () {
      return (_0x340cc5 = _0x1d435e.dynCall_vijiiii = _0x1d435e.asm.so).apply(null, arguments);
    };
    var _0x5655be = _0x1d435e.dynCall_iiijiiii = function () {
      return (_0x5655be = _0x1d435e.dynCall_iiijiiii = _0x1d435e.asm.to).apply(null, arguments);
    };
    var _0x1f906a = _0x1d435e.dynCall_vjiiii = function () {
      return (_0x1f906a = _0x1d435e.dynCall_vjiiii = _0x1d435e.asm.uo).apply(null, arguments);
    };
    var _0x353ab9 = _0x1d435e.dynCall_iddi = function () {
      return (_0x353ab9 = _0x1d435e.dynCall_iddi = _0x1d435e.asm.vo).apply(null, arguments);
    };
    var _0x9a6b5f = _0x1d435e.dynCall_iiiiiiiiiiii = function () {
      return (_0x9a6b5f = _0x1d435e.dynCall_iiiiiiiiiiii = _0x1d435e.asm.wo).apply(null, arguments);
    };
    var _0x5f2584 = _0x1d435e.dynCall_iiiiiiiiiiiiii = function () {
      return (_0x5f2584 = _0x1d435e.dynCall_iiiiiiiiiiiiii = _0x1d435e.asm.xo).apply(null, arguments);
    };
    var _0x293344 = _0x1d435e.dynCall_viffffi = function () {
      return (_0x293344 = _0x1d435e.dynCall_viffffi = _0x1d435e.asm.yo).apply(null, arguments);
    };
    var _0x3eda61 = _0x1d435e.dynCall_viifiifi = function () {
      return (_0x3eda61 = _0x1d435e.dynCall_viifiifi = _0x1d435e.asm.zo).apply(null, arguments);
    };
    var _0x2b3445 = _0x1d435e.dynCall_vifiifi = function () {
      return (_0x2b3445 = _0x1d435e.dynCall_vifiifi = _0x1d435e.asm.Ao).apply(null, arguments);
    };
    var _0x3948f2 = _0x1d435e.dynCall_viffii = function () {
      return (_0x3948f2 = _0x1d435e.dynCall_viffii = _0x1d435e.asm.Bo).apply(null, arguments);
    };
    var _0x409fdc = _0x1d435e.dynCall_viddfffi = function () {
      return (_0x409fdc = _0x1d435e.dynCall_viddfffi = _0x1d435e.asm.Co).apply(null, arguments);
    };
    var _0x488d13 = _0x1d435e.dynCall_viidfffi = function () {
      return (_0x488d13 = _0x1d435e.dynCall_viidfffi = _0x1d435e.asm.Do).apply(null, arguments);
    };
    var _0x4b9f45 = _0x1d435e.dynCall_vidifffi = function () {
      return (_0x4b9f45 = _0x1d435e.dynCall_vidifffi = _0x1d435e.asm.Eo).apply(null, arguments);
    };
    var _0x24b2e0 = _0x1d435e.dynCall_viiifffi = function () {
      return (_0x24b2e0 = _0x1d435e.dynCall_viiifffi = _0x1d435e.asm.Fo).apply(null, arguments);
    };
    var _0x16f8d9 = _0x1d435e.dynCall_viddi = function () {
      return (_0x16f8d9 = _0x1d435e.dynCall_viddi = _0x1d435e.asm.Go).apply(null, arguments);
    };
    var _0x29ab10 = _0x1d435e.dynCall_vidii = function () {
      return (_0x29ab10 = _0x1d435e.dynCall_vidii = _0x1d435e.asm.Ho).apply(null, arguments);
    };
    var _0x4be721 = _0x1d435e.dynCall_viiiiiiifi = function () {
      return (_0x4be721 = _0x1d435e.dynCall_viiiiiiifi = _0x1d435e.asm.Io).apply(null, arguments);
    };
    var _0x4d2398 = _0x1d435e.dynCall_viidii = function () {
      return (_0x4d2398 = _0x1d435e.dynCall_viidii = _0x1d435e.asm.Jo).apply(null, arguments);
    };
    var _0x55e664 = _0x1d435e.dynCall_iffi = function () {
      return (_0x55e664 = _0x1d435e.dynCall_iffi = _0x1d435e.asm.Ko).apply(null, arguments);
    };
    var _0x23e4a7 = _0x1d435e.dynCall_viiffffi = function () {
      return (_0x23e4a7 = _0x1d435e.dynCall_viiffffi = _0x1d435e.asm.Lo).apply(null, arguments);
    };
    var _0x1a7e85 = _0x1d435e.dynCall_ffffi = function () {
      return (_0x1a7e85 = _0x1d435e.dynCall_ffffi = _0x1d435e.asm.Mo).apply(null, arguments);
    };
    var _0x1c19b3 = _0x1d435e.dynCall_ffi = function () {
      return (_0x1c19b3 = _0x1d435e.dynCall_ffi = _0x1d435e.asm.No).apply(null, arguments);
    };
    var _0x47df79 = _0x1d435e.dynCall_ffii = function () {
      return (_0x47df79 = _0x1d435e.dynCall_ffii = _0x1d435e.asm.Oo).apply(null, arguments);
    };
    var _0x4c8967 = _0x1d435e.dynCall_fiiiii = function () {
      return (_0x4c8967 = _0x1d435e.dynCall_fiiiii = _0x1d435e.asm.Po).apply(null, arguments);
    };
    var _0x5da5cd = _0x1d435e.dynCall_ddddi = function () {
      return (_0x5da5cd = _0x1d435e.dynCall_ddddi = _0x1d435e.asm.Qo).apply(null, arguments);
    };
    var _0x582b96 = _0x1d435e.dynCall_ddi = function () {
      return (_0x582b96 = _0x1d435e.dynCall_ddi = _0x1d435e.asm.Ro).apply(null, arguments);
    };
    var _0xda634f = _0x1d435e.dynCall_iiiiiiiiiii = function () {
      return (_0xda634f = _0x1d435e.dynCall_iiiiiiiiiii = _0x1d435e.asm.So).apply(null, arguments);
    };
    var _0x18b126 = _0x1d435e.dynCall_iiiiiiiiiiiii = function () {
      return (_0x18b126 = _0x1d435e.dynCall_iiiiiiiiiiiii = _0x1d435e.asm.To).apply(null, arguments);
    };
    var _0x2db57a = _0x1d435e.dynCall_iiiiiji = function () {
      return (_0x2db57a = _0x1d435e.dynCall_iiiiiji = _0x1d435e.asm.Uo).apply(null, arguments);
    };
    var _0xdbd903 = _0x1d435e.dynCall_viiijii = function () {
      return (_0xdbd903 = _0x1d435e.dynCall_viiijii = _0x1d435e.asm.Vo).apply(null, arguments);
    };
    var _0x30f15d = _0x1d435e.dynCall_viiiiiji = function () {
      return (_0x30f15d = _0x1d435e.dynCall_viiiiiji = _0x1d435e.asm.Wo).apply(null, arguments);
    };
    var _0x4c5f3e = _0x1d435e.dynCall_ijjiiii = function () {
      return (_0x4c5f3e = _0x1d435e.dynCall_ijjiiii = _0x1d435e.asm.Xo).apply(null, arguments);
    };
    var _0x59fa00 = _0x1d435e.dynCall_vdiiiii = function () {
      return (_0x59fa00 = _0x1d435e.dynCall_vdiiiii = _0x1d435e.asm.Yo).apply(null, arguments);
    };
    var _0x9a50ec = _0x1d435e.dynCall_diiji = function () {
      return (_0x9a50ec = _0x1d435e.dynCall_diiji = _0x1d435e.asm.Zo).apply(null, arguments);
    };
    var _0x53e20e = _0x1d435e.dynCall_vjiiiiiiii = function () {
      return (_0x53e20e = _0x1d435e.dynCall_vjiiiiiiii = _0x1d435e.asm._o).apply(null, arguments);
    };
    var _0x472e53 = _0x1d435e.dynCall_vjiiiiiii = function () {
      return (_0x472e53 = _0x1d435e.dynCall_vjiiiiiii = _0x1d435e.asm.$o).apply(null, arguments);
    };
    var _0x19989b = _0x1d435e.dynCall_ijiiii = function () {
      return (_0x19989b = _0x1d435e.dynCall_ijiiii = _0x1d435e.asm.ap).apply(null, arguments);
    };
    var _0x2b9662 = _0x1d435e.dynCall_iidii = function () {
      return (_0x2b9662 = _0x1d435e.dynCall_iidii = _0x1d435e.asm.bp).apply(null, arguments);
    };
    var _0x3f9062 = _0x1d435e.dynCall_iidiii = function () {
      return (_0x3f9062 = _0x1d435e.dynCall_iidiii = _0x1d435e.asm.cp).apply(null, arguments);
    };
    var _0x42b732 = _0x1d435e.dynCall_diji = function () {
      return (_0x42b732 = _0x1d435e.dynCall_diji = _0x1d435e.asm.dp).apply(null, arguments);
    };
    var _0x5b9fb2 = _0x1d435e.dynCall_fidi = function () {
      return (_0x5b9fb2 = _0x1d435e.dynCall_fidi = _0x1d435e.asm.ep).apply(null, arguments);
    };
    var _0x107889 = _0x1d435e.dynCall_ijjiii = function () {
      return (_0x107889 = _0x1d435e.dynCall_ijjiii = _0x1d435e.asm.fp).apply(null, arguments);
    };
    var _0x2d144b = _0x1d435e.dynCall_iffffi = function () {
      return (_0x2d144b = _0x1d435e.dynCall_iffffi = _0x1d435e.asm.gp).apply(null, arguments);
    };
    var _0x31e58a = _0x1d435e.dynCall_diiiii = function () {
      return (_0x31e58a = _0x1d435e.dynCall_diiiii = _0x1d435e.asm.hp).apply(null, arguments);
    };
    var _0x5660bb = _0x1d435e.dynCall_vijji = function () {
      return (_0x5660bb = _0x1d435e.dynCall_vijji = _0x1d435e.asm.ip).apply(null, arguments);
    };
    var _0x45d233 = _0x1d435e.dynCall_vfffi = function () {
      return (_0x45d233 = _0x1d435e.dynCall_vfffi = _0x1d435e.asm.jp).apply(null, arguments);
    };
    var _0xb0820d = _0x1d435e.dynCall_vifffi = function () {
      return (_0xb0820d = _0x1d435e.dynCall_vifffi = _0x1d435e.asm.kp).apply(null, arguments);
    };
    var _0x29aeb8 = _0x1d435e.dynCall_vffffi = function () {
      return (_0x29aeb8 = _0x1d435e.dynCall_vffffi = _0x1d435e.asm.lp).apply(null, arguments);
    };
    var _0x179ecf = _0x1d435e.dynCall_viiiiffi = function () {
      return (_0x179ecf = _0x1d435e.dynCall_viiiiffi = _0x1d435e.asm.mp).apply(null, arguments);
    };
    var _0x5a5125 = _0x1d435e.dynCall_vffffii = function () {
      return (_0x5a5125 = _0x1d435e.dynCall_vffffii = _0x1d435e.asm.np).apply(null, arguments);
    };
    var _0x2b946d = _0x1d435e.dynCall_fffifi = function () {
      return (_0x2b946d = _0x1d435e.dynCall_fffifi = _0x1d435e.asm.op).apply(null, arguments);
    };
    var _0x2e7190 = _0x1d435e.dynCall_jjjji = function () {
      return (_0x2e7190 = _0x1d435e.dynCall_jjjji = _0x1d435e.asm.pp).apply(null, arguments);
    };
    var _0x1684dc = _0x1d435e.dynCall_iiiifiiiiii = function () {
      return (_0x1684dc = _0x1d435e.dynCall_iiiifiiiiii = _0x1d435e.asm.qp).apply(null, arguments);
    };
    var _0x6e7deb = _0x1d435e.dynCall_iiiifiiiii = function () {
      return (_0x6e7deb = _0x1d435e.dynCall_iiiifiiiii = _0x1d435e.asm.rp).apply(null, arguments);
    };
    var _0x3c4109 = _0x1d435e.dynCall_iiiifiiii = function () {
      return (_0x3c4109 = _0x1d435e.dynCall_iiiifiiii = _0x1d435e.asm.sp).apply(null, arguments);
    };
    var _0x553d03 = _0x1d435e.dynCall_vijjii = function () {
      return (_0x553d03 = _0x1d435e.dynCall_vijjii = _0x1d435e.asm.tp).apply(null, arguments);
    };
    var _0x1fb42d = _0x1d435e.dynCall_viiiiiiiijijiii = function () {
      return (_0x1fb42d = _0x1d435e.dynCall_viiiiiiiijijiii = _0x1d435e.asm.up).apply(null, arguments);
    };
    var _0x456f6e = _0x1d435e.dynCall_viiiififfi = function () {
      return (_0x456f6e = _0x1d435e.dynCall_viiiififfi = _0x1d435e.asm.vp).apply(null, arguments);
    };
    var _0x4ddd99 = _0x1d435e.dynCall_viiiifiifi = function () {
      return (_0x4ddd99 = _0x1d435e.dynCall_viiiifiifi = _0x1d435e.asm.wp).apply(null, arguments);
    };
    var _0x3f0664 = _0x1d435e.dynCall_viiiifiiii = function () {
      return (_0x3f0664 = _0x1d435e.dynCall_viiiifiiii = _0x1d435e.asm.xp).apply(null, arguments);
    };
    var _0x205dec = _0x1d435e.dynCall_viiiifiiiii = function () {
      return (_0x205dec = _0x1d435e.dynCall_viiiifiiiii = _0x1d435e.asm.yp).apply(null, arguments);
    };
    var _0xb4e612 = _0x1d435e.dynCall_viiiifiiiiiiii = function () {
      return (_0xb4e612 = _0x1d435e.dynCall_viiiifiiiiiiii = _0x1d435e.asm.zp).apply(null, arguments);
    };
    var _0x323a9e = _0x1d435e.dynCall_iiiiffiiiiii = function () {
      return (_0x323a9e = _0x1d435e.dynCall_iiiiffiiiiii = _0x1d435e.asm.Ap).apply(null, arguments);
    };
    var _0x4addea = _0x1d435e.dynCall_fifffi = function () {
      return (_0x4addea = _0x1d435e.dynCall_fifffi = _0x1d435e.asm.Bp).apply(null, arguments);
    };
    var _0x2b180e = _0x1d435e.dynCall_fifffiii = function () {
      return (_0x2b180e = _0x1d435e.dynCall_fifffiii = _0x1d435e.asm.Cp).apply(null, arguments);
    };
    var _0x328e0c = _0x1d435e.dynCall_fiffffiiiiii = function () {
      return (_0x328e0c = _0x1d435e.dynCall_fiffffiiiiii = _0x1d435e.asm.Dp).apply(null, arguments);
    };
    var _0x455ad7 = _0x1d435e.dynCall_fiffffii = function () {
      return (_0x455ad7 = _0x1d435e.dynCall_fiffffii = _0x1d435e.asm.Ep).apply(null, arguments);
    };
    var _0x3bd6bc = _0x1d435e.dynCall_viiiiiffii = function () {
      return (_0x3bd6bc = _0x1d435e.dynCall_viiiiiffii = _0x1d435e.asm.Fp).apply(null, arguments);
    };
    var _0x3cb5ad = _0x1d435e.dynCall_ffffiiii = function () {
      return (_0x3cb5ad = _0x1d435e.dynCall_ffffiiii = _0x1d435e.asm.Gp).apply(null, arguments);
    };
    var _0x5005c0 = _0x1d435e.dynCall_viffffiii = function () {
      return (_0x5005c0 = _0x1d435e.dynCall_viffffiii = _0x1d435e.asm.Hp).apply(null, arguments);
    };
    var _0x4583ad = _0x1d435e.dynCall_viffffii = function () {
      return (_0x4583ad = _0x1d435e.dynCall_viffffii = _0x1d435e.asm.Ip).apply(null, arguments);
    };
    var _0x54ef73 = _0x1d435e.dynCall_viiffffiiiiii = function () {
      return (_0x54ef73 = _0x1d435e.dynCall_viiffffiiiiii = _0x1d435e.asm.Jp).apply(null, arguments);
    };
    var _0x2f0d20 = _0x1d435e.dynCall_viiiififii = function () {
      return (_0x2f0d20 = _0x1d435e.dynCall_viiiififii = _0x1d435e.asm.Kp).apply(null, arguments);
    };
    var _0x57f6a4 = _0x1d435e.dynCall_viiififiii = function () {
      return (_0x57f6a4 = _0x1d435e.dynCall_viiififiii = _0x1d435e.asm.Lp).apply(null, arguments);
    };
    var _0x5ef88d = _0x1d435e.dynCall_iiiiifi = function () {
      return (_0x5ef88d = _0x1d435e.dynCall_iiiiifi = _0x1d435e.asm.Mp).apply(null, arguments);
    };
    var _0x505461 = _0x1d435e.dynCall_viiifififfi = function () {
      return (_0x505461 = _0x1d435e.dynCall_viiifififfi = _0x1d435e.asm.Np).apply(null, arguments);
    };
    var _0x443840 = _0x1d435e.dynCall_iiffiii = function () {
      return (_0x443840 = _0x1d435e.dynCall_iiffiii = _0x1d435e.asm.Op).apply(null, arguments);
    };
    var _0x461dc4 = _0x1d435e.dynCall_iiififiii = function () {
      return (_0x461dc4 = _0x1d435e.dynCall_iiififiii = _0x1d435e.asm.Pp).apply(null, arguments);
    };
    var _0x4a5f38 = _0x1d435e.dynCall_iififiii = function () {
      return (_0x4a5f38 = _0x1d435e.dynCall_iififiii = _0x1d435e.asm.Qp).apply(null, arguments);
    };
    var _0x300c20 = _0x1d435e.dynCall_vififfii = function () {
      return (_0x300c20 = _0x1d435e.dynCall_vififfii = _0x1d435e.asm.Rp).apply(null, arguments);
    };
    var _0x10c092 = _0x1d435e.dynCall_iiififiiii = function () {
      return (_0x10c092 = _0x1d435e.dynCall_iiififiiii = _0x1d435e.asm.Sp).apply(null, arguments);
    };
    var _0x68eabe = _0x1d435e.dynCall_vifffffi = function () {
      return (_0x68eabe = _0x1d435e.dynCall_vifffffi = _0x1d435e.asm.Tp).apply(null, arguments);
    };
    var _0x111c5c = _0x1d435e.dynCall_viffiiii = function () {
      return (_0x111c5c = _0x1d435e.dynCall_viffiiii = _0x1d435e.asm.Up).apply(null, arguments);
    };
    var _0x5ca6fc = _0x1d435e.dynCall_viiiffffiiii = function () {
      return (_0x5ca6fc = _0x1d435e.dynCall_viiiffffiiii = _0x1d435e.asm.Vp).apply(null, arguments);
    };
    var _0x50b204 = _0x1d435e.dynCall_viifffffffiiiii = function () {
      return (_0x50b204 = _0x1d435e.dynCall_viifffffffiiiii = _0x1d435e.asm.Wp).apply(null, arguments);
    };
    var _0x4b6905 = _0x1d435e.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
      return (_0x4b6905 = _0x1d435e.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x1d435e.asm.Xp).apply(null, arguments);
    };
    var _0x41cbb3 = _0x1d435e.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
      return (_0x41cbb3 = _0x1d435e.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x1d435e.asm.Yp).apply(null, arguments);
    };
    var _0x1f3990 = _0x1d435e.dynCall_vififiii = function () {
      return (_0x1f3990 = _0x1d435e.dynCall_vififiii = _0x1d435e.asm.Zp).apply(null, arguments);
    };
    var _0x1a5da5 = _0x1d435e.dynCall_viififii = function () {
      return (_0x1a5da5 = _0x1d435e.dynCall_viififii = _0x1d435e.asm._p).apply(null, arguments);
    };
    var _0x3c2fb = _0x1d435e.dynCall_jijji = function () {
      return (_0x3c2fb = _0x1d435e.dynCall_jijji = _0x1d435e.asm.$p).apply(null, arguments);
    };
    var _0x56933b = _0x1d435e.dynCall_ifffi = function () {
      return (_0x56933b = _0x1d435e.dynCall_ifffi = _0x1d435e.asm.aq).apply(null, arguments);
    };
    var _0x5bd39a = _0x1d435e.dynCall_fiifiii = function () {
      return (_0x5bd39a = _0x1d435e.dynCall_fiifiii = _0x1d435e.asm.bq).apply(null, arguments);
    };
    var _0x1d339d = _0x1d435e.dynCall_viffifi = function () {
      return (_0x1d339d = _0x1d435e.dynCall_viffifi = _0x1d435e.asm.cq).apply(null, arguments);
    };
    var _0x18c8cd = _0x1d435e.dynCall_fffffffi = function () {
      return (_0x18c8cd = _0x1d435e.dynCall_fffffffi = _0x1d435e.asm.dq).apply(null, arguments);
    };
    var _0x22e94f = _0x1d435e.dynCall_viiffifi = function () {
      return (_0x22e94f = _0x1d435e.dynCall_viiffifi = _0x1d435e.asm.eq).apply(null, arguments);
    };
    var _0x512ff2 = _0x1d435e.dynCall_viiiffiiiiiiiii = function () {
      return (_0x512ff2 = _0x1d435e.dynCall_viiiffiiiiiiiii = _0x1d435e.asm.fq).apply(null, arguments);
    };
    var _0x2d1dd8 = _0x1d435e.dynCall_viiiffiiiiii = function () {
      return (_0x2d1dd8 = _0x1d435e.dynCall_viiiffiiiiii = _0x1d435e.asm.gq).apply(null, arguments);
    };
    var _0x2eb4a3 = _0x1d435e.dynCall_viiffiiiiiiiiii = function () {
      return (_0x2eb4a3 = _0x1d435e.dynCall_viiffiiiiiiiiii = _0x1d435e.asm.hq).apply(null, arguments);
    };
    var _0x3d7792 = _0x1d435e.dynCall_viiffiiiiiii = function () {
      return (_0x3d7792 = _0x1d435e.dynCall_viiffiiiiiii = _0x1d435e.asm.iq).apply(null, arguments);
    };
    var _0x422942 = _0x1d435e.dynCall_viffffffi = function () {
      return (_0x422942 = _0x1d435e.dynCall_viffffffi = _0x1d435e.asm.jq).apply(null, arguments);
    };
    var _0x86b7d6 = _0x1d435e.dynCall_iiiffiiii = function () {
      return (_0x86b7d6 = _0x1d435e.dynCall_iiiffiiii = _0x1d435e.asm.kq).apply(null, arguments);
    };
    var _0x5f1ebe = _0x1d435e.dynCall_iiiiffiiii = function () {
      return (_0x5f1ebe = _0x1d435e.dynCall_iiiiffiiii = _0x1d435e.asm.lq).apply(null, arguments);
    };
    var _0x1961cc = _0x1d435e.dynCall_fiiiffi = function () {
      return (_0x1961cc = _0x1d435e.dynCall_fiiiffi = _0x1d435e.asm.mq).apply(null, arguments);
    };
    var _0x1e1dc7 = _0x1d435e.dynCall_vjii = function () {
      return (_0x1e1dc7 = _0x1d435e.dynCall_vjii = _0x1d435e.asm.nq).apply(null, arguments);
    };
    var _0x3dfb06 = _0x1d435e.dynCall_viiiiiiiijiiii = function () {
      return (_0x3dfb06 = _0x1d435e.dynCall_viiiiiiiijiiii = _0x1d435e.asm.oq).apply(null, arguments);
    };
    var _0x36c78b = _0x1d435e.dynCall_viiiiiifiiiiii = function () {
      return (_0x36c78b = _0x1d435e.dynCall_viiiiiifiiiiii = _0x1d435e.asm.pq).apply(null, arguments);
    };
    var _0x3ae85a = _0x1d435e.dynCall_vifiiiiii = function () {
      return (_0x3ae85a = _0x1d435e.dynCall_vifiiiiii = _0x1d435e.asm.qq).apply(null, arguments);
    };
    var _0x8da81c = _0x1d435e.dynCall_fifii = function () {
      return (_0x8da81c = _0x1d435e.dynCall_fifii = _0x1d435e.asm.rq).apply(null, arguments);
    };
    var _0x1d4ec2 = _0x1d435e.dynCall_viiiiiffi = function () {
      return (_0x1d4ec2 = _0x1d435e.dynCall_viiiiiffi = _0x1d435e.asm.sq).apply(null, arguments);
    };
    var _0x2cd863 = _0x1d435e.dynCall_viiidii = function () {
      return (_0x2cd863 = _0x1d435e.dynCall_viiidii = _0x1d435e.asm.tq).apply(null, arguments);
    };
    var _0x7dd40b = _0x1d435e.dynCall_ijiiiiiiiii = function () {
      return (_0x7dd40b = _0x1d435e.dynCall_ijiiiiiiiii = _0x1d435e.asm.uq).apply(null, arguments);
    };
    var _0x4e1b9b = _0x1d435e.dynCall_jjjii = function () {
      return (_0x4e1b9b = _0x1d435e.dynCall_jjjii = _0x1d435e.asm.vq).apply(null, arguments);
    };
    var _0x2fb819 = _0x1d435e.dynCall_iijjijii = function () {
      return (_0x2fb819 = _0x1d435e.dynCall_iijjijii = _0x1d435e.asm.wq).apply(null, arguments);
    };
    var _0x509d97 = _0x1d435e.dynCall_jiijii = function () {
      return (_0x509d97 = _0x1d435e.dynCall_jiijii = _0x1d435e.asm.xq).apply(null, arguments);
    };
    var _0x5f2b13 = _0x1d435e.dynCall_viffffffffffffffffi = function () {
      return (_0x5f2b13 = _0x1d435e.dynCall_viffffffffffffffffi = _0x1d435e.asm.yq).apply(null, arguments);
    };
    var _0x2eb502 = _0x1d435e.dynCall_viijiiiiii = function () {
      return (_0x2eb502 = _0x1d435e.dynCall_viijiiiiii = _0x1d435e.asm.zq).apply(null, arguments);
    };
    var _0x547857 = _0x1d435e.dynCall_jiidi = function () {
      return (_0x547857 = _0x1d435e.dynCall_jiidi = _0x1d435e.asm.Aq).apply(null, arguments);
    };
    var _0x5e5ce7 = _0x1d435e.dynCall_viiiidijii = function () {
      return (_0x5e5ce7 = _0x1d435e.dynCall_viiiidijii = _0x1d435e.asm.Bq).apply(null, arguments);
    };
    var _0x43a32d = _0x1d435e.dynCall_viiiidii = function () {
      return (_0x43a32d = _0x1d435e.dynCall_viiiidii = _0x1d435e.asm.Cq).apply(null, arguments);
    };
    var _0x48849f = _0x1d435e.dynCall_iiidiii = function () {
      return (_0x48849f = _0x1d435e.dynCall_iiidiii = _0x1d435e.asm.Dq).apply(null, arguments);
    };
    var _0x135e5e = _0x1d435e.dynCall_iiidii = function () {
      return (_0x135e5e = _0x1d435e.dynCall_iiidii = _0x1d435e.asm.Eq).apply(null, arguments);
    };
    var _0x54fdc5 = _0x1d435e.dynCall_vidiii = function () {
      return (_0x54fdc5 = _0x1d435e.dynCall_vidiii = _0x1d435e.asm.Fq).apply(null, arguments);
    };
    var _0x1c03fe = _0x1d435e.dynCall_viijiiiii = function () {
      return (_0x1c03fe = _0x1d435e.dynCall_viijiiiii = _0x1d435e.asm.Gq).apply(null, arguments);
    };
    var _0x14a866 = _0x1d435e.dynCall_viifffffi = function () {
      return (_0x14a866 = _0x1d435e.dynCall_viifffffi = _0x1d435e.asm.Hq).apply(null, arguments);
    };
    var _0x3db031 = _0x1d435e.dynCall_viiffffffi = function () {
      return (_0x3db031 = _0x1d435e.dynCall_viiffffffi = _0x1d435e.asm.Iq).apply(null, arguments);
    };
    var _0x462614 = _0x1d435e.dynCall_viifffffffi = function () {
      return (_0x462614 = _0x1d435e.dynCall_viifffffffi = _0x1d435e.asm.Jq).apply(null, arguments);
    };
    var _0x193aa = _0x1d435e.dynCall_viiffffffffi = function () {
      return (_0x193aa = _0x1d435e.dynCall_viiffffffffi = _0x1d435e.asm.Kq).apply(null, arguments);
    };
    var _0xf76a8a = _0x1d435e.dynCall_viiffffffffiii = function () {
      return (_0xf76a8a = _0x1d435e.dynCall_viiffffffffiii = _0x1d435e.asm.Lq).apply(null, arguments);
    };
    var _0x3fb69f = _0x1d435e.dynCall_viiiiffffii = function () {
      return (_0x3fb69f = _0x1d435e.dynCall_viiiiffffii = _0x1d435e.asm.Mq).apply(null, arguments);
    };
    var _0x2fdfc6 = _0x1d435e.dynCall_fiiiiii = function () {
      return (_0x2fdfc6 = _0x1d435e.dynCall_fiiiiii = _0x1d435e.asm.Nq).apply(null, arguments);
    };
    var _0x9a6b0 = _0x1d435e.dynCall_viiijji = function () {
      return (_0x9a6b0 = _0x1d435e.dynCall_viiijji = _0x1d435e.asm.Oq).apply(null, arguments);
    };
    var _0x21fc80 = _0x1d435e.dynCall_vijiiiiiii = function () {
      return (_0x21fc80 = _0x1d435e.dynCall_vijiiiiiii = _0x1d435e.asm.Pq).apply(null, arguments);
    };
    var _0x521089 = _0x1d435e.dynCall_vijiiiiiiii = function () {
      return (_0x521089 = _0x1d435e.dynCall_vijiiiiiiii = _0x1d435e.asm.Qq).apply(null, arguments);
    };
    var _0x1b519d = _0x1d435e.dynCall_jjiiii = function () {
      return (_0x1b519d = _0x1d435e.dynCall_jjiiii = _0x1d435e.asm.Rq).apply(null, arguments);
    };
    var _0x50615a = _0x1d435e.dynCall_jjiiiii = function () {
      return (_0x50615a = _0x1d435e.dynCall_jjiiiii = _0x1d435e.asm.Sq).apply(null, arguments);
    };
    var _0x45892f = _0x1d435e.dynCall_jijjji = function () {
      return (_0x45892f = _0x1d435e.dynCall_jijjji = _0x1d435e.asm.Tq).apply(null, arguments);
    };
    var _0x2a63b9 = _0x1d435e.dynCall_jijjjii = function () {
      return (_0x2a63b9 = _0x1d435e.dynCall_jijjjii = _0x1d435e.asm.Uq).apply(null, arguments);
    };
    var _0x46677e = _0x1d435e.dynCall_jjiii = function () {
      return (_0x46677e = _0x1d435e.dynCall_jjiii = _0x1d435e.asm.Vq).apply(null, arguments);
    };
    var _0x1621c8 = _0x1d435e.dynCall_ijijiiiii = function () {
      return (_0x1621c8 = _0x1d435e.dynCall_ijijiiiii = _0x1d435e.asm.Wq).apply(null, arguments);
    };
    var _0x48d430 = _0x1d435e.dynCall_ijjjiii = function () {
      return (_0x48d430 = _0x1d435e.dynCall_ijjjiii = _0x1d435e.asm.Xq).apply(null, arguments);
    };
    var _0x2a5538 = _0x1d435e.dynCall_vijjjiijii = function () {
      return (_0x2a5538 = _0x1d435e.dynCall_vijjjiijii = _0x1d435e.asm.Yq).apply(null, arguments);
    };
    var _0x32d00b = _0x1d435e.dynCall_ijjjiijii = function () {
      return (_0x32d00b = _0x1d435e.dynCall_ijjjiijii = _0x1d435e.asm.Zq).apply(null, arguments);
    };
    var _0x411d07 = _0x1d435e.dynCall_vijiiiiii = function () {
      return (_0x411d07 = _0x1d435e.dynCall_vijiiiiii = _0x1d435e.asm._q).apply(null, arguments);
    };
    var _0x11ae91 = _0x1d435e.dynCall_jfi = function () {
      return (_0x11ae91 = _0x1d435e.dynCall_jfi = _0x1d435e.asm.$q).apply(null, arguments);
    };
    var _0x3888c3 = _0x1d435e.dynCall_fji = function () {
      return (_0x3888c3 = _0x1d435e.dynCall_fji = _0x1d435e.asm.ar).apply(null, arguments);
    };
    var _0x1abd25 = _0x1d435e.dynCall_dfi = function () {
      return (_0x1abd25 = _0x1d435e.dynCall_dfi = _0x1d435e.asm.br).apply(null, arguments);
    };
    var _0x2f894f = _0x1d435e.dynCall_jidii = function () {
      return (_0x2f894f = _0x1d435e.dynCall_jidii = _0x1d435e.asm.cr).apply(null, arguments);
    };
    var _0x88a763 = _0x1d435e.dynCall_viiiiiiiji = function () {
      return (_0x88a763 = _0x1d435e.dynCall_viiiiiiiji = _0x1d435e.asm.dr).apply(null, arguments);
    };
    var _0x408ea7 = _0x1d435e.dynCall_viiiiiiiiji = function () {
      return (_0x408ea7 = _0x1d435e.dynCall_viiiiiiiiji = _0x1d435e.asm.er).apply(null, arguments);
    };
    var _0x4476ba = _0x1d435e.dynCall_viiiiiiiiiji = function () {
      return (_0x4476ba = _0x1d435e.dynCall_viiiiiiiiiji = _0x1d435e.asm.fr).apply(null, arguments);
    };
    var _0x9f4f07 = _0x1d435e.dynCall_ijiijii = function () {
      return (_0x9f4f07 = _0x1d435e.dynCall_ijiijii = _0x1d435e.asm.gr).apply(null, arguments);
    };
    var _0x2f526c = _0x1d435e.dynCall_vjjiiiii = function () {
      return (_0x2f526c = _0x1d435e.dynCall_vjjiiiii = _0x1d435e.asm.hr).apply(null, arguments);
    };
    var _0x56d6af = _0x1d435e.dynCall_vjjii = function () {
      return (_0x56d6af = _0x1d435e.dynCall_vjjii = _0x1d435e.asm.ir).apply(null, arguments);
    };
    var _0x2e817f = _0x1d435e.dynCall_ijiiji = function () {
      return (_0x2e817f = _0x1d435e.dynCall_ijiiji = _0x1d435e.asm.jr).apply(null, arguments);
    };
    var _0x32cb85 = _0x1d435e.dynCall_ijiiiii = function () {
      return (_0x32cb85 = _0x1d435e.dynCall_ijiiiii = _0x1d435e.asm.kr).apply(null, arguments);
    };
    var _0x5a9181 = _0x1d435e.dynCall_ijiiiiji = function () {
      return (_0x5a9181 = _0x1d435e.dynCall_ijiiiiji = _0x1d435e.asm.lr).apply(null, arguments);
    };
    var _0x5c2f21 = _0x1d435e.dynCall_jiiiiii = function () {
      return (_0x5c2f21 = _0x1d435e.dynCall_jiiiiii = _0x1d435e.asm.mr).apply(null, arguments);
    };
    var _0x1b64f1 = _0x1d435e.dynCall_ddii = function () {
      return (_0x1b64f1 = _0x1d435e.dynCall_ddii = _0x1d435e.asm.nr).apply(null, arguments);
    };
    var _0x1174d2 = _0x1d435e.dynCall_idiii = function () {
      return (_0x1174d2 = _0x1d435e.dynCall_idiii = _0x1d435e.asm.or).apply(null, arguments);
    };
    var _0x242631 = _0x1d435e.dynCall_ifiiiii = function () {
      return (_0x242631 = _0x1d435e.dynCall_ifiiiii = _0x1d435e.asm.pr).apply(null, arguments);
    };
    var _0x32dcb4 = _0x1d435e.dynCall_vdiii = function () {
      return (_0x32dcb4 = _0x1d435e.dynCall_vdiii = _0x1d435e.asm.qr).apply(null, arguments);
    };
    var _0x2e45de = _0x1d435e.dynCall_jdii = function () {
      return (_0x2e45de = _0x1d435e.dynCall_jdii = _0x1d435e.asm.rr).apply(null, arguments);
    };
    var _0x59b1c1 = _0x1d435e.dynCall_vijijji = function () {
      return (_0x59b1c1 = _0x1d435e.dynCall_vijijji = _0x1d435e.asm.sr).apply(null, arguments);
    };
    var _0x419d43 = _0x1d435e.dynCall_iijjji = function () {
      return (_0x419d43 = _0x1d435e.dynCall_iijjji = _0x1d435e.asm.tr).apply(null, arguments);
    };
    var _0x6e0c41 = _0x1d435e.dynCall_viijjji = function () {
      return (_0x6e0c41 = _0x1d435e.dynCall_viijjji = _0x1d435e.asm.ur).apply(null, arguments);
    };
    var _0x2106a6 = _0x1d435e.dynCall_vdii = function () {
      return (_0x2106a6 = _0x1d435e.dynCall_vdii = _0x1d435e.asm.vr).apply(null, arguments);
    };
    var _0x4d1f36 = _0x1d435e.dynCall_diddi = function () {
      return (_0x4d1f36 = _0x1d435e.dynCall_diddi = _0x1d435e.asm.wr).apply(null, arguments);
    };
    var _0x1c1176 = _0x1d435e.dynCall_iijjii = function () {
      return (_0x1c1176 = _0x1d435e.dynCall_iijjii = _0x1d435e.asm.xr).apply(null, arguments);
    };
    var _0x2c8efd = _0x1d435e.dynCall_viijijii = function () {
      return (_0x2c8efd = _0x1d435e.dynCall_viijijii = _0x1d435e.asm.yr).apply(null, arguments);
    };
    var _0x1834fe = _0x1d435e.dynCall_viijijiii = function () {
      return (_0x1834fe = _0x1d435e.dynCall_viijijiii = _0x1d435e.asm.zr).apply(null, arguments);
    };
    var _0x1edd63 = _0x1d435e.dynCall_vijiji = function () {
      return (_0x1edd63 = _0x1d435e.dynCall_vijiji = _0x1d435e.asm.Ar).apply(null, arguments);
    };
    var _0x5f11f8 = _0x1d435e.dynCall_viijiijiii = function () {
      return (_0x5f11f8 = _0x1d435e.dynCall_viijiijiii = _0x1d435e.asm.Br).apply(null, arguments);
    };
    var _0x6d7120 = _0x1d435e.dynCall_viiiijiiii = function () {
      return (_0x6d7120 = _0x1d435e.dynCall_viiiijiiii = _0x1d435e.asm.Cr).apply(null, arguments);
    };
    var _0x1515b6 = _0x1d435e.dynCall_viijjii = function () {
      return (_0x1515b6 = _0x1d435e.dynCall_viijjii = _0x1d435e.asm.Dr).apply(null, arguments);
    };
    var _0x24342c = _0x1d435e.dynCall_jiiiiiiiii = function () {
      return (_0x24342c = _0x1d435e.dynCall_jiiiiiiiii = _0x1d435e.asm.Er).apply(null, arguments);
    };
    var _0x58ec59 = _0x1d435e.dynCall_jiiiiiiiiii = function () {
      return (_0x58ec59 = _0x1d435e.dynCall_jiiiiiiiiii = _0x1d435e.asm.Fr).apply(null, arguments);
    };
    var _0x1c5467 = _0x1d435e.dynCall_iiiiijii = function () {
      return (_0x1c5467 = _0x1d435e.dynCall_iiiiijii = _0x1d435e.asm.Gr).apply(null, arguments);
    };
    var _0x24c63d = _0x1d435e.dynCall_iiiiidii = function () {
      return (_0x24c63d = _0x1d435e.dynCall_iiiiidii = _0x1d435e.asm.Hr).apply(null, arguments);
    };
    var _0x27ca81 = _0x1d435e.dynCall_viifffiii = function () {
      return (_0x27ca81 = _0x1d435e.dynCall_viifffiii = _0x1d435e.asm.Ir).apply(null, arguments);
    };
    var _0x41f2bd = _0x1d435e.dynCall_iidfii = function () {
      return (_0x41f2bd = _0x1d435e.dynCall_iidfii = _0x1d435e.asm.Jr).apply(null, arguments);
    };
    var _0x54c476 = _0x1d435e.dynCall_iidfi = function () {
      return (_0x54c476 = _0x1d435e.dynCall_iidfi = _0x1d435e.asm.Kr).apply(null, arguments);
    };
    var _0x11e0bf = _0x1d435e.dynCall_iiddfi = function () {
      return (_0x11e0bf = _0x1d435e.dynCall_iiddfi = _0x1d435e.asm.Lr).apply(null, arguments);
    };
    var _0x589f00 = _0x1d435e.dynCall_iijfii = function () {
      return (_0x589f00 = _0x1d435e.dynCall_iijfii = _0x1d435e.asm.Mr).apply(null, arguments);
    };
    var _0xd150c4 = _0x1d435e.dynCall_iijfi = function () {
      return (_0xd150c4 = _0x1d435e.dynCall_iijfi = _0x1d435e.asm.Nr).apply(null, arguments);
    };
    var _0x4822b2 = _0x1d435e.dynCall_iijjfi = function () {
      return (_0x4822b2 = _0x1d435e.dynCall_iijjfi = _0x1d435e.asm.Or).apply(null, arguments);
    };
    var _0x32593e = _0x1d435e.dynCall_iiiiffiiiji = function () {
      return (_0x32593e = _0x1d435e.dynCall_iiiiffiiiji = _0x1d435e.asm.Pr).apply(null, arguments);
    };
    var _0x5746b2 = _0x1d435e.dynCall_iiidfii = function () {
      return (_0x5746b2 = _0x1d435e.dynCall_iiidfii = _0x1d435e.asm.Qr).apply(null, arguments);
    };
    var _0x393e79 = _0x1d435e.dynCall_iiijfii = function () {
      return (_0x393e79 = _0x1d435e.dynCall_iiijfii = _0x1d435e.asm.Rr).apply(null, arguments);
    };
    var _0xf15916 = _0x1d435e.dynCall_jiiiiiii = function () {
      return (_0xf15916 = _0x1d435e.dynCall_jiiiiiii = _0x1d435e.asm.Sr).apply(null, arguments);
    };
    var _0xe7585d = _0x1d435e.dynCall_iiiiffiiiii = function () {
      return (_0xe7585d = _0x1d435e.dynCall_iiiiffiiiii = _0x1d435e.asm.Tr).apply(null, arguments);
    };
    var _0x55f190 = _0x1d435e.dynCall_iiiidfii = function () {
      return (_0x55f190 = _0x1d435e.dynCall_iiiidfii = _0x1d435e.asm.Ur).apply(null, arguments);
    };
    var _0x495146 = _0x1d435e.dynCall_iiiijfii = function () {
      return (_0x495146 = _0x1d435e.dynCall_iiiijfii = _0x1d435e.asm.Vr).apply(null, arguments);
    };
    var _0x22d840 = _0x1d435e.dynCall_iiiiffii = function () {
      return (_0x22d840 = _0x1d435e.dynCall_iiiiffii = _0x1d435e.asm.Wr).apply(null, arguments);
    };
    var _0x1c6df5 = _0x1d435e.dynCall_diiiidi = function () {
      return (_0x1c6df5 = _0x1d435e.dynCall_diiiidi = _0x1d435e.asm.Xr).apply(null, arguments);
    };
    var _0x1fef34 = _0x1d435e.dynCall_jiiiiji = function () {
      return (_0x1fef34 = _0x1d435e.dynCall_jiiiiji = _0x1d435e.asm.Yr).apply(null, arguments);
    };
    var _0x528b51 = _0x1d435e.dynCall_fiiiifi = function () {
      return (_0x528b51 = _0x1d435e.dynCall_fiiiifi = _0x1d435e.asm.Zr).apply(null, arguments);
    };
    var _0x3fbe25 = _0x1d435e.dynCall_iiiiiiiiiiiiiii = function () {
      return (_0x3fbe25 = _0x1d435e.dynCall_iiiiiiiiiiiiiii = _0x1d435e.asm._r).apply(null, arguments);
    };
    var _0x5e0366 = _0x1d435e.dynCall_iiiiiiiiiiiiiiii = function () {
      return (_0x5e0366 = _0x1d435e.dynCall_iiiiiiiiiiiiiiii = _0x1d435e.asm.$r).apply(null, arguments);
    };
    var _0x9cca9c = _0x1d435e.dynCall_iiiiiiiiiiiiiiiii = function () {
      return (_0x9cca9c = _0x1d435e.dynCall_iiiiiiiiiiiiiiiii = _0x1d435e.asm.as).apply(null, arguments);
    };
    var _0x30571f = _0x1d435e.dynCall_iiiiiiiiiiiiiiiiii = function () {
      return (_0x30571f = _0x1d435e.dynCall_iiiiiiiiiiiiiiiiii = _0x1d435e.asm.bs).apply(null, arguments);
    };
    var _0x26782c = _0x1d435e.dynCall_iiiiiiiiiiiiiiiiiii = function () {
      return (_0x26782c = _0x1d435e.dynCall_iiiiiiiiiiiiiiiiiii = _0x1d435e.asm.cs).apply(null, arguments);
    };
    var _0x40f75c = _0x1d435e.dynCall_vidiiiii = function () {
      return (_0x40f75c = _0x1d435e.dynCall_vidiiiii = _0x1d435e.asm.ds).apply(null, arguments);
    };
    var _0xf32d3e = _0x1d435e.dynCall_viidiiii = function () {
      return (_0xf32d3e = _0x1d435e.dynCall_viidiiii = _0x1d435e.asm.es).apply(null, arguments);
    };
    var _0x5821ad = _0x1d435e.dynCall_iiidi = function () {
      return (_0x5821ad = _0x1d435e.dynCall_iiidi = _0x1d435e.asm.fs).apply(null, arguments);
    };
    var _0xa69b50 = _0x1d435e.dynCall_iiijjii = function () {
      return (_0xa69b50 = _0x1d435e.dynCall_iiijjii = _0x1d435e.asm.gs).apply(null, arguments);
    };
    var _0x3f6a33 = _0x1d435e.dynCall_ijiiiiii = function () {
      return (_0x3f6a33 = _0x1d435e.dynCall_ijiiiiii = _0x1d435e.asm.hs).apply(null, arguments);
    };
    var _0x294d01 = _0x1d435e.dynCall_ijjiiiiii = function () {
      return (_0x294d01 = _0x1d435e.dynCall_ijjiiiiii = _0x1d435e.asm.is).apply(null, arguments);
    };
    var _0x3b6cfe = _0x1d435e.dynCall_vdi = function () {
      return (_0x3b6cfe = _0x1d435e.dynCall_vdi = _0x1d435e.asm.js).apply(null, arguments);
    };
    var _0x5721ed = _0x1d435e.dynCall_vjijii = function () {
      return (_0x5721ed = _0x1d435e.dynCall_vjijii = _0x1d435e.asm.ks).apply(null, arguments);
    };
    var _0x2dd2b0 = _0x1d435e.dynCall_fff = function () {
      return (_0x2dd2b0 = _0x1d435e.dynCall_fff = _0x1d435e.asm.ls).apply(null, arguments);
    };
    var _0x39f1b8 = _0x1d435e.dynCall_ijj = function () {
      return (_0x39f1b8 = _0x1d435e.dynCall_ijj = _0x1d435e.asm.ms).apply(null, arguments);
    };
    var _0x534093 = _0x1d435e.dynCall_vjji = function () {
      return (_0x534093 = _0x1d435e.dynCall_vjji = _0x1d435e.asm.ns).apply(null, arguments);
    };
    var _0x56b47a = _0x1d435e.dynCall_vif = function () {
      return (_0x56b47a = _0x1d435e.dynCall_vif = _0x1d435e.asm.os).apply(null, arguments);
    };
    var _0x2feae1 = _0x1d435e.dynCall_viif = function () {
      return (_0x2feae1 = _0x1d435e.dynCall_viif = _0x1d435e.asm.ps).apply(null, arguments);
    };
    var _0x1281e6 = _0x1d435e.dynCall_vid = function () {
      return (_0x1281e6 = _0x1d435e.dynCall_vid = _0x1d435e.asm.qs).apply(null, arguments);
    };
    var _0x1141c5 = _0x1d435e.dynCall_viiiiif = function () {
      return (_0x1141c5 = _0x1d435e.dynCall_viiiiif = _0x1d435e.asm.rs).apply(null, arguments);
    };
    var _0x1c1b61 = _0x1d435e.dynCall_viiiif = function () {
      return (_0x1c1b61 = _0x1d435e.dynCall_viiiif = _0x1d435e.asm.ss).apply(null, arguments);
    };
    var _0x83890f = _0x1d435e.dynCall_viiiiiif = function () {
      return (_0x83890f = _0x1d435e.dynCall_viiiiiif = _0x1d435e.asm.ts).apply(null, arguments);
    };
    var _0x58a898 = _0x1d435e.dynCall_iiiijiii = function () {
      return (_0x58a898 = _0x1d435e.dynCall_iiiijiii = _0x1d435e.asm.us).apply(null, arguments);
    };
    var _0x339afb = _0x1d435e.dynCall_iiiij = function () {
      return (_0x339afb = _0x1d435e.dynCall_iiiij = _0x1d435e.asm.vs).apply(null, arguments);
    };
    var _0x221256 = _0x1d435e.dynCall_iiif = function () {
      return (_0x221256 = _0x1d435e.dynCall_iiif = _0x1d435e.asm.ws).apply(null, arguments);
    };
    var _0x318a91 = _0x1d435e.dynCall_fif = function () {
      return (_0x318a91 = _0x1d435e.dynCall_fif = _0x1d435e.asm.xs).apply(null, arguments);
    };
    var _0x94c575 = _0x1d435e.dynCall_iiiiiifff = function () {
      return (_0x94c575 = _0x1d435e.dynCall_iiiiiifff = _0x1d435e.asm.ys).apply(null, arguments);
    };
    var _0x47d809 = _0x1d435e.dynCall_iiiiiifiif = function () {
      return (_0x47d809 = _0x1d435e.dynCall_iiiiiifiif = _0x1d435e.asm.zs).apply(null, arguments);
    };
    var _0x554491 = _0x1d435e.dynCall_iiiiiifiii = function () {
      return (_0x554491 = _0x1d435e.dynCall_iiiiiifiii = _0x1d435e.asm.As).apply(null, arguments);
    };
    var _0x542175 = _0x1d435e.dynCall_iiiiiiifiif = function () {
      return (_0x542175 = _0x1d435e.dynCall_iiiiiiifiif = _0x1d435e.asm.Bs).apply(null, arguments);
    };
    var _0x10eb00 = _0x1d435e.dynCall_fiff = function () {
      return (_0x10eb00 = _0x1d435e.dynCall_fiff = _0x1d435e.asm.Cs).apply(null, arguments);
    };
    var _0xa63496 = _0x1d435e.dynCall_fiiiiiifiifif = function () {
      return (_0xa63496 = _0x1d435e.dynCall_fiiiiiifiifif = _0x1d435e.asm.Ds).apply(null, arguments);
    };
    var _0x29bfb7 = _0x1d435e.dynCall_fiiiiiifiiiif = function () {
      return (_0x29bfb7 = _0x1d435e.dynCall_fiiiiiifiiiif = _0x1d435e.asm.Es).apply(null, arguments);
    };
    var _0x49ff48 = _0x1d435e.dynCall_iifiiiijii = function () {
      return (_0x49ff48 = _0x1d435e.dynCall_iifiiiijii = _0x1d435e.asm.Fs).apply(null, arguments);
    };
    var _0x9f4465 = _0x1d435e.dynCall_vifif = function () {
      return (_0x9f4465 = _0x1d435e.dynCall_vifif = _0x1d435e.asm.Gs).apply(null, arguments);
    };
    var _0x46ae48 = _0x1d435e.dynCall_vifijii = function () {
      return (_0x46ae48 = _0x1d435e.dynCall_vifijii = _0x1d435e.asm.Hs).apply(null, arguments);
    };
    var _0x388dea = _0x1d435e.dynCall_iiiifffiii = function () {
      return (_0x388dea = _0x1d435e.dynCall_iiiifffiii = _0x1d435e.asm.Is).apply(null, arguments);
    };
    var _0x216cac = _0x1d435e.dynCall_iiiifffffi = function () {
      return (_0x216cac = _0x1d435e.dynCall_iiiifffffi = _0x1d435e.asm.Js).apply(null, arguments);
    };
    var _0x5b6052 = _0x1d435e.dynCall_viffiiiif = function () {
      return (_0x5b6052 = _0x1d435e.dynCall_viffiiiif = _0x1d435e.asm.Ks).apply(null, arguments);
    };
    var _0x1a3c99 = _0x1d435e.dynCall_viffiifffffiii = function () {
      return (_0x1a3c99 = _0x1d435e.dynCall_viffiifffffiii = _0x1d435e.asm.Ls).apply(null, arguments);
    };
    var _0x525c1a = _0x1d435e.dynCall_viffffiifffiiiiif = function () {
      return (_0x525c1a = _0x1d435e.dynCall_viffffiifffiiiiif = _0x1d435e.asm.Ms).apply(null, arguments);
    };
    var _0x44d5f0 = _0x1d435e.dynCall_iiiifffffii = function () {
      return (_0x44d5f0 = _0x1d435e.dynCall_iiiifffffii = _0x1d435e.asm.Ns).apply(null, arguments);
    };
    var _0x3486df = _0x1d435e.dynCall_viiiiiiiiiiifii = function () {
      return (_0x3486df = _0x1d435e.dynCall_viiiiiiiiiiifii = _0x1d435e.asm.Os).apply(null, arguments);
    };
    var _0x2d7135 = _0x1d435e.dynCall_viff = function () {
      return (_0x2d7135 = _0x1d435e.dynCall_viff = _0x1d435e.asm.Ps).apply(null, arguments);
    };
    var _0x299dfc = _0x1d435e.dynCall_iiiiifiiiiif = function () {
      return (_0x299dfc = _0x1d435e.dynCall_iiiiifiiiiif = _0x1d435e.asm.Qs).apply(null, arguments);
    };
    var _0x2fb69c = _0x1d435e.dynCall_viiff = function () {
      return (_0x2fb69c = _0x1d435e.dynCall_viiff = _0x1d435e.asm.Rs).apply(null, arguments);
    };
    var _0x38ee8d = _0x1d435e.dynCall_viiifiiiii = function () {
      return (_0x38ee8d = _0x1d435e.dynCall_viiifiiiii = _0x1d435e.asm.Ss).apply(null, arguments);
    };
    var _0x450e54 = _0x1d435e.dynCall_viiiifiiiiif = function () {
      return (_0x450e54 = _0x1d435e.dynCall_viiiifiiiiif = _0x1d435e.asm.Ts).apply(null, arguments);
    };
    var _0x1119c3 = _0x1d435e.dynCall_iifff = function () {
      return (_0x1119c3 = _0x1d435e.dynCall_iifff = _0x1d435e.asm.Us).apply(null, arguments);
    };
    var _0x3f0997 = _0x1d435e.dynCall_iif = function () {
      return (_0x3f0997 = _0x1d435e.dynCall_iif = _0x1d435e.asm.Vs).apply(null, arguments);
    };
    var _0x258996 = _0x1d435e.dynCall_viij = function () {
      return (_0x258996 = _0x1d435e.dynCall_viij = _0x1d435e.asm.Ws).apply(null, arguments);
    };
    var _0x2aca82 = _0x1d435e.dynCall_viijijj = function () {
      return (_0x2aca82 = _0x1d435e.dynCall_viijijj = _0x1d435e.asm.Xs).apply(null, arguments);
    };
    var _0x2320a8 = _0x1d435e.dynCall_viijj = function () {
      return (_0x2320a8 = _0x1d435e.dynCall_viijj = _0x1d435e.asm.Ys).apply(null, arguments);
    };
    var _0x271ca9 = _0x1d435e.dynCall_viiiij = function () {
      return (_0x271ca9 = _0x1d435e.dynCall_viiiij = _0x1d435e.asm.Zs).apply(null, arguments);
    };
    var _0x214dfe = _0x1d435e.dynCall_iiijji = function () {
      return (_0x214dfe = _0x1d435e.dynCall_iiijji = _0x1d435e.asm._s).apply(null, arguments);
    };
    var _0x154dc5 = _0x1d435e.dynCall_ijjiiiii = function () {
      return (_0x154dc5 = _0x1d435e.dynCall_ijjiiiii = _0x1d435e.asm.$s).apply(null, arguments);
    };
    var _0x5d6fa1 = _0x1d435e.dynCall_vidd = function () {
      return (_0x5d6fa1 = _0x1d435e.dynCall_vidd = _0x1d435e.asm.at).apply(null, arguments);
    };
    var _0x1e8de7 = _0x1d435e.dynCall_iiiiiifffiiifiii = function () {
      return (_0x1e8de7 = _0x1d435e.dynCall_iiiiiifffiiifiii = _0x1d435e.asm.bt).apply(null, arguments);
    };
    var _0x2ef877 = _0x1d435e.dynCall_viiif = function () {
      return (_0x2ef877 = _0x1d435e.dynCall_viiif = _0x1d435e.asm.ct).apply(null, arguments);
    };
    var _0x437e41 = _0x1d435e.dynCall_fiiiif = function () {
      return (_0x437e41 = _0x1d435e.dynCall_fiiiif = _0x1d435e.asm.dt).apply(null, arguments);
    };
    var _0x540fea = _0x1d435e.dynCall_viffff = function () {
      return (_0x540fea = _0x1d435e.dynCall_viffff = _0x1d435e.asm.et).apply(null, arguments);
    };
    var _0x2e6c96 = _0x1d435e.dynCall_ij = function () {
      return (_0x2e6c96 = _0x1d435e.dynCall_ij = _0x1d435e.asm.ft).apply(null, arguments);
    };
    var _0x188272 = _0x1d435e.dynCall_vf = function () {
      return (_0x188272 = _0x1d435e.dynCall_vf = _0x1d435e.asm.gt).apply(null, arguments);
    };
    var _0x296216 = _0x1d435e.dynCall_vffff = function () {
      return (_0x296216 = _0x1d435e.dynCall_vffff = _0x1d435e.asm.ht).apply(null, arguments);
    };
    var _0x4d2d77 = _0x1d435e.dynCall_vff = function () {
      return (_0x4d2d77 = _0x1d435e.dynCall_vff = _0x1d435e.asm.it).apply(null, arguments);
    };
    var _0x4c29cc = _0x1d435e.dynCall_iiij = function () {
      return (_0x4c29cc = _0x1d435e.dynCall_iiij = _0x1d435e.asm.jt).apply(null, arguments);
    };
    var _0x34f533 = _0x1d435e.dynCall_vifff = function () {
      return (_0x34f533 = _0x1d435e.dynCall_vifff = _0x1d435e.asm.kt).apply(null, arguments);
    };
    var _0x33c77e = _0x1d435e.dynCall_viifff = function () {
      return (_0x33c77e = _0x1d435e.dynCall_viifff = _0x1d435e.asm.lt).apply(null, arguments);
    };
    var _0xcf5f0a = _0x1d435e.dynCall_vij = function () {
      return (_0xcf5f0a = _0x1d435e.dynCall_vij = _0x1d435e.asm.mt).apply(null, arguments);
    };
    var _0x1c790d = _0x1d435e.dynCall_vfff = function () {
      return (_0x1c790d = _0x1d435e.dynCall_vfff = _0x1d435e.asm.nt).apply(null, arguments);
    };
    var _0x514bc4 = _0x1d435e.dynCall_f = function () {
      return (_0x514bc4 = _0x1d435e.dynCall_f = _0x1d435e.asm.ot).apply(null, arguments);
    };
    var _0x287e81 = _0x1d435e.dynCall_ff = function () {
      return (_0x287e81 = _0x1d435e.dynCall_ff = _0x1d435e.asm.pt).apply(null, arguments);
    };
    var _0x267f65 = _0x1d435e.dynCall_vififfi = function () {
      return (_0x267f65 = _0x1d435e.dynCall_vififfi = _0x1d435e.asm.qt).apply(null, arguments);
    };
    var _0x1dade8 = _0x1d435e.dynCall_fiif = function () {
      return (_0x1dade8 = _0x1d435e.dynCall_fiif = _0x1d435e.asm.rt).apply(null, arguments);
    };
    var _0x4d2b61 = _0x1d435e.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
      return (_0x4d2b61 = _0x1d435e.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x1d435e.asm.st).apply(null, arguments);
    };
    var _0x188b58 = _0x1d435e.dynCall_viififi = function () {
      return (_0x188b58 = _0x1d435e.dynCall_viififi = _0x1d435e.asm.tt).apply(null, arguments);
    };
    var _0x2a067d = _0x1d435e.dynCall_viiffiiiiiiiii = function () {
      return (_0x2a067d = _0x1d435e.dynCall_viiffiiiiiiiii = _0x1d435e.asm.ut).apply(null, arguments);
    };
    var _0x4dea44 = _0x1d435e.dynCall_viiffiiiiii = function () {
      return (_0x4dea44 = _0x1d435e.dynCall_viiffiiiiii = _0x1d435e.asm.vt).apply(null, arguments);
    };
    var _0x2af830 = _0x1d435e.dynCall_viiiiiiiijiii = function () {
      return (_0x2af830 = _0x1d435e.dynCall_viiiiiiiijiii = _0x1d435e.asm.wt).apply(null, arguments);
    };
    function _0x3fa88a(_0x31a3aa, _0x34fc45) {
      var _0x51ee36 = _0x17876e();
      try {
        return _0x54ca8f(_0x31a3aa, _0x34fc45);
      } catch (_0x2d4a0b) {
        _0x9d36f7(_0x51ee36);
        if (_0x2d4a0b !== _0x2d4a0b + 0) {
          throw _0x2d4a0b;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x309e20(_0x350bf4) {
      var _0x279d3a = _0x17876e();
      try {
        _0x5d5381(_0x350bf4);
      } catch (_0x19ec2d) {
        _0x9d36f7(_0x279d3a);
        if (_0x19ec2d !== _0x19ec2d + 0) {
          throw _0x19ec2d;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x5abd56(_0x24d50, _0x1bbd7f, _0x429a09) {
      var _0x2c408d = _0x17876e();
      try {
        _0x29540c(_0x24d50, _0x1bbd7f, _0x429a09);
      } catch (_0x356235) {
        _0x9d36f7(_0x2c408d);
        if (_0x356235 !== _0x356235 + 0) {
          throw _0x356235;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3aebfe(_0x284939, _0x36284f, _0x1ee980) {
      var _0x3e81e5 = _0x17876e();
      try {
        return _0x1d7d72(_0x284939, _0x36284f, _0x1ee980);
      } catch (_0x48175c) {
        _0x9d36f7(_0x3e81e5);
        if (_0x48175c !== _0x48175c + 0) {
          throw _0x48175c;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x197b64(_0x2baff8, _0x102fcc) {
      var _0x6ad184 = _0x17876e();
      try {
        _0x4f74e2(_0x2baff8, _0x102fcc);
      } catch (_0x485323) {
        _0x9d36f7(_0x6ad184);
        if (_0x485323 !== _0x485323 + 0) {
          throw _0x485323;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x413a94(_0x28d7a5, _0x2028f7, _0x213c14, _0x5213da, _0x3c18a3) {
      var _0x34430e = _0x17876e();
      try {
        return _0x177f95(_0x28d7a5, _0x2028f7, _0x213c14, _0x5213da, _0x3c18a3);
      } catch (_0x2cf619) {
        _0x9d36f7(_0x34430e);
        if (_0x2cf619 !== _0x2cf619 + 0) {
          throw _0x2cf619;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x2825b4(_0x5b75dd, _0x7a5283, _0x4c9166, _0xe3695d) {
      var _0x2ea5fa = _0x17876e();
      try {
        return _0x9a870b(_0x5b75dd, _0x7a5283, _0x4c9166, _0xe3695d);
      } catch (_0x3e9ea0) {
        _0x9d36f7(_0x2ea5fa);
        if (_0x3e9ea0 !== _0x3e9ea0 + 0) {
          throw _0x3e9ea0;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3b7533(_0x1dbe05, _0x23f138, _0x42249e, _0x267e95, _0x5b8307, _0x17c463) {
      var _0x560ef1 = _0x17876e();
      try {
        return _0x3accf8(_0x1dbe05, _0x23f138, _0x42249e, _0x267e95, _0x5b8307, _0x17c463);
      } catch (_0xece9bc) {
        _0x9d36f7(_0x560ef1);
        if (_0xece9bc !== _0xece9bc + 0) {
          throw _0xece9bc;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x22a87c(_0x490653, _0x567d15, _0x22e0e2, _0x1e4acb) {
      var _0x49d1f4 = _0x17876e();
      try {
        _0x3e4226(_0x490653, _0x567d15, _0x22e0e2, _0x1e4acb);
      } catch (_0x5e74ac) {
        _0x9d36f7(_0x49d1f4);
        if (_0x5e74ac !== _0x5e74ac + 0) {
          throw _0x5e74ac;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x49fd96(_0x56f534) {
      var _0x3f3edc = _0x17876e();
      try {
        return _0x519f64(_0x56f534);
      } catch (_0x4a3a10) {
        _0x9d36f7(_0x3f3edc);
        if (_0x4a3a10 !== _0x4a3a10 + 0) {
          throw _0x4a3a10;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x214350(_0x4152f6, _0x374ace, _0x22da56, _0x4e1b34, _0x4a4bd7) {
      var _0x2c227f = _0x17876e();
      try {
        _0x5f341a(_0x4152f6, _0x374ace, _0x22da56, _0x4e1b34, _0x4a4bd7);
      } catch (_0x1332d6) {
        _0x9d36f7(_0x2c227f);
        if (_0x1332d6 !== _0x1332d6 + 0) {
          throw _0x1332d6;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3ea8fc(_0x3fc1a9, _0x3b246f, _0x148910, _0x4722e3, _0x161138, _0x21e135, _0x113d9e) {
      var _0x5b5ad4 = _0x17876e();
      try {
        return _0x125c4e(_0x3fc1a9, _0x3b246f, _0x148910, _0x4722e3, _0x161138, _0x21e135, _0x113d9e);
      } catch (_0x52c4bf) {
        _0x9d36f7(_0x5b5ad4);
        if (_0x52c4bf !== _0x52c4bf + 0) {
          throw _0x52c4bf;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0xa6c1f5(_0x11118c, _0x14e1c7, _0x1e0dda, _0x1cacad, _0x26e800, _0x104fa2, _0x4dd3ad, _0x23a45e) {
      var _0x235c4a = _0x17876e();
      try {
        return _0x1b9782(_0x11118c, _0x14e1c7, _0x1e0dda, _0x1cacad, _0x26e800, _0x104fa2, _0x4dd3ad, _0x23a45e);
      } catch (_0x467152) {
        _0x9d36f7(_0x235c4a);
        if (_0x467152 !== _0x467152 + 0) {
          throw _0x467152;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0xf3a460(_0x35ffab, _0x1229c, _0x129c12, _0x102073) {
      var _0x54cafe = _0x17876e();
      try {
        return _0x5ec3ff(_0x35ffab, _0x1229c, _0x129c12, _0x102073);
      } catch (_0x50dbea) {
        _0x9d36f7(_0x54cafe);
        if (_0x50dbea !== _0x50dbea + 0) {
          throw _0x50dbea;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x1f6881(_0x5e1fd1, _0xa40df, _0x4d1e84, _0x8ae3a6) {
      var _0x27179d = _0x17876e();
      try {
        return _0x4d24d4(_0x5e1fd1, _0xa40df, _0x4d1e84, _0x8ae3a6);
      } catch (_0x38d7fa) {
        _0x9d36f7(_0x27179d);
        if (_0x38d7fa !== _0x38d7fa + 0) {
          throw _0x38d7fa;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x345f1e(_0x11c515, _0x4c64a0, _0x518a31, _0x34fc44, _0x1b26e2, _0x27dae6, _0x2f3546, _0x326961, _0x1dcad0, _0xbff29e, _0x57aabb) {
      var _0x1f3307 = _0x17876e();
      try {
        return _0xda634f(_0x11c515, _0x4c64a0, _0x518a31, _0x34fc44, _0x1b26e2, _0x27dae6, _0x2f3546, _0x326961, _0x1dcad0, _0xbff29e, _0x57aabb);
      } catch (_0x19fbc7) {
        _0x9d36f7(_0x1f3307);
        if (_0x19fbc7 !== _0x19fbc7 + 0) {
          throw _0x19fbc7;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0xf3370f(_0x178cad, _0x531dca, _0x1c2147, _0x5652ae, _0x2e203d, _0x18b79b, _0x4e2dc6, _0x2a5802) {
      var _0x124cbb = _0x17876e();
      try {
        _0x110b49(_0x178cad, _0x531dca, _0x1c2147, _0x5652ae, _0x2e203d, _0x18b79b, _0x4e2dc6, _0x2a5802);
      } catch (_0x43c1c4) {
        _0x9d36f7(_0x124cbb);
        if (_0x43c1c4 !== _0x43c1c4 + 0) {
          throw _0x43c1c4;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x2fc2bc(_0x537f17, _0x476efe, _0x37a981, _0x1f7f36, _0x4cff04, _0x428ad1, _0x58654d, _0xadb9d9, _0x8af48f, _0xec245d, _0x247744) {
      var _0x24495e = _0x17876e();
      try {
        _0x329ab8(_0x537f17, _0x476efe, _0x37a981, _0x1f7f36, _0x4cff04, _0x428ad1, _0x58654d, _0xadb9d9, _0x8af48f, _0xec245d, _0x247744);
      } catch (_0x25e8a3) {
        _0x9d36f7(_0x24495e);
        if (_0x25e8a3 !== _0x25e8a3 + 0) {
          throw _0x25e8a3;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x34db32(_0x436f5b, _0x42a3c5, _0x24731d, _0x3ed196, _0x394f95, _0xb98bb4, _0x322b87) {
      var _0x16c1c4 = _0x17876e();
      try {
        _0x2ae5b1(_0x436f5b, _0x42a3c5, _0x24731d, _0x3ed196, _0x394f95, _0xb98bb4, _0x322b87);
      } catch (_0x52b524) {
        _0x9d36f7(_0x16c1c4);
        if (_0x52b524 !== _0x52b524 + 0) {
          throw _0x52b524;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x5f42d4(_0x5c2ec9, _0x56f610, _0x366a04, _0x494a04, _0x183391, _0x1df870) {
      var _0xe6a30 = _0x17876e();
      try {
        _0x44836f(_0x5c2ec9, _0x56f610, _0x366a04, _0x494a04, _0x183391, _0x1df870);
      } catch (_0x39668b) {
        _0x9d36f7(_0xe6a30);
        if (_0x39668b !== _0x39668b + 0) {
          throw _0x39668b;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x375d5a(_0xa5f03e, _0x274776, _0x4ab016, _0x4d2693, _0x50dc01, _0x102b07, _0xc0bfc5, _0x543736, _0x484203) {
      var _0x4f137c = _0x17876e();
      try {
        _0x4178d8(_0xa5f03e, _0x274776, _0x4ab016, _0x4d2693, _0x50dc01, _0x102b07, _0xc0bfc5, _0x543736, _0x484203);
      } catch (_0x73896e) {
        _0x9d36f7(_0x4f137c);
        if (_0x73896e !== _0x73896e + 0) {
          throw _0x73896e;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x409e66(_0x54d911, _0x3e0f49, _0xfb5505, _0x2032de, _0x537624, _0x51afcf) {
      var _0x7e429b = _0x17876e();
      try {
        return _0x3e8f7f(_0x54d911, _0x3e0f49, _0xfb5505, _0x2032de, _0x537624, _0x51afcf);
      } catch (_0x50b829) {
        _0x9d36f7(_0x7e429b);
        if (_0x50b829 !== _0x50b829 + 0) {
          throw _0x50b829;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x419eb4(_0x44d528, _0x3e1cd5, _0xde6f08, _0x1d370e) {
      var _0x4a7f54 = _0x17876e();
      try {
        _0x3cab2b(_0x44d528, _0x3e1cd5, _0xde6f08, _0x1d370e);
      } catch (_0x414b12) {
        _0x9d36f7(_0x4a7f54);
        if (_0x414b12 !== _0x414b12 + 0) {
          throw _0x414b12;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x117ab8(_0x49b657, _0x1b3456, _0x4e80cd, _0x860314, _0x52d61a, _0x3f01e, _0x445f0b, _0x435fac, _0x1eb679) {
      var _0x319b2e = _0x17876e();
      try {
        return _0x5ecad9(_0x49b657, _0x1b3456, _0x4e80cd, _0x860314, _0x52d61a, _0x3f01e, _0x445f0b, _0x435fac, _0x1eb679);
      } catch (_0x19844f) {
        _0x9d36f7(_0x319b2e);
        if (_0x19844f !== _0x19844f + 0) {
          throw _0x19844f;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3525f9(_0x5dbebc, _0x352cdb, _0x22df67, _0x42da82, _0x2fbc05, _0x21e4cc, _0x108fea) {
      var _0x5a8cff = _0x17876e();
      try {
        return _0x11cd53(_0x5dbebc, _0x352cdb, _0x22df67, _0x42da82, _0x2fbc05, _0x21e4cc, _0x108fea);
      } catch (_0x6bf867) {
        _0x9d36f7(_0x5a8cff);
        if (_0x6bf867 !== _0x6bf867 + 0) {
          throw _0x6bf867;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x1762a6(_0x12cf18, _0x35546f, _0x2e9d53, _0x26f84d, _0x1cffb8) {
      var _0x293b5c = _0x17876e();
      try {
        _0x554860(_0x12cf18, _0x35546f, _0x2e9d53, _0x26f84d, _0x1cffb8);
      } catch (_0x450d81) {
        _0x9d36f7(_0x293b5c);
        if (_0x450d81 !== _0x450d81 + 0) {
          throw _0x450d81;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x1d1e18(_0x197d04, _0x3e7f56, _0x21b432, _0x32536d, _0x6f5f4d, _0x50115c, _0x17a440, _0x14de92, _0x2a89e7, _0x3fb077) {
      var _0x17328b = _0x17876e();
      try {
        _0x4e7f51(_0x197d04, _0x3e7f56, _0x21b432, _0x32536d, _0x6f5f4d, _0x50115c, _0x17a440, _0x14de92, _0x2a89e7, _0x3fb077);
      } catch (_0x3fd34b) {
        _0x9d36f7(_0x17328b);
        if (_0x3fd34b !== _0x3fd34b + 0) {
          throw _0x3fd34b;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0xbc0dfb(_0x4f2009, _0x497729, _0x49874f, _0x242bed, _0x3620a8, _0x2c8add, _0x50e2fb) {
      var _0x1375e3 = _0x17876e();
      try {
        return _0x48849f(_0x4f2009, _0x497729, _0x49874f, _0x242bed, _0x3620a8, _0x2c8add, _0x50e2fb);
      } catch (_0x4e6105) {
        _0x9d36f7(_0x1375e3);
        if (_0x4e6105 !== _0x4e6105 + 0) {
          throw _0x4e6105;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x57ebba(_0x1739e9, _0x4bc2d2, _0x34639e, _0x3c9b66, _0x12d36e) {
      var _0xc5a0a3 = _0x17876e();
      try {
        _0x2a046e(_0x1739e9, _0x4bc2d2, _0x34639e, _0x3c9b66, _0x12d36e);
      } catch (_0x51dfa6) {
        _0x9d36f7(_0xc5a0a3);
        if (_0x51dfa6 !== _0x51dfa6 + 0) {
          throw _0x51dfa6;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3771c9(_0x35afb1, _0x2024d5, _0x18ad9c, _0x8b1be3, _0x509513, _0x467c9d, _0x32d940) {
      var _0x59374a = _0x17876e();
      try {
        return _0x3e2592(_0x35afb1, _0x2024d5, _0x18ad9c, _0x8b1be3, _0x509513, _0x467c9d, _0x32d940);
      } catch (_0x1a26b7) {
        _0x9d36f7(_0x59374a);
        if (_0x1a26b7 !== _0x1a26b7 + 0) {
          throw _0x1a26b7;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x497e27(_0x56950c, _0x656434, _0x5e79bf, _0x4947d6) {
      var _0xcacd10 = _0x17876e();
      try {
        _0x9817c3(_0x56950c, _0x656434, _0x5e79bf, _0x4947d6);
      } catch (_0x1092c9) {
        _0x9d36f7(_0xcacd10);
        if (_0x1092c9 !== _0x1092c9 + 0) {
          throw _0x1092c9;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x2b2ba8(_0x3bb109, _0x2f22d2, _0x1f7a2c) {
      var _0x24ae97 = _0x17876e();
      try {
        return _0x9f9584(_0x3bb109, _0x2f22d2, _0x1f7a2c);
      } catch (_0x2837ee) {
        _0x9d36f7(_0x24ae97);
        if (_0x2837ee !== _0x2837ee + 0) {
          throw _0x2837ee;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x5ebd07(_0x1bdf19, _0x5cec75, _0x155c2f, _0xe646f1, _0x1c65b8, _0x551985, _0x5eae13) {
      var _0x51d3c4 = _0x17876e();
      try {
        _0x2974b1(_0x1bdf19, _0x5cec75, _0x155c2f, _0xe646f1, _0x1c65b8, _0x551985, _0x5eae13);
      } catch (_0x5a5af6) {
        _0x9d36f7(_0x51d3c4);
        if (_0x5a5af6 !== _0x5a5af6 + 0) {
          throw _0x5a5af6;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x44fee2(_0x5778ed, _0x829524, _0x4dc4a5, _0x2512a3, _0x2ebe05, _0x28fd6d, _0x5c965b, _0x175e48, _0x32b0eb, _0x12b3ac, _0x3e092d, _0x502410, _0x34c4ca, _0x5090f5, _0x4e79d4) {
      var _0x312b86 = _0x17876e();
      try {
        _0x5a7e18(_0x5778ed, _0x829524, _0x4dc4a5, _0x2512a3, _0x2ebe05, _0x28fd6d, _0x5c965b, _0x175e48, _0x32b0eb, _0x12b3ac, _0x3e092d, _0x502410, _0x34c4ca, _0x5090f5, _0x4e79d4);
      } catch (_0x30ca61) {
        _0x9d36f7(_0x312b86);
        if (_0x30ca61 !== _0x30ca61 + 0) {
          throw _0x30ca61;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x83e785(_0x11aa1f, _0x2f12fe, _0x24bfa1) {
      var _0x4dcfe8 = _0x17876e();
      try {
        return _0x3aabb8(_0x11aa1f, _0x2f12fe, _0x24bfa1);
      } catch (_0x50a06a) {
        _0x9d36f7(_0x4dcfe8);
        if (_0x50a06a !== _0x50a06a + 0) {
          throw _0x50a06a;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3a74ba(_0x153117, _0x28f4da, _0x5e364f, _0x53de8a, _0x4aa947, _0x9b0d1e, _0x2a0a91, _0x3e0857, _0x353b4b, _0x4cd010, _0x20ca2c, _0xe158ef, _0x5efc7d, _0x4900d5, _0x5490f1) {
      var _0x53a66b = _0x17876e();
      try {
        _0x126456(_0x153117, _0x28f4da, _0x5e364f, _0x53de8a, _0x4aa947, _0x9b0d1e, _0x2a0a91, _0x3e0857, _0x353b4b, _0x4cd010, _0x20ca2c, _0xe158ef, _0x5efc7d, _0x4900d5, _0x5490f1);
      } catch (_0x2b3953) {
        _0x9d36f7(_0x53a66b);
        if (_0x2b3953 !== _0x2b3953 + 0) {
          throw _0x2b3953;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3a9f2c(_0x1e33a8, _0xa53980, _0x2b4ced, _0x4a2cba, _0x427061, _0x3fe237, _0x3add3a, _0x1a3382, _0x4da595, _0x486535, _0xd9cde5, _0x5c8e33, _0xd4b167, _0xec8471, _0x1e70d0) {
      var _0x19d90a = _0x17876e();
      try {
        _0xf25f33(_0x1e33a8, _0xa53980, _0x2b4ced, _0x4a2cba, _0x427061, _0x3fe237, _0x3add3a, _0x1a3382, _0x4da595, _0x486535, _0xd9cde5, _0x5c8e33, _0xd4b167, _0xec8471, _0x1e70d0);
      } catch (_0x135809) {
        _0x9d36f7(_0x19d90a);
        if (_0x135809 !== _0x135809 + 0) {
          throw _0x135809;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x26b33a(_0x4fa267, _0x2a2004, _0x3e6365, _0x5b7a40, _0x5a682c) {
      var _0x39fe09 = _0x17876e();
      try {
        return _0x58d06a(_0x4fa267, _0x2a2004, _0x3e6365, _0x5b7a40, _0x5a682c);
      } catch (_0x10d164) {
        _0x9d36f7(_0x39fe09);
        if (_0x10d164 !== _0x10d164 + 0) {
          throw _0x10d164;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x1df8ea(_0x6290b2, _0x4d9467, _0x4adf86, _0x294369, _0x4037ad) {
      var _0x3f5098 = _0x17876e();
      try {
        return _0x2c20c7(_0x6290b2, _0x4d9467, _0x4adf86, _0x294369, _0x4037ad);
      } catch (_0x2f7b0d) {
        _0x9d36f7(_0x3f5098);
        if (_0x2f7b0d !== _0x2f7b0d + 0) {
          throw _0x2f7b0d;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x320e73(_0x1b0442, _0x5d1747, _0x2280dc, _0x525b09, _0x39fd38) {
      var _0x17cd80 = _0x17876e();
      try {
        return _0x4458e3(_0x1b0442, _0x5d1747, _0x2280dc, _0x525b09, _0x39fd38);
      } catch (_0x30302e) {
        _0x9d36f7(_0x17cd80);
        if (_0x30302e !== _0x30302e + 0) {
          throw _0x30302e;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3da482(_0x288d70, _0x3a35d1, _0x50ca5e, _0x571f7a, _0xecef27) {
      var _0x1d7239 = _0x17876e();
      try {
        _0x361ebc(_0x288d70, _0x3a35d1, _0x50ca5e, _0x571f7a, _0xecef27);
      } catch (_0x4afeae) {
        _0x9d36f7(_0x1d7239);
        if (_0x4afeae !== _0x4afeae + 0) {
          throw _0x4afeae;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3e4422(_0x5de6fd, _0x4558d1) {
      var _0x2f5b8d = _0x17876e();
      try {
        return _0x7792d7(_0x5de6fd, _0x4558d1);
      } catch (_0x211f89) {
        _0x9d36f7(_0x2f5b8d);
        if (_0x211f89 !== _0x211f89 + 0) {
          throw _0x211f89;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x2aacd7(_0x187e77, _0x169bc9, _0x2dcbb8, _0x23fbc0) {
      var _0xe1733e = _0x17876e();
      try {
        return _0x482b8b(_0x187e77, _0x169bc9, _0x2dcbb8, _0x23fbc0);
      } catch (_0x4ea598) {
        _0x9d36f7(_0xe1733e);
        if (_0x4ea598 !== _0x4ea598 + 0) {
          throw _0x4ea598;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3dc3b0(_0x531a6e, _0x434254, _0x380186, _0x4cd87b, _0x9195be) {
      var _0x11bb16 = _0x17876e();
      try {
        return _0x2e8336(_0x531a6e, _0x434254, _0x380186, _0x4cd87b, _0x9195be);
      } catch (_0x5f11e7) {
        _0x9d36f7(_0x11bb16);
        if (_0x5f11e7 !== _0x5f11e7 + 0) {
          throw _0x5f11e7;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x1a4799(_0x53659b, _0x130e1a, _0xe32f85, _0xaf1415, _0x1a87f5, _0x2d081c, _0x3d3bdd) {
      var _0x1abee3 = _0x17876e();
      try {
        return _0x1611de(_0x53659b, _0x130e1a, _0xe32f85, _0xaf1415, _0x1a87f5, _0x2d081c, _0x3d3bdd);
      } catch (_0x27766d) {
        _0x9d36f7(_0x1abee3);
        if (_0x27766d !== _0x27766d + 0) {
          throw _0x27766d;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x133ab7(_0x355de3, _0x16cbaf, _0x587d8c, _0x5882b7, _0x113caa, _0x26e4c9) {
      var _0x5ce756 = _0x17876e();
      try {
        return _0x1ebafb(_0x355de3, _0x16cbaf, _0x587d8c, _0x5882b7, _0x113caa, _0x26e4c9);
      } catch (_0x18fcc5) {
        _0x9d36f7(_0x5ce756);
        if (_0x18fcc5 !== _0x18fcc5 + 0) {
          throw _0x18fcc5;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x54962d(_0x3c88fe, _0x55c964, _0x4b4f9d, _0x29358f) {
      var _0xa1b26 = _0x17876e();
      try {
        return _0x305f09(_0x3c88fe, _0x55c964, _0x4b4f9d, _0x29358f);
      } catch (_0x2bf150) {
        _0x9d36f7(_0xa1b26);
        if (_0x2bf150 !== _0x2bf150 + 0) {
          throw _0x2bf150;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3901aa(_0x33c810, _0x5f1047, _0x461b6b, _0x2c987b, _0x44b01d, _0x20a657) {
      var _0x122436 = _0x17876e();
      try {
        return _0x2bd259(_0x33c810, _0x5f1047, _0x461b6b, _0x2c987b, _0x44b01d, _0x20a657);
      } catch (_0x371515) {
        _0x9d36f7(_0x122436);
        if (_0x371515 !== _0x371515 + 0) {
          throw _0x371515;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0xb08b32(_0xd48e8b, _0x25828f, _0x5efff9) {
      var _0x546ba2 = _0x17876e();
      try {
        return _0x3f30f4(_0xd48e8b, _0x25828f, _0x5efff9);
      } catch (_0x52cea9) {
        _0x9d36f7(_0x546ba2);
        if (_0x52cea9 !== _0x52cea9 + 0) {
          throw _0x52cea9;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x2b2bad(_0x5e128f, _0x1e2652, _0x484ab7, _0x14ca8b, _0x23315f, _0x33e627) {
      var _0x1853bd = _0x17876e();
      try {
        _0x4d323f(_0x5e128f, _0x1e2652, _0x484ab7, _0x14ca8b, _0x23315f, _0x33e627);
      } catch (_0x136269) {
        _0x9d36f7(_0x1853bd);
        if (_0x136269 !== _0x136269 + 0) {
          throw _0x136269;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x191cc8(_0x48b455, _0x2d32e6, _0x303a90, _0x4ba734, _0x25afcb, _0x86e6ca, _0x5b3d8c, _0x429962, _0x12d050, _0x181afa) {
      var _0x567c76 = _0x17876e();
      try {
        return _0x1892ea(_0x48b455, _0x2d32e6, _0x303a90, _0x4ba734, _0x25afcb, _0x86e6ca, _0x5b3d8c, _0x429962, _0x12d050, _0x181afa);
      } catch (_0x3f2f39) {
        _0x9d36f7(_0x567c76);
        if (_0x3f2f39 !== _0x3f2f39 + 0) {
          throw _0x3f2f39;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x950f8f(_0x585634, _0x484522, _0x490bbb, _0x50e052, _0x4eb157) {
      var _0x3733df = _0x17876e();
      try {
        return _0x5dfc94(_0x585634, _0x484522, _0x490bbb, _0x50e052, _0x4eb157);
      } catch (_0x500a5c) {
        _0x9d36f7(_0x3733df);
        if (_0x500a5c !== _0x500a5c + 0) {
          throw _0x500a5c;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x51f3e8(_0x2f51fe, _0x26c67b, _0x16a0cd) {
      var _0x28f2fe = _0x17876e();
      try {
        return _0x221864(_0x2f51fe, _0x26c67b, _0x16a0cd);
      } catch (_0x489f03) {
        _0x9d36f7(_0x28f2fe);
        if (_0x489f03 !== _0x489f03 + 0) {
          throw _0x489f03;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x4b2ac5(_0x25ca9d, _0x5913f4, _0x359e73, _0x175840, _0x3574fb, _0x2b1e2a, _0x4d96ed, _0x2fdb31, _0x166972, _0x1a09be, _0x32ffb8, _0x538f3a, _0x29eacb) {
      var _0x2b4360 = _0x17876e();
      try {
        _0x5e4b00(_0x25ca9d, _0x5913f4, _0x359e73, _0x175840, _0x3574fb, _0x2b1e2a, _0x4d96ed, _0x2fdb31, _0x166972, _0x1a09be, _0x32ffb8, _0x538f3a, _0x29eacb);
      } catch (_0xbdd03d) {
        _0x9d36f7(_0x2b4360);
        if (_0xbdd03d !== _0xbdd03d + 0) {
          throw _0xbdd03d;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3b7dd3(_0x44a311, _0x2df900, _0x2cb7a4, _0x54fd9f, _0x1a1c48, _0x3327f8) {
      var _0x371d7a = _0x17876e();
      try {
        _0x2f9847(_0x44a311, _0x2df900, _0x2cb7a4, _0x54fd9f, _0x1a1c48, _0x3327f8);
      } catch (_0x3e34a1) {
        _0x9d36f7(_0x371d7a);
        if (_0x3e34a1 !== _0x3e34a1 + 0) {
          throw _0x3e34a1;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x15c3a0(_0x44bad1, _0x1aa719, _0x1a6d71, _0x57f404, _0x38bea3) {
      var _0x7367a9 = _0x17876e();
      try {
        return _0x2c3b66(_0x44bad1, _0x1aa719, _0x1a6d71, _0x57f404, _0x38bea3);
      } catch (_0x1aed13) {
        _0x9d36f7(_0x7367a9);
        if (_0x1aed13 !== _0x1aed13 + 0) {
          throw _0x1aed13;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3a4740(_0xac8058, _0x57d849, _0x128f2, _0x390a94, _0x103a8c) {
      var _0x7e3c4c = _0x17876e();
      try {
        _0x2de7ec(_0xac8058, _0x57d849, _0x128f2, _0x390a94, _0x103a8c);
      } catch (_0x5893c3) {
        _0x9d36f7(_0x7e3c4c);
        if (_0x5893c3 !== _0x5893c3 + 0) {
          throw _0x5893c3;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x566c31(_0x4be5c0, _0x621061, _0x4420dc, _0x2203a7, _0x22bfab, _0x4b46f9) {
      var _0x2ff509 = _0x17876e();
      try {
        return _0x58e6c3(_0x4be5c0, _0x621061, _0x4420dc, _0x2203a7, _0x22bfab, _0x4b46f9);
      } catch (_0x5a8452) {
        _0x9d36f7(_0x2ff509);
        if (_0x5a8452 !== _0x5a8452 + 0) {
          throw _0x5a8452;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3d98f7(_0x351d26, _0x26f0dc, _0x1eb653, _0x1170d2, _0x38fcf4, _0x471ba2) {
      var _0x5a12db = _0x17876e();
      try {
        return _0x135e5e(_0x351d26, _0x26f0dc, _0x1eb653, _0x1170d2, _0x38fcf4, _0x471ba2);
      } catch (_0x452fda) {
        _0x9d36f7(_0x5a12db);
        if (_0x452fda !== _0x452fda + 0) {
          throw _0x452fda;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x145db5(_0x2a2324, _0x344136, _0x8b785f, _0x157315) {
      var _0x76414b = _0x17876e();
      try {
        _0x5d6fa1(_0x2a2324, _0x344136, _0x8b785f, _0x157315);
      } catch (_0x352c45) {
        _0x9d36f7(_0x76414b);
        if (_0x352c45 !== _0x352c45 + 0) {
          throw _0x352c45;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0xfaf72c(_0x20c487, _0x46f8f2, _0x1f7e0b, _0xcc581a) {
      var _0x49272a = _0x17876e();
      try {
        return _0x99dfb2(_0x20c487, _0x46f8f2, _0x1f7e0b, _0xcc581a);
      } catch (_0x26c2cc) {
        _0x9d36f7(_0x49272a);
        if (_0x26c2cc !== _0x26c2cc + 0) {
          throw _0x26c2cc;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x2c3d15(_0x5d3388, _0x83cdef, _0x47c9d8, _0x43a2ff, _0x168d1c, _0x205d16, _0x5b2525, _0x3f38b0) {
      var _0x30f861 = _0x17876e();
      try {
        return _0x205f9d(_0x5d3388, _0x83cdef, _0x47c9d8, _0x43a2ff, _0x168d1c, _0x205d16, _0x5b2525, _0x3f38b0);
      } catch (_0x4f357b) {
        _0x9d36f7(_0x30f861);
        if (_0x4f357b !== _0x4f357b + 0) {
          throw _0x4f357b;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x45080f(_0xbad6df, _0x59dbe7, _0x1fe7a6, _0x57b55d, _0x2bccef) {
      var _0x55d60f = _0x17876e();
      try {
        return _0x4322d4(_0xbad6df, _0x59dbe7, _0x1fe7a6, _0x57b55d, _0x2bccef);
      } catch (_0x3c2be0) {
        _0x9d36f7(_0x55d60f);
        if (_0x3c2be0 !== _0x3c2be0 + 0) {
          throw _0x3c2be0;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x47b381(_0x1c3286, _0xf867ce) {
      var _0x53b717 = _0x17876e();
      try {
        return _0x1483b8(_0x1c3286, _0xf867ce);
      } catch (_0x36a629) {
        _0x9d36f7(_0x53b717);
        if (_0x36a629 !== _0x36a629 + 0) {
          throw _0x36a629;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x23a882(_0x4a0a50, _0x49aa6b, _0x52de83) {
      var _0x203ee8 = _0x17876e();
      try {
        return _0xec2d23(_0x4a0a50, _0x49aa6b, _0x52de83);
      } catch (_0x1decee) {
        _0x9d36f7(_0x203ee8);
        if (_0x1decee !== _0x1decee + 0) {
          throw _0x1decee;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x569048(_0x1cd8fc) {
      var _0x1cacdb = _0x17876e();
      try {
        return _0x4add67(_0x1cd8fc);
      } catch (_0x5947bc) {
        _0x9d36f7(_0x1cacdb);
        if (_0x5947bc !== _0x5947bc + 0) {
          throw _0x5947bc;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x1a61c9(_0x1fc150, _0x198553, _0x405297, _0x51d3e3, _0x5641fe, _0xd48da0, _0x7826e2, _0x359b4b) {
      var _0x4a7daa = _0x17876e();
      try {
        return _0x53ec33(_0x1fc150, _0x198553, _0x405297, _0x51d3e3, _0x5641fe, _0xd48da0, _0x7826e2, _0x359b4b);
      } catch (_0x3c93e1) {
        _0x9d36f7(_0x4a7daa);
        if (_0x3c93e1 !== _0x3c93e1 + 0) {
          throw _0x3c93e1;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x50858e(_0x819752, _0x176bc7, _0x25fd4c, _0x4352ce, _0x5dc7b0) {
      var _0x219bce = _0x17876e();
      try {
        _0xbcd887(_0x819752, _0x176bc7, _0x25fd4c, _0x4352ce, _0x5dc7b0);
      } catch (_0x8a812e) {
        _0x9d36f7(_0x219bce);
        if (_0x8a812e !== _0x8a812e + 0) {
          throw _0x8a812e;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x5144b4(_0x5f2ab9, _0x299a3b, _0x50fd27, _0x52b28d, _0x116383, _0x5ef936) {
      var _0x3a9b9a = _0x17876e();
      try {
        _0x2d9fd8(_0x5f2ab9, _0x299a3b, _0x50fd27, _0x52b28d, _0x116383, _0x5ef936);
      } catch (_0x233855) {
        _0x9d36f7(_0x3a9b9a);
        if (_0x233855 !== _0x233855 + 0) {
          throw _0x233855;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x357b49(_0x131b2f, _0x25e780, _0x5a3bd5, _0x55b8a9) {
      var _0x4d4cb3 = _0x17876e();
      try {
        return _0x42d47f(_0x131b2f, _0x25e780, _0x5a3bd5, _0x55b8a9);
      } catch (_0x1f3eeb) {
        _0x9d36f7(_0x4d4cb3);
        if (_0x1f3eeb !== _0x1f3eeb + 0) {
          throw _0x1f3eeb;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x2bd02d(_0x17e7dd, _0x3013a9, _0x180fda, _0x110ad9, _0xdd14f2, _0xc8a795) {
      var _0x85288f = _0x17876e();
      try {
        return _0x38bba6(_0x17e7dd, _0x3013a9, _0x180fda, _0x110ad9, _0xdd14f2, _0xc8a795);
      } catch (_0x5ab97c) {
        _0x9d36f7(_0x85288f);
        if (_0x5ab97c !== _0x5ab97c + 0) {
          throw _0x5ab97c;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x70218f(_0xa21eb4, _0x228f12, _0x14c05d, _0xb1d369, _0x4a0881, _0x106b45) {
      var _0x390166 = _0x17876e();
      try {
        return _0x16f210(_0xa21eb4, _0x228f12, _0x14c05d, _0xb1d369, _0x4a0881, _0x106b45);
      } catch (_0x397adb) {
        _0x9d36f7(_0x390166);
        if (_0x397adb !== _0x397adb + 0) {
          throw _0x397adb;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x599a10(_0x36064e, _0x185e5c, _0x46d9a6, _0x218706, _0x46855c, _0x366268, _0x1b4935, _0x5a9ef3, _0x20b7f4, _0x7ef1e5) {
      var _0x88c793 = _0x17876e();
      try {
        _0x376e57(_0x36064e, _0x185e5c, _0x46d9a6, _0x218706, _0x46855c, _0x366268, _0x1b4935, _0x5a9ef3, _0x20b7f4, _0x7ef1e5);
      } catch (_0x34f62a) {
        _0x9d36f7(_0x88c793);
        if (_0x34f62a !== _0x34f62a + 0) {
          throw _0x34f62a;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x4d62ac(_0x122838, _0x2ab396, _0x430f9c, _0x260b67, _0x2a5735) {
      var _0x5c145d = _0x17876e();
      try {
        return _0x5d2a02(_0x122838, _0x2ab396, _0x430f9c, _0x260b67, _0x2a5735);
      } catch (_0x51989f) {
        _0x9d36f7(_0x5c145d);
        if (_0x51989f !== _0x51989f + 0) {
          throw _0x51989f;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x1a2620(_0x501eb2, _0x1a20a2, _0x295f83, _0x14b63d, _0x3e0e5c, _0x371ff0, _0x23983f, _0x241554) {
      var _0x3c27d9 = _0x17876e();
      try {
        _0x2027f1(_0x501eb2, _0x1a20a2, _0x295f83, _0x14b63d, _0x3e0e5c, _0x371ff0, _0x23983f, _0x241554);
      } catch (_0x2ee794) {
        _0x9d36f7(_0x3c27d9);
        if (_0x2ee794 !== _0x2ee794 + 0) {
          throw _0x2ee794;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x1fdb2e(_0x1b2329, _0x491a07, _0x38224a) {
      var _0x4debe5 = _0x17876e();
      try {
        return _0x5505d6(_0x1b2329, _0x491a07, _0x38224a);
      } catch (_0x249375) {
        _0x9d36f7(_0x4debe5);
        if (_0x249375 !== _0x249375 + 0) {
          throw _0x249375;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x353c32(_0x230ab7, _0x279bb4, _0x46da69, _0x1fdffe, _0x182094, _0x208640, _0x5a0cc2) {
      var _0x305cde = _0x17876e();
      try {
        _0x2586c3(_0x230ab7, _0x279bb4, _0x46da69, _0x1fdffe, _0x182094, _0x208640, _0x5a0cc2);
      } catch (_0x1413c6) {
        _0x9d36f7(_0x305cde);
        if (_0x1413c6 !== _0x1413c6 + 0) {
          throw _0x1413c6;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x15545e(_0x437a93, _0x18bc68, _0x1456b7, _0x3320b5, _0x383281, _0x5c8f46) {
      var _0x19ae43 = _0x17876e();
      try {
        return _0x165a61(_0x437a93, _0x18bc68, _0x1456b7, _0x3320b5, _0x383281, _0x5c8f46);
      } catch (_0x2b3c5e) {
        _0x9d36f7(_0x19ae43);
        if (_0x2b3c5e !== _0x2b3c5e + 0) {
          throw _0x2b3c5e;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x5239d9(_0x5929d0, _0x34c726, _0x461abf, _0x49004a, _0x3f2805) {
      var _0x3e06b9 = _0x17876e();
      try {
        return _0x35f57c(_0x5929d0, _0x34c726, _0x461abf, _0x49004a, _0x3f2805);
      } catch (_0x4db5d6) {
        _0x9d36f7(_0x3e06b9);
        if (_0x4db5d6 !== _0x4db5d6 + 0) {
          throw _0x4db5d6;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x47b866(_0x68c354, _0x313d11, _0x49aabf, _0x57d3b6, _0x4b63a3, _0x46d35f) {
      var _0x36c6fd = _0x17876e();
      try {
        return _0x9e9cba(_0x68c354, _0x313d11, _0x49aabf, _0x57d3b6, _0x4b63a3, _0x46d35f);
      } catch (_0x4ef3ab) {
        _0x9d36f7(_0x36c6fd);
        if (_0x4ef3ab !== _0x4ef3ab + 0) {
          throw _0x4ef3ab;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x508c07(_0x3c13c1, _0x58feda, _0x2debb4, _0x52ed06) {
      var _0x1523b2 = _0x17876e();
      try {
        return _0x43b84b(_0x3c13c1, _0x58feda, _0x2debb4, _0x52ed06);
      } catch (_0x27788f) {
        _0x9d36f7(_0x1523b2);
        if (_0x27788f !== _0x27788f + 0) {
          throw _0x27788f;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0xd43543(_0x5c6325, _0x28c155, _0x1781b3, _0x1eec35, _0x3edaf9, _0x3cb916, _0x31c91e, _0x3d5a19, _0x4bb24f, _0x50501a, _0x572fad) {
      var _0x137190 = _0x17876e();
      try {
        return _0x58ec59(_0x5c6325, _0x28c155, _0x1781b3, _0x1eec35, _0x3edaf9, _0x3cb916, _0x31c91e, _0x3d5a19, _0x4bb24f, _0x50501a, _0x572fad);
      } catch (_0x449835) {
        _0x9d36f7(_0x137190);
        if (_0x449835 !== _0x449835 + 0) {
          throw _0x449835;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x4cc33b(_0x48936e, _0x17d9f5, _0x5aeb60, _0x3e0692, _0x3a2da8, _0x4d9781, _0x65e693) {
      var _0x4c8eed = _0x17876e();
      try {
        _0x1a6802(_0x48936e, _0x17d9f5, _0x5aeb60, _0x3e0692, _0x3a2da8, _0x4d9781, _0x65e693);
      } catch (_0x2e81a1) {
        _0x9d36f7(_0x4c8eed);
        if (_0x2e81a1 !== _0x2e81a1 + 0) {
          throw _0x2e81a1;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x5a1f63(_0x4619df, _0x2ae5e2, _0x5ba6f2, _0x4fc24e, _0xba3f49, _0x49d37c, _0x1ba50, _0x1c3c8d, _0x3ba828, _0x17dfc4, _0x40e612, _0x1d818f, _0x253870, _0x2c30ec, _0x41fb09, _0x49c7a6, _0x4cf2a9) {
      var _0x5cd8a6 = _0x17876e();
      try {
        _0x2a80a0(_0x4619df, _0x2ae5e2, _0x5ba6f2, _0x4fc24e, _0xba3f49, _0x49d37c, _0x1ba50, _0x1c3c8d, _0x3ba828, _0x17dfc4, _0x40e612, _0x1d818f, _0x253870, _0x2c30ec, _0x41fb09, _0x49c7a6, _0x4cf2a9);
      } catch (_0x5d6023) {
        _0x9d36f7(_0x5cd8a6);
        if (_0x5d6023 !== _0x5d6023 + 0) {
          throw _0x5d6023;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0xa8fef4(_0x54c08e, _0x1c1ff6, _0x40b024, _0x6e5b9c, _0x42ceb2, _0x2de39d) {
      var _0x276540 = _0x17876e();
      try {
        return _0x51a8a8(_0x54c08e, _0x1c1ff6, _0x40b024, _0x6e5b9c, _0x42ceb2, _0x2de39d);
      } catch (_0x17ee71) {
        _0x9d36f7(_0x276540);
        if (_0x17ee71 !== _0x17ee71 + 0) {
          throw _0x17ee71;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0xd4405f(_0x4b74ff, _0x19204c, _0x1a0a2f, _0x46b723, _0xfe8d19, _0x21e4aa, _0x4c7d18) {
      var _0x1b37e8 = _0x17876e();
      try {
        return _0x313026(_0x4b74ff, _0x19204c, _0x1a0a2f, _0x46b723, _0xfe8d19, _0x21e4aa, _0x4c7d18);
      } catch (_0x1e5400) {
        _0x9d36f7(_0x1b37e8);
        if (_0x1e5400 !== _0x1e5400 + 0) {
          throw _0x1e5400;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x1f54a2(_0x86c6cf, _0x27dc01, _0x5348e8, _0x1725f, _0x37e818, _0x515169, _0x57b025) {
      var _0x4a8af4 = _0x17876e();
      try {
        _0x5660bb(_0x86c6cf, _0x27dc01, _0x5348e8, _0x1725f, _0x37e818, _0x515169, _0x57b025);
      } catch (_0x498eb1) {
        _0x9d36f7(_0x4a8af4);
        if (_0x498eb1 !== _0x498eb1 + 0) {
          throw _0x498eb1;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x14a550(_0x251960, _0x3f3df3, _0x285a0c, _0x44288c, _0x3b7f01, _0x42af65) {
      var _0x161da9 = _0x17876e();
      try {
        return _0xbd7545(_0x251960, _0x3f3df3, _0x285a0c, _0x44288c, _0x3b7f01, _0x42af65);
      } catch (_0x458d96) {
        _0x9d36f7(_0x161da9);
        if (_0x458d96 !== _0x458d96 + 0) {
          throw _0x458d96;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x4ef573(_0x3a4036, _0xf6d7b, _0x4276a6, _0x3d62cf) {
      var _0x1388f4 = _0x17876e();
      try {
        return _0x194c4b(_0x3a4036, _0xf6d7b, _0x4276a6, _0x3d62cf);
      } catch (_0x195f3b) {
        _0x9d36f7(_0x1388f4);
        if (_0x195f3b !== _0x195f3b + 0) {
          throw _0x195f3b;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x408afa(_0x39a27f, _0x8ff1de, _0x450344, _0x30057b, _0x47bbe5, _0x15730c) {
      var _0x4b0bd0 = _0x17876e();
      try {
        _0x29e875(_0x39a27f, _0x8ff1de, _0x450344, _0x30057b, _0x47bbe5, _0x15730c);
      } catch (_0x2825e3) {
        _0x9d36f7(_0x4b0bd0);
        if (_0x2825e3 !== _0x2825e3 + 0) {
          throw _0x2825e3;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x4ef798(_0x302219, _0x7b3519, _0x4fa52c, _0x50fbec, _0x19312c) {
      var _0x3954fa = _0x17876e();
      try {
        return _0x4b4d28(_0x302219, _0x7b3519, _0x4fa52c, _0x50fbec, _0x19312c);
      } catch (_0x59896e) {
        _0x9d36f7(_0x3954fa);
        if (_0x59896e !== _0x59896e + 0) {
          throw _0x59896e;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x206313(_0x96dcc6, _0x48ec95, _0x4dea80, _0x4ea56a, _0x577641, _0x4eb024) {
      var _0x1244a9 = _0x17876e();
      try {
        return _0x48fd04(_0x96dcc6, _0x48ec95, _0x4dea80, _0x4ea56a, _0x577641, _0x4eb024);
      } catch (_0xe18f65) {
        _0x9d36f7(_0x1244a9);
        if (_0xe18f65 !== _0xe18f65 + 0) {
          throw _0xe18f65;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x2a2d58(_0x5070e3, _0x4bce84, _0x2786f3, _0x4bcbb2, _0x25a687, _0x3d9bb5, _0x527961) {
      var _0x526bc3 = _0x17876e();
      try {
        return _0x5cce37(_0x5070e3, _0x4bce84, _0x2786f3, _0x4bcbb2, _0x25a687, _0x3d9bb5, _0x527961);
      } catch (_0x46a9dc) {
        _0x9d36f7(_0x526bc3);
        if (_0x46a9dc !== _0x46a9dc + 0) {
          throw _0x46a9dc;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x276cb2(_0x1de17b, _0x4d2cf9, _0x279b57, _0x27894a, _0x5c182c, _0x2495df, _0x3c10bd, _0x12eba2, _0x260420) {
      var _0x19f9cc = _0x17876e();
      try {
        _0x26ffac(_0x1de17b, _0x4d2cf9, _0x279b57, _0x27894a, _0x5c182c, _0x2495df, _0x3c10bd, _0x12eba2, _0x260420);
      } catch (_0x1aee4f) {
        _0x9d36f7(_0x19f9cc);
        if (_0x1aee4f !== _0x1aee4f + 0) {
          throw _0x1aee4f;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x6c4b0c(_0x3ff4ef, _0x293bdf, _0x1ebfde, _0x16e9a4, _0x131fca, _0x122e30, _0xab9e72, _0x1da1f0, _0x5d979f, _0x35225a, _0x3ff6c6, _0x8b03ee, _0x1f90c1, _0x99857e) {
      var _0x57b813 = _0x17876e();
      try {
        _0x95cda1(_0x3ff4ef, _0x293bdf, _0x1ebfde, _0x16e9a4, _0x131fca, _0x122e30, _0xab9e72, _0x1da1f0, _0x5d979f, _0x35225a, _0x3ff6c6, _0x8b03ee, _0x1f90c1, _0x99857e);
      } catch (_0x1e9dc2) {
        _0x9d36f7(_0x57b813);
        if (_0x1e9dc2 !== _0x1e9dc2 + 0) {
          throw _0x1e9dc2;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x1a2f78(_0x57606b, _0x3d88e4, _0x57e3e3, _0x497266, _0x3ff0cc, _0x5e771c, _0xd7658f) {
      var _0x16c7fc = _0x17876e();
      try {
        return _0x976968(_0x57606b, _0x3d88e4, _0x57e3e3, _0x497266, _0x3ff0cc, _0x5e771c, _0xd7658f);
      } catch (_0x5c35ad) {
        _0x9d36f7(_0x16c7fc);
        if (_0x5c35ad !== _0x5c35ad + 0) {
          throw _0x5c35ad;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x1c52d7(_0x112fc6, _0x5810ae, _0x56fe99, _0x59fac5, _0x120edf, _0x1e5b81, _0x30caa7, _0x4e1e02, _0x5355d8, _0xd782e) {
      var _0x316839 = _0x17876e();
      try {
        return _0x21ae63(_0x112fc6, _0x5810ae, _0x56fe99, _0x59fac5, _0x120edf, _0x1e5b81, _0x30caa7, _0x4e1e02, _0x5355d8, _0xd782e);
      } catch (_0x595aab) {
        _0x9d36f7(_0x316839);
        if (_0x595aab !== _0x595aab + 0) {
          throw _0x595aab;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x410c1e(_0x4e3c21, _0xa4ac3b, _0x5a0c55, _0x2fb06a, _0x1c55d6, _0x508cf6, _0x81bd12) {
      var _0x54cc04 = _0x17876e();
      try {
        _0x137ef5(_0x4e3c21, _0xa4ac3b, _0x5a0c55, _0x2fb06a, _0x1c55d6, _0x508cf6, _0x81bd12);
      } catch (_0x5e31a2) {
        _0x9d36f7(_0x54cc04);
        if (_0x5e31a2 !== _0x5e31a2 + 0) {
          throw _0x5e31a2;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x7fa211(_0x29b795, _0x46b082, _0x52df45, _0x2e23a5, _0x399738, _0x2bf1e7, _0x30ffa0, _0x8b06fb, _0x204c7d, _0x54f961, _0x3e07d0, _0x322976) {
      var _0x426a25 = _0x17876e();
      try {
        return _0x235600(_0x29b795, _0x46b082, _0x52df45, _0x2e23a5, _0x399738, _0x2bf1e7, _0x30ffa0, _0x8b06fb, _0x204c7d, _0x54f961, _0x3e07d0, _0x322976);
      } catch (_0x2ee8e0) {
        _0x9d36f7(_0x426a25);
        if (_0x2ee8e0 !== _0x2ee8e0 + 0) {
          throw _0x2ee8e0;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x2f6e3e(_0x51650f, _0x93584, _0x4ccf52, _0x38388e, _0x42f0f0, _0x28f133, _0x36bd1e, _0x543697, _0x5d8486, _0x234818) {
      var _0x35b9f3 = _0x17876e();
      try {
        return _0x596246(_0x51650f, _0x93584, _0x4ccf52, _0x38388e, _0x42f0f0, _0x28f133, _0x36bd1e, _0x543697, _0x5d8486, _0x234818);
      } catch (_0x353bcd) {
        _0x9d36f7(_0x35b9f3);
        if (_0x353bcd !== _0x353bcd + 0) {
          throw _0x353bcd;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x1329ea(_0x518503, _0x5c9aa8, _0x35504c, _0xeb7e5d, _0x51879b, _0x10af20, _0x16aa7b, _0x1171dc, _0x3c9832, _0x592281, _0x21318d, _0x128a29) {
      var _0x5bd3c1 = _0x17876e();
      try {
        return _0x553e96(_0x518503, _0x5c9aa8, _0x35504c, _0xeb7e5d, _0x51879b, _0x10af20, _0x16aa7b, _0x1171dc, _0x3c9832, _0x592281, _0x21318d, _0x128a29);
      } catch (_0x37d008) {
        _0x9d36f7(_0x5bd3c1);
        if (_0x37d008 !== _0x37d008 + 0) {
          throw _0x37d008;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x49d53f(_0x40ca10, _0x4ff23b, _0x476170, _0x12019c) {
      var _0x755a7d = _0x17876e();
      try {
        _0x2fe9fc(_0x40ca10, _0x4ff23b, _0x476170, _0x12019c);
      } catch (_0x1ea258) {
        _0x9d36f7(_0x755a7d);
        if (_0x1ea258 !== _0x1ea258 + 0) {
          throw _0x1ea258;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x37d94d(_0x166bd4, _0x4a7279, _0x491072, _0xe093ca, _0x2fa788, _0x304895, _0x494fed, _0x10669d, _0x522332) {
      var _0x18a1ae = _0x17876e();
      try {
        _0x557e00(_0x166bd4, _0x4a7279, _0x491072, _0xe093ca, _0x2fa788, _0x304895, _0x494fed, _0x10669d, _0x522332);
      } catch (_0x1082a2) {
        _0x9d36f7(_0x18a1ae);
        if (_0x1082a2 !== _0x1082a2 + 0) {
          throw _0x1082a2;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x402e36(_0x4ca6b0, _0x4530a0, _0x7a7a98, _0x2feff6) {
      var _0xe82ddf = _0x17876e();
      try {
        return _0x378a90(_0x4ca6b0, _0x4530a0, _0x7a7a98, _0x2feff6);
      } catch (_0x45a038) {
        _0x9d36f7(_0xe82ddf);
        if (_0x45a038 !== _0x45a038 + 0) {
          throw _0x45a038;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x5d0c36(_0x41fb1b, _0x1c0005, _0x49fca5, _0x17e809) {
      var _0x978362 = _0x17876e();
      try {
        return _0x120b83(_0x41fb1b, _0x1c0005, _0x49fca5, _0x17e809);
      } catch (_0x1d6806) {
        _0x9d36f7(_0x978362);
        if (_0x1d6806 !== _0x1d6806 + 0) {
          throw _0x1d6806;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x20142b(_0x21358a, _0x265149, _0x24f03a, _0x1cf2e6, _0x4f622e, _0x2ee01, _0xc01c78) {
      var _0x4554a5 = _0x17876e();
      try {
        return _0x2217d0(_0x21358a, _0x265149, _0x24f03a, _0x1cf2e6, _0x4f622e, _0x2ee01, _0xc01c78);
      } catch (_0x54bdd7) {
        _0x9d36f7(_0x4554a5);
        if (_0x54bdd7 !== _0x54bdd7 + 0) {
          throw _0x54bdd7;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x3bfb66(_0x4ed1e8, _0xf30b51, _0x27e6e4, _0x48c4f5, _0x201d42, _0x20dca, _0x4591df, _0x1e3bb1, _0x20f95b, _0x5b7b66, _0x25aeed) {
      var _0x542f1f = _0x17876e();
      try {
        _0x18fef6(_0x4ed1e8, _0xf30b51, _0x27e6e4, _0x48c4f5, _0x201d42, _0x20dca, _0x4591df, _0x1e3bb1, _0x20f95b, _0x5b7b66, _0x25aeed);
      } catch (_0x6708a2) {
        _0x9d36f7(_0x542f1f);
        if (_0x6708a2 !== _0x6708a2 + 0) {
          throw _0x6708a2;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x1f7922(_0xbbc8c2, _0x212d2e, _0x35a2b2, _0x6e240a, _0x22e8ff, _0x28e759, _0x385789, _0x1d865a) {
      var _0x3888ee = _0x17876e();
      try {
        _0x523c51(_0xbbc8c2, _0x212d2e, _0x35a2b2, _0x6e240a, _0x22e8ff, _0x28e759, _0x385789, _0x1d865a);
      } catch (_0x276eaf) {
        _0x9d36f7(_0x3888ee);
        if (_0x276eaf !== _0x276eaf + 0) {
          throw _0x276eaf;
        }
        _0x5a0f93(1, 0);
      }
    }
    function _0x455b2d(_0x1fc09d, _0x2c2791, _0x33af85, _0x5abfeb, _0x119026, _0x20e5ec) {
      var _0x493e80 = _0x17876e();
      try {
        return _0x57fc33(_0x1fc09d, _0x2c2791, _0x33af85, _0x5abfeb, _0x119026, _0x20e5ec);
      } catch (_0x10eb58) {
        _0x9d36f7(_0x493e80);
        if (_0x10eb58 !== _0x10eb58 + 0) {
          throw _0x10eb58;
        }
        _0x5a0f93(1, 0);
      }
    }
    _0x1d435e.ccall = _0x1b752b;
    _0x1d435e.cwrap = _0x36b32f;
    _0x1d435e.stackTrace = _0xf3cbef;
    _0x1d435e.addRunDependency = _0x2a6f7b;
    _0x1d435e.removeRunDependency = _0x38c345;
    _0x1d435e.FS_createPath = _0x170eaf.createPath;
    _0x1d435e.FS_createDataFile = _0x170eaf.createDataFile;
    _0x1d435e.stackTrace = _0xf3cbef;
    var _0x522bb9;
    function _0x466466(_0x5bf962) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + _0x5bf962 + ")";
      this.status = _0x5bf962;
    }
    var _0x5f3cdd = false;
    _0x1a1dda = function _0x27aa9f() {
      if (!_0x522bb9) {
        _0x8084df();
      }
      if (!_0x522bb9) {
        _0x1a1dda = _0x27aa9f;
      }
    };
    function _0x5aaf83(_0xe18fb7) {
      var _0x270212 = _0x1d435e._main;
      _0xe18fb7 = _0xe18fb7 || [];
      var _0x1b8339 = _0xe18fb7.length + 1;
      var _0x54195a = _0x5c4392((_0x1b8339 + 1) * 4);
      _0x588032[_0x54195a >> 2] = _0x4f0cec(_0x42dbe8);
      for (var _0xaf1152 = 1; _0xaf1152 < _0x1b8339; _0xaf1152++) {
        _0x588032[(_0x54195a >> 2) + _0xaf1152] = _0x4f0cec(_0xe18fb7[_0xaf1152 - 1]);
      }
      _0x588032[(_0x54195a >> 2) + _0x1b8339] = 0;
      try {
        var _0x43e745 = _0x270212(_0x1b8339, _0x54195a);
        _0x2b0816(_0x43e745, true);
        return _0x43e745;
      } catch (_0x400074) {
        return _0x4bbf2b(_0x400074);
      } finally {
        _0x5f3cdd = true;
      }
    }
    function _0x8084df(_0xbaf3ed) {
      _0xbaf3ed = _0xbaf3ed || _0xe096c1;
      if (_0x45afe5 > 0) {
        return;
      }
      _0x13e9b2();
      if (_0x45afe5 > 0) {
        return;
      }
      function _0x152bc4() {
        if (_0x522bb9) {
          return;
        }
        _0x522bb9 = true;
        _0x1d435e.calledRun = true;
        if (_0x376923) {
          return;
        }
        _0x230ece();
        _0x4166dd();
        _0x5dc456(_0x1d435e);
        if (_0x1d435e.onRuntimeInitialized) {
          _0x1d435e.onRuntimeInitialized();
        }
        if (_0x1756a0) {
          _0x5aaf83(_0xbaf3ed);
        }
        _0x594216();
      }
      if (_0x1d435e.setStatus) {
        _0x1d435e.setStatus("Running...");
        setTimeout(function () {
          setTimeout(function () {
            _0x1d435e.setStatus("");
          }, 1);
          _0x152bc4();
        }, 1);
      } else {
        _0x152bc4();
      }
    }
    _0x1d435e.run = _0x8084df;
    function _0x2b0816(_0x52eec3, _0x51b6b3) {
      _0xe78001 = _0x52eec3;
      _0x33ee3d(_0x52eec3);
    }
    function _0x33ee3d(_0x59958c) {
      _0xe78001 = _0x59958c;
      if (!_0x5c1180()) {
        if (_0x1d435e.onExit) {
          _0x1d435e.onExit(_0x59958c);
        }
        _0x376923 = true;
      }
      _0x399cff(_0x59958c, new _0x466466(_0x59958c));
    }
    if (_0x1d435e.preInit) {
      if (typeof _0x1d435e.preInit == "function") {
        _0x1d435e.preInit = [_0x1d435e.preInit];
      }
      while (_0x1d435e.preInit.length > 0) {
        _0x1d435e.preInit.pop()();
      }
    }
    var _0x1756a0 = true;
    if (_0x1d435e.noInitialRun) {
      _0x1756a0 = false;
    }
    _0x8084df();
    return _0x438b33.ready;
  };
})();
if (typeof exports === "object" && typeof module === "object") {
  module.exports = unityFramework;
} else if (typeof define === "function" && define.amd) {
  define([], function () {
    return unityFramework;
  });
} else if (typeof exports === "object") {
  exports.unityFramework = unityFramework;
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
function gmdebugtime(_0x405ead) {
  console.log("_TIME_" + _0x405ead + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x59dfd6) {
  console.log(_0x59dfd6);
}
function gmEvent(_0x20e642, _0x359283) {
  loadGMData(_0x20e642, _0x359283);
}
function gmStartGame(_0x35fb66) {
  _0x35fb66();
}
function gmStartAds(_0x19298c) {
  _0x19298c();
}
let fireFPS = 0;
async function loadGMData(_0x5d4256, _0x51f7cf) {
  try {
    if (!config.buildAPI) {
      return;
    }
    if (!config.eventLog && _0x5d4256 != "document-ready" && _0x5d4256 != "start-game" && _0x5d4256 != "unload-game") {
      return;
    }
    if (_0x5d4256 == "fps") {
      try {
        let _0x5e7515 = _0x51f7cf.split("|");
        if (_0x5e7515.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x5e7515[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x5e7515[1]);
          }
        }
      } catch (_0x10a243) {
        console.log("Error extracting time from abc:", _0x10a243.message);
      }
    }
    let _0x153c8e = "";
    if (_0x51f7cf) {
      _0x153c8e = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x51f7cf));
    }
    _0x153c8e += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x153c8e += "&gid=" + config.gameId;
    if (_0x5d4256 == "ban-game" || _0x5d4256 == "document-ready" || _0x5d4256 == "start-game") {
      _0x153c8e += "&wtop=" + "escaperoad2d.io";
      _0x153c8e += "&hn=" + "https://games.1games.io";
      _0x153c8e += "&referrer=" + config.referrer;
    }
    let _0x44f953 = "&data=" + btoa(_0x153c8e);
    let _0x35bb70 = config.buildAPI + "?event=" + _0x5d4256 + _0x44f953;
    let _0x4e5ec7 = new XMLHttpRequest();
    _0x4e5ec7.open("GET", _0x35bb70);
    _0x4e5ec7.onreadystatechange = function () {
      if (_0x4e5ec7.readyState !== 4) {
        return;
      }
      if (_0x4e5ec7.status === 200) {
        console.log(_0x4e5ec7.responseText);
      } else {
        console.log("HTTP error", _0x4e5ec7.status, _0x4e5ec7.statusText);
      }
    };
    _0x4e5ec7.send();
  } catch (_0x3bbc5a) {}
}
function xorEncryptMsg(_0x50a8da) {
  let _0x5859d0 = "gmdata@&!message@!3!@";
  let _0x3b75ea = "";
  for (let _0x3763d7 = 0; _0x3763d7 < _0x50a8da.length; _0x3763d7++) {
    const _0x5561e7 = _0x50a8da.charCodeAt(_0x3763d7) ^ _0x5859d0.charCodeAt(_0x3763d7 % _0x5859d0.length);
    _0x3b75ea += String.fromCharCode(_0x5561e7);
  }
  return btoa(_0x3b75ea);
}
function check_event_log() {
  const _0x11b5b8 = window.location.search;
  const _0x14d02f = new URLSearchParams(_0x11b5b8);
  if (_0x14d02f.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x103665) {
  try {
    const _0x413dcd = eval(_0x103665);
    gmdebug("Result:", _0x413dcd);
    return _0x413dcd;
  } catch (_0x126749) {
    gmdebug("Error executing code:", _0x126749);
  }
}
window.addEventListener("beforeunload", function (_0x12bf7c) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x901097 = "data@&@#$@#^FFgdfg!1estimate";
      let _0xa73712 = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x1883bf = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x10d044 = _0xa73712;
      let _0x481703 = "";
      for (let _0x3e7b72 = 0; _0x3e7b72 < _0x1883bf.length; _0x3e7b72++) {
        const _0x4bac3a = _0x1883bf.charCodeAt(_0x3e7b72) ^ _0x901097.charCodeAt(_0x3e7b72 % _0x901097.length);
        _0x481703 += String.fromCharCode(_0x4bac3a);
      }
      sourceHtml = _0x481703;
      let _0x347052 = document.getElementById("gmsoft-jssdk");
      if (!_0x347052 || _0x347052.src != sourceHtml) {
      }
    } catch (_0x203a8e) {
    }
  }, 3000);
}
function check_enable_debug() {
  try {
    const _0x3d18e9 = window.location.search;
    const _0xd05576 = new URLSearchParams(_0x3d18e9);
    if (_0xd05576.has("d")) {} else {
      console.error = function () {};
      console.warn = function () {};
      console.log = function () {};
    }
  } catch (_0x2a19d0) {}
}