import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,
  actions: {
    showUpdateForm() {
      this.set('showUpdateForm', true);
    },
    update(question) {
      var params = {
        titleListView: this.get('titleListView')? this.get('titleListView') : "",
        titleDetailView: this.get('titleDetailView')? this.get('titleDetailView') : "",
        category: this.get('category')? this.get('category') : "",
        author: this.get('author')? this.get('author') : "",
      };
      this.set('showUpdateForm', false);
      this.sendAction('update', question, params);
    }
  }
});
