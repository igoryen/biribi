var Bravo = (function (name) {return name;}(Bravo || {}));


Bravo.A = (function () {
	// variables

	// functions
	var bravo = function() {
		$("#b").text("This is Bravo");
	};
	
	// init
	var init = function() {
		bravo();
	};

	return {
		init : init
	}

})(); // автозапуск


