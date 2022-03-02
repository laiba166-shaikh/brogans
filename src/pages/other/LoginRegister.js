import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link,useHistory } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { createUser, login } from "../../redux/actions/authActions";
import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";

const LoginRegister = ({ location, registerUser, loginUser }) => {
  const { pathname } = location;
  const history=useHistory()
  const { addToast } = useToasts();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleInputChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Login</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login Register
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={(e) => {
                              e.preventDefault()
                              loginUser(state, addToast)
                            }}>
                              <input
                                type="text"
                                name="email"
                                autoComplete="off"
                                onChange={handleInputChange}
                                placeholder="Email / Username"
                              />
                              <input
                                type="password"
                                name="password"
                                autoComplete="off"
                                onChange={handleInputChange}
                                placeholder="Password"
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button type="submit">
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={(e) => {
                              e.preventDefault()
                              registerUser(state, addToast)
                            }}>
                              <input
                                type="text"
                                name="username"
                                autoComplete="off"
                                onChange={handleInputChange}
                                placeholder="Username"
                              />
                              <input
                                type="password"
                                name="password"
                                autoComplete="off"
                                onChange={handleInputChange}
                                placeholder="Password"
                              />
                              <input
                                name="email"
                                autoComplete="off"
                                onChange={handleInputChange}
                                placeholder="Email"
                                type="email"
                              />
                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object,
  registerUser: PropTypes.func,
  loginUser: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (user, addToast) => {
      dispatch(createUser(
        {
          userName: user.username,
          email: user.email,
          password: user.password
        },
        addToast
      ));
    },
    loginUser: (user, addToast) => {
      dispatch(login(
        {
          email: user.email,
          password: user.password
        },
        addToast
      ));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginRegister);
