function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == "ernold@gmail.com" && senha == "ernold123"){
        location.href = "pagina-inicial/pagina-inicial.html";
    }

    else{
        alert("Usuário ou senha incorretos!");
    }
}