var main = function() {
 	console.log('Gotowa do boju!');

	$('#sum').click(function(){
		var a = parseNumber('#number-a');
		var b = parseNumber('#number-b');

		var sum = add(a,b);
		printScore(sum);
	});

	$('#sub').click(function(){
		var a = parseNumber('#number-a');
		var b = parseNumber('#number-b');

		var sub = subt(a,b);
		printScore(sub);
	});

	$('#mul').click(function(){
		var a = parseNumber('#number-a');
		var b = parseNumber('#number-b');

		var mul = mult(a,b);
		printScore(mul);
	});

	$('#div').click(function(){
		var a = parseNumber('#number-a');
		var b = parseNumber('#number-b');

		var div = divi(a,b);
		printScore(div);
	});

}

function parseNumber(id){
	var number = $(id).val();
	number = checkCommas(number);
	number = parseFloat(number);
	return number;
}

function checkCommas(temp){
	if(temp.indexOf(',') > -1){ // Sprawdza czy temp ma przecinek, jak nie ma to daje -1, jak ma, to wiecej niz -1
		temp.replace(',', '.');
	}
	return temp;
}

function add(a,b){
	var c = a + b;
	return c;
}

function subt(a,b){
	var c = a - b;
	return c;
}

function mult(a,b){
	var c = a * b;
	return c;
}

function divi(a,b){
	if(b == 0) {
		return 'Nie dziel przez 0';
	} else {
	var c = a / b;
	return c;
	}
}

function printScore(score){
	$('#score_indicator').text(score);
}

$(document).ready(main);
