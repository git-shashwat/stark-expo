import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections-preview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectShopCollections } from '../../redux/selectors/shop';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...rest }) => <CollectionPreview key={id} {...rest} />)}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);