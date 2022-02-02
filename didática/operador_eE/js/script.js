let login=prompt("Login:")
let senha=prompt("Senha:")
//para permitir login deve-se entrar com as credenciais 
//ADMIN senha:admin123
 /*if (login=="ADMIN"){
    if (Senha=="admin123"){
        alert ("Acesso autorizado");
    }
} */
if (login=="ADMIN" && senha=="admin123"){
    alert ("Acesso autorizado")
}else {
    alert("Acesso negado")
}