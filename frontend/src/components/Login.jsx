import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const responseSuccessGoogle = (response) => {
    axios("http://localhost:3000/api/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        tokenId: response.credential,
      },
    })
      .then((res) => {
        const { email_verified, name, email, picture } = res.data;
        // alert(email_verified, name, email, picture);
        alert("Login Successful");
        console.log(email_verified, name, email, picture);
        // navigate("/home");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  const responseErrorGoogle = (response) => {
    console.log(response);
    alert("Error");
  };
  return (
    <div>
      <h2>Login</h2>
      <GoogleOAuthProvider clientId="1042211534366-p85jct9354qm95ob6lmopktbsdpos50o.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={responseSuccessGoogle}
          onError={responseErrorGoogle}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;