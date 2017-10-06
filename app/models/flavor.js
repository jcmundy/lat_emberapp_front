import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  gelato: DS.belongsTo('gelato'),
  yogurt: DS.belongsTo('yogurt')
});
