import PropTypes from "prop-types";
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/original.svg";

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';
import { connect } from 'react-redux';
import { startUserSignOut } from '../../redux/actions/auth';

const Header = ({
    uid,
    hidden,
    userSignOut
}) => {

    const handleSignOut = () => {
        userSignOut();
    }

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />                
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {uid ? (
                    <div style={{ cursor: 'pointer' }} className="option" onClick={handleSignOut}>
                        SIGN OUT
                    </div>
                    )
                    : (
                        <Link className="option" to="/signin">
                            SIGN IN
                        </Link>
                    )
                }
                <CartIcon />
            </div>
            {hidden && <CartDropdown />}
        </div>
    );
};

Header.propTypes = {
  uid: PropTypes.any,
  userSignOut: PropTypes.func
}

const mapStateToProps = ({auth: { uid }, cart: { hidden }}) => ({
    uid,
    hidden
});

const mapDispatchToProps = (dispatch) => ({
    userSignOut: () => dispatch(startUserSignOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);