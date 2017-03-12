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

		$("div.barRow div.border").addClass('animOn');

		//active tooltips
		$('[data-toggle="tooltip"]').tooltip();
		//init custom select
		$('select').selectric();
		//init dateTimePicker
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
		$('#datetimepicker4').datetimepicker({
			format: 'DD/MM/YYYY'
		});
		$('#datetimepicker5').datetimepicker({
			format: 'DD/MM/YYYY',
			useCurrent: false //Important! See issue #1075
		});
		// Link dateTimePicker bettween them
		$("#datetimepicker2").on("dp.change", function (e) {
			$('#datetimepicker3').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker3").on("dp.change", function (e) {
			$('#datetimepicker2').data("DateTimePicker").maxDate(e.date);
		});
		$("#datetimepicker4").on("dp.change", function (e) {
			$('#datetimepicker5').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker5").on("dp.change", function (e) {
			$('#datetimepicker4').data("DateTimePicker").maxDate(e.date);
		});

		/*
		Popup
		$(window).bind('beforeunload', function(){
		  return "Vous êtes sur le point de quitter le questionnaire avant de l'avoir finalisé. Vous pourrez le reprendre en l'état en vous connectant à nouveau au service avec votre code d'accès.";
		});*/

		// Get DOM of block "nouvelle absence"
		var oneBlock = $("div.rightZone div.oneBlock").html();
		// some counter
		var cpt = 1;
		var cpt1DateTimePicker = 4;
		var cpt2DateTimePicker = 5;
		var cptInput1 = 14;
		var cptInput2 = 15;
		var cptInput3 = 40;
		//When click to add new absence
		$("span.separation p").click(function(event) {

			// Increment counter
			cpt++;
			cptInput1++;
			cptInput2++;
			cptInput3++;

			// Add DOM block "nouvelle absence"
			$("span.separation").before("<div class='oneBlock'>" + oneBlock + '</div>');

			// Get last block to use later
			var lastBlock = $("div.rightZone div.oneBlock:last-of-type");

			// Alter absence text
			lastBlock.find("p").text("Absence " + cpt);

			// not the first time
			if(cpt > 2){
				/*console.log('là : '+cpt);
				console.log("new datetimepicker"+(cpt1DateTimePicker + cpt));
				console.log("new datetimepicker"+(cpt2DateTimePicker + cpt));
				console.log("-----");*/

				lastBlock.find(".first .date").attr("id", "datetimepicker"+(cpt1DateTimePicker + cpt));
				lastBlock.find(".second .date").attr("id", "datetimepicker"+(cpt2DateTimePicker + cpt));
			}else{

				// First fired
				/*console.log("#datetimepicker"+(cpt1DateTimePicker));
				console.log("#Changer en");
				console.log("datetimepicker"+(cpt1DateTimePicker + 2));
				console.log("et");
				console.log("#datetimepicker"+(cpt2DateTimePicker));
				console.log("#Changer en");
				console.log("datetimepicker"+(cpt2DateTimePicker + 2));
				console.log("-----");*/

				lastBlock.find("#datetimepicker"+(cpt1DateTimePicker)).attr("id", "datetimepicker"+(cpt1DateTimePicker + 2));
				lastBlock.find("#datetimepicker"+(cpt2DateTimePicker)).attr("id", "datetimepicker"+(cpt2DateTimePicker + 2));
			}

			// Increment counter
			cpt1DateTimePicker++;
			cpt2DateTimePicker++;

			// Alter for control ID
			if(cpt > 2){
				cptInput1 = cptInput1 + 2;
				cptInput2 = cptInput2 + 2;
				cptInput3 = cptInput3 + 2;
			}else{
				cptInput1 = cptInput1 + 1;
				cptInput2 = cptInput2 + 1;
				cptInput3 = cptInput3 + 1;
			}

			lastBlock.find("div.first label").attr("for", "input"+(cptInput1));
			lastBlock.find("div.second label").attr("for", "input"+(cptInput2));

			lastBlock.find("div.first input").attr("id", "input"+(cptInput1));
			lastBlock.find("div.second input").attr("id", "input"+(cptInput2));

			lastBlock.find("div.motifRow label").attr("for", "input"+(cptInput3));
			lastBlock.find("div.motifRow input").attr("id", "input"+(cptInput3));

			cptInput1++;
			cptInput2++;
			cptInput3++;

			// Init new dateTimePicker
			if(cpt > 2){
				/*console.log("là");
				console.log("#datetimepicker"+(cpt1DateTimePicker + cpt - 1));
				console.log("#datetimepicker"+(cpt2DateTimePicker + cpt - 1));
				console.log("---");*/

				$("#datetimepicker"+(cpt1DateTimePicker + cpt - 1)).datetimepicker({
					format: 'DD/MM/YYYY'
				});
				$("#datetimepicker"+(cpt2DateTimePicker + cpt - 1)).datetimepicker({
					format: 'DD/MM/YYYY',
					useCurrent: false //Important! See issue #1075
				});

				// Link new dateTimePicker bettween them
				$("#datetimepicker"+(cpt1DateTimePicker + cpt - 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt2DateTimePicker + cpt - 1)).data("DateTimePicker").minDate(e.date);
				});
				$("#datetimepicker"+(cpt2DateTimePicker + cpt - 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt1DateTimePicker + cpt - 1)).data("DateTimePicker").maxDate(e.date);
				});
			}
			else{
				/*console.log("#datetimepicker"+(cpt1DateTimePicker + 1));
				console.log("#datetimepicker"+(cpt2DateTimePicker + 1));
				console.log("---");*/

				// Init new dateTimePicker
				$("#datetimepicker"+(cpt1DateTimePicker + 1)).datetimepicker({
					format: 'DD/MM/YYYY'
				});
				$("#datetimepicker"+(cpt2DateTimePicker + 1)).datetimepicker({
					format: 'DD/MM/YYYY',
					useCurrent: false //Important! See issue #1075
				});

				// Link new dateTimePicker bettween them
				$("#datetimepicker"+(cpt1DateTimePicker + 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt2DateTimePicker + 1)).data("DateTimePicker").minDate(e.date);
				});
				$("#datetimepicker"+(cpt2DateTimePicker + 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt1DateTimePicker + 1)).data("DateTimePicker").maxDate(e.date);
				});
			}

			// Replace last block with the newest
			oneBlock= lastBlock.html();
		});

	}

	var initDescription2 = function(){

		$("div.barRow div.border").addClass('animOn');
		//init dateTimePicker
		$('#datetimepicker1').datetimepicker({
			format: 'DD/MM/YYYY',
			useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker2').datetimepicker({
			format: 'DD/MM/YYYY',
			useCurrent: false //Important! See issue #1075
		});
		// Link dateTimePicker bettween them
		$("#datetimepicker1").on("dp.change", function (e) {
			$('#datetimepicker2').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker2").on("dp.change", function (e) {
			$('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
		});
		/*
		Popup
		$(window).bind('beforeunload', function(){
		  return "Vous êtes sur le point de quitter le questionnaire avant de l'avoir finalisé. Vous pourrez le reprendre en l'état en vous connectant à nouveau au service avec votre code d'accès.";
		});*/

		// Get DOM of block "nouvelle absence"
		var oneBlock = $("div.leftZone div.oneBlock").html();
		// some counter
		var cpt = 1;
		var cpt1DateTimePicker = 1;
		var cpt2DateTimePicker = 2;
		var cptInput1 = 2;
		var cptInput2 = 3;
		var cptInput3 = 4;
		//When click to add new absence
		$("span.separation p").click(function(event) {

			// Increment counter
			cpt++;
			cptInput1++;
			cptInput2++;
			cptInput3++;

			// Add DOM block "nouvelle absence"
			$("span.separation").before("<div class='oneBlock'>" + oneBlock + '</div>');


			// Get last block to use later
			var lastBlock = $("div.leftZone div.oneBlock").last();

			// Alter absence text
			lastBlock.find(".requiered").text("Poste " + cpt);

			// not the first time
			if(cpt > 2){
				/*console.log('là : '+cpt);
				console.log("new datetimepicker"+(cpt1DateTimePicker + cpt));
				console.log("new datetimepicker"+(cpt2DateTimePicker + cpt));
				console.log("-----");*/

				lastBlock.find(".first .date").attr("id", "datetimepicker"+(cpt1DateTimePicker + cpt));
				lastBlock.find(".second .date").attr("id", "datetimepicker"+(cpt2DateTimePicker + cpt));
			}else{

				// First fired
				/*console.log("#datetimepicker"+(cpt1DateTimePicker));
				console.log("#Changer en");
				console.log("datetimepicker"+(cpt1DateTimePicker + 2));
				console.log("et");
				console.log("#datetimepicker"+(cpt2DateTimePicker));
				console.log("#Changer en");
				console.log("datetimepicker"+(cpt2DateTimePicker + 2));
				console.log("-----");*/

				lastBlock.find("#datetimepicker"+(cpt1DateTimePicker)).attr("id", "datetimepicker"+(cpt1DateTimePicker + 2));
				lastBlock.find("#datetimepicker"+(cpt2DateTimePicker)).attr("id", "datetimepicker"+(cpt2DateTimePicker + 2));
			}

			// Increment counter
			cpt1DateTimePicker++;
			cpt2DateTimePicker++;

			// Alter for control ID
			if(cpt > 2){
				cptInput1 = cptInput1 + 2;
				cptInput2 = cptInput2 + 2;
				cptInput3 = cptInput3 + 2;
			}else{
				cptInput1 = cptInput1 + 1;
				cptInput2 = cptInput2 + 1;
				cptInput3 = cptInput3 + 1;
			}

			lastBlock.find("div.first label").attr("for", "input"+(cptInput1));
			lastBlock.find("div.second label").attr("for", "input"+(cptInput2));

			lastBlock.find("div.first input").attr("id", "input"+(cptInput1));
			lastBlock.find("div.second input").attr("id", "input"+(cptInput2));

			lastBlock.find("div.motifRow label").attr("for", "input"+(cptInput3));
			lastBlock.find("div.motifRow input").attr("id", "input"+(cptInput3));

			cptInput1++;
			cptInput2++;
			cptInput3++;

			// Init new dateTimePicker
			if(cpt > 2){
				/*console.log("là");
				console.log("#datetimepicker"+(cpt1DateTimePicker + cpt - 1));
				console.log("#datetimepicker"+(cpt2DateTimePicker + cpt - 1));
				console.log("---");*/

				$("#datetimepicker"+(cpt1DateTimePicker + cpt - 1)).datetimepicker({
					format: 'DD/MM/YYYY'
				});
				$("#datetimepicker"+(cpt2DateTimePicker + cpt - 1)).datetimepicker({
					format: 'DD/MM/YYYY',
					useCurrent: false //Important! See issue #1075
				});

				// Link new dateTimePicker bettween them
				$("#datetimepicker"+(cpt1DateTimePicker + cpt - 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt2DateTimePicker + cpt - 1)).data("DateTimePicker").minDate(e.date);
				});
				$("#datetimepicker"+(cpt2DateTimePicker + cpt - 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt1DateTimePicker + cpt - 1)).data("DateTimePicker").maxDate(e.date);
				});
			}
			else{
				/*console.log("#datetimepicker"+(cpt1DateTimePicker + 1));
				console.log("#datetimepicker"+(cpt2DateTimePicker + 1));
				console.log("---");*/

				// Init new dateTimePicker
				$("#datetimepicker"+(cpt1DateTimePicker + 1)).datetimepicker({
					format: 'DD/MM/YYYY'
				});
				$("#datetimepicker"+(cpt2DateTimePicker + 1)).datetimepicker({
					format: 'DD/MM/YYYY',
					useCurrent: false //Important! See issue #1075
				});

				// Link new dateTimePicker bettween them
				$("#datetimepicker"+(cpt1DateTimePicker + 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt2DateTimePicker + 1)).data("DateTimePicker").minDate(e.date);
				});
				$("#datetimepicker"+(cpt2DateTimePicker + 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt1DateTimePicker + 1)).data("DateTimePicker").maxDate(e.date);
				});
			}

			// Replace last block with the newest
			oneBlock= lastBlock.html();
		});

		// OnClick boule button
		$("div.oneRadioCustom").click(function(event) {
			/* Act on the event */
			$(this).parent(".rowCustomRadio").find('.active').removeClass('active');
			$(this).addClass('active');
		});

	}

	var initQuestionnaire = function(){

		$("div.oneEmploye").click(function(event) {
			/* Act on the event */
			if( !$(this).hasClass('active') ) {

				// toggle employe focus
				$("div.oneEmploye.active").removeClass('active');
				$(this).addClass('active');

				// toggle folder focus
				var personFocused = $(this).attr("class").split(" ")[1];
				$("div.oneQuestionnaireEnAttente").addClass('hidden');
				$("."+personFocused).removeClass('hidden');

			}
		});

		$("div.oneQuestionnaireEnAttente").click(function(event) {
			/* Act on the event */
			if( !$(this).hasClass('active') ) {

				// toggle employe focus
				$("div.oneQuestionnaireEnAttente.active").removeClass('active');
				$(this).addClass('active');

			}
		});
	}

	var initPathologie = function(){

		$("div.barRow div.border").addClass('animOn');

		$('form').submit(function(event){
			event.preventDefault();
		});

		$('button.one').click(function(){
			$('input.one').trigger('click');
		});
		$('input.one').change(function(){
			$('p.specialhelp.one').text( $(this).val() );
			$('.second.hidden').removeClass('hidden');
		});

		$('button.two').click(function(){
			$('input.two').trigger('click');
		});
		$('input.two').change(function(){
			$('p.specialhelp.two').text( $(this).val() );
		});

		$('button.three').click(function(){
			$('input.three').trigger('click');
		});
		$('input.three').change(function(){
			$('p.specialhelp.three').text( $(this).val() );
			$('.second.hidden').removeClass('hidden');
		});

		$('button.four').click(function(){
			$('input.four').trigger('click');
		});
		$('input.four').change(function(){
			$('p.specialhelp.four').text( $(this).val() );
		});

		// OnClick boule button
		$("div.oneRadioCustom").click(function(event) {
			/* Act on the event */
			$(this).parent(".rowCustomRadio").find('.active').removeClass('active');
			$(this).addClass('active');
		});

		// OnClick minimized button
		$("h4").click(function(event) {
			/* Act on the event */
			console.log($(this).parent().html());
			if( $(this).parent().hasClass('minimized') ) $(this).parent().removeClass('minimized');
			else $(this).parent().addClass('minimized');
		});
	}

	var initRecap = function(){

		$("div.barRow div.border").addClass('animOn');

		// toggle text disabled / enable input value
		$("div.specialEdit.off div.fakeInput").click(function(event) {
			/* Act on the event */
			$(this).hide().prev("input[disabled]").prop("disabled", false).focus();
			$(this).parents("div.specialEdit").removeClass('off');
			$(this).parents("div.specialEdit").addClass('on');

			if($(this).hasClass('toEditPeriode')){
				$(this).parents("div.specialEdit").addClass('hidden').next().removeClass('hidden');
			}

			if($(this).hasClass('toEditSelect')){
				$(this).parents("div.specialEdit").addClass('hidden').next().removeClass('hidden');
				var olderValue = $(this).prev().val().split(" ")[0];
				$(this).parents(".specialEdit").next().find("select").val( olderValue );
			}

			$("div.editSelect span.btnOkEditSelect").click(function(event) {
				var currentSelectBlock = $(this).parents(".editSelect");
				var prevInputTextForSelect = currentSelectBlock.prev();
				var valueSelect = currentSelectBlock.find("select").val();
				var unite = $(this).attr("data-label");

				prevInputTextForSelect.find("input").val(valueSelect+" "+unite).css("backgroundColor","#fff").prop("disabled", true).next().show();
				prevInputTextForSelect.removeClass('on').addClass('off');

				currentSelectBlock.addClass('hidden')
				prevInputTextForSelect.removeClass('hidden');

			});

			$("div.periode span.btnOkEditPeriode").click(function(event) {
				/* Act on the event */
				var currentPeriodeBlock = $(this).parents(".periode");
				var prevInputTextForDate = $(this).parents(".periode").prev();

				var firstValueDate = currentPeriodeBlock.find("div.first input").val();
				var secondValueDate = currentPeriodeBlock.find("div.second input").val();

				prevInputTextForDate.find("input").val("Du "+firstValueDate+" au "+secondValueDate).css("backgroundColor","#fff").prop("disabled", true).next().show();

				prevInputTextForDate.removeClass('on').addClass('off');

				currentPeriodeBlock.addClass('hidden')
				prevInputTextForDate.removeClass('hidden');
			});

			$("div.specialEdit.on span.btnOkEdit").click(function(event) {
				/* Act on the event */
				$(this).next().next().show();
				$(this).next("input").prop("disabled", true).css("backgroundColor","#fff").focus();
				$(this).parents("div.specialEdit").removeClass('on');
				$(this).parents("div.specialEdit").addClass('off');
			});
		});


		$("div.specialEdit.off div.fakeInput").hover(function(event) {
			/* Act on the event */
			$(this).prev("input[disabled]").css("backgroundColor", "#F1F1F1");
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			$(this).prev("input[disabled]").css("backgroundColor", "#fff");
		});

		//init dateTimePicker
		$('#datetimepicker1').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2007-07-14",
			//useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker2').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2016-12-20",
			useCurrent: false //Important! See issue #1075
		});
		// Link dateTimePicker bettween them
		$("#datetimepicker1").on("dp.change", function (e) {
			$('#datetimepicker2').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker2").on("dp.change", function (e) {
			$('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
		});

		// toggle date/periode disabled / enable input value


	}

	window.init = function() {

		if( $('.container-fluid.main').hasClass('connexion') ) initInfoConnexion();
		if( $('.container-fluid.main').hasClass('identification') ) initIdentification();
		if( $('.container-fluid.main').hasClass('description') ) initDescription();
		if( $('.container-fluid.main').hasClass('description2') ) initDescription2();
		if( $('.container-fluid.main').hasClass('questionnaire') ) initQuestionnaire();
		if( $('.container-fluid.main').hasClass('pathologie') ) initPathologie();
		if( $('.container-fluid.main').hasClass('recap') ) initRecap();

	}

	init(); // true
});