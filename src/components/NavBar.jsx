import './styles/navbar.css';
const NavBar = () => {
  return (
    <div className="header">
      <h1>My Anime Info</h1>
      <div className="anime-search">
        <input type="search" placeholder="Search your favorite anime!" />
      </div>
    </div>
  );
};
export default NavBar;
