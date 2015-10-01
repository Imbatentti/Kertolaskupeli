function getQuestion(){
	rand1= 1 + Math.floor(Math.random() * 10);
	rand2= 2 + Math.floor(Math.random() * 10);
	question = (rand1 * rand2);
	$("#question").text(rand1 + "*" + rand2);
}

function getPic(){
	if (counter == 1){
		$("#matti").attr('src', 'img/matti1.png');
	}
	else if (counter == 2){
		$("#matti").attr('src', 'img/matti2.png');
	}
	else if (counter == 3){
		$("#matti").attr('src', 'img/matti3.png');
	}
	else if (counter == 4){
		$("#matti").attr('src', 'img/matti4.png');
	}
	else if (counter == 5){
		$("#matti").attr('src', 'img/matti5.png');
		$("#result").text("Matti sai puettua kaiken tarpeellisen, voitit pelin!")
			
	}
}

function checkCorrect(){
	if (counter < 5){
		var pAnsw=$("#pAnswer").val();
		if (pAnsw == question){
			$("#result").text("Vastasit oikein!");
			counter++;		
		}
		else {
			$("#result").text("Matti kuoli kylmyyteen, syy on sinun.")
			counter =0;
			$("#matti").attr('src', 'img/mattirip.png');
			end;		
		}
		
		getQuestion();
		getPic();	
	}
	$("#pAnswer").val('');
}

function onReady(checkCorrect){
	getQuestion();
}

//main ja globaalit muuttujat
var rand1;
var rand2;
var question;
var counter =0;
$(document).ready(onReady);


