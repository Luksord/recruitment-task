import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/HomePage/Home";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </main>
  );
}

export default App;
