const form = document.getElementById("livroForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Converter o formulário em URLSearchParams para evitar preflight CORS
  const dados = new URLSearchParams(new FormData(form));

  fetch("https://script.google.com/macros/s/AKfycby6VNl_isEJF3qs4W-K3-14Qc7l83itQRnYtT8-HLiXqFztmzPd68iTDiD07yPqgzWC/exec", {
    method: "POST",
    body: dados,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  })
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        form.style.display = "none";
        mensagem.style.display = "block";
      } else {
        alert("Erro ao enviar o formulário.");
      }
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao enviar o formulário.");
    });
});
