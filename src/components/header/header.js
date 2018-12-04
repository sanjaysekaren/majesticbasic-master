import React, { Component } from 'react'
import { render } from 'react-dom';
import Rodal from 'rodal';
import '../../index.css';
import { Input } from 'antd';
import { Button, message,Icon } from 'antd';
import { DatePicker } from 'antd';
import { Select } from 'antd';
import Searchtab from './searchtab';

const Option = Select.Option;
export default class HeaderNav extends Component {
    validateLogin(phoneNumber) {
    }
    constructor(props) {
      super(props);
      this.state = {
        visible: false,
        window_innerWidth: window.innerWidth,
        window_innerHeight: window.innerHeight,
        isLogin: true,
        phoneNumber: "",
        gender: "",
        isVerifyOtp: false
      }
      // this.updateDimensions = this.updateDimensions.bind(this);
    }
    componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    updateDimensions() {
      if (window.innerWidth % 20 == 0) {
        this.setState({
          window_innerWidth: window.innerWidth,
          window_innerHeight: window.innerHeight
        });
      }
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
  
    onChange = (e) => {
      const { value } = e.target;
      const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
      if (((!isNaN(value) && reg.test(value)) || value === '' || value === '-') && value.length <= 10) {
        this.setState({
          phoneNumber: value
        })
      }
    }


  render() {
    return (
        <div>
        <Rodal
          visible={this.state.visible}
          onClose={() => {
            this.setState({
              visible: false
            })
          }}
          animation={this.state.window_innerWidth <= 768 ? "slideUp" : "slideLeft"}
          leaveAnimation={this.state.window_innerWidth <= 768 ? "slideUp" : "slideRight"}
          width={this.state.window_innerWidth <= 768 ? window.innerWidth : window.innerWidth * 0.5}
          height={this.state.window_innerWidth <= 768 ? window.innerHeight : window.innerHeight * 0.7}
        >
          <br />
          <div className="row" style={{ height: this.state.window_innerWidth <= 768 ? window.innerHeight : window.innerHeight * 0.7 }}>
            <div className="col-md-4 col-sm-4 col-4" style={{
              backgroundColor: "#2874f0", marginTop: -36,
              height: this.state.window_innerWidth <= 768 ? window.innerHeight : window.innerHeight * 0.7
            }}>
              <br />
              <br />
              {this.state.isLogin ? <h3 style={{ textAlign: "center", color: "#FFF" }}>Login</h3> :
                <h3 style={{ textAlign: "center", color: "#FFF" }}>Sign Up</h3>}
              <br />
              {this.state.isLogin ? <h6 style={{ textAlign: "center", color: "#FFF" }}>Get access to your Orders, Wishlist and Recommendations</h6> :
                <h6 style={{ textAlign: "center", color: "#FFF" }}>We do not share your personal details with anyone.</h6>}
              <br />
              <br />
              <br />
              <br />
              <br />
              {this.state.window_innerWidth <= 768 ? <div /> :
                <img src="https://cdn.dribbble.com/users/633193/screenshots/5539409/reading_book-02.jpg" style={{
                  borderRadius: 400,
                  width: window.innerWidth * 0.14,
                  height: window.innerHeight * 0.2
                }} />}
            </div>
            {this.state.isVerifyOtp ?
              <div className="col-md-8 col-sm-8 col-8">
                <br />
                <Input placeholder="Enter the verification code" autoFocus={true} onChange={() => { }} />
                <br />
                <br />
                <p style={{ textAlign: "center" }}>Verification Code has been sent to {this.state.phoneNumber}</p>
                <div style={{ textAlign: "center" }}>
                  <a style={{ color: "#2874f0", textDecoration: "underline" }}>Resend?</a>
                </div>
                <br />
                <Button type="primary" onClick={() => { message.success("Verification success") }} block>Verify Otp</Button>
              </div> :
              <div className="col-md-8 col-sm-8 col-8">
                <br />
                <Input placeholder="Phone Number" value={this.state.phoneNumber} autoFocus={true} onChange={(e) => this.onChange(e)} />
                {this.state.isLogin ? <div /> : <div>
                  <br />
                  <Input placeholder="Pick a nick name" onChange={(e) => { }} />
                  <br />
                  <br />
                  <Input placeholder="EmailID" onChange={(e) => { }} />
                  <br />
                  <br />
                  <div style={{ textAlign: "center" }}>
                    Date Of Birth{" "}
                    <DatePicker onChange={() => { }} />
                  </div>
                  <br />
                  <div style={{ textAlign: "center" }}>
                    Gender{" "}
                    <Select style={{ width: 120 }} onChange={() => { }}>
                      <Option value="m">Male</Option>
                      <Option value="f">Female</Option>
                      <Option value="o">Other</Option>
                    </Select>
                  </div>
                  <br />
                </div>}
                <br />
                <Button type="primary" onClick={() => {
                  message.success('Verification code has been sent.');
                  this.setState({
                    isVerifyOtp: true
                  })
                }} block>{this.state.isLogin ? "Login" : "Sign Up"}</Button>
                <br />
                <br />
                <Button onClick={() => this.setState({
                  isLogin: !this.state.isLogin
                })} block>{this.state.isLogin ? "New to books? Sign Up" : "Existing User? Login"}</Button>
              </div>}
          </div>
        </Rodal>

          <div className='fixed-top'>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">Maj-book</a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
      <Searchtab/>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    <Icon type="shopping-cart" theme='outlined' style={{ fontSize: '16px',width:'20px',height:'20px'}} />
    
    
    <a className="cursor" onClick={() => {
                        this.setState({
                          visible: true
                        })
                      }}>Login</a>
  </div>
</nav>
</div>
      </div>
    )
  }
}
