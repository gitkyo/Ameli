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

		//active tooltips
		$('[data-toggle="tooltip"]').tooltip();
	}

	var initIdentification = function(){

		//init custom select
		$('select').selectric();
		//init datePicker
		//$('#datetimepicker1').datetimepicker();


		/*
		Popup
		$(window).bind('beforeunload', function(){
		  return "Vous êtes sur le point de quitter le questionnaire avant de l'avoir finalisé. Vous pourrez le reprendre en l'état en vous connectant à nouveau au service avec votre code d'accès.";
		});*/

	}

	var initDescription = function(){

		//active tooltips
		$('[data-toggle="tooltip"]').tooltip();
		//init custom select
		$('select').selectric();
		//init datePicker
		$('#datetimepicker1').datetimepicker({
			format: 'DD/MM/YYYY'
		});
		$('#datetimepicker2').datetimepicker({
			format: 'DD/MM/YYYY'
		});
		$('#datetimepicker3').datetimepicker({
			format: 'DD/MM/YYYY',
			useCurrent: false //Important! See issue #1075
		});
		$("#datetimepicker2").on("dp.change", function (e) {
			$('#datetimepicker3').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker3").on("dp.change", function (e) {
			$('#datetimepicker2').data("DateTimePicker").maxDate(e.date);
		});

		/*
		Popup
		$(window).bind('beforeunload', function(){
		  return "Vous êtes sur le point de quitter le questionnaire avant de l'avoir finalisé. Vous pourrez le reprendre en l'état en vous connectant à nouveau au service avec votre code d'accès.";
		});*/

	}

	window.init = function() {

		if( $('.container-fluid.main').hasClass('connexion') ) initInfoConnexion();
		if( $('.container-fluid.main').hasClass('identification') ) initIdentification();
		if( $('.container-fluid.main').hasClass('description') ) initDescription();

	}

	init(); // true
});