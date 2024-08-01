// task_0/dashboard/src/App/App.js
import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => (
  <>
    <Notifications />
    <div className="App">
      <Header />
      <div className="App-body">
        <Login />
      </div>
      <Footer />
    </div>
  </>
);

export default App;

