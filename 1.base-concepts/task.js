"use strict";

function solveEquation(a, b, c) {
	// функция для решения квадратного уравнения
	let arr = []; // массив для хранения корней
	let d = b ** 2 - 4 * a * c; // вычисление дискриминанта
	if (d > 0) { // если дискриминант больше нуля
		let rootOne = (-b + Math.sqrt(d)) / (2 * a); // вычисление первого корня
		let rootTwo = (-b - Math.sqrt(d)) / (2 * a); // вычисление второго корня
		arr.push(rootOne, rootTwo); // добавление корней в массив
		return arr; // возвращение массива
	}
	if (d === 0) { // если дискриминант равен нулю
		let rootZero = -b / (2 * a); // вычисление корня
		arr.push(rootZero); // добавление корня в массив
		return arr; // возвращение массива
	} else {
		// если дискриминант меньше нуля
		return arr; // возвращение пустого массива
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	// (проценты, взнос, сумма, количество месяцев)
	let P = parseInt(percent) / 100 / 12; // проценты в дробном виде
	let c = parseInt(contribution); // взнос
	let a = parseInt(amount); // сумма кредита
	if (Number.isNaN(P) || P < 0) {
		// проверка на формат числа и отрицательное значение
		return console.log("false");
	} else {
		// Расчет ежемесечного платежа
		let S = a - c;
		let n = countMonths;
		let payment = S * (P + P / ((1 + P) ** n - 1));
		let totalAmount = (payment * n).toFixed(2); // Общая сумма кредита
		console.log(totalAmount);
		return +totalAmount;
	}
}
calculateTotalMortgage() //Ввод данных и вызов функции