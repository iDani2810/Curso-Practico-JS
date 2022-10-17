const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p'); //selecciona todos los parrafos
const parrafito = document.getElementsByClassName('parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('input');


// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

h1.innerHTML = "Patito Feo";
h1.innerText = 'Patito Feo';

h1.getAttribute('pantalla');
// console.log(h1.getAttribute('class'));

// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

// h1.classList.toggle('verde'); //cuando tengamos eventos
// h1.classList.contains('verde');

input.value = "456"


const img = document.createElement('img'); //nos ayuda acreear el elemento html que queramos

img.setAttribute('src', 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc')
console.log(img);

//borrar el contenido

pid.innerHTML = '';

pid.append(img); //append y appendChild agregan el contenido despues de lo que tuvieramos