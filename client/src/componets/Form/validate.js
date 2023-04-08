export default function validation(inputs) {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    const regexPassword = new RegExp("[0-9]");
    
    if (!regexEmail.test(inputs.username)) {
      errors.username = "Debe ser un email válido";
    }
    if (!inputs.username) {
      errors.username = "Campo Obligatorio";
    }
    if (inputs.username.length > 35) {
      errors.username = "35 Caracteres MÁXIMO!!!";
    }
    if (!regexPassword.test(inputs.password)) {
      errors.password = "La contraseña debe tener al menos 1 número";
    }
    if (inputs.password.length < 6 || inputs.password.length > 10) {
      errors.password = "Entre 6 y 10 caractéres";
    }
  
    return errors;
  }
  