import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        titleListView: this.get('titleListView')? this.get('titleListView') : "",
        titleDetailView: this.get('titleDetailView')? this.get('titleDetailView') : "",
        category: this.get('category')? this.get('category') : "",
        author: this.get('author')? this.get('author') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
