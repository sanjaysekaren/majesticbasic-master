import React, { Component } from 'react';
import '../stylesheet/style1.css';
import { Layout, Menu, Breadcrumb, Icon, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { Tabs, Card, Affix } from 'antd';

class ProductImage extends Component {
    render(props) {
        return (
            <div>
                <img id='bookImage' src={this.props.bookImage} style={{ width: 250, height: 350 }} />
                <Row>

                </Row>
                <Row>
                    <Card id="InnerCardStyle" bordered={false} hoverable={true} style={{ width: 320 }}>
                        <Row id="CatchWordStyle">
                            <Col span={24}>
                                {this.props.catchWord}
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </div>
        );
    }
}

export default ProductImage;