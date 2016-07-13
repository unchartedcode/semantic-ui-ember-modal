import Ember from 'ember';

export default Ember.Mixin.create({

  willInitSemantic(settings) {
    this._super(...arguments);
    // Default properties
    this.setDefault(settings, 'detachable', false);
    this.setDefault(settings, 'observeChanges', true);
    // Possible properties
    this.setDefault(settings, 'autofocus');
    this.setDefault(settings, 'allowMultiple');
    this.setDefault(settings, 'closable');
    // You'll have to manually add to willInitSemantic if you want this
    // Since ember has a context object, it screws with the modal
    // this.setDefault(settings, 'context');
    this.setDefault(settings, 'dimmerSettings');
    this.setDefault(settings, 'duration');
    this.setDefault(settings, 'offset');
    this.setDefault(settings, 'queue')
    this.setDefault(settings, 'transition');

    // check for methods
    this.setMethod(settings, 'onShow');
    this.setMethod(settings, 'onVisible');
    this.setMethod(settings, 'onHide');
    this.setMethod(settings, 'onHidden');
    this.setMethod(settings, 'onApprove');
    this.setMethod(settings, 'onDeny');
  },

  setDefault(settings, property, defaultSetting) {
    if (settings[property] == null) {
      if (this.get(property) != null) {
        settings[property] = this.get(property);
      } else if (defaultSetting != null) {
        settings[property] = defaultSetting;
      }
    }
  },

  setMethod(settings, methodName) {
    if (settings[methodName] == null) {
      if (typeof this.get(methodName) === 'function') {
        settings[methodName] = this.get(methodName);
      }
    }
  }
});
