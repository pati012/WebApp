import React from "react";
import { createContext, useState } from "react";
import axios from "axios";

const UsersData = createContext();

function ContextUsersData({ children }) {
  let [users, setUsers] = useState({
    users: null,
  });

  async function getDataUsers(urlBd, form) {
    const dataUser = await axios.post(urlBd, form);
    if (typeof dataUser.data !== "string") {
      setUsers((prevState) => {
        let users = [];

        prevState.users = dataUser.data || { login: "", coins: "" };
        for (let i = 0; i < dataUser.data.length; i++) {
          if (i % 4 === 0) {
            users.push({
              name: dataUser.data[i],
              status: dataUser.data[++i],
              identifier: dataUser.data[++i],
              server: dataUser.data[++i],
            });
          }
        }
        return users;
      });
    }
  }

  return (
    <UsersData.Provider value={[getDataUsers, setUsers, users]}>
      {children}
    </UsersData.Provider>
  );
}

export { ContextUsersData, UsersData };
