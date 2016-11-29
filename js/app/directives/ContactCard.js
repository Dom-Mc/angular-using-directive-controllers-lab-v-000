function ContactCard() {
	return {
		scope: {},
		controllerAs: 'ctrl',
		bindToController: {
			name: '=',
			phone: '=',
			email: '=',
			username: '='
		},
		restrict: "E",
    controller: function(){
      this.username = this.username.toLowerCase();
    },
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ ctrl.name }}',
				'<label>Email:</label>',
				'{{ ctrl.email }}',
				'<label>Phone:</label>',
				'{{ ctrl.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ ctrl.username }}</span>',
			'</div>'
		].join(''),
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
