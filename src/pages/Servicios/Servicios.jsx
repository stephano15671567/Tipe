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
import SocialMediaButtons from './images/SocialMediaButtons';
import { makeStyles } from '@mui/styles'; // Ensure you import makeStyles
// ... Continuar importando todas las imágenes necesarias
const useStyles = makeStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    media: {
      height: 140,
    },
    content: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    price: {
      marginTop: 'auto',
    },
  });
const servicios = [
    {
        id: 1,
        title: 'Babyligth',
        description: 'Técnica de coloración que crea reflejos sutiles y naturales, imitando el cabello aclarado por el sol en la infancia.',
        price: '$70.000',
        image: servicio1,
        color: 'rgb(255, 132, 203)' 
        
    },
    
    {
        id: 2,
        title: 'Balayage',
        description: 'Método de coloración a mano alzada que produce un efecto degradado natural, de raíces oscuras a puntas claras.',
        price: '$70.000',
        image: servicio2,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 3,
        title: 'Baño de color',
        description: 'Proceso para revitalizar el color del cabello, aportando brillo y tonalidad uniforme sin decoloración profunda.',
        price: '$40.000',
        image: servicio3,
        color: 'rgb(255, 132, 203)'
    },
    {
        id: 4,
        title: 'Visos',
        description: 'Técnica de coloración que añade reflejos o mechas para dar profundidad y dimensión al cabello.',
        price: '$50.000',
        image: servicio4,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 5,
        title: 'Coloracion',
        description: 'Procedimiento completo para cambiar o mejorar el color del cabello de manera uniforme.',
        price: '$40.000',
        image: servicio5,
        color: 'rgb(255, 132, 203)'
    },
    {
        id: 6,
        title: 'Cortes',
        description: 'Servicio de corte de cabello, adaptado a las preferencias y estilo personal de cada cliente.',
        price: '$20.000',
        image: servicio6,
        color: 'rgb(255, 132, 203)'
    },
    {
        id: 7,
        title: 'Peinados',
        description: 'Creación de estilos y peinados para eventos especiales o para el día a día.',
        price: '$25.000',
        image: servicio7,
        color: 'rgb(255, 132, 203)'
    },
    {
        id: 8,
        title: 'Ondulación de pestañas',
        description: 'Técnica para rizar las pestañas de forma natural, realzando la mirada sin necesidad de maquillaje.',
        price: '$15.000',
        image: servicio8,
        color: 'rgb(255, 132, 203)'
    },
    {
        id: 9,
        title: 'Manicure',
        description: 'Cuidado y embellecimiento de las uñas de las manos, incluyendo esmaltado y tratamiento de cutículas.',
        price: '$16.000',
        image: servicio9,
        color: 'rgb(255, 132, 203)'
    },
    {
        id: 10,
        title: 'Pedicure',
        description: 'Servicio de belleza para los pies que incluye cuidado de uñas, cutículas y esmaltado.',
        price: '$15.000',
        image: servicio10,
        color: 'rgb(255, 132, 203)'
    },
    {
        id: 11,
        title: 'Cirugía Capilar',
        description: 'Tratamiento intensivo para reparar y rejuvenecer el cabello dañado, mejorando su textura y apariencia.',
        price: '$40.000',
        image: servicio11,
        color: 'rgb(255, 132, 203)'
    },
    {
        id: 12,
        title: 'Alisado',
        description: 'Proceso para alisar el cabello, reduciendo el frizz y proporcionando un acabado liso y manejable.',
        price: '$50.000',
        image: servicio12,
        color: 'rgb(255, 132, 203)'
    },
    
];
function Servicios() {
    const classes = useStyles(); // Call useStyles to get the classes object
  
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
              <Card className={classes.card} elevation={3}>
                <CardMedia 
                  className={classes.media}
                  component="img"
                  height="250"
                  image={servicio.image}
                  alt={servicio.title}
                />
                <CardContent className={classes.content}>
                  <Typography variant="h6" gutterBottom style={{ color: servicio.color }}>
                    {servicio.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {servicio.description}
                  </Typography>
                  <Typography className={classes.price} variant="subtitle1">
                    {servicio.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <SocialMediaButtons />
      </Container>
    );
  }
  
  export default Servicios;