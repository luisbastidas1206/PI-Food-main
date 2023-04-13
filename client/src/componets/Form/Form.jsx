import React, { useState, useRef } from "react";
import style from "./Form.module.css";
import validation from "./validate";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "../../Redux/action";

function RecipeForm() {
  const formBase = useRef(null); //*Hook para referencia el form
  const dispatch = useDispatch();
  const { diets } = useSelector((state) => state);
  const [receta, setReceta] = useState({
    nombre: "",
    imagen: "",
    resumen: "",
    salud: 0,
    pasos: "",
    dietas: [],
  });
  const [errores, setErrores] = useState({
    nombre: "",
    imagen: "",
    resumen: "",
    salud: 0,
    pasos: "",
    dietas: [],
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setReceta({
      ...receta,
      [name]: value,
    });
    setErrores(
      validation({
        ...receta,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validacion = validation(receta);
    setErrores(validacion);
    if (
      !errores.nombre &&
      !errores.imagen &&
      !errores.resumen &&
      !errores.salud &&
      !errores.pasos &&
      receta.dietas.length >= 1
    ) {
      dispatch(addRecipe(receta));

      setReceta({
        nombre: "",
        imagen: "",
        resumen: "",
        salud: 0,
        pasos: "",
        dietas: [],
      });

      formBase.current.reset();

      alert("recette créée ");
    } else {
      alert("impossible de créer la recette");
    }
  };

  const dietHandle = (event) => {
    if (event.target.checked) {
      setReceta({ ...receta, dietas: [...receta.dietas, event.target.value] });
    }
    if (!event.target.checked) {
      const aux = receta.dietas.filter((e) => e !== event.target.value);

      // setDieta(dieta.filter(e=> e !==event))
      setReceta({
        ...receta,
        dietas: aux,
      });
    }
  };

  const mapeoDietas = () => {
    return diets.map((e, i) => {
      return (
        <div key={i}>
          <label>{e.nombre.charAt(0).toUpperCase() + e.nombre.slice(1)}</label>
          <input
            type="checkbox"
            value={e.nombre}
            key={i}
            onChange={dietHandle}
          />
          <br />
        </div>
      );
    });
  };

  return (
    <div className={style.flex}>
      <div className={style.formcontainer}>
        <form onSubmit={handleSubmit} ref={formBase}>
          <label>Nombre: </label>
          <input
            type="text"
            value={receta.nombre}
            onChange={handleInput}
            name="nombre"
          />
          {errores.nombre && <p>{errores.nombre}</p>}
          <br />
          <label>Imagen: </label>
          <input
            type="text"
            value={receta.imagen}
            onChange={handleInput}
            name="imagen"
          />
          {errores.imagen && <p>{errores.imagen}</p>}
          <br />
          <label>Resumen: </label>
          <textarea
            type="text"
            value={receta.resumen}
            onChange={handleInput}
            name="resumen"
          />
          {errores.resumen && <p>{errores.resumen}</p>}
          <br />
          <label>Salud: </label>
          <input
            type="text"
            value={receta.salud}
            onChange={handleInput}
            name="salud"
          />
          {errores.salud && <p>{errores.salud}</p>}
          <br />
          <label>Pasos: </label>
          <textarea
            type="text"
            value={receta.pasos}
            onChange={handleInput}
            name="pasos"
          />
          {errores.pasos && <p>{errores.pasos}</p>}
          <br />
          <label>Dietas: </label>
        </form>
      {mapeoDietas()}
      {errores.dietas && <p>{errores.dietas}</p>}
      <button>Crear</button>
      </div>
      <div
        className={style.previewimage}
        style={{ backgroundImage: `url(${receta.imagen})` }}
      ></div>
    </div>
  );
}

export default RecipeForm;
