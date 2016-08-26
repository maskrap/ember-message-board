import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['author:asc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortBy'),

});
