import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import { printRate } from './ProductRate';

const Review = (props) => {
    const { classes } = props;
    return (
        <div>
            {
                props.reviews.map((image) => 
                    <Paper className={classes.paper}>
                        <Typography variant="caption">{image.author} {printRate(image.rate)} 옵션:{image.option} {image.date}</Typography>
                        <Typography variant="body1">{image.content}</Typography>
                    </Paper>
                )
            }
        </div>
    )
}

export default Review;