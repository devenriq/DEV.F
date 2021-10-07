// ERROR DETECTADO: Si colocamos "document.getElementById('name').value" de arranque recuperamos el valor vacio (ya que value aun no existe)
let name = document.getElementById('name');
let lastName = document.getElementById('lastName');
let emailAdress = document.getElementById('emailAdress');
let password = document.getElementById('password');
let btn = document.getElementById('button');

button.addEventListener('click', function(){
  // CORRECCIÓN: El valor se debe recuperar una vez llenado el input (ejm name.value) y presionado el boton
  console.log(name.value);
  console.log(lastName.value);
  console.log(emailAdress.value);
  console.log(password.value);

  if(name.value != '' && lastName.value != '' && emailAdress.value != '' && password.value != ''){
    window.alert("Your register is complete! Welcome " + name.value);
  } else {
    window.alert('Please, complete the form')
  }

})

