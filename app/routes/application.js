import Ember from 'ember';

export default Ember.Route.extend({
	localDataStore: Ember.inject.service('local-data-store'),
	model() {
		return this.get('localDataStore').findAll();
	}
});
