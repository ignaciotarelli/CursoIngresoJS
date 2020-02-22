function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	do{

		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)){
			numero = parseInt(prompt("No es un numero. Ingrese un numero: "));
		} 

		if (numero >= 0){
			positivo = positivo + numero;
			

		} else{
			negativo = negativo * numero;
            contador=1
		} 
		seguir = prompt("Quiere ingresar otro numero?");
		} while(seguir == 'si')

		if(contador == 0){
			negativo = 0;
		}

		document.getElementById('suma').value=positivo;
		document.getElementById('producto').value=negativo;
	}



//FIN DE LA FUNCIÓN