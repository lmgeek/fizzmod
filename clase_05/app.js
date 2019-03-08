/*function ajax(params){
	let xhr = new XMLHttpRequest
	xhr.open(params.metodo,params.url)
	xhr.addEventListener("load",function(){
		if (xhr.status == 200) {
			params.success(JSON.parse(xhr.response))
		}
	})
	xhr.send()
}*/
/*
ajax({
	metodo : "GET",
	url : "url1",
	success : function(data){
		ajax({
			metodo : "GET",
			url : "url2"+data,
			success : function(data){
				ajax({
					metodo : "GET",
					url : "url3"+data,
					success : function(data){
						
					}
				})
			}
		})		
	}
})
*/
/*
ajax({
	metodo : "GET",
	url : "url1"
})
.done(data=>{
	ajax({
		metodo : "GET",
		url : "url1"
	})
})
.done(data=>{

})
.fail()
*/

//XHR + Promise
/*
let url = "https://jsonplaceholder.typicode.com/"
let usuarios = fetch(`${url}users`)
usuarios
.then(data=>data.json())
.then(data=>fetch(`${url}posts?userId=${data[6].id}`))
.then(data=>data.json())
.then(data=>Promise.all(data.map(post=>fetch(`${url}comments?postId=${post.id}`))))
.then(data=>Promise.all(data.map(comment=>comment.json())))
.then(data=>console.log(data))
.catch(err=>console.error(err))
*/

/*let imagen = fetch(`img.jpg`) //=> Promise

imagen
.then(data=>data.blob())
.then(data=>{
	let url = URL.createObjectURL(data)
	let img = document.createElement("img")
	img.src = url
	document.body.appendChild(img)
})
.catch(error=>console.error(error))
*/

//ASYNC/AWAIT
let url = "https://jsonplaceholder.typicode.com/"
async function obtenerComentarios(){
	let usuarios_response = await fetch(`${url}users`)
	let usuarios = await usuarios_response.json()
	let post_response = await fetch(`${url}posts?userId=${usuarios[6].id}`)
	let post = await post_response.json()
	//opc 1
	/*
	let comments_response = await Promise.all(post.map(async post=>{
		let fetch_commet = await fetch(`${url}comments?postId=${post.id}`)
		let comment = await fetch_commet.json()
		return comment
	}))
*/
	let comments_response = await Promise.all(post.map(async post=>await fetch(`${url}comments?postId=${post.id}`)))
	let comments = await Promise.all(comments_response.map(async response=>await response.json()))
	console.log(comments)
}

obtenerComentarios()



