import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    open_modal: function() {
      let args = Array.prototype.slice.call(arguments);
      let name = args.shift();
      let options = args.shift();
      let controller = this.controllerFor('application');

      // Wire up the close event
      if (options == null) {
        options = {};
      }
      let modalId = Ember.guidFor(name);
      options.close_modal = this.generateCloseModal(controller, modalId);

      if (controller.get('modals') == null) {
        controller.set('modals', Ember.A());
      }
      controller.get('modals').pushObject({
        id: modalId,
        name: name,
        options: options
      });
    }
  },

  generateCloseModal(controller, modalId) {
    return function() {
      if (controller.get('isDestroyed') || controller.get('isDestroying')) { return; }
      controller.set('modals', controller.get('modals').rejectBy('id', modalId));
    };
  }
});
