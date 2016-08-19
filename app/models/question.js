import DS from 'ember-data';

export default DS.Model.extend({
  questionTitleView: DS.attr(),
  questionAuthorView: DS.attr(),
  topic: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
