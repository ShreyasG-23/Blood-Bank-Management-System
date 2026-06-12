import Navbar from "../components/Navbar";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">

        <div className="max-w-7xl mx-auto p-8">

          <h1 className="text-4xl font-bold text-red-600 mb-8">
            Welcome, {user?.name} 👋
          </h1>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-4xl">🩸</h2>
              <p className="mt-3 text-gray-500">
                Blood Group
              </p>
              <h3 className="text-2xl font-bold">
                {user?.blood_group}
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-4xl">📍</h2>
              <p className="mt-3 text-gray-500">
                City
              </p>
              <h3 className="text-2xl font-bold">
                {user?.city}
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-4xl">👤</h2>
              <p className="mt-3 text-gray-500">
                Role
              </p>
              <h3 className="text-2xl font-bold capitalize">
                {user?.role}
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-4xl">❤️</h2>
              <p className="mt-3 text-gray-500">
                Status
              </p>
              <h3 className="text-2xl font-bold text-green-600">
                Active
              </h3>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;