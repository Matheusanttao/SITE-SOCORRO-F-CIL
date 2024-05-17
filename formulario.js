// Função para enviar e-mail
function enviarEmail(nome, descricao, avaliacao) {
    // Configurar o e-mail de destino
    var destinatario = "email.adm@gamil.com";
  
    // Montar o corpo do e-mail
    var corpoEmail = "Experência\n\n";
    corpoEmail += "Nome: " + nome + "\n";
    corpoEmail += "Descrição: " + descricao + "\n";
    corpoEmail += "Avaliação: " + avaliacao + " estrela(s)\n";
  
    // Abrir o cliente de e-mail padrão do usuário
    window.location.href = "mailto:" + destinatario + "?subject=Nova experiência cadastrada&body=" + encodeURIComponent(corpoEmail);
  }
  
  // Manipulador de evento para o envio do formulário
  document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedir o envio padrão do formulário
  
    // Obter os valores do formulário
    var nomeProcedimento = document.getElementById("nomeProcedimento").value;
    var descricaoProcedimento = document.getElementById("descricaoProcedimento").value;
    var avaliacao = document.querySelector('input[name="rating"]:checked').value;
  
    // Chamar a função de envio de e-mail
    enviarEmail(nomeProcedimento, descricaoProcedimento, avaliacao);
  
    // Limpar o formulário
    document.getElementById("cadastroForm").reset();
  
    // Exibir uma mensagem de sucesso (opcional)
    alert("Muito obrigado por compartilhar sua experiência!");
  });
  