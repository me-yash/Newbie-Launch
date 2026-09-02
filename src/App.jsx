import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const SimplePage = ({ title }) => (
  <main className="simple-page">
    <h1>{title}</h1>
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<SimplePage title="Work" />} />
        <Route path="/about" element={<SimplePage title="About" />} />
        <Route path="/contact" element={<SimplePage title="Contact" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
