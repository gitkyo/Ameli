/*
Custom script
*/
jQuery( document ).ready(function() {

	var initInfoConnexion = function(){
		$('.loginBlock button').click(function(event) {
			/* Act on the event */
			$('div.loginRow p').addClass('hidden');
			$('div.hiddenForm').removeClass('hidden');
		});
	}

	var initIdentification = function(){

		//init custom select
		$('select').selectric();
		//init datePicker
		$('#datetimepicker1').datetimepicker();

	}

	window.init = function() {

		if( $('.container-fluid.main').hasClass('connexion') ) initInfoConnexion();
		if( $('.container-fluid.main').hasClass('identification') ) initIdentification();

	}

	init(); // true
});