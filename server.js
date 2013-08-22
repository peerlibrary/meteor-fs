var originalFs = Npm.require('fs');

fs = _.clone(originalFs);

// We set _meteor so that we can be sure and check we are getting our version of fs package
fs._meteor = true;

// We change all *Sync functions to fibers-enabled synchronous (blocking) ones
_.each(fs, function (value, name, obj) {
  var nonSyncName = name.replace(/Sync$/, '');
  if (name === nonSyncName) {
    return;
  }
  obj[name] = blocking(originalFs[nonSyncName]);
});