//Variaveis globais//
//========================================================================= //

var tbUsuarios = localStorage.getItem("tbUsuarios");// Recupera os dados armazenados
tbUsuarios = JSON.parse(tbUsuarios); // Converte string para objeto
if (tbUsuarios == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    tbUsuarios = [];

//Função para validar entradas de cadastro da Newsletter//
//Nome deve conter apenas letras e espaço. Email precisar conter @
//Usuario não pode enviar enquanto não digitar dados válidos
//========================================================================= //
 
function newsLetter() {
    var nome = document.getElementById("usr");
    var email = document.getElementById("email");

    if (nome.value != "" && email.value != "") { 
        var letters = /^[A-Za-z\s]+$/;  
        var str = email.value;
        var n = str.indexOf("@"); 
        if (nome.value.match(letters) && n !== -1) { 
            Adicionar();
        }
        else {
            alert('Digitar nome apenas com letras e um email válido com @! ');
            return false;
        }
    }
    else {
        alert('Preencher todos os campos');
        return false;
    }
}

// Função para cadastrar usuario pra receber Newsletter//
// ========================================================================= //

function Adicionar() {
    var formulario = document.querySelector("form");
    var nomeForm = document.querySelector("#usr");
    var emailForm = document.querySelector('#email');
    var usuario = JSON.stringify({
        nome: nomeForm.value,
        email: emailForm.value,
    });
    tbUsuarios.push(usuario);
    localStorage.setItem("tbUsuarios", JSON.stringify(tbUsuarios));
    nomeForm.value = capitalizeFirstLetter(nomeForm.value);
    alert('Obrigada, ' + nomeForm.value + '. Novidades em breve!');
    return true;
}

// Função para mostrar nome do usuário com a primeira letra maiúscula //
// ========================================================================= //

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}