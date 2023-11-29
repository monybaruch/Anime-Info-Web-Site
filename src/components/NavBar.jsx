import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navbar.css';
import { useAuthContext } from '../hooks/useAuthContext';
import { useAnimeContext } from '../hooks/useAnimeContext';

const NavBar = () => {
  const { handleSubmit, search, handleChange } = useAnimeContext();
  const { user, logout } = useAuthContext();

  const renderAuthLinks = () => {
    if (user) {
      return (
        <>
          <NavLink to="/">Home</NavLink>
          <button onClick={logout}>Logout</button>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      );
    }
  };

  return (
    <div className="header">
      <div className="logo-header">
        <h1>My Anime Info</h1>
      </div>
      <div className="anime-search">
        <form action="" className="search-form" onSubmit={handleSubmit}>
          <div className="input-control">
            <input type="search" placeholder="Search your favorite anime!" value={search} onChange={handleChange} />
            <button className="search-btn" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="nav-links">{renderAuthLinks()}</div>
    </div>
  );
};

export default NavBar;
