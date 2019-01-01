import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Col, Row, Tabs, Card, Affix, Drawer,Button } from 'antd';

class UserCart extends Component {
    state = { visible: true, childrenDrawer: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    showChildrenDrawer = () => {
        this.setState({
            childrenDrawer: true,
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false,
        });
    };

    render() {
        return (
            <div>
                {/* <Button type="primary" onClick={this.showDrawer}>
                    Open drawer
      </Button> */}
                <Drawer
                    title="Multi-level drawer"
                    width={520}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                <Card title="My Cart" bordered={false} width={300}>
                    <Card title="Book 1" bordered={true} width={150}>
                        <Row>
                            <Col span={6}>
                               <img src="https://images-na.ssl-images-amazon.com/images/I/51j3ISgpR6L._SX319_BO1,204,203,200_.jpg" width="70px" height="100px"/>

                            </Col>
                            <Col span={14}>
                                <Row>
                                    <Col span={8}>
                                        Name
                                    </Col>
                                    <Col span={12}>
                                    The Monk Who Sold His Ferrari
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        Price
                                    </Col>
                                    <Col span={12}>
                                    300
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        Author
                                    </Col>
                                    <Col span={12}>
                                    Robin Sharma
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={4}>
                                <Row>
                                    Quantity
                                </Row>
                                <Row>
                                    
                                </Row>

                            </Col>

                        </Row>
                    </Card>
                </Card>
                    <Button type="primary" onClick={this.showChildrenDrawer}>
                        Two-level drawer
        </Button>
                    <Drawer
                        title="Two-level Drawer"
                        width={320}
                        closable={false}
                        onClose={this.onChildrenDrawerClose}
                        visible={this.state.childrenDrawer}
                    >
                        This is two-level drawer
        </Drawer>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e8e8e8',
                            padding: '10px 16px',
                            textAlign: 'right',
                            left: 0,
                            background: '#fff',
                            borderRadius: '0 0 4px 4px',
                        }}
                    >
                        <Button
                            style={{
                                marginRight: 8,
                            }}
                            onClick={this.onClose}
                        >
                            Cancel
          </Button>
                        <Button onClick={this.onClose} type="primary">
                            Submit
          </Button>
                    </div>
                </Drawer>
            </div>
        );
    }
}



export default UserCart;