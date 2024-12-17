import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './assets/styles/theme';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './assets/styles/global.css';

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    </ThemeProvider>
);

export default App;
