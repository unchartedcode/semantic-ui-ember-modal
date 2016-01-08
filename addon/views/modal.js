import Ember from 'ember';

export default Ember.Component.extend({
  insert: Ember.on('didInsertElement', function() {
    if (this.$('.ui.modal .ui.close.button').length > 0) {
      this.$('.ui.modal')
        .modal('attach events', '.ui.close.button', 'hide');
    }

    this.$('.ui.modal')
      .modal('show');
  }),

  destroy: Ember.on('willDestroyElement', function() {
    this.$('.ui.modal').modal('hide');
  })
});
