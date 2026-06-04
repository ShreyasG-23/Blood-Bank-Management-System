import Navbar from "../components/Navbar";

function RequestBlood() {
  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 p-6 shadow rounded">
        <h1 className="text-3xl font-bold mb-6">
          Request Blood
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Hospital Name"
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            placeholder="City"
            className="w-full border p-3 rounded"
          />

          <select className="w-full border p-3 rounded">
            <option>Select Blood Group</option>
            <option>A+</option>
            <option>B+</option>
            <option>AB+</option>
            <option>O+</option>
          </select>

          <input
            type="number"
            placeholder="Units Required"
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded"
          >
            Submit Request
          </button>
        </form>
      </div>
    </>
  );
}

export default RequestBlood;