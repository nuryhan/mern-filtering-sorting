import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import BootcampsPage from "./pages/BootcampsPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BootcampsPage />} />
      </Routes>
    </>
  );
};

export default App;
