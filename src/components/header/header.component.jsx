import PropTypes from "prop-types";
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from "../../assets/original.svg";

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { connect } from 'react-redux';
import { startUserSignOut } from '../../redux/actions/auth';
import { selectCurrentUser } from "../../redux/selectors/auth";
import { selectCartHidden } from "../../redux/selectors/cart";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = ({
    uid,
    hidden,
    userSignOut
}) => {

    const handleSignOut = () => {
        userSignOut();
    }

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
                    <OptionDiv onClick={handleSignOut}>
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
  userSignOut: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
    uid: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
    userSignOut: () => dispatch(startUserSignOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);