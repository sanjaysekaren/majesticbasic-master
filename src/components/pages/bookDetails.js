import React, { Component } from 'react';
import { connect } from "react-redux";
import '../stylesheet/style1.css';
import { Layout, Menu, Breadcrumb, Icon, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { Tabs, Card, Affix } from 'antd';
import ProductImage from '../subComponents/ProductSpecImage';
import ProductDetails from '../subComponents/ProductSpecDetail';
const TabPane = Tabs.TabPane;

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class BookDetails extends Component {
  // state = {
  //   collapsed: false,
  // };

  // onCollapse = (collapsed) => {
  //   console.log(collapsed);
  //   this.setState({ collapsed });
  // }

  render() {

    console.log(this.props.bookData)
    return (

      <div id="container">
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title={this.props.bookData[0].bookTitle} bordered={false} style={cardStyle}>
            <div id="container" style={{ background: "#FFFFF", padding: "0px" }}>
              <Row>
                <Col span={8}>
                  <Affix offsetTop={100}>
                    <ProductImage bookImage={this.props.bookData[0].bookImage}
                      catchWord={this.props.bookData[0].catchWord}
                    />
                  </Affix>
                </Col>
                <Col span={16}>
                  <ProductDetails 
                        subject={this.props.bookData[0].subject}
                        author={this.props.bookData[0].author}
                        pages={this.props.bookData[0].pages}
                        edition={this.props.bookData[0].edition}
                        language={this.props.bookData[0].language}
                        publisher={this.props.bookData[0].publisher}
                        price={this.props.bookData[0].price}
                        offers={this.props.bookData[0].offers}
                        payment={this.props.bookData[0].payment}
                        soldBy={this.props.bookData[0].soldBy}
                        productDescription={this.props.bookData[0].productDescription}
                        reviewAndFeedback={this.props.bookData[0].reviewAndFeedback}

                  />
                </Col>
              </Row>
            </div>
          </Card>
        </div>
      </div>



    );
  }
}
const cardStyle = {
width: "100%",
border: "none",
boxShadow: "0px 1px 1px 0px #888888"
};

// ReactDOM.render(<BookDetails />, document.getElementById('container'));

const mapStateToProps = (state) => {
  return { bookData: state.sampleBook }
}


export default connect(mapStateToProps)(BookDetails);