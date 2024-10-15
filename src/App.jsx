import "./App.css";
import Login from "./pages/WebAdmin/pages/Login";
import Register from "./pages/WebAdmin/pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WebAdmin/pages/WelcomePage";
import ForgetPassword from "./pages/WebAdmin/pages/ForgetPassword";
import ResetPassword from "./pages/WebAdmin/pages/ResetPassword";
import Dashboard from "./pages/WebAdmin/pages/Dashboard";
import Profile from "./pages/WebAdmin/pages/dashboard/Profile";
import Home from "./pages/WebAdmin/pages/dashboard/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Tambahkan rute lain di sini */}
      </Routes>
    </Router>
  );
}
export default App;
