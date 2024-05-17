const $ = (elemento) => document.querySelector(elemento);

$("#cadastro").addEventListener("click", (ev) => {
  ev.preventDefault();

  const nome = $("#nome").value;
  const email = $("#email").value;
  const login = $("#login").value;
  const confirmaEmail = $("#confirma-email").value;

  const emailComfirmado = email === confirmaEmail;

  if (!emailComfirmado) {
    alert("Sua confirmação de email não confere.\nPor favor verifique.");
    return;
  }

  const tudoPreenchido =
    nome.length !== 0 &&
    email.length !== 0 &&
    login.length !== 0 &&
    emailComfirmado.length !== 0;

  if (tudoPreenchido === false) {
    alert("Preencha todos os campos antes de enviar.");
    return;
  }

  const usuarioCadastrado = {
    email,
    nome,
    login,
    confirmaEmail,
  };

  const string = JSON.stringify(usuarioCadastrado);
  localStorage.setItem("usuario", string);

  alert("Cadastro realizado com sucesso!");
  window.location.href = "./login.html";
});
