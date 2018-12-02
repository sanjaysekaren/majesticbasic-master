import React, { Component } from 'react';
import { connect } from "react-redux";
import { Image, Well, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import '../stylesheet/style1.css';
import { Layout, Menu, Breadcrumb, Icon, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { Tabs, Card, Affix } from 'antd';

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

      <div id="container"  >
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title={this.props.bookData[0].bookTitle} bordered={false} style={{ width: 1280 }}>
            <div id="container">
              <Row>
                <Col span={8}>
                  <Affix offsetTop={100}>
                    <Image id='bookImage' src={this.props.bookData[0].bookImage} style={{ width: 300, height: 400 }} />
                    <Row>

                    </Row>
                    <Row>
                      <Card id="InnerCardStyle" bordered={false} hoverable={true} style={{ width: 320 }}>
                        <Row id="CatchWordStyle">
                          <Col span={24}>
                            {this.props.bookData[0].catchWord}
                          </Col>
                        </Row>
                      </Card>
                    </Row>
                  </Affix>
                </Col>
                <Col span={16}>
                  <Row>

                    <Col span={8}>
                      <Card id="InnerCardStyle" title="General Details" hoverable={true} style={{ width: 800 }}>
                        <Row>
                          <Col id="ContentStyle" span={8}>
                            Subject
                        </Col>
                          <Col span={8}>
                            {this.props.bookData[0].subject}
                          </Col>
                        </Row>
                        <Row>
                          <Col id="ContentStyle" span={8}>
                            Author
                        </Col>
                          <Col span={8}>
                            {this.props.bookData[0].author}
                          </Col>
                        </Row>
                        <Row>
                          <Col id="ContentStyle" span={8}>
                            Pages
                        </Col>
                          <Col span={8}>
                            {this.props.bookData[0].pages}
                          </Col>
                        </Row>
                        <Row>
                          <Col id="ContentStyle" span={8}>
                            Edition
                        </Col>
                          <Col span={8}>
                            {this.props.bookData[0].edition}
                          </Col>
                        </Row>
                        <Row>
                          <Col id="ContentStyle" span={8}>
                            Language
                        </Col>
                          <Col span={8}>
                            {this.props.bookData[0].language}
                          </Col>
                        </Row>
                        <Row>
                          <Col id="ContentStyle" span={8}>
                            Publisher
                        </Col>
                          <Col span={8}>
                            {this.props.bookData[0].publisher}
                          </Col>
                        </Row>
                      </Card>
                    </Col >
                  </Row>
                  <Row>
                    &nbsp;
                </Row>

                  <Row>
                    <Col span={8}>
                      <Card id="InnerCardStyle" title="Price Details" style={{ width: 800 }}>
                        <Row>
                          <Col id="ContentStyle" span={8}>
                            Price
                        </Col>
                          <Col span={8}>
                            {this.props.bookData[0].price}
                          </Col>
                        </Row>
                        <Row>
                          <Col id="ContentStyle" span={8}>
                            Offers
                        </Col>
                          <Col span={8}>
                            {this.props.bookData[0].offers}
                          </Col>
                        </Row>
                        <Row>
                          <Col id="ContentStyle" span={8}>
                            Payment
                        </Col>
                          <Col span={8}>
                            {this.props.bookData[0].payment}
                          </Col>
                        </Row>
                        <Row>
                          <Col id="ContentStyle" span={8}>
                            Sold By
                        </Col>
                          <Col span={8}>
                            {this.props.bookData[0].soldBy}
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      &nbsp;
                  </Col>
                  </Row>
                  <Row id="container">

                    <Col span={24}>
                      <Card id="InnerCardStyle" title="Product description" width={800}>
                        {this.props.bookData[0].productDescription}
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    &nbsp;
                </Row>
                  <Row>
                    <Col span={24}>
                      <Card id="InnerCardStyle" title="Review/Feedback" width={800}>
                        {this.props.bookData[0].reviewAndFeedback}
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      &nbsp;
                  </Col>
                  </Row>
                  <Row id="container">

                    <Col span={24} >
                      <Card id="InnerCardStyle" title="You May Interested">
                      </Card>
                    </Col>

                  </Row>
                  <Row>
                    <Col span={24}>
                      &nbsp;
                  </Col>
                  </Row>
                  <Row id="container">
                    <Col span={24} >
                      <Card id="InnerCardStyle" title="Frequently Viewed">
                      </Card>
                    </Col>

                  </Row>
                </Col>
              </Row>

              {/* <Row>
                <Col>
                  <Card title="Data Check">

                    {this.props.bookData[0].pages}
                  </Card>
                </Col>
              </Row> */}
            </div>
          </Card>
        </div>
      </div>



    );
  }
}



// ReactDOM.render(<BookDetails />, document.getElementById('container'));

const mapStateToProps = (state) => {
  return { bookData: state.sampleBook }
}

export default connect(mapStateToProps)(BookDetails);