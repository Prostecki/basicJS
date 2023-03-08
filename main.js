let aa = "{прил} {собс} {глаг} {прил} {сущ} и затем {глаг} {сущ}";

let adjectives = ["красивый", "веселый", "умный", "милый", "смешной", "добрый", "великолепный", "любопытный", "сильный", "умелый"];
let nouns = ["кот", "дом", "человек", "автомобиль", "город", "магазин", "стол", "солнце", "книга", "компьютер"];
let verbs = ["бежать", "прыгать", "петь", "играть", "читать", "писать", "рисовать", "разговаривать", "учиться", "работать"];
let properNouns = ["Петя", "Катя", "Вася", "Маша", "Аня", "Саша", "Иван", "Лена", "Артем", "Света"];

function fillTemplate(template) {
  // Заменяем шаблонные подстроки на соответствующие значения из массивов
  let filled = template.replace(/\{прил\}/g, () => adjectives[Math.floor(Math.random() * adjectives.length)])
                      .replace(/\{собс\}/g, () => properNouns[Math.floor(Math.random() * properNouns.length)])
                      .replace(/\{глаг\}/g, () => verbs[Math.floor(Math.random() * verbs.length)])
                      .replace(/\{сущ\}/g, () => nouns[Math.floor(Math.random() * nouns.length)]);
  
  return filled;
}

// Пример вызова функции
let result = fillTemplate(aa);
console.log(result);
