import React, { useState } from 'react';
import './Form.module.css'

function RecipeForm() {
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [healthScore, setHealthScore] = useState('');
  const [steps, setSteps] = useState('');
  const [image, setImage] = useState('');
  const [diets, setDiets] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipeData = {
      name,
      summary,
      healthScore,
      steps,
      image,
      diets
    };
    console.log(recipeData); // puedes hacer lo que quieras con los datos enviados
  }

  const handleCheckboxChange = (event) => {
    const diet = event.target.value;
    const checked = event.target.checked;
    if (checked) {
      setDiets([...diets, diet]);
    } else {
      setDiets(diets.filter((d) => d !== diet));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Resumen del plato:
        <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} />
      </label>
      <br />
      <label>
        Health Score:
        <input type="text" value={healthScore} onChange={(e) => setHealthScore(e.target.value)} />
      </label>
      <br />
      <label>
        Paso a paso:
        <textarea value={steps} onChange={(e) => setSteps(e.target.value)} />
      </label>
      <br />
      <label>
        Imagen:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <br />
      <label>
        Tipos de dieta:
        <br />
        <input type="checkbox" value="vegan" checked={diets.includes('vegan')} onChange={handleCheckboxChange} />
        <span>Vegan</span>
        <br />
        <input type="checkbox" value="vegetarian" checked={diets.includes('vegetarian')} onChange={handleCheckboxChange} />
        <span>Vegetarian</span>
        <br />
        <input type="checkbox" value="paleo" checked={diets.includes('paleo')} onChange={handleCheckboxChange} />
        <span>Paleo</span>
        <br />
        <input type="checkbox" value="Gluten free" checked={diets.includes('Gluten free')} onChange={handleCheckboxChange} />
        <span>Gluten free</span>
        <br />
        <input type="checkbox" value="Lacto ovo vegetarian" checked={diets.includes('Lacto ovo vegetarian')} onChange={handleCheckboxChange} />
        <span>Lacto ovo vegetarian</span>
        <br />
        
        {/* Agrega más tipos de dieta aquí según sea necesario */}
      </label>
      <br />
      <button type="submit">Crear receta</button>
    </form>
  );
}

export default RecipeForm;