import Ember from 'ember';
import ModalActionsMixin from 'semantic-ui-ember-modal/mixins/modal-actions';
import { module, test } from 'qunit';

module('Unit | Mixin | modal actions');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.expect(1);
  let ModalActionsObject = Ember.Object.extend(ModalActionsMixin);
  let subject = ModalActionsObject.create();
  assert.ok(subject);
});
