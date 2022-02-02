let QI=parseFloat(prompt("digite a quilometragem inicial:"));
let QF=parseFloat(prompt("digite a quilometragem final:"));
let res1= QF - QI;
let gaso=parseFloat(prompt("digite a quantidade de gasolina gasta (litro):"));
let div= res1 / gaso;
alert(`Média: ${div} km por litro`)