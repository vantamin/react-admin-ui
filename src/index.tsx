import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import {
  ForgotPassword,
  Home,
  Privacy,
  SignIn,
  SignUp,
  Terms,
} from 'pages/onepirate';
import Paperbase from 'pages/paperbase/Paperbase';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/onepirate/forgot-password" component={ForgotPassword} />
        <Route path="/onepirate/home" component={Home} />
        <Route path="/onepirate/privacy" component={Privacy} />
        <Route path="/onepirate/sign-in" component={SignIn} />
        <Route path="/onepirate/sign-up" component={SignUp} />
        <Route path="/onepirate/terms" component={Terms} />
        <Route path="/paperbase" component={Paperbase} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
