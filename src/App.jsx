import fotoPerfil from './Images/bart.jpg'
import './App.css';
import Encabezado from "./components/Encabezado";
import Sidebar from "./components/Sidebar";
import Presentacion from "./components/Presentacion";
import Tarjeta from "./components/Tarjeta";
import PiePagina from "./components/PiePagina";

function App() {
  const programa = "Analisis y Desarrollo de Software";

  const usuario = {
    nombre: 'Juan Pablo Cardona',
    rol: 'Aprendiz ADSO',
    foto: fotoPerfil,
    correo: 'Juan@sena.com',
  };

  return (
    <div className="app-padre">
      {/* Ipasa ti usuario prop ditoy */}
      <Encabezado usuario={usuario} />
      <div className="app-layout">
        <Sidebar usuario = {usuario}/>
        <main className="contenido">
          <h2>Bienvenido al Programa {programa}</h2>
          <Presentacion usuario={usuario}/>
          <section className="tarjetas">
            <Tarjeta
              icono="⚛️"
              titulo="React"
              descripcion="Herramienta de JavaScript para construir interfaces con componentes"
              horas={120}
              destacada={true}
            />
            <Tarjeta
              icono="⚡️"
              titulo="Vite"
              descripcion="Herramienta para crear, ejecutar y empaquetar proyectos"
              horas={60}
              destacada={false}
            />
            <Tarjeta
              icono="🔍"
              titulo="ESLint"
              descripcion="Revisa la calidad"
              horas={20}
              destacada={true}
            />
          </section>
        </main>
      </div>

      <PiePagina />
    </div>
  );
}

export default App;