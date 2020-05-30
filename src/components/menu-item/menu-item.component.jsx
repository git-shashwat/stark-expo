import PropTypes from "prop-types";
import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push('/shop')}>
            <div
             className="background-image"
             style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

MenuItem.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  imageUrl: PropTypes.any,
  linkUrl: PropTypes.any,
  match: PropTypes.shape({
    url: PropTypes.any
  }),
  size: PropTypes.any,
  title: PropTypes.string
}

export default withRouter(MenuItem);