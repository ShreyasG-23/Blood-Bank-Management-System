import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

function SearchDonors() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!bloodGroup || !city) {
      alert("Please select blood group and city");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.get("http://localhost:5000/api/users/search",
  {
    params: {
      blood_group: bloodGroup,
      city: city,
    },
  }
);

      setDonors(res.data);

    } catch (error) {
      console.error(error);
      alert("Failed to search donors");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">

        <div className="max-w-6xl mx-auto p-6">

          <h1 className="text-4xl font-bold text-red-600 mb-8">
            Search Blood Donors
          </h1>

          <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">

            <div className="grid md:grid-cols-3 gap-4">

              <select
                value={bloodGroup}
                onChange={(e) =>
                  setBloodGroup(e.target.value)
                }
                className="border p-3 rounded-lg"
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
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e) =>
                  setCity(e.target.value)
                }
                className="border p-3 rounded-lg"
              />

              <button
                onClick={handleSearch}
                className="bg-red-600 hover:bg-red-700 text-white rounded-lg p-3 font-semibold"
              >
                Search
              </button>

            </div>

          </div>

          {loading && (
            <p className="text-lg">
              Searching donors...
            </p>
          )}

          {!loading && donors.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-4">
                Available Donors
              </h2>

              <div className="grid md:grid-cols-3 gap-6">

                {donors.map((donor) => (
                  <div
                    key={donor.id}
                    className="bg-white rounded-2xl shadow-lg p-6"
                  >
                    <h3 className="text-2xl font-bold text-red-600">
                      🩸 {donor.blood_group}
                    </h3>

                    <p className="mt-3">
                      👤 {donor.name}
                    </p>

                    <p>
                      📍 {donor.city}
                    </p>

                    <p>
                      📧 {donor.email}
                    </p>

                    <p>
                      📞 {donor.phone}
                    </p>
                  </div>
                ))}

              </div>
            </>
          )}

          {!loading &&
            donors.length === 0 &&
            bloodGroup &&
            city && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-lg text-gray-600">
                  No donors found.
                </p>
              </div>
            )}

        </div>

      </div>
    </>
  );
}

export default SearchDonors;