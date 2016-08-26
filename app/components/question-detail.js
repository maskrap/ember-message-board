import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    addToFav(question) {
      this.get('favoritesList').add(question);
    },
  }
});
