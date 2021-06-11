import { NavLink } from "react-router-dom";
import { isAdmin, logOut } from "../services/auth";
import { useHistory } from "react-router-dom";

const SideMenu = () => {
  let history = useHistory();
  const handleLogout = () => {
    logOut();
    history.push("/login");
  };

  return (
    <div className="card">
      <NavLink
        exact={true}
        to="/"
        activeClassName="active"
        className="dropdown-item"
      >
        Home
      </NavLink>
      {isAdmin() && (
        <NavLink to="/users" activeClassName="active" className="dropdown-item">
          Users
        </NavLink>
      )}
      <br />
      <button type="button" class="btn btn-light" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
};
export default SideMenu;
