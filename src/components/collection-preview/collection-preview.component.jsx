import React from 'react';

import './collection-preview.styles.scss';
import CollectionItemComponent from '../collection-item/collection-item.component';

export default ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...rest }) => (
                        <CollectionItemComponent key={id} {...rest} />
                    ))
                }
            </div>
        </div>
    );
}