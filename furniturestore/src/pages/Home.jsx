import { useState, useEffect } from 'react';

// STAR RATING COMPONENT - COLORFUL
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
  return (
    <div style={{color: '#FFC107', fontSize: '18px', margin: '6px 0'}}>
      {stars} <span style={{color: '#333', fontSize: '14px', marginLeft: '5px'}}>({rating})</span>
    </div>
  );
};

// PRODUCT CARD - VIEW + RATING + EDIT + DELETE
function ProductCard({ item, onDelete, onEdit }) {
  const [showView, setShowView] = useState(false);

  return (
    <>
      <div className="card" style={{
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        background: 'white',
        transition: 'transform 0.2s'
      }}>
        <img src={item.image} alt={item.name} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
        <div style={{padding: '15px'}}>
          <h3 style={{margin: '0 0 5px 0'}}>{item.name}</h3>

          <StarRating rating={item.rating || 4.5} />

          <p style={{fontWeight: 'bold', fontSize: '18px', color: '#4CAF50', margin: '5px 0'}}>₹ {item.price}</p>
          <p style={{fontSize: '12px', background: '#FFC107', display: 'inline-block', padding: '3px 10px', borderRadius: '10px', fontWeight: 'bold'}}>{item.category}</p>

          <div style={{display: 'flex', gap: '8px', marginTop: '12px'}}>
            <button onClick={()=>setShowView(true)} style={{flex:1, background: '#2196F3', color: 'white', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'}}>
              👁️ View
            </button>
            <button onClick={()=>onEdit(item)} style={{flex:1, background: '#FF9800', color: 'white', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer'}}>Edit</button>
            <button onClick={()=>onDelete(item.id)} style={{flex:1, background: '#f44336', color: 'white', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer'}}>Delete</button>
          </div>
        </div>
      </div>

      {/* VIEW MODAL POPUP */}
      {showView && (
        <div style={{position: 'fixed', top:0, left:0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000}} onClick={()=>setShowView(false)}>
          <div style={{background: 'white', padding: '20px', borderRadius: '15px', width: '90%', maxWidth: '400px'}} onClick={e=>e.stopPropagation()}>
            <img src={item.image} style={{width: '100%', borderRadius: '10px', height: '220px', objectFit: 'cover'}} />
            <h2 style={{margin: '10px 0'}}>{item.name}</h2>
            <StarRating rating={item.rating || 4.5} />
            <p><b>Price:</b> <span style={{color: '#4CAF50', fontWeight: 'bold'}}>₹ {item.price}</span></p>
            <p><b>Category:</b> {item.category}</p>
            <p style={{fontSize: '14px', color: '#555'}}>Premium quality {item.category} for modern home. High comfort, durable wood, 5 star rated product. Perfect for living room.</p>
            <button onClick={()=>setShowView(false)} style={{width: '100%', background: 'black', color: 'white', padding: '12px', borderRadius: '8px', marginTop: '10px', border: 'none', fontWeight: 'bold'}}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

// MAIN HOME COMPONENT
function Home() {
  const initialData = [
    { id: 1, name: "Modern Sofa", price: "25000", category: "Sofa", rating: 4.8, image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&w=600" },
    { id: 2, name: "Luxury Sofa", price: "35000", category: "Sofa", rating: 4.9, image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=600" },
    { id: 3, name: "Comfort Sofa", price: "18000", category: "Sofa", rating: 4.5, image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&w=600" },
    { id: 4, name: "Wooden Chair", price: "8000", category: "Chair", rating: 4.6, image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&w=600" },
    { id: 5, name: "Office Chair", price: "12000", category: "Chair", rating: 4.7, image: "https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&w=600" },
    { id: 6, name: "Dining Chair", price: "6500", category: "Chair", rating: 4.4, image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&w=600" },
    { id: 7, name: "Coffee Table", price: "15000", category: "Table", rating: 4.8, image: "https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&w=600" },
    { id: 8, name: "Study Table", price: "10000", category: "Table", rating: 4.5, image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&w=600" },
    { id: 9, name: "Dining Table", price: "28000", category: "Table", rating: 4.9, image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&w=600" },
    { id: 10, name: "King Bed", price: "45000", category: "Bed", rating: 4.9, image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&w=600" },
    { id: 11, name: "Single Bed", price: "20000", category: "Bed", rating: 4.6, image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&w=600" },
    { id: 12, name: "Bunk Bed", price: "30000", category: "Bed", rating: 4.7, image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&w=600" },
  ];

  const [furnitures, setFurnitures] = useState(() => {
    const saved = localStorage.getItem("furnitures");
    return saved? JSON.parse(saved) : initialData;
  });
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    localStorage.setItem("furnitures", JSON.stringify(furnitures));
  }, [furnitures]);

  const handleDelete = (id) => {
    if(window.confirm("Delete cheyala?")){
      setFurnitures(furnitures.filter(f => f.id!== id));
    }
  };

  const handleEdit = (item) => {
    const newPrice = prompt(`New Price for ${item.name}:`, item.price);
    if(newPrice){
      setFurnitures(furnitures.map(f => f.id === item.id? {...f, price: newPrice} : f));
    }
  };

  let display = furnitures.filter(f => {
    const matchFilter = filter === "All" || f.category === filter;
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  if(sort === "low") display = [...display].sort((a,b) => Number(a.price) - Number(b.price));
  if(sort === "high") display = [...display].sort((a,b) => Number(b.price) - Number(a.price));

  return (
    <div style={{padding: '20px', background: '#f5f5f5', minHeight: '100vh'}}>
      <h1 style={{textAlign: 'center', background: '#FFC107', padding: '15px', borderRadius: '10px'}}>FURNITURE HUB - {display.length} Products</h1>

      <div style={{display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', margin: '20px 0'}}>
        {["All","Sofa","Chair","Table","Bed"].map(cat => (
          <button key={cat} onClick={()=>setFilter(cat)} style={{padding: '8px 16px', borderRadius: '20px', border: 'none', background: filter===cat? 'black' : 'white', color: filter===cat? 'white' : 'black', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'}}>{cat}</button>
        ))}
        <select onChange={e=>setSort(e.target.value)} style={{padding: '8px', borderRadius: '20px'}}>
          <option value="">Sort By</option>
          <option value="low">Price Low to High</option>
          <option value="high">Price High to Low</option>
        </select>
        <input placeholder="Search..." value={search} onChange={e=>setSearch(e.target.value)} style={{padding: '8px 15px', borderRadius: '20px', border: '1px solid #ddd'}} />
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px'}}>
        {display.map(item => (
          <ProductCard key={item.id} item={item} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
}

export default Home;