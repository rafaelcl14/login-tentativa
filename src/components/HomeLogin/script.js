 
 export function teste() {

    var form = document.getElementById('formulario');
    var campoUsuario = document.getElementById('usuario');
    var campoSenha = document.getElementById('senha');

    // Aqui cria uma comunicação Ajax
    var xmlhttp = new XMLHttpRequest();

    function redirecionar(url) {
        window.location.href = url;
    }

    function validaUsuario(usuriosJson) {
        usuriosJson.forEach(usuario => {
            //console.log("Usuário: " + usuario.userName + " | Password: " + usuario.password);
            if (campoUsuario.value == usuario.userName && campoSenha.value == usuario.password) {
                // alert("Redirecionar para:\n" + usuario.drive)
                redirecionar(usuario.drive);
            }
        });
    }

    // Aqui define o método para receber os dados do servidor
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { // Caso a resposta do servidor for ok
            var respostaJson = JSON.parse(this.responseText); // Aqui decodifica do arquivo de texto recebido para json

            //document.getElementById("resposta").innerHTML = JSON.stringify(respostaJson, null, 4);

            validaUsuario(respostaJson);

        }
    };

    form.addEventListener('submit', function (e) {
        /*
        // alerta o valor do campos
        if (campoUsuario.value == campoSenha.value) {
            alert("São Iguais");
        } else {
            alert('Não são iguais')
        }
        */

        xmlhttp.open("GET", "http://143.198.170.96/logins", true);
        xmlhttp.send();


        // impede o envio do form
        e.preventDefault();
    });




}

