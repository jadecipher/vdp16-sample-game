import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {auth} from '../store';

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, han