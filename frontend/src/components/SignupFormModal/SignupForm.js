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
        data = await res.clone().json();
      } catch {
        data = await res.text();
      }
      debugger
      if (data?.errors) setErrors(data.errors);
      else if (data) setErrors([data]);
      else setErrors([res.statusText]);
    });
  };


  return (
    <>
      <h2>Get Started</h2>
      <p>Enter some information about yourself to get started.</p>
      <ul style={{display: "flex", justifyContent: "center"}}>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="modal-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          required
        />
        <input
          className="form-input"
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          required
        />

        <input
          className="form-input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="phone-info">
          <select
            id="country-select"
            data-test="phone-input-country-input"
            autoComplete="country"
            title="Choose Country Code"
            aria-label="Choose Country Code"
          >
            <option>🇨🇦</option>
            <option>🇩🇪</option>
            <option>🇮🇹</option>
            <option>🏴󠁧󠁢󠁳󠁣󠁴󠁿</option>
            <option>🇺🇸</option>
          </select>
          <input
            className="form-input"
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button className="cont-button" type="submit">
          Continue
        </button>
      </form>
    </>
  );
};

export default SignupForm;
