import React, { Component } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

import { BtnGoogle, BtnUser, BtnFacebook } from './styles';

class SignUp extends Component {
  componentDidMount() {
    document.querySelector('body').className = 'bg-gradient-primary';
  }

  render() {
    return (
      <Container>
        <Card className="o-hidden border-0 shadow-lg my-5">
          <Card.Body className="p-0">
            <Row>
              <Col lg={5} className="d-none d-lg-block bg-register-image" />
              <Col lg={7}>
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an account!
                    </h1>
                  </div>

                  <Form className="user">
                    <Form.Group>
                      <Form.Row>
                        <Col>
                          <Form.Control
                            placeholder="First Name"
                            className="form-control-user"
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            placeholder="Last Name"
                            className="form-control-user"
                          />
                        </Col>
                      </Form.Row>
                    </Form.Group>

                    <Form.Group>
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        className="form-control-user"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Row>
                        <Col>
                          <Form.Control
                            placeholder="Password"
                            className="form-control-user"
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            placeholder="Repeat Password"
                            className="form-control-user"
                          />
                        </Col>
                      </Form.Row>
                    </Form.Group>

                    <BtnUser className="btn btn-primary btn-block">
                      Register Account
                    </BtnUser>
                    <hr />

                    <BtnGoogle className="btn btn-block">
                      <i className="fab fa-google fa-fw" /> Register with Google
                    </BtnGoogle>

                    <BtnFacebook className="btn btn-facebook btn-user btn-block">
                      <i className="fab fa-facebook-f fa-fw" /> Register with
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
                      Already have an account? Sign In!
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default SignUp;
