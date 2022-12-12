import './ReservationForm.css';

const ReservationForm = () => {
  return (<div style={{ width: "20rem" }}>
    <div id="sticky-div">
      <article>
        <h2 id="input-field">Make a reservation</h2>
        <div style={{margin: "16px -16px 0"}}>
          <div>
            <label style={{fontSize: "14px", fontWeight: "500", marginLeft: "16px" }}>Party Size</label>
          </div>
          <div style={{background: "#fff", height: "3rem", position: "relative"}}>
            <select id="party-size-select">
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
      </article>
    </div>
  </div>)
};

export default ReservationForm;
