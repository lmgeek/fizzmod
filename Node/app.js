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
/*const { EventEmitter } = require("events")
// let { EventEmitter } = events
// let EventEmitter = events.EventEmitter


let miVar = new EventEmitter()*/

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
/*let buffer = new Buffer("hola")
let buffer_vacio = new Buffer(6)
buffer_vacio.write("hola mundo")
console.log(buffer_vacio.toJSON())
console.log(buffer_vacio.toString())
console.log(buffer.toString())
console.log(buffer.toJSON())
*/


//CLASE06
/**
 * Stream : El modulo solamente nos da la abstraccion de streams en las interfaces de sus clases : 
 * - Writable : Son de solo escritura
 * - Readable : Son de solo lectura
 * - Duplex : Son de lectura y escritura
 * - Transform : Son un tipo especial de Duplix en donde el 
 * outpul se calcula en base a una transformacion del input
 */

 //FyleSystem
 const fs = require("fs")

 //fs.readFileSync(__filename)
/*
 fs.readFile(__filename,(err,data)=>{
     console.log(data);
 })
*/

//Inicia un strea, em ,pdo àusado(paused)
//Los streams pueden estar en dos modos : paused o flowing
// let archivo = fs.createReadStream(__filename)
let archivo = fs.createReadStream(__dirname+"/index.html")
let nuevo = fs.createWriteStream(__dirname+"/output.txt")

//  console.log(archivo)
 //el evento dara de un Readable se dispara cuando no sllega un chunk a traves del stream en forma de Buffer
 // Todos los streams de tipo Readable tienen el evento "data"
 archivo.on("data",chunk=>{
     console.log("Nuevo Chunk : ",chunk)
     //TODOS los streams de tipo Writable implementan el metodo write para escribir por stream
     nuevo.write(chunk)
 })

//TODOs los streams de tipo Readable implementan el evento de tipo end y se dispara cuando ya no hay mas info para leer
 /*archivo.on("end",()=>{
     nuevo.end()
 })*/

  //PIPES
  //archivo.pipe(nuevo)



//https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93




/**
 * NET / HTTP
 * 
 * 
 * TCP/IP
 * 
 * HTTP
 * 
 * Request (Cliente)
 * METODO  URL  VERSION
 * Headers
 * Body
 * 
 * GET /index.html http/1.1
 * Host : www.google.com
 * Content-Type : text/html
 * Body
 *     nombre : Luis
 * 
 * 
 * Response (Servidor)
 * VERSION  CODIGO  MENSAJE
 * Headers
 * Body
 * 
 * Http/1.1 200 OK
 * Content-Type : text/html
 * Content-length : 124
 * Access-Content-Allow-Origin : *
 * Access-Content-Allow-Origin : google.com
 * Access-Content-Allow-Origin : localhost
 * 
 * 
 * CORS : Cross Origin Resource Sharing es una politica de seguridad para compartir recursos a traves de dominios
 * 
 * 
 */


