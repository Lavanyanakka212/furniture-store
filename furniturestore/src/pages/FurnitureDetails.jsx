import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function FurnitureDetails() {
 const { id } = useParams();
 const [furniture, setFurniture] = useState(null);
 useEffect(() => { getFurniture(); }, []);
 async function getFurniture() {
   const res = await api.get(`/furnitures/${id}`);
   setFurniture(res.data);
 }
 if (!furniture) return <h2>Loading...</h2>;
 return (
   <div className="details">
     <img src={furniture.image} alt={furniture.name} />
     <h1>{furniture.name}</h1>
     <p>{furniture.description}</p>
     <h3>Category</h3><p>{furniture.category}</p>
     <h3>Material</h3><p>{furniture.material}</p>
     <h3>Color</h3><p>{furniture.color}</p>
     <h3>Dimensions</h3><p>{furniture.dimensions}</p>
     <h3>Price</h3><p>₹ {furniture.price}</p>
     <h3>Rating</h3><p>{furniture.rating}</p>
     <h3>Warranty</h3><p>{furniture.warranty}</p>
     <h3>Features</h3>
     <ul>{furniture.features.map((f,i)=><li key={i}>{f}</li>)}</ul>
   </div>
 );
}
export default FurnitureDetails;