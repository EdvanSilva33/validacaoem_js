const form = document.getElementById('form')
  
form.addEventListener('submit', function(e){
  
    e.preventDefault();

const numb1 = document.getElementById('campoA').value;
const numb2 = document.getElementById('campoB').value;

const mensageValid = `O você digitou no campo <b>A</b> = <b> ${numb1}</b> e no<br>  campo <b>B</b> foi um numero maior que é = <b>${numb2}</b><br> <b>Formulário válido!</b>`;
const mensageNaoValid = `O você digitou no campo <b>A</b> = <b>${numb1}</b> <br> e no campo <b>B</b> =  <b>${numb2}</b> <b> <br>Formulário inválido! O número do campo B deve ser maior que o número campo A.</b>`;

if( numb1 < numb2){
    const containerValido = document.querySelector('.mensagem-valida')
    containerValido.innerHTML = mensageValid;
    containerValido.style.display = 'block';

    

}else{
    const containerInvalid = document.querySelector('.mensagem-valida')
    containerInvalid.innerHTML = mensageNaoValid;
    containerInvalid.style.display = 'block';
}

})

// //function validateForm() {
//     var a = document.getElementById("fieldA").value;
//     var b = document.getElementById("fieldB").value;
//     if (b > a) {
//       alert("Formulário válido!");
//       return true;
//     } else {
//       alert("Formulário inválido. O número B deve ser maior que o número A.");
//       return false;
//     }
//   }


console.log(form)