import Ember from 'ember';
import ComponentMixin from 'semantic-ui-ember-modal/mixins/component';
import { module, test } from 'qunit';

module('Unit | Mixin | component');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.expect(1);
  let ComponentObject = Ember.Object.extend(ComponentMixin);
  let subject = ComponentObject.create();
  assert.ok(subject);
});
