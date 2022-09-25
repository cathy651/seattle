import React from 'react'

import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const BusinessInfo = (props) => {
    const { post } = props;
    return (
        <Paper
            sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${post.image})`,
            }}
        >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
        <Box
        sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
        }}
        />
        <Grid container>
        <Grid item md={6}>
            <Box
            sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
            }}
            >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            Count memories, not calories.
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            People who love to eat are always the best.
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            Record life with 3D foods.
            </Typography>
           
            </Box>
        </Grid>
        </Grid>
    </Paper>
    );
}

BusinessInfo.propTypes = {
    post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    }).isRequired,
};

export default BusinessInfo