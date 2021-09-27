import React, {Component} from 'react';
import {connect} from 'react-redux';
import {me} from './store';
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Home,
  LeftNav,
  About,
  Projects,
  Login,
  Signup,
  UserHome,
  AdminForm
} from './components';

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const {isLoggedIn} = this.props;

    return (
      <div id="routes-div">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {isLoggedIn && (
            <Switch>
              <Route exact path="/user-home" component={UserHome} />
              <Route
                exact
                path="/home"
                render={() => <Redirect to="/user-home" />}
              />
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/admin" compo