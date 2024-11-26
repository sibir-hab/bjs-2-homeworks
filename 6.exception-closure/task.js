﻿// Задача 1. Форматтер чисел //
// Функция-преобразователь, которая возвращает число //
function parseCount(products) {
  let resultParse = Number.parseFloat(products);
  if (Number.isNaN(resultParse)) {
      throw new Error("Невалидное значение");
  }
  return resultParse;
}
// Функция которая возвращает либо результат, либо ошибку //
function validateCount(products) {
  try {
      return parseCount(products);
  } catch (error) {
      return error;
  }
}

// Задача 2. Калькулятор треугольников //
// Конструктор класса принимает три стороны треугольника. //
class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
      if (
          sideOne + sideTwo < sideThree ||
          sideTwo + sideThree < sideOne ||
          sideOne + sideThree < sideTwo
      ) {
          throw new Error("Треугольник с такими сторонами не существует");
      }
      this.sideOne = sideOne;
      this.sideTwo = sideTwo;
      this.sideThree = sideThree;
  }
  // Возврат периметра треугольника //
  get perimeter() {
      return +(this.sideOne + this.sideTwo + this.sideThree);
  }
  // Возврат площади треугольника //
  get area() {
      let p = this.perimeter / 2;
      return +Math.sqrt(
          p * (p - this.sideOne) * (p - this.sideTwo) * (p - this.sideThree),
      ).toFixed(3);
  }
}
// Перехват исключения //
function getTriangle(sideOne, sideTwo, sideThree) {
  try {
      return new Triangle(sideOne, sideTwo, sideThree);
  } catch (error) {
      return {
          get perimeter() {
              return "Ошибка! Треугольник не существует";
          },
          get area() {
              return "Ошибка! Треугольник не существует";
          },
      };
  }
}