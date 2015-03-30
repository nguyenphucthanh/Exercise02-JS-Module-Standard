requirejs.config({
	//By default load any module IDs from js/lib
	baseUrl: 'scripts/lib',
	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.
	paths: {
		app: '../app'
	},
	shim: {
		bootstrap : { 
			deps: ['jquery'] 
		}
	}
});

// Start the main app logic.
require(['jquery', 'bootstrap', 'app/calc'], function ($, bootstrap, calc) {
	//jQuery, canvas and the app/sub module are all
	//loaded and can be used here now.
	$('[data-toggle="popover"]').popover();

	//load module #1
	$('#module-1').submit(function(e) {
		e.preventDefault();
		var form = $(this),
			numberA = parseInt(form.find('#number-a').val(), 10),
			numberB = parseInt(form.find('#number-b').val(), 10),
			operator = form.find('#operator').val();
			numberResult = (operator === 'plus') ? calc.plus(numberA, numberB) : calc.multiply(numberA, numberB),
			txtResult = form.find('#number-result');

		txtResult.val(numberResult);
	});
});