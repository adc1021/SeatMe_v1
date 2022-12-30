import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as savedRestActions from "../../store/savedRestaurantsReducer";
import * as restActions from "../../store/restaurantsReducer";
import { useHistory } from "react-router-dom";

const SavedRestaurant = ({ rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const restaurant = useSelector((state) =>
    state.restaurants[rest.restaurantId]
      ? state.restaurants[rest.restaurantId]
      : {}
  );

  useEffect(() => {
    dispatch(restActions.fetchRest(rest.restaurantId));
  }, [rest]);

  const handleDelete = (e) => {
    dispatch(savedRestActions.deleteSavedRestaurant(rest.id))
    window.location.reload(false);
  }

  return (
    <>

      <div id="display-info-div">
        <img id="rest-card-img" alt="" src={restaurant.photoUrl}></img>
        <div id="rest-name-span">
          <span
            style={{
              width: "100%",
              fontSize: "1rem",
              fontWeight: "450",
              lineHeight: "1.5rem",
            }}
          >
            {restaurant.name}
          </span>
          <span id="reservation-status" style={{ marginTop: "4px" }}>
            <button className="remove-button" onClick={handleDelete}>
              <img
                alt=""
                src="https://www.opentable.com/my/NewContent/img/bookmark-filled.svg"
                style={{ marginRight: "4px" }}
              />
              <div>Remove from saved restaurants</div>
            </button>
          </span>
          <span id="little-man">
            <svg
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="lil-man-svg"
            >
              <path
                d="M14.5734892,12.2877361 C17.0042328,12.8819383
              18.7345621,14.3964534 19.7644773,16.8312813 C19.9208947,17.2010684
              20.0014914,17.5984917 20.0014914,18 C20.0014914,19.6568477
              18.658351,20.9999882 17.0015032,20.9999882 L6.99926923,21
              C6.59776067,21 6.2003371,20.9194033 5.83054967,20.7629859
              C4.3045986,20.1175199 3.59082441,18.3572386 4.23628386,16.8312848
              C5.26612228,14.3966359 6.99627139,12.8821638 9.42673118,12.2878687
              C7.97272602,11.4134027 7,9.82029752 7,8 C7,5.23857625 9.23857625,3
              12,3 C14.7614237,3 17,5.23857625 17,8 C17,9.82020554
              16.0273723,11.4132417 14.5734892,12.2877361 Z M12,5 C10.3431458,5
              9,6.34314575 9,8 C9,9.65685425 10.3431458,11 12,11 C13.6568542,11
              15,9.65685425 15,8 C15,6.34314575 13.6568542,5 12,5 Z M17.9429826,17.6856919
              C17.1294316,15.228564 15.1485327,14 12.000286,14 C8.85208947,14
              6.87106303,15.2285248 6.05720667,17.6855743 L6.05721876,17.6855783
              C5.88356446,18.2098444 6.16779141,18.7756206 6.69205743,18.9492749
              C6.79348438,18.9828708 6.89964014,18.9999945 7.00648636,18.9999945
              L16.99371,18.9999469 C17.5459684,18.9999469 17.9936623,18.552253
              17.9936623,17.9999945 C17.9936623,17.8931928 17.9765523,17.7870807
              17.9429826,17.6856919 Z"
              ></path>
            </svg>
            {/* {resData.partySize} */}
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
            {/* <p style={{marginLeft: "8px"}}>{resData.date.slice(0, 10)}</p>
            <p style={{marginLeft: "8px"}}>{resData.time.slice(11, 16)} PM</p> */}
          </span>
          <span style={{ display: "flex", flexDirection: "row" }}></span>
        </div>
      </div>
    </>
  );
};

export default SavedRestaurant;
