import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }}> {/* Agregado estilo aquí */}
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Salon Eileen
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/quienes-somos">Quienes Somos</Button>
                <Button color="inherit" component={Link} to="/productos">Productos</Button>
                <Button color="inherit" component={Link} to="/servicios">Servicios</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
