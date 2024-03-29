import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const SignupForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState([]);
  // const [signUp, setSignUp] = useState();

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      sessionActions.signup({ firstName, lastName, email, phoneNumber })
    ).catch(async (res) => {
      let data;
      try {
        data = await res.clone().json(); // clones the response object to store in new var converted to json
      } catch {
        data = await res.text(); //takes res and reads to completion, returned promise resolves with a string
      }
      if (data?.errors) setErrors(data.errors);
      else if (data) setErrors([data]);
      else setErrors([res.statusText]);
    });
  };


  return (
      <>
       <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          required
        />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        <button type="submit">Continue</button>
      </form>
      </>
  );
};

export default SignupForm;
