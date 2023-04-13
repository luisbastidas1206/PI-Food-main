import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllRecipes,
  getDiet,
  filterDiet,
  filterOrigin,
  orderABC,
  orderSalud,
  deleteFilters,
} from "../../Redux/action";
import Card from "../Card/Card";
import style from "./Home.module.css";
import Loader from "../Loader/Loader";
import Paginado from "../Paginado/Paginado";

export default function Home() {
  const [page, setPage] = useState(1);
  const { myRecipes, diets } = useSelector((state) => state); //me traigo los estados globales
  const dispatch = useDispatch();
  useEffect(() => {  //se ejecuta cuando el componente se monta o se actualiza
    if (!diets.length) {
      dispatch(getDiet());
    }
  }, [dispatch, diets]);
  const end = page * 9; //9 es la cantidad de recetas por pagina
  const start = end - 9; //una loba como yo no ta pa tipos como tu
  const actual = myRecipes?.slice(start, end);

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

  const filterHandler = (event) => {
    if (event.target.name === "Diets") {
      dispatch(filterDiet(event.target.value));
      setPage(1)
      
    } else {
      dispatch(filterOrigin(event.target.value));
    }
    if (event.target.value === "All") {
      dispatch(deleteFilters());
      setPage(1)
    }
  };

  const orderHandler = (event) => {
    if (event.target.name === "alfabetico") {
      dispatch(orderABC(event.target.value));
      setPage(1)
    } else {
      dispatch(orderSalud(event.target.value));
      setPage(1)
    }
  };

  const reset = () => {

    dispatch(deleteFilters());

  };

  return (
    <div className={style.home}>
      <div className={style.filtros}>
        <select name="Origin" onChange={filterHandler}>
          <option value="All">All</option>
          <option value="Api">Api</option>
          <option value="DataBase">DataBase</option>
        </select>
        <select name="Diets" onChange={filterHandler}>
          <option value="All">All</option>
          {diets?.map((e) => {
            return (
              <option value={e.nombre} key={e.id}>
                {e.nombre}
              </option>
            );
          })}
        </select>
        <select name="alfabetico" onChange={orderHandler}>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
        <select name="salud" onChange={orderHandler}>
          <option value="ascendente">ascendente</option>
          <option value="descendente">descendente</option>
        </select>
        <button onClick={reset}>Reset Filter</button>
      </div>

      <div>
        <Paginado
          page={page}
          total={totalPage}
          avanzar={avanzar}
          volver={volver}
          buscar={buscar}
        />
      </div>
      <div className={style.home}>
        {actual.length > 0 ? (
          actual.map((e) => {
            return (
              <div key={e.id}>
                <Card
                  id={e.id}
                  name={e.nombre}
                  image={e.imagen}
                  diets={e.dietas}
                  salud={e.salud}
                />
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
