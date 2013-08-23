var originalFs = Npm.require('fs');

fs = _.clone(originalFs);

assert.ok(!fs._meteor);

// We set _meteor so that we can be sure and check we are getting our version of fs package
fs._meteor = true;

// We change all *Sync functions to fibers-enabled synchronous (blocking) ones
_.each(fs, function (value, name, obj) {
  var nonSyncName = name.replace(/Sync$/, '');
  if (name === nonSyncName || name === 'existsSync') {
    return;
  }
  obj[name] = blocking(obj[nonSyncName]);
});

// "existsSync" is a special case because "exists" has different signature
fs.existsSync = blocking(function (path, cb) {
  fs.exists(path, function (exists) {
    cb(null, exists);
  });
});