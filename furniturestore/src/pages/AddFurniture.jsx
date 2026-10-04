import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddFurniture(){
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const nav = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("furnitures")) || [];
    const newItem = {id: Date.now(), name, price, image};
    const updated = [...saved, newItem];
    localStorage.setItem("furnitures", JSON.stringify(updated));
    nav("/");
  }

  return(
    <form onSubmit={handleAdd} style={{width:"400px", margin:"40px auto", display:"flex", flexDirection:"column", gap:"15px"}}>
      <h2>Add New Furniture</h2>
      <input type="text" placeholder="Furniture Name" required value={name} onChange={e=>setName(e.target.value)} style={{padding:"10px"}} />
      <input type="text" placeholder="Price" required value={price} onChange={e=>setPrice(e.target.value)} style={{padding:"10px"}} />
      <input type="text" placeholder="Image URL" required value={image} onChange={e=>setImage(e.target.value)} style={{padding:"10px"}} />
      <button type="submit" style={{padding:"10px", background:"green", color:"white", border:"none", cursor:"pointer"}}>Add Furniture</button>
    </form>
  )
}