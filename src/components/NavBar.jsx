import './styles/navbar.css';
import { useGlobalContext } from '../hooks/useGlobalContext';
const NavBar = () => {
  const { handleSubmit, search, handleChange } = useGlobalContext();
  return (
    <div className="header">
      <h1>My Anime Info</h1>
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
    </div>
  );
};
export default NavBar;
