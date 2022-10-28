document.getElementById("enviar").addEventListener
    ("click", validaFormulario);

function validaFormulario() {
    if (document.getElementById("nome").value != "" &&
        document.getElementById("email").value != "") {

        alert(" Dados preenchidos! ");

    } else {
        alert("Por favor, preencha os campos!");
    }

}

