import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../redux/login";
import "../styles/login.css"

const Login = () => {
  const [email, setEmail]:any = useState("");
  const [password, setPassword]:any = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (event: any) => {
    const data:any = { email: email, password: password }
    event.preventDefault();
    if (email === "admin@gmail.com" && password === "123456") {
      dispatch(startLogin(data))
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e: any) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;