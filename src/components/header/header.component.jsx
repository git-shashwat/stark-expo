import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/original.svg";

import './header.styles.scss';
import { connect } from 'react-redux';
import { startUserSignOut } from '../../redux/actions/auth';

const Header = ({
    uid,
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
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    uid: state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
    userSignOut: () => dispatch(startUserSignOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);