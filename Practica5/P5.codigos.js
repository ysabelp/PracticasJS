const contenedor = document.getElementById("contenedor")
const cuadrado = document.createElement("div")
cuadrado.setAttribute("id","square");
cuadrado.style.width = "400px"
cuadrado.style.height = "620px"
cuadrado.style.backgroundColor = "lightgrey"
contenedor.appendChild(cuadrado)

const imagen = document.createElement("img")
imagen.setAttribute("src", "foto.jpg");
imagen.setAttribute("height", "200px");
imagen.setAttribute("width", "300px");
imagen.setAttribute("id", "imagen");
document.getElementById("square").appendChild(imagen)

const titulo = document.createElement("h3")
titulo.setAttribute("id","titulo");
titulo.innerHTML = "Cómo añadir un efecto a una imagen"
titulo.style.fontFamily = "verdana"
titulo.style.fontSize = "18px"
document.getElementById("square").appendChild(titulo)

const parrafo = document.createElement("p")
parrafo.innerHTML = "Existen muchos plugins para insertar efectos especiales a las imágenes cuando se le pasa el cursor por encima. Todos esos plugins añaden un montón de código a la página, que terminan afectando la velocidad de la web en sí. Si quieres utilizar muy poco código para así optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti."
parrafo.style.fontFamily = "verdana"
parrafo.style.fontSize = "12px"
parrafo.style.textAlign = "left"
parrafo.style.width = "360px"
parrafo.style.paddingRight = "20px"
parrafo.style.paddingLeft = "20px"
document.getElementById("square").appendChild(parrafo)

const boton = document.createElement("button")
boton.style.background = "red"
boton.style.color = "white"
boton.style.fontFamily = "verdana"
boton.style.border = "none"
boton.style.borderRadius = "12px"
boton.style.padding = "0px"
boton.style.cursor = "pointer"
boton.style.height = "35px"
boton.style.userSelect = "none"
boton.style.width = "100px"
boton.style.marginTop = "40px"
boton.innerHTML = "Leer más"
document.getElementById("square").appendChild(boton)