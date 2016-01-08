import Ember from 'ember';
import SemanticUiDefaultsMixin from '../../../mixins/semantic-ui-defaults';
import { module, test } from 'qunit';

module('Unit | Mixin | semantic ui defaults');

// Replace this with your real tests.
test('it works', function(assert) {
  let SemanticUiDefaultsObject = Ember.Object.extend(SemanticUiDefaultsMixin);
  let subject = SemanticUiDefaultsObject.create();
  assert.ok(subject);
});
