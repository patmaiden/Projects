/*
fibonaccii.js - prints fibonacci sequence to specified number n or to the nth number (whichever comes first).
*/

//handle bad input
var n = process.argv[2];
if(process.argv.length > 3 || !/^\d+$/.test(n))
	console.log("Usage: node pi.js [numdigits || until digit]");
else
{
	//initialize 
	var last = 0;
	var curr = 1;
	//loop until n digits have been printed or the last printed number == n
	for(var i = 0; i < n && n !== curr; i++)
	{
		temp = curr;
		curr = curr + last;
		last = temp;
		console.log(curr);
	}
}