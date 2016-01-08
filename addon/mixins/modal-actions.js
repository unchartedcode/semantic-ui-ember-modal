import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    close_modal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },

    open_modal: function() {
      var args = Array.prototype.slice.call(arguments);
      var name = args.shift();

      var controller = this.controllerFor('modal');
      controller.set('name', name);

      if (args.length > 1) {
        throw new Error("Unable to use more than a single extra parameter when dynamically invoking a modal");
      }

      if (args.length === 1) {
        controller.set('args', args[0]);
      } else {
        controller.set('args', Ember.Object.create());
      }

      this.render('modal', {
        outlet: 'modal',
        into: 'application'
      });
    }
  }
});
