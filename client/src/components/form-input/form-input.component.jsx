import React from 'react';

import './form-input.styles.scss';

export default ({ handleChange, label, ...rest }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...rest}></input>
        {
            label && <label
             className={`${
                 rest.value.length ? 'shrink' : ''
                } form-input-label`}>
                {label}    
            </label>
        }
    </div>
);