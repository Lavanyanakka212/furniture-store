import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditFurniture(){
  const { id } = useParams();
  const nav = useNavigate();
  const [form, setForm] = useState({name:"", price:"", category:"", image:""});

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("furnitures")) || [];
    const item = data.find(f => f.id == id);
    if(item) setForm(item);
  },[]);

  const update = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("furnitures")) || [];
    data = data.map(f => f.id == id ? {...form, id: Number(id), price: Number(form.price)} : f);
    localStorage.setItem("furnitures", JSON.stringify(data));
    alert("Updated ra!");
    nav("/");
  }

  return(
    <form onSubmit={update} style={{width:"400px", margin:"40px auto", display:"flex", flexDirection:"column", gap:"12px", border:"1px solid #ccc", padding:"20px", borderRadius:"8px"}}>
      <h2>Edit Furniture</h2>
      <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Name" style={{padding:"10px"}} />
      <input value={form.price} onChange={e=>setForm({...form, price:e.target.value})} placeholder="Price" style={{padding:"10px"}} />
      <input value={form.category} onChange={e=>setForm({...form, category:e.target.value})} placeholder="Category (Sofa/Chair/Table/Bed)" style={{padding:"10px"}} />
      <input value={form.image} onChange={e=>setForm({...form, image:e.target.value})} placeholder="Image URL" style={{padding:"10px"}} />
      <button style={{padding:"10px", background:"black", color:"white", border:"none", cursor:"pointer"}}>Update</button>
    </form>
  )
}