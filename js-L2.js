/**
 * if esle - це умовні оператори. Це інструменти як і + - * / %.
 *
 * @type {number}
 */

let a = 8;

console.time( 'if');

if (a > 10) /* в дужки приймає true або false, якщо true то виконає
код в блоці виконання, якщо false - піде далі або знайде else*/
{
    console.log('Biggest than secret number!')
} else if (a === 10) {
    console.log('You are got a prise!')
} else if (a === 0) {
    console.log('Why soo few?')
}
else {
    console.log('Try again!');
}

console.timeEnd('if');


/* !!!!!!!якщо більше 5 умов, це сильно б'є по перформенсу
(по швидкості виконання) */

let day = 15;
let month = 'winter';

// if (day > 20){
//     if (month === 'winter') {
//         console.log('New Year');
//     }
// }
//
// /* так як знизу правильно*/
// if (day > 20 && month === 'winter') {
//     console.log('New Year');
// }

if (+day === 20) {
    console.log('new Year');
}

//додавання плюса перед змінною -- переводити в число, щоб перевести до одного типу даних

// null >=0 --- true;
//null !==0 --- true;
// null this is OBJECT

// {} + [] = 0 АЛЕ [] + {} = '[object Object]'

let login = 'Dima';
let password = '12345';
let role = 'admin';

if(login === 'Dima' && password === '12345' || role === 'admin') {
    console.log('log');
}

//SWITCH SWITCH SWITCH SWITCH
//аналог if else
// default -- самий останній обробник, він ловить все, що не попало в кейси.
// його можна не писати, код буде працювати нормально. == ELSE
let season = 'winter';

switch (season) {
    case 'spring' :
        console.log('summer is comming!');
        break;
    case 'winter' :
        console.log('Lets drink tea');
        break;
    case 'summer' :
        console.log('Go to Cyprus');
        break;
    default:
        console.log('Another plane')
    case 'sleep':
        console.log('zzzzzzz');
        break;
}

//іще один аналог if else на один if esle === тернарний оператор:

if (season === 'winter') {
    console.log('snowing')
} else {
    console.log('swimming')
}

(season === 'winter') ? console.log('snowing') : console.log('swimming');

//LOOPS LOOPS LOOPS LOOPS
//перше значення, (виконується один раз на початку) що передаємо в дужках - початкова точка відліку
//друге значення, виконуватися поки ця умова правдиваа
//третє значення, що зробити після того, коли я виконаю одну ітерацію

for(let i = 0; i < 10; i++ /* i = i+2*/){
    console.log(i);
}

//цикл в циклі
for(let i = 0; i <= 10; i++){
   console.log(i);
   console.log('_________');
   for(let x = 10; x > 0; x--) {
       console.log(x);
   }
}

//різниця між while і for. While виконується поки в дужках true
//while приймає лише другий параметр - виконуватись поки.
// точка входу оголошується зовні, лише вище нього
//для while обов'язково писати умову виходу одразу, бо зациклиться
let z = 0;

while(z < 15) {
    console.log(z);
    z++;
}

if (x > 5) console.log(2); /* --- можна писати без фігурних дужок,
якщо є одна умова.*/

