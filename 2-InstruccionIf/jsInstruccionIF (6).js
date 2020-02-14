function mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

if (edad < 13){
    alert ("niño");

}
else{
    if (edad > 17){
        alert ("adulto");
    } else{ 
        alert ("adolescente");
    }
}



}//FIN DE LA FUNCIÓN