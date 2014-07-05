Package.describe({
  summary: "fs node.js module with fiber-enabled synchronous functions"
});

Package.on_use(function (api) {
  api.use(['blocking', 'underscore', 'assert'], 'server');

  api.export('fs');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['fs', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});
