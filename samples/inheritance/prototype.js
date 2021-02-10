let person = {
    greetings () {
        return 'Hola'
    }
};

let friend = {
    greetings () {
        return super.greetings() + ", saludos!!!";
    }
};


Object.setPrototypeOf(friend, person);

console.log(friend.greetings() );
