import Navbar from "./components/Navbar";

import Container from "./components/Layout/Container";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import News from "./pages/News";

function App() {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
