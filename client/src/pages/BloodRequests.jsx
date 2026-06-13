import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function BloodRequests() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/blood-requests"
            );

            setRequests(res.data);
        } catch (error) {
            console.error("Error fetching requests:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />

            <div className="bg-gray-50 min-h-screen p-8">
                <h1 className="text-4xl font-bold text-red-600 mb-8">
                    Blood Requests
                </h1>

                {loading ? (
                    <p className="text-lg">Loading...</p>
                ) : requests.length === 0 ? (
                    <p className="text-lg">No Blood Requests Found</p>
                ) : (
                    <div className="grid md:grid-cols-3 gap-6">
                        {requests.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
                            >
                                <h2 className="text-3xl font-bold text-red-600">
                                    🩸 {request.blood_group}
                                </h2>

                                <p className="mt-4 text-gray-700">
                                    🏥 {request.hospital}
                                </p>

                                <p className="text-gray-700">
                                    📍 {request.city}
                                </p>

                                <p className="text-gray-700">
                                    📦 {request.units} Units
                                </p>

                                <p className="mt-3">
                                    Status:
                                    <span
                                        className={`ml-2 font-semibold ${request.status === "approved"
                                                ? "text-green-600"
                                                : request.status === "rejected"
                                                    ? "text-red-600"
                                                    : "text-yellow-600"
                                            }`}
                                    >
                                        {request.status}
                                    </span>
                                </p>

                                <p className="text-sm text-gray-400 mt-3">
                                    {new Date(
                                        request.created_at
                                    ).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default BloodRequests;