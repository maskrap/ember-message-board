import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        name: this.get('name'),
        answer: this.get('answer'),
        question: this.get('question')
      };
      // console.log(params);
      this.sendAction('saveAnswer', params);
    },
  }
});
