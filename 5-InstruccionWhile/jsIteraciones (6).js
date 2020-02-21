function mostrar()
{

	var contador=0;
	var acumulador=0;
    var promedio;


	while(contador < 5){
		numero = parseInt(prompt("Ingrese un numero: "));

		while(isNaN(numero)){

			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));

		}
		acumulador = acumulador + promedio;
		contador ++;

	}
promedio = acumulador / 5;
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;

}


