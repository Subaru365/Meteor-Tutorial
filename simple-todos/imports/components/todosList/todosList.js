import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html';

class TodosListCtrl {
	constructor() {
		this.tasks = [{
			text: 'This is Task 1'
		}, {
			text: 'This is Task 2'
		}, {
			text: 'This is Task 3'
		}];
	}
}

export default angular.module('todosList', [
	angularMeteor
])
	.component('todosList', {
		templateUrl: 'imports/components/todosList/todosList.html',
		controller: TodosListCtrl
	});