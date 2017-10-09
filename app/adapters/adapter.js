import AdminAdapterMixin from 'ember-admin/mixins/admin-adapter-mixin';
import DS from 'ember-data';

const {
  JSONAPIAdapter,
  snapshot
} = DS;

export default JSONAPIAdapter.extend(AdminAdapterMixin, {

  urlForFindHasMany(id, modelName, snapshot) {
    let baseUrl = this.buildURL(id, modelName);
    return `${baseUrl}/relationships`;
  },
    urlForFindBelongsTo(id, modelName, snapshot) {
    let baseUrl = this.buildURL(id, modelName);
    return `${baseUrl}/relationships`;
  }


});
