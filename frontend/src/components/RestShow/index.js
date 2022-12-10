import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRest } from "../../store/restaurantsReducer";
import NavBar from "../NavBar";
import './RestShow.css'

const RestShow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const restaurant = useSelector(state => (
     state.restaurants[id] ?  state.restaurants[id] : {} ))

     useEffect(() => {
      dispatch(fetchRest(id))
     }, [])

  return (
    <>
      <NavBar />
      {restaurant.name}
      <div>
        <div id="img-container"></div>
      </div>
    </>
  )
}

export default RestShow;
