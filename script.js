// Professor: esperamos o HTML carregar para garantir que o form existe
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-pedido");
  if (!form) return;

  // Professor: quando clicar em "Enviar", capturamos o submit
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // impede recarregar/ir para "#"
    enviarPedido();
  });
});

function enviarPedido() {
  const nome = document.querySelector('input[name="nome"]').value.trim();
  const produto = document.querySelector('select[name="produto"]').value.trim();
  const quantidade = document.querySelector('input[name="quantidade"]').value.trim();
  const obs = document.querySelector('textarea[name="obs"]').value.trim();

  // Professor: validação simples (regra do obrigatório)
  if (!nome || !produto || !quantidade) {
    alert("Preencha nome, produto e quantidade!");
    return;
  }

  // Professor: montamos a mensagem pronta para o WhatsApp
  const mensagem =
`Olá! Meu nome é ${nome}.
Gostaria de fazer um pedido:
Produto: ${produto}
Quantidade: ${quantidade}
Observações: ${obs ? obs : "Sem observações."}`;

  // Professor: coloque seu número com DDI+DDD+numero (sem espaços)
  const numero = "5595984265839"; // ✅ troque se precisar

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  // Professor: abre o WhatsApp em nova aba
  window.open(url, "_blank");

  // Professor: fecha o modal voltando o hash para vazio
  window.location.hash = "";
}
