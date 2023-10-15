import React from 'react';
import { Typography, Container, Box, List, ListItem, ListItemText, Grid, ListItemIcon } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import imagen11 from "../Servicios/images/servicio11.jpg";
import imagen10 from "../Productos/images/producto3.jpg";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        margin: '20px 0',
    },
    textBox: {
        color: 'rgb(255, 132, 203)',
        padding: '20px',
        flex: 1,
    },
    imageBox: {
        flexBasis: '40%',
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
    list: {
        marginTop: '20px',
    },
    listItem: {
        paddingLeft: 0,
    },
});

function QuienesSomos() {
    const classes = useStyles();

    return (
        <Container>
            <Box className={classes.container}>
                <Box className={classes.textBox}>
                    <Typography variant="h2" gutterBottom>
                        Quiénes Somos
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Salón Eileen se fundó en 2000 con la misión de ofrecer servicios de belleza 
                        personalizados y de alta calidad. Nos especializamos en una variedad de servicios, 
                        incluyendo:
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <List className={classes.list}>
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <ArrowForwardIosIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Peluquería" />
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <ArrowForwardIosIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Tratamientos Faciales" />
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <ArrowForwardIosIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Pestañas y Cejas" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={6}>
                            <List className={classes.list}>
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <ArrowForwardIosIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Manicure & Pedicure" />
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <ArrowForwardIosIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Tratamientos Corporales" />
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <ArrowForwardIosIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Depilación" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.imageBox}>
                    <img src={imagen11} alt="Nuestro Equipo" className={classes.image} />
                </Box>
            </Box>

            {/* Sección adicional con imagen a la izquierda y texto a la derecha */}
            <Box className={classes.container}>
                <Box className={classes.imageBox}>
                    <img src={imagen10} alt="Imagen Adicional" className={classes.image} />
                </Box>
                <Box className={classes.textBox}>
                    <Typography variant="h2" gutterBottom>
                        Sección Adicional
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Aquí puedes agregar más texto. Esta sección tiene la imagen a la izquierda y el texto a la derecha.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default QuienesSomos;
