import Ember from 'ember';

export default Ember.Controller.extend({
	localDataStore: Ember.inject.service('local-data-store'),
	taskCount: Ember.computed('model.[]', function() {
		return this.get('model').length;
	}),
	actions: {
		createTodo(e) {
			// e.KeyCode == 13 is the ENTER/RETURN key
			if (e.keyCode === 13 && !Ember.isBlank(e.target.value)) {
				this.get('localDataStore').add({ title: e.target.value.trim(), completed: false });
				e.target.value = '';
			}
		}
	}
});
