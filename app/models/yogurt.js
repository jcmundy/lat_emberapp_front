import DS from 'ember-data';
import AdminModelMixin from 'ember-admin/mixins/admin-model-mixin';

export default DS.Model.extend(AdminModelMixin, {
  name: DS.attr('string'),
  flavors: DS.hasMany('flavor', { async: true })
});
