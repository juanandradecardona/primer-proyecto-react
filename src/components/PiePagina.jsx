function PiePagina(){
    const anio = new Date().getFullYear()

    return(
        <footer className="pie">
            <p>SENA - CTIP - {anio}</p>

        </footer>
    )
}

export default PiePagina