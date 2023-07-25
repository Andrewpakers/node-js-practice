const Person = (birthyear, deathyear, name) => {
    const age = deathyear - birthyear;
    return {name, age};
}

const citizen = (name, deathyear, birthyear, haircolor, height, weight) => {
    const person1 = Person(birthyear, deathyear, name);
    let health = 100;
    let level = 1;
    let exp = 0;
    const die = () => {
        console.log('Uh oh! You dead!');
    }
    const damage = (x) => {
        health -= x;
        if (health < 0) {
            die();
        }
        console.log(`You have ${health} health.`);
    }
    const gainXP = (xp) => {
        exp += xp;
        if (exp > 1000) {
            level += 1;
            exp %= 1000;
            console.log(`Yahoo! You are level ${level}`);
        }
    }
    const getCharSheet = () => {
        console.log(`Your name is ${name}. You are ${person1.age} years old. Your hair color is ${haircolor}, 
        your height is ${height} inches, and you weight ${weight} lbs. You are level ${level}`);
    }
    return {damage, gainXP, getCharSheet, age: person1.age};
}

const player = citizen("Ron", 2020, 2000, "Blonde", 162, 600);
