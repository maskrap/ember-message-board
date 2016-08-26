import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  actions: {
    remove(question) {
      this.get('favoritesList').remove(question);
    },
    empty(question) {
      this.get('favoritesList').empty(question);
    }
  }
});
