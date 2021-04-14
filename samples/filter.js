

let checkAge = (age) => age >= 18;

// Autoinv: filter over ages
let verify = ((ages) => {
    console.log(ages.filter(checkAge));
})([15, 25, 3, 99]);

