import myImg from "../../imagenes/giphy\ \(2\).gif"
import style from "./Loader.module.css"

export default function Loader(props){
 return (
   <div className={style.fondo}>
    <div className={style.loader}>
     <img src={myImg} alt="loading" />
    </div>
   </div>
 )
}