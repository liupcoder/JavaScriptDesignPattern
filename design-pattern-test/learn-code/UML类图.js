class Person {
    constructor(name, age, house) {
        this.name = name
        this.age = age
        this.house = house
    }
    eat() {
        alert(`${this.name} eat somthing`)
    }
    speak() {
        alert(`${this.name} speak age = ${this.age}`)
    }
}

class A extends Person {
    constructor(name, age, house) {
        super(name, age, house)
    }
    saySomething() {
        alert('I am A')
    }
}

class B extends Person {
    constructor(name, age, house) {
        super(name, age, house)
    }
    saySomething() {
        alert('I am B')
    }
}

class House {
    constructor(city) {
        this.city = city
    }
    showCity() {
        alert(this.city)
    }
}

let aHouse = new House('beijing')
let a = new A('a', 26, aHouse)
a.saySomething()
let b = new B('b', 40)
b.saySomething()


