var numeroSecreto = 3; // Valor da carta escolhido pelo usuário

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value); // Obtem valor pelo id "valor" que é a carta escolhido pelo usuário
  var resultado = document.getElementById("resultado"); // Obtem o elemento pelo id "resultado" que é o resultado da carta escolhido pelo usuário
  // alert("Você escolheu o número " + chute + " e o resultado é " + numeroSecreto.); // Mostra o valor da carta escolhido pelo usuário em uma caixa de alerta
  if (chute == numeroSecreto) {
    resultado.innerHTML = "Parabéns, você acertou!"; // Mostra o resultado da carta escolhido pelo usuário
  } else if (chute > 10) { 
    resultado.innerHTML = "O número deve ser menor que 10!"; // Mostra o resultado da carta escolhido pelo usuário
  } else if (chute  != 3) {
    resultado.innerHTML = "Não foi dessa vez, tente novamente!"; // Mostra o resultado da carta escolhido pelo usuário
  }
}
