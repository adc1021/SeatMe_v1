import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './ProfileButton.css'

function ProfileButton({ user }) {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.replace({ pathname: '/', state:{isActive: true}});
  };

  const profileRedirect = (e) => {
    history.push(`/users/${user.id}`)
  }

  const savedRestRedirect = (e) => {
    history.push(`/my/favorites`)
  }

  return (
    <>
      <div>
        <div id="prof-button-div">
        <button id="profile-button" onClick={openMenu}>
          <div id="inner-profile-div">
            <i className="fa-regular fa-user"></i>
          </div>
        </button>
        </div>
      </div>

      {showMenu && (
        <div className="profile-dropdown">
            <span id="name-span">Hello, {user.firstName}!</span>
            <button onClick={profileRedirect} id="profile-show-button">My Profile</button>
            <button onClick={savedRestRedirect} id="profile-show-button">My Saved Restaurants</button>
            <button onClick={logout} id="logout-button">Sign Out</button>

        </div>
      )}
    </>
  );
}

export default ProfileButton;
