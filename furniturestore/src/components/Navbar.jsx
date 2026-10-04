import { Link, useNavigate } from "react-router-dom";
export default function Navbar(){
  const nav = useNavigate();
  const isLogin = localStorage.getItem("isLogin");
  const logout = () => {
    localStorage.removeItem("isLogin");
    nav("/login");
  }
  return(
    <nav style={{background:"#0f172a", padding:"15px 30px", display:"flex", gap:"20px"}}>
      <Link to="/" style={{color:"white", textDecoration:"none"}}>Furniture Store</Link>
      <Link to="/" style={{color:"white", textDecoration:"none"}}>Home</Link>
      <Link to="/add" style={{color:"white", textDecoration:"none"}}>Add Furniture</Link>
      {isLogin ? <button onClick={logout} style={{marginLeft:"auto", cursor:"pointer"}}>Logout</button> : 
      <Link to="/login" style={{color:"white", textDecoration:"none", marginLeft:"auto"}}>Login</Link>}
    </nav>
  )
}