import React, { useEffect, useState } from 'react';
import './GetEmployee.css';
const GetEmployee = () => {
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
        {users.map((user) => (
          <div className="container Users-container">
            <pre key={user.id}>
              {`ID:- ${user.id} 
            Login:- ${user.login}
            Node-ID:- ${user.node_id} 
            Avatar-URL:- ${user.avatar_url}
            Gravatar-ID:- ${user.gravatar_id}
            URL:- ${user.url}
            HTML-URL:- ${user.html_url}
            Followers-URL:- ${user.followers_url}
            Following-URL:- ${user.following_url}
            Gists-URL:- ${user.gists_url}
            Starred-URL:- ${user.starred_url}
            Subscription-URL:- ${user.subscriptions_url}
            Organizations-URL:- ${user.organizations_url}
            Repos-URL:- ${user.repos_url}
            Events-URL:- ${user.events_url}
            Received-Events-URL:- ${user.received_events_url}
            Type:- ${user.type}
            Is-Site-Admin:- ${user.site_admin}
             `}
            </pre>
          </div>
        ))}
      </div>
    </>
  );
};
export default GetEmployee;
