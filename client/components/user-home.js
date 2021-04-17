import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props;

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <Link to="/admin">