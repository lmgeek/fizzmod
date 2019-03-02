// function foo(){
//     // console.log(arguments)
//     let copia = Array.prototype.slice.call(arguments,0)
//     a = 10
//     arguments[1] = 20
//     console.log(a,b,arguments,copia)
// }
//
// foo(1,2)


//Sync VS Async

/*
V8(stack + heap)  +  Web APIs  +  Task Queue = Javascript Front End
V8  +  libuv  +  Modulos Nativos(Javascript)  +  Librerias C/C++  +  Bindings = Javascript Backend
 */
// console.clear()

//patron modulo
(function (b) {
    let a = 1
    document.addEventListener("click",()=>{
        console.log(a)
    })
})(10)

// (function(require,__dirname,__filename,globals,module,...otros){
//     /*****
//      * TODO: Codigo Aqui
//      */
// })()

//Event Loop en Node
//Timers + IO Network + IO FS + Process
// setTimeout()
// setInterval()
// setImmediate()
// XHR
//Promise
// fetch
// process.nexTick()

//callback no es asincronico por:
// function a(callback) {
//     callback("hola")
// }
// a(res=>{console.log(res)})
// console.log("Primero")


//calback hell / pyramid of Doom
// callback(res=>{
//     callback(res=>{
//         callback(res=>{
//
//         })
//     })
// })

// let promise = new Promise(function (bien,mal) {
//     bien(1)
//     mal(Error("Error..."))
// })
// promise.then(res=>{}).catch(err=>{})

//Worker Queue
function test(){
    setTimeout(()=>{
        console.log("Timeout")
    })
    let promise = new Promise(function (resolve,reject) {
        resolve("Promesa")
    })

    promise.then(res=>{console.log(res)})
}


//
let xhr = new XHLHttpReqiest()
xhr.open("GET","http://")
xhr.addEventListener("load",function () {
    if (xhr.status == 200) {
        console.log(JSON.parse(xhr.response))
        let usuarios = JSON.parse(xhr.response))

    }
})