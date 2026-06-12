import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

function RequestBlood() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    hospital: "",
    city: "",
    blood_group: "",
    units: "",
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
      const requestData = {
        user_id: user.id,
        hospital: formData.hospital,
        city: formData.city,
        blood_group: formData.blood_group,
        units: Number(formData.units),
      };

      const res = await axios.post(
        "http://localhost:5000/api/blood-requests",
        requestData
      );

      console.log(res.data);

      alert("Blood Request Created Successfully");

      setFormData({
        hospital: "",
        city: "",
        blood_group: "",
        units: "",
      });

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to Create Request"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 p-6 shadow rounded">
        <h1 className="text-3xl font-bold mb-6">
          Request Blood
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            placeholder="Hospital Name"
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full border p-3 rounded"
            required
          />

          <select
            name="blood_group"
            value={formData.blood_group}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          >
            <option value="">
              Select Blood Group
            </option>

            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>

          <input
            type="number"
            name="units"
            value={formData.units}
            onChange={handleChange}
            placeholder="Units Required"
            className="w-full border p-3 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700"
          >
            Submit Request
          </button>

        </form>
      </div>
    </>
  );
}

export default RequestBlood;