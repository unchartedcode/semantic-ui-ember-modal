import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    if (this.$('.ui.modal .ui.close.button').length > 0) {
      this.$('.ui.modal')
        .modal('attach events', '.ui.close.button', 'hide');
    }

    this.$('.ui.modal')
      .modal('show');
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$('.ui.modal').modal('hide');
  }
});
