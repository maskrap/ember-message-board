import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  actions: {
    addToFav(question) {
      this.get('favoritesList').add(question);
    },
  }
});
