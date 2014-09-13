Package.describe({
  summary: "fs node.js module with fiber-enabled synchronous functions",
  version: '0.1.5',
  name: 'peerlibrary:fs',
  git: 'https://github.com/peerlibrary/meteor-fs.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use(['peerlibrary:blocking@0.4.2', 'underscore', 'peerlibrary:assert@0.2.5'], 'server');

  api.export('fs');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['peerlibrary:fs', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});
