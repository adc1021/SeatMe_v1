import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reservationActions from "../../store/reservationsReducer";
import { useHistory } from 'react-router-dom'
import NavBar from "../NavBar";

const UpdateReservation = ({ resData }) => {
  const history = useHistory();
  const handleUpdate = () => {
    history.replace({ pathname: `/reservations/${resData.id}/update`, state:{isActive: true}});
  };


  return (
    <>
    <button className="CRUD-button" onClick={handleUpdate}>Update Reservation</button>
    </>
  )
}

export default UpdateReservation;
