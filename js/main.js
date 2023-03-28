function suma(){
    var a=0;
    var b=0; 
    var suma=0;
    alert("Por favor ingrese el primer valor");
    a=parseInt(prompt(""));
    alert("Por favor ingrese el sengundo valor");
    b=parseInt(prompt(""));
    suma= a+b;
    alert("El resultado es:" + suma);    


}
function opbasicas(){
 
    var a=0;
    var b=0;
    var resta=0;
    var suma=0;
    var multiplicacion=0;
    var division=0;
    alert("Por favor ingrese el primer valor");
    a=parseInt(prompt(""));
    alert("Por favor ingrese el sengundo valor");
    b=parseInt(prompt(""));
    suma= a+b;
    resta=a-b;
    multiplicacion=a*b;
    division=a/b;
    alert("El resultado de la suma es:" + suma + "  El resultado de la resta es: " + resta + "  El resultado de la multiplicación es: " + multiplicacion
    + "  El resultado de la división es: " + division);    

} 
function promedioNotas(){
    var nota1 = 0;
    var nota2 = 0;
    var nota3 = 0;
    var nota4 = 0;
    var nota5 = 0;
    var nota6 = 0;
    var nota7 = 0;
    var nombreM = "";
    var promedio = 0;

    alert("Por favor ingrese el nombre de la materia:");
    nombreM = (prompt(""));
    alert("Por favor ingrese la nota 1");
    nota1=parseInt(prompt(""));
    alert("Por favor ingrese la nota 2");
    nota2=parseInt(prompt(""));
    alert("Por favor ingrese la nota 3");
    nota3=parseInt(prompt(""));
    alert("Por favor ingrese la nota 4");
    nota4=parseInt(prompt(""));
    alert("Por favor ingrese la nota 5");
    nota5=parseInt(prompt(""));
    alert("Por favor ingrese la nota 6");
    nota6=parseInt(prompt(""));
    alert("Por favor ingrese la nota 7");
    nota7=parseInt(prompt(""));

    promedio = ((nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7 );
    alert("El promedio de sus notas en la materia" + nombreM + "es: " + promedio);

    if(promedio > 6.1){
        alert("Materia  " + nombreM + " Aprobada.");
    } else {
        alert("Materia  " + nombreM  + " no aprobada");
    }
}
function inversionCapital(){

    var capital=0;
    var numeroAños=0;
    var gananciaAnual=0;
    var gananciaTotal=0;
    const interes=0.017;
    const meses=12;
    alert("Por favor ingrese el capital que desea invertir");
    capital=parseInt(prompt(""));
    alert("Por favor ingrese el número de años que desea mantener la inversión");
    numeroAños=parseInt(prompt(""));
    gananciaAnual= ((capital + interes)*meses);
    gananciaTotal= (gananciaAnual*numeroAños);
    alert("Su ganancia total en  " + numeroAños +  "  años  " +  "  es de  " +  gananciaTotal);
}
function mayorDosN(){
    var a=0;
    var b=0;
    a=parseInt(prompt("Por favor ingrese el primer valor"));
    b=parseInt(prompt("Por favor ingrese el sengundo valor"));
    if(a > b)
    {
        alert(a + " es mayor que " + b);
    } else if (a < b)
    {
        alert(b + " es mayor que " + a);
    } else
    alert(a + " es igual a " + b);
}
function menorDosN(){
    var a=0;
    var b=0;
    a=parseInt(prompt("Por favor ingrese el primer valor"));
    b=parseInt(prompt("Por favor ingrese el sengundo valor"));
    if(a < b)
    {
        alert(a + " es menor que " + b);
    } else if (a > b)
    {
        alert(b + " es menor que " + a);
    } else
    alert(a + " es igual a " + b); 
}
function menorTresN(){
    var a=0;
    var b=0;
    var c=0;
    a=parseInt(prompt("Por favor ingrese el primer valor"));
    b=parseInt(prompt("Por favor ingrese el sengundo valor"));
    c=parseInt(prompt("Por favor ingrese el tercer valor"));
    if(a < b && a < c)
    {
        alert( " el numero menor es" + a);
    } else if (a < b && a > c)
    {
        alert( " el numero menor es" + c);
    } else if (a > b && a < c)
    {
        alert( " el numero menor es" + b);
    } else if(a < b && b < c)
    {
        alert( " Numero menor es" + a );
    } else if(a > b && b > c)
    {
        alert( " Numero menor es" + c );
    } 
    else
    {
        alert("Numeros iguales");
    }
}
function Edad(){
    var e=0
    var a=0
    var resta=0
    e=parseInt(prompt("Por favor ingrese su edad"));
    a=parseInt(prompt("Por favor ingrese el año actual"));
    resta=a-e;
    alert("Su año de naciemiento es "  +  resta); 
}
function aTriangulo(){
    var b=0
    var h=0
    var d=2
    var m=0
    b=parseInt(prompt("Por favor ingrese la base del triángulo"));
    h=parseInt(prompt("Por favor ingrese la altura del triángulo"));
    m=b*h
    d=m/d
    alert("El área del triángulo es " + d)
}
function circulo(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("circulo");
}
function rectangulo(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("rectangulo");
}
function rombo(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("rombo");
}
function gif(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("gif");
}
function izquierda(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("izquierda");   
}
function derecha(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("derecha");   
}
function arriba(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("arriba");   
}
function abajo(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("abajo");   
}
function diagonal(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("diagonal");   
}