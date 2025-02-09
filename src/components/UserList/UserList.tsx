import { Link } from "react-router-dom";
import GitHubIcon from "../../assets/images/icons.svg#icon-github.svg";
import css from "./UserList.module.css";
import axios from "axios";

interface userProps {
  username: string;
  id: string;
  badge: string;
  avatar: string;
  gitHubPage: string;
  detailsPage: string;
}

const Users: userProps[] = [
  {
    username: "Mark Guerrero",
    id: "Product Designer",
    badge: "",
    avatar: "",
    gitHubPage: "https://github.com/",
    detailsPage: `/contacts/{id}`,
  },
];

const getUsers = () => async () => {
  try {
    const response = await axios.get(`https://api.github.com/users`);
    return response.data;
  } catch (e) {}
};

function UserList() {
  return (
    <section className={css.section}>
      <ul className={css.userList}>
        {Users.map(
          ({ username, id, badge, avatar, gitHubPage, detailsPage }, index) => (
            <li key={index} className={css.userCard}>
              <div className={css.infoContainer}>
                <img src={avatar} className={css.avatar} />
                <div>
                  <div style={{ gap: "6px" }}>
                    <p className={css.text}>@ {username}</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <p className={css.badge}>{badge}</p>
                      <p className={css.subtext}>ID: #{id}</p>
                    </div>
                  </div>
                  <div className={css.flow}>
                    <a href={gitHubPage} className={css.subtext}>
                      <svg className={css.icon}>
                        <use href={GitHubIcon}></use>
                      </svg>
                      GitHub users
                    </a>
                  </div>
                </div>
              </div>
              <div className={css.btnContainer}>
                <Link to={detailsPage} className={css.link}>
                  Details
                </Link>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default UserList;
