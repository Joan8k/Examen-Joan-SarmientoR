document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorDiv = document.getElementById('loginError');

  // Credenciales válidas simuladas
  const usuarioValido = {
    email: "usuario@modanova.com",
    password: "123456"
  };

  if (email === usuarioValido.email && password === usuarioValido.password) {
    alert("Inicio de sesión exitoso.");
    window.location.href = "Web.html"; // Redirige al inicio
  } else {
    errorDiv.classList.remove('d-none'); // Muestra mensaje de error
  }
});
