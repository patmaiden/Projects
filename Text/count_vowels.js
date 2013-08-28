/* Count Vowels - Enter a string and the program counts
the number of vowels in the text. For added complexity
have it report a sum of each vowel found. */


//function that counts the number of items that match
//the input (vowel) in the array
Array.prototype.count_vowel = function(vowel){
	var count = 0;
	var index = 0;
	for(index; index < this.length; index++){
		if(this[index] == vowel)
			count++;
	}
	return count;
}	

//handle bad input
if(process.argv.length < 2)
	console.log("Usage: node count_vowels.js [string]");
else
{
	//initialize regex and return array
	var re = /[aeiou]/gi;
	var arr = new Array();

	for(var i = 2; i < process.argv.length; i++){
		//add any regex matches
		arr = arr.concat(process.argv[i].match(re));
	}

	//print results
	console.log("There are " + arr.length + " vowels in your input.");
	console.log("Details:");
	console.log("Number of a's: " + arr.count_vowel("a"));
	console.log("Number of e's: " + arr.count_vowel("e"));
	console.log("Number of i's: " + arr.count_vowel("i"));
	console.log("Number of o's: " + arr.count_vowel("o"));
	console.log("Number of u's: " + arr.count_vowel("u"));
}
