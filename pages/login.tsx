import React from "react";

const login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default login;
