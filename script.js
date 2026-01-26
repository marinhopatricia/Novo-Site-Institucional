function enviarPedido() {
    let nome = document.querySelector('input[name="nome"]').value;
    let produto = document.querySelector('select[name="produto"]').value;
    let quantidade = document.querySelector('input[name="quantidade"]').value;
    let obs = document.querySelector('textarea[name="obs"]').value;

    if (!nome || !produto || !quantidade) {
        alert("Preencha nome, produto e quantidade!");
        return;
    }

    let mensagem = `Olá! Meu nome é ${nome}.
Gostaria de fazer um pedido:
Produto: ${produto}
Quantidade: ${quantidade}
Observações: ${obs}`;

    let numero = "5599999999999"; // trocar pelo número real
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
}
