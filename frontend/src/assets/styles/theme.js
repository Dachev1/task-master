import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: { main: '#6c63ff' },
        secondary: { main: '#ffffff' },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h1: { fontSize: '2.5rem', fontWeight: 700 },
        body1: { fontSize: '1rem' },
    },
});

export default theme;
