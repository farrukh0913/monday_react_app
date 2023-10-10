import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preview from './components/Preview';
import Settings from './components/Settings';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}>
          <Route path="preview" element={<Preview />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;