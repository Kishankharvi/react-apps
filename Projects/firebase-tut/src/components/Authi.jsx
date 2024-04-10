import { useState } from "react";
import { auth, googleProvider } from "../confi/firebase";
import google from "../assets/google.svg";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const Authi = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(auth?.currentUser?.email);
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="a1001">
      <div className="loginContainer">
        <h2>Login</h2>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Email...."
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            placeholder="Password.."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-primary me-md-2"
            onClick={signIn}
            type="button"
          >
            Sign In
          </button>
          <button className="btn btn-primary" onClick={logOut} type="button">
            Logout
          </button>
        </div>
        <button className="google" onClick={signInGoogle}>
          <img src={google} />
        </button>
      </div>
    </div>
  );
};
