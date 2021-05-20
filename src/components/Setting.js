import React, { useEffect, useState } from 'react';
import { AddUser } from './AddUser';

const Setting = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = 'https://api.github.com/users';
    fetch(url)
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);
  return (
    <>
      <div className="container-fluid">
        <AddUser />

        {users.map((user) => (
          <div className="container Users-container">
            <pre key={user.id}>
              {`
                Login:- ${user.login}
               
                Avatar-URL:- ${user.avatar_url}`}
            </pre>
          </div>
        ))}
      </div>
    </>
  );
};
export default Setting;
