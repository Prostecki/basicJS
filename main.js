const nouns = ['Яблоко', 'Дом', 'Стол', 'Кот', 'Солнце', 'Чашка', 'Машина', 'Книга', 'Ручка', 'Ключ'];

const adjectives = ['Быстрый', 'Красивый', 'Умный', 'Сильный', 'Надежный', 'Странный', 'Счастливый', 'Талантливый', 'Безопасный', 'Безумный'];

const adverbs = ['Быстро', 'Тихо', 'Осторожно', 'Плавно', 'Быстрее', 'Здесь', 'Там', 'Сейчас', 'Всегда', 'Иногда'];

const names = ['Анна', 'Дмитрий', 'Екатерина', 'Иван', 'Ксения', 'Максим', 'Николай', 'Ольга', 'Павел', 'Светлана'];

const verbs = ['Бежать', 'Смотреть', 'Говорить', 'Слушать', 'Петь', 'Читать', 'Рисовать', 'Учить', 'Думать', 'Играть'];


let randomNouns = Math.floor(Math.random() * nouns.length);
let randomAdj = Math.floor(Math.random() * adjectives.length);
let randomAdverbs = Math.floor(Math.random() * adverbs.length);
let randomNames = Math.floor(Math.random() * names.length);
let randomVerbs = Math.floor(Math.random() * verbs.length);


console.log(nouns[randomNouns]);

//задан шаблон типа "{прил} {собс} {глаг} {прил} {сущ} и затем {глаг} {сущ}"

let adj = adjectives[randomAdj];
let smthName = names[randomNames];
let vrbs = verbs[randomVerbs];
let smthNouns = nouns[randomNouns];


let tmpl = `${adj} ${smthName} ${vrbs} ${adj} ${smthName} и затем ${vrbs} ${smthName}`;
console.log(tmpl);