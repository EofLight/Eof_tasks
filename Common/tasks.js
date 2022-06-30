//#1 Фильтрация строки
console.log("#1 Фильтрация строки");
console.log("Создать переменную со строковым значением. Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. Результат вывести в консоль.")

//Входные данные
const string="Как оно, дружище?";
const vowelChars=[
    'А','а',
    'Я','я',
    'У','у',
    'Ю','ю',
    'О','о',
    'Е','е',
    'Ё','ё',
    'Э','э',
    'И','и',
    'Ы','ы'
];

console.log("Входные данные: "+typeof(string)+": " + string)


function getVowels(str){
    let result=[];
    for(let charStr of str){
        if(vowelChars.indexOf(charStr)!=-1){
            result.push(charStr);
        }
    };
    return result;
}

console.log("Результат:"+'\n'+getVowels(string));

//---------------------------------------------------
console.log('\n');
//#2 Выборка объекта
console.log("#2 Выборка объекта");
console.log("Сформировать произвольный массив объектов, описывающий, например, работников компании, в каждом объекте должны содержаться сл. свойства (поля) - name (содержащее имя сотрудника) и поле salary (содержащее зарплату сотрудника от 0 до 3000). Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000.")

//Входные данные
const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1504}];

console.log("Входные данные: "+typeof(workers)+": " + JSON.stringify(workers))

function getWorthyWorkers(workers){
    let result=[];
    for(let worker of workers){
        if(worker.salary>1000){
            result.push(worker.name);
        }
    }
    return result;
}

console.log("Результат:"+'\n'+getWorthyWorkers(workers));

//-----------------------------------------------------
console.log('\n');
//#3 Анализ строки
console.log("#3 Анализ строки");
console.log("Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.")

//Входные данные
const path = "/users/download/index.html"

console.log("Входные данные: "+typeof(path)+": " + path)

function isHtml(str){
    if(str.indexOf(".html")!=-1){
        return true;
    } 
    else {
        return false;
    }
}

console.log("Результат:"+'\n'+isHtml(path));

//-----------------------------------------------------
console.log('\n');
//Доп. #1 Фильтрация массива
console.log("Доп. #1 Фильтрация массива");
console.log("Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет. Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность, создайте из готового массива новый, который будет содержать только четные числа. Результат выведите в консоль.")

//Входные данные
const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => { 
    return num % 2 === 0;
 };

console.log("Входные данные: "+typeof(mixedArray)+": " + mixedArray)

function filterArray(mixedArray,isEven){
    let result=[];
    for(let num of mixedArray){
        if(isEven(num)){
            result.push(num);
        }
    }
    return result;
}

console.log("Результат:"+'\n'+filterArray(mixedArray,isEven));


