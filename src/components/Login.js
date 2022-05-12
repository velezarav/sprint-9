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
 
  const login = <div className="login">
    <h2>LOG IN</h2>
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
    <button className="log-button" onClick={handleSubmitLogin}>ENTER</button>
    <Link to={"/register"}>register here</Link>
  </div>


  return (
    <div className="login-container">
        <div className="bar-links">
          <Link to={"/home"}>write a poem</Link>
          <p>  /  </p>
          <Link to={"/poem-wall"}>poem wall</Link>
        </div>
        <div className='poem-login'>
          <p>“A word is dead<br />
            when it is said,<br />
            some say.<br />
            I say it just<br />
            begins to live<br />
            that day.”</p>
          <p className="poem-login-title">A word</p>
          <p className="poem-login-author">Emily Dickinson</p>
        </div>
        {login}
    </div>
  )
}