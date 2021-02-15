Function.prototype.bind = function (context, ...stack) {
	// Create a new object and set 'context' parameter as its __proto__ 
	let user = Object.create(context);

	// Add to that object 'fn' method equals to 'this' (getFullName function)
	user.fn = this;

	function invokeMethod(...params) {
		// Create an array which includes both ...stack and ...params arguments (in order to allow 'currying')
		const paramsArray = stack.concat(params);

		return user.fn(...paramsArray);
	}

	return invokeMethod;
}

function getFullName(skill1, skill2) {
	return `${this.firstName} ${this.lastName} - ${skill1}, ${skill2}`;
}

const user1 = {
	firstName: 'Serhii',
	lastName: 'Khrapin'
};
const user2 = {
	firstName: 'Petro',
	lastName: 'Petrenko'
};

const getUser1FullName = getFullName.bind(user1, 'JS');
const getUser2FullName = getFullName.bind(user2, 'PHP');

const user1FullName = getUser1FullName('Unit testing');
const user2FullName = getUser2FullName('Yii');

console.log(user1FullName); // Serhii Khrapin - JS, Unit testing
console.log(user2FullName); // Petro Petrenko - PHP, Yii
