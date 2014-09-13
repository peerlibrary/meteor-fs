Package.describe({
  summary: "fs node.js module with fiber-enabled synchronous functions",
  version: '0.1.5',
  name: 'mrt:fs',
  git: 'https://github.com/peerlibrary/meteor-fs.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:fs@0.1.5');
});
