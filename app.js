var main = function() {
	console.log('Gotowa do boju!');

	var history = [];
	var page = 1, numberOfElementsPerPage = 5, numberOfPages = 1; // start = 0; aby przesuwało po 1 to dodajemy w printHistory 
								//for(var i = start; i<start+pageCount && i<history.length; i++), 
								//a w next i previous page zamiast page++/-- robie start++/--

	$('#sum').click(function(){
		var a = parseNumber('#number-a');
		var b = parseNumber('#number-b');

		var sum = add(a,b);
		addToHistory(a,b,sum,'+');
		printScore(sum);
	});

	$('#sub').click(function(){
		var a = parseNumber('#number-a');
		var b = parseNumber('#number-b');

		var sub = subt(a,b);
		addToHistory(a,b,sub,'-');
		printScore(sub);
	});

	$('#mul').click(function(){
		var a = parseNumber('#number-a');
		var b = parseNumber('#number-b');

		var mul = mult(a,b);
		addToHistory(a,b,mul,'*')
		printScore(mul);
	});

	$('#div').click(function(){
		var a = parseNumber('#number-a');
		var b = parseNumber('#number-b');

		var div = divi(a,b);
		addToHistory(a,b,div,'/');
		printScore(div);
	});

	$('#pow').click(function(){
		var a = parseNumber('#number-a');
		var b = parseNumber('#number-b');

		var pow = Math.pow(a,b);
		addToHistory(a,b,pow,'^');
		printScore(pow);
	});

	$('#clear').click(function(){
		history = [];
		numberOfPages = 1;
		page = 1;
		printHistory();
	});

	$('#next_page').click(function(){
		if(page < numberOfPages) {
			page++;
			printHistory();
		}
	})

	$('#previous_page').click(function(){
		if(page > 1){
			page--;
			printHistory();
		}
	})

	function addToHistory(a, b, score, typeOfAction){
		var action = a + ' ' + typeOfAction + ' ' + b + ' ' + '=' + ' ' + score;
		history.unshift(action);
		console.log(history);
		numberOfPages = Math.ceil(history.length/numberOfElementsPerPage);

		printHistory();
	} 

	function printHistory(){
		$('#history').empty();
		for(var i = (page-1)*numberOfElementsPerPage; i<page*numberOfElementsPerPage && i<history.length; i++){
			$('#history').append('<p>' + history[i] + '</p>');
		}
		$('#page').text(page);
		$('#number_of_pages').text(numberOfPages);
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

}

$(document).ready(main);
