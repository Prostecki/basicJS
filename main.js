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