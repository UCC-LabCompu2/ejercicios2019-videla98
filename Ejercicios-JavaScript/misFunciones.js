/**
 * Created by Agus on 6/5/2017.
 */
function mostrar_ocultar_div(id_elem){
    if(id_elem == "ocultarDiv"){
        document.getElementById("unDiv").style.display = 'none';
    }
    if(id_elem == "mostrarDiv"){
        document.getElementById("unDiv").style.display = 'block';
    }
}
/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function dibujarCircCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#48aa2c"; //Color
    ctx.beginPath(); //comenzar
    ctx.rect(0, 0, 100, 100); //Posicion de inicio y medidas
    ctx.fill(); //rellenar
    ctx.closePath(); //Levantar el lapiz

    ctx.fillStyle = "#ba2c1e";
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 30, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
}

function dibujarCuadricula(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000";

    ctx.beginPath();

    for(var i=0;i<canvas.width;i+=10){
        ctx.moveTo(i,0);
        ctx.lineTo(i, canvas.height);
    }
    for(var i=0;i<canvas.height;i+=10){
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
    }
    ctx.stroke();
    ctx.closePath();
}

function dibujarImagen() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function(){ //pre-carga la funcion para que se ejecute al primer click
        ctx.drawImage(img, document.getElementById("posicionX.value"), document.getElementById("posicionY.value"));
    }
}