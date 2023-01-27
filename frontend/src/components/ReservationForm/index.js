import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./ReservationForm.css";

import * as reservationActions from "../../store/reservationsReducer";

const ReservationForm = ({ restaurantId }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  // debugger
  const user = useSelector((state) =>
    state.session.user ? state.session.user : {}
  );
  const [partySize, setPartySize] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("2000-02-01T12:00:00");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      reservationActions.createReservation({
        partySize,
        date,
        time,
        restaurantId: restaurantId,
        userId: user.id,
      })
    );
    history.replace({ pathname: `/users/${user.id}`});
  };

  return (
    <div style={{ width: "20rem", zIndex: "2" }}>
        <article className="article-box">
          <h2 className="input-field">Make a reservation</h2>
          <div style={{ margin: "16px -16px 0" }}>
            <div>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginLeft: "16px",
                }}
              >
                Party Size
              </label>
            </div>
            <div
              style={{
                background: "#fff",
                height: "3rem",
                position: "relative",
              }}
            >
              <select
                id="party-size-select"
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
              >
                <option value={1}>1 person</option>
                <option value={2}>2 people</option>
                <option value={3}>3 people</option>
                <option value={4}>4 people</option>
                <option value={5}>5 people</option>
                <option value={6}>6 people</option>
                <option value={7}>7 people</option>
                <option value={8}>8 people</option>
                <option value={9}>9 people</option>
                <option value={10}>10 people</option>
                <option value={11}>11 people</option>
                <option value={12}>12 people</option>
                <option value={13}>13 people</option>
                <option value={14}>14 people</option>
                <option value={15}>15 people</option>
                <option value={16}>16 people</option>
                <option value={17}>17 people</option>
                <option value={18}>18 people</option>
                <option value={19}>19 people</option>
                <option value={20}>20 people</option>
              </select>
            </div>
            <hr></hr>
            <div style={{ display: "flex" }}>
              <label id="date-label" style={{ width: "50%" }}>
                Date
              </label>
              <label id="date-label" style={{ width: "50%" }}>
                Time
              </label>
            </div>
            <div style={{ display: "flex", height: "3rem", alignItems: "center" }}>
              <input
                type="date"
                value={date}
                className="today"
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
              ></input>
              <select className="today" value={time} onChange={(e) => setTime(e.target.value)}>
                <option value="2000-02-01T12:00:00">12:00 PM</option>
                <option value="2000-02-01T13:00:00">1:00 PM</option>
                <option value="2000-02-01T14:00:00">2:00 PM</option>
                <option value="2000-02-01T15:00:00">3:00 PM</option>
                <option value="2000-02-01T16:00:00">4:00 PM</option>
                <option value="2000-02-01T17:00:00">5:00 PM</option>
                <option value="2000-02-01T18:00:00">6:00 PM</option>
                <option value="2000-02-01T19:00:00">7:00 PM</option>
                <option value="2000-02-01T20:00:00">8:00 PM</option>
                <option value="2000-02-01T21:00:00">9:00 PM</option>
                <option value="2000-02-01T22:00:00">10:00 PM</option>
                <option value="2000-02-01T23:00:00">11:00 PM</option>
              </select>
            </div>
            <div id="time-button-div">
              <button id="time-button" onClick={handleSubmit}>
                Find a time
              </button>
            </div>
          </div>
            <span>
              <span className="chart-span">
                <svg>
                  <g>
                    <path d="M15.5,5 C15.2239,5 15,5.223846 15,5.5 L15,6.5
                    C15,6.77615 15.2239,7 15.5,7 L17.5858,7 L14,10.58578
                    L12.70711,9.29291 L12.35355,8.93933 C12.15829,8.74408
                    11.84171,8.74408 11.64645,8.93933 L11.29289,9.29291
                    L5,15.5858 L5,7 L11.5,7 C11.77614,7 12,6.77615 12,6.5
                    L12,5.5 C12,5.22385 11.77614,5 11.5,5 L5,5 C3.89543,5
                    3,5.89542 3,7 L3,17 C3,18.1046 3.89543,19 5,19 L19,19
                    C20.1046,19 21,18.1046 21,17 L21,14.5 C21,14.2238 20.7761,14
                    20.5,14 L19.5,14 C19.2239,14 19,14.2238 19,14.5 L19,17
                    L6.4142,17 L12,11.41422 L13.2929,12.70709 L13.6464,13.06067
                    C13.8417,13.25592 14.1583,13.25592 14.3536,13.06067
                    L14.7071,12.70709 L19,8.41422 L19,10.5 C19,10.77615
                    19.2239,11 19.5,11 L20.5,11 C20.7761,11 21,10.77615
                    21,10.5 L21,6 L21,5.5 C21,5.223846 20.7761,5 20.5,5
                    L20,5 L15.5,5 Z" fill="#2D333F" fillRule="nonzero"></path>
                  </g>
                </svg>
              Booked 1 time today
              </span>
            </span>
        </article>
      </div>
  );
};

export default ReservationForm;
