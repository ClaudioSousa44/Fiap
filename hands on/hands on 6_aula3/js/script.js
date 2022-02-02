let z=parseFloat(prompt("Digite o valor de z"));
let y=parseFloat(prompt("Digite o valor de y"));
let x=parseFloat(prompt("Digite o valor de x"));

if (z < x + y && x < z + y && y < z + x) {
    alert("é um triangulo")
} else {
    alert("Não é um triangulo")
}

/*if(x!=z && x!=y && z!=y){
    alert("é um triangulo escaleno")
} else if(z==x || z==y || x==y) {
    alert("é um triangulo isosceles")

} else {
    alert("é um triangulo equilatero")
}
*/




if (z==x && x==y && y==z){
    alert("É um triangulo equilatero")
} else if(z==x || z==y || x==y ){
    alert("É um triangulo isósceles")
} else {
    alert("É um triangulo escaleno")
} 