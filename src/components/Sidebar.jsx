function Sidebar() {
    return (
        <aside className="sidebar">
            <div>
                <h3 className="sidebar-titulo">Menú</h3>
                <nav>
                    <ul className="sidebar-menu">
                        <li><a href="#">🏠 Inicio</a></li>
                        <li><a href="#">🧟 Mi perfil</a></li>
                        <li><a href="#">💻 Tecnología</a></li>
                        <li><a href="#">💸 Recurso</a></li>
                        <li><a href="#">🌎 Contacto</a></li>
                    </ul>
                </nav>
            </div>
            <p className="sidebar-pie">3312943 - ADSO</p>
        </aside>
    );
}

export default Sidebar;