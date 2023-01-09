import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  fetchReservation,
  fetchReservations,
  updateReservation,
} from "../../store/reservationsReducer";
import NavBar from "../NavBar";
import ReservationShow from "../ReservationShow";
import "./UpdateReservationForm.css";

const UpdateReservationForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [partySize, setPartySize] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("2000-02-01T12:00:00");
  const reservation = useSelector((state) => {
    return state.reservations[id] ? state.reservations[id] : {};
  });

  const restaurant = useSelector((state) => {
    return state.restaurants[reservation.restaurantId]
      ? state.restaurants[reservation.restaurantId]
      : {};
  });

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // debugger
    dispatch(
      updateReservation({
        id,
        partySize,
        date,
        time,
        restaurantId: restaurant.id,
        userId: reservation.userId,
      })
    );
    history.replace({ pathname: `/users/${reservation.userId}` });
  };

  return (
    <>
      <NavBar />
      <main>
        <div id="update-container-div">
          <div id="inner-update-container-div">
            <main className="main">
              <h2 id="update-res-header">Your current reservation</h2>
              <div id="res-info-wrapper">
                <img
                  id="rest-card-img-2"
                  style={{ display: "flex", marginRight: "16px" }}
                  src={restaurant.photoUrl}
                  alt=""
                ></img>
                <div>
                  <div id="header-div">
                    <h3 style={{ margin: "none" }}>{restaurant.name}</h3>
                  </div>
                  <span>
                    <svg
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      id="calendar"
                    >
                      <path
                        d="M17,5 L19,5 C20.1045695,5 21,5.8954305 21,7 L21,19
              C21,20.1045695 20.1045695,21 19,21 L5,21 C3.8954305,21 3,20.1045695
              3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L7,5 L7,4 C7,3.44771525
              7.44771525,3 8,3 C8.55228475,3 9,3.44771525 9,4 L9,5 L15,5 L15,4
              C15,3.44771525 15.4477153,3 16,3 C16.5522847,3 17,3.44771525 17,4
              L17,5 Z M19,9 L19,7 L5,7 L5,9 L19,9 Z M19,11 L5,11 L5,19 L19,19 L19,11 Z"
                        fill="#2D333F"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <h3 id="modifier">Modify your reservation</h3>
                <div className="random">
                  <div id="dtp-picker">
                    <div style={{ width: "33%" }}>
                      <input
                        style={{ width: "98%", height: "2.75rem" }}
                        type="date"
                        id="date-picker"
                        value={date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    <div style={{ width: "33%" }}>
                      <select
                        style={{ width: "100%",  height: "3rem" }}
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      >
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
                    <div style={{ width: "33%" }}>
                      <select
                        style={{ width: "100%", height: "100%" }}
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
                  </div>
                  <button id="time-button" onClick={handleSubmit}>
                    Find a new table
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </>
  );
};

export default UpdateReservationForm;
