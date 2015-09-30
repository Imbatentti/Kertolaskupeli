var rand1= 1 + Math.floor(Math.random() * 10);
var rand2= 1 + Math.floor(Math.random() * 10);
var question = (rand1 * rand2);
var counter =0;
$("#question").text(rand1 + "*" + rand2);
$("#counter").text(counter);

function checkCorrect(){
	if (counter < 5){
		var pAnsw=$("#pAnswer").val();
		if(pAnsw != null){
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
		}
		$("#counter").text(counter);
		rand1= 1 + Math.floor(Math.random() * 10);
		rand2= 2 + Math.floor(Math.random() * 10);
		question = (rand1 * rand2);
		$("#question").text(rand1 + "*" + rand2);
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
	
	$("#pAnswer").val('');
}


$(document).ready(onReady);


