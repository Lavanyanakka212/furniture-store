import { Link } from "react-router-dom";

function FurnitureCard({ furniture, onDelete }) {
  return (
    <div className="card">
      <img src={furniture.image} alt={furniture.name} />
      <h3>{furniture.name}</h3>
      <p>{furniture.category}</p>
      <p>₹ {furniture.price}</p>
      <p>⭐ {furniture.rating}</p>

      <div className="card-actions">
        <Link className="view-btn" to={`/furnitures/${furniture.id}`}>View</Link>
        <Link className="edit-btn" to={`/edit-furniture/${furniture.id}`}>Edit</Link>
        <button className="delete-btn" onClick={() => onDelete(furniture.id)}>Delete</button>
      </div>
    </div>
  );
}
export default FurnitureCard;