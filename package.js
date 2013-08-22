Package.describe({
  summary: "Meteor smart package for fs node.js module"
});

Package.on_use(function (api) {
  api.use(['blocking'], 'server');

  api.export('fs');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['fs', 'tinytest', 'test-helpers'], ['server']);
  api.add_files('tests.js', ['server']);
});