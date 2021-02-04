
function sumar(a,b){
    return a + b;
}
console.log(sumar(10,20));

let sumarFuncionFlecha = (a,b) => {
    return a + b;
}

console.log(sumarFuncionFlecha(10,20));

//*****************************

let sumarFuncionFlecha_2 = (a,b) => a + b;

console.log('sumarFuncionFlecha_2: ' + sumarFuncionFlecha_2(10,20));

//*****************************

function saludar(){
    return 'Hola Mundo';
}

let saludarFuncionFlecha = () => 'Hola Mundo';

console.log(saludarFuncionFlecha());

//*****************************

//asignación de variable / parametro(s) a recibir (posible sin parentesis si es uno solo) / flecha / cuerpo del return
let saludar_2 = nombre => `HOla ${ nombre }`;

console.log(saludar_2 ( 'Jonatan' ));
