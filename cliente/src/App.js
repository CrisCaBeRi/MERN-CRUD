import "./App.css";
import AgregarUsuario from "./Components/AgregarUsuario";
import ListaUsuarios from "./Components/ListaUsuarios";
import EditarUsuario from "./Components/EditarUsuario";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>CRUD MERN STACK</h1>
      <BrowserRouter>      
        <Routes>
          <Route path="/" element={<ListaUsuarios />}exact></Route>
          <Route path="/agregarusuario" element={<AgregarUsuario />}exact></Route>
          <Route path="/editarusuario" element={<EditarUsuario />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
