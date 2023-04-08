import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../Redux/action";
import style from "./Detail.module.css";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detalle = useSelector((state) => state.detail); //utilizar useSeñector para obtener el estado actual de detailRecipe
  console.log(detalle);
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const resumenM = detalle?.resumen;
  const resumenBueno = resumenM?.replace(/<.*?>/g, "");
  const pasosM = detalle?.pasos;
  const pasosB = pasosM?.replace(/<.*?>/g, "");
  return (
    <div className={style.conteiner}>
      <h1>{detalle?.nombre}</h1>
      <img src={detalle?.imagen} alt={detalle.nombre} />
      <h2>
        {detalle.dietas?.map((e) => (
          <ul>{e.charAt(0).toUpperCase() + e.slice(1)}</ul>
        ))}
      </h2>
      <h2>Health Score:{detalle.salud}</h2>
      <div className={style.cajita}>
        <h2>Step by Step:</h2>
        <p>{pasosB ? pasosB : ""}</p>
      </div>
      <div className={style.cajita}>
        <h2> Summary:</h2>
        <p>{resumenBueno ? resumenBueno : ""}</p>
      </div>
      <h1>Hola soy el Detallista del salón</h1>
    </div>
  );
}
