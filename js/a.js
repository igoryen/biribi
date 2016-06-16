var Alpha = (function (name) {return name;}(Alpha || {}));


Alpha.A = (function () {
	// variables

	// functions
	var alpha = function() {
		$("#a").text("This is Alpha");
	};

	// init
	var init = function() {
		alpha();
	};

	return {
		init : init
	}

})(); // автозапуск


