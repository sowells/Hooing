import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, Tabs, Tab, Table, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import './detail.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

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
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing.unit}px auto`,
        padding: theme.spacing.unit * 2,
    },
});

const productMainImageFrameStyles = {
    width:'400px',
    height:'400px',
    maxWidth:'400px',
    maxHeight:'400px',
    // maxWidth:'100vw',
    // maxHeight:'100vh',
};

const productMainImageStyles = {
    maxWidth:'100%',
    maxHeight:'100%',
    display:'block',
    margin:'auto',
}

const detailMainFrameStyle = {
    width:'400px',
    margin:'auto',
}

const imageSize = {
    width:'400px',
    height:'400px',
}

const ProductImage = (props) => {
    const [indexState, setIndex] = useState(0);

    const nextImageHandler = () => {
        console.log("next"+ indexState + props.images.length);
        if(indexState < props.images.length - 1)
            setIndex(indexState + 1);
    }

    return (
        <ImageGallery items={props.images} showFullscreenButton={false} showPlayButton={false} showIndex={true} showThumbnails={false}/>
        /*{ <div style={productMainImageFrameStyles} onClick={nextImageHandler}>
            <img src={props.images[indexState].url} alt={props.images[indexState].title} title={props.images[indexState].title} key={props.images[indexState].id} style={productMainImageStyles}></img>
        </div> }*/
    );
}

const ProductInfo = (props) => {
    return (
        <div>
            <Typography variant="h5" component="h3">
                {props.name}
            </Typography>
            <Typography variant="h6">
                {props.price}원
            </Typography>                
        </div>
    );
}

const ProductRate = (props) => {
    let comment;

    if(props.rate > 4.5) comment = '최고 좋음';
    else if(props.rate > 4) comment = '아주 좋음';
    else if(props.rate > 3) comment = '좋음';


    return (
        <div>
            {comment + ' ' + props.rate + ' / 5'}
        </div>  
    );
}

const ProductDetail = (props) => {
    return (
        <div>
            {props.description}
        </div>
    )
}

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

const QnA = (props) => {
    const { classes, qnas } = props;
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableBody>
                {qnas.map(row => (
                    <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                    <Typography variant="caption">{row.author} {row.date}</Typography>
                        {/* {row.status = 'C' && } */}
                        <Typography variant="body1">{row.content}</Typography>
                        
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

const printRate = (rate) => {
    let result = '';
    for(let i = 0; i < rate; i++) {
        result += '★';
    }
    return result;
}
class DetailPage extends React.Component {
    product = {
        name: '쾌변후잉(Quabyeon Hooing)',
        price: '15000',
        rate: 4.4,
        images : [
            {
                id:'1',
                original:'/static/images/hooing.png',
                thumbnail:'/static/images/hooing.png',
                title:'쾌변후잉'
            },
            {
                id:'2',
                original:'/static/images/hooing2.jpg',
                thumbnail:'/static/images/hooing2.jpg',
                title:'쾌변후잉2'
            }
        ],
        description : (
            <div> 
                <p>
                    지금까지 이런 남편은 없었다 
                </p>
                <p>
                    이것은 남편인가 귀요미인가
                </p>
            </div>
        ),
        reviews : [
            {
                'author':'sowells',
                'date':'19.02.14',
                'option':'쾌변후잉L',
                'rate':5,
                'content':'괜찮네요. 좀 과하게 귀여운 듯 합니다.',
                'images': [
                    {
                        id:'1',
                        original:'/static/images/hooing.png',
                        thumbnail:'/static/images/hooing.png',
                        title:'쾌변후잉'
                    },
                    {
                        id:'2',
                        original:'/static/images/hooing2.jpg',
                        thumbnail:'/static/images/hooing2.jpg',
                        title:'쾌변후잉2'
                    }
                ]
            },
            {
                'author':'kxjooho',
                'date':'19.02.13',
                'option':'쾌변후잉M',
                'rate':3,
                'content':'화장실을 너무 많이 가네요.',
                'images': [
                    {
                        id:'1',
                        original:'/static/images/hooing.png',
                        thumbnail:'/static/images/hooing.png',
                        title:'쾌변후잉'
                    },
                    {
                        id:'2',
                        original:'/static/images/hooing2.jpg',
                        thumbnail:'/static/images/hooing2.jpg',
                        title:'쾌변후잉2'
                    }
                ]
            }
        ],
        questions : [
            {
                id:'1',
                author:'sowells',
                date:'18.02.01',
                status:'완료',
                content:'귀여운가요?'
            }
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
                <ProductRate rate={this.product.rate}/>    
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
                {tabIndex === 0 && <ProductDetail description={this.product.description} />}
                {tabIndex === 1 && <Review reviews={this.product.reviews} classes={classes}/>}
                {tabIndex === 2 && <QnA qnas={this.product.questions} classes={classes}/>}
            </Paper>
        )
    }
}

// export default withStyles(styles)(MediaCard);
export default withStyles(styles)(DetailPage);