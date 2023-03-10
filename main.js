let aa = "{прил} {собс} {глаг} {прил} {сущ} и затем {глаг} {сущ}";

let adjectives = ["красивый", "веселый", "умный", "милый", "смешной", "добрый", "великолепный", "любопытный", "сильный", "умелый"];
let nouns = ["кот", "дом", "человек", "автомобиль", "город", "магазин", "стол", "солнце", "книга", "компьютер"];
let verbs = ["бежать", "прыгать", "петь", "играть", "читать", "писать", "рисовать", "разговаривать", "учиться", "работать"];
let properNouns = ["Петя", "Катя", "Вася", "Маша", "Аня", "Саша", "Иван", "Лена", "Артем", "Света"];

const randomNoun = rmdValue(nouns);
const randoAdjective = rmdValue(adjectives);
const randomVerb = rmdValue(verbs);
const randomProperNoun = rmdValue(properNouns);

function fillTemplate(template) {
  // Заменяем шаблонные подстроки на соответствующие значения из массивов
  let filled = template.replace(/\{прил\}/g, randomNoun)
                       .replace(/\{собс\}/g, randomProperNoun)
                       .replace(/\{глаг\}/g, randomVerb)
                       .replace(/\{сущ\}/g, randomNoun);
  
  return filled;
}

// Пример вызова функции
let result = fillTemplate(aa);
console.log(result);

function rmdValue(array) {
   const randomIndex = Math.floor(Math.random() * array.length);
   return array[randomIndex];
}

task 1
let num = 3;
alert(num);

task 2
let a = 10;
let b = 2;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b);

task 3
let c = 15;
let d = 2;

result = c + d;
console.log(result);

task 5
let a = 17;
let b = 10;
let c = a - b;
let d = 7;
result = c + d;
console.log(result);

task 6
let str =  'Привет, Мир!';
console.log(str);

task 8 
let name1 = 'Mark';
console.log('Hej, ' + name1);

task 10

prompt('What is your name ?');
alert('Your name is ' + )

task 11 
let name = prompt('Как тебя зовут ?');
console.log("Приветствую, " + name);

let num = prompt('Введите число')
result = alert(num ** 2);

task 12 
let str = 'abcde';
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);

task 13
let num = '12345';

let index1 = num[0];
let index2 = num[1];
let index3 = num[2];
let index4 = num[3];
let index5 = num[4];

console.log(index1);

let productOfNumbers = index1 * index2 * index3 * index4 * index5

console.log(productOfNumbers);

task 14. Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

let oneMin = 60;
let oneHour = oneMin * 60;
let oneDay = oneHour * 24;
let oneMonth = oneDay * 30;

console.log(oneHour);
console.log(oneDay);
console.log(oneMonth);

task  Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.

let hour = 15;
let minute = 18;
let second = 45;

console.log(hour + ":" + minute + ":" + second)

Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.


Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.
var num = 47;
num =+ 7;
num =- 18;
num *= 10;
num /= 15;
console.log(num);

Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.

var num = 10;
num++;
num++;
num--;
console.log(num);

Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.

let arr = ['Privet', ', ', 'world!']
console.log(arr[0]+arr[1]+arr[2]);

Решим немного другую задачу: дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной.

const arr = [
    "кошка",
    "собака",
    "книга",
    "компьютер",
    "автомобиль",
    "дом",
    "музыка",
    "картина",
    "море",
    "горы",
    "друзья",
    "семья",
    "работа",
    "отпуск",
    "путешествие",
    "спорт",
    "еда",
    "фильм",
    "игра",
    "любовь"
  ];  

let result = ''; //создаем пустой контейнер для заполнения данных

for (i = 0; i < arr.length; i++) {
    result = result + " " + arr[i]; //пустой контейнер равен пустому контейнеру + элемент массива arr (i:раз) в нашем случае 4 элемента.
}
console.log(result); // выводим результат

 Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ')

let arr = ['Привет', ', ', 'мир', '!'];
arr[0] = 'Пока';

let result = '';

for(i = 0; i < arr.length; i++) {
    result = result + arr[i];
}

console.log(result);

Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.

let obj = {
    'Nikolay':'1000',
    'Вася':'500', 
    'Petya': '2000'
    };

console.log(obj['Nikolay']);

Создайте массив arr с элементами 1, 2, 3, 4, 5 двумя различными способами.

let arr = []


for (i = 1; i < 6; i++) {
    arr[i-1] = i;
}
console.log(arr);

Многомерный массив. Вывести с помощью него green.
var arr = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};

console.log(arr['en'][2]);


Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.

let arr = ['a', 'b', 'c']
alert(arr)

С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.

alert(arr[0],arr[1], arr[2]);

Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.

let arr = ['a', 'b', 'c', 'd'];

console.log(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3]);

Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

let arr = [2, 5, 3, 9];

let sub = arr[0]*arr[1];
let sub2 = arr[2]*arr[3];

let result = sub + sub2;

console.log(result);


Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:

var obj = {a: 1, b: 2, c: 3};

console.log(obj['c']);
console.log(obj.c);

 Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

let week = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресение'
    }

console.log(week[5]);

Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.

let day = week[3];

console.log(day);

Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(arr[1][0]);

Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.

let obj = {
    js:['jQuery', 'Angular'], 
    php: 'hello', 
    css: 'world'
};

console.log(obj['js'][0]);

Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).

let arr = {
    'ru':[
        'понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресение'
    ],
    'en':[
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]
};

console.log('По-русски: ' + arr['ru'][0] + ' и ' + 'in english: ' + arr['en'][2]);

Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

let lang = arr['ru'];

let day = lang[2];

console.log(day);