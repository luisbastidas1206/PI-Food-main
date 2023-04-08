import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../Redux/action";
import Card from "../Card/Card";
import style from "./Home.module.css";
import Loader from "../Loader/Loader";
import Paginado from "../Paginado/Paginado";

export default function Home() {
  const [page, setPage] = useState(1);
  const { myRecipes} = useSelector((state) => state);
  const dispatch = useDispatch();
  const end = page * 9; //9 es la cantidad de recetas por pagina
  const start = end - 9; //una loba como yo no ta pa tipos como tu
  const actual =
    // queryRecipes.length === 0 ?
      myRecipes?.slice(start, end)
      
  const totalPage = Math.ceil(myRecipes.length / 9);

  const buscar = (num) => {
    setPage(num);
  };
  const avanzar = () => {
    setPage(page + 1);
  };
  const volver = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <div className={style.home}>
      <div>
        <Paginado 
        page={page}
        total={totalPage}
        avanzar={avanzar}
        volver={volver}
        buscar={buscar}/>
      </div>
      {actual.length > 0 ? (
        actual.map((e) => {
          return (
            <div key={e.id}>
              <Card
                id={e.id}
                name={e.nombre}
                image={e.imagen}
                diets={e.dietas}
              />
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}
