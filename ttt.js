// factory method that returns an object  - from  learning outcomes
function myObject(data) {
	let obj = Object.create(myObject.proto);
	obj.data = data;
	return obj;
}

myObject.proto = {
	getData: function () {
		return this.data();
	},
};

let b = console.log(myObject('sample'));
