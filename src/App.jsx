import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import AiScaner from "./Components/aiScaner/AiScaner";
import Community from "./Components/community/Community";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/AiScaner" element={<AiScaner />} />
          <Route path="/Community" element={<Community />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
