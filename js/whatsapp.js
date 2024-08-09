function abrirWhatsapp() {
  var nome = document.getElementById("nome").value;
  var msg = document.getElementById("msg").value;
  var url = "https://wa.me/5541999847130?text=" // Seu numero
    + "Olá me chamo: " + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "" + nome + "%0a" // Dados do formulário
    + "minha avaliação é: " + msg;
  window.open(url, '_blank').focus();
}