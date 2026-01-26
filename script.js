function enviarPedido() {
    const nome = document.querySelector('input[name="nome"]').value;
    const produto = document.querySelector('select[name="produto"]').value;
    const quantidade = document.querySelector('input[name="quantidade"]').value;
    const obs = document.querySelector('textarea[name="obs"]').value;

    const numero = "5595984265839";

    const mensagem = `Olá! Meu nome é ${nome}.
Quero pedir:
Produto: ${produto}
Quantidade: ${quantidade}
Obs: ${obs}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

