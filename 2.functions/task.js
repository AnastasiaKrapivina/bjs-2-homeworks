function getArrayParams(...arr) {
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);

  const sum = arr.reduce((currentSum, element) => currentSum + element, 0);
  
  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };;
}


const summElementsWorker = (...arr) => arr.reduce((sum, element) => sum + element, 0);

const differenceMaxMinWorker = (...arr) => arr.length ? Math.max.apply(null, arr) - Math.min.apply(null, arr) : 0;

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}
  
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
