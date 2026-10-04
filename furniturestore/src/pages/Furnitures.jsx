import { useEffect, useState } from "react";
import api from "../services/api";
import FurnitureCard from "../components/FurnitureCard";
import { Link } from "react-router-dom";

function Furnitures() {
  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    getFurnitures();
  }, []);

  async function getFurnitures() {
    const res = await api.get("/furnitures");
    setFurnitures(res.data);
  }

  // STEP 2 - DELETE LOGIC - PASTE HERE
  async function deleteFurniture(id) {
    await api.delete(`/furnitures/${id}`);
    setFurnitures(furnitures.filter((f) => f.id!== id));
  }

  return (
    <>
      <Link className="add-btn" to="/add-furniture">Add Furniture</Link>
      <h1>Popular Furnitures</h1>
      <div className="destinations">
        {furnitures.map((f) => (
          <FurnitureCard key={f.id} furniture={f} onDelete={deleteFurniture} />
        ))}
      </div>
    </>
  );
}
export default Furnitures;