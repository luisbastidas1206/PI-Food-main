import { useNavigate } from 'react-router-dom'
import style from './Card.module.css'


export default function Card(props) {
  const navigate = useNavigate()
  function linkDetail(){
    navigate(`/detail/${props.id}`)
  }
  // const {imagen, nombre, dietas} = props
  
    return (
      <div key={props?.id} onClick={linkDetail} className={style.card}>
        <img src={props?.image} alt={props?.name}/>
        <h2> {props?.name} </h2>

        
        <h3>{props?.salud}</h3>
        

        <div className={style.cajita}>
        { props.diets?.map(e=> <h2>{e.nombre.charAt(0).toUpperCase() + e.nombre.slice(1)}</h2>)}
        </div>
      </div>
    );
  }