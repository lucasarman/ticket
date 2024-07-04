function comprar() {
  const tickets = document.querySelector("#tipo-ingresso").value;
  console.log (tickets);
  
  const quantidade = document.querySelector("#qtd").value;
  console.log (quantidade);


const qtdTOTAL = document.querySelector(`#qtd-${tickets}`)
const restante = parseInt(qtdTOTAL.textContent) - quantidade;


if (parseInt(qtdTOTAL.textContent) == 0){ 
  alert ("Cabô") 
  return
}
if (parseInt(qtdTOTAL.textContent) < quantidade){ 
  alert ("Quantidade de ingressos indisponível") 
  return
}



qtdTOTAL.textContent = restante;



}