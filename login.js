const $ = (elemento) => document.querySelector(elemento);

$("#entrar").addEventListener("click", (ev) => {
  ev.preventDefault();

  const string = localStorage.getItem("usuario");
  const usuarioCadastrado = JSON.parse(string);

  const { login, email } = usuarioCadastrado;

  const dadosCorretos =
    login === $("#login").value && email === $("#email").value;
  console.log(dadosCorretos);

  if (!dadosCorretos) {
    alert("Dados inválidos!");
    return;
  }

  window.location.href = "./home.html";
});

$("#voltar").addEventListener("click", () => {
  window.location.href = "./index.html";
});