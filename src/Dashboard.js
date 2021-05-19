import React, { useState } from 'react';
import GetEmployee from './GetEmployee';
import Login from './Login';

const Dashboard = () => {
  const [active, setActive] = useState('GetEmployee');
  return (
    <>
      <div>
        <nav>
          <button
            onClick={() => {
              setActive('GetEmployee');
            }}
          >
            Employee Data
          </button>
          <button
            onClick={() => {
              setActive('login');
              console.log('Clock');
            }}
          >
            Settings
          </button>
        </nav>
        <div>
          {active === 'GetEmployee' && <GetEmployee />}
          {active === 'login' && <Login />}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
