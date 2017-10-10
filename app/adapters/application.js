import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import AdminAdapterMixin from 'ember-admin/mixins/admin-adapter-mixin';

const { String: { pluralize, underscore } } = Ember;

export default JSONAPIAdapter.extend(AdminAdapterMixin, {

  pathForType(type) {
    return pluralize(underscore(type));
  }

});
