import axios from "axios";
import { useState, useEffect } from "react";

import UserCard from "./UserCard";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  const fetchUserList = () => {
    axios
      .get(`/api/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  console.log(users);

  return (
    <div>
      {users.map((user, index) => {
        return (
          <UserCard
            key={index}
            firstname={user.firstname}
            lastname={user.lastname}
            city={user.city}
            description={user.description}
          />
        );
      })}
    </div>
  );
};

export default UsersList;
