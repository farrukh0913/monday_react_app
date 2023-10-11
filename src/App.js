import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preview from "./pages/Preview";
import Settings from "./pages/Settings";
import "./App.css";
import Header from "./components/Header";
import DocGen from "./components/Docgen";
import { AppContextProvider } from './AppContext';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="preview" element={<Preview />} />
                <Route path="*" element={<Preview />} />
                <Route path="settings" element={<Settings />} />
            </Routes>
            <DocGen />
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
