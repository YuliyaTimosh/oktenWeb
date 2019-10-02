// type of variables: const, let,
// null - змінна пуста нема нічого геть. Нема коробки.  - object
// undefined - пуста коробка.
//

//стрічковий коментар коментує тільки ту стрічечку, на початку якої він стоїть


/*
блочний коментар
будь-скільки стрічок коду
*/


/**
 * анотація. Цей метод використовується для
 * анотації тексту першого зняття
 */

let motorMyCar = 7;
console.log(motorMyCar); /* - виводить в консоль*/
document.write(motorMyCar); /* - виводить в HTML документ*/


motorMyCar = 8; /* - перезаписати змінну */
console.log(motorMyCar);


const PI = 3.1415; /* - константи називаємо ВЕЛИКИМИ ЛІТЕРАМИ */
const THIS_IS_CONST = 'never change'; /* - правила хорошого тону*/


let one = 0.1;
let two = 0.2;
console.log(one + two); /* - не правильно порахує. (0,300000000004)  */

/* математичні операції */

// 10%3 - кратність - для визначення парності/непарності  для if
console.log(typeof one); console.log(typeof []); /* - показує тип даних */


// переводити з одних типів даних в інші
let stringFromNumber = (77).toString();
console.log(typeof stringFromNumber);
let numberFromString = parseInt('5556');
console.log(numberFromString);
let numberFromString2 = +'777';
console.log(numberFromString2);

/*  стрічку в число не можна переробити ніяк. Типу 'okten'*/

parseFloat() /* дробове значення */
parseInt() /* ціле значення */




