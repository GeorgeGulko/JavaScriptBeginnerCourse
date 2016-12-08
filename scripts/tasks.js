// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать будет массив значений одного из полей (отсортированных в порядке возрастания):

var usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' },
	{ 'user' : 'Karl', 'password' : 'qwerty'},
	{ 'user' : 'Georg', 'password' : '12345'}
];

function getFieldValues (data, field) {
	var tmp;
	var result = [];
	for (var i = 0; i < 3; i++) {
		for (var j = i+1; j < 4; j++) {
			if (data[i][field] > data[j][field]) {
				tmp = data[i][field];
				data[i][field] = data[j][field];
				data[j][field] = tmp;  
			}
		}
	}
	for (i = 0; i < 4; i++) {
		result.push(data[i][field]);
	}
	return result;
}
console.log(getFieldValues(usersData, 'user'));


// 2) Написать функцию, фильтрующую массив с использованием предиката:

var numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

function filter (num, func) {
	var array = [];
	for (var i = 0; i < 9; i++) {
		if (func(num[i])) {
			array.push(num[i]);
		}
	}
	return array;
}
function isEven(x) {return x % 2 == 0}
console.log(filter(numbers, isEven));

// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках

//var firstLongString = 'Load up on guns and bring your friends it\'s fun to lose and to pretend';
//var secondLongString = 'She\'s over bored and self assured oh no I know a dirty word';
//console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and'];

// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:

//var IpAddress = '10.223.98.2';
//var subnetMask = 28;
//console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0

// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// P. S. 1 == '1' (строковое и числовое представление number'ов считать идентичными)

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];

function makeItClean(mess_array) {
	var arr = [];
	var check = true;
	for(var i = 0; i < 3; i++) {
		for (var j = 0; j < mess_array[i].length; j++) {
			check = true;
			for (var k = 0; k < arr.length; k++) {
				if (arr[k] == mess_array[i][j]) {
					check = false;
				}
			}
			if (check) {
				arr.push(mess_array[i][j]);
			}
		}
	}
	return(arr);
}
console.log(makeItClean(totalMessArray));