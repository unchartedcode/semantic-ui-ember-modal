import Ember from 'ember';

export default Ember.Mixin.create({
  notifyParent: Ember.on('willInsertElement', function() {
    if (this.get('parent') &&
       this.get('parent')._actions &&
       this.get('parent')._actions['register_child']) {
      this.get('parent').send('register_child', this);
    }
  }),

  onShow: function() {
    if (this._actions && this._actions['show']) {
      this.send('show', this);
      return false;
    } else {
      return true;
    }
  },

  onApprove: function() {
    if (this._actions && this._actions['approve']) {
      this.send('approve', this);
      return false;
    } else {
      return true;
    }
  },

  onDeny: function() {
    if (this._actions && this._actions['deny']) {
      this.send('deny', this);
      return false;
    } else {
      return true;
    }
  },

  onHide: function() {
    if (this._actions && this._actions['hide']) {
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
