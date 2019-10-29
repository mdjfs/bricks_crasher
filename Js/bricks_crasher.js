
var juego = document.getElementById('juego');
var estilo_de_marco = juego.getContext('2d');
var brick = juego.getContext('2d');
var x=650 ,y=650;
brick.fillStyle = "#000000";
brick.fillRect(x, y, 100, 20);

var eventoControlado = false;

window.onload = function() { 

document.onkeydown = mostrarInformacionTecla; }


function mostrarInformacionTecla(evObject) {


                var teclaPulsada = evObject.which;

                if (teclaPulsada == 38) 
                {
                    brick.clearRect (x,y, 140,40);
                    y-=5;
                    brick.fillRect(x,y,100,20);
                }
                if (teclaPulsada == 37) 
                {
                    brick.clearRect (x,y, 140,40);
                    x-=5;
                    brick.fillRect(x,y,100,20);
                }
                if (teclaPulsada == 39) 
                {
                    brick.clearRect (x,y, 140,40);
                    x+=5;
                    brick.fillRect(x,y,100,20);
                }
                if (teclaPulsada == 40) 
                {
                    brick.clearRect (x,y, 140,40);
                    y+=5;
                    brick.fillRect(x,y,100,20);
                }

}


estilo_de_marco.moveTo(80,10);
estilo_de_marco.lineTo(1350,10);
estilo_de_marco.strokeStyle = "#2866BB";
estilo_de_marco.moveTo(1350,10);
estilo_de_marco.lineTo(1350,710);
estilo_de_marco.moveTo(1350,710);
estilo_de_marco.lineTo(80,710);
estilo_de_marco.moveTo(80,710);
estilo_de_marco.lineTo(80,10);
estilo_de_marco.lineWidth=15;
estilo_de_marco.lineCap="round";
estilo_de_marco.stroke();
