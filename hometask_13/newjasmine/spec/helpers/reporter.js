const HtmlReporter = require('jasmine-pretty-html-reporter').Reporter;
const path = require('path');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter

jasmine.getEnv().clearReporters() //remove default reporter logs
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayPending: true,
    },
  })
)

jasmine.getEnv().addReporter(
  new HtmlReporter({
  path: path.join(__dirname,'results')
}));