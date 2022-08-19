import React from "react";
import { Container, AppBar, Typography, Grid, Grow} from '@material-ui/core';
import memories from './images/sroad.png'

const App = () => {
    return(
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant='h2' align="center">My Memories</Typography>
                <img src={memories} alt='memories' height='60' />
            </AppBar>
        </Container>
    );
}

export default App;