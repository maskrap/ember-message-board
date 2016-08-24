import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    save(params) {
      var addNewQuestion = this.store.createRecord('question', params);
      addNewQuestion.save();
      this.transitionTo('index');
    }
  }
});
