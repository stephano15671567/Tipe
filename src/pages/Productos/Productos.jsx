import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import producto1 from './images/producto1.jpg';
import producto2 from './images/producto2.jpg';
import producto3 from './images/producto3.jpg';
import producto4 from './images/producto4.jpg';
import producto5 from './images/producto5.jpg';
import producto6 from './images/producto6.jpg';
import producto7 from './images/producto7.jpg';
import producto8 from './images/producto8.jpg';
import producto9 from './images/producto9.jpg';
import producto10 from './images/producto10.jpg';
import producto11 from './images/producto11.jpg';
import producto12 from './images/producto12.jpg';
import producto13 from './images/producto13.jpg';
// ... Continuar importando todas las imágenes de productos necesarias

const productos = [
    {
        id: 1,
        title: 'Producto 1',
        description: 'Descripción detallada del producto 1.',
        price: '$20',
        image: producto1,
        color: 'rgb(255, 132, 203)' // Puedes cambiar el color según lo necesites
    },
    {
        id: 2,
        title: 'Producto 2',
        description: 'Descripción detallada del producto 2.',
        price: '$30',
        image: producto2,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 3,
        title: 'Producto 3',
        description: 'Descripción detallada del producto 2.',
        price: '$30',
        image: producto3,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 4,
        title: 'Producto 4',
        description: 'Descripción detallada del producto 4.',
        price: '$30',
        image: producto4,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 5,
        title: 'Producto 5',
        description: 'Descripción detallada del producto 5.',
        price: '$30',
        image: producto5,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 6,
        title: 'Producto 6',
        description: 'Descripción detallada del producto 6.',
        price: '$30',
        image: producto6,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 7,
        title: 'Producto 7',
        description: 'Descripción detallada del producto 7.',
        price: '$30',
        image: producto7,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 8,
        title: 'Producto 8',
        description: 'Descripción detallada del producto 8.',
        price: '$30',
        image: producto8,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 9,
        title: 'Producto 9',
        description: 'Descripción detallada del producto 9.',
        price: '$30',
        image: producto9,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 10,
        title: 'Producto 10',
        description: 'Descripción detallada del producto 10.',
        price: '$30',
        image: producto10,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 11,
        title: 'Producto 11',
        description: 'Descripción detallada del producto 11.',
        price: '$30',
        image: producto11,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 12,
        title: 'Producto 12',
        description: 'Descripción detallada del producto 12.',
        price: '$30',
        image: producto12,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 13,
        title: 'Producto 13',
        description: 'Descripción detallada del producto 13.',
        price: '$30',
        image: producto13,
        color: 'rgb(255, 132, 203)' 
    },
    // ... Agregar más productos según sea necesario
];

function Productos() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
                Nuestros Productos
            </Typography>
            <Typography variant="subtitle1" paragraph style={{ color: 'white' }}>
                Descubre nuestra exclusiva gama de productos de calidad.
            </Typography>
            <Grid container spacing={3}>
                {productos.map(producto => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
                        <Card elevation={3}>
                            <CardMedia 
                                component="img"
                                height="250"
                                image={producto.image}
                                alt={producto.title}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom style={{ color: producto.color }}>
                                    {producto.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" paragraph style={{ color: producto.color }}>
                                    {producto.description}
                                </Typography>
                                <Typography variant="subtitle1" style={{ color: producto.color }}>
                                    {producto.price}
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

