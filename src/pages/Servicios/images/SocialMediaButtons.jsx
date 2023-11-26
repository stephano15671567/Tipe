
import React from 'react';
import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SocialMediaButtons = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            marginTop="20px"
        >
            <IconButton
                color="black"
                component="a"
                href="https://www.instagram.com/salon.eileen.vina/" // Replace with your Instagram profile link
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon />
            </IconButton>
            <IconButton
                color="black"
                component="a"
                href="https://es-la.facebook.com/SalonEileenQuintero/" // Replace with your Facebook page link
                target="_blank"
                rel="noopener noreferrer"
            >
                <FacebookIcon />
            </IconButton>
            <IconButton
                color="black"
                component="a"
                href="https://wa.me/yourwhatsappnumber" // Replace with your WhatsApp number link
                target="_blank"
                rel="noopener noreferrer"
            >
                <WhatsAppIcon />
            </IconButton>
        </Box>
    );
};

export default SocialMediaButtons;
