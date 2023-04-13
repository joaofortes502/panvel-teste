function criptografar(rot, texto) {
  var alf = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var result = [];
  texto = texto.split("");

  for (var i = 0; i < texto.length; i++) {
    var letra = texto[i];
    var verifMaiuscula = letra === letra.toUpperCase();
    var index = alf.indexOf(letra.toLowerCase());
    index += rot;
    while (index >= 26) {
      index -= 26;
    }
    if (verifMaiuscula) {
      result.push(alf[index].toUpperCase());
    } else {
      result.push(alf[index]);
    }
  }
  console.log(result.join(""));
}

criptografar(20, "iujomuYkixkzu");
