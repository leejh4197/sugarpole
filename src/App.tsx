import { Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";
import Home from "./pages/Home";
import NavigationBar from "./components/common/NavigationBar";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
