import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThirdPart from "./components/ThirdPart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ThirdPart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
