function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique o ano digitado");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "criancamasculino.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "adolescentemasculino.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "homemadulto.jpg");
      } else {
        img.setAttribute("src", "idosomasculino.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "criancafeminina.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "adolescentefeminina.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "mulheradulta.jpg");
      } else {
        img.setAttribute("src", "idosafeminina.jpg");
      }
    }

    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
