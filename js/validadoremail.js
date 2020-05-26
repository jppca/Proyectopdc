document.getElementsByName('email')[0].addEventListener('keyup', function() {
    const campo = event.target;
	const valido = document.getElementById('emailOK');
	
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	
	valido.innerText = (emailRegex.test(campo.value)) ? 'Email válido' : 'Email no válido';
});