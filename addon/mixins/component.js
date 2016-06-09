import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    open_modal: function(name) {
      var args = Array.prototype.slice.call(arguments, 1);
      Ember.getOwner(this)
        .lookup('route:application')
        .send('open_modal', name, args.length > 0 ? args[0] : null);
    }
  }
});
