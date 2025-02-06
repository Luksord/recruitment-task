import GitHubIcon from "../../assets/images/icons.svg#icon-github.svg";
import css from "./Header.module.css";

function Header() {
  return (
    <header className={css.header}>
      <a href="" className={css.return}>
        Back
      </a>
      <div className={css.wrapper}>
        <svg className={css.icon}>
          <use href={GitHubIcon}></use>
        </svg>
        <h1 className={css.title}>GitHub users</h1>
      </div>
    </header>
  );
}

export default Header;
