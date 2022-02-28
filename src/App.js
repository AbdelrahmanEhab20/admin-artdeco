import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from './pages/Home/home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path={"/"} exact element={<Home />}></Route>
        </Routes>
      </div >
    </Router >
  );
}

export default App;