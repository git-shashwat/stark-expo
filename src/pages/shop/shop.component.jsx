import React, { useState } from 'react';

import { SHOP_DATA } from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

export default () => {
    const [collections] = useState(SHOP_DATA);

    return (
        <div className="shop-page">
            {
                collections.map(({ id, ...rest }) => <CollectionPreview key={id} {...rest} />)
            }
        </div>
    );
}