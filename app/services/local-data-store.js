import Ember from 'ember';

export default Ember.Service.extend({
	data: null,
	init() {
		this._super(...arguments);
		// load previously stored todos from local storage when service initializes
		this.set('data', JSON.parse(window.localStorage.getItem('todos') || '[]'));
	},
	findAll() {
		return this.get('data') ||
		this.set('data', JSON.parse(window.localStorage.getItem('todos') || '[]'));
	},
	lastId: 0,
	add(attrs) {
		let todo = Object.assign({ id: this.incrementProperty('lastId') }, attrs);
		this.get('data').pushObject(todo);
		this.persist();
		return todo;
	},
	persist() {
		window.localStorage.setItem('todos', JSON.stringify(this.get('data')));
	}
});
