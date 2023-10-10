import './App.css';
import DocumentFrame from './components/DocumentFrame';
import Settings from './components/settings';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}>
          <Route path="preview" element={<DocumentFrame />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;