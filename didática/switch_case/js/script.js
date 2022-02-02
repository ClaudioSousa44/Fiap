let codigo=parseint(prompt("digite o código:"));
let produto;
switch(codigo){
    case 1:
        produto="coca-cola";
        break;
        case 2:
            produto="Sorvete";
            break;
            case 3:
                produto="chocolate";
                break;
                default:
                    produto="invalido";
                    break;


}
alert(produto)










if (codigo==1){
produto="coca-cola";
}else if(codigo==2){
    produto="Sorvete";
}else if (codigo==3){
    produto="Chocolate";
}else{
    produto="bolacha";
}
alert (produto)