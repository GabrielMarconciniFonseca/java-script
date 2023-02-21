function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = 12;//data.getHours();
  var min = data.getMinutes();
  msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`;

  if (hora >= 0 && hora < 12) {
    img.src = "fotomanha.jpg";
    document.body.style.background = "#e2cd9f";
  } else if (hora > 12 && hora <= 18) {
    img.src = "fototarde.png";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "fotonoite.png";
    document.body.style.background = "#515154";
  }
}
