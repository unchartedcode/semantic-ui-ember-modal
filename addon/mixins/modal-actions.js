import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    open_modal: function() {
      let args = Array.prototype.slice.call(arguments);
      let name = args.shift();
      let controller = this.controllerFor('application');

      // Wire up the close event
      args[0].modalId = Ember.guidFor(name);
      args[0].close_modal = function(modalId) {
        controller.set('modals', controller.get('modals').rejectBy('id', modalId));
      };

      if (controller.get('modals') == null) {
        controller.set('modals', Ember.A());
      }
      controller.get('modals').pushObject({
        id: args[0].modalId,
        name: name,
        args: args || []
      });
    }
  }
});
