var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightslategrey";



function dibujarPoste(){
    pincel.fillRect(0,0,1200,400);
    pincel.beginPath();
    pincel.moveTo(50,390);
    pincel.lineTo(200,390);
    pincel.lineTo(300,320);
    pincel.lineTo(160,320);
    pincel.closePath();
    pincel.rect(180,355,6,-350);
    pincel.stroke();
    pincel.rect(180,6,170,6);
    pincel.stroke();    
}

function dibujarSoga(){
    pincel.moveTo(350,12);
    pincel.lineTo(350,70);
    pincel.stroke();
}


function dibujarCabeza(){
    pincel.beginPath();
    pincel.arc(350,100,30,0,Math.PI*2)
    pincel.stroke();
}

function dibujarCuerpo(){
    pincel.moveTo(350,130);
    pincel.lineTo(350,255);
    pincel.stroke();
}

function dibujarPrimerPierna(){
    pincel.moveTo(350,255);
    pincel.lineTo(420,300);
    pincel.stroke();
}

function dibujarSegundaPierna(){
    pincel.moveTo(350,255);
    pincel.lineTo(280,300);
    pincel.stroke();
}

function dibujarPrimerBrazo(){
    pincel.moveTo(350,170);
    pincel.lineTo(420,215);
    pincel.stroke();

}

function dibujarSegundoBrazo(){
    pincel.moveTo(350,170);
    pincel.lineTo(280,215);
    pincel.stroke();

}


   





