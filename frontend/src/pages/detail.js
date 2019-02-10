import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, Tabs, Tab } from '@material-ui/core';
import './detail.css';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        width:'45%'
    },
    buttonDiv: {
        textAlign:'center'
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const productMainImageFrameStyles = {
    width:'400px',
    height:'400px',
    maxWidth:'100vw',
    maxHeight:'100vh',
};

const productMainImageStyles = {
    maxWidth:'100%',
    maxHeight:'100%',
    margin:'auto',
    display:'block'
}

const detailMainFrameStyle = {
    width:'400px',
    margin:'auto',
    // backgroundColor: '#FFFFE9',
}

function MediaCard(props) {
    const { classes } = props;
    console.log(props +","+classes.card);
    return (
            <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image="/static/images/hooing.png"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                쾌변후잉 (Quabyeon Hooing)
                </Typography>
                <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActionArea>

            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                아주좋음 4.9/5
                </Button>
                <Button size="small" color="primary">
                공유
                </Button>
            </CardActions>
            </Card>
        )
    };

function ProductImage(props) {
    return (
        <div style={productMainImageFrameStyles}>
            {
                props.images.map((image) => {
                    return <img src={image.url} alt={image.title} title={image.title} key={image.id} style={productMainImageStyles}></img>
                })
            }
        </div>
    );
}

function ProductInfo(props) {
    return (
        <div>
            <Typography variant="h5" component="h3">
                {props.name}
            </Typography>
            <Typography component="p">
                {props.price}원
            </Typography>                
        </div>
    );
}

function ProductDetail(props) {
    return (
        <div>상품상세설명입니다.</div>
    )
}

function Review(props) {
    return (
        <div>구매후기입니다.</div>
    )
}

function QnA(props) {
    return (
        <div>Q&A입니다.</div>
    )
}
class DetailPage extends React.Component {
    product = {
        name: '쾌변후잉(Quabyeon Hooing)',
        price: '15000',
        images : [
            {
                id:'1',
                url:'/static/images/hooing.png',
                title:'쾌변후잉'
            },
            // {
            //     id:'2',
            //     url:'/static/images/hooing.png',
            //     title:'쾌변후잉2'
            // }
        ]
    };

    state = {
        tabIndex: 0,
    };

    handleTabClick = (event, value) => {
        this.setState(() => {
            return {tabIndex:value};
        });
    }

    render() {
    const { tabIndex } = this.state;
    const { classes } = this.props;
        return (
            <Paper style={detailMainFrameStyle}>
            
                <ProductImage images={this.product.images}/>
                <ProductInfo name={this.product.name} price={this.product.price} />    
                <div className={classes.buttonDiv}>
                    <Button variant="contained" color="primary" className={classes.button}>구매하기</Button>
                    <Button variant="contained" color="primary" className={classes.button}>공유하기</Button>
                </div>
                <Tabs 
                    value={tabIndex}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleTabClick}
                    centered
                >
                    <Tab label="상품설명" />
                    <Tab label="구매후기" />
                    <Tab label="Q&A" />
                </Tabs>
                {tabIndex === 0 && <ProductDetail/>}
                {tabIndex === 1 && <Review/>}
                {tabIndex === 2 && <QnA/>}
            </Paper>
        )
    }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  
};

// export default withStyles(styles)(MediaCard);
export default withStyles(styles)(DetailPage);