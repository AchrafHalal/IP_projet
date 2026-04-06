import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';

import Home from "./Pages/Home.jsx";
import Privacy from "./Pages/Privacy.jsx";
import Terms from "./Pages/Terms.jsx";
import Refund from "./Pages/Refund.jsx";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
    <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;