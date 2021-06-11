import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import AuthService from "../services/AuthService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  let history = useHistory();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    AuthService.GetUsers()
      .then((data) => setUsers(data.data))
      .catch(() => {});
  };

  const onSubmit = async (event) => {
    if (email !== "" && password !== "") {
      if (
        users.some((item) => item.email === email && item.senha === password)
      ) {
        setError(false);
        registerLogin(email);
      } else {
        setError(true);
      }
    }

    event.preventDefault();
  };

  const registerLogin = (email) => {
    const loggedUser = users.find((user) => user.email === email);
    localStorage.setItem("loggedUser", loggedUser.email);
    localStorage.setItem(
      "isAdmin",
      loggedUser.nivel_acesso === "administrador"
    );

    history.push("/");
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-4 card p-3 mt-3">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Login</label>
              <input
                type="email"
                className="form-control"
                onChange={(event) => handleEmail(event.target.value)}
                value={email}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(event) => handlePassword(event.target.value)}
                value={password}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
      {error && (
        <div className="row justify-content-center p-3">
          <div className="alert alert-danger" role="alert">
            User not found. Please try again.
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
