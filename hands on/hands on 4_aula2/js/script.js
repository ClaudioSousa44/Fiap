let pn=parseFloat(prompt("Digite a nota do primeiro trimestre:"));
let sn=parseFloat(prompt("Digite a nota do primeiro trimestre:"));
let tn=parseFloat(prompt("Digite a nota do primeiro trimestre:"));
let media= (pn + sn + tn)/3;


if(media >= 7) {
    alert(`Sua média é ${media}, e você foi aprovado!`)
}
else if (media < 7, media >= 4){
    alert(`Sua média é ${media}, você está em prova final!`)
} 
else {
    alert(`Sua média é ${media}, você foi reprovado!`)
}

