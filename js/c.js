var Charlie = (function (name) {return name;}(Charlie || {}));


Charlie.A = (function () {
	// variables

	// functions
	var charlie = function() {
		$("#c").text("This is Charlie");
	};

	// init
	var init = function() {
		charlie();
	};

	return {
		init : init
	}

})(); // автозапуск



