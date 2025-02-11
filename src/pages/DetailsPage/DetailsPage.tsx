import css from "./DetailsPage.module.css";
import Header from "../../components/Header/Header";
import UserDetails from "../../components/UserDetails/UserDetails";

function DetailsPage() {
  return (
    <div className={css.container}>
      <Header />
      <UserDetails />
    </div>
  );
}

export default DetailsPage;
