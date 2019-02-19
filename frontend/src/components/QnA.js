import React, { useState } from 'react';
import { TableRow, TableCell, Paper, TableBody, Table } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const Item = (props) => {
    const { classes } = props;
    const [ openState, setOpen ] = useState(false);

    const setOpenHandler = () => {
        setOpen(!openState);
    };

    return (
            <Paper className={classes.paper} onClick={setOpenHandler}>
                <Typography variant="caption">{props.item.author} {props.item.date}</Typography>
                <Typography variant="body1">{props.item.content}</Typography>
                {
                    openState && (
                        <div className={classes.paperChild}>
                            <Typography variant="caption">{props.item.answer.author} {props.item.answer.date}</Typography>
                            <Typography variant="body1">{props.item.answer.content}</Typography>
                        </div>
                    )
                }
            </Paper>
    )
}

const QnA = (props) => {
    const { classes, questions } = props;
    return (
        <div>
            {
                questions.map((row) => (
                        <Item key={row.id} item={row} classes={classes} />
                    )
                )
            }
        </div>
    )
}

export default QnA;