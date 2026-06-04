import Navbar from "../components/Navbar";

function SearchDonors() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Search Blood Donors
        </h1>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <select className="border p-3 rounded">
            <option>Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>O+</option>
          </select>

          <input
            type="text"
            placeholder="City"
            className="border p-3 rounded"
          />

          <button className="bg-red-600 text-white rounded p-3">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchDonors;