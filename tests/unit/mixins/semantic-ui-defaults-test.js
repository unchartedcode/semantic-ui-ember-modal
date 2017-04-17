import Ember from 'ember';
import SemanticUiDefaultsMixin from 'semantic-ui-ember-modal/mixins/semantic-ui-defaults';
import { module, test } from 'qunit';

module('Unit | Mixin | semantic ui defaults');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.expect(1);
  let SemanticUiDefaultsObject = Ember.Object.extend(SemanticUiDefaultsMixin);
  let subject = SemanticUiDefaultsObject.create();
  assert.ok(subject);
});
