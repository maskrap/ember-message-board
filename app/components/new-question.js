import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        questionTitleView: this.get('questionTitleView')? this.get('questionTitleView') : "",
        questionAuthorView: this.get('questionAuthorView')? this.get('questionAuthorView') : "",
        topic: this.get('topic')? this.get('topic') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
