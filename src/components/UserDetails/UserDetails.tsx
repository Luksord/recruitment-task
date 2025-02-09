import { Link } from "react-router-dom";
import GitHubIcon from "../../assets/images/icons.svg#icon-github.svg";
import css from "./UserList.module.css";

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

function UserDetails() {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Profile</h2>
      <ul className={css.teamList}>
        {Users.map(
          ({ username, id, badge, avatar, gitHubPage, detailsPage }, index) => (
            <li key={index} className={css.userCard}>
              <div className={css.infoContainer}>
                <img src={avatar} className={css.avatar} />
                <div>
                  <div style={{ gap: "6px" }}>
                    <p className={css.text}>@{username}</p>
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
              <div></div>
            </li>
          )
        )}
      </ul>
      <h2 className={css.title}>Repositories</h2>
      <ul></ul>
    </section>
  );
}

export default UserDetails;
