export default function validation(inputs) {
  const errors = {};
  const urlRegex =/(https?:\/\/.*\.(?:png|jpeg|jpg))/i; //Expresión regular para verificar una url solamente de imágenes
  const letraRegex = /^[A-Za-z\s]+$/; //Expresión regular para verificar que un texto no tenga números ni símbolos
  if (!letraRegex.test(inputs.nombre)) {
    errors.nombre = "El nombre no puede tener símbolos ni números";
  }
  if(inputs.nombre.trim().length === 0){
    errors.nombre = "Campo obligatorio"
  }
  if (!urlRegex.test(inputs.imagen)) {
    errors.imagen = "URL no válida";
  }
  if (!inputs.resumen.trim().length >= 1) {
    errors.resumen = "Campo obligatorio";
  }
  if(!inputs.resumen.trim().length > 500) {
    errors.resumen = "Máximo excedido";
  }
  if (!inputs.pasos.trim().length >= 1) {
    errors.pasos = "Campo obligatorio";
  }
  if (inputs.salud <1 || inputs.salud > 100 ){
    errors.salud = "Debe ser un numero entre 1 y 100"
  }
  
  return errors;
  }
  