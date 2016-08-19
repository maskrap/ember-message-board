import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,
  actions: {
    showUpdateForm() {
      this.set('showUpdateForm', true);
    },
    update(question) {
      var params = {
        questionTitleView: this.get('questionTitleView')? this.get('questionTitleView') : "",
        questionAuthorView: this.get('questionAuthorView')? this.get('questionAuthorView') : "",
        topic: this.get('topic')? this.get('topic') : "",
      };
      this.set('showUpdateForm', false);
      this.sendAction('update', question, params);
    }
  }
});
