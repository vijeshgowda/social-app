import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grid, Grow} from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts';
import memories from './images/sroad.png'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles';

const App = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={memories} alt='memories' height='60'/>
                <Typography className={classes.heading} variant='h2' align="center">My Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent={'space-between'} alignItems={'stretch'} spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;