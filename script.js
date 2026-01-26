function enviarPedido() {
    const nome = document.querySelector('input[name="nome"]').value.trim();
    const produto = document.querySelector('select[name="produto"]').value;
    const quantidade = document.querySelector('input[name="quantidade"]').value.trim();
    const obs = document.querySelector('textarea[name="obs"]').value.trim();

    if (!nome || !produto || !quantidade) {
        alert("Preencha nome, produto e quantidade!");
        return;
    }

    const mensagem =
`Olá! Meu nome é ${nome}.
Gostaria de fazer um pedido:
Produto: ${produto}
Quantidade: ${quantidade}
Observações: ${obs || "Sem observações."}`;

    // SEU WHATSAPP (sem +, sem espaço, sem traços)
    const numero = "5595984265839";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}
