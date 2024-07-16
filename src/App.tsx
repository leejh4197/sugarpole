import { Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";
import DicomImage from "./pages/DicomImage";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="w-full">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/dicom" element={<DicomImage />} />
      </Routes>
    </div>
  );
}

export default App;
