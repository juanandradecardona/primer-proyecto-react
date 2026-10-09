import './App.css';
import Encabezado from "./components/Encabezado";
import Sidebar from "./components/Sidebar";
import Presentacion from "./components/Presentacion";
import Tarjeta from "./components/Tarjeta";
import PiePagina from "./components/PiePagina";

function App() {
  const programa = "Analisis y Desarrollo de Software";

  return (
    <div className="app-padre">
      <Encabezado />
      <div className="app-layout">
        <Sidebar />
        <main className="contenido">
          <h2>Bienvenido al Programa {programa}</h2>
          <Presentacion />
          <section className="tarjetas">
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
          </section>
        </main>
      </div>

      <PiePagina />
    </div>
  );
}

export default App;