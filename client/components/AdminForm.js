import React from 'react';
import {Link} from 'react-router-dom';

const AdminForm = () => {
  return (
    <div className="body-container">
      <Link to="/addProjects">Add Projects</Link>
    </div>
  );
};

export default AdminForm;
