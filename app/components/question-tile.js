import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  sortedAnswers: Ember.computed('questions.answers', function() {
    var answerCount = this.get('question.answers.length');
    return answerCount;
  }),

  actions: {
    addToFav(question) {
      this.get('favoritesList').add(question);
    },
  }
});
