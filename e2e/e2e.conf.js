/**
 * Created by Anton on 02/06/2016.
 */
exports.config = {
  //test will run in order noted as below
  specs: [
    'specs/login/login-spec.js'
  ],
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://0.0.0.0:8086/',
  framework: 'mocha',
  browserName: 'chrome',


  // reporter:"/Applications/WebStorm.app/Contents/plugins/NodeJS/js/mocha-intellij/lib/mochaIntellijReporter.js",
  //   ui:"bdd",
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};