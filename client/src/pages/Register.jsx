import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    blood_group: "",
    role: "",
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
      console.log(formData);

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      localStorage.setItem("token", res.data.token);

      alert("Registration Successful!");

      console.log(res.data);

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        blood_group: "",
        role: "",
        password: "",
      });

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center px-4 py-10">

        <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl">

          <h1 className="text-4xl font-bold text-center text-red-600">
            Join BloodBank
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Register as a donor or receiver
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5"
          >

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border rounded-xl pl-12 p-3 focus:ring-2 focus:ring-red-500 outline-none"
                required
              />
            </div>

            {/* Email */}
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

            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute left-4 top-4 text-gray-400" />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border rounded-xl pl-12 p-3 focus:ring-2 focus:ring-red-500 outline-none"
                required
              />
            </div>

            {/* City */}
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full border rounded-xl pl-12 p-3 focus:ring-2 focus:ring-red-500 outline-none"
                required
              />
            </div>

            {/* Blood Group */}
            <select
              name="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              className="border rounded-xl p-3 focus:ring-2 focus:ring-red-500 outline-none"
              required
            >
              <option value="">Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>

            {/* Role */}
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border rounded-xl p-3 focus:ring-2 focus:ring-red-500 outline-none"
              required
            >
              <option value="">Select Role</option>
              <option value="donor">Donor</option>
              <option value="receiver">Receiver</option>
            </select>

            {/* Password */}
            <div className="relative md:col-span-2">
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
              className="md:col-span-2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl font-semibold transition"
            >
              Create Account
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Register;