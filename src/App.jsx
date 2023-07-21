import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StaffList from "./components/StaffList";

function App() {
  return (
    <>
      <header>
        <h2 className="text-center mt-3">
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist.png"
            alt="Man Technologist"
            className="icon"
          />
          Lista de empleados
        </h2>
        <hr />
      </header>
      <main>
        <StaffList />
      </main>
      <footer>
        <hr />
        <h5 className="text-center">&copy; Todos los derechos reservados</h5>
      </footer>
    </>
  );
}

export default App;
