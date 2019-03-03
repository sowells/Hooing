import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Paper, Tabs, Tab, Table, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import "react-image-gallery/styles/css/image-gallery.css";
import QnA from '../QnA';
import ProductInfo from './ProductInfo';
import ProductImage from './ProductImage';
import Review from './Review';
import ProductRate from './ProductRate';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        width:'45%'
    },
    buttonDiv: {
        textAlign:'center'
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


const ProductDescription = (props) => {
    return (
        <div>
            {props.description}
        </div>
    )
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props)
    }
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
                wasAnswered:'Y',
                content:'귀여운가요?',
                answer: {
                    id:'1',
                    author:'master',
                    date:'18.02.01',
                    content:'입술이 통통하고 볼이 만두같고, 코는 두툼하고 잘때는 낑낑거리고 얼마나 귀여운지 모릅니다 고객님',
                    questionId:'1',
                }
            },
            {
                id:'2',
                author:'kxjooho',
                date:'18.02.02',
                wasAnswered:'Y',
                content:'몇키로인가요?',
                answer: {
                    id:'2',
                    author:'master',
                    date:'18.02.02',
                    content:'67kg입니다.',
                    questionId:'2',
                }
            }
        ],
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
                {tabIndex === 0 && <ProductDescription description={this.product.description} />}
                {tabIndex === 1 && <Review reviews={this.product.reviews} classes={classes}/>}
                {tabIndex === 2 && <QnA questions={this.product.questions} classes={classes}/>}
            </Paper>
        )
    }
}

export default withStyles(styles)(DetailPage);