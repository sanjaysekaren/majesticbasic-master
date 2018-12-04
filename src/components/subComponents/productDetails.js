import React, { Component } from 'react';
import '../stylesheet/style1.css';
import { Layout, Menu, Breadcrumb, Icon, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { Tabs, Card, Affix } from 'antd';
import { Layout, Menu, Breadcrumb, Icon, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { Tabs, Card, Affix } from 'antd';

class ProductDetails extends Component {
    render(props) {
        return (
            <div>
                <Row>

                    <Col span={8}>
                        <Card id="ProductDetails-InnerCardStyle" title="General Details" hoverable={true} style={{ width: 800 }}>
                            <Row>
                                <Col id="ProductDetails-ContentStyle" span={8}>
                                    Subject
    </Col>
                                <Col span={8}>
                                    {this.props.subject}
                                </Col>
                            </Row>
                            <Row>
                                <Col id="ProductDetails-ContentStyle" span={8}>
                                    Author
    </Col>
                                <Col span={8}>
                                    {this.props.author}
                                </Col>
                            </Row>
                            <Row>
                                <Col id="ProductDetails-ContentStyle" span={8}>
                                    Pages
    </Col>
                                <Col span={8}>
                                    {this.props.pages}
                                </Col>
                            </Row>
                            <Row>
                                <Col id="ProductDetails-ContentStyle" span={8}>
                                    Edition
    </Col>
                                <Col span={8}>
                                    {this.props.edition}
                                </Col>
                            </Row>
                            <Row>
                                <Col id="ProductDetails-ContentStyle" span={8}>
                                    Language
    </Col>
                                <Col span={8}>
                                    {this.props.language}
                                </Col>
                            </Row>
                            <Row>
                                <Col id="ProductDetails-ContentStyle" span={8}>
                                    Publisher
    </Col>
                                <Col span={8}>
                                    {this.props.publisher}
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
                        <Card id="ProductDetails-InnerCardStyle" title="Price Details" style={{ width: 800 }}>
                            <Row>
                                <Col id="ProductDetails-ContentStyle" span={8}>
                                    Price
    </Col>
                                <Col span={8}>
                                    {this.props.price}
                                </Col>
                            </Row>
                            <Row>
                                <Col id="ProductDetails-ContentStyle" span={8}>
                                    Offers
    </Col>
                                <Col span={8}>
                                    {this.props.offers}
                                </Col>
                            </Row>
                            <Row>
                                <Col id="ProductDetails-ContentStyle" span={8}>
                                    Payment
    </Col>
                                <Col span={8}>
                                    {this.props.payment}
                                </Col>
                            </Row>
                            <Row>
                                <Col id="ProductDetails-ContentStyle" span={8}>
                                    Sold By
    </Col>
                                <Col span={8}>
                                    {this.props.soldBy}
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
                        <Card id="ProductDetails-InnerCardStyle" title="Product description" width={800}>
                            {this.props.productDescription}
                        </Card>
                    </Col>
                </Row>
                <Row>
                    &nbsp;
</Row>
                <Row>
                    <Col span={24}>
                        <Card id="ProductDetails-InnerCardStyle" title="Review/Feedback" width={800}>
                            {this.props.reviewAndFeedback}
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
                        <Card id="ProductDetails-InnerCardStyle" title="You May Interested">
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
                        <Card id="ProductDetails-InnerCardStyle" title="Frequently Viewed">
                        </Card>
                    </Col>

                </Row>
            </div>
        );
    }
}

  
  
export default ProductDetails;