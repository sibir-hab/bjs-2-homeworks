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
	let percentInput = percent / 100 / 12; // проценты в дробном виде
	let contributionInput = contribution; // взнос
	let amountInput = amount; // сумма кредита
	
		// Расчет ежемесечного платежа
		let bodyCredit = amountInput - contributionInput;
		let termCredit = countMonths;
		let monthlyPayment = bodyCredit * (percentInput + percentInput / ((1 + percentInput) ** termCredit - 1));
		let totalAmount = (monthlyPayment * termCredit).toFixed(2); // Общая сумма кредита
		console.log(totalAmount);
		return +totalAmount;
	}