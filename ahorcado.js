var botonInicio = document.querySelector("#iniciar-juego");
var bancoDePalabras = [ "PROFESOR", "CASCO", "TIJERAS", "ACEITE", "PERRO", "GATO", "LAPICERA", "CUADERNO", "TARTA", "DERECHA", "CARACOL", "RUEDA", "ASPIRADORA", "ESPIGA"];  
var palabra = "";
var letra = "";
var palabraGuion = "";
var caracteresBanco = "";
var letraErroneas = [];
var letrasRepetidas = [];
var vidas = 0
var botonAgregarPalabra = document.querySelector("#nueva-palabra");
var palabraNueva = "";

//capturo el boton de inicio de juego
botonInicio.addEventListener("click",function(event){
    
    //selecciono una palabra aleatoria del banco de palabras 
    var palabra = bancoDePalabras[Math.floor(Math.random()*bancoDePalabras.length)]

    //convertir la palabra aleatoria en guiones bajos
    palabraGuion = palabra.replace(/./g, "_ ")
    
    //hacer visible la palabraGuion
    document.getElementById("palabraSecreta").innerHTML = palabraGuion
    palabraGuion = Array.from(palabraGuion)
    
    //capturo un ingreso desde el teclado
    window.addEventListener("keydown", ingresarLetra);

        // compruebo que la tecla apretada corresponde a una letra
            function ingresarLetra(e){    
                var tecla = e.keyCode || e.which;
                if(tecla >64 && tecla <91){
                    letra = e.key.toUpperCase();
                    comprobarLetra(letra); 
                }    
            }

        // compruebo si la letra que ingrese está o no en la palabra aleatoria 
            function comprobarLetra(letra){
                document.getElementById("palabraSecreta").style.opacity = "0";
                var palabraGuion1 = "";
                var fallo = true;   
                for (var i = 0; i < palabra.length; i++){
                    if(letra == palabra[i]){
                        palabraGuion1 = palabraGuion1 + letra + " ";
                        fallo = false;
                    }else{
                        palabraGuion1 = palabraGuion1 + palabraGuion[i*2] + " ";
                    }
                   
                }   
            
                // dibujo el ahorcado por cada letra incorrecta que se ingresa
                if(fallo){
                    var resultado = verificarLetras(letra);
                    console.log(resultado)
                    if(resultado){
                        vidas++
                        if(vidas == 1 ){
                            dibujarPoste()
                        } 
                        if(vidas == 2 ){
                            dibujarSoga()      
                        } 
                        if(vidas == 3 ){
                            dibujarCabeza()        
                        }
                        if(vidas == 4 ){
                            dibujarCuerpo()         
                        }
                        if(vidas == 5 ){
                            dibujarPrimerBrazo()                   
                        }
                        if(vidas == 6 ){
                            dibujarSegundoBrazo()                   
                        }
                        if(vidas == 7 ){
                            dibujarPrimerPierna()
                        }
                        if(vidas == 8 ){
                            dibujarSegundaPierna()
                            document.getElementById("resultadoPerdido").innerHTML = "FIN DEL JUEGO!! " + "la palabra era: " + palabra
                        }
                    }
                }
                // Muestro en pantalla los guiones
                palabraGuion = palabraGuion1
                document.getElementById("palabra").innerHTML = palabraGuion;    
                
                // corroboro si no hay guiones en palabraGion para saber si complete todas las letras
                if(palabraGuion1.search("_")==-1){
                    document.getElementById("resultadoGanador").innerHTML= "GANASTE!!! LA PALABRA SECRETA ERA: " + palabra
                    window.removeEventListener("keydown",ingresarLetra)// bloquea el teclado
                }
                    
            }       

               
             // verifica si la letra ingresada erronea esta o no en la lista de letrasErroneas    
            function verificarLetras(valor){
                letra = valor;
                var agrego = false; // se utiliza para ver si suma vidas o no
                
                if(!letraErroneas.includes(letra)){
                    letraErroneas.push(letra);  //incorporo la letra equivocada en el array letras
                    document.getElementById("letrasError").innerHTML = letraErroneas;
                    agrego = true
                    
                }else{
                    letrasRepetidas.push(letra);   //si la letra se repite la agrego en el array letrasRepetidas
                    alert("Ya utilizaste esa letra")    
                            
                }
                console.log(agrego)
                return agrego 
            }
    
        
});

//capturo el boton de agregar palabra
botonAgregarPalabra.addEventListener("click",function(event){
    palabraNueva = document.querySelector("#input-nueva-palabra").value
    palabraNueva = palabraNueva.toUpperCase();
    console.log(palabraNueva)
    comprobarPalabraNueva(palabraNueva)
})

// comprobar si esa palabra existe en el banco de palabras
function comprobarPalabraNueva(texto){
    palabraNueva = texto;
    if(!bancoDePalabras.includes(palabraNueva)){
        bancoDePalabras.push(palabraNueva);
            console.log(bancoDePalabras);
    }else{
        alert("La palabra " + palabraNueva + " ya existe en el Banco de Palabras, ingrese otra por favor");

    }
}



