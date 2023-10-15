
import React from 'react';
import { Typography, Container } from '@mui/material';

function QuienesSomos() {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Quiénes Somos
            </Typography>
            <Typography variant="body1" paragraph>
                Salón Eileen se fundó en 2000 con la misión de ofrecer servicios de belleza 
                personalizados y de alta calidad. Nuestro equipo de estilistas y técnicos 
                altamente capacitados está dedicado a brindarte una experiencia de belleza 
                inigualable en un ambiente relajante y lujoso.
            </Typography>
            <Typography variant="body1" paragraph>
                Nos especializamos en una variedad de servicios, incluyendo cortes de pelo, 
                coloración, tratamientos capilares, manicura, pedicura y más. Utilizamos 
                productos de la más alta calidad para garantizar resultados excepcionales 
                y la satisfacción de nuestros clientes.
            </Typography>
            <img src="/images/team.jpg" alt="Nuestro Equipo" style={{ width: '100%', borderRadius: '10px' }} />
        </Container>
    );
}

export default QuienesSomos;
