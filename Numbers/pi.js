/*
pi.js - prints pi to the specified precision (number of digits, including the leading 3)
*/

//handle bad input
var digits = process.argv[2];
if(process.argv.length > 3 || !/^\d+$/.test(digits) || digits < 1 || digits > 21)
	console.log("Usage: node pi.js [numdigits (1-21)]");
else
{
	//return requested specificity
	if(digits > 16)
		console.log("Note: after 16 digits, this is an approximation");
	console.log(Math.PI.toFixed(process.argv[2] - 1));
}
