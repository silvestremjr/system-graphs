import { users } from "./http";

const GetUsers = () => {
  return fetch(users.baseURL, { ...users.headers }).then(
    (response) => response.json()
  );
};

const UsersService = {
  GetUsers
};

export default UsersService;
