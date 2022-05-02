function abrir_login(){
    window.open("login.html", "_self")
}

function abrir_cadastro(){
    window.open("cadastro.html", "_self")
}



function fazerLogin(){
    var usuario_digitado = document.getElementById("usuario").value
    var test_usuario = /\d+/
    testar = test_usuario.test(usuario_digitado)

    if(testar == false){
        alert('Seu usuario deve conter apenas números')
    }

    var senha_digitada = document.getElementById("senha").value

    if(testar == true && usuario_digitado.length > 0 && senha_digitada.length > 0){
        alert("logado com êxito")
    }
}