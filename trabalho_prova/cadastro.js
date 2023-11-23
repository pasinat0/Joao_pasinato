function redirecionarParaInventario() {
  var tentativas = 3;

  while (tentativas > 0) {
      
      var nomeUsuario = document.getElementById("nome").value;
      var senhaUsuario = document.getElementById("senha").value;

     
      if (nomeUsuario === "usuario" && senhaUsuario === "senha") {
          window.location.href = "inventario.html";
          return; 
      } else {
          tentativas--;

          alert("Usuário ou senha incorretos. Tentativas restantes: " + tentativas);
          return;
      }
  }

  alert("Número máximo de tentativas atingido. Por favor, tente novamente mais tarde.");
}

const button = document.querySelector('.botao')

button.addEventListener('click', redirecionarParaInventario);
