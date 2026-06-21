import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6">

      <h1 className="text-2xl font-bold mb-10">
        BloodBank Admin
      </h1>

      <div className="flex flex-col gap-4">

        <Link
          to="/admin"
          className="hover:bg-slate-800 p-3 rounded-lg"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/requests"
          className="hover:bg-slate-800 p-3 rounded-lg"
        >
          Blood Requests
        </Link>

        <Link
          to="/admin/users"
          className="hover:bg-slate-800 p-3 rounded-lg"
        >
          Users
        </Link>

        <Link
          to="/admin/donors"
          className="hover:bg-slate-800 p-3 rounded-lg"
        >
          Donors
        </Link>

        <Link
          to="/admin/inventory"
          className="hover:bg-slate-800 p-3 rounded-lg"
        >
          Inventory
        </Link>

      </div>
    </div>
  );
}

export default AdminSidebar;