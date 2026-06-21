import Navbar from "../components/Navbar";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 py-10 px-4">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

            {/* Header */}
            <div className="bg-red-600 h-32"></div>

            {/* Profile Section */}
            <div className="px-8 pb-8">

              <div className="-mt-30 flex flex-col md:flex-row md:items-center md:justify-between">

                <div className="flex items-center gap-6">

                  <div className="w-28 h-28 rounded-full bg-white shadow-md border-4 border-white flex items-center justify-center text-4xl font-bold text-red-600">
                    {user?.name?.charAt(0)}
                  </div>

                  <div className="mt-12 md:mt-0">
                    <h1 className="text-3xl font-bold text-gray-800">
                      {user?.name}
                    </h1>

                    <p className="text-gray-500 mt-1">
                      {user?.email}
                    </p>

                    <span className="inline-block mt-3 px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium capitalize">
                      {user?.role}
                    </span>
                  </div>

                </div>

                <button className="mt-6 md:mt-0 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition">
                  Edit Profile
                </button>

              </div>

              {/* Details */}
              <div className="grid md:grid-cols-2 gap-6 mt-10">

                <div className="bg-gray-50 p-5 rounded-xl border">
                  <p className="text-sm text-gray-500">
                    Phone Number
                  </p>

                  <h3 className="text-lg font-semibold mt-1">
                    {user?.phone || "Not Provided"}
                  </h3>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border">
                  <p className="text-sm text-gray-500">
                    City
                  </p>

                  <h3 className="text-lg font-semibold mt-1">
                    {user?.city || "Not Provided"}
                  </h3>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border">
                  <p className="text-sm text-gray-500">
                    Blood Group
                  </p>

                  <h3 className="text-lg font-semibold mt-1">
                    {user?.blood_group}
                  </h3>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border">
                  <p className="text-sm text-gray-500">
                    Account Type
                  </p>

                  <h3 className="text-lg font-semibold mt-1 capitalize">
                    {user?.role}
                  </h3>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Profile;