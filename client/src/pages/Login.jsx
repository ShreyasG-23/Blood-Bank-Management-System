import Navbar from "../components/Navbar";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center px-4">

        <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-red-600">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Login to your account
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border rounded-xl pl-12 p-3 focus:ring-2 focus:ring-red-500 outline-none"
                required
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-gray-400" />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border rounded-xl pl-12 p-3 focus:ring-2 focus:ring-red-500 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl font-semibold transition"
            >
              Login
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Login;