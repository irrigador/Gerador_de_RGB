var random_red = Math.floor(Math.random()*255);
var random_green = Math.floor(Math.random()*255);
var random_blue = Math.floor(Math.random()*255);
mudacor()

function random_rgb(){

    random_red = Math.floor(Math.random()*255);
    random_green = Math.floor(Math.random()*255);
    random_blue = Math.floor(Math.random()*255);

    document.getElementById("Red").value = random_red;
    document.getElementById("Green").value = random_green;
    document.getElementById("Blue").value = random_blue;
    
    return "rgb("+random_red+","+random_green+","+random_blue+")";
}

document.getElementsByName("red")[0].addEventListener('change', doThing);
function doThing(){
    var codigoRgb = document.getElementById("CodigoRgb");
    var bloco = document.getElementById("cor");
    random_red = parseInt(document.getElementById("Red").value)
    bloco.style.backgroundColor = "rgb("+random_red+","+random_green+","+random_blue+")";
    codigoRgb.innerText = "Código: rgb("+random_red+","+random_green+","+random_blue+")";
}

document.getElementsByName("green")[0].addEventListener('change', doThing2);
function doThing2(){
    var codigoRgb = document.getElementById("CodigoRgb");
    var bloco = document.getElementById("cor");
    random_green = parseInt(document.getElementById("Green").value)
    bloco.style.backgroundColor = "rgb("+random_red+","+random_green+","+random_blue+")";
    codigoRgb.innerText = "Código: rgb("+random_red+","+random_green+","+random_blue+")";
}

document.getElementsByName("blue")[0].addEventListener('change', doThing3);
function doThing3(){
    var codigoRgb = document.getElementById("CodigoRgb");
    var bloco = document.getElementById("cor");
    random_blue = parseInt(document.getElementById("Blue").value)
    bloco.style.backgroundColor = "rgb("+random_red+","+random_green+","+random_blue+")";
    codigoRgb.innerText = "Código: rgb("+random_red+","+random_green+","+random_blue+")";
}

function mudacor(){
    var codigoRgb = document.getElementById("CodigoRgb");
    var bloco = document.getElementById("cor");
    bloco.style.backgroundColor = random_rgb();
    codigoRgb.innerText = "Código: "+bloco.style.backgroundColor;
    
}



const titulo = document.getElementById('titulo');
const texto = titulo.textContent;
console.log

function digitar(titulo) {
    const textoArray = titulo.innerHTML.split("");
    titulo.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function() { titulo.innerHTML += letra;}, 75 * i)
    });
}

digitar(titulo);