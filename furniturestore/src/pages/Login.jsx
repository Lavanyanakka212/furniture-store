import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login(){
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(email === "admin@gmail.com" && pass === "12345"){
      localStorage.setItem("isLogin", "true");
      nav("/");
    } else {
      alert("Invalid! Use admin@gmail.com / 12345");
    }
  }

  return(
    <form onSubmit={handleLogin} style={{width:"350px", margin:"80px auto", display:"flex", flexDirection:"column", gap:"15px", border:"1px solid #ccc", padding:"20px", borderRadius:"8px"}}>
      <h2>Login</h2>
      <p style={{fontSize:"12px"}}>admin@gmail.com / 12345</p>
      <input type="email" placeholder="Email" required value={email} onChange={e=>setEmail(e.target.value)} style={{padding:"10px"}} />
      <input type="password" placeholder="Password" required value={pass} onChange={e=>setPass(e.target.value)} style={{padding:"10px"}} />
      <button type="submit" style={{padding:"10px", background:"#0f172a", color:"white", border:"none", cursor:"pointer"}}>Login</button>
    </form>
  )
}