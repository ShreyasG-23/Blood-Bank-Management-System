import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar";

function AdminDashboard() {
    const [stats, setStats] = useState({});
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchStats();
        fetchRequests();
    }, []);

    const fetchStats = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/admin/stats"
            );

            setStats(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchRequests = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/blood-requests"
            );

            setRequests(
                res.data.filter(
                    (request) => request.status === "pending"
                )
            );
        } catch (error) {
            console.error(error);
        }
    };

    const updateStatus = async (id, status) => {
        try {
            await axios.put(
                `http://localhost:5000/api/blood-requests/${id}`,
                { status }
            );

            fetchRequests();
            fetchStats();

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Navbar />

            <div className="bg-gray-50 min-h-screen p-8">

                <h1 className="text-4xl font-bold text-red-600 mb-8">
                    Admin Dashboard
                </h1>

                <div className="grid md:grid-cols-5 gap-6 mb-10">

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h2 className="text-3xl">🩸</h2>
                        <p>Total Requests</p>
                        <h3 className="text-2xl font-bold">
                            {stats.totalRequests}
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h2 className="text-3xl">⏳</h2>
                        <p>Pending</p>
                        <h3 className="text-2xl font-bold">
                            {stats.pendingRequests}
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h2 className="text-3xl">✅</h2>
                        <p>Approved</p>
                        <h3 className="text-2xl font-bold">
                            {stats.approvedRequests}
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h2 className="text-3xl">❌</h2>
                        <p>Rejected</p>
                        <h3 className="text-2xl font-bold">
                            {stats.rejectedRequests}
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h2 className="text-3xl">👥</h2>
                        <p>Users</p>
                        <h3 className="text-2xl font-bold">
                            {stats.totalUsers}
                        </h3>
                    </div>

                    
                    <div className="flex">
                        <AdminSidebar />

                        <div className="flex-1 p-8">
                            Dashboard Content
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">
                    Pending Blood Requests
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {requests.map((request) => (
                        <div
                            key={request.id}
                            className="bg-white rounded-2xl shadow-lg p-6"
                        >
                            <h3 className="text-3xl text-red-600 font-bold">
                                🩸 {request.blood_group}
                            </h3>

                            <p className="mt-3">
                                🏥 {request.hospital}
                            </p>

                            <p>
                                📍 {request.city}
                            </p>

                            <p>
                                📦 {request.units} Units
                            </p>

                            <div className="flex gap-3 mt-5">

                                <button
                                    onClick={() =>
                                        updateStatus(
                                            request.id,
                                            "approved"
                                        )
                                    }
                                    className="bg-green-600 text-white px-4 py-2 rounded"
                                >
                                    Approve
                                </button>

                                <button
                                    onClick={() =>
                                        updateStatus(
                                            request.id,
                                            "rejected"
                                        )
                                    }
                                    className="bg-red-600 text-white px-4 py-2 rounded"
                                >
                                    Reject
                                </button>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </>
    );
}

export default AdminDashboard;