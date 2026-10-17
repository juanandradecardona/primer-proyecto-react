function Presentacion({usuario}){
    return(
        <article className='presentacion'>
                <h1> Hola, Soy {usuario.nombre}</h1>

                <h3>Mis datos son</h3>
                <ul>
                    <>
                    <li> correo : {usuario.correo}</li>
                    <li> rol : {usuario.rol}</li>
                    <li> telefono : 312938443</li>
                    </>
                </ul>
                <h3>Soy Dasarrollador FullStack</h3>
                <nav>
                    <a href=""></a>
                </nav>
        </article>
    )
}

export default Presentacion