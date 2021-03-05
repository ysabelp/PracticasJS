//Crea una función que calcule el perímetro de un cuadrado, a partir de su lado. Crea también otra función que calcule la superficie de un cuadrado a partir de su lado. Luego de aceptar los valores para cada lado del cuadrado esta pueda mostrar a través de una página, su perímetro y el área del cuadrado
let lado = prompt("Inserte el número del lado");
function Perimetro() 
{
    perimetro = lado * 4;
    document.writeln("El perímetro del cuadrado es: " + perimetro + " y ");
    
}

function Area() 
{
    perimetro = lado * lado;
    document.writeln("El área del cuadrado es: " + perimetro);
}
Perimetro();
Area();

