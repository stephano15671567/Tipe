
import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";  

function MainLayout() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Header />
          <div style={{ padding: '20px' }}>  {/* Agregar un padding para mejorar la presentación */}
            <Outlet />
          </div>
        </>
      ) : (
        <Backdrop open={true} style={{ backgroundColor: '#a986c5', color: 'white' }}>
          <CircularProgress color="inherit" />
          <p style={{ marginLeft: '20px' }}>Cargando...</p>  {/* Personalizar el mensaje de carga */}
        </Backdrop>
      )}
    </>
  );
}

export default MainLayout;
