import React from 'react';
import history from './history';
const Login = () => {
  return (
    <>
      <div className="SignUp-container">
        <div className="SignUp-Form-container">
          <form>
            <h2 className="signin-h2">Sign in</h2>

            <div>
              <label>User Name: </label>
              <br />
              <input value="mojombo" autoComplete="off" />
            </div>
            <div className="input-fields signin-input">
              <label>Password: </label>
              <br />
              <input value="1234" autoComplete="off" />
            </div>
            <button onClick={() => history.push('/Dashboard')} type="submit">
              Log in
            </button>

            <div className="already"></div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
