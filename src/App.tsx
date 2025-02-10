import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
// import UserList from "./components/UserList/UserList";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:login" element={<DetailsPage />} />
      </Routes>
    </main>
  );
}

export default App;
