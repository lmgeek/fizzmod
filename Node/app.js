//Node : .js .json

//incluir modulos
/*require("nombre_modulo")

//exportar info de un modulo
let a = 1
exports = a //esto no se puede porque
exports.a = 1
module.exports = a
module.exports = {
    a : 1
}
*/


//Buffer - Stream - EventEmitter

// const events = require("events")
const { EventEmitter } = require("events")
// let { EventEmitter } = events
// let EventEmitter = events.EventEmitter


let miVar = new EventEmitter()

// class CustomClass extends EventEmitter {
//
// }
// let custom = new CustomClass()

//es lo mismo que el extends
// function CustomClass(){
//     EventEmitter.call(this)
// }
// CustomClass.prototype = Object.create(EventEmitter.prototype)


// miVar.on("click",()=>{
//     setImmediate(()=>{console.log("Me hicieron click")})
//     //process.nextTick(()=>{console.log("Next Tick")})
// })
//
// miVar.emit("click")
// console.log("Segundo")


//pasando eventos
/*
miVar.on("click",a=>{
    setImmediate(()=>{console.log("Me hicieron click")})
    console.log(a)
    //process.nextTick(()=>{console.log("Next Tick")})
})

miVar.emit("click",1)
console.log("Segundo")*/


//Buffer
let buffer = new Buffer("hola")
let buffer_vacio = new Buffer(6)
buffer_vacio.write("hola mundo")
console.log(buffer_vacio.toJSON())
console.log(buffer_vacio.toString())
console.log(buffer.toString())
console.log(buffer.toJSON())