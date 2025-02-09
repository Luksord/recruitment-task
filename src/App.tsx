import { Route, Routes } from "react-router-dom";
// import { Home } from "./pages/HomePage/Home";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </main>
  );
}

export default App;
