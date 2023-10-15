import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import servicio1 from './images/servicio1.jpg';
import servicio2 from './images/servicio2.jpg';
import servicio3 from './images/servicio3.jpg';
import servicio4 from './images/servicio4.jpg';
import servicio5 from './images/servicio5.jpg';
import servicio6 from './images/servicio6.jpg';
import servicio7 from './images/servicio7.jpg';
import servicio8 from './images/servicio8.jpg';
import servicio9 from './images/servicio9.jpg';
import servicio10 from './images/servicio10.jpg';
import servicio11 from './images/servicio11.jpg';
import servicio12 from './images/servicio12.jpg';


// ... Continuar importando todas las imágenes necesarias

const servicios = [
    {
        id: 1,
        title: 'Babyliss',
        description: 'Tecnica muy natural de transparencias sin dejar marcas.',
        price: '$20',
        image: servicio1,
        color: 'rgb(255, 132, 203)' 
        
    },
    {
        id: 2,
        title: 'Balayage',
        description: 'Efecto de color para lograr un degrade de medios a puntas, con su base mas oscura.',
        price: '$40',
        image: servicio2,
        color: 'rgb(255, 132, 203)' 
        
    },
    {
        id: 3,
        title: 'Baño de color',
        description: 'Servicio donde se tonaliza el cabello de acuerdo a una formula de color o cambiar el matiz',
        price: '$40',
        image: servicio3,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 4,
        title: 'Visos',
        description: 'Efecto de iluminación con o sin contraste, de diferentes grosores',
        price: '$40',
        image: servicio4,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 5,
        title: 'Coloracion',
        description: 'Servicio de color global o solo en crecimiento.',
        price: '$40',
        image: servicio5,
        color: 'rgb(255, 132, 203)'  
    },
    {
        id: 6,
        title: 'Cortes',
        description: 'Tecnica exclusiva para cada tipo de cabello, para conseguir el resultado deseado',
        price: '$40',
        image: servicio6,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 7,
        title: 'Peinados',
        description: '',
        price: '$40',
        image: servicio7,
        color: 'rgb(255, 132, 203)' 
    },

    {
        id: 8,
        title: 'Ondulación de pestañas',
        description: 'Descripción detallada del servicio 2.',
        price: '$40',
        image: servicio8,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 9,
        title: 'Ondulación de pestañas',
        description: 'Descripción detallada del servicio 2.',
        price: '$40',
        image: servicio9,
        color: 'rgb(255, 132, 203)'  
    },
    {
        id: 10,
        title: 'Pedicure',
        description: 'Descripción detallada del servicio 2.',
        price: '$40',
        image: servicio10,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 11,
        title: 'Cirugía Capilar',
        description: 'Descripción detallada del servicio 2.',
        price: '$40',
        image: servicio11,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 12,
        title: 'Cirugía Capilar',
        description: 'Descripción detallada del servicio 2.',
        price: '$40',
        image: servicio12,
        color: 'rgb(255, 132, 203)' 
    },
    
];
function Servicios() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
                Nuestros Servicios
            </Typography>
            <Typography variant="subtitle1" paragraph style={{ color: 'white' }}>
                Ofrecemos una variedad de servicios para satisfacer tus necesidades.
            </Typography>
            <Grid container spacing={3}>
                {servicios.map(servicio => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={servicio.id}>
                        <Card elevation={3}>
                            <CardMedia 
                                component="img"
                                height="250"
                                image={servicio.image}
                                alt={servicio.title}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom style={{ color: servicio.color }}>
                                    {servicio.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" paragraph style={{ color: servicio.color }}>
                                    {servicio.description}
                                </Typography>
                                <Typography variant="subtitle1" style={{ color: servicio.color }}>
                                    {servicio.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Servicios;