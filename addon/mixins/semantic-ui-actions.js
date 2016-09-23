import Ember from 'ember';

export default Ember.Mixin.create({
  init() {
    this._super(...arguments);
    if (this.hasAction(this.get('parent'), 'register_child')) {
      this.get('parent.register_child')(this);
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this.execute('show');
  },

  onHidden() {
    this._super(...arguments);
    this.get('close_modal', this.get('modalId'));
  },

  // Remove, deprecated
  onApprove() {
    if (this.hasAction(this, 'approve')) {
      this.send('approve', this);
      return false;
    } else {
      return true;
    }
  },

  // Remove, deprecated
  onDeny() {
    if (this.hasAction(this, 'deny')) {
      this.send('deny', this);
      return false;
    } else {
      return true;
    }
  },

  // Remove, deprecated
  onHide() {
    if (this.hasAction(this, 'hide')) {
      this.send('hide', this);
      return true; // Keeping the semantics the same here, we can't stop a hide
    } else {
      return true;
    }
  },

  willDestroyElement() {
    this.execute('hide');
    this._super(...arguments);
  },

  hasAction(scope, action) {
    scope = scope || {};
    let actions = scope.actions || scope._actions || {};
    return !!actions[action];
  }
});
