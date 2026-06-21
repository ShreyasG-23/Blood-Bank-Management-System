import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchDonors from "./pages/SearchDonors";
import RequestBlood from "./pages/RequestBlood";
import Dashboard from "./pages/Dashboard";
import BloodRequests from "./pages/BloodRequests";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import Profile from "./pages/Profile";
import MyRequests from "./pages/MyRequests";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donors" element={<SearchDonors />} />
        <Route path="/request-blood" element={<RequestBlood />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/blood-requests" element={<BloodRequests />} />
        <Route path="/admin" element={<AdminRoute> <AdminDashboard /> </AdminRoute>} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/my-requests" element={<MyRequests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;