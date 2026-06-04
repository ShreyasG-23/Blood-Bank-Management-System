import Navbar from "../components/Navbar";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold text-red-600">
          Welcome {user?.name}
        </h1>

        <p className="mt-4">
          Blood Group: {user?.blood_group}
        </p>

        <p>
          City: {user?.city}
        </p>

        <p>
          Role: {user?.role}
        </p>

      </div>
    </>
  );
}

export default Dashboard;