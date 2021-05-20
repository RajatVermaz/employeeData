import React, { useState } from 'react';
import GetEmployee from '../getApi/GetEmployee';

import Setting from './Setting';

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
          {active === 'login' && <Setting />}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
