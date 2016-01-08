import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    send_close_modal: function() {
      this.send('close_modal');
    },

    register_child: function(component) {
      var keys = Object.keys(this.get('args') || {});
      for (var i = keys.length - 1; i >= 0; i--) {
        let key = keys[i];
        component.set(key, this.get(`args.${key}`));
      }
    }
  }
});
