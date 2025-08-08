const form = document.getElementById("livroForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const dados = new FormData(form);

  fetch("TROCAR_POR_URL_DO_SCRIPT", {
    method: "POST",
    body: dados,
  })
    .then((response) => {
      if (response.ok) {
        form.style.display = "none";
        mensagem.style.display = "block";
      } else {
        alert("Erro ao enviar o formulário.");
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Erro ao enviar o formulário.");
    });
});
