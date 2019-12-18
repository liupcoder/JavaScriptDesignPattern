class Circle {
    draw() {
        console.log('画一个圆形')
    }
}
class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw() {
        this.circle.draw()
        this.setRedBorder(this.circle)
    }
    setRedBorder(circle) {
        console.log('设置红色边框')
    }
}

let circle = new Circle()
circle.draw()

let dec = new Decorator()
dec.draw()


function testDes(isDec) {
    return function (target) {
        target.isDec = isDec
    }
}

@testDes(false)
class Demo {

}

alert(Demo.isDec)

function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}

const Foo = {
    foo() {
        alert('foo')
    }
}

@mixins(Foo)
class MyClass {

}

let obj = new MyClass()
obj.foo()



function readonly(target, name, descriptor) {
    descriptor.writable = false
    return descriptor
}

class Person {
    constructor() {
        this.first = "A"
        this.last = "B"
    }

    @readonly
    name() {
        return `${this.first} ${this.last}`
    }
}


let p = new Person()

console.log(p.name())

p.name = function () {
    alert(100)
}

function log(target, name, descriptor) {
    let oldValue = descriptor.value
    descriptor.value = function() {
        console.log(`calling ${name} with `, arguments)
        return oldValue.apply(this, arguments)
    }
}

class Math {
    @log
    add(a, b) {
        return a + b
    }
}

let math = new Math()
const res = math.add(2, 4)

console.log(res)