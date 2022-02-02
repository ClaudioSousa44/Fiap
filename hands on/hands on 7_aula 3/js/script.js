let n1=parseFloat(prompt("digite a primeria nota:"));
let n2=parseFloat(prompt("digite a segunda nota:"));
let media= (n1 + n2) / 2;

let AA=parseInt(prompt("Digite quantas aulas foram assistidas:"));
let AD=parseInt(prompt("Digite quantas aulas foram dadas:"));
let Fre= (AA / AD)* 100

if (media >= 7 && Fre >= 75) {
    alert(`Sua média foi ${media} e sua frequencia foi de ${Fre}%. Voce foi aprovado.`)
} else {
    alert(`Sua média foi ${media} e sua frequencia foi de ${Fre}%. Voce foi reprovado.`)
}




