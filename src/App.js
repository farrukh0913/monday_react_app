import './App.css';
import DocumentFrame from './components/DocumentFrame';
import Settings from './components/settings';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<DocumentFrame />} />
          <Route path="/preview" element={<DocumentFrame />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
