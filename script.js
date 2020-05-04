
// ПЕРЕМЕННЫЕ
var message; //a-z, A-Z, 0-9, $, _
var myMessage;
message = "Пока интересно";

var myNumber = 10.484; //"10.484" будет строкой
var mySecondNumber = myNumber/182;
var myString = "Яркий мир - отстой"; 
var myBoolean = true;
//var myUndefined = undefind; //значения нет, переменная не инициализирована
var myNull = null; //пустое значение

// ЧИСЛА

// var result = 40 + 10;
// console.log(myString + myNumber);
// console.log(myNumber*40);
// console.log(myNumber/40);
// myNumber = myNumber + 1;
// console.log("значение myNumber = " + myNumber);
// myNumber += 100;
// console.log("новое значение myNumber = " + myNumber);
// myNumber++;
// myNumber--;
// console.log(Math.round(myNumber)); //обычное округление
// console.log(Math.ceil(myNumber)); //округление в большую
// console.log(Math.floor(myNumber)); //округление в меньшую

// var newNumber = 2.437;
// newNumber.toFixed(1); //округление до указанного разряда


// СТРОКИ

// console.log(40 + myNumber);
// console.log("40" + myNumber);
// console.log(myString.toLowerCase()); //переводит в нижний регистр
// console.log(myString.toUpperCase()); //переводит в верхний регистр

//МАССИВЫ

// var names = ["Вася", "Петя", "Ваня"];
// // console.log (names[2].toUpperCase());

// // names[2]="Настя";
// // console.log (names);

//  names.push("Света"); //Добавляет значение в массив

//УСЛОВИЯ

// if (10>myNumber) {
// 	console.log ("Условие выполнилось");
// };

// if ("5"===5) {
// 	console.log ("Условие 2 выполнилось");
// };

// if ("Вася"!="Петя" && myNumber > 5) {
// 	console.log ("Условие 3 выполнилось");
// };

// if (myNumber < 20) {console.log ("Число меньше 20");

// } else {console.log ("Число больше 20")};

//ЦИКЛЫ

// for (let i = 0; i <10; i++) { //начальное значение; условие; действие (инкремент)
// 	if (i==5) {break;}
// 	if (i==2) {continue;}
// 	console.log (i);
// };

// for (var j = 0; j < names.length; j++) {if (names[j]!="Света") {console.log (names[j]+" дурак")} else {console.log (names[j] + " дура")}
//  };

// //цикл while
// var i=0
// while (i<10) {
// console.log (i);

// i++
// }


//ФУНКЦИИ

// function sum(x, y) {
// 	return (x+y);
// };


// var result = sum(myNumber, 15);
// console.log (result);


//ОБЪЕКТЫ

var myObject = {
	name: "Максим",
	surname: 'Сипинев',
	age: 33,
	getFullName: function() {
		return this.name +" " + this.surname;
	}
};
 console.log (myObject.getFullName());

var phoneColours = ["red","black","white","silver","blue"];
var os = ["android", "iOs","windows"];


var userPhone = {
	colour: phoneColours[1],
	os: os[0]
};
	userPhone.phoneType = "nokia 3310";
 console.log (userPhone);