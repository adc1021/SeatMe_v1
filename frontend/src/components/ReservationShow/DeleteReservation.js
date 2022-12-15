import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reservationActions from "../../store/reservationsReducer";

const DeleteReservation = ({ resData }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(reservationActions.deleteReservation(resData.id))
  // }, [])

  const handleDelete = (e) => {
    dispatch(reservationActions.deleteReservation(resData.id))
  }

  return (
    <>
    <button className="CRUD-button" onClick={handleDelete}>
      Delete Reservation
    </button>
    </>
  )
}

export default DeleteReservation
