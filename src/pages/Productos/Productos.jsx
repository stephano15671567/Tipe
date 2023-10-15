import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const productos = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    nombre: `Producto ${index + 1}`,
    descripcion: 'Descripción detallada del producto.',
    precio: `$${(index + 1) * 10}`,
    imagen: '/images/producto.jpg',  
}));

function Productos() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Nuestros Productos
            </Typography>
            <Typography variant="subtitle1" paragraph>
                Explora nuestra amplia gama de productos de calidad.
            </Typography>
            <Grid container spacing={3}>
                {productos.map(producto => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
                        <Card elevation={3}>
                            <CardMedia 
                                component="img"
                                height="140"
                                image={producto.imagen}
                                alt={producto.nombre}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {producto.nombre}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    {producto.descripcion}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    {producto.precio}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Productos;
