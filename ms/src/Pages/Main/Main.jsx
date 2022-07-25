import React, { useState } from "react";
import MInput from "../../components/MInput/MInput.jsx";
import styles from "./Main.module.css";
import { GetByShortName } from "../../API/UserService.ts";
import UserComponent from "../../components/UserComponent/UserComponent.jsx";

export default function Main() {
  const [usersToShow, setUsers] = useState([]);

  function submit(event) {
    event.preventDefault();
  }

  async function onSearch(event) {
    let search = event.target.value;

    console.log(search);

    if (search == "") {
      return;
    }

    const users = await GetByShortName(search);

    setUsers(users);
    console.log(usersToShow);
  }

  return (
    <div className={styles.main_container}>
      <form onSubmit={submit}>
        <MInput
          placeholder="Поиск по короткому имени..."
          onChange={onSearch}
          style={{
            width: "-webkit-fill-available",
            margin: "0 35%",
          }}
        />
      </form>

      <div className={styles.users_list}>
        {usersToShow.map((user) => {
          return (
            <UserComponent
              name={user.name}
              shortName={user.shortname}
              key={user.id}
            />
          );
        })}
      </div>
    </div>
  );
}
