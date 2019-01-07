import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return(
    <div>
      Dashboard
      <div>Click the add button on the bottom to create a new survey</div>
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard;
