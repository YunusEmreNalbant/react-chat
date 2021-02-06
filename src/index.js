import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "./firebase"
import {Provider} from 'react-redux'
import {
    ReactReduxFirebaseProvider,
    firebaseReducer
} from 'react-redux-firebase'
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './index.css';
import App from './App';
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import store from "./components/store/store";

const rrfConfig = {
    userProfile: 'users'
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
};
const Root = () => (
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
    </Switch>
);


ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <Router>
                <Root/>
            </Router>
        </ReactReduxFirebaseProvider>
    </Provider>
    , document.getElementById('root'));
