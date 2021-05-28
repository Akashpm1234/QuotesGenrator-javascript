var temp;
var quote = [
	'The purpose of our lives is to be happy-Dalai Lama', 'Life is what happens when you re busy making other plans.” — John Lennon ',
	' Get busy living or get busy dying. — Stephen King',' You only live once, but if you do it right, once is enough. — Mae West.',
	'Many of life’s failures are people who did not realize how close they were to success when they gave up.– Thomas A. Edison',
]


function newquote(){
	temp=Math.floor(Math.random()*quote.length);
//	document.getElementById("quotesdisplay").style.display=block;
	document.getElementById("quotesdisplay").innerHTML=quote[temp];
}