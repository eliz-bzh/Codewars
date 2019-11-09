//Power
function numberToPower(number, power){
  let res = 1;
  for(let i = 0; i!= power; ++i){
    res *= number;
  }
  return res;
}


//Calculate BMI
function bmi(weight, height) {
  let bmi = weight / Math.pow(height,2);
  if(bmi <= 18.5){
    return "Underweight";
  }else if(bmi <= 25){
    return "Normal";
  }else if(bmi <= 30){
    return "Overweight";
  }
    return "Obese";
}

//Break camelCase
function solution(string) {
	let str = string.toUpperCase();
	let strres = '';
	for(let i = 0; i != str.length; ++i){
		if(str[i] === string[i]){
			strres += " ";
		}
		strres += string[i];
	}
	return strres;
}

//Numericals of a String
function numericals(s){
  let obj = [];
  let finalStr = '';
  for ( let i = 0; i < s.length; i++){
       let elem = s[i];

       if (!obj[elem] ) {
         obj[elem] = 1;
       } 
       else {
          obj[elem] +=1;
       }
       finalStr += obj[elem];  
  }
     return finalStr;
}

//get character from ASCII Value
function getChar(c){
  return String.fromCharCode(c);
}

//Sum of Cubes
function sumCubes(n){
	let res = 0;
	for (let i = 1; i <= n; ++i) {
		res += Math.pow(i,3);
	}
	return res;
}

//Square(n) Sum
function squareSum(numbers){
  let res = 0;
  for(let i = 0; i != numbers.length; ++i){
    res += Math.pow(numbers[i], 2);
  }
  return res;
}

//Simple Fun #74: Growing Plant
function growingPlant(upSpeed, downSpeed, desiredHeight) {  
  var i = 1;
  for (var height = upSpeed; height < desiredHeight; height = height + upSpeed){
    height = height - downSpeed;
    i++;   
  }
  return i;
}

//Multiple of index
function multipleOfIndex(array) {
  let res = [];
	for(let i = 0, j = 1; j != array.length; ++j){
		if(array[j] % j === 0){
			res[i] = array[j];
			++i;
		}
	}
	return res;
}

function multipleOfIndex2(array) {
	return array.filter((num, i) => num % i === 0);
}

//MinMinMax
function minMinMax(array) {
  for(let i = Math.min(...array) + 1; i != Math.max(...array); ++i){
		if(!array.includes(i)){
			return [Math.min(...array), i , Math.max(...array)];	
		}
	}
}


//Convert a string to an array
function stringToArray(string){
	return string.split(" ");
}

//Simple validation of a username with regex
function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username);
}

//Adding Big Numbers
function add(a, b) {
if(Number.isSafeInteger(Number(a)) && Number.isSafeInteger(Number(b))){
		return (Number(a) + Number(b)).toString();
	}
	
	a = a.split("");
	b = b.split("");
	var carries = 0;
	var result = [];
	
	for(var i = a.length -1 ; i >= 0; i--){
		var sum = Number(a[i]) + Number(b[i]) + carries;
		result.unshift(sum % 10);
		if(sum >= 10){
			carries = 1;
		}else{
			carries = 0;
		}
	}
	
	if(sum >= 10){
    result.unshift(1);
  }
	return result.join("");
}


//Basic JS - Building a calculator
var Calculator = {
};

Calculator.add = function(a,b){
	return a + b;
}

Calculator.subtract = function(a,b){
	return a - b;
}

Calculator.multiply = function(a,b){
	return a * b;
}

Calculator.divide = function(a,b){
	if (b != 0) {
		return a / b;
	}
	return false;
}

//OR
/*
var Calculator = {
	add: function(a,b){
		return a + b;
	},

	subtract: function(a,b){
		return a - b;
	},

	multiply: function(a,b){
		return a * b;
	},

	divide: function(a,b){
		return b!=0 ? a/b : false;
	}
};
*/


console.log(Calculator.subtract(3,5));
console.log(Calculator.add(1,4));
console.log(Calculator.multiply(4,5));
console.log(Calculator.divide(7,0));
