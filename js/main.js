// Створити змінні celsius, fahrenheit для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.

const celsius = 17;
const fahrenheit = (celsius * 1.8) + 32;
console.log(fahrenheit);

// Створити змінну daysInMonth для зберігання кількості днів у місяці. Обчислити кількість hoursInMonth годин та minutesInMonth хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.

const daysInMonth = 31;
const hoursInMonth = daysInMonth * 24;
console.log(hoursInMonth);

const minutesInMonth = hoursInMonth * 60;
console.log(minutesInMonth);

// Створити змінні health, energy для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.

const health = 100 - 10;
console.log(health);

const energy = 100 - 15;
console.log(energy);

// Створити змінну totalPrice для зберігання суми покупки в магазині. Застосувати знижку discount в розмірі 10% до цієї суми за допомогою оператора множення. Результат зберегти в змінній discountedPrice та вивести результат в консоль.

const totalPrice = 300;
const discount = 0.1;
const discountedPrice = totalPrice - (totalPrice * discount);
console.log(discountedPrice);

// Створити змінну const floatNumber = 12.78 для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого. Результат зберегти в змінній roundedDown та вивести результат в консоль.

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

// Створити змінну const floatString = "45.67"  для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число. Результат зберегти в змінній parsedFloat та вивести результат в консоль.

const floatString = "45.67";
const parsedFloat = Number.parseFloat(floatString);
console.log(parsedFloat);

// Створити змінну const intString = "123" для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній parsedInt та вивести результат в консоль.

const intString = "123";
const parsedInt = Number.parseInt(intString);
console.log(parsedInt);

// Створити змінну number для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа. Результат зберегти в змінній sqrtNumber та вивести результат в консоль.

const number = 625;
console.log(Math.sqrt(number));

// Створити змінні const integer = 42 та const stringNumber = "256" для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній convertedInt та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок. Результат зберегти в змінній convertedString та вивести результат в консоль.

const integer = 42;
const stringNumber = "256";

const convertedInt = Number.parseInt(stringNumber);
console.log(convertedInt);

const convertedString = integer.toString();
console.log(convertedString);