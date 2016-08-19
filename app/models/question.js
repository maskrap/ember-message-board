import DS from 'ember-data';

export default DS.Model.extend({
  titleListView: DS.attr(),
  titleDetailView: DS.attr(),
  category: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
