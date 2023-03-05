    import React, { useState } from "react";

    function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    

    return (
        <div>
        <h2>Login</h2>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <form onSubmit={handleFormSubmit}>
            <label>
            Email:
            <input type="email" name="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
            Password:
            <input type="password" name="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
        </div>
    );
    }

    export default Login;