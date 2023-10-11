import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preview from "./pages/Preview";
import Settings from "./pages/Settings";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="preview" element={<Preview />} />
            <Route path="settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
