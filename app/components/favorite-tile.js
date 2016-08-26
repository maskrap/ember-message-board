import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['titleListView:asc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortBy'),

});
