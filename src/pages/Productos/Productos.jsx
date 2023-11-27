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

import SocialMediaButtons from '../Servicios/images/SocialMediaButtons';
// ... Continuar importando todas las imágenes de productos necesarias
import { makeStyles } from '@mui/styles'; // Make sure to import this

const useStyles = makeStyles({
    card: {
      display: 'flex', // Add display flex to card
      flexDirection: 'column', // Stack children vertically
      height: '100%', // Make card take full height of its parent
    },
    media: {
      height: 140, // Set a fixed height for the media
    },
    content: {
      flex: 1, // Flex grow to take available space
      display: 'flex', // Add display flex to content
      flexDirection: 'column', // Stack children vertically
    },
    price: {
      marginTop: 'auto', // Push the price to the bottom
    },
  });

const productos = [
    {
        id: 1,
        title: 'Moroccanoil Spray voluminizador 160ml',
        description: 'Voluminizador para revivir un cabello fino y sin vida. Este spray ultraligero para dar cuerpo realza el cabello para ofrecerle hasta un 50% más de volumen, mientras mantiene el movimiento y la suavidad al tacto, desde las raíces hasta las puntas.',
        price: '$27.990',
        image: producto1,
        color: 'rgb(255, 132, 203)' // Puedes cambiar el color según lo necesites
    },
    {
        id: 2,
        title: 'SPRAY PROTECCIÓN Y PREVENCIÓN',
        description: 'Spray Protección y Prevención ayuda a evitar los tonos cobrizos y la decoloración del tinte al proteger el cabello contra los factores ambientales que lo debilitan diariamente. ',
        price: '$27.990',
        image: producto2,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 3,
        title: 'TRATAMIENTO MOROCCANOIL 100ML',
        description: 'Obtenga el cabello sano, brillante y sedoso que siempre ha deseado.El Tratamiento Moroccanoil ha sido el pionero en el mundo del cuidado del cabello a base de aceites y empezó todo el ruido alrededor del aceite de argán.',
        price: '$39.990',
        image: producto3,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 4,
        title: 'MOROCCANOIL CREMA MOLDEADORA DE RIZOS 250ML',
        description: 'Active y defina los rizos fácilmente mientras hidrata el cabello. La Crema Moldeadora de Rizos Moroccanoil® es uno de nuestros productos más populares para los rizos. ',
        price: '$31.990',
        image: producto4,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 5,
        title: 'MOROCCANOIL CONCENTRADO PARA EL SECADO 50ML',
        description: 'Específicamente formulado para cabellos rebeldes, altamente indisciplinados. Moroccanoil Blow Dry Concentrate controla el encrespamiento y facilita los secados. ',
        price: '$27.990',
        image: producto5,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 6,
        title: 'OLAPLEX N°4 BOND MAINTENANCE SHAMPOO 250ML',
        description: 'Olaplex Nº4 Shampoo protege y repara el cabello dañado, los puntas abiertas y el frizz al re-conectar los enlaces rotos. Shampoo altamente humectante y reparador dejar el cabello fácil de manejar, brillante y saludable en cada uso. ',
        price: '$33.990',
        image: producto6,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 7,
        title: 'OLAPLEX Nº4D SHAMPOO SECO 178G.',
        description: 'Tecnología de limpieza en seco ligera como el aire para que el cuero cabelludo y cabello que se siente como recién lavado. Este shampoo seco de Olaplex es saludable para el cuero cabelludo está clínicamente probado y no obstruye los poros ni deja residuo blanco. Ya no tendrás más raíces secas y con residuo empolvado ni acumulación de producto. Nº.4D ha demostrado que deja el cabello con aspecto limpio.',
        price: '$33.990',
        image: producto7,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 8,
        title: 'OLAPLEX NO.7 BONDING OIL 30ML',
        description: 'Olaplex Nº7 es un aceite de peinado reparador, liviano y altamente concentrado. Aumenta drásticamente el brillo, suavidad y revive el color. Disminuye el frizz. Entrega protección termica hasta 230ºC',
        price: '$33.990',
        image: producto8,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 9,
        title: 'OLAPLEX Nº9 BOND PROTECTOR SERUM 90 ML',
        description: 'Protege tu cabello del daño diario con este serum ultraliviano, sin enjuague, libre de siliconas. Su escudo protege por hasta 48 horas de la contaminación y su protección térmica es hasta los 230ºC.',
        price: '$33.990',
        image: producto9,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 10,
        title: 'BC COLOR FREEZE PH 4.5 TRATAMIENTO - 200ML',
        description: 'Un color intenso y real convierte cualquier look en espectacular. Un buen colorista creará el equilibrio perfecto de tonos para complementar el estilo y color de piel del cliente.',
        price: '$11.990',
        image: producto10,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 11,
        title: 'BC COLOR FREEZE PH 4.5 ACONDICIONADOR EN SPRAY- 200ML',
        description: 'Un color intenso y real convierte cualquier look en espectacular. Un buen colorista creará el equilibrio perfecto de tonos para complementar el estilo y color de piel del cliente.',
        price: '$24.990',
        image: producto11,
        color: 'rgb(255, 132, 203)' 
    },
    {
        id: 12,
        title: 'BC COLOR FREEZE PH 4.5 PROTECTOR DE BRILLO - 150ML',
        description: 'Un color intenso y real convierte cualquier look en espectacular. Un buen colorista creará el equilibrio perfecto de tonos para complementar el estilo y color de piel del cliente.',
        price: '$14.990',
        image: producto12,
        color: 'rgb(255, 132, 203)' 
    },
    
    // ... Agregar más productos según sea necesario
];

function Productos() {
    const classes = useStyles(); // Call useStyles to get the classes object
  
    return (
      <Container>
        <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
          Nuestros Productos
        </Typography>
        <Typography variant="subtitle1" paragraph style={{ color: 'white' }}>
          Descubre nuestra exclusiva gama de productos de calidad.
        </Typography>
        <Grid container spacing={3}>
          {productos.map((producto) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
              <Card className={classes.card} elevation={3}>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={producto.image}
                  alt={producto.title}
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {producto.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {producto.description}
                  </Typography>
                  <Typography className={classes.price} variant="h6">
                    {producto.price}
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
  
  export default Productos;