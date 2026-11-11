var unityFramework = (() => {
  var _0x172409 = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== "undefined") {
    _0x172409 = _0x172409 || __filename;
  }
  return function (_0x26fe4f) {
    _0x26fe4f = _0x26fe4f || {};
    var _0xbb74bb = typeof _0x26fe4f != "undefined" ? _0x26fe4f : {};
    var _0xb9e5b;
    var _0x549911;
    _0xbb74bb.ready = new Promise(function (_0x4a2671, _0x358f12) {
      _0xb9e5b = _0x4a2671;
      _0x549911 = _0x358f12;
    });
    function _0x216742(_0x48eb4f, _0x50fbfd) {
      _0x568432("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
      return _0x468390(_0x48eb4f, _0x50fbfd);
    }
    _0xbb74bb.Pointer_stringify = _0x216742;
    var _0x2e310c = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
    var _0x11b9d0 = _0x4bf58b().match(new RegExp(_0x2e310c));
    if (_0x11b9d0) {
      _0xbb74bb.stackTraceRegExp = new RegExp(_0x2e310c.replace("([^\\n]+)", _0x11b9d0[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
    }
    var _0x4e2c55 = function (_0x553cd6) {
      if (_0x25975d) {
        return;
      }
      _0x25975d = true;
      _0x2d5ce1 = 1;
      if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
        console.error("Pthread aborting at " + new Error().stack);
      }
      if (_0x553cd6 !== undefined) {
        _0x1ae8e6(_0x553cd6);
        _0x1771de(_0x553cd6);
        _0x553cd6 = _0x553cd6 instanceof Error ? _0x553cd6.toString() : JSON.stringify(_0x553cd6);
      } else {
        _0x553cd6 = "";
      }
      var _0x4e365a = "abort(" + _0x553cd6 + ") at " + _0x32c4af();
      if (_0xbb74bb.abortHandler && _0xbb74bb.abortHandler(_0x4e365a)) {
        return;
      }
      throw _0x4e365a;
    };
    _0xbb74bb.SetFullscreen = function (_0x566daa) {
      if (typeof _0x2eae3c === "undefined" || !_0x2eae3c) {
        console.log("Runtime not initialized yet.");
      } else if (typeof _0x1eec61 === "undefined") {
        console.log("Player not loaded yet.");
      } else {
        var _0x161af5 = _0x1eec61.canPerformEventHandlerRequests;
        _0x1eec61.canPerformEventHandlerRequests = function () {
          return 1;
        };
        _0xbb74bb.ccall("SetFullscreen", null, ["number"], [_0x566daa]);
        _0x1eec61.canPerformEventHandlerRequests = _0x161af5;
      }
    };
    if (!_0xbb74bb.ENVIRONMENT_IS_PTHREAD) {
      _0xbb74bb.preRun.push(function () {
        function _0x25a1f1() {
          _0x418a4e.queuePersist = function (_0x517946) {
            function _0x423028() {
              if (_0x517946.idbPersistState === "again") {
                _0x3cee7d();
              } else {
                _0x517946.idbPersistState = 0;
              }
            }
            function _0x3cee7d() {
              _0x517946.idbPersistState = "idb";
              _0x418a4e.syncfs(_0x517946, false, _0x423028);
            }
            if (!_0x517946.idbPersistState) {
              _0x517946.idbPersistState = setTimeout(_0x3cee7d, 0);
            } else if (_0x517946.idbPersistState === "idb") {
              _0x517946.idbPersistState = "again";
            }
          };
          _0x418a4e.mount = function (_0x2eb964) {
            var _0x4cf4b9 = _0x13fbf5.mount(_0x2eb964);
            if (typeof _0x2eb964 !== "undefined" && _0x2eb964.opts && _0x2eb964.opts.autoPersist) {
              _0x4cf4b9.idbPersistState = 0;
              var _0x4e8c3a = _0x4cf4b9.node_ops;
              _0x4cf4b9.node_ops = Object.assign({}, _0x4cf4b9.node_ops);
              _0x4cf4b9.node_ops.mknod = function (_0x5226c5, _0x187b0b, _0x65257f, _0x3cb6f1) {
                var _0x5cd65d = _0x4e8c3a.mknod(_0x5226c5, _0x187b0b, _0x65257f, _0x3cb6f1);
                _0x5cd65d.node_ops = _0x4cf4b9.node_ops;
                _0x5cd65d.idbfs_mount = _0x4cf4b9.mount;
                _0x5cd65d.memfs_stream_ops = _0x5cd65d.stream_ops;
                _0x5cd65d.stream_ops = Object.assign({}, _0x5cd65d.stream_ops);
                _0x5cd65d.stream_ops.write = function (_0x2b00a0, _0x325a09, _0x15576d, _0x5af8d8, _0x2bc328, _0xa6d43e) {
                  _0x2b00a0.node.isModified = true;
                  return _0x5cd65d.memfs_stream_ops.write(_0x2b00a0, _0x325a09, _0x15576d, _0x5af8d8, _0x2bc328, _0xa6d43e);
                };
                _0x5cd65d.stream_ops.close = function (_0x589285) {
                  var _0x2af7b2 = _0x589285.node;
                  if (_0x2af7b2.isModified) {
                    _0x418a4e.queuePersist(_0x2af7b2.idbfs_mount);
                    _0x2af7b2.isModified = false;
                  }
                  if (_0x2af7b2.memfs_stream_ops.close) {
                    return _0x2af7b2.memfs_stream_ops.close(_0x589285);
                  }
                };
                return _0x5cd65d;
              };
              _0x4cf4b9.node_ops.rmdir = function (_0x5d3a96, _0x448dba) {
                _0x418a4e.queuePersist(_0x4cf4b9.mount);
                return _0x4e8c3a.rmdir(_0x5d3a96, _0x448dba);
              };
              _0x4cf4b9.node_ops.unlink = function (_0x3bb5ce, _0x2c3f4e) {
                _0x418a4e.queuePersist(_0x4cf4b9.mount);
                return _0x4e8c3a.unlink(_0x3bb5ce, _0x2c3f4e);
              };
              _0x4cf4b9.node_ops.mkdir = function (_0xf10ca5, _0x244bca) {
                _0x418a4e.queuePersist(_0x4cf4b9.mount);
                return _0x4e8c3a.mkdir(_0xf10ca5, _0x244bca);
              };
              _0x4cf4b9.node_ops.symlink = function (_0x2ed2f7, _0x157ed3, _0xc0d205) {
                _0x418a4e.queuePersist(_0x4cf4b9.mount);
                return _0x4e8c3a.symlink(_0x2ed2f7, _0x157ed3, _0xc0d205);
              };
              _0x4cf4b9.node_ops.rename = function (_0x2ba626, _0x111b15, _0x2e72fa) {
                _0x418a4e.queuePersist(_0x4cf4b9.mount);
                return _0x4e8c3a.rename(_0x2ba626, _0x111b15, _0x2e72fa);
              };
            }
            return _0x4cf4b9;
          };
        }
        _0x25a1f1();
        var _0x121639 = _0xbb74bb.unityFileSystemInit || function () {
          _0x32ab7c.mkdir("/idbfs");
          _0xbb74bb.__unityIdbfsMount = _0x32ab7c.mount(_0x418a4e, {
            autoPersist: !!_0xbb74bb.autoSyncPersistentDataPath
          }, "/idbfs");
          _0xbb74bb.addRunDependency("JS_FileSystem_Mount");
          _0x32ab7c.syncfs(true, function (_0x4355c7) {
            if (_0x4355c7) {
              console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
            }
            _0xbb74bb.removeRunDependency("JS_FileSystem_Mount");
          });
        };
        _0x121639();
      });
    }
    var _0x3d6b26 = [];
    var _0x46c0da = false;
    var _0x18034b;
    var _0x44cdaf = null;
    function _0x85dbfd(_0x5e11f8) {
      var _0x29cf02 = Object.keys(_0x3d6b26);
      for (var _0x40325e = 0; _0x40325e < _0x29cf02.length; ++_0x40325e) {
        var _0x282cc3 = _0x3d6b26[_0x29cf02[_0x40325e]];
        if (_0x282cc3.deviceId && _0x282cc3.deviceId == _0x5e11f8.deviceId) {
          return _0x282cc3;
        }
      }
      for (var _0x40325e = 0; _0x40325e < _0x29cf02.length; ++_0x40325e) {
        var _0x282cc3 = _0x3d6b26[_0x29cf02[_0x40325e]];
        if (_0x282cc3 == _0x5e11f8) {
          return _0x282cc3;
        }
      }
      for (var _0x40325e = 0; _0x40325e < _0x29cf02.length; ++_0x40325e) {
        var _0x282cc3 = _0x3d6b26[_0x29cf02[_0x40325e]];
        if (_0x282cc3.label && _0x282cc3.label == _0x5e11f8.label) {
          return _0x282cc3;
        }
      }
      for (var _0x40325e = 0; _0x40325e < _0x29cf02.length; ++_0x40325e) {
        var _0x282cc3 = _0x3d6b26[_0x29cf02[_0x40325e]];
        if (_0x282cc3.groupId && _0x282cc3.kind && _0x282cc3.groupId == _0x5e11f8.groupId && _0x282cc3.kind == _0x5e11f8.kind) {
          return _0x282cc3;
        }
      }
    }
    function _0x3525c9() {
      for (var _0x1af2e8 = 0;; ++_0x1af2e8) {
        if (!_0x3d6b26[_0x1af2e8]) {
          return _0x1af2e8;
        }
      }
    }
    function _0x2c3ff4(_0x1385bf) {
      _0x18034b();
      _0x3d6b26 = [];
      var _0x135f21 = {};
      var _0x4e3edc = [];
      _0x1385bf.forEach(function (_0x2769be) {
        if (_0x2769be.kind === "videoinput") {
          var _0x4f58b3 = _0x85dbfd(_0x2769be);
          if (_0x4f58b3) {
            _0x135f21[_0x4f58b3.id] = _0x4f58b3;
          } else {
            _0x4e3edc.push(_0x2769be);
          }
        }
      });
      _0x3d6b26 = _0x135f21;
      _0x4e3edc.forEach(function (_0x44b6fb) {
        if (!_0x44b6fb.id) {
          _0x44b6fb.id = _0x3525c9();
          _0x44b6fb.name = _0x44b6fb.label || "Video input #" + (_0x44b6fb.id + 1);
          _0x44b6fb.isFrontFacing = _0x44b6fb.name.toLowerCase().includes("front") || !_0x44b6fb.name.toLowerCase().includes("front") && !_0x44b6fb.name.toLowerCase().includes("back");
          _0x3d6b26[_0x44b6fb.id] = _0x44b6fb;
        }
      });
    }
    function _0x100ee9() {
      if (!_0x3d6b26) {
        return;
      }
      navigator.mediaDevices.enumerateDevices().then(function (_0x2557de) {
        _0x2c3ff4(_0x2557de);
        _0x46c0da = true;
      }).catch(function (_0x51e162) {
        console.warn("Unable to enumerate media devices: " + _0x51e162 + "\nWebcams will not be available.");
        _0x3e8498();
      });
      if (/Firefox/.test(navigator.userAgent)) {
        setTimeout(_0x100ee9, 60000);
        _0x568432("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
      }
    }
    function _0x3e8498() {
      if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
        navigator.mediaDevices.removeEventListener("devicechange", _0x100ee9);
      }
      _0x3d6b26 = null;
    }
    _0xbb74bb.disableAccessToMediaDevices = _0x3e8498;
    if (!navigator.mediaDevices) {
      console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
      _0x3e8498();
    } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
      setTimeout(function () {
        try {
          _0x2d82f5("enumerateMediaDevices");
          _0x18034b = function () {
            if (_0x44cdaf !== null) {
              clearTimeout(_0x44cdaf);
            }
            _0x4c5673("enumerateMediaDevices");
            if (navigator.mediaDevices) {
              console.log("navigator.mediaDevices support available");
            }
            _0x18034b = function () {};
          };
          _0x100ee9();
          _0x44cdaf = setTimeout(_0x18034b, 1000);
          navigator.mediaDevices.addEventListener("devicechange", _0x100ee9);
        } catch (_0x279e70) {
          console.warn("Unable to enumerate media devices: " + _0x279e70);
          _0x3e8498();
        }
      }, 0);
    }
    function _0x565ac4(_0x5c05e6, _0xeea2e6, _0x4fa64b) {
      var _0x2e7f90 = _0x4e99c6(_0xeea2e6);
      var _0x2e1af6 = _0x4e99c6(_0x5c05e6);
      var _0x251f82 = 0;
      try {
        if (_0x4fa64b === undefined) {
          _0x1bf207(_0x2e1af6, _0x2e7f90);
        } else if (typeof _0x4fa64b === "string") {
          _0x251f82 = _0x4e99c6(_0x4fa64b);
          _0x40e52d(_0x2e1af6, _0x2e7f90, _0x251f82);
        } else if (typeof _0x4fa64b === "number") {
          _0x580caa(_0x2e1af6, _0x2e7f90, _0x4fa64b);
        } else {
          throw "" + _0x4fa64b + " is does not have a type which is supported by SendMessage.";
        }
      } finally {
        _0x1f42d0(_0x251f82);
        _0x1f42d0(_0x2e1af6);
        _0x1f42d0(_0x2e7f90);
      }
    }
    _0xbb74bb.SendMessage = _0x565ac4;
    var _0x1e14b5 = Object.assign({}, _0xbb74bb);
    var _0x4f9af2 = [];
    var _0x381db1 = "./this.program";
    var _0x24ba27 = (_0x50aeb7, _0x4b2da4) => {
      throw _0x4b2da4;
    };
    var _0x677ae = typeof window == "object";
    var _0x173e83 = typeof importScripts == "function";
    var _0x26b0ad = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
    var _0x2d9dfc = "";
    function _0x7fbbfd(_0x3b1170) {
      if (_0xbb74bb.locateFile) {
        return _0xbb74bb.locateFile(_0x3b1170, _0x2d9dfc);
      }
      return _0x2d9dfc + _0x3b1170;
    }
    var _0x35a605;
    var _0x22753a;
    var _0x1cfaba;
    var _0x3b2b04;
    function _0x136397(_0x2f6a88) {
      if (_0x2f6a88 instanceof _0x23c2f2) {
        return;
      }
      let _0x480d8d = _0x2f6a88;
      _0x1771de("exiting due to exception: " + _0x480d8d);
    }
    var _0x332572;
    var _0x418688;
    var _0x1398e3;
    if (_0x26b0ad) {
      if (_0x173e83) {
        _0x2d9dfc = require("path").dirname(_0x2d9dfc) + "/";
      } else {
        _0x2d9dfc = __dirname + "/";
      }
      _0x1398e3 = () => {
        if (!_0x418688) {
          _0x332572 = require("fs");
          _0x418688 = require("path");
        }
      };
      _0x35a605 = function _0x34d2ed(_0x579f7c, _0x217b54) {
        _0x1398e3();
        _0x579f7c = _0x418688.normalize(_0x579f7c);
        return _0x332572.readFileSync(_0x579f7c, _0x217b54 ? undefined : "utf8");
      };
      _0x1cfaba = _0x918c7d => {
        var _0x287c57 = _0x35a605(_0x918c7d, true);
        if (!_0x287c57.buffer) {
          _0x287c57 = new Uint8Array(_0x287c57);
        }
        return _0x287c57;
      };
      _0x22753a = (_0x1b647d, _0x209193, _0x30de97) => {
        _0x1398e3();
        _0x1b647d = _0x418688.normalize(_0x1b647d);
        _0x332572.readFile(_0x1b647d, function (_0x92ace9, _0x3d51af) {
          if (_0x92ace9) {
            _0x30de97(_0x92ace9);
          } else {
            _0x209193(_0x3d51af.buffer);
          }
        });
      };
      if (process.argv.length > 1) {
        _0x381db1 = process.argv[1].replace(/\\/g, "/");
      }
      _0x4f9af2 = process.argv.slice(2);
      process.on("uncaughtException", function (_0x4ef4ec) {
        if (!(_0x4ef4ec instanceof _0x23c2f2)) {
          throw _0x4ef4ec;
        }
      });
      process.on("unhandledRejection", function (_0x4eff11) {
        throw _0x4eff11;
      });
      _0x24ba27 = (_0x476f00, _0x3aacac) => {
        if (_0x11846c()) {
          process.exitCode = _0x476f00;
          throw _0x3aacac;
        }
        _0x136397(_0x3aacac);
        process.exit(_0x476f00);
      };
      _0xbb74bb.inspect = function () {
        return "[Emscripten Module object]";
      };
    } else if (_0x677ae || _0x173e83) {
      if (_0x173e83) {
        _0x2d9dfc = "https://gamea.azgame.io";
      } else if (typeof document != "undefined" && document.currentScript) {
        _0x2d9dfc = document.currentScript.src;
      }
      if (_0x172409) {
        _0x2d9dfc = _0x172409;
      }
      if (_0x2d9dfc.indexOf("blob:") !== 0) {
        _0x2d9dfc = _0x2d9dfc.substr(0, _0x2d9dfc.replace(/[?#].*/, "").lastIndexOf("/") + 1);
      } else {
        _0x2d9dfc = "";
      }
      {
        _0x35a605 = _0x49dde8 => {
          var _0x397d60 = new XMLHttpRequest();
          _0x397d60.open("GET", _0x49dde8, false);
          _0x397d60.send(null);
          return _0x397d60.responseText;
        };
        if (_0x173e83) {
          _0x1cfaba = _0x961cf4 => {
            var _0x3dbc79 = new XMLHttpRequest();
            _0x3dbc79.open("GET", _0x961cf4, false);
            _0x3dbc79.responseType = "arraybuffer";
            _0x3dbc79.send(null);
            return new Uint8Array(_0x3dbc79.response);
          };
        }
        _0x22753a = (_0x464ebf, _0x53cbf0, _0x5e3ba3) => {
          var _0x4783da = new XMLHttpRequest();
          _0x4783da.open("GET", _0x464ebf, true);
          _0x4783da.responseType = "arraybuffer";
          _0x4783da.onload = () => {
            if (_0x4783da.status == 200 || _0x4783da.status == 0 && _0x4783da.response) {
              _0x53cbf0(_0x4783da.response);
              return;
            }
            _0x5e3ba3();
          };
          _0x4783da.onerror = _0x5e3ba3;
          _0x4783da.send(null);
        };
      }
      _0x3b2b04 = _0x1dd7b6 => document.title = _0x1dd7b6;
    } else {}
    var _0x1ae8e6 = _0xbb74bb.print || console.log.bind(console);
    var _0x1771de = _0xbb74bb.printErr || console.warn.bind(console);
    Object.assign(_0xbb74bb, _0x1e14b5);
    _0x1e14b5 = null;
    if (_0xbb74bb.arguments) {
      _0x4f9af2 = _0xbb74bb.arguments;
    }
    if (_0xbb74bb.thisProgram) {
      _0x381db1 = _0xbb74bb.thisProgram;
    }
    if (_0xbb74bb.quit) {
      _0x24ba27 = _0xbb74bb.quit;
    }
    function _0x568432(_0xe188ec) {
      if (!_0x568432.shown) {
        _0x568432.shown = {};
      }
      if (!_0x568432.shown[_0xe188ec]) {
        _0x568432.shown[_0xe188ec] = 1;
        _0x1771de(_0xe188ec);
      }
    }
    var _0x5947fc = 0;
    var _0x32cdc1 = _0x8c091e => {
      _0x5947fc = _0x8c091e;
    };
    var _0x1be420 = () => _0x5947fc;
    var _0x20f1bf;
    if (_0xbb74bb.wasmBinary) {
      _0x20f1bf = _0xbb74bb.wasmBinary;
    }
    var _0xa52fa6 = _0xbb74bb.noExitRuntime || true;
    if (typeof WebAssembly != "object") {
      _0x4e2c55("no native wasm support detected");
    }
    var _0x1d6cae;
    var _0x25975d = false;
    var _0x2d5ce1;
    function _0x105928(_0x2967e8, _0x1ae179) {
      if (!_0x2967e8) {
        _0x4e2c55(_0x1ae179);
      }
    }
    function _0x5f46c7(_0x1ecbf4) {
      var _0x33b1d0 = _0xbb74bb["_" + _0x1ecbf4];
      return _0x33b1d0;
    }
    function _0x942417(_0x164d8d, _0x48a02b, _0x500d15, _0x389c21, _0x37aaae) {
      var _0x54c19b = {
        string: function (_0x43f1c5) {
          var _0x3df57d = 0;
          if (_0x43f1c5 !== null && _0x43f1c5 !== undefined && _0x43f1c5 !== 0) {
            var _0x1f0953 = (_0x43f1c5.length << 2) + 1;
            _0x3df57d = _0x1a18c9(_0x1f0953);
            _0x4fe443(_0x43f1c5, _0x3df57d, _0x1f0953);
          }
          return _0x3df57d;
        },
        array: function (_0x81963e) {
          var _0x5b2ae4 = _0x1a18c9(_0x81963e.length);
          _0x1c07f7(_0x81963e, _0x5b2ae4);
          return _0x5b2ae4;
        }
      };
      function _0x363048(_0x248296) {
        if (_0x48a02b === "string") {
          return _0x468390(_0x248296);
        }
        if (_0x48a02b === "boolean") {
          return Boolean(_0x248296);
        }
        return _0x248296;
      }
      var _0x45cc3a = _0x5f46c7(_0x164d8d);
      var _0x55835a = [];
      var _0x22a9fc = 0;
      if (_0x389c21) {
        for (var _0xc5beb3 = 0; _0xc5beb3 < _0x389c21.length; _0xc5beb3++) {
          var _0x240891 = _0x54c19b[_0x500d15[_0xc5beb3]];
          if (_0x240891) {
            if (_0x22a9fc === 0) {
              _0x22a9fc = _0x2683f0();
            }
            _0x55835a[_0xc5beb3] = _0x240891(_0x389c21[_0xc5beb3]);
          } else {
            _0x55835a[_0xc5beb3] = _0x389c21[_0xc5beb3];
          }
        }
      }
      var _0x18b1f9 = _0x45cc3a.apply(null, _0x55835a);
      function _0x101870(_0x32e198) {
        if (_0x22a9fc !== 0) {
          _0x9546d0(_0x22a9fc);
        }
        return _0x363048(_0x32e198);
      }
      _0x18b1f9 = _0x101870(_0x18b1f9);
      return _0x18b1f9;
    }
    function _0x5ea9a1(_0x3a2fe2, _0x22adf4, _0x416a17, _0x12e027) {
      _0x416a17 = _0x416a17 || [];
      var _0x2f2f80 = _0x416a17.every(function (_0x193314) {
        return _0x193314 === "number";
      });
      var _0x2fc9c6 = _0x22adf4 !== "string";
      if (_0x2fc9c6 && _0x2f2f80 && !_0x12e027) {
        return _0x5f46c7(_0x3a2fe2);
      }
      return function () {
        return _0x942417(_0x3a2fe2, _0x22adf4, _0x416a17, arguments, _0x12e027);
      };
    }
    var _0x1ea7b6 = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
    function _0x2aa2a9(_0x5be5ae, _0x34886e, _0x156fd8) {
      var _0x30a336 = _0x34886e + _0x156fd8;
      var _0x117bbb = _0x34886e;
      while (_0x5be5ae[_0x117bbb] && !(_0x117bbb >= _0x30a336)) {
        ++_0x117bbb;
      }
      if (_0x117bbb - _0x34886e > 16 && _0x5be5ae.buffer && _0x1ea7b6) {
        return _0x1ea7b6.decode(_0x5be5ae.subarray(_0x34886e, _0x117bbb));
      } else {
        var _0x4cfb13 = "";
        while (_0x34886e < _0x117bbb) {
          var _0x32a5f4 = _0x5be5ae[_0x34886e++];
          if (!(_0x32a5f4 & 128)) {
            _0x4cfb13 += String.fromCharCode(_0x32a5f4);
            continue;
          }
          var _0x231f56 = _0x5be5ae[_0x34886e++] & 63;
          if ((_0x32a5f4 & 224) == 192) {
            _0x4cfb13 += String.fromCharCode((_0x32a5f4 & 31) << 6 | _0x231f56);
            continue;
          }
          var _0x18f02d = _0x5be5ae[_0x34886e++] & 63;
          if ((_0x32a5f4 & 240) == 224) {
            _0x32a5f4 = (_0x32a5f4 & 15) << 12 | _0x231f56 << 6 | _0x18f02d;
          } else {
            _0x32a5f4 = (_0x32a5f4 & 7) << 18 | _0x231f56 << 12 | _0x18f02d << 6 | _0x5be5ae[_0x34886e++] & 63;
          }
          if (_0x32a5f4 < 65536) {
            _0x4cfb13 += String.fromCharCode(_0x32a5f4);
          } else {
            var _0x291f54 = _0x32a5f4 - 65536;
            _0x4cfb13 += String.fromCharCode(_0x291f54 >> 10 | 55296, _0x291f54 & 1023 | 56320);
          }
        }
      }
      return _0x4cfb13;
    }
    function _0x468390(_0x4533ac, _0x1afd2c) {
      if (_0x4533ac) {
        return _0x2aa2a9(_0x4924c2, _0x4533ac, _0x1afd2c);
      } else {
        return "";
      }
    }
    function _0x3ea15f(_0x1cea37, _0xa1045d, _0x417005, _0x2064a7) {
      if (!(_0x2064a7 > 0)) {
        return 0;
      }
      var _0x2bc474 = _0x417005;
      var _0x2a49d3 = _0x417005 + _0x2064a7 - 1;
      for (var _0x26bb23 = 0; _0x26bb23 < _0x1cea37.length; ++_0x26bb23) {
        var _0x3731b9 = _0x1cea37.charCodeAt(_0x26bb23);
        if (_0x3731b9 >= 55296 && _0x3731b9 <= 57343) {
          var _0x26fef9 = _0x1cea37.charCodeAt(++_0x26bb23);
          _0x3731b9 = 65536 + ((_0x3731b9 & 1023) << 10) | _0x26fef9 & 1023;
        }
        if (_0x3731b9 <= 127) {
          if (_0x417005 >= _0x2a49d3) {
            break;
          }
          _0xa1045d[_0x417005++] = _0x3731b9;
        } else if (_0x3731b9 <= 2047) {
          if (_0x417005 + 1 >= _0x2a49d3) {
            break;
          }
          _0xa1045d[_0x417005++] = _0x3731b9 >> 6 | 192;
          _0xa1045d[_0x417005++] = _0x3731b9 & 63 | 128;
        } else if (_0x3731b9 <= 65535) {
          if (_0x417005 + 2 >= _0x2a49d3) {
            break;
          }
          _0xa1045d[_0x417005++] = _0x3731b9 >> 12 | 224;
          _0xa1045d[_0x417005++] = _0x3731b9 >> 6 & 63 | 128;
          _0xa1045d[_0x417005++] = _0x3731b9 & 63 | 128;
        } else {
          if (_0x417005 + 3 >= _0x2a49d3) {
            break;
          }
          _0xa1045d[_0x417005++] = _0x3731b9 >> 18 | 240;
          _0xa1045d[_0x417005++] = _0x3731b9 >> 12 & 63 | 128;
          _0xa1045d[_0x417005++] = _0x3731b9 >> 6 & 63 | 128;
          _0xa1045d[_0x417005++] = _0x3731b9 & 63 | 128;
        }
      }
      _0xa1045d[_0x417005] = 0;
      return _0x417005 - _0x2bc474;
    }
    function _0x4fe443(_0x3e4334, _0x392c3b, _0x211f0e) {
      return _0x3ea15f(_0x3e4334, _0x4924c2, _0x392c3b, _0x211f0e);
    }
    function _0x53c190(_0x1edcad) {
      var _0x31ed5e = 0;
      for (var _0x1a8d74 = 0; _0x1a8d74 < _0x1edcad.length; ++_0x1a8d74) {
        var _0x4a9f71 = _0x1edcad.charCodeAt(_0x1a8d74);
        if (_0x4a9f71 >= 55296 && _0x4a9f71 <= 57343) {
          _0x4a9f71 = 65536 + ((_0x4a9f71 & 1023) << 10) | _0x1edcad.charCodeAt(++_0x1a8d74) & 1023;
        }
        if (_0x4a9f71 <= 127) {
          ++_0x31ed5e;
        } else if (_0x4a9f71 <= 2047) {
          _0x31ed5e += 2;
        } else if (_0x4a9f71 <= 65535) {
          _0x31ed5e += 3;
        } else {
          _0x31ed5e += 4;
        }
      }
      return _0x31ed5e;
    }
    function _0x59cbb4(_0x5a6305) {
      var _0x5467fd = _0x53c190(_0x5a6305) + 1;
      var _0x183da = _0x210cd3(_0x5467fd);
      if (_0x183da) {
        _0x3ea15f(_0x5a6305, _0x245769, _0x183da, _0x5467fd);
      }
      return _0x183da;
    }
    function _0x2f92e4(_0x210572) {
      var _0xf6068a = _0x53c190(_0x210572) + 1;
      var _0x169e03 = _0x1a18c9(_0xf6068a);
      _0x3ea15f(_0x210572, _0x245769, _0x169e03, _0xf6068a);
      return _0x169e03;
    }
    function _0x1c07f7(_0x4cc4e7, _0x4b5cf2) {
      _0x245769.set(_0x4cc4e7, _0x4b5cf2);
    }
    function _0x331341(_0xeb0358, _0x3397a4, _0x195fca) {
      for (var _0x27fbda = 0; _0x27fbda < _0xeb0358.length; ++_0x27fbda) {
        _0x245769[_0x3397a4++ >> 0] = _0xeb0358.charCodeAt(_0x27fbda);
      }
      if (!_0x195fca) {
        _0x245769[_0x3397a4 >> 0] = 0;
      }
    }
    var _0x2b651b;
    var _0x245769;
    var _0x4924c2;
    var _0x1f5adc;
    var _0x4cfc45;
    var _0x2f8726;
    var _0x1cca99;
    var _0x2e245b;
    var _0x537a20;
    function _0xaa2d5a(_0x47eb94) {
      _0x2b651b = _0x47eb94;
      _0xbb74bb.HEAP8 = _0x245769 = new Int8Array(_0x47eb94);
      _0xbb74bb.HEAP16 = _0x1f5adc = new Int16Array(_0x47eb94);
      _0xbb74bb.HEAP32 = _0x2f8726 = new Int32Array(_0x47eb94);
      _0xbb74bb.HEAPU8 = _0x4924c2 = new Uint8Array(_0x47eb94);
      _0xbb74bb.HEAPU16 = _0x4cfc45 = new Uint16Array(_0x47eb94);
      _0xbb74bb.HEAPU32 = _0x1cca99 = new Uint32Array(_0x47eb94);
      _0xbb74bb.HEAPF32 = _0x2e245b = new Float32Array(_0x47eb94);
      _0xbb74bb.HEAPF64 = _0x537a20 = new Float64Array(_0x47eb94);
    }
    var _0x176a46 = _0xbb74bb.INITIAL_MEMORY || 33554432;
    var _0x4581b7;
    var _0x26c0da = [];
    var _0x1bb99d = [];
    var _0x516e3a = [];
    var _0x365b45 = [];
    var _0x27013b = [];
    var _0x2eae3c = false;
    function _0x11846c() {
      return _0xa52fa6;
    }
    function _0x4b5cb2() {
      if (_0xbb74bb.preRun) {
        if (typeof _0xbb74bb.preRun == "function") {
          _0xbb74bb.preRun = [_0xbb74bb.preRun];
        }
        while (_0xbb74bb.preRun.length) {
          _0x2de72d(_0xbb74bb.preRun.shift());
        }
      }
      _0x1bd474(_0x26c0da);
    }
    function _0x12c57e() {
      _0x2eae3c = true;
      if (!_0xbb74bb.noFSInit && !_0x32ab7c.init.initialized) {
        _0x32ab7c.init();
      }
      _0x32ab7c.ignorePermissions = false;
      _0xfaba4b.init();
      _0x3bfd5e.root = _0x32ab7c.mount(_0x3bfd5e, {}, null);
      _0x2d79d0.root = _0x32ab7c.mount(_0x2d79d0, {}, null);
      _0x1bd474(_0x1bb99d);
    }
    function _0x317d90() {
      _0x1bd474(_0x516e3a);
    }
    function _0x1ab31f() {
      if (_0xbb74bb.postRun) {
        if (typeof _0xbb74bb.postRun == "function") {
          _0xbb74bb.postRun = [_0xbb74bb.postRun];
        }
        while (_0xbb74bb.postRun.length) {
          _0xa30b31(_0xbb74bb.postRun.shift());
        }
      }
      _0x1bd474(_0x27013b);
    }
    function _0x2de72d(_0x2db460) {
      _0x26c0da.unshift(_0x2db460);
    }
    function _0x3a1c95(_0x4529ce) {
      _0x1bb99d.unshift(_0x4529ce);
    }
    function _0xa30b31(_0x456902) {
      _0x27013b.unshift(_0x456902);
    }
    var _0x127a11 = 0;
    var _0x5066c6 = null;
    var _0x44e00c = null;
    function _0xfd11be(_0x6b25ad) {
      return _0x6b25ad;
    }
    function _0x2d82f5(_0x3af454) {
      _0x127a11++;
      if (_0xbb74bb.monitorRunDependencies) {
        _0xbb74bb.monitorRunDependencies(_0x127a11);
      }
    }
    function _0x4c5673(_0x1882e8) {
      _0x127a11--;
      if (_0xbb74bb.monitorRunDependencies) {
        _0xbb74bb.monitorRunDependencies(_0x127a11);
      }
      if (_0x127a11 == 0) {
        if (_0x5066c6 !== null) {
          clearInterval(_0x5066c6);
          _0x5066c6 = null;
        }
        if (_0x44e00c) {
          var _0x823caf = _0x44e00c;
          _0x44e00c = null;
          _0x823caf();
        }
      }
    }
    _0xbb74bb.preloadedImages = {};
    _0xbb74bb.preloadedAudios = {};
    function _0x4e2c55(_0x12ab9a) {
      {
        if (_0xbb74bb.onAbort) {
          _0xbb74bb.onAbort(_0x12ab9a);
        }
      }
      _0x12ab9a = "Aborted(" + _0x12ab9a + ")";
      _0x1771de(_0x12ab9a);
      _0x25975d = true;
      _0x2d5ce1 = 1;
      _0x12ab9a += ". Build with -s ASSERTIONS=1 for more info.";
      var _0x1d1ef2 = new WebAssembly.RuntimeError(_0x12ab9a);
      _0x549911(_0x1d1ef2);
      throw _0x1d1ef2;
    }
    var _0x33877e = "data:application/octet-stream;base64,";
    function _0x3bbaf5(_0x548c72) {
      return _0x548c72.startsWith(_0x33877e);
    }
    function _0x462132(_0x2cb7c7) {
      return _0x2cb7c7.startsWith("file://");
    }
    var _0x252b80;
    _0x252b80 = "build.wasm";
    if (!_0x3bbaf5(_0x252b80)) {
      _0x252b80 = _0x7fbbfd(_0x252b80);
    }
    function _0x5d546c(_0x802b2a) {
      try {
        if (_0x802b2a == _0x252b80 && _0x20f1bf) {
          return new Uint8Array(_0x20f1bf);
        }
        if (_0x1cfaba) {
          return _0x1cfaba(_0x802b2a);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (_0x4fe12b) {
        _0x4e2c55(_0x4fe12b);
      }
    }
    function _0x4b59ff() {
      if (!_0x20f1bf && (_0x677ae || _0x173e83)) {
        if (typeof fetch == "function" && !_0x462132(_0x252b80)) {
          return fetch(_0x252b80, {
            credentials: "same-origin"
          }).then(function (_0x2bed66) {
            if (!_0x2bed66.ok) {
              throw "failed to load wasm binary file at '" + _0x252b80 + "'";
            }
            return _0x2bed66.arrayBuffer();
          }).catch(function () {
            return _0x5d546c(_0x252b80);
          });
        } else if (_0x22753a) {
          return new Promise(function (_0x258e16, _0x394f37) {
            _0x22753a(_0x252b80, function (_0x5ae1c4) {
              _0x258e16(new Uint8Array(_0x5ae1c4));
            }, _0x394f37);
          });
        }
      }
      return Promise.resolve().then(function () {
        return _0x5d546c(_0x252b80);
      });
    }
    function _0x1bd92a() {
      var _0x46fd5e = {
        a: _0x2891ed
      };
      function _0x4b1af0(_0x4dde45, _0x1cf202) {
        var _0x16f347 = _0x4dde45.exports;
        _0xbb74bb.asm = _0x16f347;
        _0x1d6cae = _0xbb74bb.asm.Nj;
        _0xaa2d5a(_0x1d6cae.buffer);
        _0x4581b7 = _0xbb74bb.asm.jk;
        _0x3a1c95(_0xbb74bb.asm.Oj);
        _0x4c5673("wasm-instantiate");
      }
      _0x2d82f5("wasm-instantiate");
      function _0x30d39a(_0x73a3c2) {
        _0x4b1af0(_0x73a3c2.instance);
      }
      function _0x208b61(_0x2140de) {
        return _0x4b59ff().then(function (_0x242bc1) {
          return WebAssembly.instantiate(_0x242bc1, _0x46fd5e);
        }).then(function (_0x13a74c) {
          return _0x13a74c;
        }).then(_0x2140de, function (_0x4a6f6e) {
          _0x1771de("failed to asynchronously prepare wasm: " + _0x4a6f6e);
          _0x4e2c55(_0x4a6f6e);
        });
      }
      function _0x35c0ba() {
        if (!_0x20f1bf && typeof WebAssembly.instantiateStreaming == "function" && !_0x3bbaf5(_0x252b80) && !_0x462132(_0x252b80) && typeof fetch == "function") {
          return fetch(_0x252b80, {
            credentials: "same-origin"
          }).then(function (_0x4b1164) {
            var _0x3e58df = WebAssembly.instantiateStreaming(_0x4b1164, _0x46fd5e);
            return _0x3e58df.then(_0x30d39a, function (_0x5a2ba9) {
              _0x1771de("wasm streaming compile failed: " + _0x5a2ba9);
              _0x1771de("falling back to ArrayBuffer instantiation");
              return _0x208b61(_0x30d39a);
            });
          });
        } else {
          return _0x208b61(_0x30d39a);
        }
      }
      if (_0xbb74bb.instantiateWasm) {
        try {
          var _0x61c5ac = _0xbb74bb.instantiateWasm(_0x46fd5e, _0x4b1af0);
          return _0x61c5ac;
        } catch (_0x47163f) {
          _0x1771de("Module.instantiateWasm callback failed with error: " + _0x47163f);
          return false;
        }
      }
      _0x35c0ba().catch(_0x549911);
      return {};
    }
    var _0x19ea61;
    var _0x3a663e;
    var _0x2ccda1 = {
      5261656: function () {
        return _0xbb74bb.webglContextAttributes.premultipliedAlpha;
      },
      5261717: function () {
        return _0xbb74bb.webglContextAttributes.preserveDrawingBuffer;
      },
      5261781: function () {
        return _0xbb74bb.webglContextAttributes.powerPreference;
      }
    };
    function _0x1bd474(_0x2fc632) {
      while (_0x2fc632.length > 0) {
        var _0x50b629 = _0x2fc632.shift();
        if (typeof _0x50b629 == "function") {
          _0x50b629(_0xbb74bb);
          continue;
        }
        var _0x5ac710 = _0x50b629.func;
        if (typeof _0x5ac710 == "number") {
          if (_0x50b629.arg === undefined) {
            (function () {
              _0x1873f9.call(null, _0x5ac710);
            })();
          } else {
            (function (_0x1a6155) {
              _0x2e598c.apply(null, [_0x5ac710, _0x1a6155]);
            })(_0x50b629.arg);
          }
        } else {
          _0x5ac710(_0x50b629.arg === undefined ? null : _0x50b629.arg);
        }
      }
    }
    function _0x2b92f5(_0x4539d9) {
      var _0x368919 = _0x2683f0();
      var _0xcb9d06 = _0x4539d9();
      _0x9546d0(_0x368919);
      return _0xcb9d06;
    }
    function _0x8edcb4(_0x5f6478) {
      return _0x5f6478;
    }
    function _0xd3d5cf(_0x589e46) {
      var _0x53c20f = /\b_Z[\w\d_]+/g;
      return _0x589e46.replace(_0x53c20f, function (_0x56776a) {
        var _0x500885 = _0x8edcb4(_0x56776a);
        if (_0x56776a === _0x500885) {
          return _0x56776a;
        } else {
          return _0x500885 + " [" + _0x56776a + "]";
        }
      });
    }
    function _0x1b4307(_0x12e494, _0x2ae2c9, _0x775ec8) {
      var _0x346a0f = _0xbb74bb["dynCall_" + _0x12e494];
      if (_0x775ec8 && _0x775ec8.length) {
        return _0x346a0f.apply(null, [_0x2ae2c9].concat(_0x775ec8));
      } else {
        return _0x346a0f.call(null, _0x2ae2c9);
      }
    }
    function _0x2fc94d(_0xe3ea0d, _0x458c4b, _0x112b1e) {
      return _0x1b4307(_0xe3ea0d, _0x458c4b, _0x112b1e);
    }
    function _0x595465(_0x23415f) {
      if (_0x23415f instanceof _0x23c2f2 || _0x23415f == "unwind") {
        return _0x2d5ce1;
      }
      _0x24ba27(1, _0x23415f);
    }
    function _0x4bf58b() {
      var _0x23cd3a = new Error();
      if (!_0x23cd3a.stack) {
        try {
          throw new Error();
        } catch (_0xd193e1) {
          _0x23cd3a = _0xd193e1;
        }
        if (!_0x23cd3a.stack) {
          return "(no stack trace available)";
        }
      }
      return _0x23cd3a.stack.toString();
    }
    function _0x32c4af() {
      var _0x5d9d10 = _0x4bf58b();
      if (_0xbb74bb.extraStackTrace) {
        _0x5d9d10 += "\n" + _0xbb74bb.extraStackTrace();
      }
      return _0xd3d5cf(_0x5d9d10);
    }
    function _0x26e98b(_0x4f3b9c, _0x3eca2f, _0x140fd4, _0x2eb182, _0x276ff7) {
      var _0x185892 = _0x468390(_0x4f3b9c);
      var _0x383f30 = _0x468390(_0x3eca2f);
      var _0x488775 = _0x468390(_0x140fd4);
      var _0x586e06 = _0x468390(_0x2eb182);
      var _0x5af6b6 = _0x468390(_0x276ff7);
      try {
        firebase.firestore().collection(_0x185892).add(JSON.parse(_0x383f30)).then(function (_0x304852) {
          window.unityInstance.SendMessage(_0x488775, _0x586e06, "Success: document added in collection " + _0x185892);
        }).catch(function (_0x4ee3b6) {
          window.unityInstance.SendMessage(_0x488775, _0x5af6b6, JSON.stringify(_0x4ee3b6, Object.getOwnPropertyNames(_0x4ee3b6)));
        });
      } catch (_0x1181ec) {
        window.unityInstance.SendMessage(_0x488775, _0x5af6b6, JSON.stringify(_0x1181ec, Object.getOwnPropertyNames(_0x1181ec)));
      }
    }
    function _0x4ee660(_0x5e2452, _0x460982, _0x366864, _0x15f591, _0xc9ebad, _0x5f4e20, _0x57e907) {
      var _0x331bf3 = _0x468390(_0x5e2452);
      var _0x50a48d = _0x468390(_0x460982);
      var _0x2098b1 = _0x468390(_0x366864);
      var _0x1ee3b0 = _0x468390(_0x15f591);
      var _0x589901 = _0x468390(_0xc9ebad);
      var _0x47bca8 = _0x468390(_0x5f4e20);
      var _0x6bd10c = _0x468390(_0x57e907);
      try {
        var _0x15f591 = {};
        _0x15f591[_0x2098b1] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x1ee3b0));
        firebase.firestore().collection(_0x331bf3).doc(_0x50a48d).update(_0x15f591).then(function () {
          window.unityInstance.SendMessage(_0x589901, _0x47bca8, "Success: element " + _0x1ee3b0 + " was added in " + _0x2098b1);
        }).catch(function (_0x1bfad9) {
          window.unityInstance.SendMessage(_0x589901, _0x6bd10c, JSON.stringify(_0x1bfad9, Object.getOwnPropertyNames(_0x1bfad9)));
        });
      } catch (_0x5b3cfb) {
        window.unityInstance.SendMessage(_0x589901, _0x6bd10c, JSON.stringify(_0x5b3cfb, Object.getOwnPropertyNames(_0x5b3cfb)));
      }
    }
    function _0x26632e(_0x5ea437) {
      try {
        window.CrazyGames.SDK.user.addScore(_0x5ea437);
      } catch (_0x1c246c) {
        window.UnitySDK.logError("Error while calling addScore:", _0x1c246c);
      }
    }
    function _0x477c4e(_0x2bf294, _0x1a7049) {
      try {
        window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x2bf294), JSON.parse(window.unityStringify(_0x1a7049)));
      } catch (_0x572def) {
        window.UnitySDK.logError("Error while calling trackOrder:", _0x572def);
      }
    }
    function _0x4c93f9(_0x50c5fc) {
      const _0x3742de = document.createElement("textarea");
      _0x3742de.value = window.unityStringify(_0x50c5fc);
      document.body.appendChild(_0x3742de);
      _0x3742de.select();
      _0x3742de.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.body.removeChild(_0x3742de);
    }
    function _0x3861f0(_0x3d6934, _0x367355, _0x253bce, _0x503732, _0xc3450b) {
      var _0x17cbc9 = _0x468390(_0x3d6934);
      var _0x10ebb0 = _0x468390(_0x367355);
      var _0x1db920 = _0x468390(_0x253bce);
      var _0x4f1714 = _0x468390(_0x503732);
      var _0x33c26d = _0x468390(_0xc3450b);
      try {
        firebase.auth().createUserWithEmailAndPassword(_0x17cbc9, _0x10ebb0).then(function (_0x4b2e6a) {
          window.unityInstance.SendMessage(_0x1db920, _0x4f1714, "Success: signed up for " + _0x17cbc9);
        }).catch(function (_0x4dbbb0) {
          window.unityInstance.SendMessage(_0x1db920, _0x33c26d, JSON.stringify(_0x4dbbb0, Object.getOwnPropertyNames(_0x4dbbb0)));
        });
      } catch (_0x5108ba) {
        window.unityInstance.SendMessage(_0x1db920, _0x33c26d, JSON.stringify(_0x5108ba, Object.getOwnPropertyNames(_0x5108ba)));
      }
    }
    function _0x249170() {
      try {
        window.CrazyGames.SDK.data.clear();
      } catch (_0x13ad29) {
        window.UnitySDK.logError("Error while calling clear:", _0x13ad29);
      }
    }
    function _0x2b5945(_0x2a3329) {
      var _0x590ab8 = null;
      try {
        _0x590ab8 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x2a3329));
      } catch (_0x44f2b2) {
        window.UnitySDK.logError("Error while calling getItem:", _0x44f2b2);
      }
      var _0x2263e1 = _0x53c190(_0x590ab8 + "") + 1;
      var _0x4fceac = _0x210cd3(_0x2263e1);
      _0x4fe443(_0x590ab8, _0x4fceac, _0x2263e1);
      return _0x4fceac;
    }
    function _0x327872(_0xee1d8d) {
      var _0x4bd507 = null;
      try {
        _0x4bd507 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0xee1d8d));
      } catch (_0x2831de) {
        window.UnitySDK.logError("Error while calling getItem:", _0x2831de);
      }
      return _0x4bd507 !== null;
    }
    function _0x2f9aeb(_0x327eb1) {
      try {
        window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x327eb1));
      } catch (_0x3cd414) {
        window.UnitySDK.logError("Error while calling removeItem:", _0x3cd414);
      }
    }
    function _0x5e5b90(_0x4e7778, _0x15db9b) {
      try {
        window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x4e7778), window.unityStringify(_0x15db9b));
      } catch (_0x2a01fa) {
        window.UnitySDK.logError("Error while calling setItem:", _0x2a01fa);
      }
    }
    function _0x3fa4d4(_0x2b9729, _0x12f9b1, _0x2a12af, _0x48b588, _0x48b74c) {
      var _0x24993c = _0x468390(_0x2b9729);
      var _0x3ca7c0 = _0x468390(_0x12f9b1);
      var _0x18a380 = _0x468390(_0x2a12af);
      var _0x4b0528 = _0x468390(_0x48b588);
      var _0x1dda50 = _0x468390(_0x48b74c);
      try {
        firebase.firestore().collection(_0x24993c).doc(_0x3ca7c0).delete().then(function () {
          window.unityInstance.SendMessage(_0x18a380, _0x4b0528, "Success: document " + _0x3ca7c0 + " was deleted");
        }).catch(function (_0xfa7601) {
          window.unityInstance.SendMessage(_0x18a380, _0x1dda50, JSON.stringify(_0xfa7601, Object.getOwnPropertyNames(_0xfa7601)));
        });
      } catch (_0xd952f0) {
        window.unityInstance.SendMessage(_0x18a380, _0x1dda50, JSON.stringify(_0xd952f0, Object.getOwnPropertyNames(_0xd952f0)));
      }
    }
    function _0x55c09d(_0x230a30, _0x5b12ba, _0x57f17f, _0x320061, _0x2d02ef, _0x5a0ce1) {
      var _0x4dd7f7 = _0x468390(_0x230a30);
      var _0x2c57ed = _0x468390(_0x5b12ba);
      var _0x10a5c4 = _0x468390(_0x57f17f);
      var _0xc17576 = _0x468390(_0x320061);
      var _0x54f652 = _0x468390(_0x2d02ef);
      var _0x3d3eaf = _0x468390(_0x5a0ce1);
      try {
        var _0x4bb3f6 = {};
        _0x4bb3f6[_0x10a5c4] = firebase.firestore.FieldValue.delete();
        firebase.firestore().collection(_0x4dd7f7).doc(_0x2c57ed).update(_0x4bb3f6).then(function () {
          window.unityInstance.SendMessage(_0xc17576, _0x54f652, "Success: field " + _0x10a5c4 + " was deleted");
        }).catch(function (_0x1efc72) {
          window.unityInstance.SendMessage(_0xc17576, _0x3d3eaf, JSON.stringify(_0x1efc72, Object.getOwnPropertyNames(_0x1efc72)));
        });
      } catch (_0x3a3c07) {
        window.unityInstance.SendMessage(_0xc17576, _0x3d3eaf, JSON.stringify(_0x3a3c07, Object.getOwnPropertyNames(_0x3a3c07)));
      }
    }
    function _0x2ae0c4(_0x15015e, _0x2ff327, _0x4a5868, _0x1d73a4) {
      var _0x54f554 = _0x468390(_0x15015e);
      var _0x5258ca = _0x468390(_0x2ff327);
      var _0xc28a6a = _0x468390(_0x4a5868);
      var _0x68d0e7 = _0x468390(_0x1d73a4);
      try {
        firebase.database().ref(_0x54f554).remove().then(function (_0x15098e) {
          window.unityInstance.SendMessage(_0x5258ca, _0xc28a6a, "Success: " + _0x54f554 + " was deleted");
        });
      } catch (_0x5cd09e) {
        window.unityInstance.SendMessage(_0x5258ca, _0x68d0e7, JSON.stringify(_0x5cd09e, Object.getOwnPropertyNames(_0x5cd09e)));
      }
    }
    function _0x2a0f21(_0x87bda3, _0x513c49, _0x52ace1, _0x54ea7d) {
      var _0x1ec29f = _0x468390(_0x87bda3);
      var _0x5b900c = _0x468390(_0x513c49);
      var _0x3e3945 = _0x468390(_0x52ace1);
      var _0xeacacd = _0x468390(_0x54ea7d);
      try {
        firebase.storage().ref(_0x1ec29f).getDownloadURL().then(function (_0xafecad) {
          var _0x581dee = new XMLHttpRequest();
          _0x581dee.responseType = "arraybuffer";
          _0x581dee.onload = function (_0x33957d) {
            var _0x6b91 = _0x581dee.response;
            window.unityInstance.SendMessage(_0x5b900c, _0x3e3945, _0x51fa04(_0x6b91));
          };
          _0x581dee.open("GET", _0xafecad);
          _0x581dee.send();
        }).catch(function (_0x5c3d27) {
          window.unityInstance.SendMessage(_0x5b900c, _0xeacacd, JSON.stringify(_0x5c3d27, Object.getOwnPropertyNames(_0x5c3d27)));
        });
      } catch (_0x3f9a0f) {
        window.unityInstance.SendMessage(_0x5b900c, _0xeacacd, JSON.stringify(_0x3f9a0f, Object.getOwnPropertyNames(_0x3f9a0f)));
      }
      function _0x51fa04(_0x35c5af) {
        var _0x3ea6a4 = "";
        var _0x246f61 = new Uint8Array(_0x35c5af);
        var _0x3e3942 = _0x246f61.byteLength;
        for (var _0x5a2aee = 0; _0x5a2aee < _0x3e3942; _0x5a2aee++) {
          _0x3ea6a4 += String.fromCharCode(_0x246f61[_0x5a2aee]);
        }
        return window.btoa(_0x3ea6a4);
      }
    }
    function _0xce9802() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
        window[preroll.config.loaderObjectName].refetchAd();
      } catch (_0x26ef7d) {
        console.log("No WeeGooAFG implementation found!");
      }
    }
    function _0x1d3621(_0x2a5911) {
      var _0x5596b1 = {
        adStarted: function () {
          _0x565ac4("GMSDKAdvertisement", "JSLibCallback_AdStarted");
        },
        adFinished: function () {
          _0x565ac4("GMSDKAdvertisement", "JSLibCallback_AdFinished");
        },
        adError: function (_0x5d7055) {
          _0x565ac4("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x5d7055));
        }
      };
      var _0x1bb9a8 = window.GMSOFT_GMADS_INFO.reward;
      var _0x3ddf98 = _0x1bb9a8[Math.floor(Math.random() * _0x1bb9a8.length)];
      try {
        var _0x4360c7 = document.createElement("div");
        _0x4360c7.id = "gm-ad-overlay";
        _0x4360c7.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
        var _0x3e0af5 = document.createElement("div");
        _0x3e0af5.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
        var _0x48adfd = document.createElement("video");
        _0x48adfd.src = _0x3ddf98.image;
        _0x48adfd.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
        _0x48adfd.autoplay = true;
        _0x48adfd.muted = true;
        _0x48adfd.preload = "auto";
        var _0x43c32e = document.createElement("button");
        _0x43c32e.innerHTML = "Skip (5)";
        _0x43c32e.disabled = true;
        _0x43c32e.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
        _0x43c32e.disabled = true;
        _0x43c32e.style.opacity = "0.5";
        var _0x577cdd = document.createElement("div");
        _0x577cdd.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
        var _0x56b1a7 = document.createElement("div");
        _0x56b1a7.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
        var _0x5f3412 = 5;
        var _0x2c9883 = setInterval(function () {
          _0x5f3412--;
          if (_0x5f3412 > 0) {
            _0x43c32e.innerHTML = "Skip (" + _0x5f3412 + ")";
          } else {
            _0x43c32e.innerHTML = "Skip";
            _0x43c32e.disabled = false;
            _0x43c32e.style.opacity = "1";
            _0x43c32e.style.cursor = "pointer";
            clearInterval(_0x2c9883);
          }
        }, 1000);
        function _0x4fcf40() {
          if (_0x4360c7 && _0x4360c7.parentNode) {
            _0x4360c7.parentNode.removeChild(_0x4360c7);
          }
          clearInterval(_0x2c9883);
          _0x5596b1.adFinished();
        }
        function _0x47bd7e() {
          window.open(_0x3ddf98.url, "_blank");
        }
        function _0xff80ae() {
          if (_0x48adfd.duration && _0x48adfd.currentTime) {
            var _0x413c4e = _0x48adfd.currentTime / _0x48adfd.duration * 100;
            _0x56b1a7.style.width = _0x413c4e + "%";
          }
        }
        _0x48adfd.addEventListener("loadstart", function () {
          _0x5596b1.adStarted();
        });
        _0x48adfd.addEventListener("timeupdate", function () {
          _0xff80ae();
        });
        _0x48adfd.addEventListener("ended", function () {
          _0x4fcf40();
        });
        _0x48adfd.addEventListener("error", function (_0x493840) {
          var _0x224093 = {
            message: "Video load error",
            code: _0x493840.target.error ? _0x493840.target.error.code : "unknown"
          };
          _0x5596b1.adError(_0x224093);
          _0x4fcf40();
        });
        _0x48adfd.addEventListener("click", function () {
          _0x47bd7e();
        });
        _0x43c32e.addEventListener("click", function () {
          if (!_0x43c32e.disabled) {
            _0x4fcf40();
          }
        });
        _0x48adfd.addEventListener("contextmenu", function (_0x404ae9) {
          _0x404ae9.preventDefault();
        });
        _0x577cdd.appendChild(_0x56b1a7);
        _0x3e0af5.appendChild(_0x48adfd);
        _0x3e0af5.appendChild(_0x43c32e);
        _0x3e0af5.appendChild(_0x577cdd);
        _0x4360c7.appendChild(_0x3e0af5);
        document.body.appendChild(_0x4360c7);
        _0x48adfd.play().catch(function (_0x166fe5) {
          console.error("Video play error:", _0x166fe5);
          _0x5596b1.adError({
            message: "Cannot play video",
            details: _0x166fe5.message
          });
          _0x4fcf40();
        });
      } catch (_0x18ea39) {
        console.error("Ad overlay creation error:", _0x18ea39);
        _0x5596b1.adError({
          message: "Failed to create ad overlay",
          details: _0x18ea39.message
        });
      }
    }
    function _0x4c26d4(_0x5a1b1b, _0x354e0b) {
      gmEvent(_0x468390(_0x5a1b1b), _0x468390(_0x354e0b));
    }
    function _0x5467cd() {
      const _0x44ecbc = "gmsdksigndomain";
      try {
        if (localStorage.hasOwnProperty(_0x44ecbc)) {
          let _0x4f6e3d = localStorage.getItem(_0x44ecbc);
          if (_0x4f6e3d && _0x4f6e3d.length > 10) {
            window.GMSOFT_SIGNED = _0x4f6e3d;
            console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
            _0x565ac4("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
            return;
          }
        }
      } catch (_0x3d88f1) {
        console.error("Error getting GM_SDK_GetVeryfiedSignature from local storage: ", _0x3d88f1);
      }
      try {
        let _0x4ff0cd = "hn=" + "https://gamea.azgame.io";
        let _0x32e2e6 = btoa(_0x4ff0cd);
        if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
          _0x4d393a = window.GMSOFT_OPTIONS.signedurl;
        }
        let _0x1c87a8 = _0x4d393a + "?params=" + _0x32e2e6;
        var _0x54abc0 = new XMLHttpRequest();
        let _0x185924 = "";
        _0x54abc0.open("GET", _0x1c87a8, false);
        _0x54abc0.send(_0x185924);
        let _0x219f56 = _0x54abc0.responseText;
        window.GMSOFT_SIGNED = _0x219f56;
        localStorage.setItem(_0x44ecbc, _0x219f56);
        console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
        _0x565ac4("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
      } catch (_0x15daf8) {
        console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x15daf8);
      }
    }
    function _0x290735() {
      let _0x27ebcf = "https://gamea.azgame.io";
      _0x565ac4("GmSoft", "SetUnityHostName", _0x27ebcf);
      _0x565ac4("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
    }
    function _0x476b7b() {
      console.log("GM_SDK_StartGame");
      try {
        gmStartGame(function () {
          _0x565ac4("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
        });
      } catch (_0x5287ae) {
        console.error("Error JS 12", _0x5287ae);
      }
      try {
        gmStartAds(function () {
          _0x565ac4("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
        });
      } catch (_0x336d2b) {
        console.error("Error JS 20", _0x336d2b);
      }
      try {
      } catch (_0x3a3dac) {
        console.error("Error JS 28", _0x3a3dac);
      }
    }
    function _0x226c5d(_0x1a466e) {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
        window[preroll.config.loaderObjectName].GameEvent(_0x1a466e);
      } catch (_0x698dd0) {
        console.log("No WeeGooAFG implementation found!");
      }
    }
    function _0x568b36() {
      try {
        window.CrazyGames.SDK.game.gameplayStart();
      } catch (_0x1638ac) {
        window.UnitySDK.logError("Error while calling gameplayStart:", _0x1638ac);
      }
    }
    function _0x5a8127() {
      try {
        window.CrazyGames.SDK.game.gameplayStop();
      } catch (_0x54a72c) {
        window.UnitySDK.logError("Error while calling gameplayStop:", _0x54a72c);
      }
    }
    function _0x5926d2() {
      var _0x2c164f = firebaseConfig.projectId;
      var _0x1701bd = _0x53c190(_0x2c164f) + 1;
      var _0x5ac728 = _0x210cd3(_0x1701bd);
      _0x4fe443(_0x2c164f, _0x5ac728, _0x1701bd);
      return _0x5ac728;
    }
    function _0x3ecc65(_0x1f734d, _0x564829, _0x2495f2, _0xae067b, _0x3e43ff) {
      var _0x17afee = _0x468390(_0x1f734d);
      var _0x568363 = _0x468390(_0x564829);
      var _0x44d50e = _0x468390(_0x2495f2);
      var _0x5d44ce = _0x468390(_0xae067b);
      var _0x56fb65 = _0x468390(_0x3e43ff);
      try {
        firebase.firestore().collection(_0x17afee).doc(_0x568363).get().then(function (_0x31f27c) {
          if (_0x31f27c.exists) {
            window.unityInstance.SendMessage(_0x44d50e, _0x5d44ce, JSON.stringify(_0x31f27c.data()));
          } else {
            window.unityInstance.SendMessage(_0x44d50e, _0x5d44ce, "null");
          }
        }).catch(function (_0x373449) {
          window.unityInstance.SendMessage(_0x44d50e, _0x56fb65, JSON.stringify(_0x373449, Object.getOwnPropertyNames(_0x373449)));
        });
      } catch (_0x25b006) {
        window.unityInstance.SendMessage(_0x44d50e, _0x56fb65, JSON.stringify(_0x25b006, Object.getOwnPropertyNames(_0x25b006)));
      }
    }
    function _0x584e14(_0x1ba2d0, _0x38f245, _0x28bd07, _0x233c3f) {
      var _0x3bcc6c = _0x468390(_0x1ba2d0);
      var _0x8e1d4d = _0x468390(_0x38f245);
      var _0x32a9e4 = _0x468390(_0x28bd07);
      var _0x434f97 = _0x468390(_0x233c3f);
      try {
        firebase.firestore().collection(_0x3bcc6c).get().then(function (_0x442635) {
          var _0xe718a5 = {};
          _0x442635.forEach(function (_0x3bc5af) {
            _0xe718a5[_0x3bc5af.id] = _0x3bc5af.data();
          });
          window.unityInstance.SendMessage(_0x8e1d4d, _0x32a9e4, JSON.stringify(_0xe718a5));
        }).catch(function (_0x511534) {
          window.unityInstance.SendMessage(_0x8e1d4d, _0x434f97, JSON.stringify(_0x511534, Object.getOwnPropertyNames(_0x511534)));
        });
      } catch (_0x15182f) {
        window.unityInstance.SendMessage(_0x8e1d4d, _0x434f97, JSON.stringify(_0x15182f, Object.getOwnPropertyNames(_0x15182f)));
      }
    }
    function _0x2ecc7a() {
      var _0x15b79f = window.CrazyGames.SDK.environment;
      var _0x434638 = _0x53c190(_0x15b79f) + 1;
      var _0x4a6779 = _0x210cd3(_0x434638);
      _0x4fe443(_0x15b79f, _0x4a6779, _0x434638);
      return _0x4a6779;
    }
    function _0x1936fc() {
      var _0x57c92c = JSON.stringify(window.CrazyGames.SDK.game.settings);
      var _0x230b1d = _0x53c190(_0x57c92c) + 1;
      var _0x50fe66 = _0x210cd3(_0x230b1d);
      _0x4fe443(_0x57c92c, _0x50fe66, _0x230b1d);
      return _0x50fe66;
    }
    function _0xc7d13d(_0x1ba56e) {
      var _0x330544 = new URLSearchParams(window.location.search);
      var _0x4ced13 = _0x330544.get(window.unityStringify(_0x1ba56e));
      if (_0x4ced13 === null) {
        _0x4ced13 = "";
      }
      var _0x2fec13 = _0x53c190(_0x4ced13) + 1;
      var _0x3b07c8 = _0x210cd3(_0x2fec13);
      _0x4fe443(_0x4ced13, _0x3b07c8, _0x2fec13);
      return _0x3b07c8;
    }
    function _0x3ac425() {
      return window.CrazyGames.SDK.isQaTool;
    }
    function _0x30b62a(_0x11f231, _0x3e23ce) {
      if (performance.memory) {
        _0x537a20[_0x11f231 >> 3] = performance.memory.totalJSHeapSize;
        _0x537a20[_0x3e23ce >> 3] = performance.memory.usedJSHeapSize;
      } else {
        _0x537a20[_0x11f231 >> 3] = NaN;
        _0x537a20[_0x3e23ce >> 3] = NaN;
      }
    }
    function _0x42dbbe(_0x5d9c62, _0x1d5bb5, _0x5ed081, _0x4394f5) {
      var _0x1c33b9 = _0x468390(_0x5d9c62);
      var _0x5bff93 = _0x468390(_0x1d5bb5);
      var _0x344da6 = _0x468390(_0x5ed081);
      var _0x4f3b36 = _0x468390(_0x4394f5);
      try {
        firebase.database().ref(_0x1c33b9).once("value").then(function (_0x3a94ff) {
          window.unityInstance.SendMessage(_0x5bff93, _0x344da6, JSON.stringify(_0x3a94ff.val()));
        });
      } catch (_0x33907f) {
        window.unityInstance.SendMessage(_0x5bff93, _0x4f3b36, JSON.stringify(_0x33907f, Object.getOwnPropertyNames(_0x33907f)));
      }
    }
    function _0x2d9113() {
      var _0xf98c88 = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
      var _0x32b899 = _0x53c190(_0xf98c88) + 1;
      var _0x2d4bc1 = _0x210cd3(_0x32b899);
      _0x4fe443(_0xf98c88, _0x2d4bc1, _0x32b899);
      return _0x2d4bc1;
    }
    function _0x3771b3() {
      window.CrazyGames.SDK.user.getUser().then(function (_0x335c9d) {
        _0x565ac4("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
          userJson: JSON.stringify(_0x335c9d)
        }));
      }).catch(function (_0x3b481b) {
        _0x565ac4("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
          errorJson: JSON.stringify(_0x3b481b)
        }));
      });
    }
    function _0x533ab7() {
      window.CrazyGames.SDK.user.getUserToken().then(function (_0x28c5dc) {
        _0x565ac4("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
          token: _0x28c5dc
        }));
      }).catch(function (_0x54d8b4) {
        _0x565ac4("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
          errorJson: JSON.stringify(_0x54d8b4)
        }));
      });
    }
    function _0x52d6cd() {
      window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x430304) {
        _0x565ac4("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
          token: _0x430304
        }));
      }).catch(function (_0x2c6a27) {
        _0x565ac4("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
          errorJson: JSON.stringify(_0x2c6a27)
        }));
      });
    }
    function _0x21c551() {}
    function _0xf1bbec() {
      console.log("afg.ready: " + afg.ready);
      if (afg.ready) {
        _0x565ac4("H5Adverisement", "PreloadRewardedVideoCallback", 1);
        afg.adBreak({
          type: "reward",
          name: "reward ads",
          beforeReward: function (_0xfd88b2) {
            this._showRewardAdFn = _0xfd88b2;
            console.log("[H5 Ads] before reward");
          }.bind(this),
          adViewed: function () {
            this._showRewardAdFn = null;
            _0x565ac4("H5Adverisement", "RewardedVideoSuccessCallback");
            console.log("[H5 Ads] ad viewed");
          }.bind(this),
          adDismissed: function () {
            this._showRewardAdFn = null;
            _0x565ac4("H5Adverisement", "RewardedVideoFailureCallback");
            console.log("[H5 Ads] ad failure");
          }.bind(this),
          adBreakDone: function (_0x1a67b8) {
            console.log("[H5 Ads] Reward break done");
            _0x565ac4("H5Adverisement", "ResumeGameCallback");
          }.bind(this)
        });
      } else {
        console.log("[H5 Ads] no reward ads");
        _0x565ac4("H5Adverisement", "PreloadRewardedVideoCallback", 0);
      }
    }
    function _0xd50ef() {
      if (afg.ready) {
        afg.adBreak({
          type: "next",
          name: "next",
          beforeAd: function () {
            afg.onBeforeAd();
            console.log("[H5 Ads] Before ad");
            _0x565ac4("H5Adverisement", "PauseGameCallback");
          }.bind(this),
          adBreakDone: function () {
            console.log("[H5 Ads] Ad break done");
            _0x565ac4("H5Adverisement", "ResumeGameCallback");
          }.bind(this)
        });
      } else {
        console.log("no " + adType + " ads");
        _0x565ac4("H5Adverisement", "ResumeGameCallback");
      }
    }
    function _0x2d1651() {
      if (this._showRewardAdFn) {
        _0x565ac4("H5Adverisement", "PauseGameCallback");
        this._showRewardAdFn();
      } else {
        _0x565ac4("H5Adverisement", "ResumeGameCallback");
      }
    }
    function _0x3f85ce() {
      try {
        window.CrazyGames.SDK.game.happytime();
      } catch (_0x48c580) {
        window.UnitySDK.logError("Error while calling happytime:", _0x48c580);
      }
    }
    function _0x4a231f() {
      try {
        window.CrazyGames.SDK.game.hideInviteButton();
      } catch (_0x2ff366) {
        window.UnitySDK.logError("Error while calling hideInviteButton:", _0x2ff366);
      }
    }
    function _0x184732(_0x41d50a, _0x262cd9, _0x2c7032, _0x4514ce, _0x10cb79, _0x7937f0, _0x18a40b) {
      var _0x296b4c = _0x468390(_0x41d50a);
      var _0x225b6e = _0x468390(_0x262cd9);
      var _0x419c96 = _0x468390(_0x2c7032);
      var _0x3bec38 = _0x468390(_0x10cb79);
      var _0x47eb5e = _0x468390(_0x7937f0);
      var _0x59a667 = _0x468390(_0x18a40b);
      try {
        var _0x46f0fc = {};
        _0x46f0fc[_0x419c96] = firebase.firestore.FieldValue.increment(_0x4514ce);
        firebase.firestore().collection(_0x296b4c).doc(_0x225b6e).update(_0x46f0fc).then(function () {
          window.unityInstance.SendMessage(_0x3bec38, _0x47eb5e, "Success: incremented " + _0x419c96 + " by " + _0x4514ce);
        }).catch(function (_0x21a7ae) {
          window.unityInstance.SendMessage(_0x3bec38, _0x59a667, JSON.stringify(_0x21a7ae, Object.getOwnPropertyNames(_0x21a7ae)));
        });
      } catch (_0xdb49b3) {
        window.unityInstance.SendMessage(_0x3bec38, _0x59a667, JSON.stringify(_0xdb49b3, Object.getOwnPropertyNames(_0xdb49b3)));
      }
    }
    function _0x44bdc1(_0x513fa1) {
      if (typeof _0x468390 !== "undefined") {
        window.unityStringify = _0x468390;
      } else {
        window.unityStringify = _0x468390;
      }
      window.UnitySDK = {
        version: window.unityStringify(_0x513fa1),
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
          var _0x11389a = Array.prototype.slice.call(arguments);
          _0x11389a.unshift("[JsLib]");
          console.error.apply(console, _0x11389a);
        }
      };
      var _0x4f7181 = {
        wrapper: {
          engine: "unity",
          sdkVersion: window.unityStringify(_0x513fa1)
        }
      };
      var _0x462e39 = document.createElement("script");
      _0x462e39.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
      document.head.appendChild(_0x462e39);
      _0x462e39.addEventListener("load", function () {
        window.CrazyGames.SDK.init(_0x4f7181).then(function () {
          _0x565ac4("CrazySDKSingleton", "JSLibCallback_Init");
          window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x67c438) {
            _0x565ac4("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x67c438 ? 1 : 0);
          }).catch(function (_0x58f893) {
            window.UnitySDK.logError("Error while checking adblock:", _0x58f893);
            _0x565ac4("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
          });
          window.CrazyGames.SDK.user.addAuthListener(function (_0x31de81) {
            _0x565ac4("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
              userJson: JSON.stringify(_0x31de81)
            }));
          });
        });
      });
    }
    function _0xa448e4() {
      return window.CrazyGames.SDK.user.isUserAccountAvailable;
    }
    var _0x4ccc4e = null;
    var _0x2e58ed = 0;
    function _0x3a54b2() {
      return _0x4ccc4e && _0x4ccc4e.activated || _0x2e58ed != 0;
    }
    var _0x29f05c = 1;
    var _0x1171fc = {
      x: 0,
      y: 0,
      z: 0
    };
    function _0x283e52() {
      _0x1171fc = {
        x: _0x4ccc4e.x * _0x29f05c,
        y: _0x4ccc4e.y * _0x29f05c,
        z: _0x4ccc4e.z * _0x29f05c
      };
      if (_0x2e58ed != 0) {
        _0x34835c(_0x2e58ed, _0x1171fc.x, _0x1171fc.y, _0x1171fc.z);
      }
    }
    var _0x127263 = 0;
    var _0x3774d3 = 0;
    var _0x4f903e = 0;
    var _0x4d6298 = 0;
    var _0xafa903 = 0;
    function _0xbeeb4d(_0x485370, _0x1f6fc8) {
      var _0x2aaff9 = {
        x: _0x485370.x - _0x1f6fc8.x,
        y: _0x485370.y - _0x1f6fc8.y,
        z: _0x485370.z - _0x1f6fc8.z
      };
      var _0x3e7ab5 = _0x2aaff9.x * _0x2aaff9.x + _0x2aaff9.y * _0x2aaff9.y + _0x2aaff9.z * _0x2aaff9.z;
      var _0x48ea80 = {
        x: _0x485370.x + _0x1f6fc8.x,
        y: _0x485370.y + _0x1f6fc8.y,
        z: _0x485370.z + _0x1f6fc8.z
      };
      var _0x4531c4 = _0x48ea80.x * _0x48ea80.x + _0x48ea80.y * _0x48ea80.y + _0x48ea80.z * _0x48ea80.z;
      if (_0x3e7ab5 <= _0x4531c4) {
        return _0x2aaff9;
      } else {
        return _0x48ea80;
      }
    }
    function _0x388fc2(_0x56ab50) {
      var _0x368ccd = {
        x: _0x56ab50.accelerationIncludingGravity.x * _0x29f05c,
        y: _0x56ab50.accelerationIncludingGravity.y * _0x29f05c,
        z: _0x56ab50.accelerationIncludingGravity.z * _0x29f05c
      };
      if (_0x2e58ed != 0) {
        _0x34835c(_0x2e58ed, _0x368ccd.x, _0x368ccd.y, _0x368ccd.z);
      }
      var _0x3ef8b8 = {
        x: _0x56ab50.acceleration.x * _0x29f05c,
        y: _0x56ab50.acceleration.y * _0x29f05c,
        z: _0x56ab50.acceleration.z * _0x29f05c
      };
      if (_0x4f903e != 0) {
        _0x34835c(_0x4f903e, _0x3ef8b8.x, _0x3ef8b8.y, _0x3ef8b8.z);
      }
      if (_0x4d6298 != 0) {
        var _0x105f36 = _0xbeeb4d(_0x368ccd, _0x3ef8b8);
        _0x34835c(_0x4d6298, _0x105f36.x, _0x105f36.y, _0x105f36.z);
      }
      if (_0xafa903 != 0) {
        var _0x5bcbcc = Math.PI / 180;
        _0x34835c(_0xafa903, _0x56ab50.rotationRate.alpha * _0x5bcbcc, _0x56ab50.rotationRate.beta * _0x5bcbcc, _0x56ab50.rotationRate.gamma * _0x5bcbcc);
      }
    }
    var _0x53813a = 0;
    function _0x2afac9(_0x309b0c) {
      if (_0x309b0c & 1) {
        if (typeof DeviceOrientationEvent.requestPermission === "function") {
          DeviceOrientationEvent.requestPermission().then(function (_0x487333) {
            if (_0x487333 === "granted") {
              _0x53813a &= ~1;
            } else {
              _0x568432("DeviceOrientationEvent permission not granted");
            }
          }).catch(function (_0x4ac3ba) {
            _0x568432(_0x4ac3ba);
            _0x53813a |= 1;
          });
        }
      }
      if (_0x309b0c & 2) {
        if (typeof DeviceMotionEvent.requestPermission === "function") {
          DeviceMotionEvent.requestPermission().then(function (_0x1e2ba8) {
            if (_0x1e2ba8 === "granted") {
              _0x53813a &= ~2;
            } else {
              _0x568432("DeviceMotionEvent permission not granted");
            }
          }).catch(function (_0x53cabf) {
            _0x568432(_0x53cabf);
            _0x53813a |= 2;
          });
        }
      }
    }
    function _0x29ae69() {
      if (_0x2e58ed == 0 && _0x4f903e == 0 && _0x4d6298 == 0 && _0xafa903 == 0) {
        _0x2afac9(2);
        window.addEventListener("devicemotion", _0x388fc2);
      }
    }
    function _0x40fc10() {
      var _0x3bb0c4 = 9.80665;
      _0x29f05c = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x3bb0c4 : -1 / _0x3bb0c4;
    }
    function _0x21fcb9(_0x40f3ca, _0x17ae6e) {
      _0x40fc10();
      if (typeof Accelerometer === "undefined") {
        _0x29ae69();
        if (_0x40f3ca != 0) {
          _0x2e58ed = _0x40f3ca;
        }
        return;
      }
      if (_0x40f3ca != 0) {
        _0x2e58ed = _0x40f3ca;
      }
      function _0x46fa31(_0x58ebaf) {
        _0x4ccc4e = new Accelerometer({
          frequency: _0x58ebaf,
          referenceFrame: "device"
        });
        _0x4ccc4e.addEventListener("reading", _0x283e52);
        _0x4ccc4e.addEventListener("error", function (_0x3d369d) {
          _0x568432(_0x3d369d.error ? _0x3d369d.error : _0x3d369d);
        });
        _0x4ccc4e.start();
        _0x3774d3 = _0x58ebaf;
      }
      if (_0x4ccc4e) {
        if (_0x3774d3 != _0x17ae6e) {
          _0x4ccc4e.stop();
          _0x4ccc4e.removeEventListener("reading", _0x283e52);
          _0x46fa31(_0x17ae6e);
        }
      } else if (_0x127263 != 0) {
        _0x127263 = _0x17ae6e;
      } else {
        _0x127263 = _0x17ae6e;
        navigator.permissions.query({
          name: "accelerometer"
        }).then(function (_0x7d34a5) {
          if (_0x7d34a5.state === "granted") {
            _0x46fa31(_0x127263);
          } else {
            _0x568432("No permission to use Accelerometer.");
          }
          _0x127263 = 0;
        });
      }
    }
    function _0xf9e589() {
      if (_0x2e58ed == 0 && _0x4f903e == 0 && _0x4d6298 == 0 && _0xafa903 == 0) {
        window.removeEventListener("devicemotion", _0xf2f161);
      }
    }
    function _0x53458f() {
      if (_0x4ccc4e) {
        if (typeof GravitySensor !== "undefined" || _0x4d6298 == 0) {
          _0x4ccc4e.stop();
          _0x4ccc4e.removeEventListener("reading", _0x283e52);
          _0x4ccc4e = null;
        }
        _0x2e58ed = 0;
        _0x3774d3 = 0;
      } else if (_0x2e58ed != 0) {
        _0x2e58ed = 0;
        _0xf9e589();
      }
    }
    var _0x2f586a = 0;
    function _0x969cf3(_0x34eaf9) {
      if (!_0x2f586a) {
        try {
          (function () {
            _0x1873f9.call(null, _0x34eaf9);
          })();
        } catch (_0x140fbd) {
          _0x2f586a = 1;
          console.error("Uncaught exception from main loop:");
          console.error(_0x140fbd);
          console.error("Halting program.");
          if (_0xbb74bb.errorHandler) {
            _0xbb74bb.errorHandler(_0x140fbd);
          }
          throw _0x140fbd;
        }
      }
    }
    function _0x2add49(_0x3e3e01, _0x21cb79) {
      var _0x55d402 = "";
      for (var _0x3dc9a1 = 0; _0x3dc9a1 < _0x21cb79; _0x3dc9a1++) {
        _0x55d402 += String.fromCharCode(_0x4924c2[_0x3e3e01 + _0x3dc9a1]);
      }
      _0xbb74bb.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x55d402) + "),default";
    }
    function _0x2af868(_0x242ca9) {
      _0xbb74bb.canvas.style.cursor = _0x242ca9 ? "default" : "none";
    }
    function _0x392bce(_0x4923f3) {
      if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
        return window.CSS.escape(_0x4923f3);
      }
      return _0x4923f3.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
    }
    function _0x5809cf() {
      var _0x2f7575 = _0xbb74bb.canvas ? _0xbb74bb.canvas.id : "unity-canvas";
      return "#" + _0x392bce(_0x2f7575);
    }
    function _0x2f19a3(_0x11f9ba, _0x3f915f, _0x2b3680, _0x4b6264) {
      var _0x44015b = document.querySelector(_0x5809cf());
      var _0x55feb6 = _0x44015b && _0x44015b.getBoundingClientRect();
      _0x1cca99[_0x2b3680 >> 2] = _0x11f9ba - (_0x55feb6 ? _0x55feb6.left : 0);
      _0x1cca99[_0x4b6264 >> 2] = _0x3f915f - (_0x55feb6 ? _0x55feb6.top : 0);
    }
    function _0x4e99c6(_0x4dcfab) {
      var _0x4de7d4 = _0x53c190(_0x4dcfab) + 1;
      var _0x540904 = _0x210cd3(_0x4de7d4);
      _0x4fe443(_0x4dcfab, _0x540904, _0x4de7d4);
      return _0x540904;
    }
    function _0x417bc8() {
      var _0x291a71 = _0x5809cf();
      if (_0x417bc8.selector != _0x291a71) {
        _0x1f42d0(_0x417bc8.ptr);
        _0x417bc8.ptr = _0x4e99c6(_0x291a71);
        _0x417bc8.selector = _0x291a71;
      }
      return _0x417bc8.ptr;
    }
    function _0x2236f3(_0x627ac) {
      var _0x4899d3 = _0x468390(_0x627ac);
      try {
        eval(_0x4899d3);
      } catch (_0x19c423) {
        console.error(_0x19c423);
      }
    }
    function _0x39c4dc(_0x25b562) {
      var _0x17a84c = _0x468390(_0x25b562);
      window.open(_0x17a84c, "_blank", "");
    }
    function _0x2b4145() {}
    function _0x142b29() {
      _0x418a4e.queuePersist(_0xbb74bb.__unityIdbfsMount.mount);
      if (!window.warnedAboutManualFilesystemSyncGettingDeprecated) {
        window.warnedAboutManualFilesystemSyncGettingDeprecated = true;
        if (!_0xbb74bb.autoSyncPersistentDataPath) {
          console.warn("Manual synchronization of Unity Application.persistentDataPath via JS_FileSystem_Sync() is deprecated and will be later removed in a future Unity version. The persistent data directory will be automatically synchronized instead on file modification. Pass config.autoSyncPersistentDataPath = true; to configuration in createUnityInstance() to opt in to the new behavior.");
        }
      }
    }
    var _0xa6471e = null;
    function _0x38afa6() {
      if (typeof GravitySensor !== "undefined") {
        return _0xa6471e && _0xa6471e.activated;
      } else {
        return _0x4d6298 != 0;
      }
    }
    function _0x7008ee() {
      if (_0x4d6298 != 0) {
        _0x34835c(_0x4d6298, _0xa6471e.x * _0x29f05c, _0xa6471e.y * _0x29f05c, _0xa6471e.z * _0x29f05c);
      }
    }
    var _0x541b70 = 0;
    var _0x6ef49e = null;
    function _0x1e12a5() {
      var _0xf0ae4f = {
        x: _0x6ef49e.x * _0x29f05c,
        y: _0x6ef49e.y * _0x29f05c,
        z: _0x6ef49e.z * _0x29f05c
      };
      if (_0x4f903e != 0) {
        _0x34835c(_0x4f903e, _0xf0ae4f.x, _0xf0ae4f.y, _0xf0ae4f.z);
      }
      if (_0x4d6298 != 0 && typeof GravitySensor === "undefined") {
        var _0x48ff27 = _0xbeeb4d(_0x1171fc, _0xf0ae4f);
        _0x34835c(_0x4d6298, _0x48ff27.x, _0x48ff27.y, _0x48ff27.z);
      }
    }
    var _0x4e19ac = 0;
    var _0x2a106f = 0;
    function _0x28d6aa(_0x2ba3ca, _0x3833dd) {
      _0x40fc10();
      if (typeof LinearAccelerationSensor === "undefined") {
        _0x29ae69();
        if (_0x2ba3ca != 0) {
          _0x4f903e = _0x2ba3ca;
        }
        return;
      }
      if (_0x2ba3ca != 0) {
        _0x4f903e = _0x2ba3ca;
      }
      function _0x51daba(_0x2c467a) {
        _0x6ef49e = new LinearAccelerationSensor({
          frequency: _0x2c467a,
          referenceFrame: "device"
        });
        _0x6ef49e.addEventListener("reading", _0x1e12a5);
        _0x6ef49e.addEventListener("error", function (_0x2378c6) {
          _0x568432(_0x2378c6.error ? _0x2378c6.error : _0x2378c6);
        });
        _0x6ef49e.start();
        _0x2a106f = _0x2c467a;
      }
      if (_0x6ef49e) {
        if (_0x2a106f != _0x3833dd) {
          _0x6ef49e.stop();
          _0x6ef49e.removeEventListener("reading", _0x1e12a5);
          _0x51daba(_0x3833dd);
        }
      } else if (_0x4e19ac != 0) {
        _0x4e19ac = _0x3833dd;
      } else {
        _0x4e19ac = _0x3833dd;
        navigator.permissions.query({
          name: "accelerometer"
        }).then(function (_0x44bf4b) {
          if (_0x44bf4b.state === "granted") {
            _0x51daba(_0x4e19ac);
          } else {
            _0x568432("No permission to use LinearAccelerationSensor.");
          }
          _0x4e19ac = 0;
        });
      }
    }
    function _0x1004f0(_0x3c5b86, _0x5a2092) {
      if (typeof GravitySensor === "undefined") {
        _0x21fcb9(0, Math.max(_0x5a2092, _0x3774d3));
        _0x28d6aa(0, Math.max(_0x5a2092, _0x2a106f));
        _0x4d6298 = _0x3c5b86;
        return;
      }
      _0x40fc10();
      _0x4d6298 = _0x3c5b86;
      function _0x1b19c7(_0x47516e) {
        _0xa6471e = new GravitySensor({
          frequency: _0x47516e,
          referenceFrame: "device"
        });
        _0xa6471e.addEventListener("reading", _0x7008ee);
        _0xa6471e.addEventListener("error", function (_0x52016c) {
          _0x568432(_0x52016c.error ? _0x52016c.error : _0x52016c);
        });
        _0xa6471e.start();
      }
      if (_0xa6471e) {
        _0xa6471e.stop();
        _0xa6471e.removeEventListener("reading", _0x7008ee);
        _0x1b19c7(_0x5a2092);
      } else if (_0x541b70 != 0) {
        _0x541b70 = _0x5a2092;
      } else {
        _0x541b70 = _0x5a2092;
        navigator.permissions.query({
          name: "accelerometer"
        }).then(function (_0x37e65f) {
          if (_0x37e65f.state === "granted") {
            _0x1b19c7(_0x541b70);
          } else {
            _0x568432("No permission to use GravitySensor.");
          }
          _0x541b70 = 0;
        });
      }
    }
    function _0xfd05c3() {
      if (_0x6ef49e) {
        if (typeof GravitySensor !== "undefined" || _0x4d6298 == 0) {
          _0x6ef49e.stop();
          _0x6ef49e.removeEventListener("reading", _0x1e12a5);
          _0x6ef49e = null;
        }
        _0x4f903e = 0;
        _0x2a106f = 0;
      } else if (_0x4f903e != 0) {
        _0x4f903e = 0;
        _0xf9e589();
      }
    }
    function _0x2785be() {
      _0x4d6298 = 0;
      if (typeof GravitySensor === "undefined") {
        if (_0x2e58ed == 0) {
          _0x53458f();
        }
        if (_0x4f903e == 0) {
          _0xfd05c3();
        }
        return;
      }
      if (_0xa6471e) {
        _0xa6471e.stop();
        _0xa6471e.removeEventListener("reading", _0x7008ee);
        _0xa6471e = null;
      }
    }
    function _0x5222fb(_0x2f12b3) {
      try {
        (function () {
          _0x1873f9.call(null, _0x2f12b3);
        })();
      } catch (_0x2aa210) {
        console.warn(_0x2aa210);
      }
    }
    var _0x5ea921 = null;
    function _0x524d13() {
      return _0x5ea921 && _0x5ea921.activated || _0xafa903 != 0;
    }
    function _0x463242() {
      if (_0xafa903 != 0) {
        _0x34835c(_0xafa903, _0x5ea921.x, _0x5ea921.y, _0x5ea921.z);
      }
    }
    var _0x3cf047 = 0;
    function _0x11b72f(_0x3a6a14, _0x12c1ad) {
      if (typeof Gyroscope === "undefined") {
        _0x29ae69();
        _0xafa903 = _0x3a6a14;
        return;
      }
      _0xafa903 = _0x3a6a14;
      function _0x1e1d78(_0x26ed37) {
        _0x5ea921 = new Gyroscope({
          frequency: _0x26ed37,
          referenceFrame: "device"
        });
        _0x5ea921.addEventListener("reading", _0x463242);
        _0x5ea921.addEventListener("error", function (_0x40b44d) {
          _0x568432(_0x40b44d.error ? _0x40b44d.error : _0x40b44d);
        });
        _0x5ea921.start();
      }
      if (_0x5ea921) {
        _0x5ea921.stop();
        _0x5ea921.removeEventListener("reading", _0x463242);
        _0x1e1d78(_0x12c1ad);
      } else if (_0x3cf047 != 0) {
        _0x3cf047 = _0x12c1ad;
      } else {
        _0x3cf047 = _0x12c1ad;
        navigator.permissions.query({
          name: "gyroscope"
        }).then(function (_0x2546ba) {
          if (_0x2546ba.state === "granted") {
            _0x1e1d78(_0x3cf047);
          } else {
            _0x568432("No permission to use Gyroscope.");
          }
          _0x3cf047 = 0;
        });
      }
    }
    function _0x27b6b7() {
      if (_0x5ea921) {
        _0x5ea921.stop();
        _0x5ea921.removeEventListener("reading", _0x463242);
        _0x5ea921 = null;
        _0xafa903 = 0;
      } else if (_0xafa903 != 0) {
        _0xafa903 = 0;
        _0xf9e589();
      }
    }
    function _0x96f52f() {
      const _0x36e6c0 = function (_0xe0b2b0) {
        if (_0xe0b2b0.target.localName !== "canvas") {
          _0x19b584();
        }
      };
      document.addEventListener("contextmenu", _0x36e6c0);
      _0xbb74bb.deinitializers.push(function () {
        document.removeEventListener("contextmenu", _0x36e6c0);
      });
    }
    function _0x58c602() {
      return _0x6ef49e && _0x6ef49e.activated || _0x4f903e != 0;
    }
    function _0x47a964(_0x2043f4, _0x1741cb) {
      var _0x4d2771 = _0x468390(_0x2043f4);
      if (typeof dump == "function") {
        dump(_0x4d2771);
      }
      switch (_0x1741cb) {
        case 0:
        case 1:
        case 4:
          console.error(_0x4d2771);
          return;
        case 2:
          console.warn(_0x4d2771);
          return;
        case 3:
        case 5:
          console.log(_0x4d2771);
          return;
        default:
          console.error("Unknown console message type!");
          console.error(_0x4d2771);
      }
    }
    function _0xf1feb0(_0x51c5b2, _0x3ba736) {
      var _0x1f44ba = _0x32c4af();
      if (_0x51c5b2) {
        _0x4fe443(_0x1f44ba, _0x51c5b2, _0x3ba736);
      }
      return _0x53c190(_0x1f44ba);
    }
    var _0x37625f = null;
    var _0x478d99 = null;
    var _0x458a8b = null;
    var _0x4cd863 = false;
    function _0x3eb91a() {
      return _0x4cd863;
    }
    function _0x78fdad() {
      var _0xa33e2c = 0;
      var _0x1727a5 = 1;
      if (!_0x458a8b) {
        return _0x1727a5;
      }
      return _0xa33e2c;
    }
    function _0x29800d(_0x4d12b6, _0x3f3271) {
      var _0x461cb5 = _0x458a8b && _0x458a8b.input ? _0x458a8b.input.value : _0x478d99 ? _0x478d99 : "";
      if (_0x4d12b6) {
        _0x4fe443(_0x461cb5, _0x4d12b6, _0x3f3271);
      }
      return _0x53c190(_0x461cb5);
    }
    function _0x2d8407(_0xd98836, _0x540dbb) {
      if (!_0x458a8b) {
        _0x2f8726[_0xd98836 >> 2] = 0;
        _0x2f8726[_0x540dbb >> 2] = 0;
        return;
      }
      _0x2f8726[_0xd98836 >> 2] = _0x458a8b.input.selectionStart;
      _0x2f8726[_0x540dbb >> 2] = _0x458a8b.input.selectionEnd - _0x458a8b.input.selectionStart;
    }
    function _0x784dbe(_0x11258a) {
      if (_0x37625f) {
        return;
      }
      _0x4cd863 = true;
      function _0x7e5d20() {
        if (_0x458a8b && _0x458a8b.input) {
          _0x478d99 = _0x458a8b.input.value;
          _0x458a8b.input = null;
          if (_0x458a8b.parentNode && _0x458a8b.parentNode) {
            _0x458a8b.parentNode.removeChild(_0x458a8b);
          }
        }
        _0x458a8b = null;
        _0x37625f = null;
        setTimeout(function () {
          _0x4cd863 = false;
        }, 100);
      }
      if (_0x11258a) {
        var _0x473462 = 200;
        _0x37625f = setTimeout(_0x7e5d20, _0x473462);
      } else {
        _0x7e5d20();
      }
    }
    function _0x55ce44(_0x46b32f) {
      if (!_0x458a8b) {
        return;
      }
      _0x458a8b.input.maxLength = _0x46b32f;
    }
    function _0x51c9f4(_0x1d327b) {
      if (!_0x458a8b) {
        return;
      }
      _0x1d327b = _0x468390(_0x1d327b);
      _0x458a8b.input.value = _0x1d327b;
    }
    function _0x79f5fe(_0x2ed6c5, _0x39910b) {
      if (!_0x458a8b) {
        return;
      }
      if (_0x458a8b.input.type === "number") {
        _0x458a8b.input.type = "text";
        _0x458a8b.input.setSelectionRange(_0x2ed6c5, _0x2ed6c5 + _0x39910b);
        _0x458a8b.input.type = "number";
      } else {
        _0x458a8b.input.setSelectionRange(_0x2ed6c5, _0x2ed6c5 + _0x39910b);
      }
    }
    function _0x1e7d2d(_0x1a2d75, _0xf33f73, _0x2199b5, _0x349b77, _0x574dc3, _0x1b916d, _0x1d34c1, _0x365814) {
      if (_0x37625f) {
        clearTimeout(_0x37625f);
        _0x37625f = null;
      }
      _0x1a2d75 = _0x468390(_0x1a2d75);
      _0x478d99 = _0x1a2d75;
      _0x1d34c1 = _0x468390(_0x1d34c1);
      var _0x5e5c43 = document.body;
      var _0xd1896a = !!_0x458a8b;
      var _0x559727;
      var _0x13ee86 = 2;
      var _0x39048d = 3;
      var _0x2e02a3 = 4;
      var _0xdc7786 = 5;
      var _0x297a05 = 7;
      if (!_0x574dc3) {
        switch (_0xf33f73) {
          case _0x297a05:
            _0x559727 = "email";
            break;
          case _0x39048d:
            _0x559727 = "url";
            break;
          case _0x13ee86:
          case _0x2e02a3:
          case _0xdc7786:
            _0x559727 = "number";
            break;
          default:
            _0x559727 = "text";
            break;
        }
      } else {
        _0x559727 = "password";
      }
      if (_0xd1896a) {
        if (_0x458a8b.multiline != _0x349b77) {
          _0x784dbe(false);
          return;
        }
      }
      var _0x5905c1 = _0x458a8b || document.createElement("div");
      if (!_0xd1896a) {
        _0x5905c1.style = "width:100%; position:fixed; bottom:0px; margin:0px; padding:0px; left:0px; border: 1px solid #000; border-radius: 5px; background-color:#fff; font-size:14pt;";
        _0x5e5c43.appendChild(_0x5905c1);
        _0x458a8b = _0x5905c1;
      }
      var _0x162ecb = _0xd1896a ? _0x458a8b.input : document.createElement(_0x349b77 ? "textarea" : "input");
      _0x458a8b.multiline = _0x349b77;
      _0x458a8b.secure = _0x574dc3;
      _0x458a8b.keyboardType = _0xf33f73;
      _0x458a8b.inputType = _0x559727;
      _0x162ecb.type = _0x559727;
      _0x162ecb.style = "width:calc(100% - 85px); " + (_0x349b77 ? "height:100px;" : "") + "vertical-align:top; border-radius: 5px; outline:none; cursor:default; resize:none; border:0px; padding:10px 0px 10px 10px;";
      _0x162ecb.spellcheck = _0x2199b5 ? true : false;
      _0x162ecb.maxLength = _0x365814 > 0 ? _0x365814 : 524288;
      _0x162ecb.value = _0x1a2d75;
      _0x162ecb.placeholder = _0x1d34c1;
      if (!_0xd1896a) {
        _0x5905c1.appendChild(_0x162ecb);
        _0x5905c1.input = _0x162ecb;
      }
      if (!_0xd1896a) {
        var _0x20311e = document.createElement("button");
        _0x20311e.innerText = "OK";
        _0x20311e.style = "border:0; position:absolute; left:calc(100% - 75px); top:0px; width:75px; height:100%; margin:0; padding:0; border-radius: 5px; background-color:#fff";
        _0x20311e.addEventListener("touchend", function () {
          _0x784dbe(true);
        });
        _0x5905c1.appendChild(_0x20311e);
        _0x5905c1.okButton = _0x20311e;
        _0x162ecb.addEventListener("keyup", function (_0x93b2a3) {
          if (_0x162ecb.parentNode.multiline) {
            return;
          }
          if (_0x93b2a3.code == "Enter" || _0x93b2a3.which == 13 || _0x93b2a3.keyCode == 13) {
            _0x784dbe(true);
          }
        });
        _0x162ecb.addEventListener("blur", function (_0x325d2e) {
          _0x784dbe(true);
          _0x325d2e.stopPropagation();
          _0x325d2e.preventDefault();
        });
        _0x162ecb.select();
        _0x162ecb.focus();
      } else {
        _0x162ecb.select();
      }
    }
    var _0x3f09ac = null;
    var _0x30ad22 = 0;
    function _0x5a6344() {
      return _0x3f09ac && _0x3f09ac.activated || _0x30ad22 != 0;
    }
    function _0x5a85d3() {
      if (_0x30ad22 != 0) {
        _0x576aba(_0x30ad22, _0x3f09ac.quaternion[0], _0x3f09ac.quaternion[1], _0x3f09ac.quaternion[2], _0x3f09ac.quaternion[3]);
      }
    }
    var _0x5d6a4b = 0;
    function _0xf2f161(_0x393273) {
      if (_0x30ad22) {
        var _0x549b8e = Math.PI / 180;
        var _0xb0dcc7 = _0x393273.beta * _0x549b8e;
        var _0xe3831f = _0x393273.gamma * _0x549b8e;
        var _0x331972 = _0x393273.alpha * _0x549b8e;
        var _0x5d187f = Math.cos(_0xb0dcc7 / 2);
        var _0x57522f = Math.sin(_0xb0dcc7 / 2);
        var _0x2e2fb5 = Math.cos(_0xe3831f / 2);
        var _0x12d520 = Math.sin(_0xe3831f / 2);
        var _0x3cbc61 = Math.cos(_0x331972 / 2);
        var _0x3fa2c0 = Math.sin(_0x331972 / 2);
        var _0x1894a5 = _0x57522f * _0x2e2fb5 * _0x3cbc61 - _0x5d187f * _0x12d520 * _0x3fa2c0;
        var _0x5b567c = _0x5d187f * _0x12d520 * _0x3cbc61 + _0x57522f * _0x2e2fb5 * _0x3fa2c0;
        var _0x3983b9 = _0x5d187f * _0x2e2fb5 * _0x3fa2c0 + _0x57522f * _0x12d520 * _0x3cbc61;
        var _0x442ab4 = _0x5d187f * _0x2e2fb5 * _0x3cbc61 - _0x57522f * _0x12d520 * _0x3fa2c0;
        _0x576aba(_0x30ad22, _0x1894a5, _0x5b567c, _0x3983b9, _0x442ab4);
      }
    }
    function _0x4e9149(_0x10170b, _0x594017) {
      if (typeof RelativeOrientationSensor === "undefined") {
        if (_0x30ad22 == 0) {
          _0x30ad22 = _0x10170b;
          _0x2afac9(1);
          window.addEventListener("deviceorientation", _0xf2f161);
        }
        return;
      }
      _0x30ad22 = _0x10170b;
      function _0x14a836(_0x187d90) {
        _0x3f09ac = new RelativeOrientationSensor({
          frequency: _0x187d90,
          referenceFrame: "device"
        });
        _0x3f09ac.addEventListener("reading", _0x5a85d3);
        _0x3f09ac.addEventListener("error", function (_0x854aea) {
          _0x568432(_0x854aea.error ? _0x854aea.error : _0x854aea);
        });
        _0x3f09ac.start();
      }
      if (_0x3f09ac) {
        _0x3f09ac.stop();
        _0x3f09ac.removeEventListener("reading", _0x5a85d3);
        _0x14a836(_0x594017);
      } else if (_0x5d6a4b != 0) {
        _0x5d6a4b = _0x594017;
      } else {
        _0x5d6a4b = _0x594017;
        Promise.all([navigator.permissions.query({
          name: "accelerometer"
        }), navigator.permissions.query({
          name: "gyroscope"
        })]).then(function (_0x1f3459) {
          if (_0x1f3459.every(function (_0x1791f0) {
            return _0x1791f0.state === "granted";
          })) {
            _0x14a836(_0x5d6a4b);
          } else {
            _0x568432("No permissions to use RelativeOrientationSensor.");
          }
          _0x5d6a4b = 0;
        });
      }
    }
    function _0x409bf8() {
      if (_0x3f09ac) {
        _0x3f09ac.stop();
        _0x3f09ac.removeEventListener("reading", _0x5a85d3);
        _0x3f09ac = null;
      } else if (_0x30ad22 != 0) {
        window.removeEventListener("deviceorientation", _0xf2f161);
      }
      _0x30ad22 = 0;
    }
    function _0x1f4971() {
      if (_0x53813a == 0) {
        return;
      }
      _0x2afac9(_0x53813a);
    }
    function _0x3a0f9f() {
      _0xbb74bb.QuitCleanup();
    }
    var _0x542a5c = 0;
    function _0x90d7c5() {
      if (_0x542a5c) {
        _0x1a2695(_0x542a5c, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
      }
    }
    function _0x27d8ea() {
      _0x542a5c = 0;
      window.removeEventListener("resize", _0x90d7c5);
      if (screen.orientation) {
        screen.orientation.removeEventListener("change", _0x90d7c5);
      }
    }
    function _0x3c54d4(_0x322ade) {
      if (!_0x542a5c) {
        if (screen.orientation) {
          screen.orientation.addEventListener("change", _0x90d7c5);
        }
        window.addEventListener("resize", _0x90d7c5);
        _0x542a5c = _0x322ade;
        setTimeout(_0x90d7c5, 0);
      }
    }
    var _0x5b3cf8 = -1;
    var _0xa14023 = -1;
    var _0x2f3fb3 = -1;
    function _0x5f2ed6(_0x12031a) {
      if (!screen.orientation || !screen.orientation.lock) {
        return;
      }
      function _0x52d458() {
        _0xa14023 = _0x5b3cf8;
        var _0x59a152 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
        var _0x1b0b7f = _0x59a152[_0xa14023];
        screen.orientation.lock(_0x1b0b7f).then(function () {
          if (_0x5b3cf8 != _0xa14023) {
            _0x2f3fb3 = setTimeout(_0x52d458, 0);
          } else {
            _0x2f3fb3 = -1;
          }
        }).catch(function (_0x13a69e) {
          _0x568432(_0x13a69e);
          _0x2f3fb3 = -1;
        });
      }
      _0x5b3cf8 = _0x12031a;
      if (_0x2f3fb3 == -1 && _0x12031a != _0xa14023) {
        _0x2f3fb3 = setTimeout(_0x52d458, 0);
      }
    }
    var _0x33a4e1 = {
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
    function _0x5bdc30(_0xa78bd9) {
      _0xa78bd9.estimatePlaybackPosition = function () {
        var _0xf5de00 = (_0x33a4e1.audioContext.currentTime - _0xa78bd9.playbackStartTime) * _0xa78bd9.playbackRate.value;
        if (_0xa78bd9.loop && _0xf5de00 >= _0xa78bd9.loopStart) {
          _0xf5de00 = (_0xf5de00 - _0xa78bd9.loopStart) % (_0xa78bd9.loopEnd - _0xa78bd9.loopStart) + _0xa78bd9.loopStart;
        }
        return _0xf5de00;
      };
      _0xa78bd9.setPitch = function (_0x216f0b) {
        var _0x11fa98 = _0xa78bd9.estimatePlaybackPosition();
        if (_0x11fa98 >= 0) {
          _0xa78bd9.playbackStartTime = _0x33a4e1.audioContext.currentTime - _0x11fa98 / _0x216f0b;
        }
        if (_0xa78bd9.playbackRate.value !== _0x216f0b) {
          _0xa78bd9.playbackRate.value = _0x216f0b;
        }
      };
    }
    function _0x96f960(_0x2f1544, _0x31a5f5) {
      var _0x1907c7 = {
        buffer: _0x2f1544,
        error: _0x31a5f5
      };
      _0x1907c7.release = function () {};
      _0x1907c7.getLength = function () {
        if (!this.buffer) {
          console.log("Trying to get length of sound which is not loaded yet.");
          return 0;
        }
        return this.buffer.length;
      };
      _0x1907c7.getData = function (_0x1ace8d, _0x19a435) {
        if (!this.buffer) {
          console.log("Trying to get data of sound which is not loaded.");
          return 0;
        }
        var _0x2cd39c = _0x1ace8d >> 2;
        var _0x4c5253 = _0x2e245b.subarray(_0x2cd39c, _0x2cd39c + (_0x19a435 >> 2));
        var _0x15dd07 = Math.floor((_0x19a435 >> 2) / this.buffer.numberOfChannels);
        var _0xe1af51 = Math.min(this.buffer.length, _0x15dd07);
        for (var _0x2acbd4 = 0; _0x2acbd4 < this.buffer.numberOfChannels; _0x2acbd4++) {
          var _0x265e84 = this.buffer.getChannelData(_0x2acbd4).subarray(0, _0xe1af51);
          _0x4c5253.set(_0x265e84, _0x2acbd4 * _0xe1af51);
        }
        return _0xe1af51 * this.buffer.numberOfChannels * 4;
      };
      _0x1907c7.getNumberOfChannels = function () {
        if (!this.buffer) {
          console.log("Trying to get metadata of sound which is not loaded.");
          return 0;
        }
        return this.buffer.numberOfChannels;
      };
      _0x1907c7.getFrequency = function () {
        if (!this.buffer) {
          console.log("Trying to get metadata of sound which is not loaded.");
          return 0;
        }
        return this.buffer.sampleRate;
      };
      _0x1907c7.createSourceNode = function () {
        if (!this.buffer) {
          console.log("Trying to play sound which is not loaded.");
        }
        var _0x5a3015 = _0x33a4e1.audioContext.createBufferSource();
        _0x5a3015.buffer = this.buffer;
        _0x5bdc30(_0x5a3015);
        return _0x5a3015;
      };
      return _0x1907c7;
    }
    function _0x260d91(_0x57ee54, _0x189bec) {
      var _0xd3f12a = {
        callback: _0x57ee54,
        userData: _0x189bec,
        source: null,
        gain: _0x33a4e1.audioContext.createGain(),
        panner: _0x33a4e1.audioContext.createPanner(),
        spatialBlendDryGain: _0x33a4e1.audioContext.createGain(),
        spatialBlendWetGain: _0x33a4e1.audioContext.createGain(),
        spatialBlendLevel: 0,
        loop: false,
        loopStart: 0,
        loopEnd: 0,
        pitch: 1
      };
      _0xd3f12a.panner.rolloffFactor = 0;
      _0xd3f12a.release = function () {
        this.disconnectSource();
        this.gain.disconnect();
        this.panner.disconnect();
      };
      _0xd3f12a.playSoundClip = function (_0x5e1854, _0x507d5, _0x2954df) {
        try {
          var _0x3b197c = this;
          this.source = _0x5e1854.createSourceNode();
          this.configurePanningNodes();
          this.setSpatialBlendLevel(this.spatialBlendLevel);
          this.source.onended = function () {
            _0x3b197c.source.isStopped = true;
            _0x3b197c.disconnectSource();
            if (_0x3b197c.callback) {
              _0x2fc94d("vi", _0x3b197c.callback, [_0x3b197c.userData]);
            }
          };
          this.source.loop = this.loop;
          this.source.loopStart = this.loopStart;
          this.source.loopEnd = this.loopEnd;
          this.source.start(_0x507d5, _0x2954df);
          this.source.playbackStartTime = _0x507d5 - _0x2954df / this.source.playbackRate.value;
          this.source.setPitch(this.pitch);
        } catch (_0x5d00d0) {
          console.error("Channel.playSoundClip error. Exception: " + _0x5d00d0);
        }
      };
      _0xd3f12a.stop = function (_0x41bbed) {
        if (!this.source) {
          return;
        }
        try {
          _0xd3f12a.source.stop(_0x33a4e1.audioContext.currentTime + _0x41bbed);
        } catch (_0x57d048) {}
        if (_0x41bbed == 0) {
          this.disconnectSource();
        }
      };
      _0xd3f12a.isPaused = function () {
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
      _0xd3f12a.pause = function () {
        if (!this.source || this.source.isPausedMockNode) {
          return;
        }
        if (this.source.mediaElement) {
          this.source._pauseMediaElement();
          return;
        }
        var _0x5a1369 = {
          isPausedMockNode: true,
          buffer: this.source.buffer,
          loop: this.source.loop,
          loopStart: this.source.loopStart,
          loopEnd: this.source.loopEnd,
          playbackRate: this.source.playbackRate.value,
          scheduledStopTime: undefined,
          playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
          setPitch: function (_0x7fbdb2) {
            this.playbackRate = _0x7fbdb2;
          },
          stop: function (_0x34d1f1) {
            this.scheduledStopTime = _0x34d1f1;
          }
        };
        this.stop(0);
        this.disconnectSource();
        this.source = _0x5a1369;
      };
      _0xd3f12a.resume = function (_0x34f940 = 0) {
        if (this.source && this.source.mediaElement) {
          this.source.start(undefined, this.source.currentTime);
          return;
        }
        if (!this.source || !this.source.isPausedMockNode) {
          return;
        }
        var _0x2e3a7a = this.source;
        var _0x19b176 = _0x33a4e1.audioContext.currentTime;
        if (_0x2e3a7a.playbackPausedAtPosition < 0) {
          _0x19b176 -= _0x2e3a7a.playbackPausedAtPosition;
        }
        var _0x469555 = _0x96f960(_0x2e3a7a.buffer, false);
        this.playSoundClip(_0x469555, _0x19b176, Math.max(0, _0x2e3a7a.playbackPausedAtPosition) + _0x34f940);
        this.source.loop = _0x2e3a7a.loop;
        this.source.loopStart = _0x2e3a7a.loopStart;
        this.source.loopEnd = _0x2e3a7a.loopEnd;
        this.source.setPitch(_0x2e3a7a.playbackRate);
        if (typeof _0x2e3a7a.scheduledStopTime !== "undefined") {
          var _0x26ab97 = Math.max(_0x2e3a7a.scheduledStopTime - _0x33a4e1.audioContext.currentTime, 0);
          this.stop(_0x26ab97);
        }
      };
      _0xd3f12a.setLoop = function (_0x5565bc) {
        this.loop = _0x5565bc;
        if (!this.source || this.source.loop == _0x5565bc) {
          return;
        }
        this.source.loop = _0x5565bc;
      };
      _0xd3f12a.setLoopPoints = function (_0x1a99ea, _0x730b96) {
        this.loopStart = _0x1a99ea;
        this.loopEnd = _0x730b96;
        if (!this.source) {
          return;
        }
        if (this.source.loopStart !== _0x1a99ea) {
          this.source.loopStart = _0x1a99ea;
        }
        if (this.source.loopEnd !== _0x730b96) {
          this.source.loopEnd = _0x730b96;
        }
      };
      _0xd3f12a.set3D = function (_0x1b7636) {
        if (this.spatialBlendLevel != _0x1b7636) {
          this.setSpatialBlendLevel(_0x1b7636);
        }
      };
      _0xd3f12a.setPitch = function (_0x55ce6d) {
        this.pitch = _0x55ce6d;
        if (!this.source) {
          return;
        }
        this.source.setPitch(_0x55ce6d);
      };
      _0xd3f12a.setVolume = function (_0x3629d5) {
        if (this.gain.gain.value == _0x3629d5) {
          return;
        }
        this.gain.gain.value = _0x3629d5;
      };
      _0xd3f12a.setPosition = function (_0x1ebb41, _0x4c4774, _0x2fe5af) {
        var _0x4adfc4 = this.panner;
        if (_0x4adfc4.positionX) {
          if (_0x4adfc4.positionX.value !== _0x1ebb41) {
            _0x4adfc4.positionX.value = _0x1ebb41;
          }
          if (_0x4adfc4.positionY.value !== _0x4c4774) {
            _0x4adfc4.positionY.value = _0x4c4774;
          }
          if (_0x4adfc4.positionZ.value !== _0x2fe5af) {
            _0x4adfc4.positionZ.value = _0x2fe5af;
          }
        } else if (_0x4adfc4._x !== _0x1ebb41 || _0x4adfc4._y !== _0x4c4774 || _0x4adfc4._z !== _0x2fe5af) {
          _0x4adfc4.setPosition(_0x1ebb41, _0x4c4774, _0x2fe5af);
          _0x4adfc4._x = _0x1ebb41;
          _0x4adfc4._y = _0x4c4774;
          _0x4adfc4._z = _0x2fe5af;
        }
      };
      _0xd3f12a.disconnectSource = function () {
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
      _0xd3f12a.setSpatialBlendLevel = function (_0x2e1ebe) {
        var _0x5115d2 = this.source && !this.source.isPausedMockNode;
        var _0x3f3594 = this.spatialBlendLevel > 0 && _0x2e1ebe == 0 || this.spatialBlendLevel == 0 && _0x2e1ebe > 0;
        var _0x4466be = _0x5115d2 && _0x3f3594;
        this.spatialBlendWetGain.gain.value = _0x2e1ebe;
        this.spatialBlendDryGain.gain.value = 1 - _0x2e1ebe;
        this.spatialBlendLevel = _0x2e1ebe;
        if (_0x4466be) {
          this.configurePanningNodes();
        }
      };
      _0xd3f12a.configurePanningNodes = function () {
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
        this.gain.connect(_0x33a4e1.audioContext.destination);
      };
      _0xd3f12a.isStopped = function () {
        if (!this.source) {
          return true;
        }
        if (this.source.mediaElement) {
          return this.source.isStopped;
        }
        return false;
      };
      return _0xd3f12a;
    }
    function _0x54d9dd(_0x1ab6a5, _0x16359c) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return;
      }
      _0x33a4e1.audioInstances[++_0x33a4e1.audioInstanceIdCounter] = _0x260d91(_0x1ab6a5, _0x16359c);
      return _0x33a4e1.audioInstanceIdCounter;
    }
    function _0x4aeed8(_0x1b7fd7) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return _0x33a4e1.FAKEMOD_SAMPLERATE;
      }
      var _0x14fbd7 = _0x33a4e1.audioInstances[_0x1b7fd7];
      if (!_0x14fbd7) {
        return _0x33a4e1.FAKEMOD_SAMPLERATE;
      }
      var _0x13a367 = _0x14fbd7.buffer ? _0x14fbd7.buffer : _0x14fbd7.source ? _0x14fbd7.source.buffer : 0;
      if (!_0x13a367) {
        return _0x33a4e1.FAKEMOD_SAMPLERATE;
      }
      return _0x13a367.sampleRate;
    }
    function _0x33ad27() {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return _0x33a4e1.FAKEMOD_SAMPLERATE;
      }
      return _0x33a4e1.audioContext.sampleRate;
    }
    function _0x157344(_0x689e16) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return 0;
      }
      var _0x174145 = _0x33a4e1.audioInstances[_0x689e16];
      if (!_0x174145) {
        return 0;
      }
      return _0x174145.getLength();
    }
    function _0x296cd6(_0x1b3925) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return 2;
      }
      var _0x423291 = _0x33a4e1.audioInstances[_0x1b3925];
      if (_0x423291.error) {
        return 2;
      }
      if (_0x423291.buffer || _0x423291.url) {
        return 0;
      }
      return 1;
    }
    function _0x41ea7b() {
      try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        _0x33a4e1.audioContext = new AudioContext();
        _0x33a4e1.audioContextSuspendedTime = _0x101e5e();
        _0x33a4e1.audioContextResumeOffset = 0;
        _0x33a4e1.audioContext.onstatechange = () => {
          var _0x48c9a3 = _0x33a4e1.audioContext.state;
          if (_0x48c9a3 === "running") {
            _0x33a4e1.contextIsRunning = true;
            var _0x4ab78d = _0x101e5e();
            _0x33a4e1.audioContextResumeOffset = _0x4ab78d - _0x33a4e1.audioContextSuspendedTime;
            console.log("Audio context resumed after " + _0x33a4e1.audioContextResumeOffset.toFixed(3) + " seconds.");
            var _0x2e091f = _0x33a4e1.soundsPendingContextResume.pop();
            while (_0x2e091f !== undefined) {
              if (_0x2e091f.channel.source) {
                _0x2e091f.channel.resume(_0x2e091f.offset + _0x33a4e1.audioContextResumeOffset);
              } else {
                var _0x509050 = 0;
                if (_0x4ab78d > _0x2e091f.startTime) {
                  _0x509050 = _0x4ab78d - _0x2e091f.startTime;
                }
                _0x2e091f.channel.playSoundClip(_0x2e091f.clip, _0x2e091f.startTime, _0x2e091f.offset + _0x509050);
              }
              _0x2e091f = _0x33a4e1.soundsPendingContextResume.pop();
            }
          } else {
            _0x33a4e1.contextIsRunning = false;
            console.log("Audio context suspended.");
            _0x33a4e1.audioContextSuspendedTime = _0x101e5e();
            Object.values(_0x33a4e1.audioInstances).forEach(_0x2301d1 => {
              if (_0x2301d1.source != null) {
                if (!_0x2301d1.isPaused()) {
                  _0x2301d1.pause();
                  _0x33a4e1.soundsPendingContextResume.push({
                    channel: _0x2301d1,
                    clip: null,
                    startTime: null,
                    offset: _0x2301d1.source.playbackPausedAtPosition
                  });
                }
              }
            });
          }
        };
        var _0x14b934 = function () {
          if (_0x33a4e1.audioContext.state === "suspended") {
            _0x33a4e1.audioContext.resume().catch(function (_0x383f8f) {
              console.warn("Could not resume audio context. Exception: " + _0x383f8f);
            });
          } else {
            _0xbb74bb.clearInterval(_0x887959);
          }
        };
        var _0x887959 = _0xbb74bb.setInterval(_0x14b934, 400);
        _0x33a4e1.audioWebEnabled = 1;
        var _0x585df8 = function () {
          try {
            if (_0x33a4e1.audioContext.state !== "running" && _0x33a4e1.audioContext.state !== "closed") {
              _0x33a4e1.audioContext.resume().catch(function (_0x5d85bc) {
                console.warn("Could not resume audio context. Exception: " + _0x5d85bc);
              });
            }
            var _0x149a43 = 20;
            while (_0x33a4e1.audioCache.length < _0x149a43) {
              var _0xb396d5 = new Audio();
              _0xb396d5.autoplay = false;
              _0x33a4e1.audioCache.push(_0xb396d5);
            }
          } catch (_0x3ee8c0) {}
        };
        window.addEventListener("mousedown", _0x585df8);
        window.addEventListener("touchstart", _0x585df8);
        _0xbb74bb.deinitializers.push(function () {
          window.removeEventListener("mousedown", _0x585df8);
          window.removeEventListener("touchstart", _0x585df8);
        });
      } catch (_0x57011b) {
        alert("Web Audio API is not supported in this browser");
      }
    }
    function _0x286313(_0x29a471) {
      var _0x347fa7 = _0x96f960(null, false);
      _0x33a4e1.audioContext.decodeAudioData(_0x29a471, function (_0x4b5e9f) {
        _0x347fa7.buffer = _0x4b5e9f;
      }, function (_0xa1cc57) {
        _0x347fa7.error = true;
        console.log("Decode error: " + _0xa1cc57);
      });
      return _0x347fa7;
    }
    function _0x210c3a(_0x243276) {
      switch (_0x243276) {
        case 13:
          return "audio/mpeg";
        case 20:
          return "audio/wav";
        default:
          return "audio/mp4";
      }
    }
    function _0x57e422(_0x23392e, _0x1d9f19) {
      var _0x5d136f = _0x210c3a(_0x1d9f19);
      var _0x5439cd = new Blob([_0x23392e], {
        type: _0x5d136f
      });
      var _0x245225 = {
        url: URL.createObjectURL(_0x5439cd),
        error: false,
        mediaElement: new Audio()
      };
      _0x245225.mediaElement.preload = "metadata";
      _0x245225.mediaElement.src = _0x245225.url;
      _0x245225.release = function () {
        if (!this.mediaElement) {
          return;
        }
        this.mediaElement.src = "";
        URL.revokeObjectURL(this.url);
        delete this.mediaElement;
        delete this.url;
      };
      _0x245225.getLength = function () {
        return this.mediaElement.duration * 44100;
      };
      _0x245225.getData = function (_0x738ef1, _0x268d0f) {
        console.warn("getData() is not supported for compressed sound.");
        return 0;
      };
      _0x245225.getNumberOfChannels = function () {
        console.warn("getNumberOfChannels() is not supported for compressed sound.");
        return 0;
      };
      _0x245225.getFrequency = function () {
        console.warn("getFrequency() is not supported for compressed sound.");
        return 0;
      };
      _0x245225.createSourceNode = function () {
        var _0x4f6411 = this;
        var _0x24c4ce = _0x33a4e1.audioCache.length ? _0x33a4e1.audioCache.pop() : new Audio();
        _0x24c4ce.preload = "metadata";
        _0x24c4ce.src = this.url;
        var _0x25525e = _0x33a4e1.audioContext.createMediaElementSource(_0x24c4ce);
        Object.defineProperty(_0x25525e, "loop", {
          get: function () {
            return _0x25525e.mediaElement.loop;
          },
          set: function (_0x8233f6) {
            if (_0x25525e.mediaElement.loop !== _0x8233f6) {
              _0x25525e.mediaElement.loop = _0x8233f6;
            }
          }
        });
        _0x25525e.playbackRate = {};
        Object.defineProperty(_0x25525e.playbackRate, "value", {
          get: function () {
            return _0x25525e.mediaElement.playbackRate;
          },
          set: function (_0x7e3ff2) {
            if (_0x25525e.mediaElement.playbackRate !== _0x7e3ff2) {
              _0x25525e.mediaElement.playbackRate = _0x7e3ff2;
            }
          }
        });
        Object.defineProperty(_0x25525e, "currentTime", {
          get: function () {
            return _0x25525e.mediaElement.currentTime;
          },
          set: function (_0x23d0fd) {
            if (_0x25525e.mediaElement.currentTime !== _0x23d0fd) {
              _0x25525e.mediaElement.currentTime = _0x23d0fd;
            }
          }
        });
        Object.defineProperty(_0x25525e, "mute", {
          get: function () {
            return _0x25525e.mediaElement.mute;
          },
          set: function (_0x12f382) {
            if (_0x25525e.mediaElement.mute !== _0x12f382) {
              _0x25525e.mediaElement.mute = _0x12f382;
            }
          }
        });
        Object.defineProperty(_0x25525e, "onended", {
          get: function () {
            return _0x25525e.mediaElement.onended;
          },
          set: function (_0x3171fe) {
            _0x25525e.mediaElement.onended = _0x3171fe;
          }
        });
        _0x25525e.playPromise = null;
        _0x25525e.playTimeout = null;
        _0x25525e.pauseRequested = false;
        _0x25525e.isStopped = false;
        _0x25525e._pauseMediaElement = function () {
          if (_0x25525e.playPromise || _0x25525e.playTimeout) {
            _0x25525e.pauseRequested = true;
          } else {
            _0x25525e.mediaElement.pause();
          }
        };
        _0x25525e._startPlayback = function (_0x291a72) {
          if (_0x25525e.playPromise || _0x25525e.playTimeout) {
            _0x25525e.mediaElement.currentTime = _0x291a72;
            _0x25525e.pauseRequested = false;
            return;
          }
          _0x25525e.mediaElement.currentTime = _0x291a72;
          _0x25525e.playPromise = _0x25525e.mediaElement.play();
          if (_0x25525e.playPromise) {
            _0x25525e.playPromise.then(function () {
              if (_0x25525e.pauseRequested) {
                _0x25525e.mediaElement.pause();
                _0x25525e.pauseRequested = false;
              }
              _0x25525e.playPromise = null;
            }).catch(function (_0x553f92) {
              _0x25525e.playPromise = null;
              if (_0x553f92.name !== "NotAllowedError") {
                throw _0x553f92;
              }
            });
          }
        };
        _0x25525e.start = function (_0x1eb5f7, _0x4ce820) {
          if (typeof _0x1eb5f7 === "undefined") {
            _0x1eb5f7 = _0x33a4e1.audioContext.currentTime;
          }
          if (typeof _0x4ce820 === "undefined") {
            _0x4ce820 = 0;
          }
          var _0x53587f = 4;
          var _0xd30ac3 = (_0x1eb5f7 - _0x33a4e1.audioContext.currentTime) * 1000;
          if (_0xd30ac3 > _0x53587f) {
            _0x25525e.playTimeout = setTimeout(function () {
              _0x25525e.playTimeout = null;
              _0x25525e._startPlayback(_0x4ce820);
            }, _0xd30ac3);
          } else {
            _0x25525e._startPlayback(_0x4ce820);
          }
        };
        _0x25525e.stop = function (_0x255a45) {
          if (typeof _0x255a45 === "undefined") {
            _0x255a45 = _0x33a4e1.audioContext.currentTime;
          }
          var _0x268be1 = 4;
          var _0x57cf06 = (_0x255a45 - _0x33a4e1.audioContext.currentTime) * 1000;
          if (_0x57cf06 > _0x268be1) {
            setTimeout(function () {
              _0x25525e._pauseMediaElement();
              _0x25525e.isStopped = true;
            }, _0x57cf06);
          } else {
            _0x25525e._pauseMediaElement();
            _0x25525e.isStopped = true;
          }
        };
        _0x5bdc30(_0x25525e);
        return _0x25525e;
      };
      return _0x245225;
    }
    function _0x118677(_0x3d7592, _0x1b9e5a, _0x1a0ddb, _0x1f131a) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return 0;
      }
      var _0x236fad = _0x4924c2.buffer.slice(_0x3d7592, _0x3d7592 + _0x1b9e5a);
      if (_0x1b9e5a < 131072) {
        _0x1a0ddb = 1;
      }
      var _0x5a7853;
      if (_0x1a0ddb) {
        _0x5a7853 = _0x286313(_0x236fad);
      } else {
        _0x5a7853 = _0x57e422(_0x236fad, _0x1f131a);
      }
      _0x33a4e1.audioInstances[++_0x33a4e1.audioInstanceIdCounter] = _0x5a7853;
      return _0x33a4e1.audioInstanceIdCounter;
    }
    function _0x264efd(_0x45e722, _0x26bb82, _0x39ec96, _0x450079) {
      var _0x34790d = _0x33a4e1.audioContext.createBuffer(_0x45e722, _0x26bb82, _0x39ec96);
      for (var _0x1e34fa = 0; _0x1e34fa < _0x45e722; _0x1e34fa++) {
        var _0xa8a1bf = (_0x450079 >> 2) + _0x26bb82 * _0x1e34fa;
        var _0x3ba92d = _0x34790d.copyToChannel || function (_0x4b7cd4, _0x330c27, _0xdabbaf) {
          var _0x74c494 = _0x4b7cd4.subarray(0, Math.min(_0x4b7cd4.length, this.length - (_0xdabbaf | 0)));
          this.getChannelData(_0x330c27 | 0).set(_0x74c494, _0xdabbaf | 0);
        };
        _0x3ba92d.apply(_0x34790d, [_0x2e245b.subarray(_0xa8a1bf, _0xa8a1bf + _0x26bb82), _0x1e34fa, 0]);
      }
      return _0x96f960(_0x34790d, false);
    }
    function _0xfd1deb(_0x4eef5c, _0x4c5420, _0x4c14db, _0x2f58c3) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return 0;
      }
      var _0x4c4b00 = _0x264efd(_0x4eef5c, _0x4c5420, _0x4c14db, _0x2f58c3);
      _0x33a4e1.audioInstances[++_0x33a4e1.audioInstanceIdCounter] = _0x4c4b00;
      return _0x33a4e1.audioInstanceIdCounter;
    }
    function _0x2e1bc7(_0x57e9fc, _0x45b354, _0x56391f, _0x155fe6) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return;
      }
      _0x312414(_0x45b354, 0);
      var _0xca6538 = _0x33a4e1.audioInstances[_0x57e9fc];
      var _0x29fc36 = _0x33a4e1.audioInstances[_0x45b354];
      if (!_0xca6538) {
        console.log("Trying to play sound which is not loaded.");
        return;
      }
      try {
        if (_0x33a4e1.contextIsRunning) {
          _0x29fc36.playSoundClip(_0xca6538, _0x33a4e1.audioContext.currentTime + _0x155fe6, _0x56391f);
        } else {
          _0x33a4e1.soundsPendingContextResume.push({
            channel: _0x29fc36,
            clip: _0xca6538,
            startTime: _0x33a4e1.audioContext.currentTime + _0x155fe6,
            offset: _0x56391f
          });
        }
      } catch (_0x3fdfc3) {
        console.error("playSoundClip error. Exception: " + _0x3fdfc3);
      }
    }
    function _0x14e3a6(_0x1808db) {
      var _0x2c73bd = _0x33a4e1.audioInstances[_0x1808db];
      if (_0x2c73bd) {
        _0x2c73bd.release();
      }
      delete _0x33a4e1.audioInstances[_0x1808db];
    }
    function _0x44c05a() {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return;
      }
      if (_0x33a4e1.audioContext.state === "suspended") {
        _0x33a4e1.audioContext.resume().catch(function (_0x1ce999) {
          console.warn("Could not resume audio context. Exception: " + _0x1ce999);
        });
      }
    }
    function _0xc4102a(_0x6564b5, _0x59bfe1) {
      var _0x40d614 = _0x33a4e1.audioInstances[_0x6564b5];
      _0x40d614.set3D(_0x59bfe1);
    }
    function _0x1d8d48(_0x2d2b4f, _0x5163e5, _0x465361, _0x43734d, _0x495693, _0x32cf52) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return;
      }
      _0x2d2b4f = -_0x2d2b4f;
      _0x5163e5 = -_0x5163e5;
      _0x465361 = -_0x465361;
      var _0x13135d = _0x33a4e1.audioContext.listener;
      if (_0x13135d.forwardX) {
        if (_0x13135d.forwardX.value !== _0x2d2b4f) {
          _0x13135d.forwardX.value = _0x2d2b4f;
        }
        if (_0x13135d.forwardY.value !== _0x5163e5) {
          _0x13135d.forwardY.value = _0x5163e5;
        }
        if (_0x13135d.forwardZ.value !== _0x465361) {
          _0x13135d.forwardZ.value = _0x465361;
        }
        if (_0x13135d.upX.value !== _0x43734d) {
          _0x13135d.upX.value = _0x43734d;
        }
        if (_0x13135d.upY.value !== _0x495693) {
          _0x13135d.upY.value = _0x495693;
        }
        if (_0x13135d.upZ.value !== _0x32cf52) {
          _0x13135d.upZ.value = _0x32cf52;
        }
      } else if (_0x13135d._forwardX !== _0x2d2b4f || _0x13135d._forwardY !== _0x5163e5 || _0x13135d._forwardZ !== _0x465361 || _0x13135d._upX !== _0x43734d || _0x13135d._upY !== _0x495693 || _0x13135d._upZ !== _0x32cf52) {
        _0x13135d.setOrientation(_0x2d2b4f, _0x5163e5, _0x465361, _0x43734d, _0x495693, _0x32cf52);
        _0x13135d._forwardX = _0x2d2b4f;
        _0x13135d._forwardY = _0x5163e5;
        _0x13135d._forwardZ = _0x465361;
        _0x13135d._upX = _0x43734d;
        _0x13135d._upY = _0x495693;
        _0x13135d._upZ = _0x32cf52;
      }
    }
    function _0x4526ea(_0x338e68, _0x3aad5c, _0x2a517b) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return;
      }
      var _0x2d2286 = _0x33a4e1.audioContext.listener;
      if (_0x2d2286.positionX) {
        if (_0x2d2286.positionX.value !== _0x338e68) {
          _0x2d2286.positionX.value = _0x338e68;
        }
        if (_0x2d2286.positionY.value !== _0x3aad5c) {
          _0x2d2286.positionY.value = _0x3aad5c;
        }
        if (_0x2d2286.positionZ.value !== _0x2a517b) {
          _0x2d2286.positionZ.value = _0x2a517b;
        }
      } else if (_0x2d2286._positionX !== _0x338e68 || _0x2d2286._positionY !== _0x3aad5c || _0x2d2286._positionZ !== _0x2a517b) {
        _0x2d2286.setPosition(_0x338e68, _0x3aad5c, _0x2a517b);
        _0x2d2286._positionX = _0x338e68;
        _0x2d2286._positionY = _0x3aad5c;
        _0x2d2286._positionZ = _0x2a517b;
      }
    }
    function _0x4de392(_0x520ac5, _0x312422) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return;
      }
      var _0x111584 = _0x33a4e1.audioInstances[_0x520ac5];
      _0x111584.setLoop(_0x312422);
    }
    function _0x44849a(_0x479172, _0x1bbf0, _0xbe01b2) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return;
      }
      var _0x42581b = _0x33a4e1.audioInstances[_0x479172];
      _0x42581b.setLoopPoints(_0x1bbf0, _0xbe01b2);
    }
    function _0x4e1a1(_0x2afb9f, _0x5d6949) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return;
      }
      var _0x333f7d = _0x33a4e1.audioInstances[_0x2afb9f];
      if (_0x5d6949 != _0x333f7d.isPaused()) {
        if (_0x5d6949) {
          _0x333f7d.pause();
        } else {
          _0x333f7d.resume();
        }
      }
    }
    function _0x8b2b8(_0x5b2e30, _0x1282e7) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return;
      }
      try {
        var _0x420c0a = _0x33a4e1.audioInstances[_0x5b2e30];
        _0x420c0a.setPitch(_0x1282e7);
      } catch (_0x241e89) {
        console.error("JS_Sound_SetPitch(channel=" + _0x5b2e30 + ", pitch=" + _0x1282e7 + ") threw an exception: " + _0x241e89);
      }
    }
    function _0x3c6c8b(_0x3a3255, _0x45c643, _0x1e3731, _0x4bcfe7) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return;
      }
      var _0x16fadb = _0x33a4e1.audioInstances[_0x3a3255];
      _0x16fadb.setPosition(_0x45c643, _0x1e3731, _0x4bcfe7);
    }
    function _0x46cdad(_0x4b94a7, _0x4420f1) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return;
      }
      try {
        var _0x3cd0ed = _0x33a4e1.audioInstances[_0x4b94a7];
        _0x3cd0ed.setVolume(_0x4420f1);
      } catch (_0x27eccc) {
        console.error("JS_Sound_SetVolume(channel=" + _0x4b94a7 + ", volume=" + _0x4420f1 + ") threw an exception: " + _0x27eccc);
      }
    }
    function _0x312414(_0x400983, _0x352a79) {
      if (_0x33a4e1.audioWebEnabled == 0) {
        return;
      }
      var _0xccfa76 = _0x33a4e1.audioInstances[_0x400983];
      _0xccfa76.stop(_0x352a79);
    }
    function _0x344a80(_0x19ff4f, _0x1fe2f3) {
      var _0x5df1d1 = _0xbb74bb.SystemInfo.browser;
      if (_0x19ff4f) {
        _0x4fe443(_0x5df1d1, _0x19ff4f, _0x1fe2f3);
      }
      return _0x53c190(_0x5df1d1);
    }
    function _0x355b96(_0x4ebda6, _0x358c58) {
      var _0x22e830 = _0xbb74bb.SystemInfo.browserVersion;
      if (_0x4ebda6) {
        _0x4fe443(_0x22e830, _0x4ebda6, _0x358c58);
      }
      return _0x53c190(_0x22e830);
    }
    function _0x53c93b(_0x194c56, _0x1c771f, _0x15e064) {
      var _0x1b1daf = _0x468390(_0x194c56);
      var _0x40f63d = _0x1b1daf == "#canvas" ? _0xbb74bb.canvas : document.querySelector(_0x1b1daf);
      var _0x33294b = 0;
      var _0x5acd02 = 0;
      if (_0x40f63d) {
        var _0x20dbaf = _0x40f63d.getBoundingClientRect();
        _0x33294b = _0x20dbaf.width;
        _0x5acd02 = _0x20dbaf.height;
      }
      _0x537a20[_0x1c771f >> 3] = _0x33294b;
      _0x537a20[_0x15e064 >> 3] = _0x5acd02;
    }
    function _0x42c8a3(_0x38caf0, _0x42be82) {
      if (_0x38caf0) {
        _0x4fe443("https://gamea.azgame.io", _0x38caf0, _0x42be82);
      }
      return _0x53c190("https://gamea.azgame.io");
    }
    function _0x369ee1(_0x41b61b, _0x19cf4d) {
      var _0x39aa8c = _0xbb74bb.SystemInfo.gpu;
      if (_0x41b61b) {
        _0x4fe443(_0x39aa8c, _0x41b61b, _0x19cf4d);
      }
      return _0x53c190(_0x39aa8c);
    }
    function _0x131fd1(_0x44366a, _0x5643d4) {
      var _0x5c9060 = _0xbb74bb.SystemInfo.language;
      if (_0x44366a) {
        _0x4fe443(_0x5c9060, _0x44366a, _0x5643d4);
      }
      return _0x53c190(_0x5c9060);
    }
    function _0x3387d8() {
      return _0xbb74bb.matchWebGLToCanvasSize || _0xbb74bb.matchWebGLToCanvasSize === undefined;
    }
    function _0x12003e() {
      return _0x4924c2.length / 1048576;
    }
    function _0x3ac802(_0xe8644d, _0x5b4f81) {
      var _0x59bb63 = _0xbb74bb.SystemInfo.os + " " + _0xbb74bb.SystemInfo.osVersion;
      if (_0xe8644d) {
        _0x4fe443(_0x59bb63, _0xe8644d, _0x5b4f81);
      }
      return _0x53c190(_0x59bb63);
    }
    function _0x21946d() {
      if (_0xbb74bb.matchWebGLToCanvasSize == false) {
        return 1;
      } else {
        return _0xbb74bb.devicePixelRatio || window.devicePixelRatio || 1;
      }
    }
    function _0x4635cd(_0x3621ae, _0x37eba4) {
      _0x537a20[_0x3621ae >> 3] = _0xbb74bb.SystemInfo.width;
      _0x537a20[_0x37eba4 >> 3] = _0xbb74bb.SystemInfo.height;
    }
    function _0x3a6e1c(_0x519168, _0x10eca6) {
      if (_0x519168) {
        _0x4fe443(_0xbb74bb.streamingAssetsUrl, _0x519168, _0x10eca6);
      }
      return _0x53c190(_0xbb74bb.streamingAssetsUrl);
    }
    function _0x21952c() {
      var _0x492904 = _0x4571ce.getExtension("WEBGL_compressed_texture_astc");
      if (_0x492904 && _0x492904.getSupportedProfiles) {
        return _0x492904.getSupportedProfiles().includes("hdr");
      }
      return false;
    }
    function _0x1231f7() {
      return _0xbb74bb.SystemInfo.hasCursorLock;
    }
    function _0x2fe37f() {
      return _0xbb74bb.SystemInfo.hasFullscreen;
    }
    function _0x1e6acf() {
      return _0xbb74bb.SystemInfo.hasWebGL;
    }
    function _0x105ba1() {
      return !!_0xbb74bb.shouldQuit;
    }
    var _0x9d5bd9 = {
      requests: {},
      responses: {},
      abortControllers: {},
      timer: {},
      nextRequestId: 1
    };
    function _0x4bc0de(_0x5ab31a) {
      var _0x175a84 = _0x9d5bd9.abortControllers[_0x5ab31a];
      if (!_0x175a84 || _0x175a84.signal.aborted) {
        return;
      }
      _0x175a84.abort();
    }
    function _0x33ccb4(_0x3d4aab, _0x16c9f2) {
      var _0x2eb53c = _0x468390(_0x3d4aab);
      var _0x3f16a3 = _0x468390(_0x16c9f2);
      var _0x1f9643 = new AbortController();
      var _0x3d5ba3 = {
        url: _0x2eb53c,
        init: {
          method: _0x3f16a3,
          signal: _0x1f9643.signal,
          headers: {},
          enableStreamingDownload: true
        },
        tempBuffer: null,
        tempBufferSize: 0
      };
      _0x9d5bd9.abortControllers[_0x9d5bd9.nextRequestId] = _0x1f9643;
      _0x9d5bd9.requests[_0x9d5bd9.nextRequestId] = _0x3d5ba3;
      return _0x9d5bd9.nextRequestId++;
    }
    function _0x2880f7(_0x22ef72) {
      var _0x5b4413 = _0x9d5bd9.responses[_0x22ef72];
      if (!_0x5b4413) {
        return "";
      }
      if (_0x5b4413.headerString) {
        return _0x5b4413.headerString;
      }
      var _0x5198a1 = "";
      var _0x4fd10f = _0x5b4413.headers.entries();
      for (var _0x51cf7e = _0x4fd10f.next(); !_0x51cf7e.done; _0x51cf7e = _0x4fd10f.next()) {
        _0x5198a1 += _0x51cf7e.value[0] + ": " + _0x51cf7e.value[1] + "\r\n";
      }
      _0x5b4413.headerString = _0x5198a1;
      return _0x5198a1;
    }
    function _0x4a3a2c(_0x396c36, _0xed563f, _0xeef3d5, _0x33c40b, _0x32d701) {
      var _0x93c59c = _0x9d5bd9.responses[_0x396c36];
      if (!_0x93c59c) {
        _0x4fe443("", _0xed563f, _0xeef3d5);
        _0x4fe443("", _0x33c40b, _0x32d701);
        return;
      }
      if (_0xed563f) {
        var _0x31373e = _0x2880f7(_0x396c36);
        _0x4fe443(_0x31373e, _0xed563f, _0xeef3d5);
      }
      if (_0x33c40b) {
        _0x4fe443(_0x93c59c.url, _0x33c40b, _0x32d701);
      }
    }
    function _0x1c2e0e(_0x324c37, _0x5dd91f) {
      var _0x268b16 = _0x9d5bd9.responses[_0x324c37];
      if (!_0x268b16) {
        _0x1cca99[_0x5dd91f >> 2] = 0;
        _0x1cca99[(_0x5dd91f >> 2) + 1] = 0;
        return;
      }
      var _0x13e9d6 = _0x2880f7(_0x324c37);
      _0x1cca99[_0x5dd91f >> 2] = _0x53c190(_0x13e9d6);
      _0x1cca99[(_0x5dd91f >> 2) + 1] = _0x53c190(_0x268b16.url);
    }
    function _0x507d3f(_0x3eb38d) {
      if (_0x9d5bd9.timer[_0x3eb38d]) {
        clearTimeout(_0x9d5bd9.timer[_0x3eb38d]);
      }
      delete _0x9d5bd9.requests[_0x3eb38d];
      delete _0x9d5bd9.responses[_0x3eb38d];
      delete _0x9d5bd9.abortControllers[_0x3eb38d];
      delete _0x9d5bd9.timer[_0x3eb38d];
    }
    function _0x5648c7(_0x4af817, _0x43c2d2, _0xe6929d, _0x84181d, _0x16e124, _0x1fa67f) {
      var _0x2ef000 = _0x9d5bd9.requests[_0x4af817];
      var _0x5b3114 = _0x9d5bd9.abortControllers[_0x4af817];
      function _0x303ed0(_0x3389d4) {
        if (!_0x2ef000.tempBuffer) {
          const _0x23fa0d = Math.max(_0x3389d4, 1024);
          _0x2ef000.tempBuffer = _0x210cd3(_0x23fa0d);
          _0x2ef000.tempBufferSize = _0x23fa0d;
        }
        if (_0x2ef000.tempBufferSize < _0x3389d4) {
          _0x1f42d0(_0x2ef000.tempBuffer);
          _0x2ef000.tempBuffer = _0x210cd3(_0x3389d4);
          _0x2ef000.tempBufferSize = _0x3389d4;
        }
        return _0x2ef000.tempBuffer;
      }
      function _0x5b5f1c() {
        if (_0x9d5bd9.timer[_0x4af817]) {
          clearTimeout(_0x9d5bd9.timer[_0x4af817]);
          delete _0x9d5bd9.timer[_0x4af817];
        }
      }
      function _0x2f954f(_0x4b55e9, _0x26717a) {
        _0x5b5f1c();
        if (!_0x16e124) {
          return;
        }
        var _0x5615de = 0;
        if (_0x2ef000.init.enableStreamingDownload) {
          _0x2fc94d("viiiiii", _0x16e124, [_0x84181d, _0x4b55e9.status, 0, _0x26717a.length, 0, _0x5615de]);
        } else if (_0x26717a.length != 0) {
          var _0x5d5320 = _0x210cd3(_0x26717a.length);
          _0x4924c2.set(_0x26717a, _0x5d5320);
          _0x2fc94d("viiiiii", _0x16e124, [_0x84181d, _0x4b55e9.status, _0x5d5320, _0x26717a.length, 0, _0x5615de]);
        } else {
          _0x2fc94d("viiiiii", _0x16e124, [_0x84181d, _0x4b55e9.status, 0, 0, 0, _0x5615de]);
        }
        if (_0x2ef000.tempBuffer) {
          _0x1f42d0(_0x2ef000.tempBuffer);
        }
      }
      function _0x2dbaac(_0x43d6ce, _0x4a98cc) {
        _0x5b5f1c();
        if (!_0x16e124) {
          return;
        }
        var _0xc564c8 = _0x53c190(_0x43d6ce) + 1;
        var _0xea9942 = _0x210cd3(_0xc564c8);
        _0x4fe443(_0x43d6ce, _0xea9942, _0xc564c8);
        _0x2fc94d("viiiiii", _0x16e124, [_0x84181d, 500, 0, 0, _0xea9942, _0x4a98cc]);
        _0x1f42d0(_0xea9942);
        if (_0x2ef000.tempBuffer) {
          _0x1f42d0(_0x2ef000.tempBuffer);
        }
      }
      function _0x3b5724(_0x31d316) {
        if (!_0x1fa67f || !_0x31d316.lengthComputable) {
          return;
        }
        var _0xa88d38 = _0x31d316.response;
        _0x9d5bd9.responses[_0x4af817] = _0xa88d38;
        if (_0x31d316.chunk) {
          var _0x156fbc = _0x303ed0(_0x31d316.chunk.length);
          _0x4924c2.set(_0x31d316.chunk, _0x156fbc);
          _0x2fc94d("viiiiii", _0x1fa67f, [_0x84181d, _0xa88d38.status, _0x31d316.loaded, _0x31d316.total, _0x156fbc, _0x31d316.chunk.length]);
        } else {
          _0x2fc94d("viiiiii", _0x1fa67f, [_0x84181d, _0xa88d38.status, _0x31d316.loaded, _0x31d316.total, 0, 0]);
        }
      }
      try {
        if (_0xe6929d > 0) {
          var _0x23fbe6 = _0x4924c2.subarray(_0x43c2d2, _0x43c2d2 + _0xe6929d);
          _0x2ef000.init.body = new Blob([_0x23fbe6]);
        }
        if (_0x2ef000.timeout) {
          _0x9d5bd9.timer[_0x4af817] = setTimeout(function () {
            _0x2ef000.isTimedOut = true;
            _0x5b3114.abort();
          }, _0x2ef000.timeout);
        }
        var _0x244fb8 = _0xbb74bb.fetchWithProgress;
        _0x2ef000.init.onProgress = _0x3b5724;
        if (_0xbb74bb.companyName && _0xbb74bb.productName && _0xbb74bb.cachedFetch) {
          _0x244fb8 = _0xbb74bb.cachedFetch;
          _0x2ef000.init.companyName = _0xbb74bb.companyName;
          _0x2ef000.init.productName = _0xbb74bb.productName;
          _0x2ef000.init.productVersion = _0xbb74bb.productVersion;
          _0x2ef000.init.control = _0xbb74bb.cacheControl(_0x2ef000.url);
        }
        _0x244fb8(_0x2ef000.url, _0x2ef000.init).then(function (_0xfdf68a) {
          _0x9d5bd9.responses[_0x4af817] = _0xfdf68a;
          _0x2f954f(_0xfdf68a, _0xfdf68a.parsedBody);
        }).catch(function (_0xceb1ec) {
          var _0x56e53e = 2;
          var _0x59fe1c = 17;
          var _0x52f366 = 14;
          if (_0x2ef000.isTimedOut) {
            _0x2dbaac("Connection timed out.", _0x52f366);
          } else if (_0x5b3114.signal.aborted) {
            _0x2dbaac("Aborted.", _0x59fe1c);
          } else {
            _0x2dbaac(_0xceb1ec.message, _0x56e53e);
          }
        });
      } catch (_0x4081fa) {
        var _0x16279b = 2;
        _0x2dbaac(_0x4081fa.message, _0x16279b);
      }
    }
    function _0x186ac0(_0xa342fa, _0x1aacbd) {
      var _0x54c413 = _0x9d5bd9.requests[_0xa342fa];
      if (!_0x54c413) {
        return;
      }
      _0x54c413.init.redirect = _0x1aacbd === 0 ? "error" : "follow";
    }
    function _0x3f1953(_0x2210d6, _0x2a2e10, _0x3c5fd2) {
      var _0xef0ca2 = _0x9d5bd9.requests[_0x2210d6];
      if (!_0xef0ca2) {
        return;
      }
      var _0x246c2a = _0x468390(_0x2a2e10);
      var _0x33703f = _0x468390(_0x3c5fd2);
      _0xef0ca2.init.headers[_0x246c2a] = _0x33703f;
    }
    function _0x599c9f(_0x3fff8d, _0x53feae) {
      var _0x2b7200 = _0x9d5bd9.requests[_0x3fff8d];
      if (!_0x2b7200) {
        return;
      }
      _0x2b7200.timeout = _0x53feae;
    }
    function _0x29f509(_0x74c606, _0x10e3e9, _0x9fab7e, _0x26de10) {
      var _0x5d835d = _0x468390(_0x74c606);
      var _0x2b8cdb = _0x468390(_0x10e3e9);
      var _0x3dab58 = _0x468390(_0x9fab7e);
      var _0x3a1fb4 = _0x468390(_0x26de10);
      try {
        firebase.database().ref(_0x5d835d).on("child_added", function (_0x4bfc7c) {
          window.unityInstance.SendMessage(_0x2b8cdb, _0x3dab58, JSON.stringify(_0x4bfc7c.val()));
        });
      } catch (_0x1a492f) {
        window.unityInstance.SendMessage(_0x2b8cdb, _0x3a1fb4, JSON.stringify(_0x1a492f, Object.getOwnPropertyNames(_0x1a492f)));
      }
    }
    function _0x4fd1ae(_0x69dc17, _0xf0cc7f, _0x503a82, _0x3deece) {
      var _0x34412e = _0x468390(_0x69dc17);
      var _0x2939eb = _0x468390(_0xf0cc7f);
      var _0x10de27 = _0x468390(_0x503a82);
      var _0xcc4095 = _0x468390(_0x3deece);
      try {
        firebase.database().ref(_0x34412e).on("child_changed", function (_0x359b67) {
          window.unityInstance.SendMessage(_0x2939eb, _0x10de27, JSON.stringify(_0x359b67.val()));
        });
      } catch (_0x352516) {
        window.unityInstance.SendMessage(_0x2939eb, _0xcc4095, JSON.stringify(_0x352516, Object.getOwnPropertyNames(_0x352516)));
      }
    }
    function _0x3333dc(_0x50cd77, _0x29db1f, _0x35add6, _0x185609) {
      var _0x4a5a04 = _0x468390(_0x50cd77);
      var _0x4bc119 = _0x468390(_0x29db1f);
      var _0x1f11ec = _0x468390(_0x35add6);
      var _0x20a58d = _0x468390(_0x185609);
      try {
        firebase.database().ref(_0x4a5a04).on("child_removed", function (_0x482692) {
          window.unityInstance.SendMessage(_0x4bc119, _0x1f11ec, JSON.stringify(_0x482692.val()));
        });
      } catch (_0x343599) {
        window.unityInstance.SendMessage(_0x4bc119, _0x20a58d, JSON.stringify(_0x343599, Object.getOwnPropertyNames(_0x343599)));
      }
    }
    function _0xdccd68(_0x498f68, _0x358667, _0x253029, _0x1fcfdd, _0x18a233) {
      var _0x174e0f = _0x468390(_0x498f68);
      var _0x5b032d = _0x468390(_0x253029);
      var _0x37fad8 = _0x468390(_0x1fcfdd);
      var _0x28e900 = _0x468390(_0x18a233);
      try {
        if (typeof firestorelisteners === "undefined") {
          firestorelisteners = {};
        }
        this.firestorelisteners[_0x174e0f + "/collection/"] = firebase.firestore().collection(_0x174e0f).onSnapshot({
          includeMetadataChanges: _0x358667 == 1
        }, function (_0x9b30a6) {
          var _0x90896b = {};
          _0x9b30a6.forEach(function (_0xdfcd4b) {
            _0x90896b[_0xdfcd4b.id] = _0xdfcd4b.data();
          });
          window.unityInstance.SendMessage(_0x5b032d, _0x37fad8, JSON.stringify(_0x90896b));
        }, function (_0x5a9d71) {
          window.unityInstance.SendMessage(_0x5b032d, _0x28e900, JSON.stringify(_0x5a9d71, Object.getOwnPropertyNames(_0x5a9d71)));
        });
      } catch (_0x28870f) {
        window.unityInstance.SendMessage(_0x5b032d, _0x28e900, JSON.stringify(_0x28870f, Object.getOwnPropertyNames(_0x28870f)));
      }
    }
    function _0x1a2b7d(_0x57f4af, _0x361a98, _0x13a3c8, _0x557a3b, _0x39f9ef, _0x1ec52a) {
      var _0x49be0e = _0x468390(_0x57f4af);
      var _0x5f2d00 = _0x468390(_0x361a98);
      var _0x69a69d = _0x468390(_0x557a3b);
      var _0x8f76cd = _0x468390(_0x39f9ef);
      var _0x1285ae = _0x468390(_0x1ec52a);
      try {
        if (typeof firestorelisteners === "undefined") {
          firestorelisteners = {};
        }
        this.firestorelisteners[_0x49be0e + "/" + _0x5f2d00] = firebase.firestore().collection(_0x49be0e).doc(_0x5f2d00).onSnapshot({
          includeMetadataChanges: _0x13a3c8 == 1
        }, function (_0x39aa98) {
          window.unityInstance.SendMessage(_0x69a69d, _0x8f76cd, JSON.stringify(_0x39aa98.data()));
        }, function (_0x178667) {
          window.unityInstance.SendMessage(_0x69a69d, _0x1285ae, JSON.stringify(_0x178667, Object.getOwnPropertyNames(_0x178667)));
        });
      } catch (_0x108b61) {
        window.unityInstance.SendMessage(_0x69a69d, _0x1285ae, JSON.stringify(_0x108b61, Object.getOwnPropertyNames(_0x108b61)));
      }
    }
    function _0x1dac3f(_0x717a07, _0x5abb68, _0x58a590, _0x458ca1) {
      var _0x1d0765 = _0x468390(_0x717a07);
      var _0x5f4824 = _0x468390(_0x5abb68);
      var _0x57b883 = _0x468390(_0x58a590);
      var _0x254846 = _0x468390(_0x458ca1);
      try {
        firebase.database().ref(_0x1d0765).on("value", function (_0x47e082) {
          window.unityInstance.SendMessage(_0x5f4824, _0x57b883, JSON.stringify(_0x47e082.val()));
        });
      } catch (_0x2f3b5a) {
        window.unityInstance.SendMessage(_0x5f4824, _0x254846, JSON.stringify(_0x2f3b5a, Object.getOwnPropertyNames(_0x2f3b5a)));
      }
    }
    function _0x53b6a0(_0x2fa399) {
      var _0xb5da92 = _0x468390(_0x2fa399);
      firebaseLogEvent(_0xb5da92);
    }
    function _0x171549(_0x14f878, _0xf10fae) {
      var _0x4a6e8f = _0x468390(_0x14f878);
      var _0x5d79fe = JSON.parse(_0x468390(_0xf10fae));
      firebaseLogEventParameter(_0x4a6e8f, _0x5d79fe);
    }
    function _0x432691(_0xf8eae9, _0x1b8e51, _0x565581, _0xed15b3, _0xb3d07c) {
      var _0x4909e7 = _0x468390(_0xf8eae9);
      var _0x3fa385 = _0x468390(_0x565581);
      var _0x3521ba = _0x468390(_0xed15b3);
      var _0x20a5ac = _0x468390(_0xb3d07c);
      try {
        firebase.database().ref(_0x4909e7).transaction(function (_0x4c7427) {
          if (!isNaN(_0x4c7427)) {
            return _0x4c7427 + _0x1b8e51;
          } else {
            return _0x1b8e51;
          }
        }).then(function (_0x36c2e3) {
          window.unityInstance.SendMessage(_0x3fa385, _0x3521ba, "Success: transaction run in " + _0x4909e7);
        });
      } catch (_0x828b7b) {
        window.unityInstance.SendMessage(_0x3fa385, _0x20a5ac, JSON.stringify(_0x828b7b, Object.getOwnPropertyNames(_0x828b7b)));
      }
    }
    function _0x65f333(_0x5c59d5, _0x259093, _0x5b8aae) {
      var _0x5f15ab = _0x468390(_0x5c59d5);
      var _0x3772da = _0x468390(_0x259093);
      var _0x3ce2a2 = _0x468390(_0x5b8aae);
      firebase.auth().onAuthStateChanged(function (_0x24cfd0) {
        if (_0x24cfd0) {
          window.unityInstance.SendMessage(_0x5f15ab, _0x3772da, JSON.stringify(_0x24cfd0));
        } else {
          window.unityInstance.SendMessage(_0x5f15ab, _0x3ce2a2, "User signed out");
        }
      });
    }
    function _0x3df765(_0x266d55) {
      window.wgUnityInstance = _0xbb74bb;
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
        window[preroll.config.loaderObjectName].ping(_0x266d55);
      } catch (_0x431b94) {
        console.log("WGSDK: No production WGSDK resources found, loading development resources.");
        var _0x4a12de = document.createElement("script");
        _0x4a12de.addEventListener("load", function (_0x1e4010) {
          var _0x7d9a8b = document.createElement("script");
          _0x7d9a8b.addEventListener("load", function (_0x200101) {
            console.log("WGSDK: Development resources loaded.");
            _0x442827(_0x266d55, true);
          }.bind(this));
          document.getElementsByTagName("head")[0].appendChild(_0x7d9a8b);
          _0x7d9a8b.src = window.GMSOFT_ADS_INFO.wgLibrary;
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x4a12de);
        _0x4a12de.src = window.GMSOFT_ADS_INFO.wgConf;
      }
    }
    function _0x442827(_0x40b890, _0xfc087) {
      var _0x2928e3;
      if (_0xfc087 === true) {
        _0x2928e3 = _0x40b890;
      } else {
        _0x2928e3 = _0x468390(_0x40b890);
      }
      setTimeout(function () {
        _0x3df765(_0x2928e3);
      }, 250);
    }
    function _0x446688(_0x33a85d, _0x534aa9, _0x37dbf6, _0x2806ee, _0x276b98) {
      var _0x321ade = _0x468390(_0x33a85d);
      var _0x5825bb = _0x468390(_0x534aa9);
      var _0x44766d = _0x468390(_0x37dbf6);
      var _0x563112 = _0x468390(_0x2806ee);
      var _0x17726d = _0x468390(_0x276b98);
      try {
        firebase.database().ref(_0x321ade).set(JSON.parse(_0x5825bb)).then(function (_0x42e5c4) {
          window.unityInstance.SendMessage(_0x44766d, _0x563112, "Success: " + _0x5825bb + " was posted to " + _0x321ade);
        });
      } catch (_0x3cbbfb) {
        window.unityInstance.SendMessage(_0x44766d, _0x17726d, JSON.stringify(_0x3cbbfb, Object.getOwnPropertyNames(_0x3cbbfb)));
      }
    }
    function _0x40004b(_0x6a5be5, _0x18ed64, _0xde2eb8, _0x1ea34d, _0x1581da) {
      var _0x4df9a5 = _0x468390(_0x6a5be5);
      var _0x4ad750 = _0x468390(_0x18ed64);
      var _0x2fc58e = _0x468390(_0xde2eb8);
      var _0x46db8c = _0x468390(_0x1ea34d);
      var _0x5a5a5b = _0x468390(_0x1581da);
      try {
        firebase.database().ref(_0x4df9a5).push().set(JSON.parse(_0x4ad750)).then(function (_0x4e21ff) {
          window.unityInstance.SendMessage(_0x2fc58e, _0x46db8c, "Success: " + _0x4ad750 + " was pushed to " + _0x4df9a5);
        });
      } catch (_0x240cff) {
        window.unityInstance.SendMessage(_0x2fc58e, _0x5a5a5b, JSON.stringify(_0x240cff, Object.getOwnPropertyNames(_0x240cff)));
      }
    }
    function _0x389d2f() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
        window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
      } catch (_0x4260d2) {
        console.log("No WeeGooAFG implementation found!");
      }
    }
    function _0x45646e() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
        window[window.preroll.config.loaderObjectName].registerGameControls(_0xbb74bb);
      } catch (_0x599282) {
        console.log("WGSDK: Can not register game controls.");
        setTimeout(function () {
          _0x45646e();
        }, 250);
      }
    }
    function _0x5a67a1() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
        window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
          onReady: "OnReadyMethod",
          onSuccess: "OnSuccessMethod",
          onFail: "OnFailMethod"
        });
      } catch (_0x2f36d6) {
        console.log("WGSDK: Can not register reward ad callbacks.");
        _0x46ab5a();
      }
    }
    function _0x46ab5a() {
      setTimeout(function () {
        _0x5a67a1();
      }, 250);
    }
    function _0x3c17fb(_0x44d7d9, _0x5eb2e, _0x436f4b, _0x617cd7, _0x4561b4, _0x4e4fcb, _0x18a64d) {
      var _0x3dbf30 = _0x468390(_0x44d7d9);
      var _0x317d17 = _0x468390(_0x5eb2e);
      var _0x3e3351 = _0x468390(_0x436f4b);
      var _0x538751 = _0x468390(_0x617cd7);
      var _0x18b876 = _0x468390(_0x4561b4);
      var _0x3fd98a = _0x468390(_0x4e4fcb);
      var _0x4a43ee = _0x468390(_0x18a64d);
      try {
        var _0x617cd7 = {};
        _0x617cd7[_0x3e3351] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x538751));
        firebase.firestore().collection(_0x3dbf30).doc(_0x317d17).update(_0x617cd7).then(function () {
          window.unityInstance.SendMessage(_0x18b876, _0x3fd98a, "Success: element " + _0x538751 + " was removed in " + _0x3e3351);
        }).catch(function (_0x3ff567) {
          window.unityInstance.SendMessage(_0x18b876, _0x4a43ee, JSON.stringify(_0x3ff567, Object.getOwnPropertyNames(_0x3ff567)));
        });
      } catch (_0x48585f) {
        window.unityInstance.SendMessage(_0x18b876, _0x4a43ee, JSON.stringify(_0x48585f, Object.getOwnPropertyNames(_0x48585f)));
      }
    }
    function _0x5615fa(_0x145dbf) {
      var _0x3df3ca = window.unityStringify(_0x145dbf);
      var _0x532d6d = {
        adStarted: function () {
          window.UnitySDK.unlockPointer();
          _0x565ac4("CrazySDKSingleton", "JSLibCallback_AdStarted");
        },
        adFinished: function () {
          window.UnitySDK.lockPointer();
          _0x565ac4("CrazySDKSingleton", "JSLibCallback_AdFinished");
        },
        adError: function (_0x3f81ac) {
          _0x565ac4("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x3f81ac));
        }
      };
      window.CrazyGames.SDK.ad.requestAd(_0x3df3ca, _0x532d6d).catch(function (_0x178a40) {
        window.UnitySDK.logError("Error while requesting ad:", _0x178a40);
        _0x565ac4("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
          code: "unknown",
          message: _0x178a40.message || "Unknown error"
        }));
      });
    }
    function _0x301354(_0x44a4ea) {
      var _0x83ecf0 = JSON.parse(window.unityStringify(_0x44a4ea));
      try {
        window.CrazyGames.SDK.banner.requestOverlayBanners(_0x83ecf0, function (_0x2405b3, _0x2b6ae6, _0x5951c4) {});
      } catch (_0x4bcbae) {
        window.UnitySDK.logError("Error while requesting banners:", _0x4bcbae);
      }
    }
    function _0x495fd1(_0x4b2929) {
      var _0x329351 = JSON.parse(window.unityStringify(_0x4b2929));
      var _0x22846f = "";
      try {
        _0x22846f = window.CrazyGames.SDK.game.inviteLink(_0x329351);
      } catch (_0x564c24) {
        window.UnitySDK.logError("Error while requesting invite url:", _0x564c24);
      }
      var _0x15d0b9 = _0x53c190(_0x22846f) + 1;
      var _0xc03d = _0x210cd3(_0x15d0b9);
      _0x4fe443(_0x22846f, _0xc03d, _0x15d0b9);
      return _0xc03d;
    }
    function _0x5c0a18(_0x5127ba) {
      _0x5127ba = _0x468390(_0x5127ba);
      window.GD_OPTIONS = {
        debug: false,
        gameId: _0x5127ba,
        onEvent: function (_0x58b481) {
          switch (_0x58b481.name) {
            case "SDK_GAME_START":
              _0x565ac4("GameDistribution", "ResumeGameCallback");
              break;
            case "SDK_GAME_PAUSE":
              _0x565ac4("GameDistribution", "PauseGameCallback");
              break;
            case "SDK_REWARDED_WATCH_COMPLETE":
              _0x565ac4("GameDistribution", "RewardedCompleteCallback");
              break;
            case "SDK_ERROR":
              break;
            default:
              _0x565ac4("GameDistribution", "EventCallback", _0x58b481.name);
          }
        }
      };
      (function (_0x3dc2ab, _0x29ad6d, _0x50f1eb) {
        var _0x19d4d9;
        var _0x4963a6 = _0x3dc2ab.getElementsByTagName(_0x29ad6d)[0];
        if (_0x3dc2ab.getElementById(_0x50f1eb)) {
          return;
        }
        _0x19d4d9 = _0x3dc2ab.createElement(_0x29ad6d);
        _0x19d4d9.id = _0x50f1eb;
        _0x19d4d9.src = "//html5.api.gamedistribution.com/main.min.js";
        _0x4963a6.parentNode.insertBefore(_0x19d4d9, _0x4963a6);
      })(document, "script", "gamedistribution-jssdk");
    }
    function _0x2f6f78() {
      if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
        gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x336e4d) {
          _0x565ac4("GameDistribution", "PreloadRewardedVideoCallback", 1);
        }).catch(function (_0x39dfdf) {
          _0x565ac4("GameDistribution", "PreloadRewardedVideoCallback", 0);
        });
      }
    }
    function _0x18fd32(_0x33fd2d) {
      _0x33fd2d = _0x468390(_0x33fd2d);
      if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x33fd2d !== "undefined") {
        gdsdk.sendEvent(_0x33fd2d).then(function (_0x445a2b) {
          console.log("Game event post message sent Succesfully...");
        }).catch(function (_0x1d0b71) {
          console.log(_0x1d0b71.message);
        });
      }
    }
    function _0x22cb0b(_0x5c5435) {
      if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
        _0x5c5435 = _0x468390(_0x5c5435) || gdsdk.AdType.Interstitial;
        gdsdk.showAd(_0x5c5435).then(function (_0x389152) {
          if (_0x5c5435 === gdsdk.AdType.Rewarded) {
            _0x565ac4("GameDistribution", "RewardedVideoSuccessCallback");
          }
        }).catch(function (_0x2a879d) {
          if (_0x5c5435 === gdsdk.AdType.Rewarded) {
            _0x565ac4("GameDistribution", "RewardedVideoFailureCallback");
          }
        });
      }
    }
    function _0x40fbd4(_0x387a10, _0x31fa41, _0x5913f6, _0x5732d0, _0x5d7675, _0x47f4e8) {
      var _0x153bdf = _0x468390(_0x387a10);
      var _0x22c29c = _0x468390(_0x31fa41);
      var _0x352059 = _0x468390(_0x5913f6);
      var _0x19abcb = _0x468390(_0x5732d0);
      var _0x109ef8 = _0x468390(_0x5d7675);
      var _0x587f41 = _0x468390(_0x47f4e8);
      try {
        firebase.firestore().collection(_0x153bdf).doc(_0x22c29c).set(JSON.parse(_0x352059)).then(function () {
          window.unityInstance.SendMessage(_0x19abcb, _0x109ef8, "Success: document " + _0x22c29c + " was set");
        }).catch(function (_0xafa63d) {
          window.unityInstance.SendMessage(_0x19abcb, _0x587f41, JSON.stringify(_0xafa63d, Object.getOwnPropertyNames(_0xafa63d)));
        });
      } catch (_0x599279) {
        window.unityInstance.SendMessage(_0x19abcb, _0x587f41, JSON.stringify(_0x599279, Object.getOwnPropertyNames(_0x599279)));
      }
    }
    function _0x321f98(_0x43d422) {
      var _0x26e450 = JSON.parse(_0x468390(_0x43d422));
      firebaseSetUserProperties(_0x26e450);
    }
    function _0x28dba1() {
      window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x3f85d5) {
        _0x565ac4("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
          linkAccountResponseStr: JSON.stringify(_0x3f85d5)
        }));
      }).catch(function (_0x34cc68) {
        _0x565ac4("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
          errorJson: JSON.stringify(_0x34cc68)
        }));
      });
    }
    function _0x4c8b44() {
      window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x565735) {
        _0x565ac4("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
          userJson: JSON.stringify(_0x565735)
        }));
      }).catch(function (_0x3d6423) {
        _0x565ac4("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
          errorJson: JSON.stringify(_0x3d6423)
        }));
      });
    }
    function _0x65776b(_0x1e6304) {
      var _0x1a0e71 = JSON.parse(window.unityStringify(_0x1e6304));
      var _0x2c61b0 = "";
      try {
        _0x2c61b0 = window.CrazyGames.SDK.game.showInviteButton(_0x1a0e71);
      } catch (_0x570277) {
        window.UnitySDK.logError("Error while showing invite button:", _0x570277);
      }
      var _0x203e6d = _0x53c190(_0x2c61b0) + 1;
      var _0x2088be = _0x210cd3(_0x203e6d);
      _0x4fe443(_0x2c61b0, _0x2088be, _0x203e6d);
      return _0x2088be;
    }
    function _0x4d6b3e() {
      window[preroll.config.loaderObjectName].showRewardAd();
    }
    function _0x303cf6(_0x1d905, _0x14e1dd, _0x22a180) {
      var _0x42bf7e = _0x468390(_0x1d905);
      var _0x53b6b1 = _0x468390(_0x14e1dd);
      var _0x1946bd = _0x468390(_0x22a180);
      try {
        firebase.auth().signInAnonymously().then(function (_0x92fbf3) {
          window.unityInstance.SendMessage(_0x42bf7e, _0x53b6b1, "Success: signed up for " + _0x92fbf3);
        }).catch(function (_0x645a86) {
          window.unityInstance.SendMessage(_0x42bf7e, _0x1946bd, JSON.stringify(_0x645a86, Object.getOwnPropertyNames(_0x645a86)));
        });
      } catch (_0x4bd3c7) {
        window.unityInstance.SendMessage(_0x42bf7e, _0x1946bd, JSON.stringify(_0x4bd3c7, Object.getOwnPropertyNames(_0x4bd3c7)));
      }
    }
    function _0x474fbc(_0x4bef2b, _0xcc17b1, _0x54fda5, _0x19dc9f, _0x290c3b) {
      var _0x367a0a = _0x468390(_0x4bef2b);
      var _0xa7d65 = _0x468390(_0xcc17b1);
      var _0xde69b0 = _0x468390(_0x54fda5);
      var _0x313c5b = _0x468390(_0x19dc9f);
      var _0x509a98 = _0x468390(_0x290c3b);
      try {
        firebase.auth().signInWithEmailAndPassword(_0x367a0a, _0xa7d65).then(function (_0x520749) {
          window.unityInstance.SendMessage(_0xde69b0, _0x313c5b, "Success: signed in for " + _0x367a0a);
        }).catch(function (_0x397532) {
          window.unityInstance.SendMessage(_0xde69b0, _0x509a98, JSON.stringify(_0x397532, Object.getOwnPropertyNames(_0x397532)));
        });
      } catch (_0x712360) {
        window.unityInstance.SendMessage(_0xde69b0, _0x509a98, JSON.stringify(_0x712360, Object.getOwnPropertyNames(_0x712360)));
      }
    }
    function _0x13503d(_0x326b14, _0x4c79ef, _0x2ac17c) {
      var _0x58a69e = _0x468390(_0x326b14);
      var _0xade20f = _0x468390(_0x4c79ef);
      var _0x233c26 = _0x468390(_0x2ac17c);
      try {
        var _0x349497 = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(_0x349497).then(function (_0x1e8e24) {
          window.unityInstance.SendMessage(_0x58a69e, _0xade20f, "Success: signed in with Facebook!");
        }).catch(function (_0x1ad9e7) {
          window.unityInstance.SendMessage(_0x58a69e, _0x233c26, JSON.stringify(_0x1ad9e7, Object.getOwnPropertyNames(_0x1ad9e7)));
        });
      } catch (_0x446af1) {
        window.unityInstance.SendMessage(_0x58a69e, _0x233c26, JSON.stringify(_0x446af1, Object.getOwnPropertyNames(_0x446af1)));
      }
    }
    function _0x180d71(_0x4483bd, _0x230297, _0x1e67a1) {
      var _0x42d8af = _0x468390(_0x4483bd);
      var _0x23325c = _0x468390(_0x230297);
      var _0x5475f1 = _0x468390(_0x1e67a1);
      try {
        var _0x4d03dd = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(_0x4d03dd).then(function (_0x3716f5) {
          window.unityInstance.SendMessage(_0x42d8af, _0x23325c, "Success: signed in with Google!");
        }).catch(function (_0x1f858b) {
          window.unityInstance.SendMessage(_0x42d8af, _0x5475f1, JSON.stringify(_0x1f858b, Object.getOwnPropertyNames(_0x1f858b)));
        });
      } catch (_0x2282ff) {
        window.unityInstance.SendMessage(_0x42d8af, _0x5475f1, JSON.stringify(_0x2282ff, Object.getOwnPropertyNames(_0x2282ff)));
      }
    }
    function _0xd22c77(_0x6d62f5, _0x3cd435, _0x571ac7, _0x3c0459) {
      var _0x2f3028 = _0x468390(_0x6d62f5);
      var _0x3fa871 = _0x468390(_0x3cd435);
      var _0xf3c45c = _0x468390(_0x571ac7);
      var _0x266510 = _0x468390(_0x3c0459);
      try {
        firebase.database().ref(_0x2f3028).off("child_added");
        window.unityInstance.SendMessage(_0x3fa871, _0xf3c45c, "Success: listener removed");
      } catch (_0x18f9a6) {
        window.unityInstance.SendMessage(_0x3fa871, _0x266510, JSON.stringify(_0x18f9a6, Object.getOwnPropertyNames(_0x18f9a6)));
      }
    }
    function _0x3cceb3(_0x430e00, _0x8eb742, _0x1966f4, _0x370a03) {
      var _0x51ddbe = _0x468390(_0x430e00);
      var _0x541972 = _0x468390(_0x8eb742);
      var _0x11ca97 = _0x468390(_0x1966f4);
      var _0x150abb = _0x468390(_0x370a03);
      try {
        firebase.database().ref(_0x51ddbe).off("child_changed");
        window.unityInstance.SendMessage(_0x541972, _0x11ca97, "Success: listener removed");
      } catch (_0x5e3de4) {
        window.unityInstance.SendMessage(_0x541972, _0x150abb, JSON.stringify(_0x5e3de4, Object.getOwnPropertyNames(_0x5e3de4)));
      }
    }
    function _0x406ff9(_0x4af6c2, _0x123c84, _0x3a2c5e, _0x15671c) {
      var _0x496c11 = _0x468390(_0x4af6c2);
      var _0x363dd3 = _0x468390(_0x123c84);
      var _0x567b55 = _0x468390(_0x3a2c5e);
      var _0x5f458b = _0x468390(_0x15671c);
      try {
        firebase.database().ref(_0x496c11).off("child_removed");
        window.unityInstance.SendMessage(_0x363dd3, _0x567b55, "Success: listener removed");
      } catch (_0x3650ee) {
        window.unityInstance.SendMessage(_0x363dd3, _0x5f458b, JSON.stringify(_0x3650ee, Object.getOwnPropertyNames(_0x3650ee)));
      }
    }
    function _0x4b1e17(_0x12e848, _0x3326e8, _0x3d90b8, _0x144acd) {
      var _0x480b7d = _0x468390(_0x12e848);
      var _0x27ec50 = _0x468390(_0x3326e8);
      var _0x1a2edc = _0x468390(_0x3d90b8);
      var _0x1cf2db = _0x468390(_0x144acd);
      try {
        if (typeof firestorelisteners === "undefined") {
          firestorelisteners = {};
        }
        this.firestorelisteners[_0x480b7d + "/collection/"]();
        window.unityInstance.SendMessage(_0x27ec50, _0x1a2edc, "Success: listener was removed");
      } catch (_0x41300e) {
        window.unityInstance.SendMessage(_0x27ec50, _0x1cf2db, JSON.stringify(_0x41300e, Object.getOwnPropertyNames(_0x41300e)));
      }
    }
    function _0x3fa9bd(_0x49a124, _0x56d570, _0x5e1534, _0x57d4d3, _0x19677a) {
      var _0xdc9045 = _0x468390(_0x49a124);
      var _0xf18105 = _0x468390(_0x56d570);
      var _0x4c31ab = _0x468390(_0x5e1534);
      var _0x2fa62a = _0x468390(_0x57d4d3);
      var _0x1d8ec8 = _0x468390(_0x19677a);
      try {
        if (typeof firestorelisteners === "undefined") {
          firestorelisteners = {};
        }
        this.firestorelisteners[_0xdc9045 + "/" + _0xf18105]();
        window.unityInstance.SendMessage(_0x4c31ab, _0x2fa62a, "Success: listener was removed");
      } catch (_0x447590) {
        window.unityInstance.SendMessage(_0x4c31ab, _0x1d8ec8, JSON.stringify(_0x447590, Object.getOwnPropertyNames(_0x447590)));
      }
    }
    function _0x3e315c(_0x45cf9b, _0x164688, _0x5c74f0, _0x52b5da) {
      var _0xbf8960 = _0x468390(_0x45cf9b);
      var _0x29f781 = _0x468390(_0x164688);
      var _0x4d2ef7 = _0x468390(_0x5c74f0);
      var _0x52d019 = _0x468390(_0x52b5da);
      try {
        firebase.database().ref(_0xbf8960).off("value");
        window.unityInstance.SendMessage(_0x29f781, _0x4d2ef7, "Success: listener removed");
      } catch (_0x4099f8) {
        window.unityInstance.SendMessage(_0x29f781, _0x52d019, JSON.stringify(_0x4099f8, Object.getOwnPropertyNames(_0x4099f8)));
      }
    }
    function _0x553b99() {
      try {
        window.CrazyGames.SDK.data.syncUnityGameData();
      } catch (_0x55ef1e) {
        window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x55ef1e);
      }
    }
    function _0x754446(_0x44c09d, _0x3cb7aa, _0x186178, _0x52bfa5) {
      var _0x4877ce = _0x468390(_0x44c09d);
      var _0x34a640 = _0x468390(_0x3cb7aa);
      var _0x562f49 = _0x468390(_0x186178);
      var _0xb2e6f3 = _0x468390(_0x52bfa5);
      try {
        firebase.database().ref(_0x4877ce).transaction(function (_0x2ac19b) {
          if (typeof _0x2ac19b === "boolean") {
            return !_0x2ac19b;
          } else {
            return true;
          }
        }).then(function (_0x576a29) {
          window.unityInstance.SendMessage(_0x34a640, _0x562f49, "Success: transaction run in " + _0x4877ce);
        });
      } catch (_0x2184d6) {
        window.unityInstance.SendMessage(_0x34a640, _0xb2e6f3, JSON.stringify(_0x2184d6, Object.getOwnPropertyNames(_0x2184d6)));
      }
    }
    function _0x39b799(_0x3a22c0, _0x4c18a6, _0x320924, _0x17cf64, _0x42ecd1, _0x1004e0) {
      var _0x3108c4 = _0x468390(_0x3a22c0);
      var _0x16fa3a = _0x468390(_0x4c18a6);
      var _0x3b3475 = _0x468390(_0x320924);
      var _0x24349a = _0x468390(_0x17cf64);
      var _0x47f425 = _0x468390(_0x42ecd1);
      var _0x5170d5 = _0x468390(_0x1004e0);
      try {
        firebase.firestore().collection(_0x3108c4).doc(_0x16fa3a).update(JSON.parse(_0x3b3475)).then(function () {
          window.unityInstance.SendMessage(_0x24349a, _0x47f425, "Success: document " + _0x16fa3a + " was updated");
        }).catch(function (_0x1fc590) {
          window.unityInstance.SendMessage(_0x24349a, _0x5170d5, JSON.stringify(_0x1fc590, Object.getOwnPropertyNames(_0x1fc590)));
        });
      } catch (_0x14cc46) {
        window.unityInstance.SendMessage(_0x24349a, _0x5170d5, JSON.stringify(_0x14cc46, Object.getOwnPropertyNames(_0x14cc46)));
      }
    }
    function _0xe7e2f4(_0x153e5a, _0x50b088, _0x3ca836, _0x554ba8, _0x499329) {
      var _0x1263f3 = _0x468390(_0x153e5a);
      var _0x309f20 = _0x468390(_0x50b088);
      var _0x2cb5ec = _0x468390(_0x3ca836);
      var _0x4042d5 = _0x468390(_0x554ba8);
      var _0x1e924d = _0x468390(_0x499329);
      try {
        firebase.database().ref(_0x1263f3).update(JSON.parse(_0x309f20)).then(function (_0x45b755) {
          window.unityInstance.SendMessage(_0x2cb5ec, _0x4042d5, "Success: " + _0x309f20 + " was updated in " + _0x1263f3);
        });
      } catch (_0x5e2f49) {
        window.unityInstance.SendMessage(_0x2cb5ec, _0x1e924d, JSON.stringify(_0x5e2f49, Object.getOwnPropertyNames(_0x5e2f49)));
      }
    }
    function _0x21720b(_0x247523, _0xb3cbd0, _0x1a8778, _0x3dbe8b, _0x4e6c3c) {
      var _0x1019ce = _0x468390(_0x247523);
      var _0x3068f5 = _0x468390(_0xb3cbd0);
      var _0x37106f = _0x468390(_0x1a8778);
      var _0x2ce1a4 = _0x468390(_0x3dbe8b);
      var _0x4b1cfe = _0x468390(_0x4e6c3c);
      try {
        firebase.storage().ref(_0x1019ce).put(_0x21c187(_0x3068f5)).then(function (_0x173858) {
          window.unityInstance.SendMessage(_0x37106f, _0x2ce1a4, "Success: data was posted to " + _0x1019ce);
        });
      } catch (_0x1c0070) {
        window.unityInstance.SendMessage(_0x37106f, _0x4b1cfe, JSON.stringify(_0x1c0070, Object.getOwnPropertyNames(_0x1c0070)));
      }
      function _0x21c187(_0x45fff6) {
        var _0x867d3f = window.atob(_0x45fff6);
        var _0x11c16e = _0x867d3f.length;
        var _0x5790d2 = new Uint8Array(_0x11c16e);
        for (var _0x45498d = 0; _0x45498d < _0x11c16e; _0x45498d++) {
          _0x5790d2[_0x45498d] = _0x867d3f.charCodeAt(_0x45498d);
        }
        return _0x5790d2.buffer;
      }
    }
    var _0x5a0546 = {
      requestInstances: {},
      nextRequestId: 1,
      loglevel: 2,
      SendTextToCSharpSide: function (_0x360160, _0x5f5de6, _0x54b0ec) {
        const _0x45c0c5 = new TextEncoder();
        const _0x5002da = _0x45c0c5.encode(_0x54b0ec);
        const _0x244eaa = function (_0x111524, _0x326717) {
          return _0x24ba3a.apply(null, [_0x5a0546.onallocbuffer, _0x111524, _0x326717]);
        }(_0x360160, _0x5002da.length);
        _0x4924c2.set(_0x5002da, _0x244eaa);
        (function (_0x5044ec, _0x42a44e, _0x44fbbb) {
          _0x1a2695.apply(null, [_0x5f5de6, _0x5044ec, _0x42a44e, _0x44fbbb]);
        })(_0x360160, _0x244eaa, _0x5002da.length);
      },
      GetResponseHeaders: function (_0x5b7f37, _0x57f4bd) {
        if (_0x5a0546.loglevel <= 1) {
          console.log("GetResponseHeaders(" + _0x5b7f37 + ")");
        }
        var _0x40ebf4 = "";
        if (document && document.cookie) {
          var _0x550211 = document.cookie.split(";");
          for (var _0x3d54ba = 0; _0x3d54ba < _0x550211.length; ++_0x3d54ba) {
            const _0x2540c4 = _0x550211[_0x3d54ba].trim();
            if (_0x2540c4.length > 0) {
              _0x40ebf4 += "Set-Cookie:" + _0x2540c4 + "\n";
            }
          }
        }
        const _0x33bca4 = _0x5a0546.requestInstances[_0x5b7f37].getAllResponseHeaders().trim().split(/[\r\n]+/);
        _0x33bca4.forEach(_0x47819c => {
          const _0xec75cc = _0x47819c.split(": ");
          const _0x50ed8d = _0xec75cc.shift();
          const _0x2c3982 = _0xec75cc.join(": ");
          if (_0x50ed8d !== "content-length") {
            _0x40ebf4 += _0x50ed8d + ":" + _0x2c3982 + "\n";
          }
        });
        _0x5a0546.SendTextToCSharpSide(_0x5b7f37, _0x57f4bd, _0x40ebf4);
      }
    };
    function _0x5bf9a6(_0x5b3667) {
      if (_0x5a0546.loglevel <= 1) {
        console.log("XHR_Abort(" + _0x5b3667 + ")");
      }
      _0x5a0546.requestInstances[_0x5b3667].abort();
    }
    function _0x4eddc7(_0x4c515c, _0x50c7f2, _0x785de9, _0x5bb358, _0x3ea7df) {
      var _0x21f234 = new URL(_0x468390(_0x50c7f2));
      var _0x5233b6 = _0x468390(_0x4c515c);
      if (_0x5a0546.loglevel <= 1) {
        console.log("XHR_Create (" + _0x5a0546.nextRequestId + ", " + _0x5233b6 + ", " + _0x21f234.toString() + ", " + _0x3ea7df + ")");
      }
      var _0x773d8d = new XMLHttpRequest();
      if (_0x785de9 && _0x5bb358) {
        var _0x26f15c = _0x468390(_0x785de9);
        var _0x388165 = _0x468390(_0x5bb358);
        _0x773d8d.withCredentials = true;
        _0x773d8d.open(_0x5233b6, _0x21f234.toString(), true, _0x26f15c, _0x388165);
      } else {
        _0x773d8d.withCredentials = _0x3ea7df;
        _0x773d8d.open(_0x5233b6, _0x21f234.toString(), true);
      }
      _0x773d8d.responseType = "arraybuffer";
      _0x5a0546.requestInstances[_0x5a0546.nextRequestId] = _0x773d8d;
      return _0x5a0546.nextRequestId++;
    }
    function _0x614b61(_0x43348d) {
      if (_0x5a0546.loglevel <= 1) {
        console.log("XHR_Release(" + _0x43348d + ")");
      }
      delete _0x5a0546.requestInstances[_0x43348d];
    }
    function _0x4ddaa8(_0x4c757f, _0x2c4171, _0x3a2154) {
      if (_0x5a0546.loglevel <= 1) {
        console.log("XHR_Send(" + _0x4c757f + ", " + _0x2c4171 + ", " + _0x3a2154 + ")");
      }
      var _0x28e504 = _0x5a0546.requestInstances[_0x4c757f];
      try {
        if (_0x3a2154 > 0) {
          _0x28e504.send(_0x4924c2.subarray(_0x2c4171, _0x2c4171 + _0x3a2154));
        } else {
          _0x28e504.send();
        }
      } catch (_0x12a335) {
        if (_0x5a0546.loglevel <= 4) {
          console.error("XHR_Send(" + _0x4c757f + "): " + _0x12a335.name + " : " + _0x12a335.message);
        }
      }
    }
    function _0x937081(_0x3692c5) {
      _0x5a0546.loglevel = _0x3692c5;
    }
    function _0x29f70a(_0x551ddf, _0x87feed, _0x1080d8) {
      if (_0x5a0546.loglevel <= 1) {
        console.log("XHR_SetProgressHandler(" + _0x551ddf + ")");
      }
      var _0x358c0e = _0x5a0546.requestInstances[_0x551ddf];
      if (_0x358c0e) {
        if (_0x87feed) {
          _0x358c0e.onprogress = function _0x534895(_0x59c2f8) {
            if (_0x5a0546.loglevel <= 1) {
              console.log("XHR_SetProgressHandler download(" + _0x551ddf + ", " + _0x59c2f8.loaded + ", " + _0x59c2f8.total + ")");
            }
            if (_0x59c2f8.lengthComputable) {
              (function (_0x544c08, _0x59ce54, _0x24c5db) {
                _0x1a2695.apply(null, [_0x87feed, _0x544c08, _0x59ce54, _0x24c5db]);
              })(_0x551ddf, _0x59c2f8.loaded, _0x59c2f8.total);
            }
          };
        }
        if (_0x1080d8) {
          _0x358c0e.upload.addEventListener("progress", function _0x12bd9e(_0x149127) {
            if (_0x5a0546.loglevel <= 1) {
              console.log("XHR_SetProgressHandler upload(" + _0x551ddf + ", " + _0x149127.loaded + ", " + _0x149127.total + ")");
            }
            if (_0x149127.lengthComputable) {
              (function (_0x253dea, _0x370314, _0x274f66) {
                _0x1a2695.apply(null, [_0x1080d8, _0x253dea, _0x370314, _0x274f66]);
              })(_0x551ddf, _0x149127.loaded, _0x149127.total);
            }
          }, true);
        }
      }
    }
    function _0x48d12a(_0x4988a0, _0x3de5a6, _0x27c170) {
      var _0x1888b5 = _0x468390(_0x3de5a6);
      var _0x250afa = _0x468390(_0x27c170);
      if (_0x5a0546.loglevel <= 1) {
        console.log("XHR_SetRequestHeader(" + _0x1888b5 + ", " + _0x250afa + ")");
      }
      if (_0x1888b5 != "Cookie") {
        _0x5a0546.requestInstances[_0x4988a0].setRequestHeader(_0x1888b5, _0x250afa);
      } else {
        var _0x339e89 = _0x250afa.split(";");
        for (var _0x14f076 = 0; _0x14f076 < _0x339e89.length; _0x14f076++) {
          document.cookie = _0x339e89[_0x14f076];
        }
      }
    }
    function _0x3b5e3e(_0x4aa3a2, _0x367900, _0x42a84d, _0x1953ff, _0x39760c, _0x2c54fb, _0x5df2e3) {
      if (_0x5a0546.loglevel <= 1) {
        console.log("XHR_SetResponseHandler(" + _0x4aa3a2 + ")");
      }
      _0x5a0546.onallocbuffer = _0x5df2e3;
      var _0x3e2f33 = _0x5a0546.requestInstances[_0x4aa3a2];
      _0x3e2f33.onreadystatechange = _0x19ca6d => {
        if (_0x5a0546.loglevel <= 1) {
          console.log(_0x4aa3a2 + " onreadystatechange(" + _0x3e2f33.readyState + ")");
        }
        switch (_0x3e2f33.readyState) {
          case XMLHttpRequest.UNSENT:
            break;
          case XMLHttpRequest.OPENED:
            break;
          case XMLHttpRequest.HEADERS_RECEIVED:
            {
              _0x5a0546.SendTextToCSharpSide(_0x4aa3a2, _0x2c54fb, "HTTP/1.1 " + _0x3e2f33.status + " " + _0x3e2f33.statusText + "\n");
              _0x5a0546.GetResponseHeaders(_0x4aa3a2, _0x2c54fb);
              break;
            }
          case XMLHttpRequest.LOADING:
            break;
          case XMLHttpRequest.DONE:
            break;
        }
      };
      _0x3e2f33.onloadstart = _0x238dd0 => {
        if (_0x5a0546.loglevel <= 1) {
          console.log(_0x4aa3a2 + " onloadstart: " + _0x238dd0);
        }
      };
      _0x3e2f33.onload = function _0x35acba(_0x49047d) {
        if (_0x5a0546.loglevel <= 1) {
          console.log(_0x4aa3a2 + " onload(" + _0x3e2f33.status + ", " + _0x3e2f33.statusText + ")");
        }
        if (_0x367900) {
          var _0x52e27e = 0;
          var _0x4d4c07 = 0;
          if (_0x3e2f33.response) {
            var _0x55cdd3 = _0x3e2f33.response;
            _0x52e27e = _0x55cdd3.byteLength;
            _0x5a0546.SendTextToCSharpSide(_0x4aa3a2, _0x2c54fb, "content-length:" + _0x52e27e + "\n\n");
            _0x4d4c07 = function (_0x1a6736, _0x5e2380) {
              return _0x24ba3a.apply(null, [_0x5df2e3, _0x1a6736, _0x5e2380]);
            }(_0x4aa3a2, _0x52e27e);
            var _0xe052c3 = new Uint8Array(_0x55cdd3);
            var _0x9e9861 = _0x4924c2.subarray(_0x4d4c07, _0x4d4c07 + _0x52e27e);
            _0x9e9861.set(_0xe052c3);
          } else {
            _0x5a0546.SendTextToCSharpSide(_0x4aa3a2, _0x2c54fb, "content-length:0\n\n");
          }
          (function (_0x50d656, _0x523148, _0x31305b) {
            _0x1a2695.apply(null, [_0x367900, _0x50d656, _0x523148, _0x31305b]);
          })(_0x4aa3a2, _0x4d4c07, _0x52e27e);
        }
      };
      if (_0x42a84d) {
        _0x3e2f33.onerror = function _0x4b6e22(_0x2f6b2f) {
          function _0x13c9cb(_0x4452fe) {
            var _0x3367ce = _0x53c190(_0x4452fe) + 1;
            var _0x55ead9 = _0x210cd3(_0x3367ce);
            _0x3ea15f(_0x4452fe, _0x4924c2, _0x55ead9, _0x3367ce);
            (function (_0x22d431, _0x380527) {
              _0x1a611a.apply(null, [_0x42a84d, _0x22d431, _0x380527]);
            })(_0x4aa3a2, _0x55ead9);
            _0x1f42d0(_0x55ead9);
          }
          if (_0x2f6b2f.error) {
            _0x13c9cb(_0x2f6b2f.error);
          } else {
            _0x13c9cb("Unknown Error! Maybe a CORS porblem?");
          }
        };
      }
      if (_0x1953ff) {
        _0x3e2f33.ontimeout = function _0x32ef50(_0x3d3358) {
          (function (_0x56f72a) {
            _0x2e598c.apply(null, [_0x1953ff, _0x56f72a]);
          })(_0x4aa3a2);
        };
      }
      if (_0x39760c) {
        _0x3e2f33.onabort = function _0x2b006c(_0x69ed8a) {
          (function (_0x599648) {
            _0x2e598c.apply(null, [_0x39760c, _0x599648]);
          })(_0x4aa3a2);
        };
      }
    }
    function _0x3d0b1a(_0xf95533, _0x1448ae) {
      if (_0x5a0546.loglevel <= 1) {
        console.log("XHR_SetTimeout(" + _0xf95533 + ", " + _0x1448ae + ")");
      }
      _0x5a0546.requestInstances[_0xf95533].timeout = _0x1448ae;
    }
    function _0x2712e7(_0x2383ae) {
      return _0x210cd3(_0x2383ae + 16) + 16;
    }
    function _0x499302(_0x378826) {
      this.excPtr = _0x378826;
      this.ptr = _0x378826 - 16;
      this.set_type = function (_0x2d7e49) {
        _0x2f8726[this.ptr + 4 >> 2] = _0x2d7e49;
      };
      this.get_type = function () {
        return _0x2f8726[this.ptr + 4 >> 2];
      };
      this.set_destructor = function (_0x20b053) {
        _0x2f8726[this.ptr + 8 >> 2] = _0x20b053;
      };
      this.get_destructor = function () {
        return _0x2f8726[this.ptr + 8 >> 2];
      };
      this.set_refcount = function (_0x2353c7) {
        _0x2f8726[this.ptr >> 2] = _0x2353c7;
      };
      this.set_caught = function (_0x1bfb1e) {
        _0x1bfb1e = _0x1bfb1e ? 1 : 0;
        _0x245769[this.ptr + 12 >> 0] = _0x1bfb1e;
      };
      this.get_caught = function () {
        return _0x245769[this.ptr + 12 >> 0] != 0;
      };
      this.set_rethrown = function (_0x4ac139) {
        _0x4ac139 = _0x4ac139 ? 1 : 0;
        _0x245769[this.ptr + 13 >> 0] = _0x4ac139;
      };
      this.get_rethrown = function () {
        return _0x245769[this.ptr + 13 >> 0] != 0;
      };
      this.init = function (_0x5ddb70, _0x55f9e7) {
        this.set_type(_0x5ddb70);
        this.set_destructor(_0x55f9e7);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      };
      this.add_ref = function () {
        var _0x288818 = _0x2f8726[this.ptr >> 2];
        _0x2f8726[this.ptr >> 2] = _0x288818 + 1;
      };
      this.release_ref = function () {
        var _0x14972c = _0x2f8726[this.ptr >> 2];
        _0x2f8726[this.ptr >> 2] = _0x14972c - 1;
        return _0x14972c === 1;
      };
    }
    function _0x55b2e6(_0x3efb6b) {
      this.free = function () {
        _0x1f42d0(this.ptr);
        this.ptr = 0;
      };
      this.set_base_ptr = function (_0xb0d3e0) {
        _0x2f8726[this.ptr >> 2] = _0xb0d3e0;
      };
      this.get_base_ptr = function () {
        return _0x2f8726[this.ptr >> 2];
      };
      this.set_adjusted_ptr = function (_0x2606fe) {
        _0x2f8726[this.ptr + 4 >> 2] = _0x2606fe;
      };
      this.get_adjusted_ptr_addr = function () {
        return this.ptr + 4;
      };
      this.get_adjusted_ptr = function () {
        return _0x2f8726[this.ptr + 4 >> 2];
      };
      this.get_exception_ptr = function () {
        var _0x573e33 = _0x130314(this.get_exception_info().get_type());
        if (_0x573e33) {
          return _0x2f8726[this.get_base_ptr() >> 2];
        }
        var _0x413615 = this.get_adjusted_ptr();
        if (_0x413615 !== 0) {
          return _0x413615;
        }
        return this.get_base_ptr();
      };
      this.get_exception_info = function () {
        return new _0x499302(this.get_base_ptr());
      };
      if (_0x3efb6b === undefined) {
        this.ptr = _0x210cd3(8);
        this.set_adjusted_ptr(0);
      } else {
        this.ptr = _0x3efb6b;
      }
    }
    var _0x162b69 = [];
    function _0x2f47b6(_0x125e1c) {
      _0x125e1c.add_ref();
    }
    var _0x5af929 = 0;
    function _0x3022d5(_0x38d31a) {
      var _0x7b6233 = new _0x55b2e6(_0x38d31a);
      var _0x5ce44f = _0x7b6233.get_exception_info();
      if (!_0x5ce44f.get_caught()) {
        _0x5ce44f.set_caught(true);
        _0x5af929--;
      }
      _0x5ce44f.set_rethrown(false);
      _0x162b69.push(_0x7b6233);
      _0x2f47b6(_0x5ce44f);
      return _0x7b6233.get_exception_ptr();
    }
    var _0x3601ba = 0;
    function _0x2054a0(_0x3e6b75) {
      return _0x1f42d0(new _0x499302(_0x3e6b75).ptr);
    }
    function _0x480f75(_0x162bea) {
      if (_0x162bea.release_ref() && !_0x162bea.get_rethrown()) {
        var _0x3115a0 = _0x162bea.get_destructor();
        if (_0x3115a0) {
          (function (_0x162412) {
            return _0x4d1de7.apply(null, [_0x3115a0, _0x162412]);
          })(_0x162bea.excPtr);
        }
        _0x2054a0(_0x162bea.excPtr);
      }
    }
    function _0x4e52b1() {
      _0x55aa85(0);
      var _0x346ee6 = _0x162b69.pop();
      _0x480f75(_0x346ee6.get_exception_info());
      _0x346ee6.free();
      _0x3601ba = 0;
    }
    function _0x4d1cf0(_0x586cae) {
      var _0x33459c = new _0x55b2e6(_0x586cae);
      var _0x37a37b = _0x33459c.get_base_ptr();
      if (!_0x3601ba) {
        _0x3601ba = _0x37a37b;
      }
      _0x33459c.free();
      throw _0x37a37b;
    }
    function _0x58cd81() {
      var _0x3cffce = _0x3601ba;
      if (!_0x3cffce) {
        _0x32cdc1(0);
        return 0;
      }
      var _0x176632 = new _0x499302(_0x3cffce);
      var _0x2a26c3 = _0x176632.get_type();
      var _0x49f8f0 = new _0x55b2e6();
      _0x49f8f0.set_base_ptr(_0x3cffce);
      _0x49f8f0.set_adjusted_ptr(_0x3cffce);
      if (!_0x2a26c3) {
        _0x32cdc1(0);
        return _0x49f8f0.ptr | 0;
      }
      var _0x9a1837 = Array.prototype.slice.call(arguments);
      for (var _0x2e786c = 0; _0x2e786c < _0x9a1837.length; _0x2e786c++) {
        var _0x3c8cbe = _0x9a1837[_0x2e786c];
        if (_0x3c8cbe === 0 || _0x3c8cbe === _0x2a26c3) {
          break;
        }
        if (_0x121afd(_0x3c8cbe, _0x2a26c3, _0x49f8f0.get_adjusted_ptr_addr())) {
          _0x32cdc1(_0x3c8cbe);
          return _0x49f8f0.ptr | 0;
        }
      }
      _0x32cdc1(_0x2a26c3);
      return _0x49f8f0.ptr | 0;
    }
    function _0x152111() {
      var _0x50024d = _0x3601ba;
      if (!_0x50024d) {
        _0x32cdc1(0);
        return 0;
      }
      var _0x405f0e = new _0x499302(_0x50024d);
      var _0x48cdc8 = _0x405f0e.get_type();
      var _0x5d5be4 = new _0x55b2e6();
      _0x5d5be4.set_base_ptr(_0x50024d);
      _0x5d5be4.set_adjusted_ptr(_0x50024d);
      if (!_0x48cdc8) {
        _0x32cdc1(0);
        return _0x5d5be4.ptr | 0;
      }
      var _0xf4c8a5 = Array.prototype.slice.call(arguments);
      for (var _0x41c27f = 0; _0x41c27f < _0xf4c8a5.length; _0x41c27f++) {
        var _0x4b0fc3 = _0xf4c8a5[_0x41c27f];
        if (_0x4b0fc3 === 0 || _0x4b0fc3 === _0x48cdc8) {
          break;
        }
        if (_0x121afd(_0x4b0fc3, _0x48cdc8, _0x5d5be4.get_adjusted_ptr_addr())) {
          _0x32cdc1(_0x4b0fc3);
          return _0x5d5be4.ptr | 0;
        }
      }
      _0x32cdc1(_0x48cdc8);
      return _0x5d5be4.ptr | 0;
    }
    function _0x48ddca() {
      var _0x10d006 = _0x3601ba;
      if (!_0x10d006) {
        _0x32cdc1(0);
        return 0;
      }
      var _0x5662ee = new _0x499302(_0x10d006);
      var _0x34b579 = _0x5662ee.get_type();
      var _0x12cee2 = new _0x55b2e6();
      _0x12cee2.set_base_ptr(_0x10d006);
      _0x12cee2.set_adjusted_ptr(_0x10d006);
      if (!_0x34b579) {
        _0x32cdc1(0);
        return _0x12cee2.ptr | 0;
      }
      var _0x103177 = Array.prototype.slice.call(arguments);
      for (var _0x4dac5f = 0; _0x4dac5f < _0x103177.length; _0x4dac5f++) {
        var _0x4a0649 = _0x103177[_0x4dac5f];
        if (_0x4a0649 === 0 || _0x4a0649 === _0x34b579) {
          break;
        }
        if (_0x121afd(_0x4a0649, _0x34b579, _0x12cee2.get_adjusted_ptr_addr())) {
          _0x32cdc1(_0x4a0649);
          return _0x12cee2.ptr | 0;
        }
      }
      _0x32cdc1(_0x34b579);
      return _0x12cee2.ptr | 0;
    }
    function _0x14ba6e() {
      var _0x385ed8 = _0x162b69.pop();
      if (!_0x385ed8) {
        _0x4e2c55("no exception to throw");
      }
      var _0x1680c1 = _0x385ed8.get_exception_info();
      var _0x599d0b = _0x385ed8.get_base_ptr();
      if (!_0x1680c1.get_rethrown()) {
        _0x162b69.push(_0x385ed8);
        _0x1680c1.set_rethrown(true);
        _0x1680c1.set_caught(false);
        _0x5af929++;
      } else {
        _0x385ed8.free();
      }
      _0x3601ba = _0x599d0b;
      throw _0x599d0b;
    }
    function _0x3b34f7(_0x5d0742, _0x4a82f3, _0x3cf227) {
      var _0x4225bc = new _0x499302(_0x5d0742);
      _0x4225bc.init(_0x4a82f3, _0x3cf227);
      _0x3601ba = _0x5d0742;
      _0x5af929++;
      throw _0x5d0742;
    }
    var _0x1e591a = {
      splitPath: function (_0x232a48) {
        var _0x582ea2 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return _0x582ea2.exec(_0x232a48).slice(1);
      },
      normalizeArray: function (_0x3e75c5, _0x4295f5) {
        var _0x4a9df7 = 0;
        for (var _0x388555 = _0x3e75c5.length - 1; _0x388555 >= 0; _0x388555--) {
          var _0x3623d3 = _0x3e75c5[_0x388555];
          if (_0x3623d3 === ".") {
            _0x3e75c5.splice(_0x388555, 1);
          } else if (_0x3623d3 === "..") {
            _0x3e75c5.splice(_0x388555, 1);
            _0x4a9df7++;
          } else if (_0x4a9df7) {
            _0x3e75c5.splice(_0x388555, 1);
            _0x4a9df7--;
          }
        }
        if (_0x4295f5) {
          for (; _0x4a9df7; _0x4a9df7--) {
            _0x3e75c5.unshift("..");
          }
        }
        return _0x3e75c5;
      },
      normalize: function (_0x15dd03) {
        var _0x3b6e01 = _0x15dd03.charAt(0) === "/";
        var _0x4c567c = _0x15dd03.substr(-1) === "/";
        _0x15dd03 = _0x1e591a.normalizeArray(_0x15dd03.split("/").filter(function (_0x520055) {
          return !!_0x520055;
        }), !_0x3b6e01).join("/");
        if (!_0x15dd03 && !_0x3b6e01) {
          _0x15dd03 = ".";
        }
        if (_0x15dd03 && _0x4c567c) {
          _0x15dd03 += "/";
        }
        return (_0x3b6e01 ? "/" : "") + _0x15dd03;
      },
      dirname: function (_0x273db5) {
        var _0xd5377d = _0x1e591a.splitPath(_0x273db5);
        var _0x2bb8e5 = _0xd5377d[0];
        var _0x4f2f1a = _0xd5377d[1];
        if (!_0x2bb8e5 && !_0x4f2f1a) {
          return ".";
        }
        _0x4f2f1a &&= _0x4f2f1a.substr(0, _0x4f2f1a.length - 1);
        return _0x2bb8e5 + _0x4f2f1a;
      },
      basename: function (_0x53a344) {
        if (_0x53a344 === "/") {
          return "/";
        }
        _0x53a344 = _0x1e591a.normalize(_0x53a344);
        _0x53a344 = _0x53a344.replace(/\/$/, "");
        var _0x451817 = _0x53a344.lastIndexOf("/");
        if (_0x451817 === -1) {
          return _0x53a344;
        }
        return _0x53a344.substr(_0x451817 + 1);
      },
      extname: function (_0x42e9ca) {
        return _0x1e591a.splitPath(_0x42e9ca)[3];
      },
      join: function () {
        var _0x3a4cfc = Array.prototype.slice.call(arguments, 0);
        return _0x1e591a.normalize(_0x3a4cfc.join("/"));
      },
      join2: function (_0x6090a0, _0x19b2e7) {
        return _0x1e591a.normalize(_0x6090a0 + "/" + _0x19b2e7);
      }
    };
    function _0x50cc41() {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
        var _0x2aefad = new Uint8Array(1);
        return function () {
          crypto.getRandomValues(_0x2aefad);
          return _0x2aefad[0];
        };
      } else if (_0x26b0ad) {
        try {
          var _0x512019 = require("crypto");
          return function () {
            return _0x512019.randomBytes(1)[0];
          };
        } catch (_0x284054) {}
      }
      return function () {
        _0x4e2c55("randomDevice");
      };
    }
    var _0x4d6cef = {
      resolve: function () {
        var _0x239471 = "";
        var _0xbe593d = false;
        for (var _0x222549 = arguments.length - 1; _0x222549 >= -1 && !_0xbe593d; _0x222549--) {
          var _0x2ee18f = _0x222549 >= 0 ? arguments[_0x222549] : _0x32ab7c.cwd();
          if (typeof _0x2ee18f != "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
          } else if (!_0x2ee18f) {
            return "";
          }
          _0x239471 = _0x2ee18f + "/" + _0x239471;
          _0xbe593d = _0x2ee18f.charAt(0) === "/";
        }
        _0x239471 = _0x1e591a.normalizeArray(_0x239471.split("/").filter(function (_0x33a06a) {
          return !!_0x33a06a;
        }), !_0xbe593d).join("/");
        return (_0xbe593d ? "/" : "") + _0x239471 || ".";
      },
      relative: function (_0x560bbb, _0x254a41) {
        _0x560bbb = _0x4d6cef.resolve(_0x560bbb).substr(1);
        _0x254a41 = _0x4d6cef.resolve(_0x254a41).substr(1);
        function _0x564ba3(_0x35bea0) {
          var _0x11931 = 0;
          for (; _0x11931 < _0x35bea0.length; _0x11931++) {
            if (_0x35bea0[_0x11931] !== "") {
              break;
            }
          }
          var _0x52daca = _0x35bea0.length - 1;
          for (; _0x52daca >= 0; _0x52daca--) {
            if (_0x35bea0[_0x52daca] !== "") {
              break;
            }
          }
          if (_0x11931 > _0x52daca) {
            return [];
          }
          return _0x35bea0.slice(_0x11931, _0x52daca - _0x11931 + 1);
        }
        var _0x54d255 = _0x564ba3(_0x560bbb.split("/"));
        var _0x363245 = _0x564ba3(_0x254a41.split("/"));
        var _0x543244 = Math.min(_0x54d255.length, _0x363245.length);
        var _0x334edd = _0x543244;
        for (var _0xff9631 = 0; _0xff9631 < _0x543244; _0xff9631++) {
          if (_0x54d255[_0xff9631] !== _0x363245[_0xff9631]) {
            _0x334edd = _0xff9631;
            break;
          }
        }
        var _0x42f48b = [];
        for (var _0xff9631 = _0x334edd; _0xff9631 < _0x54d255.length; _0xff9631++) {
          _0x42f48b.push("..");
        }
        _0x42f48b = _0x42f48b.concat(_0x363245.slice(_0x334edd));
        return _0x42f48b.join("/");
      }
    };
    var _0xfaba4b = {
      ttys: [],
      init: function () {},
      shutdown: function () {},
      register: function (_0x55e8f5, _0x4085ed) {
        _0xfaba4b.ttys[_0x55e8f5] = {
          input: [],
          output: [],
          ops: _0x4085ed
        };
        _0x32ab7c.registerDevice(_0x55e8f5, _0xfaba4b.stream_ops);
      },
      stream_ops: {
        open: function (_0x2646a3) {
          var _0x55735e = _0xfaba4b.ttys[_0x2646a3.node.rdev];
          if (!_0x55735e) {
            throw new _0x32ab7c.ErrnoError(43);
          }
          _0x2646a3.tty = _0x55735e;
          _0x2646a3.seekable = false;
        },
        close: function (_0x434535) {
          _0x434535.tty.ops.flush(_0x434535.tty);
        },
        flush: function (_0x18efda) {
          _0x18efda.tty.ops.flush(_0x18efda.tty);
        },
        read: function (_0x4c8d48, _0x3d3e9e, _0x41b84f, _0xcafd92, _0x5d64f5) {
          if (!_0x4c8d48.tty || !_0x4c8d48.tty.ops.get_char) {
            throw new _0x32ab7c.ErrnoError(60);
          }
          var _0x57f0df = 0;
          for (var _0x2ce4b6 = 0; _0x2ce4b6 < _0xcafd92; _0x2ce4b6++) {
            var _0x1263e3;
            try {
              _0x1263e3 = _0x4c8d48.tty.ops.get_char(_0x4c8d48.tty);
            } catch (_0x1978bb) {
              throw new _0x32ab7c.ErrnoError(29);
            }
            if (_0x1263e3 === undefined && _0x57f0df === 0) {
              throw new _0x32ab7c.ErrnoError(6);
            }
            if (_0x1263e3 === null || _0x1263e3 === undefined) {
              break;
            }
            _0x57f0df++;
            _0x3d3e9e[_0x41b84f + _0x2ce4b6] = _0x1263e3;
          }
          if (_0x57f0df) {
            _0x4c8d48.node.timestamp = Date.now();
          }
          return _0x57f0df;
        },
        write: function (_0x56331b, _0x5710c2, _0x4cd58b, _0x2aade3, _0xb8320e) {
          if (!_0x56331b.tty || !_0x56331b.tty.ops.put_char) {
            throw new _0x32ab7c.ErrnoError(60);
          }
          try {
            for (var _0x5c5ede = 0; _0x5c5ede < _0x2aade3; _0x5c5ede++) {
              _0x56331b.tty.ops.put_char(_0x56331b.tty, _0x5710c2[_0x4cd58b + _0x5c5ede]);
            }
          } catch (_0x2e9608) {
            throw new _0x32ab7c.ErrnoError(29);
          }
          if (_0x2aade3) {
            _0x56331b.node.timestamp = Date.now();
          }
          return _0x5c5ede;
        }
      },
      default_tty_ops: {
        get_char: function (_0xf18258) {
          if (!_0xf18258.input.length) {
            var _0x23bb28 = null;
            if (_0x26b0ad) {
              var _0x11a05e = 256;
              var _0x53a97d = Buffer.alloc(_0x11a05e);
              var _0x35c4e8 = 0;
              try {
                _0x35c4e8 = _0x332572.readSync(process.stdin.fd, _0x53a97d, 0, _0x11a05e, -1);
              } catch (_0x5d23b7) {
                if (_0x5d23b7.toString().includes("EOF")) {
                  _0x35c4e8 = 0;
                } else {
                  throw _0x5d23b7;
                }
              }
              if (_0x35c4e8 > 0) {
                _0x23bb28 = _0x53a97d.slice(0, _0x35c4e8).toString("utf-8");
              } else {
                _0x23bb28 = null;
              }
            } else if (typeof window != "undefined" && typeof window.prompt == "function") {
              _0x23bb28 = window.prompt("Input: ");
              if (_0x23bb28 !== null) {
                _0x23bb28 += "\n";
              }
            } else if (typeof readline == "function") {
              _0x23bb28 = readline();
              if (_0x23bb28 !== null) {
                _0x23bb28 += "\n";
              }
            }
            if (!_0x23bb28) {
              return null;
            }
            _0xf18258.input = _0x8df336(_0x23bb28, true);
          }
          return _0xf18258.input.shift();
        },
        put_char: function (_0x390ac9, _0x2d5418) {
          if (_0x2d5418 === null || _0x2d5418 === 10) {
            _0x1ae8e6(_0x2aa2a9(_0x390ac9.output, 0));
            _0x390ac9.output = [];
          } else if (_0x2d5418 != 0) {
            _0x390ac9.output.push(_0x2d5418);
          }
        },
        flush: function (_0xf54817) {
          if (_0xf54817.output && _0xf54817.output.length > 0) {
            _0x1ae8e6(_0x2aa2a9(_0xf54817.output, 0));
            _0xf54817.output = [];
          }
        }
      },
      default_tty1_ops: {
        put_char: function (_0x10c992, _0x250c3a) {
          if (_0x250c3a === null || _0x250c3a === 10) {
            _0x1771de(_0x2aa2a9(_0x10c992.output, 0));
            _0x10c992.output = [];
          } else if (_0x250c3a != 0) {
            _0x10c992.output.push(_0x250c3a);
          }
        },
        flush: function (_0x431b29) {
          if (_0x431b29.output && _0x431b29.output.length > 0) {
            _0x1771de(_0x2aa2a9(_0x431b29.output, 0));
            _0x431b29.output = [];
          }
        }
      }
    };
    function _0x490196(_0x2d83ac, _0x4185c6) {
      _0x4924c2.fill(0, _0x2d83ac, _0x2d83ac + _0x4185c6);
    }
    function _0x3916f4(_0x31763b, _0x30fdb9) {
      return Math.ceil(_0x31763b / _0x30fdb9) * _0x30fdb9;
    }
    function _0x296348(_0x3f5268) {
      _0x3f5268 = _0x3916f4(_0x3f5268, 65536);
      var _0x21b6fb = _0x5aaaca(65536, _0x3f5268);
      if (!_0x21b6fb) {
        return 0;
      }
      _0x490196(_0x21b6fb, _0x3f5268);
      return _0x21b6fb;
    }
    var _0x13fbf5 = {
      ops_table: null,
      mount: function (_0x3a3825) {
        return _0x13fbf5.createNode(null, "/", 16895, 0);
      },
      createNode: function (_0x2941b9, _0x89361, _0xf43c98, _0x5837b1) {
        if (_0x32ab7c.isBlkdev(_0xf43c98) || _0x32ab7c.isFIFO(_0xf43c98)) {
          throw new _0x32ab7c.ErrnoError(63);
        }
        if (!_0x13fbf5.ops_table) {
          _0x13fbf5.ops_table = {
            dir: {
              node: {
                getattr: _0x13fbf5.node_ops.getattr,
                setattr: _0x13fbf5.node_ops.setattr,
                lookup: _0x13fbf5.node_ops.lookup,
                mknod: _0x13fbf5.node_ops.mknod,
                rename: _0x13fbf5.node_ops.rename,
                unlink: _0x13fbf5.node_ops.unlink,
                rmdir: _0x13fbf5.node_ops.rmdir,
                readdir: _0x13fbf5.node_ops.readdir,
                symlink: _0x13fbf5.node_ops.symlink
              },
              stream: {
                llseek: _0x13fbf5.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: _0x13fbf5.node_ops.getattr,
                setattr: _0x13fbf5.node_ops.setattr
              },
              stream: {
                llseek: _0x13fbf5.stream_ops.llseek,
                read: _0x13fbf5.stream_ops.read,
                write: _0x13fbf5.stream_ops.write,
                allocate: _0x13fbf5.stream_ops.allocate,
                mmap: _0x13fbf5.stream_ops.mmap,
                msync: _0x13fbf5.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: _0x13fbf5.node_ops.getattr,
                setattr: _0x13fbf5.node_ops.setattr,
                readlink: _0x13fbf5.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: _0x13fbf5.node_ops.getattr,
                setattr: _0x13fbf5.node_ops.setattr
              },
              stream: _0x32ab7c.chrdev_stream_ops
            }
          };
        }
        var _0x1d172d = _0x32ab7c.createNode(_0x2941b9, _0x89361, _0xf43c98, _0x5837b1);
        if (_0x32ab7c.isDir(_0x1d172d.mode)) {
          _0x1d172d.node_ops = _0x13fbf5.ops_table.dir.node;
          _0x1d172d.stream_ops = _0x13fbf5.ops_table.dir.stream;
          _0x1d172d.contents = {};
        } else if (_0x32ab7c.isFile(_0x1d172d.mode)) {
          _0x1d172d.node_ops = _0x13fbf5.ops_table.file.node;
          _0x1d172d.stream_ops = _0x13fbf5.ops_table.file.stream;
          _0x1d172d.usedBytes = 0;
          _0x1d172d.contents = null;
        } else if (_0x32ab7c.isLink(_0x1d172d.mode)) {
          _0x1d172d.node_ops = _0x13fbf5.ops_table.link.node;
          _0x1d172d.stream_ops = _0x13fbf5.ops_table.link.stream;
        } else if (_0x32ab7c.isChrdev(_0x1d172d.mode)) {
          _0x1d172d.node_ops = _0x13fbf5.ops_table.chrdev.node;
          _0x1d172d.stream_ops = _0x13fbf5.ops_table.chrdev.stream;
        }
        _0x1d172d.timestamp = Date.now();
        if (_0x2941b9) {
          _0x2941b9.contents[_0x89361] = _0x1d172d;
          _0x2941b9.timestamp = _0x1d172d.timestamp;
        }
        return _0x1d172d;
      },
      getFileDataAsTypedArray: function (_0x3c7f27) {
        if (!_0x3c7f27.contents) {
          return new Uint8Array(0);
        }
        if (_0x3c7f27.contents.subarray) {
          return _0x3c7f27.contents.subarray(0, _0x3c7f27.usedBytes);
        }
        return new Uint8Array(_0x3c7f27.contents);
      },
      expandFileStorage: function (_0x13cef1, _0x287220) {
        var _0xcb292d = _0x13cef1.contents ? _0x13cef1.contents.length : 0;
        if (_0xcb292d >= _0x287220) {
          return;
        }
        var _0x42ce35 = 1048576;
        _0x287220 = Math.max(_0x287220, _0xcb292d * (_0xcb292d < _0x42ce35 ? 2 : 1.125) >>> 0);
        if (_0xcb292d != 0) {
          _0x287220 = Math.max(_0x287220, 256);
        }
        var _0x1255b8 = _0x13cef1.contents;
        _0x13cef1.contents = new Uint8Array(_0x287220);
        if (_0x13cef1.usedBytes > 0) {
          _0x13cef1.contents.set(_0x1255b8.subarray(0, _0x13cef1.usedBytes), 0);
        }
      },
      resizeFileStorage: function (_0x235a4e, _0x4520f1) {
        if (_0x235a4e.usedBytes == _0x4520f1) {
          return;
        }
        if (_0x4520f1 == 0) {
          _0x235a4e.contents = null;
          _0x235a4e.usedBytes = 0;
        } else {
          var _0x4038da = _0x235a4e.contents;
          _0x235a4e.contents = new Uint8Array(_0x4520f1);
          if (_0x4038da) {
            _0x235a4e.contents.set(_0x4038da.subarray(0, Math.min(_0x4520f1, _0x235a4e.usedBytes)));
          }
          _0x235a4e.usedBytes = _0x4520f1;
        }
      },
      node_ops: {
        getattr: function (_0x5f049b) {
          var _0x1dc9a1 = {};
          _0x1dc9a1.dev = _0x32ab7c.isChrdev(_0x5f049b.mode) ? _0x5f049b.id : 1;
          _0x1dc9a1.ino = _0x5f049b.id;
          _0x1dc9a1.mode = _0x5f049b.mode;
          _0x1dc9a1.nlink = 1;
          _0x1dc9a1.uid = 0;
          _0x1dc9a1.gid = 0;
          _0x1dc9a1.rdev = _0x5f049b.rdev;
          if (_0x32ab7c.isDir(_0x5f049b.mode)) {
            _0x1dc9a1.size = 4096;
          } else if (_0x32ab7c.isFile(_0x5f049b.mode)) {
            _0x1dc9a1.size = _0x5f049b.usedBytes;
          } else if (_0x32ab7c.isLink(_0x5f049b.mode)) {
            _0x1dc9a1.size = _0x5f049b.link.length;
          } else {
            _0x1dc9a1.size = 0;
          }
          _0x1dc9a1.atime = new Date(_0x5f049b.timestamp);
          _0x1dc9a1.mtime = new Date(_0x5f049b.timestamp);
          _0x1dc9a1.ctime = new Date(_0x5f049b.timestamp);
          _0x1dc9a1.blksize = 4096;
          _0x1dc9a1.blocks = Math.ceil(_0x1dc9a1.size / _0x1dc9a1.blksize);
          return _0x1dc9a1;
        },
        setattr: function (_0x3dfb6b, _0x101396) {
          if (_0x101396.mode !== undefined) {
            _0x3dfb6b.mode = _0x101396.mode;
          }
          if (_0x101396.timestamp !== undefined) {
            _0x3dfb6b.timestamp = _0x101396.timestamp;
          }
          if (_0x101396.size !== undefined) {
            _0x13fbf5.resizeFileStorage(_0x3dfb6b, _0x101396.size);
          }
        },
        lookup: function (_0x3fc1cb, _0x3bc726) {
          throw _0x32ab7c.genericErrors[44];
        },
        mknod: function (_0x54b8b9, _0xb80d62, _0x17ef03, _0x27fbe5) {
          return _0x13fbf5.createNode(_0x54b8b9, _0xb80d62, _0x17ef03, _0x27fbe5);
        },
        rename: function (_0xa964ea, _0x4f882b, _0x5758ab) {
          if (_0x32ab7c.isDir(_0xa964ea.mode)) {
            var _0x30a52c;
            try {
              _0x30a52c = _0x32ab7c.lookupNode(_0x4f882b, _0x5758ab);
            } catch (_0x1cc96a) {}
            if (_0x30a52c) {
              for (var _0xb86306 in _0x30a52c.contents) {
                throw new _0x32ab7c.ErrnoError(55);
              }
            }
          }
          delete _0xa964ea.parent.contents[_0xa964ea.name];
          _0xa964ea.parent.timestamp = Date.now();
          _0xa964ea.name = _0x5758ab;
          _0x4f882b.contents[_0x5758ab] = _0xa964ea;
          _0x4f882b.timestamp = _0xa964ea.parent.timestamp;
          _0xa964ea.parent = _0x4f882b;
        },
        unlink: function (_0x5170cc, _0x50f368) {
          delete _0x5170cc.contents[_0x50f368];
          _0x5170cc.timestamp = Date.now();
        },
        rmdir: function (_0x1e1fd5, _0x425b32) {
          var _0x46de60 = _0x32ab7c.lookupNode(_0x1e1fd5, _0x425b32);
          for (var _0x73bf78 in _0x46de60.contents) {
            throw new _0x32ab7c.ErrnoError(55);
          }
          delete _0x1e1fd5.contents[_0x425b32];
          _0x1e1fd5.timestamp = Date.now();
        },
        readdir: function (_0x5a9f47) {
          var _0x4ba4bb = [".", ".."];
          for (var _0x5c674f in _0x5a9f47.contents) {
            if (!_0x5a9f47.contents.hasOwnProperty(_0x5c674f)) {
              continue;
            }
            _0x4ba4bb.push(_0x5c674f);
          }
          return _0x4ba4bb;
        },
        symlink: function (_0x1fe41c, _0x49df01, _0x57da71) {
          var _0x280c01 = _0x13fbf5.createNode(_0x1fe41c, _0x49df01, 41471, 0);
          _0x280c01.link = _0x57da71;
          return _0x280c01;
        },
        readlink: function (_0x137695) {
          if (!_0x32ab7c.isLink(_0x137695.mode)) {
            throw new _0x32ab7c.ErrnoError(28);
          }
          return _0x137695.link;
        }
      },
      stream_ops: {
        read: function (_0x6f270a, _0x5b5b90, _0x5df00e, _0x2bffff, _0xbd04d4) {
          var _0x100c90 = _0x6f270a.node.contents;
          if (_0xbd04d4 >= _0x6f270a.node.usedBytes) {
            return 0;
          }
          var _0x3e6344 = Math.min(_0x6f270a.node.usedBytes - _0xbd04d4, _0x2bffff);
          if (_0x3e6344 > 8 && _0x100c90.subarray) {
            _0x5b5b90.set(_0x100c90.subarray(_0xbd04d4, _0xbd04d4 + _0x3e6344), _0x5df00e);
          } else {
            for (var _0x3a4e6a = 0; _0x3a4e6a < _0x3e6344; _0x3a4e6a++) {
              _0x5b5b90[_0x5df00e + _0x3a4e6a] = _0x100c90[_0xbd04d4 + _0x3a4e6a];
            }
          }
          return _0x3e6344;
        },
        write: function (_0x120f87, _0x1ca46e, _0x15191b, _0x30951a, _0x31a514, _0xccafb8) {
          if (_0x1ca46e.buffer === _0x245769.buffer) {
            _0xccafb8 = false;
          }
          if (!_0x30951a) {
            return 0;
          }
          var _0x4d416f = _0x120f87.node;
          _0x4d416f.timestamp = Date.now();
          if (_0x1ca46e.subarray && (!_0x4d416f.contents || _0x4d416f.contents.subarray)) {
            if (_0xccafb8) {
              _0x4d416f.contents = _0x1ca46e.subarray(_0x15191b, _0x15191b + _0x30951a);
              _0x4d416f.usedBytes = _0x30951a;
              return _0x30951a;
            } else if (_0x4d416f.usedBytes === 0 && _0x31a514 === 0) {
              _0x4d416f.contents = _0x1ca46e.slice(_0x15191b, _0x15191b + _0x30951a);
              _0x4d416f.usedBytes = _0x30951a;
              return _0x30951a;
            } else if (_0x31a514 + _0x30951a <= _0x4d416f.usedBytes) {
              _0x4d416f.contents.set(_0x1ca46e.subarray(_0x15191b, _0x15191b + _0x30951a), _0x31a514);
              return _0x30951a;
            }
          }
          _0x13fbf5.expandFileStorage(_0x4d416f, _0x31a514 + _0x30951a);
          if (_0x4d416f.contents.subarray && _0x1ca46e.subarray) {
            _0x4d416f.contents.set(_0x1ca46e.subarray(_0x15191b, _0x15191b + _0x30951a), _0x31a514);
          } else {
            for (var _0x3ebf13 = 0; _0x3ebf13 < _0x30951a; _0x3ebf13++) {
              _0x4d416f.contents[_0x31a514 + _0x3ebf13] = _0x1ca46e[_0x15191b + _0x3ebf13];
            }
          }
          _0x4d416f.usedBytes = Math.max(_0x4d416f.usedBytes, _0x31a514 + _0x30951a);
          return _0x30951a;
        },
        llseek: function (_0x3f10a5, _0xa340c9, _0x43e4df) {
          var _0x47097d = _0xa340c9;
          if (_0x43e4df === 1) {
            _0x47097d += _0x3f10a5.position;
          } else if (_0x43e4df === 2) {
            if (_0x32ab7c.isFile(_0x3f10a5.node.mode)) {
              _0x47097d += _0x3f10a5.node.usedBytes;
            }
          }
          if (_0x47097d < 0) {
            throw new _0x32ab7c.ErrnoError(28);
          }
          return _0x47097d;
        },
        allocate: function (_0x124368, _0x4d8dea, _0x4c2fdf) {
          _0x13fbf5.expandFileStorage(_0x124368.node, _0x4d8dea + _0x4c2fdf);
          _0x124368.node.usedBytes = Math.max(_0x124368.node.usedBytes, _0x4d8dea + _0x4c2fdf);
        },
        mmap: function (_0x46c513, _0xefb46c, _0x557917, _0x55235f, _0x303c13, _0x65ac07) {
          if (_0xefb46c !== 0) {
            throw new _0x32ab7c.ErrnoError(28);
          }
          if (!_0x32ab7c.isFile(_0x46c513.node.mode)) {
            throw new _0x32ab7c.ErrnoError(43);
          }
          var _0x3cdb06;
          var _0x2b9e98;
          var _0x555321 = _0x46c513.node.contents;
          if (!(_0x65ac07 & 2) && _0x555321.buffer === _0x2b651b) {
            _0x2b9e98 = false;
            _0x3cdb06 = _0x555321.byteOffset;
          } else {
            if (_0x55235f > 0 || _0x55235f + _0x557917 < _0x555321.length) {
              if (_0x555321.subarray) {
                _0x555321 = _0x555321.subarray(_0x55235f, _0x55235f + _0x557917);
              } else {
                _0x555321 = Array.prototype.slice.call(_0x555321, _0x55235f, _0x55235f + _0x557917);
              }
            }
            _0x2b9e98 = true;
            _0x3cdb06 = _0x296348(_0x557917);
            if (!_0x3cdb06) {
              throw new _0x32ab7c.ErrnoError(48);
            }
            _0x245769.set(_0x555321, _0x3cdb06);
          }
          return {
            ptr: _0x3cdb06,
            allocated: _0x2b9e98
          };
        },
        msync: function (_0x2c5fc1, _0x536b6d, _0x2288f4, _0x16ba1f, _0x1b8a87) {
          if (!_0x32ab7c.isFile(_0x2c5fc1.node.mode)) {
            throw new _0x32ab7c.ErrnoError(43);
          }
          if (_0x1b8a87 & 2) {
            return 0;
          }
          var _0x498958 = _0x13fbf5.stream_ops.write(_0x2c5fc1, _0x536b6d, 0, _0x16ba1f, _0x2288f4, false);
          return 0;
        }
      }
    };
    function _0x5ea45b(_0x468519, _0x3832f1, _0x5d3d97, _0x2894a3) {
      var _0x4cb523 = !_0x2894a3 ? _0xfd11be("al " + _0x468519) : "";
      _0x22753a(_0x468519, function (_0x5b1e9c) {
        _0x105928(_0x5b1e9c, "Loading data file \"" + _0x468519 + "\" failed (no arrayBuffer).");
        _0x3832f1(new Uint8Array(_0x5b1e9c));
        if (_0x4cb523) {
          _0x4c5673(_0x4cb523);
        }
      }, function (_0x4aa0dc) {
        if (_0x5d3d97) {
          _0x5d3d97();
        } else {
          throw "Loading data file \"" + _0x468519 + "\" failed.";
        }
      });
      if (_0x4cb523) {
        _0x2d82f5(_0x4cb523);
      }
    }
    var _0x418a4e = {
      dbs: {},
      indexedDB: () => {
        if (typeof indexedDB != "undefined") {
          return indexedDB;
        }
        var _0x34fb24 = null;
        if (typeof window == "object") {
          _0x34fb24 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        }
        _0x105928(_0x34fb24, "IDBFS used, but indexedDB not supported");
        return _0x34fb24;
      },
      DB_VERSION: 21,
      DB_STORE_NAME: "FILE_DATA",
      mount: function (_0x4f0d1e) {
        return _0x13fbf5.mount.apply(null, arguments);
      },
      syncfs: (_0x55a56a, _0x34d5e9, _0x36628a) => {
        _0x418a4e.getLocalSet(_0x55a56a, (_0x2496c1, _0x56bd1c) => {
          if (_0x2496c1) {
            return _0x36628a(_0x2496c1);
          }
          _0x418a4e.getRemoteSet(_0x55a56a, (_0x4d968a, _0x1cbb4a) => {
            if (_0x4d968a) {
              return _0x36628a(_0x4d968a);
            }
            var _0x357bf8 = _0x34d5e9 ? _0x1cbb4a : _0x56bd1c;
            var _0x5e0286 = _0x34d5e9 ? _0x56bd1c : _0x1cbb4a;
            _0x418a4e.reconcile(_0x357bf8, _0x5e0286, _0x36628a);
          });
        });
      },
      getDB: (_0x47a66c, _0x16d76a) => {
        var _0x3c1872 = _0x418a4e.dbs[_0x47a66c];
        if (_0x3c1872) {
          return _0x16d76a(null, _0x3c1872);
        }
        var _0x35f0b4;
        try {
          _0x35f0b4 = _0x418a4e.indexedDB().open(_0x47a66c, _0x418a4e.DB_VERSION);
        } catch (_0x38454b) {
          return _0x16d76a(_0x38454b);
        }
        if (!_0x35f0b4) {
          return _0x16d76a("Unable to connect to IndexedDB");
        }
        _0x35f0b4.onupgradeneeded = _0x51948b => {
          var _0xc93e10 = _0x51948b.target.result;
          var _0x3a25d4 = _0x51948b.target.transaction;
          var _0x2e8f83;
          if (_0xc93e10.objectStoreNames.contains(_0x418a4e.DB_STORE_NAME)) {
            _0x2e8f83 = _0x3a25d4.objectStore(_0x418a4e.DB_STORE_NAME);
          } else {
            _0x2e8f83 = _0xc93e10.createObjectStore(_0x418a4e.DB_STORE_NAME);
          }
          if (!_0x2e8f83.indexNames.contains("timestamp")) {
            _0x2e8f83.createIndex("timestamp", "timestamp", {
              unique: false
            });
          }
        };
        _0x35f0b4.onsuccess = () => {
          _0x3c1872 = _0x35f0b4.result;
          _0x418a4e.dbs[_0x47a66c] = _0x3c1872;
          _0x16d76a(null, _0x3c1872);
        };
        _0x35f0b4.onerror = _0x2db83a => {
          _0x16d76a(this.error);
          _0x2db83a.preventDefault();
        };
      },
      getLocalSet: (_0xf3e663, _0x5b43af) => {
        var _0x1c32c2 = {};
        function _0x13b1d4(_0xa08be1) {
          return _0xa08be1 !== "." && _0xa08be1 !== "..";
        }
        function _0xb4da62(_0x4764b6) {
          return _0x3b1105 => {
            return _0x1e591a.join2(_0x4764b6, _0x3b1105);
          };
        }
        var _0xf0349b = _0x32ab7c.readdir(_0xf3e663.mountpoint).filter(_0x13b1d4).map(_0xb4da62(_0xf3e663.mountpoint));
        while (_0xf0349b.length) {
          var _0x29756d = _0xf0349b.pop();
          var _0x6c6d9e;
          try {
            _0x6c6d9e = _0x32ab7c.stat(_0x29756d);
          } catch (_0x23434a) {
            return _0x5b43af(_0x23434a);
          }
          if (_0x32ab7c.isDir(_0x6c6d9e.mode)) {
            _0xf0349b.push.apply(_0xf0349b, _0x32ab7c.readdir(_0x29756d).filter(_0x13b1d4).map(_0xb4da62(_0x29756d)));
          }
          _0x1c32c2[_0x29756d] = {
            timestamp: _0x6c6d9e.mtime
          };
        }
        return _0x5b43af(null, {
          type: "local",
          entries: _0x1c32c2
        });
      },
      getRemoteSet: (_0x1b9dc4, _0x5548e7) => {
        var _0x53f4b5 = {};
        _0x418a4e.getDB(_0x1b9dc4.mountpoint, (_0x2b8352, _0x43d468) => {
          if (_0x2b8352) {
            return _0x5548e7(_0x2b8352);
          }
          try {
            var _0x2d087e = _0x43d468.transaction([_0x418a4e.DB_STORE_NAME], "readonly");
            _0x2d087e.onerror = _0x3e7c68 => {
              _0x5548e7(this.error);
              _0x3e7c68.preventDefault();
            };
            var _0x4c1a94 = _0x2d087e.objectStore(_0x418a4e.DB_STORE_NAME);
            var _0x4c2f13 = _0x4c1a94.index("timestamp");
            _0x4c2f13.openKeyCursor().onsuccess = _0x2817c8 => {
              var _0x17c0c4 = _0x2817c8.target.result;
              if (!_0x17c0c4) {
                return _0x5548e7(null, {
                  type: "remote",
                  db: _0x43d468,
                  entries: _0x53f4b5
                });
              }
              _0x53f4b5[_0x17c0c4.primaryKey] = {
                timestamp: _0x17c0c4.key
              };
              _0x17c0c4.continue();
            };
          } catch (_0x1d6802) {
            return _0x5548e7(_0x1d6802);
          }
        });
      },
      loadLocalEntry: (_0x3b7341, _0x1dd9cb) => {
        var _0x121f8c;
        var _0x525a0d;
        try {
          var _0x240553 = _0x32ab7c.lookupPath(_0x3b7341);
          _0x525a0d = _0x240553.node;
          _0x121f8c = _0x32ab7c.stat(_0x3b7341);
        } catch (_0x10a54d) {
          return _0x1dd9cb(_0x10a54d);
        }
        if (_0x32ab7c.isDir(_0x121f8c.mode)) {
          return _0x1dd9cb(null, {
            timestamp: _0x121f8c.mtime,
            mode: _0x121f8c.mode
          });
        } else if (_0x32ab7c.isFile(_0x121f8c.mode)) {
          _0x525a0d.contents = _0x13fbf5.getFileDataAsTypedArray(_0x525a0d);
          return _0x1dd9cb(null, {
            timestamp: _0x121f8c.mtime,
            mode: _0x121f8c.mode,
            contents: _0x525a0d.contents
          });
        } else {
          return _0x1dd9cb(new Error("node type not supported"));
        }
      },
      storeLocalEntry: (_0x1e13d8, _0x118a94, _0x352dd5) => {
        try {
          if (_0x32ab7c.isDir(_0x118a94.mode)) {
            _0x32ab7c.mkdirTree(_0x1e13d8, _0x118a94.mode);
          } else if (_0x32ab7c.isFile(_0x118a94.mode)) {
            _0x32ab7c.writeFile(_0x1e13d8, _0x118a94.contents, {
              canOwn: true
            });
          } else {
            return _0x352dd5(new Error("node type not supported"));
          }
          _0x32ab7c.chmod(_0x1e13d8, _0x118a94.mode);
          _0x32ab7c.utime(_0x1e13d8, _0x118a94.timestamp, _0x118a94.timestamp);
        } catch (_0x22f21e) {
          return _0x352dd5(_0x22f21e);
        }
        _0x352dd5(null);
      },
      removeLocalEntry: (_0x107f47, _0x421191) => {
        try {
          var _0x4fa919 = _0x32ab7c.lookupPath(_0x107f47);
          var _0x4a9d5f = _0x32ab7c.stat(_0x107f47);
          if (_0x32ab7c.isDir(_0x4a9d5f.mode)) {
            _0x32ab7c.rmdir(_0x107f47);
          } else if (_0x32ab7c.isFile(_0x4a9d5f.mode)) {
            _0x32ab7c.unlink(_0x107f47);
          }
        } catch (_0x1b0578) {
          return _0x421191(_0x1b0578);
        }
        _0x421191(null);
      },
      loadRemoteEntry: (_0x2c1fc6, _0x34ad33, _0x4e4e8b) => {
        var _0x34d248 = _0x2c1fc6.get(_0x34ad33);
        _0x34d248.onsuccess = _0x35c1f1 => {
          _0x4e4e8b(null, _0x35c1f1.target.result);
        };
        _0x34d248.onerror = _0x3aa02a => {
          _0x4e4e8b(this.error);
          _0x3aa02a.preventDefault();
        };
      },
      storeRemoteEntry: (_0x3910d9, _0x12a29b, _0x10a3af, _0x70a54f) => {
        try {
          var _0x58c8f7 = _0x3910d9.put(_0x10a3af, _0x12a29b);
        } catch (_0x408f6e) {
          _0x70a54f(_0x408f6e);
          return;
        }
        _0x58c8f7.onsuccess = () => {
          _0x70a54f(null);
        };
        _0x58c8f7.onerror = _0x117d13 => {
          _0x70a54f(this.error);
          _0x117d13.preventDefault();
        };
      },
      removeRemoteEntry: (_0x4de769, _0x181389, _0x58131b) => {
        var _0x44dab2 = _0x4de769.delete(_0x181389);
        _0x44dab2.onsuccess = () => {
          _0x58131b(null);
        };
        _0x44dab2.onerror = _0x3ab625 => {
          _0x58131b(this.error);
          _0x3ab625.preventDefault();
        };
      },
      reconcile: (_0x396fd0, _0x526d0b, _0x292343) => {
        var _0x35a59b = 0;
        var _0x138125 = [];
        Object.keys(_0x396fd0.entries).forEach(function (_0x1c2f59) {
          var _0x296429 = _0x396fd0.entries[_0x1c2f59];
          var _0x14ec0d = _0x526d0b.entries[_0x1c2f59];
          if (!_0x14ec0d || _0x296429.timestamp.getTime() != _0x14ec0d.timestamp.getTime()) {
            _0x138125.push(_0x1c2f59);
            _0x35a59b++;
          }
        });
        var _0x5d7ecc = [];
        Object.keys(_0x526d0b.entries).forEach(function (_0x5381b4) {
          if (!_0x396fd0.entries[_0x5381b4]) {
            _0x5d7ecc.push(_0x5381b4);
            _0x35a59b++;
          }
        });
        if (!_0x35a59b) {
          return _0x292343(null);
        }
        var _0x14fa18 = false;
        var _0x5aa2ed = _0x396fd0.type === "remote" ? _0x396fd0.db : _0x526d0b.db;
        var _0xe4b144 = _0x5aa2ed.transaction([_0x418a4e.DB_STORE_NAME], "readwrite");
        var _0x214638 = _0xe4b144.objectStore(_0x418a4e.DB_STORE_NAME);
        function _0x6921ba(_0x5266a7) {
          if (_0x5266a7 && !_0x14fa18) {
            _0x14fa18 = true;
            return _0x292343(_0x5266a7);
          }
        }
        _0xe4b144.onerror = _0x258b51 => {
          _0x6921ba(this.error);
          _0x258b51.preventDefault();
        };
        _0xe4b144.oncomplete = _0x4fc5a6 => {
          if (!_0x14fa18) {
            _0x292343(null);
          }
        };
        _0x138125.sort().forEach(_0x5e1823 => {
          if (_0x526d0b.type === "local") {
            _0x418a4e.loadRemoteEntry(_0x214638, _0x5e1823, (_0x17471c, _0x139a2b) => {
              if (_0x17471c) {
                return _0x6921ba(_0x17471c);
              }
              _0x418a4e.storeLocalEntry(_0x5e1823, _0x139a2b, _0x6921ba);
            });
          } else {
            _0x418a4e.loadLocalEntry(_0x5e1823, (_0x3ba050, _0x2bb4e4) => {
              if (_0x3ba050) {
                return _0x6921ba(_0x3ba050);
              }
              _0x418a4e.storeRemoteEntry(_0x214638, _0x5e1823, _0x2bb4e4, _0x6921ba);
            });
          }
        });
        _0x5d7ecc.sort().reverse().forEach(_0x1530ca => {
          if (_0x526d0b.type === "local") {
            _0x418a4e.removeLocalEntry(_0x1530ca, _0x6921ba);
          } else {
            _0x418a4e.removeRemoteEntry(_0x214638, _0x1530ca, _0x6921ba);
          }
        });
      }
    };
    var _0x32ab7c = {
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
      lookupPath: (_0xc2c7c6, _0x2c2211 = {}) => {
        _0xc2c7c6 = _0x4d6cef.resolve(_0x32ab7c.cwd(), _0xc2c7c6);
        if (!_0xc2c7c6) {
          return {
            path: "",
            node: null
          };
        }
        var _0x16f7ba = {
          follow_mount: true,
          recurse_count: 0
        };
        _0x2c2211 = Object.assign(_0x16f7ba, _0x2c2211);
        if (_0x2c2211.recurse_count > 8) {
          throw new _0x32ab7c.ErrnoError(32);
        }
        var _0x58c9fe = _0x1e591a.normalizeArray(_0xc2c7c6.split("/").filter(_0x137704 => !!_0x137704), false);
        var _0x44c346 = _0x32ab7c.root;
        var _0x47ee13 = "/";
        for (var _0x245c57 = 0; _0x245c57 < _0x58c9fe.length; _0x245c57++) {
          var _0x2ce397 = _0x245c57 === _0x58c9fe.length - 1;
          if (_0x2ce397 && _0x2c2211.parent) {
            break;
          }
          _0x44c346 = _0x32ab7c.lookupNode(_0x44c346, _0x58c9fe[_0x245c57]);
          _0x47ee13 = _0x1e591a.join2(_0x47ee13, _0x58c9fe[_0x245c57]);
          if (_0x32ab7c.isMountpoint(_0x44c346)) {
            if (!_0x2ce397 || _0x2ce397 && _0x2c2211.follow_mount) {
              _0x44c346 = _0x44c346.mounted.root;
            }
          }
          if (!_0x2ce397 || _0x2c2211.follow) {
            var _0x4fe126 = 0;
            while (_0x32ab7c.isLink(_0x44c346.mode)) {
              var _0x290a9e = _0x32ab7c.readlink(_0x47ee13);
              _0x47ee13 = _0x4d6cef.resolve(_0x1e591a.dirname(_0x47ee13), _0x290a9e);
              var _0x5282cd = _0x32ab7c.lookupPath(_0x47ee13, {
                recurse_count: _0x2c2211.recurse_count + 1
              });
              _0x44c346 = _0x5282cd.node;
              if (_0x4fe126++ > 40) {
                throw new _0x32ab7c.ErrnoError(32);
              }
            }
          }
        }
        return {
          path: _0x47ee13,
          node: _0x44c346
        };
      },
      getPath: _0x4f4a3e => {
        var _0xd40fe7;
        while (true) {
          if (_0x32ab7c.isRoot(_0x4f4a3e)) {
            var _0x441973 = _0x4f4a3e.mount.mountpoint;
            if (!_0xd40fe7) {
              return _0x441973;
            }
            if (_0x441973[_0x441973.length - 1] !== "/") {
              return _0x441973 + "/" + _0xd40fe7;
            } else {
              return _0x441973 + _0xd40fe7;
            }
          }
          _0xd40fe7 = _0xd40fe7 ? _0x4f4a3e.name + "/" + _0xd40fe7 : _0x4f4a3e.name;
          _0x4f4a3e = _0x4f4a3e.parent;
        }
      },
      hashName: (_0x4ce6e5, _0xc04eee) => {
        var _0x7acd9 = 0;
        for (var _0x1459de = 0; _0x1459de < _0xc04eee.length; _0x1459de++) {
          _0x7acd9 = (_0x7acd9 << 5) - _0x7acd9 + _0xc04eee.charCodeAt(_0x1459de) | 0;
        }
        return (_0x4ce6e5 + _0x7acd9 >>> 0) % _0x32ab7c.nameTable.length;
      },
      hashAddNode: _0xe3b819 => {
        var _0xb79bff = _0x32ab7c.hashName(_0xe3b819.parent.id, _0xe3b819.name);
        _0xe3b819.name_next = _0x32ab7c.nameTable[_0xb79bff];
        _0x32ab7c.nameTable[_0xb79bff] = _0xe3b819;
      },
      hashRemoveNode: _0x23cdb7 => {
        var _0x3a9f6a = _0x32ab7c.hashName(_0x23cdb7.parent.id, _0x23cdb7.name);
        if (_0x32ab7c.nameTable[_0x3a9f6a] === _0x23cdb7) {
          _0x32ab7c.nameTable[_0x3a9f6a] = _0x23cdb7.name_next;
        } else {
          var _0xe0b8af = _0x32ab7c.nameTable[_0x3a9f6a];
          while (_0xe0b8af) {
            if (_0xe0b8af.name_next === _0x23cdb7) {
              _0xe0b8af.name_next = _0x23cdb7.name_next;
              break;
            }
            _0xe0b8af = _0xe0b8af.name_next;
          }
        }
      },
      lookupNode: (_0xf722c9, _0x58de17) => {
        var _0x445fa1 = _0x32ab7c.mayLookup(_0xf722c9);
        if (_0x445fa1) {
          throw new _0x32ab7c.ErrnoError(_0x445fa1, _0xf722c9);
        }
        var _0xffbe03 = _0x32ab7c.hashName(_0xf722c9.id, _0x58de17);
        for (var _0x4f786b = _0x32ab7c.nameTable[_0xffbe03]; _0x4f786b; _0x4f786b = _0x4f786b.name_next) {
          var _0x54345a = _0x4f786b.name;
          if (_0x4f786b.parent.id === _0xf722c9.id && _0x54345a === _0x58de17) {
            return _0x4f786b;
          }
        }
        return _0x32ab7c.lookup(_0xf722c9, _0x58de17);
      },
      createNode: (_0x477bc7, _0x5477c3, _0x5d2216, _0x5f0bd0) => {
        var _0x3256da = new _0x32ab7c.FSNode(_0x477bc7, _0x5477c3, _0x5d2216, _0x5f0bd0);
        _0x32ab7c.hashAddNode(_0x3256da);
        return _0x3256da;
      },
      destroyNode: _0x4d3f80 => {
        _0x32ab7c.hashRemoveNode(_0x4d3f80);
      },
      isRoot: _0x4725db => {
        return _0x4725db === _0x4725db.parent;
      },
      isMountpoint: _0x2757f4 => {
        return !!_0x2757f4.mounted;
      },
      isFile: _0x2a166f => {
        return (_0x2a166f & 61440) === 32768;
      },
      isDir: _0x4e8ea3 => {
        return (_0x4e8ea3 & 61440) === 16384;
      },
      isLink: _0x591697 => {
        return (_0x591697 & 61440) === 40960;
      },
      isChrdev: _0x539be2 => {
        return (_0x539be2 & 61440) === 8192;
      },
      isBlkdev: _0x3c3362 => {
        return (_0x3c3362 & 61440) === 24576;
      },
      isFIFO: _0x333bdd => {
        return (_0x333bdd & 61440) === 4096;
      },
      isSocket: _0x141e39 => {
        return (_0x141e39 & 49152) === 49152;
      },
      flagModes: {
        r: 0,
        "r+": 2,
        w: 577,
        "w+": 578,
        a: 1089,
        "a+": 1090
      },
      modeStringToFlags: _0x54fca4 => {
        var _0x28cc1e = _0x32ab7c.flagModes[_0x54fca4];
        if (typeof _0x28cc1e == "undefined") {
          throw new Error("Unknown file open mode: " + _0x54fca4);
        }
        return _0x28cc1e;
      },
      flagsToPermissionString: _0x4b9d07 => {
        var _0xe06bf5 = ["r", "w", "rw"][_0x4b9d07 & 3];
        if (_0x4b9d07 & 512) {
          _0xe06bf5 += "w";
        }
        return _0xe06bf5;
      },
      nodePermissions: (_0x24d595, _0x4ab8c3) => {
        if (_0x32ab7c.ignorePermissions) {
          return 0;
        }
        if (_0x4ab8c3.includes("r") && !(_0x24d595.mode & 292)) {
          return 2;
        } else if (_0x4ab8c3.includes("w") && !(_0x24d595.mode & 146)) {
          return 2;
        } else if (_0x4ab8c3.includes("x") && !(_0x24d595.mode & 73)) {
          return 2;
        }
        return 0;
      },
      mayLookup: _0x14d64b => {
        var _0x560cf4 = _0x32ab7c.nodePermissions(_0x14d64b, "x");
        if (_0x560cf4) {
          return _0x560cf4;
        }
        if (!_0x14d64b.node_ops.lookup) {
          return 2;
        }
        return 0;
      },
      mayCreate: (_0x5c5570, _0x23ad52) => {
        try {
          var _0x4ea826 = _0x32ab7c.lookupNode(_0x5c5570, _0x23ad52);
          return 20;
        } catch (_0x922981) {}
        return _0x32ab7c.nodePermissions(_0x5c5570, "wx");
      },
      mayDelete: (_0x415a29, _0x4ce1e9, _0x27cfdf) => {
        var _0x1f6732;
        try {
          _0x1f6732 = _0x32ab7c.lookupNode(_0x415a29, _0x4ce1e9);
        } catch (_0x6f2f21) {
          return _0x6f2f21.errno;
        }
        var _0xc87333 = _0x32ab7c.nodePermissions(_0x415a29, "wx");
        if (_0xc87333) {
          return _0xc87333;
        }
        if (_0x27cfdf) {
          if (!_0x32ab7c.isDir(_0x1f6732.mode)) {
            return 54;
          }
          if (_0x32ab7c.isRoot(_0x1f6732) || _0x32ab7c.getPath(_0x1f6732) === _0x32ab7c.cwd()) {
            return 10;
          }
        } else if (_0x32ab7c.isDir(_0x1f6732.mode)) {
          return 31;
        }
        return 0;
      },
      mayOpen: (_0x24199e, _0x15ce29) => {
        if (!_0x24199e) {
          return 44;
        }
        if (_0x32ab7c.isLink(_0x24199e.mode)) {
          return 32;
        } else if (_0x32ab7c.isDir(_0x24199e.mode)) {
          if (_0x32ab7c.flagsToPermissionString(_0x15ce29) !== "r" || _0x15ce29 & 512) {
            return 31;
          }
        }
        return _0x32ab7c.nodePermissions(_0x24199e, _0x32ab7c.flagsToPermissionString(_0x15ce29));
      },
      MAX_OPEN_FDS: 4096,
      nextfd: (_0x5f21d6 = 0, _0x46e8c4 = _0x32ab7c.MAX_OPEN_FDS) => {
        for (var _0x36d87e = _0x5f21d6; _0x36d87e <= _0x46e8c4; _0x36d87e++) {
          if (!_0x32ab7c.streams[_0x36d87e]) {
            return _0x36d87e;
          }
        }
        throw new _0x32ab7c.ErrnoError(33);
      },
      getStream: _0x12d1fb => _0x32ab7c.streams[_0x12d1fb],
      createStream: (_0x286b27, _0xd6fc50, _0x196fd0) => {
        if (!_0x32ab7c.FSStream) {
          _0x32ab7c.FSStream = function () {};
          _0x32ab7c.FSStream.prototype = {
            object: {
              get: function () {
                return this.node;
              },
              set: function (_0x1eda84) {
                this.node = _0x1eda84;
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
        _0x286b27 = Object.assign(new _0x32ab7c.FSStream(), _0x286b27);
        var _0x4d5398 = _0x32ab7c.nextfd(_0xd6fc50, _0x196fd0);
        _0x286b27.fd = _0x4d5398;
        _0x32ab7c.streams[_0x4d5398] = _0x286b27;
        return _0x286b27;
      },
      closeStream: _0x22d2d7 => {
        _0x32ab7c.streams[_0x22d2d7] = null;
      },
      chrdev_stream_ops: {
        open: _0x166ed7 => {
          var _0x5c974c = _0x32ab7c.getDevice(_0x166ed7.node.rdev);
          _0x166ed7.stream_ops = _0x5c974c.stream_ops;
          if (_0x166ed7.stream_ops.open) {
            _0x166ed7.stream_ops.open(_0x166ed7);
          }
        },
        llseek: () => {
          throw new _0x32ab7c.ErrnoError(70);
        }
      },
      major: _0xa5f062 => _0xa5f062 >> 8,
      minor: _0xd2c219 => _0xd2c219 & 255,
      makedev: (_0x5ec0f2, _0x50b39b) => _0x5ec0f2 << 8 | _0x50b39b,
      registerDevice: (_0x277dcd, _0x54988d) => {
        _0x32ab7c.devices[_0x277dcd] = {
          stream_ops: _0x54988d
        };
      },
      getDevice: _0x1c4139 => _0x32ab7c.devices[_0x1c4139],
      getMounts: _0x4fec5b => {
        var _0x532feb = [];
        var _0x4e37b7 = [_0x4fec5b];
        while (_0x4e37b7.length) {
          var _0x546b7e = _0x4e37b7.pop();
          _0x532feb.push(_0x546b7e);
          _0x4e37b7.push.apply(_0x4e37b7, _0x546b7e.mounts);
        }
        return _0x532feb;
      },
      syncfs: (_0x5d5f87, _0x25f6ee) => {
        if (typeof _0x5d5f87 == "function") {
          _0x25f6ee = _0x5d5f87;
          _0x5d5f87 = false;
        }
        _0x32ab7c.syncFSRequests++;
        if (_0x32ab7c.syncFSRequests > 1) {
          _0x1771de("warning: " + _0x32ab7c.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
        }
        var _0x319486 = _0x32ab7c.getMounts(_0x32ab7c.root.mount);
        var _0xf28ae2 = 0;
        function _0x32fbae(_0x3ae7d2) {
          _0x32ab7c.syncFSRequests--;
          return _0x25f6ee(_0x3ae7d2);
        }
        function _0x3a82e8(_0x4c3321) {
          if (_0x4c3321) {
            if (!_0x3a82e8.errored) {
              _0x3a82e8.errored = true;
              return _0x32fbae(_0x4c3321);
            }
            return;
          }
          if (++_0xf28ae2 >= _0x319486.length) {
            _0x32fbae(null);
          }
        }
        _0x319486.forEach(_0x37dcf4 => {
          if (!_0x37dcf4.type.syncfs) {
            return _0x3a82e8(null);
          }
          _0x37dcf4.type.syncfs(_0x37dcf4, _0x5d5f87, _0x3a82e8);
        });
      },
      mount: (_0x3b854e, _0x9e7f7e, _0x1738c1) => {
        var _0x53947b = _0x1738c1 === "/";
        var _0x187658 = !_0x1738c1;
        var _0x1b90c2;
        if (_0x53947b && _0x32ab7c.root) {
          throw new _0x32ab7c.ErrnoError(10);
        } else if (!_0x53947b && !_0x187658) {
          var _0x36423b = _0x32ab7c.lookupPath(_0x1738c1, {
            follow_mount: false
          });
          _0x1738c1 = _0x36423b.path;
          _0x1b90c2 = _0x36423b.node;
          if (_0x32ab7c.isMountpoint(_0x1b90c2)) {
            throw new _0x32ab7c.ErrnoError(10);
          }
          if (!_0x32ab7c.isDir(_0x1b90c2.mode)) {
            throw new _0x32ab7c.ErrnoError(54);
          }
        }
        var _0x4ee406 = {
          type: _0x3b854e,
          opts: _0x9e7f7e,
          mountpoint: _0x1738c1,
          mounts: []
        };
        var _0x7aae94 = _0x3b854e.mount(_0x4ee406);
        _0x7aae94.mount = _0x4ee406;
        _0x4ee406.root = _0x7aae94;
        if (_0x53947b) {
          _0x32ab7c.root = _0x7aae94;
        } else if (_0x1b90c2) {
          _0x1b90c2.mounted = _0x4ee406;
          if (_0x1b90c2.mount) {
            _0x1b90c2.mount.mounts.push(_0x4ee406);
          }
        }
        return _0x7aae94;
      },
      unmount: _0x4d40d4 => {
        var _0x5f4dcf = _0x32ab7c.lookupPath(_0x4d40d4, {
          follow_mount: false
        });
        if (!_0x32ab7c.isMountpoint(_0x5f4dcf.node)) {
          throw new _0x32ab7c.ErrnoError(28);
        }
        var _0x4a2ca3 = _0x5f4dcf.node;
        var _0x55ac3a = _0x4a2ca3.mounted;
        var _0x34d2d9 = _0x32ab7c.getMounts(_0x55ac3a);
        Object.keys(_0x32ab7c.nameTable).forEach(_0x2248f8 => {
          var _0x4571c9 = _0x32ab7c.nameTable[_0x2248f8];
          while (_0x4571c9) {
            var _0x4f5cf0 = _0x4571c9.name_next;
            if (_0x34d2d9.includes(_0x4571c9.mount)) {
              _0x32ab7c.destroyNode(_0x4571c9);
            }
            _0x4571c9 = _0x4f5cf0;
          }
        });
        _0x4a2ca3.mounted = null;
        var _0x24c11f = _0x4a2ca3.mount.mounts.indexOf(_0x55ac3a);
        _0x4a2ca3.mount.mounts.splice(_0x24c11f, 1);
      },
      lookup: (_0x11c636, _0x27a42d) => {
        return _0x11c636.node_ops.lookup(_0x11c636, _0x27a42d);
      },
      mknod: (_0x15cba4, _0x1a20ef, _0x47de54) => {
        var _0x869b0a = _0x32ab7c.lookupPath(_0x15cba4, {
          parent: true
        });
        var _0x33de1c = _0x869b0a.node;
        var _0x264fa1 = _0x1e591a.basename(_0x15cba4);
        if (!_0x264fa1 || _0x264fa1 === "." || _0x264fa1 === "..") {
          throw new _0x32ab7c.ErrnoError(28);
        }
        var _0x366077 = _0x32ab7c.mayCreate(_0x33de1c, _0x264fa1);
        if (_0x366077) {
          throw new _0x32ab7c.ErrnoError(_0x366077);
        }
        if (!_0x33de1c.node_ops.mknod) {
          throw new _0x32ab7c.ErrnoError(63);
        }
        return _0x33de1c.node_ops.mknod(_0x33de1c, _0x264fa1, _0x1a20ef, _0x47de54);
      },
      create: (_0x151eb7, _0x41aa71) => {
        _0x41aa71 = _0x41aa71 !== undefined ? _0x41aa71 : 438;
        _0x41aa71 &= 4095;
        _0x41aa71 |= 32768;
        return _0x32ab7c.mknod(_0x151eb7, _0x41aa71, 0);
      },
      mkdir: (_0x1b4ccd, _0x55f30f) => {
        _0x55f30f = _0x55f30f !== undefined ? _0x55f30f : 511;
        _0x55f30f &= 1023;
        _0x55f30f |= 16384;
        return _0x32ab7c.mknod(_0x1b4ccd, _0x55f30f, 0);
      },
      mkdirTree: (_0x1a56ec, _0x1f8361) => {
        var _0x4b95e6 = _0x1a56ec.split("/");
        var _0x2db0ad = "";
        for (var _0x2e5903 = 0; _0x2e5903 < _0x4b95e6.length; ++_0x2e5903) {
          if (!_0x4b95e6[_0x2e5903]) {
            continue;
          }
          _0x2db0ad += "/" + _0x4b95e6[_0x2e5903];
          try {
            _0x32ab7c.mkdir(_0x2db0ad, _0x1f8361);
          } catch (_0x21695c) {
            if (_0x21695c.errno != 20) {
              throw _0x21695c;
            }
          }
        }
      },
      mkdev: (_0x10937a, _0x487e05, _0x2ac9de) => {
        if (typeof _0x2ac9de == "undefined") {
          _0x2ac9de = _0x487e05;
          _0x487e05 = 438;
        }
        _0x487e05 |= 8192;
        return _0x32ab7c.mknod(_0x10937a, _0x487e05, _0x2ac9de);
      },
      symlink: (_0x28ce03, _0x259b7b) => {
        if (!_0x4d6cef.resolve(_0x28ce03)) {
          throw new _0x32ab7c.ErrnoError(44);
        }
        var _0x2a6e5c = _0x32ab7c.lookupPath(_0x259b7b, {
          parent: true
        });
        var _0x3b9478 = _0x2a6e5c.node;
        if (!_0x3b9478) {
          throw new _0x32ab7c.ErrnoError(44);
        }
        var _0x444466 = _0x1e591a.basename(_0x259b7b);
        var _0x2cfda3 = _0x32ab7c.mayCreate(_0x3b9478, _0x444466);
        if (_0x2cfda3) {
          throw new _0x32ab7c.ErrnoError(_0x2cfda3);
        }
        if (!_0x3b9478.node_ops.symlink) {
          throw new _0x32ab7c.ErrnoError(63);
        }
        return _0x3b9478.node_ops.symlink(_0x3b9478, _0x444466, _0x28ce03);
      },
      rename: (_0x1a862a, _0x502973) => {
        var _0x37c491 = _0x1e591a.dirname(_0x1a862a);
        var _0x1f03f7 = _0x1e591a.dirname(_0x502973);
        var _0xa0f09b = _0x1e591a.basename(_0x1a862a);
        var _0x995bde = _0x1e591a.basename(_0x502973);
        var _0x4a46c4;
        var _0x468eeb;
        var _0x1c60ee;
        _0x4a46c4 = _0x32ab7c.lookupPath(_0x1a862a, {
          parent: true
        });
        _0x468eeb = _0x4a46c4.node;
        _0x4a46c4 = _0x32ab7c.lookupPath(_0x502973, {
          parent: true
        });
        _0x1c60ee = _0x4a46c4.node;
        if (!_0x468eeb || !_0x1c60ee) {
          throw new _0x32ab7c.ErrnoError(44);
        }
        if (_0x468eeb.mount !== _0x1c60ee.mount) {
          throw new _0x32ab7c.ErrnoError(75);
        }
        var _0x5306db = _0x32ab7c.lookupNode(_0x468eeb, _0xa0f09b);
        var _0x3d106c = _0x4d6cef.relative(_0x1a862a, _0x1f03f7);
        if (_0x3d106c.charAt(0) !== ".") {
          throw new _0x32ab7c.ErrnoError(28);
        }
        _0x3d106c = _0x4d6cef.relative(_0x502973, _0x37c491);
        if (_0x3d106c.charAt(0) !== ".") {
          throw new _0x32ab7c.ErrnoError(55);
        }
        var _0x5bb55f;
        try {
          _0x5bb55f = _0x32ab7c.lookupNode(_0x1c60ee, _0x995bde);
        } catch (_0x4175d6) {}
        if (_0x5306db === _0x5bb55f) {
          return;
        }
        var _0x3f7544 = _0x32ab7c.isDir(_0x5306db.mode);
        var _0x48c1db = _0x32ab7c.mayDelete(_0x468eeb, _0xa0f09b, _0x3f7544);
        if (_0x48c1db) {
          throw new _0x32ab7c.ErrnoError(_0x48c1db);
        }
        _0x48c1db = _0x5bb55f ? _0x32ab7c.mayDelete(_0x1c60ee, _0x995bde, _0x3f7544) : _0x32ab7c.mayCreate(_0x1c60ee, _0x995bde);
        if (_0x48c1db) {
          throw new _0x32ab7c.ErrnoError(_0x48c1db);
        }
        if (!_0x468eeb.node_ops.rename) {
          throw new _0x32ab7c.ErrnoError(63);
        }
        if (_0x32ab7c.isMountpoint(_0x5306db) || _0x5bb55f && _0x32ab7c.isMountpoint(_0x5bb55f)) {
          throw new _0x32ab7c.ErrnoError(10);
        }
        if (_0x1c60ee !== _0x468eeb) {
          _0x48c1db = _0x32ab7c.nodePermissions(_0x468eeb, "w");
          if (_0x48c1db) {
            throw new _0x32ab7c.ErrnoError(_0x48c1db);
          }
        }
        _0x32ab7c.hashRemoveNode(_0x5306db);
        try {
          _0x468eeb.node_ops.rename(_0x5306db, _0x1c60ee, _0x995bde);
        } catch (_0x228278) {
          throw _0x228278;
        } finally {
          _0x32ab7c.hashAddNode(_0x5306db);
        }
      },
      rmdir: _0x136cee => {
        var _0x2fed55 = _0x32ab7c.lookupPath(_0x136cee, {
          parent: true
        });
        var _0x3287f7 = _0x2fed55.node;
        var _0x46da70 = _0x1e591a.basename(_0x136cee);
        var _0x5d2411 = _0x32ab7c.lookupNode(_0x3287f7, _0x46da70);
        var _0x517d27 = _0x32ab7c.mayDelete(_0x3287f7, _0x46da70, true);
        if (_0x517d27) {
          throw new _0x32ab7c.ErrnoError(_0x517d27);
        }
        if (!_0x3287f7.node_ops.rmdir) {
          throw new _0x32ab7c.ErrnoError(63);
        }
        if (_0x32ab7c.isMountpoint(_0x5d2411)) {
          throw new _0x32ab7c.ErrnoError(10);
        }
        _0x3287f7.node_ops.rmdir(_0x3287f7, _0x46da70);
        _0x32ab7c.destroyNode(_0x5d2411);
      },
      readdir: _0x37b882 => {
        var _0x2cb698 = _0x32ab7c.lookupPath(_0x37b882, {
          follow: true
        });
        var _0x455ab6 = _0x2cb698.node;
        if (!_0x455ab6.node_ops.readdir) {
          throw new _0x32ab7c.ErrnoError(54);
        }
        return _0x455ab6.node_ops.readdir(_0x455ab6);
      },
      unlink: _0x4e7421 => {
        var _0x4cbcda = _0x32ab7c.lookupPath(_0x4e7421, {
          parent: true
        });
        var _0x594006 = _0x4cbcda.node;
        if (!_0x594006) {
          throw new _0x32ab7c.ErrnoError(44);
        }
        var _0x94f7c2 = _0x1e591a.basename(_0x4e7421);
        var _0x22e869 = _0x32ab7c.lookupNode(_0x594006, _0x94f7c2);
        var _0x2c6f7b = _0x32ab7c.mayDelete(_0x594006, _0x94f7c2, false);
        if (_0x2c6f7b) {
          throw new _0x32ab7c.ErrnoError(_0x2c6f7b);
        }
        if (!_0x594006.node_ops.unlink) {
          throw new _0x32ab7c.ErrnoError(63);
        }
        if (_0x32ab7c.isMountpoint(_0x22e869)) {
          throw new _0x32ab7c.ErrnoError(10);
        }
        _0x594006.node_ops.unlink(_0x594006, _0x94f7c2);
        _0x32ab7c.destroyNode(_0x22e869);
      },
      readlink: _0x429fa9 => {
        var _0x2507a4 = _0x32ab7c.lookupPath(_0x429fa9);
        var _0x48ef51 = _0x2507a4.node;
        if (!_0x48ef51) {
          throw new _0x32ab7c.ErrnoError(44);
        }
        if (!_0x48ef51.node_ops.readlink) {
          throw new _0x32ab7c.ErrnoError(28);
        }
        return _0x4d6cef.resolve(_0x32ab7c.getPath(_0x48ef51.parent), _0x48ef51.node_ops.readlink(_0x48ef51));
      },
      stat: (_0x172608, _0x4a5aa6) => {
        var _0x2d9286 = _0x32ab7c.lookupPath(_0x172608, {
          follow: !_0x4a5aa6
        });
        var _0x50a443 = _0x2d9286.node;
        if (!_0x50a443) {
          throw new _0x32ab7c.ErrnoError(44);
        }
        if (!_0x50a443.node_ops.getattr) {
          throw new _0x32ab7c.ErrnoError(63);
        }
        return _0x50a443.node_ops.getattr(_0x50a443);
      },
      lstat: _0x4af5d7 => {
        return _0x32ab7c.stat(_0x4af5d7, true);
      },
      chmod: (_0x149a8d, _0x5748c7, _0x4d7341) => {
        var _0x39b1ed;
        if (typeof _0x149a8d == "string") {
          var _0xf3e74c = _0x32ab7c.lookupPath(_0x149a8d, {
            follow: !_0x4d7341
          });
          _0x39b1ed = _0xf3e74c.node;
        } else {
          _0x39b1ed = _0x149a8d;
        }
        if (!_0x39b1ed.node_ops.setattr) {
          throw new _0x32ab7c.ErrnoError(63);
        }
        _0x39b1ed.node_ops.setattr(_0x39b1ed, {
          mode: _0x5748c7 & 4095 | _0x39b1ed.mode & ~4095,
          timestamp: Date.now()
        });
      },
      lchmod: (_0x3ea2dc, _0xdbddaa) => {
        _0x32ab7c.chmod(_0x3ea2dc, _0xdbddaa, true);
      },
      fchmod: (_0x45460a, _0x3c1f0a) => {
        var _0x202f6b = _0x32ab7c.getStream(_0x45460a);
        if (!_0x202f6b) {
          throw new _0x32ab7c.ErrnoError(8);
        }
        _0x32ab7c.chmod(_0x202f6b.node, _0x3c1f0a);
      },
      chown: (_0x48303e, _0xa684e6, _0x1fce22, _0x55e6ad) => {
        var _0x1a8ec2;
        if (typeof _0x48303e == "string") {
          var _0x261040 = _0x32ab7c.lookupPath(_0x48303e, {
            follow: !_0x55e6ad
          });
          _0x1a8ec2 = _0x261040.node;
        } else {
          _0x1a8ec2 = _0x48303e;
        }
        if (!_0x1a8ec2.node_ops.setattr) {
          throw new _0x32ab7c.ErrnoError(63);
        }
        _0x1a8ec2.node_ops.setattr(_0x1a8ec2, {
          timestamp: Date.now()
        });
      },
      lchown: (_0xff6b03, _0x2c0c51, _0x57ca2e) => {
        _0x32ab7c.chown(_0xff6b03, _0x2c0c51, _0x57ca2e, true);
      },
      fchown: (_0xed4aa2, _0x270667, _0x405ffa) => {
        var _0xa32567 = _0x32ab7c.getStream(_0xed4aa2);
        if (!_0xa32567) {
          throw new _0x32ab7c.ErrnoError(8);
        }
        _0x32ab7c.chown(_0xa32567.node, _0x270667, _0x405ffa);
      },
      truncate: (_0x193a49, _0x4ebe20) => {
        if (_0x4ebe20 < 0) {
          throw new _0x32ab7c.ErrnoError(28);
        }
        var _0x89886e;
        if (typeof _0x193a49 == "string") {
          var _0x42b4ff = _0x32ab7c.lookupPath(_0x193a49, {
            follow: true
          });
          _0x89886e = _0x42b4ff.node;
        } else {
          _0x89886e = _0x193a49;
        }
        if (!_0x89886e.node_ops.setattr) {
          throw new _0x32ab7c.ErrnoError(63);
        }
        if (_0x32ab7c.isDir(_0x89886e.mode)) {
          throw new _0x32ab7c.ErrnoError(31);
        }
        if (!_0x32ab7c.isFile(_0x89886e.mode)) {
          throw new _0x32ab7c.ErrnoError(28);
        }
        var _0x2af9e6 = _0x32ab7c.nodePermissions(_0x89886e, "w");
        if (_0x2af9e6) {
          throw new _0x32ab7c.ErrnoError(_0x2af9e6);
        }
        _0x89886e.node_ops.setattr(_0x89886e, {
          size: _0x4ebe20,
          timestamp: Date.now()
        });
      },
      ftruncate: (_0x573ec2, _0x3ff0b6) => {
        var _0x2721a1 = _0x32ab7c.getStream(_0x573ec2);
        if (!_0x2721a1) {
          throw new _0x32ab7c.ErrnoError(8);
        }
        if ((_0x2721a1.flags & 2097155) === 0) {
          throw new _0x32ab7c.ErrnoError(28);
        }
        _0x32ab7c.truncate(_0x2721a1.node, _0x3ff0b6);
      },
      utime: (_0x548edf, _0x592672, _0x455eac) => {
        var _0xff0657 = _0x32ab7c.lookupPath(_0x548edf, {
          follow: true
        });
        var _0x1a3ddb = _0xff0657.node;
        _0x1a3ddb.node_ops.setattr(_0x1a3ddb, {
          timestamp: Math.max(_0x592672, _0x455eac)
        });
      },
      open: (_0x26f85f, _0x5620b3, _0x1d06b4, _0x551ffe, _0x3590c1) => {
        if (_0x26f85f === "") {
          throw new _0x32ab7c.ErrnoError(44);
        }
        _0x5620b3 = typeof _0x5620b3 == "string" ? _0x32ab7c.modeStringToFlags(_0x5620b3) : _0x5620b3;
        _0x1d06b4 = typeof _0x1d06b4 == "undefined" ? 438 : _0x1d06b4;
        if (_0x5620b3 & 64) {
          _0x1d06b4 = _0x1d06b4 & 4095 | 32768;
        } else {
          _0x1d06b4 = 0;
        }
        var _0x52b0de;
        if (typeof _0x26f85f == "object") {
          _0x52b0de = _0x26f85f;
        } else {
          _0x26f85f = _0x1e591a.normalize(_0x26f85f);
          try {
            var _0x5761cd = _0x32ab7c.lookupPath(_0x26f85f, {
              follow: !(_0x5620b3 & 131072)
            });
            _0x52b0de = _0x5761cd.node;
          } catch (_0x3dc26f) {}
        }
        var _0x396d3b = false;
        if (_0x5620b3 & 64) {
          if (_0x52b0de) {
            if (_0x5620b3 & 128) {
              throw new _0x32ab7c.ErrnoError(20);
            }
          } else {
            _0x52b0de = _0x32ab7c.mknod(_0x26f85f, _0x1d06b4, 0);
            _0x396d3b = true;
          }
        }
        if (!_0x52b0de) {
          throw new _0x32ab7c.ErrnoError(44);
        }
        if (_0x32ab7c.isChrdev(_0x52b0de.mode)) {
          _0x5620b3 &= ~512;
        }
        if (_0x5620b3 & 65536 && !_0x32ab7c.isDir(_0x52b0de.mode)) {
          throw new _0x32ab7c.ErrnoError(54);
        }
        if (!_0x396d3b) {
          var _0x283667 = _0x32ab7c.mayOpen(_0x52b0de, _0x5620b3);
          if (_0x283667) {
            throw new _0x32ab7c.ErrnoError(_0x283667);
          }
        }
        if (_0x5620b3 & 512) {
          _0x32ab7c.truncate(_0x52b0de, 0);
        }
        _0x5620b3 &= ~131712;
        var _0x2131f1 = _0x32ab7c.createStream({
          node: _0x52b0de,
          path: _0x32ab7c.getPath(_0x52b0de),
          flags: _0x5620b3,
          seekable: true,
          position: 0,
          stream_ops: _0x52b0de.stream_ops,
          ungotten: [],
          error: false
        }, _0x551ffe, _0x3590c1);
        if (_0x2131f1.stream_ops.open) {
          _0x2131f1.stream_ops.open(_0x2131f1);
        }
        if (_0xbb74bb.logReadFiles && !(_0x5620b3 & 1)) {
          if (!_0x32ab7c.readFiles) {
            _0x32ab7c.readFiles = {};
          }
          if (!(_0x26f85f in _0x32ab7c.readFiles)) {
            _0x32ab7c.readFiles[_0x26f85f] = 1;
          }
        }
        return _0x2131f1;
      },
      close: _0x53dab2 => {
        if (_0x32ab7c.isClosed(_0x53dab2)) {
          throw new _0x32ab7c.ErrnoError(8);
        }
        if (_0x53dab2.getdents) {
          _0x53dab2.getdents = null;
        }
        try {
          if (_0x53dab2.stream_ops.close) {
            _0x53dab2.stream_ops.close(_0x53dab2);
          }
        } catch (_0x4112ee) {
          throw _0x4112ee;
        } finally {
          _0x32ab7c.closeStream(_0x53dab2.fd);
        }
        _0x53dab2.fd = null;
      },
      isClosed: _0x4581f9 => {
        return _0x4581f9.fd === null;
      },
      llseek: (_0x54bc46, _0xc93170, _0x4b9db5) => {
        if (_0x32ab7c.isClosed(_0x54bc46)) {
          throw new _0x32ab7c.ErrnoError(8);
        }
        if (!_0x54bc46.seekable || !_0x54bc46.stream_ops.llseek) {
          throw new _0x32ab7c.ErrnoError(70);
        }
        if (_0x4b9db5 != 0 && _0x4b9db5 != 1 && _0x4b9db5 != 2) {
          throw new _0x32ab7c.ErrnoError(28);
        }
        _0x54bc46.position = _0x54bc46.stream_ops.llseek(_0x54bc46, _0xc93170, _0x4b9db5);
        _0x54bc46.ungotten = [];
        return _0x54bc46.position;
      },
      read: (_0x315461, _0x45dcbb, _0x409a88, _0x507975, _0x3dad54) => {
        if (_0x507975 < 0 || _0x3dad54 < 0) {
          throw new _0x32ab7c.ErrnoError(28);
        }
        if (_0x32ab7c.isClosed(_0x315461)) {
          throw new _0x32ab7c.ErrnoError(8);
        }
        if ((_0x315461.flags & 2097155) === 1) {
          throw new _0x32ab7c.ErrnoError(8);
        }
        if (_0x32ab7c.isDir(_0x315461.node.mode)) {
          throw new _0x32ab7c.ErrnoError(31);
        }
        if (!_0x315461.stream_ops.read) {
          throw new _0x32ab7c.ErrnoError(28);
        }
        var _0x3eb01e = typeof _0x3dad54 != "undefined";
        if (!_0x3eb01e) {
          _0x3dad54 = _0x315461.position;
        } else if (!_0x315461.seekable) {
          throw new _0x32ab7c.ErrnoError(70);
        }
        var _0x1110aa = _0x315461.stream_ops.read(_0x315461, _0x45dcbb, _0x409a88, _0x507975, _0x3dad54);
        if (!_0x3eb01e) {
          _0x315461.position += _0x1110aa;
        }
        return _0x1110aa;
      },
      write: (_0x39a653, _0x4798c3, _0xcdcf19, _0x2a92f0, _0x1ea3e3, _0x41eeb9) => {
        if (_0x2a92f0 < 0 || _0x1ea3e3 < 0) {
          throw new _0x32ab7c.ErrnoError(28);
        }
        if (_0x32ab7c.isClosed(_0x39a653)) {
          throw new _0x32ab7c.ErrnoError(8);
        }
        if ((_0x39a653.flags & 2097155) === 0) {
          throw new _0x32ab7c.ErrnoError(8);
        }
        if (_0x32ab7c.isDir(_0x39a653.node.mode)) {
          throw new _0x32ab7c.ErrnoError(31);
        }
        if (!_0x39a653.stream_ops.write) {
          throw new _0x32ab7c.ErrnoError(28);
        }
        if (_0x39a653.seekable && _0x39a653.flags & 1024) {
          _0x32ab7c.llseek(_0x39a653, 0, 2);
        }
        var _0x1f1c01 = typeof _0x1ea3e3 != "undefined";
        if (!_0x1f1c01) {
          _0x1ea3e3 = _0x39a653.position;
        } else if (!_0x39a653.seekable) {
          throw new _0x32ab7c.ErrnoError(70);
        }
        var _0x6ef3c7 = _0x39a653.stream_ops.write(_0x39a653, _0x4798c3, _0xcdcf19, _0x2a92f0, _0x1ea3e3, _0x41eeb9);
        if (!_0x1f1c01) {
          _0x39a653.position += _0x6ef3c7;
        }
        return _0x6ef3c7;
      },
      allocate: (_0x409f51, _0x462e6f, _0x5c84db) => {
        if (_0x32ab7c.isClosed(_0x409f51)) {
          throw new _0x32ab7c.ErrnoError(8);
        }
        if (_0x462e6f < 0 || _0x5c84db <= 0) {
          throw new _0x32ab7c.ErrnoError(28);
        }
        if ((_0x409f51.flags & 2097155) === 0) {
          throw new _0x32ab7c.ErrnoError(8);
        }
        if (!_0x32ab7c.isFile(_0x409f51.node.mode) && !_0x32ab7c.isDir(_0x409f51.node.mode)) {
          throw new _0x32ab7c.ErrnoError(43);
        }
        if (!_0x409f51.stream_ops.allocate) {
          throw new _0x32ab7c.ErrnoError(138);
        }
        _0x409f51.stream_ops.allocate(_0x409f51, _0x462e6f, _0x5c84db);
      },
      mmap: (_0x168257, _0x10ec8f, _0x1dbc78, _0xdfe382, _0x588496, _0x395058) => {
        if ((_0x588496 & 2) !== 0 && (_0x395058 & 2) === 0 && (_0x168257.flags & 2097155) !== 2) {
          throw new _0x32ab7c.ErrnoError(2);
        }
        if ((_0x168257.flags & 2097155) === 1) {
          throw new _0x32ab7c.ErrnoError(2);
        }
        if (!_0x168257.stream_ops.mmap) {
          throw new _0x32ab7c.ErrnoError(43);
        }
        return _0x168257.stream_ops.mmap(_0x168257, _0x10ec8f, _0x1dbc78, _0xdfe382, _0x588496, _0x395058);
      },
      msync: (_0x276edc, _0x3d286c, _0x19f0df, _0x329b9d, _0x6523b) => {
        if (!_0x276edc || !_0x276edc.stream_ops.msync) {
          return 0;
        }
        return _0x276edc.stream_ops.msync(_0x276edc, _0x3d286c, _0x19f0df, _0x329b9d, _0x6523b);
      },
      munmap: _0x3fac53 => 0,
      ioctl: (_0x4c92a8, _0xad8541, _0x3a0de0) => {
        if (!_0x4c92a8.stream_ops.ioctl) {
          throw new _0x32ab7c.ErrnoError(59);
        }
        return _0x4c92a8.stream_ops.ioctl(_0x4c92a8, _0xad8541, _0x3a0de0);
      },
      readFile: (_0x3623fb, _0x1454ed = {}) => {
        _0x1454ed.flags = _0x1454ed.flags || 0;
        _0x1454ed.encoding = _0x1454ed.encoding || "binary";
        if (_0x1454ed.encoding !== "utf8" && _0x1454ed.encoding !== "binary") {
          throw new Error("Invalid encoding type \"" + _0x1454ed.encoding + "\"");
        }
        var _0x133252;
        var _0x19439b = _0x32ab7c.open(_0x3623fb, _0x1454ed.flags);
        var _0x25e62b = _0x32ab7c.stat(_0x3623fb);
        var _0x17efff = _0x25e62b.size;
        var _0x2f341c = new Uint8Array(_0x17efff);
        _0x32ab7c.read(_0x19439b, _0x2f341c, 0, _0x17efff, 0);
        if (_0x1454ed.encoding === "utf8") {
          _0x133252 = _0x2aa2a9(_0x2f341c, 0);
        } else if (_0x1454ed.encoding === "binary") {
          _0x133252 = _0x2f341c;
        }
        _0x32ab7c.close(_0x19439b);
        return _0x133252;
      },
      writeFile: (_0x409498, _0x69c591, _0x5a4bf3 = {}) => {
        _0x5a4bf3.flags = _0x5a4bf3.flags || 577;
        var _0x5ac5c8 = _0x32ab7c.open(_0x409498, _0x5a4bf3.flags, _0x5a4bf3.mode);
        if (typeof _0x69c591 == "string") {
          var _0x102c9d = new Uint8Array(_0x53c190(_0x69c591) + 1);
          var _0x39c49c = _0x3ea15f(_0x69c591, _0x102c9d, 0, _0x102c9d.length);
          _0x32ab7c.write(_0x5ac5c8, _0x102c9d, 0, _0x39c49c, undefined, _0x5a4bf3.canOwn);
        } else if (ArrayBuffer.isView(_0x69c591)) {
          _0x32ab7c.write(_0x5ac5c8, _0x69c591, 0, _0x69c591.byteLength, undefined, _0x5a4bf3.canOwn);
        } else {
          throw new Error("Unsupported data type");
        }
        _0x32ab7c.close(_0x5ac5c8);
      },
      cwd: () => _0x32ab7c.currentPath,
      chdir: _0x1b7f7a => {
        var _0x3d3e24 = _0x32ab7c.lookupPath(_0x1b7f7a, {
          follow: true
        });
        if (_0x3d3e24.node === null) {
          throw new _0x32ab7c.ErrnoError(44);
        }
        if (!_0x32ab7c.isDir(_0x3d3e24.node.mode)) {
          throw new _0x32ab7c.ErrnoError(54);
        }
        var _0x44f7fb = _0x32ab7c.nodePermissions(_0x3d3e24.node, "x");
        if (_0x44f7fb) {
          throw new _0x32ab7c.ErrnoError(_0x44f7fb);
        }
        _0x32ab7c.currentPath = _0x3d3e24.path;
      },
      createDefaultDirectories: () => {
        _0x32ab7c.mkdir("/tmp");
        _0x32ab7c.mkdir("/home");
        _0x32ab7c.mkdir("/home/web_user");
      },
      createDefaultDevices: () => {
        _0x32ab7c.mkdir("/dev");
        _0x32ab7c.registerDevice(_0x32ab7c.makedev(1, 3), {
          read: () => 0,
          write: (_0x2d3713, _0x52ee98, _0x58437e, _0x105fb7, _0x5e920a) => _0x105fb7
        });
        _0x32ab7c.mkdev("/dev/null", _0x32ab7c.makedev(1, 3));
        _0xfaba4b.register(_0x32ab7c.makedev(5, 0), _0xfaba4b.default_tty_ops);
        _0xfaba4b.register(_0x32ab7c.makedev(6, 0), _0xfaba4b.default_tty1_ops);
        _0x32ab7c.mkdev("/dev/tty", _0x32ab7c.makedev(5, 0));
        _0x32ab7c.mkdev("/dev/tty1", _0x32ab7c.makedev(6, 0));
        var _0x531445 = _0x50cc41();
        _0x32ab7c.createDevice("/dev", "random", _0x531445);
        _0x32ab7c.createDevice("/dev", "urandom", _0x531445);
        _0x32ab7c.mkdir("/dev/shm");
        _0x32ab7c.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories: () => {
        _0x32ab7c.mkdir("/proc");
        var _0x255420 = _0x32ab7c.mkdir("/proc/self");
        _0x32ab7c.mkdir("/proc/self/fd");
        _0x32ab7c.mount({
          mount: () => {
            var _0x10fcae = _0x32ab7c.createNode(_0x255420, "fd", 16895, 73);
            _0x10fcae.node_ops = {
              lookup: (_0x37e501, _0x326c53) => {
                var _0x50377f = +_0x326c53;
                var _0x43c408 = _0x32ab7c.getStream(_0x50377f);
                if (!_0x43c408) {
                  throw new _0x32ab7c.ErrnoError(8);
                }
                var _0x53935a = {
                  parent: null,
                  mount: {
                    mountpoint: "fake"
                  },
                  node_ops: {
                    readlink: () => _0x43c408.path
                  }
                };
                _0x53935a.parent = _0x53935a;
                return _0x53935a;
              }
            };
            return _0x10fcae;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams: () => {
        if (_0xbb74bb.stdin) {
          _0x32ab7c.createDevice("/dev", "stdin", _0xbb74bb.stdin);
        } else {
          _0x32ab7c.symlink("/dev/tty", "/dev/stdin");
        }
        if (_0xbb74bb.stdout) {
          _0x32ab7c.createDevice("/dev", "stdout", null, _0xbb74bb.stdout);
        } else {
          _0x32ab7c.symlink("/dev/tty", "/dev/stdout");
        }
        if (_0xbb74bb.stderr) {
          _0x32ab7c.createDevice("/dev", "stderr", null, _0xbb74bb.stderr);
        } else {
          _0x32ab7c.symlink("/dev/tty1", "/dev/stderr");
        }
        var _0x316db4 = _0x32ab7c.open("/dev/stdin", 0);
        var _0x1582b4 = _0x32ab7c.open("/dev/stdout", 1);
        var _0x3f3356 = _0x32ab7c.open("/dev/stderr", 1);
      },
      ensureErrnoError: () => {
        if (_0x32ab7c.ErrnoError) {
          return;
        }
        _0x32ab7c.ErrnoError = function _0x39033c(_0x45450c, _0xdcd10e) {
          this.node = _0xdcd10e;
          this.setErrno = function (_0x845598) {
            this.errno = _0x845598;
          };
          this.setErrno(_0x45450c);
          this.message = "FS error";
        };
        _0x32ab7c.ErrnoError.prototype = new Error();
        _0x32ab7c.ErrnoError.prototype.constructor = _0x32ab7c.ErrnoError;
        [44].forEach(_0x18ee0c => {
          _0x32ab7c.genericErrors[_0x18ee0c] = new _0x32ab7c.ErrnoError(_0x18ee0c);
          _0x32ab7c.genericErrors[_0x18ee0c].stack = "<generic error, no stack>";
        });
      },
      staticInit: () => {
        _0x32ab7c.ensureErrnoError();
        _0x32ab7c.nameTable = new Array(4096);
        _0x32ab7c.mount(_0x13fbf5, {}, "/");
        _0x32ab7c.createDefaultDirectories();
        _0x32ab7c.createDefaultDevices();
        _0x32ab7c.createSpecialDirectories();
        _0x32ab7c.filesystems = {
          MEMFS: _0x13fbf5,
          IDBFS: _0x418a4e
        };
      },
      init: (_0xb81198, _0x36321c, _0x1df831) => {
        _0x32ab7c.init.initialized = true;
        _0x32ab7c.ensureErrnoError();
        _0xbb74bb.stdin = _0xb81198 || _0xbb74bb.stdin;
        _0xbb74bb.stdout = _0x36321c || _0xbb74bb.stdout;
        _0xbb74bb.stderr = _0x1df831 || _0xbb74bb.stderr;
        _0x32ab7c.createStandardStreams();
      },
      quit: () => {
        _0x32ab7c.init.initialized = false;
        for (var _0x3cdac5 = 0; _0x3cdac5 < _0x32ab7c.streams.length; _0x3cdac5++) {
          var _0x17d3b6 = _0x32ab7c.streams[_0x3cdac5];
          if (!_0x17d3b6) {
            continue;
          }
          _0x32ab7c.close(_0x17d3b6);
        }
      },
      getMode: (_0xc16ccd, _0x116ecb) => {
        var _0x29c8c3 = 0;
        if (_0xc16ccd) {
          _0x29c8c3 |= 365;
        }
        if (_0x116ecb) {
          _0x29c8c3 |= 146;
        }
        return _0x29c8c3;
      },
      findObject: (_0x137e4a, _0x3fbf1e) => {
        var _0xaaac55 = _0x32ab7c.analyzePath(_0x137e4a, _0x3fbf1e);
        if (_0xaaac55.exists) {
          return _0xaaac55.object;
        } else {
          return null;
        }
      },
      analyzePath: (_0x343ea8, _0x42d69b) => {
        try {
          var _0x4c8175 = _0x32ab7c.lookupPath(_0x343ea8, {
            follow: !_0x42d69b
          });
          _0x343ea8 = _0x4c8175.path;
        } catch (_0x97c359) {}
        var _0x582e4d = {
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
          var _0x4c8175 = _0x32ab7c.lookupPath(_0x343ea8, {
            parent: true
          });
          _0x582e4d.parentExists = true;
          _0x582e4d.parentPath = _0x4c8175.path;
          _0x582e4d.parentObject = _0x4c8175.node;
          _0x582e4d.name = _0x1e591a.basename(_0x343ea8);
          _0x4c8175 = _0x32ab7c.lookupPath(_0x343ea8, {
            follow: !_0x42d69b
          });
          _0x582e4d.exists = true;
          _0x582e4d.path = _0x4c8175.path;
          _0x582e4d.object = _0x4c8175.node;
          _0x582e4d.name = _0x4c8175.node.name;
          _0x582e4d.isRoot = _0x4c8175.path === "/";
        } catch (_0x329cc2) {
          _0x582e4d.error = _0x329cc2.errno;
        }
        return _0x582e4d;
      },
      createPath: (_0x1a3eb7, _0x2fc35a, _0x1cb664, _0x40e4c4) => {
        _0x1a3eb7 = typeof _0x1a3eb7 == "string" ? _0x1a3eb7 : _0x32ab7c.getPath(_0x1a3eb7);
        var _0x159fe7 = _0x2fc35a.split("/").reverse();
        while (_0x159fe7.length) {
          var _0x3f3888 = _0x159fe7.pop();
          if (!_0x3f3888) {
            continue;
          }
          var _0x41269a = _0x1e591a.join2(_0x1a3eb7, _0x3f3888);
          try {
            _0x32ab7c.mkdir(_0x41269a);
          } catch (_0x34993d) {}
          _0x1a3eb7 = _0x41269a;
        }
        return _0x41269a;
      },
      createFile: (_0x20a95c, _0x1af9e8, _0xd645a, _0x511b25, _0x1425f7) => {
        var _0x4dcc92 = _0x1e591a.join2(typeof _0x20a95c == "string" ? _0x20a95c : _0x32ab7c.getPath(_0x20a95c), _0x1af9e8);
        var _0x27745b = _0x32ab7c.getMode(_0x511b25, _0x1425f7);
        return _0x32ab7c.create(_0x4dcc92, _0x27745b);
      },
      createDataFile: (_0xe9b6e3, _0x1d3b0c, _0x6059ea, _0x22eef6, _0x57ee5f, _0x290f72) => {
        var _0xc43fdc = _0x1d3b0c;
        if (_0xe9b6e3) {
          _0xe9b6e3 = typeof _0xe9b6e3 == "string" ? _0xe9b6e3 : _0x32ab7c.getPath(_0xe9b6e3);
          _0xc43fdc = _0x1d3b0c ? _0x1e591a.join2(_0xe9b6e3, _0x1d3b0c) : _0xe9b6e3;
        }
        var _0x185e47 = _0x32ab7c.getMode(_0x22eef6, _0x57ee5f);
        var _0x1f1384 = _0x32ab7c.create(_0xc43fdc, _0x185e47);
        if (_0x6059ea) {
          if (typeof _0x6059ea == "string") {
            var _0xaa9e26 = new Array(_0x6059ea.length);
            for (var _0x57ebb2 = 0, _0x1f0a30 = _0x6059ea.length; _0x57ebb2 < _0x1f0a30; ++_0x57ebb2) {
              _0xaa9e26[_0x57ebb2] = _0x6059ea.charCodeAt(_0x57ebb2);
            }
            _0x6059ea = _0xaa9e26;
          }
          _0x32ab7c.chmod(_0x1f1384, _0x185e47 | 146);
          var _0x40b140 = _0x32ab7c.open(_0x1f1384, 577);
          _0x32ab7c.write(_0x40b140, _0x6059ea, 0, _0x6059ea.length, 0, _0x290f72);
          _0x32ab7c.close(_0x40b140);
          _0x32ab7c.chmod(_0x1f1384, _0x185e47);
        }
        return _0x1f1384;
      },
      createDevice: (_0x3eedd2, _0x4385d9, _0x532af5, _0xbbabf9) => {
        var _0x5cdfd9 = _0x1e591a.join2(typeof _0x3eedd2 == "string" ? _0x3eedd2 : _0x32ab7c.getPath(_0x3eedd2), _0x4385d9);
        var _0x59f432 = _0x32ab7c.getMode(!!_0x532af5, !!_0xbbabf9);
        if (!_0x32ab7c.createDevice.major) {
          _0x32ab7c.createDevice.major = 64;
        }
        var _0x2082ab = _0x32ab7c.makedev(_0x32ab7c.createDevice.major++, 0);
        _0x32ab7c.registerDevice(_0x2082ab, {
          open: _0x328319 => {
            _0x328319.seekable = false;
          },
          close: _0x56235f => {
            if (_0xbbabf9 && _0xbbabf9.buffer && _0xbbabf9.buffer.length) {
              _0xbbabf9(10);
            }
          },
          read: (_0x58bee6, _0x95108a, _0x122130, _0x3d0e64, _0x4495d9) => {
            var _0x2cc1c3 = 0;
            for (var _0x58d801 = 0; _0x58d801 < _0x3d0e64; _0x58d801++) {
              var _0x591c43;
              try {
                _0x591c43 = _0x532af5();
              } catch (_0x13d6b5) {
                throw new _0x32ab7c.ErrnoError(29);
              }
              if (_0x591c43 === undefined && _0x2cc1c3 === 0) {
                throw new _0x32ab7c.ErrnoError(6);
              }
              if (_0x591c43 === null || _0x591c43 === undefined) {
                break;
              }
              _0x2cc1c3++;
              _0x95108a[_0x122130 + _0x58d801] = _0x591c43;
            }
            if (_0x2cc1c3) {
              _0x58bee6.node.timestamp = Date.now();
            }
            return _0x2cc1c3;
          },
          write: (_0x408af3, _0x2d1d3c, _0x2cd765, _0x4901bc, _0xbd4f08) => {
            for (var _0x181fe3 = 0; _0x181fe3 < _0x4901bc; _0x181fe3++) {
              try {
                _0xbbabf9(_0x2d1d3c[_0x2cd765 + _0x181fe3]);
              } catch (_0x561ed8) {
                throw new _0x32ab7c.ErrnoError(29);
              }
            }
            if (_0x4901bc) {
              _0x408af3.node.timestamp = Date.now();
            }
            return _0x181fe3;
          }
        });
        return _0x32ab7c.mkdev(_0x5cdfd9, _0x59f432, _0x2082ab);
      },
      forceLoadFile: _0x2f569c => {
        if (_0x2f569c.isDevice || _0x2f569c.isFolder || _0x2f569c.link || _0x2f569c.contents) {
          return true;
        }
        if (typeof XMLHttpRequest != "undefined") {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (_0x35a605) {
          try {
            _0x2f569c.contents = _0x8df336(_0x35a605(_0x2f569c.url), true);
            _0x2f569c.usedBytes = _0x2f569c.contents.length;
          } catch (_0x325f39) {
            throw new _0x32ab7c.ErrnoError(29);
          }
        } else {
          throw new Error("Cannot load without read() or XMLHttpRequest.");
        }
      },
      createLazyFile: (_0x57e63d, _0x175e7f, _0x3edc56, _0x41d28b, _0x3b788e) => {
        function _0x1448c1() {
          this.lengthKnown = false;
          this.chunks = [];
        }
        _0x1448c1.prototype.get = function _0x53bc19(_0x1ac244) {
          if (_0x1ac244 > this.length - 1 || _0x1ac244 < 0) {
            return undefined;
          }
          var _0xb03028 = _0x1ac244 % this.chunkSize;
          var _0x27321f = _0x1ac244 / this.chunkSize | 0;
          return this.getter(_0x27321f)[_0xb03028];
        };
        _0x1448c1.prototype.setDataGetter = function _0x363d35(_0x486850) {
          this.getter = _0x486850;
        };
        _0x1448c1.prototype.cacheLength = function _0x5d2445() {
          var _0x3f229c = new XMLHttpRequest();
          _0x3f229c.open("HEAD", _0x3edc56, false);
          _0x3f229c.send(null);
          if ((!(_0x3f229c.status >= 200) || !(_0x3f229c.status < 300)) && _0x3f229c.status !== 304) {
            throw new Error("Couldn't load " + _0x3edc56 + ". Status: " + _0x3f229c.status);
          }
          var _0x2c26c5 = Number(_0x3f229c.getResponseHeader("Content-length"));
          var _0x42821e;
          var _0x596e3a = (_0x42821e = _0x3f229c.getResponseHeader("Accept-Ranges")) && _0x42821e === "bytes";
          var _0x351f44 = (_0x42821e = _0x3f229c.getResponseHeader("Content-Encoding")) && _0x42821e === "gzip";
          var _0x5ae310 = 1048576;
          if (!_0x596e3a) {
            _0x5ae310 = _0x2c26c5;
          }
          var _0x52ed4e = (_0x188608, _0x2b02bd) => {
            if (_0x188608 > _0x2b02bd) {
              throw new Error("invalid range (" + _0x188608 + ", " + _0x2b02bd + ") or no bytes requested!");
            }
            if (_0x2b02bd > _0x2c26c5 - 1) {
              throw new Error("only " + _0x2c26c5 + " bytes available! programmer error!");
            }
            var _0x2ac3e1 = new XMLHttpRequest();
            _0x2ac3e1.open("GET", _0x3edc56, false);
            if (_0x2c26c5 !== _0x5ae310) {
              _0x2ac3e1.setRequestHeader("Range", "bytes=" + _0x188608 + "-" + _0x2b02bd);
            }
            _0x2ac3e1.responseType = "arraybuffer";
            if (_0x2ac3e1.overrideMimeType) {
              _0x2ac3e1.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x2ac3e1.send(null);
            if ((!(_0x2ac3e1.status >= 200) || !(_0x2ac3e1.status < 300)) && _0x2ac3e1.status !== 304) {
              throw new Error("Couldn't load " + _0x3edc56 + ". Status: " + _0x2ac3e1.status);
            }
            if (_0x2ac3e1.response !== undefined) {
              return new Uint8Array(_0x2ac3e1.response || []);
            } else {
              return _0x8df336(_0x2ac3e1.responseText || "", true);
            }
          };
          var _0x3ba67b = this;
          _0x3ba67b.setDataGetter(_0x2a3a09 => {
            var _0x11bd0c = _0x2a3a09 * _0x5ae310;
            var _0x36942a = (_0x2a3a09 + 1) * _0x5ae310 - 1;
            _0x36942a = Math.min(_0x36942a, _0x2c26c5 - 1);
            if (typeof _0x3ba67b.chunks[_0x2a3a09] == "undefined") {
              _0x3ba67b.chunks[_0x2a3a09] = _0x52ed4e(_0x11bd0c, _0x36942a);
            }
            if (typeof _0x3ba67b.chunks[_0x2a3a09] == "undefined") {
              throw new Error("doXHR failed!");
            }
            return _0x3ba67b.chunks[_0x2a3a09];
          });
          if (_0x351f44 || !_0x2c26c5) {
            _0x5ae310 = _0x2c26c5 = 1;
            _0x2c26c5 = this.getter(0).length;
            _0x5ae310 = _0x2c26c5;
            _0x1ae8e6("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
          this._length = _0x2c26c5;
          this._chunkSize = _0x5ae310;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != "undefined") {
          if (!_0x173e83) {
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          }
          var _0x502869 = new _0x1448c1();
          Object.defineProperties(_0x502869, {
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
          var _0x4d0624 = {
            isDevice: false,
            contents: _0x502869
          };
        } else {
          var _0x4d0624 = {
            isDevice: false,
            url: _0x3edc56
          };
        }
        var _0x4732d4 = _0x32ab7c.createFile(_0x57e63d, _0x175e7f, _0x4d0624, _0x41d28b, _0x3b788e);
        if (_0x4d0624.contents) {
          _0x4732d4.contents = _0x4d0624.contents;
        } else if (_0x4d0624.url) {
          _0x4732d4.contents = null;
          _0x4732d4.url = _0x4d0624.url;
        }
        Object.defineProperties(_0x4732d4, {
          usedBytes: {
            get: function () {
              return this.contents.length;
            }
          }
        });
        var _0x3ecd5d = {};
        var _0xeb9484 = Object.keys(_0x4732d4.stream_ops);
        _0xeb9484.forEach(_0x5d1bf0 => {
          var _0x7b176e = _0x4732d4.stream_ops[_0x5d1bf0];
          _0x3ecd5d[_0x5d1bf0] = function _0x2e9b26() {
            _0x32ab7c.forceLoadFile(_0x4732d4);
            return _0x7b176e.apply(null, arguments);
          };
        });
        _0x3ecd5d.read = (_0x330b95, _0x31cb68, _0x56b702, _0x4ddc98, _0x25e43b) => {
          _0x32ab7c.forceLoadFile(_0x4732d4);
          var _0x1853d6 = _0x330b95.node.contents;
          if (_0x25e43b >= _0x1853d6.length) {
            return 0;
          }
          var _0x49899b = Math.min(_0x1853d6.length - _0x25e43b, _0x4ddc98);
          if (_0x1853d6.slice) {
            for (var _0x43734c = 0; _0x43734c < _0x49899b; _0x43734c++) {
              _0x31cb68[_0x56b702 + _0x43734c] = _0x1853d6[_0x25e43b + _0x43734c];
            }
          } else {
            for (var _0x43734c = 0; _0x43734c < _0x49899b; _0x43734c++) {
              _0x31cb68[_0x56b702 + _0x43734c] = _0x1853d6.get(_0x25e43b + _0x43734c);
            }
          }
          return _0x49899b;
        };
        _0x4732d4.stream_ops = _0x3ecd5d;
        return _0x4732d4;
      },
      createPreloadedFile: (_0x5a10b6, _0x104674, _0x548a77, _0x20d068, _0x38c016, _0x3b68d1, _0x90feb2, _0x1ee6b8, _0x89f479, _0x540c94) => {
        var _0x3df84c = _0x104674 ? _0x4d6cef.resolve(_0x1e591a.join2(_0x5a10b6, _0x104674)) : _0x5a10b6;
        var _0x471611 = _0xfd11be("cp " + _0x3df84c);
        function _0x2f0d98(_0x37bd75) {
          function _0x488fe4(_0x1012e9) {
            if (_0x540c94) {
              _0x540c94();
            }
            if (!_0x1ee6b8) {
              _0x32ab7c.createDataFile(_0x5a10b6, _0x104674, _0x1012e9, _0x20d068, _0x38c016, _0x89f479);
            }
            if (_0x3b68d1) {
              _0x3b68d1();
            }
            _0x4c5673(_0x471611);
          }
          if (_0x4b67c5.handledByPreloadPlugin(_0x37bd75, _0x3df84c, _0x488fe4, () => {
            if (_0x90feb2) {
              _0x90feb2();
            }
            _0x4c5673(_0x471611);
          })) {
            return;
          }
          _0x488fe4(_0x37bd75);
        }
        _0x2d82f5(_0x471611);
        if (typeof _0x548a77 == "string") {
          _0x5ea45b(_0x548a77, _0x3ec206 => _0x2f0d98(_0x3ec206), _0x90feb2);
        } else {
          _0x2f0d98(_0x548a77);
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
      saveFilesToDB: (_0x33d1dd, _0x29869e, _0x3b9921) => {
        _0x29869e = _0x29869e || (() => {});
        _0x3b9921 = _0x3b9921 || (() => {});
        var _0x33d92c = _0x32ab7c.indexedDB();
        try {
          var _0x59b961 = _0x33d92c.open(_0x32ab7c.DB_NAME(), _0x32ab7c.DB_VERSION);
        } catch (_0x330080) {
          return _0x3b9921(_0x330080);
        }
        _0x59b961.onupgradeneeded = () => {
          _0x1ae8e6("creating db");
          var _0x2fa402 = _0x59b961.result;
          _0x2fa402.createObjectStore(_0x32ab7c.DB_STORE_NAME);
        };
        _0x59b961.onsuccess = () => {
          var _0x681a6a = _0x59b961.result;
          var _0x23889a = _0x681a6a.transaction([_0x32ab7c.DB_STORE_NAME], "readwrite");
          var _0x15ae7f = _0x23889a.objectStore(_0x32ab7c.DB_STORE_NAME);
          var _0x45754a = 0;
          var _0x224132 = 0;
          var _0xb712c4 = _0x33d1dd.length;
          function _0x4813f2() {
            if (_0x224132 == 0) {
              _0x29869e();
            } else {
              _0x3b9921();
            }
          }
          _0x33d1dd.forEach(_0x1030a1 => {
            var _0x1b9ad9 = _0x15ae7f.put(_0x32ab7c.analyzePath(_0x1030a1).object.contents, _0x1030a1);
            _0x1b9ad9.onsuccess = () => {
              _0x45754a++;
              if (_0x45754a + _0x224132 == _0xb712c4) {
                _0x4813f2();
              }
            };
            _0x1b9ad9.onerror = () => {
              _0x224132++;
              if (_0x45754a + _0x224132 == _0xb712c4) {
                _0x4813f2();
              }
            };
          });
          _0x23889a.onerror = _0x3b9921;
        };
        _0x59b961.onerror = _0x3b9921;
      },
      loadFilesFromDB: (_0x54c5f4, _0x479a87, _0x1c2c2c) => {
        _0x479a87 = _0x479a87 || (() => {});
        _0x1c2c2c = _0x1c2c2c || (() => {});
        var _0x5b479f = _0x32ab7c.indexedDB();
        try {
          var _0x22c9c2 = _0x5b479f.open(_0x32ab7c.DB_NAME(), _0x32ab7c.DB_VERSION);
        } catch (_0xfb6e65) {
          return _0x1c2c2c(_0xfb6e65);
        }
        _0x22c9c2.onupgradeneeded = _0x1c2c2c;
        _0x22c9c2.onsuccess = () => {
          var _0x285d7f = _0x22c9c2.result;
          try {
            var _0xbae016 = _0x285d7f.transaction([_0x32ab7c.DB_STORE_NAME], "readonly");
          } catch (_0x1fdedd) {
            _0x1c2c2c(_0x1fdedd);
            return;
          }
          var _0x3edcee = _0xbae016.objectStore(_0x32ab7c.DB_STORE_NAME);
          var _0x2f7efd = 0;
          var _0x2acbce = 0;
          var _0x2a8300 = _0x54c5f4.length;
          function _0x25d1da() {
            if (_0x2acbce == 0) {
              _0x479a87();
            } else {
              _0x1c2c2c();
            }
          }
          _0x54c5f4.forEach(_0x3833d6 => {
            var _0x520c03 = _0x3edcee.get(_0x3833d6);
            _0x520c03.onsuccess = () => {
              if (_0x32ab7c.analyzePath(_0x3833d6).exists) {
                _0x32ab7c.unlink(_0x3833d6);
              }
              _0x32ab7c.createDataFile(_0x1e591a.dirname(_0x3833d6), _0x1e591a.basename(_0x3833d6), _0x520c03.result, true, true, true);
              _0x2f7efd++;
              if (_0x2f7efd + _0x2acbce == _0x2a8300) {
                _0x25d1da();
              }
            };
            _0x520c03.onerror = () => {
              _0x2acbce++;
              if (_0x2f7efd + _0x2acbce == _0x2a8300) {
                _0x25d1da();
              }
            };
          });
          _0xbae016.onerror = _0x1c2c2c;
        };
        _0x22c9c2.onerror = _0x1c2c2c;
      }
    };
    var _0x2cd2f2 = {
      DEFAULT_POLLMASK: 5,
      calculateAt: function (_0x5ebd0e, _0x21dd73, _0x650f02) {
        if (_0x21dd73[0] === "/") {
          return _0x21dd73;
        }
        var _0x152101;
        if (_0x5ebd0e === -100) {
          _0x152101 = _0x32ab7c.cwd();
        } else {
          var _0x3fca86 = _0x32ab7c.getStream(_0x5ebd0e);
          if (!_0x3fca86) {
            throw new _0x32ab7c.ErrnoError(8);
          }
          _0x152101 = _0x3fca86.path;
        }
        if (_0x21dd73.length == 0) {
          if (!_0x650f02) {
            throw new _0x32ab7c.ErrnoError(44);
          }
          return _0x152101;
        }
        return _0x1e591a.join2(_0x152101, _0x21dd73);
      },
      doStat: function (_0x27571e, _0x7d1cdf, _0x2bd420) {
        try {
          var _0x3c945f = _0x27571e(_0x7d1cdf);
        } catch (_0x5f105c) {
          if (_0x5f105c && _0x5f105c.node && _0x1e591a.normalize(_0x7d1cdf) !== _0x1e591a.normalize(_0x32ab7c.getPath(_0x5f105c.node))) {
            return -54;
          }
          throw _0x5f105c;
        }
        _0x2f8726[_0x2bd420 >> 2] = _0x3c945f.dev;
        _0x2f8726[_0x2bd420 + 4 >> 2] = 0;
        _0x2f8726[_0x2bd420 + 8 >> 2] = _0x3c945f.ino;
        _0x2f8726[_0x2bd420 + 12 >> 2] = _0x3c945f.mode;
        _0x2f8726[_0x2bd420 + 16 >> 2] = _0x3c945f.nlink;
        _0x2f8726[_0x2bd420 + 20 >> 2] = _0x3c945f.uid;
        _0x2f8726[_0x2bd420 + 24 >> 2] = _0x3c945f.gid;
        _0x2f8726[_0x2bd420 + 28 >> 2] = _0x3c945f.rdev;
        _0x2f8726[_0x2bd420 + 32 >> 2] = 0;
        _0x3a663e = [_0x3c945f.size >>> 0, (_0x19ea61 = _0x3c945f.size, +Math.abs(_0x19ea61) >= 1 ? _0x19ea61 > 0 ? (Math.min(+Math.floor(_0x19ea61 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x19ea61 - +(~~_0x19ea61 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x2f8726[_0x2bd420 + 40 >> 2] = _0x3a663e[0];
        _0x2f8726[_0x2bd420 + 44 >> 2] = _0x3a663e[1];
        _0x2f8726[_0x2bd420 + 48 >> 2] = 4096;
        _0x2f8726[_0x2bd420 + 52 >> 2] = _0x3c945f.blocks;
        _0x2f8726[_0x2bd420 + 56 >> 2] = _0x3c945f.atime.getTime() / 1000 | 0;
        _0x2f8726[_0x2bd420 + 60 >> 2] = 0;
        _0x2f8726[_0x2bd420 + 64 >> 2] = _0x3c945f.mtime.getTime() / 1000 | 0;
        _0x2f8726[_0x2bd420 + 68 >> 2] = 0;
        _0x2f8726[_0x2bd420 + 72 >> 2] = _0x3c945f.ctime.getTime() / 1000 | 0;
        _0x2f8726[_0x2bd420 + 76 >> 2] = 0;
        _0x3a663e = [_0x3c945f.ino >>> 0, (_0x19ea61 = _0x3c945f.ino, +Math.abs(_0x19ea61) >= 1 ? _0x19ea61 > 0 ? (Math.min(+Math.floor(_0x19ea61 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x19ea61 - +(~~_0x19ea61 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x2f8726[_0x2bd420 + 80 >> 2] = _0x3a663e[0];
        _0x2f8726[_0x2bd420 + 84 >> 2] = _0x3a663e[1];
        return 0;
      },
      doMsync: function (_0x176476, _0x4a1a30, _0x56b7d6, _0x1ea756, _0x3e802d) {
        var _0x427e3e = _0x4924c2.slice(_0x176476, _0x176476 + _0x56b7d6);
        _0x32ab7c.msync(_0x4a1a30, _0x427e3e, _0x3e802d, _0x56b7d6, _0x1ea756);
      },
      doMkdir: function (_0x55721a, _0x372dda) {
        _0x55721a = _0x1e591a.normalize(_0x55721a);
        if (_0x55721a[_0x55721a.length - 1] === "/") {
          _0x55721a = _0x55721a.substr(0, _0x55721a.length - 1);
        }
        _0x32ab7c.mkdir(_0x55721a, _0x372dda, 0);
        return 0;
      },
      doMknod: function (_0x3d0983, _0xe404bf, _0x1f8c17) {
        switch (_0xe404bf & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default:
            return -28;
        }
        _0x32ab7c.mknod(_0x3d0983, _0xe404bf, _0x1f8c17);
        return 0;
      },
      doReadlink: function (_0x3f4ffc, _0x5a7115, _0x2ffe08) {
        if (_0x2ffe08 <= 0) {
          return -28;
        }
        var _0x595d49 = _0x32ab7c.readlink(_0x3f4ffc);
        var _0x585868 = Math.min(_0x2ffe08, _0x53c190(_0x595d49));
        var _0x407999 = _0x245769[_0x5a7115 + _0x585868];
        _0x4fe443(_0x595d49, _0x5a7115, _0x2ffe08 + 1);
        _0x245769[_0x5a7115 + _0x585868] = _0x407999;
        return _0x585868;
      },
      doAccess: function (_0x31cb7b, _0x29bf92) {
        if (_0x29bf92 & ~7) {
          return -28;
        }
        var _0x5e2f19 = _0x32ab7c.lookupPath(_0x31cb7b, {
          follow: true
        });
        var _0x43547c = _0x5e2f19.node;
        if (!_0x43547c) {
          return -44;
        }
        var _0x28c8f1 = "";
        if (_0x29bf92 & 4) {
          _0x28c8f1 += "r";
        }
        if (_0x29bf92 & 2) {
          _0x28c8f1 += "w";
        }
        if (_0x29bf92 & 1) {
          _0x28c8f1 += "x";
        }
        if (_0x28c8f1 && _0x32ab7c.nodePermissions(_0x43547c, _0x28c8f1)) {
          return -2;
        }
        return 0;
      },
      doReadv: function (_0x1a31ba, _0x22fe5e, _0x2ceb77, _0x25617f) {
        var _0x4694db = 0;
        for (var _0x212297 = 0; _0x212297 < _0x2ceb77; _0x212297++) {
          var _0x4bd46c = _0x2f8726[_0x22fe5e + _0x212297 * 8 >> 2];
          var _0x3c3940 = _0x2f8726[_0x22fe5e + (_0x212297 * 8 + 4) >> 2];
          var _0x4a6bc1 = _0x32ab7c.read(_0x1a31ba, _0x245769, _0x4bd46c, _0x3c3940, _0x25617f);
          if (_0x4a6bc1 < 0) {
            return -1;
          }
          _0x4694db += _0x4a6bc1;
          if (_0x4a6bc1 < _0x3c3940) {
            break;
          }
        }
        return _0x4694db;
      },
      doWritev: function (_0x1695ef, _0x7e89d2, _0x5bf36d, _0x574a91) {
        var _0xbfd144 = 0;
        for (var _0x131290 = 0; _0x131290 < _0x5bf36d; _0x131290++) {
          var _0x56e396 = _0x2f8726[_0x7e89d2 + _0x131290 * 8 >> 2];
          var _0x4ccec5 = _0x2f8726[_0x7e89d2 + (_0x131290 * 8 + 4) >> 2];
          var _0x30a19f = _0x32ab7c.write(_0x1695ef, _0x245769, _0x56e396, _0x4ccec5, _0x574a91);
          if (_0x30a19f < 0) {
            return -1;
          }
          _0xbfd144 += _0x30a19f;
        }
        return _0xbfd144;
      },
      varargs: undefined,
      get: function () {
        _0x2cd2f2.varargs += 4;
        var _0x32159b = _0x2f8726[_0x2cd2f2.varargs - 4 >> 2];
        return _0x32159b;
      },
      getStr: function (_0x53094e) {
        var _0x8dfdf1 = _0x468390(_0x53094e);
        return _0x8dfdf1;
      },
      getStreamFromFD: function (_0x16dc25) {
        var _0xebed82 = _0x32ab7c.getStream(_0x16dc25);
        if (!_0xebed82) {
          throw new _0x32ab7c.ErrnoError(8);
        }
        return _0xebed82;
      },
      get64: function (_0x1acfb4, _0x33167c) {
        return _0x1acfb4;
      }
    };
    function _0x2468e7(_0x3a8170, _0x5a6ed6, _0xdd9641, _0x5c1e99, _0x5393ea) {
      try {
        var _0x9e40fb = 0;
        var _0x4fe9f1 = _0x5a6ed6 ? _0x2f8726[_0x5a6ed6 >> 2] : 0;
        var _0x376ece = _0x5a6ed6 ? _0x2f8726[_0x5a6ed6 + 4 >> 2] : 0;
        var _0x3d07f3 = _0xdd9641 ? _0x2f8726[_0xdd9641 >> 2] : 0;
        var _0x201707 = _0xdd9641 ? _0x2f8726[_0xdd9641 + 4 >> 2] : 0;
        var _0x5f1a01 = _0x5c1e99 ? _0x2f8726[_0x5c1e99 >> 2] : 0;
        var _0x46fd24 = _0x5c1e99 ? _0x2f8726[_0x5c1e99 + 4 >> 2] : 0;
        var _0x26a2b0 = 0;
        var _0x175b47 = 0;
        var _0x533771 = 0;
        var _0x1a5490 = 0;
        var _0x58b61f = 0;
        var _0x48009c = 0;
        var _0x56c42b = (_0x5a6ed6 ? _0x2f8726[_0x5a6ed6 >> 2] : 0) | (_0xdd9641 ? _0x2f8726[_0xdd9641 >> 2] : 0) | (_0x5c1e99 ? _0x2f8726[_0x5c1e99 >> 2] : 0);
        var _0x3bb274 = (_0x5a6ed6 ? _0x2f8726[_0x5a6ed6 + 4 >> 2] : 0) | (_0xdd9641 ? _0x2f8726[_0xdd9641 + 4 >> 2] : 0) | (_0x5c1e99 ? _0x2f8726[_0x5c1e99 + 4 >> 2] : 0);
        var _0x19706b = function (_0x44bfd2, _0x3bc632, _0x4f5756, _0x249bff) {
          if (_0x44bfd2 < 32) {
            return _0x3bc632 & _0x249bff;
          } else {
            return _0x4f5756 & _0x249bff;
          }
        };
        for (var _0x3e8ef5 = 0; _0x3e8ef5 < _0x3a8170; _0x3e8ef5++) {
          var _0x8d475 = 1 << _0x3e8ef5 % 32;
          if (!_0x19706b(_0x3e8ef5, _0x56c42b, _0x3bb274, _0x8d475)) {
            continue;
          }
          var _0x35a34e = _0x32ab7c.getStream(_0x3e8ef5);
          if (!_0x35a34e) {
            throw new _0x32ab7c.ErrnoError(8);
          }
          var _0x1f3748 = _0x2cd2f2.DEFAULT_POLLMASK;
          if (_0x35a34e.stream_ops.poll) {
            _0x1f3748 = _0x35a34e.stream_ops.poll(_0x35a34e);
          }
          if (_0x1f3748 & 1 && _0x19706b(_0x3e8ef5, _0x4fe9f1, _0x376ece, _0x8d475)) {
            if (_0x3e8ef5 < 32) {
              _0x26a2b0 = _0x26a2b0 | _0x8d475;
            } else {
              _0x175b47 = _0x175b47 | _0x8d475;
            }
            _0x9e40fb++;
          }
          if (_0x1f3748 & 4 && _0x19706b(_0x3e8ef5, _0x3d07f3, _0x201707, _0x8d475)) {
            if (_0x3e8ef5 < 32) {
              _0x533771 = _0x533771 | _0x8d475;
            } else {
              _0x1a5490 = _0x1a5490 | _0x8d475;
            }
            _0x9e40fb++;
          }
          if (_0x1f3748 & 2 && _0x19706b(_0x3e8ef5, _0x5f1a01, _0x46fd24, _0x8d475)) {
            if (_0x3e8ef5 < 32) {
              _0x58b61f = _0x58b61f | _0x8d475;
            } else {
              _0x48009c = _0x48009c | _0x8d475;
            }
            _0x9e40fb++;
          }
        }
        if (_0x5a6ed6) {
          _0x2f8726[_0x5a6ed6 >> 2] = _0x26a2b0;
          _0x2f8726[_0x5a6ed6 + 4 >> 2] = _0x175b47;
        }
        if (_0xdd9641) {
          _0x2f8726[_0xdd9641 >> 2] = _0x533771;
          _0x2f8726[_0xdd9641 + 4 >> 2] = _0x1a5490;
        }
        if (_0x5c1e99) {
          _0x2f8726[_0x5c1e99 >> 2] = _0x58b61f;
          _0x2f8726[_0x5c1e99 + 4 >> 2] = _0x48009c;
        }
        return _0x9e40fb;
      } catch (_0x4890b9) {
        if (typeof _0x32ab7c == "undefined" || !(_0x4890b9 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x4890b9;
        }
        return -_0x4890b9.errno;
      }
    }
    var _0x3bfd5e = {
      mount: function (_0x3d2b3c) {
        _0xbb74bb.websocket = _0xbb74bb.websocket && typeof _0xbb74bb.websocket === "object" ? _0xbb74bb.websocket : {};
        _0xbb74bb.websocket._callbacks = {};
        _0xbb74bb.websocket.on = function (_0x3f9b63, _0x1a5366) {
          if (typeof _0x1a5366 === "function") {
            this._callbacks[_0x3f9b63] = _0x1a5366;
          }
          return this;
        };
        _0xbb74bb.websocket.emit = function (_0x6d3ead, _0x42501f) {
          if (typeof this._callbacks[_0x6d3ead] === "function") {
            this._callbacks[_0x6d3ead].call(this, _0x42501f);
          }
        };
        return _0x32ab7c.createNode(null, "/", 16895, 0);
      },
      createSocket: function (_0x297cf1, _0x4cb2d9, _0x304362) {
        _0x4cb2d9 &= ~526336;
        var _0x2be93c = _0x4cb2d9 == 1;
        if (_0x2be93c && _0x304362 && _0x304362 != 6) {
          throw new _0x32ab7c.ErrnoError(66);
        }
        var _0x18a4b0 = {
          family: _0x297cf1,
          type: _0x4cb2d9,
          protocol: _0x304362,
          server: null,
          error: null,
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: _0x3bfd5e.websocket_sock_ops
        };
        var _0x30b6dd = _0x3bfd5e.nextname();
        var _0x1f126d = _0x32ab7c.createNode(_0x3bfd5e.root, _0x30b6dd, 49152, 0);
        _0x1f126d.sock = _0x18a4b0;
        var _0x5be649 = _0x32ab7c.createStream({
          path: _0x30b6dd,
          node: _0x1f126d,
          flags: 2,
          seekable: false,
          stream_ops: _0x3bfd5e.stream_ops
        });
        _0x18a4b0.stream = _0x5be649;
        return _0x18a4b0;
      },
      getSocket: function (_0x3687a3) {
        var _0x3cf2ae = _0x32ab7c.getStream(_0x3687a3);
        if (!_0x3cf2ae || !_0x32ab7c.isSocket(_0x3cf2ae.node.mode)) {
          return null;
        }
        return _0x3cf2ae.node.sock;
      },
      stream_ops: {
        poll: function (_0x427d2d) {
          var _0x2b2ef5 = _0x427d2d.node.sock;
          return _0x2b2ef5.sock_ops.poll(_0x2b2ef5);
        },
        ioctl: function (_0x5ad6bd, _0x591812, _0x478b92) {
          var _0x46a68d = _0x5ad6bd.node.sock;
          return _0x46a68d.sock_ops.ioctl(_0x46a68d, _0x591812, _0x478b92);
        },
        read: function (_0x1f45b7, _0x245c99, _0x16beb6, _0x2717fe, _0x1e7df5) {
          var _0x4f5b63 = _0x1f45b7.node.sock;
          var _0x475390 = _0x4f5b63.sock_ops.recvmsg(_0x4f5b63, _0x2717fe);
          if (!_0x475390) {
            return 0;
          }
          _0x245c99.set(_0x475390.buffer, _0x16beb6);
          return _0x475390.buffer.length;
        },
        write: function (_0x584930, _0x5cadf8, _0x2457b6, _0x197ea2, _0x229b50) {
          var _0x35a91a = _0x584930.node.sock;
          return _0x35a91a.sock_ops.sendmsg(_0x35a91a, _0x5cadf8, _0x2457b6, _0x197ea2);
        },
        close: function (_0x1115ad) {
          var _0x4c8595 = _0x1115ad.node.sock;
          _0x4c8595.sock_ops.close(_0x4c8595);
        }
      },
      nextname: function () {
        if (!_0x3bfd5e.nextname.current) {
          _0x3bfd5e.nextname.current = 0;
        }
        return "socket[" + _0x3bfd5e.nextname.current++ + "]";
      },
      websocket_sock_ops: {
        createPeer: function (_0x3c29a0, _0x3c0cc5, _0x3520b6) {
          var _0x3a9b3a;
          if (typeof _0x3c0cc5 == "object") {
            _0x3a9b3a = _0x3c0cc5;
            _0x3c0cc5 = null;
            _0x3520b6 = null;
          }
          if (_0x3a9b3a) {
            if (_0x3a9b3a._socket) {
              _0x3c0cc5 = _0x3a9b3a._socket.remoteAddress;
              _0x3520b6 = _0x3a9b3a._socket.remotePort;
            } else {
              var _0x2eaf31 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x3a9b3a.url);
              if (!_0x2eaf31) {
                throw new Error("WebSocket URL must be in the format ws(s)://address:port");
              }
              _0x3c0cc5 = _0x2eaf31[1];
              _0x3520b6 = parseInt(_0x2eaf31[2], 10);
            }
          } else {
            try {
              var _0x12dbd3 = _0xbb74bb.websocket && typeof _0xbb74bb.websocket === "object";
              var _0x4fbba3 = "ws:#".replace("#", "//");
              if (_0x12dbd3) {
                if (typeof _0xbb74bb.websocket.url === "string") {
                  _0x4fbba3 = _0xbb74bb.websocket.url;
                }
              }
              if (_0x4fbba3 === "ws://" || _0x4fbba3 === "wss://") {
                var _0x122006 = _0x3c0cc5.split("/");
                _0x4fbba3 = _0x4fbba3 + _0x122006[0] + ":" + _0x3520b6 + "/" + _0x122006.slice(1).join("/");
              }
              var _0x389863 = "binary";
              if (_0x12dbd3) {
                if (typeof _0xbb74bb.websocket.subprotocol === "string") {
                  _0x389863 = _0xbb74bb.websocket.subprotocol;
                }
              }
              var _0xa25f96 = undefined;
              if (_0x389863 !== "null") {
                _0x389863 = _0x389863.replace(/^ +| +$/g, "").split(/ *, */);
                _0xa25f96 = _0x26b0ad ? {
                  protocol: _0x389863.toString()
                } : _0x389863;
              }
              if (_0x12dbd3 && _0xbb74bb.websocket.subprotocol === null) {
                _0x389863 = "null";
                _0xa25f96 = undefined;
              }
              var _0x10ae8d;
              if (_0x26b0ad) {
                _0x10ae8d = require("ws");
              } else {
                _0x10ae8d = WebSocket;
              }
              _0x3a9b3a = new _0x10ae8d(_0x4fbba3, _0xa25f96);
              _0x3a9b3a.binaryType = "arraybuffer";
            } catch (_0x94072c) {
              throw new _0x32ab7c.ErrnoError(23);
            }
          }
          var _0x3e6818 = {
            addr: _0x3c0cc5,
            port: _0x3520b6,
            socket: _0x3a9b3a,
            dgram_send_queue: []
          };
          _0x3bfd5e.websocket_sock_ops.addPeer(_0x3c29a0, _0x3e6818);
          _0x3bfd5e.websocket_sock_ops.handlePeerEvents(_0x3c29a0, _0x3e6818);
          if (_0x3c29a0.type === 2 && typeof _0x3c29a0.sport != "undefined") {
            _0x3e6818.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x3c29a0.sport & 65280) >> 8, _0x3c29a0.sport & 255]));
          }
          return _0x3e6818;
        },
        getPeer: function (_0x597148, _0x4b512e, _0x5ed224) {
          return _0x597148.peers[_0x4b512e + ":" + _0x5ed224];
        },
        addPeer: function (_0x56627d, _0x1e65e7) {
          _0x56627d.peers[_0x1e65e7.addr + ":" + _0x1e65e7.port] = _0x1e65e7;
        },
        removePeer: function (_0x162630, _0x5a0e57) {
          delete _0x162630.peers[_0x5a0e57.addr + ":" + _0x5a0e57.port];
        },
        handlePeerEvents: function (_0x51905d, _0x51b91d) {
          var _0x553e48 = true;
          var _0x2d3e4e = function () {
            _0xbb74bb.websocket.emit("open", _0x51905d.stream.fd);
            try {
              var _0x134805 = _0x51b91d.dgram_send_queue.shift();
              while (_0x134805) {
                _0x51b91d.socket.send(_0x134805);
                _0x134805 = _0x51b91d.dgram_send_queue.shift();
              }
            } catch (_0x324f81) {
              _0x51b91d.socket.close();
            }
          };
          function _0x54de7a(_0x1435de) {
            if (typeof _0x1435de == "string") {
              var _0x1e76c3 = new TextEncoder();
              _0x1435de = _0x1e76c3.encode(_0x1435de);
            } else {
              _0x105928(_0x1435de.byteLength !== undefined);
              if (_0x1435de.byteLength == 0) {
                return;
              } else {
                _0x1435de = new Uint8Array(_0x1435de);
              }
            }
            var _0x2a5be6 = _0x553e48;
            _0x553e48 = false;
            if (_0x2a5be6 && _0x1435de.length === 10 && _0x1435de[0] === 255 && _0x1435de[1] === 255 && _0x1435de[2] === 255 && _0x1435de[3] === 255 && _0x1435de[4] === "p".charCodeAt(0) && _0x1435de[5] === "o".charCodeAt(0) && _0x1435de[6] === "r".charCodeAt(0) && _0x1435de[7] === "t".charCodeAt(0)) {
              var _0x1453f3 = _0x1435de[8] << 8 | _0x1435de[9];
              _0x3bfd5e.websocket_sock_ops.removePeer(_0x51905d, _0x51b91d);
              _0x51b91d.port = _0x1453f3;
              _0x3bfd5e.websocket_sock_ops.addPeer(_0x51905d, _0x51b91d);
              return;
            }
            _0x51905d.recv_queue.push({
              addr: _0x51b91d.addr,
              port: _0x51b91d.port,
              data: _0x1435de
            });
            _0xbb74bb.websocket.emit("message", _0x51905d.stream.fd);
          }
          if (_0x26b0ad) {
            _0x51b91d.socket.on("open", _0x2d3e4e);
            _0x51b91d.socket.on("message", function (_0x150096, _0x37506b) {
              if (!_0x37506b.binary) {
                return;
              }
              _0x54de7a(new Uint8Array(_0x150096).buffer);
            });
            _0x51b91d.socket.on("close", function () {
              _0xbb74bb.websocket.emit("close", _0x51905d.stream.fd);
            });
            _0x51b91d.socket.on("error", function (_0x28cc4c) {
              _0x51905d.error = 14;
              _0xbb74bb.websocket.emit("error", [_0x51905d.stream.fd, _0x51905d.error, "ECONNREFUSED: Connection refused"]);
            });
          } else {
            _0x51b91d.socket.onopen = _0x2d3e4e;
            _0x51b91d.socket.onclose = function () {
              _0xbb74bb.websocket.emit("close", _0x51905d.stream.fd);
            };
            _0x51b91d.socket.onmessage = function _0xc1aa8e(_0x5e935f) {
              _0x54de7a(_0x5e935f.data);
            };
            _0x51b91d.socket.onerror = function (_0x1a38a5) {
              _0x51905d.error = 14;
              _0xbb74bb.websocket.emit("error", [_0x51905d.stream.fd, _0x51905d.error, "ECONNREFUSED: Connection refused"]);
            };
          }
        },
        poll: function (_0x27ce3c) {
          if (_0x27ce3c.type === 1 && _0x27ce3c.server) {
            if (_0x27ce3c.pending.length) {
              return 65;
            } else {
              return 0;
            }
          }
          var _0x313079 = 0;
          var _0x4cbba7 = _0x27ce3c.type === 1 ? _0x3bfd5e.websocket_sock_ops.getPeer(_0x27ce3c, _0x27ce3c.daddr, _0x27ce3c.dport) : null;
          if (_0x27ce3c.recv_queue.length || !_0x4cbba7 || _0x4cbba7 && _0x4cbba7.socket.readyState === _0x4cbba7.socket.CLOSING || _0x4cbba7 && _0x4cbba7.socket.readyState === _0x4cbba7.socket.CLOSED) {
            _0x313079 |= 65;
          }
          if (!_0x4cbba7 || _0x4cbba7 && _0x4cbba7.socket.readyState === _0x4cbba7.socket.OPEN) {
            _0x313079 |= 4;
          }
          if (_0x4cbba7 && _0x4cbba7.socket.readyState === _0x4cbba7.socket.CLOSING || _0x4cbba7 && _0x4cbba7.socket.readyState === _0x4cbba7.socket.CLOSED) {
            _0x313079 |= 16;
          }
          return _0x313079;
        },
        ioctl: function (_0x22a9ef, _0x5a158b, _0x2d86d9) {
          switch (_0x5a158b) {
            case 21531:
              var _0x49fe45 = 0;
              if (_0x22a9ef.recv_queue.length) {
                _0x49fe45 = _0x22a9ef.recv_queue[0].data.length;
              }
              _0x2f8726[_0x2d86d9 >> 2] = _0x49fe45;
              return 0;
            default:
              return 28;
          }
        },
        close: function (_0x45a92b) {
          if (_0x45a92b.server) {
            try {
              _0x45a92b.server.close();
            } catch (_0x3efc57) {}
            _0x45a92b.server = null;
          }
          var _0x2c3e6b = Object.keys(_0x45a92b.peers);
          for (var _0x256534 = 0; _0x256534 < _0x2c3e6b.length; _0x256534++) {
            var _0x145fc4 = _0x45a92b.peers[_0x2c3e6b[_0x256534]];
            try {
              _0x145fc4.socket.close();
            } catch (_0x3106be) {}
            _0x3bfd5e.websocket_sock_ops.removePeer(_0x45a92b, _0x145fc4);
          }
          return 0;
        },
        bind: function (_0x424ae4, _0x13e5d2, _0x3ee1b5) {
          if (typeof _0x424ae4.saddr != "undefined" || typeof _0x424ae4.sport != "undefined") {
            throw new _0x32ab7c.ErrnoError(28);
          }
          _0x424ae4.saddr = _0x13e5d2;
          _0x424ae4.sport = _0x3ee1b5;
          if (_0x424ae4.type === 2) {
            if (_0x424ae4.server) {
              _0x424ae4.server.close();
              _0x424ae4.server = null;
            }
            try {
              _0x424ae4.sock_ops.listen(_0x424ae4, 0);
            } catch (_0x5cd484) {
              if (!(_0x5cd484 instanceof _0x32ab7c.ErrnoError)) {
                throw _0x5cd484;
              }
              if (_0x5cd484.errno !== 138) {
                throw _0x5cd484;
              }
            }
          }
        },
        connect: function (_0x2ebd34, _0x3d781a, _0x337e5f) {
          if (_0x2ebd34.server) {
            throw new _0x32ab7c.ErrnoError(138);
          }
          if (typeof _0x2ebd34.daddr != "undefined" && typeof _0x2ebd34.dport != "undefined") {
            var _0x1eda01 = _0x3bfd5e.websocket_sock_ops.getPeer(_0x2ebd34, _0x2ebd34.daddr, _0x2ebd34.dport);
            if (_0x1eda01) {
              if (_0x1eda01.socket.readyState === _0x1eda01.socket.CONNECTING) {
                throw new _0x32ab7c.ErrnoError(7);
              } else {
                throw new _0x32ab7c.ErrnoError(30);
              }
            }
          }
          var _0x20b338 = _0x3bfd5e.websocket_sock_ops.createPeer(_0x2ebd34, _0x3d781a, _0x337e5f);
          _0x2ebd34.daddr = _0x20b338.addr;
          _0x2ebd34.dport = _0x20b338.port;
          throw new _0x32ab7c.ErrnoError(26);
        },
        listen: function (_0x5772f8, _0x11907c) {
          if (!_0x26b0ad) {
            throw new _0x32ab7c.ErrnoError(138);
          }
          if (_0x5772f8.server) {
            throw new _0x32ab7c.ErrnoError(28);
          }
          var _0x3e7584 = require("ws").Server;
          var _0x5c8de7 = _0x5772f8.saddr;
          _0x5772f8.server = new _0x3e7584({
            host: _0x5c8de7,
            port: _0x5772f8.sport
          });
          _0xbb74bb.websocket.emit("listen", _0x5772f8.stream.fd);
          _0x5772f8.server.on("connection", function (_0x4c2e22) {
            if (_0x5772f8.type === 1) {
              var _0x66c8f4 = _0x3bfd5e.createSocket(_0x5772f8.family, _0x5772f8.type, _0x5772f8.protocol);
              var _0x5c6c4d = _0x3bfd5e.websocket_sock_ops.createPeer(_0x66c8f4, _0x4c2e22);
              _0x66c8f4.daddr = _0x5c6c4d.addr;
              _0x66c8f4.dport = _0x5c6c4d.port;
              _0x5772f8.pending.push(_0x66c8f4);
              _0xbb74bb.websocket.emit("connection", _0x66c8f4.stream.fd);
            } else {
              _0x3bfd5e.websocket_sock_ops.createPeer(_0x5772f8, _0x4c2e22);
              _0xbb74bb.websocket.emit("connection", _0x5772f8.stream.fd);
            }
          });
          _0x5772f8.server.on("closed", function () {
            _0xbb74bb.websocket.emit("close", _0x5772f8.stream.fd);
            _0x5772f8.server = null;
          });
          _0x5772f8.server.on("error", function (_0x49a44c) {
            _0x5772f8.error = 23;
            _0xbb74bb.websocket.emit("error", [_0x5772f8.stream.fd, _0x5772f8.error, "EHOSTUNREACH: Host is unreachable"]);
          });
        },
        accept: function (_0x3901af) {
          if (!_0x3901af.server || !_0x3901af.pending.length) {
            throw new _0x32ab7c.ErrnoError(28);
          }
          var _0x2a3f6e = _0x3901af.pending.shift();
          _0x2a3f6e.stream.flags = _0x3901af.stream.flags;
          return _0x2a3f6e;
        },
        getname: function (_0x54cd2c, _0x32ce58) {
          var _0x2b0995;
          var _0x1e9b1b;
          if (_0x32ce58) {
            if (_0x54cd2c.daddr === undefined || _0x54cd2c.dport === undefined) {
              throw new _0x32ab7c.ErrnoError(53);
            }
            _0x2b0995 = _0x54cd2c.daddr;
            _0x1e9b1b = _0x54cd2c.dport;
          } else {
            _0x2b0995 = _0x54cd2c.saddr || 0;
            _0x1e9b1b = _0x54cd2c.sport || 0;
          }
          return {
            addr: _0x2b0995,
            port: _0x1e9b1b
          };
        },
        sendmsg: function (_0x3aafdb, _0x575d31, _0x11de07, _0x454de1, _0x535926, _0x1c0069) {
          if (_0x3aafdb.type === 2) {
            if (_0x535926 === undefined || _0x1c0069 === undefined) {
              _0x535926 = _0x3aafdb.daddr;
              _0x1c0069 = _0x3aafdb.dport;
            }
            if (_0x535926 === undefined || _0x1c0069 === undefined) {
              throw new _0x32ab7c.ErrnoError(17);
            }
          } else {
            _0x535926 = _0x3aafdb.daddr;
            _0x1c0069 = _0x3aafdb.dport;
          }
          var _0x3c189f = _0x3bfd5e.websocket_sock_ops.getPeer(_0x3aafdb, _0x535926, _0x1c0069);
          if (_0x3aafdb.type === 1) {
            if (!_0x3c189f || _0x3c189f.socket.readyState === _0x3c189f.socket.CLOSING || _0x3c189f.socket.readyState === _0x3c189f.socket.CLOSED) {
              throw new _0x32ab7c.ErrnoError(53);
            } else if (_0x3c189f.socket.readyState === _0x3c189f.socket.CONNECTING) {
              throw new _0x32ab7c.ErrnoError(6);
            }
          }
          if (ArrayBuffer.isView(_0x575d31)) {
            _0x11de07 += _0x575d31.byteOffset;
            _0x575d31 = _0x575d31.buffer;
          }
          var _0xc3a958;
          _0xc3a958 = _0x575d31.slice(_0x11de07, _0x11de07 + _0x454de1);
          if (_0x3aafdb.type === 2) {
            if (!_0x3c189f || _0x3c189f.socket.readyState !== _0x3c189f.socket.OPEN) {
              if (!_0x3c189f || _0x3c189f.socket.readyState === _0x3c189f.socket.CLOSING || _0x3c189f.socket.readyState === _0x3c189f.socket.CLOSED) {
                _0x3c189f = _0x3bfd5e.websocket_sock_ops.createPeer(_0x3aafdb, _0x535926, _0x1c0069);
              }
              _0x3c189f.dgram_send_queue.push(_0xc3a958);
              return _0x454de1;
            }
          }
          try {
            _0x3c189f.socket.send(_0xc3a958);
            return _0x454de1;
          } catch (_0x1a4f41) {
            throw new _0x32ab7c.ErrnoError(28);
          }
        },
        recvmsg: function (_0x330a11, _0x2da695) {
          if (_0x330a11.type === 1 && _0x330a11.server) {
            throw new _0x32ab7c.ErrnoError(53);
          }
          var _0x4c1884 = _0x330a11.recv_queue.shift();
          if (!_0x4c1884) {
            if (_0x330a11.type === 1) {
              var _0x51a249 = _0x3bfd5e.websocket_sock_ops.getPeer(_0x330a11, _0x330a11.daddr, _0x330a11.dport);
              if (!_0x51a249) {
                throw new _0x32ab7c.ErrnoError(53);
              } else if (_0x51a249.socket.readyState === _0x51a249.socket.CLOSING || _0x51a249.socket.readyState === _0x51a249.socket.CLOSED) {
                return null;
              } else {
                throw new _0x32ab7c.ErrnoError(6);
              }
            } else {
              throw new _0x32ab7c.ErrnoError(6);
            }
          }
          var _0x52419f = _0x4c1884.data.byteLength || _0x4c1884.data.length;
          var _0x5bd1b1 = _0x4c1884.data.byteOffset || 0;
          var _0x717cd5 = _0x4c1884.data.buffer || _0x4c1884.data;
          var _0x27c2ea = Math.min(_0x2da695, _0x52419f);
          var _0x1ea623 = {
            buffer: new Uint8Array(_0x717cd5, _0x5bd1b1, _0x27c2ea),
            addr: _0x4c1884.addr,
            port: _0x4c1884.port
          };
          if (_0x330a11.type === 1 && _0x27c2ea < _0x52419f) {
            var _0x7b7b52 = _0x52419f - _0x27c2ea;
            _0x4c1884.data = new Uint8Array(_0x717cd5, _0x5bd1b1 + _0x27c2ea, _0x7b7b52);
            _0x330a11.recv_queue.unshift(_0x4c1884);
          }
          return _0x1ea623;
        }
      }
    };
    function _0x5289c6(_0x345b12) {
      var _0x20a93a = _0x3bfd5e.getSocket(_0x345b12);
      if (!_0x20a93a) {
        throw new _0x32ab7c.ErrnoError(8);
      }
      return _0x20a93a;
    }
    function _0x9e47a6(_0x584612) {
      _0x2f8726[_0x3f616e() >> 2] = _0x584612;
      return _0x584612;
    }
    function _0x157d4c(_0x14abdc) {
      var _0x532190 = _0x14abdc.split(".");
      for (var _0x3dbecf = 0; _0x3dbecf < 4; _0x3dbecf++) {
        var _0x13f8f3 = Number(_0x532190[_0x3dbecf]);
        if (isNaN(_0x13f8f3)) {
          return null;
        }
        _0x532190[_0x3dbecf] = _0x13f8f3;
      }
      return (_0x532190[0] | _0x532190[1] << 8 | _0x532190[2] << 16 | _0x532190[3] << 24) >>> 0;
    }
    function _0x55395c(_0x42c862) {
      return parseInt(_0x42c862);
    }
    function _0x31d591(_0x704b4f) {
      var _0x2d87fb;
      var _0x2886a8;
      var _0x27d0a7;
      var _0xe40258;
      var _0x5734d8 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
      var _0x3f30d5 = [];
      if (!_0x5734d8.test(_0x704b4f)) {
        return null;
      }
      if (_0x704b4f === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      if (_0x704b4f.startsWith("::")) {
        _0x704b4f = _0x704b4f.replace("::", "Z:");
      } else {
        _0x704b4f = _0x704b4f.replace("::", ":Z:");
      }
      if (_0x704b4f.indexOf(".") > 0) {
        _0x704b4f = _0x704b4f.replace(new RegExp("[.]", "g"), ":");
        _0x2d87fb = _0x704b4f.split(":");
        _0x2d87fb[_0x2d87fb.length - 4] = _0x55395c(_0x2d87fb[_0x2d87fb.length - 4]) + _0x55395c(_0x2d87fb[_0x2d87fb.length - 3]) * 256;
        _0x2d87fb[_0x2d87fb.length - 3] = _0x55395c(_0x2d87fb[_0x2d87fb.length - 2]) + _0x55395c(_0x2d87fb[_0x2d87fb.length - 1]) * 256;
        _0x2d87fb = _0x2d87fb.slice(0, _0x2d87fb.length - 2);
      } else {
        _0x2d87fb = _0x704b4f.split(":");
      }
      _0x27d0a7 = 0;
      _0xe40258 = 0;
      for (_0x2886a8 = 0; _0x2886a8 < _0x2d87fb.length; _0x2886a8++) {
        if (typeof _0x2d87fb[_0x2886a8] == "string") {
          if (_0x2d87fb[_0x2886a8] === "Z") {
            for (_0xe40258 = 0; _0xe40258 < 8 - _0x2d87fb.length + 1; _0xe40258++) {
              _0x3f30d5[_0x2886a8 + _0xe40258] = 0;
            }
            _0x27d0a7 = _0xe40258 - 1;
          } else {
            _0x3f30d5[_0x2886a8 + _0x27d0a7] = _0xbe50bd(parseInt(_0x2d87fb[_0x2886a8], 16));
          }
        } else {
          _0x3f30d5[_0x2886a8 + _0x27d0a7] = _0x2d87fb[_0x2886a8];
        }
      }
      return [_0x3f30d5[1] << 16 | _0x3f30d5[0], _0x3f30d5[3] << 16 | _0x3f30d5[2], _0x3f30d5[5] << 16 | _0x3f30d5[4], _0x3f30d5[7] << 16 | _0x3f30d5[6]];
    }
    function _0x4c438a(_0x52ad2d, _0x2bad28, _0x454844, _0x232a68, _0x1de2b4) {
      switch (_0x2bad28) {
        case 2:
          _0x454844 = _0x157d4c(_0x454844);
          _0x490196(_0x52ad2d, 16);
          if (_0x1de2b4) {
            _0x2f8726[_0x1de2b4 >> 2] = 16;
          }
          _0x1f5adc[_0x52ad2d >> 1] = _0x2bad28;
          _0x2f8726[_0x52ad2d + 4 >> 2] = _0x454844;
          _0x1f5adc[_0x52ad2d + 2 >> 1] = _0xbe50bd(_0x232a68);
          break;
        case 10:
          _0x454844 = _0x31d591(_0x454844);
          _0x490196(_0x52ad2d, 28);
          if (_0x1de2b4) {
            _0x2f8726[_0x1de2b4 >> 2] = 28;
          }
          _0x2f8726[_0x52ad2d >> 2] = _0x2bad28;
          _0x2f8726[_0x52ad2d + 8 >> 2] = _0x454844[0];
          _0x2f8726[_0x52ad2d + 12 >> 2] = _0x454844[1];
          _0x2f8726[_0x52ad2d + 16 >> 2] = _0x454844[2];
          _0x2f8726[_0x52ad2d + 20 >> 2] = _0x454844[3];
          _0x1f5adc[_0x52ad2d + 2 >> 1] = _0xbe50bd(_0x232a68);
          break;
        default:
          return 5;
      }
      return 0;
    }
    var _0x33a2cf = {
      address_map: {
        id: 1,
        addrs: {},
        names: {}
      },
      lookup_name: function (_0x1e4760) {
        var _0x1a705c = _0x157d4c(_0x1e4760);
        if (_0x1a705c !== null) {
          return _0x1e4760;
        }
        _0x1a705c = _0x31d591(_0x1e4760);
        if (_0x1a705c !== null) {
          return _0x1e4760;
        }
        var _0x5ecea7;
        if (_0x33a2cf.address_map.addrs[_0x1e4760]) {
          _0x5ecea7 = _0x33a2cf.address_map.addrs[_0x1e4760];
        } else {
          var _0x3bf517 = _0x33a2cf.address_map.id++;
          _0x105928(_0x3bf517 < 65535, "exceeded max address mappings of 65535");
          _0x5ecea7 = "172.29." + (_0x3bf517 & 255) + "." + (_0x3bf517 & 65280);
          _0x33a2cf.address_map.names[_0x5ecea7] = _0x1e4760;
          _0x33a2cf.address_map.addrs[_0x1e4760] = _0x5ecea7;
        }
        return _0x5ecea7;
      },
      lookup_addr: function (_0x172a1c) {
        if (_0x33a2cf.address_map.names[_0x172a1c]) {
          return _0x33a2cf.address_map.names[_0x172a1c];
        }
        return null;
      }
    };
    function _0x4dcedd(_0x2247f4, _0x433a21, _0x59a246, _0xc56b2d) {
      try {
        var _0x506882 = _0x5289c6(_0x2247f4);
        var _0x14b241 = _0x506882.sock_ops.accept(_0x506882);
        if (_0x433a21) {
          var _0x18b20f = _0x4c438a(_0x433a21, _0x14b241.family, _0x33a2cf.lookup_name(_0x14b241.daddr), _0x14b241.dport, _0x59a246);
        }
        return _0x14b241.stream.fd;
      } catch (_0xc1b21b) {
        if (typeof _0x32ab7c == "undefined" || !(_0xc1b21b instanceof _0x32ab7c.ErrnoError)) {
          throw _0xc1b21b;
        }
        return -_0xc1b21b.errno;
      }
    }
    function _0x4d717e(_0x5e2ef8) {
      return (_0x5e2ef8 & 255) + "." + (_0x5e2ef8 >> 8 & 255) + "." + (_0x5e2ef8 >> 16 & 255) + "." + (_0x5e2ef8 >> 24 & 255);
    }
    function _0xcc0a60(_0x12dd5e) {
      var _0xa70f7e = "";
      var _0x11dc0f = 0;
      var _0x50c0ac = 0;
      var _0x10b76d = 0;
      var _0xc0d0d2 = 0;
      var _0x32fa23 = 0;
      var _0x49195f = 0;
      var _0x2fea8a = [_0x12dd5e[0] & 65535, _0x12dd5e[0] >> 16, _0x12dd5e[1] & 65535, _0x12dd5e[1] >> 16, _0x12dd5e[2] & 65535, _0x12dd5e[2] >> 16, _0x12dd5e[3] & 65535, _0x12dd5e[3] >> 16];
      var _0x3b14fb = true;
      var _0x16dca4 = "";
      for (_0x49195f = 0; _0x49195f < 5; _0x49195f++) {
        if (_0x2fea8a[_0x49195f] !== 0) {
          _0x3b14fb = false;
          break;
        }
      }
      if (_0x3b14fb) {
        _0x16dca4 = _0x4d717e(_0x2fea8a[6] | _0x2fea8a[7] << 16);
        if (_0x2fea8a[5] === -1) {
          _0xa70f7e = "::ffff:";
          _0xa70f7e += _0x16dca4;
          return _0xa70f7e;
        }
        if (_0x2fea8a[5] === 0) {
          _0xa70f7e = "::";
          if (_0x16dca4 === "0.0.0.0") {
            _0x16dca4 = "";
          }
          if (_0x16dca4 === "0.0.0.1") {
            _0x16dca4 = "1";
          }
          _0xa70f7e += _0x16dca4;
          return _0xa70f7e;
        }
      }
      for (_0x11dc0f = 0; _0x11dc0f < 8; _0x11dc0f++) {
        if (_0x2fea8a[_0x11dc0f] === 0) {
          if (_0x11dc0f - _0x10b76d > 1) {
            _0x32fa23 = 0;
          }
          _0x10b76d = _0x11dc0f;
          _0x32fa23++;
        }
        if (_0x32fa23 > _0x50c0ac) {
          _0x50c0ac = _0x32fa23;
          _0xc0d0d2 = _0x11dc0f - _0x50c0ac + 1;
        }
      }
      for (_0x11dc0f = 0; _0x11dc0f < 8; _0x11dc0f++) {
        if (_0x50c0ac > 1) {
          if (_0x2fea8a[_0x11dc0f] === 0 && _0x11dc0f >= _0xc0d0d2 && _0x11dc0f < _0xc0d0d2 + _0x50c0ac) {
            if (_0x11dc0f === _0xc0d0d2) {
              _0xa70f7e += ":";
              if (_0xc0d0d2 === 0) {
                _0xa70f7e += ":";
              }
            }
            continue;
          }
        }
        _0xa70f7e += Number(_0x476aca(_0x2fea8a[_0x11dc0f] & 65535)).toString(16);
        _0xa70f7e += _0x11dc0f < 7 ? ":" : "";
      }
      return _0xa70f7e;
    }
    function _0x1bb3fc(_0x24aba1, _0x1b8440) {
      var _0x4f0cc8 = _0x1f5adc[_0x24aba1 >> 1];
      var _0x123a4b = _0x476aca(_0x4cfc45[_0x24aba1 + 2 >> 1]);
      var _0x3a6ece;
      switch (_0x4f0cc8) {
        case 2:
          if (_0x1b8440 !== 16) {
            return {
              errno: 28
            };
          }
          _0x3a6ece = _0x2f8726[_0x24aba1 + 4 >> 2];
          _0x3a6ece = _0x4d717e(_0x3a6ece);
          break;
        case 10:
          if (_0x1b8440 !== 28) {
            return {
              errno: 28
            };
          }
          _0x3a6ece = [_0x2f8726[_0x24aba1 + 8 >> 2], _0x2f8726[_0x24aba1 + 12 >> 2], _0x2f8726[_0x24aba1 + 16 >> 2], _0x2f8726[_0x24aba1 + 20 >> 2]];
          _0x3a6ece = _0xcc0a60(_0x3a6ece);
          break;
        default:
          return {
            errno: 5
          };
      }
      return {
        family: _0x4f0cc8,
        addr: _0x3a6ece,
        port: _0x123a4b
      };
    }
    function _0x4dc3c3(_0x5e6700, _0x19ea3b, _0x38c712) {
      if (_0x38c712 && _0x5e6700 === 0) {
        return null;
      }
      var _0x31ba24 = _0x1bb3fc(_0x5e6700, _0x19ea3b);
      if (_0x31ba24.errno) {
        throw new _0x32ab7c.ErrnoError(_0x31ba24.errno);
      }
      _0x31ba24.addr = _0x33a2cf.lookup_addr(_0x31ba24.addr) || _0x31ba24.addr;
      return _0x31ba24;
    }
    function _0x14b114(_0x1f7c4d, _0x937d38, _0xd75aff) {
      try {
        var _0x370400 = _0x5289c6(_0x1f7c4d);
        var _0x169c10 = _0x4dc3c3(_0x937d38, _0xd75aff);
        _0x370400.sock_ops.bind(_0x370400, _0x169c10.addr, _0x169c10.port);
        return 0;
      } catch (_0x4f5469) {
        if (typeof _0x32ab7c == "undefined" || !(_0x4f5469 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x4f5469;
        }
        return -_0x4f5469.errno;
      }
    }
    function _0x596d17(_0x18ee4c, _0x5460be) {
      try {
        _0x18ee4c = _0x2cd2f2.getStr(_0x18ee4c);
        _0x32ab7c.chmod(_0x18ee4c, _0x5460be);
        return 0;
      } catch (_0x5b80ec) {
        if (typeof _0x32ab7c == "undefined" || !(_0x5b80ec instanceof _0x32ab7c.ErrnoError)) {
          throw _0x5b80ec;
        }
        return -_0x5b80ec.errno;
      }
    }
    function _0x28520d(_0x16b8b7, _0x20b558, _0x9bb0e9) {
      try {
        var _0x5c4c1e = _0x5289c6(_0x16b8b7);
        var _0x368893 = _0x4dc3c3(_0x20b558, _0x9bb0e9);
        _0x5c4c1e.sock_ops.connect(_0x5c4c1e, _0x368893.addr, _0x368893.port);
        return 0;
      } catch (_0x2b4324) {
        if (typeof _0x32ab7c == "undefined" || !(_0x2b4324 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x2b4324;
        }
        return -_0x2b4324.errno;
      }
    }
    function _0x56909c(_0x3bdbbc, _0x2e7532, _0xe42f56) {
      try {
        var _0x2d7eb5 = _0x2cd2f2.getStreamFromFD(_0x3bdbbc);
        if (_0x2d7eb5.fd === _0x2e7532) {
          return -28;
        }
        var _0x1c5313 = _0x32ab7c.getStream(_0x2e7532);
        if (_0x1c5313) {
          _0x32ab7c.close(_0x1c5313);
        }
        return _0x32ab7c.open(_0x2d7eb5.path, _0x2d7eb5.flags, 0, _0x2e7532, _0x2e7532).fd;
      } catch (_0x1a377b) {
        if (typeof _0x32ab7c == "undefined" || !(_0x1a377b instanceof _0x32ab7c.ErrnoError)) {
          throw _0x1a377b;
        }
        return -_0x1a377b.errno;
      }
    }
    function _0x5a4988(_0xb20ae7, _0x412bde, _0x49846b, _0x3dcf75) {
      try {
        _0x412bde = _0x2cd2f2.getStr(_0x412bde);
        _0x412bde = _0x2cd2f2.calculateAt(_0xb20ae7, _0x412bde);
        return _0x2cd2f2.doAccess(_0x412bde, _0x49846b);
      } catch (_0x96aeff) {
        if (typeof _0x32ab7c == "undefined" || !(_0x96aeff instanceof _0x32ab7c.ErrnoError)) {
          throw _0x96aeff;
        }
        return -_0x96aeff.errno;
      }
    }
    function _0x15ff8c(_0x280514, _0x581e34, _0x577118) {
      _0x2cd2f2.varargs = _0x577118;
      try {
        var _0x27f263 = _0x2cd2f2.getStreamFromFD(_0x280514);
        switch (_0x581e34) {
          case 0:
            {
              var _0x33eb83 = _0x2cd2f2.get();
              if (_0x33eb83 < 0) {
                return -28;
              }
              var _0x38f578;
              _0x38f578 = _0x32ab7c.open(_0x27f263.path, _0x27f263.flags, 0, _0x33eb83);
              return _0x38f578.fd;
            }
          case 1:
          case 2:
            return 0;
          case 3:
            return _0x27f263.flags;
          case 4:
            {
              var _0x33eb83 = _0x2cd2f2.get();
              _0x27f263.flags |= _0x33eb83;
              return 0;
            }
          case 5:
            {
              var _0x33eb83 = _0x2cd2f2.get();
              var _0xfa4495 = 0;
              _0x1f5adc[_0x33eb83 + _0xfa4495 >> 1] = 2;
              return 0;
            }
          case 6:
          case 7:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            _0x9e47a6(28);
            return -1;
          default:
            {
              return -28;
            }
        }
      } catch (_0x5f0ffc) {
        if (typeof _0x32ab7c == "undefined" || !(_0x5f0ffc instanceof _0x32ab7c.ErrnoError)) {
          throw _0x5f0ffc;
        }
        return -_0x5f0ffc.errno;
      }
    }
    function _0x3ef157(_0x1fda61, _0x56fa99) {
      try {
        var _0x130f19 = _0x2cd2f2.getStreamFromFD(_0x1fda61);
        return _0x2cd2f2.doStat(_0x32ab7c.stat, _0x130f19.path, _0x56fa99);
      } catch (_0x4e988f) {
        if (typeof _0x32ab7c == "undefined" || !(_0x4e988f instanceof _0x32ab7c.ErrnoError)) {
          throw _0x4e988f;
        }
        return -_0x4e988f.errno;
      }
    }
    function _0x331f25(_0x951b74, _0x279c3e, _0x551620) {
      try {
        var _0x291861 = _0x2cd2f2.get64(_0x279c3e, _0x551620);
        _0x32ab7c.ftruncate(_0x951b74, _0x291861);
        return 0;
      } catch (_0x413295) {
        if (typeof _0x32ab7c == "undefined" || !(_0x413295 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x413295;
        }
        return -_0x413295.errno;
      }
    }
    function _0x3f1819(_0x7290d2, _0x4c3311) {
      try {
        if (_0x4c3311 === 0) {
          return -28;
        }
        var _0x20b345 = _0x32ab7c.cwd();
        var _0x15cebe = _0x53c190(_0x20b345);
        if (_0x4c3311 < _0x15cebe + 1) {
          return -68;
        }
        _0x4fe443(_0x20b345, _0x7290d2, _0x4c3311);
        return _0x7290d2;
      } catch (_0x5c3200) {
        if (typeof _0x32ab7c == "undefined" || !(_0x5c3200 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x5c3200;
        }
        return -_0x5c3200.errno;
      }
    }
    function _0x4f93c5(_0x32a86e, _0xaae4e4, _0x3614ba) {
      try {
        var _0x5e8a5e = _0x2cd2f2.getStreamFromFD(_0x32a86e);
        if (!_0x5e8a5e.getdents) {
          _0x5e8a5e.getdents = _0x32ab7c.readdir(_0x5e8a5e.path);
        }
        var _0x1ef07a = 280;
        var _0x55d430 = 0;
        var _0x125f17 = _0x32ab7c.llseek(_0x5e8a5e, 0, 1);
        var _0x2d5d5a = Math.floor(_0x125f17 / _0x1ef07a);
        while (_0x2d5d5a < _0x5e8a5e.getdents.length && _0x55d430 + _0x1ef07a <= _0x3614ba) {
          var _0x1cb40c;
          var _0x204b60;
          var _0x1d50a5 = _0x5e8a5e.getdents[_0x2d5d5a];
          if (_0x1d50a5 === ".") {
            _0x1cb40c = _0x5e8a5e.node.id;
            _0x204b60 = 4;
          } else if (_0x1d50a5 === "..") {
            var _0x5a9fa6 = _0x32ab7c.lookupPath(_0x5e8a5e.path, {
              parent: true
            });
            _0x1cb40c = _0x5a9fa6.node.id;
            _0x204b60 = 4;
          } else {
            var _0x260559 = _0x32ab7c.lookupNode(_0x5e8a5e.node, _0x1d50a5);
            _0x1cb40c = _0x260559.id;
            _0x204b60 = _0x32ab7c.isChrdev(_0x260559.mode) ? 2 : _0x32ab7c.isDir(_0x260559.mode) ? 4 : _0x32ab7c.isLink(_0x260559.mode) ? 10 : 8;
          }
          _0x3a663e = [_0x1cb40c >>> 0, (_0x19ea61 = _0x1cb40c, +Math.abs(_0x19ea61) >= 1 ? _0x19ea61 > 0 ? (Math.min(+Math.floor(_0x19ea61 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x19ea61 - +(~~_0x19ea61 >>> 0)) / 4294967296) >>> 0 : 0)];
          _0x2f8726[_0xaae4e4 + _0x55d430 >> 2] = _0x3a663e[0];
          _0x2f8726[_0xaae4e4 + _0x55d430 + 4 >> 2] = _0x3a663e[1];
          _0x3a663e = [(_0x2d5d5a + 1) * _0x1ef07a >>> 0, (_0x19ea61 = (_0x2d5d5a + 1) * _0x1ef07a, +Math.abs(_0x19ea61) >= 1 ? _0x19ea61 > 0 ? (Math.min(+Math.floor(_0x19ea61 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x19ea61 - +(~~_0x19ea61 >>> 0)) / 4294967296) >>> 0 : 0)];
          _0x2f8726[_0xaae4e4 + _0x55d430 + 8 >> 2] = _0x3a663e[0];
          _0x2f8726[_0xaae4e4 + _0x55d430 + 12 >> 2] = _0x3a663e[1];
          _0x1f5adc[_0xaae4e4 + _0x55d430 + 16 >> 1] = 280;
          _0x245769[_0xaae4e4 + _0x55d430 + 18 >> 0] = _0x204b60;
          _0x4fe443(_0x1d50a5, _0xaae4e4 + _0x55d430 + 19, 256);
          _0x55d430 += _0x1ef07a;
          _0x2d5d5a += 1;
        }
        _0x32ab7c.llseek(_0x5e8a5e, _0x2d5d5a * _0x1ef07a, 0);
        return _0x55d430;
      } catch (_0x589695) {
        if (typeof _0x32ab7c == "undefined" || !(_0x589695 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x589695;
        }
        return -_0x589695.errno;
      }
    }
    function _0x3b5b50(_0x2066f2, _0xb19f8a, _0x1b99c0) {
      try {
        var _0x492c6d = _0x5289c6(_0x2066f2);
        if (!_0x492c6d.daddr) {
          return -53;
        }
        var _0x4d29a0 = _0x4c438a(_0xb19f8a, _0x492c6d.family, _0x33a2cf.lookup_name(_0x492c6d.daddr), _0x492c6d.dport, _0x1b99c0);
        return 0;
      } catch (_0x459c88) {
        if (typeof _0x32ab7c == "undefined" || !(_0x459c88 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x459c88;
        }
        return -_0x459c88.errno;
      }
    }
    function _0x570f4c(_0x1578f5, _0x142c66, _0x59fb38) {
      try {
        _0x1771de("__syscall_getsockname " + _0x1578f5);
        var _0x502229 = _0x5289c6(_0x1578f5);
        var _0x17227e = _0x4c438a(_0x142c66, _0x502229.family, _0x33a2cf.lookup_name(_0x502229.saddr || "0.0.0.0"), _0x502229.sport, _0x59fb38);
        return 0;
      } catch (_0x68a0b4) {
        if (typeof _0x32ab7c == "undefined" || !(_0x68a0b4 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x68a0b4;
        }
        return -_0x68a0b4.errno;
      }
    }
    function _0x19c6b3(_0x1b7263, _0xc6e79d, _0x390861, _0x199931, _0x3277e0) {
      try {
        var _0x351ae8 = _0x5289c6(_0x1b7263);
        if (_0xc6e79d === 1) {
          if (_0x390861 === 4) {
            _0x2f8726[_0x199931 >> 2] = _0x351ae8.error;
            _0x2f8726[_0x3277e0 >> 2] = 4;
            _0x351ae8.error = null;
            return 0;
          }
        }
        return -50;
      } catch (_0x3d2f57) {
        if (typeof _0x32ab7c == "undefined" || !(_0x3d2f57 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x3d2f57;
        }
        return -_0x3d2f57.errno;
      }
    }
    function _0x45af41(_0x19cd5b, _0x4e08ef, _0x1e934e) {
      _0x2cd2f2.varargs = _0x1e934e;
      try {
        var _0x5cc0e5 = _0x2cd2f2.getStreamFromFD(_0x19cd5b);
        switch (_0x4e08ef) {
          case 21509:
          case 21505:
            {
              if (!_0x5cc0e5.tty) {
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
              if (!_0x5cc0e5.tty) {
                return -59;
              }
              return 0;
            }
          case 21519:
            {
              if (!_0x5cc0e5.tty) {
                return -59;
              }
              var _0x2ed38f = _0x2cd2f2.get();
              _0x2f8726[_0x2ed38f >> 2] = 0;
              return 0;
            }
          case 21520:
            {
              if (!_0x5cc0e5.tty) {
                return -59;
              }
              return -28;
            }
          case 21531:
            {
              var _0x2ed38f = _0x2cd2f2.get();
              return _0x32ab7c.ioctl(_0x5cc0e5, _0x4e08ef, _0x2ed38f);
            }
          case 21523:
            {
              if (!_0x5cc0e5.tty) {
                return -59;
              }
              return 0;
            }
          case 21524:
            {
              if (!_0x5cc0e5.tty) {
                return -59;
              }
              return 0;
            }
          default:
            _0x4e2c55("bad ioctl syscall " + _0x4e08ef);
        }
      } catch (_0x3f2851) {
        if (typeof _0x32ab7c == "undefined" || !(_0x3f2851 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x3f2851;
        }
        return -_0x3f2851.errno;
      }
    }
    function _0x54d0a6(_0x416ee4, _0x8501f7) {
      try {
        var _0x256510 = _0x5289c6(_0x416ee4);
        _0x256510.sock_ops.listen(_0x256510, _0x8501f7);
        return 0;
      } catch (_0x26e3b9) {
        if (typeof _0x32ab7c == "undefined" || !(_0x26e3b9 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x26e3b9;
        }
        return -_0x26e3b9.errno;
      }
    }
    function _0x53bd7c(_0xdadaf1, _0x101f42) {
      try {
        _0xdadaf1 = _0x2cd2f2.getStr(_0xdadaf1);
        return _0x2cd2f2.doStat(_0x32ab7c.lstat, _0xdadaf1, _0x101f42);
      } catch (_0x1189a0) {
        if (typeof _0x32ab7c == "undefined" || !(_0x1189a0 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x1189a0;
        }
        return -_0x1189a0.errno;
      }
    }
    function _0x4661a1(_0x437c76, _0x532c9f) {
      try {
        _0x437c76 = _0x2cd2f2.getStr(_0x437c76);
        return _0x2cd2f2.doMkdir(_0x437c76, _0x532c9f);
      } catch (_0xcfef57) {
        if (typeof _0x32ab7c == "undefined" || !(_0xcfef57 instanceof _0x32ab7c.ErrnoError)) {
          throw _0xcfef57;
        }
        return -_0xcfef57.errno;
      }
    }
    function _0x55a4bc(_0x2eefcd, _0x20f9d3, _0xd391eb, _0x426408) {
      try {
        _0x20f9d3 = _0x2cd2f2.getStr(_0x20f9d3);
        var _0x756627 = _0x426408 & 256;
        var _0x280926 = _0x426408 & 4096;
        _0x426408 = _0x426408 & ~4352;
        _0x20f9d3 = _0x2cd2f2.calculateAt(_0x2eefcd, _0x20f9d3, _0x280926);
        return _0x2cd2f2.doStat(_0x756627 ? _0x32ab7c.lstat : _0x32ab7c.stat, _0x20f9d3, _0xd391eb);
      } catch (_0x4b170b) {
        if (typeof _0x32ab7c == "undefined" || !(_0x4b170b instanceof _0x32ab7c.ErrnoError)) {
          throw _0x4b170b;
        }
        return -_0x4b170b.errno;
      }
    }
    function _0xf87706(_0x44fe76, _0x3b1f4e, _0x994138, _0x18965d) {
      _0x2cd2f2.varargs = _0x18965d;
      try {
        _0x3b1f4e = _0x2cd2f2.getStr(_0x3b1f4e);
        _0x3b1f4e = _0x2cd2f2.calculateAt(_0x44fe76, _0x3b1f4e);
        var _0x52fd7e = _0x18965d ? _0x2cd2f2.get() : 0;
        return _0x32ab7c.open(_0x3b1f4e, _0x994138, _0x52fd7e).fd;
      } catch (_0x16e6c8) {
        if (typeof _0x32ab7c == "undefined" || !(_0x16e6c8 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x16e6c8;
        }
        return -_0x16e6c8.errno;
      }
    }
    var _0x2d79d0 = {
      BUCKET_BUFFER_SIZE: 8192,
      mount: function (_0x4bdfd5) {
        return _0x32ab7c.createNode(null, "/", 16895, 0);
      },
      createPipe: function () {
        var _0x3b55ec = {
          buckets: [],
          refcnt: 2
        };
        _0x3b55ec.buckets.push({
          buffer: new Uint8Array(_0x2d79d0.BUCKET_BUFFER_SIZE),
          offset: 0,
          roffset: 0
        });
        var _0x2735d8 = _0x2d79d0.nextname();
        var _0x48e796 = _0x2d79d0.nextname();
        var _0x45f160 = _0x32ab7c.createNode(_0x2d79d0.root, _0x2735d8, 4096, 0);
        var _0x569e82 = _0x32ab7c.createNode(_0x2d79d0.root, _0x48e796, 4096, 0);
        _0x45f160.pipe = _0x3b55ec;
        _0x569e82.pipe = _0x3b55ec;
        var _0x36608d = _0x32ab7c.createStream({
          path: _0x2735d8,
          node: _0x45f160,
          flags: 0,
          seekable: false,
          stream_ops: _0x2d79d0.stream_ops
        });
        _0x45f160.stream = _0x36608d;
        var _0x5d90a6 = _0x32ab7c.createStream({
          path: _0x48e796,
          node: _0x569e82,
          flags: 1,
          seekable: false,
          stream_ops: _0x2d79d0.stream_ops
        });
        _0x569e82.stream = _0x5d90a6;
        return {
          readable_fd: _0x36608d.fd,
          writable_fd: _0x5d90a6.fd
        };
      },
      stream_ops: {
        poll: function (_0x46eac3) {
          var _0x3788ad = _0x46eac3.node.pipe;
          if ((_0x46eac3.flags & 2097155) === 1) {
            return 260;
          } else if (_0x3788ad.buckets.length > 0) {
            for (var _0x4e7a49 = 0; _0x4e7a49 < _0x3788ad.buckets.length; _0x4e7a49++) {
              var _0x3a31ac = _0x3788ad.buckets[_0x4e7a49];
              if (_0x3a31ac.offset - _0x3a31ac.roffset > 0) {
                return 65;
              }
            }
          }
          return 0;
        },
        ioctl: function (_0x452508, _0x364833, _0x55a2ce) {
          return 28;
        },
        fsync: function (_0x468810) {
          return 28;
        },
        read: function (_0x3767d3, _0x102040, _0x3703b4, _0x15022d, _0x38f05c) {
          var _0x4dc45d = _0x3767d3.node.pipe;
          var _0x167414 = 0;
          for (var _0x2e3f34 = 0; _0x2e3f34 < _0x4dc45d.buckets.length; _0x2e3f34++) {
            var _0x57ad16 = _0x4dc45d.buckets[_0x2e3f34];
            _0x167414 += _0x57ad16.offset - _0x57ad16.roffset;
          }
          _0x105928(_0x102040 instanceof ArrayBuffer || ArrayBuffer.isView(_0x102040));
          var _0x4c114d = _0x102040.subarray(_0x3703b4, _0x3703b4 + _0x15022d);
          if (_0x15022d <= 0) {
            return 0;
          }
          if (_0x167414 == 0) {
            throw new _0x32ab7c.ErrnoError(6);
          }
          var _0x2af945 = Math.min(_0x167414, _0x15022d);
          var _0x62713e = _0x2af945;
          var _0x578475 = 0;
          for (var _0x2e3f34 = 0; _0x2e3f34 < _0x4dc45d.buckets.length; _0x2e3f34++) {
            var _0x54053f = _0x4dc45d.buckets[_0x2e3f34];
            var _0x480614 = _0x54053f.offset - _0x54053f.roffset;
            if (_0x2af945 <= _0x480614) {
              var _0x288fe4 = _0x54053f.buffer.subarray(_0x54053f.roffset, _0x54053f.offset);
              if (_0x2af945 < _0x480614) {
                _0x288fe4 = _0x288fe4.subarray(0, _0x2af945);
                _0x54053f.roffset += _0x2af945;
              } else {
                _0x578475++;
              }
              _0x4c114d.set(_0x288fe4);
              break;
            } else {
              var _0x288fe4 = _0x54053f.buffer.subarray(_0x54053f.roffset, _0x54053f.offset);
              _0x4c114d.set(_0x288fe4);
              _0x4c114d = _0x4c114d.subarray(_0x288fe4.byteLength);
              _0x2af945 -= _0x288fe4.byteLength;
              _0x578475++;
            }
          }
          if (_0x578475 && _0x578475 == _0x4dc45d.buckets.length) {
            _0x578475--;
            _0x4dc45d.buckets[_0x578475].offset = 0;
            _0x4dc45d.buckets[_0x578475].roffset = 0;
          }
          _0x4dc45d.buckets.splice(0, _0x578475);
          return _0x62713e;
        },
        write: function (_0x31c460, _0x5b72fd, _0xae80d1, _0x159d71, _0x1ee5f0) {
          var _0x51f6da = _0x31c460.node.pipe;
          _0x105928(_0x5b72fd instanceof ArrayBuffer || ArrayBuffer.isView(_0x5b72fd));
          var _0x5f51b0 = _0x5b72fd.subarray(_0xae80d1, _0xae80d1 + _0x159d71);
          var _0x21963c = _0x5f51b0.byteLength;
          if (_0x21963c <= 0) {
            return 0;
          }
          var _0x5063f6 = null;
          if (_0x51f6da.buckets.length == 0) {
            _0x5063f6 = {
              buffer: new Uint8Array(_0x2d79d0.BUCKET_BUFFER_SIZE),
              offset: 0,
              roffset: 0
            };
            _0x51f6da.buckets.push(_0x5063f6);
          } else {
            _0x5063f6 = _0x51f6da.buckets[_0x51f6da.buckets.length - 1];
          }
          _0x105928(_0x5063f6.offset <= _0x2d79d0.BUCKET_BUFFER_SIZE);
          var _0x275ecf = _0x2d79d0.BUCKET_BUFFER_SIZE - _0x5063f6.offset;
          if (_0x275ecf >= _0x21963c) {
            _0x5063f6.buffer.set(_0x5f51b0, _0x5063f6.offset);
            _0x5063f6.offset += _0x21963c;
            return _0x21963c;
          } else if (_0x275ecf > 0) {
            _0x5063f6.buffer.set(_0x5f51b0.subarray(0, _0x275ecf), _0x5063f6.offset);
            _0x5063f6.offset += _0x275ecf;
            _0x5f51b0 = _0x5f51b0.subarray(_0x275ecf, _0x5f51b0.byteLength);
          }
          var _0x27dae6 = _0x5f51b0.byteLength / _0x2d79d0.BUCKET_BUFFER_SIZE | 0;
          var _0x20475b = _0x5f51b0.byteLength % _0x2d79d0.BUCKET_BUFFER_SIZE;
          for (var _0x2eb581 = 0; _0x2eb581 < _0x27dae6; _0x2eb581++) {
            var _0x5e2cf3 = {
              buffer: new Uint8Array(_0x2d79d0.BUCKET_BUFFER_SIZE),
              offset: _0x2d79d0.BUCKET_BUFFER_SIZE,
              roffset: 0
            };
            _0x51f6da.buckets.push(_0x5e2cf3);
            _0x5e2cf3.buffer.set(_0x5f51b0.subarray(0, _0x2d79d0.BUCKET_BUFFER_SIZE));
            _0x5f51b0 = _0x5f51b0.subarray(_0x2d79d0.BUCKET_BUFFER_SIZE, _0x5f51b0.byteLength);
          }
          if (_0x20475b > 0) {
            var _0x5e2cf3 = {
              buffer: new Uint8Array(_0x2d79d0.BUCKET_BUFFER_SIZE),
              offset: _0x5f51b0.byteLength,
              roffset: 0
            };
            _0x51f6da.buckets.push(_0x5e2cf3);
            _0x5e2cf3.buffer.set(_0x5f51b0);
          }
          return _0x21963c;
        },
        close: function (_0xaa8bd1) {
          var _0x2197a9 = _0xaa8bd1.node.pipe;
          _0x2197a9.refcnt--;
          if (_0x2197a9.refcnt === 0) {
            _0x2197a9.buckets = null;
          }
        }
      },
      nextname: function () {
        if (!_0x2d79d0.nextname.current) {
          _0x2d79d0.nextname.current = 0;
        }
        return "pipe[" + _0x2d79d0.nextname.current++ + "]";
      }
    };
    function _0x294cdf(_0x5edd82) {
      try {
        if (_0x5edd82 == 0) {
          throw new _0x32ab7c.ErrnoError(21);
        }
        var _0x1eae9d = _0x2d79d0.createPipe();
        _0x2f8726[_0x5edd82 >> 2] = _0x1eae9d.readable_fd;
        _0x2f8726[_0x5edd82 + 4 >> 2] = _0x1eae9d.writable_fd;
        return 0;
      } catch (_0x23e43a) {
        if (typeof _0x32ab7c == "undefined" || !(_0x23e43a instanceof _0x32ab7c.ErrnoError)) {
          throw _0x23e43a;
        }
        return -_0x23e43a.errno;
      }
    }
    function _0x2a8bf3(_0x1ef95d, _0x25120c, _0x52761c) {
      try {
        var _0x306151 = 0;
        for (var _0x2a4a1 = 0; _0x2a4a1 < _0x25120c; _0x2a4a1++) {
          var _0x4ae011 = _0x1ef95d + _0x2a4a1 * 8;
          var _0x26d655 = _0x2f8726[_0x4ae011 >> 2];
          var _0x38d544 = _0x1f5adc[_0x4ae011 + 4 >> 1];
          var _0x17b1d9 = 32;
          var _0x2e7b24 = _0x32ab7c.getStream(_0x26d655);
          if (_0x2e7b24) {
            _0x17b1d9 = _0x2cd2f2.DEFAULT_POLLMASK;
            if (_0x2e7b24.stream_ops.poll) {
              _0x17b1d9 = _0x2e7b24.stream_ops.poll(_0x2e7b24);
            }
          }
          _0x17b1d9 &= _0x38d544 | 8 | 16;
          if (_0x17b1d9) {
            _0x306151++;
          }
          _0x1f5adc[_0x4ae011 + 6 >> 1] = _0x17b1d9;
        }
        return _0x306151;
      } catch (_0x5aaf50) {
        if (typeof _0x32ab7c == "undefined" || !(_0x5aaf50 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x5aaf50;
        }
        return -_0x5aaf50.errno;
      }
    }
    function _0x2505a7(_0x3d5df2, _0x137f91, _0x20e06c, _0x3b3b55) {
      try {
        _0x137f91 = _0x2cd2f2.getStr(_0x137f91);
        _0x137f91 = _0x2cd2f2.calculateAt(_0x3d5df2, _0x137f91);
        return _0x2cd2f2.doReadlink(_0x137f91, _0x20e06c, _0x3b3b55);
      } catch (_0x2f8106) {
        if (typeof _0x32ab7c == "undefined" || !(_0x2f8106 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x2f8106;
        }
        return -_0x2f8106.errno;
      }
    }
    function _0x264257(_0x2a452f, _0x1638a9, _0x407b3b, _0x24ba42, _0x37bc17, _0x5b6052) {
      try {
        var _0x8d5845 = _0x5289c6(_0x2a452f);
        var _0x525d11 = _0x8d5845.sock_ops.recvmsg(_0x8d5845, _0x407b3b);
        if (!_0x525d11) {
          return 0;
        }
        if (_0x37bc17) {
          var _0x787867 = _0x4c438a(_0x37bc17, _0x8d5845.family, _0x33a2cf.lookup_name(_0x525d11.addr), _0x525d11.port, _0x5b6052);
        }
        _0x4924c2.set(_0x525d11.buffer, _0x1638a9);
        return _0x525d11.buffer.byteLength;
      } catch (_0x30bc13) {
        if (typeof _0x32ab7c == "undefined" || !(_0x30bc13 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x30bc13;
        }
        return -_0x30bc13.errno;
      }
    }
    function _0x502e3a(_0x311d1b, _0x431c3d, _0x32baab) {
      try {
        var _0x58343a = _0x5289c6(_0x311d1b);
        var _0x4ba224 = _0x2f8726[_0x431c3d + 8 >> 2];
        var _0x318f53 = _0x2f8726[_0x431c3d + 12 >> 2];
        var _0x33ac27 = 0;
        for (var _0x313218 = 0; _0x313218 < _0x318f53; _0x313218++) {
          _0x33ac27 += _0x2f8726[_0x4ba224 + (_0x313218 * 8 + 4) >> 2];
        }
        var _0x505995 = _0x58343a.sock_ops.recvmsg(_0x58343a, _0x33ac27);
        if (!_0x505995) {
          return 0;
        }
        var _0x5cc90 = _0x2f8726[_0x431c3d >> 2];
        if (_0x5cc90) {
          var _0x33e10e = _0x4c438a(_0x5cc90, _0x58343a.family, _0x33a2cf.lookup_name(_0x505995.addr), _0x505995.port);
        }
        var _0x342e7d = 0;
        var _0x48c905 = _0x505995.buffer.byteLength;
        for (var _0x313218 = 0; _0x48c905 > 0 && _0x313218 < _0x318f53; _0x313218++) {
          var _0xf851ef = _0x2f8726[_0x4ba224 + (_0x313218 * 8 + 0) >> 2];
          var _0x1d8cf2 = _0x2f8726[_0x4ba224 + (_0x313218 * 8 + 4) >> 2];
          if (!_0x1d8cf2) {
            continue;
          }
          var _0x18e5a8 = Math.min(_0x1d8cf2, _0x48c905);
          var _0xb2bfac = _0x505995.buffer.subarray(_0x342e7d, _0x342e7d + _0x18e5a8);
          _0x4924c2.set(_0xb2bfac, _0xf851ef + _0x342e7d);
          _0x342e7d += _0x18e5a8;
          _0x48c905 -= _0x18e5a8;
        }
        return _0x342e7d;
      } catch (_0xc5a92b) {
        if (typeof _0x32ab7c == "undefined" || !(_0xc5a92b instanceof _0x32ab7c.ErrnoError)) {
          throw _0xc5a92b;
        }
        return -_0xc5a92b.errno;
      }
    }
    function _0x483289(_0x45246f, _0x52c097, _0x260da7, _0x282830) {
      try {
        _0x52c097 = _0x2cd2f2.getStr(_0x52c097);
        _0x282830 = _0x2cd2f2.getStr(_0x282830);
        _0x52c097 = _0x2cd2f2.calculateAt(_0x45246f, _0x52c097);
        _0x282830 = _0x2cd2f2.calculateAt(_0x260da7, _0x282830);
        _0x32ab7c.rename(_0x52c097, _0x282830);
        return 0;
      } catch (_0x32aa48) {
        if (typeof _0x32ab7c == "undefined" || !(_0x32aa48 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x32aa48;
        }
        return -_0x32aa48.errno;
      }
    }
    function _0x17115f(_0x1c953d) {
      try {
        _0x1c953d = _0x2cd2f2.getStr(_0x1c953d);
        _0x32ab7c.rmdir(_0x1c953d);
        return 0;
      } catch (_0x3af50c) {
        if (typeof _0x32ab7c == "undefined" || !(_0x3af50c instanceof _0x32ab7c.ErrnoError)) {
          throw _0x3af50c;
        }
        return -_0x3af50c.errno;
      }
    }
    function _0xf23d90(_0x4c9e65, _0x5c5641, _0x85a5e2) {
      try {
        var _0x38f1f0 = _0x5289c6(_0x4c9e65);
        var _0x1f62c1 = _0x2f8726[_0x5c5641 + 8 >> 2];
        var _0x1ec09a = _0x2f8726[_0x5c5641 + 12 >> 2];
        var _0x1540db;
        var _0x919c67;
        var _0xf1a44e = _0x2f8726[_0x5c5641 >> 2];
        var _0x5934a8 = _0x2f8726[_0x5c5641 + 4 >> 2];
        if (_0xf1a44e) {
          var _0x407b33 = _0x1bb3fc(_0xf1a44e, _0x5934a8);
          if (_0x407b33.errno) {
            return -_0x407b33.errno;
          }
          _0x919c67 = _0x407b33.port;
          _0x1540db = _0x33a2cf.lookup_addr(_0x407b33.addr) || _0x407b33.addr;
        }
        var _0x57bc32 = 0;
        for (var _0x268b73 = 0; _0x268b73 < _0x1ec09a; _0x268b73++) {
          _0x57bc32 += _0x2f8726[_0x1f62c1 + (_0x268b73 * 8 + 4) >> 2];
        }
        var _0x53fa71 = new Uint8Array(_0x57bc32);
        var _0x244298 = 0;
        for (var _0x268b73 = 0; _0x268b73 < _0x1ec09a; _0x268b73++) {
          var _0x44a4a4 = _0x2f8726[_0x1f62c1 + (_0x268b73 * 8 + 0) >> 2];
          var _0x117e0a = _0x2f8726[_0x1f62c1 + (_0x268b73 * 8 + 4) >> 2];
          for (var _0x34cfe4 = 0; _0x34cfe4 < _0x117e0a; _0x34cfe4++) {
            _0x53fa71[_0x244298++] = _0x245769[_0x44a4a4 + _0x34cfe4 >> 0];
          }
        }
        return _0x38f1f0.sock_ops.sendmsg(_0x38f1f0, _0x53fa71, 0, _0x57bc32, _0x1540db, _0x919c67);
      } catch (_0xb5d171) {
        if (typeof _0x32ab7c == "undefined" || !(_0xb5d171 instanceof _0x32ab7c.ErrnoError)) {
          throw _0xb5d171;
        }
        return -_0xb5d171.errno;
      }
    }
    function _0x47a429(_0x54580e, _0x2a71a7, _0x32e814, _0xc8eb30, _0x1040c7, _0x1407bb) {
      try {
        var _0x233242 = _0x5289c6(_0x54580e);
        var _0x1ed818 = _0x4dc3c3(_0x1040c7, _0x1407bb, true);
        if (!_0x1ed818) {
          return _0x32ab7c.write(_0x233242.stream, _0x245769, _0x2a71a7, _0x32e814);
        } else {
          return _0x233242.sock_ops.sendmsg(_0x233242, _0x245769, _0x2a71a7, _0x32e814, _0x1ed818.addr, _0x1ed818.port);
        }
      } catch (_0x29d1fd) {
        if (typeof _0x32ab7c == "undefined" || !(_0x29d1fd instanceof _0x32ab7c.ErrnoError)) {
          throw _0x29d1fd;
        }
        return -_0x29d1fd.errno;
      }
    }
    function _0x70b29e(_0x89e114, _0x4904f3, _0xa32758) {
      try {
        var _0x35c26e = _0x3bfd5e.createSocket(_0x89e114, _0x4904f3, _0xa32758);
        return _0x35c26e.stream.fd;
      } catch (_0xfaf0b1) {
        if (typeof _0x32ab7c == "undefined" || !(_0xfaf0b1 instanceof _0x32ab7c.ErrnoError)) {
          throw _0xfaf0b1;
        }
        return -_0xfaf0b1.errno;
      }
    }
    function _0x572da0(_0x3cf9b8, _0x2f333c) {
      try {
        _0x3cf9b8 = _0x2cd2f2.getStr(_0x3cf9b8);
        return _0x2cd2f2.doStat(_0x32ab7c.stat, _0x3cf9b8, _0x2f333c);
      } catch (_0x3466ad) {
        if (typeof _0x32ab7c == "undefined" || !(_0x3466ad instanceof _0x32ab7c.ErrnoError)) {
          throw _0x3466ad;
        }
        return -_0x3466ad.errno;
      }
    }
    function _0x32d8fc(_0xa6d71f, _0x3e3b7c, _0x1136f1) {
      try {
        _0xa6d71f = _0x2cd2f2.getStr(_0xa6d71f);
        _0x2f8726[_0x1136f1 + 4 >> 2] = 4096;
        _0x2f8726[_0x1136f1 + 40 >> 2] = 4096;
        _0x2f8726[_0x1136f1 + 8 >> 2] = 1000000;
        _0x2f8726[_0x1136f1 + 12 >> 2] = 500000;
        _0x2f8726[_0x1136f1 + 16 >> 2] = 500000;
        _0x2f8726[_0x1136f1 + 20 >> 2] = _0x32ab7c.nextInode;
        _0x2f8726[_0x1136f1 + 24 >> 2] = 1000000;
        _0x2f8726[_0x1136f1 + 28 >> 2] = 42;
        _0x2f8726[_0x1136f1 + 44 >> 2] = 2;
        _0x2f8726[_0x1136f1 + 36 >> 2] = 255;
        return 0;
      } catch (_0x4fa3a4) {
        if (typeof _0x32ab7c == "undefined" || !(_0x4fa3a4 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x4fa3a4;
        }
        return -_0x4fa3a4.errno;
      }
    }
    function _0x1fafd2(_0x2dc9a1, _0x430265) {
      try {
        _0x2dc9a1 = _0x2cd2f2.getStr(_0x2dc9a1);
        _0x430265 = _0x2cd2f2.getStr(_0x430265);
        _0x32ab7c.symlink(_0x2dc9a1, _0x430265);
        return 0;
      } catch (_0xc1af7f) {
        if (typeof _0x32ab7c == "undefined" || !(_0xc1af7f instanceof _0x32ab7c.ErrnoError)) {
          throw _0xc1af7f;
        }
        return -_0xc1af7f.errno;
      }
    }
    function _0x1533a0(_0x8e8665, _0x5c06f4, _0x50ab11) {
      try {
        _0x8e8665 = _0x2cd2f2.getStr(_0x8e8665);
        var _0x1755d6 = _0x2cd2f2.get64(_0x5c06f4, _0x50ab11);
        _0x32ab7c.truncate(_0x8e8665, _0x1755d6);
        return 0;
      } catch (_0x4a08bd) {
        if (typeof _0x32ab7c == "undefined" || !(_0x4a08bd instanceof _0x32ab7c.ErrnoError)) {
          throw _0x4a08bd;
        }
        return -_0x4a08bd.errno;
      }
    }
    function _0x3d28de(_0x542c5b, _0xaaf535, _0xdab526) {
      try {
        _0xaaf535 = _0x2cd2f2.getStr(_0xaaf535);
        _0xaaf535 = _0x2cd2f2.calculateAt(_0x542c5b, _0xaaf535);
        if (_0xdab526 === 0) {
          _0x32ab7c.unlink(_0xaaf535);
        } else if (_0xdab526 === 512) {
          _0x32ab7c.rmdir(_0xaaf535);
        } else {
          _0x4e2c55("Invalid flags passed to unlinkat");
        }
        return 0;
      } catch (_0x2f06e2) {
        if (typeof _0x32ab7c == "undefined" || !(_0x2f06e2 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x2f06e2;
        }
        return -_0x2f06e2.errno;
      }
    }
    function _0x144b21(_0x27fa0e, _0x17aaeb, _0x1b017d, _0x11d5a9) {
      try {
        _0x17aaeb = _0x2cd2f2.getStr(_0x17aaeb);
        _0x17aaeb = _0x2cd2f2.calculateAt(_0x27fa0e, _0x17aaeb, true);
        if (!_0x1b017d) {
          var _0x5b2d5f = Date.now();
          var _0x1bbdc4 = _0x5b2d5f;
        } else {
          var _0x5dfad3 = _0x2f8726[_0x1b017d >> 2];
          var _0x2c5a2e = _0x2f8726[_0x1b017d + 4 >> 2];
          _0x5b2d5f = _0x5dfad3 * 1000 + _0x2c5a2e / 1000000;
          _0x1b017d += 8;
          _0x5dfad3 = _0x2f8726[_0x1b017d >> 2];
          _0x2c5a2e = _0x2f8726[_0x1b017d + 4 >> 2];
          _0x1bbdc4 = _0x5dfad3 * 1000 + _0x2c5a2e / 1000000;
        }
        _0x32ab7c.utime(_0x17aaeb, _0x5b2d5f, _0x1bbdc4);
        return 0;
      } catch (_0x24e526) {
        if (typeof _0x32ab7c == "undefined" || !(_0x24e526 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x24e526;
        }
        return -_0x24e526.errno;
      }
    }
    var _0x1a207a = 0;
    function _0x498dad(_0x3eb4e6) {
      var _0x11a7b3 = !_0x1a207a;
      _0x1a207a = 1;
      return _0x11a7b3;
    }
    function _0x4cc20b(_0x373d48, _0x11c4ed) {
      return 0;
    }
    function _0x185c8a() {
      return Date.now();
    }
    var _0x108ca3 = true;
    function _0xe0caaf() {
      return _0x108ca3;
    }
    function _0x22d8e0() {
      throw Infinity;
    }
    function _0x54bcfa(_0x533773, _0x3e183c) {
      var _0x1745af = new Date(_0x2f8726[_0x533773 >> 2] * 1000);
      _0x2f8726[_0x3e183c >> 2] = _0x1745af.getUTCSeconds();
      _0x2f8726[_0x3e183c + 4 >> 2] = _0x1745af.getUTCMinutes();
      _0x2f8726[_0x3e183c + 8 >> 2] = _0x1745af.getUTCHours();
      _0x2f8726[_0x3e183c + 12 >> 2] = _0x1745af.getUTCDate();
      _0x2f8726[_0x3e183c + 16 >> 2] = _0x1745af.getUTCMonth();
      _0x2f8726[_0x3e183c + 20 >> 2] = _0x1745af.getUTCFullYear() - 1900;
      _0x2f8726[_0x3e183c + 24 >> 2] = _0x1745af.getUTCDay();
      var _0xa9c596 = Date.UTC(_0x1745af.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var _0x3373c3 = (_0x1745af.getTime() - _0xa9c596) / 86400000 | 0;
      _0x2f8726[_0x3e183c + 28 >> 2] = _0x3373c3;
    }
    function _0x24b61c(_0x189ab3, _0x8713c5) {
      var _0x53bf81 = new Date(_0x2f8726[_0x189ab3 >> 2] * 1000);
      _0x2f8726[_0x8713c5 >> 2] = _0x53bf81.getSeconds();
      _0x2f8726[_0x8713c5 + 4 >> 2] = _0x53bf81.getMinutes();
      _0x2f8726[_0x8713c5 + 8 >> 2] = _0x53bf81.getHours();
      _0x2f8726[_0x8713c5 + 12 >> 2] = _0x53bf81.getDate();
      _0x2f8726[_0x8713c5 + 16 >> 2] = _0x53bf81.getMonth();
      _0x2f8726[_0x8713c5 + 20 >> 2] = _0x53bf81.getFullYear() - 1900;
      _0x2f8726[_0x8713c5 + 24 >> 2] = _0x53bf81.getDay();
      var _0xcc7710 = new Date(_0x53bf81.getFullYear(), 0, 1);
      var _0x4c9153 = (_0x53bf81.getTime() - _0xcc7710.getTime()) / 86400000 | 0;
      _0x2f8726[_0x8713c5 + 28 >> 2] = _0x4c9153;
      _0x2f8726[_0x8713c5 + 36 >> 2] = -(_0x53bf81.getTimezoneOffset() * 60);
      var _0x3525ec = new Date(_0x53bf81.getFullYear(), 6, 1).getTimezoneOffset();
      var _0x483248 = _0xcc7710.getTimezoneOffset();
      var _0x1ec571 = (_0x3525ec != _0x483248 && _0x53bf81.getTimezoneOffset() == Math.min(_0x483248, _0x3525ec)) | 0;
      _0x2f8726[_0x8713c5 + 32 >> 2] = _0x1ec571;
    }
    function _0x1dc046(_0x1ad9d8) {
      var _0x58d6e3 = new Date(_0x2f8726[_0x1ad9d8 + 20 >> 2] + 1900, _0x2f8726[_0x1ad9d8 + 16 >> 2], _0x2f8726[_0x1ad9d8 + 12 >> 2], _0x2f8726[_0x1ad9d8 + 8 >> 2], _0x2f8726[_0x1ad9d8 + 4 >> 2], _0x2f8726[_0x1ad9d8 >> 2], 0);
      var _0x5d8bb7 = _0x2f8726[_0x1ad9d8 + 32 >> 2];
      var _0x53589c = _0x58d6e3.getTimezoneOffset();
      var _0x157d7f = new Date(_0x58d6e3.getFullYear(), 0, 1);
      var _0x34f1c9 = new Date(_0x58d6e3.getFullYear(), 6, 1).getTimezoneOffset();
      var _0x1df3e6 = _0x157d7f.getTimezoneOffset();
      var _0x2e7a7a = Math.min(_0x1df3e6, _0x34f1c9);
      if (_0x5d8bb7 < 0) {
        _0x2f8726[_0x1ad9d8 + 32 >> 2] = Number(_0x34f1c9 != _0x1df3e6 && _0x2e7a7a == _0x53589c);
      } else if (_0x5d8bb7 > 0 != (_0x2e7a7a == _0x53589c)) {
        var _0x45b16c = Math.max(_0x1df3e6, _0x34f1c9);
        var _0x563a63 = _0x5d8bb7 > 0 ? _0x2e7a7a : _0x45b16c;
        _0x58d6e3.setTime(_0x58d6e3.getTime() + (_0x563a63 - _0x53589c) * 60000);
      }
      _0x2f8726[_0x1ad9d8 + 24 >> 2] = _0x58d6e3.getDay();
      var _0x42a44c = (_0x58d6e3.getTime() - _0x157d7f.getTime()) / 86400000 | 0;
      _0x2f8726[_0x1ad9d8 + 28 >> 2] = _0x42a44c;
      _0x2f8726[_0x1ad9d8 >> 2] = _0x58d6e3.getSeconds();
      _0x2f8726[_0x1ad9d8 + 4 >> 2] = _0x58d6e3.getMinutes();
      _0x2f8726[_0x1ad9d8 + 8 >> 2] = _0x58d6e3.getHours();
      _0x2f8726[_0x1ad9d8 + 12 >> 2] = _0x58d6e3.getDate();
      _0x2f8726[_0x1ad9d8 + 16 >> 2] = _0x58d6e3.getMonth();
      return _0x58d6e3.getTime() / 1000 | 0;
    }
    function _0x30f267(_0x59c7e2, _0x28b6dc, _0x1b651f, _0x44295c, _0x3ae1f9, _0x14a6eb) {
      try {
        var _0x3f38b3 = _0x32ab7c.getStream(_0x3ae1f9);
        if (_0x3f38b3) {
          if (_0x1b651f & 2) {
            _0x2cd2f2.doMsync(_0x59c7e2, _0x3f38b3, _0x28b6dc, _0x44295c, _0x14a6eb);
          }
          _0x32ab7c.munmap(_0x3f38b3);
        }
      } catch (_0x444b0a) {
        if (typeof _0x32ab7c == "undefined" || !(_0x444b0a instanceof _0x32ab7c.ErrnoError)) {
          throw _0x444b0a;
        }
        return -_0x444b0a.errno;
      }
    }
    function _0x5debc5(_0x1804ec, _0x57bd2b, _0x37a38b) {
      var _0x2a3ad6 = new Date().getFullYear();
      var _0x389d9b = new Date(_0x2a3ad6, 0, 1);
      var _0x15a621 = new Date(_0x2a3ad6, 6, 1);
      var _0x373238 = _0x389d9b.getTimezoneOffset();
      var _0x309249 = _0x15a621.getTimezoneOffset();
      var _0x3630c5 = Math.max(_0x373238, _0x309249);
      _0x2f8726[_0x1804ec >> 2] = _0x3630c5 * 60;
      _0x2f8726[_0x57bd2b >> 2] = Number(_0x373238 != _0x309249);
      function _0x439afd(_0xc0fbf9) {
        var _0x162834 = _0xc0fbf9.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        if (_0x162834) {
          return _0x162834[1];
        } else {
          return "GMT";
        }
      }
      var _0x305854 = _0x439afd(_0x389d9b);
      var _0x4c550b = _0x439afd(_0x15a621);
      var _0x42b475 = _0x59cbb4(_0x305854);
      var _0x5bd814 = _0x59cbb4(_0x4c550b);
      if (_0x309249 < _0x373238) {
        _0x2f8726[_0x37a38b >> 2] = _0x42b475;
        _0x2f8726[_0x37a38b + 4 >> 2] = _0x5bd814;
      } else {
        _0x2f8726[_0x37a38b >> 2] = _0x5bd814;
        _0x2f8726[_0x37a38b + 4 >> 2] = _0x42b475;
      }
    }
    function _0x364515(_0x47e79a, _0x53d2b3, _0x5602ca) {
      if (_0x364515.called) {
        return;
      }
      _0x364515.called = true;
      _0x5debc5(_0x47e79a, _0x53d2b3, _0x5602ca);
    }
    function _0x7f2f68() {
      _0x4e2c55("");
    }
    var _0x196cfc = [];
    function _0x5265b2(_0x19a56f, _0x921860) {
      _0x196cfc.length = 0;
      var _0x5b3ea6;
      _0x921860 >>= 2;
      while (_0x5b3ea6 = _0x4924c2[_0x19a56f++]) {
        var _0x480fac = _0x5b3ea6 < 105;
        if (_0x480fac && _0x921860 & 1) {
          _0x921860++;
        }
        _0x196cfc.push(_0x480fac ? _0x537a20[_0x921860++ >> 1] : _0x2f8726[_0x921860]);
        ++_0x921860;
      }
      return _0x196cfc;
    }
    function _0x1e9f50(_0x2b6a29, _0x314db8, _0x2c6faa, _0x2f2248) {
      var _0x3f69c9 = _0x5265b2(_0x314db8, _0x2c6faa);
      return _0x2ccda1[_0x2b6a29].apply(null, _0x3f69c9);
    }
    function _0x3ca8cf(_0x235917, _0x36e13f, _0x5ddb50) {
      return _0x1e9f50(_0x235917, _0x36e13f, _0x5ddb50, 1);
    }
    function _0x27d3b3(_0x3230e6, _0x22856d) {
      _0x4b67c5.mainLoop.timingMode = _0x3230e6;
      _0x4b67c5.mainLoop.timingValue = _0x22856d;
      if (!_0x4b67c5.mainLoop.func) {
        return 1;
      }
      if (!_0x4b67c5.mainLoop.running) {
        _0x4b67c5.mainLoop.running = true;
      }
      if (_0x3230e6 == 0) {
        _0x4b67c5.mainLoop.scheduler = function _0x456267() {
          var _0x361fe1 = Math.max(0, _0x4b67c5.mainLoop.tickStartTime + _0x22856d - _0x896648()) | 0;
          setTimeout(_0x4b67c5.mainLoop.runner, _0x361fe1);
        };
        _0x4b67c5.mainLoop.method = "timeout";
      } else if (_0x3230e6 == 1) {
        _0x4b67c5.mainLoop.scheduler = function _0x4868b7() {
          _0x4b67c5.requestAnimationFrame(_0x4b67c5.mainLoop.runner);
        };
        _0x4b67c5.mainLoop.method = "rAF";
      } else if (_0x3230e6 == 2) {
        if (typeof setImmediate == "undefined") {
          var _0x311c46 = [];
          var _0x2f227a = "setimmediate";
          var _0x14bcb8 = function (_0x26c1a1) {
            if (_0x26c1a1.data === _0x2f227a || _0x26c1a1.data.target === _0x2f227a) {
              _0x26c1a1.stopPropagation();
              _0x311c46.shift()();
            }
          };
          addEventListener("message", _0x14bcb8, true);
          setImmediate = function _0x406a5e(_0x56789a) {
            _0x311c46.push(_0x56789a);
            if (_0x173e83) {
              if (_0xbb74bb.setImmediates === undefined) {
                _0xbb74bb.setImmediates = [];
              }
              _0xbb74bb.setImmediates.push(_0x56789a);
              postMessage({
                target: _0x2f227a
              });
            } else {
              postMessage(_0x2f227a, "*");
            }
          };
        }
        _0x4b67c5.mainLoop.scheduler = function _0x365a8c() {
          setImmediate(_0x4b67c5.mainLoop.runner);
        };
        _0x4b67c5.mainLoop.method = "immediate";
      }
      return 0;
    }
    var _0x896648;
    if (_0x26b0ad) {
      _0x896648 = () => {
        var _0x590995 = process.hrtime();
        return _0x590995[0] * 1000 + _0x590995[1] / 1000000;
      };
    } else {
      _0x896648 = () => performance.now();
    }
    function _0x13d4ef(_0x496b21) {
      _0x3d19a6(_0x496b21);
    }
    function _0x37ab0e() {}
    function _0x21a349(_0x4648e9, _0x564000, _0x4dc08e, _0x498993, _0x23696c) {
      _0x105928(!_0x4b67c5.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
      _0x4b67c5.mainLoop.func = _0x4648e9;
      _0x4b67c5.mainLoop.arg = _0x498993;
      var _0x578ab5 = _0x4b67c5.mainLoop.currentlyRunningMainloop;
      function _0x2428f5() {
        if (_0x578ab5 < _0x4b67c5.mainLoop.currentlyRunningMainloop) {
          _0x37ab0e();
          return false;
        }
        return true;
      }
      _0x4b67c5.mainLoop.running = false;
      _0x4b67c5.mainLoop.runner = function _0x50151b() {
        if (_0x25975d) {
          return;
        }
        if (_0x4b67c5.mainLoop.queue.length > 0) {
          var _0x1e6eb4 = Date.now();
          var _0x3795f3 = _0x4b67c5.mainLoop.queue.shift();
          _0x3795f3.func(_0x3795f3.arg);
          if (_0x4b67c5.mainLoop.remainingBlockers) {
            var _0xfb2837 = _0x4b67c5.mainLoop.remainingBlockers;
            var _0x5f246b = _0xfb2837 % 1 == 0 ? _0xfb2837 - 1 : Math.floor(_0xfb2837);
            if (_0x3795f3.counted) {
              _0x4b67c5.mainLoop.remainingBlockers = _0x5f246b;
            } else {
              _0x5f246b = _0x5f246b + 0.5;
              _0x4b67c5.mainLoop.remainingBlockers = (_0xfb2837 * 8 + _0x5f246b) / 9;
            }
          }
          _0x1ae8e6("main loop blocker \"" + _0x3795f3.name + "\" took " + (Date.now() - _0x1e6eb4) + " ms");
          _0x4b67c5.mainLoop.updateStatus();
          if (!_0x2428f5()) {
            return;
          }
          setTimeout(_0x4b67c5.mainLoop.runner, 0);
          return;
        }
        if (!_0x2428f5()) {
          return;
        }
        _0x4b67c5.mainLoop.currentFrameNumber = _0x4b67c5.mainLoop.currentFrameNumber + 1 | 0;
        if (_0x4b67c5.mainLoop.timingMode == 1 && _0x4b67c5.mainLoop.timingValue > 1 && _0x4b67c5.mainLoop.currentFrameNumber % _0x4b67c5.mainLoop.timingValue != 0) {
          _0x4b67c5.mainLoop.scheduler();
          return;
        } else if (_0x4b67c5.mainLoop.timingMode == 0) {
          _0x4b67c5.mainLoop.tickStartTime = _0x896648();
        }
        _0x5365f0.newRenderingFrameStarted();
        _0x4b67c5.mainLoop.runIter(_0x4648e9);
        if (!_0x2428f5()) {
          return;
        }
        if (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData) {
          SDL.audio.queueNewAudioData();
        }
        _0x4b67c5.mainLoop.scheduler();
      };
      if (!_0x23696c) {
        if (_0x564000 && _0x564000 > 0) {
          _0x27d3b3(0, 1000 / _0x564000);
        } else {
          _0x27d3b3(1, 1);
        }
        _0x4b67c5.mainLoop.scheduler();
      }
      if (_0x4dc08e) {
        throw "unwind";
      }
    }
    function _0x401f34(_0x1d9778, _0x41f803) {
      if (_0x25975d) {
        return;
      }
      if (_0x41f803) {
        _0x1d9778();
        return;
      }
      try {
        _0x1d9778();
      } catch (_0x4fd7bc) {
        _0x595465(_0x4fd7bc);
      }
    }
    function _0x4334b9(_0x544d67, _0x5b6669) {
      return setTimeout(function () {
        _0x401f34(_0x544d67);
      }, _0x5b6669);
    }
    var _0x4b67c5 = {
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
          _0x4b67c5.mainLoop.scheduler = null;
          _0x4b67c5.mainLoop.currentlyRunningMainloop++;
        },
        resume: function () {
          _0x4b67c5.mainLoop.currentlyRunningMainloop++;
          var _0x48a2b9 = _0x4b67c5.mainLoop.timingMode;
          var _0x5223db = _0x4b67c5.mainLoop.timingValue;
          var _0xc2864a = _0x4b67c5.mainLoop.func;
          _0x4b67c5.mainLoop.func = null;
          _0x21a349(_0xc2864a, 0, false, _0x4b67c5.mainLoop.arg, true);
          _0x27d3b3(_0x48a2b9, _0x5223db);
          _0x4b67c5.mainLoop.scheduler();
        },
        updateStatus: function () {
          if (_0xbb74bb.setStatus) {
            var _0x248dfa = _0xbb74bb.statusMessage || "Please wait...";
            var _0x4f7173 = _0x4b67c5.mainLoop.remainingBlockers;
            var _0x4d1f0d = _0x4b67c5.mainLoop.expectedBlockers;
            if (_0x4f7173) {
              if (_0x4f7173 < _0x4d1f0d) {
                _0xbb74bb.setStatus(_0x248dfa + " (" + (_0x4d1f0d - _0x4f7173) + "/" + _0x4d1f0d + ")");
              } else {
                _0xbb74bb.setStatus(_0x248dfa);
              }
            } else {
              _0xbb74bb.setStatus("");
            }
          }
        },
        runIter: function (_0x4885b5) {
          if (_0x25975d) {
            return;
          }
          if (_0xbb74bb.preMainLoop) {
            var _0x32314f = _0xbb74bb.preMainLoop();
            if (_0x32314f === false) {
              return;
            }
          }
          _0x401f34(_0x4885b5);
          if (_0xbb74bb.postMainLoop) {
            _0xbb74bb.postMainLoop();
          }
        }
      },
      isFullscreen: false,
      pointerLock: false,
      moduleContextCreatedCallbacks: [],
      workers: [],
      init: function () {
        if (!_0xbb74bb.preloadPlugins) {
          _0xbb74bb.preloadPlugins = [];
        }
        if (_0x4b67c5.initted) {
          return;
        }
        _0x4b67c5.initted = true;
        try {
          new Blob();
          _0x4b67c5.hasBlobConstructor = true;
        } catch (_0x392fe5) {
          _0x4b67c5.hasBlobConstructor = false;
          _0x1ae8e6("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        _0x4b67c5.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x4b67c5.hasBlobConstructor ? _0x1ae8e6("warning: no BlobBuilder") : null;
        _0x4b67c5.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
        if (!_0xbb74bb.noImageDecoding && typeof _0x4b67c5.URLObject == "undefined") {
          _0x1ae8e6("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          _0xbb74bb.noImageDecoding = true;
        }
        var _0x3f650c = {};
        _0x3f650c.canHandle = function _0x5f55de(_0x71a174) {
          return !_0xbb74bb.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x71a174);
        };
        _0x3f650c.handle = function _0x8b2dfa(_0x49506a, _0x4507ca, _0x523f49, _0x4db37e) {
          var _0x5e9f47 = null;
          if (_0x4b67c5.hasBlobConstructor) {
            try {
              _0x5e9f47 = new Blob([_0x49506a], {
                type: _0x4b67c5.getMimetype(_0x4507ca)
              });
              if (_0x5e9f47.size !== _0x49506a.length) {
                _0x5e9f47 = new Blob([new Uint8Array(_0x49506a).buffer], {
                  type: _0x4b67c5.getMimetype(_0x4507ca)
                });
              }
            } catch (_0xc0297c) {
              _0x568432("Blob constructor present but fails: " + _0xc0297c + "; falling back to blob builder");
            }
          }
          if (!_0x5e9f47) {
            var _0x440cb4 = new _0x4b67c5.BlobBuilder();
            _0x440cb4.append(new Uint8Array(_0x49506a).buffer);
            _0x5e9f47 = _0x440cb4.getBlob();
          }
          var _0x5b7116 = _0x4b67c5.URLObject.createObjectURL(_0x5e9f47);
          var _0x5da63c = new Image();
          _0x5da63c.onload = () => {
            _0x105928(_0x5da63c.complete, "Image " + _0x4507ca + " could not be decoded");
            var _0x2823a3 = document.createElement("canvas");
            _0x2823a3.width = _0x5da63c.width;
            _0x2823a3.height = _0x5da63c.height;
            var _0x5a04d9 = _0x2823a3.getContext("2d");
            _0x5a04d9.drawImage(_0x5da63c, 0, 0);
            _0xbb74bb.preloadedImages[_0x4507ca] = _0x2823a3;
            _0x4b67c5.URLObject.revokeObjectURL(_0x5b7116);
            if (_0x523f49) {
              _0x523f49(_0x49506a);
            }
          };
          _0x5da63c.onerror = _0x37832b => {
            _0x1ae8e6("Image " + _0x5b7116 + " could not be decoded");
            if (_0x4db37e) {
              _0x4db37e();
            }
          };
          _0x5da63c.src = _0x5b7116;
        };
        _0xbb74bb.preloadPlugins.push(_0x3f650c);
        var _0xbe02b8 = {};
        _0xbe02b8.canHandle = function _0x3679c8(_0x2a0a34) {
          return !_0xbb74bb.noAudioDecoding && _0x2a0a34.substr(-4) in {
            ".ogg": 1,
            ".wav": 1,
            ".mp3": 1
          };
        };
        _0xbe02b8.handle = function _0x3d6d57(_0x108f1e, _0x57e619, _0x1d750e, _0x2452c3) {
          var _0x472dbc = false;
          function _0x30d1a3(_0x260f44) {
            if (_0x472dbc) {
              return;
            }
            _0x472dbc = true;
            _0xbb74bb.preloadedAudios[_0x57e619] = _0x260f44;
            if (_0x1d750e) {
              _0x1d750e(_0x108f1e);
            }
          }
          function _0x480fd5() {
            if (_0x472dbc) {
              return;
            }
            _0x472dbc = true;
            _0xbb74bb.preloadedAudios[_0x57e619] = new Audio();
            if (_0x2452c3) {
              _0x2452c3();
            }
          }
          if (_0x4b67c5.hasBlobConstructor) {
            try {
              var _0x242b7f = new Blob([_0x108f1e], {
                type: _0x4b67c5.getMimetype(_0x57e619)
              });
            } catch (_0x6ec2e5) {
              return _0x480fd5();
            }
            var _0x23be38 = _0x4b67c5.URLObject.createObjectURL(_0x242b7f);
            var _0x12b2dd = new Audio();
            _0x12b2dd.addEventListener("canplaythrough", function () {
              _0x30d1a3(_0x12b2dd);
            }, false);
            _0x12b2dd.onerror = function _0x32af60(_0x514492) {
              if (_0x472dbc) {
                return;
              }
              _0x1ae8e6("warning: browser could not fully decode audio " + _0x57e619 + ", trying slower base64 approach");
              function _0x367601(_0x115ab7) {
                var _0x428505 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var _0x42e404 = "=";
                var _0x551ab7 = "";
                var _0x2bf041 = 0;
                var _0x5eb111 = 0;
                for (var _0x4009a1 = 0; _0x4009a1 < _0x115ab7.length; _0x4009a1++) {
                  _0x2bf041 = _0x2bf041 << 8 | _0x115ab7[_0x4009a1];
                  _0x5eb111 += 8;
                  while (_0x5eb111 >= 6) {
                    var _0x1658d0 = _0x2bf041 >> _0x5eb111 - 6 & 63;
                    _0x5eb111 -= 6;
                    _0x551ab7 += _0x428505[_0x1658d0];
                  }
                }
                if (_0x5eb111 == 2) {
                  _0x551ab7 += _0x428505[(_0x2bf041 & 3) << 4];
                  _0x551ab7 += _0x42e404 + _0x42e404;
                } else if (_0x5eb111 == 4) {
                  _0x551ab7 += _0x428505[(_0x2bf041 & 15) << 2];
                  _0x551ab7 += _0x42e404;
                }
                return _0x551ab7;
              }
              _0x12b2dd.src = "data:audio/x-" + _0x57e619.substr(-3) + ";base64," + _0x367601(_0x108f1e);
              _0x30d1a3(_0x12b2dd);
            };
            _0x12b2dd.src = _0x23be38;
            _0x4334b9(function () {
              _0x30d1a3(_0x12b2dd);
            }, 10000);
          } else {
            return _0x480fd5();
          }
        };
        _0xbb74bb.preloadPlugins.push(_0xbe02b8);
        function _0x20e5b4() {
          _0x4b67c5.pointerLock = document.pointerLockElement === _0xbb74bb.canvas || document.mozPointerLockElement === _0xbb74bb.canvas || document.webkitPointerLockElement === _0xbb74bb.canvas || document.msPointerLockElement === _0xbb74bb.canvas;
        }
        var _0x3b9f96 = _0xbb74bb.canvas;
        if (_0x3b9f96) {
          _0x3b9f96.requestPointerLock = _0x3b9f96.requestPointerLock || _0x3b9f96.mozRequestPointerLock || _0x3b9f96.webkitRequestPointerLock || _0x3b9f96.msRequestPointerLock || function () {};
          _0x3b9f96.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
          _0x3b9f96.exitPointerLock = _0x3b9f96.exitPointerLock.bind(document);
          document.addEventListener("pointerlockchange", _0x20e5b4, false);
          document.addEventListener("mozpointerlockchange", _0x20e5b4, false);
          document.addEventListener("webkitpointerlockchange", _0x20e5b4, false);
          document.addEventListener("mspointerlockchange", _0x20e5b4, false);
          if (_0xbb74bb.elementPointerLock) {
            _0x3b9f96.addEventListener("click", function (_0x1305ef) {
              if (!_0x4b67c5.pointerLock && _0xbb74bb.canvas.requestPointerLock) {
                _0xbb74bb.canvas.requestPointerLock();
                _0x1305ef.preventDefault();
              }
            }, false);
          }
        }
      },
      handledByPreloadPlugin: function (_0x480ba6, _0x702705, _0xfa233, _0x5c3e88) {
        _0x4b67c5.init();
        var _0x3abc79 = false;
        _0xbb74bb.preloadPlugins.forEach(function (_0x39a407) {
          if (_0x3abc79) {
            return;
          }
          if (_0x39a407.canHandle(_0x702705)) {
            _0x39a407.handle(_0x480ba6, _0x702705, _0xfa233, _0x5c3e88);
            _0x3abc79 = true;
          }
        });
        return _0x3abc79;
      },
      createContext: function (_0x3fa9b0, _0x136a96, _0x2b431b, _0x8c8fbd) {
        if (_0x136a96 && _0xbb74bb.ctx && _0x3fa9b0 == _0xbb74bb.canvas) {
          return _0xbb74bb.ctx;
        }
        var _0x2e7d55;
        var _0x1d6d99;
        if (_0x136a96) {
          var _0x3e6e42 = {
            antialias: false,
            alpha: false,
            majorVersion: typeof WebGL2RenderingContext != "undefined" ? 2 : 1
          };
          if (_0x8c8fbd) {
            for (var _0x2eff1e in _0x8c8fbd) {
              _0x3e6e42[_0x2eff1e] = _0x8c8fbd[_0x2eff1e];
            }
          }
          if (typeof _0x5365f0 != "undefined") {
            _0x1d6d99 = _0x5365f0.createContext(_0x3fa9b0, _0x3e6e42);
            if (_0x1d6d99) {
              _0x2e7d55 = _0x5365f0.getContext(_0x1d6d99).GLctx;
            }
          }
        } else {
          _0x2e7d55 = _0x3fa9b0.getContext("2d");
        }
        if (!_0x2e7d55) {
          return null;
        }
        if (_0x2b431b) {
          if (!_0x136a96) {
            _0x105928(typeof _0x4571ce == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
          }
          _0xbb74bb.ctx = _0x2e7d55;
          if (_0x136a96) {
            _0x5365f0.makeContextCurrent(_0x1d6d99);
          }
          _0xbb74bb.useWebGL = _0x136a96;
          _0x4b67c5.moduleContextCreatedCallbacks.forEach(function (_0x187ff5) {
            _0x187ff5();
          });
          _0x4b67c5.init();
        }
        return _0x2e7d55;
      },
      destroyContext: function (_0x5a06f5, _0x5954f9, _0x2e3ea5) {},
      fullscreenHandlersInstalled: false,
      lockPointer: undefined,
      resizeCanvas: undefined,
      requestFullscreen: function (_0x4a9451, _0x39deb5) {
        _0x4b67c5.lockPointer = _0x4a9451;
        _0x4b67c5.resizeCanvas = _0x39deb5;
        if (typeof _0x4b67c5.lockPointer == "undefined") {
          _0x4b67c5.lockPointer = true;
        }
        if (typeof _0x4b67c5.resizeCanvas == "undefined") {
          _0x4b67c5.resizeCanvas = false;
        }
        var _0x35a0ff = _0xbb74bb.canvas;
        function _0x108a53() {
          _0x4b67c5.isFullscreen = false;
          var _0x3d8211 = _0x35a0ff.parentNode;
          if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x3d8211) {
            _0x35a0ff.exitFullscreen = _0x4b67c5.exitFullscreen;
            if (_0x4b67c5.lockPointer) {
              _0x35a0ff.requestPointerLock();
            }
            _0x4b67c5.isFullscreen = true;
            if (_0x4b67c5.resizeCanvas) {
              _0x4b67c5.setFullscreenCanvasSize();
            } else {
              _0x4b67c5.updateCanvasDimensions(_0x35a0ff);
            }
          } else {
            _0x3d8211.parentNode.insertBefore(_0x35a0ff, _0x3d8211);
            _0x3d8211.parentNode.removeChild(_0x3d8211);
            if (_0x4b67c5.resizeCanvas) {
              _0x4b67c5.setWindowedCanvasSize();
            } else {
              _0x4b67c5.updateCanvasDimensions(_0x35a0ff);
            }
          }
          if (_0xbb74bb.onFullScreen) {
            _0xbb74bb.onFullScreen(_0x4b67c5.isFullscreen);
          }
          if (_0xbb74bb.onFullscreen) {
            _0xbb74bb.onFullscreen(_0x4b67c5.isFullscreen);
          }
        }
        if (!_0x4b67c5.fullscreenHandlersInstalled) {
          _0x4b67c5.fullscreenHandlersInstalled = true;
          document.addEventListener("fullscreenchange", _0x108a53, false);
          document.addEventListener("mozfullscreenchange", _0x108a53, false);
          document.addEventListener("webkitfullscreenchange", _0x108a53, false);
          document.addEventListener("MSFullscreenChange", _0x108a53, false);
        }
        var _0x3e3287 = document.createElement("div");
        _0x35a0ff.parentNode.insertBefore(_0x3e3287, _0x35a0ff);
        _0x3e3287.appendChild(_0x35a0ff);
        _0x3e3287.requestFullscreen = _0x3e3287.requestFullscreen || _0x3e3287.mozRequestFullScreen || _0x3e3287.msRequestFullscreen || (_0x3e3287.webkitRequestFullscreen ? function () {
          _0x3e3287.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null) || (_0x3e3287.webkitRequestFullScreen ? function () {
          _0x3e3287.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null);
        _0x3e3287.requestFullscreen();
      },
      exitFullscreen: function () {
        if (!_0x4b67c5.isFullscreen) {
          return false;
        }
        var _0x4c973a = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
        _0x4c973a.apply(document, []);
        return true;
      },
      nextRAF: 0,
      fakeRequestAnimationFrame: function (_0x49a7a8) {
        var _0x3ceb62 = Date.now();
        if (_0x4b67c5.nextRAF === 0) {
          _0x4b67c5.nextRAF = _0x3ceb62 + 1000 / 60;
        } else {
          while (_0x3ceb62 + 2 >= _0x4b67c5.nextRAF) {
            _0x4b67c5.nextRAF += 1000 / 60;
          }
        }
        var _0x2aae78 = Math.max(_0x4b67c5.nextRAF - _0x3ceb62, 0);
        setTimeout(_0x49a7a8, _0x2aae78);
      },
      requestAnimationFrame: function (_0x1c9bed) {
        if (typeof requestAnimationFrame == "function") {
          requestAnimationFrame(_0x1c9bed);
          return;
        }
        var _0xcbb570 = _0x4b67c5.fakeRequestAnimationFrame;
        _0xcbb570(_0x1c9bed);
      },
      safeSetTimeout: function (_0x169293) {
        return _0x4334b9(_0x169293);
      },
      safeRequestAnimationFrame: function (_0x4e6db1) {
        return _0x4b67c5.requestAnimationFrame(function () {
          _0x401f34(_0x4e6db1);
        });
      },
      getMimetype: function (_0x3eeab0) {
        return {
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          png: "image/png",
          bmp: "image/bmp",
          ogg: "audio/ogg",
          wav: "audio/wav",
          mp3: "audio/mpeg"
        }[_0x3eeab0.substr(_0x3eeab0.lastIndexOf(".") + 1)];
      },
      getUserMedia: function (_0x1acb31) {
        if (!window.getUserMedia) {
          window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
        }
        window.getUserMedia(_0x1acb31);
      },
      getMovementX: function (_0x561256) {
        return _0x561256.movementX || _0x561256.mozMovementX || _0x561256.webkitMovementX || 0;
      },
      getMovementY: function (_0x24f950) {
        return _0x24f950.movementY || _0x24f950.mozMovementY || _0x24f950.webkitMovementY || 0;
      },
      getMouseWheelDelta: function (_0x563ef1) {
        var _0x28cbb6 = 0;
        switch (_0x563ef1.type) {
          case "DOMMouseScroll":
            _0x28cbb6 = _0x563ef1.detail / 3;
            break;
          case "mousewheel":
            _0x28cbb6 = _0x563ef1.wheelDelta / 120;
            break;
          case "wheel":
            _0x28cbb6 = _0x563ef1.deltaY;
            switch (_0x563ef1.deltaMode) {
              case 0:
                _0x28cbb6 /= 100;
                break;
              case 1:
                _0x28cbb6 /= 3;
                break;
              case 2:
                _0x28cbb6 *= 80;
                break;
              default:
                throw "unrecognized mouse wheel delta mode: " + _0x563ef1.deltaMode;
            }
            break;
          default:
            throw "unrecognized mouse wheel event: " + _0x563ef1.type;
        }
        return _0x28cbb6;
      },
      mouseX: 0,
      mouseY: 0,
      mouseMovementX: 0,
      mouseMovementY: 0,
      touches: {},
      lastTouches: {},
      calculateMouseEvent: function (_0x42a8a4) {
        if (_0x4b67c5.pointerLock) {
          if (_0x42a8a4.type != "mousemove" && "mozMovementX" in _0x42a8a4) {
            _0x4b67c5.mouseMovementX = _0x4b67c5.mouseMovementY = 0;
          } else {
            _0x4b67c5.mouseMovementX = _0x4b67c5.getMovementX(_0x42a8a4);
            _0x4b67c5.mouseMovementY = _0x4b67c5.getMovementY(_0x42a8a4);
          }
          if (typeof SDL != "undefined") {
            _0x4b67c5.mouseX = SDL.mouseX + _0x4b67c5.mouseMovementX;
            _0x4b67c5.mouseY = SDL.mouseY + _0x4b67c5.mouseMovementY;
          } else {
            _0x4b67c5.mouseX += _0x4b67c5.mouseMovementX;
            _0x4b67c5.mouseY += _0x4b67c5.mouseMovementY;
          }
        } else {
          var _0x68f92a = _0xbb74bb.canvas.getBoundingClientRect();
          var _0x13ce6f = _0xbb74bb.canvas.width;
          var _0x3aca18 = _0xbb74bb.canvas.height;
          var _0x148180 = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
          var _0x379b2c = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
          if (_0x42a8a4.type === "touchstart" || _0x42a8a4.type === "touchend" || _0x42a8a4.type === "touchmove") {
            var _0x4e5623 = _0x42a8a4.touch;
            if (_0x4e5623 === undefined) {
              return;
            }
            var _0x513db3 = _0x4e5623.pageX - (_0x148180 + _0x68f92a.left);
            var _0x37018c = _0x4e5623.pageY - (_0x379b2c + _0x68f92a.top);
            _0x513db3 = _0x513db3 * (_0x13ce6f / _0x68f92a.width);
            _0x37018c = _0x37018c * (_0x3aca18 / _0x68f92a.height);
            var _0x13cdd0 = {
              x: _0x513db3,
              y: _0x37018c
            };
            if (_0x42a8a4.type === "touchstart") {
              _0x4b67c5.lastTouches[_0x4e5623.identifier] = _0x13cdd0;
              _0x4b67c5.touches[_0x4e5623.identifier] = _0x13cdd0;
            } else if (_0x42a8a4.type === "touchend" || _0x42a8a4.type === "touchmove") {
              var _0x2e8f3b = _0x4b67c5.touches[_0x4e5623.identifier];
              if (!_0x2e8f3b) {
                _0x2e8f3b = _0x13cdd0;
              }
              _0x4b67c5.lastTouches[_0x4e5623.identifier] = _0x2e8f3b;
              _0x4b67c5.touches[_0x4e5623.identifier] = _0x13cdd0;
            }
            return;
          }
          var _0x722cab = _0x42a8a4.pageX - (_0x148180 + _0x68f92a.left);
          var _0x475b5b = _0x42a8a4.pageY - (_0x379b2c + _0x68f92a.top);
          _0x722cab = _0x722cab * (_0x13ce6f / _0x68f92a.width);
          _0x475b5b = _0x475b5b * (_0x3aca18 / _0x68f92a.height);
          _0x4b67c5.mouseMovementX = _0x722cab - _0x4b67c5.mouseX;
          _0x4b67c5.mouseMovementY = _0x475b5b - _0x4b67c5.mouseY;
          _0x4b67c5.mouseX = _0x722cab;
          _0x4b67c5.mouseY = _0x475b5b;
        }
      },
      resizeListeners: [],
      updateResizeListeners: function () {
        var _0x520e75 = _0xbb74bb.canvas;
        _0x4b67c5.resizeListeners.forEach(function (_0x2fda95) {
          _0x2fda95(_0x520e75.width, _0x520e75.height);
        });
      },
      setCanvasSize: function (_0x39ac79, _0x2a02a8, _0x1edc1d) {
        var _0x540e7d = _0xbb74bb.canvas;
        _0x4b67c5.updateCanvasDimensions(_0x540e7d, _0x39ac79, _0x2a02a8);
        if (!_0x1edc1d) {
          _0x4b67c5.updateResizeListeners();
        }
      },
      windowedWidth: 0,
      windowedHeight: 0,
      setFullscreenCanvasSize: function () {
        if (typeof SDL != "undefined") {
          var _0x1da9e8 = _0x1cca99[SDL.screen >> 2];
          _0x1da9e8 = _0x1da9e8 | 8388608;
          _0x2f8726[SDL.screen >> 2] = _0x1da9e8;
        }
        _0x4b67c5.updateCanvasDimensions(_0xbb74bb.canvas);
        _0x4b67c5.updateResizeListeners();
      },
      setWindowedCanvasSize: function () {
        if (typeof SDL != "undefined") {
          var _0x32eb79 = _0x1cca99[SDL.screen >> 2];
          _0x32eb79 = _0x32eb79 & ~8388608;
          _0x2f8726[SDL.screen >> 2] = _0x32eb79;
        }
        _0x4b67c5.updateCanvasDimensions(_0xbb74bb.canvas);
        _0x4b67c5.updateResizeListeners();
      },
      updateCanvasDimensions: function (_0x4b8856, _0x458975, _0xad67f3) {
        if (_0x458975 && _0xad67f3) {
          _0x4b8856.widthNative = _0x458975;
          _0x4b8856.heightNative = _0xad67f3;
        } else {
          _0x458975 = _0x4b8856.widthNative;
          _0xad67f3 = _0x4b8856.heightNative;
        }
        var _0x277449 = _0x458975;
        var _0x69b516 = _0xad67f3;
        if (_0xbb74bb.forcedAspectRatio && _0xbb74bb.forcedAspectRatio > 0) {
          if (_0x277449 / _0x69b516 < _0xbb74bb.forcedAspectRatio) {
            _0x277449 = Math.round(_0x69b516 * _0xbb74bb.forcedAspectRatio);
          } else {
            _0x69b516 = Math.round(_0x277449 / _0xbb74bb.forcedAspectRatio);
          }
        }
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x4b8856.parentNode && typeof screen != "undefined") {
          var _0x42792d = Math.min(screen.width / _0x277449, screen.height / _0x69b516);
          _0x277449 = Math.round(_0x277449 * _0x42792d);
          _0x69b516 = Math.round(_0x69b516 * _0x42792d);
        }
        if (_0x4b67c5.resizeCanvas) {
          if (_0x4b8856.width != _0x277449) {
            _0x4b8856.width = _0x277449;
          }
          if (_0x4b8856.height != _0x69b516) {
            _0x4b8856.height = _0x69b516;
          }
          if (typeof _0x4b8856.style != "undefined") {
            _0x4b8856.style.removeProperty("width");
            _0x4b8856.style.removeProperty("height");
          }
        } else {
          if (_0x4b8856.width != _0x458975) {
            _0x4b8856.width = _0x458975;
          }
          if (_0x4b8856.height != _0xad67f3) {
            _0x4b8856.height = _0xad67f3;
          }
          if (typeof _0x4b8856.style != "undefined") {
            if (_0x277449 != _0x458975 || _0x69b516 != _0xad67f3) {
              _0x4b8856.style.setProperty("width", _0x277449 + "px", "important");
              _0x4b8856.style.setProperty("height", _0x69b516 + "px", "important");
            } else {
              _0x4b8856.style.removeProperty("width");
              _0x4b8856.style.removeProperty("height");
            }
          }
        }
      }
    };
    function _0x47ec94() {
      _0x4b67c5.mainLoop.pause();
      _0x4b67c5.mainLoop.func = null;
    }
    function _0x189564(_0x4e2dad) {
      clearInterval(_0x4e2dad);
    }
    function _0x913497() {
      return Date.now();
    }
    var _0x1eec61 = {
      inEventHandler: 0,
      removeAllEventListeners: function () {
        for (var _0x47947d = _0x1eec61.eventHandlers.length - 1; _0x47947d >= 0; --_0x47947d) {
          _0x1eec61._removeHandler(_0x47947d);
        }
        _0x1eec61.eventHandlers = [];
        _0x1eec61.deferredCalls = [];
      },
      registerRemoveEventListeners: function () {
        if (!_0x1eec61.removeEventListenersRegistered) {
          _0x365b45.push(_0x1eec61.removeAllEventListeners);
          _0x1eec61.removeEventListenersRegistered = true;
        }
      },
      deferredCalls: [],
      deferCall: function (_0x59fb5f, _0x1e350b, _0xff6807) {
        function _0xfaf897(_0x488a84, _0x1077f2) {
          if (_0x488a84.length != _0x1077f2.length) {
            return false;
          }
          for (var _0x526937 in _0x488a84) {
            if (_0x488a84[_0x526937] != _0x1077f2[_0x526937]) {
              return false;
            }
          }
          return true;
        }
        for (var _0x10e740 in _0x1eec61.deferredCalls) {
          var _0x470cbf = _0x1eec61.deferredCalls[_0x10e740];
          if (_0x470cbf.targetFunction == _0x59fb5f && _0xfaf897(_0x470cbf.argsList, _0xff6807)) {
            return;
          }
        }
        _0x1eec61.deferredCalls.push({
          targetFunction: _0x59fb5f,
          precedence: _0x1e350b,
          argsList: _0xff6807
        });
        _0x1eec61.deferredCalls.sort(function (_0xd349cb, _0x30bea0) {
          return _0xd349cb.precedence < _0x30bea0.precedence;
        });
      },
      removeDeferredCalls: function (_0x496831) {
        for (var _0x2606fd = 0; _0x2606fd < _0x1eec61.deferredCalls.length; ++_0x2606fd) {
          if (_0x1eec61.deferredCalls[_0x2606fd].targetFunction == _0x496831) {
            _0x1eec61.deferredCalls.splice(_0x2606fd, 1);
            --_0x2606fd;
          }
        }
      },
      canPerformEventHandlerRequests: function () {
        return _0x1eec61.inEventHandler && _0x1eec61.currentEventHandler.allowsDeferredCalls;
      },
      runDeferredCalls: function () {
        if (!_0x1eec61.canPerformEventHandlerRequests()) {
          return;
        }
        for (var _0x21ec17 = 0; _0x21ec17 < _0x1eec61.deferredCalls.length; ++_0x21ec17) {
          var _0x524ba2 = _0x1eec61.deferredCalls[_0x21ec17];
          _0x1eec61.deferredCalls.splice(_0x21ec17, 1);
          --_0x21ec17;
          _0x524ba2.targetFunction.apply(null, _0x524ba2.argsList);
        }
      },
      eventHandlers: [],
      removeAllHandlersOnTarget: function (_0x3cd416, _0x561f76) {
        for (var _0x396bee = 0; _0x396bee < _0x1eec61.eventHandlers.length; ++_0x396bee) {
          if (_0x1eec61.eventHandlers[_0x396bee].target == _0x3cd416 && (!_0x561f76 || _0x561f76 == _0x1eec61.eventHandlers[_0x396bee].eventTypeString)) {
            _0x1eec61._removeHandler(_0x396bee--);
          }
        }
      },
      _removeHandler: function (_0x38695f) {
        var _0x1d5670 = _0x1eec61.eventHandlers[_0x38695f];
        _0x1d5670.target.removeEventListener(_0x1d5670.eventTypeString, _0x1d5670.eventListenerFunc, _0x1d5670.useCapture);
        _0x1eec61.eventHandlers.splice(_0x38695f, 1);
      },
      registerOrRemoveHandler: function (_0x3d9865) {
        var _0x138994 = function _0x414abb(_0x379175) {
          ++_0x1eec61.inEventHandler;
          _0x1eec61.currentEventHandler = _0x3d9865;
          _0x1eec61.runDeferredCalls();
          _0x3d9865.handlerFunc(_0x379175);
          _0x1eec61.runDeferredCalls();
          --_0x1eec61.inEventHandler;
        };
        if (_0x3d9865.callbackfunc) {
          _0x3d9865.eventListenerFunc = _0x138994;
          _0x3d9865.target.addEventListener(_0x3d9865.eventTypeString, _0x138994, _0x3d9865.useCapture);
          _0x1eec61.eventHandlers.push(_0x3d9865);
          _0x1eec61.registerRemoveEventListeners();
        } else {
          for (var _0x2666eb = 0; _0x2666eb < _0x1eec61.eventHandlers.length; ++_0x2666eb) {
            if (_0x1eec61.eventHandlers[_0x2666eb].target == _0x3d9865.target && _0x1eec61.eventHandlers[_0x2666eb].eventTypeString == _0x3d9865.eventTypeString) {
              _0x1eec61._removeHandler(_0x2666eb--);
            }
          }
        }
      },
      getNodeNameForTarget: function (_0x50aa41) {
        if (!_0x50aa41) {
          return "";
        }
        if (_0x50aa41 == window) {
          return "#window";
        }
        if (_0x50aa41 == screen) {
          return "#screen";
        }
        if (_0x50aa41 && _0x50aa41.nodeName) {
          return _0x50aa41.nodeName;
        } else {
          return "";
        }
      },
      fullscreenEnabled: function () {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled;
      }
    };
    var _0x4b940f = {};
    function _0x397125(_0x77e5bc) {
      if (_0x77e5bc > 2) {
        return _0x468390(_0x77e5bc);
      } else {
        return _0x77e5bc;
      }
    }
    var _0x31c719 = [0, typeof document != "undefined" ? document : 0, typeof window != "undefined" ? window : 0];
    function _0x58b982(_0x214fff) {
      _0x214fff = _0x397125(_0x214fff);
      var _0x43b3d7 = _0x31c719[_0x214fff] || (typeof document != "undefined" ? document.querySelector(_0x214fff) : undefined);
      return _0x43b3d7;
    }
    function _0x184e56(_0x43c2cd) {
      return _0x58b982(_0x43c2cd);
    }
    function _0x63026a(_0x3f6ef4, _0x4712bc, _0x5086a6) {
      var _0x268ce2 = _0x184e56(_0x3f6ef4);
      if (!_0x268ce2) {
        return -4;
      }
      _0x2f8726[_0x4712bc >> 2] = _0x268ce2.width;
      _0x2f8726[_0x5086a6 >> 2] = _0x268ce2.height;
    }
    function _0x30ac6d(_0x375c6d) {
      return _0x2b92f5(function () {
        var _0x8f16cf = _0x1a18c9(8);
        var _0x35b61d = _0x8f16cf + 4;
        var _0x341c82 = _0x1a18c9(_0x375c6d.id.length + 1);
        _0x4fe443(_0x375c6d.id, _0x341c82, _0x375c6d.id.length + 1);
        var _0x33deea = _0x63026a(_0x341c82, _0x8f16cf, _0x35b61d);
        var _0x3fbf76 = [_0x2f8726[_0x8f16cf >> 2], _0x2f8726[_0x35b61d >> 2]];
        return _0x3fbf76;
      });
    }
    function _0x573396(_0x634319, _0xd107fa, _0x30f8ed) {
      var _0x5f182e = _0x184e56(_0x634319);
      if (!_0x5f182e) {
        return -4;
      }
      _0x5f182e.width = _0xd107fa;
      _0x5f182e.height = _0x30f8ed;
      return 0;
    }
    function _0x29f70b(_0x39f2e2, _0x54cce9, _0x13d1ca) {
      if (!_0x39f2e2.controlTransferredOffscreen) {
        _0x39f2e2.width = _0x54cce9;
        _0x39f2e2.height = _0x13d1ca;
      } else {
        _0x2b92f5(function () {
          var _0x4b1aa8 = _0x1a18c9(_0x39f2e2.id.length + 1);
          _0x4fe443(_0x39f2e2.id, _0x4b1aa8, _0x39f2e2.id.length + 1);
          _0x573396(_0x4b1aa8, _0x54cce9, _0x13d1ca);
        });
      }
    }
    function _0x1f65af(_0x171570) {
      var _0x393e07 = _0x30ac6d(_0x171570);
      var _0x3660c1 = _0x393e07[0];
      var _0xd0c704 = _0x393e07[1];
      var _0x3008bc = _0x171570.style.width;
      var _0x758d9c = _0x171570.style.height;
      var _0x4d7b30 = _0x171570.style.backgroundColor;
      var _0xc677e5 = document.body.style.backgroundColor;
      var _0x3fe2a9 = _0x171570.style.paddingLeft;
      var _0x476a9d = _0x171570.style.paddingRight;
      var _0x554394 = _0x171570.style.paddingTop;
      var _0x2ed71e = _0x171570.style.paddingBottom;
      var _0x171622 = _0x171570.style.marginLeft;
      var _0x216be4 = _0x171570.style.marginRight;
      var _0x4c51fc = _0x171570.style.marginTop;
      var _0x324207 = _0x171570.style.marginBottom;
      var _0x5a7247 = document.body.style.margin;
      var _0x440295 = document.documentElement.style.overflow;
      var _0x2dcc00 = document.body.scroll;
      var _0xe82874 = _0x171570.style.imageRendering;
      function _0x2abe89() {
        var _0x13ab2e = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        if (!_0x13ab2e) {
          document.removeEventListener("fullscreenchange", _0x2abe89);
          document.removeEventListener("webkitfullscreenchange", _0x2abe89);
          _0x29f70b(_0x171570, _0x3660c1, _0xd0c704);
          _0x171570.style.width = _0x3008bc;
          _0x171570.style.height = _0x758d9c;
          _0x171570.style.backgroundColor = _0x4d7b30;
          if (!_0xc677e5) {
            document.body.style.backgroundColor = "white";
          }
          document.body.style.backgroundColor = _0xc677e5;
          _0x171570.style.paddingLeft = _0x3fe2a9;
          _0x171570.style.paddingRight = _0x476a9d;
          _0x171570.style.paddingTop = _0x554394;
          _0x171570.style.paddingBottom = _0x2ed71e;
          _0x171570.style.marginLeft = _0x171622;
          _0x171570.style.marginRight = _0x216be4;
          _0x171570.style.marginTop = _0x4c51fc;
          _0x171570.style.marginBottom = _0x324207;
          document.body.style.margin = _0x5a7247;
          document.documentElement.style.overflow = _0x440295;
          document.body.scroll = _0x2dcc00;
          _0x171570.style.imageRendering = _0xe82874;
          if (_0x171570.GLctxObject) {
            _0x171570.GLctxObject.GLctx.viewport(0, 0, _0x3660c1, _0xd0c704);
          }
          if (_0x4b940f.canvasResizedCallback) {
            (function (_0x53e78e, _0x1113d8, _0x49ad47) {
              return _0x2c3ceb.apply(null, [_0x4b940f.canvasResizedCallback, _0x53e78e, _0x1113d8, _0x49ad47]);
            })(37, 0, _0x4b940f.canvasResizedCallbackUserData);
          }
        }
      }
      document.addEventListener("fullscreenchange", _0x2abe89);
      document.addEventListener("webkitfullscreenchange", _0x2abe89);
      return _0x2abe89;
    }
    function _0x4afe4e(_0x546dcc, _0x5dd226, _0x31753b) {
      _0x546dcc.style.paddingLeft = _0x546dcc.style.paddingRight = _0x31753b + "px";
      _0x546dcc.style.paddingTop = _0x546dcc.style.paddingBottom = _0x5dd226 + "px";
    }
    function _0x52349f(_0x221a22) {
      if (_0x31c719.indexOf(_0x221a22) < 0) {
        return _0x221a22.getBoundingClientRect();
      } else {
        return {
          left: 0,
          top: 0
        };
      }
    }
    function _0x4351a8(_0x1bf21d, _0x153653) {
      var _0x50effd = _0x1f65af(_0x1bf21d);
      var _0x1a414a = _0x153653.softFullscreen ? innerWidth : screen.width;
      var _0xcd599b = _0x153653.softFullscreen ? innerHeight : screen.height;
      var _0x129161 = _0x52349f(_0x1bf21d);
      var _0x536115 = _0x129161.width;
      var _0x4c07c7 = _0x129161.height;
      var _0x56341a = _0x30ac6d(_0x1bf21d);
      var _0x1a8bdd = _0x56341a[0];
      var _0x5ba100 = _0x56341a[1];
      if (_0x153653.scaleMode == 3) {
        _0x4afe4e(_0x1bf21d, (_0xcd599b - _0x4c07c7) / 2, (_0x1a414a - _0x536115) / 2);
        _0x1a414a = _0x536115;
        _0xcd599b = _0x4c07c7;
      } else if (_0x153653.scaleMode == 2) {
        if (_0x1a414a * _0x5ba100 < _0x1a8bdd * _0xcd599b) {
          var _0x25c7b0 = _0x5ba100 * _0x1a414a / _0x1a8bdd;
          _0x4afe4e(_0x1bf21d, (_0xcd599b - _0x25c7b0) / 2, 0);
          _0xcd599b = _0x25c7b0;
        } else {
          var _0x60204b = _0x1a8bdd * _0xcd599b / _0x5ba100;
          _0x4afe4e(_0x1bf21d, 0, (_0x1a414a - _0x60204b) / 2);
          _0x1a414a = _0x60204b;
        }
      }
      if (!_0x1bf21d.style.backgroundColor) {
        _0x1bf21d.style.backgroundColor = "black";
      }
      if (!document.body.style.backgroundColor) {
        document.body.style.backgroundColor = "black";
      }
      _0x1bf21d.style.width = _0x1a414a + "px";
      _0x1bf21d.style.height = _0xcd599b + "px";
      if (_0x153653.filteringMode == 1) {
        _0x1bf21d.style.imageRendering = "optimizeSpeed";
        _0x1bf21d.style.imageRendering = "-moz-crisp-edges";
        _0x1bf21d.style.imageRendering = "-o-crisp-edges";
        _0x1bf21d.style.imageRendering = "-webkit-optimize-contrast";
        _0x1bf21d.style.imageRendering = "optimize-contrast";
        _0x1bf21d.style.imageRendering = "crisp-edges";
        _0x1bf21d.style.imageRendering = "pixelated";
      }
      var _0x3b11bc = _0x153653.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
      if (_0x153653.canvasResolutionScaleMode != 0) {
        var _0x1bb8ed = _0x1a414a * _0x3b11bc | 0;
        var _0x2e0e30 = _0xcd599b * _0x3b11bc | 0;
        _0x29f70b(_0x1bf21d, _0x1bb8ed, _0x2e0e30);
        if (_0x1bf21d.GLctxObject) {
          _0x1bf21d.GLctxObject.GLctx.viewport(0, 0, _0x1bb8ed, _0x2e0e30);
        }
      }
      return _0x50effd;
    }
    function _0x5d8ecc(_0x3277ec, _0x470d86) {
      if (_0x470d86.scaleMode != 0 || _0x470d86.canvasResolutionScaleMode != 0) {
        _0x4351a8(_0x3277ec, _0x470d86);
      }
      if (_0x3277ec.requestFullscreen) {
        _0x3277ec.requestFullscreen();
      } else if (_0x3277ec.webkitRequestFullscreen) {
        _0x3277ec.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (_0x1eec61.fullscreenEnabled()) {
        return -3;
      } else {
        return -1;
      }
      _0x4b940f = _0x470d86;
      if (_0x470d86.canvasResizedCallback) {
        (function (_0xd1dcac, _0x2702b1, _0x9fd38e) {
          return _0x2c3ceb.apply(null, [_0x470d86.canvasResizedCallback, _0xd1dcac, _0x2702b1, _0x9fd38e]);
        })(37, 0, _0x470d86.canvasResizedCallbackUserData);
      }
      return 0;
    }
    function _0x415928() {
      if (!_0x1eec61.fullscreenEnabled()) {
        return -1;
      }
      _0x1eec61.removeDeferredCalls(_0x5d8ecc);
      var _0x4b359a = _0x31c719[1];
      if (_0x4b359a.exitFullscreen) {
        if (_0x4b359a.fullscreenElement) {
          _0x4b359a.exitFullscreen();
        }
      } else if (_0x4b359a.webkitExitFullscreen) {
        if (_0x4b359a.webkitFullscreenElement) {
          _0x4b359a.webkitExitFullscreen();
        }
      } else {
        return -1;
      }
      return 0;
    }
    function _0x30a004(_0xf47ed4) {
      if (_0xf47ed4.requestPointerLock) {
        _0xf47ed4.requestPointerLock();
      } else if (_0xf47ed4.msRequestPointerLock) {
        _0xf47ed4.msRequestPointerLock();
      } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
        return -3;
      } else {
        return -1;
      }
      return 0;
    }
    function _0x3d99b5() {
      _0x1eec61.removeDeferredCalls(_0x30a004);
      if (document.exitPointerLock) {
        document.exitPointerLock();
      } else if (document.msExitPointerLock) {
        document.msExitPointerLock();
      } else {
        return -1;
      }
      return 0;
    }
    function _0x337225(_0x9db2d0) {
      var _0x22fb20 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      var _0x5269dd = !!_0x22fb20;
      _0x2f8726[_0x9db2d0 >> 2] = _0x5269dd;
      _0x2f8726[_0x9db2d0 + 4 >> 2] = _0x1eec61.fullscreenEnabled();
      var _0x390930 = _0x5269dd ? _0x22fb20 : _0x1eec61.previousFullscreenElement;
      var _0x47da5d = _0x1eec61.getNodeNameForTarget(_0x390930);
      var _0x56bfd7 = _0x390930 && _0x390930.id ? _0x390930.id : "";
      _0x4fe443(_0x47da5d, _0x9db2d0 + 8, 128);
      _0x4fe443(_0x56bfd7, _0x9db2d0 + 136, 128);
      _0x2f8726[_0x9db2d0 + 264 >> 2] = _0x390930 ? _0x390930.clientWidth : 0;
      _0x2f8726[_0x9db2d0 + 268 >> 2] = _0x390930 ? _0x390930.clientHeight : 0;
      _0x2f8726[_0x9db2d0 + 272 >> 2] = screen.width;
      _0x2f8726[_0x9db2d0 + 276 >> 2] = screen.height;
      if (_0x5269dd) {
        _0x1eec61.previousFullscreenElement = _0x22fb20;
      }
    }
    function _0x9eb0c1(_0x2596d7) {
      if (!_0x1eec61.fullscreenEnabled()) {
        return -1;
      }
      _0x337225(_0x2596d7);
      return 0;
    }
    function _0x478c0b(_0x491821, _0x4086a5) {
      _0x537a20[_0x491821 >> 3] = _0x4086a5.timestamp;
      for (var _0xb6b103 = 0; _0xb6b103 < _0x4086a5.axes.length; ++_0xb6b103) {
        _0x537a20[_0x491821 + _0xb6b103 * 8 + 16 >> 3] = _0x4086a5.axes[_0xb6b103];
      }
      for (var _0xb6b103 = 0; _0xb6b103 < _0x4086a5.buttons.length; ++_0xb6b103) {
        if (typeof _0x4086a5.buttons[_0xb6b103] == "object") {
          _0x537a20[_0x491821 + _0xb6b103 * 8 + 528 >> 3] = _0x4086a5.buttons[_0xb6b103].value;
        } else {
          _0x537a20[_0x491821 + _0xb6b103 * 8 + 528 >> 3] = _0x4086a5.buttons[_0xb6b103];
        }
      }
      for (var _0xb6b103 = 0; _0xb6b103 < _0x4086a5.buttons.length; ++_0xb6b103) {
        if (typeof _0x4086a5.buttons[_0xb6b103] == "object") {
          _0x2f8726[_0x491821 + _0xb6b103 * 4 + 1040 >> 2] = _0x4086a5.buttons[_0xb6b103].pressed;
        } else {
          _0x2f8726[_0x491821 + _0xb6b103 * 4 + 1040 >> 2] = _0x4086a5.buttons[_0xb6b103] == 1;
        }
      }
      _0x2f8726[_0x491821 + 1296 >> 2] = _0x4086a5.connected;
      _0x2f8726[_0x491821 + 1300 >> 2] = _0x4086a5.index;
      _0x2f8726[_0x491821 + 8 >> 2] = _0x4086a5.axes.length;
      _0x2f8726[_0x491821 + 12 >> 2] = _0x4086a5.buttons.length;
      _0x4fe443(_0x4086a5.id, _0x491821 + 1304, 64);
      _0x4fe443(_0x4086a5.mapping, _0x491821 + 1368, 64);
    }
    function _0x18b2c6(_0x59bf4e, _0x5bdad5) {
      if (_0x59bf4e < 0 || _0x59bf4e >= _0x1eec61.lastGamepadState.length) {
        return -5;
      }
      if (!_0x1eec61.lastGamepadState[_0x59bf4e]) {
        return -7;
      }
      _0x478c0b(_0x5bdad5, _0x1eec61.lastGamepadState[_0x59bf4e]);
      return 0;
    }
    function _0x4b2b7d() {
      return 2147483648;
    }
    function _0x24c5e3() {
      if (_0x26b0ad) {
        return 1;
      } else {
        return 1000;
      }
    }
    function _0x35a514() {
      return _0x1eec61.lastGamepadState.length;
    }
    function _0x56c037() {
      _0x1eec61.removeAllEventListeners();
    }
    function _0x2a8853(_0x420e36) {
      return !_0x5365f0.contexts[_0x420e36] || _0x5365f0.contexts[_0x420e36].GLctx.isContextLost();
    }
    function _0x2fb163(_0x388852) {
      return _0x388852 < 0 || _0x388852 === 0 && 1 / _0x388852 === -Infinity;
    }
    function _0x131bea(_0x13c6a4, _0x1e4e59) {
      return (_0x13c6a4 >>> 0) + _0x1e4e59 * 4294967296;
    }
    function _0x35eb08(_0x29aca9, _0x463eb0) {
      return (_0x29aca9 >>> 0) + (_0x463eb0 >>> 0) * 4294967296;
    }
    function _0x50cc57(_0x5baef7, _0x1daffb) {
      if (_0x5baef7 <= 0) {
        return _0x5baef7;
      }
      var _0x38d40c = _0x1daffb <= 32 ? Math.abs(1 << _0x1daffb - 1) : Math.pow(2, _0x1daffb - 1);
      if (_0x5baef7 >= _0x38d40c && (_0x1daffb <= 32 || _0x5baef7 > _0x38d40c)) {
        _0x5baef7 = _0x38d40c * -2 + _0x5baef7;
      }
      return _0x5baef7;
    }
    function _0x1860e0(_0x58dd8a, _0x30535b) {
      if (_0x58dd8a >= 0) {
        return _0x58dd8a;
      }
      if (_0x30535b <= 32) {
        return Math.abs(1 << _0x30535b - 1) * 2 + _0x58dd8a;
      } else {
        return Math.pow(2, _0x30535b) + _0x58dd8a;
      }
    }
    function _0x4584e6(_0x3edd56, _0x1d11ed) {
      var _0x3e35d0 = _0x3edd56;
      var _0x5a6536 = _0x1d11ed;
      function _0x220cc3(_0x1de550, _0x1f8056) {
        if (_0x1f8056 === "double" || _0x1f8056 === "i64") {
          if (_0x1de550 & 7) {
            _0x1de550 += 4;
          }
        } else {}
        return _0x1de550;
      }
      function _0x344e54(_0x46efcc) {
        var _0x218b46;
        _0x5a6536 = _0x220cc3(_0x5a6536, _0x46efcc);
        if (_0x46efcc === "double") {
          _0x218b46 = Number(_0x537a20[_0x5a6536 >> 3]);
          _0x5a6536 += 8;
        } else if (_0x46efcc == "i64") {
          _0x218b46 = [_0x2f8726[_0x5a6536 >> 2], _0x2f8726[_0x5a6536 + 4 >> 2]];
          _0x5a6536 += 8;
        } else {
          _0x46efcc = "i32";
          _0x218b46 = _0x2f8726[_0x5a6536 >> 2];
          _0x5a6536 += 4;
        }
        return _0x218b46;
      }
      var _0x57a646 = [];
      var _0x44cdc7;
      var _0x29d7d8;
      var _0x4b9744;
      while (1) {
        var _0x481fe9 = _0x3e35d0;
        _0x44cdc7 = _0x245769[_0x3e35d0 >> 0];
        if (_0x44cdc7 === 0) {
          break;
        }
        _0x29d7d8 = _0x245769[_0x3e35d0 + 1 >> 0];
        if (_0x44cdc7 == 37) {
          var _0x528df7 = false;
          var _0x3c5126 = false;
          var _0x5c99a1 = false;
          var _0x38be07 = false;
          var _0x4d3438 = false;
          _0x53bbef: while (1) {
            switch (_0x29d7d8) {
              case 43:
                _0x528df7 = true;
                break;
              case 45:
                _0x3c5126 = true;
                break;
              case 35:
                _0x5c99a1 = true;
                break;
              case 48:
                if (_0x38be07) {
                  break _0x53bbef;
                } else {
                  _0x38be07 = true;
                  break;
                }
              case 32:
                _0x4d3438 = true;
                break;
              default:
                break _0x53bbef;
            }
            _0x3e35d0++;
            _0x29d7d8 = _0x245769[_0x3e35d0 + 1 >> 0];
          }
          var _0x274c5c = 0;
          if (_0x29d7d8 == 42) {
            _0x274c5c = _0x344e54("i32");
            _0x3e35d0++;
            _0x29d7d8 = _0x245769[_0x3e35d0 + 1 >> 0];
          } else {
            while (_0x29d7d8 >= 48 && _0x29d7d8 <= 57) {
              _0x274c5c = _0x274c5c * 10 + (_0x29d7d8 - 48);
              _0x3e35d0++;
              _0x29d7d8 = _0x245769[_0x3e35d0 + 1 >> 0];
            }
          }
          var _0x108d88 = false;
          var _0x2e2f9a = -1;
          if (_0x29d7d8 == 46) {
            _0x2e2f9a = 0;
            _0x108d88 = true;
            _0x3e35d0++;
            _0x29d7d8 = _0x245769[_0x3e35d0 + 1 >> 0];
            if (_0x29d7d8 == 42) {
              _0x2e2f9a = _0x344e54("i32");
              _0x3e35d0++;
            } else {
              while (1) {
                var _0x2ea85c = _0x245769[_0x3e35d0 + 1 >> 0];
                if (_0x2ea85c < 48 || _0x2ea85c > 57) {
                  break;
                }
                _0x2e2f9a = _0x2e2f9a * 10 + (_0x2ea85c - 48);
                _0x3e35d0++;
              }
            }
            _0x29d7d8 = _0x245769[_0x3e35d0 + 1 >> 0];
          }
          if (_0x2e2f9a < 0) {
            _0x2e2f9a = 6;
            _0x108d88 = false;
          }
          var _0x3f3416;
          switch (String.fromCharCode(_0x29d7d8)) {
            case "h":
              var _0x2e2e25 = _0x245769[_0x3e35d0 + 2 >> 0];
              if (_0x2e2e25 == 104) {
                _0x3e35d0++;
                _0x3f3416 = 1;
              } else {
                _0x3f3416 = 2;
              }
              break;
            case "l":
              var _0x2e2e25 = _0x245769[_0x3e35d0 + 2 >> 0];
              if (_0x2e2e25 == 108) {
                _0x3e35d0++;
                _0x3f3416 = 8;
              } else {
                _0x3f3416 = 4;
              }
              break;
            case "L":
            case "q":
            case "j":
              _0x3f3416 = 8;
              break;
            case "z":
            case "t":
            case "I":
              _0x3f3416 = 4;
              break;
            default:
              _0x3f3416 = null;
          }
          if (_0x3f3416) {
            _0x3e35d0++;
          }
          _0x29d7d8 = _0x245769[_0x3e35d0 + 1 >> 0];
          switch (String.fromCharCode(_0x29d7d8)) {
            case "d":
            case "i":
            case "u":
            case "o":
            case "x":
            case "X":
            case "p":
              {
                var _0x604d01 = _0x29d7d8 == 100 || _0x29d7d8 == 105;
                _0x3f3416 = _0x3f3416 || 4;
                _0x4b9744 = _0x344e54("i" + _0x3f3416 * 8);
                var _0x204fe5;
                if (_0x3f3416 == 8) {
                  _0x4b9744 = _0x29d7d8 == 117 ? _0x35eb08(_0x4b9744[0], _0x4b9744[1]) : _0x131bea(_0x4b9744[0], _0x4b9744[1]);
                }
                if (_0x3f3416 <= 4) {
                  var _0x4d08ac = Math.pow(256, _0x3f3416) - 1;
                  _0x4b9744 = (_0x604d01 ? _0x50cc57 : _0x1860e0)(_0x4b9744 & _0x4d08ac, _0x3f3416 * 8);
                }
                var _0x1ba2b7 = Math.abs(_0x4b9744);
                var _0x5e8154 = "";
                if (_0x29d7d8 == 100 || _0x29d7d8 == 105) {
                  _0x204fe5 = _0x50cc57(_0x4b9744, _0x3f3416 * 8).toString(10);
                } else if (_0x29d7d8 == 117) {
                  _0x204fe5 = _0x1860e0(_0x4b9744, _0x3f3416 * 8).toString(10);
                  _0x4b9744 = Math.abs(_0x4b9744);
                } else if (_0x29d7d8 == 111) {
                  _0x204fe5 = (_0x5c99a1 ? "0" : "") + _0x1ba2b7.toString(8);
                } else if (_0x29d7d8 == 120 || _0x29d7d8 == 88) {
                  _0x5e8154 = _0x5c99a1 && _0x4b9744 != 0 ? "0x" : "";
                  if (_0x4b9744 < 0) {
                    _0x4b9744 = -_0x4b9744;
                    _0x204fe5 = (_0x1ba2b7 - 1).toString(16);
                    var _0x2f35f4 = [];
                    for (var _0x538b7f = 0; _0x538b7f < _0x204fe5.length; _0x538b7f++) {
                      _0x2f35f4.push((15 - parseInt(_0x204fe5[_0x538b7f], 16)).toString(16));
                    }
                    _0x204fe5 = _0x2f35f4.join("");
                    while (_0x204fe5.length < _0x3f3416 * 2) {
                      _0x204fe5 = "f" + _0x204fe5;
                    }
                  } else {
                    _0x204fe5 = _0x1ba2b7.toString(16);
                  }
                  if (_0x29d7d8 == 88) {
                    _0x5e8154 = _0x5e8154.toUpperCase();
                    _0x204fe5 = _0x204fe5.toUpperCase();
                  }
                } else if (_0x29d7d8 == 112) {
                  if (_0x1ba2b7 === 0) {
                    _0x204fe5 = "(nil)";
                  } else {
                    _0x5e8154 = "0x";
                    _0x204fe5 = _0x1ba2b7.toString(16);
                  }
                }
                if (_0x108d88) {
                  while (_0x204fe5.length < _0x2e2f9a) {
                    _0x204fe5 = "0" + _0x204fe5;
                  }
                }
                if (_0x4b9744 >= 0) {
                  if (_0x528df7) {
                    _0x5e8154 = "+" + _0x5e8154;
                  } else if (_0x4d3438) {
                    _0x5e8154 = " " + _0x5e8154;
                  }
                }
                if (_0x204fe5.charAt(0) == "-") {
                  _0x5e8154 = "-" + _0x5e8154;
                  _0x204fe5 = _0x204fe5.substr(1);
                }
                while (_0x5e8154.length + _0x204fe5.length < _0x274c5c) {
                  if (_0x3c5126) {
                    _0x204fe5 += " ";
                  } else if (_0x38be07) {
                    _0x204fe5 = "0" + _0x204fe5;
                  } else {
                    _0x5e8154 = " " + _0x5e8154;
                  }
                }
                _0x204fe5 = _0x5e8154 + _0x204fe5;
                _0x204fe5.split("").forEach(function (_0xa2d616) {
                  _0x57a646.push(_0xa2d616.charCodeAt(0));
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
                _0x4b9744 = _0x344e54("double");
                var _0x204fe5;
                if (isNaN(_0x4b9744)) {
                  _0x204fe5 = "nan";
                  _0x38be07 = false;
                } else if (!isFinite(_0x4b9744)) {
                  _0x204fe5 = (_0x4b9744 < 0 ? "-" : "") + "inf";
                  _0x38be07 = false;
                } else {
                  var _0x4789af = false;
                  var _0x2c55fe = Math.min(_0x2e2f9a, 20);
                  if (_0x29d7d8 == 103 || _0x29d7d8 == 71) {
                    _0x4789af = true;
                    _0x2e2f9a = _0x2e2f9a || 1;
                    var _0x15c910 = parseInt(_0x4b9744.toExponential(_0x2c55fe).split("e")[1], 10);
                    if (_0x2e2f9a > _0x15c910 && _0x15c910 >= -4) {
                      _0x29d7d8 = (_0x29d7d8 == 103 ? "f" : "F").charCodeAt(0);
                      _0x2e2f9a -= _0x15c910 + 1;
                    } else {
                      _0x29d7d8 = (_0x29d7d8 == 103 ? "e" : "E").charCodeAt(0);
                      _0x2e2f9a--;
                    }
                    _0x2c55fe = Math.min(_0x2e2f9a, 20);
                  }
                  if (_0x29d7d8 == 101 || _0x29d7d8 == 69) {
                    _0x204fe5 = _0x4b9744.toExponential(_0x2c55fe);
                    if (/[eE][-+]\d$/.test(_0x204fe5)) {
                      _0x204fe5 = _0x204fe5.slice(0, -1) + "0" + _0x204fe5.slice(-1);
                    }
                  } else if (_0x29d7d8 == 102 || _0x29d7d8 == 70) {
                    _0x204fe5 = _0x4b9744.toFixed(_0x2c55fe);
                    if (_0x4b9744 === 0 && _0x2fb163(_0x4b9744)) {
                      _0x204fe5 = "-" + _0x204fe5;
                    }
                  }
                  var _0x16e2ea = _0x204fe5.split("e");
                  if (_0x4789af && !_0x5c99a1) {
                    while (_0x16e2ea[0].length > 1 && _0x16e2ea[0].includes(".") && (_0x16e2ea[0].slice(-1) == "0" || _0x16e2ea[0].slice(-1) == ".")) {
                      _0x16e2ea[0] = _0x16e2ea[0].slice(0, -1);
                    }
                  } else {
                    if (_0x5c99a1 && _0x204fe5.indexOf(".") == -1) {
                      _0x16e2ea[0] += ".";
                    }
                    while (_0x2e2f9a > _0x2c55fe++) {
                      _0x16e2ea[0] += "0";
                    }
                  }
                  _0x204fe5 = _0x16e2ea[0] + (_0x16e2ea.length > 1 ? "e" + _0x16e2ea[1] : "");
                  if (_0x29d7d8 == 69) {
                    _0x204fe5 = _0x204fe5.toUpperCase();
                  }
                  if (_0x4b9744 >= 0) {
                    if (_0x528df7) {
                      _0x204fe5 = "+" + _0x204fe5;
                    } else if (_0x4d3438) {
                      _0x204fe5 = " " + _0x204fe5;
                    }
                  }
                }
                while (_0x204fe5.length < _0x274c5c) {
                  if (_0x3c5126) {
                    _0x204fe5 += " ";
                  } else if (_0x38be07 && (_0x204fe5[0] == "-" || _0x204fe5[0] == "+")) {
                    _0x204fe5 = _0x204fe5[0] + "0" + _0x204fe5.slice(1);
                  } else {
                    _0x204fe5 = (_0x38be07 ? "0" : " ") + _0x204fe5;
                  }
                }
                if (_0x29d7d8 < 97) {
                  _0x204fe5 = _0x204fe5.toUpperCase();
                }
                _0x204fe5.split("").forEach(function (_0x4675fb) {
                  _0x57a646.push(_0x4675fb.charCodeAt(0));
                });
                break;
              }
            case "s":
              {
                var _0x2172a0 = _0x344e54("i8*");
                var _0x39dc4d = _0x2172a0 ? _0x1dd635(_0x2172a0) : "(null)".length;
                if (_0x108d88) {
                  _0x39dc4d = Math.min(_0x39dc4d, _0x2e2f9a);
                }
                if (!_0x3c5126) {
                  while (_0x39dc4d < _0x274c5c--) {
                    _0x57a646.push(32);
                  }
                }
                if (_0x2172a0) {
                  for (var _0x538b7f = 0; _0x538b7f < _0x39dc4d; _0x538b7f++) {
                    _0x57a646.push(_0x4924c2[_0x2172a0++ >> 0]);
                  }
                } else {
                  _0x57a646 = _0x57a646.concat(_0x8df336("(null)".substr(0, _0x39dc4d), true));
                }
                if (_0x3c5126) {
                  while (_0x39dc4d < _0x274c5c--) {
                    _0x57a646.push(32);
                  }
                }
                break;
              }
            case "c":
              {
                if (_0x3c5126) {
                  _0x57a646.push(_0x344e54("i8"));
                }
                while (--_0x274c5c > 0) {
                  _0x57a646.push(32);
                }
                if (!_0x3c5126) {
                  _0x57a646.push(_0x344e54("i8"));
                }
                break;
              }
            case "n":
              {
                var _0x4c0efb = _0x344e54("i32*");
                _0x2f8726[_0x4c0efb >> 2] = _0x57a646.length;
                break;
              }
            case "%":
              {
                _0x57a646.push(_0x44cdc7);
                break;
              }
            default:
              {
                for (var _0x538b7f = _0x481fe9; _0x538b7f < _0x3e35d0 + 2; _0x538b7f++) {
                  _0x57a646.push(_0x245769[_0x538b7f >> 0]);
                }
              }
          }
          _0x3e35d0 += 2;
        } else {
          _0x57a646.push(_0x44cdc7);
          _0x3e35d0 += 1;
        }
      }
      return _0x57a646;
    }
    function _0x18ff04(_0xf8ae56) {
      if (!_0xf8ae56 || !_0xf8ae56.callee || !_0xf8ae56.callee.name) {
        return [null, "", ""];
      }
      var _0x41a97a = _0xf8ae56.callee.toString();
      var _0x574ee5 = _0xf8ae56.callee.name;
      var _0x27f62d = "(";
      var _0x3cb238 = true;
      for (var _0x156f0d in _0xf8ae56) {
        var _0x335281 = _0xf8ae56[_0x156f0d];
        if (!_0x3cb238) {
          _0x27f62d += ", ";
        }
        _0x3cb238 = false;
        if (typeof _0x335281 == "number" || typeof _0x335281 == "string") {
          _0x27f62d += _0x335281;
        } else {
          _0x27f62d += "(" + typeof _0x335281 + ")";
        }
      }
      _0x27f62d += ")";
      var _0x455acf = _0xf8ae56.callee.caller;
      _0xf8ae56 = _0x455acf ? _0x455acf.arguments : [];
      if (_0x3cb238) {
        _0x27f62d = "";
      }
      return [_0xf8ae56, _0x574ee5, _0x27f62d];
    }
    function _0x55edfc(_0x1fdd16) {
      var _0x3a8cfc = _0x4bf58b();
      var _0x47bc4f = _0x3a8cfc.lastIndexOf("_emscripten_log");
      var _0x78b52a = _0x3a8cfc.lastIndexOf("_emscripten_get_callstack");
      var _0x224230 = _0x3a8cfc.indexOf("\n", Math.max(_0x47bc4f, _0x78b52a)) + 1;
      _0x3a8cfc = _0x3a8cfc.slice(_0x224230);
      if (_0x1fdd16 & 32) {
        _0x568432("EM_LOG_DEMANGLE is deprecated; ignoring");
      }
      if (_0x1fdd16 & 8 && typeof emscripten_source_map == "undefined") {
        _0x568432("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
        _0x1fdd16 ^= 8;
        _0x1fdd16 |= 16;
      }
      var _0x423e12 = null;
      if (_0x1fdd16 & 128) {
        _0x423e12 = _0x18ff04(arguments);
        while (_0x423e12[1].includes("_emscripten_")) {
          _0x423e12 = _0x18ff04(_0x423e12[0]);
        }
      }
      var _0x24bcb6 = _0x3a8cfc.split("\n");
      _0x3a8cfc = "";
      var _0x3c13fc = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
      var _0x3ab4e1 = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
      var _0x2aa8f1 = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
      for (var _0x4bff00 in _0x24bcb6) {
        var _0x517177 = _0x24bcb6[_0x4bff00];
        var _0xca014f = "";
        var _0x1fad2f = "";
        var _0x47257b = 0;
        var _0x3e9ec4 = 0;
        var _0x851b79 = _0x2aa8f1.exec(_0x517177);
        if (_0x851b79 && _0x851b79.length == 5) {
          _0xca014f = _0x851b79[1];
          _0x1fad2f = _0x851b79[2];
          _0x47257b = _0x851b79[3];
          _0x3e9ec4 = _0x851b79[4];
        } else {
          _0x851b79 = _0x3c13fc.exec(_0x517177);
          if (!_0x851b79) {
            _0x851b79 = _0x3ab4e1.exec(_0x517177);
          }
          if (_0x851b79 && _0x851b79.length >= 4) {
            _0xca014f = _0x851b79[1];
            _0x1fad2f = _0x851b79[2];
            _0x47257b = _0x851b79[3];
            _0x3e9ec4 = _0x851b79[4] | 0;
          } else {
            _0x3a8cfc += _0x517177 + "\n";
            continue;
          }
        }
        var _0x4c7938 = false;
        if (_0x1fdd16 & 8) {
          var _0x18d0ed = emscripten_source_map.originalPositionFor({
            line: _0x47257b,
            column: _0x3e9ec4
          });
          _0x4c7938 = _0x18d0ed && _0x18d0ed.source;
          if (_0x4c7938) {
            if (_0x1fdd16 & 64) {
              _0x18d0ed.source = _0x18d0ed.source.substring(_0x18d0ed.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
            }
            _0x3a8cfc += "    at " + _0xca014f + " (" + _0x18d0ed.source + ":" + _0x18d0ed.line + ":" + _0x18d0ed.column + ")\n";
          }
        }
        if (_0x1fdd16 & 16 || !_0x4c7938) {
          if (_0x1fdd16 & 64) {
            _0x1fad2f = _0x1fad2f.substring(_0x1fad2f.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x3a8cfc += (_0x4c7938 ? "     = " + _0xca014f : "    at " + _0xca014f) + " (" + _0x1fad2f + ":" + _0x47257b + ":" + _0x3e9ec4 + ")\n";
        }
        if (_0x1fdd16 & 128 && _0x423e12[0]) {
          if (_0x423e12[1] == _0xca014f && _0x423e12[2].length > 0) {
            _0x3a8cfc = _0x3a8cfc.replace(/\s+$/, "");
            _0x3a8cfc += " with values: " + _0x423e12[1] + _0x423e12[2] + "\n";
          }
          _0x423e12 = _0x18ff04(_0x423e12[0]);
        }
      }
      _0x3a8cfc = _0x3a8cfc.replace(/\s+$/, "");
      return _0x3a8cfc;
    }
    function _0x2943e1(_0x2d0717, _0x19f930) {
      if (_0x2d0717 & 24) {
        _0x19f930 = _0x19f930.replace(/\s+$/, "");
        _0x19f930 += (_0x19f930.length > 0 ? "\n" : "") + _0x55edfc(_0x2d0717);
      }
      if (_0x2d0717 & 1) {
        if (_0x2d0717 & 4) {
          console.error(_0x19f930);
        } else if (_0x2d0717 & 2) {
          console.warn(_0x19f930);
        } else if (_0x2d0717 & 512) {
          console.info(_0x19f930);
        } else if (_0x2d0717 & 256) {
          console.debug(_0x19f930);
        } else {
          console.log(_0x19f930);
        }
      } else if (_0x2d0717 & 6) {
        _0x1771de(_0x19f930);
      } else {
        _0x1ae8e6(_0x19f930);
      }
    }
    function _0x104481(_0x5424cc, _0x43ce49, _0x34f3f0) {
      var _0x4447a9 = _0x4584e6(_0x43ce49, _0x34f3f0);
      var _0x55ec66 = _0x2aa2a9(_0x4447a9, 0);
      _0x2943e1(_0x5424cc, _0x55ec66);
    }
    function _0x511ff9(_0x4bfbd2, _0x2e0b33, _0x30e30a) {
      _0x4924c2.copyWithin(_0x4bfbd2, _0x2e0b33, _0x2e0b33 + _0x30e30a);
    }
    function _0x129690(_0x258851, _0x328199) {
      if (!_0x1eec61.fullscreenEnabled()) {
        return -1;
      }
      _0x258851 = _0x58b982(_0x258851);
      if (!_0x258851) {
        return -4;
      }
      if (!_0x258851.requestFullscreen && !_0x258851.webkitRequestFullscreen) {
        return -3;
      }
      var _0x397a0b = _0x1eec61.canPerformEventHandlerRequests();
      if (!_0x397a0b) {
        if (_0x328199.deferUntilInEventHandler) {
          _0x1eec61.deferCall(_0x5d8ecc, 1, [_0x258851, _0x328199]);
          return 1;
        } else {
          return -2;
        }
      }
      return _0x5d8ecc(_0x258851, _0x328199);
    }
    function _0x26bca2(_0xcb1f5c, _0x5d8c79) {
      var _0x5d41e2 = {
        scaleMode: 0,
        canvasResolutionScaleMode: 0,
        filteringMode: 0,
        deferUntilInEventHandler: _0x5d8c79,
        canvasResizedCallbackTargetThread: 2
      };
      return _0x129690(_0xcb1f5c, _0x5d41e2);
    }
    function _0x25070c(_0x48b71d, _0xda583c) {
      _0x48b71d = _0x58b982(_0x48b71d);
      if (!_0x48b71d) {
        return -4;
      }
      if (!_0x48b71d.requestPointerLock && !_0x48b71d.msRequestPointerLock) {
        return -1;
      }
      var _0x9f4050 = _0x1eec61.canPerformEventHandlerRequests();
      if (!_0x9f4050) {
        if (_0xda583c) {
          _0x1eec61.deferCall(_0x30a004, 2, [_0x48b71d]);
          return 1;
        } else {
          return -2;
        }
      }
      return _0x30a004(_0x48b71d);
    }
    function _0x394ce5(_0xce0fe9) {
      try {
        _0x1d6cae.grow(_0xce0fe9 - _0x2b651b.byteLength + 65535 >>> 16);
        _0xaa2d5a(_0x1d6cae.buffer);
        return 1;
      } catch (_0x46ee37) {}
    }
    function _0x2a9053(_0x2f90fc) {
      var _0xbef419 = _0x4924c2.length;
      _0x2f90fc = _0x2f90fc >>> 0;
      var _0xea67cc = _0x4b2b7d();
      if (_0x2f90fc > _0xea67cc) {
        return false;
      }
      let _0x55ada0 = (_0x496c01, _0x8c8125) => _0x496c01 + (_0x8c8125 - _0x496c01 % _0x8c8125) % _0x8c8125;
      for (var _0x33168f = 1; _0x33168f <= 4; _0x33168f *= 2) {
        var _0x3b2799 = _0xbef419 * (1 + 0.2 / _0x33168f);
        _0x3b2799 = Math.min(_0x3b2799, _0x2f90fc + 100663296);
        var _0x3d3153 = Math.min(_0xea67cc, _0x55ada0(Math.max(_0x2f90fc, _0x3b2799), 65536));
        var _0x1b80cf = _0x394ce5(_0x3d3153);
        if (_0x1b80cf) {
          return true;
        }
      }
      return false;
    }
    function _0xf37b30() {
      try {
        if (navigator.getGamepads) {
          if (_0x1eec61.lastGamepadState = navigator.getGamepads()) {
            return 0;
          } else {
            return -1;
          }
        }
      } catch (_0x13afae) {
        navigator.getGamepads = null;
      }
      return -1;
    }
    function _0x4ce1c0(_0x53b7c0, _0x1e96f9, _0x68c5c1, _0x1133d9, _0x14bed9, _0x4085df, _0x529427) {
      if (!_0x1eec61.focusEvent) {
        _0x1eec61.focusEvent = _0x210cd3(256);
      }
      var _0x30a747 = function (_0xc58031) {
        var _0x62a01c = _0xc58031 || event;
        var _0x5569a1 = _0x1eec61.getNodeNameForTarget(_0x62a01c.target);
        var _0x191152 = _0x62a01c.target.id ? _0x62a01c.target.id : "";
        var _0x1909d5 = _0x1eec61.focusEvent;
        _0x4fe443(_0x5569a1, _0x1909d5 + 0, 128);
        _0x4fe443(_0x191152, _0x1909d5 + 128, 128);
        if (function (_0x5f2e4d, _0x3e9dfe, _0x5d8646) {
          return _0x2c3ceb.apply(null, [_0x1133d9, _0x5f2e4d, _0x3e9dfe, _0x5d8646]);
        }(_0x14bed9, _0x1909d5, _0x1e96f9)) {
          _0x62a01c.preventDefault();
        }
      };
      var _0x258465 = {
        target: _0x58b982(_0x53b7c0),
        eventTypeString: _0x4085df,
        callbackfunc: _0x1133d9,
        handlerFunc: _0x30a747,
        useCapture: _0x68c5c1
      };
      _0x1eec61.registerOrRemoveHandler(_0x258465);
    }
    function _0x4a6a2f(_0x417944, _0x18958c, _0x51b1a4, _0x1f6daf, _0x12e5cd) {
      _0x4ce1c0(_0x417944, _0x18958c, _0x51b1a4, _0x1f6daf, 12, "blur", _0x12e5cd);
      return 0;
    }
    function _0x2525f8(_0x3c2868, _0x512c30, _0x5e7102, _0x5be19c, _0x5f519c) {
      _0x4ce1c0(_0x3c2868, _0x512c30, _0x5e7102, _0x5be19c, 13, "focus", _0x5f519c);
      return 0;
    }
    function _0x446d6c(_0x12dfaa, _0x34f981, _0x4692fa, _0x2b919a, _0x4c3574, _0x50f9ea, _0x43a32a) {
      if (!_0x1eec61.fullscreenChangeEvent) {
        _0x1eec61.fullscreenChangeEvent = _0x210cd3(280);
      }
      var _0x9a2f40 = function (_0x185c75) {
        var _0x411c8c = _0x185c75 || event;
        var _0xd9ab1 = _0x1eec61.fullscreenChangeEvent;
        _0x337225(_0xd9ab1);
        if (function (_0x1946a1, _0x3629eb, _0x586075) {
          return _0x2c3ceb.apply(null, [_0x2b919a, _0x1946a1, _0x3629eb, _0x586075]);
        }(_0x4c3574, _0xd9ab1, _0x34f981)) {
          _0x411c8c.preventDefault();
        }
      };
      var _0x5b87ea = {
        target: _0x12dfaa,
        eventTypeString: _0x50f9ea,
        callbackfunc: _0x2b919a,
        handlerFunc: _0x9a2f40,
        useCapture: _0x4692fa
      };
      _0x1eec61.registerOrRemoveHandler(_0x5b87ea);
    }
    function _0x3b4f57(_0x50ec93, _0x599740, _0x2200b5, _0x14c5fb, _0x3d7bac) {
      if (!_0x1eec61.fullscreenEnabled()) {
        return -1;
      }
      _0x50ec93 = _0x58b982(_0x50ec93);
      if (!_0x50ec93) {
        return -4;
      }
      _0x446d6c(_0x50ec93, _0x599740, _0x2200b5, _0x14c5fb, 19, "fullscreenchange", _0x3d7bac);
      _0x446d6c(_0x50ec93, _0x599740, _0x2200b5, _0x14c5fb, 19, "webkitfullscreenchange", _0x3d7bac);
      return 0;
    }
    function _0xcf54a4(_0x248f7d, _0x3dc9dd, _0x53a5a8, _0x52b301, _0x4fad20, _0x47ff7c, _0xfccd29) {
      if (!_0x1eec61.gamepadEvent) {
        _0x1eec61.gamepadEvent = _0x210cd3(1432);
      }
      var _0x226a26 = function (_0x2bbd46) {
        var _0x369265 = _0x2bbd46 || event;
        var _0xadedb = _0x1eec61.gamepadEvent;
        _0x478c0b(_0xadedb, _0x369265.gamepad);
        if (function (_0x5de18f, _0x43cdaa, _0xe14286) {
          return _0x2c3ceb.apply(null, [_0x52b301, _0x5de18f, _0x43cdaa, _0xe14286]);
        }(_0x4fad20, _0xadedb, _0x3dc9dd)) {
          _0x369265.preventDefault();
        }
      };
      var _0x1789bf = {
        target: _0x58b982(_0x248f7d),
        allowsDeferredCalls: true,
        eventTypeString: _0x47ff7c,
        callbackfunc: _0x52b301,
        handlerFunc: _0x226a26,
        useCapture: _0x53a5a8
      };
      _0x1eec61.registerOrRemoveHandler(_0x1789bf);
    }
    function _0x2c144b(_0x181a31, _0x670ba4, _0x306ce0, _0xe519b8) {
      if (_0xf37b30()) {
        return -1;
      }
      return _0xcf54a4(2, _0x181a31, _0x670ba4, _0x306ce0, 26, "gamepadconnected", _0xe519b8);
    }
    function _0x296fc3(_0x100520, _0x1e77e9, _0x5593a0, _0x4a0667) {
      if (_0xf37b30()) {
        return -1;
      }
      return _0xcf54a4(2, _0x100520, _0x1e77e9, _0x5593a0, 27, "gamepaddisconnected", _0x4a0667);
    }
    function _0x7db7c2(_0x102f0a, _0x535c73, _0x420b7a) {
      return setInterval(function () {
        _0x401f34(function () {
          (function (_0x50e6b1) {
            _0x2e598c.apply(null, [_0x102f0a, _0x50e6b1]);
          })(_0x420b7a);
        });
      }, _0x535c73);
    }
    function _0x39c6a7(_0x238917, _0x3e61a9, _0x209c2e, _0x2feedc, _0x49a338, _0x230f2e, _0x1ce52f) {
      if (!_0x1eec61.keyEvent) {
        _0x1eec61.keyEvent = _0x210cd3(176);
      }
      var _0x49fbe1 = function (_0x1b9063) {
        var _0x4ac14e = _0x1eec61.keyEvent;
        _0x537a20[_0x4ac14e >> 3] = _0x1b9063.timeStamp;
        var _0xe45268 = _0x4ac14e >> 2;
        _0x2f8726[_0xe45268 + 2] = _0x1b9063.location;
        _0x2f8726[_0xe45268 + 3] = _0x1b9063.ctrlKey;
        _0x2f8726[_0xe45268 + 4] = _0x1b9063.shiftKey;
        _0x2f8726[_0xe45268 + 5] = _0x1b9063.altKey;
        _0x2f8726[_0xe45268 + 6] = _0x1b9063.metaKey;
        _0x2f8726[_0xe45268 + 7] = _0x1b9063.repeat;
        _0x2f8726[_0xe45268 + 8] = _0x1b9063.charCode;
        _0x2f8726[_0xe45268 + 9] = _0x1b9063.keyCode;
        _0x2f8726[_0xe45268 + 10] = _0x1b9063.which;
        _0x4fe443(_0x1b9063.key || "", _0x4ac14e + 44, 32);
        _0x4fe443(_0x1b9063.code || "", _0x4ac14e + 76, 32);
        _0x4fe443(_0x1b9063.char || "", _0x4ac14e + 108, 32);
        _0x4fe443(_0x1b9063.locale || "", _0x4ac14e + 140, 32);
        if (function (_0x4f3b65, _0x4524f2, _0x468f24) {
          return _0x2c3ceb.apply(null, [_0x2feedc, _0x4f3b65, _0x4524f2, _0x468f24]);
        }(_0x49a338, _0x4ac14e, _0x3e61a9)) {
          _0x1b9063.preventDefault();
        }
      };
      var _0x5eefda = {
        target: _0x58b982(_0x238917),
        allowsDeferredCalls: true,
        eventTypeString: _0x230f2e,
        callbackfunc: _0x2feedc,
        handlerFunc: _0x49fbe1,
        useCapture: _0x209c2e
      };
      _0x1eec61.registerOrRemoveHandler(_0x5eefda);
    }
    function _0x9a579e(_0x193f72, _0xe61c8e, _0x45f825, _0x350314, _0x4b2283) {
      _0x39c6a7(_0x193f72, _0xe61c8e, _0x45f825, _0x350314, 2, "keydown", _0x4b2283);
      return 0;
    }
    function _0x24fb67(_0x1e2f86, _0x3ef8f4, _0x574bc8, _0x153a31, _0x7b6dd7) {
      _0x39c6a7(_0x1e2f86, _0x3ef8f4, _0x574bc8, _0x153a31, 1, "keypress", _0x7b6dd7);
      return 0;
    }
    function _0xd7b549(_0x55297f, _0x362b3f, _0x69078e, _0x1935f0, _0x56e257) {
      _0x39c6a7(_0x55297f, _0x362b3f, _0x69078e, _0x1935f0, 3, "keyup", _0x56e257);
      return 0;
    }
    function _0x2af038(_0x57de92, _0x2016a9, _0x2b5fa5) {
      var _0x2fc85b = function () {
        _0x1873f9.call(null, _0x57de92);
      };
      _0x21a349(_0x2fc85b, _0x2016a9, _0x2b5fa5);
    }
    function _0x42287d(_0xe4dc57, _0x2fa840, _0x40f01f) {
      _0x537a20[_0xe4dc57 >> 3] = _0x2fa840.timeStamp;
      var _0xd8a591 = _0xe4dc57 >> 2;
      _0x2f8726[_0xd8a591 + 2] = _0x2fa840.screenX;
      _0x2f8726[_0xd8a591 + 3] = _0x2fa840.screenY;
      _0x2f8726[_0xd8a591 + 4] = _0x2fa840.clientX;
      _0x2f8726[_0xd8a591 + 5] = _0x2fa840.clientY;
      _0x2f8726[_0xd8a591 + 6] = _0x2fa840.ctrlKey;
      _0x2f8726[_0xd8a591 + 7] = _0x2fa840.shiftKey;
      _0x2f8726[_0xd8a591 + 8] = _0x2fa840.altKey;
      _0x2f8726[_0xd8a591 + 9] = _0x2fa840.metaKey;
      _0x1f5adc[_0xd8a591 * 2 + 20] = _0x2fa840.button;
      _0x1f5adc[_0xd8a591 * 2 + 21] = _0x2fa840.buttons;
      _0x2f8726[_0xd8a591 + 11] = _0x2fa840.movementX;
      _0x2f8726[_0xd8a591 + 12] = _0x2fa840.movementY;
      var _0x43258a = _0x52349f(_0x40f01f);
      _0x2f8726[_0xd8a591 + 13] = _0x2fa840.clientX - _0x43258a.left;
      _0x2f8726[_0xd8a591 + 14] = _0x2fa840.clientY - _0x43258a.top;
    }
    function _0xdfb2f1(_0x30617a, _0x5c1cc1, _0x508aae, _0x73efc1, _0x119fc6, _0x435923, _0x85a78e) {
      if (!_0x1eec61.mouseEvent) {
        _0x1eec61.mouseEvent = _0x210cd3(72);
      }
      _0x30617a = _0x58b982(_0x30617a);
      var _0x2013e8 = function (_0x7825a2) {
        var _0x409ac2 = _0x7825a2 || event;
        _0x42287d(_0x1eec61.mouseEvent, _0x409ac2, _0x30617a);
        if (function (_0x586ef2, _0x7295d7, _0xc5c27c) {
          return _0x2c3ceb.apply(null, [_0x73efc1, _0x586ef2, _0x7295d7, _0xc5c27c]);
        }(_0x119fc6, _0x1eec61.mouseEvent, _0x5c1cc1)) {
          _0x409ac2.preventDefault();
        }
      };
      var _0x5df150 = {
        target: _0x30617a,
        allowsDeferredCalls: _0x435923 != "mousemove" && _0x435923 != "mouseenter" && _0x435923 != "mouseleave",
        eventTypeString: _0x435923,
        callbackfunc: _0x73efc1,
        handlerFunc: _0x2013e8,
        useCapture: _0x508aae
      };
      _0x1eec61.registerOrRemoveHandler(_0x5df150);
    }
    function _0x4de4f9(_0x4852a3, _0x3ab3b6, _0x3239c8, _0x4810b1, _0x5377af) {
      _0xdfb2f1(_0x4852a3, _0x3ab3b6, _0x3239c8, _0x4810b1, 5, "mousedown", _0x5377af);
      return 0;
    }
    function _0x41583b(_0x5b9bab, _0x4bed37, _0x658022, _0x139102, _0x50230c) {
      _0xdfb2f1(_0x5b9bab, _0x4bed37, _0x658022, _0x139102, 8, "mousemove", _0x50230c);
      return 0;
    }
    function _0x2014fc(_0x7bdee0, _0xf53b44, _0x1b16f7, _0x2d109f, _0x14d2dd) {
      _0xdfb2f1(_0x7bdee0, _0xf53b44, _0x1b16f7, _0x2d109f, 6, "mouseup", _0x14d2dd);
      return 0;
    }
    function _0x3e26eb(_0xdba89f) {
      var _0x2a38db = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
      var _0xa16ab5 = !!_0x2a38db;
      _0x2f8726[_0xdba89f >> 2] = _0xa16ab5;
      var _0xb247 = _0x1eec61.getNodeNameForTarget(_0x2a38db);
      var _0x4a2adb = _0x2a38db && _0x2a38db.id ? _0x2a38db.id : "";
      _0x4fe443(_0xb247, _0xdba89f + 4, 128);
      _0x4fe443(_0x4a2adb, _0xdba89f + 132, 128);
    }
    function _0x38b68f(_0x580f58, _0x15cfab, _0xc57f02, _0x2dc409, _0x169df8, _0x4cf45c, _0x3f700a) {
      if (!_0x1eec61.pointerlockChangeEvent) {
        _0x1eec61.pointerlockChangeEvent = _0x210cd3(260);
      }
      var _0x43259e = function (_0x2bfea7) {
        var _0x1abe43 = _0x2bfea7 || event;
        var _0x106af8 = _0x1eec61.pointerlockChangeEvent;
        _0x3e26eb(_0x106af8);
        if (function (_0x1d75b0, _0x905631, _0x46a2c1) {
          return _0x2c3ceb.apply(null, [_0x2dc409, _0x1d75b0, _0x905631, _0x46a2c1]);
        }(_0x169df8, _0x106af8, _0x15cfab)) {
          _0x1abe43.preventDefault();
        }
      };
      var _0x14b50a = {
        target: _0x580f58,
        eventTypeString: _0x4cf45c,
        callbackfunc: _0x2dc409,
        handlerFunc: _0x43259e,
        useCapture: _0xc57f02
      };
      _0x1eec61.registerOrRemoveHandler(_0x14b50a);
    }
    function _0x43ca5c(_0xe4e440, _0x15ec19, _0x5d46e3, _0x4b0c7f, _0x2e2bd5) {
      if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
        return -1;
      }
      _0xe4e440 = _0x58b982(_0xe4e440);
      if (!_0xe4e440) {
        return -4;
      }
      _0x38b68f(_0xe4e440, _0x15ec19, _0x5d46e3, _0x4b0c7f, 20, "pointerlockchange", _0x2e2bd5);
      _0x38b68f(_0xe4e440, _0x15ec19, _0x5d46e3, _0x4b0c7f, 20, "mozpointerlockchange", _0x2e2bd5);
      _0x38b68f(_0xe4e440, _0x15ec19, _0x5d46e3, _0x4b0c7f, 20, "webkitpointerlockchange", _0x2e2bd5);
      _0x38b68f(_0xe4e440, _0x15ec19, _0x5d46e3, _0x4b0c7f, 20, "mspointerlockchange", _0x2e2bd5);
      return 0;
    }
    function _0x16c003(_0x295f38, _0x4a2b85, _0xed4f8a, _0x38119e, _0x4ff143, _0x3e064d, _0x27d24d) {
      if (!_0x1eec61.touchEvent) {
        _0x1eec61.touchEvent = _0x210cd3(1696);
      }
      _0x295f38 = _0x58b982(_0x295f38);
      var _0x56d43c = function (_0x275a7d) {
        var _0x1152f6;
        var _0x9c3706 = {};
        var _0x2babff = _0x275a7d.touches;
        for (var _0x12dd7f = 0; _0x12dd7f < _0x2babff.length; ++_0x12dd7f) {
          _0x1152f6 = _0x2babff[_0x12dd7f];
          _0x1152f6.isChanged = _0x1152f6.onTarget = 0;
          _0x9c3706[_0x1152f6.identifier] = _0x1152f6;
        }
        for (var _0x12dd7f = 0; _0x12dd7f < _0x275a7d.changedTouches.length; ++_0x12dd7f) {
          _0x1152f6 = _0x275a7d.changedTouches[_0x12dd7f];
          _0x1152f6.isChanged = 1;
          _0x9c3706[_0x1152f6.identifier] = _0x1152f6;
        }
        for (var _0x12dd7f = 0; _0x12dd7f < _0x275a7d.targetTouches.length; ++_0x12dd7f) {
          _0x9c3706[_0x275a7d.targetTouches[_0x12dd7f].identifier].onTarget = 1;
        }
        var _0x151edb = _0x1eec61.touchEvent;
        var _0x3697f4 = _0x151edb >> 2;
        _0x2f8726[_0x3697f4 + 3] = _0x275a7d.ctrlKey;
        _0x2f8726[_0x3697f4 + 4] = _0x275a7d.shiftKey;
        _0x2f8726[_0x3697f4 + 5] = _0x275a7d.altKey;
        _0x2f8726[_0x3697f4 + 6] = _0x275a7d.metaKey;
        _0x3697f4 += 7;
        var _0x292b00 = _0x52349f(_0x295f38);
        var _0x53f6d6 = 0;
        for (var _0x12dd7f in _0x9c3706) {
          var _0x1152f6 = _0x9c3706[_0x12dd7f];
          _0x2f8726[_0x3697f4 + 0] = _0x1152f6.identifier;
          _0x2f8726[_0x3697f4 + 1] = _0x1152f6.screenX;
          _0x2f8726[_0x3697f4 + 2] = _0x1152f6.screenY;
          _0x2f8726[_0x3697f4 + 3] = _0x1152f6.clientX;
          _0x2f8726[_0x3697f4 + 4] = _0x1152f6.clientY;
          _0x2f8726[_0x3697f4 + 5] = _0x1152f6.pageX;
          _0x2f8726[_0x3697f4 + 6] = _0x1152f6.pageY;
          _0x2f8726[_0x3697f4 + 7] = _0x1152f6.isChanged;
          _0x2f8726[_0x3697f4 + 8] = _0x1152f6.onTarget;
          _0x2f8726[_0x3697f4 + 9] = _0x1152f6.clientX - _0x292b00.left;
          _0x2f8726[_0x3697f4 + 10] = _0x1152f6.clientY - _0x292b00.top;
          _0x3697f4 += 13;
          if (++_0x53f6d6 > 31) {
            break;
          }
        }
        _0x2f8726[_0x151edb + 8 >> 2] = _0x53f6d6;
        if (function (_0x335c75, _0x3d7cf6, _0xbbf2d1) {
          return _0x2c3ceb.apply(null, [_0x38119e, _0x335c75, _0x3d7cf6, _0xbbf2d1]);
        }(_0x4ff143, _0x151edb, _0x4a2b85)) {
          _0x275a7d.preventDefault();
        }
      };
      var _0x3cc8c4 = {
        target: _0x295f38,
        allowsDeferredCalls: _0x3e064d == "touchstart" || _0x3e064d == "touchend",
        eventTypeString: _0x3e064d,
        callbackfunc: _0x38119e,
        handlerFunc: _0x56d43c,
        useCapture: _0xed4f8a
      };
      _0x1eec61.registerOrRemoveHandler(_0x3cc8c4);
    }
    function _0x5295f4(_0x2dfee1, _0x30f7ff, _0x9796ad, _0x1c84a7, _0x282998) {
      _0x16c003(_0x2dfee1, _0x30f7ff, _0x9796ad, _0x1c84a7, 25, "touchcancel", _0x282998);
      return 0;
    }
    function _0x4de263(_0x88124d, _0x2f8454, _0x3fe2e0, _0x2c16e6, _0x6ad122) {
      _0x16c003(_0x88124d, _0x2f8454, _0x3fe2e0, _0x2c16e6, 23, "touchend", _0x6ad122);
      return 0;
    }
    function _0x4d9c8e(_0xf570ff, _0x5480ed, _0x4c7cda, _0x507589, _0x4a51a9) {
      _0x16c003(_0xf570ff, _0x5480ed, _0x4c7cda, _0x507589, 24, "touchmove", _0x4a51a9);
      return 0;
    }
    function _0x132a8a(_0x201a2e, _0x3c97d0, _0x5a86a4, _0xa9a1b4, _0xa3bced) {
      _0x16c003(_0x201a2e, _0x3c97d0, _0x5a86a4, _0xa9a1b4, 22, "touchstart", _0xa3bced);
      return 0;
    }
    function _0x17be16(_0x5dc4ad, _0x9e738e, _0x217646, _0x2cfd6f, _0x1976b5, _0x2b3c9e, _0x36cfdb) {
      if (!_0x1eec61.wheelEvent) {
        _0x1eec61.wheelEvent = _0x210cd3(104);
      }
      var _0x582917 = function (_0x17a7e9) {
        var _0x23ba00 = _0x17a7e9 || event;
        var _0x1655b1 = _0x1eec61.wheelEvent;
        _0x42287d(_0x1655b1, _0x23ba00, _0x5dc4ad);
        _0x537a20[_0x1655b1 + 72 >> 3] = _0x23ba00.deltaX;
        _0x537a20[_0x1655b1 + 80 >> 3] = _0x23ba00.deltaY;
        _0x537a20[_0x1655b1 + 88 >> 3] = _0x23ba00.deltaZ;
        _0x2f8726[_0x1655b1 + 96 >> 2] = _0x23ba00.deltaMode;
        if (function (_0x559f66, _0x8cf53b, _0x50d918) {
          return _0x2c3ceb.apply(null, [_0x2cfd6f, _0x559f66, _0x8cf53b, _0x50d918]);
        }(_0x1976b5, _0x1655b1, _0x9e738e)) {
          _0x23ba00.preventDefault();
        }
      };
      var _0x4d1ec7 = {
        target: _0x5dc4ad,
        allowsDeferredCalls: true,
        eventTypeString: _0x2b3c9e,
        callbackfunc: _0x2cfd6f,
        handlerFunc: _0x582917,
        useCapture: _0x217646
      };
      _0x1eec61.registerOrRemoveHandler(_0x4d1ec7);
    }
    function _0x3919fb(_0xc9b13b, _0x586955, _0x4e8443, _0x2f4adb, _0x25689a) {
      _0xc9b13b = _0x58b982(_0xc9b13b);
      if (typeof _0xc9b13b.onwheel != "undefined") {
        _0x17be16(_0xc9b13b, _0x586955, _0x4e8443, _0x2f4adb, 9, "wheel", _0x25689a);
        return 0;
      } else {
        return -1;
      }
    }
    function _0x5f03a4(_0x59f00f) {
      var _0x277be4 = _0x59f00f.getExtension("ANGLE_instanced_arrays");
      if (_0x277be4) {
        _0x59f00f.vertexAttribDivisor = function (_0x12cf6b, _0x1bc5b7) {
          _0x277be4.vertexAttribDivisorANGLE(_0x12cf6b, _0x1bc5b7);
        };
        _0x59f00f.drawArraysInstanced = function (_0x6739b0, _0x16bb8b, _0xa8425f, _0x1913c5) {
          _0x277be4.drawArraysInstancedANGLE(_0x6739b0, _0x16bb8b, _0xa8425f, _0x1913c5);
        };
        _0x59f00f.drawElementsInstanced = function (_0x107cb2, _0x4e9da4, _0x1d0bf4, _0x10d962, _0x535379) {
          _0x277be4.drawElementsInstancedANGLE(_0x107cb2, _0x4e9da4, _0x1d0bf4, _0x10d962, _0x535379);
        };
        return 1;
      }
    }
    function _0x1def6e(_0x3b257f) {
      var _0x390d17 = _0x3b257f.getExtension("OES_vertex_array_object");
      if (_0x390d17) {
        _0x3b257f.createVertexArray = function () {
          return _0x390d17.createVertexArrayOES();
        };
        _0x3b257f.deleteVertexArray = function (_0x1cac99) {
          _0x390d17.deleteVertexArrayOES(_0x1cac99);
        };
        _0x3b257f.bindVertexArray = function (_0x2616d2) {
          _0x390d17.bindVertexArrayOES(_0x2616d2);
        };
        _0x3b257f.isVertexArray = function (_0x38c05f) {
          return _0x390d17.isVertexArrayOES(_0x38c05f);
        };
        return 1;
      }
    }
    function _0x11d0c7(_0x1c924c) {
      var _0xd23bd5 = _0x1c924c.getExtension("WEBGL_draw_buffers");
      if (_0xd23bd5) {
        _0x1c924c.drawBuffers = function (_0x59cddf, _0x4ed644) {
          _0xd23bd5.drawBuffersWEBGL(_0x59cddf, _0x4ed644);
        };
        return 1;
      }
    }
    function _0x30c5ce(_0x2ea395) {
      return !!(_0x2ea395.dibvbi = _0x2ea395.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
    }
    function _0x58f71f(_0xf87fdc) {
      return !!(_0xf87fdc.mdibvbi = _0xf87fdc.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
    }
    function _0x38fcda(_0x599dcb) {
      return !!(_0x599dcb.multiDrawWebgl = _0x599dcb.getExtension("WEBGL_multi_draw"));
    }
    var _0x5365f0 = {
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
      recordError: function _0x2f36e9(_0x238016) {
        if (!_0x5365f0.lastError) {
          _0x5365f0.lastError = _0x238016;
        }
      },
      getNewId: function (_0x286db9) {
        var _0xe7bc42 = _0x5365f0.counter++;
        for (var _0x57edcb = _0x286db9.length; _0x57edcb < _0xe7bc42; _0x57edcb++) {
          _0x286db9[_0x57edcb] = null;
        }
        return _0xe7bc42;
      },
      MAX_TEMP_BUFFER_SIZE: 2097152,
      numTempVertexBuffersPerSize: 64,
      log2ceilLookup: function (_0x248b5c) {
        return 32 - Math.clz32(_0x248b5c === 0 ? 0 : _0x248b5c - 1);
      },
      generateTempBuffers: function (_0x30794b, _0x21b898) {
        var _0x29aea3 = _0x5365f0.log2ceilLookup(_0x5365f0.MAX_TEMP_BUFFER_SIZE);
        _0x21b898.tempVertexBufferCounters1 = [];
        _0x21b898.tempVertexBufferCounters2 = [];
        _0x21b898.tempVertexBufferCounters1.length = _0x21b898.tempVertexBufferCounters2.length = _0x29aea3 + 1;
        _0x21b898.tempVertexBuffers1 = [];
        _0x21b898.tempVertexBuffers2 = [];
        _0x21b898.tempVertexBuffers1.length = _0x21b898.tempVertexBuffers2.length = _0x29aea3 + 1;
        _0x21b898.tempIndexBuffers = [];
        _0x21b898.tempIndexBuffers.length = _0x29aea3 + 1;
        for (var _0x15d3e2 = 0; _0x15d3e2 <= _0x29aea3; ++_0x15d3e2) {
          _0x21b898.tempIndexBuffers[_0x15d3e2] = null;
          _0x21b898.tempVertexBufferCounters1[_0x15d3e2] = _0x21b898.tempVertexBufferCounters2[_0x15d3e2] = 0;
          var _0x5e22b4 = _0x5365f0.numTempVertexBuffersPerSize;
          _0x21b898.tempVertexBuffers1[_0x15d3e2] = [];
          _0x21b898.tempVertexBuffers2[_0x15d3e2] = [];
          var _0x47db7d = _0x21b898.tempVertexBuffers1[_0x15d3e2];
          var _0x45407a = _0x21b898.tempVertexBuffers2[_0x15d3e2];
          _0x47db7d.length = _0x45407a.length = _0x5e22b4;
          for (var _0x5a46a2 = 0; _0x5a46a2 < _0x5e22b4; ++_0x5a46a2) {
            _0x47db7d[_0x5a46a2] = _0x45407a[_0x5a46a2] = null;
          }
        }
        if (_0x30794b) {
          _0x21b898.tempQuadIndexBuffer = _0x4571ce.createBuffer();
          _0x21b898.GLctx.bindBuffer(34963, _0x21b898.tempQuadIndexBuffer);
          var _0x365912 = _0x5365f0.MAX_TEMP_BUFFER_SIZE >> 1;
          var _0x42b755 = new Uint16Array(_0x365912);
          var _0x15d3e2 = 0;
          var _0x45e6a1 = 0;
          while (1) {
            _0x42b755[_0x15d3e2++] = _0x45e6a1;
            if (_0x15d3e2 >= _0x365912) {
              break;
            }
            _0x42b755[_0x15d3e2++] = _0x45e6a1 + 1;
            if (_0x15d3e2 >= _0x365912) {
              break;
            }
            _0x42b755[_0x15d3e2++] = _0x45e6a1 + 2;
            if (_0x15d3e2 >= _0x365912) {
              break;
            }
            _0x42b755[_0x15d3e2++] = _0x45e6a1;
            if (_0x15d3e2 >= _0x365912) {
              break;
            }
            _0x42b755[_0x15d3e2++] = _0x45e6a1 + 2;
            if (_0x15d3e2 >= _0x365912) {
              break;
            }
            _0x42b755[_0x15d3e2++] = _0x45e6a1 + 3;
            if (_0x15d3e2 >= _0x365912) {
              break;
            }
            _0x45e6a1 += 4;
          }
          _0x21b898.GLctx.bufferData(34963, _0x42b755, 35044);
          _0x21b898.GLctx.bindBuffer(34963, null);
        }
      },
      getTempVertexBuffer: function _0x485dd9(_0x4c0daf) {
        var _0x4a9af7 = _0x5365f0.log2ceilLookup(_0x4c0daf);
        var _0x116472 = _0x5365f0.currentContext.tempVertexBuffers1[_0x4a9af7];
        var _0x2c644d = _0x5365f0.currentContext.tempVertexBufferCounters1[_0x4a9af7];
        _0x5365f0.currentContext.tempVertexBufferCounters1[_0x4a9af7] = _0x5365f0.currentContext.tempVertexBufferCounters1[_0x4a9af7] + 1 & _0x5365f0.numTempVertexBuffersPerSize - 1;
        var _0x11d875 = _0x116472[_0x2c644d];
        if (_0x11d875) {
          return _0x11d875;
        }
        var _0x24e4b8 = _0x4571ce.getParameter(34964);
        _0x116472[_0x2c644d] = _0x4571ce.createBuffer();
        _0x4571ce.bindBuffer(34962, _0x116472[_0x2c644d]);
        _0x4571ce.bufferData(34962, 1 << _0x4a9af7, 35048);
        _0x4571ce.bindBuffer(34962, _0x24e4b8);
        return _0x116472[_0x2c644d];
      },
      getTempIndexBuffer: function _0x3b70f7(_0x35791c) {
        var _0x3b575b = _0x5365f0.log2ceilLookup(_0x35791c);
        var _0x5ad6ba = _0x5365f0.currentContext.tempIndexBuffers[_0x3b575b];
        if (_0x5ad6ba) {
          return _0x5ad6ba;
        }
        var _0x5aa6a7 = _0x4571ce.getParameter(34965);
        _0x5365f0.currentContext.tempIndexBuffers[_0x3b575b] = _0x4571ce.createBuffer();
        _0x4571ce.bindBuffer(34963, _0x5365f0.currentContext.tempIndexBuffers[_0x3b575b]);
        _0x4571ce.bufferData(34963, 1 << _0x3b575b, 35048);
        _0x4571ce.bindBuffer(34963, _0x5aa6a7);
        return _0x5365f0.currentContext.tempIndexBuffers[_0x3b575b];
      },
      newRenderingFrameStarted: function _0x51b3fc() {
        if (!_0x5365f0.currentContext) {
          return;
        }
        var _0x334814 = _0x5365f0.currentContext.tempVertexBuffers1;
        _0x5365f0.currentContext.tempVertexBuffers1 = _0x5365f0.currentContext.tempVertexBuffers2;
        _0x5365f0.currentContext.tempVertexBuffers2 = _0x334814;
        _0x334814 = _0x5365f0.currentContext.tempVertexBufferCounters1;
        _0x5365f0.currentContext.tempVertexBufferCounters1 = _0x5365f0.currentContext.tempVertexBufferCounters2;
        _0x5365f0.currentContext.tempVertexBufferCounters2 = _0x334814;
        var _0xab9b78 = _0x5365f0.log2ceilLookup(_0x5365f0.MAX_TEMP_BUFFER_SIZE);
        for (var _0x300e72 = 0; _0x300e72 <= _0xab9b78; ++_0x300e72) {
          _0x5365f0.currentContext.tempVertexBufferCounters1[_0x300e72] = 0;
        }
      },
      getSource: function (_0x7ed609, _0x3c4218, _0x403547, _0x44377d) {
        var _0x361c02 = "";
        for (var _0x1237e4 = 0; _0x1237e4 < _0x3c4218; ++_0x1237e4) {
          var _0x420d06 = _0x44377d ? _0x2f8726[_0x44377d + _0x1237e4 * 4 >> 2] : -1;
          _0x361c02 += _0x468390(_0x2f8726[_0x403547 + _0x1237e4 * 4 >> 2], _0x420d06 < 0 ? undefined : _0x420d06);
        }
        return _0x361c02;
      },
      calcBufLength: function _0x8676fe(_0x50a90e, _0x18c545, _0x467640, _0x53b1d7) {
        if (_0x467640 > 0) {
          return _0x53b1d7 * _0x467640;
        }
        var _0x310b9a = _0x5365f0.byteSizeByType[_0x18c545 - _0x5365f0.byteSizeByTypeRoot];
        return _0x50a90e * _0x310b9a * _0x53b1d7;
      },
      usedTempBuffers: [],
      preDrawHandleClientVertexAttribBindings: function _0x5792fc(_0x3e2242) {
        _0x5365f0.resetBufferBinding = false;
        for (var _0x15d6f1 = 0; _0x15d6f1 < _0x5365f0.currentContext.maxVertexAttribs; ++_0x15d6f1) {
          var _0x1e26da = _0x5365f0.currentContext.clientBuffers[_0x15d6f1];
          if (!_0x1e26da.clientside || !_0x1e26da.enabled) {
            continue;
          }
          _0x5365f0.resetBufferBinding = true;
          var _0x4d9c3c = _0x5365f0.calcBufLength(_0x1e26da.size, _0x1e26da.type, _0x1e26da.stride, _0x3e2242);
          var _0x2e6f42 = _0x5365f0.getTempVertexBuffer(_0x4d9c3c);
          _0x4571ce.bindBuffer(34962, _0x2e6f42);
          _0x4571ce.bufferSubData(34962, 0, _0x4924c2.subarray(_0x1e26da.ptr, _0x1e26da.ptr + _0x4d9c3c));
          _0x1e26da.vertexAttribPointerAdaptor.call(_0x4571ce, _0x15d6f1, _0x1e26da.size, _0x1e26da.type, _0x1e26da.normalized, _0x1e26da.stride, 0);
        }
      },
      postDrawHandleClientVertexAttribBindings: function _0x2ded55() {
        if (_0x5365f0.resetBufferBinding) {
          _0x4571ce.bindBuffer(34962, _0x5365f0.buffers[_0x4571ce.currentArrayBufferBinding]);
        }
      },
      createContext: function (_0x37318f, _0x51d7f8) {
        if (!_0x37318f.getContextSafariWebGL2Fixed) {
          _0x37318f.getContextSafariWebGL2Fixed = _0x37318f.getContext;
          function _0x169d1f(_0x4ea923, _0x4b783b) {
            var _0x42fe8a = _0x37318f.getContextSafariWebGL2Fixed(_0x4ea923, _0x4b783b);
            if (_0x4ea923 == "webgl" == _0x42fe8a instanceof WebGLRenderingContext) {
              return _0x42fe8a;
            } else {
              return null;
            }
          }
          _0x37318f.getContext = _0x169d1f;
        }
        var _0x26bf0f = _0x51d7f8.majorVersion > 1 ? _0x37318f.getContext("webgl2", _0x51d7f8) : _0x37318f.getContext("webgl", _0x51d7f8);
        if (!_0x26bf0f) {
          return 0;
        }
        var _0xeb6f20 = _0x5365f0.registerContext(_0x26bf0f, _0x51d7f8);
        return _0xeb6f20;
      },
      registerContext: function (_0x233c49, _0x46bc36) {
        var _0x3e94e1 = _0x5365f0.getNewId(_0x5365f0.contexts);
        var _0xdb673d = {
          handle: _0x3e94e1,
          attributes: _0x46bc36,
          version: _0x46bc36.majorVersion,
          GLctx: _0x233c49
        };
        if (_0x233c49.canvas) {
          _0x233c49.canvas.GLctxObject = _0xdb673d;
        }
        _0x5365f0.contexts[_0x3e94e1] = _0xdb673d;
        if (typeof _0x46bc36.enableExtensionsByDefault == "undefined" || _0x46bc36.enableExtensionsByDefault) {
          _0x5365f0.initExtensions(_0xdb673d);
        }
        _0xdb673d.maxVertexAttribs = _0xdb673d.GLctx.getParameter(34921);
        _0xdb673d.clientBuffers = [];
        for (var _0x235edd = 0; _0x235edd < _0xdb673d.maxVertexAttribs; _0x235edd++) {
          _0xdb673d.clientBuffers[_0x235edd] = {
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
        _0x5365f0.generateTempBuffers(false, _0xdb673d);
        return _0x3e94e1;
      },
      makeContextCurrent: function (_0x258b5d) {
        _0x5365f0.currentContext = _0x5365f0.contexts[_0x258b5d];
        _0xbb74bb.ctx = _0x4571ce = _0x5365f0.currentContext && _0x5365f0.currentContext.GLctx;
        return !_0x258b5d || !!_0x4571ce;
      },
      getContext: function (_0x110c2e) {
        return _0x5365f0.contexts[_0x110c2e];
      },
      deleteContext: function (_0x1cd660) {
        if (_0x5365f0.currentContext === _0x5365f0.contexts[_0x1cd660]) {
          _0x5365f0.currentContext = null;
        }
        if (typeof _0x1eec61 == "object") {
          _0x1eec61.removeAllHandlersOnTarget(_0x5365f0.contexts[_0x1cd660].GLctx.canvas);
        }
        if (_0x5365f0.contexts[_0x1cd660] && _0x5365f0.contexts[_0x1cd660].GLctx.canvas) {
          _0x5365f0.contexts[_0x1cd660].GLctx.canvas.GLctxObject = undefined;
        }
        _0x5365f0.contexts[_0x1cd660] = null;
      },
      initExtensions: function (_0x413a7d) {
        if (!_0x413a7d) {
          _0x413a7d = _0x5365f0.currentContext;
        }
        if (_0x413a7d.initExtensionsDone) {
          return;
        }
        _0x413a7d.initExtensionsDone = true;
        var _0x1a37a2 = _0x413a7d.GLctx;
        _0x5f03a4(_0x1a37a2);
        _0x1def6e(_0x1a37a2);
        _0x11d0c7(_0x1a37a2);
        _0x30c5ce(_0x1a37a2);
        _0x58f71f(_0x1a37a2);
        if (_0x413a7d.version >= 2) {
          _0x1a37a2.disjointTimerQueryExt = _0x1a37a2.getExtension("EXT_disjoint_timer_query_webgl2");
        }
        if (_0x413a7d.version < 2 || !_0x1a37a2.disjointTimerQueryExt) {
          _0x1a37a2.disjointTimerQueryExt = _0x1a37a2.getExtension("EXT_disjoint_timer_query");
        }
        _0x38fcda(_0x1a37a2);
        var _0x12f26b = _0x1a37a2.getSupportedExtensions() || [];
        _0x12f26b.forEach(function (_0x3f2f80) {
          if (!_0x3f2f80.includes("lose_context") && !_0x3f2f80.includes("debug")) {
            _0x1a37a2.getExtension(_0x3f2f80);
          }
        });
      }
    };
    var _0x585ee8 = ["default", "low-power", "high-performance"];
    function _0x5ededa(_0x107e8f, _0x3da15e) {
      var _0x2873be = _0x3da15e >> 2;
      var _0x5dccf3 = _0x2f8726[_0x2873be + 6];
      var _0x49525c = {
        alpha: !!_0x2f8726[_0x2873be + 0],
        depth: !!_0x2f8726[_0x2873be + 1],
        stencil: !!_0x2f8726[_0x2873be + 2],
        antialias: !!_0x2f8726[_0x2873be + 3],
        premultipliedAlpha: !!_0x2f8726[_0x2873be + 4],
        preserveDrawingBuffer: !!_0x2f8726[_0x2873be + 5],
        powerPreference: _0x585ee8[_0x5dccf3],
        failIfMajorPerformanceCaveat: !!_0x2f8726[_0x2873be + 7],
        majorVersion: _0x2f8726[_0x2873be + 8],
        minorVersion: _0x2f8726[_0x2873be + 9],
        enableExtensionsByDefault: _0x2f8726[_0x2873be + 10],
        explicitSwapControl: _0x2f8726[_0x2873be + 11],
        proxyContextToMainThread: _0x2f8726[_0x2873be + 12],
        renderViaOffscreenBackBuffer: _0x2f8726[_0x2873be + 13]
      };
      var _0xd0960c = _0x184e56(_0x107e8f);
      if (!_0xd0960c) {
        return 0;
      }
      if (_0x49525c.explicitSwapControl) {
        return 0;
      }
      var _0x5b1244 = _0x5365f0.createContext(_0xd0960c, _0x49525c);
      return _0x5b1244;
    }
    function _0x230da0(_0x25d728, _0x392861) {
      return _0x5ededa(_0x25d728, _0x392861);
    }
    function _0x53f285(_0x4b001d) {
      if (_0x5365f0.currentContext == _0x4b001d) {
        _0x5365f0.currentContext = 0;
      }
      _0x5365f0.deleteContext(_0x4b001d);
    }
    function _0x2c5ed2(_0x13c276, _0x188535) {
      var _0x5934d0 = _0x5365f0.getContext(_0x13c276);
      var _0x47cb9a = _0x468390(_0x188535);
      if (_0x47cb9a.startsWith("GL_")) {
        _0x47cb9a = _0x47cb9a.substr(3);
      }
      if (_0x47cb9a == "ANGLE_instanced_arrays") {
        _0x5f03a4(_0x4571ce);
      }
      if (_0x47cb9a == "OES_vertex_array_object") {
        _0x1def6e(_0x4571ce);
      }
      if (_0x47cb9a == "WEBGL_draw_buffers") {
        _0x11d0c7(_0x4571ce);
      }
      if (_0x47cb9a == "WEBGL_draw_instanced_base_vertex_base_instance") {
        _0x30c5ce(_0x4571ce);
      }
      if (_0x47cb9a == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
        _0x58f71f(_0x4571ce);
      }
      if (_0x47cb9a == "WEBGL_multi_draw") {
        _0x38fcda(_0x4571ce);
      }
      var _0x447668 = _0x5934d0.GLctx.getExtension(_0x47cb9a);
      return !!_0x447668;
    }
    function _0x5af5c2() {
      if (_0x5365f0.currentContext) {
        return _0x5365f0.currentContext.handle;
      } else {
        return 0;
      }
    }
    function _0x3b2cde() {
      return _0x5af5c2();
    }
    function _0x16c615(_0x28d260) {
      var _0x4c1131 = _0x28d260 >> 2;
      for (var _0x3d208c = 0; _0x3d208c < 14; ++_0x3d208c) {
        _0x2f8726[_0x4c1131 + _0x3d208c] = 0;
      }
      _0x2f8726[_0x4c1131 + 0] = _0x2f8726[_0x4c1131 + 1] = _0x2f8726[_0x4c1131 + 3] = _0x2f8726[_0x4c1131 + 4] = _0x2f8726[_0x4c1131 + 8] = _0x2f8726[_0x4c1131 + 10] = 1;
    }
    function _0x4f4f9a(_0x2e3247) {
      var _0xaf7997 = _0x5365f0.makeContextCurrent(_0x2e3247);
      if (_0xaf7997) {
        return 0;
      } else {
        return -5;
      }
    }
    var _0x44b780 = {};
    function _0x389fcd() {
      return _0x381db1 || "./this.program";
    }
    function _0x4b3572() {
      if (!_0x4b3572.strings) {
        var _0x1af14e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var _0x19a075 = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: _0x1af14e,
          _: _0x389fcd()
        };
        for (var _0x38c9fd in _0x44b780) {
          if (_0x44b780[_0x38c9fd] === undefined) {
            delete _0x19a075[_0x38c9fd];
          } else {
            _0x19a075[_0x38c9fd] = _0x44b780[_0x38c9fd];
          }
        }
        var _0x227735 = [];
        for (var _0x38c9fd in _0x19a075) {
          _0x227735.push(_0x38c9fd + "=" + _0x19a075[_0x38c9fd]);
        }
        _0x4b3572.strings = _0x227735;
      }
      return _0x4b3572.strings;
    }
    function _0x2d3ec3(_0x525f77, _0x4d5598) {
      var _0x598bd2 = 0;
      _0x4b3572().forEach(function (_0x50b1f8, _0x5666a6) {
        var _0x5f558d = _0x4d5598 + _0x598bd2;
        _0x2f8726[_0x525f77 + _0x5666a6 * 4 >> 2] = _0x5f558d;
        _0x331341(_0x50b1f8, _0x5f558d);
        _0x598bd2 += _0x50b1f8.length + 1;
      });
      return 0;
    }
    function _0x43ef70(_0x4b0045, _0x1d6873) {
      var _0x5a9761 = _0x4b3572();
      _0x2f8726[_0x4b0045 >> 2] = _0x5a9761.length;
      var _0x3a0059 = 0;
      _0x5a9761.forEach(function (_0x5756e2) {
        _0x3a0059 += _0x5756e2.length + 1;
      });
      _0x2f8726[_0x1d6873 >> 2] = _0x3a0059;
      return 0;
    }
    function _0x5270c5(_0x533ed9) {
      try {
        var _0xd94cb3 = _0x2cd2f2.getStreamFromFD(_0x533ed9);
        _0x32ab7c.close(_0xd94cb3);
        return 0;
      } catch (_0x479698) {
        if (typeof _0x32ab7c == "undefined" || !(_0x479698 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x479698;
        }
        return _0x479698.errno;
      }
    }
    function _0x2a4161(_0x114cda, _0x1708c9) {
      try {
        var _0x484037 = _0x2cd2f2.getStreamFromFD(_0x114cda);
        var _0x2bf2cb = _0x484037.tty ? 2 : _0x32ab7c.isDir(_0x484037.mode) ? 3 : _0x32ab7c.isLink(_0x484037.mode) ? 7 : 4;
        _0x245769[_0x1708c9 >> 0] = _0x2bf2cb;
        return 0;
      } catch (_0x430114) {
        if (typeof _0x32ab7c == "undefined" || !(_0x430114 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x430114;
        }
        return _0x430114.errno;
      }
    }
    function _0x4bd0d0(_0x3cdbae, _0x5ac230, _0xbdfe63, _0x5bf96c) {
      try {
        var _0x185373 = _0x2cd2f2.getStreamFromFD(_0x3cdbae);
        var _0x3ebdff = _0x2cd2f2.doReadv(_0x185373, _0x5ac230, _0xbdfe63);
        _0x2f8726[_0x5bf96c >> 2] = _0x3ebdff;
        return 0;
      } catch (_0x8a6f95) {
        if (typeof _0x32ab7c == "undefined" || !(_0x8a6f95 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x8a6f95;
        }
        return _0x8a6f95.errno;
      }
    }
    function _0xebd780(_0x33e08c, _0x584dfc, _0xf28fc4, _0x2c25bc, _0x427303) {
      try {
        var _0x1ab3b1 = _0x2cd2f2.getStreamFromFD(_0x33e08c);
        var _0x4436c1 = 4294967296;
        var _0x49b9e1 = _0xf28fc4 * _0x4436c1 + (_0x584dfc >>> 0);
        var _0x48a687 = 9007199254740992;
        if (_0x49b9e1 <= -_0x48a687 || _0x49b9e1 >= _0x48a687) {
          return -61;
        }
        _0x32ab7c.llseek(_0x1ab3b1, _0x49b9e1, _0x2c25bc);
        _0x3a663e = [_0x1ab3b1.position >>> 0, (_0x19ea61 = _0x1ab3b1.position, +Math.abs(_0x19ea61) >= 1 ? _0x19ea61 > 0 ? (Math.min(+Math.floor(_0x19ea61 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x19ea61 - +(~~_0x19ea61 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x2f8726[_0x427303 >> 2] = _0x3a663e[0];
        _0x2f8726[_0x427303 + 4 >> 2] = _0x3a663e[1];
        if (_0x1ab3b1.getdents && _0x49b9e1 === 0 && _0x2c25bc === 0) {
          _0x1ab3b1.getdents = null;
        }
        return 0;
      } catch (_0x54eed9) {
        if (typeof _0x32ab7c == "undefined" || !(_0x54eed9 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x54eed9;
        }
        return _0x54eed9.errno;
      }
    }
    function _0x2b866d(_0x15ead1, _0x44c27d, _0x4eec85, _0x3a954d) {
      try {
        var _0x469f53 = _0x2cd2f2.getStreamFromFD(_0x15ead1);
        var _0xbf912b = _0x2cd2f2.doWritev(_0x469f53, _0x44c27d, _0x4eec85);
        _0x2f8726[_0x3a954d >> 2] = _0xbf912b;
        return 0;
      } catch (_0x15f061) {
        if (typeof _0x32ab7c == "undefined" || !(_0x15f061 instanceof _0x32ab7c.ErrnoError)) {
          throw _0x15f061;
        }
        return _0x15f061.errno;
      }
    }
    function _0x34fca2() {
      return _0x1be420();
    }
    function _0x2e1ead(_0x4da317, _0x360176, _0x331a04, _0x402b62) {
      var _0x356fd4 = 0;
      var _0x10f165 = 0;
      var _0x271149 = 0;
      var _0x504117 = 0;
      var _0x1ebc55 = 0;
      var _0x20b1bc = 0;
      var _0x5a2918;
      function _0x665965(_0x2fda5c, _0x3f6598, _0x4ccce2, _0x14bb01, _0x15d335, _0x124a5f) {
        var _0x5918aa;
        var _0x56b58a;
        var _0x184256;
        var _0x1e3c62;
        _0x56b58a = _0x2fda5c === 10 ? 28 : 16;
        _0x15d335 = _0x2fda5c === 10 ? _0xcc0a60(_0x15d335) : _0x4d717e(_0x15d335);
        _0x5918aa = _0x210cd3(_0x56b58a);
        _0x1e3c62 = _0x4c438a(_0x5918aa, _0x2fda5c, _0x15d335, _0x124a5f);
        _0x105928(!_0x1e3c62);
        _0x184256 = _0x210cd3(32);
        _0x2f8726[_0x184256 + 4 >> 2] = _0x2fda5c;
        _0x2f8726[_0x184256 + 8 >> 2] = _0x3f6598;
        _0x2f8726[_0x184256 + 12 >> 2] = _0x4ccce2;
        _0x2f8726[_0x184256 + 24 >> 2] = _0x14bb01;
        _0x2f8726[_0x184256 + 20 >> 2] = _0x5918aa;
        if (_0x2fda5c === 10) {
          _0x2f8726[_0x184256 + 16 >> 2] = 28;
        } else {
          _0x2f8726[_0x184256 + 16 >> 2] = 16;
        }
        _0x2f8726[_0x184256 + 28 >> 2] = 0;
        return _0x184256;
      }
      if (_0x331a04) {
        _0x271149 = _0x2f8726[_0x331a04 >> 2];
        _0x504117 = _0x2f8726[_0x331a04 + 4 >> 2];
        _0x1ebc55 = _0x2f8726[_0x331a04 + 8 >> 2];
        _0x20b1bc = _0x2f8726[_0x331a04 + 12 >> 2];
      }
      if (_0x1ebc55 && !_0x20b1bc) {
        _0x20b1bc = _0x1ebc55 === 2 ? 17 : 6;
      }
      if (!_0x1ebc55 && _0x20b1bc) {
        _0x1ebc55 = _0x20b1bc === 17 ? 2 : 1;
      }
      if (_0x20b1bc === 0) {
        _0x20b1bc = 6;
      }
      if (_0x1ebc55 === 0) {
        _0x1ebc55 = 1;
      }
      if (!_0x4da317 && !_0x360176) {
        return -2;
      }
      if (_0x271149 & ~1087) {
        return -1;
      }
      if (_0x331a04 !== 0 && _0x2f8726[_0x331a04 >> 2] & 2 && !_0x4da317) {
        return -1;
      }
      if (_0x271149 & 32) {
        return -2;
      }
      if (_0x1ebc55 !== 0 && _0x1ebc55 !== 1 && _0x1ebc55 !== 2) {
        return -7;
      }
      if (_0x504117 !== 0 && _0x504117 !== 2 && _0x504117 !== 10) {
        return -6;
      }
      if (_0x360176) {
        _0x360176 = _0x468390(_0x360176);
        _0x10f165 = parseInt(_0x360176, 10);
        if (isNaN(_0x10f165)) {
          if (_0x271149 & 1024) {
            return -2;
          }
          return -8;
        }
      }
      if (!_0x4da317) {
        if (_0x504117 === 0) {
          _0x504117 = 2;
        }
        if ((_0x271149 & 1) === 0) {
          if (_0x504117 === 2) {
            _0x356fd4 = _0x9d0ef9(2130706433);
          } else {
            _0x356fd4 = [0, 0, 0, 1];
          }
        }
        _0x5a2918 = _0x665965(_0x504117, _0x1ebc55, _0x20b1bc, null, _0x356fd4, _0x10f165);
        _0x2f8726[_0x402b62 >> 2] = _0x5a2918;
        return 0;
      }
      _0x4da317 = _0x468390(_0x4da317);
      _0x356fd4 = _0x157d4c(_0x4da317);
      if (_0x356fd4 !== null) {
        if (_0x504117 === 0 || _0x504117 === 2) {
          _0x504117 = 2;
        } else if (_0x504117 === 10 && _0x271149 & 8) {
          _0x356fd4 = [0, 0, _0x9d0ef9(65535), _0x356fd4];
          _0x504117 = 10;
        } else {
          return -2;
        }
      } else {
        _0x356fd4 = _0x31d591(_0x4da317);
        if (_0x356fd4 !== null) {
          if (_0x504117 === 0 || _0x504117 === 10) {
            _0x504117 = 10;
          } else {
            return -2;
          }
        }
      }
      if (_0x356fd4 != null) {
        _0x5a2918 = _0x665965(_0x504117, _0x1ebc55, _0x20b1bc, _0x4da317, _0x356fd4, _0x10f165);
        _0x2f8726[_0x402b62 >> 2] = _0x5a2918;
        return 0;
      }
      if (_0x271149 & 4) {
        return -2;
      }
      _0x4da317 = _0x33a2cf.lookup_name(_0x4da317);
      _0x356fd4 = _0x157d4c(_0x4da317);
      if (_0x504117 === 0) {
        _0x504117 = 2;
      } else if (_0x504117 === 10) {
        _0x356fd4 = [0, 0, _0x9d0ef9(65535), _0x356fd4];
      }
      _0x5a2918 = _0x665965(_0x504117, _0x1ebc55, _0x20b1bc, null, _0x356fd4, _0x10f165);
      _0x2f8726[_0x402b62 >> 2] = _0x5a2918;
      return 0;
    }
    function _0x431932(_0xf4643c) {
      var _0x56a2b5 = _0x210cd3(20);
      var _0x589eb0 = _0x210cd3(_0xf4643c.length + 1);
      _0x4fe443(_0xf4643c, _0x589eb0, _0xf4643c.length + 1);
      _0x2f8726[_0x56a2b5 >> 2] = _0x589eb0;
      var _0x39646f = _0x210cd3(4);
      _0x2f8726[_0x39646f >> 2] = 0;
      _0x2f8726[_0x56a2b5 + 4 >> 2] = _0x39646f;
      var _0x43a7ca = 2;
      _0x2f8726[_0x56a2b5 + 8 >> 2] = _0x43a7ca;
      _0x2f8726[_0x56a2b5 + 12 >> 2] = 4;
      var _0x3d07cf = _0x210cd3(12);
      _0x2f8726[_0x3d07cf >> 2] = _0x3d07cf + 8;
      _0x2f8726[_0x3d07cf + 4 >> 2] = 0;
      _0x2f8726[_0x3d07cf + 8 >> 2] = _0x157d4c(_0x33a2cf.lookup_name(_0xf4643c));
      _0x2f8726[_0x56a2b5 + 16 >> 2] = _0x3d07cf;
      return _0x56a2b5;
    }
    function _0x1d1f55(_0x16a499, _0x56f03c, _0x9a14bd) {
      if (_0x9a14bd !== 2) {
        _0x9e47a6(5);
        return null;
      }
      _0x16a499 = _0x2f8726[_0x16a499 >> 2];
      var _0x294edd = _0x4d717e(_0x16a499);
      var _0x47aafc = _0x33a2cf.lookup_addr(_0x294edd);
      if (_0x47aafc) {
        _0x294edd = _0x47aafc;
      }
      return _0x431932(_0x294edd);
    }
    function _0x14cb3b(_0x5538bc) {
      return _0x431932(_0x468390(_0x5538bc));
    }
    function _0x435baa(_0x2c17b4, _0x394848, _0x555a44, _0x49d8ef, _0x55cdc2, _0x6f4ab6, _0x5486d7) {
      var _0x57a313 = _0x1bb3fc(_0x2c17b4, _0x394848);
      if (_0x57a313.errno) {
        return -6;
      }
      var _0xd471bf = _0x57a313.port;
      var _0x3fa210 = _0x57a313.addr;
      var _0x5719e4 = false;
      if (_0x555a44 && _0x49d8ef) {
        var _0x3a8efd;
        if (_0x5486d7 & 1 || !(_0x3a8efd = _0x33a2cf.lookup_addr(_0x3fa210))) {
          if (_0x5486d7 & 8) {
            return -2;
          }
        } else {
          _0x3fa210 = _0x3a8efd;
        }
        var _0x530559 = _0x4fe443(_0x3fa210, _0x555a44, _0x49d8ef);
        if (_0x530559 + 1 >= _0x49d8ef) {
          _0x5719e4 = true;
        }
      }
      if (_0x55cdc2 && _0x6f4ab6) {
        _0xd471bf = "" + _0xd471bf;
        var _0x530559 = _0x4fe443(_0xd471bf, _0x55cdc2, _0x6f4ab6);
        if (_0x530559 + 1 >= _0x6f4ab6) {
          _0x5719e4 = true;
        }
      }
      if (_0x5719e4) {
        return -12;
      }
      return 0;
    }
    function _0x4387c1(_0x12a745) {
      _0x4571ce.activeTexture(_0x12a745);
    }
    function _0x501930(_0x2aedc9, _0x473094) {
      _0x2aedc9 = _0x5365f0.programs[_0x2aedc9];
      _0x473094 = _0x5365f0.shaders[_0x473094];
      _0x2aedc9[_0x473094.shaderType] = _0x473094;
      _0x4571ce.attachShader(_0x2aedc9, _0x473094);
    }
    function _0x522053(_0x1222af, _0x2ae265) {
      _0x4571ce.beginQuery(_0x1222af, _0x5365f0.queries[_0x2ae265]);
    }
    function _0x38525a(_0x40b16d, _0xa3619, _0x3951ad) {
      _0x4571ce.bindAttribLocation(_0x5365f0.programs[_0x40b16d], _0xa3619, _0x468390(_0x3951ad));
    }
    function _0x152592(_0x5bde48, _0xe1e60d) {
      if (_0x5bde48 == 34962) {
        _0x4571ce.currentArrayBufferBinding = _0xe1e60d;
      } else if (_0x5bde48 == 34963) {
        _0x4571ce.currentElementArrayBufferBinding = _0xe1e60d;
      }
      if (_0x5bde48 == 35051) {
        _0x4571ce.currentPixelPackBufferBinding = _0xe1e60d;
      } else if (_0x5bde48 == 35052) {
        _0x4571ce.currentPixelUnpackBufferBinding = _0xe1e60d;
      }
      _0x4571ce.bindBuffer(_0x5bde48, _0x5365f0.buffers[_0xe1e60d]);
    }
    function _0x2b4514(_0x1bb362, _0x31f9c7, _0x382c6e) {
      _0x4571ce.bindBufferBase(_0x1bb362, _0x31f9c7, _0x5365f0.buffers[_0x382c6e]);
    }
    function _0x113ffd(_0x101e45, _0x4e9555, _0x25d97f, _0xcab733, _0x4311a0) {
      _0x4571ce.bindBufferRange(_0x101e45, _0x4e9555, _0x5365f0.buffers[_0x25d97f], _0xcab733, _0x4311a0);
    }
    function _0x108e98(_0x6383cc, _0xdb05d1) {
      _0x4571ce.bindFramebuffer(_0x6383cc, _0x5365f0.framebuffers[_0xdb05d1]);
    }
    function _0x15b58f(_0x1aadf2, _0x7cdcc0) {
      _0x4571ce.bindRenderbuffer(_0x1aadf2, _0x5365f0.renderbuffers[_0x7cdcc0]);
    }
    function _0x505485(_0x172d62, _0x5782b6) {
      _0x4571ce.bindSampler(_0x172d62, _0x5365f0.samplers[_0x5782b6]);
    }
    function _0x1af5d9(_0x39f66e, _0xafdd4c) {
      _0x4571ce.bindTexture(_0x39f66e, _0x5365f0.textures[_0xafdd4c]);
    }
    function _0x377368(_0xab3fa0) {
      _0x4571ce.bindVertexArray(_0x5365f0.vaos[_0xab3fa0]);
      var _0x36c389 = _0x4571ce.getParameter(34965);
      _0x4571ce.currentElementArrayBufferBinding = _0x36c389 ? _0x36c389.name | 0 : 0;
    }
    function _0x1391c8(_0x2c2b2c) {
      _0x4571ce.blendEquation(_0x2c2b2c);
    }
    function _0x5b518e(_0x32578e, _0x3d4692) {
      _0x4571ce.blendEquationSeparate(_0x32578e, _0x3d4692);
    }
    function _0x2756a1(_0x590d76, _0x31d246, _0x248004, _0x165016) {
      _0x4571ce.blendFuncSeparate(_0x590d76, _0x31d246, _0x248004, _0x165016);
    }
    function _0x2f264b(_0x1493de, _0x2798be, _0x55ede2, _0xeaa2b7, _0x270bb1, _0x492e77, _0xc98d3a, _0x3d0f66, _0x245ede, _0x45d632) {
      _0x4571ce.blitFramebuffer(_0x1493de, _0x2798be, _0x55ede2, _0xeaa2b7, _0x270bb1, _0x492e77, _0xc98d3a, _0x3d0f66, _0x245ede, _0x45d632);
    }
    function _0x40805b(_0x1ba2bb, _0x3bcfb9, _0x30904b, _0x15b401) {
      if (_0x5365f0.currentContext.version >= 2) {
        if (_0x30904b) {
          _0x4571ce.bufferData(_0x1ba2bb, _0x4924c2, _0x15b401, _0x30904b, _0x3bcfb9);
        } else {
          _0x4571ce.bufferData(_0x1ba2bb, _0x3bcfb9, _0x15b401);
        }
      } else {
        _0x4571ce.bufferData(_0x1ba2bb, _0x30904b ? _0x4924c2.subarray(_0x30904b, _0x30904b + _0x3bcfb9) : _0x3bcfb9, _0x15b401);
      }
    }
    function _0x5bd510(_0x468483, _0x3f546f, _0x21aa83, _0x15fb4a) {
      if (_0x5365f0.currentContext.version >= 2) {
        _0x4571ce.bufferSubData(_0x468483, _0x3f546f, _0x4924c2, _0x15fb4a, _0x21aa83);
        return;
      }
      _0x4571ce.bufferSubData(_0x468483, _0x3f546f, _0x4924c2.subarray(_0x15fb4a, _0x15fb4a + _0x21aa83));
    }
    function _0x3edffc(_0x45875a) {
      return _0x4571ce.checkFramebufferStatus(_0x45875a);
    }
    function _0x741d64(_0x42bf11) {
      _0x4571ce.clear(_0x42bf11);
    }
    function _0x2fd5e4(_0x56366c, _0x2ee8f8, _0x32b35a, _0x5e6f6e) {
      _0x4571ce.clearBufferfi(_0x56366c, _0x2ee8f8, _0x32b35a, _0x5e6f6e);
    }
    function _0x15710b(_0x4ef544, _0x10aeb2, _0x4a7725) {
      _0x4571ce.clearBufferfv(_0x4ef544, _0x10aeb2, _0x2e245b, _0x4a7725 >> 2);
    }
    function _0x550475(_0x1f6713, _0x87cb7e, _0x404458) {
      _0x4571ce.clearBufferuiv(_0x1f6713, _0x87cb7e, _0x1cca99, _0x404458 >> 2);
    }
    function _0x367f09(_0x35158c, _0x3a4fed, _0x54e83d, _0x485a99) {
      _0x4571ce.clearColor(_0x35158c, _0x3a4fed, _0x54e83d, _0x485a99);
    }
    function _0x8d6828(_0x11ab7e) {
      _0x4571ce.clearDepth(_0x11ab7e);
    }
    function _0x3f108f(_0x4162c1) {
      _0x4571ce.clearStencil(_0x4162c1);
    }
    function _0x275098(_0xbce38d, _0x2c48df, _0x197163, _0x316f36) {
      return _0x4571ce.clientWaitSync(_0x5365f0.syncs[_0xbce38d], _0x2c48df, _0x131bea(_0x197163, _0x316f36));
    }
    function _0x11e613(_0x456beb, _0x5f4596, _0x135903, _0xa7b09e) {
      _0x4571ce.colorMask(!!_0x456beb, !!_0x5f4596, !!_0x135903, !!_0xa7b09e);
    }
    function _0x2304d8(_0x28f2cf) {
      _0x4571ce.compileShader(_0x5365f0.shaders[_0x28f2cf]);
    }
    function _0x29ae62(_0xd40266, _0x4081d7, _0x5c8fcf, _0x16ebe8, _0x50649c, _0x23592c, _0x47af67, _0x232a77) {
      if (_0x5365f0.currentContext.version >= 2) {
        if (_0x4571ce.currentPixelUnpackBufferBinding) {
          _0x4571ce.compressedTexImage2D(_0xd40266, _0x4081d7, _0x5c8fcf, _0x16ebe8, _0x50649c, _0x23592c, _0x47af67, _0x232a77);
        } else {
          _0x4571ce.compressedTexImage2D(_0xd40266, _0x4081d7, _0x5c8fcf, _0x16ebe8, _0x50649c, _0x23592c, _0x4924c2, _0x232a77, _0x47af67);
        }
        return;
      }
      _0x4571ce.compressedTexImage2D(_0xd40266, _0x4081d7, _0x5c8fcf, _0x16ebe8, _0x50649c, _0x23592c, _0x232a77 ? _0x4924c2.subarray(_0x232a77, _0x232a77 + _0x47af67) : null);
    }
    function _0x415cb4(_0x288b14, _0x417f06, _0x5886ad, _0x4f6713, _0xd46b56, _0x176b38, _0x138cff, _0x39af43, _0x50cbf4) {
      if (_0x4571ce.currentPixelUnpackBufferBinding) {
        _0x4571ce.compressedTexImage3D(_0x288b14, _0x417f06, _0x5886ad, _0x4f6713, _0xd46b56, _0x176b38, _0x138cff, _0x39af43, _0x50cbf4);
      } else {
        _0x4571ce.compressedTexImage3D(_0x288b14, _0x417f06, _0x5886ad, _0x4f6713, _0xd46b56, _0x176b38, _0x138cff, _0x4924c2, _0x50cbf4, _0x39af43);
      }
    }
    function _0x4ff472(_0x3e90d3, _0x415a6e, _0x347668, _0x516a81, _0x1eb75e, _0x31600a, _0xd50c27, _0x4929b0, _0x3dd504) {
      if (_0x5365f0.currentContext.version >= 2) {
        if (_0x4571ce.currentPixelUnpackBufferBinding) {
          _0x4571ce.compressedTexSubImage2D(_0x3e90d3, _0x415a6e, _0x347668, _0x516a81, _0x1eb75e, _0x31600a, _0xd50c27, _0x4929b0, _0x3dd504);
        } else {
          _0x4571ce.compressedTexSubImage2D(_0x3e90d3, _0x415a6e, _0x347668, _0x516a81, _0x1eb75e, _0x31600a, _0xd50c27, _0x4924c2, _0x3dd504, _0x4929b0);
        }
        return;
      }
      _0x4571ce.compressedTexSubImage2D(_0x3e90d3, _0x415a6e, _0x347668, _0x516a81, _0x1eb75e, _0x31600a, _0xd50c27, _0x3dd504 ? _0x4924c2.subarray(_0x3dd504, _0x3dd504 + _0x4929b0) : null);
    }
    function _0x542c59(_0x698891, _0x4f2741, _0x30dfaa, _0x1cc275, _0x3f7272, _0x51b671, _0x35ecb1, _0x27ea37, _0x267266, _0x3d94aa, _0x40d420) {
      if (_0x4571ce.currentPixelUnpackBufferBinding) {
        _0x4571ce.compressedTexSubImage3D(_0x698891, _0x4f2741, _0x30dfaa, _0x1cc275, _0x3f7272, _0x51b671, _0x35ecb1, _0x27ea37, _0x267266, _0x3d94aa, _0x40d420);
      } else {
        _0x4571ce.compressedTexSubImage3D(_0x698891, _0x4f2741, _0x30dfaa, _0x1cc275, _0x3f7272, _0x51b671, _0x35ecb1, _0x27ea37, _0x267266, _0x4924c2, _0x40d420, _0x3d94aa);
      }
    }
    function _0x1df050(_0x2f3c7a, _0x54abbf, _0x1e96e0, _0x52cc16, _0x557b56) {
      _0x4571ce.copyBufferSubData(_0x2f3c7a, _0x54abbf, _0x1e96e0, _0x52cc16, _0x557b56);
    }
    function _0x31c7b2(_0x44382a, _0x48b3f5, _0x13c616, _0x8f1fdf, _0x115927, _0x5697cb, _0x332811, _0x44fba3) {
      _0x4571ce.copyTexImage2D(_0x44382a, _0x48b3f5, _0x13c616, _0x8f1fdf, _0x115927, _0x5697cb, _0x332811, _0x44fba3);
    }
    function _0x165940(_0x19794e, _0x6a81ae, _0x1a3e8a, _0x1add04, _0x2f5238, _0x54aa9e, _0x112b2b, _0x563d45) {
      _0x4571ce.copyTexSubImage2D(_0x19794e, _0x6a81ae, _0x1a3e8a, _0x1add04, _0x2f5238, _0x54aa9e, _0x112b2b, _0x563d45);
    }
    function _0xd71739() {
      var _0x30e370 = _0x5365f0.getNewId(_0x5365f0.programs);
      var _0x1687ea = _0x4571ce.createProgram();
      _0x1687ea.name = _0x30e370;
      _0x1687ea.maxUniformLength = _0x1687ea.maxAttributeLength = _0x1687ea.maxUniformBlockNameLength = 0;
      _0x1687ea.uniformIdCounter = 1;
      _0x5365f0.programs[_0x30e370] = _0x1687ea;
      return _0x30e370;
    }
    function _0x4e50ef(_0xe080b0) {
      var _0x52701c = _0x5365f0.getNewId(_0x5365f0.shaders);
      _0x5365f0.shaders[_0x52701c] = _0x4571ce.createShader(_0xe080b0);
      _0x5365f0.shaders[_0x52701c].shaderType = _0xe080b0 & 1 ? "vs" : "fs";
      return _0x52701c;
    }
    function _0x5b7c27(_0x5e4279) {
      _0x4571ce.cullFace(_0x5e4279);
    }
    function _0x39e647(_0x2fce0d, _0x41869c) {
      for (var _0x27f4d6 = 0; _0x27f4d6 < _0x2fce0d; _0x27f4d6++) {
        var _0x2a8979 = _0x2f8726[_0x41869c + _0x27f4d6 * 4 >> 2];
        var _0x5577b3 = _0x5365f0.buffers[_0x2a8979];
        if (!_0x5577b3) {
          continue;
        }
        _0x4571ce.deleteBuffer(_0x5577b3);
        _0x5577b3.name = 0;
        _0x5365f0.buffers[_0x2a8979] = null;
        if (_0x2a8979 == _0x4571ce.currentArrayBufferBinding) {
          _0x4571ce.currentArrayBufferBinding = 0;
        }
        if (_0x2a8979 == _0x4571ce.currentElementArrayBufferBinding) {
          _0x4571ce.currentElementArrayBufferBinding = 0;
        }
        if (_0x2a8979 == _0x4571ce.currentPixelPackBufferBinding) {
          _0x4571ce.currentPixelPackBufferBinding = 0;
        }
        if (_0x2a8979 == _0x4571ce.currentPixelUnpackBufferBinding) {
          _0x4571ce.currentPixelUnpackBufferBinding = 0;
        }
      }
    }
    function _0x22c448(_0x502487, _0x3f64b7) {
      for (var _0x59f234 = 0; _0x59f234 < _0x502487; ++_0x59f234) {
        var _0x363957 = _0x2f8726[_0x3f64b7 + _0x59f234 * 4 >> 2];
        var _0x2c6f01 = _0x5365f0.framebuffers[_0x363957];
        if (!_0x2c6f01) {
          continue;
        }
        _0x4571ce.deleteFramebuffer(_0x2c6f01);
        _0x2c6f01.name = 0;
        _0x5365f0.framebuffers[_0x363957] = null;
      }
    }
    function _0x497747(_0x1024bd) {
      if (!_0x1024bd) {
        return;
      }
      var _0x15c909 = _0x5365f0.programs[_0x1024bd];
      if (!_0x15c909) {
        _0x5365f0.recordError(1281);
        return;
      }
      _0x4571ce.deleteProgram(_0x15c909);
      _0x15c909.name = 0;
      _0x5365f0.programs[_0x1024bd] = null;
    }
    function _0x487e75(_0x1f9287, _0x1327a0) {
      for (var _0x53996f = 0; _0x53996f < _0x1f9287; _0x53996f++) {
        var _0x27e95d = _0x2f8726[_0x1327a0 + _0x53996f * 4 >> 2];
        var _0x2608fe = _0x5365f0.queries[_0x27e95d];
        if (!_0x2608fe) {
          continue;
        }
        _0x4571ce.deleteQuery(_0x2608fe);
        _0x5365f0.queries[_0x27e95d] = null;
      }
    }
    function _0x54154e(_0x1460cf, _0x24c818) {
      for (var _0x4d1e5a = 0; _0x4d1e5a < _0x1460cf; _0x4d1e5a++) {
        var _0x3b0a42 = _0x2f8726[_0x24c818 + _0x4d1e5a * 4 >> 2];
        var _0xb74b6e = _0x5365f0.renderbuffers[_0x3b0a42];
        if (!_0xb74b6e) {
          continue;
        }
        _0x4571ce.deleteRenderbuffer(_0xb74b6e);
        _0xb74b6e.name = 0;
        _0x5365f0.renderbuffers[_0x3b0a42] = null;
      }
    }
    function _0x3e91d0(_0x28e9ef, _0x494f84) {
      for (var _0x1d2c54 = 0; _0x1d2c54 < _0x28e9ef; _0x1d2c54++) {
        var _0x51ef79 = _0x2f8726[_0x494f84 + _0x1d2c54 * 4 >> 2];
        var _0x3fc3c4 = _0x5365f0.samplers[_0x51ef79];
        if (!_0x3fc3c4) {
          continue;
        }
        _0x4571ce.deleteSampler(_0x3fc3c4);
        _0x3fc3c4.name = 0;
        _0x5365f0.samplers[_0x51ef79] = null;
      }
    }
    function _0x3431de(_0x5c1aa2) {
      if (!_0x5c1aa2) {
        return;
      }
      var _0x477ade = _0x5365f0.shaders[_0x5c1aa2];
      if (!_0x477ade) {
        _0x5365f0.recordError(1281);
        return;
      }
      _0x4571ce.deleteShader(_0x477ade);
      _0x5365f0.shaders[_0x5c1aa2] = null;
    }
    function _0x560961(_0xbc9eff) {
      if (!_0xbc9eff) {
        return;
      }
      var _0x250e54 = _0x5365f0.syncs[_0xbc9eff];
      if (!_0x250e54) {
        _0x5365f0.recordError(1281);
        return;
      }
      _0x4571ce.deleteSync(_0x250e54);
      _0x250e54.name = 0;
      _0x5365f0.syncs[_0xbc9eff] = null;
    }
    function _0x1f80ce(_0x54e1b1, _0x4536ee) {
      for (var _0x57292f = 0; _0x57292f < _0x54e1b1; _0x57292f++) {
        var _0x5f1810 = _0x2f8726[_0x4536ee + _0x57292f * 4 >> 2];
        var _0x3839e7 = _0x5365f0.textures[_0x5f1810];
        if (!_0x3839e7) {
          continue;
        }
        _0x4571ce.deleteTexture(_0x3839e7);
        _0x3839e7.name = 0;
        _0x5365f0.textures[_0x5f1810] = null;
      }
    }
    function _0x53b8a1(_0x39b5e3, _0x54326c) {
      for (var _0x16e7da = 0; _0x16e7da < _0x39b5e3; _0x16e7da++) {
        var _0x14d911 = _0x2f8726[_0x54326c + _0x16e7da * 4 >> 2];
        _0x4571ce.deleteVertexArray(_0x5365f0.vaos[_0x14d911]);
        _0x5365f0.vaos[_0x14d911] = null;
      }
    }
    function _0x365f86(_0x3bc3b3) {
      _0x4571ce.depthFunc(_0x3bc3b3);
    }
    function _0x193b5f(_0x5cee0e) {
      _0x4571ce.depthMask(!!_0x5cee0e);
    }
    function _0x474ece(_0x55ecbe, _0x121151) {
      _0x4571ce.detachShader(_0x5365f0.programs[_0x55ecbe], _0x5365f0.shaders[_0x121151]);
    }
    function _0x1441f5(_0x155214) {
      _0x4571ce.disable(_0x155214);
    }
    function _0xa010c4(_0xf7b2e6) {
      var _0x43abd3 = _0x5365f0.currentContext.clientBuffers[_0xf7b2e6];
      _0x43abd3.enabled = false;
      _0x4571ce.disableVertexAttribArray(_0xf7b2e6);
    }
    function _0x58e030(_0x52eb36, _0x1fbd8d, _0x9743b9) {
      _0x5365f0.preDrawHandleClientVertexAttribBindings(_0x1fbd8d + _0x9743b9);
      _0x4571ce.drawArrays(_0x52eb36, _0x1fbd8d, _0x9743b9);
      _0x5365f0.postDrawHandleClientVertexAttribBindings();
    }
    function _0x11fd34(_0x9306ed, _0x292c9f, _0x5edbfb, _0x489952) {
      _0x4571ce.drawArraysInstanced(_0x9306ed, _0x292c9f, _0x5edbfb, _0x489952);
    }
    var _0x5411cd = [];
    function _0x19a2a9(_0x1b085e, _0x5a709b) {
      var _0xfa4e81 = _0x5411cd[_0x1b085e];
      for (var _0x20b02d = 0; _0x20b02d < _0x1b085e; _0x20b02d++) {
        _0xfa4e81[_0x20b02d] = _0x2f8726[_0x5a709b + _0x20b02d * 4 >> 2];
      }
      _0x4571ce.drawBuffers(_0xfa4e81);
    }
    function _0x3a0781(_0xbffdfc, _0x52927c, _0x4a75c4, _0x464a8d) {
      var _0x1b1681;
      if (!_0x4571ce.currentElementArrayBufferBinding) {
        var _0x4926b9 = _0x5365f0.calcBufLength(1, _0x4a75c4, 0, _0x52927c);
        _0x1b1681 = _0x5365f0.getTempIndexBuffer(_0x4926b9);
        _0x4571ce.bindBuffer(34963, _0x1b1681);
        _0x4571ce.bufferSubData(34963, 0, _0x4924c2.subarray(_0x464a8d, _0x464a8d + _0x4926b9));
        _0x464a8d = 0;
      }
      _0x5365f0.preDrawHandleClientVertexAttribBindings(_0x52927c);
      _0x4571ce.drawElements(_0xbffdfc, _0x52927c, _0x4a75c4, _0x464a8d);
      _0x5365f0.postDrawHandleClientVertexAttribBindings(_0x52927c);
      if (!_0x4571ce.currentElementArrayBufferBinding) {
        _0x4571ce.bindBuffer(34963, null);
      }
    }
    function _0x165d45(_0x1cdbe4, _0x2afacd, _0x5f2e0d, _0x1c131b, _0x3dfdec) {
      _0x4571ce.drawElementsInstanced(_0x1cdbe4, _0x2afacd, _0x5f2e0d, _0x1c131b, _0x3dfdec);
    }
    function _0x5d1a66(_0x1b15ce) {
      _0x4571ce.enable(_0x1b15ce);
    }
    function _0x3c9762(_0x4d9512) {
      var _0x56442c = _0x5365f0.currentContext.clientBuffers[_0x4d9512];
      _0x56442c.enabled = true;
      _0x4571ce.enableVertexAttribArray(_0x4d9512);
    }
    function _0xf473b2(_0x3d1bbf) {
      _0x4571ce.endQuery(_0x3d1bbf);
    }
    function _0x59e489(_0x218aa8, _0x38f631) {
      var _0x580d1e = _0x4571ce.fenceSync(_0x218aa8, _0x38f631);
      if (_0x580d1e) {
        var _0x4cf3ee = _0x5365f0.getNewId(_0x5365f0.syncs);
        _0x580d1e.name = _0x4cf3ee;
        _0x5365f0.syncs[_0x4cf3ee] = _0x580d1e;
        return _0x4cf3ee;
      } else {
        return 0;
      }
    }
    function _0x271460() {
      _0x4571ce.finish();
    }
    function _0x25e664() {
      _0x4571ce.flush();
    }
    function _0x312ef9(_0x254282) {
      switch (_0x254282) {
        case 34962:
          _0x254282 = 34964;
          break;
        case 34963:
          _0x254282 = 34965;
          break;
        case 35051:
          _0x254282 = 35053;
          break;
        case 35052:
          _0x254282 = 35055;
          break;
        case 35982:
          _0x254282 = 35983;
          break;
        case 36662:
          _0x254282 = 36662;
          break;
        case 36663:
          _0x254282 = 36663;
          break;
        case 35345:
          _0x254282 = 35368;
          break;
      }
      var _0x3244d4 = _0x4571ce.getParameter(_0x254282);
      if (_0x3244d4) {
        return _0x3244d4.name | 0;
      } else {
        return 0;
      }
    }
    function _0x4885cf(_0x57c0f5) {
      switch (_0x57c0f5) {
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
    function _0x50f0fb(_0x11113d, _0x25cae0, _0x315039) {
      if (!_0x4885cf(_0x11113d)) {
        _0x5365f0.recordError(1280);
        _0x1771de("GL_INVALID_ENUM in glFlushMappedBufferRange");
        return;
      }
      var _0x1a3e53 = _0x5365f0.mappedBuffers[_0x312ef9(_0x11113d)];
      if (!_0x1a3e53) {
        _0x5365f0.recordError(1282);
        _0x1771de("buffer was never mapped in glFlushMappedBufferRange");
        return;
      }
      if (!(_0x1a3e53.access & 16)) {
        _0x5365f0.recordError(1282);
        _0x1771de("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
        return;
      }
      if (_0x25cae0 < 0 || _0x315039 < 0 || _0x25cae0 + _0x315039 > _0x1a3e53.length) {
        _0x5365f0.recordError(1281);
        _0x1771de("invalid range in glFlushMappedBufferRange");
        return;
      }
      _0x4571ce.bufferSubData(_0x11113d, _0x1a3e53.offset, _0x4924c2.subarray(_0x1a3e53.mem + _0x25cae0, _0x1a3e53.mem + _0x25cae0 + _0x315039));
    }
    function _0x4bea26(_0x35f406, _0x520fd0, _0x161010, _0x2d9c2a) {
      _0x4571ce.framebufferRenderbuffer(_0x35f406, _0x520fd0, _0x161010, _0x5365f0.renderbuffers[_0x2d9c2a]);
    }
    function _0x39e6b2(_0x512bed, _0x423ea1, _0x59aa2, _0x2de2eb, _0x58546f) {
      _0x4571ce.framebufferTexture2D(_0x512bed, _0x423ea1, _0x59aa2, _0x5365f0.textures[_0x2de2eb], _0x58546f);
    }
    function _0x342aa9(_0x4943e2, _0x1c9cb0, _0x2fd514, _0x8848ca, _0x2a0008) {
      _0x4571ce.framebufferTextureLayer(_0x4943e2, _0x1c9cb0, _0x5365f0.textures[_0x2fd514], _0x8848ca, _0x2a0008);
    }
    function _0x16800b(_0x4d485a) {
      _0x4571ce.frontFace(_0x4d485a);
    }
    function _0xcc9f6b(_0x4b36f3, _0x1f89f6, _0x342864, _0xe4d6e7) {
      for (var _0x59c49c = 0; _0x59c49c < _0x4b36f3; _0x59c49c++) {
        var _0x17a03b = _0x4571ce[_0x342864]();
        var _0x223cad = _0x17a03b && _0x5365f0.getNewId(_0xe4d6e7);
        if (_0x17a03b) {
          _0x17a03b.name = _0x223cad;
          _0xe4d6e7[_0x223cad] = _0x17a03b;
        } else {
          _0x5365f0.recordError(1282);
        }
        _0x2f8726[_0x1f89f6 + _0x59c49c * 4 >> 2] = _0x223cad;
      }
    }
    function _0x17c0f9(_0x7efd7a, _0xdacff3) {
      _0xcc9f6b(_0x7efd7a, _0xdacff3, "createBuffer", _0x5365f0.buffers);
    }
    function _0x34e9d9(_0x319c7a, _0x2be180) {
      _0xcc9f6b(_0x319c7a, _0x2be180, "createFramebuffer", _0x5365f0.framebuffers);
    }
    function _0x5213c0(_0x4d6364, _0x304702) {
      _0xcc9f6b(_0x4d6364, _0x304702, "createQuery", _0x5365f0.queries);
    }
    function _0x10f43e(_0x483ee4, _0xaaf6e9) {
      _0xcc9f6b(_0x483ee4, _0xaaf6e9, "createRenderbuffer", _0x5365f0.renderbuffers);
    }
    function _0x1500fd(_0xab893c, _0x5188fd) {
      _0xcc9f6b(_0xab893c, _0x5188fd, "createSampler", _0x5365f0.samplers);
    }
    function _0x590b57(_0xb8816e, _0x4e6276) {
      _0xcc9f6b(_0xb8816e, _0x4e6276, "createTexture", _0x5365f0.textures);
    }
    function _0x294abe(_0x50c9ba, _0x25b6cf) {
      _0xcc9f6b(_0x50c9ba, _0x25b6cf, "createVertexArray", _0x5365f0.vaos);
    }
    function _0x549ecf(_0x678679) {
      _0x4571ce.generateMipmap(_0x678679);
    }
    function _0x2ea912(_0x4d4ca8, _0x3bc71d, _0x5922fc, _0x44ada3, _0x90752b, _0x4f8d1f, _0x16564d, _0x1348fa) {
      _0x3bc71d = _0x5365f0.programs[_0x3bc71d];
      var _0xf02c3 = _0x4571ce[_0x4d4ca8](_0x3bc71d, _0x5922fc);
      if (_0xf02c3) {
        var _0x506996 = _0x1348fa && _0x4fe443(_0xf02c3.name, _0x1348fa, _0x44ada3);
        if (_0x90752b) {
          _0x2f8726[_0x90752b >> 2] = _0x506996;
        }
        if (_0x4f8d1f) {
          _0x2f8726[_0x4f8d1f >> 2] = _0xf02c3.size;
        }
        if (_0x16564d) {
          _0x2f8726[_0x16564d >> 2] = _0xf02c3.type;
        }
      }
    }
    function _0x8ea48f(_0x260860, _0x187cf2, _0x5c60fb, _0x1e00f2, _0x1654b1, _0x3a4036, _0xb01c5) {
      _0x2ea912("getActiveAttrib", _0x260860, _0x187cf2, _0x5c60fb, _0x1e00f2, _0x1654b1, _0x3a4036, _0xb01c5);
    }
    function _0x2bed0b(_0x33a511, _0xa3582a, _0x5ecff7, _0x18f21d, _0x9034c8, _0x1017d0, _0x3c19bc) {
      _0x2ea912("getActiveUniform", _0x33a511, _0xa3582a, _0x5ecff7, _0x18f21d, _0x9034c8, _0x1017d0, _0x3c19bc);
    }
    function _0x6dad5d(_0x12140e, _0x2a4abe, _0x1ba6ea, _0x2d15f0, _0x159e07) {
      _0x12140e = _0x5365f0.programs[_0x12140e];
      var _0x1b3b6a = _0x4571ce.getActiveUniformBlockName(_0x12140e, _0x2a4abe);
      if (!_0x1b3b6a) {
        return;
      }
      if (_0x159e07 && _0x1ba6ea > 0) {
        var _0xf2bebe = _0x4fe443(_0x1b3b6a, _0x159e07, _0x1ba6ea);
        if (_0x2d15f0) {
          _0x2f8726[_0x2d15f0 >> 2] = _0xf2bebe;
        }
      } else if (_0x2d15f0) {
        _0x2f8726[_0x2d15f0 >> 2] = 0;
      }
    }
    function _0x3500f9(_0x51dd70, _0x317e48, _0x45e32f, _0x5f0bff) {
      if (!_0x5f0bff) {
        _0x5365f0.recordError(1281);
        return;
      }
      _0x51dd70 = _0x5365f0.programs[_0x51dd70];
      if (_0x45e32f == 35393) {
        var _0x2f853e = _0x4571ce.getActiveUniformBlockName(_0x51dd70, _0x317e48);
        _0x2f8726[_0x5f0bff >> 2] = _0x2f853e.length + 1;
        return;
      }
      var _0x4f2fc7 = _0x4571ce.getActiveUniformBlockParameter(_0x51dd70, _0x317e48, _0x45e32f);
      if (_0x4f2fc7 === null) {
        return;
      }
      if (_0x45e32f == 35395) {
        for (var _0x5b658c = 0; _0x5b658c < _0x4f2fc7.length; _0x5b658c++) {
          _0x2f8726[_0x5f0bff + _0x5b658c * 4 >> 2] = _0x4f2fc7[_0x5b658c];
        }
      } else {
        _0x2f8726[_0x5f0bff >> 2] = _0x4f2fc7;
      }
    }
    function _0x236cf9(_0x1c232c, _0x44e1fb, _0x27bd73, _0x401235, _0x5bcb9d) {
      if (!_0x5bcb9d) {
        _0x5365f0.recordError(1281);
        return;
      }
      if (_0x44e1fb > 0 && _0x27bd73 == 0) {
        _0x5365f0.recordError(1281);
        return;
      }
      _0x1c232c = _0x5365f0.programs[_0x1c232c];
      var _0x378b2f = [];
      for (var _0x4cc3c2 = 0; _0x4cc3c2 < _0x44e1fb; _0x4cc3c2++) {
        _0x378b2f.push(_0x2f8726[_0x27bd73 + _0x4cc3c2 * 4 >> 2]);
      }
      var _0x59f9a1 = _0x4571ce.getActiveUniforms(_0x1c232c, _0x378b2f, _0x401235);
      if (!_0x59f9a1) {
        return;
      }
      var _0x73afb3 = _0x59f9a1.length;
      for (var _0x4cc3c2 = 0; _0x4cc3c2 < _0x73afb3; _0x4cc3c2++) {
        _0x2f8726[_0x5bcb9d + _0x4cc3c2 * 4 >> 2] = _0x59f9a1[_0x4cc3c2];
      }
    }
    function _0x28c2c9(_0x1758d1, _0x4a2e2e) {
      return _0x4571ce.getAttribLocation(_0x5365f0.programs[_0x1758d1], _0x468390(_0x4a2e2e));
    }
    function _0x34a3fd(_0x5bde08, _0xdd1203, _0x2395ea, _0x4662e2) {
      if (!_0x4662e2) {
        _0x5365f0.recordError(1281);
        return;
      }
      _0x4571ce.getBufferSubData(_0x5bde08, _0xdd1203, _0x4924c2, _0x4662e2, _0x2395ea);
    }
    function _0x5111ef() {
      var _0x125471 = _0x4571ce.getError() || _0x5365f0.lastError;
      _0x5365f0.lastError = 0;
      return _0x125471;
    }
    function _0x5d672d(_0x22e491, _0x149515, _0x13a5f6, _0x28c495) {
      var _0x3b3f66 = _0x4571ce.getFramebufferAttachmentParameter(_0x22e491, _0x149515, _0x13a5f6);
      if (_0x3b3f66 instanceof WebGLRenderbuffer || _0x3b3f66 instanceof WebGLTexture) {
        _0x3b3f66 = _0x3b3f66.name | 0;
      }
      _0x2f8726[_0x28c495 >> 2] = _0x3b3f66;
    }
    function _0x4e7d30(_0x572a74, _0x2582a7) {
      _0x1cca99[_0x572a74 >> 2] = _0x2582a7;
      _0x1cca99[_0x572a74 + 4 >> 2] = (_0x2582a7 - _0x1cca99[_0x572a74 >> 2]) / 4294967296;
    }
    function _0x4d2f65(_0x5b290c, _0x3ff909, _0x242f5c, _0x458004) {
      if (!_0x242f5c) {
        _0x5365f0.recordError(1281);
        return;
      }
      var _0x1ff370 = _0x4571ce.getIndexedParameter(_0x5b290c, _0x3ff909);
      var _0x432e56;
      switch (typeof _0x1ff370) {
        case "boolean":
          _0x432e56 = _0x1ff370 ? 1 : 0;
          break;
        case "number":
          _0x432e56 = _0x1ff370;
          break;
        case "object":
          if (_0x1ff370 === null) {
            switch (_0x5b290c) {
              case 35983:
              case 35368:
                _0x432e56 = 0;
                break;
              default:
                {
                  _0x5365f0.recordError(1280);
                  return;
                }
            }
          } else if (_0x1ff370 instanceof WebGLBuffer) {
            _0x432e56 = _0x1ff370.name | 0;
          } else {
            _0x5365f0.recordError(1280);
            return;
          }
          break;
        default:
          _0x5365f0.recordError(1280);
          return;
      }
      switch (_0x458004) {
        case 1:
          _0x4e7d30(_0x242f5c, _0x432e56);
          break;
        case 0:
          _0x2f8726[_0x242f5c >> 2] = _0x432e56;
          break;
        case 2:
          _0x2e245b[_0x242f5c >> 2] = _0x432e56;
          break;
        case 4:
          _0x245769[_0x242f5c >> 0] = _0x432e56 ? 1 : 0;
          break;
        default:
          throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x458004;
      }
    }
    function _0x13d15c(_0x9e9430, _0x4c6acd, _0x1ad9a0) {
      _0x4d2f65(_0x9e9430, _0x4c6acd, _0x1ad9a0, 0);
    }
    function _0x1f051b(_0x283fcf, _0x20b504, _0x3125bd) {
      if (!_0x20b504) {
        _0x5365f0.recordError(1281);
        return;
      }
      var _0xed7bb1 = undefined;
      switch (_0x283fcf) {
        case 36346:
          _0xed7bb1 = 1;
          break;
        case 36344:
          if (_0x3125bd != 0 && _0x3125bd != 1) {
            _0x5365f0.recordError(1280);
          }
          return;
        case 34814:
        case 36345:
          _0xed7bb1 = 0;
          break;
        case 34466:
          var _0xa49b77 = _0x4571ce.getParameter(34467);
          _0xed7bb1 = _0xa49b77 ? _0xa49b77.length : 0;
          break;
        case 33390:
          _0xed7bb1 = 1048576;
          break;
        case 33309:
          if (_0x5365f0.currentContext.version < 2) {
            _0x5365f0.recordError(1282);
            return;
          }
          var _0x507aef = _0x4571ce.getSupportedExtensions() || [];
          _0xed7bb1 = _0x507aef.length * 2;
          break;
        case 33307:
        case 33308:
          if (_0x5365f0.currentContext.version < 2) {
            _0x5365f0.recordError(1280);
            return;
          }
          _0xed7bb1 = _0x283fcf == 33307 ? 3 : 0;
          break;
      }
      if (_0xed7bb1 === undefined) {
        var _0x385695 = _0x4571ce.getParameter(_0x283fcf);
        switch (typeof _0x385695) {
          case "number":
            _0xed7bb1 = _0x385695;
            break;
          case "boolean":
            _0xed7bb1 = _0x385695 ? 1 : 0;
            break;
          case "string":
            _0x5365f0.recordError(1280);
            return;
          case "object":
            if (_0x385695 === null) {
              switch (_0x283fcf) {
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
                    _0xed7bb1 = 0;
                    break;
                  }
                default:
                  {
                    _0x5365f0.recordError(1280);
                    return;
                  }
              }
            } else if (_0x385695 instanceof Float32Array || _0x385695 instanceof Uint32Array || _0x385695 instanceof Int32Array || _0x385695 instanceof Array) {
              for (var _0x35f8ae = 0; _0x35f8ae < _0x385695.length; ++_0x35f8ae) {
                switch (_0x3125bd) {
                  case 0:
                    _0x2f8726[_0x20b504 + _0x35f8ae * 4 >> 2] = _0x385695[_0x35f8ae];
                    break;
                  case 2:
                    _0x2e245b[_0x20b504 + _0x35f8ae * 4 >> 2] = _0x385695[_0x35f8ae];
                    break;
                  case 4:
                    _0x245769[_0x20b504 + _0x35f8ae >> 0] = _0x385695[_0x35f8ae] ? 1 : 0;
                    break;
                }
              }
              return;
            } else {
              try {
                _0xed7bb1 = _0x385695.name | 0;
              } catch (_0xc1a511) {
                _0x5365f0.recordError(1280);
                _0x1771de("GL_INVALID_ENUM in glGet" + _0x3125bd + "v: Unknown object returned from WebGL getParameter(" + _0x283fcf + ")! (error: " + _0xc1a511 + ")");
                return;
              }
            }
            break;
          default:
            _0x5365f0.recordError(1280);
            _0x1771de("GL_INVALID_ENUM in glGet" + _0x3125bd + "v: Native code calling glGet" + _0x3125bd + "v(" + _0x283fcf + ") and it returns " + _0x385695 + " of type " + typeof _0x385695 + "!");
            return;
        }
      }
      switch (_0x3125bd) {
        case 1:
          _0x4e7d30(_0x20b504, _0xed7bb1);
          break;
        case 0:
          _0x2f8726[_0x20b504 >> 2] = _0xed7bb1;
          break;
        case 2:
          _0x2e245b[_0x20b504 >> 2] = _0xed7bb1;
          break;
        case 4:
          _0x245769[_0x20b504 >> 0] = _0xed7bb1 ? 1 : 0;
          break;
      }
    }
    function _0x22c2ad(_0x30de64, _0x1712f8) {
      _0x1f051b(_0x30de64, _0x1712f8, 0);
    }
    function _0x5eb1a2(_0x35e2ae, _0x33f055, _0x340a0a, _0x32d3ce, _0x46c61e) {
      if (_0x32d3ce < 0) {
        _0x5365f0.recordError(1281);
        return;
      }
      if (!_0x46c61e) {
        _0x5365f0.recordError(1281);
        return;
      }
      var _0x20771d = _0x4571ce.getInternalformatParameter(_0x35e2ae, _0x33f055, _0x340a0a);
      if (_0x20771d === null) {
        return;
      }
      for (var _0x5cb719 = 0; _0x5cb719 < _0x20771d.length && _0x5cb719 < _0x32d3ce; ++_0x5cb719) {
        _0x2f8726[_0x46c61e + _0x5cb719 * 4 >> 2] = _0x20771d[_0x5cb719];
      }
    }
    function _0x401058(_0x34df99, _0x3e5f42, _0x40cac9, _0x1cd467, _0x3da686) {
      _0x5365f0.recordError(1282);
    }
    function _0x30bb4f(_0x22ecf2, _0x1e56c3, _0x57ff58, _0x270469) {
      var _0x377e12 = _0x4571ce.getProgramInfoLog(_0x5365f0.programs[_0x22ecf2]);
      if (_0x377e12 === null) {
        _0x377e12 = "(unknown error)";
      }
      var _0x3db6f0 = _0x1e56c3 > 0 && _0x270469 ? _0x4fe443(_0x377e12, _0x270469, _0x1e56c3) : 0;
      if (_0x57ff58) {
        _0x2f8726[_0x57ff58 >> 2] = _0x3db6f0;
      }
    }
    function _0x2dfa70(_0x56ece5, _0x120cf5, _0x28f491) {
      if (!_0x28f491) {
        _0x5365f0.recordError(1281);
        return;
      }
      if (_0x56ece5 >= _0x5365f0.counter) {
        _0x5365f0.recordError(1281);
        return;
      }
      _0x56ece5 = _0x5365f0.programs[_0x56ece5];
      if (_0x120cf5 == 35716) {
        var _0x339d54 = _0x4571ce.getProgramInfoLog(_0x56ece5);
        if (_0x339d54 === null) {
          _0x339d54 = "(unknown error)";
        }
        _0x2f8726[_0x28f491 >> 2] = _0x339d54.length + 1;
      } else if (_0x120cf5 == 35719) {
        if (!_0x56ece5.maxUniformLength) {
          for (var _0x661581 = 0; _0x661581 < _0x4571ce.getProgramParameter(_0x56ece5, 35718); ++_0x661581) {
            _0x56ece5.maxUniformLength = Math.max(_0x56ece5.maxUniformLength, _0x4571ce.getActiveUniform(_0x56ece5, _0x661581).name.length + 1);
          }
        }
        _0x2f8726[_0x28f491 >> 2] = _0x56ece5.maxUniformLength;
      } else if (_0x120cf5 == 35722) {
        if (!_0x56ece5.maxAttributeLength) {
          for (var _0x661581 = 0; _0x661581 < _0x4571ce.getProgramParameter(_0x56ece5, 35721); ++_0x661581) {
            _0x56ece5.maxAttributeLength = Math.max(_0x56ece5.maxAttributeLength, _0x4571ce.getActiveAttrib(_0x56ece5, _0x661581).name.length + 1);
          }
        }
        _0x2f8726[_0x28f491 >> 2] = _0x56ece5.maxAttributeLength;
      } else if (_0x120cf5 == 35381) {
        if (!_0x56ece5.maxUniformBlockNameLength) {
          for (var _0x661581 = 0; _0x661581 < _0x4571ce.getProgramParameter(_0x56ece5, 35382); ++_0x661581) {
            _0x56ece5.maxUniformBlockNameLength = Math.max(_0x56ece5.maxUniformBlockNameLength, _0x4571ce.getActiveUniformBlockName(_0x56ece5, _0x661581).length + 1);
          }
        }
        _0x2f8726[_0x28f491 >> 2] = _0x56ece5.maxUniformBlockNameLength;
      } else {
        _0x2f8726[_0x28f491 >> 2] = _0x4571ce.getProgramParameter(_0x56ece5, _0x120cf5);
      }
    }
    function _0x45df30(_0x277831, _0x420859, _0x2df5ce) {
      if (!_0x2df5ce) {
        _0x5365f0.recordError(1281);
        return;
      }
      var _0xedb26 = _0x5365f0.queries[_0x277831];
      var _0x266e64 = _0x4571ce.getQueryParameter(_0xedb26, _0x420859);
      var _0x27100e;
      if (typeof _0x266e64 == "boolean") {
        _0x27100e = _0x266e64 ? 1 : 0;
      } else {
        _0x27100e = _0x266e64;
      }
      _0x2f8726[_0x2df5ce >> 2] = _0x27100e;
    }
    function _0x5cbee1(_0x489473, _0xddb847, _0xe73e88) {
      if (!_0xe73e88) {
        _0x5365f0.recordError(1281);
        return;
      }
      _0x2f8726[_0xe73e88 >> 2] = _0x4571ce.getQuery(_0x489473, _0xddb847);
    }
    function _0x43b1be(_0xdf0126, _0x39f2b2, _0x56066f) {
      if (!_0x56066f) {
        _0x5365f0.recordError(1281);
        return;
      }
      _0x2f8726[_0x56066f >> 2] = _0x4571ce.getRenderbufferParameter(_0xdf0126, _0x39f2b2);
    }
    function _0x3637ab(_0x5ab957, _0x31465b, _0x1fab49, _0x2800e1) {
      var _0x3e21f4 = _0x4571ce.getShaderInfoLog(_0x5365f0.shaders[_0x5ab957]);
      if (_0x3e21f4 === null) {
        _0x3e21f4 = "(unknown error)";
      }
      var _0x24bfc5 = _0x31465b > 0 && _0x2800e1 ? _0x4fe443(_0x3e21f4, _0x2800e1, _0x31465b) : 0;
      if (_0x1fab49) {
        _0x2f8726[_0x1fab49 >> 2] = _0x24bfc5;
      }
    }
    function _0x486422(_0x3d21a5, _0x2a471d, _0x24b660, _0x2a0f59) {
      var _0x3e0fbd = _0x4571ce.getShaderPrecisionFormat(_0x3d21a5, _0x2a471d);
      _0x2f8726[_0x24b660 >> 2] = _0x3e0fbd.rangeMin;
      _0x2f8726[_0x24b660 + 4 >> 2] = _0x3e0fbd.rangeMax;
      _0x2f8726[_0x2a0f59 >> 2] = _0x3e0fbd.precision;
    }
    function _0x1c24bc(_0xe50c03, _0x545fb7, _0x1ab25b, _0x227bac) {
      var _0x330e18 = _0x4571ce.getShaderSource(_0x5365f0.shaders[_0xe50c03]);
      if (!_0x330e18) {
        return;
      }
      var _0x210f63 = _0x545fb7 > 0 && _0x227bac ? _0x4fe443(_0x330e18, _0x227bac, _0x545fb7) : 0;
      if (_0x1ab25b) {
        _0x2f8726[_0x1ab25b >> 2] = _0x210f63;
      }
    }
    function _0x17660c(_0x18ea12, _0x5aae44, _0x37c8ff) {
      if (!_0x37c8ff) {
        _0x5365f0.recordError(1281);
        return;
      }
      if (_0x5aae44 == 35716) {
        var _0x2b16a4 = _0x4571ce.getShaderInfoLog(_0x5365f0.shaders[_0x18ea12]);
        if (_0x2b16a4 === null) {
          _0x2b16a4 = "(unknown error)";
        }
        var _0x77dec1 = _0x2b16a4 ? _0x2b16a4.length + 1 : 0;
        _0x2f8726[_0x37c8ff >> 2] = _0x77dec1;
      } else if (_0x5aae44 == 35720) {
        var _0x3bbc31 = _0x4571ce.getShaderSource(_0x5365f0.shaders[_0x18ea12]);
        var _0x1ba239 = _0x3bbc31 ? _0x3bbc31.length + 1 : 0;
        _0x2f8726[_0x37c8ff >> 2] = _0x1ba239;
      } else {
        _0x2f8726[_0x37c8ff >> 2] = _0x4571ce.getShaderParameter(_0x5365f0.shaders[_0x18ea12], _0x5aae44);
      }
    }
    function _0x4ccb99(_0x461ffb) {
      var _0x1980a7 = _0x5365f0.stringCache[_0x461ffb];
      if (!_0x1980a7) {
        switch (_0x461ffb) {
          case 7939:
            var _0x31b4bd = _0x4571ce.getSupportedExtensions() || [];
            _0x31b4bd = _0x31b4bd.concat(_0x31b4bd.map(function (_0x3f4314) {
              return "GL_" + _0x3f4314;
            }));
            _0x1980a7 = _0x4e99c6(_0x31b4bd.join(" "));
            break;
          case 7936:
          case 7937:
          case 37445:
          case 37446:
            var _0x162e5b = _0x4571ce.getParameter(_0x461ffb);
            if (!_0x162e5b) {
              _0x5365f0.recordError(1280);
            }
            _0x1980a7 = _0x162e5b && _0x4e99c6(_0x162e5b);
            break;
          case 7938:
            var _0x3a1ffa = _0x4571ce.getParameter(7938);
            if (_0x5365f0.currentContext.version >= 2) {
              _0x3a1ffa = "OpenGL ES 3.0 (" + _0x3a1ffa + ")";
            } else {
              _0x3a1ffa = "OpenGL ES 2.0 (" + _0x3a1ffa + ")";
            }
            _0x1980a7 = _0x4e99c6(_0x3a1ffa);
            break;
          case 35724:
            var _0x5ec325 = _0x4571ce.getParameter(35724);
            var _0xdbeaac = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
            var _0xe776be = _0x5ec325.match(_0xdbeaac);
            if (_0xe776be !== null) {
              if (_0xe776be[1].length == 3) {
                _0xe776be[1] = _0xe776be[1] + "0";
              }
              _0x5ec325 = "OpenGL ES GLSL ES " + _0xe776be[1] + " (" + _0x5ec325 + ")";
            }
            _0x1980a7 = _0x4e99c6(_0x5ec325);
            break;
          default:
            _0x5365f0.recordError(1280);
        }
        _0x5365f0.stringCache[_0x461ffb] = _0x1980a7;
      }
      return _0x1980a7;
    }
    function _0x139a9d(_0x9fccad, _0xf76b3a) {
      if (_0x5365f0.currentContext.version < 2) {
        _0x5365f0.recordError(1282);
        return 0;
      }
      var _0x3f92fc = _0x5365f0.stringiCache[_0x9fccad];
      if (_0x3f92fc) {
        if (_0xf76b3a < 0 || _0xf76b3a >= _0x3f92fc.length) {
          _0x5365f0.recordError(1281);
          return 0;
        }
        return _0x3f92fc[_0xf76b3a];
      }
      switch (_0x9fccad) {
        case 7939:
          var _0x316a57 = _0x4571ce.getSupportedExtensions() || [];
          _0x316a57 = _0x316a57.concat(_0x316a57.map(function (_0x14a822) {
            return "GL_" + _0x14a822;
          }));
          _0x316a57 = _0x316a57.map(function (_0x49b116) {
            return _0x4e99c6(_0x49b116);
          });
          _0x3f92fc = _0x5365f0.stringiCache[_0x9fccad] = _0x316a57;
          if (_0xf76b3a < 0 || _0xf76b3a >= _0x3f92fc.length) {
            _0x5365f0.recordError(1281);
            return 0;
          }
          return _0x3f92fc[_0xf76b3a];
        default:
          _0x5365f0.recordError(1280);
          return 0;
      }
    }
    function _0x357ba7(_0x2e8ed3, _0x238266, _0x1b3d41) {
      if (!_0x1b3d41) {
        _0x5365f0.recordError(1281);
        return;
      }
      _0x2f8726[_0x1b3d41 >> 2] = _0x4571ce.getTexParameter(_0x2e8ed3, _0x238266);
    }
    function _0x3d3d00(_0x1514cd, _0x1f61eb) {
      return _0x4571ce.getUniformBlockIndex(_0x5365f0.programs[_0x1514cd], _0x468390(_0x1f61eb));
    }
    function _0x150d55(_0x52ad23, _0x139d79, _0x3e1d40, _0x1bf6aa) {
      if (!_0x1bf6aa) {
        _0x5365f0.recordError(1281);
        return;
      }
      if (_0x139d79 > 0 && (_0x3e1d40 == 0 || _0x1bf6aa == 0)) {
        _0x5365f0.recordError(1281);
        return;
      }
      _0x52ad23 = _0x5365f0.programs[_0x52ad23];
      var _0x50a9a5 = [];
      for (var _0x4e0edd = 0; _0x4e0edd < _0x139d79; _0x4e0edd++) {
        _0x50a9a5.push(_0x468390(_0x2f8726[_0x3e1d40 + _0x4e0edd * 4 >> 2]));
      }
      var _0x5828ef = _0x4571ce.getUniformIndices(_0x52ad23, _0x50a9a5);
      if (!_0x5828ef) {
        return;
      }
      var _0x5bd144 = _0x5828ef.length;
      for (var _0x4e0edd = 0; _0x4e0edd < _0x5bd144; _0x4e0edd++) {
        _0x2f8726[_0x1bf6aa + _0x4e0edd * 4 >> 2] = _0x5828ef[_0x4e0edd];
      }
    }
    function _0x3c27cb(_0x41fbc0) {
      return _0x41fbc0.slice(-1) == "]" && _0x41fbc0.lastIndexOf("[");
    }
    function _0x4a055c(_0x4a1784) {
      var _0x40e6b2 = _0x4a1784.uniformLocsById;
      var _0x2954a4 = _0x4a1784.uniformSizeAndIdsByName;
      var _0x3c1635;
      var _0xddcd8c;
      if (!_0x40e6b2) {
        _0x4a1784.uniformLocsById = _0x40e6b2 = {};
        _0x4a1784.uniformArrayNamesById = {};
        for (_0x3c1635 = 0; _0x3c1635 < _0x4571ce.getProgramParameter(_0x4a1784, 35718); ++_0x3c1635) {
          var _0x201d2d = _0x4571ce.getActiveUniform(_0x4a1784, _0x3c1635);
          var _0xf569b7 = _0x201d2d.name;
          var _0x185f6d = _0x201d2d.size;
          var _0x29593f = _0x3c27cb(_0xf569b7);
          var _0x18415b = _0x29593f > 0 ? _0xf569b7.slice(0, _0x29593f) : _0xf569b7;
          var _0x2a86b6 = _0x2954a4[_0x18415b] ? _0x2954a4[_0x18415b][1] : _0x4a1784.uniformIdCounter;
          _0x4a1784.uniformIdCounter = Math.max(_0x2a86b6 + _0x185f6d, _0x4a1784.uniformIdCounter);
          _0x2954a4[_0x18415b] = [_0x185f6d, _0x2a86b6];
          for (_0xddcd8c = 0; _0xddcd8c < _0x185f6d; ++_0xddcd8c) {
            _0x40e6b2[_0x2a86b6] = _0xddcd8c;
            _0x4a1784.uniformArrayNamesById[_0x2a86b6++] = _0x18415b;
          }
        }
      }
    }
    function _0xc14c17(_0x2988a4, _0x258410) {
      _0x258410 = _0x468390(_0x258410);
      if (_0x2988a4 = _0x5365f0.programs[_0x2988a4]) {
        _0x4a055c(_0x2988a4);
        var _0x5983b5 = _0x2988a4.uniformLocsById;
        var _0x178e9c = 0;
        var _0x151b74 = _0x258410;
        var _0x544a93 = _0x3c27cb(_0x258410);
        if (_0x544a93 > 0) {
          _0x178e9c = _0x55395c(_0x258410.slice(_0x544a93 + 1)) >>> 0;
          _0x151b74 = _0x258410.slice(0, _0x544a93);
        }
        var _0xaf3f8e = _0x2988a4.uniformSizeAndIdsByName[_0x151b74];
        if (_0xaf3f8e && _0x178e9c < _0xaf3f8e[0]) {
          _0x178e9c += _0xaf3f8e[1];
          if (_0x5983b5[_0x178e9c] = _0x5983b5[_0x178e9c] || _0x4571ce.getUniformLocation(_0x2988a4, _0x258410)) {
            return _0x178e9c;
          }
        }
      } else {
        _0x5365f0.recordError(1281);
      }
      return -1;
    }
    function _0x13ed58(_0x3104bc) {
      var _0x300cba = _0x4571ce.currentProgram;
      if (_0x300cba) {
        var _0x21ffd2 = _0x300cba.uniformLocsById[_0x3104bc];
        if (typeof _0x21ffd2 == "number") {
          _0x300cba.uniformLocsById[_0x3104bc] = _0x21ffd2 = _0x4571ce.getUniformLocation(_0x300cba, _0x300cba.uniformArrayNamesById[_0x3104bc] + (_0x21ffd2 > 0 ? "[" + _0x21ffd2 + "]" : ""));
        }
        return _0x21ffd2;
      } else {
        _0x5365f0.recordError(1282);
      }
    }
    function _0x2a9916(_0x21a370, _0x3bf8c9, _0x3b3a99, _0x4575cd) {
      if (!_0x3b3a99) {
        _0x5365f0.recordError(1281);
        return;
      }
      _0x21a370 = _0x5365f0.programs[_0x21a370];
      _0x4a055c(_0x21a370);
      var _0x31edfa = _0x4571ce.getUniform(_0x21a370, _0x13ed58(_0x3bf8c9));
      if (typeof _0x31edfa == "number" || typeof _0x31edfa == "boolean") {
        switch (_0x4575cd) {
          case 0:
            _0x2f8726[_0x3b3a99 >> 2] = _0x31edfa;
            break;
          case 2:
            _0x2e245b[_0x3b3a99 >> 2] = _0x31edfa;
            break;
        }
      } else {
        for (var _0xdeda39 = 0; _0xdeda39 < _0x31edfa.length; _0xdeda39++) {
          switch (_0x4575cd) {
            case 0:
              _0x2f8726[_0x3b3a99 + _0xdeda39 * 4 >> 2] = _0x31edfa[_0xdeda39];
              break;
            case 2:
              _0x2e245b[_0x3b3a99 + _0xdeda39 * 4 >> 2] = _0x31edfa[_0xdeda39];
              break;
          }
        }
      }
    }
    function _0x41e68f(_0x17e3fa, _0xf97044, _0x8dd871) {
      _0x2a9916(_0x17e3fa, _0xf97044, _0x8dd871, 0);
    }
    function _0x53001e(_0xeeb452, _0x492976, _0x3b6c03, _0x10e56b) {
      if (!_0x3b6c03) {
        _0x5365f0.recordError(1281);
        return;
      }
      if (_0x5365f0.currentContext.clientBuffers[_0xeeb452].enabled) {
        _0x1771de("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
      }
      var _0x219afb = _0x4571ce.getVertexAttrib(_0xeeb452, _0x492976);
      if (_0x492976 == 34975) {
        _0x2f8726[_0x3b6c03 >> 2] = _0x219afb && _0x219afb.name;
      } else if (typeof _0x219afb == "number" || typeof _0x219afb == "boolean") {
        switch (_0x10e56b) {
          case 0:
            _0x2f8726[_0x3b6c03 >> 2] = _0x219afb;
            break;
          case 2:
            _0x2e245b[_0x3b6c03 >> 2] = _0x219afb;
            break;
          case 5:
            _0x2f8726[_0x3b6c03 >> 2] = Math.fround(_0x219afb);
            break;
        }
      } else {
        for (var _0xc732dc = 0; _0xc732dc < _0x219afb.length; _0xc732dc++) {
          switch (_0x10e56b) {
            case 0:
              _0x2f8726[_0x3b6c03 + _0xc732dc * 4 >> 2] = _0x219afb[_0xc732dc];
              break;
            case 2:
              _0x2e245b[_0x3b6c03 + _0xc732dc * 4 >> 2] = _0x219afb[_0xc732dc];
              break;
            case 5:
              _0x2f8726[_0x3b6c03 + _0xc732dc * 4 >> 2] = Math.fround(_0x219afb[_0xc732dc]);
              break;
          }
        }
      }
    }
    function _0x3025f9(_0x3b4e08, _0x452c73, _0x543806) {
      _0x53001e(_0x3b4e08, _0x452c73, _0x543806, 5);
    }
    function _0x3c5259(_0x45a88d, _0x20776f, _0x4d3b4b) {
      var _0x54ad1a = _0x5411cd[_0x20776f];
      for (var _0x9f5379 = 0; _0x9f5379 < _0x20776f; _0x9f5379++) {
        _0x54ad1a[_0x9f5379] = _0x2f8726[_0x4d3b4b + _0x9f5379 * 4 >> 2];
      }
      _0x4571ce.invalidateFramebuffer(_0x45a88d, _0x54ad1a);
    }
    function _0x2f24b2(_0x10fb33) {
      return _0x4571ce.isEnabled(_0x10fb33);
    }
    function _0x434c01(_0x246454) {
      var _0x1a18a7 = _0x5365f0.vaos[_0x246454];
      if (!_0x1a18a7) {
        return 0;
      }
      return _0x4571ce.isVertexArray(_0x1a18a7);
    }
    function _0x40cd57(_0x406078) {
      _0x406078 = _0x5365f0.programs[_0x406078];
      _0x4571ce.linkProgram(_0x406078);
      _0x406078.uniformLocsById = 0;
      _0x406078.uniformSizeAndIdsByName = {};
      [_0x406078.vs, _0x406078.fs].forEach(function (_0xcd789f) {
        Object.keys(_0xcd789f.explicitUniformLocations).forEach(function (_0x5efb70) {
          var _0x3aacf1 = _0xcd789f.explicitUniformLocations[_0x5efb70];
          _0x406078.uniformSizeAndIdsByName[_0x5efb70] = [1, _0x3aacf1];
          _0x406078.uniformIdCounter = Math.max(_0x406078.uniformIdCounter, _0x3aacf1 + 1);
        });
      });
      function _0x7cdb10(_0x43583d, _0x2f2e23) {
        Object.keys(_0x2f2e23).forEach(function (_0x538535) {
          _0x43583d[_0x538535] = _0x2f2e23[_0x538535];
        });
      }
      _0x406078.explicitUniformBindings = {};
      _0x406078.explicitSamplerBindings = {};
      [_0x406078.vs, _0x406078.fs].forEach(function (_0x28e4c4) {
        _0x7cdb10(_0x406078.explicitUniformBindings, _0x28e4c4.explicitUniformBindings);
        _0x7cdb10(_0x406078.explicitSamplerBindings, _0x28e4c4.explicitSamplerBindings);
      });
      _0x406078.explicitProgramBindingsApplied = 0;
    }
    function _0x26ffff(_0x264c65, _0x4dbd4a, _0x36c30a, _0x2ed726) {
      if (_0x2ed726 != 26 && _0x2ed726 != 10) {
        _0x1771de("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
        return 0;
      }
      if (!_0x4885cf(_0x264c65)) {
        _0x5365f0.recordError(1280);
        _0x1771de("GL_INVALID_ENUM in glMapBufferRange");
        return 0;
      }
      var _0x47ed1a = _0x210cd3(_0x36c30a);
      if (!_0x47ed1a) {
        return 0;
      }
      _0x5365f0.mappedBuffers[_0x312ef9(_0x264c65)] = {
        offset: _0x4dbd4a,
        length: _0x36c30a,
        mem: _0x47ed1a,
        access: _0x2ed726
      };
      return _0x47ed1a;
    }
    function _0x4b45be(_0x1e2588, _0x145a15) {
      if (_0x1e2588 == 3317) {
        _0x5365f0.unpackAlignment = _0x145a15;
      }
      _0x4571ce.pixelStorei(_0x1e2588, _0x145a15);
    }
    function _0x20c0b2(_0x3ea005, _0x4e8df2) {
      _0x4571ce.polygonOffset(_0x3ea005, _0x4e8df2);
    }
    function _0x3401da(_0x39cc08, _0x52d129, _0x2e6c49, _0xe44241) {
      _0x5365f0.recordError(1280);
    }
    function _0x2c4511(_0x312e58, _0xcb7d, _0xdc3099) {
      _0x5365f0.recordError(1280);
    }
    function _0x726503(_0x2949a1) {
      _0x4571ce.readBuffer(_0x2949a1);
    }
    function _0x11f8b9(_0x200764, _0x2732d2, _0x2f8f81, _0x3f58c4) {
      function _0x442d26(_0x2f718d, _0x35215f) {
        return _0x2f718d + _0x35215f - 1 & -_0x35215f;
      }
      var _0x55358f = _0x200764 * _0x2f8f81;
      var _0x5b2a84 = _0x442d26(_0x55358f, _0x3f58c4);
      return _0x2732d2 * _0x5b2a84;
    }
    function _0x480461(_0x2e87d2) {
      var _0x122218 = {
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
      return _0x122218[_0x2e87d2 - 6402] || 1;
    }
    function _0x2c7e6e(_0x2a566b) {
      _0x2a566b -= 5120;
      if (_0x2a566b == 0) {
        return _0x245769;
      }
      if (_0x2a566b == 1) {
        return _0x4924c2;
      }
      if (_0x2a566b == 2) {
        return _0x1f5adc;
      }
      if (_0x2a566b == 4) {
        return _0x2f8726;
      }
      if (_0x2a566b == 6) {
        return _0x2e245b;
      }
      if (_0x2a566b == 5 || _0x2a566b == 28922 || _0x2a566b == 28520 || _0x2a566b == 30779 || _0x2a566b == 30782) {
        return _0x1cca99;
      }
      return _0x4cfc45;
    }
    function _0x41cfff(_0x17f3e7) {
      return 31 - Math.clz32(_0x17f3e7.BYTES_PER_ELEMENT);
    }
    function _0x8b35ac(_0x10e855, _0x19b60d, _0x41f9a9, _0x4dd370, _0x1438a0, _0x4fa7ab) {
      var _0x51631a = _0x2c7e6e(_0x10e855);
      var _0x1dc543 = _0x41cfff(_0x51631a);
      var _0x5eec09 = 1 << _0x1dc543;
      var _0x309bb9 = _0x480461(_0x19b60d) * _0x5eec09;
      var _0x28b3a0 = _0x11f8b9(_0x41f9a9, _0x4dd370, _0x309bb9, _0x5365f0.unpackAlignment);
      return _0x51631a.subarray(_0x1438a0 >> _0x1dc543, _0x1438a0 + _0x28b3a0 >> _0x1dc543);
    }
    function _0x44adbf(_0x3bec0c, _0x4dd24e, _0x791055, _0x41e1da, _0x15eee3, _0x251000, _0x1ad7b8) {
      if (_0x5365f0.currentContext.version >= 2) {
        if (_0x4571ce.currentPixelPackBufferBinding) {
          _0x4571ce.readPixels(_0x3bec0c, _0x4dd24e, _0x791055, _0x41e1da, _0x15eee3, _0x251000, _0x1ad7b8);
        } else {
          var _0x13553b = _0x2c7e6e(_0x251000);
          _0x4571ce.readPixels(_0x3bec0c, _0x4dd24e, _0x791055, _0x41e1da, _0x15eee3, _0x251000, _0x13553b, _0x1ad7b8 >> _0x41cfff(_0x13553b));
        }
        return;
      }
      var _0x4c93a5 = _0x8b35ac(_0x251000, _0x15eee3, _0x791055, _0x41e1da, _0x1ad7b8, _0x15eee3);
      if (!_0x4c93a5) {
        _0x5365f0.recordError(1280);
        return;
      }
      _0x4571ce.readPixels(_0x3bec0c, _0x4dd24e, _0x791055, _0x41e1da, _0x15eee3, _0x251000, _0x4c93a5);
    }
    function _0x168e6e(_0x2da0a4, _0x577d4a, _0x3ba822, _0x5e2217) {
      _0x4571ce.renderbufferStorage(_0x2da0a4, _0x577d4a, _0x3ba822, _0x5e2217);
    }
    function _0x2338e0(_0x1e719a, _0x15a917, _0x3911ef, _0x251a3f, _0x376ac5) {
      _0x4571ce.renderbufferStorageMultisample(_0x1e719a, _0x15a917, _0x3911ef, _0x251a3f, _0x376ac5);
    }
    function _0x230c13(_0x347784, _0x2859b3, _0x3bac03) {
      _0x4571ce.samplerParameteri(_0x5365f0.samplers[_0x347784], _0x2859b3, _0x3bac03);
    }
    function _0x55369c(_0x37fe16, _0x4b5edf, _0x65ed1b, _0x3ad229) {
      _0x4571ce.scissor(_0x37fe16, _0x4b5edf, _0x65ed1b, _0x3ad229);
    }
    function _0x5e79b0(_0x13d99a, _0x2117ff, _0x35cb3f = "(", _0x9c65a7 = ")") {
      var _0x20bba1 = 0;
      for (; _0x2117ff < _0x13d99a.length; ++_0x2117ff) {
        if (_0x13d99a[_0x2117ff] == _0x35cb3f) {
          ++_0x20bba1;
        }
        if (_0x13d99a[_0x2117ff] == _0x9c65a7 && --_0x20bba1 == 0) {
          return _0x2117ff;
        }
      }
    }
    function _0x354dc3(_0x1adc39, _0x57e071 = {}) {
      var _0x3b7cda = 0;
      var _0x815519 = _0x1adc39.length;
      var _0xaea4ef = "";
      var _0x48e545 = [1];
      _0x57e071.defined = _0x173c3a => {
        if (_0x57e071[_0x173c3a[0]]) {
          return 1;
        } else {
          return 0;
        }
      };
      function _0x4afa92(_0x195b83, _0x5b99ee) {
        return !(_0x195b83.charCodeAt(_0x5b99ee) > 32);
      }
      function _0x23ff2d(_0x3f9454, _0x40a34e) {
        while (!_0x4afa92(_0x3f9454, _0x40a34e)) {
          ++_0x40a34e;
        }
        return _0x40a34e;
      }
      function _0x463d7d(_0x45729d, _0x19f212) {
        var _0x45e513 = _0x45729d.charCodeAt(_0x19f212);
        if (_0x45e513 > 32) {
          if (_0x45e513 < 48) {
            return 1;
          }
          if (_0x45e513 < 58) {
            return 2;
          }
          if (_0x45e513 < 65) {
            return 1;
          }
          if (_0x45e513 < 91 || _0x45e513 == 95) {
            return 3;
          }
          if (_0x45e513 < 97) {
            return 1;
          }
          if (_0x45e513 < 123) {
            return 3;
          }
          return 1;
        }
        if (_0x45e513 < 33) {
          return 0;
        } else {
          return 4;
        }
      }
      function _0x5d9c37(_0xec156e, _0x161ca4) {
        var _0x2baa00 = [];
        var _0x10df48 = _0xec156e.length;
        for (var _0x7949a = 0; _0x7949a <= _0x10df48; ++_0x7949a) {
          var _0x276d87 = _0x463d7d(_0xec156e, _0x7949a);
          if (_0x276d87 == 2 || _0x276d87 == 3) {
            for (var _0x5881b9 = _0x7949a + 1; _0x5881b9 <= _0x10df48; ++_0x5881b9) {
              var _0x59b43a = _0x463d7d(_0xec156e, _0x5881b9);
              if (_0x59b43a != _0x276d87 && (_0x59b43a != 2 || _0x276d87 != 3)) {
                _0x2baa00.push(_0xec156e.substring(_0x7949a, _0x5881b9));
                _0x7949a = _0x5881b9 - 1;
                break;
              }
            }
          } else if (_0x276d87 == 1) {
            var _0x383aad = _0xec156e.substr(_0x7949a, 2);
            if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x383aad)) {
              _0x2baa00.push(_0x383aad);
              ++_0x7949a;
            } else {
              _0x2baa00.push(_0xec156e[_0x7949a]);
            }
          }
        }
        return _0x2baa00;
      }
      function _0x2559ab(_0x13e97d, _0x218c0f, _0x5b9022 = _0x13e97d.length) {
        var _0x70ba32 = _0x13e97d.length;
        var _0x142808 = "";
        for (var _0x2538c6 = _0x218c0f; _0x2538c6 < _0x5b9022; ++_0x2538c6) {
          var _0x4ecf99 = _0x463d7d(_0x13e97d, _0x2538c6);
          if (_0x4ecf99 == 3) {
            for (var _0x322cd4 = _0x2538c6 + 1; _0x322cd4 <= _0x5b9022; ++_0x322cd4) {
              var _0x4fb6e0 = _0x463d7d(_0x13e97d, _0x322cd4);
              if (_0x4fb6e0 != 2 && _0x4fb6e0 != 3) {
                var _0x2de51c = _0x13e97d.substring(_0x2538c6, _0x322cd4);
                var _0x365f12 = _0x57e071[_0x2de51c];
                if (_0x365f12) {
                  var _0x5f2821 = _0x13e97d.substring(_0x218c0f, _0x2538c6);
                  if (_0x365f12.length && _0x13e97d[_0x322cd4] == "(") {
                    var _0x893ced = _0x5e79b0(_0x13e97d, _0x322cd4);
                    _0x5f2821 += _0x365f12(_0x13e97d.substring(_0x322cd4 + 1, _0x893ced).split(",")) + _0x13e97d.substring(_0x893ced + 1, _0x5b9022);
                  } else {
                    _0x5f2821 += _0x365f12() + _0x13e97d.substring(_0x322cd4, _0x5b9022);
                  }
                  return _0x2559ab(_0x5f2821, 0);
                } else {
                  _0x142808 += _0x2de51c;
                  _0x2538c6 = _0x322cd4 - 1;
                  break;
                }
              }
            }
          } else {
            _0x142808 += _0x13e97d[_0x2538c6];
          }
        }
        return _0x142808;
      }
      function _0x4ff740(_0x205602) {
        while (_0x205602.length > 1 || typeof _0x205602[0] != "function") {
          _0x205602 = function (_0x2cc147) {
            var _0x5624b9;
            var _0xc68ec7;
            var _0x29f686;
            var _0x59bf69 = -2;
            for (_0xc68ec7 = 0; _0xc68ec7 < _0x2cc147.length; ++_0xc68ec7) {
              if ((_0x29f686 = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x2cc147[_0xc68ec7])) > _0x59bf69) {
                _0x5624b9 = _0xc68ec7;
                _0x59bf69 = _0x29f686;
              }
            }
            if (_0x59bf69 == 13) {
              var _0xc68ec7 = _0x5e79b0(_0x2cc147, _0x5624b9);
              if (_0xc68ec7) {
                _0x2cc147.splice(_0x5624b9, _0xc68ec7 + 1 - _0x5624b9, _0x4ff740(_0x2cc147.slice(_0x5624b9 + 1, _0xc68ec7)));
                return _0x2cc147;
              }
            }
            if (_0x59bf69 == 4) {
              _0x5624b9 = _0x2cc147.lastIndexOf("!");
              var _0x5ac043 = _0x4ff740(_0x2cc147.slice(_0x5624b9 + 1, _0x5624b9 + 2));
              _0x2cc147.splice(_0x5624b9, 2, function () {
                return !_0x5ac043();
              });
              return _0x2cc147;
            }
            if (_0x59bf69 >= 0) {
              var _0x4950a1 = _0x4ff740(_0x2cc147.slice(0, _0x5624b9));
              var _0x5add17 = _0x4ff740(_0x2cc147.slice(_0x5624b9 + 1));
              switch (_0x2cc147[_0x5624b9]) {
                case "&&":
                  return [function () {
                    return _0x4950a1() && _0x5add17();
                  }];
                case "||":
                  return [function () {
                    return _0x4950a1() || _0x5add17();
                  }];
                case "==":
                  return [function () {
                    return _0x4950a1() == _0x5add17();
                  }];
                case "!=":
                  return [function () {
                    return _0x4950a1() != _0x5add17();
                  }];
                case "<":
                  return [function () {
                    return _0x4950a1() < _0x5add17();
                  }];
                case "<=":
                  return [function () {
                    return _0x4950a1() <= _0x5add17();
                  }];
                case ">":
                  return [function () {
                    return _0x4950a1() > _0x5add17();
                  }];
                case ">=":
                  return [function () {
                    return _0x4950a1() >= _0x5add17();
                  }];
                case "+":
                  return [function () {
                    return _0x4950a1() + _0x5add17();
                  }];
                case "-":
                  return [function () {
                    return _0x4950a1() - _0x5add17();
                  }];
                case "*":
                  return [function () {
                    return _0x4950a1() * _0x5add17();
                  }];
                case "/":
                  return [function () {
                    return Math.floor(_0x4950a1() / _0x5add17());
                  }];
              }
            }
            var _0x1c93e7 = _0x55395c(_0x2cc147[_0x5624b9]);
            return [function () {
              return _0x1c93e7;
            }];
          }(_0x205602);
        }
        return _0x205602[0];
      }
      for (; _0x3b7cda < _0x815519; ++_0x3b7cda) {
        var _0x2c0645 = _0x3b7cda;
        _0x3b7cda = _0x1adc39.indexOf("\n", _0x3b7cda);
        if (_0x3b7cda < 0) {
          _0x3b7cda = _0x815519;
        }
        for (var _0x3911de = _0x2c0645; _0x3911de < _0x3b7cda && _0x4afa92(_0x1adc39, _0x3911de); ++_0x3911de);
        var _0x1e7cca = _0x48e545[_0x48e545.length - 1];
        if (_0x1adc39[_0x3911de] != "#") {
          if (_0x1e7cca) {
            _0xaea4ef += _0x2559ab(_0x1adc39, _0x2c0645, _0x3b7cda) + "\n";
          }
          continue;
        }
        var _0x3d3590 = _0x23ff2d(_0x1adc39, _0x3911de);
        var _0x2fea5e = _0x1adc39.substring(_0x3911de + 1, _0x3d3590);
        var _0x5d85ba = _0x1adc39.substring(_0x3d3590, _0x3b7cda).trim();
        switch (_0x2fea5e) {
          case "if":
            var _0x24cf9e = _0x5d9c37(_0x2559ab(_0x5d85ba, 0));
            var _0x3f529a = _0x4ff740(_0x24cf9e);
            var _0x3b7147 = _0x3f529a();
            _0x48e545.push(!!_0x3b7147 * _0x48e545[_0x48e545.length - 1]);
            break;
          case "ifdef":
            _0x48e545.push(!!_0x57e071[_0x5d85ba] * _0x48e545[_0x48e545.length - 1]);
            break;
          case "ifndef":
            _0x48e545.push(!_0x57e071[_0x5d85ba] * _0x48e545[_0x48e545.length - 1]);
            break;
          case "else":
            _0x48e545[_0x48e545.length - 1] = 1 - _0x48e545[_0x48e545.length - 1];
            break;
          case "endif":
            _0x48e545.pop();
            break;
          case "define":
            if (_0x1e7cca) {
              var _0x23c38b = _0x5d85ba.indexOf("(");
              var _0x43d758 = _0x23ff2d(_0x5d85ba, 0);
              if (_0x43d758 < _0x23c38b) {
                _0x23c38b = 0;
              }
              if (_0x23c38b > 0) {
                var _0x5f3a9d = _0x5d85ba.indexOf(")", _0x23c38b);
                let _0x1c85fb = _0x5d85ba.substring(_0x23c38b + 1, _0x5f3a9d).split(",").map(_0x4667bc => _0x4667bc.trim());
                let _0x29c864 = _0x5d9c37(_0x5d85ba.substring(_0x5f3a9d + 1).trim());
                _0x57e071[_0x5d85ba.substring(0, _0x23c38b)] = _0x5f1e2a => {
                  var _0x2357a7 = "";
                  _0x29c864.forEach(_0x105395 => {
                    var _0x53218f = _0x1c85fb.indexOf(_0x105395);
                    _0x2357a7 += _0x53218f >= 0 ? _0x5f1e2a[_0x53218f] : _0x105395;
                  });
                  return _0x2357a7;
                };
              } else {
                let _0x566bc5 = _0x2559ab(_0x5d85ba.substring(_0x43d758 + 1).trim(), 0);
                _0x57e071[_0x5d85ba.substring(0, _0x43d758)] = () => _0x566bc5;
              }
            }
            break;
          case "undef":
            if (_0x1e7cca) {
              delete _0x57e071[_0x5d85ba];
            }
            break;
          default:
            if (_0x2fea5e != "version" && _0x2fea5e != "pragma" && _0x2fea5e != "extension") {}
            _0xaea4ef += _0x2559ab(_0x1adc39, _0x2c0645, _0x3b7cda) + "\n";
        }
      }
      return _0xaea4ef;
    }
    function _0x57b73a(_0x1df487) {
      var _0x3aa85f = 0;
      var _0x37257c = "";
      var _0x582412;
      var _0x50b806;
      var _0x2c7508 = _0x1df487.length;
      for (; _0x3aa85f < _0x2c7508; ++_0x3aa85f) {
        _0x582412 = _0x1df487[_0x3aa85f];
        if (_0x582412 == "/") {
          _0x50b806 = _0x1df487[_0x3aa85f + 1];
          if (_0x50b806 == "/") {
            while (_0x3aa85f < _0x2c7508 && _0x1df487[_0x3aa85f + 1] != "\n") {
              ++_0x3aa85f;
            }
          } else if (_0x50b806 == "*") {
            while (_0x3aa85f < _0x2c7508 && (_0x1df487[_0x3aa85f - 1] != "*" || _0x1df487[_0x3aa85f] != "/")) {
              ++_0x3aa85f;
            }
          } else {
            _0x37257c += _0x582412;
          }
        } else {
          _0x37257c += _0x582412;
        }
      }
      return _0x37257c;
    }
    function _0x5c602e(_0x1f1207, _0x5172b4, _0x4b8fd5, _0x4625ba) {
      var _0x398c8e = _0x5365f0.getSource(_0x1f1207, _0x5172b4, _0x4b8fd5, _0x4625ba);
      _0x398c8e = _0x354dc3(_0x57b73a(_0x398c8e), {
        GL_FRAGMENT_PRECISION_HIGH: () => 1,
        GL_ES: () => 1,
        __VERSION__: () => _0x398c8e.includes("#version 300") ? 300 : 100
      });
      var _0x48a719 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
      var _0x2cca5c = {};
      var _0x59fc84;
      while (_0x59fc84 = _0x48a719.exec(_0x398c8e)) {
        _0x2cca5c[_0x59fc84[5]] = _0x55395c(_0x59fc84[1]);
        if (!(_0x2cca5c[_0x59fc84[5]] >= 0) || !(_0x2cca5c[_0x59fc84[5]] < 1048576)) {
          _0x1771de("Specified an out of range layout(location=x) directive \"" + _0x2cca5c[_0x59fc84[5]] + "\"! (" + _0x59fc84[0] + ")");
          _0x5365f0.recordError(1281);
          return;
        }
      }
      _0x398c8e = _0x398c8e.replace(_0x48a719, "$2");
      _0x5365f0.shaders[_0x1f1207].explicitUniformLocations = _0x2cca5c;
      var _0x10eca7 = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
      var _0x3999bf = {};
      var _0x4a886f = {};
      var _0x5eaa84;
      while (_0x5eaa84 = _0x10eca7.exec(_0x398c8e)) {
        var _0x335fc8 = 1;
        for (var _0x35b32b = _0x5eaa84.index; _0x35b32b < _0x398c8e.length && _0x398c8e[_0x35b32b] != ";"; ++_0x35b32b) {
          if (_0x398c8e[_0x35b32b] == "[") {
            _0x335fc8 = _0x55395c(_0x398c8e.slice(_0x35b32b + 1));
            break;
          }
          if (_0x398c8e[_0x35b32b] == "{") {
            _0x35b32b = _0x5e79b0(_0x398c8e, _0x35b32b, "{", "}") - 1;
          }
        }
        var _0x308ea9 = _0x55395c(_0x5eaa84[1]);
        var _0x2980ce = 34930;
        if (_0x5eaa84[3] && _0x5eaa84[2].indexOf("sampler") != -1) {
          _0x3999bf[_0x5eaa84[3]] = [_0x308ea9, _0x335fc8];
        } else {
          _0x2980ce = 35374;
          _0x4a886f[_0x5eaa84[2]] = [_0x308ea9, _0x335fc8];
        }
        var _0x50fd7e = _0x4571ce.getParameter(_0x2980ce);
        if (!(_0x308ea9 >= 0) || !(_0x308ea9 + _0x335fc8 <= _0x50fd7e)) {
          _0x1771de("Specified an out of range layout(binding=x) directive \"" + _0x308ea9 + "\"! (" + _0x5eaa84[0] + "). Valid range is [0, " + _0x50fd7e + "-1]");
          _0x5365f0.recordError(1281);
          return;
        }
      }
      _0x398c8e = _0x398c8e.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
      _0x398c8e = _0x398c8e.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
      _0x398c8e = _0x398c8e.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
      _0x5365f0.shaders[_0x1f1207].explicitSamplerBindings = _0x3999bf;
      _0x5365f0.shaders[_0x1f1207].explicitUniformBindings = _0x4a886f;
      _0x4571ce.shaderSource(_0x5365f0.shaders[_0x1f1207], _0x398c8e);
    }
    function _0x78b79d(_0x1d9c11, _0x219c2c, _0x98f448, _0x4828dd) {
      _0x4571ce.stencilFuncSeparate(_0x1d9c11, _0x219c2c, _0x98f448, _0x4828dd);
    }
    function _0x55d707(_0x4d7c63) {
      _0x4571ce.stencilMask(_0x4d7c63);
    }
    function _0x33c427(_0xcae294, _0x2901c8, _0x12aca9, _0x38ba1b) {
      _0x4571ce.stencilOpSeparate(_0xcae294, _0x2901c8, _0x12aca9, _0x38ba1b);
    }
    function _0x42688c(_0x5bef72, _0x32094c, _0x260555, _0x24c646, _0x5e908a, _0x2a4937, _0x22ed4d, _0xb3e66b, _0x26fa75) {
      if (_0x5365f0.currentContext.version >= 2) {
        if (_0x4571ce.currentPixelUnpackBufferBinding) {
          _0x4571ce.texImage2D(_0x5bef72, _0x32094c, _0x260555, _0x24c646, _0x5e908a, _0x2a4937, _0x22ed4d, _0xb3e66b, _0x26fa75);
        } else if (_0x26fa75) {
          var _0x269ce9 = _0x2c7e6e(_0xb3e66b);
          _0x4571ce.texImage2D(_0x5bef72, _0x32094c, _0x260555, _0x24c646, _0x5e908a, _0x2a4937, _0x22ed4d, _0xb3e66b, _0x269ce9, _0x26fa75 >> _0x41cfff(_0x269ce9));
        } else {
          _0x4571ce.texImage2D(_0x5bef72, _0x32094c, _0x260555, _0x24c646, _0x5e908a, _0x2a4937, _0x22ed4d, _0xb3e66b, null);
        }
        return;
      }
      _0x4571ce.texImage2D(_0x5bef72, _0x32094c, _0x260555, _0x24c646, _0x5e908a, _0x2a4937, _0x22ed4d, _0xb3e66b, _0x26fa75 ? _0x8b35ac(_0xb3e66b, _0x22ed4d, _0x24c646, _0x5e908a, _0x26fa75, _0x260555) : null);
    }
    function _0xfda1d1(_0xf71be2, _0x2d4304, _0x4d971f, _0x55ca68, _0x2e965d, _0x238a33, _0x37c448, _0x1cc64f, _0x586ecc, _0x3a4b01) {
      if (_0x4571ce.currentPixelUnpackBufferBinding) {
        _0x4571ce.texImage3D(_0xf71be2, _0x2d4304, _0x4d971f, _0x55ca68, _0x2e965d, _0x238a33, _0x37c448, _0x1cc64f, _0x586ecc, _0x3a4b01);
      } else if (_0x3a4b01) {
        var _0x37b93e = _0x2c7e6e(_0x586ecc);
        _0x4571ce.texImage3D(_0xf71be2, _0x2d4304, _0x4d971f, _0x55ca68, _0x2e965d, _0x238a33, _0x37c448, _0x1cc64f, _0x586ecc, _0x37b93e, _0x3a4b01 >> _0x41cfff(_0x37b93e));
      } else {
        _0x4571ce.texImage3D(_0xf71be2, _0x2d4304, _0x4d971f, _0x55ca68, _0x2e965d, _0x238a33, _0x37c448, _0x1cc64f, _0x586ecc, null);
      }
    }
    function _0x1e66e3(_0x22326b, _0x764493, _0x3ebdaf) {
      _0x4571ce.texParameterf(_0x22326b, _0x764493, _0x3ebdaf);
    }
    function _0x6386c5(_0x59b096, _0x244979, _0x22889d) {
      _0x4571ce.texParameteri(_0x59b096, _0x244979, _0x22889d);
    }
    function _0x4dc2cc(_0x3c33bc, _0x19cd69, _0x43fdca) {
      var _0x368dc4 = _0x2f8726[_0x43fdca >> 2];
      _0x4571ce.texParameteri(_0x3c33bc, _0x19cd69, _0x368dc4);
    }
    function _0x287a2b(_0x17c023, _0x2820be, _0x2788d0, _0x4e080f, _0x1d3f7f) {
      _0x4571ce.texStorage2D(_0x17c023, _0x2820be, _0x2788d0, _0x4e080f, _0x1d3f7f);
    }
    function _0x560050(_0x5f2b5d, _0x83b252, _0x3fd91d, _0x3ee8c2, _0x10809a, _0x4ba1c6) {
      _0x4571ce.texStorage3D(_0x5f2b5d, _0x83b252, _0x3fd91d, _0x3ee8c2, _0x10809a, _0x4ba1c6);
    }
    function _0x194e0c(_0x3fe31f, _0x713822, _0x5e926b, _0x895f1, _0x4bb7c6, _0x4785af, _0x4cfa23, _0x1b8bb1, _0x211035) {
      if (_0x5365f0.currentContext.version >= 2) {
        if (_0x4571ce.currentPixelUnpackBufferBinding) {
          _0x4571ce.texSubImage2D(_0x3fe31f, _0x713822, _0x5e926b, _0x895f1, _0x4bb7c6, _0x4785af, _0x4cfa23, _0x1b8bb1, _0x211035);
        } else if (_0x211035) {
          var _0xa47321 = _0x2c7e6e(_0x1b8bb1);
          _0x4571ce.texSubImage2D(_0x3fe31f, _0x713822, _0x5e926b, _0x895f1, _0x4bb7c6, _0x4785af, _0x4cfa23, _0x1b8bb1, _0xa47321, _0x211035 >> _0x41cfff(_0xa47321));
        } else {
          _0x4571ce.texSubImage2D(_0x3fe31f, _0x713822, _0x5e926b, _0x895f1, _0x4bb7c6, _0x4785af, _0x4cfa23, _0x1b8bb1, null);
        }
        return;
      }
      var _0x51f725 = null;
      if (_0x211035) {
        _0x51f725 = _0x8b35ac(_0x1b8bb1, _0x4cfa23, _0x4bb7c6, _0x4785af, _0x211035, 0);
      }
      _0x4571ce.texSubImage2D(_0x3fe31f, _0x713822, _0x5e926b, _0x895f1, _0x4bb7c6, _0x4785af, _0x4cfa23, _0x1b8bb1, _0x51f725);
    }
    function _0x481228(_0x1b1afd, _0x5d8226, _0x5c55b3, _0x50d11a, _0x8a9aa0, _0x35610f, _0x923bb4, _0x43e3e7, _0x25c93f, _0x21d918, _0x4535e7) {
      if (_0x4571ce.currentPixelUnpackBufferBinding) {
        _0x4571ce.texSubImage3D(_0x1b1afd, _0x5d8226, _0x5c55b3, _0x50d11a, _0x8a9aa0, _0x35610f, _0x923bb4, _0x43e3e7, _0x25c93f, _0x21d918, _0x4535e7);
      } else if (_0x4535e7) {
        var _0x5dbce5 = _0x2c7e6e(_0x21d918);
        _0x4571ce.texSubImage3D(_0x1b1afd, _0x5d8226, _0x5c55b3, _0x50d11a, _0x8a9aa0, _0x35610f, _0x923bb4, _0x43e3e7, _0x25c93f, _0x21d918, _0x5dbce5, _0x4535e7 >> _0x41cfff(_0x5dbce5));
      } else {
        _0x4571ce.texSubImage3D(_0x1b1afd, _0x5d8226, _0x5c55b3, _0x50d11a, _0x8a9aa0, _0x35610f, _0x923bb4, _0x43e3e7, _0x25c93f, _0x21d918, null);
      }
    }
    var _0x502705 = [];
    function _0x47f11d(_0xd82c72, _0x55654f, _0x1d3950) {
      if (_0x5365f0.currentContext.version >= 2) {
        _0x4571ce.uniform1fv(_0x13ed58(_0xd82c72), _0x2e245b, _0x1d3950 >> 2, _0x55654f);
        return;
      }
      if (_0x55654f <= 288) {
        var _0x42a55f = _0x502705[_0x55654f - 1];
        for (var _0x4ed10d = 0; _0x4ed10d < _0x55654f; ++_0x4ed10d) {
          _0x42a55f[_0x4ed10d] = _0x2e245b[_0x1d3950 + _0x4ed10d * 4 >> 2];
        }
      } else {
        var _0x42a55f = _0x2e245b.subarray(_0x1d3950 >> 2, _0x1d3950 + _0x55654f * 4 >> 2);
      }
      _0x4571ce.uniform1fv(_0x13ed58(_0xd82c72), _0x42a55f);
    }
    function _0x5c45e9(_0xf4de71, _0x541fcf) {
      _0x4571ce.uniform1i(_0x13ed58(_0xf4de71), _0x541fcf);
    }
    var _0x94d4c4 = [];
    function _0x1c30d3(_0x252d4d, _0x495c17, _0x1bd95c) {
      if (_0x5365f0.currentContext.version >= 2) {
        _0x4571ce.uniform1iv(_0x13ed58(_0x252d4d), _0x2f8726, _0x1bd95c >> 2, _0x495c17);
        return;
      }
      if (_0x495c17 <= 288) {
        var _0x56f41a = _0x94d4c4[_0x495c17 - 1];
        for (var _0xdec027 = 0; _0xdec027 < _0x495c17; ++_0xdec027) {
          _0x56f41a[_0xdec027] = _0x2f8726[_0x1bd95c + _0xdec027 * 4 >> 2];
        }
      } else {
        var _0x56f41a = _0x2f8726.subarray(_0x1bd95c >> 2, _0x1bd95c + _0x495c17 * 4 >> 2);
      }
      _0x4571ce.uniform1iv(_0x13ed58(_0x252d4d), _0x56f41a);
    }
    function _0x539620(_0x106ac2, _0x1b5446, _0x3a3827) {
      _0x4571ce.uniform1uiv(_0x13ed58(_0x106ac2), _0x1cca99, _0x3a3827 >> 2, _0x1b5446);
    }
    function _0x1a119a(_0x5c0914, _0x1a4fec, _0x415dfe) {
      if (_0x5365f0.currentContext.version >= 2) {
        _0x4571ce.uniform2fv(_0x13ed58(_0x5c0914), _0x2e245b, _0x415dfe >> 2, _0x1a4fec * 2);
        return;
      }
      if (_0x1a4fec <= 144) {
        var _0x5a25a4 = _0x502705[_0x1a4fec * 2 - 1];
        for (var _0x3c6467 = 0; _0x3c6467 < _0x1a4fec * 2; _0x3c6467 += 2) {
          _0x5a25a4[_0x3c6467] = _0x2e245b[_0x415dfe + _0x3c6467 * 4 >> 2];
          _0x5a25a4[_0x3c6467 + 1] = _0x2e245b[_0x415dfe + (_0x3c6467 * 4 + 4) >> 2];
        }
      } else {
        var _0x5a25a4 = _0x2e245b.subarray(_0x415dfe >> 2, _0x415dfe + _0x1a4fec * 8 >> 2);
      }
      _0x4571ce.uniform2fv(_0x13ed58(_0x5c0914), _0x5a25a4);
    }
    function _0x1dd1fa(_0x35e4a8, _0x186d8f, _0x141ac6) {
      if (_0x5365f0.currentContext.version >= 2) {
        _0x4571ce.uniform2iv(_0x13ed58(_0x35e4a8), _0x2f8726, _0x141ac6 >> 2, _0x186d8f * 2);
        return;
      }
      if (_0x186d8f <= 144) {
        var _0x2c8899 = _0x94d4c4[_0x186d8f * 2 - 1];
        for (var _0x5a6cb1 = 0; _0x5a6cb1 < _0x186d8f * 2; _0x5a6cb1 += 2) {
          _0x2c8899[_0x5a6cb1] = _0x2f8726[_0x141ac6 + _0x5a6cb1 * 4 >> 2];
          _0x2c8899[_0x5a6cb1 + 1] = _0x2f8726[_0x141ac6 + (_0x5a6cb1 * 4 + 4) >> 2];
        }
      } else {
        var _0x2c8899 = _0x2f8726.subarray(_0x141ac6 >> 2, _0x141ac6 + _0x186d8f * 8 >> 2);
      }
      _0x4571ce.uniform2iv(_0x13ed58(_0x35e4a8), _0x2c8899);
    }
    function _0x19699c(_0x56aceb, _0x422c08, _0x5a0af2) {
      _0x4571ce.uniform2uiv(_0x13ed58(_0x56aceb), _0x1cca99, _0x5a0af2 >> 2, _0x422c08 * 2);
    }
    function _0x55c016(_0x9cd9ed, _0x5d3c26, _0xdcea30) {
      if (_0x5365f0.currentContext.version >= 2) {
        _0x4571ce.uniform3fv(_0x13ed58(_0x9cd9ed), _0x2e245b, _0xdcea30 >> 2, _0x5d3c26 * 3);
        return;
      }
      if (_0x5d3c26 <= 96) {
        var _0xf619f5 = _0x502705[_0x5d3c26 * 3 - 1];
        for (var _0x358940 = 0; _0x358940 < _0x5d3c26 * 3; _0x358940 += 3) {
          _0xf619f5[_0x358940] = _0x2e245b[_0xdcea30 + _0x358940 * 4 >> 2];
          _0xf619f5[_0x358940 + 1] = _0x2e245b[_0xdcea30 + (_0x358940 * 4 + 4) >> 2];
          _0xf619f5[_0x358940 + 2] = _0x2e245b[_0xdcea30 + (_0x358940 * 4 + 8) >> 2];
        }
      } else {
        var _0xf619f5 = _0x2e245b.subarray(_0xdcea30 >> 2, _0xdcea30 + _0x5d3c26 * 12 >> 2);
      }
      _0x4571ce.uniform3fv(_0x13ed58(_0x9cd9ed), _0xf619f5);
    }
    function _0x2f7c1c(_0x4e3d12, _0x1468f0, _0xfb714) {
      if (_0x5365f0.currentContext.version >= 2) {
        _0x4571ce.uniform3iv(_0x13ed58(_0x4e3d12), _0x2f8726, _0xfb714 >> 2, _0x1468f0 * 3);
        return;
      }
      if (_0x1468f0 <= 96) {
        var _0x113256 = _0x94d4c4[_0x1468f0 * 3 - 1];
        for (var _0x50a915 = 0; _0x50a915 < _0x1468f0 * 3; _0x50a915 += 3) {
          _0x113256[_0x50a915] = _0x2f8726[_0xfb714 + _0x50a915 * 4 >> 2];
          _0x113256[_0x50a915 + 1] = _0x2f8726[_0xfb714 + (_0x50a915 * 4 + 4) >> 2];
          _0x113256[_0x50a915 + 2] = _0x2f8726[_0xfb714 + (_0x50a915 * 4 + 8) >> 2];
        }
      } else {
        var _0x113256 = _0x2f8726.subarray(_0xfb714 >> 2, _0xfb714 + _0x1468f0 * 12 >> 2);
      }
      _0x4571ce.uniform3iv(_0x13ed58(_0x4e3d12), _0x113256);
    }
    function _0x102339(_0x152ee7, _0x5c9438, _0x2ff165) {
      _0x4571ce.uniform3uiv(_0x13ed58(_0x152ee7), _0x1cca99, _0x2ff165 >> 2, _0x5c9438 * 3);
    }
    function _0x249b18(_0x1a0a1e, _0x35a73a, _0x529f99) {
      if (_0x5365f0.currentContext.version >= 2) {
        _0x4571ce.uniform4fv(_0x13ed58(_0x1a0a1e), _0x2e245b, _0x529f99 >> 2, _0x35a73a * 4);
        return;
      }
      if (_0x35a73a <= 72) {
        var _0x44203e = _0x502705[_0x35a73a * 4 - 1];
        var _0x420280 = _0x2e245b;
        _0x529f99 >>= 2;
        for (var _0x4e8153 = 0; _0x4e8153 < _0x35a73a * 4; _0x4e8153 += 4) {
          var _0x500fb6 = _0x529f99 + _0x4e8153;
          _0x44203e[_0x4e8153] = _0x420280[_0x500fb6];
          _0x44203e[_0x4e8153 + 1] = _0x420280[_0x500fb6 + 1];
          _0x44203e[_0x4e8153 + 2] = _0x420280[_0x500fb6 + 2];
          _0x44203e[_0x4e8153 + 3] = _0x420280[_0x500fb6 + 3];
        }
      } else {
        var _0x44203e = _0x2e245b.subarray(_0x529f99 >> 2, _0x529f99 + _0x35a73a * 16 >> 2);
      }
      _0x4571ce.uniform4fv(_0x13ed58(_0x1a0a1e), _0x44203e);
    }
    function _0x7f9fdf(_0x5c2e4a, _0x3f5479, _0x4037bc) {
      if (_0x5365f0.currentContext.version >= 2) {
        _0x4571ce.uniform4iv(_0x13ed58(_0x5c2e4a), _0x2f8726, _0x4037bc >> 2, _0x3f5479 * 4);
        return;
      }
      if (_0x3f5479 <= 72) {
        var _0x3c6452 = _0x94d4c4[_0x3f5479 * 4 - 1];
        for (var _0x29e7e3 = 0; _0x29e7e3 < _0x3f5479 * 4; _0x29e7e3 += 4) {
          _0x3c6452[_0x29e7e3] = _0x2f8726[_0x4037bc + _0x29e7e3 * 4 >> 2];
          _0x3c6452[_0x29e7e3 + 1] = _0x2f8726[_0x4037bc + (_0x29e7e3 * 4 + 4) >> 2];
          _0x3c6452[_0x29e7e3 + 2] = _0x2f8726[_0x4037bc + (_0x29e7e3 * 4 + 8) >> 2];
          _0x3c6452[_0x29e7e3 + 3] = _0x2f8726[_0x4037bc + (_0x29e7e3 * 4 + 12) >> 2];
        }
      } else {
        var _0x3c6452 = _0x2f8726.subarray(_0x4037bc >> 2, _0x4037bc + _0x3f5479 * 16 >> 2);
      }
      _0x4571ce.uniform4iv(_0x13ed58(_0x5c2e4a), _0x3c6452);
    }
    function _0x321d6c(_0x381f2e, _0x47ba51, _0x17210a) {
      _0x4571ce.uniform4uiv(_0x13ed58(_0x381f2e), _0x1cca99, _0x17210a >> 2, _0x47ba51 * 4);
    }
    function _0xe6fc60(_0x2c6696, _0x45e6c4, _0x2ebd69) {
      _0x2c6696 = _0x5365f0.programs[_0x2c6696];
      _0x4571ce.uniformBlockBinding(_0x2c6696, _0x45e6c4, _0x2ebd69);
    }
    function _0x276670(_0x6daf00, _0x40e082, _0x13e9dc, _0x2304a1) {
      if (_0x5365f0.currentContext.version >= 2) {
        _0x4571ce.uniformMatrix3fv(_0x13ed58(_0x6daf00), !!_0x13e9dc, _0x2e245b, _0x2304a1 >> 2, _0x40e082 * 9);
        return;
      }
      if (_0x40e082 <= 32) {
        var _0xa1c775 = _0x502705[_0x40e082 * 9 - 1];
        for (var _0x54ad9b = 0; _0x54ad9b < _0x40e082 * 9; _0x54ad9b += 9) {
          _0xa1c775[_0x54ad9b] = _0x2e245b[_0x2304a1 + _0x54ad9b * 4 >> 2];
          _0xa1c775[_0x54ad9b + 1] = _0x2e245b[_0x2304a1 + (_0x54ad9b * 4 + 4) >> 2];
          _0xa1c775[_0x54ad9b + 2] = _0x2e245b[_0x2304a1 + (_0x54ad9b * 4 + 8) >> 2];
          _0xa1c775[_0x54ad9b + 3] = _0x2e245b[_0x2304a1 + (_0x54ad9b * 4 + 12) >> 2];
          _0xa1c775[_0x54ad9b + 4] = _0x2e245b[_0x2304a1 + (_0x54ad9b * 4 + 16) >> 2];
          _0xa1c775[_0x54ad9b + 5] = _0x2e245b[_0x2304a1 + (_0x54ad9b * 4 + 20) >> 2];
          _0xa1c775[_0x54ad9b + 6] = _0x2e245b[_0x2304a1 + (_0x54ad9b * 4 + 24) >> 2];
          _0xa1c775[_0x54ad9b + 7] = _0x2e245b[_0x2304a1 + (_0x54ad9b * 4 + 28) >> 2];
          _0xa1c775[_0x54ad9b + 8] = _0x2e245b[_0x2304a1 + (_0x54ad9b * 4 + 32) >> 2];
        }
      } else {
        var _0xa1c775 = _0x2e245b.subarray(_0x2304a1 >> 2, _0x2304a1 + _0x40e082 * 36 >> 2);
      }
      _0x4571ce.uniformMatrix3fv(_0x13ed58(_0x6daf00), !!_0x13e9dc, _0xa1c775);
    }
    function _0x5dc196(_0x22be24, _0x3c8177, _0x3268a8, _0x4f8832) {
      if (_0x5365f0.currentContext.version >= 2) {
        _0x4571ce.uniformMatrix4fv(_0x13ed58(_0x22be24), !!_0x3268a8, _0x2e245b, _0x4f8832 >> 2, _0x3c8177 * 16);
        return;
      }
      if (_0x3c8177 <= 18) {
        var _0x3b72ce = _0x502705[_0x3c8177 * 16 - 1];
        var _0x55f763 = _0x2e245b;
        _0x4f8832 >>= 2;
        for (var _0x4a870e = 0; _0x4a870e < _0x3c8177 * 16; _0x4a870e += 16) {
          var _0x1b517c = _0x4f8832 + _0x4a870e;
          _0x3b72ce[_0x4a870e] = _0x55f763[_0x1b517c];
          _0x3b72ce[_0x4a870e + 1] = _0x55f763[_0x1b517c + 1];
          _0x3b72ce[_0x4a870e + 2] = _0x55f763[_0x1b517c + 2];
          _0x3b72ce[_0x4a870e + 3] = _0x55f763[_0x1b517c + 3];
          _0x3b72ce[_0x4a870e + 4] = _0x55f763[_0x1b517c + 4];
          _0x3b72ce[_0x4a870e + 5] = _0x55f763[_0x1b517c + 5];
          _0x3b72ce[_0x4a870e + 6] = _0x55f763[_0x1b517c + 6];
          _0x3b72ce[_0x4a870e + 7] = _0x55f763[_0x1b517c + 7];
          _0x3b72ce[_0x4a870e + 8] = _0x55f763[_0x1b517c + 8];
          _0x3b72ce[_0x4a870e + 9] = _0x55f763[_0x1b517c + 9];
          _0x3b72ce[_0x4a870e + 10] = _0x55f763[_0x1b517c + 10];
          _0x3b72ce[_0x4a870e + 11] = _0x55f763[_0x1b517c + 11];
          _0x3b72ce[_0x4a870e + 12] = _0x55f763[_0x1b517c + 12];
          _0x3b72ce[_0x4a870e + 13] = _0x55f763[_0x1b517c + 13];
          _0x3b72ce[_0x4a870e + 14] = _0x55f763[_0x1b517c + 14];
          _0x3b72ce[_0x4a870e + 15] = _0x55f763[_0x1b517c + 15];
        }
      } else {
        var _0x3b72ce = _0x2e245b.subarray(_0x4f8832 >> 2, _0x4f8832 + _0x3c8177 * 64 >> 2);
      }
      _0x4571ce.uniformMatrix4fv(_0x13ed58(_0x22be24), !!_0x3268a8, _0x3b72ce);
    }
    function _0x4b88c0(_0x562071) {
      if (!_0x4885cf(_0x562071)) {
        _0x5365f0.recordError(1280);
        _0x1771de("GL_INVALID_ENUM in glUnmapBuffer");
        return 0;
      }
      var _0x5d1a60 = _0x312ef9(_0x562071);
      var _0x42a968 = _0x5365f0.mappedBuffers[_0x5d1a60];
      if (!_0x42a968) {
        _0x5365f0.recordError(1282);
        _0x1771de("buffer was never mapped in glUnmapBuffer");
        return 0;
      }
      _0x5365f0.mappedBuffers[_0x5d1a60] = null;
      if (!(_0x42a968.access & 16)) {
        if (_0x5365f0.currentContext.version >= 2) {
          _0x4571ce.bufferSubData(_0x562071, _0x42a968.offset, _0x4924c2, _0x42a968.mem, _0x42a968.length);
        } else {
          _0x4571ce.bufferSubData(_0x562071, _0x42a968.offset, _0x4924c2.subarray(_0x42a968.mem, _0x42a968.mem + _0x42a968.length));
        }
      }
      _0x1f42d0(_0x42a968.mem);
      return 1;
    }
    function _0x35f326() {
      var _0x7611e0 = _0x4571ce.currentProgram;
      if (!_0x7611e0.explicitProgramBindingsApplied) {
        if (_0x5365f0.currentContext.version >= 2) {
          Object.keys(_0x7611e0.explicitUniformBindings).forEach(function (_0x7d5098) {
            var _0x2aa133 = _0x7611e0.explicitUniformBindings[_0x7d5098];
            for (var _0x183646 = 0; _0x183646 < _0x2aa133[1]; ++_0x183646) {
              var _0x499be2 = _0x4571ce.getUniformBlockIndex(_0x7611e0, _0x7d5098 + (_0x2aa133[1] > 1 ? "[" + _0x183646 + "]" : ""));
              _0x4571ce.uniformBlockBinding(_0x7611e0, _0x499be2, _0x2aa133[0] + _0x183646);
            }
          });
        }
        Object.keys(_0x7611e0.explicitSamplerBindings).forEach(function (_0x58254b) {
          var _0xd7b696 = _0x7611e0.explicitSamplerBindings[_0x58254b];
          for (var _0x416c4a = 0; _0x416c4a < _0xd7b696[1]; ++_0x416c4a) {
            _0x4571ce.uniform1i(_0x4571ce.getUniformLocation(_0x7611e0, _0x58254b + (_0x416c4a ? "[" + _0x416c4a + "]" : "")), _0xd7b696[0] + _0x416c4a);
          }
        });
        _0x7611e0.explicitProgramBindingsApplied = 1;
      }
    }
    function _0xaab6b7(_0x2a0241) {
      _0x2a0241 = _0x5365f0.programs[_0x2a0241];
      _0x4571ce.useProgram(_0x2a0241);
      if (_0x4571ce.currentProgram = _0x2a0241) {
        _0x35f326();
      }
    }
    function _0x5e8b65(_0x3c1117) {
      _0x4571ce.validateProgram(_0x5365f0.programs[_0x3c1117]);
    }
    function _0x291023(_0x51f209, _0x2ac699, _0x348b42, _0x3c9796, _0x155b94) {
      _0x4571ce.vertexAttrib4f(_0x51f209, _0x2ac699, _0x348b42, _0x3c9796, _0x155b94);
    }
    function _0x4f40a8(_0x11be4d, _0x5acf8c) {
      _0x4571ce.vertexAttrib4f(_0x11be4d, _0x2e245b[_0x5acf8c >> 2], _0x2e245b[_0x5acf8c + 4 >> 2], _0x2e245b[_0x5acf8c + 8 >> 2], _0x2e245b[_0x5acf8c + 12 >> 2]);
    }
    function _0x82d157(_0x552c3e, _0x1401f5, _0x149cb4, _0x3567ec, _0x3bf008) {
      var _0x1f10c0 = _0x5365f0.currentContext.clientBuffers[_0x552c3e];
      if (!_0x4571ce.currentArrayBufferBinding) {
        _0x1f10c0.size = _0x1401f5;
        _0x1f10c0.type = _0x149cb4;
        _0x1f10c0.normalized = false;
        _0x1f10c0.stride = _0x3567ec;
        _0x1f10c0.ptr = _0x3bf008;
        _0x1f10c0.clientside = true;
        _0x1f10c0.vertexAttribPointerAdaptor = function (_0x3b9e0d, _0x50e2ab, _0x10c83e, _0x43f9e7, _0x37c8cd, _0x1b0630) {
          this.vertexAttribIPointer(_0x3b9e0d, _0x50e2ab, _0x10c83e, _0x37c8cd, _0x1b0630);
        };
        return;
      }
      _0x1f10c0.clientside = false;
      _0x4571ce.vertexAttribIPointer(_0x552c3e, _0x1401f5, _0x149cb4, _0x3567ec, _0x3bf008);
    }
    function _0x5327a7(_0x5676cb, _0x584a6e, _0x275589, _0x23e9f3, _0x6f3e5f, _0x36008e) {
      var _0x1133b5 = _0x5365f0.currentContext.clientBuffers[_0x5676cb];
      if (!_0x4571ce.currentArrayBufferBinding) {
        _0x1133b5.size = _0x584a6e;
        _0x1133b5.type = _0x275589;
        _0x1133b5.normalized = _0x23e9f3;
        _0x1133b5.stride = _0x6f3e5f;
        _0x1133b5.ptr = _0x36008e;
        _0x1133b5.clientside = true;
        _0x1133b5.vertexAttribPointerAdaptor = function (_0x7a7e23, _0x434304, _0xce30d2, _0x29a461, _0x3e2d1f, _0x417004) {
          this.vertexAttribPointer(_0x7a7e23, _0x434304, _0xce30d2, _0x29a461, _0x3e2d1f, _0x417004);
        };
        return;
      }
      _0x1133b5.clientside = false;
      _0x4571ce.vertexAttribPointer(_0x5676cb, _0x584a6e, _0x275589, !!_0x23e9f3, _0x6f3e5f, _0x36008e);
    }
    function _0x3fb80a(_0x57e2cf, _0x46b3a6, _0x2788ae, _0x19dcc1) {
      _0x4571ce.viewport(_0x57e2cf, _0x46b3a6, _0x2788ae, _0x19dcc1);
    }
    function _0x349404(_0xa348b6) {
      return _0xa348b6;
    }
    function _0x2f542b(_0x245212) {
      _0x32cdc1(_0x245212);
    }
    function _0x11bf8f(_0x13f862) {
      return _0x13f862 % 4 === 0 && (_0x13f862 % 100 !== 0 || _0x13f862 % 400 === 0);
    }
    function _0x31bd67(_0xa5f79, _0x22805e) {
      var _0x264677 = 0;
      for (var _0x5f3c01 = 0; _0x5f3c01 <= _0x22805e; _0x264677 += _0xa5f79[_0x5f3c01++]) {}
      return _0x264677;
    }
    var _0x4138e9 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var _0x42fc73 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function _0x3a0833(_0x5844f3, _0x5d595b) {
      var _0x64ffa0 = new Date(_0x5844f3.getTime());
      while (_0x5d595b > 0) {
        var _0x1d7722 = _0x11bf8f(_0x64ffa0.getFullYear());
        var _0xaf36b4 = _0x64ffa0.getMonth();
        var _0x1db81b = (_0x1d7722 ? _0x4138e9 : _0x42fc73)[_0xaf36b4];
        if (_0x5d595b > _0x1db81b - _0x64ffa0.getDate()) {
          _0x5d595b -= _0x1db81b - _0x64ffa0.getDate() + 1;
          _0x64ffa0.setDate(1);
          if (_0xaf36b4 < 11) {
            _0x64ffa0.setMonth(_0xaf36b4 + 1);
          } else {
            _0x64ffa0.setMonth(0);
            _0x64ffa0.setFullYear(_0x64ffa0.getFullYear() + 1);
          }
        } else {
          _0x64ffa0.setDate(_0x64ffa0.getDate() + _0x5d595b);
          return _0x64ffa0;
        }
      }
      return _0x64ffa0;
    }
    function _0x521dce(_0x1289fd, _0x53db02, _0x1f54c6, _0x5326a8) {
      var _0x180a6f = _0x2f8726[_0x5326a8 + 40 >> 2];
      var _0x42cf5e = {
        tm_sec: _0x2f8726[_0x5326a8 >> 2],
        tm_min: _0x2f8726[_0x5326a8 + 4 >> 2],
        tm_hour: _0x2f8726[_0x5326a8 + 8 >> 2],
        tm_mday: _0x2f8726[_0x5326a8 + 12 >> 2],
        tm_mon: _0x2f8726[_0x5326a8 + 16 >> 2],
        tm_year: _0x2f8726[_0x5326a8 + 20 >> 2],
        tm_wday: _0x2f8726[_0x5326a8 + 24 >> 2],
        tm_yday: _0x2f8726[_0x5326a8 + 28 >> 2],
        tm_isdst: _0x2f8726[_0x5326a8 + 32 >> 2],
        tm_gmtoff: _0x2f8726[_0x5326a8 + 36 >> 2],
        tm_zone: _0x180a6f ? _0x468390(_0x180a6f) : ""
      };
      var _0x2ff09b = _0x468390(_0x1f54c6);
      var _0x59ae6b = {
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
      for (var _0x575455 in _0x59ae6b) {
        _0x2ff09b = _0x2ff09b.replace(new RegExp(_0x575455, "g"), _0x59ae6b[_0x575455]);
      }
      var _0x53e2b8 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var _0x5e5228 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function _0x443bfa(_0x26142a, _0x153073, _0x1f46f1) {
        var _0x1f24da = typeof _0x26142a == "number" ? _0x26142a.toString() : _0x26142a || "";
        while (_0x1f24da.length < _0x153073) {
          _0x1f24da = _0x1f46f1[0] + _0x1f24da;
        }
        return _0x1f24da;
      }
      function _0x27d34b(_0x560cb9, _0x31fc8e) {
        return _0x443bfa(_0x560cb9, _0x31fc8e, "0");
      }
      function _0x389063(_0xbf93ab, _0x45c443) {
        function _0x2a7962(_0x3d5f8e) {
          if (_0x3d5f8e < 0) {
            return -1;
          } else if (_0x3d5f8e > 0) {
            return 1;
          } else {
            return 0;
          }
        }
        var _0xaa90b6;
        if ((_0xaa90b6 = _0x2a7962(_0xbf93ab.getFullYear() - _0x45c443.getFullYear())) === 0) {
          if ((_0xaa90b6 = _0x2a7962(_0xbf93ab.getMonth() - _0x45c443.getMonth())) === 0) {
            _0xaa90b6 = _0x2a7962(_0xbf93ab.getDate() - _0x45c443.getDate());
          }
        }
        return _0xaa90b6;
      }
      function _0x4d7c05(_0x282336) {
        switch (_0x282336.getDay()) {
          case 0:
            return new Date(_0x282336.getFullYear() - 1, 11, 29);
          case 1:
            return _0x282336;
          case 2:
            return new Date(_0x282336.getFullYear(), 0, 3);
          case 3:
            return new Date(_0x282336.getFullYear(), 0, 2);
          case 4:
            return new Date(_0x282336.getFullYear(), 0, 1);
          case 5:
            return new Date(_0x282336.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(_0x282336.getFullYear() - 1, 11, 30);
        }
      }
      function _0x2ce49e(_0x25a9d8) {
        var _0x41f43a = _0x3a0833(new Date(_0x25a9d8.tm_year + 1900, 0, 1), _0x25a9d8.tm_yday);
        var _0x2a95be = new Date(_0x41f43a.getFullYear(), 0, 4);
        var _0x890d04 = new Date(_0x41f43a.getFullYear() + 1, 0, 4);
        var _0x2f9f13 = _0x4d7c05(_0x2a95be);
        var _0x13192c = _0x4d7c05(_0x890d04);
        if (_0x389063(_0x2f9f13, _0x41f43a) <= 0) {
          if (_0x389063(_0x13192c, _0x41f43a) <= 0) {
            return _0x41f43a.getFullYear() + 1;
          } else {
            return _0x41f43a.getFullYear();
          }
        } else {
          return _0x41f43a.getFullYear() - 1;
        }
      }
      var _0x568b44 = {
        "%a": function (_0x4b4823) {
          return _0x53e2b8[_0x4b4823.tm_wday].substring(0, 3);
        },
        "%A": function (_0x10de2a) {
          return _0x53e2b8[_0x10de2a.tm_wday];
        },
        "%b": function (_0x278591) {
          return _0x5e5228[_0x278591.tm_mon].substring(0, 3);
        },
        "%B": function (_0xf1af0c) {
          return _0x5e5228[_0xf1af0c.tm_mon];
        },
        "%C": function (_0x116d04) {
          var _0x5e3ab1 = _0x116d04.tm_year + 1900;
          return _0x27d34b(_0x5e3ab1 / 100 | 0, 2);
        },
        "%d": function (_0xa98817) {
          return _0x27d34b(_0xa98817.tm_mday, 2);
        },
        "%e": function (_0x2af0ed) {
          return _0x443bfa(_0x2af0ed.tm_mday, 2, " ");
        },
        "%g": function (_0x2d5007) {
          return _0x2ce49e(_0x2d5007).toString().substring(2);
        },
        "%G": function (_0x197088) {
          return _0x2ce49e(_0x197088);
        },
        "%H": function (_0x572750) {
          return _0x27d34b(_0x572750.tm_hour, 2);
        },
        "%I": function (_0x5bc9dc) {
          var _0x3901e3 = _0x5bc9dc.tm_hour;
          if (_0x3901e3 == 0) {
            _0x3901e3 = 12;
          } else if (_0x3901e3 > 12) {
            _0x3901e3 -= 12;
          }
          return _0x27d34b(_0x3901e3, 2);
        },
        "%j": function (_0x1990f5) {
          return _0x27d34b(_0x1990f5.tm_mday + _0x31bd67(_0x11bf8f(_0x1990f5.tm_year + 1900) ? _0x4138e9 : _0x42fc73, _0x1990f5.tm_mon - 1), 3);
        },
        "%m": function (_0x1c951e) {
          return _0x27d34b(_0x1c951e.tm_mon + 1, 2);
        },
        "%M": function (_0x56aec7) {
          return _0x27d34b(_0x56aec7.tm_min, 2);
        },
        "%n": function () {
          return "\n";
        },
        "%p": function (_0x5dca3c) {
          if (_0x5dca3c.tm_hour >= 0 && _0x5dca3c.tm_hour < 12) {
            return "AM";
          } else {
            return "PM";
          }
        },
        "%S": function (_0x6b95b6) {
          return _0x27d34b(_0x6b95b6.tm_sec, 2);
        },
        "%t": function () {
          return "\t";
        },
        "%u": function (_0x5b8c92) {
          return _0x5b8c92.tm_wday || 7;
        },
        "%U": function (_0x3f78b2) {
          var _0x2e7267 = _0x3f78b2.tm_yday + 7 - _0x3f78b2.tm_wday;
          return _0x27d34b(Math.floor(_0x2e7267 / 7), 2);
        },
        "%V": function (_0x12cb27) {
          var _0x4cc850 = Math.floor((_0x12cb27.tm_yday + 7 - (_0x12cb27.tm_wday + 6) % 7) / 7);
          if ((_0x12cb27.tm_wday + 371 - _0x12cb27.tm_yday - 2) % 7 <= 2) {
            _0x4cc850++;
          }
          if (!_0x4cc850) {
            _0x4cc850 = 52;
            var _0x4aff36 = (_0x12cb27.tm_wday + 7 - _0x12cb27.tm_yday - 1) % 7;
            if (_0x4aff36 == 4 || _0x4aff36 == 5 && _0x11bf8f(_0x12cb27.tm_year % 400 - 1)) {
              _0x4cc850++;
            }
          } else if (_0x4cc850 == 53) {
            var _0x24b6a6 = (_0x12cb27.tm_wday + 371 - _0x12cb27.tm_yday) % 7;
            if (_0x24b6a6 != 4 && (_0x24b6a6 != 3 || !_0x11bf8f(_0x12cb27.tm_year))) {
              _0x4cc850 = 1;
            }
          }
          return _0x27d34b(_0x4cc850, 2);
        },
        "%w": function (_0x28f316) {
          return _0x28f316.tm_wday;
        },
        "%W": function (_0x34b6e4) {
          var _0x4771c4 = _0x34b6e4.tm_yday + 7 - (_0x34b6e4.tm_wday + 6) % 7;
          return _0x27d34b(Math.floor(_0x4771c4 / 7), 2);
        },
        "%y": function (_0x3f5587) {
          return (_0x3f5587.tm_year + 1900).toString().substring(2);
        },
        "%Y": function (_0x33a68b) {
          return _0x33a68b.tm_year + 1900;
        },
        "%z": function (_0x68460e) {
          var _0x442f70 = _0x68460e.tm_gmtoff;
          var _0x6a300 = _0x442f70 >= 0;
          _0x442f70 = Math.abs(_0x442f70) / 60;
          _0x442f70 = _0x442f70 / 60 * 100 + _0x442f70 % 60;
          return (_0x6a300 ? "+" : "-") + String("0000" + _0x442f70).slice(-4);
        },
        "%Z": function (_0x1724c5) {
          return _0x1724c5.tm_zone;
        },
        "%%": function () {
          return "%";
        }
      };
      _0x2ff09b = _0x2ff09b.replace(/%%/g, "\0\0");
      for (var _0x575455 in _0x568b44) {
        if (_0x2ff09b.includes(_0x575455)) {
          _0x2ff09b = _0x2ff09b.replace(new RegExp(_0x575455, "g"), _0x568b44[_0x575455](_0x42cf5e));
        }
      }
      _0x2ff09b = _0x2ff09b.replace(/\0\0/g, "%");
      var _0x366a20 = _0x8df336(_0x2ff09b, false);
      if (_0x366a20.length > _0x53db02) {
        return 0;
      }
      _0x1c07f7(_0x366a20, _0x1289fd);
      return _0x366a20.length - 1;
    }
    var _0x52cdbe = function (_0x1d8079, _0x9075e1, _0x266bd7, _0x5037cc) {
      if (!_0x1d8079) {
        _0x1d8079 = this;
      }
      this.parent = _0x1d8079;
      this.mount = _0x1d8079.mount;
      this.mounted = null;
      this.id = _0x32ab7c.nextInode++;
      this.name = _0x9075e1;
      this.mode = _0x266bd7;
      this.node_ops = {};
      this.stream_ops = {};
      this.rdev = _0x5037cc;
    };
    var _0x286615 = 365;
    var _0x29569e = 146;
    Object.defineProperties(_0x52cdbe.prototype, {
      read: {
        get: function () {
          return (this.mode & _0x286615) === _0x286615;
        },
        set: function (_0x13a4a1) {
          if (_0x13a4a1) {
            this.mode |= _0x286615;
          } else {
            this.mode &= ~_0x286615;
          }
        }
      },
      write: {
        get: function () {
          return (this.mode & _0x29569e) === _0x29569e;
        },
        set: function (_0x11b339) {
          if (_0x11b339) {
            this.mode |= _0x29569e;
          } else {
            this.mode &= ~_0x29569e;
          }
        }
      },
      isFolder: {
        get: function () {
          return _0x32ab7c.isDir(this.mode);
        }
      },
      isDevice: {
        get: function () {
          return _0x32ab7c.isChrdev(this.mode);
        }
      }
    });
    _0x32ab7c.FSNode = _0x52cdbe;
    _0x32ab7c.staticInit();
    _0xbb74bb.FS_createPath = _0x32ab7c.createPath;
    _0xbb74bb.FS_createDataFile = _0x32ab7c.createDataFile;
    _0xbb74bb.requestFullscreen = function _0xb24889(_0x192e84, _0x339149) {
      _0x4b67c5.requestFullscreen(_0x192e84, _0x339149);
    };
    _0xbb74bb.requestAnimationFrame = function _0x1fd11e(_0x3c9be1) {
      _0x4b67c5.requestAnimationFrame(_0x3c9be1);
    };
    _0xbb74bb.setCanvasSize = function _0x2ec61d(_0x331472, _0x4a3c06, _0x99e410) {
      _0x4b67c5.setCanvasSize(_0x331472, _0x4a3c06, _0x99e410);
    };
    _0xbb74bb.pauseMainLoop = function _0x3b67a5() {
      _0x4b67c5.mainLoop.pause();
    };
    _0xbb74bb.resumeMainLoop = function _0x107b7e() {
      _0x4b67c5.mainLoop.resume();
    };
    _0xbb74bb.getUserMedia = function _0x1c81ed() {
      _0x4b67c5.getUserMedia();
    };
    _0xbb74bb.createContext = function _0x2a2c00(_0x4b61f0, _0x1fe271, _0x3e9296, _0x444546) {
      return _0x4b67c5.createContext(_0x4b61f0, _0x1fe271, _0x3e9296, _0x444546);
    };
    var _0x4571ce;
    for (var _0x575b8e = 0; _0x575b8e < 32; ++_0x575b8e) {
      _0x5411cd.push(new Array(_0x575b8e));
    }
    var _0x3b22ec = new Float32Array(288);
    for (var _0x575b8e = 0; _0x575b8e < 288; ++_0x575b8e) {
      _0x502705[_0x575b8e] = _0x3b22ec.subarray(0, _0x575b8e + 1);
    }
    var _0x5a81aa = new Int32Array(288);
    for (var _0x575b8e = 0; _0x575b8e < 288; ++_0x575b8e) {
      _0x94d4c4[_0x575b8e] = _0x5a81aa.subarray(0, _0x575b8e + 1);
    }
    function _0x8df336(_0x59546, _0x1306f5, _0x2b0793) {
      var _0x3dcb32 = _0x2b0793 > 0 ? _0x2b0793 : _0x53c190(_0x59546) + 1;
      var _0x350468 = new Array(_0x3dcb32);
      var _0x1f1447 = _0x3ea15f(_0x59546, _0x350468, 0, _0x350468.length);
      if (_0x1306f5) {
        _0x350468.length = _0x1f1447;
      }
      return _0x350468;
    }
    var _0x2891ed = {
      kj: _0x26e98b,
      gj: _0x4ee660,
      jd: _0x26632e,
      td: _0x477c4e,
      kd: _0x4c93f9,
      Hj: _0x3861f0,
      Wi: _0x249170,
      Ka: _0x2b5945,
      qd: _0x327872,
      rd: _0x2f9aeb,
      Ja: _0x5e5b90,
      ij: _0x3fa4d4,
      hj: _0x55c09d,
      yj: _0x2ae0c4,
      _i: _0x2a0f21,
      jb: _0xce9802,
      na: _0x1d3621,
      ma: _0x4c26d4,
      Yc: _0x5467cd,
      _c: _0x290735,
      Zc: _0x476b7b,
      P: _0x226c5d,
      Ui: _0x568b36,
      Ti: _0x5a8127,
      xd: _0x5926d2,
      nj: _0x3ecc65,
      mj: _0x584e14,
      Xi: _0x2ecc7a,
      od: _0x1936fc,
      pd: _0xc7d13d,
      Yi: _0x3ac425,
      Gf: _0x30b62a,
      Cj: _0x42dbbe,
      dd: _0x2d9113,
      gd: _0x3771b3,
      fd: _0x533ab7,
      ed: _0x52d6cd,
      Tc: _0x21c551,
      Sc: _0xf1bbec,
      Rc: _0xd50ef,
      Qc: _0x2d1651,
      Vi: _0x3f85ce,
      Si: _0x4a231f,
      ej: _0x184732,
      vd: _0x44bdc1,
      Pi: _0xa448e4,
      Mf: _0x3a54b2,
      Nb: _0x21fcb9,
      Mb: _0x53458f,
      ub: _0x969cf3,
      Sf: _0x2add49,
      Sa: _0x2af868,
      Ra: _0x2f19a3,
      gf: _0x417bc8,
      lf: _0x2236f3,
      qf: _0x39c4dc,
      _e: _0x2b4145,
      ga: _0x142b29,
      Kf: _0x38afa6,
      Jb: _0x1004f0,
      Ib: _0x2785be,
      If: _0x5222fb,
      Jf: _0x524d13,
      Hb: _0x11b72f,
      Gb: _0x27b6b7,
      zi: _0x96f52f,
      Lf: _0x58c602,
      Lb: _0x28d6aa,
      Kb: _0xfd05c3,
      hf: _0x47a964,
      sf: _0xf1feb0,
      Bf: _0x3eb91a,
      qa: _0x78fdad,
      wb: _0x29800d,
      nf: _0x2d8407,
      Na: _0x784dbe,
      of: _0x55ce44,
      pf: _0x51c9f4,
      mf: _0x79f5fe,
      xb: _0x1e7d2d,
      Nf: _0x5a6344,
      Pb: _0x4e9149,
      Ob: _0x409bf8,
      Tb: _0x1f4971,
      bf: _0x3a0f9f,
      Hf: _0x27d8ea,
      Pf: _0x3c54d4,
      fa: _0x5f2ed6,
      sg: _0x54d9dd,
      W: _0x4aeed8,
      U: _0x33ad27,
      ia: _0x157344,
      og: _0x296cd6,
      mg: _0x41ea7b,
      fc: _0x118677,
      ng: _0xfd1deb,
      Va: _0x2e1bc7,
      Wa: _0x14e3a6,
      Ub: _0x44c05a,
      pg: _0xc4102a,
      kg: _0x1d8d48,
      lg: _0x4526ea,
      hc: _0x4de392,
      gc: _0x44849a,
      ya: _0x4e1a1,
      ic: _0x8b2b8,
      rg: _0x3c6c8b,
      qg: _0x46cdad,
      za: _0x312414,
      dc: _0x344a80,
      zb: _0x355b96,
      ra: _0x53c93b,
      ec: _0x42c8a3,
      tb: _0x369ee1,
      yb: _0x131fd1,
      Eb: _0x3387d8,
      Oa: _0x12003e,
      Ab: _0x3ac802,
      Cb: _0x21946d,
      uf: _0x4635cd,
      jc: _0x3a6e1c,
      Tf: _0x21952c,
      Bb: _0x1231f7,
      Ff: _0x2fe37f,
      xa: _0x1e6acf,
      ff: _0x105ba1,
      hg: _0x4bc0de,
      eg: _0x33ccb4,
      fg: _0x4a3a2c,
      gg: _0x1c2e0e,
      Ua: _0x507d3f,
      ag: _0x5648c7,
      cg: _0x186ac0,
      bg: _0x3f1953,
      dg: _0x599c9f,
      vj: _0x29f509,
      tj: _0x4fd1ae,
      rj: _0x3333dc,
      bj: _0xdccd68,
      dj: _0x1a2b7d,
      xj: _0x1dac3f,
      wd: _0x53b6a0,
      kb: _0x171549,
      pj: _0x432691,
      Dj: _0x65f333,
      Xc: _0x442827,
      Bj: _0x446688,
      Aj: _0x40004b,
      ib: _0x389d2f,
      Wc: _0x45646e,
      Vc: _0x46ab5a,
      fj: _0x3c17fb,
      ud: _0x5615fa,
      sd: _0x301354,
      nd: _0x495fd1,
      cd: _0x5c0a18,
      bd: _0x2f6f78,
      $c: _0x18fd32,
      ad: _0x22cb0b,
      lj: _0x40fbd4,
      Zi: _0x321f98,
      hd: _0x28dba1,
      id: _0x4c8b44,
      ld: _0x65776b,
      Uc: _0x4d6b3e,
      Ij: _0x303cf6,
      Gj: _0x474fbc,
      Ej: _0x13503d,
      Fj: _0x180d71,
      uj: _0xd22c77,
      sj: _0x3cceb3,
      qj: _0x406ff9,
      aj: _0x4b1e17,
      cj: _0x3fa9bd,
      wj: _0x3e315c,
      Ri: _0x553b99,
      oj: _0x754446,
      jj: _0x39b799,
      zj: _0xe7e2f4,
      $i: _0x21720b,
      nb: _0x5bf9a6,
      Fd: _0x4eddc7,
      Ad: _0x614b61,
      Dd: _0x4ddaa8,
      Gd: _0x937081,
      Bd: _0x29f70a,
      zd: _0x48d12a,
      Cd: _0x3b5e3e,
      Ed: _0x3d0b1a,
      o: _0x2712e7,
      i: _0x3022d5,
      n: _0x4e52b1,
      j: _0x58cd81,
      a: _0x152111,
      Id: _0x48ddca,
      La: _0x2054a0,
      Jd: _0x14ba6e,
      _: _0x3b34f7,
      l: _0x4d1cf0,
      rf: _0x2468e7,
      gh: _0x4dcedd,
      bi: _0x14b114,
      Xd: _0x596d17,
      Lh: _0x28520d,
      Md: _0x56909c,
      Yd: _0x5a4988,
      T: _0x15ff8c,
      Qi: _0x3ef157,
      Bi: _0x331f25,
      Td: _0x3f1819,
      Pd: _0x4f93c5,
      Nd: _0x3b5b50,
      uh: _0x570f4c,
      Uh: _0x19c6b3,
      vb: _0x45af41,
      ph: _0x54d0a6,
      Hi: _0x53bd7c,
      Sd: _0x4661a1,
      Ki: _0x55a4bc,
      md: _0xf87706,
      Zd: _0x294cdf,
      Eh: _0x2a8bf3,
      Ai: _0x2505a7,
      Xg: _0x264257,
      Kd: _0x502e3a,
      Vd: _0x483289,
      Rd: _0x17115f,
      Ld: _0xf23d90,
      ch: _0x47a429,
      pb: _0x70b29e,
      Oi: _0x572da0,
      jf: _0x32d8fc,
      Ci: _0x1fafd2,
      kf: _0x1533a0,
      Wd: _0x3d28de,
      Ud: _0x144b21,
      Mc: _0x498dad,
      ji: _0x4cc20b,
      ha: _0x185c8a,
      Fb: _0xe0caaf,
      tg: _0x22d8e0,
      Of: _0x54bcfa,
      Qf: _0x24b61c,
      Rf: _0x1dc046,
      Qd: _0x30f267,
      Zf: _0x364515,
      x: _0x7f2f68,
      Ta: _0x3ca8cf,
      cf: _0x47ec94,
      af: _0x189564,
      pa: _0x913497,
      Df: _0x415928,
      vf: _0x3d99b5,
      tf: _0x63026a,
      Cf: _0x9eb0c1,
      Qb: _0x18b2c6,
      Ke: _0x4b2b7d,
      K: _0x896648,
      yf: _0x24c5e3,
      Rb: _0x35a514,
      ef: _0x56c037,
      Wf: _0x2a8853,
      B: _0x104481,
      Lj: _0x511ff9,
      Ef: _0x26bca2,
      wf: _0x25070c,
      Mj: _0x2a9053,
      Sb: _0xf37b30,
      Db: _0x4a6a2f,
      Qa: _0x573396,
      zf: _0x2525f8,
      Af: _0x3b4f57,
      Wb: _0x2c144b,
      Vb: _0x296fc3,
      Ze: _0x7db7c2,
      ua: _0x9a579e,
      sa: _0x24fb67,
      ta: _0xd7b549,
      Ye: _0x2af038,
      $e: _0x27d3b3,
      bc: _0x4de4f9,
      ac: _0x41583b,
      cc: _0x2014fc,
      xf: _0x43ca5c,
      Xb: _0x5295f4,
      Zb: _0x4de263,
      Yb: _0x4d9c8e,
      _b: _0x132a8a,
      $b: _0x3919fb,
      Yf: _0x230da0,
      Xf: _0x53f285,
      va: _0x2c5ed2,
      Vf: _0x3b2cde,
      _f: _0x16c615,
      wa: _0x4f4f9a,
      Ve: _0x2d3ec3,
      df: _0x43ef70,
      C: _0x13d4ef,
      ja: _0x5270c5,
      rb: _0x2a4161,
      sb: _0x4bd0d0,
      Xe: _0xebd780,
      Pa: _0x2b866d,
      b: _0x34fca2,
      Od: _0x2e1ead,
      ig: _0x1d1f55,
      jg: _0x14cb3b,
      qb: _0x435baa,
      si: _0x4387c1,
      pi: _0x501930,
      qc: _0x522053,
      Ga: _0x38525a,
      oi: _0x152592,
      Hg: _0x2b4514,
      Eg: _0x113ffd,
      li: _0x108e98,
      mi: _0x15b58f,
      Ag: _0x505485,
      ni: _0x1af5d9,
      Zg: _0x377368,
      Jc: _0x1391c8,
      Kc: _0x5b518e,
      Lc: _0x2756a1,
      Pg: _0x2f264b,
      ii: _0x40805b,
      ki: _0x5bd510,
      hi: _0x3edffc,
      di: _0x741d64,
      wg: _0x2fd5e4,
      vg: _0x15710b,
      ug: _0x550475,
      ei: _0x367f09,
      fi: _0x8d6828,
      gi: _0x3f108f,
      _d: _0x275098,
      fb: _0x11e613,
      ci: _0x2304d8,
      $h: _0x29ae62,
      Ug: _0x415cb4,
      ai: _0x4ff472,
      Yg: _0x542c59,
      Jg: _0x1df050,
      _h: _0x31c7b2,
      Ic: _0x165940,
      Zh: _0xd71739,
      Yh: _0x4e50ef,
      Xh: _0x5b7c27,
      Wh: _0x39e647,
      Vh: _0x22c448,
      Th: _0x497747,
      pc: _0x487e75,
      Sh: _0x54154e,
      zg: _0x3e91d0,
      Rh: _0x3431de,
      lc: _0x560961,
      Qh: _0x1f80ce,
      $g: _0x53b8a1,
      Fa: _0x365f86,
      Ea: _0x193b5f,
      Ph: _0x474ece,
      Oh: _0x1441f5,
      Nh: _0xa010c4,
      Jh: _0x58e030,
      Lg: _0x11fd34,
      Ig: _0x19a2a9,
      Kh: _0x3a0781,
      Kg: _0x165d45,
      Mh: _0x5d1a66,
      Ih: _0x3c9762,
      rc: _0xf473b2,
      kc: _0x59e489,
      Gh: _0x271460,
      Hc: _0x25e664,
      Og: _0x50f0fb,
      S: _0x4bea26,
      R: _0x39e6b2,
      Aa: _0x342aa9,
      Da: _0x16800b,
      Fh: _0x17c0f9,
      Ah: _0x34e9d9,
      oc: _0x5213c0,
      Bh: _0x10f43e,
      yg: _0x1500fd,
      Dh: _0x590b57,
      ah: _0x294abe,
      Ch: _0x549ecf,
      yi: _0x8ea48f,
      eb: _0x2bed0b,
      Ya: _0x6dad5d,
      ca: _0x3500f9,
      ba: _0x236cf9,
      xi: _0x28c2c9,
      Uf: _0x34a3fd,
      zh: _0x5111ef,
      yh: _0x5d672d,
      ri: _0x13d15c,
      gb: _0x22c2ad,
      Cg: _0x5eb1a2,
      mc: _0x401058,
      ui: _0x30bb4f,
      Y: _0x2dfa70,
      sc: _0x45df30,
      bh: _0x5cbee1,
      Hh: _0x43b1be,
      wh: _0x3637ab,
      Gc: _0x486422,
      xh: _0x1c24bc,
      ti: _0x17660c,
      vh: _0x4ccb99,
      Rg: _0x139a9d,
      th: _0x357ba7,
      Dg: _0x3d3d00,
      Xa: _0x150d55,
      ka: _0xc14c17,
      Fc: _0x41e68f,
      wi: _0x3025f9,
      _a: _0x3c5259,
      qi: _0x2f24b2,
      _g: _0x434c01,
      sh: _0x40cd57,
      Mg: _0x26ffff,
      db: _0x4b45be,
      Ec: _0x20c0b2,
      nc: _0x3401da,
      xg: _0x2c4511,
      Gg: _0x726503,
      $: _0x44adbf,
      rh: _0x168e6e,
      Qg: _0x2338e0,
      Bg: _0x230c13,
      cb: _0x55369c,
      oh: _0x5c602e,
      qh: _0x78b79d,
      mh: _0x55d707,
      nh: _0x33c427,
      kh: _0x42688c,
      Vg: _0xfda1d1,
      lh: _0x1e66e3,
      bb: _0x6386c5,
      jh: _0x4dc2cc,
      Sg: _0x287a2b,
      Tg: _0x560050,
      ih: _0x194e0c,
      Wg: _0x481228,
      tc: _0x47f11d,
      Ba: _0x5c45e9,
      uc: _0x1c30d3,
      vc: _0x539620,
      wc: _0x1a119a,
      xc: _0x1dd1fa,
      yc: _0x19699c,
      ab: _0x55c016,
      zc: _0x2f7c1c,
      Ac: _0x102339,
      da: _0x249b18,
      Bc: _0x7f9fdf,
      Cc: _0x321d6c,
      Za: _0xe6fc60,
      Dc: _0x276670,
      Ca: _0x5dc196,
      Ng: _0x4b88c0,
      dh: _0xaab6b7,
      vi: _0x5e8b65,
      eh: _0x291023,
      fh: _0x4f40a8,
      Fg: _0x82d157,
      hh: _0x5327a7,
      $a: _0x3fb80a,
      Nc: _0x15ae41,
      G: _0x1b76bc,
      Pc: _0x3dfaa2,
      Q: _0x2f6848,
      M: _0x5b5b77,
      pe: _0x417313,
      aa: _0x2071a0,
      Ha: _0x3a53ab,
      D: _0x32dc40,
      Oc: _0x2dccda,
      H: _0x37c0e6,
      O: _0x75b4df,
      t: _0xfbe59,
      mb: _0x7f60a,
      ea: _0x49be20,
      c: _0xa544e,
      hb: _0x52d595,
      d: _0x544a7d,
      la: _0x1d7d65,
      Ji: _0x4bd6ec,
      Ia: _0x331f0c,
      J: _0x2d3c75,
      g: _0x3ada12,
      Fi: _0x518ec2,
      Ni: _0x1d6513,
      Kj: _0x109f7b,
      r: _0x43708f,
      s: _0x43bcb8,
      v: _0x353109,
      z: _0x34eedb,
      I: _0x41e830,
      L: _0x10b851,
      ob: _0x423fcf,
      He: _0x24edf6,
      ge: _0x2d17ff,
      Me: _0x59c2e3,
      me: _0x7600e0,
      re: _0x42ccbe,
      Ue: _0x5b46c2,
      We: _0x572963,
      ze: _0x2154e8,
      te: _0xb7bb86,
      Le: _0x2664ee,
      je: _0x20dfa1,
      ee: _0x9213c,
      ke: _0x141e3a,
      oe: _0x57e562,
      Ae: _0xa8aa,
      ve: _0xbef85e,
      Qe: _0x108a98,
      Ce: _0x14cfd0,
      Se: _0x2da40f,
      qe: _0x87fbe9,
      Re: _0x1674fe,
      Pe: _0x1d5981,
      Te: _0x2a7e19,
      $d: _0x5cd7d3,
      ce: _0x5a691a,
      ne: _0x1ec87f,
      Ee: _0x517fe9,
      ye: _0x10e9dc,
      xe: _0x4998ed,
      Fe: _0x2e4a8d,
      we: _0xeea16e,
      e: _0x1610f0,
      h: _0x1c45bc,
      $f: _0x21d1ef,
      y: _0x19fcdc,
      Li: _0x18e039,
      V: _0x577e3c,
      E: _0x198b4a,
      yd: _0x1bd45b,
      m: _0x27833a,
      Hd: _0xb72507,
      Jj: _0x391259,
      Z: _0x11f650,
      Ii: _0x58ef58,
      f: _0xe216ac,
      Mi: _0x3fa700,
      p: _0x403b8e,
      Gi: _0x1521be,
      q: _0x199601,
      u: _0x35e61b,
      Ei: _0x2fe395,
      Di: _0xddcf4e,
      N: _0x1fdc50,
      fe: _0x5acbc1,
      A: _0x478ae1,
      F: _0x3f9834,
      X: _0x426a15,
      oa: _0x42e0f2,
      lb: _0x583041,
      se: _0x2e5161,
      Ie: _0x41885b,
      Ne: _0xc8d69f,
      le: _0x24e945,
      ie: _0x28fb65,
      De: _0x42eb30,
      Oe: _0x3560bd,
      Je: _0x51aa16,
      Be: _0x347812,
      de: _0x336655,
      ue: _0x3f98af,
      he: _0x4caa89,
      Ge: _0x1f26cc,
      ae: _0x15ad02,
      be: _0x2f30e1,
      k: _0x349404,
      w: _0x2f542b,
      Ma: _0x521dce
    };
    var _0x3eabe6 = _0x1bd92a();
    var _0x140812 = _0xbb74bb.___wasm_call_ctors = function () {
      return (_0x140812 = _0xbb74bb.___wasm_call_ctors = _0xbb74bb.asm.Oj).apply(null, arguments);
    };
    var _0x101e5e = _0xbb74bb._GetFakemodTimeInSeconds = function () {
      return (_0x101e5e = _0xbb74bb._GetFakemodTimeInSeconds = _0xbb74bb.asm.Pj).apply(null, arguments);
    };
    var _0x19b584 = _0xbb74bb._ReleaseKeys = function () {
      return (_0x19b584 = _0xbb74bb._ReleaseKeys = _0xbb74bb.asm.Qj).apply(null, arguments);
    };
    var _0x6abb4f = _0xbb74bb._getMemInfo = function () {
      return (_0x6abb4f = _0xbb74bb._getMemInfo = _0xbb74bb.asm.Rj).apply(null, arguments);
    };
    var _0x580caa = _0xbb74bb._SendMessageFloat = function () {
      return (_0x580caa = _0xbb74bb._SendMessageFloat = _0xbb74bb.asm.Sj).apply(null, arguments);
    };
    var _0x40e52d = _0xbb74bb._SendMessageString = function () {
      return (_0x40e52d = _0xbb74bb._SendMessageString = _0xbb74bb.asm.Tj).apply(null, arguments);
    };
    var _0x1bf207 = _0xbb74bb._SendMessage = function () {
      return (_0x1bf207 = _0xbb74bb._SendMessage = _0xbb74bb.asm.Uj).apply(null, arguments);
    };
    var _0x4d6fa7 = _0xbb74bb._SetFullscreen = function () {
      return (_0x4d6fa7 = _0xbb74bb._SetFullscreen = _0xbb74bb.asm.Vj).apply(null, arguments);
    };
    var _0x1edd2f = _0xbb74bb._main = function () {
      return (_0x1edd2f = _0xbb74bb._main = _0xbb74bb.asm.Wj).apply(null, arguments);
    };
    var _0x3f616e = _0xbb74bb.___errno_location = function () {
      return (_0x3f616e = _0xbb74bb.___errno_location = _0xbb74bb.asm.Xj).apply(null, arguments);
    };
    var _0x9d0ef9 = _0xbb74bb._htonl = function () {
      return (_0x9d0ef9 = _0xbb74bb._htonl = _0xbb74bb.asm.Yj).apply(null, arguments);
    };
    var _0xbe50bd = _0xbb74bb._htons = function () {
      return (_0xbe50bd = _0xbb74bb._htons = _0xbb74bb.asm.Zj).apply(null, arguments);
    };
    var _0x476aca = _0xbb74bb._ntohs = function () {
      return (_0x476aca = _0xbb74bb._ntohs = _0xbb74bb.asm._j).apply(null, arguments);
    };
    var _0x1dd635 = _0xbb74bb._strlen = function () {
      return (_0x1dd635 = _0xbb74bb._strlen = _0xbb74bb.asm.$j).apply(null, arguments);
    };
    var _0x210cd3 = _0xbb74bb._malloc = function () {
      return (_0x210cd3 = _0xbb74bb._malloc = _0xbb74bb.asm.ak).apply(null, arguments);
    };
    var _0x1f42d0 = _0xbb74bb._free = function () {
      return (_0x1f42d0 = _0xbb74bb._free = _0xbb74bb.asm.bk).apply(null, arguments);
    };
    var _0x5aaaca = _0xbb74bb._emscripten_builtin_memalign = function () {
      return (_0x5aaaca = _0xbb74bb._emscripten_builtin_memalign = _0xbb74bb.asm.ck).apply(null, arguments);
    };
    var _0x55aa85 = _0xbb74bb._setThrew = function () {
      return (_0x55aa85 = _0xbb74bb._setThrew = _0xbb74bb.asm.dk).apply(null, arguments);
    };
    var _0x2683f0 = _0xbb74bb.stackSave = function () {
      return (_0x2683f0 = _0xbb74bb.stackSave = _0xbb74bb.asm.ek).apply(null, arguments);
    };
    var _0x9546d0 = _0xbb74bb.stackRestore = function () {
      return (_0x9546d0 = _0xbb74bb.stackRestore = _0xbb74bb.asm.fk).apply(null, arguments);
    };
    var _0x1a18c9 = _0xbb74bb.stackAlloc = function () {
      return (_0x1a18c9 = _0xbb74bb.stackAlloc = _0xbb74bb.asm.gk).apply(null, arguments);
    };
    var _0x121afd = _0xbb74bb.___cxa_can_catch = function () {
      return (_0x121afd = _0xbb74bb.___cxa_can_catch = _0xbb74bb.asm.hk).apply(null, arguments);
    };
    var _0x130314 = _0xbb74bb.___cxa_is_pointer_type = function () {
      return (_0x130314 = _0xbb74bb.___cxa_is_pointer_type = _0xbb74bb.asm.ik).apply(null, arguments);
    };
    var _0x162260 = _0xbb74bb.dynCall_iidiiii = function () {
      return (_0x162260 = _0xbb74bb.dynCall_iidiiii = _0xbb74bb.asm.kk).apply(null, arguments);
    };
    var _0x1a611a = _0xbb74bb.dynCall_vii = function () {
      return (_0x1a611a = _0xbb74bb.dynCall_vii = _0xbb74bb.asm.lk).apply(null, arguments);
    };
    var _0x2c3ceb = _0xbb74bb.dynCall_iiii = function () {
      return (_0x2c3ceb = _0xbb74bb.dynCall_iiii = _0xbb74bb.asm.mk).apply(null, arguments);
    };
    var _0x24ba3a = _0xbb74bb.dynCall_iii = function () {
      return (_0x24ba3a = _0xbb74bb.dynCall_iii = _0xbb74bb.asm.nk).apply(null, arguments);
    };
    var _0x4d1de7 = _0xbb74bb.dynCall_ii = function () {
      return (_0x4d1de7 = _0xbb74bb.dynCall_ii = _0xbb74bb.asm.ok).apply(null, arguments);
    };
    var _0x4cd9cf = _0xbb74bb.dynCall_jiji = function () {
      return (_0x4cd9cf = _0xbb74bb.dynCall_jiji = _0xbb74bb.asm.pk).apply(null, arguments);
    };
    var _0x2e598c = _0xbb74bb.dynCall_vi = function () {
      return (_0x2e598c = _0xbb74bb.dynCall_vi = _0xbb74bb.asm.qk).apply(null, arguments);
    };
    var _0x11bf6a = _0xbb74bb.dynCall_iiiii = function () {
      return (_0x11bf6a = _0xbb74bb.dynCall_iiiii = _0xbb74bb.asm.rk).apply(null, arguments);
    };
    var _0x1a2695 = _0xbb74bb.dynCall_viii = function () {
      return (_0x1a2695 = _0xbb74bb.dynCall_viii = _0xbb74bb.asm.sk).apply(null, arguments);
    };
    var _0x1873f9 = _0xbb74bb.dynCall_v = function () {
      return (_0x1873f9 = _0xbb74bb.dynCall_v = _0xbb74bb.asm.tk).apply(null, arguments);
    };
    var _0x3f5925 = _0xbb74bb.dynCall_viiiiii = function () {
      return (_0x3f5925 = _0xbb74bb.dynCall_viiiiii = _0xbb74bb.asm.uk).apply(null, arguments);
    };
    var _0x2759e0 = _0xbb74bb.dynCall_viiiii = function () {
      return (_0x2759e0 = _0xbb74bb.dynCall_viiiii = _0xbb74bb.asm.vk).apply(null, arguments);
    };
    var _0x51210f = _0xbb74bb.dynCall_viiii = function () {
      return (_0x51210f = _0xbb74bb.dynCall_viiii = _0xbb74bb.asm.wk).apply(null, arguments);
    };
    var _0x3a2b9a = _0xbb74bb.dynCall_iiiiii = function () {
      return (_0x3a2b9a = _0xbb74bb.dynCall_iiiiii = _0xbb74bb.asm.xk).apply(null, arguments);
    };
    var _0x12562c = _0xbb74bb.dynCall_i = function () {
      return (_0x12562c = _0xbb74bb.dynCall_i = _0xbb74bb.asm.yk).apply(null, arguments);
    };
    var _0x3e0283 = _0xbb74bb.dynCall_iiiiiiii = function () {
      return (_0x3e0283 = _0xbb74bb.dynCall_iiiiiiii = _0xbb74bb.asm.zk).apply(null, arguments);
    };
    var _0x1acc50 = _0xbb74bb.dynCall_iiijiii = function () {
      return (_0x1acc50 = _0xbb74bb.dynCall_iiijiii = _0xbb74bb.asm.Ak).apply(null, arguments);
    };
    var _0x8af743 = _0xbb74bb.dynCall_iij = function () {
      return (_0x8af743 = _0xbb74bb.dynCall_iij = _0xbb74bb.asm.Bk).apply(null, arguments);
    };
    var _0x31223c = _0xbb74bb.dynCall_iiiiiii = function () {
      return (_0x31223c = _0xbb74bb.dynCall_iiiiiii = _0xbb74bb.asm.Ck).apply(null, arguments);
    };
    var _0x28bf1d = _0xbb74bb.dynCall_jii = function () {
      return (_0x28bf1d = _0xbb74bb.dynCall_jii = _0xbb74bb.asm.Dk).apply(null, arguments);
    };
    var _0x28ebf3 = _0xbb74bb.dynCall_viiiiiiii = function () {
      return (_0x28ebf3 = _0xbb74bb.dynCall_viiiiiiii = _0xbb74bb.asm.Ek).apply(null, arguments);
    };
    var _0x147206 = _0xbb74bb.dynCall_jiiii = function () {
      return (_0x147206 = _0xbb74bb.dynCall_jiiii = _0xbb74bb.asm.Fk).apply(null, arguments);
    };
    var _0x4a837d = _0xbb74bb.dynCall_fiiii = function () {
      return (_0x4a837d = _0xbb74bb.dynCall_fiiii = _0xbb74bb.asm.Gk).apply(null, arguments);
    };
    var _0x2f955e = _0xbb74bb.dynCall_diiii = function () {
      return (_0x2f955e = _0xbb74bb.dynCall_diiii = _0xbb74bb.asm.Hk).apply(null, arguments);
    };
    var _0x17aabe = _0xbb74bb.dynCall_viji = function () {
      return (_0x17aabe = _0xbb74bb.dynCall_viji = _0xbb74bb.asm.Ik).apply(null, arguments);
    };
    var _0x298ba8 = _0xbb74bb.dynCall_viiji = function () {
      return (_0x298ba8 = _0xbb74bb.dynCall_viiji = _0xbb74bb.asm.Jk).apply(null, arguments);
    };
    var _0x56dcf5 = _0xbb74bb.dynCall_vidi = function () {
      return (_0x56dcf5 = _0xbb74bb.dynCall_vidi = _0xbb74bb.asm.Kk).apply(null, arguments);
    };
    var _0x3b33fb = _0xbb74bb.dynCall_viidi = function () {
      return (_0x3b33fb = _0xbb74bb.dynCall_viidi = _0xbb74bb.asm.Lk).apply(null, arguments);
    };
    var _0x7ce0b6 = _0xbb74bb.dynCall_iiiifii = function () {
      return (_0x7ce0b6 = _0xbb74bb.dynCall_iiiifii = _0xbb74bb.asm.Mk).apply(null, arguments);
    };
    var _0x5cd4b2 = _0xbb74bb.dynCall_iiiijii = function () {
      return (_0x5cd4b2 = _0xbb74bb.dynCall_iiiijii = _0xbb74bb.asm.Nk).apply(null, arguments);
    };
    var _0x27e68f = _0xbb74bb.dynCall_iijiii = function () {
      return (_0x27e68f = _0xbb74bb.dynCall_iijiii = _0xbb74bb.asm.Ok).apply(null, arguments);
    };
    var _0xdabe7f = _0xbb74bb.dynCall_vijii = function () {
      return (_0xdabe7f = _0xbb74bb.dynCall_vijii = _0xbb74bb.asm.Pk).apply(null, arguments);
    };
    var _0x147073 = _0xbb74bb.dynCall_iiifii = function () {
      return (_0x147073 = _0xbb74bb.dynCall_iiifii = _0xbb74bb.asm.Qk).apply(null, arguments);
    };
    var _0x454269 = _0xbb74bb.dynCall_viifi = function () {
      return (_0x454269 = _0xbb74bb.dynCall_viifi = _0xbb74bb.asm.Rk).apply(null, arguments);
    };
    var _0x272bad = _0xbb74bb.dynCall_j = function () {
      return (_0x272bad = _0xbb74bb.dynCall_j = _0xbb74bb.asm.Sk).apply(null, arguments);
    };
    var _0x21889c = _0xbb74bb.dynCall_ji = function () {
      return (_0x21889c = _0xbb74bb.dynCall_ji = _0xbb74bb.asm.Tk).apply(null, arguments);
    };
    var _0x53a980 = _0xbb74bb.dynCall_viiiiiiiii = function () {
      return (_0x53a980 = _0xbb74bb.dynCall_viiiiiiiii = _0xbb74bb.asm.Uk).apply(null, arguments);
    };
    var _0x332c7f = _0xbb74bb.dynCall_viiiiiiiiii = function () {
      return (_0x332c7f = _0xbb74bb.dynCall_viiiiiiiiii = _0xbb74bb.asm.Vk).apply(null, arguments);
    };
    var _0x5313a7 = _0xbb74bb.dynCall_iiiiiiiiiji = function () {
      return (_0x5313a7 = _0xbb74bb.dynCall_iiiiiiiiiji = _0xbb74bb.asm.Wk).apply(null, arguments);
    };
    var _0x4a31b5 = _0xbb74bb.dynCall_vji = function () {
      return (_0x4a31b5 = _0xbb74bb.dynCall_vji = _0xbb74bb.asm.Xk).apply(null, arguments);
    };
    var _0x174a22 = _0xbb74bb.dynCall_viiiifii = function () {
      return (_0x174a22 = _0xbb74bb.dynCall_viiiifii = _0xbb74bb.asm.Yk).apply(null, arguments);
    };
    var _0x264d2e = _0xbb74bb.dynCall_viiffi = function () {
      return (_0x264d2e = _0xbb74bb.dynCall_viiffi = _0xbb74bb.asm.Zk).apply(null, arguments);
    };
    var _0x93b008 = _0xbb74bb.dynCall_viiiiiii = function () {
      return (_0x93b008 = _0xbb74bb.dynCall_viiiiiii = _0xbb74bb.asm._k).apply(null, arguments);
    };
    var _0x1172ae = _0xbb74bb.dynCall_iiiiiiiiii = function () {
      return (_0x1172ae = _0xbb74bb.dynCall_iiiiiiiiii = _0xbb74bb.asm.$k).apply(null, arguments);
    };
    var _0x51582d = _0xbb74bb.dynCall_iiiiiiiii = function () {
      return (_0x51582d = _0xbb74bb.dynCall_iiiiiiiii = _0xbb74bb.asm.al).apply(null, arguments);
    };
    var _0x275d61 = _0xbb74bb.dynCall_jjii = function () {
      return (_0x275d61 = _0xbb74bb.dynCall_jjii = _0xbb74bb.asm.bl).apply(null, arguments);
    };
    var _0x20bfb2 = _0xbb74bb.dynCall_viijji = function () {
      return (_0x20bfb2 = _0xbb74bb.dynCall_viijji = _0xbb74bb.asm.cl).apply(null, arguments);
    };
    var _0x8811ae = _0xbb74bb.dynCall_jdi = function () {
      return (_0x8811ae = _0xbb74bb.dynCall_jdi = _0xbb74bb.asm.dl).apply(null, arguments);
    };
    var _0x5f3704 = _0xbb74bb.dynCall_vijiii = function () {
      return (_0x5f3704 = _0xbb74bb.dynCall_vijiii = _0xbb74bb.asm.el).apply(null, arguments);
    };
    var _0x1ad842 = _0xbb74bb.dynCall_ijiii = function () {
      return (_0x1ad842 = _0xbb74bb.dynCall_ijiii = _0xbb74bb.asm.fl).apply(null, arguments);
    };
    var _0x258216 = _0xbb74bb.dynCall_iiji = function () {
      return (_0x258216 = _0xbb74bb.dynCall_iiji = _0xbb74bb.asm.gl).apply(null, arguments);
    };
    var _0x5b9f5c = _0xbb74bb.dynCall_jji = function () {
      return (_0x5b9f5c = _0xbb74bb.dynCall_jji = _0xbb74bb.asm.hl).apply(null, arguments);
    };
    var _0x5b1776 = _0xbb74bb.dynCall_jjji = function () {
      return (_0x5b1776 = _0xbb74bb.dynCall_jjji = _0xbb74bb.asm.il).apply(null, arguments);
    };
    var _0xbd6990 = _0xbb74bb.dynCall_ijji = function () {
      return (_0xbd6990 = _0xbb74bb.dynCall_ijji = _0xbb74bb.asm.jl).apply(null, arguments);
    };
    var _0x50a25d = _0xbb74bb.dynCall_vifii = function () {
      return (_0x50a25d = _0xbb74bb.dynCall_vifii = _0xbb74bb.asm.kl).apply(null, arguments);
    };
    var _0x568fef = _0xbb74bb.dynCall_dii = function () {
      return (_0x568fef = _0xbb74bb.dynCall_dii = _0xbb74bb.asm.ll).apply(null, arguments);
    };
    var _0x49dbb9 = _0xbb74bb.dynCall_fii = function () {
      return (_0x49dbb9 = _0xbb74bb.dynCall_fii = _0xbb74bb.asm.ml).apply(null, arguments);
    };
    var _0x3e3dab = _0xbb74bb.dynCall_ifi = function () {
      return (_0x3e3dab = _0xbb74bb.dynCall_ifi = _0xbb74bb.asm.nl).apply(null, arguments);
    };
    var _0x2c342b = _0xbb74bb.dynCall_idi = function () {
      return (_0x2c342b = _0xbb74bb.dynCall_idi = _0xbb74bb.asm.ol).apply(null, arguments);
    };
    var _0x146f25 = _0xbb74bb.dynCall_jiii = function () {
      return (_0x146f25 = _0xbb74bb.dynCall_jiii = _0xbb74bb.asm.pl).apply(null, arguments);
    };
    var _0x376c08 = _0xbb74bb.dynCall_iiiiji = function () {
      return (_0x376c08 = _0xbb74bb.dynCall_iiiiji = _0xbb74bb.asm.ql).apply(null, arguments);
    };
    var _0x1afb4c = _0xbb74bb.dynCall_viiiiiiiiiiiii = function () {
      return (_0x1afb4c = _0xbb74bb.dynCall_viiiiiiiiiiiii = _0xbb74bb.asm.rl).apply(null, arguments);
    };
    var _0x223fa4 = _0xbb74bb.dynCall_diii = function () {
      return (_0x223fa4 = _0xbb74bb.dynCall_diii = _0xbb74bb.asm.sl).apply(null, arguments);
    };
    var _0x2c17f5 = _0xbb74bb.dynCall_vifi = function () {
      return (_0x2c17f5 = _0xbb74bb.dynCall_vifi = _0xbb74bb.asm.tl).apply(null, arguments);
    };
    var _0x52556b = _0xbb74bb.dynCall_fffi = function () {
      return (_0x52556b = _0xbb74bb.dynCall_fffi = _0xbb74bb.asm.ul).apply(null, arguments);
    };
    var _0x4b88f0 = _0xbb74bb.dynCall_fiii = function () {
      return (_0x4b88f0 = _0xbb74bb.dynCall_fiii = _0xbb74bb.asm.vl).apply(null, arguments);
    };
    var _0x9df5e8 = _0xbb74bb.dynCall_iidi = function () {
      return (_0x9df5e8 = _0xbb74bb.dynCall_iidi = _0xbb74bb.asm.wl).apply(null, arguments);
    };
    var _0x288468 = _0xbb74bb.dynCall_iifi = function () {
      return (_0x288468 = _0xbb74bb.dynCall_iifi = _0xbb74bb.asm.xl).apply(null, arguments);
    };
    var _0x30070a = _0xbb74bb.dynCall_dddi = function () {
      return (_0x30070a = _0xbb74bb.dynCall_dddi = _0xbb74bb.asm.yl).apply(null, arguments);
    };
    var _0x43e613 = _0xbb74bb.dynCall_iiijii = function () {
      return (_0x43e613 = _0xbb74bb.dynCall_iiijii = _0xbb74bb.asm.zl).apply(null, arguments);
    };
    var _0x350c2a = _0xbb74bb.dynCall_viiiijiii = function () {
      return (_0x350c2a = _0xbb74bb.dynCall_viiiijiii = _0xbb74bb.asm.Al).apply(null, arguments);
    };
    var _0xad4ece = _0xbb74bb.dynCall_iiiifi = function () {
      return (_0xad4ece = _0xbb74bb.dynCall_iiiifi = _0xbb74bb.asm.Bl).apply(null, arguments);
    };
    var _0x1587d0 = _0xbb74bb.dynCall_iiifi = function () {
      return (_0x1587d0 = _0xbb74bb.dynCall_iiifi = _0xbb74bb.asm.Cl).apply(null, arguments);
    };
    var _0x133dce = _0xbb74bb.dynCall_viiifi = function () {
      return (_0x133dce = _0xbb74bb.dynCall_viiifi = _0xbb74bb.asm.Dl).apply(null, arguments);
    };
    var _0x63d471 = _0xbb74bb.dynCall_fi = function () {
      return (_0x63d471 = _0xbb74bb.dynCall_fi = _0xbb74bb.asm.El).apply(null, arguments);
    };
    var _0x4c8a8b = _0xbb74bb.dynCall_vifffi = function () {
      return (_0x4c8a8b = _0xbb74bb.dynCall_vifffi = _0xbb74bb.asm.Fl).apply(null, arguments);
    };
    var _0x4c7861 = _0xbb74bb.dynCall_viifii = function () {
      return (_0x4c7861 = _0xbb74bb.dynCall_viifii = _0xbb74bb.asm.Gl).apply(null, arguments);
    };
    var _0x45c63e = _0xbb74bb.dynCall_viiiifi = function () {
      return (_0x45c63e = _0xbb74bb.dynCall_viiiifi = _0xbb74bb.asm.Hl).apply(null, arguments);
    };
    var _0x4621ed = _0xbb74bb.dynCall_fiiffi = function () {
      return (_0x4621ed = _0xbb74bb.dynCall_fiiffi = _0xbb74bb.asm.Il).apply(null, arguments);
    };
    var _0x5dc5dc = _0xbb74bb.dynCall_viiififii = function () {
      return (_0x5dc5dc = _0xbb74bb.dynCall_viiififii = _0xbb74bb.asm.Jl).apply(null, arguments);
    };
    var _0x1c9ca7 = _0xbb74bb.dynCall_viiiji = function () {
      return (_0x1c9ca7 = _0xbb74bb.dynCall_viiiji = _0xbb74bb.asm.Kl).apply(null, arguments);
    };
    var _0x1ce838 = _0xbb74bb.dynCall_iiiidii = function () {
      return (_0x1ce838 = _0xbb74bb.dynCall_iiiidii = _0xbb74bb.asm.Ll).apply(null, arguments);
    };
    var _0x48ba48 = _0xbb74bb.dynCall_jidi = function () {
      return (_0x48ba48 = _0xbb74bb.dynCall_jidi = _0xbb74bb.asm.Ml).apply(null, arguments);
    };
    var _0x57147b = _0xbb74bb.dynCall_iijii = function () {
      return (_0x57147b = _0xbb74bb.dynCall_iijii = _0xbb74bb.asm.Nl).apply(null, arguments);
    };
    var _0xc8e49e = _0xbb74bb.dynCall_dji = function () {
      return (_0xc8e49e = _0xbb74bb.dynCall_dji = _0xbb74bb.asm.Ol).apply(null, arguments);
    };
    var _0x580f55 = _0xbb74bb.dynCall_iji = function () {
      return (_0x580f55 = _0xbb74bb.dynCall_iji = _0xbb74bb.asm.Pl).apply(null, arguments);
    };
    var _0x1444d0 = _0xbb74bb.dynCall_jiiijii = function () {
      return (_0x1444d0 = _0xbb74bb.dynCall_jiiijii = _0xbb74bb.asm.Ql).apply(null, arguments);
    };
    var _0x1da2eb = _0xbb74bb.dynCall_viiijiii = function () {
      return (_0x1da2eb = _0xbb74bb.dynCall_viiijiii = _0xbb74bb.asm.Rl).apply(null, arguments);
    };
    var _0x548be = _0xbb74bb.dynCall_viiiiiiiiiiii = function () {
      return (_0x548be = _0xbb74bb.dynCall_viiiiiiiiiiii = _0xbb74bb.asm.Sl).apply(null, arguments);
    };
    var _0x45590f = _0xbb74bb.dynCall_viiiiiiiiiiiiii = function () {
      return (_0x45590f = _0xbb74bb.dynCall_viiiiiiiiiiiiii = _0xbb74bb.asm.Tl).apply(null, arguments);
    };
    var _0x2ee97c = _0xbb74bb.dynCall_viiiiiiiiiiiiiii = function () {
      return (_0x2ee97c = _0xbb74bb.dynCall_viiiiiiiiiiiiiii = _0xbb74bb.asm.Ul).apply(null, arguments);
    };
    var _0x116f2d = _0xbb74bb.dynCall_viiiiiiiiiiiiiiii = function () {
      return (_0x116f2d = _0xbb74bb.dynCall_viiiiiiiiiiiiiiii = _0xbb74bb.asm.Vl).apply(null, arguments);
    };
    var _0x28e2a8 = _0xbb74bb.dynCall_viiiiiiiiiiiiiiiii = function () {
      return (_0x28e2a8 = _0xbb74bb.dynCall_viiiiiiiiiiiiiiiii = _0xbb74bb.asm.Wl).apply(null, arguments);
    };
    var _0x26b924 = _0xbb74bb.dynCall_viiiiiiiiiiiiiiiiii = function () {
      return (_0x26b924 = _0xbb74bb.dynCall_viiiiiiiiiiiiiiiiii = _0xbb74bb.asm.Xl).apply(null, arguments);
    };
    var _0x274704 = _0xbb74bb.dynCall_viiiiiiiiiiiiiiiiiii = function () {
      return (_0x274704 = _0xbb74bb.dynCall_viiiiiiiiiiiiiiiiiii = _0xbb74bb.asm.Yl).apply(null, arguments);
    };
    var _0x119912 = _0xbb74bb.dynCall_didi = function () {
      return (_0x119912 = _0xbb74bb.dynCall_didi = _0xbb74bb.asm.Zl).apply(null, arguments);
    };
    var _0x2f1af3 = _0xbb74bb.dynCall_fifi = function () {
      return (_0x2f1af3 = _0xbb74bb.dynCall_fifi = _0xbb74bb.asm._l).apply(null, arguments);
    };
    var _0x37c967 = _0xbb74bb.dynCall_iiddi = function () {
      return (_0x37c967 = _0xbb74bb.dynCall_iiddi = _0xbb74bb.asm.$l).apply(null, arguments);
    };
    var _0x218b24 = _0xbb74bb.dynCall_diidi = function () {
      return (_0x218b24 = _0xbb74bb.dynCall_diidi = _0xbb74bb.asm.am).apply(null, arguments);
    };
    var _0xe359d5 = _0xbb74bb.dynCall_jiiji = function () {
      return (_0xe359d5 = _0xbb74bb.dynCall_jiiji = _0xbb74bb.asm.bm).apply(null, arguments);
    };
    var _0x40c453 = _0xbb74bb.dynCall_fiifi = function () {
      return (_0x40c453 = _0xbb74bb.dynCall_fiifi = _0xbb74bb.asm.cm).apply(null, arguments);
    };
    var _0x21334e = _0xbb74bb.dynCall_iiffi = function () {
      return (_0x21334e = _0xbb74bb.dynCall_iiffi = _0xbb74bb.asm.dm).apply(null, arguments);
    };
    var _0x483e2a = _0xbb74bb.dynCall_viiiiiiiiiii = function () {
      return (_0x483e2a = _0xbb74bb.dynCall_viiiiiiiiiii = _0xbb74bb.asm.em).apply(null, arguments);
    };
    var _0x91ab9a = _0xbb74bb.dynCall_iijji = function () {
      return (_0x91ab9a = _0xbb74bb.dynCall_iijji = _0xbb74bb.asm.fm).apply(null, arguments);
    };
    var _0x31ffb8 = _0xbb74bb.dynCall_viiidi = function () {
      return (_0x31ffb8 = _0xbb74bb.dynCall_viiidi = _0xbb74bb.asm.gm).apply(null, arguments);
    };
    var _0x192324 = _0xbb74bb.dynCall_vijijii = function () {
      return (_0x192324 = _0xbb74bb.dynCall_vijijii = _0xbb74bb.asm.hm).apply(null, arguments);
    };
    var _0x16ba9c = _0xbb74bb.dynCall_fiffffi = function () {
      return (_0x16ba9c = _0xbb74bb.dynCall_fiffffi = _0xbb74bb.asm.im).apply(null, arguments);
    };
    var _0x32bde2 = _0xbb74bb.dynCall_iijiiii = function () {
      return (_0x32bde2 = _0xbb74bb.dynCall_iijiiii = _0xbb74bb.asm.jm).apply(null, arguments);
    };
    var _0x53af42 = _0xbb74bb.dynCall_jijiii = function () {
      return (_0x53af42 = _0xbb74bb.dynCall_jijiii = _0xbb74bb.asm.km).apply(null, arguments);
    };
    var _0xb43db0 = _0xbb74bb.dynCall_viijii = function () {
      return (_0xb43db0 = _0xbb74bb.dynCall_viijii = _0xbb74bb.asm.lm).apply(null, arguments);
    };
    var _0x1f761a = _0xbb74bb.dynCall_iijiiiiii = function () {
      return (_0x1f761a = _0xbb74bb.dynCall_iijiiiiii = _0xbb74bb.asm.mm).apply(null, arguments);
    };
    var _0x15b3be = _0xbb74bb.dynCall_iijjiiiiii = function () {
      return (_0x15b3be = _0xbb74bb.dynCall_iijjiiiiii = _0xbb74bb.asm.nm).apply(null, arguments);
    };
    var _0x1ec24a = _0xbb74bb.dynCall_iiiijjii = function () {
      return (_0x1ec24a = _0xbb74bb.dynCall_iiiijjii = _0xbb74bb.asm.om).apply(null, arguments);
    };
    var _0x1c13b6 = _0xbb74bb.dynCall_viijiiijiiii = function () {
      return (_0x1c13b6 = _0xbb74bb.dynCall_viijiiijiiii = _0xbb74bb.asm.pm).apply(null, arguments);
    };
    var _0x276d2c = _0xbb74bb.dynCall_vijjji = function () {
      return (_0x276d2c = _0xbb74bb.dynCall_vijjji = _0xbb74bb.asm.qm).apply(null, arguments);
    };
    var _0x18c73c = _0xbb74bb.dynCall_iiiiij = function () {
      return (_0x18c73c = _0xbb74bb.dynCall_iiiiij = _0xbb74bb.asm.rm).apply(null, arguments);
    };
    var _0x1fd41d = _0xbb74bb.dynCall_ddiii = function () {
      return (_0x1fd41d = _0xbb74bb.dynCall_ddiii = _0xbb74bb.asm.sm).apply(null, arguments);
    };
    var _0x35fd30 = _0xbb74bb.dynCall_iifiii = function () {
      return (_0x35fd30 = _0xbb74bb.dynCall_iifiii = _0xbb74bb.asm.tm).apply(null, arguments);
    };
    var _0x1fa283 = _0xbb74bb.dynCall_vjjjiiii = function () {
      return (_0x1fa283 = _0xbb74bb.dynCall_vjjjiiii = _0xbb74bb.asm.um).apply(null, arguments);
    };
    var _0x57b878 = _0xbb74bb.dynCall_vjiiiii = function () {
      return (_0x57b878 = _0xbb74bb.dynCall_vjiiiii = _0xbb74bb.asm.vm).apply(null, arguments);
    };
    var _0x2627fe = _0xbb74bb.dynCall_jijii = function () {
      return (_0x2627fe = _0xbb74bb.dynCall_jijii = _0xbb74bb.asm.wm).apply(null, arguments);
    };
    var _0xfffd4c = _0xbb74bb.dynCall_jiiiii = function () {
      return (_0xfffd4c = _0xbb74bb.dynCall_jiiiii = _0xbb74bb.asm.xm).apply(null, arguments);
    };
    var _0x184f0a = _0xbb74bb.dynCall_vjiii = function () {
      return (_0x184f0a = _0xbb74bb.dynCall_vjiii = _0xbb74bb.asm.ym).apply(null, arguments);
    };
    var _0x38b4ec = _0xbb74bb.dynCall_iifii = function () {
      return (_0x38b4ec = _0xbb74bb.dynCall_iifii = _0xbb74bb.asm.zm).apply(null, arguments);
    };
    var _0x2a2431 = _0xbb74bb.dynCall_vfii = function () {
      return (_0x2a2431 = _0xbb74bb.dynCall_vfii = _0xbb74bb.asm.Am).apply(null, arguments);
    };
    var _0x11c4d7 = _0xbb74bb.dynCall_vifiii = function () {
      return (_0x11c4d7 = _0xbb74bb.dynCall_vifiii = _0xbb74bb.asm.Bm).apply(null, arguments);
    };
    var _0x46a75f = _0xbb74bb.dynCall_viffiii = function () {
      return (_0x46a75f = _0xbb74bb.dynCall_viffiii = _0xbb74bb.asm.Cm).apply(null, arguments);
    };
    var _0x189f95 = _0xbb74bb.dynCall_viiiiifi = function () {
      return (_0x189f95 = _0xbb74bb.dynCall_viiiiifi = _0xbb74bb.asm.Dm).apply(null, arguments);
    };
    var _0x3ac4de = _0xbb74bb.dynCall_viiifiii = function () {
      return (_0x3ac4de = _0xbb74bb.dynCall_viiifiii = _0xbb74bb.asm.Em).apply(null, arguments);
    };
    var _0x57a840 = _0xbb74bb.dynCall_vfiiiii = function () {
      return (_0x57a840 = _0xbb74bb.dynCall_vfiiiii = _0xbb74bb.asm.Fm).apply(null, arguments);
    };
    var _0x32f4b7 = _0xbb74bb.dynCall_vffffiiii = function () {
      return (_0x32f4b7 = _0xbb74bb.dynCall_vffffiiii = _0xbb74bb.asm.Gm).apply(null, arguments);
    };
    var _0x422611 = _0xbb74bb.dynCall_iiiffi = function () {
      return (_0x422611 = _0xbb74bb.dynCall_iiiffi = _0xbb74bb.asm.Hm).apply(null, arguments);
    };
    var _0x448d14 = _0xbb74bb.dynCall_iiffii = function () {
      return (_0x448d14 = _0xbb74bb.dynCall_iiffii = _0xbb74bb.asm.Im).apply(null, arguments);
    };
    var _0x6af936 = _0xbb74bb.dynCall_iiifiii = function () {
      return (_0x6af936 = _0xbb74bb.dynCall_iiifiii = _0xbb74bb.asm.Jm).apply(null, arguments);
    };
    var _0xb921fc = _0xbb74bb.dynCall_iiififii = function () {
      return (_0xb921fc = _0xbb74bb.dynCall_iiififii = _0xbb74bb.asm.Km).apply(null, arguments);
    };
    var _0xfb90a5 = _0xbb74bb.dynCall_iiifiiiii = function () {
      return (_0xfb90a5 = _0xbb74bb.dynCall_iiifiiiii = _0xbb74bb.asm.Lm).apply(null, arguments);
    };
    var _0x3c7361 = _0xbb74bb.dynCall_iiffifiiii = function () {
      return (_0x3c7361 = _0xbb74bb.dynCall_iiffifiiii = _0xbb74bb.asm.Mm).apply(null, arguments);
    };
    var _0x55bc0a = _0xbb74bb.dynCall_iifiifiiii = function () {
      return (_0x55bc0a = _0xbb74bb.dynCall_iifiifiiii = _0xbb74bb.asm.Nm).apply(null, arguments);
    };
    var _0x88c66c = _0xbb74bb.dynCall_iiiifiii = function () {
      return (_0x88c66c = _0xbb74bb.dynCall_iiiifiii = _0xbb74bb.asm.Om).apply(null, arguments);
    };
    var _0x1bf690 = _0xbb74bb.dynCall_iiifiiii = function () {
      return (_0x1bf690 = _0xbb74bb.dynCall_iiifiiii = _0xbb74bb.asm.Pm).apply(null, arguments);
    };
    var _0x374f3a = _0xbb74bb.dynCall_iiiffiii = function () {
      return (_0x374f3a = _0xbb74bb.dynCall_iiiffiii = _0xbb74bb.asm.Qm).apply(null, arguments);
    };
    var _0x372f8d = _0xbb74bb.dynCall_iiiiifii = function () {
      return (_0x372f8d = _0xbb74bb.dynCall_iiiiifii = _0xbb74bb.asm.Rm).apply(null, arguments);
    };
    var _0x3e8dcf = _0xbb74bb.dynCall_iifiifffii = function () {
      return (_0x3e8dcf = _0xbb74bb.dynCall_iifiifffii = _0xbb74bb.asm.Sm).apply(null, arguments);
    };
    var _0x28271a = _0xbb74bb.dynCall_fiffi = function () {
      return (_0x28271a = _0xbb74bb.dynCall_fiffi = _0xbb74bb.asm.Tm).apply(null, arguments);
    };
    var _0xba423d = _0xbb74bb.dynCall_viiifii = function () {
      return (_0xba423d = _0xbb74bb.dynCall_viiifii = _0xbb74bb.asm.Um).apply(null, arguments);
    };
    var _0x44aadb = _0xbb74bb.dynCall_viffii = function () {
      return (_0x44aadb = _0xbb74bb.dynCall_viffii = _0xbb74bb.asm.Vm).apply(null, arguments);
    };
    var _0x4a4d15 = _0xbb74bb.dynCall_viiiffi = function () {
      return (_0x4a4d15 = _0xbb74bb.dynCall_viiiffi = _0xbb74bb.asm.Wm).apply(null, arguments);
    };
    var _0x4cca11 = _0xbb74bb.dynCall_viifffi = function () {
      return (_0x4cca11 = _0xbb74bb.dynCall_viifffi = _0xbb74bb.asm.Xm).apply(null, arguments);
    };
    var _0x3204ab = _0xbb74bb.dynCall_viiiffii = function () {
      return (_0x3204ab = _0xbb74bb.dynCall_viiiffii = _0xbb74bb.asm.Ym).apply(null, arguments);
    };
    var _0x36b600 = _0xbb74bb.dynCall_viiifffiii = function () {
      return (_0x36b600 = _0xbb74bb.dynCall_viiifffiii = _0xbb74bb.asm.Zm).apply(null, arguments);
    };
    var _0x94e359 = _0xbb74bb.dynCall_viiififfi = function () {
      return (_0x94e359 = _0xbb74bb.dynCall_viiififfi = _0xbb74bb.asm._m).apply(null, arguments);
    };
    var _0x29606d = _0xbb74bb.dynCall_viiififfiffi = function () {
      return (_0x29606d = _0xbb74bb.dynCall_viiififfiffi = _0xbb74bb.asm.$m).apply(null, arguments);
    };
    var _0x51fc75 = _0xbb74bb.dynCall_viiiififi = function () {
      return (_0x51fc75 = _0xbb74bb.dynCall_viiiififi = _0xbb74bb.asm.an).apply(null, arguments);
    };
    var _0x169be8 = _0xbb74bb.dynCall_iifffi = function () {
      return (_0x169be8 = _0xbb74bb.dynCall_iifffi = _0xbb74bb.asm.bn).apply(null, arguments);
    };
    var _0x158bd0 = _0xbb74bb.dynCall_viffi = function () {
      return (_0x158bd0 = _0xbb74bb.dynCall_viffi = _0xbb74bb.asm.cn).apply(null, arguments);
    };
    var _0x126599 = _0xbb74bb.dynCall_iiffffi = function () {
      return (_0x126599 = _0xbb74bb.dynCall_iiffffi = _0xbb74bb.asm.dn).apply(null, arguments);
    };
    var _0x47e4b4 = _0xbb74bb.dynCall_fdfii = function () {
      return (_0x47e4b4 = _0xbb74bb.dynCall_fdfii = _0xbb74bb.asm.en).apply(null, arguments);
    };
    var _0x204b75 = _0xbb74bb.dynCall_fdii = function () {
      return (_0x204b75 = _0xbb74bb.dynCall_fdii = _0xbb74bb.asm.fn).apply(null, arguments);
    };
    var _0x39ccd1 = _0xbb74bb.dynCall_fdiii = function () {
      return (_0x39ccd1 = _0xbb74bb.dynCall_fdiii = _0xbb74bb.asm.gn).apply(null, arguments);
    };
    var _0x51e90c = _0xbb74bb.dynCall_fdi = function () {
      return (_0x51e90c = _0xbb74bb.dynCall_fdi = _0xbb74bb.asm.hn).apply(null, arguments);
    };
    var _0x399cec = _0xbb74bb.dynCall_fdddi = function () {
      return (_0x399cec = _0xbb74bb.dynCall_fdddi = _0xbb74bb.asm.jn).apply(null, arguments);
    };
    var _0x3748be = _0xbb74bb.dynCall_didddi = function () {
      return (_0x3748be = _0xbb74bb.dynCall_didddi = _0xbb74bb.asm.kn).apply(null, arguments);
    };
    var _0x1084b3 = _0xbb74bb.dynCall_vfi = function () {
      return (_0x1084b3 = _0xbb74bb.dynCall_vfi = _0xbb74bb.asm.ln).apply(null, arguments);
    };
    var _0x50ce21 = _0xbb74bb.dynCall_viiiijii = function () {
      return (_0x50ce21 = _0xbb74bb.dynCall_viiiijii = _0xbb74bb.asm.mn).apply(null, arguments);
    };
    var _0x346934 = _0xbb74bb.dynCall_vifiiii = function () {
      return (_0x346934 = _0xbb74bb.dynCall_vifiiii = _0xbb74bb.asm.nn).apply(null, arguments);
    };
    var _0x46b46e = _0xbb74bb.dynCall_di = function () {
      return (_0x46b46e = _0xbb74bb.dynCall_di = _0xbb74bb.asm.on).apply(null, arguments);
    };
    var _0x3b5c64 = _0xbb74bb.dynCall_vifffii = function () {
      return (_0x3b5c64 = _0xbb74bb.dynCall_vifffii = _0xbb74bb.asm.pn).apply(null, arguments);
    };
    var _0x264b38 = _0xbb74bb.dynCall_vifffiii = function () {
      return (_0x264b38 = _0xbb74bb.dynCall_vifffiii = _0xbb74bb.asm.qn).apply(null, arguments);
    };
    var _0x104673 = _0xbb74bb.dynCall_vifffiiii = function () {
      return (_0x104673 = _0xbb74bb.dynCall_vifffiiii = _0xbb74bb.asm.rn).apply(null, arguments);
    };
    var _0x53465b = _0xbb74bb.dynCall_viiffii = function () {
      return (_0x53465b = _0xbb74bb.dynCall_viiffii = _0xbb74bb.asm.sn).apply(null, arguments);
    };
    var _0x8281fa = _0xbb74bb.dynCall_viiiiffi = function () {
      return (_0x8281fa = _0xbb74bb.dynCall_viiiiffi = _0xbb74bb.asm.tn).apply(null, arguments);
    };
    var _0x12c61a = _0xbb74bb.dynCall_fiifii = function () {
      return (_0x12c61a = _0xbb74bb.dynCall_fiifii = _0xbb74bb.asm.un).apply(null, arguments);
    };
    var _0x466cdc = _0xbb74bb.dynCall_viiiiiifiifiiii = function () {
      return (_0x466cdc = _0xbb74bb.dynCall_viiiiiifiifiiii = _0xbb74bb.asm.vn).apply(null, arguments);
    };
    var _0x31aac5 = _0xbb74bb.dynCall_iiiififi = function () {
      return (_0x31aac5 = _0xbb74bb.dynCall_iiiififi = _0xbb74bb.asm.wn).apply(null, arguments);
    };
    var _0x14fde5 = _0xbb74bb.dynCall_iiiffifiiii = function () {
      return (_0x14fde5 = _0xbb74bb.dynCall_iiiffifiiii = _0xbb74bb.asm.xn).apply(null, arguments);
    };
    var _0x471c9e = _0xbb74bb.dynCall_iiifiifiii = function () {
      return (_0x471c9e = _0xbb74bb.dynCall_iiifiifiii = _0xbb74bb.asm.yn).apply(null, arguments);
    };
    var _0x2bb7ca = _0xbb74bb.dynCall_iiifiifiiiii = function () {
      return (_0x2bb7ca = _0xbb74bb.dynCall_iiifiifiiiii = _0xbb74bb.asm.zn).apply(null, arguments);
    };
    var _0x31267b = _0xbb74bb.dynCall_ffffii = function () {
      return (_0x31267b = _0xbb74bb.dynCall_ffffii = _0xbb74bb.asm.An).apply(null, arguments);
    };
    var _0xb72bd8 = _0xbb74bb.dynCall_iifiiiiii = function () {
      return (_0xb72bd8 = _0xbb74bb.dynCall_iifiiiiii = _0xbb74bb.asm.Bn).apply(null, arguments);
    };
    var _0x4cd6b6 = _0xbb74bb.dynCall_iifiiiii = function () {
      return (_0x4cd6b6 = _0xbb74bb.dynCall_iifiiiii = _0xbb74bb.asm.Cn).apply(null, arguments);
    };
    var _0x2f6272 = _0xbb74bb.dynCall_iiffiiiii = function () {
      return (_0x2f6272 = _0xbb74bb.dynCall_iiffiiiii = _0xbb74bb.asm.Dn).apply(null, arguments);
    };
    var _0x5bb4a2 = _0xbb74bb.dynCall_iiififi = function () {
      return (_0x5bb4a2 = _0xbb74bb.dynCall_iiififi = _0xbb74bb.asm.En).apply(null, arguments);
    };
    var _0x8dd569 = _0xbb74bb.dynCall_iifiifiii = function () {
      return (_0x8dd569 = _0xbb74bb.dynCall_iifiifiii = _0xbb74bb.asm.Fn).apply(null, arguments);
    };
    var _0x1aad73 = _0xbb74bb.dynCall_iiiiifiiii = function () {
      return (_0x1aad73 = _0xbb74bb.dynCall_iiiiifiiii = _0xbb74bb.asm.Gn).apply(null, arguments);
    };
    var _0x59fa02 = _0xbb74bb.dynCall_fiifdi = function () {
      return (_0x59fa02 = _0xbb74bb.dynCall_fiifdi = _0xbb74bb.asm.Hn).apply(null, arguments);
    };
    var _0x579975 = _0xbb74bb.dynCall_viiiiiifddfiiii = function () {
      return (_0x579975 = _0xbb74bb.dynCall_viiiiiifddfiiii = _0xbb74bb.asm.In).apply(null, arguments);
    };
    var _0x21f265 = _0xbb74bb.dynCall_fiifji = function () {
      return (_0x21f265 = _0xbb74bb.dynCall_fiifji = _0xbb74bb.asm.Jn).apply(null, arguments);
    };
    var _0x2cce38 = _0xbb74bb.dynCall_viiiiiifjjfiiii = function () {
      return (_0x2cce38 = _0xbb74bb.dynCall_viiiiiifjjfiiii = _0xbb74bb.asm.Kn).apply(null, arguments);
    };
    var _0x20104e = _0xbb74bb.dynCall_viiiifiii = function () {
      return (_0x20104e = _0xbb74bb.dynCall_viiiifiii = _0xbb74bb.asm.Ln).apply(null, arguments);
    };
    var _0x4d0057 = _0xbb74bb.dynCall_viiiiiiffffiiii = function () {
      return (_0x4d0057 = _0xbb74bb.dynCall_viiiiiiffffiiii = _0xbb74bb.asm.Mn).apply(null, arguments);
    };
    var _0x46aacd = _0xbb74bb.dynCall_viifiiii = function () {
      return (_0x46aacd = _0xbb74bb.dynCall_viifiiii = _0xbb74bb.asm.Nn).apply(null, arguments);
    };
    var _0x273261 = _0xbb74bb.dynCall_iiiiifiii = function () {
      return (_0x273261 = _0xbb74bb.dynCall_iiiiifiii = _0xbb74bb.asm.On).apply(null, arguments);
    };
    var _0x763626 = _0xbb74bb.dynCall_fffffi = function () {
      return (_0x763626 = _0xbb74bb.dynCall_fffffi = _0xbb74bb.asm.Pn).apply(null, arguments);
    };
    var _0x2dc61c = _0xbb74bb.dynCall_fiiffffi = function () {
      return (_0x2dc61c = _0xbb74bb.dynCall_fiiffffi = _0xbb74bb.asm.Qn).apply(null, arguments);
    };
    var _0x1277bd = _0xbb74bb.dynCall_fffifffi = function () {
      return (_0x1277bd = _0xbb74bb.dynCall_fffifffi = _0xbb74bb.asm.Rn).apply(null, arguments);
    };
    var _0x574fc6 = _0xbb74bb.dynCall_vfiii = function () {
      return (_0x574fc6 = _0xbb74bb.dynCall_vfiii = _0xbb74bb.asm.Sn).apply(null, arguments);
    };
    var _0x31e695 = _0xbb74bb.dynCall_iiiji = function () {
      return (_0x31e695 = _0xbb74bb.dynCall_iiiji = _0xbb74bb.asm.Tn).apply(null, arguments);
    };
    var _0x33c07f = _0xbb74bb.dynCall_ifiiii = function () {
      return (_0x33c07f = _0xbb74bb.dynCall_ifiiii = _0xbb74bb.asm.Un).apply(null, arguments);
    };
    var _0x3372a9 = _0xbb74bb.dynCall_idiiiii = function () {
      return (_0x3372a9 = _0xbb74bb.dynCall_idiiiii = _0xbb74bb.asm.Vn).apply(null, arguments);
    };
    var _0x36fa71 = _0xbb74bb.dynCall_idiiii = function () {
      return (_0x36fa71 = _0xbb74bb.dynCall_idiiii = _0xbb74bb.asm.Wn).apply(null, arguments);
    };
    var _0x55637a = _0xbb74bb.dynCall_idii = function () {
      return (_0x55637a = _0xbb74bb.dynCall_idii = _0xbb74bb.asm.Xn).apply(null, arguments);
    };
    var _0x5df587 = _0xbb74bb.dynCall_vijiiii = function () {
      return (_0x5df587 = _0xbb74bb.dynCall_vijiiii = _0xbb74bb.asm.Yn).apply(null, arguments);
    };
    var _0x495252 = _0xbb74bb.dynCall_iiijiiii = function () {
      return (_0x495252 = _0xbb74bb.dynCall_iiijiiii = _0xbb74bb.asm.Zn).apply(null, arguments);
    };
    var _0x4fa85c = _0xbb74bb.dynCall_vjiiii = function () {
      return (_0x4fa85c = _0xbb74bb.dynCall_vjiiii = _0xbb74bb.asm._n).apply(null, arguments);
    };
    var _0x142b85 = _0xbb74bb.dynCall_iddi = function () {
      return (_0x142b85 = _0xbb74bb.dynCall_iddi = _0xbb74bb.asm.$n).apply(null, arguments);
    };
    var _0x3ca409 = _0xbb74bb.dynCall_iiiiiiiiiiii = function () {
      return (_0x3ca409 = _0xbb74bb.dynCall_iiiiiiiiiiii = _0xbb74bb.asm.ao).apply(null, arguments);
    };
    var _0xdeb96 = _0xbb74bb.dynCall_iiiiiiiiiiiiii = function () {
      return (_0xdeb96 = _0xbb74bb.dynCall_iiiiiiiiiiiiii = _0xbb74bb.asm.bo).apply(null, arguments);
    };
    var _0x369f26 = _0xbb74bb.dynCall_viffffi = function () {
      return (_0x369f26 = _0xbb74bb.dynCall_viffffi = _0xbb74bb.asm.co).apply(null, arguments);
    };
    var _0x56c14c = _0xbb74bb.dynCall_viifiifi = function () {
      return (_0x56c14c = _0xbb74bb.dynCall_viifiifi = _0xbb74bb.asm.eo).apply(null, arguments);
    };
    var _0x37f0be = _0xbb74bb.dynCall_vifiifi = function () {
      return (_0x37f0be = _0xbb74bb.dynCall_vifiifi = _0xbb74bb.asm.fo).apply(null, arguments);
    };
    var _0x1ada9c = _0xbb74bb.dynCall_viifiii = function () {
      return (_0x1ada9c = _0xbb74bb.dynCall_viifiii = _0xbb74bb.asm.go).apply(null, arguments);
    };
    var _0x5ef497 = _0xbb74bb.dynCall_viddfffi = function () {
      return (_0x5ef497 = _0xbb74bb.dynCall_viddfffi = _0xbb74bb.asm.ho).apply(null, arguments);
    };
    var _0x475e90 = _0xbb74bb.dynCall_viidfffi = function () {
      return (_0x475e90 = _0xbb74bb.dynCall_viidfffi = _0xbb74bb.asm.io).apply(null, arguments);
    };
    var _0x4fc88a = _0xbb74bb.dynCall_vidifffi = function () {
      return (_0x4fc88a = _0xbb74bb.dynCall_vidifffi = _0xbb74bb.asm.jo).apply(null, arguments);
    };
    var _0x410790 = _0xbb74bb.dynCall_viiifffi = function () {
      return (_0x410790 = _0xbb74bb.dynCall_viiifffi = _0xbb74bb.asm.ko).apply(null, arguments);
    };
    var _0xcb8200 = _0xbb74bb.dynCall_viddi = function () {
      return (_0xcb8200 = _0xbb74bb.dynCall_viddi = _0xbb74bb.asm.lo).apply(null, arguments);
    };
    var _0x83a503 = _0xbb74bb.dynCall_vidii = function () {
      return (_0x83a503 = _0xbb74bb.dynCall_vidii = _0xbb74bb.asm.mo).apply(null, arguments);
    };
    var _0x18276c = _0xbb74bb.dynCall_viiiiiiifi = function () {
      return (_0x18276c = _0xbb74bb.dynCall_viiiiiiifi = _0xbb74bb.asm.no).apply(null, arguments);
    };
    var _0x26aee1 = _0xbb74bb.dynCall_viidii = function () {
      return (_0x26aee1 = _0xbb74bb.dynCall_viidii = _0xbb74bb.asm.oo).apply(null, arguments);
    };
    var _0x49c10c = _0xbb74bb.dynCall_iffi = function () {
      return (_0x49c10c = _0xbb74bb.dynCall_iffi = _0xbb74bb.asm.po).apply(null, arguments);
    };
    var _0x147ee3 = _0xbb74bb.dynCall_viiffffi = function () {
      return (_0x147ee3 = _0xbb74bb.dynCall_viiffffi = _0xbb74bb.asm.qo).apply(null, arguments);
    };
    var _0x4eb25a = _0xbb74bb.dynCall_ffffi = function () {
      return (_0x4eb25a = _0xbb74bb.dynCall_ffffi = _0xbb74bb.asm.ro).apply(null, arguments);
    };
    var _0xc8965d = _0xbb74bb.dynCall_ffi = function () {
      return (_0xc8965d = _0xbb74bb.dynCall_ffi = _0xbb74bb.asm.so).apply(null, arguments);
    };
    var _0x3ebdc9 = _0xbb74bb.dynCall_ffii = function () {
      return (_0x3ebdc9 = _0xbb74bb.dynCall_ffii = _0xbb74bb.asm.to).apply(null, arguments);
    };
    var _0x57f994 = _0xbb74bb.dynCall_fiiiii = function () {
      return (_0x57f994 = _0xbb74bb.dynCall_fiiiii = _0xbb74bb.asm.uo).apply(null, arguments);
    };
    var _0x23a821 = _0xbb74bb.dynCall_ddddi = function () {
      return (_0x23a821 = _0xbb74bb.dynCall_ddddi = _0xbb74bb.asm.vo).apply(null, arguments);
    };
    var _0x1dd918 = _0xbb74bb.dynCall_ddi = function () {
      return (_0x1dd918 = _0xbb74bb.dynCall_ddi = _0xbb74bb.asm.wo).apply(null, arguments);
    };
    var _0x1adf6e = _0xbb74bb.dynCall_iiiiiiiiiii = function () {
      return (_0x1adf6e = _0xbb74bb.dynCall_iiiiiiiiiii = _0xbb74bb.asm.xo).apply(null, arguments);
    };
    var _0x3a6aeb = _0xbb74bb.dynCall_iiiiiiiiiiiii = function () {
      return (_0x3a6aeb = _0xbb74bb.dynCall_iiiiiiiiiiiii = _0xbb74bb.asm.yo).apply(null, arguments);
    };
    var _0x58515e = _0xbb74bb.dynCall_iiiiiji = function () {
      return (_0x58515e = _0xbb74bb.dynCall_iiiiiji = _0xbb74bb.asm.zo).apply(null, arguments);
    };
    var _0x19de19 = _0xbb74bb.dynCall_viiijii = function () {
      return (_0x19de19 = _0xbb74bb.dynCall_viiijii = _0xbb74bb.asm.Ao).apply(null, arguments);
    };
    var _0x40e78f = _0xbb74bb.dynCall_viijiii = function () {
      return (_0x40e78f = _0xbb74bb.dynCall_viijiii = _0xbb74bb.asm.Bo).apply(null, arguments);
    };
    var _0x180a48 = _0xbb74bb.dynCall_ijii = function () {
      return (_0x180a48 = _0xbb74bb.dynCall_ijii = _0xbb74bb.asm.Co).apply(null, arguments);
    };
    var _0x9ec13a = _0xbb74bb.dynCall_ijjiiii = function () {
      return (_0x9ec13a = _0xbb74bb.dynCall_ijjiiii = _0xbb74bb.asm.Do).apply(null, arguments);
    };
    var _0x4bffff = _0xbb74bb.dynCall_vdiiiii = function () {
      return (_0x4bffff = _0xbb74bb.dynCall_vdiiiii = _0xbb74bb.asm.Eo).apply(null, arguments);
    };
    var _0x354ed1 = _0xbb74bb.dynCall_diiji = function () {
      return (_0x354ed1 = _0xbb74bb.dynCall_diiji = _0xbb74bb.asm.Fo).apply(null, arguments);
    };
    var _0x442ab3 = _0xbb74bb.dynCall_vjiiiiiiii = function () {
      return (_0x442ab3 = _0xbb74bb.dynCall_vjiiiiiiii = _0xbb74bb.asm.Go).apply(null, arguments);
    };
    var _0x2e7fae = _0xbb74bb.dynCall_vjiiiiiii = function () {
      return (_0x2e7fae = _0xbb74bb.dynCall_vjiiiiiii = _0xbb74bb.asm.Ho).apply(null, arguments);
    };
    var _0x468d3d = _0xbb74bb.dynCall_ijiiii = function () {
      return (_0x468d3d = _0xbb74bb.dynCall_ijiiii = _0xbb74bb.asm.Io).apply(null, arguments);
    };
    var _0x56eb71 = _0xbb74bb.dynCall_iidii = function () {
      return (_0x56eb71 = _0xbb74bb.dynCall_iidii = _0xbb74bb.asm.Jo).apply(null, arguments);
    };
    var _0xbc8258 = _0xbb74bb.dynCall_iidiii = function () {
      return (_0xbc8258 = _0xbb74bb.dynCall_iidiii = _0xbb74bb.asm.Ko).apply(null, arguments);
    };
    var _0x1edfd9 = _0xbb74bb.dynCall_diji = function () {
      return (_0x1edfd9 = _0xbb74bb.dynCall_diji = _0xbb74bb.asm.Lo).apply(null, arguments);
    };
    var _0x1905bf = _0xbb74bb.dynCall_fidi = function () {
      return (_0x1905bf = _0xbb74bb.dynCall_fidi = _0xbb74bb.asm.Mo).apply(null, arguments);
    };
    var _0x3175a7 = _0xbb74bb.dynCall_ijjiii = function () {
      return (_0x3175a7 = _0xbb74bb.dynCall_ijjiii = _0xbb74bb.asm.No).apply(null, arguments);
    };
    var _0x46d07f = _0xbb74bb.dynCall_iffffi = function () {
      return (_0x46d07f = _0xbb74bb.dynCall_iffffi = _0xbb74bb.asm.Oo).apply(null, arguments);
    };
    var _0x3b4ca2 = _0xbb74bb.dynCall_diiiii = function () {
      return (_0x3b4ca2 = _0xbb74bb.dynCall_diiiii = _0xbb74bb.asm.Po).apply(null, arguments);
    };
    var _0x1da8fd = _0xbb74bb.dynCall_vijji = function () {
      return (_0x1da8fd = _0xbb74bb.dynCall_vijji = _0xbb74bb.asm.Qo).apply(null, arguments);
    };
    var _0x4b027a = _0xbb74bb.dynCall_vfffi = function () {
      return (_0x4b027a = _0xbb74bb.dynCall_vfffi = _0xbb74bb.asm.Ro).apply(null, arguments);
    };
    var _0x227b99 = _0xbb74bb.dynCall_vffi = function () {
      return (_0x227b99 = _0xbb74bb.dynCall_vffi = _0xbb74bb.asm.So).apply(null, arguments);
    };
    var _0x17c582 = _0xbb74bb.dynCall_vffffi = function () {
      return (_0x17c582 = _0xbb74bb.dynCall_vffffi = _0xbb74bb.asm.To).apply(null, arguments);
    };
    var _0x197809 = _0xbb74bb.dynCall_vffffii = function () {
      return (_0x197809 = _0xbb74bb.dynCall_vffffii = _0xbb74bb.asm.Uo).apply(null, arguments);
    };
    var _0x3d44d8 = _0xbb74bb.dynCall_jjjji = function () {
      return (_0x3d44d8 = _0xbb74bb.dynCall_jjjji = _0xbb74bb.asm.Vo).apply(null, arguments);
    };
    var _0xfcdde8 = _0xbb74bb.dynCall_iiiifiiiiii = function () {
      return (_0xfcdde8 = _0xbb74bb.dynCall_iiiifiiiiii = _0xbb74bb.asm.Wo).apply(null, arguments);
    };
    var _0x10cce5 = _0xbb74bb.dynCall_iiiifiiiii = function () {
      return (_0x10cce5 = _0xbb74bb.dynCall_iiiifiiiii = _0xbb74bb.asm.Xo).apply(null, arguments);
    };
    var _0x13efa3 = _0xbb74bb.dynCall_iiiifiiii = function () {
      return (_0x13efa3 = _0xbb74bb.dynCall_iiiifiiii = _0xbb74bb.asm.Yo).apply(null, arguments);
    };
    var _0x3ef280 = _0xbb74bb.dynCall_vijjii = function () {
      return (_0x3ef280 = _0xbb74bb.dynCall_vijjii = _0xbb74bb.asm.Zo).apply(null, arguments);
    };
    var _0x1785c8 = _0xbb74bb.dynCall_viiiiiiiijijiii = function () {
      return (_0x1785c8 = _0xbb74bb.dynCall_viiiiiiiijijiii = _0xbb74bb.asm._o).apply(null, arguments);
    };
    var _0x5338a9 = _0xbb74bb.dynCall_viiiififfi = function () {
      return (_0x5338a9 = _0xbb74bb.dynCall_viiiififfi = _0xbb74bb.asm.$o).apply(null, arguments);
    };
    var _0x4f4a73 = _0xbb74bb.dynCall_viiiifiifi = function () {
      return (_0x4f4a73 = _0xbb74bb.dynCall_viiiifiifi = _0xbb74bb.asm.ap).apply(null, arguments);
    };
    var _0x40e617 = _0xbb74bb.dynCall_viiiifiiii = function () {
      return (_0x40e617 = _0xbb74bb.dynCall_viiiifiiii = _0xbb74bb.asm.bp).apply(null, arguments);
    };
    var _0x2f2182 = _0xbb74bb.dynCall_viiiifiiiii = function () {
      return (_0x2f2182 = _0xbb74bb.dynCall_viiiifiiiii = _0xbb74bb.asm.cp).apply(null, arguments);
    };
    var _0x21e7bb = _0xbb74bb.dynCall_viiiifiiiiiiii = function () {
      return (_0x21e7bb = _0xbb74bb.dynCall_viiiifiiiiiiii = _0xbb74bb.asm.dp).apply(null, arguments);
    };
    var _0x250a9f = _0xbb74bb.dynCall_iiiiffiiiiii = function () {
      return (_0x250a9f = _0xbb74bb.dynCall_iiiiffiiiiii = _0xbb74bb.asm.ep).apply(null, arguments);
    };
    var _0x380e52 = _0xbb74bb.dynCall_fifffi = function () {
      return (_0x380e52 = _0xbb74bb.dynCall_fifffi = _0xbb74bb.asm.fp).apply(null, arguments);
    };
    var _0x427256 = _0xbb74bb.dynCall_fifffiii = function () {
      return (_0x427256 = _0xbb74bb.dynCall_fifffiii = _0xbb74bb.asm.gp).apply(null, arguments);
    };
    var _0x4ae3f0 = _0xbb74bb.dynCall_fiffffiiiiii = function () {
      return (_0x4ae3f0 = _0xbb74bb.dynCall_fiffffiiiiii = _0xbb74bb.asm.hp).apply(null, arguments);
    };
    var _0x2085a4 = _0xbb74bb.dynCall_fiffffii = function () {
      return (_0x2085a4 = _0xbb74bb.dynCall_fiffffii = _0xbb74bb.asm.ip).apply(null, arguments);
    };
    var _0x1f2a07 = _0xbb74bb.dynCall_viiiiiffii = function () {
      return (_0x1f2a07 = _0xbb74bb.dynCall_viiiiiffii = _0xbb74bb.asm.jp).apply(null, arguments);
    };
    var _0x452952 = _0xbb74bb.dynCall_ffffiiii = function () {
      return (_0x452952 = _0xbb74bb.dynCall_ffffiiii = _0xbb74bb.asm.kp).apply(null, arguments);
    };
    var _0x172918 = _0xbb74bb.dynCall_viffffiii = function () {
      return (_0x172918 = _0xbb74bb.dynCall_viffffiii = _0xbb74bb.asm.lp).apply(null, arguments);
    };
    var _0x1377eb = _0xbb74bb.dynCall_viffffii = function () {
      return (_0x1377eb = _0xbb74bb.dynCall_viffffii = _0xbb74bb.asm.mp).apply(null, arguments);
    };
    var _0x1beb0f = _0xbb74bb.dynCall_viiffffiiiiii = function () {
      return (_0x1beb0f = _0xbb74bb.dynCall_viiffffiiiiii = _0xbb74bb.asm.np).apply(null, arguments);
    };
    var _0x4a1b4c = _0xbb74bb.dynCall_viiiififii = function () {
      return (_0x4a1b4c = _0xbb74bb.dynCall_viiiififii = _0xbb74bb.asm.op).apply(null, arguments);
    };
    var _0x265a36 = _0xbb74bb.dynCall_viiififiii = function () {
      return (_0x265a36 = _0xbb74bb.dynCall_viiififiii = _0xbb74bb.asm.pp).apply(null, arguments);
    };
    var _0x4f1431 = _0xbb74bb.dynCall_viiififi = function () {
      return (_0x4f1431 = _0xbb74bb.dynCall_viiififi = _0xbb74bb.asm.qp).apply(null, arguments);
    };
    var _0x54d866 = _0xbb74bb.dynCall_iiiiifi = function () {
      return (_0x54d866 = _0xbb74bb.dynCall_iiiiifi = _0xbb74bb.asm.rp).apply(null, arguments);
    };
    var _0x4947f3 = _0xbb74bb.dynCall_viiifififfi = function () {
      return (_0x4947f3 = _0xbb74bb.dynCall_viiifififfi = _0xbb74bb.asm.sp).apply(null, arguments);
    };
    var _0x113d33 = _0xbb74bb.dynCall_iiffiii = function () {
      return (_0x113d33 = _0xbb74bb.dynCall_iiffiii = _0xbb74bb.asm.tp).apply(null, arguments);
    };
    var _0x14623d = _0xbb74bb.dynCall_vififfii = function () {
      return (_0x14623d = _0xbb74bb.dynCall_vififfii = _0xbb74bb.asm.up).apply(null, arguments);
    };
    var _0x30322c = _0xbb74bb.dynCall_iiififiiii = function () {
      return (_0x30322c = _0xbb74bb.dynCall_iiififiiii = _0xbb74bb.asm.vp).apply(null, arguments);
    };
    var _0x557859 = _0xbb74bb.dynCall_vifffffi = function () {
      return (_0x557859 = _0xbb74bb.dynCall_vifffffi = _0xbb74bb.asm.wp).apply(null, arguments);
    };
    var _0x3ede7c = _0xbb74bb.dynCall_viffiiii = function () {
      return (_0x3ede7c = _0xbb74bb.dynCall_viffiiii = _0xbb74bb.asm.xp).apply(null, arguments);
    };
    var _0x3159b3 = _0xbb74bb.dynCall_viiiffffiiii = function () {
      return (_0x3159b3 = _0xbb74bb.dynCall_viiiffffiiii = _0xbb74bb.asm.yp).apply(null, arguments);
    };
    var _0x46c09a = _0xbb74bb.dynCall_viifffffffiiiii = function () {
      return (_0x46c09a = _0xbb74bb.dynCall_viifffffffiiiii = _0xbb74bb.asm.zp).apply(null, arguments);
    };
    var _0x1bb80c = _0xbb74bb.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
      return (_0x1bb80c = _0xbb74bb.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0xbb74bb.asm.Ap).apply(null, arguments);
    };
    var _0x5a0024 = _0xbb74bb.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
      return (_0x5a0024 = _0xbb74bb.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0xbb74bb.asm.Bp).apply(null, arguments);
    };
    var _0x1dc3a1 = _0xbb74bb.dynCall_vififiii = function () {
      return (_0x1dc3a1 = _0xbb74bb.dynCall_vififiii = _0xbb74bb.asm.Cp).apply(null, arguments);
    };
    var _0x16a967 = _0xbb74bb.dynCall_viififii = function () {
      return (_0x16a967 = _0xbb74bb.dynCall_viififii = _0xbb74bb.asm.Dp).apply(null, arguments);
    };
    var _0x1ba65a = _0xbb74bb.dynCall_jijji = function () {
      return (_0x1ba65a = _0xbb74bb.dynCall_jijji = _0xbb74bb.asm.Ep).apply(null, arguments);
    };
    var _0x6d31ae = _0xbb74bb.dynCall_ifffi = function () {
      return (_0x6d31ae = _0xbb74bb.dynCall_ifffi = _0xbb74bb.asm.Fp).apply(null, arguments);
    };
    var _0xed0fc0 = _0xbb74bb.dynCall_fiifiii = function () {
      return (_0xed0fc0 = _0xbb74bb.dynCall_fiifiii = _0xbb74bb.asm.Gp).apply(null, arguments);
    };
    var _0x1d0cbf = _0xbb74bb.dynCall_viffifi = function () {
      return (_0x1d0cbf = _0xbb74bb.dynCall_viffifi = _0xbb74bb.asm.Hp).apply(null, arguments);
    };
    var _0x9577d4 = _0xbb74bb.dynCall_fffffffi = function () {
      return (_0x9577d4 = _0xbb74bb.dynCall_fffffffi = _0xbb74bb.asm.Ip).apply(null, arguments);
    };
    var _0x57ccd2 = _0xbb74bb.dynCall_viiffifi = function () {
      return (_0x57ccd2 = _0xbb74bb.dynCall_viiffifi = _0xbb74bb.asm.Jp).apply(null, arguments);
    };
    var _0x12780b = _0xbb74bb.dynCall_viiiffiiiiiiiii = function () {
      return (_0x12780b = _0xbb74bb.dynCall_viiiffiiiiiiiii = _0xbb74bb.asm.Kp).apply(null, arguments);
    };
    var _0x20263f = _0xbb74bb.dynCall_viiiffiiiiii = function () {
      return (_0x20263f = _0xbb74bb.dynCall_viiiffiiiiii = _0xbb74bb.asm.Lp).apply(null, arguments);
    };
    var _0x5ba544 = _0xbb74bb.dynCall_viiffiiiiiiiiii = function () {
      return (_0x5ba544 = _0xbb74bb.dynCall_viiffiiiiiiiiii = _0xbb74bb.asm.Mp).apply(null, arguments);
    };
    var _0x215283 = _0xbb74bb.dynCall_viiffiiiiiii = function () {
      return (_0x215283 = _0xbb74bb.dynCall_viiffiiiiiii = _0xbb74bb.asm.Np).apply(null, arguments);
    };
    var _0x383fc4 = _0xbb74bb.dynCall_viffffffi = function () {
      return (_0x383fc4 = _0xbb74bb.dynCall_viffffffi = _0xbb74bb.asm.Op).apply(null, arguments);
    };
    var _0x31ed80 = _0xbb74bb.dynCall_iiiffiiii = function () {
      return (_0x31ed80 = _0xbb74bb.dynCall_iiiffiiii = _0xbb74bb.asm.Pp).apply(null, arguments);
    };
    var _0x8e6d9 = _0xbb74bb.dynCall_iiiiffiiii = function () {
      return (_0x8e6d9 = _0xbb74bb.dynCall_iiiiffiiii = _0xbb74bb.asm.Qp).apply(null, arguments);
    };
    var _0x160963 = _0xbb74bb.dynCall_fiiiffi = function () {
      return (_0x160963 = _0xbb74bb.dynCall_fiiiffi = _0xbb74bb.asm.Rp).apply(null, arguments);
    };
    var _0x1901ae = _0xbb74bb.dynCall_vjii = function () {
      return (_0x1901ae = _0xbb74bb.dynCall_vjii = _0xbb74bb.asm.Sp).apply(null, arguments);
    };
    var _0x4a1ae7 = _0xbb74bb.dynCall_viiiiiiiijiiii = function () {
      return (_0x4a1ae7 = _0xbb74bb.dynCall_viiiiiiiijiiii = _0xbb74bb.asm.Tp).apply(null, arguments);
    };
    var _0x506c9d = _0xbb74bb.dynCall_viiiiiifiiiiii = function () {
      return (_0x506c9d = _0xbb74bb.dynCall_viiiiiifiiiiii = _0xbb74bb.asm.Up).apply(null, arguments);
    };
    var _0x12d4c1 = _0xbb74bb.dynCall_vifiiiiii = function () {
      return (_0x12d4c1 = _0xbb74bb.dynCall_vifiiiiii = _0xbb74bb.asm.Vp).apply(null, arguments);
    };
    var _0x5e1530 = _0xbb74bb.dynCall_fifii = function () {
      return (_0x5e1530 = _0xbb74bb.dynCall_fifii = _0xbb74bb.asm.Wp).apply(null, arguments);
    };
    var _0x4a84b7 = _0xbb74bb.dynCall_viiiiiffi = function () {
      return (_0x4a84b7 = _0xbb74bb.dynCall_viiiiiffi = _0xbb74bb.asm.Xp).apply(null, arguments);
    };
    var _0x179473 = _0xbb74bb.dynCall_viiidii = function () {
      return (_0x179473 = _0xbb74bb.dynCall_viiidii = _0xbb74bb.asm.Yp).apply(null, arguments);
    };
    var _0xa68bcd = _0xbb74bb.dynCall_ijiiiiiiiii = function () {
      return (_0xa68bcd = _0xbb74bb.dynCall_ijiiiiiiiii = _0xbb74bb.asm.Zp).apply(null, arguments);
    };
    var _0x431827 = _0xbb74bb.dynCall_jjjii = function () {
      return (_0x431827 = _0xbb74bb.dynCall_jjjii = _0xbb74bb.asm._p).apply(null, arguments);
    };
    var _0xdec192 = _0xbb74bb.dynCall_iijjijii = function () {
      return (_0xdec192 = _0xbb74bb.dynCall_iijjijii = _0xbb74bb.asm.$p).apply(null, arguments);
    };
    var _0x4d5734 = _0xbb74bb.dynCall_jiijii = function () {
      return (_0x4d5734 = _0xbb74bb.dynCall_jiijii = _0xbb74bb.asm.aq).apply(null, arguments);
    };
    var _0x28053b = _0xbb74bb.dynCall_viffffffffffffffffi = function () {
      return (_0x28053b = _0xbb74bb.dynCall_viffffffffffffffffi = _0xbb74bb.asm.bq).apply(null, arguments);
    };
    var _0x99781 = _0xbb74bb.dynCall_viijiiiiii = function () {
      return (_0x99781 = _0xbb74bb.dynCall_viijiiiiii = _0xbb74bb.asm.cq).apply(null, arguments);
    };
    var _0x4d6d56 = _0xbb74bb.dynCall_jiidi = function () {
      return (_0x4d6d56 = _0xbb74bb.dynCall_jiidi = _0xbb74bb.asm.dq).apply(null, arguments);
    };
    var _0x49e240 = _0xbb74bb.dynCall_viiiidijii = function () {
      return (_0x49e240 = _0xbb74bb.dynCall_viiiidijii = _0xbb74bb.asm.eq).apply(null, arguments);
    };
    var _0xd93c02 = _0xbb74bb.dynCall_viiiidii = function () {
      return (_0xd93c02 = _0xbb74bb.dynCall_viiiidii = _0xbb74bb.asm.fq).apply(null, arguments);
    };
    var _0x1420f9 = _0xbb74bb.dynCall_iiidiii = function () {
      return (_0x1420f9 = _0xbb74bb.dynCall_iiidiii = _0xbb74bb.asm.gq).apply(null, arguments);
    };
    var _0x2d29ef = _0xbb74bb.dynCall_iiidii = function () {
      return (_0x2d29ef = _0xbb74bb.dynCall_iiidii = _0xbb74bb.asm.hq).apply(null, arguments);
    };
    var _0x23d8d8 = _0xbb74bb.dynCall_vidiii = function () {
      return (_0x23d8d8 = _0xbb74bb.dynCall_vidiii = _0xbb74bb.asm.iq).apply(null, arguments);
    };
    var _0x53586b = _0xbb74bb.dynCall_viijiiiii = function () {
      return (_0x53586b = _0xbb74bb.dynCall_viijiiiii = _0xbb74bb.asm.jq).apply(null, arguments);
    };
    var _0x2515cd = _0xbb74bb.dynCall_viifffffi = function () {
      return (_0x2515cd = _0xbb74bb.dynCall_viifffffi = _0xbb74bb.asm.kq).apply(null, arguments);
    };
    var _0x2d56ac = _0xbb74bb.dynCall_viiffffffi = function () {
      return (_0x2d56ac = _0xbb74bb.dynCall_viiffffffi = _0xbb74bb.asm.lq).apply(null, arguments);
    };
    var _0x1a9ec8 = _0xbb74bb.dynCall_viifffffffi = function () {
      return (_0x1a9ec8 = _0xbb74bb.dynCall_viifffffffi = _0xbb74bb.asm.mq).apply(null, arguments);
    };
    var _0x493a6 = _0xbb74bb.dynCall_viiffffffffi = function () {
      return (_0x493a6 = _0xbb74bb.dynCall_viiffffffffi = _0xbb74bb.asm.nq).apply(null, arguments);
    };
    var _0x28b8b3 = _0xbb74bb.dynCall_viiffffffffiii = function () {
      return (_0x28b8b3 = _0xbb74bb.dynCall_viiffffffffiii = _0xbb74bb.asm.oq).apply(null, arguments);
    };
    var _0x14f6ba = _0xbb74bb.dynCall_viiiiffffii = function () {
      return (_0x14f6ba = _0xbb74bb.dynCall_viiiiffffii = _0xbb74bb.asm.pq).apply(null, arguments);
    };
    var _0x4b3094 = _0xbb74bb.dynCall_fiiiiii = function () {
      return (_0x4b3094 = _0xbb74bb.dynCall_fiiiiii = _0xbb74bb.asm.qq).apply(null, arguments);
    };
    var _0x5c440b = _0xbb74bb.dynCall_viiijji = function () {
      return (_0x5c440b = _0xbb74bb.dynCall_viiijji = _0xbb74bb.asm.rq).apply(null, arguments);
    };
    var _0x3612fc = _0xbb74bb.dynCall_vijiiiiiii = function () {
      return (_0x3612fc = _0xbb74bb.dynCall_vijiiiiiii = _0xbb74bb.asm.sq).apply(null, arguments);
    };
    var _0x4c1165 = _0xbb74bb.dynCall_vijiiiiiiii = function () {
      return (_0x4c1165 = _0xbb74bb.dynCall_vijiiiiiiii = _0xbb74bb.asm.tq).apply(null, arguments);
    };
    var _0x599992 = _0xbb74bb.dynCall_jjiiii = function () {
      return (_0x599992 = _0xbb74bb.dynCall_jjiiii = _0xbb74bb.asm.uq).apply(null, arguments);
    };
    var _0x13cbe0 = _0xbb74bb.dynCall_jjiiiii = function () {
      return (_0x13cbe0 = _0xbb74bb.dynCall_jjiiiii = _0xbb74bb.asm.vq).apply(null, arguments);
    };
    var _0x5da888 = _0xbb74bb.dynCall_jijjji = function () {
      return (_0x5da888 = _0xbb74bb.dynCall_jijjji = _0xbb74bb.asm.wq).apply(null, arguments);
    };
    var _0x50d98e = _0xbb74bb.dynCall_jijjjii = function () {
      return (_0x50d98e = _0xbb74bb.dynCall_jijjjii = _0xbb74bb.asm.xq).apply(null, arguments);
    };
    var _0x5db99a = _0xbb74bb.dynCall_jjiii = function () {
      return (_0x5db99a = _0xbb74bb.dynCall_jjiii = _0xbb74bb.asm.yq).apply(null, arguments);
    };
    var _0x147235 = _0xbb74bb.dynCall_ijijiiiii = function () {
      return (_0x147235 = _0xbb74bb.dynCall_ijijiiiii = _0xbb74bb.asm.zq).apply(null, arguments);
    };
    var _0x395851 = _0xbb74bb.dynCall_ijjjiii = function () {
      return (_0x395851 = _0xbb74bb.dynCall_ijjjiii = _0xbb74bb.asm.Aq).apply(null, arguments);
    };
    var _0x78396f = _0xbb74bb.dynCall_vijjjiijii = function () {
      return (_0x78396f = _0xbb74bb.dynCall_vijjjiijii = _0xbb74bb.asm.Bq).apply(null, arguments);
    };
    var _0x31c9c4 = _0xbb74bb.dynCall_ijjjiijii = function () {
      return (_0x31c9c4 = _0xbb74bb.dynCall_ijjjiijii = _0xbb74bb.asm.Cq).apply(null, arguments);
    };
    var _0x16ef9c = _0xbb74bb.dynCall_vijiiiiii = function () {
      return (_0x16ef9c = _0xbb74bb.dynCall_vijiiiiii = _0xbb74bb.asm.Dq).apply(null, arguments);
    };
    var _0xe394bb = _0xbb74bb.dynCall_jfi = function () {
      return (_0xe394bb = _0xbb74bb.dynCall_jfi = _0xbb74bb.asm.Eq).apply(null, arguments);
    };
    var _0x50b51b = _0xbb74bb.dynCall_fji = function () {
      return (_0x50b51b = _0xbb74bb.dynCall_fji = _0xbb74bb.asm.Fq).apply(null, arguments);
    };
    var _0x50fd59 = _0xbb74bb.dynCall_dfi = function () {
      return (_0x50fd59 = _0xbb74bb.dynCall_dfi = _0xbb74bb.asm.Gq).apply(null, arguments);
    };
    var _0x37ac26 = _0xbb74bb.dynCall_jidii = function () {
      return (_0x37ac26 = _0xbb74bb.dynCall_jidii = _0xbb74bb.asm.Hq).apply(null, arguments);
    };
    var _0x3aaeb3 = _0xbb74bb.dynCall_viiiiiiiji = function () {
      return (_0x3aaeb3 = _0xbb74bb.dynCall_viiiiiiiji = _0xbb74bb.asm.Iq).apply(null, arguments);
    };
    var _0x3fc58f = _0xbb74bb.dynCall_viiiiiiiiji = function () {
      return (_0x3fc58f = _0xbb74bb.dynCall_viiiiiiiiji = _0xbb74bb.asm.Jq).apply(null, arguments);
    };
    var _0x241d7f = _0xbb74bb.dynCall_viiiiiiiiiji = function () {
      return (_0x241d7f = _0xbb74bb.dynCall_viiiiiiiiiji = _0xbb74bb.asm.Kq).apply(null, arguments);
    };
    var _0x25c638 = _0xbb74bb.dynCall_ijiijii = function () {
      return (_0x25c638 = _0xbb74bb.dynCall_ijiijii = _0xbb74bb.asm.Lq).apply(null, arguments);
    };
    var _0x332de5 = _0xbb74bb.dynCall_vjjiiiii = function () {
      return (_0x332de5 = _0xbb74bb.dynCall_vjjiiiii = _0xbb74bb.asm.Mq).apply(null, arguments);
    };
    var _0x51aa8a = _0xbb74bb.dynCall_vjjii = function () {
      return (_0x51aa8a = _0xbb74bb.dynCall_vjjii = _0xbb74bb.asm.Nq).apply(null, arguments);
    };
    var _0x13dfff = _0xbb74bb.dynCall_ijiiji = function () {
      return (_0x13dfff = _0xbb74bb.dynCall_ijiiji = _0xbb74bb.asm.Oq).apply(null, arguments);
    };
    var _0xd52b9e = _0xbb74bb.dynCall_ijiiiii = function () {
      return (_0xd52b9e = _0xbb74bb.dynCall_ijiiiii = _0xbb74bb.asm.Pq).apply(null, arguments);
    };
    var _0x2702ab = _0xbb74bb.dynCall_ijiiiiji = function () {
      return (_0x2702ab = _0xbb74bb.dynCall_ijiiiiji = _0xbb74bb.asm.Qq).apply(null, arguments);
    };
    var _0xc90f26 = _0xbb74bb.dynCall_jiiiiii = function () {
      return (_0xc90f26 = _0xbb74bb.dynCall_jiiiiii = _0xbb74bb.asm.Rq).apply(null, arguments);
    };
    var _0x53f032 = _0xbb74bb.dynCall_ddii = function () {
      return (_0x53f032 = _0xbb74bb.dynCall_ddii = _0xbb74bb.asm.Sq).apply(null, arguments);
    };
    var _0x2016a3 = _0xbb74bb.dynCall_idiii = function () {
      return (_0x2016a3 = _0xbb74bb.dynCall_idiii = _0xbb74bb.asm.Tq).apply(null, arguments);
    };
    var _0x38cece = _0xbb74bb.dynCall_ifiii = function () {
      return (_0x38cece = _0xbb74bb.dynCall_ifiii = _0xbb74bb.asm.Uq).apply(null, arguments);
    };
    var _0x3244b7 = _0xbb74bb.dynCall_ifiiiii = function () {
      return (_0x3244b7 = _0xbb74bb.dynCall_ifiiiii = _0xbb74bb.asm.Vq).apply(null, arguments);
    };
    var _0x56ab33 = _0xbb74bb.dynCall_vdiii = function () {
      return (_0x56ab33 = _0xbb74bb.dynCall_vdiii = _0xbb74bb.asm.Wq).apply(null, arguments);
    };
    var _0x357b5e = _0xbb74bb.dynCall_jdii = function () {
      return (_0x357b5e = _0xbb74bb.dynCall_jdii = _0xbb74bb.asm.Xq).apply(null, arguments);
    };
    var _0x28c850 = _0xbb74bb.dynCall_vijijji = function () {
      return (_0x28c850 = _0xbb74bb.dynCall_vijijji = _0xbb74bb.asm.Yq).apply(null, arguments);
    };
    var _0x58145e = _0xbb74bb.dynCall_iijjji = function () {
      return (_0x58145e = _0xbb74bb.dynCall_iijjji = _0xbb74bb.asm.Zq).apply(null, arguments);
    };
    var _0x534c42 = _0xbb74bb.dynCall_viijjji = function () {
      return (_0x534c42 = _0xbb74bb.dynCall_viijjji = _0xbb74bb.asm._q).apply(null, arguments);
    };
    var _0x233d5d = _0xbb74bb.dynCall_vdii = function () {
      return (_0x233d5d = _0xbb74bb.dynCall_vdii = _0xbb74bb.asm.$q).apply(null, arguments);
    };
    var _0x4aeed6 = _0xbb74bb.dynCall_diddi = function () {
      return (_0x4aeed6 = _0xbb74bb.dynCall_diddi = _0xbb74bb.asm.ar).apply(null, arguments);
    };
    var _0x4c6f5f = _0xbb74bb.dynCall_iijjii = function () {
      return (_0x4c6f5f = _0xbb74bb.dynCall_iijjii = _0xbb74bb.asm.br).apply(null, arguments);
    };
    var _0x2bd6cb = _0xbb74bb.dynCall_viijijii = function () {
      return (_0x2bd6cb = _0xbb74bb.dynCall_viijijii = _0xbb74bb.asm.cr).apply(null, arguments);
    };
    var _0x2c8909 = _0xbb74bb.dynCall_viijijiii = function () {
      return (_0x2c8909 = _0xbb74bb.dynCall_viijijiii = _0xbb74bb.asm.dr).apply(null, arguments);
    };
    var _0x2233fd = _0xbb74bb.dynCall_vijiji = function () {
      return (_0x2233fd = _0xbb74bb.dynCall_vijiji = _0xbb74bb.asm.er).apply(null, arguments);
    };
    var _0x22c542 = _0xbb74bb.dynCall_viijiijiii = function () {
      return (_0x22c542 = _0xbb74bb.dynCall_viijiijiii = _0xbb74bb.asm.fr).apply(null, arguments);
    };
    var _0x2b5edd = _0xbb74bb.dynCall_viiiijiiii = function () {
      return (_0x2b5edd = _0xbb74bb.dynCall_viiiijiiii = _0xbb74bb.asm.gr).apply(null, arguments);
    };
    var _0xec2b19 = _0xbb74bb.dynCall_viijjii = function () {
      return (_0xec2b19 = _0xbb74bb.dynCall_viijjii = _0xbb74bb.asm.hr).apply(null, arguments);
    };
    var _0xb51ad = _0xbb74bb.dynCall_jiiiiiiiii = function () {
      return (_0xb51ad = _0xbb74bb.dynCall_jiiiiiiiii = _0xbb74bb.asm.ir).apply(null, arguments);
    };
    var _0x503be2 = _0xbb74bb.dynCall_jiiiiiiiiii = function () {
      return (_0x503be2 = _0xbb74bb.dynCall_jiiiiiiiiii = _0xbb74bb.asm.jr).apply(null, arguments);
    };
    var _0x641016 = _0xbb74bb.dynCall_iiiiijii = function () {
      return (_0x641016 = _0xbb74bb.dynCall_iiiiijii = _0xbb74bb.asm.kr).apply(null, arguments);
    };
    var _0x1df1b6 = _0xbb74bb.dynCall_iiiiidii = function () {
      return (_0x1df1b6 = _0xbb74bb.dynCall_iiiiidii = _0xbb74bb.asm.lr).apply(null, arguments);
    };
    var _0x3b57bf = _0xbb74bb.dynCall_viifffiii = function () {
      return (_0x3b57bf = _0xbb74bb.dynCall_viifffiii = _0xbb74bb.asm.mr).apply(null, arguments);
    };
    var _0x5d8a05 = _0xbb74bb.dynCall_iiiiffiiiji = function () {
      return (_0x5d8a05 = _0xbb74bb.dynCall_iiiiffiiiji = _0xbb74bb.asm.nr).apply(null, arguments);
    };
    var _0xafd9e = _0xbb74bb.dynCall_iiiffii = function () {
      return (_0xafd9e = _0xbb74bb.dynCall_iiiffii = _0xbb74bb.asm.or).apply(null, arguments);
    };
    var _0x556902 = _0xbb74bb.dynCall_jiiiiiii = function () {
      return (_0x556902 = _0xbb74bb.dynCall_jiiiiiii = _0xbb74bb.asm.pr).apply(null, arguments);
    };
    var _0x4217d3 = _0xbb74bb.dynCall_iiiiffiiiii = function () {
      return (_0x4217d3 = _0xbb74bb.dynCall_iiiiffiiiii = _0xbb74bb.asm.qr).apply(null, arguments);
    };
    var _0x15a561 = _0xbb74bb.dynCall_iidfii = function () {
      return (_0x15a561 = _0xbb74bb.dynCall_iidfii = _0xbb74bb.asm.rr).apply(null, arguments);
    };
    var _0x3f5c5b = _0xbb74bb.dynCall_iijfii = function () {
      return (_0x3f5c5b = _0xbb74bb.dynCall_iijfii = _0xbb74bb.asm.sr).apply(null, arguments);
    };
    var _0x50c6d8 = _0xbb74bb.dynCall_iiiiffii = function () {
      return (_0x50c6d8 = _0xbb74bb.dynCall_iiiiffii = _0xbb74bb.asm.tr).apply(null, arguments);
    };
    var _0x5a9e0b = _0xbb74bb.dynCall_diiiidi = function () {
      return (_0x5a9e0b = _0xbb74bb.dynCall_diiiidi = _0xbb74bb.asm.ur).apply(null, arguments);
    };
    var _0x3dc852 = _0xbb74bb.dynCall_jiiiiji = function () {
      return (_0x3dc852 = _0xbb74bb.dynCall_jiiiiji = _0xbb74bb.asm.vr).apply(null, arguments);
    };
    var _0x11fd00 = _0xbb74bb.dynCall_fiiiifi = function () {
      return (_0x11fd00 = _0xbb74bb.dynCall_fiiiifi = _0xbb74bb.asm.wr).apply(null, arguments);
    };
    var _0x169958 = _0xbb74bb.dynCall_iiiiiiiiiiiiiii = function () {
      return (_0x169958 = _0xbb74bb.dynCall_iiiiiiiiiiiiiii = _0xbb74bb.asm.xr).apply(null, arguments);
    };
    var _0x102553 = _0xbb74bb.dynCall_iiiiiiiiiiiiiiii = function () {
      return (_0x102553 = _0xbb74bb.dynCall_iiiiiiiiiiiiiiii = _0xbb74bb.asm.yr).apply(null, arguments);
    };
    var _0x111747 = _0xbb74bb.dynCall_iiiiiiiiiiiiiiiii = function () {
      return (_0x111747 = _0xbb74bb.dynCall_iiiiiiiiiiiiiiiii = _0xbb74bb.asm.zr).apply(null, arguments);
    };
    var _0x3957fc = _0xbb74bb.dynCall_iiiiiiiiiiiiiiiiii = function () {
      return (_0x3957fc = _0xbb74bb.dynCall_iiiiiiiiiiiiiiiiii = _0xbb74bb.asm.Ar).apply(null, arguments);
    };
    var _0x25924f = _0xbb74bb.dynCall_iiiiiiiiiiiiiiiiiii = function () {
      return (_0x25924f = _0xbb74bb.dynCall_iiiiiiiiiiiiiiiiiii = _0xbb74bb.asm.Br).apply(null, arguments);
    };
    var _0x58af09 = _0xbb74bb.dynCall_vidiiiii = function () {
      return (_0x58af09 = _0xbb74bb.dynCall_vidiiiii = _0xbb74bb.asm.Cr).apply(null, arguments);
    };
    var _0x3194fe = _0xbb74bb.dynCall_viidiiii = function () {
      return (_0x3194fe = _0xbb74bb.dynCall_viidiiii = _0xbb74bb.asm.Dr).apply(null, arguments);
    };
    var _0x59ab61 = _0xbb74bb.dynCall_iiidi = function () {
      return (_0x59ab61 = _0xbb74bb.dynCall_iiidi = _0xbb74bb.asm.Er).apply(null, arguments);
    };
    var _0x427b0e = _0xbb74bb.dynCall_iiijjii = function () {
      return (_0x427b0e = _0xbb74bb.dynCall_iiijjii = _0xbb74bb.asm.Fr).apply(null, arguments);
    };
    var _0xa799ba = _0xbb74bb.dynCall_ijiiiiii = function () {
      return (_0xa799ba = _0xbb74bb.dynCall_ijiiiiii = _0xbb74bb.asm.Gr).apply(null, arguments);
    };
    var _0x42e2d8 = _0xbb74bb.dynCall_ijjiiiiii = function () {
      return (_0x42e2d8 = _0xbb74bb.dynCall_ijjiiiiii = _0xbb74bb.asm.Hr).apply(null, arguments);
    };
    var _0x1a4d88 = _0xbb74bb.dynCall_vdi = function () {
      return (_0x1a4d88 = _0xbb74bb.dynCall_vdi = _0xbb74bb.asm.Ir).apply(null, arguments);
    };
    var _0x1c0086 = _0xbb74bb.dynCall_vjijii = function () {
      return (_0x1c0086 = _0xbb74bb.dynCall_vjijii = _0xbb74bb.asm.Jr).apply(null, arguments);
    };
    var _0x512ab8 = _0xbb74bb.dynCall_fff = function () {
      return (_0x512ab8 = _0xbb74bb.dynCall_fff = _0xbb74bb.asm.Kr).apply(null, arguments);
    };
    var _0x52f546 = _0xbb74bb.dynCall_ijj = function () {
      return (_0x52f546 = _0xbb74bb.dynCall_ijj = _0xbb74bb.asm.Lr).apply(null, arguments);
    };
    var _0x160be7 = _0xbb74bb.dynCall_vjji = function () {
      return (_0x160be7 = _0xbb74bb.dynCall_vjji = _0xbb74bb.asm.Mr).apply(null, arguments);
    };
    var _0x175a62 = _0xbb74bb.dynCall_vif = function () {
      return (_0x175a62 = _0xbb74bb.dynCall_vif = _0xbb74bb.asm.Nr).apply(null, arguments);
    };
    var _0x5ad423 = _0xbb74bb.dynCall_viif = function () {
      return (_0x5ad423 = _0xbb74bb.dynCall_viif = _0xbb74bb.asm.Or).apply(null, arguments);
    };
    var _0x3ea0c8 = _0xbb74bb.dynCall_vid = function () {
      return (_0x3ea0c8 = _0xbb74bb.dynCall_vid = _0xbb74bb.asm.Pr).apply(null, arguments);
    };
    var _0x17e246 = _0xbb74bb.dynCall_viiiiif = function () {
      return (_0x17e246 = _0xbb74bb.dynCall_viiiiif = _0xbb74bb.asm.Qr).apply(null, arguments);
    };
    var _0xb0ff04 = _0xbb74bb.dynCall_viiiif = function () {
      return (_0xb0ff04 = _0xbb74bb.dynCall_viiiif = _0xbb74bb.asm.Rr).apply(null, arguments);
    };
    var _0x454651 = _0xbb74bb.dynCall_viiiiiif = function () {
      return (_0x454651 = _0xbb74bb.dynCall_viiiiiif = _0xbb74bb.asm.Sr).apply(null, arguments);
    };
    var _0x444c88 = _0xbb74bb.dynCall_iiiijiii = function () {
      return (_0x444c88 = _0xbb74bb.dynCall_iiiijiii = _0xbb74bb.asm.Tr).apply(null, arguments);
    };
    var _0x4fcb64 = _0xbb74bb.dynCall_iiiij = function () {
      return (_0x4fcb64 = _0xbb74bb.dynCall_iiiij = _0xbb74bb.asm.Ur).apply(null, arguments);
    };
    var _0x43bf89 = _0xbb74bb.dynCall_iiif = function () {
      return (_0x43bf89 = _0xbb74bb.dynCall_iiif = _0xbb74bb.asm.Vr).apply(null, arguments);
    };
    var _0x3acbf1 = _0xbb74bb.dynCall_fif = function () {
      return (_0x3acbf1 = _0xbb74bb.dynCall_fif = _0xbb74bb.asm.Wr).apply(null, arguments);
    };
    var _0x578753 = _0xbb74bb.dynCall_iiiiiifff = function () {
      return (_0x578753 = _0xbb74bb.dynCall_iiiiiifff = _0xbb74bb.asm.Xr).apply(null, arguments);
    };
    var _0x35a699 = _0xbb74bb.dynCall_iiiiiifiif = function () {
      return (_0x35a699 = _0xbb74bb.dynCall_iiiiiifiif = _0xbb74bb.asm.Yr).apply(null, arguments);
    };
    var _0x2e5b19 = _0xbb74bb.dynCall_iiiiiifiii = function () {
      return (_0x2e5b19 = _0xbb74bb.dynCall_iiiiiifiii = _0xbb74bb.asm.Zr).apply(null, arguments);
    };
    var _0x71e84a = _0xbb74bb.dynCall_iiiiiiifiif = function () {
      return (_0x71e84a = _0xbb74bb.dynCall_iiiiiiifiif = _0xbb74bb.asm._r).apply(null, arguments);
    };
    var _0x3591e4 = _0xbb74bb.dynCall_fiff = function () {
      return (_0x3591e4 = _0xbb74bb.dynCall_fiff = _0xbb74bb.asm.$r).apply(null, arguments);
    };
    var _0x4f47c7 = _0xbb74bb.dynCall_fiiiiiifiifif = function () {
      return (_0x4f47c7 = _0xbb74bb.dynCall_fiiiiiifiifif = _0xbb74bb.asm.as).apply(null, arguments);
    };
    var _0x99b07d = _0xbb74bb.dynCall_fiiiiiifiiiif = function () {
      return (_0x99b07d = _0xbb74bb.dynCall_fiiiiiifiiiif = _0xbb74bb.asm.bs).apply(null, arguments);
    };
    var _0x7d6fc2 = _0xbb74bb.dynCall_iifiiiijii = function () {
      return (_0x7d6fc2 = _0xbb74bb.dynCall_iifiiiijii = _0xbb74bb.asm.cs).apply(null, arguments);
    };
    var _0x5df657 = _0xbb74bb.dynCall_vifif = function () {
      return (_0x5df657 = _0xbb74bb.dynCall_vifif = _0xbb74bb.asm.ds).apply(null, arguments);
    };
    var _0x43dd4c = _0xbb74bb.dynCall_vifijii = function () {
      return (_0x43dd4c = _0xbb74bb.dynCall_vifijii = _0xbb74bb.asm.es).apply(null, arguments);
    };
    var _0x4b37ab = _0xbb74bb.dynCall_iiiifffiii = function () {
      return (_0x4b37ab = _0xbb74bb.dynCall_iiiifffiii = _0xbb74bb.asm.fs).apply(null, arguments);
    };
    var _0x6691e4 = _0xbb74bb.dynCall_iiiifffffi = function () {
      return (_0x6691e4 = _0xbb74bb.dynCall_iiiifffffi = _0xbb74bb.asm.gs).apply(null, arguments);
    };
    var _0x2fcc78 = _0xbb74bb.dynCall_viffiiiif = function () {
      return (_0x2fcc78 = _0xbb74bb.dynCall_viffiiiif = _0xbb74bb.asm.hs).apply(null, arguments);
    };
    var _0x6ccfc2 = _0xbb74bb.dynCall_viffiifffffiii = function () {
      return (_0x6ccfc2 = _0xbb74bb.dynCall_viffiifffffiii = _0xbb74bb.asm.is).apply(null, arguments);
    };
    var _0x257b95 = _0xbb74bb.dynCall_viffffiifffiiiiif = function () {
      return (_0x257b95 = _0xbb74bb.dynCall_viffffiifffiiiiif = _0xbb74bb.asm.js).apply(null, arguments);
    };
    var _0x1bf6a0 = _0xbb74bb.dynCall_iiiifffffii = function () {
      return (_0x1bf6a0 = _0xbb74bb.dynCall_iiiifffffii = _0xbb74bb.asm.ks).apply(null, arguments);
    };
    var _0xa30c6c = _0xbb74bb.dynCall_viiiiiiiiiiifii = function () {
      return (_0xa30c6c = _0xbb74bb.dynCall_viiiiiiiiiiifii = _0xbb74bb.asm.ls).apply(null, arguments);
    };
    var _0x3dc450 = _0xbb74bb.dynCall_viff = function () {
      return (_0x3dc450 = _0xbb74bb.dynCall_viff = _0xbb74bb.asm.ms).apply(null, arguments);
    };
    var _0x2669e6 = _0xbb74bb.dynCall_iiiiifiiiiif = function () {
      return (_0x2669e6 = _0xbb74bb.dynCall_iiiiifiiiiif = _0xbb74bb.asm.ns).apply(null, arguments);
    };
    var _0x261611 = _0xbb74bb.dynCall_viiff = function () {
      return (_0x261611 = _0xbb74bb.dynCall_viiff = _0xbb74bb.asm.os).apply(null, arguments);
    };
    var _0x505736 = _0xbb74bb.dynCall_viiifiiiii = function () {
      return (_0x505736 = _0xbb74bb.dynCall_viiifiiiii = _0xbb74bb.asm.ps).apply(null, arguments);
    };
    var _0x346728 = _0xbb74bb.dynCall_viiiifiiiiif = function () {
      return (_0x346728 = _0xbb74bb.dynCall_viiiifiiiiif = _0xbb74bb.asm.qs).apply(null, arguments);
    };
    var _0x289f77 = _0xbb74bb.dynCall_iifff = function () {
      return (_0x289f77 = _0xbb74bb.dynCall_iifff = _0xbb74bb.asm.rs).apply(null, arguments);
    };
    var _0x449f83 = _0xbb74bb.dynCall_iif = function () {
      return (_0x449f83 = _0xbb74bb.dynCall_iif = _0xbb74bb.asm.ss).apply(null, arguments);
    };
    var _0x330715 = _0xbb74bb.dynCall_viij = function () {
      return (_0x330715 = _0xbb74bb.dynCall_viij = _0xbb74bb.asm.ts).apply(null, arguments);
    };
    var _0x3fe47b = _0xbb74bb.dynCall_viijijj = function () {
      return (_0x3fe47b = _0xbb74bb.dynCall_viijijj = _0xbb74bb.asm.us).apply(null, arguments);
    };
    var _0x36f1b1 = _0xbb74bb.dynCall_viijj = function () {
      return (_0x36f1b1 = _0xbb74bb.dynCall_viijj = _0xbb74bb.asm.vs).apply(null, arguments);
    };
    var _0x89a623 = _0xbb74bb.dynCall_viiiij = function () {
      return (_0x89a623 = _0xbb74bb.dynCall_viiiij = _0xbb74bb.asm.ws).apply(null, arguments);
    };
    var _0x9d19c5 = _0xbb74bb.dynCall_iiijji = function () {
      return (_0x9d19c5 = _0xbb74bb.dynCall_iiijji = _0xbb74bb.asm.xs).apply(null, arguments);
    };
    var _0x4f7f78 = _0xbb74bb.dynCall_ijjiiiii = function () {
      return (_0x4f7f78 = _0xbb74bb.dynCall_ijjiiiii = _0xbb74bb.asm.ys).apply(null, arguments);
    };
    var _0x43c122 = _0xbb74bb.dynCall_vidd = function () {
      return (_0x43c122 = _0xbb74bb.dynCall_vidd = _0xbb74bb.asm.zs).apply(null, arguments);
    };
    var _0x48642f = _0xbb74bb.dynCall_iiiiiifffiiifiii = function () {
      return (_0x48642f = _0xbb74bb.dynCall_iiiiiifffiiifiii = _0xbb74bb.asm.As).apply(null, arguments);
    };
    var _0x2933d5 = _0xbb74bb.dynCall_viiif = function () {
      return (_0x2933d5 = _0xbb74bb.dynCall_viiif = _0xbb74bb.asm.Bs).apply(null, arguments);
    };
    var _0x2e06b6 = _0xbb74bb.dynCall_fiiiif = function () {
      return (_0x2e06b6 = _0xbb74bb.dynCall_fiiiif = _0xbb74bb.asm.Cs).apply(null, arguments);
    };
    var _0x5ca437 = _0xbb74bb.dynCall_viffff = function () {
      return (_0x5ca437 = _0xbb74bb.dynCall_viffff = _0xbb74bb.asm.Ds).apply(null, arguments);
    };
    var _0x34d492 = _0xbb74bb.dynCall_ij = function () {
      return (_0x34d492 = _0xbb74bb.dynCall_ij = _0xbb74bb.asm.Es).apply(null, arguments);
    };
    var _0x39b705 = _0xbb74bb.dynCall_vf = function () {
      return (_0x39b705 = _0xbb74bb.dynCall_vf = _0xbb74bb.asm.Fs).apply(null, arguments);
    };
    var _0x576aba = _0xbb74bb.dynCall_vffff = function () {
      return (_0x576aba = _0xbb74bb.dynCall_vffff = _0xbb74bb.asm.Gs).apply(null, arguments);
    };
    var _0xa12d36 = _0xbb74bb.dynCall_vff = function () {
      return (_0xa12d36 = _0xbb74bb.dynCall_vff = _0xbb74bb.asm.Hs).apply(null, arguments);
    };
    var _0x1a3639 = _0xbb74bb.dynCall_iiij = function () {
      return (_0x1a3639 = _0xbb74bb.dynCall_iiij = _0xbb74bb.asm.Is).apply(null, arguments);
    };
    var _0x1e1e00 = _0xbb74bb.dynCall_vifff = function () {
      return (_0x1e1e00 = _0xbb74bb.dynCall_vifff = _0xbb74bb.asm.Js).apply(null, arguments);
    };
    var _0x10288a = _0xbb74bb.dynCall_viifff = function () {
      return (_0x10288a = _0xbb74bb.dynCall_viifff = _0xbb74bb.asm.Ks).apply(null, arguments);
    };
    var _0x30b58f = _0xbb74bb.dynCall_vij = function () {
      return (_0x30b58f = _0xbb74bb.dynCall_vij = _0xbb74bb.asm.Ls).apply(null, arguments);
    };
    var _0x34835c = _0xbb74bb.dynCall_vfff = function () {
      return (_0x34835c = _0xbb74bb.dynCall_vfff = _0xbb74bb.asm.Ms).apply(null, arguments);
    };
    var _0x5d9790 = _0xbb74bb.dynCall_f = function () {
      return (_0x5d9790 = _0xbb74bb.dynCall_f = _0xbb74bb.asm.Ns).apply(null, arguments);
    };
    var _0x51c783 = _0xbb74bb.dynCall_ff = function () {
      return (_0x51c783 = _0xbb74bb.dynCall_ff = _0xbb74bb.asm.Os).apply(null, arguments);
    };
    var _0xb919be = _0xbb74bb.dynCall_vififfi = function () {
      return (_0xb919be = _0xbb74bb.dynCall_vififfi = _0xbb74bb.asm.Ps).apply(null, arguments);
    };
    var _0x505565 = _0xbb74bb.dynCall_iiififiii = function () {
      return (_0x505565 = _0xbb74bb.dynCall_iiififiii = _0xbb74bb.asm.Qs).apply(null, arguments);
    };
    var _0xee544b = _0xbb74bb.dynCall_fiif = function () {
      return (_0xee544b = _0xbb74bb.dynCall_fiif = _0xbb74bb.asm.Rs).apply(null, arguments);
    };
    var _0x2f8708 = _0xbb74bb.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
      return (_0x2f8708 = _0xbb74bb.dynCall_iiiiiiffiiiiiiiiiffffiii = _0xbb74bb.asm.Ss).apply(null, arguments);
    };
    var _0x293506 = _0xbb74bb.dynCall_viififi = function () {
      return (_0x293506 = _0xbb74bb.dynCall_viififi = _0xbb74bb.asm.Ts).apply(null, arguments);
    };
    var _0x79ae2f = _0xbb74bb.dynCall_viiffiiiiiiiii = function () {
      return (_0x79ae2f = _0xbb74bb.dynCall_viiffiiiiiiiii = _0xbb74bb.asm.Us).apply(null, arguments);
    };
    var _0x1f97f0 = _0xbb74bb.dynCall_viiffiiiiii = function () {
      return (_0x1f97f0 = _0xbb74bb.dynCall_viiffiiiiii = _0xbb74bb.asm.Vs).apply(null, arguments);
    };
    var _0x4eedb1 = _0xbb74bb.dynCall_viiiiiiiijiii = function () {
      return (_0x4eedb1 = _0xbb74bb.dynCall_viiiiiiiijiii = _0xbb74bb.asm.Ws).apply(null, arguments);
    };
    function _0xa544e(_0x186ffd, _0x14656f) {
      var _0x55fe9f = _0x2683f0();
      try {
        return _0x4d1de7(_0x186ffd, _0x14656f);
      } catch (_0x4e80ec) {
        _0x9546d0(_0x55fe9f);
        if (_0x4e80ec !== _0x4e80ec + 0) {
          throw _0x4e80ec;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x1610f0(_0x207d6c) {
      var _0x33fada = _0x2683f0();
      try {
        _0x1873f9(_0x207d6c);
      } catch (_0x540864) {
        _0x9546d0(_0x33fada);
        if (_0x540864 !== _0x540864 + 0) {
          throw _0x540864;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x27833a(_0x331805, _0x5e621c, _0x714f60) {
      var _0x550722 = _0x2683f0();
      try {
        _0x1a611a(_0x331805, _0x5e621c, _0x714f60);
      } catch (_0x488c17) {
        _0x9546d0(_0x550722);
        if (_0x488c17 !== _0x488c17 + 0) {
          throw _0x488c17;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x544a7d(_0x410174, _0x2e9a1b, _0x2d1ad8) {
      var _0x450e98 = _0x2683f0();
      try {
        return _0x24ba3a(_0x410174, _0x2e9a1b, _0x2d1ad8);
      } catch (_0x2c6d5e) {
        _0x9546d0(_0x450e98);
        if (_0x2c6d5e !== _0x2c6d5e + 0) {
          throw _0x2c6d5e;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x1c45bc(_0x30dddc, _0x4908de) {
      var _0x149051 = _0x2683f0();
      try {
        _0x2e598c(_0x30dddc, _0x4908de);
      } catch (_0x215bb6) {
        _0x9546d0(_0x149051);
        if (_0x215bb6 !== _0x215bb6 + 0) {
          throw _0x215bb6;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x43708f(_0x49b54a, _0x3ca3db, _0x153273, _0x534c37, _0x12fab3) {
      var _0x3f8213 = _0x2683f0();
      try {
        return _0x11bf6a(_0x49b54a, _0x3ca3db, _0x153273, _0x534c37, _0x12fab3);
      } catch (_0x549e74) {
        _0x9546d0(_0x3f8213);
        if (_0x549e74 !== _0x549e74 + 0) {
          throw _0x549e74;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x3ada12(_0x460715, _0x57a228, _0x1993c4, _0x1e7cfb) {
      var _0x5cfcf0 = _0x2683f0();
      try {
        return _0x2c3ceb(_0x460715, _0x57a228, _0x1993c4, _0x1e7cfb);
      } catch (_0x374f76) {
        _0x9546d0(_0x5cfcf0);
        if (_0x374f76 !== _0x374f76 + 0) {
          throw _0x374f76;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x43bcb8(_0x2e6f5d, _0x1b1e47, _0x4568be, _0x30b67f, _0x2c7a9a, _0x3c5b3c) {
      var _0x15cfa2 = _0x2683f0();
      try {
        return _0x3a2b9a(_0x2e6f5d, _0x1b1e47, _0x4568be, _0x30b67f, _0x2c7a9a, _0x3c5b3c);
      } catch (_0x56219a) {
        _0x9546d0(_0x15cfa2);
        if (_0x56219a !== _0x56219a + 0) {
          throw _0x56219a;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0xe216ac(_0x3ff3a7, _0x47789f, _0x52fccc, _0xa72b42) {
      var _0x591b87 = _0x2683f0();
      try {
        _0x1a2695(_0x3ff3a7, _0x47789f, _0x52fccc, _0xa72b42);
      } catch (_0x5a9bef) {
        _0x9546d0(_0x591b87);
        if (_0x5a9bef !== _0x5a9bef + 0) {
          throw _0x5a9bef;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0xfbe59(_0x3e1353) {
      var _0x153a75 = _0x2683f0();
      try {
        return _0x12562c(_0x3e1353);
      } catch (_0x211ff6) {
        _0x9546d0(_0x153a75);
        if (_0x211ff6 !== _0x211ff6 + 0) {
          throw _0x211ff6;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x403b8e(_0x50e489, _0x546808, _0xaf8d89, _0x5ebb5c, _0x171e98) {
      var _0x75abd6 = _0x2683f0();
      try {
        _0x51210f(_0x50e489, _0x546808, _0xaf8d89, _0x5ebb5c, _0x171e98);
      } catch (_0x51833c) {
        _0x9546d0(_0x75abd6);
        if (_0x51833c !== _0x51833c + 0) {
          throw _0x51833c;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x353109(_0x4d804e, _0x34bc69, _0x1ab2c2, _0x4fcf24, _0x30b0e7, _0x432eba, _0x13cbcd) {
      var _0x310913 = _0x2683f0();
      try {
        return _0x31223c(_0x4d804e, _0x34bc69, _0x1ab2c2, _0x4fcf24, _0x30b0e7, _0x432eba, _0x13cbcd);
      } catch (_0x2540af) {
        _0x9546d0(_0x310913);
        if (_0x2540af !== _0x2540af + 0) {
          throw _0x2540af;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x34eedb(_0x3ddcba, _0x45355c, _0x123a7e, _0x2c802e, _0x2349da, _0x18278f, _0x37103b, _0x4a0710) {
      var _0x14605c = _0x2683f0();
      try {
        return _0x3e0283(_0x3ddcba, _0x45355c, _0x123a7e, _0x2c802e, _0x2349da, _0x18278f, _0x37103b, _0x4a0710);
      } catch (_0x270055) {
        _0x9546d0(_0x14605c);
        if (_0x270055 !== _0x270055 + 0) {
          throw _0x270055;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x37c0e6(_0x515523, _0x1ac26a, _0x1476c1, _0x226d82) {
      var _0x490510 = _0x2683f0();
      try {
        return _0x4b88f0(_0x515523, _0x1ac26a, _0x1476c1, _0x226d82);
      } catch (_0x278bee) {
        _0x9546d0(_0x490510);
        if (_0x278bee !== _0x278bee + 0) {
          throw _0x278bee;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x2f6848(_0x80d8f7, _0x287f53, _0xa7d842, _0x2cba0f) {
      var _0x2f6f0e = _0x2683f0();
      try {
        return _0x223fa4(_0x80d8f7, _0x287f53, _0xa7d842, _0x2cba0f);
      } catch (_0x16a03d) {
        _0x9546d0(_0x2f6f0e);
        if (_0x16a03d !== _0x16a03d + 0) {
          throw _0x16a03d;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x423fcf(_0xeaff91, _0x306101, _0x1eb22d, _0x9bcae2, _0xfed2bd, _0x14b8eb, _0x171e6c, _0x5063f2, _0x2efa89, _0x1366f9, _0x36ca8c) {
      var _0x19c634 = _0x2683f0();
      try {
        return _0x1adf6e(_0xeaff91, _0x306101, _0x1eb22d, _0x9bcae2, _0xfed2bd, _0x14b8eb, _0x171e6c, _0x5063f2, _0x2efa89, _0x1366f9, _0x36ca8c);
      } catch (_0x13c316) {
        _0x9546d0(_0x19c634);
        if (_0x13c316 !== _0x13c316 + 0) {
          throw _0x13c316;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x478ae1(_0x36031a, _0x1b3628, _0xd5336b, _0x494ba4, _0x2e1bb6, _0x7d426d, _0x3d1795, _0x46d7e1) {
      var _0x517bca = _0x2683f0();
      try {
        _0x93b008(_0x36031a, _0x1b3628, _0xd5336b, _0x494ba4, _0x2e1bb6, _0x7d426d, _0x3d1795, _0x46d7e1);
      } catch (_0x168179) {
        _0x9546d0(_0x517bca);
        if (_0x168179 !== _0x168179 + 0) {
          throw _0x168179;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x42e0f2(_0x660168, _0x2ca0bd, _0x1d1b64, _0x363f30, _0x4f97c7, _0x4e2cab, _0x16e2b4, _0x595d98, _0x292f6c, _0x8602cb, _0x854236) {
      var _0x481320 = _0x2683f0();
      try {
        _0x332c7f(_0x660168, _0x2ca0bd, _0x1d1b64, _0x363f30, _0x4f97c7, _0x4e2cab, _0x16e2b4, _0x595d98, _0x292f6c, _0x8602cb, _0x854236);
      } catch (_0x5865d2) {
        _0x9546d0(_0x481320);
        if (_0x5865d2 !== _0x5865d2 + 0) {
          throw _0x5865d2;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x35e61b(_0x1da738, _0x590550, _0x58a330, _0x89be11, _0x4191b9, _0x5059de, _0x4d6752) {
      var _0x5d88c5 = _0x2683f0();
      try {
        _0x3f5925(_0x1da738, _0x590550, _0x58a330, _0x89be11, _0x4191b9, _0x5059de, _0x4d6752);
      } catch (_0x1e194b) {
        _0x9546d0(_0x5d88c5);
        if (_0x1e194b !== _0x1e194b + 0) {
          throw _0x1e194b;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x199601(_0x57bf0c, _0x2ff560, _0x2e50cc, _0x34adef, _0x3212e7, _0x524c43) {
      var _0x50ac50 = _0x2683f0();
      try {
        _0x2759e0(_0x57bf0c, _0x2ff560, _0x2e50cc, _0x34adef, _0x3212e7, _0x524c43);
      } catch (_0x54cc2e) {
        _0x9546d0(_0x50ac50);
        if (_0x54cc2e !== _0x54cc2e + 0) {
          throw _0x54cc2e;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x3f9834(_0x25c40a, _0x46376c, _0x247ba2, _0x1d51a6, _0x1689be, _0x2e1ee2, _0x320512, _0x2306bb, _0x5b1a6c) {
      var _0x57f0b8 = _0x2683f0();
      try {
        _0x28ebf3(_0x25c40a, _0x46376c, _0x247ba2, _0x1d51a6, _0x1689be, _0x2e1ee2, _0x320512, _0x2306bb, _0x5b1a6c);
      } catch (_0x3546c8) {
        _0x9546d0(_0x57f0b8);
        if (_0x3546c8 !== _0x3546c8 + 0) {
          throw _0x3546c8;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x2d3c75(_0x446bed, _0x37426c, _0x289851, _0x1edc5e, _0x429b24, _0xc6673e) {
      var _0x1fb69b = _0x2683f0();
      try {
        return _0x147073(_0x446bed, _0x37426c, _0x289851, _0x1edc5e, _0x429b24, _0xc6673e);
      } catch (_0x2afe07) {
        _0x9546d0(_0x1fb69b);
        if (_0x2afe07 !== _0x2afe07 + 0) {
          throw _0x2afe07;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x41e830(_0x15f973, _0x3d56a9, _0x1de583, _0x76d92e, _0x2a579d, _0x28fd7b, _0x1fb1e8, _0x397bb3, _0x77b6f9) {
      var _0xf5fa06 = _0x2683f0();
      try {
        return _0x51582d(_0x15f973, _0x3d56a9, _0x1de583, _0x76d92e, _0x2a579d, _0x28fd7b, _0x1fb1e8, _0x397bb3, _0x77b6f9);
      } catch (_0x52e8cf) {
        _0x9546d0(_0xf5fa06);
        if (_0x52e8cf !== _0x52e8cf + 0) {
          throw _0x52e8cf;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x32dc40(_0x4296c4, _0x4daaf6, _0x320cd1) {
      var _0xbfa7c0 = _0x2683f0();
      try {
        return _0x49dbb9(_0x4296c4, _0x4daaf6, _0x320cd1);
      } catch (_0x56b324) {
        _0x9546d0(_0xbfa7c0);
        if (_0x56b324 !== _0x56b324 + 0) {
          throw _0x56b324;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x198b4a(_0x738c76, _0x535bfb, _0x2a176a, _0x8fde63) {
      var _0xe085b2 = _0x2683f0();
      try {
        _0x2c17f5(_0x738c76, _0x535bfb, _0x2a176a, _0x8fde63);
      } catch (_0x8a7f2b) {
        _0x9546d0(_0xe085b2);
        if (_0x8a7f2b !== _0x8a7f2b + 0) {
          throw _0x8a7f2b;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x75b4df(_0x4e53a3, _0x3f0492, _0x131f4f, _0x52d7af, _0x3977ad) {
      var _0x349bd8 = _0x2683f0();
      try {
        return _0x4a837d(_0x4e53a3, _0x3f0492, _0x131f4f, _0x52d7af, _0x3977ad);
      } catch (_0x37eb7b) {
        _0x9546d0(_0x349bd8);
        if (_0x37eb7b !== _0x37eb7b + 0) {
          throw _0x37eb7b;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x5b5b77(_0x355128, _0x3bcfe8, _0x408032, _0x1a5a9a, _0x49d611) {
      var _0x575b72 = _0x2683f0();
      try {
        return _0x2f955e(_0x355128, _0x3bcfe8, _0x408032, _0x1a5a9a, _0x49d611);
      } catch (_0x26c446) {
        _0x9546d0(_0x575b72);
        if (_0x26c446 !== _0x26c446 + 0) {
          throw _0x26c446;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x577e3c(_0x554e59, _0x5543de, _0x3e8183, _0x437c84, _0x51f1ec) {
      var _0x1f3982 = _0x2683f0();
      try {
        _0x158bd0(_0x554e59, _0x5543de, _0x3e8183, _0x437c84, _0x51f1ec);
      } catch (_0x44a3c8) {
        _0x9546d0(_0x1f3982);
        if (_0x44a3c8 !== _0x44a3c8 + 0) {
          throw _0x44a3c8;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x19fcdc(_0x5bc2a4, _0x5c2f5d, _0x30d16f, _0xf677b4) {
      var _0x174a56 = _0x2683f0();
      try {
        _0x56dcf5(_0x5bc2a4, _0x5c2f5d, _0x30d16f, _0xf677b4);
      } catch (_0x4ce349) {
        _0x9546d0(_0x174a56);
        if (_0x4ce349 !== _0x4ce349 + 0) {
          throw _0x4ce349;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0xb72507(_0x1bd89e, _0x2e8fe0, _0x126a36, _0x1d246a, _0x3c4a56) {
      var _0x551765 = _0x2683f0();
      try {
        _0x3b33fb(_0x1bd89e, _0x2e8fe0, _0x126a36, _0x1d246a, _0x3c4a56);
      } catch (_0x326fa8) {
        _0x9546d0(_0x551765);
        if (_0x326fa8 !== _0x326fa8 + 0) {
          throw _0x326fa8;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x1b76bc(_0x10233c, _0x240a65, _0x20efc2) {
      var _0x1a55f1 = _0x2683f0();
      try {
        return _0x568fef(_0x10233c, _0x240a65, _0x20efc2);
      } catch (_0x5cce1b) {
        _0x9546d0(_0x1a55f1);
        if (_0x5cce1b !== _0x5cce1b + 0) {
          throw _0x5cce1b;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x109f7b(_0x4860cd, _0x3fa0af, _0x13743b, _0x3f77e8, _0x4fdb7d, _0x1ba699, _0x3225fd) {
      var _0x5f4793 = _0x2683f0();
      try {
        return _0x7ce0b6(_0x4860cd, _0x3fa0af, _0x13743b, _0x3f77e8, _0x4fdb7d, _0x1ba699, _0x3225fd);
      } catch (_0x513fd2) {
        _0x9546d0(_0x5f4793);
        if (_0x513fd2 !== _0x513fd2 + 0) {
          throw _0x513fd2;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x11f650(_0x25b6a3, _0x336c2c, _0x3ab2d3, _0x4996c8, _0x524c19) {
      var _0x5aa749 = _0x2683f0();
      try {
        _0x454269(_0x25b6a3, _0x336c2c, _0x3ab2d3, _0x4996c8, _0x524c19);
      } catch (_0x15b34a) {
        _0x9546d0(_0x5aa749);
        if (_0x15b34a !== _0x15b34a + 0) {
          throw _0x15b34a;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x426a15(_0x20bdf8, _0x12faa2, _0x3e6af6, _0x12658c, _0xd27abf, _0x35d76e, _0x32124c, _0xf3325b, _0x12eec5, _0x3bf739) {
      var _0xbf811d = _0x2683f0();
      try {
        _0x53a980(_0x20bdf8, _0x12faa2, _0x3e6af6, _0x12658c, _0xd27abf, _0x35d76e, _0x32124c, _0xf3325b, _0x12eec5, _0x3bf739);
      } catch (_0x4e4d37) {
        _0x9546d0(_0xbf811d);
        if (_0x4e4d37 !== _0x4e4d37 + 0) {
          throw _0x4e4d37;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x391259(_0x5e52bb, _0x45a8ae, _0xa1daea, _0x49903c, _0x5e2f45, _0x2f38ac) {
      var _0x59ea5b = _0x2683f0();
      try {
        _0x264d2e(_0x5e52bb, _0x45a8ae, _0xa1daea, _0x49903c, _0x5e2f45, _0x2f38ac);
      } catch (_0x1946fc) {
        _0x9546d0(_0x59ea5b);
        if (_0x1946fc !== _0x1946fc + 0) {
          throw _0x1946fc;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x10b851(_0x4fdb67, _0x2db105, _0x39d92e, _0x3b7e3d, _0x5955de, _0x87fbbd, _0x44cde8, _0x12b45f, _0xe0caeb, _0x42e8e4) {
      var _0xff1739 = _0x2683f0();
      try {
        return _0x1172ae(_0x4fdb67, _0x2db105, _0x39d92e, _0x3b7e3d, _0x5955de, _0x87fbbd, _0x44cde8, _0x12b45f, _0xe0caeb, _0x42e8e4);
      } catch (_0xa5a312) {
        _0x9546d0(_0xff1739);
        if (_0xa5a312 !== _0xa5a312 + 0) {
          throw _0xa5a312;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x1bd45b(_0x1c8e9c, _0x2fa9ed, _0x473aae, _0x297084, _0x2c807a) {
      var _0x54de0b = _0x2683f0();
      try {
        _0x50a25d(_0x1c8e9c, _0x2fa9ed, _0x473aae, _0x297084, _0x2c807a);
      } catch (_0x1a3797) {
        _0x9546d0(_0x54de0b);
        if (_0x1a3797 !== _0x1a3797 + 0) {
          throw _0x1a3797;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x49be20(_0x4a46f0, _0x2ea3f3, _0x4a7d9d) {
      var _0x3a7951 = _0x2683f0();
      try {
        return _0x3e3dab(_0x4a46f0, _0x2ea3f3, _0x4a7d9d);
      } catch (_0x27f4a0) {
        _0x9546d0(_0x3a7951);
        if (_0x27f4a0 !== _0x27f4a0 + 0) {
          throw _0x27f4a0;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x7f60a(_0xb7edef, _0x8906ee, _0x470423) {
      var _0x8d7b87 = _0x2683f0();
      try {
        return _0x2c342b(_0xb7edef, _0x8906ee, _0x470423);
      } catch (_0x57d6a1) {
        _0x9546d0(_0x8d7b87);
        if (_0x57d6a1 !== _0x57d6a1 + 0) {
          throw _0x57d6a1;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x583041(_0x1228cc, _0x294539, _0x20a6f2, _0x2b5c0e, _0x5be3bb, _0x52660c, _0x1b74b4, _0x10280c, _0x3ea0dd, _0x3e7b66, _0x35a7b9, _0x3d50c9, _0x40346a) {
      var _0x5e9cfc = _0x2683f0();
      try {
        _0x548be(_0x1228cc, _0x294539, _0x20a6f2, _0x2b5c0e, _0x5be3bb, _0x52660c, _0x1b74b4, _0x10280c, _0x3ea0dd, _0x3e7b66, _0x35a7b9, _0x3d50c9, _0x40346a);
      } catch (_0x4b57df) {
        _0x9546d0(_0x5e9cfc);
        if (_0x4b57df !== _0x4b57df + 0) {
          throw _0x4b57df;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x2071a0(_0x2f6900, _0x41ced6, _0x2ef0bf, _0x1e9038) {
      var _0x2a5c5f = _0x2683f0();
      try {
        return _0x52556b(_0x2f6900, _0x41ced6, _0x2ef0bf, _0x1e9038);
      } catch (_0x940d8d) {
        _0x9546d0(_0x2a5c5f);
        if (_0x940d8d !== _0x940d8d + 0) {
          throw _0x940d8d;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x1d6513(_0x45417c, _0x508d9e, _0x50762a, _0x174f1e, _0xa04d49, _0x16d4e8) {
      var _0x90c86c = _0x2683f0();
      try {
        return _0xad4ece(_0x45417c, _0x508d9e, _0x50762a, _0x174f1e, _0xa04d49, _0x16d4e8);
      } catch (_0x3403ff) {
        _0x9546d0(_0x90c86c);
        if (_0x3403ff !== _0x3403ff + 0) {
          throw _0x3403ff;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x331f0c(_0x22b9ef, _0x238f00, _0x3d1eac, _0x1ad5d0, _0x83b595) {
      var _0x3b476a = _0x2683f0();
      try {
        return _0x1587d0(_0x22b9ef, _0x238f00, _0x3d1eac, _0x1ad5d0, _0x83b595);
      } catch (_0x4d0472) {
        _0x9546d0(_0x3b476a);
        if (_0x4d0472 !== _0x4d0472 + 0) {
          throw _0x4d0472;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x3fa700(_0x47b8f2, _0x379073, _0xe34d9d, _0x40889c, _0x328a04, _0x5f2149) {
      var _0x2ea925 = _0x2683f0();
      try {
        _0x133dce(_0x47b8f2, _0x379073, _0xe34d9d, _0x40889c, _0x328a04, _0x5f2149);
      } catch (_0x4443a2) {
        _0x9546d0(_0x2ea925);
        if (_0x4443a2 !== _0x4443a2 + 0) {
          throw _0x4443a2;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x3a53ab(_0x5a93a3, _0x2e0f7a) {
      var _0x1571e5 = _0x2683f0();
      try {
        return _0x63d471(_0x5a93a3, _0x2e0f7a);
      } catch (_0x1fbf0f) {
        _0x9546d0(_0x1571e5);
        if (_0x1fbf0f !== _0x1fbf0f + 0) {
          throw _0x1fbf0f;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x18e039(_0x410fa1, _0x578d43, _0x2c3756, _0x5071b5, _0x22bb20, _0x35dae3) {
      var _0x458a01 = _0x2683f0();
      try {
        _0x4c8a8b(_0x410fa1, _0x578d43, _0x2c3756, _0x5071b5, _0x22bb20, _0x35dae3);
      } catch (_0x169fce) {
        _0x9546d0(_0x458a01);
        if (_0x169fce !== _0x169fce + 0) {
          throw _0x169fce;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x4bd6ec(_0x24b4a6, _0x1d689b, _0x232f75, _0x5e196b, _0x44dcd2, _0x3d8f52, _0x335aa2) {
      var _0x590568 = _0x2683f0();
      try {
        return _0x1420f9(_0x24b4a6, _0x1d689b, _0x232f75, _0x5e196b, _0x44dcd2, _0x3d8f52, _0x335aa2);
      } catch (_0x3eb8fb) {
        _0x9546d0(_0x590568);
        if (_0x3eb8fb !== _0x3eb8fb + 0) {
          throw _0x3eb8fb;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x1d7d65(_0x5d339d, _0x11c54f, _0x5b9361, _0x195016, _0x3617f7, _0x7c8e0b) {
      var _0x298bbf = _0x2683f0();
      try {
        return _0x2d29ef(_0x5d339d, _0x11c54f, _0x5b9361, _0x195016, _0x3617f7, _0x7c8e0b);
      } catch (_0x157e4f) {
        _0x9546d0(_0x298bbf);
        if (_0x157e4f !== _0x157e4f + 0) {
          throw _0x157e4f;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x58ef58(_0x541c4e, _0x453259, _0xbf2d10, _0x4bdba0, _0x2d6b96, _0x298b3a) {
      var _0x145889 = _0x2683f0();
      try {
        _0x4c7861(_0x541c4e, _0x453259, _0xbf2d10, _0x4bdba0, _0x2d6b96, _0x298b3a);
      } catch (_0x7f7875) {
        _0x9546d0(_0x145889);
        if (_0x7f7875 !== _0x7f7875 + 0) {
          throw _0x7f7875;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x1521be(_0x2a53f4, _0x43138, _0x4f7f5d, _0x1bf765, _0x5ad6f2, _0x285ed8, _0x14a801) {
      var _0x58b8cc = _0x2683f0();
      try {
        _0x45c63e(_0x2a53f4, _0x43138, _0x4f7f5d, _0x1bf765, _0x5ad6f2, _0x285ed8, _0x14a801);
      } catch (_0x13adfd) {
        _0x9546d0(_0x58b8cc);
        if (_0x13adfd !== _0x13adfd + 0) {
          throw _0x13adfd;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x518ec2(_0x1dc0d6, _0x3ace81, _0x419cd0, _0x11c5db, _0x546b15, _0x5c108b, _0xbb27c6) {
      var _0x5792d2 = _0x2683f0();
      try {
        return _0x1ce838(_0x1dc0d6, _0x3ace81, _0x419cd0, _0x11c5db, _0x546b15, _0x5c108b, _0xbb27c6);
      } catch (_0x7a22cf) {
        _0x9546d0(_0x5792d2);
        if (_0x7a22cf !== _0x7a22cf + 0) {
          throw _0x7a22cf;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x3dfaa2(_0x4266b7, _0x17512a, _0x3b470a, _0x43c90b, _0x33ee18) {
      var _0xf17b17 = _0x2683f0();
      try {
        return _0x218b24(_0x4266b7, _0x17512a, _0x3b470a, _0x43c90b, _0x33ee18);
      } catch (_0x1c44d1) {
        _0x9546d0(_0xf17b17);
        if (_0x1c44d1 !== _0x1c44d1 + 0) {
          throw _0x1c44d1;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x2dccda(_0xce4afc, _0x113389, _0x40c0c0, _0x66d223, _0x4b2308) {
      var _0x70690f = _0x2683f0();
      try {
        return _0x40c453(_0xce4afc, _0x113389, _0x40c0c0, _0x66d223, _0x4b2308);
      } catch (_0x29e04c) {
        _0x9546d0(_0x70690f);
        if (_0x29e04c !== _0x29e04c + 0) {
          throw _0x29e04c;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x1fdc50(_0x536833, _0x37f640, _0x5d2858, _0x575fdf, _0x39b1ad, _0x1c8fa1, _0x9498b9, _0x3115f5, _0x413ccd, _0x103cb7, _0xa5a39, _0x16f77a, _0xa29a3, _0x5364d5, _0x2d3e88) {
      var _0x5dd3ee = _0x2683f0();
      try {
        _0x466cdc(_0x536833, _0x37f640, _0x5d2858, _0x575fdf, _0x39b1ad, _0x1c8fa1, _0x9498b9, _0x3115f5, _0x413ccd, _0x103cb7, _0xa5a39, _0x16f77a, _0xa29a3, _0x5364d5, _0x2d3e88);
      } catch (_0x359fad) {
        _0x9546d0(_0x5dd3ee);
        if (_0x359fad !== _0x359fad + 0) {
          throw _0x359fad;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x2fe395(_0x31dde3, _0x1370d5, _0x5a2034, _0x2877bf, _0x323efb, _0x346555, _0x2d6353, _0x2df71b, _0x35e638, _0x4c22cd, _0x53419c, _0x90ad61, _0x228ed1, _0x5730cf, _0x36aa6d) {
      var _0x2a2bbc = _0x2683f0();
      try {
        _0x579975(_0x31dde3, _0x1370d5, _0x5a2034, _0x2877bf, _0x323efb, _0x346555, _0x2d6353, _0x2df71b, _0x35e638, _0x4c22cd, _0x53419c, _0x90ad61, _0x228ed1, _0x5730cf, _0x36aa6d);
      } catch (_0x1cbdd2) {
        _0x9546d0(_0x2a2bbc);
        if (_0x1cbdd2 !== _0x1cbdd2 + 0) {
          throw _0x1cbdd2;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0xddcf4e(_0x3c5d58, _0x563a0b, _0x6e07cd, _0x409356, _0x4d0e3e, _0x12ec4f, _0x5decb7, _0x47f12b, _0x4ca606, _0x3bfda5, _0x6fd490, _0x2cb838, _0x393f33, _0x3eff50, _0x5aa63a) {
      var _0x526063 = _0x2683f0();
      try {
        _0x4d0057(_0x3c5d58, _0x563a0b, _0x6e07cd, _0x409356, _0x4d0e3e, _0x12ec4f, _0x5decb7, _0x47f12b, _0x4ca606, _0x3bfda5, _0x6fd490, _0x2cb838, _0x393f33, _0x3eff50, _0x5aa63a);
      } catch (_0x499a37) {
        _0x9546d0(_0x526063);
        if (_0x499a37 !== _0x499a37 + 0) {
          throw _0x499a37;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x15ae41(_0x41acdd, _0x3534d8, _0x3c62fb, _0x43c5c1, _0x1d994b) {
      var _0x3fd2f1 = _0x2683f0();
      try {
        return _0x1fd41d(_0x41acdd, _0x3534d8, _0x3c62fb, _0x43c5c1, _0x1d994b);
      } catch (_0x1f12a2) {
        _0x9546d0(_0x3fd2f1);
        if (_0x1f12a2 !== _0x1f12a2 + 0) {
          throw _0x1f12a2;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x52d595(_0x1784a4, _0x5a958b, _0x383a86, _0x29200d, _0x3727c5, _0x3f4368) {
      var _0x4fd3f9 = _0x2683f0();
      try {
        return _0x35fd30(_0x1784a4, _0x5a958b, _0x383a86, _0x29200d, _0x3727c5, _0x3f4368);
      } catch (_0x30a366) {
        _0x9546d0(_0x4fd3f9);
        if (_0x30a366 !== _0x30a366 + 0) {
          throw _0x30a366;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x21d1ef(_0x2f7985, _0x43492a, _0x4241db, _0x4e16b0) {
      var _0x2aced1 = _0x2683f0();
      try {
        _0x43c122(_0x2f7985, _0x43492a, _0x4241db, _0x4e16b0);
      } catch (_0x538861) {
        _0x9546d0(_0x2aced1);
        if (_0x538861 !== _0x538861 + 0) {
          throw _0x538861;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x572963(_0x5ab53d, _0x2033c5, _0x8b4c57, _0x557aef) {
      var _0x431868 = _0x2683f0();
      try {
        return _0x8af743(_0x5ab53d, _0x2033c5, _0x8b4c57, _0x557aef);
      } catch (_0x416d39) {
        _0x9546d0(_0x431868);
        if (_0x416d39 !== _0x416d39 + 0) {
          throw _0x416d39;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x5b46c2(_0x2021ca, _0x58015d, _0x5a6389, _0xfc34d, _0x296ac1, _0x164c13, _0x223d03, _0x41642d) {
      var _0xeca981 = _0x2683f0();
      try {
        return _0x1acc50(_0x2021ca, _0x58015d, _0x5a6389, _0xfc34d, _0x296ac1, _0x164c13, _0x223d03, _0x41642d);
      } catch (_0x211ce2) {
        _0x9546d0(_0xeca981);
        if (_0x211ce2 !== _0x211ce2 + 0) {
          throw _0x211ce2;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x2a7e19(_0x5a7da7, _0x3e8a22, _0x4b7533, _0x4ce616, _0x43bda8) {
      var _0x16d7d0 = _0x2683f0();
      try {
        return _0x147206(_0x5a7da7, _0x3e8a22, _0x4b7533, _0x4ce616, _0x43bda8);
      } catch (_0x55bd68) {
        _0x9546d0(_0x16d7d0);
        if (_0x55bd68 !== _0x55bd68 + 0) {
          throw _0x55bd68;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x2da40f(_0x2f251a, _0x7e7e8b) {
      var _0x2c6ef4 = _0x2683f0();
      try {
        return _0x21889c(_0x2f251a, _0x7e7e8b);
      } catch (_0x968ecc) {
        _0x9546d0(_0x2c6ef4);
        if (_0x968ecc !== _0x968ecc + 0) {
          throw _0x968ecc;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x1674fe(_0x51d66e, _0x491e04, _0xf003d5) {
      var _0x326a12 = _0x2683f0();
      try {
        return _0x28bf1d(_0x51d66e, _0x491e04, _0xf003d5);
      } catch (_0x556e1a) {
        _0x9546d0(_0x326a12);
        if (_0x556e1a !== _0x556e1a + 0) {
          throw _0x556e1a;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x108a98(_0x6e2c63) {
      var _0x592001 = _0x2683f0();
      try {
        return _0x272bad(_0x6e2c63);
      } catch (_0x2d5025) {
        _0x9546d0(_0x592001);
        if (_0x2d5025 !== _0x2d5025 + 0) {
          throw _0x2d5025;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x1d5981(_0x28c857, _0x1d94d7, _0x50f46, _0x582ad8) {
      var _0x558684 = _0x2683f0();
      try {
        return _0x146f25(_0x28c857, _0x1d94d7, _0x50f46, _0x582ad8);
      } catch (_0x2b1a32) {
        _0x9546d0(_0x558684);
        if (_0x2b1a32 !== _0x2b1a32 + 0) {
          throw _0x2b1a32;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x3560bd(_0x30a0cd, _0x25ae12, _0x552016, _0x1b94d6, _0x20a665) {
      var _0x4a6eb5 = _0x2683f0();
      try {
        _0x17aabe(_0x30a0cd, _0x25ae12, _0x552016, _0x1b94d6, _0x20a665);
      } catch (_0x22a969) {
        _0x9546d0(_0x4a6eb5);
        if (_0x22a969 !== _0x22a969 + 0) {
          throw _0x22a969;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0xc8d69f(_0x242a9f, _0x50ca3f, _0x23bea8, _0x2c9456, _0x110f4d, _0x5c775d) {
      var _0x2b3f88 = _0x2683f0();
      try {
        _0x298ba8(_0x242a9f, _0x50ca3f, _0x23bea8, _0x2c9456, _0x110f4d, _0x5c775d);
      } catch (_0xaab51e) {
        _0x9546d0(_0x2b3f88);
        if (_0xaab51e !== _0xaab51e + 0) {
          throw _0xaab51e;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x59c2e3(_0x4d7bd4, _0x2f81ab, _0x266f44, _0x3912ed, _0x339e5b, _0x2a98ab, _0x25e755, _0x765165) {
      var _0x2f9c43 = _0x2683f0();
      try {
        return _0x5cd4b2(_0x4d7bd4, _0x2f81ab, _0x266f44, _0x3912ed, _0x339e5b, _0x2a98ab, _0x25e755, _0x765165);
      } catch (_0x24b085) {
        _0x9546d0(_0x2f9c43);
        if (_0x24b085 !== _0x24b085 + 0) {
          throw _0x24b085;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x2664ee(_0x16aa6d, _0x495989, _0x531849, _0x17e5d7, _0x443bec, _0x4934f7, _0x404d75) {
      var _0x27c0cb = _0x2683f0();
      try {
        return _0x27e68f(_0x16aa6d, _0x495989, _0x531849, _0x17e5d7, _0x443bec, _0x4934f7, _0x404d75);
      } catch (_0xedde11) {
        _0x9546d0(_0x27c0cb);
        if (_0xedde11 !== _0xedde11 + 0) {
          throw _0xedde11;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x51aa16(_0x3fc9b6, _0xbefdc1, _0x44af00, _0x3459b2, _0x2f93a2, _0x38360b) {
      var _0x4769eb = _0x2683f0();
      try {
        _0xdabe7f(_0x3fc9b6, _0xbefdc1, _0x44af00, _0x3459b2, _0x2f93a2, _0x38360b);
      } catch (_0xd4f605) {
        _0x9546d0(_0x4769eb);
        if (_0xd4f605 !== _0xd4f605 + 0) {
          throw _0xd4f605;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x41885b(_0x270f24, _0xcaa66b, _0x379f55, _0x565437, _0x522377, _0x236a52, _0x5985ad) {
      var _0x2cafc6 = _0x2683f0();
      try {
        _0x1c9ca7(_0x270f24, _0xcaa66b, _0x379f55, _0x565437, _0x522377, _0x236a52, _0x5985ad);
      } catch (_0x3ebef0) {
        _0x9546d0(_0x2cafc6);
        if (_0x3ebef0 !== _0x3ebef0 + 0) {
          throw _0x3ebef0;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x24edf6(_0x57b835, _0x29f459, _0x5476b3, _0x3a7884, _0x1a83cb, _0x57c230, _0x244567, _0x41ddc5, _0x3fd78d, _0x201dd0, _0x55a743, _0x5428f9) {
      var _0x557047 = _0x2683f0();
      try {
        return _0x5313a7(_0x57b835, _0x29f459, _0x5476b3, _0x3a7884, _0x1a83cb, _0x57c230, _0x244567, _0x41ddc5, _0x3fd78d, _0x201dd0, _0x55a743, _0x5428f9);
      } catch (_0x2f8ae3) {
        _0x9546d0(_0x557047);
        if (_0x2f8ae3 !== _0x2f8ae3 + 0) {
          throw _0x2f8ae3;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x1f26cc(_0x18e5f2, _0x48032d, _0x2767b9, _0x1230b8) {
      var _0x26d1d1 = _0x2683f0();
      try {
        _0x4a31b5(_0x18e5f2, _0x48032d, _0x2767b9, _0x1230b8);
      } catch (_0x1739c3) {
        _0x9546d0(_0x26d1d1);
        if (_0x1739c3 !== _0x1739c3 + 0) {
          throw _0x1739c3;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x2e4a8d(_0x1f04f3, _0xccde7d, _0x57998f, _0x3f01fc, _0x50d472) {
      var _0x4ad047 = _0x2683f0();
      try {
        return _0x275d61(_0x1f04f3, _0xccde7d, _0x57998f, _0x3f01fc, _0x50d472);
      } catch (_0x5d4470) {
        _0x9546d0(_0x4ad047);
        if (_0x5d4470 !== _0x5d4470 + 0) {
          throw _0x5d4470;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x517fe9(_0x2fa898, _0x1ab438, _0x12d8d8, _0x240517, _0x6904c7) {
      var _0xfd2d06 = _0x2683f0();
      try {
        return _0x4cd9cf(_0x2fa898, _0x1ab438, _0x12d8d8, _0x240517, _0x6904c7);
      } catch (_0x25bf9d) {
        _0x9546d0(_0xfd2d06);
        if (_0x25bf9d !== _0x25bf9d + 0) {
          throw _0x25bf9d;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x42eb30(_0x4277c5, _0x499549, _0x3ea633, _0xf4be62, _0x3c9127, _0x1e2342, _0x2971fc, _0x1d12c2) {
      var _0x5a2cfd = _0x2683f0();
      try {
        _0x20bfb2(_0x4277c5, _0x499549, _0x3ea633, _0xf4be62, _0x3c9127, _0x1e2342, _0x2971fc, _0x1d12c2);
      } catch (_0x1474fc) {
        _0x9546d0(_0x5a2cfd);
        if (_0x1474fc !== _0x1474fc + 0) {
          throw _0x1474fc;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x14cfd0(_0x57aa41, _0x314049, _0x361fd3) {
      var _0x2bb5f3 = _0x2683f0();
      try {
        return _0x8811ae(_0x57aa41, _0x314049, _0x361fd3);
      } catch (_0x2ef8c7) {
        _0x9546d0(_0x2bb5f3);
        if (_0x2ef8c7 !== _0x2ef8c7 + 0) {
          throw _0x2ef8c7;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x347812(_0x36f511, _0x10a13a, _0x473ca3, _0x3ca7d5, _0x5929ab, _0x1a6db4, _0x5ca858) {
      var _0x5efc03 = _0x2683f0();
      try {
        _0x5f3704(_0x36f511, _0x10a13a, _0x473ca3, _0x3ca7d5, _0x5929ab, _0x1a6db4, _0x5ca858);
      } catch (_0x4443b7) {
        _0x9546d0(_0x5efc03);
        if (_0x4443b7 !== _0x4443b7 + 0) {
          throw _0x4443b7;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0xa8aa(_0x8cdb5d, _0x116c18, _0x182f7d, _0x5c8564, _0x56ddcd, _0x2056db) {
      var _0x5d54e7 = _0x2683f0();
      try {
        return _0x1ad842(_0x8cdb5d, _0x116c18, _0x182f7d, _0x5c8564, _0x56ddcd, _0x2056db);
      } catch (_0xf301fc) {
        _0x9546d0(_0x5d54e7);
        if (_0xf301fc !== _0xf301fc + 0) {
          throw _0xf301fc;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x2154e8(_0x1b6962, _0x358461, _0x1aa902, _0x3a8cb0, _0x2ab2af) {
      var _0xc2cc97 = _0x2683f0();
      try {
        return _0x258216(_0x1b6962, _0x358461, _0x1aa902, _0x3a8cb0, _0x2ab2af);
      } catch (_0x37349a) {
        _0x9546d0(_0xc2cc97);
        if (_0x37349a !== _0x37349a + 0) {
          throw _0x37349a;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x10e9dc(_0x105011, _0x1ba2fd, _0x1ad435, _0x152789, _0x56308e, _0x408f50) {
      var _0x2e2c65 = _0x2683f0();
      try {
        return _0x2627fe(_0x105011, _0x1ba2fd, _0x1ad435, _0x152789, _0x56308e, _0x408f50);
      } catch (_0x44c3d3) {
        _0x9546d0(_0x2e2c65);
        if (_0x44c3d3 !== _0x44c3d3 + 0) {
          throw _0x44c3d3;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x4998ed(_0x11b596, _0x16c6a7, _0x1bb427, _0x5dbb1a) {
      var _0x2a5667 = _0x2683f0();
      try {
        return _0x5b9f5c(_0x11b596, _0x16c6a7, _0x1bb427, _0x5dbb1a);
      } catch (_0x586507) {
        _0x9546d0(_0x2a5667);
        if (_0x586507 !== _0x586507 + 0) {
          throw _0x586507;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0xeea16e(_0x31fcd9, _0x295fb5, _0x2095ba, _0x3fb183, _0x3c276f, _0x4486b8) {
      var _0x4064fb = _0x2683f0();
      try {
        return _0x5b1776(_0x31fcd9, _0x295fb5, _0x2095ba, _0x3fb183, _0x3c276f, _0x4486b8);
      } catch (_0x3063b2) {
        _0x9546d0(_0x4064fb);
        if (_0x3063b2 !== _0x3063b2 + 0) {
          throw _0x3063b2;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0xbef85e(_0x533d40, _0x14039e, _0x541dff, _0x40e8be, _0x3ca328, _0xc12c8a) {
      var _0x55774e = _0x2683f0();
      try {
        return _0xbd6990(_0x533d40, _0x14039e, _0x541dff, _0x40e8be, _0x3ca328, _0xc12c8a);
      } catch (_0x3ca162) {
        _0x9546d0(_0x55774e);
        if (_0x3ca162 !== _0x3ca162 + 0) {
          throw _0x3ca162;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x3f98af(_0x31eb7b, _0x20d348, _0x2504c3, _0x4b457a, _0xa61bb1, _0x2d7f6b, _0x150aef) {
      var _0x56dd8a = _0x2683f0();
      try {
        _0x1da8fd(_0x31eb7b, _0x20d348, _0x2504c3, _0x4b457a, _0xa61bb1, _0x2d7f6b, _0x150aef);
      } catch (_0x2b3d75) {
        _0x9546d0(_0x56dd8a);
        if (_0x2b3d75 !== _0x2b3d75 + 0) {
          throw _0x2b3d75;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0xb7bb86(_0x3f472c, _0x1fcae4, _0x43f8f7, _0x34c069, _0x772ca, _0x4ccbaa) {
      var _0x57d33d = _0x2683f0();
      try {
        return _0x57147b(_0x3f472c, _0x1fcae4, _0x43f8f7, _0x34c069, _0x772ca, _0x4ccbaa);
      } catch (_0x13e17d) {
        _0x9546d0(_0x57d33d);
        if (_0x13e17d !== _0x13e17d + 0) {
          throw _0x13e17d;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x2e5161(_0x1af2ac, _0x4eb473, _0x545061, _0x1117a1, _0x38a3d7, _0x432621, _0x5543ba, _0x37255d, _0x491f55, _0x522808) {
      var _0x201dcc = _0x2683f0();
      try {
        _0x350c2a(_0x1af2ac, _0x4eb473, _0x545061, _0x1117a1, _0x38a3d7, _0x432621, _0x5543ba, _0x37255d, _0x491f55, _0x522808);
      } catch (_0xcafca9) {
        _0x9546d0(_0x201dcc);
        if (_0xcafca9 !== _0xcafca9 + 0) {
          throw _0xcafca9;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x42ccbe(_0x123015, _0x540c1e, _0x4607a2, _0x95f909, _0x1c6e9c, _0x266039, _0x20d35e) {
      var _0x5ae6da = _0x2683f0();
      try {
        return _0x43e613(_0x123015, _0x540c1e, _0x4607a2, _0x95f909, _0x1c6e9c, _0x266039, _0x20d35e);
      } catch (_0xdada9) {
        _0x9546d0(_0x5ae6da);
        if (_0xdada9 !== _0xdada9 + 0) {
          throw _0xdada9;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x87fbe9(_0x35400b, _0x5e4102, _0xda8077, _0x2467e7) {
      var _0x335268 = _0x2683f0();
      try {
        return _0x48ba48(_0x35400b, _0x5e4102, _0xda8077, _0x2467e7);
      } catch (_0x769883) {
        _0x9546d0(_0x335268);
        if (_0x769883 !== _0x769883 + 0) {
          throw _0x769883;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x417313(_0x29b1be, _0x28a9db, _0x4d53eb, _0x1e5526) {
      var _0x29e46c = _0x2683f0();
      try {
        return _0xc8e49e(_0x29b1be, _0x28a9db, _0x4d53eb, _0x1e5526);
      } catch (_0x2d6d3f) {
        _0x9546d0(_0x29e46c);
        if (_0x2d6d3f !== _0x2d6d3f + 0) {
          throw _0x2d6d3f;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x57e562(_0x429aa6, _0x51d3be, _0x14afb0, _0x32671f) {
      var _0x44a906 = _0x2683f0();
      try {
        return _0x580f55(_0x429aa6, _0x51d3be, _0x14afb0, _0x32671f);
      } catch (_0x356c34) {
        _0x9546d0(_0x44a906);
        if (_0x356c34 !== _0x356c34 + 0) {
          throw _0x356c34;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x1ec87f(_0x4d748e, _0x663a7d, _0x3ce466, _0x120619, _0x4300cc, _0xa9b965) {
      var _0x41351e = _0x2683f0();
      try {
        return _0xe359d5(_0x4d748e, _0x663a7d, _0x3ce466, _0x120619, _0x4300cc, _0xa9b965);
      } catch (_0x285b73) {
        _0x9546d0(_0x41351e);
        if (_0x285b73 !== _0x285b73 + 0) {
          throw _0x285b73;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x7600e0(_0x18af94, _0x36ba3c, _0x17baa6, _0x23a0c7, _0x1a8536, _0x370bbe, _0x563293, _0x37efcd, _0x429f86, _0xbd0919) {
      var _0x2b3f66 = _0x2683f0();
      try {
        return _0x1ec24a(_0x18af94, _0x36ba3c, _0x17baa6, _0x23a0c7, _0x1a8536, _0x370bbe, _0x563293, _0x37efcd, _0x429f86, _0xbd0919);
      } catch (_0x35da99) {
        _0x9546d0(_0x2b3f66);
        if (_0x35da99 !== _0x35da99 + 0) {
          throw _0x35da99;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x24e945(_0x52bd65, _0x377290, _0x412e47, _0xf96d0a, _0x43e1cb, _0x51fda2, _0x472cdb) {
      var _0x384ba6 = _0x2683f0();
      try {
        _0xb43db0(_0x52bd65, _0x377290, _0x412e47, _0xf96d0a, _0x43e1cb, _0x51fda2, _0x472cdb);
      } catch (_0x38bcb9) {
        _0x9546d0(_0x384ba6);
        if (_0x38bcb9 !== _0x38bcb9 + 0) {
          throw _0x38bcb9;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x141e3a(_0x229f7f, _0x39fd24, _0x5c311a, _0xabc433, _0x248e85, _0x5055ba, _0x3fd96f, _0x35bee7, _0x1475c5, _0x515ae0, _0x26a4f4, _0x496bf3) {
      var _0x206543 = _0x2683f0();
      try {
        return _0x15b3be(_0x229f7f, _0x39fd24, _0x5c311a, _0xabc433, _0x248e85, _0x5055ba, _0x3fd96f, _0x35bee7, _0x1475c5, _0x515ae0, _0x26a4f4, _0x496bf3);
      } catch (_0x1b2479) {
        _0x9546d0(_0x206543);
        if (_0x1b2479 !== _0x1b2479 + 0) {
          throw _0x1b2479;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x20dfa1(_0x1af906, _0x5e189, _0x23aa1d, _0x5e13de, _0x5d3c79, _0x511cfe, _0x177cb3, _0x1f3e21, _0x18df02, _0x5cad1d) {
      var _0x563303 = _0x2683f0();
      try {
        return _0x1f761a(_0x1af906, _0x5e189, _0x23aa1d, _0x5e13de, _0x5d3c79, _0x511cfe, _0x177cb3, _0x1f3e21, _0x18df02, _0x5cad1d);
      } catch (_0x207385) {
        _0x9546d0(_0x563303);
        if (_0x207385 !== _0x207385 + 0) {
          throw _0x207385;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x28fb65(_0x80082f, _0x205721, _0x2026c7, _0x297e06, _0x3132fa, _0xb0ccf8, _0x19ceab, _0xd41104, _0xc48c50, _0x37ef5c, _0x3365c5, _0x58dc2e, _0x289748, _0x28c8e8) {
      var _0x5f0c84 = _0x2683f0();
      try {
        _0x1c13b6(_0x80082f, _0x205721, _0x2026c7, _0x297e06, _0x3132fa, _0xb0ccf8, _0x19ceab, _0xd41104, _0xc48c50, _0x37ef5c, _0x3365c5, _0x58dc2e, _0x289748, _0x28c8e8);
      } catch (_0x3f4117) {
        _0x9546d0(_0x5f0c84);
        if (_0x3f4117 !== _0x3f4117 + 0) {
          throw _0x3f4117;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x4caa89(_0x2d3c55, _0x3c2d0c, _0x499a50, _0xbaea03, _0x2826d6, _0x24e6f3, _0x883e58, _0x1a0006, _0xcc5310) {
      var _0x5bece0 = _0x2683f0();
      try {
        _0x276d2c(_0x2d3c55, _0x3c2d0c, _0x499a50, _0xbaea03, _0x2826d6, _0x24e6f3, _0x883e58, _0x1a0006, _0xcc5310);
      } catch (_0x377e82) {
        _0x9546d0(_0x5bece0);
        if (_0x377e82 !== _0x377e82 + 0) {
          throw _0x377e82;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x2d17ff(_0x25218c, _0x41aa47, _0x48dbee, _0x438034, _0x58c99d, _0x349174, _0x18355d) {
      var _0x3636e7 = _0x2683f0();
      try {
        return _0x18c73c(_0x25218c, _0x41aa47, _0x48dbee, _0x438034, _0x58c99d, _0x349174, _0x18355d);
      } catch (_0x4a30f0) {
        _0x9546d0(_0x3636e7);
        if (_0x4a30f0 !== _0x4a30f0 + 0) {
          throw _0x4a30f0;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x5acbc1(_0x28a58f, _0x5702bd, _0x2c476c, _0xce4111, _0x3f6a3d, _0x40b1a2, _0x4549ba, _0x4b8d1a, _0x16e6e2, _0x3f2b1d, _0x5117c6, _0x531e97, _0x471e88, _0x18404f, _0x39ea1c, _0x432d67, _0x2ad1dd) {
      var _0xc4204f = _0x2683f0();
      try {
        _0x2cce38(_0x28a58f, _0x5702bd, _0x2c476c, _0xce4111, _0x3f6a3d, _0x40b1a2, _0x4549ba, _0x4b8d1a, _0x16e6e2, _0x3f2b1d, _0x5117c6, _0x531e97, _0x471e88, _0x18404f, _0x39ea1c, _0x432d67, _0x2ad1dd);
      } catch (_0x217656) {
        _0x9546d0(_0xc4204f);
        if (_0x217656 !== _0x217656 + 0) {
          throw _0x217656;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x9213c(_0x5c2d12, _0x5bca0f, _0x5a32bf, _0x42b291, _0x444e4e, _0x1b216b, _0x58125f) {
      var _0x2530e1 = _0x2683f0();
      try {
        return _0x91ab9a(_0x5c2d12, _0x5bca0f, _0x5a32bf, _0x42b291, _0x444e4e, _0x1b216b, _0x58125f);
      } catch (_0x28778b) {
        _0x9546d0(_0x2530e1);
        if (_0x28778b !== _0x28778b + 0) {
          throw _0x28778b;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x336655(_0x49ad25, _0x39bde5, _0x54fcc1, _0x2dde61, _0x25c11b, _0x18b63d, _0x45aadd, _0x52d121, _0x57fa76) {
      var _0x19551f = _0x2683f0();
      try {
        _0x192324(_0x49ad25, _0x39bde5, _0x54fcc1, _0x2dde61, _0x25c11b, _0x18b63d, _0x45aadd, _0x52d121, _0x57fa76);
      } catch (_0x109309) {
        _0x9546d0(_0x19551f);
        if (_0x109309 !== _0x109309 + 0) {
          throw _0x109309;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x5a691a(_0x4b734a, _0x4ce670, _0x380682, _0xf07126, _0x59c6e8, _0x518c30, _0x14356d, _0x7b3060, _0x1ec543, _0xfcd08d, _0x440a80) {
      var _0x229c62 = _0x2683f0();
      try {
        return _0x503be2(_0x4b734a, _0x4ce670, _0x380682, _0xf07126, _0x59c6e8, _0x518c30, _0x14356d, _0x7b3060, _0x1ec543, _0xfcd08d, _0x440a80);
      } catch (_0x466e6f) {
        _0x9546d0(_0x229c62);
        if (_0x466e6f !== _0x466e6f + 0) {
          throw _0x466e6f;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x2f30e1(_0x9f9d50, _0x2d4955, _0x2362be, _0x168301, _0x4c528f, _0x3ee8f5, _0x3e6e05, _0x18bc6b, _0x4c865a, _0x5de79a, _0x15176a) {
      var _0x4f888e = _0x2683f0();
      try {
        _0x1fa283(_0x9f9d50, _0x2d4955, _0x2362be, _0x168301, _0x4c528f, _0x3ee8f5, _0x3e6e05, _0x18bc6b, _0x4c865a, _0x5de79a, _0x15176a);
      } catch (_0x5dbf3c) {
        _0x9546d0(_0x4f888e);
        if (_0x5dbf3c !== _0x5dbf3c + 0) {
          throw _0x5dbf3c;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x15ad02(_0x17b3ac, _0x5558ee, _0x43c61c, _0x9fec3e, _0x5567e6, _0x33059e, _0x2f8484, _0x903f49) {
      var _0x52dfb2 = _0x2683f0();
      try {
        _0x57b878(_0x17b3ac, _0x5558ee, _0x43c61c, _0x9fec3e, _0x5567e6, _0x33059e, _0x2f8484, _0x903f49);
      } catch (_0x5536c4) {
        _0x9546d0(_0x52dfb2);
        if (_0x5536c4 !== _0x5536c4 + 0) {
          throw _0x5536c4;
        }
        _0x55aa85(1, 0);
      }
    }
    function _0x5cd7d3(_0x2b97be, _0x382be7, _0x215573, _0xa3dbfc, _0x8f64ee, _0x5dd7bb) {
      var _0x1c811c = _0x2683f0();
      try {
        return _0xfffd4c(_0x2b97be, _0x382be7, _0x215573, _0xa3dbfc, _0x8f64ee, _0x5dd7bb);
      } catch (_0x3e0114) {
        _0x9546d0(_0x1c811c);
        if (_0x3e0114 !== _0x3e0114 + 0) {
          throw _0x3e0114;
        }
        _0x55aa85(1, 0);
      }
    }
    _0xbb74bb.ccall = _0x942417;
    _0xbb74bb.cwrap = _0x5ea9a1;
    _0xbb74bb.stackTrace = _0x32c4af;
    _0xbb74bb.addRunDependency = _0x2d82f5;
    _0xbb74bb.removeRunDependency = _0x4c5673;
    _0xbb74bb.FS_createPath = _0x32ab7c.createPath;
    _0xbb74bb.FS_createDataFile = _0x32ab7c.createDataFile;
    _0xbb74bb.stackTrace = _0x32c4af;
    var _0x3fc687;
    function _0x23c2f2(_0x14b42b) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + _0x14b42b + ")";
      this.status = _0x14b42b;
    }
    var _0x471486 = false;
    _0x44e00c = function _0x42becc() {
      if (!_0x3fc687) {
        _0x1d908e();
      }
      if (!_0x3fc687) {
        _0x44e00c = _0x42becc;
      }
    };
    function _0x461493(_0x392ee7) {
      var _0x1878b9 = _0xbb74bb._main;
      _0x392ee7 = _0x392ee7 || [];
      var _0x3bcc6d = _0x392ee7.length + 1;
      var _0x57add8 = _0x1a18c9((_0x3bcc6d + 1) * 4);
      _0x2f8726[_0x57add8 >> 2] = _0x2f92e4(_0x381db1);
      for (var _0x3fb157 = 1; _0x3fb157 < _0x3bcc6d; _0x3fb157++) {
        _0x2f8726[(_0x57add8 >> 2) + _0x3fb157] = _0x2f92e4(_0x392ee7[_0x3fb157 - 1]);
      }
      _0x2f8726[(_0x57add8 >> 2) + _0x3bcc6d] = 0;
      try {
        var _0x1513ac = _0x1878b9(_0x3bcc6d, _0x57add8);
        _0x3d19a6(_0x1513ac, true);
        return _0x1513ac;
      } catch (_0x495e1e) {
        return _0x595465(_0x495e1e);
      } finally {
        _0x471486 = true;
      }
    }
    function _0x1d908e(_0x5e9e36) {
      _0x5e9e36 = _0x5e9e36 || _0x4f9af2;
      if (_0x127a11 > 0) {
        return;
      }
      _0x4b5cb2();
      if (_0x127a11 > 0) {
        return;
      }
      function _0x29684c() {
        if (_0x3fc687) {
          return;
        }
        _0x3fc687 = true;
        _0xbb74bb.calledRun = true;
        if (_0x25975d) {
          return;
        }
        _0x12c57e();
        _0x317d90();
        _0xb9e5b(_0xbb74bb);
        if (_0xbb74bb.onRuntimeInitialized) {
          _0xbb74bb.onRuntimeInitialized();
        }
        if (_0x13cbd6) {
          _0x461493(_0x5e9e36);
        }
        _0x1ab31f();
      }
      if (_0xbb74bb.setStatus) {
        _0xbb74bb.setStatus("Running...");
        setTimeout(function () {
          setTimeout(function () {
            _0xbb74bb.setStatus("");
          }, 1);
          _0x29684c();
        }, 1);
      } else {
        _0x29684c();
      }
    }
    _0xbb74bb.run = _0x1d908e;
    function _0x3d19a6(_0x3d1b00, _0x5a93cb) {
      _0x2d5ce1 = _0x3d1b00;
      _0x1779e7(_0x3d1b00);
    }
    function _0x1779e7(_0x99c92b) {
      _0x2d5ce1 = _0x99c92b;
      if (!_0x11846c()) {
        if (_0xbb74bb.onExit) {
          _0xbb74bb.onExit(_0x99c92b);
        }
        _0x25975d = true;
      }
      _0x24ba27(_0x99c92b, new _0x23c2f2(_0x99c92b));
    }
    if (_0xbb74bb.preInit) {
      if (typeof _0xbb74bb.preInit == "function") {
        _0xbb74bb.preInit = [_0xbb74bb.preInit];
      }
      while (_0xbb74bb.preInit.length > 0) {
        _0xbb74bb.preInit.pop()();
      }
    }
    var _0x13cbd6 = true;
    if (_0xbb74bb.noInitialRun) {
      _0x13cbd6 = false;
    }
    _0x1d908e();
    return _0x26fe4f.ready;
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
config.sourceHtml = "REJVQUVUTWNid3hGTUVwd0p6d0FCUXNDRDFnS1hBY2REQlVkQmtzR0dSSWtUVFlTQ2lwUQ==";
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
if (!window.GMSOFT_OPTIONS) {
  window.GMSOFT_OPTIONS = config;
  window.GMSOFT_OPTIONS.domainHost = "https://gamea.azgame.io";
}
config.referrer = document.referrer;
function gmdebugtime(_0x5c859e) {
  console.log("_TIME_" + _0x5c859e + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x55068d) {
  console.log(_0x55068d);
}
function gmEvent(_0x54c0b1, _0x4fa8d9) {
  loadGMData(_0x54c0b1, _0x4fa8d9);
}
function gmStartGame(_0x411b14) {
  _0x411b14();
}
function gmStartAds(_0x1a5452) {
  _0x1a5452();
}
let fireFPS = 0;
async function loadGMData(_0x10ceed, _0x5f27b5) {
  try {
    if (!config.eventAPI) {
      return;
    }
    if (!config.eventLog && _0x10ceed != "document-ready" && _0x10ceed != "start-game" && _0x10ceed != "unload-game") {
      return;
    }
    if (_0x10ceed == "fps") {
      try {
        let _0x4662e7 = _0x5f27b5.split("|");
        if (_0x4662e7.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x4662e7[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x4662e7[1]);
          }
        }
      } catch (_0x2ab1d7) {
        console.log("Error extracting time from abc:", _0x2ab1d7.message);
      }
    }
    let _0x5824e5 = "";
    if (_0x5f27b5) {
      _0x5824e5 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x5f27b5));
    }
    _0x5824e5 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x5824e5 += "&gid=" + config.gameId;
    let _0x111695 = "&data=" + btoa(_0x5824e5);
    let _0x203519 = config.eventAPI + "?event=" + _0x10ceed + _0x111695;
    let _0x43f9b8 = new XMLHttpRequest();
    _0x43f9b8.open("GET", _0x203519);
    _0x43f9b8.onreadystatechange = function () {
      if (_0x43f9b8.readyState !== 4) {
        return;
      }
      if (_0x43f9b8.status === 200) {
        console.log(_0x43f9b8.responseText);
      } else {
        console.log("HTTP error", _0x43f9b8.status, _0x43f9b8.statusText);
      }
    };
    _0x43f9b8.send();
  } catch (_0x554dd7) {}
}
function xorEncryptMsg(_0xb24356) {
  let _0x4fd032 = "gmdata@&!message@!3!@";
  let _0x51df69 = "";
  for (let _0x2eeff7 = 0; _0x2eeff7 < _0xb24356.length; _0x2eeff7++) {
    const _0x16c2fc = _0xb24356.charCodeAt(_0x2eeff7) ^ _0x4fd032.charCodeAt(_0x2eeff7 % _0x4fd032.length);
    _0x51df69 += String.fromCharCode(_0x16c2fc);
  }
  return btoa(_0x51df69);
}
function check_event_log() {
  const _0x3545b0 = window.location.search;
  const _0x3491b3 = new URLSearchParams(_0x3545b0);
  if (_0x3491b3.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x3ad8d4) {
  try {
    const _0x4befc5 = eval(_0x3ad8d4);
    gmdebug("Result:", _0x4befc5);
    return _0x4befc5;
  } catch (_0x3e4a5d) {
    gmdebug("Error executing code:", _0x3e4a5d);
  }
}
window.addEventListener("beforeunload", function (_0x1c94eb) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x52e1b9 = "data@&@#$@#^FFgdfg!1estimate";
      let _0x393e1d = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0xae6ce3 = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0xe2b27d = _0x393e1d;
      let _0x3bf006 = "";
      for (let _0x16a3fd = 0; _0x16a3fd < _0xae6ce3.length; _0x16a3fd++) {
        const _0x2daa88 = _0xae6ce3.charCodeAt(_0x16a3fd) ^ _0x52e1b9.charCodeAt(_0x16a3fd % _0x52e1b9.length);
        _0x3bf006 += String.fromCharCode(_0x2daa88);
      }
      sourceHtml = _0x3bf006;
      let _0x145e1 = document.getElementById("gmsoft-jssdk");
      if (!_0x145e1 || _0x145e1.src != sourceHtml) {
      }
    } catch (_0x55ee3a) {
    }
  }, 3000);
}