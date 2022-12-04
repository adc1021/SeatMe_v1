import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginFormPage = () => {
  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, phone_number })).catch(
      async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };

  const handleClick = (e) => {
    // person will click button when wanting to enter email instead of phone number to sign in
    // or vice versa
  };

  let inputType = "Use email instead";

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number
          <input
            type="text"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <button onClick={handleClick}>{inputType}</button>
      </form>
    </>
  );
};

export default LoginFormPage;
