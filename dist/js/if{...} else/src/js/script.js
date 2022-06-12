'use strict';
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


