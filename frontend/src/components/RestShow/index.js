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
      <div>
        <div id="img-container">
          <img id="rest-img"></img>
          <button id="save-button">
            <div id="save-button-div">
              <img alt="" id="save-svg" src="https://cdn.otstatic.com/cfe/11/images/ic_bookmark-f6a8ce.svg"></img>
              <div id="text-div">Save this restaurant</div>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default RestShow;
