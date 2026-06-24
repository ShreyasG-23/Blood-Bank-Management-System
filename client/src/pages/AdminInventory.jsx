import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AdminInventory() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/inventory"
      );

      setInventory(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addUnits = async (bloodGroup) => {
    const units = prompt("Enter units to add");

    if (!units) return;

    await axios.put(
      `http://localhost:5000/api/inventory/${encodeURIComponent(
        bloodGroup
      )}/add`,
      { units: Number(units) }
    );

    fetchInventory();
  };

  const removeUnits = async (bloodGroup) => {
    const units = prompt("Enter units to remove");

    if (!units) return;

    await axios.put(
      `http://localhost:5000/api/inventory/${encodeURIComponent(
        bloodGroup
      )}/remove`,
      { units: Number(units) }
    );

    fetchInventory();
  };

  return (
    <>
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-8">
          Blood Inventory
        </h1>

        <table className="w-full bg-white shadow-lg rounded-xl">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-4">Blood Group</th>
              <th className="p-4">Units</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((item) => (
              <tr
                key={item.id}
                className="border-b text-center"
              >
                <td className="p-4 font-bold">
                  {item.blood_group}
                </td>

                <td className="p-4">
                  {item.units}
                </td>

                <td className="p-4 flex justify-center gap-3">
                  <button
                    onClick={() =>
                      addUnits(item.blood_group)
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    + Add
                  </button>

                  <button
                    onClick={() =>
                      removeUnits(item.blood_group)
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    - Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminInventory;