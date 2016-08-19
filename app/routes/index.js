import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('question', {
      orderBy: 'timestamp',
      limitToLast: 6
      });
  }
});
