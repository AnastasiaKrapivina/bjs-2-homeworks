//Задача № 1
var md5 = require('js-md5');

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(JSON.stringify(args)); // получаем правильный хеш c помощью функции md5
    let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
    if (objectInCache) { // если элемент найден
      console.log("Из кеша: " + objectInCache.value, cache); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кеша: " + objectInCache.value;
    }

    let result = func(...args); // в кеше результата нет — придётся считать
    cache.push({ hash: hash, value: result }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift(); // если слишком много элементов в кеше, надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result, cache);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId;

  function wrapper(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (!timeoutId) {
      func.apply(this, args);
      wrapper.count++;
    }

    timeoutId = setTimeout(() => {
      wrapper.count++;
      func.apply(this, args);
    }, delay);

    wrapper.allCount++;
  }

  wrapper.allCount = 0;
  wrapper.count = 0;

  return wrapper;
}
