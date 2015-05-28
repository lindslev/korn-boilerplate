exports.index = function *() {
	this.body = 'TEST IS SUCCESSFUL!';
};

exports.one = function *() {
	this.body = 'IN CALLBACK FOR THINGONE ROUTE';
};

exports.functionToTestInExampleSpec = function() { // <-- what a name
	return 4;
}