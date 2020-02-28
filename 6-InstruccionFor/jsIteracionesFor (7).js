function mostrar()
{

    var numero;
    var contadorDivisores = 0;
    
    numero = parseInt(prompt("Ingrese un numero: "));
    
    while (isNaN(numero)){
        numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
    }
    for (var contador= 1; contador <= numero; contador++){
        if (numero % contador == 0){
            console.log(contador);
            contadorDivisores++;
        }
    
    
    }
    console.log("cantidad de divisores encontrados: " + contadorDivisores); 


}//FIN DE LA FUNCIÓN