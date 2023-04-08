import { useNavigate } from 'react-router-dom'
import style from './Card.module.css'


export default function Card(props) {
  const navigate = useNavigate()
  function linkDetail(){
    navigate(`/detail/${props.id}`)
  }
  // const {imagen, nombre, dietas} = props
  console.log(props)
    return (
      <div key={props?.id} onClick={linkDetail} className={style.card}>
        <img src={props?.image} alt={props?.name}/>
        <h2> {props?.name} </h2>
        <br/>
        <br/>
        
        { props.diets?.map(e=> <h2>{e.charAt(0).toUpperCase() + e.slice(1)}</h2>)}
      </div>
    );
  }