function mostrar()
{

var numero;
var contadorPares = 0;

numero = parseInt(prompt("Ingrese un numero: "));

while (isNaN(numero)){
    numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
}
for (var contador= 1; contador <= numero; contador++){
    if (contador % 2 == 0){
        console.log(contador);
        contadorPares++;
    }


}
console.log("cantidad de pares encontrados: " + contadorPares); 
}//FIN DE LA FUNCIÓN