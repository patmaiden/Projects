/*
primefactors.js - prints all prime factors of the given integer
*/



//returns whether or not a number is prime
var is_prime = function(num)
{
	if(num==2)
		return true;
	for(var j = 2; j <= num/2; j++)
	{
		if(num%j == 0)
			return false;
	}
	return true;
}

var n = process.argv[2];
//handle bad input
if(process.argv.length > 3 || !/^\d+$/.test(n) || n < 1)
	console.log("Usage: node pi.js [integer to factor (must be greater than 0)]");
else
{
	//don't bother continuing if n is prime
	if (is_prime(n))
	{
		console.log(n + " is a prime number.");
		return;
	}
	//print all prime factors of n
	for(var i = 2; i <= n/2.0; i++)
	{
		if(is_prime(i) && n%i == 0)
		{
			n_is_prime = false;
			console.log(i);
		}
	}

}