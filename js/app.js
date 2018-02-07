$(document).ready(function() {
    // manda un alert si se ingresa un numero
    $('#name').on('input', function() {
      if ($(this).val().match(/[1-9]/)) {
        alert('No ingrese números');
        $(this).val('');
      } 
    });
    
    $('#pass').on('focusout',function(){
        const passNot = '123456';
        let password = $('#pass').val();
        if(password === passNot || password.length <6) {
            alert('Ingrese contraseña valida');
            $(this).val('');

        }
    });
 
    // el boton se habilita si todos los campos estan llenos y redirecciona a la vista end
    $('#submit').click(function(event) {
      if ($('#name').val() && $('#pass').val()) {
        event.preventDefault();
        window.location.href = 'views/collage.html';
      } else {
        alert('Rellene todos los campos');
        event.preventDefault();
      }
    });
  });