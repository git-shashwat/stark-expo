import React from 'react';
import { render } from '@testing-library/react';
import App from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

test('renders learn react link', () => {
  const jsx = (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );

  const { getByText } = render(jsx);
  const linkElement = getByText(/CONTACT/i);
  expect(linkElement).toBeInTheDocument();
});
