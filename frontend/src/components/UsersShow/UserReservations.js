import ReservationShow from "../ReservationShow";
import UsersPoints from "./UsersPoints";

const UserReservations = ({ user, reservations }) => {
  const resArr = Object.values(reservations);

  const filteredArr = resArr.filter( (res) => {
    debugger
    return res.userId === user.id
  })
  return (
    <>
    <div className="points-reservations">
    <UsersPoints />
    <div id="upcoming-reservations" style={{ padding: "16px" }}>
      <h2 style={{ margin: "0" }}>Upcoming Reservations</h2>
      {filteredArr.map((res) => {
        return <ReservationShow resData={res} />;
      })}
    </div>
  </div>
  </>
  )
}

export default UserReservations;
