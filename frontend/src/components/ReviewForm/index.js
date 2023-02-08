import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import OverallStarRating from "./StarRating";
import ServiceStarRating from "./ServiceStarRating";
import AmbienceStarRating from "./AmbienceStarRating";
import FoodStarRating from "./FoodStarRating";
import "./ReviewForm.css";
import { Modal } from '../../context/Modal'
import SigninForm from '../LoginFormModal/SigninForm';
import * as reviewActions from "../../store/reviewsReducer";

const ReviewForm = ({ restaurantId, user }) => {
  const [comment, setComment] = useState("");
  const [overall, setOverall] = useState(1);
  const [food, setFood] = useState(1);
  const [service, setService] = useState(1);
  const [ambience, setAmbience] = useState(1);
  const history = useHistory()
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      reviewActions.createReview({
        restaurantId: restaurantId,
        userId: user.id,
        comment: comment,
        overallRating: overall,
        foodRating: food,
        serviceRating: service,
        ambienceRating: ambience,
        commentorFirstName: user.firstName,
        commentorLastName: user.lastName,
      })
    );
    history.go(0)
  };

  const triggerModal = (e) => {
    Object.values(user).length > 1 ? setShowModal(false) : setShowModal(true)
  }

  return (
    <>
      <div className="review">
        <h3>Dined here recently? Leave a Review!</h3>
      </div>
      <div
        className="review"
        style={{ marginTop: "15px", marginBottom: "60px", padding: "15px" }}
      >
        <form className="review-form" onSubmit={handleSubmit}>
          <textarea
            style={{ resize: "none", height: "200px", width: "575px" }}
            onChange={(e) => setComment(e.target.value)}
            onClick={(e) => triggerModal(e.target.value)}
          ></textarea>
          <OverallStarRating setOverall={setOverall} />
          <FoodStarRating setFood={setFood} />
          <AmbienceStarRating setAmbience={setAmbience} />
          <ServiceStarRating setService={setService} />
          <div style={{display: "flex", justifyContent: "right"}}>
            <section></section>
            <button
              id="submit-button"
              type="submit"
              disabled={!comment || !user}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <button onClick={() => setShowModal(false)} className="exit-button"><i class="fa-solid fa-xmark fa-xl"></i></button>
          <SigninForm />
          
        </Modal>
      )}
    </>
  );
};

export default ReviewForm;
