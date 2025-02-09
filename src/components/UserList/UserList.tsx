import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "../../assets/icons.svg#icon-github.svg";
import css from "./UserList.module.css";
import axios from "axios";

// interface userProps {
//   username: string;
//   id: string;
//   badge?: string;
//   avatar: string;
//   gitHubPage: string;
//   detailsPage: string;
// }

interface userProps {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

function UserList() {
  const [users, setUsers] = useState<userProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users`);
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Błąd API:", error);
        setError("Błąd podczas pobierania użytkowników.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Ładowanie...</p>;
  if (error) return <p className={css.error}>{error}</p>;

  return (
    <section className={css.section}>
      <ul className={css.usersList}>
        {users.map(({ login, id, avatar_url, html_url }, index) => (
          <li key={index} className={css.userCard}>
            <div className={css.infoContainer}>
              <img src={avatar_url} className={css.avatar} />
              <div>
                <div className={css.gapControl}>
                  <p className={css.text}>@{login}</p>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {/* <p className={css.badge}>{badge}</p> */}
                    <p className={css.subtext}>ID: #{id}</p>
                  </div>
                </div>
                <div className={css.flow}>
                  <a href={html_url} className={css.subtext}>
                    <svg className={css.icon}>
                      <use href={GitHubIcon}></use>
                    </svg>
                    GitHub users
                  </a>
                </div>
              </div>
            </div>
            <div className={css.btnContainer}>
              <Link to={`/users/${login}`} className={css.link}>
                Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UserList;
