import Ember from 'ember';
import ModalInitializer from '../../../initializers/modal';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | modal', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  assert.expect(1);
  ModalInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
