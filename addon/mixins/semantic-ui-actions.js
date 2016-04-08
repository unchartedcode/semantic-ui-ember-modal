import Ember from 'ember';

export default Ember.Mixin.create({
  notifyParent: Ember.on('willInsertElement', function() {
    if (this.get('parent') &&
       this.get('parent').actions &&
       this.get('parent').actions['register_child']) {
      this.get('parent').send('register_child', this);
    }
  }),

  onShow: function() {
    if (this.actions && this.actions['show']) {
      this.send('show', this);
      return false;
    } else {
      return true;
    }
  },

  onApprove: function() {
    if (this.actions && this.actions['approve']) {
      this.send('approve', this);
      return false;
    } else {
      return true;
    }
  },

  onDeny: function() {
    if (this.actions && this.actions['deny']) {
      this.send('deny', this);
      return false;
    } else {
      return true;
    }
  },

  onHide: function() {
    if (this.actions && this.actions['hide']) {
      this.send('hide', this);
      return true; // Keeping the semantics the same here, we can't stop a hide
    } else {
      return true;
    }
  },

  shutDown: Ember.on('willDestroyElement', function() {
    this.execute('hide');
  })
});
