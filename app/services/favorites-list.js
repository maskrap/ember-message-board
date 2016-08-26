import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(question) {
    this.get('questions').pushObject(question);
  },

  remove(question) {
    this.get('questions').removeObject(question);
  },

  empty() {
    this.get('questions').clear();
  },

  // total: Ember.computed('questions.length', function(){
  //   var sum = 0;
  //   this.get('questions').forEach(function(question){
  //     sum += parseFloat(question.get('cost'));
  //   });
  //   return sum.toFixed(2);
  // })

});
