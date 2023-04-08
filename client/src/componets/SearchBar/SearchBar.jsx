import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { getAllRecipes, getQueryRecipe } from '../../Redux/action'

export default function SearchBar(props){
    const [ input, setInput ] = useState('')
    const dispatch = useDispatch ()
    
    const searchHandler = (e)=>{
        if(e.target.value){
            dispatch(getQueryRecipe(e.target.value))
        }else{
            dispatch(getAllRecipes())
        }
    }

    const inputHandler=(e)=>{
        if(!e.target.value){
            dispatch(getAllRecipes())
            setInput('')
        }else{
            setInput(e.target.value)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            searchHandler(e)
        }
      };

    
    return (
        <div>          
            <input type="text" name='search' value={input} onChange={inputHandler} onKeyDown={handleKeyPress}/>
            <button onClick={searchHandler} value={input}>Buscar</button>
        </div>
    )
}