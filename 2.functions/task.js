/* Функция которая получает на входе числа,
 а возвращает минимальное, максимальное и 
 среднее арифметическое значений массива.
 */
 function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let i;

	for (i = 0; i < arr.length; i++) {
	  sum = sum + arr[i];
	  if (arr[i] > max) {
		max = arr[i];
	  }
	  if (arr[i] < min) {
		min = arr[i];
	  }
	}
	avg = parseFloat((sum / arr.length).toFixed(2));
	return {
	  min: min,
	  max: max,
	  avg: avg,
	};
  }
  
  /* Функция которая должна находить сумму
   элементов массива и возвращать её.
   */
  function summElementsWorker(...arr) {
	let sum = 0;
	let i;

	for (i = 0; i < arr.length; i++) {
	  sum = sum + arr[i];
	}
	return sum;
  }
  /* Функция для вычисления разницы максимального и 
  минимального элементов.
  */
  function differenceMaxMinWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let i;

	if (arr.length === 0) {
	  return 0;
	}
	for (i = 0; i < arr.length; i++) {
	  if (min > arr[i]) min = arr[i];
	  if (max < arr[i]) max = arr[i];
	}
	return max - min;
  }
  
  /* Функция вычисления разницы сумм чётных и 
  нечётных элементов.
  */
  function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let i;

	if (arr.length === 0) {
	  return 0;
	}
	for (i = 0; i < arr.length; i++) {
	  if (arr[i] % 2 === 0) sumEvenElement += arr[i];
	  else sumOddElement += arr[i];
	}
	return sumEvenElement - sumOddElement;
  }
  
  /* Функция которая будет вычислять среднее значение 
  чётных элементов.
  */
  function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let i;

	if (arr.length === 0) {
	  return 0;
	}
	for (i = 0; i < arr.length; i++) {
	  if (arr[i] % 2 === 0) {
		sumEvenElement += arr[i];
		countEvenElement++;
	  }
	}
    return sumEvenElement / countEvenElement;
  }
  
  /* Функция которая из массива данных
   и насадки, будет возвращать максимальный 
   результат функции насадки.
   */
  function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let i;

	if (arrOfArr.length === 0) {
	  return 0;
	}
	for (i = 0; i < arrOfArr.length; i++) {
	  const resultCalculations = func(...arrOfArr[i]);
	  
	  if (resultCalculations > maxWorkerResult)
	  maxWorkerResult = resultCalculations;
	}
	return maxWorkerResult;
  } 