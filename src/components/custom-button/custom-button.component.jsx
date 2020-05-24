import React from 'react';

import './custom-button.styles.scss';

export default ({ children, inverted, ...rest }) => (
    <button
     className={`${inverted ? 'inverted' : ''} custom-button`}
      {...rest}>
        {children}
    </button>
);