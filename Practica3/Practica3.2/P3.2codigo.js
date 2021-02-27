let num1 = prompt("Inserte el primer número");
let num2 = prompt ("Inserte el segundo número");

if ((num1 >=0) && (num2 >=0))
{
    document.writeln("Hay dos números positivos: " + num1 + " es positivo, " + num2 + " es positivo");
}
else if ((num2 >=0) && (num1 <0))
{
    document.writeln("Hay un número negativo y otro positivo: " + num1 + " es negativo, " + num2 + " es positivo");
}
else if ((num1 >=0) && (num2 <0))
{
    document.writeln("Hay un número positivo y otro negativo: " + num1 + " es positivo, " + num2 + " es negativo");
}
else
{
    document.writeln("Hay dos números negativos: " + num1 + " es negativo, " + num2 + " es negativo");
}