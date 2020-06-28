import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import MilkContainer from './components/MilkContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MilkContainer />
      </div>
    </Provider>
  );
}

export default App;
