import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes/Router";  // Asegúrate de que esta ruta de importación sea correcta

function App() {
  const routeElement = useRoutes(routes);
  
  return (
    <div className="App">
      {routeElement}
    </div>
  );
}

export default App;
