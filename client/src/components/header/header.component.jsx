import PropTypes from "prop-types";
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from "../../assets/original.svg";

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { connect } from 'react-redux';
import { startSignOut } from '../../redux/actions/auth';
import { selectCurrentUser } from "../../redux/selectors/auth";
import { selectCartHidden } from "../../redux/selectors/cart";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = ({
    uid,
    hidden,
    startSignOut
}) => {

    return (
        <HeaderContainer>
            <LogoContainer className="logo-container" to="/">
                <Logo className="logo" />                
            </LogoContainer>
            <OptionsContainer>
                {uid && <CartIcon />}
                {(hidden && uid) && <CartDropdown />}
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink className="option" to="/contact">
                    CONTACT
                </OptionLink>
                {uid ? (
                    <OptionDiv onClick={() => startSignOut()}>
                        SIGN OUT
                    </OptionDiv>
                    )
                    : (
                        <OptionLink to="/signin">
                            SIGN IN
                        </OptionLink>
                    )
                }
            </OptionsContainer>
        </HeaderContainer>
    );
};

Header.propTypes = {
  uid: PropTypes.any,
  startSignOut: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
    uid: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
    startSignOut: () => dispatch(startSignOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);