(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle) {
    for (var key in bundle) {
      if (has(bundle, key)) {
        modules[key] = bundle[key];
      }
    }
  }

  globals.require = require;
  globals.require.define = define;
  globals.require.brunch = true;
})();

window.require.define({"test/app_spec": function(exports, require, module) {
  (function() {

    describe('Array', function() {
      return describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
          return expect(-1).to.equal([1, 2, 3].indexOf(4));
        });
        return it('should return 1 when the value is present at index 1', function() {
          return expect(1).to.equal([1, 2, 3].indexOf(2));
        });
      });
    });

  }).call(this);
  
}});

window.require.define({"test/javascripts/test": function(exports, require, module) {
  (function(/*! Brunch !*/) {
    'use strict';

    var globals = typeof window !== 'undefined' ? window : global;
    if (typeof globals.require === 'function') return;

    var modules = {};
    var cache = {};

    var has = function(object, name) {
      return ({}).hasOwnProperty.call(object, name);
    };

    var expand = function(root, name) {
      var results = [], parts, part;
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part === '..') {
          results.pop();
        } else if (part !== '.' && part !== '') {
          results.push(part);
        }
      }
      return results.join('/');
    };

    var dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };

    var localRequire = function(path) {
      return function(name) {
        var dir = dirname(path);
        var absolute = expand(dir, name);
        return globals.require(absolute);
      };
    };

    var initModule = function(name, definition) {
      var module = {id: name, exports: {}};
      definition(module.exports, localRequire(name), module);
      var exports = cache[name] = module.exports;
      return exports;
    };

    var require = function(name) {
      var path = expand(name, '.');

      if (has(cache, path)) return cache[path];
      if (has(modules, path)) return initModule(path, modules[path]);

      var dirIndex = expand(path, './index');
      if (has(cache, dirIndex)) return cache[dirIndex];
      if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

      throw new Error('Cannot find module "' + name + '"');
    };

    var define = function(bundle) {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    }

    globals.require = require;
    globals.require.define = define;
    globals.require.brunch = true;
  })();

  window.require.define({"test/app_spec": function(exports, require, module) {
    (function() {

      describe('Array', function() {
        return describe('#indexOf()', function() {
          it('should return -1 when the value is not present', function() {
            return expect(-1).to.equal([1, 2, 3].indexOf(4));
          });
          return it('should return 1 when the value is present at index 1', function() {
            return expect(1).to.equal([1, 2, 3].indexOf(2));
          });
        });
      });

    }).call(this);
    
  }});

  window.require.define({"test/javascripts/test": function(exports, require, module) {
    (function(/*! Brunch !*/) {
      'use strict';

      var globals = typeof window !== 'undefined' ? window : global;
      if (typeof globals.require === 'function') return;

      var modules = {};
      var cache = {};

      var has = function(object, name) {
        return ({}).hasOwnProperty.call(object, name);
      };

      var expand = function(root, name) {
        var results = [], parts, part;
        if (/^\.\.?(\/|$)/.test(name)) {
          parts = [root, name].join('/').split('/');
        } else {
          parts = name.split('/');
        }
        for (var i = 0, length = parts.length; i < length; i++) {
          part = parts[i];
          if (part === '..') {
            results.pop();
          } else if (part !== '.' && part !== '') {
            results.push(part);
          }
        }
        return results.join('/');
      };

      var dirname = function(path) {
        return path.split('/').slice(0, -1).join('/');
      };

      var localRequire = function(path) {
        return function(name) {
          var dir = dirname(path);
          var absolute = expand(dir, name);
          return globals.require(absolute);
        };
      };

      var initModule = function(name, definition) {
        var module = {id: name, exports: {}};
        definition(module.exports, localRequire(name), module);
        var exports = cache[name] = module.exports;
        return exports;
      };

      var require = function(name) {
        var path = expand(name, '.');

        if (has(cache, path)) return cache[path];
        if (has(modules, path)) return initModule(path, modules[path]);

        var dirIndex = expand(path, './index');
        if (has(cache, dirIndex)) return cache[dirIndex];
        if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

        throw new Error('Cannot find module "' + name + '"');
      };

      var define = function(bundle) {
        for (var key in bundle) {
          if (has(bundle, key)) {
            modules[key] = bundle[key];
          }
        }
      }

      globals.require = require;
      globals.require.define = define;
      globals.require.brunch = true;
    })();

    window.require.define({"test/app_spec": function(exports, require, module) {
      (function() {

        describe('Array', function() {
          return describe('#indexOf()', function() {
            return it('should return -1 when the value is not present', function() {
              return expect(-1).to.equal([1, 2, 3].indexOf(4));
            });
          });
        });

      }).call(this);
      
    }});

    window.require.define({"test/javascripts/test": function(exports, require, module) {
      (function(/*! Brunch !*/) {
        'use strict';

        var globals = typeof window !== 'undefined' ? window : global;
        if (typeof globals.require === 'function') return;

        var modules = {};
        var cache = {};

        var has = function(object, name) {
          return ({}).hasOwnProperty.call(object, name);
        };

        var expand = function(root, name) {
          var results = [], parts, part;
          if (/^\.\.?(\/|$)/.test(name)) {
            parts = [root, name].join('/').split('/');
          } else {
            parts = name.split('/');
          }
          for (var i = 0, length = parts.length; i < length; i++) {
            part = parts[i];
            if (part === '..') {
              results.pop();
            } else if (part !== '.' && part !== '') {
              results.push(part);
            }
          }
          return results.join('/');
        };

        var dirname = function(path) {
          return path.split('/').slice(0, -1).join('/');
        };

        var localRequire = function(path) {
          return function(name) {
            var dir = dirname(path);
            var absolute = expand(dir, name);
            return globals.require(absolute);
          };
        };

        var initModule = function(name, definition) {
          var module = {id: name, exports: {}};
          definition(module.exports, localRequire(name), module);
          var exports = cache[name] = module.exports;
          return exports;
        };

        var require = function(name) {
          var path = expand(name, '.');

          if (has(cache, path)) return cache[path];
          if (has(modules, path)) return initModule(path, modules[path]);

          var dirIndex = expand(path, './index');
          if (has(cache, dirIndex)) return cache[dirIndex];
          if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

          throw new Error('Cannot find module "' + name + '"');
        };

        var define = function(bundle) {
          for (var key in bundle) {
            if (has(bundle, key)) {
              modules[key] = bundle[key];
            }
          }
        }

        globals.require = require;
        globals.require.define = define;
        globals.require.brunch = true;
      })();

      window.require.define({"test/app_spec": function(exports, require, module) {
        (function() {

          describe('Array', function() {
            return describe('#indexOf()', function() {
              return it('should return -1 when the value is not present', function() {
                return expect(-1).to.equal([1, 2, 3].indexOf(4));
              });
            });
          });

        }).call(this);
        
      }});

      window.require.define({"test/javascripts/test": function(exports, require, module) {
        (function(/*! Brunch !*/) {
          'use strict';

          var globals = typeof window !== 'undefined' ? window : global;
          if (typeof globals.require === 'function') return;

          var modules = {};
          var cache = {};

          var has = function(object, name) {
            return ({}).hasOwnProperty.call(object, name);
          };

          var expand = function(root, name) {
            var results = [], parts, part;
            if (/^\.\.?(\/|$)/.test(name)) {
              parts = [root, name].join('/').split('/');
            } else {
              parts = name.split('/');
            }
            for (var i = 0, length = parts.length; i < length; i++) {
              part = parts[i];
              if (part === '..') {
                results.pop();
              } else if (part !== '.' && part !== '') {
                results.push(part);
              }
            }
            return results.join('/');
          };

          var dirname = function(path) {
            return path.split('/').slice(0, -1).join('/');
          };

          var localRequire = function(path) {
            return function(name) {
              var dir = dirname(path);
              var absolute = expand(dir, name);
              return globals.require(absolute);
            };
          };

          var initModule = function(name, definition) {
            var module = {id: name, exports: {}};
            definition(module.exports, localRequire(name), module);
            var exports = cache[name] = module.exports;
            return exports;
          };

          var require = function(name) {
            var path = expand(name, '.');

            if (has(cache, path)) return cache[path];
            if (has(modules, path)) return initModule(path, modules[path]);

            var dirIndex = expand(path, './index');
            if (has(cache, dirIndex)) return cache[dirIndex];
            if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

            throw new Error('Cannot find module "' + name + '"');
          };

          var define = function(bundle) {
            for (var key in bundle) {
              if (has(bundle, key)) {
                modules[key] = bundle[key];
              }
            }
          }

          globals.require = require;
          globals.require.define = define;
          globals.require.brunch = true;
        })();

        window.require.define({"test/app_spec": function(exports, require, module) {
          (function() {

            describe('Array', function() {
              return describe('#indexOf()', function() {
                return it('should return -1 when the value is not present', function() {
                  return expect(1).to.equal([1, 2, 3].indexOf(0));
                });
              });
            });

          }).call(this);
          
        }});

        window.require.define({"test/javascripts/test": function(exports, require, module) {
          (function(/*! Brunch !*/) {
            'use strict';

            var globals = typeof window !== 'undefined' ? window : global;
            if (typeof globals.require === 'function') return;

            var modules = {};
            var cache = {};

            var has = function(object, name) {
              return ({}).hasOwnProperty.call(object, name);
            };

            var expand = function(root, name) {
              var results = [], parts, part;
              if (/^\.\.?(\/|$)/.test(name)) {
                parts = [root, name].join('/').split('/');
              } else {
                parts = name.split('/');
              }
              for (var i = 0, length = parts.length; i < length; i++) {
                part = parts[i];
                if (part === '..') {
                  results.pop();
                } else if (part !== '.' && part !== '') {
                  results.push(part);
                }
              }
              return results.join('/');
            };

            var dirname = function(path) {
              return path.split('/').slice(0, -1).join('/');
            };

            var localRequire = function(path) {
              return function(name) {
                var dir = dirname(path);
                var absolute = expand(dir, name);
                return globals.require(absolute);
              };
            };

            var initModule = function(name, definition) {
              var module = {id: name, exports: {}};
              definition(module.exports, localRequire(name), module);
              var exports = cache[name] = module.exports;
              return exports;
            };

            var require = function(name) {
              var path = expand(name, '.');

              if (has(cache, path)) return cache[path];
              if (has(modules, path)) return initModule(path, modules[path]);

              var dirIndex = expand(path, './index');
              if (has(cache, dirIndex)) return cache[dirIndex];
              if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

              throw new Error('Cannot find module "' + name + '"');
            };

            var define = function(bundle) {
              for (var key in bundle) {
                if (has(bundle, key)) {
                  modules[key] = bundle[key];
                }
              }
            }

            globals.require = require;
            globals.require.define = define;
            globals.require.brunch = true;
          })();

          window.require.define({"test/app_spec": function(exports, require, module) {
            (function() {

              describe('Array', function() {
                return describe('#indexOf()', function() {
                  return it('should return -1 when the value is not present', function() {
                    expect(3).to.equal([1, 2, 3].indexOf(2));
                    return expect(1).to.equal([1, 2, 3].indexOf(0));
                  });
                });
              });

            }).call(this);
            
          }});

          window.require.define({"test/javascripts/test": function(exports, require, module) {
            (function(/*! Brunch !*/) {
              'use strict';

              var globals = typeof window !== 'undefined' ? window : global;
              if (typeof globals.require === 'function') return;

              var modules = {};
              var cache = {};

              var has = function(object, name) {
                return ({}).hasOwnProperty.call(object, name);
              };

              var expand = function(root, name) {
                var results = [], parts, part;
                if (/^\.\.?(\/|$)/.test(name)) {
                  parts = [root, name].join('/').split('/');
                } else {
                  parts = name.split('/');
                }
                for (var i = 0, length = parts.length; i < length; i++) {
                  part = parts[i];
                  if (part === '..') {
                    results.pop();
                  } else if (part !== '.' && part !== '') {
                    results.push(part);
                  }
                }
                return results.join('/');
              };

              var dirname = function(path) {
                return path.split('/').slice(0, -1).join('/');
              };

              var localRequire = function(path) {
                return function(name) {
                  var dir = dirname(path);
                  var absolute = expand(dir, name);
                  return globals.require(absolute);
                };
              };

              var initModule = function(name, definition) {
                var module = {id: name, exports: {}};
                definition(module.exports, localRequire(name), module);
                var exports = cache[name] = module.exports;
                return exports;
              };

              var require = function(name) {
                var path = expand(name, '.');

                if (has(cache, path)) return cache[path];
                if (has(modules, path)) return initModule(path, modules[path]);

                var dirIndex = expand(path, './index');
                if (has(cache, dirIndex)) return cache[dirIndex];
                if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

                throw new Error('Cannot find module "' + name + '"');
              };

              var define = function(bundle) {
                for (var key in bundle) {
                  if (has(bundle, key)) {
                    modules[key] = bundle[key];
                  }
                }
              }

              globals.require = require;
              globals.require.define = define;
              globals.require.brunch = true;
            })();

            window.require.define({"test/app_spec": function(exports, require, module) {
              (function() {
                var expect;

                expect = require("expect.js");

                describe('Array', function() {
                  return describe('#indexOf()', function() {
                    return it('should return -1 when the value is not present', function() {
                      expect(3).to.equal([1, 2, 3].indexOf(2));
                      return expect(1).to.equal([1, 2, 3].indexOf(0));
                    });
                  });
                });

              }).call(this);
              
            }});

            window.require.define({"test/javascripts/test": function(exports, require, module) {
              (function(/*! Brunch !*/) {
                'use strict';

                var globals = typeof window !== 'undefined' ? window : global;
                if (typeof globals.require === 'function') return;

                var modules = {};
                var cache = {};

                var has = function(object, name) {
                  return ({}).hasOwnProperty.call(object, name);
                };

                var expand = function(root, name) {
                  var results = [], parts, part;
                  if (/^\.\.?(\/|$)/.test(name)) {
                    parts = [root, name].join('/').split('/');
                  } else {
                    parts = name.split('/');
                  }
                  for (var i = 0, length = parts.length; i < length; i++) {
                    part = parts[i];
                    if (part === '..') {
                      results.pop();
                    } else if (part !== '.' && part !== '') {
                      results.push(part);
                    }
                  }
                  return results.join('/');
                };

                var dirname = function(path) {
                  return path.split('/').slice(0, -1).join('/');
                };

                var localRequire = function(path) {
                  return function(name) {
                    var dir = dirname(path);
                    var absolute = expand(dir, name);
                    return globals.require(absolute);
                  };
                };

                var initModule = function(name, definition) {
                  var module = {id: name, exports: {}};
                  definition(module.exports, localRequire(name), module);
                  var exports = cache[name] = module.exports;
                  return exports;
                };

                var require = function(name) {
                  var path = expand(name, '.');

                  if (has(cache, path)) return cache[path];
                  if (has(modules, path)) return initModule(path, modules[path]);

                  var dirIndex = expand(path, './index');
                  if (has(cache, dirIndex)) return cache[dirIndex];
                  if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

                  throw new Error('Cannot find module "' + name + '"');
                };

                var define = function(bundle) {
                  for (var key in bundle) {
                    if (has(bundle, key)) {
                      modules[key] = bundle[key];
                    }
                  }
                }

                globals.require = require;
                globals.require.define = define;
                globals.require.brunch = true;
              })();

              window.require.define({"test/app_spec": function(exports, require, module) {
                (function() {
                  var expect;

                  expect = require("expect.js");

                  describe('Array', function() {
                    return describe('#indexOf()', function() {
                      return it('should return -1 when the value is not present', function() {
                        expect(3).to.equal([1, 2, 3].indexOf(2));
                        return expect(1).to.equal([1, 2, 3].indexOf(0));
                      });
                    });
                  });

                }).call(this);
                
              }});

              window.require.define({"test/javascripts/test": function(exports, require, module) {
                (function(/*! Brunch !*/) {
                  'use strict';

                  var globals = typeof window !== 'undefined' ? window : global;
                  if (typeof globals.require === 'function') return;

                  var modules = {};
                  var cache = {};

                  var has = function(object, name) {
                    return ({}).hasOwnProperty.call(object, name);
                  };

                  var expand = function(root, name) {
                    var results = [], parts, part;
                    if (/^\.\.?(\/|$)/.test(name)) {
                      parts = [root, name].join('/').split('/');
                    } else {
                      parts = name.split('/');
                    }
                    for (var i = 0, length = parts.length; i < length; i++) {
                      part = parts[i];
                      if (part === '..') {
                        results.pop();
                      } else if (part !== '.' && part !== '') {
                        results.push(part);
                      }
                    }
                    return results.join('/');
                  };

                  var dirname = function(path) {
                    return path.split('/').slice(0, -1).join('/');
                  };

                  var localRequire = function(path) {
                    return function(name) {
                      var dir = dirname(path);
                      var absolute = expand(dir, name);
                      return globals.require(absolute);
                    };
                  };

                  var initModule = function(name, definition) {
                    var module = {id: name, exports: {}};
                    definition(module.exports, localRequire(name), module);
                    var exports = cache[name] = module.exports;
                    return exports;
                  };

                  var require = function(name) {
                    var path = expand(name, '.');

                    if (has(cache, path)) return cache[path];
                    if (has(modules, path)) return initModule(path, modules[path]);

                    var dirIndex = expand(path, './index');
                    if (has(cache, dirIndex)) return cache[dirIndex];
                    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

                    throw new Error('Cannot find module "' + name + '"');
                  };

                  var define = function(bundle) {
                    for (var key in bundle) {
                      if (has(bundle, key)) {
                        modules[key] = bundle[key];
                      }
                    }
                  }

                  globals.require = require;
                  globals.require.define = define;
                  globals.require.brunch = true;
                })();

                window.require.define({"test/app_spec": function(exports, require, module) {
                  (function() {

                    describe('Array', function() {
                      return describe('#indexOf()', function() {
                        return it('should return -1 when the value is not present', function() {
                          expect(3).to.equal([1, 2, 3].indexOf(2));
                          return expect(1).to.equal([1, 2, 3].indexOf(0));
                        });
                      });
                    });

                  }).call(this);
                  
                }});

                window.require.define({"test/javascripts/test": function(exports, require, module) {
                  (function(/*! Brunch !*/) {
                    'use strict';

                    var globals = typeof window !== 'undefined' ? window : global;
                    if (typeof globals.require === 'function') return;

                    var modules = {};
                    var cache = {};

                    var has = function(object, name) {
                      return ({}).hasOwnProperty.call(object, name);
                    };

                    var expand = function(root, name) {
                      var results = [], parts, part;
                      if (/^\.\.?(\/|$)/.test(name)) {
                        parts = [root, name].join('/').split('/');
                      } else {
                        parts = name.split('/');
                      }
                      for (var i = 0, length = parts.length; i < length; i++) {
                        part = parts[i];
                        if (part === '..') {
                          results.pop();
                        } else if (part !== '.' && part !== '') {
                          results.push(part);
                        }
                      }
                      return results.join('/');
                    };

                    var dirname = function(path) {
                      return path.split('/').slice(0, -1).join('/');
                    };

                    var localRequire = function(path) {
                      return function(name) {
                        var dir = dirname(path);
                        var absolute = expand(dir, name);
                        return globals.require(absolute);
                      };
                    };

                    var initModule = function(name, definition) {
                      var module = {id: name, exports: {}};
                      definition(module.exports, localRequire(name), module);
                      var exports = cache[name] = module.exports;
                      return exports;
                    };

                    var require = function(name) {
                      var path = expand(name, '.');

                      if (has(cache, path)) return cache[path];
                      if (has(modules, path)) return initModule(path, modules[path]);

                      var dirIndex = expand(path, './index');
                      if (has(cache, dirIndex)) return cache[dirIndex];
                      if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

                      throw new Error('Cannot find module "' + name + '"');
                    };

                    var define = function(bundle) {
                      for (var key in bundle) {
                        if (has(bundle, key)) {
                          modules[key] = bundle[key];
                        }
                      }
                    }

                    globals.require = require;
                    globals.require.define = define;
                    globals.require.brunch = true;
                  })();

                  window.require.define({"test/app_spec": function(exports, require, module) {
                    (function() {

                      describe('Array', function() {
                        return describe('#indexOf()', function() {
                          return it('should return -1 when the value is not present', function() {
                            expect(3).to.equal([1, 2, 3].indexOf(2));
                            return expect(1).to.equal([1, 2, 3].indexOf(0));
                          });
                        });
                      });

                    }).call(this);
                    
                  }});

                  window.require.define({"test/javascripts/test": function(exports, require, module) {
                    (function(/*! Brunch !*/) {
                      'use strict';

                      var globals = typeof window !== 'undefined' ? window : global;
                      if (typeof globals.require === 'function') return;

                      var modules = {};
                      var cache = {};

                      var has = function(object, name) {
                        return ({}).hasOwnProperty.call(object, name);
                      };

                      var expand = function(root, name) {
                        var results = [], parts, part;
                        if (/^\.\.?(\/|$)/.test(name)) {
                          parts = [root, name].join('/').split('/');
                        } else {
                          parts = name.split('/');
                        }
                        for (var i = 0, length = parts.length; i < length; i++) {
                          part = parts[i];
                          if (part === '..') {
                            results.pop();
                          } else if (part !== '.' && part !== '') {
                            results.push(part);
                          }
                        }
                        return results.join('/');
                      };

                      var dirname = function(path) {
                        return path.split('/').slice(0, -1).join('/');
                      };

                      var localRequire = function(path) {
                        return function(name) {
                          var dir = dirname(path);
                          var absolute = expand(dir, name);
                          return globals.require(absolute);
                        };
                      };

                      var initModule = function(name, definition) {
                        var module = {id: name, exports: {}};
                        definition(module.exports, localRequire(name), module);
                        var exports = cache[name] = module.exports;
                        return exports;
                      };

                      var require = function(name) {
                        var path = expand(name, '.');

                        if (has(cache, path)) return cache[path];
                        if (has(modules, path)) return initModule(path, modules[path]);

                        var dirIndex = expand(path, './index');
                        if (has(cache, dirIndex)) return cache[dirIndex];
                        if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

                        throw new Error('Cannot find module "' + name + '"');
                      };

                      var define = function(bundle) {
                        for (var key in bundle) {
                          if (has(bundle, key)) {
                            modules[key] = bundle[key];
                          }
                        }
                      }

                      globals.require = require;
                      globals.require.define = define;
                      globals.require.brunch = true;
                    })();

                    window.require.define({"test/app_spec": function(exports, require, module) {
                      (function() {
                        var expect;

                        expect = require("expect.js");

                        describe('Array', function() {
                          return describe('#indexOf()', function() {
                            return it('should return -1 when the value is not present', function() {
                              expect(3).to.equal([1, 2, 3].indexOf(2));
                              return expect(1).to.equal([1, 2, 3].indexOf(0));
                            });
                          });
                        });

                      }).call(this);
                      
                    }});

                    window.require.define({"test/javascripts/test": function(exports, require, module) {
                      (function(/*! Brunch !*/) {
                        'use strict';

                        var globals = typeof window !== 'undefined' ? window : global;
                        if (typeof globals.require === 'function') return;

                        var modules = {};
                        var cache = {};

                        var has = function(object, name) {
                          return ({}).hasOwnProperty.call(object, name);
                        };

                        var expand = function(root, name) {
                          var results = [], parts, part;
                          if (/^\.\.?(\/|$)/.test(name)) {
                            parts = [root, name].join('/').split('/');
                          } else {
                            parts = name.split('/');
                          }
                          for (var i = 0, length = parts.length; i < length; i++) {
                            part = parts[i];
                            if (part === '..') {
                              results.pop();
                            } else if (part !== '.' && part !== '') {
                              results.push(part);
                            }
                          }
                          return results.join('/');
                        };

                        var dirname = function(path) {
                          return path.split('/').slice(0, -1).join('/');
                        };

                        var localRequire = function(path) {
                          return function(name) {
                            var dir = dirname(path);
                            var absolute = expand(dir, name);
                            return globals.require(absolute);
                          };
                        };

                        var initModule = function(name, definition) {
                          var module = {id: name, exports: {}};
                          definition(module.exports, localRequire(name), module);
                          var exports = cache[name] = module.exports;
                          return exports;
                        };

                        var require = function(name) {
                          var path = expand(name, '.');

                          if (has(cache, path)) return cache[path];
                          if (has(modules, path)) return initModule(path, modules[path]);

                          var dirIndex = expand(path, './index');
                          if (has(cache, dirIndex)) return cache[dirIndex];
                          if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

                          throw new Error('Cannot find module "' + name + '"');
                        };

                        var define = function(bundle) {
                          for (var key in bundle) {
                            if (has(bundle, key)) {
                              modules[key] = bundle[key];
                            }
                          }
                        }

                        globals.require = require;
                        globals.require.define = define;
                        globals.require.brunch = true;
                      })();

                      window.require.define({"test/app_spec": function(exports, require, module) {
                        (function() {
                          var expect;

                          expect = require("expect.js");

                          describe('Array', function() {
                            return describe('#indexOf()', function() {
                              return it('should return -1 when the value is not present', function() {
                                expect(3).to.equal([1, 2, 3].indexOf(2));
                                return expect(1).to.equal([1, 2, 3].indexOf(0));
                              });
                            });
                          });

                        }).call(this);
                        
                      }});

                      window.require.define({"test/javascripts/test": function(exports, require, module) {
                        (function(/*! Brunch !*/) {
                          'use strict';

                          var globals = typeof window !== 'undefined' ? window : global;
                          if (typeof globals.require === 'function') return;

                          var modules = {};
                          var cache = {};

                          var has = function(object, name) {
                            return ({}).hasOwnProperty.call(object, name);
                          };

                          var expand = function(root, name) {
                            var results = [], parts, part;
                            if (/^\.\.?(\/|$)/.test(name)) {
                              parts = [root, name].join('/').split('/');
                            } else {
                              parts = name.split('/');
                            }
                            for (var i = 0, length = parts.length; i < length; i++) {
                              part = parts[i];
                              if (part === '..') {
                                results.pop();
                              } else if (part !== '.' && part !== '') {
                                results.push(part);
                              }
                            }
                            return results.join('/');
                          };

                          var dirname = function(path) {
                            return path.split('/').slice(0, -1).join('/');
                          };

                          var localRequire = function(path) {
                            return function(name) {
                              var dir = dirname(path);
                              var absolute = expand(dir, name);
                              return globals.require(absolute);
                            };
                          };

                          var initModule = function(name, definition) {
                            var module = {id: name, exports: {}};
                            definition(module.exports, localRequire(name), module);
                            var exports = cache[name] = module.exports;
                            return exports;
                          };

                          var require = function(name) {
                            var path = expand(name, '.');

                            if (has(cache, path)) return cache[path];
                            if (has(modules, path)) return initModule(path, modules[path]);

                            var dirIndex = expand(path, './index');
                            if (has(cache, dirIndex)) return cache[dirIndex];
                            if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

                            throw new Error('Cannot find module "' + name + '"');
                          };

                          var define = function(bundle) {
                            for (var key in bundle) {
                              if (has(bundle, key)) {
                                modules[key] = bundle[key];
                              }
                            }
                          }

                          globals.require = require;
                          globals.require.define = define;
                          globals.require.brunch = true;
                        })();

                        window.require.define({"test/app_spec": function(exports, require, module) {
                          (function() {
                            var expect;

                            expect = require("expect.js");

                            describe('Array', function() {
                              return describe('#indexOf()', function() {
                                return it('should return -1 when the value is not present', function() {
                                  expect(3).to.equal([1, 2, 3].indexOf(2));
                                  return expect(1).to.equal([1, 2, 3].indexOf(0));
                                });
                              });
                            });

                          }).call(this);
                          
                        }});

                        window.require.define({"test/javascripts/test": function(exports, require, module) {
                          (function(/*! Brunch !*/) {
                            'use strict';

                            var globals = typeof window !== 'undefined' ? window : global;
                            if (typeof globals.require === 'function') return;

                            var modules = {};
                            var cache = {};

                            var has = function(object, name) {
                              return ({}).hasOwnProperty.call(object, name);
                            };

                            var expand = function(root, name) {
                              var results = [], parts, part;
                              if (/^\.\.?(\/|$)/.test(name)) {
                                parts = [root, name].join('/').split('/');
                              } else {
                                parts = name.split('/');
                              }
                              for (var i = 0, length = parts.length; i < length; i++) {
                                part = parts[i];
                                if (part === '..') {
                                  results.pop();
                                } else if (part !== '.' && part !== '') {
                                  results.push(part);
                                }
                              }
                              return results.join('/');
                            };

                            var dirname = function(path) {
                              return path.split('/').slice(0, -1).join('/');
                            };

                            var localRequire = function(path) {
                              return function(name) {
                                var dir = dirname(path);
                                var absolute = expand(dir, name);
                                return globals.require(absolute);
                              };
                            };

                            var initModule = function(name, definition) {
                              var module = {id: name, exports: {}};
                              definition(module.exports, localRequire(name), module);
                              var exports = cache[name] = module.exports;
                              return exports;
                            };

                            var require = function(name) {
                              var path = expand(name, '.');

                              if (has(cache, path)) return cache[path];
                              if (has(modules, path)) return initModule(path, modules[path]);

                              var dirIndex = expand(path, './index');
                              if (has(cache, dirIndex)) return cache[dirIndex];
                              if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

                              throw new Error('Cannot find module "' + name + '"');
                            };

                            var define = function(bundle) {
                              for (var key in bundle) {
                                if (has(bundle, key)) {
                                  modules[key] = bundle[key];
                                }
                              }
                            }

                            globals.require = require;
                            globals.require.define = define;
                            globals.require.brunch = true;
                          })();

                          window.require.define({"test/app_spec": function(exports, require, module) {
                            (function() {

                              describe('Array', function() {
                                return describe('#indexOf()', function() {
                                  return it('should return -1 when the value is not present', function() {
                                    assert.equal(3, [1, 2, 3].indexOf(2));
                                    return assert.equal(1, [1, 2, 3].indexOf(0));
                                  });
                                });
                              });

                            }).call(this);
                            
                          }});

                          window.require.define({"test/javascripts/test": function(exports, require, module) {
                            (function(/*! Brunch !*/) {
                              'use strict';

                              var globals = typeof window !== 'undefined' ? window : global;
                              if (typeof globals.require === 'function') return;

                              var modules = {};
                              var cache = {};

                              var has = function(object, name) {
                                return ({}).hasOwnProperty.call(object, name);
                              };

                              var expand = function(root, name) {
                                var results = [], parts, part;
                                if (/^\.\.?(\/|$)/.test(name)) {
                                  parts = [root, name].join('/').split('/');
                                } else {
                                  parts = name.split('/');
                                }
                                for (var i = 0, length = parts.length; i < length; i++) {
                                  part = parts[i];
                                  if (part === '..') {
                                    results.pop();
                                  } else if (part !== '.' && part !== '') {
                                    results.push(part);
                                  }
                                }
                                return results.join('/');
                              };

                              var dirname = function(path) {
                                return path.split('/').slice(0, -1).join('/');
                              };

                              var localRequire = function(path) {
                                return function(name) {
                                  var dir = dirname(path);
                                  var absolute = expand(dir, name);
                                  return globals.require(absolute);
                                };
                              };

                              var initModule = function(name, definition) {
                                var module = {id: name, exports: {}};
                                definition(module.exports, localRequire(name), module);
                                var exports = cache[name] = module.exports;
                                return exports;
                              };

                              var require = function(name) {
                                var path = expand(name, '.');

                                if (has(cache, path)) return cache[path];
                                if (has(modules, path)) return initModule(path, modules[path]);

                                var dirIndex = expand(path, './index');
                                if (has(cache, dirIndex)) return cache[dirIndex];
                                if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

                                throw new Error('Cannot find module "' + name + '"');
                              };

                              var define = function(bundle) {
                                for (var key in bundle) {
                                  if (has(bundle, key)) {
                                    modules[key] = bundle[key];
                                  }
                                }
                              }

                              globals.require = require;
                              globals.require.define = define;
                              globals.require.brunch = true;
                            })();

                            window.require.define({"test/app_spec": function(exports, require, module) {
                              (function() {

                                describe('Array', function() {
                                  return describe('#indexOf()', function() {
                                    return it('should return -1 when the value is not present', function() {
                                      assert.equal(-1, [1, 2, 3].indexOf(5));
                                      return assert.equal(-1, [1, 2, 3].indexOf(0));
                                    });
                                  });
                                });

                              }).call(this);
                              
                            }});

                            window.require.define({"test/javascripts/test": function(exports, require, module) {
                              (function(/*! Brunch !*/) {
                                'use strict';

                                var globals = typeof window !== 'undefined' ? window : global;
                                if (typeof globals.require === 'function') return;

                                var modules = {};
                                var cache = {};

                                var has = function(object, name) {
                                  return ({}).hasOwnProperty.call(object, name);
                                };

                                var expand = function(root, name) {
                                  var results = [], parts, part;
                                  if (/^\.\.?(\/|$)/.test(name)) {
                                    parts = [root, name].join('/').split('/');
                                  } else {
                                    parts = name.split('/');
                                  }
                                  for (var i = 0, length = parts.length; i < length; i++) {
                                    part = parts[i];
                                    if (part === '..') {
                                      results.pop();
                                    } else if (part !== '.' && part !== '') {
                                      results.push(part);
                                    }
                                  }
                                  return results.join('/');
                                };

                                var dirname = function(path) {
                                  return path.split('/').slice(0, -1).join('/');
                                };

                                var localRequire = function(path) {
                                  return function(name) {
                                    var dir = dirname(path);
                                    var absolute = expand(dir, name);
                                    return globals.require(absolute);
                                  };
                                };

                                var initModule = function(name, definition) {
                                  var module = {id: name, exports: {}};
                                  definition(module.exports, localRequire(name), module);
                                  var exports = cache[name] = module.exports;
                                  return exports;
                                };

                                var require = function(name) {
                                  var path = expand(name, '.');

                                  if (has(cache, path)) return cache[path];
                                  if (has(modules, path)) return initModule(path, modules[path]);

                                  var dirIndex = expand(path, './index');
                                  if (has(cache, dirIndex)) return cache[dirIndex];
                                  if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

                                  throw new Error('Cannot find module "' + name + '"');
                                };

                                var define = function(bundle) {
                                  for (var key in bundle) {
                                    if (has(bundle, key)) {
                                      modules[key] = bundle[key];
                                    }
                                  }
                                }

                                globals.require = require;
                                globals.require.define = define;
                                globals.require.brunch = true;
                              })();

                              window.require.define({"test/app_spec": function(exports, require, module) {
                                (function() {
                                  var assert;

                                  assert = require('assert');

                                  describe('Array', function() {
                                    return describe('#indexOf()', function() {
                                      return it('should return -1 when the value is not present', function() {
                                        assert.equal(-1, [1, 2, 3].indexOf(5));
                                        return assert.equal(-1, [1, 2, 3].indexOf(0));
                                      });
                                    });
                                  });

                                }).call(this);
                                
                              }});

                              window.require.define({"test/javascripts/test": function(exports, require, module) {
                                (function(/*! Brunch !*/) {
                                  'use strict';

                                  var globals = typeof window !== 'undefined' ? window : global;
                                  if (typeof globals.require === 'function') return;

                                  var modules = {};
                                  var cache = {};

                                  var has = function(object, name) {
                                    return ({}).hasOwnProperty.call(object, name);
                                  };

                                  var expand = function(root, name) {
                                    var results = [], parts, part;
                                    if (/^\.\.?(\/|$)/.test(name)) {
                                      parts = [root, name].join('/').split('/');
                                    } else {
                                      parts = name.split('/');
                                    }
                                    for (var i = 0, length = parts.length; i < length; i++) {
                                      part = parts[i];
                                      if (part === '..') {
                                        results.pop();
                                      } else if (part !== '.' && part !== '') {
                                        results.push(part);
                                      }
                                    }
                                    return results.join('/');
                                  };

                                  var dirname = function(path) {
                                    return path.split('/').slice(0, -1).join('/');
                                  };

                                  var localRequire = function(path) {
                                    return function(name) {
                                      var dir = dirname(path);
                                      var absolute = expand(dir, name);
                                      return globals.require(absolute);
                                    };
                                  };

                                  var initModule = function(name, definition) {
                                    var module = {id: name, exports: {}};
                                    definition(module.exports, localRequire(name), module);
                                    var exports = cache[name] = module.exports;
                                    return exports;
                                  };

                                  var require = function(name) {
                                    var path = expand(name, '.');

                                    if (has(cache, path)) return cache[path];
                                    if (has(modules, path)) return initModule(path, modules[path]);

                                    var dirIndex = expand(path, './index');
                                    if (has(cache, dirIndex)) return cache[dirIndex];
                                    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

                                    throw new Error('Cannot find module "' + name + '"');
                                  };

                                  var define = function(bundle) {
                                    for (var key in bundle) {
                                      if (has(bundle, key)) {
                                        modules[key] = bundle[key];
                                      }
                                    }
                                  }

                                  globals.require = require;
                                  globals.require.define = define;
                                  globals.require.brunch = true;
                                })();

                                window.require.define({"test/app_spec": function(exports, require, module) {
                                  (function() {
                                    var assert;

                                    assert = require('assert');

                                    describe('Array', function() {
                                      return describe('#indexOf()', function() {
                                        return it('should return -1 when the value is not present', function() {
                                          assert.equal(-1, [1, 2, 3].indexOf(5));
                                          return assert.equal(-1, [1, 2, 3].indexOf(0));
                                        });
                                      });
                                    });

                                  }).call(this);
                                  
                                }});

                                window.require('test/app_spec');
                                
                              }});

                              window.require('test/app_spec');
                              
                            }});

                            window.require('test/app_spec');
                            
                          }});

                          window.require('test/app_spec');
                          
                        }});

                        window.require('test/app_spec');
                        
                      }});

                      window.require('test/app_spec');
                      
                    }});

                    window.require('test/app_spec');
                    
                  }});

                  window.require.define({"test/test-helpers": function(exports, require, module) {
                    (function() {
                      var expect;

                      expect = require('expect');

                    }).call(this);
                    
                  }});

                  window.require('test/app_spec');
                  
                }});

                window.require.define({"test/test-helpers": function(exports, require, module) {
                  (function() {
                    var expect;

                    expect = require('expect.js');

                  }).call(this);
                  
                }});

                window.require('test/app_spec');
                
              }});

              window.require.define({"test/test-helpers": function(exports, require, module) {
                (function() {
                  var expect;

                  expect = require('expect.js');

                }).call(this);
                
              }});

              window.require('test/app_spec');
              
            }});

            window.require.define({"test/test-helpers": function(exports, require, module) {
              (function() {
                var expect;

                expect = require('expect.js');

                module.exports = {
                  expect: expect
                };

              }).call(this);
              
            }});

            window.require('test/app_spec');
            
          }});

          window.require.define({"test/test-helpers": function(exports, require, module) {
            (function() {
              var expect;

              expect = require('expect.js');

              module.exports = {
                expect: expect
              };

            }).call(this);
            
          }});

          window.require('test/app_spec');
          
        }});

        window.require.define({"test/test-helpers": function(exports, require, module) {
          (function() {
            var expect;

            expect = require('expect.js');

            module.exports = {
              expect: expect
            };

          }).call(this);
          
        }});

        window.require('test/app_spec');
        
      }});

      window.require.define({"test/test-helpers": function(exports, require, module) {
        (function() {
          var expect;

          expect = require('expect.js');

          module.exports = {
            expect: expect
          };

        }).call(this);
        
      }});

      window.require('test/app_spec');
      
    }});

    window.require.define({"test/test-helpers": function(exports, require, module) {
      (function() {
        var expect;

        expect = require('expect.js');

        module.exports = {
          expect: expect
        };

      }).call(this);
      
    }});

    window.require('test/app_spec');
    
  }});

  window.require.define({"test/test-helpers": function(exports, require, module) {
    (function() {
      var expect;

      expect = require('expect.js');

      module.exports = {
        expect: expect
      };

    }).call(this);
    
  }});

  window.require('test/app_spec');
  
}});

window.require.define({"test/test-helpers": function(exports, require, module) {
  (function() {
    var expect;

    expect = require('expect.js');

    module.exports = {
      expect: expect
    };

  }).call(this);
  
}});

window.require('test/app_spec');
