import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['titleListView'],
  sortedQuestions: Ember.computed.sort('questions', 'sortBy'),

});
