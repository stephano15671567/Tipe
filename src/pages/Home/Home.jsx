import React from 'react';
import { Typography, Container, Box, Grid, Paper } from '@mui/material';
import imagen1 from "./images/SalonEileen1.jpg";
import imagen2 from "./images/SalonEileen2.jpg";

function Home() {
    return (
        <Container>
            <Typography variant="h2" gutterBottom style={{ color: 'white' }}>
                Bienvenido a Salón Eileen
            </Typography>
            <Typography variant="body1" paragraph style={{ color: 'white' }}>
                En Salón Eileen, nos esforzamos por ofrecerte una experiencia de belleza 
                personalizada y de alta calidad. Nuestro equipo de profesionales altamente 
                capacitados está dedicado a proporcionarte los mejores servicios y productos 
                en un ambiente relajante y amigable.
            </Typography>
            
            <Grid container spacing={3} style={{ marginBottom: '20px' }}>
                <Grid item xs={12} sm={6}>
                    <img src={imagen1} alt="Salón Eileen" style={{ width: '100%', borderRadius: '10px' }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={imagen2} alt="Salón Eileen2" style={{ width: '100%', borderRadius: '10px' }} />
                </Grid>
            </Grid>

            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <img src="/images/example1.jpg" alt="Imagen Ejemplo 1" style={{ width: '100%', borderRadius: '10px' }} />
                        <Typography variant="h6" gutterBottom>
                            Titulo 1
                        </Typography>
                        <Typography variant="body2">
                            Este es un espacio para texto. Puedes llenar este espacio con información adicional.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <img src="/images/example2.jpg" alt="Imagen Ejemplo 2" style={{ width: '100%', borderRadius: '10px' }} />
                        <Typography variant="h6" gutterBottom>
                            Titulo 2
                        </Typography>
                        <Typography variant="body2">
                            Este es otro espacio para texto. Puedes llenar este espacio con más información.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <img src="/images/example3.jpg" alt="Imagen Ejemplo 3" style={{ width: '100%', borderRadius: '10px' }} />
                        <Typography variant="h6" gutterBottom>
                            Titulo 3
                        </Typography>
                        <Typography variant="body2">
                            Aquí va más texto. Este es un buen lugar para poner información adicional.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Box style={{ marginTop: '40px' }}>
                <Typography variant="h5" gutterBottom>
                    Encuéntranos
                </Typography>
                <div style={{ width: '100%', height: '400px' }}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.043810125157!2d-71.5386866848021!3d-33.02419288089857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de8bf1cb0b3f%3A0x4b0b8b98b7752b36!2s6%20Nte.%20498%2C%20Vi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso%2C%20Chile!5e0!3m2!1sen!2s!4v1634262471086!5m2!1sen!2s" 
                        width="100%" 
                        height="100%" 
                        style={{ border:0, borderRadius: '10px' }} 
                        allowFullScreen="" 
                        loading="lazy"
                        title="Location"
                    ></iframe>
                </div>
            </Box>
        </Container>
    );
}

export default Home;
