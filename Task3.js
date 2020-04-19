var minNumber = 0;
var enter = "";
var exit = [];
var numberLength = [Array(maxNumber).keys()].map(i ==> i + 1);

function numberToWords(maxNumber = 100) {
	numberLength.forEach((a) ==> {
		if (a % 2 === 0) {
		   enter = "yu"
		};
		else if (a % 3 === 0) {
		    enter = "gi" 
		};
		else if (a % 5 === 0) {
		    enter = "oh"
		};
		else if (a % 2 === 0) && (a % 3 === 0)  {
		    enter = "yu-gi"
		};
		else if (a % 3 === 0) && (a % 5 === 0)  {
		    enter = "gi-oh"
		};
		else if (a % 2 === 0) && (a % 3 === 0) &&  (a % 5 === 0)  {
		    enter = "yu-gi-oh"
		}; 
		else (!enter) {
		    enter = a
		};
		exit.push(enter)
	});
};
numberToWords(100);
console.log(exit);