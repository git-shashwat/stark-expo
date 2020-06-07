import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';

import { convertCollectionResponseToMap } from '../../utils/collection';
import { updateCollections } from '../../redux/actions/shop';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import withSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios({
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            url: 'http://localhost:3001/collections',
        })
        .then(({ data }) => {
            const collectionsMap = convertCollectionResponseToMap(data);
            updateCollections(collectionsMap);
            setLoading(false);
        })
        .catch(e => console.log(e));
    }, [updateCollections]);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route 
                path={`${match.path}/:collectionId`} 
                render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
             />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(undefined, mapDispatchToProps)(ShopPage);