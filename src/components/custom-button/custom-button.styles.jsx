import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    border: none;
    color: white;
    
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
    }
`;

const getButtonStyles = props => {
    if (props.inverted) {
        return invertedButtonStyles;
    }
    return buttonStyles;
}

export const CustomButtonContainer = styled.button`
    cursor: pointer;
    display: flex;
    font-size: 15px;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    height: 50px;
    justify-content: center;
    letter-spacing: 0.5px;
    line-height: 50px;
    min-width: 165px;
    padding: 0 35px 0 35px;
    text-transform: uppercase;
    width: auto;
    ${getButtonStyles}
`;