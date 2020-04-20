import React from 'react';

import './custom-button.styles.scss';

export default ({ children, ...rest }) => (
    <button className="custom-button" {...rest}>
        {children}
    </button>
);