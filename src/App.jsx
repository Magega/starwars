import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CharacterPage from "./pages/CharacterPage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character/:id" element={<CharacterPage />} />
    </Routes>
  );
};

export default App;
