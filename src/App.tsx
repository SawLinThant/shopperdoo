import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./containers/Home";
import Register from "./register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
