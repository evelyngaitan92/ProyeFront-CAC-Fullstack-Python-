const formulario = document.getElementById('formulario');
const elementos = document.querySelectorAll('#formulario [name]');
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const validarFormulario = (elem) => {
  switch (elem.name) {
    case "name":
    case "surname":
      if (expresiones.nombre.test(elem.value)) {
        elem.classList.remove('error');
        return true;
      } else {
        elem.classList.add('error');
        return false;
      }
    case "email":
      if (expresiones.email.test(elem.value)) {
        elem.classList.remove('error');
        return true;
      } else {
        elem.classList.add('error');
        return false;
      }
    case "select":
    case "comentario":
    case "imagen":
  }
  return true;
}

elementos.forEach((elem) => {
  elem.addEventListener('keyup', (e) => validarFormulario(e.target)) // key tecla levantada Key up 
  elem.addEventListener('blur', (e) => validarFormulario(e.target))
})// clik por fuera 


formulario.addEventListener('submit', (e/*evento*/) => {
  e.preventDefault();
  console.log('submitting...');

  let validado = true;

  for (const elem of elementos) {
    let resultado = validarFormulario(elem); // true = ok - false = error 
    if (resultado == false) {
      validado = false;
    }
  }

  if (validado) {
    const form = new FormData(e.target);
    //enviar
  }
})
