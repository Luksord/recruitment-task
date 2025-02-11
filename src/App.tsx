import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

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
