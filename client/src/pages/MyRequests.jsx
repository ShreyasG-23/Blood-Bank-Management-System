import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function MyRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    fetchMyRequests();
  }, []);

  const fetchMyRequests = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/blood-requests/user/${user.id}`
      );

      setRequests(res.data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 p-8">

        <h1 className="text-4xl font-bold text-red-600 mb-8">
          My Blood Requests
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : requests.length === 0 ? (
          <div className="bg-white rounded-xl p-6 shadow">
            No requests found.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">

            {requests.map((request) => (
              <div
                key={request.id}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h2 className="text-3xl font-bold text-red-600">
                  {request.blood_group}
                </h2>

                <p className="mt-3">
                  Hospital: {request.hospital}
                </p>

                <p>
                  City: {request.city}
                </p>

                <p>
                  Units: {request.units}
                </p>

                <div className="mt-4">

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      request.status === "approved"
                        ? "bg-green-600"
                        : request.status === "rejected"
                        ? "bg-red-600"
                        : "bg-yellow-500"
                    }`}
                  >
                    {request.status}
                  </span>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </>
  );
}

export default MyRequests;