'use strict';

// tests for slack-events
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('slack-events', '/slack/events/index.js', 'handler');

describe('slack-events', () => {
  before((done) => {
    done();
  });

  it('implement tests here', () => {
    return wrapped.run({}).then((response) => {
      expect(response).to.not.be.empty;
    });
  });
});
