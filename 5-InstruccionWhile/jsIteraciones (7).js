function mostrar()
{
    var numero;
	var contador=0;
	var acumulador=0;
	var seguir='si';
    var promedio;

	
do{
	numero = parseInt(prompt("ingrese un numero: "));


	while (isNaN(numero)){
		numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));

	} 
	acumulador = acumulador + numero;
	contador ++;
	
	seguir = prompt("Quiere ingresar otro numero?");

} while (seguir == 'si');

promedio = acumulador / contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN