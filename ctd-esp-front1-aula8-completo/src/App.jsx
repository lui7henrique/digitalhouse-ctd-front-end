import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import "./App.css";

// Aqui adicionamos o provider react-query para poder usar o hook useQuery em qualquer componente
function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/formularioEntrada" element={<Formulario />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
