'use strict';


// const checkbox = document.querySelector('input');
// const para = document.querySelector('p');

// let shoppingDone = false;

// checkbox.addEventListener('change', () => {
//     checkbox.disabled = true;
//     shoppingDone = true;
//     updateAllowance();

// });

// function updateAllowance() {
//     let childsAllowance;

//     if (shoppingDone === true) {
//         childsAllowance = 10;
//     } else {
//         childsAllowance = 5;
//     }

//     para.textContent = `На этой неделе   \$${childsAllowance} получит ребенок.`;
// }

// let select = document.querySelector('select');
// let html = document.querySelector('.output');

// select.onchange = function () {
//     let choice = select.value;

//     switch (choice) {
//         case 'black':
//             update('black', 'white');

//             break;
//         case 'white':
//             update('white', 'black');
//             break;

//         default:
//             break;
//     }
// };

// function update(bgColor, textColor) {
//     html.style.backgroundColor = bgColor;
//     html.style.color = textColor;
// }



// console.log( NaN || 2 || undefined );

// console.log( NaN && 2 && undefined );

// console.log( 1 && 2 && 3 );

// console.log( !1 && 2 || !3 );

// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);

// console.log( NaN || null && !3 && undefined || 5);

// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// } else {
//     console.log('Error');
// }


// alert( null || 2 || undefined );

// alert( alert(1) || 2 || alert(3) );

// let age;

// age > 14 && < 90;




// let input = document.querySelector('.input');
// let btn = document.querySelector('.btn');
// let text = document.querySelector('.text');


// btn.addEventListener('click', function () {

//    let price = 150;
//    let agg = input.value;

//    // Если возраст меньше 13 лет то билет бесплатный

//    if (agg < 13) {
//       price = 'Ваш билет бесплатный';
//    } else if (agg < 20) { // Если возраст меньше 20 лет цена == -20%
//       price = price * 0.8;
//    } else { // Если возраст больше 20 то цена на билет равна 100%
//       price = price;
//    }


//    text.innerHTML = `Ваша цена билета --- ${price} (рублей)`;
// });


// let red = document.querySelector('.red'),
//    yellow = document.querySelector('.yellow'),
//    green = document.querySelector('.green');

// let redActive = document.querySelector('.redActive'),
//    yellowActive = document.querySelector('.yellowActive'),
//    greenActive = document.querySelector('.greenActive');
// let car = document.querySelector('.car');



// red.addEventListener('click', function () {
//    redActive.style.background = 'red';
//    yellowActive.style.background = 'none';
//    greenActive.style.background = 'none';

//    if (redActive.style.background == 'red') {
//       car.style.animationDuration = '0s';
//    }
// });

// yellow.addEventListener('click', function () {
//    yellowActive.style.background = 'yellow';
//    redActive.style.background = 'none';
//    greenActive.style.background = 'none';

//    if (yellowActive.style.background == 'yellow') {
//       car.style.animationDuration = '10s';
//    }
// });

// green.addEventListener('click', function () {
//    greenActive.style.background = 'green';
//    yellowActive.style.background = 'none';
//    redActive.style.background = 'none';

//    if (greenActive.style.background == 'green') {
//       car.style.animationDuration = '1s';
//    }
// });

let tex1 = document.querySelector('.text1'),
   tex2 = document.querySelector('.text2'),
   tex3 = document.querySelector('.text3'),
   tex4 = document.querySelector('.text4');

let btn1 = document.querySelector('.btn1'),
   btn2 = document.querySelector('.btn2'),
   btn3 = document.querySelector('.btn3'),
   btn4 = document.querySelector('.btn4');

let p1 = document.querySelector('.p1'),
   p2 = document.querySelector('.p2'),
   p3 = document.querySelector('.p3'),
   p4 = document.querySelector('.p4');



btn1.addEventListener('click', function () {
   let name = tex1.value;

   if (/[\d.,:]/.test(name)) {
      p1.innerHTML = `Неверный формат ввода`;
   } else if (!/^[а-яs]+$/i.test(name)) {
      p1.innerHTML = name;
   } else if (/^[а-яs]+$/i.test(name)) {
      p1.innerHTML = `Введите на Английском`;
   }
});

btn2.addEventListener('click', function () {
   let name = tex2.value;

   if (/[\d.,:]/.test(name)) {
      p2.innerHTML = name;
   } else if (!/^[а-яs]+$/i.test(name)) {
      p2.innerHTML = `Введите значение в цифровом формате`;
   } else if (/^[а-яs]+$/i.test(name)) {
      p2.innerHTML = `Введите значение в цифровом формате`;
   }
});

btn3.addEventListener('click', function () {
   let name = tex3.value;
   let sum = 90;

   if (name == sum) {
      p3.innerHTML = name;
   } else if (name !== sum) {
      p3.innerHTML = `Знвчение не верно`;
   }
});

btn4.addEventListener('click', function () {
   let name = tex4.value;

   if (/[\d.,:]/.test(name)) {
      p2.innerHTML = name;
   } else if (!/^[а-яs]+$/i.test(name)) {
      p2.innerHTML = `Введите значение в цифровом формате`;
   } else if (/^[а-яs]+$/i.test(name)) {
      p2.innerHTML = `Введите значение в цифровом формате`;
   }
});


