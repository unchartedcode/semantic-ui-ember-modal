import Ember from 'ember';
import ComponentMixin from '../../../mixins/component';
import { module, test } from 'qunit';

module('Unit | Mixin | component');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentObject = Ember.Object.extend(ComponentMixin);
  let subject = ComponentObject.create();
  assert.ok(subject);
});
