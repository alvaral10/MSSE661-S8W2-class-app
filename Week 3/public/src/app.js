var object = {
    name: 'Alicia',
    age: 30
};

class Person{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new Person('Alicia', 30));