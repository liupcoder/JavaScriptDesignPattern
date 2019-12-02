function loadImg(src) {
    let promise = new Promise((resolve, reject) => {
        let img = document.createElement('img')
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject('图片加载失败')
        }
        img.src = src
    })
    return promise
}

let src = 'http://hellolp.top/img/wechat-header.jpg'
let result = loadImg(src)
result.then((img) => {
    console.log('img.width', img.width)
    return img
}).then((img) => {
    console.log('img.height', img.height)
}).catch((ex) => {
    console.log(ex)
})

class Car {
    constructor(number, name) {
        this.number = number
        this.name = name
    }
}
class Kuaiche extends Car {
    constructor(number, name) {
        super(number, name)
        this.price = 1
    }
}
class Zhuanche extends Car {
    constructor(number, name) {
        super(number, name)
        this.price = 2
    }
}
class Trip {

    constructor(car) {
        this.car = car
    }
    start() {
        console.log(`行程开始, 名称:${this.car.name} 车牌号:${this.car.price}`)
    }
    end() {
        console.log('行程结束, 价格:' + (this.car.price * 5))
    }
}

let car = new Kuaiche(100, 'sangtana')
let trip = new Trip(car)
trip.start()
trip.end()



