import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import Application from '@ember/application';
import { initialize } from 'my-app/initializers/foo';
import { run } from '@ember/runloop';

describe('Unit | Initializer | foo', function() {
  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.initializer({
      name: 'initializer under test',
      initialize
    });

    this.application = this.TestApplication.create({ autoboot: false });
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  // Replace this with your real tests.
  it('works', async function() {
    await this.application.boot();

    // you would normally confirm the results of the initializer here
    expect(true).to.be.ok;
  });
});
