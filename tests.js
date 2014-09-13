Tinytest.add('fs', function (test) {
  var isDefined = false;
  try {
    fs;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "fs is not defined");
  test.isTrue(Package.['peerlibrary:fs'].fs, "Package.peerlibrary:fs.fs is not defined");

  test.isTrue(fs._meteor, "Not fibers-enabled fs package");

  test.isTrue(fs.statSync._blocking, "Not a fibers-enabled synchronous (blocking) function");

  test.isTrue(fs.statSync('.'));

  // existsSync is a special case, let's test it
  test.isTrue(fs.existsSync('.'));
});
