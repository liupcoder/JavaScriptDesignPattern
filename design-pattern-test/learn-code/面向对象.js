// 父类
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        alert(`${this.name} eat somthing`)
    }
    speak() {
        alert(`${this.name} speak age = ${this.age}`)
    }
}

// 子类 继承 父类
class Student extends Person {
    constructor(name, age, number) {
        super(name, age)
        this.number = number
    }
    study() { 
        alert(`${this.name} study`)
    }
}

let xiaoming = new Student('xiaoming', 12, "A1")
xiaoming.eat()
xiaoming.study()