¿Qué es una variable y para qué sirve?
Se considera como un contenedor, donde se pueden almacenar datos,
una vez guardada podemos acudir a dicha variable a través del nombre que se le haya asignado.

¿Cuál es la diferencia entre declarar e inicializar una variable?
para una variable, una definición es una declaración que asigna almacenamiento para esa variable.
La inicialización es la especificación del valor inicial que se almacenará en un objeto, que no es
necesariamente el mismo que la primera vez que le asigna explícitamente un valor.

¿Cuál es la diferencia entre sumar números y concatenar strings?
Sumar números es una operación matemática y concatenar es unir strings uno tras otro.

¿Cuál operador me permite sumar o concatenar?
el de sumar

Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre : string
Apellido: string
Nombre de usuario en Platzi : string
Edad: Number
Correo electrónico: string
Mayor de edad: Boolean
Dinero ahorrado: Number
Deudas: Number

Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios

let name = "Daniela";
let lastName = "Hernández"
let userName = "iDany28"
let age = 23
let mail = "danielabizzle2810@gmail.com"
let adult = True.
let savedMoney = 2500
let debtMoney = 455555

Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
let name = "Daniela";
let lastName = "Hernández"
console.log(`Nombre completo: ${name } ${lastName}`);

//Dinero ahorrado
let savedMoney = 1000000;
let debtMoney = 500000;
let totalMoney = savedMoney - debtMoney;
console.log(`El total de mi dinero actual es: $${totalMoney`});