import React, { Component } from 'react'
import {Image,Well,Col,Row,Button} from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart,updateCart } from "../../actions/cartActions";
import {sampleBookData} from "../../actions/sampleBookAction";
import BookDetails from './bookDetails';

class BookItem extends Component {
    constructor(){
        super();
        this.state={
            isCliclked:false
        }
    }
    onToggleRead(){
        this.setState({
            isCliclked : !this.state.isCliclked
        })
    }
    handleCart(){
        const book = [...this.props.cart,{
            _id:this.props._id,
            title:this.props.title,
            description:this.props.description,
            images : this.props.images,
            price:this.props.price,
            quantity : 1
        }]
        
        if(this.props.cart.length > 0){

            let _id = this.props._id;
            console.log("*********cart id check",_id);
            let cartIndex = this.props.cart.findIndex(function(cart){
                return cart._id === _id;
            })
            if(cartIndex === -1){
                this.props.addToCart(book)
            }
            else{
                this.props.updateCart(_id,1,this.props.cart)
            }
        }else{
            this.props.addToCart(book)
        }
        console.log("--------------bookitem",this.props.cart);
        
    }
    viewBookDetais(){
        return(
            <BookDetails/>
        );
    }
  render() {
    return (
      <Well>
          <Row>
              <Col xs={12} sm={4}>
              <Image src={this.props.images} onKeyPress={this.viewBookDetais.bind(this)} responsive />
              </Col>
          <Col xs ={6} sm={8}>
          <h6>{this.props.title}</h6>
          <p>{(this.props.description.length>50 && this.state.isCliclked===false)?(this.props.description.substring(0,50)):(this.props.description)}
          <Button className="link" onClick={this.onToggleRead.bind(this)}>
          {(this.state.isCliclked===false && this.props.description !== null && this.props.description.length>50)?('...read more'):('...show less')}
          </Button>
          </p>
          <h6>inr. {this.props.price}</h6>
          <Button href="/bookdetails" bsStyle="primary" onPress={() => this.props.sampleBookData()} >Buy now</Button>
          </Col>
          </Row>
      </Well>
    )
  }
}

function mapStateToProps(state){
    return {cart : state.cart.cart  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addToCart:addToCart,
        updateCart:updateCart,
        sampleBookData:sampleBookData
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BookItem);