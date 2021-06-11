import { useEffect, useState } from "react";

import AuthService from "../services/AuthService";

import SideMenu from "../components/SideMenu";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    AuthService.GetUsers()
      .then((data) => setUsers(data.data))
      .catch(() => {});
  };

  return (
    <div className="container">
      <div className="row">
        <div className="w-25 mt-3">
          <SideMenu />
        </div>
        <div className="w-75">
          <section className="container">
            <div className="card mt-3 p-3">
              <h3>Users</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <th scope="row">{user.id}</th>
                      <td>{user.email}</td>
                      <td>{user.nivel_acesso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Users;
