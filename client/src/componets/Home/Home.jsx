import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getAllRecipes } from "../../Redux/action";
import Card from "../Card/Card";
import style from './Home.module.css';
import Loader from '../Loader/Loader'

export default function Home() {
  const {myRecipes} = useSelector(state=>state)
  console.log(myRecipes)
  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(getAllRecipes())
  }, [dispatch])

    return (
      <div  className={style.home}>
        {myRecipes ? 
        myRecipes.map(e=>{
        return(
          <div key={e.id}>
            <Card 
            id={e.id}
            name={e.nombre}
            image={e.imagen}
            diets={e.dietas}/>
          </div>
        )
          
        }):<Loader/>}
      </div>
    );
  }