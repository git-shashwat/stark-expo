export const convertCollectionResponseToMap = collections => {
    const transformedCollection = collections.map(doc => {
        const { title, items } = doc;
        return ({
            routeName: encodeURI(title.toLowerCase()),
            id: doc._id,
            title,
            items
        })
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}