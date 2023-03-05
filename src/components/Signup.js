import React, { useState } from "react";

function SignUp() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

 
  return (
    <div>
      {!isRegistered ? (
        <form onSubmit={handleRegistrationSubmit}>
          <label>
            Full Name:
            <input type="text" name="full_name" value={user.full_name} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="email" value={user.email} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={user.password} onChange={handleInputChange} />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <label>
            Email:
            <input type="text" name="email" value={user.email} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={user.password} onChange={handleInputChange} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default SignUp;