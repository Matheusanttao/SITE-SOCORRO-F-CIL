
  // Função para enviar e-mail
  function enviarEmail(nome, descricao) {
    // Configurar o e-mail de destino
    var destinatario = "email.adm@gamil.com";

    // Montar o corpo do e-mail
    var corpoEmail = "Um novo procedimento foi cadastrado:\n\n";
    corpoEmail += "Nome: " + nome + "\n";
    corpoEmail += "Descrição: " + descricao + "\n";

    // Abrir o cliente de e-mail padrão do usuário
    window.location.href = "mailto:" + destinatario + "?subject=Novo procedimento cadastrado&body=" + encodeURIComponent(corpoEmail);
  }

  // Manipulador de evento para o envio do formulário
  document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedir o envio padrão do formulário

    // Obter os valores do formulário
    var nomeProcedimento = document.getElementById("nomeProcedimento").value;
    var descricaoProcedimento = document.getElementById("descricaoProcedimento").value;

    // Chamar a função de envio de e-mail
    enviarEmail(nomeProcedimento, descricaoProcedimento);

    // Limpar o formulário
    document.getElementById("cadastroForm").reset();

    // Exibir uma mensagem de sucesso (opcional)
    alert("Procedimento cadastrado com sucesso!");
  });

