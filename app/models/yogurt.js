import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  flavors: DS.hasMany('flavor')
});
