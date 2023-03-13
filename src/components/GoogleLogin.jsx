import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from "gapi-script";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const clientId = "659464609118-acjsr1uei0o6ls77rutc8p6nbf0j4tnm.apps.googleusercontent.com"

function Login() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    toast.error("Login Failed", {
      position: toast.POSITION.BOTTOM_LEFT
    });
  };

  const onSignoutSuccess = () => {
    toast.success("You have been logged out successfully", {
      position: toast.POSITION.BOTTOM_LEFT
    });
    setShowloginButton(true);
    setShowlogoutButton(false);
  };
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "659464609118-acjsr1uei0o6ls77rutc8p6nbf0j4tnm.apps.googleusercontent.com",
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);
  return (
    <div>
      {showloginButton ?
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        /> : null}

      {showlogoutButton ?
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        >
        </GoogleLogout> : null
      }
    </div>
  );
}
export default Login;