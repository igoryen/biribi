var Delta = (function (name) {return name;}(Delta || {}));

//
Delta.Person = function(fname, lname){
	this.fname = fname;
	this.lname = lname;
	this.$firstName = $("#fname");
	this.$lastName = $("#lname");
	this.$firstName.text();

};

Delta.Person.prototype.init = function() {
	this.firstName();
	this.lastName();
}

Delta.Person.prototype.firstName = function() {
	this.$firstName.text(this.fname);
}

Delta.Person.prototype.lastName = function() {
	this.$lastName.text(this.lname);
}

