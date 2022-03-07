const numInputs = document.querySelectorAll('input[type=number]')

numInputs.forEach(function(input) {
  input.addEventListener('change', function(e) {
    if (e.target.value == '') {
      e.target.value = 0
    }
  })
})

function calcularmedia(){
  var notaPrimeiroBimestre;
  notaPrimeiroBimestre = parseFloat(document.getElementById("nota1").value);
  
  var notaSegundoBimestre;
  notaSegundoBimestre = parseFloat(document.getElementById("nota2").value);
  
  var notaTerceiroBimestre;
  notaTerceiroBimestre = parseFloat(document.getElementById("nota3").value);
  
  var notaQuartoBimestre;
  notaQuartoBimestre = parseFloat(document.getElementById("nota4").value);
  
  var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;
  
  notaFinal = notaFinal.toFixed(2);
  
  console.log( "Sua média é: "+ notaFinal);
  
  let resultadoFinal = "";
  if (notaFinal >= 7){
    resultadoFinal = "Você foi aprovado";
    console.log("Você foi aprovado");
  }else{
    resultadoFinal = "Você foi reprovado";
    console.log("Você foi reprovado");
  }
  document.getElementById("nota-final").innerHTML = notaFinal;
  document.getElementById("resultado").innerHTML = resultadoFinal;
}