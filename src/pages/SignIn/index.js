import React, { Component } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

import { BtnGoogle, BtnUser, BtnFacebook } from './styles';

class SignIn extends Component {
  componentDidMount() {
    document.querySelector('body').className = 'bg-gradient-primary';
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xl={10} lg={12} md={9}>
            <Card className="o-hidden border-0 shadow-lg my-5">
              <Card.Body className="p-0">
                <Row>
                  <Col lg={6} className="d-none d-lg-block bg-login-image" />
                  <Col lg={6}>
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome back!</h1>
                      </div>

                      <Form className="user">
                        <Form.Group>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            className="form-control-user"
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            className="form-control-user"
                          />
                        </Form.Group>

                        <div key="custom-checkbox" className="mb-3">
                          <Form.Check
                            custom
                            type="checkbox"
                            id="custom-checkbox"
                            label="Remember me"
                          />
                        </div>

                        <BtnUser className="btn btn-primary btn-block">
                          Login
                        </BtnUser>
                        <hr />

                        <BtnGoogle className="btn btn-block">
                          <i className="fab fa-google fa-fw" /> Login with
                          Google
                        </BtnGoogle>

                        <BtnFacebook className="btn btn-facebook btn-user btn-block">
                          <i className="fab fa-facebook-f fa-fw" /> Login with
                          Facebook
                        </BtnFacebook>
                      </Form>

                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
