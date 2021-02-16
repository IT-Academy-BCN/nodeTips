

//example 1
function asyncThing (value) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 100);
    });
}

async function main () {
    return [1,2,3,4].filter(async (value) => {
        const v = await asyncThing(value);
        return v * 2;
    });
}

main()
    .then(v => console.log(v))
    .catch(err => console.error(err));


//example 2
let checkAge = (age) => age >= 18;

// Autoinv: filter over ages
let verify = ((ages) => {
    console.log(ages.filter(checkAge));
})([15, 25, 3, 99]);

