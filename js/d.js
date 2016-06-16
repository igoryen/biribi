var Delta = (function (name) {return name;}(Delta || {}));


Delta.A = (function () {
	// variables

	// functions
	var delta = function() {
		$("#d").text("This is Delta");
	};

	// init
	var init = function() {
		delta();
	};

	return {
		init : init
	}

})(); // автозапуск
