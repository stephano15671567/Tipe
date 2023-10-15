
import React from 'react';
import { Typography, Container } from '@mui/material';

function Home() {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Bienvenido a Salón Eileen
            </Typography>
            <Typography variant="body1" paragraph>
                En Salón Eileen, nos esforzamos por ofrecerte una experiencia de belleza 
                personalizada y de alta calidad. Nuestro equipo de profesionales altamente 
                capacitados está dedicado a proporcionarte los mejores servicios y productos 
                en un ambiente relajante y amigable.
            </Typography>
            <img src="/images/salon.jpg" alt="Salón Eileen" style={{ width: '100%', borderRadius: '10px' }} />
        </Container>
    );
}

export default Home;
