import React from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import { APP_NAME } from '../../util/config';
import {
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  CHECKOUT_PAGE_ROUTE,
  SELL_PAGE
} from '../../util/routes';
import { restoreJWT } from '../actions/index';
// @ TODO: These CSS properties aren't given priority. Find out why

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  componentDidMount = () => {
    console.log('In NavMenu componentDidMount()');
    this.props.restoreJWT();
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar color="dark" dark expand style={{ marginBottom: '30px' }}>
        <NavbarToggler right="true" onClick={this.toggle} />
        <NavbarBrand tag={Link} to={HOME_PAGE_ROUTE}>
          {APP_NAME}
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink exact tag={RRNavLink} to={HOME_PAGE_ROUTE}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact tag={RRNavLink} to={LOGIN_PAGE_ROUTE}>
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact tag={RRNavLink} to={CHECKOUT_PAGE_ROUTE}>
                Checkout
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact tag={RRNavLink} to={SELL_PAGE}>
                Sell Tickets
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default connect(
  null,
  { restoreJWT }
)(NavMenu);
