import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StaffList from "./components/StaffList";

function App() {
  return (
    <>
      <header>
        <h2 className="text-center mt-3">Lista de empleados</h2>
      </header>
      <main>
        <StaffList />
      </main>
      <footer>
        <h5 className="text-center">&copy; Todos los derechos reservados</h5>
      </footer>
    </>
  );
}

export default App;
