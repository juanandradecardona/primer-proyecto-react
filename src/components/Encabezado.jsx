import MenuUsuario from "./MenuUsuarios"

function Encabezado({ usuario }) {
    return(
        <header className="encabezado">
            <div className="encabezado-marca">
            <h1>Mi primer APP con React</h1>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Tecnologias</a>
                <a href="#">Contacto</a>
            </nav>
            </div>
            <MenuUsuario usuario={usuario}/>
        </header>
    )
}

export default Encabezado