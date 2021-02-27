let num1 = prompt("Inserte el primer número");
let num2 = prompt ("Inserte el segundo número");
let num3 = prompt("Inserte el tercer número");
const mayor = Math.max(num1, num2, num3);

if ((num1 == num2) && (num2 == num3))
{
    document.writeln("Todos son iguales");
}
else
{
    document.writeln("El mayor es: " + mayor);
}
