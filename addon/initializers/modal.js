import Ember from 'ember';
import UiModal from 'semantic-ui-ember/components/ui-modal';
import SemanticUiActionsMixin from 'modal/mixins/semantic-ui-actions';
import SemanticUiDefaultsMixin from 'modal/mixins/semantic-ui-defaults';
import ComponentMixin from 'modal/mixins/component';

export function initialize(/* application */) {
  UiModal.reopen(SemanticUiDefaultsMixin, SemanticUiActionsMixin);
  Ember.Component.reopen(ComponentMixin);
}

export default {
  name: 'modal',
  initialize
};
