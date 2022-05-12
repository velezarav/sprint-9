import React, { useEffect, useState } from "react";
import "../css/Login.css"
import { Link } from "react-router-dom";

export default () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const handleChangeLogin = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }

  const handleSubmitLogin = e => {

  }

  const signup = <div className="login">
    <h2>LOG IN</h2>
    <label htmlFor="name">name</label>
    <input
      type="text"
      onChange={handleChangeLogin}
      name="name"
      value={user.name}
      required
    />
    <label htmlFor="email">email</label>
    <input
      type="text"
      onChange={handleChangeLogin}
      name="email"
      value={user.email}
      required
    />
    <label htmlFor="username">username</label>
    <input
      type="text"
      onChange={handleChangeLogin}
      name="username"
      value={user.username}
      required
    />
    <label htmlFor="password">password</label>
    <input
      type="text"
      onChange={handleChangeLogin}
      name="password"
      value={user.password}
      required
    />
    <button className="log-button" onClick={handleSubmitLogin}>REGISTER</button>

  </div>


  return (
    <div className="login-container">
      <div className='poem-container'>
        <div className="bar-links">
          <Link to={"/home"}>write a poem</Link>
          <p>  /  </p>
          <Link to={"/poem-wall"}>poem wall</Link>
        </div>
        <div className='poem-login'>
          <p>“A little said<br />
            —and truly said—<br />
            can deeper joy impart<br />
            than hosts of words,<br />
            which reach the head,<br />
            but never<br />
            touch the heart.”</p>
          <p className="poem-login-title">A word</p>
          <p className="poem-login-author">Emily Dickinson</p>
        </div>
      </div>
      {signup}
    </div>
  )
}