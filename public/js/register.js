const formulario = document.getElementById('registroForm');

formulario.addEventListener('submit', function(evento) {
  const nombre   = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const errores = [];

  if (!nombre)   errores.push("El nombre no puede estar en blanco.");
  if (!apellido) errores.push("El apellido no puede estar en blanco.");
  if (!email)    errores.push("El email no puede estar en blanco.");
  if (!password) errores.push("La contraseña no puede estar en blanco.");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    errores.push("El formato del email no es válido.");
  }

  if (password) {
    if (password.length < 8)
      errores.push("La contraseña debe tener al menos 8 caracteres.");

    if (!/[a-zA-Z]/.test(password))
      errores.push("La contraseña debe incluir al menos una letra.");

    if (!/[0-9]/.test(password))
      errores.push("La contraseña debe incluir al menos un número.");

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
      errores.push("La contraseña debe incluir al menos un carácter especial (! @ # $ % etc).");

    const passMin    = password.toLowerCase();
    const prohibidas = ["password", "1234", "qwerty", "miecommerce", nombre.toLowerCase(), apellido.toLowerCase()];

    prohibidas.forEach(function(palabra) {
      if (palabra && passMin.includes(palabra)) {
        errores.push(`La contraseña no debe contener la cadena "${palabra}".`);
      }
    });

    if (password === email) {
      errores.push("La contraseña no puede ser igual a tu email.");
    }
  }

  if (errores.length > 0) {
    evento.preventDefault();
    alert("Corregí los siguientes errores:\n\n" + errores.join("\n"));
  }
});