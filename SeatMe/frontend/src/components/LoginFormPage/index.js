import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "../LogoutButton";
import { Redirect } from "react-router-dom";

const LoginFormPage = () => {
  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputType, setInputType] = useState(true);
  const [innerLabel, setInnerLabel] = useState('Use phone number instead');
  const [errors, setErrors] = useState([]);


  // if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, phoneNumber })).catch(
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
    setInputType(!inputType);
  };



  return (
    <>
       { inputType ? (
        <>
       <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
        <form onSubmit={handleSubmit}>
          <label>
            Phone Number
            <input
              type="text"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
          <button type="submit">Continue</button>
        </form>
        <button onClick={handleClick} value={inputType}>Use email instead</button>
        <LogoutButton />
        </>
        ) : (
          <>
       <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Continue</button>
        </form>
        <button onClick={handleClick} value={inputType}>Use phone instead</button>
        <LogoutButton />
        </>
        )}
    </>
  );
};

export default LoginFormPage;
