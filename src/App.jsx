import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Regex from './components/Regex.jsx';

function App({ regex }) {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>visual regex tool</h1>
        <Regex />
      </div>
    </Provider>
  );
}

export default App;
