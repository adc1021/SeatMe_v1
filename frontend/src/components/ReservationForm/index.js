import { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = () => {
  const [partySize, setPartySize] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")


  return (<div style={{ width: "20rem" }}>
    <div id="sticky-div">
      <article>
        <h2 id="input-field">Make a reservation</h2>
        <div style={{margin: "16px -16px 0"}}>
          <div>
            <label style={{fontSize: "14px", fontWeight: "500", marginLeft: "16px" }}>Party Size</label>
          </div>
          <div style={{background: "#fff", height: "3rem", position: "relative"}}>
            <select id="party-size-select" value={partySize} onChange={ e => setPartySize(e.target.value)} >
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
          <div style={{display: "flex"}}>
            <label id="date-label" style={{width: "50%"}}>Date</label>
            <label id="date-label" style={{width: "50%"}}>Time</label>

          </div>
          <div style={{display: "flex"}}>
            <input type="date" value={date} onChange={e => setDate(e.target.value)}></input>
            <select value={time} onChange={ e => setTime(e.target.value)}>
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
          <div id='time-button-div'>
            <button id='time-button'>
              Find a time
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>)
};

export default ReservationForm;
