"""Функция, которая создает такой объект

function createEmptyObjectWithoutPrototype() {
  return Object.create(null);
}

"""Вызов этой функции вернет новый объект без прототипа

const myObject = createEmptyObjectWithoutPrototype();
console.log(myObject); // выводит {}
console.log(Object.getPrototypeOf(myObject)); // выводит null
