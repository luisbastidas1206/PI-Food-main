export default function Paginado(props){
    const pages=[]
    for (let i = 0; i < props.total; i++) {
        pages.push(i+1)
    }
    return(
        <div>
            <button onClick={()=>props.volver()} disabled={props.page <=1}>◀◀</button>
            {pages.length>0 && pages.map(e=>(
                <button onClick={()=>props.buscar(e)} key={`page ${e}`}>
                    {e}
                </button>
            ))}
            <button onClick={()=>props.avanzar()} disabled={props.page >= props.total}>▶▶</button>
        </div>
    )
}