
console.log('Inicio del programa');
setTimeout( function (){
    console.log('Primer Timeout');
}, 3000); //ejecuta algo en el espacio de tiempo indicado (callback)

setTimeout( function (){
    console.log('2º Timeout');
}, 0);

setTimeout( function (){
    console.log('3er Timeout');
}, 0);
console.log('Fin del programa');

/* Output:
Inicio del programa
Fin del programa
2º Timeout
3er Timeout
Primer Timeout
 */
