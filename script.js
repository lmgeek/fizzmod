/**
 * Primitivos (string - number - boolean - NULL - undefined)
 * Objetos (object - array - function ...)
 *
 * https://developer.mozilla.org/es/docs/Web/API
 */

// let a = {};
// a.toString();

//window.Persona = function Persona(){}
function Persona(){
    console.log(this)
}
Persona() //window{}
//Contexto: El contexto de una funcion , en lineas generales, nos va a dar una referencia
// de que objeto contiene a esa funcion y esta en la palabra reservada this
//No es estatico y puede variar por lugar de ejecucion o desicion del dev

/*
* Function.call()
* Function.apply()
* Function.bind()
*
* */
console.log("========================================")

function ctx(a,b){
    console.log("Parametros: ",a,b)
    console.log("Contexto: ",this)
    console.log("*****************************")

}

ctx(1,2)
//call y apply ejecutan la funcion
ctx.call({ctx:"call"})                       //undefined undefined {ctx:"call"}
ctx.call({ctx:"call"},10,20)                 //10 20 {ctx:"call"}
console.clear()                              //limpiar consola
ctx.apply({ctx:"apply"},[100,200])           //100 200 {ctx:"apply"
//bind retorna la definicion de la funcion
console.clear()
ctx.bind({ctx:"bind"},1000,2000)

//new ejecuta la funcion que tiene al lado reasignandole el contexto
// con un objeto vacio. Al finalizar la ejecucion de la funcion, retorna ese objeto que creo

//esta sentencia
// new ctx
//
//es similar a esto
// let a = {}
// ctx.call(a)
// return a


new ctx


/*

function foo(a,b){
    console.log(a,b)
}
//no es muy correcto pero funciona
// document.addEventListener("click",function(){foo(1,2)})
// es correcto y funciona
document.addEventListener("click", foo.bind(null,1,2))

*/

console.clear()
// closure :
function Persona(){
    //atributo privado de clase que le pertenece al closure de la funcion que la use
    let nombre = "luis"

    //metodo publico de instancia que guarda como referencia el atributo privado del closure
    this.getnombre = function () {
        console.log(nombre)
    }
}

new Persona()