import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
    padding: 10px 15px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    height: 70px;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    padding: 25px;
    width: 70px;
`;

export const OptionsContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    width: 50%;
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles},
    cursor: 'pointer'
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;