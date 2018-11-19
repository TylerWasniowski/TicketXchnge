// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { post } from 'axios';
import { Modal, ModalHeader } from 'reactstrap';
import SignUp from '../containers/SignUp';
import { setJWT } from '../actions/index';
import { LOGIN_AUTH_API_ROUTE } from '../../util/routes';

class LoginPage extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      modalOpen: false
    };
  }

  toggleModal = (e) => {
    e.preventDefault();
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    post(LOGIN_AUTH_API_ROUTE, {
      email,
      password
    })
      .then((res) => {
        this.props.setJWT(res.data.token);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  render() {
    console.dir(this.state);
    return (
      <div className="container align-middle" style={{ marginTop: '50px' }}>
        <h1 style={{ textAlign: 'center' }} className="display-1">
          TicketX
        </h1>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Remember Me</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: '20px' }}
            onClick={this.handleSubmitForm}
          >
            Sign In
          </button>
          <button
            className="btn btn-success"
            style={{ marginTop: '20px', marginLeft: '15px' }}
            onClick={this.toggleModal}
          >
            Create Account
          </button>
          <Modal
            style={{ paddingBottom: '25px' }}
            size="lg"
            isOpen={this.state.modalOpen}
            toggle={this.toggleModal}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggleModal}>Sign Up</ModalHeader>
            <SignUp style={{ paddingBottom: '25px' }} />
          </Modal>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { setJWT }
)(LoginPage);
