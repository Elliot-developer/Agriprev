function abrirWhatsapp() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var url = "https://wa.me/554199847130?text=" // Seu numero
    + "Olá me chamo: " + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "" + nome + "%0a" // Dados do formulário
    + "este é meu e-mail: " + email + "%0a"
    + "minha avaliação é: " + msg;
  window.open(url, '_blank').focus();
}